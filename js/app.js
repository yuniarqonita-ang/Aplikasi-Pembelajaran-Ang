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
      playerName: appState.playerName
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

      <!-- Pilihan Pertanyaan Wawancara Berbasis CV -->
      <div style="display: flex; gap: 8px; margin-bottom: 16px; overflow-x: auto; padding-bottom: 6px;">
        ${cvInterviewSpeakingDrills.map((d, idx) => `
          <button class="quick-cmd-btn ${idx === appState.currentEnglishDrillIndex ? 'active' : ''}" style="padding: 8px 14px; font-weight: 700;" onclick="setEnglishDrillIndex(${idx})">
            Q${idx + 1}: ${d.category.split('.')[1] || d.category}
          </button>
        `).join('')}
      </div>

      <div style="background: var(--bg-card); padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-glow); margin-bottom: 20px;">
        <span style="font-size: 0.75rem; color: var(--accent-cyan); font-weight: 700; text-transform: uppercase;">
          ${drill.category}
        </span>
        <h3 style="color: #fff; margin: 8px 0 14px; font-size: 1.15rem;">
          Interviewer: "${drill.questionEn}"
        </h3>

        <!-- KOTAK CONTOH STRUKTUR JAWABAN INTERVIEW DULU -->
        ${drill.workedExample ? `
          <div class="worked-example-card" style="margin-bottom: 16px;">
            <div class="worked-example-header">
              <span class="we-badge">💡 CONTOH POLA STRUKTUR JAWABAN DULU</span>
              <span class="we-sub">Pola jawaban berbobot sebelum kamu menirukan atau berbicara:</span>
            </div>
            <div class="we-body">
              <div class="we-row">
                <span class="we-label">📐 Kerangka Alur:</span>
                <span class="we-text">${drill.workedExample.modelStructure}</span>
              </div>
              <div class="we-row">
                <span class="we-label">✨ Kunci Sukses & Frasa Berbobot:</span>
                <span class="we-text">${drill.workedExample.keyPhraseTip}</span>
              </div>
            </div>
            <div class="we-divider">🎯 SEKARANG TARGET JAWABAN ANDA (DENGARKAN & TIRUKAN):</div>
          </div>
        ` : ''}

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
    const spkSec = document.getElementById("submode-speaking");
    const puzSec = document.getElementById("submode-puzzle");
    const ieltsSec = document.getElementById("submode-ielts");
    const ibtSec = document.getElementById("submode-ibt");
    const dicSec = document.getElementById("submode-dictation");
    const bS = document.getElementById("btn-mode-spk");
    const bP = document.getElementById("btn-mode-puzzle");
    const bIelts = document.getElementById("btn-mode-ielts");
    const bI = document.getElementById("btn-mode-ibt");
    const bD = document.getElementById("btn-mode-dictation");

    [bS, bP, bIelts, bI, bD].forEach(b => { if (b) b.style.borderColor = "rgba(255,255,255,0.1)"; });

    if (mode === 'speaking') {
      spkSec.style.display = "block";
      puzSec.style.display = "none";
      if (ieltsSec) ieltsSec.style.display = "none";
      if (ibtSec) ibtSec.style.display = "none";
      if (dicSec) dicSec.style.display = "none";
      bS.style.borderColor = "var(--accent-cyan)";
    } else if (mode === 'puzzle') {
      spkSec.style.display = "none";
      puzSec.style.display = "block";
      if (ieltsSec) ieltsSec.style.display = "none";
      if (ibtSec) ibtSec.style.display = "none";
      if (dicSec) dicSec.style.display = "none";
      bP.style.borderColor = "var(--accent-cyan)";
      renderMissingLettersGame();
    } else if (mode === 'ielts') {
      spkSec.style.display = "none";
      puzSec.style.display = "none";
      if (ieltsSec) ieltsSec.style.display = "block";
      if (ibtSec) ibtSec.style.display = "none";
      if (dicSec) dicSec.style.display = "none";
      if (bIelts) bIelts.style.borderColor = "var(--accent-green)";
      renderIeltsAcademicStudio();
    } else if (mode === 'ibt') {
      spkSec.style.display = "none";
      puzSec.style.display = "none";
      if (ieltsSec) ieltsSec.style.display = "none";
      if (ibtSec) ibtSec.style.display = "block";
      if (dicSec) dicSec.style.display = "none";
      bI.style.borderColor = "var(--accent-cyan)";
      renderToeflIbtBuildingSkills();
    } else if (mode === 'dictation') {
      spkSec.style.display = "none";
      puzSec.style.display = "none";
      if (ieltsSec) ieltsSec.style.display = "none";
      if (ibtSec) ibtSec.style.display = "none";
      if (dicSec) dicSec.style.display = "block";
      if (bD) bD.style.borderColor = "var(--accent-pink)";
      renderEvcDictationStudio();
    }
  };
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
                ${isDone ? '✓ ' : ''}Kata #${x.originalIndex + 1}: ${x.item.word} (${x.item.category})
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
            ${isDone ? '✓ ' : ''}#${x.originalIndex + 1} ${x.item.word}
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

  appState.ieltsCategoryFilter = appState.ieltsCategoryFilter || "all";

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
              #${x.originalIndex + 1}: ${x.item.cambridgeUnit.split(':')[0]} (${x.item.ieltsFocus})
            </option>
          `).join('')}
        </select>
        <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem;" onclick="navIeltsChallenge(1)" ${currentPos >= filteredList.length - 1 ? 'disabled' : ''}>
          Next ➡️
        </button>
      </div>
    </div>

    <!-- Quick Pills Selector -->
    <div class="challenge-pills-row" style="margin-bottom: 16px;">
      ${filteredList.map((x) => `
        <button class="quick-cmd-btn ${x.originalIndex === appState.currentIeltsIndex ? 'active' : ''}" 
                style="padding: 6px 12px; font-size: 0.8rem; font-weight: 700; white-space: nowrap;" 
                onclick="setIeltsIndex(${x.originalIndex})">
          #${x.originalIndex + 1} ${x.item.cambridgeUnit.split(':')[0]}
        </button>
      `).join('')}
    </div>

    <div style="background: var(--bg-card); padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-glow); margin-bottom: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 6px;">
        <span style="font-size: 0.78rem; font-weight: 800; color: var(--accent-green); background: rgba(74, 222, 128, 0.15); padding: 4px 10px; border-radius: 12px;">
          📌 ${q.cambridgeUnit}
        </span>
        <span style="font-size: 0.75rem; color: var(--accent-yellow); font-weight: 700;">
          Soal ${appState.currentIeltsIndex + 1} dari ${ieltsAcademicBank.length} (${q.ieltsFocus})
        </span>
      </div>

      <!-- KOTAK CONTOH SOAL & JAWABAN CAMBRIDGE DULU -->
      <div class="worked-example-card">
        <div class="worked-example-header">
          <span class="we-badge">💡 CONTOH SOAL & JAWABAN CAMBRIDGE DULU</span>
          <span class="we-sub">Pahami pola tata bahasa ini sebelum menjawab soal tantangan!</span>
        </div>
        <div class="we-body">
          <div class="we-row">
            <span class="we-label">📝 Contoh Kasus Serupa:</span>
            <span class="we-text">"${q.workedExample.sampleQuestion}"</span>
          </div>
          <div class="we-row">
            <span class="we-label">✅ Kunci Jawaban Benar:</span>
            <code class="we-code">${q.workedExample.sampleAnswer}</code>
          </div>
          <div class="we-row">
            <span class="we-label">🍼 Analogi & Nalar Bahasa Bayi:</span>
            <span class="we-text">${q.workedExample.sampleLogic}</span>
          </div>
        </div>
        <div class="we-divider">🎯 SEKARANG GILIRAN TANTANGAN SOAL CAMBRIDGE INI:</div>
      </div>

      <!-- Teks Kalimat Soal (Bisa Diisi Dinamis Saat Dijawab) -->
      <h3 id="ielts-question-sentence" style="color: #fff; margin-bottom: 16px; font-size: 1.15rem; line-height: 1.6;">
        "${q.question}"
      </h3>

      <!-- Tombol Audio untuk Mendengar Soal -->
      <div style="margin-bottom: 14px; display: flex; gap: 8px; flex-wrap: wrap;">
        <button class="btn-secondary" style="font-size: 0.8rem; padding: 6px 12px;" onclick="speechEngine.speakText('${q.question.replace(/'/g, "\\'").replace('_____', 'blank')}', 0.8, this, speechEngine.englishAccent)">
          🔊 Dengarkan Kalimat Soal (${speechEngine.englishAccent === 'en-GB' ? 'Aksen UK' : 'Aksen US'})
        </button>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 10px; margin-bottom: 16px;">
        ${q.options.map((opt, idx) => `
          <button class="choice-card-btn" style="justify-content: center; font-weight: 700;" onclick="checkIeltsAnswer(${idx})">
            ${opt}
          </button>
        `).join('')}
      </div>

      <div id="ielts-feedback-box" style="display: none;"></div>
    </div>
  `;

  window.filterIeltsCategory = function(cat) {
    sfx.playClick();
    appState.ieltsCategoryFilter = cat;
    renderIeltsAcademicStudio();
  };

  window.navIeltsChallenge = function(delta) {
    sfx.playClick();
    const newPos = currentPos + delta;
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
    const isCorrect = idx === q.correctIndex;
    const chosenOpt = q.options[idx];
    const sentenceEl = document.getElementById("ielts-question-sentence");

    if (sentenceEl) {
      if (isCorrect) {
        const completedHtml = q.question.replace('_____', `<span class="sentence-fill-correct">${chosenOpt}</span>`);
        sentenceEl.innerHTML = `"${completedHtml}"`;
      } else {
        const errorHtml = q.question.replace('_____', `<span class="sentence-fill-wrong">${chosenOpt}</span> (Jawaban benar: <span class="sentence-fill-correct">${q.options[q.correctIndex]}</span>)`);
        sentenceEl.innerHTML = `"${errorHtml}"`;
      }
    }

    if (isCorrect) {
      sfx.playSuccess();
      triggerConfetti();
      const cleanSentence = q.question.replace('_____', chosenOpt);
      speechEngine.speakText(cleanSentence, 0.85, null, speechEngine.englishAccent);
    } else {
      sfx.playError();
    }

    kodiAI.renderFeedback({
      containerId: "ielts-feedback-box",
      isCorrect,
      question: q.question,
      userAnswer: q.options[idx],
      correctAnswer: q.options[q.correctIndex],
      explanation: `${q.babyExplanation} Kaidah Akademis: ${q.academicRule}`,
      concept: `IELTS Academic (${q.cambridgeUnit})`,
      babyClue: q.babyExplanation,
      choices: q.options
    });
  };
}

