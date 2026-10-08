/* ===================================================================
   SPEECH.JS - Web Speech API Engine
   Listening (Text-to-Speech) & Speaking (Speech Recognition + Koreksi)
   =================================================================== */

class SpeechEngine {
  constructor() {
    this.synth = window.speechSynthesis || null;
    this.recognition = null;
    this.isListening = false;
    this.initRecognition();
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

  // LISTENING (Text to Speech)
  speakText(text, rate = 0.85) {
    if (!this.synth) {
      alert("Browser kamu belum mendukung Text-to-Speech. Coba gunakan Google Chrome!");
      return;
    }

    this.synth.cancel(); // Stop any active speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = rate; // Sedikit lebih santai agar aksen terdengar jelas
    utterance.pitch = 1.0;

    // Cari suara English terbaik jika tersedia
    const voices = this.synth.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha')));
    if (enVoice) utterance.voice = enVoice;

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
