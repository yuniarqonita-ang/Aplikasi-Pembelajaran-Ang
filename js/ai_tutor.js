/* ===================================================================
   AI_TUTOR.JS - ASISTEN AI KODI & ENGINE PENJELASAN INTERAKTIF
   Menganalisis kenapa jawaban benar/salah secara mendalam,
   menyediakan kolom prompt bebas untuk bertanya ke AI, dan
   memberikan analogi bahasa bayi ramah pemula.
   =================================================================== */

class KodiAIEngine {
  constructor() {
    this.contexts = {}; // Map: containerId -> context
    this.speechRate = 0.85;
  }

  /**
   * Mendaftarkan dan merender panel penjelasan AI di dalam containerId
   */
  renderFeedback({
    containerId,
    isCorrect,
    question,
    userAnswer,
    correctAnswer,
    explanation,
    concept = "Dasar Teknologi & Bahasa",
    babyClue = "",
    choices = []
  }) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Simpan context untuk tanya-jawab lanjutan via prompt
    this.contexts[containerId] = {
      isCorrect,
      question,
      userAnswer,
      correctAnswer,
      explanation,
      concept,
      babyClue,
      choices,
      history: []
    };

    const ctx = this.contexts[containerId];

    // Buat naskah penjelasan AI "Kenapa Benar / Kenapa Salah"
    const analysis = this.generateAnalysis(ctx);

    const themeClass = isCorrect ? "ai-box-success" : "ai-box-error";
    const headerTitle = isCorrect
      ? "🎉 Analisis AI: Jawabanmu 100% Tepat!"
      : "😅 Analisis AI: Kenapa Pilihanmu Belum Pas?";

    container.style.display = "block";
    container.innerHTML = `
      <div class="kodi-ai-panel ${themeClass}">
        <!-- Header Panel AI -->
        <div class="ai-panel-header">
          <div class="ai-header-left">
            <div class="ai-badge-robot">🤖 AI</div>
            <div>
              <h4 class="ai-title-text">${headerTitle}</h4>
              <span class="ai-concept-tag">Topik: ${concept}</span>
            </div>
          </div>
          <button class="ai-speech-top-btn" onclick="kodiAI.speakExplanation('${containerId}', this)" title="Dengarkan Suara AI">
            🔊 Baca Penjelasan AI
          </button>
        </div>

        <!-- Badan Penjelasan Utama AI (Kenapa Benar / Kenapa Salah) -->
        <div class="ai-analysis-content">
          <div class="ai-verdict-banner ${isCorrect ? 'verdict-green' : 'verdict-rose'}">
            ${isCorrect 
              ? `<strong>✅ Pilihanmu:</strong> "${userAnswer}" adalah jawaban yang paling tepat!`
              : `<strong>⚠️ Pilihanmu:</strong> "${userAnswer}" masih kurang tepat. Jawaban yang benar adalah: <strong>"${correctAnswer}"</strong>`}
          </div>

          <div class="ai-deep-explanation">
            <h5 class="ai-section-subtitle">
              ${isCorrect ? '💡 Kenapa Jawaban Ini Benar?' : '🔍 Kenapa Pilihanmu Tadi Kurang Pas?'}
            </h5>
            <p class="ai-main-paragraph">${analysis.reason}</p>
          </div>

          <!-- Analogi Bahasa Bayi Kodi -->
          <div class="ai-baby-analogy-box">
            <div class="ai-baby-icon">🍼</div>
            <div class="ai-baby-text">
              <strong>Analogi Bahasa Bayi Kodi:</strong>
              <p>${analysis.analogy}</p>
            </div>
          </div>
        </div>

        <!-- Stream Riwayat Chat Prompt AI -->
        <div class="ai-chat-thread" id="ai-thread-${containerId}">
          <!-- Pesan follow-up akan muncul di sini saat user mengetik prompt -->
        </div>

        <!-- Quick Prompt Suggestion Pills -->
        <div class="ai-quick-pills-wrap">
          <span class="ai-pills-label">💡 Mau tahu lebih banyak? Coba klik prompt cepat ini:</span>
          <div class="ai-pills-container">
            <button class="ai-prompt-pill" onclick="kodiAI.applyPrompt('${containerId}', 'Jelasin lebih sederhana lagi dong kayak ke anak kecil!')">
              👶 Jelasin Lebih Sederhana
            </button>
            <button class="ai-prompt-pill" onclick="kodiAI.applyPrompt('${containerId}', 'Kasih contoh kejadian nyata di dunia kerja atau kantor!')">
              🏢 Contoh Kasus di Kantor/Pabrik
            </button>
            <button class="ai-prompt-pill" onclick="kodiAI.applyPrompt('${containerId}', 'Apa trik jembatan keledai supaya aku gampang ingat materi ini?')">
              🧠 Trik Cepat Mengingat
            </button>
            <button class="ai-prompt-pill" onclick="kodiAI.applyPrompt('${containerId}', 'Kenapa bukan pilihan yang lain? Apa bedanya?')">
              ❓ Kenapa Bukan Opsi Lain?
            </button>
          </div>
        </div>

        <!-- Kolom Input Prompt Tanya AI -->
        <div class="ai-prompt-input-area">
          <div class="ai-prompt-input-row">
            <input type="text" 
                   id="ai-prompt-input-${containerId}" 
                   class="ai-user-prompt-field" 
                   placeholder="💬 Ketik pertanyaan atau prompt bebas ke AI Kodi di sini (contoh: 'jelasin lagi dong', 'bedanya sama X apa?')..." 
                   autocomplete="off"
                   onkeydown="if(event.key === 'Enter') kodiAI.sendPrompt('${containerId}')">
            <button class="btn-primary ai-send-btn" onclick="kodiAI.sendPrompt('${containerId}')">
              🚀 Tanya AI Kodi
            </button>
          </div>
          <div class="ai-prompt-hint">
            💡 <em>Kamu bisa prompt atau bertanya apa saja ke AI Kodi untuk memperdalam materi ini tanpa rasa malu!</em>
          </div>
        </div>
      </div>
    `;

