/* ===================================================================
   ENGLISH_TRAINER.JS - STUDIO BAHASA INGGRIS INTERAKTIF KODI
   1. Wawancara Kerja Speaking Profesional (Format Tanya-Jawab Berbobot)
   2. Game Huruf Hilang (Missing Letters Vocab & Grammar Puzzle)
   3. Bank Soal Marathon TOEFL ITP & IELTS (Lengkap Kisi-Kisi)
   4. Modul Spesial TOEFL iBT Beasiswa S2 (Building Skills Book Edition)
   =================================================================== */

// ===================================================================
// 1. LATIHAN SPEAKING WAWANCARA KERJA PROFESIONAL (BERBOBOT & ELEGAN)
// ===================================================================
const cvInterviewSpeakingDrills = [
  {
    id: "spk-cv-1",
    category: "1. Self Introduction & Background",
    questionEn: "Can you tell me about yourself and your educational background?",
    targetSentence: "I graduated with a Bachelor's degree in Mathematics and Education with a high GPA of 3.64, and I have strong analytical skills.",
    translationId: "Saya lulusan sarjana Pendidikan Matematika dengan IPK tinggi 3.64, dan saya memiliki kemampuan analitis yang kuat.",
    babyTips: "Kodi Tips: Tunjukkan bahwa latar belakang matematika membuat cara berpikirmu terstruktur dan logis saat koding dan memecahkan masalah IT."
  },
  {
    id: "spk-cv-2",
    category: "2. Pengalaman Kerja & Sistem TI",
    questionEn: "What IT and technical support experience do you have?",
    targetSentence: "I worked as an IT Systems Specialist, developing web portals and troubleshooting operating system and hardware issues.",
    translationId: "Saya bekerja sebagai staf spesialis sistem TI, mengembangkan portal web dan menyelesaikan masalah sistem operasi serta perangkat keras.",
    babyTips: "Kodi Tips: Sebutkan kata 'developing' (membangun sistem) dan 'troubleshooting' (memperbaiki error) dengan pelafalan yang mantap."
  },
  {
    id: "spk-cv-3",
    category: "3. Keunggulan Lulusan Pendidikan di Dunia IT",
    questionEn: "Why should we hire you for this IT role even though your degree is in education?",
    targetSentence: "My education background makes me a great communicator and fast learner, while my math degree gives me strong problem-solving logic.",
    translationId: "Latar belakang pendidikan membuat saya terampil berkomunikasi dan cepat belajar, sementara gelar matematika memberi saya logika pemecahan masalah yang kuat.",
    babyTips: "Kodi Tips: Ini jawaban sakti! Orang IT sering kaku komunikasi, tapi kamu punya keahlian komunikasi + logika matematika + pengalaman kelola sistem web!"
  },
  {
    id: "spk-cv-4",
    category: "4. Database & SQL Query Skills",
    questionEn: "How do you handle data and database queries in your work?",
    targetSentence: "I write SQL queries to filter and manage tables, and I have solid experience processing large datasets and survey records.",
    translationId: "Saya menulis kueri SQL untuk memfilter dan mengelola tabel, dan saya berpengalaman mengolah dataset besar dan data survei.",
    babyTips: "Kodi Tips: Tekankan bahwa kamu terbiasa menangani data tabel yang banyak secara rapi dan teliti."
  },
  {
    id: "spk-cv-5",
    category: "5. Kemampuan Desain & UI/UX (Sertifikat BNSP)",
    questionEn: "Do you have any design or user interface skills?",
    targetSentence: "I hold a certified Graphic Designer credential from BNSP, which helps me design clean and user-friendly web interfaces.",
    translationId: "Saya memiliki sertifikat kompetensi Desainer Grafis resmi dari BNSP, yang membantu saya merancang antarmuka web yang rapi dan mudah digunakan.",
    babyTips: "Kodi Tips: Sertifikat resmi BNSP Desain Grafis adalah nilai tambah besar untuk posisi IT Software & Frontend antarmuka pengguna!"
  },
  {
    id: "spk-cv-6",
    category: "6. Kesiapan & Komitmen Kerja",
    questionEn: "How do you prepare yourself to work in a fast-paced manufacturing or technology facility?",
    targetSentence: "I am highly adaptable, detail-oriented, and ready to collaborate closely with team members to support factory systems.",
    translationId: "Saya sangat mudah beradaptasi, berorientasi pada detail, dan siap berkolaborasi erat dengan tim untuk mendukung sistem perusahaan.",
    babyTips: "Kodi Tips: Jawaban ini menunjukkan dedikasi, kedisiplinan, dan kesiapan bekerja di lingkungan profesional yang dinamis."
  }
];