// ================= MASTER TOEFL iBT BEASISWA S2 (BUILDING SKILLS BOOK) =================
function renderToeflIbtBuildingSkills() {
  const container = document.getElementById("submode-ibt");
  if (!container) return;

  const currentFilter = appState.currentIbtFilter || "all";
  const filteredList = currentFilter === "all"
    ? toeflIbtBuildingSkills
    : toeflIbtBuildingSkills.filter(item => item.skillCategory === currentFilter);

  if (appState.currentIbtIndex >= filteredList.length) {
    appState.currentIbtIndex = 0;
  }

  const currentItem = filteredList[appState.currentIbtIndex] || filteredList[0];

  const categories = [
    { key: "all", label: `Semua Soal iBT (${toeflIbtBuildingSkills.length})` },
    { key: "Vocabulary in Context", label: "1. Vocab in Context (18 Soal)" },
    { key: "Sentence Simplification", label: "2. Sentence Simplification (17 Soal)" },
    { key: "Fact & Negative Fact", label: "3. Fact & Negative Fact (17 Soal)" },
    { key: "Inference", label: "4. Inference Questions (16 Soal)" },
    { key: "Insert Text", label: "5. Text Insertion [■] (16 Soal)" },
    { key: "Speaking iBT Simulator", label: "6. Speaking iBT Simulator (16 Soal)" }
  ];

  let passageHtml = "";
  if (currentItem.type === "reading") {
    let passageText = currentItem.passageSnippet;
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
          <div style="font-size: 0.75rem; color: var(--accent-cyan); font-weight: 800; text-transform: uppercase; margin-bottom: 4px;">Kalimat yang Harus Disisipkan:</div>
          <p style="color: #f8fafc; font-weight: 700; margin: 0;">"${currentItem.insertedSentence}"</p>
        </div>
      `;
    }

    const audioSentence = (currentItem.targetSentenceForAudio || currentItem.passageSnippet).replace(/'/g, "\\'");

    passageHtml = `
      <!-- KOTAK CONTOH STRATEGI & JAWABAN BENAR DULU -->
      ${currentItem.workedExample ? `
        <div class="worked-example-card" style="margin-bottom: 16px;">
          <div class="worked-example-header">
            <span class="we-badge">💡 STRATEGI & CONTOH JAWABAN BENAR DULU</span>
            <span class="we-sub">${currentItem.bookChapter} • ${currentItem.academicTopic || ''}</span>
          </div>
          <div class="we-body">
            <div class="we-row">
              <span class="we-label">📝 Model Soal:</span>
              <span class="we-text">${currentItem.workedExample.modelPrompt}</span>
            </div>
            <div class="we-row">
              <span class="we-label">✅ Kunci Jawaban Benar:</span>
              <code class="we-code">${currentItem.workedExample.correctAnswer}</code>
            </div>
            <div class="we-row">
              <span class="we-label">🍼 Trik & Cara Nalar Detektif:</span>
              <span class="we-text">${currentItem.workedExample.strategyLogic.replace(/\\n/g, '<br>')}</span>
            </div>
          </div>
          <div class="we-divider">🎯 SEKARANG BACA TEKS & SELESAIKAN TANTANGAN DI BAWAH:</div>
        </div>
      ` : ''}

      <div class="ibt-passage-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 6px;">
          <span style="font-size: 0.75rem; color: var(--accent-cyan); font-weight: 800; text-transform: uppercase;">
            📖 Bacaan Ilmiah (Academic Reading Excerpt)
          </span>
          <button class="btn-secondary" style="font-size: 0.78rem; padding: 4px 10px;" onclick="speechEngine.speakText('${audioSentence}', 0.8, this, 'en-US')">
            🔊 Dengarkan Audio Teks
          </button>
        </div>
        <p style="margin: 0;">${passageText}</p>
        ${insertNotice}
      </div>

      <div style="margin-bottom: 16px;">
        <h3 style="color: #fff; font-size: 1.1rem; line-height: 1.5; margin-bottom: 14px;">
          "${currentItem.questionPrompt}"
        </h3>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px;">
          ${currentItem.options.map((opt, idx) => `
            <button class="choice-card-btn" style="justify-content: flex-start; text-align: left; font-weight: 600; line-height: 1.4; padding: 12px 14px;" onclick="checkIbtReadingAnswer(${idx})">
              ${opt}
            </button>
          `).join('')}
        </div>
      </div>

      <div id="ibt-reading-feedback" style="display: none; margin-top: 14px;"></div>
    `;
  } else {
    // SPEAKING iBT SIMULATOR
    const promptAudio = currentItem.promptQuestion.replace(/'/g, "\\'");
    const modelAudio = currentItem.modelAnswer.replace(/'/g, "\\'");

    passageHtml = `
      <!-- KOTAK CONTOH STRATEGI SPEAKING SKOR 26-30 DULU -->
      ${currentItem.workedExample ? `
        <div class="worked-example-card" style="margin-bottom: 16px;">
          <div class="worked-example-header">
            <span class="we-badge">💡 STRATEGI SPEAKING SKOR 26-30 DULU</span>
            <span class="we-sub">${currentItem.bookChapter}</span>
          </div>
          <div class="we-body">
            <div class="we-row">
              <span class="we-label">📝 Inti Pertanyaan:</span>
              <span class="we-text">${currentItem.workedExample.modelPrompt}</span>
            </div>
            <div class="we-row">
              <span class="we-label">✅ Kunci Sikap & Posisi Jawaban:</span>
              <code class="we-code">${currentItem.workedExample.correctAnswer}</code>
            </div>
            <div class="we-row">
              <span class="we-label">🍼 Trik Manajemen Waktu 45 Detik:</span>
              <span class="we-text">${currentItem.workedExample.strategyLogic.replace(/\\n/g, '<br>')}</span>
            </div>
          </div>
          <div class="we-divider">🎯 SEKARANG COBA LATIHAN BICARA SESUAI FORMULA:</div>
        </div>
      ` : ''}

      <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid var(--accent-pink); border-radius: 12px; padding: 20px; margin-bottom: 18px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 6px;">
          <span style="font-size: 0.75rem; color: var(--accent-pink); font-weight: 800; text-transform: uppercase;">
            🎙️ Pertanyaan Ujian Speaking iBT (Task 1 & Integrated)
          </span>
          <button class="btn-secondary" style="font-size: 0.78rem; padding: 4px 10px;" onclick="speechEngine.speakText('${promptAudio}', 0.8, this, 'en-US')">
            🔊 Dengarkan Soal
          </button>
        </div>

        <h3 style="color: #fff; font-size: 1.15rem; line-height: 1.5; margin-bottom: 14px;">
          "${currentItem.promptQuestion}"
        </h3>

        <!-- Countdown Timer Section -->
        <div class="ibt-timer-display" id="ibt-timer-box">
          <div style="text-align: center;">
            <div id="ibt-timer-label" style="font-size: 0.8rem; color: #cbd5e1; font-weight: 700; text-transform: uppercase; margin-bottom: 4px;">
              ⏱️ Siap Latihan Ujian?
            </div>
            <div class="ibt-timer-digits" id="ibt-timer-count">15s / 45s</div>
            <div style="font-size: 0.75rem; color: #94a3b8; margin-top: 4px;">(15 Detik Persiapan • 45 Detik Berbicara)</div>
          </div>
        </div>

        <!-- Tombol Kontrol Timer & Rekaman Suara -->
        <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin-bottom: 18px;">
          <button id="btn-ibt-prep" class="btn-secondary" style="font-weight: 700; padding: 10px 16px;" onclick="startIbtPrepCountdown(${currentItem.prepSeconds || 15})">
            ⏱️ Mulai Waktu Persiapan (${currentItem.prepSeconds || 15}s)
          </button>
          <button id="btn-ibt-speech" class="btn-primary" style="font-weight: 800; padding: 10px 18px; background: linear-gradient(135deg, #f43f5e, #e11d48);" onclick="startIbtSpeakingCountdown(${currentItem.speechSeconds || 45})">
            🎙️ Mulai Bicara Sekarang (${currentItem.speechSeconds || 45}s)
          </button>
          <button class="btn-secondary" style="font-size: 0.85rem;" onclick="resetIbtTimers()">
            🔄 Reset Timer
          </button>
        </div>

        <!-- Feedback Suara Mic -->
        <div id="ibt-speech-eval-result" style="display: none; padding: 16px; border-radius: 10px; background: rgba(2, 6, 23, 0.9); border: 1.5px solid var(--accent-cyan); margin-bottom: 18px;"></div>

        <!-- Formula Bahasa Bayi & Jawaban Juara Skor 26-30 -->
        <div style="background: rgba(250, 204, 21, 0.1); border-left: 3px solid var(--accent-yellow); padding: 14px 18px; border-radius: 8px; font-size: 0.88rem; color: #fef08a; margin-bottom: 16px;">
          <strong>🍼 Strategi Jawaban Skor 26-30 Kodi:</strong>
          <p style="white-space: pre-line; margin-top: 6px; color: #fef08a; font-size: 0.85rem;">${currentItem.babyStrategy}</p>
        </div>

        <!-- Contoh Jawaban Model Native -->
        <div style="background: rgba(15, 23, 42, 0.8); border: 1px dashed rgba(56, 189, 248, 0.4); border-radius: 10px; padding: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 6px;">
            <span style="font-size: 0.75rem; color: var(--accent-green); font-weight: 800; text-transform: uppercase;">
              ⭐ Contoh Naskah Jawaban Terbaik (Model Band 26-30):
            </span>
            <div style="display: flex; gap: 6px;">
              <button class="btn-secondary" style="font-size: 0.75rem; padding: 4px 8px;" onclick="speechEngine.speakText('${modelAudio}', 0.85, this, 'en-US')">
                🔊 Dengarkan (Normal)
              </button>
              <button class="btn-secondary" style="font-size: 0.75rem; padding: 4px 8px;" onclick="speechEngine.speakText('${modelAudio}', 0.65, this, 'en-US')">
                🐢 Slow
              </button>
            </div>
          </div>
          <p style="color: #f1f5f9; font-size: 0.95rem; line-height: 1.6; margin-bottom: 8px;">"${currentItem.modelAnswer}"</p>
          <p style="color: var(--text-muted); font-size: 0.82rem; font-style: italic; margin: 0;">Arti: ${currentItem.modelTranslation}</p>
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    <!-- Banner Acuan Buku TOEFL iBT -->
    <div class="ibt-book-badge">
      <div style="font-size: 2.4rem;">📘</div>
      <div>
        <div style="font-size: 0.75rem; color: var(--accent-cyan); font-weight: 800; text-transform: uppercase;">
          Kurikulum Standar Beasiswa Luar Negeri (S2 Magister Abroad):
        </div>
        <h4 style="color: #fff; margin: 2px 0 4px;">Building Skills for the TOEFL iBT [2nd Edition]</h4>
        <p style="font-size: 0.82rem; color: #cbd5e1; margin: 0;">
          Latihan 6 Skill Kunci: Vocabulary in Context, Sentence Simplification, Detektif Fakta, Inference Tersirat, Jigsaw Puzzle Kalimat, & Speaking Simulator dengan Timer Resmi!
        </p>
      </div>
    </div>

    <!-- Category Filter Chips -->
    <div style="display: flex; gap: 8px; margin-bottom: 14px; overflow-x: auto; padding-bottom: 6px;">
      ${categories.map(cat => `
        <button class="ibt-filter-pill ${currentFilter === cat.key ? 'active' : ''}" onclick="setIbtCategoryFilter('${cat.key}')">
          ${cat.label}
        </button>
      `).join('')}
    </div>

    <!-- Navigasi Soal iBT Prev / Jump / Next -->
    <div class="challenge-nav-bar">
      <div class="challenge-nav-controls">
        <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem;" onclick="navIbtQuestion(-1)" ${appState.currentIbtIndex <= 0 ? 'disabled' : ''}>
          ⬅️ Prev
        </button>
        <select class="challenge-page-select" onchange="setIbtQuestionIndex(Number(this.value))">
          ${filteredList.map((item, idx) => `
            <option value="${idx}" ${idx === appState.currentIbtIndex ? 'selected' : ''}>
              #${idx + 1} (${item.skillCategory}): ${item.type === 'speaking' ? 'Speaking Prep' : (item.targetWord || item.bookChapter)}
            </option>
          `).join('')}
        </select>
        <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem;" onclick="navIbtQuestion(1)" ${appState.currentIbtIndex >= filteredList.length - 1 ? 'disabled' : ''}>
          Next ➡️
        </button>
      </div>
    </div>

    <!-- Quick Pills Selector -->
    <div class="challenge-pills-row" style="margin-bottom: 16px;">
      ${filteredList.map((item, idx) => `
        <button class="quick-cmd-btn ${idx === appState.currentIbtIndex ? 'active' : ''}" 
                style="padding: 6px 12px; font-size: 0.8rem; font-weight: 700; white-space: nowrap;" 
                onclick="setIbtQuestionIndex(${idx})">
          ${item.type === 'speaking' ? '🎙️' : '📖'} #${idx + 1}
        </button>
      `).join('')}
    </div>

    <!-- Main Question Box -->
    <div style="background: var(--bg-card); padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-glow); margin-bottom: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 6px;">
        <span style="font-size: 0.78rem; font-weight: 800; color: var(--accent-cyan); background: rgba(56, 189, 248, 0.15); padding: 4px 10px; border-radius: 12px;">
          📌 ${currentItem.bookChapter} • ${currentItem.academicTopic || currentItem.skillCategory}
        </span>
        <span style="font-size: 0.75rem; color: var(--accent-yellow); font-weight: 700;">
          Modul ${appState.currentIbtIndex + 1} dari ${filteredList.length}
        </span>
      </div>

      ${passageHtml}
    </div>
  `;

  // Window methods for iBT Interaction
  window.navIbtQuestion = function(delta) {
    sfx.playClick();
    const newIdx = appState.currentIbtIndex + delta;
    if (newIdx >= 0 && newIdx < filteredList.length) {
      appState.currentIbtIndex = newIdx;
      resetIbtTimers();
      renderToeflIbtBuildingSkills();
    }
  };

  window.setIbtCategoryFilter = function(catKey) {
    sfx.playClick();
    appState.currentIbtFilter = catKey;
    appState.currentIbtIndex = 0;
    resetIbtTimers();
    renderToeflIbtBuildingSkills();
  };

  window.setIbtQuestionIndex = function(idx) {
    sfx.playClick();
    appState.currentIbtIndex = idx;
    resetIbtTimers();
    renderToeflIbtBuildingSkills();
  };

  window.checkIbtReadingAnswer = function(chosenIdx) {
    const isCorrect = chosenIdx === currentItem.correctIndex;
    if (isCorrect) {
      sfx.playSuccess();
      triggerConfetti();
    } else {
      sfx.playError();
    }

    kodiAI.renderFeedback({
      containerId: "ibt-reading-feedback",
      isCorrect,
      question: currentItem.passageQuestion || currentItem.promptQuestion,
      userAnswer: currentItem.options[chosenIdx],
      correctAnswer: currentItem.options[currentItem.correctIndex],
      explanation: currentItem.babyExplanation,
      concept: `TOEFL iBT (${currentItem.skillCategory})`,
      babyClue: currentItem.babyStrategy || currentItem.babyExplanation,
      choices: currentItem.options
    });
  };

  window.resetIbtTimers = function() {
    if (appState.ibtPrepInterval) clearInterval(appState.ibtPrepInterval);
    if (appState.ibtTimerInterval) clearInterval(appState.ibtTimerInterval);
    appState.ibtPrepInterval = null;
    appState.ibtTimerInterval = null;
    speechEngine.stopListening();
  };

  window.startIbtPrepCountdown = function(seconds) {
    sfx.playClick();
    resetIbtTimers();

    const countEl = document.getElementById("ibt-timer-count");
    const labelEl = document.getElementById("ibt-timer-label");
    const prepBtn = document.getElementById("btn-ibt-prep");
    if (!countEl || !labelEl) return;

    let remaining = seconds;
    labelEl.innerText = "⏳ WAKTU PERSIAPAN (BERPIKIR & CATAT POIN):";
    labelEl.style.color = "var(--accent-yellow)";
    countEl.innerText = `${remaining}s`;
    countEl.style.color = "var(--accent-yellow)";
    if (prepBtn) prepBtn.disabled = true;

    appState.ibtPrepInterval = setInterval(() => {
      remaining--;
      if (remaining > 0) {
        countEl.innerText = `${remaining}s`;
      } else {
        clearInterval(appState.ibtPrepInterval);
        appState.ibtPrepInterval = null;
        sfx.playSuccess();
        countEl.innerText = "0s - WAKTU PERSIAPAN HABIS!";
        countEl.style.color = "var(--accent-green)";
        labelEl.innerText = "🔔 TEEET! SILAKAN TEKAN TOMBOL 'MULAI BICARA' SEKARANG!";
        if (prepBtn) prepBtn.disabled = false;
      }
    }, 1000);
  };

  window.startIbtSpeakingCountdown = function(seconds) {
    sfx.playClick();
    resetIbtTimers();

    const countEl = document.getElementById("ibt-timer-count");
    const labelEl = document.getElementById("ibt-timer-label");
    const spkBtn = document.getElementById("btn-ibt-speech");
    const resultBox = document.getElementById("ibt-speech-eval-result");
    if (!countEl || !labelEl) return;

    let remaining = seconds;
    labelEl.innerText = "🔴 SEDANG MEREKAM SUARA (BICARA SEKARANG):";
    labelEl.style.color = "var(--accent-pink)";
    countEl.innerText = `${remaining}s`;
    countEl.style.color = "var(--accent-pink)";
    if (spkBtn) {
      spkBtn.disabled = true;
      spkBtn.innerText = "⏳ Mendengarkan...";
    }

    if (resultBox) {
      resultBox.style.display = "block";
      resultBox.innerHTML = `
        <div style="text-align: center; color: var(--accent-pink); font-weight: 700; padding: 10px;">
          🔴 Mikrofon sedang aktif merekam jawabanmu... Bicaralah dengan lantang & percaya diri!
        </div>
      `;
    }

    speechEngine.startListening(
      currentItem.audioSnippet || currentItem.modelAnswer,
      (evalResult) => {
        if (spkBtn) {
          spkBtn.disabled = false;
          spkBtn.innerText = `🎙️ Mulai Bicara Lagi (${seconds}s)`;
        }
        if (evalResult.accuracy >= 65) {
          sfx.playSuccess();
        } else {
          sfx.playError();
        }
        if (resultBox) {
          resultBox.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 6px;">
              <h4 style="color: ${evalResult.accuracy >= 70 ? 'var(--accent-green)' : 'var(--accent-yellow)'}; margin: 0;">
                Skor Akurasi Speaking iBT: ${evalResult.accuracy}% (${evalResult.grade})
              </h4>
            </div>
            <p style="font-size: 0.88rem; color: #cbd5e1; margin: 4px 0;"><strong>Kata yang terdeteksi:</strong> "${evalResult.spoken}"</p>
            <div style="display: flex; flex-wrap: wrap; gap: 6px; margin: 8px 0;">
              ${evalResult.wordAnalysis.map(w => `
                <span style="padding: 2px 8px; border-radius: 4px; font-weight: 700; font-size: 0.8rem; background: ${w.matched ? 'rgba(74, 222, 128, 0.2)' : 'rgba(248, 113, 113, 0.2)'}; color: ${w.matched ? '#4ade80' : '#f87171'}; border: 1px solid ${w.matched ? '#4ade80' : '#f87171'};">
                  ${w.word} ${w.matched ? '✓' : '✗'}
                </span>
              `).join('')}
            </div>
            <p style="font-size: 0.85rem; color: #fef08a; margin: 4px 0 0 0;">💡 ${evalResult.comment}</p>
            <div id="ibt-speech-ai-feedback-box" style="margin-top: 14px;"></div>
          `;

          kodiAI.renderFeedback({
            containerId: "ibt-speech-ai-feedback-box",
            isCorrect: evalResult.accuracy >= 65,
            question: `Soal Speaking iBT: "${currentItem.promptQuestion}"`,
            userAnswer: evalResult.spoken || "(Suara tidak tertangkap)",
            correctAnswer: currentItem.modelAnswer,
            explanation: `Akurasi pengucapanmu ${evalResult.accuracy}% (${evalResult.grade}). ${evalResult.comment}. Contoh jawaban model: "${currentItem.modelAnswer}".`,
            concept: `TOEFL iBT Speaking (${currentItem.skillCategory})`,
            babyClue: currentItem.babyStrategy || currentItem.modelTranslation
          });
        }
      },
      (error) => {
        if (spkBtn) {
          spkBtn.disabled = false;
          spkBtn.innerText = `🎙️ Mulai Bicara (${seconds}s)`;
        }
        if (resultBox) {
          resultBox.innerHTML = `
            <div style="color: var(--accent-red); font-size: 0.85rem;">
              ⚠️ Mikrofon tidak menangkap suara (${error}). Pastikan mic diizinkan (Allow) di browsermu!
            </div>
          `;
        }
      }
    );

    appState.ibtTimerInterval = setInterval(() => {
      remaining--;
      if (remaining > 0) {
        countEl.innerText = `${remaining}s`;
      } else {
        clearInterval(appState.ibtTimerInterval);
        appState.ibtTimerInterval = null;
        speechEngine.stopListening();
        countEl.innerText = "0s - WAKTU BICARA SELESAI!";
        countEl.style.color = "var(--accent-green)";
        labelEl.innerText = "🎉 SELESAI! Evaluasi rekamanmu sudah dianalisis di bawah!";
        if (spkBtn) {
          spkBtn.disabled = false;
          spkBtn.innerText = `🎙️ Mulai Bicara Lagi (${seconds}s)`;
        }
      }
    }, 1000);
  };
}