    // Scroll feedback into view smoothly
    container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  /**
   * Menghasilkan teks analisis mendalam berdasarkan status jawaban
   */
  generateAnalysis(ctx) {
    const { isCorrect, question, userAnswer, correctAnswer, explanation, concept, babyClue } = ctx;

    let reason = "";
    let analogy = "";

    if (isCorrect) {
      reason = explanation || `Jawaban ini sangat akurat karena secara logika dan kaidah ilmu "${concept}", '${userAnswer}' memenuhi seluruh kriteria yang diminta oleh soal. Ketika logika dasarnya sudah benar, maka sistem atau kalimat dapat bekerja tanpa ada konflik data atau kesalahan tata bahasa!`;
      
      analogy = babyClue || `Bayangkan kamu memasukkan kunci yang bentuk geriginya persis sama dengan lubang pintunya: 'klik', pintu langsung terbuka dengan mulus tanpa macet!`;
    } else {
      reason = `Pilihan '${userAnswer}' belum pas karena memiliki fungsi atau makna yang berbeda. ` +
        (explanation ? explanation : `Dalam kaidah "${concept}", kunci yang tepat adalah '${correctAnswer}'. `) +
        ` Kesalahan umum biasanya terjadi karena kemiripan istilah atau asumsi awal, tetapi dengan melihat perbedaan fungsinya, kita bisa langsung tahu kenapa '${correctAnswer}' adalah yang sesungguhnya dibutuhkan!`;

      analogy = babyClue || `Ibarat mau memotong roti tawar, tapi kamu memakai sendok sup. Sendok itu bagus buat sup, tapi buat roti kita butuh pisau ('${correctAnswer}') biar rotinya terpotong rapi!`;
    }

    return { reason, analogy };
  }

  /**
   * Mengisi input prompt dengan salah satu tombol saran cepat dan langsung mengirim
   */
  applyPrompt(containerId, text) {
    sfx.playClick();
    const input = document.getElementById(`ai-prompt-input-${containerId}`);
    if (input) {
      input.value = text;
      this.sendPrompt(containerId);
    }
  }

