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
  currentOutputIndex: 0,
  currentEnglishDrillIndex: 0,
  currentToeflIndex: 0,
  currentIbtIndex: 0,
  currentIbtFilter: "all",
  ibtTimerInterval: null,
  ibtPrepInterval: null,
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
    levelTagEl.textContent = `${appState.completedLevels.length}/5 Selesai`;
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
      "Welcome to English Studio! Di sini kita latihan Speaking, Listening, TOEFL ITP/IELTS, dan Bedah Buku TOEFL iBT Beasiswa S2 Luar Negeri!",
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
    if (choice.correct) {
      showStepSuccess(choice.feedback);
    } else {
      sfx.playError();
      const feedbackBox = document.getElementById("step-feedback-box");
      if (feedbackBox) {
        feedbackBox.innerHTML = `
          <div style="background: rgba(248, 113, 113, 0.15); border: 1.5px solid var(--accent-red); padding: 12px 18px; border-radius: 8px; color: #fca5a5;">
            😅 ${choice.feedback}
          </div>
        `;
      }
    }
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
    if (part === currentCase.correctPart) {
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
        showStepSuccess("Luar biasa! Kamu paham betul kapan butuh RAM, SSD, atau PSU!");
      }
    } else {
      sfx.playError();
      alert(`Ups, bukan ${part}! Ingat: ${currentCase.hint}`);
    }
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
      showStepSuccess("KODE BERHASIL DIJALANKAN! Kipas turbo server langsung menyala dan notifikasi HP terkirim!");
    } else {
      sfx.playError();
      alert("Urutan balok resepnya masih tertukar nih. Pastikan urutannya: JIKA suhu > 30 -> nyalakan kipas -> kirim peringatan -> SELAIN ITU -> kipas normal!");
    }
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
    if (chosen.correct) {
      showStepSuccess(chosen.feedback);
    } else {
      sfx.playError();
      alert(chosen.feedback);
    }
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
      }
    }, 400);
  };
}

