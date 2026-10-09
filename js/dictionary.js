// ================= KAMUS BAYI IT KODI (1.000 KOSAKATA LENGKAP) =================
// 10 Kategori Spesialisasi • Masing-masing 100 Istilah Standar Industri Dunia
// Analogi Bahasa Bayi Kodi Ramah Pemula + Penjelasan Teknis Standar Sertifikasi Internasional

const itDictionary = [
  {
    "term": "CPU (Central Processing Unit)",
    "category": "Hardware & Arsitektur",
    "icon": "🧠",
    "babyAnalogy": "Otak utama komputer yang menghitung dan menjalankan semua instruksi seperti koki kepala di dapur restoran.",
    "detail": "Komponen inti komputer yang mengeksekusi instruksi program melalui siklus fetch-decode-execute dengan kecepatan diukur dalam Gigahertz (GHz)."
  },
  {
    "term": "RAM (Random Access Memory)",
    "category": "Hardware & Arsitektur",
    "icon": "⚡",
    "babyAnalogy": "Meja kerja koki yang luas; semua bahan masakan yang sedang dimasak ditaruh di sini agar cepat diambil, tapi dibereskan saat restoran tutup.",
    "detail": "Memori utama komputer yang bersifat volatile; menyimpan data dan instruksi aplikasi yang sedang aktif untuk diakses secara kilat oleh CPU."
  },
  {
    "term": "Motherboard",
    "category": "Hardware & Arsitektur",
    "icon": "🗺️",
    "babyAnalogy": "Lantai dasar kota dan jalan raya utama tempat rumah prosesor, toko RAM, dan pelabuhan kabel saling terhubung.",
    "detail": "Papan sirkuit cetak utama (PCB) yang menjadi tulang punggung penghubung seluruh komponen fisik komputer melalui bus data, slot PCIe, dan soket daya."
  },
  {
    "term": "ROM (Read-Only Memory)",
    "category": "Hardware & Arsitektur",
    "icon": "📜",
    "babyAnalogy": "Buku resep rahasia yang sudah dilaminating paten; tidak bisa dihapus atau diubah walau listrik padam.",
    "detail": "Memori non-volatile yang menyimpan instruksi permanen tingkat rendah seperti firmware BIOS/UEFI yang diperlukan saat komputer pertama kali menyala."
  },
  {
    "term": "BIOS (Basic Input/Output System)",
    "category": "Hardware & Arsitektur",
    "icon": "🌅",
    "babyAnalogy": "Petugas satpam yang bangun paling pagi untuk menyalakan saklar lampu dan mengecek apakah semua pintu aman sebelum kantor dibuka.",
    "detail": "Firmware legacy antarmuka perangkat keras yang melakukan POST (Power-On Self-Test) dan memuat sistem operasi dari media penyimpanan ke RAM."
  },
  {
    "term": "UEFI (Unified Extensible Firmware Interface)",
    "category": "Hardware & Arsitektur",
    "icon": "🚀",
    "babyAnalogy": "Versi modern dan canggih dari satpam BIOS; sudah pakai tablet layar sentuh, mendukung pintu raksasa, dan punya brankas keamanan Secure Boot.",
    "detail": "Pengganti BIOS modern dengan arsitektur 64-bit yang mendukung partisi drive GPT lebih dari 2 TB, GUI grafis dengan mouse, dan validasi Secure Boot."
  },
  {
    "term": "GPU (Graphics Processing Unit)",
    "category": "Hardware & Arsitektur",
    "icon": "🎨",
    "babyAnalogy": "Ribuan pelukis cilik yang bekerja serentak mewarnai jutaan titik piksel game 3D dalam sepersekian detik.",
    "detail": "Prosesor terspesialisasi dengan ribuan core pemrosesan paralel untuk komputasi grafis berkecepatan tinggi, rendering visual 3D, dan percepatan AI/tensor."
  },
  {
    "term": "HDD (Hard Disk Drive)",
    "category": "Hardware & Arsitektur",
    "icon": "📀",
    "babyAnalogy": "Gudang arsip mekanik kuno yang memutar piringan piring hitam dengan jarum pembaca magnetik.",
    "detail": "Media penyimpanan magnetik non-volatile tradisional dengan piringan berputar (platters) yang memiliki kapasitas besar namun kecepatan I/O terbatas putaran RPM."
  },
  {
    "term": "SSD (Solid State Drive)",
    "category": "Hardware & Arsitektur",
    "icon": "🏎️",
    "babyAnalogy": "Lemari arsip chip kilat tanpa komponen bergerak; membaca dokumen secepat membalik telapak tangan.",
    "detail": "Media penyimpanan data modern non-volatile berbasis flash memory NAND tanpa bagian bergerak mekanis, menghasilkan latensi sangat rendah dan throughput tinggi."
  },
  {
    "term": "NVMe (Non-Volatile Memory Express)",
    "category": "Hardware & Arsitektur",
    "icon": "🚀",
    "babyAnalogy": "Jalan tol layang khusus berkecepatan jet yang menghubungkan SSD langsung ke jantung prosesor tanpa macet antre di jalan lama.",
    "detail": "Protokol komunikasi transfer data berkecepatan tinggi yang dirancang khusus untuk media flash storage memanfaatkan jalur bus PCI Express (PCIe)."
  },
  {
    "term": "PSU (Power Supply Unit)",
    "category": "Hardware & Arsitektur",
    "icon": "🔌",
    "babyAnalogy": "Jantung dan pompa darah yang mengubah arus listrik PLN liar menjadi arus yang pas dan aman untuk seluruh organ tubuh komputer.",
    "detail": "Komponen yang mengonversi arus bolak-balik (AC) tegangan tinggi dari jala-jala listrik PLN menjadi arus searah (DC) tegangan rendah yang stabil (3.3V, 5V, 12V)."
  },
  {
    "term": "Heatsink",
    "category": "Hardware & Arsitektur",
    "icon": "❄️",
    "babyAnalogy": "Pagar radiator aluminium berpancang banyak yang menyerap keringat panas dari prosesor agar tidak terbakar gosong.",
    "detail": "Komponen pendingin pasif berbahan logam konduktor tinggi (aluminium atau tembaga) bersirip luas untuk membuang panas CPU ke udara sekitar."
  },
  {
    "term": "Thermal Paste (Pasta Pendingin)",
    "category": "Hardware & Arsitektur",
    "icon": "🧴",
    "babyAnalogy": "Lem gel dingin yang mengisi lubang-lubang mikroskopis antara punggung prosesor dan dasar heatsink agar panas terserap sempurna.",
    "detail": "Senyawa pasta termal perantara untuk menjembatani celah udara mikroskopis antara permukaan prosesor (IHS) dan pendingin guna konduktivitas termal maksimal."
  },
  {
    "term": "Chassis / Case",
    "category": "Hardware & Arsitektur",
    "icon": "🏰",
    "babyAnalogy": "Baju zirah dan rumah pelindung yang menjaga semua organ dalam komputer dari benturan, debu, dan cipratan air.",
    "detail": "Rangka casing tempat menopang dan mengamankan seluruh komponen fisik PC serta mengatur aliran sirkulasi udara (airflow) pendinginan."
  },
  {
    "term": "Bus Data",
    "category": "Hardware & Arsitektur",
    "icon": "🚌",
    "babyAnalogy": "Jalan tol kabel tempat bus-bus kecil mengangkut rombongan bit data (0 dan 1) antara memori dan prosesor.",
    "detail": "Jalur sirkuit paralel pada motherboard yang mentransmisikan data mentah biner antar komponen internal komputer."
  },
  {
    "term": "Address Bus",
    "category": "Hardware & Arsitektur",
    "icon": "📫",
    "babyAnalogy": "Papan penunjuk alamat rumah yang memberi tahu kurir di mana nomor kamar RAM yang dituju.",
    "detail": "Kumpulan jalur sirkuit yang menentukan lokasi alamat fisik memori di mana data harus dibaca atau ditulis oleh CPU."
  },
  {
    "term": "Control Bus",
    "category": "Hardware & Arsitektur",
    "icon": "🚦",
    "babyAnalogy": "Polisi lalu lintas yang memberi sinyal 'Sekarang boleh membaca!' atau 'Tunggu, jangan menulis dulu!'.",
    "detail": "Jalur sinyal pengendali yang menyinkronkan timing operasi CPU, seperti sinyal baca (Read), tulis (Write), dan interupsi (Interrupt)."
  },
  {
    "term": "PCIe (PCI Express)",
    "category": "Hardware & Arsitektur",
    "icon": "🛣️",
    "babyAnalogy": "Jalur rel kecepatan tinggi tempat menancapkan kartu grafis, kartu suara, atau kartu jaringan canggih.",
    "detail": "Standar antarmuka bus ekspansi berkecepatan tinggi serial point-to-point untuk menghubungkan periferal kartu ke motherboard."
  },
  {
    "term": "Clock Speed",
    "category": "Hardware & Arsitektur",
    "icon": "⏰",
    "babyAnalogy": "Detak irama metronom musik yang mengatur seberapa cepat prosesor menghitung langkah demi langkah per detik.",
    "detail": "Frekuensi osilasi siklus internal CPU yang diukur dalam Hertz (biasanya GHz), menentukan jumlah siklus instruksi per detik."
  },
  {
    "term": "Overclocking",
    "category": "Hardware & Arsitektur",
    "icon": "⚡",
    "babyAnalogy": "Memaksa mobil balap melaju melebihi batas kecepatan pabrik dengan risiko mesin lebih cepat panas.",
    "detail": "Praktik mengonfigurasi frekuensi clock CPU atau GPU lebih tinggi dari spesifikasi resmi pabrik untuk meningkatkan performa komputasi."
  },
  {
    "term": "Cache L1, L2, L3",
    "category": "Hardware & Arsitektur",
    "icon": "🏎️",
    "babyAnalogy": "Saku baju koki yang menyimpan garam dan pisau kecil terpenting agar tidak perlu bolak-balik ke meja dapur.",
    "detail": "Memori statis SRAM berkecepatan super tinggi terintegrasi di dalam die silikon CPU untuk menyimpan data dan instruksi yang paling sering diakses."
  },
  {
    "term": "Register",
    "category": "Hardware & Arsitektur",
    "icon": "🤏",
    "babyAnalogy": "Tangan koki itu sendiri; tempat memegang satu sendok bumbu yang sedang dimasukkan saat ini juga.",
    "detail": "Area penyimpanan memori internal CPU terkecil dan tercepat yang digunakan langsung oleh unit logika aritmatika untuk manipulasi operand."
  },
  {
    "term": "ALU (Arithmetic Logic Unit)",
    "category": "Hardware & Arsitektur",
    "icon": "➕",
    "babyAnalogy": "Kalkulator matematika di dalam otak CPU yang bertugas menambah, mengurang, dan mengecek logika benar/salah.",
    "detail": "Sub-komponen prosesor yang mengeksekusi operasi aritmatika biner (+, -, *, /) serta perbandingan logika bitwise (AND, OR, NOT, XOR)."
  },
  {
    "term": "CU (Control Unit)",
    "category": "Hardware & Arsitektur",
    "icon": "🎩",
    "babyAnalogy": "Konduktor orkestra di dalam CPU yang membagi giliran dan mengarahkan aliran instruksi ke instrumen yang tepat.",
    "detail": "Komponen CPU yang menginterpretasikan kode instruksi program dan mengoordinasikan eksekusi sinyal kontrol antar komponen sistem."
  },
  {
    "term": "Socket CPU",
    "category": "Hardware & Arsitektur",
    "icon": "🔌",
    "babyAnalogy": "Kursi tahta khusus di motherboard dengan ratusan pin emas tempat prosesor duduk dengan presisi.",
    "detail": "Konektor fisik berkontak elektrik di motherboard (seperti LGA atau AM5) tempat prosesor dipasang dan dikunci."
  },
  {
    "term": "LGA (Land Grid Array)",
    "category": "Hardware & Arsitektur",
    "icon": "📍",
    "babyAnalogy": "Soket model 'bantalan jarum di motherboard', sementara perut prosesornya rata bertabur titik emas halus.",
    "detail": "Kemasan soket prosesor (biasa digunakan Intel) di mana pin-pin pegas berada di motherboard dan prosesor hanya memiliki titik kontak datar."
  },
  {
    "term": "PGA (Pin Grid Array)",
    "category": "Hardware & Arsitektur",
    "icon": "📌",
    "babyAnalogy": "Model soket di mana jarum-jarum tajam berada di punggung prosesor dan motherboard hanya memiliki lubang colokan.",
    "detail": "Kemasan soket prosesor tradisional di mana pin elektrik fisik menonjol dari prosesor dan dimasukkan ke dalam lubang soket motherboard."
  },
  {
    "term": "BGA (Ball Grid Array)",
    "category": "Hardware & Arsitektur",
    "icon": "🔘",
    "babyAnalogy": "Prosesor yang disolder permanen dengan bola-bola timah kecil di motherboard laptop/ponsel sehingga tidak bisa dicopot pasang.",
    "detail": "Tipe pemasangan chip permukaan di mana prosesor disolder permanen langsung ke motherboard menggunakan bola timah padat."
  },
  {
    "term": "Form Factor (ATX, Micro-ATX, Mini-ITX)",
    "category": "Hardware & Arsitektur",
    "icon": "📐",
    "babyAnalogy": "Ukuran baju motherboard; dari ukuran jubah raksasa (ATX), kemeja sedang (mATX), sampai rompi mungil (ITX).",
    "detail": "Standar spesifikasi industri yang mengatur dimensi fisik fisik ukuran motherboard, pola letak baut, dan tata letak slot komponen."
  },
  {
    "term": "Chipset (Northbridge & Southbridge)",
    "category": "Hardware & Arsitektur",
    "icon": "🚦",
    "babyAnalogy": "Dua asisten manajer kota di motherboard yang mengatur jalur komunikasi cepat (grafis/RAM) dan lambat (USB/Harddisk).",
    "detail": "Kumpulan sirkuit terpadu pada motherboard yang mengelola komunikasi data antara CPU dan komponen periferal lainnya."
  },
  {
    "term": "CMOS Battery (CR2032)",
    "category": "Hardware & Arsitektur",
    "icon": "🔋",
    "babyAnalogy": "Baterai kancing jam tangan yang menjaga komputer tetap ingat tanggal dan jam meskipun kabel listrik dicabut berbulan-bulan.",
    "detail": "Baterai koin litium 3V yang memberi daya cadangan pada chip CMOS motherboard untuk menyimpan setelan BIOS dan waktu RTC."
  },
  {
    "term": "Dual-Channel Memory",
    "category": "Hardware & Arsitektur",
    "icon": "🛣️",
    "babyAnalogy": "Membuka dua loket kasir tol sekaligus agar mobil data RAM bisa masuk dua kali lebih banyak tanpa antre.",
    "detail": "Teknologi memori motherboard yang melipatgandakan bandwidth transfer data RAM dengan menggunakan dua saluran fisik 64-bit independen."
  },
  {
    "term": "ECC RAM (Error-Correcting Code)",
    "category": "Hardware & Arsitektur",
    "icon": "🛡️",
    "babyAnalogy": "RAM berparasut pengaman yang otomatis membetulkan kesalahan salah ketik angka nol menjadi satu akibat radiasi kosmik.",
    "detail": "Memori khusus server yang mendeteksi dan secara otomatis memperbaiki galat kerusakan bit data tunggal untuk mencegah crash sistem."
  },
  {
    "term": "SATA (Serial ATA)",
    "category": "Hardware & Arsitektur",
    "icon": "🎗️",
    "babyAnalogy": "Kabel pita merah gepeng yang menghubungkan harddisk atau DVD-drive ke motherboard.",
    "detail": "Antarmuka bus komputer untuk menghubungkan adapter host bus ke perangkat penyimpanan massal seperti harddisk dan SSD optik."
  },
  {
    "term": "M.2 Slot",
    "category": "Hardware & Arsitektur",
    "icon": "📏",
    "babyAnalogy": "Slot seukuran permen karet di permukaan motherboard tempat menancapkan SSD NVMe tanpa perlu kabel-kabel semrawut.",
    "detail": "Faktor bentuk konektor ekspansi internal kecil yang mendukung standar antarmuka SATA dan PCIe untuk SSD kompak atau modul Wi-Fi."
  },
  {
    "term": "RAID (Redundant Array of Independent Disks)",
    "category": "Hardware & Arsitektur",
    "icon": "👥",
    "babyAnalogy": "Menggabungkan banyak harddisk kecil menjadi satu tim sepak bola super kuat agar jika satu pingsan, data tetap aman terselamatkan.",
    "detail": "Teknologi virtualisasi penyimpanan yang menggabungkan beberapa drive fisik menjadi satu unit logis untuk redundansi keamanan atau performa."
  },
  {
    "term": "RAID 0 (Striping)",
    "category": "Hardware & Arsitektur",
    "icon": "🏎️",
    "babyAnalogy": "Membagi tugas menulis buku ke dua orang sekaligus agar selesai 2x lebih cepat, tapi kalau satu orang hilang, bukunya rusak total.",
    "detail": "Konfigurasi RAID tanpa toleransi kesalahan yang memecah blok data di dua disk atau lebih untuk memaksimalkan kecepatan throughput I/O."
  },
  {
    "term": "RAID 1 (Mirroring)",
    "category": "Hardware & Arsitektur",
    "icon": "🪞",
    "babyAnalogy": "Menulis dua buku kembar identik di dua meja berbeda; jika satu buku basah terbakar, buku kembarannya tetap utuh sempurna.",
    "detail": "Konfigurasi RAID dengan menduplikasi salinan data identik pada dua drive secara simultan untuk memastikan ketersediaan data (redundansi 100%)."
  },
  {
    "term": "RAID 5 (Parity)",
    "category": "Hardware & Arsitektur",
    "icon": "🧩",
    "babyAnalogy": "Tiga orang menulis buku ditambah satu bab rumus matematika pembuktian; jika ada satu orang hilang, babnya bisa dihitung ulang kembali.",
    "detail": "Konfigurasi RAID yang menggabungkan striping data dengan blok paritas terdistribusi di minimal tiga drive untuk toleransi kegagalan satu disk."
  },
  {
    "term": "RAID 10 (1+0)",
    "category": "Hardware & Arsitektur",
    "icon": "🏰",
    "babyAnalogy": "Kombinasi juara: separuh tim balapan secepat kilat (Striping), dan separuh tim lagi menduplikat cadangan kembar (Mirroring).",
    "detail": "Kombinasi striping dan mirroring (RAID 1+0) yang memberikan performa kecepatan baca-tulis tinggi sekaligus redundansi ganda."
  },
  {
    "term": "Optical Drive (CD/DVD/Blu-ray)",
    "category": "Hardware & Arsitektur",
    "icon": "💿",
    "babyAnalogy": "Pemutar piringan kaset berkilau yang dibaca menggunakan laser merah atau biru halus.",
    "detail": "Perangkat keras penyimpanan eksternal yang membaca dan menulis data ke piringan cakram optik menggunakan sinar laser dioda."
  },
  {
    "term": "Expansion Card",
    "category": "Hardware & Arsitektur",
    "icon": "🃏",
    "babyAnalogy": "Kartu ajaib tambahan yang ditancapkan ke slot motherboard untuk menambah kemampuan baru, seperti Wi-Fi atau port USB ekstra.",
    "detail": "Papan sirkuit cetak cetak tambahan yang dipasang ke slot bus ekspansi motherboard untuk menambah fungsi khusus ke sistem PC."
  },
  {
    "term": "NIC (Network Interface Card)",
    "category": "Hardware & Arsitektur",
    "icon": "🌐",
    "babyAnalogy": "Mulut dan telinga komputer untuk berbicara dan mendengar kabel internet LAN atau gelombang Wi-Fi.",
    "detail": "Perangkat keras antarmuka sirkuit yang menghubungkan komputer ke jaringan lokal fisik kabel (RJ-45) atau nirkabel (Wi-Fi)."
  },
  {
    "term": "Sound Card",
    "category": "Hardware & Arsitektur",
    "icon": "🎵",
    "babyAnalogy": "Tukang penerjemah kode angka komputer menjadi gelombang suara merdu di speaker dan headset kamu.",
    "detail": "Kartu ekspansi internal atau chip terintegrasi yang memproses data audio biner menjadi sinyal listrik analog untuk speaker/headset."
  },
  {
    "term": "Cooling Fan (Kipas Pendingin)",
    "category": "Hardware & Arsitektur",
    "icon": "🌀",
    "babyAnalogy": "Baling-baling kipas yang meniup udara panas keluar dari casing agar komponen di dalam tetap sejuk dan tidak gerah.",
    "detail": "Perangkat pendingin aktif berbilah putar yang menghasilkan aliran konveksi udara dingin ke dalam dan mengeluarkan udara panas keluar casing."
  },
  {
    "term": "Liquid Cooling (Pendingin Cair)",
    "category": "Hardware & Arsitektur",
    "icon": "💧",
    "babyAnalogy": "Sirkulasi selang air dingin seperti radiator mobil yang menyerap panas ekstrim prosesor gaming jauh lebih hening dan efisien.",
    "detail": "Sistem pendingin tertutup yang mensirkulasikan cairan pendingin khusus (coolant) melalui water block CPU, selang, dan radiator berpeniup kipas."
  },
  {
    "term": "TDP (Thermal Design Power)",
    "category": "Hardware & Arsitektur",
    "icon": "🔥",
    "babyAnalogy": "Angka peringatan dari pabrik tentang berapa banyak panas maksimal yang akan disemburkan prosesor saat bekerja keras.",
    "detail": "Daya disipasi panas teoritis maksimum dalam satuan Watt yang dihasilkan chip CPU/GPU di bawah beban kerja berat yang harus mampu dibuang heatsink."
  },
  {
    "term": "Peripheral",
    "category": "Hardware & Arsitektur",
    "icon": "🖱️",
    "babyAnalogy": "Semua teman tambahan komputer di luar kotak CPU: keyboard, mouse, monitor, printer, dan kamera web.",
    "detail": "Perangkat keras bantu eksternal yang terhubung ke sistem komputer untuk menyediakan fungsionalitas input, output, atau penyimpanan tambahan."
  },
  {
    "term": "Input Device",
    "category": "Hardware & Arsitektur",
    "icon": "⌨️",
    "babyAnalogy": "Pintu masuk perintah dari manusia ke komputer, seperti tombol keyboard, klik mouse, atau sentuhan stylus pen.",
    "detail": "Perangkat keras yang mengonversi data atau tindakan fisik pengguna menjadi sinyal biner elektrik yang dapat dipahami sistem komputer."
  },
  {
    "term": "Output Device",
    "category": "Hardware & Arsitektur",
    "icon": "🖥️",
    "babyAnalogy": "Pintu keluar hasil kerja komputer untuk dilihat atau didengar manusia, seperti layar monitor, cetakan kertas, atau suara speaker.",
    "detail": "Perangkat keras yang mengonversi informasi komputasi biner yang diproses komputer menjadi format fisik yang dapat diindra manusia."
  },
  {
    "term": "Monitor Resolution (FHD, 2K, 4K)",
    "category": "Hardware & Arsitektur",
    "icon": "📺",
    "babyAnalogy": "Kepadatan jumlah kotak warna lampu cilik di layar; makin banyak kotaknya, gambar tampak makin halus dan tajam.",
    "detail": "Jumlah piksel diskrit dimensi horizontal dan vertikal yang dapat ditampilkan layar display monitor (misal 1920x1080 untuk FHD, 3840x2160 untuk 4K)."
  },
  {
    "term": "Refresh Rate (Hz)",
    "category": "Hardware & Arsitektur",
    "icon": "🎞️",
    "babyAnalogy": "Berapa kali layar menggambar ulang gambar per detik; 144 Hz artinya kartun bergerak 144 kali per detik sehingga sangat mulus.",
    "detail": "Frekuensi berapa kali per detik panel layar memperbarui gambar visual yang ditampilkan, diukur dalam satuan Hertz (Hz)."
  },
  {
    "term": "DisplayPort (DP)",
    "category": "Hardware & Arsitektur",
    "icon": "🔌",
    "babyAnalogy": "Kabel saluran super lebar untuk mengalirkan video resolusi tinggi dan kecepatan refresh kilat ke monitor gaming.",
    "detail": "Antarmuka tampilan audio/video digital standar VESA dengan bandwidth lebar yang mendukung multi-monitor daisy-chaining dan refresh rate tinggi."
  },
  {
    "term": "HDMI (High-Definition Multimedia Interface)",
    "category": "Hardware & Arsitektur",
    "icon": "📺",
    "babyAnalogy": "Kabel serbaguna terpopuler yang mengangkut gambar video jernih sekaligus suara film ke TV atau proyektor dalam satu tali kabel.",
    "detail": "Antarmuka kepemilikan audio/video digital kompak untuk mentransmisikan data video digital tanpa kompresi dan data audio terkompresi."
  },
  {
    "term": "VGA (Video Graphics Array)",
    "category": "Hardware & Arsitektur",
    "icon": "🟦",
    "babyAnalogy": "Kabel colokan biru berkepala 15 jarum kuno zaman komputer tabung yang mengirim gambar menggunakan sinyal analog.",
    "detail": "Antarmuka tampilan analog warisan standar grafis komputer IBM tahun 1987 yang rentan terhadap interferensi distorsi jarak jauh."
  },
  {
    "term": "DVI (Digital Visual Interface)",
    "category": "Hardware & Arsitektur",
    "icon": "⬜",
    "babyAnalogy": "Colokan video digital warna putih berukuran besar dengan baut pengunci di kiri-kanannya sebelum HDMI terkenal.",
    "detail": "Standar antarmuka tampilan video digital yang dirancang untuk mentransmisikan sinyal video digital tanpa kompresi ke layar LCD."
  },
  {
    "term": "USB (Universal Serial Bus)",
    "category": "Hardware & Arsitektur",
    "icon": "🔌",
    "babyAnalogy": "Colokan sejuta umat sedunia tempat mencolokkan flashdisk, mouse, charger, dan keyboard ke komputer.",
    "detail": "Standar industri konektor fisik dan protokol komunikasi bus data serial untuk koneksi, komunikasi, dan suplai daya antar komputer dan periferal."
  },
  {
    "term": "USB-C",
    "category": "Hardware & Arsitektur",
    "icon": "🔄",
    "babyAnalogy": "Colokan masa depan yang bentuknya bulat lonjong pipih dan bisa dicolok bolak-balik tanpa takut salah arah terbalik.",
    "detail": "Sistem konektor 24-pin reversible simetris yang mendukung pengiriman daya USB-PD hingga 240W, data USB4, serta sinyal tampilan DisplayPort."
  },
  {
    "term": "Thunderbolt",
    "category": "Hardware & Arsitektur",
    "icon": "⚡",
    "babyAnalogy": "Colokan berkepala petir sakti yang bisa mentransfer file secepat kilat, mencolok monitor 8K, dan memberi daya laptop sekaligus.",
    "detail": "Antarmuka perangkat keras serbaguna berkecepatan sangat tinggi (hingga 40-80 Gbps) yang menggabungkan PCIe, DisplayPort, dan DC power."
  },
  {
    "term": "Jumper Motherboard",
    "category": "Hardware & Arsitektur",
    "icon": "📎",
    "babyAnalogy": "Kancing plastik kecil penjepit dua pin kawat di motherboard untuk mereset setelan BIOS atau saklar manual rahasia.",
    "detail": "Penghubung sirkuit mini yang digunakan untuk menutup, membuka, atau mengonfigurasi jalur listrik sirkuit motherboard secara manual."
  },
  {
    "term": "POST (Power-On Self-Test)",
    "category": "Hardware & Arsitektur",
    "icon": "🩺",
    "babyAnalogy": "Pemeriksaan kesehatan kilat saat tombol power ditekan: mengecek apakah detak jantung CPU, ingatan RAM, dan kartu grafis hadir selamat.",
    "detail": "Rangkaian diagnosis rutin firmware saat pertama kali komputer dinyalakan untuk memastikan seluruh komponen esensial siap beroperasi."
  },
  {
    "term": "Beep Code",
    "category": "Hardware & Arsitektur",
    "icon": "🔊",
    "babyAnalogy": "Bunyi kode morse peluit dari speaker mini motherboard yang memberi tahu bagian mana yang sakit (misal: 3 bunyi tit = RAM longgar).",
    "detail": "Sinyal kode suara pendek/panjang yang dipancarkan motherboard saat terjadi kegagalan hardware kritis ketika layar monitor belum mampu menyala."
  },
  {
    "term": "KVM Switch (Keyboard, Video, Mouse)",
    "category": "Hardware & Arsitektur",
    "icon": "🔀",
    "babyAnalogy": "Saklar ajaib yang membuat satu keyboard, satu monitor, dan satu mouse bisa dipakai bergantian mengendalikan banyak komputer server.",
    "detail": "Perangkat keras switching yang memungkinkan pengguna mengendalikan beberapa unit komputer dari satu set konsol keyboard, video monitor, dan mouse."
  },
  {
    "term": "UPS (Uninterruptible Power Supply)",
    "category": "Hardware & Arsitektur",
    "icon": "🔋",
    "babyAnalogy": "Baterai genset darurat di bawah meja yang mencegah komputer mati mendadak saat lampu PLN padam sehingga sempat menyimpan skripsi.",
    "detail": "Perangkat baterai cadangan yang menyediakan daya darurat seketika saat sumber listrik utama padam untuk mencegah kerusakan data dan hardware."
  },
  {
    "term": "Surge Protector",
    "category": "Hardware & Arsitektur",
    "icon": "⚡",
    "babyAnalogy": "Tameng saklar colokan yang menyerap sambaran petir liar agar komputer kesayangan tidak gosong tersengat voltase tinggi.",
    "detail": "Alat pelindung lonjakan voltase yang mengalihkan tegangan listrik berlebih ke kabel arde (grounding) agar sirkuit elektronik tidak rusak."
  },
  {
    "term": "Static Electricity (ESD)",
    "category": "Hardware & Arsitektur",
    "icon": "⚡",
    "babyAnalogy": "Listrik statis kaget seperti gesekan baju wol di karpet yang bisa membunuh chip motherboard seketika jika dipegang tanpa gelang anti-statis.",
    "detail": "Electrostatic Discharge; pelepasan arus listrik mendadak antara dua benda berbeda muatan yang dapat merusak komponen sirkuit semikonduktor mikro."
  },
  {
    "term": "Anti-Static Wrist Strap",
    "category": "Hardware & Arsitektur",
    "icon": "🧤",
    "babyAnalogy": "Gelang karet berkabel penjepit yang membuang listrik tubuh teknisi ke lantai agar chip komputer aman saat dibongkar pasang.",
    "detail": "Gelang pengaman teknisi berkawat grounding untuk menetralisir akumulasi muatan elektrostatis tubuh sebelum menyentuh komponen IC sensitif."
  },
  {
    "term": "Multimeter",
    "category": "Hardware & Arsitektur",
    "icon": "📟",
    "babyAnalogy": "Termometer dan stetoskop listrik teknisi untuk mengukur berapa voltase baterai, watt listrik, dan apakah ada kawat yang putus.",
    "detail": "Alat ukur elektronik diagnostik untuk mengukur tegangan listrik (Volt), arus (Ampere), dan hambatan resistansi sirkuit (Ohm)."
  },
  {
    "term": "Cable Tester",
    "category": "Hardware & Arsitektur",
    "icon": "🧪",
    "babyAnalogy": "Alat pemeriksa berkancing lampu LED berurutan 1 sampai 8 untuk mengecek apakah crimping kabel LAN RJ-45 sudah tersambung sempurna.",
    "detail": "Alat uji diagnostik portabel untuk memverifikasi kontinuitas dan integritas urutan kabel twisted-pair pada konektor RJ-45."
  },
  {
    "term": "Crimping Tool",
    "category": "Hardware & Arsitektur",
    "icon": "🔧",
    "babyAnalogy": "Tang besi penjepit sakti untuk memasang dan mengunci kepala bening RJ-45 ke ujung kabel jaringan LAN.",
    "detail": "Tang pemeras presisi khusus untuk memasang konektor modular (seperti RJ-45 dan RJ-11) ke kabel transmisi fisik dengan menancapkan bilah tembaga."
  },
  {
    "term": "Thermal Throttling",
    "category": "Hardware & Arsitektur",
    "icon": "🥵",
    "babyAnalogy": "Prosesor yang sengaja memelankan larinya secara otomatis karena sudah terlalu panas agar kepalanya tidak meleleh terbakar.",
    "detail": "Mekanisme proteksi internal otomatis CPU/GPU yang menurunkan clock speed dan voltase kerja saat suhu silikon mendekati batas TJunction max."
  },
  {
    "term": "Integrated Graphics (iGPU)",
    "category": "Hardware & Arsitektur",
    "icon": "🐣",
    "babyAnalogy": "Kartu grafis mini hemat daya yang sudah menempel gratis di dalam rumah prosesor tanpa perlu membeli kartu grafis tambahan.",
    "detail": "Sirkuit pengolah grafis terintegrasi langsung di dalam satu keping die prosesor (APU/SoC), memanfaatkan sebagian memori RAM utama sistem."
  },
  {
    "term": "Dedicated GPU (dGPU)",
    "category": "Hardware & Arsitektur",
    "icon": "🦅",
    "babyAnalogy": "Kartu grafis monster terpisah dengan kipas besar dan memori VRAM sendiri untuk bermain game berat dan melatih model kecerdasan buatan.",
    "detail": "Unit kartu grafis independen terpisah dengan prosesor grafis dedicated dan memori VRAM khusus berkecepatan tinggi terpasang di slot PCIe."
  },
  {
    "term": "VRAM (Video RAM)",
    "category": "Hardware & Arsitektur",
    "icon": "🎞️",
    "babyAnalogy": "Meja kerja khusus kartu grafis tempat menyimpan tekstur pemandangan 3D, bayangan sinar cahaya, dan gambar resolusi tinggi.",
    "detail": "Memori akses acak berkecepatan tinggi (seperti GDDR6 atau HBM) khusus pada kartu grafis untuk menyimpan buffer gambar dan tekstur render."
  },
  {
    "term": "SoC (System on a Chip)",
    "category": "Hardware & Arsitektur",
    "icon": "📦",
    "babyAnalogy": "Satu keping chip sakti yang sudah berisi prosesor, kartu grafis, memori, dan pengatur jaringan sekaligus seperti di dalam smartphone.",
    "detail": "Sirkuit terpadu (IC) yang mengintegrasikan seluruh komponen fungsional komputer lengkap ke dalam satu keping silikon mikro tunggal."
  },
  {
    "term": "ARM Architecture",
    "category": "Hardware & Arsitektur",
    "icon": "🔋",
    "babyAnalogy": "Desain prosesor irit baterai yang gesit dan tidak cepat panas, sangat disukai smartphone dan laptop modern tipis.",
    "detail": "Arsitektur prosesor Reduced Instruction Set Computer (RISC) 32/64-bit yang efisien daya tinggi, dominan pada perangkat mobile dan embedded."
  },
  {
    "term": "x86 / x86-64 Architecture",
    "category": "Hardware & Arsitektur",
    "icon": "🏋️",
    "babyAnalogy": "Desain prosesor bertenaga kuda klasik buatan Intel dan AMD yang menjadi standar utama komputer PC dan server dunia selama puluhan tahun.",
    "detail": "Arsitektur instruksi CISC (Complex Instruction Set Computer) standar industri komputasi desktop dan server berkinerja tinggi."
  },
  {
    "term": "Microcode",
    "category": "Hardware & Arsitektur",
    "icon": "📜",
    "babyAnalogy": "Terjemahan bahasa rahasia internal di dalam prosesor yang mengajari sirkuit keras bagaimana cara mengeksekusi instruksi rumit.",
    "detail": "Lapisan instruksi perangkat keras tingkat terendah di dalam CPU yang menerjemahkan instruksi bahasa mesin kompleks menjadi micro-ops primitif."
  },
  {
    "term": "Instruction Set Architecture (ISA)",
    "category": "Hardware & Arsitektur",
    "icon": "📖",
    "babyAnalogy": "Kamus bahasa resmi yang disepakati bersama antara pembuat software dan pembuat prosesor agar mereka saling mengerti.",
    "detail": "Model abstrak antarmuka antara perangkat lunak dan perangkat keras yang mendefinisikan set instruksi, register, dan manajemen memori prosesor."
  },
  {
    "term": "Pipeline (CPU Pipelining)",
    "category": "Hardware & Arsitektur",
    "icon": "🏭",
    "babyAnalogy": "Pabrik ban berjalan di mana mobil dirakit bertahap: satu pekerja memasang roda, pekerja lain memasang pintu di waktu yang sama.",
    "detail": "Teknik arsitektur CPU di mana beberapa instruksi program diproses secara tumpang-tindih dalam tahapan eksekusi simultan."
  },
  {
    "term": "Direct Memory Access (DMA)",
    "category": "Hardware & Arsitektur",
    "icon": "🚚",
    "babyAnalogy": "Jalan pintas langsung bagi harddisk mengirim barang ke gudang RAM tanpa perlu mengganggu CPU yang sedang pusing berhitung.",
    "detail": "Fitur sistem komputer yang memungkinkan subsistem perangkat keras membaca/menulis ke memori RAM tanpa beban pemrosesan langsung dari CPU."
  },
  {
    "term": "Interrupt Request (IRQ)",
    "category": "Hardware & Arsitektur",
    "icon": "🙋",
    "babyAnalogy": "Siswa yang mengacungkan tangan di kelas: 'Pak Guru, mouse baru saja diklik, tolong layani sekarang juga!'.",
    "detail": "Sinyal perangkat keras yang dikirim ke prosesor untuk menghentikan sementara alur program aktif dan segera menangani kejadian prioritas."
  },
  {
    "term": "Form Factor M.2 2280",
    "category": "Hardware & Arsitektur",
    "icon": "🏷️",
    "babyAnalogy": "Ukuran SSD permen karet standar: lebar 22 milimeter dan panjang 80 milimeter.",
    "detail": "Dimensi fisik standar industri modul M.2 dengan lebar 22 mm dan panjang 80 mm yang paling umum digunakan pada motherboard desktop dan laptop."
  },
  {
    "term": "S.M.A.R.T. (Self-Monitoring, Analysis and Reporting Technology)",
    "category": "Hardware & Arsitektur",
    "icon": "🩺",
    "babyAnalogy": "Sensor medis di dalam harddisk/SSD yang memberi peringatan: 'Tuan, piringan saya sudah mulai lecet, segera backup data Anda!'.",
    "detail": "Sistem pemantauan mandiri internal pada harddisk dan SSD untuk mendeteksi serta melaporkan berbagai indikator keandalan fisik drive."
  },
  {
    "term": "Bad Sector",
    "category": "Hardware & Arsitektur",
    "icon": "🕳️",
    "babyAnalogy": "Kotak lemari arsip harddisk yang rusak berlubang sehingga dokumen di dalamnya tidak bisa dibaca lagi.",
    "detail": "Kluster sektor penyimpanan pada media disk yang rusak permanen atau tidak dapat diakses akibat kerusakan fisik mekanis atau korupsi magnetik."
  },
  {
    "term": "Optical Mouse Sensor",
    "category": "Hardware & Arsitektur",
    "icon": "📸",
    "babyAnalogy": "Kamera mini di bawah mouse yang memotret permukaan meja ribuan kali per detik untuk melacak arah geseran tanganmu.",
    "detail": "Sensor optoelektronik CMOS berkecepatan tinggi yang mengambil gambar mikroskopis permukaan untuk menghitung koordinat perpindahan kursor."
  },
  {
    "term": "Mechanical Keyboard Switch",
    "category": "Hardware & Arsitektur",
    "icon": "⌨️",
    "babyAnalogy": "Tombol ketik dengan pegas mekanis dan platuk saklar terpisah di setiap huruf yang menghasilkan bunyi ketukan mantap.",
    "detail": "Mekanisme saklar fisik individual dengan pegas logam independen di bawah setiap tombol keyboard untuk respons taktil dan daya tahan tinggi."
  },
  {
    "term": "Daisy Chaining",
    "category": "Hardware & Arsitektur",
    "icon": "🔗",
    "babyAnalogy": "Menyambungkan gerbong kereta: colokan monitor 1 dihubungkan ke komputer, lalu monitor 2 dicolokkan ke punggung monitor 1 secara berantai.",
    "detail": "Metode penyambungan beberapa perangkat keras periferal secara seri menggunakan kabel bus tunggal tanpa memerlukan port terpisah di komputer."
  },
  {
    "term": "Hot-Swappable",
    "category": "Hardware & Arsitektur",
    "icon": "🔄",
    "babyAnalogy": "Kemampuan mencopot atau menancapkan komponen baru (seperti flashdisk atau harddisk server) saat komputer masih menyala tanpa perlu restart.",
    "detail": "Fitur perangkat keras yang memungkinkan penggantian atau penambahan komponen saat sistem komputer sedang berjalan aktif tanpa memutus daya."
  },
  {
    "term": "Loopback Plug",
    "category": "Hardware & Arsitektur",
    "icon": "🔄",
    "babyAnalogy": "Colokan pembalik yang mengirim suara keluar kembali ke telinga sendiri untuk menguji apakah port jaringan rusak atau normal.",
    "detail": "Konektor diagnostik khusus yang mengalirkan kembali sinyal transmisi keluar langsung ke saluran penerima input untuk memverifikasi fungsi port fisik."
  },
  {
    "term": "Zero Insertion Force (ZIF) Socket",
    "category": "Hardware & Arsitektur",
    "icon": "🪑",
    "babyAnalogy": "Soket berengsel tuas pengunci: prosesor ditaruh tanpa ditekan sama sekali, lalu tuas diturunkan untuk menjepitnya dengan lembut.",
    "detail": "Soket prosesor berdesain tuas pengunci yang tidak memerlukan gaya dorong saat memasang chip prosesor untuk mencegah pembengkokan pin kontak."
  },
  {
    "term": "Thermal Pad",
    "category": "Hardware & Arsitektur",
    "icon": "🩹",
    "babyAnalogy": "Bantalan busa silikon kenyal berdaya hantar panas untuk mendinginkan chip memori VRAM atau SSD M.2.",
    "detail": "Bantalan silikon elastomer padat konduktif termal yang ditempatkan di antara komponen elektronik dan heatsink untuk meratakan pelepasan panas."
  },
  {
    "term": "Molex Connector",
    "category": "Hardware & Arsitektur",
    "icon": "🔌",
    "babyAnalogy": "Colokan kabel daya 4-pin warna putih klasik yang dulu sangat populer untuk memberi makan kipas casing dan harddisk IDE lama.",
    "detail": "Konektor kabel daya DC 4-pin berkait pengunci yang umum digunakan pada catu daya komputer untuk periferal internal generasi legacy."
  },
  {
    "term": "ATX 24-Pin Connector",
    "category": "Hardware & Arsitektur",
    "icon": "⚡",
    "babyAnalogy": "Kabel colokan daya induk terbesar dari power supply yang memberi makan seluruh sirkuit utama motherboard.",
    "detail": "Konektor daya utama standar ATX berukuran 24 pin yang menyalurkan berbagai rel voltase DC utama (+3.3V, +5V, +12V) ke sirkuit motherboard."
  },
  {
    "term": "SATA Power Connector",
    "category": "Hardware & Arsitektur",
    "icon": "🔌",
    "babyAnalogy": "Colokan daya pipih berbentuk huruf 'L' berwarna hitam yang memberi suplai listrik ke harddisk SATA dan SSD 2.5 inci.",
    "detail": "Konektor daya 15-pin berantarmuka bentuk 'L' terpolarisasi yang menyuplai tegangan 3.3V, 5V, dan 12V ke drive penyimpanan modern."
  },
  {
    "term": "Front Panel Header",
    "category": "Hardware & Arsitektur",
    "icon": "📌",
    "babyAnalogy": "Kumpulan jarum pin kecil di pojok motherboard tempat menyambungkan kabel tombol power, tombol reset, dan lampu kedip LED casing.",
    "detail": "Kumpulan pin konektor motherboard yang menghubungkan saklar fisik tombol daya, reset, speaker internal, dan LED aktivitas drive casing."
  },
  {
    "term": "Stand-Off Screws",
    "category": "Hardware & Arsitektur",
    "icon": "🔩",
    "babyAnalogy": "Baut pilar tembaga peninggi yang mengangkat motherboard agar punggungnya tidak menyentuh dinding pelat casing besi yang bisa memicu korsleting.",
    "detail": "Baut peninggi berulir kuningan yang menjaga motherboard terangkat beberapa milimeter dari plat logam casing untuk mencegah hubungan arus pendek."
  },
  {
    "term": "Firmware Flash",
    "category": "Hardware & Arsitektur",
    "icon": "⚡",
    "babyAnalogy": "Proses memperbarui atau menyuntikkan program sistem dasar BIOS/UEFI versi terbaru ke dalam chip memori motherboard.",
    "detail": "Prosedur penulisan ulang memori flash EEPROM non-volatile untuk memperbarui kode firmware BIOS/UEFI atau komponen periferal lainnya."
  },
  {
    "term": "Toner Cartridge",
    "category": "Hardware & Arsitektur",
    "icon": "🖨️",
    "babyAnalogy": "Tabung berisi serbuk bubuk tinta magnetik halus yang dipanaskan laser ke atas lembaran kertas printer kantor.",
    "detail": "Wadah habis pakai pada printer laser yang berisi serbuk toner kering berbahan karbon halus dan polimer untuk membentuk teks dan gambar cetak."
  },
  {
    "term": "Thermal Printer",
    "category": "Hardware & Arsitektur",
    "icon": "🧾",
    "babyAnalogy": "Printer kasir mini tanpa tinta yang mencetak struk belanja dengan cara memanaskan kertas khusus berselaput kimia.",
    "detail": "Printer yang mencetak gambar atau teks dengan memanaskan elemen termal mikro secara selektif pada kertas termal peka panas khusus."
  },
  {
    "term": "IP Address (IPv4 & IPv6)",
    "category": "Jaringan & Internet",
    "icon": "📬",
    "babyAnalogy": "Nomor alamat rumah unik yang dimiliki setiap gadget agar surat paket dari internet tidak salah kirim ke rumah tetangga.",
    "detail": "Label numerik pengenal unik yang ditetapkan untuk setiap perangkat yang terhubung ke jaringan komputer berbasis protokol TCP/IP."
  },
  {
    "term": "MAC Address",
    "category": "Jaringan & Internet",
    "icon": "🏷️",
    "babyAnalogy": "Nomor rangka mesin atau nomor KTP fisik kartu jaringan yang sudah dicetak pabrik sejak lahir dan tidak bisa dipalsukan.",
    "detail": "Alamat fisik perangkat keras lapisan Data Link (Layer 2) berukuran 48-bit heksadesimal yang unik secara global untuk setiap antarmuka jaringan."
  },
  {
    "term": "Router",
    "category": "Jaringan & Internet",
    "icon": "🚦",
    "babyAnalogy": "Polisi lalu lintas pintar di perempatan kota yang mengarahkan paket data mencari jalan tercepat antar pulau atau antar kota.",
    "detail": "Perangkat jaringan lapisan Network (Layer 3) yang merutekan paket data antar jaringan logis berbeda berdasarkan tabel rute IP."
  },
  {
    "term": "Switch",
    "category": "Jaringan & Internet",
    "icon": "🏢",
    "babyAnalogy": "Resepsionis kantor gedung bertingkat yang menghafal wajah setiap karyawan dan langsung mengantar surat ke meja orang yang tepat.",
    "detail": "Perangkat jaringan lapisan Data Link (Layer 2) yang meneruskan frame data hanya ke port tujuan spesifik berdasarkan tabel MAC address."
  },
  {
    "term": "Hub",
    "category": "Jaringan & Internet",
    "icon": "📢",
    "babyAnalogy": "Orang berteriak pakai megafon toa masjid; satu orang bicara, semua orang di ruangan ikut mendengar walau bukan untuk mereka.",
    "detail": "Perangkat jaringan warisan lapisan fisik (Layer 1) yang menyiarkan ulang sinyal listrik ke semua port tanpa memeriksa alamat tujuan."
  },
  {
    "term": "Default Gateway",
    "category": "Jaringan & Internet",
    "icon": "🚪",
    "babyAnalogy": "Pintu gerbang keluar komplek perumahan; tempat pertama yang kamu lewati jika ingin bepergian ke luar kota atau ke luar negeri.",
    "detail": "Node rute keluar (biasanya alamat antarmuka router lokal) yang digunakan perangkat untuk meneruskan lalu lintas menuju jaringan luar atau internet."
  },
  {
    "term": "Subnet Mask",
    "category": "Jaringan & Internet",
    "icon": "🎭",
    "babyAnalogy": "Topeng pemisah yang membedakan mana bagian nama jalan komplek dan mana nomor rumah spesifik di dalam alamat IP.",
    "detail": "Angka biner 32-bit yang membagi alamat IP menjadi bagian Network ID (identitas jaringan) dan Host ID (identitas perangkat individual)."
  },
  {
    "term": "DNS (Domain Name System)",
    "category": "Jaringan & Internet",
    "icon": "📖",
    "babyAnalogy": "Buku kontak telepon ajaib yang mengubah nama manusiawi seperti google.com menjadi deretan angka IP yang dipahami kabel komputer.",
    "detail": "Sistem basis data terdistribusi yang menerjemahkan nama domain ramah manusia (FQDN) menjadi alamat IP numerik mesin."
  },
  {
    "term": "DHCP (Dynamic Host Configuration Protocol)",
    "category": "Jaringan & Internet",
    "icon": "🎟️",
    "babyAnalogy": "Petugas loket parkir yang otomatis membagikan karcis nomor IP dan petunjuk jalan kepada setiap tamu yang baru masuk ke mall Wi-Fi.",
    "detail": "Protokol jaringan yang mengotomatisasi pemberian alamat IP, subnet mask, gateway, dan server DNS kepada perangkat klien di jaringan lokal."
  },
  {
    "term": "TCP (Transmission Control Protocol)",
    "category": "Jaringan & Internet",
    "icon": "🤝",
    "babyAnalogy": "Kurir paket pos yang sangat bertanggung jawab: telepon dulu sebelum antar, minta tanda tangan tanda terima, dan kirim ulang jika ada barang jatuh.",
    "detail": "Protokol transport berorientasi koneksi (connection-oriented) yang menjamin pengiriman paket data secara andal, berurutan, dan bebas galat."
  },
  {
    "term": "UDP (User Datagram Protocol)",
    "category": "Jaringan & Internet",
    "icon": "🚀",
    "babyAnalogy": "Tukang koran yang melempar koran dari atas motor sambil ngebut; sangat cepat dan tidak peduli apakah korannya mendarat di teras atau masuk selokan.",
    "detail": "Protokol transport nir-koneksi (connectionless) berkecepatan tinggi tanpa jaminan urutan atau pengiriman ulang, ideal untuk streaming video dan game online."
  },
  {
    "term": "Three-Way Handshake",
    "category": "Jaringan & Internet",
    "icon": "🤝",
    "babyAnalogy": "Ritual salam kenal tiga langkah sebelum berbicara di telepon: 'Halo, dengar aku?' -> 'Dengar, kamu dengar aku?' -> 'Oke, mari kita mulai ngobrol!'.",
    "detail": "Proses negosiasi 3 langkah pembentukan koneksi TCP yang melibatkan pengiriman paket SYN (Synchronize), SYN-ACK, dan ACK (Acknowledge)."
  },
  {
    "term": "LAN (Local Area Network)",
    "category": "Jaringan & Internet",
    "icon": "🏠",
    "babyAnalogy": "Jaringan keluarga di dalam satu rumah, ruang kelas, atau satu lantai kantor yang saling berbagi printer dan file.",
    "detail": "Jaringan komputer yang menghubungkan perangkat dalam area geografis terbatas seperti rumah, laboratorium, sekolah, atau gedung kantor."
  },
  {
    "term": "WAN (Wide Area Network)",
    "category": "Jaringan & Internet",
    "icon": "🌍",
    "babyAnalogy": "Jaringan raksasa antar negara dan antar benua yang menghubungkan kantor cabang di Jakarta dengan kantor pusat di London.",
    "detail": "Jaringan telekomunikasi berskala luas secara geografis yang menghubungkan beberapa jaringan LAN lokal menggunakan leased-line atau satelit."
  },
  {
    "term": "WLAN (Wireless LAN)",
    "category": "Jaringan & Internet",
    "icon": "📶",
    "babyAnalogy": "Jaringan lokal tanpa kabel bergelantungan; semua laptop dan ponsel tersambung menggunakan gelombang radio Wi-Fi di udara.",
    "detail": "Jaringan komputer lokal yang menghubungkan dua atau lebih perangkat menggunakan metode komunikasi nirkabel (standar IEEE 802.11)."
  },
  {
    "term": "VLAN (Virtual LAN)",
    "category": "Jaringan & Internet",
    "icon": "🧱",
    "babyAnalogy": "Tembok sekat tak kasat mata di dalam satu switch yang memisahkan komputer guru dari komputer murid nakal demi keamanan.",
    "detail": "Sub-jaringan logis yang mengelompokkan perangkat jaringan secara virtual pada switch fisik yang sama untuk isolasi keamanan dan kontrol broadcast."
  },
  {
    "term": "NAT (Network Address Translation)",
    "category": "Jaringan & Internet",
    "icon": "🏤",
    "babyAnalogy": "Kantor pos asrama mahasiswa; ratusan mahasiswa punya nomor kamar sendiri-sendiri, tapi semua surat keluar memakai alamat resmi kantor depan asrama.",
    "detail": "Metode pemetaan ruang alamat IP lokal privat ke satu atau beberapa alamat IP publik global yang dapat dirutekan di internet."
  },
  {
    "term": "Port Number",
    "category": "Jaringan & Internet",
    "icon": "🚪",
    "babyAnalogy": "Nomor pintu kamar hotel; alamat gedung adalah IP Address, sementara pintu 80 untuk restoran web dan pintu 443 untuk ruang brankas aman.",
    "detail": "Pengenal numerik 16-bit (0-65535) yang digunakan protokol transport untuk mengarahkan data ke proses aplikasi perangkat lunak spesifik."
  },
  {
    "term": "HTTP (Hypertext Transfer Protocol)",
    "category": "Jaringan & Internet",
    "icon": "📜",
    "babyAnalogy": "Bahasa percakapan biasa antara browser dan server web; seperti surat terbuka tanpa amplop yang bisa diintip siapa saja di jalan.",
    "detail": "Protokol lapisan aplikasi tanpa enkripsi yang menjadi dasar komunikasi data World Wide Web untuk mentransfer dokumen web hiperteks."
  },
  {
    "term": "HTTPS (HTTP Secure)",
    "category": "Jaringan & Internet",
    "icon": "🔒",
    "babyAnalogy": "Bahasa web yang dimasukkan ke dalam amplop baja anti-intip bergembok brankas kriptografi SSL/TLS.",
    "detail": "Versi aman dari protokol HTTP yang mengenkripsi seluruh komunikasi data web menggunakan protokol keamanan transport SSL/TLS pada port 443."
  },
  {
    "term": "SSL/TLS (Secure Sockets Layer / Transport Layer Security)",
    "category": "Jaringan & Internet",
    "icon": "🛡️",
    "babyAnalogy": "Jubah pelindung enkripsi tak terlihat yang membungkus kabel internet agar sandi dan nomor rekening tidak bisa disadap hacker.",
    "detail": "Protokol kriptografi standar industri yang menyediakan privasi komunikasi, integritas data, dan otentikasi server di jaringan internet."
  },
  {
    "term": "Firewall",
    "category": "Jaringan & Internet",
    "icon": "🧱",
    "babyAnalogy": "Petugas penjaga gerbang benteng yang memeriksa surat izin setiap orang dan menolak orang asing mencurigakan yang ingin menyelinap masuk.",
    "detail": "Sistem keamanan jaringan yang memantau, menyaring, dan mengontrol lalu lintas data masuk dan keluar berdasarkan aturan kebijakan keamanan tertentu."
  },
  {
    "term": "Proxy Server",
    "category": "Jaringan & Internet",
    "icon": "🕵️",
    "babyAnalogy": "Asisten perantara yang disuruh membelikan barang ke toko; pemilik toko hanya melihat si asisten dan tidak tahu siapa orang asli yang menyuruhnya.",
    "detail": "Server perantara yang bertindak sebagai penghubung antara klien yang meminta sumber daya dan server tujuan yang menyediakan sumber daya tersebut."
  },
  {
    "term": "VPN (Virtual Private Network)",
    "category": "Jaringan & Internet",
    "icon": "🚇",
    "babyAnalogy": "Terowongan jalan bawah tanah rahasia dan aman yang dibuat melintasi jalan raya umum internet yang ramai.",
    "detail": "Koneksi jaringan terenkripsi aman yang dibangun melalui infrastruktur jaringan publik (seperti internet) untuk mengakses jaringan privat jarak jauh."
  },
  {
    "term": "Bandwidth",
    "category": "Jaringan & Internet",
    "icon": "🛣️",
    "babyAnalogy": "Lebar ruas jalan tol; makin banyak lajur jalannya, makin banyak truk data yang bisa melintas bersamaan setiap detiknya.",
    "detail": "Kapasitas transfer data maksimum suatu saluran komunikasi jaringan dalam interval waktu tertentu, umumnya diukur dalam Mbps atau Gbps."
  },
  {
    "term": "Throughput",
    "category": "Jaringan & Internet",
    "icon": "🚗",
    "babyAnalogy": "Jumlah kendaraan aktual yang benar-benar berhasil lewat di jalan tol tanpa terhambat macet atau lampu merah.",
    "detail": "Kecepatan transfer data aktual yang berhasil dikirim dan diterima secara riil melalui saluran komunikasi pada waktu operasional tertentu."
  },
  {
    "term": "Latency / Ping",
    "category": "Jaringan & Internet",
    "icon": "⏱️",
    "babyAnalogy": "Waktu jeda yang dibutuhkan bola untuk memantul bolak-balik: dari saat kamu melempar sampai bola kembali ke telapak tanganmu.",
    "detail": "Durasi waktu yang dibutuhkan sebuah paket data untuk melakukan perjalanan dari pengirim ke penerima dan kembali lagi (Round-Trip Time / RTT)."
  },
  {
    "term": "Jitter",
    "category": "Jaringan & Internet",
    "icon": "〰️",
    "babyAnalogy": "Irama detak jantung yang tidak stabil; kadang paket datang secepat kilat, kadang terlambat sehingga suara telepon WhatsApp terdengar patah-patah.",
    "detail": "Variasi fluktuasi statistik dalam waktu keterlambatan (latensi) kedatangan paket data di sepanjang jalur transmisi jaringan."
  },
  {
    "term": "Packet Loss",
    "category": "Jaringan & Internet",
    "icon": "📦",
    "babyAnalogy": "Kardus paket belanja yang jatuh tercecer dari truk kurir di tengah jalan sehingga barang yang kamu terima tidak lengkap.",
    "detail": "Kondisi kegagalan di mana satu atau beberapa paket data yang melintasi jaringan komputer gagal mencapai titik tujuan akhir."
  },
  {
    "term": "OSI 7 Layers",
    "category": "Jaringan & Internet",
    "icon": "🍰",
    "babyAnalogy": "Kue lapis 7 tingkat standar dunia yang menjelaskan perjalanan data: dari tombol ketik di jarimu sampai jadi sinyal listrik di kabel tembaga.",
    "detail": "Model referensi arsitektur konseptual dari ISO yang membagi fungsi komunikasi jaringan menjadi 7 lapisan: Physical, Data Link, Network, Transport, Session, Presentation, Application."
  },
  {
    "term": "TCP/IP 4 Layers",
    "category": "Jaringan & Internet",
    "icon": "🍔",
    "babyAnalogy": "Resep burger praktis isi 4 lapis yang benar-benar dipakai di internet nyata: Network Access, Internet, Transport, dan Application.",
    "detail": "Rangkaian protokol komunikasi aktual internet yang menyederhanakan komunikasi jaringan menjadi 4 lapisan fungsional pragmatis."
  },
  {
    "term": "Twisted-Pair Cable (UTP/STP)",
    "category": "Jaringan & Internet",
    "icon": "🥨",
    "babyAnalogy": "Kabel kabel kawat tembaga yang dililit berpasang-pasangan seperti kepang rambut untuk menolak dengungan gangguan listrik tetangga.",
    "detail": "Kabel transmisi jaringan yang terdiri dari empat pasang kawat tembaga berisolasi yang dipilin bersama untuk meminimalkan crosstalk elektromagnetik."
  },
  {
    "term": "Fiber Optic (Serat Optik)",
    "category": "Jaringan & Internet",
    "icon": "✨",
    "babyAnalogy": "Kabel benang kaca super tipis yang menembakkan kedipan cahaya secepat kilat untuk mengirim data ribuan kilometer melintasi samudera.",
    "detail": "Media transmisi jaringan berbahan serat silika kaca atau plastik yang mentransmisikan data dalam bentuk pulsa gelombang cahaya berkecepatan tinggi."
  },
  {
    "term": "Cat 5e, Cat 6, Cat 6a",
    "category": "Jaringan & Internet",
    "icon": "🏷️",
    "babyAnalogy": "Kelas tingkatan mutu kabel LAN; dari kelas standar 1 Gbps (Cat 5e) sampai kelas tol layang 10 Gbps anti-gangguan (Cat 6a).",
    "detail": "Standar kategori kabel twisted-pair yang mendefinisikan batas frekuensi MHz dan bandwidth kecepatan transfer data maksimum (Cat 5e = 1 Gbps, Cat 6 = 10 Gbps jarak pendek, Cat 6a = 10 Gbps 100m)."
  },
  {
    "term": "RJ-45 Connector",
    "category": "Jaringan & Internet",
    "icon": "🔌",
    "babyAnalogy": "Kepala colokan bening berkait plastik kecil yang berbunyi 'klik' saat ditancapkan ke lubang port internet komputer.",
    "detail": "Konektor fisik modular standar 8P8C (8 Position, 8 Contact) yang digunakan untuk mengakhiri kabel twisted-pair pada jaringan Ethernet."
  },
  {
    "term": "T568A & T568B",
    "category": "Jaringan & Internet",
    "icon": "🎨",
    "babyAnalogy": "Buku resep urutan susunan warna kabel LAN (Putih-Oranye, Oranye, dsb.) yang wajib disepakati di kedua ujung kabel agar tidak korslet.",
    "detail": "Dua standar resmi pengkabelan pinout EIA/TIA yang mendefinisikan susunan urutan kode warna konduktor kabel pada konektor RJ-45."
  },
  {
    "term": "Straight-Through Cable",
    "category": "Jaringan & Internet",
    "icon": "↔️",
    "babyAnalogy": "Kabel lurus dengan urutan warna sama di kedua ujung; dipakai untuk menyambungkan dua teman yang berbeda jenis, seperti PC ke Switch.",
    "detail": "Kabel Ethernet dengan susunan pinout identik di kedua ujung (misal T568B ke T568B), digunakan untuk menghubungkan perangkat heterogen."
  },
  {
    "term": "Crossover Cable",
    "category": "Jaringan & Internet",
    "icon": "🔀",
    "babyAnalogy": "Kabel silang dengan ujung A berbeda dari ujung B; dipakai menyambungkan dua sahabat kembar sejenis, seperti PC langsung ke PC tanpa switch.",
    "detail": "Kabel Ethernet dengan susunan pinout T568A di satu ujung dan T568B di ujung lainnya, digunakan untuk menghubungkan dua perangkat sejenis secara langsung."
  },
  {
    "term": "Auto-MDIX",
    "category": "Jaringan & Internet",
    "icon": "🤖",
    "babyAnalogy": "Port pintar modern yang bisa otomatis mendeteksi dan membalik arah jalur kabel sendiri sehingga kamu tidak perlu pusing memilih kabel lurus atau silang.",
    "detail": "Fitur antarmuka Ethernet otomatis yang mendeteksi jenis koneksi kabel dan secara internal mengonfigurasi jalur transmit (Tx) dan receive (Rx)."
  },
  {
    "term": "PoE (Power over Ethernet)",
    "category": "Jaringan & Internet",
    "icon": "⚡",
    "babyAnalogy": "Menyalurkan listrik dan internet sekaligus dalam satu kabel LAN saja, sehingga kamera CCTV di atap tidak butuh colokan kabel listrik tambahan.",
    "detail": "Teknologi jaringan standar IEEE 802.3af/at/bt yang mengalirkan daya listrik DC bersamaan dengan data melalui kabel Ethernet twisted-pair."
  },
  {
    "term": "Access Point (AP)",
    "category": "Jaringan & Internet",
    "icon": "📡",
    "babyAnalogy": "Piringan antena pemancar di langit-langit kantor yang menyebarkan sinyal Wi-Fi ramah ke semua laptop di ruangan.",
    "detail": "Perangkat keras jaringan yang menghubungkan perangkat klien nirkabel (Wi-Fi) ke jaringan lokal kabel LAN melalui gelombang radio."
  },
  {
    "term": "SSID (Service Set Identifier)",
    "category": "Jaringan & Internet",
    "icon": "🏷️",
    "babyAnalogy": "Nama papan nama toko jaringan Wi-Fi yang muncul di layar HP kamu, seperti 'Kopi_Kenangan_Free_WiFi'.",
    "detail": "Pengenal teks unik hingga 32 karakter yang menamai sebuah jaringan nirkabel WLAN untuk dikenali oleh perangkat klien."
  },
  {
    "term": "WPA2 / WPA3",
    "category": "Jaringan & Internet",
    "icon": "🔐",
    "babyAnalogy": "Gembok pengaman sandi Wi-Fi modern yang mengunci gelombang radio di udara agar tetangga sebelah tidak bisa membobol sandi internetmu.",
    "detail": "Protokol sertifikasi keamanan nirkabel standar Wi-Fi Alliance yang mengenkripsi lalu lintas radio menggunakan algoritma AES dan SAE."
  },
  {
    "term": "Wi-Fi Bands (2.4 GHz vs 5 GHz vs 6 GHz)",
    "category": "Jaringan & Internet",
    "icon": "📻",
    "babyAnalogy": "2.4 GHz seperti suara terompet bass yang menembus tembok tebal tapi jalannya lambat; 5 GHz & 6 GHz seperti peluru jet super cepat tapi mudah terhalang dinding.",
    "detail": "Spektrum frekuensi radio nirkabel: 2.4 GHz (jangkauan luas, interferensi tinggi, throughput rendah) vs 5 GHz/6 GHz (jangkauan pendek, bandwidth sangat lebar, throughput tinggi)."
  },
  {
    "term": "MIMO (Multiple-Input Multiple-Output)",
    "category": "Jaringan & Internet",
    "icon": "📡",
    "babyAnalogy": "Punya banyak antena radio sekaligus untuk mengirim dan menyambut beberapa berkas data secara bersamaan tanpa saling senggol.",
    "detail": "Teknologi transmisi radio yang menggunakan beberapa antena pemancar dan penerima untuk melipatgandakan throughput nirkabel tanpa menambah bandwidth spektrum."
  },
  {
    "term": "Mesh Wi-Fi",
    "category": "Jaringan & Internet",
    "icon": "🕸️",
    "babyAnalogy": "Pasukan stasiun pemancar Wi-Fi gotong royong yang saling bergandengan tangan menutupi seluruh sudut rumah besar tanpa ada zona mati sinyal.",
    "detail": "Topologi jaringan nirkabel desentralisasi di mana beberapa node satelit saling berkomunikasi langsung untuk memperluas jangkauan SSID tunggal."
  },
  {
    "term": "ARP (Address Resolution Protocol)",
    "category": "Jaringan & Internet",
    "icon": "🔍",
    "babyAnalogy": "Detektif komplek yang berteriak: 'Siapa yang punya alamat IP 192.168.1.5? Tolong sebutkan nomor KTP MAC Address fisikmu!'.",
    "detail": "Protokol komunikasi lapisan jaringan ke tautan data yang memetakan alamat logika IP (Layer 3) ke alamat fisik perangkat keras MAC (Layer 2)."
  },
  {
    "term": "ICMP (Internet Control Message Protocol)",
    "category": "Jaringan & Internet",
    "icon": "🩺",
    "babyAnalogy": "Dokter pemeriksa jaringan yang mengirimkan sinyal ping 'Apakah kamu masih hidup?' dan membalas kabar 'Tujuan tidak dapat dijangkau'.",
    "detail": "Protokol lapisan pendukung IP yang digunakan perangkat jaringan untuk mengirimkan pesan galat dan informasi operasional (misal pada perintah ping dan traceroute)."
  },
  {
    "term": "Ping Utility",
    "category": "Jaringan & Internet",
    "icon": "🏓",
    "babyAnalogy": "Melempar bola tenis ke dinding server dan menghitung berapa milidetik bola itu kembali ke tangan kita untuk memastikan koneksi hidup.",
    "detail": "Perangkat lunak utilitas baris perintah yang menguji keterjangkauan host tujuan di jaringan IP dan mengukur waktu pulang-pergi (RTT) menggunakan paket ICMP Echo."
  },
  {
    "term": "Traceroute / Tracert",
    "category": "Jaringan & Internet",
    "icon": "🗺️",
    "babyAnalogy": "Peta jejak petualangan yang mencatat nama setiap halte router yang disinggahi paket data dalam perjalanan dari kotamu menuju markas Google.",
    "detail": "Alat diagnostik jaringan untuk menampilkan rute lompatan demi lompatan (hop-by-hop) yang dilewati paket data menuju host tujuan."
  },
  {
    "term": "IPConfig / IFConfig",
    "category": "Jaringan & Internet",
    "icon": "📋",
    "babyAnalogy": "Perintah terminal untuk memeriksa kartu identitas jaringan komputermu sendiri: berapa nomor IP, Subnet Mask, dan Gateway yang sedang dipakai.",
    "detail": "Perintah utilitas konsol OS (ipconfig di Windows, ifconfig/ip di Linux) yang menampilkan konfigurasi antarmuka jaringan IP aktif."
  },
  {
    "term": "Netstat",
    "category": "Jaringan & Internet",
    "icon": "👁️",
    "babyAnalogy": "Buku tamu intelijen yang mencatat pintu port mana saja yang sedang terbuka dan dengan siapa saja komputermu sedang asyik mengobrol rahasia.",
    "detail": "Alat baris perintah yang menampilkan statistik koneksi jaringan aktif, tabel rute, statistik antarmuka, dan port mendengarkan (listening ports)."
  },
  {
    "term": "NSLookup / Dig",
    "category": "Jaringan & Internet",
    "icon": "🔍",
    "babyAnalogy": "Kaca pembesar detektif untuk menanyai server DNS: 'Berapa nomor IP asli dari domain facebook.com?'.",
    "detail": "Alat administrasi jaringan untuk menanyakan Sistem Nama Domain (DNS) guna memetakan nama domain ke rekaman alamat IP (rekaman A, CNAME, MX)."
  },
  {
    "term": "APIPA (Automatic Private IP Addressing)",
    "category": "Jaringan & Internet",
    "icon": "🆘",
    "babyAnalogy": "Nomor darurat '169.254.x.x' yang dipakai laptop saat server pembagi nomor DHCP mogok, tanda bahwa komputermu terisolasi dan tidak bisa internetan.",
    "detail": "Fitur konfigurasi otomatis klien DHCP saat gagal menghubungi server DHCP, yang secara acak menetapkan alamat IP link-local dalam rentang 169.254.0.1 hingga 169.254.255.254."
  },
  {
    "term": "Loopback Address (127.0.0.1 / ::1)",
    "category": "Jaringan & Internet",
    "icon": "🪞",
    "babyAnalogy": "Cermin ajaib; alamat untuk memanggil diri komputermu sendiri tanpa perlu mengirim sinyal keluar ke kabel jaringan.",
    "detail": "Alamat IP khusus link-local (127.0.0.1 pada IPv4, ::1 pada IPv6) yang merujuk langsung ke sistem lokal perangkat itu sendiri (localhost)."
  },
  {
    "term": "Public IP vs Private IP",
    "category": "Jaringan & Internet",
    "icon": "🌍",
    "babyAnalogy": "Private IP seperti nomor meja rahasia di dalam restoran (192.168.x.x); Public IP seperti nomor telepon resmi restoran di buku kuning sedunia.",
    "detail": "Private IP adalah ruang alamat non-routable (RFC 1918) untuk jaringan internal lokal; Public IP adalah alamat unik global yang dapat dirutekan di internet publik."
  },
  {
    "term": "Class A, B, C IP Networks",
    "category": "Jaringan & Internet",
    "icon": "🏢",
    "babyAnalogy": "Ukuran kavling tanah zaman dulu: Kelas A untuk negara raksasa jutaan orang, Kelas B untuk kampus besar, Kelas C untuk kantor kecil puluhan orang.",
    "detail": "Sistem pembagian ruang pengalamatan IPv4 warisan (classful network) berdasarkan byte oktet pertama (Kelas A: /8, Kelas B: /16, Kelas C: /24)."
  },
  {
    "term": "CIDR (Classless Inter-Domain Routing)",
    "category": "Jaringan & Internet",
    "icon": "✂️",
    "babyAnalogy": "Gunting fleksibel bertanda garis miring (seperti /24 atau /28) untuk memotong ukuran kavling jaringan IP sesuai kebutuhan tanpa membuang-buang nomor.",
    "detail": "Metode alokasi alamat IP dan perutean IP yang menggantikan sistem kelas kaku dengan menggunakan notasi panjang prefiks bit mask subnet (/N)."
  },
  {
    "term": "Broadcast Address",
    "category": "Jaringan & Internet",
    "icon": "📢",
    "babyAnalogy": "Pengeras suara kelurahan; nomor alamat terakhir di suatu komplek yang jika dikirimi pesan, seluruh warga di komplek itu wajib mendengarnya.",
    "detail": "Alamat jaringan khusus di mana semua bit Host bernilai biner 1 (misal 192.168.1.255/24) yang digunakan untuk mengirim pesan serentak ke semua host di subnet."
  },
  {
    "term": "Unicast vs Multicast vs Anycast",
    "category": "Jaringan & Internet",
    "icon": "🎯",
    "babyAnalogy": "Unicast = bisik-bisik ke 1 orang; Multicast = siaran ke grup pecinta kucing; Anycast = memanggil taksi, siapa pun sopir terdekat yang pertama datang melayani.",
    "detail": "Metode transmisi: Unicast (satu-ke-satu), Multicast (satu-ke-grup terdaftar spesifik), Anycast (satu-ke-salah-satu node terdekat secara topologi rute)."
  },
  {
    "term": "Collision Domain",
    "category": "Jaringan & Internet",
    "icon": "💥",
    "babyAnalogy": "Ruangan sempit tanpa pengatur di mana dua orang yang berbicara bersamaan suaranya akan bertabrakan dan hancur.",
    "detail": "Segmen jaringan fisik di mana paket data dapat bertabrakan (collide) satu sama lain saat dikirim bersamaan pada media bersama (dibatasi oleh port switch)."
  },
  {
    "term": "Broadcast Domain",
    "category": "Jaringan & Internet",
    "icon": "📢",
    "babyAnalogy": "Batas dinding gedung aula; jika seseorang berteriak pakai megafon, seluruh orang di dalam aula itu mendengar, tapi tidak tembus ke gedung sebelah (router).",
    "detail": "Wilayah logis jaringan di mana semua perangkat dapat menerima frame siaran broadcast lapisan 2 (dibatasi oleh antarmuka router)."
  },
  {
    "term": "CSMA/CD (Carrier Sense Multiple Access with Collision Detection)",
    "category": "Jaringan & Internet",
    "icon": "👂",
    "babyAnalogy": "Aturan sopan berbicara di meja makan: dengarkan dulu apakah ada yang sedang bicara; jika tanpa sengaja bicara barengan, berhenti sejenak lalu coba lagi acak.",
    "detail": "Protokol kendali akses media Ethernet kabel lama untuk mendeteksi tabrakan data dan menjadwalkan transmisi ulang setelah interval backoff acak."
  },
  {
    "term": "Spanning Tree Protocol (STP)",
    "category": "Jaringan & Internet",
    "icon": "🌳",
    "babyAnalogy": "Tukang kebun yang menebang ranting jalan memutar agar truk data tidak berputar-putar tanpa henti dalam lingkaran setan (loop) yang bikin macet total.",
    "detail": "Protokol jaringan lapisan 2 (IEEE 802.1D) yang mencegah terjadinya loop jembatan peralihan fisik dengan menonaktifkan jalur tautan redundan secara logis."
  },
  {
    "term": "VLAN Tagging (802.1Q)",
    "category": "Jaringan & Internet",
    "icon": "🏷️",
    "babyAnalogy": "Menempelkan stiker warna pada amplop surat sebelum dimasukkan ke dalam pipa kabel utama (trunk) agar di seberang sana tahu ini milik departemen mana.",
    "detail": "Standar penyisipan bidang tag 4-byte ke dalam header frame Ethernet untuk mengidentifikasi keanggotaan ID VLAN saat melintasi link trunk."
  },
  {
    "term": "Trunk Port vs Access Port",
    "category": "Jaringan & Internet",
    "icon": "🚪",
    "babyAnalogy": "Access Port = pintu kamar khusus karyawan IT saja; Trunk Port = pintu lorong utama tempat orang dari semua departemen bebas lewat bersama.",
    "detail": "Access Port meneruskan lalu lintas hanya untuk satu VLAN tunggal tanpa tag; Trunk Port mengangkut lalu lintas beberapa VLAN sekaligus dengan tag 802.1Q."
  },
  {
    "term": "Routing Table",
    "category": "Jaringan & Internet",
    "icon": "🗺️",
    "babyAnalogy": "Buku kompas di meja kapten router yang berisi daftar tujuan kota dan lewat pelabuhan mana kapal harus berlayar untuk mencapainya.",
    "detail": "Basis data internal pada router yang menyimpan daftar rute menuju tujuan jaringan tertentu beserta metrik bobot dan antarmuka keluar berikutnya (next hop)."
  },
  {
    "term": "Static Routing",
    "category": "Jaringan & Internet",
    "icon": "✍️",
    "babyAnalogy": "Peta petunjuk jalan yang digambar manual oleh teknisi; sangat pasti dan hemat tenaga router, tapi kalau jembatannya ambruk, router tidak tahu jalan alternatif.",
    "detail": "Konfigurasi rute jaringan yang ditentukan secara manual oleh administrator sistem tanpa protokol pembaruan otomatis."
  },
  {
    "term": "Dynamic Routing (OSPF, BGP, RIP)",
    "category": "Jaringan & Internet",
    "icon": "🛰️",
    "babyAnalogy": "Aplikasi GPS Google Maps yang terus mengobrol dengan satelit dan otomatis mencari jalan tikus jika mendeteksi jalan utama sedang macet atau banjir.",
    "detail": "Metode di mana router secara otomatis bertukar informasi topologi rute menggunakan protokol dinamis untuk menghitung jalur terbaik dan adaptasi kegagalan link."
  },
  {
    "term": "BGP (Border Gateway Protocol)",
    "category": "Jaringan & Internet",
    "icon": "🌐",
    "babyAnalogy": "Diplomat super antar negara yang mengatur bagaimana paket data terbang melintasi antar benua dan antar penyedia internet raksasa sedunia.",
    "detail": "Protokol gateway eksterior standar yang menjadi tulang punggung perutean internet global, bertukar informasi keterjangkauan antar Autonomous System (AS)."
  },
  {
    "term": "OSPF (Open Shortest Path First)",
    "category": "Jaringan & Internet",
    "icon": "🏎️",
    "babyAnalogy": "Pembalap cerdas di dalam satu kota yang selalu menghitung rumus matematika jalan terpendek dan tercepat untuk mengantar paket ke tujuan.",
    "detail": "Protokol gateway interior berbasis status tautan (link-state) yang menggunakan algoritma Dijkstra Shortest Path First (SPF) di dalam satu AS."
  },
  {
    "term": "Load Balancer",
    "category": "Jaringan & Internet",
    "icon": "⚖️",
    "babyAnalogy": "Polisi antrean di bank yang membagi ribuan nasabah merata ke 10 meja teller agar tidak ada teller yang pingsan kepenuhan dan tidak ada yang bengong.",
    "detail": "Perangkat atau software yang mendistribusikan lalu lintas jaringan atau aplikasi ke sekelompok server backend untuk memaksimalkan throughput dan ketersediaan."
  },
  {
    "term": "CDN (Content Delivery Network)",
    "category": "Jaringan & Internet",
    "icon": "🏪",
    "babyAnalogy": "Membuka cabang minimarket fotokopi gambar di setiap kelurahan agar pelanggan tidak perlu jauh-jauh mengambil foto dari gudang pusat di Amerika.",
    "detail": "Jaringan server terdistribusi secara geografis yang menyimpan salinan cache konten statis dekat dengan pengguna untuk mempercepat loading web."
  },
  {
    "term": "Forward Proxy vs Reverse Proxy",
    "category": "Jaringan & Internet",
    "icon": "🛡️",
    "babyAnalogy": "Forward Proxy melindungi identitas karyawan kantor yang ingin jalan-jalan ke internet; Reverse Proxy menjadi satpam depan yang melindungi server perusahaan dari serangan luar.",
    "detail": "Forward Proxy bertindak atas nama klien untuk mengakses internet; Reverse Proxy bertindak atas nama server web backend untuk menangani permintaan klien luar."
  },
  {
    "term": "DMZ (Demilitarized Zone)",
    "category": "Jaringan & Internet",
    "icon": "🏕️",
    "babyAnalogy": "Tenda ruang tamu di depan gerbang benteng tempat orang asing boleh mampir (web/email publik) tanpa boleh masuk menyelinap ke brankas rahasia keluarga.",
    "detail": "Subnet perimeter fisik atau logis yang memisahkan layanan publik yang menghadap ke luar dari jaringan internal privat yang sangat aman."
  },
  {
    "term": "Stateful Firewall vs Stateless Firewall",
    "category": "Jaringan & Internet",
    "icon": "🧠",
    "babyAnalogy": "Stateless seperti satpam buta yang memeriksa KTP tiap detik; Stateful seperti resepsionis ramah yang ingat siapa yang tadi pamit keluar dan langsung mengizinkannya masuk kembali.",
    "detail": "Stateless menyaring paket hanya berdasarkan header individual; Stateful melacak konteks seluruh sesi koneksi aktif untuk mengizinkan paket balasan secara otomatis."
  },
  {
    "term": "IDS (Intrusion Detection System)",
    "category": "Jaringan & Internet",
    "icon": "🚨",
    "babyAnalogy": "Alarm maling yang berbunyi kencang 'Ngiung-ngiung!' saat mendeteksi ada orang memanjat pagar, lalu lapor ke satpam tapi tidak memegang tongkat pemukul.",
    "detail": "Sistem keamanan pasif yang memantau lalu lintas jaringan untuk mendeteksi aktivitas mencurigakan atau pelanggaran kebijakan dan membunyikan peringatan."
  },
  {
    "term": "IPS (Intrusion Prevention System)",
    "category": "Jaringan & Internet",
    "icon": "🥋",
    "babyAnalogy": "Polisi bersenjata lengkap yang berdiri di pintu: begitu melihat orang berlagak maling, pintu langsung dibanting dan orangnya diborgol seketika.",
    "detail": "Sistem keamanan aktif inline yang tidak hanya mendeteksi serangan siber tetapi juga secara otomatis memblokir dan menghentikan paket berbahaya."
  },
  {
    "term": "Port Forwarding",
    "category": "Jaringan & Internet",
    "icon": "🕳️",
    "babyAnalogy": "Membuat lubang pintu rahasia di pagar router rumah agar teman di luar negeri bisa masuk langsung bermain game di server Minecraft komputermu.",
    "detail": "Konfigurasi NAT yang meneruskan permintaan jaringan dari port publik eksternal router langsung ke alamat IP dan port perangkat tertentu di jaringan lokal."
  },
  {
    "term": "QoS (Quality of Service)",
    "category": "Jaringan & Internet",
    "icon": "🚑",
    "babyAnalogy": "Memberi sirine ambulans jalan prioritas utama bagi panggilan suara telepon dan video Zoom agar tidak terputus saat adikmu sedang mendownload film 4K.",
    "detail": "Mekanisme manajemen lalu lintas jaringan yang memprioritaskan paket data krusial sensitif latensi (seperti VoIP dan video) di atas lalu lintas umum."
  },
  {
    "term": "SNMP (Simple Network Management Protocol)",
    "category": "Jaringan & Internet",
    "icon": "📊",
    "babyAnalogy": "Alat mata-mata pengawas yang menanyai router setiap menit: 'Berapa suhu badanmu, berapa persen kabelmu macet, dan apakah ada port yang mati?'.",
    "detail": "Protokol standar industri untuk mengumpulkan informasi status, metrik kinerja, dan mengonfigurasi perangkat jaringan yang dikelola."
  },
  {
    "term": "Syslog",
    "category": "Jaringan & Internet",
    "icon": "📓",
    "babyAnalogy": "Buku harian dokter tempat semua switch, router, dan server mencatat kejadian penting: dari orang berhasil login sampai kawat kabel terputus.",
    "detail": "Standar pencatatan pesan sistem komputer yang memungkinkan perangkat mengirim pemberitahuan peristiwa berbasis teks ke server log pusat (daemon syslog)."
  },
  {
    "term": "NTP (Network Time Protocol)",
    "category": "Jaringan & Internet",
    "icon": "⏰",
    "babyAnalogy": "Lonceng jam menara kota yang mencocokkan detik jam di seluruh komputer kantor agar tidak ada selisih waktu transaksi bank walau sepermiliar detik.",
    "detail": "Protokol jaringan untuk menyinkronkan jam sistem komputer ke sumber waktu presisi tinggi (jam atom UTC) melalui jaringan berbasis paket."
  },
  {
    "term": "FTP vs SFTP vs FTPS",
    "category": "Jaringan & Internet",
    "icon": "📂",
    "babyAnalogy": "FTP = kirim kardus terbuka tanpa kunci; SFTP & FTPS = kardus berkunci baja terenkripsi yang mustahil dibongkar kurir nakal di jalan.",
    "detail": "FTP mentransfer file dalam teks polos tanpa enkripsi; SFTP menggunakan protokol SSH aman untuk transfer data; FTPS menggunakan lapisan SSL/TLS."
  },
  {
    "term": "SSH (Secure Shell)",
    "category": "Jaringan & Internet",
    "icon": "💻",
    "babyAnalogy": "Tali kendali jarak jauh terenkripsi anti-sadap untuk mengendalikan layar terminal server Linux di benua lain dari kamarmu.",
    "detail": "Protokol jaringan kriptografis untuk pengoperasian layanan jaringan yang aman, akses baris perintah jarak jauh, dan eksekusi perintah melalui saluran tak aman."
  },
  {
    "term": "Telnet",
    "category": "Jaringan & Internet",
    "icon": "🔓",
    "babyAnalogy": "Kakek tua dari SSH yang mengirimkan nama akun dan password dalam bentuk tulisan telanjang polos tanpa baju pelindung enkripsi apapun.",
    "detail": "Protokol terminal jarak jauh warisan (port 23) tanpa enkripsi di mana seluruh kredensial dan perintah ditransmisikan dalam teks polos rentan penyadapan."
  },
  {
    "term": "SMTP (Simple Mail Transfer Protocol)",
    "category": "Jaringan & Internet",
    "icon": "✉️",
    "babyAnalogy": "Tukang pos sepeda yang bertugas mengangkut surat email kamu dari rumah dan menerbangkannya ke kantor pos server penerima.",
    "detail": "Protokol standar internet untuk transmisi pengiriman surat elektronik (email) antar server surat (Mail Transfer Agent) pada port 25 atau 587."
  },
  {
    "term": "POP3 (Post Office Protocol 3)",
    "category": "Jaringan & Internet",
    "icon": "📥",
    "babyAnalogy": "Mengambil semua surat dari kotak pos dan membawanya pulang ke rumah; surat di kotak pos pusat langsung lenyap dikosongkan.",
    "detail": "Protokol pengambilan email yang mengunduh pesan dari server ke perangkat lokal klien dan secara default menghapus salinan di server."
  },
  {
    "term": "IMAP (Internet Message Access Protocol)",
    "category": "Jaringan & Internet",
    "icon": "🔄",
    "babyAnalogy": "Membaca surat langsung di etalase kantor pos; kamu buka lewat laptop atau lewat HP, semua folder dan centang pesan tetap sinkron sama persis.",
    "detail": "Protokol pengambilan email modern yang menyinkronkan seluruh pesan dan folder secara dua arah antara klien email dan server terpusat."
  },
  {
    "term": "MIME (Multipurpose Internet Mail Extensions)",
    "category": "Jaringan & Internet",
    "icon": "📎",
    "babyAnalogy": "Amplop email serbaguna yang membuat pesan surat tidak hanya berisi teks huruf biasa, tapi bisa melampirkan foto, musik, dan dokumen PDF.",
    "detail": "Standar internet yang memperluas format email untuk mendukung teks non-ASCII, lampiran file multimedia biner, dan format multi-bagian."
  },
  {
    "term": "SLA (Service Level Agreement)",
    "category": "Jaringan & Internet",
    "icon": "📜",
    "babyAnalogy": "Janji suci kontrak tertulis dari penyedia internet: 'Kami menjamin internet hidup 99.9% setahun, jika sering mati kamu dapat ganti rugi!'.",
    "detail": "Komitmen kontrak resmi antara penyedia layanan jaringan dan pelanggan yang mendefinisikan standar tingkat ketersediaan layanan dan sanksi penalti."
  },
  {
    "term": "MTU (Maximum Transmission Unit)",
    "category": "Jaringan & Internet",
    "icon": "📦",
    "babyAnalogy": "Ukuran kardus paket terbesar yang boleh masuk ke dalam gerobak kabel (standar biasanya 1500 byte); jika lebih besar harus dipotong-potong.",
    "detail": "Ukuran paket data terbesar dalam byte yang dapat ditransmisikan oleh lapisan tautan data jaringan tertentu tanpa perlu fragmentasi."
  },
  {
    "term": "IP Fragmentation",
    "category": "Jaringan & Internet",
    "icon": "✂️",
    "babyAnalogy": "Memotong lemari raksasa menjadi 3 kardus kecil saat melewati pintu sempit, lalu merakitnya kembali menjadi lemari utuh di tempat tujuan.",
    "detail": "Proses pemecahan paket IP tunggal menjadi beberapa fragmen lebih kecil ketika ukuran paket melebihi batas MTU antarmuka jaringan perantara."
  },
  {
    "term": "Broadcast Storm",
    "category": "Jaringan & Internet",
    "icon": "🌪️",
    "babyAnalogy": "Semua orang di ruangan berteriak bersamaan tanpa henti karena gema suara memantul bolak-balik sampai tidak ada yang bisa mendengar apa pun dan switch macet.",
    "detail": "Kondisi abnormal di mana frame broadcast beredar tanpa henti dan berlipat ganda dalam jaringan akibat loop switching, menghabiskan seluruh bandwidth."
  },
  {
    "term": "Attenuation",
    "category": "Jaringan & Internet",
    "icon": "📉",
    "babyAnalogy": "Suara bisikan yang makin menjauh makin lirih dan hilang tertelan angin; sinyal kabel yang melemah jika ditarik terlalu panjang melebihi 100 meter.",
    "detail": "Penurunan intensitas kekuatan sinyal gelombang listrik atau cahaya seiring bertambahnya jarak tempuh media transmisi fisik."
  },
  {
    "term": "Crosstalk (NEXT & FEXT)",
    "category": "Jaringan & Internet",
    "icon": "🗣️",
    "babyAnalogy": "Bocoran suara percakapan telepon orang sebelah yang ikut terdengar di kabel teleponmu akibat dua kawat tembaga terlalu menempel berdekatan.",
    "detail": "Gangguan interferensi elektromagnetik yang tidak diinginkan di mana sinyal yang ditransmisikan pada satu sirkuit kabel bocor ke sirkuit kabel sebelahnya."
  },
  {
    "term": "Patch Panel",
    "category": "Jaringan & Internet",
    "icon": "🎛️",
    "babyAnalogy": "Papan saklar berbaris rapi di lemari server yang menghubungkan kabel-kabel dari seluruh ruangan gedung agar tidak semrawut di lantai.",
    "detail": "Perangkat keras berderet port terpasang di rak kabinet server untuk mengatur dan mengakhiri rangkaian kabel terstruktur secara rapi dan fleksibel."
  },
  {
    "term": "Keystone Jack",
    "category": "Jaringan & Internet",
    "icon": "🧱",
    "babyAnalogy": "Colokan stopkontak lubang kabel LAN yang menempel manis di dinding tembok kamar kantor tempat kamu mencolokkan kabel laptop.",
    "detail": "Konektor stopkontak modular terpasang di pelat dinding (wall plate) atau patch panel tempat kabel kabel horizontal diakhiri dengan metode punch-down."
  },
  {
    "term": "Punch Down Tool",
    "category": "Jaringan & Internet",
    "icon": "🔨",
    "babyAnalogy": "Obeng pegas pemotong khusus yang menancapkan kawat tembaga ke dalam pisau keystone jack dan langsung memotong sisa kawatnya dengan rapi.",
    "detail": "Alat tangan bermata pisau pegas untuk memasukkan kabel twisted-pair ke blok terminal kontak isolasi (IDC) pada patch panel atau jack dinding."
  },
  {
    "term": "Tone Generator and Probe (Fox and Hound)",
    "category": "Jaringan & Internet",
    "icon": "🐕",
    "babyAnalogy": "Alat pelacak berbunyi kicau burung 'cit-cit-cit' untuk mencari seutas kabel LAN yang dicari di antara hutan ratusan kabel kusut di lemari server.",
    "detail": "Alat diagnostik pelacak kabel: transmitter menginjeksikan sinyal nada audio ke konduktor kabel, dan probe induktif melacak dan mendengarkan suara di ujung kabel."
  },
  {
    "term": "Kernel",
    "category": "Sistem Operasi & CLI",
    "icon": "🌰",
    "babyAnalogy": "Biji inti terdalam buah mangga; bagian sistem operasi yang memegang kendali penuh atas memori, prosesor, dan perangkat keras tanpa henti.",
    "detail": "Komponen inti perangkat lunak sistem operasi yang mengelola sumber daya perangkat keras fisik, eksekusi proses, dan komunikasi perangkat."
  },
  {
    "term": "Shell (Bash, Zsh, PowerShell)",
    "category": "Sistem Operasi & CLI",
    "icon": "🐚",
    "babyAnalogy": "Kulit cangkang penerjemah; tempat kamu mengetik mantra teks sakti yang kemudian diterjemahkan oleh shell agar dimengerti oleh sang Kernel.",
    "detail": "Antarmuka baris perintah (CLI) atau program penerjemah perintah yang menghubungkan pengguna manusia dengan inti sistem operasi."
  },
  {
    "term": "GUI (Graphical User Interface)",
    "category": "Sistem Operasi & CLI",
    "icon": "🖼️",
    "babyAnalogy": "Tampilan ramah anak penuh jendela bergambar, tombol warna-warni, dan kursor mouse lucu sehingga kamu tidak perlu mengetik mantra teks rumit.",
    "detail": "Antarmuka pengguna grafis visual yang memanfaatkan jendela (windows), ikon, tombol, dan kursor penunjuk untuk memudahkan interaksi komputer."
  },
  {
    "term": "Process",
    "category": "Sistem Operasi & CLI",
    "icon": "🏃",
    "babyAnalogy": "Aplikasi yang sedang hidup berlari di lapangan kerja komputer dan memiliki ruangan memori serta nomor KTP identitas (PID) sendiri.",
    "detail": "Instansi program komputer aktif yang sedang dieksekusi oleh sistem operasi, memiliki ruang alamat memori mandiri dan status eksekusi."
  },
  {
    "term": "Thread",
    "category": "Sistem Operasi & CLI",
    "icon": "🧵",
    "babyAnalogy": "Benang jahit tugas cilik di dalam satu proses; satu benang memutar lagu Spotify sementara benang lain mengunduh gambar album di saat yang sama.",
    "detail": "Unit eksekusi terkecil dari proses yang dapat dijadwalkan oleh sistem operasi, berbagi ruang alamat memori bersama thread lain dalam proses yang sama."
  },
  {
    "term": "PID (Process ID)",
    "category": "Sistem Operasi & CLI",
    "icon": "🏷️",
    "babyAnalogy": "Nomor KTP atau nomor dada pelari proses; angka unik yang diberikan sistem operasi untuk mengenali setiap aplikasi yang sedang berjalan.",
    "detail": "Pengenal numerik unik yang diberikan oleh kernel sistem operasi untuk melacak dan mengidentifikasi proses yang sedang aktif."
  },
  {
    "term": "Task Manager / htop",
    "category": "Sistem Operasi & CLI",
    "icon": "📊",
    "babyAnalogy": "Papan radar pengawas yang memperlihatkan aplikasi mana yang sedang rakus memakan RAM atau membuat prosesor berkeringat panas 100%.",
    "detail": "Alat utilitas sistem pemantau proses real-time untuk melihat konsumsi CPU, memori, disk, dan menghentikan proses yang mengalami hang."
  },
  {
    "term": "Deadlock",
    "category": "Sistem Operasi & CLI",
    "icon": "🔒",
    "babyAnalogy": "Dua mobil berpapasan di gang sempit; mobil A menunggu mobil B mundur, mobil B menunggu mobil A mundur, akhirnya keduanya terkunci diam selamanya.",
    "detail": "Kondisi abnormal sistem operasi di mana dua atau lebih proses saling menunggu pelepasan sumber daya terkunci yang dipegang proses lain tanpa jalan keluar."
  },
  {
    "term": "Virtual Memory",
    "category": "Sistem Operasi & CLI",
    "icon": "🪄",
    "babyAnalogy": "Trik sulap komputer: jika meja RAM sudah penuh sesak, sebagian barang yang jarang disentuh dipindahkan sementara ke laci harddisk.",
    "detail": "Teknik manajemen memori OS yang menggabungkan RAM fisik dengan ruang penyimpanan sekunder untuk memperluas ruang alamat logis aplikasi."
  },
  {
    "term": "Paging & Page File (swap)",
    "category": "Sistem Operasi & CLI",
    "icon": "📄",
    "babyAnalogy": "Lembaran-lembaran kertas dokumen memori yang dipindahkan bolak-balik antara meja kerja RAM dan gudang penyimpanan harddisk/SSD.",
    "detail": "Skema manajemen memori di mana data proses dibagi menjadi blok-blok berukuran tetap (pages) dan disimpan di disk saat RAM fisik tidak mencukupi."
  },
  {
    "term": "File System (NTFS, EXT4, FAT32)",
    "category": "Sistem Operasi & CLI",
    "icon": "🗂️",
    "babyAnalogy": "Aturan tata letak lemari arsip; menentukan bagaimana berkas file dinamai, disusun rapi dalam map folder, dan dicari dengan cepat.",
    "detail": "Metode dan struktur data yang digunakan sistem operasi untuk mengontrol cara data disimpan, diorganisir, dan diambil pada media disk."
  },
  {
    "term": "NTFS (New Technology File System)",
    "category": "Sistem Operasi & CLI",
    "icon": "🪟",
    "babyAnalogy": "Lemari arsip bawaan resmi Windows yang punya gembok izin sandi per berkas dan buku catatan harian jurnal untuk mencegah kerusakan data.",
    "detail": "Sistem berkas kepemilikan Microsoft untuk Windows modern yang mendukung enkripsi EFS, izin ACL, kompresi, dan fitur journaling."
  },
  {
    "term": "FAT32 vs exFAT",
    "category": "Sistem Operasi & CLI",
    "icon": "💾",
    "babyAnalogy": "FAT32 = kakek ramah yang diterima di semua gadget tapi tidak bisa menyimpan film lebih besar dari 4 GB; exFAT = versi modern tanpa batas 4 GB.",
    "detail": "Sistem berkas tabel alokasi: FAT32 memiliki batas ukuran file maksimum 4 GB, sedangkan exFAT dirancang untuk flash drive kapasitas besar lintas platform."
  },
  {
    "term": "EXT4",
    "category": "Sistem Operasi & CLI",
    "icon": "🐧",
    "babyAnalogy": "Lemari arsip andalan robot Linux yang sangat cepat, tahan banting saat listrik padam tiba-tiba, dan tidak mudah berantakan (terfragmentasi).",
    "detail": "Sistem berkas penjurnalan standar de facto untuk distribusi sistem operasi Linux yang menawarkan performa tinggi dan keandalan integritas data."
  },
  {
    "term": "Defragmentation",
    "category": "Sistem Operasi & CLI",
    "icon": "🧹",
    "babyAnalogy": "Merapikan serpihan lembaran buku yang tercerai-berai di seluruh penjuru harddisk mekanik agar jarum pembaca tidak pegal mondar-mandir.",
    "detail": "Proses menata ulang sektor data yang terfragmentasi pada drive magnetik agar file tersimpan secara berurutan berdekatan untuk mempercepat pembacaan."
  },
  {
    "term": "Permissions (Read, Write, Execute / rwx)",
    "category": "Sistem Operasi & CLI",
    "icon": "🔑",
    "babyAnalogy": "Aturan hak akses lemari dokumen: 'r' boleh membaca saja, 'w' boleh menulis/mencoret, dan 'x' boleh menjalankan program sebagai aplikasi.",
    "detail": "Model kontrol akses sistem berkas Unix/Linux yang mengatur izin pengguna terhadap file dan direktori: Read (4), Write (2), dan Execute (1)."
  },
  {
    "term": "Chmod",
    "category": "Sistem Operasi & CLI",
    "icon": "🧙",
    "babyAnalogy": "Mantra baris perintah Linux sakti untuk mengubah hak akses gembok file (misal: chmod 755 artinya pemilik boleh apa saja, orang lain hanya boleh baca).",
    "detail": "Perintah shell Linux/Unix untuk mengubah mode bit izin akses berkas atau direktori bagi user pemilik, grup, dan entitas lainnya."
  },
  {
    "term": "Chown",
    "category": "Sistem Operasi & CLI",
    "icon": "👑",
    "babyAnalogy": "Perintah akta tanah untuk memindahtangankan kepemilikan berkas atau folder dari satu pengguna ke pengguna yang lain di sistem Linux.",
    "detail": "Perintah baris perintah Linux untuk mengubah kepemilikan pengguna (user owner) dan grup (group owner) atas suatu berkas atau direktori."
  },
  {
    "term": "Sudo (Superuser Do)",
    "category": "Sistem Operasi & CLI",
    "icon": "🦸",
    "babyAnalogy": "Meminjam jubah kapten administrator sakti selama beberapa detik untuk menjalankan tugas-tugas berbahaya yang tidak boleh dilakukan warga biasa.",
    "detail": "Utilitas baris perintah Unix yang memungkinkan pengguna terotorisasi mengeksekusi perintah dengan hak akses keamanan pengguna root."
  },
  {
    "term": "Root User / Administrator",
    "category": "Sistem Operasi & CLI",
    "icon": "👑",
    "babyAnalogy": "Raja penguasa tertinggi komputer yang memiliki kunci segala pintu dan bisa menghapus atau mengubah apa pun tanpa ada yang bisa melarang.",
    "detail": "Akun pengguna dengan hak istimewa superuser tertinggi yang memiliki izin tak terbatas untuk mengubah konfigurasi dan berkas sistem."
  },
  {
    "term": "Environment Variable (PATH)",
    "category": "Sistem Operasi & CLI",
    "icon": "🗺️",
    "babyAnalogy": "Daftar alamat jalan favorit di saku komputer; sehingga jika kamu memanggil 'python', komputer langsung tahu di folder mana aplikasi itu bersembunyi.",
    "detail": "Variabel global dinamis sistem operasi yang menentukan direktori di mana sistem mencari file biner executable saat perintah dipanggil di konsol."
  },
  {
    "term": "CLI Command: cd (Change Directory)",
    "category": "Sistem Operasi & CLI",
    "icon": "📂",
    "babyAnalogy": "Melangkah masuk atau keluar pintu kamar map folder di komputer lewat baris perintah teks.",
    "detail": "Perintah baris perintah untuk mengubah direktori kerja aktif saat ini dalam sesi konsol navigasi sistem berkas."
  },
  {
    "term": "CLI Command: ls / dir",
    "category": "Sistem Operasi & CLI",
    "icon": "👀",
    "babyAnalogy": "Menyalakan lampu senter di dalam kamar folder untuk melihat daftar seluruh file dan sub-folder yang ada di sana.",
    "detail": "Perintah konsol (ls di Unix/Linux, dir di Windows) untuk menampilkan daftar berkas dan direktori dalam folder aktif."
  },
  {
    "term": "CLI Command: mkdir",
    "category": "Sistem Operasi & CLI",
    "icon": "📁",
    "babyAnalogy": "Membuat map folder kardus baru di dalam komputer lewat ketikan teks kilat.",
    "detail": "Perintah baris perintah (make directory) untuk membuat direktori atau struktur folder baru pada sistem berkas."
  },
  {
    "term": "CLI Command: rm / del",
    "category": "Sistem Operasi & CLI",
    "icon": "🗑️",
    "babyAnalogy": "Membuang file ke tong sampah permanen; harus hati-hati agar tidak membuang dokumen penting yang masih dibutuhkan.",
    "detail": "Perintah baris perintah (rm di Linux, del di Windows) untuk menghapus berkas atau direktori secara permanen dari sistem berkas."
  },
  {
    "term": "CLI Command: cp / copy",
    "category": "Sistem Operasi & CLI",
    "icon": "📄",
    "babyAnalogy": "Mesin fotokopi kilat yang menduplikasi berkas dari satu tempat ke tempat lain lewat terminal.",
    "detail": "Perintah utilitas untuk menyalin satu atau beberapa berkas atau direktori dari lokasi sumber ke lokasi tujuan."
  },
  {
    "term": "CLI Command: mv / move",
    "category": "Sistem Operasi & CLI",
    "icon": "🚚",
    "babyAnalogy": "Truk pindahan yang menggeser file ke map lain atau mengganti nama file tersebut.",
    "detail": "Perintah konsol untuk memindahkan berkas/direktori ke lokasi lain atau mengganti nama (rename) berkas tersebut."
  },
  {
    "term": "CLI Command: grep / findstr",
    "category": "Sistem Operasi & CLI",
    "icon": "🔍",
    "babyAnalogy": "Kaca pembesar detektif yang mencari sebaris kata rahasia di dalam tumpukan ribuan halaman buku teks tebal.",
    "detail": "Perintah pencarian pola teks baris demi baris menggunakan ekspresi reguler (grep di Unix, findstr di Windows)."
  },
  {
    "term": "CLI Pipe (|)",
    "category": "Sistem Operasi & CLI",
    "icon": "🚰",
    "babyAnalogy": "Pipa saluran air yang menyambungkan moncong keran hasil kerja perintah pertama langsung ke mulut ember perintah kedua.",
    "detail": "Operator pengalihan shell yang mengalirkan keluaran standar (stdout) dari suatu perintah langsung menjadi masukan standar (stdin) perintah berikutnya."
  },
  {
    "term": "Standard Streams (stdin, stdout, stderr)",
    "category": "Sistem Operasi & CLI",
    "icon": "📻",
    "babyAnalogy": "Tiga saluran komunikasi program: pintu masuk masukan dari keyboard (stdin), pintu keluar hasil kerja (stdout), dan corong teriakan kabar galat (stderr).",
    "detail": "Tiga saluran I/O data standar yang terhubung secara default saat proses program dijalankan pada sistem operasi POSIX."
  },
  {
    "term": "Redirection Operators (> and >>)",
    "category": "Sistem Operasi & CLI",
    "icon": "➡️",
    "babyAnalogy": "Corong pemindah: '>' menulis ulang catatan ke dalam buku baru, sedangkan '>>' menambahkan catatan di baris paling bawah buku lama.",
    "detail": "Operator shell untuk mengalihkan stdout ke berkas: '>' menimpa isi berkas (overwrite), sedangkan '>>' menambahkan konten ke akhir berkas (append)."
  },
  {
    "term": "Daemon / Windows Service",
    "category": "Sistem Operasi & CLI",
    "icon": "👻",
    "babyAnalogy": "Peri pembantu tak terlihat yang diam-diam bekerja di latar belakang (seperti jam dinding, antivirus, atau server web) tanpa membuka jendela di layar.",
    "detail": "Program komputer latar belakang yang berjalan terus-menerus tanpa interaksi pengguna langsung untuk menangani permintaan sistem."
  },
  {
    "term": "Cron Job / Task Scheduler",
    "category": "Sistem Operasi & CLI",
    "icon": "⏰",
    "babyAnalogy": "Alarm jam pintar yang otomatis menjalankan tugas mencadangkan data setiap hari Minggu jam 2 malam saat semua orang sedang tertidur lelap.",
    "detail": "Sistem penjadwalan tugas otomatis berbasis waktu pada OS (daemon cron di Linux, Task Scheduler di Windows) untuk mengeksekusi skrip periodik."
  },
  {
    "term": "Registry (Windows)",
    "category": "Sistem Operasi & CLI",
    "icon": "🏛️",
    "babyAnalogy": "Buku induk peraturan rahasia negara Windows; tempat menyimpan semua setelan tombol, warna tema, dan kata sandi aplikasi sistem.",
    "detail": "Basis data hierarkis terpusat di sistem operasi Microsoft Windows yang menyimpan pengaturan konfigurasi perangkat keras, perangkat lunak, dan preferensi pengguna."
  },
  {
    "term": "Device Driver",
    "category": "Sistem Operasi & CLI",
    "icon": "🗣️",
    "babyAnalogy": "Juru bahasa penerjemah antara komputer pintar dan printer baru; tanpa driver, komputer tidak tahu bagaimana cara memerintah printer mencetak.",
    "detail": "Program perangkat lunak khusus yang mengoperasikan atau mengendalikan perangkat keras tertentu yang terhubung ke komputer."
  },
  {
    "term": "Plug and Play (PnP)",
    "category": "Sistem Operasi & CLI",
    "icon": "🔌",
    "babyAnalogy": "Tancap langsung main; colok flashdisk baru ke komputer, komputer langsung otomatis mengenali dan menyiapkannya tanpa perlu setting rumit.",
    "detail": "Standar kemampuan perangkat keras dan OS yang memungkinkan sistem mengidentifikasi dan mengonfigurasi periferal baru secara otomatis tanpa intervensi manual."
  },
  {
    "term": "BSOD (Blue Screen of Death)",
    "category": "Sistem Operasi & CLI",
    "icon": "💀",
    "babyAnalogy": "Layar biru tangisan darurat Windows; komputer terpaksa berhenti total karena mendeteksi ada kerusakan fatal pada hardware atau driver yang berbahaya.",
    "detail": "Layar kesalahan fatal sistem operasi Windows (Stop Error / Bugcheck) yang terjadi ketika kernel mendeteksi kesalahan kritis yang tidak dapat dipulihkan."
  },
  {
    "term": "Kernel Panic",
    "category": "Sistem Operasi & CLI",
    "icon": "😱",
    "babyAnalogy": "Kejadian serupa BSOD di dunia Linux dan Mac; sang kapten Kernel mengibarkan bendera darurat dan menghentikan kapal komputasi karena ada bahaya fatal.",
    "detail": "Tindakan keamanan yang diambil oleh kernel sistem operasi berbasis Unix saat mendeteksi kesalahan internal kritis fatal yang tidak dapat ditangani."
  },
  {
    "term": "Event Viewer",
    "category": "Sistem Operasi & CLI",
    "icon": "📓",
    "babyAnalogy": "Buku catatan intelijen di Windows tempat komputer mencatat rahasia: aplikasi mana yang baru saja mogok, kapan mati lampu, dan siapa yang salah ketik sandi.",
    "detail": "Alat administratif terintegrasi Microsoft Windows yang menampilkan log terperinci dari kejadian sistem, keamanan, dan aplikasi."
  },
  {
    "term": "System Restore",
    "category": "Sistem Operasi & CLI",
    "icon": "⏳",
    "babyAnalogy": "Mesin waktu ajaib Windows yang bisa memundurkan setelan komputer ke kondisi sehat kemarin sebelum kamu salah menginstal aplikasi rusak.",
    "detail": "Fitur pemulihan Windows yang memungkinkan pengguna mengembalikan file sistem, kunci registri, dan driver ke titik pemulihan (Restore Point) sebelumnya."
  },
  {
    "term": "Safe Mode",
    "category": "Sistem Operasi & CLI",
    "icon": "🚑",
    "babyAnalogy": "Masuk ke rumah sakit komputer: menyalakan Windows hanya dengan baju sederhana dan driver paling dasar agar virus nakal tidak ikut menyala.",
    "detail": "Mode diagnostik booting sistem operasi yang memuat driver dan layanan minimum esensial untuk mempermudah isolasi dan troubleshooting masalah sistem."
  },
  {
    "term": "Bootloader (GRUB, Windows Boot Manager)",
    "category": "Sistem Operasi & CLI",
    "icon": "🚀",
    "babyAnalogy": "Kondektur bus yang menyapa kamu pertama kali saat komputer dinyalakan: 'Mau jalan-jalan naik Windows atau naik Linux hari ini?'.",
    "detail": "Program kecil pertama yang dimuat firmware BIOS/UEFI dari media penyimpanan untuk memuat dan menginisialisasi kernel sistem operasi ke RAM."
  },
  {
    "term": "Dual Boot",
    "category": "Sistem Operasi & CLI",
    "icon": "🎭",
    "babyAnalogy": "Satu komputer punya dua kamar kepribadian: saat dinyalakan kamu bebas memilih mau masuk ke kamar Windows atau kamar Linux Ubuntu.",
    "detail": "Konfigurasi komputer di mana dua sistem operasi berbeda dipasang pada drive penyimpanan yang sama dan dapat dipilih saat proses booting."
  },
  {
    "term": "Live USB / Live CD",
    "category": "Sistem Operasi & CLI",
    "icon": "🧪",
    "babyAnalogy": "Sistem operasi portabel di dalam flashdisk yang bisa langsung dicoba dan dimainkan tanpa perlu menyentuh atau merusak isi harddisk komputer tuan rumah.",
    "detail": "Media penyimpanan instalasi yang berisi sistem operasi lengkap yang dapat di-booting dan dijalankan langsung dari RAM tanpa instalasi permanen di disk."
  },
  {
    "term": "Distro Linux (Ubuntu, Debian, Fedora, Arch)",
    "category": "Sistem Operasi & CLI",
    "icon": "🐧",
    "babyAnalogy": "Rasa-rasa es krim Linux; intinya sama-sama mesin Linux, tapi ada yang manis ramah pemula (Ubuntu), ada yang stabil (Debian), ada yang rasa teknisi mahir (Arch).",
    "detail": "Distribusi sistem operasi berbasis kernel Linux yang dipaketkan bersama manajer paket, lingkungan desktop, dan utilitas perangkat lunak tertentu."
  },
  {
    "term": "Package Manager (APT, DNF, Pacman, Winget)",
    "category": "Sistem Operasi & CLI",
    "icon": "🏪",
    "babyAnalogy": "Toko aplikasi kilat di terminal: cukup ketik 'apt install vlc', komputer otomatis mengunduh, mengecek keaslian, dan memasang aplikasi secara beres.",
    "detail": "Kumpulan alat perangkat lunak yang mengotomatisasi proses instalasi, pembaruan, konfigurasi, dan penghapusan paket program komputer."
  },
  {
    "term": "TAR & GZIP (tar.gz)",
    "category": "Sistem Operasi & CLI",
    "icon": "🧳",
    "babyAnalogy": "Koper kompresi di Linux; TAR mengumpulkan ratusan baju berkas menjadi satu tumpukan rapi, lalu GZIP memerasnya hingga tipis menghemat kuota.",
    "detail": "Format arsip standar Unix: utilitas tar menggabungkan banyak berkas menjadi satu arsip tunggal, dan gzip memampatkan ukuran arsip tersebut."
  },
  {
    "term": "Symlink (Symbolic Link)",
    "category": "Sistem Operasi & CLI",
    "icon": "🔗",
    "babyAnalogy": "Papan petunjuk jalan ajaib; jika kamu mengklik jalan pintas ini, kamu langsung dipindahkan ke rumah file asli di folder yang sangat jauh.",
    "detail": "Tipe berkas khusus pada sistem berkas yang bertindak sebagai referensi penunjuk transparan ke berkas atau direktori lain."
  },
  {
    "term": "Hard Link",
    "category": "Sistem Operasi & CLI",
    "icon": "🪞",
    "babyAnalogy": "Dua nama panggilan berbeda untuk satu orang yang sama persis; menghapus nama panggilan pertama tidak akan melenyapkan orangnya selama nama kedua masih ada.",
    "detail": "Entri direktori kedua yang merujuk langsung ke inode data fisik yang sama persis di sistem berkas."
  },
  {
    "term": "Inode",
    "category": "Sistem Operasi & CLI",
    "icon": "📑",
    "babyAnalogy": "Nomor identitas sertifikat tanah berkas di Linux yang mencatat ukuran file, pemilik, hak izin, dan di blok harddisk mana isinya tersimpan.",
    "detail": "Struktur data pada sistem berkas berbasis Unix yang menyimpan metadata tentang objek sistem berkas (file/direktori) selain nama dan konten datanya."
  },
  {
    "term": "Process Scheduling (Round Robin, FIFO)",
    "category": "Sistem Operasi & CLI",
    "icon": "⏱️",
    "babyAnalogy": "Ibu guru adil yang mengatur giliran anak bermain ayunan: setiap anak boleh main selama 2 menit, lalu bergantian ke anak berikutnya.",
    "detail": "Metode sistem operasi dalam mengalokasikan waktu CPU ke berbagai proses yang bersaing menggunakan algoritma seperti Round Robin atau Priority Scheduling."
  },
  {
    "term": "Context Switching",
    "category": "Sistem Operasi & CLI",
    "icon": "🔄",
    "babyAnalogy": "Koki yang berganti cepat antara memotong wortel dan membalik telur dadar; menyimpan catatan posisi pisau wortel sebelum memegang spatula telur.",
    "detail": "Proses menyimpan status eksekusi CPU dari satu proses dan memuat status proses lain sehingga eksekusi dapat dilanjutkan nanti."
  },
  {
    "term": "Multitasking (Preemptive vs Cooperative)",
    "category": "Sistem Operasi & CLI",
    "icon": "🤹",
    "babyAnalogy": "Sistem operasi pintar yang bisa memaksa merebut mikrofon dari aplikasi yang macet (Preemptive) agar komputer tidak ikutan membeku.",
    "detail": "Kemampuan OS menjalankan beberapa proses bersamaan; Preemptive memungkinkan kernel menginterupsi proses, sedangkan Cooperative bergantung pada kerelaan proses melepaskan kontrol."
  },
  {
    "term": "System Call (syscall)",
    "category": "Sistem Operasi & CLI",
    "icon": "🛎️",
    "babyAnalogy": "Menekan bel pelayan hotel: aplikasi meminta bantuan resmi kepada sang Kernel untuk menulis sesuatu ke harddisk atau membuka kabel internet.",
    "detail": "Antarmuka terprogram formal di mana program tingkat pengguna meminta layanan langsung dari kernel sistem operasi."
  },
  {
    "term": "User Space vs Kernel Space",
    "category": "Sistem Operasi & CLI",
    "icon": "🏰",
    "babyAnalogy": "User Space = pasar umum tempat warga aplikasi bermain santai; Kernel Space = ruang kendali istana berpagar besi tempat hanya tentara terpercaya yang boleh masuk.",
    "detail": "Pemisahan ruang memori virtual untuk melindungi memori kernel kritis dari modifikasi atau akses tidak sah oleh aplikasi pengguna biasa."
  },
  {
    "term": "Inter-Process Communication (IPC)",
    "category": "Sistem Operasi & CLI",
    "icon": "🗣️",
    "babyAnalogy": "Kaleng benang telepon rahasia tempat dua aplikasi berbeda di satu komputer bisa saling bertukar kabar dan data.",
    "detail": "Mekanisme perangkat lunak yang memungkinkan proses berbeda berkomunikasi dan menyinkronkan tindakan mereka (seperti pipa, socket, memori bersama)."
  },
  {
    "term": "Shared Memory",
    "category": "Sistem Operasi & CLI",
    "icon": "🥣",
    "babyAnalogy": "Satu mangkuk keripik bersama di tengah meja yang bisa dimakan bersamaan oleh dua teman tanpa perlu saling oper kardus.",
    "detail": "Metode IPC tercepat di mana dua proses atau lebih memetakan dan mengakses area memori fisik yang sama secara simultan."
  },
  {
    "term": "Mutex (Mutual Exclusion)",
    "category": "Sistem Operasi & CLI",
    "icon": "🔑",
    "babyAnalogy": "Kunci pintu toilet umum: hanya satu orang yang boleh masuk dan mengunci pintu; orang kedua wajib menunggu di luar sampai kunci dikembalikan.",
    "detail": "Objek sinkronisasi konkurensi penguncian biner yang mencegah akses simultan beberapa thread ke bagian kode kritis sumber daya bersama."
  },
  {
    "term": "Semaphore",
    "category": "Sistem Operasi & CLI",
    "icon": "🚥",
    "babyAnalogy": "Karcis parkir bertanda 'Tersisa 3 Tempat': mobil boleh masuk selama karcis belum habis, tapi jika sudah 0, mobil berikutnya wajib antre di luar.",
    "detail": "Variabel sinkronisasi penghitung bilangan bulat yang mengontrol akses ke kumpulan sumber daya bersama yang memiliki kapasitas terbatas."
  },
  {
    "term": "Race Condition",
    "category": "Sistem Operasi & CLI",
    "icon": "🏃",
    "babyAnalogy": "Dua orang serentak menekan tombol 'Beli Tiket Terakhir' di detik yang sama persis sehingga hasilnya kacau jika tidak ada gembok pengaman.",
    "detail": "Situasi cacat perangkat lunak di mana output sistem bergantung secara tidak terduga pada urutan atau waktu eksekusi thread yang tidak tersinkronisasi."
  },
  {
    "term": "CLI Command: top / htop",
    "category": "Sistem Operasi & CLI",
    "icon": "📺",
    "babyAnalogy": "Layar bioskop bergerak di Linux yang menampilkan peringkat aplikasi terberat yang sedang menguras tenaga prosesor dan RAM.",
    "detail": "Utilitas pemantau proses interaktif baris perintah dinamis di Linux yang menampilkan daftar proses aktif berurutan berdasarkan konsumsi sumber daya."
  },
  {
    "term": "CLI Command: kill / killall",
    "category": "Sistem Operasi & CLI",
    "icon": "🔫",
    "babyAnalogy": "Polisi terminal yang menembak mati aplikasi macet yang bandel tidak mau ditutup lewat jendela biasa.",
    "detail": "Perintah shell Unix untuk mengirimkan sinyal penghentian (seperti SIGTERM atau SIGKILL 9) ke proses tertentu berdasarkan nomor PID atau nama aplikasi."
  },
  {
    "term": "Signal (SIGINT, SIGTERM, SIGKILL)",
    "category": "Sistem Operasi & CLI",
    "icon": "📨",
    "babyAnalogy": "Surat perintah: SIGINT = menekan Ctrl+C untuk berhenti sopan; SIGKILL = mencabut kabel nyawa aplikasi seketika tanpa ampun.",
    "detail": "Pemberitahuan asinkron yang dikirim ke proses untuk memberi tahu terjadinya peristiwa sistem (SIGINT=2, SIGTERM=15 sopan, SIGKILL=9 paksa)."
  },
  {
    "term": "Foreground vs Background Process",
    "category": "Sistem Operasi & CLI",
    "icon": "🎭",
    "babyAnalogy": "Foreground = aktor utama yang tampil di panggung layar; Background (&) = kru panggung yang sibuk menyapu di balik tirai tanpa menghalangi pandangan.",
    "detail": "Proses foreground memegang kendali terminal dan menerima input keyboard; proses background (&) berjalan di latar belakang tanpa mengunci sesi konsol."
  },
  {
    "term": "CLI Command: ps (Process Status)",
    "category": "Sistem Operasi & CLI",
    "icon": "📸",
    "babyAnalogy": "Memotret foto sekejap daftar aplikasi yang sedang hidup di komputer pada detik ini lengkap dengan nomor PID-nya.",
    "detail": "Perintah Unix untuk menampilkan snapshot informasi tentang proses yang sedang aktif berjalan pada sistem saat ini."
  },
  {
    "term": "CLI Command: df (Disk Free)",
    "category": "Sistem Operasi & CLI",
    "icon": "🥧",
    "babyAnalogy": "Melihat sisa luas tanah kapling di harddisk: berapa giga yang sudah penuh dan berapa persen yang masih kosong.",
    "detail": "Perintah baris perintah (df -h) untuk menampilkan jumlah ruang penyimpanan disk yang digunakan dan tersedia pada sistem berkas."
  },
  {
    "term": "CLI Command: du (Disk Usage)",
    "category": "Sistem Operasi & CLI",
    "icon": "⚖️",
    "babyAnalogy": "Menimbang berat map folder: mencari tahu file raksasa mana yang diam-diam memakan tempat paling boros di komputermu.",
    "detail": "Perintah konsol (du -sh) untuk memperkirakan dan merangkum penggunaan ruang berkas atau direktori tertentu pada media penyimpanan."
  },
  {
    "term": "CLI Command: cat / type",
    "category": "Sistem Operasi & CLI",
    "icon": "📜",
    "babyAnalogy": "Membuka gulungan surat dan menumpahkan seluruh isi tulisan teksnya langsung ke layar terminal tanpa membuka aplikasi Notepad.",
    "detail": "Perintah utilitas untuk menggabungkan dan mencetak seluruh isi berkas teks langsung ke aliran output standar (stdout)."
  },
  {
    "term": "CLI Command: head & tail",
    "category": "Sistem Operasi & CLI",
    "icon": "🦒",
    "babyAnalogy": "Head = membaca 10 baris pertama di kepala dokumen; Tail = mengintip 10 baris terakhir di ekor log (tail -f untuk memantau log langsung mengalir).",
    "detail": "Perintah Unix untuk menampilkan bagian awal (head) atau bagian akhir (tail) dari sebuah berkas teks log."
  },
  {
    "term": "CLI Command: less & more",
    "category": "Sistem Operasi & CLI",
    "icon": "📖",
    "babyAnalogy": "Membaca buku teks tebal halaman demi halaman di layar hitam terminal menggunakan tombol spasi dan panah kibor.",
    "detail": "Perangkat lunak pager terminal yang memungkinkan pengguna menavigasi dan membaca berkas teks panjang secara bertahap layar demi layar."
  },
  {
    "term": "CLI Command: find",
    "category": "Sistem Operasi & CLI",
    "icon": "🐕",
    "babyAnalogy": "Anjing pelacak sakti yang mencari berkas berdasarkan nama, ukuran, atau tanggal dibuat di seluruh pelosok harddisk.",
    "detail": "Perintah canggih pencarian rekursif sistem berkas Unix untuk mencari berkas dan direktori berdasarkan nama, tipe, izin, ukuran, dan waktu modifikasi."
  },
  {
    "term": "CLI Command: whoami",
    "category": "Sistem Operasi & CLI",
    "icon": "👤",
    "babyAnalogy": "Bertanya ke komputer: 'Siapa nama akun saya yang sedang login di layar ini?'.",
    "detail": "Perintah baris perintah sederhana yang mencetak nama pengguna efektif (username) dari pengguna yang saat ini sedang aktif di sesi terminal."
  },
  {
    "term": "CLI Command: history",
    "category": "Sistem Operasi & CLI",
    "icon": "📜",
    "babyAnalogy": "Buku harian terminal yang mengingat ratusan mantra perintah yang pernah kamu ketik kemarin-kemarin agar kamu tidak lupa.",
    "detail": "Perintah shell bawaan yang menampilkan daftar riwayat baris perintah yang telah dieksekusi sebelumnya oleh pengguna dalam sesi konsol."
  },
  {
    "term": "CLI Command: alias",
    "category": "Sistem Operasi & CLI",
    "icon": "🏷️",
    "babyAnalogy": "Nama panggilan manja; membuat singkatan sendiri (misal: 'update' untuk menggantikan 'sudo apt update && sudo apt upgrade').",
    "detail": "Fitur shell untuk membuat pintasan nama kustom atau singkatan bagi perintah yang panjang dan kompleks beserta argumennya."
  },
  {
    "term": "Bash Scripting (.sh)",
    "category": "Sistem Operasi & CLI",
    "icon": "📜",
    "babyAnalogy": "Menuliskan daftar 10 mantra sakti dalam selembar kertas skrip; sekali dibaca, komputer otomatis mengerjakannya dari awal sampai akhir tanpa disuruh lagi.",
    "detail": "Bahasa pemrograman skrip terinterpretasi untuk mengotomatisasi serangkaian perintah shell Unix ke dalam satu berkas teks yang dapat dieksekusi."
  },
  {
    "term": "PowerShell Scripting (.ps1)",
    "category": "Sistem Operasi & CLI",
    "icon": "⚡",
    "babyAnalogy": "Bahasa mantra sakti modern Windows yang memanipulasi benda nyata (objek) bukan sekadar tulisan teks biasa.",
    "detail": "Kerangka kerja manajemen konfigurasi dan automasi tugas berbasis objek dan .NET dari Microsoft untuk mengelola sistem Windows dan Linux."
  },
  {
    "term": "PowerShell Cmdlet (Get-Process, Set-Service)",
    "category": "Sistem Operasi & CLI",
    "icon": "🧱",
    "babyAnalogy": "Blok mantra resmi PowerShell berformat KataKerja-KataBenda yang sangat mudah dibaca manusia.",
    "detail": "Perintah bawaan ringan dalam lingkungan PowerShell yang berformat standar 'Verb-Noun' dan mengembalikan objek .NET murni."
  },
  {
    "term": "PowerShell Pipeline (Object-Oriented)",
    "category": "Sistem Operasi & CLI",
    "icon": "🚚",
    "babyAnalogy": "Bukan sekadar mengalirkan tulisan huruf, tapi mengoper paket kotak barang sungguhan yang punya sifat dan ukuran lengkap ke perintah berikutnya.",
    "detail": "Fitur pipeline PowerShell yang meneruskan objek .NET utuh (lengkap dengan metode dan properti) antar perintah, bukan sekadar aliran teks string mentah."
  },
  {
    "term": "Systemd (systemctl)",
    "category": "Sistem Operasi & CLI",
    "icon": "🎛️",
    "babyAnalogy": "Manajer gedung Linux yang menyalakan mesin lampu, menjaga server web tetap hidup, dan otomatis menyalakannya kembali jika server sempat jatuh pingsan.",
    "detail": "Sistem inisialisasi (init) dan manajer layanan standar untuk sistem operasi Linux modern yang mengontrol daemon proses, target boot, dan pemantauan sistem."
  },
  {
    "term": "Init (PID 1)",
    "category": "Sistem Operasi & CLI",
    "icon": "👶",
    "babyAnalogy": "Kakek moyang tertua dari seluruh aplikasi di komputer; proses nomor 1 yang lahir pertama kali saat menyala dan melahirkan semua proses lainnya.",
    "detail": "Proses pertama yang dijalankan oleh kernel sistem operasi saat proses booting selesai, menjadi induk leluhur dari semua proses lain di sistem."
  },
  {
    "term": "Zombie Process",
    "category": "Sistem Operasi & CLI",
    "icon": "🧟",
    "babyAnalogy": "Arwah proses yang tugasnya sudah selesai mati, tapi namanya masih tercatat di buku tamu karena orang tuanya lupa melapor ke kelurahan sistem operasi.",
    "detail": "Proses yang telah selesai dieksekusi tetapi masih memiliki entri di tabel proses sistem operasi karena proses induknya belum membaca status keluarnya."
  },
  {
    "term": "Orphan Process",
    "category": "Sistem Operasi & CLI",
    "icon": "👶",
    "babyAnalogy": "Anak proses yang ditinggal mati duluan oleh proses orang tuanya, sehingga langsung diadopsi oleh kakek Systemd/Init (PID 1) agar tidak terlantar.",
    "detail": "Proses yang tetap berjalan aktif setelah proses induk pembuatnya berhenti atau ditutup, yang kemudian secara otomatis diadopsi oleh proses init (PID 1)."
  },
  {
    "term": "Disk Partitioning (MBR vs GPT)",
    "category": "Sistem Operasi & CLI",
    "icon": "🍰",
    "babyAnalogy": "MBR = pisau kue jadul yang hanya bisa memotong 4 potong dan maksimal 2 TB; GPT = pisau modern yang bisa memotong hingga 128 potong kamar raksasa.",
    "detail": "Skema tabel partisi media penyimpanan: MBR (warisan BIOS, maks 4 partisi primer, maks 2 TB) vs GPT (standar UEFI modern, hingga 128 partisi, kapasitas zettabyte)."
  },
  {
    "term": "Swap Space / Swap Partition",
    "category": "Sistem Operasi & CLI",
    "icon": "🛌",
    "babyAnalogy": "Kamar tidur cadangan di harddisk tempat aplikasi tidur sementara saat kamar utama RAM sedang kehabisan kasur tempat tidur.",
    "detail": "Area khusus pada drive penyimpanan yang dialokasikan oleh sistem operasi Linux sebagai ekstensi memori virtual saat memori RAM fisik penuh."
  },
  {
    "term": "Mounting & Unmounting (mount/umount)",
    "category": "Sistem Operasi & CLI",
    "icon": "🔌",
    "babyAnalogy": "Menyambungkan jembatan pintu antara flashdisk dan sistem file komputer agar foldernya bisa dimasuki dan dibuka oleh pengguna.",
    "detail": "Proses melampirkan sistem berkas dari media penyimpanan fisik ke pohon hierarki direktori sistem operasi aktif pada titik kait tertentu (mount point)."
  },
  {
    "term": "Mount Point",
    "category": "Sistem Operasi & CLI",
    "icon": "📍",
    "babyAnalogy": "Pintu gerbang alamat folder (misal: /mnt/flashdisk) tempat isi flashdisk yang baru dicolokkan bisa dilihat dan diakses.",
    "detail": "Direktori dalam sistem berkas lokal yang menjadi titik akses utama untuk sistem berkas yang baru saja dipasang (mounted)."
  },
  {
    "term": "/etc Directory",
    "category": "Sistem Operasi & CLI",
    "icon": "⚙️",
    "babyAnalogy": "Kamar lemari setelan di Linux; tempat menyimpan seluruh buku resep dan konfigurasi setelan aplikasi sistem.",
    "detail": "Direktori hierarki standar sistem berkas Linux (FHS) yang berisi semua berkas konfigurasi sistem dan administratif yang spesifik untuk host tersebut."
  },
  {
    "term": "/var Directory",
    "category": "Sistem Operasi & CLI",
    "icon": "📈",
    "babyAnalogy": "Kamar yang isinya terus bertambah dan berubah setiap detik, seperti tumpukan buku catatan log dan antrean surat email.",
    "detail": "Direktori hierarki Linux yang menyimpan berkas data variabel yang ukurannya terus berubah secara dinamis selama pengoperasian sistem (log, cache, spool)."
  },
  {
    "term": "/dev Directory",
    "category": "Sistem Operasi & CLI",
    "icon": "🕹️",
    "babyAnalogy": "Kamar perwakilan perangkat keras di Linux; di mana harddisk, keyboard, dan mouse diwakili sebagai sebuah berkas teks ajaib.",
    "detail": "Direktori khusus yang berisi berkas simpul perangkat khusus (device nodes) yang mewakili perangkat keras fisik sistem."
  },
  {
    "term": "/proc Directory",
    "category": "Sistem Operasi & CLI",
    "icon": "🪟",
    "babyAnalogy": "Jendela kaca tembus pandang untuk mengintip langsung ke dalam isi kepala kernel Linux yang sedang berpikir.",
    "detail": "Sistem berkas virtual pseudo di Linux yang menyediakan antarmuka langsung ke struktur data kernel internal dan informasi proses aktif."
  },
  {
    "term": "SSH Key Pair (Public & Private Key)",
    "category": "Sistem Operasi & CLI",
    "icon": "🔑",
    "babyAnalogy": "Public Key = gembok yang kamu pasang di pintu server; Private Key = anak kunci rahasia di saku jaketmu yang tidak boleh diberikan ke siapa pun.",
    "detail": "Mekanisme otentikasi kriptografis asimetris untuk SSH: kunci publik dipasang di server tujuan dan kunci privat disimpan secara aman oleh klien lokal."
  },
  {
    "term": "SSH Config File (~/.ssh/config)",
    "category": "Sistem Operasi & CLI",
    "icon": "📒",
    "babyAnalogy": "Buku jalan pintas rahasia: cukup ketik 'ssh kantor', komputer otomatis memasukkan alamat IP panjang, nomor port, dan kunci rahasianya sendiri.",
    "detail": "Berkas konfigurasi klien SSH pengguna lokal yang menyimpan alias host, alamat IP server, nama pengguna, port, dan jalur file identitas kunci privat."
  },
  {
    "term": "SCP (Secure Copy Protocol)",
    "category": "Sistem Operasi & CLI",
    "icon": "🚚",
    "babyAnalogy": "Truk boks lapis baja yang mengantar berkas salinan dari laptopmu ke server Linux di luar negeri melewati terowongan SSH yang aman.",
    "detail": "Protokol transfer berkas berbasis jaringan yang memanfaatkan protokol SSH untuk menyalin berkas secara aman antara host lokal dan host jarak jauh."
  },
  {
    "term": "Rsync (Remote Sync)",
    "category": "Sistem Operasi & CLI",
    "icon": "⚡",
    "babyAnalogy": "Tukang fotokopi super hemat: jika kamu mengedit 1 halaman dari buku 1000 halaman, rsync hanya mengirimkan 1 halaman yang berubah saja ke server cadangan.",
    "detail": "Utilitas sinkronisasi berkas cepat dan fleksibel yang hanya mentransfer perbedaan bagian data (delta) antara berkas sumber dan berkas tujuan."
  },
  {
    "term": "Wget & cURL",
    "category": "Sistem Operasi & CLI",
    "icon": "🌐",
    "babyAnalogy": "Dua kurir pengambil barang di terminal; Wget jago mengunduh file besar sampai tuntas, cURL jago mengetuk dan berbicara dengan API server web.",
    "detail": "Alat baris perintah untuk mentransfer data menggunakan protokol internet: wget fokus pada pengunduhan konten berkas, curl fleksibel untuk interaksi HTTP API."
  },
  {
    "term": "Shebang (#!)",
    "category": "Sistem Operasi & CLI",
    "icon": "🎼",
    "babyAnalogy": "Nada pembuka di baris paling atas skrip (seperti #!/bin/bash) yang memberi tahu komputer aplikasi apa yang harus membaca lembaran skrip ini.",
    "detail": "Karakter penanda ajaib '#!' pada baris pertama berkas skrip teks yang menentukan path biner penerjemah (interpreter) yang digunakan untuk eksekusi."
  },
  {
    "term": "Uptime",
    "category": "Sistem Operasi & CLI",
    "icon": "⏳",
    "babyAnalogy": "Piala kebanggaan teknisi: stopwatch yang menghitung sudah berapa hari, bulan, atau tahun server menyala melayani tanpa pernah dimatikan atau mogok.",
    "detail": "Perintah utilitas sistem yang menampilkan berapa lama sistem komputer telah beroperasi aktif sejak proses booting terakhir."
  },
  {
    "term": "Load Average (1, 5, 15 minutes)",
    "category": "Sistem Operasi & CLI",
    "icon": "🏋️",
    "babyAnalogy": "Tiga angka beban kerja server: menunjukkan rata-rata antrean proses yang mengantre giliran CPU dalam 1 menit, 5 menit, dan 15 menit terakhir.",
    "detail": "Metrik sistem pada Linux/Unix yang merepresentasikan jumlah rata-rata proses komputasi yang sedang berjalan atau menunggu giliran di antrean CPU."
  },
  {
    "term": "CLI Command: watch",
    "category": "Sistem Operasi & CLI",
    "icon": "⏱️",
    "babyAnalogy": "Kamera pengawas CCTV terminal yang otomatis mengulang perintah yang sama setiap 2 detik agar kamu bisa melihat perubahan angka secara langsung.",
    "detail": "Perintah utilitas Unix yang mengeksekusi program atau perintah secara periodik pada interval tertentu dan menampilkan hasilnya secara layar penuh."
  },
  {
    "term": "CLI Command: sed & awk",
    "category": "Sistem Operasi & CLI",
    "icon": "🧙",
    "babyAnalogy": "Dua penyihir sakti pemroses teks di Linux: 'sed' mengganti kata-kata kilat seperti sulap, 'awk' mengolah tabel data angka serumit rumus akuntansi.",
    "detail": "Dua alat pemrosesan teks dan bahasa skrip bawaan Unix legendaris: sed (stream editor) untuk manipulasi teks otomatis, dan awk untuk ekstraksi dan pelaporan data terstruktur."
  },
  {
    "term": "Database (Basis Data)",
    "category": "Basis Data & SQL",
    "icon": "🗄️",
    "babyAnalogy": "Lemari arsip digital raksasa tempat jutaan data tersimpan dengan sangat rapi, terkunci aman, dan bisa dicari dalam sekejap mata.",
    "detail": "Kumpulan data terorganisir yang disimpan dan diakses secara elektronik dari sistem komputer, dikelola oleh DBMS."
  },
  {
    "term": "DBMS (Database Management System)",
    "category": "Basis Data & SQL",
    "icon": "🤖",
    "babyAnalogy": "Petugas perpustakaan pintar yang menjaga lemari database, mengindeks buku, dan mencarikan buku yang diminta pengguna.",
    "detail": "Perangkat lunak sistem yang memfasilitasi pembuatan, pemeliharaan, pencarian, dan pengontrolan akses ke basis data."
  },
  {
    "term": "RDBMS (Relational DBMS)",
    "category": "Basis Data & SQL",
    "icon": "🔗",
    "babyAnalogy": "Lemari arsip yang menyusun data dalam bentuk tabel-tabel Excel pintar yang saling berhubungan lewat tali ikatan kunci khusus.",
    "detail": "Sistem manajemen basis data berbasis model relasional yang mengorganisasi data ke dalam baris dan kolom tabel yang saling berelasi."
  },
  {
    "term": "SQL (Structured Query Language)",
    "category": "Basis Data & SQL",
    "icon": "🗣️",
    "babyAnalogy": "Bahasa mantra ajaib standar sedunia untuk berbicara dan memerintah lemari database: 'Ambilkan data murid yang nilainya di atas 90!'.",
    "detail": "Bahasa pemrograman deklaratif standar ANSI/ISO untuk mengelola dan memanipulasi data dalam sistem basis data relasional."
  },
  {
    "term": "Table (Tabel)",
    "category": "Basis Data & SQL",
    "icon": "📊",
    "babyAnalogy": "Satu lembar kertas berpetak mirip lembar kerja Excel tempat data sejenis (misalnya tabel 'Karyawan' atau 'Produk') ditata rapi.",
    "detail": "Struktur data dasar dalam RDBMS yang terdiri dari baris (rekaman) dan kolom (atribut) untuk menyimpan entitas data tertentu."
  },
  {
    "term": "Row / Record / Tuple",
    "category": "Basis Data & SQL",
    "icon": "📄",
    "babyAnalogy": "Satu baris mendatar yang berisi biodata lengkap dari satu orang murid atau satu buah barang belanjaan.",
    "detail": "Satu entri data tunggal dalam tabel basis data yang memuat sekumpulan nilai atribut terkait untuk satu entitas nyata."
  },
  {
    "term": "Column / Field / Attribute",
    "category": "Basis Data & SQL",
    "icon": "📏",
    "babyAnalogy": "Satu kolom tegak lurus ke bawah yang mencatat jenis informasi yang sama untuk semua orang, seperti kolom 'Nama' atau 'Tanggal Lahir'.",
    "detail": "Elemen vertikal dalam tabel basis data yang menyimpan tipe data spesifik untuk karakteristik tertentu dari setiap rekaman."
  },
  {
    "term": "Primary Key (PK)",
    "category": "Basis Data & SQL",
    "icon": "🔑",
    "babyAnalogy": "Nomor KTP atau NIK unik; kunci pengenal sakti yang tidak boleh ada dua orang yang sama dan tidak boleh kosong.",
    "detail": "Kolom atau kombinasi kolom yang nilainya secara unik mengidentifikasi setiap baris rekaman dalam sebuah tabel dan tidak boleh bernilai NULL."
  },
  {
    "term": "Foreign Key (FK)",
    "category": "Basis Data & SQL",
    "icon": "🔗",
    "babyAnalogy": "Nomor KTP ayah yang dicatat di kartu keluarga anak; tali penghubung yang mengaitkan data anak dengan data ayahnya di tabel sebelah.",
    "detail": "Kolom dalam satu tabel yang nilainya merujuk ke Primary Key di tabel lain untuk membangun relasi integritas referensial antar tabel."
  },
  {
    "term": "Composite Key",
    "category": "Basis Data & SQL",
    "icon": "👥",
    "babyAnalogy": "Kunci duet: menggabungkan dua kolom (misal: 'Nomor Kamar' + 'Nomor Gedung') untuk menjadi tanda pengenal unik yang tidak ada tandingannya.",
    "detail": "Kunci primer yang dibentuk dari kombinasi dua atau lebih kolom dalam satu tabel untuk memastikan keunikan baris rekaman."
  },
  {
    "term": "Candidate Key",
    "category": "Basis Data & SQL",
    "icon": "🎖️",
    "babyAnalogy": "Daftar calon ketua kelas; semua kolom yang punya potensi menjadi Primary Key (misal: Nomor KTP, Nomor Paspor, dan Alamat Email).",
    "detail": "Kumpulan satu atau beberapa kolom yang memenuhi syarat untuk menjadi kunci utama (Primary Key) karena memiliki nilai unik di setiap baris."
  },
  {
    "term": "Unique Constraint",
    "category": "Basis Data & SQL",
    "icon": "🔏",
    "babyAnalogy": "Aturan satpam: 'Tidak boleh ada dua orang dengan alamat email yang sama di sekolah ini!', meskipun kolom tersebut bukan kunci utama.",
    "detail": "Batasan integritas basis data yang memastikan seluruh nilai dalam sebuah kolom atau kelompok kolom bersifat unik di antara semua baris."
  },
  {
    "term": "NOT NULL Constraint",
    "category": "Basis Data & SQL",
    "icon": "🚫",
    "babyAnalogy": "Kotak formulir bertanda bintang merah wajib isi; tidak boleh dikosongkan atau dilewati saat mendaftar.",
    "detail": "Batasan skema basis data yang melarang sebuah kolom menyimpan nilai kosong (NULL), memastikan data selalu terisi."
  },
  {
    "term": "DEFAULT Constraint",
    "category": "Basis Data & SQL",
    "icon": "🏷️",
    "babyAnalogy": "Jawaban otomatis yang diisikan komputer jika kamu malas mengisi, misalnya status otomatis terisi 'Aktif' jika tidak ditulis.",
    "detail": "Nilai bawaan yang secara otomatis dimasukkan ke dalam kolom tertentu jika pengguna tidak memberikan nilai secara eksplisit saat INSERT."
  },
  {
    "term": "CHECK Constraint",
    "category": "Basis Data & SQL",
    "icon": "👮",
    "babyAnalogy": "Satpam pemeriksa logika: 'Nilai ujian harus antara 0 sampai 100!' atau 'Umur tidak boleh angka minus!'.",
    "detail": "Batasan integritas yang memvalidasi bahwa nilai dalam sebuah kolom harus memenuhi kondisi predikat logika tertentu sebelum disimpan."
  },
  {
    "term": "AUTO_INCREMENT / IDENTITY / SERIAL",
    "category": "Basis Data & SQL",
    "icon": "🔢",
    "babyAnalogy": "Mesin nomor antrean di bank yang otomatis mengeluarkan nomor 1, 2, 3, dan seterusnya setiap kali ada nasabah baru yang datang.",
    "detail": "Fitur basis data yang secara otomatis menghasilkan nilai bilangan bulat berurutan yang unik untuk kolom kunci primer setiap kali baris baru ditambahkan."
  },
  {
    "term": "SELECT Statement",
    "category": "Basis Data & SQL",
    "icon": "🔍",
    "babyAnalogy": "Mantra perintah: 'Tolong carikan dan tampilkan dokumen-dokumen ini di hadapan saya!'.",
    "detail": "Klausa dasar SQL yang digunakan untuk mengambil dan memproyeksikan data dari satu atau beberapa tabel basis data."
  },
  {
    "term": "FROM Clause",
    "category": "Basis Data & SQL",
    "icon": "📂",
    "babyAnalogy": "Menunjuk nama lemari map yang ingin diambil isinya: 'Ambilkan data DARI tabel Mahasiswa!'.",
    "detail": "Klausa SQL yang menentukan tabel atau sumber data tempat data akan diambil dalam pernyataan kueri."
  },
  {
    "term": "WHERE Clause",
    "category": "Basis Data & SQL",
    "icon": "🎯",
    "babyAnalogy": "Saringan filter: 'Hanya ambil data orang-orang YANG usianya di atas 17 tahun dan tinggal di Jakarta!'.",
    "detail": "Klausa SQL yang menyaring baris data berdasarkan kondisi predikat tertentu sebelum data tersebut dikelompokkan atau dikembalikan."
  },
  {
    "term": "ORDER BY Clause (ASC / DESC)",
    "category": "Basis Data & SQL",
    "icon": "📶",
    "babyAnalogy": "Menyusun barisan: ASC menyusun dari kecil ke besar (A ke Z); DESC menyusun dari yang paling besar ke kecil (Z ke A).",
    "detail": "Klausa SQL yang mengurutkan hasil keluaran kueri berdasarkan satu atau beberapa kolom secara naik (ASC) atau turun (DESC)."
  },
  {
    "term": "LIMIT / TOP / FETCH FIRST",
    "category": "Basis Data & SQL",
    "icon": "🛑",
    "babyAnalogy": "Papan rem: 'Tolong tampilkan 5 orang juara kelas teratas saja, jangan tampilkan semuanya!'.",
    "detail": "Klausa SQL untuk membatasi jumlah baris maksimum yang dikembalikan oleh hasil kueri (LIMIT di MySQL/PostgreSQL, TOP di SQL Server)."
  },
  {
    "term": "OFFSET Clause",
    "category": "Basis Data & SQL",
    "icon": "⏭️",
    "babyAnalogy": "Melompati beberapa baris pertama; seperti membuka halaman 2 pada Google yang melompati 10 hasil pencarian pertama.",
    "detail": "Klausa SQL yang menentukan berapa banyak baris awal yang harus dilewati sebelum mulai mengembalikan hasil kueri (berguna untuk paginasi)."
  },
  {
    "term": "DISTINCT Keyword",
    "category": "Basis Data & SQL",
    "icon": "✨",
    "babyAnalogy": "Pembersih duplikat: jika nama 'Budi' muncul 10 kali di buku tamu, hanya tampilkan nama 'Budi' satu kali saja.",
    "detail": "Kata kunci SQL yang menyaring dan menghapus baris duplikat dari kumpulan hasil keluaran pernyataan SELECT."
  },
  {
    "term": "GROUP BY Clause",
    "category": "Basis Data & SQL",
    "icon": "👥",
    "babyAnalogy": "Mengumpulkan anak-anak ke dalam kelompok kelasnya masing-masing sebelum menghitung rata-rata nilai per kelas.",
    "detail": "Klausa SQL yang mengelompokkan baris yang memiliki nilai kolom yang sama ke dalam baris ringkasan agregat."
  },
  {
    "term": "HAVING Clause",
    "category": "Basis Data & SQL",
    "icon": "⚖️",
    "babyAnalogy": "Saringan khusus untuk kelompok: 'Hanya tampilkan kelompok kelas YANG jumlah muridnya lebih dari 30 orang!'.",
    "detail": "Klausa penyaring dalam SQL yang diterapkan pada kelompok data setelah operasi GROUP BY dan fungsi agregasi dijalankan."
  },
  {
    "term": "Aggregate Functions (COUNT, SUM, AVG, MIN, MAX)",
    "category": "Basis Data & SQL",
    "icon": "🧮",
    "babyAnalogy": "Kalkulator regu: COUNT menghitung jumlah orang, SUM menjumlahkan uang, AVG menghitung rata-rata, MIN mencari yang terkecil, MAX mencari yang terbesar.",
    "detail": "Fungsi bawaan SQL yang melakukan kalkulasi matematis pada sekumpulan nilai dalam kolom dan mengembalikan nilai skalar tunggal."
  },
  {
    "term": "INSERT INTO Statement",
    "category": "Basis Data & SQL",
    "icon": "📥",
    "babyAnalogy": "Mantra untuk menyelipkan selembar biodata murid baru ke dalam map folder tabel.",
    "detail": "Pernyataan Manipulasi Data (DML) SQL yang digunakan untuk menambahkan baris data baru ke dalam tabel basis data."
  },
  {
    "term": "UPDATE Statement",
    "category": "Basis Data & SQL",
    "icon": "✏️",
    "babyAnalogy": "Mantra untuk mengoreksi atau mengubah nomor telepon atau alamat murid yang pindah rumah.",
    "detail": "Pernyataan DML SQL yang digunakan untuk memodifikasi nilai data yang sudah ada pada satu atau beberapa baris di tabel basis data."
  },
  {
    "term": "DELETE Statement",
    "category": "Basis Data & SQL",
    "icon": "🗑️",
    "babyAnalogy": "Mantra untuk mencabut dan membuang lembaran data murid yang sudah lulus dari dalam tabel.",
    "detail": "Pernyataan DML SQL yang digunakan untuk menghapus satu atau beberapa baris data tertentu dari tabel berdasarkan kondisi WHERE."
  },
  {
    "term": "TRUNCATE TABLE",
    "category": "Basis Data & SQL",
    "icon": "🕳️",
    "babyAnalogy": "Mengosongkan seluruh isi laci seketika dalam satu tebasan kilat tanpa menyentuh struktur kayu lacinya.",
    "detail": "Pernyataan DDL SQL yang menghapus seluruh baris data dari sebuah tabel dengan cepat melalui deallokasi halaman data tanpa mencatat log per baris."
  },
  {
    "term": "DROP TABLE",
    "category": "Basis Data & SQL",
    "icon": "💣",
    "babyAnalogy": "Menghancurkan seluruh lemari meja beserta seluruh berkas di dalamnya sampai rata dengan tanah dan hilang selamanya.",
    "detail": "Pernyataan DDL SQL yang menghapus objek tabel secara permanen beserta definisi skema, indeks, pemicu, dan seluruh datanya."
  },
  {
    "term": "INNER JOIN",
    "category": "Basis Data & SQL",
    "icon": "🤝",
    "babyAnalogy": "Pertemuan dua sahabat: hanya menampilkan data yang cocok dan hadir di kedua tabel sekaligus (irisan lingkaran diagram Venn).",
    "detail": "Klausa penggabungan tabel SQL yang mengembalikan baris jika terdapat kecocokan nilai kunci pada kedua tabel yang digabungkan."
  },
  {
    "term": "LEFT JOIN (LEFT OUTER JOIN)",
    "category": "Basis Data & SQL",
    "icon": "👈",
    "babyAnalogy": "Sayang anak emas sebelah kiri: semua data di tabel kiri wajib tampil utuh, meskipun di tabel kanan datanya tidak ada (diisi NULL).",
    "detail": "Operasi join SQL yang mengembalikan semua baris dari tabel kiri dan baris yang cocok dari tabel kanan, mengisi nilai NULL jika tidak ada pasangan."
  },
  {
    "term": "RIGHT JOIN (RIGHT OUTER JOIN)",
    "category": "Basis Data & SQL",
    "icon": "👉",
    "babyAnalogy": "Kebalikan dari LEFT JOIN: semua data di tabel sebelah kanan wajib tampil utuh, ada atau tidak ada pasangannya di tabel kiri.",
    "detail": "Operasi join SQL yang mengembalikan semua baris dari tabel kanan dan baris yang cocok dari tabel kiri."
  },
  {
    "term": "FULL OUTER JOIN",
    "category": "Basis Data & SQL",
    "icon": "👐",
    "babyAnalogy": "Pesta akbar reuni: semua data dari tabel kiri dan tabel kanan ditampilkan semuanya tanpa ada yang ditinggalkan, walau tidak punya pasangan.",
    "detail": "Operasi join SQL yang menggabungkan hasil LEFT JOIN dan RIGHT JOIN, mengembalikan semua baris dari kedua tabel dengan nilai NULL pada sisi yang tidak cocok."
  },
  {
    "term": "CROSS JOIN (Cartesian Product)",
    "category": "Basis Data & SQL",
    "icon": "✖️",
    "babyAnalogy": "Perkalian silang: jika ada 3 pilihan baju dan 4 pilihan celana, komputer akan memasangkan setiap baju dengan setiap celana (menghasilkan 12 pasang).",
    "detail": "Operasi penggabungan SQL yang menghasilkan produk Kartesius, mencocokkan setiap baris dari tabel pertama dengan setiap baris dari tabel kedua."
  },
  {
    "term": "Self Join",
    "category": "Basis Data & SQL",
    "icon": "🪞",
    "babyAnalogy": "Bercermin ke diri sendiri: tabel Karyawan digabungkan dengan tabel Karyawan itu sendiri untuk mencari tahu siapa nama bos manajernya.",
    "detail": "Operasi penggabungan tabel dengan dirinya sendiri menggunakan alias tabel yang berbeda untuk menganalisis hubungan hierarkis dalam satu entitas."
  },
  {
    "term": "Subquery (Nested Query)",
    "category": "Basis Data & SQL",
    "icon": "🪆",
    "babyAnalogy": "Boneka Matryoshka; kueri pencarian di dalam kueri pencarian: 'Carikan murid yang nilainya lebih tinggi daripada rata-rata nilai seluruh sekolah!'.",
    "detail": "Kueri SQL yang disematkan di dalam klausa pernyataan SQL lain (seperti SELECT, INSERT, UPDATE, atau DELETE) untuk menyediakan data antara."
  },
  {
    "term": "Correlated Subquery",
    "category": "Basis Data & SQL",
    "icon": "🔄",
    "babyAnalogy": "Kueri bersarang yang saling menatap mata: kueri bagian dalam terus membaca dan bergantung pada baris yang sedang diperiksa oleh kueri bagian luar.",
    "detail": "Subquery yang dieksekusi berulang kali untuk setiap baris yang diproses oleh kueri luar karena merujuk ke kolom dari kueri induk."
  },
  {
    "term": "View",
    "category": "Basis Data & SQL",
    "icon": "👓",
    "babyAnalogy": "Kacamata jendela pintar; tabel bohongan yang terlihat seperti tabel asli tapi sebenarnya hanyalah kueri tersimpan yang selalu segar.",
    "detail": "Tabel virtual dalam basis data yang didasarkan pada kumpulan hasil pernyataan SQL, tidak menyimpan data fisik sendiri kecuali materialized view."
  },
  {
    "term": "Index (Clustered & Non-Clustered)",
    "category": "Basis Data & SQL",
    "icon": "📑",
    "babyAnalogy": "Indeks halaman di bagian belakang buku tebal: daripada membalik 1000 halaman satu per satu, cukup lihat indeks dan langsung lompat ke halaman 42.",
    "detail": "Struktur data pembantu (biasanya B-Tree) yang dibuat pada kolom tabel untuk mempercepat operasi pencarian dan pengambilan data."
  },
  {
    "term": "B-Tree Index",
    "category": "Basis Data & SQL",
    "icon": "🌲",
    "babyAnalogy": "Pohon bercabang rapi yang membagi angka menjadi kiri (lebih kecil) dan kanan (lebih besar) sehingga data bisa ditemukan hanya dalam 3-4 kali lompatan.",
    "detail": "Struktur data pohon pencarian seimbang multi-cabang yang digunakan oleh sebagian besar mesin DBMS untuk mengorganisasi dan mengindeks data."
  },
  {
    "term": "Transaction (ACID)",
    "category": "Basis Data & SQL",
    "icon": "💼",
    "babyAnalogy": "Transfer uang bank: uangmu berkurang Rp100.000 DAN uang temanmu bertambah Rp100.000 harus berhasil KEDUANYA; jika gagal di tengah jalan, uangmu otomatis kembali.",
    "detail": "Unit kerja logis tunggal yang terdiri dari satu atau beberapa operasi basis data yang harus berhasil seluruhnya atau dibatalkan seutuhnya."
  },
  {
    "term": "Atomicity (A in ACID)",
    "category": "Basis Data & SQL",
    "icon": "⚛️",
    "babyAnalogy": "Prinsip 'Semua atau Tidak Sama Sekali': tidak boleh ada transaksi yang berhasil setengah-setengah seperti memotong kue lalu kuenya hilang di udara.",
    "detail": "Karakteristik transaksi yang menjamin bahwa seluruh operasi dalam transaksi dieksekusi hingga tuntas, atau dibatalkan sepenuhnya jika terjadi kegagalan."
  },
  {
    "term": "Consistency (C in ACID)",
    "category": "Basis Data & SQL",
    "icon": "📏",
    "babyAnalogy": "Prinsip taat aturan: transaksi tidak boleh melanggar aturan saldo minus atau kunci unik yang sudah ditetapkan di sekolah database.",
    "detail": "Karakteristik transaksi yang menjamin bahwa basis data bertransisi dari satu status valid ke status valid lainnya sesuai seluruh batasan skema."
  },
  {
    "term": "Isolation (I in ACID)",
    "category": "Basis Data & SQL",
    "icon": "🚪",
    "babyAnalogy": "Kamar isolasi kedap suara: dua orang yang sedang bertransaksi bersamaan tidak boleh saling mengintip atau saling mengacaukan isi keranjang belanja.",
    "detail": "Karakteristik transaksi yang menentukan bagaimana visibilitas perubahan data yang sedang berlangsung dipisahkan dari transaksi konkuren lainnya."
  },
  {
    "term": "Durability (D in ACID)",
    "category": "Basis Data & SQL",
    "icon": "💎",
    "babyAnalogy": "Prinsip batu abadi: begitu transaksi berhasil dan struk keluar, datanya tersimpan paten di piringan disk walau sedetik kemudian listrik padam.",
    "detail": "Karakteristik transaksi yang menjamin bahwa hasil transaksi yang telah dikomit (commit) akan bertahan permanen bahkan jika sistem crash."
  },
  {
    "term": "COMMIT Statement",
    "category": "Basis Data & SQL",
    "icon": "✅",
    "babyAnalogy": "Menekan tombol stempel 'Sah dan Simpan Permanen!' pada seluruh perubahan transaksi yang baru saja kamu lakukan.",
    "detail": "Perintah kontrol transaksi (TCL) yang secara permanen menyimpan seluruh perubahan yang dibuat selama transaksi aktif ke basis data."
  },
  {
    "term": "ROLLBACK Statement",
    "category": "Basis Data & SQL",
    "icon": "⏪",
    "babyAnalogy": "Menekan tombol 'Batalkan Semuanya!' dan memutar kembali waktu ke kondisi awal sebelum transaksi dimulai karena terjadi galat.",
    "detail": "Perintah TCL yang membatalkan seluruh operasi modifikasi yang dilakukan sejak awal transaksi aktif atau sejak SAVEPOINT terakhir."
  },
  {
    "term": "SAVEPOINT Statement",
    "category": "Basis Data & SQL",
    "icon": "🚩",
    "babyAnalogy": "Titik checkpoint di dalam game: jika kamu salah jalan di babak berikutnya, kamu bisa kembali ke checkpoint ini tanpa perlu mengulang game dari awal.",
    "detail": "Perintah TCL yang menetapkan titik pemulihan perantara dalam transaksi sehingga sebagian operasi dapat di-rollback tanpa membatalkan seluruh transaksi."
  },
  {
    "term": "Normalization (1NF, 2NF, 3NF, BCNF)",
    "category": "Basis Data & SQL",
    "icon": "🧼",
    "babyAnalogy": "Mandi bersih merapikan kamar: memecah lemari pakaian yang campur aduk menjadi laci-laci khusus terpisah agar tidak ada baju kembar yang mubazir.",
    "detail": "Proses desain basis data relasional untuk mengorganisasi tabel guna mengurangi redundansi data dan meningkatkan integritas data."
  },
  {
    "term": "First Normal Form (1NF)",
    "category": "Basis Data & SQL",
    "icon": "1️⃣",
    "babyAnalogy": "Aturan 1: Setiap kotak hanya boleh berisi 1 barang saja (bersifat atomik), tidak boleh ada kotak berisi 'Merah, Biru, Hijau' sekaligus.",
    "detail": "Bentuk normal pertama yang mensyaratkan setiap kolom hanya berisi nilai bernilai atomik (tunggal) dan tidak ada grup kolom yang berulang."
  },
  {
    "term": "Second Normal Form (2NF)",
    "category": "Basis Data & SQL",
    "icon": "2️⃣",
    "babyAnalogy": "Aturan 2: Sudah 1NF, dan semua barang di lemari harus bergantung sepenuhnya pada KTP Utama, bukan cuma bergantung pada separuh kunci.",
    "detail": "Bentuk normal kedua yang memenuhi 1NF dan memastikan tidak ada ketergantungan fungsional parsial terhadap kunci primer komposit."
  },
  {
    "term": "Third Normal Form (3NF)",
    "category": "Basis Data & SQL",
    "icon": "3️⃣",
    "babyAnalogy": "Aturan 3: Sudah 2NF, dan tidak boleh ada rantai gosip titip-menitip (ketergantungan transitif): kolom A menentukan B, lalu B menentukan C.",
    "detail": "Bentuk normal ketiga yang memenuhi 2NF dan menghilangkan ketergantungan transitif antar atribut non-kunci."
  },
  {
    "term": "Denormalization",
    "category": "Basis Data & SQL",
    "icon": "⚡",
    "babyAnalogy": "Sengaja menaruh kembali barang di ruang tamu agar tidak perlu bolak-balik ke gudang, demi kecepatan kilat membaca data laporan penjualan.",
    "detail": "Strategi optimasi basis data yang sengaja menambahkan redundansi ke dalam skema ternormalisasi untuk meningkatkan performa kueri baca."
  },
  {
    "term": "Stored Procedure",
    "category": "Basis Data & SQL",
    "icon": "📜",
    "babyAnalogy": "Tombol resep otomatis di blender: sekali tekan tombol 'Buat Jus', blender otomatis mengupas buah, memutar pisau, dan menuang ke gelas.",
    "detail": "Kumpulan pernyataan SQL yang telah dikompilasi sebelumnya dan disimpan di server basis data untuk dieksekusi berulang kali."
  },
  {
    "term": "Trigger (Database Trigger)",
    "category": "Basis Data & SQL",
    "icon": "⚡",
    "babyAnalogy": "Jebakan pintu otomatis: begitu ada orang membuka pintu laci (INSERT/UPDATE/DELETE), alarm lonceng otomatis berbunyi mencatat log di buku satpam.",
    "detail": "Program khusus yang secara otomatis dijalankan oleh DBMS saat terjadi peristiwa modifikasi data tertentu (INSERT, UPDATE, DELETE) pada tabel."
  },
  {
    "term": "Database Cursor",
    "category": "Basis Data & SQL",
    "icon": "👉",
    "babyAnalogy": "Jari telunjuk pembaca yang menunjuk baris dokumen satu per satu dari atas ke bawah untuk diperiksa secara teliti satu demi satu.",
    "detail": "Objek pengendali dalam bahasa pemrograman basis data yang memungkinkan navigasi dan pemrosesan baris rekaman hasil kueri satu per satu."
  },
  {
    "term": "Data Types: INT, VARCHAR, TEXT, DATE",
    "category": "Basis Data & SQL",
    "icon": "🏷️",
    "babyAnalogy": "Jenis wadah barang: INT untuk angka bulat, VARCHAR untuk teks fleksibel, TEXT untuk cerita panjang, DATE untuk tanggal kalender.",
    "detail": "Klasifikasi atribut yang menentukan jenis data yang dapat disimpan dalam kolom tabel (bilangan bulat, karakter variabel, string panjang, tanggal)."
  },
  {
    "term": "NULL in SQL",
    "category": "Basis Data & SQL",
    "icon": "❓",
    "babyAnalogy": "Bukan angka nol, bukan spasi kosong; melainkan tanda tanya besar 'Tidak Tahu / Belum Diisi / Tidak Ada Informasi'.",
    "detail": "Penanda khusus dalam SQL yang menunjukkan ketiadaan nilai data atau nilai yang tidak diketahui (unknown value)."
  },
  {
    "term": "IS NULL / IS NOT NULL",
    "category": "Basis Data & SQL",
    "icon": "🔍",
    "babyAnalogy": "Mantra pendeteksi: mencari formulir yang kotaknya masih kosong melompong belum diisi oleh calon murid.",
    "detail": "Operator perbandingan khusus SQL untuk menguji apakah nilai dalam sebuah kolom bernilai NULL atau memiliki nilai terdefinisi."
  },
  {
    "term": "LIKE Operator & Wildcards (% and _)",
    "category": "Basis Data & SQL",
    "icon": "🃏",
    "babyAnalogy": "Kartu joker pencari kata: 'A%' mencari nama berawalan huruf A, sedangkan 'B_di' mencari nama 4 huruf yang huruf keduanya bebas apa saja.",
    "detail": "Operator pencocokan pola teks dalam SQL: tanda persen (%) mencocokkan nol atau banyak karakter, tanda garis bawah (_) mencocokkan tepat satu karakter."
  },
  {
    "term": "IN Operator",
    "category": "Basis Data & SQL",
    "icon": "🧺",
    "babyAnalogy": "Keranjang belanja pilihan: 'Ambilkan barang yang warnanya ada DI DALAM keranjang ('Merah', 'Kuning', 'Hijau')!'.",
    "detail": "Operator SQL yang memungkinkan penentuan beberapa nilai dalam klausa WHERE, bertindak sebagai singkatan dari beberapa kondisi OR."
  },
  {
    "term": "BETWEEN Operator",
    "category": "Basis Data & SQL",
    "icon": "↔️",
    "babyAnalogy": "Rentang jembatan: 'Tolong carikan harga barang ANTARA Rp10.000 SAMPAI Rp50.000!'.",
    "detail": "Operator SQL untuk menyaring hasil kueri dalam rentang inklusif tertentu (termasuk nilai batas bawah dan batas atas)."
  },
  {
    "term": "UNION vs UNION ALL",
    "category": "Basis Data & SQL",
    "icon": "🥞",
    "babyAnalogy": "Menumpuk dua tumpukan piring jadi satu: UNION membuang piring yang dobel kembar; UNION ALL menumpuk semuanya dengan cepat tanpa peduli duplikat.",
    "detail": "Operator himpunan SQL yang menggabungkan hasil dari dua pernyataan SELECT: UNION menghapus rekaman duplikat, sedangkan UNION ALL mempertahankan semua rekaman."
  },
  {
    "term": "INTERSECT & EXCEPT / MINUS",
    "category": "Basis Data & SQL",
    "icon": "✂️",
    "babyAnalogy": "INTERSECT mencari orang yang hadir di kedua rapat; EXCEPT mencari orang yang hadir di rapat A tapi bolos tidak hadir di rapat B.",
    "detail": "Operator himpunan: INTERSECT mengembalikan irisan baris yang ada di kedua kueri; EXCEPT/MINUS mengembalikan baris kueri pertama yang tidak ada di kueri kedua."
  },
  {
    "term": "CASE WHEN Statement",
    "category": "Basis Data & SQL",
    "icon": "🔀",
    "babyAnalogy": "Lampu rambu jika-maka: JIKA nilai >= 85 MAKA dapat 'A', JIKA >= 70 MAKA 'B', SELAIN ITU dapat 'C'.",
    "detail": "Pernyataan kondisional dalam SQL yang mengevaluasi daftar kondisi predikat dan mengembalikan nilai hasil alternatif pertama yang terpenuhi."
  },
  {
    "term": "COALESCE Function",
    "category": "Basis Data & SQL",
    "icon": "🛡️",
    "babyAnalogy": "Rencana cadangan berantai: ambil nomor HP; jika HP kosong ambil telepon rumah; jika telepon rumah kosong, pakai nomor kantor.",
    "detail": "Fungsi bawaan SQL yang mengembalikan nilai non-NULL pertama dari daftar argumen yang diberikan."
  },
  {
    "term": "IFNULL / NVL Function",
    "category": "Basis Data & SQL",
    "icon": "🩹",
    "babyAnalogy": "Plester penutup: jika kolom ini kosong (NULL), tolong ganti tampilannya dengan tulisan 'Tidak Ada' atau angka 0.",
    "detail": "Fungsi penanganan NULL dua argumen (IFNULL di MySQL, NVL di Oracle, ISNULL di SQL Server) yang mengganti nilai NULL dengan nilai default alternatif."
  },
  {
    "term": "Database Sharding",
    "category": "Basis Data & SQL",
    "icon": "🍕",
    "babyAnalogy": "Memotong pizza raksasa dan menaruhnya di 10 piring berbeda di 10 meja komputer agar tidak ada satu komputer yang jebol kekenyangan.",
    "detail": "Arsitektur partisi horisontal basis data di mana baris-baris data dari satu tabel dipisahkan ke beberapa instansi server basis data fisik yang berbeda."
  },
  {
    "term": "Replication (Master-Slave / Primary-Replica)",
    "category": "Basis Data & SQL",
    "icon": "👥",
    "babyAnalogy": "Satu bos juru tulis utama yang melayani pesanan baru (tulis), dan tiga asisten fotokopi yang membantu membacakan data ke ribuan pelanggan (baca).",
    "detail": "Proses menyalin data secara otomatis dari server basis data utama (Primary) ke satu atau beberapa server sekunder (Replica) untuk ketersediaan tinggi."
  },
  {
    "term": "NoSQL Database (MongoDB, Redis, Cassandra)",
    "category": "Basis Data & SQL",
    "icon": "📦",
    "babyAnalogy": "Gudang fleksibel tanpa kotak sekat kaku; kamu bebas melempar kardus dokumen JSON, tumpukan kamus kata kunci, atau grafik jejaring sosial.",
    "detail": "Mekanisme basis data non-relasional yang dirancang untuk model data tertentu (dokumen, key-value, kolom lebar, graf) dengan skema dinamis dan skalabilitas horizontal."
  },
  {
    "term": "MongoDB (Document Store)",
    "category": "Basis Data & SQL",
    "icon": "📄",
    "babyAnalogy": "Menyimpan data dalam lembaran format dokumen JSON bertingkat seperti buku resep modern tanpa perlu tabel kotak-kotak kaku.",
    "detail": "Sistem basis data NoSQL berorientasi dokumen terkemuka yang menyimpan data dalam format dokumen mirip JSON fleksibel (BSON)."
  },
  {
    "term": "Redis (In-Memory Key-Value Store)",
    "category": "Basis Data & SQL",
    "icon": "⚡",
    "babyAnalogy": "Meja tulis super kilat yang menyimpan semua data langsung di dalam RAM; membaca data secepat kedipan mata untuk papan skor game dan token login.",
    "detail": "Penyimpanan struktur data dalam memori (in-memory) sumber terbuka yang digunakan sebagai basis data, cache, dan perantara pesan berlatensi sub-milidetik."
  },
  {
    "term": "Graph Database (Neo4j)",
    "category": "Basis Data & SQL",
    "icon": "🕸️",
    "babyAnalogy": "Jejaring laba-laba pertemanan Facebook: fokus utamanya bukan pada tabelnya, tapi pada garis tali hubungan pertemanan 'siapa berteman dengan siapa'.",
    "detail": "Basis data NoSQL yang menggunakan struktur graf dengan simpul (nodes), sisi hubungan (edges), dan properti untuk merepresentasikan dan menanyakan data berelasi kompleks."
  },
  {
    "term": "Time-Series Database (InfluxDB)",
    "category": "Basis Data & SQL",
    "icon": "📈",
    "babyAnalogy": "Buku grafik suhu cuaca yang mencatat angka demi angka berurutan setiap detik untuk memantau detak jantung server dan sensor IoT.",
    "detail": "Sistem basis data yang dioptimalkan khusus untuk menangani data berstempel waktu (time-stamped data) seperti telemetri, metrik server, dan IoT."
  },
  {
    "term": "Data Warehouse",
    "category": "Basis Data & SQL",
    "icon": "🏛️",
    "babyAnalogy": "Museum arsip agung tempat mengumpulkan seluruh data penjualan 10 tahun terakhir dari semua cabang toko untuk dianalisis oleh para direktur perusahaan.",
    "detail": "Sistem repositori data terpusat skala besar yang mengumpulkan data terintegrasi dari berbagai sumber heterogen untuk pelaporan analitik bisnis (OLAP)."
  },
  {
    "term": "OLTP vs OLAP",
    "category": "Basis Data & SQL",
    "icon": "🏪",
    "babyAnalogy": "OLTP = kasir minimarket yang melayani ribuan transaksi kecil detik ini; OLAP = analis di kantor pusat yang menghitung tren untung-rugi tahunan.",
    "detail": "OLTP (Online Transaction Processing) fokus pada transaksi operasional kilat; OLAP (Online Analytical Processing) fokus pada kueri analitik agregasi kompleks data historis."
  },
  {
    "term": "ETL (Extract, Transform, Load)",
    "category": "Basis Data & SQL",
    "icon": "🏭",
    "babyAnalogy": "Pabrik pengolah jus: memetik buah dari kebun (Extract), mencuci dan memeras sari buahnya (Transform), lalu mengemasnya ke dalam botol botol toko (Load).",
    "detail": "Proses integrasi data tiga langkah yang mengekstrak data dari sumber mentah, mentransformasikannya ke format standar bersih, dan memuatnya ke gudang data tujuan."
  },
  {
    "term": "Execution Plan (EXPLAIN)",
    "category": "Basis Data & SQL",
    "icon": "🗺️",
    "babyAnalogy": "Peta rencana koki sebelum memasak: melihat apakah koki database akan mengambil jalan pintas lewat jalan tol indeks atau capek membalik seluruh tabel.",
    "detail": "Representasi urutan langkah operasi fisik yang disiapkan oleh pengoptimal kueri DBMS untuk mengeksekusi kueri SQL secara paling efisien."
  },
  {
    "term": "Full Table Scan",
    "category": "Basis Data & SQL",
    "icon": "🐢",
    "babyAnalogy": "Membaca buku kamus dari halaman 1 sampai halaman 1000 tanpa melihat indeks; sangat lambat dan membuat komputer ngos-ngosan.",
    "detail": "Operasi pemindaian di mana mesin basis data membaca setiap baris dalam tabel secara berurutan karena tidak tersedianya indeks yang relevan."
  },
  {
    "term": "SQL Injection (SQLi)",
    "category": "Basis Data & SQL",
    "icon": "💉",
    "babyAnalogy": "Suntikan mantra jahat hacker di kolom nama (seperti ' OR '1'='1) yang membohongi database agar membocorkan seluruh data rahasia pengguna.",
    "detail": "Teknik serangan injeksi kode di mana penyerang mengeksekusi pernyataan SQL berbahaya melalui kolom input yang tidak divalidasi ke basis data."
  },
  {
    "term": "Parameterized Query (Prepared Statements)",
    "category": "Basis Data & SQL",
    "icon": "🛡️",
    "babyAnalogy": "Kaca pelindung anti-suntikan hacker: memperlakukan apa pun yang diketik pengguna murni sebagai teks tulisan biasa, bukan sebagai mantra perintah SQL.",
    "detail": "Fitur eksekusi kueri yang memisahkan kode SQL dari parameter data pengguna untuk mencegah kerentanan keamanan injeksi SQL secara mutlak."
  },
  {
    "term": "Connection Pool",
    "category": "Basis Data & SQL",
    "icon": "🏊",
    "babyAnalogy": "Kolam renang berisi selang kabel yang sudah tersambung siap pakai; aplikasi tinggal mengambil satu selang tanpa perlu membuat sambungan baru dari nol.",
    "detail": "Kumpulan koneksi basis data siap pakai yang dipertahankan dalam memori agar dapat digunakan kembali oleh banyak permintaan klien secara efisien."
  },
  {
    "term": "ORM (Object-Relational Mapping)",
    "category": "Basis Data & SQL",
    "icon": "🪄",
    "babyAnalogy": "Juru sulap penerjemah: membuat programmer bisa berbicara dengan tabel database menggunakan bahasa pemrograman biasa (seperti Python atau Java) tanpa menulis SQL mentah.",
    "detail": "Teknik pemrograman perangkat lunak yang memetakan struktur tabel basis data relasional ke model kelas objek dalam bahasa pemrograman berorientasi objek."
  },
  {
    "term": "Database Migration",
    "category": "Basis Data & SQL",
    "icon": "🏗️",
    "babyAnalogy": "Gambar cetak biru arsitek berversi (V1, V2, V3) untuk membangun atau mengubah struktur kolom tabel database secara teratur dan bisa dilacak tim.",
    "detail": "Manajemen pembaruan skema basis data terkontrol versi yang memungkinkan evolusi struktur tabel dan transformasi data secara otomatis."
  },
  {
    "term": "Database Seeding",
    "category": "Basis Data & SQL",
    "icon": "🌱",
    "babyAnalogy": "Menabur bibit data contoh awal: mengisi tabel baru dengan data palsu yang realistis agar aplikasi bisa langsung diuji coba dengan seru.",
    "detail": "Proses pengisian awal basis data dengan data tiruan (mock data) atau data master standar untuk keperluan pengujian dan pengembangan."
  },
  {
    "term": "Foreign Key Constraints (CASCADE, SET NULL, RESTRICT)",
    "category": "Basis Data & SQL",
    "icon": "👨‍👦",
    "babyAnalogy": "Aturan jika data ayah dihapus: CASCADE = data anak ikut terhapus otomatis; SET NULL = data anak jadi tanpa ayah; RESTRICT = dilarang menghapus ayah selama anak masih ada.",
    "detail": "Aturan aksi referensial yang menentukan perilaku sistem saat baris induk yang dirujuk diperbarui atau dihapus dalam relasi foreign key."
  },
  {
    "term": "Window Functions (ROW_NUMBER, RANK, DENSE_RANK)",
    "category": "Basis Data & SQL",
    "icon": "🪟",
    "babyAnalogy": "Membagikan nomor ranking juara kelas tanpa perlu menggabungkan atau menghilangkan baris data murid lainnya.",
    "detail": "Fungsi SQL tingkat lanjut yang melakukan kalkulasi pada sekumpulan baris tabel yang terkait dengan baris saat ini (menggunakan klausa OVER dan PARTITION BY)."
  },
  {
    "term": "CTE (Common Table Expression - WITH clause)",
    "category": "Basis Data & SQL",
    "icon": "📝",
    "babyAnalogy": "Catatan coret-coretan sementara di kertas kecil menggunakan kata 'WITH'; membuat kueri SQL rumit panjang menjadi sangat rapi dan mudah dibaca.",
    "detail": "Kumpulan hasil kueri sementara bernama yang didefinisikan dalam cakupan eksekusi satu pernyataan SELECT, INSERT, UPDATE, atau DELETE."
  },
  {
    "term": "Window Frame (ROWS BETWEEN)",
    "category": "Basis Data & SQL",
    "icon": "🪟",
    "babyAnalogy": "Kaca pembesar geser: menghitung rata-rata bergerak dari 3 baris sebelum ini sampai baris saat ini saat menganalisis tren penjualan harian.",
    "detail": "Klausa pembatas dalam fungsi window SQL yang menentukan subset baris fisik di dalam partisi saat ini untuk dievaluasi oleh fungsi agregat."
  },
  {
    "term": "JSON Data Type in SQL",
    "category": "Basis Data & SQL",
    "icon": "📄",
    "babyAnalogy": "Menyimpan dokumen fleksibel di dalam satu kolom tabel: bisa menyimpan setelan custom pengguna tanpa perlu menambah kolom baru setiap minggu.",
    "detail": "Tipe data bawaan pada RDBMS modern (PostgreSQL/MySQL) yang memungkinkan penyimpanan, validasi, dan pengindeksan dokumen JSON secara terstruktur."
  },
  {
    "term": "Materialized View",
    "category": "Basis Data & SQL",
    "icon": "🧊",
    "babyAnalogy": "Membekukan hasil masakan kueri rumit ke dalam piring fisik di disk agar saat dipesan lagi bisa langsung disajikan dalam 1 milidetik tanpa memasak ulang.",
    "detail": "Objek basis data yang menyimpan hasil kueri secara fisik di disk seperti tabel nyata dan disegarkan secara berkala untuk kueri analitik berat."
  },
  {
    "term": "Database Partitioning (Range, List, Hash)",
    "category": "Basis Data & SQL",
    "icon": "🗄️",
    "babyAnalogy": "Membagi satu lemari arsip raksasa menjadi laci tahun 2024, laci tahun 2025, dan laci tahun 2026 agar pencarian dokumen tidak memakan waktu lama.",
    "detail": "Teknik membagi tabel besar menjadi bagian-bagian lebih kecil yang dapat dikelola secara independen berdasarkan rentang nilai kolom tertentu."
  },
  {
    "term": "Point-in-Time Recovery (PITR)",
    "category": "Basis Data & SQL",
    "icon": "⏳",
    "babyAnalogy": "Mesin waktu presisi detik: bisa memundurkan seluruh isi database ke detik 11:59:58 tepat sebelum seseorang tidak sengaja menjatuhkan tabel penting.",
    "detail": "Fitur pemulihan bencana basis data yang memungkinkan pemulihan status data ke titik waktu tertentu di masa lalu menggunakan log transaksi."
  },
  {
    "term": "Write-Ahead Logging (WAL)",
    "category": "Basis Data & SQL",
    "icon": "📓",
    "babyAnalogy": "Menuliskan janji di buku harian dulu sebelum memindahkan barang: jika tiba-tiba mati lampu di tengah jalan, database tahu persis janji mana yang belum selesai.",
    "detail": "Teknik standar keandalan DBMS di mana perubahan data dicatat terlebih dahulu dalam log terurut sebelum ditulis secara permanen ke file data disk."
  },
  {
    "term": "Query Optimizer (Cost-Based Optimizer)",
    "category": "Basis Data & SQL",
    "icon": "🧠",
    "babyAnalogy": "Asisten ahli navigasi di dalam database yang menghitung 10 rute berbeda dan memilih rute yang paling sedikit memakan waktu dan tenaga komputasi.",
    "detail": "Komponen internal RDBMS yang mengevaluasi berbagai kemungkinan rencana eksekusi untuk kueri SQL dan memilih rencana dengan perkiraan biaya I/O terendah."
  },
  {
    "term": "Optimistic vs Pessimistic Locking",
    "category": "Basis Data & SQL",
    "icon": "🔒",
    "babyAnalogy": "Pessimistic mengunci lemari rapat-rapat saat disentuh; Optimistic membiarkan orang lain mengedit tapi mengecek nomor versi stempel saat disimpan.",
    "detail": "Dua strategi konkurensi: Pessimistic mengunci baris data di awal transaksi; Optimistic memeriksa tabrakan versi data hanya pada saat commit transaksi."
  },
  {
    "term": "Database Benchmarking (TPC-C, sysbench)",
    "category": "Basis Data & SQL",
    "icon": "🏎️",
    "babyAnalogy": "Uji balapan ketahanan mesin: membombardir database dengan simulasi 10.000 transaksi kasir toko per detik untuk mengukur kekuatan maksimal server.",
    "detail": "Praktik menguji performa, throughput transaksi per detik (TPS), dan latensi sistem manajemen basis data di bawah beban kerja terstandarisasi."
  },
  {
    "term": "Relational Integrity Rules (Entity, Referential, Domain)",
    "category": "Basis Data & SQL",
    "icon": "🏛️",
    "babyAnalogy": "Tiga hukum pilar keabadian database: setiap baris punya KTP unik (Entity), hubungan antar tabel selalu sah (Referential), dan jenis datanya sesuai aturan (Domain).",
    "detail": "Kumpulan aturan integritas formal dalam teori relasional Codd yang memastikan konsistensi, keandalan, dan keabsahan logis data dalam RDBMS."
  },
  {
    "term": "Algorithm (Algoritma)",
    "category": "Pemrograman & Software",
    "icon": "📋",
    "babyAnalogy": "Resep langkah demi langkah membuat kue bolu: dari mengocok telur sampai memanggang oven; jika langkahnya tepat, kuenya pasti enak mengembang.",
    "detail": "Urutan langkah logis dan matematis yang terdefinisi dengan baik untuk menyelesaikan masalah komputasi tertentu dalam waktu berhingga."
  },
  {
    "term": "Data Structure (Struktur Data)",
    "category": "Pemrograman & Software",
    "icon": "📦",
    "babyAnalogy": "Cara menata barang di kamar: pakaian ditumpuk di laci, sepatu dijejer di rak, dan baju pesta digantung rapi agar mudah diambil.",
    "detail": "Format terorganisir untuk mengatur, menyimpan, dan mengelola data dalam komputer sehingga dapat diakses dan dimodifikasi secara efisien."
  },
  {
    "term": "Variable",
    "category": "Pemrograman & Software",
    "icon": "🏷️",
    "babyAnalogy": "Kotak kardus berlabel nama: kamu bisa menaruh angka 10 di dalamnya hari ini, lalu besok menggantinya dengan angka 25.",
    "detail": "Lokasi penyimpanan bernama dalam memori komputer yang menampung nilai data yang nilainya dapat berubah selama eksekusi program."
  },
  {
    "term": "Constant (Konstanta)",
    "category": "Pemrograman & Software",
    "icon": "🗿",
    "babyAnalogy": "Kotak kaca terkunci paten; nilainya sudah diukir sejak awal (seperti nilai Pi = 3.14) dan tidak boleh diubah oleh siapa pun.",
    "detail": "Pengenal bernama yang mengikat suatu nilai yang tidak dapat diubah (immutable) oleh program selama waktu proses berjalan."
  },
  {
    "term": "Data Types: Primitive vs Composite",
    "category": "Pemrograman & Software",
    "icon": "🧱",
    "babyAnalogy": "Primitive seperti satu butir bata merah (angka, huruf); Composite seperti rumah utuh yang tersusun dari ratusan bata (array, objek).",
    "detail": "Klasifikasi nilai data: tipe primitif menyimpan nilai tunggal dasar (int, float, bool, char); tipe komposit menggabungkan beberapa nilai (array, struct, class)."
  },
  {
    "term": "Array",
    "category": "Pemrograman & Software",
    "icon": "🍱",
    "babyAnalogy": "Kotak bekal makan bersekat berjejer dengan nomor kamar 0, 1, 2, 3: semua sekat berisi makanan dengan ukuran dan jenis yang sama.",
    "detail": "Struktur data linier kumpulan elemen berurutan bertipe data sama yang disimpan pada lokasi memori bersebelahan (contiguous)."
  },
  {
    "term": "Linked List",
    "category": "Pemrograman & Software",
    "icon": "🚂",
    "babyAnalogy": "Gerbong-gerbong kereta api: setiap gerbong punya kaitan rantai penunjuk yang memegang erat tangan gerbong di belakangnya.",
    "detail": "Struktur data linier di mana setiap simpul (node) menyimpan data dan sebuah pointer penunjuk referensi ke simpul berikutnya dalam rantai."
  },
  {
    "term": "Stack (LIFO)",
    "category": "Pemrograman & Software",
    "icon": "🥞",
    "babyAnalogy": "Tumpukan pancake di piring: pancake yang paling terakhir dimasak dan ditaruh di paling atas adalah yang pertama kali akan dimakan (Last-In First-Out).",
    "detail": "Struktur data abstrak linier berbasis prinsip LIFO (Last In, First Out) dengan dua operasi utama: Push (menambah) dan Pop (mengambil)."
  },
  {
    "term": "Queue (FIFO)",
    "category": "Pemrograman & Software",
    "icon": "🎟️",
    "babyAnalogy": "Antrean loket bioskop: penonton yang paling pertama datang dan berdiri di depan loket adalah yang pertama kali dilayani dan pulang (First-In First-Out).",
    "detail": "Struktur data abstrak linier berbasis prinsip FIFO (First In, First Out) dengan dua operasi utama: Enqueue (masuk antrean) dan Dequeue (keluar antrean)."
  },
  {
    "term": "Hash Table / Dictionary",
    "category": "Pemrograman & Software",
    "icon": "🗄️",
    "babyAnalogy": "Lemari loker penitipan sepatu di masjid: kamu diberi nomor kupon khusus (key); serahkan kupon itu, sepatumu (value) langsung ditemukan dalam 1 detik.",
    "detail": "Struktur data pemetaan pasangan kunci-nilai (key-value) yang menggunakan fungsi hash untuk menghitung indeks lokasi penyimpanan secara konstan O(1)."
  },
  {
    "term": "Tree (Binary Tree & BST)",
    "category": "Pemrograman & Software",
    "icon": "🌳",
    "babyAnalogy": "Pohon keluarga terbalik: dari kakek moyang di atas (akar), bercabang ke dua anak di bawah (kiri lebih kecil, kanan lebih besar).",
    "detail": "Struktur data hierarkis non-linier yang terdiri dari simpul akar (root) dan simpul anak terhubung; BST memastikan simpul kiri < induk < simpul kanan."
  },
  {
    "term": "Graph (Nodes & Edges)",
    "category": "Pemrograman & Software",
    "icon": "🕸️",
    "babyAnalogy": "Peta rute penerbangan pesawat: kota-kota adalah titik simpul (nodes), dan jalur terbang antar kota adalah garis penghubungnya (edges).",
    "detail": "Struktur data non-linier yang terdiri dari himpunan simpul (vertices/nodes) dan himpunan garis sisi penghubung (edges) yang dapat berarah atau tak berarah."
  },
  {
    "term": "Big O Notation",
    "category": "Pemrograman & Software",
    "icon": "⏱️",
    "babyAnalogy": "Timbangan pengukur kepintaran algoritma: mengukur apakah program akan tetap melesat cepat seperti roket saat disuruh mengolah 1 juta data.",
    "detail": "Notasi matematika asimtotik yang digunakan untuk mengklasifikasikan algoritma berdasarkan seberapa cepat waktu eksekusi atau kebutuhan ruang memori tumbuh seiring ukuran input."
  },
  {
    "term": "Time Complexity (O(1), O(log n), O(n), O(n²))",
    "category": "Pemrograman & Software",
    "icon": "📈",
    "babyAnalogy": "O(1) secepat kilat konstan; O(n) bertambah sebanding jumlah orang; O(n²) lambat kuadrat seperti menyapa setiap orang dua kali berturut-turut.",
    "detail": "Metrik efisiensi yang mengukur jumlah waktu komputasi yang dibutuhkan algoritma untuk dijalankan sebagai fungsi dari panjang input (n)."
  },
  {
    "term": "Space Complexity",
    "category": "Pemrograman & Software",
    "icon": "🧠",
    "babyAnalogy": "Berapa banyak meja kerja memori RAM ekstra yang dibutuhkan program saat sedang sibuk menyelesaikan tugasnya.",
    "detail": "Jumlah memori kerja sementara yang dibutuhkan algoritma untuk dieksekusi hingga selesai sebagai fungsi dari ukuran input data."
  },
  {
    "term": "Recursion (Fungsi Rekursif)",
    "category": "Pemrograman & Software",
    "icon": "🪆",
    "babyAnalogy": "Fungsi yang memanggil dirinya sendiri di dalam dirinya sendiri sampai menyentuh batas syarat berhenti (base case) seperti cermin di depan cermin.",
    "detail": "Teknik pemrograman di mana sebuah fungsi memanggil dirinya sendiri secara langsung atau tidak langsung untuk menyelesaikan sub-masalah yang lebih kecil."
  },
  {
    "term": "Loop (for, while, do-while)",
    "category": "Pemrograman & Software",
    "icon": "🔁",
    "babyAnalogy": "Pita ban berjalan yang terus berputar mengulang tindakan yang sama sampai lampu penghitung menunjukkan angka selesai.",
    "detail": "Struktur kendali dalam pemrograman yang mengeksekusi blok kode secara berulang-ulang selama kondisi logika tertentu terpenuhi."
  },
  {
    "term": "Conditionals (if-else, switch-case)",
    "category": "Pemrograman & Software",
    "icon": "🔀",
    "babyAnalogy": "Papan rambu perempatan jalan: JIKA lampu hijau maka maju, JIKA merah maka berhenti, SELAIN ITU hati-hati.",
    "detail": "Pernyataan alur kendali yang mengeksekusi cabang blok kode instruksi yang berbeda berdasarkan evaluasi kondisi nilai kebenaran boolean (true/false)."
  },
  {
    "term": "Function / Method",
    "category": "Pemrograman & Software",
    "icon": "📦",
    "babyAnalogy": "Kotak mesin pembuat jus: kamu memasukkan buah jeruk dari atas (input parameter), mesin memerasnya di dalam, dan mengeluarkan segelas jus segar (return value).",
    "detail": "Blok kode mandiri berparameter yang dapat digunakan kembali berkali-kali untuk melakukan tindakan atau kalkulasi komputasi spesifik."
  },
  {
    "term": "Scope (Local vs Global Scope)",
    "category": "Pemrograman & Software",
    "icon": "🏠",
    "babyAnalogy": "Local = mainan di dalam kamar tidur yang hanya boleh disentuh di kamar itu; Global = lampu taman rumah yang bisa dilihat oleh semua orang dari mana saja.",
    "detail": "Wilayah visibilitas dan masa hidup variabel dalam kode program; variabel lokal hanya ada di dalam fungsinya, variabel global dapat diakses di seluruh file."
  },
  {
    "term": "OOP (Object-Oriented Programming)",
    "category": "Pemrograman & Software",
    "icon": "🚗",
    "babyAnalogy": "Membangun program dengan merakit mobil-mobilan sungguhan: ada cetak biru pabrik (Class) dan ada mobil fisik nyata yang bisa melaju (Object).",
    "detail": "Paradigma pemrograman yang berpusat pada konsep 'objek' yang menggabungkan data (atribut) dan kode fungsi (metode) dalam satu kesatuan."
  },
  {
    "term": "Class vs Object",
    "category": "Pemrograman & Software",
    "icon": "📑",
    "babyAnalogy": "Class = cetakan kue dari besi; Object = kue nastar nyata lezat yang keluar dari cetakan tersebut.",
    "detail": "Class adalah cetak biru abstrak definisi atribut dan perilaku; Object adalah instansiasi fisik konkret dari sebuah class dalam memori."
  },
  {
    "term": "Encapsulation",
    "category": "Pemrograman & Software",
    "icon": "💊",
    "babyAnalogy": "Kapsul obat dokter: bubuk racikan kimia berbahaya dibungkus aman di dalam cangkang kapsul agar pasien tidak sembarangan menyentuhnya.",
    "detail": "Prinsip OOP yang membungkus data atribut dan metode dalam satu unit serta membatasi akses langsung dari luar menggunakan pengubah akses (private/public)."
  },
  {
    "term": "Inheritance (Pewarisan)",
    "category": "Pemrograman & Software",
    "icon": "👨‍👦",
    "babyAnalogy": "Anak yang mewarisi mata indah dan keahlian bernyanyi dari ayahnya, tapi si anak juga punya bakat baru bermain gitar sendiri.",
    "detail": "Mekanisme OOP di mana sebuah class turunan (subclass) mewarisi atribut dan metode dari class induk (superclass) serta dapat menambahkan fitur baru."
  },
  {
    "term": "Polymorphism",
    "category": "Pemrograman & Software",
    "icon": "🎭",
    "babyAnalogy": "Satu tombol 'Bicara': jika ditekan pada objek Kucing bersuara 'Meong!', jika ditekan pada objek Bebek bersuara 'Kwek-kwek!'.",
    "detail": "Kemampuan objek untuk mengambil banyak bentuk atau merespons metode panggilan yang sama dengan implementasi perilaku yang berbeda."
  },
  {
    "term": "Abstraction",
    "category": "Pemrograman & Software",
    "icon": "🚗",
    "babyAnalogy": "Cukup tahu pedal gas untuk maju dan setir untuk belok tanpa perlu pusing memikirkan bagaimana cara piston busi menyala di dalam mesin mobil.",
    "detail": "Prinsip menyembunyikan detail implementasi internal yang rumit dan hanya mengekspos antarmuka fungsionalitas esensial kepada pengguna."
  },
  {
    "term": "Interface vs Abstract Class",
    "category": "Pemrograman & Software",
    "icon": "📜",
    "babyAnalogy": "Interface = surat janji suci kosong yang wajib diisi semua perilakunya; Abstract Class = rumah setengah jadi yang sudah ada dinding dasarnya.",
    "detail": "Interface mendefinisikan kontrak metode tanpa implementasi; Abstract class dapat menyediakan implementasi sebagian bersama deklarasi metode abstrak."
  },
  {
    "term": "Functional Programming (FP)",
    "category": "Pemrograman & Software",
    "icon": "🧮",
    "babyAnalogy": "Pemrograman gaya matematika murni: rumus f(x) selalu menghasilkan jawaban yang sama, tidak boleh ada aksi sampingan yang mengacaukan meja kerja lain.",
    "detail": "Paradigma pemrograman deklaratif yang memperlakukan komputasi sebagai evaluasi fungsi matematika murni dan menghindari data termutasi serta efek samping."
  },
  {
    "term": "Pure Function",
    "category": "Pemrograman & Software",
    "icon": "💎",
    "babyAnalogy": "Kalkulator jujur: jika kamu memasukkan 2 + 3 hasilnya PASTI 5 selamanya, tanpa diam-diam mengubah warna lampu kamar atau menyalakan kipas angin.",
    "detail": "Fungsi yang selalu mengembalikan nilai keluaran yang sama untuk argumen masukan yang sama tanpa menghasilkan efek samping pada status sistem."
  },
  {
    "term": "Immutability",
    "category": "Pemrograman & Software",
    "icon": "🧊",
    "babyAnalogy": "Prinsip batu es abadi: begitu dibuat, barang tersebut tidak boleh diubah sedikit pun; jika ingin mengubah, buatlah es batu baru yang baru.",
    "detail": "Konsep di mana status objek tidak dapat dimodifikasi setelah pertama kali dibuat, mengurangi kesalahan konkurensi data."
  },
  {
    "term": "Compiler vs Interpreter",
    "category": "Pemrograman & Software",
    "icon": "📖",
    "babyAnalogy": "Compiler = menerjemahkan seluruh buku bahasa Inggris menjadi buku bahasa Indonesia sekaligus sampai tuntas; Interpreter = juru bisik langsung per kalimat.",
    "detail": "Compiler menerjemahkan seluruh kode sumber menjadi kode mesin biner sebelum eksekusi; Interpreter menerjemahkan dan menjalankan kode sumber baris demi baris."
  },
  {
    "term": "JIT Compiler (Just-In-Time)",
    "category": "Pemrograman & Software",
    "icon": "⚡",
    "babyAnalogy": "Juru bisik cerdas yang sambil membisikkan kalimat, diam-diam mencatat kalimat favorit menjadi stempel instan agar diulang secepat kilat.",
    "detail": "Teknik kompilasi hibrida (seperti pada JVM dan V8) yang mengompilasi bytecode menjadi kode mesin fisik saat program sedang berjalan di waktu nyata."
  },
  {
    "term": "Bytecode (JVM / Python)",
    "category": "Pemrograman & Software",
    "icon": "🎼",
    "babyAnalogy": "Lembaran partitur musik universal: bisa dimainkan di piano mana saja asalkan ada pemain musik (Virtual Machine) yang paham membacanya.",
    "detail": "Bentuk kode instruksi tingkat menengah yang tidak bergantung pada arsitektur perangkat keras fisik tertentu, dieksekusi oleh mesin virtual."
  },
  {
    "term": "Garbage Collection (GC)",
    "category": "Pemrograman & Software",
    "icon": "🧹",
    "babyAnalogy": "Truk sampah otomatis yang diam-diam memunguti dan membuang memori bekas kardus variabel yang sudah tidak dipakai lagi oleh aplikasi.",
    "detail": "Bentuk manajemen memori otomatis di mana pengumpul sampah mereklamasi memori yang dialokasikan untuk objek yang tidak lagi dirujuk oleh program."
  },
  {
    "term": "Memory Leak",
    "category": "Pemrograman & Software",
    "icon": "🚰",
    "babyAnalogy": "Keran air yang terus menetes tanpa ditutup: aplikasi terus meminjam RAM tapi lupa mengembalikannya sampai komputer kehabisan memori dan macet.",
    "detail": "Kondisi kegagalan sistem perangkat lunak di mana memori komputer yang sudah tidak diperlukan lagi gagal dilepaskan kembali ke sistem operasi."
  },
  {
    "term": "Pointer & Reference",
    "category": "Pemrograman & Software",
    "icon": "👉",
    "babyAnalogy": "Secarik kertas bertuliskan nomor kamar hotel: kamu tidak membawa kamar hotelnya di saku, tapi kamu memegang alamat ke mana harus pergi.",
    "detail": "Variabel yang menyimpan alamat memori fisik langsung dari nilai lain (pointer) atau bertindak sebagai alias aman untuk objek (reference)."
  },
  {
    "term": "Null Pointer Exception (NPE)",
    "category": "Pemrograman & Software",
    "icon": "🕳️",
    "babyAnalogy": "Kamu membuka kertas nomor kamar, ternyata nomornya kosong melompong (null), tapi kamu nekat membuka pintunya sehingga terjatuh ke jurang hitam.",
    "detail": "Galat runtime fatal yang terjadi ketika program mencoba mengakses atau memanipulasi referensi objek yang menunjuk ke alamat null (tidak ada)."
  },
  {
    "term": "Exception Handling (try, catch, finally)",
    "category": "Pemrograman & Software",
    "icon": "🪂",
    "babyAnalogy": "Jaring pengaman sirkus: coba lakukan atraksi akrobat berbahaya (try); jika terpeleset jatuh, tangkap di jaring empuk (catch) agar penonton tidak kabur.",
    "detail": "Mekanisme perangkat lunak untuk merespons dan menangani terjadinya situasi abnormal atau kesalahan komputasi selama runtime program."
  },
  {
    "term": "Syntax Error vs Runtime Error vs Logic Error",
    "category": "Pemrograman & Software",
    "icon": "🐛",
    "babyAnalogy": "Syntax = salah eja huruf grammar; Runtime = tersandung batu saat berlari; Logic = program berjalan lancar tapi 2 + 2 hasilnya malah 5.",
    "detail": "Syntax error melanggar tata bahasa kode; Runtime error terjadi saat eksekusi (seperti bagi nol); Logic error menghasilkan keluaran salah walau program sukses berjalan."
  },
  {
    "term": "Debugging",
    "category": "Pemrograman & Software",
    "icon": "🕵️",
    "babyAnalogy": "Menjadi detektif mencari jejak kecoak kutu (bug) di dalam ratusan baris kode untuk mencari tahu kenapa aplikasi mogok.",
    "detail": "Proses mengidentifikasi, mengisolasi, dan memperbaiki galat, cacat, atau anomali dalam kode program perangkat lunak."
  },
  {
    "term": "Version Control (Git)",
    "category": "Pemrograman & Software",
    "icon": "🌳",
    "babyAnalogy": "Mesin waktu pohon sejarah kode: mencatat setiap perubahan kode tim, bisa memutar balik waktu ke masa lalu, dan menggabungkan kerjaan tim tanpa bentrok.",
    "detail": "Sistem terdistribusi pelacak riwayat perubahan pada berkas kode sumber yang memfasilitasi kolaborasi perangkat lunak banyak pengembang."
  },
  {
    "term": "Git Commit",
    "category": "Pemrograman & Software",
    "icon": "📸",
    "babyAnalogy": "Memotret foto kenangan sekejap kondisi kode saat ini lengkap dengan pesan catatan: 'Berhasil membuat tombol login!'.",
    "detail": "Operasi Git yang menyimpan rekam jepret perubahan berkas yang sedang di-stage ke dalam basis data repositori lokal dengan kode hash SHA unik."
  },
  {
    "term": "Git Branch",
    "category": "Pemrograman & Software",
    "icon": "🌿",
    "babyAnalogy": "Membuat cabang dahan pohon terpisah untuk mencoba fitur eksperimen liar tanpa takut merusak batang pohon utama yang sedang dipakai pengguna.",
    "detail": "Jalur pengembangan independen yang dapat menyimpang dari garis utama kode sumber untuk mengerjakan fitur atau perbaikan secara terisolasi."
  },
  {
    "term": "Git Merge vs Git Rebase",
    "category": "Pemrograman & Software",
    "icon": "🔀",
    "babyAnalogy": "Merge = menggabungkan dua dahan dengan membuat simpul tali pertemuan; Rebase = mencabut dahanmu dan menempelkannya di pucuk dahan terbaru agar riwayatnya lurus.",
    "detail": "Merge menggabungkan riwayat dua cabang dengan commit penggabungan baru; Rebase menerapkan ulang commit dari satu cabang di atas ujung cabang lain."
  },
  {
    "term": "Git Pull Request (PR) / Merge Request",
    "category": "Pemrograman & Software",
    "icon": "📬",
    "babyAnalogy": "Mengirim surat ke ketua tim: 'Saya sudah selesai membuat fitur baru di cabang saya, tolong periksa dan izinkan masuk ke cabang utama ya!'.",
    "detail": "Mekanisme kolaborasi di platform Git (seperti GitHub/GitLab) untuk mengusulkan, meninjau, dan mendiskusikan perubahan kode sebelum digabungkan."
  },
  {
    "term": "Git Conflict",
    "category": "Pemrograman & Software",
    "icon": "⚔️",
    "babyAnalogy": "Dua orang programmer mengedit baris kalimat yang sama persis di file yang sama di detik yang sama; Git bingung dan meminta manusia memilih mana yang benar.",
    "detail": "Kondisi di mana sistem kendali versi tidak dapat menggabungkan perubahan secara otomatis karena adanya modifikasi yang saling bertentangan pada baris yang sama."
  },
  {
    "term": "Repository (Repo)",
    "category": "Pemrograman & Software",
    "icon": "🏛️",
    "babyAnalogy": "Brankas gedung perpustakaan tempat menyimpan seluruh berkas proyek kode beserta seluruh buku sejarah perubahannya dari hari pertama.",
    "detail": "Struktur data penyimpanan terpusat atau terdistribusi yang memuat seluruh berkas proyek, metadata, dan riwayat commit sistem kendali versi."
  },
  {
    "term": "CI/CD (Continuous Integration / Continuous Delivery)",
    "category": "Pemrograman & Software",
    "icon": "🤖",
    "babyAnalogy": "Robot pabrik otomatis: setiap kali programmer menaruh kode baru, robot langsung menguji tes, merakit aplikasi, dan menerbangkannya ke server pelanggan.",
    "detail": "Praktik rekayasa perangkat lunak yang mengotomatisasi pengujian, penggabungan, pembuatan build, dan penyebaran rilis kode ke lingkungan produksi."
  },
  {
    "term": "Unit Testing",
    "category": "Pemrograman & Software",
    "icon": "🧪",
    "babyAnalogy": "Menguji satu baut sekrup kecil secara terpisah di laboratorium untuk memastikan sekrupnya kuat sebelum dipasang ke badan mobil balap.",
    "detail": "Tingkat pengujian perangkat lunak di mana unit individual terkecil dari kode sumber (seperti fungsi atau metode) diuji secara terisolasi."
  },
  {
    "term": "Integration Testing",
    "category": "Pemrograman & Software",
    "icon": "🧩",
    "babyAnalogy": "Menguji apakah mesin mobil dan roda gigi bisa berputar serasi saat disatukan, bukan cuma saat diuji sendiri-sendiri.",
    "detail": "Fase pengujian perangkat lunak di mana modul-modul program individual digabungkan dan diuji sebagai kelompok untuk memverifikasi antarmuka interaksinya."
  },
  {
    "term": "End-to-End Testing (E2E)",
    "category": "Pemrograman & Software",
    "icon": "🎬",
    "babyAnalogy": "Menyewa robot berpura-pura jadi pembeli nyata: membuka aplikasi, memasukkan barang ke keranjang, dan menekan bayar untuk memastikan semuanya lancar.",
    "detail": "Metodologi pengujian yang menguji seluruh alur kerja aplikasi dari awal hingga akhir dari perspektif pengguna nyata dalam lingkungan mirip produksi."
  },
  {
    "term": "Test-Driven Development (TDD)",
    "category": "Pemrograman & Software",
    "icon": "🔴",
    "babyAnalogy": "Menulis soal ujian dulu sebelum belajar materi: buat tes yang gagal (Merah), tulis kode secukupnya sampai lulus tes (Hijau), lalu rapikan kodenya (Refactor).",
    "detail": "Praktik pengembangan perangkat lunak di mana pengembang menulis kasus uji otomatis terlebih dahulu sebelum menulis kode fungsional yang diperlukan."
  },
  {
    "term": "Code Refactoring",
    "category": "Pemrograman & Software",
    "icon": "✨",
    "babyAnalogy": "Merapikan susunan kabel dan membersihkan debu di dalam mesin tanpa mengubah fungsi dan kecepatan mesin tersebut sama sekali.",
    "detail": "Proses restrukturisasi kode perangkat lunak internal yang ada tanpa mengubah perilaku eksternalnya untuk meningkatkan keterbacaan dan pemeliharaan."
  },
  {
    "term": "Design Patterns",
    "category": "Pemrograman & Software",
    "icon": "📐",
    "babyAnalogy": "Buku kumpulan resep solusi arsitektur terbaik yang sudah terbukti ampuh menyelesaikan masalah-masalah yang sering dihadapi para master programmer.",
    "detail": "Solusi umum yang dapat digunakan kembali untuk masalah yang sering terjadi dalam desain perangkat lunak dalam konteks tertentu."
  },
  {
    "term": "Singleton Pattern",
    "category": "Pemrograman & Software",
    "icon": "👑",
    "babyAnalogy": "Hanya boleh ada 1 raja di dalam satu kerajaan; tidak boleh ada orang yang membuat tiruan raja kedua (misal: satu objek koneksi database tunggal).",
    "detail": "Pola desain kreasi yang memastikan suatu kelas hanya memiliki tepat satu instansiasi tunggal dalam aplikasi dan menyediakan titik akses global."
  },
  {
    "term": "Factory Pattern",
    "category": "Pemrograman & Software",
    "icon": "🏭",
    "babyAnalogy": "Pabrik pembuat mainan: kamu cukup memesan 'Saya mau mobil-mobilan!' dan pabrik yang pusing merakit jenis bannya tanpa kamu perlu tahu detailnya.",
    "detail": "Pola desain kreasi yang menggunakan metode pabrik untuk membuat objek tanpa harus menentukan kelas konkret pasti dari objek yang akan dibuat."
  },
  {
    "term": "Observer Pattern",
    "category": "Pemrograman & Software",
    "icon": "🔔",
    "babyAnalogy": "Lonceng pemberitahuan YouTube: begitu pembuat video mengunggah video baru, semua pelanggan (subscribers) langsung otomatis mendapat notifikasi.",
    "detail": "Pola desain perilaku di mana suatu objek (subjek) memelihara daftar pengamat yang bergantung padanya dan memberi tahu mereka secara otomatis tentang perubahan status."
  },
  {
    "term": "DRY Principle (Don't Repeat Yourself)",
    "category": "Pemrograman & Software",
    "icon": "🔁",
    "babyAnalogy": "Jangan menulis resep yang sama dua kali; jika ada kode yang dipakai berulang-ulang, bungkuslah ke dalam satu fungsi khusus yang bisa dipanggil kapan saja.",
    "detail": "Prinsip rekayasa perangkat lunak yang bertujuan untuk mengurangi pengulangan pola informasi perangkat lunak dengan mengekstraknya ke fungsi/modul."
  },
  {
    "term": "KISS Principle (Keep It Simple, Stupid)",
    "category": "Pemrograman & Software",
    "icon": "🍬",
    "babyAnalogy": "Buatlah kode yang sesederhana dan seringan mungkin seperti permen manis; jangan pamer kode rumit berbelit-belit yang membuat teman satu tim pusing membacanya.",
    "detail": "Prinsip desain yang menyatakan bahwa sistem perangkat lunak bekerja paling baik jika dijaga tetap sederhana daripada dibuat rumit secara berlebihan."
  },
  {
    "term": "YAGNI Principle (You Aren't Gonna Need It)",
    "category": "Pemrograman & Software",
    "icon": "🛑",
    "babyAnalogy": "Jangan sibuk membuat roda sayap pesawat untuk mobil mainanmu sekarang jika mobilmu cuma butuh melaju di atas karpet lantai ruang tamu.",
    "detail": "Prinsip pemrograman Extreme Programming yang menyatakan bahwa pengembang tidak boleh menambahkan fungsionalitas sampai benar-benar diperlukan saat ini."
  },
  {
    "term": "SOLID Principles",
    "category": "Pemrograman & Software",
    "icon": "🏛️",
    "babyAnalogy": "Lima pilar pondasi bangunan istana kode yang kokoh anti-gempa: Single Responsibility, Open/Closed, Liskov, Interface Segregation, Dependency Inversion.",
    "detail": "Lima prinsip desain berorientasi objek yang dirancang untuk membuat desain perangkat lunak lebih mudah dipahami, fleksibel, dan mudah dipelihara."
  },
  {
    "term": "Single Responsibility Principle (SRP)",
    "category": "Pemrograman & Software",
    "icon": "🎯",
    "babyAnalogy": "Satu koki hanya boleh fokus memanggang roti; jangan menyuruh koki roti ikut menyapu lantai dan membetulkan pipa toilet yang bocor.",
    "detail": "Prinsip SOLID pertama yang menyatakan bahwa setiap modul atau kelas hanya boleh memiliki satu alasan untuk berubah (fokus pada satu tanggung jawab tunggal)."
  },
  {
    "term": "Open/Closed Principle (OCP)",
    "category": "Pemrograman & Software",
    "icon": "🚪",
    "babyAnalogy": "Boleh menambah jubah baru di luar (terbuka untuk ekstensi), tapi dilarang mengoperasi organ dalam tubuh yang sudah sehat (tertutup untuk modifikasi).",
    "detail": "Prinsip SOLID kedua yang menyatakan bahwa entitas perangkat lunak harus terbuka untuk perluasan (extension), tetapi tertutup untuk modifikasi internal."
  },
  {
    "term": "Liskov Substitution Principle (LSP)",
    "category": "Pemrograman & Software",
    "icon": "🦆",
    "babyAnalogy": "Jika itu burung, anak burung mainan plastik yang kamu buat harus tetap bisa bersuara seperti burung sungguhan tanpa merusak panggung sandiwara.",
    "detail": "Prinsip SOLID ketiga yang menyatakan bahwa objek dari superclass harus dapat digantikan dengan objek dari subclass-nya tanpa merusak kebenaran program."
  },
  {
    "term": "Interface Segregation Principle (ISP)",
    "category": "Pemrograman & Software",
    "icon": "🍽️",
    "babyAnalogy": "Jangan memaksa pelanggan memesan paket raksasa isi 20 makanan jika dia hanya lapar ingin makan sepotong ayam goreng.",
    "detail": "Prinsip SOLID keempat yang menyatakan bahwa klien tidak boleh dipaksa untuk bergantung pada antarmuka (interface) metode yang tidak mereka gunakan."
  },
  {
    "term": "Dependency Inversion Principle (DIP)",
    "category": "Pemrograman & Software",
    "icon": "🔌",
    "babyAnalogy": "Colokan listrik di dinding rumah tidak boleh dipatri mati ke kabel blender; buat lubang stopkontak standar agar bisa dicolok oleh alat apa saja.",
    "detail": "Prinsip SOLID kelima yang menyatakan bahwa modul tingkat tinggi tidak boleh bergantung langsung pada modul tingkat rendah, melainkan pada abstraksi."
  },
  {
    "term": "Technical Debt (Utang Teknis)",
    "category": "Pemrograman & Software",
    "icon": "💳",
    "babyAnalogy": "Menambal pipa bocor dengan selotip darurat agar cepat selesai hari ini; besok kamu harus membongkarnya kembali dengan biaya lebih mahal dan melelahkan.",
    "detail": "Biaya tersirat dari pengerjaan ulang tambahan yang disebabkan oleh pemilihan solusi cepat yang mudah saat ini daripada menggunakan pendekatan yang lebih baik."
  },
  {
    "term": "Monolithic Architecture",
    "category": "Pemrograman & Software",
    "icon": "🏰",
    "babyAnalogy": "Istana raksasa satu atap: dapur, kamar tidur, kamar mandi, dan garasi semuanya berada di dalam satu bangunan besar yang menyatu erat.",
    "detail": "Model arsitektur perangkat lunak tradisional di mana semua komponen fungsional aplikasi digabungkan dan dikompilasi bersama sebagai satu unit eksekusi tunggal."
  },
  {
    "term": "Microservices Architecture",
    "category": "Pemrograman & Software",
    "icon": "🏘️",
    "babyAnalogy": "Komplek desa mandiri: toko roti, bengkel motor, dan apotek berada di rumah masing-masing dan saling berbicara lewat telepon jika butuh bantuan.",
    "detail": "Gaya arsitektur perangkat lunak yang menyusun aplikasi sebagai kumpulan layanan-layanan kecil independen yang berkomunikasi melalui API ringan."
  },
  {
    "term": "API (Application Programming Interface)",
    "category": "Pemrograman & Software",
    "icon": "🍽️",
    "babyAnalogy": "Buku menu pelayan restoran: perantara ramah yang menerima pesanan makananmu, mengantarkannya ke dapur koki, dan membawakan makanan ke mejamu.",
    "detail": "Kumpulan definisi dan protokol yang memungkinkan satu aplikasi perangkat lunak berkomunikasi dan bertukar data dengan aplikasi lain."
  },
  {
    "term": "REST API (RESTful)",
    "category": "Pemrograman & Software",
    "icon": "📜",
    "babyAnalogy": "Aturan komunikasi web paling santai dan populer yang menggunakan kata-kata standar internet: GET untuk membaca, POST untuk membuat, DELETE untuk menghapus.",
    "detail": "Gaya arsitektur perangkat lunak berbasis protokol HTTP tanpa status (stateless) yang memanfaatkan kata kerja HTTP standar dan format pertukaran JSON."
  },
  {
    "term": "JSON (JavaScript Object Notation)",
    "category": "Pemrograman & Software",
    "icon": "📄",
    "babyAnalogy": "Bahasa surat teks paling ramah di dunia: tersusun rapi menggunakan tanda kurung kurawal {} dan titik dua : sehingga mudah dibaca manusia maupun robot.",
    "detail": "Format pertukaran data berbasis teks standar terbuka yang ringan, mudah dibaca manusia, dan mudah diuraikan oleh mesin komputer."
  },
  {
    "term": "XML (Extensible Markup Language)",
    "category": "Pemrograman & Software",
    "icon": "🏷️",
    "babyAnalogy": "Format surat kakek tua yang penuh dengan stiker label pembuka dan penutup <nama>Budi</nama> seperti bahasa HTML.",
    "detail": "Bahasa markup yang mendefinisikan seperangkat aturan untuk menyandikan dokumen dalam format yang dapat dibaca manusia dan mesin."
  },
  {
    "term": "YAML (YAML Ain't Markup Language)",
    "category": "Pemrograman & Software",
    "icon": "📝",
    "babyAnalogy": "Format catatan paling bersih tanpa tanda kurung kurawal; hanya mengandalkan spasi maju (indentasi) yang sangat disukai para teknisi server.",
    "detail": "Standar serialisasi data yang ramah manusia dan sering digunakan untuk berkas konfigurasi perangkat lunak dan pipeline CI/CD."
  },
  {
    "term": "SOAP (Simple Object Access Protocol)",
    "category": "Pemrograman & Software",
    "icon": "📦",
    "babyAnalogy": "Protokol komunikasi bank formal zaman dulu yang membungkus setiap pesan ke dalam amplop tebal berlapis aturan ketat XML.",
    "detail": "Protokol pertukaran pesan terstruktur berbasis XML yang sangat ketat dan berstandar formal tinggi untuk layanan web enterprise."
  },
  {
    "term": "GraphQL",
    "category": "Pemrograman & Software",
    "icon": "🛒",
    "babyAnalogy": "Belanja prasmanan: kamu bebas meminta hanya nama dan fotonya saja tanpa dipaksa membawa pulang alamat rumah dan nomor sepatu yang tidak kamu butuhkan.",
    "detail": "Bahasa kueri untuk API yang memungkinkan klien meminta secara persis data yang mereka butuhkan tanpa mengalami over-fetching atau under-fetching."
  },
  {
    "term": "gRPC",
    "category": "Pemrograman & Software",
    "icon": "⚡",
    "babyAnalogy": "Telepon kabel super kilat buatan Google yang mengobrol menggunakan kode biner padat sehingga ribuan microservices bisa mengobrol secepat kedipan mata.",
    "detail": "Kerangka kerja panggilan prosedur jarak jauh (RPC) sumber terbuka berkinerja tinggi yang memanfaatkan HTTP/2 dan serialisasi biner Protocol Buffers."
  },
  {
    "term": "WebSocket",
    "category": "Pemrograman & Software",
    "icon": "📞",
    "babyAnalogy": "Sambungan telepon langsung dua arah tanpa tutup: browser dan server bisa saling berbisik seketika tanpa perlu mengetuk pintu berulang kali (cocok untuk chat).",
    "detail": "Protokol komunikasi komputer dua arah penuh (full-duplex) melalui koneksi TCP tunggal yang persisten untuk aplikasi interaktif real-time."
  },
  {
    "term": "Concurrency vs Parallelism",
    "category": "Pemrograman & Software",
    "icon": "🤹",
    "babyAnalogy": "Concurrency = satu koki menyulap bergantian antara sup dan roti; Parallelism = dua koki sungguhan memasak sup dan roti di atas dua kompor fisik bersamaan.",
    "detail": "Concurrency adalah kemampuan menangani banyak tugas secara bersamaan dalam periode tumpang tindih; Parallelism adalah mengeksekusi banyak tugas secara simultan fisik."
  },
  {
    "term": "Asynchronous Programming (async/await)",
    "category": "Pemrograman & Software",
    "icon": "⏳",
    "babyAnalogy": "Memesan makanan di kasir lalu duduk santai membaca komik; begitu bel alarm pesanan bergetar (await), kamu baru berdiri mengambil nampan makanan.",
    "detail": "Model eksekusi kode non-blocking di mana program dapat melanjutkan tugas lain sambil menunggu operasi I/O yang lambat selesai di latar belakang."
  },
  {
    "term": "Promise / Future",
    "category": "Pemrograman & Software",
    "icon": "🎟️",
    "babyAnalogy": "Karcis janji manis: 'Saya berjanji akan memberikan hasil undian ini nanti; bisa jadi berhasil menang (resolved) atau gagal apes (rejected)'.",
    "detail": "Objek proksi yang mewakili nilai akhir yang belum diketahui pada saat pembuatan, digunakan untuk menangani hasil operasi asinkron."
  },
  {
    "term": "Callback Function",
    "category": "Pemrograman & Software",
    "icon": "📞",
    "babyAnalogy": "Meninggalkan nomor HP ke montir bengkel: 'Begitu mobil saya selesai diperbaiki, tolong telepon nomor ini ya!'.",
    "detail": "Fungsi yang diteruskan sebagai argumen ke fungsi lain yang kemudian dipanggil (dieksekusi kembali) setelah peristiwa atau tugas tertentu selesai."
  },
  {
    "term": "Callback Hell",
    "category": "Pemrograman & Software",
    "icon": "📐",
    "babyAnalogy": "Piramida tangga maut di mana janji di dalam janji terus menjorok ke kanan membentuk segitiga runcing yang membuat programmer pusing membacanya.",
    "detail": "Fenomena anti-pattern dalam kode asinkron di mana fungsi callback bersarang secara berlebihan sehingga kode sulit dibaca dan dipelihara."
  },
  {
    "term": "Event Loop",
    "category": "Pemrograman & Software",
    "icon": "🎡",
    "babyAnalogy": "Kincir ria yang terus berputar memeriksa antrean: jika panggung utama kosong, kincir langsung mengambil tugas antrean berikutnya untuk dieksekusi.",
    "detail": "Mekanisme arsitektur runtime (seperti pada Node.js/browser) yang mengoordinasikan eksekusi kode, pengumpulan peristiwa, dan sub-tugas dalam thread tunggal."
  },
  {
    "term": "Garbage Collector Generational (Young vs Old)",
    "category": "Pemrograman & Software",
    "icon": "👶",
    "babyAnalogy": "Menyapu kamar anak kecil setiap 10 menit karena sering membuang sampah tisu (Young), sementara lemari kakek hanya dibersihkan sebulan sekali (Old).",
    "detail": "Optimasi GC yang membagi objek memori berdasarkan usia pakainya: ruang pembibitan generasi muda dikumpulkan secara sering, ruang generasi tua jarang."
  },
  {
    "term": "Stack Overflow Error",
    "category": "Pemrograman & Software",
    "icon": "🥞",
    "babyAnalogy": "Tumpukan piring pancake yang terus ditumpuk tanpa henti oleh fungsi yang memanggil dirinya sendiri sampai menyentuh plafon atap dan ambruk berantakan.",
    "detail": "Galat runtime fatal yang terjadi ketika program menghabiskan ruang memori call stack akibat panggilan fungsi rekursif tak berhingga tanpa henti."
  },
  {
    "term": "Heap Memory",
    "category": "Pemrograman & Software",
    "icon": "🏊",
    "babyAnalogy": "Kolam renang bebas raksasa tempat kamu bisa memesan pelampung ukuran berapa saja untuk menampung objek dan data besar aplikasi.",
    "detail": "Wilayah memori komputer yang dialokasikan secara dinamis untuk objek dan struktur data yang ukuran masa hidupnya tidak dapat ditentukan pada waktu kompilasi."
  },
  {
    "term": "Call Stack",
    "category": "Pemrograman & Software",
    "icon": "📑",
    "babyAnalogy": "Tumpukan piring catatan buku tugas: mencatat fungsi mana yang sedang dikerjakan dan ke baris mana komputer harus pulang setelah fungsi ini selesai.",
    "detail": "Struktur data tumpukan LIFO internal yang melacak titik kembali dari fungsi-fungsi yang sedang dipanggil dan aktif berjalan dalam thread program."
  },
  {
    "term": "Regular Expressions (Regex)",
    "category": "Pemrograman & Software",
    "icon": "🔍",
    "babyAnalogy": "Mantra rumus pencari pola teks sakti: bisa mengecek apakah tulisan yang diketik benar-benar format email yang sah atau deretan nomor HP yang valid.",
    "detail": "Urutan karakter yang membentuk pola pencarian teks formal, digunakan untuk pencocokan string tingkat lanjut dan validasi format."
  },
  {
    "term": "Semantic Versioning (SemVer: Major.Minor.Patch)",
    "category": "Pemrograman & Software",
    "icon": "🏷️",
    "babyAnalogy": "Nomor versi aplikasi (1.2.3): Major ganti perombakan total besar, Minor tambah fitur baru yang ramah, Patch tambal lubang kutu kecil.",
    "detail": "Konvensi penomoran rilis versi perangkat lunak formal (X.Y.Z) yang mengindikasikan tingkat kompatibilitas dan perubahan fitur ke pengguna."
  },
  {
    "term": "Agile Methodology",
    "category": "Pemrograman & Software",
    "icon": "🏃",
    "babyAnalogy": "Bekerja gesit dalam sprint 2 mingguan: membuat potongan kue kecil yang langsung dicicipi pelanggan daripada menunggu 2 tahun baru tahu kuenya basi.",
    "detail": "Pendekatan manajemen proyek dan pengembangan perangkat lunak iteratif yang fleksibel dan berfokus pada kolaborasi tim dan umpan balik cepat."
  },
  {
    "term": "Scrum (Sprint, Daily Standup, Retrospective)",
    "category": "Pemrograman & Software",
    "icon": "🏉",
    "babyAnalogy": "Permainan rugby tim pembuat software: berlari bersama membawa bola fitur selama 2 minggu, rapat berdiri 15 menit tiap pagi, dan evaluasi bersama.",
    "detail": "Kerangka kerja Agile populer yang membagi pekerjaan ke dalam siklus waktu tetap (Sprint) dengan peran, upacara pertemuan, dan artefak terstruktur."
  },
  {
    "term": "Kanban Board",
    "category": "Pemrograman & Software",
    "icon": "📌",
    "babyAnalogy": "Papan tempel kartu warna-warni 3 kolom: 'Rencana', 'Sedang Dikerjakan', dan 'Sudah Selesai' agar semua orang tahu siapa sedang mengerjakan apa.",
    "detail": "Metode visualisasi alur kerja pengembangan perangkat lunak untuk mengelola tugas pekerjaan yang sedang berjalan (WIP) secara transparan."
  },
  {
    "term": "Technical Specification (Tech Spec)",
    "category": "Pemrograman & Software",
    "icon": "📐",
    "babyAnalogy": "Gambar cetak biru arsitek sebelum tukang bangunan mulai menyusun bata; menjelaskan bagaimana sistem akan dibangun dan database apa yang dipakai.",
    "detail": "Dokumen rekayasa formal yang menjelaskan arsitektur, kebutuhan teknis, desain sistem, dan solusi implementasi sebelum pengkodean dimulai."
  },
  {
    "term": "Code Review",
    "category": "Pemrograman & Software",
    "icon": "👀",
    "babyAnalogy": "Membaca teliti hasil tulisan teman sebelum diterbitkan ke koran: saling memberi masukan ramah agar tidak ada salah ketik atau bug yang lolos.",
    "detail": "Proses sistematis di mana pengembang perangkat lunak lain memeriksa kode sumber rekan kerja untuk menemukan galat dan memastikan kualitas standar."
  },
  {
    "term": "Pair Programming",
    "category": "Pemrograman & Software",
    "icon": "👫",
    "babyAnalogy": "Satu mobil dua pengemudi: satu orang memegang setir mengetik kode di kibor (Driver), satu orang lagi duduk di sebelah membaca peta jalan (Navigator).",
    "detail": "Teknik pengembangan perangkat lunak di mana dua programmer bekerja sama pada satu komputer yang sama untuk menulis dan meninjau kode bersamaan."
  },
  {
    "term": "Static Code Analysis (Linter)",
    "category": "Pemrograman & Software",
    "icon": "👮",
    "babyAnalogy": "Guru bahasa yang berdiri di belakangmu: memberi garis bawah merah bergelombang seketika saat kamu salah menaruh titik koma atau lupa merapikan spasi.",
    "detail": "Alat pemeriksa kode otomatis tanpa menjalankan program untuk menganalisis gaya penulisan, potensi bug, dan kerentanan keamanan kode sumber."
  },
  {
    "term": "SDK (Software Development Kit)",
    "category": "Pemrograman & Software",
    "icon": "🧰",
    "babyAnalogy": "Kotak perkakas tukang serbaguna: sudah berisi obeng, gergaji, paku, dan buku panduan lengkap dari pabrik untuk membuat aplikasi di platform tertentu.",
    "detail": "Kumpulan alat pengembangan perangkat lunak, pustaka biner, dokumentasi, dan kode contoh yang disediakan untuk membangun aplikasi pada platform tertentu."
  },
  {
    "term": "Dependency Management (npm, pip, Maven)",
    "category": "Pemrograman & Software",
    "icon": "📦",
    "babyAnalogy": "Manajer buku perpustakaan yang mengurus peminjaman buku karya programmer lain agar kamu tidak perlu membuat roda dari nol.",
    "detail": "Alat perangkat lunak yang mengotomatisasi pengunduhan, resolusi versi, dan pembaruan pustaka pihak ketiga yang dibutuhkan proyek kode."
  },
  {
    "term": "Open Source Software (OSS)",
    "category": "Pemrograman & Software",
    "icon": "🌍",
    "babyAnalogy": "Buku resep rahasia yang dibuka gratis untuk seluruh dunia: siapa saja boleh membaca, memasak, memperbaiki rasanya, dan membagikannya ke orang lain.",
    "detail": "Perangkat lunak dengan kode sumber terbuka yang dirilis di bawah lisensi publik yang memungkinkan siapa saja untuk mempelajari, mengubah, dan mendistribusikannya."
  },
  {
    "term": "HTML (HyperText Markup Language)",
    "category": "Web, Cloud & DevOps",
    "icon": "🦴",
    "babyAnalogy": "Kerangka tulang belulang manusia: menyusun di mana letak kepala judul, badan paragraf, dan kaki halaman sebuah situs web.",
    "detail": "Bahasa markup standar untuk membuat dan menyusun struktur halaman web dan aplikasi web menggunakan elemen tag."
  },
  {
    "term": "CSS (Cascading Style Sheets)",
    "category": "Web, Cloud & DevOps",
    "icon": "🎨",
    "babyAnalogy": "Baju gaun modis dan riasan wajah: memberi warna warni cerah, bentuk font huruf yang cantik, dan tata letak elegan pada kerangka HTML.",
    "detail": "Bahasa lembar gaya yang digunakan untuk mengatur presentasi visual, tata letak, warna, tipografi, dan animasi dokumen HTML."
  },
  {
    "term": "JavaScript (JS)",
    "category": "Web, Cloud & DevOps",
    "icon": "⚡",
    "babyAnalogy": "Otot dan otak lincah: membuat halaman web bisa melompat, menampilkan animasi pop-up lucu, dan mengirim pesan chat tanpa memuat ulang layar.",
    "detail": "Bahasa pemrograman tingkat tinggi dinamis yang memungkinkan interaktivitas, kontrol multimedia, dan komunikasi asinkron pada browser web."
  },
  {
    "term": "DOM (Document Object Model)",
    "category": "Web, Cloud & DevOps",
    "icon": "🌳",
    "babyAnalogy": "Pohon keluarga halaman web di memori browser: JavaScript bisa memegang dahan tombol, mengganti teks judul, atau mencabut dahan foto kapan saja.",
    "detail": "Antarmuka pemrograman lintas platform yang merepresentasikan dokumen HTML/XML sebagai struktur pohon simpul berorientasi objek."
  },
  {
    "term": "Responsive Web Design",
    "category": "Web, Cloud & DevOps",
    "icon": "📱",
    "babyAnalogy": "Baju elastis ajaib yang pas dipakai di tubuh raksasa TV pintar, kemeja laptop kantor, sampai badan mungil layar smartphone tanpa robek.",
    "detail": "Pendekatan desain web yang membuat halaman web menyesuaikan tampilan tata letaknya secara dinamis terhadap berbagai ukuran layar perangkat."
  },
  {
    "term": "CSS Flexbox",
    "category": "Web, Cloud & DevOps",
    "icon": "📦",
    "babyAnalogy": "Satu baris lemari bersekat lentur: barang-barang di dalamnya otomatis berbaris rapi ke samping atau ke bawah dan membagi jarak ruang secara adil.",
    "detail": "Model tata letak CSS satu dimensi yang dirancang untuk mendistribusikan ruang dan meratakan elemen dalam sebuah kontainer secara efisien."
  },
  {
    "term": "CSS Grid",
    "category": "Web, Cloud & DevOps",
    "icon": "📐",
    "babyAnalogy": "Papan catur dua dimensi: kamu bebas meletakkan benteng foto di petak mana saja dan pion tombol di koordinat baris dan kolom yang presisi.",
    "detail": "Sistem tata letak CSS dua dimensi berbasis kisi (grid) yang mampu menangani baris dan kolom sekaligus untuk antarmuka web kompleks."
  },
  {
    "term": "Single Page Application (SPA)",
    "category": "Web, Cloud & DevOps",
    "icon": "📄",
    "babyAnalogy": "Satu panggung teater yang tidak pernah tutup layar: hanya dekorasi dan aktor di atas panggung yang berganti tanpa penonton perlu keluar masuk gedung.",
    "detail": "Aplikasi web yang berinteraksi dengan pengguna secara dinamis dengan menulis ulang halaman web saat ini daripada memuat seluruh halaman baru dari server."
  },
  {
    "term": "Frontend vs Backend",
    "category": "Web, Cloud & DevOps",
    "icon": "🎭",
    "babyAnalogy": "Frontend = ruang makan restoran mewah yang dinikmati tamu; Backend = dapur panas di belakang tempat koki memasak dan menyimpan bumbu rahasia.",
    "detail": "Frontend adalah bagian antarmuka sisi klien yang berinteraksi langsung dengan pengguna; Backend adalah logika sisi server dan pemrosesan basis data."
  },
  {
    "term": "Full-Stack Developer",
    "category": "Web, Cloud & DevOps",
    "icon": "🧙",
    "babyAnalogy": "Pendekar serba bisa yang jago mendesain ruang makan cantik (Frontend) sekaligus mahir memasak di dapur server database (Backend).",
    "detail": "Pengembang perangkat lunak yang memiliki kompetensi teknis untuk mengerjakan sisi klien (frontend) dan sisi server (backend) secara menyeluruh."
  },
  {
    "term": "Client-Side Rendering (CSR)",
    "category": "Web, Cloud & DevOps",
    "icon": "💻",
    "babyAnalogy": "Restoran yang mengirimkan bahan mentah dan kompor ke mejamu: browser komputermu sendiri yang sibuk merakit dan memasak gambar web di layarmu.",
    "detail": "Teknik rendering di mana browser klien mengunduh bundel JavaScript kosong dan mengeksekusi pembuatan elemen DOM di sisi perangkat klien."
  },
  {
    "term": "Server-Side Rendering (SSR)",
    "category": "Web, Cloud & DevOps",
    "icon": "🍲",
    "babyAnalogy": "Restoran yang memasak makanan matang sempurna di dapur: kamu tinggal membuka tutup mangkuk dan langsung menyantapnya seketika tanpa menunggu.",
    "detail": "Teknik rendering di mana halaman web HTML dirender dan diisi data lengkap di server sebelum dikirimkan ke browser pengguna."
  },
  {
    "term": "Static Site Generation (SSG)",
    "category": "Web, Cloud & DevOps",
    "icon": "🥫",
    "babyAnalogy": "Makanan kaleng siap saji: jutaan halaman artikel web sudah dimasak dan dikemas rapi sejak kemarin sehingga bisa disajikan dalam 0.1 detik.",
    "detail": "Metode pembuatan situs web di mana seluruh halaman HTML dihasilkan terlebih dahulu selama waktu build (build-time) sebelum permintaan pengguna tiba."
  },
  {
    "term": "Hydration (Web Hydration)",
    "category": "Web, Cloud & DevOps",
    "icon": "💧",
    "babyAnalogy": "Menyiram mie instan kering dengan air panas: halaman web HTML kaku dari server disiram JavaScript agar tombol-tombolnya hidup dan bisa diklik.",
    "detail": "Proses sisi klien di mana kerangka kerja JavaScript (seperti React/Vue) melampirkan event listener ke HTML yang telah dirender sebelumnya oleh SSR."
  },
  {
    "term": "Component (React / Vue / Svelte)",
    "category": "Web, Cloud & DevOps",
    "icon": "🧱",
    "babyAnalogy": "Blok mainan Lego mandiri: komponen tombol biru beranimasi yang bisa kamu pasang di halaman beranda, halaman profil, dan halaman belanja berulang kali.",
    "detail": "Blok bangunan kode modular mandiri dalam framework frontend yang merangkum logika, tampilan visual, dan statusnya sendiri."
  },
  {
    "term": "Props (Properties)",
    "category": "Web, Cloud & DevOps",
    "icon": "📦",
    "babyAnalogy": "Paket kiriman dari orang tua ke anak: komponen induk mengirimkan teks judul dan warna baju ke komponen tombol anaknya.",
    "detail": "Mekanisme dalam framework frontend untuk meneruskan data dari komponen induk (parent) ke komponen anak (child) secara searah (top-down)."
  },
  {
    "term": "State (State Management)",
    "category": "Web, Cloud & DevOps",
    "icon": "🧠",
    "babyAnalogy": "Memori ingatan internal komponen: mengingat apakah tombol sedang diklik, keranjang belanja berisi 3 barang, atau pengguna sedang mengetik.",
    "detail": "Objek data internal yang menampung informasi status reaktif komponen yang jika berubah akan memicu pembaruan ulang rendering UI."
  },
  {
    "term": "Virtual DOM",
    "category": "Web, Cloud & DevOps",
    "icon": "🪞",
    "babyAnalogy": "Sketsa pensil coret-coretan di buku gambar: mencatat perubahan apa saja yang terjadi, membandingkannya, dan hanya menambal bagian yang perlu saja di dinding nyata.",
    "detail": "Representasi memori ringan dari DOM browser aktual yang digunakan library (seperti React) untuk menghitung perbedaan efisien (diffing)."
  },
  {
    "term": "AJAX (Asynchronous JavaScript and XML)",
    "category": "Web, Cloud & DevOps",
    "icon": "📨",
    "babyAnalogy": "Pelayan bisik-bisik: meminta data skor sepak bola terbaru ke server di latar belakang tanpa membuat seluruh layar komputermu berkedip putih me-refresh.",
    "detail": "Teknik pengembangan web di sisi klien untuk membuat aplikasi web asinkron dengan mengirim dan mengambil data dari server di latar belakang."
  },
  {
    "term": "Fetch API",
    "category": "Web, Cloud & DevOps",
    "icon": "🐕",
    "babyAnalogy": "Anjing penurut di JavaScript modern: kamu lempar tongkat perintah 'fetch('/api/users')', dia langsung berlari mengambil datanya dan membawanya pulang.",
    "detail": "Antarmuka JavaScript bawaan modern berbasis Promise untuk mengambil sumber daya jaringan secara asinkron melintasi web."
  },
  {
    "term": "Cookie (HTTP Cookie)",
    "category": "Web, Cloud & DevOps",
    "icon": "🍪",
    "babyAnalogy": "Biskuit cap stempel kecil di saku browser kamu yang mencatat bahwa kamu tadi sudah login, sehingga kamu tidak ditanyai password lagi saat pindah halaman.",
    "detail": "Sepotong kecil data yang dikirim oleh server web dan disimpan oleh browser web di komputer pengguna untuk melacak sesi dan preferensi."
  },
  {
    "term": "Session (Server Session)",
    "category": "Web, Cloud & DevOps",
    "icon": "🎟️",
    "babyAnalogy": "Kupon nomor loker penitipan tas di mall: kamu memegang nomor karcisnya, sementara tas rahasiamu disimpan aman di dalam lemari brankas server.",
    "detail": "Penyimpanan status sisi server yang mengaitkan permintaan berulang dari klien yang sama menggunakan pengenal sesi unik (Session ID)."
  },
  {
    "term": "LocalStorage vs SessionStorage",
    "category": "Web, Cloud & DevOps",
    "icon": "🧳",
    "babyAnalogy": "LocalStorage = koper abadi yang tidak akan hilang walau laptop dimatikan; SessionStorage = kantong plastik yang langsung lenyap saat tab browser ditutup.",
    "detail": "Dua mekanisme Web Storage API sisi klien: localStorage menyimpan data persisten tanpa kedaluwarsa; sessionStorage bertahan hanya selama sesi tab terbuka."
  },
  {
    "term": "JWT (JSON Web Token)",
    "category": "Web, Cloud & DevOps",
    "icon": "🎫",
    "babyAnalogy": "Gelang tiket konser VIP bertanda tangan hologram digital anti-palsu yang berisi namamu dan izin masuk ruang artis tanpa server perlu mengecek buku tamu.",
    "detail": "Standar terbuka kompak dan mandiri (RFC 7519) untuk mentransmisikan informasi secara aman antar pihak sebagai objek JSON yang ditandatangani secara kriptografis."
  },
  {
    "term": "CORS (Cross-Origin Resource Sharing)",
    "category": "Web, Cloud & DevOps",
    "icon": "🛂",
    "babyAnalogy": "Petugas paspor bandara: memeriksa apakah situs 'toko-a.com' diizinkan meminjam data dari server 'bank-b.com' demi melindungi keamanan pengguna.",
    "detail": "Mekanisme keamanan berbasis header HTTP yang memungkinkan server menentukan asal (origin) domain luar mana yang diizinkan memuat sumber dayanya."
  },
  {
    "term": "XSS (Cross-Site Scripting)",
    "category": "Web, Cloud & DevOps",
    "icon": "💉",
    "babyAnalogy": "Menyelipkan coretan mantra jahat di kolom komentar: saat orang lain membaca komentar itu, komputernya tanpa sadar mengirimkan kue kupon rahasianya ke peretas.",
    "detail": "Kerentanan keamanan web di mana penyerang menyuntikkan skrip berbahaya sisi klien ke dalam halaman web yang dilihat oleh pengguna lain."
  },
  {
    "term": "CSRF (Cross-Site Request Forgery)",
    "category": "Web, Cloud & DevOps",
    "icon": "🕵️",
    "babyAnalogy": "Menipu tanganmu sendiri: mengklik tautan gambar kucing lucu yang diam-diam menyuruh browsermu mentransfer uang dari akun bank yang sedang kamu buka.",
    "detail": "Serangan siber di mana penyerang memperdaya pengguna terotentikasi untuk mengeksekusi tindakan yang tidak diinginkan pada aplikasi web yang dipercaya."
  },
  {
    "term": "Middleware (Backend)",
    "category": "Web, Cloud & DevOps",
    "icon": "👮",
    "babyAnalogy": "Pintu putar pemeriksaan tiket di stasiun kereta: setiap penumpang yang lewat diperiksa dulu karcisnya sebelum boleh masuk ke peron kereta api.",
    "detail": "Fungsi perangkat lunak perantara dalam arsitektur backend yang memiliki akses ke objek permintaan (req), respons (res), dan fungsi next()."
  },
  {
    "term": "HTTP Status Codes (200, 301, 404, 500)",
    "category": "Web, Cloud & DevOps",
    "icon": "🚦",
    "babyAnalogy": "Kode rambu lalu lintas web: 200 = Sukses Beres, 301 = Pindah Alamat Rumah, 404 = Barang Tidak Ditemukan, 500 = Kompor Server Meledak Mogok.",
    "detail": "Kode respons numerik 3-digit standar HTTP dari server ke klien: 2xx (Sukses), 3xx (Pengalihan), 4xx (Kesalahan Klien), 5xx (Kesalahan Server)."
  },
  {
    "term": "PWA (Progressive Web App)",
    "category": "Web, Cloud & DevOps",
    "icon": "📱",
    "babyAnalogy": "Situs web yang punya kesaktian aplikasi HP: bisa dipasang ikonnya di layar depan ponsel, bisa dibuka saat mati internet, dan bisa mengirim notifikasi.",
    "detail": "Aplikasi web yang dibangun menggunakan teknologi web modern yang memberikan pengalaman mirip aplikasi native (offline, push notification, instalasi)."
  },
  {
    "term": "Service Worker",
    "category": "Web, Cloud & DevOps",
    "icon": "🤖",
    "babyAnalogy": "Pelayan bayangan di ponselmu yang mencegat permintaan internet: jika kamu sedang di dalam gua tanpa sinyal, dia menyajikan halaman yang tersimpan di kulkas cache.",
    "detail": "Skrip yang dijalankan browser di latar belakang terpisah dari halaman web, memungkinkan fitur caching offline, sinkronisasi latar, dan push notifications."
  },
  {
    "term": "Web Manifest (manifest.json)",
    "category": "Web, Cloud & DevOps",
    "icon": "📜",
    "babyAnalogy": "Kartu identitas aplikasi web untuk HP: mencatat nama aplikasi, warna tema layar pembuka, dan ikon gambar yang harus dipasang di layar utama ponsel.",
    "detail": "Berkas berkas JSON sederhana yang memberi tahu browser bagaimana aplikasi web harus berperilaku saat dipasang di perangkat seluler atau desktop."
  },
  {
    "term": "Web Accessibility (a11y & ARIA)",
    "category": "Web, Cloud & DevOps",
    "icon": "♿",
    "babyAnalogy": "Membangun jalan landai kursi roda di web: memberi label suara ramah agar teman-teman tuna netra bisa berselancar menggunakan pembaca layar.",
    "detail": "Praktik inklusif merancang situs web agar dapat digunakan oleh semua orang termasuk penyandang disabilitas menggunakan standar W3C WCAG dan atribut ARIA."
  },
  {
    "term": "SEO (Search Engine Optimization)",
    "category": "Web, Cloud & DevOps",
    "icon": "🔎",
    "babyAnalogy": "Memasang papan nama toko yang berkilau di pinggir jalan raya agar Google mudah menemukan dan merekomendasikan situs webmu di urutan nomor 1.",
    "detail": "Serangkaian proses dan teknik optimasi teknis dan konten untuk meningkatkan visibilitas dan peringkat halaman web di mesin pencari."
  },
  {
    "term": "SSR Hydration Mismatch",
    "category": "Web, Cloud & DevOps",
    "icon": "⚠️",
    "babyAnalogy": "Kaget saat mencocokkan baju: tampilan yang dicetak server berbeda dengan hitungan browser di HP sehingga tombol berkedip aneh.",
    "detail": "Galat yang terjadi ketika struktur pohon DOM yang dirender oleh server tidak cocok secara identik dengan pohon DOM yang dihasilkan di klien."
  },
  {
    "term": "Bundler (Webpack, Vite, Rollup, Turbopack)",
    "category": "Web, Cloud & DevOps",
    "icon": "📦",
    "babyAnalogy": "Tukang packing barang profesional: merapikan ratusan berkas kode JavaScript dan gambar menjadi beberapa paket kecil yang ringan diunduh pengguna.",
    "detail": "Alat pengembangan web yang menggabungkan banyak modul kode sumber, gaya, dan aset menjadi berkas bundel statis teroptimasi untuk browser."
  },
  {
    "term": "Tree Shaking",
    "category": "Web, Cloud & DevOps",
    "icon": "🌳",
    "babyAnalogy": "Menggoyang pohon apel: daun-daun kering dan kode fungsi mati yang tidak pernah dipakai akan rontok terbuang sehingga ukuran aplikasi menjadi sangat ramping.",
    "detail": "Istilah eliminasi kode mati dalam ekosistem bundler JavaScript yang menghapus modul atau fungsi yang tidak pernah diimpor dalam produksi."
  },
  {
    "term": "Minification & Obfuscation",
    "category": "Web, Cloud & DevOps",
    "icon": "🗜️",
    "babyAnalogy": "Minification membuang semua spasi dan jeda enter agar filenya ramping; Obfuscation mengubah nama variabel menjadi acak agar tidak dicontek saingan.",
    "detail": "Minifikasi memadatkan kode dengan menghapus karakter tidak penting tanpa mengubah fungsi; Obfuskasi mengaburkan keterbacaan kode untuk keamanan."
  },
  {
    "term": "Babel / Transpiler",
    "category": "Web, Cloud & DevOps",
    "icon": "👴",
    "babyAnalogy": "Mesin penerjemah waktu: menerjemahkan kode JavaScript modern zaman depan menjadi bahasa kuno yang masih dimengerti oleh browser kakek tua.",
    "detail": "Transkompiler JavaScript yang mengubah kode ECMAScript generasi terbaru menjadi versi bahasa lama yang kompatibel dengan browser warisan."
  },
  {
    "term": "TypeScript",
    "category": "Web, Cloud & DevOps",
    "icon": "🛡️",
    "babyAnalogy": "JavaScript yang dipakaikan sabuk pengaman dan helm baja: memeriksa tipe data variabel sebelum dijalankan agar tidak ada salah ketik yang bikin malu.",
    "detail": "Superset sintaksis berpengetikan statis ketat dari JavaScript yang dikembangkan Microsoft yang dikompilasi menjadi JavaScript murni."
  },
  {
    "term": "Node.js Runtime",
    "category": "Web, Cloud & DevOps",
    "icon": "🚀",
    "babyAnalogy": "Mengeluarkan mesin balap V8 Chrome dari dalam browser dan menaruhnya di komputer server agar JavaScript bisa membaca harddisk dan membuat server web.",
    "detail": "Lingkungan runtime JavaScript sisi server lintas platform asinkron berbasis event yang dibangun di atas mesin JavaScript V8 Google Chrome."
  },
  {
    "term": "Express.js / NestJS",
    "category": "Web, Cloud & DevOps",
    "icon": "🚂",
    "babyAnalogy": "Kerangka sasis mobil backend: menyediakan jalur rute jalan (routing) dan pintu stasiun perantara yang membuat pembuatan server REST API jadi menyenangkan.",
    "detail": "Framework aplikasi web backend populer untuk Node.js yang menyediakan arsitektur minimalis (Express) atau terstruktur modular enterprise (NestJS)."
  },
  {
    "term": "NPM (Node Package Manager)",
    "category": "Web, Cloud & DevOps",
    "icon": "🏪",
    "babyAnalogy": "Gudang perpustakaan kode terbesar sedunia tempat kamu bisa meminjam jutaan paket alat buatan programmer lain hanya dengan satu ketikan 'npm install'.",
    "detail": "Manajer paket default untuk lingkungan runtime JavaScript Node.js dan registri publik repositori modul perangkat lunak terbesar."
  },
  {
    "term": "Serverless Computing (AWS Lambda)",
    "category": "Web, Cloud & DevOps",
    "icon": "⚡",
    "babyAnalogy": "Menyewa koki terbang yang hanya muncul saat ada pesanan datang, memasak selama 2 detik, lalu menghilang seketika; kamu hanya membayar selama koki bekerja.",
    "detail": "Model eksekusi cloud di mana penyedia awan mengelola infrastruktur server secara dinamis dan menagih hanya untuk sumber daya komputasi aktual saat kode berjalan."
  },
  {
    "term": "Micro-Frontends",
    "category": "Web, Cloud & DevOps",
    "icon": "🧩",
    "babyAnalogy": "Memecah layar web menjadi bagian-bagian tim mandiri: tim A mengurus keranjang belanja, tim B mengurus profil, dan tim C mengurus pencarian.",
    "detail": "Gaya arsitektur di mana aplikasi frontend diuraikan menjadi fitur-fitur semi-independen yang dikembangkan dan disebarkan oleh tim terpisah."
  },
  {
    "term": "SSR Edge Rendering (Cloudflare Workers)",
    "category": "Web, Cloud & DevOps",
    "icon": "🛰️",
    "babyAnalogy": "Menempatkan pelayan web di menara pemancar terdekat dengan rumahmu di seluruh dunia agar jawaban web tiba secepat 5 milidetik.",
    "detail": "Eksekusi kode dan rendering web yang dijalankan di server komputasi edge CDN yang terdistribusi secara geografis sedekat mungkin dengan pengguna."
  },
  {
    "term": "WebSockets vs Server-Sent Events (SSE)",
    "category": "Web, Cloud & DevOps",
    "icon": "📻",
    "babyAnalogy": "WebSocket = telepon dua arah (bisa bicara dan mendengar); SSE = siaran radio satu arah dari server ke layar HP (cocok untuk grafik saham dan notifikasi).",
    "detail": "Dua teknologi komunikasi web real-time: WebSockets menyediakan saluran dua arah penuh; SSE menyediakan aliran data satu arah dari server ke klien melalui HTTP."
  },
  {
    "term": "Shadow DOM",
    "category": "Web, Cloud & DevOps",
    "icon": "🕶️",
    "babyAnalogy": "Kamar rahasia kedap suara di dalam elemen web: gaya warna CSS di kamar ini tidak akan bocor ke luar dan tidak akan dirusak oleh CSS luar.",
    "detail": "Fitur standar Web Components yang menyediakan enkapsulasi terisolasi untuk pohon DOM dan aturan CSS elemen kustom."
  },
  {
    "term": "Web Components (Custom Elements)",
    "category": "Web, Cloud & DevOps",
    "icon": "🏷️",
    "babyAnalogy": "Membuat tag HTML buatanmu sendiri (misal: <kodi-kartu-hebat>) yang sudah berisi tampilan, gaya, dan perilakunya sendiri tanpa tergantung React/Vue.",
    "detail": "Kumpulan standar W3C yang memungkinkan pengembang membuat elemen HTML kustom yang dapat digunakan kembali dan dienkapsulasi lintas framework."
  },
  {
    "term": "Jamstack (JavaScript, APIs, Markup)",
    "category": "Web, Cloud & DevOps",
    "icon": "🥪",
    "babyAnalogy": "Arsitektur roti lapis web modern: halaman HTML super cepat yang sudah jadi di depan, dipadu dengan bumbu API di belakang dan JavaScript lincah.",
    "detail": "Arsitektur pengembangan web modern yang berfokus pada kinerja dan keamanan tinggi dengan memisahkan tampilan statis pra-render dari layanan backend API."
  },
  {
    "term": "Content Security Policy (CSP)",
    "category": "Web, Cloud & DevOps",
    "icon": "🛡️",
    "babyAnalogy": "Daftar tamu undangan terpercaya di dinding browser: melarang browser mengeksekusi skrip atau gambar selain dari alamat-alamat sahabat resmi yang diizinkan.",
    "detail": "Header keamanan HTTP yang membantu mendeteksi dan mengurangi jenis serangan tertentu termasuk Cross-Site Scripting (XSS) dan injeksi data."
  },
  {
    "term": "SameSite Cookie Attribute (Strict, Lax, None)",
    "category": "Web, Cloud & DevOps",
    "icon": "🍪",
    "babyAnalogy": "Pintu gerbang biskuit cookie: menentukan apakah cookie boleh dibawa menyeberang saat kamu mengklik tautan dari situs luar.",
    "detail": "Atribut keamanan pada cookie HTTP yang mengontrol apakah cookie dikirim bersama dengan permintaan lintas situs (cross-site requests)."
  },
  {
    "term": "OAuth 2.0",
    "category": "Web, Cloud & DevOps",
    "icon": "🔑",
    "babyAnalogy": "Kunci kartu hotel digital: 'Masuk dengan Akun Google' tanpa perlu memberitahukan kata sandi aslimu kepada aplikasi game yang baru kamu unduh.",
    "detail": "Kerangka kerja otorisasi standar industri terbuka yang memungkinkan aplikasi pihak ketiga memperoleh akses terbatas ke akun pengguna melalui token akses."
  },
  {
    "term": "OpenID Connect (OIDC)",
    "category": "Web, Cloud & DevOps",
    "icon": "🪪",
    "babyAnalogy": "KTP digital di atas kartu hotel OAuth: membuktikan kepada aplikasi siapa identitas dirimu yang sebenarnya dengan aman.",
    "detail": "Lapisan identitas sederhana di atas protokol OAuth 2.0 yang memungkinkan klien memverifikasi identitas pengguna akhir dan mendapatkan profil dasar."
  },
  {
    "term": "Rate Limiting",
    "category": "Web, Cloud & DevOps",
    "icon": "🛑",
    "babyAnalogy": "Polisi loket tiket yang membatasi: 'Satu orang maksimal hanya boleh mengetuk pintu 60 kali per menit agar server tidak ambruk pingsan!'.",
    "detail": "Strategi kontrol lalu lintas jaringan yang membatasi frekuensi berapa kali pengguna atau alamat IP dapat melakukan permintaan ke API dalam rentang waktu tertentu."
  },
  {
    "term": "Idempotency (Idempotent Methods)",
    "category": "Web, Cloud & DevOps",
    "icon": "🔄",
    "babyAnalogy": "Menekan saklar lampu 'Matikan': kamu tekan sekali atau kamu tekan 100 kali berturut-turut, hasilnya tetap sama persis yaitu lampu mati.",
    "detail": "Sifat operasi dalam matematika dan ilmu komputer di mana eksekusi berulang kali dengan parameter yang sama menghasilkan efek status yang sama (misal GET, PUT, DELETE)."
  },
  {
    "term": "Stateless vs Stateful Architecture",
    "category": "Web, Cloud & DevOps",
    "icon": "🧠",
    "babyAnalogy": "Stateless seperti kasir jujur yang membaca struk lengkapmu di setiap pesanan; Stateful seperti teman karib yang hafal nama panggilanmu sejak kemarin.",
    "detail": "Arsitektur di mana server tidak menyimpan status sesi klien di antara permintaan (Stateless), atau sebaliknya mempertahankan informasi status sesi (Stateful)."
  },
  {
    "term": "GraphQL Schema & Resolvers",
    "category": "Web, Cloud & DevOps",
    "icon": "🗺️",
    "babyAnalogy": "Schema = daftar menu makanan yang tersedia; Resolvers = koki di dapur yang benar-benar mengambil bahan makanan dan memasaknya.",
    "detail": "Schema mendefinisikan tipe data dan hubungan API GraphQL; Resolvers adalah fungsi-fungsi yang mengambil data fisik untuk setiap field dalam schema."
  },
  {
    "term": "REST HATEOAS",
    "category": "Web, Cloud & DevOps",
    "icon": "🗺️",
    "babyAnalogy": "Buku cerita petualangan: setiap kali kamu selesai membaca satu bab, di bawahnya ada petunjuk 'Buka halaman 15 untuk naik kapal' (tautan aksi berikutnya).",
    "detail": "Hypermedia As The Engine Of Application State; batasan arsitektur REST di mana respons server menyediakan tautan navigasi ke tindakan terkait selanjutnya."
  },
  {
    "term": "Webhook",
    "category": "Web, Cloud & DevOps",
    "icon": "🔔",
    "babyAnalogy": "Jangan menelepon saya bolak-balik, biar saya yang meneleponmu begitu barangmu tiba di pelabuhan (pemberitahuan otomatis antar server).",
    "detail": "Metode komunikasi berbasis HTTP terbalik di mana aplikasi secara otomatis mengirimkan data payload ke URL titik akhir sistem lain saat terjadi peristiwa tertentu."
  },
  {
    "term": "Server-Sent Events (SSE)",
    "category": "Web, Cloud & DevOps",
    "icon": "📻",
    "babyAnalogy": "Pipa air satu arah yang terus mengalirkan tetesan kabar terbaru dari server langsung ke browser tanpa browser perlu bertanya berulang kali.",
    "detail": "Teknologi di mana browser menerima pembaruan otomatis satu arah dari server melalui koneksi HTTP persisten standar."
  },
  {
    "term": "WebRTC (Web Real-Time Communication)",
    "category": "Web, Cloud & DevOps",
    "icon": "📹",
    "babyAnalogy": "Obrolan video tatap muka langsung antar dua browser tanpa perlu melewati server perantara yang berat; suara dan videomu melesat kilat.",
    "detail": "Standar teknologi sumber terbuka yang memungkinkan browser web dan aplikasi seluler melakukan komunikasi audio/video dan transfer data peer-to-peer real-time."
  },
  {
    "term": "Service-Oriented Architecture (SOA)",
    "category": "Web, Cloud & DevOps",
    "icon": "🏢",
    "babyAnalogy": "Kakek buyut dari microservices: kumpulan departemen kantor besar yang berkomunikasi menggunakan bus pesan bersama (Enterprise Service Bus).",
    "detail": "Gaya desain perangkat lunak di mana layanan-layanan perangkat lunak disediakan ke komponen lain melalui protokol komunikasi di seluruh jaringan."
  },
  {
    "term": "API Gateway",
    "category": "Web, Cloud & DevOps",
    "icon": "🚪",
    "babyAnalogy": "Pintu gerbang istana depan: menyambut semua tamu dari luar, memeriksa karcis login, membatasi antrean, dan mengarahkan tamu ke kamar microservice yang tepat.",
    "detail": "Komponen server perantara yang bertindak sebagai pintu masuk tunggal bagi klien ke sekelompok microservices internal, menangani rute, otentikasi, dan limit."
  },
  {
    "term": "Backend for Frontend (BFF)",
    "category": "Web, Cloud & DevOps",
    "icon": "👔",
    "babyAnalogy": "Punya dua asisten pribadi berbeda: satu asisten menyiapkan piring porsi mungil untuk aplikasi HP, satu asisten menyiapkan piring porsi raksasa untuk layar laptop.",
    "detail": "Pola arsitektur desain di mana lapisan backend terpisah dibuat khusus untuk memenuhi kebutuhan jenis antarmuka klien tertentu (seperti mobile vs web)."
  },
  {
    "term": "Database Connection Pooling in Web",
    "category": "Web, Cloud & DevOps",
    "icon": "🏊",
    "babyAnalogy": "Menjaga 20 pipa selang database tetap terbuka dan siap dipakai oleh jutaan pengunjung web agar server tidak kelelahan membuka tutup pipa baru tiap detik.",
    "detail": "Praktik mengelola kumpulan koneksi basis data yang dapat digunakan kembali untuk menangani lonjakan lalu lintas aplikasi web secara efisien."
  },
  {
    "term": "Cache-Control Headers",
    "category": "Web, Cloud & DevOps",
    "icon": "🏷️",
    "babyAnalogy": "Label masa kedaluwarsa pada kotak makanan: memberi tahu browser 'Gambar logo ini boleh kamu simpan di lemari kulkasmu selama 1 tahun tanpa perlu download ulang!'.",
    "detail": "Header HTTP yang menentukan arahan kebijakan caching untuk browser dan proxy perantara (seperti max-age, no-cache, no-store, private, public)."
  },
  {
    "term": "ETag (Entity Tag)",
    "category": "Web, Cloud & DevOps",
    "icon": "🏷️",
    "babyAnalogy": "Sidik jari versi berkas: browser bertanya 'Apakah sidik jari logo ini masih sama?'; jika masih sama, server menjawab '304 Not Modified, pakai saja yang di kulkasmu!'.",
    "detail": "Header respons HTTP yang bertindak sebagai pengenal unik untuk versi tertentu dari sumber daya web, digunakan untuk validasi cache bersyarat."
  },
  {
    "term": "CDN Edge Caching",
    "category": "Web, Cloud & DevOps",
    "icon": "🏪",
    "babyAnalogy": "Menyimpan foto profil dan video di rak minimarket cabang kota terdekat agar pengguna tidak perlu mengambil foto melintasi samudera ke benua lain.",
    "detail": "Penyimpanan sementara konten web statis dan dinamis pada server titik kehadiran (PoP) edge CDN yang dekat secara geografis dengan pengguna."
  },
  {
    "term": "Load Balancer (Layer 4 vs Layer 7)",
    "category": "Web, Cloud & DevOps",
    "icon": "⚖️",
    "babyAnalogy": "Layer 4 membagi antrean berdasarkan nomor pintu IP/Port seperti polisi parkir; Layer 7 membaca isi surat HTTP di dalamnya (misal /video diarahkan ke server video).",
    "detail": "L4 mendistribusikan lalu lintas pada lapisan transport (TCP/UDP) tanpa membaca data; L7 mendistribusikan pada lapisan aplikasi berdasarkan konten URL, cookie, atau header."
  },
  {
    "term": "Horizontal Scaling vs Vertical Scaling",
    "category": "Web, Cloud & DevOps",
    "icon": "🏢",
    "babyAnalogy": "Vertical = menyuntik vitamin ke 1 orang agar tubuhnya jadi raksasa Hulk (tambah RAM); Horizontal = mengajak 10 teman baru bekerja bersamaan.",
    "detail": "Vertical scaling (Scale Up) menambah kapasitas daya pada satu mesin server; Horizontal scaling (Scale Out) menambah jumlah node mesin server."
  },
  {
    "term": "Stateless Authentication (JWT) vs Stateful (Sessions)",
    "category": "Web, Cloud & DevOps",
    "icon": "🎟️",
    "babyAnalogy": "JWT seperti surat izin bermeterai di saku pengguna yang dibaca server tanpa melihat buku tamu; Session seperti kartu member yang wajib dicari di buku tamu server.",
    "detail": "Stateless auth memverifikasi token kriptografis tanpa pencarian basis data; Stateful auth menyimpan data sesi aktif di memori atau basis data server."
  },
  {
    "term": "CORS Preflight Request (OPTIONS)",
    "category": "Web, Cloud & DevOps",
    "icon": "✈️",
    "babyAnalogy": "Surat permohonan izin pendahuluan: browser mengirim pertanyaan sopan dengan metode OPTIONS: 'Bolehkah saya mengirim paket data ini ke server Anda?'.",
    "detail": "Permintaan HTTP OPTIONS otomatis yang dikirim browser sebelum permintaan utama untuk memeriksa apakah server menerima permintaan lintas domain tersebut."
  },
  {
    "term": "Server-Sent Events (SSE) Reconnection",
    "category": "Web, Cloud & DevOps",
    "icon": "🔄",
    "babyAnalogy": "Jika tali telepon radio sempat putus terkena angin, browser otomatis menyambung kembali dan bilang: 'Tolong lanjutkan kabar mulai dari pesan nomor 42 ya!'.",
    "detail": "Fitur bawaan protokol SSE di mana browser secara otomatis mencoba menghubungkan kembali koneksi yang terputus dengan menyertakan header Last-Event-ID."
  },
  {
    "term": "Web Workers",
    "category": "Web, Cloud & DevOps",
    "icon": "👷",
    "babyAnalogy": "Menyewa kuli pembantu di ruangan sebelah: mengerjakan hitungan matematika berat di latar belakang agar layar antarmuka pengguna tidak macet membeku.",
    "detail": "Fitur JavaScript browser yang menjalankan skrip di thread latar belakang terpisah dari thread eksekusi utama aplikasi web."
  },
  {
    "term": "IndexedDB",
    "category": "Web, Cloud & DevOps",
    "icon": "🗄️",
    "babyAnalogy": "Lemari database sungguhan di dalam browser pengguna yang mampu menyimpan ribuan data dokumen dan file gambar besar untuk aplikasi offline.",
    "detail": "Sistem basis data transaksional NoSQL sisi klien berdaya tampung besar yang tertanam di dalam browser web."
  },
  {
    "term": "Lighthouse (Web Performance Audit)",
    "category": "Web, Cloud & DevOps",
    "icon": "🩺",
    "babyAnalogy": "Dokter pemeriksa kesehatan web buatan Google yang memberi rapor nilai 0-100 untuk kecepatan, keramahan disabilitas, dan kebersihan kode webmu.",
    "detail": "Alat otomatis sumber terbuka dari Google untuk mengaudit dan meningkatkan kualitas performa, aksesibilitas, SEO, dan PWA pada halaman web."
  },
  {
    "term": "Core Web Vitals (LCP, FID/INP, CLS)",
    "category": "Web, Cloud & DevOps",
    "icon": "📊",
    "babyAnalogy": "Tiga syarat lulus ujian kecepatan Google: seberapa cepat gambar utama muncul (LCP), seberapa gesit tombol merespons (INP), dan layar tidak melompat-lompat (CLS).",
    "detail": "Kumpulan metrik standar terstandarisasi Google yang mengukur pengalaman pengguna nyata dalam hal kecepatan pemuatan, interaktivitas, dan stabilitas visual."
  },
  {
    "term": "Lazy Loading",
    "category": "Web, Cloud & DevOps",
    "icon": "💤",
    "babyAnalogy": "Tidur santai: gambar-gambar di bagian bawah halaman web tidak perlu diunduh sekarang; baru diunduh begitu layar digulir mendekatinya.",
    "detail": "Strategi optimasi yang menunda pemuatan sumber daya non-kritis (seperti gambar atau modul) sampai benar-benar dibutuhkan oleh pengguna."
  },
  {
    "term": "Critical Rendering Path",
    "category": "Web, Cloud & DevOps",
    "icon": "🛣️",
    "babyAnalogy": "Jalan tol prioritas utama yang harus dilalui browser: dari mengunyah HTML dan CSS sampai titik pertama piksel warna muncul di layar mata pengguna.",
    "detail": "Urutan langkah yang dilalui browser untuk mengubah HTML, CSS, dan JavaScript menjadi piksel aktual yang dirender di layar display."
  },
  {
    "term": "HTTP/2 vs HTTP/3 (QUIC)",
    "category": "Web, Cloud & DevOps",
    "icon": "🚀",
    "babyAnalogy": "HTTP/2 mengalirkan banyak percakapan di 1 pipa TCP; HTTP/3 melesat lebih kencang lagi menggunakan protokol kilat QUIC di atas UDP yang anti-macet.",
    "detail": "Revisi protokol web: HTTP/2 memperkenalkan multiplexing biner; HTTP/3 menggantikan TCP dengan QUIC (berbasis UDP) untuk mengurangi latensi handshake."
  },
  {
    "term": "Multiplexing (HTTP/2)",
    "category": "Web, Cloud & DevOps",
    "icon": "🚰",
    "babyAnalogy": "Satu pipa air besar yang bisa mengalirkan paket gambar, lagu, dan teks bersamaan tanpa harus menunggu giliran satu per satu di pintu pipa terpisah.",
    "detail": "Kemampuan HTTP/2 untuk mengirimkan beberapa permintaan dan respons secara simultan melalui satu koneksi TCP tunggal tanpa antrean head-of-line."
  },
  {
    "term": "Server Push (HTTP/2)",
    "category": "Web, Cloud & DevOps",
    "icon": "🎁",
    "babyAnalogy": "Pelayan ramah yang langsung membawakan sendok dan garpu bersamaan dengan piring nasi sebelum kamu sempat memintanya.",
    "detail": "Fitur HTTP/2 di mana server secara proaktif mengirimkan sumber daya web tambahan ke cache browser sebelum diminta secara eksplisit."
  },
  {
    "term": "Brotli Compression",
    "category": "Web, Cloud & DevOps",
    "icon": "🗜️",
    "babyAnalogy": "Mesin pres baju modern buatan Google yang memeras ukuran file teks web jauh lebih tipis dan hemat kuota daripada kompresi Gzip lama.",
    "detail": "Algoritma kompresi data lossless tujuan umum modern yang menawarkan rasio kompresi teks lebih superior dibandingkan gzip untuk web."
  },
  {
    "term": "WebAssembly (WASM)",
    "category": "Web, Cloud & DevOps",
    "icon": "⚡",
    "babyAnalogy": "Membawa mesin roket bahasa C++ atau Rust berjalan langsung di dalam tab browser dengan kecepatan hampir menyamai aplikasi komputer asli.",
    "detail": "Format instruksi biner portabel berkinerja tinggi yang memungkinkan eksekusi kode dekat dengan kecepatan native di dalam browser web modern."
  },
  {
    "term": "Serverless Cold Start",
    "category": "Web, Cloud & DevOps",
    "icon": "🥶",
    "babyAnalogy": "Koki yang baru dibangunkan dari tidur lelap: butuh beberapa detik untuk mencuci muka dan menyalakan kompor sebelum mulai memasak pesanan pertamamu.",
    "detail": "Penundaan latensi awal yang terjadi saat fungsi serverless dieksekusi untuk pertama kalinya atau setelah periode tidak aktif saat kontainer baru dibuat."
  },
  {
    "term": "JAMstack Static Revalidation (ISR)",
    "category": "Web, Cloud & DevOps",
    "icon": "🔄",
    "babyAnalogy": "Kue kaleng yang otomatis diperbarui secara gaib di latar belakang setiap 60 detik jika ada berita baru, sehingga pembaca tetap mendapat kue segar secepat kilat.",
    "detail": "Incremental Static Regeneration; fitur yang memungkinkan pembaruan halaman statis di latar belakang tanpa perlu membangun ulang seluruh situs."
  },
  {
    "term": "Micro-Frontend Module Federation",
    "category": "Web, Cloud & DevOps",
    "icon": "🧩",
    "babyAnalogy": "Sihir Webpack 5 yang memungkinkan satu aplikasi meminjam dan menjalankan komponen hidup dari aplikasi lain yang sedang berjalan di server lain.",
    "detail": "Fitur arsitektur Webpack yang memungkinkan beberapa build independen untuk saling berbagi dan mengonsumsi modul kode JavaScript saat runtime."
  },
  {
    "term": "BFF Pattern (Backend for Frontend)",
    "category": "Web, Cloud & DevOps",
    "icon": "👔",
    "babyAnalogy": "Pintu perantara khusus yang mengubah format data server agar pas dan ringan untuk layar HP, terpisah dari pintu untuk layar laptop kantor.",
    "detail": "Pola desain arsitektur yang mengoptimalkan interaksi antara antarmuka pengguna frontend spesifik dan kumpulan microservices backend."
  },
  {
    "term": "Zero-Downtime Deployment (Blue-Green / Rolling)",
    "category": "Web, Cloud & DevOps",
    "icon": "🔄",
    "babyAnalogy": "Mengganti roda mobil balap saat mobil sedang melaju kencang di sirkuit tanpa mobil harus berhenti sedetik pun dan tanpa penumpang merasa terganggu.",
    "detail": "Strategi penyebaran rilis perangkat lunak baru yang memastikan ketersediaan layanan terus berjalan 100% tanpa adanya gangguan atau downtime bagi pengguna."
  },
  {
    "term": "Content Security Policy Nonce",
    "category": "Web, Cloud & DevOps",
    "icon": "🎲",
    "babyAnalogy": "Kata sandi acak sekali pakai yang ditempelkan di stiker skrip: hanya skrip yang punya nomor stempel yang sama persis yang diizinkan menyala oleh browser.",
    "detail": "Nilai acak kriptografis unik satu kali pakai (Number used once) yang disematkan pada tag skrip untuk mengizinkan eksekusi inline secara aman di bawah CSP."
  },
  {
    "term": "Subresource Integrity (SRI)",
    "category": "Web, Cloud & DevOps",
    "icon": "🔒",
    "babyAnalogy": "Gembok segel lilin pada berkas yang dipinjam dari internet luar: memastikan berkas tersebut tidak pernah diubah atau disusupi racun oleh hacker di tengah jalan.",
    "detail": "Fitur keamanan web yang memungkinkan browser memverifikasi bahwa berkas yang diambil (seperti dari CDN) cocok dengan hash kriptografis yang diharapkan."
  },
  {
    "term": "HTTP Strict Transport Security (HSTS)",
    "category": "Web, Cloud & DevOps",
    "icon": "🛡️",
    "babyAnalogy": "Perintah tegas dari bank: 'Mulai detik ini, browsermu DILARANG KERAS membuka situs kami menggunakan HTTP biasa; wajib selalu memakai HTTPS bergembok!'.",
    "detail": "Mekanisme kebijakan keamanan web yang memaksa browser hanya berkomunikasi dengan server menggunakan koneksi HTTPS yang aman."
  },
  {
    "term": "X-Frame-Options (Clickjacking Protection)",
    "category": "Web, Cloud & DevOps",
    "icon": "🖼️",
    "babyAnalogy": "Melarang situs nakal memasang jendela kaca tembus pandang di atas tombol transfer bank milikmu agar kamu tidak tertipu mengklik tombol rahasia.",
    "detail": "Header respons HTTP yang mengontrol apakah browser diizinkan untuk merender halaman dalam tag frame, iframe, embed, atau object."
  },
  {
    "term": "OpenAPI Specification (Swagger)",
    "category": "Web, Cloud & DevOps",
    "icon": "📖",
    "babyAnalogy": "Buku panduan dan etalase interaktif API yang otomatis dibuat rapi: programmer bisa membaca cara pakai dan langsung mencoba tombol tes di tempat.",
    "detail": "Format deskripsi standar untuk REST API yang dapat dibaca mesin dan manusia, memungkinkan dokumentasi interaktif dan pembuatan kode otomatis."
  },
  {
    "term": "Serverless Framework (AWS SAM, Serverless)",
    "category": "Web, Cloud & DevOps",
    "icon": "🛠️",
    "babyAnalogy": "Kotak perkakas cetak biru yang menerbangkan ratusan fungsi koki terbang dan database serverless ke awan hanya dengan satu baris perintah konsol.",
    "detail": "Kerangka kerja sumber terbuka untuk membangun, menguji, dan menyebarkan aplikasi arsitektur serverless ke berbagai penyedia cloud publik."
  },
  {
    "term": "Web Push Notifications (VAPID)",
    "category": "Web, Cloud & DevOps",
    "icon": "🔔",
    "babyAnalogy": "Sistem pos surat pemberitahuan yang aman dan terdaftar resmi antara server dan browser HP agar pesan diskon bisa muncul di layar ponsel.",
    "detail": "Voluntary Application Server Identification; spesifikasi kriptografis untuk mengamankan dan mengotentikasi pengiriman notifikasi push web."
  },
  {
    "term": "Progressive Enhancement vs Graceful Degradation",
    "category": "Web, Cloud & DevOps",
    "icon": "🪜",
    "babyAnalogy": "Progressive = mulai dari sepeda ontel sederhana lalu ditambah mesin jet di HP modern; Degradation = mobil mewah yang tetap bisa jalan pelan walau lampunya putus.",
    "detail": "Dua filosofi desain web: Progressive Enhancement membangun dari fungsionalitas dasar ke fitur canggih; Graceful Degradation merancang fitur penuh dengan fallback."
  },
  {
    "term": "Static Asset Fingerprinting (Hashing)",
    "category": "Web, Cloud & DevOps",
    "icon": "🏷️",
    "babyAnalogy": "Menempelkan kode acak unik di ujung nama berkas (style.a8f2c.css): jika kamu mengedit kode warna, namanya otomatis berubah sehingga browser langsung mengunduh yang baru.",
    "detail": "Teknik menyematkan hash konten ke nama berkas aset web statis untuk memungkinkan caching browser jangka panjang yang aman dari masalah pembaruan."
  },
  {
    "term": "Edge Compute Workers (Cloudflare / Fastly)",
    "category": "Web, Cloud & DevOps",
    "icon": "⚡",
    "babyAnalogy": "Pasukan pelayan cilik yang bertebaran di 300 kota di seluruh dunia: mengeksekusi kode mini dalam 1 milidetik tepat sebelum paket menyentuh browser pengguna.",
    "detail": "Lingkungan eksekusi komputasi serverless yang berjalan pada jaringan edge terdistribusi secara global dengan latensi sangat rendah."
  },
  {
    "term": "Cloud Computing (Komputasi Awan)",
    "category": "Web, Cloud & DevOps",
    "icon": "☁️",
    "babyAnalogy": "Menyewa komputer super canggih dan gudang data raksasa milik Google/Amazon lewat kabel internet tanpa perlu membeli komputer fisik di rumah.",
    "detail": "Penyediaan sumber daya komputasi (server, penyimpanan, basis data, jaringan, perangkat lunak) sesuai permintaan melalui internet dengan model bayar sesuai penggunaan."
  },
  {
    "term": "IaaS (Infrastructure as a Service)",
    "category": "Web, Cloud & DevOps",
    "icon": "🏗️",
    "babyAnalogy": "Menyewa sebidang tanah kosong dan semen bata di awan: kamu bebas membangun rumah atau gedung apa saja dari fondasi paling dasar.",
    "detail": "Model layanan cloud di mana penyedia menyewakan infrastruktur komputasi dasar seperti server virtual, jaringan, dan penyimpanan disk (misal AWS EC2)."
  },
  {
    "term": "PaaS (Platform as a Service)",
    "category": "Web, Cloud & DevOps",
    "icon": "🍳",
    "babyAnalogy": "Menyewa dapur restoran yang sudah lengkap dengan kompor, gas, dan wajan: kamu cukup membawa resep kode aplikasimu dan langsung memasak.",
    "detail": "Model layanan cloud yang menyediakan lingkungan pengembangan dan penyebaran perangkat lunak lengkap tanpa perlu mengelola server atau sistem operasi."
  },
  {
    "term": "SaaS (Software as a Service)",
    "category": "Web, Cloud & DevOps",
    "icon": "🧁",
    "babyAnalogy": "Membeli kue bolu siap santap di etalase toko: kamu tinggal menikmati Google Docs, Spotify, atau Gmail langsung lewat browser tanpa perlu pusing memasak.",
    "detail": "Model distribusi perangkat lunak di mana aplikasi di-host oleh penyedia layanan dan disediakan untuk pengguna akhir melalui internet."
  },
  {
    "term": "Virtual Machine (VM)",
    "category": "Web, Cloud & DevOps",
    "icon": "💻",
    "babyAnalogy": "Komputer bohongan di dalam komputer sungguhan: lengkap dengan sistem operasi Windows atau Linux sendiri yang terisolasi aman.",
    "detail": "Emulasi perangkat lunak dari sistem komputer fisik yang berjalan di atas perangkat keras fisik menggunakan hypervisor."
  },
  {
    "term": "Hypervisor (Type 1 Bare-Metal vs Type 2 Hosted)",
    "category": "Web, Cloud & DevOps",
    "icon": "🎩",
    "babyAnalogy": "Wasit manajer komputer: Type 1 langsung menguasai mesin keras tanpa perantara OS; Type 2 menumpang di atas Windows seperti aplikasi VirtualBox biasa.",
    "detail": "Lapisan perangkat lunak atau firmware yang membuat, menjalankan, dan mengelola mesin virtual (Type 1 langsung di hardware, Type 2 di atas OS induk)."
  },
  {
    "term": "Container (Docker)",
    "category": "Web, Cloud & DevOps",
    "icon": "📦",
    "babyAnalogy": "Kardus bekal makan portabel yang sudah berisi nasi, lauk, dan sendok lengkap: pasti bisa dimakan di mana saja dengan rasa yang sama persis tanpa membawa kulkas utuh.",
    "detail": "Paket perangkat lunak standar ringan yang membungkus kode aplikasi beserta seluruh dependensinya agar dapat berjalan secara konsisten di lingkungan komputasi apa pun."
  },
  {
    "term": "Docker Image vs Docker Container",
    "category": "Web, Cloud & DevOps",
    "icon": "📑",
    "babyAnalogy": "Image = resep cetak biru kue yang dibekukan di buku; Container = kue hidup nyata yang sedang dipanggang dan berjalan di atas oven Docker.",
    "detail": "Docker Image adalah template hanya-baca statis yang berisi instruksi pembuatan; Docker Container adalah instansiasi hidup yang dapat dijalankan dari image tersebut."
  },
  {
    "term": "Dockerfile",
    "category": "Web, Cloud & DevOps",
    "icon": "📜",
    "babyAnalogy": "Surat resep langkah demi langkah merakit kontainer: 'Ambil Linux Ubuntu, pasang Python, salin kode aplikasi saya, lalu nyalakan port 80!'.",
    "detail": "Dokumen teks yang berisi serangkaian instruksi dan perintah baris perintah yang digunakan oleh Docker untuk membangun image secara otomatis."
  },
  {
    "term": "Docker Compose (docker-compose.yml)",
    "category": "Web, Cloud & DevOps",
    "icon": "🎼",
    "babyAnalogy": "Konduktor orkestra kontainer: sekali ketik 'docker compose up', server web, database MySQL, dan cache Redis otomatis menyala bersamaan dan saling tersambung.",
    "detail": "Alat untuk mendefinisikan dan menjalankan aplikasi multi-kontainer Docker menggunakan berkas konfigurasi format YAML tunggal."
  },
  {
    "term": "Kubernetes (K8s)",
    "category": "Web, Cloud & DevOps",
    "icon": "☸️",
    "babyAnalogy": "Kapten nakhoda kapal kontainer raksasa: jika ada satu kontainer yang jatuh tenggelam, sang kapten otomatis menyalakan kontainer baru seketika tanpa ada yang tahu.",
    "detail": "Platform orkestrasi kontainer sumber terbuka untuk mengotomatisasi penyebaran, penskalaan, dan pengelolaan beban kerja aplikasi terkontainerisasi."
  },
  {
    "term": "Kubernetes Pod",
    "category": "Web, Cloud & DevOps",
    "icon": "🐳",
    "babyAnalogy": "Polong kacang terkecil di kebun Kubernetes: di dalamnya ada satu atau dua kontainer sahabat karib yang berbagi alamat IP dan kamar memori yang sama.",
    "detail": "Unit komputasi terkecil yang dapat disebarkan dan dikelola dalam arsitektur Kubernetes, berisi satu atau beberapa kontainer yang berlokasi sama."
  },
  {
    "term": "Kubernetes Deployment",
    "category": "Web, Cloud & DevOps",
    "icon": "📋",
    "babyAnalogy": "Perintah resmi dari bos: 'Saya ingin selalu ada 5 Pod yang bertugas melayani pelanggan; jika ada yang mati, buatkan penggantinya sekarang juga!'.",
    "detail": "Pengontrol tingkat tinggi di Kubernetes yang mengelola siklus hidup Pod secara deklaratif, menyediakan pembaruan bergulir (rolling updates) dan pemulihan mandiri."
  },
  {
    "term": "Kubernetes Service (ClusterIP, NodePort, LoadBalancer)",
    "category": "Web, Cloud & DevOps",
    "icon": "🚪",
    "babyAnalogy": "Pintu resepsionis tetap yang punya nomor telepon abadi: pelanggan tidak perlu pusing mencari nomor Pod yang sering mati dan berganti-ganti.",
    "detail": "Abstraksi RESTful di Kubernetes yang mendefinisikan kumpulan logis Pod dan kebijakan rute jaringan untuk mengaksesnya secara stabil."
  },
  {
    "term": "Kubernetes Ingress",
    "category": "Web, Cloud & DevOps",
    "icon": "🌐",
    "babyAnalogy": "Pintu gerbang tol luar kota: menerima mobil dari internet umum dan mengarahkannya: jalan ke kiri untuk /toko dan jalan ke kanan untuk /login.",
    "detail": "Objek API Kubernetes yang mengelola akses eksternal pengguna ke layanan di dalam kluster, menyediakan perutean HTTP/HTTPS, SSL/TLS, dan penyeimbangan beban."
  },
  {
    "term": "DevOps (Development & Operations)",
    "category": "Web, Cloud & DevOps",
    "icon": "♾️",
    "babyAnalogy": "Budaya persahabatan erat: programmer pembuat kode dan teknisi penjaga server bekerja sama seperti satu keluarga dalam lingkaran tanpa batas.",
    "detail": "Kombinasi filosofi budaya, praktik rekayasa, dan alat bantu yang meningkatkan kemampuan organisasi untuk merilis aplikasi pada kecepatan tinggi."
  },
  {
    "term": "Infrastructure as Code (IaC - Terraform)",
    "category": "Web, Cloud & DevOps",
    "icon": "🏗️",
    "babyAnalogy": "Membangun 100 server cloud hanya dengan menulis beberapa baris teks skrip cetak biru; tekan tombol enter, 100 server langsung berdiri tegak otomatis.",
    "detail": "Praktik pengelolaan dan penyediaan infrastruktur teknologi informasi melalui berkas kode definisi mesin yang dapat dibaca daripada konfigurasi manual."
  },
  {
    "term": "Terraform State File (terraform.tfstate)",
    "category": "Web, Cloud & DevOps",
    "icon": "🗺️",
    "babyAnalogy": "Peta kenyataan tanah milik Terraform: mencatat secara persis gedung server mana saja yang sudah benar-benar berdiri di awan saat ini.",
    "detail": "Berkas status khusus yang digunakan oleh Terraform untuk memetakan sumber daya dunia nyata ke konfigurasi kode Anda dan melacak metadata sistem."
  },
  {
    "term": "Ansible (Playbook)",
    "category": "Web, Cloud & DevOps",
    "icon": "📜",
    "babyAnalogy": "Surat perintah mandor otomatis tanpa agen: sekali kirim, 500 server Linux di seluruh dunia serentak menginstal pembaruan keamanan dalam 10 detik.",
    "detail": "Alat automasi TI sumber terbuka berbasis agen-bebas (agentless) yang mengotomatisasi penyediaan perangkat lunak, manajemen konfigurasi, dan penyebaran."
  },
  {
    "term": "Continuous Integration (CI)",
    "category": "Web, Cloud & DevOps",
    "icon": "🧪",
    "babyAnalogy": "Setiap kali programmer menggabungkan potongan kode barunya, robot otomatis langsung menguji ujian dan mendeteksi apakah ada baut yang longgar.",
    "detail": "Praktik pengembangan perangkat lunak di mana pengembang secara teratur menggabungkan perubahan kode ke repositori pusat yang memicu build dan uji otomatis."
  },
  {
    "term": "Continuous Delivery vs Continuous Deployment (CD)",
    "category": "Web, Cloud & DevOps",
    "icon": "🚀",
    "babyAnalogy": "Delivery = robot menyiapkan mobil baru siap pakai tapi menunggu tombol persetujuan manusia; Deployment = robot langsung menerbangkannya ke pelanggan otomatis.",
    "detail": "Continuous Delivery memastikan kode selalu siap rilis dengan persetujuan manual; Continuous Deployment menyebarkan setiap perubahan yang lolos uji langsung ke produksi."
  },
  {
    "term": "GitHub Actions / GitLab CI",
    "category": "Web, Cloud & DevOps",
    "icon": "🤖",
    "babyAnalogy": "Robot pekerja di dalam rumah kode GitHub: otomatis menyala saat kamu melakukan 'git push' untuk menguji kode dan mengirimkannya ke cloud.",
    "detail": "Platform otomatisasi alur kerja CI/CD terintegrasi yang memungkinkan pengembang membangun alur pipa otomatisasi langsung di dalam repositori Git."
  },
  {
    "term": "Artifact Repository (Docker Hub, Nexus)",
    "category": "Web, Cloud & DevOps",
    "icon": "📦",
    "babyAnalogy": "Gudang penyimpanan barang jadi: tempat menaruh kardus kontainer Docker atau paket aplikasi yang sudah selesai dirakit dan siap dikirim ke server.",
    "detail": "Repositori penyimpanan terpusat untuk mengelola biner hasil kompilasi, dependensi perangkat lunak, dan image kontainer terversi."
  },
  {
    "term": "Public Cloud vs Private Cloud vs Hybrid Cloud",
    "category": "Web, Cloud & DevOps",
    "icon": "☁️",
    "babyAnalogy": "Public = apartemen sewa bersama (AWS); Private = rumah milik pribadi sendiri; Hybrid = punya rumah pribadi tapi menyewa gudang tambahan di apartemen luar.",
    "detail": "Public cloud dimiliki penyedia pihak ketiga; Private cloud didedikasikan untuk satu organisasi tunggal; Hybrid cloud menggabungkan keduanya secara terintegrasi."
  },
  {
    "term": "Multi-Cloud Strategy",
    "category": "Web, Cloud & DevOps",
    "icon": "🌐",
    "babyAnalogy": "Tidak menaruh semua telur di satu keranjang: menyewa server di Google Cloud sekaligus Amazon Web Services agar jika satu padam, bisnis tetap hidup.",
    "detail": "Pendekatan strategis penggunaan beberapa penyedia layanan cloud publik yang berbeda secara bersamaan untuk mencegah keterikatan vendor (lock-in) dan redundansi."
  },
  {
    "term": "High Availability (HA)",
    "category": "Web, Cloud & DevOps",
    "icon": "🛡️",
    "babyAnalogy": "Sistem kebal mati: punya cadangan kembar yang selalu siaga di kota lain, sehingga jika ada gempa bumi di kota A, pengguna tidak merasakan gangguan sama sekali.",
    "detail": "Karakteristik sistem komputasi yang dirancang untuk beroperasi terus-menerus tanpa gangguan selama periode waktu tertentu dengan redundansi komponen."
  },
  {
    "term": "Fault Tolerance",
    "category": "Web, Cloud & DevOps",
    "icon": "🪂",
    "babyAnalogy": "Pesawat bermesin 4: jika ada satu mesin mati tersambar petir di udara, tiga mesin lainnya tetap mampu menerbangkan pesawat dengan selamat tanpa terjatuh.",
    "detail": "Kemampuan sistem untuk terus beroperasi dengan baik tanpa henti meskipun terjadi kegagalan perangkat keras atau komponen perangkat lunak di dalamnya."
  },
  {
    "term": "Disaster Recovery (DR)",
    "category": "Web, Cloud & DevOps",
    "icon": "🚒",
    "babyAnalogy": "Rencana darurat pemadam kebakaran: langkah penyelamatan jika seluruh gedung data center terbakar agar data cadangan di pulau lain bisa dipulihkan dalam 1 jam.",
    "detail": "Kebijakan dan prosedur yang dirancang untuk memulihkan infrastruktur TI dan akses ke data setelah bencana alam atau insiden kegagalan besar terjadi."
  },
  {
    "term": "RTO (Recovery Time Objective)",
    "category": "Web, Cloud & DevOps",
    "icon": "⏱️",
    "babyAnalogy": "Batas waktu stopwatch darurat: berapa jam paling lama toko boleh tutup sebelum tim IT berhasil menyalakan kembali sistem toko yang pingsan.",
    "detail": "Durasi waktu maksimum yang ditargetkan di mana proses bisnis harus dipulihkan setelah bencana terjadi untuk menghindari kerugian yang tidak dapat diterima."
  },
  {
    "term": "RPO (Recovery Point Objective)",
    "category": "Web, Cloud & DevOps",
    "icon": "💾",
    "babyAnalogy": "Batas kerugian data yang diikhlaskan: 'Jika data center meledak jam 12, data maksimal yang boleh hilang adalah transaksi 15 menit terakhir'.",
    "detail": "Usia data maksimum yang dapat ditoleransi untuk hilang akibat insiden gangguan sebelum pemulihan berhasil dilakukan."
  },
  {
    "term": "AWS (Amazon Web Services)",
    "category": "Web, Cloud & DevOps",
    "icon": "📦",
    "babyAnalogy": "Raksasa pelopor mall komputasi awan terbesar di dunia: menyediakan ratusan jenis mesin server, database, dan AI sewaan.",
    "detail": "Platform komputasi awan komprehensif dan paling banyak diadopsi di dunia yang ditawarkan oleh Amazon dengan lebih dari 200 layanan berfitur lengkap."
  },
  {
    "term": "Microsoft Azure",
    "category": "Web, Cloud & DevOps",
    "icon": "🟦",
    "babyAnalogy": "Mall komputasi awan buatan Microsoft yang sangat disukai perusahaan besar yang sudah akrab dengan Windows dan Office.",
    "detail": "Platform komputasi awan publik yang dikembangkan oleh Microsoft untuk membangun, menguji, menyebarkan, dan mengelola aplikasi di jaringan pusat data global."
  },
  {
    "term": "GCP (Google Cloud Platform)",
    "category": "Web, Cloud & DevOps",
    "icon": "🌈",
    "babyAnalogy": "Mall komputasi awan buatan Google: tempat paling asyik untuk mengolah data raksasa (Big Data), kecerdasan buatan canggih, dan mesin Kubernetes.",
    "detail": "Rangkaian layanan komputasi awan yang berjalan pada infrastruktur fisik yang sama yang digunakan Google secara internal untuk produk konsumennya."
  },
  {
    "term": "Object Storage (AWS S3, Google Cloud Storage)",
    "category": "Web, Cloud & DevOps",
    "icon": "🪣",
    "babyAnalogy": "Ember ajaib tanpa batas: kamu bisa melempar jutaan foto, video, dan berkas cadangan ke dalam ember ini tanpa perlu pusing memikirkan ukuran harddisk.",
    "detail": "Arsitektur penyimpanan data komputer yang mengelola data sebagai objek unik yang dapat diskalakan secara masif dan diakses melalui protokol HTTP API."
  },
  {
    "term": "Block Storage (AWS EBS) vs File Storage (EFS)",
    "category": "Web, Cloud & DevOps",
    "icon": "🧱",
    "babyAnalogy": "Block Storage = harddisk mentah yang ditancapkan ke 1 komputer; File Storage = map folder bersama yang bisa dibuka oleh 50 komputer sekaligus lewat jaringan.",
    "detail": "Block storage memperlakukan data sebagai blok mentah individual untuk satu instansi OS; File storage menyediakan sistem berkas hierarki bersama (NFS/SMB)."
  },
  {
    "term": "VPC (Virtual Private Cloud)",
    "category": "Web, Cloud & DevOps",
    "icon": "🏰",
    "babyAnalogy": "Komplek perumahan pribadi milikmu sendiri di dalam kota metropolitan awan yang dipagari tembok api dan tidak boleh dimasuki orang sembarangan.",
    "detail": "Jaringan virtual yang terisolasi secara logis dan didedikasikan untuk akun cloud Anda, memberikan kendali penuh atas rentang IP, subnet, dan gateway rute."
  },
  {
    "term": "Subnet (Public vs Private Subnet in Cloud)",
    "category": "Web, Cloud & DevOps",
    "icon": "🏘️",
    "babyAnalogy": "Public Subnet = teras depan rumah yang menghadap jalan raya internet; Private Subnet = brankas di kamar tidur belakang yang tidak punya pintu ke jalan luar.",
    "detail": "Subnet publik memiliki rute langsung ke Internet Gateway (IGW); Subnet privat tidak memiliki rute langsung ke internet luar dan dilindungi oleh NAT Gateway."
  },
  {
    "term": "NAT Gateway (Cloud)",
    "category": "Web, Cloud & DevOps",
    "icon": "🚪",
    "babyAnalogy": "Pintu rahasia satu arah: server database di kamar belakang boleh keluar mengunduh pembaruan antivirus dari internet, tapi hacker dari internet luar tidak bisa masuk.",
    "detail": "Layanan terkelola cloud yang memungkinkan instansi di subnet privat terhubung ke internet di luar VPC tanpa mengekspos alamat IP privat mereka."
  },
  {
    "term": "Internet Gateway (IGW)",
    "category": "Web, Cloud & DevOps",
    "icon": "🌐",
    "babyAnalogy": "Pintu gerbang tol utama yang menyambungkan komplek perumahan VPC milikmu dengan dunia luar internet publik sedunia.",
    "detail": "Komponen VPC yang dapat diskalakan dan redundan yang memungkinkan komunikasi dua arah antara instansi di VPC Anda dan internet."
  },
  {
    "term": "Auto Scaling Group (ASG)",
    "category": "Web, Cloud & DevOps",
    "icon": "📈",
    "babyAnalogy": "Pasukan karet yang lentur: jika pengunjung web membludak di malam tahun baru, jumlah server otomatis bertambah jadi 20; saat sepi, kembali jadi 2 server.",
    "detail": "Kumpulan instansi cloud yang secara otomatis menambah atau mengurangi jumlah server komputasi berdasarkan metrik beban permintaan lalu lintas aktual."
  },
  {
    "term": "Elastic Load Balancing (ALB / NLB in AWS)",
    "category": "Web, Cloud & DevOps",
    "icon": "⚖️",
    "babyAnalogy": "Polisi lalu lintas awan yang membagi jutaan mobil pengunjung merata ke puluhan server di belakangnya agar tidak ada server yang macet kepanasan.",
    "detail": "Layanan terkelola AWS yang mendistribusikan lalu lintas aplikasi masuk ke beberapa target (seperti instansi EC2, kontainer, dan alamat IP)."
  },
  {
    "term": "Serverless (AWS Lambda, Cloud Functions)",
    "category": "Web, Cloud & DevOps",
    "icon": "⚡",
    "babyAnalogy": "Koki terbang tanpa dapur: kamu cukup meletakkan selembar kertas kode; koki akan muncul dalam sekejap saat ada pesanan dan hilang lagi setelah selesai.",
    "detail": "Paradigma arsitektur komputasi di mana pengembang menulis kode fungsi murni tanpa perlu mengelola, memelihara, atau menyediakan mesin server fisik/virtual."
  },
  {
    "term": "CloudWatch / Prometheus",
    "category": "Web, Cloud & DevOps",
    "icon": "📊",
    "babyAnalogy": "Stetoskop dan termometer pemantau: mengukur grafik denyut nadi CPU, memori, dan lalu lintas server setiap detik dan mengirim SMS peringatan jika demam.",
    "detail": "Sistem pemantauan dan pengumpulan metrik deret waktu serta peringatan yang mengawasi kesehatan infrastruktur cloud dan aplikasi."
  },
  {
    "term": "Grafana",
    "category": "Web, Cloud & DevOps",
    "icon": "📈",
    "babyAnalogy": "Ruang kendali pesawat antariksa: layar dashboard penuh grafik warna-warni yang memvisualisasikan data metrik server dengan sangat indah dan jelas.",
    "detail": "Platform visualisasi dan analitik sumber terbuka interaktif untuk membuat grafik metrik, log, dan jejak dari berbagai sumber data (seperti Prometheus)."
  },
  {
    "term": "Log Aggregation (ELK Stack: Elasticsearch, Logstash, Kibana)",
    "category": "Web, Cloud & DevOps",
    "icon": "📚",
    "babyAnalogy": "Menyedot jutaan lembar catatan harian dari 100 server berbeda menjadi satu perpustakaan raksasa yang bisa dicari kata kuncinya dalam 1 detik.",
    "detail": "Arsitektur pengumpulan, pemrosesan, pengindeksan, dan visualisasi berkas catatan log terpusat dari seluruh lingkungan sistem aplikasi."
  },
  {
    "term": "APM (Application Performance Monitoring - Datadog, New Relic)",
    "category": "Web, Cloud & DevOps",
    "icon": "🩺",
    "babyAnalogy": "Kamera sinar-X yang melacak perjalanan sebutir paket data: menunjukkan secara persis baris kode mana atau kueri database mana yang membuat web melambat.",
    "detail": "Alat pemantauan perangkat lunak yang melacak kinerja transaksi aplikasi secara mendalam hingga ke tingkat jejak kode dan kueri SQL."
  },
  {
    "term": "OpenTelemetry (OTel)",
    "category": "Web, Cloud & DevOps",
    "icon": "🛰️",
    "babyAnalogy": "Bahasa stetoskop standar dunia: satu standar pengukur metrik, log, dan jejak yang bisa dibaca oleh alat pemantau apa saja tanpa terikat merek tertentu.",
    "detail": "Standar terbuka dan kerangka kerja observabilitas yang menyediakan API dan SDK bebas vendor untuk mengumpulkan telemetri sistem perangkat lunak."
  },
  {
    "term": "Chaos Engineering (Chaos Monkey)",
    "category": "Web, Cloud & DevOps",
    "icon": "🐒",
    "babyAnalogy": "Monyet nakal yang sengaja dilepas di ruang server: mencabut kabel server secara acak untuk menguji apakah sistemmu benar-benar tangguh kebal mati.",
    "detail": "Disiplin pengujian ketahanan sistem terdistribusi dengan sengaja menyuntikkan kegagalan realistis untuk membangun keyakinan dalam lingkungan produksi."
  },
  {
    "term": "Site Reliability Engineering (SRE)",
    "category": "Web, Cloud & DevOps",
    "icon": "👷",
    "babyAnalogy": "Pendekatan Google memperlakukan operasi server seperti masalah pemrograman: menggunakan matematika dan kode otomatis untuk menjaga web hidup 99.99%.",
    "detail": "Disiplin yang menerapkan prinsip rekayasa perangkat lunak pada masalah operasi TI dan infrastruktur untuk menciptakan sistem yang sangat andal dan skalabel."
  },
  {
    "term": "SLO (Service Level Objective) & SLI (Service Level Indicator)",
    "category": "Web, Cloud & DevOps",
    "icon": "🎯",
    "babyAnalogy": "SLI = termometer yang menunjukkan angka suhu sekarang; SLO = target nilai rapor yang disepakati (misal: 99.9% panggilan web harus berhasil cepat).",
    "detail": "SLI adalah ukuran kepatuhan tingkat layanan aktual yang terukur; SLO adalah target tingkat layanan spesifik yang disepakati secara internal oleh tim SRE."
  },
  {
    "term": "Error Budget",
    "category": "Web, Cloud & DevOps",
    "icon": "💰",
    "babyAnalogy": "Tabungan izin berbuat salah: 'Bulan ini kita masih boleh mengalami error selama 20 menit; jika tabungan habis, programmer dilarang merilis fitur baru!'.",
    "detail": "Ruang toleransi kesalahan maksimum yang diizinkan oleh SLO; digunakan untuk menyeimbangkan antara kecepatan inovasi fitur dan stabilitas sistem."
  },
  {
    "term": "GitOps (ArgoCD, Flux)",
    "category": "Web, Cloud & DevOps",
    "icon": "🚢",
    "babyAnalogy": "Menjadikan repositori Git sebagai satu-satunya buku petunjuk kebenaran: apa pun yang kamu tulis di Git, robot otomatis mengubah server nyata agar sama persis.",
    "detail": "Praktik operasional di mana konfigurasi infrastruktur dan aplikasi dideklarasikan secara deklaratif di Git dan disinkronkan secara otomatis ke kluster Kubernetes."
  },
  {
    "term": "Immutable Infrastructure",
    "category": "Web, Cloud & DevOps",
    "icon": "🧊",
    "babyAnalogy": "Prinsip jangan menambal baju robek: jika server sakit, jangan diobati di tempat; langsung hancurkan server lama dan gantikan dengan server baru yang segar.",
    "detail": "Paradigma infrastruktur di mana komponen server tidak pernah dimodifikasi setelah diterapkan; jika ada pembaruan, server baru dibangun dari awal."
  },
  {
    "term": "Canary Deployment",
    "category": "Web, Cloud & DevOps",
    "icon": "🐤",
    "babyAnalogy": "Burung kenari pembawa kabar: menguji fitur aplikasi baru ke 5% pengguna saja; jika burungnya selamat sehat, barulah fitur disebarkan ke 100% pengguna.",
    "detail": "Strategi penyebaran di mana versi baru perangkat lunak dirilis secara bertahap ke subset kecil pengguna sebelum diluncurkan ke seluruh populasi."
  },
  {
    "term": "Blue-Green Deployment",
    "category": "Web, Cloud & DevOps",
    "icon": "🟢",
    "babyAnalogy": "Dua panggung kembar: panggung Biru sedang ditonton jutaan penonton; panggung Hijau disiapkan di sebelahnya; sekali putar lampu sorot, penonton beralih ke Hijau tanpa jeda.",
    "detail": "Teknik rilis yang mengurangi waktu henti dengan menjalankan dua lingkungan produksi identik (satu aktif melayani, satu siaga menerima versi baru)."
  },
  {
    "term": "Feature Flags (Feature Toggles)",
    "category": "Web, Cloud & DevOps",
    "icon": "🔘",
    "babyAnalogy": "Saklar lampu rahasia di dalam kode: kamu bisa menyalakan atau mematikan fitur baru untuk pengguna tertentu dari jarak jauh tanpa perlu merilis ulang kode.",
    "detail": "Teknik pengembangan perangkat lunak yang memungkinkan pengembang mengaktifkan atau menonaktifkan fungsionalitas tertentu secara dinamis saat runtime."
  },
  {
    "term": "Helm (Kubernetes Package Manager)",
    "category": "Web, Cloud & DevOps",
    "icon": "🧭",
    "babyAnalogy": "Toko aplikasi satu klik untuk Kubernetes: mengemas ratusan berkas konfigurasi Pod, Service, dan Ingress menjadi satu paket 'Chart' yang rapi dipasang.",
    "detail": "Manajer paket untuk Kubernetes yang mengotomatisasi pembuatan, pengemasan, konfigurasi, dan penyebaran aplikasi dan layanan ke kluster K8s."
  },
  {
    "term": "Helm Chart",
    "category": "Web, Cloud & DevOps",
    "icon": "📦",
    "babyAnalogy": "Buku cetak biru paket Helm yang berisi template YAML lengkap dan nilai pengaturan variabel yang siap dijalankan di kluster mana saja.",
    "detail": "Kumpulan berkas yang mendeskripsikan kumpulan sumber daya Kubernetes terkait yang dipaketkan bersama untuk kemudahan manajemen versi."
  },
  {
    "term": "Service Mesh (Istio, Linkerd)",
    "category": "Web, Cloud & DevOps",
    "icon": "🕸️",
    "babyAnalogy": "Pasukan satpam pengawal yang menempel di sebelah setiap microservice: mengamankan obrolan antar layanan, membagi rute, dan mencatat siapa berbicara dengan siapa.",
    "detail": "Lapisan infrastruktur khusus yang dapat dikonfigurasi untuk menangani komunikasi antar layanan microservices (enkripsi mTLS, observabilitas, traffic shaping)."
  },
  {
    "term": "Sidecar Pattern",
    "category": "Web, Cloud & DevOps",
    "icon": "🏍️",
    "babyAnalogy": "Kereta gandeng di samping sepeda motor: kontainer pembantu yang menempel di sebelah kontainer utama untuk membantu mencatat log atau memegang gembok keamanan.",
    "detail": "Pola desain kontainer di mana kontainer pembantu dipasang bersama kontainer aplikasi utama di dalam Pod yang sama untuk menyediakan fungsionalitas pendukung."
  },
  {
    "term": "ConfigMap & Secret in Kubernetes",
    "category": "Web, Cloud & DevOps",
    "icon": "🔐",
    "babyAnalogy": "ConfigMap = papan pengumuman setelan umum; Secret = brankas baja terkunci rapat tempat menyimpan kata sandi database dan token API rahasia.",
    "detail": "Objek Kubernetes untuk memisahkan konfigurasi dari kode aplikasi: ConfigMap untuk data non-rahasia, Secret untuk data sensitif terenkripsi."
  },
  {
    "term": "Persistent Volume (PV) & PVC",
    "category": "Web, Cloud & DevOps",
    "icon": "💾",
    "babyAnalogy": "PV = tanah kavling harddisk abadi yang disediakan mandor; PVC = surat klaim permohonan dari Pod: 'Saya butuh tanah seluas 10 GB untuk menyimpan database!'.",
    "detail": "Abstraksi penyimpanan di Kubernetes: PersistentVolume adalah sumber daya penyimpanan kluster; PersistentVolumeClaim adalah permintaan penyimpanan oleh pengguna/Pod."
  },
  {
    "term": "StatefulSet in Kubernetes",
    "category": "Web, Cloud & DevOps",
    "icon": "🏛️",
    "babyAnalogy": "Pasukan prajurit berbaris yang punya nomor dada urut permanen (db-0, db-1, db-2) dan masing-masing punya loker lemari harddisk pribadi yang tidak tertukar.",
    "detail": "Beban kerja Kubernetes yang mengelola penyebaran sekumpulan Pod dengan identitas jaringan dan penyimpanan persisten yang unik dan berurutan."
  },
  {
    "term": "DaemonSet in Kubernetes",
    "category": "Web, Cloud & DevOps",
    "icon": "👻",
    "babyAnalogy": "Satpam piket yang wajib hadir tepat 1 orang di setiap lantai gedung komputer: bertugas menyapu debu atau mengumpulkan log di setiap mesin fisik.",
    "detail": "Pengontrol Kubernetes yang memastikan bahwa semua (atau sebagian) node menjalankan tepat satu salinan Pod tertentu (umumnya untuk agen log dan pemantauan)."
  },
  {
    "term": "Horizontal Pod Autoscaler (HPA)",
    "category": "Web, Cloud & DevOps",
    "icon": "📐",
    "babyAnalogy": "Detektor keringat Kubernetes: jika melihat Pod mulai kepanasan di atas 80% CPU, HPA otomatis menambah jumlah Pod dari 2 menjadi 10.",
    "detail": "Komponen Kubernetes yang secara otomatis menskalakan jumlah Pod dalam deployment atau replica set berdasarkan pemanfaatan CPU atau metrik khusus."
  },
  {
    "term": "Cluster Autoscaler",
    "category": "Web, Cloud & DevOps",
    "icon": "🚜",
    "babyAnalogy": "Mandor yang memesan komputer fisik baru dari Amazon saat melihat semua tanah kavling komputer lama sudah penuh sesak oleh tenda-tenda Pod.",
    "detail": "Alat Kubernetes yang secara otomatis menyesuaikan ukuran kluster dengan menambah atau menghapus node mesin virtual saat Pod tidak dapat dijadwalkan."
  },
  {
    "term": "Kubelet",
    "category": "Web, Cloud & DevOps",
    "icon": "👷",
    "babyAnalogy": "Mandor pekerja di setiap mesin komputer fisik yang memastikan kontainer yang disuruh oleh kapten Kubernetes benar-benar hidup sehat di komputernya.",
    "detail": "Agen utama yang berjalan pada setiap node pekerja di kluster Kubernetes, bertanggung jawab untuk memastikan kontainer berjalan di dalam Pod sesuai spesifikasi."
  },
  {
    "term": "Kube-proxy",
    "category": "Web, Cloud & DevOps",
    "icon": "🚦",
    "babyAnalogy": "Polisi lalu lintas di setiap komputer pekerja yang mengatur kabel jalur pipa jaringan agar paket data bisa melompat tepat ke Pod yang dituju.",
    "detail": "Proksi jaringan yang berjalan pada setiap node di kluster Kubernetes, memelihara aturan jaringan untuk memungkinkan komunikasi jaringan ke Pod dari dalam/luar."
  },
  {
    "term": "ETCD in Kubernetes",
    "category": "Web, Cloud & DevOps",
    "icon": "📓",
    "babyAnalogy": "Buku harian rahasia suci Kubernetes: mencatat semua status kluster, berapa pod yang hidup, dan siapa memegang kunci apa dalam brankas yang sangat aman.",
    "detail": "Penyimpanan nilai kunci terdistribusi yang konsisten dan sangat tersedia yang digunakan sebagai penyimpanan data cadangan Kubernetes untuk semua data kluster."
  },
  {
    "term": "Control Plane (K8s Master Node)",
    "category": "Web, Cloud & DevOps",
    "icon": "🧠",
    "babyAnalogy": "Otak markas komando Kubernetes: tempat berkumpulnya API Server, Scheduler pembagi tugas, Controller manajer, dan buku catatan ETCD.",
    "detail": "Kumpulan komponen inti Kubernetes (kube-apiserver, etcd, kube-scheduler, kube-controller-manager) yang membuat keputusan global tentang kluster."
  },
  {
    "term": "Secrets Management (HashiCorp Vault)",
    "category": "Web, Cloud & DevOps",
    "icon": "🏛️",
    "babyAnalogy": "Brankas Swiss tercanggih: tempat menyimpan ribuan kunci sandi, token API, dan sertifikat; bisa membuatkan kunci sekali pakai yang hancur sendiri dalam 1 jam.",
    "detail": "Sistem manajemen rahasia terpusat untuk mengamankan, menyimpan, dan mengontrol akses ketat ke token, kata sandi, sertifikat, dan kunci enkripsi."
  },
  {
    "term": "Cloud IAM (Identity and Access Management)",
    "category": "Web, Cloud & DevOps",
    "icon": "🪪",
    "babyAnalogy": "Buku izin resmi perusahaan: menentukan secara persis siapa orangnya (Who), apa kartu jabatannya (Role), dan tombol mana saja yang boleh disentuhnya (Permission).",
    "detail": "Kerangka kerja keamanan cloud yang memastikan orang dan entitas yang tepat memiliki akses yang sesuai ke sumber daya teknologi yang ditentukan."
  },
  {
    "term": "Principle of Least Privilege (PoLP)",
    "category": "Web, Cloud & DevOps",
    "icon": "🤏",
    "babyAnalogy": "Prinsip jangan pelit tapi hati-hati: hanya berikan kunci yang benar-benar dibutuhkan untuk tugasnya hari ini; jangan berikan kunci brankas emas kepada tukang sapu.",
    "detail": "Konsep keamanan komputer di mana pengguna, program, atau proses hanya diberikan hak istimewa akses minimum mutlak yang diperlukan untuk melakukan tugasnya."
  },
  {
    "term": "Multi-Factor Authentication (MFA / 2FA)",
    "category": "Web, Cloud & DevOps",
    "icon": "📱",
    "babyAnalogy": "Dua lapis pintu keamanan: selain memasukkan kata sandi rahasia, kamu wajib memasukkan 6 angka kode acak yang muncul di layar ponselmu.",
    "detail": "Metode otentikasi keamanan yang memerlukan dua atau lebih bentuk bukti verifikasi independen sebelum memberikan akses ke akun pengguna."
  },
  {
    "term": "Cloud Security Posture Management (CSPM)",
    "category": "Web, Cloud & DevOps",
    "icon": "🩺",
    "babyAnalogy": "Inspektur pengawas cloud otomatis yang berkeliling memeriksa: 'Apakah ada ember S3 yang pintunya lupa dikunci sehingga bisa diintip orang luar?'.",
    "detail": "Alat kepatuhan dan keamanan cloud otomatis yang mengidentifikasi kesalahan konfigurasi dan risiko keamanan di seluruh infrastruktur cloud."
  },
  {
    "term": "Edge Computing",
    "category": "Web, Cloud & DevOps",
    "icon": "🛰️",
    "babyAnalogy": "Memproses data langsung di kamera CCTV atau di menara BTS kelurahan terdekat tanpa perlu mengirim seluruh rekaman video ke server pusat di Amerika.",
    "detail": "Paradigma komputasi terdistribusi yang membawa pemrosesan komputasi dan penyimpanan data lebih dekat ke sumber data untuk mengurangi latensi."
  },
  {
    "term": "Cloud FinOps (Cloud Financial Operations)",
    "category": "Web, Cloud & DevOps",
    "icon": "💰",
    "babyAnalogy": "Ilmu hemat belanja cloud: mematikan server sewaan yang nganggur di malam hari agar tagihan kartu kredit perusahaan tidak jebol jutaan dolar.",
    "detail": "Praktik manajemen keuangan operasional cloud yang menyatukan tim keuangan, teknologi, dan bisnis untuk mengoptimalkan biaya pengeluaran cloud."
  },
  {
    "term": "Reserved Instances vs Spot Instances",
    "category": "Web, Cloud & DevOps",
    "icon": "🏷️",
    "babyAnalogy": "Reserved = kontrak sewa tahunan dapat diskon 50%; Spot = tiket obral menit-menit terakhir diskon 90%, tapi sewaktu-waktu bisa ditarik jika ada yang bayar mahal.",
    "detail": "Dua model penetapan harga instansi komputasi cloud: Reserved menjamin kapasitas jangka panjang; Spot memanfaatkan kapasitas menganggur dengan diskon besar."
  },
  {
    "term": "Cloud Migration (6 R's: Rehost, Replatform, Refactor, etc.)",
    "category": "Web, Cloud & DevOps",
    "icon": "🚚",
    "babyAnalogy": "Pindah rumah ke awan: bisa langsung angkut barang apa adanya (Rehost), ganti pipa saluran (Replatform), atau rancang ulang rumah dari nol (Refactor).",
    "detail": "Strategi kerangka kerja industri untuk memindahkan aplikasi dan data dari pusat data lokal ke lingkungan komputasi awan."
  },
  {
    "term": "Hybrid Cloud Direct Connect / ExpressRoute",
    "category": "Web, Cloud & DevOps",
    "icon": "🚇",
    "babyAnalogy": "Menarik kabel serat optik privat rahasia langsung dari ruang server kantor pusat menembus ke dalam markas pusat data Amazon atau Microsoft.",
    "detail": "Koneksi jaringan privat fisik khusus yang menghubungkan jaringan lokal perusahaan langsung ke cloud publik tanpa melintasi internet publik."
  },
  {
    "term": "CloudFormation / Azure ARM / Bicep",
    "category": "Web, Cloud & DevOps",
    "icon": "📜",
    "babyAnalogy": "Bahasa mantra cetak biru bawaan resmi dari masing-masing penyedia cloud untuk merakit ribuan komponen server secara otomatis.",
    "detail": "Layanan penyediaan infrastruktur sebagai kode bawaan khusus dari penyedia cloud (AWS CloudFormation, Azure Resource Manager/Bicep)."
  },
  {
    "term": "Serverless Event-Driven Architecture",
    "category": "Web, Cloud & DevOps",
    "icon": "⚡",
    "babyAnalogy": "Ekosistem yang bereaksi terhadap kejadian: ada foto baru diunggah -> fungsi pengecil foto otomatis menyala -> kirim notifikasi ke HP pemilik foto.",
    "detail": "Model arsitektur perangkat lunak di mana alur eksekusi ditentukan oleh produksi, deteksi, dan konsumsi peristiwa (events) secara asinkron."
  },
  {
    "term": "Dead Letter Queue (DLQ)",
    "category": "Web, Cloud & DevOps",
    "icon": "📬",
    "babyAnalogy": "Kotak pos surat gagal antar: surat yang alamatnya rusak dan gagal dikirim 5 kali dimasukkan ke kotak khusus ini agar diselidiki oleh teknisi.",
    "detail": "Antrean pesan khusus dalam sistem perantara pesan (seperti SQS/Kafka) untuk menampung pesan yang tidak dapat diproses dengan sukses oleh konsumen."
  },
  {
    "term": "Message Broker (RabbitMQ, Apache Kafka)",
    "category": "Web, Cloud & DevOps",
    "icon": "🚚",
    "babyAnalogy": "Kantor pos penyortir surat kilat yang mampu menampung jutaan pesan transaksi per detik dan membagikannya ke ratusan mobil kurir tanpa ada yang tercecer.",
    "detail": "Perangkat lunak perantara komunikasi yang memvalidasi, menyimpan, merutekan, dan mengirimkan pesan antara produsen dan konsumen secara asinkron terpisah."
  },
  {
    "term": "Publish-Subscribe Pattern (Pub/Sub)",
    "category": "Web, Cloud & DevOps",
    "icon": "📰",
    "babyAnalogy": "Penerbit koran dan ribuan pelanggan: penerbit mencetak koran berita dan otomatis mengirimkannya ke semua orang yang berlangganan koran tersebut.",
    "detail": "Pola arsitektur perpesanan di mana pengirim pesan (penerbit) tidak memprogram pesan langsung ke penerima tertentu, melainkan mengelompokkannya ke topik."
  },
  {
    "term": "Idempotent Consumer",
    "category": "Web, Cloud & DevOps",
    "icon": "🔄",
    "babyAnalogy": "Penerima paket yang cerdas: jika kurir nakal mengirimkan surat tagihan yang sama dua kali, penerima hanya membayar sekali dan membuang surat kedua.",
    "detail": "Pola integrasi perusahaan di mana pemroses pesan memastikan bahwa pemrosesan pesan duplikat tidak akan menghasilkan efek samping ganda pada sistem."
  },
  {
    "term": "Distributed Tracing (Jaeger, Zipkin)",
    "category": "Web, Cloud & DevOps",
    "icon": "🗺️",
    "babyAnalogy": "Melacak stempel paspor sebutir paket data saat bertualang melompati 15 microservices berbeda dari Jakarta ke London untuk melihat di mana letak macetnya.",
    "detail": "Metode diagnostik yang digunakan untuk membuat profil dan memantau aplikasi microservices terdistribusi dengan melacak alur permintaan tunggal dari ujung ke ujung."
  },
  {
    "term": "Service Level Agreement (SLA) 99.999% ('Five Nines')",
    "category": "Web, Cloud & DevOps",
    "icon": "💎",
    "babyAnalogy": "Standar dewa keandalan sistem: dalam 1 tahun penuh, server hanya boleh padam paling lama 5 menit saja, cocok untuk sistem rumah sakit dan pesawat.",
    "detail": "Tingkat ketersediaan infrastruktur komputasi kelas dunia yang sangat tinggi di mana toleransi waktu henti (downtime) kurang dari 5,26 menit per tahun."
  },
  {
    "term": "Multi-Region Disaster Recovery (Active-Passive vs Active-Active)",
    "category": "Web, Cloud & DevOps",
    "icon": "🌍",
    "babyAnalogy": "Active-Passive = markas cadangan tidur dan baru dibangunkan jika markas utama meledak; Active-Active = dua markas di dua benua melayani bersamaan setiap detik.",
    "detail": "Strategi ketahanan multi-wilayah: Active-Passive mengalirkan lalu lintas hanya saat failover; Active-Active melayani lalu lintas aktif di kedua wilayah simultan."
  },
  {
    "term": "Cloud Egress Costs",
    "category": "Web, Cloud & DevOps",
    "icon": "💸",
    "babyAnalogy": "Biaya tiket keluar data: gratis saat kamu mengunggah data masuk ke dalam cloud, tapi harus membayar biaya jalan tol saat mengunduh data keluar dari cloud.",
    "detail": "Biaya penagihan yang dikenakan oleh penyedia layanan komputasi awan untuk mentransfer data keluar dari jaringan pusat data mereka ke internet luar."
  },
  {
    "term": "Zero Trust Architecture in Cloud",
    "category": "Web, Cloud & DevOps",
    "icon": "🕵️",
    "babyAnalogy": "Prinsip 'Jangan percaya siapa pun, selalu periksa ulang': meskipun kamu sudah berada di dalam ruangan kantor, setiap pintu lemari tetap meminta sidik jarimu.",
    "detail": "Model keamanan siber yang mengasumsikan bahwa ancaman ada di dalam dan luar jaringan, mewajibkan verifikasi identitas ketat untuk setiap permintaan akses."
  },
  {
    "term": "Cloud Native Computing Foundation (CNCF)",
    "category": "Web, Cloud & DevOps",
    "icon": "🌐",
    "babyAnalogy": "Yayasan penjaga peradaban cloud dunia: rumah bersama yang memelihara proyek-proyek sakti seperti Kubernetes, Prometheus, Envoy, dan Helm.",
    "detail": "Organisasi nirlaba sumber terbuka yang menjadi tuan rumah dan mempromosikan teknologi komputasi awan native yang modular dan skalabel."
  },
  {
    "term": "12-Factor App Methodology",
    "category": "Web, Cloud & DevOps",
    "icon": "📜",
    "babyAnalogy": "Dua belas pedoman suci para master arsitek untuk membangun aplikasi modern yang ramah kontainer, mudah diskalakan, dan tidak manja di server mana pun.",
    "detail": "Metodologi rekayasa untuk membangun aplikasi perangkat lunak berbasis cloud (SaaS) yang portabel, tangguh, dan dapat diskalakan secara berkelanjutan."
  },
  {
    "term": "Stateless Microservices",
    "category": "Web, Cloud & DevOps",
    "icon": "🕊️",
    "babyAnalogy": "Layanan burung merpati yang terbang bebas tanpa beban: tidak menyimpan barang di saku tubuhnya; barang rahasia dititipkan di database terpisah.",
    "detail": "Desain layanan aplikasi yang tidak menyimpan status sesi di dalam memori lokalnya, memungkinkan instansi mana pun untuk menangani permintaan apa pun secara acak."
  },
  {
    "term": "Circuit Breaker Pattern",
    "category": "Web, Cloud & DevOps",
    "icon": "⚡",
    "babyAnalogy": "Sekring listrik darurat: jika server sebelah sedang korslet mogok, sekring langsung memutus kabel sejenak agar komputermu tidak ikut terbakar menunggu.",
    "detail": "Pola desain perangkat lunak yang mencegah aplikasi mencoba mengeksekusi operasi yang kemungkinan besar akan gagal berulang kali, menghindari kegagalan berantai."
  },
  {
    "term": "Blue/Green Database Migration Challenge",
    "category": "Web, Cloud & DevOps",
    "icon": "🗄️",
    "babyAnalogy": "Tantangan membelah dua database: skema database baru harus tetap ramah dan bisa dibaca oleh aplikasi versi lama sekaligus aplikasi versi baru.",
    "detail": "Tantangan teknis dalam penyebaran blue-green di mana skema basis data bersama harus mendukung kompatibilitas mundur dan maju secara transisi."
  },
  {
    "term": "Canary Analysis & Rollback",
    "category": "Web, Cloud & DevOps",
    "icon": "📊",
    "babyAnalogy": "Pemeriksaan kesehatan otomatis: jika pengguna yang memakai versi baru mengalami error 1% saja, robot otomatis membatalkan rilis dan memulihkan versi lama.",
    "detail": "Proses pemantauan metrik secara otomatis selama rilis canary dan memicu pengembalian versi (rollback) instan jika terdeteksi anomali kinerja."
  },
  {
    "term": "GitOps Reconciliation Loop",
    "category": "Web, Cloud & DevOps",
    "icon": "🔄",
    "babyAnalogy": "Polisi patroli yang terus mencocokkan kenyataan: jika ada orang iseng mengubah setelan server di layar, polisi langsung mengembalikannya sesuai catatan di Git.",
    "detail": "Siklus pemantauan terus-menerus dalam alat GitOps yang mendeteksi perbedaan (drift) antara status yang diinginkan di Git dan status kluster aktual."
  },
  {
    "term": "Kubernetes Custom Resource Definition (CRD)",
    "category": "Web, Cloud & DevOps",
    "icon": "🧱",
    "babyAnalogy": "Membuat jenis balok Lego ajaib buatanmu sendiri di dalam Kubernetes: mengajarkan sistem operasi Kubernetes konsep baru yang belum pernah ada sebelumnya.",
    "detail": "Fitur ekstensi canggih di Kubernetes yang memungkinkan pengguna mendefinisikan jenis objek API kustom mereka sendiri selain Pod dan Service standar."
  },
  {
    "term": "Cloud Center of Excellence (CCoE)",
    "category": "Web, Cloud & DevOps",
    "icon": "🏛️",
    "babyAnalogy": "Pasukan elit penasihat teknologi di perusahaan yang bertugas membimbing semua tim agar bermigrasi ke cloud secara aman, cepat, dan hemat biaya.",
    "detail": "Tim lintas fungsi terpusat dalam organisasi yang memimpin transformasi cloud, menetapkan standar arsitektur terbaik, tata kelola, dan praktik FinOps."
  },
  {
    "term": "Cybersecurity (Keamanan Siber)",
    "category": "Keamanan Siber",
    "icon": "🛡️",
    "babyAnalogy": "Seni memasang benteng pertahanan, gembok pintu, dan patroli satpam digital untuk melindungi komputer dari serangan peretas jahat.",
    "detail": "Praktik melindungi sistem komputer, jaringan, perangkat keras, dan data dari serangan digital, pencurian, atau kerusakan tidak sah."
  },
  {
    "term": "CIA Triad (Confidentiality, Integrity, Availability)",
    "category": "Keamanan Siber",
    "icon": "🔺",
    "babyAnalogy": "Segitiga emas suci keamanan: Kerahasiaan (hanya yang berhak yang boleh melihat), Keaslian (data tidak dipalsukan), dan Ketersediaan (bisa diakses saat dibutuhkan).",
    "detail": "Model panduan inti keamanan informasi: Confidentiality (Kerahasiaan), Integrity (Integritas keaslian), dan Availability (Ketersediaan sistem)."
  },
  {
    "term": "Confidentiality (Kerahasiaan)",
    "category": "Keamanan Siber",
    "icon": "🤫",
    "babyAnalogy": "Menutup jendela rapat-rapat dan mengunci buku harian agar rahasia medismu tidak bisa diintip oleh tetangga yang usil.",
    "detail": "Prinsip keamanan yang memastikan bahwa informasi hanya dapat diakses oleh pihak yang berwenang dan dicegah dari pengungkapan yang tidak sah."
  },
  {
    "term": "Integrity (Integritas)",
    "category": "Keamanan Siber",
    "icon": "💎",
    "babyAnalogy": "Memastikan surat wesel bank dari ayah tidak pernah dicoret-coret atau ditambah angka nol oleh orang jahat di jalan pos.",
    "detail": "Prinsip keamanan yang memastikan bahwa data tetap akurat, konsisten, dan tidak dapat dimodifikasi atau dirusak oleh pihak yang tidak sah."
  },
  {
    "term": "Availability (Ketersediaan)",
    "category": "Keamanan Siber",
    "icon": "🏪",
    "babyAnalogy": "Toko obat yang buka 24 jam sehari tanpa pernah tutup gerbang, sehingga kapan pun kamu sakit butuh obat, obatnya selalu ada.",
    "detail": "Prinsip keamanan yang menjamin bahwa sistem, jaringan, dan data dapat diakses dan digunakan oleh pengguna yang berwenang saat dibutuhkan."
  },
  {
    "term": "Non-Repudiation (Anti-Penyangkalan)",
    "category": "Keamanan Siber",
    "icon": "✍️",
    "babyAnalogy": "Tanda tangan basah di atas meterai resmi: si pengirim tidak bisa mengelak atau berbohong bilang 'Bukan saya yang mengirim surat itu!'.",
    "detail": "Jaminan hukum dan kriptografis bahwa pengirim pesan tidak dapat menyangkal keaslian pesan atau transaksi yang telah dilakukannya."
  },
  {
    "term": "Malware (Malicious Software)",
    "category": "Keamanan Siber",
    "icon": "🦠",
    "babyAnalogy": "Segala jenis racun dan kuman digital jahat yang sengaja disusupkan ke komputermu untuk mencuri data atau merusak sistem.",
    "detail": "Perangkat lunak berbahaya apa pun yang dirancang khusus untuk mengganggu, merusak, atau mendapatkan akses tidak sah ke sistem komputer."
  },
  {
    "term": "Virus",
    "category": "Keamanan Siber",
    "icon": "🧬",
    "babyAnalogy": "Kuman digital yang menempel di baju file sehat: begitu file itu dibuka, kuman itu menulari dan merusak file-file lain di sekitarnya.",
    "detail": "Program komputer berbahaya yang menyalin dirinya sendiri dan menyebar dengan menyisipkan salinannya ke dalam program atau berkas lain."
  },
  {
    "term": "Worm",
    "category": "Keamanan Siber",
    "icon": "🐛",
    "babyAnalogy": "Cacing sakti yang bisa merayap sendiri melompati kabel jaringan dari satu komputer ke ribuan komputer lain tanpa butuh bantuan klik manusia.",
    "detail": "Program malware mandiri yang menggandakan dirinya sendiri untuk menyebar ke komputer lain melalui jaringan tanpa interaksi pengguna."
  },
  {
    "term": "Trojan Horse (Kuda Troya)",
    "category": "Keamanan Siber",
    "icon": "🎁",
    "babyAnalogy": "Kado indah jebakan musuh: aplikasi yang tampak seperti game gratis lucu, tapi di dalamnya bersembunyi pencuri yang membuka pintu benteng malam hari.",
    "detail": "Jenis perangkat lunak berbahaya yang menyamar sebagai aplikasi yang sah atau berguna untuk memperdaya pengguna agar menginstalnya."
  },
  {
    "term": "Ransomware",
    "category": "Keamanan Siber",
    "icon": "🔒",
    "babyAnalogy": "Penyandera digital yang menggembok semua foto dan skripsimu dengan rantai enkripsi kuat, lalu memerasmu meminta uang tebusan Bitcoin.",
    "detail": "Malware berbahaya yang mengenkripsi berkas korban dan menuntut pembayaran tebusan finansial untuk mendapatkan kunci dekripsi."
  },
  {
    "term": "Spyware",
    "category": "Keamanan Siber",
    "icon": "🕵️",
    "babyAnalogy": "Mata-mata gelap di bawah meja yang diam-diam merekam semua ketikan password dan memotret layarmu lalu mengirimkannya ke markas musuh.",
    "detail": "Perangkat lunak yang mengumpulkan informasi pribadi atau aktivitas pengguna komputer secara rahasia tanpa persetujuan pengguna."
  },
  {
    "term": "Keylogger",
    "category": "Keamanan Siber",
    "icon": "⌨️",
    "babyAnalogy": "Perekam jejak kibor: mencatat setiap tombol huruf yang ditekan jarimu sehingga nomor rekening dan kata sandi rahasiamu langsung terbongkar.",
    "detail": "Perangkat lunak atau keras pengawas yang mencatat setiap penekanan tombol pada keyboard secara sembunyi-sembunyi."
  },
  {
    "term": "Adware",
    "category": "Keamanan Siber",
    "icon": "📢",
    "babyAnalogy": "Badut promosi cerewet yang terus-menerus memunculkan jendela iklan mengganggu di layar HP-mu dan membuat kuotamu cepat habis.",
    "detail": "Perangkat lunak yang secara otomatis merender atau menghasilkan materi iklan yang tidak diinginkan di layar komputer pengguna."
  },
  {
    "term": "Rootkit",
    "category": "Keamanan Siber",
    "icon": "🕳️",
    "babyAnalogy": "Jubah tembus pandang penjahat: menyusup ke jantung terdalam sistem operasi dan menyembunyikan jejak malware agar tidak terdeteksi oleh antivirus.",
    "detail": "Kumpulan alat perangkat lunak berbahaya yang memungkinkan pengguna tidak sah mendapatkan kendali tingkat administrator tersembunyi atas sistem."
  },
  {
    "term": "Botnet",
    "category": "Keamanan Siber",
    "icon": "🧟",
    "babyAnalogy": "Pasukan jutaan komputer zombie yang otaknya sudah dikendalikan oleh dalang hacker untuk menyerang dan menumbangkan server bersamaan.",
    "detail": "Jaringan perangkat komputer yang terinfeksi malware dan dikendalikan dari jarak jauh oleh peretas (botmaster) untuk serangan terkoordinasi."
  },
  {
    "term": "Phishing",
    "category": "Keamanan Siber",
    "icon": "🎣",
    "babyAnalogy": "Memancing korban dengan umpan palsu: mengirim email mengatasnamakan bank resmi dan menyuruhmu mengklik tautan formulir login jebakan.",
    "detail": "Upaya penipuan rekayasa sosial untuk mendapatkan informasi sensitif (seperti kata sandi dan kartu kredit) dengan menyamar sebagai entitas terpercaya."
  },
  {
    "term": "Spear Phishing",
    "category": "Keamanan Siber",
    "icon": "🎯",
    "babyAnalogy": "Memancing dengan tombak tajam ke sasaran spesifik: email jebakan yang dibuat khusus memanggil nama aslimu dan menyebut nama bos kantormu.",
    "detail": "Bentuk serangan phishing bertarget tinggi yang ditujukan kepada individu, organisasi, atau bisnis tertentu dengan pesan yang dipersonalisasi."
  },
  {
    "term": "Whaling",
    "category": "Keamanan Siber",
    "icon": "🐋",
    "babyAnalogy": "Memancing ikan paus raksasa: serangan tipuan yang ditujukan khusus untuk memperdaya para direktur utama (CEO) atau pejabat tinggi perusahaan.",
    "detail": "Jenis serangan phishing spesifik yang secara eksklusif menargetkan eksekutif tingkat atas (C-level) atau tokoh berpengaruh profil tinggi."
  },
  {
    "term": "Smishing & Vishing",
    "category": "Keamanan Siber",
    "icon": "📱",
    "babyAnalogy": "Smishing = jebakan pancing lewat SMS di ponsel; Vishing = telepon suara palsu yang mengaku dari polisi atau petugas bank meminta PIN kartu.",
    "detail": "Varian phishing menggunakan media berbeda: Smishing memanfaatkan pesan teks SMS; Vishing memanfaatkan panggilan suara telepon penipuan."
  },
  {
    "term": "Social Engineering (Rekayasa Sosial)",
    "category": "Keamanan Siber",
    "icon": "🎭",
    "babyAnalogy": "Seni menipu pikiran manusia: merayu atau menakut-nakuti resepsionis kantor agar mau membukakan pintu tanpa perlu meretas komputer.",
    "detail": "Manipulasi psikologis orang agar melakukan tindakan tertentu atau membocorkan informasi rahasia untuk keuntungan penyerang."
  },
  {
    "term": "Man-in-the-Middle (MitM) Attack",
    "category": "Keamanan Siber",
    "icon": "👂",
    "babyAnalogy": "Penyusup nakal yang duduk di antara dua orang yang sedang berbisik di kafe Wi-Fi: mendengarkan rahasia dan bisa mengubah isi percakapan di tengah jalan.",
    "detail": "Serangan siber di mana penyerang secara diam-diam mencegat dan meneruskan komunikasi antara dua pihak yang percaya mereka berbicara langsung."
  },
  {
    "term": "Denial of Service (DoS)",
    "category": "Keamanan Siber",
    "icon": "🚪",
    "babyAnalogy": "Satu orang jahat yang sengaja berdiri menghalangi pintu toko dan berteriak-teriak sehingga pelanggan asli tidak bisa masuk berbelanja.",
    "detail": "Serangan siber yang bertujuan untuk membuat mesin atau sumber daya jaringan tidak tersedia bagi pengguna yang berwenang dengan membanjiri lalu lintas."
  },
  {
    "term": "Distributed Denial of Service (DDoS)",
    "category": "Keamanan Siber",
    "icon": "🧟",
    "babyAnalogy": "Rombongan 100.000 komputer zombie yang serentak memadati pintu toko dalam satu detik yang sama sampai gedung tokonya ambruk roboh.",
    "detail": "Serangan DoS berskala masif yang dilancarkan dari banyak komputer atau perangkat IoT yang disusupi secara terdistribusi di seluruh dunia."
  },
  {
    "term": "SYN Flood Attack",
    "category": "Keamanan Siber",
    "icon": "🤝",
    "babyAnalogy": "Menyodorkan tangan mengajak bersalaman 100.000 kali berturut-turut tapi menolak memegang tangan balasan sampai tangan si korban keram membeku.",
    "detail": "Bentuk serangan DDoS yang mengeksploitasi jabat tangan tiga arah TCP dengan mengirim banjir paket SYN tanpa menyelesaikan jabat tangan ACK."
  },
  {
    "term": "Brute Force Attack",
    "category": "Keamanan Siber",
    "icon": "🔨",
    "babyAnalogy": "Mencoba membuka gembok koper dengan mencoba setiap kombinasi angka dari 0000 sampai 9999 satu per satu sampai terbuka.",
    "detail": "Metode peretasan kriptografi yang mencoba semua kemungkinan kombinasi karakter kata sandi atau kunci enkripsi secara sistematis."
  },
  {
    "term": "Dictionary Attack",
    "category": "Keamanan Siber",
    "icon": "📖",
    "babyAnalogy": "Menebak kata sandi dengan membaca kata-kata umum di kamus bahasa dan daftar kata sandi terpopuler (seperti 'rahasia123', 'admin').",
    "detail": "Bentuk serangan brute force yang lebih terarah dengan mencoba daftar kata umum dan frasa yang sering digunakan dari berkas kamus."
  },
  {
    "term": "Zero-Day Vulnerability",
    "category": "Keamanan Siber",
    "icon": "🕳️",
    "babyAnalogy": "Lubang pintu rahasia yang ditemukan oleh hacker sebelum si pembuat aplikasi mengetahuinya, sehingga belum ada obat tambal (patch) resminya.",
    "detail": "Cacat keamanan perangkat lunak yang belum diketahui oleh vendor atau pengembang dan belum memiliki patch perbaikan resmi yang tersedia."
  },
  {
    "term": "Exploit",
    "category": "Keamanan Siber",
    "icon": "🗡️",
    "babyAnalogy": "Senjata atau mantra kode buatan hacker yang dirancang khusus untuk menusuk dan memanfaatkan lubang kerentanan di dalam aplikasi.",
    "detail": "Bagian perangkat lunak, potongan data, atau urutan perintah yang memanfaatkan bug atau kerentanan untuk memicu perilaku yang tidak diinginkan."
  },
  {
    "term": "Patch Management",
    "category": "Keamanan Siber",
    "icon": "🩹",
    "babyAnalogy": "Rutin menjahit dan menambal celah pakaian yang sobek: selalu menginstal pembaruan Windows dan aplikasi begitu rilis resmi keluar.",
    "detail": "Strategi distribusi dan penerapan pembaruan perangkat lunak sistematis untuk memperbaiki cacat keamanan dan bug fungsional."
  },
  {
    "term": "Cryptography (Kriptografi)",
    "category": "Keamanan Siber",
    "icon": "🔐",
    "babyAnalogy": "Ilmu matematika sakti untuk menyulap pesan tulisan terbuka menjadi tulisan acak berantakan yang hanya bisa dibaca oleh pemilik kunci aslinya.",
    "detail": "Praktik dan studi teknik komunikasi aman di hadapan pihak ketiga, berfokus pada kerahasiaan, integritas data, otentikasi, dan non-penyangkalan."
  },
  {
    "term": "Plaintext vs Ciphertext",
    "category": "Keamanan Siber",
    "icon": "📜",
    "babyAnalogy": "Plaintext = pesan surat terbuka biasa yang bisa dibaca siapa saja; Ciphertext = pesan hasil sihir kriptografi yang acak seperti bahasa alien.",
    "detail": "Plaintext adalah data asli yang belum dienkripsi; Ciphertext adalah data terenkripsi yang tidak dapat dipahami tanpa kunci dekripsi yang sesuai."
  },
  {
    "term": "Encryption vs Decryption",
    "category": "Keamanan Siber",
    "icon": "🔄",
    "babyAnalogy": "Enkripsi = mengunci pesan ke dalam brankas (Plaintext ke Ciphertext); Dekripsi = membuka brankas dengan anak kunci (Ciphertext ke Plaintext).",
    "detail": "Enkripsi adalah proses menyandikan informasi agar aman; Dekripsi adalah proses membalikkan data terenkripsi kembali ke format aslinya."
  },
  {
    "term": "Symmetric Encryption (AES, DES)",
    "category": "Keamanan Siber",
    "icon": "🔑",
    "babyAnalogy": "Gembok satu kunci: kunci yang dipakai untuk mengunci pintu sama persis dengan kunci yang dipakai untuk membuka pintu; kunci harus dijaga sangat rahasia.",
    "detail": "Sistem kriptografi yang menggunakan satu kunci rahasia bersama yang sama untuk proses enkripsi data dan proses dekripsi data."
  },
  {
    "term": "AES (Advanced Encryption Standard)",
    "category": "Keamanan Siber",
    "icon": "💎",
    "babyAnalogy": "Gembok brankas baja standar militer sedunia (128, 192, 256 bit) yang mustahil dibongkar walau dibombardir oleh superkomputer tercepat selama miliaran tahun.",
    "detail": "Standar enkripsi simetris cipher blok standar pemerintah AS (FIPS 197) yang menjadi standar industri global untuk mengamankan data sensitif."
  },
  {
    "term": "Asymmetric Encryption (Public-Key Cryptography)",
    "category": "Keamanan Siber",
    "icon": "🗝️",
    "babyAnalogy": "Sistem dua kunci berpasangan: Kunci Publik (gembok terbuka yang dibagikan ke semua orang) dan Kunci Privat (anak kunci rahasia di saku jaketmu).",
    "detail": "Kriptografi yang menggunakan sepasang kunci berbeda secara matematis: kunci publik untuk enkripsi dan kunci privat yang cocok untuk dekripsi."
  },
  {
    "term": "RSA Algorithm",
    "category": "Keamanan Siber",
    "icon": "🏛️",
    "babyAnalogy": "Kakek buyut algoritma kunci publik yang memanfaatkan keajaiban perkalian dua bilangan prima raksasa ratusan digit yang sangat sulit dipecahkan.",
    "detail": "Algoritma kriptografi asimetris perintis yang menggunakan faktorisasi bilangan bulat besar sebagai dasar keamanan matematisnya."
  },
  {
    "term": "ECC (Elliptic Curve Cryptography)",
    "category": "Keamanan Siber",
    "icon": "📐",
    "babyAnalogy": "Kunci asimetris modern yang sangat lincah: sekuat gembok baja raksasa tapi kuncinya sangat kecil dan ringan sehingga hemat baterai smartphone.",
    "detail": "Pendekatan kriptografi kunci publik berbasis matematika kurva eliptik yang memberikan keamanan setara RSA dengan ukuran kunci yang jauh lebih pendek."
  },
  {
    "term": "Hashing (Cryptographic Hash Function)",
    "category": "Keamanan Siber",
    "icon": "🥩",
    "babyAnalogy": "Mesin penggiling daging satu arah: daging sapi digiling menjadi sosis; sangat mudah menggiling daging, tapi mustahil mengubah sosis kembali jadi sapi utuh.",
    "detail": "Algoritma matematika satu arah deterministik yang memetakan data dengan ukuran sembarang ke string berukuran tetap (digest) yang tidak dapat dibalik."
  },
  {
    "term": "Hash Properties (Deterministic, Pre-image, Collision Resistant)",
    "category": "Keamanan Siber",
    "icon": "🎯",
    "babyAnalogy": "Syarat cincin hash: input sama pasti hasil sama; tidak bisa ditebak mundur; dan mustahil menemukan dua kata berbeda yang menghasilkan sidik jari kembar.",
    "detail": "Sifat fungsi hash aman: deterministik, cepat dihitung, resistan terhadap pre-image (satu arah), dan resistan terhadap tabrakan nilai hash (collision-resistant)."
  },
  {
    "term": "SHA-256 (Secure Hash Algorithm 256-bit)",
    "category": "Keamanan Siber",
    "icon": "🏷️",
    "babyAnalogy": "Sidik jari digital 64 huruf heksadesimal standar dunia yang dipakai Bitcoin dan sertifikat keamanan web; jika 1 huruf diubah, sidik jarinya berubah total.",
    "detail": "Fungsi hash kriptografis keluarga SHA-2 yang menghasilkan nilai intisari 256-bit (32 byte), standar industri untuk tanda tangan digital dan blockchain."
  },
  {
    "term": "MD5 & SHA-1 (Deprecated)",
    "category": "Keamanan Siber",
    "icon": "⚠️",
    "babyAnalogy": "Gembok sidik jari kuno yang sudah retak dan dilarang dipakai karena ilmuwan sudah berhasil menemukan dua file berbeda yang menghasilkan hash kembar.",
    "detail": "Algoritma hash warisan lama yang telah dianggap tidak aman dan ditinggalkan untuk penggunaan keamanan karena ditemukannya kerentanan tabrakan (collision)."
  },
  {
    "term": "Salt in Password Hashing",
    "category": "Keamanan Siber",
    "icon": "🧂",
    "babyAnalogy": "Menaburkan garam bumbu acak ke atas kata sandi sebelum digiling mesin hash agar hacker tidak bisa mencocokkan hasil hash dengan tabel kamus contekan.",
    "detail": "Data acak unik yang ditambahkan ke input kata sandi sebelum di-hash untuk melindungi dari serangan rainbow table dan tebakan massal."
  },
  {
    "term": "Rainbow Table Attack",
    "category": "Keamanan Siber",
    "icon": "🌈",
    "babyAnalogy": "Buku kamus contekan raksasa yang sudah mencatat hasil gilingan hash dari miliaran kata sandi umum untuk mencari tebakan instan dalam 1 detik.",
    "detail": "Tabel pencarian pra-komputasi dari nilai hash kata sandi yang digunakan penyerang untuk membalikkan fungsi hash kriptografis kata sandi yang dicuri."
  },
  {
    "term": "Digital Signature (Tanda Tangan Digital)",
    "category": "Keamanan Siber",
    "icon": "✍️",
    "babyAnalogy": "Stempel lilin meterai kerajaan: membuktikan bahwa dokumen ini 100% asli ditulis oleh sang raja dan isinya tidak pernah diubah oleh siapa pun di perjalanan.",
    "detail": "Mekanisme kriptografis asimetris yang membuktikan keaslian pesan, integritas data, dan non-penyangkalan menggunakan kunci privat pengirim."
  },
  {
    "term": "Digital Certificate (X.509)",
    "category": "Keamanan Siber",
    "icon": "🪪",
    "babyAnalogy": "Surat KTP digital resmi situs web yang menyatakan: 'Ini benar-benar situs web resmi Bank BCA yang asli, bukan situs penipu tiruan!'.",
    "detail": "Dokumen elektronik terformat X.509 yang mengikat kunci publik dengan identitas entitas (organisasi/domain) yang divalidasi oleh Otoritas Sertifikat (CA)."
  },
  {
    "term": "Certificate Authority (CA - Let's Encrypt, DigiCert)",
    "category": "Keamanan Siber",
    "icon": "🏛️",
    "babyAnalogy": "Dinas Kependudukan dan Catatan Sipil internet terpercaya yang berhak menerbitkan dan mencap tanda tangan pada KTP digital sertifikat web.",
    "detail": "Entitas tepercaya yang menerbitkan, memverifikasi, dan mencabut sertifikat digital X.509 untuk memvalidasi identitas situs web di internet."
  },
  {
    "term": "PKI (Public Key Infrastructure)",
    "category": "Keamanan Siber",
    "icon": "🏢",
    "babyAnalogy": "Seluruh sistem perkantoran, hukum, aturan, dan server yang mengelola penerbitan dan pemeriksaan kunci kriptografi di seluruh dunia.",
    "detail": "Kerangka kerja komprehensif perangkat keras, perangkat lunak, kebijakan, dan prosedur untuk membuat, mengelola, mendistribusikan, dan mencabut sertifikat digital."
  },
  {
    "term": "Certificate Revocation List (CRL) & OCSP",
    "category": "Keamanan Siber",
    "icon": "🚫",
    "babyAnalogy": "Daftar buronan KTP yang sudah dicabut masa berlakunya karena kunci rahasianya sempat dicuri maling sebelum tanggal kedaluwarsa.",
    "detail": "Mekanisme untuk memverifikasi apakah sertifikat digital telah dicabut sebelum masa berlakunya habis: CRL (daftar berkas unduhan) dan OCSP (protokol kueri real-time)."
  },
  {
    "term": "End-to-End Encryption (E2EE)",
    "category": "Keamanan Siber",
    "icon": "🔒",
    "babyAnalogy": "Surat yang digembok di ponselmu dan hanya bisa dibuka di ponsel temanmu: bahkan pemilik aplikasi WhatsApp pun tidak bisa membaca isi chatmu di server mereka.",
    "detail": "Sistem komunikasi di mana hanya pengguna yang berkomunikasi yang dapat membaca pesan, mencegah pihak ketiga dan penyedia layanan membaca data."
  },
  {
    "term": "Penetration Testing (Pen-Testing)",
    "category": "Keamanan Siber",
    "icon": "🥷",
    "babyAnalogy": "Menyewa ninja terpercaya untuk mencoba merampok rumahmu sendiri secara resmi guna mencari tahu di mana pintu atau jendela yang masih longgar.",
    "detail": "Praktik menguji sistem komputer, jaringan, atau aplikasi web untuk menemukan kerentanan keamanan yang dapat dieksploitasi oleh penyerang jahat."
  },
  {
    "term": "Vulnerability Assessment",
    "category": "Keamanan Siber",
    "icon": "🔍",
    "babyAnalogy": "Pemeriksaan kesehatan gedung: mencatat daftar seluruh jendela yang tidak berteralis tanpa benar-benar mencoba membobolnya.",
    "detail": "Proses sistematis mendefinisikan, mengidentifikasi, mengklasifikasikan, dan memprioritaskan kerentanan keamanan dalam sistem komputer dan infrastruktur."
  },
  {
    "term": "White Hat vs Black Hat vs Gray Hat Hacker",
    "category": "Keamanan Siber",
    "icon": "🤠",
    "babyAnalogy": "White Hat = polisi pahlawan pembela kebenaran; Black Hat = penjahat perampok jahat; Gray Hat = orang usil yang suka membobol rumah orang lalu minta upah perbaikan.",
    "detail": "Klasifikasi peretas: White Hat bertindak legal etis untuk pertahanan; Black Hat bertindak ilegal untuk keuntungan pribadi; Gray Hat beroperasi di antara keduanya tanpa izin."
  },
  {
    "term": "SIEM (Security Information and Event Management)",
    "category": "Keamanan Siber",
    "icon": "🛰️",
    "babyAnalogy": "Pusat komando radar militer: mengumpulkan rekaman CCTV dan alarm dari 1000 komputer sekaligus dan langsung memberi peringatan jika ada pola mencurigakan.",
    "detail": "Solusi keamanan terintegrasi yang menggabungkan manajemen informasi keamanan (SIM) dan manajemen peristiwa (SEM) untuk analisis data log secara real-time."
  },
  {
    "term": "SOC (Security Operations Center)",
    "category": "Keamanan Siber",
    "icon": "🛡️",
    "babyAnalogy": "Ruang komando berlayar lebar tempat para satpam analis keamanan siber duduk berjaga 24 jam sehari memantau serangan siber dari seluruh dunia.",
    "detail": "Fasilitas tim terpusat dalam organisasi yang memantau, mendeteksi, menganalisis, dan merespons insiden keamanan siber secara terus-menerus."
  },
  {
    "term": "Incident Response (IR Plan)",
    "category": "Keamanan Siber",
    "icon": "🚒",
    "babyAnalogy": "Buku panduan darurat pemadam kebakaran: langkah demi langkah yang harus dilakukan detik itu juga saat perusahaan terinfeksi ransomware.",
    "detail": "Pendekatan terstruktur yang dilakukan organisasi untuk menangani dan mengelola konsekuensi dari pelanggaran keamanan siber atau serangan siber."
  },
  {
    "term": "Honeypot",
    "category": "Keamanan Siber",
    "icon": "🍯",
    "babyAnalogy": "Toples madu jebakan: server umpan palsu yang sengaja dibuat kelihatan rapuh agar hacker jahat tertipu memasukinya dan gerak-geriknya terekam kamera intelijen.",
    "detail": "Mekanisme keamanan siber berupa sistem tiruan yang sengaja dibuat rentan untuk memikat, mendeteksi, dan mempelajari taktik penyerang."
  },
  {
    "term": "Zero Trust Architecture ('Never Trust, Always Verify')",
    "category": "Keamanan Siber",
    "icon": "🛑",
    "babyAnalogy": "Jangan percaya siapa pun walau dia ada di dalam ruangan kantor: setiap kali membuka pintu kamar mandi atau memegang laptop, wajib scan sidik jari lagi.",
    "detail": "Strategi keamanan siber yang mengharuskan semua pengguna dan perangkat, baik di dalam maupun di luar jaringan, diotentikasi dan divalidasi terus-menerus."
  },
  {
    "term": "Air-Gapped Computer",
    "category": "Keamanan Siber",
    "icon": "🏝️",
    "babyAnalogy": "Komputer pulau terpencil: sengaja tidak dipasangi kabel LAN, Bluetooth, atau Wi-Fi sama sekali agar tidak ada hacker dari internet yang bisa menyentuhnya.",
    "detail": "Langkah pengamanan jaringan di mana komputer atau jaringan diisolasi secara fisik sepenuhnya dari internet dan jaringan luar yang tidak aman."
  },
  {
    "term": "Sandboxing",
    "category": "Keamanan Siber",
    "icon": "🏖️",
    "babyAnalogy": "Kotak pasir bermain anak berpagar kaca: tempat membuka berkas mencurigakan agar jika di dalamnya ada granat meledak, ledakannya tidak merusak komputer aslimu.",
    "detail": "Mekanisme keamanan untuk memisahkan program yang sedang berjalan dalam lingkungan terbatas yang terisolasi dari sistem operasi induk."
  },
  {
    "term": "OWASP Top 10",
    "category": "Keamanan Siber",
    "icon": "📜",
    "babyAnalogy": "Daftar 10 lubang penyakit web paling berbahaya sedunia yang wajib dihafal dan ditambal oleh setiap pembuat aplikasi web.",
    "detail": "Dokumen kesadaran standar industri yang mewakili konsensus luas tentang risiko keamanan paling kritis untuk aplikasi web."
  },
  {
    "term": "Injection Flaws (SQLi, Command Injection)",
    "category": "Keamanan Siber",
    "icon": "💉",
    "babyAnalogy": "Menyelipkan perintah jahat ke dalam kotak teks isian nama sehingga komputer tanpa sengaja menjalankan perintah perusak tersebut.",
    "detail": "Keluarga kerentanan keamanan di mana data input yang tidak terpercaya dikirim ke penerjemah sebagai bagian dari perintah atau kueri."
  },
  {
    "term": "Broken Authentication",
    "category": "Keamanan Siber",
    "icon": "🚪",
    "babyAnalogy": "Pintu kantor yang kuncinya rusak atau kartu aksesnya mudah dipalsukan sehingga orang asing bisa menyelinap mengaku sebagai direktur.",
    "detail": "Kelemahan dalam implementasi otentikasi dan manajemen sesi yang memungkinkan penyerang menyusupi kata sandi, token kunci, atau identitas pengguna."
  },
  {
    "term": "Sensitive Data Exposure (Data Leak)",
    "category": "Keamanan Siber",
    "icon": "🔓",
    "babyAnalogy": "Menaruh berkas rekening bank pelanggan di meja depan tanpa amplop terkunci sehingga siapa saja yang lewat bisa memotretnya.",
    "detail": "Kerentanan keamanan di mana aplikasi tidak melindungi data sensitif (seperti nomor kartu kredit atau catatan medis) dengan enkripsi memadai."
  },
  {
    "term": "Security Misconfiguration",
    "category": "Keamanan Siber",
    "icon": "⚠️",
    "babyAnalogy": "Lupa mengganti kata sandi bawaan pabrik (admin:admin) atau membiarkan pintu gerbang belakang server terbuka lebar tanpa disadari.",
    "detail": "Kelemahan keamanan yang terjadi ketika pengaturan keamanan tidak ditentukan, diimplementasikan secara salah, atau dibiarkan pada nilai default."
  },
  {
    "term": "Insecure Deserialization",
    "category": "Keamanan Siber",
    "icon": "📦",
    "babyAnalogy": "Menerima kardus paket terbungkus dari orang asing dan langsung merakitnya di dalam rumah tanpa memeriksa apakah di dalamnya ada bom berbahaya.",
    "detail": "Cacat keamanan di mana data yang tidak dipercaya digunakan untuk membuat objek perangkat lunak tanpa validasi ketat, memungkinkan eksekusi kode jarak jauh."
  },
  {
    "term": "Software Supply Chain Attack",
    "category": "Keamanan Siber",
    "icon": "🏭",
    "babyAnalogy": "Meracuni tepung di pabrik gandum: menyusupkan kode jahat ke dalam pustaka populer agar ribuan aplikasi yang meminjam tepung itu ikut teracuni.",
    "detail": "Serangan siber yang menargetkan kerentanan pada komponen pihak ketiga atau vendor dalam rantai pasokan perangkat lunak (seperti insiden SolarWinds)."
  },
  {
    "term": "DNS Spoofing / DNS Cache Poisoning",
    "category": "Keamanan Siber",
    "icon": "🧭",
    "babyAnalogy": "Mengganti papan petunjuk jalan di perempatan: saat pengguna ingin pergi ke bank.com, jalannya diarahkan ke rumah palsu buatan peretas.",
    "detail": "Bentuk peretasan jaringan di mana data DNS korup dimasukkan ke dalam cache resolver DNS untuk mengalihkan lalu lintas ke situs berbahaya."
  },
  {
    "term": "BGP Hijacking",
    "category": "Keamanan Siber",
    "icon": "🛣️",
    "babyAnalogy": "Membajak jalan tol antar negara: mengumumkan ke seluruh dunia 'Lewatlah jalan kami!', lalu mencuri dan menyalin seluruh paket data yang lewat.",
    "detail": "Eksploitasi perutean internet global di mana pelaku secara tidak sah mengumumkan kepemilikan blok alamat IP untuk membelokkan lalu lintas internet."
  },
  {
    "term": "ARP Spoofing / ARP Poisoning",
    "category": "Keamanan Siber",
    "icon": "🎭",
    "babyAnalogy": "Berbohong di dalam ruangan kantor: 'Hai teman-teman, sayalah router kantor!', sehingga semua orang mengirimkan surat rahasia mereka ke komputermu.",
    "detail": "Serangan lapisan data link di mana penyerang mengirimkan pesan ARP palsu ke jaringan lokal untuk mengaitkan alamat MAC penyerang dengan IP gateway."
  },
  {
    "term": "WAF (Web Application Firewall)",
    "category": "Keamanan Siber",
    "icon": "🛡️",
    "babyAnalogy": "Satpam khusus yang berdiri di depan pintu kasir restoran web: memeriksa setiap ketikan tamu dan langsung menolak pesanan yang mengandung mantra SQL injection.",
    "detail": "Perangkat keamanan khusus yang memantau, menyaring, dan memblokir lalu lintas HTTP/HTTPS berbahaya yang menuju ke aplikasi web."
  },
  {
    "term": "DDoS Mitigation (Scrubbing Center)",
    "category": "Keamanan Siber",
    "icon": "🌊",
    "babyAnalogy": "Pabrik penyaring air bah: menampung banjir air keruh jutaan paket sampah, membersihkannya, dan hanya mengalirkan air minum jernih pelanggan asli ke server.",
    "detail": "Layanan perlindungan berbasis cloud yang menyerap dan membersihkan lalu lintas serangan DDoS masif melalui pusat pembersihan (scrubbing centers)."
  },
  {
    "term": "Dark Web vs Deep Web",
    "category": "Keamanan Siber",
    "icon": "🤿",
    "babyAnalogy": "Deep Web = halaman yang tidak bisa dicari di Google (seperti akun email pribadimu); Dark Web = lorong pasar gelap rahasia yang butuh browser khusus Tor.",
    "detail": "Deep Web mencakup semua bagian internet yang tidak diindeks mesin pencari biasa; Dark Web adalah bagian terenkripsi dari Deep Web yang memerlukan perangkat lunak khusus."
  },
  {
    "term": "Tor Network (The Onion Router)",
    "category": "Keamanan Siber",
    "icon": "🧅",
    "babyAnalogy": "Jaringan berselaput kulit bawang: pesanmu dibungkus berlapis-lapis dan dipantul-pantulkan melewati 3 relawan di seluruh dunia agar lokasimu tidak bisa dilacak.",
    "detail": "Perangkat lunak sumber terbuka yang memungkinkan komunikasi anonim dengan mengarahkan lalu lintas melalui jaringan relawan global terenkripsi berlapis."
  },
  {
    "term": "VPN Leak (DNS Leak, WebRTC Leak)",
    "category": "Keamanan Siber",
    "icon": "🕳️",
    "babyAnalogy": "Jubah tembus pandang yang berlubang di bagian sepatu: meskipun memakai VPN, alamat kotamu yang sebenarnya masih bocor terlihat lewat celah WebRTC.",
    "detail": "Kerentanan keamanan di mana data identitas pengguna atau alamat IP asli secara tidak sengaja terungkap ke publik meskipun VPN sedang aktif."
  },
  {
    "term": "Privilege Escalation",
    "category": "Keamanan Siber",
    "icon": "🪜",
    "babyAnalogy": "Memanjat tangga kekuasaan: penyusup yang awalnya cuma punya tiket tamu biasa berhasil menemukan celah dan mengubah dirinya menjadi raja penguasa Administrator.",
    "detail": "Tindakan mengeksploitasi bug atau kesalahan konfigurasi untuk mendapatkan tingkat akses yang lebih tinggi daripada yang diizinkan semula."
  },
  {
    "term": "Buffer Overflow",
    "category": "Keamanan Siber",
    "icon": "🥤",
    "babyAnalogy": "Menuang air satu teko penuh ke dalam cangkir kecil sampai airnya tumpah membanjiri meja dan merusak kabel tombol saklar di sebelahnya.",
    "detail": "Anomali perangkat lunak di mana program menulis data melebihi batas buffer memori yang dialokasikan, menimpa memori yang berdekatan."
  },
  {
    "term": "Memory Safe Languages (Rust, Go vs C, C++)",
    "category": "Keamanan Siber",
    "icon": "🦺",
    "babyAnalogy": "Bahasa pemrograman bersabuk pengaman: secara otomatis mencegah programmer salah menaruh memori yang bisa dimanfaatkan hacker untuk melubangi sistem.",
    "detail": "Bahasa pemrograman yang melindungi dari bug perangkat lunak dan kerentanan keamanan yang berkaitan dengan akses memori (seperti kebocoran dan buffer overflow)."
  },
  {
    "term": "Fuzz Testing (Fuzzing)",
    "category": "Keamanan Siber",
    "icon": "🐒",
    "babyAnalogy": "Menyuruh monyet liar memencet ribuan tombol acak aneh pada aplikasi untuk mencari tahu apakah ada kombinasi ketikan gila yang membuat aplikasi mogok.",
    "detail": "Teknik pengujian perangkat lunak otomatis yang memasukkan data masukan acak, tidak valid, atau tidak terduga ke dalam program untuk menemukan crash."
  },
  {
    "term": "Bug Bounty Program",
    "category": "Keamanan Siber",
    "icon": "🏆",
    "babyAnalogy": "Sayembara berhadiah uang tunai dari perusahaan teknologi: siapa saja yang berhasil menemukan celah keamanan di sistem mereka dan melapor resmi akan diberi hadiah.",
    "detail": "Program penghargaan yang ditawarkan oleh organisasi kepada peretas etis untuk menemukan dan secara bertanggung jawab melaporkan kerentanan sistem."
  },
  {
    "term": "CVSS (Common Vulnerability Scoring System)",
    "category": "Keamanan Siber",
    "icon": "🌡️",
    "babyAnalogy": "Termometer tingkat bahaya penyakit digital dari angka 0 sampai 10: angka 9.8 artinya sangat gawat darurat dan harus diobati detik ini juga.",
    "detail": "Kerangka kerja standar industri terbuka untuk menilai dan mengomunikasikan tingkat keparahan karakteristik kerentanan keamanan perangkat lunak."
  },
  {
    "term": "CVE (Common Vulnerabilities and Exposures)",
    "category": "Keamanan Siber",
    "icon": "🏷️",
    "babyAnalogy": "Nomor KTP resmi untuk setiap lubang cacat keamanan di dunia (misal CVE-2021-44228) agar para dokter keamanan di seluruh dunia membicarakan hal yang sama.",
    "detail": "Kamus entri pengenal standar terdaftar publik untuk kerentanan dan eksposur keamanan siber yang diketahui secara publik."
  },
  {
    "term": "NIST Cybersecurity Framework (CSF)",
    "category": "Keamanan Siber",
    "icon": "🏛️",
    "babyAnalogy": "Panduan 5 jurus pertahanan siber dari pemerintah Amerika: Kenali (Identify), Lindungi (Protect), Deteksi (Detect), Tanggapi (Respond), dan Pulihkan (Recover).",
    "detail": "Kerangka kerja pedoman standar industri yang terdiri dari taksonomi aktivitas keamanan siber tingkat tinggi untuk mengelola risiko siber."
  },
  {
    "term": "ISO/IEC 27001",
    "category": "Keamanan Siber",
    "icon": "📜",
    "babyAnalogy": "Sertifikat bintang lima standar internasional yang membuktikan bahwa sebuah perusahaan memiliki tata kelola keamanan informasi yang sangat terpercaya.",
    "detail": "Standar internasional terkemuka untuk Sistem Manajemen Keamanan Informasi (ISMS) yang menetapkan persyaratan perlindungan aset informasi."
  },
  {
    "term": "GDPR (General Data Protection Regulation)",
    "category": "Keamanan Siber",
    "icon": "🇪🇺",
    "babyAnalogy": "Undang-undang privasi paling tegas di Eropa: melindungi hak milik data warga dan mendenda perusahaan raksasa ratusan juta euro jika berani membocorkan data.",
    "detail": "Peraturan perlindungan data dan privasi komprehensif dalam hukum Uni Eropa mengenai privasi data pribadi individu."
  },
  {
    "term": "Data Loss Prevention (DLP)",
    "category": "Keamanan Siber",
    "icon": "🛑",
    "babyAnalogy": "Pintu detektor logam di kantor yang otomatis membunyikan alarm jika ada karyawan yang mencoba menyalin file rahasia perusahaan ke flashdisk pribadi.",
    "detail": "Strategi dan alat perangkat lunak keamanan untuk memastikan bahwa data sensitif pengguna tidak hilang, disalahgunakan, atau diakses oleh pengguna tidak sah."
  },
  {
    "term": "Endpoint Detection and Response (EDR)",
    "category": "Keamanan Siber",
    "icon": "🩺",
    "babyAnalogy": "Stetoskop medis canggih di setiap laptop karyawan: bukan sekadar memindai virus biasa, tapi memantau tingkah laku aneh aplikasi mencurigakan secara real-time.",
    "detail": "Teknologi keamanan siber terintegrasi yang terus memantau stasiun kerja (endpoint) untuk mendeteksi dan merespons ancaman siber canggih."
  },
  {
    "term": "XDR (Extended Detection and Response)",
    "category": "Keamanan Siber",
    "icon": "🌐",
    "babyAnalogy": "Pusat intelijen gabungan: menggabungkan mata-mata di laptop (EDR), mata-mata di kabel jaringan (NDR), dan mata-mata di awan (Cloud) menjadi satu kesatuan utuh.",
    "detail": "Pendekatan keamanan holistik terpadu yang mengintegrasikan visibilitas dan kontrol di berbagai lapisan keamanan (endpoint, jaringan, cloud, email)."
  },
  {
    "term": "SOAR (Security Orchestration, Automation and Response)",
    "category": "Keamanan Siber",
    "icon": "🤖",
    "babyAnalogy": "Robot satpam otomatis: begitu mendeteksi ada komputer terserang malware, robot langsung otomatis mencabut kabel jaringannya dan mengunci akun dalam 1 detik.",
    "detail": "Tumpukan teknologi yang memungkinkan organisasi mengumpulkan data ancaman dan mengotomatiskan respons alur kerja insiden keamanan standar."
  },
  {
    "term": "Threat Intelligence",
    "category": "Keamanan Siber",
    "icon": "🕵️",
    "babyAnalogy": "Laporan intelijen tentang gerak-gerik musuh: mengetahui nama kelompok hacker apa yang sedang menyerang bank dan senjata virus apa yang sedang mereka bawa.",
    "detail": "Informasi berbasis bukti tentang ancaman siber yang ada atau yang sedang muncul, termasuk mekanisme, indikator keterlibatan, dan motivasi penyerang."
  },
  {
    "term": "Red Team vs Blue Team vs Purple Team",
    "category": "Keamanan Siber",
    "icon": "⚔️",
    "babyAnalogy": "Latihan perang militer: Red Team berperan sebagai peretas penyerang benteng; Blue Team menjaga dan bertahan; Purple Team menjadi jembatan evaluasi bersama.",
    "detail": "Simulasi latihan keamanan: Red Team mengevaluasi efektivitas pertahanan dengan meniru taktik penyerang; Blue Team mempertahankan sistem; Purple Team memfasilitasi kerja sama."
  },
  {
    "term": "Social Engineering Toolkit (SET)",
    "category": "Keamanan Siber",
    "icon": "🧰",
    "babyAnalogy": "Kotak perkakas uji coba yang dirancang untuk menguji kesiapan mental karyawan terhadap serangan rekayasa sosial dan email pancingan palsu.",
    "detail": "Kerangka kerja pengujian penetrasi sumber terbuka yang dirancang khusus untuk memfasilitasi pengujian serangan rekayasa sosial tingkat lanjut."
  },
  {
    "term": "Phishing Simulation",
    "category": "Keamanan Siber",
    "icon": "🎣",
    "babyAnalogy": "Ujian pura-pura dari kantor: mengirim email undian berhadiah palsu ke seluruh karyawan untuk melihat siapa yang masih ceroboh mengklik tautan sembarangan.",
    "detail": "Program pelatihan kesadaran keamanan di mana organisasi mengirim email phishing tiruan yang terkontrol kepada karyawan untuk mengukur kerentanan manusia."
  },
  {
    "term": "Clean Desk Policy",
    "category": "Keamanan Siber",
    "icon": "🧹",
    "babyAnalogy": "Aturan meja bersih: dilarang meninggalkan catatan kata sandi di kertas tempel tempelan monitor atau meninggalkan dokumen rahasia di atas meja saat pulang kerja.",
    "detail": "Kebijakan keamanan perusahaan yang mewajibkan karyawan membersihkan meja kerja dan mengunci dokumen fisik serta layar komputer saat meninggalkan tempat."
  },
  {
    "term": "Shoulder Surfing",
    "category": "Keamanan Siber",
    "icon": "👀",
    "babyAnalogy": "Orang kepo yang mengintip dari balik pundakmu saat kamu sedang mengetikkan PIN ATM atau kata sandi di layar laptop di kedai kopi.",
    "detail": "Teknik rekayasa sosial langsung di mana penyerang secara fisik melihat layar atau keyboard korban dari atas bahu untuk mencuri informasi sensitif."
  },
  {
    "term": "Dumpster Diving",
    "category": "Keamanan Siber",
    "icon": "🗑️",
    "babyAnalogy": "Mengais tong sampah kantor: mencari kertas cetakan memo rahasia atau struk yang dibuang tanpa dihancurkan menggunakan mesin penghancur kertas.",
    "detail": "Teknik pengumpulan intelijen fisik di mana penyerang mencari informasi berharga atau kata sandi di tempat pembuangan sampah organisasi."
  },
  {
    "term": "Tailgating / Piggybacking",
    "category": "Keamanan Siber",
    "icon": "🚶",
    "babyAnalogy": "Menyusup masuk pintu kantor dengan cara berjalan menempel di belakang punggung karyawan yang baru saja menempelkan kartu akses resmi.",
    "detail": "Serangan keamanan fisik di mana orang yang tidak berwenang mengikuti orang yang berwenang masuk ke area aman yang terkontrol."
  },
  {
    "term": "BadUSB Attack",
    "category": "Keamanan Siber",
    "icon": "🔌",
    "babyAnalogy": "Flashdisk beracun yang menyamar sebagai keyboard super kilat: begitu dicolokkan ke laptop, flashdisk otomatis mengetik mantra berbahaya dalam 2 detik.",
    "detail": "Serangan siber berbasis perangkat keras di mana perangkat USB diprogram ulang firmware-nya untuk meniru perangkat input keyboard (HID) dan mengeksekusi muatan berbahaya."
  },
  {
    "term": "Hardware Keylogger",
    "category": "Keamanan Siber",
    "icon": "🔌",
    "babyAnalogy": "Colokan kecil mungil yang diselipkan di antara kabel keyboard dan lubang CPU komputer kantor untuk merekam diam-diam semua ketikan sandi.",
    "detail": "Perangkat keras fisik perantara yang dipasang secara fisik pada kabel keyboard untuk mencegat dan menyimpan penekanan tombol secara independen dari OS."
  },
  {
    "term": "Security Awareness Training",
    "category": "Keamanan Siber",
    "icon": "🎓",
    "babyAnalogy": "Sekolah kilat bagi seluruh karyawan kantor agar cerdas mengenali jebakan hacker dan tidak mudah tertipu bujuk rayu penipu siber.",
    "detail": "Program pendidikan formal berkelanjutan yang melatih karyawan untuk memahami risiko siber, mengenali ancaman keamanan, dan mematuhi praktik terbaik perlindungan data."
  },
  {
    "term": "Artificial Intelligence (AI)",
    "category": "AI & Sains Data",
    "icon": "🤖",
    "babyAnalogy": "Membuat komputer berpikir dan belajar seperti otak manusia: bisa mengenali wajah teman, bermain catur, dan mengobrol ramah.",
    "detail": "Bidang ilmu komputer yang menekankan penciptaan mesin cerdas yang dapat bekerja, bereaksi, belajar, dan memecahkan masalah seperti manusia."
  },
  {
    "term": "Machine Learning (ML)",
    "category": "AI & Sains Data",
    "icon": "🧠",
    "babyAnalogy": "Mengajari komputer dengan memberi ribuan contoh: daripada mengajari rumus kaku, kita menunjukkan 1.000 foto kucing sampai komputer paham sendiri ciri-ciri kucing.",
    "detail": "Cabang AI yang berfokus pada pengembangan algoritma yang memungkinkan komputer belajar dan membuat prediksi dari data tanpa diprogram secara eksplisit."
  },
  {
    "term": "Deep Learning (DL)",
    "category": "AI & Sains Data",
    "icon": "🌊",
    "babyAnalogy": "Mesin belajar berlapis-lapis tebal seperti kue lapis: lapisan awal melihat garis tepi, lapisan tengah melihat bentuk hidung, dan lapisan akhir mengenali wajah utuh.",
    "detail": "Bagian dari Machine Learning berbasis jaringan saraf tiruan berlapis banyak (Deep Neural Networks) yang mampu mengekstrak fitur secara hierarkis."
  },
  {
    "term": "Supervised Learning",
    "category": "AI & Sains Data",
    "icon": "👨‍🏫",
    "babyAnalogy": "Belajar bersama guru privat yang memegang kunci jawaban: komputer diberi soal ujian lengkap dengan kartu jawaban benar agar bisa mencocokkan tebakannya.",
    "detail": "Paradigma pembelajaran mesin di mana model dilatih menggunakan kumpulan data berlabel (labeled data) yang memetakan fitur input ke target output yang benar."
  },
  {
    "term": "Unsupervised Learning",
    "category": "AI & Sains Data",
    "icon": "🧩",
    "babyAnalogy": "Belajar sendiri tanpa guru: komputer diberi tumpukan ribuan mainan campur aduk dan disuruh mengelompokkannya sendiri berdasarkan warna atau bentuk.",
    "detail": "Paradigma pembelajaran mesin yang mencari pola tersembunyi, struktur inheren, atau pengelompokan dalam kumpulan data tanpa adanya label target."
  },
  {
    "term": "Reinforcement Learning (RL)",
    "category": "AI & Sains Data",
    "icon": "🐕",
    "babyAnalogy": "Melatih anjing pintar: jika anjing berhasil mengambil bola diberi biskuit enak (reward), jika menggigit sepatu diberi teguran (penalty).",
    "detail": "Area pembelajaran mesin di mana agen cerdas belajar mengambil keputusan optimal melalui interaksi coba-coba dengan lingkungan berbasis sistem hadiah dan hukuman."
  },
  {
    "term": "Neural Network (Jaringan Saraf Tiruan)",
    "category": "AI & Sains Data",
    "icon": "🕸️",
    "babyAnalogy": "Jejaring laba-laba sakti yang meniru miliaran sel neuron di kepala kita: saling mengirimkan sinyal bisikan listrik untuk memutuskan jawaban.",
    "detail": "Model komputasi terinspirasi biologis yang terdiri dari simpul neuron buatan yang saling terhubung dalam lapisan (Input, Hidden, Output) untuk memproses informasi."
  },
  {
    "term": "Neuron / Perceptron",
    "category": "AI & Sains Data",
    "icon": "⚡",
    "babyAnalogy": "Satu sel otak cilik buatan: menerima masukan angka, mengalikannya dengan bobot kepentingan, lalu memutuskan apakah akan menyalakan lampu sinyal atau diam.",
    "detail": "Unit komputasi dasar dalam jaringan saraf tiruan yang menghitung jumlah terbobot dari inputnya dan menerapkan fungsi aktivasi untuk menghasilkan output."
  },
  {
    "term": "Weights and Biases (Bobot & Bias)",
    "category": "AI & Sains Data",
    "icon": "⚖️",
    "babyAnalogy": "Kenop putaran volume di radio: diputar ke kiri atau ke kanan sedikit demi sedikit sampai suara musik terdengar jernih dan merdu tanpa dengungan.",
    "detail": "Parameter yang dapat dipelajari dalam jaringan saraf: Weights menentukan kekuatan pengaruh input; Biases menentukan ambang batas pergeseran aktivasi."
  },
  {
    "term": "Activation Function (ReLU, Sigmoid, Softmax)",
    "category": "AI & Sains Data",
    "icon": "💡",
    "babyAnalogy": "Saklar lampu pintar: ReLU hanya menyalakan lampu jika nilainya positif; Sigmoid mengubah angka menjadi persentase 0 sampai 1; Softmax membagi probabilitas juara.",
    "detail": "Fungsi matematika non-linier yang diterapkan pada output neuron untuk menentukan apakah neuron tersebut harus diaktifkan dan diteruskan ke lapisan berikutnya."
  },
  {
    "term": "Loss Function / Cost Function",
    "category": "AI & Sains Data",
    "icon": "📉",
    "babyAnalogy": "Rapor nilai kesalahan: menghitung seberapa jauh tebakan komputer meleset dari jawaban yang sebenarnya; makin kecil nilainya, makin pintar komputernya.",
    "detail": "Fungsi matematika yang mengukur perbedaan atau kesalahan antara nilai prediksi model dan nilai target aktual pada data pelatihan."
  },
  {
    "term": "Gradient Descent",
    "category": "AI & Sains Data",
    "icon": "⛷️",
    "babyAnalogy": "Orang buta yang menuruni gunung berkabut tebal: meraba kemiringan tanah dengan kakinya dan melangkah perlahan ke arah tanah yang paling menurun sampai dasar lembah.",
    "detail": "Algoritma optimasi iteratif untuk menemukan nilai minimum lokal dari fungsi rugi dengan mengambil langkah-langkah proporsional terhadap gradien negatif."
  },
  {
    "term": "Backpropagation",
    "category": "AI & Sains Data",
    "icon": "🔄",
    "babyAnalogy": "Membagikan koreksi nilai dari belakang ke depan: memberi tahu setiap sel neuron di belakang seberapa besar kesalahan yang mereka buat agar mereka memperbaiki diri.",
    "detail": "Algoritma efisien untuk menghitung gradien fungsi rugi terhadap setiap bobot dalam jaringan saraf menggunakan aturan rantai kalkulus dari lapisan output ke input."
  },
  {
    "term": "Epoch",
    "category": "AI & Sains Data",
    "icon": "📖",
    "babyAnalogy": "Satu putaran membaca seluruh buku pelajaran dari halaman pertama sampai halaman terakhir sebelum tidur malam.",
    "detail": "Satu siklus penuh di mana seluruh kumpulan data pelatihan melewati proses maju (forward pass) dan mundur (backward pass) dalam model jaringan saraf."
  },
  {
    "term": "Batch Size",
    "category": "AI & Sains Data",
    "icon": "📚",
    "babyAnalogy": "Membaca buku per 32 halaman sekaligus: mengerjakan latihan soal per tumpukan kecil sebelum mengoreksi dan memutar kenop bobot.",
    "detail": "Jumlah sampel data pelatihan yang diproses dalam satu iterasi sebelum parameter internal model diperbarui oleh pengoptimal."
  },
  {
    "term": "Learning Rate (Tingkat Pembelajaran)",
    "category": "AI & Sains Data",
    "icon": "🚶",
    "babyAnalogy": "Panjang langkah kaki: jika langkahnya terlalu raksasa bisa melompati lembah juara; jika langkahnya terlalu semut butuh waktu 100 tahun untuk sampai.",
    "detail": "Hiperparameter penyetelan dalam optimasi yang menentukan ukuran langkah pada setiap iterasi saat bergerak menuju fungsi rugi minimum."
  },
  {
    "term": "Overfitting",
    "category": "AI & Sains Data",
    "icon": "🤓",
    "babyAnalogy": "Siswa yang menghafal kunci jawaban ujian tahun lalu sampai ke titik komanya, tapi langsung menangis bingung saat diberi soal baru yang sedikit berbeda angkanya.",
    "detail": "Kondisi di mana model pembelajaran mesin terlalu cocok dengan data pelatihan (menghafal derau) sehingga gagal menggeneralisasi dengan baik pada data baru."
  },
  {
    "term": "Underfitting",
    "category": "AI & Sains Data",
    "icon": "😴",
    "babyAnalogy": "Siswa malas yang baru belajar 5 menit: model terlalu sederhana sehingga bahkan soal latihan yang mudah pun tidak bisa dijawab dengan benar.",
    "detail": "Kondisi di mana model pembelajaran mesin terlalu sederhana untuk menangkap struktur dan pola yang mendasari kumpulan data pelatihan."
  },
  {
    "term": "Train, Validation, and Test Sets",
    "category": "AI & Sains Data",
    "icon": "📝",
    "babyAnalogy": "Train = buku latihan harian; Validation = try-out mingguan untuk memilih strategi terbaik; Test = ujian nasional resmi yang belum pernah dilihat sebelumnya.",
    "detail": "Tiga partisi terpisah dari kumpulan data: Train untuk melatih model, Validation untuk menyetel hiperparameter, dan Test untuk evaluasi kinerja akhir tanpa bias."
  },
  {
    "term": "Cross-Validation (K-Fold)",
    "category": "AI & Sains Data",
    "icon": "🔄",
    "babyAnalogy": "Memotong kue menjadi 5 potong bergantian: 4 potong dimakan untuk belajar dan 1 potong disisihkan untuk ujian, diulang 5 kali agar nilainya adil dan jujur.",
    "detail": "Teknik resampling statistik yang membagi data menjadi K subset berukuran sama untuk mengevaluasi generalisasi model secara andal tanpa bergantung pada satu split."
  },
  {
    "term": "Feature (Fitur)",
    "category": "AI & Sains Data",
    "icon": "🏷️",
    "babyAnalogy": "Ciri-ciri khas detektif: tinggi badan, warna bulu, panjang ekor, dan berat badan yang dipakai komputer untuk menebak jenis hewan.",
    "detail": "Variabel input terukur individual yang digunakan sebagai karakteristik pembeda untuk membuat prediksi dalam model pembelajaran mesin."
  },
  {
    "term": "Target / Label",
    "category": "AI & Sains Data",
    "icon": "🎯",
    "babyAnalogy": "Jawaban tebakan yang ingin kita cari: misalnya apakah foto ini adalah 'Kucing' atau 'Anjing', atau 'Berapa harga rumah ini?'.",
    "detail": "Variabel output aktual atau kelas kebenaran dasar yang ingin diprediksi oleh model pembelajaran mesin."
  },
  {
    "term": "Feature Engineering",
    "category": "AI & Sains Data",
    "icon": "🛠️",
    "babyAnalogy": "Memasak bahan mentah: mengubah tanggal lahir menjadi angka 'Usia' yang jauh lebih mudah dipahami oleh mesin komputer pintar.",
    "detail": "Proses menggunakan pengetahuan domain untuk mengekstrak, mengubah, dan memilih fitur baru yang paling berguna dari data mentah guna meningkatkan kinerja model."
  },
  {
    "term": "Data Preprocessing (Data Cleaning)",
    "category": "AI & Sains Data",
    "icon": "🧼",
    "babyAnalogy": "Mencuci sayuran dari lumpur: membuang data yang kosong, mengoreksi salah ketik, dan merapikan format angka agar mesin tidak tersedak kotoran.",
    "detail": "Langkah persiapan penting dalam penambangan data yang membersihkan nilai hilang (missing values), menangani pencilan (outliers), dan inkonsistensi."
  },
  {
    "term": "Normalization vs Standardization",
    "category": "AI & Sains Data",
    "icon": "📏",
    "babyAnalogy": "Normalization memeras semua angka masuk ke dalam skala 0 sampai 1; Standardization mengubah angka menjadi skor Z rata-rata 0.",
    "detail": "Dua teknik penskalaan fitur: Normalisasi memetakan nilai ke rentang tetap 0 sampai 1; Standarisasi mentransformasikan data agar memiliki mean 0 dan varians 1."
  },
  {
    "term": "One-Hot Encoding",
    "category": "AI & Sains Data",
    "icon": "🚦",
    "babyAnalogy": "Mengubah warna teks ('Merah', 'Kuning', 'Hijau') menjadi deretan lampu saklar angka 0 dan 1: Merah = [1, 0, 0], Kuning = [0, 1, 0].",
    "detail": "Teknik konversi variabel kategori menjadi representasi vektor biner di mana hanya satu elemen bernilai 1 dan sisanya bernilai 0."
  },
  {
    "term": "Classification vs Regression",
    "category": "AI & Sains Data",
    "icon": "⚖️",
    "babyAnalogy": "Classification menebak ember pilihan (Contoh: 'Spam atau Bukan Spam'); Regression menebak angka harga (Contoh: 'Harga rumah Rp500 juta').",
    "detail": "Dua tugas utama pembelajaran terawasi: Klasifikasi memprediksi label kategori diskrit; Regresi memprediksi nilai kuantitatif kontinu."
  },
  {
    "term": "Confusion Matrix (TP, FP, TN, FN)",
    "category": "AI & Sains Data",
    "icon": "🪟",
    "babyAnalogy": "Tabel papan catur 4 kotak untuk memeriksa kejujuran tebakan dokter: berapa tebakan benar yang sakit, berapa salah tebak, dan berapa yang sehat.",
    "detail": "Tabel tata letak visual khusus yang memungkinkan pengukuran kinerja model klasifikasi: True Positive, False Positive, True Negative, False Negative."
  },
  {
    "term": "Accuracy, Precision, Recall, F1-Score",
    "category": "AI & Sains Data",
    "icon": "🎯",
    "babyAnalogy": "Precision = saat alarm berbunyi seberapa yakin benar ada maling; Recall = dari 10 maling yang lewat berapa banyak yang berhasil ditangkap alarm.",
    "detail": "Metrik evaluasi klasifikasi: Accuracy (ketepatan total), Precision (ketepatan prediksi positif), Recall (sensitivitas tangkapan), F1-Score (rata-rata harmonik)."
  },
  {
    "term": "ROC Curve & AUC",
    "category": "AI & Sains Data",
    "icon": "📈",
    "babyAnalogy": "Grafik garis lengkung juara: makin melengkung ke pojok kiri atas (AUC mendekati 1.0), makin sakti kemampuan model membedakan pasien sakit dari pasien sehat.",
    "detail": "Kurva karakteristik operasi penerima (ROC) yang memplot True Positive Rate vs False Positive Rate pada berbagai ambang batas klasifikasi; AUC mengukur area di bawah kurva."
  },
  {
    "term": "Decision Tree",
    "category": "AI & Sains Data",
    "icon": "🌲",
    "babyAnalogy": "Bagan alur kuis majalah: 'Apakah punya sayap? -> Ya -> Apakah bisa terbang? -> Ya -> Burung Merpati!'.",
    "detail": "Model pembelajaran terawasi non-parametrik yang mempartisi data menjadi subset menggunakan aturan keputusan jika-maka berbasis pohon hierarkis."
  },
  {
    "term": "Random Forest",
    "category": "AI & Sains Data",
    "icon": "🌳",
    "babyAnalogy": "Hutan lebat berisi 100 pohon keputusan mandiri: setiap pohon memberi pendapatnya masing-masing, lalu diambil suara terbanyak (voting) pemilu.",
    "detail": "Metode ansambel pembelajaran terawasi yang membangun banyak pohon keputusan selama pelatihan dan mengeluarkan kelas modus (voting) atau rata-rata."
  },
  {
    "term": "Gradient Boosting (XGBoost, LightGBM)",
    "category": "AI & Sains Data",
    "icon": "🚀",
    "babyAnalogy": "Pasukan estafet pelari pintar: pelari kedua sengaja dilatih fokus memperbaiki kesalahan yang dibuat pelari pertama sampai hasilnya hampir sempurna.",
    "detail": "Teknik pembelajaran mesin ansambel yang membangun model pohon secara berurutan, di mana setiap pohon baru mengoreksi kesalahan residual model sebelumnya."
  },
  {
    "term": "Support Vector Machine (SVM)",
    "category": "AI & Sains Data",
    "icon": "🤺",
    "babyAnalogy": "Menggambar garis pagar pembatas paling lebar di tengah padang rumput untuk memisahkan kawanan domba putih dari kawanan serigala hitam.",
    "detail": "Model pembelajaran terawasi yang mencari bidang pembatas hiperplanar optimal berjarak maksimum (maximum margin) antar kelas data di ruang berdimensi tinggi."
  },
  {
    "term": "K-Nearest Neighbors (KNN)",
    "category": "AI & Sains Data",
    "icon": "👥",
    "babyAnalogy": "Prinsip 'Katakan siapa teman-temanmu': jika 5 tetangga terdekatmu semuanya adalah kucing, maka kamu pasti seekor kucing juga.",
    "detail": "Algoritma pembelajaran berbasis memori non-parametrik yang mengklasifikasikan sampel baru berdasarkan kelas mayoritas dari K tetangga terdekatnya."
  },
  {
    "term": "K-Means Clustering",
    "category": "AI & Sains Data",
    "icon": "🎯",
    "babyAnalogy": "Menaruh 3 bendera di tengah lapangan dan menyuruh ribuan orang berkumpul mendekati bendera yang paling dekat dengan posisi berdirinya.",
    "detail": "Algoritma pembelajaran tak terawasi yang mempartisi n pengamatan menjadi K klaster di mana setiap pengamatan termasuk ke klaster dengan rata-rata terdekat."
  },
  {
    "term": "PCA (Principal Component Analysis)",
    "category": "AI & Sains Data",
    "icon": "📸",
    "babyAnalogy": "Memotret patung 3D menjadi foto 2D datar dari sudut terbaik yang paling memperlihatkan bentuk indahnya tanpa kehilangan informasi penting.",
    "detail": "Teknik reduksi dimensi linier tak terawasi yang mentransformasikan sekumpulan variabel berkorelasi menjadi variabel baru ortogonal (komponen utama)."
  },
  {
    "term": "Natural Language Processing (NLP)",
    "category": "AI & Sains Data",
    "icon": "🗣️",
    "babyAnalogy": "Mengajari komputer memahami puisi, novel, dan obrolan bahasa manusia: tahu makna kata sedih, bercanda, atau marah di kolom komentar.",
    "detail": "Sub-bidang ilmu komputer dan AI yang berkaitan dengan interaksi antara komputer dan bahasa alami manusia (teks dan ucapan)."
  },
  {
    "term": "Tokenization",
    "category": "AI & Sains Data",
    "icon": "✂️",
    "babyAnalogy": "Gunting pemotong kalimat: memotong-motong cerita panjang menjadi kepingan kata-kata terpisah seperti 'Saya', 'suka', 'makan', 'nasi'.",
    "detail": "Proses memecah aliran teks kontinu menjadi unit-unit diskrit yang lebih kecil yang disebut token (kata, sub-kata, atau karakter)."
  },
  {
    "term": "Word Embeddings (Word2Vec)",
    "category": "AI & Sains Data",
    "icon": "🗺️",
    "babyAnalogy": "Peta kota kata-kata: meletakkan kata di peta koordinat angka sehingga kata 'Raja' dikurangi 'Pria' ditambah 'Wanita' mendarat tepat di kata 'Ratu'.",
    "detail": "Representasi kata bervektor padat di mana kata-kata dengan makna semantik yang mirip dipetakan ke titik-titik yang berdekatan dalam ruang vektor kontinu."
  },
  {
    "term": "Recurrent Neural Network (RNN)",
    "category": "AI & Sains Data",
    "icon": "🔄",
    "babyAnalogy": "Jaringan saraf yang punya memori ingatan: saat membaca kata ketiga, dia masih ingat kata pertama dan kedua yang tadi dibacanya.",
    "detail": "Kelas jaringan saraf tiruan di mana koneksi antar simpul membentuk siklus berarah, memungkinkan perilaku temporal dinamis untuk data berurutan."
  },
  {
    "term": "LSTM (Long Short-Term Memory)",
    "category": "AI & Sains Data",
    "icon": "🧠",
    "babyAnalogy": "RNN canggih dengan buku catatan berpintu khusus: tahu kapan harus mengingat kenangan lama dan kapan harus melupakan hal-hal yang tidak penting.",
    "detail": "Arsitektur RNN khusus yang mampu mempelajari ketergantungan jangka panjang menggunakan gerbang selektif (forget gate, input gate, output gate)."
  },
  {
    "term": "Transformer Architecture",
    "category": "AI & Sains Data",
    "icon": "⚡",
    "babyAnalogy": "Mesin revolusioner buatan Google (2017) yang membaca seluruh buku sekaligus dalam satu tatapan mata tanpa perlu membaca pelan kata demi kata.",
    "detail": "Arsitektur jaringan saraf berbasis mekanisme perhatian mandiri (Self-Attention) yang memproses seluruh urutan token secara paralel tanpa pengulangan sekuensial."
  },
  {
    "term": "Self-Attention Mechanism",
    "category": "AI & Sains Data",
    "icon": "👀",
    "babyAnalogy": "Lampu sorot pemahaman: saat membaca kata 'bank' di kalimat 'sungai mengalir ke bank', lampu sorot otomatis mengaitkannya ke 'sungai' (tepi), bukan ke uang.",
    "detail": "Mekanisme perhatian yang menghitung representasi suatu urutan dengan menghubungkan posisi-posisi yang berbeda dari satu urutan tunggal."
  },
  {
    "term": "LLM (Large Language Model - GPT, Claude, Gemini)",
    "category": "AI & Sains Data",
    "icon": "📚",
    "babyAnalogy": "Raksasa AI yang sudah membaca seluruh buku dan internet dunia: bisa mengarang cerita, menulis kode pemrograman, dan berdiskusi layaknya profesor serba bisa.",
    "detail": "Model bahasa berbasis arsitektur Transformer dengan miliaran parameter yang dilatih pada korpus data teks raksasa untuk pemahaman dan pembuatan teks umum."
  },
  {
    "term": "Generative AI (GenAI)",
    "category": "AI & Sains Data",
    "icon": "🎨",
    "babyAnalogy": "Kecerdasan buatan pencipta karya: bukan cuma menebak, tapi bisa melukis gambar pemandangan baru, membuat lagu musik baru, dan mengarang puisi indah.",
    "detail": "Kecerdasan buatan yang mampu menghasilkan konten baru orisinal (teks, gambar, audio, kode, video) berdasarkan pola yang dipelajari dari data pelatihan."
  },
  {
    "term": "Prompt Engineering",
    "category": "AI & Sains Data",
    "icon": "🪄",
    "babyAnalogy": "Seni merangkai mantra kata-kata yang sangat jelas dan tepat agar asisten AI mengerti keinginanmu dan memberikan jawaban yang paling sempurna.",
    "detail": "Praktik menyusun dan mengoptimalkan teks masukan (prompt) untuk memandu model bahasa besar menghasilkan keluaran yang diinginkan secara akurat."
  },
  {
    "term": "Fine-Tuning",
    "category": "AI & Sains Data",
    "icon": "🎓",
    "babyAnalogy": "Menyekolahkan dokter spesialis: mengambil dokter umum AI yang sudah pintar, lalu menyekolahkannya khusus membaca jurnal penyakit mata selama 3 bulan.",
    "detail": "Proses mengambil model yang telah dilatih sebelumnya (pre-trained model) dan melatihnya lebih lanjut pada kumpulan data khusus yang lebih sempit."
  },
  {
    "term": "RAG (Retrieval-Augmented Generation)",
    "category": "AI & Sains Data",
    "icon": "📖",
    "babyAnalogy": "Ujian sistem buka buku: sebelum menjawab pertanyaanmu, AI terlebih dahulu mencari buku panduan resmi kantormu di laci dan menjawab sesuai buku tersebut.",
    "detail": "Teknik arsitektur AI yang mengoptimalkan keluaran LLM dengan merujuk pada basis pengetahuan eksternal berwibawa di luar data pelatihannya sebelum menghasilkan respons."
  },
  {
    "term": "Vector Database (Pinecone, Chroma, Milvus)",
    "category": "AI & Sains Data",
    "icon": "🧭",
    "babyAnalogy": "Perpustakaan pencari arti makna: mencari paragraf yang maknanya mirip dengan pertanyaanmu dalam sekejap walau kata-kata yang dipakai berbeda.",
    "detail": "Sistem basis data khusus yang mengindeks dan menyimpan representasi vektor berdimensi tinggi untuk memungkinkan pencarian kemiripan semantik berkecepatan tinggi."
  },
  {
    "term": "Cosine Similarity",
    "category": "AI & Sains Data",
    "icon": "📐",
    "babyAnalogy": "Mengukur sudut antara dua panah vektor: jika dua panah menunjuk ke arah yang sama persis (sudut 0 derajat), artinya kedua kalimat memiliki arti yang identik.",
    "detail": "Ukuran kesamaan antara dua vektor bukan-nol di ruang multidimensi yang menghitung kosinus sudut di antara keduanya (rentang -1 hingga 1)."
  },
  {
    "term": "Hallucination in AI",
    "category": "AI & Sains Data",
    "icon": "🦄",
    "babyAnalogy": "AI yang mengigau mengarang dongeng palsu: menjawab dengan gaya yang sangat percaya diri dan meyakinkan padahal faktanya salah total atau khayalan.",
    "detail": "Fenomena di mana model bahasa besar menghasilkan respons yang terdengar masuk akal tetapi secara faktual salah atau tidak didasarkan pada kenyataan."
  },
  {
    "term": "Temperature (in LLMs)",
    "category": "AI & Sains Data",
    "icon": "🌡️",
    "babyAnalogy": "Tombol pengukur kenekatan AI: suhu dingin (0.1) membuat AI kaku dan sangat taat fakta; suhu panas (0.9) membuat AI sangat kreatif dan gemar berimajinasi.",
    "detail": "Hiperparameter pengambilan sampel teks yang mengontrol tingkat keacakan dan kreativitas probabilitas token yang dihasilkan oleh model bahasa."
  },
  {
    "term": "Zero-Shot vs Few-Shot Learning",
    "category": "AI & Sains Data",
    "icon": "🎯",
    "babyAnalogy": "Zero-Shot = langsung menyuruh tanpa memberi contoh sama sekali; Few-Shot = memberikan 2 atau 3 contoh tanya-jawab dulu sebelum menyuruh AI mengerjakan.",
    "detail": "Kemampuan model AI untuk memecahkan tugas: Zero-Shot tanpa contoh latihan sebelumnya; Few-Shot dengan bantuan segelintir contoh demonstrasi dalam prompt."
  },
  {
    "term": "Chain-of-Thought (CoT) Prompting",
    "category": "AI & Sains Data",
    "icon": "💭",
    "babyAnalogy": "Menyuruh AI berpikir keras langkah demi langkah: 'Mari kita uraikan masalah ini pelan-pelan!' agar jawaban matematikanya tidak salah melompat.",
    "detail": "Teknik rekayasa prompt yang mendorong model AI untuk mengartikulasikan langkah-langkah penalaran penalaran perantara sebelum memberikan jawaban akhir."
  },
  {
    "term": "RLHF (Reinforcement Learning from Human Feedback)",
    "category": "AI & Sains Data",
    "icon": "👍",
    "babyAnalogy": "Memberi jempol pada jawaban AI: manusia asli memberi jempol ke atas untuk jawaban sopan dan jempol ke bawah untuk jawaban kasar agar AI makin ramah.",
    "detail": "Metode penyelarasan model AI yang menggunakan umpan balik penilaian manusia untuk melatih model penghargaan (reward model) dalam mengarahkan perilaku AI."
  },
  {
    "term": "AI Alignment",
    "category": "AI & Sains Data",
    "icon": "🧭",
    "babyAnalogy": "Memastikan robot AI selalu berhati baik: tujuan dan tindakan AI harus selalu selaras dengan nilai moral kebaikan manusia dan tidak membahayakan dunia.",
    "detail": "Bidang penelitian keselamatan AI yang bertujuan memastikan bahwa sistem kecerdasan buatan bertindak sesuai dengan nilai, etika, dan tujuan manusia."
  },
  {
    "term": "Computer Vision (CV)",
    "category": "AI & Sains Data",
    "icon": "👁️",
    "babyAnalogy": "Memberi mata pada komputer: mengajarkan komputer melihat foto dan video untuk mengenali plat nomor mobil, mendeteksi kanker, atau mobil tanpa sopir.",
    "detail": "Bidang AI yang melatih komputer untuk menafsirkan, memahami, dan mengekstrak informasi bermakna dari data visual dunia nyata (gambar dan video)."
  },
  {
    "term": "CNN (Convolutional Neural Network)",
    "category": "AI & Sains Data",
    "icon": "🔍",
    "babyAnalogy": "Kaca pembesar yang menggeser filter kecil di atas foto: mendeteksi garis tepi di mata kucing, lingkaran pupil, lalu menyimpulkan foto kucing utuh.",
    "detail": "Arsitektur jaringan saraf tiruan feed-forward khusus yang menggunakan operasi konvolusi matematis untuk memproses dan mengenali pola data kisi gambar."
  },
  {
    "term": "Object Detection (YOLO, Faster R-CNN)",
    "category": "AI & Sains Data",
    "icon": "📦",
    "babyAnalogy": "Menggambar kotak merah di atas foto jalan raya: 'Ini Mobil (98%)', 'Ini Pejalan Kaki (95%)' dalam hitungan seperseribu detik.",
    "detail": "Tugas visi komputer yang tidak hanya mengklasifikasikan objek dalam gambar tetapi juga menemukan posisi koordinatnya menggunakan kotak pembatas (bounding box)."
  },
  {
    "term": "Image Segmentation (Semantic vs Instance)",
    "category": "AI & Sains Data",
    "icon": "🎨",
    "babyAnalogy": "Mewarnai setiap titik piksel gambar: Semantic mewarnai semua mobil dengan warna biru; Instance memberi warna biru untuk mobil A dan hijau untuk mobil B.",
    "detail": "Tugas visi komputer yang membagi gambar digital menjadi beberapa segmen piksel; Semantic memberi label kategori, Instance membedakan objek individual."
  },
  {
    "term": "GAN (Generative Adversarial Network)",
    "category": "AI & Sains Data",
    "icon": "🎭",
    "babyAnalogy": "Dua seniman yang saling bersaing: satu pelukis pemalsu uang (Generator) dan satu polisi detektif pemeriksa (Discriminator); keduanya saling memacu sampai lukisannya sempurna.",
    "detail": "Kerangka kerja pembelajaran mesin di mana dua jaringan saraf (Generator dan Discriminator) dilatih secara bersamaan dalam permainan teori tanpa nol."
  },
  {
    "term": "Diffusion Models (Stable Diffusion, Midjourney)",
    "category": "AI & Sains Data",
    "icon": "✨",
    "babyAnalogy": "Menghapus titik-titik pasir buram sedikit demi sedikit: mulai dari gambar penuh bintik salju kotor, dibersihkan lapis demi lapis sampai jadi lukisan istana megah.",
    "detail": "Model generatif modern yang menghasilkan data baru dengan secara bertahap membalikkan proses penambahan derau acak (denoising process)."
  },
  {
    "term": "Transfer Learning",
    "category": "AI & Sains Data",
    "icon": "🚴",
    "babyAnalogy": "Orang yang sudah mahir naik sepeda ontel akan jauh lebih cepat belajar naik sepeda motor karena keseimbangan tubuhnya sudah terlatih sejak kecil.",
    "detail": "Teknik pembelajaran mesin di mana pengetahuan yang diperoleh saat memecahkan satu masalah diterapkan kembali untuk memecahkan masalah berbeda yang terkait."
  },
  {
    "term": "Model Quantization (INT8, FP16 vs FP32)",
    "category": "AI & Sains Data",
    "icon": "🤏",
    "babyAnalogy": "Memeras berat badan AI: mengubah angka desimal panjang yang rumit menjadi angka bulat sederhana agar model AI yang tadinya 10 GB bisa muat di ponsel hemat daya.",
    "detail": "Teknik kompresi model yang mengurangi presisi numerik bobot dan aktivasi jaringan saraf untuk mengurangi konsumsi memori dan mempercepat inferensi."
  },
  {
    "term": "Edge AI",
    "category": "AI & Sains Data",
    "icon": "📱",
    "babyAnalogy": "Menjalankan model kecerdasan buatan langsung di dalam chip ponsel pintar atau kamera mobilmu tanpa butuh sambungan internet ke server luar.",
    "detail": "Penerapan algoritma kecerdasan buatan langsung pada perangkat keras komputasi lokal edge tanpa memerlukan pemrosesan cloud terpusat."
  },
  {
    "term": "Explainable AI (XAI - SHAP, LIME)",
    "category": "AI & Sains Data",
    "icon": "🔍",
    "babyAnalogy": "Membuka kotak hitam AI: memberi penjelasan manusiawi mengapa komputer menolak pinjaman nasabah (misalnya karena riwayat cicilan macet).",
    "detail": "Metode dan teknik dalam penerapan kecerdasan buatan yang memungkinkan hasil solusi model dipahami dan dipercaya oleh para ahli manusia."
  },
  {
    "term": "Bias in AI",
    "category": "AI & Sains Data",
    "icon": "⚖️",
    "babyAnalogy": "Ketidakadilan bawaan: jika AI diajari hanya menggunakan data buku sejarah kuno, AI bisa ikut mewarisi prasangka buruk dan diskriminasi manusia masa lalu.",
    "detail": "Penyimpangan sistematis dan tidak adil dalam keluaran model AI yang disebabkan oleh data pelatihan yang tidak seimbang atau asumsi algoritma yang salah."
  },
  {
    "term": "Data Drift vs Concept Drift",
    "category": "AI & Sains Data",
    "icon": "🍂",
    "babyAnalogy": "Data Drift = orang yang berbelanja berubah dari remaja ke lansia; Concept Drift = arti belanja berubah drastis karena pandemi tiba-tiba melanda dunia.",
    "detail": "Penurunan performa model di produksi: Data drift terjadi saat distribusi fitur input berubah; Concept drift terjadi saat hubungan antara input dan target berubah."
  },
  {
    "term": "MLOps (Machine Learning Operations)",
    "category": "AI & Sains Data",
    "icon": "♾️",
    "babyAnalogy": "Pabrik ban berjalan pemeliharaan AI: menguji data baru, melatih ulang model otomatis, dan memantau kesehatan AI di server agar tidak pikun dimakan zaman.",
    "detail": "Praktik rekayasa kolaboratif yang menggabungkan Machine Learning, DevOps, dan Data Engineering untuk menerapkan dan memelihara model ML di produksi secara andal."
  },
  {
    "term": "Feature Store (Feast)",
    "category": "AI & Sains Data",
    "icon": "🏪",
    "babyAnalogy": "Minimarket bumbu dapur data: tempat menyimpan fitur data yang sudah bersih dan rapi agar bisa diambil bersama oleh tim analis dan tim server.",
    "detail": "Repositori perangkat lunak terpusat yang menyimpan, memproses, dan menyajikan fitur-fitur pembelajaran mesin secara konsisten untuk pelatihan dan penyajian."
  },
  {
    "term": "Model Registry (MLflow)",
    "category": "AI & Sains Data",
    "icon": "🏛️",
    "babyAnalogy": "Museum pameran model berversi: mencatat model versi V1, V2, V3 lengkap dengan catatan siapa yang melatihnya dan seberapa tinggi nilai akurasinya.",
    "detail": "Repositori terpusat yang menyediakan pelacakan garis keturunan model, versi, transisi status tahapan, dan metadata untuk model pembelajaran mesin."
  },
  {
    "term": "Inference (Model Inference)",
    "category": "AI & Sains Data",
    "icon": "🔮",
    "babyAnalogy": "Saat model AI diuji di dunia nyata: diberi foto baru yang belum pernah dilihat dan langsung mengeluarkan tebakan seketika dalam 10 milidetik.",
    "detail": "Proses menjalankan data baru langsung melalui model pembelajaran mesin yang telah dilatih untuk menghasilkan prediksi atau keluaran."
  },
  {
    "term": "Big Data (The 5 V's: Volume, Velocity, Variety, Veracity, Value)",
    "category": "AI & Sains Data",
    "icon": "🐘",
    "babyAnalogy": "Lautan data raksasa sebesar gajah: sangat banyak (Volume), mengalir secepat kilat (Velocity), bentuknya bermacam-macam (Variety), dan harus jujur (Veracity).",
    "detail": "Kumpulan data yang sangat besar, kompleks, dan bergerak cepat sehingga tidak dapat dikelola oleh perangkat lunak pemroses basis data tradisional."
  },
  {
    "term": "Apache Spark",
    "category": "AI & Sains Data",
    "icon": "⚡",
    "babyAnalogy": "Mesin jet pemroses data raksasa di memori RAM: membagi tugas menghitung triliunan angka ke 100 komputer sekaligus dalam sekejap mata.",
    "detail": "Mesin analitik terpadu sumber terbuka berkinerja tinggi untuk pemrosesan data berskala besar yang mengandalkan komputasi dalam memori (in-memory)."
  },
  {
    "term": "Hadoop & MapReduce",
    "category": "AI & Sains Data",
    "icon": "🐘",
    "babyAnalogy": "Kakek gajah pemroses data kuno: Map memotong-motong pekerjaan raksasa ke 50 orang, Reduce mengumpulkan kembali hasil potongan menjadi satu kesimpulan.",
    "detail": "Kerangka kerja komputasi terdistribusi yang menyimpan kumpulan data besar di HDFS dan memprosesnya secara paralel menggunakan model MapReduce."
  },
  {
    "term": "Data Lake vs Data Warehouse",
    "category": "AI & Sains Data",
    "icon": "🌊",
    "babyAnalogy": "Data Lake = danau air alami tempat menampung air mentah apa adanya (foto, teks, suara); Data Warehouse = botol air mineral toko yang sudah disaring bersih.",
    "detail": "Data Lake menyimpan data mentah tak terstruktur dalam skala masif; Data Warehouse menyimpan data terstruktur yang telah dibersihkan dan dimodelkan."
  },
  {
    "term": "Data Lakehouse (Delta Lake)",
    "category": "AI & Sains Data",
    "icon": "🏡",
    "babyAnalogy": "Rumah danau idaman: menggabungkan luasnya danau penyimpanan murah (Data Lake) dengan kerapian dan kecepatan kueri ACID (Data Warehouse).",
    "detail": "Arsitektur manajemen data modern yang menggabungkan fleksibilitas dan efisiensi biaya penyimpanan data lake dengan keandalan transaksi ACID data warehouse."
  },
  {
    "term": "Pandas & NumPy",
    "category": "AI & Sains Data",
    "icon": "🐼",
    "babyAnalogy": "Dua kotak perkakas sakti di Python: NumPy jago matematika matriks angka kilat, Pandas membuatmu bisa mengolah tabel data semudah bermain Excel.",
    "detail": "Dua pustaka Python inti untuk sains data: NumPy menyediakan larik multidimensi komputasi numerik; Pandas menyediakan struktur data DataFrame manipulasi tabular."
  },
  {
    "term": "Data Pipeline",
    "category": "AI & Sains Data",
    "icon": "🚰",
    "babyAnalogy": "Pipa saluran air otomatis yang menyedot data kotor dari aplikasi HP, menyaringnya di tengah jalan, dan mengalirkannya bersih ke layar dashboard bos.",
    "detail": "Rangkaian proses otomatis yang mengekstrak data dari berbagai sumber sistem, mentransformasikannya, dan memuatnya ke sistem penyimpanan target."
  },
  {
    "term": "Data Governance",
    "category": "AI & Sains Data",
    "icon": "📜",
    "babyAnalogy": "Undang-undang tata tertib data di perusahaan: memastikan data aman terkunci, tidak bocor, bersih dari kesalahan, dan patuh pada hukum privasi negara.",
    "detail": "Kumpulan prinsip, kebijakan, dan praktik manajemen data komprehensif yang memastikan kualitas data, keamanan, kepatuhan, dan ketersediaan data."
  },
  {
    "term": "Data Lineage",
    "category": "AI & Sains Data",
    "icon": "🌳",
    "babyAnalogy": "Pohon silsilah asal-usul data: melacak dari mana sebutir angka berasal, siapa yang mengubahnya, dan di laporan keuangan mana angka itu berakhir.",
    "detail": "Jejak siklus hidup data yang memetakan aliran, asal usul, transformasi, dan tujuan data di seluruh ekosistem komputasi perusahaan."
  },
  {
    "term": "Synthetic Data",
    "category": "AI & Sains Data",
    "icon": "🪄",
    "babyAnalogy": "Data tiruan buatan komputer: membuat jutaan data pasien rumah sakit palsu yang sangat mirip orang nyata untuk melatih AI tanpa melanggar privasi pasien.",
    "detail": "Data yang dihasilkan secara artifisial oleh program komputer atau model generatif daripada dikumpulkan dari peristiwa pengamatan dunia nyata langsung."
  },
  {
    "term": "A/B Testing in Data Science",
    "category": "AI & Sains Data",
    "icon": "🅰️",
    "babyAnalogy": "Uji coba dua menu makanan: separuh pelanggan diberi tombol warna hijau (A) dan separuh lagi warna biru (B) untuk melihat warna mana yang paling banyak dibeli.",
    "detail": "Metodologi eksperimen statistik terkontrol dua kelompok untuk membandingkan dua versi variabel guna menentukan versi mana yang berkinerja lebih baik."
  },
  {
    "term": "Statistical Significance (p-value)",
    "category": "AI & Sains Data",
    "icon": "📊",
    "babyAnalogy": "Batas kepastian ilmiah: membuktikan bahwa kemenangan tombol hijau benar-benar nyata karena disukai pelanggan, bukan sekadar kebetulan untung-untungan.",
    "detail": "Ukuran probabilitas statistik (p-value < 0.05) yang menyatakan bahwa perbedaan hasil eksperimen kemungkinan besar bukan disebabkan oleh kebetulan acak."
  },
  {
    "term": "Data Visualization (Matplotlib, Seaborn, Tableau)",
    "category": "AI & Sains Data",
    "icon": "📊",
    "babyAnalogy": "Seni mengubah deretan angka membosankan menjadi lukisan grafik batang dan diagram lingkaran yang langsung membuat orang paham isi ceritanya.",
    "detail": "Representasi grafis visual dari data dan informasi menggunakan elemen visual seperti bagan, grafik, peta, dan dasbor interaktif."
  },
  {
    "term": "Correlation vs Causation",
    "category": "AI & Sains Data",
    "icon": "🔗",
    "babyAnalogy": "Makan es krim dan tersengat terik matahari sering terjadi bersamaan (korelasi), tapi bukan es krim yang menyebabkan matahari bersinar panas (kausalitas).",
    "detail": "Prinsip penting logika data: korelasi menunjukkan adanya hubungan statistik bersama antara dua variabel; kausalitas membuktikan satu peristiwa menyebabkan peristiwa lain."
  },
  {
    "term": "Anomaly Detection (Deteksi Anomali)",
    "category": "AI & Sains Data",
    "icon": "🚨",
    "babyAnalogy": "Mencari bebek warna merah di antara ribuan bebek kuning: mendeteksi transaksi kartu kredit mencurigakan yang tiba-tiba berbelanja di luar negeri.",
    "detail": "Teknik penambangan data yang mengidentifikasi titik data, kejadian, atau pengamatan langka yang menyimpang secara signifikan dari mayoritas data normal."
  },
  {
    "term": "Recommendation System (Collaborative vs Content-Based)",
    "category": "AI & Sains Data",
    "icon": "🎬",
    "babyAnalogy": "Pelayan bioskop ramah Netflix: menebak film kesukaanmu berdasarkan apa yang kamu tonton kemarin atau apa yang disukai penonton lain yang seleranya mirip kamu.",
    "detail": "Sistem penyaringan informasi kecerdasan buatan yang memprediksi preferensi atau peringkat yang akan diberikan pengguna ke suatu item."
  },
  {
    "term": "Dimensionality Reduction (t-SNE, UMAP)",
    "category": "AI & Sains Data",
    "icon": "🗺️",
    "babyAnalogy": "Menyederhanakan data 100 dimensi yang rumit menjadi peta datar 2D yang bisa dilihat dan dinikmati mata manusia di layar komputer.",
    "detail": "Teknik pembelajaran mesin non-linier canggih untuk memvisualisasikan data berdimensi sangat tinggi ke dalam ruang dua atau tiga dimensi."
  },
  {
    "term": "Ensemble Learning (Bagging, Boosting, Stacking)",
    "category": "AI & Sains Data",
    "icon": "👥",
    "babyAnalogy": "Musyawarah mufakat: menggabungkan tebakan dari 10 model pintar yang berbeda menjadi satu keputusan akhir yang jauh lebih bijak dan minim salah.",
    "detail": "Teknik pembelajaran mesin yang menggabungkan beberapa model dasar untuk menghasilkan satu model prediktif yang lebih kuat dan akurat."
  },
  {
    "term": "AutoML (Automated Machine Learning)",
    "category": "AI & Sains Data",
    "icon": "🤖",
    "babyAnalogy": "Robot pembuat AI otomatis: kamu cukup melempar data, robot yang akan mencoba puluhan jenis algoritma dan memilihkan model terbaik untukmu.",
    "detail": "Proses mengotomatisasi tugas-tugas berulang dari siklus pengembangan model pembelajaran mesin dari persiapan data hingga pemilihan model."
  },
  {
    "term": "Hyperparameter Tuning (Grid Search, Bayesian Optimization)",
    "category": "AI & Sains Data",
    "icon": "🎛️",
    "babyAnalogy": "Mencari kombinasi kenop setelan radio yang paling pas agar suara model AI terdengar paling jernih dan nilai akurasinya paling tinggi.",
    "detail": "Proses mencari kombinasi hiperparameter optimal yang memaksimalkan metrik kinerja model pembelajaran mesin pada data validasi."
  },
  {
    "term": "Federated Learning",
    "category": "AI & Sains Data",
    "icon": "📱",
    "babyAnalogy": "Belajar gotong royong tanpa menyetor data: setiap HP melatih otaknya sendiri di rumah, lalu hanya menyetorkan rumus kepintarannya ke pusat tanpa mengirim foto.",
    "detail": "Pendekatan pembelajaran mesin terdesentralisasi di mana model dilatih di beberapa perangkat lokal yang memegang sampel data lokal tanpa menukarnya."
  },
  {
    "term": "Multimodal AI (Gemini, GPT-4o)",
    "category": "AI & Sains Data",
    "icon": "👁️",
    "babyAnalogy": "Asisten serba bisa yang memiliki banyak panca indera sekaligus: bisa membaca teks tulisan, melihat foto, mendengar rekaman suara, dan menonton video bersamaan.",
    "detail": "Sistem kecerdasan buatan yang mampu memproses, memahami, dan menghubungkan informasi dari berbagai modalitas data berbeda (teks, gambar, audio, video)."
  },
  {
    "term": "Autonomous Agents (AI Agents)",
    "category": "AI & Sains Data",
    "icon": "🕵️",
    "babyAnalogy": "Agen pintar yang bisa diberi satu tugas besar (misal: 'Rencanakan liburan ke Bali'): dia akan mencari tiket, memesan hotel, dan membuat jadwal sendiri.",
    "detail": "Sistem perangkat lunak bertenaga AI yang dapat merasakan lingkungannya, membuat keputusan otonom, dan mengambil tindakan terencana untuk mencapai tujuan tertentu."
  },
  {
    "term": "Zero-Shot Classification",
    "category": "AI & Sains Data",
    "icon": "🎯",
    "babyAnalogy": "Menebak kategori baru yang belum pernah diajarkan sebelumnya hanya dengan membaca petunjuk deskripsi arti kata kategori tersebut.",
    "detail": "Teknik pengenalan pola di mana model dapat mengklasifikasikan sampel data ke dalam kelas-kelas baru yang tidak terlihat sama sekali selama masa pelatihan."
  },
  {
    "term": "Context Window in LLMs",
    "category": "AI & Sains Data",
    "icon": "🪟",
    "babyAnalogy": "Lebar meja baca AI: seberapa banyak halaman buku yang bisa diingat dan dibaca AI sekaligus dalam satu sesi percakapan tanpa lupa (misal 1 juta token).",
    "detail": "Jumlah maksimum token (panjang teks) yang dapat diproses dan dipertahankan oleh model bahasa besar dalam satu interaksi masukan-keluaran sekaligus."
  },
  {
    "term": "Hallucination Mitigation (Grounding)",
    "category": "AI & Sains Data",
    "icon": "⚓",
    "babyAnalogy": "Memasang jangkar kapal: mengikat jawaban AI ke dokumen fakta resmi di dunia nyata agar AI tidak berkhayal bebas di luar kenyataan.",
    "detail": "Teknik untuk mengurangi halusinasi model bahasa dengan menambatkan respons secara ketat pada data kontekstual yang dapat diverifikasi dari dunia nyata."
  },
  {
    "term": "Artificial General Intelligence (AGI)",
    "category": "AI & Sains Data",
    "icon": "🌟",
    "babyAnalogy": "Impian puncak ilmuwan AI: mesin cerdas yang mampu memahami, mempelajari, dan melakukan tugas intelektual apa pun yang dapat dilakukan oleh manusia.",
    "detail": "Bentuk teoritis kecerdasan buatan yang memiliki kemampuan kognitif setara manusia untuk belajar, menalar, dan memecahkan berbagai macam tugas di berbagai domain."
  },
  {
    "term": "IT Support (Helpdesk / Service Desk)",
    "category": "IT Support & Troubleshooting",
    "icon": "🎧",
    "babyAnalogy": "Sahabat penyelamat komputer: orang ramah bertelinga sabar yang siap membantu saat printernya macet, password lupa, atau layarnya membeku.",
    "detail": "Fungsi organisasi TI yang bertanggung jawab untuk memberikan bantuan teknis, pemecahan masalah, dan dukungan pengguna untuk perangkat keras dan lunak."
  },
  {
    "term": "Troubleshooting Methodology (CompTIA 6-Step)",
    "category": "IT Support & Troubleshooting",
    "icon": "🪜",
    "babyAnalogy": "Enam langkah detektif sakti: Kenali Gejala -> Tebak Penyebab -> Uji Teori -> Rencanakan Solusi -> Buktikan Sembuh -> Catat di Buku Resep.",
    "detail": "Metodologi diagnostik terstruktur 6 langkah standar industri CompTIA untuk menyelesaikan masalah teknis secara efektif dan dapat diulang."
  },
  {
    "term": "Identify the Problem (Step 1)",
    "category": "IT Support & Troubleshooting",
    "icon": "🔍",
    "babyAnalogy": "Mendengarkan keluhan pasien dengan sabar: menanyakan apa yang terjadi sebelum error, membaca pesan di layar, dan melihat sendiri kerusakannya.",
    "detail": "Langkah pemecahan masalah pertama: mengumpulkan informasi, menanyai pengguna, mengidentifikasi gejala, dan menentukan perubahan terbaru pada sistem."
  },
  {
    "term": "Establish a Theory of Probable Cause (Step 2)",
    "category": "IT Support & Troubleshooting",
    "icon": "💡",
    "babyAnalogy": "Menebak kemungkinan penyakit dari yang paling sepele: apakah kabel listriknya lepas, saklarnya mati, atau baru berpikir ke chip yang rusak.",
    "detail": "Langkah pemecahan masalah kedua: merumuskan hipotesis logis mengenai penyebab masalah, mempertimbangkan hal yang paling jelas dan sederhana terlebih dahulu."
  },
  {
    "term": "Test the Theory (Step 3)",
    "category": "IT Support & Troubleshooting",
    "icon": "🧪",
    "babyAnalogy": "Menguji tebakan: mencoba mencolokkan kabel baru; jika komputernya menyala, berarti tebakanmu 100% benar; jika belum, cari tebakan lain.",
    "detail": "Langkah pemecahan masalah ketiga: menguji teori untuk menentukan penyebab pasti; jika teori terbukti, tentukan langkah berikutnya; jika gagal, rumuskan teori baru."
  },
  {
    "term": "Establish Plan of Action & Implement (Step 4)",
    "category": "IT Support & Troubleshooting",
    "icon": "🛠️",
    "babyAnalogy": "Menyusun rencana perbaikan dan mengerjakannya: membuat cadangan data dulu agar aman, lalu mulai memperbaiki dengan teliti.",
    "detail": "Langkah pemecahan masalah keempat: merancang rencana aksi untuk menyelesaikan masalah dengan meminimalkan dampak operasional, lalu mengeksekusi solusinya."
  },
  {
    "term": "Verify Full System Functionality (Step 5)",
    "category": "IT Support & Troubleshooting",
    "icon": "✅",
    "babyAnalogy": "Memastikan sembuh total: mengajak pengguna mencoba mencetak kertas atau membuka web bersama-sama dan memasang tindakan pencegahan agar tidak kambuh.",
    "detail": "Langkah pemecahan masalah kelima: memverifikasi bahwa sistem beroperasi secara penuh dan menerapkan langkah-langkah pencegahan yang sesuai jika berlaku."
  },
  {
    "term": "Document Findings and Actions (Step 6)",
    "category": "IT Support & Troubleshooting",
    "icon": "📓",
    "babyAnalogy": "Menuliskan resep obat di buku harian rumah sakit: mencatat masalah dan cara mengatasinya agar teknisi lain yang menghadapi hal serupa bisa cepat menirunya.",
    "detail": "Langkah pemecahan masalah keenam: mencatat temuan diagnosis, tindakan yang diambil, dan hasil akhir dalam basis pengetahuan (Knowledge Base/Ticketing)."
  },
  {
    "term": "Ticketing System (Jira, ServiceNow, Zendesk)",
    "category": "IT Support & Troubleshooting",
    "icon": "🎫",
    "babyAnalogy": "Sistem nomor antrean keluhan kantor: setiap laporan masalah diberi nomor tiket karcis resmi agar tidak ada keluhan yang terselip atau terlupakan.",
    "detail": "Aplikasi perangkat lunak manajemen layanan pelanggan yang mencatat, melacak, memprioritaskan, dan mengarahkan tiket insiden dari pengguna ke tim teknis."
  },
  {
    "term": "SLA Resolution Time vs Response Time",
    "category": "IT Support & Troubleshooting",
    "icon": "⏱️",
    "babyAnalogy": "Response Time = seberapa cepat teknisi membalas 'Halo, keluhan kami terima'; Resolution Time = seberapa cepat printer benar-benar selesai diperbaiki sampai hidup.",
    "detail": "Dua metrik kunci perjanjian tingkat layanan: Waktu Respons mengukur kecepatan respons pertama; Waktu Resolusi mengukur waktu total hingga masalah terselesaikan."
  },
  {
    "term": "First-Call Resolution (FCR)",
    "category": "IT Support & Troubleshooting",
    "icon": "🎯",
    "babyAnalogy": "Sekali telepon langsung sembuh seketika tanpa perlu memanggil teknisi datang ke meja atau menelepon ulang berkali-kali.",
    "detail": "Metrik kinerja helpdesk yang mengukur persentase masalah dukungan pengguna yang berhasil diselesaikan pada kontak pertama tanpa eskalasi."
  },
  {
    "term": "Escalation (Tier 1 -> Tier 2 -> Tier 3)",
    "category": "IT Support & Troubleshooting",
    "icon": "🪜",
    "babyAnalogy": "Mengoper ke dokter yang lebih ahli: Tier 1 menangani reset password, Tier 2 menangani bongkar casing, Tier 3 menangani arsitek pembuat sistem.",
    "detail": "Proses meneruskan tiket insiden ke tingkat dukungan teknis yang lebih tinggi dan terspesialisasi ketika tingkat pertama tidak dapat menyelesaikannya."
  },
  {
    "term": "Knowledge Base (KB Article)",
    "category": "IT Support & Troubleshooting",
    "icon": "📖",
    "babyAnalogy": "Buku ensiklopedia resep solusi kantor: panduan bergambar langkah demi langkah cara menyambungkan Wi-Fi atau cara mengganti tinta printer.",
    "detail": "Repositori informasi terpusat yang berisi artikel dokumentasi, panduan pemecahan masalah, FAQ, dan prosedur operasional standar (SOP)."
  },
  {
    "term": "Remote Desktop (RDP, TeamViewer, AnyDesk)",
    "category": "IT Support & Troubleshooting",
    "icon": "🪄",
    "babyAnalogy": "Tangan ajaib jarak jauh: teknisi di Jakarta bisa menggerakkan kursor mouse dan memperbaiki layar laptop karyawan di Papua tanpa harus terbang naik pesawat.",
    "detail": "Teknologi perangkat lunak yang memungkinkan pengguna atau teknisi mengakses dan mengendalikan desktop komputer lain dari jarak jauh melalui jaringan."
  },
  {
    "term": "Clean Boot (Windows)",
    "category": "IT Support & Troubleshooting",
    "icon": "🧼",
    "babyAnalogy": "Menyalakan Windows dengan baju polos tanpa aplikasi bawaan startup yang cerewet untuk mencari tahu aplikasi mana yang membuat komputer macet.",
    "detail": "Prosedur booting Windows dengan kumpulan driver dan program startup minimum untuk mengisolasi konflik perangkat lunak pihak ketiga."
  },
  {
    "term": "Taskkill Command (taskkill /f /im)",
    "category": "IT Support & Troubleshooting",
    "icon": "🔫",
    "babyAnalogy": "Pistol penembak jitu di baris perintah: memaksa menutup aplikasi bandel yang membeku di layar dan tidak mau ditutup lewat tombol silang merah.",
    "detail": "Perintah utilitas Windows untuk mengakhiri satu atau beberapa tugas atau proses yang sedang berjalan berdasarkan ID proses atau nama gambar berkas."
  },
  {
    "term": "SFC (System File Checker - sfc /scannow)",
    "category": "IT Support & Troubleshooting",
    "icon": "🩺",
    "babyAnalogy": "Dokter pemeriksa file Windows: memindai seluruh file sistem yang rusak atau terhapus virus dan otomatis menambalnya kembali dengan file asli yang sehat.",
    "detail": "Utilitas baris perintah bawaan Windows yang memindai integritas seluruh berkas sistem yang dilindungi dan mengganti versi yang rusak dengan salinan resmi Microsoft."
  },
  {
    "term": "DISM (Deployment Image Servicing and Management)",
    "category": "IT Support & Troubleshooting",
    "icon": "🚑",
    "babyAnalogy": "Operasi bedah rumah sakit Windows: mengunduh organ file cadangan segar langsung dari server Microsoft jika dokter SFC angkat tangan tidak sanggup menambal.",
    "detail": "Alat baris perintah Windows untuk memperbaiki berkas citra sistem Windows (RestoreHealth) saat berkas penyimpanan komponen rusak."
  },
  {
    "term": "Chkdsk (Check Disk - chkdsk /f /r)",
    "category": "IT Support & Troubleshooting",
    "icon": "🔍",
    "babyAnalogy": "Pemeriksa kesehatan piringan harddisk: mencari kamar-kamar yang rusak (bad sector) dan menyelamatkan data yang terjebak di dalamnya.",
    "detail": "Utilitas sistem pada DOS dan Windows yang memverifikasi integritas sistem berkas pada volume disk dan memperbaiki kesalahan sistem berkas logis atau fisik."
  },
  {
    "term": "Disk Cleanup (cleanmgr)",
    "category": "IT Support & Troubleshooting",
    "icon": "🧹",
    "babyAnalogy": "Sapu pembersih sampah digital: mengumpulkan sisa berkas sementara (temp files) dan instalasi Windows lama untuk mengosongkan ruang puluhan gigabyte.",
    "detail": "Utilitas pemeliharaan komputer bawaan Microsoft Windows yang dirancang untuk membebaskan ruang disk pada drive penyimpanan dengan menghapus file sampah."
  },
  {
    "term": "Reboot / Power Cycle ('Turn it off and on again')",
    "category": "IT Support & Troubleshooting",
    "icon": "🔄",
    "babyAnalogy": "Mantra sakti nomor satu dunia IT: mematikan lalu menyalakan kembali perangkat untuk membersihkan tumpukan sampah memori RAM yang kusut.",
    "detail": "Tindakan mematikan perangkat keras sepenuhnya dan menyalakannya kembali untuk mengosongkan status memori yang korup dan mengembalikan ke status awal bersih."
  },
  {
    "term": "Static IP vs Dynamic IP (DHCP Lease)",
    "category": "IT Support & Troubleshooting",
    "icon": "🏷️",
    "babyAnalogy": "Static IP = nomor rumah tetap abadi untuk server atau printer; Dynamic IP = kamar hotel sewaan yang nomornya bisa berganti setiap beberapa hari.",
    "detail": "Static IP dikonfigurasi secara manual permanen pada perangkat; Dynamic IP dipinjamkan sementara oleh server DHCP dengan masa sewa waktu (lease time)."
  },
  {
    "term": "IP Conflict",
    "category": "IT Support & Troubleshooting",
    "icon": "⚔️",
    "babyAnalogy": "Dua rumah di satu komplek punya nomor alamat yang sama persis: surat pos jadi bingung dan kedua komputer terputus dari jaringan.",
    "detail": "Kondisi galat jaringan di mana dua perangkat pada subnet fisik atau logis yang sama secara tidak sengaja diberi alamat IP yang identik."
  },
  {
    "term": "DHCP Exhaustion",
    "category": "IT Support & Troubleshooting",
    "icon": "🎟️",
    "babyAnalogy": "Karcis parkir di loket habis total: semua nomor IP di kolam DHCP sudah terpakai sehingga tamu yang baru datang tidak bisa menyambung ke Wi-Fi kantor.",
    "detail": "Kondisi di mana server DHCP kehabisan alamat IP bebas yang tersedia dalam kumpulan cakupannya (pool scope) untuk dialokasikan ke klien baru."
  },
  {
    "term": "DNS Flush (ipconfig /flushdns)",
    "category": "IT Support & Troubleshooting",
    "icon": "🚽",
    "babyAnalogy": "Menyiram toilet buku kontak: menghapus ingatan alamat IP lama di laptop agar komputer mencari nomor alamat IP server web yang baru diperbarui.",
    "detail": "Perintah untuk mengosongkan cache resolver DNS lokal pada sistem operasi agar sistem meminta pemetaan alamat IP terbaru dari server DNS."
  },
  {
    "term": "Winsock Reset (netsh winsock reset)",
    "category": "IT Support & Troubleshooting",
    "icon": "🔌",
    "babyAnalogy": "Mereset pipa saluran internet Windows: membongkar dan memasang kembali seluruh tumpukan pipa jaringan agar internet yang macet bisa mengalir lancar lagi.",
    "detail": "Perintah baris perintah di Windows untuk mengatur ulang katalog Windows Sockets ke status default bersih guna memulihkan masalah konektivitas jaringan."
  },
  {
    "term": "Driver Rollback",
    "category": "IT Support & Troubleshooting",
    "icon": "⏪",
    "babyAnalogy": "Memundurkan baju pengemudi hardware: jika driver kartu grafis versi baru malah membuat layar berkedip hitam, kembali ke driver versi lama yang terbukti stabil.",
    "detail": "Fitur Windows Device Manager yang memungkinkan pengguna menghapus instalasi driver perangkat saat ini dan mengembalikan driver versi sebelumnya yang berfungsi."
  },
  {
    "term": "Device Manager (Yellow Exclamation Mark)",
    "category": "IT Support & Troubleshooting",
    "icon": "⚠️",
    "babyAnalogy": "Tanda seru segitiga kuning di manajer perangkat: peringatan dari komputer bahwa hardware tersebut belum punya driver atau drivernya sedang mogok.",
    "detail": "Alat konsol Windows untuk mengelola perangkat keras; tanda seru kuning menandakan konflik sumber daya, kegagalan driver, atau perangkat tidak dikenali."
  },
  {
    "term": "Group Policy (GPO - gpupdate /force)",
    "category": "IT Support & Troubleshooting",
    "icon": "📜",
    "babyAnalogy": "Surat perintah raja kantor: aturan dari pusat yang otomatis mengunci tombol Control Panel atau memasang wallpaper kantor di 1.000 laptop karyawan.",
    "detail": "Fitur Microsoft Windows Active Directory yang mengontrol lingkungan kerja akun pengguna dan akun komputer secara terpusat (GPO)."
  },
  {
    "term": "Active Directory (AD DS)",
    "category": "IT Support & Troubleshooting",
    "icon": "🏛️",
    "babyAnalogy": "Buku kependudukan kota kantor: mencatat nama seluruh karyawan, laptop, dan printer kantor serta mengatur siapa yang boleh membuka folder apa.",
    "detail": "Layanan direktori kepemilikan Microsoft yang mengelola identitas pengguna, komputer, grup, dan kebijakan keamanan dalam jaringan domain Windows."
  },
  {
    "term": "Domain Controller (DC)",
    "category": "IT Support & Troubleshooting",
    "icon": "🏰",
    "babyAnalogy": "Kantor balai kota server: komputer server utama yang bertugas memeriksa KTP kata sandi setiap karyawan saat login masuk ke komputer kantor.",
    "detail": "Server yang menjalankan peran Active Directory Domain Services (AD DS) dan bertindak sebagai pusat otentikasi keamanan untuk domain Windows."
  },
  {
    "term": "Domain Join vs Workgroup",
    "category": "IT Support & Troubleshooting",
    "icon": "🏢",
    "babyAnalogy": "Domain = kantor besar terpusat dengan satpam pengatur seragam; Workgroup = kumpulan kamar kos-kosan mandiri yang mengurus kuncinya masing-masing.",
    "detail": "Domain adalah model jaringan terpusat berbasis server untuk enterprise; Workgroup adalah model jaringan peer-to-peer terdesentralisasi untuk rumah."
  },
  {
    "term": "BitLocker Drive Encryption",
    "category": "IT Support & Troubleshooting",
    "icon": "🔒",
    "babyAnalogy": "Gembok brankas baja di seluruh harddisk laptop: jika laptopmu tertinggal di taksi, pencuri tidak akan bisa membaca datanya walau harddisknya dicopot.",
    "detail": "Fitur enkripsi volume penuh bawaan edisi profesional Microsoft Windows yang melindungi data drive dengan mengenkripsi seluruh partisi menggunakan modul TPM."
  },
  {
    "term": "TPM (Trusted Platform Module)",
    "category": "IT Support & Troubleshooting",
    "icon": "🛡️",
    "babyAnalogy": "Chip brankas fisik kecil di motherboard yang menyimpan kunci enkripsi BitLocker dan sidik jari keamanan hardware secara aman dari peretas.",
    "detail": "Mikrokontroler perangkat keras khusus standar internasional yang dirancang untuk mengamankan perangkat keras melalui kunci kriptografi terintegrasi."
  },
  {
    "term": "Kensington Lock",
    "category": "IT Support & Troubleshooting",
    "icon": "🔐",
    "babyAnalogy": "Tali rantai kawat baja pengikat laptop ke kaki meja kantor agar laptop tidak bisa digotong kabur oleh pencuri saat ditinggal makan siang.",
    "detail": "Lubang slot keamanan fisik kecil pada komputer portabel yang digunakan untuk memasang kabel kunci pengaman mekanis ke perabot tetap."
  },
  {
    "term": "Asset Tag (Barcode / RFID)",
    "category": "IT Support & Troubleshooting",
    "icon": "🏷️",
    "babyAnalogy": "Stiker pelat nomor inventaris perak di punggung laptop: mencatat nomor registrasi kepemilikan kantor agar tidak tertukar atau hilang.",
    "detail": "Label pengenal fisik unik (kode batang, kode QR, atau tag RFID) yang ditempelkan pada peralatan TI untuk melacak kepemilikan, lokasi, dan siklus hidup inventaris."
  },
  {
    "term": "Depreciation & Asset Lifecycle",
    "category": "IT Support & Troubleshooting",
    "icon": "⏳",
    "babyAnalogy": "Siklus hidup komputer kantor: dibeli baru -> dipakai 3 tahun sampai nilainya menyusut -> dihapus datanya secara aman -> didaur ulang atau disumbangkan.",
    "detail": "Manajemen tahapan siklus hidup perangkat keras TI dari pengadaan, penerapan, pemeliharaan, penyusutan akuntansi, hingga pembuangan akhir yang aman."
  },
  {
    "term": "Data Sanitization (Degaussing, DBAN, Crypto-Erase)",
    "category": "IT Support & Troubleshooting",
    "icon": "🧲",
    "babyAnalogy": "Memusnahkan data selamanya: Degaussing memakai magnet raksasa yang menghancurkan piringan harddisk agar data rahasia tidak bisa dipulihkan siapa pun.",
    "detail": "Proses penghancuran data secara permanen dan tidak dapat dipulihkan dari media penyimpanan menggunakan penimpaan biner (overwriting), demagnetisasi, atau penghancuran fisik."
  },
  {
    "term": "Screen of Death Varieties (BSOD, GSOD, RSOD)",
    "category": "IT Support & Troubleshooting",
    "icon": "🌈",
    "babyAnalogy": "Layar darurat berbagai warna: Layar Biru (Windows umum), Layar Hijau (versi beta Windows Insider), Layar Hitam (kegagalan grafis total).",
    "detail": "Tampilan kesalahan sistem fatal yang berbeda: Blue Screen (Windows produksi), Green Screen (build Windows Insider), Black Screen (driver grafis/boot)."
  },
  {
    "term": "Windows PE (Preinstallation Environment)",
    "category": "IT Support & Troubleshooting",
    "icon": "🧰",
    "babyAnalogy": "Kotak P3K mini Windows: sistem operasi darurat di flashdisk untuk menyelamatkan data, memformat harddisk, atau memperbaiki Windows yang rusak parah.",
    "detail": "Sistem operasi Windows ringan dengan layanan terbatas yang digunakan untuk mempersiapkan komputer untuk instalasi Windows atau pemulihan darurat."
  },
  {
    "term": "Shadow Copy (Volume Shadow Copy Service - VSS)",
    "category": "IT Support & Troubleshooting",
    "icon": "📸",
    "babyAnalogy": "Memotret kloningan bayangan file yang sedang kamu buka, sehingga kamu bisa mencadangkan database besar tanpa perlu mematikan aplikasinya.",
    "detail": "Layanan Microsoft Windows yang memungkinkan pembuatan salinan cadangan manual atau otomatis dari volume atau berkas komputer bahkan saat sedang dibuka aktif."
  },
  {
    "term": "Incremental vs Differential vs Full Backup",
    "category": "IT Support & Troubleshooting",
    "icon": "📦",
    "babyAnalogy": "Full = mencadangkan seluruh lemari; Differential = mencadangkan apa yang berubah sejak Full terakhir; Incremental = mencadangkan apa yang berubah sejak kemarin.",
    "detail": "Tiga strategi pencadangan data: Full (semua data), Differential (data yang berubah sejak full terakhir), Incremental (data yang berubah sejak pencadangan terakhir apa pun)."
  },
  {
    "term": "3-2-1 Backup Strategy",
    "category": "IT Support & Troubleshooting",
    "icon": "🏆",
    "babyAnalogy": "Aturan emas cadangan data: 3 salinan data, di 2 jenis media yang berbeda (harddisk + flashdisk), dan 1 salinan disimpan di tempat yang jauh di awan (cloud).",
    "detail": "Praktik terbaik industri untuk ketahanan cadangan data: simpan setidaknya 3 salinan data Anda, pada 2 media penyimpanan yang berbeda, dengan 1 salinan di luar lokasi (offsite)."
  },
  {
    "term": "Print Spooler Service",
    "category": "IT Support & Troubleshooting",
    "icon": "🖨️",
    "babyAnalogy": "Tukang atur antrean printer: menampung berkas dokumen yang mengantre dicetak; jika printernya macet, merestart spooler sering kali menjadi obat mujarab.",
    "detail": "Layanan perangkat lunak Windows yang mengelola antrean pekerjaan pencetakan yang dikirim ke printer atau server cetak."
  },
  {
    "term": "Ghost Printing / Paper Jam",
    "category": "IT Support & Troubleshooting",
    "icon": "👻",
    "babyAnalogy": "Ghost Printing = cetakan tulisan bayangan samar akibat drum printer kotor; Paper Jam = kertas yang terlipat dan terjepit di roda pemanas printer.",
    "detail": "Dua masalah umum printer fisik: Pencetakan bayangan biasanya disebabkan oleh roller pembersih drum/fuser yang aus; Paper jam akibat penarik kertas kotor atau kertas lembab."
  },
  {
    "term": "Calibration (Monitor & Printer)",
    "category": "IT Support & Troubleshooting",
    "icon": "🎨",
    "babyAnalogy": "Mencocokkan warna baju: memastikan warna biru yang kamu lihat di layar monitor sama persis dengan warna biru yang keluar di kertas cetakan printer.",
    "detail": "Proses penyesuaian parameter keluaran warna perangkat tampilan atau printer agar sesuai dengan standar profil warna ICC yang presisi."
  },
  {
    "term": "Ergonomics in Workspace",
    "category": "IT Support & Troubleshooting",
    "icon": "🪑",
    "babyAnalogy": "Kesehatan posisi duduk: mengatur tinggi kursi dan layar monitor sejajar mata agar leher tidak pegal dan tangan tidak terkena radang sendi Carpal Tunnel.",
    "detail": "Penerapan ilmu desain tempat kerja untuk menyesuaikan peralatan dengan kebutuhan fisik pengguna guna meminimalkan ketegangan dan cedera regangan berulang (RSI)."
  },
  {
    "term": "UPS Runtime & VA Calculation",
    "category": "IT Support & Troubleshooting",
    "icon": "🔋",
    "babyAnalogy": "Menghitung daya baterai darurat: memastikan kapasitas baterai UPS di bawah meja cukup memberi waktu 15 menit untuk menyimpan pekerjaan sebelum listrik mati.",
    "detail": "Perhitungan beban daya volt-ampere (VA) dan watt perangkat yang terhubung untuk menentukan kapasitas cadangan baterai UPS yang memadai saat listrik padam."
  },
  {
    "term": "PDU (Power Distribution Unit)",
    "category": "IT Support & Troubleshooting",
    "icon": "🔌",
    "babyAnalogy": "Stopkontak colokan industri berpelindung saklar di lemari server rak yang membagikan listrik stabil ke puluhan mesin server.",
    "detail": "Perangkat keras bercolokan multi-outlet industri yang dirancang untuk mendistribusikan daya listrik ke beberapa server dan peralatan TI di rak pusat data."
  },
  {
    "term": "Hot Aisle / Cold Aisle Layout",
    "category": "IT Support & Troubleshooting",
    "icon": "❄️",
    "babyAnalogy": "Lorong dingin dan lorong panas di ruang server: menyusun lemari server saling berhadapan agar angin AC dingin tidak bercampur dengan semburan angin knalpot panas.",
    "detail": "Desain tata letak fisik pusat data yang memisahkan aliran udara dingin AC dari aliran pembuangan udara panas server untuk efisiensi pendinginan optimal."
  },
  {
    "term": "ESD Mat & Grounding Plug",
    "category": "IT Support & Troubleshooting",
    "icon": "⚡",
    "babyAnalogy": "Karpet meja karet anti-statis yang disambungkan ke kawat tanah agar chip komputer tidak tersengat listrik tubuh teknisi saat dibongkar di bengkel.",
    "detail": "Alas kerja konduktif khusus yang dirancang untuk mendisipasikan muatan listrik statis secara terkontrol ke tanah (ground) sebelum merusak komponen elektronik."
  },
  {
    "term": "Thermal Camera (Flir Diagnostic)",
    "category": "IT Support & Troubleshooting",
    "icon": "📸",
    "babyAnalogy": "Kamera inframerah pendeteksi panas: memotret motherboard untuk melihat kapasitor atau chip mana yang suhunya mendidih 90 derajat tanda korsleting.",
    "detail": "Alat diagnostik termografi non-kontak yang memvisualisasikan radiasi termal untuk mendeteksi komponen sirkuit yang mengalami panas berlebih (overheating)."
  },
  {
    "term": "POST Card (Motherboard Diagnostic Card)",
    "category": "IT Support & Troubleshooting",
    "icon": "📟",
    "babyAnalogy": "Kartu penguji berlayar angka digital yang ditancapkan ke slot motherboard untuk membaca kode angka rahasia saat komputer mogok tidak mau menyala.",
    "detail": "Alat uji diagnostik perangkat keras yang menampilkan kode galat heksadesimal POST dua digit untuk menentukan komponen mana yang gagal saat boot."
  },
  {
    "term": "Toner Probe & Cable Tracer",
    "category": "IT Support & Troubleshooting",
    "icon": "🐕",
    "babyAnalogy": "Alat pelacak kabel: menembakkan nada musik ke salah satu ujung kawat, lalu mendengarkan suaranya di ujung lain di antara hutan ratusan kabel kusut.",
    "detail": "Perangkat pelacak sirkuit kabel yang menghasilkan nada audio frekuensi tinggi dan menggunakan pelacak induktif untuk mengidentifikasi kabel individual."
  },
  {
    "term": "Loopback Adapter",
    "category": "IT Support & Troubleshooting",
    "icon": "🔄",
    "babyAnalogy": "Colokan pembalik cermin: mengirim sinyal dari port komputer kembali ke dirinya sendiri untuk menguji apakah kartu jaringan port fisik tersebut rusak.",
    "detail": "Konektor uji khusus yang mengalirkan kembali pin transmisi langsung ke pin penerima untuk memverifikasi fungsi operasional kartu jaringan."
  },
  {
    "term": "Wi-Fi Analyzer",
    "category": "IT Support & Troubleshooting",
    "icon": "📶",
    "babyAnalogy": "Radar pengukur kekuatan sinyal Wi-Fi di ponsel: melihat saluran channel mana yang paling sepi agar internet kantormu tidak berebut frekuensi dengan tetangga.",
    "detail": "Aplikasi utilitas diagnostik nirkabel yang memindai dan memetakan kekuatan sinyal radio (RSSI), saluran frekuensi, dan interferensi jaringan nirkabel."
  },
  {
    "term": "Speedtest (Bandwidth vs Latency Test)",
    "category": "IT Support & Troubleshooting",
    "icon": "🏎️",
    "babyAnalogy": "Mengukur kecepatan pipa internet: melihat berapa megabit kecepatan unduh (download), unggah (upload), dan berapa milidetik jeda ping-nya.",
    "detail": "Uji diagnostik untuk mengukur throughput aktual kecepatan transfer data dan latensi responsivitas jaringan ke server uji tertentu."
  },
  {
    "term": "Packet Sniffer (Wireshark)",
    "category": "IT Support & Troubleshooting",
    "icon": "🦈",
    "babyAnalogy": "Kacamata selam penyelam data: mengintip setiap bungkus paket data yang berenang lewat di kabel jaringan untuk mencari tahu kenapa aplikasimu lambat.",
    "detail": "Perangkat lunak analisis protokol jaringan yang menangkap dan mendekode frame data secara real-time pada antarmuka jaringan fisik."
  },
  {
    "term": "NetFlow / sFlow",
    "category": "IT Support & Troubleshooting",
    "icon": "📊",
    "babyAnalogy": "Buku catatan intelijen lalu lintas router: mencatat siapa berbicara dengan siapa, berapa megabyte yang dikirim, dan jam berapa komunikasi terjadi.",
    "detail": "Protokol telemetri jaringan yang dikembangkan Cisco untuk mengumpulkan statistik informasi aliran lalu lintas IP yang melintasi antarmuka router."
  },
  {
    "term": "Remote Assistance (Quick Assist / MSRA)",
    "category": "IT Support & Troubleshooting",
    "icon": "🤝",
    "babyAnalogy": "Aplikasi bantuan kilat bawaan resmi Windows 10/11: cukup sebutkan 6 digit kode angka di telepon, teknisi langsung bisa membantu memandu layarmu.",
    "detail": "Aplikasi fitur bawaan Microsoft Windows yang memungkinkan pengguna berbagi layar dan menyerahkan kendali jarak jauh kepada teknisi dukungan tepercaya."
  },
  {
    "term": "CMOS Reset (Clear CMOS Jumper / Battery Pull)",
    "category": "IT Support & Troubleshooting",
    "icon": "🔋",
    "babyAnalogy": "Mencabut baterai kancing selama 5 menit untuk membuat komputer lupa kata sandi BIOS yang lupa dan mengembalikan seluruh setelan ke kondisi pabrik.",
    "detail": "Tindakan fisik mengosongkan daya memori CMOS motherboard untuk menghapus kata sandi firmware dan mengembalikan pengaturan BIOS/UEFI ke default pabrik."
  },
  {
    "term": "Power Supply Tester",
    "category": "IT Support & Troubleshooting",
    "icon": "📟",
    "babyAnalogy": "Kotak penguji portabel: menancapkan kabel power supply dan melihat apakah voltase 12V, 5V, dan 3.3V menyala stabil sebelum dipasang ke motherboard mahal.",
    "detail": "Alat uji diagnostik mandiri untuk memeriksa apakah catu daya komputer (PSU) mengeluarkan tegangan DC yang tepat dan sinyal Power Good yang stabil."
  },
  {
    "term": "Memory Diagnostic (MemTest86)",
    "category": "IT Support & Troubleshooting",
    "icon": "🧪",
    "babyAnalogy": "Ujian ketahanan RAM: menulis dan membaca triliunan angka ke setiap sel keping RAM semalaman untuk membuktikan apakah RAM tersebut sehat atau rusak cacat.",
    "detail": "Perangkat lunak pengujian memori mandiri berbasis bootloader yang menguji modul RAM secara intensif untuk menemukan kerusakan bit data tersembunyi."
  },
  {
    "term": "Hard Drive SMART Status (CrystalDiskInfo)",
    "category": "IT Support & Troubleshooting",
    "icon": "🩺",
    "babyAnalogy": "Membaca rapor kesehatan harddisk: melihat apakah lampu indikatornya berwarna biru Sehat, kuning Waspada, atau merah Rusak Kritis.",
    "detail": "Utilitas diagnostik pembaca data S.M.A.R.T. drive penyimpanan untuk memantau suhu, sektor yang dialokasikan ulang, dan perkiraan sisa masa pakai drive."
  },
  {
    "term": "Bad Sector Remapping",
    "category": "IT Support & Troubleshooting",
    "icon": "🩹",
    "babyAnalogy": "Trik pintar harddisk: menandai kamar yang bocor rusak dan otomatis memindahkan data penghuninya ke kamar cadangan rahasia di pojok piringan.",
    "detail": "Proses otomatis internal firmware harddisk di mana sektor yang rusak secara fisik digantikan dengan sektor cadangan sehat dari kumpulan cadangan."
  },
  {
    "term": "Thermal Paste Reapplication",
    "category": "IT Support & Troubleshooting",
    "icon": "🧴",
    "babyAnalogy": "Membersihkan pasta kering yang mengeras dengan alkohol lalu mengoleskan setitik biji jagung pasta pendingin baru agar prosesor kembali dingin adem.",
    "detail": "Prosedur pemeliharaan membersihkan pasta termal lama yang terdegradasi menggunakan alkohol isopropil 99% dan mengoleskan pasta baru di antara CPU dan pendingin."
  },
  {
    "term": "Cable Management",
    "category": "IT Support & Troubleshooting",
    "icon": "🧶",
    "babyAnalogy": "Merapikan hutan kabel semrawut menggunakan tali kretekan pengikat agar udara dingin bisa berhembus leluasa ke dalam komponen komputer.",
    "detail": "Praktik menata dan mengikat kabel internal dan eksternal secara rapi untuk meningkatkan sirkulasi aliran udara dan mempermudah pemeliharaan fisik."
  },
  {
    "term": "Dust Cleaning (Compressed Air / Air Blower)",
    "category": "IT Support & Troubleshooting",
    "icon": "💨",
    "babyAnalogy": "Meniup debu sarang laba-laba tebal di sirip heatsink menggunakan semprotan angin kering bertekanan agar komputer tidak tersedak kepanasan.",
    "detail": "Tindakan pemeliharaan preventif membersihkan akumulasi debu isolator panas dari sirip pendingin dan kipas menggunakan kaleng udara bertekanan tinggi."
  },
  {
    "term": "UPS Battery Replacement",
    "category": "IT Support & Troubleshooting",
    "icon": "🔋",
    "babyAnalogy": "Mengganti aki baterai timbal asam di dalam UPS setiap 2-3 tahun sekali saat UPS mulai berbunyi 'tit-tit' panjang tanda baterai sudah soak.",
    "detail": "Pemeliharaan berkala mengganti sel baterai asam timbal bersegel (SLA/VRLA) di dalam unit UPS yang telah mengalami degradasi kimiawi kapasitas simpan."
  },
  {
    "term": "Surge Protector vs Voltage Regulator (Stavolt)",
    "category": "IT Support & Troubleshooting",
    "icon": "⚡",
    "babyAnalogy": "Surge Protector menyerap sambaran petir; Stavolt (AVR) memutar dinamo motor untuk menaikkan listrik PLN yang loyo agar stabil di 220 Volt.",
    "detail": "Surge protector memangkas lonjakan voltase tinggi mendadak; Automatic Voltage Regulator (AVR/Stavolt) menstabilkan fluktuasi voltase naik-turun secara dinamis."
  },
  {
    "term": "KVM Over IP",
    "category": "IT Support & Troubleshooting",
    "icon": "🌐",
    "babyAnalogy": "Mengendalikan layar monitor, kibor, dan tombol power server dari benua lain lewat browser web bahkan saat servernya belum memuat sistem operasi.",
    "detail": "Perangkat keras KVM yang mengubah sinyal video, keyboard, dan mouse menjadi paket data jaringan untuk administrasi out-of-band jarak jauh."
  },
  {
    "term": "IPMI / iLO / iDRAC (Out-of-Band Management)",
    "category": "IT Support & Troubleshooting",
    "icon": "🛰️",
    "babyAnalogy": "Komputer mini mandiri di dalam server yang tetap hidup walau server utamanya mati: teknisi bisa menyalakan tombol power dan menginstal OS dari jarak jauh.",
    "detail": "Subsistem perangkat keras manajemen out-of-band otonom pada motherboard server yang menyediakan akses remote independen dari status OS utama."
  },
  {
    "term": "RAID Rebuild",
    "category": "IT Support & Troubleshooting",
    "icon": "🔄",
    "babyAnalogy": "Memasang harddisk baru untuk menggantikan harddisk yang rusak: server otomatis menyalin dan menghitung kembali jutaan data cadangan ke piringan baru.",
    "detail": "Proses rekonstruksi data otomatis oleh kontroler RAID pada drive pengganti baru menggunakan blok paritas atau salinan cermin yang ada."
  },
  {
    "term": "Hot Spare Disk",
    "category": "IT Support & Troubleshooting",
    "icon": "🛌",
    "babyAnalogy": "Harddisk cadangan yang tidur siaga di lemari server rak: begitu ada salah satu harddisk utama yang meledak, dia otomatis bangun dan menggantikannya detik itu juga.",
    "detail": "Drive penyimpanan siaga pasif yang terpasang di larik RAID yang secara otomatis diaktifkan untuk menggantikan drive yang gagal tanpa intervensi manusia."
  },
  {
    "term": "NAS (Network Attached Storage)",
    "category": "IT Support & Troubleshooting",
    "icon": "🗄️",
    "babyAnalogy": "Kotak lemari harddisk bersama di kantor yang terhubung ke kabel LAN: tempat semua karyawan menyimpan foto dan video bersama semudah membuka map folder.",
    "detail": "Perangkat penyimpanan data tingkat berkas khusus yang terhubung ke jaringan komputer, menyediakan akses data heterogen ke sekelompok klien."
  },
  {
    "term": "SAN (Storage Area Network)",
    "category": "IT Support & Troubleshooting",
    "icon": "🏭",
    "babyAnalogy": "Jalan tol serat optik khusus berkecepatan monster yang menghubungkan puluhan server bank dengan ratusan lemari harddisk raksasa di ruang bawah tanah.",
    "detail": "Jaringan berkecepatan tinggi khusus tingkat blok yang menghubungkan dan menyediakan akses bersama ke kumpulan perangkat penyimpanan data konsolidasi."
  },
  {
    "term": "Shadow Copy Recovery (Previous Versions)",
    "category": "IT Support & Troubleshooting",
    "icon": "⏳",
    "babyAnalogy": "Tab 'Previous Versions' ajaib di Windows: jika kamu tidak sengaja menimpa isi skripsimu dengan coretan rusak, kamu bisa memundurkan filenya ke kondisi jam 10 pagi tadi.",
    "detail": "Fitur pemulihan versi sebelumnya di Windows yang memanfaatkan snapshot Volume Shadow Copy (VSS) untuk mengembalikan berkas yang tertimpa atau terhapus."
  },
  {
    "term": "System Image Backup",
    "category": "IT Support & Troubleshooting",
    "icon": "🪞",
    "babyAnalogy": "Kloning fotokopi seluruh isi laptop: mencadangkan Windows, aplikasi, foto, dan setelannya sekaligus ke dalam satu berkas berkas raksasa.",
    "detail": "Salinan persis bit-demi-bit dari seluruh drive sistem operasi yang dapat digunakan untuk memulihkan komputer secara menyeluruh jika drive rusak total."
  },
  {
    "term": "Windows RE (Recovery Environment)",
    "category": "IT Support & Troubleshooting",
    "icon": "🛠️",
    "babyAnalogy": "Layar biru penyelamat otomatis saat Windows gagal menyala 2 kali: menyediakan tombol Startup Repair, System Restore, dan Command Prompt.",
    "detail": "Platform pemulihan berbasis Windows PE yang disertakan dalam instalasi Windows untuk mendiagnosis dan memperbaiki masalah startup yang tidak dapat di-boot."
  },
  {
    "term": "Startup Repair (Windows)",
    "category": "IT Support & Troubleshooting",
    "icon": "🩺",
    "babyAnalogy": "Dokter montir otomatis yang memeriksa file bootloader BCD dan master boot record untuk membetulkan jalan masuk Windows yang tersumbat.",
    "detail": "Alat pemulihan otomatis di Windows RE yang memindai sistem untuk menemukan masalah berkas konfigurasi boot dan mencoba memperbaikinya secara otomatis."
  },
  {
    "term": "Safe Mode with Networking",
    "category": "IT Support & Troubleshooting",
    "icon": "🌐",
    "babyAnalogy": "Menyalakan Windows dalam mode pengaman rumah sakit darurat lengkap dengan kabel internet agar teknisi bisa mengunduh antivirus baru dari web.",
    "detail": "Varian booting Safe Mode Windows yang memuat driver jaringan dasar esensial untuk memungkinkan akses internet atau jaringan lokal selama perbaikan."
  },
  {
    "term": "VGA Mode / Low-Resolution Video Mode",
    "category": "IT Support & Troubleshooting",
    "icon": "📺",
    "babyAnalogy": "Menyalakan komputer dengan resolusi gambar darurat (800x600) saat monitor layar hitam akibat salah memilih resolusi layar yang terlalu tinggi.",
    "detail": "Opsi booting lanjutan Windows yang memuat driver video standar resolusi rendah untuk memecahkan masalah konfigurasi display atau driver grafis yang salah."
  },
  {
    "term": "Last Known Good Configuration",
    "category": "IT Support & Troubleshooting",
    "icon": "⏪",
    "babyAnalogy": "Memutar kembali kunci kontak ke setelan registri terakhir saat komputer berhasil dinyalakan dengan sukses kemarin sebelum kamu salah mengubah driver.",
    "detail": "Opsi pemulihan warisan Windows yang mengembalikan setelan perangkat keras dan kunci registri sistem yang disimpan saat proses boot sukses terakhir."
  },
  {
    "term": "MSConfig (System Configuration)",
    "category": "IT Support & Troubleshooting",
    "icon": "⚙️",
    "babyAnalogy": "Papan saklar setelan startup Windows: tempat mematikan aplikasi-aplikasi yang tidak penting agar komputer menyala secepat kilat saat tombol power ditekan.",
    "detail": "Utilitas administratif Windows untuk memecahkan masalah proses startup Microsoft Windows, mengelola layanan boot, dan opsi startup diagnostik."
  },
  {
    "term": "Services.msc (Windows Services Console)",
    "category": "IT Support & Troubleshooting",
    "icon": "🎛️",
    "babyAnalogy": "Daftar ruang mesin Windows: tempat melihat ratusan peri pekerja sistem, menyalakan layanan yang macet, atau mengubahnya menjadi otomatis menyala.",
    "detail": "Konsol Microsoft Management Console (MMC) untuk melihat, mengonfigurasi, menghentikan, memulai, dan mengotomatisasi layanan latar belakang Windows."
  },
  {
    "term": "Regedit (Windows Registry Editor)",
    "category": "IT Support & Troubleshooting",
    "icon": "🏛️",
    "babyAnalogy": "Membuka buku aturan rahasia terdalam Windows: harus sangat hati-hati karena salah menghapus satu huruf saja bisa membuat Windows mogok menyala.",
    "detail": "Alat administratif visual Microsoft Windows yang memungkinkan pengguna tingkat lanjut melihat dan mengubah pengaturan hierarki dalam registri sistem."
  },
  {
    "term": "DxDiag (DirectX Diagnostic Tool)",
    "category": "IT Support & Troubleshooting",
    "icon": "🎮",
    "babyAnalogy": "Buku rapor kartu grafis dan suara: memeriksa versi DirectX, melihat nama asli kartu grafis, dan menguji kemampuan rendering 3D game komputermu.",
    "detail": "Alat diagnostik bawaan Windows untuk menguji fungsionalitas DirectX dan memecahkan masalah perangkat keras terkait video dan suara."
  },
  {
    "term": "Windows Defender Offline Scan",
    "category": "IT Support & Troubleshooting",
    "icon": "🧹",
    "babyAnalogy": "Menyapu rumah saat semua orang tertidur: komputer di-restart ke mode khusus di luar Windows agar virus yang bersembunyi di memori bisa disikat tuntas.",
    "detail": "Alat pemindaian antimalware mandiri yang berjalan dari lingkungan tepercaya di luar sistem operasi Windows aktif untuk menghapus malware persisten."
  },
  {
    "term": "Windows Sandbox",
    "category": "IT Support & Troubleshooting",
    "icon": "🏖️",
    "babyAnalogy": "Kamar isolasi sekali pakai di Windows: tempat menguji berkas mencurigakan; begitu jendelanya ditutup, seluruh isi kamarnya musnah tanpa bekas.",
    "detail": "Lingkungan desktop terisolasi ringan sementara bawaan Windows Pro/Enterprise untuk menjalankan aplikasi yang tidak dipercaya dengan aman tanpa dampak ke host."
  },
  {
    "term": "Hyper-V (Windows Client Virtualization)",
    "category": "IT Support & Troubleshooting",
    "icon": "💻",
    "babyAnalogy": "Mesin pembuat komputer virtual bawaan resmi Windows Pro: membuatmu bisa menjalankan Linux Ubuntu di dalam jendela kecil di atas Windows 11.",
    "detail": "Teknologi virtualisasi berbasis hypervisor perangkat keras bawaan Microsoft yang memungkinkan pembuatan dan pengelolaan mesin virtual di sistem operasi Windows."
  },
  {
    "term": "Ransomware Incident Containment",
    "category": "IT Support & Troubleshooting",
    "icon": "🔌",
    "babyAnalogy": "Langkah pertama darurat ransomware: SEGERA CABUT KABEL LAN DAN MATIKAN WI-FI detik itu juga agar virus tidak merayap menulari komputer tetangga sebelah!",
    "detail": "Prosedur tanggap darurat tahap awal isolasi jaringan untuk mencegah penyebaran lateral infeksi ransomware ke segmen jaringan perusahaan lainnya."
  },
  {
    "term": "Social Engineering Awareness for Helpdesk",
    "category": "IT Support & Troubleshooting",
    "icon": "🛡️",
    "babyAnalogy": "Satpam helpdesk yang cerdas: menolak mereset kata sandi lewat telepon sebelum orang tersebut membuktikan identitas KTP dan nomor pegawai resminya.",
    "detail": "Protokol verifikasi identitas ketat yang diterapkan personel meja bantuan untuk mencegah serangan rekayasa sosial penipuan reset kredensial akun."
  },
  {
    "term": "Chain of Custody (Digital Forensics)",
    "category": "IT Support & Troubleshooting",
    "icon": "📜",
    "babyAnalogy": "Buku bukti pengadilan: mencatat jam berapa laptop barang bukti kejahatan disita, siapa yang memegang kuncinya, dan disimpan di brankas mana agar sah di mata hakim.",
    "detail": "Dokumentasi kronologis tertulis yang mencatat penyitaan, hak asuh, kontrol, transfer, analisis, dan disposisi barang bukti elektronik fisik atau digital."
  },
  {
    "term": "Order of Volatility in Forensics",
    "category": "IT Support & Troubleshooting",
    "icon": "⏳",
    "babyAnalogy": "Urutan menyelamatkan barang bukti yang cepat menguap: ambil data di memori RAM dan daftar koneksi jaringan dulu sebelum mematikan kabel listrik!",
    "detail": "Prinsip forensik digital yang menentukan urutan pengumpulan bukti berdasarkan seberapa cepat data tersebut hilang (Register/Cache -> RAM -> Disk -> Backup)."
  },
  {
    "term": "GDPR / Data Privacy Breach Notification",
    "category": "IT Support & Troubleshooting",
    "icon": "📢",
    "babyAnalogy": "Kewajiban lapor darurat: jika data pelanggan bocor dicuri hacker, perusahaan wajib mengumumkan dan melapor ke dinas resmi dalam waktu maksimal 72 jam.",
    "detail": "Persyaratan regulasi hukum privasi data di mana organisasi wajib memberi tahu otoritas pengawas dan korban dalam jangka waktu ketat setelah pelanggaran data terjadi."
  },
  {
    "term": "Helpdesk Soft Skills (Empathy & Active Listening)",
    "category": "IT Support & Troubleshooting",
    "icon": "❤️",
    "babyAnalogy": "Keahlian hati pahlawan IT: berbicara ramah, mendengarkan dengan penuh empati saat pengguna sedang panik, dan tidak memakai bahasa teknis angker yang membingungkan.",
    "detail": "Kemampuan interpersonal komunikasi krusial bagi personel dukungan TI untuk meredakan ketegangan, membangun kepercayaan, dan menjelaskan solusi dengan bahasa awam yang ramah."
  },
  {
    "term": "Preventive Maintenance Schedule",
    "category": "IT Support & Troubleshooting",
    "icon": "📅",
    "babyAnalogy": "Jadwal posyandu komputer rutin: meniup debu setiap 3 bulan, menginstal pembaruan Windows setiap bulan, dan memeriksa kesehatan harddisk setiap minggu.",
    "detail": "Rencana pemeliharaan proaktif berkala untuk menjaga perangkat keras dan lunak beroperasi dalam kondisi puncak guna mencegah kerusakan mendadak."
  },
  {
    "term": "Change Management (RFC - Request for Change)",
    "category": "IT Support & Troubleshooting",
    "icon": "📝",
    "babyAnalogy": "Surat izin resmi sebelum merombak kabel server: menjelaskan apa yang akan diubah, jam berapa dikerjakan, dan bagaimana cara mundur darurat jika gagal.",
    "detail": "Proses tata kelola formal terstruktur untuk mengontrol dan menyetujui siklus hidup semua perubahan infrastruktur TI guna meminimalkan risiko gangguan operasional."
  },
  {
    "term": "Post-Mortem / Incident Retrospective",
    "category": "IT Support & Troubleshooting",
    "icon": "🔍",
    "babyAnalogy": "Rapat evaluasi setelah badai reda: bukan untuk saling menyalahkan orang, tapi mencari tahu kelemahan sistem agar insiden serupa tidak terulang di masa depan.",
    "detail": "Analisis retrospektif tanpa menyalahkan (blameless post-mortem) yang dilakukan setelah insiden besar untuk mendokumentasikan akar masalah dan perbaikan pencegahan."
  },
  {
    "term": "The Joy of Lifelong IT Learning",
    "category": "IT Support & Troubleshooting",
    "icon": "🚀",
    "babyAnalogy": "Kunci sukses pahlawan IT sejati: dunia teknologi terus berkembang setiap hari, jadikan rasa ingin tahu dan semangat belajar sebagai petualangan paling membahagiakan!",
    "detail": "Pola pikir bertumbuh (growth mindset) berkelanjutan yang memandang evolusi pesat teknologi informasi sebagai kesempatan belajar dan berkarya yang menyenangkan."
  }
];