  /**
   * Menangani pengiriman prompt/pertanyaan dari user ke AI Kodi
   */
  sendPrompt(containerId) {
    sfx.playClick();
    const input = document.getElementById(`ai-prompt-input-${containerId}`);
    const thread = document.getElementById(`ai-thread-${containerId}`);
    const ctx = this.contexts[containerId];

    if (!input || !thread || !ctx) return;

    const userText = input.value.trim();
    if (!userText) return;

    // Bersihkan input field
    input.value = "";

    // Render pesan pertanyaan user di chat stream
    const userMsgHtml = `
      <div class="ai-chat-bubble user-bubble">
        <div class="bubble-header">🙋 Kamu Bertanya:</div>
        <div class="bubble-body">${this.escapeHtml(userText)}</div>
      </div>
    `;
    thread.innerHTML += userMsgHtml;

    // Tampilkan animasi loading AI sedang mengetik
    const loadingId = `ai-loading-${Date.now()}`;
    const loadingHtml = `
      <div class="ai-chat-bubble kodi-bubble" id="${loadingId}">
        <div class="bubble-header">🤖 AI Kodi sedang berpikir...</div>
        <div class="bubble-body"><span class="ai-dots-typing">⏳ Meramu jawaban bahasa bayi terbaik untukmu...</span></div>
      </div>
    `;
    thread.innerHTML += loadingHtml;
    thread.scrollTop = thread.scrollHeight;

    // Simulasi pemrosesan AI (cepat, responsif, dan kaya wawasan)
    setTimeout(() => {
      const loadingEl = document.getElementById(loadingId);
      if (loadingEl) loadingEl.remove();

      const aiReply = this.synthesizeAiResponse(userText, ctx);

      // Simpan riwayat
      ctx.history.push({ user: userText, ai: aiReply });

      const aiMsgHtml = `
        <div class="ai-chat-bubble kodi-bubble">
          <div class="bubble-header">
            <span>🤖 Jawaban AI Kodi:</span>
            <button class="ai-bubble-audio-btn" onclick="kodiAI.speakCustomText(this)" data-text="${this.escapeHtmlAttr(aiReply)}">
              🔊 Dengarkan
            </button>
          </div>
          <div class="bubble-body">${aiReply}</div>
        </div>
      `;

      thread.innerHTML += aiMsgHtml;
      thread.scrollTop = thread.scrollHeight;
      sfx.playSuccess();
    }, 450);
  }

  /**
   * Mesin Cerdas Berbasis Intent & Konteks Soal (Kodi Intelligence Engine)
   */
  synthesizeAiResponse(userPrompt, ctx) {
    const qLower = userPrompt.toLowerCase();
    const { question, userAnswer, correctAnswer, concept, explanation } = ctx;

    // INTENT 1: Minta penjelasan lebih sederhana / bahasa bayi
    if (qLower.includes("sederhana") || qLower.includes("bayi") || qLower.includes("gampang") || qLower.includes("simpel") || qLower.includes("bingung")) {
      return `
        🍼 <strong>Inti Super Gampangnya Begini:</strong><br>
        Kamu nggak perlu pusing dengan istilah teknisnya dulu! Intinya pada soal <em>"${this.escapeHtml(question)}"</em>:<br>
        • Yang kamu butuhkan adalah <strong>"${correctAnswer}"</strong>.<br>
        • Kenapa? Karena tugas utamanya adalah menyelesaikan masalah ini secara langsung tanpa perantara yang ribet.<br>
        • Bayangkan kayak kamu lapar: solusinya adalah makan nasi, bukan minum obat tidur. Nah, '${correctAnswer}' ini adalah nasi yang bikin kenyang!
      `;
    }

    // INTENT 2: Minta contoh nyata di dunia kerja, kantor, atau pabrik
    if (qLower.includes("kantor") || qLower.includes("kerja") || qLower.includes("dunia nyata") || qLower.includes("kasus") || qLower.includes("pabrik") || qLower.includes("contoh")) {
      return `
        🏢 <strong>Contoh Kasus Nyata di Kantor & Perusahaan:</strong><br>
        Misalkan kamu lagi bertugas sebagai staf IT atau profesional di sebuah perusahaan manufaktur/teknologi modern:<br>
        • Tiba-tiba ada user atau atasan kamu bilang: <em>"Tolong tangani masalah terkait ${this.escapeHtml(concept)}!"</em><br>
        • Nah, tindakan nyata yang kamu lakukan adalah menggunakan prinsip <strong>"${correctAnswer}"</strong>.<br>
        • Jika kamu keliru memakai cara lain, sistemnya bisa error atau pekerjaan tertunda. Tapi karena kamu tahu '${correctAnswer}', semua laporan langsung beres tepat waktu dan bos bangga padamu!
      `;
    }

    // INTENT 3: Minta trik jembatan keledai / cara cepat mengingat
    if (qLower.includes("trik") || qLower.includes("ingat") || qLower.includes("hafal") || qLower.includes("jembatan keledai") || qLower.includes("tips")) {
      return `
        🧠 <strong>Trik Jembatan Keledai Kodi:</strong><br>
        Supaya selamanya nempel di kepala dan nggak pernah lupa saat ujian atau tes kerja:<br>
        • Pasangkan kata kunci soal dengan <strong>huruf depan atau ciri khas '${correctAnswer}'</strong>.<br>
        • Ingat rumus 3 detik: <em>"${concept}"</em> ➔ Selalu ingat <strong>"${correctAnswer}"</strong>!<br>
        • Pejamkan mata sejenak, bayangkan simbol robot Kodi mengacungkan jempol ke arah '${correctAnswer}'. Selesai!
      `;
    }

    // INTENT 4: Kenapa bukan opsi lain / perbandingan
    if (qLower.includes("kenapa bukan") || qLower.includes("opsi lain") || qLower.includes("pilihan lain") || qLower.includes("bedanya") || qLower.includes("jebakan")) {
      return `
        ⚖️ <strong>Bedah Perbedaan & Jebakan Opsi Lain:</strong><br>
        Banyak orang terkecoh di soal ini karena sekilas opsi lain terdengar mirip! Tapi ini bedanya:<br>
        • Opsi yang kamu pilih atau opsi pengecoh punya tempat dan waktu yang berbeda. Mereka bukan jawaban yang salah secara total di dunia, tapi <strong>TIDAK COCOK</strong> untuk pertanyaan ini.<br>
        • Satu-satunya yang memenuhi syarat 100% adalah <strong>"${correctAnswer}"</strong> karena fungsi spesifiknya dirancang tepat untuk situasi ini!
      `;
    }

    // INTENT 5: Tanya seputar Bahasa Inggris, Grammar, atau TOEFL/IELTS
    if (qLower.includes("grammar") || qLower.includes("inggris") || qLower.includes("toefl") || qLower.includes("tenses") || qLower.includes("arti") || qLower.includes("rumus")) {
      return `
        📖 <strong>Kaidah Bahasa Inggris & Tes Internasional:</strong><br>
        Dalam standar tes TOEFL, IELTS, maupun komunikasi kerja bahasa Inggris:<br>
        • Pola kalimat menuntut keseimbangan antara Subjek, Kata Kerja (Verb), dan Makna Logis.<br>
        • Jawaban <strong>"${correctAnswer}"</strong> adalah bentuk yang sudah baku dan gramatikal benar.<br>
        • Kunci suksesnya: perhatikan petunjuk waktu dan pola kalimat sebelum titik kosongnya ya!
      `;
    }

    // INTENT 6: Tanya seputar SQL atau Database
    if (qLower.includes("sql") || qLower.includes("tabel") || qLower.includes("database") || qLower.includes("query") || qLower.includes("select") || qLower.includes("where")) {
      return `
        💾 <strong>Logika Kueri Database SQL:</strong><br>
        Di dunia database, komputer bekerja kayak kasir yang sangat patuh:<br>
        • Komputer hanya membaca apa yang kamu instruksikan. Di soal ini, kunci utamanya adalah <strong>"${correctAnswer}"</strong>.<br>
        • Perintah ini bertindak seperti saringan pasir yang hanya meloloskan data yang cocok dengan kriteria perusahaan!
      `;
    }

    // GENERAL INTENT: Pertanyaan bebas spesifik
    return `
      🤖 <strong>Jawaban AI Kodi untuk:</strong> "${this.escapeHtml(userPrompt)}"<br>
      Pertanyaan yang sangat bagus dan cerdas! Dalam konteks materi <em>${this.escapeHtml(concept)}</em>:<br>
      • Yang menjadi poros utamanya adalah pemahaman terhadap <strong>"${correctAnswer}"</strong>.<br>
      • Keterangan pendukung: ${explanation ? explanation : 'Kaidah ini adalah standar industri dan teori dasar yang wajib dikuasai!'}<br>
      • Tetap semangat ya, rasa penasaranmu ini adalah tanda calon profesional hebat masa depan! Ada yang mau ditanyakan lagi?
    `;
  }