// ===================================================================
// 2. GAME HURUF HILANG (MISSING LETTERS VOCABULARY & GRAMMAR PUZZLE)
// ===================================================================
const missingLetterPuzzles = [
  {
    id: "ml-1",
    word: "DATABASE",
    masked: "D _ T _ B _ S _",
    missingLetters: ["A", "A", "A", "E"],
    category: "IT & Data",
    babyClue: "🍼 Lemari arsip raksasa tempat nyimpan jutaan baris data rapi (Tabel Karyawan & Sepatu)!",
    meaning: "Basis data / kumpulan tabel penyimpanan informasi komputer."
  },
  {
    id: "ml-2",
    word: "REQUIRES",
    masked: "R _ Q _ I _ E S",
    missingLetters: ["E", "U", "R"],
    category: "Grammar: Subject-Verb",
    babyClue: "🍼 Kata kerja bahasa Inggris yang artinya 'membutuhkan'. Wajib ada akhiran huruf 'S' kalau subjeknya tunggal (satu biji)!",
    meaning: "Memerlukan / membutuhkan (Verb 1 tunggal)."
  },
  {
    id: "ml-3",
    word: "SOFTWARE",
    masked: "S _ F T _ A _ E",
    missingLetters: ["O", "W", "R"],
    category: "IT Core",
    babyClue: "🍼 Perangkat lunak yang ga bisa disentuh jari tapi jadi otak pengendali semua aplikasi!",
    meaning: "Perangkat lunak program komputer."
  },
  {
    id: "ml-4",
    word: "ANALYSIS",
    masked: "A N _ L _ S _ S",
    missingLetters: ["A", "Y", "I"],
    category: "Skill Matematika & IT",
    babyClue: "🍼 Bedah masalah dan periksa data angka sampai tuntas untuk cari jalan keluar!",
    meaning: "Analisis / penyelidikan mendalam terhadap data."
  },
  {
    id: "ml-5",
    word: "SOLUTION",
    masked: "S _ L _ T _ O N",
    missingLetters: ["O", "U", "I"],
    category: "Problem Solving",
    babyClue: "🍼 Obat penyembuh atau kunci jawaban pas komputer lagi kena masalah error!",
    meaning: "Solusi / jalan keluar dari suatu masalah."
  },
  {
    id: "ml-6",
    word: "PASSIVE",
    masked: "P _ S S _ V E",
    missingLetters: ["A", "I"],
    category: "Grammar TOEFL",
    babyClue: "🍼 Bentuk kalimat 'di-kerjakan' (To be + Verb 3), contoh: 'Komputer di-perbaiki oleh staf TI'!",
    meaning: "Kalimat pasif (lawan dari kalimat aktif)."
  },
  {
    id: "ml-7",
    word: "CONNECT",
    masked: "C _ N N _ C T",
    missingLetters: ["O", "E"],
    category: "Jaringan",
    babyClue: "🍼 Colok kabel LAN atau nyalain WiFi biar dua komputer bisa saling ngobrol!",
    meaning: "Menghubungkan / tersambung."
  },
  {
    id: "ml-8",
    word: "DEVELOP",
    masked: "D _ V _ L _ P",
    missingLetters: ["E", "E", "O"],
    category: "Pemrograman",
    babyClue: "🍼 Membangun dan merancang aplikasi dari kertas kosong sampai bisa dipakai orang banyak!",
    meaning: "Mengembangkan / membuat sistem perangkat lunak."
  },
  {
    id: "ml-9",
    word: "VERIFY",
    masked: "V _ R _ F Y",
    missingLetters: ["E", "I"],
    category: "QC & Security",
    babyClue: "🍼 Cek dan periksa ulang data sekali lagi biar ga ada kesalahan atau typo!",
    meaning: "Memverifikasi / memeriksa kebenaran data."
  },
  {
    id: "ml-10",
    word: "NETWORK",
    masked: "N _ T W _ R K",
    missingLetters: ["E", "O"],
    category: "Jaringan",
    babyClue: "🍼 Jaring laba-laba kabel kantor yang bikin laptop kasir bisa nge-print ke printer lantai dua!",
    meaning: "Jaringan komputer antar perangkat."
  },
  {
    id: "ml-11",
    word: "EFFICIENT",
    masked: "E F F _ C _ _ N T",
    missingLetters: ["I", "I", "E"],
    category: "Produktivitas",
    babyClue: "🍼 Kerja cerdas: kerjaan beres kilat dengan hasil maksimal tanpa buang-buang waktu & daya!",
    meaning: "Efisien / berdaya guna tinggi."
  },
  {
    id: "ml-12",
    word: "GATEWAY",
    masked: "G _ T _ W _ Y",
    missingLetters: ["A", "E", "A"],
    category: "Jaringan",
    babyClue: "🍼 Pintu gerbang utama komplek rumah buat paket data internet keluar masuk!",
    meaning: "Gerbang jaringan (IP Router default)."
  },
  {
    id: "ml-13",
    word: "FLUCTUATE",
    masked: "F L _ C T _ A T E",
    missingLetters: ["U", "U"],
    category: "IELTS Task 1: Data Tren",
    babyClue: "🍼 Grafik angka yang naik turun kayak ombak di laut, ga pernah diam di satu garis lurus!",
    meaning: "Berfluktuasi / naik turun secara berkala (khas analisis grafik matematika IELTS Task 1)."
  },
  {
    id: "ml-14",
    word: "SIGNIFICANT",
    masked: "S _ G N _ F _ C A N T",
    missingLetters: ["I", "I", "I"],
    category: "IELTS Band 9 Academic",
    babyClue: "🍼 Sesuatu yang dampaknya luar biasa besar dan sangat berharga, ga boleh disepelekan!",
    meaning: "Signifikan / berpengaruh besar dan penting."
  },
  {
    id: "ml-15",
    word: "ACCURACY",
    masked: "A C C _ R _ C Y",
    missingLetters: ["U", "A"],
    category: "Matematika & IT Testing",
    babyClue: "🍼 Ketepatan kalkulasi 100% pas di sasaran tanpa ada selip angka satu digit pun!",
    meaning: "Akurasi / ketepatan perhitungan."
  },
  {
    id: "ml-16",
    word: "INNOVATION",
    masked: "I N N _ V _ T _ O N",
    missingLetters: ["O", "A", "I"],
    category: "Teknologi & Industri",
    babyClue: "🍼 Ide dan cara baru yang kreatif buat bikin kerjaan manual jadi otomatis dan canggih!",
    meaning: "Inovasi / terobosan teknologi baru."
  },
  {
    id: "ml-17",
    word: "COLLABORATE",
    masked: "C _ L L _ B _ R A T E",
    missingLetters: ["O", "A", "O"],
    category: "Teamwork & Soft Skills",
    babyClue: "🍼 Bekerja sama kompak bareng teman satu tim biar kerjaan berat jadi ringan!",
    meaning: "Berkolaborasi / bekerja sama secara sinergis."
  },
  {
    id: "ml-18",
    word: "METHODOLOGY",
    masked: "M _ T H _ D _ L O G Y",
    missingLetters: ["E", "O", "O"],
    category: "Riset & Analisis Data",
    babyClue: "🍼 Urutan langkah-langkah ilmiah yang teratur dan sistematis buat membongkar suatu masalah!",
    meaning: "Metodologi / kerangka kerja terstruktur."
  },
  {
    id: "ml-19",
    word: "HYPOTHESIS",
    masked: "H _ P _ T H _ S _ S",
    missingLetters: ["Y", "O", "E", "I"],
    category: "TOEFL iBT Academic Science",
    babyClue: "🍼 Dugaan atau tebakan pintar para ilmuwan sebelum mereka mulai uji eksperimen di laboratorium!",
    meaning: "Hipotesis / dugaan sementara yang harus diuji kebenarannya."
  },
  {
    id: "ml-20",
    word: "SUBJUNCTIVE",
    masked: "S _ B J _ N C T _ V E",
    missingLetters: ["U", "U", "I"],
    category: "TOEFL Grammar Mastery",
    babyClue: "🍼 Rumus tata bahasa perintah halus (suggest/insist that someone DO something tanpa embel-embel s/ed)!",
    meaning: "Modus pengandaian / keharusan dalam grammar tingkat tinggi."
  },
  {
    id: "ml-21",
    word: "INFERENCE",
    masked: "I N F _ R _ N C _",
    missingLetters: ["E", "E", "E"],
    category: "TOEFL iBT Reading Skill",
    babyClue: "🍼 Menjadi detektif pintar: membaca maksud yang tersirat di balik kalimat tanpa ditulis gamblang!",
    meaning: "Inferensi / kesimpulan tersirat berdasarkan fakta yang ada."
  },
  {
    id: "ml-22",
    word: "RESILIENT",
    masked: "R _ S _ L _ E N T",
    missingLetters: ["E", "I", "I"],
    category: "Academic Vocab iBT",
    babyClue: "🍼 Karakter pantang tumbang: jatuh berkali-kali tapi langsung bangkit tegak lagi dengan kuat!",
    meaning: "Tangguh / ulet / mampu pulih dengan cepat setelah menghadapi kesulitan."
  },
  {
    id: "ml-23",
    word: "COMPREHENSIVE",
    masked: "C _ M P R _ H _ N S _ V E",
    missingLetters: ["O", "E", "E", "I"],
    category: "Academic Vocab iBT",
    babyClue: "🍼 Lengkap selengkap-lengkapnya dari A sampai Z, ga ada detail yang tertinggal sedikitpun!",
    meaning: "Komprehensif / menyeluruh dan mencakup semua aspek."
  },
  {
    id: "ml-24",
    word: "EMPIRICAL",
    masked: "E M P _ R _ C _ L",
    missingLetters: ["I", "I", "A"],
    category: "TOEFL Research Vocab",
    babyClue: "🍼 Berdasarkan bukti nyata yang bisa dilihat, diraba, dan dihitung pakai data fakta, bukan sekadar teori dongeng!",
    meaning: "Empiris / didasarkan pada observasi atau eksperimen nyata."
  },
  {
    id: "ml-25",
    word: "PARADIGM",
    masked: "P _ R _ D _ G M",
    missingLetters: ["A", "A", "I"],
    category: "S2 Academic Theory",
    babyClue: "🍼 Kacamata atau pola pikir besar yang dipakai para ahli dalam memandang dunia ilmu pengetahuan!",
    meaning: "Paradigma / kerangka berpikir yang mendasari suatu ilmu atau teori."
  }
];