// ================= PROGRESSIVE LISTENING-TO-WRITING DICTATION STUDIO =================
// Kurikulum Diktasi Berjenjang: Huruf -> Kata -> Kalimat (EVC ESL LibreTexts 2023)
function updateHeaderStars() {
  const starCountEl = document.getElementById("header-stars");
  if (starCountEl) starCountEl.textContent = `${appState.stars} Bintang`;
  const certStars = document.getElementById("cert-stars-total");
  if (certStars) certStars.textContent = `${appState.stars} Bintang`;
}

function renderEvcDictationStudio() {
  const container = document.getElementById("submode-dictation");
  if (!container) return;

  const currentLevel = appState.currentDictationLevelFilter || 1;
  const filteredList = evcDictationChallenges.filter(c => c.level === currentLevel);

  if (appState.currentDictationIndex >= filteredList.length) {
    appState.currentDictationIndex = 0;
  }

  const currentItem = filteredList[appState.currentDictationIndex] || filteredList[0];
  if (!currentItem) return;

  const levelTabs = [
    { level: 1, label: "🔤 Tingkat 1: Eja Huruf", desc: "Spelling Names & Acronyms (10 Soal)" },
    { level: 2, label: "📝 Tingkat 2: Dikte Kata", desc: "Vocabulary Chapters 1-8 (12 Soal)" },
    { level: 3, label: "💬 Tingkat 3: Dikte Kalimat", desc: "Natural Everyday Dialogues (10 Soal)" }
  ];

  container.innerHTML = `
    <!-- Header Hero Card EVC ESL -->
    <div class="dictation-hero-card">
      <div style="font-size: 2.4rem;">🎧</div>
      <div>
        <div style="font-size: 0.75rem; color: var(--accent-pink); font-weight: 800; text-transform: uppercase;">
          Kurikulum Listening & Speaking EVC ESL LibreTexts (2023):
        </div>
        <h4 style="color: #fff; margin: 2px 0 4px;">Progressive Listening-to-Writing Dictation Studio</h4>
        <p style="font-size: 0.82rem; color: #cbd5e1; margin: 0;">
          Dengarkan audio Kodi dengan seksama, lalu ketik huruf demi huruf hingga 100% tepat! Asah ketajaman telinga (listening) dan keakuratan penulisan ejaan kata (writing) bahasa Inggris.
        </p>
      </div>
    </div>

    <!-- Level Filter Selector -->
    <div style="display: flex; gap: 8px; margin-bottom: 16px; overflow-x: auto; padding-bottom: 6px;">
      ${levelTabs.map(t => `
        <button class="choice-card-btn ${currentLevel === t.level ? 'active-eng-mode' : ''}" 
                style="flex: 1; min-width: 190px; justify-content: center; font-weight: 800; ${currentLevel === t.level ? 'border-color: var(--accent-pink); background: rgba(244, 63, 94, 0.15);' : ''}" 
                onclick="setDictationLevelFilter(${t.level})">
          ${t.label}
        </button>
      `).join('')}
    </div>

    <!-- Navigation List Soal -->
    <div style="display: flex; gap: 8px; margin-bottom: 18px; overflow-x: auto; padding-bottom: 6px;">
      ${filteredList.map((item, idx) => `
        <button class="quick-cmd-btn ${idx === appState.currentDictationIndex ? 'active' : ''}" 
                style="padding: 8px 14px; font-weight: 700;" 
                onclick="setDictationIndex(${idx})">
          #${idx + 1}
        </button>
      `).join('')}
    </div>

    <!-- Main Dictation Practice Arena -->
    <div style="background: var(--bg-card); padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-glow); margin-bottom: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 8px;">
        <span style="font-size: 0.78rem; font-weight: 800; color: var(--accent-pink); background: rgba(244, 63, 94, 0.15); padding: 4px 12px; border-radius: 12px; border: 1px solid rgba(244, 63, 94, 0.3);">
          📌 ${currentItem.chapterRef} • ${currentItem.levelName}
        </span>
        <span style="font-size: 0.78rem; color: var(--accent-yellow); font-weight: 700;">
          Tantangan #${appState.currentDictationIndex + 1} dari ${filteredList.length}
        </span>
      </div>

      <!-- Panduan Bahasa Bayi Singkat -->
      <div style="text-align: center; margin-bottom: 20px;">
        <h3 style="color: #fff; font-size: 1.15rem; margin-bottom: 6px;">
          ${currentLevel === 1 ? '🔤 Dengarkan Ejaan Huruf Lalu Ketik Hurufnya!' : 
            currentLevel === 2 ? '📝 Dengarkan Kata Lalu Ketik Kosakata Tersebut!' : 
            '💬 Dengarkan Kalimat Percakapan Lalu Ketik Kalimat Utuhnya!'}
        </h3>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0;">
          Syarat lulus: Akurasi ketik harus <strong>100% tepat</strong> tanpa ada huruf yang salah ya!
        </p>
      </div>

      <!-- Kontrol Pemutar Audio Kodi -->
      <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 22px;">
        <button class="btn-primary" style="font-size: 0.92rem; padding: 10px 18px; display: flex; align-items: center; gap: 8px; background: linear-gradient(135deg, #0ea5e9, #0284c7);" onclick="playCurrentDictationAudio(false, this)">
          🔊 Dengarkan Suara (Normal)
        </button>
        <button class="btn-secondary" style="font-size: 0.92rem; padding: 10px 18px; display: flex; align-items: center; gap: 8px;" onclick="playCurrentDictationAudio(true, this)">
          🐢 Dengarkan Lebih Lambat (Slow)
        </button>
        ${currentLevel > 1 ? `
          <button class="btn-secondary" style="font-size: 0.85rem; padding: 10px 14px; display: flex; align-items: center; gap: 6px;" onclick="spellOutTargetAudio(this)">
            🔤 Bantuan Eja Huruf demi Huruf
          </button>
        ` : ''}
      </div>

      <!-- Real-time Character Tiles Stream -->
      <div id="dictation-char-stream" class="dictation-char-stream"></div>

      <!-- Input Field Mengetik -->
      <div style="max-width: 650px; margin: 0 auto 14px;">
        <input type="text" 
               id="dictation-user-input" 
               class="dictation-input-field" 
               placeholder="👉 Ketik di sini sesuai suara yang kamu dengar..." 
               autocomplete="off" 
               autocorrect="off" 
               autocapitalize="off" 
               spellcheck="false" 
               oninput="onDictationInputChange(event)">
      </div>

      <!-- Status Bar Akurasi Live -->
      <div style="max-width: 650px; margin: 0 auto 18px; display: flex; justify-content: space-between; align-items: center; font-size: 0.82rem; color: var(--text-muted);">
        <span id="dictation-match-count">Karakter cocok: 0 / ${currentItem.targetText.length}</span>
        <span id="dictation-accuracy-pct" style="font-weight: 800; color: var(--accent-cyan);">Akurasi: 0%</span>
      </div>

      <!-- Tombol Peek Clue (Intip Petunjuk Bahasa Bayi) -->
      <div style="text-align: center; margin-bottom: 16px;">
        <button class="btn-secondary" style="font-size: 0.82rem; padding: 6px 14px;" onclick="toggleDictationHint()">
          ${appState.dictationHintRevealed ? '🙈 Sembunyikan Petunjuk' : '💡 Intip Petunjuk / Arti Bahasa Bayi'}
        </button>
      </div>

      <!-- Box Petunjuk Bahasa Bayi (Toggleable) -->
      <div id="dictation-hint-box" style="display: ${appState.dictationHintRevealed ? 'block' : 'none'}; max-width: 650px; margin: 0 auto 20px; background: rgba(250, 204, 21, 0.1); border-left: 3px solid var(--accent-yellow); padding: 14px 18px; border-radius: 8px; font-size: 0.88rem; color: #fef08a;">
        <strong>🍼 Petunjuk Bahasa Bayi Kodi:</strong>
        <p style="margin: 6px 0 4px 0; color: #fef08a;">${currentItem.babyClue}</p>
        <div style="font-size: 0.82rem; color: #cbd5e1; font-style: italic; margin-top: 4px;">
          Arti Terjemahan: "${currentItem.meaning}"
        </div>
      </div>

      <!-- Banner Sukses (Muncul saat 100% Tepat) -->
      <div id="dictation-success-banner" style="display: none; max-width: 650px; margin: 0 auto;"></div>
    </div>
  `;

  // Render initial character tiles
  updateDictationTiles("", currentItem.targetText);

  // Fokuskan kursor otomatis ke kolom input
  setTimeout(() => {
    const inputEl = document.getElementById("dictation-user-input");
    if (inputEl) inputEl.focus();
  }, 100);
}

