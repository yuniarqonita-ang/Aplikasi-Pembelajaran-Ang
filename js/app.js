// Stacked Mathematical Fractions Formatter (Donald Knuth Math Axis & Collinear Operator Alignment)
window.formatMathFractions = function(text) {
  if (!text || typeof text !== "string") return text || "";
  
  // 1. Mixed numbers (e.g., "2 1/2" or "3 3/4")
  var formatted = text.replace(/(^|\s)(\d+)\s+(\d+)\/(\d+)(?=[^\d\/]|$)/g, function(match, prefix, whole, num, den) {
    return prefix + '<span class="math-expr"><span class="math-whole">' + whole + '</span><span class="math-fraction"><span class="num">' + num + '</span><span class="den">' + den + '</span></span></span>';
  });

  // 2. Standalone fractions (e.g., "3/4" or "-5/8")
  formatted = formatted.replace(/(^|[^a-zA-Z0-9_\/])(-?\d+)\/(\d+)(?![a-zA-Z0-9_\/])/g, function(match, prefix, num, den) {
    return prefix + '<span class="math-fraction"><span class="num">' + num + '</span><span class="den">' + den + '</span></span>';
  });

  // 3. Mathematical operators & relations collinear on the Math Axis
  var tokens = formatted.split(/(<[^>]+>)/g);
  for (var i = 0; i < tokens.length; i++) {
    if (!tokens[i].startsWith('<')) {
      tokens[i] = tokens[i].replace(/(\s*)([\+\=\u00D7\u00F7\u00B1\u2260\u2248])(\s*)/g, function(m, sp1, op, sp2) {
        return ' <span class="math-op">' + op + '</span> ';
      });
      // True mathematical minus sign (Unicode U+2212)
      tokens[i] = tokens[i].replace(/(^|\s|\d)(\-)(\s|\d|$)/g, function(m, left, op, right) {
        return left + ' <span class="math-op">&minus;</span> ' + right;
      });
    }
  }
  return tokens.join('').replace(/\s{2,}/g, ' ');
};

/* ===================================================================
   APP.JS - LOGIKA UTAMA APLIKASI PEMBELAJARAN
   State, UI Render, Game Interactivity, SQL Trainer, English Studio,
   Confetti, Sertifikat, & PWA Mobile Installation
   =================================================================== */

// Global State
const appState = {
  stars: 0,
  completedLevels: [],
  currentLevelId: null,
  currentStepIndex: 0,
  playerName: "Siswa Hebat",
  hardwareSlotState: {},
  codeBlockOrder: [],
  currentSqlIndex: 0,
  sqlCategoryFilter: "all",
  currentOutputIndex: 0,
  outputCategoryFilter: "all",
  currentEnglishDrillIndex: 0,
  currentPuzzleIndex: 0,
  puzzleCategoryFilter: "all",
  currentIeltsIndex: 0,
  ieltsCategoryFilter: "all",
  currentIbtIndex: 0,
  currentIbtFilter: "all",
  ibtTimerInterval: null,
  ibtPrepInterval: null,
  currentDictationIndex: 0,
  currentDictationLevelFilter: 1,
  dictationHintRevealed: false,
  currentExcelIndex: 0,
  excelCategoryFilter: "all",
  excelCompleted: [],
  excelUserFormulas: {},
  deferredInstallPrompt: null,
  currentIhsIndex: 0,
  ihsUserAnswers: {},
  ihsCompletedList: [],
  ihsScore: 0,
  currentMathIndex: 0,
  mathUnitFilter: "all",
  mathCompleted: [],
};
window.appState = appState;

// Initialize State from LocalStorage
function loadProgress() {
  try {
    const saved = localStorage.getItem("kodi_it_academy_state") || localStorage.getItem("boti_it_academy_state");
    if (saved) {
      const parsed = JSON.parse(saved);
      appState.stars = parsed.stars || 0;
      appState.completedLevels = parsed.completedLevels || [];
      appState.playerName = parsed.playerName || "Siswa Hebat";
      appState.excelCompleted = parsed.excelCompleted || [];
      appState.mathCompleted = parsed.mathCompleted || [];
      appState.mathUserDrafts = parsed.mathUserDrafts || {};
    }
  } catch (e) {
    console.warn("Storage error", e);
  }
}

function saveProgress() {
  try {
    localStorage.setItem("kodi_it_academy_state", JSON.stringify({
      stars: appState.stars,
      completedLevels: appState.completedLevels,
      playerName: appState.playerName,
      excelCompleted: appState.excelCompleted || [],
      mathCompleted: appState.mathCompleted || [],
      mathUserDrafts: appState.mathUserDrafts || {}
    }));
  } catch (e) {
    console.warn("Storage error", e);
  }
}

// Kodi Mascot Speech Helper
function setKodiSpeech(text, subTip = "") {
  const msgEl = document.getElementById("kodi-msg");
  const tipEl = document.getElementById("kodi-subtip");
  if (msgEl) msgEl.innerHTML = text;
  if (tipEl) {
    tipEl.innerHTML = subTip ? `💡 <span>${subTip}</span>` : "";
  }
  sfx.playRobotChirp();
}

// Backward compatibility alias
const setBotiSpeech = setKodiSpeech;

// Render Level Quests on Home Map (Lengkap dengan Karakter Clay 3D Asli dari PDF)
function renderQuestGrid() {
  const container = document.getElementById("quest-grid-container");
  if (!container) return;

  container.innerHTML = "";

  levelsData.forEach((lvl, idx) => {
    const isCompleted = appState.completedLevels.includes(lvl.id);
    const card = document.createElement("div");
    card.className = `quest-card ${isCompleted ? 'completed' : ''}`;

    let starsDisplay = "⭐".repeat(lvl.starsReward);
    // Topic-matched IT & Hardware characters for Petualangan (Levels 1-8: ZERO Excel tiles!)
    const PETUALANGAN_AVATARS = [
      { num: "01", name: "Kodi Organ PC", role: "Arsitektur & Hardware Komputer" },
      { num: "02", name: "Kodi Logika", role: "Logika Boolean & CPU Processing" },
      { num: "03", name: "Kodi OS & UI", role: "Sistem Operasi Komputer & GUI" },
      { num: "04", name: "Kodi Jaringan", role: "Jaringan Komputer & Protokol IP" },
      { num: "05", name: "Kodi Algoritma", role: "Dasar Pemrograman & Logika Koding" },
      { num: "06", name: "Kodi Web App", role: "Aplikasi Modern & Scripting" },
      { num: "27", name: "Kodi Database & Inovasi", role: "Solusi Basis Data & Logika IT" },
      { num: "28", name: "Kodi Bintang Juara", role: "PBL Troubleshooting IT Support" }
    ];
    const petAvatar = PETUALANGAN_AVATARS[idx] || PETUALANGAN_AVATARS[0];
    const avatarUrl = `assets/illustrations/3d_tiles/tile_3d_${petAvatar.num}.png`;

    card.innerHTML = `
      <div>
        <div class="quest-header">
          <div style="display: flex; align-items: center; gap: 12px;">
            <img src="${avatarUrl}" class="quest-tile-img" alt="${petAvatar.name}" title="Pahlawan Misi IT #${petAvatar.num}: ${petAvatar.name} (${petAvatar.role})">
            <div class="quest-meta">
              <span class="quest-level-tag">${lvl.tag}</span>
              <h3>${lvl.shortTitle}</h3>
            </div>
          </div>
          <div class="quest-icon" style="font-size: 1.4rem;">${lvl.icon}</div>
        </div>
        <div class="quest-analogy">
          <strong>🍼 Bahasa Bayi:</strong> ${lvl.analogy}
        </div>
        <p class="quest-desc">${lvl.description}</p>
      </div>
      <div class="quest-footer">
        <span class="quest-stars">${starsDisplay}</span>
        <button class="btn-start-quest" onclick="openLevelModal(${lvl.id})">
          ${isCompleted ? 'Main Ulang 🔁' : 'Mulai Misi 🚀'}
        </button>
      </div>
    `;

    container.appendChild(card);
  });

  // Update Header Stats
  const starCountEl = document.getElementById("header-stars");
  if (starCountEl) starCountEl.textContent = `${appState.stars} Bintang`;

  const levelTagEl = document.getElementById("header-completed");
  if (levelTagEl) {
    levelTagEl.textContent = `${appState.completedLevels.length}/${levelsData.length} Selesai`;
  }
}

// Switch Main Navigation Tabs
function switchTab(tabName) {
  sfx.playClick();
  document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.tab === tabName);
  });
  document.querySelectorAll(".tab-content").forEach(content => {
    content.classList.toggle("active", content.id === `tab-${tabName}`);
  });

  if (tabName === 'sql-trainer') {
    renderSqlTrainer();
    setKodiSpeech(
      "Selamat datang di Studio Tes SQL & Output! Di sini kita bedah soal tabel dan tebak hasil koding khas tes perusahaan teknologi & manufaktur modern!",
      "Pilih 'Tabel Karyawan' atau 'Tabel Sepatu' untuk melihat isi datanya!"
    );
  } else if (tabName === 'code-trainer') {
    renderCodeTrainer();
    setKodiSpeech(
      "Selamat datang di Studio Koding Manual! Di sini kamu bisa praktik menulis sintaks langsung untuk HTML/CSS, JavaScript, Python, Java, dan C#!",
      "Pahami contoh soal di kotak atas, manfaatkan tombol shortcut untuk ngetik simbol kurung dan titik koma lebih cepat, lalu klik Uji & Jalankan Kode!"
    );
  } else if (tabName === 'excel-trainer') {
    renderExcelTrainer();
    setKodiSpeech(
      "Selamat datang di Studio Game Rumus Excel & Statistik Realtime! Ada 105 tantangan rumus kantor & materi statistik dosen langsung dipraktikkan di tabel spreadsheet!",
      "Ketik rumus di bilah formula fx, atau gunakan tombol bantuan chip di bawah tabel!"
    );
  } else if (tabName === 'it-tech-trainer') {
    renderItTechTrainer();
    setKodiSpeech(
      "Selamat datang di Laboratorium IT Tech & Jaringan! Ada 100 tantangan praktik standar CompTIA A+, Network+, Cisco CCNA, Security+, Algoritma & Automasi Python siap kamu taklukkan!",
      "Pahami contoh soal dan jawaban benar dulu di kotak atas, lalu pecahkan tantangan teknisnya!"
    );
  } else if (tabName === 'ihsaniyah-test') {
    renderIhsaniyahTest();
    setKodiSpeech(
      "Selamat datang di Math Formative Test 2 & Division Stories! 🎒 Soal resmi kurikulum SD Ihsaniyah Gajahmada Tegal (Kampus Al Hafidz) lengkap dengan Visual Interaktif!",
      "Isi identitas siswa, selesaikan 27 soal berurutan, atau klik menu 'Admin Panel Guru' di atas untuk melihat rekap nilai & kunci jawaban!"
    );
  } else if (tabName === 'admin-panel') {
    renderAdminPanelPage();
    const curSess = typeof isTeacherLoggedIn === "function" ? isTeacherLoggedIn() : false;
    if (curSess) {
      setKodiSpeech(
        `Selamat datang di Master Admin Panel, ${curSess.name}! 🛠️`,
        "Gunakan 4 sub-menu di atas: Overview Modul, Master Kunci Jawaban (880+ Soal), Rekap Nilai Siswa, atau Pusat Unduhan File!"
      );
    } else {
      setKodiSpeech(
        "Gerbang Masuk Master Admin & Guru 🛡️",
        "Area terbatas khusus Guru, Administrator, & Pengawas. Masukkan Username dan Password untuk mengakses panel kendali!"
      );
    }
  } else if (tabName === 'math-trainer') {
    renderMathTrainer();
    setKodiSpeech(
      "Welcome to Cambridge Bilingual Mathematics Studio! 📐 Ada 100 tantangan matematika kurikulum Cambridge Checkpoint & IGCSE lengkap dengan Nalar Bayi Kodi!",
      "Pahami Contoh Soal (Kasus A) terlebih dahulu, gunakan Virtual Math Pad untuk mengetik simbol pecahan, kuadrat, dan sudut, lalu klik Cek Jawaban Matematika!"
    );
  } else if (tabName === 'english-trainer') {
    renderEnglishTrainer();
    setKodiSpeech(
      "Welcome to English Studio! Di sini kita latihan Speaking Wawancara Kerja, Kosakata & Ejaan, IELTS Academic Studio (Cambridge), dan Bedah Buku TOEFL iBT Beasiswa S2 Luar Negeri!",
      "Tekan 🔊 untuk mendengar suara asli, coba timer speaking, lalu tekan 🎙️ untuk berbicara dan dapatkan skor pelafalanmu!"
    );
  } else if (tabName === 'shortcut-excel') {
    if (window.renderExcelShortcutStudio) renderExcelShortcutStudio();
    setKodiSpeech(
      "Selamat datang di Studio Simulasi Proyek Kantor Excel! 💼 Ada proyek nyata dari bos dan 53 pintasan keyboard resmi!",
      "Selesaikan checklist permintaan bos di atas! Spreadsheet Excel akan bertransformasi langsung saat kamu menekan pintasannya di keyboard!"
    );
  } else if (tabName === 'shortcut-word') {
    if (window.renderWordShortcutStudio) renderWordShortcutStudio();
    setKodiSpeech(
      "Selamat datang di Studio Simulasi Dokumen Word Nyata! 📝 Selesaikan proyek laporan eksekutif dari direksi!",
      "Tekan tombol keyboard laptopmu atau klik tombol aksi pintasan untuk melihat lembar A4 Word bertransformasi secara real-time!"
    );
  } else if (tabName === 'dictionary') {
    renderDictionary();
    setKodiSpeech(
      "Ini dia Kamus Bayi IT! Semua istilah rumit komputer udah aku terjemahin jadi bahasa yang gampang banget!",
      "Gunakan kolom pencarian di bawah untuk mencari istilah yang bikin penasaran."
    );
  } else if (tabName === 'sandbox') {
    initSandboxTerminal();
    setKodiSpeech(
      "Selamat datang di Sandbox Terminal bebas! Di sini kamu bisa bebas ngetik mantra apa aja tanpa takut rusak!",
      "Coba ketik 'help', 'ping google.com', atau 'systeminfo'."
    );
  } else if (tabName === 'certificate') {
    renderCertificateView();
  } else {
    setKodiSpeech(
      "Halo temanku! Siap berpetualang jadi pahlawan IT Support? Pilih salah satu misi di bawah ya!",
      "Klik tombol 'Mulai Misi' untuk langsung belajar sambil bermain!"
    );
  }
}

// ================= MODAL LEVEL CONTROLLER =================
function openLevelModal(levelId) {
  sfx.playClick();
  const level = levelsData.find(l => l.id === levelId);
  if (!level) return;

  appState.currentLevelId = levelId;
  appState.currentStepIndex = 0;

  const modal = document.getElementById("level-modal");
  const modalTitle = document.getElementById("modal-level-title");
  modalTitle.innerHTML = `${level.icon} ${level.title}`;

  modal.classList.add("active");
  renderModalStep();
}

function closeLevelModal() {
  sfx.playClick();
  const modal = document.getElementById("level-modal");
  modal.classList.remove("active");
  renderQuestGrid();
}

function renderModalStep() {
  const level = levelsData.find(l => l.id === appState.currentLevelId);
  if (!level) return;

  const step = level.steps[appState.currentStepIndex];
  const totalSteps = level.steps.length;

  const progressContainer = document.getElementById("modal-step-progress");
  progressContainer.innerHTML = "";
  for (let i = 0; i < totalSteps; i++) {
    const dot = document.createElement("div");
    dot.className = `progress-step ${i < appState.currentStepIndex ? 'done' : (i === appState.currentStepIndex ? 'active' : '')}`;
    progressContainer.appendChild(dot);
  }

  const bodyContainer = document.getElementById("modal-step-body");
  bodyContainer.innerHTML = `
    <h3 style="margin-bottom: 14px; color: var(--accent-cyan);">${step.stepTitle}</h3>
    ${step.concept}

    <!-- KOTAK CONTOH SOAL & JAWABAN BENAR DULU -->
    ${step.workedExample ? `
      <div class="worked-example-card" style="margin: 18px 0;">
        <div class="worked-example-header">
          <span class="we-badge">💡 CONTOH SOAL & JAWABAN BENAR DULU</span>
          <span class="we-sub">Pahami pola penyelesaian kasus serupa ini sebelum memulai tantangan!</span>
        </div>
        <div class="we-body">
          <div class="we-row">
            <span class="we-label">📝 Contoh Kasus / Soal Serupa:</span>
            <span class="we-text">${step.workedExample.sampleProblem}</span>
          </div>
          <div class="we-row">
            <span class="we-label">✅ Contoh Jawaban yang 100% Benar:</span>
            <code class="we-code">${step.workedExample.sampleAnswer}</code>
          </div>
          <div class="we-row">
            <span class="we-label">🍼 Analogi & Nalar Bahasa Bayi Kodi:</span>
            <span class="we-text">${step.workedExample.babyLogic}</span>
          </div>
        </div>
        <div class="we-divider">🎯 SEKARANG GILIRAN TANTANGAN ASLI UNTUK KAMU:</div>
      </div>
    ` : ''}

    <div id="interactive-workspace" class="interactive-game-area"></div>
    <div id="step-feedback-box" style="margin-top: 14px;"></div>
  `;

  const workspace = document.getElementById("interactive-workspace");

  if (step.interactiveType === "quiz-explain") {
    renderQuizStep(step, workspace);
  } else if (step.interactiveType === "match-hardware") {
    renderMatchHardwareStep(step, workspace);
  } else if (step.interactiveType === "terminal-mission") {
    renderTerminalMissionStep(step, workspace);
  } else if (step.interactiveType === "network-builder") {
    renderNetworkBuilderStep(step, workspace);
  } else if (step.interactiveType === "variable-playground") {
    renderVariablePlaygroundStep(step, workspace);
  } else if (step.interactiveType === "code-block-builder") {
    renderCodeBlockStep(step, workspace);
  } else if (step.interactiveType === "ticket-investigation") {
    renderTicketStep(step, workspace);
  } else if (step.interactiveType === "code-backup-mission") {
    renderBackupMissionStep(step, workspace);
  } else if (step.interactiveType === "ipos-pipeline") {
    renderIposPipelineStep(step, workspace);
  } else if (step.interactiveType === "storage-ladder") {
    renderStorageLadderStep(step, workspace);
  } else if (step.interactiveType === "software-sorter") {
    renderSoftwareSorterStep(step, workspace);
  } else if (step.interactiveType === "it-roles-match") {
    renderItRolesMatchStep(step, workspace);
  }

  const footerContainer = document.getElementById("modal-footer-actions");
  footerContainer.innerHTML = `
    <span style="font-size: 0.82rem; color: var(--text-muted);">
      Langkah ${appState.currentStepIndex + 1} dari ${totalSteps}
    </span>
    <div style="display: flex; gap: 10px;">
      <button class="btn-secondary" onclick="closeLevelModal()">Tutup</button>
      <button id="btn-next-step" class="btn-primary" style="display: none;" onclick="goToNextStep()">
        ${appState.currentStepIndex + 1 >= totalSteps ? 'Selesaikan Misi! 🏆' : 'Lanjut Langkah Berikutnya ➡️'}
      </button>
    </div>
  `;
}

function showStepSuccess(feedbackText) {
  sfx.playSuccess();
  const feedbackBox = document.getElementById("step-feedback-box");
  if (feedbackBox) {
    feedbackBox.innerHTML = `
      <div style="background: rgba(74, 222, 128, 0.15); border: 1.5px solid var(--accent-green); padding: 12px 18px; border-radius: 8px; color: #86efac; font-weight: 600;">
        🎉 ${feedbackText}
      </div>
    `;
  }
  const nextBtn = document.getElementById("btn-next-step");
  if (nextBtn) {
    nextBtn.style.display = "inline-block";
    nextBtn.scrollIntoView({ behavior: 'smooth' });
  }
}

function goToNextStep() {
  sfx.playClick();
  const level = levelsData.find(l => l.id === appState.currentLevelId);
  if (!level) return;

  if (appState.currentStepIndex + 1 < level.steps.length) {
    appState.currentStepIndex++;
    renderModalStep();
  } else {
    if (!appState.completedLevels.includes(level.id)) {
      appState.completedLevels.push(level.id);
      appState.stars += level.starsReward;
      saveProgress();
    }
    sfx.playLevelUp();
    triggerConfetti();
    closeLevelModal();

    setKodiSpeech(
      `HOREEE! Kamu berhasil menyelesaikan ${level.title}! Bintang bertambah +${level.starsReward}!`,
      "Kamu makin jago selangkah demi selangkah! Coba level berikutnya yuk!"
    );
  }
}

// 1. Quiz Step
function renderQuizStep(step, container) {
  container.innerHTML = `
    <p style="font-weight: 700; margin-bottom: 14px; font-size: 1rem;">${step.question}</p>
    <div style="display: flex; flex-direction: column; gap: 10px;">
      ${step.options.map((opt, idx) => `
        <button class="choice-card-btn" onclick="checkQuizAnswer(${idx})">
          ${opt.text}
        </button>
      `).join('')}
    </div>
  `;

  window.checkQuizAnswer = function(idx) {
    const choice = step.options[idx];
    const isCorrect = !!choice.correct;
    if (isCorrect) {
      sfx.playSuccess();
      const nextBtn = document.getElementById("btn-next-step");
      if (nextBtn) {
        nextBtn.style.display = "inline-block";
        nextBtn.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      sfx.playError();
    }
    kodiAI.renderFeedback({
      containerId: "step-feedback-box",
      isCorrect,
      question: step.question,
      userAnswer: choice.text,
      correctAnswer: (step.options.find(o => o.correct) || {}).text,
      explanation: choice.feedback,
      concept: step.stepTitle || "Kuis Konsep IT",
      babyClue: step.concept ? step.concept.replace(/<[^>]+>/g, '').slice(0, 150) + "..." : "",
      choices: step.options.map(o => o.text)
    });
  };
}

// 2. Match Hardware Clinic Step
function renderMatchHardwareStep(step, container) {
  let activeIndex = 0;

  function renderCurrentCase() {
    const currentCase = step.cases[activeIndex];
    container.innerHTML = `
      <div style="background: rgba(15, 23, 42, 0.9); padding: 16px; border-radius: 8px; margin-bottom: 16px;">
        <span style="font-size: 0.75rem; color: var(--accent-yellow); font-weight: 700;">Pasien ${activeIndex + 1} dari ${step.cases.length}</span>
        <h4 style="color: #fff; margin: 6px 0;">${currentCase.patient}</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted);">💡 Petunjuk Kodi: ${currentCase.hint}</p>
      </div>

      <p style="font-size: 0.88rem; font-weight: 700; margin-bottom: 10px;">Pilih organ penyembuh yang tepat:</p>
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <button class="choice-card-btn" style="flex: 1;" onclick="choosePart('RAM')">🪵 RAM (Meja Kerja)</button>
        <button class="choice-card-btn" style="flex: 1;" onclick="choosePart('SSD')">🧊 SSD (Kulkas File)</button>
        <button class="choice-card-btn" style="flex: 1;" onclick="choosePart('PSU')">⚡ PSU (Jantung Listrik)</button>
      </div>
    `;
  }

  window.choosePart = function(part) {
    const currentCase = step.cases[activeIndex];
    const isCorrect = part === currentCase.correctPart;
    if (isCorrect) {
      sfx.playSuccess();
      activeIndex++;
      if (activeIndex < step.cases.length) {
        renderCurrentCase();
      } else {
        container.innerHTML = `
          <div style="text-align: center; padding: 20px;">
            <div style="font-size: 3rem; margin-bottom: 8px;">🩺✨</div>
            <h3 style="color: var(--accent-green);">Semua Pasien Berhasil Disembuhkan!</h3>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Kamu punya insting dokter IT Support yang sangat tajam!</p>
          </div>
        `;
        const nextBtn = document.getElementById("btn-next-step");
        if (nextBtn) {
          nextBtn.style.display = "inline-block";
          nextBtn.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      sfx.playError();
    }
    kodiAI.renderFeedback({
      containerId: "step-feedback-box",
      isCorrect,
      question: `Pasien: ${currentCase.patient}`,
      userAnswer: part,
      correctAnswer: currentCase.correctPart,
      explanation: isCorrect 
        ? `Tepat sekali! Organ ${part} adalah komponen yang tepat untuk menyembuhkan ${currentCase.patient}.` 
        : `Komponen ${part} belum pas untuk keluhan ini. ${currentCase.hint}`,
      concept: "Hardware Klinik IT (RAM, SSD, PSU)",
      babyClue: currentCase.hint
    });
  };

  renderCurrentCase();
}

// 3. Terminal Mission Step
function renderTerminalMissionStep(step, container) {
  container.innerHTML = `
    <div style="margin-bottom: 12px;">
      <span style="font-size: 0.85rem; color: var(--accent-yellow); font-weight: 700;">🎯 Misi:</span>
      <span style="font-size: 0.9rem; color: #fff;">${step.goalDescription}</span>
    </div>

    <div class="terminal-window">
      <div class="terminal-header">
        <div class="terminal-dots">
          <div class="terminal-dot dot-red"></div>
          <div class="terminal-dot dot-yellow"></div>
          <div class="terminal-dot dot-green"></div>
        </div>
        <div class="terminal-title">PowerShell IT Command Simulator</div>
      </div>
      <div class="terminal-body" id="term-step-body">
        <div class="term-line info">Kodi OS Terminal v2.4 [Windows Emulation]</div>
        <div class="term-line">Ketik perintah di bawah dan tekan [Enter].</div>
        <div class="term-line" style="color: #64748b;">(Petunjuk: ${step.hint})</div>
      </div>
      <div class="term-input-row" style="padding: 10px 16px; background: #060911;">
        <span class="term-prompt">C:\\Users\\Support&gt;</span>
        <input type="text" id="term-step-input" class="term-input" placeholder="Ketik di sini..." autocomplete="off" />
      </div>
    </div>

    <div class="quick-commands">
      <span style="font-size: 0.78rem; color: var(--text-muted); align-self: center;">Tombol Cepat:</span>
      <button class="quick-cmd-btn" onclick="applyQuickCmd('${step.targetCommand}')">${step.targetCommand}</button>
      <button class="quick-cmd-btn" onclick="applyQuickCmd('help')">help</button>
      <button class="quick-cmd-btn" onclick="applyQuickCmd('cls')">cls</button>
    </div>
  `;

  const inputEl = document.getElementById("term-step-input");
  const bodyEl = document.getElementById("term-step-body");

  window.applyQuickCmd = function(cmd) {
    if (inputEl) {
      inputEl.value = cmd;
      executeStepCommand(cmd);
    }
  };

  inputEl.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      executeStepCommand(inputEl.value);
    }
  });

  function executeStepCommand(rawCmd) {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    sfx.playClick();
    bodyEl.innerHTML += `<div class="term-line"><span class="term-prompt">C:\\Users\\Support&gt;</span> ${cmd}</div>`;
    inputEl.value = "";

    if (cmd.toLowerCase() === step.targetCommand.toLowerCase()) {
      step.simulatedOutput.forEach(line => {
        bodyEl.innerHTML += `<div class="term-line ${line.startsWith('✓') ? 'success' : ''}">${line}</div>`;
      });
      bodyEl.scrollTop = bodyEl.scrollHeight;
      showStepSuccess(`Mantra '${step.targetCommand}' berhasil dieksekusi dengan sempurna!`);
      kodiAI.renderFeedback({
        containerId: "step-feedback-box",
        isCorrect: true,
        question: `Misi Terminal: ${step.goalDescription}`,
        userAnswer: cmd,
        correctAnswer: step.targetCommand,
        explanation: `Perintah '${step.targetCommand}' adalah mantra standar IT Support untuk ${step.goalDescription.toLowerCase()}.`,
        concept: "PowerShell & Terminal IT Support",
        babyClue: step.hint
      });
    } else if (cmd.toLowerCase() === 'cls' || cmd.toLowerCase() === 'clear') {
      bodyEl.innerHTML = `<div class="term-line info">Layar terminal dibersihkan.</div>`;
    } else if (cmd.toLowerCase() === 'help') {
      bodyEl.innerHTML += `
        <div class="term-line info">Mantra bantuan: Coba ketik perintah target: '${step.targetCommand}'</div>
      `;
    } else {
      sfx.playError();
      bodyEl.innerHTML += `
        <div class="term-line error">'${cmd}' bukan mantra yang diminta untuk misi ini.</div>
        <div class="term-line warning">Petunjuk: Ketik '${step.targetCommand}'</div>
      `;
      kodiAI.renderFeedback({
        containerId: "step-feedback-box",
        isCorrect: false,
        question: `Misi Terminal: ${step.goalDescription}`,
        userAnswer: cmd,
        correctAnswer: step.targetCommand,
        explanation: `'${cmd}' bukan perintah yang sesuai untuk misi ini. Perintah yang tepat adalah '${step.targetCommand}'. ${step.hint}`,
        concept: "PowerShell & Terminal IT Support",
        babyClue: step.hint
      });
    }
    bodyEl.scrollTop = bodyEl.scrollHeight;
  }
}

// 4. Network Builder Simulator Step
function renderNetworkBuilderStep(step, container) {
  container.innerHTML = `
    <p style="margin-bottom: 14px; font-size: 0.9rem;">${step.missionText}</p>
    <div class="network-canvas-wrap">
      <div class="cable-line" id="net-cable-1" style="left: 20%; width: 22%;"></div>
      <div class="cable-line" id="net-cable-2" style="left: 45%; width: 22%;"></div>
      <div class="cable-line" id="net-cable-3" style="left: 70%; width: 20%;"></div>

      <div class="net-node">
        <div class="node-icon-box" id="node-pc">💻</div>
        <span class="node-name">Laptop Kasir</span>
        <span class="node-ip">192.168.1.10</span>
      </div>

      <div class="net-node">
        <div class="node-icon-box" id="node-switch">🔀</div>
        <span class="node-name">Switch LAN</span>
        <span class="node-ip">Lantai 1</span>
      </div>

      <div class="net-node">
        <div class="node-icon-box" id="node-router">📡</div>
        <span class="node-name">Router</span>
        <span class="node-ip">Gateway 1.1</span>
      </div>

      <div class="net-node">
        <div class="node-icon-box" id="node-dns">🌍</div>
        <span class="node-name">Google DNS</span>
        <span class="node-ip">8.8.8.8</span>
      </div>
    </div>

    <div style="display: flex; gap: 12px; margin-top: 16px; justify-content: center;">
      <button id="btn-connect-cable" class="btn-primary" onclick="connectCables()">
        🔌 Sambungkan Semua Kabel LAN
      </button>
      <button id="btn-test-packet" class="btn-secondary" style="display: none;" onclick="sendDataPacket()">
        ✉️ Uji Kirim Paket Data
      </button>
    </div>
  `;

  window.connectCables = function() {
    sfx.playSuccess();
    document.querySelectorAll(".cable-line").forEach(c => c.classList.add("active"));
    document.querySelectorAll(".node-icon-box").forEach(n => n.classList.add("connected"));
    document.getElementById("btn-connect-cable").style.display = "none";
    document.getElementById("btn-test-packet").style.display = "inline-block";
  };

  window.sendDataPacket = function() {
    sfx.playRobotChirp();
    showStepSuccess("Paket data sukses meluncur dari Laptop Kasir sampai ke Server Internet tanpa halangan!");
    kodiAI.renderFeedback({
      containerId: "step-feedback-box",
      isCorrect: true,
      question: step.missionText,
      userAnswer: "Koneksi LAN & DNS Tersambung",
      correctAnswer: "Kabel UTP + Switch + Router Gateway + DNS 8.8.8.8",
      explanation: "Semua perangkat jaringan terhubung dengan benar mulai dari Layer 1 (kabel fisik) sampai Layer 3 (IP Gateway & DNS Server). Paket data bisa mengalir lancar tanpa tersesat!",
      concept: "Jaringan Komputer & Topologi LAN",
      babyClue: "Jaringan komputer itu mirip pipa air: pipa harus nyambung dari kran kasir, pompa switch, meteran router, sampai tandon internet!"
    });
  };
}

// 5. Variable Playground Step
function renderVariablePlaygroundStep(step, container) {
  container.innerHTML = `
    <p style="margin-bottom: 14px;">Mari kita bikin toples variabel buat robot Kodi!</p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; margin-bottom: 16px;">
      <div style="background: rgba(15, 23, 42, 0.8); border: 2px solid var(--accent-pink); border-radius: 10px; padding: 14px; text-align: center;">
        <span style="font-size: 2rem;">🫙</span>
        <div style="font-weight: 700; color: var(--accent-pink); font-size: 0.9rem;">Toples: nama_kucing</div>
        <input type="text" id="var-cat-input" value="Mochi" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: #fff; padding: 6px; border-radius: 4px; text-align: center; margin-top: 6px; width: 80%;" />
      </div>

      <div style="background: rgba(15, 23, 42, 0.8); border: 2px solid var(--accent-cyan); border-radius: 10px; padding: 14px; text-align: center;">
        <span style="font-size: 2rem;">🫙</span>
        <div style="font-weight: 700; color: var(--accent-cyan); font-size: 0.9rem;">Toples: stok_kertas</div>
        <input type="number" id="var-paper-input" value="50" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: #fff; padding: 6px; border-radius: 4px; text-align: center; margin-top: 6px; width: 80%;" />
      </div>
    </div>

    <div style="text-align: center;">
      <button class="btn-primary" onclick="runVariableTest()">🧪 Coba Panggil Isi Toples!</button>
    </div>
  `;

  window.runVariableTest = function() {
    const cat = document.getElementById("var-cat-input").value;
    const paper = document.getElementById("var-paper-input").value;
    showStepSuccess(`Toples 'nama_kucing' berisi "${cat}", dan toples 'stok_kertas' berisi ${paper} rim! Selamat, kamu sudah paham konsep variabel!`);
    kodiAI.renderFeedback({
      containerId: "step-feedback-box",
      isCorrect: true,
      question: "Konsep Variabel sebagai Wadah Toples Penyimpanan Nilai",
      userAnswer: `nama_kucing = "${cat}" (Teks), stok_kertas = ${paper} (Angka)`,
      correctAnswer: "Variabel menyimpan data sesuai tipe (String vs Number)",
      explanation: "Variabel bekerja persis seperti toples bertuliskan label stiker di dapur. Kamu bisa memasukkan dan mengganti isinya kapan pun selama program berjalan!",
      concept: "Dasar Pemrograman (Variabel & Tipe Data)",
      babyClue: "Toples teks menyimpan huruf di dalam tanda kutip; toples angka menyimpan bilangan murni untuk dihitung!"
    });
  };
}

// 6. Code Block Builder Step
function renderCodeBlockStep(step, container) {
  let placedBlocks = [];

  function renderBlocks() {
    container.innerHTML = `
      <p style="margin-bottom: 12px; font-size: 0.9rem;">${step.missionText}</p>
      <div class="code-blocks-container">
        <div class="code-bank">
          <h5 style="color: var(--accent-cyan); margin-bottom: 8px;">Balok Tersedia (Klik untuk pasang):</h5>
          <div id="available-blocks-list">
            ${step.availableBlocks
              .filter(b => !placedBlocks.includes(b.id))
              .map(b => `
                <div class="code-brick ${b.type}" onclick="addBlock('${b.id}')">
                  ${b.text} ➕
                </div>
              `).join('')}
          </div>
        </div>

        <div class="code-drop-target">
          <h5 style="color: var(--accent-yellow); margin-bottom: 8px;">Urutan Resep Robot Kodi:</h5>
          <div id="placed-blocks-list">
            ${placedBlocks.length === 0 ? '<p style="color: #64748b; font-size: 0.8rem; font-style: italic;">Klik balok di sebelah kiri untuk memasukkannya ke sini...</p>' : ''}
            ${placedBlocks.map((id, index) => {
              const b = step.availableBlocks.find(x => x.id === id);
              return `
                <div class="code-brick ${b.type}" onclick="removeBlock('${b.id}')">
                  ${index + 1}. ${b.text} ❌
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>

      <div style="display: flex; gap: 10px; margin-top: 14px; justify-content: flex-end;">
        <button class="btn-secondary" onclick="resetBlocks()">Reset Balok</button>
        <button class="btn-primary" onclick="verifyBlocks()">🚀 Jalankan Kode Resep!</button>
      </div>
    `;
  }

  window.addBlock = function(id) {
    sfx.playClick();
    placedBlocks.push(id);
    renderBlocks();
  };

  window.removeBlock = function(id) {
    sfx.playClick();
    placedBlocks = placedBlocks.filter(x => x !== id);
    renderBlocks();
  };

  window.resetBlocks = function() {
    sfx.playClick();
    placedBlocks = [];
    renderBlocks();
  };

  window.verifyBlocks = function() {
    const isExact = JSON.stringify(placedBlocks) === JSON.stringify(step.targetOrder);
    if (isExact) {
      sfx.playSuccess();
      const nextBtn = document.getElementById("btn-next-step");
      if (nextBtn) {
        nextBtn.style.display = "inline-block";
        nextBtn.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      sfx.playError();
    }
    kodiAI.renderFeedback({
      containerId: "step-feedback-box",
      isCorrect: isExact,
      question: step.missionText,
      userAnswer: placedBlocks.join(" ➔ ") || "(Belum ada balok)",
      correctAnswer: step.targetOrder.join(" ➔ "),
      explanation: isExact 
        ? "KODE BERHASIL DIJALANKAN! Kipas turbo server langsung menyala dan notifikasi HP terkirim!" 
        : "Urutan balok resepnya masih tertukar nih. Pastikan urutannya: JIKA suhu > 30 -> nyalakan kipas -> kirim peringatan -> SELAIN ITU -> kipas normal!",
      concept: "Urutan Algoritma & Logika Pemrograman",
      babyClue: "Komputer membaca instruksi langkah demi langkah dari atas ke bawah seperti resep membuat kue!"
    });
  };

  renderBlocks();
}

// 7. Helpdesk Ticket Step
function renderTicketStep(step, container) {
  container.innerHTML = `
    <div class="ticket-wrapper">
      <div class="ticket-chat-header">
        <div class="ticket-avatar">${step.userAvatar}</div>
        <div class="ticket-meta">
          <h4>${step.userName}</h4>
          <span class="ticket-tag">${step.ticketId} - Butuh Pertolongan Segera!</span>
        </div>
      </div>

      <div class="ticket-problem-text">
        <strong>Detail Masalah:</strong><br>
        ${step.problemDetails}
      </div>

      <p style="font-size: 0.88rem; font-weight: 700; margin-top: 8px;">Pilih Solusi IT Support yang Tepat:</p>
      <div class="action-choices-grid">
        ${step.choices.map((c, idx) => `
          <button class="choice-card-btn" onclick="handleTicketChoice(${idx})">
            ${c.label}
          </button>
        `).join('')}
      </div>
    </div>
  `;

  window.handleTicketChoice = function(idx) {
    const chosen = step.choices[idx];
    const isCorrect = !!chosen.correct;
    if (isCorrect) {
      sfx.playSuccess();
      const nextBtn = document.getElementById("btn-next-step");
      if (nextBtn) {
        nextBtn.style.display = "inline-block";
        nextBtn.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      sfx.playError();
    }
    kodiAI.renderFeedback({
      containerId: "step-feedback-box",
      isCorrect,
      question: `Tiket ${step.ticketId}: ${step.problemDetails}`,
      userAnswer: chosen.label,
      correctAnswer: (step.choices.find(c => c.correct) || {}).label,
      explanation: chosen.feedback,
      concept: "IT Helpdesk & Troubleshooting Triage",
      babyClue: "Selalu mulai dari hal paling fisik dan dasar (kabel lepas atau saklar mati) sebelum menyalahkan software!",
      choices: step.choices.map(c => c.label)
    });
  };
}

// 8. Backup Mission Step
function renderBackupMissionStep(step, container) {
  container.innerHTML = `
    <div class="ticket-wrapper">
      <div class="ticket-chat-header">
        <div class="ticket-avatar">${step.userAvatar}</div>
        <div class="ticket-meta">
          <h4>${step.userName}</h4>
          <span class="ticket-tag" style="background: rgba(56, 189, 248, 0.2); color: var(--accent-cyan);">${step.ticketId} - Permintaan Khusus</span>
        </div>
      </div>

      <div style="background: #060911; border: 1px solid #1e293b; border-radius: 8px; padding: 14px; font-family: var(--font-code); font-size: 0.85rem;">
        <span style="color: #64748b;">// Skrip Otomatisasi Backup IT Support</span><br>
        ${step.codeLines.map((line, idx) => `
          <div style="margin: 4px 0;">
            <span style="color: #38bdf8;">0${idx + 1}</span> 
            <span style="color: ${idx < 2 ? '#f472b6' : '#4ade80'};">${line}</span>
          </div>
        `).join('')}
      </div>

      <div style="text-align: center; margin-top: 14px;">
        <button id="btn-run-backup" class="btn-primary" onclick="simulateBackupRun()">
          ⚡ Jalankan Skrip Backup Otomatis
        </button>
      </div>

      <div id="backup-progress-wrap" style="display: none; margin-top: 16px;">
        <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 4px;">Menyalin berkas... <span id="backup-pct">0%</span></div>
        <div style="height: 10px; background: rgba(255,255,255,0.1); border-radius: 5px; overflow: hidden;">
          <div id="backup-bar" style="height: 100%; width: 0%; background: var(--accent-green); transition: width 0.3s;"></div>
        </div>
      </div>
    </div>
  `;

  window.simulateBackupRun = function() {
    sfx.playClick();
    document.getElementById("btn-run-backup").style.display = "none";
    const progWrap = document.getElementById("backup-progress-wrap");
    const bar = document.getElementById("backup-bar");
    const pct = document.getElementById("backup-pct");
    progWrap.style.display = "block";

    let p = 0;
    const interval = setInterval(() => {
      p += 25;
      bar.style.width = `${p}%`;
      pct.textContent = `${p}%`;
      if (p >= 100) {
        clearInterval(interval);
        showStepSuccess("PROYEK BERHASIL 100%! Semua data kantor Pak Bos tersimpan rapi dan aman di Flashdisk cadangan!");
        kodiAI.renderFeedback({
          containerId: "step-feedback-box",
          isCorrect: true,
          question: "Misi Skrip Otomasi Backup IT Support",
          userAnswer: "Skrip Backup Otomatis Berhasil Dijalankan",
          correctAnswer: "Pencadangan Berkas ke Media Eksternal",
          explanation: "Skrip backup menduplikasi data penting dari media penyimpanan utama ke flashdisk/drive cadangan secara terstruktur sehingga kantor terlindung dari risiko kehilangan data!",
          concept: "Manajemen Backup & Pemulihan Bencana IT",
          babyClue: "Backup itu seperti memfotokopi dokumen penting sebelum disimpan di brankas!"
        });
      }
    }, 400);
  };
}

// 9. IPOS Pipeline Step (Richard Fox Chapter 1)
function renderIposPipelineStep(step, container) {
  const iposItems = [
    { name: "Keyboard & Barcode Scanner Kasir", correct: "input", icon: "⌨️", hint: "Memasukkan data ketikan dan scan harga ke dalam mesin" },
    { name: "CPU (Processor Inti)", correct: "processing", icon: "🧠", hint: "Mengolah, menghitung, dan mengeksekusi instruksi data" },
    { name: "Layar Monitor & Printer Struk", correct: "output", icon: "🖥️", hint: "Menampilkan hasil gambar dan mencetak struk fisik ke manusia" },
    { name: "SSD / Flashdisk & Memori RAM", correct: "storage", icon: "💾", hint: "Menyimpan data dan resep program sementara atau permanen" },
    { name: "Mikrofon Suara", correct: "input", icon: "🎙️", hint: "Menangkap getaran suara dari luar untuk dimasukkan ke komputer" },
    { name: "Speaker Audio Kantor", correct: "output", icon: "🔊", hint: "Mengeluarkan gelombang suara musik atau nada notifikasi" }
  ];

  let currentIndex = 0;

  function renderCurrentItem() {
    const item = iposItems[currentIndex];
    container.innerHTML = `
      <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid var(--accent-cyan); border-radius: 12px; padding: 18px; margin-bottom: 16px; text-align: center;">
        <span style="font-size: 0.75rem; color: var(--accent-yellow); font-weight: 800; text-transform: uppercase;">
          Stasiun ${currentIndex + 1} dari ${iposItems.length}
        </span>
        <div style="font-size: 2.5rem; margin: 8px 0;">${item.icon}</div>
        <h3 style="color: #fff; margin: 0 0 6px 0;">${item.name}</h3>
        <p style="font-size: 0.85rem; color: #94a3b8; margin: 0;">💡 Petunjuk: ${item.hint}</p>
      </div>

      <p style="font-size: 0.88rem; font-weight: 700; margin-bottom: 10px; text-align: center;">Masuk ke tahapan Siklus IPOS mana perangkat ini?</p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 10px;">
        <button class="choice-card-btn" style="justify-content: center; font-weight: 700;" onclick="chooseIpos('input')">📥 1. INPUT</button>
        <button class="choice-card-btn" style="justify-content: center; font-weight: 700;" onclick="chooseIpos('processing')">⚙️ 2. PROCESSING</button>
        <button class="choice-card-btn" style="justify-content: center; font-weight: 700;" onclick="chooseIpos('output')">📤 3. OUTPUT</button>
        <button class="choice-card-btn" style="justify-content: center; font-weight: 700;" onclick="chooseIpos('storage')">💾 4. STORAGE</button>
      </div>
    `;
  }

  window.chooseIpos = function(chosen) {
    const item = iposItems[currentIndex];
    const isCorrect = chosen === item.correct;
    if (isCorrect) {
      sfx.playSuccess();
      currentIndex++;
      if (currentIndex < iposItems.length) {
        renderCurrentItem();
      } else {
        container.innerHTML = `
          <div style="text-align: center; padding: 20px;">
            <div style="font-size: 3rem; margin-bottom: 8px;">🏭✨</div>
            <h3 style="color: var(--accent-green);">Pabrik Siklus IPOS Sempurna!</h3>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Kamu sudah menguasai 4 pilar mutlak yang menyusun seluruh komputer di dunia!</p>
          </div>
        `;
        const nextBtn = document.getElementById("btn-next-step");
        if (nextBtn) {
          nextBtn.style.display = "inline-block";
          nextBtn.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      sfx.playError();
    }
    kodiAI.renderFeedback({
      containerId: "step-feedback-box",
      isCorrect,
      question: `Perangkat: ${item.name}`,
      userAnswer: chosen.toUpperCase(),
      correctAnswer: item.correct.toUpperCase(),
      explanation: isCorrect 
        ? `Tepat sekali! ${item.name} bertindak pada stasiun ${item.correct.toUpperCase()} karena fungsinya ${item.hint}.`
        : `Pilihan ${chosen.toUpperCase()} belum pas untuk ${item.name}. ${item.hint}`,
      concept: "Siklus IPOS (Input, Processing, Output, Storage) Fox Ch 1",
      babyClue: "Input = panca indera komputer; Processing = otak CPU berpikir; Output = layar & suara; Storage = ingatan & buku catatan!"
    });
  };

  renderCurrentItem();
}

// 10. Storage Ladder Step (Tabel 1.4 Storage Sizes)
function renderStorageLadderStep(step, container) {
  const ladderCases = [
    {
      challenge: "Menyimpan 1 buah saklar biner terkecil (hanya angka 0 atau 1, atau 1 pixel warna hitam/putih)",
      correct: "Bit",
      hint: "Unit terkecil di seluruh alam semesta komputer!"
    },
    {
      challenge: "Menyimpan tepat 1 huruf abjad (contoh: huruf 'K' atau angka '7')",
      correct: "Byte",
      hint: "Terdiri dari 8 bit saklar biner!"
    },
    {
      challenge: "Menyimpan 1 lembar email teks kantor pendek tanpa foto (sekitar 1.000 karakter)",
      correct: "KB",
      hint: "Kilobyte (sekitar 1.024 Bytes)!"
    },
    {
      challenge: "Menyimpan 1 lagu MP3 berkualitas jernih atau 1 lembar foto jepretan kamera smartphone",
      correct: "MB",
      hint: "Megabyte (sekitar 1.024 Kilobytes / sejuta karakter)!"
    },
    {
      challenge: "Menyimpan 1 file film bioskop HD berdurasi 2 jam atau lemari berisi 1.000 buku teks tebal",
      correct: "GB",
      hint: "Gigabyte (sekitar 1.024 Megabytes / semiliar karakter)!"
    },
    {
      challenge: "Menyimpan seluruh arsip database transaksi pabrik dan rekaman video keamanan kantor selama bertahun-tahun",
      correct: "TB",
      hint: "Terabyte (sekitar 1.024 Gigabytes / satu triliun karakter)!"
    }
  ];

  let currentCaseIndex = 0;

  function renderLadder() {
    const c = ladderCases[currentCaseIndex];
    container.innerHTML = `
      <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid var(--accent-yellow); border-radius: 12px; padding: 18px; margin-bottom: 16px;">
        <span style="font-size: 0.75rem; color: var(--accent-yellow); font-weight: 800; text-transform: uppercase;">
          Kasus ${currentCaseIndex + 1} dari ${ladderCases.length} (Tabel 1.4 Richard Fox)
        </span>
        <h4 style="color: #fff; margin: 8px 0 6px 0; font-size: 1.05rem;">"${c.challenge}"</h4>
        <p style="font-size: 0.85rem; color: #94a3b8; margin: 0;">💡 Petunjuk: ${c.hint}</p>
      </div>

      <p style="font-size: 0.88rem; font-weight: 700; margin-bottom: 10px; text-align: center;">Pilih satuan wadah penyimpanan yang tepat:</p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px;">
        <button class="choice-card-btn" style="justify-content: center; font-weight: 700;" onclick="chooseStorageUnit('Bit')">💡 Bit (0 atau 1)</button>
        <button class="choice-card-btn" style="justify-content: center; font-weight: 700;" onclick="chooseStorageUnit('Byte')">🔤 Byte (8 Bit)</button>
        <button class="choice-card-btn" style="justify-content: center; font-weight: 700;" onclick="chooseStorageUnit('KB')">📄 KB (Kilobyte)</button>
        <button class="choice-card-btn" style="justify-content: center; font-weight: 700;" onclick="chooseStorageUnit('MB')">🎵 MB (Megabyte)</button>
        <button class="choice-card-btn" style="justify-content: center; font-weight: 700;" onclick="chooseStorageUnit('GB')">🎬 GB (Gigabyte)</button>
        <button class="choice-card-btn" style="justify-content: center; font-weight: 700;" onclick="chooseStorageUnit('TB')">🏢 TB (Terabyte)</button>
      </div>
    `;
  }

  window.chooseStorageUnit = function(unit) {
    const c = ladderCases[currentCaseIndex];
    const isCorrect = unit === c.correct;
    if (isCorrect) {
      sfx.playSuccess();
      currentCaseIndex++;
      if (currentCaseIndex < ladderCases.length) {
        renderLadder();
      } else {
        container.innerHTML = `
          <div style="text-align: center; padding: 20px;">
            <div style="font-size: 3rem; margin-bottom: 8px;">🪜🌟</div>
            <h3 style="color: var(--accent-green);">Puncak Tangga Memori Berhasil Ditaklukkan!</h3>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Kamu sekarang paham bedanya Bit, Byte, KB, MB, GB, sampai TB!</p>
          </div>
        `;
        const nextBtn = document.getElementById("btn-next-step");
        if (nextBtn) {
          nextBtn.style.display = "inline-block";
          nextBtn.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      sfx.playError();
    }
    kodiAI.renderFeedback({
      containerId: "step-feedback-box",
      isCorrect,
      question: c.challenge,
      userAnswer: unit,
      correctAnswer: c.correct,
      explanation: isCorrect 
        ? `Benar sekali! Satuan ${unit} adalah wadah yang pas untuk ${c.challenge.toLowerCase()}.` 
        : `Satuan ${unit} belum pas untuk kapasitas ini. ${c.hint}`,
      concept: "Tangga Satuan Kapasitas Data Komputer (Tabel 1.4 Fox)",
      babyClue: "Bit = 1 butir saklar (0/1); Byte = 8 butir (1 huruf); KB = 1.000 byte; MB = 1 juta byte; GB = 1 miliar byte; TB = 1 triliun byte!"
    });
  };

  renderLadder();
}

// 11. Software Sorter Step (System Software vs Application Software)
function renderSoftwareSorterStep(step, container) {
  const softItems = [
    { name: "Windows 11 & Linux Ubuntu Server", type: "system", icon: "🪟", hint: "Sistem operasi pengendali perangkat keras komputer" },
    { name: "Microsoft Excel & Google Chrome", type: "app", icon: "📊", hint: "Program yang dipakai manusia untuk bekerja dan browsing" },
    { name: "macOS & Unix BSD", type: "system", icon: "🍎", hint: "Sistem operasi yang mengelola memori dan akun pengguna" },
    { name: "Adobe Photoshop & Spotify Music", type: "app", icon: "🎨", hint: "Aplikasi khusus untuk editing gambar dan memutar lagu" },
    { name: "Android OS & iOS Smartphone", type: "system", icon: "📱", hint: "Sistem operasi penggerak seluruh organ smartphone" },
    { name: "Game Mobile & WhatsApp Messenger", type: "app", icon: "🎮", hint: "Aplikasi chatting dan game yang diinstall oleh pengguna" }
  ];

  let currentSoftIndex = 0;

  function renderSoftItem() {
    const s = softItems[currentSoftIndex];
    container.innerHTML = `
      <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid var(--accent-cyan); border-radius: 12px; padding: 18px; margin-bottom: 16px; text-align: center;">
        <span style="font-size: 0.75rem; color: var(--accent-cyan); font-weight: 800; text-transform: uppercase;">
          Item ${currentSoftIndex + 1} dari ${softItems.length}
        </span>
        <div style="font-size: 2.5rem; margin: 8px 0;">${s.icon}</div>
        <h3 style="color: #fff; margin: 0 0 6px 0;">${s.name}</h3>
        <p style="font-size: 0.85rem; color: #94a3b8; margin: 0;">💡 Petunjuk: ${s.hint}</p>
      </div>

      <p style="font-size: 0.88rem; font-weight: 700; margin-bottom: 10px; text-align: center;">Masuk ke kelompok software yang mana?</p>
      <div style="display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
        <button class="choice-card-btn" style="flex: 1; min-width: 220px; justify-content: center; font-weight: 800;" onclick="chooseSoftType('system')">
          🏠 1. System Software (Sistem Operasi)
        </button>
        <button class="choice-card-btn" style="flex: 1; min-width: 220px; justify-content: center; font-weight: 800;" onclick="chooseSoftType('app')">
          📱 2. Application Software (Aplikasi Pengguna)
        </button>
      </div>
    `;
  }

  window.chooseSoftType = function(chosen) {
    const s = softItems[currentSoftIndex];
    const isCorrect = chosen === s.type;
    if (isCorrect) {
      sfx.playSuccess();
      currentSoftIndex++;
      if (currentSoftIndex < softItems.length) {
        renderSoftItem();
      } else {
        container.innerHTML = `
          <div style="text-align: center; padding: 20px;">
            <div style="font-size: 3rem; margin-bottom: 8px;">💿✨</div>
            <h3 style="color: var(--accent-green);">Klasifikasi Software Sempurna!</h3>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Kamu paham betul mana Sistem Operasi (Rumah) dan mana Aplikasi (Perkakas)!</p>
          </div>
        `;
        const nextBtn = document.getElementById("btn-next-step");
        if (nextBtn) {
          nextBtn.style.display = "inline-block";
          nextBtn.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      sfx.playError();
    }
    kodiAI.renderFeedback({
      containerId: "step-feedback-box",
      isCorrect,
      question: `Perangkat Lunak: ${s.name}`,
      userAnswer: chosen === 'system' ? 'System Software (OS)' : 'Application Software (Aplikasi)',
      correctAnswer: s.type === 'system' ? 'System Software (OS)' : 'Application Software (Aplikasi)',
      explanation: isCorrect 
        ? `Tepat sekali! ${s.name} adalah ${s.type === 'system' ? 'System Software karena mengontrol hardware' : 'Application Software yang membantu tugas manusia'}.` 
        : `Pilihanmu belum tepat untuk ${s.name}. ${s.hint}`,
      concept: "System Software vs Application Software (Fox Ch 1)",
      babyClue: "System Software itu pondasi rumah dan aliran listriknya; Application Software itu perabotan dan alat masak di dalamnya!"
    });
  };

  renderSoftItem();
}

// 12. IT Roles Match Step (Tabel 1.1 Administrator Roles)
function renderItRolesMatchStep(step, container) {
  const roleCases = [
    {
      incident: "Kabel fiber optic putus di lorong pabrik dan router internet lantai 2 mati mendadak!",
      role: "netadmin",
      roleTitle: "Network Administrator",
      hint: "Mengurus kabel, konektivitas, router, dan switch jaringan!"
    },
    {
      incident: "Perusahaan butuh me-restore backup tabel database transaksi sepatu yang tidak sengaja terhapus 2 jam lalu!",
      role: "dba",
      roleTitle: "Database Administrator (DBA)",
      hint: "Mengurus sistem basis data, backup tabel, dan integritas data SQL!"
    },
    {
      incident: "Terdeteksi percobaan intrusi hacker dari luar negeri yang membobol port 22, firewall harus diperketat!",
      role: "secadmin",
      roleTitle: "Security Administrator",
      hint: "Mengurus firewall, kebijakan keamanan, dan pencegahan serangan!"
    },
    {
      incident: "Kantor merekrut 50 karyawan baru, butuh dibuatkan akun login Windows, hak akses folder, dan skrip otomasi!",
      role: "sysadmin",
      roleTitle: "System Administrator",
      hint: "Mengurus akun pengguna, update sistem operasi server, dan skrip otomatisasi!"
    },
    {
      incident: "Layar monitor staf kasir mendadak hitam dan printer struk tidak menyala karena kabel power longgar!",
      role: "helpdesk",
      roleTitle: "IT Help Desk Specialist",
      hint: "Lini pertama yang membantu pengguna dengan masalah teknis sehari-hari!"
    }
  ];

  let currentRoleIndex = 0;

  function renderRoleCase() {
    const rc = roleCases[currentRoleIndex];
    container.innerHTML = `
      <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid var(--accent-pink); border-radius: 12px; padding: 18px; margin-bottom: 16px;">
        <span style="font-size: 0.75rem; color: var(--accent-pink); font-weight: 800; text-transform: uppercase;">
          Tiket Masuk #${currentRoleIndex + 1} dari ${roleCases.length} (Tabel 1.1 Richard Fox)
        </span>
        <h4 style="color: #fff; margin: 8px 0 6px 0; font-size: 1.05rem;">"${rc.incident}"</h4>
        <p style="font-size: 0.85rem; color: #94a3b8; margin: 0;">💡 Petunjuk: ${rc.hint}</p>
      </div>

      <p style="font-size: 0.88rem; font-weight: 700; margin-bottom: 10px; text-align: center;">Siapa Spesialis IT yang paling tepat menanganinya?</p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px;">
        <button class="choice-card-btn" style="justify-content: flex-start; font-weight: 700;" onclick="chooseRole('sysadmin')">👨‍💼 System Administrator</button>
        <button class="choice-card-btn" style="justify-content: flex-start; font-weight: 700;" onclick="chooseRole('netadmin')">🌐 Network Administrator</button>
        <button class="choice-card-btn" style="justify-content: flex-start; font-weight: 700;" onclick="chooseRole('dba')">🗄️ Database Administrator</button>
        <button class="choice-card-btn" style="justify-content: flex-start; font-weight: 700;" onclick="chooseRole('secadmin')">🛡️ Security Administrator</button>
        <button class="choice-card-btn" style="justify-content: flex-start; font-weight: 700;" onclick="chooseRole('helpdesk')">🎧 IT Help Desk</button>
      </div>
    `;
  }

  window.chooseRole = function(roleKey) {
    const rc = roleCases[currentRoleIndex];
    const isCorrect = roleKey === rc.role;
    if (isCorrect) {
      sfx.playSuccess();
      currentRoleIndex++;
      if (currentRoleIndex < roleCases.length) {
        renderRoleCase();
      } else {
        container.innerHTML = `
          <div style="text-align: center; padding: 20px;">
            <div style="font-size: 3rem; margin-bottom: 8px;">👥🏆</div>
            <h3 style="color: var(--accent-green);">Semua Tiket Berhasil Ditangani oleh Ahlinya!</h3>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Kamu memahami pembagian tugas resmi spesialis IT Tabel 1.1 Richard Fox dengan sempurna!</p>
          </div>
        `;
        const nextBtn = document.getElementById("btn-next-step");
        if (nextBtn) {
          nextBtn.style.display = "inline-block";
          nextBtn.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      sfx.playError();
    }
    kodiAI.renderFeedback({
      containerId: "step-feedback-box",
      isCorrect,
      question: rc.incident,
      userAnswer: roleKey.toUpperCase(),
      correctAnswer: rc.roleTitle,
      explanation: isCorrect 
        ? `Benar! Masalah ini adalah tanggung jawab utama ${rc.roleTitle} karena ${rc.hint}.` 
        : `Peran ${roleKey.toUpperCase()} bukan tugas yang menangani insiden ini. ${rc.hint}`,
      concept: "Spesialisasi Profesi IT Perusahaan (Tabel 1.1 Fox)",
      babyClue: "SysAdmin = pengelola server; NetAdmin = tukang kabel & internet; DBA = penjaga brankas data; HelpDesk = frontliner penolong staf!"
    });
  };

  renderRoleCase();
}

// ================= SQL TRAINER VIEW =================
function renderSqlTrainer() {
  const container = document.getElementById("sql-content-area");
  if (!container) return;

  appState.sqlCategoryFilter = appState.sqlCategoryFilter || "all";

  const allCategories = [
    "all",
    "1. SELECT Dasar",
    "2. Filter WHERE",
    "3. Operator Logika AND & OR",
    "4. Pencarian String LIKE",
    "5. Rentang BETWEEN & Himpunan IN",
    "6. Pengurutan ORDER BY & LIMIT",
    "7. Fungsi Agregasi",
    "8. Pengelompokan GROUP BY & HAVING",
    "9. Relasi Antar Tabel INNER JOIN",
    "10. Logika CASE WHEN & Transformasi"
  ];

  const filteredList = (appState.sqlCategoryFilter === "all")
    ? sqlChallenges.map((c, i) => ({ item: c, originalIndex: i }))
    : sqlChallenges
        .map((c, i) => ({ item: c, originalIndex: i }))
        .filter(x => x.item.category === appState.sqlCategoryFilter);

  if (appState.currentSqlIndex < 0 || appState.currentSqlIndex >= sqlChallenges.length) {
    appState.currentSqlIndex = 0;
  }

  let currentPos = filteredList.findIndex(x => x.originalIndex === appState.currentSqlIndex);
  if (currentPos === -1 && filteredList.length > 0) {
    appState.currentSqlIndex = filteredList[0].originalIndex;
    currentPos = 0;
  }

  const currentChal = sqlChallenges[appState.currentSqlIndex] || sqlChallenges[0];
  const tableData = mockDB[currentChal.tableName] || mockDB.Employees;

  container.innerHTML = `
    <!-- Switcher Tab Soal SQL vs Output -->
    <div class="sql-submode-switcher">
      <button class="choice-card-btn active-sql-mode" id="btn-mode-sql" onclick="switchSqlSubMode('queries')">
        🗄️ Soal Kueri SQL Tabel (100 Tantangan)
      </button>
      <button class="choice-card-btn" id="btn-mode-output" onclick="switchSqlSubMode('output')">
        🧪 Tebak Output Koding (100 Tantangan)
      </button>
    </div>

    <!-- SUBMODE 1: SQL TABLE QUERIES -->
    <div id="submode-queries">
      <!-- Navigasi & Filter Soal SQL 1 - 100 -->
      <div class="challenge-nav-bar">
        <div class="challenge-nav-controls">
          <label style="font-size: 0.8rem; font-weight: 700; color: var(--accent-cyan);">Kategori:</label>
          <select class="challenge-page-select" onchange="filterSqlCategory(this.value)">
            <option value="all" ${appState.sqlCategoryFilter === 'all' ? 'selected' : ''}>📂 Semua Kategori (${sqlChallenges.length} Soal)</option>
            ${allCategories.filter(cat => cat !== 'all').map(cat => `
              <option value="${cat}" ${appState.sqlCategoryFilter === cat ? 'selected' : ''}>${cat} (10 Soal)</option>
            `).join('')}
          </select>
        </div>

        <div class="challenge-nav-controls">
          <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem;" onclick="navSqlChallenge(-1)" ${currentPos <= 0 ? 'disabled' : ''}>
            ⬅️ Prev
          </button>
          <select class="challenge-page-select" onchange="setSqlChallenge(Number(this.value))">
            ${filteredList.map((x) => `
              <option value="${x.originalIndex}" ${x.originalIndex === appState.currentSqlIndex ? 'selected' : ''}>
                Soal #${x.originalIndex + 1}: ${x.item.title.split(':')[1] || x.item.title}
              </option>
            `).join('')}
          </select>
          <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem;" onclick="navSqlChallenge(1)" ${currentPos >= filteredList.length - 1 ? 'disabled' : ''}>
            Next ➡️
          </button>
        </div>
      </div>

      <!-- Quick Pills Selector -->
      <div class="challenge-pills-row" style="margin-bottom: 16px;">
        ${filteredList.map((x) => `
          <button class="quick-cmd-btn ${x.originalIndex === appState.currentSqlIndex ? 'active' : ''}" 
                  style="padding: 6px 12px; font-size: 0.8rem; font-weight: 700; white-space: nowrap;" 
                  onclick="setSqlChallenge(${x.originalIndex})">
            #${x.originalIndex + 1}
          </button>
        `).join('')}
      </div>

      <!-- Detail Soal & Tabel Database -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 18px; margin-bottom: 20px;">
        <div style="background: var(--bg-card); padding: 18px; border-radius: var(--radius-md); border: 1px solid var(--border-glow);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <h4 style="color: var(--accent-cyan);">📋 Database: Tabel '${currentChal.tableName}'</h4>
            <span style="font-size: 0.72rem; color: var(--accent-yellow); font-weight: 700;">${tableData.length} Baris Data</span>
          </div>
          ${renderHTMLTable(tableData, 'preview-source-table')}
        </div>

        <div style="background: var(--bg-card); padding: 18px; border-radius: var(--radius-md); border: 1px solid var(--border-glow);">
          <span style="font-size: 0.72rem; color: var(--accent-pink); font-weight: 700; text-transform: uppercase;">Pertanyaan Tes Tertulis (English)</span>
          <p style="font-weight: 700; color: #fff; margin: 8px 0; font-size: 0.95rem;">"${currentChal.questionEn}"</p>
          <div style="background: rgba(250, 204, 21, 0.1); border-left: 3px solid var(--accent-yellow); padding: 10px 14px; border-radius: 4px; font-size: 0.85rem; color: #fef08a; margin-top: 10px;">
            ${currentChal.babyHint}
          </div>
        </div>
      </div>

      <!-- KOTAK CONTOH SOAL & JAWABAN BENAR DULU -->
      ${currentChal.workedExample ? `
        <div class="worked-example-card">
          <div class="worked-example-header">
            <span class="we-badge">💡 CONTOH SOAL & JAWABAN BENAR DULU</span>
            <span class="we-sub">Pahami polanya dulu sebelum mengisi kueri di bawah!</span>
          </div>
          <div class="we-body">
            <div class="we-row">
              <span class="we-label">📝 Contoh Kasus Serupa:</span>
              <span class="we-text">${currentChal.workedExample.problemEn}</span>
            </div>
            <div class="we-row">
              <span class="we-label">✅ Kueri Contoh yang 100% Benar:</span>
              <code class="we-code">${currentChal.workedExample.correctQuery}</code>
            </div>
            <div class="we-row">
              <span class="we-label">🍼 Analogi & Nalar Bahasa Bayi:</span>
              <span class="we-text">${currentChal.workedExample.babyLogic.replace(/\\n/g, '<br>')}</span>
            </div>
          </div>
          <div class="we-divider">🎯 SEKARANG GILIRAN TANTANGAN ASLI UNTUK KAMU:</div>
        </div>
      ` : ''}

      <!-- SQL Console & Builder -->
      <div style="background: #060911; border: 1.5px solid #1e293b; border-radius: var(--radius-md); padding: 16px; margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <span style="font-family: var(--font-code); font-size: 0.85rem; color: var(--accent-cyan); font-weight: 700;">MSSQL Query Editor:</span>
          <span style="font-size: 0.75rem; color: var(--text-muted);">Tekan tombol balok atau ketik langsung</span>
        </div>

        <textarea id="sql-input-area" class="term-input" style="width: 100%; min-height: 70px; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 6px; padding: 10px; font-size: 0.9rem; color: #a7f3d0;" placeholder="Ketik kueri SQL di sini...">${currentChal.starterCode}</textarea>

        <div class="quick-commands" style="margin-top: 10px;">
          <span style="font-size: 0.75rem; color: var(--text-muted); align-self: center;">Bantuan Balok SQL:</span>
          ${currentChal.suggestedTokens.map(tok => `
            <button class="quick-cmd-btn" onclick="appendSqlToken('${tok}')">${tok}</button>
          `).join('')}
        </div>

        <div style="margin-top: 14px; text-align: right;">
          <button class="btn-primary" onclick="runSqlTestQuery()">
            🚀 Jalankan Kueri SQL (Run Query)
          </button>
        </div>
      </div>

      <!-- Hasil Kueri SQL -->
      <div id="sql-result-wrap" style="display: none; background: var(--bg-card); padding: 18px; border-radius: var(--radius-md); border: 1px solid var(--accent-green);">
        <h4 style="color: var(--accent-green); margin-bottom: 10px;">✓ Output Tabel Hasil Kueri:</h4>
        <div id="sql-result-table-box"></div>
        <div id="sql-ai-feedback-box" style="margin-top: 14px;"></div>
      </div>
    </div>

    <!-- SUBMODE 2: OUTPUT PREDICTION DRILL -->
    <div id="submode-output" style="display: none;"></div>
  `;

  window.filterSqlCategory = function(cat) {
    sfx.playClick();
    appState.sqlCategoryFilter = cat;
    renderSqlTrainer();
  };

  window.navSqlChallenge = function(delta) {
    sfx.playClick();
    const newPos = currentPos + delta;
    if (newPos >= 0 && newPos < filteredList.length) {
      appState.currentSqlIndex = filteredList[newPos].originalIndex;
      renderSqlTrainer();
    }
  };

  window.setSqlChallenge = function(idx) {
    sfx.playClick();
    appState.currentSqlIndex = idx;
    renderSqlTrainer();
  };

  window.appendSqlToken = function(tok) {
    sfx.playClick();
    const area = document.getElementById("sql-input-area");
    if (area) {
      area.value += (area.value ? " " : "") + tok;
    }
  };

  window.runSqlTestQuery = function() {
    const area = document.getElementById("sql-input-area");
    const rawVal = area.value.trim();
    const clean = (s) => s.toLowerCase().replace(/;/g, '').replace(/["']/g, "'").replace(/\s*,\s*/g, ', ').replace(/\s+/g, ' ').trim();
    
    const inputVal = clean(rawVal);
    const correctVal = clean(currentChal.correctQuery);

    const resultWrap = document.getElementById("sql-result-wrap");
    const tableBox = document.getElementById("sql-result-table-box");
    resultWrap.style.display = "block";

    const isExact = (inputVal === correctVal);
    const isTokensMatch = currentChal.suggestedTokens.every(tok => inputVal.includes(tok.toLowerCase().replace(/["']/g, "'")));
    const isMatch = isExact || (inputVal.includes("select") && isTokensMatch);

    if (isMatch) {
      sfx.playSuccess();
      tableBox.innerHTML = renderHTMLTable(currentChal.expectedRows, 'sql-output-preview');
    } else {
      sfx.playError();
      tableBox.innerHTML = `
        <div style="color: var(--accent-red); padding: 12px; font-weight: 700;">
          ⚠️ Kueri belum menghasilkan baris data yang pas. Coba cek analisis AI Kodi di bawah!
        </div>
      `;
    }

    kodiAI.renderFeedback({
      containerId: "sql-ai-feedback-box",
      isCorrect: isMatch,
      question: currentChal.questionEn,
      userAnswer: area.value || "(Kueri kosong)",
      correctAnswer: currentChal.correctQuery,
      explanation: isMatch
        ? `Kueri SQL kamu 100% tepat! Filter dan pemilihan kolom berhasil mengekstrak data dari tabel '${currentChal.tableName}' persis sesuai instruksi tes perusahaan!`
        : `Kueri yang kamu tulis belum menghasilkan data yang pas. Sintaks yang benar adalah: '${currentChal.correctQuery}'. Pastikan nama kolom, tabel, dan tanda kutip pada teks sudah sesuai ya!`,
      concept: `MSSQL Database (${currentChal.tableName})`,
      babyClue: currentChal.babyHint
    });

    resultWrap.scrollIntoView({ behavior: 'smooth' });
  };

  window.switchSqlSubMode = function(mode) {
    sfx.playClick();
    const qSec = document.getElementById("submode-queries");
    const oSec = document.getElementById("submode-output");
    const bQ = document.getElementById("btn-mode-sql");
    const bO = document.getElementById("btn-mode-output");

    if (mode === 'queries') {
      qSec.style.display = "block";
      oSec.style.display = "none";
      bQ.style.borderColor = "var(--accent-cyan)";
      bO.style.borderColor = "rgba(255,255,255,0.1)";
    } else {
      qSec.style.display = "none";
      oSec.style.display = "block";
      bO.style.borderColor = "var(--accent-cyan)";
      bQ.style.borderColor = "rgba(255,255,255,0.1)";
      renderOutputDrill();
    }
  };
}

// Render Tebak Output Koding
function renderOutputDrill() {
  const container = document.getElementById("submode-output");
  if (!container) return;

  appState.outputCategoryFilter = appState.outputCategoryFilter || "all";

  const outputLangs = [
    { key: "all", label: `📂 Semua Bahasa & Topik (${outputPredictionQuestions.length} Soal)` },
    { key: "JavaScript", label: "🟡 JavaScript (60 Soal)" },
    { key: "Python", label: "🐍 Python (10 Soal)" },
    { key: "C#", label: "🟣 C# .NET (10 Soal)" },
    { key: "Data Structure", label: "🌳 Struktur Data (10 Soal)" },
    { key: "SQL Logic", label: "🗄️ SQL Logic (10 Soal)" }
  ];

  const filteredList = (appState.outputCategoryFilter === "all")
    ? outputPredictionQuestions.map((q, i) => ({ item: q, originalIndex: i }))
    : outputPredictionQuestions
        .map((q, i) => ({ item: q, originalIndex: i }))
        .filter(x => x.item.lang === appState.outputCategoryFilter);

  if (appState.currentOutputIndex < 0 || appState.currentOutputIndex >= outputPredictionQuestions.length) {
    appState.currentOutputIndex = 0;
  }

  let currentPos = filteredList.findIndex(x => x.originalIndex === appState.currentOutputIndex);
  if (currentPos === -1 && filteredList.length > 0) {
    appState.currentOutputIndex = filteredList[0].originalIndex;
    currentPos = 0;
  }

  const q = outputPredictionQuestions[appState.currentOutputIndex] || outputPredictionQuestions[0];

  container.innerHTML = `
    <!-- Navigasi & Filter Soal Output 1 - 100 -->
    <div class="challenge-nav-bar">
      <div class="challenge-nav-controls">
        <label style="font-size: 0.8rem; font-weight: 700; color: var(--accent-cyan);">Bahasa:</label>
        <select class="challenge-page-select" onchange="filterOutputCategory(this.value)">
          ${outputLangs.map(l => `
            <option value="${l.key}" ${appState.outputCategoryFilter === l.key ? 'selected' : ''}>${l.label}</option>
          `).join('')}
        </select>
      </div>

      <div class="challenge-nav-controls">
        <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem;" onclick="navOutputChallenge(-1)" ${currentPos <= 0 ? 'disabled' : ''}>
          ⬅️ Prev
        </button>
        <select class="challenge-page-select" onchange="setOutputIndex(Number(this.value))">
          ${filteredList.map((x) => `
            <option value="${x.originalIndex}" ${x.originalIndex === appState.currentOutputIndex ? 'selected' : ''}>
              Soal #${x.originalIndex + 1} (${x.item.lang}): ${x.item.badge}
            </option>
          `).join('')}
        </select>
        <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem;" onclick="navOutputChallenge(1)" ${currentPos >= filteredList.length - 1 ? 'disabled' : ''}>
          Next ➡️
        </button>
      </div>
    </div>

    <!-- Quick Pills Selector -->
    <div class="challenge-pills-row" style="margin-bottom: 16px;">
      ${filteredList.map((x) => `
        <button class="quick-cmd-btn ${x.originalIndex === appState.currentOutputIndex ? 'active' : ''}" 
                style="padding: 6px 12px; font-size: 0.8rem; font-weight: 700; white-space: nowrap;" 
                onclick="setOutputIndex(${x.originalIndex})">
          #${x.originalIndex + 1} ${x.item.badge}
        </button>
      `).join('')}
    </div>

    <div style="background: var(--bg-card); padding: 22px; border-radius: var(--radius-md); border: 1px solid var(--border-glow); margin-bottom: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="font-size: 0.78rem; font-weight: 700; color: var(--accent-cyan);">${q.lang} • ${q.badge}</span>
        <span style="font-size: 0.75rem; color: var(--accent-yellow); font-weight: 700;">Soal ${appState.currentOutputIndex + 1} dari ${outputPredictionQuestions.length}</span>
      </div>

      <!-- KOTAK CONTOH TEBAK OUTPUT DULU -->
      ${q.workedExample ? `
        <div class="worked-example-card" style="margin-bottom: 16px;">
          <div class="worked-example-header">
            <span class="we-badge">💡 CONTOH SOAL & CARA NALAR DULU</span>
            <span class="we-sub">Pahami pola eksekusi kode serupa di bawah ini:</span>
          </div>
          <div class="we-body">
            <div class="we-row">
              <span class="we-label">📝 Kode Contoh Serupa:</span>
              <pre class="we-code-pre"><code>${q.workedExample.sampleCode.replace(/\\n/g, '\n')}</code></pre>
            </div>
            <div class="we-row">
              <span class="we-label">✅ Output yang Benar:</span>
              <code class="we-code">${q.workedExample.sampleAnswer}</code>
            </div>
            <div class="we-row">
              <span class="we-label">🍼 Langkah Nalar Eksekusi:</span>
              <span class="we-text">${q.workedExample.sampleLogic}</span>
            </div>
          </div>
          <div class="we-divider">🎯 SEKARANG TEBAK OUTPUT KODE TANTANGAN INI:</div>
        </div>
      ` : ''}

      <!-- Kode Snippet -->
      <pre style="background: #060911; border: 1px solid #1e293b; border-radius: 8px; padding: 14px; color: #38bdf8; font-family: var(--font-code); font-size: 0.92rem; overflow-x: auto; margin-bottom: 16px;"><code>${q.code}</code></pre>

      <h4 style="color: #fff; margin-bottom: 14px;">"${q.questionEn}"</h4>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-bottom: 16px;">
        ${q.options.map((opt, idx) => `
          <button class="choice-card-btn" style="justify-content: center; font-weight: 700; font-family: var(--font-code);" onclick="checkOutputAnswer(${idx})">
            ${opt.text}
          </button>
        `).join('')}
      </div>

      <div id="output-feedback-box" style="display: none;"></div>
    </div>
  `;

  window.filterOutputCategory = function(cat) {
    sfx.playClick();
    appState.outputCategoryFilter = cat;
    renderOutputDrill();
  };

  window.navOutputChallenge = function(delta) {
    sfx.playClick();
    const newPos = currentPos + delta;
    if (newPos >= 0 && newPos < filteredList.length) {
      appState.currentOutputIndex = filteredList[newPos].originalIndex;
      renderOutputDrill();
    }
  };

  window.setOutputIndex = function(idx) {
    sfx.playClick();
    appState.currentOutputIndex = idx;
    renderOutputDrill();
  };

  window.checkOutputAnswer = function(idx) {
    const opt = q.options[idx];
    const isCorrect = !!opt.correct;
    if (isCorrect) {
      sfx.playSuccess();
    } else {
      sfx.playError();
    }
    kodiAI.renderFeedback({
      containerId: "output-feedback-box",
      isCorrect,
      question: `${q.questionEn} (Kode: ${q.code.replace(/\n/g, ' ')})`,
      userAnswer: opt.text,
      correctAnswer: (q.options.find(o => o.correct) || {}).text,
      explanation: q.babyExplanation,
      concept: `Tebak Output Kode (${q.lang})`,
      babyClue: q.babyExplanation,
      choices: q.options.map(o => o.text)
    });
  };
}

// ================= ENGLISH TRAINER VIEW =================
appState.currentPuzzleIndex = 0;
appState.puzzleUserFilled = {};

function renderEnglishTrainer() {
  const container = document.getElementById("english-content-area");
  if (!container) return;

  const drill = cvInterviewSpeakingDrills[appState.currentEnglishDrillIndex] || cvInterviewSpeakingDrills[0];

  container.innerHTML = `
    <!-- Pilihan Aksen Bahasa Inggris (American vs British) -->
    <div class="accent-selector-card">
      <div class="accent-selector-info">
        <span class="accent-flag-icon">${speechEngine.englishAccent === 'en-GB' ? '🇬🇧' : '🇺🇸'}</span>
        <div>
          <div class="accent-card-title">Aksen Audio Pembaca: <span class="accent-card-val">${speechEngine.englishAccent === 'en-GB' ? 'British English (UK) 🇬🇧' : 'American English (US) 🇺🇸'}</span></div>
          <p class="accent-card-desc">Pilih logat yang kamu mau untuk listening, speaking, TOEFL & IELTS:</p>
        </div>
      </div>
      <div class="accent-pills-row">
        <button id="pill-accent-us" class="accent-pill-btn ${speechEngine.englishAccent === 'en-US' ? 'active' : ''}" onclick="setAccentPreference('en-US')">
          🇺🇸 Amerika (US)
        </button>
        <button id="pill-accent-gb" class="accent-pill-btn ${speechEngine.englishAccent === 'en-GB' ? 'active' : ''}" onclick="setAccentPreference('en-GB')">
          🇬🇧 British (UK)
        </button>
      </div>
    </div>

    <!-- Switcher 6 Mode English Studio (Dimulai dari Pondasi SD 4-5) -->
    <div class="eng-submode-grid">
      <button class="choice-card-btn" id="btn-mode-sentence" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.18), rgba(251, 191, 36, 0.25));" onclick="switchEnglishSubMode('sentence')">
        🚂 Gerbong Kalimat (SD 4-5)
      </button>
      <button class="choice-card-btn" id="btn-mode-puzzle" onclick="switchEnglishSubMode('puzzle')">
        🔤 Kosakata & Huruf
      </button>
      <button class="choice-card-btn active-eng-mode" id="btn-mode-spk" onclick="switchEnglishSubMode('speaking')">
        🎙️ Wawancara Kerja
      </button>
      <button class="choice-card-btn" id="btn-mode-ielts" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(56, 189, 248, 0.2));" onclick="switchEnglishSubMode('ielts')">
        🇬🇧 IELTS Academic
      </button>
      <button class="choice-card-btn" id="btn-mode-ibt" style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(168, 85, 247, 0.2));" onclick="switchEnglishSubMode('ibt')">
        🎓 TOEFL iBT S2
      </button>
      <button class="choice-card-btn" id="btn-mode-dictation" style="background: linear-gradient(135deg, rgba(244, 63, 94, 0.15), rgba(251, 146, 60, 0.2));" onclick="switchEnglishSubMode('dictation')">
        ✍️ Dikte & Ketik Suara
      </button>
    </div>

    <!-- SUBMODE 1: SPEAKING & WAWANCARA KERJA BERBASIS CV -->
    <div id="submode-speaking">
      <!-- Badge Profil Kandidat -->
      <div style="background: linear-gradient(135deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95)); border: 1.5px solid var(--accent-cyan); border-radius: 12px; padding: 14px 18px; margin-bottom: 18px; display: flex; align-items: center; gap: 14px;">
        <img src="assets/illustrations/3d_tiles/tile_3d_21.png" style="width: 60px; height: 60px; border-radius: 12px; object-fit: cover; border: 2px solid var(--accent-cyan); flex-shrink: 0; box-shadow: 0 4px 12px rgba(56, 189, 248, 0.25);" alt="Kodi Fluency Trainer" title="Kodi Fluency Trainer #21">
        <div>
          <div style="font-size: 0.75rem; color: var(--accent-cyan); font-weight: 800; text-transform: uppercase;">Profil Kandidat Talenta IT Unggulan:</div>
          <h4 style="color: #fff; margin: 2px 0;">Calon Profesional IT & Software</h4>
          <p style="font-size: 0.8rem; color: var(--text-muted);">
            Sarjana Pendidikan & MIPA (IPK 3.64) • Pengalaman Tata Kelola Web & TI • Desainer Grafis Bersertifikat BNSP
          </p>
        </div>
      </div>

      <!-- Filter Kategori Wawancara (100 Tantangan Berbobot) -->
      <div style="margin-bottom: 12px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <span style="font-size: 0.82rem; color: var(--accent-cyan); font-weight: 700;">
            📂 Kategori Soal Wawancara (${cvInterviewSpeakingDrills.length} Soal Praktik):
          </span>
          <span style="font-size: 0.8rem; color: var(--text-muted);">
            Soal <strong>${appState.currentEnglishDrillIndex + 1}</strong> dari <strong>${cvInterviewSpeakingDrills.length}</strong>
          </span>
        </div>
        <div style="margin-bottom: 8px;">
          <select class="challenge-page-select" style="width: 100%; font-weight: 700; padding: 6px 10px;" onchange="setSpeakingCategoryFilter(this.value)">
            <option value="all" ${(appState.speakingCategoryFilter || 'all') === 'all' ? 'selected' : ''}>📂 Semua Topik (${cvInterviewSpeakingDrills.length} Soal Wawancara)</option>
            ${Array.from(new Set(cvInterviewSpeakingDrills.map(d => d.category))).map(catName => {
              const count = cvInterviewSpeakingDrills.filter(d => d.category === catName).length;
              return `<option value="${catName}" ${(appState.speakingCategoryFilter || 'all') === catName ? 'selected' : ''}>${catName} (${count} Soal)</option>`;
            }).join('')}
          </select>
        </div>
        <div style="display: flex; gap: 6px; overflow-x: auto; padding-bottom: 6px;">
          <button class="filter-chip ${(appState.speakingCategoryFilter || 'all') === 'all' ? 'active' : ''}" 
                  style="padding: 5px 12px; font-size: 0.78rem; font-weight: 700; white-space: nowrap;" 
                  onclick="setSpeakingCategoryFilter('all')">
            Semua (${cvInterviewSpeakingDrills.length})
          </button>
          ${Array.from(new Set(cvInterviewSpeakingDrills.map(d => d.category))).map(catName => {
            const count = cvInterviewSpeakingDrills.filter(d => d.category === catName).length;
            const shortLabel = catName.split('.')[0] + '. ' + (catName.split('.')[1] ? catName.split('.')[1].trim() : catName);
            return `
              <button class="filter-chip ${(appState.speakingCategoryFilter || 'all') === catName ? 'active' : ''}" 
                      style="padding: 5px 12px; font-size: 0.78rem; font-weight: 700; white-space: nowrap;" 
                      onclick="setSpeakingCategoryFilter('${catName}')">
                ${shortLabel} (${count})
              </button>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Pilihan Pertanyaan Wawancara dalam Kategori -->
      <div style="display: flex; gap: 8px; margin-bottom: 16px; overflow-x: auto; padding-bottom: 6px; align-items: center;">
        <button class="btn-outline" style="padding: 6px 12px; font-size: 0.8rem;" onclick="prevSpeakingDrill()">◀ Prev</button>
        <select class="challenge-page-select" onchange="setEnglishDrillIndex(Number(this.value))">
          ${cvInterviewSpeakingDrills
            .map((d, idx) => ({ d, idx }))
            .filter(item => (appState.speakingCategoryFilter || 'all') === 'all' || item.d.category === appState.speakingCategoryFilter || item.d.category.startsWith(appState.speakingCategoryFilter))
            .map(item => `
              <option value="${item.idx}" ${item.idx === appState.currentEnglishDrillIndex ? 'selected' : ''}>
                Soal #${item.idx + 1}: ${item.d.titleEn}
              </option>
            `).join('')}
        </select>
        <button class="btn-outline" style="padding: 6px 12px; font-size: 0.8rem;" onclick="nextSpeakingDrill()">Next ▶</button>
      </div>

      <div style="background: var(--bg-card); padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-glow); margin-bottom: 20px;">
        <span style="font-size: 0.75rem; color: var(--accent-cyan); font-weight: 700; text-transform: uppercase;">
          ${drill.category}
        </span>
        <!-- KOTAK CONTOH SOAL & JAWABAN BENAR DULU -->
        ${drill.workedExample ? `
          <div class="worked-example-card" style="margin-bottom: 20px;">
            <div class="worked-example-header">
              <span class="we-badge">💡 CONTOH KASUS SERUPA & JAWABAN BENAR DULU</span>
              <span class="we-sub">Pelajari pola dan contoh jawaban untuk kasus serupa ini sebelum berbicara:</span>
            </div>
            <div class="we-body">
              <div class="we-row">
                <span class="we-label">📝 Contoh Pertanyaan Serupa (Kasus Lain):</span>
                <span class="we-text">"${drill.workedExample.analogousQuestion || drill.workedExample.sampleProblem || drill.questionEn}"</span>
              </div>
              <div class="we-row">
                <span class="we-label">✅ Contoh Jawaban Kasus Lain Tersebut:</span>
                <code class="we-code">${drill.workedExample.sampleAnswer || drill.workedExample.sampleSentence || drill.targetSentence}</code>
              </div>
              <div class="we-row">
                <span class="we-label">📐 Rumus Alur Jawaban 3 Langkah:</span>
                <span class="we-text">${drill.workedExample.modelStructure}</span>
              </div>
              <div class="we-row">
                <span class="we-label">🍼 Nalar & Trik Bicara Kodi:</span>
                <span class="we-text">${drill.workedExample.keyPhraseTip}</span>
              </div>
            </div>
            <div class="we-divider">🎯 SEKARANG JAWAB TANTANGAN WAWANCARA ANDA DI BAWAH:</div>
          </div>
        ` : ''}

        <!-- Kotak Pertanyaan Wawancara Anda -->
        <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255,255,255,0.12); border-radius: 10px; padding: 14px 18px; margin-bottom: 16px;">
          <div style="font-size: 0.75rem; color: var(--accent-cyan); font-weight: 800; text-transform: uppercase; margin-bottom: 4px;">
            🎙️ Pertanyaan Wawancara Anda:
          </div>
          <h3 style="color: #fff; margin: 0; font-size: 1.15rem; line-height: 1.5;">
            Interviewer: "${drill.questionEn}"
          </h3>
        </div>

        <!-- Kalimat Sasaran untuk Ditirukan -->
        <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(56, 189, 248, 0.3); border-radius: 12px; padding: 18px; margin-bottom: 16px;">
          <div style="font-size: 0.75rem; color: var(--accent-yellow); font-weight: 800; margin-bottom: 6px;">
            TARGET JAWABAN ANDA (DENGARKAN & TIRUKAN):
          </div>
          <p id="target-sentence-text" style="font-size: 1.1rem; font-weight: 700; color: #f8fafc; line-height: 1.5; margin-bottom: 8px;">
            "${drill.targetSentence}"
          </p>
          <p style="font-size: 0.85rem; color: var(--text-muted); font-style: italic;">
            Arti Bahasa Indonesia: ${drill.translationId}
          </p>
        </div>

        <!-- Tombol Audio & Rekam Suara -->
        <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 18px;">
          <button class="btn-secondary" style="display: flex; align-items: center; gap: 8px;" onclick="listenTargetSentence(false, this)">
            🔊 Dengarkan (Normal)
          </button>
          <button class="btn-secondary" style="display: flex; align-items: center; gap: 8px;" onclick="listenTargetSentence(true, this)">
            🐢 Dengarkan (Lambat / Slow)
          </button>
          <button id="btn-start-mic" class="btn-primary" style="display: flex; align-items: center; gap: 8px; background: linear-gradient(135deg, #f43f5e, #e11d48);" onclick="startSpeakingPractice()">
            🎙️ Mulai Bicara (Ucapkan Kalimat Ini)
          </button>
        </div>

        <div style="background: rgba(250, 204, 21, 0.1); border-left: 3px solid var(--accent-yellow); padding: 10px 14px; border-radius: 4px; font-size: 0.85rem; color: #fef08a;">
          🍼 <strong>Tips Kodi:</strong> ${drill.babyTips}
        </div>

        <!-- Hasil Evaluasi Suara -->
        <div id="speech-eval-result" style="display: none; margin-top: 20px; padding: 18px; border-radius: 12px; background: rgba(15, 23, 42, 0.95); border: 1.5px solid var(--accent-cyan);">
        </div>
      </div>
    </div>

    <!-- SUBMODE GERBONG KERETA KALIMAT (PONDASI POLA SD 4-5) -->
    <div id="submode-sentence" style="display: none;"></div>

    <!-- SUBMODE 2: GAME HURUF HILANG & KOSAKATA -->
    <div id="submode-puzzle" style="display: none;"></div>

    <!-- SUBMODE 3: IELTS ACADEMIC STUDIO (CAMBRIDGE EDITION) -->
    <div id="submode-ielts" style="display: none;"></div>

    <!-- SUBMODE 4: MASTER TOEFL iBT BEASISWA S2 -->
    <div id="submode-ibt" style="display: none;"></div>

    <!-- SUBMODE 5: PROGRESSIVE DICTATION STUDIO (EVC ESL LIBRETEXTS) -->
    <div id="submode-dictation" style="display: none;"></div>
  `;

  window.setEnglishDrillIndex = function(idx) {
    sfx.playClick();
    appState.currentEnglishDrillIndex = idx;
    renderEnglishTrainer();
  };

  window.setSpeakingCategoryFilter = function(catKey) {
    sfx.playClick();
    appState.speakingCategoryFilter = catKey;
    if (catKey !== 'all') {
      const firstIdx = cvInterviewSpeakingDrills.findIndex(d => d.category === catKey || d.category.startsWith(catKey));
      if (firstIdx !== -1) {
        appState.currentEnglishDrillIndex = firstIdx;
      }
    }
    renderEnglishTrainer();
  };

  window.nextSpeakingDrill = function() {
    sfx.playClick();
    if (appState.currentEnglishDrillIndex + 1 < cvInterviewSpeakingDrills.length) {
      appState.currentEnglishDrillIndex++;
    } else {
      appState.currentEnglishDrillIndex = 0;
    }
    renderEnglishTrainer();
  };

  window.prevSpeakingDrill = function() {
    sfx.playClick();
    if (appState.currentEnglishDrillIndex > 0) {
      appState.currentEnglishDrillIndex--;
    } else {
      appState.currentEnglishDrillIndex = cvInterviewSpeakingDrills.length - 1;
    }
    renderEnglishTrainer();
  };

  window.listenTargetSentence = function(isSlow, btn = null) {
    sfx.playClick();
    const rate = isSlow ? 0.65 : 0.85;
    speechEngine.speakText(drill.targetSentence, rate, btn, "en-US");
  };

  window.startSpeakingPractice = function() {
    sfx.playClick();
    const micBtn = document.getElementById("btn-start-mic");
    const resultBox = document.getElementById("speech-eval-result");
    resultBox.style.display = "block";
    resultBox.innerHTML = `
      <div style="text-align: center; color: var(--accent-pink); font-weight: 700; padding: 10px;">
        🔴 Sedang mendengarkan suaramu... Silakan ucapkan kalimat di atas sekarang!
      </div>
    `;

    micBtn.innerHTML = "⏳ Mendengarkan...";
    micBtn.disabled = true;

    speechEngine.startListening(
      drill.targetSentence,
      (evalResult) => {
        micBtn.innerHTML = "🎙️ Mulai Bicara Lagi";
        micBtn.disabled = false;

        if (evalResult.accuracy >= 65) {
          sfx.playSuccess();
        } else {
          sfx.playError();
        }

        resultBox.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px;">
            <h4 style="color: ${evalResult.accuracy >= 70 ? 'var(--accent-green)' : 'var(--accent-yellow)'};">
              Skor Akurasi Pelafalan: ${evalResult.accuracy}% (${evalResult.grade})
            </h4>
          </div>

          <div style="margin-bottom: 10px;">
            <span style="font-size: 0.8rem; color: var(--text-muted);">Kata yang tertangkap oleh mic:</span>
            <p style="font-size: 1rem; color: #fff; font-weight: 600; margin-top: 4px;">"${evalResult.spoken}"</p>
          </div>

          <div style="margin-bottom: 12px;">
            <span style="font-size: 0.8rem; color: var(--text-muted);">Pemeriksaan Kata per Kata (Hijau = Bagus, Merah = Kurang Jelas):</span>
            <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px;">
              ${evalResult.wordAnalysis.map(w => `
                <span style="padding: 2px 8px; border-radius: 4px; font-weight: 700; font-size: 0.85rem; background: ${w.matched ? 'rgba(74, 222, 128, 0.2)' : 'rgba(248, 113, 113, 0.2)'}; color: ${w.matched ? '#4ade80' : '#f87171'}; border: 1px solid ${w.matched ? '#4ade80' : '#f87171'};">
                  ${w.word} ${w.matched ? '✓' : '✗'}
                </span>
              `).join('')}
            </div>
          </div>

          <p style="font-size: 0.88rem; color: #cbd5e1;">💡 ${evalResult.comment}</p>
          <div id="speech-ai-feedback-box" style="margin-top: 14px;"></div>
        `;

        kodiAI.renderFeedback({
          containerId: "speech-ai-feedback-box",
          isCorrect: evalResult.accuracy >= 65,
          question: `Target Kalimat: "${drill.targetSentence}"`,
          userAnswer: evalResult.spoken || "(Suara tidak jelas)",
          correctAnswer: drill.targetSentence,
          explanation: `Akurasi pengucapanmu ${evalResult.accuracy}% (${evalResult.grade}). ${evalResult.comment}. Arti bahasa Indonesia: "${drill.translationId}".`,
          concept: `Speaking & Wawancara Kerja (${drill.category})`,
          babyClue: drill.babyTips
        });
      },
      (error) => {
        micBtn.innerHTML = "🎙️ Mulai Bicara (Ucapkan Kalimat Ini)";
        micBtn.disabled = false;
        resultBox.innerHTML = `
          <div style="color: var(--accent-red); padding: 8px; font-size: 0.88rem;">
            ⚠️ Gagal mendengarkan mikrofon (${error}). Pastikan izin mikrofon sudah aktif (Allow) di browsermu!
          </div>
        `;
      }
    );
  };

  window.switchEnglishSubMode = function(mode) {
    sfx.playClick();
    appState.currentEnglishSubMode = mode;
    
    const modes = [
      { id: 'sentence', btnId: 'btn-mode-sentence', secId: 'submode-sentence', color: 'var(--accent-yellow)' },
      { id: 'speaking', btnId: 'btn-mode-spk', secId: 'submode-speaking', color: 'var(--accent-cyan)' },
      { id: 'puzzle', btnId: 'btn-mode-puzzle', secId: 'submode-puzzle', color: 'var(--accent-cyan)' },
      { id: 'ielts', btnId: 'btn-mode-ielts', secId: 'submode-ielts', color: 'var(--accent-green)' },
      { id: 'ibt', btnId: 'btn-mode-ibt', secId: 'submode-ibt', color: 'var(--accent-cyan)' },
      { id: 'dictation', btnId: 'btn-mode-dictation', secId: 'submode-dictation', color: 'var(--accent-pink)' }
    ];

    modes.forEach(m => {
      const sec = document.getElementById(m.secId);
      const btn = document.getElementById(m.btnId);
      const isActive = (m.id === mode);
      
      if (sec) sec.style.display = isActive ? 'block' : 'none';
      if (btn) {
        btn.classList.toggle('active-eng-mode', isActive);
        if (isActive) {
          btn.style.borderColor = m.color;
          btn.style.boxShadow = `0 0 12px ${m.color.replace('var(--accent-cyan)', 'rgba(6,182,212,0.3)').replace('var(--accent-green)', 'rgba(16,185,129,0.3)').replace('var(--accent-pink)', 'rgba(244,63,94,0.3)').replace('var(--accent-yellow)', 'rgba(250,204,21,0.3)')}`;
        } else {
          btn.style.borderColor = 'rgba(255,255,255,0.1)';
          btn.style.boxShadow = 'none';
        }
      }
    });

    if (mode === 'sentence') {
      if (typeof renderSentenceTrainGame === 'function') {
        renderSentenceTrainGame();
      }
    } else if (mode === 'speaking') {
      // speaking submode is rendered by default in DOM
    } else if (mode === 'puzzle') {
      renderMissingLettersGame();
    } else if (mode === 'ielts') {
      renderIeltsAcademicStudio();
    } else if (mode === 'ibt') {
      renderToeflIbtBuildingSkills();
    } else if (mode === 'dictation') {
      renderEvcDictationStudio();
    }
  };

  // Auto-restore previously active English submode or default to speaking
  window.switchEnglishSubMode(appState.currentEnglishSubMode || 'speaking');
}

// ================= GAME HURUF HILANG (SPELLING & VOCAB PUZZLE) =================
function getSpellingBabyExplanation(puzzle, userWord) {
  const word = puzzle.word;
  let reason = "";

  if (word === "ROUTER") {
    reason = "Kata 'ROUTER' dibentuk dari kata dasar 'ROUTE' (rute/jalur arah pengiriman data) + akhiran '-ER' (alat perute). Huruf ke-2 wajib 'O' (r-O-u-t-e), dan huruf ke-5 adalah 'E'. Kalau dieja 'REUTER' itu nama kantor berita di Inggris, bukan alat jaringan!";
  } else if (word === "SWITCH") {
    reason = "Kata 'SWITCH' memiliki akhiran bunyi khas '-ITCH'. Huruf ke-3 adalah 'I' dan huruf terakhir adalah 'H' untuk membentuk pasangan huruf 'CH' (bunyi 'c' lembut).";
  } else if (word === "FIREWALL") {
    reason = "Kata 'FIREWALL' adalah kata majemuk dari 'FIRE' (api) + 'WALL' (tembok benteng). Huruf ke-2 adalah 'I' (dari f-I-r-e) dan huruf ke-7 adalah 'A' (dari w-A-l-l).";
  } else if (word === "GATEWAY") {
    reason = "Kata 'GATEWAY' berasal dari 'GATE' (gerbang) + 'WAY' (jalan). Keduanya memiliki vokal 'A' di tengahnya (g-A-t-e dan w-A-y)!";
  } else if (word === "BANDWIDTH") {
    reason = "Kata 'BANDWIDTH' tersusun dari 'BAND' (pita) + 'WIDTH' (lebar pipa). Huruf ke-2 adalah 'A' dan huruf ke-6 adalah 'I'.";
  } else if (word === "LATENCY") {
    reason = "Kata 'LATENCY' berasal dari bahasa Latin 'latere' (tunda/menunggu). Huruf rumpang diisi dengan vokal 'A' dan 'E'.";
  } else if (word === "PACKET") {
    reason = "Kata 'PACKET' (paket data kecil) berasal dari 'pack' + akhiran '-et' (benda kecil). Huruf ke-2 adalah 'A' dan huruf ke-5 adalah 'E'.";
  } else if (word === "SERVER") {
    reason = "Kata 'SERVER' berasal dari kata kerja 'SERVE' (melayani) + '-ER' (komputer pelayan). Huruf ke-2 adalah 'E' dan huruf ke-5 juga 'E'.";
  } else if (word === "CLIENT") {
    reason = "Kata 'CLIENT' (komputer pemohon layanan) memiliki vokal berdampingan 'I' dan 'E'.";
  } else if (word === "DATABASE") {
    reason = "Kata 'DATABASE' berasal dari 'DATA' (informasi) + 'BASE' (pangkalan/fondasi). Huruf ke-2 adalah 'A' dan huruf ke-7 adalah 'S'.";
  } else {
    reason = `Kata '${word}' memiliki huruf rumpang yang seharusnya diisi huruf: ${puzzle.missingLetters.join(', ')}. Ingat petunjuk nalar bayi Kodi: "${puzzle.babyClue}".`;
  }

  return reason;
}

function renderMissingLettersGame() {
  const container = document.getElementById("submode-puzzle");
  if (!container) return;

  appState.puzzleCategoryFilter = appState.puzzleCategoryFilter || "all";

  const puzzleCats = [
    "all",
    "Networking",
    "Database",
    "Programming",
    "Web & Cloud",
    "Hardware & OS",
    "Security",
    "Software Eng",
    "Academic English",
    "Academic Verbs",
    "Academic Vocabulary"
  ];

  const filteredList = (appState.puzzleCategoryFilter === "all")
    ? missingLetterPuzzles.map((p, i) => ({ item: p, originalIndex: i }))
    : missingLetterPuzzles
        .map((p, i) => ({ item: p, originalIndex: i }))
        .filter(x => x.item.category === appState.puzzleCategoryFilter);

  if (appState.currentPuzzleIndex < 0 || appState.currentPuzzleIndex >= missingLetterPuzzles.length) {
    appState.currentPuzzleIndex = 0;
  }

  let currentPos = filteredList.findIndex(x => x.originalIndex === appState.currentPuzzleIndex);
  if (currentPos === -1 && filteredList.length > 0) {
    appState.currentPuzzleIndex = filteredList[0].originalIndex;
    currentPos = 0;
  }

  const puzzle = missingLetterPuzzles[appState.currentPuzzleIndex] || missingLetterPuzzles[0];

  // Inisialisasi state per kata
  if (!appState.puzzleStates) {
    appState.puzzleStates = {};
  }
  if (!appState.puzzleStates[appState.currentPuzzleIndex]) {
    appState.puzzleStates[appState.currentPuzzleIndex] = {
      filled: {}, // mapping: slotIndex => char
      activeSlotIndex: null, // slot yang sedang dipilih user
      checked: false, // apakah tombol Cek Jawaban sudah ditekan
      isCorrect: false, // apakah semua jawaban benar
      completed: false, // sudah berhasil diselesaikan 100%
      pool: null
    };
  }
  const curState = appState.puzzleStates[appState.currentPuzzleIndex];

  // Analisis setiap posisi huruf dan posisi bagian kosong
  const cleanMask = puzzle.masked.replace(/\s+/g, '');
  const slots = [];
  const missingIndices = [];

  for (let i = 0; i < puzzle.word.length; i++) {
    const isBlank = (cleanMask[i] === '_');
    if (isBlank) missingIndices.push(i);
    slots.push({
      index: i,
      expected: puzzle.word[i],
      isBlank: isBlank,
      filled: isBlank ? (curState.filled[i] || null) : puzzle.word[i]
    });
  }

  const totalBlanks = missingIndices.length;
  const filledIndices = missingIndices.filter(idx => curState.filled[idx]);
  const filledCount = filledIndices.length;

  // Tentukan activeSlotIndex: default ke slot kosong pertama jika belum dipilih
  if (curState.activeSlotIndex === null || !missingIndices.includes(curState.activeSlotIndex)) {
    const firstEmpty = missingIndices.find(idx => !curState.filled[idx]);
    curState.activeSlotIndex = (firstEmpty !== undefined) ? firstEmpty : missingIndices[0];
  }

  // Siapkan keyboard tombol huruf (stabil & konsisten)
  if (!curState.pool) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const pool = [...puzzle.missingLetters];
    while (pool.length < Math.max(puzzle.missingLetters.length + 5, 8)) {
      const rand = alphabet[Math.floor(Math.random() * alphabet.length)];
      if (!pool.includes(rand)) pool.push(rand);
    }
    pool.sort(() => Math.random() - 0.5);
    curState.pool = pool;
  }

  // Bangun userWord untuk evaluasi
  let constructedWord = "";
  for (let i = 0; i < puzzle.word.length; i++) {
    constructedWord += cleanMask[i] === '_' ? (curState.filled[i] || "_") : puzzle.word[i];
  }

  container.innerHTML = `
    <!-- Navigasi & Filter Soal Kosakata 1 - 100 -->
    <div class="challenge-nav-bar">
      <div class="challenge-nav-controls">
        <label style="font-size: 0.8rem; font-weight: 700; color: var(--accent-pink);">Kategori:</label>
        <select class="challenge-page-select" onchange="filterPuzzleCategory(this.value)">
          <option value="all" ${appState.puzzleCategoryFilter === 'all' ? 'selected' : ''}>📂 Semua Topik (${missingLetterPuzzles.length} Kosakata)</option>
          ${puzzleCats.filter(c => c !== 'all').map(c => `
            <option value="${c}" ${appState.puzzleCategoryFilter === c ? 'selected' : ''}>${c} (10 Kata)</option>
          `).join('')}
        </select>
      </div>

      <div class="challenge-nav-controls">
        <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem;" onclick="navPuzzle(-1)" ${currentPos <= 0 ? 'disabled' : ''}>
          ⬅️ Prev
        </button>
        <select class="challenge-page-select" onchange="setPuzzleIndex(Number(this.value))">
          ${filteredList.map((x) => {
            const isDone = appState.puzzleStates && appState.puzzleStates[x.originalIndex]?.completed;
            return `
              <option value="${x.originalIndex}" ${x.originalIndex === appState.currentPuzzleIndex ? 'selected' : ''}>
                ${isDone ? '✓ ' : ''}Kata #${x.originalIndex + 1} (${x.item.word.length} Huruf) - ${x.item.category}
              </option>
            `;
          }).join('')}
        </select>
        <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem;" onclick="navPuzzle(1)" ${currentPos >= filteredList.length - 1 ? 'disabled' : ''}>
          Next ➡️
        </button>
      </div>
    </div>

    <!-- Quick Pills Selector -->
    <div class="challenge-pills-row" style="margin-bottom: 16px;">
      ${filteredList.map((x) => {
        const isDone = appState.puzzleStates && appState.puzzleStates[x.originalIndex]?.completed;
        return `
          <button class="quick-cmd-btn ${x.originalIndex === appState.currentPuzzleIndex ? 'active' : ''}" 
                  style="padding: 6px 12px; font-size: 0.8rem; font-weight: 700; white-space: nowrap; ${isDone ? 'border-color: var(--accent-green); color: #86efac;' : ''}" 
                  onclick="setPuzzleIndex(${x.originalIndex})">
            ${isDone ? '✓ ' : ''}Kata #${x.originalIndex + 1}
          </button>
        `;
      }).join('')}
    </div>

    <div style="background: var(--bg-card); padding: 24px 18px; border-radius: var(--radius-md); border: 1px solid var(--border-glow); margin-bottom: 20px; text-align: center;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 6px;">
        <span style="font-size: 0.78rem; font-weight: 700; color: var(--accent-pink); background: rgba(244, 114, 182, 0.15); padding: 4px 10px; border-radius: 12px;">
          🏷️ ${puzzle.category}
        </span>
        <span style="font-size: 0.78rem; color: var(--accent-yellow); font-weight: 700;">
          Kosakata #${appState.currentPuzzleIndex + 1} dari ${missingLetterPuzzles.length}
        </span>
      </div>

      <!-- KOTAK CONTOH KATA & HURUF PENGISI BENAR DULU -->
      ${puzzle.workedExample ? `
        <div class="worked-example-card" style="margin: 0 auto 18px; max-width: 650px; text-align: left;">
          <div class="worked-example-header">
            <span class="we-badge">💡 CONTOH SOAL & JAWABAN BENAR DULU</span>
            <span class="we-sub">Pahami pola teka-teki huruf ini sebelum mengisi:</span>
          </div>
          <div class="we-body">
            <div class="we-row">
              <span class="we-label">📝 Contoh Kata Serupa:</span>
              <span class="we-text"><strong>${puzzle.workedExample.sampleWord}</strong> (bagian kosong: <code>${puzzle.workedExample.sampleMasked}</code>)</span>
            </div>
            <div class="we-row">
              <span class="we-label">✅ Kunci Huruf Pengisi yang 100% Benar:</span>
              <code class="we-code">${puzzle.workedExample.sampleMissing}</code>
            </div>
            <div class="we-row">
              <span class="we-label">🍼 Nalar & Penjelasan Ejaan:</span>
              <span class="we-text">${puzzle.workedExample.sampleExplanation}</span>
            </div>
          </div>
          <div class="we-divider">🎯 SEKARANG LENGKAPI HURUF KATA TANTANGAN INI:</div>
        </div>
      ` : ''}

      <!-- Petunjuk Bahasa Bayi & Arti Kata -->
      <div style="background: rgba(250, 204, 21, 0.1); border-left: 3px solid var(--accent-yellow); padding: 12px 16px; border-radius: 8px; font-size: 0.95rem; color: #fef08a; margin: 14px auto; max-width: 600px; text-align: left;">
        <strong>🍼 Petunjuk Bahasa Bayi Kodi:</strong>
        <p style="margin: 4px 0 6px;">${puzzle.babyClue}</p>
        <div style="font-size: 0.82rem; color: #cbd5e1; font-style: italic;">
          Arti resmi: "${puzzle.meaning}"
        </div>
      </div>

      <!-- TAMPILAN INTERAKTIF KOTAK HURUF KATA (TILES BISA DIKLIK BEBAS) -->
      <div class="vocab-tiles-container ${curState.completed ? 'is-all-completed' : ''}" id="puzzle-tiles-row">
        ${slots.map((s) => {
          const isBlank = s.isBlank;
          const val = s.filled;
          const isSelected = isBlank && (s.index === curState.activeSlotIndex);
          
          let checkClass = "";
          if (curState.checked && isBlank) {
            if (val === s.expected) {
              checkClass = "is-correct-slot";
            } else {
              checkClass = "is-error-slot";
            }
          }

          return `
            <div class="vocab-letter-tile ${isBlank ? 'is-blank' : 'is-fixed'} ${val ? 'is-filled' : 'is-empty'} ${isSelected ? 'is-selected-slot' : ''} ${checkClass}" 
                 ${isBlank ? `onclick="selectOrClearPuzzleSlot(${s.index})" title="${val ? 'Klik untuk membatalkan/menghapus huruf ' + val : 'Klik untuk memilih kotak ini'}"` : ''} 
                 style="${isBlank ? 'cursor: pointer; position: relative;' : ''}">
              ${val ? val : '_'}
              ${isSelected ? '<span class="tile-active-marker">🎯</span>' : ''}
            </div>
          `;
        }).join('')}
      </div>

      <!-- Petunjuk Ramah Cara Klik Kotak -->
      <div style="font-size: 0.8rem; color: var(--accent-cyan); margin-top: -6px; margin-bottom: 12px; display: flex; align-items: center; justify-content: center; gap: 6px;">
        <span>👆 <em>Klik kotak rumpang untuk memilih tempat huruf, atau klik kotak yang sudah terisi untuk membatalkan/menghapus huruf!</em></span>
      </div>

      <!-- Status Bar Pengisian Huruf -->
      <div class="puzzle-progress-bar">
        <span>Huruf terisi: <strong>${filledCount} / ${totalBlanks}</strong></span>
        <span id="puzzle-live-hint" style="color: ${filledCount === totalBlanks ? 'var(--accent-green)' : 'var(--accent-cyan)'}; font-weight: 700;">
          ${filledCount === totalBlanks 
            ? '✨ Semua kotak sudah terisi! Tekan tombol "⚡ Cek Jawaban / Selesai" di bawah untuk memeriksa!' 
            : `Pilih huruf di bawah untuk mengisi bagian kosong (${totalBlanks - filledCount} huruf tersisa):`}
        </span>
      </div>

      <!-- Tombol Keyboard Pilihan Huruf Lengkap -->
      <div class="puzzle-keyboard-pool" id="puzzle-keyboard-box">
        ${curState.pool.map((letter, btnIdx) => {
          const totalInPool = curState.pool.filter(l => l === letter).length;
          const usedInSlots = missingIndices.filter(idx => curState.filled[idx] === letter).length;
          const isExhausted = (usedInSlots >= totalInPool);

          return `
            <button class="puzzle-letter-btn ${isExhausted ? 'is-used-letter' : ''}" 
                    id="puzzle-key-${btnIdx}" 
                    ${isExhausted || curState.completed ? 'disabled' : ''} 
                    onclick="insertLetterIntoActiveSlot('${letter}')"
                    title="Tempatkan huruf ${letter} ke kotak terpilih">
              ${letter}
            </button>
          `;
        }).join('')}
      </div>

      <!-- Kontrol Aksi: CEK JAWABAN (UTAMA), AUDIO, HAPUS, & RESET -->
      <div class="puzzle-action-buttons-row" style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 18px;">
        <button class="btn-primary" style="font-size: 0.92rem; font-weight: 800; padding: 10px 22px; background: linear-gradient(135deg, #10b981, #059669); border: none; box-shadow: 0 4px 14px rgba(16, 185, 129, 0.4);" onclick="submitCheckPuzzle()">
          ⚡ Cek Jawaban / Selesai
        </button>

        <button class="btn-secondary" style="font-size: 0.82rem; padding: 8px 14px; display: flex; align-items: center; gap: 6px;" onclick="speechEngine.speakText('${puzzle.word}', 0.75, this, speechEngine.englishAccent)">
          🔊 Dengarkan Pelafalan (${speechEngine.englishAccent === 'en-GB' ? 'Aksen UK' : 'Aksen US'})
        </button>

        <button class="btn-secondary" style="font-size: 0.82rem; padding: 8px 14px;" onclick="undoActiveSlot()">
          ⌫ Hapus Huruf Terpilih
        </button>

        <button class="btn-secondary" style="font-size: 0.82rem; padding: 8px 14px;" onclick="resetCurrentPuzzle()">
          🔄 Kosongkan Semua Kotak
        </button>

        ${curState.completed && appState.currentPuzzleIndex < missingLetterPuzzles.length - 1 ? `
          <button class="btn-primary" style="font-size: 0.85rem; padding: 8px 18px; background: linear-gradient(135deg, #38bdf8, #0284c7);" onclick="setPuzzleIndex(${appState.currentPuzzleIndex + 1})">
            🚀 Lanjut ke Kata #${appState.currentPuzzleIndex + 2} ➡️
          </button>
        ` : ''}
      </div>

      <!-- FEEDBACK PEMBAHASAN MENDALAM NALAR BAYI KODI (MUNCUL SETELAH CEK JAWABAN) -->
      <div id="puzzle-feedback" style="display: ${curState.checked ? 'block' : 'none'}; max-width: 650px; margin: 0 auto; text-align: left;">
        ${curState.checked ? `
          <div class="train-result-card ${curState.isCorrect ? 'is-correct-card' : 'is-wrong-card'}" style="padding: 18px; border-radius: 12px; border: 1.5px solid ${curState.isCorrect ? '#10b981' : '#f43f5e'}; background: ${curState.isCorrect ? 'rgba(16, 185, 129, 0.12)' : 'rgba(244, 63, 94, 0.12)'};">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
              <span style="font-size: 1.6rem;">${curState.isCorrect ? '🎉' : '💡'}</span>
              <div>
                <h4 style="margin: 0; color: ${curState.isCorrect ? '#34d399' : '#f87171'}; font-size: 1.05rem;">
                  ${curState.isCorrect ? 'SEMPURNA! EJAAN KOSAKATA 100% TEPAT!' : 'BELUM PAS! YUK KITA CEK LETAK KESALAHAN EJAANNYA!'}
                </h4>
                <p style="margin: 2px 0 0; font-size: 0.85rem; color: #cbd5e1;">
                  ${curState.isCorrect ? `Kamu berhasil melengkapi ejaan kata '${puzzle.word}' dengan benar.` : 'Jangan khawatir, di bawah ini ada bedah ejaan kata agar kamu makin paham.'}
                </p>
              </div>
            </div>

            <div style="background: rgba(15, 23, 42, 0.85); padding: 12px 14px; border-radius: 8px; margin-bottom: 12px; border: 1px solid rgba(255,255,255,0.1);">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 0.88rem; margin-bottom: 8px;">
                <div>
                  <span style="color: var(--text-muted); font-size: 0.78rem;">Ejaan yang kamu buat:</span>
                  <div style="font-weight: 800; color: ${curState.isCorrect ? '#34d399' : '#f87171'}; font-family: monospace; font-size: 1.05rem;">
                    ${constructedWord}
                  </div>
                </div>
                <div>
                  <span style="color: var(--text-muted); font-size: 0.78rem;">Ejaan standar yang benar:</span>
                  <div style="font-weight: 800; color: #34d399; font-family: monospace; font-size: 1.05rem;">
                    ${puzzle.word}
                  </div>
                </div>
              </div>

              <!-- Nalar Bayi Kodi Pembahasan Ejaan -->
              <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 8px; margin-top: 6px;">
                <strong style="color: var(--accent-yellow); font-size: 0.85rem;">🍼 Penjelasan Nalar Bayi Kodi:</strong>
                <p style="margin: 4px 0 6px; font-size: 0.88rem; color: #fef08a; line-height: 1.45;">
                  ${getSpellingBabyExplanation(puzzle, constructedWord)}
                </p>
                <div style="font-size: 0.8rem; color: #94a3b8; font-style: italic;">
                  Arti: "${puzzle.meaning}" • Huruf pengisi: ${puzzle.missingLetters.join(', ')}
                </div>
              </div>
            </div>

            <!-- Tombol Coba Lagi & Intip Kunci Saat Salah -->
            ${!curState.isCorrect ? `
              <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <button class="btn-primary" style="background: linear-gradient(135deg, #f59e0b, #d97706); border: none; font-size: 0.82rem; padding: 8px 16px;" onclick="retryIncorrectSlots()">
                  🔄 Coba Lagi / Kosongkan Kotak yang Salah
                </button>
                <button class="btn-secondary" style="font-size: 0.82rem; padding: 8px 14px;" onclick="revealPuzzleAnswer()">
                  💡 Pasang Kunci Jawaban yang Benar
                </button>
              </div>
            ` : `
              <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <button class="btn-primary" style="background: linear-gradient(135deg, #10b981, #059669); border: none; font-size: 0.85rem; padding: 8px 18px;" onclick="setPuzzleIndex(${appState.currentPuzzleIndex + 1 < missingLetterPuzzles.length ? appState.currentPuzzleIndex + 1 : 0})">
                  🚀 Lanjut ke Kata Berikutnya ➡️
                </button>
              </div>
            `}
          </div>
        ` : ''}
      </div>
    </div>
  `;

  // HANDLERS INTERAKSI TEKA-TEKI KATA
  window.filterPuzzleCategory = function(cat) {
    sfx.playClick();
    appState.puzzleCategoryFilter = cat;
    renderMissingLettersGame();
  };

  window.navPuzzle = function(delta) {
    sfx.playClick();
    const newPos = currentPos + delta;
    if (newPos >= 0 && newPos < filteredList.length) {
      appState.currentPuzzleIndex = filteredList[newPos].originalIndex;
      renderMissingLettersGame();
    }
  };

  window.setPuzzleIndex = function(idx) {
    sfx.playClick();
    appState.currentPuzzleIndex = idx;
    renderMissingLettersGame();
  };

  // KLIK PADA KOTAK: Pilih kotak jika kosong, atau kosongkan huruf jika sudah terisi
  window.selectOrClearPuzzleSlot = function(slotIndex) {
    if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();
    const curState = appState.puzzleStates[appState.currentPuzzleIndex];
    if (!curState || curState.completed) return;

    if (curState.filled[slotIndex]) {
      // Hapus huruf dari kotak ini (kembalikan ke keyboard)
      delete curState.filled[slotIndex];
      curState.activeSlotIndex = slotIndex;
      curState.checked = false;
    } else {
      // Kotak kosong dijadikan sasaran aktif
      curState.activeSlotIndex = slotIndex;
    }
    renderMissingLettersGame();
  };

  // KLIK HURUF DI KEYBOARD: Masukkan ke kotak terpilih TANPA menghakimi salah/benar langsung
  window.insertLetterIntoActiveSlot = function(letter) {
    if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();
    const curState = appState.puzzleStates[appState.currentPuzzleIndex];
    if (!curState || curState.completed) return;

    // Cari target slot: prioritaskan activeSlotIndex, jika sudah terisi cari slot kosong berikutnya
    let target = curState.activeSlotIndex;
    if (target === null || !missingIndices.includes(target) || curState.filled[target]) {
      const nextEmpty = missingIndices.find(idx => !curState.filled[idx]);
      target = (nextEmpty !== undefined) ? nextEmpty : missingIndices[0];
    }

    curState.filled[target] = letter;
    curState.checked = false; // Reset evaluasi agar user bisa menata huruf berikutnya dengan tenang

    // Geser sasaran aktif ke slot kosong berikutnya
    const nextUnfilled = missingIndices.find(idx => !curState.filled[idx]);
    if (nextUnfilled !== undefined) {
      curState.activeSlotIndex = nextUnfilled;
    }

    renderMissingLettersGame();
  };

  // TOMBOL CEK JAWABAN / SELESAI
  window.submitCheckPuzzle = function() {
    const curState = appState.puzzleStates[appState.currentPuzzleIndex];
    if (!curState) return;

    const unfilled = missingIndices.filter(idx => !curState.filled[idx]);
    if (unfilled.length > 0) {
      if (window.sfx && typeof sfx.playNotice === "function") sfx.playNotice();
      alert(`Masih ada ${unfilled.length} kotak huruf yang belum diisi! Silakan lengkapi semua kotak sebelum mengecek.`);
      curState.activeSlotIndex = unfilled[0];
      renderMissingLettersGame();
      return;
    }

    // Periksa apakah semua huruf cocok 100%
    let isAllCorrect = true;
    missingIndices.forEach(idx => {
      if (curState.filled[idx] !== puzzle.word[idx]) {
        isAllCorrect = false;
      }
    });

    curState.checked = true;
    curState.isCorrect = isAllCorrect;

    if (isAllCorrect) {
      curState.completed = true;
      if (window.sfx && typeof sfx.playSuccess === "function") sfx.playSuccess();
      if (typeof triggerConfetti === "function") triggerConfetti();
      speechEngine.speakText(puzzle.word, 0.8, null, speechEngine.englishAccent);
    } else {
      if (window.sfx && typeof sfx.playError === "function") sfx.playError();
    }

    renderMissingLettersGame();

    const fb = document.getElementById("puzzle-feedback");
    if (fb) fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  // HAPUS HURUF DI KOTAK AKTIF ATAU KOTAK TERAKHIR
  window.undoActiveSlot = function() {
    if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();
    const curState = appState.puzzleStates[appState.currentPuzzleIndex];
    if (!curState || curState.completed) return;

    if (curState.activeSlotIndex !== null && curState.filled[curState.activeSlotIndex]) {
      delete curState.filled[curState.activeSlotIndex];
    } else {
      const filledKeys = missingIndices.filter(idx => curState.filled[idx]);
      if (filledKeys.length > 0) {
        const lastKey = filledKeys[filledKeys.length - 1];
        delete curState.filled[lastKey];
        curState.activeSlotIndex = lastKey;
      }
    }
    curState.checked = false;
    renderMissingLettersGame();
  };

  // KOSONGKAN HANYA KOTAK YANG SALAH
  window.retryIncorrectSlots = function() {
    if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();
    const curState = appState.puzzleStates[appState.currentPuzzleIndex];
    if (!curState) return;

    let firstWrong = null;
    missingIndices.forEach(idx => {
      if (curState.filled[idx] !== puzzle.word[idx]) {
        delete curState.filled[idx];
        if (firstWrong === null) firstWrong = idx;
      }
    });

    curState.checked = false;
    curState.isCorrect = false;
    if (firstWrong !== null) {
      curState.activeSlotIndex = firstWrong;
    }
    renderMissingLettersGame();
  };

  // PASANG KUNCI JAWABAN YANG BENAR
  window.revealPuzzleAnswer = function() {
    if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();
    const curState = appState.puzzleStates[appState.currentPuzzleIndex];
    if (!curState) return;

    missingIndices.forEach(idx => {
      curState.filled[idx] = puzzle.word[idx];
    });

    curState.checked = true;
    curState.isCorrect = true;
    curState.completed = true;
    renderMissingLettersGame();
    speechEngine.speakText(puzzle.word, 0.8, null, speechEngine.englishAccent);
  };

  // RESET TOTAL KATA INI
  window.resetCurrentPuzzle = function() {
    if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();
    const curState = appState.puzzleStates[appState.currentPuzzleIndex];
    if (curState) {
      curState.filled = {};
      curState.completed = false;
      curState.checked = false;
      curState.isCorrect = false;
      curState.activeSlotIndex = missingIndices[0];
      renderMissingLettersGame();
    }
  };
}

// ================= IELTS ACADEMIC STUDIO (CAMBRIDGE GRAMMAR EDITION) =================
appState.currentIeltsIndex = 0;

function renderIeltsAcademicStudio() {
  const container = document.getElementById("submode-ielts");
  if (!container) return;

  if (typeof ieltsAcademicBank === "undefined" || !ieltsAcademicBank.length) {
    container.innerHTML = `<div class="info-box">Data IELTS Academic sedang disiapkan...</div>`;
    return;
  }

  appState.ieltsCategoryFilter = appState.ieltsCategoryFilter || "all";
  appState.currentIeltsIndex = appState.currentIeltsIndex || 0;
  appState.ieltsCompleted = appState.ieltsCompleted || [];
  appState.ieltsUserAnswers = appState.ieltsUserAnswers || {};

  const ieltsClusters = [
    { key: "all", label: `📂 Semua Unit Cambridge (${ieltsAcademicBank.length} Soal)`, min: 0, max: 99 },
    { key: "unit1-3", label: "Unit 1-3: Present Tenses & Trends (10 Soal)", min: 0, max: 9 },
    { key: "unit4-6", label: "Unit 4-6: Past Tenses & History (10 Soal)", min: 10, max: 19 },
    { key: "unit7-9", label: "Unit 7-9: Present Perfect & Research (10 Soal)", min: 20, max: 29 },
    { key: "unit10-12", label: "Unit 10-12: Passive Voice & Process (10 Soal)", min: 30, max: 39 },
    { key: "unit13-15", label: "Unit 13-15: Conditionals & Hypotheses (10 Soal)", min: 40, max: 49 },
    { key: "unit16-18", label: "Unit 16-18: Modals & Scientific Hedging (10 Soal)", min: 50, max: 59 },
    { key: "unit19-21", label: "Unit 19-21: Relative & Participle Clauses (10 Soal)", min: 60, max: 69 },
    { key: "unit22-23", label: "Unit 22-23: Comparatives & Multipliers (10 Soal)", min: 70, max: 79 },
    { key: "unit24-25", label: "Unit 24-25: Linking Words & Cohesion (10 Soal)", min: 80, max: 89 },
    { key: "style", label: "Academic Style: Inversion & Collocations (10 Soal)", min: 90, max: 99 }
  ];

  const currentCluster = ieltsClusters.find(c => c.key === appState.ieltsCategoryFilter) || ieltsClusters[0];

  const filteredList = ieltsAcademicBank
    .map((item, idx) => ({ item, originalIndex: idx }))
    .filter(x => x.originalIndex >= currentCluster.min && x.originalIndex <= currentCluster.max);

  if (appState.currentIeltsIndex < 0 || appState.currentIeltsIndex >= ieltsAcademicBank.length) {
    appState.currentIeltsIndex = 0;
  }

  let currentPos = filteredList.findIndex(x => x.originalIndex === appState.currentIeltsIndex);
  if (currentPos === -1 && filteredList.length > 0) {
    appState.currentIeltsIndex = filteredList[0].originalIndex;
    currentPos = 0;
  }

  const q = ieltsAcademicBank[appState.currentIeltsIndex] || ieltsAcademicBank[0];
  const isDone = appState.ieltsCompleted.includes(q.id);
  const selectedAnswer = appState.ieltsUserAnswers[q.id];
  const questionPrompt = q.questionPrompt || q.question || "";
  const correctAnswer = q.correctAnswer || (q.options ? q.options[0] : "");

  let displaySentence = questionPrompt;
  if (selectedAnswer) {
    const isCorrect = (selectedAnswer === correctAnswer);
    const spanClass = isCorrect ? 'sentence-fill-correct' : 'sentence-fill-wrong';
    displaySentence = questionPrompt.replace(/_+/g, `<span class="${spanClass}">${selectedAnswer}</span>`);
  }

  container.innerHTML = `
    <!-- Banner Acuan Buku Cambridge Grammar for IELTS -->
    <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(6, 78, 59, 0.45)); border: 1.5px solid var(--accent-green); border-radius: 12px; padding: 14px 18px; margin-bottom: 16px; display: flex; align-items: center; gap: 14px;">
      <img src="assets/illustrations/3d_tiles/tile_3d_16.png" style="width: 60px; height: 60px; border-radius: 12px; object-fit: cover; border: 2px solid var(--accent-green); flex-shrink: 0; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);" alt="Kodi IELTS Examiner" title="Kodi IELTS Examiner #16">
      <div>
        <div style="font-size: 0.75rem; color: var(--accent-green); font-weight: 800; text-transform: uppercase;">
          Kurikulum Standar Beasiswa Cambridge • Kodi IELTS Examiner:
        </div>
        <h4 style="color: #fff; margin: 2px 0;">Cambridge Grammar for IELTS (Hopkins & Cullen)</h4>
        <p style="font-size: 0.8rem; color: #cbd5e1; margin: 0;">
          Latihan 100 Soal Cambridge: Tren Grafik Task 1, Passive Voice Proses Pabrik, Hedging Esai Task 2, Inversi Akademik & Collocations!
        </p>
      </div>
    </div>

    <!-- Navigasi & Filter Soal IELTS 1 - 100 -->
    <div class="challenge-nav-bar">
      <div class="challenge-nav-controls">
        <label style="font-size: 0.8rem; font-weight: 700; color: var(--accent-green);">Unit Cambridge:</label>
        <select class="challenge-page-select" onchange="filterIeltsCategory(this.value)">
          ${ieltsClusters.map(c => `
            <option value="${c.key}" ${appState.ieltsCategoryFilter === c.key ? 'selected' : ''}>${c.label}</option>
          `).join('')}
        </select>
      </div>

      <div class="challenge-nav-controls">
        <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem;" onclick="navIeltsChallenge(-1)" ${currentPos <= 0 ? 'disabled' : ''}>
          ⬅️ Prev
        </button>
        <select class="challenge-page-select" onchange="setIeltsIndex(Number(this.value))">
          ${filteredList.map((x) => `
            <option value="${x.originalIndex}" ${x.originalIndex === appState.currentIeltsIndex ? 'selected' : ''}>
              #${x.originalIndex + 1}: ${x.item.cambridgeUnit.split(':')[0]} (${x.item.ieltsFocus}) ${appState.ieltsCompleted.includes(x.item.id) ? '✅' : ''}
            </option>
          `).join('')}
        </select>
        <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem;" onclick="navIeltsChallenge(1)" ${currentPos >= filteredList.length - 1 ? 'disabled' : ''}>
          Next ➡️
        </button>
      </div>
    </div>

    <div style="background: var(--bg-card); padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-glow); margin-bottom: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 6px;">
        <span style="font-size: 0.78rem; font-weight: 800; color: var(--accent-green); background: rgba(74, 222, 128, 0.15); padding: 4px 10px; border-radius: 12px;">
          📌 ${q.cambridgeUnit}
        </span>
        <span style="font-size: 0.75rem; color: var(--accent-yellow); font-weight: 700;">
          Soal ${appState.currentIeltsIndex + 1} dari ${ieltsAcademicBank.length} (${q.ieltsFocus}) ${isDone ? '✅ Selesai' : ''}
        </span>
      </div>

      <!-- KOTAK CONTOH SOAL & JAWABAN CAMBRIDGE DULU (KASUS A) -->
      ${q.workedExample ? `
        <div class="worked-example-card">
          <div class="worked-example-header">
            <span class="we-badge">💡 CONTOH SOAL & JAWABAN CAMBRIDGE DULU</span>
            <span class="we-sub">Pahami pola tata bahasa kasus serupa ini sebelum menjawab tantangan!</span>
          </div>
          <div class="we-body">
            <div class="we-row">
              <span class="we-label">📝 Contoh Kasus Serupa:</span>
              <span class="we-text">"${q.workedExample.sampleQuestion}"</span>
            </div>
            <div class="we-row">
              <span class="we-label">✅ Kunci Jawaban Benar Contoh:</span>
              <code class="we-code">${q.workedExample.sampleAnswer}</code>
            </div>
            <div class="we-row">
              <span class="we-label">🍼 Analogi & Nalar Bahasa Bayi:</span>
              <span class="we-text">${q.workedExample.sampleLogic}</span>
            </div>
          </div>
          <div class="we-divider">🎯 SEKARANG GILIRAN TANTANGAN SOAL CAMBRIDGE INI:</div>
        </div>
      ` : ''}

      <!-- Teks Kalimat Soal (Bisa Diisi Dinamis Saat Dijawab) -->
      <h3 id="ielts-question-sentence" style="color: #fff; margin-bottom: 16px; font-size: 1.15rem; line-height: 1.6;">
        "${displaySentence}"
      </h3>

      <!-- Tombol Audio Aman -->
      <div style="margin-bottom: 14px; display: flex; gap: 8px; flex-wrap: wrap;">
        <button class="btn-secondary" style="font-size: 0.8rem; padding: 6px 12px;" onclick="playIeltsAudio(${appState.currentIeltsIndex}, this)">
          🔊 Dengarkan Kalimat Soal (${speechEngine.englishAccent === 'en-GB' ? 'Aksen UK 🇬🇧' : 'Aksen US 🇺🇸'})
        </button>
      </div>

      <!-- Pilihan Jawaban A, B, C, D -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 10px; margin-bottom: 16px;">
        ${(q.options || []).map((opt, idx) => {
          let btnStyle = "justify-content: center; font-weight: 700; padding: 12px;";
          if (selectedAnswer === opt) {
            if (opt === correctAnswer) {
              btnStyle += " border-color: var(--accent-green); background: rgba(16, 185, 129, 0.25); color: #34d399;";
            } else {
              btnStyle += " border-color: var(--accent-pink); background: rgba(244, 63, 94, 0.25); color: #fda4af;";
            }
          }
          return `
            <button class="choice-card-btn" style="${btnStyle}" onclick="checkIeltsAnswer(${idx})">
              ${opt}
            </button>
          `;
        }).join('')}
      </div>

      <!-- Feedback Alert Box -->
      <div id="ielts-feedback-box">
        ${selectedAnswer ? (selectedAnswer === correctAnswer ? `
          <div class="alert-box success">
            <strong>🎉 Benar Sekali! (+1 Poin IELTS)</strong><br>
            <span>${q.babyExplanation || 'Jawaban Anda tepat sesuai kaidah tata bahasa akademik Cambridge!'}</span>
          </div>
        ` : `
          <div class="alert-box warning">
            <strong>⚠️ Belum Tepat!</strong><br>
            <span>Kata <em>"${selectedAnswer}"</em> belum pas untuk melengkapi kalimat ini. Coba pilih opsi lainnya!</span>
          </div>
        `) : ''}
      </div>
    </div>
  `;
}

window.playIeltsAudio = function(idx, btn) {
  if (typeof ieltsAcademicBank === "undefined") return;
  const item = ieltsAcademicBank[idx];
  if (!item) return;
  const text = (item.questionPrompt || item.question || "").replace(/_+/g, "blank");
  speechEngine.speakText(text, 0.8, btn, speechEngine.englishAccent || 'en-GB');
};

window.filterIeltsCategory = function(cat) {
  sfx.playClick();
  appState.ieltsCategoryFilter = cat;
  renderIeltsAcademicStudio();
};

window.navIeltsChallenge = function(delta) {
  sfx.playClick();
  const currentCluster = [
    { key: "all", min: 0, max: 99 },
    { key: "unit1-3", min: 0, max: 9 },
    { key: "unit4-6", min: 10, max: 19 },
    { key: "unit7-9", min: 20, max: 29 },
    { key: "unit10-12", min: 30, max: 39 },
    { key: "unit13-15", min: 40, max: 49 },
    { key: "unit16-18", min: 50, max: 59 },
    { key: "unit19-21", min: 60, max: 69 },
    { key: "unit22-23", min: 70, max: 79 },
    { key: "unit24-25", min: 80, max: 89 },
    { key: "style", min: 90, max: 99 }
  ].find(c => c.key === (appState.ieltsCategoryFilter || 'all')) || { min: 0, max: 99 };

  const filteredList = ieltsAcademicBank
    .map((item, idx) => ({ item, originalIndex: idx }))
    .filter(x => x.originalIndex >= currentCluster.min && x.originalIndex <= currentCluster.max);

  let currentPos = filteredList.findIndex(x => x.originalIndex === appState.currentIeltsIndex);
  let newPos = currentPos + delta;
  if (newPos >= 0 && newPos < filteredList.length) {
    appState.currentIeltsIndex = filteredList[newPos].originalIndex;
    renderIeltsAcademicStudio();
  }
};

window.setIeltsIndex = function(idx) {
  sfx.playClick();
  appState.currentIeltsIndex = idx;
  renderIeltsAcademicStudio();
};

window.checkIeltsAnswer = function(idx) {
  const q = ieltsAcademicBank[appState.currentIeltsIndex];
  if (!q) return;

  const chosenOpt = q.options[idx];
  const correctAnswer = q.correctAnswer || q.options[0];
  const isCorrect = (chosenOpt === correctAnswer);

  appState.ieltsUserAnswers = appState.ieltsUserAnswers || {};
  appState.ieltsUserAnswers[q.id] = chosenOpt;

  if (isCorrect) {
    sfx.playSuccess();
    if (!appState.ieltsCompleted.includes(q.id)) {
      appState.ieltsCompleted.push(q.id);
      appState.stars = (appState.stars || 0) + 1;
      saveProgress();
      const starEl = document.getElementById("header-stars");
      if (starEl) starEl.textContent = `${appState.stars} Bintang`;
    }
    setKodiSpeech(
      "Awesome! Jawaban IELTS kamu tepat 100%!",
      q.babyExplanation || "Struktur tata bahasa kalimat akademikmu sangat rapi!"
    );
  } else {
    sfx.playWrong();
    setKodiSpeech(
      "Ups, pilihan kata itu belum tepat!",
      "Coba perhatikan petunjuk waktu (tenses) atau konteks kalimat di contoh kasus serupa!"
    );
  }

  renderIeltsAcademicStudio();
};

function renderToeflIbtBuildingSkills() {
  const container = document.getElementById("submode-ibt");
  if (!container) return;

  if (typeof toeflIbtBuildingSkills === "undefined" || !toeflIbtBuildingSkills.length) {
    container.innerHTML = `<div class="info-box">Data TOEFL iBT Building Skills sedang disiapkan...</div>`;
    return;
  }

  appState.currentIbtFilter = appState.currentIbtFilter || "all";
  appState.currentIbtIndex = appState.currentIbtIndex || 0;
  appState.ibtCompleted = appState.ibtCompleted || [];
  appState.ibtUserAnswers = appState.ibtUserAnswers || {};

  const categories = [
    { key: "all", label: `📂 Semua Soal iBT (${toeflIbtBuildingSkills.length})` },
    { key: "Vocabulary in Context", label: "1. Vocab in Context (18 Soal)" },
    { key: "Sentence Simplification", label: "2. Sentence Simplification (17 Soal)" },
    { key: "Fact & Negative Fact", label: "3. Fact & Negative Fact (17 Soal)" },
    { key: "Inference", label: "4. Inference Questions (16 Soal)" },
    { key: "Insert Text", label: "5. Text Insertion [■] (16 Soal)" },
    { key: "Speaking iBT Simulator", label: "6. Speaking iBT Simulator (16 Soal)" }
  ];

  const filteredList = (appState.currentIbtFilter === "all")
    ? toeflIbtBuildingSkills.map((item, idx) => ({ item, originalIndex: idx }))
    : toeflIbtBuildingSkills
        .map((item, idx) => ({ item, originalIndex: idx }))
        .filter(x => x.item.skillCategory === appState.currentIbtFilter);

  if (appState.currentIbtIndex < 0 || appState.currentIbtIndex >= toeflIbtBuildingSkills.length) {
    appState.currentIbtIndex = 0;
  }

  let currentPos = filteredList.findIndex(x => x.originalIndex === appState.currentIbtIndex);
  if (currentPos === -1 && filteredList.length > 0) {
    appState.currentIbtIndex = filteredList[0].originalIndex;
    currentPos = 0;
  }

  const currentItem = toeflIbtBuildingSkills[appState.currentIbtIndex] || toeflIbtBuildingSkills[0];
  const isDone = appState.ibtCompleted.includes(currentItem.id);
  const selectedAnswer = appState.ibtUserAnswers[currentItem.id];
  const isSpeaking = (currentItem.type === "speaking" || currentItem.skillCategory === "Speaking iBT Simulator");

  let passageText = currentItem.passageSnippet || "";
  if (currentItem.highlightWord) {
    passageText = passageText.replace(
      new RegExp(`\\b${currentItem.highlightWord}\\b`, "gi"),
      `<span class="ibt-highlight-word">${currentItem.highlightWord}</span>`
    );
  }
  if (currentItem.highlightSentence) {
    passageText = passageText.replace(
      currentItem.highlightSentence,
      `<span class="ibt-highlight-sentence">${currentItem.highlightSentence}</span>`
    );
  }

  let insertNotice = "";
  if (currentItem.insertedSentence) {
    insertNotice = `
      <div style="margin: 12px 0; padding: 12px 16px; background: rgba(56, 189, 248, 0.15); border-left: 3px solid var(--accent-cyan); border-radius: 6px;">
        <div style="font-size: 0.75rem; color: var(--accent-cyan); font-weight: 800; text-transform: uppercase; margin-bottom: 4px;">Kalimat yang Harus Disisipkan [■]:</div>
        <p style="color: #f8fafc; font-weight: 700; margin: 0;">"${currentItem.insertedSentence}"</p>
      </div>
    `;
  }

  const workedEx = currentItem.workedExample;
  const wePrompt = workedEx ? (workedEx.modelPrompt || workedEx.sampleQuestion || "") : "";
  const weAns = workedEx ? (workedEx.correctAnswer || workedEx.sampleAnswer || "") : "";
  const weLogic = workedEx ? (workedEx.strategyLogic || workedEx.babyLogic || workedEx.sampleLogic || "") : "";

  container.innerHTML = `
    <!-- Banner Acuan Buku TOEFL iBT Building Skills -->
    <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 58, 138, 0.45)); border: 1.5px solid var(--accent-cyan); border-radius: 12px; padding: 14px 18px; margin-bottom: 16px; display: flex; align-items: center; gap: 14px;">
      <img src="assets/illustrations/3d_tiles/tile_3d_17.png" style="width: 60px; height: 60px; border-radius: 12px; object-fit: cover; border: 2px solid var(--accent-cyan); flex-shrink: 0; box-shadow: 0 4px 12px rgba(56, 189, 248, 0.25);" alt="Kodi TOEFL American Speaker" title="Kodi TOEFL American Speaker #17">
      <div>
        <div style="font-size: 0.75rem; color: var(--accent-cyan); font-weight: 800; text-transform: uppercase;">
          Kurikulum Standar Beasiswa S2 Dunia • Kodi TOEFL American Speaker:
        </div>
        <h4 style="color: #fff; margin: 2px 0;">Building Skills for the TOEFL iBT (Paul Edmunds & N. McKinnon)</h4>
        <p style="font-size: 0.8rem; color: #cbd5e1; margin: 0;">
          Latihan 100 Soal TOEFL iBT: Vocab in Context, Simplifikasi Kalimat, Insert Text [■], Negative Fact, Inference & Simulator Speaking!
        </p>
      </div>
    </div>

    <!-- Filter & Navigation Bar -->
    <div class="challenge-nav-bar">
      <div class="challenge-nav-controls">
        <label style="font-size: 0.8rem; font-weight: 700; color: var(--accent-cyan);">Kategori Skill:</label>
        <select class="challenge-page-select" onchange="filterIbtCategory(this.value)">
          ${categories.map(c => `
            <option value="${c.key}" ${appState.currentIbtFilter === c.key ? 'selected' : ''}>${c.label}</option>
          `).join('')}
        </select>
      </div>

      <div class="challenge-nav-controls">
        <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem;" onclick="navIbtChallenge(-1)" ${currentPos <= 0 ? 'disabled' : ''}>
          ⬅️ Prev
        </button>
        <select class="challenge-page-select" onchange="setIbtIndex(Number(this.value))">
          ${filteredList.map((x) => `
            <option value="${x.originalIndex}" ${x.originalIndex === appState.currentIbtIndex ? 'selected' : ''}>
              #${x.originalIndex + 1}: ${x.item.skillCategory} (${x.item.academicTopic || 'Academic'}) ${appState.ibtCompleted.includes(x.item.id) ? '✅' : ''}
            </option>
          `).join('')}
        </select>
        <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem;" onclick="navIbtChallenge(1)" ${currentPos >= filteredList.length - 1 ? 'disabled' : ''}>
          Next ➡️
        </button>
      </div>
    </div>

    <div style="background: var(--bg-card); padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-glow); margin-bottom: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 6px;">
        <span style="font-size: 0.78rem; font-weight: 800; color: var(--accent-cyan); background: rgba(56, 189, 248, 0.15); padding: 4px 10px; border-radius: 12px;">
          📌 ${currentItem.bookChapter}
        </span>
        <span style="font-size: 0.75rem; color: var(--accent-yellow); font-weight: 700;">
          Soal ${appState.currentIbtIndex + 1} dari ${toeflIbtBuildingSkills.length} (${currentItem.academicTopic || 'Umum'}) ${isDone ? '✅ Selesai' : ''}
        </span>
      </div>

      <!-- KOTAK CONTOH STRATEGI & JAWABAN BENAR DULU (KASUS A) -->
      ${workedEx ? `
        <div class="worked-example-card" style="margin-bottom: 18px;">
          <div class="worked-example-header">
            <span class="we-badge">💡 STRATEGI & CONTOH JAWABAN BENAR DULU</span>
            <span class="we-sub">${currentItem.bookChapter} • ${currentItem.academicTopic || ''}</span>
          </div>
          <div class="we-body">
            <div class="we-row">
              <span class="we-label">📝 Model Kasus Serupa:</span>
              <span class="we-text">"${wePrompt}"</span>
            </div>
            <div class="we-row">
              <span class="we-label">✅ Contoh Jawaban Benar:</span>
              <code class="we-code">${weAns}</code>
            </div>
            <div class="we-row">
              <span class="we-label">🍼 Trik & Nalar Detektif Kodi:</span>
              <span class="we-text">${weLogic.replace(/\n/g, '<br>')}</span>
            </div>
          </div>
          <div class="we-divider">🎯 SEKARANG PECAHKAN TANTANGAN ASLI DI BAWAH INI:</div>
        </div>
      ` : ''}

      <!-- Academic Reading Passage or Speaking Scenario -->
      <div class="ibt-passage-card" style="margin-bottom: 18px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 6px;">
          <span style="font-size: 0.75rem; color: var(--accent-cyan); font-weight: 800; text-transform: uppercase;">
            ${isSpeaking ? '🎙️ Skenario Kampus & Audio Percakapan' : '📖 Teks Bacaan Ilmiah (Academic Reading Excerpt)'}
          </span>
          <button class="btn-secondary" style="font-size: 0.78rem; padding: 4px 10px;" onclick="playToeflAudio(${appState.currentIbtIndex}, this)">
            🔊 Dengarkan Audio Teks
          </button>
        </div>
        <p style="margin: 0; line-height: 1.6; color: #cbd5e1;">${passageText}</p>
        ${insertNotice}
      </div>

      <!-- Pertanyaan Tantangan -->
      <div style="margin-bottom: 18px;">
        <h3 style="color: #fff; font-size: 1.15rem; line-height: 1.5; margin-bottom: 14px;">
          "${currentItem.questionPrompt}"
        </h3>

        <!-- Pilihan Opsi A, B, C, D -->
        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${(currentItem.options || []).map((opt, idx) => {
            let btnStyle = "padding: 14px 18px; text-align: left; font-size: 0.92rem; border-radius: 8px; justify-content: flex-start; line-height: 1.45;";
            let icon = String.fromCharCode(65 + idx);
            if (selectedAnswer === opt) {
              if (opt === currentItem.correctAnswer) {
                btnStyle += " border-color: var(--accent-green); background: rgba(16, 185, 129, 0.25); color: #fff; font-weight: 700;";
                icon = "✓";
              } else {
                btnStyle += " border-color: var(--accent-pink); background: rgba(244, 63, 94, 0.25); color: #fca5a5;";
                icon = "✕";
              }
            }
            return `
              <button class="choice-card-btn" style="${btnStyle}" onclick="checkToeflIbtAnswer(${idx})">
                <span style="font-weight: 800; min-width: 24px; display: inline-block;">${icon}.</span>
                <span>${opt}</span>
              </button>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Feedback Box -->
      <div id="ibt-feedback-box">
        ${selectedAnswer ? (selectedAnswer === currentItem.correctAnswer ? `
          <div class="alert-box success">
            <strong>🎉 Jawaban Kamu 100% Tepat! (+1 Poin TOEFL iBT)</strong><br>
            <span>${currentItem.babyExplanation || 'Analisis teks dan penalaran kamu sangat akurat!'}</span>
          </div>
        ` : `
          <div class="alert-box warning">
            <strong>⚠️ Belum Tepat!</strong><br>
            <span>Pilihan kamu belum sesuai dengan bukti eksplisit di bacaan. Coba baca ulang paragraf acuan dan pilih opsi lain!</span>
          </div>
        `) : ''}
      </div>
    </div>
  `;
}

window.playToeflAudio = function(idx, btn) {
  if (typeof toeflIbtBuildingSkills === "undefined") return;
  const item = toeflIbtBuildingSkills[idx];
  if (!item) return;
  const text = item.targetSentenceForAudio || item.passageSnippet || item.questionPrompt || "";
  speechEngine.speakText(text, 0.8, btn, 'en-US');
};

window.filterIbtCategory = function(cat) {
  sfx.playClick();
  appState.currentIbtFilter = cat;
  renderToeflIbtBuildingSkills();
};

window.navIbtChallenge = function(delta) {
  sfx.playClick();
  const filteredList = (appState.currentIbtFilter === "all")
    ? toeflIbtBuildingSkills.map((item, idx) => ({ item, originalIndex: idx }))
    : toeflIbtBuildingSkills
        .map((item, idx) => ({ item, originalIndex: idx }))
        .filter(x => x.item.skillCategory === appState.currentIbtFilter);

  let currentPos = filteredList.findIndex(x => x.originalIndex === appState.currentIbtIndex);
  let newPos = currentPos + delta;
  if (newPos >= 0 && newPos < filteredList.length) {
    appState.currentIbtIndex = filteredList[newPos].originalIndex;
    renderToeflIbtBuildingSkills();
  }
};

window.setIbtIndex = function(idx) {
  sfx.playClick();
  appState.currentIbtIndex = idx;
  renderToeflIbtBuildingSkills();
};

window.checkToeflIbtAnswer = function(idx) {
  const currentItem = toeflIbtBuildingSkills[appState.currentIbtIndex];
  if (!currentItem) return;

  const chosenOpt = currentItem.options[idx];
  const isCorrect = (chosenOpt === currentItem.correctAnswer);

  appState.ibtUserAnswers = appState.ibtUserAnswers || {};
  appState.ibtUserAnswers[currentItem.id] = chosenOpt;

  if (isCorrect) {
    sfx.playSuccess();
    if (!appState.ibtCompleted.includes(currentItem.id)) {
      appState.ibtCompleted.push(currentItem.id);
      appState.stars = (appState.stars || 0) + 1;
      saveProgress();
      const starEl = document.getElementById("header-stars");
      if (starEl) starEl.textContent = `${appState.stars} Bintang`;
    }
    setKodiSpeech(
      "Excellent! Analisis TOEFL iBT kamu tepat sasaran!",
      currentItem.babyExplanation || "Penalaran akademik kamu sudah siap untuk ujian beasiswa dunia!"
    );
  } else {
    sfx.playWrong();
    setKodiSpeech(
      "Ups, opsi itu belum tepat!",
      "Hati-hati dengan jebakan distraktor! Cermati kembali bacaan ilmiah di atas ya!"
    );
  }

  renderToeflIbtBuildingSkills();
};

// ===================================================================
// EXCEL_TRAINER.JS — REALISTIC MICROSOFT EXCEL SUITE & FORMULA LAB
// Antarmuka Realistis Office: Title Bar, Ribbon, Bilah Rumus di Atas,
// Active Cell Bounded Fill Handle, Syntax Intellisense & F4/Alt+= Shortcuts
// ===================================================================

const EXCEL_SYNTAX_GUIDES = {
  'IF': '=IF(logical_test, value_if_true, [value_if_false])',
  'IFS': '=IFS(logical_test1, value1, [logical_test2, value2], ...)',
  'SUM': '=SUM(number1, [number2], ...)',
  'AVERAGE': '=AVERAGE(number1, [number2], ...)',
  'COUNT': '=COUNT(value1, [value2], ...)',
  'COUNTA': '=COUNTA(value1, [value2], ...)',
  'COUNTIF': '=COUNTIF(range, criteria)',
  'COUNTIFS': '=COUNTIFS(criteria_range1, criteria1, ...)',
  'SUMIF': '=SUMIF(range, criteria, [sum_range])',
  'SUMIFS': '=SUMIFS(sum_range, criteria_range1, criteria1, ...)',
  'AVERAGEIF': '=AVERAGEIF(range, criteria, [average_range])',
  'VLOOKUP': '=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])',
  'HLOOKUP': '=HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])',
  'INDEX': '=INDEX(array, row_num, [column_num])',
  'MATCH': '=MATCH(lookup_value, lookup_array, [match_type])',
  'XLOOKUP': '=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode])',
  'MAX': '=MAX(number1, [number2], ...)',
  'MIN': '=MIN(number1, [number2], ...)',
  'MEDIAN': '=MEDIAN(number1, [number2], ...)',
  'MODE': '=MODE.SNGL(number1, [number2], ...)',
  'STDEV': '=STDEV.S(number1, [number2], ...)',
  'STDEVP': '=STDEV.P(number1, [number2], ...)',
  'VAR': '=VAR.S(number1, [number2], ...)',
  'CONCATENATE': '=CONCATENATE(text1, [text2], ...)',
  'TEXT': '=TEXT(value, format_text)',
  'LEFT': '=LEFT(text, [num_chars])',
  'RIGHT': '=RIGHT(text, [num_chars])',
  'MID': '=MID(text, start_num, num_chars)',
  'LEN': '=LEN(text)',
  'TRIM': '=TRIM(text)',
  'UPPER': '=UPPER(text)',
  'LOWER': '=LOWER(text)',
  'PROPER': '=PROPER(text)',
  'ROUND': '=ROUND(number, num_digits)',
  'ROUNDUP': '=ROUNDUP(number, num_digits)',
  'ROUNDDOWN': '=ROUNDDOWN(number, num_digits)',
  'INT': '=INT(number)',
  'ABS': '=ABS(number)',
  'POWER': '=POWER(number, power)',
  'SQRT': '=SQRT(number)',
  'PMT': '=PMT(rate, nper, pv, [fv], [type])',
  'NPV': '=NPV(rate, value1, [value2], ...)',
  'IRR': '=IRR(values, [guess])',
  'CORREL': '=CORREL(array1, array2)',
  'FORECAST': '=FORECAST(x, known_y\'s, known_x\'s)',
  'TREND': '=TREND(known_y\'s, [known_x\'s], [new_x\'s])',
  'SLOPE': '=SLOPE(known_y\'s, known_x\'s)',
  'INTERCEPT': '=INTERCEPT(known_y\'s, known_x\'s)',
  'PERCENTILE': '=PERCENTILE.INC(array, k)',
  'QUARTILE': '=QUARTILE.INC(array, quart)',
  'RANK': '=RANK.EQ(number, ref, [order])'
};

// ===================================================================
// PINTASAN SAKTI F4: SIKLUS KUNCI SEL ABSOLUT $ (EXCEL ASLI)
// B2 -> $B$2 -> B$2 -> $B2 -> B2
// ===================================================================
window.cycleAbsoluteRefF4 = function() {
  const input = document.getElementById("excel-formula-input");
  if (!input) return;
  const val = input.value;
  if (!val) return;

  const start = input.selectionStart || val.length;
  const regex = /(\$?)([A-Za-z]+)(\$?)([0-9]+)/g;
  const matches = [];
  let m;
  while ((m = regex.exec(val)) !== null) {
    matches.push({
      full: m[0],
      hasColLock: m[1] === '$',
      col: m[2].toUpperCase(),
      hasRowLock: m[3] === '$',
      row: m[4],
      start: m.index,
      end: m.index + m[0].length
    });
  }

  if (matches.length === 0) {
    setKodiSpeech("💡 Tips Kunci F4:", "Ketik referensi sel dulu (misal: B2) lalu tekan F4 untuk mengunci $B$2!");
    return;
  }

  // Cari match terdekat sebelum kursor atau match terakhir
  let target = matches.find(item => start >= item.start && start <= item.end);
  if (!target) target = matches[matches.length - 1];

  let replacement = '';
  if (!target.hasColLock && !target.hasRowLock) {
    // Relatif -> Kunci Kolom & Baris: $B$2
    replacement = `$${target.col}$${target.row}`;
  } else if (target.hasColLock && target.hasRowLock) {
    // Kunci Keduanya -> Kunci Baris Saja: B$2
    replacement = `${target.col}$${target.row}`;
  } else if (!target.hasColLock && target.hasRowLock) {
    // Kunci Baris Saja -> Kunci Kolom Saja: $B2
    replacement = `$${target.col}${target.row}`;
  } else {
    // Kunci Kolom Saja -> Kembali Relatif: B2
    replacement = `${target.col}${target.row}`;
  }

  input.value = val.substring(0, target.start) + replacement + val.substring(target.end);
  input.focus();
  const newPos = target.start + replacement.length;
  input.setSelectionRange(newPos, newPos);

  if (window.sfx) sfx.playClick();
  window.onExcelFormulaTyping(input.value);
  setKodiSpeech(
    "🔒 Kunci Sel Excel (F4) Aktif!",
    `Referensi sel berhasil diubah: ${target.full} ➡️ ${replacement}`
  );
};

// ===================================================================
// LIVE TYPING & INTELLISENSE FORMULA HELPER
// ===================================================================
window.onExcelFormulaTyping = function(val) {
  const chal = excelChallenges[appState.currentExcelIndex] || excelChallenges[0];
  appState.excelUserFormulas[chal.id] = val;

  // Update tampilan sel target secara realtime di lembar kerja
  const targetCellEl = document.querySelector(`.excel-sheet-table td[data-coord='${chal.targetCell.toUpperCase()}'] .cell-content`);
  if (targetCellEl && !appState.excelCompleted.includes(chal.id)) {
    targetCellEl.textContent = val || `[ ${chal.targetCell} ]`;
  }

  // Cek tooltip sintaks resmi Excel
  const tooltipEl = document.getElementById("excel-syntax-tooltip");
  if (!tooltipEl) return;

  const upper = val.toUpperCase().trim();
  let matchedFunc = null;
  for (const [fnName, syntax] of Object.entries(EXCEL_SYNTAX_GUIDES)) {
    if (upper.startsWith(`=${fnName}`) || upper.startsWith(`=${fnName}(`)) {
      matchedFunc = syntax;
      break;
    }
  }

  if (matchedFunc) {
    tooltipEl.style.display = "block";
    tooltipEl.innerHTML = `💡 <b>Sintaks Resmi Excel:</b> <code>${matchedFunc}</code>`;
  } else if (upper.startsWith("=")) {
    tooltipEl.style.display = "block";
    tooltipEl.innerHTML = `💡 <i>Ketik nama rumus (IF, SUM, AVERAGE, VLOOKUP) atau referensi sel (B2)...</i>`;
  } else {
    tooltipEl.style.display = "none";
  }
};

// ===================================================================
// RENDER UTAMA STUDIO RUMUS EXCEL DENGAN JENDELA OFFICE ASLI
// ===================================================================
function renderExcelTrainer() {
  const container = document.getElementById("excel-content-area");
  if (!container) return;

  if (typeof excelChallenges === "undefined" || !excelChallenges.length) {
    container.innerHTML = `<div class="info-box">Data tantangan Excel sedang disiapkan...</div>`;
    return;
  }

  appState.excelCategoryFilter = appState.excelCategoryFilter || "all";
  appState.currentExcelIndex = appState.currentExcelIndex || 0;
  appState.excelCompleted = appState.excelCompleted || [];
  appState.excelUserFormulas = appState.excelUserFormulas || {};
  appState.excelActiveRibbonTab = appState.excelActiveRibbonTab || "home";

  const allCategories = [
    "all",
    "1. Logika Bisnis & Kondisional",
    "2. Statistik Dasar & Agregasi",
    "3. Statistik Bersyarat",
    "4. Pencarian Data & Lookup",
    "5. Statistik Deskriptif & Peringkat",
    "6. Sebaran, Kuartil & Probabilitas",
    "7. Varians, Deviasi & Korelasi",
    "8. Prediksi, Regresi & Tren",
    "9. Manipulasi Teks & Rapikan Data",
    "10. Waktu, Finansial & Pembulatan",
    "11. Simulasi Akuntansi & Tes Kerja Kantor (PT Maju Bersama)"
  ];

  const filteredList = (appState.excelCategoryFilter === "all")
    ? excelChallenges.map((c, i) => ({ item: c, originalIndex: i }))
    : excelChallenges
        .map((c, i) => ({ item: c, originalIndex: i }))
        .filter(x => x.item.category.includes(appState.excelCategoryFilter.split('.')[1]?.trim() || appState.excelCategoryFilter) || x.item.category === appState.excelCategoryFilter);

  if (appState.currentExcelIndex < 0 || appState.currentExcelIndex >= excelChallenges.length) {
    appState.currentExcelIndex = 0;
  }

  let currentPos = filteredList.findIndex(x => x.originalIndex === appState.currentExcelIndex);
  if (currentPos === -1 && filteredList.length > 0) {
    appState.currentExcelIndex = filteredList[0].originalIndex;
    currentPos = 0;
  }

  const chal = excelChallenges[appState.currentExcelIndex] || excelChallenges[0];
  const isCompleted = appState.excelCompleted.includes(chal.id);
  const currentFormula = appState.excelUserFormulas[chal.id] || chal.starterFormula || "=";

  // Active cell state (default ke targetCell)
  appState.excelActiveCell = appState.excelActiveCell || chal.targetCell.toUpperCase();
  const activeCoord = appState.excelActiveCell;
  const activeCol = activeCoord.replace(/[0-9]/g, '').toUpperCase();
  const activeRow = parseInt(activeCoord.replace(/[^0-9]/g, ''), 10);

  // Render Table Grid HTML
  const colHeaders = chal.tableHeaders || ["A", "B", "C", "D"];
  const tableRows = chal.tableRows || [];

  // Hitung statistik untuk Status Bar Excel
  const numList = [];
  tableRows.forEach(r => {
    colHeaders.forEach(c => {
      if (typeof r[c] === 'number') numList.push(r[c]);
    });
  });
  const statCount = numList.length;
  const statSum = numList.reduce((acc, v) => acc + v, 0);
  const statAvg = statCount ? (statSum / statCount).toLocaleString('id-ID', { maximumFractionDigits: 1 }) : '—';
  const statSumFormatted = statCount ? statSum.toLocaleString('id-ID') : '—';

  let gridBodyHtml = '';
  tableRows.forEach(rowObj => {
    const rowNum = rowObj.row;
    const isHeaderRow = (rowNum === 1);
    const isRowHighlighted = (rowNum === activeRow);

    gridBodyHtml += `<tr class="${isHeaderRow ? 'excel-header-data-row' : 'excel-data-row'}">`;
    gridBodyHtml += `<td class="excel-row-num ${isRowHighlighted ? 'row-highlight' : ''}">${rowNum}</td>`;

    colHeaders.forEach(col => {
      const cellCoord = `${col.toUpperCase()}${rowNum}`;
      const isTarget = (cellCoord === chal.targetCell.toUpperCase());
      const isActive = (cellCoord === activeCoord);
      const cellVal = rowObj[col] !== undefined ? rowObj[col] : "";

      let displayVal = cellVal;
      if (isTarget) {
        if (isCompleted) {
          displayVal = chal.expectedValue;
        } else {
          displayVal = `<span class="target-placeholder-text">[ ${chal.targetCell} ]</span>`;
        }
      }

      let extraCellClasses = [];
      if (isTarget) extraCellClasses.push('excel-target-cell' + (isCompleted ? ' solved' : ''));
      if (isActive) extraCellClasses.push('excel-cell-active');
      if (isHeaderRow) extraCellClasses.push('head-cell');

      gridBodyHtml += `
        <td class="excel-cell ${extraCellClasses.join(' ')}"
            id="cell-${cellCoord}"
            data-coord="${cellCoord}"
            data-col="${col.toUpperCase()}"
            data-row="${rowNum}"
            tabindex="0"
            onclick="selectExcelCell('${cellCoord}')"
            onkeydown="handleExcelGridKey(event, '${cellCoord}')">
          <span class="cell-content">${displayVal}</span>
          ${isActive ? `
            <div class="excel-fill-handle"
                 id="excel-fill-handle"
                 title="Tarik kotak hijau ini ke bawah untuk Auto-Fill! Atau klik ganda 2x!"
                 onmousedown="startExcelFillDrag(event, '${cellCoord}')"
                 ontouchstart="startExcelFillDrag(event, '${cellCoord}')"
                 ondblclick="excelAutoFillDoubleClicked('${cellCoord}')">
            </div>
          ` : ''}
        </td>
      `;
    });
    gridBodyHtml += `</tr>`;
  });

  const fiveCases = (typeof window.getExcelFiveCasesForChallenge === 'function')
    ? window.getExcelFiveCasesForChallenge(chal)
    : [];
  const activeCaseNum = appState.excelActiveCaseNum || 1;
  const currentCaseObj = fiveCases.find(c => c.caseNum === activeCaseNum) || fiveCases[0] || {
    caseNum: 1,
    badge: 'Persoalan #1 (Utama)',
    scenario: chal.scenario,
    instruction: chal.instruction,
    targetCell: chal.targetCell,
    sampleFormula: (chal.acceptedFormulas && chal.acceptedFormulas[0]) || '=SUM(B2:B4)'
  };

  // RENDER COMPLETE AUTHENTIC MICROSOFT EXCEL WINDOW & SCENARIO BRIEF
  container.innerHTML = `
    <div class="excel-container">
      <!-- 0. PUSAT DOWNLOAD WORKBOOK EXCEL PRAKTIK ASLI (.XLSX - 200 SHEET RUMUS & 1.000 PERSOALAN DUNIA NYATA) -->
      <div class="card" style="margin-bottom: 16px; padding: 18px 20px; border: 2px solid #107c41; background: linear-gradient(135deg, rgba(16, 124, 65, 0.14), rgba(15, 23, 42, 0.94)); border-radius: 16px; box-shadow: 0 8px 24px rgba(16, 124, 65, 0.18);">
        <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 12px;">
          <div>
            <div style="display: inline-flex; align-items: center; gap: 8px; background: #107c41; color: #ffffff; padding: 4px 12px; border-radius: 999px; font-size: 0.76rem; font-weight: 800; margin-bottom: 6px;">
              <span>📥 REALTIME DOWNLOAD FILE EXCEL ASLI (.XLSX)</span>
              <span>•</span>
              <span>200 SHEET RUMUS (1 RUMUS = 1 SHEET)</span>
            </div>
            <h3 style="margin: 0; font-size: 1.18rem; color: var(--text-main);">
              Workbook Praktik 200 Rumus Excel Dunia Nyata (1 Contoh + 5 Soal Tes Mandiri & Sheet Kunci Jawaban Akhir)
            </h3>
            <p style="margin: 4px 0 0; font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">
              Mau langsung praktek bebas di aplikasi <strong>Microsoft Excel Desktop / WPS / Google Sheets</strong>? Download workbook <code>.xlsx</code> di bawah ini! Setiap rumus punya <strong>1 Sheet khusus</strong> berisi: <em>Penjelasan Fungsi Bahasa Bayi</em>, <em>1 Contoh Soal & Contoh Jawaban Benar</em>, diikuti <strong>5 Soal Tes Dunia Nyata (Tanpa Kunci di Soal)</strong>, serta <strong>1 Sheet Paling Terakhir (<code>99_KUNCI_JAWABAN</code>)</strong> berisi kunci rumus & hasil seluruh soal tes!
            </p>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <a href="assets/downloads/Accounting_Work_Simulation_PT_Maju_Bersama.xlsx" download="Accounting_Work_Simulation_PT_Maju_Bersama.xlsx"
               style="display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #0284c7, #0369a1); color: #ffffff; text-decoration: none; font-weight: 900; font-size: 0.92rem; padding: 12px 18px; border-radius: 12px; box-shadow: 0 6px 18px rgba(2, 132, 199, 0.35); border: 2px solid #38bdf8; white-space: nowrap;">
              <span>💼 DOWNLOAD SIMULASI AKUNTANSI (.XLSX)</span>
            </a>
            <a href="assets/downloads/Master_160_Rumus_Excel_Dunia_Nyata.xlsx" download="Master_200_Rumus_Excel_Dunia_Nyata_Lengkap.xlsx"
               style="display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #10b981, #059669); color: #ffffff; text-decoration: none; font-weight: 900; font-size: 0.92rem; padding: 12px 18px; border-radius: 12px; box-shadow: 0 6px 18px rgba(16, 185, 129, 0.35); border: 2px solid #34d399; white-space: nowrap;">
              <span>⬇️ MASTER 200 RUMUS + KUNCI (.XLSX)</span>
            </a>
          </div>
        </div>

        <!-- Pilihan Paket Workbook Per Kategori -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 10px; margin-bottom: 12px;">
          <a href="assets/downloads/Accounting_Work_Simulation_PT_Maju_Bersama.xlsx" download
             style="display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 10px 14px; border-radius: 10px; background: rgba(14, 165, 233, 0.15); border: 1.5px solid rgba(56, 189, 248, 0.5); color: var(--text-main); text-decoration: none; font-size: 0.82rem; font-weight: 700; grid-column: 1 / -1;">
            <span>💼 <strong>Simulasi Siklus Akuntansi & Tes Kerja Kantor PT Maju Bersama:</strong> 12 Sheet Lengkap (Cover, Soal Interview Akunting, Dokumen Transaksi, Jurnal Umum PPN 11%, Buku Besar 4 Kolom, Neraca Saldo, AJP Depresiasi SLN & Sewa, Kertas Kerja 10 Kolom, Lap Laba Rugi, Modal, Neraca + Sheet 99_KUNCI_JAWABAN di Akhir)</span>
            <span style="color: #38bdf8; font-weight: 900; white-space: nowrap;">⬇️ Download .xlsx</span>
          </a>
          <a href="assets/downloads/Paket_1_Rumus_Matematika_Akuntansi_Logika.xlsx" download
             style="display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 10px 14px; border-radius: 10px; background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.35); color: var(--text-main); text-decoration: none; font-size: 0.82rem; font-weight: 700;">
            <span>📗 <strong>Paket 1:</strong> Matematika, Akuntansi & Logika + Kunci Akhir</span>
            <span style="color: #10b981; font-weight: 900;">⬇️ .xlsx</span>
          </a>
          <a href="assets/downloads/Paket_2_Rumus_Lookup_Teks_Tanggal_HRD.xlsx" download
             style="display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 10px 14px; border-radius: 10px; background: rgba(59, 130, 246, 0.12); border: 1px solid rgba(59, 130, 246, 0.35); color: var(--text-main); text-decoration: none; font-size: 0.82rem; font-weight: 700;">
            <span>📘 <strong>Paket 2:</strong> Lookup, Teks, Tanggal & HRD + Kunci Akhir</span>
            <span style="color: #3b82f6; font-weight: 900;">⬇️ .xlsx</span>
          </a>
          <a href="assets/downloads/Paket_3_Rumus_Keuangan_Audit_Statistika_Lengkap.xlsx" download
             style="display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 10px 14px; border-radius: 10px; background: rgba(245, 158, 11, 0.12); border: 1px solid rgba(245, 158, 11, 0.35); color: var(--text-main); text-decoration: none; font-size: 0.82rem; font-weight: 700;">
            <span>📙 <strong>Paket 3:</strong> Keuangan, Audit & Statistika + Kunci Akhir</span>
            <span style="color: #f59e0b; font-weight: 900;">⬇️ .xlsx</span>
          </a>
          <a href="assets/downloads/Paket_4_Khusus_95_Rumus_Statistika_Lengkap.xlsx" download
             style="display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 10px 14px; border-radius: 10px; background: rgba(168, 85, 247, 0.12); border: 1px solid rgba(168, 85, 247, 0.35); color: var(--text-main); text-decoration: none; font-size: 0.82rem; font-weight: 700;">
            <span>📓 <strong>Paket 4:</strong> Khusus 95 Rumus Statistika + Kunci Akhir</span>
            <span style="color: #a855f7; font-weight: 900;">⬇️ .xlsx</span>
          </a>
        </div>

        <!-- PANDUAN CARA MAIN / CARA PRAKTEK YANG JELAS -->
        <div style="background: rgba(15, 23, 42, 0.65); border: 1px solid rgba(148, 163, 184, 0.25); border-radius: 10px; padding: 12px 14px;">
          <div style="font-weight: 800; font-size: 0.88rem; color: #38bdf8; margin-bottom: 6px;">
            🎮 CARA MAIN & CARA PRAKTEK BIAR CEPAT JAGO RUMUS EXCEL:
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; font-size: 0.81rem; color: var(--text-main); line-height: 1.45;">
            <div style="background: rgba(255,255,255,0.04); padding: 8px 10px; border-radius: 8px; border-left: 3px solid #10b981;">
              <strong>Cara 1: Praktek di File Excel Asli (.xlsx)</strong><br>
              1. Klik tombol <b>Download Workbook (.xlsx)</b> di atas lalu buka di aplikasi Excel.<br>
              2. Di setiap sheet rumus, pelajari dulu <b>1 Contoh Soal & Jawaban Benar</b>.<br>
              3. Kerjakan <b>5 Soal Tes Dunia Nyata</b> di kotak kuning (tanpa bocoran kunci di soal), lalu cek kunci jawaban lengkapnya di sheet paling terakhir (<code>99_KUNCI_JAWABAN</code>)!
            </div>
            <div style="background: rgba(255,255,255,0.04); padding: 8px 10px; border-radius: 8px; border-left: 3px solid #f59e0b;">
              <strong>Cara 2: Main Simulator di Website Ini</strong><br>
              1. Pilih rumus dari menu <b>Soal #1 – #155</b> di bawah.<br>
              2. Pelajari kartu <b>💡 1 Contoh Soal & Contoh Jawaban Benar</b>.<br>
              3. Kerjakan <b>Soal Tes</b> di bawahnya dengan mengetik rumus di kotak <code>fx</code> (awali dengan <code>=</code>), lalu tekan <b>Enter</b> atau klik <b>▶️ Periksa Rumus</b>!
            </div>
          </div>
        </div>
      </div>

      <!-- 1. BARIS NAVIGASI SOAL 1-155 & KATEGORI -->
      <div class="challenge-nav-bar" style="margin-bottom: 14px;">
        <div class="challenge-nav-controls" style="flex: 1; min-width: 240px;">
          <label style="font-size: 0.8rem; font-weight: 700; color: #10b981;">📂 Kategori Modul:</label>
          <select class="challenge-page-select" onchange="filterExcelCategory(this.value)">
            <option value="all" ${appState.excelCategoryFilter === 'all' ? 'selected' : ''}>Semua Kategori (${excelChallenges.length} Rumus Dunia Nyata)</option>
            ${allCategories.filter(cat => cat !== 'all').map(cat => `
              <option value="${cat}" ${appState.excelCategoryFilter === cat ? 'selected' : ''}>${cat}</option>
            `).join('')}
          </select>
        </div>

        <div class="challenge-nav-controls">
          <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem;" onclick="navExcelChallenge(-1)" ${currentPos <= 0 ? 'disabled' : ''}>
            ⬅️ Prev
          </button>
          <select class="challenge-page-select" onchange="setExcelChallenge(Number(this.value))">
            ${filteredList.map((x) => `
              <option value="${x.originalIndex}" ${x.originalIndex === appState.currentExcelIndex ? 'selected' : ''}>
                Soal #${x.originalIndex + 1}: ${x.item.title.split(':')[1] || x.item.title} ${appState.excelCompleted.includes(x.item.id) ? '✅' : ''}
              </option>
            `).join('')}
          </select>
          <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem;" onclick="navExcelChallenge(1)" ${currentPos >= filteredList.length - 1 ? 'disabled' : ''}>
            Next ➡️
          </button>
        </div>
      </div>

      <!-- 2. WORKED EXAMPLE CARD (1 CONTOH SOAL & CONTOH JAWABAN BENAR PER RUMUS) -->
      ${chal.workedExample ? `
        <div class="excel-worked-example-card" style="border-left: 5px solid #107c41; margin-bottom: 14px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <div style="font-weight: 800; font-size: 0.95rem; color: #10b981; display: flex; align-items: center; gap: 6px;">
              <span>💡</span> <span>1 CONTOH SOAL & CONTOH JAWABAN BENAR — ${chal.workedExample.title || 'CONTOH PENGGUNAAN RUMUS'}</span>
            </div>
            <span style="font-size: 0.75rem; background: rgba(16, 124, 65, 0.2); color: #10b981; padding: 2px 8px; border-radius: 12px; font-weight: 700;">
              1 Contoh Lengkap + Jawaban 🍼
            </span>
          </div>
          <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 6px;">
            <strong>Contoh Soal (Data Simulasi):</strong> ${chal.workedExample.kasusSerupa}
          </div>
          <div style="background: rgba(0,0,0,0.25); border: 1px dashed rgba(16, 185, 129, 0.4); padding: 8px 12px; border-radius: 6px; font-family: monospace; font-size: 0.9rem; color: #34d399; margin-bottom: 8px;">
            <strong>Contoh Rumus Jawaban Benar:</strong> ${chal.workedExample.rumusContoh}
          </div>
          <div style="font-size: 0.83rem; color: var(--text-main); line-height: 1.45;">
            <strong>🍼 Penjelasan & Hasil Contoh:</strong> ${chal.workedExample.nalarBayi}
          </div>
        </div>
      ` : ''}

      <!-- 3. KODI EXCEL 3D MASCOT & 5 PERSOALAN DUNIA NYATA PER RUMUS -->
      <div class="card" style="padding: 16px 20px; border-left: 5px solid #107c41; margin-bottom: 16px;">
        <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 10px;">
          <img src="assets/illustrations/3d_tiles/tile_3d_${String(7 + (appState.currentExcelIndex % 6)).padStart(2, '0')}.png"
               style="width: 54px; height: 54px; border-radius: 12px; object-fit: cover; border: 2px solid #10b981; flex-shrink: 0; box-shadow: 0 4px 12px rgba(16, 124, 65, 0.25);"
               alt="Pahlawan Excel 3D #${String(7 + (appState.currentExcelIndex % 6)).padStart(2, '0')}">
          <div style="flex: 1;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <span style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; color: #10b981; background: rgba(16, 185, 129, 0.15); padding: 2px 8px; border-radius: 4px;">
                ${chal.category} • Rumus #${appState.currentExcelIndex + 1} dari ${excelChallenges.length}
              </span>
              ${isCompleted ? '<span style="font-size: 0.82rem; font-weight: 700; color: #10b981; background: rgba(16, 185, 129, 0.15); padding: 3px 10px; border-radius: 12px;">✅ Selesai Dikuasai</span>' : ''}
            </div>
            <h3 style="margin: 4px 0 2px 0; font-size: 1.15rem; color: var(--text-main);">${chal.title}</h3>
          </div>
        </div>

        <!-- TAB 5 PERSOALAN TES DUNIA NYATA UNTUK RUMUS INI (TANPA KUNCI RUMUS / HASIL) -->
        ${fiveCases.length > 0 ? `
          <div style="margin: 10px 0 12px; padding: 10px 12px; background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.28); border-radius: 10px;">
            <div style="font-size: 0.78rem; font-weight: 800; color: #10b981; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 6px;">
              <span>📝 5 SOAL TES DUNIA NYATA (TANPA KUNCI JAWABAN DI SOAL):</span>
              <span style="font-size: 0.74rem; color: var(--text-muted);">Di file <code>.xlsx</code>, ke-5 soal tes ini punya tabel masing-masing & kunci di sheet paling akhir!</span>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px;">
              ${fiveCases.map(c => `
                <button type="button"
                        onclick="selectExcelCaseNumber(${c.caseNum})"
                        style="padding: 6px 12px; border-radius: 8px; font-size: 0.78rem; font-weight: 800; cursor: pointer; border: ${c.caseNum === activeCaseNum ? '2px solid #10b981' : '1px solid rgba(148,163,184,0.3)'}; background: ${c.caseNum === activeCaseNum ? '#107c41' : 'var(--bg-secondary)'}; color: ${c.caseNum === activeCaseNum ? '#ffffff' : 'var(--text-main)'};">
                  ${c.badge}
                </button>
              `).join('')}
            </div>
            <div style="font-size: 0.86rem; color: var(--text-main); line-height: 1.5; margin-bottom: 6px;">
              <strong>📌 Skenario Tes (${currentCaseObj.badge}):</strong> ${currentCaseObj.scenario}
            </div>
            <div style="font-size: 0.83rem; color: var(--text-muted);">
              <strong>📋 Soal Tes:</strong> ${currentCaseObj.instruction}
            </div>
          </div>
        ` : `
          <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 8px; line-height: 1.5;">
            ${chal.scenario}
          </p>
        `}

        <div style="background: var(--bg-secondary); border-left: 4px solid var(--accent-yellow); padding: 8px 12px; border-radius: 4px; font-size: 0.86rem; color: var(--text-main);">
          <strong>🎯 Tugas Tes Simulator Tabel di Bawah:</strong> Ketik rumus jawabanmu di sel <b>${chal.targetCell}</b> (${chal.instruction})
        </div>
      </div>

      <!-- 4. JENDELA RESMI MICROSOFT EXCEL SUITE MOCKUP (TAMPILAN NYATA EXCEL) -->
      <div class="office-window-mockup excel-window" style="margin-bottom: 20px;">
        <!-- TITLE BAR ASLI EXCEL -->
        <div class="office-title-bar excel-title-bar">
          <div class="office-title-left">
            <span class="office-app-badge excel-badge">X</span>
            <span class="office-autosave-badge saved">🟢 AutoSave: ON</span>
            <span class="office-filename">BukuKerja_Latihan_Kantor.xlsx — Microsoft Excel</span>
          </div>
          <div class="office-window-controls">
            <span>🗕</span>
            <span>🗖</span>
            <span>✕</span>
          </div>
        </div>

        <!-- RIBBON TABS ASLI EXCEL -->
        <div class="office-ribbon-tabs excel-ribbon-tabs">
          <button type="button" class="ribbon-tab-item ${appState.excelActiveRibbonTab === 'home' ? 'active' : ''}" onclick="switchExcelRibbonTab('home')">Beranda (Home)</button>
          <button type="button" class="ribbon-tab-item ${appState.excelActiveRibbonTab === 'formulas' ? 'active' : ''}" onclick="switchExcelRibbonTab('formulas')">Rumus (Formulas)</button>
          <button type="button" class="ribbon-tab-item ${appState.excelActiveRibbonTab === 'data' ? 'active' : ''}" onclick="switchExcelRibbonTab('data')">Data</button>
          <button type="button" class="ribbon-tab-item" onclick="switchExcelRibbonTab('review')">Tinjau (Review)</button>
          <button type="button" class="ribbon-tab-item" onclick="switchExcelRibbonTab('view')">Tampilan (View)</button>
        </div>

        <!-- RIBBON COMMAND TOOLBAR ASLI EXCEL -->
        <div class="office-ribbon-toolbar">
          <div class="ribbon-group" title="Clipboard">
            <div class="ribbon-tools-row">
              <button type="button" class="office-tool-btn" onclick="excelToolAction('paste')" title="Tempel (Ctrl+V)">📋 Tempel</button>
              <button type="button" class="office-tool-btn" onclick="excelToolAction('copy')" title="Salin (Ctrl+C)">📄 Salin</button>
              <button type="button" class="office-tool-btn" onclick="excelToolAction('fill-down')" title="Isi ke Bawah (Ctrl+D)">⬇️ Isi (Ctrl+D)</button>
            </div>
            <div class="ribbon-group-label">Clipboard</div>
          </div>

          <div class="ribbon-group" title="Font">
            <div class="ribbon-tools-row">
              <span class="office-tool-select">Aptos (Body)</span>
              <span class="office-tool-select" style="width: 44px;">11 pt</span>
              <button type="button" class="office-tool-btn" onclick="excelToolAction('bold')" title="Tebal (Ctrl+B)"><b>B</b></button>
              <button type="button" class="office-tool-btn" onclick="excelToolAction('italic')" title="Miring (Ctrl+I)"><i>I</i></button>
              <button type="button" class="office-tool-btn" onclick="excelToolAction('underline')" title="Garis Bawah (Ctrl+U)"><u>U</u></button>
            </div>
            <div class="ribbon-group-label">Font</div>
          </div>

          <div class="ribbon-group" title="Perataan">
            <div class="ribbon-tools-row">
              <button type="button" class="office-tool-btn" onclick="excelToolAction('align-left')" title="Rata Kiri">⇤</button>
              <button type="button" class="office-tool-btn" onclick="excelToolAction('align-center')" title="Rata Tengah">⇥⇤</button>
              <button type="button" class="office-tool-btn" onclick="excelToolAction('align-right')" title="Rata Kanan">⇥</button>
            </div>
            <div class="ribbon-group-label">Perataan</div>
          </div>

          <div class="ribbon-group" title="Format Angka">
            <div class="ribbon-tools-row">
              <button type="button" class="office-tool-btn" onclick="excelToolAction('format-currency')" title="Mata Uang (Ctrl+Shift+$)"><b>$</b> Rp</button>
              <button type="button" class="office-tool-btn" onclick="excelToolAction('format-percent')" title="Persen (Ctrl+Shift+%)"><b>%</b></button>
              <button type="button" class="office-tool-btn" onclick="excelToolAction('format-comma')" title="Koma"><b>,</b></button>
            </div>
            <div class="ribbon-group-label">Angka</div>
          </div>

          <div class="ribbon-group" title="Pengeditan & Rumus">
            <div class="ribbon-tools-row">
              <button type="button" class="office-tool-btn" style="background: rgba(16, 124, 65, 0.15); color: #107c41; font-weight: 800;" onclick="excelToolAction('autosum')" title="AutoSum (Alt+=)"><b>∑ AutoSum (Alt+=)</b></button>
              <button type="button" class="office-tool-btn" onclick="cycleAbsoluteRefF4()" title="Kunci Sel Absolut $ (Tekan F4)">🔒 Kunci $ (F4)</button>
              <button type="button" class="office-tool-btn" onclick="excelToolAction('filter')" title="Filter (Ctrl+Shift+L)">🔻 Filter</button>
            </div>
            <div class="ribbon-group-label">Pengeditan & Rumus</div>
          </div>
        </div>

        <!-- 5. BILAH FORMULA EXCEL ASLI (DI ATAS SPREADSHEET!) -->
        <div class="excel-formula-bar" style="background: #ffffff; border-bottom: 1px solid #cbd5e1; padding: 6px 14px; display: flex; align-items: center; gap: 8px;">
          <!-- Name Box: Koordinat Sel Aktif -->
          <div class="formula-name-box" id="excel-active-coord" title="Kotak Nama Sel Aktif (Tekan F2 untuk Edit)">
            ${activeCoord}
          </div>

          <!-- Tombol Aksi Formula: Batal ✕, Enter ✓, Simbol fx -->
          <div class="formula-fx-icon" style="display: flex; gap: 6px; align-items: center;">
            <button type="button" class="btn-formula-tool btn-fx-cancel" onclick="resetExcelFormula()" title="Batal Pengeditan (Esc)">✕</button>
            <button type="button" class="btn-formula-tool btn-fx-enter" onclick="checkExcelCurrentChallenge()" title="Masukkan / Hitung Rumus (Enter / Ctrl+Enter)">✓</button>
            <span class="excel-fx-symbol" style="font-weight: 800; font-style: italic; color: #107c41; font-size: 1.05rem; margin-left: 2px;">fx</span>
          </div>

          <!-- Input Formula Text Field: Di Bilah Formula Langsung -->
          <div style="flex: 1; position: relative;">
            <input type="text"
                   id="excel-formula-input"
                   class="formula-input-line"
                   style="width: 100%; border: 1px solid #cbd5e1; border-radius: 4px; padding: 6px 12px; font-family: 'Consolas', monospace; font-size: 0.94rem; font-weight: 600;"
                   value="${currentFormula}"
                   placeholder="Ketik rumus jawaban tes diawali tanda '=' — Tekan F2 untuk fokus atau Enter untuk periksa!"
                   oninput="onExcelFormulaTyping(this.value)"
                   onkeydown="if(event.key==='Enter') checkExcelCurrentChallenge()" />
          </div>

          <!-- Tombol Periksa & Reset -->
          <button class="btn-primary" style="background: #107c41; border: none; padding: 7px 18px; font-size: 0.86rem; font-weight: 800;" onclick="checkExcelCurrentChallenge()">
            ▶️ Periksa Rumus
          </button>
          <button class="btn-secondary" style="padding: 7px 12px; font-size: 0.82rem;" onclick="resetExcelFormula()" title="Kembalikan Rumus Awal (Esc)">
            🔄 Reset
          </button>
        </div>

        <!-- TOOLTIP SINTAKS FORMULA INTELLISENSE -->
        <div id="excel-syntax-tooltip" class="excel-syntax-tooltip" style="display: none;"></div>

        <!-- 6. CHIPS CEPAT & PINTASAN TOMBOL SAKTI -->
        <div class="excel-quick-chips-bar">
          <span style="font-size: 0.78rem; font-weight: 800; color: #107c41; margin-right: 4px;">⚡ Bantuan Cepat:</span>
          ${chal.quickChips.map(chip => `
            <button type="button" class="excel-chip-tag" onclick="insertExcelChip('${chip.replace(/'/g, "\'")}')">${chip}</button>
          `).join('')}
          <span style="color: #cbd5e1; margin: 0 4px;">|</span>
          <button type="button" class="excel-chip-tag keycap-style" onclick="cycleAbsoluteRefF4()" title="Tekan F4 di keyboard untuk mengunci sel $">F4 ($ Kunci)</button>
          <button type="button" class="excel-chip-tag keycap-style" onclick="excelToolAction('autosum')" title="Tekan Alt+= untuk AutoSum">Alt+= (AutoSum)</button>
          <button type="button" class="excel-chip-tag keycap-style" onclick="excelAutoFillDoubleClicked('${chal.targetCell}')" title="Klik ganda fill handle">Tarik Rumus ⬇️</button>
        </div>

        <!-- 7. KISI SPREADSHEET ASLI EXCEL DENGAN FILL HANDLE -->
        <div class="office-canvas-viewport" style="background: #cbd5e1; padding: 18px 14px;">
          <div class="excel-spreadsheet-sheet" style="max-width: 100%; width: 100%; background: #ffffff;">
            <table class="excel-table-grid excel-sheet-table" id="excel-main-sheet">
              <thead>
                <tr class="excel-header-row">
                  <th class="excel-corner-cell">◢</th>
                  ${colHeaders.map(col => `
                    <th class="excel-col-head ${col.toUpperCase() === activeCol ? 'col-highlight' : ''}" data-col="${col}">${col}</th>
                  `).join('')}
                </tr>
              </thead>
              <tbody>
                ${gridBodyHtml}
              </tbody>
            </table>
          </div>
        </div>

        <!-- 8. SHEET TABS & STATUS BAR ASLI EXCEL -->
        <div class="office-status-bar excel-status-bar">
          <div class="status-left">
            <span class="excel-sheet-pill active">Sheet1</span>
            <span class="excel-sheet-pill">+</span>
            <span style="margin-left: 14px; font-weight: 700;">SIAP</span>
            <span style="opacity: 0.8; font-size: 0.75rem;">| Sel Target: <b>${chal.targetCell}</b></span>
          </div>
          <div class="status-right">
            <span>Rata-rata: ${statAvg}</span>
            <span>Jumlah Data: ${statCount}</span>
            <span>Total: ${statSumFormatted}</span>
            <span>100% ➖ 🎚️ ➕</span>
          </div>
        </div>
      </div>

      <!-- FEEDBACK / ALERT CONTAINER -->
      <div id="excel-feedback-box" style="display: none; margin-top: 14px;"></div>
    </div>
  `;
}

// ===================================================================
// INTERAKTIVITAS SEL EXCEL & SELEKSI
// ===================================================================
window.switchExcelRibbonTab = function(tabName) {
  if (window.sfx) sfx.playClick();
  appState.excelActiveRibbonTab = tabName;
  if (tabName === 'formulas') {
    setKodiSpeech("Tab Rumus (Formulas)", "Tab ini berisi pustaka fungsi logika (IF), teks (LEFT, MID), statistik (SUM, AVERAGE), dan pencarian (VLOOKUP)!");
  } else if (tabName === 'data') {
    setKodiSpeech("Tab Data", "Tab Data menyediakan alat penyortiran (Sort), filter (Ctrl+Shift+L), dan validasi tabel!");
  } else {
    setKodiSpeech("Tab Beranda (Home)", "Tab utama untuk pemformatan huruf, perataan sel, format angka, dan AutoSum!");
  }
  renderExcelTrainer();
};

window.selectExcelCell = function(coord) {
  if (window.sfx) sfx.playClick();
  appState.excelActiveCell = coord.toUpperCase();

  const colLetter = coord.replace(/[0-9]/g, '').toUpperCase();
  const rowNum = parseInt(coord.replace(/[^0-9]/g, ''), 10);

  // Update badge kotak nama di bilah formula
  const badge = document.getElementById("excel-active-coord");
  if (badge) badge.textContent = coord;

  // Update highlight kolom dan baris
  document.querySelectorAll(".excel-col-head").forEach(th => {
    th.classList.toggle("col-highlight", th.getAttribute("data-col") === colLetter);
  });
  document.querySelectorAll(".excel-row-num").forEach(td => {
    td.classList.toggle("row-highlight", parseInt(td.textContent.trim(), 10) === rowNum);
  });

  // Re-render highlight cell & pindahkan fill handle
  document.querySelectorAll(".excel-sheet-table td.excel-cell").forEach(td => {
    td.classList.remove("excel-cell-active");
    const oldHandle = td.querySelector(".excel-fill-handle");
    if (oldHandle) oldHandle.remove();
  });

  const activeTd = document.getElementById(`cell-${coord}`);
  if (activeTd) {
    activeTd.classList.add("excel-cell-active");
    const handleEl = document.createElement("div");
    handleEl.className = "excel-fill-handle";
    handleEl.id = "excel-fill-handle";
    handleEl.title = "Tarik kotak hijau ini ke bawah untuk Auto-Fill! Atau klik ganda 2x!";
    handleEl.onmousedown = (e) => startExcelFillDrag(e, coord);
    handleEl.ontouchstart = (e) => startExcelFillDrag(e, coord);
    handleEl.ondblclick = () => excelAutoFillDoubleClicked(coord);
    activeTd.appendChild(handleEl);
  }
};

// Drag Handle Auto-Fill Logic
window.startExcelFillDrag = function(e, startCoord) {
  e.preventDefault();
  e.stopPropagation();

  const chal = excelChallenges[appState.currentExcelIndex] || excelChallenges[0];
  const colLetter = startCoord.replace(/[0-9]/g, '').toUpperCase();
  const startRow = parseInt(startCoord.replace(/[^0-9]/g, ''), 10);

  let maxRow = startRow;
  let draggedCells = [];

  let tooltip = document.getElementById("excel-drag-tooltip");
  if (!tooltip) {
    tooltip = document.createElement("div");
    tooltip.id = "excel-drag-tooltip";
    tooltip.className = "excel-drag-tooltip";
    document.body.appendChild(tooltip);
  }
  tooltip.style.display = "block";
  tooltip.textContent = `↕️ Tarik Rumus Auto-Fill (${startCoord})`;

  function onMouseMove(moveEvent) {
    const clientX = moveEvent.clientX || (moveEvent.touches && moveEvent.touches[0].clientX);
    const clientY = moveEvent.clientY || (moveEvent.touches && moveEvent.touches[0].clientY);

    tooltip.style.left = `${clientX + 14}px`;
    tooltip.style.top = `${clientY + 14}px`;

    const elemBelow = document.elementFromPoint(clientX, clientY);
    const targetTd = elemBelow ? elemBelow.closest("td[data-coord]") : null;

    if (targetTd) {
      const hoverCol = targetTd.getAttribute("data-col");
      const hoverRow = parseInt(targetTd.getAttribute("data-row"), 10);

      if (hoverCol === colLetter && hoverRow >= startRow) {
        maxRow = hoverRow;
        tooltip.textContent = `⬇️ Auto-Fill ke ${colLetter}${maxRow}`;

        draggedCells = [];
        document.querySelectorAll(".excel-sheet-table td[data-col='" + colLetter + "']").forEach(td => {
          const r = parseInt(td.getAttribute("data-row"), 10);
          if (r >= startRow && r <= maxRow) {
            td.classList.add("excel-drag-selecting");
            draggedCells.push(td);
          } else {
            td.classList.remove("excel-drag-selecting");
          }
        });
      }
    }
  }

  function onMouseUp() {
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
    window.removeEventListener("touchmove", onMouseMove);
    window.removeEventListener("touchend", onMouseUp);

    if (tooltip) tooltip.style.display = "none";
    document.querySelectorAll(".excel-drag-selecting").forEach(td => td.classList.remove("excel-drag-selecting"));

    if (maxRow > startRow) {
      if (window.sfx) sfx.playSuccess();
      const targetRow = parseInt(chal.targetCell.replace(/[^0-9]/g, ''), 10);
      const targetCol = chal.targetCell.replace(/[0-9]/g, '').toUpperCase();

      if (targetCol === colLetter && targetRow <= maxRow) {
        const input = document.getElementById("excel-formula-input");
        if (input && (!input.value || input.value === "=")) {
          input.value = chal.acceptedFormulas[0] || chal.starterFormula || "=";
          window.onExcelFormulaTyping(input.value);
        }
        checkExcelCurrentChallenge();
      }

      setKodiSpeech(
        "🎉 Hebaaat! Kamu berhasil menarik rumus (Auto-Fill) ke bawah!",
        `Kotak hijau ditarik dari ${startCoord} sampai ${colLetter}${maxRow}. Rumus tersalin otomatis ke seluruh baris seperti di Excel asli!`
      );
    }
  }

  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mouseup", onMouseUp);
  window.addEventListener("touchmove", onMouseMove, { passive: false });
  window.addEventListener("touchend", onMouseUp);
};

// Double-click Auto-Fill Handle
window.excelAutoFillDoubleClicked = function(coord) {
  const chal = excelChallenges[appState.currentExcelIndex] || excelChallenges[0];
  if (window.sfx) sfx.playSuccess();

  const input = document.getElementById("excel-formula-input");
  if (input && (!input.value || input.value === "=")) {
    input.value = chal.acceptedFormulas[0] || chal.starterFormula || "=";
    window.onExcelFormulaTyping(input.value);
  }
  checkExcelCurrentChallenge();

  setKodiSpeech(
    "⚡ Wow! Trik Klik Ganda (Double-Click) Fill Handle!",
    "Di Excel asli, klik dua kali pada kotak hijau kecil langsung mengisi rumus ke bawah sampai ujung tabel secara instan!"
  );
};

// ===================================================================
// TOOLBAR ACTIONS LENGKAP
// ===================================================================
window.excelToolAction = function(action) {
  if (window.sfx) sfx.playClick();
  const chal = excelChallenges[appState.currentExcelIndex] || excelChallenges[0];
  const activeCoord = appState.excelActiveCell || chal.targetCell;
  const activeTd = document.getElementById(`cell-${activeCoord}`);

  if (action === 'bold') {
    if (activeTd) {
      const isBold = activeTd.style.fontWeight === 'bold' || activeTd.style.fontWeight === '800';
      activeTd.style.fontWeight = isBold ? 'normal' : '800';
    }
    setKodiSpeech("Pintasan: Ctrl+B (Bold)", `Format huruf tebal diterapkan ke sel ${activeCoord}!`);
  } else if (action === 'italic') {
    if (activeTd) {
      const isItalic = activeTd.style.fontStyle === 'italic';
      activeTd.style.fontStyle = isItalic ? 'normal' : 'italic';
    }
    setKodiSpeech("Pintasan: Ctrl+I (Italic)", `Format huruf miring diterapkan ke sel ${activeCoord}!`);
  } else if (action === 'underline') {
    if (activeTd) {
      const isU = activeTd.style.textDecoration === 'underline';
      activeTd.style.textDecoration = isU ? 'none' : 'underline';
    }
    setKodiSpeech("Pintasan: Ctrl+U (Underline)", `Garis bawah diterapkan ke sel ${activeCoord}!`);
  } else if (action === 'align-left') {
    if (activeTd) activeTd.style.textAlign = 'left';
  } else if (action === 'align-center') {
    if (activeTd) activeTd.style.textAlign = 'center';
  } else if (action === 'align-right') {
    if (activeTd) activeTd.style.textAlign = 'right';
  } else if (action === 'autosum') {
    const input = document.getElementById("excel-formula-input");
    if (input) {
      let detectedRange = "A1:A5";
      const colHeaders = chal.tableHeaders || ["A", "B", "C", "D"];
      const tableRows = chal.tableRows || [];
      for (const col of colHeaders) {
        const numRows = tableRows.filter(r => r.row > 1 && typeof r[col] === 'number');
        if (numRows.length >= 2) {
          detectedRange = `${col}2:${col}${tableRows.length}`;
          break;
        }
      }
      input.value = `=SUM(${detectedRange})`;
      input.focus();
      window.onExcelFormulaTyping(input.value);
    }
    setKodiSpeech(
      "⚡ Pintasan Rahasia: Alt + = (AutoSum)",
      "AutoSum otomatis memasukkan rumus =SUM(...) ke bilah rumus! Tekan Enter untuk menghitung hasilnya!"
    );
  } else if (action === 'fill-down') {
    const input = document.getElementById("excel-formula-input");
    if (input && (!input.value || input.value === "=")) {
      input.value = chal.acceptedFormulas[0] || chal.starterFormula || "=";
      window.onExcelFormulaTyping(input.value);
    }
    excelAutoFillDoubleClicked(chal.targetCell);
    setKodiSpeech("⬇️ Pintasan: Ctrl+D (Fill Down)", `Rumus disalin ke bawah pada sel ${activeCoord}!`);
  } else if (action === 'format-currency') {
    if (activeTd) {
      const num = parseFloat(activeTd.innerText.replace(/[^0-9.-]/g, ''));
      if (!isNaN(num)) activeTd.innerText = 'Rp ' + num.toLocaleString('id-ID');
    }
    setKodiSpeech("Pintasan: Ctrl+Shift+$", `Format mata uang Rupiah diterapkan ke sel ${activeCoord}!`);
  } else if (action === 'format-percent') {
    if (activeTd) {
      const num = parseFloat(activeTd.innerText.replace(/[^0-9.-]/g, ''));
      if (!isNaN(num)) activeTd.innerText = (num * 100).toFixed(0) + '%';
    }
    setKodiSpeech("Pintasan: Ctrl+Shift+%", `Format persentase diterapkan ke sel ${activeCoord}!`);
  } else if (action === 'copy') {
    if (activeTd) {
      window._excelCopiedValue = activeTd.innerText;
      setKodiSpeech("Pintasan: Ctrl+C", `Konten sel ${activeCoord} ('${window._excelCopiedValue}') berhasil disalin!`);
    }
  } else if (action === 'paste') {
    const input = document.getElementById("excel-formula-input");
    if (input && window._excelCopiedValue) {
      input.value += window._excelCopiedValue;
      window.onExcelFormulaTyping(input.value);
      setKodiSpeech("Pintasan: Ctrl+V", `Konten '${window._excelCopiedValue}' berhasil ditempel ke bilah formula!`);
    }
  } else if (action === 'filter') {
    setKodiSpeech("Pintasan: Ctrl+Shift+L", "Filter otomatis pada judul kolom tabel berhasil diaktifkan!");
  }
};

// ===================================================================
// NAVIGASI KEYBOARD PADA GRID EXCEL (Arrow Keys, Tab, Enter, F2)
// ===================================================================
window.handleExcelGridKey = function(e, coord) {
  const chal = excelChallenges[appState.currentExcelIndex] || excelChallenges[0];
  const colLetter = coord.replace(/[0-9]/g, '').toUpperCase();
  const rowNum = parseInt(coord.replace(/[^0-9]/g, ''), 10);
  const colHeaders = chal.tableHeaders || ["A", "B", "C", "D"];
  const colIdx = colHeaders.indexOf(colLetter);

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    selectExcelCell(`${colLetter}${rowNum + 1}`);
  } else if (e.key === 'ArrowUp' && rowNum > 1) {
    e.preventDefault();
    selectExcelCell(`${colLetter}${rowNum - 1}`);
  } else if (e.key === 'ArrowRight' && colIdx < colHeaders.length - 1) {
    e.preventDefault();
    selectExcelCell(`${colHeaders[colIdx + 1]}${rowNum}`);
  } else if (e.key === 'ArrowLeft' && colIdx > 0) {
    e.preventDefault();
    selectExcelCell(`${colHeaders[colIdx - 1]}${rowNum}`);
  } else if (e.key === 'Enter') {
    e.preventDefault();
    selectExcelCell(`${colLetter}${rowNum + 1}`);
  } else if (e.key === 'Tab') {
    e.preventDefault();
    if (colIdx < colHeaders.length - 1) selectExcelCell(`${colHeaders[colIdx + 1]}${rowNum}`);
  } else if (e.key === 'F2') {
    e.preventDefault();
    const input = document.getElementById("excel-formula-input");
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  }
};

// ===================================================================
// GLOBAL PHYSICAL KEYBOARD EVENT HANDLER KHUSUS TAB RUMUS EXCEL
// Mengaktifkan F2, F4, Alt+=, Enter, Ctrl+D, Ctrl+B, dll secara native!
// ===================================================================
window.handleFormulaExcelPhysicalKey = function(e) {
  const chal = excelChallenges[appState.currentExcelIndex] || excelChallenges[0];
  const input = document.getElementById("excel-formula-input");
  const isInputFocused = (document.activeElement === input);

  // 1. F2: Mode Edit Sel / Fokus Bilah Rumus
  if (e.key === 'F2') {
    e.preventDefault();
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
      setKodiSpeech("Mode Edit Aktif (F2)", "Kursor sudah masuk ke bilah rumus Excel!");
    }
    return;
  }

  // 2. F4: Siklus Kunci Sel Absolut $ (B2 -> $B$2 -> B$2 -> $B2 -> B2)
  if (e.key === 'F4') {
    e.preventDefault();
    cycleAbsoluteRefF4();
    return;
  }

  // 3. Alt + = : AutoSum Otomatis
  if (e.altKey && (e.key === '=' || e.key === '+' || e.code === 'Equal')) {
    e.preventDefault();
    excelToolAction('autosum');
    return;
  }

  // 4. Ctrl + Enter atau Enter di luar input textarea: Periksa Rumus
  if ((e.ctrlKey && e.key === 'Enter') || (e.key === 'Enter' && isInputFocused)) {
    e.preventDefault();
    checkExcelCurrentChallenge();
    return;
  }

  // 5. Escape: Reset Rumus
  if (e.key === 'Escape') {
    e.preventDefault();
    resetExcelFormula();
    return;
  }

  // 6. Ctrl + D: Fill Down
  if (e.ctrlKey && e.key.toLowerCase() === 'd') {
    e.preventDefault();
    excelToolAction('fill-down');
    return;
  }

  // 7. Ctrl + B, I, U
  if (e.ctrlKey && e.key.toLowerCase() === 'b') {
    e.preventDefault();
    excelToolAction('bold');
    return;
  }
  if (e.ctrlKey && e.key.toLowerCase() === 'i') {
    e.preventDefault();
    excelToolAction('italic');
    return;
  }
  if (e.ctrlKey && e.key.toLowerCase() === 'u') {
    e.preventDefault();
    excelToolAction('underline');
    return;
  }

  // 8. Ctrl + Shift + $ atau 4: Format Currency
  if (e.ctrlKey && e.shiftKey && (e.key === '$' || e.key === '4' || e.code === 'Digit4')) {
    e.preventDefault();
    excelToolAction('format-currency');
    return;
  }

  // 9. Ctrl + Shift + % atau 5: Format Percent
  if (e.ctrlKey && e.shiftKey && (e.key === '%' || e.key === '5' || e.code === 'Digit5')) {
    e.preventDefault();
    excelToolAction('format-percent');
    return;
  }

  // 10. Ctrl + Shift + L: Filter
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'l') {
    e.preventDefault();
    excelToolAction('filter');
    return;
  }

  // 11. Navigasi Grid dengan Tombol Panah (Jika Input Tidak Sedang Fokus Mengetik)
  if (!isInputFocused && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
    handleExcelGridKey(e, appState.excelActiveCell || chal.targetCell);
    return;
  }
};

// ===================================================================
// NAVIGASI, FILTER & EKSEKUSI SOAL
// ===================================================================
window.filterExcelCategory = function(cat) {
  sfx.playClick();
  appState.excelCategoryFilter = cat;
  renderExcelTrainer();
};

window.navExcelChallenge = function(delta) {
  sfx.playClick();
  const filteredList = (appState.excelCategoryFilter === "all")
    ? excelChallenges.map((c, i) => i)
    : excelChallenges
        .map((c, i) => ({ item: c, originalIndex: i }))
        .filter(x => x.item.category.includes(appState.excelCategoryFilter.split('.')[1]?.trim() || appState.excelCategoryFilter) || x.item.category === appState.excelCategoryFilter)
        .map(x => x.originalIndex);

  let currentPos = filteredList.indexOf(appState.currentExcelIndex);
  let newPos = currentPos + delta;
  if (newPos >= 0 && newPos < filteredList.length) {
    appState.currentExcelIndex = filteredList[newPos];
    appState.excelActiveCaseNum = 1;
    renderExcelTrainer();
  }
};

window.setExcelChallenge = function(idx) {
  sfx.playClick();
  appState.currentExcelIndex = idx;
  appState.excelActiveCaseNum = 1;
  renderExcelTrainer();
};

window.selectExcelCaseNumber = function(caseNum) {
  if (window.sfx) sfx.playClick();
  appState.excelActiveCaseNum = caseNum;
  renderExcelTrainer();
};

window.insertExcelChip = function(snippet) {
  sfx.playClick();
  const input = document.getElementById("excel-formula-input");
  if (input) {
    input.value += snippet;
    input.focus();
    window.onExcelFormulaTyping(input.value);
  }
};

window.resetExcelFormula = function() {
  sfx.playClick();
  const chal = excelChallenges[appState.currentExcelIndex] || excelChallenges[0];
  const input = document.getElementById("excel-formula-input");
  if (input) {
    input.value = chal.starterFormula || "=";
    input.focus();
    window.onExcelFormulaTyping(input.value);
  }
  delete appState.excelUserFormulas[chal.id];
  const feedbackBox = document.getElementById("excel-feedback-box");
  if (feedbackBox) feedbackBox.style.display = "none";
};

window.checkExcelCurrentChallenge = function() {
  const chal = excelChallenges[appState.currentExcelIndex] || excelChallenges[0];
  const input = document.getElementById("excel-formula-input");
  const formula = input ? input.value : "";
  appState.excelUserFormulas[chal.id] = formula;

  const result = checkExcelChallengeAnswer(formula, chal);
  const feedbackBox = document.getElementById("excel-feedback-box");

  if (result.isCorrect) {
    sfx.playSuccess();
    if (!appState.excelCompleted.includes(chal.id)) {
      appState.excelCompleted.push(chal.id);
      appState.stars = (appState.stars || 0) + 1;
      saveProgress();
      const starCountEl = document.getElementById("header-stars");
      if (starCountEl) starCountEl.textContent = `${appState.stars} Bintang`;
    }

    if (feedbackBox) {
      feedbackBox.style.display = "block";
      feedbackBox.className = "alert-box success";
      feedbackBox.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
          <div>
            <strong>${result.feedback}</strong><br>
            <span>Hasil perhitungan di sel <strong>${chal.targetCell}</strong>: <strong style="color: #10b981; font-size: 1.05rem;">${chal.expectedValue}</strong></span>
          </div>
          <button class="btn-primary" style="background: #107c41; border: none; padding: 8px 16px;" onclick="navExcelChallenge(1)">
            Tantangan Berikutnya ➡️
          </button>
        </div>
      `;
    }

    // Update target cell in table immediately
    const targetCellEl = document.querySelector(`#cell-${chal.targetCell.toUpperCase()} .cell-content`);
    if (targetCellEl) {
      targetCellEl.textContent = chal.expectedValue;
    }
    const targetTd = document.getElementById(`cell-${chal.targetCell.toUpperCase()}`);
    if (targetTd) {
      targetTd.classList.add("solved");
    }

    setKodiSpeech(
      `Horeee! Jawaban kamu untuk ${chal.title} benar 100%!`,
      `Hasil perhitungan ${chal.targetCell} adalah ${chal.expectedValue}. Kamu dapat +1 Bintang!`
    );
  } else {
    sfx.playWrong();
    if (feedbackBox) {
      feedbackBox.style.display = "block";
      feedbackBox.className = "alert-box warning";
      feedbackBox.innerHTML = `
        <strong>⚠️ Belum tepat nih, coba lagi yuk!</strong><br>
        <span>${result.feedback}</span>
      `;
    }

    setKodiSpeech(
      "Ups, rumus kamu belum menghasilkan jawaban yang diharapkan nih!",
      `Coba lihat contoh di kotak atas atau petunjuk: ${chal.babyHint}`
    );
  }
};


// ================= IT TECH & NETWORK LAB (100 TANTANGAN) =================
function renderItTechTrainer() {
  const container = document.getElementById("it-tech-content-area");
  if (!container) return;

  if (typeof itTechChallenges === "undefined" || !itTechChallenges.length) {
    container.innerHTML = `<div class="info-box">Data laboratorium IT Tech sedang dimuat...</div>`;
    return;
  }

  appState.itTechCategoryFilter = appState.itTechCategoryFilter || "all";
  appState.currentItTechIndex = appState.currentItTechIndex || 0;
  appState.itTechCompleted = appState.itTechCompleted || [];
  appState.itTechAnswers = appState.itTechAnswers || {};

  const categories = [
    { key: "all", label: `📂 Semua Lab (${itTechChallenges.length} Soal)` },
    { key: "1. Perangkat Keras & Motherboard (CompTIA A+)", label: "🖥️ 1. Hardware & Motherboard (20)" },
    { key: "2. Jaringan Komputer & Subnetting (Network+ & Cisco CCNA)", label: "🌐 2. Jaringan & CCNA (20)" },
    { key: "3. Sistem Operasi & CLI Troubleshooting (Windows & Linux)", label: "💻 3. OS & CLI (20)" },
    { key: "4. Pertahanan Siber & Keamanan IT (Security+ SY0-701)", label: "🛡️ 4. Cyber Security (20)" },
    { key: "5. Algoritma & Automasi IT (Grokking & Python Automate)", label: "⚡ 5. Algoritma & Automasi (20)" }
  ];

  const filteredList = appState.itTechCategoryFilter === "all"
    ? itTechChallenges.map((item, idx) => ({ item, originalIndex: idx }))
    : itTechChallenges
        .map((item, idx) => ({ item, originalIndex: idx }))
        .filter(x => x.item.category === appState.itTechCategoryFilter);

  if (appState.currentItTechIndex < 0 || appState.currentItTechIndex >= itTechChallenges.length) {
    appState.currentItTechIndex = 0;
  }

  // Ensure currentItTechIndex matches filtered category if not in it
  let activeEntry = filteredList.find(x => x.originalIndex === appState.currentItTechIndex);
  if (!activeEntry && filteredList.length > 0) {
    activeEntry = filteredList[0];
    appState.currentItTechIndex = activeEntry.originalIndex;
  }
  const chal = itTechChallenges[appState.currentItTechIndex] || itTechChallenges[0];
  const isCompleted = appState.itTechCompleted.includes(chal.id);
  const selectedOption = appState.itTechAnswers[chal.id];
  const completedCount = appState.itTechCompleted.length;
  const progressPercent = Math.round((completedCount / itTechChallenges.length) * 100);

  container.innerHTML = `
    <!-- Hero Header -->
    <div style="background: linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.98)); border: 1px solid var(--border-glow); border-radius: var(--radius-lg); padding: 22px; margin-bottom: 20px; box-shadow: var(--shadow-card);">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 14px;">
        <div style="flex: 1; min-width: 260px;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
            <span style="font-size: 1.8rem;">🛠️</span>
            <div>
              <h3 style="margin: 0; color: #fff; font-size: 1.3rem;">Laboratorium IT Tech, Jaringan & Keamanan</h3>
              <p style="margin: 2px 0 0; font-size: 0.85rem; color: var(--accent-cyan);">
                100 Tantangan Berbasis Buku Standar Dunia: CompTIA A+, Network+, Cisco CCNA, Security+ SY0-701, Grokking Algorithms, & Python Automate
              </p>
            </div>
          </div>
        </div>
        <div style="text-align: right; min-width: 170px;">
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 4px;">Pencapaian Laboratorium:</div>
          <div style="font-size: 1.25rem; font-weight: 800; color: var(--accent-green);">
            ${completedCount} / ${itTechChallenges.length} Selesai (${progressPercent}%)
          </div>
          <div style="height: 6px; width: 100%; background: rgba(255,255,255,0.1); border-radius: 3px; margin-top: 6px; overflow: hidden;">
            <div style="height: 100%; width: ${progressPercent}%; background: linear-gradient(90deg, var(--accent-cyan), var(--accent-green));"></div>
          </div>
        </div>
      </div>

      <!-- Kategori Filter Tabs -->
      <div style="display: flex; gap: 8px; margin-top: 18px; overflow-x: auto; padding-bottom: 6px;">
        ${categories.map(c => `
          <button class="choice-card-btn ${appState.itTechCategoryFilter === c.key ? 'active-eng-mode' : ''}" 
                  style="flex: 1; min-width: 170px; padding: 10px 14px; font-size: 0.82rem; font-weight: 700; text-align: center; justify-content: center; ${appState.itTechCategoryFilter === c.key ? 'border-color: var(--accent-cyan); background: rgba(6, 182, 212, 0.15);' : ''}" 
                  onclick="setItTechCategory('${c.key}')">
            ${c.label}
          </button>
        `).join('')}
      </div>
    </div>

    <!-- Question Selector Navigation Bar -->
    <div style="display: flex; gap: 8px; margin-bottom: 18px; overflow-x: auto; padding-bottom: 6px; align-items: center;">
      <button class="btn-outline" style="padding: 6px 14px; font-size: 0.82rem; font-weight: 700;" onclick="prevItTechChallenge()">
        ◀ Sebelumnya
      </button>
      <div style="display: flex; gap: 6px; overflow-x: auto; flex: 1; padding: 2px 4px;">
        ${filteredList.map((entry, idx) => {
          const itemDone = appState.itTechCompleted.includes(entry.item.id);
          const isCurrent = entry.originalIndex === appState.currentItTechIndex;
          return `
            <button class="quick-cmd-btn ${isCurrent ? 'active' : ''}" 
                    style="padding: 6px 12px; font-weight: 700; font-size: 0.8rem; white-space: nowrap; ${itemDone ? 'border-color: var(--accent-green); color: var(--accent-green);' : ''}" 
                    onclick="setItTechIndex(${entry.originalIndex})">
              ${itemDone ? '✓ ' : ''}Q${entry.originalIndex + 1}
            </button>
          `;
        }).join('')}
      </div>
      <button class="btn-primary" style="padding: 6px 14px; font-size: 0.82rem; font-weight: 700;" onclick="nextItTechChallenge()">
        Berikutnya ▶
      </button>
    </div>

    <!-- Main Challenge Card -->
    <div style="background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-glow); padding: 24px; margin-bottom: 24px; box-shadow: var(--shadow-card);">
      
      <!-- Meta Information Row -->
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
        <span style="font-size: 0.8rem; color: var(--accent-cyan); font-weight: 800; text-transform: uppercase;">
          ${chal.category} • Soal ${appState.currentItTechIndex + 1} dari ${itTechChallenges.length}
        </span>
        <span class="badge-source" style="font-size: 0.78rem; background: rgba(56, 189, 248, 0.15); color: var(--accent-cyan); border: 1px solid rgba(56, 189, 248, 0.3); padding: 3px 10px; border-radius: 20px;">
          📖 ${chal.sourceRef}
        </span>
      </div>

      <!-- Challenge Title -->
      <h3 style="color: #fff; margin: 0 0 12px; font-size: 1.25rem;">
        ${chal.title}
      </h3>

      <!-- Scenario Box -->
      <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid var(--accent-cyan); padding: 14px 18px; border-radius: 6px; margin-bottom: 18px; font-size: 0.95rem; line-height: 1.6; color: #e2e8f0;">
        <strong>Skenario Kasus Nyata:</strong><br>
        ${chal.scenario}
      </div>

      <!-- KOTAK CONTOH SOAL & JAWABAN BENAR DULU -->
      <div class="worked-example-card" style="margin-bottom: 22px;">
        <div class="worked-example-header">
          <span class="we-badge">💡 CONTOH KASUS SERUPA & JAWABAN BENAR DULU</span>
          <span class="we-sub">Pelajari pola penyelesaian kasus serupa ini sebelum memilih jawaban tantanganmu:</span>
        </div>
        <div class="we-body">
          <div class="we-row">
            <span class="we-label">📝 Contoh Kasus Serupa:</span>
            <span class="we-text">${chal.workedExample.kasusSerupa}</span>
          </div>
          <div class="we-row">
            <span class="we-label">✅ Contoh Jawaban yang 100% Benar:</span>
            <code class="we-code">${chal.workedExample.jawabanBenarContoh}</code>
          </div>
          <div class="we-row">
            <span class="we-label">🍼 Nalar & Logika Bahasa Bayi Kodi:</span>
            <span class="we-text">${chal.workedExample.nalarBayi}</span>
          </div>
        </div>
        <div class="we-divider">🎯 SEKARANG PECAHKAN TANTANGAN ASLI DI BAWAH INI:</div>
      </div>

      <!-- Question Prompt -->
      <div style="background: rgba(30, 41, 59, 0.6); padding: 14px 18px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); margin-bottom: 18px;">
        <h4 style="margin: 0; color: #f8fafc; font-size: 1.05rem; line-height: 1.5;">
          ${chal.question}
        </h4>
      </div>

      <!-- Interactive Options -->
      <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px;">
        ${chal.options.map((opt, optIdx) => {
          let btnStyle = "background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255,255,255,0.15); color: #e2e8f0;";
          let icon = String.fromCharCode(65 + optIdx);
          
          if (selectedOption !== undefined) {
            if (selectedOption === optIdx) {
              if (optIdx === chal.correctIndex) {
                btnStyle = "background: rgba(34, 197, 94, 0.25); border: 1.5px solid var(--accent-green); color: #fff; font-weight: 700;";
                icon = "✓";
              } else {
                btnStyle = "background: rgba(239, 68, 68, 0.25); border: 1.5px solid var(--accent-pink); color: #fca5a5; font-weight: 700;";
                icon = "✕";
              }
            }
          }

          return `
            <button class="choice-card-btn" 
                    style="padding: 14px 18px; text-align: left; font-size: 0.92rem; border-radius: 8px; cursor: pointer; transition: all 0.2s; ${btnStyle}" 
                    onclick="selectItTechOption(${optIdx})">
              <span style="font-weight: 800; min-width: 26px; display: inline-block;">${icon}.</span>
              <span style="flex: 1;">${opt}</span>
            </button>
          `;
        }).join('')}
      </div>

      <!-- Feedback & Explanation Box -->
      <div id="it-tech-feedback-box" style="margin-bottom: 16px;">
        ${selectedOption === chal.correctIndex ? `
          <div class="alert-box success" style="margin-bottom: 14px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
              <span style="font-size: 1.2rem;">🎉</span>
              <strong>Jawaban Kamu Tepat 100%! (+1 Poin Laboratorium)</strong>
            </div>
            <div style="font-size: 0.9rem; line-height: 1.5;">
              ${chal.explanation}
            </div>
          </div>
        ` : (appState.itTechAttempts && appState.itTechAttempts[chal.id] && appState.itTechAttempts[chal.id].length > 0 ? `
          <div class="alert-box warning" style="margin-bottom: 14px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
              <span style="font-size: 1.2rem;">⚠️</span>
              <strong>Pilihan Belum Tepat!</strong>
            </div>
            <div style="font-size: 0.88rem; line-height: 1.5;">
              Pilihanmu belum tepat nih. Coba cermati lagi skenario kasus di atas dan klik pilihan lainnya. Kamu bebas mencoba opsi lain sampai menemukan jawaban yang tepat!
            </div>
          </div>
        ` : '')}
      </div>

      <!-- Bottom Navigation Buttons -->
      <div style="display: flex; justify-content: space-between; align-items: center; pt-3; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 16px;">
        <button class="btn-outline" onclick="prevItTechChallenge()">
          ◀ Soal Sebelumnya
        </button>
        <button class="btn-primary" onclick="nextItTechChallenge()">
          Soal Berikutnya ▶
        </button>
      </div>

    </div>
  `;
}

window.selectItTechOption = function(optionIdx) {
  const chal = itTechChallenges[appState.currentItTechIndex];
  if (!chal) return;

  appState.itTechAnswers = appState.itTechAnswers || {};
  appState.itTechAnswers[chal.id] = optionIdx;

  if (optionIdx === chal.correctIndex) {
    sfx.playSuccess();
    if (!appState.itTechCompleted.includes(chal.id)) {
      appState.itTechCompleted.push(chal.id);
      appState.stars = (appState.stars || 0) + 1;
      saveProgress();
      const starEl = document.getElementById("header-stars");
      if (starEl) starEl.textContent = `${appState.stars} Bintang`;
    }
    setKodiSpeech(
      `Horeee! Jawaban kamu untuk ${chal.title} tepat 100%!`,
      "Pemahaman teknis komputermu semakin tajam dan setara standar sertifikasi dunia!"
    );
  } else {
    sfx.playWrong();
    setKodiSpeech(
      `Pilihan ${String.fromCharCode(65 + optionIdx)} belum tepat nih!`,
      "Coba cermati lagi skenario kasus di atas dan klik pilihan lainnya ya! Kamu bebas mencoba opsi lain."
    );
  }

  renderItTechTrainer();
};

window.resetItTechOption = function() {
  sfx.playClick();
  const chal = itTechChallenges[appState.currentItTechIndex];
  if (chal && appState.itTechAnswers) {
    delete appState.itTechAnswers[chal.id];
  }
  renderItTechTrainer();
};

window.setItTechCategory = function(catKey) {
  sfx.playClick();
  appState.itTechCategoryFilter = catKey;
  appState.itTechClueRevealed = false;
  if (catKey !== "all") {
    const firstIdx = itTechChallenges.findIndex(c => c.category === catKey);
    if (firstIdx !== -1) {
      appState.currentItTechIndex = firstIdx;
    }
  }
  renderItTechTrainer();
};

window.setItTechIndex = function(idx) {
  sfx.playClick();
  appState.currentItTechIndex = idx;
  appState.itTechClueRevealed = false;
  renderItTechTrainer();
};

window.nextItTechChallenge = function() {
  sfx.playClick();
  appState.itTechClueRevealed = false;
  const filteredList = appState.itTechCategoryFilter === "all"
    ? itTechChallenges.map((item, idx) => idx)
    : itTechChallenges.map((item, idx) => idx).filter(idx => itTechChallenges[idx].category === appState.itTechCategoryFilter);

  const curPos = filteredList.indexOf(appState.currentItTechIndex);
  if (curPos !== -1 && curPos + 1 < filteredList.length) {
    appState.currentItTechIndex = filteredList[curPos + 1];
  } else if (filteredList.length > 0) {
    appState.currentItTechIndex = filteredList[0];
  }
  renderItTechTrainer();
};

window.prevItTechChallenge = function() {
  sfx.playClick();
  appState.itTechClueRevealed = false;
  const filteredList = appState.itTechCategoryFilter === "all"
    ? itTechChallenges.map((item, idx) => idx)
    : itTechChallenges.map((item, idx) => idx).filter(idx => itTechChallenges[idx].category === appState.itTechCategoryFilter);

  const curPos = filteredList.indexOf(appState.currentItTechIndex);
  if (curPos > 0) {
    appState.currentItTechIndex = filteredList[curPos - 1];
  } else if (filteredList.length > 0) {
    appState.currentItTechIndex = filteredList[filteredList.length - 1];
  }
  renderItTechTrainer();
};

// ================= LIGHT / DARK THEME MANAGEMENT (ICON ONLY) =================
function applyTheme(theme) {
  const btn = document.getElementById("theme-toggle-btn");
  if (theme === "light") {
    document.body.classList.add("light-theme");
    if (btn) {
      btn.innerHTML = "🌙";
      btn.setAttribute("title", "Mode Terang Aktif. Klik ikon bulan sabit untuk beralih ke Mode Gelap.");
    }
  } else {
    document.body.classList.remove("light-theme");
    if (btn) {
      btn.innerHTML = "☀️";
      btn.setAttribute("title", "Mode Gelap Aktif. Klik ikon matahari untuk beralih ke Mode Terang.");
    }
  }
}

function initTheme() {
  const saved = localStorage.getItem("kodi_theme") || "dark";
  applyTheme(saved);
}

window.toggleTheme = function() {
  if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();
  const isLight = document.body.classList.contains("light-theme");
  const next = isLight ? "dark" : "light";
  localStorage.setItem("kodi_theme", next);
  applyTheme(next);
  setKodiSpeech(
    next === "light" 
      ? "Mode Terang aktif! Tampilan putih bersih berlatar kontras tinggi siap digunakan!" 
      : "Mode Gelap aktif! Tampilan ramah mata buat sesi belajar malam hari!",
    "Kamu bisa ganti mode kapan saja lewat tombol ikon matahari/bulan di atas."
  );
};

// ================= CONTROLLER AKSEN BAHASA INGGRIS (US vs BRITISH) =================
window.setAccentPreference = function(accent) {
  if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();
  speechEngine.setEnglishAccent(accent);
  const isGb = accent === 'en-GB';
  const label = isGb ? 'British (UK) 🇬🇧' : 'American (US) 🇺🇸';

  // Live spoken sample with clear accent difference
  const previewText = isGb 
    ? "Good day! British pronunciation has been activated. Cheers!" 
    : "Awesome! American pronunciation is now active. Let's practice!";
  speechEngine.speakText(previewText, 0.9, null, accent);

  if (typeof setKodiSpeech === "function") {
    setKodiSpeech(
      `Aksen audio berhasil diatur ke ${label}! Sekarang semua audio listening dan soal dibacakan dengan logat ini.`,
      isGb ? "🇬🇧 Aksen British (UK) siap digunakan!" : "🇺🇸 Aksen American (US) siap digunakan!"
    );
  }

  // Update UI if in English trainer
  const engTab = document.getElementById("tab-english-trainer");
  if (engTab && engTab.classList.contains("active")) {
    const valLabel = document.querySelector('.accent-card-val');
    if (valLabel) {
      valLabel.innerHTML = isGb ? 'British English (UK) 🇬🇧' : 'American English (US) 🇺🇸';
    }
    const flagIcon = document.querySelector('.accent-flag-icon');
    if (flagIcon) {
      flagIcon.innerHTML = isGb ? '🇬🇧' : '🇺🇸';
    }
    const usPill = document.getElementById('pill-accent-us');
    const gbPill = document.getElementById('pill-accent-gb');
    if (usPill && gbPill) {
      usPill.classList.toggle('active', !isGb);
      gbPill.classList.toggle('active', isGb);
    }
  }
};

window.toggleAccent = function() {
  if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();
  const newAccent = speechEngine.toggleEnglishAccent();
  const isGb = newAccent === 'en-GB';
  const label = isGb ? 'British (UK) 🇬🇧' : 'American (US) 🇺🇸';

  if (typeof setKodiSpeech === "function") {
    setKodiSpeech(
      `Aksen bahasa Inggris berhasil diubah ke ${label}! Sekarang semua audio listening dan soal dibacakan dengan logat ini.`,
      "Dengarkan pelafalan suaranya langsung!"
    );
  }

  // Live spoken sample in British or American pronunciation
  const previewText = isGb 
    ? "Good day! British pronunciation has been activated. Cheers!" 
    : "Awesome! American pronunciation is now active. Let's practice!";
  speechEngine.speakText(previewText, 0.9, null, newAccent);

  const engTab = document.getElementById("tab-english-trainer");
  if (engTab && engTab.classList.contains("active")) {
    const valLabel = document.querySelector('.accent-card-val');
    if (valLabel) {
      valLabel.innerHTML = isGb ? 'British English (UK) 🇬🇧' : 'American English (US) 🇺🇸';
    }
    const flagIcon = document.querySelector('.accent-flag-icon');
    if (flagIcon) {
      flagIcon.innerHTML = isGb ? '🇬🇧' : '🇺🇸';
    }
    const usPill = document.getElementById('pill-accent-us');
    const gbPill = document.getElementById('pill-accent-gb');
    if (usPill && gbPill) {
      usPill.classList.toggle('active', !isGb);
      gbPill.classList.toggle('active', isGb);
    }
  }
};

// ================= 3D CLAY MASCOT AVATAR SYSTEM (31 KARAKTER LENGKAP) =================
const KODI_AVATAR_CATALOG = [
  // 01-06: Koding & Rekayasa Perangkat Lunak
  { num: "01", name: "Kodi Web & Coder Pro", topic: "HTML, CSS & Dasar Koding", category: "koding", catLabel: "Koding & Software", desc: "Pahlawan Web & Struktur Program", icon: "💻" },
  { num: "02", name: "Kodi Pythonista", topic: "Python Logic & Data Scripting", category: "koding", catLabel: "Koding & Software", desc: "Ahli Sintaks Python & Automasi", icon: "🐍" },
  { num: "03", name: "Kodi Frontend Designer", topic: "HTML5 & CSS3 Styling", category: "koding", catLabel: "Koding & Software", desc: "Spesialis Desain Web Responsif", icon: "🎨" },
  { num: "04", name: "Kodi Java Architect", topic: "Java OOP & Backend Engineering", category: "koding", catLabel: "Koding & Software", desc: "Ahli Logika Berorientasi Objek", icon: "☕" },
  { num: "05", name: "Kodi C# Systems Engineer", topic: "C# .NET & Algorithms", category: "koding", catLabel: "Koding & Software", desc: "Arsitek Sistem & Rekayasa Software", icon: "⚙️" },
  { num: "06", name: "Kodi Mobile & Script App", topic: "JavaScript Fullstack & Mobile", category: "koding", catLabel: "Koding & Software", desc: "Pengembang Aplikasi Modern", icon: "📱" },

  // 07-12: Microsoft Excel & Spreadsheet Analytics
  { num: "07", name: "Kodi Excel Analyst", topic: "Formula Dasar & Tabel Excel", category: "excel", catLabel: "Excel & Data Analytics", desc: "Spesialis Pengolahan Data Excel", icon: "📊" },
  { num: "08", name: "Kodi Chart Master", topic: "Visualisasi Grafik Pie & Bar", category: "excel", catLabel: "Excel & Data Analytics", desc: "Ahli Grafik Statistik & Presentasi", icon: "📈" },
  { num: "09", name: "Kodi Grid Master", topic: "Struktur Sel, Baris & Kolom", category: "excel", catLabel: "Excel & Data Analytics", desc: "Spesialis Lembar Kerja & Matriks", icon: "📐" },
  { num: "10", name: "Kodi Financial Calc", topic: "Kalkulasi Finansial & Kalkulator", category: "excel", catLabel: "Excel & Data Analytics", desc: "Master Rumus Finansial & Bisnis", icon: "🧮" },
  { num: "11", name: "Kodi =SUM() Wizard", topic: "SUM, AVERAGE & Agregasi", category: "excel", catLabel: "Excel & Data Analytics", desc: "Ahli Fungsi Agregasi & Statistika", icon: "➕" },
  { num: "12", name: "Kodi Growth Analytics", topic: "Trendline & Lookup Excel", category: "excel", catLabel: "Excel & Data Analytics", desc: "Analisis Pertumbuhan Data Bisnis", icon: "🚀" },

  // 13-22: English Studio & International Exams
  { num: "13", name: "Kodi British Linguist", topic: "UK Accent, Big Ben & Idioms", category: "english", catLabel: "English & International Exams", desc: "Spesialis Aksen & Kosakata British", icon: "🇬🇧" },
  { num: "14", name: "Kodi Academic TOEFL/IELTS", topic: "Persiapan Ujian IELTS & TOEFL", category: "english", catLabel: "English & International Exams", desc: "Master Standar Skor Internasional", icon: "📚" },
  { num: "15", name: "Kodi Active Listener", topic: "Listening & Dictation Comprehension", category: "english", catLabel: "English & International Exams", desc: "Latihan Menyimak & Dikte Suara", icon: "🎧" },
  { num: "16", name: "Kodi IELTS Examiner", topic: "Lembar Soal Ujian IELTS", category: "english", catLabel: "English & International Exams", desc: "Evaluasi Komprehensif IELTS Band", icon: "📋" },
  { num: "17", name: "Kodi TOEFL American Speaker", topic: "American Accent & Speaking Fluency", category: "english", catLabel: "English & International Exams", desc: "Praktik Berbicara Aksen US", icon: "🇺🇸" },
  { num: "18", name: "Kodi Global Voyager", topic: "London Bus & Global Communication", category: "english", catLabel: "English & International Exams", desc: "Petualangan Bahasa Inggris Dunia", icon: "🌍" },
  { num: "19", name: "Kodi 4 Skills Master", topic: "Listening, Reading, Writing, Speaking", category: "english", catLabel: "English & International Exams", desc: "Penguasaan 4 Keterampilan Bahasa", icon: "🎯" },
  { num: "20", name: "Kodi 1000 Vocab Builder", topic: "Kamus 1.000 Kosakata Bahasa Inggris", category: "english", catLabel: "English & International Exams", desc: "Pengayaan Kosakata Bergambar", icon: "📖" },
  { num: "21", name: "Kodi Fluency Trainer", topic: "Practice Makes Progress & Fluency", category: "english", catLabel: "English & International Exams", desc: "Simulasi Percakapan Percaya Diri", icon: "🗣️" },
  { num: "22", name: "Kodi Exam Checklist Pro", topic: "Checklist Kelulusan Ujian", category: "english", catLabel: "English & International Exams", desc: "Panduan Sukses Ujian Internasional", icon: "✅" },

  // 23-26: Cambridge Mathematics & SD Ihsaniyah
  { num: "23", name: "Kodi Pythagoras & Geometry", topic: "Teorema Pythagoras, Sudut & Segitiga", category: "math", catLabel: "Cambridge Math & SD Ihsaniyah", desc: "Penjelajah Geometri & Sudut", icon: "📐" },
  { num: "24", name: "Kodi Arithmetic Calculator", topic: "Operasi Hitung (+ - × ÷) & Rasio Pi", category: "math", catLabel: "Cambridge Math & SD Ihsaniyah", desc: "Ahli Hitung Cepat & Pembagian", icon: "🧮" },
  { num: "25", name: "Kodi Cambridge Math Kit", topic: "Pecahan, Buku Matematika & Penggaris", category: "math", catLabel: "Cambridge Math & SD Ihsaniyah", desc: "Penguasaan Pecahan & Pengukuran", icon: "📏" },
  { num: "26", name: "Kodi Problem Solving Detective", topic: "Detektif Soal Cerita Ujian", category: "math", catLabel: "Cambridge Math & SD Ihsaniyah", desc: "Detektif Analisis Soal Ujian", icon: "✏️" },

  // 27-31: IT Lab, Troubleshooting & Wisuda Prestasi
  { num: "27", name: "Kodi Logic Innovator", topic: "Logika Algoritma & Solusi IT", category: "it_tech", catLabel: "IT Lab & Troubleshooting", desc: "Inovator Solusi Teknologi & Sistem", icon: "💡" },
  { num: "28", name: "Kodi Bintang Juara", topic: "Pencapaian Misi IT Support", category: "petualangan", catLabel: "IT Lab & Troubleshooting", desc: "Pahlawan Penakluk Level IT", icon: "⭐" },
  { num: "29", name: "Kodi Wisudawan Berprestasi", topic: "Ijazah & Gelar Akademik", category: "sertifikat", catLabel: "Sertifikat & Kelulusan", desc: "Peraih Predikat Kelulusan Terbaik", icon: "🎓" },
  { num: "30", name: "Kodi Trofi Emas Sukses", topic: "Piala Kemenangan & Nilai 100", category: "sertifikat", catLabel: "Sertifikat & Kelulusan", desc: "Penghargaan Prestasi Tertinggi", icon: "🏆" },
  { num: "31", name: "Kodi You Can Do It!", topic: "Duta Masa Depan & Kelulusan", category: "sertifikat", catLabel: "Sertifikat & Kelulusan", desc: "Simbol Kelulusan Akademik Global", icon: "🎉" }
];

const KODI_AVATAR_LIST = KODI_AVATAR_CATALOG.map(c => `assets/illustrations/3d_tiles/tile_3d_${c.num}.png`);

function initKodiAvatar() {
  const currentIdx = parseInt(localStorage.getItem("kodi_selected_avatar_idx") || "0", 10);
  const activeChar = KODI_AVATAR_CATALOG[currentIdx] || KODI_AVATAR_CATALOG[0];
  const imgEl = document.getElementById("kodi-avatar-img");
  if (imgEl) {
    imgEl.src = `assets/illustrations/3d_tiles/tile_3d_${activeChar.num}.png`;
    imgEl.alt = activeChar.name;
    imgEl.title = `${activeChar.name} - ${activeChar.desc}`;
  }
  const speakerNameEl = document.getElementById("kodi-speaker-name");
  if (speakerNameEl) {
    speakerNameEl.innerHTML = `${activeChar.icon} ${activeChar.name} <span style="font-size: 0.75rem; font-weight: normal; opacity: 0.85;">(${activeChar.catLabel})</span>`;
  }
}

window.selectKodiAvatarByIdx = function(idx) {
  if (idx < 0 || idx >= KODI_AVATAR_CATALOG.length) return;
  localStorage.setItem("kodi_selected_avatar_idx", idx);
  const activeChar = KODI_AVATAR_CATALOG[idx];

  const imgEl = document.getElementById("kodi-avatar-img");
  if (imgEl) {
    imgEl.src = `assets/illustrations/3d_tiles/tile_3d_${activeChar.num}.png`;
    imgEl.classList.remove("spring-bump");
    void imgEl.offsetWidth;
    imgEl.classList.add("spring-bump");
  }

  const speakerNameEl = document.getElementById("kodi-speaker-name");
  if (speakerNameEl) {
    speakerNameEl.innerHTML = `${activeChar.icon} ${activeChar.name} <span style="font-size: 0.75rem; font-weight: normal; opacity: 0.85;">(${activeChar.catLabel})</span>`;
  }

  if (window.sfx && typeof sfx.playSuccess === "function") sfx.playSuccess();
  closeKodiAvatarGallery();

  setKodiSpeech(
    `Halo temanku! Sekarang kamu ditemani oleh ${activeChar.name}! ${activeChar.icon}`,
    `Spesialisasi: ${activeChar.topic} — ${activeChar.desc}. Semangat belajarnya yaa!`
  );
};

window.cycleKodiAvatar = function() {
  let currentIdx = parseInt(localStorage.getItem("kodi_selected_avatar_idx") || "0", 10);
  currentIdx = (currentIdx + 1) % KODI_AVATAR_CATALOG.length;
  window.selectKodiAvatarByIdx(currentIdx);
};

window.openKodiAvatarGallery = function(categoryFilter = "all") {
  if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();
  let modalEl = document.getElementById("kodi-avatar-gallery-modal");
  if (!modalEl) {
    modalEl = document.createElement("div");
    modalEl.id = "kodi-avatar-gallery-modal";
    modalEl.className = "modal-overlay active";
    document.body.appendChild(modalEl);
  } else {
    modalEl.className = "modal-overlay active";
  }

  const currentIdx = parseInt(localStorage.getItem("kodi_selected_avatar_idx") || "0", 10);

  const categories = [
    { key: "all", label: "🌟 Semua (31)" },
    { key: "koding", label: "💻 Koding (6)" },
    { key: "excel", label: "📊 Excel (6)" },
    { key: "english", label: "🇬🇧 English (10)" },
    { key: "math", label: "📐 Cambridge Math (4)" },
    { key: "it_tech", label: "💡 IT Lab (2)" },
    { key: "sertifikat", label: "🏆 Wisuda (3)" }
  ];

  const filteredChars = categoryFilter === "all" 
    ? KODI_AVATAR_CATALOG.map((c, i) => ({ ...c, originalIdx: i }))
    : KODI_AVATAR_CATALOG.map((c, i) => ({ ...c, originalIdx: i })).filter(c => c.category === categoryFilter || (categoryFilter === "it_tech" && (c.category === "it_tech" || c.category === "petualangan")));

  modalEl.innerHTML = `
    <div class="modal-content" style="max-width: 920px; width: 95%; max-height: 90vh; overflow-y: auto; border: 2px solid #38bdf8; border-radius: 20px; padding: 24px; background: linear-gradient(145deg, rgba(15, 23, 42, 0.98), rgba(30, 41, 59, 0.99));">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px; margin-bottom: 16px;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 2rem;">🎨</span>
          <div>
            <h3 style="margin: 0; color: #fff; font-size: 1.25rem;">Galeri Pahlawan Clay 3D Kodi</h3>
            <p style="margin: 2px 0 0; font-size: 0.8rem; color: #94a3b8;">
              Pilih karakter clay 3D favoritmu dari 31 karya seni asli yang disesuaikan dengan topik belajar!
            </p>
          </div>
        </div>
        <button class="btn-secondary" style="padding: 6px 12px;" onclick="closeKodiAvatarGallery()">✕ Tutup</button>
      </div>

      <!-- Kategori Filter -->
      <div style="display: flex; gap: 6px; overflow-x: auto; padding-bottom: 10px; margin-bottom: 16px;">
        ${categories.map(c => `
          <button class="btn-secondary ${categoryFilter === c.key ? 'active' : ''}" 
                  style="padding: 6px 12px; font-size: 0.8rem; font-weight: 700; white-space: nowrap; ${categoryFilter === c.key ? 'background: #0284c7; color: #fff; border-color: #38bdf8;' : ''}"
                  onclick="openKodiAvatarGallery('${c.key}')">
            ${c.label}
          </button>
        `).join('')}
      </div>

      <!-- Grid Karakter -->
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 14px;">
        ${filteredChars.map(c => {
          const isSelected = c.originalIdx === currentIdx;
          return `
            <div style="background: rgba(30, 41, 59, 0.7); border: 2px solid ${isSelected ? '#38bdf8' : 'rgba(255,255,255,0.08)'}; border-radius: 14px; padding: 12px; text-align: center; cursor: pointer; transition: all 0.2s;"
                 onmouseover="this.style.transform='translateY(-3px)'; this.style.borderColor='#38bdf8';"
                 onmouseout="this.style.transform='none'; this.style.borderColor='${isSelected ? '#38bdf8' : 'rgba(255,255,255,0.08)'}';"
                 onclick="selectKodiAvatarByIdx(${c.originalIdx})">
              <div style="position: relative; margin-bottom: 8px;">
                <img src="assets/illustrations/3d_tiles/tile_3d_${c.num}.png" 
                     style="width: 100%; height: 130px; object-fit: cover; border-radius: 10px;" 
                     alt="${c.name}">
                <span style="position: absolute; top: 6px; left: 6px; font-size: 0.7rem; font-weight: 800; background: rgba(0,0,0,0.7); color: #38bdf8; padding: 2px 6px; border-radius: 6px;">
                  #${c.num}
                </span>
                ${isSelected ? '<span style="position: absolute; top: 6px; right: 6px; font-size: 0.7rem; font-weight: 800; background: #10b981; color: #fff; padding: 2px 6px; border-radius: 6px;">Aktif ✅</span>' : ''}
              </div>
              <div style="font-weight: 800; font-size: 0.88rem; color: #fff; margin-bottom: 2px;">
                ${c.name}
              </div>
              <div style="font-size: 0.74rem; color: #38bdf8; font-weight: 700; margin-bottom: 4px;">
                ${c.catLabel}
              </div>
              <div style="font-size: 0.72rem; color: #94a3b8; line-height: 1.3; margin-bottom: 10px;">
                ${c.desc}
              </div>
              <button class="btn-primary" style="width: 100%; padding: 6px; font-size: 0.78rem; font-weight: 700; ${isSelected ? 'background: #10b981;' : ''}">
                ${isSelected ? 'Dipilih' : 'Gunakan Avatar Ini'}
              </button>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
};

window.closeKodiAvatarGallery = function() {
  const modalEl = document.getElementById("kodi-avatar-gallery-modal");
  if (modalEl) modalEl.className = "modal-overlay";
};

// ==============================================================================
// 📖 KAMUS BAYI IT KODI DENGAN PENCARIAN & KUTIPAN RESMI EBOOK REFERENSI
// ==============================================================================
window.dictState = {
  query: '',
  category: 'all',
  page: 1,
  pageSize: 24
};

window.renderDictionary = function() {
  const container = document.getElementById("dictionary-content-area") || document.getElementById("dictionary-list");
  if (!container) return;

  const rawList = window.itDictionary || [];
  const state = window.dictState;

  // Filter List
  const q = (state.query || '').toLowerCase().trim();
  const cat = state.category || 'all';

  const filtered = rawList.filter(item => {
    const matchCat = (cat === 'all' || item.category === cat);
    if (!matchCat) return false;
    if (!q) return true;
    const term = (item.term || '').toLowerCase();
    const analogy = (item.babyAnalogy || '').toLowerCase();
    const detail = (item.detail || '').toLowerCase();
    const book = item.reference ? (item.reference.book || '').toLowerCase() : '';
    const author = item.reference ? (item.reference.author || '').toLowerCase() : '';
    return term.includes(q) || analogy.includes(q) || detail.includes(q) || book.includes(q) || author.includes(q);
  });

  const categories = [
    { key: 'all', label: 'Semua Kategori', icon: '📚' },
    { key: 'Hardware & Arsitektur', label: 'Hardware', icon: '🧠' },
    { key: 'Jaringan & Internet', label: 'Jaringan', icon: '🌐' },
    { key: 'Keamanan Siber', label: 'Cyber Security', icon: '🛡️' },
    { key: 'Basis Data & SQL', label: 'Basis Data & SQL', icon: '🗄️' },
    { key: 'Pemrograman & Software', label: 'Koding', icon: '💻' },
    { key: 'AI & Sains Data', label: 'AI & Algoritma', icon: '🤖' },
    { key: 'Matematika & Tipografi Ilmiah', label: 'Matematika & Tipografi', icon: '📐' },
    { key: 'Sistem Operasi & CLI', label: 'OS & Pintasan', icon: '🖥️' },
    { key: 'IT Support & Troubleshooting', label: 'IT Support', icon: '🛠️' },
    { key: 'Web, Cloud & DevOps', label: 'Web & Cloud', icon: '☁️' }
  ];

  const quickPills = [
    'RAM', 'CPU', 'DNS', 'Math Axis', 'Primary Key', 'Firewall', 
    'Binary Search', 'Vinculum', 'Phishing', 'UEFI', 'TCP/IP', 'Ctrl+S', 'Git'
  ];

  // Pagination slice
  const totalPages = Math.ceil(filtered.length / state.pageSize) || 1;
  if (state.page > totalPages) state.page = 1;
  const startIdx = (state.page - 1) * state.pageSize;
  const pagedItems = filtered.slice(startIdx, startIdx + state.pageSize);

  container.innerHTML = `
    <div class="dict-main-wrapper">
      <!-- HERO BANNER INFORMASI SUMBER RESMI -->
      <div class="dict-hero-card">
        <div style="display: flex; align-items: center; gap: 14px; flex-wrap: wrap;">
          <img src="assets/illustrations/3d_tiles/tile_3d_04.png"
               style="width: 60px; height: 60px; border-radius: 12px; object-fit: cover; border: 2px solid var(--accent-yellow); box-shadow: 0 4px 12px rgba(0,0,0,0.3);"
               alt="Kamus Bayi IT">
          <div style="flex: 1; min-width: 250px;">
            <div style="font-size: 0.78rem; font-weight: 800; color: var(--accent-yellow); text-transform: uppercase; letter-spacing: 0.5px;">
              📚 Sumber Koleksi: Ebook Referensi Resmi Terverifikasi
            </div>
            <h3 style="margin: 2px 0 4px 0; font-size: 1.25rem; color: var(--text-main);">
              Kamus Pintar Bayi IT & Tipografi Sains (1.000+ Kosakata)
            </h3>
            <p style="margin: 0; font-size: 0.85rem; color: var(--text-muted); line-height: 1.4;">
              Rangkuman resmi berdasar buku ajar: <em>CompTIA A+, Cisco CCNA 200-301, Security+ SY0-701, Learning SQL (Alan Beaulieu), Grokking Algorithms, The TeXbook (Donald Knuth),</em> & <em>ISO 80000-2</em> lengkap dengan Nalar Bayi Kodi!
            </p>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="background: rgba(250, 204, 21, 0.15); border: 1px solid var(--accent-yellow); padding: 6px 14px; border-radius: 20px; font-size: 0.85rem; font-weight: 800; color: #facc15;">
              📖 ${rawList.length} Istilah Resmi
            </span>
          </div>
        </div>
      </div>

      <!-- KONTROL PENCARIAN DENGAN TOMBOL CARI NYATA -->
      <div class="dict-search-panel">
        <div class="dict-search-row">
          <div style="flex: 1; position: relative;">
            <input type="text"
                   id="dict-search-input"
                   class="dict-search-input-field"
                   placeholder="Ketik istilah atau konsep... (contoh: RAM, DNS, Math Axis, SQL, Firewall, Phishing)"
                   value="${state.query}"
                   onkeydown="if(event.key==='Enter') executeDictionarySearch()" />
            ${state.query ? `
              <button class="dict-clear-query-btn" onclick="clearDictionaryQuery()" title="Hapus Pencarian">✕</button>
            ` : ''}
          </div>
          <button class="btn-primary dict-search-submit-btn" onclick="executeDictionarySearch()">
            🔍 Cari Definisi
          </button>
          <button class="btn-secondary dict-reset-btn" onclick="resetDictionarySearch()">
            🔄 Tampilkan Semua
          </button>
        </div>

        <!-- QUICK SEARCH CHIPS -->
        <div class="dict-quick-chips-row">
          <span style="font-size: 0.78rem; font-weight: 700; color: var(--text-muted); align-self: center;">💡 Pencarian Populer:</span>
          ${quickPills.map(p => `
            <button class="dict-quick-chip-btn ${state.query.toLowerCase() === p.toLowerCase() ? 'active' : ''}" onclick="quickSearchDictionary('${p}')">
              ${p}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- FILTER KATEGORI -->
      <div class="dict-cat-pills-wrap">
        ${categories.map(c => `
          <button class="dict-cat-pill-btn ${state.category === c.key ? 'active' : ''}" onclick="filterDictionaryCategory('${c.key}')">
            <span>${c.icon}</span>
            <span>${c.label}</span>
          </button>
        `).join('')}
      </div>

      <!-- STATS & HASIL PENCARIAN -->
      <div class="dict-results-bar">
        <div style="font-size: 0.88rem; font-weight: 700; color: var(--text-main);">
          ${state.query ? `
            🔍 Ditemukan <strong>${filtered.length}</strong> istilah untuk kata kunci: <em>"${state.query}"</em>
          ` : `
            Menampilkan <strong>${pagedItems.length}</strong> dari <strong>${filtered.length}</strong> istilah ${state.category !== 'all' ? 'kategori ' + state.category : ''}
          `}
        </div>
        ${totalPages > 1 ? `
          <div style="display: flex; align-items: center; gap: 8px;">
            <button class="btn-secondary" style="padding: 4px 10px; font-size: 0.78rem;" onclick="changeDictionaryPage(-1)" ${state.page <= 1 ? 'disabled' : ''}>
              ⬅️ Hal Sebelumnya
            </button>
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted);">
              Hal ${state.page} / ${totalPages}
            </span>
            <button class="btn-secondary" style="padding: 4px 10px; font-size: 0.78rem;" onclick="changeDictionaryPage(1)" ${state.page >= totalPages ? 'disabled' : ''}>
              Hal Berikutnya ➡️
            </button>
          </div>
        ` : ''}
      </div>

      <!-- GRID KARTU DEFINISI -->
      ${filtered.length === 0 ? `
        <div class="dict-empty-card">
          <div style="font-size: 2.8rem; margin-bottom: 8px;">🤔</div>
          <h4 style="margin: 0 0 6px 0; font-size: 1.15rem; color: var(--text-main);">
            Istilah "${state.query}" Tidak Ditemukan
          </h4>
          <p style="margin: 0 0 16px 0; font-size: 0.85rem; color: var(--text-muted);">
            Coba gunakan kata kunci lain seperti <strong>RAM, DNS, Firewall, SQL, Math Axis,</strong> atau pilih kategori di atas.
          </p>
          <button class="btn-primary" onclick="resetDictionarySearch()">
            🔄 Tampilkan Seluruh 1.000+ Istilah
          </button>
        </div>
      ` : `
        <div class="dict-grid">
          ${pagedItems.map(item => `
            <div class="dict-card">
              <!-- HEADER KARTU -->
              <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 10px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="font-size: 1.4rem;">${item.icon || '📖'}</span>
                  <div>
                    <h4 class="dict-term-title">${item.term}</h4>
                    <span class="dict-category-tag">${item.category}</span>
                  </div>
                </div>
                <button class="dict-audio-btn" onclick="speakDictionaryItem('${item.term.replace(/'/g, "\\'")}', '${item.babyAnalogy.replace(/'/g, "\\'")}')" title="Dengarkan Suara Pelafalan & Penjelasan">
                  🔊
                </button>
              </div>

              <!-- NALAR BAYI KODI -->
              <div class="dict-baby-analogy-box">
                <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
                  <span style="font-size: 1rem;">🍼</span>
                  <strong style="font-size: 0.82rem; color: #b45309;">Nalar Bayi Kodi:</strong>
                </div>
                <div style="font-size: 0.86rem; line-height: 1.45; font-weight: 500;">
                  "${item.babyAnalogy}"
                </div>
              </div>

              <!-- PENJELASAN TEKNIS -->
              <div class="dict-technical-box">
                <div style="font-size: 0.78rem; font-weight: 700; color: var(--accent-cyan); margin-bottom: 2px;">
                  🔬 Penjelasan Teknis & Ringkasan:
                </div>
                <div style="font-size: 0.82rem; color: var(--text-main); line-height: 1.45;">
                  ${item.detail}
                </div>
              </div>

              <!-- SUMBER RESMI DARI EBOOK REFERENSI -->
              ${item.reference ? `
                <div class="dict-reference-box">
                  <div style="display: flex; align-items: center; gap: 5px; margin-bottom: 2px;">
                    <span style="font-size: 0.85rem;">📚</span>
                    <strong style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.4px;">Sumber Terpercaya Ebook:</strong>
                  </div>
                  <div style="font-size: 0.8rem; font-weight: 700; line-height: 1.35; margin-bottom: 2px;">
                    📖 ${item.reference.book}
                  </div>
                  <div style="font-size: 0.74rem; opacity: 0.85; line-height: 1.3;">
                    ✍️ Penulis: ${item.reference.author} • 📑 ${item.reference.page}
                  </div>
                  ${item.reference.pdfFile ? `
                    <div style="font-size: 0.68rem; font-family: monospace; opacity: 0.6; margin-top: 3px;">
                      📁 ${item.reference.pdfFile}
                    </div>
                  ` : ''}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      `}

      <!-- BOTTOM PAGINATION -->
      ${totalPages > 1 ? `
        <div style="display: flex; justify-content: center; align-items: center; gap: 10px; margin-top: 24px;">
          <button class="btn-secondary" style="padding: 6px 14px;" onclick="changeDictionaryPage(-1)" ${state.page <= 1 ? 'disabled' : ''}>
            ⬅️ Halaman Sebelumnya
          </button>
          <span style="font-weight: 700; font-size: 0.85rem; color: var(--text-muted);">
            Halaman ${state.page} dari ${totalPages}
          </span>
          <button class="btn-secondary" style="padding: 6px 14px;" onclick="changeDictionaryPage(1)" ${state.page >= totalPages ? 'disabled' : ''}>
            Halaman Berikutnya ➡️
          </button>
        </div>
      ` : ''}
    </div>
  `;
};

window.executeDictionarySearch = function() {
  if (window.sfx) sfx.playClick();
  const input = document.getElementById("dict-search-input");
  if (input) {
    window.dictState.query = input.value;
    window.dictState.page = 1;
  }
  window.renderDictionary();
};

window.clearDictionaryQuery = function() {
  if (window.sfx) sfx.playClick();
  window.dictState.query = '';
  window.dictState.page = 1;
  window.renderDictionary();
};

window.quickSearchDictionary = function(term) {
  if (window.sfx) sfx.playClick();
  window.dictState.query = term;
  window.dictState.page = 1;
  window.renderDictionary();
};

window.filterDictionaryCategory = function(cat) {
  if (window.sfx) sfx.playClick();
  window.dictState.category = cat;
  window.dictState.page = 1;
  window.renderDictionary();
};

window.resetDictionarySearch = function() {
  if (window.sfx) sfx.playClick();
  window.dictState.query = '';
  window.dictState.category = 'all';
  window.dictState.page = 1;
  window.renderDictionary();
};

window.changeDictionaryPage = function(delta) {
  if (window.sfx) sfx.playClick();
  window.dictState.page += delta;
  window.renderDictionary();
  const container = document.getElementById("tab-dictionary");
  if (container) container.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

window.speakDictionaryItem = function(term, analogy) {
  if (window.speechEngine) {
    window.speechEngine.speak(`${term}. Nalar Bayi Kodi: ${analogy}`);
  }
};

window.initDictionarySearch = function() {
  if (document.getElementById("dictionary-content-area") || document.getElementById("dictionary-list")) {
    window.renderDictionary();
  }
};

// ================= APP INITIALIZATION =================
window.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initKodiAvatar();
  loadProgress();
  renderQuestGrid();
  initDictionarySearch();
  initPwaInstall();
  speechEngine.updateAccentUi();

  // Auto-purge old caches if version is not v13
  const lastVer = localStorage.getItem('kodi_app_cache_version');
  if (lastVer !== 'v13') {
    localStorage.setItem('kodi_app_cache_version', 'v13');
    if ('caches' in window) {
      caches.keys().then(keys => {
        const oldKeys = keys.filter(k => k !== 'kodi-it-academy-v13');
        if (oldKeys.length > 0) {
          Promise.all(oldKeys.map(k => caches.delete(k))).then(() => {
            console.log('Old caches purged automatically on startup!');
          });
        }
      });
    }
  }

  // Sound toggle button
  const soundBtn = document.getElementById("sound-toggle");
  if (soundBtn) {
    soundBtn.addEventListener("click", () => {
      const isSoundOn = sfx.toggle();
      soundBtn.innerHTML = isSoundOn ? "🔊" : "🔇";
      if (!isSoundOn) {
        speechEngine.stopSpeaking();
      }
    });
  }

  // Mascot click joke
  const kodiWrap = document.querySelector(".kodi-character-wrap");
  if (kodiWrap) {
    kodiWrap.addEventListener("click", () => {
      const jokes = [
        "Kenapa programmer suka kopi? Karena kalau minum air es, kodenya suka nge-freeze!",
        "Kenapa anak IT ga pernah tersesat? Karena selalu bawa Default Gateway!",
        "Kalo komputer kamu batuk, jangan dikasih obat sirup ya, cukup di-restart aja!"
      ];
      const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
      setKodiSpeech(randomJoke, "Hehehe robot juga bisa ngelawak lho!");
    });
  }

  setKodiSpeech(
    "Halo temanku! Kenalin, namaku Kodi 🤖! Di sini kita bakal belajar Koding, IT Support, SQL Tabel, dan English Speaking buat persiapan tes kerja!",
    "Pilih tab di atas untuk mulai berlatih!"
  );
});

// =============================================================================
// STUDIO KODING MANUAL (100 TANTANGAN INTERAKTIF ESSAI)
// HTML/CSS (20), JavaScript (20), Python (20), Java (20), C# (20)
// =============================================================================
function renderCodeTrainer() {
  const container = document.getElementById("code-trainer-content-area") || document.getElementById("code-content-area");
  if (!container) return;

  if (typeof codeChallenges === "undefined" || !codeChallenges.length) {
    container.innerHTML = `<div class="info-box">Data tantangan koding sedang disiapkan...</div>`;
    return;
  }

  appState.codeLanguageFilter = appState.codeLanguageFilter || "all";
  appState.currentCodeIndex = appState.currentCodeIndex || 0;
  appState.codeCompleted = appState.codeCompleted || [];
  appState.codeUserDrafts = appState.codeUserDrafts || {};

  const categories = [
    { key: "all", label: `📂 Semua Bahasa (100 Soal)` },
    { key: "HTML/CSS", label: "🌐 1. HTML5 & CSS3 (20)" },
    { key: "JavaScript", label: "⚡ 2. JavaScript ES6+ (20)" },
    { key: "Python", label: "🐍 3. Python Data & Algo (20)" },
    { key: "Java", label: "☕ 4. Java OOP & Structures (20)" },
    { key: "C#", label: "🔷 5. C# .NET Modern (20)" }
  ];

  const filteredList = (appState.codeLanguageFilter === "all")
    ? codeChallenges.map((item, idx) => ({ item, originalIndex: idx }))
    : codeChallenges
        .map((item, idx) => ({ item, originalIndex: idx }))
        .filter(x => x.item.language === appState.codeLanguageFilter);

  if (appState.currentCodeIndex < 0 || appState.currentCodeIndex >= codeChallenges.length) {
    appState.currentCodeIndex = 0;
  }

  let currentPos = filteredList.findIndex(x => x.originalIndex === appState.currentCodeIndex);
  if (currentPos === -1 && filteredList.length > 0) {
    appState.currentCodeIndex = filteredList[0].originalIndex;
    currentPos = 0;
  }

  const chal = codeChallenges[appState.currentCodeIndex] || codeChallenges[0];
  const isDone = appState.codeCompleted.includes(chal.id);
  const currentCode = (appState.codeUserDrafts[chal.id] !== undefined)
    ? appState.codeUserDrafts[chal.id]
    : chal.starterCode;

  const completedCount = appState.codeCompleted.length;
  const progressPercent = Math.round((completedCount / codeChallenges.length) * 100);

  container.innerHTML = `
    <!-- Header Card -->
    <div style="background: linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.98)); border: 1px solid var(--border-glow); border-radius: var(--radius-lg); padding: 22px; margin-bottom: 20px; box-shadow: var(--shadow-card);">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 14px;">
        <div style="flex: 1; min-width: 260px;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
            <span style="font-size: 1.8rem;">💻</span>
            <div>
              <h3 style="margin: 0; color: #fff; font-size: 1.3rem;">Studio Koding Manual: Praktik Menulis Kode</h3>
              <p style="margin: 2px 0 0; font-size: 0.85rem; color: var(--accent-cyan);">
                100 Tantangan Essai: HTML/CSS (20), JavaScript (20), Python (20), Java (20), & C# (20) dengan Uji Eksekusi Otomatis
              </p>
            </div>
          </div>
        </div>
        <div style="text-align: right; min-width: 170px;">
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 4px;">Pencapaian Koding:</div>
          <div style="font-size: 1.25rem; font-weight: 800; color: var(--accent-green);">
            ${completedCount} / ${codeChallenges.length} Selesai (${progressPercent}%)
          </div>
          <div style="height: 6px; width: 100%; background: rgba(255,255,255,0.1); border-radius: 3px; margin-top: 6px; overflow: hidden;">
            <div style="height: 100%; width: ${progressPercent}%; background: linear-gradient(90deg, var(--accent-cyan), var(--accent-green));"></div>
          </div>
        </div>
      </div>

      <!-- Kategori Filter Tabs -->
      <div style="display: flex; gap: 8px; margin-top: 18px; overflow-x: auto; padding-bottom: 6px;">
        ${categories.map(c => `
          <button class="choice-card-btn ${appState.codeLanguageFilter === c.key ? 'active-eng-mode' : ''}" 
                  style="flex: 1; min-width: 150px; padding: 10px 14px; font-size: 0.82rem; font-weight: 700; text-align: center; justify-content: center; ${appState.codeLanguageFilter === c.key ? 'border-color: var(--accent-cyan); background: rgba(6, 182, 212, 0.15);' : ''}" 
                  onclick="setCodeLanguageFilter('${c.key}')">
            ${c.label}
          </button>
        `).join('')}
      </div>
    </div>

    <!-- Navigation Bar -->
    <div class="challenge-nav-bar">
      <div class="challenge-nav-controls">
        <label style="font-size: 0.8rem; font-weight: 700; color: var(--accent-cyan);">Navigasi Tantangan:</label>
      </div>

      <div class="challenge-nav-controls">
        <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem;" onclick="navCodeChallenge(-1)" ${currentPos <= 0 ? 'disabled' : ''}>
          ⬅️ Prev
        </button>
        <select class="challenge-page-select" onchange="setCodeChallengeIndex(Number(this.value))">
          ${filteredList.map((x) => `
            <option value="${x.originalIndex}" ${x.originalIndex === appState.currentCodeIndex ? 'selected' : ''}>
              #${x.originalIndex + 1}: [${x.item.language}] ${x.item.title} ${appState.codeCompleted.includes(x.item.id) ? '✅' : ''}
            </option>
          `).join('')}
        </select>
        <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem;" onclick="navCodeChallenge(1)" ${currentPos >= filteredList.length - 1 ? 'disabled' : ''}>
          Next ➡️
        </button>
      </div>
    </div>

    <!-- Main Challenge Card -->
    <div style="background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-glow); padding: 24px; margin-bottom: 24px; box-shadow: var(--shadow-card);">
      
      <!-- Meta Information Row with Matching 3D Clay Coding Mascots (Tiles 01-06) -->
      <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 14px;">
        <img src="assets/illustrations/3d_tiles/tile_3d_${(chal.language === 'HTML/CSS' ? '03' : chal.language === 'JavaScript' ? '06' : chal.language === 'Python' ? '02' : chal.language === 'Java' ? '04' : chal.language === 'C#' ? '05' : '01')}.png"
             style="width: 60px; height: 60px; border-radius: 12px; object-fit: cover; border: 2px solid var(--accent-cyan); flex-shrink: 0; box-shadow: 0 4px 12px rgba(56, 189, 248, 0.25);"
             alt="Pahlawan Koding ${chal.language}">
        <div style="flex: 1;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
            <span style="font-size: 0.78rem; color: var(--accent-cyan); font-weight: 800; text-transform: uppercase;">
              ${chal.category} • Pahlawan Koding: ${chal.language} • Soal ${appState.currentCodeIndex + 1} dari ${codeChallenges.length}
            </span>
            <span style="font-size: 0.85rem; font-weight: 700; ${isDone ? 'color: var(--accent-green);' : 'color: var(--text-muted);'}">
              ${isDone ? '✅ Selesai (+1 Bintang)' : '⏳ Sedang Dikerjakan'}
            </span>
          </div>
          <h3 style="color: var(--text-main); margin: 4px 0 0; font-size: 1.25rem;">
            ${chal.title}
          </h3>
        </div>
      </div>

      <!-- WORKED EXAMPLE CARD (KASUS SERUPA A & SINTAKS CONTOH DULU) -->
      ${chal.workedExample ? `
        <div class="worked-example-card" style="margin-bottom: 20px;">
          <div class="worked-example-header">
            <span class="we-badge">💡 CONTOH SOAL & JAWABAN BENAR DULU (KASUS A)</span>
            <span class="we-sub">Pelajari pola penulisan kode kasus serupa ini sebelum menulis kodemu sendiri:</span>
          </div>
          <div class="we-body">
            <div class="we-row">
              <span class="we-label">📝 Contoh Kasus Serupa:</span>
              <span class="we-text">${chal.workedExample.kasusSerupa}</span>
            </div>
            <div class="we-row" style="flex-direction: column; align-items: flex-start; gap: 6px;">
              <span class="we-label">✅ Contoh Kode yang 100% Benar:</span>
              <pre style="background: #060911; border: 1px dashed rgba(16, 185, 129, 0.4); border-radius: 6px; padding: 10px 14px; font-family: monospace; font-size: 0.88rem; color: #34d399; margin: 0; width: 100%; overflow-x: auto; white-space: pre-wrap;">${escapeCodeHtml(chal.workedExample.jawabanBenarContoh)}</pre>
            </div>
            <div class="we-row">
              <span class="we-label">🍼 Analogi & Nalar Bayi Kodi:</span>
              <span class="we-text">${chal.workedExample.nalarBayi}</span>
            </div>
          </div>
          <div class="we-divider">🎯 SEKARANG TULIS KODE TANTANGAN (KASUS B) DI BAWAH INI:</div>
        </div>
      ` : ''}

      <!-- Skenario & Instruksi Tugas B -->
      <div style="background: rgba(15, 23, 42, 0.85); border-left: 4px solid var(--accent-cyan); padding: 14px 18px; border-radius: 6px; margin-bottom: 18px; font-size: 0.95rem; line-height: 1.6; color: #e2e8f0;">
        <strong>🎯 Skenario Tugas Koding:</strong><br>
        ${chal.description}
      </div>

      <!-- Bilah Shortcut Cepat Ngetik Simbol (Bantu Pengguna HP/Keyboard) -->
      <div style="margin-bottom: 10px;">
        <div style="font-size: 0.78rem; font-weight: 700; color: var(--text-muted); margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
          <span>⚡ Shortcut Ketik Cepat:</span>
          <span style="font-weight: normal; font-size: 0.72rem;">(Klik untuk menyisipkan simbol langsung ke kursor)</span>
        </div>
        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          ${(chal.quickShortcuts || ["{", "}", "(", ")", "[", "]", ";", '"', "'", "="]).map(sc => `
            <button class="btn-secondary" 
                    style="padding: 4px 10px; font-size: 0.82rem; font-family: monospace; font-weight: 700; background: rgba(15, 23, 42, 0.9); border: 1px solid rgba(255,255,255,0.18);" 
                    onclick="insertCodeShortcut('${escapeJsAttr(sc)}')">
              ${escapeCodeHtml(sc)}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Live Code Editor (Textarea Monospace IDE Style) -->
      <div style="position: relative; margin-bottom: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center; background: #0b1120; border: 1px solid rgba(255,255,255,0.1); border-bottom: none; border-radius: 8px 8px 0 0; padding: 8px 14px; font-size: 0.78rem; color: #94a3b8;">
          <span style="font-family: monospace; font-weight: 700; color: var(--accent-cyan);">Editor: ${chal.language}</span>
          <span>Tab / Spasi Otomatis</span>
        </div>
        <textarea id="code-studio-editor"
                  style="width: 100%; min-height: 190px; background: #060911; color: #f8fafc; font-family: 'Consolas', 'Fira Code', 'Monaco', monospace; font-size: 0.92rem; line-height: 1.5; padding: 14px; border: 1px solid rgba(255,255,255,0.15); border-radius: 0 0 8px 8px; resize: vertical; box-sizing: border-box; outline: none;"
                  placeholder="Tulis kode solusimu di sini..."
                  spellcheck="false"
                  oninput="handleCodeInput('${chal.id}', this.value)">${escapeCodeHtml(currentCode)}</textarea>
      </div>

      <!-- Tombol Aksi Eksekusi & Reset -->
      <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 18px;">
        <button class="btn-primary" style="padding: 10px 22px; font-weight: 800; font-size: 0.95rem; background: var(--accent-cyan); color: #0b1120; border: none;" onclick="runCodeChallengeTest()">
          ▶️ Uji & Jalankan Kode
        </button>
        <button class="btn-secondary" style="padding: 10px 18px; font-size: 0.88rem;" onclick="resetCodeChallengeToStarter()">
          🔄 Reset Kode Awal
        </button>
      </div>

      <!-- Output Console & Test Results Box -->
      <div id="code-test-console" style="display: none;"></div>

      <!-- Penjelasan Konsep Setelah Sukses -->
      <div id="code-concept-explanation" style="${isDone ? 'display: block;' : 'display: none;'} margin-top: 14px;">
        <div class="alert-box info" style="background: rgba(15, 23, 42, 0.9); border-left: 4px solid var(--accent-cyan);">
          <strong style="color: var(--accent-cyan);">📚 Rangkuman Pembelajaran:</strong><br>
          <p style="margin: 6px 0 0; font-size: 0.88rem; line-height: 1.5; color: #cbd5e1;">${chal.explanation}</p>
        </div>
      </div>

    </div>
  `;
}

function escapeCodeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeJsAttr(str) {
  if (!str) return "";
  return String(str).replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

window.setCodeLanguageFilter = function(lang) {
  sfx.playClick();
  appState.codeLanguageFilter = lang;
  if (lang !== "all") {
    const firstIdx = codeChallenges.findIndex(c => c.language === lang);
    if (firstIdx !== -1) {
      appState.currentCodeIndex = firstIdx;
    }
  }
  renderCodeTrainer();
};

window.navCodeChallenge = function(delta) {
  sfx.playClick();
  const filteredList = (appState.codeLanguageFilter === "all")
    ? codeChallenges.map((item, idx) => idx)
    : codeChallenges
        .map((item, idx) => ({ item, originalIndex: idx }))
        .filter(x => x.item.language === appState.codeLanguageFilter)
        .map(x => x.originalIndex);

  let currentPos = filteredList.indexOf(appState.currentCodeIndex);
  let newPos = currentPos + delta;
  if (newPos >= 0 && newPos < filteredList.length) {
    appState.currentCodeIndex = filteredList[newPos];
    renderCodeTrainer();
  }
};

window.setCodeChallengeIndex = function(idx) {
  sfx.playClick();
  appState.currentCodeIndex = idx;
  renderCodeTrainer();
};

window.handleCodeInput = function(chalId, value) {
  appState.codeUserDrafts = appState.codeUserDrafts || {};
  appState.codeUserDrafts[chalId] = value;
};

window.insertCodeShortcut = function(text) {
  sfx.playClick();
  const editor = document.getElementById("code-studio-editor");
  if (!editor) return;

  const start = editor.selectionStart;
  const end = editor.selectionEnd;
  const currentVal = editor.value;

  editor.value = currentVal.substring(0, start) + text + currentVal.substring(end);
  editor.selectionStart = editor.selectionEnd = start + text.length;
  editor.focus();

  const chal = codeChallenges[appState.currentCodeIndex];
  if (chal) {
    appState.codeUserDrafts = appState.codeUserDrafts || {};
    appState.codeUserDrafts[chal.id] = editor.value;
  }
};

window.resetCodeChallengeToStarter = function() {
  sfx.playClick();
  const chal = codeChallenges[appState.currentCodeIndex];
  if (!chal) return;

  appState.codeUserDrafts = appState.codeUserDrafts || {};
  appState.codeUserDrafts[chal.id] = chal.starterCode;

  const editor = document.getElementById("code-studio-editor");
  if (editor) editor.value = chal.starterCode;

  const consoleBox = document.getElementById("code-test-console");
  if (consoleBox) consoleBox.style.display = "none";

  renderCodeTrainer();
};

window.runCodeChallengeTest = function() {
  const chal = codeChallenges[appState.currentCodeIndex];
  if (!chal) return;

  const editor = document.getElementById("code-studio-editor");
  const userCode = editor ? editor.value.trim() : "";
  const consoleBox = document.getElementById("code-test-console");
  const conceptBox = document.getElementById("code-concept-explanation");

  if (!userCode || userCode === chal.starterCode.trim()) {
    sfx.playWrong();
    if (consoleBox) {
      consoleBox.style.display = "block";
      consoleBox.className = "alert-box warning";
      consoleBox.innerHTML = `
        <strong>⚠️ Kode Belum Diisi / Masih Kode Awal!</strong><br>
        Tuliskan sintaks solusi kamu di dalam kotak editor sebelum menekan tombol uji!
      `;
    }
    return;
  }

  // Evaluate validation rules
  const rules = chal.validationRules || [];
  const missingRules = [];

  for (const rule of rules) {
    // Normalization check: ignores extra whitespace inside code
    const cleanRule = rule.trim();
    if (!userCode.includes(cleanRule)) {
      // Try regex or case-insensitive check if appropriate
      missingRules.push(cleanRule);
    }
  }

  if (missingRules.length === 0) {
    // SUCCESS! All rules passed!
    sfx.playSuccess();
    if (!appState.codeCompleted.includes(chal.id)) {
      appState.codeCompleted.push(chal.id);
      appState.stars = (appState.stars || 0) + 1;
      saveProgress();
      const starEl = document.getElementById("header-stars");
      if (starEl) starEl.textContent = `${appState.stars} Bintang`;
    }

    if (consoleBox) {
      consoleBox.style.display = "block";
      consoleBox.className = "alert-box success";
      consoleBox.innerHTML = `
        <div style="display: flex; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
          <div>
            <div style="font-size: 1.1rem; font-weight: 800; margin-bottom: 4px;">🎉 Luar Biasa! Pengujian Kode Berhasil 100%! (+1 Bintang)</div>
            <div style="font-size: 0.88rem; color: #e2e8f0; line-height: 1.5;">
              Sintaks ${chal.language} yang kamu tulis telah memenuhi seluruh kriteria pengujian unit & struktur algoritma secara valid!
            </div>
            <div style="margin-top: 8px; font-family: monospace; font-size: 0.8rem; background: rgba(0,0,0,0.3); padding: 6px 10px; border-radius: 4px; color: #34d399;">
              [STATUS: PASS] Semua ${rules.length} parameter uji terverifikasi sukses.
            </div>
          </div>
          <button class="btn-primary" style="background: var(--accent-green); border: none; padding: 8px 16px;" onclick="navCodeChallenge(1)">
            Tantangan Berikutnya ➡️
          </button>
        </div>
      `;
    }

    if (conceptBox) conceptBox.style.display = "block";

    setKodiSpeech(
      `Horeee! Koding kamu untuk ${chal.title} berhasil 100%!`,
      "Kemampuan koding manualmu luar biasa! Terus asah logika dan sintaksmu di tantangan berikutnya!"
    );
  } else {
    // ERROR / MISSING RULES
    sfx.playWrong();
    if (consoleBox) {
      consoleBox.style.display = "block";
      consoleBox.className = "alert-box warning";
      consoleBox.innerHTML = `
        <div style="font-size: 1rem; font-weight: 800; margin-bottom: 4px;">⚠️ Kode Belum Memenuhi Kriteria Pengujian</div>
        <div style="font-size: 0.88rem; line-height: 1.5; color: #cbd5e1;">
          Masih ada elemen, instruksi, atau fungsi yang belum lengkap dalam kodemu. Cermati petunjuk tugas dan pelajari kembali struktur di contoh Kasus A di atas!
        </div>
        <div style="margin-top: 8px; font-size: 0.8rem; color: #fca5a5;">
          💡 <strong>Petunjuk:</strong> Pastikan kamu sudah menyertakan instruksi/kata kunci yang diminta pada skenario tugas.
        </div>
      `;
    }

    setKodiSpeech(
      "Ups, kode yang kamu tulis belum lolos semua tes pengujian!",
      "Coba baca kembali instruksi tugas dan perhatikan contoh Kasus A di kotak atas ya!"
    );
  }
};


// ==============================================================================
// 📐 CAMBRIDGE BILINGUAL MATHEMATICS STUDIO (100 INTERACTIVE CHALLENGES)
// ==============================================================================

function renderMathTrainer() {
  const container = document.getElementById("math-trainer-content-area");
  if (!container) return;

  if (typeof window.CAMBRIDGE_MATH_CHALLENGES === "undefined" || !window.CAMBRIDGE_MATH_CHALLENGES.length) {
    container.innerHTML = `<div class="info-box">Data tantangan matematika Cambridge sedang disiapkan...</div>`;
    return;
  }

  const allChallenges = window.CAMBRIDGE_MATH_CHALLENGES;
  appState.mathUnitFilter = appState.mathUnitFilter || "all";
  appState.currentMathIndex = appState.currentMathIndex || 0;
  appState.mathCompleted = appState.mathCompleted || [];
  appState.mathUserDrafts = appState.mathUserDrafts || {};

  const categories = [
    { key: "all", icon: "🌟", name: "Semua Unit", count: 100 },
    { key: "Unit 1", icon: "🔢", name: "1. Numbers", count: 10 },
    { key: "Unit 2", icon: "🧬", name: "2. Algebra", count: 10 },
    { key: "Unit 3", icon: "⚖️", name: "3. Equations", count: 10 },
    { key: "Unit 4", icon: "📊", name: "4. Ratio & Rates", count: 10 },
    { key: "Unit 5", icon: "💰", name: "5. Financial Math", count: 10 },
    { key: "Unit 6", icon: "📐", name: "6. Geometry & Angles", count: 10 },
    { key: "Unit 7", icon: "🧊", name: "7. Mensuration", count: 10 },
    { key: "Unit 8", icon: "📏", name: "8. Pythagoras & Trig", count: 10 },
    { key: "Unit 9", icon: "📈", name: "9. Coordinate & Func", count: 10 },
    { key: "Unit 10", icon: "🎲", name: "10. Prob & Stats", count: 10 }
  ];

  const filteredList = (appState.mathUnitFilter === "all")
    ? allChallenges.map((item, idx) => ({ item, originalIndex: idx }))
    : allChallenges
        .map((item, idx) => ({ item, originalIndex: idx }))
        .filter(x => x.item.unit && x.item.unit.toLowerCase().indexOf(appState.mathUnitFilter.toLowerCase()) !== -1);

  if (appState.currentMathIndex < 0 || appState.currentMathIndex >= allChallenges.length) {
    appState.currentMathIndex = 0;
  }

  let currentPos = filteredList.findIndex(x => x.originalIndex === appState.currentMathIndex);
  if (currentPos === -1 && filteredList.length > 0) {
    appState.currentMathIndex = filteredList[0].originalIndex;
    currentPos = 0;
  }

  const chal = allChallenges[appState.currentMathIndex] || allChallenges[0];
  const isDone = appState.mathCompleted.includes(chal.id);
  const currentDraft = (appState.mathUserDrafts[chal.id] !== undefined)
    ? appState.mathUserDrafts[chal.id]
    : "";

  const completedCount = appState.mathCompleted.length;
  const progressPercent = Math.round((completedCount / allChallenges.length) * 100);

  const padSymbols = chal.quickPad && chal.quickPad.length ? chal.quickPad : ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "×", "/", "=", "x", "y"];

  container.innerHTML = `
    <!-- Header Card -->
    <div class="math-header-card">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 14px;">
        <div style="flex: 1; min-width: 260px;">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 6px;">
            <span style="font-size: 2rem;">📐</span>
            <div>
              <h3 style="margin: 0; font-size: 1.3rem;">Cambridge Bilingual Mathematics Studio</h3>
              <p style="margin: 2px 0 0; font-size: 0.85rem; color: var(--accent-cyan); font-weight: 600;">
                100 Tantangan Interaktif Standar Cambridge Checkpoint & IGCSE (0580/0862) dengan Nalar Bayi Kodi & Virtual Math Pad
              </p>
            </div>
          </div>
        </div>
        <div style="text-align: right; min-width: 170px;">
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 4px;">Pencapaian Matematika:</div>
          <div style="font-size: 1.25rem; font-weight: 800; color: var(--accent-green);">
            ${completedCount} / ${allChallenges.length} Selesai (${progressPercent}%)
          </div>
          <div style="height: 6px; width: 100%; background: rgba(0,0,0,0.12); border-radius: 3px; margin-top: 6px; overflow: hidden;">
            <div style="height: 100%; width: ${progressPercent}%; background: linear-gradient(90deg, var(--accent-cyan), var(--accent-green)); transition: width 0.3s ease;"></div>
          </div>
        </div>
      </div>

      <!-- Kategori Filter Tabs (Auto-sizing & No Truncation) -->
      <div class="math-unit-tab-wrap">
        ${categories.map(c => `
          <button type="button"
                  class="math-unit-tab-btn ${appState.mathUnitFilter === c.key ? 'active' : ''}"
                  onclick="setMathUnitFilter('${c.key}')"
                  title="${c.name} (${c.count} Soal)">
            <span>${c.icon}</span>
            <span>${c.name}</span>
            <span class="math-unit-badge">${c.count}</span>
          </button>
        `).join('')}
      </div>
    </div>

    <!-- Navigation Bar & Peta Nomor Soal (1 - 100) -->
    <div class="challenge-nav-bar" style="margin-bottom: 14px;">
      <div class="challenge-nav-controls" style="display: flex; align-items: center; gap: 8px;">
        <label style="font-size: 0.82rem; font-weight: 800; color: var(--accent-cyan);">Navigasi Soal:</label>
      </div>

      <div class="challenge-nav-controls" style="display: flex; align-items: center; gap: 8px; flex: 1; max-width: 650px; justify-content: flex-end;">
        <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem;" onclick="navMathChallenge(-1)" ${currentPos <= 0 ? 'disabled' : ''}>
          ◀ Prev
        </button>
        <select class="challenge-page-select" style="flex: 1;" onchange="setMathChallengeIndex(Number(this.value))">
          ${filteredList.map((x) => `
            <option value="${x.originalIndex}" ${x.originalIndex === appState.currentMathIndex ? 'selected' : ''}>
              #${x.originalIndex + 1}: [${x.item.unit.split(':')[0]}] ${x.item.title} ${appState.mathCompleted.includes(x.item.id) ? '✓ Selesai' : ''}
            </option>
          `).join('')}
        </select>
        <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem;" onclick="navMathChallenge(1)" ${currentPos >= filteredList.length - 1 ? 'disabled' : ''}>
          Next ▶
        </button>
      </div>
    </div>

    <!-- PETA LEMBAR NOMOR SOAL (1 - 100) CBT GRID PALETTE -->
    <div class="math-number-palette-card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 6px;">
        <div style="font-size: 0.8rem; font-weight: 800; color: var(--accent-cyan); display: flex; align-items: center; gap: 6px;">
          <span>📋</span> <span>Peta Nomor Soal (${filteredList.length} Soal ${appState.mathUnitFilter === 'all' ? 'Tersedia' : appState.mathUnitFilter}):</span>
        </div>
        <span style="font-size: 0.74rem; color: var(--text-muted);">
          Klik nomor kotak untuk langsung loncat ke soal • Hijau: Selesai ✅
        </span>
      </div>
      <div class="math-number-grid">
        ${filteredList.map((x) => `
          <button type="button"
                  class="math-num-chip ${x.originalIndex === appState.currentMathIndex ? 'active' : ''} ${appState.mathCompleted.includes(x.item.id) ? 'done' : ''}"
                  onclick="setMathChallengeIndex(${x.originalIndex})"
                  title="Soal #${x.originalIndex + 1}: [${x.item.unit.split(':')[0]}] ${x.item.title}">
            ${x.originalIndex + 1}
          </button>
        `).join('')}
      </div>
    </div>

    <!-- MAIN GRID: Worked Example (Left/Top) & Student Challenge (Right/Bottom) -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin-bottom: 24px;">

      <!-- ================= KOTAK CONTOH SOAL SERUPA (KASUS A) ================= -->
      <div class="math-worked-card">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; flex-wrap: wrap; gap: 6px;">
          <span style="font-size: 0.75rem; font-weight: 800; background: rgba(167, 139, 250, 0.2); color: #8b5cf6; padding: 4px 10px; border-radius: 20px; letter-spacing: 0.5px; border: 1px solid rgba(167, 139, 250, 0.3);">
            📖 CONTOH SOAL & PEMBAHASAN TERPISAH (KASUS A)
          </span>
          <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">Pelajari Polanya 💡</span>
        </div>

        <!-- Soal Contoh Bilingual -->
        <div class="math-statement-box">
          <div style="font-size: 0.82rem; font-weight: 700; color: #8b5cf6; margin-bottom: 4px;">🇬🇧 Worked Example Statement:</div>
          <div style="font-size: 0.95rem; font-weight: 600; line-height: 1.4; margin-bottom: 8px;">
            ${chal.workedExample ? formatMathFractions(chal.workedExample.kasusSerupaEN) : '-'}
          </div>
          <div style="font-size: 0.82rem; font-weight: 700; color: #6366f1; margin-bottom: 4px;">🇮🇩 Arti & Soal Bahasa Indonesia:</div>
          <div style="font-size: 0.88rem; line-height: 1.4;">
            ${chal.workedExample ? formatMathFractions(chal.workedExample.kasusSerupaID) : '-'}
          </div>
        </div>

        <!-- Langkah Penyelesaian Terinci -->
        <div class="math-steps-box">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--accent-green); margin-bottom: 4px;">📝 Langkah Kerja (Working Out):</div>
          <div style="font-family: monospace; font-size: 0.88rem; line-height: 1.5; white-space: pre-wrap;">
            ${chal.workedExample ? formatMathFractions(chal.workedExample.langkahPenyelesaian) : '-'}
          </div>
        </div>

        <!-- Jawaban Benar Contoh Kasus A -->
        <div class="math-answer-box">
          <span style="font-size: 0.82rem; font-weight: 700; color: var(--accent-green);">Jawaban Benar Contoh Kasus A:</span>
          <span style="font-size: 1.05rem; font-weight: 800; color: var(--accent-green); font-family: monospace;">${chal.workedExample ? formatMathFractions(chal.workedExample.jawabanBenarContoh) : '-'}</span>
        </div>

        <!-- Nalar Bayi Kodi -->
        <div class="math-nalar-box">
          <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 3px;">
            <span style="font-size: 1rem;">👶</span>
            <strong style="font-size: 0.82rem;">Nalar Bayi Kodi:</strong>
          </div>
          <div style="font-size: 0.85rem; line-height: 1.45;">
            ${chal.workedExample ? formatMathFractions(chal.workedExample.nalarBayiKodi) : '-'}
          </div>
        </div>
      </div>

      <!-- ================= KOTAK TANTANGAN SISWA (KASUS B - NO SPOILER) ================= -->
      <div class="math-challenge-card">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; flex-wrap: wrap; gap: 6px;">
          <span style="font-size: 0.75rem; font-weight: 800; background: rgba(56, 189, 248, 0.2); color: var(--accent-cyan); padding: 4px 10px; border-radius: 20px; letter-spacing: 0.5px; border: 1px solid rgba(56, 189, 248, 0.3);">
            🎯 TANTANGAN MATEMATIKA B (KERJAKAN SENDIRI)
          </span>
          <span style="font-size: 0.75rem; color: var(--accent-cyan); font-weight: 600;">${chal.unit}</span>
        </div>

        <!-- Judul & Topik Soal dengan 3D Clay Math Mascot (Tiles 23-26) -->
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
          <img src="assets/illustrations/3d_tiles/tile_3d_${String(23 + (appState.currentMathIndex % 4)).padStart(2, '0')}.png"
               style="width: 54px; height: 54px; border-radius: 10px; object-fit: cover; border: 2px solid #f59e0b; flex-shrink: 0;"
               alt="Cambridge Math Hero #${String(23 + (appState.currentMathIndex % 4)).padStart(2, '0')}">
          <div>
            <h4 style="margin: 0 0 2px; font-size: 1.08rem; color: var(--text-main);">${chal.title}</h4>
            <span style="font-size: 0.78rem; color: var(--text-muted); background: rgba(0,0,0,0.06); padding: 2px 8px; border-radius: 4px;">Topik: ${chal.topic}</span>
          </div>
        </div>

        <!-- Problem Statement Bilingual -->
        <div class="math-question-box">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-cyan); margin-bottom: 4px;">🇬🇧 Cambridge Exam Question:</div>
          <div style="font-size: 1rem; font-weight: 600; line-height: 1.45; margin-bottom: 10px;">
            ${formatMathFractions(chal.questionEN)}
          </div>
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-cyan); margin-bottom: 4px;">🇮🇩 Terjemahan Soal:</div>
          <div style="font-size: 0.9rem; line-height: 1.45;">
            ${formatMathFractions(chal.questionID)}
          </div>
        </div>

        <!-- Input Box & Clear Buttons -->
        <div style="margin-bottom: 12px;">
          <label style="display: block; font-size: 0.82rem; font-weight: 700; color: var(--text-main); margin-bottom: 6px;">
            ✍️ Masukkan Jawaban Akhir Matematika:
          </label>
          <div style="display: flex; gap: 8px;">
            <input type="text" id="math-answer-input"
                   class="math-input"
                   placeholder="Ketik atau gunakan keypad di bawah..."
                   value="${currentDraft.replace(/"/g, '&quot;')}"
                   oninput="saveMathDraft(this.value)"
                   onkeydown="if(event.key==='Enter') submitMathAnswer()">
            <button class="btn-secondary" style="padding: 8px 12px; font-size: 0.82rem;" onclick="backspaceMathInput()" title="Hapus satu karakter">
              ⌫ Del
            </button>
            <button class="btn-secondary" style="padding: 8px 12px; font-size: 0.82rem;" onclick="clearMathInput()" title="Kosongkan jawaban">
              ✕ Reset
            </button>
          </div>
        </div>

        <!-- Virtual Math Pad (QuickPad) -->
        <div class="math-pad-box">
          <div style="font-size: 0.74rem; font-weight: 700; color: var(--text-muted); margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px;">
            🔢 Virtual Math Pad (Klik untuk Mengetik Cepat):
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 6px;">
            ${padSymbols.map(sym => `
              <button type="button"
                      class="math-pad-btn"
                      onclick="appendMathSymbol('${sym}')">
                ${sym}
              </button>
            `).join('')}
            <button type="button"
                    class="math-pad-btn"
                    style="flex: 1; min-width: 60px;"
                    onclick="appendMathSymbol(' ')">
              Spasi
            </button>
          </div>
        </div>

        <!-- Submit Button -->
        <div style="margin-top: auto; display: flex; gap: 10px; align-items: center;">
          <button class="btn-primary"
                  style="flex: 1; padding: 12px; font-size: 0.95rem; font-weight: 800; display: flex; align-items: center; justify-content: center; gap: 8px;"
                  onclick="submitMathAnswer()">
            <span>${isDone ? '🔄 Periksa Ulang' : '▶️ Cek Jawaban Matematika'}</span>
          </button>
        </div>

        <!-- Feedback Area -->
        <div id="math-feedback-box" style="margin-top: 14px; display: ${isDone ? 'block' : 'none'};">
          ${isDone ? `
            <div class="alert-box success" style="margin: 0;">
              <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                <div>
                  <strong>🎉 Soal Ini Sudah Berhasil Kamu Selesaikan!</strong>
                  <div style="font-size: 0.82rem; margin-top: 2px;">
                    Jawaban yang diterima: <code>${chal.expectedAnswer}</code>
                  </div>
                </div>
                <button class="btn-primary" style="background: var(--accent-green); border: none; padding: 6px 14px; font-size: 0.82rem;" onclick="navMathChallenge(1)">
                  Lanjut ⏭️
                </button>
              </div>
            </div>
          ` : ''}
        </div>

      </div>
    </div>
  `;
}


// Handler functions for Math Trainer
window.setMathUnitFilter = function(unitKey) {
  appState.mathUnitFilter = unitKey;
  renderMathTrainer();
};

window.setMathChallengeIndex = function(index) {
  appState.currentMathIndex = index;
  renderMathTrainer();
};

window.navMathChallenge = function(delta) {
  const allChallenges = window.CAMBRIDGE_MATH_CHALLENGES || [];
  const filteredList = (appState.mathUnitFilter === "all")
    ? allChallenges.map((item, idx) => ({ item, originalIndex: idx }))
    : allChallenges
        .map((item, idx) => ({ item, originalIndex: idx }))
        .filter(x => x.item.unit && x.item.unit.toLowerCase().indexOf(appState.mathUnitFilter.toLowerCase()) !== -1);

  let currentPos = filteredList.findIndex(x => x.originalIndex === appState.currentMathIndex);
  if (currentPos === -1) currentPos = 0;

  const nextPos = currentPos + delta;
  if (nextPos >= 0 && nextPos < filteredList.length) {
    appState.currentMathIndex = filteredList[nextPos].originalIndex;
    renderMathTrainer();
  }
};

window.saveMathDraft = function(val) {
  const allChallenges = window.CAMBRIDGE_MATH_CHALLENGES || [];
  const chal = allChallenges[appState.currentMathIndex];
  if (chal) {
    appState.mathUserDrafts = appState.mathUserDrafts || {};
    appState.mathUserDrafts[chal.id] = val;
  }
};

window.appendMathSymbol = function(sym) {
  const inputEl = document.getElementById("math-answer-input");
  if (!inputEl) return;
  const currentVal = inputEl.value || "";
  const nextVal = currentVal + (sym === ' ' ? ' ' : sym);
  inputEl.value = nextVal;
  inputEl.focus();
  window.saveMathDraft(nextVal);
};

window.clearMathInput = function() {
  const inputEl = document.getElementById("math-answer-input");
  if (!inputEl) return;
  inputEl.value = "";
  inputEl.focus();
  window.saveMathDraft("");
};

window.backspaceMathInput = function() {
  const inputEl = document.getElementById("math-answer-input");
  if (!inputEl) return;
  const currentVal = inputEl.value || "";
  if (currentVal.length > 0) {
    const nextVal = currentVal.slice(0, -1);
    inputEl.value = nextVal;
    inputEl.focus();
    window.saveMathDraft(nextVal);
  }
};

window.toggleMathHint = function() {
  const hintBox = document.getElementById("math-hint-box");
  if (!hintBox) return;
  if (hintBox.style.display === "none" || !hintBox.style.display) {
    hintBox.style.display = "block";
    sfx.playRobotChirp();
  } else {
    hintBox.style.display = "none";
  }
};

window.submitMathAnswer = function() {
  const allChallenges = window.CAMBRIDGE_MATH_CHALLENGES || [];
  const chal = allChallenges[appState.currentMathIndex];
  if (!chal) return;

  const inputEl = document.getElementById("math-answer-input");
  const userVal = inputEl ? inputEl.value : "";
  const feedbackBox = document.getElementById("math-feedback-box");

  if (!userVal || !userVal.trim()) {
    sfx.playWrong();
    if (feedbackBox) {
      feedbackBox.style.display = "block";
      feedbackBox.innerHTML = `
        <div class="alert-box warning" style="margin: 0; padding: 12px; border-radius: 8px;">
          <strong>Silakan ketik atau gunakan tombol keypad untuk mengisi jawabanmu terlebih dahulu!</strong>
        </div>
      `;
    }
    return;
  }

  // Call checker in js/math_trainer.js
  const result = window.checkMathChallengeAnswer(chal.id, userVal);

  if (result.isCorrect) {
    sfx.playSuccess();
    if (!appState.mathCompleted.includes(chal.id)) {
      appState.mathCompleted.push(chal.id);
      appState.stars = (appState.stars || 0) + 1;
      saveProgress();
      const starEl = document.getElementById("header-stars");
      if (starEl) starEl.textContent = `${appState.stars} Bintang`;
    }

    if (feedbackBox) {
      feedbackBox.style.display = "block";
      feedbackBox.innerHTML = `
        <div class="alert-box success" style="margin: 0; padding: 14px; border-radius: 8px;">
          <div style="display: flex; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
            <div>
              <div style="font-size: 1.05rem; font-weight: 800; color: #4ade80; margin-bottom: 4px;">
                🎉 Luar Biasa! Jawabanmu Benar (Cambridge Standard Pass)!
              </div>
              <div style="font-size: 0.88rem; color: #e2e8f0; line-height: 1.45;">
                ${result.explanation || chal.explanation}
              </div>
            </div>
            <button class="btn-primary" style="background: var(--accent-green); border: none; padding: 8px 16px; font-weight: 800;" onclick="navMathChallenge(1)">
              Tantangan Berikutnya ⏭️
            </button>
          </div>
        </div>
      `;
    }

    setKodiSpeech(
      `Horeee! Jawabanmu untuk ${chal.title} 100% tepat!`,
      "Kemampuan kalkulasi dan penalaran matematika kamu luar biasa! Yuk taklukkan tantangan berikutnya!"
    );
  } else {
    sfx.playWrong();
    if (feedbackBox) {
      feedbackBox.style.display = "block";
      feedbackBox.innerHTML = `
        <div class="alert-box warning" style="margin: 0; padding: 14px; border-radius: 8px;">
          <div style="font-size: 0.95rem; font-weight: 800; color: #f59e0b; margin-bottom: 4px;">
            ⚠️ Jawaban Belum Tepat, Yuk Coba Lagi!
          </div>
          <div style="font-size: 0.86rem; color: #cbd5e1; line-height: 1.45; margin-bottom: 6px;">
            ${result.feedback}
          </div>
          <div style="font-size: 0.82rem; color: #fde68a;">
            💡 <em>Tips: Cermati kembali cara kerja pada Kasus A di sebelah kiri atau klik tombol Petunjuk Nalar Kodi!</em>
          </div>
        </div>
      `;
    }

    setKodiSpeech(
      "Ups, jawaban matematika kamu belum pas!",
      "Jangan putus asa ya! Coba cek petunjuk logika dan bandingkan dengan contoh Kasus A di sebelah kiri!"
    );
  }
};




// ==============================================================================
// 🎒 SD IHSANIYAH GAJAHMADA TEGAL: MATH FORMATIVE TEST 2 & DIVISION QUEST
// 27 Soal Lengkap Sesuai Urutan PDF + Auto-Save Realtime ke Panel Guru
// ==============================================================================

function renderIhsaniyahTest() {
  const container = document.getElementById("ihsaniyah-content-area");
  if (!container) return;

  if (typeof window.IHSANIYAH_QUESTIONS === "undefined" || !window.IHSANIYAH_QUESTIONS.length) {
    container.innerHTML = `<div class="info-box">Data soal SD Ihsaniyah sedang disiapkan...</div>`;
    return;
  }

  const student = window.getIhsaniyahStudent();
  appState.currentIhsIndex = appState.currentIhsIndex || 0;
  appState.matchingSelectedShirt = appState.matchingSelectedShirt || null;

  // Jika siswa belum login / mendaftar: tampilkan Identity Gate
  if (!student) {
    renderIhsaniyahStudentGate(container);
    return;
  }

  // Muat jawaban tersimpan milik siswa aktif
  if (!appState.ihsUserAnswers || Object.keys(appState.ihsUserAnswers).length === 0) {
    appState.ihsUserAnswers = window.getIhsaniyahStudentAnswersStore() || {};
  }

  // Pastikan record siswa langsung tersinkronisasi di Panel Guru
  syncIhsaniyahProgressToRecords(false);

  const questions = window.IHSANIYAH_QUESTIONS;
  if (appState.currentIhsIndex < 0 || appState.currentIhsIndex >= questions.length) {
    appState.currentIhsIndex = 0;
  }

  const q = questions[appState.currentIhsIndex];
  const stats = getIhsaniyahLiveStats();
  const isCurrentAnswered = window.isIhsaniyahQuestionAnswered(q, appState.ihsUserAnswers[q.id]);

  container.innerHTML = `
    <!-- Header Siswa & Sekolah -->
    <div style="background: linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.98)); border: 1.5px solid #38bdf8; border-radius: 16px; padding: 18px 22px; margin-bottom: 18px; box-shadow: var(--card-shadow);">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div style="display: flex; align-items: center; gap: 14px;">
          <img src="assets/illustrations/3d_tiles/tile_3d_25.png" style="width: 58px; height: 58px; border-radius: 12px; object-fit: cover; border: 2px solid #38bdf8; flex-shrink: 0; box-shadow: 0 4px 12px rgba(56, 189, 248, 0.2);" alt="SD Ihsaniyah Math Mascot">
          <div>
            <div style="font-size: 0.78rem; text-transform: uppercase; font-weight: 800; color: #38bdf8; letter-spacing: 0.5px;">
              YAYASAN PERGURUAN IHSANIYAH • SD IHSANIYAH GAJAHMADA TEGAL
            </div>
            <h3 style="margin: 2px 0 0; color: #fff; font-size: 1.2rem;">
              Math Formative Test 2 & Cambridge Primary Division (27 Nomor Urut)
            </h3>
            <div style="font-size: 0.8rem; color: #cbd5e1; margin-top: 2px;">
              Kampus Al Hafidz • Semua jawaban otomatis tersimpan ke Rekap Nilai Guru
            </div>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
          <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); padding: 8px 14px; border-radius: 10px; text-align: right;">
            <div style="font-size: 0.72rem; color: #94a3b8;">Siswa Aktif:</div>
            <div style="font-size: 0.92rem; font-weight: 800; color: #4ade80;">
              ${student.name} (${student.className} / #${student.number})
            </div>
          </div>

          <div style="background: rgba(56, 189, 248, 0.14); border: 1px solid #38bdf8; padding: 8px 14px; border-radius: 10px; text-align: center;">
            <div style="font-size: 0.72rem; color: #bae6fd;">Progres Terisi:</div>
            <div id="ihs-live-answered-badge" style="font-size: 1.05rem; font-weight: 800; color: #38bdf8;">
              ${stats.answeredCount} / ${questions.length} Soal
            </div>
          </div>

          <button class="btn-secondary" style="padding: 8px 12px; font-size: 0.8rem; border-radius: 8px;" onclick="openIhsaniyahAdminPanel()">
            👩‍🏫 Panel Guru (Rekap)
          </button>
          <button class="btn-secondary" style="padding: 8px 12px; font-size: 0.8rem; border-radius: 8px; color: #fca5a5;" onclick="logoutIhsaniyahStudentHandler()">
            🚪 Ganti Siswa
          </button>
        </div>
      </div>
    </div>

    <!-- Peta Nomor Soal Cepat (1 - 27) -->
    <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 12px 16px; margin-bottom: 16px;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 8px;">
        <span style="font-size: 0.8rem; font-weight: 800; color: #38bdf8;">📌 Daftar Urut 27 Soal (Formative Test No. 1–10 & Buku Paket Hal. 55–75):</span>
        <span id="ihs-autosave-indicator" style="font-size: 0.76rem; color: #4ade80; font-weight: 700;">
          ✅ Tersimpan Otomatis ke Panel Guru
        </span>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 6px;">
        ${questions.map((item, idx) => {
          const answered = window.isIhsaniyahQuestionAnswered(item, appState.ihsUserAnswers[item.id]);
          const isCurrent = (idx === appState.currentIhsIndex);
          const bg = isCurrent
            ? 'linear-gradient(135deg, #0284c7, #2563eb)'
            : answered
              ? 'rgba(16, 185, 129, 0.25)'
              : 'rgba(30, 41, 59, 0.9)';
          const border = isCurrent
            ? '2px solid #fff'
            : answered
              ? '1.5px solid #10b981'
              : '1px solid rgba(255,255,255,0.15)';
          return `
            <button onclick="setIhsaniyahIndex(${idx})" style="min-width: 38px; height: 34px; border-radius: 8px; background: ${bg}; border: ${border}; color: #fff; font-weight: 800; font-size: 0.8rem; cursor: pointer;" title="#${item.number}: ${item.title}">
              ${item.number}${answered ? '✓' : ''}
            </button>
          `;
        }).join('')}
      </div>
    </div>

    <!-- Navigation Bar Soal -->
    <div class="challenge-nav-bar" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 18px; background: rgba(15, 23, 42, 0.65); padding: 10px 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 0.82rem; font-weight: 800; color: var(--accent-cyan);">Navigasi Soal:</span>
        <span style="font-size: 0.85rem; color: #fff; font-weight: 800;">Nomor ${q.number} dari ${questions.length}</span>
      </div>

      <div style="display: flex; align-items: center; gap: 8px; flex: 1; max-width: 660px; justify-content: flex-end;">
        <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem;" onclick="navIhsaniyahQuestion(-1)" ${appState.currentIhsIndex <= 0 ? 'disabled' : ''}>
          ◀ Sebelumnya
        </button>
        <select class="challenge-page-select" style="flex: 1; padding: 6px 10px; font-size: 0.82rem; border-radius: 8px; background: #0f172a; color: #fff; border: 1px solid var(--border-glow);" onchange="setIhsaniyahIndex(Number(this.value))">
          ${questions.map((item, idx) => {
            const ans = window.isIhsaniyahQuestionAnswered(item, appState.ihsUserAnswers[item.id]);
            return `
              <option value="${idx}" ${idx === appState.currentIhsIndex ? 'selected' : ''}>
                No. ${item.number} (${item.page}) — ${item.title} ${ans ? '[✓ Terisi]' : '[Belum Diisi]'}
              </option>
            `;
          }).join('')}
        </select>
        <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem;" onclick="navIhsaniyahQuestion(1)" ${appState.currentIhsIndex >= questions.length - 1 ? 'disabled' : ''}>
          Berikutnya ▶
        </button>
      </div>
    </div>

    <!-- Kotak Soal Aktif -->
    <div style="background: linear-gradient(145deg, rgba(15, 23, 42, 0.96), rgba(17, 24, 39, 0.99)); border: 1.5px solid rgba(56, 189, 248, 0.45); border-radius: 16px; padding: 22px; box-shadow: 0 4px 20px rgba(0,0,0,0.3); margin-bottom: 24px;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
          <span style="font-size: 0.78rem; font-weight: 800; background: rgba(56, 189, 248, 0.2); color: #38bdf8; padding: 4px 12px; border-radius: 20px; border: 1px solid rgba(56, 189, 248, 0.35);">
            ${q.badge}
          </span>
          <span style="font-size: 0.78rem; font-weight: 700; color: #fde68a; background: rgba(245, 158, 11, 0.15); padding: 4px 10px; border-radius: 20px;">
            📄 ${q.page}
          </span>
        </div>
        <span id="ihs-q-status-pill" style="font-size: 0.78rem; font-weight: 800; padding: 4px 12px; border-radius: 20px; background: ${isCurrentAnswered ? 'rgba(16, 185, 129, 0.2)' : 'rgba(148, 163, 184, 0.15)'}; color: ${isCurrentAnswered ? '#4ade80' : '#cbd5e1'};">
          ${isCurrentAnswered ? '✓ Jawaban Nomor Ini Sudah Terisi' : '⏳ Silakan Isi Jawaban di Bawah'}
        </span>
      </div>

      <h3 style="margin: 0 0 8px; font-size: 1.2rem; color: #fff;">${q.number}. ${q.title}</h3>
      <p style="margin: 0 0 14px; font-size: 0.95rem; color: #e2e8f0; line-height: 1.55; white-space: pre-line;">${q.instruction}</p>

      <!-- Visual Interaktif & Manipulatif Buatan Sendiri (100% Tanpa Gambar Crop PDF!) -->
      <div id="ihs-custom-visual-container">
        ${typeof window.renderIhsaniyahCustomVisual === 'function' ? window.renderIhsaniyahCustomVisual(q) : ''}
      </div>

      <!-- Area Input Jawaban Siswa Interaktif -->
      <div id="ihs-question-interactive-body" style="margin: 18px 0;">
        ${renderIhsaniyahInteractiveBody(q)}
      </div>

      <!-- Tombol Navigasi & Simpan Ujian (Tanpa Bocoran Pembahasan untuk Siswa) -->
      <div style="display: flex; justify-content: space-between; align-items: center; gap: 10px; flex-wrap: wrap; margin-top: 20px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.1);">
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <button class="btn-secondary" style="padding: 11px 18px; font-size: 0.88rem; font-weight: 700; border-radius: 8px;" onclick="navIhsaniyahQuestion(-1)" ${appState.currentIhsIndex <= 0 ? 'disabled' : ''}>
            ◀ Soal Sebelumnya
          </button>
          <button class="btn-primary" style="padding: 11px 22px; font-size: 0.92rem; font-weight: 800; background: linear-gradient(135deg, #0284c7, #2563eb); border: none; border-radius: 8px;" onclick="saveAndNextIhsaniyahQuestion()">
            💾 Simpan Jawaban & Soal Berikutnya ▶
          </button>
        </div>

        <button class="btn-primary" style="padding: 11px 22px; font-size: 0.92rem; font-weight: 800; background: linear-gradient(135deg, #059669, #10b981); border: none; border-radius: 8px;" onclick="finishIhsaniyahExamHandler()">
          ✅ Kumpulkan & Selesaikan Ujian (${stats.answeredCount}/${questions.length})
        </button>
      </div>

      <div id="ihs-save-toast" style="display: none; margin-top: 12px; padding: 10px 14px; border-radius: 8px; background: rgba(16, 185, 129, 0.2); border: 1px solid #10b981; color: #86efac; font-size: 0.85rem; font-weight: 700;"></div>
    </div>
  `;
}

// Render Identity Gate (Form Siswa Sebelum Masuk)
function renderIhsaniyahStudentGate(container) {
  container.innerHTML = `
    <div style="max-width: 600px; margin: 30px auto; background: linear-gradient(145deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.98)); border: 2px solid #38bdf8; border-radius: 20px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.4); text-align: center;">
      <div style="display: flex; justify-content: center; gap: 14px; margin-bottom: 12px;">
        <img src="assets/illustrations/3d_tiles/tile_3d_26.png" style="width: 76px; height: 76px; border-radius: 14px; object-fit: cover; border: 2.5px solid #38bdf8; box-shadow: 0 4px 15px rgba(56, 189, 248, 0.25);" alt="Siswa Ujian SD Ihsaniyah">
        <img src="assets/illustrations/3d_tiles/tile_3d_25.png" style="width: 76px; height: 76px; border-radius: 14px; object-fit: cover; border: 2.5px solid #10b981; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.25);" alt="Peralatan Ujian Matematika">
      </div>
      <div style="font-size: 0.85rem; font-weight: 800; text-transform: uppercase; color: #38bdf8; letter-spacing: 0.8px;">
        YAYASAN PERGURUAN IHSANIYAH
      </div>
      <h2 style="margin: 4px 0 6px; color: #fff; font-size: 1.5rem;">
        SD IHSANIYAH GAJAHMADA TEGAL
      </h2>
      <div style="font-size: 0.9rem; color: #cbd5e1; margin-bottom: 20px;">
        Kampus Al Hafidz • Math Formative Test 2 & Division (27 Soal Lengkap)
      </div>

      <div style="background: rgba(0,0,0,0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; text-align: left; border: 1px solid rgba(255,255,255,0.08);">
        <p style="margin: 0 0 16px; font-size: 0.88rem; color: #e2e8f0; line-height: 1.5;">
          Selamat datang! Sebelum mengerjakan soal ujian, silakan isi Nama Lengkap, Kelas, dan Nomor Absenmu. Data pengerjaanmu akan otomatis tercatat di Panel Guru:
        </p>

        <div style="margin-bottom: 14px;">
          <label style="display: block; font-size: 0.82rem; font-weight: 700; color: #38bdf8; margin-bottom: 6px;">Nama Lengkap Siswa:</label>
          <input type="text" id="ihs-input-name" placeholder="Contoh: Muhammad Farhan" style="width: 100%; padding: 12px; font-size: 0.95rem; border-radius: 8px; border: 1.5px solid #cbd5e1; background: #0f172a; color: #fff; box-sizing: border-box;">
        </div>

        <div style="display: flex; gap: 12px; margin-bottom: 14px;">
          <div style="flex: 1;">
            <label style="display: block; font-size: 0.82rem; font-weight: 700; color: #38bdf8; margin-bottom: 6px;">Kelas:</label>
            <select id="ihs-input-class" style="width: 100%; padding: 12px; font-size: 0.95rem; border-radius: 8px; border: 1.5px solid #cbd5e1; background: #0f172a; color: #fff; box-sizing: border-box;">
              <option value="Kelas 2A">Kelas 2A</option>
              <option value="Kelas 2B">Kelas 2B</option>
              <option value="Kelas 2C">Kelas 2C</option>
              <option value="Kelas 3A">Kelas 3A</option>
              <option value="Kelas 3B">Kelas 3B</option>
              <option value="Kelas 3C">Kelas 3C</option>
            </select>
          </div>
          <div style="width: 120px;">
            <label style="display: block; font-size: 0.82rem; font-weight: 700; color: #38bdf8; margin-bottom: 6px;">No Absen:</label>
            <input type="number" id="ihs-input-number" min="1" max="50" placeholder="1" style="width: 100%; padding: 12px; font-size: 0.95rem; border-radius: 8px; border: 1.5px solid #cbd5e1; background: #0f172a; color: #fff; box-sizing: border-box;">
          </div>
        </div>

        <div id="ihs-gate-error" style="display: none; color: #f87171; font-size: 0.82rem; font-weight: 700; margin-top: 8px;"></div>
      </div>

      <button class="btn-primary" style="width: 100%; padding: 14px; font-size: 1.05rem; font-weight: 800; background: linear-gradient(135deg, #059669, #10b981); border: none; border-radius: 10px; box-shadow: 0 4px 16px rgba(16, 185, 129, 0.4);" onclick="handleStudentGateSubmit()">
        🚀 Masuk & Mulai Mengerjakan Ujian (27 Soal)
      </button>

      <div style="margin-top: 16px;">
        <button class="btn-secondary teacher-panel-gate-btn" style="padding: 10px 18px; font-size: 0.88rem; font-weight: 700; border-radius: 8px; cursor: pointer;" onclick="openIhsaniyahAdminPanel()">
          👩‍🏫 Panel Guru: Lihat Rekap Nilai Siswa & Unduh CSV
        </button>
      </div>
    </div>
  `;
}

window.handleStudentGateSubmit = function() {
  const nameEl = document.getElementById("ihs-input-name");
  const classEl = document.getElementById("ihs-input-class");
  const numEl = document.getElementById("ihs-input-number");
  const errEl = document.getElementById("ihs-gate-error");

  const name = nameEl ? nameEl.value.trim() : "";
  const className = classEl ? classEl.value : "Kelas 2A";
  const number = numEl ? numEl.value.trim() : "";

  if (!name || !number) {
    if (errEl) {
      errEl.style.display = "block";
      errEl.textContent = "⚠️ Mohon lengkapi Nama Siswa dan Nomor Absen ya!";
    }
    if (window.sfx && sfx.playWrong) sfx.playWrong();
    return;
  }

  const sessionId = `${name.toLowerCase()}_${className}_${number}`;
  const student = { name, className, number, sessionId, startTime: new Date().toISOString() };
  window.setIhsaniyahStudent(student);
  appState.ihsUserAnswers = window.getIhsaniyahStudentAnswersStore() || {};
  appState.currentIhsIndex = 0;

  // Langsung daftarkan siswa ke Rekap Panel Guru
  syncIhsaniyahProgressToRecords(false);

  if (window.sfx && sfx.playSuccess) sfx.playSuccess();
  renderIhsaniyahTest();
};

window.logoutIhsaniyahStudentHandler = function() {
  if (confirm("Simpan progres saat ini dan keluar / ganti siswa?")) {
    syncIhsaniyahProgressToRecords(false);
    window.logoutIhsaniyahStudent();
    appState.ihsUserAnswers = {};
    appState.currentIhsIndex = 0;
    renderIhsaniyahTest();
  }
};

// Render Interaktif berdasarkan Tipe Soal Sesuai Buku / Lembar Ujian
function renderIhsaniyahInteractiveBody(q) {
  const currentAnswer = appState.ihsUserAnswers[q.id] || {};

  // 1. MULTI SELECT CHECKBOXES (No. 1 & No. 2)
  if (q.type === "multi_select") {
    const selectedKeys = currentAnswer.selected || [];
    return `
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <div style="font-size: 0.84rem; font-weight: 700; color: #38bdf8;">
          ☑️ Centang satu atau lebih kotak jawaban yang benar (A, B, atau C):
        </div>
        ${q.options.map(opt => `
          <label style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 10px; background: rgba(30, 41, 59, 0.85); border: 1.5px solid ${selectedKeys.includes(opt.key) ? '#38bdf8' : 'rgba(255,255,255,0.12)'}; cursor: pointer; transition: all 0.2s;" class="choice-card-btn">
            <input type="checkbox" name="ihs_chk_${q.id}" value="${opt.key}" ${selectedKeys.includes(opt.key) ? 'checked' : ''} onchange="saveIhsMultiSelect('${q.id}')" style="width: 20px; height: 20px; accent-color: #38bdf8;">
            <span style="font-size: 1rem; font-weight: 700; color: #fff;">${opt.text}</span>
          </label>
        `).join('')}
      </div>
    `;
  }

  // 2. TRUE / FALSE TABLE (No. 3 & No. 4)
  if (q.type === "true_false_table") {
    const responses = currentAnswer.responses || {};
    return `
      <div style="background: rgba(0,0,0,0.3); border-radius: 12px; padding: 14px; border: 1.5px solid rgba(56, 189, 248, 0.3);">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
          <thead>
            <tr style="border-bottom: 2px solid rgba(255,255,255,0.2); color: #38bdf8; text-align: left;">
              <th style="padding: 10px 8px;">Statements</th>
              <th style="padding: 10px 8px; text-align: center; width: 95px;">True (✓)</th>
              <th style="padding: 10px 8px; text-align: center; width: 95px;">False (✓)</th>
            </tr>
          </thead>
          <tbody>
            ${q.statements.map(st => `
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
                <td style="padding: 12px 8px; color: #fff; font-weight: 700;">${st.text}</td>
                <td style="padding: 12px 8px; text-align: center;">
                  <input type="radio" name="tf_${q.id}_${st.id}" value="true" ${responses[st.id] === true ? 'checked' : ''} onchange="saveIhsTrueFalse('${q.id}', '${st.id}', true)" style="width: 20px; height: 20px; accent-color: #10b981; cursor: pointer;">
                </td>
                <td style="padding: 12px 8px; text-align: center;">
                  <input type="radio" name="tf_${q.id}_${st.id}" value="false" ${responses[st.id] === false ? 'checked' : ''} onchange="saveIhsTrueFalse('${q.id}', '${st.id}', false)" style="width: 20px; height: 20px; accent-color: #ef4444; cursor: pointer;">
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // 3. MULTI BOX FILL (No. 5 - No. 10)
  if (q.type === "multi_box_fill") {
    const boxesVal = currentAnswer.boxes || {};
    return `
      <div style="background: rgba(15, 23, 42, 0.85); border: 1.5px solid rgba(56, 189, 248, 0.35); border-radius: 12px; padding: 16px;">
        <div style="font-size: 0.85rem; font-weight: 800; color: #38bdf8; margin-bottom: 12px;">
          ✏️ Isi kotak-kotak jawaban berdasarkan diagram visual di atas:
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 14px;">
          ${q.boxes.map(b => `
            <div style="background: rgba(0,0,0,0.35); padding: 12px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.12);">
              <label style="display: block; font-size: 0.84rem; font-weight: 700; color: #e2e8f0; margin-bottom: 8px;">
                ${b.label}
              </label>
              <input type="text" value="${String(boxesVal[b.id] || '').replace(/"/g, '&quot;')}" placeholder="${b.placeholder || '...'}" oninput="saveIhsMultiBox('${q.id}', '${b.id}', this.value)" style="width: 100%; padding: 10px 12px; font-size: 1.1rem; font-weight: 800; font-family: monospace; text-align: center; border-radius: 8px; border: 2px solid #38bdf8; background: #0f172a; color: #4ade80; box-sizing: border-box;">
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // 4. DIVISION SENTENCE BOXES (No. 11 - No. 20: [ ] ÷ [ ] = [ ] & There are [ ] ...)
  if (q.type === "division_sentence") {
    const divVal = currentAnswer.div || {};
    return `
      <div style="background: rgba(15, 23, 42, 0.9); border: 2px solid #10b981; border-radius: 14px; padding: 18px;">
        <div style="font-size: 0.85rem; font-weight: 800; color: #86efac; margin-bottom: 14px;">
          ✏️ Lengkapi kotak kalimat pembagian (Division Sentence) berdasarkan visual di atas:
        </div>

        <!-- Baris 1: [ ] ÷ [ ] = [ ] -->
        <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 16px; background: rgba(0,0,0,0.3); padding: 14px; border-radius: 12px;">
          <input type="number" value="${divVal.a || ''}" placeholder="?" oninput="saveIhsDivisionSentence('${q.id}', 'a', this.value)" style="width: 78px; height: 52px; font-size: 1.35rem; font-weight: 900; text-align: center; border-radius: 10px; border: 2.5px solid #4ade80; background: #0f172a; color: #fff;">
          <span style="font-size: 1.6rem; font-weight: 900; color: #38bdf8;">÷</span>
          <input type="number" value="${divVal.b || ''}" placeholder="?" oninput="saveIhsDivisionSentence('${q.id}', 'b', this.value)" style="width: 78px; height: 52px; font-size: 1.35rem; font-weight: 900; text-align: center; border-radius: 10px; border: 2.5px solid #4ade80; background: #0f172a; color: #fff;">
          <span style="font-size: 1.6rem; font-weight: 900; color: #38bdf8;">=</span>
          <input type="number" value="${divVal.res || ''}" placeholder="?" oninput="saveIhsDivisionSentence('${q.id}', 'res', this.value)" style="width: 78px; height: 52px; font-size: 1.35rem; font-weight: 900; text-align: center; border-radius: 10px; border: 2.5px solid #fbbf24; background: #0f172a; color: #fbbf24;">
        </div>

        <!-- Baris 2: There are [ ] ... -->
        <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap; font-size: 1.08rem; font-weight: 800; color: #fff; background: rgba(0,0,0,0.3); padding: 14px; border-radius: 12px;">
          ${q.statementPrefix ? `<span>${q.statementPrefix}</span>` : ''}
          <input type="number" value="${divVal.stmt || ''}" placeholder="?" oninput="saveIhsDivisionSentence('${q.id}', 'stmt', this.value)" style="width: 78px; height: 48px; font-size: 1.25rem; font-weight: 900; text-align: center; border-radius: 10px; border: 2.5px solid #38bdf8; background: #0f172a; color: #4ade80;">
          <span>${q.statementSuffix}</span>
        </div>
      </div>
    `;
  }

  // 5. FULL MAKING DIVISION STORIES (No. 21 - No. 25: Book Pages 59 & 60)
  if (q.type === "division_story_full") {
    const st = currentAnswer.story || {};
    return `
      <div style="background: rgba(15, 23, 42, 0.9); border: 2px solid #38bdf8; border-radius: 14px; padding: 18px; display: flex; flex-direction: column; gap: 12px;">
        <div style="font-size: 0.85rem; font-weight: 800; color: #38bdf8;">
          ✏️ Lengkapi ke-4 baris cerita pembagian (Making Division Stories) berdasarkan diorama visual di atas:
        </div>

        <!-- Line 1 -->
        <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap; font-size: 1.02rem; font-weight: 700; color: #fff; background: rgba(0,0,0,0.3); padding: 10px 14px; border-radius: 10px;">
          <span>${q.line1Prefix}</span>
          <input type="number" value="${st.l1 || ''}" placeholder="?" oninput="saveIhsStoryFull('${q.id}', 'l1', this.value)" style="width: 74px; height: 44px; font-size: 1.2rem; font-weight: 900; text-align: center; border-radius: 8px; border: 2px solid #4ade80; background: #0f172a; color: #fff;">
          <span>${q.line1Suffix}</span>
        </div>

        <!-- Line 2 -->
        <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap; font-size: 1.02rem; font-weight: 700; color: #fff; background: rgba(0,0,0,0.3); padding: 10px 14px; border-radius: 10px;">
          <span>${q.line2Prefix}</span>
          <input type="number" value="${st.l2 || ''}" placeholder="?" oninput="saveIhsStoryFull('${q.id}', 'l2', this.value)" style="width: 74px; height: 44px; font-size: 1.2rem; font-weight: 900; text-align: center; border-radius: 8px; border: 2px solid #4ade80; background: #0f172a; color: #fff;">
          <span>${q.line2Suffix}</span>
        </div>

        <!-- Division Equation [ ] ÷ [ ] = [ ] -->
        <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap; background: rgba(0,0,0,0.35); padding: 12px 14px; border-radius: 10px;">
          <input type="number" value="${st.da || ''}" placeholder="?" oninput="saveIhsStoryFull('${q.id}', 'da', this.value)" style="width: 74px; height: 48px; font-size: 1.25rem; font-weight: 900; text-align: center; border-radius: 8px; border: 2px solid #38bdf8; background: #0f172a; color: #fff;">
          <span style="font-size: 1.5rem; font-weight: 900; color: #38bdf8;">÷</span>
          <input type="number" value="${st.db || ''}" placeholder="?" oninput="saveIhsStoryFull('${q.id}', 'db', this.value)" style="width: 74px; height: 48px; font-size: 1.25rem; font-weight: 900; text-align: center; border-radius: 8px; border: 2px solid #38bdf8; background: #0f172a; color: #fff;">
          <span style="font-size: 1.5rem; font-weight: 900; color: #38bdf8;">=</span>
          <input type="number" value="${st.dr || ''}" placeholder="?" oninput="saveIhsStoryFull('${q.id}', 'dr', this.value)" style="width: 74px; height: 48px; font-size: 1.25rem; font-weight: 900; text-align: center; border-radius: 8px; border: 2px solid #fbbf24; background: #0f172a; color: #fbbf24;">
        </div>

        <!-- Line 3 -->
        <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap; font-size: 1.02rem; font-weight: 700; color: #fff; background: rgba(0,0,0,0.3); padding: 10px 14px; border-radius: 10px;">
          <span>${q.line3Prefix}</span>
          <input type="number" value="${st.l3 || ''}" placeholder="?" oninput="saveIhsStoryFull('${q.id}', 'l3', this.value)" style="width: 74px; height: 44px; font-size: 1.2rem; font-weight: 900; text-align: center; border-radius: 8px; border: 2px solid #4ade80; background: #0f172a; color: #4ade80;">
          <span>${q.line3Suffix}</span>
        </div>
      </div>
    `;
  }

  // 6. MATCHING GAME: CUSTOM SVG T-SHIRTS TO CLOTHES HANGERS (No. 26: Book Page 62)
  if (q.type === "matching_game") {
    const matched = currentAnswer.matchedPairs || {};
    const matchedCount = Object.keys(matched).length;
    const rightIds = q.shuffledRight || ["h1", "h2", "h3", "h4", "h5"];
    const rightCards = rightIds.map(hId => q.pairs.find(p => p.rightId === hId)).filter(Boolean);

    setTimeout(() => {
      window.drawAllMatchingLines && window.drawAllMatchingLines(q, matched);
    }, 60);

    return `
      <div style="margin: 10px 0;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
          <span style="font-size: 0.88rem; color: #38bdf8; font-weight: 700;">
            👕 Klik Baju Kaos warna-warni di kiri, lalu klik Gantungan Baju (Hanger) pasangannya di kanan untuk menarik tali jemuran!
          </span>
          <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 0.85rem; font-weight: 800; color: #4ade80;">
              Tali Terhubung: ${matchedCount} / ${q.pairs.length}
            </span>
            <button class="btn-secondary" style="padding: 5px 12px; font-size: 0.78rem;" onclick="resetIhsMatchingLines('${q.id}')">
              🔄 Hapus / Ulangi Garis
            </button>
          </div>
        </div>

        <div class="matching-canvas-wrapper" id="matching-canvas-wrapper">
          <svg id="matching-svg-canvas" class="matching-svg-canvas"></svg>

          <div class="matching-game-container">
            <div class="matching-col left-col">
              ${q.pairs.map(p => {
                const isCardMatched = !!matched[p.leftId];
                const isCardSelected = (appState.matchingSelectedShirt === p.leftId);
                const sCol = p.shirtColor || p.color || "#0284c7";
                return `
                  <div id="card-left-${p.leftId}" class="matching-card ${isCardMatched ? 'matched' : ''} ${isCardSelected ? 'selected' : ''}" onclick="selectIhsShirt('${p.leftId}')" style="display: flex; align-items: center; gap: 12px; border-color: ${p.color};">
                    <svg width="46" height="42" viewBox="0 0 64 56" style="flex-shrink: 0; filter: drop-shadow(0 3px 6px rgba(0,0,0,0.35));">
                      <path d="M16 6 L24 6 C26 12 38 12 40 6 L48 6 L60 18 L52 28 L46 22 L46 52 L18 52 L18 22 L12 28 L4 18 Z" fill="${sCol}" stroke="#ffffff" stroke-width="2.5" stroke-linejoin="round"/>
                    </svg>
                    <span style="font-size: 1.12rem; font-weight: 900; color: #fff; font-family: monospace;">${p.leftText}</span>
                    <span class="matching-pin pin-right" id="pin-left-${p.leftId}"></span>
                  </div>
                `;
              }).join('')}
            </div>

            <div class="matching-col right-col">
              ${rightCards.map(p => {
                const matchedShirt = Object.keys(matched).find(k => matched[k] === p.rightId);
                const isHangerMatched = !!matchedShirt;
                return `
                  <div id="card-right-${p.rightId}" class="matching-card ${isHangerMatched ? 'matched' : ''}" onclick="connectIhsHanger('${p.rightId}')" style="display: flex; align-items: center; gap: 12px;">
                    <span class="matching-pin pin-left" id="pin-right-${p.rightId}"></span>
                    <svg width="48" height="38" viewBox="0 0 68 48" style="flex-shrink: 0; filter: drop-shadow(0 3px 6px rgba(0,0,0,0.35));">
                      <path d="M34 16 C34 9 42 7 42 12 C42 15 34 17 34 21" fill="none" stroke="#fde047" stroke-width="3.5" stroke-linecap="round"/>
                      <path d="M8 40 L34 21 L60 40 Z" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" stroke-width="3.5" stroke-linejoin="round"/>
                    </svg>
                    <span style="font-size: 1.12rem; font-weight: 900; color: #fff; font-family: monospace;">${p.rightText}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // 7. PAGE 75: INTERACTIVE 1 TO 100 NUMBER EXPLORER BOARD & 3 SUB-QUESTIONS (No. 27)
  if (q.type === "grid_100_page75") {
    const subAns = currentAnswer.subAnswers || {};
    const vSt = window.ihsVisualState || { grid100Tool: 'circle2', grid100Marks: {} };
    const activeTool = vSt.grid100Tool || 'circle2';
    const marks = vSt.grid100Marks || {};

    let gridCellsHtml = '';
    for (let n = 1; n <= 100; n++) {
      const m = marks[n] || { c2: false, b5: false, t10: false };
      const bgCol = m.b5 ? 'linear-gradient(135deg, #0284c7, #2563eb)' : 'rgba(30, 41, 59, 0.9)';
      const borderStyle = m.c2 ? '3px solid #f43f5e' : '1px solid rgba(148, 163, 184, 0.28)';
      const radiusStyle = m.c2 ? '999px' : '8px';
      const glowStyle = (m.c2 && m.b5 && m.t10) ? '0 0 12px rgba(250, 204, 21, 0.75)' : 'none';

      gridCellsHtml += `
        <div onclick="ihsClickGrid100Cell(${n})"
             title="Klik untuk menandai angka ${n}"
             style="position: relative; height: 42px; display: flex; align-items: center; justify-content: center; cursor: pointer; font-family: monospace; font-size: 0.95rem; font-weight: 900; color: #ffffff; background: ${bgCol}; border: ${borderStyle}; border-radius: ${radiusStyle}; box-shadow: ${glowStyle}; user-select: none; transition: all 0.15s;">
          <span>${n}</span>
          ${m.t10 ? `<span style="position: absolute; top: -4px; right: -2px; font-size: 0.72rem; background: #10b981; color: #0f172a; border-radius: 999px; padding: 0 4px; font-weight: 900;">✓</span>` : ''}
        </div>
      `;
    }

    return `
      <div style="display: flex; flex-direction: column; gap: 18px;">
        <!-- Papan Eksplorasi Angka 1 - 100 Interaktif Buatan Sendiri -->
        <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.96), rgba(30, 41, 59, 0.96)); border: 2px solid #38bdf8; border-radius: 16px; padding: 18px;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 12px;">
            <div>
              <div style="font-size: 0.92rem; font-weight: 800; color: #38bdf8;">
                🔢 Papan Interaktif Tabel Angka 1 sampai 100
              </div>
              <div style="font-size: 0.78rem; color: #cbd5e1;">
                Pilih alat kuas di bawah, lalu klik angka-angka pada tabel sesuai instruksi soal.
              </div>
            </div>
            <div style="display: flex; gap: 6px; flex-wrap: wrap;">
              <button type="button" onclick="ihsAutoMarkGrid100('reset')" style="background: rgba(239, 68, 68, 0.2); color: #fca5a5; border: 1px solid #ef4444; border-radius: 8px; padding: 7px 12px; font-size: 0.76rem; font-weight: 800; cursor: pointer;">
                🔄 Bersihkan Tanda di Tabel
              </button>
            </div>
          </div>

          <!-- Baris Pilihan Kuas Interaktif -->
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 14px;">
            <button type="button" onclick="ihsSetGrid100Tool('circle2')" style="padding: 8px 14px; border-radius: 10px; font-size: 0.8rem; font-weight: 800; cursor: pointer; border: ${activeTool === 'circle2' ? '2.5px solid #f43f5e' : '1px solid rgba(255,255,255,0.15)'}; background: ${activeTool === 'circle2' ? 'rgba(244, 63, 94, 0.25)' : 'rgba(0,0,0,0.3)'}; color: #fff;">
              ⭕ Kuas 1: Circle (Lingkari)
            </button>
            <button type="button" onclick="ihsSetGrid100Tool('blue5')" style="padding: 8px 14px; border-radius: 10px; font-size: 0.8rem; font-weight: 800; cursor: pointer; border: ${activeTool === 'blue5' ? '2.5px solid #38bdf8' : '1px solid rgba(255,255,255,0.15)'}; background: ${activeTool === 'blue5' ? 'rgba(56, 189, 248, 0.25)' : 'rgba(0,0,0,0.3)'}; color: #fff;">
              🟦 Kuas 2: Colour Blue (Warnai Biru)
            </button>
            <button type="button" onclick="ihsSetGrid100Tool('tick10')" style="padding: 8px 14px; border-radius: 10px; font-size: 0.8rem; font-weight: 800; cursor: pointer; border: ${activeTool === 'tick10' ? '2.5px solid #10b981' : '1px solid rgba(255,255,255,0.15)'}; background: ${activeTool === 'tick10' ? 'rgba(16, 185, 129, 0.25)' : 'rgba(0,0,0,0.3)'}; color: #fff;">
              ✅ Kuas 3: Tick ✓ (Beri Centang)
            </button>
          </div>

          <!-- Grid 10x10 Angka 1 s/d 100 -->
          <div style="display: grid; grid-template-columns: repeat(10, 1fr); gap: 6px; padding: 12px; background: rgba(2, 6, 23, 0.75); border-radius: 14px; border: 1px solid rgba(56, 189, 248, 0.25);">
            ${gridCellsHtml}
          </div>
        </div>

        <!-- 3 Pertanyaan Kesimpulan di Bawah Papan 1-100 -->
        <div style="background: rgba(15, 23, 42, 0.9); border: 2px solid #10b981; border-radius: 14px; padding: 18px;">
          <div style="font-size: 0.88rem; font-weight: 800; color: #4ade80; margin-bottom: 12px;">
            ✏️ Jawab ke-3 pertanyaan di bawah berdasarkan hasil eksplorasimu di Papan 1–100 (Tuliskan angka-angkanya dipisahkan koma):
          </div>
          <div style="display: flex; flex-direction: column; gap: 14px;">
            ${q.subPrompts.map(sp => `
              <div style="background: rgba(0,0,0,0.35); padding: 14px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.12);">
                <label style="display: block; font-size: 0.92rem; font-weight: 700; color: #fff; margin-bottom: 8px;">
                  ${sp.label}
                </label>
                <input type="text" value="${String(subAns[sp.id] || '').replace(/"/g, '&quot;')}" placeholder="${sp.placeholder}" oninput="saveIhsPage75Sub('${q.id}', '${sp.id}', this.value)" style="width: 100%; padding: 12px; font-size: 1rem; font-weight: 800; font-family: monospace; border-radius: 8px; border: 2px solid #4ade80; background: #0f172a; color: #4ade80; box-sizing: border-box;">
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  return '';
}

// ==============================================================================
// HANDLERS PENYIMPANAN JAWABAN SISWA + AUTO-SYNC KE PANEL GURU
// ==============================================================================
window.saveIhsMultiSelect = function(qid) {
  const checkboxes = document.querySelectorAll(`input[name="ihs_chk_${qid}"]:checked`);
  const selected = Array.from(checkboxes).map(c => c.value);
  appState.ihsUserAnswers[qid] = appState.ihsUserAnswers[qid] || {};
  appState.ihsUserAnswers[qid].selected = selected;
  syncIhsaniyahProgressToRecords(true);
};

window.saveIhsTrueFalse = function(qid, stId, val) {
  appState.ihsUserAnswers[qid] = appState.ihsUserAnswers[qid] || {};
  appState.ihsUserAnswers[qid].responses = appState.ihsUserAnswers[qid].responses || {};
  appState.ihsUserAnswers[qid].responses[stId] = val;
  syncIhsaniyahProgressToRecords(true);
};

window.saveIhsMultiBox = function(qid, boxId, val) {
  appState.ihsUserAnswers[qid] = appState.ihsUserAnswers[qid] || {};
  appState.ihsUserAnswers[qid].boxes = appState.ihsUserAnswers[qid].boxes || {};
  appState.ihsUserAnswers[qid].boxes[boxId] = val;
  syncIhsaniyahProgressToRecords(true);
  const visContainer = document.getElementById("ihs-custom-visual-container");
  const curQ = window.IHSANIYAH_QUESTIONS && window.IHSANIYAH_QUESTIONS[appState.currentIhsIndex];
  if (visContainer && curQ && curQ.id === qid && typeof window.renderIhsaniyahCustomVisual === "function") {
    visContainer.innerHTML = window.renderIhsaniyahCustomVisual(curQ);
  }
};

window.saveIhsDivisionSentence = function(qid, field, val) {
  appState.ihsUserAnswers[qid] = appState.ihsUserAnswers[qid] || {};
  appState.ihsUserAnswers[qid].div = appState.ihsUserAnswers[qid].div || {};
  appState.ihsUserAnswers[qid].div[field] = val;
  syncIhsaniyahProgressToRecords(true);
};

window.saveIhsStoryFull = function(qid, field, val) {
  appState.ihsUserAnswers[qid] = appState.ihsUserAnswers[qid] || {};
  appState.ihsUserAnswers[qid].story = appState.ihsUserAnswers[qid].story || {};
  appState.ihsUserAnswers[qid].story[field] = val;
  syncIhsaniyahProgressToRecords(true);
};

window.saveIhsPage75Sub = function(qid, subId, val) {
  appState.ihsUserAnswers[qid] = appState.ihsUserAnswers[qid] || {};
  appState.ihsUserAnswers[qid].subAnswers = appState.ihsUserAnswers[qid].subAnswers || {};
  appState.ihsUserAnswers[qid].subAnswers[subId] = val;
  syncIhsaniyahProgressToRecords(true);
};

// Handlers Matching Game (Bebas menghubungkan kaos mana saja ke gantungan mana saja)
window.selectIhsShirt = function(shirtId) {
  appState.matchingSelectedShirt = shirtId;
  if (window.sfx && sfx.playClick) sfx.playClick();
  renderIhsaniyahTest();
};

window.connectIhsHanger = function(hangerId) {
  const q = window.IHSANIYAH_QUESTIONS[appState.currentIhsIndex];
  if (!appState.matchingSelectedShirt) {
    alert("Klik salah satu KAOS di sebelah kiri terlebih dahulu, lalu klik Gantungan Baju di sebelah kanan!");
    return;
  }

  const shirtId = appState.matchingSelectedShirt;
  appState.ihsUserAnswers[q.id] = appState.ihsUserAnswers[q.id] || {};
  appState.ihsUserAnswers[q.id].matchedPairs = appState.ihsUserAnswers[q.id].matchedPairs || {};

  // Hapus jika gantungan ini sebelumnya terhubung ke kaos lain
  Object.keys(appState.ihsUserAnswers[q.id].matchedPairs).forEach(k => {
    if (appState.ihsUserAnswers[q.id].matchedPairs[k] === hangerId) {
      delete appState.ihsUserAnswers[q.id].matchedPairs[k];
    }
  });

  appState.ihsUserAnswers[q.id].matchedPairs[shirtId] = hangerId;
  appState.matchingSelectedShirt = null;
  if (window.sfx && sfx.playClick) sfx.playClick();
  syncIhsaniyahProgressToRecords(false);
  renderIhsaniyahTest();
};

// Navigasi Soal
window.setIhsaniyahIndex = function(idx) {
  syncIhsaniyahProgressToRecords(false);
  appState.currentIhsIndex = idx;
  renderIhsaniyahTest();
};

window.navIhsaniyahQuestion = function(delta) {
  syncIhsaniyahProgressToRecords(false);
  const questions = window.IHSANIYAH_QUESTIONS || [];
  const nextIdx = appState.currentIhsIndex + delta;
  if (nextIdx >= 0 && nextIdx < questions.length) {
    appState.currentIhsIndex = nextIdx;
    renderIhsaniyahTest();
  }
};

window.saveAndNextIhsaniyahQuestion = function() {
  syncIhsaniyahProgressToRecords(false);
  if (window.sfx && sfx.playSuccess) sfx.playSuccess();
  const questions = window.IHSANIYAH_QUESTIONS || [];
  if (appState.currentIhsIndex < questions.length - 1) {
    appState.currentIhsIndex += 1;
    renderIhsaniyahTest();
  } else {
    const toast = document.getElementById("ihs-save-toast");
    if (toast) {
      toast.style.display = "block";
      toast.textContent = "✅ Jawaban berhasil disimpan ke Panel Guru! Kamu berada di nomor terakhir, silakan klik 'Kumpulkan & Selesaikan Ujian'.";
    }
  }
};

window.finishIhsaniyahExamHandler = function() {
  syncIhsaniyahProgressToRecords(false);
  const stats = getIhsaniyahLiveStats();
  const student = window.getIhsaniyahStudent();
  if (!student) return;

  // Tandai status selesai dikumpulkan
  const record = {
    sessionId: student.sessionId || `${student.name.toLowerCase()}_${student.className}_${student.number}`,
    date: new Date().toLocaleDateString('id-ID'),
    time: new Date().toLocaleTimeString('id-ID'),
    studentName: student.name,
    studentClass: student.className,
    studentNumber: student.number,
    answeredCount: stats.answeredCount,
    correctCount: stats.correctCount,
    totalQuestions: stats.totalQuestions,
    score: stats.score,
    status: stats.score >= 70 ? "Selesai & Tuntas" : "Selesai (Perlu Bimbingan)"
  };
  window.upsertIhsaniyahRecord(record);
  if (window.sfx && sfx.playVictory) sfx.playVictory();

  alert(`🎉 Alhamdulillah! Jawaban ujian atas nama ${student.name} (${student.className} / Absen #${student.number}) telah berhasil dikumpulkan ke Panel Guru!\n\n• Soal Terjawab: ${stats.answeredCount} dari ${stats.totalQuestions} Soal\n• Status: Tersimpan di Rekap Nilai Guru`);
  renderIhsaniyahTest();
};

function getIhsaniyahLiveStats() {
  const questions = window.IHSANIYAH_QUESTIONS || [];
  const answers = appState.ihsUserAnswers || {};
  let answeredCount = 0;
  let correctCount = 0;

  questions.forEach(q => {
    const ans = answers[q.id];
    if (window.isIhsaniyahQuestionAnswered(q, ans)) {
      answeredCount++;
    }
    if (window.evaluateIhsaniyahQuestion(q, ans)) {
      correctCount++;
    }
  });

  const totalQuestions = questions.length || 27;
  const score = Math.round((correctCount / totalQuestions) * 100);
  return { answeredCount, correctCount, totalQuestions, score };
}

function syncIhsaniyahProgressToRecords(updateBadgesOnly) {
  const student = window.getIhsaniyahStudent();
  if (!student) return;

  window.saveIhsaniyahStudentAnswersStore(appState.ihsUserAnswers || {});
  const stats = getIhsaniyahLiveStats();

  let statusText = "Sedang Mengerjakan (" + stats.answeredCount + "/" + stats.totalQuestions + ")";
  if (stats.answeredCount === stats.totalQuestions) {
    statusText = stats.score >= 70 ? "Tuntas / Lulus" : "Perlu Bimbingan";
  }

  const record = {
    sessionId: student.sessionId || `${student.name.toLowerCase()}_${student.className}_${student.number}`,
    date: new Date().toLocaleDateString('id-ID'),
    time: new Date().toLocaleTimeString('id-ID'),
    studentName: student.name,
    studentClass: student.className,
    studentNumber: student.number,
    answeredCount: stats.answeredCount,
    correctCount: stats.correctCount,
    totalQuestions: stats.totalQuestions,
    score: stats.score,
    status: statusText
  };

  window.upsertIhsaniyahRecord(record);

  if (updateBadgesOnly) {
    const badgeEl = document.getElementById("ihs-live-answered-badge");
    if (badgeEl) badgeEl.textContent = `${stats.answeredCount} / ${stats.totalQuestions} Soal`;
    const q = window.IHSANIYAH_QUESTIONS[appState.currentIhsIndex];
    const pillEl = document.getElementById("ihs-q-status-pill");
    if (q && pillEl) {
      const ansNow = window.isIhsaniyahQuestionAnswered(q, appState.ihsUserAnswers[q.id]);
      pillEl.textContent = ansNow ? "✓ Jawaban Nomor Ini Sudah Terisi" : "⏳ Silakan Isi Jawaban di Bawah";
      pillEl.style.background = ansNow ? "rgba(16, 185, 129, 0.2)" : "rgba(148, 163, 184, 0.15)";
      pillEl.style.color = ansNow ? "#4ade80" : "#cbd5e1";
    }
  }
}

// ================= MASTER ADMIN PANEL TERPADU (UNTUK SEMUA MODUL APLIKASI) =================
appState.adminSubTab = "all_modules";
appState.adminClassFilter = "all";
appState.adminSearchQuery = "";
appState.adminKeyModuleFilter = "ihsaniyah";
appState.adminKeySearchQuery = "";
appState.adminKeyPage = 1;

// =====================================================================
// AUTENTIKASI RESMI MASTER ADMIN PANEL & GURU (MULTI-ROLE & REMEMBER ME)
// =====================================================================
function getAdminCredentials() {
  try {
    const raw = localStorage.getItem("kodi_admin_accounts");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") return parsed;
    }
  } catch(e) {}
  const defaults = {
    "admin": { password: "admin123", role: "Super Administrator", name: "Administrator Utama" },
    "guru": { password: "guru2026", role: "Guru / Pendidik", name: "Guru Pengajar SD Ihsaniyah" },
    "pengawas": { password: "pengawas123", role: "Pengawas Ujian", name: "Pengawas Evaluasi" }
  };
  try {
    localStorage.setItem("kodi_admin_accounts", JSON.stringify(defaults));
  } catch(e) {}
  return defaults;
}

function isTeacherLoggedIn() {
  try {
    const sessStr = sessionStorage.getItem("kodi_admin_session") || localStorage.getItem("kodi_admin_session");
    if (sessStr) {
      const sess = JSON.parse(sessStr);
      if (sess && sess.loggedIn && sess.username) {
        return sess;
      }
    }
  } catch(e) {}
  return false;
}

function setTeacherLoggedInState(sessionData, rememberMe) {
  if (sessionData && sessionData.loggedIn) {
    const str = JSON.stringify(sessionData);
    if (rememberMe) {
      localStorage.setItem("kodi_admin_session", str);
      sessionStorage.removeItem("kodi_admin_session");
    } else {
      sessionStorage.setItem("kodi_admin_session", str);
      localStorage.removeItem("kodi_admin_session");
    }
  } else {
    localStorage.removeItem("kodi_admin_session");
    sessionStorage.removeItem("kodi_admin_session");
  }
}

window.openIhsaniyahAdminPanel = function(defaultSubTab) {
  if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();
  syncIhsaniyahProgressToRecords(false);
  closeIhsaniyahAdminPanel();
  if (defaultSubTab) {
    appState.adminSubTab = defaultSubTab;
  }
  switchTab("admin-panel");
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.closeIhsaniyahAdminPanel = function() {
  const modalEl = document.getElementById("ihs-admin-modal-wrap");
  if (modalEl) modalEl.className = "modal-overlay";
};

window.togglePasswordVisibility = function(inputId) {
  const passEl = document.getElementById(inputId || "teacher-password-input");
  if (passEl) {
    passEl.type = passEl.type === "password" ? "text" : "password";
  }
};

window.handleTeacherLoginSubmit = function(e) {
  if (e && typeof e.preventDefault === "function") e.preventDefault();
  const userEl = document.getElementById("admin-login-username");
  const passEl = document.getElementById("admin-login-password");
  const remEl = document.getElementById("admin-login-remember");
  const errEl = document.getElementById("admin-login-error");

  const username = (userEl ? userEl.value : "").trim().toLowerCase();
  const password = (passEl ? passEl.value : "").trim();
  const remember = remEl ? remEl.checked : true;

  if (!username || !password) {
    if (errEl) {
      errEl.style.display = "block";
      errEl.innerHTML = "⚠️ Harap masukkan Username dan Password lengkap!";
    }
    if (window.sfx && typeof sfx.playError === "function") sfx.playError();
    return;
  }

  const accounts = getAdminCredentials();
  const targetAcc = accounts[username];

  if (targetAcc && targetAcc.password === password) {
    const sessionData = {
      loggedIn: true,
      username: username,
      name: targetAcc.name || username,
      role: targetAcc.role || "Administrator",
      loginTime: new Date().toISOString()
    };
    setTeacherLoggedInState(sessionData, remember);
    if (window.sfx && typeof sfx.playSuccess === "function") sfx.playSuccess();
    renderAdminPanelPage();
    if (typeof setKodiSpeech === "function") {
      setKodiSpeech(
        `Selamat datang, ${sessionData.name}! 🛡️`,
        `Anda berhasil masuk sebagai ${sessionData.role}. Seluruh kontrol modul, kunci jawaban, dan rekap nilai siap dikelola!`
      );
    }
  } else {
    if (errEl) {
      errEl.style.display = "block";
      errEl.innerHTML = "❌ Username atau Password salah! Periksa kembali atau gunakan kredensial default di bawah.";
    }
    if (window.sfx && typeof sfx.playError === "function") sfx.playError();
    if (passEl) {
      passEl.focus();
      passEl.select();
    }
  }
};

window.quickFillAdminCredentials = function(username, password) {
  const userEl = document.getElementById("admin-login-username");
  const passEl = document.getElementById("admin-login-password");
  if (userEl) userEl.value = username;
  if (passEl) passEl.value = password;
  if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();
};

window.logoutTeacherHandler = function() {
  if (confirm("Apakah Anda yakin ingin keluar dari Master Admin Panel? Sesi Anda akan diamankan kembali.")) {
    setTeacherLoggedInState(null);
    if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();
    renderAdminPanelPage();
    if (typeof setKodiSpeech === "function") {
      setKodiSpeech(
        "Sesi Admin Ditutup 🔒",
        "Anda telah keluar dari Master Admin Panel. Halaman kembali dilindungi username dan password."
      );
    }
  }
};

window.openChangePasswordModal = function() {
  const currentSess = isTeacherLoggedIn();
  if (!currentSess) return;
  const username = currentSess.username;
  const accounts = getAdminCredentials();
  const acc = accounts[username];
  if (!acc) return;

  const oldPass = prompt(`Ubah Kata Sandi untuk [${username}]\n\nMasukkan password saat ini:`);
  if (oldPass === null) return;
  if (oldPass !== acc.password) {
    alert("❌ Password saat ini tidak sesuai!");
    return;
  }

  const newPass = prompt("Masukkan password baru (minimal 4 karakter):");
  if (newPass === null) return;
  if (!newPass || newPass.trim().length < 4) {
    alert("❌ Password baru minimal harus 4 karakter!");
    return;
  }

  const confirmPass = prompt("Konfirmasi ulang password baru:");
  if (confirmPass === null) return;
  if (newPass.trim() !== confirmPass.trim()) {
    alert("❌ Konfirmasi password tidak cocok!");
    return;
  }

  accounts[username].password = newPass.trim();
  localStorage.setItem("kodi_admin_accounts", JSON.stringify(accounts));
  alert(`✅ Berhasil! Kata sandi untuk [${username}] telah diperbarui. Silakan gunakan kata sandi baru untuk login berikutnya.`);
  if (window.sfx && typeof sfx.playSuccess === "function") sfx.playSuccess();
};

window.setAdminSubTab = function(subTab) {
  appState.adminSubTab = subTab;
  if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();
  renderAdminPanelPage();
};

window.setAdminClassFilter = function(cls) {
  appState.adminClassFilter = cls;
  renderAdminPanelPage();
};

window.setAdminSearchQuery = function(q) {
  appState.adminSearchQuery = q;
  renderAdminPanelPage();
};

window.setAdminKeyModuleFilter = function(modKey) {
  appState.adminKeyModuleFilter = modKey;
  appState.adminKeyPage = 1;
  if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();
  renderAdminPanelPage();
};

window.setAdminKeySearchQuery = function(q) {
  appState.adminKeySearchQuery = q;
  appState.adminKeyPage = 1;
  renderAdminPanelPage();
};

window.setAdminKeyPage = function(pageNum) {
  appState.adminKeyPage = pageNum;
  if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();
  renderAdminPanelPage();
};

window.openAdminKeyForModule = function(modKey) {
  appState.adminSubTab = "master_keys";
  appState.adminKeyModuleFilter = modKey;
  appState.adminKeyPage = 1;
  if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();
  renderAdminPanelPage();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// ================= FUNGSI UNLOCK & RESET SEMUA MODUL DARI ADMIN PANEL =================
window.adminUnlockModule = function(modKey) {
  if (window.sfx && typeof sfx.playSuccess === "function") sfx.playSuccess();

  if (modKey === "adventure" || modKey === "ALL") {
    if (typeof levelsData !== "undefined" && Array.isArray(levelsData)) {
      appState.completedLevels = levelsData.map(l => l.id);
    }
  }

  if (modKey === "ihsaniyah" || modKey === "ALL") {
    const qs = window.IHSANIYAH_QUESTIONS || [];
    appState.ihsUserAnswers = appState.ihsUserAnswers || {};
    qs.forEach(q => {
      if (q.type === "multi_blank" || q.type === "branch_decomposition" || q.type === "grid_puzzle" || q.type === "division_story") {
        const obj = {};
        (q.blanks || []).forEach(b => {
          obj[b.id] = String(b.correctAnswer);
        });
        appState.ihsUserAnswers[q.id] = obj;
      } else if (q.type === "checkbox_select") {
        appState.ihsUserAnswers[q.id] = { selectedIds: (q.items || []).filter(i => i.isCorrect).map(i => i.id) };
      } else if (q.type === "matching_game") {
        const pairs = {};
        (q.pairs || []).forEach(p => {
          pairs[p.leftId] = p.rightId;
        });
        appState.ihsUserAnswers[q.id] = { matchedPairs: pairs };
      }
    });
    if (typeof window.saveIhsaniyahStudentAnswersStore === "function") {
      window.saveIhsaniyahStudentAnswersStore(appState.ihsUserAnswers);
    }
    syncIhsaniyahProgressToRecords(true);
  }

  if (modKey === "math" || modKey === "ALL") {
    const mathList = window.CAMBRIDGE_MATH_CHALLENGES || [];
    appState.mathCompleted = mathList.map(m => m.id);
    appState.mathUserDrafts = appState.mathUserDrafts || {};
    mathList.forEach(m => {
      appState.mathUserDrafts[m.id] = m.expectedAnswer;
    });
  }

  if (modKey === "code" || modKey === "ALL") {
    if (typeof codeChallenges !== "undefined" && Array.isArray(codeChallenges)) {
      appState.codeCompleted = codeChallenges.map(c => c.id);
      appState.codeUserDrafts = appState.codeUserDrafts || {};
      codeChallenges.forEach(c => {
        appState.codeUserDrafts[c.id] = c.solutionCode;
      });
    }
  }

  if (modKey === "excel" || modKey === "ALL") {
    if (typeof excelChallenges !== "undefined" && Array.isArray(excelChallenges)) {
      appState.excelCompleted = excelChallenges.map(x => x.id);
      appState.excelUserFormulas = appState.excelUserFormulas || {};
      excelChallenges.forEach(x => {
        if (x.acceptedFormulas && x.acceptedFormulas.length) {
          appState.excelUserFormulas[x.id] = x.acceptedFormulas[0];
        }
      });
    }
  }

  if (modKey === "it_tech" || modKey === "ALL") {
    if (typeof itTechChallenges !== "undefined" && Array.isArray(itTechChallenges)) {
      appState.itTechCompleted = itTechChallenges.map(t => t.id);
      appState.itTechAnswers = appState.itTechAnswers || {};
      itTechChallenges.forEach(t => {
        appState.itTechAnswers[t.id] = t.correctIndex;
      });
    }
  }

  if (modKey === "ALL") {
    appState.stars = Math.max(appState.stars || 0, 500);
  } else {
    appState.stars = (appState.stars || 0) + 25;
  }

  saveProgress();
  renderQuestGrid();
  renderAdminPanelPage();
};

window.adminResetModule = function(modKey) {
  if (!confirm("Reset progres pengerjaan untuk modul ini?")) return;
  if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();

  if (modKey === "adventure" || modKey === "ALL") {
    appState.completedLevels = [];
  }
  if (modKey === "ihsaniyah" || modKey === "ALL") {
    appState.ihsUserAnswers = {};
    if (typeof window.saveIhsaniyahStudentAnswersStore === "function") {
      window.saveIhsaniyahStudentAnswersStore({});
    }
    syncIhsaniyahProgressToRecords(false);
  }
  if (modKey === "math" || modKey === "ALL") {
    appState.mathCompleted = [];
    appState.mathUserDrafts = {};
  }
  if (modKey === "code" || modKey === "ALL") {
    appState.codeCompleted = [];
    appState.codeUserDrafts = {};
  }
  if (modKey === "excel" || modKey === "ALL") {
    appState.excelCompleted = [];
    appState.excelUserFormulas = {};
  }
  if (modKey === "it_tech" || modKey === "ALL") {
    appState.itTechCompleted = [];
    appState.itTechAnswers = {};
  }
  if (modKey === "ALL") {
    appState.stars = 0;
  }

  saveProgress();
  renderQuestGrid();
  renderAdminPanelPage();
};

window.adminUpdateActiveProfile = function() {
  const nameEl = document.getElementById("admin-profile-name-input");
  const starsEl = document.getElementById("admin-profile-stars-input");
  if (nameEl && nameEl.value.trim()) {
    appState.playerName = nameEl.value.trim();
  }
  if (starsEl && !isNaN(parseInt(starsEl.value, 10))) {
    appState.stars = Math.max(0, parseInt(starsEl.value, 10));
  }
  saveProgress();
  renderQuestGrid();
  if (window.sfx && typeof sfx.playSuccess === "function") sfx.playSuccess();
  renderAdminPanelPage();
};

window.adminAddManualRecord = function() {
  const nameEl = document.getElementById("admin-manual-name");
  const clsEl = document.getElementById("admin-manual-class");
  const numEl = document.getElementById("admin-manual-num");
  const scoreEl = document.getElementById("admin-manual-score");

  const name = nameEl ? nameEl.value.trim() : "";
  const cls = clsEl ? clsEl.value : "Kelas 2A";
  const num = numEl ? numEl.value.trim() || "1" : "1";
  const score = scoreEl ? Math.min(100, Math.max(0, parseInt(scoreEl.value || "100", 10))) : 100;

  if (!name) {
    alert("Masukkan Nama Siswa / Peserta terlebih dahulu!");
    return;
  }

  const totalQ = 27;
  const correctEst = Math.round((score / 100) * totalQ);
  const rec = {
    sessionId: `manual_${Date.now()}`,
    date: new Date().toLocaleDateString("id-ID"),
    time: new Date().toLocaleTimeString("id-ID"),
    studentName: name,
    studentClass: cls,
    studentNumber: num,
    answeredCount: totalQ,
    correctCount: correctEst,
    totalQuestions: totalQ,
    score: score,
    status: score >= 70 ? "Selesai & Tuntas" : "Perlu Evaluasi"
  };

  if (typeof window.upsertIhsaniyahRecord === "function") {
    window.upsertIhsaniyahRecord(rec);
  }
  if (window.sfx && typeof sfx.playSuccess === "function") sfx.playSuccess();
  renderAdminPanelPage();
};

// ================= LOMPAT & ISI OTOMATIS KE SOAL MANA PUN DARI ADMIN PANEL =================
window.jumpToModuleQuestionFromAdmin = function(modKey, idx, autoFill) {
  if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();

  if (modKey === "ihsaniyah") {
    appState.currentIhsIndex = idx;
    if (autoFill && window.IHSANIYAH_QUESTIONS && window.IHSANIYAH_QUESTIONS[idx]) {
      const q = window.IHSANIYAH_QUESTIONS[idx];
      appState.ihsUserAnswers = appState.ihsUserAnswers || {};
      if (q.type === "multi_blank" || q.type === "branch_decomposition" || q.type === "grid_puzzle" || q.type === "division_story") {
        const obj = {};
        (q.blanks || []).forEach(b => { obj[b.id] = String(b.correctAnswer); });
        appState.ihsUserAnswers[q.id] = obj;
      } else if (q.type === "checkbox_select") {
        appState.ihsUserAnswers[q.id] = { selectedIds: (q.items || []).filter(i => i.isCorrect).map(i => i.id) };
      } else if (q.type === "matching_game") {
        const pairs = {};
        (q.pairs || []).forEach(p => { pairs[p.leftId] = p.rightId; });
        appState.ihsUserAnswers[q.id] = { matchedPairs: pairs };
      }
      if (typeof window.saveIhsaniyahStudentAnswersStore === "function") {
        window.saveIhsaniyahStudentAnswersStore(appState.ihsUserAnswers);
      }
    }
    switchTab("ihsaniyah-test");
  } else if (modKey === "math") {
    appState.mathUnitFilter = "all";
    appState.currentMathIndex = idx;
    if (autoFill && window.CAMBRIDGE_MATH_CHALLENGES && window.CAMBRIDGE_MATH_CHALLENGES[idx]) {
      const m = window.CAMBRIDGE_MATH_CHALLENGES[idx];
      appState.mathUserDrafts = appState.mathUserDrafts || {};
      appState.mathUserDrafts[m.id] = m.expectedAnswer;
    }
    switchTab("math-trainer");
  } else if (modKey === "code") {
    appState.codeLanguageFilter = "all";
    appState.currentCodeIndex = idx;
    if (autoFill && typeof codeChallenges !== "undefined" && codeChallenges[idx]) {
      const c = codeChallenges[idx];
      appState.codeUserDrafts = appState.codeUserDrafts || {};
      appState.codeUserDrafts[c.id] = c.solutionCode;
    }
    switchTab("code-trainer");
  } else if (modKey === "sql") {
    appState.sqlCategoryFilter = "all";
    appState.currentSqlIndex = idx;
    switchTab("sql-trainer");
    setTimeout(() => {
      if (autoFill && typeof sqlChallenges !== "undefined" && sqlChallenges[idx]) {
        const inputEl = document.getElementById("sql-query-input");
        if (inputEl) inputEl.value = sqlChallenges[idx].correctQuery;
      }
    }, 80);
  } else if (modKey === "output") {
    appState.outputCategoryFilter = "all";
    appState.currentOutputIndex = idx;
    switchTab("sql-trainer");
  } else if (modKey === "excel") {
    appState.excelCategoryFilter = "all";
    appState.currentExcelIndex = idx;
    if (autoFill && typeof excelChallenges !== "undefined" && excelChallenges[idx]) {
      const x = excelChallenges[idx];
      appState.excelUserFormulas = appState.excelUserFormulas || {};
      if (x.acceptedFormulas && x.acceptedFormulas.length) {
        appState.excelUserFormulas[x.id] = x.acceptedFormulas[0];
      }
    }
    switchTab("excel-trainer");
  } else if (modKey === "shortcut_excel") {
    switchTab("shortcut-excel");
  } else if (modKey === "shortcut_word") {
    switchTab("shortcut-word");
  } else if (modKey === "it_tech") {
    appState.itTechCategoryFilter = "all";
    appState.currentItTechIndex = idx;
    if (autoFill && typeof itTechChallenges !== "undefined" && itTechChallenges[idx]) {
      const t = itTechChallenges[idx];
      appState.itTechAnswers = appState.itTechAnswers || {};
      appState.itTechAnswers[t.id] = t.correctIndex;
    }
    switchTab("it-tech-trainer");
  } else if (modKey === "english") {
    appState.currentEnglishDrillIndex = idx;
    switchTab("english-trainer");
  } else if (modKey === "adventure") {
    switchTab("adventure");
    if (typeof levelsData !== "undefined" && levelsData[idx]) {
      openLevelModal(levelsData[idx].id);
    }
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.jumpToQuestionFromAdmin = function(idx) {
  window.jumpToModuleQuestionFromAdmin("ihsaniyah", idx, false);
};

// ================= KOLEKTOR BANK KUNCI JAWABAN SEMUA MODUL =================
function getAdminNormalizedAnswerKeys(modKey) {
  const list = [];

  if (modKey === "ihsaniyah" || modKey === "all") {
    (window.IHSANIYAH_QUESTIONS || []).forEach((q, idx) => {
      list.push({
        modKey: "ihsaniyah",
        modBadge: "🎒 SD Ihsaniyah",
        idx: idx,
        numberLabel: `No. ${q.number}`,
        category: q.page || "Formative Test & Division",
        title: q.title,
        question: q.instruction,
        answerKey: q.answerKeySummary || "-",
        explanation: q.badge || "Kurikulum Cambridge Primary Mathematics SD Ihsaniyah",
        isCode: false
      });
    });
  }

  if (modKey === "math" || modKey === "all") {
    (window.CAMBRIDGE_MATH_CHALLENGES || []).forEach((m, idx) => {
      list.push({
        modKey: "math",
        modBadge: "📐 Cambridge Math",
        idx: idx,
        numberLabel: `Math #${idx + 1}`,
        category: `${m.unit} • ${m.topic}`,
        title: m.title,
        question: `🇬🇧 ${m.questionEN}\n🇮🇩 ${m.questionID}`,
        answerKey: `${m.expectedAnswer}${m.acceptedAnswers && m.acceptedAnswers.length > 1 ? '  (Variasi sah: ' + m.acceptedAnswers.join(', ') + ')' : ''}`,
        explanation: m.explanation || m.hint || "-",
        isCode: false
      });
    });
  }

  if (modKey === "code" || modKey === "all") {
    (typeof codeChallenges !== "undefined" ? codeChallenges : []).forEach((c, idx) => {
      list.push({
        modKey: "code",
        modBadge: `💻 Koding (${c.language})`,
        idx: idx,
        numberLabel: `Kode #${idx + 1}`,
        category: c.category,
        title: c.title,
        question: c.description,
        answerKey: c.solutionCode,
        explanation: c.explanation || (c.workedExample && c.workedExample.nalarBayi) || "-",
        isCode: true
      });
    });
  }

  if (modKey === "sql" || modKey === "all") {
    (typeof sqlChallenges !== "undefined" ? sqlChallenges : []).forEach((s, idx) => {
      list.push({
        modKey: "sql",
        modBadge: "🗄️ Studio SQL",
        idx: idx,
        numberLabel: `SQL #${idx + 1}`,
        category: `${s.category} (Tabel: ${s.tableName})`,
        title: s.title,
        question: s.questionEn,
        answerKey: s.correctQuery,
        explanation: s.babyHint || "-",
        isCode: true
      });
    });
  }

  if (modKey === "output" || modKey === "all") {
    (typeof outputPredictionQuestions !== "undefined" ? outputPredictionQuestions : []).forEach((o, idx) => {
      const rightOpt = (o.options || []).find(opt => opt.correct);
      list.push({
        modKey: "output",
        modBadge: `🔍 Tebak Output (${o.lang})`,
        idx: idx,
        numberLabel: `Output #${idx + 1}`,
        category: `${o.lang} • ${o.badge}`,
        title: `Tebak Output ${o.lang}: ${o.badge}`,
        question: `${o.questionEn}\n\n${o.code}`,
        answerKey: rightOpt ? rightOpt.text : "-",
        explanation: o.babyExplanation || "-",
        isCode: true
      });
    });
  }

  if (modKey === "excel" || modKey === "all") {
    (typeof excelChallenges !== "undefined" ? excelChallenges : []).forEach((x, idx) => {
      const primaryFormula = (x.acceptedFormulas && x.acceptedFormulas[0]) ? x.acceptedFormulas[0] : "-";
      list.push({
        modKey: "excel",
        modBadge: "📊 Rumus Excel",
        idx: idx,
        numberLabel: `Excel #${idx + 1}`,
        category: `${x.category} (Sel ${x.targetCell})`,
        title: x.title,
        question: `${x.scenario}\n📌 Tugas: ${x.instruction}`,
        answerKey: `${primaryFormula}   ➔   Hasil: ${x.expectedValue}`,
        explanation: x.babyHint || "-",
        isCode: true
      });
    });
  }

  if (modKey === "shortcut_excel" || modKey === "all") {
    (window.EXCEL_SHORTCUTS || []).forEach((sc, idx) => {
      list.push({
        modKey: "shortcut_excel",
        modBadge: "⌨️ Pintasan Excel",
        idx: idx,
        numberLabel: `Pintasan Excel #${idx + 1}`,
        category: sc.category,
        title: sc.action,
        question: sc.scenario,
        answerKey: sc.key,
        explanation: sc.nalarBayiKodi || "-",
        isCode: false
      });
    });
  }

  if (modKey === "shortcut_word" || modKey === "all") {
    (window.WORD_SHORTCUTS || []).forEach((sc, idx) => {
      list.push({
        modKey: "shortcut_word",
        modBadge: "📝 Pintasan Word",
        idx: idx,
        numberLabel: `Pintasan Word #${idx + 1}`,
        category: sc.category,
        title: sc.action,
        question: sc.scenario,
        answerKey: sc.key,
        explanation: sc.nalarBayiKodi || "-",
        isCode: false
      });
    });
  }

  if (modKey === "it_tech" || modKey === "all") {
    (typeof itTechChallenges !== "undefined" ? itTechChallenges : []).forEach((t, idx) => {
      const optLetter = String.fromCharCode(65 + (t.correctIndex || 0));
      const optText = (t.options && t.options[t.correctIndex]) ? t.options[t.correctIndex] : "-";
      list.push({
        modKey: "it_tech",
        modBadge: "🛠️ IT Tech Lab",
        idx: idx,
        numberLabel: `IT Lab #${idx + 1}`,
        category: `${t.category}`,
        title: t.title,
        question: `${t.scenario}\n❓ Pertanyaan: ${t.question}`,
        answerKey: `Opsi ${optLetter}: ${optText}`,
        explanation: t.explanation || "-",
        isCode: false
      });
    });
  }

  if (modKey === "english" || modKey === "all") {
    (typeof cvInterviewSpeakingDrills !== "undefined" ? cvInterviewSpeakingDrills : []).slice(0, 100).forEach((e, idx) => {
      list.push({
        modKey: "english",
        modBadge: "🗣️ English Studio",
        idx: idx,
        numberLabel: `English #${idx + 1}`,
        category: e.category,
        title: e.questionEn,
        question: `Pertanyaan Interview: ${e.questionEn}`,
        answerKey: e.targetSentence,
        explanation: `🇮🇩 Arti: ${e.translationId}\n💡 Tips: ${e.babyTips || ''}`,
        isCode: false
      });
    });
  }

  if (modKey === "adventure" || modKey === "all") {
    (typeof levelsData !== "undefined" ? levelsData : []).forEach((lvl, idx) => {
      const stepSummary = (lvl.steps || []).map((st, sIdx) => `Langkah ${sIdx + 1} (${st.stepTitle}): ${st.workedExample ? st.workedExample.sampleAnswer : 'Selesaikan misi interaktif'}`).join("\n");
      list.push({
        modKey: "adventure",
        modBadge: "🗺️ Petualangan PBL",
        idx: idx,
        numberLabel: `Level ${lvl.id}`,
        category: `Misi Petualangan IT (${lvl.starsReward} Bintang)`,
        title: `${lvl.icon} ${lvl.title}`,
        question: lvl.description,
        answerKey: stepSummary,
        explanation: lvl.analogy || "-",
        isCode: true
      });
    });
  }

  return list;
}

window.exportAdminAnswerKeysCSV = function(modKey) {
  const items = getAdminNormalizedAnswerKeys(modKey || appState.adminKeyModuleFilter || "all");
  if (!items.length) return;

  let csv = "\uFEFFModul,Nomor,Kategori,Judul Soal,Pertanyaan / Skenario,Kunci Jawaban Resmi,Penjelasan\n";
  items.forEach(item => {
    const clean = (s) => `"${String(s || "").replace(/"/g, '""').replace(/\r?\n/g, " | ")}"`;
    csv += [
      clean(item.modBadge),
      clean(item.numberLabel),
      clean(item.category),
      clean(item.title),
      clean(item.question),
      clean(item.answerKey),
      clean(item.explanation)
    ].join(",") + "\n";
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Kunci_Jawaban_Master_${modKey || 'Semua_Modul'}_2026.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

window.exportFullAppBackupJSON = function() {
  const payload = {
    exportedAt: new Date().toISOString(),
    appVersion: "v19.7-master-admin",
    appState: {
      playerName: appState.playerName,
      stars: appState.stars,
      completedLevels: appState.completedLevels,
      mathCompleted: appState.mathCompleted,
      codeCompleted: appState.codeCompleted,
      excelCompleted: appState.excelCompleted,
      itTechCompleted: appState.itTechCompleted,
      ihsUserAnswers: appState.ihsUserAnswers
    },
    ihsaniyahStudentRecords: typeof window.getIhsaniyahRecords === "function" ? window.getIhsaniyahRecords() : []
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Backup_Master_Kodi_IT_Academy_${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

window.deleteSingleStudentRecord = function(sessionId) {
  if (!confirm("Hapus data rekap siswa ini dari tabel?")) return;
  try {
    const records = typeof window.getIhsaniyahRecords === "function" ? window.getIhsaniyahRecords() : [];
    const filtered = records.filter(r => (r.sessionId || `${r.studentName}_${r.studentClass}_${r.studentNumber}`) !== sessionId);
    localStorage.setItem("ihsaniyah_student_records", JSON.stringify(filtered));
    if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();
    renderAdminPanelPage();
  } catch (e) {}
};

window.seedDemoStudentRecords = function() {
  const nowDate = new Date().toLocaleDateString("id-ID");
  const nowTime = new Date().toLocaleTimeString("id-ID");
  const samples = [
    {
      sessionId: "demo_aisyah_2a_3",
      date: nowDate,
      time: nowTime,
      studentName: "Aisyah Putri Azzahra (Contoh)",
      studentClass: "Kelas 2A",
      studentNumber: "3",
      answeredCount: 27,
      correctCount: 25,
      totalQuestions: 27,
      score: 93,
      status: "Selesai & Tuntas"
    },
    {
      sessionId: "demo_farhan_2a_12",
      date: nowDate,
      time: nowTime,
      studentName: "Muhammad Farhan Al-Hafidz (Contoh)",
      studentClass: "Kelas 2A",
      studentNumber: "12",
      answeredCount: 27,
      correctCount: 23,
      totalQuestions: 27,
      score: 85,
      status: "Selesai & Tuntas"
    },
    {
      sessionId: "demo_nabhan_2b_7",
      date: nowDate,
      time: nowTime,
      studentName: "Ahmad Nabhan (Contoh)",
      studentClass: "Kelas 2B",
      studentNumber: "7",
      answeredCount: 19,
      correctCount: 15,
      totalQuestions: 27,
      score: 56,
      status: "Sedang Mengerjakan (19/27)"
    }
  ];
  samples.forEach(s => {
    if (typeof window.upsertIhsaniyahRecord === "function") {
      window.upsertIhsaniyahRecord(s);
    }
  });
  if (window.sfx && typeof sfx.playSuccess === "function") sfx.playSuccess();
  renderAdminPanelPage();
};

window.clearIhsaniyahRecordsHandler = function() {
  if (confirm("Apakah Anda yakin ingin menghapus seluruh data rekap nilai siswa?")) {
    if (typeof window.clearIhsaniyahRecords === "function") window.clearIhsaniyahRecords();
    renderAdminPanelPage();
  }
};

function renderAdminPanelPage() {
  const container = document.getElementById("admin-panel-content-area");
  if (!container) return;

  const currentSession = isTeacherLoggedIn();

  // =====================================================================
  // JIKA BELUM LOGIN: TAMPILKAN PORTAL LOGIN GERBANG RESMI ADMIN & GURU
  // =====================================================================
  if (!currentSession) {
    container.innerHTML = `
      <div style="max-width: 580px; margin: 30px auto; padding: 0 16px;">
        <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(30, 41, 59, 0.96)); border: 2px solid #38bdf8; border-radius: 24px; padding: 32px 28px; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5); backdrop-filter: blur(12px);">
          
          <!-- HEADER & ICON -->
          <div style="text-align: center; margin-bottom: 24px;">
            <div style="width: 72px; height: 72px; margin: 0 auto 14px; border-radius: 20px; background: linear-gradient(135deg, #0284c7, #2563eb); display: flex; align-items: center; justify-content: center; font-size: 2.4rem; border: 2px solid #7dd3fc; box-shadow: 0 8px 25px rgba(2, 132, 199, 0.4);">
              🛡️
            </div>
            <div style="display: inline-block; background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.4); color: #38bdf8; font-size: 0.76rem; font-weight: 800; padding: 4px 14px; border-radius: 999px; margin-bottom: 8px;">
              PORTAL OTENTIKASI & AREA KHUSUS GURU/ADMIN
            </div>
            <h2 style="margin: 0 0 8px; color: #ffffff; font-size: 1.55rem; font-weight: 900;">
              Login Master Admin & Guru
            </h2>
            <p style="margin: 0; color: #94a3b8; font-size: 0.86rem; line-height: 1.5;">
              Halaman ini dibatasi khusus untuk <strong>Guru, Administrator, dan Pengawas</strong> guna mengontrol seluruh 11 modul, melihat 880+ kunci jawaban resmi, dan mengelola nilai siswa.
            </p>
          </div>

          <!-- KARTU PEMBEDA ROLE SISWA VS ADMIN -->
          <div style="background: rgba(2, 6, 23, 0.6); border: 1px solid rgba(148, 163, 184, 0.2); border-radius: 14px; padding: 12px 14px; margin-bottom: 22px; font-size: 0.8rem; line-height: 1.45;">
            <div style="color: #fca5a5; margin-bottom: 4px;">
              🚫 <strong>Murid / Siswa / Pengguna Publik:</strong> Dilarang mengakses panel ini agar kunci jawaban dan integritas ujian tetap terjaga. Silakan gunakan modul belajar di tab atas.
            </div>
            <div style="color: #86efac;">
              ✅ <strong>Admin / Guru / Pengawas:</strong> Masukkan kredensial resmi Anda untuk mengakses dashboard manajemen penuh.
            </div>
          </div>

          <!-- FORM LOGIN -->
          <form id="form-admin-login" onsubmit="handleTeacherLoginSubmit(event)">
            <!-- USERNAME -->
            <div style="margin-bottom: 16px;">
              <label for="admin-login-username" style="display: block; font-weight: 800; font-size: 0.84rem; color: #cbd5e1; margin-bottom: 6px;">
                👤 Username / Nama Pengguna:
              </label>
              <input type="text" id="admin-login-username" value="admin" placeholder="Ketik username (contoh: admin atau guru)"
                     style="width: 100%; box-sizing: border-box; background: rgba(15, 23, 42, 0.85); border: 1.5px solid rgba(56, 189, 248, 0.4); border-radius: 12px; padding: 12px 16px; color: #ffffff; font-size: 0.95rem; outline: none; transition: all 0.2s;"
                     onfocus="this.style.borderColor='#38bdf8'; this.style.boxShadow='0 0 12px rgba(56, 189, 248, 0.25)';"
                     onblur="this.style.borderColor='rgba(56, 189, 248, 0.4)'; this.style.boxShadow='none';"
                     autocomplete="username" required>
            </div>

            <!-- PASSWORD -->
            <div style="margin-bottom: 16px;">
              <label for="admin-login-password" style="display: flex; justify-content: space-between; align-items: center; font-weight: 800; font-size: 0.84rem; color: #cbd5e1; margin-bottom: 6px;">
                <span>🔑 Password / Kata Sandi:</span>
                <span style="font-size: 0.75rem; color: #38bdf8; cursor: pointer;" onclick="togglePasswordVisibility('admin-login-password')">👁️ Lihat / Sembunyikan</span>
              </label>
              <div style="position: relative;">
                <input type="password" id="admin-login-password" placeholder="Masukkan password admin..."
                       style="width: 100%; box-sizing: border-box; background: rgba(15, 23, 42, 0.85); border: 1.5px solid rgba(56, 189, 248, 0.4); border-radius: 12px; padding: 12px 48px 12px 16px; color: #ffffff; font-size: 0.95rem; outline: none; transition: all 0.2s;"
                       onfocus="this.style.borderColor='#38bdf8'; this.style.boxShadow='0 0 12px rgba(56, 189, 248, 0.25)';"
                       onblur="this.style.borderColor='rgba(56, 189, 248, 0.4)'; this.style.boxShadow='none';"
                       autocomplete="current-password" required>
                <button type="button" onclick="togglePasswordVisibility('admin-login-password')"
                        style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: transparent; border: none; font-size: 1.1rem; cursor: pointer; color: #94a3b8; padding: 4px;">
                  👁️
                </button>
              </div>
            </div>

            <!-- REMEMBER ME CHECKBOX -->
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; font-size: 0.82rem; color: #cbd5e1;">
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                <input type="checkbox" id="admin-login-remember" checked style="accent-color: #38bdf8; width: 16px; height: 16px;">
                <span>Ingat sesi saya di perangkat ini</span>
              </label>
            </div>

            <!-- ERROR MESSAGE BOX -->
            <div id="admin-login-error" style="display: none; background: rgba(239, 68, 68, 0.15); border: 1.5px solid #ef4444; color: #fca5a5; font-size: 0.84rem; font-weight: 700; padding: 10px 14px; border-radius: 10px; margin-bottom: 18px; text-align: center;">
            </div>

            <!-- TOMBOL SUBMIT -->
            <button type="submit"
                    style="width: 100%; background: linear-gradient(135deg, #0284c7, #2563eb); border: none; border-radius: 12px; padding: 14px 20px; color: #ffffff; font-size: 1rem; font-weight: 900; cursor: pointer; box-shadow: 0 8px 24px rgba(2, 132, 199, 0.35); transition: transform 0.15s, box-shadow 0.15s;"
                    onmouseover="this.style.transform='translateY(-2px)';"
                    onmouseout="this.style.transform='translateY(0)';">
              🚀 Masuk ke Master Admin Panel
            </button>
          </form>

          <!-- KOTAK INFO AKUN DEFAULT & TOMBOL CEPAT ISI -->
          <div style="margin-top: 22px; padding: 14px; background: rgba(255, 255, 255, 0.03); border: 1px dashed rgba(56, 189, 248, 0.35); border-radius: 12px; font-size: 0.79rem; color: #94a3b8; line-height: 1.5;">
            <div style="font-weight: 800; color: #38bdf8; margin-bottom: 8px;">
              💡 Kredensial Login Terdaftar (Klik untuk Langsung Isi):
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
              <div onclick="quickFillAdminCredentials('admin', 'admin123')"
                   style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(56, 189, 248, 0.3); padding: 8px 10px; border-radius: 8px; cursor: pointer; transition: all 0.2s;"
                   onmouseover="this.style.borderColor='#38bdf8'; this.style.background='rgba(2, 132, 199, 0.2)';"
                   onmouseout="this.style.borderColor='rgba(56, 189, 248, 0.3)'; this.style.background='rgba(15, 23, 42, 0.7)';">
                <strong style="color: #4ade80;">👑 Akun Admin:</strong><br>
                User: <code>admin</code><br>
                Pass: <code>admin123</code>
              </div>
              <div onclick="quickFillAdminCredentials('guru', 'guru2026')"
                   style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(168, 85, 247, 0.3); padding: 8px 10px; border-radius: 8px; cursor: pointer; transition: all 0.2s;"
                   onmouseover="this.style.borderColor='#c084fc'; this.style.background='rgba(168, 85, 247, 0.2)';"
                   onmouseout="this.style.borderColor='rgba(168, 85, 247, 0.3)'; this.style.background='rgba(15, 23, 42, 0.7)';">
                <strong style="color: #c084fc;">👩‍🏫 Akun Guru:</strong><br>
                User: <code>guru</code><br>
                Pass: <code>guru2026</code>
              </div>
            </div>
            <div style="margin-top: 8px; font-size: 0.74rem; color: #64748b;">
              *Password dapat diubah kapan saja di dalam dashboard setelah Anda berhasil masuk.
            </div>
          </div>

          <!-- TOMBOL KEMBALI KE BERANDA PEMBELAJARAN SISWA -->
          <div style="text-align: center; margin-top: 20px;">
            <button type="button" class="btn-secondary" style="font-size: 0.84rem; padding: 8px 18px; border-radius: 10px;" onclick="switchTab('adventure')">
              ← Kembali ke Petualangan Pembelajaran Siswa
            </button>
          </div>

        </div>
      </div>
    `;
    return;
  }

  // Sinkronisasi progres ujian SD Ihsaniyah bila ada siswa aktif
  syncIhsaniyahProgressToRecords(false);

  // 1. HITUNG STATISTIK LIVE DARI SELURUH 11 MODUL DI APLIKASI
  const totalLevels = (typeof levelsData !== "undefined" ? levelsData.length : 5);
  const doneLevels = (appState.completedLevels || []).length;

  const totalIhs = (window.IHSANIYAH_QUESTIONS || []).length || 27;
  const ihsStats = typeof getIhsaniyahLiveStats === "function" ? getIhsaniyahLiveStats() : { answeredCount: 0, correctCount: 0, score: 0 };

  const totalMath = (window.CAMBRIDGE_MATH_CHALLENGES || []).length || 100;
  const doneMath = (appState.mathCompleted || []).length;

  const totalCode = (typeof codeChallenges !== "undefined" ? codeChallenges.length : 100);
  const doneCode = (appState.codeCompleted || []).length;

  const totalSql = (typeof sqlChallenges !== "undefined" ? sqlChallenges.length : 100);
  const totalOut = (typeof outputPredictionQuestions !== "undefined" ? outputPredictionQuestions.length : 100);

  const totalExcel = (typeof excelChallenges !== "undefined" ? excelChallenges.length : 155);
  const doneExcel = (appState.excelCompleted || []).length;

  const totalScExcel = (window.EXCEL_SHORTCUTS || []).length || 53;
  const totalScWord = (window.WORD_SHORTCUTS || []).length || 55;

  const totalItTech = (typeof itTechChallenges !== "undefined" ? itTechChallenges.length : 100);
  const doneItTech = (appState.itTechCompleted || []).length;

  const totalEng =
    (typeof cvInterviewSpeakingDrills !== "undefined" ? cvInterviewSpeakingDrills.length : 0) +
    (typeof missingLetterPuzzles !== "undefined" ? missingLetterPuzzles.length : 0) +
    (typeof ieltsAcademicDrills !== "undefined" ? ieltsAcademicDrills.length : 0) +
    (typeof toeflIbtDrills !== "undefined" ? toeflIbtDrills.length : 0) +
    (typeof englishDictationDrills !== "undefined" ? englishDictationDrills.length : 0) +
    (window.SENTENCE_BUILDER_DRILLS ? window.SENTENCE_BUILDER_DRILLS.length : 0);

  const totalDict = (window.itDictionary || []).length || 1000;

  const grandTotalItems = totalLevels + totalIhs + totalMath + totalCode + totalSql + totalOut + totalExcel + totalScExcel + totalScWord + totalItTech + totalEng + totalDict;

  const allRecords = typeof window.getIhsaniyahRecords === "function" ? window.getIhsaniyahRecords() : [];
  const clsFilter = appState.adminClassFilter || "all";
  const searchQ = (appState.adminSearchQuery || "").trim().toLowerCase();

  const filteredRecords = allRecords.filter(r => {
    const matchCls = clsFilter === "all" || r.studentClass === clsFilter;
    const matchName = !searchQ || (r.studentName || "").toLowerCase().includes(searchQ) || String(r.studentNumber || "").includes(searchQ);
    return matchCls && matchName;
  });

  const avgScore = allRecords.length ? Math.round(allRecords.reduce((acc, r) => acc + (r.score || 0), 0) / allRecords.length) : 0;
  const highestScore = allRecords.length ? Math.max(...allRecords.map(r => r.score || 0)) : 0;
  const passedCount = allRecords.filter(r => (r.score || 0) >= 70).length;

  const activeSub = appState.adminSubTab || "all_modules";

  // Daftar 11 Modul untuk Tabel Kontrol Master
  const moduleRows = [
    {
      key: "adventure",
      tab: "adventure",
      icon: "🗺️",
      name: "1. Petualangan IT Support (PBL)",
      desc: "Misi perakitan PC, logika CPU, terminal jaringan, & troubleshooting",
      totalLabel: `${totalLevels} Misi`,
      doneCount: doneLevels,
      totalCount: totalLevels,
      hasUnlock: true
    },
    {
      key: "ihsaniyah",
      tab: "ihsaniyah-test",
      icon: "🎒",
      name: "2. Ujian SD Ihsaniyah Gajahmada Tegal",
      desc: "Math Formative Test 2 & Cambridge Primary Division (Visual SVG Interaktif)",
      totalLabel: `${totalIhs} Soal`,
      doneCount: ihsStats.answeredCount || 0,
      totalCount: totalIhs,
      hasUnlock: true
    },
    {
      key: "math",
      tab: "math-trainer",
      icon: "📐",
      name: "3. Cambridge Bilingual Mathematics",
      desc: "10 Unit Matematika Checkpoint & IGCSE (0580/0862) + Virtual Math Pad",
      totalLabel: `${totalMath} Soal`,
      doneCount: doneMath,
      totalCount: totalMath,
      hasUnlock: true
    },
    {
      key: "code",
      tab: "code-trainer",
      icon: "💻",
      name: "4. Studio Koding Manual (5 Bahasa)",
      desc: "Praktik menulis kode HTML/CSS, JavaScript, Python, Java, & C#",
      totalLabel: `${totalCode} Soal`,
      doneCount: doneCode,
      totalCount: totalCode,
      hasUnlock: true
    },
    {
      key: "sql",
      tab: "sql-trainer",
      icon: "🗄️",
      name: "5. Studio Kueri SQL & Tebak Output",
      desc: `${totalSql} Tantangan Kueri Tabel SQL + ${totalOut} Soal Tebak Output Koding`,
      totalLabel: `${totalSql + totalOut} Soal`,
      doneCount: appState.currentSqlIndex > 0 ? appState.currentSqlIndex + 1 : 0,
      totalCount: totalSql + totalOut,
      hasUnlock: false
    },
    {
      key: "excel",
      tab: "excel-trainer",
      icon: "📊",
      name: "6. Studio Rumus Excel Dunia Nyata",
      desc: "155 Tantangan Simulator Spreadsheet + Workbook 200 Sheet (.xlsx)",
      totalLabel: `${totalExcel} Soal + 200 Sheet`,
      doneCount: doneExcel,
      totalCount: totalExcel,
      hasUnlock: true
    },
    {
      key: "shortcut_excel",
      tab: "shortcut-excel",
      icon: "⌨️",
      name: "7. Game Pintasan Keyboard Excel",
      desc: "Simulasi proyek kantor Excel Windows + 53 Pintasan Resmi",
      totalLabel: `${totalScExcel} Pintasan`,
      doneCount: totalScExcel,
      totalCount: totalScExcel,
      hasUnlock: false
    },
    {
      key: "shortcut_word",
      tab: "shortcut-word",
      icon: "📝",
      name: "8. Game Pintasan Keyboard Word",
      desc: "Simulasi dokumen A4 Word Windows + 55 Pintasan Resmi",
      totalLabel: `${totalScWord} Pintasan`,
      doneCount: totalScWord,
      totalCount: totalScWord,
      hasUnlock: false
    },
    {
      key: "it_tech",
      tab: "it-tech-trainer",
      icon: "🛠️",
      name: "9. Laboratorium IT Tech & Jaringan",
      desc: "CompTIA A+, Network+, Cisco CCNA, Security+ SY0-701, & Python Automate",
      totalLabel: `${totalItTech} Soal`,
      doneCount: doneItTech,
      totalCount: totalItTech,
      hasUnlock: true
    },
    {
      key: "english",
      tab: "english-trainer",
      icon: "🗣️",
      name: "10. English Studio (IELTS, TOEFL & Speaking)",
      desc: "Speaking Interview, Missing Letters, IELTS Academic, TOEFL iBT, & Dictation",
      totalLabel: `${totalEng} Tantangan`,
      doneCount: totalEng,
      totalCount: totalEng,
      hasUnlock: false
    },
    {
      key: "dictionary",
      tab: "dictionary",
      icon: "📖",
      name: "11. Kamus Pintar Bayi IT & Ebook PDF",
      desc: "1.000+ Istilah IT & Matematika dengan kutipan halaman buku resmi",
      totalLabel: `${totalDict} Istilah`,
      doneCount: totalDict,
      totalCount: totalDict,
      hasUnlock: false
    }
  ];

  // Persiapan Data untuk Sub-Tab 2 (Master Kunci Jawaban Semua Modul)
  const keyModFilter = appState.adminKeyModuleFilter || "ihsaniyah";
  const keySearch = (appState.adminKeySearchQuery || "").trim().toLowerCase();
  const rawKeys = getAdminNormalizedAnswerKeys(keyModFilter);
  const filteredKeys = rawKeys.filter(item => {
    if (!keySearch) return true;
    return (
      (item.title || "").toLowerCase().includes(keySearch) ||
      (item.question || "").toLowerCase().includes(keySearch) ||
      (item.answerKey || "").toLowerCase().includes(keySearch) ||
      (item.category || "").toLowerCase().includes(keySearch) ||
      (item.numberLabel || "").toLowerCase().includes(keySearch)
    );
  });
  const keyPageSize = 30;
  const totalKeyPages = Math.max(1, Math.ceil(filteredKeys.length / keyPageSize));
  const currentKeyPage = Math.min(totalKeyPages, Math.max(1, appState.adminKeyPage || 1));
  const pagedKeys = filteredKeys.slice((currentKeyPage - 1) * keyPageSize, currentKeyPage * keyPageSize);

  const keyModuleTabs = [
    { key: "ihsaniyah", label: `🎒 SD Ihsaniyah (${totalIhs})` },
    { key: "math", label: `📐 Cambridge Math (${totalMath})` },
    { key: "code", label: `💻 Koding Manual (${totalCode})` },
    { key: "sql", label: `🗄️ Studio SQL (${totalSql})` },
    { key: "output", label: `🔍 Tebak Output (${totalOut})` },
    { key: "excel", label: `📊 Rumus Excel (${totalExcel})` },
    { key: "shortcut_excel", label: `⌨️ Pintasan Excel (${totalScExcel})` },
    { key: "shortcut_word", label: `📝 Pintasan Word (${totalScWord})` },
    { key: "it_tech", label: `🛠️ IT Tech Lab (${totalItTech})` },
    { key: "english", label: `🗣️ English Interview (100)` },
    { key: "adventure", label: `🗺️ Petualangan (${totalLevels})` },
    { key: "all", label: `🌟 Semua Modul (${getAdminNormalizedAnswerKeys('all').length})` }
  ];

  container.innerHTML = `
    <!-- HEADER UTAMA MASTER ADMIN PANEL (SEMUA MODUL) -->
    <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.96), rgba(30, 41, 59, 0.98)); border: 2px solid #38bdf8; border-radius: 18px; padding: 22px; margin-bottom: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.35);">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
        <div style="display: flex; align-items: center; gap: 14px;">
          <div style="width: 60px; height: 60px; border-radius: 14px; background: linear-gradient(135deg, #0284c7, #2563eb); display: flex; align-items: center; justify-content: center; font-size: 2rem; border: 2px solid #7dd3fc;">
            🛠️
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <span style="font-size: 0.74rem; font-weight: 900; background: rgba(16, 185, 129, 0.2); color: #4ade80; padding: 3px 12px; border-radius: 999px; border: 1px solid #10b981;">
                🟢 TERAUTENTIKASI: ${currentSession.name} (${currentSession.role})
              </span>
              <span style="font-size: 0.78rem; font-weight: 800; color: #38bdf8;">
                KODI IT ACADEMY & SD IHSANIYAH • PUSAT KENDALI SELURUH 11 MODUL
              </span>
            </div>
            <h2 style="margin: 4px 0 2px; color: #fff; font-size: 1.35rem;">
              Master Admin Panel Terpadu (Semua Modul, Kunci Jawaban, & Rekap Nilai)
            </h2>
            <div style="font-size: 0.82rem; color: #cbd5e1;">
              Mengelola <strong>11 Modul Utama</strong> & <strong>${grandTotalItems.toLocaleString("id-ID")}+ Soal/Materi</strong>: Petualangan, SD Ihsaniyah, Math, Koding, SQL, Excel, Pintasan, IT Lab, English, & Kamus IT.
            </div>
          </div>
        </div>

        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="btn-primary" style="padding: 10px 14px; font-size: 0.82rem; font-weight: 800; background: linear-gradient(135deg, #059669, #10b981); border: none; border-radius: 10px; cursor: pointer;" onclick="adminUnlockModule('ALL')">
            🔓 Unlock 100% Semua Modul
          </button>
          <button class="btn-secondary" style="padding: 10px 14px; font-size: 0.82rem; font-weight: 800; color: #38bdf8; border: 1.5px solid rgba(56, 189, 248, 0.45); border-radius: 10px; cursor: pointer;" onclick="openChangePasswordModal()" title="Ubah kata sandi akun admin ini">
            🔑 Ganti Password
          </button>
          <button class="btn-secondary" style="padding: 10px 14px; font-size: 0.82rem; font-weight: 800; color: #f87171; border: 1.5px solid rgba(239, 68, 68, 0.5); border-radius: 10px; cursor: pointer;" onclick="logoutTeacherHandler()" title="Keluar dari sesi admin dan amankan kembali">
            🚪 Logout Admin
          </button>
          <button class="btn-secondary" style="padding: 10px 14px; font-size: 0.82rem; font-weight: 800; color: #fde047; border-radius: 10px; cursor: pointer;" onclick="exportFullAppBackupJSON()">
            💾 Backup Data (.json)
          </button>
        </div>
      </div>

      <!-- NAVIGASI 4 SUB-MENU MASTER ADMIN PANEL -->
      <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 18px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.1);">
        <button type="button" onclick="setAdminSubTab('all_modules')" style="padding: 10px 16px; border-radius: 10px; font-size: 0.86rem; font-weight: 800; cursor: pointer; border: ${activeSub === 'all_modules' ? '2px solid #38bdf8' : '1px solid rgba(255,255,255,0.15)'}; background: ${activeSub === 'all_modules' ? 'linear-gradient(135deg, #0284c7, #2563eb)' : 'rgba(15, 23, 42, 0.8)'}; color: #fff;">
          🌐 1. Overview & Kontrol Semua Modul (11 Modul)
        </button>
        <button type="button" onclick="setAdminSubTab('master_keys')" style="padding: 10px 16px; border-radius: 10px; font-size: 0.86rem; font-weight: 800; cursor: pointer; border: ${activeSub === 'master_keys' ? '2px solid #10b981' : '1px solid rgba(255,255,255,0.15)'}; background: ${activeSub === 'master_keys' ? 'linear-gradient(135deg, #059669, #10b981)' : 'rgba(15, 23, 42, 0.8)'}; color: #fff;">
          🔑 2. Master Kunci Jawaban Semua Modul (880+ Kunci)
        </button>
        <button type="button" onclick="setAdminSubTab('rekap')" style="padding: 10px 16px; border-radius: 10px; font-size: 0.86rem; font-weight: 800; cursor: pointer; border: ${activeSub === 'rekap' ? '2px solid #a855f7' : '1px solid rgba(255,255,255,0.15)'}; background: ${activeSub === 'rekap' ? 'linear-gradient(135deg, #7e22ce, #a855f7)' : 'rgba(15, 23, 42, 0.8)'}; color: #fff;">
          👩‍🏫 3. Rekap Nilai Siswa & Peserta (${allRecords.length})
        </button>
        <button type="button" onclick="setAdminSubTab('files')" style="padding: 10px 16px; border-radius: 10px; font-size: 0.86rem; font-weight: 800; cursor: pointer; border: ${activeSub === 'files' ? '2px solid #f59e0b' : '1px solid rgba(255,255,255,0.15)'}; background: ${activeSub === 'files' ? 'linear-gradient(135deg, #d97706, #f59e0b)' : 'rgba(15, 23, 42, 0.8)'}; color: #fff;">
          📦 4. Pusat Semua File (.xlsx / .docx) & Backup
        </button>
      </div>
    </div>

    <!-- =====================================================================
         SUB-TAB 1: OVERVIEW & KONTROL SEMUA 11 MODUL APLIKASI
         ===================================================================== -->
    ${activeSub === 'all_modules' ? `
      <div style="background: rgba(15, 23, 42, 0.95); border: 1.5px solid rgba(56, 189, 248, 0.35); border-radius: 18px; padding: 22px;">
        <!-- 4 Kartu KPI Global -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px; margin-bottom: 20px;">
          <div style="background: rgba(30, 41, 59, 0.85); border: 1.5px solid rgba(56, 189, 248, 0.3); border-radius: 14px; padding: 16px; text-align: center;">
            <div style="font-size: 0.78rem; color: #94a3b8; font-weight: 700;">Total Modul Pembelajaran</div>
            <div style="font-size: 1.65rem; font-weight: 900; color: #38bdf8; margin-top: 4px;">11 Modul Aktif</div>
            <div style="font-size: 0.75rem; color: #cbd5e1; margin-top: 2px;">Semua Kurikulum Terintegrasi</div>
          </div>
          <div style="background: rgba(30, 41, 59, 0.85); border: 1.5px solid rgba(16, 185, 129, 0.3); border-radius: 14px; padding: 16px; text-align: center;">
            <div style="font-size: 0.78rem; color: #94a3b8; font-weight: 700;">Total Bank Soal & Materi</div>
            <div style="font-size: 1.65rem; font-weight: 900; color: #4ade80; margin-top: 4px;">${grandTotalItems.toLocaleString("id-ID")}+ Item</div>
            <div style="font-size: 0.75rem; color: #cbd5e1; margin-top: 2px;">Lengkap dengan Kunci Jawaban</div>
          </div>
          <div style="background: rgba(30, 41, 59, 0.85); border: 1.5px solid rgba(245, 158, 11, 0.3); border-radius: 14px; padding: 16px; text-align: center;">
            <div style="font-size: 0.78rem; color: #94a3b8; font-weight: 700;">Profil & Bintang Aktif</div>
            <div style="font-size: 1.5rem; font-weight: 900; color: #fde047; margin-top: 4px;">⭐ ${appState.stars || 0} Bintang</div>
            <div style="font-size: 0.75rem; color: #cbd5e1; margin-top: 2px;">Peserta: ${appState.playerName || 'Siswa Hebat'}</div>
          </div>
          <div style="background: rgba(30, 41, 59, 0.85); border: 1.5px solid rgba(168, 85, 247, 0.3); border-radius: 14px; padding: 16px; text-align: center;">
            <div style="font-size: 0.78rem; color: #94a3b8; font-weight: 700;">Data Rekap Siswa Tercatat</div>
            <div style="font-size: 1.65rem; font-weight: 900; color: #c084fc; margin-top: 4px;">${allRecords.length} Siswa</div>
            <div style="font-size: 0.75rem; color: #cbd5e1; margin-top: 2px;">Rata-rata Skor: ${avgScore}/100</div>
          </div>
        </div>

        <!-- Baris Kontrol Profil Peserta Aktif & Master Unlock -->
        <div style="background: rgba(2, 6, 23, 0.65); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 14px; padding: 16px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
          <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
            <span style="font-size: 0.84rem; font-weight: 800; color: #38bdf8;">👤 Edit Profil & Bintang Aktif:</span>
            <input type="text" id="admin-profile-name-input" value="${(appState.playerName || 'Siswa Hebat').replace(/"/g, '&quot;')}" placeholder="Nama Peserta" style="padding: 8px 12px; border-radius: 8px; background: #0f172a; color: #fff; border: 1px solid #38bdf8; font-weight: 700; font-size: 0.85rem;">
            <input type="number" id="admin-profile-stars-input" value="${appState.stars || 0}" min="0" max="99999" style="width: 100px; padding: 8px 12px; border-radius: 8px; background: #0f172a; color: #fde047; border: 1px solid #f59e0b; font-weight: 800; font-size: 0.85rem;">
            <button type="button" onclick="adminUpdateActiveProfile()" style="background: #0284c7; color: #fff; border: none; border-radius: 8px; padding: 8px 14px; font-size: 0.82rem; font-weight: 800; cursor: pointer;">
              💾 Simpan Profil
            </button>
          </div>

          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <button type="button" onclick="adminUnlockModule('ALL')" style="background: rgba(16, 185, 129, 0.2); color: #4ade80; border: 1px solid #10b981; border-radius: 8px; padding: 8px 14px; font-size: 0.8rem; font-weight: 800; cursor: pointer;">
              🔓 Tandai Selesai 100% Semua Modul
            </button>
            <button type="button" onclick="adminResetModule('ALL')" style="background: rgba(239, 68, 68, 0.2); color: #fca5a5; border: 1px solid #ef4444; border-radius: 8px; padding: 8px 14px; font-size: 0.8rem; font-weight: 800; cursor: pointer;">
              🗑️ Reset Semua Progres Modul
            </button>
          </div>
        </div>

        <!-- Tabel Status & Kontrol Cepat Seluruh 11 Modul -->
        <h3 style="margin: 0 0 12px; color: #fff; font-size: 1.12rem;">📋 Tabel Kontrol & Status Seluruh 11 Modul Aplikasi</h3>
        <div style="overflow-x: auto; border-radius: 12px; border: 1px solid rgba(255,255,255,0.12);">
          <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; text-align: left;">
            <thead>
              <tr style="background: rgba(2, 132, 199, 0.25); color: #7dd3fc; border-bottom: 2px solid rgba(56, 189, 248, 0.4);">
                <th style="padding: 12px 10px;">Modul Pembelajaran</th>
                <th style="padding: 12px 10px;">Kapasitas Bank Soal</th>
                <th style="padding: 12px 10px;">Progres Saat Ini</th>
                <th style="padding: 12px 10px; text-align: center;">Aksi & Kontrol Admin</th>
              </tr>
            </thead>
            <tbody>
              ${moduleRows.map((m, idx) => {
                const pct = m.totalCount > 0 ? Math.min(100, Math.round((m.doneCount / m.totalCount) * 100)) : 100;
                return `
                  <tr style="border-bottom: 1px solid rgba(255,255,255,0.08); background: ${idx % 2 === 0 ? 'rgba(15, 23, 42, 0.6)' : 'rgba(30, 41, 59, 0.45)'};">
                    <td style="padding: 12px 10px;">
                      <div style="font-weight: 800; color: #fff; font-size: 0.94rem;">${m.icon} ${m.name}</div>
                      <div style="font-size: 0.78rem; color: #94a3b8; margin-top: 2px;">${m.desc}</div>
                    </td>
                    <td style="padding: 12px 10px; font-weight: 800; color: #fde047; white-space: nowrap;">
                      ${m.totalLabel}
                    </td>
                    <td style="padding: 12px 10px; min-width: 170px;">
                      <div style="display: flex; justify-content: space-between; font-size: 0.78rem; font-weight: 800; color: ${pct >= 100 ? '#4ade80' : '#38bdf8'}; margin-bottom: 4px;">
                        <span>${m.doneCount} / ${m.totalCount}</span>
                        <span>${pct}%</span>
                      </div>
                      <div style="height: 7px; background: rgba(255,255,255,0.1); border-radius: 999px; overflow: hidden;">
                        <div style="width: ${pct}%; height: 100%; background: linear-gradient(90deg, #38bdf8, #10b981);"></div>
                      </div>
                    </td>
                    <td style="padding: 12px 10px; text-align: center;">
                      <div style="display: flex; gap: 6px; justify-content: center; flex-wrap: wrap;">
                        <button type="button" onclick="switchTab('${m.tab}')" style="background: rgba(56, 189, 248, 0.2); color: #7dd3fc; border: 1px solid #38bdf8; border-radius: 7px; padding: 6px 10px; font-size: 0.76rem; font-weight: 800; cursor: pointer;">
                          🚀 Buka Modul
                        </button>
                        ${m.key !== 'dictionary' ? `
                          <button type="button" onclick="openAdminKeyForModule('${m.key}')" style="background: rgba(16, 185, 129, 0.2); color: #86efac; border: 1px solid #10b981; border-radius: 7px; padding: 6px 10px; font-size: 0.76rem; font-weight: 800; cursor: pointer;">
                            🔑 Kunci Jawaban
                          </button>
                        ` : ''}
                        ${m.hasUnlock ? `
                          <button type="button" onclick="adminUnlockModule('${m.key}')" style="background: rgba(245, 158, 11, 0.2); color: #fde047; border: 1px solid #f59e0b; border-radius: 7px; padding: 6px 10px; font-size: 0.76rem; font-weight: 800; cursor: pointer;">
                            ✅ Unlock 100%
                          </button>
                          <button type="button" onclick="adminResetModule('${m.key}')" style="background: rgba(239, 68, 68, 0.18); color: #fca5a5; border: 1px solid #ef4444; border-radius: 7px; padding: 6px 10px; font-size: 0.76rem; font-weight: 800; cursor: pointer;">
                            🔄 Reset
                          </button>
                        ` : ''}
                      </div>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    ` : ''}

    <!-- =====================================================================
         SUB-TAB 2: MASTER KUNCI JAWABAN SEMUA MODUL (ALL-MODULE ANSWER KEYS)
         ===================================================================== -->
    ${activeSub === 'master_keys' ? `
      <div style="background: rgba(15, 23, 42, 0.95); border: 1.5px solid rgba(16, 185, 129, 0.4); border-radius: 18px; padding: 22px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 14px;">
          <div>
            <h3 style="margin: 0; color: #4ade80; font-size: 1.22rem;">🔑 Master Kunci Jawaban & Solusi Resmi Semua Modul</h3>
            <p style="margin: 4px 0 0; font-size: 0.84rem; color: #cbd5e1;">
              Pilih modul di bawah untuk melihat kunci jawaban lengkap, rumus, kueri SQL, kode program, atau langsung klik <strong>"⚡ Buka & Isi Otomatis di Simulator"</strong>!
            </p>
          </div>
          <button type="button" onclick="exportAdminAnswerKeysCSV('${keyModFilter}')" style="background: linear-gradient(135deg, #059669, #10b981); color: #fff; border: none; border-radius: 10px; padding: 10px 16px; font-size: 0.82rem; font-weight: 800; cursor: pointer;">
            📥 Export Kunci Jawaban Modul Ini (.csv)
          </button>
        </div>

        <!-- Pilihan Tab Modul Kunci Jawaban -->
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.1);">
          ${keyModuleTabs.map(t => `
            <button type="button" onclick="setAdminKeyModuleFilter('${t.key}')" style="padding: 8px 13px; border-radius: 9px; font-size: 0.8rem; font-weight: 800; cursor: pointer; border: ${keyModFilter === t.key ? '2px solid #4ade80' : '1px solid rgba(255,255,255,0.15)'}; background: ${keyModFilter === t.key ? 'rgba(16, 185, 129, 0.25)' : 'rgba(2, 6, 23, 0.7)'}; color: ${keyModFilter === t.key ? '#fff' : '#cbd5e1'};">
              ${t.label}
            </button>
          `).join('')}
        </div>

        <!-- Bar Pencarian & Navigasi Halaman Kunci Jawaban -->
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px; background: rgba(2, 6, 23, 0.65); padding: 12px 16px; border-radius: 12px;">
          <div style="display: flex; align-items: center; gap: 10px; flex: 1; min-width: 240px;">
            <input type="text" value="${(appState.adminKeySearchQuery || '').replace(/"/g, '&quot;')}" placeholder="🔍 Cari nomor soal, kata kunci, rumus, atau jawaban..." oninput="setAdminKeySearchQuery(this.value)" style="width: 100%; max-width: 420px; padding: 9px 14px; border-radius: 8px; background: #0f172a; color: #fff; border: 1px solid #38bdf8; font-size: 0.86rem;">
            <span style="font-size: 0.82rem; color: #94a3b8; font-weight: 700;">
              Ditemukan: <strong style="color: #4ade80;">${filteredKeys.length} Soal</strong>
            </span>
          </div>

          ${totalKeyPages > 1 ? `
            <div style="display: flex; align-items: center; gap: 8px;">
              <button type="button" onclick="setAdminKeyPage(${currentKeyPage - 1})" ${currentKeyPage <= 1 ? 'disabled' : ''} style="padding: 6px 12px; border-radius: 8px; background: #1e293b; color: #fff; border: 1px solid rgba(255,255,255,0.2); cursor: pointer; font-weight: 800; font-size: 0.78rem;">◀ Prev</button>
              <span style="font-size: 0.82rem; font-weight: 800; color: #fde047;">Hal ${currentKeyPage} / ${totalKeyPages}</span>
              <button type="button" onclick="setAdminKeyPage(${currentKeyPage + 1})" ${currentKeyPage >= totalKeyPages ? 'disabled' : ''} style="padding: 6px 12px; border-radius: 8px; background: #1e293b; color: #fff; border: 1px solid rgba(255,255,255,0.2); cursor: pointer; font-weight: 800; font-size: 0.78rem;">Next ▶</button>
            </div>
          ` : ''}
        </div>

        <!-- Daftar Kartu Kunci Jawaban -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 14px;">
          ${pagedKeys.map((item) => `
            <div style="background: rgba(2, 6, 23, 0.75); border: 1.5px solid rgba(56, 189, 248, 0.28); border-radius: 14px; padding: 16px; display: flex; flex-direction: column; justify-content: space-between; gap: 10px;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; gap: 8px; margin-bottom: 6px; flex-wrap: wrap;">
                  <span style="font-size: 0.74rem; font-weight: 900; background: rgba(56, 189, 248, 0.2); color: #38bdf8; padding: 3px 10px; border-radius: 999px;">
                    ${item.modBadge} • ${item.numberLabel}
                  </span>
                  <span style="font-size: 0.72rem; color: #fde047; font-weight: 700;">
                    📂 ${escapeCodeHtml(item.category)}
                  </span>
                </div>
                <div style="font-weight: 800; color: #ffffff; font-size: 0.95rem; margin-bottom: 6px;">
                  ${escapeCodeHtml(item.title)}
                </div>
                <div style="font-size: 0.8rem; color: #cbd5e1; line-height: 1.45; margin-bottom: 10px; white-space: pre-wrap; max-height: 110px; overflow-y: auto; background: rgba(15,23,42,0.6); padding: 8px 10px; border-radius: 8px;">${escapeCodeHtml(item.question)}</div>
              </div>

              <div>
                <div style="background: rgba(16, 185, 129, 0.14); border: 1px solid rgba(16, 185, 129, 0.4); border-radius: 10px; padding: 10px 12px; margin-bottom: 8px;">
                  <div style="font-size: 0.72rem; font-weight: 800; color: #86efac; text-transform: uppercase;">🔑 Kunci Jawaban / Solusi Resmi:</div>
                  <pre style="font-size: 0.84rem; font-weight: 800; color: #ffffff; font-family: monospace; margin: 4px 0 0; white-space: pre-wrap; word-break: break-word;">${escapeCodeHtml(item.answerKey)}</pre>
                </div>
                <div style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 10px; line-height: 1.35;">
                  💡 ${escapeCodeHtml(item.explanation)}
                </div>
                <div style="display: flex; gap: 6px;">
                  <button type="button" onclick="jumpToModuleQuestionFromAdmin('${item.modKey}', ${item.idx}, false)" style="flex: 1; padding: 8px 10px; border-radius: 8px; background: rgba(56, 189, 248, 0.15); border: 1px solid #38bdf8; color: #7dd3fc; font-size: 0.76rem; font-weight: 800; cursor: pointer;">
                    👁️ Buka Soal
                  </button>
                  <button type="button" onclick="jumpToModuleQuestionFromAdmin('${item.modKey}', ${item.idx}, true)" style="flex: 1; padding: 8px 10px; border-radius: 8px; background: rgba(16, 185, 129, 0.2); border: 1px solid #10b981; color: #86efac; font-size: 0.76rem; font-weight: 800; cursor: pointer;">
                    ⚡ Buka & Isi Jawaban
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <!-- =====================================================================
         SUB-TAB 3: REKAP NILAI SISWA & MANAJEMEN PESERTA
         ===================================================================== -->
    ${activeSub === 'rekap' ? `
      <div style="background: rgba(15, 23, 42, 0.95); border: 1.5px solid rgba(168, 85, 247, 0.4); border-radius: 18px; padding: 22px;">
        <!-- 4 Kartu Statistik Nilai -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 14px; margin-bottom: 20px;">
          <div style="background: rgba(30, 41, 59, 0.85); border: 1.5px solid rgba(56, 189, 248, 0.3); border-radius: 14px; padding: 16px; text-align: center;">
            <div style="font-size: 0.8rem; color: #94a3b8; font-weight: 700;">Total Siswa / Peserta</div>
            <div style="font-size: 1.7rem; font-weight: 900; color: #fff; margin-top: 4px;">${allRecords.length} Peserta</div>
          </div>
          <div style="background: rgba(30, 41, 59, 0.85); border: 1.5px solid rgba(56, 189, 248, 0.3); border-radius: 14px; padding: 16px; text-align: center;">
            <div style="font-size: 0.8rem; color: #94a3b8; font-weight: 700;">Rata-Rata Nilai</div>
            <div style="font-size: 1.7rem; font-weight: 900; color: #38bdf8; margin-top: 4px;">${avgScore} / 100</div>
          </div>
          <div style="background: rgba(30, 41, 59, 0.85); border: 1.5px solid rgba(16, 185, 129, 0.3); border-radius: 14px; padding: 16px; text-align: center;">
            <div style="font-size: 0.8rem; color: #94a3b8; font-weight: 700;">Nilai Tertinggi</div>
            <div style="font-size: 1.7rem; font-weight: 900; color: #4ade80; margin-top: 4px;">${highestScore} / 100</div>
          </div>
          <div style="background: rgba(30, 41, 59, 0.85); border: 1.5px solid rgba(245, 158, 11, 0.3); border-radius: 14px; padding: 16px; text-align: center;">
            <div style="font-size: 0.8rem; color: #94a3b8; font-weight: 700;">Peserta Tuntas (≥ 70)</div>
            <div style="font-size: 1.7rem; font-weight: 900; color: #fde047; margin-top: 4px;">${passedCount} Peserta</div>
          </div>
        </div>

        <!-- Form Tambah Nilai Siswa / Peserta Manual oleh Admin -->
        <div style="background: rgba(2, 6, 23, 0.65); border: 1px solid rgba(168, 85, 247, 0.3); border-radius: 12px; padding: 14px 16px; margin-bottom: 16px;">
          <div style="font-size: 0.82rem; font-weight: 800; color: #c084fc; margin-bottom: 8px;">➕ Input / Tambah Data Nilai Peserta Secara Manual:</div>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
            <input type="text" id="admin-manual-name" placeholder="Nama Lengkap Siswa / Peserta" style="flex: 1; min-width: 180px; padding: 8px 12px; border-radius: 8px; background: #0f172a; color: #fff; border: 1px solid rgba(255,255,255,0.2); font-size: 0.84rem;">
            <select id="admin-manual-class" style="padding: 8px 12px; border-radius: 8px; background: #0f172a; color: #fff; border: 1px solid rgba(255,255,255,0.2); font-size: 0.84rem; font-weight: 700;">
              <option value="Kelas 2A">Kelas 2A</option>
              <option value="Kelas 2B">Kelas 2B</option>
              <option value="Kelas 2C">Kelas 2C</option>
              <option value="Kelas 3A">Kelas 3A</option>
              <option value="Kelas 3B">Kelas 3B</option>
              <option value="Kelas 3C">Kelas 3C</option>
              <option value="Peserta Umum / IT">Peserta Umum / IT</option>
            </select>
            <input type="number" id="admin-manual-num" placeholder="No Absen" value="1" min="1" max="99" style="width: 85px; padding: 8px 10px; border-radius: 8px; background: #0f172a; color: #fff; border: 1px solid rgba(255,255,255,0.2); font-size: 0.84rem;">
            <input type="number" id="admin-manual-score" placeholder="Nilai (0-100)" value="95" min="0" max="100" style="width: 110px; padding: 8px 10px; border-radius: 8px; background: #0f172a; color: #4ade80; border: 1px solid #10b981; font-weight: 800; font-size: 0.84rem;">
            <button type="button" onclick="adminAddManualRecord()" style="background: linear-gradient(135deg, #7e22ce, #a855f7); color: #fff; border: none; border-radius: 8px; padding: 9px 16px; font-size: 0.82rem; font-weight: 800; cursor: pointer;">
              ➕ Simpan ke Tabel Rekap
            </button>
          </div>
        </div>

        <!-- Baris Filter Kelas, Pencarian, & Simulasi Data -->
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px; background: rgba(2, 6, 23, 0.6); padding: 12px 16px; border-radius: 12px;">
          <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
            <label style="font-size: 0.82rem; font-weight: 800; color: #38bdf8;">Filter Kelas / Kategori:</label>
            <select onchange="setAdminClassFilter(this.value)" style="padding: 8px 12px; border-radius: 8px; background: #0f172a; color: #fff; border: 1px solid #38bdf8; font-weight: 700;">
              <option value="all" ${clsFilter === 'all' ? 'selected' : ''}>Semua Kelas (${allRecords.length})</option>
              ${['Kelas 2A', 'Kelas 2B', 'Kelas 2C', 'Kelas 3A', 'Kelas 3B', 'Kelas 3C', 'Peserta Umum / IT'].map(c => `
                <option value="${c}" ${clsFilter === c ? 'selected' : ''}>${c}</option>
              `).join('')}
            </select>
            <input type="text" value="${(appState.adminSearchQuery || '').replace(/"/g, '&quot;')}" placeholder="🔍 Cari nama siswa / absen..." oninput="setAdminSearchQuery(this.value)" style="padding: 8px 14px; border-radius: 8px; background: #0f172a; color: #fff; border: 1px solid rgba(148,163,184,0.4); font-size: 0.85rem; min-width: 210px;">
          </div>

          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <button type="button" onclick="window.exportIhsaniyahCSV && window.exportIhsaniyahCSV()" style="background: rgba(16, 185, 129, 0.2); color: #86efac; border: 1px solid #10b981; border-radius: 8px; padding: 8px 14px; font-size: 0.8rem; font-weight: 800; cursor: pointer;">
              📥 Download Rekap CSV / Excel
            </button>
            <button type="button" onclick="seedDemoStudentRecords()" style="background: rgba(56, 189, 248, 0.18); color: #7dd3fc; border: 1px solid #38bdf8; border-radius: 8px; padding: 8px 14px; font-size: 0.8rem; font-weight: 800; cursor: pointer;">
              🧪 + Muat Contoh Data Siswa
            </button>
            <button type="button" onclick="clearIhsaniyahRecordsHandler()" style="background: rgba(239, 68, 68, 0.2); color: #fca5a5; border: 1px solid #ef4444; border-radius: 8px; padding: 8px 14px; font-size: 0.8rem; font-weight: 800; cursor: pointer;">
              🗑️ Reset Tabel
            </button>
          </div>
        </div>

        <!-- Tabel Rekap Nilai Siswa -->
        <div style="overflow-x: auto; border-radius: 12px; border: 1px solid rgba(255,255,255,0.12);">
          <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; text-align: left;">
            <thead>
              <tr style="background: rgba(2, 132, 199, 0.25); color: #7dd3fc; border-bottom: 2px solid rgba(56, 189, 248, 0.4);">
                <th style="padding: 12px 10px;">No</th>
                <th style="padding: 12px 10px;">Waktu Update</th>
                <th style="padding: 12px 10px;">Nama Lengkap Siswa / Peserta</th>
                <th style="padding: 12px 10px;">Kelas / Divisi</th>
                <th style="padding: 12px 10px;">Absen</th>
                <th style="padding: 12px 10px;">Soal Dijawab</th>
                <th style="padding: 12px 10px;">Jawaban Benar</th>
                <th style="padding: 12px 10px;">Nilai Akhir</th>
                <th style="padding: 12px 10px;">Status</th>
                <th style="padding: 12px 10px; text-align: center;">Aksi</th>
              </tr>
            </thead>
            <tbody>
              ${filteredRecords.length ? filteredRecords.map((r, idx) => {
                const sKey = r.sessionId || `${r.studentName}_${r.studentClass}_${r.studentNumber}`;
                return `
                  <tr style="border-bottom: 1px solid rgba(255,255,255,0.08); background: ${idx % 2 === 0 ? 'rgba(15, 23, 42, 0.6)' : 'rgba(30, 41, 59, 0.45)'};">
                    <td style="padding: 12px 10px; font-weight: 800; color: #94a3b8;">${idx + 1}</td>
                    <td style="padding: 12px 10px; color: #cbd5e1; font-size: 0.82rem;">${r.date || '-'} ${r.time || ''}</td>
                    <td style="padding: 12px 10px; font-weight: 800; color: #ffffff;">${r.studentName || '-'}</td>
                    <td style="padding: 12px 10px; color: #bae6fd; font-weight: 700;">${r.studentClass || '-'}</td>
                    <td style="padding: 12px 10px; font-family: monospace; font-weight: 800; color: #fde047;">#${r.studentNumber || '-'}</td>
                    <td style="padding: 12px 10px; font-weight: 800; color: #38bdf8;">${r.answeredCount !== undefined ? r.answeredCount : (r.correctCount || 0)} / ${r.totalQuestions || 27}</td>
                    <td style="padding: 12px 10px; font-weight: 800; color: #4ade80;">${r.correctCount || 0} / ${r.totalQuestions || 27}</td>
                    <td style="padding: 12px 10px; font-weight: 900; font-size: 1.1rem; color: ${(r.score || 0) >= 70 ? '#4ade80' : '#f59e0b'};">${r.score || 0}</td>
                    <td style="padding: 12px 10px;">
                      <span style="font-size: 0.76rem; font-weight: 800; padding: 4px 10px; border-radius: 999px; background: ${(r.score || 0) >= 70 ? 'rgba(16, 185, 129, 0.2)' : 'rgba(245, 158, 11, 0.2)'}; color: ${(r.score || 0) >= 70 ? '#86efac' : '#fde68a'};">
                        ${r.status || 'Sedang Mengerjakan'}
                      </span>
                    </td>
                    <td style="padding: 12px 10px; text-align: center;">
                      <button type="button" onclick="deleteSingleStudentRecord('${sKey.replace(/'/g, "\\'")}')" style="background: rgba(239,68,68,0.2); color: #fca5a5; border: 1px solid #ef4444; border-radius: 6px; padding: 4px 8px; font-size: 0.75rem; cursor: pointer;">🗑️ Hapus</button>
                    </td>
                  </tr>
                `;
              }).join('') : `
                <tr>
                  <td colspan="10" style="text-align: center; padding: 36px 20px; color: #94a3b8;">
                    <div style="font-size: 2rem; margin-bottom: 8px;">📭</div>
                    <div style="font-size: 0.95rem; font-weight: 700; color: #e2e8f0; margin-bottom: 6px;">Belum Ada Data Siswa di Perangkat Ini</div>
                    <div style="font-size: 0.82rem; margin-bottom: 14px;">Anda dapat mengisi form manual di atas atau klik tombol di bawah untuk memuat contoh simulasi rekap nilai:</div>
                    <button type="button" onclick="seedDemoStudentRecords()" style="background: linear-gradient(135deg, #0284c7, #2563eb); color: #fff; border: none; border-radius: 8px; padding: 9px 18px; font-size: 0.84rem; font-weight: 800; cursor: pointer;">
                      🧪 Muat 3 Contoh Data Siswa (Simulasi Tabel Rekap)
                    </button>
                  </td>
                </tr>
              `}
            </tbody>
          </table>
        </div>
      </div>
    ` : ''}

    <!-- =====================================================================
         SUB-TAB 4: PUSAT SEMUA FILE LATIHAN (.XLSX & .DOCX) & BACKUP DATABASE
         ===================================================================== -->
    ${activeSub === 'files' ? `
      <div style="background: rgba(15, 23, 42, 0.95); border: 1.5px solid rgba(245, 158, 11, 0.4); border-radius: 18px; padding: 22px;">
        <h3 style="margin: 0 0 6px; color: #fde047; font-size: 1.2rem;">📦 1. Paket Workbook Rumus Excel & Kunci Jawaban (Sheet 99_KUNCI_JAWABAN)</h3>
        <p style="margin: 0 0 16px; font-size: 0.84rem; color: #cbd5e1; line-height: 1.5;">
          Setiap file Excel (<code>.xlsx</code>) di bawah memiliki <strong>1 Contoh Soal & Jawaban Benar</strong> pada tiap sheet rumus, diikuti <strong>5 Soal Tes Tanpa Bocoran Jawaban</strong>, serta <strong>Kunci Jawaban Lengkap di Sheet Paling Terakhir (<code>99_KUNCI_JAWABAN</code>)</strong>:
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(265px, 1fr)); gap: 14px; margin-bottom: 26px;">
          <a href="assets/downloads/Accounting_Work_Simulation_PT_Maju_Bersama.xlsx" download style="text-decoration: none; background: rgba(2, 6, 23, 0.75); border: 2px solid #38bdf8; border-radius: 14px; padding: 16px; display: block; box-shadow: 0 4px 14px rgba(56, 189, 248, 0.2);">
            <div style="font-size: 0.75rem; font-weight: 900; color: #38bdf8;">💼 SIMULASI KERJA AKUNTANSI & INTERVIEW</div>
            <div style="font-size: 1rem; font-weight: 800; color: #fff; margin: 4px 0;">Siklus Akuntansi PT Maju Bersama (.xlsx)</div>
            <div style="font-size: 0.78rem; color: #94a3b8; margin-bottom: 10px;">12 Sheet Lengkap: Faktur Pajak PPN 11%, Jurnal Umum, Buku Besar, AJP SLN Depresiasi, Kertas Kerja, Lap Keu & Kunci Akhir.</div>
            <span style="display: inline-block; background: #38bdf8; color: #0f172a; font-weight: 900; font-size: 0.78rem; padding: 6px 12px; border-radius: 8px;">📥 Download Simulasi Akuntansi (.xlsx)</span>
          </a>

          <a href="assets/downloads/Master_160_Rumus_Excel_Dunia_Nyata.xlsx" download style="text-decoration: none; background: rgba(2, 6, 23, 0.75); border: 2px solid #10b981; border-radius: 14px; padding: 16px; display: block;">
            <div style="font-size: 0.75rem; font-weight: 900; color: #4ade80;">📊 MASTER WORKBOOK LENGKAP</div>
            <div style="font-size: 1rem; font-weight: 800; color: #fff; margin: 4px 0;">Master 160+ Rumus Excel Dunia Nyata (.xlsx)</div>
            <div style="font-size: 0.78rem; color: #94a3b8; margin-bottom: 10px;">Berisi seluruh sheet rumus + 5 soal tes per rumus + Sheet 99_KUNCI_JAWABAN di akhir.</div>
            <span style="display: inline-block; background: #10b981; color: #0f172a; font-weight: 900; font-size: 0.78rem; padding: 6px 12px; border-radius: 8px;">📥 Download Master (.xlsx)</span>
          </a>

          <a href="assets/downloads/Paket_1_Rumus_Matematika_Akuntansi_Logika.xlsx" download style="text-decoration: none; background: rgba(2, 6, 23, 0.75); border: 1.5px solid #38bdf8; border-radius: 14px; padding: 16px; display: block;">
            <div style="font-size: 0.75rem; font-weight: 900; color: #38bdf8;">📘 PAKET 1</div>
            <div style="font-size: 1rem; font-weight: 800; color: #fff; margin: 4px 0;">Rumus Matematika, Akuntansi & Logika (.xlsx)</div>
            <div style="font-size: 0.78rem; color: #94a3b8; margin-bottom: 10px;">Lengkap dengan Sheet 99_KUNCI_JAWABAN di bagian paling akhir workbook.</div>
            <span style="display: inline-block; background: #38bdf8; color: #0f172a; font-weight: 900; font-size: 0.78rem; padding: 6px 12px; border-radius: 8px;">📥 Download Paket 1</span>
          </a>

          <a href="assets/downloads/Paket_2_Rumus_Lookup_Teks_Tanggal_HRD.xlsx" download style="text-decoration: none; background: rgba(2, 6, 23, 0.75); border: 1.5px solid #a855f7; border-radius: 14px; padding: 16px; display: block;">
            <div style="font-size: 0.75rem; font-weight: 900; color: #c084fc;">🟣 PAKET 2</div>
            <div style="font-size: 1rem; font-weight: 800; color: #fff; margin: 4px 0;">Rumus Lookup, Teks, Tanggal & HRD (.xlsx)</div>
            <div style="font-size: 0.78rem; color: #94a3b8; margin-bottom: 10px;">Lengkap dengan Sheet 99_KUNCI_JAWABAN di bagian paling akhir workbook.</div>
            <span style="display: inline-block; background: #a855f7; color: #fff; font-weight: 900; font-size: 0.78rem; padding: 6px 12px; border-radius: 8px;">📥 Download Paket 2</span>
          </a>

          <a href="assets/downloads/Paket_3_Rumus_Keuangan_Audit_Statistika_Lengkap.xlsx" download style="text-decoration: none; background: rgba(2, 6, 23, 0.75); border: 1.5px solid #f59e0b; border-radius: 14px; padding: 16px; display: block;">
            <div style="font-size: 0.75rem; font-weight: 900; color: #fde047;">🟠 PAKET 3</div>
            <div style="font-size: 1rem; font-weight: 800; color: #fff; margin: 4px 0;">Rumus Keuangan, Audit & Statistika (.xlsx)</div>
            <div style="font-size: 0.78rem; color: #94a3b8; margin-bottom: 10px;">Lengkap dengan Sheet 99_KUNCI_JAWABAN di bagian paling akhir workbook.</div>
            <span style="display: inline-block; background: #f59e0b; color: #0f172a; font-weight: 900; font-size: 0.78rem; padding: 6px 12px; border-radius: 8px;">📥 Download Paket 3</span>
          </a>

          <a href="assets/downloads/Paket_4_Khusus_95_Rumus_Statistika_Lengkap.xlsx" download style="text-decoration: none; background: rgba(2, 6, 23, 0.75); border: 1.5px solid #ec4899; border-radius: 14px; padding: 16px; display: block;">
            <div style="font-size: 0.75rem; font-weight: 900; color: #f472b6;">📈 PAKET 4 KHUSUS STATISTIKA</div>
            <div style="font-size: 1rem; font-weight: 800; color: #fff; margin: 4px 0;">95 Rumus Statistika & Analisis Data (.xlsx)</div>
            <div style="font-size: 0.78rem; color: #94a3b8; margin-bottom: 10px;">Lengkap dengan Sheet 99_KUNCI_JAWABAN di bagian paling akhir workbook.</div>
            <span style="display: inline-block; background: #ec4899; color: #fff; font-weight: 900; font-size: 0.78rem; padding: 6px 12px; border-radius: 8px;">📥 Download Paket 4</span>
          </a>
        </div>

        <h3 style="margin: 0 0 8px; color: #38bdf8; font-size: 1.15rem;">⌨️ 2. File Praktik Pintasan Keyboard Excel (.xlsx) & Microsoft Word (.docx)</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px;">
          <a href="assets/downloads/Modul_Praktik_Pintasan_Excel_Lengkap.xlsx" download style="text-decoration: none; background: rgba(2, 6, 23, 0.75); border: 1px solid #38bdf8; border-radius: 12px; padding: 14px; display: block;">
            <div style="font-weight: 800; color: #fff; font-size: 0.92rem;">⌨️ Modul Praktik Pintasan Excel Lengkap (.xlsx)</div>
            <div style="font-size: 0.76rem; color: #94a3b8; margin: 4px 0 8px;">Latihan langsung 53 pintasan keyboard di aplikasi Microsoft Excel.</div>
            <span style="font-size: 0.76rem; font-weight: 800; color: #38bdf8;">📥 Download .xlsx</span>
          </a>
          <a href="assets/downloads/Modul_Praktik_Pintasan_Word_Lengkap.docx" download style="text-decoration: none; background: rgba(2, 6, 23, 0.75); border: 1px solid #38bdf8; border-radius: 12px; padding: 14px; display: block;">
            <div style="font-weight: 800; color: #fff; font-size: 0.92rem;">📝 Modul Praktik Pintasan Word Lengkap (.docx)</div>
            <div style="font-size: 0.76rem; color: #94a3b8; margin: 4px 0 8px;">Latihan langsung 55 pintasan keyboard di aplikasi Microsoft Word.</div>
            <span style="font-size: 0.76rem; font-weight: 800; color: #38bdf8;">📥 Download .docx</span>
          </a>
          <a href="assets/downloads/Audit_Payroll_Staff_2026.xlsx" download style="text-decoration: none; background: rgba(2, 6, 23, 0.75); border: 1px solid rgba(255,255,255,0.18); border-radius: 12px; padding: 14px; display: block;">
            <div style="font-weight: 800; color: #fff; font-size: 0.92rem;">💼 Proyek Excel: Audit Payroll Staff 2026 (.xlsx)</div>
            <div style="font-size: 0.76rem; color: #94a3b8; margin: 4px 0 8px;">Simulasi dokumen penggajian HRD.</div>
            <span style="font-size: 0.76rem; font-weight: 800; color: #4ade80;">📥 Download .xlsx</span>
          </a>
          <a href="assets/downloads/Laporan_Eksekutif_Q1_2026.docx" download style="text-decoration: none; background: rgba(2, 6, 23, 0.75); border: 1px solid rgba(255,255,255,0.18); border-radius: 12px; padding: 14px; display: block;">
            <div style="font-weight: 800; color: #fff; font-size: 0.92rem;">📄 Proyek Word: Laporan Eksekutif Q1 (.docx)</div>
            <div style="font-size: 0.76rem; color: #94a3b8; margin: 4px 0 8px;">Simulasi dokumen laporan direksi.</div>
            <span style="font-size: 0.76rem; font-weight: 800; color: #4ade80;">📥 Download .docx</span>
          </a>
        </div>
      </div>
    ` : ''}
  `;
}



// ================= SVG MATCHING LINES DRAWING ENGINE =================
window.drawAllMatchingLines = function(q, matched) {
  const svgEl = document.getElementById("matching-svg-canvas");
  const wrapperEl = document.getElementById("matching-canvas-wrapper");
  if (!svgEl || !wrapperEl || !q || !q.pairs) return;

  svgEl.innerHTML = "";
  const wrapRect = wrapperEl.getBoundingClientRect();

  const colorPalette = {
    t1: "#38bdf8",
    t2: "#10b981",
    t3: "#f59e0b",
    t4: "#a855f7",
    t5: "#f43f5e"
  };

  Object.keys(matched).forEach(leftId => {
    const rightId = matched[leftId];
    const pinLeft = document.getElementById("pin-left-" + leftId);
    const pinRight = document.getElementById("pin-right-" + rightId);

    if (pinLeft && pinRight) {
      const rectL = pinLeft.getBoundingClientRect();
      const rectR = pinRight.getBoundingClientRect();

      const x1 = rectL.right - wrapRect.left;
      const y1 = rectL.top + (rectL.height / 2) - wrapRect.top;
      const x2 = rectR.left - wrapRect.left;
      const y2 = rectR.top + (rectR.height / 2) - wrapRect.top;

      const dx = x2 - x1;
      const cx1 = x1 + (dx * 0.45);
      const cy1 = y1;
      const cx2 = x2 - (dx * 0.45);
      const cy2 = y2;

      const lineColor = colorPalette[leftId] || "#10b981";

      const pathEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathEl.setAttribute("d", `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`);
      pathEl.setAttribute("stroke", lineColor);
      pathEl.setAttribute("class", "matching-curve-line");
      svgEl.appendChild(pathEl);

      const circ1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circ1.setAttribute("cx", x1);
      circ1.setAttribute("cy", y1);
      circ1.setAttribute("r", "5");
      circ1.setAttribute("fill", lineColor);
      svgEl.appendChild(circ1);

      const circ2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circ2.setAttribute("cx", x2);
      circ2.setAttribute("cy", y2);
      circ2.setAttribute("r", "5");
      circ2.setAttribute("fill", lineColor);
      svgEl.appendChild(circ2);
    }
  });
};

window.resetIhsMatchingLines = function(qid) {
  if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();
  if (appState.ihsUserAnswers[qid]) {
    appState.ihsUserAnswers[qid].matchedPairs = {};
  }
  appState.matchingSelectedShirt = null;
  syncIhsaniyahProgressToRecords(false);
  renderIhsaniyahTest();
};

window.addEventListener("resize", () => {
  const q = window.IHSANIYAH_QUESTIONS && window.IHSANIYAH_QUESTIONS[appState.currentIhsIndex];
  if (q && q.type === "matching_game") {
    const ans = appState.ihsUserAnswers[q.id] || {};
    window.drawAllMatchingLines && window.drawAllMatchingLines(q, ans.matchedPairs || {});
  }
});