// ===================================================================
// 3. BANK SOAL MARATHON TOEFL ITP & IELTS (LENGKAP DENGAN KISI-KISI)
// ===================================================================
const comprehensiveToeflBank = [
  // --- KISI-KISI CAMBRIDGE IELTS: Analisis Grafik & Data Tren (IELTS Writing Task 1) ---
  {
    id: "tf-ielts-1",
    topic: "Cambridge IELTS Task 1: Trend Description",
    question: "According to the annual production chart, the shoe output _____ dramatically between March and July.",
    options: ["increased", "increasing", "increase", "is increase"],
    correctIndex: 0,
    explanation: "🍼 Bahasa Bayi: Kejadian di grafik sudah berlalu di masa lalu (between March and July), jadi gunakan kata kerja bentuk lampau (Past Tense) yaitu 'increased'!"
  },
  {
    id: "tf-ielts-2",
    topic: "Cambridge IELTS Academic: Linking & Contrast",
    question: "Production costs grew substantially, _____ overall employee productivity reached record levels.",
    options: ["whereas", "in spite of", "despite", "because of"],
    correctIndex: 0,
    explanation: "🍼 Bahasa Bayi: Kita mau membandingkan dua kalimat lengkap yang berlawanan (Biaya naik, PADAHAL produktivitas juga rekor). Kata hubung untuk dua klausa kalimat utuh adalah 'whereas' (sedangkan/padahal)!"
  },
  {
    id: "tf-ielts-3",
    topic: "Cambridge IELTS Grammar: Cause and Effect (-ing Clause)",
    question: "The engineering team upgraded the server hardware, _____ in a 40 percent boost in database speed.",
    options: ["result", "resulted", "resulting", "results"],
    correctIndex: 2,
    explanation: "🍼 Bahasa Bayi: Ini pola khas Cambridge IELTS Academic! Untuk menyatakan akibat langsung di akhir kalimat tanpa kata sambung, gunakan partikel '-ing' (present participle), yaitu 'resulting in' (sehingga menghasilkan)!"
  },

  // --- KISI-KISI 1: Tenses Dasar (Simple Past vs Present) ---
  {
    id: "tf-1",
    topic: "Tenses: Simple Past Tense (Masa Lalu)",
    question: "Yesterday, the IT engineer _____ the faulty database server successfully.",
    options: ["repairs", "repaired", "repairing", "is repairing"],
    correctIndex: 1,
    explanation: "🍼 Bahasa Bayi: Ada kata 'Yesterday' (kemarin = masa lalu lampau). Jadi wajib pakai kata kerja bentuk kedua (Verb 2) yang ada akhiran '-ed', yaitu 'repaired'!"
  },
  {
    id: "tf-2",
    topic: "Tenses: Simple Present (Kebiasaan / Fakta)",
    question: "The automated backup system _____ every day at midnight.",
    options: ["runs", "ran", "is running", "run"],
    correctIndex: 0,
    explanation: "🍼 Bahasa Bayi: Ada kata 'every day' (setiap hari = jadwal rutin/kebiasaan). Karena subjeknya 'The automated backup system' itu satu sistem tunggal, maka kata kerjanya wajib pakai huruf 's' di belakangnya yaitu 'runs'!"
  },
  {
    id: "tf-3",
    topic: "Tenses: Present Perfect (Kejadian yang sudah selesai & ada hasilnya)",
    question: "The software development team _____ already completed the new web portal.",
    options: ["have", "has", "is", "having"],
    correctIndex: 1,
    explanation: "🍼 Bahasa Bayi: 'The team' dianggap satu kesatuan tim tunggal. Rumus Present Perfect adalah has/have + Verb 3 (completed). Karena subjeknya tunggal, pasangannya adalah 'has'!"
  },

  // --- KISI-KISI 2: Subject - Verb Agreement (Kesepakatan Subjek & Kata Kerja) ---
  {
    id: "tf-4",
    topic: "Subject-Verb Agreement",
    question: "The list of approved shoe production codes _____ available on the notice board.",
    options: ["is", "are", "were", "being"],
    correctIndex: 0,
    explanation: "🍼 Bahasa Bayi: AWAS JEBAKAN! Subjek aslinya adalah 'The list' (selembar daftar = tunggal), bukan 'codes'. Karena daftarnya cuma satu, to be yang benar adalah 'is'!"
  },
  {
    id: "tf-5",
    topic: "Subject-Verb Agreement with 'Neither/Either'",
    question: "Neither the manager nor the technicians _____ able to restore the deleted files.",
    options: ["was", "were", "is", "being"],
    correctIndex: 1,
    explanation: "🍼 Bahasa Bayi: Kalau ada 'Neither ... nor ...', kata kerjanya ngikutin kata benda yang PALING DEKAT dengannya! Karena 'technicians' berakhiran 's' (banyak orang), maka pasangannya adalah 'were'!"
  },
  {
    id: "tf-6",
    topic: "Subject-Verb Agreement: Measurement / Statistics",
    question: "Three weeks of technical training _____ required for all new recruits.",
    options: ["is", "are", "were", "being"],
    correctIndex: 0,
    explanation: "🍼 Bahasa Bayi: Waktu ('Three weeks'), uang, dan jarak dianggap sebagai SATU paket utuh tunggal. Jadi kata kerjanya pakai 'is', bukan 'are'!"
  },

  // --- KISI-KISI 3: Passive Voice (Bentuk Kalimat Pasif 'Di-') ---
  {
    id: "tf-7",
    topic: "Passive Voice (Bentuk Pasif)",
    question: "All quality reports must _____ by the department supervisor before shipment.",
    options: ["sign", "be signed", "signed", "signing"],
    correctIndex: 1,
    explanation: "🍼 Bahasa Bayi: Laporan itu benda mati, dia bukan menandatangani, tapi 'DI-tandatangani'. Setelah modal 'must', rumus pasifnya adalah 'must + be + Verb 3', jadi 'be signed'!"
  },
  {
    id: "tf-8",
    topic: "Passive Voice Past",
    question: "The factory network cables _____ replaced last weekend.",
    options: ["was", "were", "is", "are"],
    correctIndex: 1,
    explanation: "🍼 Bahasa Bayi: 'cables' jumlahnya banyak (jamak), dan kejadiannya 'last weekend' (lampau). Jadi to be pasif bentuk lampau yang cocok adalah 'were'!"
  },

  // --- KISI-KISI 4: Conditionals / Kalimat Pengandaian (If Clauses) ---
  {
    id: "tf-9",
    topic: "Conditional Type 1 (Masa Depan)",
    question: "If the server temperature exceeds 35 degrees, the emergency alarm _____ immediately.",
    options: ["sounds", "will sound", "sounded", "would sound"],
    correctIndex: 1,
    explanation: "🍼 Bahasa Bayi: Kalimat pengandaian tipe 1 (Jika X terjadi di masa kini, maka Y AKAN berbunyi di masa depan). Bagian if pakai 'exceeds', pasangannya wajib 'will + Verb 1' yaitu 'will sound'!"
  },
  {
    id: "tf-10",
    topic: "Conditional Type 2 (Khayalan Masa Kini)",
    question: "If I _____ the IT administrator, I would upgrade the internet bandwidth today.",
    options: ["am", "was", "were", "will be"],
    correctIndex: 2,
    explanation: "🍼 Bahasa Bayi: Di tes TOEFL/IELTS resmi, untuk pengandaian tidak nyata (Type 2), subjek apapun (I, he, she) SELALU memakai 'were'! Jadi 'If I were'!"
  },

  // --- KISI-KISI 5: Relative Pronouns (Kata Penghubung Who, Which, Whose) ---
  {
    id: "tf-11",
    topic: "Relative Clauses: Who vs Which",
    question: "The programmer _____ developed the inventory database has received a promotion.",
    options: ["which", "who", "whom", "whose"],
    correctIndex: 1,
    explanation: "🍼 Bahasa Bayi: 'The programmer' adalah manusia/orang yang melakukan pekerjaan. Untuk menghubungkan orang dengan tindakannya, kita wajib pakai 'who'!"
  },
  {
    id: "tf-12",
    topic: "Relative Clauses: Possession (Kepemilikan)",
    question: "The technician _____ laptop was infected by malware asked for IT assistance.",
    options: ["who", "whom", "whose", "which"],
    correctIndex: 2,
    explanation: "🍼 Bahasa Bayi: Kita mau bilang 'Teknisi yang laptop-NYA kena virus'. Untuk menyatakan kepemilikan barang milik seseorang, kata penghubung sakti adalah 'whose'!"
  },

  // --- KISI-KISI 6: Parallel Structure (Kesejajaran Bentuk) ---
  {
    id: "tf-13",
    topic: "Parallel Structure",
    question: "The IT staff is responsible for installing software, diagnosing errors, and _____ system cables.",
    options: ["repair", "repairs", "repairing", "to repair"],
    correctIndex: 2,
    explanation: "🍼 Bahasa Bayi: Hukum kesejajaran! Kalau yang depan pakai '-ing' (installing, diagnosing), maka kata yang paling belakang juga WAJIB kembar pakai '-ing', yaitu 'repairing'!"
  },

  // --- KISI-KISI 7: Word Form / Parts of Speech ---
  {
    id: "tf-14",
    topic: "Word Form: Adverb vs Adjective",
    question: "The new manufacturing software performs all data calculations _____.",
    options: ["accurate", "accurately", "accuracy", "accurateness"],
    correctIndex: 1,
    explanation: "🍼 Bahasa Bayi: Kata yang menerangkan CARA koding bekerja (performs) harus menggunakan kata keterangan (Adverb) yang berakhiran '-ly'. Jadi jawabannya 'accurately' (secara akurat)!"
  },
  {
    id: "tf-15",
    topic: "Word Form: Noun Requirement",
    question: "The company provides free technical _____ to all factory employees.",
    options: ["train", "trainer", "training", "trains"],
    correctIndex: 2,
    explanation: "🍼 Bahasa Bayi: Setelah kata sifat 'technical' (teknis), kita butuh kata benda (noun). Pelatihan teknis adalah 'technical training'!"
  },

  // --- KISI-KISI 8: Modals & Gerunds ---
  {
    id: "tf-16",
    topic: "Gerund after Preposition",
    question: "Before _____ the main server power, please ensure all running tasks are saved.",
    options: ["disconnect", "disconnected", "disconnecting", "disconnects"],
    correctIndex: 2,
    explanation: "🍼 Bahasa Bayi: Setelah kata depan preposisi seperti 'before', 'after', 'for', kata kerja di belakangnya WAJIB ditambahkan '-ing' (Gerund)! Jadi 'Before disconnecting'!"
  },
  {
    id: "tf-17",
    topic: "Comparative Degree",
    question: "The modern SSD storage operates much _____ than the old magnetic hard drive.",
    options: ["fast", "faster", "fastest", "more fast"],
    correctIndex: 1,
    explanation: "🍼 Bahasa Bayi: Ada kata 'than' (daripada / perbandingan dua benda). Untuk kata sifat pendek seperti 'fast', bentuk perbandingannya ditambah '-er' yaitu 'faster'!"
  },
  {
    id: "tf-18",
    topic: "Connectors: In Spite Of vs Although",
    question: "_____ the severe network outage, the factory production schedule was completed on time.",
    options: ["Although", "Despite", "Even though", "Because"],
    correctIndex: 1,
    explanation: "🍼 Bahasa Bayi: 'the severe network outage' cuma frasa kata benda (tanpa kata kerja). Kata yang artinya 'meskipun' dan diikuti kata benda adalah 'Despite' (atau 'In spite of'). Kalau 'Although' harus ada kalimat lengkap!"
  },

  // --- KISI-KISI 9: Inversi Kalimat Negatif (Rarely/Hardly) ---
  {
    id: "tf-19",
    topic: "Negative Inversion (Pembalikan Subjek & Aux)",
    question: "Rarely _____ such complex database anomalies occur without an immediate alert.",
    options: ["do", "does", "they do", "are"],
    correctIndex: 0,
    explanation: "🍼 Bahasa Bayi: Kalau kalimat diawali kata negatif seperti 'Rarely' (jarang sekali), polanya dibalik seperti kalimat tanya: Aux + Subjek + Verb! Karena 'anomalies' jamak, kata bantunya adalah 'do'!"
  },

  // --- KISI-KISI 10: Subjunctive Mood (Perintah Halus Ilmiah) ---
  {
    id: "tf-20",
    topic: "Subjunctive Mood (Kata Kerja Dasar)",
    question: "The system security auditor recommended that every administrator _____ a two-factor authentication key.",
    options: ["uses", "use", "used", "is using"],
    correctIndex: 1,
    explanation: "🍼 Bahasa Bayi: Rumus Subjunctive! Kata-kata seperti 'recommend that', 'insist that', 'suggest that' mewajibkan kata kerja di belakangnya polos tanpa 's' atau 'ed' (bare infinitive). Jadi wajib 'use', bukan 'uses'!"
  },

  // --- KISI-KISI 11: Reduced Relative Clause (Penyusutan Klausa) ---
  {
    id: "tf-21",
    topic: "Reduced Relative Clause (Bentuk Pasif)",
    question: "The software patch _____ by the developer yesterday resolved the security vulnerability.",
    options: ["released", "releasing", "was released", "releases"],
    correctIndex: 0,
    explanation: "🍼 Bahasa Bayi: Kalimat ini aslinya 'The patch WHICH WAS RELEASED...'. Saat 'which was' disederhanakan, yang tersisa tinggal kata kerja ketiga (Verb 3 pasif) yaitu 'released' (yang dirilis)!"
  },

  // --- KISI-KISI 12: Causative Verbs (Menyuruh Orang Lain Mengerjakan) ---
  {
    id: "tf-22",
    topic: "Causative Verbs (Have / Make / Let)",
    question: "The department head will have the senior analyst _____ the database integrity log.",
    options: ["check", "checked", "to check", "checking"],
    correctIndex: 0,
    explanation: "🍼 Bahasa Bayi: Rumus Causative 'Have someone DO something'! Kalau kita menyuruh orang (the analyst) melakukan sesuatu, kata kerjanya wajib polos (Verb 1) tanpa 'to' yaitu 'check'!"
  },

  // --- KISI-KISI 13: Countable vs Uncountable Nouns ---
  {
    id: "tf-23",
    topic: "Quantifiers: Much vs Many",
    question: "The research survey provides _____ valuable information regarding network vulnerabilities.",
    options: ["many", "much", "several", "a few"],
    correctIndex: 1,
    explanation: "🍼 Bahasa Bayi: 'Information' adalah benda yang ga bisa dihitung bijiannya (uncountable). Pasangan untuk benda uncountable adalah 'much', sedangkan 'many' cuma untuk benda yang bisa dihitung jamak!"
  },

  // --- KISI-KISI 14: Gerund vs Infinitive ---
  {
    id: "tf-24",
    topic: "Verbs Followed by Gerund",
    question: "The software team avoided _____ unauthorized third-party libraries in the production build.",
    options: ["to include", "include", "including", "included"],
    correctIndex: 2,
    explanation: "🍼 Bahasa Bayi: Kata kerja 'avoid' (menghindari) wajib selalu ditemani oleh gerund berakhiran '-ing'! Jadi pasangannya adalah 'avoided including'!"
  },

  // --- KISI-KISI 15: Conjunction: Not Only ... But Also ---
  {
    id: "tf-25",
    topic: "Correlative Conjunctions",
    question: "The cloud infrastructure is not only cost-effective _____ remarkably reliable under heavy web traffic.",
    options: ["and also", "but also", "or also", "so also"],
    correctIndex: 1,
    explanation: "🍼 Bahasa Bayi: Pasangan sehidup semati dalam grammar! Kalau ada 'not only' (tidak hanya), pasangannya PASTI 'but also' (tetapi juga)!"
  }
];