// Window Controller Functions for Dictation Studio
window.setDictationLevelFilter = function(lvl) {
  sfx.playClick();
  appState.currentDictationLevelFilter = lvl;
  appState.currentDictationIndex = 0;
  appState.dictationHintRevealed = false;
  renderEvcDictationStudio();
};

window.setDictationIndex = function(idx) {
  sfx.playClick();
  appState.currentDictationIndex = idx;
  appState.dictationHintRevealed = false;
  renderEvcDictationStudio();
};

window.toggleDictationHint = function() {
  sfx.playClick();
  appState.dictationHintRevealed = !appState.dictationHintRevealed;
  const hintBox = document.getElementById("dictation-hint-box");
  if (hintBox) {
    hintBox.style.display = appState.dictationHintRevealed ? "block" : "none";
  }
  const btn = event?.currentTarget;
  if (btn) {
    btn.innerText = appState.dictationHintRevealed ? "🙈 Sembunyikan Petunjuk" : "💡 Intip Petunjuk / Arti Bahasa Bayi";
  }
};

window.playCurrentDictationAudio = function(isSlow, btn = null) {
  sfx.playClick();
  const currentLevel = appState.currentDictationLevelFilter || 1;
  const filteredList = evcDictationChallenges.filter(c => c.level === currentLevel);
  const currentItem = filteredList[appState.currentDictationIndex] || filteredList[0];
  if (!currentItem) return;

  const rate = isSlow ? 0.6 : (currentLevel === 1 ? 0.75 : 0.85);
  speechEngine.speakText(currentItem.audioText, rate, btn, "en-US");
};

