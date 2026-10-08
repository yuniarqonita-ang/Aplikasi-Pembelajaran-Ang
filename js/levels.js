/* ===================================================================
   LEVELS.JS - 5 LEVEL MISI PROJECT-BASED LEARNING (PBL)
   Petualangan Interaktif IT Support & Pemrograman Dasar bersama Kodi
   =================================================================== */

const levelsData = [
  // ================= LEVEL 1 =================
  {
    id: 1,
    title: "Anatomi Komputer: Kenalan sama Organ Mesin",
    shortTitle: "Level 1: Organ Komputer",
    tag: "Hardware & Dasar",
    icon: "🖥️",
    analogy: "Komputer itu ibarat Restoran: Ada koki (CPU), meja masak (RAM), dan kulkas (SSD)!",
    description: "Bongkar casing komputer bersama Kodi! Pelajari siapa yang mikir, siapa tempat naruh kerjaan sementara, dan siapa penyimpan data jangka panjang.",
    starsReward: 3,
    steps: [
      {
        stepTitle: "Langkah 1: Mengenal 4 Sahabat Komputer",
        concept: `
          <div class="concept-box">
            <span class="concept-analogy-pill">Analogi Restoran Kodi</span>
            <h4>🧠 CPU (Koki Masak)</h4>
            <p>Otaknya komputer. Dialah yang mengeksekusi semua resep perintah secepat kilat. Kalau koki gesit, pesanan cepat selesai!</p>
          </div>
          <div class="concept-box">
            <span class="concept-analogy-pill">Analogi Meja Dapur</span>
            <h4>🪵 RAM (Meja Kerja Sementara)</h4>
            <p>Tempat naruh aplikasi yang lagi dibuka SEKARANG. Kalau meja sempit, buka banyak tab Chrome langsung sesak dan lemot. Pas komputer dimatiin, mejanya bersih lagi!</p>
          </div>
          <div class="concept-box">
            <span class="concept-analogy-pill">Analogi Kulkas Awet</span>
            <h4>🧊 SSD / Storage (Lemari Arsip)</h4>
            <p>Tempat simpan foto, game, dan windows buat selamanya. Biar mati lampu, datanya tetap aman tersimpan di kulkas.</p>
          </div>
          <div class="concept-box">
            <span class="concept-analogy-pill">Analogi Jantung Listrik</span>
            <h4>⚡ PSU (Power Supply)</h4>
            <p>Memompa aliran listrik sehat ke seluruh organ komputer. Tanpa ini, komputer cuma jadi pajangan besi mati!</p>
          </div>
        `,
        interactiveType: "quiz-explain",
        question: "Kodi mau nanya: Kalau kamu lagi buka 25 tab browser Google Chrome terus komputernya tiba-tiba jadi lemot banget kayak keong, organ mana yang mejanya kekecilan?",
        options: [
          { text: "🪵 RAM (Meja kerjanya kepenuhan barang!)", correct: true, feedback: "BINTANG 5! Tepat sekali! RAM itu meja kerja. Kalau mejanya sempit tapi barangnya banyak, koki jadi susah gerak." },
          { text: "🧊 SSD (Kulkas penyimpanannya kedinginan)", correct: false, feedback: "Kurang tepat. SSD itu kulkas arsip jangka panjang, bukan meja kerja aplikasi yang lagi berjalan." },
          { text: "🖥️ Monitor (Layarnya kecapekan)", correct: false, feedback: "Hehe monitor cuma layar kaca buat nampilin gambar, bukan yang mikir atau nampung kerjaan ya!" }
        ]
      },
      {
        stepTitle: "Langkah 2: Praktek Dokter Komputer (Pasang Organ ke Pasien)",
        concept: `
          <div class="concept-box">
            <span class="concept-analogy-pill">Kasus Pasien IT Support</span>
            <h4>Klinik Komputer Kodi: Pasien Butuh Bantuan!</h4>
            <p>Seorang staf kantor datang membawa komputer dengan keluhan tertentu. Cocokkan organ komputer yang tepat untuk menyelesaikan keluhannya!</p>
          </div>
        `,
        interactiveType: "match-hardware",
        cases: [
          {
            patient: "Pak Budi (Staff Arsip): 'Laptop saya ga bisa nyimpen video rekaman kantor 500GB lagi karena memori penuh!'",
            correctPart: "SSD",
            hint: "Pak Budi butuh lemari kulkas penyimpanan file yang lebih besar!"
          },
          {
            patient: "Bu Siti (Kasir): 'Komputer saya pas ditekan tombol Power mati total, ga ada lampu atau kipas muter sama sekali!'",
            correctPart: "PSU",
            hint: "Jantung pompa listriknya ga ngalirin daya ke mesin!"
          },
          {
            patient: "Deni (Desainer): 'Pas saya buka Photoshop barengan video editor, aplikasinya sering not responding dan tersendat!'",
            correctPart: "RAM",
            hint: "Meja kerjanya terlalu sempit buat nampung dua aplikasi berat sekaligus!"
          }
        ]
      }
    ]
  },

  // ================= LEVEL 2 =================
  {
    id: 2,
    title: "Mantra Gaib Terminal: Bisik-Bisik ke Mesin",
    shortTitle: "Level 2: Terminal IT",
    tag: "Command Line / CLI",
    icon: "📟",
    analogy: "Terminal itu bukan buat gaya hacker film, tapi cara bisik-bisik langsung ke komputer biar kerjaan beres kilat!",
    description: "Pelajari mantra sakti anak IT: ping, ipconfig, mkdir, cls! Ngetik satu baris perintah bisa menghemat 50 klik mouse.",
    starsReward: 3,
    steps: [
      {
        stepTitle: "Mantra Sakti 1: Cek KTP Komputer (ipconfig)",
        concept: `
          <div class="concept-box">
            <span class="concept-analogy-pill">Mantra KTP Rumah</span>
            <h4>Ketik: ipconfig</h4>
            <p>Perintah ini buat nanya ke komputer: 'Halo laptop, nomor rumah (IP Address) kamu di ruangan ini berapa sih?'. Penting banget pas ada masalah internet!</p>
          </div>
        `,
        interactiveType: "terminal-mission",
        targetCommand: "ipconfig",
        goalDescription: "Ketik perintah <code>ipconfig</code> di terminal lalu tekan Enter untuk melihat nomor rumah IP komputer ini!",
        hint: "Ketik 'ipconfig' (tanpa tanda kutip)",
        simulatedOutput: [
          "Windows IP Configuration",
          "",
          "Ethernet adapter Local Network:",
          "   IPv4 Address. . . . . . . . . . . : 192.168.1.45 (Nomor Rumah Komputer)",
          "   Subnet Mask . . . . . . . . . . . : 255.255.255.0",
          "   Default Gateway . . . . . . . . . : 192.168.1.1 (Gerbang Rumah / Router)",
          "",
          "✓ Mantap! Kamu berhasil membaca KTP jaringan komputer!"
        ]
      },
      {
        stepTitle: "Mantra Sakti 2: Lempar Bola Bekel Tes Koneksi (ping)",
        concept: `
          <div class="concept-box">
            <span class="concept-analogy-pill">Mantra Bola Bekel</span>
            <h4>Ketik: ping 8.8.8.8</h4>
            <p>Ibarat kamu teriak: 'Halo server Google, dengar suaraku ngga?'. Kalau dibalas 'Reply from...', berarti kabel internet nyambung lancar!</p>
          </div>
        `,
        interactiveType: "terminal-mission",
        targetCommand: "ping 8.8.8.8",
        goalDescription: "Cek apakah komputer ini tersambung ke server internet dunia. Ketik <code>ping 8.8.8.8</code>!",
        hint: "Ketik 'ping 8.8.8.8'",
        simulatedOutput: [
          "Pinging 8.8.8.8 with 32 bytes of data:",
          "Reply from 8.8.8.8: bytes=32 time=14ms TTL=117",
          "Reply from 8.8.8.8: bytes=32 time=12ms TTL=117",
          "Reply from 8.8.8.8: bytes=32 time=15ms TTL=117",
          "",
          "Ping statistics: Packets: Sent = 3, Received = 3, Lost = 0 (0% loss)",
          "✓ HOREE! Bola bekel membal! Internet kantor nyambung!"
        ]
      },
      {
        stepTitle: "Mantra Sakti 3: Bikin Map Folder Kilat (mkdir)",
        concept: `
          <div class="concept-box">
            <span class="concept-analogy-pill">Mantra Bikin Folder</span>
            <h4>Ketik: mkdir BackupData</h4>
            <p>Daripada klik kanan -> New -> Folder, anak IT cukup ketik <code>mkdir</code> (make directory) buat bikin folder baru dalam kedipan mata!</p>
          </div>
        `,
        interactiveType: "terminal-mission",
        targetCommand: "mkdir BackupData",
        goalDescription: "Bikin folder baru bernama 'BackupData'. Ketik <code>mkdir BackupData</code>!",
        hint: "Ketik 'mkdir BackupData'",
        simulatedOutput: [
          "Directory: C:\\Users\\Kantor\\Documents",
          "",
          "Mode                 LastWriteTime         Length Name",
          "----                 -------------         ------ ----",
          "d-----         10/08/2026  08:30 AM                BackupData",
          "",
          "✓ Folder 'BackupData' berhasil diciptakan secara kilat!"
        ]
      }
    ]
  },

  // ================= LEVEL 3 =================
  {
    id: 3,
    title: "Kantor Pos Jaringan: Rahasia Surat Digital",
    shortTitle: "Level 3: Jaringan & Internet",
    tag: "Networking Dasar",
    icon: "🌐",
    analogy: "IP itu nomor rumah, DNS itu buku kontak telepon, dan Router itu polisi perempatan!",
    description: "Pelajari bagaimana data bisa terbang dari laptop kamu sampai ke server YouTube tanpa nyasar.",
    starsReward: 3,
    steps: [
      {
        stepTitle: "Langkah 1: Siapa Saja Petugas Kantor Pos?",
        concept: `
          <div class="concept-box">
            <span class="concept-analogy-pill">Analogi Buku Telepon HP</span>
            <h4>📖 DNS (Domain Name System)</h4>
            <p>Manusia ga bisa hapal angka kayak 142.250.190.46, tapi gampang hapal 'google.com'. DNS yang nerjemahin kata jadi angka IP!</p>
          </div>
          <div class="concept-box">
            <span class="concept-analogy-pill">Analogi Pak Satpam Perempatan</span>
            <h4>🚦 Router</h4>
            <p>Gerbang yang menghubungkan jaringan kantor kamu ke dunia luar (internet). Dialah yang tahu jalan tercepat menuju server tujuan.</p>
          </div>
        `,
        interactiveType: "network-builder",
        missionText: "Bantu pasang jalur kabel jaringan dari Laptop Staf menuju ke Internet!",
        nodes: [
          { id: "pc", name: "Laptop Staf", ip: "192.168.1.10", icon: "💻" },
          { id: "switch", name: "Switch Kantor", ip: "LAN Hub", icon: "🔀" },
          { id: "router", name: "Router Gateway", ip: "192.168.1.1", icon: "📡" },
          { id: "dns", name: "DNS Server", ip: "8.8.8.8", icon: "🌍" }
        ]
      },
      {
        stepTitle: "Langkah 2: Kasus Darurat: 'Web Ga Bisa Dibuka!'",
        concept: `
          <div class="concept-box">
            <span class="concept-analogy-pill">Troubleshooting Nyata</span>
            <h4>Gejala Aneh di Kantor:</h4>
            <p>Staf kantor bisa nge-ping nomor IP 8.8.8.8 sukses lancar, tapi pas buka web 'detik.com' atau 'google.com' muncul pesan: 'Server Not Found'.</p>
          </div>
        `,
        interactiveType: "quiz-explain",
        question: "Kodi bertanya: Kalau ping ke angka berhasil, tapi buka nama web gagal, petugas mana yang lagi mogok kerja?",
        options: [
          { text: "📖 DNS (Buku Kontak Teleponnya rusak/salah nomor!)", correct: true, feedback: "TEPAT SEKALI! Komputer bisa jalan ke nomor IP, tapi dia ga tahu nomor telepon 'detik.com' karena DNS nya belum disetting!" },
          { text: "⚡ Kabel Listrik PLN padam", correct: false, feedback: "Kalo listrik padam kan komputernya mati total dong hehe!" },
          { text: "🖱️ Mouse komputernya kehabisan baterai", correct: false, feedback: "Mouse ga ada hubungannya sama jaringan internet yaa!" }
        ]
      }
    ]
  },

  // ================= LEVEL 4 =================
  {
    id: 4,
    title: "Resep Rahasia Koding: Logika Si Robot Penurut",
    shortTitle: "Level 4: Logika Koding",
    tag: "Pemrograman Sederhana",
    icon: "🧠",
    analogy: "Koding itu cuma nulis resep bikin mi instan buat robot: langkah demi langkah!",
    description: "Belajar 3 konsep inti koding: Variabel (Toples bertutup), Kondisi IF-ELSE (Pilihan payung saat hujan), dan Loop (Ulangi lagi).",
    starsReward: 3,
    steps: [
      {
        stepTitle: "Langkah 1: Belajar Toples Berlabel (Variabel)",
        concept: `
          <div class="concept-box">
            <span class="concept-analogy-pill">Konsep Toples Permen</span>
            <h4>Variabel = Kotak Penyimpan Data</h4>
            <p>Ibarat kamu ambil toples bening, kasih label tulisan 'nama_bos', lalu masukkan nama 'Pak Budi'. Kapanpun kamu panggil nama_bos, isinya adalah Pak Budi!</p>
          </div>
        `,
        interactiveType: "variable-playground",
        task: "Bantu Kodi mengisi toples variabel di bawah ini!"
      },
      {
        stepTitle: "Langkah 2: Bikin Robot IT Otomatis (IF - ELSE)",
        concept: `
          <div class="concept-box">
            <span class="concept-analogy-pill">Pilihan Logika Sehari-hari</span>
            <h4>Kondisi IF - ELSE</h4>
            <p>JIKA suhu ruangan server di atas 30 derajat, MAKA nyalakan kipas AC! KALO ENGGA, tetap tenang santai.</p>
          </div>
        `,
        interactiveType: "code-block-builder",
        missionText: "Susun balok resep koding untuk mendinginkan Ruang Server jika suhunya panas!",
        availableBlocks: [
          { id: "b1", text: "JIKA suhu_server > 30 :", type: "type-if" },
          { id: "b2", text: "    nyalakan_kipas_turbo()", type: "type-action" },
          { id: "b3", text: "    kirim_peringatan_ke_hp()", type: "type-action" },
          { id: "b4", text: "SELAIN ITU :", type: "type-if" },
          { id: "b5", text: "    kipas_kecepatan_normal()", type: "type-action" }
        ],
        targetOrder: ["b1", "b2", "b3", "b4", "b5"]
      }
    ]
  },

  // ================= LEVEL 5 (PROJECT-BASED BOSS LEVEL) =================
  {
    id: 5,
    title: "Meja Bantuan IT Support: Selesaikan 3 Kasus Nyata!",
    shortTitle: "Level 5: PBL Kasus Nyata",
    tag: "Proyek Nyata (Helpdesk)",
    icon: "🏆",
    analogy: "Saatnya terjun langsung jadi pahlawan IT Support kantor! Tangani 3 keluhan rekan kerja.",
    description: "Terapkan semua ilmumu untuk memperbaiki printer macet, WiFi tanda seru kuning, dan otomatisasi backup file Pak Bos!",
    starsReward: 5,
    steps: [
      {
        stepTitle: "Tiket #1: Printer Ngambek di Ruang Keuangan",
        concept: `
          <div class="concept-box">
            <span class="concept-analogy-pill">Tiket Keluhan Masuk</span>
            <h4>Mbak Rina (Staff Finance):</h4>
            <p>"Aduhh Kodi tolongin! Aku mau cetak slip gaji sekarang juga, tapi printernya ga mau narik kertas, lampu indikator warna orange kedip-kedip cepat!"</p>
          </div>
        `,
        interactiveType: "ticket-investigation",
        ticketId: "TICKET-101",
        userAvatar: "👩‍💼",
        userName: "Mbak Rina - Finance",
        problemDetails: "Printer Canon kantor lampu orange kedip-kedip, dokumen numpuk di antrean cetak.",
        choices: [
          {
            label: "1. Banting printer ke lantai biar sadar",
            correct: false,
            feedback: "Waduhh jangan dibanting dong! Nanti kamu disuruh ganti rugi kantor haha!"
          },
          {
            label: "2. Cek apakah ada kertas nyangkut (paper jam) & restart Print Spooler di komputer",
            correct: true,
            feedback: "HEBAT BANGET! Lampu orange kedip biasanya tanda kertas kejepit di dalam rol roller! Setelah ditarik perlahan dan spooler di-restart, printer langsung mencetak lancar!"
          },
          {
            label: "3. Beli laptop baru buat Mbak Rina",
            correct: false,
            feedback: "Pemborosan anggaran kantor nih! Masalahnya ada di printer, bukan laptopnya."
          }
        ]
      },
      {
        stepTitle: "Tiket #2: WiFi Berlogo Tanda Seru Kuning ⚠️",
        concept: `
          <div class="concept-box">
            <span class="concept-analogy-pill">Tiket Keluhan Masuk</span>
            <h4>Mas Dodi (Staff Marketing):</h4>
            <p>"Laptopku nyambung ke WiFi 'KANTOR_LANTAI2', tapi ada gambar segitiga tanda seru kuning ⚠️ dan tulisannya 'No Internet Access' padahal teman sebelah lancar!"</p>
          </div>
        `,
        interactiveType: "ticket-investigation",
        ticketId: "TICKET-102",
        userAvatar: "👨‍💻",
        userName: "Mas Dodi - Marketing",
        problemDetails: "WiFi connected tapi No Internet Access. IP laptop Mas Dodi ternyata tabrakan atau gagal minta IP ke Router.",
        choices: [
          {
            label: "1. Jalankan di Terminal: ipconfig /release lalu ipconfig /renew untuk minta nomor IP segar dari Router",
            correct: true,
            feedback: "MANTAP POL! Ini mantra sakti nomor wahid IT Support! Dengan me-renew IP, laptop membuang IP tabrakan dan router ngasih nomor baru yang bersih!"
          },
          {
            label: "2. Matikan listrik seluruh gedung kantor",
            correct: false,
            feedback: "Waduh, nanti seisi kantor marah-marah dong kalau dimatiin semua haha!"
          },
          {
            label: "3. Ganti wallpaper laptop jadi pemandangan alam",
            correct: false,
            feedback: "Wallpaper estetik ga bisa benerin sinyal WiFi yaa temanku!"
          }
        ]
      },
      {
        stepTitle: "Tiket #3: Permintaan Bos: Otomatisasi Backup 1-Klik",
        concept: `
          <div class="concept-box">
            <span class="concept-analogy-pill">Proyek Koding IT Support</span>
            <h4>Pak Bos Direktur:</h4>
            <p>"Kodi, tolong buatin program otomatis kecil dong. Tiap sore saya mau salin semua dokumen dari folder 'Kerjaan' ke Flashdisk tanpa saya harus copy-paste manual satu per satu."</p>
          </div>
        `,
        interactiveType: "code-backup-mission",
        ticketId: "TICKET-103",
        userAvatar: "👔",
        userName: "Pak Bos Direktur",
        problemDetails: "Bantu Pak Bos menyusun skrip otomatisasi backup sederhana!",
        codeLines: [
          'folder_sumber = "C:\\DokumenKantor"',
          'folder_tujuan = "E:\\BackupFlashdisk"',
          'salin_semua_file(sumber=folder_sumber, tujuan=folder_tujuan)',
          'bunyikan_bel_sukses("Backup Selesai Bos!")'
        ]
      }
    ]
  }
];