  /**
   * Membacakan penjelasan utama AI dengan Speech Synthesis
   */
  speakExplanation(containerId, btn = null) {
    sfx.playClick();
    const ctx = this.contexts[containerId];
    if (!ctx) return;

    if (!btn) {
      btn = document.querySelector(`#${containerId} .ai-speech-top-btn`);
    }

    const textToSpeak = ctx.isCorrect
      ? `Hebat! Jawabanmu ${ctx.userAnswer} benar! ${ctx.explanation || ''}`
      : `Pilihanmu ${ctx.userAnswer} belum pas. Jawaban yang benar adalah ${ctx.correctAnswer}. ${ctx.explanation || ''}`;

    const clean = textToSpeak.replace(/<[^>]+>/g, '').trim();
    speechEngine.speakText(clean, this.speechRate, btn, "id-ID");
  }

  /**
   * Membacakan teks khusus (dari bubble chat user/AI)
   */
  speakCustomText(btnElement) {
    sfx.playClick();
    const text = btnElement ? btnElement.getAttribute("data-text") : null;
    if (!text) return;
    const clean = text.replace(/<[^>]+>/g, '').trim();
    speechEngine.speakText(clean, this.speechRate, btnElement, "id-ID");
  }

  escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  escapeHtmlAttr(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

// Inisialisasi Singleton Global AI Engine
window.kodiAI = new KodiAIEngine();