window.spellOutTargetAudio = function(btn = null) {
  sfx.playClick();
  const currentLevel = appState.currentDictationLevelFilter || 1;
  const filteredList = evcDictationChallenges.filter(c => c.level === currentLevel);
  const currentItem = filteredList[appState.currentDictationIndex] || filteredList[0];
  if (!currentItem) return;

  // Eja huruf per huruf dipisahkan koma agar TTS melafalkan satu per satu
  const spelled = currentItem.targetText
    .toUpperCase()
    .split('')
    .filter(c => /[A-Z]/.test(c))
    .join(', ');

  speechEngine.speakText(spelled, 0.65, btn, "en-US");
};

window.onDictationInputChange = function(e) {
  const currentLevel = appState.currentDictationLevelFilter || 1;
  const filteredList = evcDictationChallenges.filter(c => c.level === currentLevel);
  const currentItem = filteredList[appState.currentDictationIndex] || filteredList[0];
  if (!currentItem) return;

  const inputVal = e.target.value;
  updateDictationTiles(inputVal, currentItem.targetText, currentItem);
};

function updateDictationTiles(inputVal, targetStr, currentItem = null) {
  const streamEl = document.getElementById("dictation-char-stream");
  const matchCountEl = document.getElementById("dictation-match-count");
  const accPctEl = document.getElementById("dictation-accuracy-pct");
  const successBanner = document.getElementById("dictation-success-banner");
  const inputEl = document.getElementById("dictation-user-input");
  if (!streamEl) return;

  let tilesHtml = "";
  let matchedCount = 0;

  for (let i = 0; i < targetStr.length; i++) {
    const targetChar = targetStr[i];
    const isTargetSpace = targetChar === ' ';

    if (i < inputVal.length) {
      const userChar = inputVal[i];
      if (isTargetSpace) {
        if (userChar === ' ') {
          tilesHtml += `<span class="dictation-char-tile space matched">␣</span>`;
          matchedCount++;
        } else {
          tilesHtml += `<span class="dictation-char-tile space error">${userChar}</span>`;
        }
      } else {
        if (userChar.toLowerCase() === targetChar.toLowerCase()) {
          tilesHtml += `<span class="dictation-char-tile matched">${targetChar}</span>`;
          matchedCount++;
        } else {
          tilesHtml += `<span class="dictation-char-tile error">${userChar}</span>`;
        }
      }
    } else {
      if (isTargetSpace) {
        tilesHtml += `<span class="dictation-char-tile space">␣</span>`;
      } else {
        tilesHtml += `<span class="dictation-char-tile">_</span>`;
      }
    }
  }

  streamEl.innerHTML = tilesHtml;

  // Hitung persentase akurasi
  const totalChars = targetStr.length;
  let accuracyPct = Math.round((matchedCount / totalChars) * 100);
  if (accuracyPct > 100) accuracyPct = 100;

  if (matchCountEl) matchCountEl.innerText = `Karakter cocok: ${matchedCount} / ${totalChars}`;
  if (accPctEl) {
    accPctEl.innerText = `Akurasi: ${accuracyPct}%`;
    accPctEl.style.color = accuracyPct === 100 ? "var(--accent-green)" : (accuracyPct > 50 ? "var(--accent-yellow)" : "var(--accent-cyan)");
  }

  // Evaluasi 100% tepat
  const isExactMatch = inputVal.trim().toLowerCase() === targetStr.trim().toLowerCase();
  const normalizedUser = inputVal.trim().toLowerCase().replace(/[.,!?;:'"]/g, '');
  const normalizedTarget = targetStr.trim().toLowerCase().replace(/[.,!?;:'"]/g, '');
  const isNormalizedMatch = normalizedUser === normalizedTarget && normalizedUser.length > 0;

  const isComplete = isExactMatch || isNormalizedMatch;

  if (isComplete && currentItem) {
    if (successBanner && successBanner.style.display !== "block") {
      sfx.playSuccess();
      triggerConfetti();

      // Tambahkan bintang jika belum diselesaikan di sesi ini
      if (!appState.completedDictations) appState.completedDictations = {};
      if (!appState.completedDictations[currentItem.id]) {
        appState.completedDictations[currentItem.id] = true;
        appState.stars += 1;
        saveProgress();
        updateHeaderStars();
      }

      if (inputEl) {
        inputEl.style.borderColor = "var(--accent-green)";
        inputEl.style.boxShadow = "0 0 20px rgba(74, 222, 128, 0.4)";
      }

      // Pastikan semua ubin berwarna hijau berkilau
      let allMatchedTiles = "";
      for (let i = 0; i < targetStr.length; i++) {
        const c = targetStr[i];
        if (c === ' ') {
          allMatchedTiles += `<span class="dictation-char-tile space matched">␣</span>`;
        } else {
          allMatchedTiles += `<span class="dictation-char-tile matched">${c}</span>`;
        }
      }
      streamEl.innerHTML = allMatchedTiles;
      if (accPctEl) accPctEl.innerText = "Akurasi: 100% (Sempurna!)";

      successBanner.style.display = "block";
      successBanner.innerHTML = `
        <div style="background: rgba(74, 222, 128, 0.15); border: 2px solid var(--accent-green); padding: 18px 20px; border-radius: 12px; margin-top: 16px; text-align: center; animation: fadeIn 0.3s ease;">
          <div style="font-size: 2.2rem; margin-bottom: 6px;">🎉 ⭐ 💯</div>
          <h3 style="color: #4ade80; margin: 0 0 6px 0; font-size: 1.25rem;">
            LUAR BIASA! 100% AKURAT & BENAR! (+1 Bintang ⭐)
          </h3>
          <p style="color: #f1f5f9; font-size: 1.05rem; font-weight: 700; margin: 6px 0;">
            "${currentItem.targetText}"
          </p>
          <div style="font-size: 0.88rem; color: #a7f3d0; margin-bottom: 14px; font-style: italic;">
            Arti: ${currentItem.meaning}
          </div>
          <button class="btn-primary" style="font-size: 0.95rem; padding: 10px 24px; font-weight: 800; background: linear-gradient(135deg, #10b981, #059669); margin-bottom: 14px;" onclick="nextDictationChallenge()">
            ➡️ Lanjut ke Soal Berikutnya
          </button>
          <div id="dictation-ai-feedback-box"></div>
        </div>
      `;

      kodiAI.renderFeedback({
        containerId: "dictation-ai-feedback-box",
        isCorrect: true,
        question: `Dikte Kalimat/Kata: "${currentItem.audioText}"`,
        userAnswer: inputVal,
        correctAnswer: currentItem.targetText,
        explanation: `Ejaan dan penulisanmu 100% tepat! Arti bahasa Indonesia: "${currentItem.meaning}". ${currentItem.babyClue}`,
        concept: `${currentItem.chapterRef} (${currentItem.levelName})`,
        babyClue: currentItem.babyClue
      });
    }
  } else {
    if (successBanner) successBanner.style.display = "none";
    if (inputEl) {
      inputEl.style.borderColor = "var(--accent-cyan)";
      inputEl.style.boxShadow = "0 0 15px rgba(56, 189, 248, 0.25)";
    }
  }
}

window.nextDictationChallenge = function() {
  sfx.playClick();
  const currentLevel = appState.currentDictationLevelFilter || 1;
  const filteredList = evcDictationChallenges.filter(c => c.level === currentLevel);

  if (appState.currentDictationIndex + 1 < filteredList.length) {
    appState.currentDictationIndex += 1;
  } else {
    if (currentLevel < 3) {
      appState.currentDictationLevelFilter += 1;
      appState.currentDictationIndex = 0;
      setKodiSpeech(
        `Selamat! Kamu telah menaklukkan semua soal di Tingkat ${currentLevel}! Sekarang mari naik level ke Tingkat ${currentLevel + 1}!`,
        "Telingamu semakin peka dan ketikanmu semakin gesit!"
      );
    } else {
      appState.currentDictationIndex = 0;
      setKodiSpeech(
        "🏆 WOW FANTASTIS! Kamu telah menuntaskan seluruh 32 tantangan Dikte & Mengetik EVC ESL!",
        "Kamu siap berbicara, mendengar, dan menulis bahasa Inggris profesional dengan percaya diri!"
      );
    }
  }

  appState.dictationHintRevealed = false;
  renderEvcDictationStudio();
};

// ================= DICTIONARY TAB LOGIC =================
function renderDictionary(filter = "") {
  const container = document.getElementById("dictionary-list");
  if (!container) return;

  const filtered = itDictionary.filter(item => {
    const q = filter.toLowerCase();
    return item.term.toLowerCase().includes(q) ||
           item.babyAnalogy.toLowerCase().includes(q) ||
           item.category.toLowerCase().includes(q);
  });

  container.innerHTML = filtered.map(item => `
    <div class="dict-card">
      <div class="dict-term">
        <span>${item.icon} ${item.term}</span>
        <span class="dict-category-tag">${item.category}</span>
      </div>
      <div class="dict-baby-analogy">
        🍼 <strong>${item.babyAnalogy}</strong>
      </div>
      <p class="dict-formal-desc">${item.detail}</p>
    </div>
  `).join('');
}

function initDictionarySearch() {
  const searchInput = document.getElementById("dict-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderDictionary(e.target.value);
    });
  }
}

// ================= SANDBOX TERMINAL LOGIC =================
function initSandboxTerminal() {
  const input = document.getElementById("sandbox-cmd-input");
  const body = document.getElementById("sandbox-term-body");
  if (!input || !body) return;

  input.onkeydown = function(e) {
    if (e.key === "Enter") {
      const val = input.value.trim();
      if (!val) return;
      sfx.playClick();
      body.innerHTML += `<div class="term-line"><span class="term-prompt">C:\\Users\\Playground&gt;</span> ${val}</div>`;
      input.value = "";
      processSandboxCmd(val, body);
      body.scrollTop = body.scrollHeight;
    }
  };
}

function processSandboxCmd(cmd, termEl) {
  const lower = cmd.toLowerCase();

  if (lower === 'cls' || lower === 'clear') {
    termEl.innerHTML = `<div class="term-line info">Terminal dibersihkan.</div>`;
  } else if (lower === 'help') {
    termEl.innerHTML += `
      <div class="term-line info">Daftar mantra yang bisa kamu coba:</div>
      <div class="term-line">  ipconfig     - Lihat nomor IP & Gateway</div>
      <div class="term-line">  ping [host]  - Cek sambungan jaringan (contoh: ping google.com)</div>
      <div class="term-line">  systeminfo   - Menampilkan info prosesor & OS</div>
      <div class="term-line">  mkdir [nama] - Buat map folder baru</div>
      <div class="term-line">  whoami       - Siapa nama user kamu</div>
      <div class="term-line">  cls          - Bersihkan layar</div>
    `;
  } else if (lower.startsWith('ping')) {
    termEl.innerHTML += `
      <div class="term-line">Pinging host with 32 bytes of data...</div>
      <div class="term-line success">Reply from host: bytes=32 time=18ms TTL=117 (Koneksi lancar jaya!)</div>
      <div class="term-line success">Reply from host: bytes=32 time=20ms TTL=117</div>
    `;
  } else if (lower === 'ipconfig') {
    termEl.innerHTML += `
      <div class="term-line">IPv4 Address. . . . . . . . . . . : 192.168.1.100</div>
      <div class="term-line">Subnet Mask . . . . . . . . . . . : 255.255.255.0</div>
      <div class="term-line">Default Gateway . . . . . . . . . : 192.168.1.1</div>
    `;
  } else if (lower === 'systeminfo') {
    termEl.innerHTML += `
      <div class="term-line">OS Name: Kodi Windows 11 Education Pro</div>
      <div class="term-line">Processor: Quad-Core Turbo Kodi-Chip 3.8 GHz</div>
      <div class="term-line">Total Physical Memory: 16.384 MB (16 GB)</div>
    `;
  } else if (lower === 'whoami') {
    termEl.innerHTML += `<div class="term-line info">junior-it-support\\${appState.playerName.toLowerCase().replace(/\\s+/g, '')}</div>`;
  } else if (lower.startsWith('mkdir')) {
    const folder = cmd.split(' ')[1] || 'FolderBaru';
    termEl.innerHTML += `<div class="term-line success">✓ Folder '${folder}' berhasil dibuat di C:\\Users\\Playground\\Documents</div>`;
  } else {
    termEl.innerHTML += `
      <div class="term-line error">'${cmd}' tidak dikenali. Ketik 'help' untuk melihat daftar perintah.</div>
    `;
  }
}

// ================= CERTIFICATE & CELEBRATION =================
function renderCertificateView() {
  const nameInput = document.getElementById("cert-student-name");
  const starCount = document.getElementById("cert-stars-total");
  const certDate = document.getElementById("cert-issue-date");

  if (nameInput) {
    nameInput.value = appState.playerName;
    nameInput.oninput = (e) => {
      appState.playerName = e.target.value;
      saveProgress();
    };
  }

  if (starCount) starCount.textContent = `${appState.stars} Bintang`;
  if (certDate) {
    const today = new Date();
    certDate.textContent = today.toLocaleDateString("id-ID", {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  }

  setKodiSpeech(
    "Ini dia Sertifikat Kelulusan Resmi Akademi IT Support & Koding Pemula! Tulis namamu dan cetak buat kenang-kenangan!",
    "Bisa kamu download atau cetak langsung lewat tombol di bawah!"
  );
}

function printCertificate() {
  sfx.playClick();
  window.print();
}

// ================= PWA MOBILE INSTALLATION =================
function initPwaInstall() {
  // Register Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(() => console.log('Kodi PWA Service Worker Registered!'))
      .catch((err) => console.warn('SW registration failed:', err));
  }

  // Intercept beforeinstallprompt for Android Chrome
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    appState.deferredInstallPrompt = e;
    const installBtn = document.getElementById('btn-pwa-install');
    if (installBtn) {
      installBtn.style.display = 'inline-flex';
    }
  });
}

function triggerPwaInstall() {
  sfx.playClick();
  if (appState.deferredInstallPrompt) {
    appState.deferredInstallPrompt.prompt();
    appState.deferredInstallPrompt.userChoice.then((choice) => {
      if (choice.outcome === 'accepted') {
        alert("Horee! Aplikasi berhasil dipasang di layar utama HP kamu! 🎉");
      }
      appState.deferredInstallPrompt = null;
    });
  } else {
    // Petunjuk manual di HP jika belum otomatis
    alert(
      "📱 CARA PASANG DI HP:\n\n" +
      "1. Buka link web ini di Google Chrome di HP-mu.\n" +
      "2. Tekan titik tiga (⋮) di pojok kanan atas Chrome.\n" +
      "3. Pilih 'Tambahkan ke Layar Utama' (Add to Home screen) atau 'Install Aplikasi'.\n\n" +
      "Aplikasi akan langsung terpasang di HP seperti aplikasi resmi!"
    );
  }
}

// ================= CONFETTI CANNON =================
function triggerConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#38bdf8", "#4ade80", "#facc15", "#f472b6", "#a855f7", "#fb923c"];

  for (let i = 0; i < 120; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.8) * 16,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10
    });
  }

  let animationFrame;
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.3;
      p.rotation += p.rotationSpeed;

      if (p.y < canvas.height) {
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    });

    if (alive) {
      animationFrame = requestAnimationFrame(update);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  update();
}