// ================= SQL TRAINER VIEW =================
function renderSqlTrainer() {
  const container = document.getElementById("sql-content-area");
  if (!container) return;

  const currentChal = sqlChallenges[appState.currentSqlIndex] || sqlChallenges[0];
  const tableData = mockDB[currentChal.tableName] || mockDB.Employees;

  container.innerHTML = `
    <!-- Switcher Tab Soal SQL vs Output -->
    <div style="display: flex; gap: 10px; margin-bottom: 20px;">
      <button class="choice-card-btn active-sql-mode" id="btn-mode-sql" style="flex: 1; justify-content: center; font-weight: 800;" onclick="switchSqlSubMode('queries')">
        🗄️ Soal Kueri SQL Berbasis Tabel
      </button>
      <button class="choice-card-btn" id="btn-mode-output" style="flex: 1; justify-content: center; font-weight: 800;" onclick="switchSqlSubMode('output')">
        🧪 Soal Tebak Output Koding (C#, JS, SQL)
      </button>
    </div>

    <!-- SUBMODE 1: SQL TABLE QUERIES -->
    <div id="submode-queries">
      <!-- Pilihan Soal SQL -->
      <div style="display: flex; gap: 8px; margin-bottom: 16px; overflow-x: auto; padding-bottom: 6px;">
        ${sqlChallenges.map((c, idx) => `
          <button class="quick-cmd-btn ${idx === appState.currentSqlIndex ? 'active' : ''}" style="padding: 8px 14px; font-weight: 700;" onclick="setSqlChallenge(${idx})">
            Soal ${idx + 1}: ${c.title.split(':')[1] || c.title}
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
      </div>
    </div>

    <!-- SUBMODE 2: OUTPUT PREDICTION DRILL -->
    <div id="submode-output" style="display: none;"></div>
  `;

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
    const inputVal = area.value.trim().toLowerCase().replace(/\s+/g, " ");
    const correctVal = currentChal.correctQuery.toLowerCase().replace(/\s+/g, " ");

    const resultWrap = document.getElementById("sql-result-wrap");
    const tableBox = document.getElementById("sql-result-table-box");
    resultWrap.style.display = "block";

    if (inputVal.includes("select") && (inputVal === correctVal || inputVal.includes("where"))) {
      sfx.playSuccess();
      tableBox.innerHTML = renderHTMLTable(currentChal.expectedRows, 'sql-output-preview');
      tableBox.innerHTML += `
        <div style="margin-top: 12px; color: var(--accent-green); font-weight: 700;">
          🎉 BINTANG 5! Kueri SQL kamu 100% tepat dan menghasilkan baris data yang diminta perusahaan!
        </div>
      `;
    } else {
      sfx.playError();
      tableBox.innerHTML = `
        <div style="color: var(--accent-red); padding: 12px; font-weight: 700;">
          ⚠️ Kueri belum menghasilkan data yang pas. Coba cek petunjuk bahasa bayi di atas!
        </div>
      `;
    }
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

  const q = outputPredictionQuestions[appState.currentOutputIndex] || outputPredictionQuestions[0];

  container.innerHTML = `
    <div style="display: flex; gap: 8px; margin-bottom: 16px; overflow-x: auto; padding-bottom: 6px;">
      ${outputPredictionQuestions.map((item, idx) => `
        <button class="quick-cmd-btn ${idx === appState.currentOutputIndex ? 'active' : ''}" style="padding: 8px 14px; font-weight: 700;" onclick="setOutputIndex(${idx})">
          Soal ${idx + 1} (${item.lang})
        </button>
      `).join('')}
    </div>

    <div style="background: var(--bg-card); padding: 22px; border-radius: var(--radius-md); border: 1px solid var(--border-glow); margin-bottom: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="font-size: 0.78rem; font-weight: 700; color: var(--accent-cyan);">${q.lang} • ${q.badge}</span>
        <span style="font-size: 0.75rem; color: var(--accent-yellow); font-weight: 700;">Soal ${appState.currentOutputIndex + 1} dari ${outputPredictionQuestions.length}</span>
      </div>

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

  window.setOutputIndex = function(idx) {
    sfx.playClick();
    appState.currentOutputIndex = idx;
    renderOutputDrill();
  };

  window.checkOutputAnswer = function(idx) {
    const opt = q.options[idx];
    const box = document.getElementById("output-feedback-box");
    box.style.display = "block";

    if (opt.correct) {
      sfx.playSuccess();
      box.innerHTML = `
        <div style="background: rgba(74, 222, 128, 0.15); border: 1.5px solid var(--accent-green); padding: 14px; border-radius: 8px; color: #86efac;">
          <h4 style="margin-bottom: 4px;">🎉 JAWABAN BENAR!</h4>
          <p style="font-size: 0.88rem; color: #f8fafc;"><strong>🍼 Penjelasan Bahasa Bayi:</strong> ${q.babyExplanation}</p>
        </div>
      `;
    } else {
      sfx.playError();
      box.innerHTML = `
        <div style="background: rgba(248, 113, 113, 0.15); border: 1.5px solid var(--accent-red); padding: 14px; border-radius: 8px; color: #fca5a5;">
          <h4 style="margin-bottom: 4px;">😅 Kurang Tepat, yuk bedah bareng:</h4>
          <p style="font-size: 0.88rem; color: #f8fafc;"><strong>🍼 Penjelasan Bahasa Bayi:</strong> ${q.babyExplanation}</p>
        </div>
      `;
    }
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
    <!-- Switcher 4 Mode English Studio -->
    <div style="display: flex; gap: 10px; margin-bottom: 20px; flex-wrap: wrap;">
      <button class="choice-card-btn active-eng-mode" id="btn-mode-spk" style="flex: 1; min-width: 200px; justify-content: center; font-weight: 800; border-color: var(--accent-cyan);" onclick="switchEnglishSubMode('speaking')">
        🎙️ Wawancara Kerja Profesional
      </button>
      <button class="choice-card-btn" id="btn-mode-puzzle" style="flex: 1; min-width: 200px; justify-content: center; font-weight: 800;" onclick="switchEnglishSubMode('puzzle')">
        🔤 Game Huruf Hilang & Kosakata
      </button>
      <button class="choice-card-btn" id="btn-mode-toefl" style="flex: 1; min-width: 200px; justify-content: center; font-weight: 800;" onclick="switchEnglishSubMode('toefl')">
        📖 Marathon TOEFL ITP & IELTS
      </button>
      <button class="choice-card-btn" id="btn-mode-ibt" style="flex: 1; min-width: 200px; justify-content: center; font-weight: 800; background: linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(168, 85, 247, 0.2));" onclick="switchEnglishSubMode('ibt')">
        🎓 Master TOEFL iBT Beasiswa S2
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
          <button class="btn-secondary" style="display: flex; align-items: center; gap: 8px;" onclick="listenTargetSentence(false)">
            🔊 Dengarkan (Normal)
          </button>
          <button class="btn-secondary" style="display: flex; align-items: center; gap: 8px;" onclick="listenTargetSentence(true)">
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

    <!-- SUBMODE 3: MARATHON TOEFL ITP & IELTS -->
    <div id="submode-toefl" style="display: none;"></div>

    <!-- SUBMODE 4: MASTER TOEFL iBT BEASISWA S2 -->
    <div id="submode-ibt" style="display: none;"></div>
  `;

  window.setEnglishDrillIndex = function(idx) {
    sfx.playClick();
    appState.currentEnglishDrillIndex = idx;
    renderEnglishTrainer();
  };

  window.listenTargetSentence = function(isSlow) {
    sfx.playClick();
    const rate = isSlow ? 0.65 : 0.85;
    speechEngine.speakText(drill.targetSentence, rate);
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
        `;
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
    const toeflSec = document.getElementById("submode-toefl");
    const ibtSec = document.getElementById("submode-ibt");
    const bS = document.getElementById("btn-mode-spk");
    const bP = document.getElementById("btn-mode-puzzle");
    const bT = document.getElementById("btn-mode-toefl");
    const bI = document.getElementById("btn-mode-ibt");

    [bS, bP, bT, bI].forEach(b => { if (b) b.style.borderColor = "rgba(255,255,255,0.1)"; });

    if (mode === 'speaking') {
      spkSec.style.display = "block";
      puzSec.style.display = "none";
      toeflSec.style.display = "none";
      if (ibtSec) ibtSec.style.display = "none";
      bS.style.borderColor = "var(--accent-cyan)";
    } else if (mode === 'puzzle') {
      spkSec.style.display = "none";
      puzSec.style.display = "block";
      toeflSec.style.display = "none";
      if (ibtSec) ibtSec.style.display = "none";
      bP.style.borderColor = "var(--accent-cyan)";
      renderMissingLettersGame();
    } else if (mode === 'toefl') {
      spkSec.style.display = "none";
      puzSec.style.display = "none";
      toeflSec.style.display = "block";
      if (ibtSec) ibtSec.style.display = "none";
      bT.style.borderColor = "var(--accent-cyan)";
      renderComprehensiveToeflBank();
    } else if (mode === 'ibt') {
      spkSec.style.display = "none";
      puzSec.style.display = "none";
      toeflSec.style.display = "none";
      if (ibtSec) ibtSec.style.display = "block";
      bI.style.borderColor = "var(--accent-cyan)";
      renderToeflIbtBuildingSkills();
    }
  };
}

