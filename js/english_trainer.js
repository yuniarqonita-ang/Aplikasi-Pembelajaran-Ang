/* ===================================================================
   ENGLISH_TRAINER.JS - STUDIO BAHASA INGGRIS INTERAKTIF KODI
   1. Wawancara Kerja Speaking Profesional (Format Tanya-Jawab Berbobot)
   2. Game Huruf Hilang & Kosakata (35 Kosakata Esensial IT & Beasiswa)
   3. Modul Mandiri: IELTS Academic Studio (Cambridge Grammar for IELTS Edition)
   4. Modul Spesial: TOEFL iBT Beasiswa S2 (Building Skills Book Edition)
   5. Tantangan Dikte Suara & Mengetik Berjenjang (EVC LibreTexts Edition)
   =================================================================== */

// ===================================================================
// 1. LATIHAN SPEAKING WAWANCARA KERJA PROFESIONAL (BERBOBOT & ELEGAN)
// ===================================================================
const cvInterviewSpeakingDrills = [
  {
    "id": "spk-cv-1",
    "category": "1. Self Introduction & Background",
    "questionEn": "Can you tell me about yourself and your educational background?",
    "workedExample": {
      "modelStructure": "1. Salam & Gelar Kelulusan -> 2. Nilai Prestasi (IPK) -> 3. Nilai Tambah Kemampuan Analitis",
      "sampleSentence": "I graduated with a Bachelor's degree in Mathematics and Education with a GPA of 3.64, which gives me strong logical problem-solving skills.",
      "keyPhraseTip": "Gunakan frasa pembuka elegan: 'I graduated with a Bachelor's degree in...' untuk membangun rasa percaya diri pewawancara."
    },
    "targetSentence": "I graduated with a Bachelor's degree in Mathematics and Education with a high GPA of 3.64, and I have strong analytical skills.",
    "translationId": "Saya lulusan sarjana Pendidikan Matematika dengan IPK tinggi 3.64, dan saya memiliki kemampuan analitis yang kuat.",
    "babyTips": "Kodi Tips: Tunjukkan bahwa latar belakang matematika membuat cara berpikirmu terstruktur dan logis saat koding dan memecahkan masalah IT."
  },
  {
    "id": "spk-cv-2",
    "category": "2. Pengalaman Kerja & Sistem TI",
    "questionEn": "What IT and technical support experience do you have?",
    "workedExample": {
      "modelStructure": "1. Posisi / Peran Terkini -> 2. Dua Tanggung Jawab Utama (Web & Hardware) -> 3. Hasil Pemecahan Masalah",
      "sampleSentence": "I have hands-on experience maintaining network infrastructure and diagnosing operating system anomalies in fast-paced environments.",
      "keyPhraseTip": "Kata kunci berbobot: 'hands-on experience', 'developing web portals', dan 'troubleshooting'."
    },
    "targetSentence": "I worked as an IT Systems Specialist, developing web portals and troubleshooting operating system and hardware issues.",
    "translationId": "Saya bekerja sebagai staf spesialis sistem TI, mengembangkan portal web dan menyelesaikan masalah sistem operasi serta perangkat keras.",
    "babyTips": "Kodi Tips: Sebutkan kata 'developing' (membangun sistem) dan 'troubleshooting' (memperbaiki error) dengan pelafalan yang mantap."
  },
  {
    "id": "spk-cv-3",
    "category": "3. Keunggulan Lulusan Pendidikan di Dunia IT",
    "questionEn": "Why should we hire you for this IT role even though your degree is in education?",
    "workedExample": {
      "modelStructure": "1. Ubah Persepsi Jadi Kekuatan -> 2. Keterampilan Komunikasi & Sabar -> 3. Logika Pemecahan Masalah Eksak",
      "sampleSentence": "My teaching background enables me to explain complex technical concepts clearly, while my analytical training ensures rigorous problem solving.",
      "keyPhraseTip": "Tunjukkan kombinasi langka: Orang IT pada umumnya pendiam, sedangkan kamu punya komunikasi juara + logika matematika!"
    },
    "targetSentence": "My education background makes me a great communicator and fast learner, while my math degree gives me strong problem-solving logic.",
    "translationId": "Latar belakang pendidikan membuat saya terampil berkomunikasi dan cepat belajar, sementara gelar matematika memberi saya logika pemecahan masalah yang kuat.",
    "babyTips": "Kodi Tips: Ini jawaban sakti! Orang IT sering kaku komunikasi, tapi kamu punya keahlian komunikasi + logika matematika + pengalaman kelola sistem web!"
  },
  {
    "id": "spk-cv-4",
    "category": "4. Database & SQL Query Skills",
    "questionEn": "How do you handle data and database queries in your work?",
    "workedExample": {
      "modelStructure": "1. Keahlian Kueri Relasional -> 2. Kemampuan Menangani Dataset Besar -> 3. Integritas dan Akurasi Data",
      "sampleSentence": "I regularly write complex SQL queries using JOIN and WHERE clauses to optimize database retrieval and prevent data bottlenecks.",
      "keyPhraseTip": "Sebutkan istilah teknis database: 'filter and manage tables', 'SQL queries', dan 'large datasets'."
    },
    "targetSentence": "I write SQL queries to filter and manage tables, and I have solid experience processing large datasets and survey records.",
    "translationId": "Saya menulis kueri SQL untuk memfilter dan mengelola tabel, dan saya berpengalaman mengolah dataset besar dan data survei.",
    "babyTips": "Kodi Tips: Tekankan bahwa kamu terbiasa menangani data tabel yang banyak secara rapi dan teliti."
  },
  {
    "id": "spk-cv-5",
    "category": "5. Kemampuan Desain & UI/UX (Sertifikat BNSP)",
    "questionEn": "Do you have any design or user interface skills?",
    "workedExample": {
      "modelStructure": "1. Kualifikasi Resmi Nasional (BNSP) -> 2. Penerapan dalam Desain Web -> 3. Fokus pada Kenyamanan Pengguna (UX)",
      "sampleSentence": "Holding a national BNSP certification in graphic design allows me to craft intuitive layouts and clean dashboard interfaces.",
      "keyPhraseTip": "Sertifikasi resmi BNSP adalah bukti pengakuan kompetensi standar nasional yang sangat dihargai HRD!"
    },
    "targetSentence": "I hold a certified Graphic Designer credential from BNSP, which helps me design clean and user-friendly web interfaces.",
    "translationId": "Saya memiliki sertifikat kompetensi Desainer Grafis resmi dari BNSP, yang membantu saya merancang antarmuka web yang rapi dan mudah digunakan.",
    "babyTips": "Kodi Tips: Sertifikat resmi BNSP Desain Grafis adalah nilai tambah besar untuk posisi IT Software & Frontend antarmuka pengguna!"
  },
  {
    "id": "spk-cv-6",
    "category": "6. Kesiapan & Komitmen Kerja",
    "questionEn": "How do you prepare yourself to work in a fast-paced manufacturing or technology facility?",
    "workedExample": {
      "modelStructure": "1. Sikap Adaptif & Gesit -> 2. Kolaborasi Lintas Tim -> 3. Dedikasi Menjaga Kelancaran Sistem",
      "sampleSentence": "I maintain high flexibility and clear communication, ensuring fast resolution times whenever critical manufacturing systems need support.",
      "keyPhraseTip": "Gunakan kata sifat profesional: 'highly adaptable', 'detail-oriented', dan 'ready to collaborate'."
    },
    "targetSentence": "I am highly adaptable, detail-oriented, and ready to collaborate closely with team members to support factory systems.",
    "translationId": "Saya sangat mudah beradaptasi, berorientasi pada detail, dan siap berkolaborasi erat dengan tim untuk mendukung sistem perusahaan.",
    "babyTips": "Kodi Tips: Jawaban ini menunjukkan dedikasi, kedisiplinan, dan kesiapan bekerja di lingkungan profesional yang dinamis."
  }
];

