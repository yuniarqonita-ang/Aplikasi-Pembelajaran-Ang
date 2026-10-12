/* ===================================================================
   SENTENCE_BUILDER.JS - Game Gerbong Kereta Kalimat (Sentence Train Builder)
   Pondasi Belajar Pola Kalimat Bahasa Inggris dari Nol (Level SD Kelas 4 - 5)
   Pola S+V+O, Pasangan To Be, Verb 1 vs Verb 2, dan Present Continuous
   Dilengkapi Nalar Bayi Kodi, Balok Magnetik Interaktif, & Audio Dual Accent.
   =================================================================== */

// 40 Tantangan Gerbong Kereta Kalimat Berjenjang (SD Kelas 4 - 5)
const sentenceTrainChallenges = [
  // LEVEL 1: POLA DASAR S + V + O (Subject + Verb 1 + Object)
  {
    id: "st-1",
    level: 1,
    levelTitle: "Level 1: Pondasi Kalimat Dasar (S + V + O)",
    category: "Pola S + V + O",
    pattern: "Subjek (Pelaku) + Verb 1 (Aksi) + Objek (Benda)",
    correctSentence: ["I", "read", "a book"],
    translation: "Aku membaca sebuah buku.",
    wordPool: ["a book", "I", "read"],
    wordRoles: {
      "I": { role: "Subjek (Pelaku)", color: "#38bdf8", icon: "👤", desc: "Masinis lokomotif (Siapa yang melakukan aksi)" },
      "read": { role: "Verb 1 (Kata Kerja Asli)", color: "#fbbf24", icon: "⚡", desc: "Mesin penggerak (Melakukan apa)" },
      "a book": { role: "Objek (Benda)", color: "#34d399", icon: "📦", desc: "Gerbong muatan (Benda yang dibaca)" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Kereta bahasa Inggris selalu diawali oleh Masinis (Subjek 'I'), lalu Mesin Penggerak (Kata Kerja 'read'), dan diakhiri Gerbong Muatan (Objek 'a book')!",
    grammarPill: "Formula Dasar: S + V + O"
  },
  {
    id: "st-2",
    level: 1,
    levelTitle: "Level 1: Pondasi Kalimat Dasar (S + V + O)",
    category: "Pola S + V + O",
    pattern: "Subjek + Verb 1 + Objek",
    correctSentence: ["They", "play", "football"],
    translation: "Mereka bermain sepak bola.",
    wordPool: ["play", "football", "They"],
    wordRoles: {
      "They": { role: "Subjek (Pelaku)", color: "#38bdf8", icon: "👥", desc: "Subjek jamak (Banyak orang)" },
      "play": { role: "Verb 1 (Kata Kerja)", color: "#fbbf24", icon: "⚡", desc: "Aksi bermain" },
      "football": { role: "Objek (Benda)", color: "#34d399", icon: "⚽", desc: "Bola yang dimainkan" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: 'They' (Mereka) jalan paling depan sebagai pengemudi kereta, disusul aksi 'play', dan bola 'football' di belakang!",
    grammarPill: "Formula: S + V + O"
  },
  {
    id: "st-3",
    level: 1,
    levelTitle: "Level 1: Pondasi Kalimat Dasar (S + V + O)",
    category: "Pola S + V + O",
    pattern: "Subjek + Verb 1 + Objek",
    correctSentence: ["We", "eat", "apples"],
    translation: "Kita makan apel.",
    wordPool: ["apples", "eat", "We"],
    wordRoles: {
      "We": { role: "Subjek (Pelaku)", color: "#38bdf8", icon: "👥", desc: "Kita / Kami" },
      "eat": { role: "Verb 1 (Kata Kerja)", color: "#fbbf24", icon: "🍎", desc: "Aksi makan" },
      "apples": { role: "Objek (Benda)", color: "#34d399", icon: "📦", desc: "Buah apel" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Pelaku 'We' selalu memimpin, diikuti aksi mengunyah 'eat', baru makanannya 'apples'!",
    grammarPill: "Formula: S + V + O"
  },
  {
    id: "st-4",
    level: 1,
    levelTitle: "Level 1: Pondasi Kalimat Dasar (S + V + O)",
    category: "Pola S + V + O",
    pattern: "Subjek + Verb 1 + Objek",
    correctSentence: ["You", "drink", "water"],
    translation: "Kamu minum air.",
    wordPool: ["drink", "water", "You"],
    wordRoles: {
      "You": { role: "Subjek (Pelaku)", color: "#38bdf8", icon: "👤", desc: "Kamu" },
      "drink": { role: "Verb 1 (Kata Kerja)", color: "#fbbf24", icon: "💧", desc: "Aksi minum" },
      "water": { role: "Objek (Benda)", color: "#34d399", icon: "🥤", desc: "Air putih" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Jangan balik 'Water drink you' ya, nanti airnya yang minum kamu! Selalu Subjek (You) + Verb (drink) + Objek (water)!",
    grammarPill: "Formula: S + V + O"
  },
  {
    id: "st-5",
    level: 1,
    levelTitle: "Level 1: Pondasi Kalimat Dasar (S + V + O)",
    category: "Pola S + V + O",
    pattern: "Subjek + Verb 1 + Objek",
    correctSentence: ["Students", "study", "English"],
    translation: "Murid-murid belajar bahasa Inggris.",
    wordPool: ["study", "Students", "English"],
    wordRoles: {
      "Students": { role: "Subjek (Pelaku)", color: "#38bdf8", icon: "🎓", desc: "Murid-murid (Jamak)" },
      "study": { role: "Verb 1 (Kata Kerja)", color: "#fbbf24", icon: "📚", desc: "Aksi belajar" },
      "English": { role: "Objek (Materi)", color: "#34d399", icon: "🇬🇧", desc: "Bahasa Inggris" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Pelakunya 'Students' di lokomotif, aksinya 'study' di gerbong tengah, dan pelajaran 'English' di gerbong belakang!",
    grammarPill: "Formula: S + V + O"
  },
  {
    id: "st-6",
    level: 1,
    levelTitle: "Level 1: Pondasi Kalimat Dasar (S + V + O)",
    category: "Pola S + V + O",
    pattern: "Subjek + Verb 1 + Objek",
    correctSentence: ["Cats", "catch", "mice"],
    translation: "Kucing-kucing menangkap tikus-tikus.",
    wordPool: ["mice", "Cats", "catch"],
    wordRoles: {
      "Cats": { role: "Subjek (Pelaku)", color: "#38bdf8", icon: "🐱", desc: "Kucing (Jamak)" },
      "catch": { role: "Verb 1 (Kata Kerja)", color: "#fbbf24", icon: "⚡", desc: "Aksi menangkap" },
      "mice": { role: "Objek (Benda/Hewan)", color: "#34d399", icon: "🐭", desc: "Tikus-tikus (Bentuk jamak dari mouse)" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: 'Cats' (Si Pemburu) di depan, 'catch' (menangkap) di tengah, dan 'mice' (tikus) di belakang!",
    grammarPill: "Formula: S + V + O"
  },
  {
    id: "st-7",
    level: 1,
    levelTitle: "Level 1: Pondasi Kalimat Dasar (S + V + O)",
    category: "Pola S + V + O",
    pattern: "Subjek + Verb 1 + Objek",
    correctSentence: ["Birds", "build", "nests"],
    translation: "Burung-burung membangun sarang.",
    wordPool: ["build", "nests", "Birds"],
    wordRoles: {
      "Birds": { role: "Subjek (Pelaku)", color: "#38bdf8", icon: "🐦", desc: "Burung (Jamak)" },
      "build": { role: "Verb 1 (Kata Kerja)", color: "#fbbf24", icon: "🔨", desc: "Aksi membangun" },
      "nests": { role: "Objek (Benda)", color: "#34d399", icon: "🪺", desc: "Sarang burung" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Si pembuat (Birds) ➡️ Aksi membuat (build) ➡️ Hasil buatan (nests)!",
    grammarPill: "Formula: S + V + O"
  },
  {
    id: "st-8",
    level: 1,
    levelTitle: "Level 1: Pondasi Kalimat Dasar (S + V + O)",
    category: "Pola S + V + O",
    pattern: "Subjek + Verb 1 + Objek",
    correctSentence: ["Children", "love", "ice cream"],
    translation: "Anak-anak menyukai es krim.",
    wordPool: ["ice cream", "love", "Children"],
    wordRoles: {
      "Children": { role: "Subjek (Pelaku)", color: "#38bdf8", icon: "🧒", desc: "Anak-anak (Jamak dari child)" },
      "love": { role: "Verb 1 (Kata Kerja)", color: "#fbbf24", icon: "❤️", desc: "Menyukai / mencintai" },
      "ice cream": { role: "Objek (Benda)", color: "#34d399", icon: "🍦", desc: "Es krim manis" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Anak-anak (Children) mengemudikan lokomotif, perasaan suka (love) jadi penggerak mesin, dan (ice cream) ada di gerbong belakang!",
    grammarPill: "Formula: S + V + O"
  },

  // LEVEL 2: SAHABAT SEJATI "TO BE" (am / is / are)
  {
    id: "st-9",
    level: 2,
    levelTitle: "Level 2: Sahabat Sejati 'To Be' (am / is / are)",
    category: "Pasangan To Be",
    pattern: "I + am + Sifat / Keadaan",
    correctSentence: ["I", "am", "happy"],
    translation: "Aku merasa senang.",
    wordPool: ["happy", "I", "am"],
    wordRoles: {
      "I": { role: "Subjek", color: "#38bdf8", icon: "👤", desc: "Aku (Orang Pertama)" },
      "am": { role: "To Be (Pasangan Setia I)", color: "#f472b6", icon: "🤝", desc: "Hanya boleh gandeng dengan 'I'!" },
      "happy": { role: "Adjective (Kata Sifat)", color: "#a78bfa", icon: "😊", desc: "Kondisi gembira" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Huruf 'I' itu punya sahabat seumur hidup yang namanya 'am'! Jangan pernah pasangkan 'I is' atau 'I are' ya, nanti 'am' sedih!",
    grammarPill: "Pasangan Emas: I + am"
  },
  {
    id: "st-10",
    level: 2,
    levelTitle: "Level 2: Sahabat Sejati 'To Be' (am / is / are)",
    category: "Pasangan To Be",
    pattern: "She + is + Profesi / Pelengkap",
    correctSentence: ["She", "is", "a doctor"],
    translation: "Dia adalah seorang dokter.",
    wordPool: ["is", "a doctor", "She"],
    wordRoles: {
      "She": { role: "Subjek Tunggal (1 Orang Perempuan)", color: "#38bdf8", icon: "👩", desc: "Dia perempuan (sendirian)" },
      "is": { role: "To Be Tunggal", color: "#f472b6", icon: "🤝", desc: "Sahabat orang sendirian (He/She/It)" },
      "a doctor": { role: "Noun (Profesi)", color: "#a78bfa", icon: "🩺", desc: "Seorang dokter" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Karena 'She' itu sendirian (1 orang cewek), pasangannya adalah 'is'! Rumus: She + is + a doctor!",
    grammarPill: "Pasangan Emas: He/She/It + is"
  },
  {
    id: "st-11",
    level: 2,
    levelTitle: "Level 2: Sahabat Sejati 'To Be' (am / is / are)",
    category: "Pasangan To Be",
    pattern: "He + is + Kata Sifat",
    correctSentence: ["He", "is", "smart"],
    translation: "Dia pandai.",
    wordPool: ["smart", "is", "He"],
    wordRoles: {
      "He": { role: "Subjek Tunggal (1 Orang Laki-laki)", color: "#38bdf8", icon: "👨", desc: "Dia laki-laki (sendirian)" },
      "is": { role: "To Be Tunggal", color: "#f472b6", icon: "🤝", desc: "Sahabat He/She/It" },
      "smart": { role: "Adjective (Kata Sifat)", color: "#a78bfa", icon: "💡", desc: "Pintar / cerdas" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: 'He' itu sendirian (1 orang cowok), jadi sahabat To Be-nya adalah 'is'!",
    grammarPill: "Pasangan Emas: He + is"
  },
  {
    id: "st-12",
    level: 2,
    levelTitle: "Level 2: Sahabat Sejati 'To Be' (am / is / are)",
    category: "Pasangan To Be",
    pattern: "They + are + Kata Benda Jamak",
    correctSentence: ["They", "are", "students"],
    translation: "Mereka adalah murid-murid.",
    wordPool: ["students", "They", "are"],
    wordRoles: {
      "They": { role: "Subjek Jamak (Ramai-ramai)", color: "#38bdf8", icon: "👥", desc: "Mereka (Banyak orang)" },
      "are": { role: "To Be Jamak", color: "#f472b6", icon: "🤝", desc: "Sahabat orang ramai (You/We/They)" },
      "students": { role: "Noun Jamak", color: "#a78bfa", icon: "🎒", desc: "Murid-murid" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Kalau orangnya ramai seperti 'They', kita pakai To Be yang ramai juga yaitu 'are'!",
    grammarPill: "Pasangan Emas: You/We/They + are"
  },
  {
    id: "st-13",
    level: 2,
    levelTitle: "Level 2: Sahabat Sejati 'To Be' (am / is / are)",
    category: "Pasangan To Be",
    pattern: "We + are + Kata Sifat",
    correctSentence: ["We", "are", "ready"],
    translation: "Kita sudah siap.",
    wordPool: ["ready", "are", "We"],
    wordRoles: {
      "We": { role: "Subjek Jamak", color: "#38bdf8", icon: "👥", desc: "Kita / Kami" },
      "are": { role: "To Be Jamak", color: "#f472b6", icon: "🤝", desc: "Pasangan setia We" },
      "ready": { role: "Adjective (Kata Sifat)", color: "#a78bfa", icon: "🚀", desc: "Siap berangkat" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: 'We' itu kita bersama (ramai-ramai), jadi otomatis gandeng dengan 'are'!",
    grammarPill: "Pasangan Emas: We + are"
  },
  {
    id: "st-14",
    level: 2,
    levelTitle: "Level 2: Sahabat Sejati 'To Be' (am / is / are)",
    category: "Pasangan To Be",
    pattern: "It + is + Keterangan Benda/Hewan",
    correctSentence: ["The cat", "is", "cute"],
    translation: "Kucing itu imut.",
    wordPool: ["cute", "The cat", "is"],
    wordRoles: {
      "The cat": { role: "Subjek Hewan Tunggal (1 Kucing)", color: "#38bdf8", icon: "🐱", desc: "Kucingnya cuma 1 ekor" },
      "is": { role: "To Be Tunggal", color: "#f472b6", icon: "🤝", desc: "Untuk 1 benda / 1 hewan" },
      "cute": { role: "Adjective (Kata Sifat)", color: "#a78bfa", icon: "✨", desc: "Lucu dan menggemaskan" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Karena kucingnya cuma 1 ekor ('The cat'), sahabatnya adalah 'is'. Kalau kucingnya banyak ('The cats'), barulah pakai 'are'!",
    grammarPill: "Benda Tunggal ➡️ is"
  },
  {
    id: "st-15",
    level: 2,
    levelTitle: "Level 2: Sahabat Sejati 'To Be' (am / is / are)",
    category: "Pasangan To Be",
    pattern: "You + are + Pelengkap",
    correctSentence: ["You", "are", "kind"],
    translation: "Kamu baik hati.",
    wordPool: ["kind", "You", "are"],
    wordRoles: {
      "You": { role: "Subjek (Kamu / Kalian)", color: "#38bdf8", icon: "👤", desc: "Lawan bicara" },
      "are": { role: "To Be", color: "#f472b6", icon: "🤝", desc: "You selalu berpasangan dengan 'are'!" },
      "kind": { role: "Adjective (Kata Sifat)", color: "#a78bfa", icon: "💖", desc: "Baik hati" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: 'You' dalam aturan bahasa Inggris selalu berpasangan dengan 'are', tidak pernah 'You is'!",
    grammarPill: "Pasangan Emas: You + are"
  },
  {
    id: "st-16",
    level: 2,
    levelTitle: "Level 2: Sahabat Sejati 'To Be' (am / is / are)",
    category: "Pasangan To Be",
    pattern: "Subjek Jamak + are + Tempat",
    correctSentence: ["We", "are", "at school"],
    translation: "Kami berada di sekolah.",
    wordPool: ["at school", "We", "are"],
    wordRoles: {
      "We": { role: "Subjek Jamak", color: "#38bdf8", icon: "👥", desc: "Kita" },
      "are": { role: "To Be", color: "#f472b6", icon: "🤝", desc: "Penghubung keberadaan" },
      "at school": { role: "Keterangan Tempat", color: "#a78bfa", icon: "🏫", desc: "Di sekolah" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Kalau mau bilang 'berada di suatu tempat' tanpa aksi, pakai To Be! We + are + at school!",
    grammarPill: "Formula: Subjek + To Be + Tempat"
  },

  // LEVEL 3: VERB 1 RUTINITAS & RAHASIA AKHIRAN -s (Present Simple)
  {
    id: "st-17",
    level: 3,
    levelTitle: "Level 3: Verb 1 Rutinitas & Rahasia Akhiran -s",
    category: "Verb 1 (Present Simple)",
    pattern: "He + Verb 1 (-s) + Objek",
    correctSentence: ["He", "eats", "an orange"],
    translation: "Dia (laki-laki) makan sebuah jeruk.",
    wordPool: ["an orange", "He", "eats"],
    wordRoles: {
      "He": { role: "Subjek Tunggal (Jomblo/1 Orang)", color: "#38bdf8", icon: "👨", desc: "Pelaku sendirian" },
      "eats": { role: "Verb 1 + s (Ditemani huruf s)", color: "#fbbf24", icon: "🍊", desc: "Karena He sendirian, kata kerjanya ditemani akhiran -s!" },
      "an orange": { role: "Objek", color: "#34d399", icon: "📦", desc: "Satu buah jeruk" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Kenapa 'eat' ditambah '-s' jadi 'eats'? Karena 'He' itu jomblo (1 orang sendirian), kasihan kesepian, jadi kata kerjanya kita temani pakai huruf '-s'!",
    grammarPill: "Rahasia Jomblo: He/She/It ➡️ Verb + s"
  },
  {
    id: "st-18",
    level: 3,
    levelTitle: "Level 3: Verb 1 Rutinitas & Rahasia Akhiran -s",
    category: "Verb 1 (Present Simple)",
    pattern: "They + Verb 1 Polos + Objek",
    correctSentence: ["They", "eat", "oranges"],
    translation: "Mereka makan jeruk-jeruk.",
    wordPool: ["eat", "oranges", "They"],
    wordRoles: {
      "They": { role: "Subjek Jamak (Sudah Ramai)", color: "#38bdf8", icon: "👥", desc: "Pelakunya banyak orang" },
      "eat": { role: "Verb 1 Polos (Tanpa -s)", color: "#fbbf24", icon: "🍊", desc: "Karena sudah ramai, tidak butuh teman -s lagi!" },
      "oranges": { role: "Objek Jamak", color: "#34d399", icon: "📦", desc: "Jeruk-jeruk" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Bandingkan dengan soal sebelumnya! Karena 'They' itu sudah ramai banyak orang, kata kerjanya 'eat' polos tanpa '-s'!",
    grammarPill: "Aturan Ramai: They/We/I/You ➡️ Verb Polos"
  },
  {
    id: "st-19",
    level: 3,
    levelTitle: "Level 3: Verb 1 Rutinitas & Rahasia Akhiran -s",
    category: "Verb 1 (Present Simple)",
    pattern: "She + Verb 1 (-s) + Objek",
    correctSentence: ["She", "reads", "a comic"],
    translation: "Dia (perempuan) membaca sebuah komik.",
    wordPool: ["reads", "a comic", "She"],
    wordRoles: {
      "She": { role: "Subjek Tunggal (1 Orang)", color: "#38bdf8", icon: "👩", desc: "Pelaku sendirian" },
      "reads": { role: "Verb 1 + s", color: "#fbbf24", icon: "📖", desc: "Read ditambah akhiran -s" },
      "a comic": { role: "Objek", color: "#34d399", icon: "📦", desc: "Buku komik" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: 'She' cuma 1 orang, jadi kata kerja 'read' harus dikasih teman akhiran '-s' jadi 'reads'!",
    grammarPill: "She ➡️ read + s = reads"
  },
  {
    id: "st-20",
    level: 3,
    levelTitle: "Level 3: Verb 1 Rutinitas & Rahasia Akhiran -s",
    category: "Verb 1 (Present Simple)",
    pattern: "We + Verb 1 Polos + Objek",
    correctSentence: ["We", "read", "comics"],
    translation: "Kami membaca komik-komik.",
    wordPool: ["read", "comics", "We"],
    wordRoles: {
      "We": { role: "Subjek Jamak (Kita)", color: "#38bdf8", icon: "👥", desc: "Banyak orang" },
      "read": { role: "Verb 1 Polos", color: "#fbbf24", icon: "📖", desc: "Tanpa akhiran -s" },
      "comics": { role: "Objek Jamak", color: "#34d399", icon: "📦", desc: "Banyak komik" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: 'We' sudah ramai, jadi 'read' tidak boleh ditambah -s! Cukup 'We read comics'!",
    grammarPill: "We ➡️ Verb Polos"
  },
  {
    id: "st-21",
    level: 3,
    levelTitle: "Level 3: Verb 1 Rutinitas & Rahasia Akhiran -s",
    category: "Verb 1 (Present Simple)",
    pattern: "Subjek Tunggal + Verb 1 (-es) + Tempat",
    correctSentence: ["He", "goes", "to school"],
    translation: "Dia pergi ke sekolah.",
    wordPool: ["to school", "goes", "He"],
    wordRoles: {
      "He": { role: "Subjek Tunggal", color: "#38bdf8", icon: "👨", desc: "Dia laki-laki" },
      "goes": { role: "Verb 1 + es", color: "#fbbf24", icon: "🚶", desc: "Kata 'go' berakhiran huruf vokal O, jadi ditambah -es!" },
      "to school": { role: "Keterangan Tujuan", color: "#34d399", icon: "🏫", desc: "Ke sekolah" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Kalau kata kerjanya berakhiran huruf 'o' seperti 'go', temannya adalah '-es' jadi 'goes'!",
    grammarPill: "Aturan Vokal: go ➡️ goes"
  },
  {
    id: "st-22",
    level: 3,
    levelTitle: "Level 3: Verb 1 Rutinitas & Rahasia Akhiran -s",
    category: "Verb 1 (Present Simple)",
    pattern: "Subjek Tunggal + Verb 1 (-es) + Objek",
    correctSentence: ["She", "watches", "television"],
    translation: "Dia menonton televisi.",
    wordPool: ["watches", "She", "television"],
    wordRoles: {
      "She": { role: "Subjek Tunggal", color: "#38bdf8", icon: "👩", desc: "1 orang perempuan" },
      "watches": { role: "Verb 1 + es", color: "#fbbf24", icon: "📺", desc: "Kata 'watch' berakhiran bunyi 'ch', jadi ditambah -es!" },
      "television": { role: "Objek", color: "#34d399", icon: "📡", desc: "Televisi" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Kata berakhiran 'ch' seperti 'watch' biar enak diucapkan lidah ditambah '-es' jadi 'watches'!",
    grammarPill: "watch + es = watches"
  },
  {
    id: "st-23",
    level: 3,
    levelTitle: "Level 3: Verb 1 Rutinitas & Rahasia Akhiran -s",
    category: "Verb 1 (Present Simple)",
    pattern: "I + Verb 1 Polos + Waktu",
    correctSentence: ["I", "sleep", "early"],
    translation: "Aku tidur lebih awal.",
    wordPool: ["sleep", "early", "I"],
    wordRoles: {
      "I": { role: "Subjek (Aku)", color: "#38bdf8", icon: "👤", desc: "Meskipun 1 orang, 'I' istimewa tidak pakai -s!" },
      "sleep": { role: "Verb 1 Polos", color: "#fbbf24", icon: "😴", desc: "Aksi tidur" },
      "early": { role: "Keterangan Waktu", color: "#34d399", icon: "⏰", desc: "Awal waktu / tidak begadang" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Ingat keistimewaan 'I'! Walaupun 'I' itu 1 orang, 'I' tidak suka ditemani huruf -s pada Verb 1! Jadi tetap 'I sleep', bukan 'I sleeps'!",
    grammarPill: "I + Verb Polos (Spesial)"
  },
  {
    id: "st-24",
    level: 3,
    levelTitle: "Level 3: Verb 1 Rutinitas & Rahasia Akhiran -s",
    category: "Verb 1 (Present Simple)",
    pattern: "Budi (1 Nama Orang) + Verb 1 (-s) + Objek",
    correctSentence: ["Budi", "helps", "his father"],
    translation: "Budi membantu ayahnya.",
    wordPool: ["helps", "his father", "Budi"],
    wordRoles: {
      "Budi": { role: "Subjek (1 Nama Orang)", color: "#38bdf8", icon: "👦", desc: "Nama 1 orang tunggal" },
      "helps": { role: "Verb 1 + s", color: "#fbbf24", icon: "🤝", desc: "Help + s" },
      "his father": { role: "Objek", color: "#34d399", icon: "👨‍👦", desc: "Ayahnya" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Nama 1 orang (Budi, Siti, Rudi) itu sama seperti He/She, jadi kata kerjanya wajib ditambah '-s' (helps)!",
    grammarPill: "1 Nama Orang ➡️ Verb + s"
  },

  // LEVEL 4: PRESENT CONTINUOUS (SEDANG TERJADI DETIK INI JUGA - AM/IS/ARE + VERB-ING)
  {
    id: "st-25",
    level: 4,
    levelTitle: "Level 4: Present Continuous (Sedang Berlangsung Sekarang)",
    category: "Present Continuous (Sedang)",
    pattern: "I + am + Verb-ing + Objek",
    correctSentence: ["I", "am", "eating", "noodles"],
    translation: "Aku sedang makan mi.",
    wordPool: ["eating", "am", "noodles", "I"],
    wordRoles: {
      "I": { role: "Subjek", color: "#38bdf8", icon: "👤", desc: "Aku" },
      "am": { role: "To Be", color: "#f472b6", icon: "🤝", desc: "Pasangan wajib I" },
      "eating": { role: "Verb-ing (Aksi yang Sedang Jalan)", color: "#fbbf24", icon: "🍜", desc: "Eat + ing (Sedang mengunyah detik ini)" },
      "noodles": { role: "Objek", color: "#34d399", icon: "🥢", desc: "Mi lezat" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Kenapa tiba-tiba ada akhiran '-ing'? Huruf '-ing' itu ibarat roda sepeda yang lagi berputar kencang! Artinya: DETIK INI JUGA lagi dikerjakan! Rumusnya wajib gandeng: Subjek + To Be + Verb-ing!",
    grammarPill: "Formula: Subjek + (am/is/are) + Verb-ing"
  },
  {
    id: "st-26",
    level: 4,
    levelTitle: "Level 4: Present Continuous (Sedang Berlangsung Sekarang)",
    category: "Present Continuous (Sedang)",
    pattern: "She + is + Verb-ing + Objek",
    correctSentence: ["She", "is", "reading", "a book"],
    translation: "Dia sedang membaca sebuah buku.",
    wordPool: ["reading", "a book", "is", "She"],
    wordRoles: {
      "She": { role: "Subjek", color: "#38bdf8", icon: "👩", desc: "Dia perempuan" },
      "is": { role: "To Be Tunggal", color: "#f472b6", icon: "🤝", desc: "Pasangan She" },
      "reading": { role: "Verb-ing", color: "#fbbf24", icon: "📖", desc: "Sedang membaca detik ini" },
      "a book": { role: "Objek", color: "#34d399", icon: "📦", desc: "Sebuah buku" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Jangan lupa gandengkan 'is' sebelum 'reading'! Tidak boleh bilang 'She reading a book' tanpa 'is' ya, keretanya bisa mogok!",
    grammarPill: "She + is + reading"
  },
  {
    id: "st-27",
    level: 4,
    levelTitle: "Level 4: Present Continuous (Sedang Berlangsung Sekarang)",
    category: "Present Continuous (Sedang)",
    pattern: "They + are + Verb-ing + Objek",
    correctSentence: ["They", "are", "playing", "football"],
    translation: "Mereka sedang bermain sepak bola.",
    wordPool: ["playing", "are", "football", "They"],
    wordRoles: {
      "They": { role: "Subjek Jamak", color: "#38bdf8", icon: "👥", desc: "Mereka" },
      "are": { role: "To Be Jamak", color: "#f472b6", icon: "🤝", desc: "Pasangan They" },
      "playing": { role: "Verb-ing", color: "#fbbf24", icon: "⚽", desc: "Sedang bermain detik ini" },
      "football": { role: "Objek", color: "#34d399", icon: "🏆", desc: "Sepak bola" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: 'They' gandeng dengan 'are', lalu aksinya ditempeli '-ing' jadi 'playing'!",
    grammarPill: "They + are + playing"
  },
  {
    id: "st-28",
    level: 4,
    levelTitle: "Level 4: Present Continuous (Sedang Berlangsung Sekarang)",
    category: "Present Continuous (Sedang)",
    pattern: "He + is + Verb-ing + Objek",
    correctSentence: ["He", "is", "writing", "a story"],
    translation: "Dia sedang menulis sebuah cerita.",
    wordPool: ["writing", "is", "He", "a story"],
    wordRoles: {
      "He": { role: "Subjek", color: "#38bdf8", icon: "👨", desc: "Dia laki-laki" },
      "is": { role: "To Be Tunggal", color: "#f472b6", icon: "🤝", desc: "Pasangan He" },
      "writing": { role: "Verb-ing", color: "#fbbf24", icon: "✍️", desc: "Write berubah jadi writing (huruf e melebur)" },
      "a story": { role: "Objek", color: "#34d399", icon: "📜", desc: "Sebuah cerita" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Kata 'write' berakhiran 'e', saat ditambah '-ing' huruf 'e'-nya terbang menghilang jadi 'writing'!",
    grammarPill: "write ➡️ writing"
  },
  {
    id: "st-29",
    level: 4,
    levelTitle: "Level 4: Present Continuous (Sedang Berlangsung Sekarang)",
    category: "Present Continuous (Sedang)",
    pattern: "We + are + Verb-ing + Keterangan",
    correctSentence: ["We", "are", "learning", "English"],
    translation: "Kita sedang belajar bahasa Inggris.",
    wordPool: ["learning", "are", "English", "We"],
    wordRoles: {
      "We": { role: "Subjek", color: "#38bdf8", icon: "👥", desc: "Kita" },
      "are": { role: "To Be Jamak", color: "#f472b6", icon: "🤝", desc: "Pasangan We" },
      "learning": { role: "Verb-ing", color: "#fbbf24", icon: "🧠", desc: "Sedang menyerap ilmu" },
      "English": { role: "Objek", color: "#34d399", icon: "🇬🇧", desc: "Bahasa Inggris" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Seperti kamu sekarang ini: We are learning English! Gerbong: We ➡️ are ➡️ learning ➡️ English!",
    grammarPill: "We + are + learning"
  },
  {
    id: "st-30",
    level: 4,
    levelTitle: "Level 4: Present Continuous (Sedang Berlangsung Sekarang)",
    category: "Present Continuous (Sedang)",
    pattern: "The cat + is + Verb-ing + Tempat",
    correctSentence: ["The cat", "is", "sleeping", "now"],
    translation: "Kucing itu sedang tidur sekarang.",
    wordPool: ["sleeping", "is", "now", "The cat"],
    wordRoles: {
      "The cat": { role: "Subjek Tunggal", color: "#38bdf8", icon: "🐱", desc: "1 ekor kucing" },
      "is": { role: "To Be", color: "#f472b6", icon: "🤝", desc: "Untuk 1 hewan" },
      "sleeping": { role: "Verb-ing", color: "#fbbf24", icon: "💤", desc: "Sedang bermimpi indah" },
      "now": { role: "Keterangan Waktu", color: "#34d399", icon: "⏰", desc: "Sekarang (Detik ini)" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Kata 'now' (sekarang) adalah tanda sakti bahwa aksi sedang berlangsung dan harus pakai Verb-ing!",
    grammarPill: "Tanda Waktu: now / right now"
  },
  {
    id: "st-31",
    level: 4,
    levelTitle: "Level 4: Present Continuous (Sedang Berlangsung Sekarang)",
    category: "Present Continuous (Sedang)",
    pattern: "Mother + is + Verb-ing + Objek",
    correctSentence: ["Mother", "is", "cooking", "soup"],
    translation: "Ibu sedang memasak sup.",
    wordPool: ["cooking", "is", "soup", "Mother"],
    wordRoles: {
      "Mother": { role: "Subjek Tunggal (Ibu)", color: "#38bdf8", icon: "👩‍🍳", desc: "Ibu tersayang" },
      "is": { role: "To Be", color: "#f472b6", icon: "🤝", desc: "Pasangan 1 orang" },
      "cooking": { role: "Verb-ing", color: "#fbbf24", icon: "🍲", desc: "Sedang merebus sup di kompor" },
      "soup": { role: "Objek", color: "#34d399", icon: "🥣", desc: "Sup hangat" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Ibu sedang sibuk di dapur detik ini: Mother + is + cooking + soup!",
    grammarPill: "Mother + is + cooking"
  },
  {
    id: "st-32",
    level: 4,
    levelTitle: "Level 4: Present Continuous (Sedang Berlangsung Sekarang)",
    category: "Present Continuous (Sedang)",
    pattern: "You + are + Verb-ing + Objek",
    correctSentence: ["You", "are", "listening", "to music"],
    translation: "Kamu sedang mendengarkan musik.",
    wordPool: ["listening", "are", "to music", "You"],
    wordRoles: {
      "You": { role: "Subjek", color: "#38bdf8", icon: "🎧", desc: "Kamu" },
      "are": { role: "To Be", color: "#f472b6", icon: "🤝", desc: "Pasangan You" },
      "listening": { role: "Verb-ing", color: "#fbbf24", icon: "🎵", desc: "Sedang menikmati lagu" },
      "to music": { role: "Objek / Pelengkap", color: "#34d399", icon: "🎶", desc: "Alunan musik" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: 'Listen' selalu suka bergandengan dengan 'to'! You + are + listening + to music!",
    grammarPill: "You + are + listening"
  },

  // LEVEL 5: VERB 2 (MESIN WAKTU MASA LALU / KEMARIN) & WAS/WERE
  {
    id: "st-33",
    level: 5,
    levelTitle: "Level 5: Verb 2 (Mesin Waktu Kemarin / Masa Lalu)",
    category: "Verb 2 (Past Simple)",
    pattern: "Subjek + Verb 2 (Irregular) + Objek + Waktu Lampau",
    correctSentence: ["I", "ate", "noodles", "yesterday"],
    translation: "Aku makan mi kemarin.",
    wordPool: ["noodles", "ate", "yesterday", "I"],
    wordRoles: {
      "I": { role: "Subjek", color: "#38bdf8", icon: "👤", desc: "Aku" },
      "ate": { role: "Verb 2 (Bentuk Lampau dari Eat)", color: "#f59e0b", icon: "🍜", desc: "Bentuk waktu kemarin: eat berubah jadi ate!" },
      "noodles": { role: "Objek", color: "#34d399", icon: "🥢", desc: "Mi yang sudah habis dimakan" },
      "yesterday": { role: "Keterangan Waktu Lampau", color: "#c084fc", icon: "🕰️", desc: "Kemarin (Peristiwa sudah lewat)" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Kapan pakai Verb 2? Kalau kejadiannya SUDAH SELESAI kemarin (yesterday)! Kata 'eat' naik mesin waktu berubah wujud jadi 'ate'! Tidak boleh pakai 'eat' lagi ya kalau ada 'yesterday'!",
    grammarPill: "Mesin Waktu: eat ➡️ ate"
  },
  {
    id: "st-34",
    level: 5,
    levelTitle: "Level 5: Verb 2 (Mesin Waktu Kemarin / Masa Lalu)",
    category: "Verb 2 (Past Simple)",
    pattern: "Subjek + Verb 2 (Regular +ed) + Objek + Waktu Lampau",
    correctSentence: ["She", "watched", "cartoons", "last night"],
    translation: "Dia menonton kartun tadi malam.",
    wordPool: ["cartoons", "last night", "watched", "She"],
    wordRoles: {
      "She": { role: "Subjek", color: "#38bdf8", icon: "👩", desc: "Dia perempuan" },
      "watched": { role: "Verb 2 (Regular: +ed)", color: "#f59e0b", icon: "📺", desc: "Watch tinggal ditambah -ed jadi watched" },
      "cartoons": { role: "Objek", color: "#34d399", icon: "✨", desc: "Film kartun" },
      "last night": { role: "Keterangan Waktu Lampau", color: "#c084fc", icon: "🌙", desc: "Tadi malam (Sudah lewat)" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Sebagian besar kata kerja di masa lalu itu baik hati: tinggal ditambah akhiran '-ed' di belakangnya! watch ➡️ watched!",
    grammarPill: "Regular Verb: watch + ed = watched"
  },
  {
    id: "st-35",
    level: 5,
    levelTitle: "Level 5: Verb 2 (Mesin Waktu Kemarin / Masa Lalu)",
    category: "Verb 2 (Past Simple)",
    pattern: "Subjek + Verb 2 (Irregular: Go ➡️ Went) + Tempat + Waktu",
    correctSentence: ["They", "went", "to the zoo", "yesterday"],
    translation: "Mereka pergi ke kebun binatang kemarin.",
    wordPool: ["to the zoo", "yesterday", "went", "They"],
    wordRoles: {
      "They": { role: "Subjek Jamak", color: "#38bdf8", icon: "👥", desc: "Mereka" },
      "went": { role: "Verb 2 (Bentuk Lampau dari Go)", color: "#f59e0b", icon: "🚗", desc: "Kata 'go' kemarin berubah ajaib jadi 'went'!" },
      "to the zoo": { role: "Keterangan Tempat", color: "#34d399", icon: "🦁", desc: "Ke kebun binatang" },
      "yesterday": { role: "Keterangan Waktu", color: "#c084fc", icon: "🕰️", desc: "Kemarin" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Perhatikan! 'Go' (pergi) kalau kemarin berubah total menjadi 'went'! Jangan pernah bilang 'goed' ya, bentuk resminya adalah 'went'!",
    grammarPill: "Mesin Waktu: go ➡️ went"
  },
  {
    id: "st-36",
    level: 5,
    levelTitle: "Level 5: Verb 2 (Mesin Waktu Kemarin / Masa Lalu)",
    category: "Verb 2 (Past Simple)",
    pattern: "Subjek + Verb 2 (Play ➡️ Played) + Objek + Waktu",
    correctSentence: ["He", "played", "football", "yesterday"],
    translation: "Dia bermain sepak bola kemarin.",
    wordPool: ["played", "yesterday", "football", "He"],
    wordRoles: {
      "He": { role: "Subjek", color: "#38bdf8", icon: "👨", desc: "Dia laki-laki" },
      "played": { role: "Verb 2 (play + ed)", color: "#f59e0b", icon: "⚡", desc: "Bermain kemarin" },
      "football": { role: "Objek", color: "#34d399", icon: "⚽", desc: "Sepak bola" },
      "yesterday": { role: "Keterangan Waktu", color: "#c084fc", icon: "🕰️", desc: "Kemarin" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Di masa lalu (Verb 2), tidak peduli orangnya jomblo atau ramai, SEMUANYA pakai bentuk lampau yang sama! He played, They played!",
    grammarPill: "Verb 2 Adil: Semua subjek pakai Verb 2 yang sama"
  },
  {
    id: "st-37",
    level: 5,
    levelTitle: "Level 5: Verb 2 (Mesin Waktu Kemarin / Masa Lalu)",
    category: "Verb 2 (Past Simple)",
    pattern: "Subjek + Verb 2 (Buy ➡️ Bought) + Objek + Waktu",
    correctSentence: ["We", "bought", "ice cream", "yesterday"],
    translation: "Kita membeli es krim kemarin.",
    wordPool: ["bought", "ice cream", "yesterday", "We"],
    wordRoles: {
      "We": { role: "Subjek", color: "#38bdf8", icon: "👥", desc: "Kita" },
      "bought": { role: "Verb 2 (Buy berubah jadi Bought)", color: "#f59e0b", icon: "🛒", desc: "Membeli di masa lalu" },
      "ice cream": { role: "Objek", color: "#34d399", icon: "🍦", desc: "Es krim" },
      "yesterday": { role: "Keterangan Waktu", color: "#c084fc", icon: "🕰️", desc: "Kemarin" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Kata 'buy' (beli) berubah jadi 'bought' di masa lalu! Susunannya: We ➡️ bought ➡️ ice cream ➡️ yesterday!",
    grammarPill: "Mesin Waktu: buy ➡️ bought"
  },
  {
    id: "st-38",
    level: 5,
    levelTitle: "Level 5: Verb 2 (Mesin Waktu Kemarin / Masa Lalu)",
    category: "To Be Masa Lalu (Was / Were)",
    pattern: "Subjek Tunggal + was + Sifat + Waktu Lampau",
    correctSentence: ["I", "was", "tired", "last night"],
    translation: "Aku lelah tadi malam.",
    wordPool: ["tired", "was", "last night", "I"],
    wordRoles: {
      "I": { role: "Subjek", color: "#38bdf8", icon: "👤", desc: "Aku" },
      "was": { role: "To Be Masa Lalu (Bentuk Lampau dari am & is)", color: "#ec4899", icon: "🕰️", desc: "Kalau kemarin, am dan is berubah jadi was!" },
      "tired": { role: "Adjective (Kata Sifat)", color: "#34d399", icon: "🥱", desc: "Capek / lelah" },
      "last night": { role: "Keterangan Waktu", color: "#c084fc", icon: "🌙", desc: "Tadi malam" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Kenapa pakai 'was' bukan 'am'? Karena ada kata 'last night' (tadi malam)! Sahabat 'am' dan 'is' di masa lalu berubah menjadi 'was'!",
    grammarPill: "Kemarin: am / is ➡️ was"
  },
  {
    id: "st-39",
    level: 5,
    levelTitle: "Level 5: Verb 2 (Mesin Waktu Kemarin / Masa Lalu)",
    category: "To Be Masa Lalu (Was / Were)",
    pattern: "Subjek Jamak + were + Sifat + Waktu Lampau",
    correctSentence: ["They", "were", "happy", "yesterday"],
    translation: "Mereka merasa senang kemarin.",
    wordPool: ["happy", "were", "yesterday", "They"],
    wordRoles: {
      "They": { role: "Subjek Jamak", color: "#38bdf8", icon: "👥", desc: "Mereka" },
      "were": { role: "To Be Masa Lalu (Bentuk Lampau dari are)", color: "#ec4899", icon: "🕰️", desc: "Kalau kemarin, are berubah jadi were!" },
      "happy": { role: "Adjective", color: "#34d399", icon: "😄", desc: "Senang" },
      "yesterday": { role: "Keterangan Waktu", color: "#c084fc", icon: "🕰️", desc: "Kemarin" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Kalau orangnya ramai seperti 'They' dan kejadiannya kemarin ('yesterday'), 'are' berubah wujud menjadi 'were'!",
    grammarPill: "Kemarin: are ➡️ were"
  },
  {
    id: "st-40",
    level: 5,
    levelTitle: "Level 5: Verb 2 (Mesin Waktu Kemarin / Masa Lalu)",
    category: "Verb 2 (Past Simple)",
    pattern: "Subjek + Verb 2 (+ed) + Objek + Waktu Lampau",
    correctSentence: ["She", "finished", "her homework", "last night"],
    translation: "Dia menyelesaikan pekerjaan rumahnya tadi malam.",
    wordPool: ["her homework", "finished", "last night", "She"],
    wordRoles: {
      "She": { role: "Subjek", color: "#38bdf8", icon: "👩", desc: "Dia" },
      "finished": { role: "Verb 2 (finish + ed)", color: "#f59e0b", icon: "✅", desc: "Selesai tuntas" },
      "her homework": { role: "Objek", color: "#34d399", icon: "📝", desc: "PR-nya" },
      "last night": { role: "Keterangan Waktu", color: "#c084fc", icon: "🌙", desc: "Tadi malam" }
    },
    babyLogic: "🍼 Nalar Bayi Kodi: Hebat! Rangkaian gerbong: Siapa pelakunya (She) ➡️ Aksi selesainya (finished) ➡️ Apa yang diselesaikan (her homework) ➡️ Kapan (last night)!",
    grammarPill: "She + finished + her homework + last night"
  }
];

// STATE MANAGEMENT GAME GERBONG KERETA
window.TRAIN_GAME_STATE = {
  currentChallengeIndex: 0,
  levelFilter: "all",
  // Map per challenge: { assembled: [word, word, ...], checked: false, isCorrect: false }
  states: {},
  showTheoryGuide: false
};

// INITIALIZATION & RENDERER
function renderSentenceTrainGame() {
  const container = document.getElementById("submode-sentence");
  if (!container) return;

  const state = window.TRAIN_GAME_STATE;
  const filteredChallenges = (state.levelFilter === "all")
    ? sentenceTrainChallenges.map((c, i) => ({ item: c, originalIndex: i }))
    : sentenceTrainChallenges
        .map((c, i) => ({ item: c, originalIndex: i }))
        .filter(x => String(x.item.level) === String(state.levelFilter));

  if (state.currentChallengeIndex < 0 || state.currentChallengeIndex >= sentenceTrainChallenges.length) {
    state.currentChallengeIndex = 0;
  }

  let currentPos = filteredChallenges.findIndex(x => x.originalIndex === state.currentChallengeIndex);
  if (currentPos === -1 && filteredChallenges.length > 0) {
    state.currentChallengeIndex = filteredChallenges[0].originalIndex;
    currentPos = 0;
  }

  const chal = sentenceTrainChallenges[state.currentChallengeIndex] || sentenceTrainChallenges[0];

  // Inisialisasi state per tantangan
  if (!state.states[state.currentChallengeIndex]) {
    state.states[state.currentChallengeIndex] = {
      assembled: [], // daftar balok kata yang terpasang di gerbong
      checked: false,
      isCorrect: false
    };
  }
  const curChalState = state.states[state.currentChallengeIndex];

  // Hitung balok kata yang masih tersisa di stasiun (belum dipasang ke gerbong)
  const remainingInStation = chal.wordPool.filter(word => {
    const totalCount = chal.wordPool.filter(w => w === word).length;
    const assembledCount = curChalState.assembled.filter(w => w === word).length;
    return assembledCount < totalCount;
  });

  const isAllAssembled = (curChalState.assembled.length === chal.correctSentence.length);

  container.innerHTML = `
    <!-- HEADER & NAVIGASI LEVEL SD KELAS 4-5 -->
    <div class="train-game-header-card">
      <div class="train-header-top">
        <div class="train-badge-group">
          <span class="train-level-badge">🚂 ${chal.levelTitle}</span>
          <span class="train-pattern-pill">📐 ${chal.grammarPill}</span>
        </div>
        <button class="train-guide-toggle-btn" onclick="toggleTrainTheoryGuide()">
          📖 Buku Saku Pola Kalimat Bayi Kodi
        </button>
      </div>

      <!-- PANDUAN TEORI POLA BAHASA INGGRIS RAMAH SD KELAS 4-5 (COLLAPSIBLE) -->
      <div id="train-theory-guide-box" style="display: ${state.showTheoryGuide ? 'block' : 'none'};">
        <div class="theory-guide-card">
          <div class="theory-guide-header">
            <h4>🍼 Panduan Pola Kalimat Bahasa Inggris dari Nol (Level SD 4 - 5)</h4>
            <span style="font-size: 0.8rem; color: var(--accent-yellow);">Pahami 5 aturan mudah ini biar gak bingung lagi!</span>
          </div>

          <div class="theory-grid-rules">
            <div class="theory-rule-item">
              <div class="theory-rule-title">🚂 1. Pola Dasar S + V + O</div>
              <p>Di bahasa Inggris, urutan kata tidak boleh sembarangan. Selalu: <strong>Siapa (Subjek)</strong> ➡️ <strong>Bikin Apa (Verb)</strong> ➡️ <strong>Benda Apa (Objek)</strong>.</p>
              <code>Contoh: I (Subjek) + read (Verb) + a book (Objek)</code>
            </div>

            <div class="theory-rule-item">
              <div class="theory-rule-title">🤝 2. Sahabat Sejati "To Be"</div>
              <p>Kalau kalimatnya tidak ada aksi tendang/makan (hanya menyebut sifat atau profesi), wajib pakai jembatan <strong>To Be</strong>:</p>
              <ul style="margin: 4px 0 0 16px; padding: 0; font-size: 0.85rem;">
                <li><strong>I</strong> ➡️ sahabatnya <strong>am</strong></li>
                <li><strong>He / She / It / 1 Orang</strong> ➡️ sahabatnya <strong>is</strong></li>
                <li><strong>You / We / They / Banyak Orang</strong> ➡️ sahabatnya <strong>are</strong></li>
              </ul>
            </div>

            <div class="theory-rule-item">
              <div class="theory-rule-title">☀️ 3. Verb 1 & Rahasia Akhiran -s</div>
              <p>Dipakai untuk <strong>kebiasaan sehari-hari</strong> (rutinitas).</p>
              <ul style="margin: 4px 0 0 16px; padding: 0; font-size: 0.85rem;">
                <li>Pelaku Jomblo (<strong>He, She, It</strong>): Kesepian, jadi kata kerjanya ditemani akhiran <strong>-s</strong> (<em>He plays, She reads</em>).</li>
                <li>Pelaku Ramai (<strong>I, You, We, They</strong>): Sudah ramai, kata kerjanya polos tanpa <strong>-s</strong> (<em>They play, We read</em>).</li>
              </ul>
            </div>

            <div class="theory-rule-item">
              <div class="theory-rule-title">⏳ 4. Kenapa Ada Verb-ing (Continuous)?</div>
              <p>Akhiran <strong>-ing</strong> dipakai ketika aksi itu <strong>SEDANG TERJADI DETIK INI JUGA</strong>! Huruf -ing ibarat roda berputar. Tandanya ada kata <em>now / right now</em>.</p>
              <code>Rumus: Subjek + (am/is/are) + Verb-ing (I am eating now)</code>
            </div>

            <div class="theory-rule-item" style="grid-column: span 2;">
              <div class="theory-rule-title">🕰️ 5. Verb 2 & Was/Were (Mesin Waktu Kemarin / Masa Lalu)</div>
              <p>Dipakai saat kejadiannya <strong>SUDAH SELESAI di masa lampau</strong> (kemarin, tadi malam). Tandanya: <em>yesterday, last night, last week</em>.</p>
              <ul style="margin: 4px 0 0 16px; padding: 0; font-size: 0.85rem;">
                <li>Kata kerja berubah bentuk: <strong>eat ➡️ ate</strong>, <strong>go ➡️ went</strong>, <strong>watch ➡️ watched (+ed)</strong>.</li>
                <li>To Be di masa lalu: <strong>am/is berubah jadi was</strong>, sedangkan <strong>are berubah jadi were</strong>.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- FILTER LEVEL & NAVIGASI SOAL -->
      <div class="challenge-nav-bar" style="margin-top: 14px;">
        <div class="challenge-nav-controls">
          <label style="font-size: 0.82rem; font-weight: 700; color: var(--accent-cyan);">Pilih Bab Level:</label>
          <select class="challenge-page-select" onchange="filterTrainLevel(this.value)">
            <option value="all" ${state.levelFilter === 'all' ? 'selected' : ''}>📂 Semua Level (${sentenceTrainChallenges.length} Kalimat)</option>
            <option value="1" ${state.levelFilter === '1' ? 'selected' : ''}>Level 1: Pola Dasar S+V+O (8 Kalimat)</option>
            <option value="2" ${state.levelFilter === '2' ? 'selected' : ''}>Level 2: Pasangan To Be am/is/are (8 Kalimat)</option>
            <option value="3" ${state.levelFilter === '3' ? 'selected' : ''}>Level 3: Verb 1 & Akhiran -s (8 Kalimat)</option>
            <option value="4" ${state.levelFilter === '4' ? 'selected' : ''}>Level 4: Present Continuous (8 Kalimat)</option>
            <option value="5" ${state.levelFilter === '5' ? 'selected' : ''}>Level 5: Verb 2 Masa Lalu Kemarin (8 Kalimat)</option>
          </select>
        </div>

        <div class="challenge-nav-controls">
          <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem;" onclick="navTrainChallenge(-1)" ${currentPos <= 0 ? 'disabled' : ''}>
            ⬅️ Prev
          </button>
          <select class="challenge-page-select" onchange="setTrainChallengeIndex(Number(this.value))">
            ${filteredChallenges.map((x) => {
              const isDone = state.states[x.originalIndex]?.isCorrect;
              return `
                <option value="${x.originalIndex}" ${x.originalIndex === state.currentChallengeIndex ? 'selected' : ''}>
                  ${isDone ? '✓ ' : ''}Kalimat #${x.originalIndex + 1}: ${x.item.category} (${x.item.correctSentence.length} Balok)
                </option>
              `;
            }).join('')}
          </select>
          <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem;" onclick="navTrainChallenge(1)" ${currentPos >= filteredChallenges.length - 1 ? 'disabled' : ''}>
            Next ➡️
          </button>
        </div>
      </div>

      <!-- QUICK PILLS ROW -->
      <div class="challenge-pills-row" style="margin-top: 10px;">
        ${filteredChallenges.map((x) => {
          const isDone = state.states[x.originalIndex]?.isCorrect;
          return `
            <button class="quick-cmd-btn ${x.originalIndex === state.currentChallengeIndex ? 'active' : ''}" 
                    style="padding: 5px 10px; font-size: 0.78rem; font-weight: 700; white-space: nowrap; ${isDone ? 'border-color: var(--accent-green); color: #86efac;' : ''}" 
                    onclick="setTrainChallengeIndex(${x.originalIndex})">
              ${isDone ? '✓ ' : ''}#${x.originalIndex + 1}
            </button>
          `;
        }).join('')}
      </div>
    </div>

    <!-- AREA PERMAINAN KERETA API KALIMAT (TRAIN SIMULATOR) -->
    <div class="train-simulator-card">
      <div class="train-sim-mission-bar">
        <div>
          <div style="font-size: 0.78rem; font-weight: 800; color: var(--accent-cyan); text-transform: uppercase;">Misi Rangkai Kalimat:</div>
          <h3 style="color: #fff; margin: 4px 0 2px; font-size: 1.15rem;">"${chal.translation}"</h3>
          <div style="font-size: 0.82rem; color: var(--text-muted);">Pola Target: <span style="color: var(--accent-yellow); font-weight: 700;">${chal.pattern}</span></div>
        </div>
        <div style="text-align: right;">
          <span style="font-size: 0.78rem; color: var(--text-muted);">Status Rangkaian:</span>
          <div style="font-size: 1.1rem; font-weight: 800; color: ${isAllAssembled ? 'var(--accent-green)' : 'var(--accent-yellow)'};">
            ${curChalState.assembled.length} / ${chal.correctSentence.length} Gerbong
          </div>
        </div>
      </div>

      <!-- REL KERETA API DENGAN GERBONG BERURUTAN -->
      <div class="railway-track-stage">
        <div class="train-engine-head">
          <span class="engine-smoke">💨</span>
          <span class="engine-body">🚂</span>
          <span class="engine-label">Lokomotif</span>
        </div>

        <div class="train-cars-row" id="train-assembled-row">
          ${chal.correctSentence.map((_, slotIdx) => {
            const assembledWord = curChalState.assembled[slotIdx];
            const roleInfo = assembledWord ? chal.wordRoles[assembledWord] : null;

            if (assembledWord) {
              return `
                <div class="train-car is-occupied animate-dock" 
                     onclick="detachWordFromTrain(${slotIdx})"
                     title="Klik untuk turunkan balok '${assembledWord}' kembali ke stasiun">
                  <div class="car-coupler-left">🔗</div>
                  <div class="car-body" style="border-color: ${roleInfo ? roleInfo.color : 'var(--accent-cyan)'}; background: ${roleInfo ? roleInfo.color + '22' : 'rgba(56, 189, 248, 0.15)'};">
                    <span class="car-word-text">${assembledWord}</span>
                    <span class="car-role-pill" style="color: ${roleInfo ? roleInfo.color : '#fff'};">
                      ${roleInfo ? roleInfo.icon + ' ' + roleInfo.role : 'Kata'}
                    </span>
                    <span class="car-detach-hint">✕ Lepas</span>
                  </div>
                  <div class="car-wheel-base">
                    <span class="car-wheel">⚙️</span>
                    <span class="car-wheel">⚙️</span>
                  </div>
                  <div class="car-coupler-right">🔗</div>
                </div>
              `;
            } else {
              return `
                <div class="train-car is-empty">
                  <div class="car-coupler-left">🔗</div>
                  <div class="car-body empty-placeholder">
                    <span class="car-slot-number">Gerbong #${slotIdx + 1}</span>
                    <span class="car-drop-hint">🧲 Gandengkan Balok</span>
                  </div>
                  <div class="car-wheel-base">
                    <span class="car-wheel empty-wheel">⚙️</span>
                    <span class="car-wheel empty-wheel">⚙️</span>
                  </div>
                  <div class="car-coupler-right">🔗</div>
                </div>
              `;
            }
          }).join('')}
        </div>
      </div>

      <!-- KETERANGAN LENGKAP BALOK TERPILIH (LIVE INSIGHT) -->
      ${curChalState.assembled.length > 0 ? `
        <div class="assembled-sentence-preview">
          <span style="font-size: 0.8rem; color: var(--accent-cyan); font-weight: 700;">Kalimat yang sedang dirangkai:</span>
          <div style="font-size: 1.15rem; font-weight: 800; color: #fff; margin: 4px 0;">
            "${curChalState.assembled.join(' ')}"
          </div>
        </div>
      ` : ''}

      <!-- STASIUN BALOK KATA MAGNETIK (STATION WORD POOL) -->
      <div class="station-pool-section">
        <div class="station-pool-header">
          <span style="font-size: 0.82rem; font-weight: 800; color: var(--accent-yellow);">
            🚉 Stasiun Balok Kata Magnetik:
          </span>
          <span style="font-size: 0.78rem; color: var(--text-muted);">
            Klik balok di bawah untuk menggandengkannya ke gerbong kereta!
          </span>
        </div>

        <div class="station-blocks-grid">
          ${remainingInStation.length === 0 ? `
            <div style="padding: 12px; color: var(--accent-green); font-size: 0.9rem; font-weight: 700;">
              ✨ Semua balok kata sudah digandengkan ke gerbong! Tekan tombol 'Jalankan Kereta' di bawah ya!
            </div>
          ` : remainingInStation.map((word, bIdx) => {
            const roleInfo = chal.wordRoles[word];
            return `
              <button class="station-word-block animate-hover" 
                      onclick="attachWordToTrain('${word.replace(/'/g, "\\'")}')"
                      style="border-color: ${roleInfo ? roleInfo.color : 'rgba(255,255,255,0.2)'};">
                <span class="station-block-text">${word}</span>
                <span class="station-block-role" style="color: ${roleInfo ? roleInfo.color : 'var(--text-muted)'};">
                  ${roleInfo ? roleInfo.icon + ' ' + roleInfo.role : 'Kata'}
                </span>
                <span class="station-block-tap">👆 Pasang</span>
              </button>
            `;
          }).join('')}
        </div>
      </div>

      <!-- KONTROL UTAMA CEK GERBONG, AUDIO, & RESET -->
      <div class="train-action-controls-row">
        <button class="btn-primary train-check-btn" 
                style="background: linear-gradient(135deg, #10b981, #059669); border: none; font-size: 0.95rem; font-weight: 800; padding: 12px 24px; box-shadow: 0 4px 16px rgba(16, 185, 129, 0.4);"
                onclick="checkTrainSentence()">
          🚂 Jalankan Kereta & Cek Pola Kalimat!
        </button>

        <button class="btn-secondary" style="padding: 8px 14px; font-size: 0.82rem; display: flex; align-items: center; gap: 6px;"
                onclick="speakCurrentTrainSentence()">
          🔊 Dengarkan Kalimat (${speechEngine.englishAccent === 'en-GB' ? 'UK' : 'US'})
        </button>

        <button class="btn-secondary" style="padding: 8px 14px; font-size: 0.82rem;"
                onclick="resetCurrentTrainSentence()">
          🔄 Kosongkan Semua Gerbong
        </button>

        ${curChalState.isCorrect && state.currentChallengeIndex < sentenceTrainChallenges.length - 1 ? `
          <button class="btn-primary" style="background: linear-gradient(135deg, #38bdf8, #0284c7); padding: 8px 18px; font-size: 0.85rem;"
                  onclick="setTrainChallengeIndex(${state.currentChallengeIndex + 1})">
            🚀 Lanjut ke Kalimat #${state.currentChallengeIndex + 2} ➡️
          </button>
        ` : ''}
      </div>

      <!-- FEEDBACK DAN PEMBAHASAN MENDALAM NALAR BAYI KODI -->
      <div id="train-feedback-box" style="margin-top: 20px; display: ${curChalState.checked ? 'block' : 'none'};">
        ${curChalState.checked ? `
          <div class="train-result-card ${curChalState.isCorrect ? 'is-correct-card' : 'is-wrong-card'}">
            <div class="train-result-header">
              <span class="train-result-icon">${curChalState.isCorrect ? '🎉🚂💨' : '⚠️🚂💥'}</span>
              <div>
                <h4 style="margin: 0; color: ${curChalState.isCorrect ? '#4ade80' : '#f87171'};">
                  ${curChalState.isCorrect ? 'LUAR BIASA! RANGKAIAN KERETA MELUNCUR SEMPURNA!' : 'OOPS! RANGKAIAN GERBONG BELUM SEIMBANG!'}
                </h4>
                <p style="margin: 2px 0 0; font-size: 0.85rem; color: #cbd5e1;">
                  ${curChalState.isCorrect ? 'Susunan kata dan pola tata bahasamu 100% tepat sesuai standar bahasa Inggris!' : 'Tenang saja, kita tata ulang baloknya pelan-pelan ya!'}
                </p>
              </div>
            </div>

            <div class="train-result-body">
              <div class="result-comparison-row">
                <div class="result-col">
                  <span class="result-label">Susunan Gerbong Kamu:</span>
                  <div class="result-value ${curChalState.isCorrect ? 'text-green' : 'text-red'}">
                    "${curChalState.assembled.join(' ')}"
                  </div>
                </div>
                <div class="result-col">
                  <span class="result-label">Susunan Standar yang Benar:</span>
                  <div class="result-value text-green">
                    "${chal.correctSentence.join(' ')}"
                  </div>
                </div>
              </div>

              <!-- NALAR BAYI KODI PEMBAHASAN -->
              <div class="train-baby-logic-box">
                <div style="font-weight: 800; color: var(--accent-yellow); margin-bottom: 6px;">
                  🍼 Penjelasan Nalar Bayi Kodi:
                </div>
                <p style="margin: 0 0 6px; color: #fef08a; font-size: 0.92rem; line-height: 1.5;">
                  ${chal.babyLogic}
                </p>
                <div style="font-size: 0.82rem; color: #e2e8f0; font-style: italic;">
                  Arti Kalimat: "${chal.translation}" • Pola: ${chal.pattern}
                </div>
              </div>

              <!-- TOMBOL BANTUAN SAAT SALAH -->
              ${!curChalState.isCorrect ? `
                <div style="display: flex; gap: 10px; margin-top: 14px; flex-wrap: wrap;">
                  <button class="btn-primary" style="background: linear-gradient(135deg, #f59e0b, #d97706); border: none; font-size: 0.85rem; padding: 8px 16px;" onclick="resetCurrentTrainSentence()">
                    🔄 Bongkar & Rangkai Ulang
                  </button>
                  <button class="btn-secondary" style="font-size: 0.85rem; padding: 8px 16px;" onclick="revealTrainCorrectOrder()">
                    💡 Pasangkan Otomatis Susunan yang Benar
                  </button>
                </div>
              ` : ''}
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

// HANDLERS INTERAKSI BALOK KATA & KERETA
window.attachWordToTrain = function(word) {
  if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();
  const state = window.TRAIN_GAME_STATE;
  const curChalState = state.states[state.currentChallengeIndex];
  const chal = sentenceTrainChallenges[state.currentChallengeIndex];
  if (!curChalState || !chal) return;

  if (curChalState.assembled.length < chal.correctSentence.length) {
    curChalState.assembled.push(word);
    curChalState.checked = false; // Reset status evaluasi agar user bisa menata dengan tenang
    renderSentenceTrainGame();
  }
};

window.detachWordFromTrain = function(slotIndex) {
  if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();
  const state = window.TRAIN_GAME_STATE;
  const curChalState = state.states[state.currentChallengeIndex];
  if (!curChalState) return;

  if (slotIndex >= 0 && slotIndex < curChalState.assembled.length) {
    curChalState.assembled.splice(slotIndex, 1);
    curChalState.checked = false;
    renderSentenceTrainGame();
  }
};

window.checkTrainSentence = function() {
  const state = window.TRAIN_GAME_STATE;
  const curChalState = state.states[state.currentChallengeIndex];
  const chal = sentenceTrainChallenges[state.currentChallengeIndex];
  if (!curChalState || !chal) return;

  if (curChalState.assembled.length < chal.correctSentence.length) {
    if (window.sfx && typeof sfx.playNotice === "function") sfx.playNotice();
    alert(`Masih ada gerbong yang kosong! Gandengkan semua ${chal.correctSentence.length} balok kata dari stasiun dulu ya.`);
    return;
  }

  // Bandingkan urutan gerbong dengan kunci jawaban
  const userSentence = curChalState.assembled.join(" ").trim().toLowerCase();
  const targetSentence = chal.correctSentence.join(" ").trim().toLowerCase();
  const isCorrect = (userSentence === targetSentence);

  curChalState.checked = true;
  curChalState.isCorrect = isCorrect;

  if (isCorrect) {
    if (window.sfx && typeof sfx.playSuccess === "function") sfx.playSuccess();
    if (typeof triggerConfetti === "function") triggerConfetti();
    // Bacakan kalimat dengan audio TTS aksen aktif
    speechEngine.speakText(chal.correctSentence.join(" "), 0.8, null, speechEngine.englishAccent);
  } else {
    if (window.sfx && typeof sfx.playError === "function") sfx.playError();
  }

  renderSentenceTrainGame();

  // Scroll lembut ke kartu feedback
  const fb = document.getElementById("train-feedback-box");
  if (fb) fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
};

window.speakCurrentTrainSentence = function() {
  const state = window.TRAIN_GAME_STATE;
  const curChalState = state.states[state.currentChallengeIndex];
  const chal = sentenceTrainChallenges[state.currentChallengeIndex];
  const textToSpeak = (curChalState && curChalState.assembled.length > 0)
    ? curChalState.assembled.join(" ")
    : chal.correctSentence.join(" ");

  speechEngine.speakText(textToSpeak, 0.8, null, speechEngine.englishAccent);
};

window.resetCurrentTrainSentence = function() {
  if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();
  const state = window.TRAIN_GAME_STATE;
  const curChalState = state.states[state.currentChallengeIndex];
  if (curChalState) {
    curChalState.assembled = [];
    curChalState.checked = false;
    curChalState.isCorrect = false;
    renderSentenceTrainGame();
  }
};

window.revealTrainCorrectOrder = function() {
  if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();
  const state = window.TRAIN_GAME_STATE;
  const curChalState = state.states[state.currentChallengeIndex];
  const chal = sentenceTrainChallenges[state.currentChallengeIndex];
  if (curChalState && chal) {
    curChalState.assembled = [...chal.correctSentence];
    curChalState.checked = true;
    curChalState.isCorrect = true;
    renderSentenceTrainGame();
    speechEngine.speakText(chal.correctSentence.join(" "), 0.8, null, speechEngine.englishAccent);
  }
};

window.toggleTrainTheoryGuide = function() {
  if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();
  const state = window.TRAIN_GAME_STATE;
  state.showTheoryGuide = !state.showTheoryGuide;
  const box = document.getElementById("train-theory-guide-box");
  if (box) {
    box.style.display = state.showTheoryGuide ? "block" : "none";
  }
};

window.filterTrainLevel = function(lvl) {
  if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();
  const state = window.TRAIN_GAME_STATE;
  state.levelFilter = lvl;
  renderSentenceTrainGame();
};

window.navTrainChallenge = function(delta) {
  if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();
  const state = window.TRAIN_GAME_STATE;
  const filtered = (state.levelFilter === "all")
    ? sentenceTrainChallenges.map((c, i) => i)
    : sentenceTrainChallenges.map((c, i) => ({ c, i })).filter(x => String(x.c.level) === String(state.levelFilter)).map(x => x.i);

  let curPos = filtered.indexOf(state.currentChallengeIndex);
  if (curPos === -1) curPos = 0;
  const nextPos = curPos + delta;
  if (nextPos >= 0 && nextPos < filtered.length) {
    state.currentChallengeIndex = filtered[nextPos];
    renderSentenceTrainGame();
  }
};

window.setTrainChallengeIndex = function(idx) {
  if (window.sfx && typeof sfx.playClick === "function") sfx.playClick();
  const state = window.TRAIN_GAME_STATE;
  state.currentChallengeIndex = idx;
  renderSentenceTrainGame();
};