// ================= CONTROLLER AKSEN BAHASA INGGRIS =================
window.toggleAccent = function() {
  sfx.playClick();
  const newAccent = speechEngine.toggleEnglishAccent();
  const label = newAccent === 'en-GB' ? 'British (UK) 🇬🇧' : 'American (US) 🇺🇸';
  setKodiSpeech(
    `Aksen bahasa Inggris berhasil diubah ke ${label}! Sekarang semua audio listening dan soal akan dibacakan dengan logat ini.`,
    "Kamu bisa ganti kapan saja sesuai tes impianmu!"
  );
  const engTab = document.getElementById("tab-english-trainer");
  if (engTab && engTab.classList.contains("active")) {
    renderEnglishTrainer();
  }
};

window.setAccentPreference = function(accent) {
  sfx.playClick();
  speechEngine.setEnglishAccent(accent);
  const label = accent === 'en-GB' ? 'British (UK) 🇬🇧' : 'American (US) 🇺🇸';
  setKodiSpeech(
    `Aksen bahasa Inggris diubah ke ${label}!`,
    "Semua audio reading & listening otomatis memakai logat ini."
  );
  renderEnglishTrainer();
};

// ================= LIGHT / DARK THEME MANAGEMENT =================
function initTheme() {
  const saved = localStorage.getItem("kodi_theme") || "dark";
  applyTheme(saved);
}

function applyTheme(theme) {
  const btn = document.getElementById("theme-toggle-btn");
  if (theme === "light") {
    document.body.classList.add("light-theme");
    if (btn) btn.innerHTML = "🌙 Gelap";
  } else {
    document.body.classList.remove("light-theme");
    if (btn) btn.innerHTML = "☀️ Terang";
  }
}

window.toggleTheme = function() {
  if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();
  const isLight = document.body.classList.contains("light-theme");
  const next = isLight ? "dark" : "light";
  localStorage.setItem("kodi_theme", next);
  applyTheme(next);
  setKodiSpeech(
    next === "light" 
      ? "Mode Terang aktif! Tampilan putih bersih dan nyaman dibaca!" 
      : "Mode Gelap aktif! Tampilan ramah mata buat sesi koding!",
    "Kamu bisa ganti mode kapan saja lewat tombol di pojok kanan atas."
  );
};

// ================= APP INITIALIZATION =================
window.addEventListener("DOMContentLoaded", () => {
  initTheme();
  loadProgress();
  renderQuestGrid();
  initDictionarySearch();
  initPwaInstall();
  speechEngine.updateAccentUi();

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
