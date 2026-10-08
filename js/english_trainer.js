/* ===================================================================
   ENGLISH_TRAINER.JS - STUDIO BAHASA INGGRIS INTERAKTIF KODI
   1. Wawancara Kerja Speaking Profesional (Format Tanya-Jawab Berbobot)
   2. Game Huruf Hilang (Missing Letters Vocab & Grammar Puzzle)
   3. Bank Soal Latihan TOEFL ITP & IELTS Marathon + Kisi-Kisi Lengkap
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
  }
];

// ===================================================================
// 3. BANK SOAL MARATHON TOEFL ITP & IELTS (LENGKAP DENGAN KISI-KISI)
// ===================================================================
const comprehensiveToeflBank = [
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
  }
];