// ================= GAME HURUF HILANG (SPELLING & VOCAB PUZZLE) =================
function renderMissingLettersGame() {
  const container = document.getElementById("submode-puzzle");
  if (!container) return;

  const puzzle = missingLetterPuzzles[appState.currentPuzzleIndex] || missingLetterPuzzles[0];

  // Buat opsi huruf acak (termasuk huruf jawaban yang benar + beberapa huruf pengecoh)
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const allNeeded = [...puzzle.missingLetters];
  while (allNeeded.length < 8) {
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    if (!allNeeded.includes(randomLetter)) allNeeded.push(randomLetter);
  }
  allNeeded.sort(() => Math.random() - 0.5);

  container.innerHTML = `
    <!-- Navigasi Soal Puzzle -->
    <div style="display: flex; gap: 8px; margin-bottom: 16px; overflow-x: auto; padding-bottom: 6px;">
      ${missingLetterPuzzles.map((p, idx) => `
        <button class="quick-cmd-btn ${idx === appState.currentPuzzleIndex ? 'active' : ''}" style="padding: 8px 14px; font-weight: 700;" onclick="setPuzzleIndex(${idx})">
          Kata #${idx + 1}
        </button>
      `).join('')}
    </div>

    <div style="background: var(--bg-card); padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-glow); margin-bottom: 20px; text-align: center;">
      <span style="font-size: 0.78rem; font-weight: 700; color: var(--accent-pink);">${puzzle.category} • Kosakata #${appState.currentPuzzleIndex + 1} dari ${missingLetterPuzzles.length}</span>

      <!-- Petunjuk Bahasa Bayi -->
      <div style="background: rgba(250, 204, 21, 0.1); border-left: 3px solid var(--accent-yellow); padding: 12px 16px; border-radius: 8px; font-size: 0.95rem; color: #fef08a; margin: 14px auto; max-width: 600px; text-align: left;">
        ${puzzle.babyClue}
        <div style="font-size: 0.8rem; color: #cbd5e1; margin-top: 4px; font-style: italic;">
          Arti resmi: ${puzzle.meaning}
        </div>
      </div>

      <!-- Tampilan Papan Huruf Bertanda Garis Bawah -->
      <div style="margin: 24px 0;">
        <span style="font-family: var(--font-code); font-size: 2.2rem; font-weight: 900; letter-spacing: 8px; color: var(--accent-cyan); text-shadow: 0 0 16px rgba(56, 189, 248, 0.5);" id="puzzle-masked-display">
          ${puzzle.masked}
        </span>
      </div>

      <!-- Tombol Audio Pelafalan Kata -->
      <div style="margin-bottom: 20px;">
        <button class="btn-secondary" style="font-size: 0.85rem;" onclick="speechEngine.speakText('${puzzle.word}', 0.75)">
          🔊 Dengarkan Cara Baca Kata Ini
        </button>
      </div>

      <!-- Tombol Pilihan Huruf Lengkap -->
      <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 10px;">Pilih huruf yang hilang di bawah ini:</p>
      <div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; max-width: 500px; margin: 0 auto 16px;">
        ${allNeeded.map(letter => `
          <button class="choice-card-btn" style="width: 48px; height: 48px; justify-content: center; font-size: 1.2rem; font-weight: 800; font-family: var(--font-code); padding: 0;" onclick="guessLetter('${letter}')">
            ${letter}
          </button>
        `).join('')}
      </div>

      <div id="puzzle-feedback" style="display: none; max-width: 500px; margin: 0 auto;"></div>
    </div>
  `;

  window.setPuzzleIndex = function(idx) {
    sfx.playClick();
    appState.currentPuzzleIndex = idx;
    renderMissingLettersGame();
  };

  window.guessLetter = function(letter) {
    sfx.playClick();
    const box = document.getElementById("puzzle-feedback");
    const display = document.getElementById("puzzle-masked-display");
    box.style.display = "block";

    if (puzzle.missingLetters.includes(letter)) {
      sfx.playSuccess();
      display.innerHTML = puzzle.word.split("").join(" ");
      display.style.color = "var(--accent-green)";
      box.innerHTML = `
        <div style="background: rgba(74, 222, 128, 0.15); border: 1.5px solid var(--accent-green); padding: 12px; border-radius: 8px; color: #86efac; font-weight: 700;">
          🎉 HOREE BENAR! Kata lengkapnya adalah: ${puzzle.word}!
        </div>
      `;
      triggerConfetti();
    } else {
      sfx.playError();
      box.innerHTML = `
        <div style="background: rgba(248, 113, 113, 0.15); border: 1.5px solid var(--accent-red); padding: 12px; border-radius: 8px; color: #fca5a5;">
          😅 Huruf '${letter}' tidak ada di kata ini. Coba dengarkan suaranya lewat tombol 🔊 ya!
        </div>
      `;
    }
  };
}

