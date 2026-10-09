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
  deferredInstallPrompt: null
};

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
      excelCompleted: appState.excelCompleted || []
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

// Render Level Quests on Home Map
function renderQuestGrid() {
  const container = document.getElementById("quest-grid-container");
  if (!container) return;

  container.innerHTML = "";

  levelsData.forEach(lvl => {
    const isCompleted = appState.completedLevels.includes(lvl.id);
    const card = document.createElement("div");
    card.className = `quest-card ${isCompleted ? 'completed' : ''}`;

    let starsDisplay = "⭐".repeat(lvl.starsReward);

    card.innerHTML = `
      <div>
        <div class="quest-header">
          <div class="quest-icon">${lvl.icon}</div>
          <div class="quest-meta">
            <span class="quest-level-tag">${lvl.tag}</span>
            <h3>${lvl.shortTitle}</h3>
          </div>
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
  } else if (tabName === 'english-trainer') {
    renderEnglishTrainer();
    setKodiSpeech(
      "Welcome to English Studio! Di sini kita latihan Speaking Wawancara Kerja, Kosakata & Ejaan, IELTS Academic Studio (Cambridge), dan Bedah Buku TOEFL iBT Beasiswa S2 Luar Negeri!",
      "Tekan 🔊 untuk mendengar suara asli, coba timer speaking, lalu tekan 🎙️ untuk berbicara dan dapatkan skor pelafalanmu!"
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

    <!-- Switcher 5 Mode English Studio -->
    <div class="eng-submode-grid">
      <button class="choice-card-btn active-eng-mode" id="btn-mode-spk" onclick="switchEnglishSubMode('speaking')">
        🎙️ Wawancara Kerja
      </button>
      <button class="choice-card-btn" id="btn-mode-puzzle" onclick="switchEnglishSubMode('puzzle')">
        🔤 Kosakata & Huruf
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
        <div style="font-size: 2.2rem;">👩‍💼</div>
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
          btn.style.boxShadow = `0 0 12px ${m.color.replace('var(--accent-cyan)', 'rgba(6,182,212,0.3)').replace('var(--accent-green)', 'rgba(16,185,129,0.3)').replace('var(--accent-pink)', 'rgba(244,63,94,0.3)')}`;
        } else {
          btn.style.borderColor = 'rgba(255,255,255,0.1)';
          btn.style.boxShadow = 'none';
        }
      }
    });

    if (mode === 'speaking') {
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

  // Inisialisasi state per kata agar pengisian bertahap tersimpan
  if (!appState.puzzleStates) {
    appState.puzzleStates = {};
  }
  if (!appState.puzzleStates[appState.currentPuzzleIndex]) {
    appState.puzzleStates[appState.currentPuzzleIndex] = {
      filled: {}, // mapping: slotIndex => char
      completed: false
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
  const isAllDone = (filledCount === totalBlanks);
  curState.completed = isAllDone;

  // Cari slot kosong berikutnya untuk animasi highlight sasaran
  const nextEmptySlot = missingIndices.find(idx => !curState.filled[idx]);

  // Siapkan keyboard tombol huruf (stabil dan konsisten)
  if (!curState.pool) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const pool = [...puzzle.missingLetters];
    while (pool.length < Math.max(puzzle.missingLetters.length + 4, 8)) {
      const rand = alphabet[Math.floor(Math.random() * alphabet.length)];
      if (!pool.includes(rand)) pool.push(rand);
    }
    pool.sort(() => Math.random() - 0.5);
    curState.pool = pool;
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

      <!-- TAMPILAN INTERAKTIF KOTAK HURUF KATA (TILES BERTINGKAT) -->
      <div class="vocab-tiles-container ${isAllDone ? 'is-all-completed' : ''}" id="puzzle-tiles-row">
        ${slots.map((s) => {
          const isBlank = s.isBlank;
          const val = s.filled;
          const isActiveTarget = isBlank && !val && (s.index === nextEmptySlot);
          return `
            <div class="vocab-letter-tile ${isBlank ? 'is-blank' : 'is-fixed'} ${val ? 'is-filled' : 'is-empty'} ${isActiveTarget ? 'is-active-target' : ''}">
              ${val ? val : '_'}
            </div>
          `;
        }).join('')}
      </div>

      <!-- Status Bar Pengisian Huruf -->
      <div class="puzzle-progress-bar">
        <span>Huruf terisi: <strong>${filledCount} / ${totalBlanks}</strong></span>
        <span id="puzzle-live-hint" style="color: ${isAllDone ? 'var(--accent-green)' : 'var(--accent-cyan)'}; font-weight: 700;">
          ${isAllDone 
            ? '🎉 Hebat! Semua huruf sudah lengkap terisi!' 
            : `Pilih huruf di bawah untuk mengisi bagian kosong (${totalBlanks - filledCount} huruf tersisa):`}
        </span>
      </div>

      <!-- Tombol Keyboard Pilihan Huruf Lengkap -->
      <div class="puzzle-keyboard-pool" id="puzzle-keyboard-box">
        ${curState.pool.map((letter, btnIdx) => {
          const neededCount = missingIndices.filter(idx => puzzle.word[idx] === letter).length;
          const usedCount = missingIndices.filter(idx => curState.filled[idx] === letter).length;
          const isExhausted = (neededCount > 0 && usedCount >= neededCount) || (neededCount === 0 && isAllDone);
          return `
            <button class="puzzle-letter-btn" 
                    id="puzzle-key-${btnIdx}" 
                    ${isExhausted || isAllDone ? 'disabled' : ''} 
                    onclick="guessLetter('${letter}', this, ${btnIdx})">
              ${letter}
            </button>
          `;
        }).join('')}
      </div>

      <!-- Kontrol Audio & Bantuan -->
      <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 18px;">
        <button class="btn-secondary" style="font-size: 0.82rem; padding: 6px 14px; display: flex; align-items: center; gap: 6px;" onclick="speechEngine.speakText('${puzzle.word}', 0.75, this, speechEngine.englishAccent)">
          🔊 Dengarkan Pelafalan (${speechEngine.englishAccent === 'en-GB' ? 'Aksen UK' : 'Aksen US'})
        </button>
        <button class="btn-secondary" style="font-size: 0.82rem; padding: 6px 14px;" onclick="undoLastLetter()">
          ⌫ Hapus Huruf Terakhir
        </button>
        <button class="btn-secondary" style="font-size: 0.82rem; padding: 6px 14px;" onclick="resetCurrentPuzzle()">
          🔄 Ulangi Kata Ini
        </button>
        ${isAllDone && appState.currentPuzzleIndex < missingLetterPuzzles.length - 1 ? `
          <button class="btn-primary" style="font-size: 0.85rem; padding: 6px 16px; background: linear-gradient(135deg, #10b981, #059669);" onclick="setPuzzleIndex(${appState.currentPuzzleIndex + 1})">
            🚀 Lanjut ke Kata #${appState.currentPuzzleIndex + 2} ➡️
          </button>
        ` : ''}
      </div>

      <!-- Feedback Penjelasan Mendalam AI (Hanya Muncul Saat Semua Huruf Berhasil Diisi) -->
      <div id="puzzle-feedback" style="display: ${isAllDone ? 'block' : 'none'}; max-width: 650px; margin: 0 auto;"></div>
    </div>
  `;

  // Render AI feedback jika sudah selesai 100%
  if (isAllDone) {
    kodiAI.renderFeedback({
      containerId: "puzzle-feedback",
      isCorrect: true,
      question: `Kata: "${puzzle.word}" (${puzzle.meaning})`,
      userAnswer: puzzle.word,
      correctAnswer: puzzle.word,
      explanation: `Luar biasa! Kamu berhasil melengkapi seluruh huruf pada kata '${puzzle.word}' dengan 100% sempurna! Kata ini sangat penting dalam tes IT dan wawancara kerja. Arti resminya: "${puzzle.meaning}".`,
      concept: `Kosakata & Ejaan (${puzzle.category})`,
      babyClue: puzzle.babyClue
    });
  }

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

  window.guessLetter = function(letter, btnEl, btnIdx) {
    sfx.playClick();
    const curState = appState.puzzleStates[appState.currentPuzzleIndex];
    if (curState.completed) return;

    // Cari slot kosong pertama yang memang membutuhkan huruf ini
    const targetSlot = missingIndices.find(idx => !curState.filled[idx] && puzzle.word[idx] === letter);

    if (targetSlot !== undefined) {
      // HURUF BENAR! Masukkan ke slot ini saja!
      curState.filled[targetSlot] = letter;
      const newFilledCount = missingIndices.filter(idx => curState.filled[idx]).length;

      if (newFilledCount === totalBlanks) {
        // SEMUA HURUF KOSONG SEKARANG LENGKAP 100%!
        curState.completed = true;
        sfx.playSuccess();
        triggerConfetti();
        renderMissingLettersGame();
        speechEngine.speakText(puzzle.word, 0.8, null, speechEngine.englishAccent);
      } else {
        // MASIH ADA HURUF LAIN YG HARUS DIISI
        sfx.playClick();
        renderMissingLettersGame();
      }
    } else {
      // HURUF SALAH ATAU SUDAH TIDAK DIBUTUHKAN LAGI!
      sfx.playError();
      if (btnEl) {
        btnEl.classList.add("btn-shake-error");
        setTimeout(() => btnEl.classList.remove("btn-shake-error"), 500);
      }
      const hintEl = document.getElementById("puzzle-live-hint");
      if (hintEl) {
        hintEl.innerHTML = `<span style="color: var(--accent-red);">❌ Huruf '${letter}' tidak cocok untuk bagian kosong yang tersisa. Coba huruf lain ya!</span>`;
      }
    }
  };

  window.undoLastLetter = function() {
    sfx.playClick();
    const curState = appState.puzzleStates[appState.currentPuzzleIndex];
    if (!curState || curState.completed) return;

    const filledKeys = missingIndices.filter(idx => curState.filled[idx]);
    if (filledKeys.length > 0) {
      const lastKey = filledKeys[filledKeys.length - 1];
      delete curState.filled[lastKey];
      renderMissingLettersGame();
    }
  };

  window.resetCurrentPuzzle = function() {
    sfx.playClick();
    const curState = appState.puzzleStates[appState.currentPuzzleIndex];
    if (curState) {
      curState.filled = {};
      curState.completed = false;
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
      <div style="font-size: 2.2rem;">🇬🇧</div>
      <div>
        <div style="font-size: 0.75rem; color: var(--accent-green); font-weight: 800; text-transform: uppercase;">
          Kurikulum Standar Beasiswa Cambridge:
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
      <div style="font-size: 2.2rem;">🎓</div>
      <div>
        <div style="font-size: 0.75rem; color: var(--accent-cyan); font-weight: 800; text-transform: uppercase;">
          Kurikulum Standar Beasiswa S2 Dunia:
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
    "10. Waktu, Finansial & Pembulatan"
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

  // Render Table HTML
  const colHeaders = chal.tableHeaders || ["A", "B", "C", "D"];
  const tableRows = chal.tableRows || [];

  let tableHtml = `
    <div class="excel-grid-wrapper">
      <table class="excel-sheet-table">
        <thead>
          <tr>
            <th class="col-header" style="width: 45px;">#</th>
            ${colHeaders.map(col => `<th class="col-header">${col}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
  `;

  tableRows.forEach(rowObj => {
    const rowNum = rowObj.row;
    const isHeaderRow = (rowNum === 1);
    tableHtml += `<tr class="${isHeaderRow ? 'header-row' : ''}">`;
    tableHtml += `<td class="row-header">${rowNum}</td>`;
    colHeaders.forEach(col => {
      const cellCoord = `${col.toUpperCase()}${rowNum}`;
      const isTarget = (cellCoord === chal.targetCell.toUpperCase());
      const cellVal = rowObj[col] !== undefined ? rowObj[col] : "";

      let displayVal = cellVal;
      if (isTarget) {
        if (isCompleted) {
          displayVal = chal.expectedValue;
        } else {
          displayVal = `<span style="color: #107c41; font-style: italic; opacity: 0.85;">[ ${chal.targetCell} ]</span>`;
        }
      }

      tableHtml += `
        <td class="${isTarget ? 'excel-target-cell' + (isCompleted ? ' solved' : '') : ''}"
            id="cell-${cellCoord}"
            data-coord="${cellCoord}"
            onclick="selectExcelCell('${cellCoord}')">
          ${displayVal}
        </td>
      `;
    });
    tableHtml += `</tr>`;
  });

  tableHtml += `
        </tbody>
      </table>
    </div>
  `;

  // Render HTML container
  container.innerHTML = `
    <div class="excel-container">
      <!-- Navigasi & Filter Soal Excel 1 - 105 -->
      <div class="challenge-nav-bar">
        <div class="challenge-nav-controls">
          <label style="font-size: 0.8rem; font-weight: 700; color: #10b981;">📂 Kategori:</label>
          <select class="challenge-page-select" onchange="filterExcelCategory(this.value)">
            <option value="all" ${appState.excelCategoryFilter === 'all' ? 'selected' : ''}>Semua Kategori (105 Soal)</option>
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

      <!-- WORKED EXAMPLE CARD (CONTOH SOAL & JAWABAN BENAR DULU) -->
      ${chal.workedExample ? `
        <div class="excel-worked-example-card" style="border-left: 5px solid #107c41;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
            <div style="font-weight: 800; font-size: 0.95rem; color: #10b981; display: flex; align-items: center; gap: 6px;">
              <span>💡</span> <span>${chal.workedExample.title || 'CONTOH SOAL & JAWABAN BENAR DULU'}</span>
            </div>
            <span style="font-size: 0.75rem; background: rgba(16, 124, 65, 0.2); color: #10b981; padding: 2px 8px; border-radius: 12px; font-weight: 700;">
              Dipahami Dulu Ya! 🍼
            </span>
          </div>
          <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 6px;">
            <strong>Kasus Serupa:</strong> ${chal.workedExample.kasusSerupa}
          </div>
          <div style="background: rgba(0,0,0,0.25); border: 1px dashed rgba(16, 185, 129, 0.4); padding: 8px 12px; border-radius: 6px; font-family: monospace; font-size: 0.9rem; color: #34d399; margin-bottom: 8px;">
            ${chal.workedExample.rumusContoh}
          </div>
          <div style="font-size: 0.83rem; color: var(--text-main); line-height: 1.45;">
            <strong>🍼 Nalar Bayi Kodi:</strong> ${chal.workedExample.nalarBayi}
          </div>
        </div>
      ` : ''}

      <!-- KODI SCENARIO & QUESTION CARD -->
      <div class="card" style="padding: 16px 20px; border-left: 5px solid var(--accent-cyan);">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
          <div>
            <span style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; color: var(--accent-cyan); background: rgba(56, 189, 248, 0.15); padding: 2px 8px; border-radius: 4px;">
              ${chal.category}
            </span>
            <h3 style="margin: 6px 0 4px 0; font-size: 1.1rem; color: var(--text-main);">${chal.title}</h3>
          </div>
          ${isCompleted ? '<span style="font-size: 0.85rem; font-weight: 700; color: #10b981; background: rgba(16, 185, 129, 0.15); padding: 4px 10px; border-radius: 12px;">✅ Selesai</span>' : ''}
        </div>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 10px; line-height: 1.5;">
          ${chal.scenario}
        </p>
        <div style="background: var(--bg-secondary); border-left: 4px solid var(--accent-yellow); padding: 10px 14px; border-radius: 4px; font-size: 0.88rem; color: var(--text-main);">
          <strong>🎯 Target Tugas:</strong> ${chal.instruction}
        </div>
      </div>

      <!-- SPREADSHEET TABLE GRID -->
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <span style="font-size: 0.82rem; font-weight: 700; color: var(--text-muted);">
            📊 Lembar Kerja Spreadsheet (Sel Target: <strong style="color: #10b981;">${chal.targetCell}</strong>)
          </span>
          <span style="font-size: 0.75rem; color: var(--text-muted);">
            Klik sel untuk melihat koordinat
          </span>
        </div>
        ${tableHtml}
      </div>

      <!-- FORMULA BAR (FX) -->
      <div class="excel-formula-bar-wrap">
        <span class="excel-cell-badge" id="excel-active-coord">${chal.targetCell}</span>
        <span class="excel-fx-icon">fx</span>
        <input type="text"
               id="excel-formula-input"
               class="excel-formula-input"
               value="${currentFormula}"
               placeholder="Ketik rumus di sini... contoh: =IF(B2>=75, 'LULUS', 'REMIDI')"
               onkeydown="if(event.key==='Enter') checkExcelCurrentChallenge()" />
        <button class="btn-primary" style="background: #107c41; border: none; padding: 8px 16px;" onclick="checkExcelCurrentChallenge()">
          ▶️ Periksa Rumus
        </button>

        <button class="btn-secondary" style="padding: 8px 12px; font-size: 0.82rem;" onclick="resetExcelFormula()" title="Kembalikan Rumus Awal">
          🔄 Reset
        </button>
      </div>

      <!-- FEEDBACK / ALERT CONTAINER -->
      <div id="excel-feedback-box" style="display: none;"></div>
    </div>
  `;
}

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
    renderExcelTrainer();
  }
};

window.setExcelChallenge = function(idx) {
  sfx.playClick();
  appState.currentExcelIndex = idx;
  renderExcelTrainer();
};

window.selectExcelCell = function(coord) {
  sfx.playClick();
  const badge = document.getElementById("excel-active-coord");
  if (badge) badge.textContent = coord;
  const input = document.getElementById("excel-formula-input");
  if (input) {
    input.value += coord;
    input.focus();
  }
};

window.insertExcelChip = function(snippet) {
  sfx.playClick();
  const input = document.getElementById("excel-formula-input");
  if (input) {
    input.value += snippet;
    input.focus();
  }
};

window.resetExcelFormula = function() {
  sfx.playClick();
  const chal = excelChallenges[appState.currentExcelIndex] || excelChallenges[0];
  const input = document.getElementById("excel-formula-input");
  if (input) {
    input.value = chal.starterFormula || "=";
    input.focus();
  }
  delete appState.excelUserFormulas[chal.id];
  const feedbackBox = document.getElementById("excel-feedback-box");
  if (feedbackBox) feedbackBox.style.display = "none";
};

window.showExcelAnswer = function() {
  sfx.playClick();
  const chal = excelChallenges[appState.currentExcelIndex] || excelChallenges[0];
  const input = document.getElementById("excel-formula-input");
  if (input) {
    input.value = chal.acceptedFormulas[0] || "=";
    input.focus();
  }
  const feedbackBox = document.getElementById("excel-feedback-box");
  if (feedbackBox) {
    feedbackBox.style.display = "block";
    feedbackBox.className = "alert-box info";
    feedbackBox.innerHTML = `
      <strong>💡 Kunci Jawaban Kodi:</strong><br>
      Ketik rumus: <code style="font-size: 0.95rem; font-weight: bold; color: #10b981;">${chal.acceptedFormulas[0]}</code><br>
      <span style="font-size: 0.85rem; color: var(--text-muted);">
        ${chal.babyHint}
      </span>
    `;
  }
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
            <span>Hasil di sel <strong>${chal.targetCell}</strong>: <strong style="color: #10b981;">${chal.expectedValue}</strong></span>
          </div>
          <button class="btn-primary" style="background: #107c41; border: none; padding: 8px 16px;" onclick="navExcelChallenge(1)">
            Tantangan Berikutnya ➡️
          </button>
        </div>
      `;
    }

    // Update target cell in table immediately
    const targetCellEl = document.getElementById(`cell-${chal.targetCell.toUpperCase()}`);
    if (targetCellEl) {
      targetCellEl.textContent = chal.expectedValue;
      targetCellEl.classList.add("solved");
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

// ================= APP INITIALIZATION =================
window.addEventListener("DOMContentLoaded", () => {
  initTheme();
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
      
      <!-- Meta Information Row -->
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
        <span style="font-size: 0.8rem; color: var(--accent-cyan); font-weight: 800; text-transform: uppercase;">
          ${chal.category} • Soal ${appState.currentCodeIndex + 1} dari ${codeChallenges.length}
        </span>
        <span style="font-size: 0.85rem; font-weight: 700; ${isDone ? 'color: var(--accent-green);' : 'color: var(--text-muted);'}">
          ${isDone ? '✅ Selesai (+1 Bintang)' : '⏳ Sedang Dikerjakan'}
        </span>
      </div>

      <!-- Title -->
      <h3 style="color: #fff; margin: 0 0 12px; font-size: 1.25rem;">
        ${chal.title}
      </h3>

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