// ===================================================================
// 4. MODUL SPESIAL TOEFL iBT BEASISWA S2 (BUILDING SKILLS BOOK EDITION)
// Sesuai Buku: Building Skills for the TOEFL iBT [2nd Edition] (Compass Publishing)
// Melatih 6 Kemampuan Inti:
// 1. Vocabulary in Context (Kosakata Akademik Beasiswa)
// 2. Sentence Simplification (Menyederhanakan Kalimat Panjang Mumet)
// 3. Factual Information & Negative Fact (Detektif Fakta Teks Ilmiah)
// 4. Inference Questions (Membaca Makna Tersirat Ilmiah)
// 5. Text Insertion (Jigsaw Puzzle Kalimat Akademik [■])
// 6. Speaking iBT Simulator (15s Prep, 45s Speech + Mic Audio Feedback)
// ===================================================================
const toeflIbtBuildingSkills = [
  // -------------------------------------------------------------
  // SKILL 1: VOCABULARY IN CONTEXT (Kosakata Akademik Beasiswa S2)
  // -------------------------------------------------------------
  {
    id: "ibt-voc-1",
    type: "reading",
    skillCategory: "Vocabulary in Context",
    bookChapter: "Chapter 3: Vocabulary & Reference Skills",
    academicTopic: "Computer Science: Algorithmic Architecture",
    passageSnippet: "Modern distributed database management systems utilize index mechanisms that are ubiquitous across enterprise data centers. By establishing structured pointers to raw data nodes, these search engines diminish query latency significantly even during peak transaction intervals.",
    highlightWord: "ubiquitous",
    questionPrompt: "The word 'ubiquitous' in the passage is closest in meaning to:",
    targetSentenceForAudio: "Modern distributed database management systems utilize index mechanisms that are ubiquitous across enterprise data centers.",
    options: [
      "extremely rare and costly",
      "present everywhere simultaneously",
      "unstable and experimental",
      "temporarily configured"
    ],
    correctIndex: 1,
    babyExplanation: "🍼 Bahasa Bayi Kodi: Kata 'Ubiquitous' artinya 'ada di mana-mana / merajalela'! Bayangkan smartphone atau colokan listrik di kantor modern—ada di setiap meja dan ga bisa dihindari. Pilihan yang tepat adalah 'present everywhere simultaneously' (hadir di mana-mana)!"
  },
  {
    id: "ibt-voc-2",
    type: "reading",
    skillCategory: "Vocabulary in Context",
    bookChapter: "Chapter 3: Vocabulary & Reference Skills",
    academicTopic: "Environmental Science: Alpine Glacier Retreat",
    passageSnippet: "Due to prolonged atmospheric warming, alpine glaciers have begun to diminish at accelerated rates over the past four decades. This reduction directly alters downstream freshwater supplies, threatening agricultural irrigation and hydroelectric power reservoirs.",
    highlightWord: "diminish",
    questionPrompt: "The word 'diminish' in the passage is closest in meaning to:",
    targetSentenceForAudio: "Due to prolonged atmospheric warming, alpine glaciers have begun to diminish at accelerated rates over the past four decades.",
    options: [
      "expand rapidly",
      "freeze solid",
      "decrease in size or amount",
      "remain unchanged"
    ],
    correctIndex: 2,
    babyExplanation: "🍼 Bahasa Bayi Kodi: Kata 'Diminish' artinya 'menyusut / berkurang / mengecil'! Bayangkan es batu di gelas yang kena panas matahari, makin lama makin ciut dan mengecil. Jadi sinonim akuratnya adalah 'decrease in size or amount'!"
  },
  {
    id: "ibt-voc-3",
    type: "reading",
    skillCategory: "Vocabulary in Context",
    bookChapter: "Chapter 3: Vocabulary & Reference Skills",
    academicTopic: "Evolutionary Biology: Adaptive Camouflage",
    passageSnippet: "The natural development of adaptive cryptic coloration played a pivotal role in the survival of temperate forest insects. Without the capacity to blend seamlessly into lichen-covered tree bark, juvenile insects were easily located by visual predators.",
    highlightWord: "pivotal",
    questionPrompt: "The word 'pivotal' in the passage is closest in meaning to:",
    targetSentenceForAudio: "The natural development of adaptive cryptic coloration played a pivotal role in the survival of temperate forest insects.",
    options: [
      "minor and negligible",
      "crucially important",
      "unfortunate",
      "fictional"
    ],
    correctIndex: 1,
    babyExplanation: "🍼 Bahasa Bayi Kodi: Kata 'Pivotal' berasal dari poros (pivot) roda—kalau porosnya patah, rodanya copot! Jadi 'pivotal' artinya 'sangat penting / menjadi kunci penentu'! Sinonim akademiknya adalah 'crucially important'!"
  },
  {
    id: "ibt-voc-4",
    type: "reading",
    skillCategory: "Vocabulary in Context",
    bookChapter: "Chapter 3: Vocabulary & Reference Skills",
    academicTopic: "Renewable Energy: Photovoltaic Cells",
    passageSnippet: "Engineers have developed novel silicon crystal arrays to harness photon energy with minimal thermal loss. By converting ambient sunlight directly into direct current electricity, these panels offer an eco-friendly alternative to coal generation.",
    highlightWord: "harness",
    questionPrompt: "The word 'harness' in the passage is closest in meaning to:",
    targetSentenceForAudio: "Engineers have developed novel silicon crystal arrays to harness photon energy with minimal thermal loss.",
    options: [
      "capture and utilize",
      "waste and discard",
      "prevent and block",
      "measure roughly"
    ],
    correctIndex: 0,
    babyExplanation: "🍼 Bahasa Bayi Kodi: Kata 'Harness' aslinya adalah tali pelana kuda buat mengendalikan tenaga kuda supaya bisa narik kereta. Di dunia sains/teknik, 'to harness energy' artinya 'menangkap energi dan memanfaatkannya untuk kerjaan kita' ('capture and utilize')!"
  },
  {
    id: "ibt-voc-5",
    type: "reading",
    skillCategory: "Vocabulary in Context",
    bookChapter: "Chapter 3: Vocabulary & Reference Skills",
    academicTopic: "Archaeology: Ceramic Preservation",
    passageSnippet: "Unlike organic wood artifacts that decay rapidly in humid soil, kiln-fired pottery demonstrates resilient structural durability, preserving intricate trade inscriptions over several millennia.",
    highlightWord: "resilient",
    questionPrompt: "The word 'resilient' in the passage is closest in meaning to:",
    targetSentenceForAudio: "Unlike organic wood artifacts that decay rapidly in humid soil, kiln-fired pottery demonstrates resilient structural durability.",
    options: [
      "delicate and brittle",
      "tough and damage-resistant",
      "unusually colorful",
      "chemically poisonous"
    ],
    correctIndex: 1,
    babyExplanation: "🍼 Bahasa Bayi Kodi: Kata 'Resilient' artinya 'tangguh / kuat tahan banting'! Tembikar yang dibakar di oven kiln ga gampang rapuh kena tanah basah dan tahan ribuan tahun. Jadi artinya 'tough and damage-resistant'!"
  },
  {
    id: "ibt-voc-6",
    type: "reading",
    skillCategory: "Vocabulary in Context",
    bookChapter: "Chapter 3: Vocabulary & Reference Skills",
    academicTopic: "Marine Ecology: Coral Bleaching",
    passageSnippet: "Biologists have proposed several plausible hypotheses regarding thermal stress in coral reefs, pointing to elevated sea surface temperatures as the primary driver of zooxanthellae expulsion.",
    highlightWord: "plausible",
    questionPrompt: "The word 'plausible' in the passage is closest in meaning to:",
    targetSentenceForAudio: "Biologists have proposed several plausible hypotheses regarding thermal stress in coral reefs.",
    options: [
      "believable and reasonable",
      "ridiculous and impossible",
      "dangerous to human health",
      "untested and abandoned"
    ],
    correctIndex: 0,
    babyExplanation: "🍼 Bahasa Bayi Kodi: Kata 'Plausible' artinya 'masuk akal / sangat masuk nalar berdasarkan bukti ilmiah'! Lawan katanya adalah 'implausible' (ga masuk akal). Jadi maknanya adalah 'believable and reasonable'!"
  },

  // -------------------------------------------------------------
  // SKILL 2: SENTENCE SIMPLIFICATION (Menjinakkan Monster Kalimat)
  // -------------------------------------------------------------
  {
    id: "ibt-simp-1",
    type: "reading",
    skillCategory: "Sentence Simplification",
    bookChapter: "Chapter 4: Sentence Simplification & Text Insertion",
    academicTopic: "Artificial Intelligence: Deep Learning Opacity",
    passageSnippet: "Although neural network architectures have demonstrated unprecedented accuracy in image classification, their intrinsic opacity—frequently described by software engineers as the black box dilemma—prevents technical auditors from pinpointing the exact algorithmic rationale behind anomalous predictive outputs.",
    highlightSentence: "Although neural network architectures have demonstrated unprecedented accuracy in image classification, their intrinsic opacity—frequently described by software engineers as the black box dilemma—prevents technical auditors from pinpointing the exact algorithmic rationale behind anomalous predictive outputs.",
    questionPrompt: "Which of the sentences below best expresses the essential information in the highlighted sentence? (Incorrect choices change the meaning in important ways or leave out essential information).",
    targetSentenceForAudio: "Although neural networks demonstrate high accuracy, their hidden internal processes prevent auditors from explaining strange errors.",
    options: [
      "Neural networks are highly accurate at classification, yet their hidden internal processes make it impossible for auditors to explain strange errors.",
      "Because image classification is prone to severe errors, software engineers refuse to deploy neural network architectures in enterprise systems.",
      "Technical auditors cannot understand anomalous errors because neural network architectures lack mathematical accuracy.",
      "The black box dilemma proves that artificial intelligence can never achieve high accuracy in image recognition."
    ],
    correctIndex: 0,
    babyExplanation: "🍼 Trik Menjinakkan Monster Kalimat Panjang: Bedah 3 tiang pondasi kalimat aslinya: (1) Mesin AI sangat akurat (unprecedented accuracy), TAPI (2) Isi dalamnya gelap ga kelihatan (opacity / black box), JADI (3) Auditor pusing ga bisa tahu alasan di balik error aneh (cannot pinpoint rationale behind errors). Pilihan A merangkum ketiga tiang ini dengan tepat tanpa membuang info penting atau mengarang cerita baru!"
  },
  {
    id: "ibt-simp-2",
    type: "reading",
    skillCategory: "Sentence Simplification",
    bookChapter: "Chapter 4: Sentence Simplification & Text Insertion",
    academicTopic: "Economic History: Industrial Automation",
    passageSnippet: "Even though the installation of mechanized steam looms initially prompted widespread labor unrest among artisan weavers who feared permanent displacement, it ultimately catalyzed unprecedented productivity gains that reduced textile costs for general consumers across the entire continent.",
    highlightSentence: "Even though the installation of mechanized steam looms initially prompted widespread labor unrest among artisan weavers who feared permanent displacement, it ultimately catalyzed unprecedented productivity gains that reduced textile costs for general consumers across the entire continent.",
    questionPrompt: "Which of the sentences below best expresses the essential information in the highlighted sentence?",
    targetSentenceForAudio: "Even though steam looms initially caused labor unrest, they ultimately increased productivity and lowered textile costs for consumers.",
    options: [
      "Artisan weavers destroyed steam looms because textile prices across the continent had risen beyond what consumers could afford.",
      "While steam looms initially triggered worker protests, they ultimately boosted productivity and made clothing much cheaper for the public.",
      "Mechanized steam looms failed to increase productivity because artisan weavers permanently abandoned factory operations.",
      "The high cost of steam equipment caused labor unrest that prevented factories from lowering consumer textile prices."
    ],
    correctIndex: 1,
    babyExplanation: "🍼 Trik Menjinakkan Monster Kalimat Panjang: Cek hubungan kontras: 'Even though X (awalnya bikin demo buruh karena takut dipecat), it ultimately Y (pada akhirnya bikin produksi meledak dan harga baju jadi murah untuk rakyat)'. Opsi B adalah ringkasan paling jujur dan setia dengan makna aslinya!"
  },
  {
    id: "ibt-simp-3",
    type: "reading",
    skillCategory: "Sentence Simplification",
    bookChapter: "Chapter 4: Sentence Simplification & Text Insertion",
    academicTopic: "Urban Planning: Urban Heat Islands",
    passageSnippet: "Because metropolitan centers replace vegetated soil with dark asphalt pavement and dense concrete structures that continuously absorb solar radiation during daylight hours, nighttime urban ambient temperatures remain significantly elevated compared to surrounding rural landscapes.",
    highlightSentence: "Because metropolitan centers replace vegetated soil with dark asphalt pavement and dense concrete structures that continuously absorb solar radiation during daylight hours, nighttime urban ambient temperatures remain significantly elevated compared to surrounding rural landscapes.",
    questionPrompt: "Which of the sentences below best expresses the essential information in the highlighted sentence?",
    targetSentenceForAudio: "Because cities replace vegetation with materials that absorb heat, nighttime temperatures in cities stay warmer than in rural areas.",
    options: [
      "Rural areas are hotter at night than cities because agricultural crops absorb solar radiation faster than dark asphalt pavement.",
      "Cities stay warmer at night than rural areas because their dark pavements and concrete buildings soak up heat throughout the day.",
      "Urban planners are removing all asphalt pavement in metropolitan centers to prevent solar radiation from reaching concrete buildings.",
      "Nighttime temperatures in cities drop below rural levels once daylight solar radiation dissipates from concrete structures."
    ],
    correctIndex: 1,
    babyExplanation: "🍼 Trik Menjinakkan Monster Kalimat Panjang: Cari SEBAB & AKIBAT. Sebab: Aspal & beton kota nyerap panas siang bolong. Akibat: Malam hari di kota tetep terasa gerah dibanding desa (rural). Opsi B menjelaskan hubungan sebab-akibat ini dengan bahasa yang bersih dan padat!"
  },

  // -------------------------------------------------------------
  // SKILL 3: FACTUAL INFORMATION & NEGATIVE FACT (Detektif Fakta)
  // -------------------------------------------------------------
  {
    id: "ibt-fact-1",
    type: "reading",
    skillCategory: "Fact & Negative Fact",
    bookChapter: "Chapter 1: Factual Information & Negative Fact Skills",
    academicTopic: "Geology: Hydrothermal Energy Reservoirs",
    passageSnippet: "Geothermal power plants extract pressurized steam and hot brine from subterranean reservoirs to rotate electricity turbines. Unlike fossil fuel facilities, these power stations generate negligible greenhouse emissions and occupy a very small surface footprint. However, plant construction is strictly constrained to tectonic boundary regions, and continuous water withdrawal without adequate reinjection can cause underground reservoir pressure collapse.",
    questionPrompt: "According to the passage, which of the following is NOT mentioned as a characteristic or benefit of geothermal power?",
    targetSentenceForAudio: "Geothermal power plants extract pressurized steam from subterranean reservoirs to rotate electricity turbines.",
    options: [
      "It emits minimal amounts of harmful greenhouse gases.",
      "It requires relatively little surface ground area.",
      "It can be constructed anywhere in the world without geographic limitations.",
      "It relies on steam and hot brine from underground reservoirs."
    ],
    correctIndex: 2,
    babyExplanation: "🍼 Trik Detektif Negative Fact (Cari yang PALSU / TIDAK DISEBUTKAN): Teks menyatakan dengan tegas: 'plant construction is strictly constrained to tectonic boundary regions' (pembangunannya terbatas hanya di jalur lempeng tektonik tertentu, ga bisa sembarangan tempat!). Jadi opsi C yang bilang 'bisa dibangun di mana saja di dunia tanpa batasan' adalah BOHONG dan itulah jawaban yang benar untuk tipe soal NOT!"
  },
  {
    id: "ibt-fact-2",
    type: "reading",
    skillCategory: "Fact & Negative Fact",
    bookChapter: "Chapter 1: Factual Information & Negative Fact Skills",
    academicTopic: "Zoology: Honeybee Communication (The Waggle Dance)",
    passageSnippet: "When a foraging honeybee locates a nutrient-rich flower patch, it returns to the hive and performs a synchronized waggle dance on the vertical honeycomb. The angle of the bee's straight run relative to gravity indicates the exact solar compass direction to the food, while the duration of the waggle vibration communicates the flight distance required.",
    questionPrompt: "According to the passage, how does the honeybee indicate the flight distance to the food source?",
    targetSentenceForAudio: "The duration of the waggle vibration communicates the flight distance required.",
    options: [
      "By the angle of its run relative to the sun",
      "By the duration of its waggle vibration",
      "By bringing back small samples of flower nectar",
      "By changing the color of the vertical honeycomb"
    ],
    correctIndex: 1,
    babyExplanation: "🍼 Trik Detektif Fakta Teks: Pindai kata kunci 'flight distance' di teks! Teks langsung berbunyi: 'the duration of the waggle vibration communicates the flight distance required' (durasi getaran goyangan mengomunikasikan jarak terbang). Jadi jawabannya adalah opsi B!"
  },

  // -------------------------------------------------------------
  // SKILL 4: INFERENCE QUESTIONS (Membaca Makna Tersirat Ilmiah)
  // -------------------------------------------------------------
  {
    id: "ibt-inf-1",
    type: "reading",
    skillCategory: "Inference",
    bookChapter: "Chapter 2: Inference & Rhetorical Purpose Skills",
    academicTopic: "Cognitive Psychology: Working Memory Limits",
    passageSnippet: "In controlled laboratory trials, subjects instructed to retain sequences of numeric digits while concurrently solving logic puzzles displayed steep decreases in memory accuracy. In contrast, when the secondary background task was limited to listening to ambient classical music, digit retention was preserved without significant degradation.",
    questionPrompt: "Which of the following can be inferred from the passage about human working memory?",
    targetSentenceForAudio: "Subjects instructed to retain sequences of digits while concurrently solving logic puzzles displayed steep decreases in memory accuracy.",
    options: [
      "Activities that compete for identical conscious cognitive resources impair performance more severely than passive sensory stimuli.",
      "Listening to classical music automatically doubles a student's logic puzzle-solving IQ.",
      "Human memory can store an infinite sequence of numbers if no background music is played.",
      "Logic puzzles are physically impossible to solve in quiet environments."
    ],
    correctIndex: 0,
    babyExplanation: "🍼 Trik Detektif Makna Tersirat (Inference): Perhatikan eksperimennya: Pas disuruh mikir logika sambil ngingat angka (dua-duanya butuh mikir sadar), otak langsung kelelahan dan drop. Tapi pas cuma denger musik pasif, memorinya aman. Kesimpulan tersirat yang logis: 'Dua tugas yang sama-sama rebutan jatah mikir otak bakal saling mengganggu, beda dengan suara musik pasif yang ga ngerebut kapasitas otak'!"
  },
  {
    id: "ibt-inf-2",
    type: "reading",
    skillCategory: "Inference",
    bookChapter: "Chapter 2: Inference & Rhetorical Purpose Skills",
    academicTopic: "Space Exploration: Subsurface Water Ice on Mars",
    passageSnippet: "While atmospheric pressure on modern Mars is insufficient to maintain liquid water on the planetary surface without rapid sublimation, radar sounders on orbiting spacecraft have detected extensive dielectric reflections beneath the southern polar ice sheet, consistent with buried sheets of ancient glacial ice.",
    questionPrompt: "What can be inferred from the passage regarding surface water on Mars?",
    targetSentenceForAudio: "While atmospheric pressure on modern Mars is insufficient to maintain liquid water on the surface, radar sounders detected subsurface reflections.",
    options: [
      "Mars' current atmosphere is too thin to allow liquid water to remain stable on its surface.",
      "Liquid lakes exist freely in open craters across all equatorial zones of Mars today.",
      "Orbiting spacecraft cannot operate scientific radar equipment in cold planetary climates.",
      "Subsurface ice sheets have evaporated completely into Mars' outer atmosphere."
    ],
    correctIndex: 0,
    babyExplanation: "🍼 Trik Detektif Makna Tersirat (Inference): Teks bilang: 'atmospheric pressure is insufficient to maintain liquid water without rapid sublimation' (tekanan udaranya ga cukup buat nahan air cair, jadi langsung menguap lenyap). Tersirat artinya: 'Atmosfer Mars sekarang terlalu tipis sehingga air cair ga bisa bertahan di permukaannya'! Opsi A tepat 100%!"
  },

  // -------------------------------------------------------------
  // SKILL 5: TEXT INSERTION (Jigsaw Puzzle Kalimat Akademik [■])
  // -------------------------------------------------------------
  {
    id: "ibt-ins-1",
    type: "reading",
    skillCategory: "Insert Text",
    bookChapter: "Chapter 4: Sentence Simplification & Text Insertion",
    academicTopic: "Solar Astrophysics: Coronal Mass Ejections",
    passageSnippet: "Solar flares are catastrophic eruptions of magnetic radiation occurring in the Sun's coronal atmosphere. [A] These explosions release energetic particles equivalent to billions of megatons of conventional explosives. [B] Magnetic reconnection events within twisted coronal loops are considered the fundamental cause. [C] When these cloud particles subsequently collide with the Earth's geomagnetic shield, they can trigger widespread power grid failures and satellite communication blackouts. [D]",
    insertedSentence: "Traveling outward across interplanetary space at millions of kilometers per hour, this radiation wave reaches Earth's orbital neighborhood in a matter of hours.",
    questionPrompt: "Look at the four squares [A], [B], [C], and [D] in the passage. Where would the inserted sentence best fit?",
    targetSentenceForAudio: "Traveling outward across interplanetary space, this radiation wave reaches Earth's orbital neighborhood in a matter of hours.",
    options: [
      "[A] Setelah kalimat pertama tentang pengertian solar flare",
      "[B] Setelah kalimat kedua tentang besarnya energi ledakan",
      "[C] Setelah kalimat ketiga tentang penyebab magnetic reconnection",
      "[D] Setelah kalimat keempat di akhir teks tentang badai geomagnetik"
    ],
    correctIndex: 2,
    babyExplanation: "🍼 Trik Jigsaw Puzzle Kalimat (Cari Sambungan Rel Kereta): Kalimat baru menyebutkan: 'Traveling outward across space... this radiation wave reaches Earth...' (Meluncur melintasi ruang angkasa, gelombang radiasi INI sampai di bumi). Kalimat berikutnya di teks adalah [C] -> 'When these cloud particles subsequently collide with the Earth's geomagnetic shield...' (Ketika partikel awan ini LALU bertabrakan dengan perisai bumi). Pas banget! Partikelnya meluncur dulu melewati luar angkasa (kotak C), baru kemudian menabrak perisai bumi!"
  },

  // -------------------------------------------------------------
  // SKILL 6: SPEAKING iBT SIMULATOR (15s Prep, 45s Speech + Mic Audio)
  // -------------------------------------------------------------
  {
    id: "ibt-spk-1",
    type: "speaking",
    skillCategory: "Speaking iBT Simulator",
    bookChapter: "TOEFL iBT Speaking Task 1 (Independent: University Policy & Career)",
    promptQuestion: "Some graduate university programs believe that all master's degree students should be required to complete an internship in a real industry or company, while others believe students should focus entirely on campus research and thesis coursework. Which approach do you support, and why? Use specific reasons and examples.",
    prepSeconds: 15,
    speechSeconds: 45,
    babyStrategy: "🍼 Formula Sakti 4 Langkah Jawaban Speaking iBT (Skor 26-30):\n1. Detik 0-5: Nyatakan posisi tegas ('In my view, I strongly believe that...').\n2. Detik 6-25: Beri alasan utama (menghubungkan teori buku dengan praktek troubleshooting nyata).\n3. Detik 26-40: Ceritakan contoh konkret pengalaman proyek/lab pribadimu.\n4. Detik 41-45: Tutup dengan kalimat kesimpulan ringkas ('Therefore, practical internships are vital.').",
    modelAnswer: "In my opinion, I strongly believe that master's students should be required to complete an industry internship. Firstly, practical experience allows students to apply academic theories to real-world software and engineering challenges. For example, during my project work, troubleshooting live database issues taught me far more about problem solving than textbooks alone. Additionally, working in an industry environment builds communication skills and teamwork. Therefore, internships provide indispensable preparation for future global careers.",
    modelTranslation: "Menurut pendapat saya, saya sangat meyakini bahwa mahasiswa program magister harus diwajibkan menyelesaikan magang industri. Pertama, pengalaman praktis memungkinkan mahasiswa menerapkan teori akademik ke tantangan perangkat lunak nyata...",
    audioSnippet: "In my opinion, I strongly believe that master's students should be required to complete an industry internship."
  },
  {
    id: "ibt-spk-2",
    type: "speaking",
    skillCategory: "Speaking iBT Simulator",
    bookChapter: "TOEFL iBT Speaking Task 2 (Campus Decision & Scholarship Motivation)",
    promptQuestion: "Do you agree or disagree with the proposal that artificial intelligence software should grade university student coding assignments instead of human professors? Explain your viewpoint with specific reasons.",
    prepSeconds: 15,
    speechSeconds: 45,
    babyStrategy: "🍼 Formula Sakti Menjawab Speaking iBT:\n1. Ambil posisi jelas: 'I disagree with the proposal because...'\n2. Alasan 1: AI hanya memeriksa sintaks kode, tetapi tidak memahami alur berpikir kreatif atau niat mahasiswa.\n3. Alasan 2: Umpan balik manusiawi dari dosen membangun motivasi dan etika profesional.\n4. Kesimpulan: 'Human mentoring cannot be replaced by automated scripts.'",
    modelAnswer: "I disagree with the idea of having artificial intelligence grade student coding assignments entirely. Although automated systems can quickly detect syntax errors, they lack the ability to evaluate a student's creative problem-solving logic and effort. Furthermore, human professors provide personalized feedback and encouragement, which inspires students to learn from their mistakes. In my own educational journey, constructive guidance from mentors was essential for my growth. Thus, human evaluation remains crucial in academic instruction.",
    modelTranslation: "Saya tidak setuju dengan ide bahwa kecerdasan buatan harus menilai seluruh tugas koding mahasiswa. Meskipun sistem otomatis dapat dengan cepat mendeteksi error sintaks, sistem tersebut tidak memiliki kemampuan menilai logika kreatif...",
    audioSnippet: "I disagree with the idea of having artificial intelligence grade student coding assignments entirely."
  },
  {
    id: "ibt-spk-3",
    type: "speaking",
    skillCategory: "Speaking iBT Simulator",
    bookChapter: "TOEFL iBT Speaking Task 3 (Academic Reflection & Problem Solving)",
    promptQuestion: "Describe a difficult technological challenge or complex project problem you encountered, and explain what steps you took to successfully overcome it.",
    prepSeconds: 15,
    speechSeconds: 45,
    babyStrategy: "🍼 Cerita STAR (Situation, Task, Action, Result) Bahasa Bayi:\n1. Masalah: Sistem jaringan atau website mengalami error tidak terduga.\n2. Tindakan: Lakukan analisis log data langkah demi langkah, jangan panik, dan koordinasi dengan tim.\n3. Hasil: Masalah terselesaikan dan performa sistem meningkat 100%!",
    modelAnswer: "A memorable technical challenge I faced was diagnosing an unexpected database slowdown during peak hours. To resolve it, I first examined the query logs systematically to locate bottlenecks. Then, I applied indexing to large tables and optimized repetitive data queries. As a result, query latency decreased significantly and the web portal returned to normal operation. This experience taught me that systematic analytical thinking and staying calm under pressure are key to solving complex technical issues.",
    modelTranslation: "Tantangan teknis berkesan yang saya hadapi adalah mendiagnosis perlambatan database yang tidak terduga pada jam sibuk. Untuk menyelesaikannya, pertama saya memeriksa log kueri secara sistematis...",
    audioSnippet: "A memorable technical challenge I faced was diagnosing an unexpected database slowdown during peak hours."
  }
];

