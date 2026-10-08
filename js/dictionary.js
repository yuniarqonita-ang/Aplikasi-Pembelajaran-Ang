/* ===================================================================
   DICTIONARY.JS - KAMUS BAYI IT: DARI NOL JADI PAHAM!
   Kumpulan istilah IT & Koding dengan analogi bahasa bayi yang super gampang dicerna.
   Diperkaya dengan standar buku acuan:
   "Information Technology: An Introduction for Today's Digital World" (Richard Fox)
   =================================================================== */

const itDictionary = [
  // --- KONSEP UTAMA DARI BUKU RICHARD FOX (CHAPTER 1) ---
  {
    term: "Siklus IPOS (Input-Processing-Output-Storage)",
    category: "Konsep Dasar IT",
    icon: "🔄",
    babyAnalogy: "Pabrik Roti: Bahan Masuk, Diadon, Roti Jadi, Resep Disimpan!",
    detail: "4 langkah wajib yang membuat suatu alat disebut komputer menurut Richard Fox: Input (terima masukan), Processing (olah data di CPU), Output (tampilkan hasil di layar/cetak), dan Storage (simpan data di memori/SSD)."
  },
  {
    term: "System Administrator (SysAdmin)",
    category: "Peran & Karir IT",
    icon: "👨‍💼",
    babyAnalogy: "Kepala Rumah Tangga Komputer Kantor!",
    detail: "Spesialis IT yang bertugas merawat seluruh komputer server, bikin akun pengguna baru, ngatur aturan password, update sistem operasi, dan nulis mantra skrip otomatis (Richard Fox Table 1.1)."
  },
  {
    term: "Network Administrator (NetAdmin)",
    category: "Peran & Karir IT",
    icon: "🌐",
    babyAnalogy: "Arsitek Jalan Tol & Polisi Lalu Lintas Kabel!",
    detail: "Spesialis IT yang bertugas masang kabel LAN, nyetting router & switch, ngatur nomor IP, serta mastiin pipa koneksi internet kantor ga mampet atau putus."
  },
  {
    term: "Database Administrator (DBA)",
    category: "Peran & Karir IT",
    icon: "🗄️",
    babyAnalogy: "Mandor Lemari Arsip Raksasa Perusahaan!",
    detail: "Spesialis IT yang mengelola software basis data (seperti SQL Server/Oracle), menjaga jutaan baris tabel transaksi, dan bikin backup rutin biar data ga hilang."
  },
  {
    term: "Security Administrator (SecAdmin)",
    category: "Peran & Karir IT",
    icon: "🛡️",
    babyAnalogy: "Komandan Pasukan Khusus Anti-Penyusup!",
    detail: "Spesialis IT yang memasang dan memantau Firewall, membuat aturan keamanan ketat (password kuat dan ganti tiap bulan), serta menginspeksi log serangan hacker."
  },
  {
    term: "IT Help Desk Specialist",
    category: "Peran & Karir IT",
    icon: "🎧",
    babyAnalogy: "Dokter UGD Pertama Saat Karyawan Panik!",
    detail: "Lini terdepan (Tier-1 Support) yang menjawab telepon/tiket saat karyawan bingung: printer macet, lupa password, layar mati, atau aplikasi error."
  },
  {
    term: "System Software (Sistem Operasi)",
    category: "Klasifikasi Software",
    icon: "🏠",
    babyAnalogy: "Rumah Utama Lengkap dengan Listrik, Air, & Pintu!",
    detail: "Software pengatur mesin dasar seperti Windows, Linux, dan macOS. Tanpa sistem operasi, komputer cuma seonggok besi yang ga ngerti apa-apa."
  },
  {
    term: "Application Software (Aplikasi Pengguna)",
    category: "Klasifikasi Software",
    icon: "📱",
    babyAnalogy: "Perabotan & Perkakas di Dalam Rumah (Kasur, TV, Kompor)!",
    detail: "Program yang dirancang khusus untuk membantu manusia bekerja atau bermain, contohnya: Google Chrome, Microsoft Excel, Photoshop, dan game."
  },
  {
    term: "Bit (Binary Digit)",
    category: "Ukuran Data",
    icon: "💡",
    babyAnalogy: "1 Saklar Lampu Kecil: Cuma Bisa Nyala (1) atau Mati (0)!",
    detail: "Satuan data paling kecil di alam semesta komputer. Komputer ga paham huruf manusia, dia cuma paham saklar listrik hidup (1) atau mati (0)."
  },
  {
    term: "Byte (B)",
    category: "Ukuran Data",
    icon: "🔤",
    babyAnalogy: "Satu Sendok Beras = Gandengan 8 Saklar Bit Buat 1 Huruf!",
    detail: "1 Byte terdiri dari 8 bit. 1 Byte pas banget untuk menyimpan 1 karakter huruf abjad atau angka, misalnya huruf 'A' disimpan sebagai 01000001."
  },
  {
    term: "Kilobyte (KB) & Megabyte (MB)",
    category: "Ukuran Data",
    icon: "📦",
    babyAnalogy: "1 Mangkok Beras (KB) & 1 Karung Beras (MB)!",
    detail: "1 KB = 1.024 Byte (cukup buat nampung 1 lembar email pendek). 1 MB = 1.024 KB (cukup buat nampung 1 lagu MP3 atau 1 foto jepretan kamera HP)."
  },
  {
    term: "Gigabyte (GB) & Terabyte (TB)",
    category: "Ukuran Data",
    icon: "🚚",
    babyAnalogy: "1 Truk Fuso Beras (GB) & 1 Gudang Raksasa Bulog (TB)!",
    detail: "1 GB = 1.024 MB (bisa nampung 1.000 buku teks tebal atau 1 film HD). 1 TB = 1.024 GB (bisa nyimpan jutaan dokumen seluruh kantor bertahun-tahun)."
  },
  {
    term: "Periferal (Peripheral Devices)",
    category: "Hardware",
    icon: "⌨️",
    babyAnalogy: "Aksesoris Tangan, Kaki, & Kacamata Komputer!",
    detail: "Perangkat luar yang dicolok ke komputer untuk input atau output: keyboard, mouse, monitor, printer, webcam, dan barcode scanner."
  },
  {
    term: "Kompilasi (Compilation)",
    category: "Koding & Mesin",
    icon: "📜",
    babyAnalogy: "Penerjemah Bahasa Manusia ke Bisikan Rahasia Robot!",
    detail: "Proses penerjemahan kode koding yang kita tulis (bahasa manusia seperti C#, Python, JS) menjadi bahasa mesin (0 dan 1) yang cuma bisa dipahami CPU."
  },
  {
    term: "Bandwidth",
    category: "Jaringan",
    icon: "🌊",
    babyAnalogy: "Lebar Pipa Paralon Air Internet!",
    detail: "Seberapa banyak data yang bisa lewat per detik. Kalau pipanya sempit tapi yang download banyak orang, airnya bakal menetes lambat (lemot)!"
  },
  {
    term: "Metodologi Troubleshooting",
    category: "IT Support",
    icon: "🩺",
    babyAnalogy: "Jurus 3 Langkah Dokter: Cek Gejala ➔ Cari Sebab ➔ Obati!",
    detail: "Pola pikir resmi IT menurut Richard Fox (Table 1.3): 1. Detect (deteksi error), 2. Diagnose (cari akar penyebabnya), 3. Find Solution & Verify (perbaiki dan pastikan sembuh)."
  },

  // --- HARDWARE DASAR ---
  {
    term: "CPU (Processor)",
    category: "Hardware",
    icon: "🧠",
    babyAnalogy: "Koki Masak Super Gesit di Restoran!",
    detail: "Otaknya komputer. Tugasnya cuma satu: nerima perintah resep dan masaknya secepat kilat. Kalau koki masaknya hebat, pesanan seberat apapun cepat disajikan."
  },
  {
    term: "RAM (Short-Term Memory)",
    category: "Hardware",
    icon: "🪵",
    babyAnalogy: "Meja Kerja Tempat Potong Sayur!",
    detail: "Tempat naruh aplikasi yang lagi dibuka SEKARANG. Cepat banget, tapi sifatnya volatile: kalau komputer dimatikan, mejanya langsung bersih kosong."
  },
  {
    term: "SSD / Storage (Long-Term Memory)",
    category: "Hardware",
    icon: "🧊",
    babyAnalogy: "Kulkas / Lemari Arsip Abadi!",
    detail: "Tempat nyimpan Windows, foto, dan aplikasi selamanya. Biar mati lampu berhari-hari, datanya ga bakal hilang (non-volatile)."
  },
  {
    term: "Motherboard",
    category: "Hardware",
    icon: "🗺️",
    babyAnalogy: "Lantai Rumah Tempat Semua Part Berdiri!",
    detail: "Papan sirkuit raksasa yang jadi fondasi. CPU, RAM, dan SSD semuanya dicolok di sini, terhubung oleh lorong kabel sirkuit (System Bus)."
  },
  {
    term: "PSU (Power Supply)",
    category: "Hardware",
    icon: "⚡",
    babyAnalogy: "Jantung yang Memompa Darah Listrik!",
    detail: "Tanpa PSU, komputer cuma besi mati. PSU mengubah listrik PLN 220V yang keras menjadi arus DC yang ramah bagi chip komputer."
  },

  // --- JARINGAN DASAR ---
  {
    term: "IP Address",
    category: "Jaringan",
    icon: "🏠",
    babyAnalogy: "Nomor Rumah & Kode Pos Surat Digital!",
    detail: "Alamat unik di jaringan (contoh: 192.168.1.15). Biar saat kamu nonton YouTube, videonya dikirim ke layar laptopmu, bukan ke komputer sebelah!"
  },
  {
    term: "DNS (Domain Name System)",
    category: "Jaringan",
    icon: "📖",
    babyAnalogy: "Buku Kontak Telepon HP!",
    detail: "Manusia susah hapal angka IP seperti 142.250.190.46, tapi gampang hapal 'google.com'. DNS yang menerjemahkan nama website ke nomor IP!"
  },
  {
    term: "Router",
    category: "Jaringan",
    icon: "📡",
    babyAnalogy: "Polisi Penjaga Gerbang Perempatan!",
    detail: "Gerbang keluar masuk (Default Gateway) yang menghubungkan jaringan lokal kantor kamu dengan jaringan internet luar dunia."
  },
  {
    term: "Firewall",
    category: "Keamanan",
    icon: "🧱",
    babyAnalogy: "Satpam Komplek yang Minta KTP di Gerbang!",
    detail: "Tembok filter penyaring data. Memeriksa siapa yang boleh masuk dan memblokir port yang dicurigai sebagai pintu masuk virus atau hacker."
  },

  // --- KODING & LOGIKA DASAR ---
  {
    term: "Variabel",
    category: "Koding",
    icon: "🫙",
    babyAnalogy: "Toples Berlabel Tempat Nyimpan Barang!",
    detail: "Wadah penyimpanan data di koding. Misalnya toples bernama 'nama_user' diisi teks 'Andi'. Kapanpun dipanggil, isinya adalah 'Andi'."
  },
  {
    term: "If / Else (Kondisi)",
    category: "Koding",
    icon: "🔀",
    babyAnalogy: "Pilihan Payung: 'Kalo Hujan Buka Payung, Kalo Engga Lipat!'",
    detail: "Percabangan logika robot. 'JIKA suhu server > 30 derajat, MAKA nyalakan AC, KALO ENGGA biarkan normal'."
  },
  {
    term: "Loop (Perulangan)",
    category: "Koding",
    icon: "🔁",
    babyAnalogy: "Lagu Favorit Diputar Ulang Sampai Bosan!",
    detail: "Perintah mengulang instruksi tanpa lelah. Daripada ngetik 100 baris kode, cukup ketik: 'Ulangi cetak 100 kali!'."
  },
  {
    term: "Bug & Syntax Error",
    category: "Koding",
    icon: "🐛",
    babyAnalogy: "Typo Huruf / Serangga Bikin Resep Kue Gagal!",
    detail: "Kesalahan penulisan tanda baca atau alur logika koding yang membuat program komputer mogok atau salah menghitung angka."
  }
];