// ===================================================================
// 2. GAME HURUF HILANG (MISSING LETTERS VOCABULARY & GRAMMAR PUZZLE)
// ===================================================================
const missingLetterPuzzles = [
  {
    "id": "ml-1",
    "word": "DATABASE",
    "masked": "D _ T _ B _ S _",
    "missingLetters": [
      "A",
      "A",
      "A",
      "E"
    ],
    "category": "IT & Data",
    "babyClue": "🍼 Lemari arsip raksasa tempat nyimpan jutaan baris data rapi (Tabel Karyawan & Sepatu)!",
    "meaning": "Basis data / kumpulan tabel penyimpanan informasi komputer."
  },
  {
    "id": "ml-2",
    "word": "REQUIRES",
    "masked": "R _ Q _ I _ E S",
    "missingLetters": [
      "E",
      "U",
      "R"
    ],
    "category": "Grammar: Subject-Verb",
    "babyClue": "🍼 Kata kerja bahasa Inggris yang artinya 'membutuhkan'. Wajib ada akhiran huruf 'S' kalau subjeknya tunggal!",
    "meaning": "Memerlukan / membutuhkan (Verb 1 tunggal)."
  },
  {
    "id": "ml-3",
    "word": "SOFTWARE",
    "masked": "S _ F T _ A _ E",
    "missingLetters": [
      "O",
      "W",
      "R"
    ],
    "category": "IT Core",
    "babyClue": "🍼 Perangkat lunak yang ga bisa disentuh jari tapi jadi otak pengendali semua aplikasi!",
    "meaning": "Perangkat lunak program komputer."
  },
  {
    "id": "ml-4",
    "word": "ANALYSIS",
    "masked": "A N _ L _ S _ S",
    "missingLetters": [
      "A",
      "Y",
      "I"
    ],
    "category": "Skill Matematika & IT",
    "babyClue": "🍼 Bedah masalah dan periksa data angka sampai tuntas untuk cari jalan keluar!",
    "meaning": "Analisis / penyelidikan mendalam terhadap data."
  },
  {
    "id": "ml-5",
    "word": "SOLUTION",
    "masked": "S _ L _ T _ O N",
    "missingLetters": [
      "O",
      "U",
      "I"
    ],
    "category": "Problem Solving",
    "babyClue": "🍼 Obat penyembuh atau kunci jawaban pas komputer lagi kena masalah error!",
    "meaning": "Solusi / jalan keluar dari suatu masalah."
  },
  {
    "id": "ml-6",
    "word": "PASSIVE",
    "masked": "P _ S S _ V E",
    "missingLetters": [
      "A",
      "I"
    ],
    "category": "Grammar TOEFL",
    "babyClue": "🍼 Bentuk kalimat 'di-kerjakan' (To be + Verb 3), contoh: 'Komputer di-perbaiki oleh staf TI'!",
    "meaning": "Kalimat pasif (lawan dari kalimat aktif)."
  },
  {
    "id": "ml-7",
    "word": "CONNECT",
    "masked": "C _ N N _ C T",
    "missingLetters": [
      "O",
      "E"
    ],
    "category": "Jaringan",
    "babyClue": "🍼 Colok kabel LAN atau nyalain WiFi biar dua komputer bisa saling ngobrol!",
    "meaning": "Menghubungkan / tersambung."
  },
  {
    "id": "ml-8",
    "word": "DEVELOP",
    "masked": "D _ V _ L _ P",
    "missingLetters": [
      "E",
      "E",
      "O"
    ],
    "category": "Pemrograman",
    "babyClue": "🍼 Membangun dan merancang aplikasi dari kertas kosong sampai bisa dipakai orang banyak!",
    "meaning": "Mengembangkan / membuat sistem perangkat lunak."
  },
  {
    "id": "ml-9",
    "word": "VERIFY",
    "masked": "V _ R _ F Y",
    "missingLetters": [
      "E",
      "I"
    ],
    "category": "QC & Security",
    "babyClue": "🍼 Cek dan periksa ulang data sekali lagi biar ga ada kesalahan atau typo!",
    "meaning": "Memverifikasi / memeriksa kebenaran data."
  },
  {
    "id": "ml-10",
    "word": "NETWORK",
    "masked": "N _ T W _ R K",
    "missingLetters": [
      "E",
      "O"
    ],
    "category": "Infrastruktur IT",
    "babyClue": "🍼 Jaringan kabel dan pemancar sinyal tempat data internet berseliweran!",
    "meaning": "Jaringan komputer."
  },
  {
    "id": "ml-11",
    "word": "HARDWARE",
    "masked": "H _ R D W _ R _",
    "missingLetters": [
      "A",
      "A",
      "E"
    ],
    "category": "Perangkat Keras",
    "babyClue": "🍼 Benda fisik komputer yang bisa kamu pegang, colok, atau ketik langsung dengan tangan!",
    "meaning": "Perangkat keras komputer (monitor, keyboard, kabel)."
  },
  {
    "id": "ml-12",
    "word": "CRITICAL",
    "masked": "C R _ T _ C _ L",
    "missingLetters": [
      "I",
      "I",
      "A"
    ],
    "category": "Troubleshooting",
    "babyClue": "🍼 Tingkat bahaya gawat darurat yang harus segera diperbaiki sebelum pabrik mogok!",
    "meaning": "Kritis / sangat genting dan penting."
  },
  {
    "id": "ml-13",
    "word": "SECURITY",
    "masked": "S _ C _ R _ T Y",
    "missingLetters": [
      "E",
      "U",
      "I"
    ],
    "category": "Cyber Security",
    "babyClue": "🍼 Pagar pelindung dan gembok digital biar data perusahaan ga dicolong peretas hacker!",
    "meaning": "Keamanan sistem komputer dan data."
  },
  {
    "id": "ml-14",
    "word": "OPTIMIZE",
    "masked": "O P T _ M _ Z _",
    "missingLetters": [
      "I",
      "I",
      "E"
    ],
    "category": "Performa Sistem",
    "babyClue": "🍼 Menyetel mesin dan kueri biar loading website yang lambat jadi ngebut wusss!",
    "meaning": "Mengoptimalkan / meningkatkan kecepatan dan efisiensi kerja."
  },
  {
    "id": "ml-15",
    "word": "ACADEMIC",
    "masked": "A C _ D _ M _ C",
    "missingLetters": [
      "A",
      "E",
      "I"
    ],
    "category": "TOEFL & IELTS Vocab",
    "babyClue": "🍼 Segala hal yang berkaitan dengan dunia kampus kuliah, riset jurnal, dan universitas!",
    "meaning": "Akademik / bersifat ilmiah perguruan tinggi."
  },
  {
    "id": "ml-16",
    "word": "EFFORT",
    "masked": "E F F _ R T",
    "missingLetters": [
      "O"
    ],
    "category": "Speaking iBT",
    "babyClue": "🍼 Kerja keras keringat dan perjuangan pantang menyerah demi capai beasiswa!",
    "meaning": "Usaha / upaya / kerja keras."
  },
  {
    "id": "ml-17",
    "word": "INTERVIEW",
    "masked": "I N T _ R V _ _ W",
    "missingLetters": [
      "E",
      "I",
      "E"
    ],
    "category": "Karir & Kerja",
    "babyClue": "🍼 Sesi tanya-jawab tatap muka langsung di depan bos HRD untuk membuktikan kehebatanmu!",
    "meaning": "Wawancara kerja atau beasiswa."
  },
  {
    "id": "ml-18",
    "word": "ACCURATE",
    "masked": "A C C _ R _ T _",
    "missingLetters": [
      "U",
      "A",
      "E"
    ],
    "category": "Data & Matematika",
    "babyClue": "🍼 Tepat sasaran 100% tanpa meleset sedikitpun pas hitung angka atau nulis kueri SQL!",
    "meaning": "Akurat / teliti / tepat tanpa salah."
  },
  {
    "id": "ml-19",
    "word": "GRADUATE",
    "masked": "G R _ D _ _ T E",
    "missingLetters": [
      "A",
      "U",
      "A"
    ],
    "category": "Pendidikan",
    "babyClue": "🍼 Momen bahagia pakai toga kelulusan sarjana setelah lulus ujian skripsi dengan gemilang!",
    "meaning": "Lulusan sarjana / wisudawan."
  },
  {
    "id": "ml-20",
    "word": "QUALIFIED",
    "masked": "Q _ _ L I F _ _ D",
    "missingLetters": [
      "U",
      "A",
      "I",
      "E"
    ],
    "category": "Standar HRD",
    "babyClue": "🍼 Punya keahlian terbukti, sertifikat resmi BNSP, dan IPK tinggi sehingga sangat layak diterima kerja!",
    "meaning": "Memenuhi syarat / berkualifikasi tinggi."
  },
  {
    "id": "ml-21",
    "word": "INFERENCE",
    "masked": "I N F _ R _ N C _",
    "missingLetters": [
      "E",
      "E",
      "E"
    ],
    "category": "TOEFL iBT Reading Skill",
    "babyClue": "🍼 Menjadi detektif pintar: membaca maksud yang tersirat di balik kalimat tanpa ditulis gamblang!",
    "meaning": "Inferensi / kesimpulan tersirat berdasarkan fakta yang ada."
  },
  {
    "id": "ml-22",
    "word": "RESILIENT",
    "masked": "R _ S _ L _ E N T",
    "missingLetters": [
      "E",
      "I",
      "I"
    ],
    "category": "Academic Vocab iBT",
    "babyClue": "🍼 Karakter pantang tumbang: jatuh berkali-kali tapi langsung bangkit tegak lagi dengan kuat!",
    "meaning": "Tangguh / ulet / mampu pulih dengan cepat setelah menghadapi kesulitan."
  },
  {
    "id": "ml-23",
    "word": "COMPREHENSIVE",
    "masked": "C _ M P R _ H _ N S _ V E",
    "missingLetters": [
      "O",
      "E",
      "E",
      "I"
    ],
    "category": "Academic Vocab iBT",
    "babyClue": "🍼 Lengkap selengkap-lengkapnya dari A sampai Z, ga ada detail yang tertinggal sedikitpun!",
    "meaning": "Komprehensif / menyeluruh dan mencakup semua aspek."
  },
  {
    "id": "ml-24",
    "word": "EMPIRICAL",
    "masked": "E M P _ R _ C _ L",
    "missingLetters": [
      "I",
      "I",
      "A"
    ],
    "category": "TOEFL Research Vocab",
    "babyClue": "🍼 Berdasarkan bukti nyata yang bisa dilihat, diraba, dan dihitung pakai data fakta, bukan sekadar teori dongeng!",
    "meaning": "Empiris / didasarkan pada observasi atau eksperimen nyata."
  },
  {
    "id": "ml-25",
    "word": "PARADIGM",
    "masked": "P _ R _ D _ G M",
    "missingLetters": [
      "A",
      "A",
      "I"
    ],
    "category": "S2 Academic Theory",
    "babyClue": "🍼 Kacamata atau pola pikir besar yang dipakai para ahli dalam memandang dunia ilmu pengetahuan!",
    "meaning": "Paradigma / kerangka berpikir yang mendasari suatu ilmu atau teori."
  },
  {
    "id": "ml-26",
    "word": "ALGORITHM",
    "masked": "A L G _ R _ T H M",
    "missingLetters": [
      "O",
      "I"
    ],
    "category": "Computer Science",
    "babyClue": "🍼 Resep langkah demi langkah yang ditaati komputer dari awal sampai selesai untuk masak solusi!",
    "meaning": "Algoritma / urutan logis instruksi pemecahan masalah."
  },
  {
    "id": "ml-27",
    "word": "INTEGRITY",
    "masked": "I N T _ G R _ T Y",
    "missingLetters": [
      "E",
      "I"
    ],
    "category": "Database & Etika IT",
    "babyClue": "🍼 Kejujuran dan keutuhan data: tabel ga boleh bocor, ga boleh korup, dan selalu konsisten!",
    "meaning": "Integritas data / keutuhan dan keaslian informasi."
  },
  {
    "id": "ml-28",
    "word": "REPOSITORY",
    "masked": "R _ P _ S I T _ R Y",
    "missingLetters": [
      "E",
      "O",
      "O"
    ],
    "category": "Version Control & GitHub",
    "babyClue": "🍼 Gudang brankas tempat menyimpan kode kodingan bersama seluruh riwayat perubahannya (seperti di GitHub)!",
    "meaning": "Repositori / gudang penyimpanan file proyek koding."
  },
  {
    "id": "ml-29",
    "word": "DEPLOYMENT",
    "masked": "D _ P L _ Y M _ N T",
    "missingLetters": [
      "E",
      "O",
      "E"
    ],
    "category": "Software Engineering",
    "babyClue": "🍼 Menerbangkan aplikasi dari laptop pembuat ke server awan internet biar bisa diakses seluruh dunia!",
    "meaning": "Penyebaran / peluncuran aplikasi ke server produksi."
  },
  {
    "id": "ml-30",
    "word": "BANDWIDTH",
    "masked": "B _ N D W _ D T H",
    "missingLetters": [
      "A",
      "I"
    ],
    "category": "Jaringan Komputer",
    "babyClue": "🍼 Lebar pipa jalan tol internet: makin lebar pipanya, makin banyak video dan data yang bisa lewat tanpa macet!",
    "meaning": "Bandwidth / kapasitas transfer data jaringan per detik."
  },
  {
    "id": "ml-31",
    "word": "FRAMEWORK",
    "masked": "F R _ M _ W _ R K",
    "missingLetters": [
      "A",
      "E",
      "O"
    ],
    "category": "Software Architecture",
    "babyClue": "🍼 Kerangka pondasi rumah koding siap pakai, jadi programmer ga perlu bikin semen dan batu bata dari nol!",
    "meaning": "Kerangka kerja pemrograman perangkat lunak."
  },
  {
    "id": "ml-32",
    "word": "COMPONENTS",
    "masked": "C _ M P _ N _ N T S",
    "missingLetters": [
      "O",
      "O",
      "E"
    ],
    "category": "Hardware & UI",
    "babyClue": "🍼 Suku cadang balok lego: tombol, resistor, chip, atau komponen tombol di layar aplikasi!",
    "meaning": "Komponen-komponen penyusun sistem atau antarmuka."
  },
  {
    "id": "ml-33",
    "word": "EFFICIENCY",
    "masked": "E F F _ C _ _ N C Y",
    "missingLetters": [
      "I",
      "I",
      "E"
    ],
    "category": "Optimasi Pabrik & IT",
    "babyClue": "🍼 Hemat energi, hemat waktu, tapi hasil produksinya maksimal berlimpah ruah!",
    "meaning": "Efisiensi / daya guna yang tepat tanpa pemborosan."
  },
  {
    "id": "ml-34",
    "word": "MAINTENANCE",
    "masked": "M _ _ N T _ N _ N C E",
    "missingLetters": [
      "A",
      "I",
      "E",
      "A"
    ],
    "category": "Operasional IT",
    "babyClue": "🍼 Bersih-bersih dan rawat server secara berkala biar ga mogok di tengah jalan!",
    "meaning": "Pemeliharaan / perawatan rutin perangkat dan sistem."
  },
  {
    "id": "ml-35",
    "word": "SUSTAINABLE",
    "masked": "S _ S T _ _ N _ B L E",
    "missingLetters": [
      "U",
      "A",
      "I",
      "A"
    ],
    "category": "IELTS Academic Theme",
    "babyClue": "🍼 Tahan lama dan ramah lingkungan: bisa terus berjalan lestari untuk masa depan generasi mendatang!",
    "meaning": "Berkelanjutan / ramah lingkungan jangka panjang."
  }
];