// ===================================================================
// 5. TANTANGAN DIKTE SUARA & MENGETIK BERJENJANG (EVC LIBRETEXTS EDITION)
// Sesuai Buku: "Listening & Speaking for Beginning English Language Learners"
// (Maria Antonini de Pino et al. - Evergreen Valley College)
// Tingkat 1: Eja Huruf demi Huruf (100% Akurasi Ejaan Nama & Kata)
// Tingkat 2: Dikte Kosakata per Kata (Vocabulary Mastery Bab 1-8)
// Tingkat 3: Dikte Kalimat Percakapan Utuh (Natural Sentences & Dialogues)
// ===================================================================
const evcDictationChallenges = [
  // ==========================================
  // LEVEL 1: EJA HURUF (SPELLING & ALPHABET)
  // Khas EVC Chapter 1 & 2 (Spelling Names & Objects)
  // ==========================================
  {
    id: "dic-l1-1",
    level: 1,
    levelName: "Level 1: Eja Huruf",
    targetText: "CARMONA",
    audioText: "C, A, R, M, O, N, A",
    chapterRef: "Chapter 1: Greetings & Spelling Names",
    meaning: "Nama belakang Luis Carmona di dialog kelas EVC: C-A-R-M-O-N-A",
    babyClue: "🍼 Kodi mengeja nama keluarga 'CARMONA'. Dengarkan ketukan hurufnya dan ketik satu demi satu!"
  },
  {
    id: "dic-l1-2",
    level: 1,
    levelName: "Level 1: Eja Huruf",
    targetText: "PEREZ",
    audioText: "P, E, R, E, Z",
    chapterRef: "Chapter 1: Assistant's Name",
    meaning: "Nama asisten kelas di dialog EVC: P-E-R-E-Z",
    babyClue: "🍼 Eja 5 huruf pendek: P - E - R - E - Z. Ketik hurufnya sampai 100% tepat!"
  },
  {
    id: "dic-l1-3",
    level: 1,
    levelName: "Level 1: Eja Huruf",
    targetText: "PROJECTOR",
    audioText: "P, R, O, J, E, C, T, O, R",
    chapterRef: "Chapter 1: Classroom Equipment",
    meaning: "Proyektor sorot layar di ruang kelas: P-R-O-J-E-C-T-O-R",
    babyClue: "🍼 Alat proyektor di langit-langit kelas. Ada 9 huruf: P-R-O-J-E-C-T-O-R!"
  },
  {
    id: "dic-l1-4",
    level: 1,
    levelName: "Level 1: Eja Huruf",
    targetText: "STAPLER",
    audioText: "S, T, A, P, L, E, R",
    chapterRef: "Chapter 1: Classroom Supplies",
    meaning: "Alat penjepit kertas hekter: S-T-A-P-L-E-R",
    babyClue: "🍼 Penjepit kertas di meja guru. 7 huruf: S - T - A - P - L - E - R!"
  },
  {
    id: "dic-l1-5",
    level: 1,
    levelName: "Level 1: Eja Huruf",
    targetText: "CALCULATOR",
    audioText: "C, A, L, C, U, L, A, T, O, R",
    chapterRef: "Chapter 1: Classroom Objects",
    meaning: "Kalkulator hitung di laci guru: C-A-L-C-U-L-A-T-O-R",
    babyClue: "🍼 Alat hitung angka di laci meja guru. Dengarkan ketukan hurufnya!"
  },
  {
    id: "dic-l1-6",
    level: 1,
    levelName: "Level 1: Eja Huruf",
    targetText: "WHITEBOARD",
    audioText: "W, H, I, T, E, B, O, A, R, D",
    chapterRef: "Chapter 1: Classroom Objects",
    meaning: "Papan tulis putih spidol: W-H-I-T-E-B-O-A-R-D",
    babyClue: "🍼 Papan tulis putih di depan kelas: White + Board!"
  },
  {
    id: "dic-l1-7",
    level: 1,
    levelName: "Level 1: Eja Huruf",
    targetText: "VIETNAM",
    audioText: "V, I, E, T, N, A, M",
    chapterRef: "Chapter 2: Places & Nationalities",
    meaning: "Negara asal siswa Binh dan Duc di dialog EVC: V-I-E-T-N-A-M",
    babyClue: "🍼 Nama negara tetangga di Asia Tenggara tempat asal Binh!"
  },
  {
    id: "dic-l1-8",
    level: 1,
    levelName: "Level 1: Eja Huruf",
    targetText: "BRAZIL",
    audioText: "B, R, A, Z, I, L",
    chapterRef: "Chapter 2: Places & Nationalities",
    meaning: "Negara Brasil asal Cristiano dan Joao: B-R-A-Z-I-L",
    babyClue: "🍼 Negara sepak bola terkenal asal Cristiano dan Joao di dialog EVC!"
  },
  {
    id: "dic-l1-9",
    level: 1,
    levelName: "Level 1: Eja Huruf",
    targetText: "WEBSITE",
    audioText: "W, E, B, S, I, T, E",
    chapterRef: "Chapter 4: Workplaces & Tech",
    meaning: "Halaman web digital: W-E-B-S-I-T-E",
    babyClue: "🍼 Portal online yang dirancang oleh profesi web designer!"
  },
  {
    id: "dic-l1-10",
    level: 1,
    levelName: "Level 1: Eja Huruf",
    targetText: "SCHEDULE",
    audioText: "S, C, H, E, D, U, L, E",
    chapterRef: "Chapter 3: Routines & Calendar",
    meaning: "Jadwal kegiatan mingguan: S-C-H-E-D-U-L-E",
    babyClue: "🍼 Agenda waktu belajar dan kerja. Awas ada huruf 'ch'-nya ya!"
  },

  // ==========================================
  // LEVEL 2: DIKTE KATA (WORD DICTATION)
  // Khas EVC Chapter 1 - 8 (Vocabulary Mastery)
  // ==========================================
  {
    id: "dic-l2-1",
    level: 2,
    levelName: "Level 2: Dikte Kata",
    targetText: "hospital",
    audioText: "hospital",
    chapterRef: "Chapter 4: Workplaces",
    meaning: "Rumah sakit tempat kerja dokter dan perawat",
    babyClue: "🍼 Tempat kerja Roberto di buku EVC. 8 huruf: h - o - s - p - i - t - a - l."
  },
  {
    id: "dic-l2-2",
    level: 2,
    levelName: "Level 2: Dikte Kata",
    targetText: "weather",
    audioText: "weather",
    chapterRef: "Chapter 2: Weather & Seasons",
    meaning: "Cuaca (panas, hujan, berangin)",
    babyClue: "🍼 Ingat ejaannya ada huruf 'ea': w - e - a - t - h - e - r."
  },
  {
    id: "dic-l2-3",
    level: 2,
    levelName: "Level 2: Dikte Kata",
    targetText: "breakfast",
    audioText: "breakfast",
    chapterRef: "Chapter 3: Daily Routines",
    meaning: "Sarapan pagi sebelum berangkat kerja/sekolah",
    babyClue: "🍼 Makanan pertama di pagi hari Lisa dan anak-anaknya: b - r - e - a - k - f - a - s - t."
  },
  {
    id: "dic-l2-4",
    level: 2,
    levelName: "Level 2: Dikte Kata",
    targetText: "gardening",
    audioText: "gardening",
    chapterRef: "Chapter 6: Personal Hobbies",
    meaning: "Berkebun / menanam bunga dan sayuran",
    babyClue: "🍼 Hobi menanam tanaman di pekarangan rumah: g - a - r - d - e - n - i - n - g."
  },
  {
    id: "dic-l2-5",
    level: 2,
    levelName: "Level 2: Dikte Kata",
    targetText: "electrician",
    audioText: "electrician",
    chapterRef: "Chapter 4: Workplaces & Jobs",
    meaning: "Teknisi ahli kelistrikan",
    babyClue: "🍼 Profesi Kevin di buku EVC yang jago instalasi kabel listrik!"
  },
  {
    id: "dic-l2-6",
    level: 2,
    levelName: "Level 2: Dikte Kata",
    targetText: "sanitizer",
    audioText: "sanitizer",
    chapterRef: "Chapter 5: Food & Health",
    meaning: "Cairan pembersih kuman tangan (Hand sanitizer)",
    babyClue: "🍼 Pembersih tangan dari kuman sebelum makan: s - a - n - i - t - i - z - e - r."
  },
  {
    id: "dic-l2-7",
    level: 2,
    levelName: "Level 2: Dikte Kata",
    targetText: "vacation",
    audioText: "vacation",
    chapterRef: "Chapter 7: Past Activities & Travel",
    meaning: "Liburan / tamasya santai",
    babyClue: "🍼 Waktu istirahat santai jalan-jalan bersama keluarga: v - a - c - a - t - i - o - n."
  },
  {
    id: "dic-l2-8",
    level: 2,
    levelName: "Level 2: Dikte Kata",
    targetText: "ceremony",
    audioText: "ceremony",
    chapterRef: "Chapter 8: Invitations & Events",
    meaning: "Upacara sakral pernikahan atau wisuda",
    babyClue: "🍼 Upacara resmi pernikahan jam 2 siang: c - e - r - e - m - o - n - y."
  },
  {
    id: "dic-l2-9",
    level: 2,
    levelName: "Level 2: Dikte Kata",
    targetText: "broccoli",
    audioText: "broccoli",
    chapterRef: "Chapter 5: Healthy Eating",
    meaning: "Sayuran brokoli hijau sehat bergizi",
    babyClue: "🍼 Sayuran hijau sehat kaya vitamin: b - r - o - c - c - o - l - i (ada huruf c ganda)!"
  },
  {
    id: "dic-l2-10",
    level: 2,
    levelName: "Level 2: Dikte Kata",
    targetText: "comfortable",
    audioText: "comfortable",
    chapterRef: "Chapter 4: Home & Furniture",
    meaning: "Nyaman / enak diduduki",
    babyClue: "🍼 Kursi atau sofa yang empuk dan bikin betah duduk: c - o - m - f - o - r - t - a - b - l - e."
  },
  {
    id: "dic-l2-11",
    level: 2,
    levelName: "Level 2: Dikte Kata",
    targetText: "sightseeing",
    audioText: "sightseeing",
    chapterRef: "Chapter 7: Shopping & Travel",
    meaning: "Jalan-jalan melihat pemandangan kota/wisata",
    babyClue: "🍼 Keliling kota naik bus wisata melihat tempat bersejarah: s - i - g - h - t - s - e - e - i - n - g."
  },
  {
    id: "dic-l2-12",
    level: 2,
    levelName: "Level 2: Dikte Kata",
    targetText: "frequency",
    audioText: "frequency",
    chapterRef: "Chapter 5: Adverbs of Frequency",
    meaning: "Tingkat keseringan rutinitas (always, sometimes)",
    babyClue: "🍼 Istilah seberapa sering kita melakukan kegiatan: f - r - e - q - u - e - n - c - y."
  },

  // ==========================================
  // LEVEL 3: DIKTE KALIMAT UTUH (SENTENCE DICTATION)
  // Khas EVC Chapter 1 - 8 (Natural Dialogues)
  // ==========================================
  {
    id: "dic-l3-1",
    level: 3,
    levelName: "Level 3: Dikte Kalimat",
    targetText: "Where are you from?",
    audioText: "Where are you from?",
    chapterRef: "Chapter 1: Greetings & Introductions",
    meaning: "Dari mana asalmu?",
    babyClue: "🍼 Pertanyaan paling dasar dan sopan saat berkenalan dengan teman baru di kelas!"
  },
  {
    id: "dic-l3-2",
    level: 3,
    levelName: "Level 3: Dikte Kalimat",
    targetText: "She is a web designer.",
    audioText: "She is a web designer.",
    chapterRef: "Chapter 4: Workplaces & Jobs",
    meaning: "Dia adalah seorang desainer web.",
    babyClue: "🍼 Menjelaskan profesi Mila yang merancang tampilan website kreatif di kantor teknologi!"
  },
  {
    id: "dic-l3-3",
    level: 3,
    levelName: "Level 3: Dikte Kalimat",
    targetText: "The weather is warm and sunny.",
    audioText: "The weather is warm and sunny.",
    chapterRef: "Chapter 2: Weather & Places",
    meaning: "Cuacanya hangat dan cerah.",
    babyClue: "🍼 Menggambarkan suasana cuaca cerah di California saat matahari bersinar hangat!"
  },
  {
    id: "dic-l3-4",
    level: 3,
    levelName: "Level 3: Dikte Kalimat",
    targetText: "There is a clock on the wall.",
    audioText: "There is a clock on the wall.",
    chapterRef: "Chapter 1 & 4: There is / There are",
    meaning: "Ada sebuah jam dinding di tembok.",
    babyClue: "🍼 Rumus keberadaan benda tunggal: 'There is' + sebuah jam + di atas dinding."
  },
  {
    id: "dic-l3-5",
    level: 3,
    levelName: "Level 3: Dikte Kalimat",
    targetText: "I walk to school every day.",
    audioText: "I walk to school every day.",
    chapterRef: "Chapter 2: Simple Present Routines",
    meaning: "Saya berjalan kaki ke sekolah setiap hari.",
    babyClue: "🍼 Rutinitas pagi hari yang dilakukan setiap hari secara rajin (every day)."
  },
  {
    id: "dic-l3-6",
    level: 3,
    levelName: "Level 3: Dikte Kalimat",
    targetText: "Vegetables are always healthy.",
    audioText: "Vegetables are always healthy.",
    chapterRef: "Chapter 5: Food & Adverbs of Frequency",
    meaning: "Sayur-mayur selalu sehat untuk tubuh.",
    babyClue: "🍼 Fakta kesehatan: kata 'always' diletakkan tepat setelah to be 'are'!"
  },
  {
    id: "dic-l3-7",
    level: 3,
    levelName: "Level 3: Dikte Kalimat",
    targetText: "He can swim in the ocean.",
    audioText: "He can swim in the ocean.",
    chapterRef: "Chapter 6: Modal Verb Can for Ability",
    meaning: "Dia bisa berenang di lautan.",
    babyClue: "🍼 Menunjukkan kemampuan fisik (ability): kata kerja setelah modal 'can' wajib polos (swim)!"
  },
  {
    id: "dic-l3-8",
    level: 3,
    levelName: "Level 3: Dikte Kalimat",
    targetText: "I enjoyed my vacation last week.",
    audioText: "I enjoyed my vacation last week.",
    chapterRef: "Chapter 7: Simple Past Tense",
    meaning: "Saya sangat menikmati liburan saya minggu lalu.",
    babyClue: "🍼 Kalimat masa lampau: kata 'enjoy' diberi akhiran '-ed' karena ada keterangan 'last week'!"
  },
  {
    id: "dic-l3-9",
    level: 3,
    levelName: "Level 3: Dikte Kalimat",
    targetText: "We are going to visit the museum.",
    audioText: "We are going to visit the museum.",
    chapterRef: "Chapter 8: Future Plans with Be Going To",
    meaning: "Kami akan mengunjungi museum itu.",
    babyClue: "🍼 Rencana masa depan: rumus 'are going to' + kata kerja dasar 'visit'!"
  },
  {
    id: "dic-l3-10",
    level: 3,
    levelName: "Level 3: Dikte Kalimat",
    targetText: "Would you like to have some coffee?",
    audioText: "Would you like to have some coffee?",
    chapterRef: "Chapter 8: Invitations & Etiquette",
    meaning: "Maukah kamu minum kopi bersama?",
    babyClue: "🍼 Kalimat ajakan sopan elegan dalam bahasa Inggris: 'Would you like to...'!"
  }
];