// ================= MARATHON BANK SOAL TOEFL ITP & IELTS =================
function renderComprehensiveToeflBank() {
  const container = document.getElementById("submode-toefl");
  if (!container) return;

  const q = comprehensiveToeflBank[appState.currentToeflIndex] || comprehensiveToeflBank[0];

  container.innerHTML = `
    <!-- Pilihan Cepat Soal 1-18 -->
    <div style="display: flex; gap: 8px; margin-bottom: 16px; overflow-x: auto; padding-bottom: 6px;">
      ${comprehensiveToeflBank.map((item, idx) => `
        <button class="quick-cmd-btn ${idx === appState.currentToeflIndex ? 'active' : ''}" style="padding: 8px 12px; font-weight: 700;" onclick="setToeflIndex(${idx})">
          Soal #${idx + 1}
        </button>
      `).join('')}
    </div>

    <div style="background: var(--bg-card); padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-glow); margin-bottom: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 6px;">
        <span style="font-size: 0.78rem; font-weight: 800; color: var(--accent-pink); background: rgba(244, 114, 182, 0.15); padding: 4px 10px; border-radius: 12px;">
          📌 Kisi-kisi: ${q.topic}
        </span>
        <span style="font-size: 0.75rem; color: var(--accent-yellow); font-weight: 700;">
          Soal ${appState.currentToeflIndex + 1} dari ${comprehensiveToeflBank.length}
        </span>
      </div>

      <h3 style="color: #fff; margin-bottom: 16px; font-size: 1.15rem; line-height: 1.6;">
        "${q.question}"
      </h3>

      <!-- Tombol Audio untuk Mendengar Soal -->
      <div style="margin-bottom: 14px;">
        <button class="btn-secondary" style="font-size: 0.8rem; padding: 6px 12px;" onclick="speechEngine.speakText('${q.question.replace('_____', 'blank')}', 0.8)">
          🔊 Dengarkan Kalimat Soal
        </button>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 10px; margin-bottom: 16px;">
        ${q.options.map((opt, idx) => `
          <button class="choice-card-btn" style="justify-content: center; font-weight: 700;" onclick="checkComprehensiveToefl(${idx})">
            ${opt}
          </button>
        `).join('')}
      </div>

      <div id="toefl-feedback-box" style="display: none;"></div>
    </div>
  `;

  window.setToeflIndex = function(idx) {
    sfx.playClick();
    appState.currentToeflIndex = idx;
    renderComprehensiveToeflBank();
  };

  window.checkComprehensiveToefl = function(idx) {
    const box = document.getElementById("toefl-feedback-box");
    box.style.display = "block";

    if (idx === q.correctIndex) {
      sfx.playSuccess();
      box.innerHTML = `
        <div style="background: rgba(74, 222, 128, 0.15); border: 1.5px solid var(--accent-green); padding: 14px; border-radius: 8px; color: #86efac;">
          <h4 style="margin-bottom: 4px;">🎉 BINTANG 5! JAWABAN TEPAT!</h4>
          <p style="font-size: 0.88rem; color: #f8fafc;">${q.explanation}</p>
        </div>
      `;
    } else {
      sfx.playError();
      box.innerHTML = `
        <div style="background: rgba(248, 113, 113, 0.15); border: 1.5px solid var(--accent-red); padding: 14px; border-radius: 8px; color: #fca5a5;">
          <h4 style="margin-bottom: 4px;">😅 Belum Tepat, yuk bedah triknya:</h4>
          <p style="font-size: 0.88rem; color: #f8fafc;">${q.explanation}</p>
        </div>
      `;
    }
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
    { key: "Vocabulary in Context", label: "1. Vocab in Context" },
    { key: "Sentence Simplification", label: "2. Sentence Simplification" },
    { key: "Fact & Negative Fact", label: "3. Fact & Negative Fact" },
    { key: "Inference", label: "4. Inference Questions" },
    { key: "Insert Text", label: "5. Text Insertion [■]" },
    { key: "Speaking iBT Simulator", label: "6. Speaking iBT Simulator" }
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
      <div class="ibt-passage-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 6px;">
          <span style="font-size: 0.75rem; color: var(--accent-cyan); font-weight: 800; text-transform: uppercase;">
            📖 Bacaan Ilmiah (Academic Reading Excerpt)
          </span>
          <button class="btn-secondary" style="font-size: 0.78rem; padding: 4px 10px;" onclick="speechEngine.speakText('${audioSentence}', 0.8)">
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
      <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid var(--accent-pink); border-radius: 12px; padding: 20px; margin-bottom: 18px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 6px;">
          <span style="font-size: 0.75rem; color: var(--accent-pink); font-weight: 800; text-transform: uppercase;">
            🎙️ Pertanyaan Ujian Speaking iBT (Task 1 & Integrated)
          </span>
          <button class="btn-secondary" style="font-size: 0.78rem; padding: 4px 10px;" onclick="speechEngine.speakText('${promptAudio}', 0.8)">
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
              <button class="btn-secondary" style="font-size: 0.75rem; padding: 4px 8px;" onclick="speechEngine.speakText('${modelAudio}', 0.85)">
                🔊 Dengarkan (Normal)
              </button>
              <button class="btn-secondary" style="font-size: 0.75rem; padding: 4px 8px;" onclick="speechEngine.speakText('${modelAudio}', 0.65)">
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
    <div style="display: flex; gap: 8px; margin-bottom: 16px; overflow-x: auto; padding-bottom: 6px;">
      ${categories.map(cat => `
        <button class="ibt-filter-pill ${currentFilter === cat.key ? 'active' : ''}" onclick="setIbtCategoryFilter('${cat.key}')">
          ${cat.label}
        </button>
      `).join('')}
    </div>

    <!-- Soal Navigation Chips -->
    <div style="display: flex; gap: 8px; margin-bottom: 16px; overflow-x: auto; padding-bottom: 6px;">
      ${filteredList.map((item, idx) => `
        <button class="quick-cmd-btn ${idx === appState.currentIbtIndex ? 'active' : ''}" style="padding: 8px 12px; font-weight: 700;" onclick="setIbtQuestionIndex(${idx})">
          ${item.type === 'speaking' ? '🎙️ Speaking' : '📖 Soal'} #${idx + 1}
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
    const feedbackBox = document.getElementById("ibt-reading-feedback");
    if (!feedbackBox) return;
    feedbackBox.style.display = "block";

    if (chosenIdx === currentItem.correctIndex) {
      sfx.playSuccess();
      triggerConfetti();
      feedbackBox.innerHTML = `
        <div style="background: rgba(74, 222, 128, 0.15); border: 1.5px solid var(--accent-green); padding: 16px; border-radius: 10px; color: #86efac;">
          <h4 style="margin: 0 0 6px 0; color: #4ade80;">🎉 JAWABAN TEPAT! SKOR 100% UNTUK SKILL INI!</h4>
          <p style="font-size: 0.9rem; color: #f8fafc; margin: 0; line-height: 1.5;">${currentItem.babyExplanation}</p>
        </div>
      `;
    } else {
      sfx.playError();
      feedbackBox.innerHTML = `
        <div style="background: rgba(248, 113, 113, 0.15); border: 1.5px solid var(--accent-red); padding: 16px; border-radius: 10px; color: #fca5a5;">
          <h4 style="margin: 0 0 6px 0; color: #f87171;">😅 Jawaban Belum Pas! Yuk Bedah Triknya:</h4>
          <p style="font-size: 0.9rem; color: #f8fafc; margin: 0; line-height: 1.5;">${currentItem.babyExplanation}</p>
        </div>
      `;
    }
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
          `;
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

// ================= APP INITIALIZATION =================
window.addEventListener("DOMContentLoaded", () => {
  loadProgress();
  renderQuestGrid();
  initDictionarySearch();
  initPwaInstall();

  // Sound toggle button
  const soundBtn = document.getElementById("sound-toggle");
  if (soundBtn) {
    soundBtn.addEventListener("click", () => {
      const isSoundOn = sfx.toggle();
      soundBtn.innerHTML = isSoundOn ? "🔊" : "🔇";
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
