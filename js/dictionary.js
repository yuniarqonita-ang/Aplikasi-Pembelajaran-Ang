/* ===================================================================
   DICTIONARY.JS - KAMUS BAYI IT: DARI NOL JADI PAHAM!
   Kumpulan istilah IT & Koding dengan analogi bahasa bayi yang super gampang dicerna.
   =================================================================== */

const itDictionary = [
  {
    term: "CPU (Processor)",
    category: "Hardware",
    icon: "🧠",
    babyAnalogy: "Koki Masak Super Gesit di Restoran!",
    detail: "CPU itu otaknya komputer. Tugasnya cuma satu: nerima perintah resep dan masaknya secepat kilat. Kalau koki masaknya hebat, pesanan seberat apapun cepat disajikan."
  },
  {
    term: "RAM (Memory)",
    category: "Hardware",
    icon: "🪵",
    babyAnalogy: "Meja Kerja / Meja Dapur Tempat Potong Sayur!",
    detail: "Tempat naruh aplikasi yang lagi kamu buka SEKARANG. Semakin luas mejanya (misal 16GB), semakin banyak buku atau game yang bisa kamu gelar barengan tanpa sempit atau lemot. Tapi kalau komputernya dimatikan, mejanya langsung disapu bersih!"
  },
  {
    term: "SSD / Harddisk",
    category: "Hardware",
    icon: "🧊",
    babyAnalogy: "Kulkas / Lemari Arsip Tempat Simpan Barang Abadi!",
    detail: "Tempat nyimpan foto kenangan, film, dan dokumen. Biar komputer mati lampu berhari-hari, datanya ga bakal hilang. SSD itu versi kulkas turbo yang buka pintunya sekejap mata dibanding Harddisk piringan jadul."
  },
  {
    term: "Motherboard",
    category: "Hardware",
    icon: "🗺️",
    babyAnalogy: "Lantai Rumah / Lapangan Tempat Semua Part Berdiri!",
    detail: "Papan sirkuit raksasa yang jadi fondasi. Koki (CPU), meja (RAM), dan kulkas (SSD) semuanya dicolok di papan ini, lalu ada lorong kabel tempat mereka saling ngobrol."
  },
  {
    term: "PSU (Power Supply)",
    category: "Hardware",
    icon: "⚡",
    babyAnalogy: "Jantung yang Memompa 'Darah Listrik'!",
    detail: "Tanpa PSU, komputer cuma besi mati. PSU ngubah listrik tegangan rumah yang liar jadi listrik halus yang disukai komponen komputer."
  },
  {
    term: "Operating System (OS)",
    category: "Software",
    icon: "👔",
    babyAnalogy: "Manajer Restoran yang Super Disiplin!",
    detail: "Contohnya Windows, Linux, MacOS. Dia yang ngatur kapan koki masak, kapan kulkas dibuka, dan menampilkan layar cantik dengan tombol-tombol lucu biar kita manusia ga pusing ngomong sama mesin."
  },
  {
    term: "IP Address",
    category: "Jaringan",
    icon: "🏠",
    babyAnalogy: "Nomor Rumah & Kode Pos Paket Kiriman!",
    detail: "Contoh: 192.168.1.50. Setiap gadget di dunia atau di kantor punya nomor rumah sendiri. Biar pas komputer kamu nonton YouTube, videonya dikirim ke layar kamu, bukan ke printer lantai dua!"
  },
  {
    term: "DNS (Domain Name System)",
    category: "Jaringan",
    icon: "📖",
    babyAnalogy: "Buku Kontak Telepon di HP!",
    detail: "Komputer cuma kenal angka (IP Address seperti 142.250.190.46), tapi otak manusia susah hapal angka. Kamu cukup ketik 'google.com', lalu DNS bakal nyariin: 'Oh, si google.com itu nomor teleponnya ini ya!'"
  },
  {
    term: "Router & Switch",
    category: "Jaringan",
    icon: "🚦",
    babyAnalogy: "Pak Polisi Lalu Lintas & Tukang Sortir Surat!",
    detail: "Switch nyambungin banyak komputer di dalam satu ruangan kantor lewat kabel. Router yang jadi gerbang ke luar, menghubungkan kantor kamu ke dunia luar (internet global)."
  },
  {
    term: "Ping",
    category: "Jaringan",
    icon: "🏓",
    babyAnalogy: "Lempar Bola Bekel: 'Halo, kamu masih melek ga?'",
    detail: "Perintah buat ngetes: 'Halo server Google, dengar aku ngga?'. Kalau ada balasan 'Reply from...', berarti koneksi nyambung lancar. Kalau 'Request Timed Out', berarti kabel putus atau dia lagi pingsan."
  },
  {
    term: "Terminal / CLI (Layar Hitam)",
    category: "IT Support",
    icon: "📟",
    babyAnalogy: "Mantra Bisik-Bisik Rahasia Tanpa Mouse!",
    detail: "Bukan buat sok keren kayak hacker film! IT Support pake terminal karena ngetik satu baris perintah bisa beresin masalah 100x lebih cepat daripada klik mouse 50 kali."
  },
  {
    term: "Restart / Reboot",
    category: "IT Support",
    icon: "🔄",
    babyAnalogy: "Tidur Siang 5 Menit Buat Ngilangin Pusing!",
    detail: "Mantra sakti nomor satu anak IT Support! Kenapa 80% masalah beres pas di-restart? Karena saat mati, meja kerja (RAM) disapu bersih, sampah memori dibuang, dan komputer bangun dengan kondisi segar bugar."
  },
  {
    term: "Driver",
    category: "Software",
    icon: "🗣️",
    babyAnalogy: "Penerjemah Bahasa antara Printer dan Komputer!",
    detail: "Printer baru merek X punya bahasa sendiri, Windows punya bahasa sendiri. Driver itu kamus penerjemah biar Windows bisa bilang: 'Tolong cetak foto kucing ini ya pak printer!'"
  },
  {
    term: "Bandwidth",
    category: "Jaringan",
    icon: "🚿",
    babyAnalogy: "Lebar Pipa / Selang Air!",
    detail: "Bukan kecepatan airnya, tapi berapa banyak air yang bisa ngalir barengan. Kalau pipa kecil dipakai mandi sekeluarga barengan, airnya jadi netes-netes doang (lemot)."
  },
  {
    term: "Cache",
    category: "Software",
    icon: "📝",
    babyAnalogy: "Kertas Contekan di Saku!",
    detail: "Ingatan jangka pendek browser. Biar ga download foto profil web yang sama berkali-kali setiap kamu klik halaman baru, browser nyimpen fotonya di saku biar langsung nampil instan."
  },
  {
    term: "Variabel (Koding)",
    category: "Koding",
    icon: "📦",
    babyAnalogy: "Toples Kosong Dikasih Label Kertas Tempel!",
    detail: "Misal kamu ambil toples, kamu tempelin kertas tulisan 'skor', lalu kamu isi permen angka 10. Koding cuma permainan mindah-mindahin barang antar toples!"
  },
  {
    term: "If / Else (Kondisi)",
    category: "Koding",
    icon: "🔀",
    babyAnalogy: "Cabang Keputusan: 'Kalo Hujan, Bawa Payung!'",
    detail: "Komputer ga punya insting, kita harus ajarin: 'JIKA (if) baterai kurang dari 10%, MAKA bunyikan nada bip. KALO ENGGA (else), diam aja.'"
  },
  {
    term: "Loop (Perulangan)",
    category: "Koding",
    icon: "🔁",
    babyAnalogy: "Lagu Favorit yang Diputar Ulang 100 Kali!",
    detail: "Robot itu rajin banget dan ga pernah ngeluh. Daripada kamu nulis perintah 'Cuci piring' 100 kali, cukup ketik: 'Ulangi cuci piring sampai piringnya habis!'."
  },
  {
    term: "Bug",
    category: "Koding",
    icon: "🐛",
    babyAnalogy: "Kecoak / Nyamuk Nyasar di Dalam Resep Kue!",
    detail: "Kesalahan di dalam kode yang bikin komputer bingung atau bertingkah aneh. Istilah ini beneran berawal dari zaman dulu pas ada ngengat (serangga) nyangkut di mesin komputer raksasa!"
  },
  {
    term: "Syntax Error",
    category: "Koding",
    icon: "❌",
    babyAnalogy: "Typo / Salah Tulis Huruf atau Titik Koma!",
    detail: "Komputer itu polos dan kaku. Kalau kamu lupa nutup tanda kurung `)` atau salah eja satu huruf, dia bakal mogok dan bilang: 'Aku ga paham kamu ngomong apa!'."
  },
  {
    term: "Task Manager",
    category: "IT Support",
    icon: "📊",
    babyAnalogy: "CCTV Satpam Pengawas Ruangan!",
    detail: "Alat di Windows (Ctrl+Shift+Esc) buat ngintip siapa aplikasi nakal yang makan CPU atau RAM kebanyakan sampai bikin komputer ngelag."
  },
  {
    term: "Firewall",
    category: "Keamanan",
    icon: "🧱",
    babyAnalogy: "Satpam Komplek yang Minta KTP di Gerbang!",
    detail: "Tembok pelindung yang ngecek setiap paket internet yang mau masuk ke komputer: 'Kamu tamu undangan bukan? Kalau bukan virus/hacker, silakan masuk!'"
  }
];