// ===================================================================
// 3. IELTS ACADEMIC STUDIO (CAMBRIDGE GRAMMAR FOR IELTS - 28 SOAL LENGKAP)
// Berdasarkan Buku Resmi: Cambridge Grammar for IELTS (Diana Hopkins & Pauline Cullen)
// Setiap Soal Memiliki CONTOH SOAL SERUPA, CONTOH JAWABAN BENAR & ANALOGI NALAR
// ===================================================================
const ieltsAcademicBank = [
  {
    "id": "ielts-1",
    "cambridgeUnit": "Unit 1: Present Simple vs Present Continuous",
    "ieltsFocus": "Academic Facts vs Ongoing Technological Shifts",
    "workedExample": {
      "sampleQuestion": "Water _____ at 100 degrees Celsius under standard atmospheric pressure.",
      "sampleAnswer": "boils",
      "sampleLogic": "Fakta ilmiah abadi (scientific law) selalu menggunakan Present Simple (boils), bukan continuous!"
    },
    "question": "The ongoing shift toward digital manufacturing _____ traditional manual processes into cloud workflows.",
    "options": [
      "transforms",
      "is transforming",
      "transformed",
      "has transform"
    ],
    "correctIndex": 1,
    "babyExplanation": "Pola Cambridge IELTS Unit 1: Keterangan 'The ongoing shift' (pergeseran yang SEDANG berlangsung sekarang ini) membutuhkan Present Continuous ('is transforming') untuk menunjukkan proses transformasi yang sedang berjalan!",
    "academicRule": "Use present continuous for trends and ongoing changes happening around the time of writing."
  },
  {
    "id": "ielts-2",
    "cambridgeUnit": "Unit 2: Past Simple in Academic History",
    "ieltsFocus": "Describing Historical Milestones & Scientific Discoveries",
    "workedExample": {
      "sampleQuestion": "In 1969, ARPANET _____ the first computer network packet transmission across universities.",
      "sampleAnswer": "transmitted",
      "sampleLogic": "Ada tahun lampau spesifik (In 1969), wajib menggunakan Simple Past Tense (Verb 2)!"
    },
    "question": "In 1991, Tim Berners-Lee _____ the World Wide Web protocols to international researchers.",
    "options": [
      "introduced",
      "introduces",
      "introducing",
      "was introduce"
    ],
    "correctIndex": 0,
    "babyExplanation": "Pola Cambridge IELTS Unit 2: Ada penanda waktu lampau yang pasti ('In 1991'). Maka kata kerjanya wajib Verb 2 lampau yaitu 'introduced'!",
    "academicRule": "Past simple is used with finished time expressions such as in 1991, last decade, or centuries ago."
  },
  {
    "id": "ielts-3",
    "cambridgeUnit": "Unit 3: Present Perfect in Task 1 Graphs",
    "ieltsFocus": "Task 1: Describing Trends from the Past to the Present",
    "workedExample": {
      "sampleQuestion": "Since 2010, the volume of digital cloud storage _____ exponentially worldwide.",
      "sampleAnswer": "has expanded",
      "sampleLogic": "Ada kata 'Since 2010' (sejak 2010 hingga kini), wajib menggunakan Present Perfect (has/have + V3)!"
    },
    "question": "According to the line graph, the number of industrial automation patents _____ substantially over the past decade.",
    "options": [
      "has increased",
      "increased",
      "increases",
      "is increase"
    ],
    "correctIndex": 0,
    "babyExplanation": "Pola Cambridge IELTS Unit 3: Frasa 'over the past decade' (selama satu dekade terakhir hingga sekarang) adalah sinyal emas Present Perfect! Karena subjeknya 'the number' (tunggal), pasangannya adalah 'has increased'!",
    "academicRule": "Present perfect describes changes that began in the past and have an effect or continue into the present."
  },
  {
    "id": "ielts-4",
    "cambridgeUnit": "Unit 4: Past Perfect in Historical Context",
    "ieltsFocus": "Sequencing Two Past Events in Academic Contexts",
    "workedExample": {
      "sampleQuestion": "Before fiber cables were installed, the company _____ relied on copper telephone wires.",
      "sampleAnswer": "had",
      "sampleLogic": "Peristiwa yang terjadi LEBIH DULU di masa lalu sebelum peristiwa lampau lainnya wajib memakai Past Perfect (had + V3)!"
    },
    "question": "By the time the enterprise cloud software was deployed, the old servers _____ already experienced multiple outages.",
    "options": [
      "had",
      "have",
      "were",
      "having"
    ],
    "correctIndex": 0,
    "babyExplanation": "Pola Cambridge IELTS Unit 4: Rumus 'By the time + Past Simple (was deployed)... had already + V3 (experienced)'. Server tua rusak duluan sebelum cloud dipasang, jadi wajib 'had'!",
    "academicRule": "Past perfect shows an action completed before another past event in the past."
  },
  {
    "id": "ielts-5",
    "cambridgeUnit": "Unit 5: Future Projections & Predictions",
    "ieltsFocus": "Task 1: Projecting Future Trends from Data Charts",
    "workedExample": {
      "sampleQuestion": "Demographic projections indicate that the global urban population _____ 70 percent by 2050.",
      "sampleAnswer": "is projected to reach",
      "sampleLogic": "Untuk prediksi grafik masa depan (by 2050), Cambridge merekomendasikan frasa pasif 'is projected to reach'!"
    },
    "question": "As illustrated in the forecast chart, global investment in green data centers _____ projected to surge by 2035.",
    "options": [
      "is",
      "will",
      "has",
      "was"
    ],
    "correctIndex": 0,
    "babyExplanation": "Pola Cambridge IELTS Unit 5: Pola akademis Task 1 grafik ramalan masa depan menggunakan rumus pasif: 'is projected to surge' (diproyeksikan melonjak)!",
    "academicRule": "Use passive hedging formulas like 'is predicted/projected to' when describing future chart trends."
  },
  {
    "id": "ielts-6",
    "cambridgeUnit": "Unit 6: Countable vs Uncountable Nouns",
    "ieltsFocus": "Academic Nouns & Subject-Verb Agreement",
    "workedExample": {
      "sampleQuestion": "The audit revealed that extensive academic _____ was collected by the survey team.",
      "sampleAnswer": "research",
      "sampleLogic": "'Research' adalah kata benda tak bisa dihitung (uncountable) di tes IELTS resmi, jadi tidak boleh ditambahkan 'es'!"
    },
    "question": "The government reported that substantial public _____ was allocated to the nationwide fiber-optic initiative.",
    "options": [
      "funding",
      "funds",
      "fundings",
      "funded"
    ],
    "correctIndex": 0,
    "babyExplanation": "Pola Cambridge IELTS Unit 6: Perhatikan kata kerja setelahnya yaitu 'was' (tunggal). 'Funding' adalah uncountable noun tunggal yang artinya pendanaan!",
    "academicRule": "Uncountable academic nouns (funding, equipment, research, information) take singular verbs."
  },
  {
    "id": "ielts-7",
    "cambridgeUnit": "Unit 7: Articles in Academic Definitions",
    "ieltsFocus": "General Disciplines vs Specific Instances",
    "workedExample": {
      "sampleQuestion": "_____ Internet has revolutionized telecommunications across the globe.",
      "sampleAnswer": "The",
      "sampleLogic": "Internet adalah entitas unik sedunia, wajib memakai artikel 'The'!"
    },
    "question": "Scholars gathered to examine whether _____ artificial intelligence will reshape global employment markets.",
    "options": [
      "- (no article)",
      "the",
      "an",
      "a"
    ],
    "correctIndex": 0,
    "babyExplanation": "Pola Cambridge IELTS Unit 7: Saat menyebut cabang ilmu pengetahuan secara umum (Artificial Intelligence, Mathematics, Chemistry), kita TIDAK menggunakan artikel (zero article)!",
    "academicRule": "Do not use 'the' before abstract academic fields when speaking in general terms."
  },
  {
    "id": "ielts-8",
    "cambridgeUnit": "Unit 8: Cohesive Referencing (Pronouns)",
    "ieltsFocus": "Academic Cohesion & Paragraph Flow (Task 2)",
    "workedExample": {
      "sampleQuestion": "Automated scripts detect errors immediately; _____ tools save developers hours of manual inspection.",
      "sampleAnswer": "these",
      "sampleLogic": "Merujuk kembali ke kata benda jamak sebelumnya ('automated scripts'), gunakan kata tunjuk 'these'!"
    },
    "question": "The production line experienced severe latency spikes; _____ anomalies prompted engineers to optimize database indexing.",
    "options": [
      "such",
      "that",
      "this",
      "much"
    ],
    "correctIndex": 0,
    "babyExplanation": "Pola Cambridge IELTS Unit 8: 'Such anomalies' (kejanggalan seperti itu) adalah frasa penunjuk akademis elegan untuk merujuk kembali fenomena jamak yang baru saja dijelaskan di kalimat sebelumnya!",
    "academicRule": "Use 'such + plural noun' to refer back to previously described phenomena with academic elegance."
  },
  {
    "id": "ielts-9",
    "cambridgeUnit": "Unit 9: Adjectives and Adverbs for Precision",
    "ieltsFocus": "Modifying Verbs of Change in Task 1 Graphs",
    "workedExample": {
      "sampleQuestion": "The throughput speed of the web portal increased _____ after upgrading the server.",
      "sampleAnswer": "significantly",
      "sampleLogic": "Menerangkan kata kerja (increased) membutuhkan kata keterangan adverb berakhiran '-ly' (significantly)!"
    },
    "question": "Factory operational costs dropped _____ following the deployment of automated diagnostic sensors.",
    "options": [
      "dramatically",
      "dramatic",
      "drama",
      "dramatics"
    ],
    "correctIndex": 0,
    "babyExplanation": "Pola Cambridge IELTS Unit 9: Kata 'dropped' adalah kata kerja. Untuk menjelaskan cara/derajat perubahannya, gunakan kata keterangan berakhiran '-ly' yaitu 'dramatically' (secara dramatis)!",
    "academicRule": "Verbs describing trends in Task 1 are modified by adverbs of degree (dramatically, sharply, steadily)."
  },
  {
    "id": "ielts-10",
    "cambridgeUnit": "Unit 10: Comparative Structures in Task 1",
    "ieltsFocus": "Comparing Quantities & Proportions Across Categories",
    "workedExample": {
      "sampleQuestion": "Electric car registrations in Region A were twice as _____ as those in Region B.",
      "sampleAnswer": "high",
      "sampleLogic": "Rumus perbandingan kelipatan: 'twice as + kata sifat dasar (high) + as'!"
    },
    "question": "In 2022, shoe production volume in Factory Alpha was considerably _____ than that of Factory Beta.",
    "options": [
      "higher",
      "more high",
      "highest",
      "high"
    ],
    "correctIndex": 0,
    "babyExplanation": "Pola Cambridge IELTS Unit 10: Ada kata 'than' (daripada) dan kata penguat 'considerably' (jauh lebih). Kata sifat 'high' memiliki bentuk komparatif teratur berakhiran '-er' yaitu 'higher'!",
    "academicRule": "Use comparative adjectives (-er than) modified by adverbs (considerably, significantly, slightly)."
  },
  {
    "id": "ielts-11",
    "cambridgeUnit": "Unit 11: Noun Phrases & Nominalization",
    "ieltsFocus": "Academic Style Density (Transforming Verbs to Nouns)",
    "workedExample": {
      "sampleQuestion": "Rather than saying 'the system performs well', academic prose prefers 'the high _____ of the system'.",
      "sampleAnswer": "performance",
      "sampleLogic": "Nominalisasi mengubah kata kerja 'perform' menjadi kata benda akademis 'performance'!"
    },
    "question": "The rapid _____ of fiber-optic communication infrastructure has accelerated international financial exchanges.",
    "options": [
      "expansion",
      "expand",
      "expanding",
      "expanded"
    ],
    "correctIndex": 0,
    "babyExplanation": "Pola Cambridge IELTS Unit 11: Di antara kata sifat 'rapid' dan preposisi 'of', kita membutuhkan kata benda (Noun) hasil nominalisasi dari kata kerja expand, yaitu 'expansion' (ekspansi/perluasan)!",
    "academicRule": "Nominalization (turning verbs into abstract nouns) creates the formal, dense tone expected in IELTS Band 8."
  },
  {
    "id": "ielts-12",
    "cambridgeUnit": "Unit 12: Modals 1: Ability & Possibility",
    "ieltsFocus": "Expressing Potential & Feasibility in Scientific Hypotheses",
    "workedExample": {
      "sampleQuestion": "Heuristic machine learning algorithms _____ identify malicious zero-day exploits effectively.",
      "sampleAnswer": "can",
      "sampleLogic": "Modal 'can' diikuti kata kerja bare infinitive (identify) untuk menyatakan kapabilitas ilmiah!"
    },
    "question": "With robust database indexing in place, the application _____ handle up to ten thousand concurrent queries without latency.",
    "options": [
      "can",
      "able",
      "capable",
      "may to"
    ],
    "correctIndex": 0,
    "babyExplanation": "Pola Cambridge IELTS Unit 12: Modal 'can' langsung diikuti kata kerja polos (handle). Kata 'able' butuh 'is able to', sedangkan 'capable' butuh 'is capable of'!",
    "academicRule": "The modal 'can' denotes technical capability and is followed directly by the bare infinitive."
  },
  {
    "id": "ielts-13",
    "cambridgeUnit": "Unit 13: Modals 2: Academic Hedging",
    "ieltsFocus": "Cautious & Objective Language in Task 2 Academic Essays",
    "workedExample": {
      "sampleQuestion": "The survey results _____ indicate a strong preference for remote employment among engineers.",
      "sampleAnswer": "would appear to",
      "sampleLogic": "Penulis akademis tidak pernah mengklaim 100% mutlak tanpa bukti; gunakan frasa hedging 'would appear to'!"
    },
    "question": "The preliminary laboratory data _____ suggest that neural networks require larger corpora for language synthesis.",
    "options": [
      "would seem to",
      "absolutely will",
      "must definitely",
      "cannot never"
    ],
    "correctIndex": 0,
    "babyExplanation": "Pola Cambridge IELTS Unit 13 (Hedging Sakti): Di tulisan ilmiah IELTS, jangan bersikap sombong/mutlak (jangan pakai definitely). Gunakan frasa kehati-hatian halus: 'would seem to suggest' (tampaknya mengindikasikan)!",
    "academicRule": "Hedging protects scientific claims from overgeneralization by softening assertions."
  },
  {
    "id": "ielts-14",
    "cambridgeUnit": "Unit 14: Passive Voice in Task 1 Diagrams",
    "ieltsFocus": "Describing Industrial Manufacturing Processes & Workflows",
    "workedExample": {
      "sampleQuestion": "In the initial stage, raw leather sheets _____ into shoe uppers by robotic lasers.",
      "sampleAnswer": "are cut",
      "sampleLogic": "Di diagram proses Task 1, fokusnya pada benda yang dikerjakan, jadi wajib kalimat pasif: are cut!"
    },
    "question": "During the final quality assessment, each manufactured pair _____ inspected for stitching symmetry before packing.",
    "options": [
      "is",
      "are",
      "were",
      "being"
    ],
    "correctIndex": 0,
    "babyExplanation": "Pola Cambridge IELTS Unit 14: Subjeknya 'each manufactured pair' (setiap pasang = tunggal). Rumus pasif present adalah is + Verb 3 (inspected). Jadi to be yang benar adalah 'is'!",
    "academicRule": "IELTS Task 1 process descriptions predominantly use the present simple passive (is/are + past participle)."
  },
  {
    "id": "ielts-15",
    "cambridgeUnit": "Unit 15: Impersonal Passive Reporting",
    "ieltsFocus": "Reporting General Academic Beliefs ('It is believed that...')",
    "workedExample": {
      "sampleQuestion": "_____ widely acknowledged that digital literacy is foundational to economic prosperity.",
      "sampleAnswer": "It is",
      "sampleLogic": "Rumus Impersonal Passive: 'It is + Adverb + Verb 3 + that + klausa kalimat'!"
    },
    "question": "_____ frequently asserted by education specialists that project-based learning enhances critical thinking.",
    "options": [
      "It is",
      "There is",
      "That is",
      "What is"
    ],
    "correctIndex": 0,
    "babyExplanation": "Pola Cambridge IELTS Unit 15: Frasa pembuka esai Band 8 yang sangat elegan: 'It is frequently asserted that...' (Kerap kali ditegaskan oleh para ahli bahwa...)!",
    "academicRule": "Impersonal passive structures (It is argued/believed/asserted that) introduce generalized scholarly viewpoints."
  },
  {
    "id": "ielts-16",
    "cambridgeUnit": "Unit 16: Conditionals 1: Scientific Hypotheses",
    "ieltsFocus": "Zero Conditional (Cause & Effect Laws of Technology)",
    "workedExample": {
      "sampleQuestion": "If server processor temperature exceeds 85 degrees, the emergency shutoff _____ automatically.",
      "sampleAnswer": "triggers",
      "sampleLogic": "Hukum sebab-akibat pasti dalam teknologi (Zero Conditional) memakai Present Simple di kedua klausa (exceeds -> triggers)!"
    },
    "question": "When an optical sensor detects a deformed shoe sole on the conveyor belt, the pneumatic arm _____ the item into the recycle bin.",
    "options": [
      "diverts",
      "diverted",
      "will divert",
      "diverting"
    ],
    "correctIndex": 0,
    "babyExplanation": "Pola Cambridge IELTS Unit 16: Zero Conditional digunakan untuk mendeskripsikan cara kerja mesin otomatis yang pasti terjadi: When + Present Simple (detects), Present Simple (diverts)!",
    "academicRule": "Zero conditional expresses factual technological and scientific rules using present simple in both clauses."
  },
  {
    "id": "ielts-17",
    "cambridgeUnit": "Unit 17: Conditionals 2: Counterfactual Hypotheses",
    "ieltsFocus": "Second Conditional in Academic Speculations & Debate",
    "workedExample": {
      "sampleQuestion": "If universities _____ more funding in research labs, graduation rates would climb.",
      "sampleAnswer": "invested",
      "sampleLogic": "Second Conditional (pengandaian tidak nyata di masa kini): If + Past Simple (invested), would + Verb 1!"
    },
    "question": "If governments _____ greater subsidies for renewable data centers, carbon emissions from IT facilities would drop sharply.",
    "options": [
      "provided",
      "provide",
      "will provide",
      "have provided"
    ],
    "correctIndex": 0,
    "babyExplanation": "Pola Cambridge IELTS Unit 17: Di klausa utama ada 'would drop' (would + V1). Pasangan pengandaiannya di klausa IF wajib menggunakan Past Simple (Verb 2) yaitu 'provided'!",
    "academicRule": "Second conditional uses past simple in the condition clause to discuss hypothetical policy alternatives."
  },
  {
    "id": "ielts-18",
    "cambridgeUnit": "Unit 17: Inverted Conditionals without 'If'",
    "ieltsFocus": "Band 8+ Advanced Academic Inversion (Omitting 'If')",
    "workedExample": {
      "sampleQuestion": "_____ the main power grid fail, secondary diesel generators will activate within five seconds.",
      "sampleAnswer": "Should",
      "sampleLogic": "Inversi pengandaian tipe 1 tanpa 'if': Ganti 'If the grid should fail' menjadi 'Should the grid fail'!"
    },
    "question": "_____ the central database server encounter an unresolvable bottleneck, secondary cloud mirrors will assume the transaction load.",
    "options": [
      "Should",
      "Were",
      "Had",
      "Could"
    ],
    "correctIndex": 0,
    "babyExplanation": "Pola Cambridge IELTS Unit 17 (Inversi Level Dewa): Untuk menulis esai dengan struktur tingkat tinggi tanpa kata 'If', kita memakai kata bantu 'Should' di awal kalimat: 'Should [subject] encounter...'!",
    "academicRule": "Inverted conditionals with 'Should' replace 'If' in formal academic writing to express hypothetical contingencies."
  },
  {
    "id": "ielts-19",
    "cambridgeUnit": "Unit 18: Relative Clauses in Definitions",
    "ieltsFocus": "Defining vs Non-defining Clauses (Commas & Which vs That)",
    "workedExample": {
      "sampleQuestion": "Linux, _____ was initially created by Linus Torvalds, is widely utilized on enterprise servers.",
      "sampleAnswer": "which",
      "sampleLogic": "Klausa non-defining di antara dua koma yang menerangkan benda mati SELALU memakai 'which', tidak boleh memakai 'that'!"
    },
    "question": "Python, _____ is celebrated for its concise syntax, has emerged as the premier language for machine learning applications.",
    "options": [
      "which",
      "that",
      "where",
      "whom"
    ],
    "correctIndex": 0,
    "babyExplanation": "Pola Cambridge IELTS Unit 18: AWAS JEBAKAN IELTS! Jika klausa diapit oleh tanda koma (non-defining relative clause), kamu DILARANG menggunakan 'that'! Wajib menggunakan 'which'!",
    "academicRule": "Non-defining relative clauses provide extra non-essential information, are enclosed in commas, and must use 'which' rather than 'that'."
  },
  {
    "id": "ielts-20",
    "cambridgeUnit": "Unit 19: Participle Clauses for Conciseness",
    "ieltsFocus": "-ing Participle Expressing Consequence in Task 1",
    "workedExample": {
      "sampleQuestion": "The company upgraded its fiber backbones, _____ latency by thirty percent.",
      "sampleAnswer": "reducing",
      "sampleLogic": "Untuk menyatakan akibat langsung di akhir kalimat tanpa kata sambung, gunakan present participle (-ing)!"
    },
    "question": "Engineers optimized the database indexing schema, _____ query execution times across all web portals.",
    "options": [
      "slashing",
      "slashed",
      "slash",
      "slashes"
    ],
    "correctIndex": 0,
    "babyExplanation": "Pola Cambridge IELTS Unit 19: Bentuk '-ing clause' (participle clause) adalah senjata utama untuk meraih skor Task 1 tinggi. 'slashing query execution times' artinya: 'sehingga memangkas waktu kueri'!",
    "academicRule": "Present participle (-ing) clauses act as adverbial clauses of result, producing concise, academic sentences."
  },
  {
    "id": "ielts-21",
    "cambridgeUnit": "Unit 20: Conjunctions of Direct Contrast",
    "ieltsFocus": "Task 1 Chart Comparison: Whereas vs Despite",
    "workedExample": {
      "sampleQuestion": "Domestic footwear production expanded, _____ international export volumes dropped by ten percent.",
      "sampleAnswer": "whereas",
      "sampleLogic": "Menghubungkan dua klausa kalimat utuh yang bertolak belakang memerlukan kata sambung 'whereas' (sedangkan)!"
    },
    "question": "Plant Alpha produced twelve thousand units in the second quarter, _____ Plant Beta manufactured only seven thousand.",
    "options": [
      "whereas",
      "despite",
      "in spite of",
      "because of"
    ],
    "correctIndex": 0,
    "babyExplanation": "Pola Cambridge IELTS Unit 20: Kita membandingkan dua klausa kalimat yang masing-masing punya Subjek + Predikat. Kata penghubung kontras untuk dua klausa utuh adalah 'whereas' (sedangkan)!",
    "academicRule": "Use 'whereas' or 'while' to connect two complete clauses exhibiting direct contrast."
  },
  {
    "id": "ielts-22",
    "cambridgeUnit": "Unit 20: Concession Connectors with Noun Phrases",
    "ieltsFocus": "Despite / In Spite Of vs Although / Even Though",
    "workedExample": {
      "sampleQuestion": "_____ severe power fluctuations, the emergency backup servers kept operating seamlessly.",
      "sampleAnswer": "Despite",
      "sampleLogic": "Diikuti oleh frasa kata benda (noun phrase tanpa kata kerja), kata yang tepat adalah 'Despite' (atau In spite of)!"
    },
    "question": "_____ the significant upfront installation costs, solar energy arrays deliver substantial long-term savings for factories.",
    "options": [
      "Despite",
      "Although",
      "Even though",
      "Whereas"
    ],
    "correctIndex": 0,
    "babyExplanation": "Pola Cambridge IELTS Unit 20: Frasa 'the significant upfront installation costs' adalah Noun Phrase (tanpa kata kerja). Kata sambung 'meskipun' yang diikuti Noun Phrase adalah 'Despite'!",
    "academicRule": "'Despite' and 'in spite of' are followed by noun phrases or gerunds, whereas 'although' introduces a full clause."
  },
  {
    "id": "ielts-23",
    "cambridgeUnit": "Unit 21: Reported Speech in Literature Reviews",
    "ieltsFocus": "Citing Scholarly Sources with Academic Tense Backshift",
    "workedExample": {
      "sampleQuestion": "Hopkins and Cullen (2012) argued that grammatical accuracy _____ crucial for high band achievements.",
      "sampleAnswer": "was",
      "sampleLogic": "Kata kerja pelapor di masa lampau (argued) mewajibkan pergeseran tenses (backshift): is -> was!"
    },
    "question": "The computer science researchers concluded that heuristic optimization algorithms _____ deliver superior speed when dataset sizes exceed one gigabyte.",
    "options": [
      "could",
      "can to",
      "is capable",
      "able to"
    ],
    "correctIndex": 0,
    "babyExplanation": "Pola Cambridge IELTS Unit 21: Kata kerja kutipan ilmiahnya adalah 'concluded' (bentuk lampau). Dalam aturan reported speech, modal 'can' mengalami pergeseran menjadi bentuk lampaunya yaitu 'could'!",
    "academicRule": "In literature citations using past reporting verbs (concluded, asserted), modal verbs backshift (can -> could)."
  },
  {
    "id": "ielts-24",
    "cambridgeUnit": "Unit 22: Academic Preposition Collocations",
    "ieltsFocus": "Collocations with Key Academic Verbs (Contribute, Lead, Impact)",
    "workedExample": {
      "sampleQuestion": "System security protocols contribute directly _____ safeguarding user privacy online.",
      "sampleAnswer": "to",
      "sampleLogic": "Pasangan preposisi baku untuk kata kerja 'contribute' adalah 'to' (contribute to + noun/gerund)!"
    },
    "question": "Continuous employee retraining programs contribute substantially _____ reducing factory operational bottlenecks.",
    "options": [
      "to",
      "for",
      "with",
      "in"
    ],
    "correctIndex": 0,
    "babyExplanation": "Pola Cambridge IELTS Unit 22: Pasangan paten (collocation) kata kerja 'contribute' SELALU memakai preposisi 'to': 'contribute to + gerund (reducing)'!",
    "academicRule": "The verb 'contribute' collocates strictly with the preposition 'to' followed by a noun phrase or gerund."
  },
  {
    "id": "ielts-25",
    "cambridgeUnit": "Unit 23: Academic Word List (AWL) Collocations",
    "ieltsFocus": "Collocations with 'Hypothesis' & 'Empirical Evidence'",
    "workedExample": {
      "sampleQuestion": "The experimental metrics gathered by the researchers helped _____ their initial scientific hypothesis.",
      "sampleAnswer": "corroborate",
      "sampleLogic": "Dalam kosa kata ilmiah, bukti empiris digunakan untuk 'corroborate' (memperkuat/membenarkan) hipotesis!"
    },
    "question": "Rigorous laboratory testing was conducted to either corroborate or _____ the proposed theoretical model.",
    "options": [
      "refute",
      "refusal",
      "refuting",
      "refutable"
    ],
    "correctIndex": 0,
    "babyExplanation": "Pola Cambridge IELTS Unit 23: Di sini ada pasangan seimbang: 'either corroborate (memperkuat) or refute (membantah)'. Kita butuh kata kerja Verb 1 paralel yaitu 'refute'!",
    "academicRule": "Academic Word List items such as 'corroborate' and 'refute' form common parallel collocations in scientific methodology."
  },
  {
    "id": "ielts-26",
    "cambridgeUnit": "Unit 24: Hedging Adverbs in Academic Arguments",
    "ieltsFocus": "Expressing Reasonable Evaluation Without Dogmatism",
    "workedExample": {
      "sampleQuestion": "Transitioning to automated renewable manufacturing is _____ the most effective solution for urban pollution.",
      "sampleAnswer": "arguably",
      "sampleLogic": "'Arguably' adalah kata keterangan hedging peringkat tertinggi di esai Cambridge untuk menyatakan argumen berbobot!"
    },
    "question": "Universal digital literacy is _____ the single most influential determinant of future socioeconomic mobility.",
    "options": [
      "arguably",
      "arrogantly",
      "argued",
      "argument"
    ],
    "correctIndex": 0,
    "babyExplanation": "Pola Cambridge IELTS Unit 24: Kata 'arguably' (dapat dikatakan / bisa diargumentasikan) adalah adverb sakti khas penulis esai Band 8-9 untuk menyampaikan klaim penting secara objektif dan berkelas!",
    "academicRule": "Adverbs like 'arguably' and 'plausibly' provide scholarly nuance when making major thematic claims."
  },
  {
    "id": "ielts-27",
    "cambridgeUnit": "Unit 25: Negative Inversion in Academic Essays",
    "ieltsFocus": "Band 8+ Sentence Structures with 'Not only... but also...'",
    "workedExample": {
      "sampleQuestion": "Not only _____ the system minimize database latency, but it also cut power consumption.",
      "sampleAnswer": "did",
      "sampleLogic": "Inversi negatif di masa lalu: 'Not only did [subject] minimize...', polanya dibalik seperti kalimat tanya!"
    },
    "question": "Not only _____ the new ERP software streamline warehouse inventory, but it also eradicated manual data-entry errors.",
    "options": [
      "did",
      "was",
      "does",
      "it did"
    ],
    "correctIndex": 0,
    "babyExplanation": "Pola Cambridge IELTS Unit 25 (Inversi Esai): Karena kejadiannya di masa lalu (ada kata 'streamline' dan 'eradicated'), inversi negatif diawali dengan kata bantu lampau 'did': 'Not only did the new software streamline...'!",
    "academicRule": "Negative inversion (Not only did [S] [V]...) elevates syntactic complexity in Academic Writing Task 2."
  },
  {
    "id": "ielts-28",
    "cambridgeUnit": "Unit 25: Parallel Structures in Thesis Statements",
    "ieltsFocus": "Syntactic Symmetry Across Multi-Part Arguments",
    "workedExample": {
      "sampleQuestion": "The master's degree program emphasizes analyzing complex datasets, engineering scalable algorithms, and _____ peer-reviewed research.",
      "sampleAnswer": "publishing",
      "sampleLogic": "Kesejajaran bentuk (Parallelism): analyzing (gerund), engineering (gerund), maka yang ketiga wajib publishing (gerund)!"
    },
    "question": "A qualified IT systems administrator must excel at configuring local area networks, resolving database bottlenecks, and _____ comprehensive disaster recovery documentation.",
    "options": [
      "authoring",
      "author",
      "authored",
      "to author"
    ],
    "correctIndex": 0,
    "babyExplanation": "Pola Cambridge IELTS Unit 28: Perhatikan hukum kesejajaran (Parallel Structure): 'configuring...', 'resolving...', maka bagian ketiga WAJIB kembar berakhiran '-ing' juga yaitu 'authoring'!",
    "academicRule": "Parallel structure requires that items in a list or coordinate structure share identical grammatical form."
  }
];

