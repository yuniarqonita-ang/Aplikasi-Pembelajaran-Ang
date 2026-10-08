/* ===================================================================
   SPEECH.JS - Web Speech API Engine (Enhanced Dual Accent & Instant Play)
   Dukungan Aksen Asli Bahasa Indonesia (id-ID) & English (en-US),
   Tombol Toggle Putar/Berhenti (Play/Stop), dan Warm-up Anti Macet.
   =================================================================== */

class SpeechEngine {
  constructor() {
    this.synth = window.speechSynthesis || null;
    this.recognition = null;
    this.isListening = false;
    this.isSpeaking = false;
    this.currentText = "";
    this.activeButton = null;
    this.voices = [];

    this.initVoices();
    this.initRecognition();
    this.initWarmUp();
  }

  // Pre-load dan simpan daftar suara agar langsung siap pada klik pertama
  initVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = () => {
        this.voices = this.synth.getVoices();
      };
    }
  }

  // Wake-up audio context pada interaksi pertama agar suara langsung menyala tanpa jeda
  initWarmUp() {
    const unlock = () => {
      if (this.synth) {
        this.synth.resume();
      }
      document.removeEventListener('click', unlock);
      document.removeEventListener('touchstart', unlock);
    };
    document.addEventListener('click', unlock, { once: true });
    document.addEventListener('touchstart', unlock, { once: true });
  }

  initRecognition() {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRec) {
      this.recognition = new SpeechRec();
      this.recognition.lang = 'en-US';
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
    }
  }

  /**
   * Deteksi otomatis apakah teks berbahasa Indonesia atau Inggris
   */
  detectLanguage(text) {
    if (!text) return "id-ID";
    const clean = " " + text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ') + " ";
    const idMarkers = [
      " yang ", " dan ", " di ", " ini ", " itu ", " kamu ", " saya ", " aku ", 
      " adalah ", " karena ", " bukan ", " kenapa ", " jawaban ", " pilihan ", 
      " soal ", " artinya ", " bayangkan ", " untuk ", " dengan ", " bisa ", 
      " sudah ", " tidak ", " pada ", " dalam ", " seperti ", " tapi ", " heboh ", 
      " mantap ", " betul ", " salah ", " benar ", " halo ", " dengarkan ", " tepat "
    ];
    let idScore = 0;
    for (const marker of idMarkers) {
      if (clean.includes(marker)) idScore++;
    }
    return idScore >= 1 ? "id-ID" : "en-US";
  }

  /**
   * Cari suara terbaik di perangkat untuk bahasa yang diminta
   */
  getBestVoice(lang) {
    if (!this.voices || this.voices.length === 0) {
      this.voices = this.synth.getVoices();
    }

    if (lang === "id-ID") {
      // Prioritas 1: Suara Bahasa Indonesia Asli
      const idVoice = this.voices.find(v => 
        (v.lang && (v.lang === 'id-ID' || v.lang.startsWith('id'))) ||
        (v.name && (v.name.toLowerCase().includes('indonesia') || v.name.toLowerCase().includes('gadis') || v.name.toLowerCase().includes('ardi')))
      );
      if (idVoice) return idVoice;
    } else {
      // Prioritas 2: Suara English Alami
      const enVoice = this.voices.find(v => 
        v.lang && v.lang.startsWith('en') && 
        (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Jenny') || v.name.includes('Zira'))
      );
      if (enVoice) return enVoice;

      const anyEnVoice = this.voices.find(v => v.lang && v.lang.startsWith('en'));
      if (anyEnVoice) return anyEnVoice;
    }
    return null;
  }

  /**
   * Berhenti bicara segera
   */
  stopSpeaking() {
    if (!this.synth) return;
    this.synth.cancel();
    this.isSpeaking = false;
    this.currentText = "";
    if (this.activeButton) {
      this.resetButtonState(this.activeButton);
      this.activeButton = null;
    }
  }

  /**
   * Kembalikan teks dan ikon tombol ke semula
   */
  resetButtonState(btn) {
    if (!btn) return;
    const origHtml = btn.getAttribute("data-orig-html");
    if (origHtml) {
      btn.innerHTML = origHtml;
      btn.classList.remove("speaking-active");
    }
  }

  /**
   * PUTAR SUARA (TEXT-TO-SPEECH) DENGAN TOGGLE STOP & AKSEN OTOMATIS
   * @param {string} text Teks yang akan dibacakan
   * @param {number} rate Kecepatan bicara (0.5 - 1.5)
   * @param {HTMLElement|string|null} btnOrSelector Tombol pemanggil (opsional, untuk toggle play/stop)
   * @param {string|null} explicitLang Pilihan bahasa manual ("id-ID" / "en-US")
   */
  speakText(text, rate = 0.85, btnOrSelector = null, explicitLang = null) {
    if (!this.synth) {
      alert("Browser kamu belum mendukung Text-to-Speech. Coba gunakan Google Chrome!");
      return;
    }

    // Resolusi elemen tombol jika ada
    let btn = null;
    if (typeof btnOrSelector === 'string') {
      btn = document.querySelector(btnOrSelector);
    } else if (btnOrSelector instanceof HTMLElement) {
      btn = btnOrSelector;
    }

    // TOGGLE STOP: Jika sedang membaca teks yang sama ATAU tombol yang sama ditekan lagi, matikan suara!
    if (this.isSpeaking && (this.currentText === text || this.activeButton === btn)) {
      this.stopSpeaking();
      return;
    }

    // Hentikan suara sebelumnya sebelum memulai yang baru
    this.stopSpeaking();

    // WAKE UP SYNTH (Anti Macet di Chrome / Android / iOS)
    this.synth.resume();

    const targetLang = explicitLang || this.detectLanguage(text);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = targetLang;
    utterance.rate = rate;
    utterance.pitch = 1.0;

    const chosenVoice = this.getBestVoice(targetLang);
    if (chosenVoice) {
      utterance.voice = chosenVoice;
    }

    // Ubah status tombol jadi "⏹️ Berhenti" jika ada tombol
    if (btn) {
      if (!btn.getAttribute("data-orig-html")) {
        btn.setAttribute("data-orig-html", btn.innerHTML);
      }
      btn.innerHTML = "⏹️ Berhenti";
      btn.classList.add("speaking-active");
      this.activeButton = btn;
    }

    this.isSpeaking = true;
    this.currentText = text;

    utterance.onstart = () => {
      this.isSpeaking = true;
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.currentText = "";
      if (btn) {
        this.resetButtonState(btn);
        if (this.activeButton === btn) this.activeButton = null;
      }
    };

    utterance.onerror = (e) => {
      console.warn("Speech synthesis error", e);
      this.isSpeaking = false;
      this.currentText = "";
      if (btn) {
        this.resetButtonState(btn);
        if (this.activeButton === btn) this.activeButton = null;
      }
    };

    // Eksekusi pemutaran suara
    this.synth.speak(utterance);
  }

  // SPEAKING (Speech to Text + Evaluasi Kesesuaian)
  startListening(targetSentence, onResultCallback, onErrorCallback) {
    if (!this.recognition) {
      alert("Fitur mikrofon membutuhkan browser yang mendukung Web Speech API (sangat disarankan Google Chrome atau Microsoft Edge di PC/HP).");
      if (onErrorCallback) onErrorCallback("Browser tidak mendukung Speech Recognition");
      return;
    }

    if (this.isListening) {
      this.stopListening();
      return;
    }

    this.isListening = true;

    this.recognition.onstart = () => {
      this.isListening = true;
    };

    this.recognition.onresult = (event) => {
      this.isListening = false;
      const spokenText = event.results[0][0].transcript.trim();
      const evaluation = this.evaluatePronunciation(targetSentence, spokenText);
      if (onResultCallback) onResultCallback(evaluation);
    };

    this.recognition.onerror = (event) => {
      this.isListening = false;
      if (onErrorCallback) onErrorCallback(event.error);
    };

    this.recognition.onend = () => {
      this.isListening = false;
    };

    try {
      this.recognition.start();
    } catch (e) {
      this.isListening = false;
      console.warn("Recognition start error", e);
    }
  }

  stopListening() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }
  }

  // Evaluasi Kemiripan Kata Demi Kata
  evaluatePronunciation(target, spoken) {
    const cleanWord = (w) => w.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()?'"]/g, "").trim();
    const targetWords = target.split(/\s+/).map(cleanWord).filter(Boolean);
    const spokenWords = spoken.split(/\s+/).map(cleanWord).filter(Boolean);

    let matchCount = 0;
    const wordAnalysis = targetWords.map(tWord => {
      const isMatched = spokenWords.includes(tWord);
      if (isMatched) matchCount++;
      return {
        word: tWord,
        matched: isMatched
      };
    });

    const accuracy = targetWords.length > 0 
      ? Math.round((matchCount / targetWords.length) * 100) 
      : 0;

    let grade = "Coba Lagi";
    let comment = "Belum begitu jelas. Jangan ragu, coba ucapkan lebih lantang!";
    if (accuracy >= 85) {
      grade = "Luar Biasa! (Excellent)";
      comment = "Aksen dan pelafalanmu sangat jelas dan percaya diri!";
    } else if (accuracy >= 65) {
      grade = "Bagus Sekali! (Good Job)";
      comment = "Sudah sangat mendekati! Latih kata-kata yang ditandai merah ya.";
    } else if (accuracy >= 40) {
      grade = "Cukup Baik (Keep Practicing)";
      comment = "Sudah tertangkap sebagian kata. Dengarkan pelafalannya sekali lagi yuk!";
    }

    return {
      target,
      spoken,
      accuracy,
      grade,
      comment,
      wordAnalysis
    };
  }
}

// Global instance
const speechEngine = new SpeechEngine();
