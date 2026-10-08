/* ===================================================================
   ENGLISH_TRAINER.JS - Kurikulum Lengkap English Speaking, IELTS & TOEFL iBT
   Dilengkapi 100 Kosakata Tebak Huruf + 100 Soal Cambridge IELTS + 100 Soal TOEFL iBT
   Semua tantangan dilengkapi CONTOH SOAL & JAWABAN BENAR DULU + Nalar Bayi
   =================================================================== */

// ================= SIMULATOR WAWANCARA CV & SPEAKING IT =================
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
    "category": "1. Self Introduction & Background",
    "questionEn": "What motivated you to transition into the information technology industry?",
    "workedExample": {
      "modelStructure": "1. Ketertarikan Pribadi -> 2. Relevansi Logika -> 3. Nilai Kontribusi",
      "sampleSentence": "My analytical mindset naturally drew me toward software systems and technology troubleshooting.",
      "keyPhraseTip": "Gunakan kata kunci: 'passionate about technology' dan 'solving complex problems'."
    },
    "targetSentence": "I have always been passionate about technology, and I enjoy solving complex problems using software and structured logic.",
    "translationId": "Saya selalu bersemangat tentang teknologi, dan saya senang memecahkan masalah rumit menggunakan perangkat lunak dan logika terstruktur.",
    "babyTips": "Kodi Tips: Tekankan minat belajar yang tinggi dan antusiasme terhadap teknologi komputer."
  },
  {
    "id": "spk-cv-3",
    "category": "1. Self Introduction & Background",
    "questionEn": "What are your greatest professional strengths?",
    "workedExample": {
      "modelStructure": "1. Identifikasi 3 Kekuatan Utama -> 2. Bukti Nyata -> 3. Manfaat untuk Perusahaan",
      "sampleSentence": "I excel at diagnosing technical issues quickly and communicating solutions in simple terms.",
      "keyPhraseTip": "Frasa kunci: 'rapid learning', 'logical thinking', dan 'clear communication'."
    },
    "targetSentence": "My greatest strengths are rapid learning, logical thinking, and clear communication when explaining technical issues to users.",
    "translationId": "Kekuatan terbesar saya adalah kemampuan belajar cepat, berpikir logis, dan komunikasi yang jelas saat menjelaskan masalah teknis kepada pengguna.",
    "babyTips": "Kodi Tips: Gabungkan keahlian logika pemecahan masalah dengan kemampuan komunikasi yang sabar."
  },
  {
    "id": "spk-cv-4",
    "category": "1. Self Introduction & Background",
    "questionEn": "How do you handle tasks when you encounter unfamiliar technical tools?",
    "workedExample": {
      "modelStructure": "1. Langkah Riset Mandiri -> 2. Uji Coba Aman -> 3. Kolaborasi Tim",
      "sampleSentence": "When facing new technology, I study official documentation and build small proof-of-concept tests.",
      "keyPhraseTip": "Frasa kunci: 'proactively read documentation' dan 'sandbox environments'."
    },
    "targetSentence": "I proactively read documentation, test solutions in sandbox environments, and consult senior engineers to learn quickly.",
    "translationId": "Saya secara proaktif membaca dokumentasi, menguji solusi di lingkungan sandbox, dan berkonsultasi dengan engineer senior untuk belajar cepat.",
    "babyTips": "Kodi Tips: Tunjukkan inisiatif mandiri untuk riset dan belajar tanpa menunggu disuruh."
  },
  {
    "id": "spk-cv-5",
    "category": "1. Self Introduction & Background",
    "questionEn": "Where do you see yourself professionally in the next three years?",
    "workedExample": {
      "modelStructure": "1. Target Keahlian -> 2. Tanggung Jawab Kepemimpinan -> 3. Komitmen Pertumbuhan",
      "sampleSentence": "I aim to master enterprise network operations and contribute to major infrastructure upgrades.",
      "keyPhraseTip": "Frasa kunci: 'experienced IT specialist' dan 'system optimization'."
    },
    "targetSentence": "In three years, I see myself as an experienced IT specialist leading system optimization and mentoring junior team members.",
    "translationId": "Dalam tiga tahun, saya melihat diri saya sebagai spesialis IT berpengalaman yang memimpin optimasi sistem dan membimbing anggota tim junior.",
    "babyTips": "Kodi Tips: Tunjukkan komitmen jangka panjang untuk bertumbuh bersama perusahaan."
  },
  {
    "id": "spk-cv-6",
    "category": "1. Self Introduction & Background",
    "questionEn": "What certified qualifications do you currently possess?",
    "workedExample": {
      "modelStructure": "1. Kualifikasi Resmi Nasional -> 2. Relevansi Portofolio -> 3. Penerapan Praktis",
      "sampleSentence": "Holding a certified credential demonstrates my commitment to professional industry standards.",
      "keyPhraseTip": "Frasa kunci: 'national certification from BNSP' dan 'practical training certificates'."
    },
    "targetSentence": "I hold a national graphic design certification from BNSP and practical training certificates in IT support and database systems.",
    "translationId": "Saya memegang sertifikasi desainer grafis nasional dari BNSP dan sertifikat pelatihan praktis dalam dukungan IT dan sistem basis data.",
    "babyTips": "Kodi Tips: Sebutkan kredensial resmi untuk membuktikan kompetensi standarmu."
  },
  {
    "id": "spk-cv-7",
    "category": "1. Self Introduction & Background",
    "questionEn": "Why are you interested in joining our company specifically?",
    "workedExample": {
      "modelStructure": "1. Pengakuan Reputasi -> 2. Keselarasan Nilai Kerja -> 3. Antusiasme Berkontribusi",
      "sampleSentence": "Your company's reputation for engineering excellence makes it the ideal place for me to contribute.",
      "keyPhraseTip": "Frasa kunci: 'innovative digital culture' dan 'high quality solutions'."
    },
    "targetSentence": "I admire your company's innovative digital culture and commitment to providing high quality solutions for modern businesses.",
    "translationId": "Saya mengagumi budaya digital inovatif perusahaan Anda dan komitmen untuk menyediakan solusi berkualitas tinggi bagi bisnis modern.",
    "babyTips": "Kodi Tips: Pujilah reputasi dan inovasi teknologi perusahaan yang kamu lamar."
  },
  {
    "id": "spk-cv-8",
    "category": "1. Self Introduction & Background",
    "questionEn": "How do you manage your time when dealing with multiple urgent deadlines?",
    "workedExample": {
      "modelStructure": "1. Metode Prioritas -> 2. Pemecahan Target -> 3. Transparansi Komunikasi",
      "sampleSentence": "I organize urgent tickets by impact level and focus on resolving mission-critical blockers first.",
      "keyPhraseTip": "Frasa kunci: 'prioritize tasks using urgency matrices' dan 'daily milestones'."
    },
    "targetSentence": "I prioritize tasks using urgency matrices, break down complex goals into daily milestones, and maintain regular status updates.",
    "translationId": "Saya memprioritaskan tugas menggunakan matriks urgensi, memecah target rumit menjadi capaian harian, dan menjaga pembaruan status berkala.",
    "babyTips": "Kodi Tips: Jelaskan metodologi manajemen waktu yang terstruktur dan terukur."
  },
  {
    "id": "spk-cv-9",
    "category": "1. Self Introduction & Background",
    "questionEn": "How would your former colleagues describe your working style?",
    "workedExample": {
      "modelStructure": "1. Sifat Karakter Utama -> 2. Sikap Menghadapi Tekanan -> 3. Semangat Membantu",
      "sampleSentence": "They appreciate my collaborative attitude and my persistence in tracking down hard-to-find bugs.",
      "keyPhraseTip": "Frasa kunci: 'dependable', 'patient in stressful situations', dan 'solve technical blockers'."
    },
    "targetSentence": "My colleagues would describe me as dependable, patient in stressful situations, and always eager to help solve technical blockers.",
    "translationId": "Rekan kerja saya akan menggambarkan saya sebagai orang yang dapat diandalkan, sabar dalam situasi penuh tekanan, dan selalu bersemangat membantu menyelesaikan hambatan teknis.",
    "babyTips": "Kodi Tips: Tunjukkan reputasi positifmu sebagai rekan tim yang solid dan menyenangkan."
  },
  {
    "id": "spk-cv-10",
    "category": "1. Self Introduction & Background",
    "questionEn": "What values guide your daily professional conduct?",
    "workedExample": {
      "modelStructure": "1. Nilai Moral Utama -> 2. Komitmen Belajar -> 3. Empati Pelayanan",
      "sampleSentence": "I believe in taking complete ownership of my work while actively listening to user feedback.",
      "keyPhraseTip": "Frasa kunci: 'integrity', 'continuous self-improvement', dan 'user empathy'."
    },
    "targetSentence": "Integrity, continuous self-improvement, and user empathy guide my decisions in delivering reliable technical support.",
    "translationId": "Integritas, peningkatan diri yang berkelanjutan, dan empati terhadap pengguna memandu keputusan saya dalam memberikan dukungan teknis yang andal.",
    "babyTips": "Kodi Tips: Etika kerja yang tinggi sangat dihargai oleh manajer HRD."
  },
  {
    "id": "spk-cv-11",
    "category": "2. Hardware & PC Troubleshooting",
    "questionEn": "What steps do you take when a desktop computer fails to power on?",
    "workedExample": {
      "modelStructure": "1. Cek Catu Daya Fisik -> 2. Uji PSU & Saklar -> 3. Observasi LED Motherboard",
      "sampleSentence": "Always eliminate basic electrical faults first before testing internal modular hardware.",
      "keyPhraseTip": "Frasa kunci: 'verify the power cable', 'power supply unit', dan 'motherboard indicator LEDs'."
    },
    "targetSentence": "I first verify the power cable and wall outlet, inspect the power supply unit, and check the motherboard indicator LEDs.",
    "translationId": "Pertama saya memverifikasi kabel daya dan stopkontak, memeriksa unit catu daya (PSU), dan mengecek lampu LED indikator motherboard.",
    "babyTips": "Kodi Tips: Urutkan troubleshooting dari hal paling dasar (kabel daya/PSU) sebelum mencurigai kerusakan komponen mahal."
  },
  {
    "id": "spk-cv-12",
    "category": "2. Hardware & PC Troubleshooting",
    "questionEn": "How do you diagnose and resolve a Blue Screen of Death (BSOD) in Windows?",
    "workedExample": {
      "modelStructure": "1. Baca Kode Error -> 2. Review Driver / Software -> 3. Tes Fisik RAM",
      "sampleSentence": "Most BSOD crashes stem from corrupted device drivers or faulty RAM modules.",
      "keyPhraseTip": "Frasa kunci: 'stop error code', 'recent driver updates', dan 'Windows Memory Diagnostic'."
    },
    "targetSentence": "I analyze the stop error code, check recent driver updates, and test system memory using Windows Memory Diagnostic.",
    "translationId": "Saya menganalisis kode stop error, memeriksa pembaruan driver terkini, dan menguji memori sistem menggunakan Windows Memory Diagnostic.",
    "babyTips": "Kodi Tips: Sebutkan kode error BSOD dan pengujian RAM sebagai langkah diagnosis standar CompTIA A+."
  },
  {
    "id": "spk-cv-13",
    "category": "2. Hardware & PC Troubleshooting",
    "questionEn": "What precautions must be observed to protect sensitive computer components from ESD?",
    "workedExample": {
      "modelStructure": "1. Perlengkapan Antistatis -> 2. Lingkungan Kerja Aman -> 3. Teknik Penanganan Fisik",
      "sampleSentence": "Static electricity can destroy microchips without visible signs of physical damage.",
      "keyPhraseTip": "Frasa kunci: 'antistatic wrist strap', 'ESD protective mats', dan 'handle by edges'."
    },
    "targetSentence": "I always use an antistatic wrist strap, work on ESD protective mats, and handle components strictly by their edges.",
    "translationId": "Saya selalu menggunakan gelang antistatis, bekerja di atas matras pelindung ESD, dan memegang komponen hanya di bagian tepinya.",
    "babyTips": "Kodi Tips: ESD (Electrostatic Discharge) adalah musuh tersembunyi komponen elektronik. Tekankan prosedur keselamatan kerja!"
  },
  {
    "id": "spk-cv-14",
    "category": "2. Hardware & PC Troubleshooting",
    "questionEn": "How do you determine whether a computer overheating issue is caused by the cooler or thermal paste?",
    "workedExample": {
      "modelStructure": "1. Inspeksi Fisik Kipas -> 2. Baca Sensor BIOS -> 3. Ganti Thermal Paste",
      "sampleSentence": "Overheating leads to thermal throttling and unexpected system shutdowns.",
      "keyPhraseTip": "Frasa kunci: 'inspect fan rotation', 'monitor temperature sensors in BIOS', dan 'reapply thermal paste'."
    },
    "targetSentence": "I inspect the CPU fan rotation, monitor temperature sensors in BIOS, and clean and reapply thermal paste to the heatsink.",
    "translationId": "Saya memeriksa putaran kipas CPU, memantau sensor suhu di BIOS, serta membersihkan dan mengoleskan kembali pasta termal pada heatsink.",
    "babyTips": "Kodi Tips: Menjelaskan pasta termal dan sensor BIOS membuktikan kamu paham praktik perakitan PC nyata."
  },
  {
    "id": "spk-cv-15",
    "category": "2. Hardware & PC Troubleshooting",
    "questionEn": "What is the difference between NVMe M.2 SSDs and traditional SATA hard drives?",
    "workedExample": {
      "modelStructure": "1. Jalur Bus Data -> 2. Kecepatan Transfer -> 3. Manfaat Performa Nyata",
      "sampleSentence": "NVMe drives dramatically reduce boot times and accelerate database read operations.",
      "keyPhraseTip": "Frasa kunci: 'communicate through the PCIe bus' dan 'faster read and write speeds'."
    },
    "targetSentence": "NVMe SSDs communicate directly through the PCIe bus delivering much faster read and write speeds than SATA drives.",
    "translationId": "SSD NVMe berkomunikasi langsung melalui bus PCIe yang menghasilkan kecepatan baca dan tulis jauh lebih kencang dibanding drive SATA.",
    "babyTips": "Kodi Tips: Sebutkan bus PCIe sebagai pembeda utama arsitektur penyimpanan modern."
  },
  {
    "id": "spk-cv-16",
    "category": "2. Hardware & PC Troubleshooting",
    "questionEn": "What troubleshooting steps do you follow when a network printer stops printing?",
    "workedExample": {
      "modelStructure": "1. Cek Konektivitas IP -> 2. Restart Print Spooler -> 3. Cek Kertas & Toner Fisik",
      "sampleSentence": "Clearing stuck print queues in Windows Services resolves the majority of office printer issues.",
      "keyPhraseTip": "Frasa kunci: 'ping the printer IP', 'clear the print spooler', dan 'inspect paper trays'."
    },
    "targetSentence": "I ping the printer's IP address, clear the print spooler service, and inspect paper trays and toner status.",
    "translationId": "Saya melakukan ping ke alamat IP printer, membersihkan layanan print spooler, dan memeriksa baki kertas serta status toner.",
    "babyTips": "Kodi Tips: Masalah printer adalah tiket harian teknisi helpdesk. Kombinasikan cek jaringan dan restart spooler!"
  },
  {
    "id": "spk-cv-17",
    "category": "2. Hardware & PC Troubleshooting",
    "questionEn": "How do you explain the purpose of RAM compared to a hard drive to a non-technical user?",
    "workedExample": {
      "modelStructure": "1. Analogi Meja Kerja -> 2. Sifat Sementara vs Permanen -> 3. Kesimpulan Sederhana",
      "sampleSentence": "Using clear real-world metaphors helps non-technical staff understand computer limitations.",
      "keyPhraseTip": "Frasa kunci: 'RAM acts like a working desk' dan 'hard drive is the storage cabinet'."
    },
    "targetSentence": "RAM acts like a working desk where open papers are held temporarily, while the hard drive is the storage cabinet for long-term files.",
    "translationId": "RAM bertindak seperti meja kerja tempat berkas terbuka disimpan sementara, sedangkan hard drive adalah lemari penyimpanan untuk berkas jangka panjang.",
    "babyTips": "Kodi Tips: Gunakan analogi meja kerja dan lemari arsip khas Kamus Bayi IT agar pewawancara kagum pada kemampuan komunikasimu!"
  },
  {
    "id": "spk-cv-18",
    "category": "2. Hardware & PC Troubleshooting",
    "questionEn": "How do you access and navigate the BIOS or UEFI setup utility on modern motherboards?",
    "workedExample": {
      "modelStructure": "1. Prosedur Booting -> 2. Tombol Setup Utama -> 3. Pengaturan BIOS/UEFI",
      "sampleSentence": "Modern motherboards also allow entering UEFI settings directly from Windows recovery options.",
      "keyPhraseTip": "Frasa kunci: 'dedicated setup key F2 or Delete' dan 'initial POST screen'."
    },
    "targetSentence": "I restart the workstation and press the dedicated setup key, such as F2 or Delete, during the initial POST screen.",
    "translationId": "Saya me-restart workstation dan menekan tombol setup khusus, seperti F2 atau Delete, selama layar POST awal.",
    "babyTips": "Kodi Tips: Sebutkan istilah POST (Power-On Self-Test) untuk menunjukkan wawasan teknis CompTIA A+."
  },
  {
    "id": "spk-cv-19",
    "category": "2. Hardware & PC Troubleshooting",
    "questionEn": "What signs indicate that a hard disk drive is approaching physical failure?",
    "workedExample": {
      "modelStructure": "1. Gejala Akustik -> 2. Gejala Sistem & File -> 3. Langkah Mitigasi Darurat",
      "sampleSentence": "When a mechanical drive starts clicking, data backup must be prioritized immediately.",
      "keyPhraseTip": "Frasa kunci: 'audible clicking noises', 'corrupted file warnings', dan 'immediate backup'."
    },
    "targetSentence": "Audible clicking noises, corrupted file warnings, and significant slow-downs indicate imminent drive failure requiring immediate backup.",
    "translationId": "Suara klik yang terdengar, peringatan berkas rusak, dan pelambatan signifikan menandakan kegagalan drive sudah dekat yang membutuhkan backup segera.",
    "babyTips": "Kodi Tips: 'Clicking noise of death' adalah tanda klasik mekanik harddisk rusak. Tindakan nomor satu: segera backup data!"
  },
  {
    "id": "spk-cv-20",
    "category": "2. Hardware & PC Troubleshooting",
    "questionEn": "How do you upgrade workstation RAM ensuring full hardware compatibility?",
    "workedExample": {
      "modelStructure": "1. Cek Generasi DDR -> 2. Selaraskan Kecepatan -> 3. Konfigurasi Dual Channel",
      "sampleSentence": "Installing matched memory pairs in alternate slots activates dual-channel architecture for better throughput.",
      "keyPhraseTip": "Frasa kunci: 'supported DDR generations', 'matching clock speeds', dan 'dual-channel slots'."
    },
    "targetSentence": "I check the motherboard specifications for supported DDR generations, verify matching clock speeds, and install sticks in dual-channel slots.",
    "translationId": "Saya memeriksa spesifikasi motherboard untuk generasi DDR yang didukung, memverifikasi kecocokan clock speed, dan memasang kepingan di slot dual-channel.",
    "babyTips": "Kodi Tips: Sebutkan 'dual-channel slots' untuk membuktikan kamu tahu cara memaksimalkan bandwidth memori."
  },
  {
    "id": "spk-cv-21",
    "category": "3. Network Infrastructure & Connectivity",
    "questionEn": "How does the OSI model help you isolate and troubleshoot network failures?",
    "workedExample": {
      "modelStructure": "1. Konsep Lapisan Bertingkat -> 2. Pendekatan Bottom-Up -> 3. Efisiensi Diagnosa",
      "sampleSentence": "Dividing network functions into seven distinct layers prevents random guesswork during outages.",
      "keyPhraseTip": "Frasa kunci: 'structured layer-by-layer approach', 'isolate physical cables', dan 'IP routing'."
    },
    "targetSentence": "The OSI model provides a structured layer-by-layer approach, allowing me to isolate physical cables first before inspecting IP routing or application protocols.",
    "translationId": "Model OSI menyediakan pendekatan lapis demi lapis yang terstruktur, memungkinkan saya mengisolasi kabel fisik terlebih dahulu sebelum memeriksa perutean IP atau protokol aplikasi.",
    "babyTips": "Kodi Tips: Sebutkan pendekatan 'bottom-up' (dari Layer 1 Physical ke Layer 7 Application) untuk menunjukkan metode troubleshooting sistematis."
  },
  {
    "id": "spk-cv-22",
    "category": "3. Network Infrastructure & Connectivity",
    "questionEn": "What is the function of a default gateway in a local area network?",
    "workedExample": {
      "modelStructure": "1. Definisi Router/Pintu Keluar -> 2. Mekanisme Forwarding -> 3. Hubungan Subnet Lokal ke Internet",
      "sampleSentence": "Without a configured default gateway, workstations can only communicate within their immediate local subnet.",
      "keyPhraseTip": "Frasa kunci: 'serves as the access point or router', 'forwards traffic', dan 'external destination networks'."
    },
    "targetSentence": "A default gateway serves as the access point or router that forwards traffic from the local subnet to external destination networks like the Internet.",
    "translationId": "Default gateway berfungsi sebagai titik akses atau router yang meneruskan lalu lintas dari subnet lokal ke jaringan tujuan eksternal seperti Internet.",
    "babyTips": "Kodi Tips: Gunakan analogi pintu gerbang tol perumahan yang menghubungkan jalan kampung dengan jalan raya utama."
  },
  {
    "id": "spk-cv-23",
    "category": "3. Network Infrastructure & Connectivity",
    "questionEn": "How do you troubleshoot a workstation that receives an APIPA IP address (169.254.x.x)?",
    "workedExample": {
      "modelStructure": "1. Arti Alamat APIPA -> 2. Cek Koneksi ke Server DHCP -> 3. Perintah ipconfig /renew",
      "sampleSentence": "When DHCP fails, Windows assigns an automatic private IP address preventing Internet access.",
      "keyPhraseTip": "Frasa kunci: 'client failed to reach a DHCP server', 'physical link lights', dan 'release and renew IP lease'."
    },
    "targetSentence": "An APIPA address indicates that the client failed to reach a DHCP server, so I verify physical link lights, check DHCP scope capacity, and release and renew the IP lease.",
    "translationId": "Alamat APIPA menandakan bahwa klien gagal menjangkau server DHCP, jadi saya memverifikasi lampu indikator fisik, memeriksa kapasitas pool DHCP, serta melakukan release dan renew IP lease.",
    "babyTips": "Kodi Tips: APIPA (169.254.x.x) adalah soal wajib ujian CompTIA Network+. Solusinya: cek kabel dan jalankan ipconfig /renew!"
  },
  {
    "id": "spk-cv-24",
    "category": "3. Network Infrastructure & Connectivity",
    "questionEn": "What is the purpose of configuring VLANs on enterprise Cisco switches?",
    "workedExample": {
      "modelStructure": "1. Pembagian Logis Fisik -> 2. Isolasi Broadcast Domain -> 3. Manfaat Keamanan & Kinerja",
      "sampleSentence": "Creating separate VLANs prevents sensitive departmental data from leaking across the office network.",
      "keyPhraseTip": "Frasa kunci: 'isolated logical broadcast domains', 'improving network security', dan 'optimizing traffic bandwidth'."
    },
    "targetSentence": "VLANs partition a physical switch into isolated logical broadcast domains, improving network security and optimizing traffic bandwidth.",
    "translationId": "VLAN membagi switch fisik menjadi beberapa domain siaran logis yang terisolasi, meningkatkan keamanan jaringan dan mengoptimalkan bandwidth lalu lintas data.",
    "babyTips": "Kodi Tips: Sebutkan bahwa VLAN memisahkan jaringan HRD, Keuangan, dan Tamu agar tidak saling mengintip data."
  },
  {
    "id": "spk-cv-25",
    "category": "3. Network Infrastructure & Connectivity",
    "questionEn": "What is the difference between TCP and UDP transport protocols?",
    "workedExample": {
      "modelStructure": "1. Karakteristik TCP (Reliable Handshake) -> 2. Karakteristik UDP (Fast Streaming) -> 3. Contoh Kasus Penggunaan",
      "sampleSentence": "TCP requires a three-way handshake to establish reliability, while UDP transmits datagrams without acknowledgement.",
      "keyPhraseTip": "Frasa kunci: 'connection-oriented protocol', 'guarantees packet delivery', dan 'connectionless prioritizes speed'."
    },
    "targetSentence": "TCP is a connection-oriented protocol that guarantees packet delivery through handshakes, whereas UDP is connectionless and prioritizes speed for streaming and gaming.",
    "translationId": "TCP adalah protokol berorientasi koneksi yang menjamin pengiriman paket melalui handshake tiga arah, sedangkan UDP tanpa koneksi dan memprioritaskan kecepatan untuk streaming dan game.",
    "babyTips": "Kodi Tips: Jelaskan bahwa web browsing dan transfer file memakai TCP (pasti sampai), sedangkan video call memakai UDP (cepat walau ada frame hilang)."
  },
  {
    "id": "spk-cv-26",
    "category": "3. Network Infrastructure & Connectivity",
    "questionEn": "How does the DNS resolution process work when a user enters a domain name?",
    "workedExample": {
      "modelStructure": "1. Analogi Buku Telepon -> 2. Hierarki Root & TLD -> 3. Konversi Nama Domain ke IP",
      "sampleSentence": "DNS translates user-friendly hostnames into the IP addresses required for network routing.",
      "keyPhraseTip": "Frasa kunci: 'queries DNS servers', 'resolve human-readable domains', dan 'machine IP addresses'."
    },
    "targetSentence": "The system queries DNS servers starting from local cache to root, TLD, and authoritative nameservers to resolve human-readable domains into machine IP addresses.",
    "translationId": "Sistem meminta server DNS mulai dari cache lokal hingga root, TLD, dan nameserver otoritatif untuk menerjemahkan domain yang mudah dibaca manusia menjadi alamat IP mesin.",
    "babyTips": "Kodi Tips: Jelaskan DNS seperti buku telepon raksasa yang mengubah google.com menjadi alamat angka 142.250.x.x."
  },
  {
    "id": "spk-cv-27",
    "category": "3. Network Infrastructure & Connectivity",
    "questionEn": "What is subnetting and why is it essential for IPv4 network planning?",
    "workedExample": {
      "modelStructure": "1. Konsep Pemecahan Jaringan -> 2. Reduksi Kemacetan Broadcast -> 3. Efisiensi Alokasi IP",
      "sampleSentence": "Custom subnet masks allow network engineers to tailor host capacities to specific branch requirements.",
      "keyPhraseTip": "Frasa kunci: 'divides a large network into smaller subnetworks', 'reducing broadcast congestion', dan 'conserving IPv4 address spaces'."
    },
    "targetSentence": "Subnetting divides a large network into smaller subnetworks, reducing broadcast congestion and conserving limited IPv4 address spaces.",
    "translationId": "Subnetting membagi jaringan besar menjadi subjaringan yang lebih kecil, mengurangi kepadatan broadcast dan menghemat ruang alamat IPv4 yang terbatas.",
    "babyTips": "Kodi Tips: Jelaskan bahwa subnetting seperti membagi gedung apartemen besar menjadi beberapa lantai dan kamar rapi."
  },
  {
    "id": "spk-cv-28",
    "category": "3. Network Infrastructure & Connectivity",
    "questionEn": "How do you troubleshoot intermittent Wi-Fi drops in a crowded office area?",
    "workedExample": {
      "modelStructure": "1. Pindai Saluran Frekuensi -> 2. Cek Overlap Sinyal AP -> 3. Pembaruan Driver Perangkat",
      "sampleSentence": "Switching dense office devices to the 5GHz frequency band eliminates common channel saturation.",
      "keyPhraseTip": "Frasa kunci: 'wireless channel interference', 'access point signal coverage', dan 'update wireless adapter drivers'."
    },
    "targetSentence": "I analyze wireless channel interference, verify access point signal coverage, and update client wireless adapter drivers.",
    "translationId": "Saya menganalisis interferensi saluran nirkabel, memverifikasi jangkauan sinyal access point, dan memperbarui driver adaptor nirkabel klien.",
    "babyTips": "Kodi Tips: Sebutkan pemilihan channel 1, 6, 11 (2.4GHz) atau migrasi ke 5GHz/6GHz untuk menghindari tumpang tindih sinyal tetangga."
  },
  {
    "id": "spk-cv-29",
    "category": "3. Network Infrastructure & Connectivity",
    "questionEn": "What command-line utilities do you utilize to diagnose remote connectivity problems?",
    "workedExample": {
      "modelStructure": "1. Ping untuk Latensi & Respon -> 2. Tracert untuk Menemukan Titik Putus -> 3. Nslookup untuk Uji Server Nama",
      "sampleSentence": "Tracing route hops highlights precisely which upstream router is dropping packets.",
      "keyPhraseTip": "Frasa kunci: 'ping to test reachability', 'tracert to identify routing hops', dan 'nslookup to verify DNS'."
    },
    "targetSentence": "I use ping to test basic reachability, tracert to identify routing hops, and nslookup to verify DNS resolution integrity.",
    "translationId": "Saya menggunakan ping untuk menguji keterjangkauan dasar, tracert untuk mengidentifikasi lompatan router, dan nslookup untuk memverifikasi integritas resolusi DNS.",
    "babyTips": "Kodi Tips: Tiga mantra sakti teknisi jaringan: ping, tracert/traceroute, dan nslookup!"
  },
  {
    "id": "spk-cv-30",
    "category": "3. Network Infrastructure & Connectivity",
    "questionEn": "How does Network Address Translation (NAT) protect internal corporate workstations?",
    "workedExample": {
      "modelStructure": "1. Pemetaan IP Privat ke Publik -> 2. Proteksi Akses Langsung -> 3. Penghematan Alokasi IP Global",
      "sampleSentence": "By masking internal hosts, NAT acts as an initial security perimeter against outside port scans.",
      "keyPhraseTip": "Frasa kunci: 'hides private internal IP addresses', 'single public router IP', dan 'preventing direct unsolicited connections'."
    },
    "targetSentence": "NAT hides private internal IP addresses behind a single public router IP, preventing direct unsolicited connections from external attackers.",
    "translationId": "NAT menyembunyikan alamat IP privat internal di balik satu IP publik router, mencegah koneksi langsung tanpa izin dari penyerang eksternal.",
    "babyTips": "Kodi Tips: NAT bertindak seperti resepsionis kantor yang menerima semua surat dari luar tanpa membocorkan nomor kamar karyawan di dalam."
  },
  {
    "id": "spk-cv-31",
    "category": "4. Operating Systems, Linux & Windows Terminal",
    "questionEn": "How do you inspect running system processes and terminate unresponsive tasks in Windows?",
    "workedExample": {
      "modelStructure": "1. Monitoring Visual via Task Manager -> 2. Deteksi Proses via CLI (tasklist) -> 3. Terminasi Paksa (taskkill)",
      "sampleSentence": "Using taskkill via the terminal allows terminating background hung services without freezing the graphical UI.",
      "keyPhraseTip": "Frasa kunci: 'run tasklist command', 'terminate hanging processes', dan 'taskkill with PID'."
    },
    "targetSentence": "I launch Task Manager or run the tasklist command in Command Prompt, and terminate hanging processes using taskkill with the process identifier.",
    "translationId": "Saya membuka Task Manager atau menjalankan perintah tasklist di Command Prompt, dan menghentikan proses yang macet menggunakan taskkill dengan nomor PID.",
    "babyTips": "Kodi Tips: Mengetahui perintah CLI 'taskkill /PID ... /F' membuktikan kamu bukan sekadar pengguna biasa tapi teknisi komputer handal!"
  },
  {
    "id": "spk-cv-32",
    "category": "4. Operating Systems, Linux & Windows Terminal",
    "questionEn": "What essential Linux commands do you use for file navigation and permissions management?",
    "workedExample": {
      "modelStructure": "1. Navigasi Direktori (cd, ls) -> 2. Pencarian Konten Log (grep) -> 3. Hak Akses File (chmod, chown)",
      "sampleSentence": "Managing permissions with chmod ensures sensitive configuration files cannot be modified by unprivileged users.",
      "keyPhraseTip": "Frasa kunci: 'navigate directories using cd and ls', 'grep to search logs', dan 'chmod and chown for permissions'."
    },
    "targetSentence": "I use cd and ls to navigate directories, grep to search log contents, and chmod and chown to manage user file permissions.",
    "translationId": "Saya menggunakan cd dan ls untuk menavigasi direktori, grep untuk mencari isi log, serta chmod dan chown untuk mengelola izin berkas pengguna.",
    "babyTips": "Kodi Tips: Perintah Linux `chmod` (ubah hak akses) dan `grep` (filter teks log) adalah pertanyaan favorit tes IT perusahaan."
  },
  {
    "id": "spk-cv-33",
    "category": "4. Operating Systems, Linux & Windows Terminal",
    "questionEn": "How do you repair corrupted Windows operating system files using built-in system tools?",
    "workedExample": {
      "modelStructure": "1. Buka CMD Administrator -> 2. Jalankan SFC Scannow -> 3. Jalankan DISM Image Repair",
      "sampleSentence": "SFC verifies system file signatures, while DISM repairs the underlying component store from Windows Update.",
      "keyPhraseTip": "Frasa kunci: 'elevated command prompt', 'sfc /scannow', dan 'DISM restorehealth'."
    },
    "targetSentence": "I open an elevated command prompt and run sfc /scannow, followed by DISM restorehealth to download and replace corrupted components.",
    "translationId": "Saya membuka Command Prompt dengan hak administrator dan menjalankan sfc /scannow, diikuti oleh DISM restorehealth untuk mengunduh dan mengganti komponen yang rusak.",
    "babyTips": "Kodi Tips: Duet sakti penyelamat Windows tanpa perlu install ulang: SFC (System File Checker) dan DISM!"
  },
  {
    "id": "spk-cv-34",
    "category": "4. Operating Systems, Linux & Windows Terminal",
    "questionEn": "What is the role of Group Policy Objects (GPO) in managing Windows corporate workstations?",
    "workedExample": {
      "modelStructure": "1. Manajemen Terpusat Active Directory -> 2. Penegakan Aturan Keamanan -> 3. Standardisasi Konfigurasi",
      "sampleSentence": "Centralized Group Policies ensure compliance across hundreds of workstations with a single push.",
      "keyPhraseTip": "Frasa kunci: 'enforce centralized security policies', 'deploy software', dan 'restrict unauthorized changes across domains'."
    },
    "targetSentence": "GPOs allow system administrators to enforce centralized security policies, deploy software, and restrict unauthorized configuration changes across entire domains.",
    "translationId": "GPO memungkinkan administrator sistem untuk menegakkan kebijakan keamanan terpusat, mendistribusikan perangkat lunak, dan membatasi perubahan konfigurasi tanpa izin di seluruh domain kantor.",
    "babyTips": "Kodi Tips: GPO adalah remot kontrol seragam untuk ribuan komputer di perusahaan agar karyawan tidak bisa sembarangan colok flashdisk."
  },
  {
    "id": "spk-cv-35",
    "category": "4. Operating Systems, Linux & Windows Terminal",
    "questionEn": "How do you investigate system errors and application crashes in the Windows Event Viewer?",
    "workedExample": {
      "modelStructure": "1. Akses Event Viewer -> 2. Filter Log Sistem & Aplikasi -> 3. Temukan Event ID & Modul Penyebab",
      "sampleSentence": "Event IDs and error timestamps provide the definitive evidence needed to diagnose intermittent crashes.",
      "keyPhraseTip": "Frasa kunci: 'Windows Logs section', 'filtering for Critical and Error events', dan 'identify faulty modules and timestamps'."
    },
    "targetSentence": "I navigate to the Windows Logs section under System and Application, filtering for Critical and Error events to identify faulty modules and timestamps.",
    "translationId": "Saya membuka bagian Windows Logs di bawah System dan Application, memfilter kejadian Kritis dan Error untuk mengidentifikasi modul yang bermasalah dan catatan waktunya.",
    "babyTips": "Kodi Tips: Event Viewer adalah buku harian rahasia Windows. Jangan menebak-nebak, langsung intip log error-nya!"
  },
  {
    "id": "spk-cv-36",
    "category": "4. Operating Systems, Linux & Windows Terminal",
    "questionEn": "What is the difference between Windows PowerShell and the legacy Command Prompt (CMD)?",
    "workedExample": {
      "modelStructure": "1. Konsep Objek vs Teks Biasa -> 2. Integrasi .NET Framework -> 3. Kemampuan Otomasi Skrip",
      "sampleSentence": "PowerShell allows piping complex data structures between cmdlets rather than parsing raw text strings.",
      "keyPhraseTip": "Frasa kunci: 'advanced object-oriented shell', 'manipulates .NET objects', dan 'plain text streams in legacy CMD'."
    },
    "targetSentence": "PowerShell is an advanced object-oriented shell and scripting language that manipulates .NET objects, whereas CMD only processes plain text streams.",
    "translationId": "PowerShell adalah shell dan bahasa skrip tingkat lanjut berorientasi objek yang memanipulasi objek .NET, sedangkan CMD hanya memproses aliran teks polos biasa.",
    "babyTips": "Kodi Tips: Jelaskan bahwa PowerShell sangat kuat karena hasil perintahnya adalah objek data utuh yang bisa diolah kembali."
  },
  {
    "id": "spk-cv-37",
    "category": "4. Operating Systems, Linux & Windows Terminal",
    "questionEn": "How do you automate routine administrative tasks using operating system scheduling tools?",
    "workedExample": {
      "modelStructure": "1. Penulisan Skrip Otomasi -> 2. Penjadwalan Waktu -> 3. Monitoring Hasil Eksekusi",
      "sampleSentence": "Automating maintenance scripts eliminates human error in scheduled backups and log rotations.",
      "keyPhraseTip": "Frasa kunci: 'automation scripts in PowerShell or Bash', 'Windows Task Scheduler', dan 'Linux Cron jobs'."
    },
    "targetSentence": "I write automation scripts in PowerShell or Bash and schedule automated executions using Windows Task Scheduler or Linux Cron jobs.",
    "translationId": "Saya menulis skrip otomasi dalam PowerShell atau Bash dan menjadwalkan eksekusi otomatis menggunakan Windows Task Scheduler atau Cron jobs di Linux.",
    "babyTips": "Kodi Tips: Sebutkan 'Cron jobs' untuk Linux dan 'Task Scheduler' untuk Windows agar terlihat menguasai kedua sistem operasi."
  },
  {
    "id": "spk-cv-38",
    "category": "4. Operating Systems, Linux & Windows Terminal",
    "questionEn": "How do you configure and secure SSH remote terminal access on a Linux server?",
    "workedExample": {
      "modelStructure": "1. Pembuatan Kunci Kriptografi -> 2. Konfigurasi sshd_config -> 3. Pengerasan Keamanan Port",
      "sampleSentence": "Enforcing key-based authentication protects servers from automated brute-force password dictionary attacks.",
      "keyPhraseTip": "Frasa kunci: 'generate key pairs', 'disable root password logins', dan 'change default listening port'."
    },
    "targetSentence": "I generate RSA or ED25519 key pairs, disable root password logins in the sshd configuration, and change the default listening port.",
    "translationId": "Saya membuat pasangan kunci RSA atau ED25519, menonaktifkan login kata sandi root pada konfigurasi sshd, dan mengubah port default.",
    "babyTips": "Kodi Tips: Praktik standar keamanan server: matikan PermitRootLogin dan gunakan SSH key, bukan password biasa!"
  },
  {
    "id": "spk-cv-39",
    "category": "4. Operating Systems, Linux & Windows Terminal",
    "questionEn": "What steps do you take when a user profile becomes corrupted in Windows 10 or 11?",
    "workedExample": {
      "modelStructure": "1. Login Admin Cadangan -> 2. Backup Dokumen Penting -> 3. Reset Kunci Registry ProfileList",
      "sampleSentence": "Backing up user desktop and documents files prevents accidental data loss during profile recreation.",
      "keyPhraseTip": "Frasa kunci: 'backup data folders', 'delete corrupted registry GUID entry', dan 'generate a fresh profile'."
    },
    "targetSentence": "I log in with an administrator account, backup the user's data folders, delete the corrupted registry GUID profile entry, and let Windows generate a fresh profile.",
    "translationId": "Saya masuk dengan akun administrator, mencadangkan folder data pengguna, menghapus entri GUID profil yang rusak di registry, dan membiarkan Windows membuat profil baru yang segar.",
    "babyTips": "Kodi Tips: Masalah 'We can't sign in to your account' sering terjadi di kantor. Backup data dulu baru reset registry profil!"
  },
  {
    "id": "spk-cv-40",
    "category": "4. Operating Systems, Linux & Windows Terminal",
    "questionEn": "How do you monitor real-time CPU, memory, and disk usage in a headless Linux environment?",
    "workedExample": {
      "modelStructure": "1. Pemantau CPU Interaktif (top/htop) -> 2. Cek RAM Tersedia (free -m) -> 3. Cek Sisa Partisi Disk (df -h)",
      "sampleSentence": "Interactive CLI monitors allow identifying runaway background processes without needing a graphical desktop.",
      "keyPhraseTip": "Frasa kunci: 'htop for processor loads', 'free -m for memory', dan 'df -h for disk capacity'."
    },
    "targetSentence": "I use command-line monitoring tools like top or htop for processor loads, free -m for memory statistics, and df -h for disk capacity.",
    "translationId": "Saya menggunakan alat pemantau baris perintah seperti top atau htop untuk beban prosesor, free -m untuk statistik memori, dan df -h untuk kapasitas penyimpanan disk.",
    "babyTips": "Kodi Tips: Sebutkan opsi `-h` (human-readable) pada perintah `df -h` agar angka ukuran kapasitas tampil rapi dalam GB/MB."
  },
  {
    "id": "spk-cv-41",
    "category": "5. Database, Data Modeling & SQL Queries",
    "questionEn": "What is the difference between INNER JOIN and LEFT JOIN in SQL queries?",
    "workedExample": {
      "modelStructure": "1. Definisi INNER JOIN (Irisan Cocok) -> 2. Definisi LEFT JOIN (Semua Baris Kiri) -> 3. Penanganan Nilai NULL",
      "sampleSentence": "Choosing the correct join type prevents accidental omission of orphan records during data auditing.",
      "keyPhraseTip": "Frasa kunci: 'matching keys in both tables', 'all rows from the left table', dan 'regardless of matches on the right'."
    },
    "targetSentence": "An INNER JOIN returns only records that have matching keys in both tables, whereas a LEFT JOIN returns all rows from the left table regardless of whether matches exist on the right.",
    "translationId": "INNER JOIN hanya mengembalikan baris yang memiliki kunci yang cocok di kedua tabel, sedangkan LEFT JOIN mengembalikan semua baris dari tabel kiri terlepas dari apakah ada kecocokan di tabel kanan.",
    "babyTips": "Kodi Tips: Gunakan analogi absensi: INNER JOIN hanya mengambil siswa yang hadir dan punya nomor meja, LEFT JOIN mengambil seluruh daftar siswa meski mejanya kosong."
  },
  {
    "id": "spk-cv-42",
    "category": "5. Database, Data Modeling & SQL Queries",
    "questionEn": "Why is database normalization important and what does Third Normal Form (3NF) achieve?",
    "workedExample": {
      "modelStructure": "1. Tujuan Normalisasi -> 2. Mencegah Anomali Redundansi -> 3. Prinsip Ketergantungan 3NF",
      "sampleSentence": "Proper normalization protects data consistency by storing each distinct fact in exactly one place.",
      "keyPhraseTip": "Frasa kunci: 'eliminates data redundancy', 'update anomalies', dan 'depends solely on the primary key'."
    },
    "targetSentence": "Normalization eliminates data redundancy and update anomalies, and 3NF ensures that every non-key column depends solely on the primary key and nothing else.",
    "translationId": "Normalisasi menghilangkan redundansi data dan anomali pembaruan, dan 3NF memastikan bahwa setiap kolom non-kunci hanya bergantung pada kunci primer dan tidak ada yang lain.",
    "babyTips": "Kodi Tips: Slogan legendaris 3NF: 'The key, the whole key, and nothing but the key, so help me Codd!'"
  },
  {
    "id": "spk-cv-43",
    "category": "5. Database, Data Modeling & SQL Queries",
    "questionEn": "How do indexes improve database search performance, and what is their drawback?",
    "workedExample": {
      "modelStructure": "1. Mekanisme B-Tree Indeks -> 2. Kecepatan Operasi SELECT -> 3. Biaya Tambahan Penulisan Data (Trade-off)",
      "sampleSentence": "Indexing frequently queried foreign keys reduces full table scans from minutes to milliseconds.",
      "keyPhraseTip": "Frasa kunci: 'speed up SELECT query filtering', 'slow down INSERT and UPDATE', dan 'index must be rebuilt'."
    },
    "targetSentence": "Indexes create balanced tree structures that dramatically speed up SELECT query filtering, but they slow down INSERT and UPDATE operations because the index must be rebuilt.",
    "translationId": "Indeks membuat struktur balanced tree (B-Tree) yang secara dramatis mempercepat pencarian kueri SELECT, tetapi memperlambat operasi INSERT dan UPDATE karena indeks harus diperbarui.",
    "babyTips": "Kodi Tips: Indeks seperti daftar indeks di belakang buku tebal. Sangat cepat menemukan halaman topik, tapi butuh waktu menulis indeks saat bab baru bertambah."
  },
  {
    "id": "spk-cv-44",
    "category": "5. Database, Data Modeling & SQL Queries",
    "questionEn": "What are ACID properties in database transaction management?",
    "workedExample": {
      "modelStructure": "1. Kepanjangan Empat Pilar ACID -> 2. Prinsip All-or-Nothing (Atomicity) -> 3. Ketahanan Permanen (Durability)",
      "sampleSentence": "ACID compliance prevents phantom reads and partial writes when concurrent transactions execute.",
      "keyPhraseTip": "Frasa kunci: 'Atomicity Consistency Isolation Durability', 'complete entirely or roll back', dan 'without corruption'."
    },
    "targetSentence": "ACID stands for Atomicity, Consistency, Isolation, and Durability, ensuring that database financial transactions either complete entirely or roll back safely without corruption.",
    "translationId": "ACID adalah singkatan dari Atomicity, Consistency, Isolation, dan Durability, memastikan bahwa transaksi finansial database selesai secara utuh atau dibatalkan dengan aman tanpa kerusakan data.",
    "babyTips": "Kodi Tips: Konsep perbankan: transfer uang harus potong saldo pengirim SEKALIGUS tambah saldo penerima (Atomicity). Jika salah satu gagal, batalkan semua!"
  },
  {
    "id": "spk-cv-45",
    "category": "5. Database, Data Modeling & SQL Queries",
    "questionEn": "How do you prevent SQL Injection vulnerabilities in software applications?",
    "workedExample": {
      "modelStructure": "1. Bahaya SQL Injection -> 2. Penerapan Prepared Statements -> 3. Validasi & Sanitasi Masukan",
      "sampleSentence": "Parameterized statements neutralize malicious SQL commands injected through web login forms.",
      "keyPhraseTip": "Frasa kunci: 'parameterized queries', 'prepared statements', dan 'treated as literal data'."
    },
    "targetSentence": "I strictly use parameterized queries and prepared statements, ensuring that user input is treated as literal data rather than executable code.",
    "translationId": "Saya selalu menggunakan kueri terparameterisasi dan prepared statements, memastikan bahwa masukan pengguna diperlakukan sebagai data harfiah dan bukan kode yang dapat dieksekusi.",
    "babyTips": "Kodi Tips: Jangan pernah menggabungkan string kueri dengan tanda plus (+)! Selalu gunakan prepared statement agar input hacker tidak bisa mengeksekusi perintah SQL."
  },
  {
    "id": "spk-cv-46",
    "category": "5. Database, Data Modeling & SQL Queries",
    "questionEn": "What is the difference between WHERE and HAVING clauses in an aggregation query?",
    "workedExample": {
      "modelStructure": "1. Urutan Eksekusi Kueri -> 2. Posisi WHERE (Filter Baris Awal) -> 3. Posisi HAVING (Filter Hasil Agregat)",
      "sampleSentence": "You cannot place aggregate functions like SUM or COUNT inside a WHERE clause; you must use HAVING.",
      "keyPhraseTip": "Frasa kunci: 'filters individual rows before grouping', 'filters aggregated summary groups', dan 'after GROUP BY'."
    },
    "targetSentence": "The WHERE clause filters individual rows before grouping occurs, while the HAVING clause filters aggregated summary groups after GROUP BY is processed.",
    "translationId": "Klausa WHERE memfilter baris individual sebelum pengelompokan terjadi, sedangkan klausa HAVING memfilter grup ringkasan agregat setelah GROUP BY diproses.",
    "babyTips": "Kodi Tips: WHERE untuk menyaring sebelum dikelompokkan, HAVING untuk menyaring hasil agregasi fungsi seperti COUNT atau SUM!"
  },
  {
    "id": "spk-cv-47",
    "category": "5. Database, Data Modeling & SQL Queries",
    "questionEn": "How do you identify and optimize a slow-running SQL database query?",
    "workedExample": {
      "modelStructure": "1. Analisis Execution Plan / EXPLAIN -> 2. Deteksi Full Table Scan -> 3. Penambahan Indeks & Refactoring Kueri",
      "sampleSentence": "Query plans reveal where the database engine spends the most CPU time retrieving records.",
      "keyPhraseTip": "Frasa kunci: 'inspect query execution plan', 'identify expensive table scans', dan 'rewrite subqueries using joins'."
    },
    "targetSentence": "I inspect the query execution plan to identify expensive table scans, verify missing indexes, and rewrite nested subqueries using efficient joins.",
    "translationId": "Saya memeriksa execution plan kueri untuk mengidentifikasi full table scan yang boros, memverifikasi indeks yang hilang, dan menulis ulang subkueri bersarang menggunakan join yang efisien.",
    "babyTips": "Kodi Tips: Gunakan fitur 'Execution Plan' di SQL Server atau EXPLAIN di MySQL untuk melihat di mana letak kemacetan query."
  },
  {
    "id": "spk-cv-48",
    "category": "5. Database, Data Modeling & SQL Queries",
    "questionEn": "What is the purpose of database transactions and the ROLLBACK command?",
    "workedExample": {
      "modelStructure": "1. Pengelompokan Kueri (BEGIN TRANSACTION) -> 2. Verifikasi Keberhasilan (COMMIT) -> 3. Pembatalan Darurat (ROLLBACK)",
      "sampleSentence": "Using rollback protects data integrity when network interruptions occur during batch updates.",
      "keyPhraseTip": "Frasa kunci: 'group multiple statements into single unit', 'ROLLBACK allows undoing', dan 'uncommitted modifications'."
    },
    "targetSentence": "Transactions group multiple SQL statements into a single unit of work, and ROLLBACK allows undoing all uncommitted modifications if an error occurs mid-process.",
    "translationId": "Transaksi mengelompokkan beberapa pernyataan SQL menjadi satu kesatuan kerja, dan ROLLBACK memungkinkan pembatalan semua perubahan yang belum disimpan jika terjadi error di tengah proses.",
    "babyTips": "Kodi Tips: ROLLBACK adalah tombol darurat 'undo' jika ada kueri yang gagal dieksekusi di tengah jalan."
  },
  {
    "id": "spk-cv-49",
    "category": "5. Database, Data Modeling & SQL Queries",
    "questionEn": "How do primary keys and foreign keys maintain referential integrity in relational databases?",
    "workedExample": {
      "modelStructure": "1. Definisi Unik Primary Key -> 2. Hubungan Relasi Foreign Key -> 3. Pencegahan Record Terbengkalai",
      "sampleSentence": "Foreign key constraints enforce business rules by blocking deletions of active parent records.",
      "keyPhraseTip": "Frasa kunci: 'primary key uniquely identifies', 'foreign key references that key', dan 'preventing orphan records'."
    },
    "targetSentence": "A primary key uniquely identifies each record in a parent table, while a foreign key in a child table references that key, preventing orphan records.",
    "translationId": "Kunci primer secara unik mengidentifikasi setiap rekaman di tabel induk, sementara kunci asing di tabel anak mereferensikan kunci tersebut, mencegah rekaman tanpa induk (orphan).",
    "babyTips": "Kodi Tips: Kunci asing memastikan kamu tidak bisa membuat pesanan barang untuk ID pelanggan yang tidak pernah ada di database!"
  },
  {
    "id": "spk-cv-50",
    "category": "5. Database, Data Modeling & SQL Queries",
    "questionEn": "What backup strategies do you implement to guarantee zero database data loss?",
    "workedExample": {
      "modelStructure": "1. Cadangan Penuh (Full Backup) -> 2. Cadangan Selisih (Differential) -> 3. Pemulihan Menit Tepat (Point-in-Time Recovery)",
      "sampleSentence": "Transaction log backups allow restoring the database to the exact minute before corruption occurred.",
      "keyPhraseTip": "Frasa kunci: 'weekly full backups', 'daily differential backups', dan 'continuous transaction log backups'."
    },
    "targetSentence": "I combine weekly full backups, daily differential backups, and continuous transaction log backups to enable point-in-time recovery during disasters.",
    "translationId": "Saya menggabungkan backup penuh mingguan, backup diferensial harian, dan backup log transaksi berkelanjutan untuk memungkinkan pemulihan ke titik waktu tertentu saat terjadi bencana.",
    "babyTips": "Kodi Tips: Strategi 3 lapis standar administrator database: Full Backup + Differential Backup + Transaction Log Backup!"
  },
  {
    "id": "spk-cv-51",
    "category": "6. Cybersecurity, Firewalls & Data Privacy",
    "questionEn": "What is the principle of least privilege in corporate access management?",
    "workedExample": {
      "modelStructure": "1. Batasan Hak Akses Minimum -> 2. Pengurangan Bidang Serangan (Attack Surface) -> 3. Penegakan Kebijakan Peran",
      "sampleSentence": "Restricting administrator privileges prevents routine employee phishing incidents from compromising entire networks.",
      "keyPhraseTip": "Frasa kunci: 'principle of least privilege', 'minimum permissions strictly necessary', dan 'assigned job duties'."
    },
    "targetSentence": "The principle of least privilege dictates that users and services should only be granted the minimum permissions strictly necessary to perform their assigned job duties.",
    "translationId": "Prinsip hak istimewa terkecil (least privilege) menetapkan bahwa pengguna dan layanan hanya boleh diberikan izin minimum yang benar-benar diperlukan untuk menjalankan tugas kerja mereka.",
    "babyTips": "Kodi Tips: Jangan pernah memberi semua orang akses admin! Berikan hak akses secukupnya sesuai jobdesk mereka untuk membatasi dampak jika terkena virus."
  },
  {
    "id": "spk-cv-52",
    "category": "6. Cybersecurity, Firewalls & Data Privacy",
    "questionEn": "How does Multi-Factor Authentication (MFA) defend against credential theft?",
    "workedExample": {
      "modelStructure": "1. Kombinasi Faktor Verifikasi -> 2. Perlindungan dari Kebocoran Password -> 3. Penggunaan Aplikasi Authenticator",
      "sampleSentence": "Requiring a time-based one-time passcode stops attackers who obtain passwords from dark web breaches.",
      "keyPhraseTip": "Frasa kunci: 'independent authentication factors', 'password combined with authenticator app', dan 'blocking unauthorized logins'."
    },
    "targetSentence": "MFA requires two or more independent authentication factors, such as a password combined with an authenticator app token, blocking unauthorized logins even if passwords leak.",
    "translationId": "MFA membutuhkan dua atau lebih faktor otentikasi independen, seperti kata sandi yang dikombinasikan dengan token aplikasi autentikator, memblokir login tanpa izin bahkan jika kata sandi bocor.",
    "babyTips": "Kodi Tips: Tiga faktor autentikasi: sesuatu yang kamu tahu (password), sesuatu yang kamu punya (HP/token), dan sesuatu dari dirimu (sidik jari)."
  },
  {
    "id": "spk-cv-53",
    "category": "6. Cybersecurity, Firewalls & Data Privacy",
    "questionEn": "What are the hallmarks of a sophisticated email phishing attempt and how do you train staff?",
    "workedExample": {
      "modelStructure": "1. Identifikasi Ciri Tipuan Email -> 2. Analisis Header & Tautan URL -> 3. Edukasi Simulasi Berkala untuk Staf",
      "sampleSentence": "Regular phishing simulations teach employees to inspect sender email addresses before clicking attachments.",
      "keyPhraseTip": "Frasa kunci: 'spoofed sender domains', 'urgent emotional language', dan 'simulated phishing tests'."
    },
    "targetSentence": "Hallmarks include spoofed sender domains, urgent emotional language, and suspicious attachment links; I train staff through simulated phishing tests and reporting drills.",
    "translationId": "Ciri-cirinya meliputi domain pengirim palsu, bahasa emosional yang mendesak, dan tautan lampiran mencurigakan; saya melatih staf melalui uji simulasi phishing dan latihan pelaporan.",
    "babyTips": "Kodi Tips: Ciri khas phishing: pura-pura dari pimpinan, menuntut transfer segera atau klik link reset akun darurat. Verifikasi selalu pengirimnya!"
  },
  {
    "id": "spk-cv-54",
    "category": "6. Cybersecurity, Firewalls & Data Privacy",
    "questionEn": "What is the difference between symmetric and asymmetric data encryption?",
    "workedExample": {
      "modelStructure": "1. Enkripsi Simetris (Satu Kunci / Cepat) -> 2. Enkripsi Asimetris (Kunci Publik-Privat / Aman) -> 3. Kolaborasi pada Protokol SSL/TLS",
      "sampleSentence": "SSL certificates use asymmetric cryptography to securely exchange a symmetric session key for fast transmission.",
      "keyPhraseTip": "Frasa kunci: 'symmetric uses single shared key', 'asymmetric utilizes public and private keys', dan 'encryption and decryption'."
    },
    "targetSentence": "Symmetric encryption uses a single shared secret key for both encryption and decryption, while asymmetric encryption utilizes a public key for encryption and a private key for decryption.",
    "translationId": "Enkripsi simetris menggunakan satu kunci rahasia bersama untuk enkripsi dan dekripsi, sedangkan enkripsi asimetris memanfaatkan kunci publik untuk enkripsi dan kunci privat untuk dekripsi.",
    "babyTips": "Kodi Tips: Enkripsi simetris (AES) sangat cepat untuk data besar. Enkripsi asimetris (RSA/ECC) digunakan untuk pertukaran kunci aman seperti pada HTTPS SSL!"
  },
  {
    "id": "spk-cv-55",
    "category": "6. Cybersecurity, Firewalls & Data Privacy",
    "questionEn": "How does a Next-Generation Firewall (NGFW) differ from a traditional port packet filter?",
    "workedExample": {
      "modelStructure": "1. Batasan Filter Port Tradisional -> 2. Fitur Deep Packet Inspection -> 3. Deteksi Ancaman Tingkat Aplikasi",
      "sampleSentence": "Application awareness allows NGFWs to block specific web applications even when they operate over standard ports.",
      "keyPhraseTip": "Frasa kunci: 'traditional firewalls filter IP and port', 'NGFWs perform deep packet inspection', dan 'application awareness'."
    },
    "targetSentence": "Traditional firewalls only filter traffic based on IP addresses and port numbers, whereas NGFWs perform deep packet inspection, application awareness, and malware detection.",
    "translationId": "Firewall tradisional hanya memfilter lalu lintas berdasarkan alamat IP dan nomor port, sedangkan NGFW melakukan inspeksi paket mendalam, kesadaran aplikasi, dan deteksi malware.",
    "babyTips": "Kodi Tips: NGFW bisa mengenali bahwa lalu lintas port 80/443 bukan sekadar web biasa, tapi bisa memblokir aplikasi torrent atau transfer file mencurigakan di dalamnya."
  },
  {
    "id": "spk-cv-56",
    "category": "6. Cybersecurity, Firewalls & Data Privacy",
    "questionEn": "What immediate steps must you take when a workstation on the network is infected with ransomware?",
    "workedExample": {
      "modelStructure": "1. Isolasi Fisik Jaringan Instan -> 2. Pencegahan Penularan Lateral -> 3. Pemulihan Berkas dari Backup Kebal",
      "sampleSentence": "Physically disconnecting the host halts the ransomware from spreading encryptor scripts to network shared drives.",
      "keyPhraseTip": "Frasa kunci: 'disconnect infected machine from network', 'preserve volatile memory', dan 'restore from offline backups'."
    },
    "targetSentence": "I immediately disconnect the infected machine from the network cable and Wi-Fi, preserve volatile memory for forensics, and restore encrypted files from offline backups.",
    "translationId": "Saya segera mencabut mesin yang terinfeksi dari kabel jaringan dan Wi-Fi, mengamankan memori volatil untuk forensik, dan memulihkan berkas yang terenkripsi dari cadangan offline.",
    "babyTips": "Kodi Tips: Langkah nomor satu ransomware: CABUT KABEL LAN & MATIKAN WIFI DETIK ITU JUGA agar tidak menular ke server lain di kantor!"
  },
  {
    "id": "spk-cv-57",
    "category": "6. Cybersecurity, Firewalls & Data Privacy",
    "questionEn": "What is the CIA Triad and how does it balance corporate information security policies?",
    "workedExample": {
      "modelStructure": "1. Kerahasiaan (Confidentiality) -> 2. Keutuhan & Akurasi (Integrity) -> 3. Ketersediaan Sistem (Availability)",
      "sampleSentence": "A secure system maintains strong access controls without crippling daily operational availability.",
      "keyPhraseTip": "Frasa kunci: 'Confidentiality Integrity Availability', 'balancing privacy protection', dan 'reliable system access'."
    },
    "targetSentence": "The CIA Triad stands for Confidentiality, Integrity, and Availability, balancing privacy protection, data accuracy, and reliable system access for authorized employees.",
    "translationId": "CIA Triad adalah singkatan dari Confidentiality, Integrity, dan Availability, menyeimbangkan perlindungan privasi, keakuratan data, dan akses sistem yang andal bagi karyawan yang berhak.",
    "babyTips": "Kodi Tips: Tiga hukum dasar keamanan siber: Data tidak boleh bocor (C), data tidak boleh dirusak (I), dan data harus selalu siap dipakai saat dibutuhkan (A)!"
  },
  {
    "id": "spk-cv-58",
    "category": "6. Cybersecurity, Firewalls & Data Privacy",
    "questionEn": "How does a Zero Trust security architecture protect modern cloud enterprise networks?",
    "workedExample": {
      "modelStructure": "1. Filosofi 'Never Trust Always Verify' -> 2. Validasi Identitas Berkelanjutan -> 3. Pemeriksaan Kondisi Perangkat",
      "sampleSentence": "Eliminating implicit internal trust prevents attackers with stolen credentials from moving freely across departments.",
      "keyPhraseTip": "Frasa kunci: 'never trust always verify', 'continuous identity validation', dan 'device health checks'."
    },
    "targetSentence": "Zero Trust operates under the philosophy of 'never trust, always verify', requiring continuous identity validation and device health checks for every access request.",
    "translationId": "Zero Trust beroperasi di bawah filosofi 'jangan pernah percaya, selalu verifikasi', membutuhkan validasi identitas berkelanjutan dan pemeriksaan kesehatan perangkat untuk setiap permintaan akses.",
    "babyTips": "Kodi Tips: Zero Trust tidak membedakan antara jaringan di dalam kantor atau di luar kantor; semua orang dan perangkat wajib diverifikasi setiap saat."
  },
  {
    "id": "spk-cv-59",
    "category": "6. Cybersecurity, Firewalls & Data Privacy",
    "questionEn": "What is a Denial of Service (DoS) attack and how do organizations mitigate distributed flood traffic?",
    "workedExample": {
      "modelStructure": "1. Konsep Serangan Banjir Lalu Lintas -> 2. Dampak Kelumpuhan Layanan -> 3. Solusi Cloudflare/CDN & Penyaringan Trafik",
      "sampleSentence": "Global content delivery networks absorb volumetric DDoS floods before the traffic reaches the origin server.",
      "keyPhraseTip": "Frasa kunci: 'floods servers with fake traffic', 'exhaust bandwidth and crash services', dan 'CDN caching and rate limiting'."
    },
    "targetSentence": "A DoS attack floods servers with fake traffic to exhaust bandwidth and crash services; organizations mitigate it using scrubbing centers, CDN caching, and rate limiting.",
    "translationId": "Serangan DoS membanjiri server dengan lalu lintas palsu untuk menghabiskan bandwidth dan merusak layanan; organisasi memitigasinya menggunakan pusat scrubbing, caching CDN, dan rate limiting.",
    "babyTips": "Kodi Tips: DoS seperti ribuan orang bayaran yang sengaja mengantre di kasir toko untuk membuat pembeli asli tidak bisa masuk belanja."
  },
  {
    "id": "spk-cv-60",
    "category": "6. Cybersecurity, Firewalls & Data Privacy",
    "questionEn": "How do you safely manage and store administrative passwords in an IT support team?",
    "workedExample": {
      "modelStructure": "1. Penggunaan Password Manager Terenkripsi -> 2. Standar Panjang Passphrase -> 3. Kebijakan Rotasi & Larangan Plaintext",
      "sampleSentence": "Storing credentials in a centralized encrypted vault allows seamless access revocation when personnel leave.",
      "keyPhraseTip": "Frasa kunci: 'enterprise password managers with encryption', 'complex passphrases', dan 'prohibit sharing plain text'."
    },
    "targetSentence": "I enforce enterprise password managers with end-to-end encryption, mandate complex passphrases, rotate credentials regularly, and prohibit sharing credentials in plain text.",
    "translationId": "Saya memberlakukan pengelola kata sandi perusahaan dengan enkripsi end-to-end, mewajibkan frasa sandi yang rumit, merotasi kredensial secara berkala, dan melarang berbagi kata sandi dalam teks polos.",
    "babyTips": "Kodi Tips: Jangan pernah menyimpan password di sticky note atau file Notepad! Gunakan password manager resmi yang terenkripsi."
  },
  {
    "id": "spk-cv-61",
    "category": "7. Programming, Python & Algorithms",
    "questionEn": "How do you automate file organization and batch renaming using Python scripts?",
    "workedExample": {
      "modelStructure": "1. Pustaka Python Utama (os, shutil) -> 2. Pemindaian Direktori & Pola Regex -> 3. Pemindahan Berkas Otomatis",
      "sampleSentence": "Automating directory sorting replaces hours of tedious manual file sorting with a 10-line script.",
      "keyPhraseTip": "Frasa kunci: 'os and shutil modules', 'regular expressions', dan 'move files automatically'."
    },
    "targetSentence": "I use the os and shutil modules to scan directory paths, parse timestamps or filenames with regular expressions, and move files to structured folders automatically.",
    "translationId": "Saya menggunakan modul os dan shutil untuk memindai jalur direktori, membedah catatan waktu atau nama berkas dengan regular expression, dan memindahkan berkas ke folder terstruktur secara otomatis.",
    "babyTips": "Kodi Tips: Berasal dari buku 'Automate the Boring Stuff with Python'. Modul `os` dan `shutil` adalah senjata ampuh merapikan ribuan file kantor dalam 2 detik!"
  },
  {
    "id": "spk-cv-62",
    "category": "7. Programming, Python & Algorithms",
    "questionEn": "What is Big O notation and why is it crucial for evaluating software algorithms?",
    "workedExample": {
      "modelStructure": "1. Konsep Skalabilitas Algoritma -> 2. Perbandingan Kompleksitas Waktu & Memori -> 3. Pemilihan Solusi Optimal",
      "sampleSentence": "Big O allows comparing algorithmic efficiency independent of machine hardware and CPU clock speeds.",
      "keyPhraseTip": "Frasa kunci: 'quantifies execution time or memory space', 'as input size grows', dan 'most scalable solution'."
    },
    "targetSentence": "Big O notation quantifies how an algorithm's execution time or memory space scales as the input size grows, helping engineers select the most scalable solution.",
    "translationId": "Notasi Big O mengukur bagaimana waktu eksekusi atau ruang memori suatu algoritma berkembang seiring bertambahnya ukuran data masukan, membantu insinyur memilih solusi yang paling terukur.",
    "babyTips": "Kodi Tips: Berasal dari buku 'Grokking Algorithms'. O(1) konstan cepat kilat, O(log n) pencarian biner mantap, O(n) linier, O(n^2) lambat saat data membesar!"
  },
  {
    "id": "spk-cv-63",
    "category": "7. Programming, Python & Algorithms",
    "questionEn": "How does the Binary Search algorithm work and what prerequisite must be satisfied before using it?",
    "workedExample": {
      "modelStructure": "1. Syarat Wajib Array Terurut -> 2. Mekanisme Bagi Dua (Divide and Conquer) -> 3. Efisiensi Luar Biasa O(log n)",
      "sampleSentence": "Searching one million sorted records with binary search requires a maximum of only twenty comparisons.",
      "keyPhraseTip": "Frasa kunci: 'repeatedly divides search interval in half', 'O(log n) time', dan 'requires array to be sorted beforehand'."
    },
    "targetSentence": "Binary Search repeatedly divides a search interval in half to find target items in O(log n) time, but it strictly requires the input array to be sorted beforehand.",
    "translationId": "Binary Search berulang kali membagi dua interval pencarian untuk menemukan item target dalam waktu O(log n), tetapi algoritma ini secara mutlak mewajibkan array masukan harus sudah diurutkan terlebih dahulu.",
    "babyTips": "Kodi Tips: Seperti menebak halaman kamus: buka pas di tengah, jika kata yang dicari lebih besar, buang separuh bagian kiri, lalu bagi dua lagi!"
  },
  {
    "id": "spk-cv-64",
    "category": "7. Programming, Python & Algorithms",
    "questionEn": "What are Python list comprehensions and how do they make data processing code cleaner?",
    "workedExample": {
      "modelStructure": "1. Sintaksis Ringkas Satu Baris -> 2. Kemampuan Transformasi & Filter -> 3. Peningkatan Keterbacaan & Kecepatan",
      "sampleSentence": "Using list comprehensions produces Pythonic code that eliminates verbose temporary accumulator arrays.",
      "keyPhraseTip": "Frasa kunci: 'concise syntax to transform and filter', 'single readable line', dan 'executing faster than manual loops'."
    },
    "targetSentence": "List comprehensions provide a concise syntax to transform and filter iterable sequences in a single readable line, executing faster than manual for-loops.",
    "translationId": "List comprehension menyediakan sintaksis ringkas untuk mengubah dan memfilter urutan iterable dalam satu baris kode yang mudah dibaca, serta berjalan lebih cepat daripada perulangan for manual.",
    "babyTips": "Kodi Tips: Mengubah 4 baris loop `for` menjadi satu baris elegan `[x * 2 for x in data if x > 10]` adalah ciri programmer Python berkelas!"
  },
  {
    "id": "spk-cv-65",
    "category": "7. Programming, Python & Algorithms",
    "questionEn": "What is the difference between a Stack and a Queue data structure?",
    "workedExample": {
      "modelStructure": "1. Karakteristik Stack LIFO -> 2. Karakteristik Queue FIFO -> 3. Contoh Kasus Nyata Komputer",
      "sampleSentence": "Undo buffers in text editors utilize stacks, while background printer job spoolers rely on queues.",
      "keyPhraseTip": "Frasa kunci: 'Stack follows Last-In First-Out', 'Queue follows First-In First-Out', dan 'LIFO versus FIFO'."
    },
    "targetSentence": "A Stack follows the Last-In First-Out (LIFO) principle like a stack of plates, whereas a Queue follows First-In First-Out (FIFO) like a line of customers at a ticket counter.",
    "translationId": "Stack mengikuti prinsip Last-In First-Out (LIFO) seperti tumpukan piring kotor, sedangkan Queue mengikuti First-In First-Out (FIFO) seperti antrean pelanggan di loket tiket.",
    "babyTips": "Kodi Tips: Fitur 'Ctrl+Z' (Undo) memakai Stack (perintah terakhir dibatalkan duluan). Antrean printer kantor memakai Queue (dokumen pertama dicetak duluan)!"
  },
  {
    "id": "spk-cv-66",
    "category": "7. Programming, Python & Algorithms",
    "questionEn": "How do you handle exceptions and runtime errors gracefully in Python?",
    "workedExample": {
      "modelStructure": "1. Blok Pengaman try-except -> 2. Penanganan Error Spesifik -> 3. Pembersihan Sumber Daya di finally",
      "sampleSentence": "Catching targeted exceptions prevents programs from terminating abruptly when network files are missing.",
      "keyPhraseTip": "Frasa kunci: 'wrap risky operations in try-except', 'catch specific error types', dan 'finally blocks to clean up resources'."
    },
    "targetSentence": "I wrap risky operations in try-except blocks, catch specific error types like FileNotFoundError, and use finally blocks to clean up open resource handles.",
    "translationId": "Saya membungkus operasi berisiko dalam blok try-except, menangkap jenis error spesifik seperti FileNotFoundError, dan menggunakan blok finally untuk membersihkan handle sumber daya yang terbuka.",
    "babyTips": "Kodi Tips: Jangan biarkan program langsung crash di depan pengguna. Tangkap error-nya secara halus dan tampilkan pesan bantuan!"
  },
  {
    "id": "spk-cv-67",
    "category": "7. Programming, Python & Algorithms",
    "questionEn": "What is a Hash Table (or Python dictionary) and why does it achieve O(1) average lookup speed?",
    "workedExample": {
      "modelStructure": "1. Pemetaan Kunci ke Indeks -> 2. Peran Fungsi Hashing Matematika -> 3. Efisiensi Konstan O(1)",
      "sampleSentence": "Hash tables avoid linear searching by translating keys directly into specific memory addresses.",
      "keyPhraseTip": "Frasa kunci: 'maps keys to bucket indices', 'mathematical hashing function', dan 'O(1) constant time on average'."
    },
    "targetSentence": "A Hash Table maps keys to bucket array indices using a mathematical hashing function, allowing direct instant access in O(1) constant time on average.",
    "translationId": "Hash Table memetakan kunci ke indeks array menggunakan fungsi hashing matematika, memungkinkan akses instan langsung dalam waktu rata-rata konstan O(1).",
    "babyTips": "Kodi Tips: Kamus Python (`dict`) adalah implementasi Hash Table. Tidak perlu mencari satu per satu dari awal, fungsi hash langsung menghitung posisi alamat memorinya!"
  },
  {
    "id": "spk-cv-68",
    "category": "7. Programming, Python & Algorithms",
    "questionEn": "How does recursion work and what is the consequence of omitting a base case?",
    "workedExample": {
      "modelStructure": "1. Konsep Pemanggilan Diri Sendiri -> 2. Peran Krusial Base Case (Rem Penghenti) -> 3. Bahaya Fatal Stack Overflow",
      "sampleSentence": "Every recursive algorithm must define a termination condition to prevent memory exhaustion.",
      "keyPhraseTip": "Frasa kunci: 'function calls itself', 'smaller subproblems', dan 'omitting base case causes stack overflow'."
    },
    "targetSentence": "Recursion is a programming technique where a function calls itself to solve smaller subproblems; omitting a base case causes infinite looping and stack overflow crashes.",
    "translationId": "Rekursi adalah teknik pemrograman di mana suatu fungsi memanggil dirinya sendiri untuk memecahkan submasalah yang lebih kecil; menghilangkan base case menyebabkan perulangan tak terbatas dan crash stack overflow.",
    "babyTips": "Kodi Tips: Base case adalah rem darurat rekursi. Tanpa rem base case, memori komputer akan penuh sesak dan aplikasi langsung meledak!"
  },
  {
    "id": "spk-cv-69",
    "category": "7. Programming, Python & Algorithms",
    "questionEn": "How do you scrape and extract data from web pages using Python libraries?",
    "workedExample": {
      "modelStructure": "1. Pengiriman Permintaan HTTP -> 2. Parsing Pohon Dokumen HTML -> 3. Ekstraksi Tag & Penyimpanan CSV",
      "sampleSentence": "Targeting CSS selectors with BeautifulSoup allows harvesting tabular web records into clean spreadsheets.",
      "keyPhraseTip": "Frasa kunci: 'requests library for HTTP', 'parse HTML with BeautifulSoup', dan 'exporting to CSV'."
    },
    "targetSentence": "I send HTTP GET requests using the requests library and parse HTML structures with BeautifulSoup, extracting specific data tags and exporting them to CSV.",
    "translationId": "Saya mengirim permintaan HTTP GET menggunakan pustaka requests dan membedah struktur HTML dengan BeautifulSoup, mengekstrak tag data spesifik dan mengekspornya ke CSV.",
    "babyTips": "Kodi Tips: Buku 'Automate the Boring Stuff' mengajarkan kombinasi requests + BeautifulSoup untuk mengambil data tabel kurs atau harga online secara otomatis."
  },
  {
    "id": "spk-cv-70",
    "category": "7. Programming, Python & Algorithms",
    "questionEn": "What are the benefits of writing unit tests for your software functions?",
    "workedExample": {
      "modelStructure": "1. Verifikasi Otomatis Tiap Fungsi -> 2. Pengujian Kasus Batas (Edge Cases) -> 3. Pencegahan Bug Regresi",
      "sampleSentence": "Automated unit test suites give developers confidence to refactor complex modules without breaking existing features.",
      "keyPhraseTip": "Frasa kunci: 'verify individual functions produce expected outputs', 'under edge cases', dan 'preventing regression bugs'."
    },
    "targetSentence": "Unit tests automatically verify that individual functions produce expected outputs under edge cases, preventing regression bugs when modifying codebase logic.",
    "translationId": "Unit test secara otomatis memverifikasi bahwa fungsi individual menghasilkan keluaran yang diharapkan pada kondisi batas, mencegah bug regresi saat memodifikasi logika basis kode.",
    "babyTips": "Kodi Tips: Unit test adalah jaring pengaman programmer. Saat kita mengubah kode lama, tes otomatis langsung memberi tahu jika ada fitur yang rusak."
  },
  {
    "id": "spk-cv-71",
    "category": "8. IT Helpdesk, Customer Service & Ticketing",
    "questionEn": "How do you handle an angry or frustrated user whose computer crashed right before a deadline?",
    "workedExample": {
      "modelStructure": "1. Mendengarkan Aktif Penuh Empati -> 2. Menghindari Sikap Defensif -> 3. Komitmen Prioritas Penyelesaian Cepat",
      "sampleSentence": "Acknowledging user stress and taking immediate ownership defuses tension before diving into technical repairs.",
      "keyPhraseTip": "Frasa kunci: 'listen actively with empathy', 'validate frustration without being defensive', dan 'resolving it swiftly'."
    },
    "targetSentence": "I listen actively with empathy, validate their frustration without being defensive, and reassure them that their issue is my top priority while resolving it swiftly.",
    "translationId": "Saya mendengarkan secara aktif dengan empati, memvalidasi rasa frustrasi mereka tanpa bersikap defensif, dan meyakinkan mereka bahwa masalah mereka adalah prioritas utama saya sambil menyelesaikannya dengan cepat.",
    "babyTips": "Kodi Tips: Berasal dari buku 'Oxford English for IT'. Dengarkan dulu kemarahan mereka sampai tuntas, jangan memotong pembicaraan, lalu fokus beri solusi nyata!"
  },
  {
    "id": "spk-cv-72",
    "category": "8. IT Helpdesk, Customer Service & Ticketing",
    "questionEn": "What information do you record when creating a comprehensive IT support ticket?",
    "workedExample": {
      "modelStructure": "1. Identitas Pengguna & Aset Komputer -> 2. Kronologi & Kode Pesan Error -> 3. Riwayat Tindakan & Status Tiket",
      "sampleSentence": "Detailed ticket logs allow secondary support tiers to understand the incident history without starting from scratch.",
      "keyPhraseTip": "Frasa kunci: 'exact error messages', 'steps to reproduce fault', dan 'troubleshooting actions attempted'."
    },
    "targetSentence": "I document the user's details, exact error messages, steps to reproduce the fault, troubleshooting actions attempted, and the assigned priority level.",
    "translationId": "Saya mendokumentasikan detail pengguna, pesan error persis, langkah-langkah untuk mereproduksi kesalahan, tindakan perbaikan yang telah dicoba, dan tingkat prioritas yang ditetapkan.",
    "babyTips": "Kodi Tips: Tiket yang bagus harus bisa dibaca dan dipahami oleh teknisi lain tanpa perlu bertanya ulang kepada pengguna."
  },
  {
    "id": "spk-cv-73",
    "category": "8. IT Helpdesk, Customer Service & Ticketing",
    "questionEn": "How do you assist a non-technical employee over the phone to check their IP address?",
    "workedExample": {
      "modelStructure": "1. Panduan Visual yang Tenang -> 2. Petunjuk Tombol Fisik Sederhana -> 3. Menghindari Istilah Teknis Membingungkan",
      "sampleSentence": "Guiding remote users through clear physical keyboard shortcuts avoids miscommunication and reduces call duration.",
      "keyPhraseTip": "Frasa kunci: 'calm step-by-step guidance', 'press Windows plus R', dan 'without using jargon'."
    },
    "targetSentence": "I provide calm step-by-step guidance, instructing them to right-click the network tray icon or press Windows plus R to type cmd and ipconfig without using jargon.",
    "translationId": "Saya memberikan panduan tenang langkah demi langkah, menginstruksikan mereka untuk mengeklik kanan ikon baki jaringan atau menekan tombol Windows plus R untuk mengetik cmd dan ipconfig tanpa menggunakan jargon rumit.",
    "babyTips": "Kodi Tips: Berasal dari 'Vocational English for IT'. Hindari singkatan aneh! Bimbing posisi tombol keyboard secara visual dan ramah."
  },
  {
    "id": "spk-cv-74",
    "category": "8. IT Helpdesk, Customer Service & Ticketing",
    "questionEn": "What is an SLA (Service Level Agreement) and how do you ensure compliance under high ticket volume?",
    "workedExample": {
      "modelStructure": "1. Definisi Kontrak Waktu SLA -> 2. Pemantauan Timer Antrean -> 3. Eskalasi Cepat Sebelum Waktu Habis",
      "sampleSentence": "Prioritizing tickets based on operational impact ensures high-severity outages are addressed within contractual windows.",
      "keyPhraseTip": "Frasa kunci: 'guaranteed resolution and response timeframes', 'monitoring queue timers', dan 'escalating severe blockers'."
    },
    "targetSentence": "An SLA defines guaranteed resolution and response timeframes, and I ensure compliance by monitoring queue timers and escalating severe blockers before limits expire.",
    "translationId": "SLA menetapkan batas waktu respons dan penyelesaian yang dijamin, dan saya memastikan kepatuhan dengan memantau penghitung waktu antrean serta meneruskan kendala berat sebelum batas waktu habis.",
    "babyTips": "Kodi Tips: SLA adalah janji resmi departemen IT kepada perusahaan (misal: tiket prioritas tinggi harus selesai dalam 2 jam). Pantau terus timer antrean tiket!"
  },
  {
    "id": "spk-cv-75",
    "category": "8. IT Helpdesk, Customer Service & Ticketing",
    "questionEn": "How do you maintain a clear Knowledge Base (KB) for internal IT teams?",
    "workedExample": {
      "modelStructure": "1. Panduan Ringkas & Tangkapan Layar -> 2. Baris Perintah Teruji -> 3. Dokumentasi Kasus Berulang",
      "sampleSentence": "A well-maintained knowledge base accelerates onboarding and standardizes technical troubleshooting across support shifts.",
      "keyPhraseTip": "Frasa kunci: 'concise troubleshooting walkthroughs', 'step-by-step screenshots', dan 'solutions for recurring tickets'."
    },
    "targetSentence": "I write concise troubleshooting walkthroughs with step-by-step screenshots, verified command lines, and solutions for recurring user tickets.",
    "translationId": "Saya menulis panduan pemecahan masalah yang ringkas dengan tangkapan layar langkah demi langkah, baris perintah terverifikasi, dan solusi untuk tiket pengguna yang sering berulang.",
    "babyTips": "Kodi Tips: Dokumentasi KB yang bagus menghemat waktu seluruh tim IT. Setiap kali berhasil memecahkan masalah langka, segera tuliskan resepnya di Knowledge Base!"
  },
  {
    "id": "spk-cv-76",
    "category": "8. IT Helpdesk, Customer Service & Ticketing",
    "questionEn": "What steps do you take when onboarding a new employee with hardware and software credentials?",
    "workedExample": {
      "modelStructure": "1. Penyiapan Fisik Perangkat Keras -> 2. Pembuatan Akun Domain & Email -> 3. Orientasi Singkat Penggunaan Sistem",
      "sampleSentence": "Thorough onboarding checklists ensure new hires have secure access to necessary applications on their first morning.",
      "keyPhraseTip": "Frasa kunci: 'provision configured hardware', 'Active Directory accounts with least privilege', dan 'initial orientation'."
    },
    "targetSentence": "I provision configured hardware, create Active Directory accounts with least privilege roles, assign software licenses, and conduct a brief initial orientation.",
    "translationId": "Saya menyiapkan perangkat keras yang telah terkonfigurasi, membuat akun Active Directory dengan peran least privilege, menetapkan lisensi perangkat lunak, dan mengadakan orientasi awal singkat.",
    "babyTips": "Kodi Tips: Onboarding yang mulus membuat karyawan baru terkesan dengan profesionalisme tim IT sejak hari pertama bekerja."
  },
  {
    "id": "spk-cv-77",
    "category": "8. IT Helpdesk, Customer Service & Ticketing",
    "questionEn": "How do you prioritize tickets when multiple users report urgent issues simultaneously?",
    "workedExample": {
      "modelStructure": "1. Evaluasi Dampak Skala Bisnis -> 2. Hitung Jumlah Pengguna Terdampak -> 3. Utamakan Jalur Kritis Perusahaan",
      "sampleSentence": "Focusing first on incidents that halt manufacturing production lines protects corporate revenue.",
      "keyPhraseTip": "Frasa kunci: 'evaluate business impact', 'number of affected users', dan 'prioritizing widespread server outages'."
    },
    "targetSentence": "I evaluate the business impact and number of affected users, prioritizing widespread server or production outages over isolated single-user workstation requests.",
    "translationId": "Saya mengevaluasi dampak bisnis dan jumlah pengguna yang terdampak, memprioritaskan pemadaman server atau jalur produksi yang meluas di atas permintaan komputer satu pengguna yang terisolasi.",
    "babyTips": "Kodi Tips: Matriks Prioritas: Jika server gudang pabrik mati dan 100 orang tidak bisa bekerja, itu darurat nomor 1 dibanding satu mouse karyawan yang rusak."
  },
  {
    "id": "spk-cv-78",
    "category": "8. IT Helpdesk, Customer Service & Ticketing",
    "questionEn": "How do you handle remote desktop support sessions securely and ethically?",
    "workedExample": {
      "modelStructure": "1. Izin Eksplisit Pengguna -> 2. Transparansi Tindakan Administratif -> 3. Pemutusan Sesi Jarak Jauh Cepat",
      "sampleSentence": "Explaining remote mouse movements over the phone builds trust and reassures users about data confidentiality.",
      "keyPhraseTip": "Frasa kunci: 'obtain explicit user consent', 'announce every administrative action', dan 'disconnect session upon completion'."
    },
    "targetSentence": "I always obtain explicit user consent before connecting, announce every administrative action taken, and disconnect the remote session immediately upon completion.",
    "translationId": "Saya selalu meminta izin eksplisit pengguna sebelum terhubung, memberi tahu setiap tindakan administratif yang diambil, dan segera memutus sesi jarak jauh setelah selesai.",
    "babyTips": "Kodi Tips: Etika remote desktop: Jangan buka folder foto atau dokumen pribadi pengguna! Selalu jelaskan apa yang sedang kamu klik di layar mereka."
  },
  {
    "id": "spk-cv-79",
    "category": "8. IT Helpdesk, Customer Service & Ticketing",
    "questionEn": "What procedure do you follow when decommissioning old hardware to prevent corporate data leakage?",
    "workedExample": {
      "modelStructure": "1. Pencopotan Label Aset Perusahaan -> 2. Sanitasi Disk Standar Militer (Wiping) -> 3. Sertifikasi Penghancuran Fisik",
      "sampleSentence": "Overwriting drive sectors multiple times ensures proprietary financial databases cannot be retrieved from recycled disks.",
      "keyPhraseTip": "Frasa kunci: 'cryptographic disk sanitization', 'physical destruction', dan 'record recycling certificates'."
    },
    "targetSentence": "I remove all company asset tags, perform multi-pass cryptographic disk sanitization using DBAN or physical destruction, and record recycling certificates.",
    "translationId": "Saya mencopot semua label aset perusahaan, melakukan sanitasi disk kriptografi beberapa putaran menggunakan DBAN atau penghancuran fisik, dan mencatat sertifikat daur ulang.",
    "babyTips": "Kodi Tips: Menghapus file ke Recycle Bin atau format biasa belum aman! Wajib gunakan software penghapus data standar militer (DBAN) sebelum komputer dibuang."
  },
  {
    "id": "spk-cv-80",
    "category": "8. IT Helpdesk, Customer Service & Ticketing",
    "questionEn": "How do you communicate technical system maintenance schedules to avoid company-wide disruptions?",
    "workedExample": {
      "modelStructure": "1. Pengumuman Terjadwal Jauh Hari -> 2. Penjelasan Perkiraan Downtime -> 3. Eksekusi pada Jam Sepi (Off-Peak)",
      "sampleSentence": "Notifying department heads in advance allows teams to adjust work schedules and minimizes surprise disruptions.",
      "keyPhraseTip": "Frasa kunci: 'advance broadcast notifications', 'expected service downtimes', dan 'off-peak weekend hours'."
    },
    "targetSentence": "I send advance broadcast notifications detailing maintenance windows, explain expected service downtimes, and schedule intensive updates during off-peak weekend hours.",
    "translationId": "Saya mengirimkan pemberitahuan siaran lebih awal yang merinci jendela waktu pemeliharaan, menjelaskan perkiraan waktu henti layanan, dan menjadwalkan pembaruan intensif selama jam sepi di akhir pekan.",
    "babyTips": "Kodi Tips: Jangan lakukan restart server di jam sibuk kerja Senin pagi! Lakukan di hari Sabtu/Minggu malam setelah mengirim pengumuman H-3."
  },
  {
    "id": "spk-cv-81",
    "category": "9. Team Collaboration & Project Agility",
    "questionEn": "How do you contribute to daily Agile standup meetings in a software or IT support team?",
    "workedExample": {
      "modelStructure": "1. Laporan Capaian Kemarin -> 2. Komitmen Target Hari Ini -> 3. Pengangkatan Hambatan (Blocker)",
      "sampleSentence": "Keeping daily standup updates brief and actionable ensures teammates can unblock dependencies quickly.",
      "keyPhraseTip": "Frasa kunci: 'completed yesterday', 'delivering today', dan 'technical impediments requiring collaboration'."
    },
    "targetSentence": "I clearly summarize what I completed yesterday, what I am delivering today, and highlight any technical impediments requiring collaboration.",
    "translationId": "Saya dengan jelas merangkum apa yang saya selesaikan kemarin, apa yang saya kerjakan hari ini, dan menyoroti hambatan teknis apa pun yang membutuhkan kolaborasi.",
    "babyTips": "Kodi Tips: Tiga pertanyaan emas Daily Standup: 1. Kemarin selesai apa? 2. Hari ini mau ngerjain apa? 3. Ada hambatan (blocker) apa?"
  },
  {
    "id": "spk-cv-82",
    "category": "9. Team Collaboration & Project Agility",
    "questionEn": "How do you resolve a technical disagreement with a teammate regarding system architecture?",
    "workedExample": {
      "modelStructure": "1. Evaluasi Objektif Dua Opsi -> 2. Uji Coba Tolok Ukur Nyata -> 3. Konsensus Berbasis Data",
      "sampleSentence": "Focusing on empirical test results removes personal ego from architectural architectural decision-making.",
      "keyPhraseTip": "Frasa kunci: 'evaluate proposals objectively', 'proof-of-concept benchmarks', dan 'build consensus around data evidence'."
    },
    "targetSentence": "I evaluate both proposals objectively based on system scalability and maintainability, test proof-of-concept benchmarks, and build consensus around data evidence.",
    "translationId": "Saya mengevaluasi kedua usulan secara objektif berdasarkan skalabilitas dan pemeliharaan sistem, menguji tolok ukur proof-of-concept, dan membangun konsensus seputar bukti data.",
    "babyTips": "Kodi Tips: Jangan berdebat kusir pakai perasaan! Buat uji coba mini (Proof-of-Concept) dan biarkan angka performa yang menentukan keputusan tim."
  },
  {
    "id": "spk-cv-83",
    "category": "9. Team Collaboration & Project Agility",
    "questionEn": "How do you use version control tools like Git to collaborate safely without overriding colleagues' code?",
    "workedExample": {
      "modelStructure": "1. Pembuatan Feature Branch Terisolasi -> 2. Sinkronisasi Upstream Rutin -> 3. Tinjauan Kode via Pull Request",
      "sampleSentence": "Branch-based workflows allow multiple developers to modify parallel modules without risking production stability.",
      "keyPhraseTip": "Frasa kunci: 'dedicated feature branches', 'resolve merge conflicts early', dan 'pull requests for peer reviews'."
    },
    "targetSentence": "I create dedicated feature branches, pull upstream changes frequently to resolve merge conflicts early, and submit descriptive pull requests for peer reviews.",
    "translationId": "Saya membuat branch fitur khusus, sering menarik pembaruan upstream untuk menyelesaikan konflik penggabungan sejak dini, dan mengirimkan pull request yang deskriptif untuk ditinjau rekan kerja.",
    "babyTips": "Kodi Tips: Praktik standar Git: buat branch sendiri, jangan langsung push ke main branch, dan minta rekan tim me-review kodingmu lewat Pull Request!"
  },
  {
    "id": "spk-cv-84",
    "category": "9. Team Collaboration & Project Agility",
    "questionEn": "How do you conduct constructive and respectful code reviews for fellow team members?",
    "workedExample": {
      "modelStructure": "1. Fokus pada Kualitas & Keamanan -> 2. Apresiasi Solusi Elegan -> 3. Saran Konstruktif Ramah",
      "sampleSentence": "Framing code feedback positively encourages junior developers to learn without feeling discouraged.",
      "keyPhraseTip": "Frasa kunci: 'focus on code quality and security', 'praise elegant solutions', dan 'phrase suggestions as collaborative improvements'."
    },
    "targetSentence": "I focus comments on code quality and security rather than style preferences, praise elegant solutions, and phrase suggestions as collaborative improvements.",
    "translationId": "Saya memfokuskan komentar pada kualitas kode dan keamanan daripada preferensi gaya pribadi, memuji solusi yang elegan, dan menyusun saran sebagai peningkatan kolaboratif.",
    "babyTips": "Kodi Tips: Code review bukan tempat pamer kepintaran atau menjatuhkan orang lain, melainkan wadah belajar bersama agar kualitas software tim makin kokoh."
  },
  {
    "id": "spk-cv-85",
    "category": "9. Team Collaboration & Project Agility",
    "questionEn": "How do you manage unexpected scope creep when project requirements expand close to release dates?",
    "workedExample": {
      "modelStructure": "1. Transparansi Dampak Waktu -> 2. Pindahkan ke Product Backlog -> 3. Negosiasi Rilis Bertahap",
      "sampleSentence": "Documenting new feature requests in the project backlog preserves launch deadlines without discarding user ideas.",
      "keyPhraseTip": "Frasa kunci: 'communicate schedule impact', 'document requirements in backlog', dan 'subsequent sprints'."
    },
    "targetSentence": "I communicate the schedule impact to the project manager, document the additional requirements in the backlog, and negotiate delivering them in subsequent sprints.",
    "translationId": "Saya mengomunikasikan dampak jadwal kepada manajer proyek, mendokumentasikan persyaratan tambahan ke dalam backlog, dan menegosiasikan pengirimannya pada sprint berikutnya.",
    "babyTips": "Kodi Tips: Scope creep adalah penambahan fitur mendadak yang bikin proyek molor. Simpan ide baru di backlog untuk fase 2 agar peluncuran utama tetap tepat waktu!"
  },
  {
    "id": "spk-cv-86",
    "category": "9. Team Collaboration & Project Agility",
    "questionEn": "How do you support team morale during high-pressure system migration weekends?",
    "workedExample": {
      "modelStructure": "1. Sikap Tenang & Menenangkan -> 2. Ringan Tangan Menolong Rekan -> 3. Apresiasi Setiap Langkah Keberhasilan",
      "sampleSentence": "Shared accountability and calm leadership during late-night deployments prevent burnout and sustain team performance.",
      "keyPhraseTip": "Frasa kunci: 'positive proactive attitude', 'offer assistance to overburdened teammates', dan 'recognition of milestone achievements'."
    },
    "targetSentence": "I maintain a positive proactive attitude, offer assistance to overburdened teammates, and ensure clear communication and recognition of milestone achievements.",
    "translationId": "Saya mempertahankan sikap positif yang proaktif, menawarkan bantuan kepada rekan tim yang terbebani, dan memastikan komunikasi yang jelas serta pengakuan atas pencapaian target.",
    "babyTips": "Kodi Tips: Sikap tenang, humor ringan di sela kerja keras, dan kepedulian terhadap teman tim membuat proyek berat terasa jauh lebih ringan."
  },
  {
    "id": "spk-cv-87",
    "category": "9. Team Collaboration & Project Agility",
    "questionEn": "How do you adapt when management shifts project priorities on short notice?",
    "workedExample": {
      "modelStructure": "1. Fleksibilitas Menerima Arah Baru -> 2. Dokumentasi Rapi Tugas Tertunda -> 3. Penyelarasan Fokus Cepat",
      "sampleSentence": "Gracefully bookmarking paused work ensures zero effort is wasted when corporate strategies pivot.",
      "keyPhraseTip": "Frasa kunci: 'embrace change with flexibility', 'document paused tasks for clean resumption', dan 'align on new priorities'."
    },
    "targetSentence": "I embrace the change with flexibility, quickly document the state of paused tasks for clean resumption, and align focus immediately on the new organizational priorities.",
    "translationId": "Saya menyambut perubahan dengan fleksibel, segera mendokumentasikan status tugas yang dijeda agar dapat dilanjutkan dengan rapi, dan langsung menyelaraskan fokus pada prioritas baru perusahaan.",
    "babyTips": "Kodi Tips: Dunia IT dan bisnis berubah sangat cepat. Dokumentasikan pekerjaan saat ini, simpan rapi, lalu beralih ke tugas baru tanpa mengeluh."
  },
  {
    "id": "spk-cv-88",
    "category": "9. Team Collaboration & Project Agility",
    "questionEn": "How do you communicate complex technical progress to non-technical executive stakeholders?",
    "workedExample": {
      "modelStructure": "1. Konversi Bahasa Teknis ke Nilai Bisnis -> 2. Fokus pada Penghematan & Efisiensi -> 3. Penggunaan Dasbor Visual Sederhana",
      "sampleSentence": "Presenting project benefits in financial and operational terms helps leadership appreciate IT contributions.",
      "keyPhraseTip": "Frasa kunci: 'translate technical metrics into business impacts', 'cost savings and efficiency gains', dan 'summary dashboards'."
    },
    "targetSentence": "I translate technical metrics into business impacts like cost savings and efficiency gains, utilizing clear summary dashboards rather than raw technical jargon.",
    "translationId": "Saya menerjemahkan metrik teknis ke dalam dampak bisnis seperti penghematan biaya dan peningkatan efisiensi, memanfaatkan dasbor ringkasan visual daripada jargon teknis mentah.",
    "babyTips": "Kodi Tips: Para direktur dan manajer tidak peduli berapa baris kode yang kamu tulis, mereka peduli berapa jam waktu kerja yang berhasil kamu hematkan untuk perusahaan!"
  },
  {
    "id": "spk-cv-89",
    "category": "9. Team Collaboration & Project Agility",
    "questionEn": "How do you ensure accountability when collaborating with cross-functional departments like Finance and HR?",
    "workedExample": {
      "modelStructure": "1. Pembagian Penanggung Jawab Jelas -> 2. Evaluasi Mingguan Konsisten -> 3. Transparansi di Manajemen Proyek (Jira/Trello)",
      "sampleSentence": "Shared tracking dashboards ensure all departments understand project dependencies and deadlines.",
      "keyPhraseTip": "Frasa kunci: 'unambiguous ownership', 'hold weekly check-ins', dan 'collaborative tracking tools'."
    },
    "targetSentence": "I establish shared project milestones with unambiguous ownership, hold weekly check-ins, and document deliverables transparently in collaborative tracking tools.",
    "translationId": "Saya menetapkan pencapaian proyek bersama dengan penanggung jawab yang jelas, mengadakan pertemuan mingguan, dan mendokumentasikan hasil kerja secara transparan di alat pelacak kolaboratif.",
    "babyTips": "Kodi Tips: Saat bekerja dengan divisi lain, pastikan ada PIC (Person In Charge) yang jelas untuk setiap tugas agar tidak saling lempar tanggung jawab."
  },
  {
    "id": "spk-cv-90",
    "category": "9. Team Collaboration & Project Agility",
    "questionEn": "How do you conduct blameless post-mortems following unexpected production incidents?",
    "workedExample": {
      "modelStructure": "1. Pemetaan Kronologi Objektif -> 2. Fokus pada Akar Penyebab Sistem -> 3. Rencana Aksi Pencegahan Masa Depan",
      "sampleSentence": "Blameless reviews encourage transparency and build robust engineering systems that withstand human mistakes.",
      "keyPhraseTip": "Frasa kunci: 'analyze systemic root causes', 'rather than blaming individuals', dan 'preventive action items for future resilience'."
    },
    "targetSentence": "I gather the team to map out timeline events, analyze systemic root causes rather than blaming individuals, and formulate preventive action items for future resilience.",
    "translationId": "Saya mengumpulkan tim untuk memetakan lini masa kejadian, menganalisis akar penyebab sistemik daripada menyalahkan individu, dan merumuskan tindakan pencegahan untuk ketahanan masa depan.",
    "babyTips": "Kodi Tips: Blameless Post-Mortem adalah budaya perusahaan teknologi modern (Google/Netflix): jangan cari siapa yang salah, cari bagian sistem mana yang perlu diperbaiki!"
  },
  {
    "id": "spk-cv-91",
    "category": "10. Career Motivation & Long-term Vision",
    "questionEn": "What drives you to continuously master new technological skills?",
    "workedExample": {
      "modelStructure": "1. Antusiasme terhadap Kemajuan Zaman -> 2. Kepuasan Memecahkan Masalah -> 3. Dorongan Menghadirkan Nilai Nyata",
      "sampleSentence": "Continuous learning is essential in technology where industry tools and best practices advance rapidly.",
      "keyPhraseTip": "Frasa kunci: 'rapid evolution of technology excites me', 'acquiring new capabilities', dan 'solve challenging business problems'."
    },
    "targetSentence": "The rapid evolution of technology excites me, and I find deep satisfaction in acquiring new capabilities that solve challenging business problems.",
    "translationId": "Evolusi teknologi yang pesat membuat saya bersemangat, dan saya menemukan kepuasan mendalam dalam memperoleh keahlian baru yang memecahkan masalah bisnis yang menantang.",
    "babyTips": "Kodi Tips: Tunjukkan rasa ingin tahu alami (curiosity) yang tinggi sebagai motor penggerak kariermu di dunia IT."
  },
  {
    "id": "spk-cv-92",
    "category": "10. Career Motivation & Long-term Vision",
    "questionEn": "How do you stay updated with the latest trends in software engineering and IT security?",
    "workedExample": {
      "modelStructure": "1. Membaca Publikasi Otoritatif -> 2. Keaktifan Komunitas Open Source -> 3. Praktik Mandiri di Home Lab",
      "sampleSentence": "Experimenting with new container tools in a personal home lab solidifies conceptual knowledge into practical skill.",
      "keyPhraseTip": "Frasa kunci: 'authoritative engineering blogs', 'open-source developer communities', dan 'hands-on home lab experiments'."
    },
    "targetSentence": "I follow authoritative engineering blogs, participate in open-source developer communities, and test emerging tools through hands-on home lab experiments.",
    "translationId": "Saya mengikuti blog rekayasa otoritatif, berpartisipasi dalam komunitas pengembang sumber terbuka, dan menguji alat-alat baru melalui eksperimen lab mandiri di rumah.",
    "babyTips": "Kodi Tips: Memiliki 'home lab' (komputer uji coba sendiri di rumah) adalah nilai plus besar di mata manajer teknis!"
  },
  {
    "id": "spk-cv-93",
    "category": "10. Career Motivation & Long-term Vision",
    "questionEn": "Describe a challenging technical problem you solved and what you learned from the experience.",
    "workedExample": {
      "modelStructure": "1. Tantangan Awal yang Sulit -> 2. Langkah Penelusuran Cerdas -> 3. Hikmah & Pelajaran Berharga",
      "sampleSentence": "Tracking down the root cause taught me never to assume network cables or ports are functioning without physical tests.",
      "keyPhraseTip": "Frasa kunci: 'elusive intermittent network disconnect', 'tracing packet drops', dan 'value of systematic verification'."
    },
    "targetSentence": "I resolved an elusive intermittent network disconnect by tracing packet drops to a faulty physical switch port, teaching me the value of systematic verification.",
    "translationId": "Saya menyelesaikan masalah koneksi jaringan putus-nyambung yang sulit ditangkap dengan melacak penurunan paket ke port switch fisik yang rusak, mengajari saya pentingnya verifikasi sistematis.",
    "babyTips": "Kodi Tips: Ceritakan kisah suksesmu dengan metode STAR (Situation, Task, Action, Result) yang ringkas dan memikat."
  },
  {
    "id": "spk-cv-94",
    "category": "10. Career Motivation & Long-term Vision",
    "questionEn": "How do you handle repetitive administrative tasks without losing focus or quality?",
    "workedExample": {
      "modelStructure": "1. Kedisiplinan Kualitas Kerja -> 2. Inisiatif Berpikir Efisiensi -> 3. Otomasi Solusi Jangka Panjang",
      "sampleSentence": "A great IT engineer automates mundane repetitive tasks so they can allocate focus to higher-value architectural improvements.",
      "keyPhraseTip": "Frasa kunci: 'attention to detail', 'write automation scripts', dan 'streamline repetitive workflows permanently'."
    },
    "targetSentence": "I maintain high attention to detail while actively looking for opportunities to write automation scripts that streamline those repetitive workflows permanently.",
    "translationId": "Saya mempertahankan perhatian tinggi terhadap detail sambil secara aktif mencari peluang untuk menulis skrip otomasi yang merampingkan alur kerja berulang tersebut secara permanen.",
    "babyTips": "Kodi Tips: Jawaban kelas dunia: bukannya mengeluh bosan, kamu justru berinisiatif membuat skrip Python/PowerShell untuk mengotomasi tugas rutin itu!"
  },
  {
    "id": "spk-cv-95",
    "category": "10. Career Motivation & Long-term Vision",
    "questionEn": "Why do you believe you are the best candidate for this technical support and systems role?",
    "workedExample": {
      "modelStructure": "1. Perpaduan Unik Logika Eksak -> 2. Keterampilan Teknis Teruji -> 3. Kepuasan Komunikasi Pengguna",
      "sampleSentence": "Combining technical aptitude with empathetic user support ensures system stability and positive cross-departmental relationships.",
      "keyPhraseTip": "Frasa kunci: 'analytical mathematical problem solving', 'hands-on infrastructure troubleshooting', dan 'certified communication skills'."
    },
    "targetSentence": "I offer a unique blend of analytical mathematical problem solving, hands-on infrastructure troubleshooting, and certified communication skills that drive user satisfaction.",
    "translationId": "Saya menawarkan perpaduan unik antara pemecahan masalah matematika analitis, troubleshooting infrastruktur langsung, dan keterampilan komunikasi bersertifikat yang mendorong kepuasan pengguna.",
    "babyTips": "Kodi Tips: Rangkum ketiga pilar keunggulanmu: 1. Latar belakang matematika, 2. Praktek hardware/jaringan, 3. Sertifikasi BNSP dan keramahan komunikasi!"
  },
  {
    "id": "spk-cv-96",
    "category": "10. Career Motivation & Long-term Vision",
    "questionEn": "How do you balance high speed with meticulous accuracy when resolving production outages?",
    "workedExample": {
      "modelStructure": "1. Kepatuhan pada Standard Runbook -> 2. Verifikasi Ganda Perintah Kritis -> 3. Ketenangan Eksekusi Presisi",
      "sampleSentence": "Taking three extra seconds to verify syntax on production database commands prevents catastrophic data loss.",
      "keyPhraseTip": "Frasa kunci: 'standardized emergency runbooks', 'double-check destructive commands', dan 'composed precision'."
    },
    "targetSentence": "I follow standardized emergency runbooks, double-check destructive commands before execution, and keep stakeholders informed to maintain composed precision.",
    "translationId": "Saya mengikuti buku panduan darurat standar, memeriksa ulang perintah destruktif sebelum eksekusi, dan terus memberi kabar kepada pemangku kepentingan untuk menjaga ketepatan yang tenang.",
    "babyTips": "Kodi Tips: 'Speed without precision causes second outages'. Selalu baca dua kali sebelum menekan Enter pada perintah kritis server!"
  },
  {
    "id": "spk-cv-97",
    "category": "10. Career Motivation & Long-term Vision",
    "questionEn": "What professional certifications are you planning to pursue in the upcoming year?",
    "workedExample": {
      "modelStructure": "1. Target Sertifikasi Jaringan (Cisco CCNA) -> 2. Target Keamanan Siber (Security+) -> 3. Komitmen Pengembangan Diri",
      "sampleSentence": "Pursuing recognized vendor certifications ensures my knowledge remains aligned with evolving industry benchmarks.",
      "keyPhraseTip": "Frasa kunci: 'CompTIA Security+ and Cisco CCNA', 'deepen cybersecurity credentials', dan 'enterprise networking'."
    },
    "targetSentence": "I plan to achieve the CompTIA Security+ and Cisco CCNA certifications to deepen my cybersecurity and enterprise networking credentials.",
    "translationId": "Saya berencana meraih sertifikasi CompTIA Security+ dan Cisco CCNA untuk memperdalam kredensial keamanan siber dan jaringan perusahaan saya.",
    "babyTips": "Kodi Tips: Menyebutkan target sertifikasi internasional CompTIA Security+ dan Cisco CCNA membuktikan kamu punya roadmap karier yang jelas dan berdedikasi tinggi."
  },
  {
    "id": "spk-cv-98",
    "category": "10. Career Motivation & Long-term Vision",
    "questionEn": "How do you contribute to building an inclusive and collaborative IT department culture?",
    "workedExample": {
      "modelStructure": "1. Penghormatan Terhadap Keberagaman -> 2. Budaya Berbagi Ilmu (Mentoring) -> 3. Perayaan Sukses Bersama",
      "sampleSentence": "Fostering an open culture where questions are welcomed accelerates knowledge sharing across the entire team.",
      "keyPhraseTip": "Frasa kunci: 'listen actively to diverse perspectives', 'share technical knowledge generously', dan 'celebrate team milestones'."
    },
    "targetSentence": "I listen actively to diverse perspectives, share technical knowledge generously with junior peers, and celebrate team milestones collaboratively.",
    "translationId": "Saya mendengarkan secara aktif berbagai perspektif yang beragam, berbagi pengetahuan teknis dengan murah hati kepada rekan junior, dan merayakan pencapaian tim secara kolaboratif.",
    "babyTips": "Kodi Tips: Perusahaan modern sangat menghargai 'knowledge sharing'. Jangan pelit ilmu, jadilah mentor yang ramah bagi teman kerja!"
  },
  {
    "id": "spk-cv-99",
    "category": "10. Career Motivation & Long-term Vision",
    "questionEn": "What is your philosophy on handling constructive criticism from technical supervisors?",
    "workedExample": {
      "modelStructure": "1. Resepsi Positif Tanpa Ego -> 2. Analisis Ruang Peningkatan -> 3. Implementasi Perbaikan Nyata",
      "sampleSentence": "Embracing constructive critique with humility is the fastest catalyst for personal and professional growth.",
      "keyPhraseTip": "Frasa kunci: 'valuable learning opportunity', 'without being defensive', dan 'implement corrective steps proactively'."
    },
    "targetSentence": "I view constructive feedback as a valuable learning opportunity, analyze areas for improvement without being defensive, and implement corrective steps proactively.",
    "translationId": "Saya memandang umpan balik konstruktif sebagai peluang belajar yang berharga, menganalisis area peningkatan tanpa bersikap defensif, dan menerapkan langkah-langkah perbaikan secara proaktif.",
    "babyTips": "Kodi Tips: Sikap dewasa menerima kritik: terima dengan senyuman dan terima kasih, catat apa yang perlu diperbaiki, dan buktikan dengan hasil kerja yang lebih baik!"
  },
  {
    "id": "spk-cv-100",
    "category": "10. Career Motivation & Long-term Vision",
    "questionEn": "Do you have any questions for our interview panel regarding the team and technical roadmap?",
    "workedExample": {
      "modelStructure": "1. Pertanyaan Strategis Berbobot -> 2. Fokus pada Prioritas Kuartal Ini -> 3. Kesiapan Menyelaraskan Kontribusi",
      "sampleSentence": "Asking about the department's upcoming technical priorities demonstrates strategic thinking and proactive readiness.",
      "keyPhraseTip": "Frasa kunci: 'key technical priorities this quarter' dan 'how this role directly supports those objectives'."
    },
    "targetSentence": "Yes, could you share the key technical priorities your IT department is focusing on this quarter, and how this role directly supports those objectives?",
    "translationId": "Ya, dapatkah Anda membagikan prioritas teknis utama yang menjadi fokus departemen IT Anda pada kuartal ini, dan bagaimana peran ini secara langsung mendukung tujuan tersebut?",
    "babyTips": "Kodi Tips: Pertanyaan pamungkas brilian di akhir wawancara! Menunjukkan kamu antusias, cerdas, dan langsung berpikir tentang kontribusi nyata di perusahaan mereka."
  }
];

// ================= TEBAK HURUF KOSAKATA IT & AKADEMIK (100 KATA) =================
const missingLetterPuzzles = [
  {
    "id": "ml-1",
    "word": "ROUTER",
    "masked": "R _ U T _ R",
    "missingLetters": [
      "O",
      "E"
    ],
    "category": "Networking",
    "babyClue": "🍼 Polisi lalu lintas paket data internet yang ngarahin sinyal ke perangkat yang bener!",
    "meaning": "Perangkat keras jaringan penentu rute pengiriman paket data.",
    "workedExample": {
      "sampleWord": "ROUTER",
      "sampleMasked": "R _ U T _ R",
      "sampleMissing": "O, E",
      "sampleExplanation": "Kata 'ROUTER' memiliki bagian kosong 'R _ U T _ R'. Huruf yang melengkapi adalah O, E!"
    }
  },
  {
    "id": "ml-2",
    "word": "SWITCH",
    "masked": "S W _ T C _",
    "missingLetters": [
      "I",
      "H"
    ],
    "category": "Networking",
    "babyClue": "🍼 Colokan sentral pintar kabel LAN yang ngehubungin puluhan komputer di satu ruangan kantor!",
    "meaning": "Konsentrator jaringan lokal (LAN) berbasis alamat MAC.",
    "workedExample": {
      "sampleWord": "SWITCH",
      "sampleMasked": "S W _ T C _",
      "sampleMissing": "I, H",
      "sampleExplanation": "Kata 'SWITCH' memiliki bagian kosong 'S W _ T C _'. Huruf yang melengkapi adalah I, H!"
    }
  },
  {
    "id": "ml-3",
    "word": "FIREWALL",
    "masked": "F _ R E W _ L L",
    "missingLetters": [
      "I",
      "A"
    ],
    "category": "Networking",
    "babyClue": "🍼 Tembok benteng pelindung yang nyetop hacker jahat biar gak bisa nerobos masuk komputer!",
    "meaning": "Sistem keamanan filter lalu lintas jaringan berdasarkan aturan proteksi.",
    "workedExample": {
      "sampleWord": "FIREWALL",
      "sampleMasked": "F _ R E W _ L L",
      "sampleMissing": "I, A",
      "sampleExplanation": "Kata 'FIREWALL' memiliki bagian kosong 'F _ R E W _ L L'. Huruf yang melengkapi adalah I, A!"
    }
  },
  {
    "id": "ml-4",
    "word": "GATEWAY",
    "masked": "G _ T E W _ Y",
    "missingLetters": [
      "A",
      "A"
    ],
    "category": "Networking",
    "babyClue": "🍼 Pintu gerbang utama keluar-masuk dari jaringan kantor lokal ke internet dunia luar!",
    "meaning": "Titik persimpangan penghubung dua jaringan dengan protokol berbeda.",
    "workedExample": {
      "sampleWord": "GATEWAY",
      "sampleMasked": "G _ T E W _ Y",
      "sampleMissing": "A, A",
      "sampleExplanation": "Kata 'GATEWAY' memiliki bagian kosong 'G _ T E W _ Y'. Huruf yang melengkapi adalah A, A!"
    }
  },
  {
    "id": "ml-5",
    "word": "BANDWIDTH",
    "masked": "B _ N D W _ D T H",
    "missingLetters": [
      "A",
      "I"
    ],
    "category": "Networking",
    "babyClue": "🍼 Lebar pipa jalan tol internet: makin lebar pipanya, makin kenceng download file-nya!",
    "meaning": "Kapasitas transfer data maksimum jaringan dalam satuan bps.",
    "workedExample": {
      "sampleWord": "BANDWIDTH",
      "sampleMasked": "B _ N D W _ D T H",
      "sampleMissing": "A, I",
      "sampleExplanation": "Kata 'BANDWIDTH' memiliki bagian kosong 'B _ N D W _ D T H'. Huruf yang melengkapi adalah A, I!"
    }
  },
  {
    "id": "ml-6",
    "word": "LATENCY",
    "masked": "L _ T _ N C Y",
    "missingLetters": [
      "A",
      "E"
    ],
    "category": "Networking",
    "babyClue": "🍼 Jeda waktu / delay nunggu saat ngirim sinyal ping sampai dapet balesan dari server!",
    "meaning": "Waktu tunda pengiriman paket data dari pengirim ke penerima.",
    "workedExample": {
      "sampleWord": "LATENCY",
      "sampleMasked": "L _ T _ N C Y",
      "sampleMissing": "A, E",
      "sampleExplanation": "Kata 'LATENCY' memiliki bagian kosong 'L _ T _ N C Y'. Huruf yang melengkapi adalah A, E!"
    }
  },
  {
    "id": "ml-7",
    "word": "PACKET",
    "masked": "P _ C K _ T",
    "missingLetters": [
      "A",
      "E"
    ],
    "category": "Networking",
    "babyClue": "🍼 Kardus paket kecil berisi potongan data yang dikirim lewat kabel internet!",
    "meaning": "Satuan terkecil pengiriman unit data dalam jaringan komputer.",
    "workedExample": {
      "sampleWord": "PACKET",
      "sampleMasked": "P _ C K _ T",
      "sampleMissing": "A, E",
      "sampleExplanation": "Kata 'PACKET' memiliki bagian kosong 'P _ C K _ T'. Huruf yang melengkapi adalah A, E!"
    }
  },
  {
    "id": "ml-8",
    "word": "PROTOCOL",
    "masked": "P R _ T _ C O L",
    "missingLetters": [
      "O",
      "O"
    ],
    "category": "Networking",
    "babyClue": "🍼 Buku aturan tata krama sopan santun komunikasi antar komputer (seperti HTTP, TCP)!",
    "meaning": "Kumpulan aturan standar komunikasi dan pertukaran data komputer.",
    "workedExample": {
      "sampleWord": "PROTOCOL",
      "sampleMasked": "P R _ T _ C O L",
      "sampleMissing": "O, O",
      "sampleExplanation": "Kata 'PROTOCOL' memiliki bagian kosong 'P R _ T _ C O L'. Huruf yang melengkapi adalah O, O!"
    }
  },
  {
    "id": "ml-9",
    "word": "ETHERNET",
    "masked": "E T H _ R N _ T",
    "missingLetters": [
      "E",
      "E"
    ],
    "category": "Networking",
    "babyClue": "🍼 Standar kabel LAN fisik warna biru atau abu-abu berkepala RJ45!",
    "meaning": "Standar arsitektur jaringan kabel area lokal (LAN).",
    "workedExample": {
      "sampleWord": "ETHERNET",
      "sampleMasked": "E T H _ R N _ T",
      "sampleMissing": "E, E",
      "sampleExplanation": "Kata 'ETHERNET' memiliki bagian kosong 'E T H _ R N _ T'. Huruf yang melengkapi adalah E, E!"
    }
  },
  {
    "id": "ml-10",
    "word": "TOPOLOGY",
    "masked": "T _ P _ L O G Y",
    "missingLetters": [
      "O",
      "O"
    ],
    "category": "Networking",
    "babyClue": "🍼 Peta tata letak atau denah bentuk susunan kabel dan komputer (Bintang/Star, Cincin/Ring)!",
    "meaning": "Pola struktur geometris penataan perangkat jaringan.",
    "workedExample": {
      "sampleWord": "TOPOLOGY",
      "sampleMasked": "T _ P _ L O G Y",
      "sampleMissing": "O, O",
      "sampleExplanation": "Kata 'TOPOLOGY' memiliki bagian kosong 'T _ P _ L O G Y'. Huruf yang melengkapi adalah O, O!"
    }
  },
  {
    "id": "ml-11",
    "word": "DATABASE",
    "masked": "D _ T _ B _ S E",
    "missingLetters": [
      "A",
      "A",
      "A"
    ],
    "category": "Database",
    "babyClue": "🍼 Lemari arsip raksasa tempat nyimpan jutaan baris data rapi (Tabel Karyawan & Sepatu)!",
    "meaning": "Basis data / kumpulan tabel penyimpanan informasi komputer.",
    "workedExample": {
      "sampleWord": "DATABASE",
      "sampleMasked": "D _ T _ B _ S E",
      "sampleMissing": "A, A, A",
      "sampleExplanation": "Kata 'DATABASE' memiliki bagian kosong 'D _ T _ B _ S E'. Huruf yang melengkapi adalah A, A, A!"
    }
  },
  {
    "id": "ml-12",
    "word": "TABLE",
    "masked": "T _ B L _",
    "missingLetters": [
      "A",
      "E"
    ],
    "category": "Database",
    "babyClue": "🍼 Wadah kotak-kotak berbentuk baris dan kolom tempat nyimpen data di database!",
    "meaning": "Struktur penyimpanan relasional dalam baris dan kolom.",
    "workedExample": {
      "sampleWord": "TABLE",
      "sampleMasked": "T _ B L _",
      "sampleMissing": "A, E",
      "sampleExplanation": "Kata 'TABLE' memiliki bagian kosong 'T _ B L _'. Huruf yang melengkapi adalah A, E!"
    }
  },
  {
    "id": "ml-13",
    "word": "QUERY",
    "masked": "Q _ _ R Y",
    "missingLetters": [
      "U",
      "E"
    ],
    "category": "Database",
    "babyClue": "🍼 Mantra kalimat perintah sakti (SELECT, INSERT) buat minta data ke database!",
    "meaning": "Perintah pencarian atau manipulasi data terstruktur SQL.",
    "workedExample": {
      "sampleWord": "QUERY",
      "sampleMasked": "Q _ _ R Y",
      "sampleMissing": "U, E",
      "sampleExplanation": "Kata 'QUERY' memiliki bagian kosong 'Q _ _ R Y'. Huruf yang melengkapi adalah U, E!"
    }
  },
  {
    "id": "ml-14",
    "word": "RECORD",
    "masked": "R _ C _ R D",
    "missingLetters": [
      "E",
      "O"
    ],
    "category": "Database",
    "babyClue": "🍼 Satu baris lengkap data seseorang atau satu barang di dalam tabel!",
    "meaning": "Baris data horizontal (tupel) yang memuat kumpulan atribut.",
    "workedExample": {
      "sampleWord": "RECORD",
      "sampleMasked": "R _ C _ R D",
      "sampleMissing": "E, O",
      "sampleExplanation": "Kata 'RECORD' memiliki bagian kosong 'R _ C _ R D'. Huruf yang melengkapi adalah E, O!"
    }
  },
  {
    "id": "ml-15",
    "word": "PRIMARY",
    "masked": "P R _ M _ R Y",
    "missingLetters": [
      "I",
      "A"
    ],
    "category": "Database",
    "babyClue": "🍼 Kunci unik utama (seperti nomor ID atau barcode unik) yang gak boleh kembar sama siapapun!",
    "meaning": "Primary Key: pengenal unik bagi setiap baris tabel.",
    "workedExample": {
      "sampleWord": "PRIMARY",
      "sampleMasked": "P R _ M _ R Y",
      "sampleMissing": "I, A",
      "sampleExplanation": "Kata 'PRIMARY' memiliki bagian kosong 'P R _ M _ R Y'. Huruf yang melengkapi adalah I, A!"
    }
  },
  {
    "id": "ml-16",
    "word": "FOREIGN",
    "masked": "F _ R E _ G N",
    "missingLetters": [
      "O",
      "I"
    ],
    "category": "Database",
    "babyClue": "🍼 Kunci penghubung (Foreign Key) yang nyambungin tabel tiket sama tabel karyawan!",
    "meaning": "Kunci relasional pengait antara dua tabel berelasi.",
    "workedExample": {
      "sampleWord": "FOREIGN",
      "sampleMasked": "F _ R E _ G N",
      "sampleMissing": "O, I",
      "sampleExplanation": "Kata 'FOREIGN' memiliki bagian kosong 'F _ R E _ G N'. Huruf yang melengkapi adalah O, I!"
    }
  },
  {
    "id": "ml-17",
    "word": "SCHEMA",
    "masked": "S C H _ M _",
    "missingLetters": [
      "E",
      "A"
    ],
    "category": "Database",
    "babyClue": "🍼 Gambar denah arsitektur rancangan struktur tabel dan kolom database!",
    "meaning": "Struktur logis menyeluruh dari suatu basis data.",
    "workedExample": {
      "sampleWord": "SCHEMA",
      "sampleMasked": "S C H _ M _",
      "sampleMissing": "E, A",
      "sampleExplanation": "Kata 'SCHEMA' memiliki bagian kosong 'S C H _ M _'. Huruf yang melengkapi adalah E, A!"
    }
  },
  {
    "id": "ml-18",
    "word": "INDEX",
    "masked": "I N D _ _",
    "missingLetters": [
      "E",
      "X"
    ],
    "category": "Database",
    "babyClue": "🍼 Daftar isi halaman belakang buku yang bikin pencarian data jadi secepat kilat!",
    "meaning": "Struktur penunjuk cepat lokasi data untuk mempercepat kueri.",
    "workedExample": {
      "sampleWord": "INDEX",
      "sampleMasked": "I N D _ _",
      "sampleMissing": "E, X",
      "sampleExplanation": "Kata 'INDEX' memiliki bagian kosong 'I N D _ _'. Huruf yang melengkapi adalah E, X!"
    }
  },
  {
    "id": "ml-19",
    "word": "BACKUP",
    "masked": "B _ C K _ P",
    "missingLetters": [
      "A",
      "U"
    ],
    "category": "Database",
    "babyClue": "🍼 Salinan cadangan file data biar kalo harddisk rusak, data kantor gak hilang!",
    "meaning": "Duplikasi data cadangan untuk pemulihan bencana.",
    "workedExample": {
      "sampleWord": "BACKUP",
      "sampleMasked": "B _ C K _ P",
      "sampleMissing": "A, U",
      "sampleExplanation": "Kata 'BACKUP' memiliki bagian kosong 'B _ C K _ P'. Huruf yang melengkapi adalah A, U!"
    }
  },
  {
    "id": "ml-20",
    "word": "TRANSACT",
    "masked": "T R _ N S _ C T",
    "missingLetters": [
      "A",
      "A"
    ],
    "category": "Database",
    "babyClue": "🍼 Rangkaian proses perbankan atau data yang harus sukses semua atau batal semua (ACID)!",
    "meaning": "Satu kesatuan unit kerja transaksi basis data atomik.",
    "workedExample": {
      "sampleWord": "TRANSACT",
      "sampleMasked": "T R _ N S _ C T",
      "sampleMissing": "A, A",
      "sampleExplanation": "Kata 'TRANSACT' memiliki bagian kosong 'T R _ N S _ C T'. Huruf yang melengkapi adalah A, A!"
    }
  },
  {
    "id": "ml-21",
    "word": "FUNCTION",
    "masked": "F _ N C T _ _ N",
    "missingLetters": [
      "U",
      "I",
      "O"
    ],
    "category": "Programming",
    "babyClue": "🍼 Mesin blender otomatis: kamu masukin bahan argumen, dia olah dan keluarin hasil return!",
    "meaning": "Blok kode modular yang menerima input dan mengembalikan output.",
    "workedExample": {
      "sampleWord": "FUNCTION",
      "sampleMasked": "F _ N C T _ _ N",
      "sampleMissing": "U, I, O",
      "sampleExplanation": "Kata 'FUNCTION' memiliki bagian kosong 'F _ N C T _ _ N'. Huruf yang melengkapi adalah U, I, O!"
    }
  },
  {
    "id": "ml-22",
    "word": "VARIABLE",
    "masked": "V _ R _ _ B L E",
    "missingLetters": [
      "A",
      "I",
      "A"
    ],
    "category": "Programming",
    "babyClue": "🍼 Kotak kardus bertuliskan label nama buat nyimpen nilai angka atau teks!",
    "meaning": "Simbol pengenal penampung nilai di memori program.",
    "workedExample": {
      "sampleWord": "VARIABLE",
      "sampleMasked": "V _ R _ _ B L E",
      "sampleMissing": "A, I, A",
      "sampleExplanation": "Kata 'VARIABLE' memiliki bagian kosong 'V _ R _ _ B L E'. Huruf yang melengkapi adalah A, I, A!"
    }
  },
  {
    "id": "ml-23",
    "word": "LOOPING",
    "masked": "L _ _ P I N G",
    "missingLetters": [
      "O",
      "O"
    ],
    "category": "Programming",
    "babyClue": "🍼 Gasing berputar yang ngulangin perintah yang sama berkali-kali sampai capek/selesai!",
    "meaning": "Struktur perulangan instruksi pemrograman.",
    "workedExample": {
      "sampleWord": "LOOPING",
      "sampleMasked": "L _ _ P I N G",
      "sampleMissing": "O, O",
      "sampleExplanation": "Kata 'LOOPING' memiliki bagian kosong 'L _ _ P I N G'. Huruf yang melengkapi adalah O, O!"
    }
  },
  {
    "id": "ml-24",
    "word": "ARRAY",
    "masked": "A R R _ _",
    "missingLetters": [
      "A",
      "Y"
    ],
    "category": "Programming",
    "babyClue": "🍼 Kotak bekal bersekat yang bisa nyimpen banyak barang berurutan dari nomor 0!",
    "meaning": "Struktur data larik berurutan dengan indeks numerik.",
    "workedExample": {
      "sampleWord": "ARRAY",
      "sampleMasked": "A R R _ _",
      "sampleMissing": "A, Y",
      "sampleExplanation": "Kata 'ARRAY' memiliki bagian kosong 'A R R _ _'. Huruf yang melengkapi adalah A, Y!"
    }
  },
  {
    "id": "ml-25",
    "word": "OBJECT",
    "masked": "O B J _ C T",
    "missingLetters": [
      "E"
    ],
    "category": "Programming",
    "babyClue": "🍼 Benda utuh yang punya ciri-ciri (properti) dan aksi kemampuan (metode)!",
    "meaning": "Entitas pemrograman berorientasi objek pengemas atribut dan aksi.",
    "workedExample": {
      "sampleWord": "OBJECT",
      "sampleMasked": "O B J _ C T",
      "sampleMissing": "E",
      "sampleExplanation": "Kata 'OBJECT' memiliki bagian kosong 'O B J _ C T'. Huruf yang melengkapi adalah E!"
    }
  },
  {
    "id": "ml-26",
    "word": "STRING",
    "masked": "S T R _ N G",
    "missingLetters": [
      "I"
    ],
    "category": "Programming",
    "babyClue": "🍼 Tali kata yang merangkai huruf dan kalimat diapit tanda kutip!",
    "meaning": "Tipe data untaian karakter teks.",
    "workedExample": {
      "sampleWord": "STRING",
      "sampleMasked": "S T R _ N G",
      "sampleMissing": "I",
      "sampleExplanation": "Kata 'STRING' memiliki bagian kosong 'S T R _ N G'. Huruf yang melengkapi adalah I!"
    }
  },
  {
    "id": "ml-27",
    "word": "BOOLEAN",
    "masked": "B _ _ L E A N",
    "missingLetters": [
      "O",
      "O"
    ],
    "category": "Programming",
    "babyClue": "🍼 Saklar lampu yang cuma punya dua kemungkinan: hidup (TRUE) atau mati (FALSE)!",
    "meaning": "Tipe data logika bernilai benar (true) atau salah (false).",
    "workedExample": {
      "sampleWord": "BOOLEAN",
      "sampleMasked": "B _ _ L E A N",
      "sampleMissing": "O, O",
      "sampleExplanation": "Kata 'BOOLEAN' memiliki bagian kosong 'B _ _ L E A N'. Huruf yang melengkapi adalah O, O!"
    }
  },
  {
    "id": "ml-28",
    "word": "RECURSION",
    "masked": "R E C _ R S _ _ N",
    "missingLetters": [
      "U",
      "I",
      "O"
    ],
    "category": "Programming",
    "babyClue": "🍼 Cermin ajaib di depan cermin: fungsi yang manggil dirinya sendiri sampai batas aman!",
    "meaning": "Teknik pemanggilan fungsi terhadap dirinya sendiri hingga kondisi dasar tercapai.",
    "workedExample": {
      "sampleWord": "RECURSION",
      "sampleMasked": "R E C _ R S _ _ N",
      "sampleMissing": "U, I, O",
      "sampleExplanation": "Kata 'RECURSION' memiliki bagian kosong 'R E C _ R S _ _ N'. Huruf yang melengkapi adalah U, I, O!"
    }
  },
  {
    "id": "ml-29",
    "word": "COMPILER",
    "masked": "C _ M P _ L E R",
    "missingLetters": [
      "O",
      "I"
    ],
    "category": "Programming",
    "babyClue": "🍼 Penerjemah bahasa koding manusia ke bahasa mesin biner 0 dan 1 sekaligus tuntas!",
    "meaning": "Perangkat lunak penerjemah kode sumber ke kode biner yang dapat dieksekusi.",
    "workedExample": {
      "sampleWord": "COMPILER",
      "sampleMasked": "C _ M P _ L E R",
      "sampleMissing": "O, I",
      "sampleExplanation": "Kata 'COMPILER' memiliki bagian kosong 'C _ M P _ L E R'. Huruf yang melengkapi adalah O, I!"
    }
  },
  {
    "id": "ml-30",
    "word": "RUNTIME",
    "masked": "R _ N T _ M E",
    "missingLetters": [
      "U",
      "I"
    ],
    "category": "Programming",
    "babyClue": "🍼 Momen waktu saat program kamu beneran lagi dinyalakan dan jalan di komputer!",
    "meaning": "Fase eksekusi aktif aplikasi di lingkungan sistem operasi.",
    "workedExample": {
      "sampleWord": "RUNTIME",
      "sampleMasked": "R _ N T _ M E",
      "sampleMissing": "U, I",
      "sampleExplanation": "Kata 'RUNTIME' memiliki bagian kosong 'R _ N T _ M E'. Huruf yang melengkapi adalah U, I!"
    }
  },
  {
    "id": "ml-31",
    "word": "BROWSER",
    "masked": "B R _ W S _ R",
    "missingLetters": [
      "O",
      "E"
    ],
    "category": "Web & Cloud",
    "babyClue": "🍼 Aplikasi jendela internet (seperti Chrome / Firefox) buat buka website!",
    "meaning": "Perangkat lunak peramban halaman web internet.",
    "workedExample": {
      "sampleWord": "BROWSER",
      "sampleMasked": "B R _ W S _ R",
      "sampleMissing": "O, E",
      "sampleExplanation": "Kata 'BROWSER' memiliki bagian kosong 'B R _ W S _ R'. Huruf yang melengkapi adalah O, E!"
    }
  },
  {
    "id": "ml-32",
    "word": "SERVER",
    "masked": "S _ R V _ R",
    "missingLetters": [
      "E",
      "E"
    ],
    "category": "Web & Cloud",
    "babyClue": "🍼 Komputer pelayan tangguh yang nyala 24 jam nonstop siap nganterin pesanan website!",
    "meaning": "Sistem komputer penyedia layanan jaringan bagi klien.",
    "workedExample": {
      "sampleWord": "SERVER",
      "sampleMasked": "S _ R V _ R",
      "sampleMissing": "E, E",
      "sampleExplanation": "Kata 'SERVER' memiliki bagian kosong 'S _ R V _ R'. Huruf yang melengkapi adalah E, E!"
    }
  },
  {
    "id": "ml-33",
    "word": "CLIENT",
    "masked": "C L _ _ N T",
    "missingLetters": [
      "I",
      "E"
    ],
    "category": "Web & Cloud",
    "babyClue": "🍼 Pembeli / peminta data (seperti HP atau laptop kamu) yang minta info ke server!",
    "meaning": "Perangkat lunak atau komputer pengguna pengakses layanan server.",
    "workedExample": {
      "sampleWord": "CLIENT",
      "sampleMasked": "C L _ _ N T",
      "sampleMissing": "I, E",
      "sampleExplanation": "Kata 'CLIENT' memiliki bagian kosong 'C L _ _ N T'. Huruf yang melengkapi adalah I, E!"
    }
  },
  {
    "id": "ml-34",
    "word": "DOMAIN",
    "masked": "D _ M _ _ N",
    "missingLetters": [
      "O",
      "A",
      "I"
    ],
    "category": "Web & Cloud",
    "babyClue": "🍼 Alamat nama website yang gampang diingat orang (seperti google.com) pengganti IP!",
    "meaning": "Nama alamat unik pengenal server situs web di internet.",
    "workedExample": {
      "sampleWord": "DOMAIN",
      "sampleMasked": "D _ M _ _ N",
      "sampleMissing": "O, A, I",
      "sampleExplanation": "Kata 'DOMAIN' memiliki bagian kosong 'D _ M _ _ N'. Huruf yang melengkapi adalah O, A, I!"
    }
  },
  {
    "id": "ml-35",
    "word": "HOSTING",
    "masked": "H _ S T _ N G",
    "missingLetters": [
      "O",
      "I"
    ],
    "category": "Web & Cloud",
    "babyClue": "🍼 Rumah sewaan di internet tempat naruh file-file website biar bisa dibuka orang!",
    "meaning": "Layanan penyewaan ruang penyimpanan online bagi publikasi web.",
    "workedExample": {
      "sampleWord": "HOSTING",
      "sampleMasked": "H _ S T _ N G",
      "sampleMissing": "O, I",
      "sampleExplanation": "Kata 'HOSTING' memiliki bagian kosong 'H _ S T _ N G'. Huruf yang melengkapi adalah O, I!"
    }
  },
  {
    "id": "ml-36",
    "word": "DOCKER",
    "masked": "D _ C K _ R",
    "missingLetters": [
      "O",
      "E"
    ],
    "category": "Web & Cloud",
    "babyClue": "🍼 Kontainer kargo portable yang ngebungkus aplikasi lengkap sama bumbu-bumbunya biar jalan di mana aja!",
    "meaning": "Platform virtualisasi tingkat sistem operasi berbasis kontainer ringan.",
    "workedExample": {
      "sampleWord": "DOCKER",
      "sampleMasked": "D _ C K _ R",
      "sampleMissing": "O, E",
      "sampleExplanation": "Kata 'DOCKER' memiliki bagian kosong 'D _ C K _ R'. Huruf yang melengkapi adalah O, E!"
    }
  },
  {
    "id": "ml-37",
    "word": "CLUSTER",
    "masked": "C L _ S T _ R",
    "missingLetters": [
      "U",
      "E"
    ],
    "category": "Web & Cloud",
    "babyClue": "🍼 Pasukan sekelompok server yang gotong royong kerja bareng seolah-olah satu komputer raksasa!",
    "meaning": "Kumpulan komputer independen yang bekerja sama sebagai kesatuan sistem.",
    "workedExample": {
      "sampleWord": "CLUSTER",
      "sampleMasked": "C L _ S T _ R",
      "sampleMissing": "U, E",
      "sampleExplanation": "Kata 'CLUSTER' memiliki bagian kosong 'C L _ S T _ R'. Huruf yang melengkapi adalah U, E!"
    }
  },
  {
    "id": "ml-38",
    "word": "STORAGE",
    "masked": "S T _ R _ G E",
    "missingLetters": [
      "O",
      "A"
    ],
    "category": "Web & Cloud",
    "babyClue": "🍼 Gudang penyimpanan awan (Cloud Storage) tempat nyimpen foto dan file secara aman!",
    "meaning": "Kapasitas media penyimpanan berkas digital.",
    "workedExample": {
      "sampleWord": "STORAGE",
      "sampleMasked": "S T _ R _ G E",
      "sampleMissing": "O, A",
      "sampleExplanation": "Kata 'STORAGE' memiliki bagian kosong 'S T _ R _ G E'. Huruf yang melengkapi adalah O, A!"
    }
  },
  {
    "id": "ml-39",
    "word": "INSTANCE",
    "masked": "I N S T _ N C _",
    "missingLetters": [
      "A",
      "E"
    ],
    "category": "Web & Cloud",
    "babyClue": "🍼 Satu unit komputer virtual awan yang baru dinyalain di AWS atau Azure!",
    "meaning": "Saluran komputer server virtual yang berjalan di infrastruktur cloud.",
    "workedExample": {
      "sampleWord": "INSTANCE",
      "sampleMasked": "I N S T _ N C _",
      "sampleMissing": "A, E",
      "sampleExplanation": "Kata 'INSTANCE' memiliki bagian kosong 'I N S T _ N C _'. Huruf yang melengkapi adalah A, E!"
    }
  },
  {
    "id": "ml-40",
    "word": "GATEWAY",
    "masked": "G _ T E W _ Y",
    "missingLetters": [
      "A",
      "A"
    ],
    "category": "Web & Cloud",
    "babyClue": "🍼 Gerbang API penghubung komunikasi antar layanan mikro (Microservices)!",
    "meaning": "Pintu perantara pengelolaan lalu lintas rute API.",
    "workedExample": {
      "sampleWord": "GATEWAY",
      "sampleMasked": "G _ T E W _ Y",
      "sampleMissing": "A, A",
      "sampleExplanation": "Kata 'GATEWAY' memiliki bagian kosong 'G _ T E W _ Y'. Huruf yang melengkapi adalah A, A!"
    }
  },
  {
    "id": "ml-41",
    "word": "PROCESSOR",
    "masked": "P R _ C _ S S O R",
    "missingLetters": [
      "O",
      "E"
    ],
    "category": "Hardware & OS",
    "babyClue": "🍼 Otak utama komputer (CPU) yang ngitung jutaan operasi matematika per detik!",
    "meaning": "Unit pemroses pusat pengolah instruksi komputasi utama.",
    "workedExample": {
      "sampleWord": "PROCESSOR",
      "sampleMasked": "P R _ C _ S S O R",
      "sampleMissing": "O, E",
      "sampleExplanation": "Kata 'PROCESSOR' memiliki bagian kosong 'P R _ C _ S S O R'. Huruf yang melengkapi adalah O, E!"
    }
  },
  {
    "id": "ml-42",
    "word": "MEMORY",
    "masked": "M _ M _ R Y",
    "missingLetters": [
      "E",
      "O"
    ],
    "category": "Hardware & OS",
    "babyClue": "🍼 Meja kerja sementara (RAM): makin gede mejanya, makin banyak aplikasi bisa dibuka barengan!",
    "meaning": "Memori akses acak (RAM) penyimpan data sementara.",
    "workedExample": {
      "sampleWord": "MEMORY",
      "sampleMasked": "M _ M _ R Y",
      "sampleMissing": "E, O",
      "sampleExplanation": "Kata 'MEMORY' memiliki bagian kosong 'M _ M _ R Y'. Huruf yang melengkapi adalah E, O!"
    }
  },
  {
    "id": "ml-43",
    "word": "MONITOR",
    "masked": "M _ N _ T O R",
    "missingLetters": [
      "O",
      "I"
    ],
    "category": "Hardware & OS",
    "babyClue": "🍼 Layar kaca televisi tempat nampilin gambar dan tulisan dari komputer kamu!",
    "meaning": "Perangkat keluaran visual antarmuka sistem komputer.",
    "workedExample": {
      "sampleWord": "MONITOR",
      "sampleMasked": "M _ N _ T O R",
      "sampleMissing": "O, I",
      "sampleExplanation": "Kata 'MONITOR' memiliki bagian kosong 'M _ N _ T O R'. Huruf yang melengkapi adalah O, I!"
    }
  },
  {
    "id": "ml-44",
    "word": "KEYBOARD",
    "masked": "K _ Y B _ _ R D",
    "missingLetters": [
      "E",
      "O",
      "A"
    ],
    "category": "Hardware & OS",
    "babyClue": "🍼 Papan tombol ketik buat ngetik huruf, angka, dan baris koding!",
    "meaning": "Papan tombol ketik piranti input alfanumerik.",
    "workedExample": {
      "sampleWord": "KEYBOARD",
      "sampleMasked": "K _ Y B _ _ R D",
      "sampleMissing": "E, O, A",
      "sampleExplanation": "Kata 'KEYBOARD' memiliki bagian kosong 'K _ Y B _ _ R D'. Huruf yang melengkapi adalah E, O, A!"
    }
  },
  {
    "id": "ml-45",
    "word": "DRIVER",
    "masked": "D R _ V _ R",
    "missingLetters": [
      "I",
      "E"
    ],
    "category": "Hardware & OS",
    "babyClue": "🍼 Sopir penerjemah yang ngajarin Windows cara ngobrol sama printer atau VGA baru!",
    "meaning": "Perangkat lunak pengontrol komunikasi peranti keras dengan OS.",
    "workedExample": {
      "sampleWord": "DRIVER",
      "sampleMasked": "D R _ V _ R",
      "sampleMissing": "I, E",
      "sampleExplanation": "Kata 'DRIVER' memiliki bagian kosong 'D R _ V _ R'. Huruf yang melengkapi adalah I, E!"
    }
  },
  {
    "id": "ml-46",
    "word": "KERNEL",
    "masked": "K _ R N _ L",
    "missingLetters": [
      "E",
      "E"
    ],
    "category": "Hardware & OS",
    "babyClue": "🍼 Jantung inti terdalam sistem operasi yang ngatur jatah RAM dan CPU ke aplikasi!",
    "meaning": "Inti sistem operasi pengatur manajemen sumber daya dasar komputer.",
    "workedExample": {
      "sampleWord": "KERNEL",
      "sampleMasked": "K _ R N _ L",
      "sampleMissing": "E, E",
      "sampleExplanation": "Kata 'KERNEL' memiliki bagian kosong 'K _ R N _ L'. Huruf yang melengkapi adalah E, E!"
    }
  },
  {
    "id": "ml-47",
    "word": "SYSTEM",
    "masked": "S _ S T _ M",
    "missingLetters": [
      "Y",
      "E"
    ],
    "category": "Hardware & OS",
    "babyClue": "🍼 Kumpulan perangkat keras dan lunak yang kerja kompak jadi satu kesatuan!",
    "meaning": "Sistem operasi terpadu pendukung komputasi.",
    "workedExample": {
      "sampleWord": "SYSTEM",
      "sampleMasked": "S _ S T _ M",
      "sampleMissing": "Y, E",
      "sampleExplanation": "Kata 'SYSTEM' memiliki bagian kosong 'S _ S T _ M'. Huruf yang melengkapi adalah Y, E!"
    }
  },
  {
    "id": "ml-48",
    "word": "THREAD",
    "masked": "T H R _ _ D",
    "missingLetters": [
      "E",
      "A"
    ],
    "category": "Hardware & OS",
    "babyClue": "🍼 Jalur benang kerja di CPU: banyak thread artinya komputer bisa multitasking lancar!",
    "meaning": "Unit terkecil pemrosesan instruksi yang dapat dijadwalkan OS.",
    "workedExample": {
      "sampleWord": "THREAD",
      "sampleMasked": "T H R _ _ D",
      "sampleMissing": "E, A",
      "sampleExplanation": "Kata 'THREAD' memiliki bagian kosong 'T H R _ _ D'. Huruf yang melengkapi adalah E, A!"
    }
  },
  {
    "id": "ml-49",
    "word": "PROCESS",
    "masked": "P R _ C _ S S",
    "missingLetters": [
      "O",
      "E"
    ],
    "category": "Hardware & OS",
    "babyClue": "🍼 Aplikasi yang lagi aktif berjalan dan punya nomor identitas unik (PID) di Task Manager!",
    "meaning": "Program yang sedang dalam proses eksekusi di sistem operasi.",
    "workedExample": {
      "sampleWord": "PROCESS",
      "sampleMasked": "P R _ C _ S S",
      "sampleMissing": "O, E",
      "sampleExplanation": "Kata 'PROCESS' memiliki bagian kosong 'P R _ C _ S S'. Huruf yang melengkapi adalah O, E!"
    }
  },
  {
    "id": "ml-50",
    "word": "CHIPSET",
    "masked": "C H _ P S _ T",
    "missingLetters": [
      "I",
      "E"
    ],
    "category": "Hardware & OS",
    "babyClue": "🍼 Polisi lalu lintas di motherboard yang ngatur aliran data antar processor, RAM, dan kartu grafis!",
    "meaning": "Kumpulan sirkuit terpadu pengendali aliran data antarkomponen motherboard.",
    "workedExample": {
      "sampleWord": "CHIPSET",
      "sampleMasked": "C H _ P S _ T",
      "sampleMissing": "I, E",
      "sampleExplanation": "Kata 'CHIPSET' memiliki bagian kosong 'C H _ P S _ T'. Huruf yang melengkapi adalah I, E!"
    }
  },
  {
    "id": "ml-51",
    "word": "PASSWORD",
    "masked": "P _ S S W _ R D",
    "missingLetters": [
      "A",
      "O"
    ],
    "category": "Security",
    "babyClue": "🍼 Kata sandi kunci rahasia yang cuma kamu yang tahu biar akun kamu aman!",
    "meaning": "Kunci otentikasi rahasia untuk memverifikasi identitas pengguna.",
    "workedExample": {
      "sampleWord": "PASSWORD",
      "sampleMasked": "P _ S S W _ R D",
      "sampleMissing": "A, O",
      "sampleExplanation": "Kata 'PASSWORD' memiliki bagian kosong 'P _ S S W _ R D'. Huruf yang melengkapi adalah A, O!"
    }
  },
  {
    "id": "ml-52",
    "word": "MALWARE",
    "masked": "M _ L W _ R E",
    "missingLetters": [
      "A",
      "A"
    ],
    "category": "Security",
    "babyClue": "🍼 Kuman atau software jahat pengganggu yang ngerusak atau nyuri data komputer!",
    "meaning": "Perangkat lunak berbahaya pengancam integritas sistem.",
    "workedExample": {
      "sampleWord": "MALWARE",
      "sampleMasked": "M _ L W _ R E",
      "sampleMissing": "A, A",
      "sampleExplanation": "Kata 'MALWARE' memiliki bagian kosong 'M _ L W _ R E'. Huruf yang melengkapi adalah A, A!"
    }
  },
  {
    "id": "ml-53",
    "word": "PHISHING",
    "masked": "P H _ S H _ N G",
    "missingLetters": [
      "I",
      "I"
    ],
    "category": "Security",
    "babyClue": "🍼 Jebakan pancingan link palsu dari penipu yang pura-pura jadi pihak resmi!",
    "meaning": "Kejahatan siber rekayasa sosial pencuri kredensial melalui tautan tiruan.",
    "workedExample": {
      "sampleWord": "PHISHING",
      "sampleMasked": "P H _ S H _ N G",
      "sampleMissing": "I, I",
      "sampleExplanation": "Kata 'PHISHING' memiliki bagian kosong 'P H _ S H _ N G'. Huruf yang melengkapi adalah I, I!"
    }
  },
  {
    "id": "ml-54",
    "word": "ANTIVIRUS",
    "masked": "A N T _ V _ R U S",
    "missingLetters": [
      "I",
      "I"
    ],
    "category": "Security",
    "babyClue": "🍼 Dokter satpam yang rajin nyeken dan ngebasmi virus berbahaya dari laptop!",
    "meaning": "Perangkat lunak pendeteksi dan pemusnah virus komputer.",
    "workedExample": {
      "sampleWord": "ANTIVIRUS",
      "sampleMasked": "A N T _ V _ R U S",
      "sampleMissing": "I, I",
      "sampleExplanation": "Kata 'ANTIVIRUS' memiliki bagian kosong 'A N T _ V _ R U S'. Huruf yang melengkapi adalah I, I!"
    }
  },
  {
    "id": "ml-55",
    "word": "ENCRYPT",
    "masked": "E N C R _ P T",
    "missingLetters": [
      "Y"
    ],
    "category": "Security",
    "babyClue": "🍼 Mengacak tulisan jadi sandi rahasia biar kalau diintip orang di jalan gak bisa kebaca!",
    "meaning": "Proses pengacakan data menjadi format tersandi (chipertext).",
    "workedExample": {
      "sampleWord": "ENCRYPT",
      "sampleMasked": "E N C R _ P T",
      "sampleMissing": "Y",
      "sampleExplanation": "Kata 'ENCRYPT' memiliki bagian kosong 'E N C R _ P T'. Huruf yang melengkapi adalah Y!"
    }
  },
  {
    "id": "ml-56",
    "word": "DECRYPT",
    "masked": "D E C R _ P T",
    "missingLetters": [
      "Y"
    ],
    "category": "Security",
    "babyClue": "🍼 Membuka kembali sandi acak menjadi tulisan asli yang bisa dibaca pakai kunci yang sah!",
    "meaning": "Proses pemecahan kembali data tersandi menjadi teks semula.",
    "workedExample": {
      "sampleWord": "DECRYPT",
      "sampleMasked": "D E C R _ P T",
      "sampleMissing": "Y",
      "sampleExplanation": "Kata 'DECRYPT' memiliki bagian kosong 'D E C R _ P T'. Huruf yang melengkapi adalah Y!"
    }
  },
  {
    "id": "ml-57",
    "word": "RESTORE",
    "masked": "R _ S T _ R E",
    "missingLetters": [
      "E",
      "O"
    ],
    "category": "Security",
    "babyClue": "🍼 Mengembalikan data cadangan kembali ke laptop seperti sedia kala sebelum rusak!",
    "meaning": "Proses pemulihan data sistem dari salinan cadangan.",
    "workedExample": {
      "sampleWord": "RESTORE",
      "sampleMasked": "R _ S T _ R E",
      "sampleMissing": "E, O",
      "sampleExplanation": "Kata 'RESTORE' memiliki bagian kosong 'R _ S T _ R E'. Huruf yang melengkapi adalah E, O!"
    }
  },
  {
    "id": "ml-58",
    "word": "HELPDESK",
    "masked": "H _ L P D _ S K",
    "missingLetters": [
      "E",
      "E"
    ],
    "category": "Security",
    "babyClue": "🍼 Posko meja bantuan tempat karyawan nelpon saat printernya macet atau internet mati!",
    "meaning": "Unit layanan dukungan teknis teknologi informasi organisasi.",
    "workedExample": {
      "sampleWord": "HELPDESK",
      "sampleMasked": "H _ L P D _ S K",
      "sampleMissing": "E, E",
      "sampleExplanation": "Kata 'HELPDESK' memiliki bagian kosong 'H _ L P D _ S K'. Huruf yang melengkapi adalah E, E!"
    }
  },
  {
    "id": "ml-59",
    "word": "FIREWALL",
    "masked": "F _ R E W _ L L",
    "missingLetters": [
      "I",
      "A"
    ],
    "category": "Security",
    "babyClue": "🍼 Sistem pertahanan lapis pertama pencegah serangan jaringan tanpa izin!",
    "meaning": "Filter keamanan penangkal akses tidak berwenang.",
    "workedExample": {
      "sampleWord": "FIREWALL",
      "sampleMasked": "F _ R E W _ L L",
      "sampleMissing": "I, A",
      "sampleExplanation": "Kata 'FIREWALL' memiliki bagian kosong 'F _ R E W _ L L'. Huruf yang melengkapi adalah I, A!"
    }
  },
  {
    "id": "ml-60",
    "word": "INCIDENT",
    "masked": "I N C _ D _ N T",
    "missingLetters": [
      "I",
      "E"
    ],
    "category": "Security",
    "babyClue": "🍼 Kejadian darurat gangguan sistem komputer yang harus segera ditangani tim IT!",
    "meaning": "Peristiwa gangguan tak terencana terhadap layanan teknologi informasi.",
    "workedExample": {
      "sampleWord": "INCIDENT",
      "sampleMasked": "I N C _ D _ N T",
      "sampleMissing": "I, E",
      "sampleExplanation": "Kata 'INCIDENT' memiliki bagian kosong 'I N C _ D _ N T'. Huruf yang melengkapi adalah I, E!"
    }
  },
  {
    "id": "ml-61",
    "word": "REFACTOR",
    "masked": "R _ F _ C T O R",
    "missingLetters": [
      "E",
      "A"
    ],
    "category": "Software Eng",
    "babyClue": "🍼 Merapikan kembali susunan kodingan biar bersih dan enak dibaca tanpa ngubah fungsinya!",
    "meaning": "Proses restrukturisasi kode program untuk meningkatkan kualitas tanpa mengubah perilaku eksternal.",
    "workedExample": {
      "sampleWord": "REFACTOR",
      "sampleMasked": "R _ F _ C T O R",
      "sampleMissing": "E, A",
      "sampleExplanation": "Kata 'REFACTOR' memiliki bagian kosong 'R _ F _ C T O R'. Huruf yang melengkapi adalah E, A!"
    }
  },
  {
    "id": "ml-62",
    "word": "DEBUGGER",
    "masked": "D _ B _ G G E R",
    "missingLetters": [
      "E",
      "U"
    ],
    "category": "Software Eng",
    "babyClue": "🍼 Kaca pembesar detektif buat nyari dan nangkep kutu error (bug) di kodingan!",
    "meaning": "Alat pelacak dan pemeriksa kesalahan logika eksekusi program.",
    "workedExample": {
      "sampleWord": "DEBUGGER",
      "sampleMasked": "D _ B _ G G E R",
      "sampleMissing": "E, U",
      "sampleExplanation": "Kata 'DEBUGGER' memiliki bagian kosong 'D _ B _ G G E R'. Huruf yang melengkapi adalah E, U!"
    }
  },
  {
    "id": "ml-63",
    "word": "FRAMEWORK",
    "masked": "F R _ M _ W O R K",
    "missingLetters": [
      "A",
      "E"
    ],
    "category": "Software Eng",
    "babyClue": "🍼 Kerangka pondasi rumah siap huni: bikin programmer gak perlu bangun dari nol lagi!",
    "meaning": "Kerangka kerja perangkat lunak penstandardisasi arsitektur aplikasi.",
    "workedExample": {
      "sampleWord": "FRAMEWORK",
      "sampleMasked": "F R _ M _ W O R K",
      "sampleMissing": "A, E",
      "sampleExplanation": "Kata 'FRAMEWORK' memiliki bagian kosong 'F R _ M _ W O R K'. Huruf yang melengkapi adalah A, E!"
    }
  },
  {
    "id": "ml-64",
    "word": "LIBRARY",
    "masked": "L _ B R _ R Y",
    "missingLetters": [
      "I",
      "A"
    ],
    "category": "Software Eng",
    "babyClue": "🍼 Kotak perkakas berisi jurus-jurus koding siap pakai buatan programmer hebat dunia!",
    "meaning": "Kumpulan pustaka modul fungsi pendukung kode program.",
    "workedExample": {
      "sampleWord": "LIBRARY",
      "sampleMasked": "L _ B R _ R Y",
      "sampleMissing": "I, A",
      "sampleExplanation": "Kata 'LIBRARY' memiliki bagian kosong 'L _ B R _ R Y'. Huruf yang melengkapi adalah I, A!"
    }
  },
  {
    "id": "ml-65",
    "word": "REPOSITORY",
    "masked": "R _ P _ S I T O R Y",
    "missingLetters": [
      "E",
      "O"
    ],
    "category": "Software Eng",
    "babyClue": "🍼 Gudang brankas penyimpanan sejarah kodingan (seperti GitHub) tempat kerja tim bareng!",
    "meaning": "Tempat penyimpanan terpusat riwayat versi kode sumber perangkat lunak.",
    "workedExample": {
      "sampleWord": "REPOSITORY",
      "sampleMasked": "R _ P _ S I T O R Y",
      "sampleMissing": "E, O",
      "sampleExplanation": "Kata 'REPOSITORY' memiliki bagian kosong 'R _ P _ S I T O R Y'. Huruf yang melengkapi adalah E, O!"
    }
  },
  {
    "id": "ml-66",
    "word": "BRANCH",
    "masked": "B R _ N C H",
    "missingLetters": [
      "A"
    ],
    "category": "Software Eng",
    "babyClue": "🍼 Cabang ranting kodingan baru biar bisa uji coba fitur tanpa ngerusak batang pohon utama!",
    "meaning": "Cabang kerja independen dalam sistem kontrol versi Git.",
    "workedExample": {
      "sampleWord": "BRANCH",
      "sampleMasked": "B R _ N C H",
      "sampleMissing": "A",
      "sampleExplanation": "Kata 'BRANCH' memiliki bagian kosong 'B R _ N C H'. Huruf yang melengkapi adalah A!"
    }
  },
  {
    "id": "ml-67",
    "word": "COMMIT",
    "masked": "C _ M M _ T",
    "missingLetters": [
      "O",
      "I"
    ],
    "category": "Software Eng",
    "babyClue": "🍼 Tombol simpan jejak permanen dengan pesan catatan apa yang baru saja kamu ubah!",
    "meaning": "Penyimpanan perubahan lokal ke dalam riwayat repositori Git.",
    "workedExample": {
      "sampleWord": "COMMIT",
      "sampleMasked": "C _ M M _ T",
      "sampleMissing": "O, I",
      "sampleExplanation": "Kata 'COMMIT' memiliki bagian kosong 'C _ M M _ T'. Huruf yang melengkapi adalah O, I!"
    }
  },
  {
    "id": "ml-68",
    "word": "MERGE",
    "masked": "M _ R G _",
    "missingLetters": [
      "E",
      "E"
    ],
    "category": "Software Eng",
    "babyClue": "🍼 Menyatukan kembali cabang ranting kodingan yang udah selesai ke batang utama (main)!",
    "meaning": "Penggabungan dua cabang riwayat kodingan ke dalam satu cabang.",
    "workedExample": {
      "sampleWord": "MERGE",
      "sampleMasked": "M _ R G _",
      "sampleMissing": "E, E",
      "sampleExplanation": "Kata 'MERGE' memiliki bagian kosong 'M _ R G _'. Huruf yang melengkapi adalah E, E!"
    }
  },
  {
    "id": "ml-69",
    "word": "DEPLOY",
    "masked": "D _ P L _ Y",
    "missingLetters": [
      "E",
      "O"
    ],
    "category": "Software Eng",
    "babyClue": "🍼 Menerbangkan aplikasi dari laptop kamu ke server publik biar bisa dipakai orang sedunia!",
    "meaning": "Proses peluncuran dan penempatan aplikasi ke lingkungan produksi.",
    "workedExample": {
      "sampleWord": "DEPLOY",
      "sampleMasked": "D _ P L _ Y",
      "sampleMissing": "E, O",
      "sampleExplanation": "Kata 'DEPLOY' memiliki bagian kosong 'D _ P L _ Y'. Huruf yang melengkapi adalah E, O!"
    }
  },
  {
    "id": "ml-70",
    "word": "RELEASE",
    "masked": "R _ L _ _ S E",
    "missingLetters": [
      "E",
      "E",
      "A"
    ],
    "category": "Software Eng",
    "babyClue": "🍼 Peluncuran versi resmi aplikasi (seperti versi 1.0) ke publik pengguna!",
    "meaning": "Distribusi versi matang perangkat lunak kepada pengguna akhir.",
    "workedExample": {
      "sampleWord": "RELEASE",
      "sampleMasked": "R _ L _ _ S E",
      "sampleMissing": "E, E, A",
      "sampleExplanation": "Kata 'RELEASE' memiliki bagian kosong 'R _ L _ _ S E'. Huruf yang melengkapi adalah E, E, A!"
    }
  },
  {
    "id": "ml-71",
    "word": "RESEARCH",
    "masked": "R _ S _ _ R C H",
    "missingLetters": [
      "E",
      "E",
      "A"
    ],
    "category": "Academic English",
    "babyClue": "🍼 Penelitian ilmiah mendalam buat nemuin jawaban dari rasa penasaran ilmu pengetahuan!",
    "meaning": "Penyelidikan sistematis untuk membangun fakta dan kesimpulan baru.",
    "workedExample": {
      "sampleWord": "RESEARCH",
      "sampleMasked": "R _ S _ _ R C H",
      "sampleMissing": "E, E, A",
      "sampleExplanation": "Kata 'RESEARCH' memiliki bagian kosong 'R _ S _ _ R C H'. Huruf yang melengkapi adalah E, E, A!"
    }
  },
  {
    "id": "ml-72",
    "word": "HYPOTHESIS",
    "masked": "H _ P _ T H E S I S",
    "missingLetters": [
      "Y",
      "O"
    ],
    "category": "Academic English",
    "babyClue": "🍼 Dugaan tebakan awal yang masuk akal sebelum dibuktiin lewat eksperimen laboratorium!",
    "meaning": "Penjelasan tentatif yang dapat diuji kebenarannya melalui metode ilmiah.",
    "workedExample": {
      "sampleWord": "HYPOTHESIS",
      "sampleMasked": "H _ P _ T H E S I S",
      "sampleMissing": "Y, O",
      "sampleExplanation": "Kata 'HYPOTHESIS' memiliki bagian kosong 'H _ P _ T H E S I S'. Huruf yang melengkapi adalah Y, O!"
    }
  },
  {
    "id": "ml-73",
    "word": "ANALYSIS",
    "masked": "A N _ L _ S I S",
    "missingLetters": [
      "A",
      "Y"
    ],
    "category": "Academic English",
    "babyClue": "🍼 Membedah data angka menjadi bagian-bagian kecil buat dipahami artinya!",
    "meaning": "Pemeriksaan terperinci atas unsur-unsur suatu data atau fenomena.",
    "workedExample": {
      "sampleWord": "ANALYSIS",
      "sampleMasked": "A N _ L _ S I S",
      "sampleMissing": "A, Y",
      "sampleExplanation": "Kata 'ANALYSIS' memiliki bagian kosong 'A N _ L _ S I S'. Huruf yang melengkapi adalah A, Y!"
    }
  },
  {
    "id": "ml-74",
    "word": "EVIDENCE",
    "masked": "E V _ D _ N C E",
    "missingLetters": [
      "I",
      "E"
    ],
    "category": "Academic English",
    "babyClue": "🍼 Bukti nyata yang kuat (fakta data) buat ngedukung pendapat kamu di depan penguji!",
    "meaning": "Fakta atau informasi yang menunjukkan apakah suatu keyakinan benar adanya.",
    "workedExample": {
      "sampleWord": "EVIDENCE",
      "sampleMasked": "E V _ D _ N C E",
      "sampleMissing": "I, E",
      "sampleExplanation": "Kata 'EVIDENCE' memiliki bagian kosong 'E V _ D _ N C E'. Huruf yang melengkapi adalah I, E!"
    }
  },
  {
    "id": "ml-75",
    "word": "ARGUMENT",
    "masked": "A R G _ M _ N T",
    "missingLetters": [
      "U",
      "E"
    ],
    "category": "Academic English",
    "babyClue": "🍼 Alasan logis yang disusun runtut buat meyakinkan pembaca jurnal akademik!",
    "meaning": "Rangkaian pernyataan yang ditujukan untuk membuktikan suatu proposisi.",
    "workedExample": {
      "sampleWord": "ARGUMENT",
      "sampleMasked": "A R G _ M _ N T",
      "sampleMissing": "U, E",
      "sampleExplanation": "Kata 'ARGUMENT' memiliki bagian kosong 'A R G _ M _ N T'. Huruf yang melengkapi adalah U, E!"
    }
  },
  {
    "id": "ml-76",
    "word": "FINDINGS",
    "masked": "F _ N D _ N G S",
    "missingLetters": [
      "I",
      "I"
    ],
    "category": "Academic English",
    "babyClue": "🍼 Temuan hasil nyata yang didapet setelah selesai ngelakuin riset penelitian!",
    "meaning": "Hasil atau kesimpulan yang diperoleh dari penyelidikan ilmiah.",
    "workedExample": {
      "sampleWord": "FINDINGS",
      "sampleMasked": "F _ N D _ N G S",
      "sampleMissing": "I, I",
      "sampleExplanation": "Kata 'FINDINGS' memiliki bagian kosong 'F _ N D _ N G S'. Huruf yang melengkapi adalah I, I!"
    }
  },
  {
    "id": "ml-77",
    "word": "METHOD",
    "masked": "M _ T H _ D",
    "missingLetters": [
      "E",
      "O"
    ],
    "category": "Academic English",
    "babyClue": "🍼 Cara dan langkah-langkah teratur yang dipakai buat ngerjain penelitian!",
    "meaning": "Prosedur atau teknik sistematis untuk mencapai tujuan penelitian.",
    "workedExample": {
      "sampleWord": "METHOD",
      "sampleMasked": "M _ T H _ D",
      "sampleMissing": "E, O",
      "sampleExplanation": "Kata 'METHOD' memiliki bagian kosong 'M _ T H _ D'. Huruf yang melengkapi adalah E, O!"
    }
  },
  {
    "id": "ml-78",
    "word": "CONCLUSION",
    "masked": "C _ N C L _ S I O N",
    "missingLetters": [
      "O",
      "U"
    ],
    "category": "Academic English",
    "babyClue": "🍼 Kesimpulan intisari akhir dari seluruh rangkaian tulisan ilmiah!",
    "meaning": "Pernyataan akhir yang ditarik dari bukti-bukti riset.",
    "workedExample": {
      "sampleWord": "CONCLUSION",
      "sampleMasked": "C _ N C L _ S I O N",
      "sampleMissing": "O, U",
      "sampleExplanation": "Kata 'CONCLUSION' memiliki bagian kosong 'C _ N C L _ S I O N'. Huruf yang melengkapi adalah O, U!"
    }
  },
  {
    "id": "ml-79",
    "word": "DATASET",
    "masked": "D _ T _ S E T",
    "missingLetters": [
      "A",
      "A"
    ],
    "category": "Academic English",
    "babyClue": "🍼 Himpunan koleksi data mentah yang siap diolah komputer statistik!",
    "meaning": "Koleksi data terstruktur yang digunakan untuk analisis statistik.",
    "workedExample": {
      "sampleWord": "DATASET",
      "sampleMasked": "D _ T _ S E T",
      "sampleMissing": "A, A",
      "sampleExplanation": "Kata 'DATASET' memiliki bagian kosong 'D _ T _ S E T'. Huruf yang melengkapi adalah A, A!"
    }
  },
  {
    "id": "ml-80",
    "word": "ABSTRACT",
    "masked": "A B S T R _ C T",
    "missingLetters": [
      "A"
    ],
    "category": "Academic English",
    "babyClue": "🍼 Ringkasan satu halaman di bagian paling depan jurnal yang nyeritain isi riset!",
    "meaning": "Ringkasan padat dari sebuah karya ilmiah atau artikel riset.",
    "workedExample": {
      "sampleWord": "ABSTRACT",
      "sampleMasked": "A B S T R _ C T",
      "sampleMissing": "A",
      "sampleExplanation": "Kata 'ABSTRACT' memiliki bagian kosong 'A B S T R _ C T'. Huruf yang melengkapi adalah A!"
    }
  },
  {
    "id": "ml-81",
    "word": "DEMONSTRATE",
    "masked": "D _ M _ N S T R A T E",
    "missingLetters": [
      "E",
      "O"
    ],
    "category": "Academic Verbs",
    "babyClue": "🍼 Membuktikan secara gamblang lewat percobaan nyata!",
    "meaning": "Menunjukkan kebenaran suatu dalil secara empiris.",
    "workedExample": {
      "sampleWord": "DEMONSTRATE",
      "sampleMasked": "D _ M _ N S T R A T E",
      "sampleMissing": "E, O",
      "sampleExplanation": "Kata 'DEMONSTRATE' memiliki bagian kosong 'D _ M _ N S T R A T E'. Huruf yang melengkapi adalah E, O!"
    }
  },
  {
    "id": "ml-82",
    "word": "INDICATE",
    "masked": "I N D _ C _ T E",
    "missingLetters": [
      "I",
      "A"
    ],
    "category": "Academic Verbs",
    "babyClue": "🍼 Menandakan atau memberi petunjuk bahwa suatu tren lagi terjadi!",
    "meaning": "Menunjukkan tanda atau indikasi dari suatu keadaan.",
    "workedExample": {
      "sampleWord": "INDICATE",
      "sampleMasked": "I N D _ C _ T E",
      "sampleMissing": "I, A",
      "sampleExplanation": "Kata 'INDICATE' memiliki bagian kosong 'I N D _ C _ T E'. Huruf yang melengkapi adalah I, A!"
    }
  },
  {
    "id": "ml-83",
    "word": "EVALUATE",
    "masked": "E V _ L _ A T E",
    "missingLetters": [
      "A",
      "U"
    ],
    "category": "Academic Verbs",
    "babyClue": "🍼 Menimbang dan menilai mutu kelebihan serta kekurangan suatu metode!",
    "meaning": "Menilai kualitas, nilai, atau signifikansi sesuatu secara kritis.",
    "workedExample": {
      "sampleWord": "EVALUATE",
      "sampleMasked": "E V _ L _ A T E",
      "sampleMissing": "A, U",
      "sampleExplanation": "Kata 'EVALUATE' memiliki bagian kosong 'E V _ L _ A T E'. Huruf yang melengkapi adalah A, U!"
    }
  },
  {
    "id": "ml-84",
    "word": "ESTABLISH",
    "masked": "E S T _ B L _ S H",
    "missingLetters": [
      "A",
      "I"
    ],
    "category": "Academic Verbs",
    "babyClue": "🍼 Membangun dan memastikan fakta hukum sains yang diakui semua orang!",
    "meaning": "Menetapkan dasar kebenaran atau aturan secara definitif.",
    "workedExample": {
      "sampleWord": "ESTABLISH",
      "sampleMasked": "E S T _ B L _ S H",
      "sampleMissing": "A, I",
      "sampleExplanation": "Kata 'ESTABLISH' memiliki bagian kosong 'E S T _ B L _ S H'. Huruf yang melengkapi adalah A, I!"
    }
  },
  {
    "id": "ml-85",
    "word": "CORRELATE",
    "masked": "C _ R R _ L A T E",
    "missingLetters": [
      "O",
      "E"
    ],
    "category": "Academic Verbs",
    "babyClue": "🍼 Saling berhubungan: saat variabel satu naik, variabel lain ikut terpengaruh!",
    "meaning": "Memiliki hubungan timbal balik atau saling keterkaitan.",
    "workedExample": {
      "sampleWord": "CORRELATE",
      "sampleMasked": "C _ R R _ L A T E",
      "sampleMissing": "O, E",
      "sampleExplanation": "Kata 'CORRELATE' memiliki bagian kosong 'C _ R R _ L A T E'. Huruf yang melengkapi adalah O, E!"
    }
  },
  {
    "id": "ml-86",
    "word": "EMPHASIZE",
    "masked": "E M P H _ S _ Z E",
    "missingLetters": [
      "A",
      "I"
    ],
    "category": "Academic Verbs",
    "babyClue": "🍼 Memberikan sorotan penekanan khusus pada bagian yang paling penting!",
    "meaning": "Memberi penekanan atau arti penting pada suatu poin.",
    "workedExample": {
      "sampleWord": "EMPHASIZE",
      "sampleMasked": "E M P H _ S _ Z E",
      "sampleMissing": "A, I",
      "sampleExplanation": "Kata 'EMPHASIZE' memiliki bagian kosong 'E M P H _ S _ Z E'. Huruf yang melengkapi adalah A, I!"
    }
  },
  {
    "id": "ml-87",
    "word": "IDENTIFY",
    "masked": "I D _ N T _ F Y",
    "missingLetters": [
      "E",
      "I"
    ],
    "category": "Academic Verbs",
    "babyClue": "🍼 Mengenali dan menemukan pola kunci yang tersembunyi!",
    "meaning": "Mengenali atau menetapkan identitas suatu fenomena.",
    "workedExample": {
      "sampleWord": "IDENTIFY",
      "sampleMasked": "I D _ N T _ F Y",
      "sampleMissing": "E, I",
      "sampleExplanation": "Kata 'IDENTIFY' memiliki bagian kosong 'I D _ N T _ F Y'. Huruf yang melengkapi adalah E, I!"
    }
  },
  {
    "id": "ml-88",
    "word": "DISTINGUISH",
    "masked": "D _ S T _ N G U I S H",
    "missingLetters": [
      "I",
      "I"
    ],
    "category": "Academic Verbs",
    "babyClue": "🍼 Membedakan dengan jeli antara dua hal yang kelihatannya mirip!",
    "meaning": "Mengenali perbedaan karakteristik antara dua entitas.",
    "workedExample": {
      "sampleWord": "DISTINGUISH",
      "sampleMasked": "D _ S T _ N G U I S H",
      "sampleMissing": "I, I",
      "sampleExplanation": "Kata 'DISTINGUISH' memiliki bagian kosong 'D _ S T _ N G U I S H'. Huruf yang melengkapi adalah I, I!"
    }
  },
  {
    "id": "ml-89",
    "word": "DERIVE",
    "masked": "D _ R _ V E",
    "missingLetters": [
      "E",
      "I"
    ],
    "category": "Academic Verbs",
    "babyClue": "🍼 Menurunkan rumus atau mengambil kesimpulan dari sumber awalnya!",
    "meaning": "Mendapatkan atau menarik kesimpulan dari suatu asal mula.",
    "workedExample": {
      "sampleWord": "DERIVE",
      "sampleMasked": "D _ R _ V E",
      "sampleMissing": "E, I",
      "sampleExplanation": "Kata 'DERIVE' memiliki bagian kosong 'D _ R _ V E'. Huruf yang melengkapi adalah E, I!"
    }
  },
  {
    "id": "ml-90",
    "word": "ASSUME",
    "masked": "A S S _ M _",
    "missingLetters": [
      "U",
      "E"
    ],
    "category": "Academic Verbs",
    "babyClue": "🍼 Mengasumsikan atau menganggap suatu syarat berlaku sebelum mulai berhitung!",
    "meaning": "Menganggap sesuatu sebagai kebenaran sebelum pembuktian.",
    "workedExample": {
      "sampleWord": "ASSUME",
      "sampleMasked": "A S S _ M _",
      "sampleMissing": "U, E",
      "sampleExplanation": "Kata 'ASSUME' memiliki bagian kosong 'A S S _ M _'. Huruf yang melengkapi adalah U, E!"
    }
  },
  {
    "id": "ml-91",
    "word": "SIGNIFICANT",
    "masked": "S _ G N _ F I C A N T",
    "missingLetters": [
      "I",
      "I"
    ],
    "category": "Academic Vocabulary",
    "babyClue": "🍼 Berarti sangat besar dan penting (bukan cuma kebetulan angka kecil)!",
    "meaning": "Memiliki dampak atau arti yang cukup besar secara statistik.",
    "workedExample": {
      "sampleWord": "SIGNIFICANT",
      "sampleMasked": "S _ G N _ F I C A N T",
      "sampleMissing": "I, I",
      "sampleExplanation": "Kata 'SIGNIFICANT' memiliki bagian kosong 'S _ G N _ F I C A N T'. Huruf yang melengkapi adalah I, I!"
    }
  },
  {
    "id": "ml-92",
    "word": "SUBSTANTIAL",
    "masked": "S _ B S T _ N T I A L",
    "missingLetters": [
      "U",
      "A"
    ],
    "category": "Academic Vocabulary",
    "babyClue": "🍼 Jumlah yang sangat banyak dan berbobot nyata!",
    "meaning": "Berjumlah besar, bernilai cukup besar atau kuat.",
    "workedExample": {
      "sampleWord": "SUBSTANTIAL",
      "sampleMasked": "S _ B S T _ N T I A L",
      "sampleMissing": "U, A",
      "sampleExplanation": "Kata 'SUBSTANTIAL' memiliki bagian kosong 'S _ B S T _ N T I A L'. Huruf yang melengkapi adalah U, A!"
    }
  },
  {
    "id": "ml-93",
    "word": "ACCURATE",
    "masked": "A C C _ R _ T E",
    "missingLetters": [
      "U",
      "A"
    ],
    "category": "Academic Vocabulary",
    "babyClue": "🍼 Tepat sasaran dan tidak meleset dari angka yang sebenarnya!",
    "meaning": "Bebas dari kesalahan, tepat sesuai kenyataan faktual.",
    "workedExample": {
      "sampleWord": "ACCURATE",
      "sampleMasked": "A C C _ R _ T E",
      "sampleMissing": "U, A",
      "sampleExplanation": "Kata 'ACCURATE' memiliki bagian kosong 'A C C _ R _ T E'. Huruf yang melengkapi adalah U, A!"
    }
  },
  {
    "id": "ml-94",
    "word": "EFFICIENT",
    "masked": "E F F _ C _ _ N T",
    "missingLetters": [
      "I",
      "I",
      "E"
    ],
    "category": "Academic Vocabulary",
    "babyClue": "🍼 Hemat tenaga dan waktu tanpa membuang-buang daya komputer!",
    "meaning": "Mencapai produktivitas maksimal dengan pemborosan minimal.",
    "workedExample": {
      "sampleWord": "EFFICIENT",
      "sampleMasked": "E F F _ C _ _ N T",
      "sampleMissing": "I, I, E",
      "sampleExplanation": "Kata 'EFFICIENT' memiliki bagian kosong 'E F F _ C _ _ N T'. Huruf yang melengkapi adalah I, I, E!"
    }
  },
  {
    "id": "ml-95",
    "word": "COMPREHENSIVE",
    "masked": "C _ M P R E H _ N S I V E",
    "missingLetters": [
      "O",
      "E"
    ],
    "category": "Academic Vocabulary",
    "babyClue": "🍼 Lengkap menyeluruh dari hulu sampai hilir gak ada yang ketinggalan!",
    "meaning": "Mencakup secara luas dan menyeluruh seluruh aspek.",
    "workedExample": {
      "sampleWord": "COMPREHENSIVE",
      "sampleMasked": "C _ M P R E H _ N S I V E",
      "sampleMissing": "O, E",
      "sampleExplanation": "Kata 'COMPREHENSIVE' memiliki bagian kosong 'C _ M P R E H _ N S I V E'. Huruf yang melengkapi adalah O, E!"
    }
  },
  {
    "id": "ml-96",
    "word": "PARADIGM",
    "masked": "P _ R _ D I G M",
    "missingLetters": [
      "A",
      "A"
    ],
    "category": "Academic Vocabulary",
    "babyClue": "🍼 Kerangka cara pandang pola pikir ilmiah dalam memecahkan masalah besar!",
    "meaning": "Model konseptual atau pola dasar berpikir ilmiah.",
    "workedExample": {
      "sampleWord": "PARADIGM",
      "sampleMasked": "P _ R _ D I G M",
      "sampleMissing": "A, A",
      "sampleExplanation": "Kata 'PARADIGM' memiliki bagian kosong 'P _ R _ D I G M'. Huruf yang melengkapi adalah A, A!"
    }
  },
  {
    "id": "ml-97",
    "word": "CRITERIA",
    "masked": "C R _ T _ R I A",
    "missingLetters": [
      "I",
      "E"
    ],
    "category": "Academic Vocabulary",
    "babyClue": "🍼 Patokan standar syarat yang harus dipenuhi biar bisa lolos!",
    "meaning": "Standar penilaian atau tolak ukur pengujian.",
    "workedExample": {
      "sampleWord": "CRITERIA",
      "sampleMasked": "C R _ T _ R I A",
      "sampleMissing": "I, E",
      "sampleExplanation": "Kata 'CRITERIA' memiliki bagian kosong 'C R _ T _ R I A'. Huruf yang melengkapi adalah I, E!"
    }
  },
  {
    "id": "ml-98",
    "word": "PHENOMENON",
    "masked": "P H _ N O M _ N O N",
    "missingLetters": [
      "E",
      "E"
    ],
    "category": "Academic Vocabulary",
    "babyClue": "🍼 Gejala kejadian luar biasa di alam yang diamati para ilmuwan!",
    "meaning": "Fakta atau peristiwa yang dapat diamati terjadi di alam.",
    "workedExample": {
      "sampleWord": "PHENOMENON",
      "sampleMasked": "P H _ N O M _ N O N",
      "sampleMissing": "E, E",
      "sampleExplanation": "Kata 'PHENOMENON' memiliki bagian kosong 'P H _ N O M _ N O N'. Huruf yang melengkapi adalah E, E!"
    }
  },
  {
    "id": "ml-99",
    "word": "VARIANCE",
    "masked": "V _ R I _ N C E",
    "missingLetters": [
      "A",
      "A"
    ],
    "category": "Academic Vocabulary",
    "babyClue": "🍼 Selisih keragaman angka yang menyebar dari nilai rata-ratanya!",
    "meaning": "Ukuran penyebaran nilai data statistik dari nilai rata-ratanya.",
    "workedExample": {
      "sampleWord": "VARIANCE",
      "sampleMasked": "V _ R I _ N C E",
      "sampleMissing": "A, A",
      "sampleExplanation": "Kata 'VARIANCE' memiliki bagian kosong 'V _ R I _ N C E'. Huruf yang melengkapi adalah A, A!"
    }
  },
  {
    "id": "ml-100",
    "word": "IMPACT",
    "masked": "I M P _ C T",
    "missingLetters": [
      "A"
    ],
    "category": "Academic Vocabulary",
    "babyClue": "🍼 Pengaruh dampak besar yang dirasakan akibat hasil inovasi baru!",
    "meaning": "Efek atau konsekuensi kuat yang dihasilkan dari suatu aksi.",
    "workedExample": {
      "sampleWord": "IMPACT",
      "sampleMasked": "I M P _ C T",
      "sampleMissing": "A",
      "sampleExplanation": "Kata 'IMPACT' memiliki bagian kosong 'I M P _ C T'. Huruf yang melengkapi adalah A!"
    }
  }
];

// ================= ACADEMIC IELTS STUDIO (100 SOAL CAMBRIDGE GRAMMAR) =================
const ieltsAcademicBank = [
  {
    "id": "ielts-1",
    "cambridgeUnit": "Unit 1: Present Simple & Continuous",
    "ieltsFocus": "Task 1: Deskripsi Grafik",
    "questionPrompt": "The bar chart ______ the proportion of renewable energy consumed by five European nations in 2020.",
    "options": [
      "illustrates",
      "is illustrating",
      "illustrate",
      "has illustrated"
    ],
    "correctAnswer": "illustrates",
    "babyExplanation": "🍼 Nalar Bayi: Dalam IELTS Task 1, grafik adalah fakta yang selalu nyata di atas kertas, jadi pengantarnya SELALU memakai Present Simple ('illustrates') bukan continuous!",
    "workedExample": {
      "sampleQuestion": "The line graph ______ total shoe production in 2024.",
      "sampleAnswer": "shows",
      "sampleLogic": "Grafik menyajikan fakta permanen: gunakan Present Simple ('shows')!"
    }
  },
  {
    "id": "ielts-2",
    "cambridgeUnit": "Unit 1: Present Simple & Continuous",
    "ieltsFocus": "Academic Facts vs Trends",
    "questionPrompt": "Water ______ at 100 degrees Celsius under standard atmospheric pressure.",
    "options": [
      "boils",
      "is boiling",
      "has boiled",
      "will boil"
    ],
    "correctAnswer": "boils",
    "babyExplanation": "🍼 Nalar Bayi: Hukum sains dan fakta universal alam selalu memakai Present Simple ('boils')!",
    "workedExample": {
      "sampleQuestion": "Light ______ faster than sound in a vacuum.",
      "sampleAnswer": "travels",
      "sampleLogic": "Hukum fisika universal memakai Present Simple!"
    }
  },
  {
    "id": "ielts-3",
    "cambridgeUnit": "Unit 1: Present Simple & Continuous",
    "ieltsFocus": "Task 2: Ongoing Trends",
    "questionPrompt": "Currently, the global temperature ______ at an unprecedented rate due to carbon emissions.",
    "options": [
      "is rising",
      "rises",
      "has risen",
      "rose"
    ],
    "correctAnswer": "is rising",
    "babyExplanation": "🍼 Nalar Bayi: Kata keterangan 'Currently' (saat ini sedang berlangsung) menunjukkan tren dinamis yang sedang terjadi, jadi memakai Present Continuous ('is rising')!",
    "workedExample": {
      "sampleQuestion": "At present, the human population ______ rapidly.",
      "sampleAnswer": "is growing",
      "sampleLogic": "Tren yang sedang berlangsung saat ini = Present Continuous!"
    }
  },
  {
    "id": "ielts-4",
    "cambridgeUnit": "Unit 2: State Verbs vs Action Verbs",
    "ieltsFocus": "Academic Tone",
    "questionPrompt": "Many sociologists ______ that urbanization contributes directly to economic growth.",
    "options": [
      "believe",
      "are believing",
      "believed",
      "have been believing"
    ],
    "correctAnswer": "believe",
    "babyExplanation": "🍼 Nalar Bayi: 'Believe' adalah State Verb (kata kerja pikiran/perasaan). State verb TIDAK BOLEH diberi akhiran -ing continuous!",
    "workedExample": {
      "sampleQuestion": "Researchers ______ that the results are valid.",
      "sampleAnswer": "know",
      "sampleLogic": "'Know' adalah state verb, tidak boleh 'are knowing'!"
    }
  },
  {
    "id": "ielts-5",
    "cambridgeUnit": "Unit 2: State Verbs vs Action Verbs",
    "ieltsFocus": "Data Attributes",
    "questionPrompt": "The experimental sample ______ three distinct chemical compounds.",
    "options": [
      "contains",
      "is containing",
      "has been containing",
      "contain"
    ],
    "correctAnswer": "contains",
    "babyExplanation": "🍼 Nalar Bayi: 'Contain' (berisi) adalah kondisi fisik statis, bukan aktivitas gerak, jadi selalu Present Simple tunggal ('contains')!",
    "workedExample": {
      "sampleQuestion": "The mixture ______ pure nitrogen and argon.",
      "sampleAnswer": "consists of",
      "sampleLogic": "Komposisi statis memakai Present Simple!"
    }
  },
  {
    "id": "ielts-6",
    "cambridgeUnit": "Unit 3: Present Continuous for Temporary Trends",
    "ieltsFocus": "Task 1: Temporary Shifts",
    "questionPrompt": "Although coal usage is traditionally high, factories ______ towards solar power this quarter.",
    "options": [
      "are shifting",
      "shifts",
      "shifted",
      "had shifted"
    ],
    "correctAnswer": "are shifting",
    "babyExplanation": "🍼 Nalar Bayi: Frasa 'this quarter' (triwulan ini) menunjukkan perubahan perilaku sementara yang sedang berlangsung = 'are shifting'!",
    "workedExample": {
      "sampleQuestion": "More consumers ______ towards online grocery shopping this season.",
      "sampleAnswer": "are turning",
      "sampleLogic": "Tren sementara = Present Continuous!"
    }
  },
  {
    "id": "ielts-7",
    "cambridgeUnit": "Unit 3: Habitual Actions vs State",
    "ieltsFocus": "Task 2: General Patterns",
    "questionPrompt": "In automated factories, robotic arms ______ precision assembly without human fatigue.",
    "options": [
      "perform",
      "are performing",
      "performed",
      "have performed"
    ],
    "correctAnswer": "perform",
    "babyExplanation": "🍼 Nalar Bayi: Kemampuan umum robotik sehari-hari di pabrik adalah rutinitas umum = Present Simple ('perform')!",
    "workedExample": {
      "sampleQuestion": "Modern servers ______ high volumes of requests efficiently.",
      "sampleAnswer": "handle",
      "sampleLogic": "Fungsi rutin teknologi = Present Simple!"
    }
  },
  {
    "id": "ielts-8",
    "cambridgeUnit": "Unit 1: Present Simple Plural Subject",
    "ieltsFocus": "Subject-Verb Agreement",
    "questionPrompt": "The data provided in the appendix ______ the primary findings of the report.",
    "options": [
      "confirm",
      "confirms",
      "is confirming",
      "has confirmed"
    ],
    "correctAnswer": "confirm",
    "babyExplanation": "🍼 Nalar Bayi: Perhatikan subjek jamak: 'The data' (jamak dari datum) memerlukan kata kerja bentuk jamak tanpa akhiran s ('confirm')!",
    "workedExample": {
      "sampleQuestion": "The statistics ______ the researcher's initial hypothesis.",
      "sampleAnswer": "support",
      "sampleLogic": "Subjek statistik/data jamak memakai kata kerja jamak!"
    }
  },
  {
    "id": "ielts-9",
    "cambridgeUnit": "Unit 2: Stative Verbs of Perception",
    "ieltsFocus": "Academic Observation",
    "questionPrompt": "The proposed policy ______ reasonable to most environmental analysts.",
    "options": [
      "seems",
      "is seeming",
      "has been seeming",
      "seem"
    ],
    "correctAnswer": "seems",
    "babyExplanation": "🍼 Nalar Bayi: 'Seem' (kelihatan/tampak) adalah kata kerja persepsi statif, jadi memakai 'seems'!",
    "workedExample": {
      "sampleQuestion": "The algorithm ______ robust under stress testing.",
      "sampleAnswer": "appears",
      "sampleLogic": "'Appear' dalam arti tampak = Present Simple!"
    }
  },
  {
    "id": "ielts-10",
    "cambridgeUnit": "Unit 3: Present Tenses Summary",
    "ieltsFocus": "Task 1 Overview",
    "questionPrompt": "Overall, it ______ evident that industrial waste output grew significantly over the period.",
    "options": [
      "is",
      "was being",
      "is being",
      "has been being"
    ],
    "correctAnswer": "is",
    "babyExplanation": "🍼 Nalar Bayi: Frasa rangkuman 'It is evident that...' (Jelas tampak bahwa...) adalah pola baku pengantar Overview IELTS Task 1!",
    "workedExample": {
      "sampleQuestion": "Overall, it ______ clear that renewable energy overtook fossil fuels.",
      "sampleAnswer": "is",
      "sampleLogic": "Pola overview IELTS Task 1 selalu 'It is clear/evident that...'!"
    }
  },
  {
    "id": "ielts-11",
    "cambridgeUnit": "Unit 4: Past Simple for Completed Historical Events",
    "ieltsFocus": "Task 1: Past Periods",
    "questionPrompt": "Between 2000 and 2010, the company's annual revenue ______ by 45 percent.",
    "options": [
      "increased",
      "has increased",
      "is increasing",
      "was increased"
    ],
    "correctAnswer": "increased",
    "babyExplanation": "🍼 Nalar Bayi: Periode waktu lampau yang sudah tamat tuntas (Between 2000 and 2010) WAJIB memakai Past Simple V2 ('increased')!",
    "workedExample": {
      "sampleQuestion": "From 1995 to 2005, sales ______ dramatically.",
      "sampleAnswer": "rose",
      "sampleLogic": "Rentang tahun lampau yang selesai = Past Simple V2!"
    }
  },
  {
    "id": "ielts-12",
    "cambridgeUnit": "Unit 4: Past Simple vs Continuous",
    "ieltsFocus": "Task 1 Interrupted Trends",
    "questionPrompt": "While the European economy was expanding, Asian manufacturing sectors ______ at an even faster pace.",
    "options": [
      "were growing",
      "grew",
      "have grown",
      "had been grown"
    ],
    "correctAnswer": "were growing",
    "babyExplanation": "🍼 Nalar Bayi: Dua kegiatan lampau yang berjalan berbarengan secara paralel memakai Past Continuous ('were growing')!",
    "workedExample": {
      "sampleQuestion": "While oil prices were dropping, renewable investments ______ steadily.",
      "sampleAnswer": "were rising",
      "sampleLogic": "Aktivitas paralel di masa lampau = Past Continuous!"
    }
  },
  {
    "id": "ielts-13",
    "cambridgeUnit": "Unit 5: Past Perfect for Earlier Events",
    "ieltsFocus": "Task 2 Historical Background",
    "questionPrompt": "By the time the new environmental regulation was enacted, carbon emissions ______ dangerous levels.",
    "options": [
      "had reached",
      "reached",
      "have reached",
      "were reaching"
    ],
    "correctAnswer": "had reached",
    "babyExplanation": "🍼 Nalar Bayi: Pola 'By the time + Past Simple' mengharuskan peristiwa yang terjadi LEBIH AWAL memakai Past Perfect ('had reached')!",
    "workedExample": {
      "sampleQuestion": "By the time the team arrived, the server ______ down.",
      "sampleAnswer": "had shut",
      "sampleLogic": "Peristiwa yang lebih dulu terjadi sebelum masa lampau = had + V3!"
    }
  },
  {
    "id": "ielts-14",
    "cambridgeUnit": "Unit 5: Past Perfect vs Past Simple",
    "ieltsFocus": "Research Sequencing",
    "questionPrompt": "The scientists analyzed the samples only after they ______ the laboratory equipment.",
    "options": [
      "had calibrated",
      "calibrated",
      "have calibrated",
      "calibrate"
    ],
    "correctAnswer": "had calibrated",
    "babyExplanation": "🍼 Nalar Bayi: Kalibrasi alat dilakukan DULUAN sebelum analisis sampel, jadi memakai Past Perfect ('had calibrated')!",
    "workedExample": {
      "sampleQuestion": "The database updated after the system ______ all pending records.",
      "sampleAnswer": "had verified",
      "sampleLogic": "Aksi yang mendahului aksi lampau lain = had + V3!"
    }
  },
  {
    "id": "ielts-15",
    "cambridgeUnit": "Unit 6: Used to for Past Habits",
    "ieltsFocus": "Task 2 Societal Changes",
    "questionPrompt": "Prior to the internet era, students ______ reference encyclopedias in physical libraries.",
    "options": [
      "used to consult",
      "are used to consult",
      "use to consult",
      "used to consulting"
    ],
    "correctAnswer": "used to consult",
    "babyExplanation": "🍼 Nalar Bayi: Kebiasaan masa lalu yang sekarang sudah tidak dilakukan lagi memakai 'used to + Verb 1' ('used to consult')!",
    "workedExample": {
      "sampleQuestion": "People ______ letters before email became ubiquitous.",
      "sampleAnswer": "used to write",
      "sampleLogic": "Kebiasaan lampau yang sudah berakhir = used to + V1!"
    }
  },
  {
    "id": "ielts-16",
    "cambridgeUnit": "Unit 6: Would for Repeated Past Actions",
    "ieltsFocus": "Task 2 Historical Description",
    "questionPrompt": "Whenever a machine malfunctioned in the 19th century, technicians ______ the parts by hand.",
    "options": [
      "would replace",
      "will replace",
      "are replacing",
      "used to replacing"
    ],
    "correctAnswer": "would replace",
    "babyExplanation": "🍼 Nalar Bayi: 'Would' bisa digunakan untuk menceritakan rutinitas berulang di masa lampau yang puitis dan formal!",
    "workedExample": {
      "sampleQuestion": "In ancient times, traders ______ gold for spices.",
      "sampleAnswer": "would exchange",
      "sampleLogic": "Tindakan berulang masa lampau = would + V1!"
    }
  },
  {
    "id": "ielts-17",
    "cambridgeUnit": "Unit 4: Irregular Past Verbs in IELTS",
    "ieltsFocus": "Task 1 Graph Describing",
    "questionPrompt": "The number of electric vehicles ______ slightly in the second quarter of 2018.",
    "options": [
      "fell",
      "felled",
      "fall",
      "has fallen"
    ],
    "correctAnswer": "fell",
    "babyExplanation": "🍼 Nalar Bayi: Bentuk lampau V2 dari 'fall' (turun) adalah 'fell', bukan felled!",
    "workedExample": {
      "sampleQuestion": "The unemployment rate ______ noticeably in 2012.",
      "sampleAnswer": "dropped",
      "sampleLogic": "Bentuk lampau V2 yang benar!"
    }
  },
  {
    "id": "ielts-18",
    "cambridgeUnit": "Unit 4: Past Simple Time Markers",
    "ieltsFocus": "Specific Past Year",
    "questionPrompt": "In 1998, researchers first ______ the link between diet and cardiovascular health.",
    "options": [
      "discovered",
      "have discovered",
      "had discovered",
      "discover"
    ],
    "correctAnswer": "discovered",
    "babyExplanation": "🍼 Nalar Bayi: Tahun tertentu di masa lampau (In 1998) SELALU memakai Past Simple V2 ('discovered'), bukan present perfect!",
    "workedExample": {
      "sampleQuestion": "In 2004, the social media platform ______ launched.",
      "sampleAnswer": "was",
      "sampleLogic": "Tahun lampau spesifik = Past Simple!"
    }
  },
  {
    "id": "ielts-19",
    "cambridgeUnit": "Unit 5: Past Continuous for Interruption",
    "ieltsFocus": "Lab Scenarios",
    "questionPrompt": "The technician was testing the circuit when the power supply suddenly ______.",
    "options": [
      "failed",
      "was failing",
      "had failed",
      "fails"
    ],
    "correctAnswer": "failed",
    "babyExplanation": "🍼 Nalar Bayi: Saat suatu kegiatan sedang berlangsung (was testing), peristiwa dadakan yang memotong memakai Past Simple ('failed')!",
    "workedExample": {
      "sampleQuestion": "The system was downloading data when the connection ______.",
      "sampleAnswer": "dropped",
      "sampleLogic": "Kejadian yang memotong di masa lampau = Past Simple!"
    }
  },
  {
    "id": "ielts-20",
    "cambridgeUnit": "Unit 6: Be Used to vs Used to",
    "ieltsFocus": "Adaptation Context",
    "questionPrompt": "Modern workers ______ collaborating with colleagues across different time zones.",
    "options": [
      "are used to",
      "used to",
      "use to",
      "used to be"
    ],
    "correctAnswer": "are used to",
    "babyExplanation": "🍼 Nalar Bayi: 'Be used to + V-ing' berarti sudah terbiasa beradaptasi dengan situasi saat ini ('are used to collaborating')!",
    "workedExample": {
      "sampleQuestion": "Engineers ______ working under tight deadlines.",
      "sampleAnswer": "are accustomed to",
      "sampleLogic": "Sudah terbiasa dengan kondisi saat ini!"
    }
  },
  {
    "id": "ielts-21",
    "cambridgeUnit": "Unit 7: Present Perfect for Recent Impact",
    "ieltsFocus": "Task 2 Modern Context",
    "questionPrompt": "Over the past two decades, artificial intelligence ______ various industrial sectors.",
    "options": [
      "has transformed",
      "transformed",
      "transforms",
      "had transformed"
    ],
    "correctAnswer": "has transformed",
    "babyExplanation": "🍼 Nalar Bayi: Frasa 'Over the past two decades' (selama dua dekade terakhir sampai sekarang) adalah penanda mutlak Present Perfect ('has transformed')!",
    "workedExample": {
      "sampleQuestion": "In recent years, automation ______ productivity.",
      "sampleAnswer": "has improved",
      "sampleLogic": "In recent years / over the past years = Present Perfect!"
    }
  },
  {
    "id": "ielts-22",
    "cambridgeUnit": "Unit 7: Present Perfect Continuous for Duration",
    "ieltsFocus": "Task 2 Ongoing Debate",
    "questionPrompt": "Economists ______ the long-term impact of remote work since the pandemic began.",
    "options": [
      "have been studying",
      "are studying",
      "had studied",
      "studied"
    ],
    "correctAnswer": "have been studying",
    "babyExplanation": "🍼 Nalar Bayi: Kata 'since' (sejak) dengan penekanan proses yang masih terus berjalan menuntut Present Perfect Continuous ('have been studying')!",
    "workedExample": {
      "sampleQuestion": "Scientists ______ renewable energy sources for decades.",
      "sampleAnswer": "have been researching",
      "sampleLogic": "Proses riset berdurasi panjang sampai kini = have been + V-ing!"
    }
  },
  {
    "id": "ielts-23",
    "cambridgeUnit": "Unit 8: Present Perfect with 'Since' Clause",
    "ieltsFocus": "Time Structure",
    "questionPrompt": "Since the automated sorting facility was built, manufacturing errors ______ by 60%.",
    "options": [
      "have decreased",
      "decreased",
      "had decreased",
      "are decreasing"
    ],
    "correctAnswer": "have decreased",
    "babyExplanation": "🍼 Nalar Bayi: Rumus baku IELTS: Since + Past Simple, [Klausa Utama = Present Perfect ('have decreased')]!",
    "workedExample": {
      "sampleQuestion": "Since the policy was introduced, crime rates ______.",
      "sampleAnswer": "have dropped",
      "sampleLogic": "Since + Past Simple, klausa utama memakai Present Perfect!"
    }
  },
  {
    "id": "ielts-24",
    "cambridgeUnit": "Unit 8: For vs Since in Academic Texts",
    "ieltsFocus": "Duration Markers",
    "questionPrompt": "The university has offered computer engineering degrees ______ more than thirty years.",
    "options": [
      "for",
      "since",
      "during",
      "in"
    ],
    "correctAnswer": "for",
    "babyExplanation": "🍼 Nalar Bayi: 'For' digunakan untuk rentang durasi total (for 30 years), sedangkan 'since' untuk titik awal waktu (since 1990)!",
    "workedExample": {
      "sampleQuestion": "The company has operated ______ 1985.",
      "sampleAnswer": "since",
      "sampleLogic": "Titik tahun awal = since!"
    }
  },
  {
    "id": "ielts-25",
    "cambridgeUnit": "Unit 7: Life Experience & Academic Milestones",
    "ieltsFocus": "Research Accomplishments",
    "questionPrompt": "No previous study ______ such a comprehensive correlation between both variables.",
    "options": [
      "has demonstrated",
      "demonstrated",
      "was demonstrating",
      "had demonstrated"
    ],
    "correctAnswer": "has demonstrated",
    "babyExplanation": "🍼 Nalar Bayi: Menyatakan rekor pencapaian ilmiah hingga saat ini memakai Present Perfect ('has demonstrated')!",
    "workedExample": {
      "sampleQuestion": "Never before ______ researchers observed such anomalous data.",
      "sampleAnswer": "have",
      "sampleLogic": "Inversi pengalaman ilmiah dengan Present Perfect!"
    }
  },
  {
    "id": "ielts-26",
    "cambridgeUnit": "Unit 9: Present Perfect vs Past Simple Contrast",
    "ieltsFocus": "Academic Findings",
    "questionPrompt": "Although Fleming discovered penicillin in 1928, antibiotics ______ millions of lives since then.",
    "options": [
      "have saved",
      "saved",
      "had saved",
      "save"
    ],
    "correctAnswer": "have saved",
    "babyExplanation": "🍼 Nalar Bayi: Penemuan terjadi di tahun 1928 (lampau), tetapi dampaknya terus menyelamatkan nyawa sampai hari ini ('have saved')!",
    "workedExample": {
      "sampleQuestion": "The wheel was invented millennia ago, yet it ______ transport ever since.",
      "sampleAnswer": "has shaped",
      "sampleLogic": "Dampak yang berkelanjutan hingga kini = Present Perfect!"
    }
  },
  {
    "id": "ielts-27",
    "cambridgeUnit": "Unit 7: Present Perfect with 'Just/Already/Yet'",
    "ieltsFocus": "Task Completion",
    "questionPrompt": "The peer-review panel has ______ approved the methodology for the clinical trial.",
    "options": [
      "already",
      "yet",
      "still",
      "since"
    ],
    "correctAnswer": "already",
    "babyExplanation": "🍼 Nalar Bayi: 'Already' ditempatkan di antara 'has' dan V3 untuk menyatakan bahwa persetujuan sudah selesai dilakukan!",
    "workedExample": {
      "sampleQuestion": "The research team has ______ submitted their manuscript.",
      "sampleAnswer": "already",
      "sampleLogic": "has already + V3!"
    }
  },
  {
    "id": "ielts-28",
    "cambridgeUnit": "Unit 8: Number of Times in Research",
    "ieltsFocus": "Frequency of Experiments",
    "questionPrompt": "The experimental procedure ______ three times to ensure scientific validity.",
    "options": [
      "has been repeated",
      "repeated",
      "was repeating",
      "had been repeating"
    ],
    "correctAnswer": "has been repeated",
    "babyExplanation": "🍼 Nalar Bayi: Menyebutkan berapa kali percobaan telah diulang sampai saat ini memakai Present Perfect Passive ('has been repeated')!",
    "workedExample": {
      "sampleQuestion": "The test ______ multiple times with consistent outcomes.",
      "sampleAnswer": "has been conducted",
      "sampleLogic": "Pengulangan uji coba = Present Perfect Passive!"
    }
  },
  {
    "id": "ielts-29",
    "cambridgeUnit": "Unit 9: Unfinished Time Expressions",
    "ieltsFocus": "Current Decade",
    "questionPrompt": "So far this decade, renewable energy investment ______ all prior records.",
    "options": [
      "has surpassed",
      "surpassed",
      "had surpassed",
      "surpasses"
    ],
    "correctAnswer": "has surpassed",
    "babyExplanation": "🍼 Nalar Bayi: Frasa 'So far this decade' (sejauh ini dalam dekade yang belum berakhir) memakai Present Perfect ('has surpassed')!",
    "workedExample": {
      "sampleQuestion": "This year, total production ______ 1 million units.",
      "sampleAnswer": "has exceeded",
      "sampleLogic": "Periode yang masih berjalan = Present Perfect!"
    }
  },
  {
    "id": "ielts-30",
    "cambridgeUnit": "Unit 7: Ever/Never in Academic Inversion",
    "ieltsFocus": "Formal Literature Review",
    "questionPrompt": "Rarely ______ a technological innovation spread as quickly as mobile telecommunications.",
    "options": [
      "has",
      "did",
      "was",
      "is"
    ],
    "correctAnswer": "has",
    "babyExplanation": "🍼 Nalar Bayi: Inversi formal dengan kata negatif di depan ('Rarely has...') menekankan rekor kecepatan penyebaran teknologi!",
    "workedExample": {
      "sampleQuestion": "Seldom ______ an algorithm achieved such high accuracy.",
      "sampleAnswer": "has",
      "sampleLogic": "Rarely / Seldom + has + subjek + V3!"
    }
  },
  {
    "id": "ielts-31",
    "cambridgeUnit": "Unit 10: Passive Voice in Process Tasks",
    "ieltsFocus": "Task 1: Proses Pabrik",
    "questionPrompt": "First, the raw leather ______ and inspected before being cut into shoe patterns.",
    "options": [
      "is sorted",
      "sorts",
      "is sorting",
      "has sorted"
    ],
    "correctAnswer": "is sorted",
    "babyExplanation": "🍼 Nalar Bayi: Dalam IELTS Task 1 Process Diagram, objek tidak menyortir dirinya sendiri melainkan disortir oleh pekerja/mesin = Present Simple Passive ('is sorted')!",
    "workedExample": {
      "sampleQuestion": "Next, the ingredients ______ into a large container.",
      "sampleAnswer": "are mixed",
      "sampleLogic": "Proses tahapan pabrik memakai Passive Voice!"
    }
  },
  {
    "id": "ielts-32",
    "cambridgeUnit": "Unit 10: Passive Voice Past Process",
    "ieltsFocus": "Historical Manufacturing",
    "questionPrompt": "In the 1920s, assembly lines ______ to standardize automobile production.",
    "options": [
      "were introduced",
      "introduced",
      "are introduced",
      "had introduced"
    ],
    "correctAnswer": "were introduced",
    "babyExplanation": "🍼 Nalar Bayi: Jalur perakitan diperkenalkan di masa lampau (1920s) oleh manusia = Past Simple Passive ('were introduced')!",
    "workedExample": {
      "sampleQuestion": "In 1980, personal computers ______ to corporate offices.",
      "sampleAnswer": "were supplied",
      "sampleLogic": "Objek lampau yang dikenai aksi = were/was + V3!"
    }
  },
  {
    "id": "ielts-33",
    "cambridgeUnit": "Unit 11: Impersonal Passive Reporting",
    "ieltsFocus": "Task 2 Academic Claims",
    "questionPrompt": "It ______ widely believed that early childhood education yields lifelong economic advantages.",
    "options": [
      "is",
      "was",
      "has",
      "does"
    ],
    "correctAnswer": "is",
    "babyExplanation": "🍼 Nalar Bayi: Pola baku akademis impersonal (tanpa menyebut 'saya'): 'It is widely believed that...' (Diyakini secara luas bahwa...)!",
    "workedExample": {
      "sampleQuestion": "It ______ commonly assumed that sleep improves cognitive function.",
      "sampleAnswer": "is",
      "sampleLogic": "Pola impersonal = It is + adverb + V3 + that...!"
    }
  },
  {
    "id": "ielts-34",
    "cambridgeUnit": "Unit 11: Passive with Infinitive",
    "ieltsFocus": "Academic Reporting",
    "questionPrompt": "The new solar panel technology is reported ______ energy efficiency by twenty percent.",
    "options": [
      "to increase",
      "increasing",
      "increase",
      "to have increasing"
    ],
    "correctAnswer": "to increase",
    "babyExplanation": "🍼 Nalar Bayi: Pola 'Subject + is reported/claimed/said + to + Infinitive': 'is reported to increase'!",
    "workedExample": {
      "sampleQuestion": "The vaccine is believed ______ long-lasting immunity.",
      "sampleAnswer": "to provide",
      "sampleLogic": "is believed to + V1!"
    }
  },
  {
    "id": "ielts-35",
    "cambridgeUnit": "Unit 10: Modal Verbs in Passive Voice",
    "ieltsFocus": "Policy Recommendations",
    "questionPrompt": "Stricter regulations must ______ to curb industrial effluent discharge into rivers.",
    "options": [
      "be implemented",
      "implement",
      "have implemented",
      "be implementing"
    ],
    "correctAnswer": "be implemented",
    "babyExplanation": "🍼 Nalar Bayi: Rumus Modal Pasif: Modal (must) + be + Verb 3 (implemented) = 'must be implemented' (harus diterapkan)!",
    "workedExample": {
      "sampleQuestion": "Safety protocols should ______ strictly.",
      "sampleAnswer": "be followed",
      "sampleLogic": "Modal pasif = should/must + be + V3!"
    }
  },
  {
    "id": "ielts-36",
    "cambridgeUnit": "Unit 12: Causative Have/Get Something Done",
    "ieltsFocus": "Technical Services",
    "questionPrompt": "Large organizations routinely have their network security ______ by certified ethical hackers.",
    "options": [
      "audited",
      "audit",
      "auditing",
      "to audit"
    ],
    "correctAnswer": "audited",
    "babyExplanation": "🍼 Nalar Bayi: Causative 'Have something done': perusahaan menyuruh ahlinya untuk mengaudit sistem = 'have their network security audited'!",
    "workedExample": {
      "sampleQuestion": "The laboratory had its equipment ______.",
      "sampleAnswer": "calibrated",
      "sampleLogic": "Have + object + V3!"
    }
  },
  {
    "id": "ielts-37",
    "cambridgeUnit": "Unit 10: Passive Agent with 'by'",
    "ieltsFocus": "Identifying the Cause",
    "questionPrompt": "The initial anomaly in server latency was caused ______ a faulty fiber-optic transceiver.",
    "options": [
      "by",
      "with",
      "from",
      "through"
    ],
    "correctAnswer": "by",
    "babyExplanation": "🍼 Nalar Bayi: Dalam kalimat pasif, pelaku penyebab di belakang kata kerja V3 dihubungkan dengan preposisi 'by' (oleh)!",
    "workedExample": {
      "sampleQuestion": "The disruption was triggered ______ a sudden surge in traffic.",
      "sampleAnswer": "by",
      "sampleLogic": "Passive agent = caused by...!"
    }
  },
  {
    "id": "ielts-38",
    "cambridgeUnit": "Unit 11: Reporting Verbs Variety",
    "ieltsFocus": "Formal Academic Style",
    "questionPrompt": "The experimental data ______ that ambient humidity influences drying times.",
    "options": [
      "suggests",
      "is suggesting",
      "was suggested",
      "suggested to"
    ],
    "correctAnswer": "suggests",
    "babyExplanation": "🍼 Nalar Bayi: 'The data suggests that...' adalah frasa akademis standar untuk menyimpulkan indikasi temuan penelitian!",
    "workedExample": {
      "sampleQuestion": "The empirical evidence ______ that carbon taxes reduce emissions.",
      "sampleAnswer": "indicates",
      "sampleLogic": "Data indicates / suggests that...!"
    }
  },
  {
    "id": "ielts-39",
    "cambridgeUnit": "Unit 10: Present Continuous Passive",
    "ieltsFocus": "Ongoing Engineering Work",
    "questionPrompt": "A state-of-the-art supercomputing cluster ______ currently installed on campus.",
    "options": [
      "is being",
      "is",
      "has been",
      "was being"
    ],
    "correctAnswer": "is being",
    "babyExplanation": "🍼 Nalar Bayi: Komputer super saat ini sedang dalam proses dipasang oleh teknisi = Present Continuous Passive: 'is being installed'!",
    "workedExample": {
      "sampleQuestion": "The bridge ______ repaired this month.",
      "sampleAnswer": "is being",
      "sampleLogic": "Sedang diproses saat ini = is being + V3!"
    }
  },
  {
    "id": "ielts-40",
    "cambridgeUnit": "Unit 12: Need + V-ing vs Need to be Done",
    "ieltsFocus": "Passive Meaning",
    "questionPrompt": "The outdated firewall software urgently needs ______ to prevent zero-day exploits.",
    "options": [
      "updating",
      "to update",
      "updated",
      "update"
    ],
    "correctAnswer": "updating",
    "babyExplanation": "🍼 Nalar Bayi: Dalam bahasa Inggris formal, 'needs updating' bermakna pasif yang sama persis dengan 'needs to be updated' (butuh diperbarui)!",
    "workedExample": {
      "sampleQuestion": "The machine parts need ______.",
      "sampleAnswer": "cleaning",
      "sampleLogic": "Need + V-ing bermakna pasif!"
    }
  },
  {
    "id": "ielts-41",
    "cambridgeUnit": "Unit 13: Zero Conditional for Scientific Truths",
    "ieltsFocus": "Scientific Cause-Effect",
    "questionPrompt": "If the temperature inside the reaction vessel rises above 80 degrees, the enzyme ______.",
    "options": [
      "denatures",
      "will denature",
      "denatured",
      "would denature"
    ],
    "correctAnswer": "denatures",
    "babyExplanation": "🍼 Nalar Bayi: Zero conditional (hukum alam pasti): If + Present Simple, [Klausa utama = Present Simple] ('denatures')!",
    "workedExample": {
      "sampleQuestion": "If water freezes, it ______.",
      "sampleAnswer": "expands",
      "sampleLogic": "Hukum fisika pasti = Zero Conditional!"
    }
  },
  {
    "id": "ielts-42",
    "cambridgeUnit": "Unit 13: First Conditional for Real Possibilities",
    "ieltsFocus": "Task 2 Future Proposals",
    "questionPrompt": "If governments invest heavily in public transport, urban traffic congestion ______ substantially.",
    "options": [
      "will decrease",
      "decreases",
      "decreased",
      "would decrease"
    ],
    "correctAnswer": "will decrease",
    "babyExplanation": "🍼 Nalar Bayi: First conditional (rencana realistis masa depan): If + Present Simple, [Klausa utama = will + Verb 1] ('will decrease')!",
    "workedExample": {
      "sampleQuestion": "If companies adopt green practices, emissions ______.",
      "sampleAnswer": "will fall",
      "sampleLogic": "Kemungkinan nyata masa depan = will + V1!"
    }
  },
  {
    "id": "ielts-43",
    "cambridgeUnit": "Unit 14: Second Conditional for Hypothetical Situations",
    "ieltsFocus": "Task 2 Hypothetical Debate",
    "questionPrompt": "If developing nations ______ completely to solar energy tomorrow, fossil fuel demand would collapse.",
    "options": [
      "transitioned",
      "transition",
      "will transition",
      "had transitioned"
    ],
    "correctAnswer": "transitioned",
    "babyExplanation": "🍼 Nalar Bayi: Second conditional (pengandaian tidak nyata saat ini): If + Past Simple ('transitioned'), [Klausa utama = would + Verb 1]!",
    "workedExample": {
      "sampleQuestion": "If all cars ______ electric, urban air would be pristine.",
      "sampleAnswer": "were",
      "sampleLogic": "Second conditional = If + V2, would + V1!"
    }
  },
  {
    "id": "ielts-44",
    "cambridgeUnit": "Unit 14: Were to in Academic Second Conditional",
    "ieltsFocus": "Formal Speculation",
    "questionPrompt": "If the ice sheet ______ melt entirely, global sea levels would rise by several meters.",
    "options": [
      "were to",
      "was to",
      "would",
      "had to"
    ],
    "correctAnswer": "were to",
    "babyExplanation": "🍼 Nalar Bayi: 'If + subject + were to + Verb 1' adalah pengandaian ilmiah formal tingkat tinggi untuk situasi hipotetis ekstrim!",
    "workedExample": {
      "sampleQuestion": "If the volcano ______ erupt, nearby towns would be evacuated.",
      "sampleAnswer": "were to",
      "sampleLogic": "Bentuk pengandaian formal = were to + V1!"
    }
  },
  {
    "id": "ielts-45",
    "cambridgeUnit": "Unit 15: Third Conditional for Past Counterfactuals",
    "ieltsFocus": "Historical Analysis",
    "questionPrompt": "If the backup generator had engaged automatically, the hospital ______ power during the storm.",
    "options": [
      "would not have lost",
      "will not lose",
      "did not lose",
      "would not lose"
    ],
    "correctAnswer": "would not have lost",
    "babyExplanation": "🍼 Nalar Bayi: Third conditional (pengandaian masa lampau yang sudah terjadi sebaliknya): If had + V3, [would have + V3]!",
    "workedExample": {
      "sampleQuestion": "If the engineer had noticed the leak, the disaster ______ avoided.",
      "sampleAnswer": "would have been",
      "sampleLogic": "Pengandaian lampau = would have + V3!"
    }
  },
  {
    "id": "ielts-46",
    "cambridgeUnit": "Unit 15: Mixed Conditionals",
    "ieltsFocus": "Past Cause, Present Effect",
    "questionPrompt": "If the city had invested in flood defenses a decade ago, it ______ much safer today.",
    "options": [
      "would be",
      "will be",
      "would have been",
      "is"
    ],
    "correctAnswer": "would be",
    "babyExplanation": "🍼 Nalar Bayi: Mixed conditional: tindakan lampau (had invested) berpengaruh pada kondisi SAAT INI (today) = 'would be'!",
    "workedExample": {
      "sampleQuestion": "If he had taken the qualification, he ______ a senior engineer now.",
      "sampleAnswer": "would be",
      "sampleLogic": "Sebab lampau, akibat sekarang = would be!"
    }
  },
  {
    "id": "ielts-47",
    "cambridgeUnit": "Unit 13: Unless as Negative Condition",
    "ieltsFocus": "Academic Requirements",
    "questionPrompt": "Industrial emissions will continue to climb ______ strict carbon caps are enforced.",
    "options": [
      "unless",
      "if",
      "provided",
      "as long as"
    ],
    "correctAnswer": "unless",
    "babyExplanation": "🍼 Nalar Bayi: 'Unless' bermakna 'jika tidak' (if not): emisi akan terus naik KECUALI JIKA batasan karbon ditegakkan!",
    "workedExample": {
      "sampleQuestion": "Students cannot pass ______ they complete the laboratory practicals.",
      "sampleAnswer": "unless",
      "sampleLogic": "Unless = kecuali jika!"
    }
  },
  {
    "id": "ielts-48",
    "cambridgeUnit": "Unit 14: Inversion in Conditionals (Had / Were / Should)",
    "ieltsFocus": "Advanced Academic Tone",
    "questionPrompt": "______ the team detected the vulnerability earlier, the security breach could have been averted.",
    "options": [
      "Had",
      "Were",
      "Should",
      "If had"
    ],
    "correctAnswer": "Had",
    "babyExplanation": "🍼 Nalar Bayi: Inversi tanpa kata 'if': 'Had the team detected...' menggantikan 'If the team had detected...'. Sangat disukai penguji IELTS Band 8+!",
    "workedExample": {
      "sampleQuestion": "______ the results proved inconclusive, further testing would be required.",
      "sampleAnswer": "Should",
      "sampleLogic": "Inversi bersyarat formal!"
    }
  },
  {
    "id": "ielts-49",
    "cambridgeUnit": "Unit 14: Provided that / As long as",
    "ieltsFocus": "Stipulating Conditions",
    "questionPrompt": "Autonomous vehicles are remarkably safe, ______ their sensor algorithms are properly calibrated.",
    "options": [
      "provided that",
      "unless",
      "in case",
      "although"
    ],
    "correctAnswer": "provided that",
    "babyExplanation": "🍼 Nalar Bayi: 'Provided that' (asalkan / dengan syarat bahwa) adalah konjungsi syarat formal akademik setara 'if'!",
    "workedExample": {
      "sampleQuestion": "Renewable energy is sustainable, ______ storage infrastructure is maintained.",
      "sampleAnswer": "as long as",
      "sampleLogic": "Provided that = asalkan!"
    }
  },
  {
    "id": "ielts-50",
    "cambridgeUnit": "Unit 15: Wish and If only for Academic Critique",
    "ieltsFocus": "Critiquing Prior Research",
    "questionPrompt": "Many climatologists wish that governments ______ decisive action twenty years ago.",
    "options": [
      "had taken",
      "took",
      "have taken",
      "would take"
    ],
    "correctAnswer": "had taken",
    "babyExplanation": "🍼 Nalar Bayi: Menyesali hal yang tidak terjadi di masa lampau (20 years ago): wish + Past Perfect ('had taken')!",
    "workedExample": {
      "sampleQuestion": "Historians wish that earlier documents ______ preserved.",
      "sampleAnswer": "had been",
      "sampleLogic": "Penyesalan masa lampau = wish + had + V3!"
    }
  },
  {
    "id": "ielts-51",
    "cambridgeUnit": "Unit 16: Academic Hedging with 'May/Might'",
    "ieltsFocus": "Cautious Scientific Tone",
    "questionPrompt": "The preliminary data suggests that inadequate dietary fiber ______ contribute to gastrointestinal disorders.",
    "options": [
      "may",
      "will",
      "must",
      "shall"
    ],
    "correctAnswer": "may",
    "babyExplanation": "🍼 Nalar Bayi: Dalam karya ilmiah IELTS, jangan pernah overclaim (klaim mutlak)! Gunakan modal 'may' atau 'might' untuk merendah hati (hedging)!",
    "workedExample": {
      "sampleQuestion": "The findings ______ indicate a shift in consumer habits.",
      "sampleAnswer": "might",
      "sampleLogic": "Hedging ilmiah yang sopan memakai may / might!"
    }
  },
  {
    "id": "ielts-52",
    "cambridgeUnit": "Unit 16: Must vs Can't for Deduction",
    "ieltsFocus": "Logical Deductions",
    "questionPrompt": "Given that all three sensors recorded identical anomalies, the reading ______ be a mere fluke.",
    "options": [
      "cannot",
      "must not",
      "might",
      "should"
    ],
    "correctAnswer": "cannot",
    "babyExplanation": "🍼 Nalar Bayi: Jika 3 sensor mencatat hal yang sama, secara logika TIDAK MUNGKIN hanya kebetulan = 'cannot be'!",
    "workedExample": {
      "sampleQuestion": "With zero carbon emissions recorded, the vehicle ______ be purely electric.",
      "sampleAnswer": "must",
      "sampleLogic": "Deduksi logis pasti = must!"
    }
  },
  {
    "id": "ielts-53",
    "cambridgeUnit": "Unit 17: Should have + V3 for Unmet Expectations",
    "ieltsFocus": "Evaluating Results",
    "questionPrompt": "The experimental cooling system ______ activated at 50 degrees, but a sensor fault prevented it.",
    "options": [
      "should have",
      "must have",
      "could have",
      "would have"
    ],
    "correctAnswer": "should have",
    "babyExplanation": "🍼 Nalar Bayi: 'Should have + V3' menyatakan seharusnya terjadi sesuai rencana, namun kenyataannya gagal terjadi!",
    "workedExample": {
      "sampleQuestion": "The report ______ submitted by noon yesterday.",
      "sampleAnswer": "should have been",
      "sampleLogic": "Seharusnya sudah selesai kemarin!"
    }
  },
  {
    "id": "ielts-54",
    "cambridgeUnit": "Unit 17: Must have + V3 for Past Deduction",
    "ieltsFocus": "Historical Cause Analysis",
    "questionPrompt": "The sudden population collapse ______ resulted from a combination of severe drought and soil depletion.",
    "options": [
      "must have",
      "should have",
      "can have",
      "had to"
    ],
    "correctAnswer": "must have",
    "babyExplanation": "🍼 Nalar Bayi: Menarik kesimpulan logis yang sangat kuat tentang masa lalu: 'must have resulted' (pasti diakibatkan oleh)!",
    "workedExample": {
      "sampleQuestion": "The network failure ______ been triggered by the storm.",
      "sampleAnswer": "must have",
      "sampleLogic": "Kesimpulan masa lampau yang sangat yakin!"
    }
  },
  {
    "id": "ielts-55",
    "cambridgeUnit": "Unit 18: Can vs Be Able To",
    "ieltsFocus": "Technological Capability",
    "questionPrompt": "Modern quantum processors ______ calculate complex molecular structures in seconds.",
    "options": [
      "are able to",
      "can to",
      "could to",
      "are can"
    ],
    "correctAnswer": "are able to",
    "babyExplanation": "🍼 Nalar Bayi: 'Are able to' menekankan kapasitas kapabilitas khusus yang berhasil dicapai!",
    "workedExample": {
      "sampleQuestion": "The algorithm ______ detect fraudulent transactions in real time.",
      "sampleAnswer": "is able to",
      "sampleLogic": "Kapabilitas kemampuan sistem!"
    }
  },
  {
    "id": "ielts-56",
    "cambridgeUnit": "Unit 18: Obligation and Necessity",
    "ieltsFocus": "Ethical Research Guidelines",
    "questionPrompt": "Researchers ______ disclose all conflicts of interest prior to journal publication.",
    "options": [
      "are required to",
      "must to",
      "ought",
      "need"
    ],
    "correctAnswer": "are required to",
    "babyExplanation": "🍼 Nalar Bayi: Frasa formal keharusan akademik: 'are required to + Verb 1' (diwajibkan untuk mengungkapkan)!",
    "workedExample": {
      "sampleQuestion": "All laboratory personnel ______ wear protective goggles.",
      "sampleAnswer": "are obliged to",
      "sampleLogic": "Kewajiban etika riset!"
    }
  },
  {
    "id": "ielts-57",
    "cambridgeUnit": "Unit 16: Hedging with 'Tends to'",
    "ieltsFocus": "Describing General Patterns",
    "questionPrompt": "Higher educational attainment ______ correlate with increased civic engagement.",
    "options": [
      "tends to",
      "is tending to",
      "must to",
      "tend"
    ],
    "correctAnswer": "tends to",
    "babyExplanation": "🍼 Nalar Bayi: 'Tends to' (cenderung) adalah teknik hedging favorit para akademisi untuk mendeskripsikan tren tanpa memutlakkannya!",
    "workedExample": {
      "sampleQuestion": "Economic prosperity ______ reduce birth rates.",
      "sampleAnswer": "tends to",
      "sampleLogic": "Cenderung terjadi = tends to + V1!"
    }
  },
  {
    "id": "ielts-58",
    "cambridgeUnit": "Unit 17: Could have + V3 for Lost Opportunity",
    "ieltsFocus": "Critiquing Policy Delays",
    "questionPrompt": "The ecological catastrophe ______ been prevented if early warnings had been heeded.",
    "options": [
      "could have",
      "must have",
      "should",
      "will have"
    ],
    "correctAnswer": "could have",
    "babyExplanation": "🍼 Nalar Bayi: 'Could have been prevented' (sebenarnya bisa dicegah di masa lampau jika peringatan diindahkan)!",
    "workedExample": {
      "sampleQuestion": "The loss of data ______ been avoided with daily backups.",
      "sampleAnswer": "could have",
      "sampleLogic": "Bisa saja dicegah (kemungkinan lampau)!"
    }
  },
  {
    "id": "ielts-59",
    "cambridgeUnit": "Unit 16: Modal Adverbs of Probability",
    "ieltsFocus": "Nuanced Claims",
    "questionPrompt": "These experimental outcomes ______ indicate a breakthrough in superconductor physics.",
    "options": [
      "arguably",
      "mustly",
      "sure",
      "definite"
    ],
    "correctAnswer": "arguably",
    "babyExplanation": "🍼 Nalar Bayi: 'Arguably' (bisa dibilang / dapat diargumentasikan) adalah adverbia hedging akademik tingkat Band 8.5!",
    "workedExample": {
      "sampleQuestion": "The telescope is ______ the most sophisticated instrument ever built.",
      "sampleAnswer": "arguably",
      "sampleLogic": "Kata keterangan hedging!"
    }
  },
  {
    "id": "ielts-60",
    "cambridgeUnit": "Unit 18: Prohibition with 'Must not'",
    "ieltsFocus": "Laboratory Safety",
    "questionPrompt": "Unauthorized personnel ______ access the high-voltage server room under any circumstance.",
    "options": [
      "must not",
      "need not",
      "might not",
      "could not to"
    ],
    "correctAnswer": "must not",
    "babyExplanation": "🍼 Nalar Bayi: Larangan keras mutlak demi keselamatan: 'must not' (dilarang keras)! Berbeda dengan need not (tidak perlu)!",
    "workedExample": {
      "sampleQuestion": "Chemical waste ______ be disposed of in standard municipal drains.",
      "sampleAnswer": "must not",
      "sampleLogic": "Larangan keras mutlak!"
    }
  },
  {
    "id": "ielts-61",
    "cambridgeUnit": "Unit 19: Defining Relative Clauses with 'Which/That'",
    "ieltsFocus": "Technical Definitions",
    "questionPrompt": "A firewall is a network security system ______ monitors incoming and outgoing traffic.",
    "options": [
      "that",
      "who",
      "whom",
      "where"
    ],
    "correctAnswer": "that",
    "babyExplanation": "🍼 Nalar Bayi: Untuk mendefinisikan benda sistem komputer tanpa koma (defining clause), gunakan 'that' atau 'which'!",
    "workedExample": {
      "sampleQuestion": "A router is a device ______ forwards data packets.",
      "sampleAnswer": "that",
      "sampleLogic": "Kata ganti benda = that / which!"
    }
  },
  {
    "id": "ielts-62",
    "cambridgeUnit": "Unit 19: Non-defining Relative Clause with 'Which'",
    "ieltsFocus": "Task 1 Additional Commentary",
    "questionPrompt": "Solar power generation surged by 50 percent, ______ surprised many energy analysts.",
    "options": [
      "which",
      "that",
      "what",
      "where"
    ],
    "correctAnswer": "which",
    "babyExplanation": "🍼 Nalar Bayi: Setelah tanda koma, untuk merujuk pada SELURUH kalimat sebelumnya, WAJIB memakai 'which' (TIDAK BOLEH 'that')!",
    "workedExample": {
      "sampleQuestion": "Production peaked in August, ______ was unprecedented.",
      "sampleAnswer": "which",
      "sampleLogic": "Setelah tanda koma = which!"
    }
  },
  {
    "id": "ielts-63",
    "cambridgeUnit": "Unit 20: Preposition + Relative Pronoun",
    "ieltsFocus": "Formal Academic Precision",
    "questionPrompt": "The control framework ______ the factory operates was updated last year.",
    "options": [
      "under which",
      "which",
      "whereby that",
      "in that"
    ],
    "correctAnswer": "under which",
    "babyExplanation": "🍼 Nalar Bayi: Bahasa Inggris formal tingkat tinggi: preposisi ditaruh di depan relative pronoun ('under which the factory operates')!",
    "workedExample": {
      "sampleQuestion": "The principles ______ the theorem is based are sound.",
      "sampleAnswer": "upon which",
      "sampleLogic": "Preposition + which!"
    }
  },
  {
    "id": "ielts-64",
    "cambridgeUnit": "Unit 20: Relative Clauses with 'Whereby'",
    "ieltsFocus": "Explaining Mechanisms",
    "questionPrompt": "The algorithm employs a voting mechanism ______ consensus is reached among distributed nodes.",
    "options": [
      "whereby",
      "whereas",
      "wherever",
      "wherein that"
    ],
    "correctAnswer": "whereby",
    "babyExplanation": "🍼 Nalar Bayi: 'Whereby' bermakna 'yang melaluinya / dengan cara mana' mekanisme sistem tersebut bekerja!",
    "workedExample": {
      "sampleQuestion": "The plant has a cooling system ______ temperature is regulated.",
      "sampleAnswer": "whereby",
      "sampleLogic": "Whereby = dengan cara mana!"
    }
  },
  {
    "id": "ielts-65",
    "cambridgeUnit": "Unit 21: Present Participle Clauses (-ing)",
    "ieltsFocus": "Synthesizing Sentences",
    "questionPrompt": "The company automated its logistics center, ______ operating expenses by 30 percent.",
    "options": [
      "reducing",
      "reduced",
      "reduces",
      "to reduce"
    ],
    "correctAnswer": "reducing",
    "babyExplanation": "🍼 Nalar Bayi: Participle clause (-ing) menyatakan hasil akibat langsung dari aksi sebelumnya: 'reducing operating expenses'!",
    "workedExample": {
      "sampleQuestion": "The law restricted carbon emissions, ______ cleaner urban air.",
      "sampleAnswer": "fostering",
      "sampleLogic": "Aksi berakibat = V-ing participle!"
    }
  },
  {
    "id": "ielts-66",
    "cambridgeUnit": "Unit 21: Past Participle Clauses (-ed)",
    "ieltsFocus": "Passive Reduction",
    "questionPrompt": "______ under extreme pressures, diamond develops its characteristic tetrahedral crystal lattice.",
    "options": [
      "Formed",
      "Forming",
      "Having formed",
      "To form"
    ],
    "correctAnswer": "Formed",
    "babyExplanation": "🍼 Nalar Bayi: Inti intinya adalah 'Because it is formed under extreme pressures': diringkas pasif menjadi 'Formed under extreme pressures'!",
    "workedExample": {
      "sampleQuestion": "______ at high speeds, the turbine produces immense electricity.",
      "sampleAnswer": "Driven",
      "sampleLogic": "Passive participle clause = V3!"
    }
  },
  {
    "id": "ielts-67",
    "cambridgeUnit": "Unit 19: Whose for Possession in Non-Human Contexts",
    "ieltsFocus": "Describing Entities",
    "questionPrompt": "Countries ______ reliance on fossil fuels is high face severe transition costs.",
    "options": [
      "whose",
      "which",
      "where",
      "that"
    ],
    "correctAnswer": "whose",
    "babyExplanation": "🍼 Nalar Bayi: Kata ganti kepemilikan 'whose' bisa dipakai untuk negara atau organisasi: 'Countries whose reliance...' (Negara yang ketergantungannya...)!",
    "workedExample": {
      "sampleQuestion": "Enterprises ______ data security is compromised suffer reputational harm.",
      "sampleAnswer": "whose",
      "sampleLogic": "Kepemilikan abstrak = whose!"
    }
  },
  {
    "id": "ielts-68",
    "cambridgeUnit": "Unit 20: Reduced Relative Clauses",
    "ieltsFocus": "Task 1 Concise Descriptions",
    "questionPrompt": "The volume of wastewater ______ into coastal waters declined steadily after 2015.",
    "options": [
      "discharged",
      "discharging",
      "was discharged",
      "which discharged"
    ],
    "correctAnswer": "discharged",
    "babyExplanation": "🍼 Nalar Bayi: Pemangkasan frasa 'which was discharged' menjadi kata sifat V3 ringkas: 'wastewater discharged into coastal waters'!",
    "workedExample": {
      "sampleQuestion": "The energy ______ by wind farms met national targets.",
      "sampleAnswer": "generated",
      "sampleLogic": "which was generated -> generated!"
    }
  },
  {
    "id": "ielts-69",
    "cambridgeUnit": "Unit 21: Having + V3 for Completed Prior Action",
    "ieltsFocus": "Sequencing Academic Steps",
    "questionPrompt": "______ completed the clinical trial, the pharmacologists published their findings in a peer-reviewed journal.",
    "options": [
      "Having",
      "Being",
      "After had",
      "To have"
    ],
    "correctAnswer": "Having",
    "babyExplanation": "🍼 Nalar Bayi: 'Having + V3' (Having completed...) menekankan bahwa langkah riset pertama sudah selesai 100% sebelum langkah kedua dimulai!",
    "workedExample": {
      "sampleQuestion": "______ analyzed the data, the committee issued its verdict.",
      "sampleAnswer": "Having",
      "sampleLogic": "Having + V3 = Setelah selesai melakukan...!"
    }
  },
  {
    "id": "ielts-70",
    "cambridgeUnit": "Unit 19: Where vs In which",
    "ieltsFocus": "Spatial Contexts",
    "questionPrompt": "The university developed an incubator laboratory ______ startups can test prototype robotics.",
    "options": [
      "where",
      "which",
      "what",
      "whom"
    ],
    "correctAnswer": "where",
    "babyExplanation": "🍼 Nalar Bayi: Untuk merujuk pada tempat fisik di mana aktivitas dilakukan, gunakan relative adverb 'where' (atau 'in which')!",
    "workedExample": {
      "sampleQuestion": "This is the facility ______ solar panels are manufactured.",
      "sampleAnswer": "where",
      "sampleLogic": "Tempat aktivitas = where!"
    }
  },
  {
    "id": "ielts-71",
    "cambridgeUnit": "Unit 22: Double Comparatives (The..., the...)",
    "ieltsFocus": "Task 2 Academic Cohesion",
    "questionPrompt": "The ______ efficient an industrial engine is, the ______ fuel it consumes per kilometer.",
    "options": [
      "more / less",
      "most / least",
      "more / lesser",
      "much / little"
    ],
    "correctAnswer": "more / less",
    "babyExplanation": "🍼 Nalar Bayi: Pola 'The more..., the less...' (Makin efisien mesinnya, makin sedikit bahan bakar yang dihabiskannya)!",
    "workedExample": {
      "sampleQuestion": "The ______ we educate citizens, the ______ crime rates become.",
      "sampleAnswer": "more / lower",
      "sampleLogic": "The + komparatif, the + komparatif!"
    }
  },
  {
    "id": "ielts-72",
    "cambridgeUnit": "Unit 22: Quantifying Differences in Task 1",
    "ieltsFocus": "Graph Gap Measurement",
    "questionPrompt": "Car production in Germany was ______ higher than in the United Kingdom throughout the decade.",
    "options": [
      "significantly",
      "significant",
      "more significant",
      "most"
    ],
    "correctAnswer": "significantly",
    "babyExplanation": "🍼 Nalar Bayi: Dalam IELTS Task 1, perkuat perbandingan dengan adverbia pengukur: 'significantly higher' (jauh lebih tinggi secara signifikan)!",
    "workedExample": {
      "sampleQuestion": "Sales in June were ______ lower than in January.",
      "sampleAnswer": "marginally",
      "sampleLogic": "Adverbia + higher/lower!"
    }
  },
  {
    "id": "ielts-73",
    "cambridgeUnit": "Unit 23: Superlatives with In vs Of",
    "ieltsFocus": "Selecting Categories",
    "questionPrompt": "Hydroelectric power was the most widely used renewable energy source ______ South America.",
    "options": [
      "in",
      "of",
      "from",
      "at"
    ],
    "correctAnswer": "in",
    "babyExplanation": "🍼 Nalar Bayi: Untuk lokasi geografis tunggal (benua, negara, kota, dunia), gunakan 'in' ('in South America', 'in the world')!",
    "workedExample": {
      "sampleQuestion": "Tokyo is the largest metropolitan area ______ the globe.",
      "sampleAnswer": "on",
      "sampleLogic": "In the world / in South America!"
    }
  },
  {
    "id": "ielts-74",
    "cambridgeUnit": "Unit 22: As... as Comparisons of Equality",
    "ieltsFocus": "Task 1 Equivalent Figures",
    "questionPrompt": "The consumption of coal in 2010 was almost as high ______ that in 2000.",
    "options": [
      "as",
      "than",
      "like",
      "so"
    ],
    "correctAnswer": "as",
    "babyExplanation": "🍼 Nalar Bayi: Pasangan baku perbandingan setara: 'as + adjective + as' ('as high as that in 2000')!",
    "workedExample": {
      "sampleQuestion": "Production of shoes was twice as large ______ last quarter.",
      "sampleAnswer": "as",
      "sampleLogic": "as high as / as large as!"
    }
  },
  {
    "id": "ielts-75",
    "cambridgeUnit": "Unit 22: Multipliers in Task 1",
    "ieltsFocus": "Ratio Expressions",
    "questionPrompt": "In 2021, wind power output was ______ that of geothermal power.",
    "options": [
      "three times",
      "three times more than",
      "three fold of",
      "three time"
    ],
    "correctAnswer": "three times",
    "babyExplanation": "🍼 Nalar Bayi: Rumus penggandaan rasio IELTS: 'three times that of...' (tiga kali lipat dari angka geothermal)!",
    "workedExample": {
      "sampleQuestion": "Budget allocation was ______ that of previous years.",
      "sampleAnswer": "double",
      "sampleLogic": "three times that of...!"
    }
  },
  {
    "id": "ielts-76",
    "cambridgeUnit": "Unit 23: One of the + Plural Noun",
    "ieltsFocus": "Academic Prominence",
    "questionPrompt": "Cybersecurity is widely recognized as one of the most critical ______ facing modern enterprises.",
    "options": [
      "challenges",
      "challenge",
      "challenging",
      "of challenge"
    ],
    "correctAnswer": "challenges",
    "babyExplanation": "🍼 Nalar Bayi: Pola mutlak: 'One of the most + Adjective + KATA BENDA JAMAK' ('challenges' dengan akhiran s)!",
    "workedExample": {
      "sampleQuestion": "Solar power is one of the cleanest ______ available.",
      "sampleAnswer": "technologies",
      "sampleLogic": "One of the most ... + jamak!"
    }
  },
  {
    "id": "ielts-77",
    "cambridgeUnit": "Unit 22: Compared with vs Compared to",
    "ieltsFocus": "Statistical Benchmarking",
    "questionPrompt": "Shoe sales increased by 15 percent in the third quarter ______ with the same period last year.",
    "options": [
      "compared",
      "comparing",
      "in compare",
      "compare"
    ],
    "correctAnswer": "compared",
    "babyExplanation": "🍼 Nalar Bayi: Frasa pembanding statistik resmi IELTS Task 1: 'compared with / compared to'!",
    "workedExample": {
      "sampleQuestion": "Profits grew by 8% ______ to Q1 figures.",
      "sampleAnswer": "compared",
      "sampleLogic": "compared with / to!"
    }
  },
  {
    "id": "ielts-78",
    "cambridgeUnit": "Unit 23: By far the + Superlative",
    "ieltsFocus": "Emphasizing Supremacy",
    "questionPrompt": "Fossil fuels remained by far ______ dominant contributor to global electricity generation.",
    "options": [
      "the most",
      "most",
      "the more",
      "a most"
    ],
    "correctAnswer": "the most",
    "babyExplanation": "🍼 Nalar Bayi: 'By far the most dominant' berarti mendominasi dengan telak jauh melampaui lawan-lawannya!",
    "workedExample": {
      "sampleQuestion": "China was by far ______ producer of photovoltaic cells.",
      "sampleAnswer": "the largest",
      "sampleLogic": "By far the largest / the most...!"
    }
  },
  {
    "id": "ielts-79",
    "cambridgeUnit": "Unit 22: Superior to / Inferior to (Not 'than')",
    "ieltsFocus": "Comparative Adjectives",
    "questionPrompt": "The tensile strength of modern carbon fiber is distinctly superior ______ conventional steel.",
    "options": [
      "to",
      "than",
      "from",
      "as"
    ],
    "correctAnswer": "to",
    "babyExplanation": "🍼 Nalar Bayi: Jebakan grammar: kata 'superior', 'inferior', 'prior' SELALU berpasangan dengan 'to', BUKAN 'than'!",
    "workedExample": {
      "sampleQuestion": "The new algorithm is far superior ______ the legacy program.",
      "sampleAnswer": "to",
      "sampleLogic": "Superior to, bukan superior than!"
    }
  },
  {
    "id": "ielts-80",
    "cambridgeUnit": "Unit 22: In Contrast to / While Contrast",
    "ieltsFocus": "Graph Divergence",
    "questionPrompt": "In contrast to European markets, ______ consumer spending fell, Asian retail sales surged.",
    "options": [
      "where",
      "which",
      "that",
      "when"
    ],
    "correctAnswer": "where",
    "babyExplanation": "🍼 Nalar Bayi: 'In contrast to European markets, where consumer spending fell...' (Berbeda dengan pasar Eropa, di mana belanja konsumen turun)!",
    "workedExample": {
      "sampleQuestion": "In contrast to rural areas, ______ infrastructure is scarce, cities thrive.",
      "sampleAnswer": "where",
      "sampleLogic": "In contrast to [lokasi], where...!"
    }
  },
  {
    "id": "ielts-81",
    "cambridgeUnit": "Unit 24: Although vs Despite",
    "ieltsFocus": "Concession Structures",
    "questionPrompt": "______ substantial investments were made in green infrastructure, carbon neutrality remained elusive.",
    "options": [
      "Although",
      "Despite",
      "In spite of",
      "Regardless"
    ],
    "correctAnswer": "Although",
    "babyExplanation": "🍼 Nalar Bayi: 'Although' diikuti oleh Kalimat Utuh (Subjek + Kata Kerja: investments were made). Sedangkan Despite diikuti kata benda!",
    "workedExample": {
      "sampleQuestion": "______ it rained heavily, the football match continued.",
      "sampleAnswer": "Although",
      "sampleLogic": "Although + klausa utuh!"
    }
  },
  {
    "id": "ielts-82",
    "cambridgeUnit": "Unit 24: Despite + Noun Phrase",
    "ieltsFocus": "Task 2 Counterargument",
    "questionPrompt": "______ significant economic growth, income disparity in urban centers widened steadily.",
    "options": [
      "Despite",
      "Although",
      "Even though",
      "Whereas"
    ],
    "correctAnswer": "Despite",
    "babyExplanation": "🍼 Nalar Bayi: 'significant economic growth' adalah frasa kata benda (tanpa kata kerja finite), jadi memakai 'Despite' (atau In spite of)!",
    "workedExample": {
      "sampleQuestion": "______ the harsh weather, the research team completed their fieldwork.",
      "sampleAnswer": "Despite",
      "sampleLogic": "Despite + noun phrase!"
    }
  },
  {
    "id": "ielts-83",
    "cambridgeUnit": "Unit 25: Consequently / As a result",
    "ieltsFocus": "Expressing Consequences",
    "questionPrompt": "Server workloads exceeded capacity; ______, the database experienced unexpected downtime.",
    "options": [
      "consequently",
      "whereas",
      "although",
      "nevertheless"
    ],
    "correctAnswer": "consequently",
    "babyExplanation": "🍼 Nalar Bayi: Beban kerja melebihi kapasitas; KONSEKUENSINYA / AKIBATNYA ('consequently'), database mengalami downtime!",
    "workedExample": {
      "sampleQuestion": "Sales plummeted; ______, the division was restructured.",
      "sampleAnswer": "as a result",
      "sampleLogic": "Penyebab -> akibat = consequently!"
    }
  },
  {
    "id": "ielts-84",
    "cambridgeUnit": "Unit 25: Due to vs Because of",
    "ieltsFocus": "Causal Prepositions",
    "questionPrompt": "The delay in production was ______ to an unexpected breakdown in the automated conveyor belt.",
    "options": [
      "due",
      "because",
      "owing",
      "caused"
    ],
    "correctAnswer": "due",
    "babyExplanation": "🍼 Nalar Bayi: Pasangan kata 'was due to' (disebabkan oleh) setelah to be adalah predikat baku!",
    "workedExample": {
      "sampleQuestion": "The flight cancellation was ______ to thick fog.",
      "sampleAnswer": "due",
      "sampleLogic": "was due to...!"
    }
  },
  {
    "id": "ielts-85",
    "cambridgeUnit": "Unit 24: Whereas / While for Direct Contrast",
    "ieltsFocus": "Task 1 Comparing Two Groups",
    "questionPrompt": "The percentage of urban dwellers rose to 70%, ______ rural populations contracted to 30%.",
    "options": [
      "whereas",
      "despite",
      "because",
      "due to"
    ],
    "correctAnswer": "whereas",
    "babyExplanation": "🍼 Nalar Bayi: 'Whereas' (sedangkan) adalah konjungsi terbaik IELTS Task 1 untuk memperbandingkan dua data kontras secara anggun!",
    "workedExample": {
      "sampleQuestion": "Exports of shoes grew by 10%, ______ garment exports remained flat.",
      "sampleAnswer": "while",
      "sampleLogic": "Whereas / While = sedangkan!"
    }
  },
  {
    "id": "ielts-86",
    "cambridgeUnit": "Unit 25: Furthermore / In addition",
    "ieltsFocus": "Adding Academic Arguments",
    "questionPrompt": "Electric vehicles produce zero tailpipe emissions. ______, their operational maintenance costs are significantly lower.",
    "options": [
      "Furthermore",
      "However",
      "Nonetheless",
      "Otherwise"
    ],
    "correctAnswer": "Furthermore",
    "babyExplanation": "🍼 Nalar Bayi: 'Furthermore' (Selain itu / Lebih dari itu) digunakan untuk menambahkan poin pendukung kedua yang searah!",
    "workedExample": {
      "sampleQuestion": "Exercise enhances cardiovascular health. ______, it boosts mental clarity.",
      "sampleAnswer": "In addition",
      "sampleLogic": "Furthermore / In addition = menambah argumen!"
    }
  },
  {
    "id": "ielts-87",
    "cambridgeUnit": "Unit 24: Nevertheless / However",
    "ieltsFocus": "Contrasting Ideas",
    "questionPrompt": "The initial trials yielded promising data; ______, long-term clinical verification remains necessary.",
    "options": [
      "nevertheless",
      "furthermore",
      "therefore",
      "similarly"
    ],
    "correctAnswer": "nevertheless",
    "babyExplanation": "🍼 Nalar Bayi: Hasil awal menjanjikan, NAMUN DEMIKIAN ('nevertheless'), pengujian jangka panjang tetap wajib dilakukan!",
    "workedExample": {
      "sampleQuestion": "The technology is advanced; ______, adoption costs remain prohibitive.",
      "sampleAnswer": "however",
      "sampleLogic": "Pembalikan ide = nevertheless!"
    }
  },
  {
    "id": "ielts-88",
    "cambridgeUnit": "Unit 25: Leading to / Resulting in",
    "ieltsFocus": "Participle Consequence",
    "questionPrompt": "The storm damaged primary power lines, ______ widespread blackouts across the industrial zone.",
    "options": [
      "leading to",
      "leads to",
      "led to that",
      "because of"
    ],
    "correctAnswer": "leading to",
    "babyExplanation": "🍼 Nalar Bayi: 'leading to + noun' atau 'resulting in + noun' merangkai akibat langsung secara mengalir tanpa kalimat baru!",
    "workedExample": {
      "sampleQuestion": "High inflation eroded purchasing power, ______ reduced consumer spending.",
      "sampleAnswer": "resulting in",
      "sampleLogic": "leading to / resulting in!"
    }
  },
  {
    "id": "ielts-89",
    "cambridgeUnit": "Unit 24: On the other hand",
    "ieltsFocus": "Dual Perspectives in Task 2",
    "questionPrompt": "Automation accelerates assembly speed; on the other ______, it displaces manual manufacturing jobs.",
    "options": [
      "hand",
      "side",
      "way",
      "view"
    ],
    "correctAnswer": "hand",
    "babyExplanation": "🍼 Nalar Bayi: Idiom akademik baku penimbang dua sisi masalah: 'on the one hand..., on the other hand...'!",
    "workedExample": {
      "sampleQuestion": "Nuclear energy is low-carbon; on the other ______, waste disposal is hazardous.",
      "sampleAnswer": "hand",
      "sampleLogic": "on the other hand!"
    }
  },
  {
    "id": "ielts-90",
    "cambridgeUnit": "Unit 25: Thereby + V-ing",
    "ieltsFocus": "Formal Manner of Result",
    "questionPrompt": "The software compresses image assets, ______ reducing mobile data consumption.",
    "options": [
      "thereby",
      "whereas",
      "nonetheless",
      "henceforth"
    ],
    "correctAnswer": "thereby",
    "babyExplanation": "🍼 Nalar Bayi: 'Thereby + V-ing' (dengan demikian menghasilkan...) adalah kata hubung tingkat Band 9 untuk menjelaskan cara kerja dan hasilnya!",
    "workedExample": {
      "sampleQuestion": "The policy encourages cycling, ______ mitigating urban air pollution.",
      "sampleAnswer": "thereby",
      "sampleLogic": "thereby + V-ing!"
    }
  },
  {
    "id": "ielts-91",
    "cambridgeUnit": "Academic Style: Nominalisation",
    "ieltsFocus": "Transforming Verbs to Nouns",
    "questionPrompt": "The rapid ______ of urban infrastructure strained municipal municipal budgets.",
    "options": [
      "expansion",
      "expand",
      "expanding",
      "expanded"
    ],
    "correctAnswer": "expansion",
    "babyExplanation": "🍼 Nalar Bayi: Nominalisation (mengubah kata kerja 'expand' menjadi kata benda 'expansion') membuat tulisan kamu berbobot resmi akademik!",
    "workedExample": {
      "sampleQuestion": "The ______ of computing power revolutionized data science.",
      "sampleAnswer": "growth",
      "sampleLogic": "Kata kerja diubah jadi kata benda = Nominalisation!"
    }
  },
  {
    "id": "ielts-92",
    "cambridgeUnit": "Academic Style: Negative Inversion with 'Not only'",
    "ieltsFocus": "Emphasis in Task 2",
    "questionPrompt": "Not only ______ renewable power reduce carbon footprints, but it also creates sustainable employment.",
    "options": [
      "does",
      "is",
      "did",
      "has"
    ],
    "correctAnswer": "does",
    "babyExplanation": "🍼 Nalar Bayi: Inversi 'Not only does + Subjek + Verb 1': susunan kata dibalik seperti kalimat tanya untuk efek penekanan kuat!",
    "workedExample": {
      "sampleQuestion": "Not only ______ automation increase precision, but it also saves time.",
      "sampleAnswer": "does",
      "sampleLogic": "Not only does / did + subjek + V1!"
    }
  },
  {
    "id": "ielts-93",
    "cambridgeUnit": "Academic Style: Little did they know Inversion",
    "ieltsFocus": "Historical Narrative",
    "questionPrompt": "Little ______ the initial computer engineers realize how profoundly the internet would reshape society.",
    "options": [
      "did",
      "had",
      "were",
      "would"
    ],
    "correctAnswer": "did",
    "babyExplanation": "🍼 Nalar Bayi: Inversi 'Little did they realize...' (Sama sekali mereka tidak menyadari betapa hebat dampaknya)!",
    "workedExample": {
      "sampleQuestion": "Little ______ the researchers suspect that the compound was toxic.",
      "sampleAnswer": "did",
      "sampleLogic": "Little did + subjek + V1!"
    }
  },
  {
    "id": "ielts-94",
    "cambridgeUnit": "Academic Style: Impersonal It is argued",
    "ieltsFocus": "Task 2 Balanced Introduction",
    "questionPrompt": "It is often ______ that technological progress inevitably leads to cultural homogenization.",
    "options": [
      "argued",
      "arguing",
      "argue",
      "to argue"
    ],
    "correctAnswer": "argued",
    "babyExplanation": "🍼 Nalar Bayi: Kalimat pengantar esai IELTS Task 2 yang sangat elegan: 'It is often argued that...' (Sering kali diargumentasikan bahwa...)!",
    "workedExample": {
      "sampleQuestion": "It is widely ______ that clean water is a fundamental human right.",
      "sampleAnswer": "acknowledged",
      "sampleLogic": "It is often argued/claimed that...!"
    }
  },
  {
    "id": "ielts-95",
    "cambridgeUnit": "Academic Style: Academic Collocation with 'Role'",
    "ieltsFocus": "Task 2 Essays",
    "questionPrompt": "Technological literacy plays a ______ role in modern workforce adaptability.",
    "options": [
      "pivotal",
      "pivot",
      "pivoting",
      "pivoted"
    ],
    "correctAnswer": "pivotal",
    "babyExplanation": "🍼 Nalar Bayi: Pasangan kata (collocation) emas dalam esai akademik: 'plays a pivotal / crucial / vital role' (memainkan peran penting)! Band 8.5!",
    "workedExample": {
      "sampleQuestion": "Education plays an ______ role in social mobility.",
      "sampleAnswer": "essential",
      "sampleLogic": "plays a pivotal / essential role!"
    }
  },
  {
    "id": "ielts-96",
    "cambridgeUnit": "Academic Style: Academic Collocation with 'Measure'",
    "ieltsFocus": "Government Action",
    "questionPrompt": "Municipal councils should take immediate ______ to reduce single-use plastic waste.",
    "options": [
      "measures",
      "acts",
      "measuring",
      "measurements"
    ],
    "correctAnswer": "measures",
    "babyExplanation": "🍼 Nalar Bayi: Pasangan kata baku: 'take immediate measures' atau 'take steps' (mengambil langkah/tindakan nyata)!",
    "workedExample": {
      "sampleQuestion": "Authorities must take stern ______ against illegal logging.",
      "sampleAnswer": "actions",
      "sampleLogic": "take measures / steps / actions!"
    }
  },
  {
    "id": "ielts-97",
    "cambridgeUnit": "Academic Style: Degree of Likelihood with 'It is likely that'",
    "ieltsFocus": "Hedging Probability",
    "questionPrompt": "Given current investment trajectories, it is highly ______ that solar energy will dominate by 2040.",
    "options": [
      "probable",
      "probably",
      "probability",
      "probabling"
    ],
    "correctAnswer": "probable",
    "babyExplanation": "🍼 Nalar Bayi: Pola 'It is highly probable / likely that...' (Sangat besar kemungkinannya bahwa...)!",
    "workedExample": {
      "sampleQuestion": "It is extremely ______ that electric vehicles will replace petrol cars.",
      "sampleAnswer": "likely",
      "sampleLogic": "It is highly probable / likely that...!"
    }
  },
  {
    "id": "ielts-98",
    "cambridgeUnit": "Academic Style: Under no circumstances Inversion",
    "ieltsFocus": "Strict Protocols",
    "questionPrompt": "Under no circumstances ______ confidential employee database records be shared with third parties.",
    "options": [
      "should",
      "does",
      "are",
      "have"
    ],
    "correctAnswer": "should",
    "babyExplanation": "🍼 Nalar Bayi: Inversi 'Under no circumstances should... be shared' (Dalam keadaan bagaimanapun tidak boleh dibagikan)!",
    "workedExample": {
      "sampleQuestion": "Under no circumstances ______ safety protocols be ignored.",
      "sampleAnswer": "must",
      "sampleLogic": "Under no circumstances + modal + subjek!"
    }
  },
  {
    "id": "ielts-99",
    "cambridgeUnit": "Academic Style: To what extent",
    "ieltsFocus": "Addressing Essay Prompt",
    "questionPrompt": "The primary debate centers on the ______ to which governments should regulate artificial intelligence.",
    "options": [
      "extent",
      "extend",
      "extension",
      "extensively"
    ],
    "correctAnswer": "extent",
    "babyExplanation": "🍼 Nalar Bayi: Frasa akademik kunci IELTS: 'the extent to which...' (sejauh mana batasan di mana pemerintah harus mengatur AI)!",
    "workedExample": {
      "sampleQuestion": "We must evaluate the degree ______ which climate policies succeed.",
      "sampleAnswer": "to",
      "sampleLogic": "the extent to which...!"
    }
  },
  {
    "id": "ielts-100",
    "cambridgeUnit": "Academic Style: In conclusion / To synthesize",
    "ieltsFocus": "Task 2 Concluding Paragraph",
    "questionPrompt": "In conclusion, although automation carries transitional challenges, its economic benefits are ______ profound.",
    "options": [
      "undeniably",
      "undeniable",
      "deniably",
      "denying"
    ],
    "correctAnswer": "undeniably",
    "babyExplanation": "🍼 Nalar Bayi: Adverbia penguat simpulan esai akhir: 'undeniably profound' (tak terbantahkan lagi sangat mendalam dampaknya)! Band 9!",
    "workedExample": {
      "sampleQuestion": "In conclusion, the advantages of renewable power are ______ compelling.",
      "sampleAnswer": "overwhelmingly",
      "sampleLogic": "Simpulan akhir esai yang mantap!"
    }
  }
];

// ================= MASTER TOEFL iBT BEASISWA S2 (100 SOAL BUILDING SKILLS) =================
const toeflIbtBuildingSkills = [
  {
    "id": "ibt-1",
    "type": "reading",
    "skillCategory": "Vocabulary in Context",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 1 (Vocabulary)",
    "academicTopic": "Evolutionary Biology",
    "passageSnippet": "Many desert succulents exhibit dormant metabolic phases during severe arid spells. This adaptive latency enables them to survive prolonged droughts.",
    "questionPrompt": "The word 'dormant' in the passage is closest in meaning to:",
    "options": [
      "inactive",
      "flourishing",
      "hazardous",
      "visible"
    ],
    "correctAnswer": "inactive",
    "babyExplanation": "🍼 Nalar Bayi: 'Dormant' berasal dari kata Latin tidur/istirahat (seperti gunung berapi tidur). Tanaman menghentikan aktivitas sementara saat kemarau panjang, jadi artinya 'inactive' (tidak aktif sementara)!",
    "workedExample": {
      "modelPrompt": "The seed remains dormant until spring rainfall.",
      "correctAnswer": "inactive",
      "babyLogic": "Biji tidur / tidak aktif menunggu hujan."
    },
    "highlightWord": "dormant"
  },
  {
    "id": "ibt-2",
    "type": "reading",
    "skillCategory": "Vocabulary in Context",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 1 (Vocabulary)",
    "academicTopic": "Glaciology & Climate",
    "passageSnippet": "The relentless advance of polar ice sheets caused profound alterations in terrestrial topography.",
    "questionPrompt": "The word 'relentless' in the passage is closest in meaning to:",
    "options": [
      "continuous and unyielding",
      "temporary",
      "gradual",
      "peaceful"
    ],
    "correctAnswer": "continuous and unyielding",
    "babyExplanation": "🍼 Nalar Bayi: 'Relentless' berarti tanpa ampun dan tidak mau berhenti (maju terus tanpa jeda)!",
    "workedExample": {
      "modelPrompt": "The relentless rainfall flooded the lowlands.",
      "correctAnswer": "continuous and unyielding",
      "babyLogic": "Hujan deras terus-menerus tanpa berhenti."
    },
    "highlightWord": "relentless"
  },
  {
    "id": "ibt-3",
    "type": "reading",
    "skillCategory": "Vocabulary in Context",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 1 (Vocabulary)",
    "academicTopic": "Computer Science",
    "passageSnippet": "Distributed ledger architectures rely on redundant nodes to thwart malicious tampering.",
    "questionPrompt": "The word 'thwart' in the passage is closest in meaning to:",
    "options": [
      "prevent",
      "encourage",
      "document",
      "accelerate"
    ],
    "correctAnswer": "prevent",
    "babyExplanation": "🍼 Nalar Bayi: 'Thwart' berarti menggagalkan atau menjegal rencana jahat sebelum berhasil = 'prevent' (mencegah)!",
    "workedExample": {
      "modelPrompt": "Security protocols thwart unauthorized intrusions.",
      "correctAnswer": "prevent",
      "babyLogic": "Menggagalkan serangan hacker."
    },
    "highlightWord": "thwart"
  },
  {
    "id": "ibt-4",
    "type": "reading",
    "skillCategory": "Vocabulary in Context",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 1 (Vocabulary)",
    "academicTopic": "Planetary Astronomy",
    "passageSnippet": "The Martian atmosphere is remarkably tenuous compared to Earth's dense envelope of nitrogen and oxygen.",
    "questionPrompt": "The word 'tenuous' in the passage is closest in meaning to:",
    "options": [
      "thin and insubstantial",
      "humid",
      "protective",
      "turbulent"
    ],
    "correctAnswer": "thin and insubstantial",
    "babyExplanation": "🍼 Nalar Bayi: Atmosfer Mars sangat tipis dan renggang partikel gasnya = 'thin and insubstantial'!",
    "workedExample": {
      "modelPrompt": "High altitude air becomes tenuous.",
      "correctAnswer": "thin and insubstantial",
      "babyLogic": "Udara di puncak gunung sangat tipis."
    },
    "highlightWord": "tenuous"
  },
  {
    "id": "ibt-5",
    "type": "reading",
    "skillCategory": "Vocabulary in Context",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 1 (Vocabulary)",
    "academicTopic": "Cognitive Psychology",
    "passageSnippet": "Children acquire linguistic fluency with intuitive ease, whereas adults must exert deliberate cognitive effort.",
    "questionPrompt": "The word 'exert' in the passage is closest in meaning to:",
    "options": [
      "apply or put forth",
      "avoid",
      "measure",
      "conceal"
    ],
    "correctAnswer": "apply or put forth",
    "babyExplanation": "🍼 Nalar Bayi: 'Exert effort' berarti mengerahkan segenap tenaga pikiran = 'apply or put forth'!",
    "workedExample": {
      "modelPrompt": "Engineers exert extreme force to shape titanium.",
      "correctAnswer": "apply or put forth",
      "babyLogic": "Mengerahkan gaya tenaga."
    },
    "highlightWord": "exert"
  },
  {
    "id": "ibt-6",
    "type": "reading",
    "skillCategory": "Vocabulary in Context",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 1 (Vocabulary)",
    "academicTopic": "Ecology & Conservation",
    "passageSnippet": "Apex predators play an indispensable role in maintaining biodiversity within trophic cascades.",
    "questionPrompt": "The word 'indispensable' in the passage is closest in meaning to:",
    "options": [
      "essential",
      "replaceable",
      "minor",
      "optional"
    ],
    "correctAnswer": "essential",
    "babyExplanation": "🍼 Nalar Bayi: 'Indispensable' berarti tidak bisa dihilangkan (wajib mutlak ada) = 'essential'!",
    "workedExample": {
      "modelPrompt": "Clean water is indispensable for life.",
      "correctAnswer": "essential",
      "babyLogic": "Air mutlak penting bagi kehidupan."
    },
    "highlightWord": "indispensable"
  },
  {
    "id": "ibt-7",
    "type": "reading",
    "skillCategory": "Vocabulary in Context",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 1 (Vocabulary)",
    "academicTopic": "Ancient Metallurgy",
    "passageSnippet": "The discovery of bronze smelting rendered obsolete earlier stone and copper implements.",
    "questionPrompt": "The word 'obsolete' in the passage is closest in meaning to:",
    "options": [
      "outdated and no longer used",
      "valuable",
      "fragile",
      "abundant"
    ],
    "correctAnswer": "outdated and no longer used",
    "babyExplanation": "🍼 Nalar Bayi: Alat batu ditinggalkan karena ada perunggu yang jauh lebih kuat = 'outdated' (kuno dan ditinggalkan)!",
    "workedExample": {
      "modelPrompt": "Floppy disks became obsolete with USB drives.",
      "correctAnswer": "outdated and no longer used",
      "babyLogic": "Disket sudah kuno tidak terpakai."
    },
    "highlightWord": "obsolete"
  },
  {
    "id": "ibt-8",
    "type": "reading",
    "skillCategory": "Vocabulary in Context",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 1 (Vocabulary)",
    "academicTopic": "Deep-Sea Oceanography",
    "passageSnippet": "Hydrothermal vent organisms thrive in an environment devoid of natural solar radiation.",
    "questionPrompt": "The word 'devoid of' in the passage is closest in meaning to:",
    "options": [
      "lacking completely",
      "surrounded by",
      "heated by",
      "shielded from"
    ],
    "correctAnswer": "lacking completely",
    "babyExplanation": "🍼 Nalar Bayi: Dasar laut dalam gelap gulita tanpa sinar matahari sama sekali (kosong melompong) = 'lacking completely'!",
    "workedExample": {
      "modelPrompt": "The barren moon is devoid of atmosphere.",
      "correctAnswer": "lacking completely",
      "babyLogic": "Bulan sama sekali tidak beratmosfer."
    },
    "highlightWord": "devoid of"
  },
  {
    "id": "ibt-9",
    "type": "reading",
    "skillCategory": "Vocabulary in Context",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 1 (Vocabulary)",
    "academicTopic": "Industrial Economics",
    "passageSnippet": "The rapid expansion of mechanized factories triggered substantial migration toward metropolitan hubs.",
    "questionPrompt": "The word 'substantial' in the passage is closest in meaning to:",
    "options": [
      "considerable in size",
      "negligible",
      "unpredictable",
      "brief"
    ],
    "correctAnswer": "considerable in size",
    "babyExplanation": "🍼 Nalar Bayi: 'Substantial' berarti berjumlah sangat banyak dan besar dampaknya = 'considerable in size'!",
    "workedExample": {
      "modelPrompt": "A substantial sum of capital was invested.",
      "correctAnswer": "considerable in size",
      "babyLogic": "Modal dalam jumlah yang sangat besar."
    },
    "highlightWord": "substantial"
  },
  {
    "id": "ibt-10",
    "type": "reading",
    "skillCategory": "Vocabulary in Context",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 1 (Vocabulary)",
    "academicTopic": "Materials Science",
    "passageSnippet": "Aerospace alloys must maintain structural integrity under extreme thermal fluctuations.",
    "questionPrompt": "The word 'integrity' in the passage is closest in meaning to:",
    "options": [
      "soundness and wholeness",
      "flexibility",
      "electrical conductivity",
      "transparency"
    ],
    "correctAnswer": "soundness and wholeness",
    "babyExplanation": "🍼 Nalar Bayi: Integritas material pesawat berarti kekokohan utuh agar tidak retak di udara = 'soundness and wholeness'!",
    "workedExample": {
      "modelPrompt": "The bridge maintained its integrity during the tremor.",
      "correctAnswer": "soundness and wholeness",
      "babyLogic": "Kekokohan fisik jembatan."
    },
    "highlightWord": "integrity"
  },
  {
    "id": "ibt-11",
    "type": "reading",
    "skillCategory": "Vocabulary in Context",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 1 (Vocabulary)",
    "academicTopic": "Volcanology",
    "passageSnippet": "Viscous magma traps volcanic gases, generating catastrophic explosive eruptions.",
    "questionPrompt": "The word 'viscous' in the passage is closest in meaning to:",
    "options": [
      "thick and sticky",
      "watery",
      "freezing",
      "toxic"
    ],
    "correctAnswer": "thick and sticky",
    "babyExplanation": "🍼 Nalar Bayi: 'Viscous' berarti kental dan lengket seperti aspal panas atau madu kental = 'thick and sticky'!",
    "workedExample": {
      "modelPrompt": "Honey is more viscous than milk.",
      "correctAnswer": "thick and sticky",
      "babyLogic": "Cairan yang kental dan pekat."
    },
    "highlightWord": "viscous"
  },
  {
    "id": "ibt-12",
    "type": "reading",
    "skillCategory": "Vocabulary in Context",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 1 (Vocabulary)",
    "academicTopic": "Archaeology",
    "passageSnippet": "Excavators unearthed meticulously carved stone tablets detailing trade treaties.",
    "questionPrompt": "The word 'meticulously' in the passage is closest in meaning to:",
    "options": [
      "carefully and precisely",
      "crudely",
      "hastily",
      "randomly"
    ],
    "correctAnswer": "carefully and precisely",
    "babyExplanation": "🍼 Nalar Bayi: Mengukir dengan penuh ketelitian dan ketelitian tingkat tinggi = 'carefully and precisely'!",
    "workedExample": {
      "modelPrompt": "The code was meticulously reviewed for bugs.",
      "correctAnswer": "carefully and precisely",
      "babyLogic": "Diperiksa dengan sangat teliti."
    },
    "highlightWord": "meticulously"
  },
  {
    "id": "ibt-13",
    "type": "reading",
    "skillCategory": "Vocabulary in Context",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 1 (Vocabulary)",
    "academicTopic": "Biochemistry",
    "passageSnippet": "Catalytic enzymes facilitate biochemical transformations without being consumed in the reaction.",
    "questionPrompt": "The word 'facilitate' in the passage is closest in meaning to:",
    "options": [
      "make easier",
      "hinder",
      "terminate",
      "prolong"
    ],
    "correctAnswer": "make easier",
    "babyExplanation": "🍼 Nalar Bayi: Enzim mempermudah dan mempercepat jalannya reaksi kimia = 'make easier'!",
    "workedExample": {
      "modelPrompt": "High-speed rail facilitates intercity commute.",
      "correctAnswer": "make easier",
      "babyLogic": "Mempermudah perjalanan komuter."
    },
    "highlightWord": "facilitate"
  },
  {
    "id": "ibt-14",
    "type": "reading",
    "skillCategory": "Vocabulary in Context",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 1 (Vocabulary)",
    "academicTopic": "Renewable Energy",
    "passageSnippet": "Intermittent sunlight poses storage challenges that smart grid batteries must overcome.",
    "questionPrompt": "The word 'intermittent' in the passage is closest in meaning to:",
    "options": [
      "occurring at irregular intervals",
      "continuous",
      "intense",
      "permanent"
    ],
    "correctAnswer": "occurring at irregular intervals",
    "babyExplanation": "🍼 Nalar Bayi: Sinar matahari kadang terik kadang terhalang awan (putus-nyambung) = 'occurring at irregular intervals'!",
    "workedExample": {
      "modelPrompt": "Intermittent wipers clean rain periodically.",
      "correctAnswer": "occurring at irregular intervals",
      "babyLogic": "Bergerak berselang-seling."
    },
    "highlightWord": "intermittent"
  },
  {
    "id": "ibt-15",
    "type": "reading",
    "skillCategory": "Vocabulary in Context",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 1 (Vocabulary)",
    "academicTopic": "Neurology",
    "passageSnippet": "Synaptic plasticity denotes the brain's malleable capacity to reorganize neural connections.",
    "questionPrompt": "The word 'malleable' in the passage is closest in meaning to:",
    "options": [
      "adaptable and capable of being shaped",
      "rigid",
      "deteriorating",
      "fragile"
    ],
    "correctAnswer": "adaptable and capable of being shaped",
    "babyExplanation": "🍼 Nalar Bayi: Otak seperti lilin plastisin yang bisa dibentuk dan menyesuaikan diri belajar hal baru = 'adaptable'!",
    "workedExample": {
      "modelPrompt": "Gold is a malleable metal.",
      "correctAnswer": "adaptable and capable of being shaped",
      "babyLogic": "Bisa ditempa dan dibentuk fleksibel."
    },
    "highlightWord": "malleable"
  },
  {
    "id": "ibt-16",
    "type": "reading",
    "skillCategory": "Vocabulary in Context",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 1 (Vocabulary)",
    "academicTopic": "Atmospheric Physics",
    "passageSnippet": "Greenhouse gases impede the dissipation of thermal infrared radiation into space.",
    "questionPrompt": "The word 'impede' in the passage is closest in meaning to:",
    "options": [
      "obstruct or slow down",
      "promote",
      "absorb totally",
      "reproduce"
    ],
    "correctAnswer": "obstruct or slow down",
    "babyExplanation": "🍼 Nalar Bayi: 'Impede' berarti merintangi atau menghambat pelepasan panas = 'obstruct or slow down'!",
    "workedExample": {
      "modelPrompt": "Fallen trees impede traffic flow.",
      "correctAnswer": "obstruct or slow down",
      "babyLogic": "Menghalangi kelancaran arus lalu lintas."
    },
    "highlightWord": "impede"
  },
  {
    "id": "ibt-17",
    "type": "reading",
    "skillCategory": "Vocabulary in Context",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 1 (Vocabulary)",
    "academicTopic": "Sociology",
    "passageSnippet": "Urban enclaves provide newcomers with cohesive mutual support networks.",
    "questionPrompt": "The word 'cohesive' in the passage is closest in meaning to:",
    "options": [
      "tightly united",
      "fractured",
      "isolated",
      "temporary"
    ],
    "correctAnswer": "tightly united",
    "babyExplanation": "🍼 Nalar Bayi: 'Cohesive' berarti kompak bersatu padu seperti lem erat = 'tightly united'!",
    "workedExample": {
      "modelPrompt": "A cohesive team solves problems faster.",
      "correctAnswer": "tightly united",
      "babyLogic": "Tim yang kompak bersatu."
    },
    "highlightWord": "cohesive"
  },
  {
    "id": "ibt-18",
    "type": "reading",
    "skillCategory": "Vocabulary in Context",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 1 (Vocabulary)",
    "academicTopic": "Agricultural Science",
    "passageSnippet": "Excessive irrigation can cause salinization, which diminishes agricultural yields over time.",
    "questionPrompt": "The word 'diminishes' in the passage is closest in meaning to:",
    "options": [
      "reduces",
      "improves",
      "stabilizes",
      "protects"
    ],
    "correctAnswer": "reduces",
    "babyExplanation": "🍼 Nalar Bayi: Penumpukan garam membuat hasil panen tanah menyusut berkurang = 'reduces'!",
    "workedExample": {
      "modelPrompt": "Fatigue diminishes cognitive concentration.",
      "correctAnswer": "reduces",
      "babyLogic": "Kelelahan mengurangi daya konsentrasi."
    },
    "highlightWord": "diminishes"
  },
  {
    "id": "ibt-19",
    "type": "reading",
    "skillCategory": "Sentence Simplification",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 2 (Sentence Simplification)",
    "academicTopic": "Plate Tectonics",
    "passageSnippet": "Although Alfred Wegener formulated the continental drift hypothesis in 1912, the broader scientific community overwhelmingly dismissed his assertions because he lacked a verifiable geological mechanism to account for the movement of continents through dense oceanic crust.",
    "questionPrompt": "Which of the sentences below best expresses the essential information in the highlighted sentence?",
    "options": [
      "Scientists rejected Wegener's theory because he could not explain how continents actually moved.",
      "Wegener proved that continents move easily across oceanic crust in 1912.",
      "Geologists accepted continental drift once the mechanism was demonstrated.",
      "The scientific community formulated an alternative theory to Wegener's hypothesis."
    ],
    "correctAnswer": "Scientists rejected Wegener's theory because he could not explain how continents actually moved.",
    "babyExplanation": "🍼 Nalar Bayi: Kunci simplifikasi: 1) Teori Wegener ditolak para ilmuwan, 2) Alasannya karena dia belum bisa menjelaskan mekanisme bergeraknya benua. Opsi A merangkum inti tersebut tanpa bumbu palsu!",
    "workedExample": {
      "modelPrompt": "Even though solar power is clean, adoption stalled due to storage costs.",
      "correctAnswer": "High battery expenses delayed solar adoption despite its clean nature.",
      "babyLogic": "Identifikasi klausa konsesi dan klausa sebab-akibat utama."
    },
    "highlightSentence": "Although Alfred Wegener formulated the continental drift hypothesis in 1912, the broader scientific community overwhelmingly dismissed his assertions because he lacked a verifiable geological mechanism to account for the movement of continents through dense oceanic crust."
  },
  {
    "id": "ibt-20",
    "type": "reading",
    "skillCategory": "Sentence Simplification",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 2 (Sentence Simplification)",
    "academicTopic": "Ecology",
    "passageSnippet": "Because tropical rainforests possess multi-layered canopies that absorb up to 98 percent of solar radiation before it strikes the ground, forest floor plants have evolved expansive, thin foliage specifically adapted to maximize photosynthesis in deep shade.",
    "questionPrompt": "Which sentence best expresses the essential information in the highlighted sentence?",
    "options": [
      "Understory plants developed wide, thin leaves to capture scarce light filtered by the dense upper canopy.",
      "Canopy trees shed their leaves to allow ground plants sufficient sunlight for photosynthesis.",
      "Rainforest floors receive nearly all solar radiation, stunting the growth of ground vegetation.",
      "Plants on the forest floor photosynthesize more effectively than canopy trees."
    ],
    "correctAnswer": "Understory plants developed wide, thin leaves to capture scarce light filtered by the dense upper canopy.",
    "babyExplanation": "🍼 Nalar Bayi: Inti pesan: Kanopi pohon di atas menyerap 98% cahaya, maka tanaman bawah beradaptasi punya daun tipis-lebar biar bisa fotosintesis di tempat teduh!",
    "workedExample": {
      "modelPrompt": "Dense clouds block light, forcing plants to grow broader leaves.",
      "correctAnswer": "Plants adapted wide leaves to absorb limited sunlight blocked by clouds.",
      "babyLogic": "Hubungkan adaptasi morfologi tanaman dengan kondisi pencahayaan."
    },
    "highlightSentence": "Because tropical rainforests possess multi-layered canopies that absorb up to 98 percent of solar radiation before it strikes the ground, forest floor plants have evolved expansive, thin foliage specifically adapted to maximize photosynthesis in deep shade."
  },
  {
    "id": "ibt-21",
    "type": "reading",
    "skillCategory": "Sentence Simplification",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 2 (Sentence Simplification)",
    "academicTopic": "Computer Systems",
    "passageSnippet": "While multi-core processors substantially increase parallel throughput, software developers must explicitly restructure algorithms to prevent concurrency bottlenecks that otherwise negate processing advantages.",
    "questionPrompt": "Which sentence best expresses the essential information?",
    "options": [
      "Multi-core chips only deliver performance gains if programmers redesign software for parallel execution.",
      "Software programs automatically run faster on modern processors without code modifications.",
      "Concurrency bottlenecks have made multi-core chips obsolete in modern servers.",
      "Parallel throughput is unaffected by software structure."
    ],
    "correctAnswer": "Multi-core chips only deliver performance gains if programmers redesign software for parallel execution.",
    "babyExplanation": "🍼 Nalar Bayi: Chip banyak otak (multi-core) cuma bisa kencang KALAU programmer mendesain ulang kodingannya agar tidak macet paralel!",
    "workedExample": {
      "modelPrompt": "Powerful GPUs only improve rendering if drivers are optimized.",
      "correctAnswer": "Hardware gains require software adjustments to avoid bottlenecks.",
      "babyLogic": "Fokus pada hubungan prasyarat software dan hardware."
    },
    "highlightSentence": "While multi-core processors substantially increase parallel throughput, software developers must explicitly restructure algorithms to prevent concurrency bottlenecks that otherwise negate processing advantages."
  },
  {
    "id": "ibt-22",
    "type": "reading",
    "skillCategory": "Sentence Simplification",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 2 (Sentence Simplification)",
    "academicTopic": "Ancient Civilizations",
    "passageSnippet": "The Maya civilization relied on sophisticated subterranean reservoirs called chultuns to store rainwater because northern Yucatan features porous limestone bedrock that drains precipitation almost immediately, leaving no perennial rivers.",
    "questionPrompt": "Which sentence best expresses the essential information?",
    "options": [
      "The Maya constructed underground cisterns to harvest rainwater because limestone ground prevented surface rivers from forming.",
      "Yucatan had abundant perennial rivers that supplied freshwater to the Maya year-round.",
      "Porous limestone enabled the Maya to build stone pyramids over natural reservoirs.",
      "Chultuns were natural caves that the Maya discovered rather than engineered structures."
    ],
    "correctAnswer": "The Maya constructed underground cisterns to harvest rainwater because limestone ground prevented surface rivers from forming.",
    "babyExplanation": "🍼 Nalar Bayi: Tanah kapur menyerap air hujan seketika sehingga tak ada sungai, makanya suku Maya membangun waduk bawah tanah chultun!",
    "workedExample": {
      "modelPrompt": "Desert tribes built cisterns because sand absorbs rain instantly.",
      "correctAnswer": "Cisterns were built to capture rain where water seeps into porous ground.",
      "babyLogic": "Sebab kondisi geologis tanah kapur mengharuskan pembangunan waduk buatan."
    },
    "highlightSentence": "The Maya relied on sophisticated subterranean reservoirs called chultuns to store rainwater because northern Yucatan features porous limestone bedrock that drains precipitation almost immediately, leaving no perennial rivers."
  },
  {
    "id": "ibt-23",
    "type": "reading",
    "skillCategory": "Sentence Simplification",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 2 (Sentence Simplification)",
    "academicTopic": "Astrophysics",
    "passageSnippet": "Although black holes do not emit light directly, astronomers deduce their presence from the superheated accretion disks that spiral around their event horizons, emitting copious X-ray radiation.",
    "questionPrompt": "Which sentence best expresses the essential information?",
    "options": [
      "Scientists identify invisible black holes by observing X-rays released from swirling matter orbiting them.",
      "Black holes shine brightly with visible light as matter falls past their event horizons.",
      "Astronomers cannot detect black holes because they absorb all electromagnetic radiation.",
      "Accretion disks prevent astronomers from calculating the mass of black holes."
    ],
    "correctAnswer": "Scientists identify invisible black holes by observing X-rays released from swirling matter orbiting them.",
    "babyExplanation": "🍼 Nalar Bayi: Black hole tidak terlihat, tapi ilmuwan mendeteksi keberadaannya dari pancaran sinar-X piringan materi yang berputar di sekelilingnya!",
    "workedExample": {
      "modelPrompt": "Planets are located by the wobbling of stars they orbit.",
      "correctAnswer": "Objects can be detected through secondary signals emitted by nearby matter.",
      "babyLogic": "Deteksi tidak langsung melalui radiasi piringan akresi."
    },
    "highlightSentence": "Although black holes do not emit light directly, astronomers deduce their presence from the superheated accretion disks that spiral around their event horizons, emitting copious X-ray radiation."
  },
  {
    "id": "ibt-24",
    "type": "reading",
    "skillCategory": "Sentence Simplification",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 2 (Sentence Simplification)",
    "academicTopic": "Marine Ecology",
    "passageSnippet": "Rising seawater temperatures cause coral polyps to expel the symbiotic photosynthetic algae residing in their tissues, turning the reefs stark white and depriving corals of their primary energy source.",
    "questionPrompt": "Which sentence best expresses the essential information?",
    "options": [
      "Thermal stress leads corals to lose their symbiotic algae, causing bleaching and severe nutritional deprivation.",
      "Coral reefs turn white as a defensive mechanism that enhances their photosynthetic capacity.",
      "Algae abandon corals in cold water, forcing polyps to seek alternate marine habitats.",
      "Expelling algae protects corals from thermal shock during heatwaves."
    ],
    "correctAnswer": "Thermal stress leads corals to lose their symbiotic algae, causing bleaching and severe nutritional deprivation.",
    "babyExplanation": "🍼 Nalar Bayi: Air laut memanas -> karang mengusir alga simbiotik -> karang memutih dan kelaparan kekurangan sumber energi utama!",
    "workedExample": {
      "modelPrompt": "High heat drives algae away, bleaching corals and starving them.",
      "correctAnswer": "Bleaching occurs when heat forces corals to shed essential algae.",
      "babyLogic": "Rantai kausalitas: suhu panas -> lepas alga -> bleaching dan lapar."
    },
    "highlightSentence": "Rising seawater temperatures cause coral polyps to expel the symbiotic photosynthetic algae residing in their tissues, turning the reefs stark white and depriving corals of their primary energy source."
  },
  {
    "id": "ibt-25",
    "type": "reading",
    "skillCategory": "Sentence Simplification",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 2 (Sentence Simplification)",
    "academicTopic": "Evolutionary Biology",
    "passageSnippet": "Fossilized transitional specimens illustrate how ancient tetrapods developed weight-bearing limbs while retaining aquatic features like internal gills, disproving the simplistic notion that vertebrates crawled directly onto dry land.",
    "questionPrompt": "Which sentence best expresses the essential information?",
    "options": [
      "Transitional fossils prove that limb evolution began in water before vertebrates fully transitioned to terrestrial habitats.",
      "Ancient tetrapods abandoned all aquatic features before developing limbs capable of walking on land.",
      "Vertebrates crawled onto land instantaneously without intermediate evolutionary stages.",
      "Internal gills prevented early tetrapods from ever venturing out of aquatic zones."
    ],
    "correctAnswer": "Transitional fossils prove that limb evolution began in water before vertebrates fully transitioned to terrestrial habitats.",
    "babyExplanation": "🍼 Nalar Bayi: Fosil transisi membuktikan kaki hewan darat berevolusi di dalam air lebih dulu sambil tetap punya insang, bukan langsung loncat ke daratan!",
    "workedExample": {
      "modelPrompt": "Fossils show limbs arose in aquatic environments before terrestrial life.",
      "correctAnswer": "Limbs evolved underwater prior to terrestrial colonization.",
      "babyLogic": "Menolak pandangan simplistis bahwa evolusi darat terjadi seketika."
    },
    "highlightSentence": "Fossilized transitional specimens illustrate how ancient tetrapods developed weight-bearing limbs while retaining aquatic features like internal gills, disproving the simplistic notion that vertebrates crawled directly onto dry land."
  },
  {
    "id": "ibt-26",
    "type": "reading",
    "skillCategory": "Sentence Simplification",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 2 (Sentence Simplification)",
    "academicTopic": "Linguistics",
    "passageSnippet": "Despite geographical barriers that separated regional dialects for centuries, modern digital telecommunications have fostered linguistic standardization by exposing populations to uniform broadcast media.",
    "questionPrompt": "Which sentence best expresses the essential information?",
    "options": [
      "Digital media and broadcasting have unified language variations that were once maintained by geographical isolation.",
      "Geographical barriers continue to prevent digital communication from standardizing regional speech.",
      "Regional dialects have expanded into distinct languages because of broadcasting platforms.",
      "Broadcast media intentionally promotes diverse regional dialects over standardized grammar."
    ],
    "correctAnswer": "Digital media and broadcasting have unified language variations that were once maintained by geographical isolation.",
    "babyExplanation": "Despite geographical barriers that separated regional dialects for centuries, modern digital telecommunications have fostered linguistic standardization by exposing populations to uniform broadcast media.",
    "workedExample": {
      "modelPrompt": "🍼 Nalar Bayi: Media siaran digital menyeragamkan variasi dialek bahasa yang dulunya terpecah-pecah oleh batasan geografi pegunungan/pulau!",
      "correctAnswer": "Internet media standardizes speech across isolated regions.",
      "babyLogic": "Media digital menyatukan dialek lokal menjadi bahasa standar."
    },
    "highlightSentence": "Despite geographical barriers that separated regional dialects for centuries, modern digital telecommunications have fostered linguistic standardization by exposing populations to uniform broadcast media."
  },
  {
    "id": "ibt-27",
    "type": "reading",
    "skillCategory": "Sentence Simplification",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 2 (Sentence Simplification)",
    "academicTopic": "Industrial Chemistry",
    "passageSnippet": "The Haber-Bosch process synthesized ammonia directly from atmospheric nitrogen, an innovation that vastly multiplied synthetic fertilizer production and averted widespread Malthusian famine in the 20th century.",
    "questionPrompt": "Which sentence best expresses the essential information?",
    "options": [
      "Synthesizing ammonia via the Haber-Bosch technique enabled massive fertilizer production that prevented global agricultural starvation.",
      "Malthusian famine forced 20th-century chemists to ban synthetic fertilizers across industrial farms.",
      "Atmospheric nitrogen proved too unstable to manufacture commercial fertilizer without toxic byproducts.",
      "The Haber-Bosch process relied on natural organic fertilizers to feed growing populations."
    ],
    "correctAnswer": "Synthesizing ammonia via the Haber-Bosch technique enabled massive fertilizer production that prevented global agricultural starvation.",
    "babyExplanation": "The Haber-Bosch process synthesized ammonia directly from atmospheric nitrogen, an innovation that vastly multiplied synthetic fertilizer production and averted widespread Malthusian famine in the 20th century.",
    "workedExample": {
      "modelPrompt": "🍼 Nalar Bayi: Sintesis amonia lewat proses Haber-Bosch melipatgandakan pupuk buatan dan menyelamatkan miliaran manusia dari bencana kelaparan dunia!",
      "correctAnswer": "Haber-Bosch made synthetic fertilizer feasible, preventing famine.",
      "babyLogic": "Produksi amonia kimiawi melipatgandakan pasokan pangan dunia."
    },
    "highlightSentence": "The Haber-Bosch process synthesized ammonia directly from atmospheric nitrogen, an innovation that vastly multiplied synthetic fertilizer production and averted widespread Malthusian famine in the 20th century."
  },
  {
    "id": "ibt-28",
    "type": "reading",
    "skillCategory": "Sentence Simplification",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 2 (Sentence Simplification)",
    "academicTopic": "Geology",
    "passageSnippet": "Because basaltic lava possesses low silica content, it flows with exceptional fluidity over vast distances, constructing broad, gently sloped shield volcanoes rather than steep-sided explosive cones.",
    "questionPrompt": "Which sentence best expresses the essential information?",
    "options": [
      "Low-silica basaltic lava travels fluidly over large areas, creating wide shield volcanoes instead of steep cones.",
      "Silica-rich lava builds wide, flat shield volcanoes because it cools rapidly upon eruption.",
      "Shield volcanoes erupt violently because basaltic lava accumulates near the central vent.",
      "Steep volcanic cones form whenever lava flows smoothly across long distances."
    ],
    "correctAnswer": "Low-silica basaltic lava travels fluidly over large areas, creating wide shield volcanoes instead of steep cones.",
    "babyExplanation": "Because basaltic lava possesses low silica content, it flows with exceptional fluidity over vast distances, constructing broad, gently sloped shield volcanoes rather than steep-sided explosive cones.",
    "workedExample": {
      "modelPrompt": "🍼 Nalar Bayi: Lava basaltik rendah silika sangat encer mengalir jauh, sehingga membentuk gunung api perisai yang landai melebar!",
      "correctAnswer": "Fluid lava creates wide flat volcanoes rather than steep peaks.",
      "babyLogic": "Lava encer membentuk gunung landai melebar."
    },
    "highlightSentence": "Because basaltic lava possesses low silica content, it flows with exceptional fluidity over vast distances, constructing broad, gently sloped shield volcanoes rather than steep-sided explosive cones."
  },
  {
    "id": "ibt-29",
    "type": "reading",
    "skillCategory": "Sentence Simplification",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 2 (Sentence Simplification)",
    "academicTopic": "Economics",
    "passageSnippet": "Although mercantilist policies aimed to maximize national gold reserves by curbing imports and subsidizing exports, Adam Smith demonstrated that real wealth consists of the productive capacity of a nation's workforce.",
    "questionPrompt": "Which sentence best expresses the essential information?",
    "options": [
      "Smith countered mercantilism by showing that a nation's true wealth derives from production rather than accumulated precious metals.",
      "Mercantilism successfully enriched European nations by banning all exports of manufactured goods.",
      "Adam Smith advocated for strict import tariffs to expand domestic gold reserves.",
      "Gold reserves remain the sole measurement of an economy's productive capacity."
    ],
    "correctAnswer": "Smith countered mercantilism by showing that a nation's true wealth derives from production rather than accumulated precious metals.",
    "babyExplanation": "Although mercantilist policies aimed to maximize national gold reserves by curbing imports and subsidizing exports, Adam Smith demonstrated that real wealth consists of the productive capacity of a nation's workforce.",
    "workedExample": {
      "modelPrompt": "🍼 Nalar Bayi: Adam Smith membantah merkantilisme: kekayaan sejati negara bukan dari tumpukan emas cadangan, melainkan kapasitas produktif rakyatnya!",
      "correctAnswer": "Wealth comes from productive labor rather than hoarding bullion.",
      "babyLogic": "Kekayaan riil berasal dari produktivitas kerja, bukan timbunan emas."
    },
    "highlightSentence": "Although mercantilist policies aimed to maximize national gold reserves by curbing imports and subsidizing exports, Adam Smith demonstrated that real wealth consists of the productive capacity of a nation's workforce."
  },
  {
    "id": "ibt-30",
    "type": "reading",
    "skillCategory": "Sentence Simplification",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 2 (Sentence Simplification)",
    "academicTopic": "Psychology",
    "passageSnippet": "While short-term memory holds limited information for mere seconds without rehearsal, emotional arousal triggers neurochemical cascades that consolidate critical memories permanently into long-term cerebral storage.",
    "questionPrompt": "Which sentence best expresses the essential information?",
    "options": [
      "Emotional stimulation activates chemical processes that securely store important memories in long-term retention.",
      "Short-term memory retains emotional data indefinitely without requiring neural rehearsal.",
      "All sensory information is automatically transferred into permanent storage regardless of emotional state.",
      "Neurochemical cascades degrade long-term memory when a person experiences intense stress."
    ],
    "correctAnswer": "Emotional stimulation activates chemical processes that securely store important memories in long-term retention.",
    "babyExplanation": "While short-term memory holds limited information for mere seconds without rehearsal, emotional arousal triggers neurochemical cascades that consolidate critical memories permanently into long-term cerebral storage.",
    "workedExample": {
      "modelPrompt": "🍼 Nalar Bayi: Memori jangka pendek cepat hilang, tapi getaran emosi melepaskan zat kimia otak yang mengunci ingatan penting jadi permanen!",
      "correctAnswer": "Emotions stimulate chemical pathways that lock memories into long-term storage.",
      "babyLogic": "Emosi memperkuat konsolidasi memori jangka panjang."
    },
    "highlightSentence": "While short-term memory holds limited information for mere seconds without rehearsal, emotional arousal triggers neurochemical cascades that consolidate critical memories permanently into long-term cerebral storage."
  },
  {
    "id": "ibt-31",
    "type": "reading",
    "skillCategory": "Sentence Simplification",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 2 (Sentence Simplification)",
    "academicTopic": "Atmospheric Chemistry",
    "passageSnippet": "Chlorofluorocarbons remain chemically inert in the troposphere, but upon drifting into the stratosphere, ultraviolet solar radiation photolyzes them, releasing chlorine atoms that catalyze the destruction of ozone molecules.",
    "questionPrompt": "Which sentence best expresses the essential information?",
    "options": [
      "CFCs stay harmless at low altitudes but release ozone-destroying chlorine when exposed to ultraviolet light in the stratosphere.",
      "Ultraviolet radiation binds ozone molecules together once CFCs enter the troposphere.",
      "Chlorine atoms convert toxic stratospheric radiation into stable inert gases.",
      "CFCs decompose immediately near the Earth's surface before reaching high altitudes."
    ],
    "correctAnswer": "CFCs stay harmless at low altitudes but release ozone-destroying chlorine when exposed to ultraviolet light in the stratosphere.",
    "babyExplanation": "Chlorofluorocarbons remain chemically inert in the troposphere, but upon drifting into the stratosphere, ultraviolet solar radiation photolyzes them, releasing chlorine atoms that catalyze the destruction of ozone molecules.",
    "workedExample": {
      "modelPrompt": "🍼 Nalar Bayi: Gas CFC aman di bawah, tapi pas naik ke stratosfer tersengat sinar UV, melepas klorin yang menghancurkan lapisan ozon!",
      "correctAnswer": "CFCs break down in upper atmosphere UV light, destroying ozone.",
      "babyLogic": "CFC pecah di stratosfer akibat UV dan merusak ozon."
    },
    "highlightSentence": "Chlorofluorocarbons remain chemically inert in the troposphere, but upon drifting into the stratosphere, ultraviolet solar radiation photolyzes them, releasing chlorine atoms that catalyze the destruction of ozone molecules."
  },
  {
    "id": "ibt-32",
    "type": "reading",
    "skillCategory": "Sentence Simplification",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 2 (Sentence Simplification)",
    "academicTopic": "Microbiology",
    "passageSnippet": "Bacterial biofilms form protective extracellular matrices that not only anchor colonies to clinical implants but also impede the penetration of conventional antibiotic treatments.",
    "questionPrompt": "Which sentence best expresses the essential information?",
    "options": [
      "Biofilms produce a matrix that secures bacteria to surfaces and shields them against antibiotic penetration.",
      "Antibiotics penetrate biofilms easily to dissolve bacterial attachment to medical devices.",
      "Extracellular matrices cause bacteria to detach from surfaces when clinical drugs are applied.",
      "Clinical implants prevent bacterial colonies from producing protective biofilm shields."
    ],
    "correctAnswer": "Biofilms produce a matrix that secures bacteria to surfaces and shields them against antibiotic penetration.",
    "babyExplanation": "Bacterial biofilms form protective extracellular matrices that not only anchor colonies to clinical implants but also impede the penetration of conventional antibiotic treatments.",
    "workedExample": {
      "modelPrompt": "🍼 Nalar Bayi: Biofilm bakteri membuat benteng lendir pelindung: nempel kuat di implan sekaligus menolak tembusan obat antibiotik!",
      "correctAnswer": "Biofilm matrices anchor bacteria and block antibiotic entry.",
      "babyLogic": "Matriks biofilm menempelkan bakteri dan memblokir antibiotik."
    },
    "highlightSentence": "Bacterial biofilms form protective extracellular matrices that not only anchor colonies to clinical implants but also impede the penetration of conventional antibiotic treatments."
  },
  {
    "id": "ibt-33",
    "type": "reading",
    "skillCategory": "Sentence Simplification",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 2 (Sentence Simplification)",
    "academicTopic": "Hydrology",
    "passageSnippet": "Over-extraction of groundwater in coastal aquifers alters subterranean hydrostatic gradients, allowing dense marine saltwater to encroach inland and contaminate municipal drinking wells.",
    "questionPrompt": "Which sentence best expresses the essential information?",
    "options": [
      "Excessive coastal well pumping shifts groundwater pressure, drawing ocean saltwater into freshwater drinking supplies.",
      "Coastal aquifers naturally replenish freshwater wells by filtering out marine saltwater.",
      "Hydrostatic pressure prevents ocean water from ever mixing with municipal groundwater reserves.",
      "Inland aquifers contain more salt than coastal aquifers due to natural precipitation."
    ],
    "correctAnswer": "Excessive coastal well pumping shifts groundwater pressure, drawing ocean saltwater into freshwater drinking supplies.",
    "babyExplanation": "Over-extraction of groundwater in coastal aquifers alters subterranean hydrostatic gradients, allowing dense marine saltwater to encroach inland and contaminate municipal drinking wells.",
    "workedExample": {
      "modelPrompt": "🍼 Nalar Bayi: Terlalu rakus memompa air tanah pesisir membuat tekanan air tawar drop, sehingga air laut asin menyusup dan meracuni sumur minum!",
      "correctAnswer": "Pumping too much coastal groundwater pulls seawater into fresh wells.",
      "babyLogic": "Penyedotan air tanah berlebih memicu intrusi air laut ke sumur."
    },
    "highlightSentence": "Over-extraction of groundwater in coastal aquifers alters subterranean hydrostatic gradients, allowing dense marine saltwater to encroach inland and contaminate municipal drinking wells."
  },
  {
    "id": "ibt-34",
    "type": "reading",
    "skillCategory": "Sentence Simplification",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 2 (Sentence Simplification)",
    "academicTopic": "Paleontology",
    "passageSnippet": "The asteroid impact hypothesis posits that a six-mile-wide bolide collision threw pulverized debris into the upper atmosphere, blocking sunlight for years and inducing a photosynthetic blackout that collapsed Cretaceous food chains.",
    "questionPrompt": "Which sentence best expresses the essential information?",
    "options": [
      "An asteroid strike darkened the planet with airborne dust, shutting down plant growth and triggering mass starvation.",
      "Cretaceous food chains collapsed centuries before the asteroid impact due to climate warming.",
      "Photosynthetic plants multiplied across the planet following the dispersal of asteroid dust.",
      "The bolide impact vaporized all marine life immediately without affecting terrestrial vegetation."
    ],
    "correctAnswer": "An asteroid strike darkened the planet with airborne dust, shutting down plant growth and triggering mass starvation.",
    "babyExplanation": "The asteroid impact hypothesis posits that a six-mile-wide bolide collision threw pulverized debris into the upper atmosphere, blocking sunlight for years and inducing a photosynthetic blackout that collapsed Cretaceous food chains.",
    "workedExample": {
      "modelPrompt": "🍼 Nalar Bayi: Tabrakan asteroid menerbangkan debu tebal menutupi langit bertahun-tahun -> tumbuhan mati fotosintesis padam -> dinosaurus kelaparan dan punah!",
      "correctAnswer": "Dust from asteroid blocked sun, killing plants and starving dinosaurs.",
      "babyLogic": "Debu asteroid menghalangi sinar matahari dan mematikan rantai makanan."
    },
    "highlightSentence": "The asteroid impact hypothesis posits that a six-mile-wide bolide collision threw pulverized debris into the upper atmosphere, blocking sunlight for years and inducing a photosynthetic blackout that collapsed Cretaceous food chains."
  },
  {
    "id": "ibt-35",
    "type": "reading",
    "skillCategory": "Sentence Simplification",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 2 (Sentence Simplification)",
    "academicTopic": "Software Architecture",
    "passageSnippet": "Monolithic software applications provide straightforward initial deployment, yet as codebase complexity escalates, decentralized microservices become imperative to enable continuous independent team deployments.",
    "questionPrompt": "Which sentence best expresses the essential information?",
    "options": [
      "While monoliths are simple at first, complex evolving systems require microservices for autonomous team updates.",
      "Microservices are simpler to deploy initially than traditional monolithic codebases.",
      "Decentralized architectures prevent independent teams from updating software features.",
      "Continuous deployments can only be achieved by maintaining a single monolithic codebase."
    ],
    "correctAnswer": "While monoliths are simple at first, complex evolving systems require microservices for autonomous team updates.",
    "babyExplanation": "Monolithic software applications provide straightforward initial deployment, yet as codebase complexity escalates, decentralized microservices become imperative to enable continuous independent team deployments.",
    "workedExample": {
      "modelPrompt": "🍼 Nalar Bayi: Aplikasi monolitik gampang di awal, tapi saat aplikasi makin rumit raksasa, wajib pecah jadi microservices biar tiap tim bisa rilis mandiri!",
      "correctAnswer": "Complex apps shift from monoliths to microservices for independent releases.",
      "babyLogic": "Microservices memfasilitasi deployment mandiri pada aplikasi kompleks."
    },
    "highlightSentence": "Monolithic software applications provide straightforward initial deployment, yet as codebase complexity escalates, decentralized microservices become imperative to enable continuous independent team deployments."
  },
  {
    "id": "ibt-36",
    "type": "reading",
    "skillCategory": "Fact & Negative Fact",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 3 (Fact & Negative Fact)",
    "academicTopic": "Plant Biology",
    "passageSnippet": "Carnivorous plants inhabit nutrient-poor peat bogs where acidic conditions inhibit bacterial decomposition of organic matter. Consequently, the soil contains virtually no bioavailable nitrogen. To compensate, pitcher plants and Venus flytraps evolved modified leaves that secrete digestive enzymes to dissolve captured insect prey, absorbing vital nitrogen directly through leaf tissue.",
    "questionPrompt": "According to the passage, carnivorous plants trap insects primarily because:",
    "options": [
      "acidic bog soils lack bioavailable nitrogen needed for plant growth",
      "insects destroy their flowering structures",
      "they cannot perform standard photosynthesis",
      "water is scarce in peat bogs"
    ],
    "correctAnswer": "acidic bog soils lack bioavailable nitrogen needed for plant growth",
    "babyExplanation": "🍼 Nalar Bayi: Teks menyatakan tanah rawa asam miskin nitrogen (contains virtually no nitrogen), jadi mereka menjebak serangga buat menyerap nitrogen!",
    "workedExample": {
      "modelPrompt": "Desert plants store water because rain is rare.",
      "correctAnswer": "rain is rare",
      "babyLogic": "Fakta langsung dari teks bacaan."
    }
  },
  {
    "id": "ibt-37",
    "type": "reading",
    "skillCategory": "Fact & Negative Fact",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 3 (Fact & Negative Fact)",
    "academicTopic": "Plant Biology",
    "passageSnippet": "Carnivorous plants inhabit nutrient-poor peat bogs where acidic conditions inhibit bacterial decomposition of organic matter. Consequently, the soil contains virtually no bioavailable nitrogen. To compensate, pitcher plants and Venus flytraps evolved modified leaves that secrete digestive enzymes to dissolve captured insect prey, absorbing vital nitrogen directly through leaf tissue.",
    "questionPrompt": "All of the following are mentioned about carnivorous plants EXCEPT:",
    "options": [
      "they absorb nitrogen through their root systems",
      "they live in acidic peat environments",
      "they secrete enzymes to digest prey",
      "their insect traps are modified leaves"
    ],
    "correctAnswer": "they absorb nitrogen through their root systems",
    "babyExplanation": "🍼 Nalar Bayi: Pertanyaan EXCEPT mencari yang SALAH: teks bilang mereka menyerap nitrogen lewat DAUN (leaf tissue), BUKAN lewat akar (root systems)!",
    "workedExample": {
      "modelPrompt": "Plants absorb water through leaves, stems, and roots EXCEPT...",
      "correctAnswer": "roots",
      "babyLogic": "Cari informasi yang bertolak belakang dengan teks."
    }
  },
  {
    "id": "ibt-38",
    "type": "reading",
    "skillCategory": "Fact & Negative Fact",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 3 (Fact & Negative Fact)",
    "academicTopic": "Solar Physics",
    "passageSnippet": "Sunspots appear dark against the solar photosphere because intense magnetic field bundles inhibit convective heat transport from the sun's interior. As a result, sunspots maintain temperatures around 3,800 Kelvin, significantly cooler than the surrounding 5,800 Kelvin plasma.",
    "questionPrompt": "According to the passage, why do sunspots appear darker than the rest of the sun?",
    "options": [
      "They are cooler than the surrounding solar plasma due to blocked heat convection.",
      "They absorb external cosmic radiation from deep space.",
      "They consist of solid carbon rather than hydrogen plasma.",
      "They are shadows cast by passing planets."
    ],
    "correctAnswer": "They are cooler than the surrounding solar plasma due to blocked heat convection.",
    "babyExplanation": "🍼 Nalar Bayi: Bintik matahari kelihatan gelap karena suhunya lebih dingin (3800 K vs 5800 K) akibat medan magnet yang menahan aliran panas dari dalam!",
    "workedExample": {
      "modelPrompt": "Why do sunspots appear dark?",
      "correctAnswer": "They are cooler than surrounding plasma.",
      "babyLogic": "Fakta suhu lebih dingin."
    }
  },
  {
    "id": "ibt-39",
    "type": "reading",
    "skillCategory": "Fact & Negative Fact",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 3 (Fact & Negative Fact)",
    "academicTopic": "Zoology",
    "passageSnippet": "Echolocating bats emit high-frequency ultrasonic clicks and interpret returning acoustic echoes to construct a three-dimensional spatial map of their environment. By modulating sound duration and frequency, microbats can determine the precise distance, trajectory, velocity, and surface texture of flying insect prey.",
    "questionPrompt": "According to the passage, microbats can calculate all of the following details about prey EXCEPT:",
    "options": [
      "internal prey body temperature",
      "distance to the target",
      "flying velocity of the insect",
      "surface texture of the prey"
    ],
    "correctAnswer": "internal prey body temperature",
    "babyExplanation": "🍼 Nalar Bayi: Soal EXCEPT: sonar kelelawar bisa mendeteksi jarak, kecepatan, dan tekstur, tapi TIDAK BISA mendeteksi suhu tubuh bagian dalam serangga!",
    "workedExample": {
      "modelPrompt": "Echolocation reveals distance, speed, and texture EXCEPT...",
      "correctAnswer": "temperature",
      "babyLogic": "Suhu tubuh tidak bisa dideteksi oleh pantulan suara."
    }
  },
  {
    "id": "ibt-40",
    "type": "reading",
    "skillCategory": "Fact & Negative Fact",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 3 (Fact & Negative Fact)",
    "academicTopic": "Glacial Geology",
    "passageSnippet": "During the Last Glacial Maximum, massive continental ice sheets locked up millions of cubic kilometers of seawater. Global sea levels dropped by approximately 120 meters, exposing continental shelves and establishing land bridges, such as the Bering Strait corridor connecting Asia and North America.",
    "questionPrompt": "According to the passage, which condition enabled the formation of the Bering land bridge?",
    "options": [
      "A drop in global sea levels of roughly 120 meters caused by ice accumulation.",
      "Tectonic uplifting of the ocean floor in the Pacific basin.",
      "Intense volcanic activity creating basaltic causeways.",
      "The complete evaporation of the Arctic Ocean."
    ],
    "correctAnswer": "A drop in global sea levels of roughly 120 meters caused by ice accumulation.",
    "babyExplanation": "🍼 Nalar Bayi: Jembatan darat Bering muncul karena es raksasa mengunci air laut sehingga permukaan air laut dunia surut turun sekitar 120 meter!",
    "workedExample": {
      "modelPrompt": "What created the land bridge?",
      "correctAnswer": "A drop in global sea levels.",
      "babyLogic": "Permukaan air laut turun membongkar daratan."
    }
  },
  {
    "id": "ibt-41",
    "type": "reading",
    "skillCategory": "Fact & Negative Fact",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 3 (Fact & Negative Fact)",
    "academicTopic": "Internet History",
    "passageSnippet": "ARPANET, the precursor to the modern internet, introduced packet-switching technology in 1969. Unlike traditional circuit-switched telephone networks that required a dedicated physical line between callers, packet switching segmented digital messages into discrete chunks that routed independently across redundant network nodes.",
    "questionPrompt": "According to the passage, how did ARPANET differ from traditional telephone networks?",
    "options": [
      "It broke data into chunks that traveled independently without dedicated physical lines.",
      "It relied entirely on copper telephone wires between caller pairs.",
      "It was designed exclusively for commercial financial transactions.",
      "It prevented messages from being rerouted through alternative nodes."
    ],
    "correctAnswer": "It broke data into chunks that traveled independently without dedicated physical lines.",
    "babyExplanation": "🍼 Nalar Bayi: Telepon lama butuh kabel fisik khusus yang nyambung langsung, sedangkan ARPANET memecah data jadi paket-paket kecil mandiri!",
    "workedExample": {
      "modelPrompt": "How did packet switching differ?",
      "correctAnswer": "It did not require dedicated physical lines.",
      "babyLogic": "Paket mandiri tanpa jalur khusus."
    }
  },
  {
    "id": "ibt-42",
    "type": "reading",
    "skillCategory": "Fact & Negative Fact",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 3 (Fact & Negative Fact)",
    "academicTopic": "Desert Ecology",
    "passageSnippet": "The kangaroo rat never drinks liquid water throughout its entire lifecycle. Instead, it derives moisture entirely through metabolic water generated as a byproduct of cellular oxidation of dry seeds. Furthermore, its kidneys concentrate urine to an extraordinary degree, minimizing physiological moisture loss.",
    "questionPrompt": "According to the passage, the kangaroo rat survives without drinking water because it:",
    "options": [
      "generates water internally during the digestion of dry seeds",
      "absorbs atmospheric moisture through its skin at night",
      "consumes succulent cactus fruit exclusively",
      "hibernates underground during dry seasons"
    ],
    "correctAnswer": "generates water internally during the digestion of dry seeds",
    "babyExplanation": "🍼 Nalar Bayi: Tikus kanguru gurun dapat air dari reaksi metabolisme internal sel tubuhnya saat membakar biji-bijian kering, bukan dari minum air!",
    "workedExample": {
      "modelPrompt": "How does the kangaroo rat obtain water?",
      "correctAnswer": "Via metabolic oxidation of seeds.",
      "babyLogic": "Air metabolik dari pencernaan biji."
    }
  },
  {
    "id": "ibt-43",
    "type": "reading",
    "skillCategory": "Fact & Negative Fact",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 3 (Fact & Negative Fact)",
    "academicTopic": "Oceanography",
    "passageSnippet": "The Great Ocean Conveyor Belt is driven by thermohaline circulation. In the North Atlantic, cold, saline surface water becomes exceptionally dense and sinks toward the abyss, pulling warm tropical waters northward and regulating global climatic temperatures.",
    "questionPrompt": "According to the passage, what causes North Atlantic water to sink to the ocean floor?",
    "options": [
      "Its high salinity and cold temperature increase its density.",
      "Undersea earthquakes create suction trenches.",
      "Evaporation removes all salt from the surface layer.",
      "Tropical hurricanes force surface currents downward."
    ],
    "correctAnswer": "Its high salinity and cold temperature increase its density.",
    "babyExplanation": "🍼 Nalar Bayi: Air di Atlantik Utara sangat dingin dan berkadar garam tinggi, menjadikannya super padat/berat (dense) sehingga tenggelam ke dasar laut!",
    "workedExample": {
      "modelPrompt": "Why does water sink in North Atlantic?",
      "correctAnswer": "High salinity and cold temperatures make it dense.",
      "babyLogic": "Massa jenis air dingin dan asin lebih berat."
    }
  },
  {
    "id": "ibt-44",
    "type": "reading",
    "skillCategory": "Fact & Negative Fact",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 3 (Fact & Negative Fact)",
    "academicTopic": "Microbiology",
    "passageSnippet": "Viruses lack cellular machinery, ribosomes, and metabolic pathways. Consequently, they cannot replicate independently and must hijack the biochemical synthesis apparatus of a living host cell to produce new virions.",
    "questionPrompt": "According to the passage, why are viruses unable to reproduce on their own?",
    "options": [
      "They lack ribosomes and the cellular apparatus needed for independent metabolism.",
      "Their genetic material degrades instantly outside host bloodstreams.",
      "Host cells destroy their nucleic acid cores before replication.",
      "They are composed purely of inorganic mineral compounds."
    ],
    "correctAnswer": "They lack ribosomes and the cellular apparatus needed for independent metabolism.",
    "babyExplanation": "🍼 Nalar Bayi: Virus tidak punya mesin sel dan ribosom sendiri, jadi wajib membajak sel inang yang hidup untuk memperbanyak diri!",
    "workedExample": {
      "modelPrompt": "Why can't viruses reproduce independently?",
      "correctAnswer": "They lack cellular machinery and ribosomes.",
      "babyLogic": "Tidak punya mesin sintesis mandiri."
    }
  },
  {
    "id": "ibt-45",
    "type": "reading",
    "skillCategory": "Fact & Negative Fact",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 3 (Fact & Negative Fact)",
    "academicTopic": "Materials Engineering",
    "passageSnippet": "Carbon nanotubes possess tensile strength sixty times greater than high-carbon steel, along with exceptional thermal conductivity and lightweight molecular density, making them prime candidates for next-generation aerospace composites.",
    "questionPrompt": "All of the following are cited as properties of carbon nanotubes EXCEPT:",
    "options": [
      "heavy gravitational mass",
      "extraordinary tensile strength",
      "superior thermal conductivity",
      "lightweight molecular density"
    ],
    "correctAnswer": "heavy gravitational mass",
    "babyExplanation": "🍼 Nalar Bayi: Soal EXCEPT: teks menyebut serat karbon sangat ringan (lightweight), jadi opsi 'heavy gravitational mass' (berat) adalah SALAH!",
    "workedExample": {
      "modelPrompt": "Properties of nanotubes include all EXCEPT...",
      "correctAnswer": "heavy mass",
      "babyLogic": "Karbon nanotube itu ringan, bukan berat!"
    }
  },
  {
    "id": "ibt-46",
    "type": "reading",
    "skillCategory": "Fact & Negative Fact",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 3 (Fact & Negative Fact)",
    "academicTopic": "Entomology",
    "passageSnippet": "Honeybee foragers communicate the distance and directional heading of floral nectar through the waggle dance. The angle of the central waggle run relative to gravity encodes the angle between the sun and the food source, while the duration of the waggle indicates the distance to the flower patch.",
    "questionPrompt": "According to the passage, what information does the duration of the waggle dance convey?",
    "options": [
      "The distance from the hive to the floral resource.",
      "The chemical sugar concentration of the nectar.",
      "The presence of predatory hornets nearby.",
      "The compass direction towards the sun."
    ],
    "correctAnswer": "The distance from the hive to the floral resource.",
    "babyExplanation": "🍼 Nalar Bayi: Durasi tarian lebah menunjukkan JARAK tempuh (distance), sedangkan sudut kemiringan menunjukkan ARAH kompas (direction)!",
    "workedExample": {
      "modelPrompt": "What does dance duration encode?",
      "correctAnswer": "Distance to the food patch.",
      "babyLogic": "Durasi = jarak."
    }
  },
  {
    "id": "ibt-47",
    "type": "reading",
    "skillCategory": "Fact & Negative Fact",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 3 (Fact & Negative Fact)",
    "academicTopic": "Economic History",
    "passageSnippet": "The Gold Standard established fixed currency exchange rates by binding national paper money directly to a specified weight of gold bullion. While it stabilized international inflation during the late 19th century, it severely constrained government flexibility to counteract economic depressions by increasing money supply.",
    "questionPrompt": "According to the passage, what was a major drawback of the Gold Standard?",
    "options": [
      "It limited government ability to expand monetary supply during depressions.",
      "It caused rampant hyperinflation throughout the 19th century.",
      "It eliminated international commerce between participating nations.",
      "It allowed governments to print unlimited paper currency."
    ],
    "correctAnswer": "It limited government ability to expand monetary supply during depressions.",
    "babyExplanation": "🍼 Nalar Bayi: Kelemahan sistem standar emas: pemerintah tidak bisa mencetak uang untuk menolong ekonomi yang sedang krisis lesu!",
    "workedExample": {
      "modelPrompt": "What was the disadvantage of Gold Standard?",
      "correctAnswer": "It restricted monetary stimulus during slumps.",
      "babyLogic": "Membatasi fleksibilitas stimulus uang."
    }
  },
  {
    "id": "ibt-48",
    "type": "reading",
    "skillCategory": "Fact & Negative Fact",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 3 (Fact & Negative Fact)",
    "academicTopic": "Volcanology",
    "passageSnippet": "The 1815 eruption of Mount Tambora injected approximately 100 million tons of sulfur aerosols into the stratosphere. The resulting aerosol veil reflected incoming solar radiation, causing the 'Year Without a Summer' in 1816, marked by widespread crop failures across North America and Europe.",
    "questionPrompt": "According to the passage, the global cooling in 1816 was directly caused by:",
    "options": [
      "stratospheric sulfur aerosols reflecting incoming sunlight",
      "massive volcanic ash burying European farmland",
      "a sudden decrease in the sun's internal nuclear fusion",
      "global ocean currents halting their thermohaline flow"
    ],
    "correctAnswer": "stratospheric sulfur aerosols reflecting incoming sunlight",
    "babyExplanation": "🍼 Nalar Bayi: Letusan Tambora menyemburkan 100 juta ton sulfur ke stratosfer yang memantulkan sinar matahari kembali ke luar angkasa sehingga bumi dingin!",
    "workedExample": {
      "modelPrompt": "What caused the 1816 cooling?",
      "correctAnswer": "Aerosols reflecting solar radiation.",
      "babyLogic": "Aerosol sulfur memantulkan sinar surya."
    }
  },
  {
    "id": "ibt-49",
    "type": "reading",
    "skillCategory": "Fact & Negative Fact",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 3 (Fact & Negative Fact)",
    "academicTopic": "Geothermal Energy",
    "passageSnippet": "Enhanced Geothermal Systems (EGS) inject pressurized cold water deep into hot, impermeable basement rocks to create artificial micro-fractures. Once heated by contact with deep subterranean rock, the water is pumped back to the surface to generate turbine steam.",
    "questionPrompt": "According to the passage, why is pressurized water pumped into EGS reservoirs?",
    "options": [
      "To fracture impermeable hot rock so heat can be harvested.",
      "To cool subterranean magma chambers permanently.",
      "To dissolve valuable mineral deposits for mining.",
      "To measure underground seismic fault lines."
    ],
    "correctAnswer": "To fracture impermeable hot rock so heat can be harvested.",
    "babyExplanation": "🍼 Nalar Bayi: Air bertekanan disuntikkan ke dalam batu panas yang padat untuk membuat retakan mikro agar panas bumi bisa diserap!",
    "workedExample": {
      "modelPrompt": "Why inject pressurized water?",
      "correctAnswer": "To create fractures in hot dry rock.",
      "babyLogic": "Membuat retakan buatan penangkap panas."
    }
  },
  {
    "id": "ibt-50",
    "type": "reading",
    "skillCategory": "Fact & Negative Fact",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 3 (Fact & Negative Fact)",
    "academicTopic": "Sociolinguistics",
    "passageSnippet": "Pidgin languages emerge as rudimentary vehicular tongues between speech communities lacking a common language. When children born into these bilingual environments acquire the pidgin as their primary mother tongue, they spontaneously systematize grammatical rules, transforming the pidgin into a fully fledged creole.",
    "questionPrompt": "According to the passage, how does a creole differ fundamentally from a pidgin?",
    "options": [
      "A creole has acquired native speakers and a standardized grammar.",
      "A creole lacks formal syntax and grammatical agreements.",
      "A creole is spoken exclusively in trade transactions.",
      "A pidgin is spoken natively by multiple generations."
    ],
    "correctAnswer": "A creole has acquired native speakers and a standardized grammar.",
    "babyExplanation": "🍼 Nalar Bayi: Perbedaan utama: Creole sudah punya penutur asli (anak-anak sejak bayi) dan tata bahasa tata aturan yang terstruktur rapi!",
    "workedExample": {
      "modelPrompt": "How is a creole born?",
      "correctAnswer": "When children acquire a pidgin as their native tongue.",
      "babyLogic": "Creole adalah pidgin yang sudah jadi bahasa ibu beraturan."
    }
  },
  {
    "id": "ibt-51",
    "type": "reading",
    "skillCategory": "Fact & Negative Fact",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 3 (Fact & Negative Fact)",
    "academicTopic": "Neuroscience",
    "passageSnippet": "The blood-brain barrier is composed of endothelial cells joined by exceptionally tight junctions, supported by astrocyte end-feet. This biochemical seal permits lipid-soluble molecules and glucose to pass while strictly blocking neurotoxic compounds and large water-soluble drugs.",
    "questionPrompt": "According to the passage, all of the following can cross the blood-brain barrier EXCEPT:",
    "options": [
      "large water-soluble pharmaceuticals",
      "glucose molecules",
      "essential oxygen",
      "lipid-soluble compounds"
    ],
    "correctAnswer": "large water-soluble pharmaceuticals",
    "babyExplanation": "🍼 Nalar Bayi: Soal EXCEPT: glukosa dan zat larut lemak bisa tembus, tapi obat besar yang larut air (large water-soluble drugs) DIBLOKIR!",
    "workedExample": {
      "modelPrompt": "What cannot cross the barrier?",
      "correctAnswer": "Large water-soluble drugs.",
      "babyLogic": "Obat besar larut air diblokir."
    }
  },
  {
    "id": "ibt-52",
    "type": "reading",
    "skillCategory": "Fact & Negative Fact",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 3 (Fact & Negative Fact)",
    "academicTopic": "Optics",
    "passageSnippet": "Fiber-optic cables transmit data through total internal reflection. When light traveling through a dense silica core strikes the cladding boundary at an angle greater than the critical angle, zero light refracts outward; instead, one hundred percent of the light reflects back through the core.",
    "questionPrompt": "According to the passage, total internal reflection occurs inside optical fibers when:",
    "options": [
      "light strikes the cladding boundary at an angle exceeding the critical angle",
      "the cable is submerged in liquid nitrogen",
      "light intensity drops below the operational threshold",
      "the cladding is constructed from reflective silver foil"
    ],
    "correctAnswer": "light strikes the cladding boundary at an angle exceeding the critical angle",
    "babyExplanation": "🍼 Nalar Bayi: Pemantulan internal total terjadi saat sudut cahaya yang menabrak dinding kabel lebih besar dari sudut kritis (critical angle)!",
    "workedExample": {
      "modelPrompt": "When does total internal reflection occur?",
      "correctAnswer": "When the angle of incidence exceeds critical angle.",
      "babyLogic": "Sudut lebih besar dari sudut kritis."
    }
  },
  {
    "id": "ibt-53",
    "type": "reading",
    "skillCategory": "Inference",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 4 (Inference & Rhetorical Purpose)",
    "academicTopic": "Evolutionary Biology",
    "passageSnippet": "While modern cetaceans spend their entire lives in ocean waters, their embryos briefly develop limb buds and nostrils positioned near the snout tip before migrating to the apex of the cranium during gestation.",
    "questionPrompt": "What can be inferred from the embryonic development of modern whales?",
    "options": [
      "Ancestors of modern cetaceans were land mammals with nostrils on their snouts.",
      "Whale embryos cannot survive without access to atmospheric air.",
      "Marine mammals developed flippers before fish developed fins.",
      "Snout nostrils allow adult whales to swim faster than ancestors."
    ],
    "correctAnswer": "Ancestors of modern cetaceans were land mammals with nostrils on their snouts.",
    "babyExplanation": "🍼 Nalar Bayi: Janin paus menumbuhkan kuncup kaki dan lubang hidung di ujung moncong saat di kandungan membuktikan bahwa nenek moyang paus dulunya adalah hewan darat!",
    "workedExample": {
      "modelPrompt": "Whale embryos develop limb buds briefly.",
      "correctAnswer": "Whales evolved from land-dwelling mammals.",
      "babyLogic": "Inferensi evolusi berdasarkan embriologi komparatif."
    }
  },
  {
    "id": "ibt-54",
    "type": "reading",
    "skillCategory": "Inference",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 4 (Inference & Rhetorical Purpose)",
    "academicTopic": "Archaeology",
    "passageSnippet": "Excavations at the ancient trade hub revealed Roman amphorae alongside Chinese Han Dynasty silk remnants, yet zero evidence of direct diplomatic correspondence between Rome and Chang'an was ever recorded.",
    "questionPrompt": "Why does the author mention 'zero evidence of direct diplomatic correspondence'?",
    "options": [
      "To emphasize that transcontinental trade operated through intermediary merchant networks.",
      "To suggest that Roman goods were counterfeited by regional artisans.",
      "To argue that Rome and Han China were engaged in continuous naval warfare.",
      "To demonstrate that ancient trade routes were completely abandoned."
    ],
    "correctAnswer": "To emphasize that transcontinental trade operated through intermediary merchant networks.",
    "babyExplanation": "🍼 Nalar Bayi: Barang Romawi dan sutra Tiongkok ketemu di satu tempat tapi kaisar mereka gak pernah surat-suratan langsung, artinya ada pedagang perantara (tengkulak/jalur sutra) di tengah-tengahnya!",
    "workedExample": {
      "modelPrompt": "Roman coins in China without treaties.",
      "correctAnswer": "Trade relied on intermediate merchant caravans.",
      "babyLogic": "Tujuan retoris: membuktikan peran perantara dagang."
    }
  },
  {
    "id": "ibt-55",
    "type": "reading",
    "skillCategory": "Inference",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 4 (Inference & Rhetorical Purpose)",
    "academicTopic": "Climate History",
    "passageSnippet": "Dendrochronological samples from 14th-century European oaks display compressed, narrow growth rings from 1315 to 1317, coinciding with contemporary chronicles lamenting widespread famine and relentless unseasonable downpours.",
    "questionPrompt": "What can be inferred about the years 1315 to 1317 from tree ring evidence?",
    "options": [
      "Cold and excessively wet weather severely stunted agricultural and arboreal growth.",
      "European forests were clear-cut to expand arable agricultural land.",
      "Unprecedented heatwaves caused severe drought and wildfire outbreaks.",
      "Oaks stopped growing because of a localized fungal blight."
    ],
    "correctAnswer": "Cold and excessively wet weather severely stunted agricultural and arboreal growth.",
    "babyExplanation": "🍼 Nalar Bayi: Lingkaran pohon yang menyempit rapat menandakan cuaca buruk dingin dan hujan basah berkepanjangan yang merusak pertumbuhan pohon dan panen pangan!",
    "workedExample": {
      "modelPrompt": "Narrow rings during wet chronicles.",
      "correctAnswer": "Adverse weather suppressed tree and crop development.",
      "babyLogic": "Inferensi kondisi iklim lampau dari lingkaran pohon."
    }
  },
  {
    "id": "ibt-56",
    "type": "reading",
    "skillCategory": "Inference",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 4 (Inference & Rhetorical Purpose)",
    "academicTopic": "Planetary Science",
    "passageSnippet": "Europa's icy crust exhibits chaotic surface fracture patterns and minimal impact cratering, suggesting that subterranean heat plumes persistently resurface the moon's exterior.",
    "questionPrompt": "What can be inferred about the age of Europa's visible surface?",
    "options": [
      "It is geologically young compared to heavily cratered bodies like Callisto.",
      "It has remained completely frozen and inert since the formation of the solar system.",
      "It is older than the surfaces of all other moons in the Jovian system.",
      "It was formed by a recent catastrophic asteroid collision."
    ],
    "correctAnswer": "It is geologically young compared to heavily cratered bodies like Callisto.",
    "babyExplanation": "🍼 Nalar Bayi: Sedikitnya kawah tabrakan meteor menandakan permukaannya selalu diperbarui (masih muda secara geologis) oleh panas dari dalam!",
    "workedExample": {
      "modelPrompt": "Few craters indicate active resurfacing.",
      "correctAnswer": "A geologically youthful surface.",
      "babyLogic": "Kawah sedikit = permukaan masih muda."
    }
  },
  {
    "id": "ibt-57",
    "type": "reading",
    "skillCategory": "Inference",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 4 (Inference & Rhetorical Purpose)",
    "academicTopic": "Computer Networking",
    "passageSnippet": "Early network routing protocols used static routing tables manually compiled by system administrators. However, as the number of interconnected autonomous systems skyrocketed into the thousands, manual table updates became mathematically intractable.",
    "questionPrompt": "Why does the author mention that manual updates became 'mathematically intractable'?",
    "options": [
      "To explain why dynamic routing protocols like BGP were urgently developed.",
      "To argue that human administrators are prone to arithmetic errors.",
      "To demonstrate that large networks require fewer connections.",
      "To suggest that the internet should have been partitioned into isolated subnets."
    ],
    "correctAnswer": "To explain why dynamic routing protocols like BGP were urgently developed.",
    "babyExplanation": "🍼 Nalar Bayi: Penulis menyebut pembaruan manual mustahil secara matematika untuk menjelaskan ALASAN MENGAPA protokol routing dinamis otomatis (seperti BGP) diciptakan!",
    "workedExample": {
      "modelPrompt": "Manual routing became impossible.",
      "correctAnswer": "To justify the necessity of automated dynamic routing.",
      "babyLogic": "Tujuan retoris: menjelaskan motivasi inovasi."
    }
  },
  {
    "id": "ibt-58",
    "type": "reading",
    "skillCategory": "Inference",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 4 (Inference & Rhetorical Purpose)",
    "academicTopic": "Anthropology",
    "passageSnippet": "Neanderthal fossil remains consistently exhibit high levels of healed traumatic fractures comparable to the injury profiles of modern professional rodeo performers.",
    "questionPrompt": "Why does the author compare Neanderthal injuries to those of 'modern professional rodeo performers'?",
    "options": [
      "To illustrate that Neanderthals engaged in hazardous, close-contact hunting of large game.",
      "To suggest that Neanderthals domesticated horses and wild cattle for sport.",
      "To demonstrate that Neanderthals lived in modern rodeo arenas.",
      "To argue that Neanderthals suffered from fragile bone diseases."
    ],
    "correctAnswer": "To illustrate that Neanderthals engaged in hazardous, close-contact hunting of large game.",
    "babyExplanation": "🍼 Nalar Bayi: Analogi atlet rodeo: cedera Neanderthal mirip karena mereka berburu hewan raksasa ganas dari jarak sangat dekat berhadapan langsung!",
    "workedExample": {
      "modelPrompt": "Injuries like rodeo clowns.",
      "correctAnswer": "To emphasize dangerous close-range hunting tactics.",
      "babyLogic": "Tujuan analogi: menggambarkan bahaya berburu jarak dekat."
    }
  },
  {
    "id": "ibt-59",
    "type": "reading",
    "skillCategory": "Inference",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 4 (Inference & Rhetorical Purpose)",
    "academicTopic": "Cell Biology",
    "passageSnippet": "Mitochondria possess circular DNA, replicate through binary fission, and have double membranes, leading biologists to conclude that they originated as autonomous prokaryotic organisms engulfed by ancestral eukaryotic cells.",
    "questionPrompt": "What can be inferred from the endosymbiotic theory of mitochondria?",
    "options": [
      "Eukaryotic cells represent complex evolutionary chimeras of once-separate organisms.",
      "Mitochondria can survive indefinitely outside living animal cells today.",
      "Prokaryotes evolved from degenerated animal mitochondria.",
      "Binary fission is unique to multicellular eukaryotic organelles."
    ],
    "correctAnswer": "Eukaryotic cells represent complex evolutionary chimeras of once-separate organisms.",
    "babyExplanation": "🍼 Nalar Bayi: Mitokondria punya DNA bulat dan membelah sendiri, membuktikan bahwa sel manusia kita sebenarnya gabungan kerja sama dua makhluk purba yang bersatu!",
    "workedExample": {
      "modelPrompt": "Mitochondria have their own circular DNA.",
      "correctAnswer": "Complex cells evolved through symbiotic merger.",
      "babyLogic": "Inferensi teori endosimbiosis."
    }
  },
  {
    "id": "ibt-60",
    "type": "reading",
    "skillCategory": "Inference",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 4 (Inference & Rhetorical Purpose)",
    "academicTopic": "Economics",
    "passageSnippet": "When the central bank slashed lending rates near zero, corporate bond borrowing skyrocketed, yet business capital expenditure in physical factories remained stagnant.",
    "questionPrompt": "What does the passage imply about corporate response to low interest rates?",
    "options": [
      "Corporations used cheap debt for financial maneuvers rather than expanding productive output.",
      "Zero interest rates prevented companies from acquiring commercial credit.",
      "Factories were already operating at one hundred percent capacity.",
      "Central banks forced corporations to build unwanted manufacturing plants."
    ],
    "correctAnswer": "Corporations used cheap debt for financial maneuvers rather than expanding productive output.",
    "babyExplanation": "🍼 Nalar Bayi: Pinjaman membludak tapi pabrik fisik gak nambah, artinya perusahaan memakai pinjaman murah buat beli kembali saham/keuangan, bukan bangun pabrik riil!",
    "workedExample": {
      "modelPrompt": "Debt grew but factories didn't.",
      "correctAnswer": "Firms favored financial actions over physical capital investment.",
      "babyLogic": "Inferensi ekonomi moneter."
    }
  },
  {
    "id": "ibt-61",
    "type": "reading",
    "skillCategory": "Inference",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 4 (Inference & Rhetorical Purpose)",
    "academicTopic": "Oceanography",
    "passageSnippet": "Deep-sea benthic organisms exhibit gigantism, characterized by body sizes significantly exceeding shallow-water counterparts. Scientists suspect that low temperatures and high hydrostatic pressure slow metabolic rates, extending longevity and permitting prolonged physical growth.",
    "questionPrompt": "What can be inferred about the lifespan of deep-sea giant isopods?",
    "options": [
      "They generally live longer than related shallow-water species.",
      "They reproduce at much younger ages than coastal crustaceans.",
      "They experience high predation rates in the abyssal zone.",
      "Their metabolism is identical to tropical reef organisms."
    ],
    "correctAnswer": "They generally live longer than related shallow-water species.",
    "babyExplanation": "🍼 Nalar Bayi: Metabolisme lambat akibat dingin dan tekanan tinggi memperpanjang usia hidup (extending longevity), jadi umur mereka lebih panjang!",
    "workedExample": {
      "modelPrompt": "Slow metabolism extends longevity.",
      "correctAnswer": "Benthic giants have longer lifespans than shallow species.",
      "babyLogic": "Inferensi usia hidup biota laut dalam."
    }
  },
  {
    "id": "ibt-62",
    "type": "reading",
    "skillCategory": "Inference",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 4 (Inference & Rhetorical Purpose)",
    "academicTopic": "Psychology",
    "passageSnippet": "In blind taste experiments, subjects consistently rated wine labeled at ninety dollars as significantly superior in flavor to the identical vintage presented with a ten-dollar price tag, activating neural pleasure centers in the orbitofrontal cortex.",
    "questionPrompt": "What does the experiment demonstrate regarding human sensory perception?",
    "options": [
      "Perceived sensory enjoyment is heavily modulated by psychological expectations and contextual cues.",
      "The orbitofrontal cortex can detect chemical differences undetectable by taste buds.",
      "Expensive wines always possess superior chemical balance than cheap wines.",
      "Human taste receptors are entirely independent of commercial marketing."
    ],
    "correctAnswer": "Perceived sensory enjoyment is heavily modulated by psychological expectations and contextual cues.",
    "babyExplanation": "🍼 Nalar Bayi: Anggur yang sama dicap 90 dolar terasa lebih nikmat di otak daripada dicap 10 dolar, artinya persepsi nikmat kita dipengaruhi ekspektasi harga!",
    "workedExample": {
      "modelPrompt": "Same wine rated higher with expensive tag.",
      "correctAnswer": "Expectations influence subjective sensory perception.",
      "babyLogic": "Inferensi psikologi sensorik."
    }
  },
  {
    "id": "ibt-63",
    "type": "reading",
    "skillCategory": "Inference",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 4 (Inference & Rhetorical Purpose)",
    "academicTopic": "Paleoclimatology",
    "passageSnippet": "Oxygen isotope ratios (O-18 to O-16) trapped in benthic foraminifera shells correlate inversely with ocean temperature. Deep ocean sediment cores thus provide an uninterrupted temperature ledger spanning millions of years.",
    "questionPrompt": "Why does the author discuss 'foraminifera shells'?",
    "options": [
      "To illustrate how scientists reconstruct prehistoric ocean temperature records.",
      "To argue that marine organisms caused prehistoric climate cooling.",
      "To demonstrate that oceanic oxygen levels have decreased over geological time.",
      "To describe the anatomy of single-celled benthic organisms."
    ],
    "correctAnswer": "To illustrate how scientists reconstruct prehistoric ocean temperature records.",
    "babyExplanation": "🍼 Nalar Bayi: Penulis membahas cangkang foraminifera untuk menunjukkan CARA para ilmuwan membaca suhu laut masa lampau dari fosil jutaan tahun lalu!",
    "workedExample": {
      "modelPrompt": "Isotopes in shells reflect water temperature.",
      "correctAnswer": "To explain proxy methods for paleoclimate reconstruction.",
      "babyLogic": "Tujuan retoris penjelasan fosil."
    }
  },
  {
    "id": "ibt-64",
    "type": "reading",
    "skillCategory": "Inference",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 4 (Inference & Rhetorical Purpose)",
    "academicTopic": "Materials Engineering",
    "passageSnippet": "Graphene sheets boast extraordinary electrical conductivity and atomic thinness. However, the absence of an intrinsic electronic bandgap complicates its direct substitution for silicon in digital logic transistors.",
    "questionPrompt": "What can be inferred about the engineering hurdle in using graphene for computer processors?",
    "options": [
      "Graphene cannot easily be switched off to represent digital zero states.",
      "Graphene melts at standard room temperatures.",
      "Silicon conducts electricity more efficiently than graphene.",
      "Graphene is too thick to integrate onto silicon wafers."
    ],
    "correctAnswer": "Graphene cannot easily be switched off to represent digital zero states.",
    "babyExplanation": "🍼 Nalar Bayi: Tanpa bandgap, listrik di grafena terus mengalir dan sulit dimatikan (susah jadi angka 0 biner), sehingga belum bisa ganti silikon!",
    "workedExample": {
      "modelPrompt": "No bandgap means inability to turn off.",
      "correctAnswer": "Graphene lacks natural on/off switching for binary logic.",
      "babyLogic": "Inferensi sifat semikonduktor."
    }
  },
  {
    "id": "ibt-65",
    "type": "reading",
    "skillCategory": "Inference",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 4 (Inference & Rhetorical Purpose)",
    "academicTopic": "Ecology",
    "passageSnippet": "When wolves were reintroduced to Yellowstone National Park in 1995, elk avoided river valleys to escape ambushes. Consequently, overbrowsed willow stands regenerated, stabilizing riverbanks and attracting beavers whose dams created wetland habitats for waterfowl and fish.",
    "questionPrompt": "The author describes the reintroduction of wolves primarily to demonstrate:",
    "options": [
      "how top-level carnivores trigger widespread ecological restoration across multiple trophic tiers",
      "that elk populations should be culled through municipal hunting programs",
      "why beavers require human intervention to build functional wetland dams",
      "that riverbanks erode faster when large predators are absent"
    ],
    "correctAnswer": "how top-level carnivores trigger widespread ecological restoration across multiple trophic tiers",
    "babyExplanation": "🍼 Nalar Bayi: Kisah serigala di Yellowstone adalah contoh klasik Trophic Cascade: predator puncak memperbaiki seluruh ekosistem pohon, sungai, dan berang-berang!",
    "workedExample": {
      "modelPrompt": "Wolves changed elk behavior and restored trees.",
      "correctAnswer": "To illustrate trophic cascade and ecosystem restoration.",
      "babyLogic": "Tujuan retoris: menjelaskan trophic cascade."
    }
  },
  {
    "id": "ibt-66",
    "type": "reading",
    "skillCategory": "Inference",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 4 (Inference & Rhetorical Purpose)",
    "academicTopic": "History of Technology",
    "passageSnippet": "The Gutenberg printing press lowered the labor cost of book reproduction by over ninety-five percent. Prior to 1450, a monastery scribe required up to a year to produce a single manuscript bible; by 1500, printing workshops had distributed millions of volumes across Europe.",
    "questionPrompt": "What can be inferred about literacy rates in Europe after the mid-15th century?",
    "options": [
      "Widespread book availability fostered a dramatic expansion in reading literacy.",
      "Monasteries retained a strict monopoly over book dissemination.",
      "Only Latin scholars were permitted to purchase printed bibles.",
      "Book costs increased because of scarce paper supplies."
    ],
    "correctAnswer": "Widespread book availability fostered a dramatic expansion in reading literacy.",
    "babyExplanation": "🍼 Nalar Bayi: Saat jutaan buku murah beredar menggantikan tulisan tangan lambat, orang biasa bisa membeli buku dan kemampuan membaca melesat!",
    "workedExample": {
      "modelPrompt": "Millions of cheap books printed.",
      "correctAnswer": "Literacy expanded due to unprecedented text access.",
      "babyLogic": "Inferensi dampak sosial mesin cetak."
    }
  },
  {
    "id": "ibt-67",
    "type": "reading",
    "skillCategory": "Inference",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 4 (Inference & Rhetorical Purpose)",
    "academicTopic": "Medical Science",
    "passageSnippet": "Early vaccinations utilized live-attenuated pathogens that provoked robust, lifelong immunity but carried minor risks of reversion to virulence in immunocompromised individuals. Modern mRNA vaccines instead deliver synthetic instructions encoding specific viral antigens without introducing live infectious agents.",
    "questionPrompt": "What can be inferred about the safety profile of mRNA vaccines compared to live-attenuated vaccines in immunocompromised patients?",
    "options": [
      "mRNA vaccines eliminate the risk of accidental viral reversion to active disease.",
      "mRNA vaccines require higher dosages to produce equivalent antibodies.",
      "Live vaccines are safer for patients with weakened immune systems.",
      "mRNA vaccines cannot stimulate immune responses without viral adjuvants."
    ],
    "correctAnswer": "mRNA vaccines eliminate the risk of accidental viral reversion to active disease.",
    "babyExplanation": "🍼 Nalar Bayi: Karena vaksin mRNA hanya mengirim resep cetak antigen (bukan virus hidup), risiko virus bermutasi jadi aktif di tubuh pasien lemah adalah NOL!",
    "workedExample": {
      "modelPrompt": "mRNA contains no live pathogen.",
      "correctAnswer": "Eliminates risk of live pathogen reverting to virulence.",
      "babyLogic": "Inferensi keamanan vaksin mRNA."
    }
  },
  {
    "id": "ibt-68",
    "type": "reading",
    "skillCategory": "Inference",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 4 (Inference & Rhetorical Purpose)",
    "academicTopic": "Urban Sociology",
    "passageSnippet": "High-density urban cores with mixed zoning exhibit substantially lower per-capita carbon emissions than sprawling suburban districts reliant on private automobile commutes.",
    "questionPrompt": "Why does the author contrast 'mixed zoning' with 'sprawling suburban districts'?",
    "options": [
      "To emphasize that walkable urban planning reduces individual transportation energy demands.",
      "To suggest that suburban residents consume less electricity than city apartment dwellers.",
      "To argue that automobiles should be banned in rural agricultural towns.",
      "To prove that population density increases air pollution per capita."
    ],
    "correctAnswer": "To emphasize that walkable urban planning reduces individual transportation energy demands.",
    "babyExplanation": "🍼 Nalar Bayi: Penulis mengontraskan kota padat serbaguna dengan pinggiran kota untuk menunjukkan bahwa kota yang bisa jalan kaki jauh lebih hemat energi!",
    "workedExample": {
      "modelPrompt": "Density vs suburban sprawl.",
      "correctAnswer": "To show walkable compact cities reduce personal transit emissions.",
      "babyLogic": "Tujuan kontras retoris tata kota."
    }
  },
  {
    "id": "ibt-69",
    "type": "reading",
    "skillCategory": "Insert Text",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 5 (Insert Text)",
    "academicTopic": "Computer Architecture",
    "passageSnippet": "Central processing units rely on high-speed cache memory to bridge the performance gap between the processor and slower dynamic RAM. [■] Level 1 cache resides directly on the processor silicon die and operates at clock speeds matching the execution cores. [■] Level 2 and Level 3 caches provide progressively larger storage capacities at slightly slower response times. [■] Without this multi-tiered caching hierarchy, modern processors would waste dozens of clock cycles waiting for instructions to arrive from system memory. [■]",
    "questionPrompt": "Where would the sentence best fit?",
    "options": [
      "Square 3 (After L2 and L3 description)",
      "Square 1 (At the beginning)",
      "Square 2 (After L1 cache)",
      "Square 4 (At the very end)"
    ],
    "correctAnswer": "Square 3 (After L2 and L3 description)",
    "babyExplanation": "🍼 Nalar Bayi: Kalimat yang disisipkan ('This hierarchical design ensures...') merangkum SELURUH desain bertingkat L1, L2, L3, jadi paling pas ditaruh di Kotak 3 setelah L2 dan L3 dijelaskan!",
    "workedExample": {
      "modelPrompt": "Processors use memory hierarchy. [■] L1 is fast. [■] L2 is larger. [■] This tiered setup speeds up execution. [■]",
      "correctAnswer": "Square 3",
      "babyLogic": "Rangkuman kesimpulan desain bertingkat diletakkan setelah tingkatan dijabarkan."
    },
    "insertedSentence": "This hierarchical design ensures that the most frequently executed instructions are accessible with near-zero latency."
  },
  {
    "id": "ibt-70",
    "type": "reading",
    "skillCategory": "Insert Text",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 5 (Insert Text)",
    "academicTopic": "Photosynthesis",
    "passageSnippet": "Plants convert radiant solar energy into chemical energy through the light-dependent reactions of photosynthesis. [■] Photons strike chlorophyll pigments embedded within thylakoid membranes, exciting electrons to higher energy states. [■] These energized electrons travel through an electron transport chain, generating ATP and NADPH. [■] These chemical carriers subsequently power the Calvin cycle in the stroma to synthesize glucose molecules. [■]",
    "questionPrompt": "Where would the sentence best fit?",
    "options": [
      "Square 2 (After electrons are excited)",
      "Square 1 (At the start)",
      "Square 3 (After transport chain)",
      "Square 4 (At the end)"
    ],
    "correctAnswer": "Square 2 (After electrons are excited)",
    "babyExplanation": "🍼 Nalar Bayi: Elektron melompat keluar -> air dipecah untuk MENGGANTIKAN elektron yang hilang tadi ('replenish the lost electrons'), jadi tepat di Kotak 2!",
    "workedExample": {
      "modelPrompt": "Electrons jump away. [■] Water is split to replace them. [■]",
      "correctAnswer": "Square 2",
      "babyLogic": "Hubungan sebab-akibat penggantian elektron yang terlempar."
    },
    "insertedSentence": "Water molecules are simultaneously cleaved to replenish the lost electrons, releasing oxygen gas as a byproduct."
  },
  {
    "id": "ibt-71",
    "type": "reading",
    "skillCategory": "Insert Text",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 5 (Insert Text)",
    "academicTopic": "Glacial Retreat",
    "passageSnippet": "Alpine glaciers around the world are retreating at accelerating rates due to rising atmospheric temperatures. [■] As ice melts, it exposes dark, rocky ground beneath the glacier. [■] This exposed rock absorbs far more solar radiation than the reflective white ice that formerly shielded it. [■] Consequently, local surface temperatures rise, hastening the melting of adjacent ice masses. [■]",
    "questionPrompt": "Where would the sentence best fit?",
    "options": [
      "Square 4 (At the very end)",
      "Square 1 (At the beginning)",
      "Square 2 (After rock exposed)",
      "Square 3 (After absorption)"
    ],
    "correctAnswer": "Square 4 (At the very end)",
    "babyExplanation": "🍼 Nalar Bayi: Seluruh paragraf menjelaskan siklus es meleleh -> batu hitam panas -> makin meleleh. Kalimat penutup di Kotak 4 memberi nama resmi fenomena tersebut: 'ice-albedo positive feedback loop'!",
    "workedExample": {
      "modelPrompt": "Cycle repeats itself. [■] This mechanism is called feedback loop.",
      "correctAnswer": "Square 4",
      "babyLogic": "Pemberian nama istilah di akhir penjelasan proses lingkaran setan."
    },
    "insertedSentence": "This self-reinforcing phenomenon is known as the ice-albedo positive feedback loop."
  },
  {
    "id": "ibt-72",
    "type": "reading",
    "skillCategory": "Insert Text",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 5 (Insert Text)",
    "academicTopic": "Aviation Engineering",
    "passageSnippet": "Airplane wings generate lift primarily through their aerodynamically curved cross-section known as an airfoil. [■] Air traveling over the cambered upper surface flows faster than air moving beneath the flat lower surface. [■] According to Bernoulli's principle, higher fluid velocity corresponds to lower static pressure. [■] The resulting pressure differential exerts an upward net force that counteracts the airplane's gravitational weight. [■]",
    "questionPrompt": "Where would the sentence best fit?",
    "options": [
      "Square 3 (After Bernoulli's principle)",
      "Square 1 (At the start)",
      "Square 2 (After flow speed)",
      "Square 4 (At the end)"
    ],
    "correctAnswer": "Square 3 (After Bernoulli's principle)",
    "babyExplanation": "🍼 Nalar Bayi: Prinsip Bernoulli menyatakan kecepatan tinggi = tekanan rendah. MAKA DARI ITU (Consequently), terbentuk zona tekanan rendah di atas sayap!",
    "workedExample": {
      "modelPrompt": "Faster air means lower pressure. [■] Thus low pressure forms on top.",
      "correctAnswer": "Square 3",
      "babyLogic": "Konsekuensi logis dari prinsip fisika Bernoulli."
    },
    "insertedSentence": "Consequently, a zone of reduced atmospheric pressure develops above the wing."
  },
  {
    "id": "ibt-73",
    "type": "reading",
    "skillCategory": "Insert Text",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 5 (Insert Text)",
    "academicTopic": "Archaeology",
    "passageSnippet": "The invention of agriculture roughly ten thousand years ago initiated the Neolithic Revolution. [■] Nomadic hunter-gatherers began cultivating cereal grasses and domesticating wild ungulates. [■] Sedentary farming produced reliable grain surpluses that could be stored in ceramic vessels. [■] These food reserves freed portions of the population from daily subsistence labor, giving rise to specialized artisan crafts and administrative hierarchies. [■]",
    "questionPrompt": "Where would the sentence best fit?",
    "options": [
      "Square 2 (After domestication)",
      "Square 1 (At the beginning)",
      "Square 3 (After grain surpluses)",
      "Square 4 (At the end)"
    ],
    "correctAnswer": "Square 2 (After domestication)",
    "babyExplanation": "🍼 Nalar Bayi: Manusia mulai bertani dan menjinakkan hewan -> untuk pertama kalinya mereka bisa MENETAP permanen (permanent village settlements), jadi di Kotak 2!",
    "workedExample": {
      "modelPrompt": "People farmed. [■] They settled permanently. [■] Surplus grain grew.",
      "correctAnswer": "Square 2",
      "babyLogic": "Hubungan logis dari bertani ke pemukiman permanen."
    },
    "insertedSentence": "For the first time in human history, communities could permanently settle in permanent village settlements."
  },
  {
    "id": "ibt-74",
    "type": "reading",
    "skillCategory": "Insert Text",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 5 (Insert Text)",
    "academicTopic": "Marine Biology",
    "passageSnippet": "Cephalopods exhibit some of the most dynamic camouflage capabilities in the animal kingdom. [■] Their dermis is packed with thousands of pigment-filled saccules called chromatophores. [■] Radial muscle fibers controlled directly by motor neurons expand and contract these sacs in milliseconds. [■] Beneath the chromatophores lie iridophores and leucophores that reflect ambient wavelengths to mimic surrounding coral or sandy substrates. [■]",
    "questionPrompt": "Where would the sentence best fit?",
    "options": [
      "Square 3 (After muscle fibers explanation)",
      "Square 1 (At the start)",
      "Square 2 (After chromatophores definition)",
      "Square 4 (At the end)"
    ],
    "correctAnswer": "Square 3 (After muscle fibers explanation)",
    "babyExplanation": "🍼 Nalar Bayi: Otot menarik kantung warna -> dengan meregangkan kantung warna tersebut ('By selectively stretching different color sacs'), kulit berubah warna!",
    "workedExample": {
      "modelPrompt": "Muscles pull color sacs. [■] Stretching them changes skin hue.",
      "correctAnswer": "Square 3",
      "babyLogic": "Menjelaskan mekanisme otot yang meregangkan kantung pigmen."
    },
    "insertedSentence": "By selectively stretching different color sacs, the animal can instantly alter its skin color and pattern."
  },
  {
    "id": "ibt-75",
    "type": "reading",
    "skillCategory": "Insert Text",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 5 (Insert Text)",
    "academicTopic": "Urban Planning",
    "passageSnippet": "Early 20th-century urban zoning separated industrial factories from residential neighborhoods to protect public health from toxic emissions. [■] However, this rigid separation inadvertently gave rise to modern automobile dependency. [■] Single-family suburban residential tracts were constructed miles away from commercial shopping districts and employment centers. [■] Without viable public rail transit, daily automobile commuting became an unavoidable necessity. [■]",
    "questionPrompt": "Where would the sentence best fit?",
    "options": [
      "Square 4 (At the end after commuting necessity)",
      "Square 1 (At the start)",
      "Square 2 (After auto dependency)",
      "Square 3 (After suburban tracts)"
    ],
    "correctAnswer": "Square 4 (At the end after commuting necessity)",
    "babyExplanation": "🍼 Nalar Bayi: Mobil jadi kebutuhan mutlak -> warga tidak punya alternatif lain untuk urusan belanja sehari-hari tanpa naik mobil, paling pas di Kotak 4 penutup!",
    "workedExample": {
      "modelPrompt": "Cars were mandatory. [■] Residents had no other choices.",
      "correctAnswer": "Square 4",
      "babyLogic": "Mempertegas ketiadaan alternatif transportasi lain."
    },
    "insertedSentence": "Residents were left with virtually no alternative for fulfilling basic daily errands."
  },
  {
    "id": "ibt-76",
    "type": "reading",
    "skillCategory": "Insert Text",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 5 (Insert Text)",
    "academicTopic": "Volcanology",
    "passageSnippet": "Caldera collapses represent some of the most catastrophic geological events on Earth. [■] During colossal eruptions, vast reservoirs of subterranean magma are rapidly evacuated onto the surface as pumice and ash. [■] The overlying volcanic crust loses its subterranean structural support. [■] Unable to bear its own gravitational weight, the mountain summit collapses into the hollowed-out magma chamber, forming an enormous crater basin. [■]",
    "questionPrompt": "Where would the sentence best fit?",
    "options": [
      "Square 2 (After magma is evacuated)",
      "Square 1 (At the beginning)",
      "Square 3 (After support loss)",
      "Square 4 (At the end)"
    ],
    "correctAnswer": "Square 2 (After magma is evacuated)",
    "babyExplanation": "🍼 Nalar Bayi: Magma terkuras habis ke luar -> meninggalkan rongga kosong raksasa di bawah gunung ('massive void beneath the volcano') -> tanah atas ambruk!",
    "workedExample": {
      "modelPrompt": "Magma empties out. [■] A huge void remains below.",
      "correctAnswer": "Square 2",
      "babyLogic": "Kekosongan ruang terbentuk tepat setelah magma dimuntahkan."
    },
    "insertedSentence": "This leaves a massive void beneath the volcano."
  },
  {
    "id": "ibt-77",
    "type": "reading",
    "skillCategory": "Insert Text",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 5 (Insert Text)",
    "academicTopic": "Materials Science",
    "passageSnippet": "Shape memory alloys possess the remarkable ability to revert to their original undeformed geometry upon heating. [■] At lower temperatures, the alloy exists in a ductile martensite crystalline state that can be easily bent or twisted. [■] When heated past its transformation threshold, the crystal lattice shifts into a rigid, highly ordered austenite phase. [■] This microscopic phase realignment forces the macroscopic metal back into its predetermined manufactured shape. [■]",
    "questionPrompt": "Where would the sentence best fit?",
    "options": [
      "Square 3 (After phase shift)",
      "Square 1 (At the start)",
      "Square 2 (After martensite)",
      "Square 4 (At the end)"
    ],
    "correctAnswer": "Square 3 (After phase shift)",
    "babyExplanation": "🍼 Nalar Bayi: Kisi kristal bergeser ke fase austenite -> transisi ini terjadi tanpa peleburan ('This transition involves no melting') -> bentuk kembali utuh!",
    "workedExample": {
      "modelPrompt": "Lattice shifts phases. [■] This transition involves no melting.",
      "correctAnswer": "Square 3",
      "babyLogic": "Menjelaskan karakteristik transisi fase kristal padat."
    },
    "insertedSentence": "This transition involves no melting or atomic diffusion."
  },
  {
    "id": "ibt-78",
    "type": "reading",
    "skillCategory": "Insert Text",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 5 (Insert Text)",
    "academicTopic": "Ecology",
    "passageSnippet": "Invasive zebra mussels were accidentally introduced into the North American Great Lakes via transoceanic ship ballast water in the late 1980s. [■] Lacking native predators, their population exploded exponentially across inland waterways. [■] As voracious filter feeders, millions of mussels strip phytoplankton from the water column. [■] While this intense filtration increases water clarity, it starves native fish fry that rely on plankton for early nutrition. [■]",
    "questionPrompt": "Where would the sentence best fit?",
    "options": [
      "Square 4 (At the end adding extra economic damage)",
      "Square 1 (At the start)",
      "Square 2 (After explosion)",
      "Square 3 (After filter feeders)"
    ],
    "correctAnswer": "Square 4 (At the end adding extra economic damage)",
    "babyExplanation": "🍼 Nalar Bayi: Setelah dampak ekologis ikan kelaparan dibahas, kata sambung 'Furthermore' menambahkan dampak ekonomi baru: pipa air kantor kota tersumbat!",
    "workedExample": {
      "modelPrompt": "Ecology is harmed. [■] Furthermore, municipal pipes are clogged.",
      "correctAnswer": "Square 4",
      "babyLogic": "Menambahkan poin kerusakan infrastruktur fisik."
    },
    "insertedSentence": "Furthermore, the mussels encrust municipal water intake pipes, causing millions of dollars in mechanical damage."
  },
  {
    "id": "ibt-79",
    "type": "reading",
    "skillCategory": "Insert Text",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 5 (Insert Text)",
    "academicTopic": "Microbiology",
    "passageSnippet": "Penicillin exerts its antibacterial bactericidal effect by interfering with peptidoglycan synthesis in bacterial cell walls. [■] It irreversibly binds to and inhibits transpeptidase enzymes that cross-link peptide chains in the bacterial envelope. [■] Without structural cross-linking, the cell wall cannot withstand internal osmotic turgor pressure. [■] Water rushes into the hypertonic cytoplasm, causing the bacterium to burst and lyse. [■]",
    "questionPrompt": "Where would the sentence best fit?",
    "options": [
      "Square 4 (At the end explaining why humans are safe)",
      "Square 1 (At the start)",
      "Square 2 (After transpeptidase)",
      "Square 3 (After cross-linking)"
    ],
    "correctAnswer": "Square 4 (At the end explaining why humans are safe)",
    "babyExplanation": "🍼 Nalar Bayi: Setelah proses bakteri pecah mati dijelaskan, kalimat penutup di Kotak 4 menegaskan kenapa obat ini aman bagi manusia (sel manusia tidak punya dinding peptidoglycan)!",
    "workedExample": {
      "modelPrompt": "Bacteria burst. [■] Human cells are safe because they lack walls.",
      "correctAnswer": "Square 4",
      "babyLogic": "Penjelasan keamanan selektif obat pada sel manusia."
    },
    "insertedSentence": "Human cells remain unaffected because they lack peptidoglycan cell walls entirely."
  },
  {
    "id": "ibt-80",
    "type": "reading",
    "skillCategory": "Insert Text",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 5 (Insert Text)",
    "academicTopic": "Artificial Intelligence",
    "passageSnippet": "Deep convolutional neural networks process digital images through hierarchical feature extraction layers. [■] Early layers detect primitive visual primitives such as edges, gradients, and contrasting corners. [■] Intermediate layers synthesize these edge primitives into geometric textures and object motifs like circles or mesh patterns. [■] Deepest layers combine these parts into recognizable conceptual objects such as vehicle tires or animal faces. [■]",
    "questionPrompt": "Where would the sentence best fit?",
    "options": [
      "Square 4 (At the end summarizing the biological parallel)",
      "Square 1 (At the start)",
      "Square 2 (After early layers)",
      "Square 3 (After intermediate)"
    ],
    "correctAnswer": "Square 4 (At the end summarizing the biological parallel)",
    "babyExplanation": "🍼 Nalar Bayi: Seluruh tahapan lapis 1, lapis 2, lapis 3 selesai dijabarkan. Kalimat penutup di Kotak 4 menyimpulkan bahwa desain ini meniru jalur visual otak primata!",
    "workedExample": {
      "modelPrompt": "Layers detect edges, textures, objects. [■] This progression mimics primate vision.",
      "correctAnswer": "Square 4",
      "babyLogic": "Kesimpulan analogi biologis di akhir paragraf."
    },
    "insertedSentence": "This layered progression mimics the ventral visual pathway found in the primate cerebral cortex."
  },
  {
    "id": "ibt-81",
    "type": "reading",
    "skillCategory": "Insert Text",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 5 (Insert Text)",
    "academicTopic": "Sociology",
    "passageSnippet": "Social capital refers to the networks of trust, reciprocity, and shared norms that enable collective civic action. [■] Sociologist Robert Putnam distinguished between 'bonding' and 'bridging' social capital. [■] Bonding capital connects homogeneous groups of similar backgrounds, reinforcing tight internal loyalties. [■] Bridging capital, by contrast, establishes connections across heterogeneous racial, religious, or socioeconomic divides. [■]",
    "questionPrompt": "Where would the sentence best fit?",
    "options": [
      "Square 4 (At the end comparing both types)",
      "Square 1 (At the start)",
      "Square 2 (After Putnam)",
      "Square 3 (After bonding)"
    ],
    "correctAnswer": "Square 4 (At the end comparing both types)",
    "babyExplanation": "🍼 Nalar Bayi: Setelah bonding dijelaskan di Kotak 3 dan bridging di Kotak 4, kalimat penutup di Kotak 4 membandingkan fungsi keduanya dalam demokrasi!",
    "workedExample": {
      "modelPrompt": "Bonding unites similar. Bridging connects diverse. [■] Both serve vital roles.",
      "correctAnswer": "Square 4",
      "babyLogic": "Sintesis perbandingan kedua konsep."
    },
    "insertedSentence": "While bonding capital provides psychological support, bridging capital is vital for broad democratic cohesion."
  },
  {
    "id": "ibt-82",
    "type": "reading",
    "skillCategory": "Insert Text",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 5 (Insert Text)",
    "academicTopic": "Space Exploration",
    "passageSnippet": "Ion propulsion engines generate thrust by electrostatically accelerating charged xenon ions out of an exhaust nozzle at hyper-velocities. [■] Although the immediate thrust produced is gentle, comparable to the weight of a sheet of paper on a hand, it operates continuously for years with exceptional fuel economy. [■] Over time, this minute but persistent acceleration propels deep-space probes to staggering planetary transfer speeds. [■] Chemical rockets, by comparison, exhaust their fuel in mere minutes of ferocious combustion. [■]",
    "questionPrompt": "Where would the sentence best fit?",
    "options": [
      "Square 4 (At the end after comparison)",
      "Square 1 (At the start)",
      "Square 2 (After paper weight)",
      "Square 3 (After transfer speeds)"
    ],
    "correctAnswer": "Square 4 (At the end after comparison)",
    "babyExplanation": "🍼 Nalar Bayi: Roket ion hemat bahan bakar dibanding roket kimia yang boros. KARENA ITU ('They are therefore ideal...'), roket ion ideal untuk misi antarplanet jangka panjang!",
    "workedExample": {
      "modelPrompt": "Ion rockets save fuel. [■] They are ideal for long missions.",
      "correctAnswer": "Square 4",
      "babyLogic": "Kesimpulan rekomendasi misi antariksa."
    },
    "insertedSentence": "They are therefore ideal for long-duration interplanetary missions where fuel weight is at a premium."
  },
  {
    "id": "ibt-83",
    "type": "reading",
    "skillCategory": "Insert Text",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 5 (Insert Text)",
    "academicTopic": "Atmospheric Science",
    "passageSnippet": "Lightning occurs when convective updrafts in cumulonimbus clouds induce collisions between rising ice crystals and descending hail graupel. [■] Lighter ice crystals shed electrons and carry positive charges toward the cloud anvil summit. [■] Heavier graupel pellets acquire negative charges and settle in the lower cloud base. [■] When the electric potential gradient between the cloud base and the grounded earth exceeds the dielectric breakdown threshold of air, a blinding electrical arc discharges. [■]",
    "questionPrompt": "Where would the sentence best fit?",
    "options": [
      "Square 3 (After positive and negative charges settle)",
      "Square 1 (At the start)",
      "Square 2 (After ice crystals)",
      "Square 4 (At the end)"
    ],
    "correctAnswer": "Square 3 (After positive and negative charges settle)",
    "babyExplanation": "🍼 Nalar Bayi: Muatan positif di atas awan dan muatan negatif di bawah awan -> pemisahan muatan ini ('This charge separation...') menciptakan dipol elektrostatik raksasa!",
    "workedExample": {
      "modelPrompt": "Positives go up, negatives go down. [■] This charge separation forms a dipole.",
      "correctAnswer": "Square 3",
      "babyLogic": "Merangkum pemisahan muatan positif dan negatif."
    },
    "insertedSentence": "This charge separation creates an immense electrostatic dipole within the storm cloud."
  },
  {
    "id": "ibt-84",
    "type": "reading",
    "skillCategory": "Insert Text",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 5 (Insert Text)",
    "academicTopic": "Genetics",
    "passageSnippet": "CRISPR-Cas9 operates as an adaptive molecular defense system derived from bacterial immunity against bacteriophage viruses. [■] The system utilizes a synthetic guide RNA sequence that binds complementarily to a specific genomic target. [■] The Cas9 endonuclease protein subsequently introduces a double-stranded break at that precise DNA location. [■] Cellular repair mechanisms then mend the cut, either disabling the gene or incorporating a donor template. [■]",
    "questionPrompt": "Where would the sentence best fit?",
    "options": [
      "Square 4 (At the end summarizing geneticist editing utility)",
      "Square 1 (At the start)",
      "Square 2 (After guide RNA)",
      "Square 3 (After Cas9 cut)"
    ],
    "correctAnswer": "Square 4 (At the end summarizing geneticist editing utility)",
    "babyExplanation": "🍼 Nalar Bayi: Setelah mekanisme gunting DNA dan perbaikannya dijelaskan, kalimat penutup di Kotak 4 merangkum manfaat revolusioner teknologi ini bagi para ahli genetika!",
    "workedExample": {
      "modelPrompt": "Cas9 cuts DNA. [■] This precision enables targeted editing.",
      "correctAnswer": "Square 4",
      "babyLogic": "Rangkuman manfaat presisi rekayasa genetika."
    },
    "insertedSentence": "This precise cutting mechanism allows geneticists to edit DNA sequences with unprecedented accuracy."
  },
  {
    "id": "ibt-85",
    "type": "speaking",
    "skillCategory": "Speaking iBT Simulator",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 6 (Speaking & Integrated Argumentation)",
    "academicTopic": "Campus Policy Debate",
    "passageSnippet": "The university administration plans to convert the student parking lot into a solar-powered study lawn to reduce carbon emissions and create social spaces. In the conversation, the male student argues against the plan, claiming that commuter students who live outside public transit zones will face extreme commute delays.",
    "questionPrompt": "The student expresses his opinion regarding the university's plan to replace parking with a lawn. State his opinion and explain the reasons he gives.",
    "options": [
      "He opposes the conversion because commuter students lacking public transit options will suffer severe commute disruptions.",
      "He enthusiastically endorses the solar lawn because he studies environmental engineering.",
      "He proposes that parking permits should be increased in price by 100 percent.",
      "He suggests moving all university courses to online distance learning."
    ],
    "correctAnswer": "He opposes the conversion because commuter students lacking public transit options will suffer severe commute disruptions.",
    "babyExplanation": "🍼 Nalar Bayi: Pola Speaking Task 2: Mahasiswa laki-laki menentang (opposes) rencana penutupan parkiran karena mahasiswa yang tinggal di luar jalur bus/kereta akan kesulitan berangkat kuliah!",
    "workedExample": {
      "modelPrompt": "State student's stance on tuition increase.",
      "correctAnswer": "He opposes it due to financial burden on self-funded students.",
      "babyLogic": "Sebutkan opini (setuju/tidak) + 2 alasan penunjang."
    },
    "targetSentenceForAudio": "The university administration plans to convert the student parking lot into a solar-powered study lawn to reduce carbon emissions and create social spaces. In the conversation, the male student argues against the plan, claiming that commuter students who live outside public transit zones will face extreme commute delays."
  },
  {
    "id": "ibt-86",
    "type": "speaking",
    "skillCategory": "Speaking iBT Simulator",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 6 (Speaking & Integrated Argumentation)",
    "academicTopic": "Academic Lecture Summary",
    "passageSnippet": "The biology professor discusses 'Batesian Mimicry,' where a harmless prey species evolves physical color patterns resembling a toxic or venomous species to deceive visual predators. She provides the example of the harmless hoverfly whose yellow-and-black abdominal striping mimics the stinging yellowjacket wasp, deterring birds from attacking.",
    "questionPrompt": "Using points and examples from the lecture, explain how Batesian mimicry functions as an evolutionary survival strategy.",
    "options": [
      "Harmless species mimic venomous organisms' warning colors to deter predators, as exemplified by the stingless hoverfly copying the yellowjacket wasp.",
      "Predators learn to eat yellowjacket wasps because hoverflies are sweet and nutritious.",
      "Wasps lose their venom when hoverflies share the same meadow habitat.",
      "Hoverflies develop venomous stingers after interacting with yellowjacket colonies."
    ],
    "correctAnswer": "Harmless species mimic venomous organisms' warning colors to deter predators, as exemplified by the stingless hoverfly copying the yellowjacket wasp.",
    "babyExplanation": "🍼 Nalar Bayi: Pola Speaking Task 4: Jelaskan definisi konsep (hewan tidak berbisa meniru warna hewan beracun) + berikan contoh dari dosen (lalat hoverfly meniru corak tawon kuning)!",
    "workedExample": {
      "modelPrompt": "Explain camouflage with professor's example.",
      "correctAnswer": "Creatures blend into backgrounds to hide, like the chameleon.",
      "babyLogic": "Definisi konsep + Contoh konkret dari dosen."
    },
    "targetSentenceForAudio": "The biology professor discusses 'Batesian Mimicry,' where a harmless prey species evolves physical color patterns resembling a toxic or venomous species to deceive visual predators. She provides the example of the harmless hoverfly whose yellow-and-black abdominal striping mimics the stinging yellowjacket wasp, deterring birds from attacking."
  },
  {
    "id": "ibt-87",
    "type": "speaking",
    "skillCategory": "Speaking iBT Simulator",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 6 (Speaking & Integrated Argumentation)",
    "academicTopic": "Campus Housing Policy",
    "passageSnippet": "The university proposes requiring all sophomore students to live in campus dormitories to foster community involvement. The female student disagrees, stating that dorm fees are significantly higher than off-campus apartments, and that dorm rooms are too noisy for concentrated engineering homework.",
    "questionPrompt": "Explain the student's reaction to the mandatory sophomore housing policy and the justifications she presents.",
    "options": [
      "She objects to mandatory dorm living due to high housing expenses and distracting noise levels that hinder academic focus.",
      "She supports the requirement because she wants to participate in late-night dormitory sports clubs.",
      "She believes freshmen should live off-campus while juniors move into dorms.",
      "She argues that the university should demolish all residential halls entirely."
    ],
    "correctAnswer": "She objects to mandatory dorm living due to high housing expenses and distracting noise levels that hinder academic focus.",
    "babyExplanation": "🍼 Nalar Bayi: Mahasiswi menolak (objects) karena: 1) biaya asrama jauh lebih mahal daripada sewa apartemen luar, 2) kamar asrama terlalu berisik buat belajar teknik!",
    "workedExample": {
      "modelPrompt": "Student's view on dorm policy.",
      "correctAnswer": "She objects citing higher costs and excessive noise.",
      "babyLogic": "Sikap penolakan + Alasan biaya dan kebisingan."
    },
    "targetSentenceForAudio": "The university proposes requiring all sophomore students to live in campus dormitories to foster community involvement. The female student disagrees, stating that dorm fees are significantly higher than off-campus apartments, and that dorm rooms are too noisy for concentrated engineering homework."
  },
  {
    "id": "ibt-88",
    "type": "speaking",
    "skillCategory": "Speaking iBT Simulator",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 6 (Speaking & Integrated Argumentation)",
    "academicTopic": "Marketing Lecture",
    "passageSnippet": "The business professor lectures on the 'Decoy Effect' (asymmetric dominance), where a vendor introduces an inferior third product option to make the expensive premium option appear more economically attractive. He illustrates this with movie theater popcorn: introducing a medium size priced at $6.50 makes the large $7.00 size look like a bargain compared to the $3.00 small.",
    "questionPrompt": "Explain the Decoy Effect using the popcorn pricing example from the lecture.",
    "options": [
      "A vendor introduces an overpriced intermediate option to steer consumer choice toward the most expensive item, making it seem like a bargain.",
      "Movie theaters lower popcorn prices to encourage customers to purchase extra beverage cups.",
      "Consumers consistently select the cheapest option regardless of intermediate decoy pricing.",
      "Vendors lose profits when offering three tiered sizes instead of a single uniform portion."
    ],
    "correctAnswer": "A vendor introduces an overpriced intermediate option to steer consumer choice toward the most expensive item, making it seem like a bargain.",
    "babyExplanation": "🍼 Nalar Bayi: Decoy Effect: penjual sengaja menaruh popcorn ukuran sedang harga $6.50 biar orang mikir 'nambah 50 sen dapet jumbo $7.00!' dan akhirnya beli yang paling mahal!",
    "workedExample": {
      "modelPrompt": "Explain decoy pricing with popcorn.",
      "correctAnswer": "Mid-tier decoy pushes buyers to the premium tier.",
      "babyLogic": "Pilihan pancingan yang membuat varian termahal terlihat hemat."
    },
    "targetSentenceForAudio": "The business professor lectures on the 'Decoy Effect' (asymmetric dominance), where a vendor introduces an inferior third product option to make the expensive premium option appear more economically attractive. He illustrates this with movie theater popcorn: introducing a medium size priced at $6.50 makes the large $7.00 size look like a bargain compared to the $3.00 small."
  },
  {
    "id": "ibt-89",
    "type": "speaking",
    "skillCategory": "Speaking iBT Simulator",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 6 (Speaking & Integrated Argumentation)",
    "academicTopic": "Campus Library Renovation",
    "passageSnippet": "The university library announces plans to replace printed journal stacks on the fourth floor with a collaborative multimedia café. The male student supports the initiative, arguing that all academic journals are accessible digitally online and students desperately need group discussion tables.",
    "questionPrompt": "State the student's opinion of the library renovation plan and explain the reasons he gives.",
    "options": [
      "He endorses the plan because journals are digitized online and students lack collaborative group study spaces.",
      "He protests the plan because he prefers physical smell of vintage paper manuscripts.",
      "He proposes converting the entire library into a competitive gaming arena.",
      "He demands that coffee be prohibited on all floors of the academic building."
    ],
    "correctAnswer": "He endorses the plan because journals are digitized online and students lack collaborative group study spaces.",
    "babyExplanation": "🍼 Nalar Bayi: Mahasiswa menyetujui (endorses) karena: 1) jurnal cetak sudah ada versi digital online, 2) mahasiswa butuh tempat duduk kerja kelompok diskusi!",
    "workedExample": {
      "modelPrompt": "Student's reaction to cafe in library.",
      "correctAnswer": "He favors it since journals are online and group rooms are needed.",
      "babyLogic": "Sikap mendukung + 2 alasan logis."
    },
    "targetSentenceForAudio": "The university library announces plans to replace printed journal stacks on the fourth floor with a collaborative multimedia café. The male student supports the initiative, arguing that all academic journals are accessible digitally online and students desperately need group discussion tables."
  },
  {
    "id": "ibt-90",
    "type": "speaking",
    "skillCategory": "Speaking iBT Simulator",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 6 (Speaking & Integrated Argumentation)",
    "academicTopic": "Animal Behavior Lecture",
    "passageSnippet": "The zoology professor explains 'Altruism via Kin Selection,' where an animal risks its life to warn relatives, ensuring shared genetic survival. She cites ground squirrels: when a hawk approaches, a sentry squirrel emits a high-pitched alarm whistle, drawing predator attention to itself while allowing its siblings and offspring to dive into burrows.",
    "questionPrompt": "Using the ground squirrel example, explain how kin selection accounts for altruistic behavior in nature.",
    "options": [
      "An individual sounds an alarm whistle that endangers itself to protect genetically related family members, preserving shared lineage.",
      "Squirrels attack hawks in groups to eliminate predatory threats from their prairie territory.",
      "Sentry squirrels fool hawks by mimicking the sound of barking dogs.",
      "Altruistic animals expect reciprocal favors from unrelated community members."
    ],
    "correctAnswer": "An individual sounds an alarm whistle that endangers itself to protect genetically related family members, preserving shared lineage.",
    "babyExplanation": "🍼 Nalar Bayi: Tupai pengawas berani bersiul membahayakan dirinya demi menyelamatkan saudara dan anak-anaknya yang membawa gen yang sama (kin selection)!",
    "workedExample": {
      "modelPrompt": "Explain kin selection in squirrels.",
      "correctAnswer": "Sentry risks itself so genetic relatives can escape into safety.",
      "babyLogic": "Pengorbanan diri demi kelangsungan gen keluarga."
    },
    "targetSentenceForAudio": "The zoology professor explains 'Altruism via Kin Selection,' where an animal risks its life to warn relatives, ensuring shared genetic survival. She cites ground squirrels: when a hawk approaches, a sentry squirrel emits a high-pitched alarm whistle, drawing predator attention to itself while allowing its siblings and offspring to dive into burrows."
  },
  {
    "id": "ibt-91",
    "type": "speaking",
    "skillCategory": "Speaking iBT Simulator",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 6 (Speaking & Integrated Argumentation)",
    "academicTopic": "University Dining Hall",
    "passageSnippet": "The dining hall director plans to eliminate disposable plastic takeout containers and require students to sit inside or bring reusable personal lunchboxes. The female student supports the policy, arguing that campus trash bins currently overflow with plastic and reusable containers are easy to wash.",
    "questionPrompt": "Explain the student's reaction to the dining hall's reusable container initiative.",
    "options": [
      "She supports the policy because it mitigates plastic litter and reusable containers are practical to maintain.",
      "She condemns the policy as an infringement on personal dining liberty.",
      "She suggests that dining halls should stop serving hot food entirely.",
      "She demands that students be charged a mandatory cleanup fee per meal."
    ],
    "correctAnswer": "She supports the policy because it mitigates plastic litter and reusable containers are practical to maintain.",
    "babyExplanation": "🍼 Nalar Bayi: Mahasiswi mendukung aturan wadah ramah lingkungan karena tempat sampah kampus sudah penuh plastik dan mencuci wadah pribadi itu gampang!",
    "workedExample": {
      "modelPrompt": "Student's stance on reusable lunchbox.",
      "correctAnswer": "She backs the rule to reduce trash and finds it convenient.",
      "babyLogic": "Dukungan kebijakan lingkungan kampus."
    },
    "targetSentenceForAudio": "The dining hall director plans to eliminate disposable plastic takeout containers and require students to sit inside or bring reusable personal lunchboxes. The female student supports the policy, arguing that campus trash bins currently overflow with plastic and reusable containers are easy to wash."
  },
  {
    "id": "ibt-92",
    "type": "speaking",
    "skillCategory": "Speaking iBT Simulator",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 6 (Speaking & Integrated Argumentation)",
    "academicTopic": "Psychology Lecture",
    "passageSnippet": "The psychology professor explains the 'Confirmation Bias,' where individuals selectively seek, interpret, and remember evidence that corroborates their preexisting beliefs while ignoring contradictory facts. He illustrates this with people researching nutritional diets: advocates of low-carb diets only bookmark articles praising ketones while skipping clinical trials warning of lipid elevations.",
    "questionPrompt": "Explain Confirmation Bias using the dietary research example from the lecture.",
    "options": [
      "Individuals deliberately seek out articles validating their chosen diet while ignoring studies reporting conflicting medical evidence.",
      "Nutritionists force patients to adopt low-carb diets regardless of blood test results.",
      "Dieters develop unbiased objective assessments after browsing multiple online forums.",
      "Confirmation bias causes people to abandon their core convictions immediately."
    ],
    "correctAnswer": "Individuals deliberately seek out articles validating their chosen diet while ignoring studies reporting conflicting medical evidence.",
    "babyExplanation": "🍼 Nalar Bayi: Confirmation Bias: orang diet keto cuma mau baca artikel yang memuji dietnya, sementara artikel peringatan kolesterol di-skip tidak mau dibaca!",
    "workedExample": {
      "modelPrompt": "Explain confirmation bias in dieters.",
      "correctAnswer": "People only read articles supporting their prior beliefs.",
      "babyLogic": "Kecenderungan memilah informasi yang cocok dengan selera pribadi."
    },
    "targetSentenceForAudio": "The psychology professor explains the 'Confirmation Bias,' where individuals selectively seek, interpret, and remember evidence that corroborates their preexisting beliefs while ignoring contradictory facts. He illustrates this with people researching nutritional diets: advocates of low-carb diets only bookmark articles praising ketones while skipping clinical trials warning of lipid elevations."
  },
  {
    "id": "ibt-93",
    "type": "speaking",
    "skillCategory": "Speaking iBT Simulator",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 6 (Speaking & Integrated Argumentation)",
    "academicTopic": "Campus Recreation Center",
    "passageSnippet": "The university intends to close the swimming pool for six months during the winter semester to install high-efficiency water filtration systems. The male student argues that the timing is disastrous because the varsity swim team has regional championships in February and alternative municipal pools are twenty miles away.",
    "questionPrompt": "Explain the student's objection to the recreation center's pool renovation timeline.",
    "options": [
      "He opposes the winter timing because varsity swim championships occur in February with no nearby alternative practice pools.",
      "He believes water filtration is a waste of institutional capital.",
      "He prefers that the pool be closed permanently to expand the weightlifting room.",
      "He demands that the swim team cancel their athletic season voluntarily."
    ],
    "correctAnswer": "He opposes the winter timing because varsity swim championships occur in February with no nearby alternative practice pools.",
    "babyExplanation": "🍼 Nalar Bayi: Mahasiswa protes bukan karena benci renovasi, tapi karena TIMINGNYA SALAH: kejuaraan renang bulan Februari dan kolam renang umum lain jaraknya 30 km!",
    "workedExample": {
      "modelPrompt": "Student's objection to pool closure.",
      "correctAnswer": "Bad timing during championship season with no nearby pools.",
      "babyLogic": "Penolakan jadwal eksekusi renovasi."
    },
    "targetSentenceForAudio": "The university intends to close the swimming pool for six months during the winter semester to install high-efficiency water filtration systems. The male student argues that the timing is disastrous because the varsity swim team has regional championships in February and alternative municipal pools are twenty miles away."
  },
  {
    "id": "ibt-94",
    "type": "speaking",
    "skillCategory": "Speaking iBT Simulator",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 6 (Speaking & Integrated Argumentation)",
    "academicTopic": "Ecology Lecture",
    "passageSnippet": "The ecology professor discusses 'Ecological Niches' and the Competitive Exclusion Principle, which dictates that two species competing for the exact same limiting resource cannot stably coexist. He provides the example of two protozoan Paramecium species: when grown together in a single test tube with limited yeast food, Paramecium aurelia outcompetes and drives Paramecium caudatum to local extinction.",
    "questionPrompt": "Explain the Competitive Exclusion Principle using the Paramecium experiment from the lecture.",
    "options": [
      "Two species competing for the same scarce food cannot coexist, leading the superior competitor to eliminate the other.",
      "Paramecium species cooperate to expand bacterial food populations inside the test tube.",
      "Yeast microorganisms poison Paramecium aurelia while nourishing Paramecium caudatum.",
      "Competing species share resources equally through mutualistic symbiosis."
    ],
    "correctAnswer": "Two species competing for the same scarce food cannot coexist, leading the superior competitor to eliminate the other.",
    "babyExplanation": "🍼 Nalar Bayi: Dua makhluk hidup berebut makanan yang sama di satu tabung: yang satu menang cepat makan, yang satunya kalah dan punah (Competitive Exclusion)!",
    "workedExample": {
      "modelPrompt": "Explain competitive exclusion in Paramecium.",
      "correctAnswer": "One species outcompetes and drives the other to extinction.",
      "babyLogic": "Dua spesies dalam relung yang sama tidak bisa hidup bersama."
    },
    "targetSentenceForAudio": "The ecology professor discusses 'Ecological Niches' and the Competitive Exclusion Principle, which dictates that two species competing for the exact same limiting resource cannot stably coexist. He provides the example of two protozoan Paramecium species: when grown together in a single test tube with limited yeast food, Paramecium aurelia outcompetes and drives Paramecium caudatum to local extinction."
  },
  {
    "id": "ibt-95",
    "type": "speaking",
    "skillCategory": "Speaking iBT Simulator",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 6 (Speaking & Integrated Argumentation)",
    "academicTopic": "Campus Transportation",
    "passageSnippet": "The university plans to introduce electric rental scooters across campus sidewalks. The female student opposes the idea, stating that crowded pedestrian paths between lecture halls will become hazardous for walking students and abandoned scooters will clutter accessibility ramps.",
    "questionPrompt": "State the student's reaction to the introduction of electric scooters on campus.",
    "options": [
      "She opposes electric scooters because they create pedestrian collision hazards and clutter disabled accessibility ramps.",
      "She embraces the scooter program because she dislikes walking up campus hills.",
      "She recommends replacing all campus sidewalks with asphalt highways.",
      "She suggests buying motorbikes for all university staff members."
    ],
    "correctAnswer": "She opposes electric scooters because they create pedestrian collision hazards and clutter disabled accessibility ramps.",
    "babyExplanation": "🍼 Nalar Bayi: Mahasiswi menentang skuter listrik sewaan karena jalur pejalan kaki sudah padat (bisa tabrakan) dan skuter yang dibuang sembarangan menghalangi ramp kursi roda!",
    "workedExample": {
      "modelPrompt": "Student's opinion on campus scooters.",
      "correctAnswer": "Opposes them due to collision danger and blocked ramps.",
      "babyLogic": "Kekhawatiran keselamatan pejalan kaki dan aksesibilitas."
    },
    "targetSentenceForAudio": "The university plans to introduce electric rental scooters across campus sidewalks. The female student opposes the idea, stating that crowded pedestrian paths between lecture halls will become hazardous for walking students and abandoned scooters will clutter accessibility ramps."
  },
  {
    "id": "ibt-96",
    "type": "speaking",
    "skillCategory": "Speaking iBT Simulator",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 6 (Speaking & Integrated Argumentation)",
    "academicTopic": "Architecture Lecture",
    "passageSnippet": "The professor lectures on 'Biomimicry in Architecture,' where engineers adapt structural principles from nature to construct energy-efficient buildings. He presents the Eastgate Centre in Zimbabwe, which mimics the self-cooling ventilation chimneys of termite mounds to maintain comfortable interior temperatures without conventional air conditioning.",
    "questionPrompt": "Explain how the Eastgate Centre applies biomimicry from termite mounds to achieve natural climate control.",
    "options": [
      "The building mimics passive convective chimneys of termite mounds to regulate interior temperatures without conventional air conditioning.",
      "Engineers imported live termites to bore cooling ventilation tunnels through concrete columns.",
      "The building is constructed entirely from chewed wood and organic termite saliva.",
      "The architectural facility operates solar panels that power industrial refrigeration compressors."
    ],
    "correctAnswer": "The building mimics passive convective chimneys of termite mounds to regulate interior temperatures without conventional air conditioning.",
    "babyExplanation": "🍼 Nalar Bayi: Gedung Eastgate di Zimbabwe meniru arsitektur ventilasi sarang rayap: cerobong hawa dingin alami bikin gedung sejuk tanpa perlu AC boros listrik!",
    "workedExample": {
      "modelPrompt": "How does Eastgate apply biomimicry?",
      "correctAnswer": "Mimics termite mound air channels to cool without AC.",
      "babyLogic": "Peniruan sistem sirkulasi udara alami sarang rayap."
    },
    "targetSentenceForAudio": "The professor lectures on 'Biomimicry in Architecture,' where engineers adapt structural principles from nature to construct energy-efficient buildings. He presents the Eastgate Centre in Zimbabwe, which mimics the self-cooling ventilation chimneys of termite mounds to maintain comfortable interior temperatures without conventional air conditioning."
  },
  {
    "id": "ibt-97",
    "type": "speaking",
    "skillCategory": "Speaking iBT Simulator",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 6 (Speaking & Integrated Argumentation)",
    "academicTopic": "Campus Textbook Policy",
    "passageSnippet": "The university bookstore proposes shifting entirely to digital e-book subscriptions rather than stocking printed physical textbooks. The male student supports the shift, highlighting that e-books cost half the price and allow instant keyword searching during exam preparation.",
    "questionPrompt": "Explain the student's opinion regarding the bookstore's transition to digital textbooks.",
    "options": [
      "He supports the shift because digital textbooks are significantly cheaper and offer efficient keyword search capabilities.",
      "He opposes e-books because digital screen glare causes eye fatigue during exams.",
      "He recommends closing the campus bookstore and buying books from airport kiosks.",
      "He insists that all professors dictate lectures without any required readings."
    ],
    "correctAnswer": "He supports the shift because digital textbooks are significantly cheaper and offer efficient keyword search capabilities.",
    "babyExplanation": "🍼 Nalar Bayi: Mahasiswa setuju buku digital (e-book) karena: 1) harganya setengah lebih murah, 2) ada fitur search kata kunci cepat saat belajar buat ujian!",
    "workedExample": {
      "modelPrompt": "Student's view on e-textbooks.",
      "correctAnswer": "He favors it because e-books are cheaper and searchable.",
      "babyLogic": "Manfaat efisiensi biaya dan pencarian cepat."
    },
    "targetSentenceForAudio": "The university bookstore proposes shifting entirely to digital e-book subscriptions rather than stocking printed physical textbooks. The male student supports the shift, highlighting that e-books cost half the price and allow instant keyword searching during exam preparation."
  },
  {
    "id": "ibt-98",
    "type": "speaking",
    "skillCategory": "Speaking iBT Simulator",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 6 (Speaking & Integrated Argumentation)",
    "academicTopic": "Economics Lecture",
    "passageSnippet": "The professor explains the 'Tragedy of the Commons,' where individuals acting independently in self-interest deplete a shared finite resource, ultimately spoiling it for the entire community. She illustrates this with a shared medieval grazing pasture: each herdsman adds extra cattle to maximize personal profit until the grass is completely destroyed by overgrazing.",
    "questionPrompt": "Explain the Tragedy of the Commons using the grazing pasture example from the lecture.",
    "options": [
      "Individual herdsmen add extra cattle for personal gain until the unmanaged communal pasture is ruined by overgrazing.",
      "Farmers establish private fences to cultivate wheat across medieval common lands.",
      "The community bans cattle grazing to preserve wilderness biodiversity.",
      "Herdsmen share cattle profits equally through a cooperative agricultural bank."
    ],
    "correctAnswer": "Individual herdsmen add extra cattle for personal gain until the unmanaged communal pasture is ruined by overgrazing.",
    "babyExplanation": "🍼 Nalar Bayi: Tragedy of the Commons: tiap peternak egois nambah sapi di padang rumput bersama demi untung sendiri, sampai akhirnya rumput habis gundul dan semua sapi kelaparan!",
    "workedExample": {
      "modelPrompt": "Explain Tragedy of Commons with pasture.",
      "correctAnswer": "Selfish herdsmen overgraze shared grass until it is ruined.",
      "babyLogic": "Kerusakan sumber daya bersama akibat keegoisan individu."
    },
    "targetSentenceForAudio": "The professor explains the 'Tragedy of the Commons,' where individuals acting independently in self-interest deplete a shared finite resource, ultimately spoiling it for the entire community. She illustrates this with a shared medieval grazing pasture: each herdsman adds extra cattle to maximize personal profit until the grass is completely destroyed by overgrazing."
  },
  {
    "id": "ibt-99",
    "type": "speaking",
    "skillCategory": "Speaking iBT Simulator",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 6 (Speaking & Integrated Argumentation)",
    "academicTopic": "Campus Study Space",
    "passageSnippet": "The university announces that the 24-hour library basement will be closed at midnight on weekdays due to cleaning staff shortages. The female student opposes the early closure, arguing that medical and STEM students frequently conduct late-night study sessions that cannot be accommodated in noisy shared dorms.",
    "questionPrompt": "State the student's opinion of the proposed early closure of the library basement and explain her reasoning.",
    "options": [
      "She opposes closing at midnight because STEM and pre-med students require quiet overnight study environments unavailable in dorms.",
      "She favors early closure so students are forced to sleep eight hours every night.",
      "She proposes hiring private security guards to monitor dormitory hallways.",
      "She suggests that exams should be scheduled exclusively during morning hours."
    ],
    "correctAnswer": "She opposes closing at midnight because STEM and pre-med students require quiet overnight study environments unavailable in dorms.",
    "babyExplanation": "🍼 Nalar Bayi: Mahasiswi menolak tutup jam 12 malam karena mahasiswa kedokteran dan teknik butuh tempat belajar hening tengah malam yang tidak bisa didapat di asrama!",
    "workedExample": {
      "modelPrompt": "Student's objection to library closing early.",
      "correctAnswer": "She opposes it because STEM students need quiet late-night study.",
      "babyLogic": "Kebutuhan mendesak ruang belajar malam."
    },
    "targetSentenceForAudio": "The university announces that the 24-hour library basement will be closed at midnight on weekdays due to cleaning staff shortages. The female student opposes the early closure, arguing that medical and STEM students frequently conduct late-night study sessions that cannot be accommodated in noisy shared dorms."
  },
  {
    "id": "ibt-100",
    "type": "speaking",
    "skillCategory": "Speaking iBT Simulator",
    "bookChapter": "Building Skills for the TOEFL iBT: Skill 6 (Speaking & Integrated Argumentation)",
    "academicTopic": "Linguistics Lecture",
    "passageSnippet": "The linguistics professor explains the 'Critical Period Hypothesis,' which posits that language acquisition is biologically constrained to early childhood, after which neuroplasticity diminishes and native-level fluency becomes exceedingly rare. He supports this with studies of feral children and adult immigrants who retain persistent non-native phonetic accents despite decades of immersion.",
    "questionPrompt": "Explain the Critical Period Hypothesis using the examples provided by the professor.",
    "options": [
      "Language learning is constrained to early childhood; adults retain foreign accents and struggle with syntax due to decreased brain plasticity.",
      "Adults learn foreign languages faster than toddlers because of mature grammatical reasoning.",
      "Feral children develop sophisticated vocabularies spontaneously without social interaction.",
      "Neuroplasticity increases steadily throughout human adulthood, aiding multilingual fluency."
    ],
    "correctAnswer": "Language learning is constrained to early childhood; adults retain foreign accents and struggle with syntax due to decreased brain plasticity.",
    "babyExplanation": "🍼 Nalar Bayi: Critical Period Hypothesis: masa emas belajar bahasa ada di masa kanak-kanak; orang dewasa susah fasih 100% dan aksen terbawa karena elastisitas otak berkurang!",
    "workedExample": {
      "modelPrompt": "Explain critical period in language.",
      "correctAnswer": "Childhood is optimal; adults struggle to lose native accents.",
      "babyLogic": "Batasan biologis usia emas pembelajaran bahasa."
    },
    "targetSentenceForAudio": "The linguistics professor explains the 'Critical Period Hypothesis,' which posits that language acquisition is biologically constrained to early childhood, after which neuroplasticity diminishes and native-level fluency becomes exceedingly rare. He supports this with studies of feral children and adult immigrants who retain persistent non-native phonetic accents despite decades of immersion."
  }
];

// ================= EVC DICTATION CHALLENGES (SPEAKING & LISTENING) =================
// ================= DIKTE AUDIO EVC & IT VOCATIONAL ENGLISH (100 SOAL) =================
const evcDictationChallenges = [
  {
    "id": "dic-l1-1",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "CARMONA",
    "audioText": "C, A, R, M, O, N, A",
    "chapterRef": "Chapter 1: Greetings & Spelling Names",
    "meaning": "Nama keluarga Luis Carmona di dialog kelas EVC: C-A-R-M-O-N-A",
    "babyClue": "🍼 Kodi mengeja nama keluarga 'CARMONA'. Dengarkan ketukan hurufnya dan ketik satu demi satu!",
    "workedExample": {
      "sampleAudio": "Dengarkan suara ejaan huruf: 'B, O, T, I'",
      "sampleTarget": "BOTI",
      "sampleExplanation": "Tingkat 1 menguji pendengaran ejaan huruf alfabet. Saat audio mengeja 'C, A, R, M, O, N, A', ketik setiap huruf secara berurutan: 'CARMONA'."
    }
  },
  {
    "id": "dic-l1-2",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "PEREZ",
    "audioText": "P, E, R, E, Z",
    "chapterRef": "Chapter 1: Assistant's Name",
    "meaning": "Nama asisten kelas di dialog EVC: P-E-R-E-Z",
    "babyClue": "🍼 Eja 5 huruf pendek: P - E - R - E - Z. Ketik hurufnya sampai 100% tepat!",
    "workedExample": {
      "sampleAudio": "Dengarkan suara ejaan huruf: 'B, O, T, I'",
      "sampleTarget": "BOTI",
      "sampleExplanation": "Tingkat 1 menguji pendengaran ejaan huruf alfabet. Saat audio mengeja 'P, E, R, E, Z', ketik setiap huruf secara berurutan: 'PEREZ'."
    }
  },
  {
    "id": "dic-l1-3",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "RODRIGUEZ",
    "audioText": "R, O, D, R, I, G, U, E, Z",
    "chapterRef": "Chapter 1: Student Roster",
    "meaning": "Nama mahasiswa Rodriguez di daftar hadir: R-O-D-R-I-G-U-E-Z",
    "babyClue": "🍼 Nama panjang 9 huruf berakhiran Z: R-O-D-R-I-G-U-E-Z. Dengarkan baik-baik vokal I dan U!",
    "workedExample": {
      "sampleAudio": "Dengarkan ejaan: 'L, U, I, S'",
      "sampleTarget": "LUIS",
      "sampleExplanation": "Perhatikan vokal ganda dan konsonan berulang. Saat audio mengeja 'R, O, D, R, I, G, U, E, Z', ketik 'RODRIGUEZ'."
    }
  },
  {
    "id": "dic-l1-4",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "FLORES",
    "audioText": "F, L, O, R, E, S",
    "chapterRef": "Chapter 2: Classroom Names",
    "meaning": "Nama keluarga Flores: F-L-O-R-E-S",
    "babyClue": "🍼 6 huruf nama latin: F - L - O - R - E - S.",
    "workedExample": {
      "sampleAudio": "Dengarkan ejaan: 'L, U, I, S'",
      "sampleTarget": "LUIS",
      "sampleExplanation": "Ketik huruf demi huruf sesuai pelafalan alfabet bahasa Inggris: F - L - O - R - E - S menjadi 'FLORES'."
    }
  },
  {
    "id": "dic-l1-5",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "SANCHEZ",
    "audioText": "S, A, N, C, H, E, Z",
    "chapterRef": "Chapter 2: Classroom Introductions",
    "meaning": "Nama Sanchez: S-A-N-C-H-E-Z",
    "babyClue": "🍼 Dengarkan kombinasi konsonan C dan H: S - A - N - C - H - E - Z.",
    "workedExample": {
      "sampleAudio": "Dengarkan ejaan: 'L, U, I, S'",
      "sampleTarget": "LUIS",
      "sampleExplanation": "Di ejaan bahasa Inggris, huruf C dibaca /siː/ dan H dibaca /eɪtʃ/. Ketik 'SANCHEZ'."
    }
  },
  {
    "id": "dic-l1-6",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "RAMIREZ",
    "audioText": "R, A, M, I, R, E, Z",
    "chapterRef": "Chapter 2: Student Directory",
    "meaning": "Nama Ramirez: R-A-M-I-R-E-Z",
    "babyClue": "🍼 Huruf R muncul dua kali: R - A - M - I - R - E - Z.",
    "workedExample": {
      "sampleAudio": "Dengarkan ejaan: 'B, O, T, I'",
      "sampleTarget": "BOTI",
      "sampleExplanation": "Dengarkan ritme jeda huruf audio: R, A, M, I, R, E, Z menjadi 'RAMIREZ'."
    }
  },
  {
    "id": "dic-l1-7",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "GARCIA",
    "audioText": "G, A, R, C, I, A",
    "chapterRef": "Chapter 3: Personal Data",
    "meaning": "Nama Garcia: G-A-R-C-I-A",
    "babyClue": "🍼 Huruf G dibaca /dʒiː/: G - A - R - C - I - A.",
    "workedExample": {
      "sampleAudio": "Dengarkan ejaan: 'L, U, I, S'",
      "sampleTarget": "LUIS",
      "sampleExplanation": "Huruf G dalam alfabet bahasa Inggris berbunyi /dʒiː/. Ketik 'GARCIA'."
    }
  },
  {
    "id": "dic-l1-8",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "MARTINEZ",
    "audioText": "M, A, R, T, I, N, E, Z",
    "chapterRef": "Chapter 3: Campus Registry",
    "meaning": "Nama Martinez: M-A-R-T-I-N-E-Z",
    "babyClue": "🍼 8 huruf berakhiran Z: M - A - R - T - I - N - E - Z.",
    "workedExample": {
      "sampleAudio": "Dengarkan ejaan: 'B, O, T, I'",
      "sampleTarget": "BOTI",
      "sampleExplanation": "Ketik setiap huruf saat audio berbunyi: M, A, R, T, I, N, E, Z menjadi 'MARTINEZ'."
    }
  },
  {
    "id": "dic-l1-9",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "CASTILLO",
    "audioText": "C, A, S, T, I, L, L, O",
    "chapterRef": "Chapter 4: Contact Information",
    "meaning": "Nama Castillo: C-A-S-T-I-L-L-O",
    "babyClue": "🍼 Dengarkan konsonan ganda L-L: C - A - S - T - I - L - L - O.",
    "workedExample": {
      "sampleAudio": "Dengarkan ejaan: 'B, O, T, I'",
      "sampleTarget": "BOTI",
      "sampleExplanation": "Huruf L ganda (double L): C, A, S, T, I, L, L, O menghasilkan 'CASTILLO'."
    }
  },
  {
    "id": "dic-l1-10",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "VARGAS",
    "audioText": "V, A, R, G, A, S",
    "chapterRef": "Chapter 4: Identity Verification",
    "meaning": "Nama Vargas: V-A-R-G-A-S",
    "babyClue": "🍼 Huruf V dibaca /viː/: V - A - R - G - A - S.",
    "workedExample": {
      "sampleAudio": "Dengarkan ejaan: 'B, O, T, I'",
      "sampleTarget": "BOTI",
      "sampleExplanation": "Huruf V dibaca /viː/ berbeda dengan B /biː/. Ketik 'VARGAS'."
    }
  },
  {
    "id": "dic-l1-11",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "ROUTER",
    "audioText": "R, O, U, T, E, R",
    "chapterRef": "Vocational IT: Hardware Devices",
    "meaning": "Perangkat perute jaringan: R-O-U-T-E-R",
    "babyClue": "🍼 6 huruf perangkat jaringan utama pembagi paket data: R - O - U - T - E - R.",
    "workedExample": {
      "sampleAudio": "Dengarkan ejaan: 'H, U, B'",
      "sampleTarget": "HUB",
      "sampleExplanation": "Dengarkan vokal O dan U: R, O, U, T, E, R membentuk kata 'ROUTER'."
    }
  },
  {
    "id": "dic-l1-12",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "MODEM",
    "audioText": "M, O, D, E, M",
    "chapterRef": "Vocational IT: Communication Equipment",
    "meaning": "Modulator demodulator sinyal: M-O-D-E-M",
    "babyClue": "🍼 5 huruf perangkat konversi sinyal analog ke digital: M - O - D - E - M.",
    "workedExample": {
      "sampleAudio": "Dengarkan ejaan: 'H, U, B'",
      "sampleTarget": "HUB",
      "sampleExplanation": "Dua huruf M mengapit huruf vokal O, D, E. Ketik 'MODEM'."
    }
  },
  {
    "id": "dic-l1-13",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "SWITCH",
    "audioText": "S, W, I, T, C, H",
    "chapterRef": "Vocational IT: LAN Infrastructure",
    "meaning": "Perangkat switch LAN layer 2: S-W-I-T-C-H",
    "babyClue": "🍼 6 huruf perangkat penghubung kabel LAN di kantor: S - W - I - T - C - H.",
    "workedExample": {
      "sampleAudio": "Dengarkan ejaan: 'H, U, B'",
      "sampleTarget": "HUB",
      "sampleExplanation": "Huruf W dibaca /dʌbəl.juː/ dan C-H dibaca berurutan. Ketik 'SWITCH'."
    }
  },
  {
    "id": "dic-l1-14",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "SUBNET",
    "audioText": "S, U, B, N, E, T",
    "chapterRef": "CompTIA Network+: IP Addressing",
    "meaning": "Pembagian segmen jaringan: S-U-B-N-E-T",
    "babyClue": "🍼 6 huruf istilah pemecah rentang IP address: S - U - B - N - E - T.",
    "workedExample": {
      "sampleAudio": "Dengarkan ejaan: 'N, E, T'",
      "sampleTarget": "NET",
      "sampleExplanation": "Gabungan kata sub dan net: S, U, B, N, E, T menjadi 'SUBNET'."
    }
  },
  {
    "id": "dic-l1-15",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "SERVER",
    "audioText": "S, E, R, V, E, R",
    "chapterRef": "Vocational IT: Client-Server Model",
    "meaning": "Komputer peladen data pusat: S-E-R-V-E-R",
    "babyClue": "🍼 6 huruf komputer bertenaga tinggi penyedia layanan web dan database: S - E - R - V - E - R.",
    "workedExample": {
      "sampleAudio": "Dengarkan ejaan: 'H, O, S, T'",
      "sampleTarget": "HOST",
      "sampleExplanation": "Perhatikan huruf V di tengah: S, E, R, V, E, R menghasilkan 'SERVER'."
    }
  },
  {
    "id": "dic-l1-16",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "CLIENT",
    "audioText": "C, L, I, E, N, T",
    "chapterRef": "Vocational IT: Network Architecture",
    "meaning": "Perangkat klien pengguna: C-L-I-E-N, T",
    "babyClue": "🍼 6 huruf komputer pengguna yang meminta data ke server: C - L - I - E - N - T.",
    "workedExample": {
      "sampleAudio": "Dengarkan ejaan: 'H, O, S, T'",
      "sampleTarget": "HOST",
      "sampleExplanation": "Kombinasi vokal I dan E: C, L, I, E, N, T menjadi 'CLIENT'."
    }
  },
  {
    "id": "dic-l1-17",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "PACKET",
    "audioText": "P, A, C, K, E, T",
    "chapterRef": "CompTIA Network+: Data Encapsulation",
    "meaning": "Bungkusan data jaringan digital: P-A-C-K-E-T",
    "babyClue": "🍼 6 huruf unit data protokol pada layer 3 jaringan: P - A - C - K - E - T.",
    "workedExample": {
      "sampleAudio": "Dengarkan ejaan: 'F, R, A, M, E'",
      "sampleTarget": "FRAME",
      "sampleExplanation": "Perhatikan kombinasi konsonan C dan K: P, A, C, K, E, T menjadi 'PACKET'."
    }
  },
  {
    "id": "dic-l1-18",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "DOMAIN",
    "audioText": "D, O, M, A, I, N",
    "chapterRef": "Vocational IT: Web Infrastructure",
    "meaning": "Nama alamat situs web atau realm jaringan: D-O-M-A-I-N",
    "babyClue": "🍼 6 huruf alamat identitas jaringan seperti .com atau .id: D - O - M - A - I - N.",
    "workedExample": {
      "sampleAudio": "Dengarkan ejaan: 'H, O, S, T'",
      "sampleTarget": "HOST",
      "sampleExplanation": "Dengarkan ejaan huruf alfabet: D, O, M, A, I, N menjadi 'DOMAIN'."
    }
  },
  {
    "id": "dic-l1-19",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "BACKUP",
    "audioText": "B, A, C, K, U, P",
    "chapterRef": "Oxford IT: Storage & Disaster Recovery",
    "meaning": "Salinan cadangan file sistem: B-A-C-K-U-P",
    "babyClue": "🍼 6 huruf penyelamat data saat harddisk rusak: B - A - C - K - U - P.",
    "workedExample": {
      "sampleAudio": "Dengarkan ejaan: 'D, A, T, A'",
      "sampleTarget": "DATA",
      "sampleExplanation": "Gabungan huruf B, A, C, K, U, P membentuk kata penting 'BACKUP'."
    }
  },
  {
    "id": "dic-l1-20",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "BUFFER",
    "audioText": "B, U, F, F, E, R",
    "chapterRef": "Oxford IT: Memory & Processing",
    "meaning": "Memori penampung data sementara: B-U-F-F-E-R",
    "babyClue": "🍼 6 huruf penyangga aliran data video atau IO: B - U - F - F - E - R.",
    "workedExample": {
      "sampleAudio": "Dengarkan ejaan: 'R, A, M'",
      "sampleTarget": "RAM",
      "sampleExplanation": "Dengarkan huruf F ganda (double F): B, U, F, F, E, R menjadi 'BUFFER'."
    }
  },
  {
    "id": "dic-l1-21",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "KERNEL",
    "audioText": "K, E, R, N, E, L",
    "chapterRef": "Oxford IT: Operating Systems",
    "meaning": "Inti sistem operasi komputer: K-E-R-N-E-L",
    "babyClue": "🍼 6 huruf pengendali perangkat keras paling inti di Linux dan Windows: K - E - R - N - E - L.",
    "workedExample": {
      "sampleAudio": "Dengarkan ejaan: 'O, S'",
      "sampleTarget": "OS",
      "sampleExplanation": "Dengarkan ejaan huruf K, E, R, N, E, L menghasilkan kata 'KERNEL'."
    }
  },
  {
    "id": "dic-l1-22",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "SOCKET",
    "audioText": "S, O, C, K, E, T",
    "chapterRef": "CompTIA Network+: Port Communication",
    "meaning": "Kombinasi alamat IP dan port komunikasi: S-O-C-K-E-T",
    "babyClue": "🍼 6 huruf colokan logika endpoint komunikasi jaringan: S - O - C - K - E - T.",
    "workedExample": {
      "sampleAudio": "Dengarkan ejaan: 'P, O, R, T'",
      "sampleTarget": "PORT",
      "sampleExplanation": "Dengarkan ejaan huruf alfabet: S, O, C, K, E, T menjadi 'SOCKET'."
    }
  },
  {
    "id": "dic-l1-23",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "PYTHON",
    "audioText": "P, Y, T, H, O, N",
    "chapterRef": "Vocational IT: Programming Languages",
    "meaning": "Bahasa pemrograman skrip terpopuler: P-Y-T-H-O-N",
    "babyClue": "🍼 6 huruf bahasa pemrograman ular serbaguna untuk automasi dan AI: P - Y - T - H - O - N.",
    "workedExample": {
      "sampleAudio": "Dengarkan ejaan: 'J, A, V, A'",
      "sampleTarget": "JAVA",
      "sampleExplanation": "Huruf Y dibaca /waɪ/: P, Y, T, H, O, N menjadi 'PYTHON'."
    }
  },
  {
    "id": "dic-l1-24",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "DOCKER",
    "audioText": "D, O, C, K, E, R",
    "chapterRef": "Vocational IT: Virtualization & Containers",
    "meaning": "Platform wadah aplikasi portabel: D-O-C-K-E-R",
    "babyClue": "🍼 6 huruf teknologi container software lambang ikan paus: D - O - C - K - E - R.",
    "workedExample": {
      "sampleAudio": "Dengarkan ejaan: 'V, M'",
      "sampleTarget": "VM",
      "sampleExplanation": "Dengarkan ketukan huruf: D, O, C, K, E, R menghasilkan 'DOCKER'."
    }
  },
  {
    "id": "dic-l1-25",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "CIPHER",
    "audioText": "C, I, P, H, E, R",
    "chapterRef": "CompTIA Security+: Cryptography",
    "meaning": "Algoritma penyandi data rahasia: C-I-P-H-E-R",
    "babyClue": "🍼 6 huruf pengacak data menjadi kode rahasia enkripsi: C - I - P - H - E - R.",
    "workedExample": {
      "sampleAudio": "Dengarkan ejaan: 'K, E, Y'",
      "sampleTarget": "KEY",
      "sampleExplanation": "Kombinasi huruf P dan H dibaca /f/ dalam kata: C, I, P, H, E, R menjadi 'CIPHER'."
    }
  },
  {
    "id": "dic-l1-26",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "APACHE",
    "audioText": "A, P, A, C, H, E",
    "chapterRef": "Vocational IT: Web Servers",
    "meaning": "Web server open-source legendaris: A-P-A-C-H-E",
    "babyClue": "🍼 6 huruf software peladen web terpopuler di dunia IT: A - P - A - C - H - E.",
    "workedExample": {
      "sampleAudio": "Dengarkan ejaan: 'W, E, B'",
      "sampleTarget": "WEB",
      "sampleExplanation": "Dua huruf A mengapit konsonan P: A, P, A, C, H, E menjadi 'APACHE'."
    }
  },
  {
    "id": "dic-l1-27",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "GITHUB",
    "audioText": "G, I, T, H, U, B",
    "chapterRef": "Vocational IT: Version Control Hosting",
    "meaning": "Layanan cloud repositori kode sumber git: G-I-T-H-U-B",
    "babyClue": "🍼 6 huruf rumah penyimpanan kode program para programmer: G - I - T - H - U - B.",
    "workedExample": {
      "sampleAudio": "Dengarkan ejaan: 'G, I, T'",
      "sampleTarget": "GIT",
      "sampleExplanation": "Huruf G dibaca /dʒiː/ diikuti I, T, H, U, B membentuk kata 'GITHUB'."
    }
  },
  {
    "id": "dic-l1-28",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "BINARY",
    "audioText": "B, I, N, A, R, Y",
    "chapterRef": "Oxford IT: Digital Data Representation",
    "meaning": "Sistem bilangan basis dua (0 dan 1): B-I-N-A-R-Y",
    "babyClue": "🍼 6 huruf bahasa asli mesin komputasi digital: B - I - N - A - R - Y.",
    "workedExample": {
      "sampleAudio": "Dengarkan ejaan: 'B, I, T'",
      "sampleTarget": "BIT",
      "sampleExplanation": "Huruf Y di akhir dibaca /waɪ/: B, I, N, A, R, Y menjadi 'BINARY'."
    }
  },
  {
    "id": "dic-l1-29",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "CURSOR",
    "audioText": "C, U, R, S, O, R",
    "chapterRef": "Oxford IT: User Interface",
    "meaning": "Penunjuk posisi pada layar monitor: C-U-R-S-O-R",
    "babyClue": "🍼 6 huruf panah penunjuk klik mouse di layar komputer: C - U - R - S - O - R.",
    "workedExample": {
      "sampleAudio": "Dengarkan ejaan: 'P, O, I, N, T'",
      "sampleTarget": "POINT",
      "sampleExplanation": "Dengarkan huruf berurutan: C, U, R, S, O, R menjadi 'CURSOR'."
    }
  },
  {
    "id": "dic-l1-30",
    "level": 1,
    "levelName": "Level 1: Eja Huruf",
    "targetText": "UPTIME",
    "audioText": "U, P, T, I, M, E",
    "chapterRef": "Vocational IT: System Reliability",
    "meaning": "Durasi waktu komputer beroperasi tanpa mati: U-P-T-I-M-E",
    "babyClue": "🍼 6 huruf indikator keandalan server 99.9 persen aktif: U - P - T - I - M - E.",
    "workedExample": {
      "sampleAudio": "Dengarkan ejaan: 'P, I, N, G'",
      "sampleTarget": "PING",
      "sampleExplanation": "Kombinasi kata up dan time: U, P, T, I, M, E menjadi 'UPTIME'."
    }
  },
  {
    "id": "dic-l2-1",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Notebook computer",
    "audioText": "Notebook computer",
    "chapterRef": "EVC Chapter 2: Office Equipment",
    "meaning": "Komputer jinjing portabel / laptop kantor",
    "babyClue": "🍼 Dua kata perangkat portabel yang bisa dibawa kemana-mana.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Desktop screen'",
      "sampleTarget": "Desktop screen",
      "sampleExplanation": "Tingkat 2 mendiktekan gabungan kata. Ketik 'Notebook' diikuti spasi lalu 'computer'."
    }
  },
  {
    "id": "dic-l2-2",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Whiteboard marker",
    "audioText": "Whiteboard marker",
    "chapterRef": "EVC Chapter 2: Meeting Room Supplies",
    "meaning": "Spidol papan tulis ruang rapat",
    "babyClue": "🍼 Dua kata alat tulis untuk presentasi di papan putih.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Desktop screen'",
      "sampleTarget": "Desktop screen",
      "sampleExplanation": "Dengarkan jeda antar kata: ketik 'Whiteboard' lalu spasi dan 'marker'."
    }
  },
  {
    "id": "dic-l2-3",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Extension number",
    "audioText": "Extension number",
    "chapterRef": "EVC Chapter 3: Office Telephone",
    "meaning": "Nomor sambungan telepon internal kantor",
    "babyClue": "🍼 Dua kata nomor nomor ekstensi meja kerja untuk telepon.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Phone number'",
      "sampleTarget": "Phone number",
      "sampleExplanation": "Dengarkan kata 'Extension' (e-x-t-e-n-s-i-o-n) diikuti kata 'number'."
    }
  },
  {
    "id": "dic-l2-4",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Identification card",
    "audioText": "Identification card",
    "chapterRef": "EVC Chapter 3: Security & Access",
    "meaning": "Kartu tanda pengenal identitas karyawan (ID card)",
    "babyClue": "🍼 Dua kata kartu pengenal identitas yang dikalungkan di kantor.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Smart card'",
      "sampleTarget": "Smart card",
      "sampleExplanation": "Kata pertama 'Identification' berima panjang, lalu spasi dan 'card'."
    }
  },
  {
    "id": "dic-l2-5",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Database management",
    "audioText": "Database management",
    "chapterRef": "Oxford IT: Database Systems",
    "meaning": "Pengelolaan basis data informasi perusahaan",
    "babyClue": "🍼 Dua kata sistem pengorganisasian tabel data terstruktur.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Data analysis'",
      "sampleTarget": "Data analysis",
      "sampleExplanation": "Dua kata: 'Database' lalu 'management'. Pastikan penulisan kata management berakhiran -ment."
    }
  },
  {
    "id": "dic-l2-6",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Network administrator",
    "audioText": "Network administrator",
    "chapterRef": "Oxford IT: Jobs in Computing",
    "meaning": "Spesialis pengelola konfigurasi dan keamanan jaringan",
    "babyClue": "🍼 Dua kata profesi IT pengatur router, kabel LAN, dan switch kantor.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Data analyst'",
      "sampleTarget": "Data analyst",
      "sampleExplanation": "Ketik 'Network' lalu spasi dan 'administrator'."
    }
  },
  {
    "id": "dic-l2-7",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Operating system",
    "audioText": "Operating system",
    "chapterRef": "Oxford IT: System Software",
    "meaning": "Sistem operasi dasar komputer (Windows, Linux, macOS)",
    "babyClue": "🍼 Dua kata perangkat lunak pengendali seluruh perangkat keras.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'System software'",
      "sampleTarget": "System software",
      "sampleExplanation": "Ketik kata 'Operating' lalu spasi dan kata 'system'."
    }
  },
  {
    "id": "dic-l2-8",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Wireless connection",
    "audioText": "Wireless connection",
    "chapterRef": "Oxford IT: Networking",
    "meaning": "Koneksi jaringan nirkabel tanpa kabel fisik (Wi-Fi)",
    "babyClue": "🍼 Dua kata teknologi gelombang radio untuk akses internet.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Fast connection'",
      "sampleTarget": "Fast connection",
      "sampleExplanation": "Ketik 'Wireless' (tanpa kabel) diikuti spasi dan 'connection'."
    }
  },
  {
    "id": "dic-l2-9",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Software developer",
    "audioText": "Software developer",
    "chapterRef": "Oxford IT: Programming Careers",
    "meaning": "Pengembang perangkat lunak / pembuat aplikasi program",
    "babyClue": "🍼 Dua kata profesi pembuat program komputer dan logika aplikasi.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Web designer'",
      "sampleTarget": "Web designer",
      "sampleExplanation": "Ketik 'Software' diikuti spasi dan kata 'developer'."
    }
  },
  {
    "id": "dic-l2-10",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Graphic designer",
    "audioText": "Graphic designer",
    "chapterRef": "EVC Chapter 4: Creative Professions",
    "meaning": "Perancang grafis visual dan antarmuka gambar",
    "babyClue": "🍼 Dua kata profesi pembuat layout visual dan materi grafis promosi.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Web designer'",
      "sampleTarget": "Web designer",
      "sampleExplanation": "Ketik 'Graphic' lalu spasi dan kata 'designer' (d-e-s-i-g-n-e-r)."
    }
  },
  {
    "id": "dic-l2-11",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Business meeting",
    "audioText": "Business meeting",
    "chapterRef": "EVC Chapter 5: Corporate Communications",
    "meaning": "Rapat koordinasi urusan bisnis dan proyek",
    "babyClue": "🍼 Dua kata pertemuan formal membahas target dan strategi kerja.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Project review'",
      "sampleTarget": "Project review",
      "sampleExplanation": "Ketik 'Business' (b-u-s-i-n-e-s-s) diikuti spasi dan kata 'meeting'."
    }
  },
  {
    "id": "dic-l2-12",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Conference room",
    "audioText": "Conference room",
    "chapterRef": "EVC Chapter 5: Workplace Facilities",
    "meaning": "Ruang pertemuan besar untuk rapat dan diskusi tim",
    "babyClue": "🍼 Dua kata ruangan kantor berpintu kaca tempat rapat penting.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Office desk'",
      "sampleTarget": "Office desk",
      "sampleExplanation": "Ketik kata 'Conference' lalu spasi dan kata 'room'."
    }
  },
  {
    "id": "dic-l2-13",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Ethernet cable",
    "audioText": "Ethernet cable",
    "chapterRef": "Vocational IT: Physical Layer",
    "meaning": "Kabel jaringan LAN berpenghubung RJ-45",
    "babyClue": "🍼 Dua kata kabel twisted pair penghubung komputer ke port switch.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Power cable'",
      "sampleTarget": "Power cable",
      "sampleExplanation": "Dengarkan kata 'Ethernet' berawalan E-t-h-e-r-n-e-t lalu 'cable'."
    }
  },
  {
    "id": "dic-l2-14",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Default gateway",
    "audioText": "Default gateway",
    "chapterRef": "CompTIA Network+: IP Routing",
    "meaning": "Alamat pintu keluar paket data menuju jaringan luar",
    "babyClue": "🍼 Dua kata alamat router perantara keluar dari subnet lokal.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Local subnet'",
      "sampleTarget": "Local subnet",
      "sampleExplanation": "Ketik kata 'Default' lalu spasi dan 'gateway'."
    }
  },
  {
    "id": "dic-l2-15",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Subnet mask",
    "audioText": "Subnet mask",
    "chapterRef": "CompTIA Network+: IPv4 Addressing",
    "meaning": "Topeng pembatas porsi network ID dan host ID dalam IP",
    "babyClue": "🍼 Dua kata angka 255.255.255.0 pembagi segmen jaringan.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Network mask'",
      "sampleTarget": "Network mask",
      "sampleExplanation": "Ketik 'Subnet' diikuti spasi dan 'mask'."
    }
  },
  {
    "id": "dic-l2-16",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Domain name server",
    "audioText": "Domain name server",
    "chapterRef": "CompTIA Network+: DNS Services",
    "meaning": "Peladen penerjemah nama situs web ke alamat IP numerik",
    "babyClue": "🍼 Tiga kata buku telepon internet penerjemah google.com ke IP address.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Web host server'",
      "sampleTarget": "Web host server",
      "sampleExplanation": "Tiga kata berturut-turut: 'Domain', spasi, 'name', spasi, 'server'."
    }
  },
  {
    "id": "dic-l2-17",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Command line interface",
    "audioText": "Command line interface",
    "chapterRef": "Oxford IT: Operating Environments",
    "meaning": "Antarmuka baris perintah teks terminal",
    "babyClue": "🍼 Tiga kata antarmuka ketik perintah hitam putih seperti cmd atau bash.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'User web interface'",
      "sampleTarget": "User web interface",
      "sampleExplanation": "Tiga kata: 'Command', spasi, 'line', spasi, 'interface'."
    }
  },
  {
    "id": "dic-l2-18",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Cloud storage backup",
    "audioText": "Cloud storage backup",
    "chapterRef": "Vocational IT: Cloud Computing",
    "meaning": "Pencadangan file ke ruang penyimpanan awan di internet",
    "babyClue": "🍼 Tiga kata pengamanan file ke server Google Drive atau AWS.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Local file backup'",
      "sampleTarget": "Local file backup",
      "sampleExplanation": "Tiga kata: 'Cloud', spasi, 'storage', spasi, 'backup'."
    }
  },
  {
    "id": "dic-l2-19",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Solid state drive",
    "audioText": "Solid state drive",
    "chapterRef": "CompTIA A+: Storage Technologies",
    "meaning": "Media penyimpanan flash berkecepatan tinggi pengganti HDD",
    "babyClue": "🍼 Tiga kata media penyimpanan SSD tanpa piringan berputar magnetik.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Hard disk drive'",
      "sampleTarget": "Hard disk drive",
      "sampleExplanation": "Tiga kata: 'Solid', spasi, 'state', spasi, 'drive'."
    }
  },
  {
    "id": "dic-l2-20",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Virtual private network",
    "audioText": "Virtual private network",
    "chapterRef": "CompTIA Network+: VPN Security",
    "meaning": "Jaringan terenkripsi aman melintasi internet publik (VPN)",
    "babyClue": "🍼 Tiga kata terowongan koneksi aman untuk pegawai kerja dari rumah.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Local private network'",
      "sampleTarget": "Local private network",
      "sampleExplanation": "Tiga kata: 'Virtual', spasi, 'private', spasi, 'network'."
    }
  },
  {
    "id": "dic-l2-21",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Fiber optic cable",
    "audioText": "Fiber optic cable",
    "chapterRef": "CompTIA Network+: Media Types",
    "meaning": "Kabel serat kaca pemancar data berkecepatan cahaya",
    "babyClue": "🍼 Tiga kata kabel super cepat pembawa sinyal pulsa cahaya.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Twisted pair cable'",
      "sampleTarget": "Twisted pair cable",
      "sampleExplanation": "Tiga kata: 'Fiber', spasi, 'optic', spasi, 'cable'."
    }
  },
  {
    "id": "dic-l2-22",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Central processing unit",
    "audioText": "Central processing unit",
    "chapterRef": "CompTIA A+: CPU Architecture",
    "meaning": "Unit pemrosesan data pusat atau otak komputer (CPU)",
    "babyClue": "🍼 Tiga kata komponen chip silikon otak utama komputasi.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Graphic processing unit'",
      "sampleTarget": "Graphic processing unit",
      "sampleExplanation": "Tiga kata: 'Central', spasi, 'processing', spasi, 'unit'."
    }
  },
  {
    "id": "dic-l2-23",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Random access memory",
    "audioText": "Random access memory",
    "chapterRef": "CompTIA A+: Memory Subsystems",
    "meaning": "Memori penyimpanan data sementara berkecepatan tinggi (RAM)",
    "babyClue": "🍼 Tiga kata modul memori kerja yang hilang saat komputer dimatikan.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Read only memory'",
      "sampleTarget": "Read only memory",
      "sampleExplanation": "Tiga kata: 'Random', spasi, 'access', spasi, 'memory'."
    }
  },
  {
    "id": "dic-l2-24",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Power supply unit",
    "audioText": "Power supply unit",
    "chapterRef": "CompTIA A+: Power & Enclosures",
    "meaning": "Perangkat catu daya penyuplai tegangan listrik DC (PSU)",
    "babyClue": "🍼 Tiga kata kotak pengubah arus AC stopkontak menjadi DC tegangan rendah.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Battery backup unit'",
      "sampleTarget": "Battery backup unit",
      "sampleExplanation": "Tiga kata: 'Power', spasi, 'supply', spasi, 'unit'."
    }
  },
  {
    "id": "dic-l2-25",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Relational database",
    "audioText": "Relational database",
    "chapterRef": "Learning SQL: RDBMS Concepts",
    "meaning": "Basis data terstruktur dalam tabel-tabel berelasi kunci utama",
    "babyClue": "🍼 Dua kata jenis database seperti MySQL dan PostgreSQL.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Simple database'",
      "sampleTarget": "Simple database",
      "sampleExplanation": "Ketik 'Relational' diikuti spasi dan kata 'database'."
    }
  },
  {
    "id": "dic-l2-26",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Primary key constraint",
    "audioText": "Primary key constraint",
    "chapterRef": "Learning SQL: Schema Definition",
    "meaning": "Batasan keunikan pengenal baris data dalam tabel",
    "babyClue": "🍼 Tiga kata aturan integritas data agar nomor ID tidak pernah kembar.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Unique index rule'",
      "sampleTarget": "Unique index rule",
      "sampleExplanation": "Tiga kata: 'Primary', spasi, 'key', spasi, 'constraint'."
    }
  },
  {
    "id": "dic-l2-27",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Firewall configuration",
    "audioText": "Firewall configuration",
    "chapterRef": "CompTIA Security+: Network Security",
    "meaning": "Pengaturan aturan lalu lintas penyaring port jaringan",
    "babyClue": "🍼 Dua kata setelan pagar penyekat koneksi berbahaya dari internet.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Router configuration'",
      "sampleTarget": "Router configuration",
      "sampleExplanation": "Ketik 'Firewall' lalu spasi dan kata 'configuration'."
    }
  },
  {
    "id": "dic-l2-28",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Malware detection",
    "audioText": "Malware detection",
    "chapterRef": "CompTIA Security+: Threat Mitigation",
    "meaning": "Pendeteksian perangkat lunak jahat dan virus sistem",
    "babyClue": "🍼 Dua kata pemindaian aktivitas mencurigakan oleh software antivirus.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Threat prevention'",
      "sampleTarget": "Threat prevention",
      "sampleExplanation": "Ketik 'Malware' lalu spasi dan kata 'detection'."
    }
  },
  {
    "id": "dic-l2-29",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Two factor authentication",
    "audioText": "Two factor authentication",
    "chapterRef": "CompTIA Security+: Identity & Access",
    "meaning": "Verifikasi ganda kata sandi ditambah kode OTP ponsel",
    "babyClue": "🍼 Tiga kata metode login aman dengan password dan kode rahasia sms/app.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'User access verification'",
      "sampleTarget": "User access verification",
      "sampleExplanation": "Tiga kata: 'Two', spasi, 'factor', spasi, 'authentication'."
    }
  },
  {
    "id": "dic-l2-30",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Software development",
    "audioText": "Software development",
    "chapterRef": "Vocational IT: Project Cycles",
    "meaning": "Siklus perancangan dan pembuatan aplikasi komputer",
    "babyClue": "🍼 Dua kata proses rekayasa aplikasi dari analisa sampai rilis.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Product development'",
      "sampleTarget": "Product development",
      "sampleExplanation": "Ketik 'Software' lalu spasi dan 'development'."
    }
  },
  {
    "id": "dic-l2-31",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Continuous integration",
    "audioText": "Continuous integration",
    "chapterRef": "Vocational IT: DevOps & CI/CD",
    "meaning": "Penggabungan kode program secara berkala dan otomatis",
    "babyClue": "🍼 Dua kata praktik pengujian dan build kode tim secara serentak.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Automated deployment'",
      "sampleTarget": "Automated deployment",
      "sampleExplanation": "Ketik 'Continuous' lalu spasi dan 'integration'."
    }
  },
  {
    "id": "dic-l2-32",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Binary search tree",
    "audioText": "Binary search tree",
    "chapterRef": "Grokking Algorithms: Data Structures",
    "meaning": "Struktur pohon biner terurut untuk pencarian data cepat",
    "babyClue": "🍼 Tiga kata diagram percabangan data kiri lebih kecil dan kanan lebih besar.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Simple linked list'",
      "sampleTarget": "Simple linked list",
      "sampleExplanation": "Tiga kata: 'Binary', spasi, 'search', spasi, 'tree'."
    }
  },
  {
    "id": "dic-l2-33",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Regular expression",
    "audioText": "Regular expression",
    "chapterRef": "Automate Python: Pattern Matching",
    "meaning": "Pola regex pencari format teks tertentu seperti email",
    "babyClue": "🍼 Dua kata rumus formula pencocokan karakter string dalam pemrograman.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'String pattern matching'",
      "sampleTarget": "String pattern matching",
      "sampleExplanation": "Ketik 'Regular' lalu spasi dan 'expression'."
    }
  },
  {
    "id": "dic-l2-34",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Exception handling",
    "audioText": "Exception handling",
    "chapterRef": "Automate Python: Error Diagnostics",
    "meaning": "Penanganan eror program menggunakan blok try dan except",
    "babyClue": "🍼 Dua kata pencegah crash aplikasi saat terjadi kesalahan runtime.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Error detection'",
      "sampleTarget": "Error detection",
      "sampleExplanation": "Ketik 'Exception' lalu spasi dan 'handling'."
    }
  },
  {
    "id": "dic-l2-35",
    "level": 2,
    "levelName": "Level 2: Dikte Kata dan Frasa",
    "targetText": "Version control system",
    "audioText": "Version control system",
    "chapterRef": "Vocational IT: Git Repository",
    "meaning": "Sistem pelacak riwayat perubahan kode sumber (Git)",
    "babyClue": "🍼 Tiga kata software pencatat snapshot riwayat kodingan tim.",
    "workedExample": {
      "sampleAudio": "Dengarkan frasa: 'Source code manager'",
      "sampleTarget": "Source code manager",
      "sampleExplanation": "Tiga kata: 'Version', spasi, 'control', spasi, 'system'."
    }
  },
  {
    "id": "dic-l3-1",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "What is your telephone extension number?",
    "audioText": "What is your telephone extension number?",
    "chapterRef": "EVC Chapter 3: Office Directory",
    "meaning": "Berapa nomor sambungan ekstensi telepon Anda?",
    "babyClue": "🍼 Pertanyaan menanyakan nomor ekstensi meja kantor.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'What is your email address?'",
      "sampleTarget": "What is your email address?",
      "sampleExplanation": "Tingkat 3 menguji ketelitian kalimat utuh. Ketik 'What is your telephone extension number?' diakhiri tanda tanya."
    }
  },
  {
    "id": "dic-l3-2",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "Please sign your name on the visitor register.",
    "audioText": "Please sign your name on the visitor register.",
    "chapterRef": "EVC Chapter 3: Office Security Desk",
    "meaning": "Silakan tanda tangani nama Anda di buku tamu.",
    "babyClue": "🍼 Instruksi resepsionis menyuruh tamu menandatangani buku hadir.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'Please enter your password.'",
      "sampleTarget": "Please enter your password.",
      "sampleExplanation": "Ketik kalimat instruksi sopan berawalan 'Please sign your name...' diakhiri titik."
    }
  },
  {
    "id": "dic-l3-3",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "Where is the emergency exit located?",
    "audioText": "Where is the emergency exit located?",
    "chapterRef": "EVC Chapter 4: Building Safety Orientation",
    "meaning": "Di manakah pintu keluar darurat berada?",
    "babyClue": "🍼 Pertanyaan denah keselamatan kerja di gedung perkantoran.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'Where is the main office?'",
      "sampleTarget": "Where is the main office?",
      "sampleExplanation": "Ketik 'Where is the emergency exit located?' diakhiri tanda tanya."
    }
  },
  {
    "id": "dic-l3-4",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "The morning conference starts at nine oclock.",
    "audioText": "The morning conference starts at nine oclock.",
    "chapterRef": "EVC Chapter 5: Daily Schedule",
    "meaning": "Konferensi pagi dimulai tepat pada pukul sembilan.",
    "babyClue": "🍼 Pemberitahuan jam mulai rapat kerja pagi hari.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'The class starts at eight.'",
      "sampleTarget": "The class starts at eight.",
      "sampleExplanation": "Ketik kata demi kata dengan spasi rapi: 'The morning conference starts at nine oclock.'"
    }
  },
  {
    "id": "dic-l3-5",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "Could you send me the technical report by email?",
    "audioText": "Could you send me the technical report by email?",
    "chapterRef": "EVC Chapter 6: Professional Correspondence",
    "meaning": "Bisakah Anda mengirimi saya laporan teknis tersebut melalui email?",
    "babyClue": "🍼 Permintaan sopan pengiriman dokumen kerja melalui surel.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'Could you help me with this task?'",
      "sampleTarget": "Could you help me with this task?",
      "sampleExplanation": "Gunakan awalan modal 'Could you send me the technical report by email?'"
    }
  },
  {
    "id": "dic-l3-6",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "We need to install the latest operating system update.",
    "audioText": "We need to install the latest operating system update.",
    "chapterRef": "Oxford IT: System Maintenance",
    "meaning": "Kita perlu memasang pembaruan sistem operasi terbaru.",
    "babyClue": "🍼 Instruksi teknisi IT untuk memperbarui patch OS komputer.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'We need to reboot the server.'",
      "sampleTarget": "We need to reboot the server.",
      "sampleExplanation": "Ketik kalimat lengkap: 'We need to install the latest operating system update.'"
    }
  },
  {
    "id": "dic-l3-7",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "The network connection is temporarily unavailable.",
    "audioText": "The network connection is temporarily unavailable.",
    "chapterRef": "Vocational IT: Helpdesk Notifications",
    "meaning": "Koneksi jaringan untuk sementara waktu tidak tersedia.",
    "babyClue": "🍼 Pesan peringatan sistem saat internet atau LAN terputus.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'The server is not responding.'",
      "sampleTarget": "The server is not responding.",
      "sampleExplanation": "Dengarkan kata 'temporarily' dan 'unavailable': ketik kalimat lengkap diakhiri titik."
    }
  },
  {
    "id": "dic-l3-8",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "Please enter your username and secure password.",
    "audioText": "Please enter your username and secure password.",
    "chapterRef": "Vocational IT: User Authentication",
    "meaning": "Silakan masukkan nama pengguna dan kata sandi aman Anda.",
    "babyClue": "🍼 Petunjuk di halaman masuk sistem aplikasi kantor.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'Please log in to your account.'",
      "sampleTarget": "Please log in to your account.",
      "sampleExplanation": "Ketik 'Please enter your username and secure password.' dengan spasi presisi."
    }
  },
  {
    "id": "dic-l3-9",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "How much memory does this workstation have?",
    "audioText": "How much memory does this workstation have?",
    "chapterRef": "Oxford IT: Hardware Specifications",
    "meaning": "Berapa kapasitas memori RAM yang dimiliki komputer kerja ini?",
    "babyClue": "🍼 Pertanyaan spesifikasi teknis komputer kantor.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'How many hard drives are installed?'",
      "sampleTarget": "How many hard drives are installed?",
      "sampleExplanation": "Ketik kalimat tanya: 'How much memory does this workstation have?'"
    }
  },
  {
    "id": "dic-l3-10",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "Would you like to have some coffee?",
    "audioText": "Would you like to have some coffee?",
    "chapterRef": "EVC Chapter 1: Hospitality & Welcome",
    "meaning": "Apakah Anda ingin meminum secangkir kopi?",
    "babyClue": "🍼 Tawaran ramah menyambut rekan bisnis atau tamu kantor.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'Nice to meet you.'",
      "sampleTarget": "Nice to meet you.",
      "sampleExplanation": "Ketik ungkapan sopan: 'Would you like to have some coffee?' diakhiri tanda tanya."
    }
  },
  {
    "id": "dic-l3-11",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "Have you tried restarting the router and modem?",
    "audioText": "Have you tried restarting the router and modem?",
    "chapterRef": "CompTIA Network+: First Step Troubleshooting",
    "meaning": "Apakah Anda sudah mencoba menyalakan ulang router dan modem?",
    "babyClue": "🍼 Pertanyaan standar tim helpdesk saat koneksi internet kantor bermasalah.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'Have you checked the cable?'",
      "sampleTarget": "Have you checked the cable?",
      "sampleExplanation": "Ketik pertanyaan diagnostik: 'Have you tried restarting the router and modem?'"
    }
  },
  {
    "id": "dic-l3-12",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "The technician replaced the faulty power supply unit.",
    "audioText": "The technician replaced the faulty power supply unit.",
    "chapterRef": "CompTIA A+: Hardware Maintenance",
    "meaning": "Teknisi telah mengganti unit catu daya yang rusak.",
    "babyClue": "🍼 Laporan perbaikan komputer PC yang mati total karena korsleting listrik.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'The engineer fixed the broken drive.'",
      "sampleTarget": "The engineer fixed the broken drive.",
      "sampleExplanation": "Ketik kalimat lampau: 'The technician replaced the faulty power supply unit.'"
    }
  },
  {
    "id": "dic-l3-13",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "Make sure the Ethernet cable is securely connected.",
    "audioText": "Make sure the Ethernet cable is securely connected.",
    "chapterRef": "CompTIA Network+: Cable Verification",
    "meaning": "Pastikan kabel Ethernet terpasang kencang pada soketnya.",
    "babyClue": "🍼 Instruksi pengecekan fisik koneksi kabel LAN komputer klien.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'Make sure the power cord is plugged in.'",
      "sampleTarget": "Make sure the power cord is plugged in.",
      "sampleExplanation": "Ketik kalimat instruksi: 'Make sure the Ethernet cable is securely connected.'"
    }
  },
  {
    "id": "dic-l3-14",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "Always backup your critical files before formatting the disk.",
    "audioText": "Always backup your critical files before formatting the disk.",
    "chapterRef": "Oxford IT: Data Protection Best Practices",
    "meaning": "Selalu cadangkan file penting Anda sebelum memformat disk.",
    "babyClue": "🍼 Aturan emas pencegahan kehilangan data sebelum instal ulang komputer.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'Save your work before closing the program.'",
      "sampleTarget": "Save your work before closing the program.",
      "sampleExplanation": "Ketik peringatan kerja: 'Always backup your critical files before formatting the disk.'"
    }
  },
  {
    "id": "dic-l3-15",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "The ping command tests network connectivity between hosts.",
    "audioText": "The ping command tests network connectivity between hosts.",
    "chapterRef": "Cisco CCNA: Network Diagnostics",
    "meaning": "Perintah ping menguji keterhubungan jaringan antar komputer.",
    "babyClue": "🍼 Penjelasan fungsi utilitas ICMP ping dalam mendeteksi latency paket.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'The traceroute tool shows every hop.'",
      "sampleTarget": "The traceroute tool shows every hop.",
      "sampleExplanation": "Ketik kalimat teknis: 'The ping command tests network connectivity between hosts.'"
    }
  },
  {
    "id": "dic-l3-16",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "Do not click on suspicious links in unsolicited emails.",
    "audioText": "Do not click on suspicious links in unsolicited emails.",
    "chapterRef": "CompTIA Security+: Phishing Prevention",
    "meaning": "Jangan mengklik tautan mencurigakan dalam email tak dikenal.",
    "babyClue": "🍼 Edukasi keamanan siber pencegah infeksi malware dan phishing.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'Do not share your password with anyone.'",
      "sampleTarget": "Do not share your password with anyone.",
      "sampleExplanation": "Ketik instruksi keamanan: 'Do not click on suspicious links in unsolicited emails.'"
    }
  },
  {
    "id": "dic-l3-17",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "The database server crashed due to high memory usage.",
    "audioText": "The database server crashed due to high memory usage.",
    "chapterRef": "Vocational IT: Incident Reporting",
    "meaning": "Server database berhenti beroperasi karena lonjakan pemakaian RAM.",
    "babyClue": "🍼 Laporan insiden sistem ketika server database kehabisan kapasitas memori.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'The web app stopped responding.'",
      "sampleTarget": "The web app stopped responding.",
      "sampleExplanation": "Ketik kalimat laporan: 'The database server crashed due to high memory usage.'"
    }
  },
  {
    "id": "dic-l3-18",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "You should change your password every ninety days.",
    "audioText": "You should change your password every ninety days.",
    "chapterRef": "CompTIA Security+: Access Control Policy",
    "meaning": "Anda sebaiknya mengganti kata sandi akun Anda setiap sembilan puluh hari.",
    "babyClue": "🍼 Kebijakan standar keamanan perusahaan untuk rotasi password.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'You should lock your screen when leaving.'",
      "sampleTarget": "You should lock your screen when leaving.",
      "sampleExplanation": "Ketik anjuran kebijakan: 'You should change your password every ninety days.'"
    }
  },
  {
    "id": "dic-l3-19",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "A firewall filters incoming and outgoing network traffic.",
    "audioText": "A firewall filters incoming and outgoing network traffic.",
    "chapterRef": "CompTIA Security+: Perimeter Defense",
    "meaning": "Firewall menyaring lalu lintas data jaringan yang masuk dan keluar.",
    "babyClue": "🍼 Prinsip kerja dinding pelindung jaringan komputer dari serangan siber.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'A router connects different local networks.'",
      "sampleTarget": "A router connects different local networks.",
      "sampleExplanation": "Ketik definisi kerja: 'A firewall filters incoming and outgoing network traffic.'"
    }
  },
  {
    "id": "dic-l3-20",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "Please verify your email address to activate the account.",
    "audioText": "Please verify your email address to activate the account.",
    "chapterRef": "Vocational IT: Account Activation",
    "meaning": "Silakan verifikasi alamat email Anda untuk mengaktifkan akun.",
    "babyClue": "🍼 Langkah wajib registrasi pengguna baru di platform cloud.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'Please check your inbox for instructions.'",
      "sampleTarget": "Please check your inbox for instructions.",
      "sampleExplanation": "Ketik instruksi aktivasi: 'Please verify your email address to activate the account.'"
    }
  },
  {
    "id": "dic-l3-21",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "The SQL query returns all active customer records.",
    "audioText": "The SQL query returns all active customer records.",
    "chapterRef": "Learning SQL: Data Query Language",
    "meaning": "Kueri SQL menampilkan seluruh rekaman pelanggan yang masih aktif.",
    "babyClue": "🍼 Deskripsi eksekusi kueri SELECT dari tabel database perusahaan.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'The script exports data to Excel.'",
      "sampleTarget": "The script exports data to Excel.",
      "sampleExplanation": "Ketik penjelasan kueri: 'The SQL query returns all active customer records.'"
    }
  },
  {
    "id": "dic-l3-22",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "An index improves the search speed of database queries.",
    "audioText": "An index improves the search speed of database queries.",
    "chapterRef": "SQL Antipatterns: Performance Tuning",
    "meaning": "Indeks meningkatkan kecepatan pencarian pada kueri database.",
    "babyClue": "🍼 Alasan teknis penambahan indeks B-tree pada kolom ID tabel besar.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'A cache reduces response latency.'",
      "sampleTarget": "A cache reduces response latency.",
      "sampleExplanation": "Ketik manfaat teknis: 'An index improves the search speed of database queries.'"
    }
  },
  {
    "id": "dic-l3-23",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "Python scripts can automate repetitive data entry tasks.",
    "audioText": "Python scripts can automate repetitive data entry tasks.",
    "chapterRef": "Automate Python: Workplace Efficiency",
    "meaning": "Skrip Python dapat mengotomatiskan pekerjaan entri data berulang.",
    "babyClue": "🍼 Solusi cerdas menghindari pekerjaan manual spreadsheet yang melelahkan.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'Macros speed up monthly reports.'",
      "sampleTarget": "Macros speed up monthly reports.",
      "sampleExplanation": "Ketik fakta produktivitas: 'Python scripts can automate repetitive data entry tasks.'"
    }
  },
  {
    "id": "dic-l3-24",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "We commit the source code to GitHub every afternoon.",
    "audioText": "We commit the source code to GitHub every afternoon.",
    "chapterRef": "Vocational IT: Agile Team Workflow",
    "meaning": "Kami menyimpan kode sumber ke GitHub setiap sore hari.",
    "babyClue": "🍼 Kebiasaan disiplin tim pengembang software agar kodingan selalu sinkron.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'We push changes to the main branch.'",
      "sampleTarget": "We push changes to the main branch.",
      "sampleExplanation": "Ketik rutinitas tim: 'We commit the source code to GitHub every afternoon.'"
    }
  },
  {
    "id": "dic-l3-25",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "Binary search is much faster than simple linear search.",
    "audioText": "Binary search is much faster than simple linear search.",
    "chapterRef": "Grokking Algorithms: Big-O Notation",
    "meaning": "Pencarian biner jauh lebih cepat daripada pencarian linier sederhana.",
    "babyClue": "🍼 Perbandingan efisiensi algoritma O(log n) melawan O(n) pada data terurut.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'Fast algorithms save server resources.'",
      "sampleTarget": "Fast algorithms save server resources.",
      "sampleExplanation": "Ketik prinsip algoritma: 'Binary search is much faster than simple linear search.'"
    }
  },
  {
    "id": "dic-l3-26",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "The server requires a secure shell connection for login.",
    "audioText": "The server requires a secure shell connection for login.",
    "chapterRef": "CompTIA Security+: Remote Administration",
    "meaning": "Server mewajibkan koneksi secure shell (SSH) untuk proses masuk.",
    "babyClue": "🍼 Standar keamanan administrasi remote server Linux menggunakan port 22.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'Use encrypted channels for management.'",
      "sampleTarget": "Use encrypted channels for management.",
      "sampleExplanation": "Ketik aturan administrasi: 'The server requires a secure shell connection for login.'"
    }
  },
  {
    "id": "dic-l3-27",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "Cloud computing allows scalable access to shared resources.",
    "audioText": "Cloud computing allows scalable access to shared resources.",
    "chapterRef": "Vocational IT: Cloud Infrastructure",
    "meaning": "Komputasi awan memungkinkan akses elastis ke sumber daya bersama.",
    "babyClue": "🍼 Definisi komputasi cloud menurut standar industri teknologi.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'Virtual machines run in the cloud.'",
      "sampleTarget": "Virtual machines run in the cloud.",
      "sampleExplanation": "Ketik definisi cloud: 'Cloud computing allows scalable access to shared resources.'"
    }
  },
  {
    "id": "dic-l3-28",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "The developer fixed the software bug before release.",
    "audioText": "The developer fixed the software bug before release.",
    "chapterRef": "Vocational IT: Software Quality Assurance",
    "meaning": "Pengembang memperbaiki celah eror perangkat lunak sebelum peluncuran.",
    "babyClue": "🍼 Tindakan preventif pengujian kode sebelum aplikasi dipakai pengguna.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'The tester found an unexpected error.'",
      "sampleTarget": "The tester found an unexpected error.",
      "sampleExplanation": "Ketik kalimat QA: 'The developer fixed the software bug before release.'"
    }
  },
  {
    "id": "dic-l3-29",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "Ensure the antivirus definitions are updated daily.",
    "audioText": "Ensure the antivirus definitions are updated daily.",
    "chapterRef": "CompTIA Security+: Endpoint Protection",
    "meaning": "Pastikan basis data definisi antivirus diperbarui setiap hari.",
    "babyClue": "🍼 Tindakan rutin pencegah infeksi varian ransomware dan spyware terbaru.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'Scan your computer for malware.'",
      "sampleTarget": "Scan your computer for malware.",
      "sampleExplanation": "Ketik instruksi kepatuhan: 'Ensure the antivirus definitions are updated daily.'"
    }
  },
  {
    "id": "dic-l3-30",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "Virtual machines share the physical hardware of the host.",
    "audioText": "Virtual machines share the physical hardware of the host.",
    "chapterRef": "Vocational IT: Hypervisor Architecture",
    "meaning": "Mesin virtual berbagi perangkat keras fisik dari komputer induk.",
    "babyClue": "🍼 Konsep dasar virtualisasi server modern berbasis hypervisor.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'Each container runs in isolation.'",
      "sampleTarget": "Each container runs in isolation.",
      "sampleExplanation": "Ketik konsep virtualisasi: 'Virtual machines share the physical hardware of the host.'"
    }
  },
  {
    "id": "dic-l3-31",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "The system administrator created a new user account.",
    "audioText": "The system administrator created a new user account.",
    "chapterRef": "Oxford IT: User Administration",
    "meaning": "Administrator sistem membuatkan akun pengguna baru.",
    "babyClue": "🍼 Proses penyiapan akses login untuk karyawan yang baru bergabung di kantor.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'The manager granted read permissions.'",
      "sampleTarget": "The manager granted read permissions.",
      "sampleExplanation": "Ketik kalimat administrasi: 'The system administrator created a new user account.'"
    }
  },
  {
    "id": "dic-l3-32",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "Wireless signals can degrade over long distances.",
    "audioText": "Wireless signals can degrade over long distances.",
    "chapterRef": "CompTIA Network+: Wireless Troubleshooting",
    "meaning": "Sinyal nirkabel dapat melemah seiring bertambahnya jarak tempuh.",
    "babyClue": "🍼 Faktor redaman sinyal Wi-Fi akibat dinding beton dan jarak pemancar.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'Antennas improve signal strength.'",
      "sampleTarget": "Antennas improve signal strength.",
      "sampleExplanation": "Ketik fakta jaringan: 'Wireless signals can degrade over long distances.'"
    }
  },
  {
    "id": "dic-l3-33",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "A solid state drive offers faster boot speeds.",
    "audioText": "A solid state drive offers faster boot speeds.",
    "chapterRef": "CompTIA A+: Storage Upgrades",
    "meaning": "Solid state drive menawarkan kecepatan booting komputer yang jauh lebih singkat.",
    "babyClue": "🍼 Keunggulan waktu nyala PC memakai SSD dibanding HDD mekanik.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'Fast drives improve performance.'",
      "sampleTarget": "Fast drives improve performance.",
      "sampleExplanation": "Ketik ulasan perangkat: 'A solid state drive offers faster boot speeds.'"
    }
  },
  {
    "id": "dic-l3-34",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "Always test the restored backup on a staging server.",
    "audioText": "Always test the restored backup on a staging server.",
    "chapterRef": "Vocational IT: Business Continuity",
    "meaning": "Selalu uji pemulihan data cadangan pada server pengujian staging.",
    "babyClue": "🍼 Verifikasi integritas arsip backup agar benar-benar dapat dipulihkan saat darurat.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'Test your emergency plan regularly.'",
      "sampleTarget": "Test your emergency plan regularly.",
      "sampleExplanation": "Ketik kaidah keandalan: 'Always test the restored backup on a staging server.'"
    }
  },
  {
    "id": "dic-l3-35",
    "level": 3,
    "levelName": "Level 3: Dikte Kalimat",
    "targetText": "Our team delivers software updates on a weekly schedule.",
    "audioText": "Our team delivers software updates on a weekly schedule.",
    "chapterRef": "Vocational IT: Agile Delivery",
    "meaning": "Tim kami meluncurkan pembaruan perangkat lunak setiap pekan.",
    "babyClue": "🍼 Ritme kerja metodologi agile scrum dalam pengiriman fitur baru ke pengguna.",
    "workedExample": {
      "sampleAudio": "Dengarkan kalimat: 'We conduct standup meetings every morning.'",
      "sampleTarget": "We conduct standup meetings every morning.",
      "sampleExplanation": "Ketik pernyataan tim: 'Our team delivers software updates on a weekly schedule.'"
    }
  }
];
