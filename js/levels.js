/* ===================================================================
   LEVELS.JS - 8 LEVEL MISI PROJECT-BASED LEARNING (PBL)
   Kurikulum Komprehensif Berdasarkan Acuan Buku Resmi:
   "Information Technology: An Introduction for Today's Digital World" (Richard Fox)
   Petualangan Interaktif IT Support & Pemrograman Dasar bersama Kodi
   =================================================================== */

const levelsData = [
  // ================= LEVEL 1 =================
  {
    id: 1,
    title: "Anatomi Komputer: Kenalan sama Organ Mesin",
    shortTitle: "Level 1: Organ Komputer",
    tag: "Hardware & Motherboard",
    icon: "🖥️",
    analogy: "Komputer itu ibarat Restoran: Ada koki (CPU), meja masak (RAM), dan kulkas (SSD)!",
    description: "Bongkar casing komputer bersama Kodi! Pelajari siapa yang mikir, siapa tempat naruh kerjaan sementara, dan siapa penyimpan data jangka panjang.",
    starsReward: 3,
    steps: [
      {
        stepTitle: "Langkah 1: Mengenal 4 Sahabat Komputer",
        workedExample: {
          sampleProblem: 'Seorang editor video sedang mengekspor render animasi 3D, tapi proses penghitungan grafis sangat lambat. Komponen manakah yang bertindak sebagai juru hitung utama yang perlu ditingkatkan kecepatannya?',
          sampleAnswer: 'CPU (Central Processing Unit) - Karena CPU adalah koki otak pemroses utama yang mengeksekusi instruksi komputasi matematika dan render.',
          babyLogic: 'Analogi Restoran: CPU itu koki masaknya. Kalau pesanan rumit dan butuh cepat selesai, kokinya harus yang lincah dan berotak cerdas!'
        },
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
        workedExample: {
          sampleProblem: 'Komputer kantor membutuhkan komponen yang bertugas mengubah arus listrik bolak-balik (AC) dari colokan tembok menjadi arus searah (DC) stabil bertegangan rendah ke seluruh komponen.',
          sampleAnswer: 'Pasang PSU (Power Supply Unit) di bagian bawah casing dan tancapkan konektor 24-pin ke motherboard.',
          babyLogic: 'PSU itu jantung pemompa darah (listrik). Tanpa PSU terpasang, komponen lain seperti CPU dan RAM tidak akan menerima daya listrik untuk hidup.'
        },
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

  // ================= LEVEL 2 (NEW: SIKLUS IPOS DARI BUKU RICHARD FOX) =================
  {
    id: 2,
    title: "Pabrik Siklus IPOS: Alur Kerja Komputer Digital",
    shortTitle: "Level 2: Siklus IPOS",
    tag: "IPOS Cycle (Richard Fox Ch 1)",
    icon: "🔄",
    analogy: "Komputer itu Pabrik Roti: Bahan Masuk (Input), Diadon (Processing), Roti Jadi (Output), Resep Disimpan (Storage)!",
    description: "Pelajari siklus sakti IPOS (Input, Processing, Output, Storage) yang menjadi syarat mutlak suatu alat disebut komputer menurut Richard Fox!",
    starsReward: 3,
    steps: [
      {
        stepTitle: "Langkah 1: Menyortir 4 Stasiun Pabrik IPOS",
        workedExample: {
          sampleProblem: "Di kasir supermarket, kasir menembak barcode kemasan susu, komputer mencocokkan harga, lalu printer mencetak struk belanja. Klasifikasikan 'Barcode Scanner' dan 'Printer Struk' ke siklus IPOS!",
          sampleAnswer: 'Barcode Scanner = Stasiun Input (memasukkan data barcode ke sistem); Printer Struk = Stasiun Output (mengeluarkan hasil fisik cetakan harga).',
          babyLogic: 'Rumus Pabrik IPOS: Input (masuk data) ➔ Process (diolah CPU) ➔ Output (hasilnya tampil/cetak) ➔ Storage (disimpan ke database harddisk)!'
        },
        concept: `
          <div class="concept-box">
            <span class="concept-analogy-pill">Siklus IPOS Richard Fox</span>
            <h4>Apa Syarat Suatu Alat Disebut Komputer?</h4>
            <p>Di buku Richard Fox Bab 1 dijelaskan bahwa komputer adalah mesin elektronik yang menjalankan 4 siklus berulang:</p>
            <ul>
              <li><strong>1. INPUT (Masukan):</strong> Menerima data dari dunia luar (Keyboard, Mouse, Barcode Scanner).</li>
              <li><strong>2. PROCESSING (Pemrosesan):</strong> CPU mengolah data & menghitung logika.</li>
              <li><strong>3. OUTPUT (Keluaran):</strong> Menampilkan hasil ke manusia (Monitor, Printer, Speaker).</li>
              <li><strong>4. STORAGE (Penyimpanan):</strong> Menyimpan data sementara di RAM atau permanen di SSD.</li>
            </ul>
          </div>
        `,
        interactiveType: "ipos-pipeline",
        missionText: "Bantu Kodi menyortir perangkat di bawah ini ke stasiun IPOS yang benar!"
      },
      {
        stepTitle: "Langkah 2: Detektif Komputer: 'Apakah HP & Mesin Kasir itu Komputer?'",
        workedExample: {
          sampleProblem: 'Apakah mesin kasir layar sentuh modern di minimarket termasuk sebuah komputer?',
          sampleAnswer: 'Ya, mesin kasir adalah komputer utuh karena memiliki CPU pemroses, memori RAM, sistem operasi (Windows/Linux POS), menerima input sentuhan, dan memproses transaksi.',
          babyLogic: 'Komputer bukan cuma PC tabung di warnet! Setiap perangkat yang punya siklus Input-Proses-Output-Storage adalah keluarga besar komputer!'
        },
        concept: `
          <div class="concept-box">
            <span class="concept-analogy-pill">Diskusi Bab 1 Richard Fox</span>
            <h4>Banyak Orang Tidak Sadar Mereka Memegang Komputer!</h4>
            <p>Richard Fox menegaskan: Smartphone di sakumu, Smart TV di ruang tamu, bahkan kalkulator canggih dan GPS di mobil itu SEMUANYA ADALAH KOMPUTER karena mereka memiliki CPU, memori, input, dan output!</p>
          </div>
        `,
        interactiveType: "quiz-explain",
        question: "Menurut konsep Richard Fox, mengapa Smartphone HP kamu resmi disebut sebagai Komputer?",
        options: [
          {
            text: "Karena HP memiliki siklus lengkap: Touchscreen (Input), Chip Prosessor (Processing), Layar (Output), dan Memori internal (Storage)!",
            correct: true,
            feedback: "100% TEPAT! HP bukan sekadar alat telepon jadul, tapi komputer mini serba bisa yang menjalankan siklus IPOS!"
          },
          {
            text: "Karena HP harganya mahal dan ada kamera selfie-nya.",
            correct: false,
            feedback: "Bukan itu alasannya. Kamera cuma salah satu sensor input, yang menentukan adalah siklus pemrosesan IPOS-nya."
          },
          {
            text: "Bukan komputer, HP cuma radio mini pencari sinyal.",
            correct: false,
            feedback: "Salah besar! Di era sekarang, HP adalah komputer saku yang sangat canggih dan punya prosesor multi-core!"
          }
        ]
      }
    ]
  },

  // ================= LEVEL 3 (NEW: TANGGA KAPASITAS DATA TABEL 1.4) =================
  {
    id: 3,
    title: "Tangga Kapasitas Data: Dari 1 Bit ke Terabyte",
    shortTitle: "Level 3: Tangga Data",
    tag: "Tabel 1.4 Storage Sizes",
    icon: "📊",
    analogy: "Ukuran data itu kayak beras: 1 butir (Bit), 1 sendok (Byte), 1 mangkok (KB), 1 karung (MB), 1 truk (GB), 1 gudang bulog (TB)!",
    description: "Kuasai tangga satuan memori komputer dari buku Richard Fox Tabel 1.4: Bit, Byte, KB, MB, GB, hingga TB! Jangan tertukar lagi ukuran file.",
    starsReward: 3,
    steps: [
      {
        stepTitle: "Langkah 1: Simulator Tangga Kapasitas Digital",
        workedExample: {
          sampleProblem: 'Sebuah lagu MP3 memiliki ukuran file 4 Megabyte (MB). Berapakah ukuran file tersebut jika dikonversikan ke dalam satuan Kilobyte (KB)?',
          sampleAnswer: '4 MB = 4.096 KB (karena 1 Megabyte setara dengan 1.024 Kilobyte).',
          babyLogic: 'Ingat tangga ukuran file: 1 Byte = 8 Bit (1 huruf). KB = ribuan huruf. MB = jutaan huruf (lagu/foto). GB = miliaran huruf (film HD/game). TB = triliunan huruf!'
        },
        concept: `
          <div class="concept-box">
            <span class="concept-analogy-pill">Tabel 1.4 Richard Fox</span>
            <h4>Tangga Ukuran Memori Dunia Komputer</h4>
            <ul>
              <li><strong>1 Bit:</strong> Saklar tunggal terkecil (0 atau 1).</li>
              <li><strong>1 Byte (8 Bit):</strong> Muat tepat 1 huruf abjad (contoh: huruf 'K').</li>
              <li><strong>1 KB (Kilobyte = 1.024 Byte):</strong> Muat 1 halaman dokumen teks pendek.</li>
              <li><strong>1 MB (Megabyte = 1.024 KB):</strong> Muat 1 lagu MP3 atau 1 foto jernih.</li>
              <li><strong>1 GB (Gigabyte = 1.024 MB):</strong> Muat 1 film HD atau 1.000 buku teks tebal!</li>
              <li><strong>1 TB (Terabyte = 1.024 GB):</strong> Muat lemari arsip data seluruh kantor pabrik.</li>
            </ul>
          </div>
        `,
        interactiveType: "storage-ladder",
        missionText: "Uji insting kapasitasmu! Cocokkan benda digital dengan ukuran wadah memorinya yang pas."
      },
      {
        stepTitle: "Langkah 2: Duel Memori: RAM Cepat vs SSD Awet",
        workedExample: {
          sampleProblem: 'Mengapa saat kamu mengetik artikel di Microsoft Word tanpa menekan tombol Save lalu listrik tiba-tiba padam, ketikan kamu bisa hilang?',
          sampleAnswer: "Karena data yang belum disimpan masih berada di RAM yang bersifat 'Volatile' (hilang seketika saat listrik mati). Supaya abadi, data harus disimpan ke SSD/Storage (Non-Volatile).",
          babyLogic: 'RAM itu meja tulis kapur (mudah dihapus kalau diseka). SSD/HDD itu buku diary bertinta emas (tetap ada selamanya walaupun listrik padam)!'
        },
        concept: `
          <div class="concept-box">
            <span class="concept-analogy-pill">Short-term vs Long-term Storage</span>
            <h4>Kenapa Komputer Ga Cuma Pakai SSD Aja?</h4>
            <p>Di buku Richard Fox dijelaskan: RAM (Short-term) super cepat merespon instruksi CPU tapi cepat lupa saat mati lampu. SSD (Long-term) lambat dibanding RAM tapi datanya abadi. Komputer butuh KEDUANYA agar bisa bekerja kencang sekaligus aman!</p>
          </div>
        `,
        interactiveType: "quiz-explain",
        question: "Jika kamu sedang mengetik dokumen laporan lalu tiba-tiba listrik padam dan komputer mati mendadak, data yang belum disimpan di-Save hilang karena sebelumnya baru berada di mana?",
        options: [
          {
            text: "Berada di RAM (Short-term memory yang bersifat hilang/volatile saat listrik mati)!",
            correct: true,
            feedback: "BINTANG 5! Pintar sekali! Sebelum tombol 'Save' ditekan, tulisanmu baru ditaruh di meja RAM. Pas tombol 'Save' ditekan, barulah dipindah ke kulkas abadi SSD!"
          },
          {
            text: "Berada di kabel mouse yang terlilit.",
            correct: false,
            feedback: "Mouse ga punya memori buat nyimpan ketikan laporan yaa!"
          },
          {
            text: "Berada di dalam layar monitor kaca.",
            correct: false,
            feedback: "Layar monitor cuma proyektor gambar, dia ga nyimpan teks."
          }
        ]
      }
    ]
  },

  // ================= LEVEL 4 (NEW: SISTEM OPERASI VS APLIKASI) =================
  {
    id: 4,
    title: "Dunia Software: Sistem Operasi (Rumah) vs Aplikasi (Perkakas)",
    shortTitle: "Level 4: Klasifikasi Software",
    tag: "System vs App Software",
    icon: "💿",
    analogy: "Sistem Operasi (OS) itu Rumah dengan Pintu & Listrik. Aplikasi itu TV, Kasur, dan Kompor yang kamu pakai!",
    description: "Berdasarkan Richard Fox, pahami perbedaan sakti antara System Software (Windows, Linux) yang mengelola hardware melawan Application Software (Excel, Browser).",
    starsReward: 3,
    steps: [
      {
        stepTitle: "Langkah 1: Memilah System Software vs Application Software",
        workedExample: {
          sampleProblem: "Kelompokkan 'Microsoft Windows 11' dan 'Google Chrome' ke dalam jenis perangkat lunak yang tepat!",
          sampleAnswer: 'Windows 11 = System Software (Sistem Operasi / Rumah Fondasi); Google Chrome = Application Software (Aplikasi Pengguna / Perkakas Kerja).',
          babyLogic: 'Sistem Operasi (OS) itu ibarat fondasi dan dinding rumah. Aplikasi itu perabotan seperti kompor atau kulkas yang dipasang di dalam rumah untuk kebutuhan tertentu!'
        },
        concept: `
          <div class="concept-box">
            <span class="concept-analogy-pill">Klasifikasi Software Richard Fox</span>
            <h4>Dua Sayap Perangkat Lunak</h4>
            <p><strong>1. System Software (Sistem Operasi):</strong> Mengurus hal-hal mesin, membagi jatah RAM ke aplikasi, dan mengamankan berkas. Contoh: Windows, Linux (Ubuntu/Debian), macOS, Unix.</p>
            <p><strong>2. Application Software:</strong> Dibuat agar manusia bisa bekerja: ngetik, ngitung keuangan, atau internetan. Contoh: Microsoft Excel, Google Chrome, Photoshop, Spotify.</p>
          </div>
        `,
        interactiveType: "software-sorter",
        missionText: "Bantu Kodi memilah software berikut ke kelompok System Software atau Application Software!"
      },
      {
        stepTitle: "Langkah 2: Rahasia Kompilasi: Bahasa Manusia ➔ Bahasa Mesin",
        workedExample: {
          sampleProblem: "Programmer menulis kode `console.log('Halo Dunia');`. Bagaimana sirkuit elektronik CPU komputer yang hanya mengerti tegangan listrik biner 0 dan 1 bisa menjalankannya?",
          sampleAnswer: 'Kode program diterjemahkan oleh Compiler atau Interpreter menjadi Machine Code (Bahasa Mesin berupa susunan angka biner 0 dan 1) yang langsung dieksekusi CPU.',
          babyLogic: 'Compiler itu penerjemah bahasa manusia ke bahasa alien mesin (angka biner 010101). Tanpa penerjemah, mesin ga bakal ngerti perintah kita!'
        },
        concept: `
          <div class="concept-box">
            <span class="concept-analogy-pill">Proses Kompilasi (Compilation)</span>
            <h4>Koki CPU Cuma Paham Angka 0 dan 1!</h4>
            <p>Kita nulis kode pakai kata-kata bahasa Inggris (seperti C#, Java, Python). Agar CPU bisa menjalankannya, kode tersebut harus di-<strong>kompilasi</strong> (diterjemahkan) menjadi bahasa mesin (Machine Language).</p>
          </div>
        `,
        interactiveType: "quiz-explain",
        question: "Apa fungsi utama dari proses 'Kompilasi' (Compilation) menurut buku Richard Fox?",
        options: [
          {
            text: "Menerjemahkan kode program yang ditulis manusia ke bahasa mesin (0 dan 1) yang bisa dieksekusi CPU!",
            correct: true,
            feedback: "TEPAT SEKALI! Kompiler adalah penerjemah setia antara otak manusia dan sirkuit listrik CPU!"
          },
          {
            text: "Menghapus semua file virus di flashdisk secara otomatis.",
            correct: false,
            feedback: "Itu tugas antivirus, bukan proses kompilasi kode."
          },
          {
            text: "Mengganti casing komputer menjadi warna baru.",
            correct: false,
            feedback: "Hehe itu modifikasi fisik, ga ada hubungannya sama bahasa koding!"
          }
        ]
      }
    ]
  },

  // ================= LEVEL 5 =================
  {
    id: 5,
    title: "Mantra Gaib Terminal: Bisik-Bisik ke Mesin & Shell Scripting",
    shortTitle: "Level 5: Terminal IT",
    tag: "CLI & Shell Scripts",
    icon: "📟",
    analogy: "Terminal itu bukan buat gaya hacker, tapi cara bisik-bisik langsung ke komputer biar kerjaan beres kilat!",
    description: "Pelajari mantra sakti anak IT: ping, ipconfig, mkdir, cls! Ngetik satu baris perintah bisa menghemat 50 klik mouse.",
    starsReward: 3,
    steps: [
      {
        stepTitle: "Mantra Sakti 1: Cek KTP Komputer (ipconfig)",
        workedExample: {
          sampleProblem: 'Seorang teknisi ingin memeriksa kartu identitas jaringan laptop Windows di kantor untuk mengetahui IPv4 Address dan Default Gateway. Perintah apa yang harus diketik di Command Prompt?',
          sampleAnswer: 'Ketik perintah: `ipconfig` lalu tekan Enter.',
          babyLogic: "Mantra `ipconfig` itu seperti menyuruh komputer: 'Buka dompetmu dan tunjukkan KTP alamat IP serta alamat pos gerbang (Gateway) router kamu!'"
        },
        concept: `
          <div class="concept-box">
            <span class="concept-analogy-pill">Mantra KTP Rumah</span>
            <h4>Ketik: ipconfig</h4>
            <p>Perintah ini buat nanya ke komputer: 'Halo laptop, nomor rumah (IP Address) kamu di ruangan ini berapa sih?'. Sangat penting saat troubleshooting jaringan!</p>
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
        workedExample: {
          sampleProblem: 'Kamu ingin menguji apakah kabel jaringan komputer tersambung dengan lancar ke server kantor di alamat IP 192.168.1.1. Perintah apa yang digunakan?',
          sampleAnswer: 'Ketik perintah: `ping 192.168.1.1` dan perhatikan balasan `Reply from 192.168.1.1: bytes=32 time<1ms TTL=64`.',
          babyLogic: 'Ping itu ibarat melempar bola bekel ke dinding server. Kalau bolanya memantul balik (Reply), jalanan kabel lancar! Kalau bolanya hilang (Request Timed Out), berarti kabel putus!'
        },
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
        workedExample: {
          sampleProblem: "Bagaimana cara membuat sebuah direktori/folder baru bernama 'BerkasLaporan' langsung dari terminal Command Prompt tanpa menggunakan mouse?",
          sampleAnswer: 'Ketik perintah: `mkdir BerkasLaporan` lalu tekan Enter.',
          babyLogic: "`mkdir` adalah singkatan dari 'Make Directory' (Bikin Folder Baru). Sekali ketik, foldernya langsung jadi dalam sekejap mata!"
        },
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

  // ================= LEVEL 6 =================
  {
    id: 6,
    title: "Kantor Pos Jaringan: Rahasia Surat Digital & Bandwidth",
    shortTitle: "Level 6: Jaringan & Router",
    tag: "Networking & Bandwidth",
    icon: "🌐",
    analogy: "IP itu nomor rumah, DNS itu buku kontak telepon, dan Router itu polisi perempatan!",
    description: "Pelajari bagaimana data bisa terbang dari laptop kamu sampai ke server YouTube tanpa nyasar, serta pentingnya bandwidth pipa data.",
    starsReward: 3,
    steps: [
      {
        stepTitle: "Langkah 1: Siapa Saja Petugas Kantor Pos?",
        workedExample: {
          sampleProblem: 'Di laboratorium komputer sekolah, terdapat 20 unit PC yang ingin dihubungkan satu sama lain dalam satu ruangan menggunakan kabel LAN. Perangkat penghubung utama apa yang diperlukan?',
          sampleAnswer: 'Switch LAN - berfungsi menghubungkan banyak komputer lokal dalam satu jaringan LAN menggunakan kabel UTP (konektor RJ-45).',
          babyLogic: 'Switch itu terminal colokan bersama di dalam satu kamar. Kalau Router itu gerbang pintu keluar rumah menuju jalan raya internet dunia!'
        },
        concept: `
          <div class="concept-box">
            <span class="concept-analogy-pill">Analogi Buku Telepon HP</span>
            <h4>📖 DNS (Domain Name System)</h4>
            <p>Manusia ga bisa hapal angka kayak 142.250.190.46, tapi gampang hapal 'google.com'. DNS yang nerjemahin kata jadi angka IP!</p>
          </div>
          <div class="concept-box">
            <span class="concept-analogy-pill">Analogi Pak Satpam Perempatan</span>
            <h4>🚦 Router (Default Gateway)</h4>
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
        stepTitle: "Langkah 2: Kasus Darurat: 'Web Ga Bisa Dibuka tapi Ping Berhasil!'",
        workedExample: {
          sampleProblem: "Laptop kantor bisa melakukan ping ke IP `8.8.8.8` dengan lancar, tetapi saat membuka browser dan mengetik `google.com` muncul pesan error 'Server IP Address Could Not Be Found'. Komponen manakah yang macet?",
          sampleAnswer: 'DNS (Domain Name System) - karena koneksi internet fisik normal, namun server penerjemah nama domain huruf (`google.com`) ke angka IP sedang tidak merespons.',
          babyLogic: "DNS itu buku kontak HP! Kamu bisa telepon kalau ketik nomor langsung, tapi kalau cari nama 'Google' di buku telepon ga ketemu karena buku kontak kamu lagi hilang!"
        },
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

  // ================= LEVEL 7 (NEW: 6 PENDEKAR SPESIALIS IT TABEL 1.1) =================
  {
    id: 7,
    title: "6 Pendekar Spesialis IT: Siapa Menangani Apa?",
    shortTitle: "Level 7: Karir & Role IT",
    tag: "Tabel 1.1 Administrator Roles",
    icon: "👥",
    analogy: "Kayak Rumah Sakit: Dokter Umum (Help Desk), Dokter Jantung (NetAdmin), Ahli Bedah (SysAdmin), dan Apoteker (DBA)!",
    description: "Pelajari 6 peran spesialis IT resmi menurut Tabel 1.1 Richard Fox: SysAdmin, NetAdmin, DBA, SecAdmin, WebAdmin, dan Help Desk!",
    starsReward: 4,
    steps: [
      {
        stepTitle: "Langkah 1: Hotline Masalah: Hubungi Spesialis yang Tepat!",
        workedExample: {
          sampleProblem: 'Aplikasi e-commerce perusahaan sering mengalami crash dan lambat saat memproses query pencarian di antara 5 juta data barang di tabel. Siapa profesional IT yang harus menangani?',
          sampleAnswer: 'Database Administrator (DBA) - spesialis yang bertanggung jawab mendesain, mengoptimalkan query, indeks, dan performa basis data relasional.',
          babyLogic: 'Kabel/WiFi putus = Network Engineer. Komputer lambat/printer ngadat = IT Support. Bikin fitur web = Web Developer. Tabel database jutaan baris = Database Administrator (DBA)!'
        },
        concept: `
          <div class="concept-box">
            <span class="concept-analogy-pill">Tabel 1.1 Administrator Roles Richard Fox</span>
            <h4>Peta Kekuatan 6 Spesialis IT:</h4>
            <ul>
              <li><strong>System Administrator:</strong> Kelola akun user, update OS server, otomasi shell script.</li>
              <li><strong>Network Administrator:</strong> Pasang kabel LAN, konfigurasi router & switch, atur subnet IP.</li>
              <li><strong>Database Administrator:</strong> Backup data tabel, query SQL, pastikan database DBMS aman.</li>
              <li><strong>Security Administrator:</strong> Pasang firewall, kebijakan password kuat, basmi hacker & virus.</li>
              <li><strong>Web Administrator:</strong> Kelola web server, hosting, dan script halaman website.</li>
              <li><strong>IT Help Desk:</strong> Lini depan melayani tiket user, printer macet, reset password lupa.</li>
            </ul>
          </div>
        `,
        interactiveType: "it-roles-match",
        missionText: "Tiket keluhan masuk dari berbagai divisi kantor! Siapa spesialis IT yang paling tepat menanganinya?"
      },
      {
        stepTitle: "Langkah 2: Kebijakan Keamanan Password & Etika IT",
        workedExample: {
          sampleProblem: "Seorang karyawan membuat kata sandi email kantor: 'jakarta123'. Mengapa kata sandi ini dianggap sangat lemah menurut standar keamanan IT?",
          sampleAnswer: 'Karena menggunakan kata kamus umum dan urutan angka sederhana yang mudah ditebak oleh software penyerang (Brute-Force Attack). Sandi yang aman harus berupa kombinasi panjang minimal 12 karakter dengan huruf besar, kecil, angka, dan simbol.',
          babyLogic: 'Jangan pernah pakai nama kota atau tanggal lahir! Kata sandi yang kuat itu ibarat gembok baja dengan banyak gerigi kombinasi unik!'
        },
        concept: `
          <div class="concept-box">
            <span class="concept-analogy-pill">Etika & Security Policy Richard Fox</span>
            <h4>Karyawan Sering Pakai Password '123456' atau 'Enter'!</h4>
            <p>Richard Fox menyoroti bahwa banyak user teledor bikin password gampang ditebak. Security Administrator wajib menerapkan aturan: minimal 8 karakter, kombinasi huruf besar/kecil/angka, dan wajib diganti berkala tanpa menggunakan password lama.</p>
          </div>
        `,
        interactiveType: "quiz-explain",
        question: "Menurut standar keamanan IT Richard Fox, manakah password yang paling kuat dan memenuhi kebijakan keamanan?",
        options: [
          {
            text: "K0d1#P4ssw0rd2026 (Kombinasi huruf besar, kecil, angka, dan simbol lebih dari 8 karakter)",
            correct: true,
            feedback: "BINTANG 5! Password ini sangat kokoh dan sulit ditembus oleh serangan brute-force hacker!"
          },
          {
            text: "admin12345 (Cuma huruf kecil dan angka urut)",
            correct: false,
            feedback: "Ini salah satu password paling gampang ditebak robot hacker dalam waktu 1 detik!"
          },
          {
            text: "111111 (Cuma angka kembar)",
            correct: false,
            feedback: "Sangat berbahaya! Jangan gunakan angka kembar untuk akun perusahaan!"
          }
        ]
      }
    ]
  },

  // ================= LEVEL 8 (PBL BOSS LEVEL: METODOLOGI TROUBLESHOOTING TABEL 1.3) =================
  {
    id: 8,
    title: "Meja Bantuan IT Support: Selesaikan 3 Kasus Nyata!",
    shortTitle: "Level 8: PBL Kasus Nyata",
    tag: "Proyek Nyata (Helpdesk)",
    icon: "🏆",
    analogy: "Terapkan Metodologi Diagnostik 3 Langkah Richard Fox: 1. Deteksi Masalah ➔ 2. Analisa Akar Sebab ➔ 3. Eksekusi Solusi!",
    description: "Terapkan seluruh ilmumu untuk memperbaiki printer macet, WiFi tanda seru kuning, dan otomatisasi backup file Pak Bos!",
    starsReward: 5,
    steps: [
      {
        stepTitle: "Tiket #1: Printer Ngambek di Ruang Keuangan",
        workedExample: {
          sampleProblem: "Pengguna menelepon IT: 'Monitor saya mati total, tidak ada gambar sama sekali padahal tombol power PC menyala'. Bagaimana langkah investigasi pertama yang tepat?",
          sampleAnswer: 'Langkah pertama: Periksa lapisan fisik terlebih dahulu—pastikan kabel power monitor tercolok ke stopkontak, saklar monitor menyala, dan kabel display (HDMI/VGA) menancap kencang di port PC.',
          babyLogic: 'Prinsip dasar IT Support: Selalu periksa kabel dan colokan listrik dulu sebelum buru-buru menyimpulkan hardware rusak atau instal ulang sistem operasi!'
        },
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
        workedExample: {
          sampleProblem: "Laptop staf kantor tersambung ke sinyal WiFi kantor, namun ikon WiFi bertanda seru kuning 'No Internet Access' dan saat dicek IP-nya adalah `169.254.12.88`. Mengapa hal ini terjadi?",
          sampleAnswer: 'IP berawalan `169.254.x.x` adalah alamat APIPA (Automatic Private IP Addressing), artinya laptop gagal menerima alokasi alamat IP dari server DHCP router. Solusinya: restart layanan DHCP atau jalankan `ipconfig /renew`.',
          babyLogic: 'Kepala IP 169.254 itu kode darurat bahwa komputer ga kebagian nomor antrian dari satpam router! Harus minta ulang jatah nomor antriannya!'
        },
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
        stepTitle: "Tiket #3: Permintaan Bos: Otomatisasi Backup Shell Script 1-Klik",
        workedExample: {
          sampleProblem: 'Bagaimana cara membuat skrip batch di Windows untuk menduplikasi seluruh file dari folder kerja `C:\\ProjekKantor` ke media penyimpanan backup `D:\\ArsipBackup`?',
          sampleAnswer: 'Gunakan perintah: `robocopy C:\\ProjekKantor D:\\ArsipBackup /E /COPYALL` (opsi `/E` menyalin seluruh subfolder termasuk folder kosong).',
          babyLogic: 'Dengan skrip otomatis, kita ga perlu copy-paste manual tiap sore jam 5. Cukup klik sekali atau jadwalkan otomatis, semua data langsung tercadangkan aman!'
        },
        concept: `
          <div class="concept-box">
            <span class="concept-analogy-pill">Proyek Shell Script IT Support (Richard Fox Ch 1)</span>
            <h4>Pak Bos Direktur:</h4>
            <p>"Kodi, tolong buatin skrip otomatisasi kecil dong. Tiap sore saya mau salin semua dokumen dari folder 'Kerjaan' ke Flashdisk tanpa saya harus copy-paste manual satu per satu."</p>
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