// ===================================================================
// 4. MODUL SPESIAL TOEFL iBT BEASISWA S2 (BUILDING SKILLS BOOK EDITION - 26 SOAL)
// Sesuai Buku: Building Skills for the TOEFL iBT [2nd Edition] (Compass Publishing)
// Melatih 6 Kemampuan Inti Beasiswa Luar Negeri:
// 1. Vocabulary in Context
// 2. Sentence Simplification
// 3. Factual Information & Negative Fact
// 4. Inference Questions
// 5. Text Insertion [■]
// 6. Speaking iBT Simulator (15s Prep, 45s Speech + Mic Audio Feedback)
// ===================================================================
const toeflIbtBuildingSkills = [
  {
    "id": "ibt-voc-1",
    "type": "reading",
    "skillCategory": "Vocabulary in Context",
    "bookChapter": "Chapter 3: Vocabulary & Reference Skills",
    "academicTopic": "Computer Science: Distributed Database Indexes",
    "workedExample": {
      "modelPrompt": "The word 'ubiquitous' in the passage is closest in meaning to:",
      "correctAnswer": "present everywhere simultaneously",
      "strategyLogic": "1. Baca konteks: 'mechanisms that are ubiquitous across enterprise data centers'.\\n2. Ada di setiap pusat data perusahaan tanpa terkecuali.\\n3. Sinonim akademik paling tepat: 'present everywhere simultaneously' (hadir di mana-mana)!"
    },
    "passageSnippet": "Modern distributed database management systems utilize index mechanisms that are ubiquitous across enterprise data centers. By establishing structured pointers to raw data nodes, these search engines diminish query latency significantly even during peak transaction intervals.",
    "highlightWord": "ubiquitous",
    "questionPrompt": "The word 'ubiquitous' in the passage is closest in meaning to:",
    "targetSentenceForAudio": "Modern distributed database management systems utilize index mechanisms that are ubiquitous across enterprise data centers.",
    "options": [
      "extremely rare and costly",
      "present everywhere simultaneously",
      "unstable and experimental",
      "temporarily configured"
    ],
    "correctIndex": 1,
    "babyExplanation": "🍼 Bahasa Bayi Kodi: Kata 'Ubiquitous' artinya 'ada di mana-mana / merajalela'! Bayangkan smartphone atau colokan listrik di kantor modern—ada di setiap meja dan ga bisa dihindari. Pilihan yang tepat adalah 'present everywhere simultaneously'!"
  },
  {
    "id": "ibt-voc-2",
    "type": "reading",
    "skillCategory": "Vocabulary in Context",
    "bookChapter": "Chapter 3: Vocabulary & Reference Skills",
    "academicTopic": "Environmental Science: Alpine Glacier Retreat",
    "workedExample": {
      "modelPrompt": "The word 'diminish' in the passage is closest in meaning to:",
      "correctAnswer": "decrease in size or amount",
      "strategyLogic": "1. Konteks: es kutub terkena pemanasan bumi (warming) sehingga mencair.\\n2. Logika: Volume es yang mencair tentu akan semakin menyusut.\\n3. Sinonim: 'decrease in size or amount'!"
    },
    "passageSnippet": "Due to prolonged atmospheric warming, alpine glaciers have begun to diminish at accelerated rates over the past four decades. This reduction directly alters downstream freshwater supplies, threatening agricultural irrigation and hydroelectric power reservoirs.",
    "highlightWord": "diminish",
    "questionPrompt": "The word 'diminish' in the passage is closest in meaning to:",
    "targetSentenceForAudio": "Due to prolonged atmospheric warming, alpine glaciers have begun to diminish at accelerated rates over the past four decades.",
    "options": [
      "expand rapidly",
      "freeze solid",
      "decrease in size or amount",
      "remain unchanged"
    ],
    "correctIndex": 2,
    "babyExplanation": "🍼 Bahasa Bayi Kodi: Kata 'Diminish' artinya 'menyusut / berkurang / mengecil'! Bayangkan es batu di gelas yang kena panas matahari, makin lama makin ciut dan mengecil. Jadi sinonim akuratnya adalah 'decrease in size or amount'!"
  },
  {
    "id": "ibt-voc-3",
    "type": "reading",
    "skillCategory": "Vocabulary in Context",
    "bookChapter": "Chapter 3: Vocabulary & Reference Skills",
    "academicTopic": "Evolutionary Biology: Adaptive Camouflage",
    "workedExample": {
      "modelPrompt": "The word 'pivotal' in the passage is closest in meaning to:",
      "correctAnswer": "crucially important",
      "strategyLogic": "1. Konteks: tanpa kemampuan kamuflase ini, serangga langsung dimangsa predator dan punah.\\n2. Jadi peran kamuflase ini sangat menentukan hidup matinya.\\n3. Sinonim: 'crucially important' (sangat penting / menjadi poros utama)!"
    },
    "passageSnippet": "The natural development of adaptive cryptic coloration played a pivotal role in the survival of temperate forest insects. Without the capacity to blend seamlessly into lichen-covered tree bark, juvenile insects were easily located by visual predators.",
    "highlightWord": "pivotal",
    "questionPrompt": "The word 'pivotal' in the passage is closest in meaning to:",
    "targetSentenceForAudio": "The natural development of adaptive cryptic coloration played a pivotal role in the survival of temperate forest insects.",
    "options": [
      "minor and negligible",
      "crucially important",
      "unfortunate",
      "fictional"
    ],
    "correctIndex": 1,
    "babyExplanation": "🍼 Bahasa Bayi Kodi: Kata 'Pivotal' berasal dari poros (pivot) roda—kalau porosnya patah, rodanya copot! Jadi 'pivotal' artinya 'sangat penting / menjadi kunci penentu'! Sinonim akademiknya adalah 'crucially important'!"
  },
  {
    "id": "ibt-voc-4",
    "type": "reading",
    "skillCategory": "Vocabulary in Context",
    "bookChapter": "Chapter 3: Vocabulary & Reference Skills",
    "academicTopic": "Renewable Energy: Photovoltaic Cells",
    "workedExample": {
      "modelPrompt": "The word 'harness' in the passage is closest in meaning to:",
      "correctAnswer": "capture and utilize",
      "strategyLogic": "1. Konteks: panel surya dirancang untuk 'harness photon energy' agar menghasilkan listrik.\\n2. Menangkap sinar matahari dan memanfaatkannya menjadi daya.\\n3. Sinonim: 'capture and utilize'!"
    },
    "passageSnippet": "Engineers have developed novel silicon crystal arrays to harness photon energy with minimal thermal loss. By converting ambient sunlight directly into direct current electricity, these panels offer an eco-friendly alternative to coal generation.",
    "highlightWord": "harness",
    "questionPrompt": "The word 'harness' in the passage is closest in meaning to:",
    "targetSentenceForAudio": "Engineers have developed novel silicon crystal arrays to harness photon energy with minimal thermal loss.",
    "options": [
      "capture and utilize",
      "waste and discard",
      "prevent and block",
      "measure roughly"
    ],
    "correctIndex": 0,
    "babyExplanation": "🍼 Bahasa Bayi Kodi: Kata 'Harness' aslinya adalah tali pelana kuda buat mengendalikan tenaga kuda supaya bisa narik kereta. Di dunia sains, 'to harness energy' artinya 'menangkap energi dan memanfaatkannya untuk kerjaan kita' ('capture and utilize')!"
  },
  {
    "id": "ibt-voc-5",
    "type": "reading",
    "skillCategory": "Vocabulary in Context",
    "bookChapter": "Chapter 3: Vocabulary & Reference Skills",
    "academicTopic": "Archaeology: Ceramic Preservation",
    "workedExample": {
      "modelPrompt": "The word 'resilient' in the passage is closest in meaning to:",
      "correctAnswer": "tough and damage-resistant",
      "strategyLogic": "1. Kontras: kayu membusuk cepat di tanah lembap, TETAPI tembikar kiln bertahan ribuan tahun.\\n2. Tembikar memiliki sifat tahan banting dan awet.\\n3. Sinonim: 'tough and damage-resistant'!"
    },
    "passageSnippet": "Unlike organic wood artifacts that decay rapidly in humid soil, kiln-fired pottery demonstrates resilient structural durability, preserving intricate trade inscriptions over several millennia.",
    "highlightWord": "resilient",
    "questionPrompt": "The word 'resilient' in the passage is closest in meaning to:",
    "targetSentenceForAudio": "Unlike organic wood artifacts that decay rapidly in humid soil, kiln-fired pottery demonstrates resilient structural durability.",
    "options": [
      "delicate and brittle",
      "tough and damage-resistant",
      "unusually colorful",
      "chemically poisonous"
    ],
    "correctIndex": 1,
    "babyExplanation": "🍼 Bahasa Bayi Kodi: Kata 'Resilient' artinya 'tangguh / kuat tahan banting'! Tembikar yang dibakar di oven kiln ga gampang rapuh kena tanah basah dan tahan ribuan tahun. Jadi artinya 'tough and damage-resistant'!"
  },
  {
    "id": "ibt-voc-6",
    "type": "reading",
    "skillCategory": "Vocabulary in Context",
    "bookChapter": "Chapter 3: Vocabulary & Reference Skills",
    "academicTopic": "Marine Ecology: Coral Bleaching",
    "workedExample": {
      "modelPrompt": "The word 'plausible' in the passage is closest in meaning to:",
      "correctAnswer": "believable and reasonable",
      "strategyLogic": "1. Konteks: ilmuwan mengemukakan hipotesis yang didukung data ilmiah.\\n2. Teori yang sangat dapat diterima akal sehat dan masuk akal.\\n3. Sinonim: 'believable and reasonable'!"
    },
    "passageSnippet": "Biologists have proposed several plausible hypotheses regarding thermal stress in coral reefs, pointing to elevated sea surface temperatures as the primary driver of zooxanthellae expulsion.",
    "highlightWord": "plausible",
    "questionPrompt": "The word 'plausible' in the passage is closest in meaning to:",
    "targetSentenceForAudio": "Biologists have proposed several plausible hypotheses regarding thermal stress in coral reefs.",
    "options": [
      "believable and reasonable",
      "ridiculous and impossible",
      "dangerous to human health",
      "untested and abandoned"
    ],
    "correctIndex": 0,
    "babyExplanation": "🍼 Bahasa Bayi Kodi: Kata 'Plausible' artinya 'masuk akal / sangat masuk nalar berdasarkan bukti ilmiah'! Lawan katanya adalah 'implausible' (ga masuk akal). Jadi maknanya adalah 'believable and reasonable'!"
  },
  {
    "id": "ibt-simp-1",
    "type": "reading",
    "skillCategory": "Sentence Simplification",
    "bookChapter": "Chapter 4: Sentence Simplification & Text Insertion",
    "academicTopic": "Artificial Intelligence: Deep Learning Opacity",
    "workedExample": {
      "modelPrompt": "Which sentence best expresses the essential information in the highlighted sentence?",
      "correctAnswer": "Opsi yang merangkum (1) akurasi AI tinggi + (2) proses dalamnya buram/gelap + (3) auditor tidak bisa melacak penyebab error",
      "strategyLogic": "Pecah kalimat monster jadi 3 inti: Walau akurat, keburaman proses internal membuat auditor gagal menemukan alasan di balik error aneh. Hindari opsi yang menambah cerita palsu!"
    },
    "passageSnippet": "Although neural network architectures have demonstrated unprecedented accuracy in image classification, their intrinsic opacity—frequently described by software engineers as the black box dilemma—prevents technical auditors from pinpointing the exact algorithmic rationale behind anomalous predictive outputs.",
    "highlightSentence": "Although neural network architectures have demonstrated unprecedented accuracy in image classification, their intrinsic opacity—frequently described by software engineers as the black box dilemma—prevents technical auditors from pinpointing the exact algorithmic rationale behind anomalous predictive outputs.",
    "questionPrompt": "Which of the sentences below best expresses the essential information in the highlighted sentence? (Incorrect choices change the meaning in important ways or leave out essential information).",
    "targetSentenceForAudio": "Although neural networks demonstrate high accuracy, their hidden internal processes prevent auditors from explaining strange errors.",
    "options": [
      "Neural networks are highly accurate at classification, yet their hidden internal processes make it impossible for auditors to explain strange errors.",
      "Because image classification is prone to severe errors, software engineers refuse to deploy neural network architectures in enterprise systems.",
      "Technical auditors cannot understand anomalous errors because neural network architectures lack mathematical accuracy.",
      "The black box dilemma proves that artificial intelligence can never achieve high accuracy in image recognition."
    ],
    "correctIndex": 0,
    "babyExplanation": "🍼 Trik Menjinakkan Monster Kalimat Panjang: Bedah 3 tiang pondasi kalimat aslinya: (1) Mesin AI sangat akurat, TAPI (2) Isi dalamnya gelap ga kelihatan (black box), JADI (3) Auditor pusing ga bisa tahu alasan di balik error aneh. Pilihan A merangkum ketiga tiang ini dengan tepat tanpa membuang info penting atau mengarang cerita baru!"
  },
  {
    "id": "ibt-simp-2",
    "type": "reading",
    "skillCategory": "Sentence Simplification",
    "bookChapter": "Chapter 4: Sentence Simplification & Text Insertion",
    "academicTopic": "Economic History: Industrial Automation",
    "workedExample": {
      "modelPrompt": "Which sentence best expresses essential information?",
      "correctAnswer": "Ringkasan: Walau awalnya memicu protes buruh, mesin tenun uap pada akhirnya meningkatkan produktivitas dan menurunkan harga tekstil",
      "strategyLogic": "Fokus pada kontras: 'Even though X (awalnya demo), it ultimately Y (pada akhirnya bikin produksi naik dan barang murah)'. Cari opsi yang paling setia dengan pesan ini!"
    },
    "passageSnippet": "Even though the installation of mechanized steam looms initially prompted widespread labor unrest among artisan weavers who feared permanent displacement, it ultimately catalyzed unprecedented productivity gains that reduced textile costs for general consumers across the entire continent.",
    "highlightSentence": "Even though the installation of mechanized steam looms initially prompted widespread labor unrest among artisan weavers who feared permanent displacement, it ultimately catalyzed unprecedented productivity gains that reduced textile costs for general consumers across the entire continent.",
    "questionPrompt": "Which of the sentences below best expresses the essential information in the highlighted sentence?",
    "targetSentenceForAudio": "Even though steam looms initially caused labor unrest, they ultimately increased productivity and lowered textile costs for consumers.",
    "options": [
      "Artisan weavers destroyed steam looms because textile prices across the continent had risen beyond what consumers could afford.",
      "While steam looms initially triggered worker protests, they ultimately boosted productivity and made clothing much cheaper for the public.",
      "Mechanized steam looms failed to increase productivity because artisan weavers permanently abandoned factory operations.",
      "The high cost of steam equipment caused labor unrest that prevented factories from lowering consumer textile prices."
    ],
    "correctIndex": 1,
    "babyExplanation": "🍼 Trik Menjinakkan Monster Kalimat Panjang: Cek hubungan kontras: 'Even though X (awalnya bikin demo buruh karena takut dipecat), it ultimately Y (pada akhirnya bikin produksi meledak dan harga baju jadi murah untuk rakyat)'. Opsi B adalah ringkasan paling jujur dan setia dengan makna aslinya!"
  },
  {
    "id": "ibt-simp-3",
    "type": "reading",
    "skillCategory": "Sentence Simplification",
    "bookChapter": "Chapter 4: Sentence Simplification & Text Insertion",
    "academicTopic": "Urban Planning: Urban Heat Islands",
    "workedExample": {
      "modelPrompt": "Which sentence best expresses essential information?",
      "correctAnswer": "Ringkasan: Kota lebih hangat di malam hari dibanding desa karena aspal dan beton menyerap panas matahari sepanjang siang",
      "strategyLogic": "Sebab: Aspal dan beton menyerap radiasi siang. Akibat: Suhu malam hari di kota tetap lebih tinggi dibanding pedesaan. Pilihan harus memuat sebab dan akibat tersebut!"
    },
    "passageSnippet": "Because metropolitan centers replace vegetated soil with dark asphalt pavement and dense concrete structures that continuously absorb solar radiation during daylight hours, nighttime urban ambient temperatures remain significantly elevated compared to surrounding rural landscapes.",
    "highlightSentence": "Because metropolitan centers replace vegetated soil with dark asphalt pavement and dense concrete structures that continuously absorb solar radiation during daylight hours, nighttime urban ambient temperatures remain significantly elevated compared to surrounding rural landscapes.",
    "questionPrompt": "Which of the sentences below best expresses the essential information in the highlighted sentence?",
    "targetSentenceForAudio": "Because cities replace vegetation with materials that absorb heat, nighttime temperatures in cities stay warmer than in rural areas.",
    "options": [
      "Rural areas are hotter at night than cities because agricultural crops absorb solar radiation faster than dark asphalt pavement.",
      "Cities stay warmer at night than rural areas because their dark pavements and concrete buildings soak up heat throughout the day.",
      "Urban planners are removing all asphalt pavement in metropolitan centers to prevent solar radiation from reaching concrete buildings.",
      "Nighttime temperatures in cities drop below rural levels once daylight solar radiation dissipates from concrete structures."
    ],
    "correctIndex": 1,
    "babyExplanation": "🍼 Trik Menjinakkan Monster Kalimat Panjang: Cari SEBAB & AKIBAT. Sebab: Aspal & beton kota nyerap panas siang bolong. Akibat: Malam hari di kota tetep terasa gerah dibanding desa (rural). Opsi B menjelaskan hubungan sebab-akibat ini dengan bahasa yang bersih dan padat!"
  },
  {
    "id": "ibt-simp-4",
    "type": "reading",
    "skillCategory": "Sentence Simplification",
    "bookChapter": "Chapter 4: Sentence Simplification & Text Insertion",
    "academicTopic": "Cognitive Linguistics: Metaphorical Thought",
    "workedExample": {
      "modelPrompt": "Which sentence best expresses essential information?",
      "correctAnswer": "Ringkasan: Metafora bukan sekadar hiasan puisi, melainkan kerangka dasar bagaimana pikiran manusia memahami konsep abstrak",
      "strategyLogic": "Dua poin esensial: (1) bukan cuma gaya bahasa sastra hiasan, melainkan (2) cara dasar otak manusia memproses konsep abstrak sehari-hari."
    },
    "passageSnippet": "Far from being mere decorative ornaments confined to creative poetry, conceptual metaphors constitute fundamental cognitive scaffolding that systematically shapes how individuals perceive abstract notions such as time, emotion, and morality.",
    "highlightSentence": "Far from being mere decorative ornaments confined to creative poetry, conceptual metaphors constitute fundamental cognitive scaffolding that systematically shapes how individuals perceive abstract notions such as time, emotion, and morality.",
    "questionPrompt": "Which of the sentences below best expresses the essential information in the highlighted sentence?",
    "targetSentenceForAudio": "Metaphors are not just poetic decorations but essential cognitive tools that structure how people comprehend abstract concepts.",
    "options": [
      "Metaphors are not just poetic decorations but essential cognitive tools that structure how people comprehend abstract concepts.",
      "Creative poets use metaphors to prove that time and morality cannot be understood through cognitive scaffolding.",
      "Abstract notions like time and emotion prevent human brains from using decorative ornaments in daily language.",
      "Poetry is the only discipline where individuals can systematically structure abstract cognitive notions."
    ],
    "correctIndex": 0,
    "babyExplanation": "🍼 Trik Menjinakkan Monster: Frasa 'Far from being X' artinya 'Alih-alih sekadar X (hiasan puisi), kenyataannya adalah Y (pondasi cara otak mikir konsep abstrak)'. Opsi A menangkap esensi perbandingan ini secara sempurna!"
  },
  {
    "id": "ibt-simp-5",
    "type": "reading",
    "skillCategory": "Sentence Simplification",
    "bookChapter": "Chapter 4: Sentence Simplification & Text Insertion",
    "academicTopic": "Quantum Computing: Decoherence Obstacles",
    "workedExample": {
      "modelPrompt": "Which sentence best expresses essential information?",
      "correctAnswer": "Ringkasan: Walau komputer kuantum bisa memproses data sangat cepat, gangguan suhu dan magnet membuat qubit kehilangan status kuantumnya sebelum perhitungan selesai",
      "strategyLogic": "Fokus pada janji versus rintangan: Potensi kecepatan luar biasa, tapi sangat rentan terhadap gangguan lingkungan (decoherence) yang merusak perhitungan."
    },
    "passageSnippet": "Although quantum processors possess the theoretical capability to execute cryptographic calculations millions of times faster than classical silicon supercomputers, extreme sensitivity to environmental thermal fluctuations causes rapid qubit decoherence, destroying fragile quantum superpositions before complex algorithms can conclude.",
    "highlightSentence": "Although quantum processors possess the theoretical capability to execute cryptographic calculations millions of times faster than classical silicon supercomputers, extreme sensitivity to environmental thermal fluctuations causes rapid qubit decoherence, destroying fragile quantum superpositions before complex algorithms can conclude.",
    "questionPrompt": "Which of the sentences below best expresses the essential information in the highlighted sentence?",
    "targetSentenceForAudio": "Despite their immense computational promise, quantum processors easily lose their quantum state due to thermal disruptions before completing calculations.",
    "options": [
      "Silicon supercomputers have replaced quantum processors because environmental heat increases the speed of cryptographic calculations.",
      "Despite their immense computational promise, quantum processors easily lose their quantum state due to thermal disruptions before completing calculations.",
      "Thermal fluctuations allow complex algorithms to conclude without requiring fragile quantum superpositions.",
      "Quantum supercomputers cannot execute algorithms unless temperatures are kept extremely hot."
    ],
    "correctIndex": 1,
    "babyExplanation": "🍼 Trik Menjinakkan Monster: Dua tiang utama: (1) Komputer kuantum janjinya ngebut banget, TAPI (2) Begitu kena panas dikit, qubitnya langsung kacau (decoherence) sebelum tugasnya kelar. Opsi B merangkum inti janji dan rintangan ini dengan sangat presisi!"
  },
  {
    "id": "ibt-fact-1",
    "type": "reading",
    "skillCategory": "Fact & Negative Fact",
    "bookChapter": "Chapter 1: Factual Information & Negative Fact Skills",
    "academicTopic": "Geology: Hydrothermal Energy Reservoirs",
    "workedExample": {
      "modelPrompt": "Which of the following is NOT mentioned as a characteristic of geothermal power?",
      "correctAnswer": "It can be constructed anywhere in the world without geographic limitations.",
      "strategyLogic": "Pindai teks: Teks menyebut 'plant construction is strictly constrained to tectonic boundary regions' (terbatas hanya di daerah lempeng). Maka opsi yang bilang bisa di mana saja tanpa batasan adalah SALAH, dan itulah jawaban yang dicari!"
    },
    "passageSnippet": "Geothermal power plants extract pressurized steam and hot brine from subterranean reservoirs to rotate electricity turbines. Unlike fossil fuel facilities, these power stations generate negligible greenhouse emissions and occupy a very small surface footprint. However, plant construction is strictly constrained to tectonic boundary regions, and continuous water withdrawal without adequate reinjection can cause underground reservoir pressure collapse.",
    "questionPrompt": "According to the passage, which of the following is NOT mentioned as a characteristic or benefit of geothermal power?",
    "targetSentenceForAudio": "Geothermal power plants extract pressurized steam from subterranean reservoirs to rotate electricity turbines.",
    "options": [
      "It emits minimal amounts of harmful greenhouse gases.",
      "It requires relatively little surface ground area.",
      "It can be constructed anywhere in the world without geographic limitations.",
      "It relies on steam and hot brine from underground reservoirs."
    ],
    "correctIndex": 2,
    "babyExplanation": "🍼 Trik Detektif Negative Fact (Cari yang PALSU / TIDAK DISEBUTKAN): Teks menyatakan dengan tegas: 'plant construction is strictly constrained to tectonic boundary regions' (pembangunannya terbatas hanya di jalur lempeng tektonik tertentu, ga bisa sembarangan tempat!). Jadi opsi C yang bilang 'bisa dibangun di mana saja di dunia tanpa batasan' adalah BOHONG dan itulah jawaban yang benar untuk tipe soal NOT!"
  },
  {
    "id": "ibt-fact-2",
    "type": "reading",
    "skillCategory": "Fact & Negative Fact",
    "bookChapter": "Chapter 1: Factual Information & Negative Fact Skills",
    "academicTopic": "Zoology: Honeybee Communication (The Waggle Dance)",
    "workedExample": {
      "modelPrompt": "According to the passage, how does the honeybee indicate flight distance to the food source?",
      "correctAnswer": "By the duration of its waggle vibration",
      "strategyLogic": "Cari kata kunci 'flight distance' di teks. Teks berbunyi: 'the duration of the waggle vibration communicates the flight distance required'. Cocokkan langsung dengan opsi pilihan!"
    },
    "passageSnippet": "When a foraging honeybee locates a nutrient-rich flower patch, it returns to the hive and performs a synchronized waggle dance on the vertical honeycomb. The angle of the bee's straight run relative to gravity indicates the exact solar compass direction to the food, while the duration of the waggle vibration communicates the flight distance required.",
    "questionPrompt": "According to the passage, how does the honeybee indicate the flight distance to the food source?",
    "targetSentenceForAudio": "The duration of the waggle vibration communicates the flight distance required.",
    "options": [
      "By the angle of its run relative to the sun",
      "By the duration of its waggle vibration",
      "By bringing back small samples of flower nectar",
      "By changing the color of the vertical honeycomb"
    ],
    "correctIndex": 1,
    "babyExplanation": "🍼 Trik Detektif Fakta Teks: Pindai kata kunci 'flight distance' di teks! Teks langsung berbunyi: 'the duration of the waggle vibration communicates the flight distance required' (durasi getaran goyangan mengomunikasikan jarak terbang). Jadi jawabannya adalah opsi B!"
  },
  {
    "id": "ibt-fact-3",
    "type": "reading",
    "skillCategory": "Fact & Negative Fact",
    "bookChapter": "Chapter 1: Factual Information & Negative Fact Skills",
    "academicTopic": "Marine Chemistry: Ocean Acidification",
    "workedExample": {
      "modelPrompt": "According to the passage, what chemical consequence occurs when seawater absorbs excess CO2?",
      "correctAnswer": "Carbonate ion availability decreases, hindering shell formation.",
      "strategyLogic": "Pindai kata 'excess CO2' dan cari akibat kimiawinya pada organisme bercangkang: penurunan ketersediaan ion karbonat yang dibutuhkan untuk membentuk cangkang kalsium."
    },
    "passageSnippet": "As marine waters absorb anthropogenic carbon dioxide from the atmosphere, chemical reactions yield carbonic acid, which reduces ocean pH and depletes available carbonate ions. Marine organisms such as pteropods, clams, and coral polyps depend on these carbonate ions to synthesize their calcium carbonate shells and skeletal matrices.",
    "questionPrompt": "According to the passage, which of the following happens when oceans absorb excess carbon dioxide?",
    "targetSentenceForAudio": "As marine waters absorb carbon dioxide, chemical reactions yield carbonic acid and deplete available carbonate ions.",
    "options": [
      "Ocean pH rises dramatically to alkaline levels.",
      "The concentration of available carbonate ions is depleted, hindering shell synthesis.",
      "Calcium carbonate shells become twice as thick and indestructible.",
      "Coral polyps stop absorbing sunlight in deep oceanic trenches."
    ],
    "correctIndex": 1,
    "babyExplanation": "🍼 Trik Detektif Fakta: Teks menjelaskan: 'reduces ocean pH and depletes available carbonate ions... depend on these carbonate ions to synthesize shells'. Jadi penyerapan CO2 mengurangi persediaan ion karbonat sehingga mengganggu pembentukan cangkang. Opsi B benar 100%!"
  },
  {
    "id": "ibt-fact-4",
    "type": "reading",
    "skillCategory": "Fact & Negative Fact",
    "bookChapter": "Chapter 1: Factual Information & Negative Fact Skills",
    "academicTopic": "Planetary Science: Planetary Magnetic Dynamos",
    "workedExample": {
      "modelPrompt": "Which of the following is NOT true regarding Earth's geomagnetic field according to the text?",
      "correctAnswer": "It is generated exclusively by stationary solid iron in the outer crust.",
      "strategyLogic": "Teks menyatakan dinamo magnetik dihasilkan oleh konveksi besi CAIR di inti luar (liquid iron in outer core), bukan besi padat diam di kerak bumi (solid iron in crust). Opsi ini bertentangan dengan teks!"
    },
    "passageSnippet": "Earth's geomagnetic dipole field is generated by convective currents of molten iron circulating within its liquid outer core—a process known as the geodynamo. This magnetic shield deflects the lethal stream of charged plasma emitted by the Sun, preventing atmospheric stripping and shielding terrestrial DNA from ionizing radiation.",
    "questionPrompt": "According to the passage, all of the following are functions or origins of Earth's magnetic shield EXCEPT:",
    "targetSentenceForAudio": "Earth's geomagnetic field is generated by convective currents of molten iron circulating within its liquid outer core.",
    "options": [
      "It is generated by convective currents of liquid molten iron in the outer core.",
      "It deflects streams of charged plasma emitted by the Sun.",
      "It shields surface terrestrial DNA from ionizing solar radiation.",
      "It is generated exclusively by stationary solid rocks situated in the outer continental crust."
    ],
    "correctIndex": 3,
    "babyExplanation": "🍼 Trik Detektif EXCEPT (Cari yang Salah): Teks menyebut geodinamo berasal dari 'molten iron circulating within liquid outer core' (lelehan besi cair yang berputar di inti luar bumi). Opsi D yang bilang berasal dari 'batu padat diam di kerak' jelas SALAH dan bertentangan dengan teks!"
  },
  {
    "id": "ibt-fact-5",
    "type": "reading",
    "skillCategory": "Fact & Negative Fact",
    "bookChapter": "Chapter 1: Factual Information & Negative Fact Skills",
    "academicTopic": "Anthropology: Neolithic Farming Settlements",
    "workedExample": {
      "modelPrompt": "According to the passage, what enabled Neolithic communities to form permanent year-round villages?",
      "correctAnswer": "Surplus grain storage and domesticated animal husbandry",
      "strategyLogic": "Pindai faktor transisi dari nomaden ke desa menetap: penyimpanan lumbung pangan dan peternakan hewan ternak yang menjamin suplai kalori sepanjang tahun."
    },
    "passageSnippet": "The transition from nomadic foraging to sedentary agrarian settlements during the Neolithic revolution was facilitated primarily by the development of granary storage architecture and cereal cultivation. By securing predictable food surpluses, human bands no longer needed to migrate seasonally in pursuit of migrating wild game.",
    "questionPrompt": "According to the passage, what primarily allowed Neolithic human groups to cease seasonal migration?",
    "targetSentenceForAudio": "By securing predictable food surpluses through granary storage, human bands no longer needed to migrate seasonally.",
    "options": [
      "The manufacture of wheeled bronze chariots for intercontinental exploration",
      "The achievement of predictable food surpluses through grain storage and cereal farming",
      "The extinction of all wild herd animals across the Fertile Crescent",
      "The sudden freezing of rivers that prevented water transport"
    ],
    "correctIndex": 1,
    "babyExplanation": "🍼 Trik Detektif Fakta: Teks mengatakan: 'By securing predictable food surpluses, human bands no longer needed to migrate' (dengan mengamankan cadangan makanan yang terukur lewat lumbung, manusia purba tidak perlu lagi berpindah-pindah). Opsi B tepat!"
  },
  {
    "id": "ibt-inf-1",
    "type": "reading",
    "skillCategory": "Inference",
    "bookChapter": "Chapter 2: Inference & Rhetorical Purpose Skills",
    "academicTopic": "Cognitive Psychology: Working Memory Limits",
    "workedExample": {
      "modelPrompt": "Which of the following can be inferred about human working memory?",
      "correctAnswer": "Tugas yang sama-sama memperebutkan perhatian sadar akan saling mengganggu kinerja memori.",
      "strategyLogic": "Subjek uji coba drop saat mikir logika + ngingat angka bersamaan, tapi tidak drop saat cuma denger musik pasif. Tersirat: Dua tugas aktif yang bersaing memperebutkan kapasitas memori kerja sadar akan menurunkan performa!"
    },
    "passageSnippet": "In controlled laboratory trials, subjects instructed to retain sequences of numeric digits while concurrently solving logic puzzles displayed steep decreases in memory accuracy. In contrast, when the secondary background task was limited to listening to ambient classical music, digit retention was preserved without significant degradation.",
    "questionPrompt": "Which of the following can be inferred from the passage about human working memory?",
    "targetSentenceForAudio": "Subjects instructed to retain sequences of digits while concurrently solving logic puzzles displayed steep decreases in memory accuracy.",
    "options": [
      "Activities that compete for identical conscious cognitive resources impair performance more severely than passive sensory stimuli.",
      "Listening to classical music automatically doubles a student's logic puzzle-solving IQ.",
      "Human memory can store an infinite sequence of numbers if no background music is played.",
      "Logic puzzles are physically impossible to solve in quiet environments."
    ],
    "correctIndex": 0,
    "babyExplanation": "🍼 Trik Detektif Makna Tersirat (Inference): Perhatikan eksperimennya: Pas disuruh mikir logika sambil ngingat angka (dua-duanya butuh mikir sadar), otak langsung kelelahan dan drop. Tapi pas cuma denger musik pasif, memorinya aman. Kesimpulan tersirat yang logis: 'Dua tugas yang sama-sama rebutan jatah mikir otak bakal saling mengganggu, beda dengan suara musik pasif yang ga ngerebut kapasitas otak'!"
  },
  {
    "id": "ibt-inf-2",
    "type": "reading",
    "skillCategory": "Inference",
    "bookChapter": "Chapter 2: Inference & Rhetorical Purpose Skills",
    "academicTopic": "Space Exploration: Subsurface Water Ice on Mars",
    "workedExample": {
      "modelPrompt": "What can be inferred from the passage regarding surface water on Mars?",
      "correctAnswer": "Mars' current atmosphere is too thin to allow liquid water to remain stable on its surface.",
      "strategyLogic": "Teks: 'atmospheric pressure on modern Mars is insufficient to maintain liquid water without rapid sublimation' (tekanan atmosfer tidak cukup untuk mempertahankan air cair tanpa langsung menguap). Tersirat: Atmosfer Mars terlalu tipis untuk menstabilkan air cair di permukaan!"
    },
    "passageSnippet": "While atmospheric pressure on modern Mars is insufficient to maintain liquid water on the planetary surface without rapid sublimation, radar sounders on orbiting spacecraft have detected extensive dielectric reflections beneath the southern polar ice sheet, consistent with buried sheets of ancient glacial ice.",
    "questionPrompt": "What can be inferred from the passage regarding surface water on Mars?",
    "targetSentenceForAudio": "While atmospheric pressure on modern Mars is insufficient to maintain liquid water on the surface, radar sounders detected subsurface reflections.",
    "options": [
      "Mars' current atmosphere is too thin to allow liquid water to remain stable on its surface.",
      "Liquid lakes exist freely in open craters across all equatorial zones of Mars today.",
      "Orbiting spacecraft cannot operate scientific radar equipment in cold planetary climates.",
      "Subsurface ice sheets have evaporated completely into Mars' outer atmosphere."
    ],
    "correctIndex": 0,
    "babyExplanation": "🍼 Trik Detektif Makna Tersirat (Inference): Teks bilang: 'atmospheric pressure is insufficient to maintain liquid water without rapid sublimation' (tekanan udaranya ga cukup buat nahan air cair, jadi langsung menguap lenyap). Tersirat artinya: 'Atmosfer Mars sekarang terlalu tipis sehingga air cair ga bisa bertahan di permukaannya'! Opsi A tepat 100%!"
  },
  {
    "id": "ibt-inf-3",
    "type": "reading",
    "skillCategory": "Inference",
    "bookChapter": "Chapter 2: Inference & Rhetorical Purpose Skills",
    "academicTopic": "Deep-Sea Biology: Abyssal Bioluminescence",
    "workedExample": {
      "modelPrompt": "What can be inferred about sunlight penetration in the bathypelagic zone?",
      "correctAnswer": "Solar light is completely absent, making biological light production essential for vision.",
      "strategyLogic": "Zona bathypelagic berada di bawah 1000 meter di mana predator mengandalkan fotofor bioluminesen sendiri untuk mengenali mangsa. Tersirat: Cahaya matahari tidak mampu menembus kedalaman tersebut sama sekali!"
    },
    "passageSnippet": "Below depths of one thousand meters in the bathypelagic zone, where photon penetration from surface solar rays drops to absolute zero, deep-sea organisms synthesize cold enzymatic light via luciferin-luciferase reactions. Many predatory species utilize species-specific flash frequencies to attract prey and recognize conspecific mates in the perpetual darkness.",
    "questionPrompt": "What can be inferred from the passage about deep-sea organisms below one thousand meters?",
    "targetSentenceForAudio": "Below depths of one thousand meters, where photon penetration drops to absolute zero, organisms synthesize cold enzymatic light.",
    "options": [
      "Without internal light-producing organs, these creatures would be unable to visually coordinate mating in absolute darkness.",
      "They rely heavily on chlorophyll photosynthesis to manufacture glucose nutrients.",
      "Predators in this zone migrate daily to surface waves to recharge their chemical enzymes.",
      "Luciferin reactions generate intense thermal heat that warms surrounding abyssal waters."
    ],
    "correctIndex": 0,
    "babyExplanation": "🍼 Trik Detektif Makna Tersirat: Teks menyebut di kedalaman >1000m cahaya matahari = 0 (kegelapan abadi), dan makhluk di sana butuh kedipan cahaya luciferin khusus untuk mencari pasangan kawin. Tersirat: Tanpa organ penghasil cahaya ini, mereka ga akan bisa saling menemukan di kegelapan gulita! Opsi A benar!"
  },
  {
    "id": "ibt-inf-4",
    "type": "reading",
    "skillCategory": "Inference",
    "bookChapter": "Chapter 2: Inference & Rhetorical Purpose Skills",
    "academicTopic": "Paleontology: Dinosaur Metabolic Physiology",
    "workedExample": {
      "modelPrompt": "What can be inferred regarding the traditional classification of dinosaurs as slow ectotherms?",
      "correctAnswer": "Recent vascular bone evidence contradicts the old idea that dinosaurs were purely cold-blooded.",
      "strategyLogic": "Ditemukan osteon padat dengan kanalisasi vaskular tinggi mirip burung/mamalia berdarah panas aktif, bukan reptil lambat. Tersirat: Teori lama bahwa dinosaurus hewan berdarah dingin lambat kemungkinan besar keliru!"
    },
    "passageSnippet": "Histological examinations of theropod dinosaur fossil bones reveal dense Haversian canals and rich vascularization comparable to modern avian and mammalian skeletons. Such bone microstructures contrast sharply with the sparse, lamellar patterns characteristic of sluggish ectothermic lizards, which grow in intermittent seasonal spurts.",
    "questionPrompt": "What can be inferred from the bone histological evidence discussed in the passage?",
    "targetSentenceForAudio": "Histological examinations of dinosaur fossil bones reveal rich vascularization comparable to modern avian skeletons.",
    "options": [
      "Theropod dinosaurs maintained metabolic growth rates far more active than those of modern cold-blooded lizards.",
      "Modern lizards descended directly from large theropod dinosaurs.",
      "Avian skeletons have no Haversian canals or vascularization structures.",
      "Fossilized dinosaur bones cannot provide reliable clues regarding ancient animal physiology."
    ],
    "correctIndex": 0,
    "babyExplanation": "🍼 Trik Detektif Makna Tersirat: Tulang dinosaurus punya saluran darah padat mirip burung dan mamalia lincah, sangat berbeda dari kadal berdarah dingin yang tumbuh lambat. Tersirat: Dinosaurus theropod punya metabolisme aktif tinggi, bukan reptil pemalas yang lamban! Opsi A tepat!"
  },
  {
    "id": "ibt-inf-5",
    "type": "reading",
    "skillCategory": "Inference",
    "bookChapter": "Chapter 2: Inference & Rhetorical Purpose Skills",
    "academicTopic": "Neurobiology: Adult Neuroplasticity",
    "workedExample": {
      "modelPrompt": "What can be inferred about adult brain recovery after localized injury?",
      "correctAnswer": "Remaining healthy brain circuits can partially reorganize to compensate for lost functions.",
      "strategyLogic": "Penelitian menunjukkan sinapsis baru terus terbentuk sepanjang hidup saat orang dewasa mempelajari keahlian baru. Tersirat: Otak dewasa tidak kaku statis, melainkan memiliki kemampuan beradaptasi dan mereorganisasi jalur saraf!"
    },
    "passageSnippet": "For decades, neuroscientists assumed that the adult human brain was structurally fixed following critical developmental windows in early adolescence. However, contemporary functional neuroimaging demonstrates that practicing novel motor skills stimulates synaptic arborization and dendritic spine remodeling in mature neocortical regions throughout life.",
    "questionPrompt": "Which of the following can be inferred from the revision of previous neurological assumptions?",
    "targetSentenceForAudio": "Contemporary functional neuroimaging demonstrates that practicing novel skills stimulates synaptic remodeling in mature brains throughout life.",
    "options": [
      "The adult human brain retains the dynamic capacity to structurally reorganize in response to sustained learning.",
      "Early adolescence is the only phase during which humans can acquire any form of motor skill.",
      "Modern neuroimaging has proven that synapses remain completely inactive after age twenty.",
      "Adults cannot improve their motor coordination through practice."
    ],
    "correctIndex": 0,
    "babyExplanation": "🍼 Trik Detektif Makna Tersirat: Dulu dikira otak dewasa kaku ga bisa berubah lagi. Ternyata neuroimaging membuktikan saat orang dewasa latihan keahlian baru, cabang sinapsis baru terus tumbuh! Tersirat: Otak manusia dewasa tetap fleksibel (plastis) dan bisa merombak jalurnya seumur hidup! Opsi A tepat!"
  },
  {
    "id": "ibt-ins-1",
    "type": "reading",
    "skillCategory": "Insert Text",
    "bookChapter": "Chapter 4: Sentence Simplification & Text Insertion",
    "academicTopic": "Solar Astrophysics: Coronal Mass Ejections",
    "workedExample": {
      "modelPrompt": "Where would the inserted sentence best fit?",
      "correctAnswer": "Kotak [C] di antara penjelasan peluncuran radiasi dan tabrakan dengan perisai bumi",
      "strategyLogic": "Kalimat baru: 'Traveling outward across space, this radiation wave reaches Earth...'. Kalimat setelahnya di [C]: 'When these cloud particles subsequently collide...'. Gelombang radiasi meluncur dulu di angkasa (kotak C), baru kemudian menabrak bumi!"
    },
    "passageSnippet": "Solar flares are catastrophic eruptions of magnetic radiation occurring in the Sun's coronal atmosphere. [A] These explosions release energetic particles equivalent to billions of megatons of conventional explosives. [B] Magnetic reconnection events within twisted coronal loops are considered the fundamental cause. [C] When these cloud particles subsequently collide with the Earth's geomagnetic shield, they can trigger widespread power grid failures and satellite communication blackouts. [D]",
    "insertedSentence": "Traveling outward across interplanetary space at millions of kilometers per hour, this radiation wave reaches Earth's orbital neighborhood in a matter of hours.",
    "questionPrompt": "Look at the four squares [A], [B], [C], and [D] in the passage. Where would the inserted sentence best fit?",
    "targetSentenceForAudio": "Traveling outward across interplanetary space, this radiation wave reaches Earth's orbital neighborhood in a matter of hours.",
    "options": [
      "[A] Setelah kalimat pertama tentang pengertian solar flare",
      "[B] Setelah kalimat kedua tentang besarnya energi ledakan",
      "[C] Setelah kalimat ketiga tentang penyebab magnetic reconnection",
      "[D] Setelah kalimat keempat di akhir teks tentang badai geomagnetik"
    ],
    "correctIndex": 2,
    "babyExplanation": "🍼 Trik Jigsaw Puzzle Kalimat (Cari Sambungan Rel Kereta): Kalimat baru menyebutkan: 'Traveling outward across space... this radiation wave reaches Earth...' (Meluncur melintasi ruang angkasa, gelombang radiasi INI sampai di bumi). Kalimat berikutnya di teks adalah [C] -> 'When these cloud particles subsequently collide with the Earth's geomagnetic shield...'. Pas banget! Partikelnya meluncur dulu melewati luar angkasa (kotak C), baru kemudian menabrak perisai bumi!"
  },
  {
    "id": "ibt-ins-2",
    "type": "reading",
    "skillCategory": "Insert Text",
    "bookChapter": "Chapter 4: Sentence Simplification & Text Insertion",
    "academicTopic": "Plate Tectonics: Oceanic Trench Subduction",
    "workedExample": {
      "modelPrompt": "Where would the inserted sentence best fit?",
      "correctAnswer": "Kotak [B] di mana lempeng samudra yang lebih padat mulai menunjam ke bawah lempeng benua",
      "strategyLogic": "Perhatikan kata kunci 'This denser lithospheric slab'. Kalimat sebelumnya harus baru saja menyebut lempeng samudra yang padat dan tua. Sambungkan persis di kotak [B]!"
    },
    "passageSnippet": "Subduction zones form where two tectonic plates converge and one plate is forced downward into the upper mantle. [A] Typically, older oceanic crust is colder and significantly more dense than adjoining continental crust. [B] As it sinks into the asthenosphere, intense frictional heating and dehydrating mineral reactions generate pressurized magma. [C] This molten rock ascends through fractures in the overriding plate to feed volcanic island arcs. [D]",
    "insertedSentence": "Driven by its immense gravitational weight, this heavier oceanic slab gradually descends at a rate of several centimeters per year.",
    "questionPrompt": "Look at the four squares [A], [B], [C], and [D] in the passage. Where would the inserted sentence best fit?",
    "targetSentenceForAudio": "Driven by its immense gravitational weight, this heavier oceanic slab gradually descends at a rate of several centimeters per year.",
    "options": [
      "[A] Di awal setelah pengertian subduksi",
      "[B] Setelah kalimat perbandingan massa jenis lempeng samudra yang lebih dingin dan padat",
      "[C] Setelah proses pelelehan magma akibat panas friksi",
      "[D] Di akhir teks setelah pembentukan busur kepulauan vulkanik"
    ],
    "correctIndex": 1,
    "babyExplanation": "🍼 Trik Jigsaw Puzzle: Kalimat yang mau disisipkan menyebut 'this heavier oceanic slab' (lempeng samudra yang lebih berat ini). Kalimat sebelum [B] baru saja menjelaskan: 'oceanic crust is colder and significantly more dense' (kerak samudra lebih padat/berat). Jadi kalimat sisipan wajib masuk di [B] untuk menjelaskan gerakan penunjamannya!"
  },
  {
    "id": "ibt-ins-3",
    "type": "reading",
    "skillCategory": "Insert Text",
    "bookChapter": "Chapter 4: Sentence Simplification & Text Insertion",
    "academicTopic": "Microbiology: Horizontal Gene Transfer",
    "workedExample": {
      "modelPrompt": "Where would the inserted sentence best fit?",
      "correctAnswer": "Kotak [C] saat plasmid pembawa gen resistensi antibiotik dipindahkan antar bakteri",
      "strategyLogic": "Cari jembatan penghubung: 'Through this conjugative bridge, circular DNA rings called plasmids are exchanged'. Kalimat sebelum [C] menyebutkan pembentukan jembatan pilus tersebut!"
    },
    "passageSnippet": "Bacterial populations can acquire immunity to antimicrobial pharmaceuticals without undergoing vertical sexual reproduction. [A] Instead, individual donor microbes extend physical tubular structures known as conjugation pili toward adjacent recipient cells. [B] [C] Once inside the new bacterial host, these foreign genetic sequences integrate into the chromosome, conferring immediate enzymatic resistance against antibiotic drugs. [D]",
    "insertedSentence": "Through these delicate microscopic bridges, specialized mobile DNA segments called resistance plasmids are directly transferred from one bacterium to another.",
    "questionPrompt": "Look at the four squares [A], [B], [C], and [D] in the passage. Where would the inserted sentence best fit?",
    "targetSentenceForAudio": "Through these delicate microscopic bridges, specialized mobile DNA segments are directly transferred.",
    "options": [
      "[A] Sebelum penjelasan tentang struktur pilus",
      "[B] Tepat setelah kalimat donor microbe memperpanjang pilus",
      "[C] Setelah pembentukan jembatan, tepat sebelum plasmid berintegrasi ke inang baru",
      "[D] Di akhir paragraf setelah resistensi enzimatik terbentuk"
    ],
    "correctIndex": 2,
    "babyExplanation": "🍼 Trik Jigsaw Puzzle: Kalimat sebelum [C] baru saja memperkenalkan 'tubular structures known as conjugation pili' (jembatan tabung). Kalimat sisipan kita berbunyi: 'Through these delicate microscopic bridges...' (Melalui jembatan mikroskopis ini...). Pasangan klop! Rel kereta tersambung rapi di [C]!"
  },
  {
    "id": "ibt-ins-4",
    "type": "reading",
    "skillCategory": "Insert Text",
    "bookChapter": "Chapter 4: Sentence Simplification & Text Insertion",
    "academicTopic": "Climatology: Volcanic Aerosol Cooling",
    "workedExample": {
      "modelPrompt": "Where would the inserted sentence best fit?",
      "correctAnswer": "Kotak [C] ketika aerosol sulfat memantulkan kembali radiasi sinar matahari ke luar angkasa",
      "strategyLogic": "Kalimat baru: 'By reflecting incoming shortwave solar rays back into space, this atmospheric veil dims global sunlight'. Kalimat berikutnya di [C] menjelaskan penurunan temperatur rata-rata bumi akibat berkurangnya sinar matahari!"
    },
    "passageSnippet": "Cataclysmic volcanic eruptions propel massive plumes of sulfur dioxide gas high into the stratosphere. [A] At these frigid altitudes, the gas reacts with ambient water vapor to produce microscopic droplets of sulfuric acid aerosol. [B] [C] Historical climatologists attribute the infamous 'Year Without a Summer' in 1816 to the widespread distribution of this stratospheric haze following Mount Tambora's eruption. [D]",
    "insertedSentence": "Acting as a semi-reflective celestial mirror, this aerosol layer scatters incoming solar radiation back into space, depressing planetary surface temperatures.",
    "questionPrompt": "Look at the four squares [A], [B], [C], and [D] in the passage. Where would the inserted sentence best fit?",
    "targetSentenceForAudio": "Acting as a reflective mirror, this aerosol layer scatters incoming solar radiation back into space.",
    "options": [
      "[A] Di awal setelah letusan Tambora",
      "[B] Tepat setelah gas sulfur bereaksi dengan uap air",
      "[C] Tepat setelah pembentukan droplet aerosol dan sebelum penjelasan tahun tanpa musim panas (1816)",
      "[D] Di ujung akhir teks"
    ],
    "correctIndex": 2,
    "babyExplanation": "🍼 Trik Jigsaw Puzzle: Droplet aerosol asam sulfat terbentuk di [B]. Lalu di [C] lapisan aerosol ini memantulkan sinar matahari kembali ke antariksa dan mendinginkan bumi. Barulah di kalimat berikutnya sejarah mencatat fenomena 'Tahun Tanpa Musim Panas 1816'. Urutan kronologisnya sempurna di [C]!"
  },
  {
    "id": "ibt-spk-1",
    "type": "speaking",
    "skillCategory": "Speaking iBT Simulator",
    "bookChapter": "TOEFL iBT Speaking Task 1 (Independent: University Policy & Career)",
    "workedExample": {
      "modelPrompt": "Should master's students be required to complete an industry internship or focus purely on coursework?",
      "correctAnswer": "Band 26-30 Model: 'In my opinion, I strongly believe that industry internships should be mandatory for all master's candidates...'",
      "strategyLogic": "1. Detik 0-5: Ambil posisi tegas.\\n2. Detik 6-25: Beri alasan 1 (aplikasi teori ke dunia nyata).\\n3. Detik 26-40: Ceritakan pengalaman pribadi saat troubleshooting proyek.\\n4. Detik 41-45: Kesimpulan penutup yang padat!"
    },
    "promptQuestion": "Some graduate university programs believe that all master's degree students should be required to complete an internship in a real industry or company, while others believe students should focus entirely on campus research and thesis coursework. Which approach do you support, and why? Use specific reasons and examples.",
    "prepSeconds": 15,
    "speechSeconds": 45,
    "babyStrategy": "🍼 Formula Sakti 4 Langkah Jawaban Speaking iBT (Skor 26-30):\\n1. Detik 0-5: Nyatakan posisi tegas ('In my view, I strongly believe that...').\\n2. Detik 6-25: Beri alasan utama (menghubungkan teori buku dengan praktek troubleshooting nyata).\\n3. Detik 26-40: Ceritakan contoh konkret pengalaman proyek/lab pribadimu.\\n4. Detik 41-45: Tutup dengan kalimat kesimpulan ringkas ('Therefore, practical internships are vital.').",
    "modelAnswer": "In my opinion, I strongly believe that master's students should be required to complete an industry internship. Firstly, practical experience allows students to apply academic theories to real-world software and engineering challenges. For example, during my project work, troubleshooting live database issues taught me far more about problem solving than textbooks alone. Additionally, working in an industry environment builds communication skills and teamwork. Therefore, internships provide indispensable preparation for future global careers.",
    "modelTranslation": "Menurut pendapat saya, saya sangat meyakini bahwa mahasiswa program magister harus diwajibkan menyelesaikan magang industri. Pertama, pengalaman praktis memungkinkan mahasiswa menerapkan teori akademik ke tantangan perangkat lunak nyata...",
    "audioSnippet": "In my opinion, I strongly believe that master's students should be required to complete an industry internship."
  },
  {
    "id": "ibt-spk-2",
    "type": "speaking",
    "skillCategory": "Speaking iBT Simulator",
    "bookChapter": "TOEFL iBT Speaking Task 2 (Campus Decision & AI Ethics)",
    "workedExample": {
      "modelPrompt": "Should AI grade university student coding assignments instead of human professors?",
      "correctAnswer": "Band 26-30 Model: 'I disagree with the proposal because automated scripts cannot assess human creative problem solving...'",
      "strategyLogic": "1. Posisi: 'I disagree with the idea because...'\\n2. Alasan: AI hanya mengecek sintaks kaku, tidak bisa memahami kreativitas atau niat mahasiswa.\\n3. Mentoring manusia memberi umpan balik emosional dan etika yang tak tergantikan."
    },
    "promptQuestion": "Do you agree or disagree with the proposal that artificial intelligence software should grade university student coding assignments instead of human professors? Explain your viewpoint with specific reasons.",
    "prepSeconds": 15,
    "speechSeconds": 45,
    "babyStrategy": "🍼 Formula Sakti Menjawab Speaking iBT:\\n1. Ambil posisi jelas: 'I disagree with the proposal because...'\\n2. Alasan 1: AI hanya memeriksa sintaks kode, tetapi tidak memahami alur berpikir kreatif atau niat mahasiswa.\\n3. Alasan 2: Umpan balik manusiawi dari dosen membangun motivasi dan etika profesional.\\n4. Kesimpulan: 'Human mentoring cannot be replaced by automated scripts.'",
    "modelAnswer": "I disagree with the idea of having artificial intelligence grade student coding assignments entirely. Although automated systems can quickly detect syntax errors, they lack the ability to evaluate a student's creative problem-solving logic and effort. Furthermore, human professors provide personalized feedback and encouragement, which inspires students to learn from their mistakes. In my own educational journey, constructive guidance from mentors was essential for my growth. Thus, human evaluation remains crucial in academic instruction.",
    "modelTranslation": "Saya tidak setuju dengan ide bahwa kecerdasan buatan harus menilai seluruh tugas koding mahasiswa. Meskipun sistem otomatis dapat dengan cepat mendeteksi error sintaks, sistem tersebut tidak memiliki kemampuan menilai logika kreatif...",
    "audioSnippet": "I disagree with the idea of having artificial intelligence grade student coding assignments entirely."
  },
  {
    "id": "ibt-spk-3",
    "type": "speaking",
    "skillCategory": "Speaking iBT Simulator",
    "bookChapter": "TOEFL iBT Speaking Task 3 (Academic Reflection & Problem Solving)",
    "workedExample": {
      "modelPrompt": "Describe a difficult technological challenge and how you solved it.",
      "correctAnswer": "Band 26-30 Model: 'A memorable technical challenge I encountered was diagnosing an unexpected database slowdown during peak factory hours...'",
      "strategyLogic": "Gunakan metode STAR (Situation -> Task -> Action -> Result) yang ringkas dan padat dalam 45 detik!"
    },
    "promptQuestion": "Describe a difficult technological challenge or complex project problem you encountered, and explain what steps you took to successfully overcome it.",
    "prepSeconds": 15,
    "speechSeconds": 45,
    "babyStrategy": "🍼 Cerita STAR (Situation, Task, Action, Result) Bahasa Bayi:\\n1. Masalah: Sistem jaringan atau website mengalami error tidak terduga.\\n2. Tindakan: Lakukan analisis log data langkah demi langkah, jangan panik, dan koordinasi dengan tim.\\n3. Hasil: Masalah terselesaikan dan performa sistem meningkat 100%!",
    "modelAnswer": "A memorable technical challenge I faced was diagnosing an unexpected database slowdown during peak hours. To resolve it, I first examined the query logs systematically to locate bottlenecks. Then, I applied indexing to large tables and optimized repetitive data queries. As a result, query latency decreased significantly and the web portal returned to normal operation. This experience taught me that systematic analytical thinking and staying calm under pressure are key to solving complex technical issues.",
    "modelTranslation": "Tantangan teknis berkesan yang saya hadapi adalah mendiagnosis perlambatan database yang tidak terduga pada jam sibuk. Untuk menyelesaikannya, pertama saya memeriksa log kueri secara sistematis...",
    "audioSnippet": "A memorable technical challenge I faced was diagnosing an unexpected database slowdown during peak hours."
  },
  {
    "id": "ibt-spk-4",
    "type": "speaking",
    "skillCategory": "Speaking iBT Simulator",
    "bookChapter": "TOEFL iBT Speaking Task 4 (Workplace Model: Remote vs On-Site)",
    "workedExample": {
      "modelPrompt": "Do you prefer working remotely from home or working on-site in an office/factory?",
      "correctAnswer": "Band 26-30 Model: 'I prefer a hybrid or on-site model because direct collaboration in a physical setting fosters stronger teamwork and faster troubleshooting...'",
      "strategyLogic": "Nyatakan keunggulan interaksi fisik (hands-on troubleshooting hardware dan koordinasi langsung dengan staf produksi) yang tidak bisa digantikan oleh panggilan video jarak jauh."
    },
    "promptQuestion": "Some professionals prefer working remotely from home, while others prefer working on-site in an office or factory setting. Which do you prefer and why? Provide specific reasons and examples to support your choice.",
    "prepSeconds": 15,
    "speechSeconds": 45,
    "babyStrategy": "🍼 Strategi Bicara Speaking iBT:\\n1. Nyatakan preferensi: On-site atau Hybrid.\\n2. Alasan 1: Di bidang IT dan manufaktur, perangkat keras fisik (kabel LAN, server, printer barcode) harus dicek langsung di lokasi.\\n3. Alasan 2: Komunikasi tatap muka dengan tim lapangan memecahkan masalah 3x lebih cepat.\\n4. Kesimpulan: On-site memberikan pengalaman operasional yang jauh lebih kaya.",
    "modelAnswer": "Personally, I prefer working on-site in a technology or manufacturing facility rather than working entirely remotely. In IT and systems administration, physical presence is essential for hands-on tasks such as configuring server racks, inspecting network cables, and troubleshooting hardware devices directly. Furthermore, face-to-face communication allows for immediate coordination with factory supervisors during unexpected system errors. Therefore, being present on-site provides faster problem resolution and deeper collaboration.",
    "modelTranslation": "Secara pribadi, saya lebih memilih bekerja langsung di lokasi (on-site) pada fasilitas teknologi atau manufaktur daripada bekerja jarak jauh sepenuhnya...",
    "audioSnippet": "Personally, I prefer working on-site in a technology or manufacturing facility rather than working entirely remotely."
  },
  {
    "id": "ibt-spk-5",
    "type": "speaking",
    "skillCategory": "Speaking iBT Simulator",
    "bookChapter": "TOEFL iBT Speaking Task 5 (Educational Technology & Innovation)",
    "workedExample": {
      "modelPrompt": "Do digital learning tools and interactive apps improve student learning outcomes?",
      "correctAnswer": "Band 26-30 Model: 'I strongly believe that interactive digital applications dramatically enhance learning efficiency because they provide instant feedback and hands-on engagement...'",
      "strategyLogic": "Kaitkan dengan pengalamanmu merancang antarmuka ramah pengguna (UI/UX) dan portal pembelajaran interaktif yang membuat materi rumit menjadi mudah dipahami anak pemula."
    },
    "promptQuestion": "Do you believe that interactive educational software and gamified learning platforms significantly improve student comprehension compared to traditional textbook-only methods? State your opinion with supporting reasons.",
    "prepSeconds": 15,
    "speechSeconds": 45,
    "babyStrategy": "🍼 Strategi Bicara Skor 28+:\\n1. Sepakat 100%: Gamifikasi dan software interaktif membuat siswa aktif mencoba, bukan sekadar menghafal pasif.\\n2. Alasan 1: Umpan balik langsung (instant feedback) saat salah membuat siswa langsung paham letak errornya.\\n3. Alasan 2: Visualisasi interaktif memudahkan konsep abstrak seperti kueri database dan alur jaringan.\\n4. Kesimpulan: Software edukasi modern adalah masa depan pembelajaran efektif.",
    "modelAnswer": "I firmly believe that interactive educational software and gamified platforms significantly enhance student learning. Unlike passive textbook reading, interactive platforms provide immediate feedback, allowing learners to understand their mistakes right away and correct them step by step. Moreover, visual simulations make abstract concepts—such as database queries and network topologies—much easier to grasp. In my own experience building interactive tools, students learn noticeably faster when they actively engage with the content. Hence, digital learning platforms are exceptionally effective.",
    "modelTranslation": "Saya sangat meyakini bahwa perangkat lunak pembelajaran interaktif dan platform berbasis gamifikasi secara signifikan meningkatkan pemahaman siswa...",
    "audioSnippet": "I firmly believe that interactive educational software and gamified platforms significantly enhance student learning."
  }
];

// ===================================================================
// 5. TANTANGAN DIKTE SUARA & MENGETIK BERJENJANG (EVC LIBRETEXTS EDITION)
// Sesuai Buku: "Listening & Speaking for Beginning English Language Learners"
// (Maria Antonini de Pino et al. - Evergreen Valley College)
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
