/**
 * SHORTCUT_TRAINER.JS
 * Game Edukasi Pintasan Keyboard Excel & Word (Windows)
 * Berdasarkan Sumber Resmi Dokumen Referensi PDF & DOCX:
 * - D:\Aplikasi Pembelajaran\Referensi\Pintasan_Keyboard_Excel.pdf
 * - D:\Aplikasi Pembelajaran\Referensi\Pintasan_Keyboard_Word.pdf
 * Dilengkapi Papan Ketik Interaktif & Nalar Bayi Kodi!
 */

(function() {
  'use strict';

  // Bank Data Pintasan Excel (53 Pintasan Terpilih dari 239 Data Dokumen)
  window.EXCEL_SHORTCUTS = [
  {
    "id": "ex-1",
    "key": "Ctrl+S",
    "keysArray": [
      "Control",
      "s"
    ],
    "category": "Paling Sering Digunakan",
    "action": "Menyimpan buku kerja (Save).",
    "scenario": "Kamu baru saja mengetik 200 baris data rekap kasir. Tiba-tiba ada kilat dan laptop bisa mati kapan saja!",
    "nalarBayiKodi": "S = Save (Simpan)! Bayangin kamu lagi bangun istana pasir yang cantik, terus ada ombak datang. Kalau kamu tekan Ctrl+S, istanamu langsung dibekukan jadi batu ajaib dan tersimpan aman di harddisk! Jangan nunggu bos teriak file hilang ya!"
  },
  {
    "id": "ex-2",
    "key": "Ctrl+C",
    "keysArray": [
      "Control",
      "c"
    ],
    "category": "Paling Sering Digunakan",
    "action": "Menyalin pilihan ke Clipboard (Copy).",
    "scenario": "Kamu mau memfotokopi daftar harga barang dari kolom A ke kolom E tanpa mengetik ulang.",
    "nalarBayiKodi": "C = Copy (Salin/Fotokopi)! Begitu kamu tekan Ctrl+C, kotak sel bakal punya garis semut berputar-putar. Itu tandanya bayangan datanya udah masuk ke ransel saku rahasia komputer (Clipboard) siap difotokopi ke mana pun!"
  },
  {
    "id": "ex-3",
    "key": "Ctrl+V",
    "keysArray": [
      "Control",
      "v"
    ],
    "category": "Paling Sering Digunakan",
    "action": "Menempelkan pilihan dari Clipboard (Paste).",
    "scenario": "Bayangan sel yang sudah kamu salin mau kamu tempelkan di baris baru laporan bos.",
    "nalarBayiKodi": "V = Paste (Tempel)! Huruf V bentuknya mirip ujung corong lem atau panah menancap ke bawah. Tekan Ctrl+V, langsung 'Pluk!' data dari ransel saku tadi tertempel rapi di sel yang kamu pilih!"
  },
  {
    "id": "ex-4",
    "key": "Ctrl+Z",
    "keysArray": [
      "Control",
      "z"
    ],
    "category": "Paling Sering Digunakan",
    "action": "Batalkan tindakan terbaru (Undo).",
    "scenario": "Aduh! Kamu kepencet tombol hapus dan seluruh rumus laporan penting lenyap seketika!",
    "nalarBayiKodi": "Z = Undo (Mesin Waktu Kembali)! Tenang, jangan panik nangis! Tekan Ctrl+Z, komputer bakal memutar waktu mundur satu detik. Data yang barusan hilang langsung balik utuh seperti sulap!"
  },
  {
    "id": "ex-5",
    "key": "Ctrl+Y",
    "keysArray": [
      "Control",
      "y"
    ],
    "category": "Paling Sering Digunakan",
    "action": "Ulangi tindakan yang dibatalkan (Redo).",
    "scenario": "Tadi kamu membatalkan tindakan, tapi ternyata tindakan tadi memang benar dan mau dimajukan lagi.",
    "nalarBayiKodi": "Y = Redo (Maju Lagi)! Lawan dari Ctrl+Z. Kalau Ctrl+Z itu jalan mundur, Ctrl+Y itu jalan maju lagi. Jadi kalau kamu bilang: 'Eh ternyata yang tadi bener deh!', tinggal tekan Ctrl+Y!"
  },
  {
    "id": "ex-6",
    "key": "Ctrl+B",
    "keysArray": [
      "Control",
      "b"
    ],
    "category": "Paling Sering Digunakan",
    "action": "Menerapkan pemformatan tebal ke sel (Bold).",
    "scenario": "Bos minta judul kolom tabel laporan keuangan terlihat tegas, gagah, dan menarik perhatian.",
    "nalarBayiKodi": "B = Bold (Badan Berotot Tebal)! Teks yang tadinya kurus kering, sekali ditekan Ctrl+B langsung jadi tebal berisi seperti atlet binaraga. Biar mata bos langsung tertuju ke judul penting itu!"
  },
  {
    "id": "ex-7",
    "key": "Ctrl+I",
    "keysArray": [
      "Control",
      "i"
    ],
    "category": "Paling Sering Digunakan",
    "action": "Menerapkan pemformatan miring ke sel (Italic).",
    "scenario": "Kamu memasukkan istilah bahasa asing atau catatan kaki yang harus dibedakan dari teks biasa.",
    "nalarBayiKodi": "I = Italic (Miring Bergaya)! Huruf I bentuknya kayak orang lagi berdiri miring tertiup angin sepoi-sepoi. Bagus banget buat istilah bahasa Inggris atau catatan khusus!"
  },
  {
    "id": "ex-8",
    "key": "Ctrl+U",
    "keysArray": [
      "Control",
      "u"
    ],
    "category": "Paling Sering Digunakan",
    "action": "Menerapkan pemformatan garis bawah (Underline).",
    "scenario": "Kamu ingin menegaskan angka total akhir laba bersih agar semua orang tahu itu hasil final.",
    "nalarBayiKodi": "U = Underline (Garis di Bawah)! Huruf U punya mangkok di bawahnya. Tekan Ctrl+U, komputer bakal menarik garis lurus di bawah kata atau angka kamu biar kelihatan resmi!"
  },
  {
    "id": "ex-9",
    "key": "Ctrl+W",
    "keysArray": [
      "Control",
      "w"
    ],
    "category": "Paling Sering Digunakan",
    "action": "Tutup buku kerja aktif (Close Workbook).",
    "scenario": "Jam kerja sudah selesai pukul 5 sore dan kamu mau menutup jendela Excel ini dengan cepat tanpa cari tombol silang.",
    "nalarBayiKodi": "W = Window/Worksheet Close (Tutup Jendela)! Daripada tangan kamu capek geser mouse ke pojok kanan atas ngepasin tombol X kecil, tekan Ctrl+W langsung beres!"
  },
  {
    "id": "ex-10",
    "key": "Ctrl+O",
    "keysArray": [
      "Control",
      "o"
    ],
    "category": "Paling Sering Digunakan",
    "action": "Buka buku kerja lain (Open).",
    "scenario": "Kamu sedang bekerja di lembar Januari dan ingin membuka file laporan Februari yang tersimpan di dokumen.",
    "nalarBayiKodi": "O = Open (Buka Pintu)! Komputer langsung membuka jendela daftar file kamu. Tinggal pilih file mana yang mau kamu buka tanpa ribet buka Windows Explorer!"
  },
  {
    "id": "ex-11",
    "key": "Ctrl+A",
    "keysArray": [
      "Control",
      "a"
    ],
    "category": "Paling Sering Digunakan",
    "action": "Pilih semua konten lembar kerja (Select All).",
    "scenario": "Kamu mau mengganti jenis font semua tabel dari Arial ke Segoe UI sekaligus tanpa ngeblok manual 10.000 sel.",
    "nalarBayiKodi": "A = All (Semua Masuk Perangkap)! Sekali tekan Ctrl+A, seluruh sel dari A1 sampai XFD1048576 langsung terpilih dalam satu jentikan jari!"
  },
  {
    "id": "ex-12",
    "key": "Ctrl+F",
    "keysArray": [
      "Control",
      "f"
    ],
    "category": "Paling Sering Digunakan",
    "action": "Cari data di lembar kerja (Find).",
    "scenario": "Di antara 5.000 nama siswa, kamu diminta mencari di mana letak nama 'Budi Santoso' dalam hitungan detik.",
    "nalarBayiKodi": "F = Find (Kaca Pembesar Detektif)! Tekan Ctrl+F, ketik nama yang dicari, Enter! Layar Excel langsung otomatis melompat tepat ke sel tempat orang itu berada!"
  },
  {
    "id": "ex-13",
    "key": "Ctrl+H",
    "keysArray": [
      "Control",
      "h"
    ],
    "category": "Paling Sering Digunakan",
    "action": "Cari dan Ganti teks secara massal (Find and Replace).",
    "scenario": "Ada salah ketik nama kota 'Djakarta' sebanyak 800 baris yang harus diganti jadi 'Jakarta'.",
    "nalarBayiKodi": "H = Replace (Ganti Serentak)! Jangan diganti satu per satu manual bisa sampai subuh! Masukkan kata lama dan kata baru, klik Ganti Semua, 800 baris beres dalam 0,1 detik!"
  },
  {
    "id": "ex-14",
    "key": "F12",
    "keysArray": [
      "F12"
    ],
    "category": "Paling Sering Digunakan",
    "action": "Simpan Sebagai buku kerja baru (Save As).",
    "scenario": "Laporan asli tidak boleh ditimpa, kamu mau menyimpan salinan baru dengan nama 'Laporan_Revisi_Final.xlsx'.",
    "nalarBayiKodi": "F12 = Simpan Sebagai Nama Baru! Tombol sakti paling cepat untuk memunculkan kotak dialog Save As tanpa harus klik File -> Save As -> Browse!"
  },
  {
    "id": "ex-15",
    "key": "Tab",
    "keysArray": [
      "Tab"
    ],
    "category": "Navigasi & Gerak Sel Cepat",
    "action": "Pindah ke sel berikutnya di sebelah kanan.",
    "scenario": "Kamu lagi input data kasir: ketik Nomor, mau lanjut ketik Nama Barang di kolom sebelahnya.",
    "nalarBayiKodi": "Tab = Geser Kanan! Waktu ngetik data baris, jari kamu nggak perlu pindah ke tombol panah atau mouse. Cukup tekan Tab, kursor langsung lompat manis ke kolom kanan!"
  },
  {
    "id": "ex-16",
    "key": "Shift+Tab",
    "keysArray": [
      "Shift",
      "Tab"
    ],
    "category": "Navigasi & Gerak Sel Cepat",
    "action": "Pindah ke sel sebelumnya di sebelah kiri.",
    "scenario": "Waduh, angka yang barusan kamu ketik di kolom kanan ada salah, mau mundur satu sel ke kiri.",
    "nalarBayiKodi": "Shift+Tab = Mundur Kiri! Tombol Shift itu kayak gigi mundur di mobil. Kalau Tab maju ke kanan, Shift+Tab mundur balik ke kiri!"
  },
  {
    "id": "ex-17",
    "key": "Enter",
    "keysArray": [
      "Enter"
    ],
    "category": "Navigasi & Gerak Sel Cepat",
    "action": "Selesaikan input dan pindah ke sel di bawahnya.",
    "scenario": "Kamu selesai mengetik nama di baris 2 dan ingin langsung mengisi baris 3 di bawahnya.",
    "nalarBayiKodi": "Enter = Simpan & Turun Bawah! Seperti gravitasi bumi, habis ngetik langsung 'Bruk!' turun satu lantai ke baris berikutnya siap ketik data baru!"
  },
  {
    "id": "ex-18",
    "key": "Shift+Enter",
    "keysArray": [
      "Shift",
      "Enter"
    ],
    "category": "Navigasi & Gerak Sel Cepat",
    "action": "Pindah ke sel di atasnya.",
    "scenario": "Kamu mau naik kembali ke baris sebelumnya tanpa pegang mouse.",
    "nalarBayiKodi": "Shift+Enter = Naik ke Atas! Gigi mundur gravitasi! Kalau Enter turun ke bawah, Shift+Enter melompat naik ke sel atasnya!"
  },
  {
    "id": "ex-19",
    "key": "Ctrl+ArrowDown",
    "keysArray": [
      "Control",
      "ArrowDown"
    ],
    "category": "Navigasi & Gerak Sel Cepat",
    "action": "Lompat kilat ke sel paling bawah dari blok data.",
    "scenario": "Tabelmu punya 10.000 baris. Mau pergi ke data paling terakhir di bawah tanpa scroll roda mouse ratusan kali.",
    "nalarBayiKodi": "Ctrl+Panah Bawah = Roket Terjun Bebas! Daripada jari keriting nge-scroll mouse, tekan Ctrl+Panah Bawah, sekejap mata kamu langsung mendarat di baris ke-10.000!"
  },
  {
    "id": "ex-20",
    "key": "Ctrl+ArrowUp",
    "keysArray": [
      "Control",
      "ArrowUp"
    ],
    "category": "Navigasi & Gerak Sel Cepat",
    "action": "Lompat kilat ke sel paling atas dari blok data.",
    "scenario": "Dari baris 10.000 di paling bawah, kamu mau kembali ke judul tabel di baris 1.",
    "nalarBayiKodi": "Ctrl+Panah Atas = Roket Naik ke Puncak! Langsung terbang melesat dari lantai paling bawah kembali ke baris paling atas dalam 0,01 detik!"
  },
  {
    "id": "ex-21",
    "key": "Ctrl+Home",
    "keysArray": [
      "Control",
      "Home"
    ],
    "category": "Navigasi & Gerak Sel Cepat",
    "action": "Kembali ke sel paling awal lembar kerja (A1).",
    "scenario": "Kursor kamu tersesat di sel Z892 yang jauh di ujung sana dan kamu mau pulang ke titik awal.",
    "nalarBayiKodi": "Ctrl+Home = Pulang ke Rumah (Sel A1)! 'Home' artinya rumah. Sel A1 adalah kamar tidur utama Excel. Tekan ini, kamu langsung pulang ke titik koordinat 0!"
  },
  {
    "id": "ex-22",
    "key": "Ctrl+End",
    "keysArray": [
      "Control",
      "End"
    ],
    "category": "Navigasi & Gerak Sel Cepat",
    "action": "Lompat ke sel paling pojok kanan bawah yang aktif.",
    "scenario": "Kamu mau mengecek seberapa luas tabel yang pernah diisi data di lembar kerja ini.",
    "nalarBayiKodi": "Ctrl+End = Ujung Perbatasan Negeri! Langsung teleportasi ke pojok paling tenggara dari semua data yang ada di spreadsheet!"
  },
  {
    "id": "ex-23",
    "key": "Alt+=",
    "keysArray": [
      "Alt",
      "="
    ],
    "category": "Rumus, Fungsi & Auto-Sum",
    "action": "AutoSum otomatis memasukkan rumus =SUM(...) ke sel.",
    "scenario": "Kamu berada di bawah kolom harga barang dan ingin menjumlahkan totalnya seketika.",
    "nalarBayiKodi": "Alt + = (AutoSum Ajaib)! Ini rahasia tercepat para akuntan senior dunia! Cukup taruh kursor di bawah angka, tekan Alt dan =, Excel langsung otomatis menulis =SUM(A1:A10) dan menyeleksi seluruh angkanya! Tekan Enter, selesai!"
  },
  {
    "id": "ex-24",
    "key": "F2",
    "keysArray": [
      "F2"
    ],
    "category": "Rumus, Fungsi & Auto-Sum",
    "action": "Masuk ke mode Edit Sel aktif (Edit Cell).",
    "scenario": "Rumus di sel kurang tanda kurung tutup. Kalau langsung diketik dari keyboard, rumusnya malah ketimpa dan hilang semua!",
    "nalarBayiKodi": "F2 = Kunci Pintu Edit! Kalau kamu nggak tekan F2, sekali ketik huruf maka seluruh isi sel langsung terhapus tertimpa teks baru. Tekan F2 dulu biar kursor masuk ke dalam rumus!"
  },
  {
    "id": "ex-25",
    "key": "F4",
    "keysArray": [
      "F4"
    ],
    "category": "Rumus, Fungsi & Auto-Sum",
    "action": "Kunci sel jadi referensi absolut ($A$1) atau ulangi aksi terakhir.",
    "scenario": "Kamu mengalikan harga barang dengan sel PPN B1. Pas rumus diseret ke bawah, referensi PPN bergeser jadi B2 dan hasilnya error!",
    "nalarBayiKodi": "F4 = Gembok Dolar Sakti ($)! Tekan F4 pada koordinat A1, langsung berubah jadi $A$1. Tanda dollar itu gembok besi yang bikin alamat sel nggak bakal bergeser ke mana-mana pas ditarik ke bawah!"
  },
  {
    "id": "ex-26",
    "key": "Shift+F3",
    "keysArray": [
      "Shift",
      "F3"
    ],
    "category": "Rumus, Fungsi & Auto-Sum",
    "action": "Buka kotak dialog Sisipkan Fungsi (Insert Function fx).",
    "scenario": "Kamu lupa susunan rumus VLOOKUP atau STDEV dan butuh panduan asisten rumus.",
    "nalarBayiKodi": "Shift+F3 = Buku Mantra Fungsi fx! Excel bakal membukakan ensiklopedia rumus lengkap beserta kotak isian parameternya biar kamu nggak salah ketik koma atau titik dua!"
  },
  {
    "id": "ex-27",
    "key": "Ctrl+`",
    "keysArray": [
      "Control",
      "`"
    ],
    "category": "Rumus, Fungsi & Auto-Sum",
    "action": "Tampilkan rumus asli di seluruh sel (Show Formulas).",
    "scenario": "Kamu mau mengaudit lembar kerja auditor untuk memeriksa apakah angka 1.000.000 itu diketik manual atau hasil rumus.",
    "nalarBayiKodi": "Ctrl+` (Kacamata Tembus Pandang X-Ray)! Tombol backtick di atas tombol Tab ini bakal membongkar rahasia semua sel! Nilai hasil angka disingkap dan rumus aslinya terpampang jelas!"
  },
  {
    "id": "ex-28",
    "key": "Ctrl+D",
    "keysArray": [
      "Control",
      "d"
    ],
    "category": "Rumus, Fungsi & Auto-Sum",
    "action": "Fill Down - Salin isi rumus dari sel atas ke bawah.",
    "scenario": "Sel A1 berisi rumus. Kamu blok sel A1 sampai A10 dan mau rumusnya terisi ke bawah seketika.",
    "nalarBayiKodi": "D = Down (Isi ke Bawah)! Mirip fungsi tarik handle ke bawah, tapi tanpa mouse! Blok sel yang mau diisi, tekan Ctrl+D, langsung terisi serentak!"
  },
  {
    "id": "ex-29",
    "key": "Ctrl+R",
    "keysArray": [
      "Control",
      "r"
    ],
    "category": "Rumus, Fungsi & Auto-Sum",
    "action": "Fill Right - Salin isi rumus dari sel kiri ke kanan.",
    "scenario": "Kolom Januari ada rumus total, kamu blok ke kolom Februari dan Maret di sebelah kanannya.",
    "nalarBayiKodi": "R = Right (Isi ke Kanan)! Saudara kembarnya Ctrl+D tapi untuk arah kanan. Sekali tekan, rumus langsung meluncur mengisi kolom-kolom kanan!"
  },
  {
    "id": "ex-30",
    "key": "Ctrl+Shift+Enter",
    "keysArray": [
      "Control",
      "Shift",
      "Enter"
    ],
    "category": "Rumus, Fungsi & Auto-Sum",
    "action": "Masukkan rumus Array / CSE Formula ({=FORMULA}).",
    "scenario": "Kamu membuat rumus matriks atau perhitungan statistik banyak baris sekaligus.",
    "nalarBayiKodi": "Trio Maut CSE (Ctrl+Shift+Enter)! Ini rumus tingkat dewa Excel. Begitu ditekan bersamaan, Excel bakal membungkus rumusmu dengan kurung kurawal ajaib {...} untuk komputasi array!"
  },
  {
    "id": "ex-31",
    "key": "Ctrl+1",
    "keysArray": [
      "Control",
      "1"
    ],
    "category": "Format Sel & Format Angka Kilat",
    "action": "Buka kotak dialog Format Sel lengkap (Format Cells).",
    "scenario": "Kamu mau mengatur perataan teks miring 45 derajat, border ganda, dan warna sel khusus.",
    "nalarBayiKodi": "Ctrl+1 = Salon Kecantikan Sel Nomor Satu! Semua pengaturan kosmetik sel ada di sini: format angka, font, garis border, dan warna warni. 1 tombol untuk segalanya!"
  },
  {
    "id": "ex-32",
    "key": "Ctrl+Shift+$",
    "keysArray": [
      "Control",
      "Shift",
      "$"
    ],
    "category": "Format Sel & Format Angka Kilat",
    "action": "Format Mata Uang / Currency ($ / Rp).",
    "scenario": "Angka 50000 terlihat polos, bos mau langsung ada tanda mata uang dan pemisah ribuan.",
    "nalarBayiKodi": "Simbol $ = Uang Mengalir! Tekan Ctrl+Shift+$ (tombol angka 4 di keyboard), angka biasa langsung disulap jadi format uang mewah lengkap dengan koma dan desimal!"
  },
  {
    "id": "ex-33",
    "key": "Ctrl+Shift+%",
    "keysArray": [
      "Control",
      "Shift",
      "%"
    ],
    "category": "Format Sel & Format Angka Kilat",
    "action": "Format Persentase (%) tanpa angka desimal.",
    "scenario": "Angka 0.25 mau diubah menjadi 25% untuk laporan diskon penjualan.",
    "nalarBayiKodi": "Simbol % = Persen Kilat! Angka desimal koma nol koma sekian langsung dikalikan 100 dan ditempelkan lambang persen manis di belakangnya!"
  },
  {
    "id": "ex-34",
    "key": "Ctrl+Shift+!",
    "keysArray": [
      "Control",
      "Shift",
      "!"
    ],
    "category": "Format Sel & Format Angka Kilat",
    "action": "Format Angka dengan 2 desimal dan pemisah ribuan (Number).",
    "scenario": "Angka 1000000 susah dibaca nol-nya, harus diubah jadi 1,000,000.00.",
    "nalarBayiKodi": "Tanda Seru ! = Angka Rapi Ribuan! Titik koma ribuan langsung dipasang rapi jadi mata kamu nggak bakal pusing ngitung jumlah nol yang berjejer!"
  },
  {
    "id": "ex-35",
    "key": "Ctrl+Shift+#",
    "keysArray": [
      "Control",
      "Shift",
      "#"
    ],
    "category": "Format Sel & Format Angka Kilat",
    "action": "Format Tanggal (Hari, Bulan-Teks, Tahun).",
    "scenario": "Angka serial 45292 mau diubah jadi tanggal yang enak dibaca seperti 12-Okt-24.",
    "nalarBayiKodi": "Simbol # = Kalender Meja! Angka kode komputer langsung diterjemahkan jadi tanggal kalender resmi lengkap dengan nama bulannya!"
  },
  {
    "id": "ex-36",
    "key": "Ctrl+Shift+~",
    "keysArray": [
      "Control",
      "Shift",
      "~"
    ],
    "category": "Format Sel & Format Angka Kilat",
    "action": "Format Angka Umum / Netral (General).",
    "scenario": "Kamu mau menghapus semua format mata uang atau persen kembali ke angka polos semula.",
    "nalarBayiKodi": "Gelombang ~ = Cuci Bersih Netral! Menghapus semua riasan kosmetik sel dan mengembalikan angka ke bentuk murninya!"
  },
  {
    "id": "ex-37",
    "key": "Ctrl+Shift+&",
    "keysArray": [
      "Control",
      "Shift",
      "&"
    ],
    "category": "Format Sel & Format Angka Kilat",
    "action": "Pasang garis batas outline di sekeliling sel (Border Outline).",
    "scenario": "Tabelmu terlihat melayang di udara tanpa garis bingkai batas yang jelas.",
    "nalarBayiKodi": "Simbol & = Pagar Pembatas Kuat! Kotak sel yang kamu blok langsung dipagari garis batas tegas di keempat sisinya biar rapi!"
  },
  {
    "id": "ex-38",
    "key": "Ctrl+Shift+_",
    "keysArray": [
      "Control",
      "Shift",
      "_"
    ],
    "category": "Format Sel & Format Angka Kilat",
    "action": "Hapus semua garis batas dari sel (Remove Border).",
    "scenario": "Ada garis batas yang berantakan dan kamu mau membersihkannya jadi polos lagi.",
    "nalarBayiKodi": "Garis Bawah Kosong _ = Cabut Pagar! Semua garis border yang nempel di sel langsung dicopot bersih seketika!"
  },
  {
    "id": "ex-39",
    "key": "Shift+Space",
    "keysArray": [
      "Shift",
      "Space"
    ],
    "category": "Seleksi Baris, Kolom & Olah Data",
    "action": "Pilih seluruh baris saat ini (Select Entire Row).",
    "scenario": "Kamu mau menghapus baris transaksi nomor 5 dari ujung kiri A sampai ujung kanan XFD.",
    "nalarBayiKodi": "Shift + Spasi = Sabuk Pengaman Baris Horisontal! Sekali tekan, satu baris penuh dari barat sampai timur langsung tersorot rapi!"
  },
  {
    "id": "ex-40",
    "key": "Ctrl+Space",
    "keysArray": [
      "Control",
      "Space"
    ],
    "category": "Seleksi Baris, Kolom & Olah Data",
    "action": "Pilih seluruh kolom saat ini (Select Entire Column).",
    "scenario": "Kamu mau mengubah lebar satu kolom penuh dari atas sampai bawah.",
    "nalarBayiKodi": "Ctrl + Spasi = Tiang Listrik Kolom Vertikal! Menyorot seluruh kolom dari langit baris 1 sampai dasar laut baris 1.048.576!"
  },
  {
    "id": "ex-41",
    "key": "Ctrl+Shift++",
    "keysArray": [
      "Control",
      "Shift",
      "+"
    ],
    "category": "Seleksi Baris, Kolom & Olah Data",
    "action": "Sisipkan sel, baris, atau kolom baru (Insert).",
    "scenario": "Ada data karyawan yang kelupaan dan kamu harus menyisipkan satu baris kosong di tengah-tengah tabel.",
    "nalarBayiKodi": "Tanda Tambah + = Buka Ruang Baru! Excel bakal membukakan selipan baris kosong baru yang segar tanpa merusak data lain!"
  },
  {
    "id": "ex-42",
    "key": "Ctrl+-",
    "keysArray": [
      "Control",
      "-"
    ],
    "category": "Seleksi Baris, Kolom & Olah Data",
    "action": "Hapus sel, baris, atau kolom yang dipilih (Delete).",
    "scenario": "Baris kosong yang tidak terpakai harus disingkirkan agar tabel rapat rapi.",
    "nalarBayiKodi": "Tanda Kurang - = Singkirkan! Baris atau kolom yang tidak dibutuhkan langsung dipotong dan dibuang ke tempat sampah digital!"
  },
  {
    "id": "ex-43",
    "key": "Ctrl+Shift+L",
    "keysArray": [
      "Control",
      "Shift",
      "l"
    ],
    "category": "Seleksi Baris, Kolom & Olah Data",
    "action": "Nyalakan / Matikan Filter Otomatis (Toggle AutoFilter).",
    "scenario": "Bos minta menampilkan hanya transaksi di kota 'Surabaya' dari ribuan baris penjualan.",
    "nalarBayiKodi": "L = saring/List (Corong Penyaring Filter)! Tekan ini, langsung muncul tombol segitiga corong penyaring di setiap judul kolom! Mau cari apa aja tinggal klik corongnya!"
  },
  {
    "id": "ex-44",
    "key": "Alt+ArrowDown",
    "keysArray": [
      "Alt",
      "ArrowDown"
    ],
    "category": "Seleksi Baris, Kolom & Olah Data",
    "action": "Buka menu dropdown Filter pada kolom aktif.",
    "scenario": "Kursor ada di header tabel berfilter dan kamu mau membuka menu centang pilihan tanpa sentuh mouse.",
    "nalarBayiKodi": "Alt+Panah Bawah = Buka Tirai Filter! Menu filter langsung melorot turun ke bawah siap kamu pilih pakai tombol panah dan spasi!"
  },
  {
    "id": "ex-45",
    "key": "Ctrl+T",
    "keysArray": [
      "Control",
      "t"
    ],
    "category": "Seleksi Baris, Kolom & Olah Data",
    "action": "Ubah data biasa jadi Tabel Cerdas Excel (Create Table).",
    "scenario": "Kamu punya data mentah dan mau otomatis diberi warna belang-belang selang-seling, filter otomatis, dan rumus dinamis.",
    "nalarBayiKodi": "T = Table Cerdas (Smart Table)! Ini fitur favorit para master spreadsheet! Data mentah kusam langsung disulap jadi tabel interaktif modern bergaris cantik dalam 1 detik!"
  },
  {
    "id": "ex-46",
    "key": "Ctrl+9",
    "keysArray": [
      "Control",
      "9"
    ],
    "category": "Seleksi Baris, Kolom & Olah Data",
    "action": "Sembunyikan baris yang dipilih (Hide Rows).",
    "scenario": "Ada baris gaji rahasia pimpinan yang tidak boleh dilihat pas presentasi proyektor.",
    "nalarBayiKodi": "Ctrl+9 = Jubah Gaib Baris! Baris tersebut langsung lenyap dari pandangan mata tanpa dihapus, aman dan rahasia!"
  },
  {
    "id": "ex-47",
    "key": "Ctrl+0",
    "keysArray": [
      "Control",
      "0"
    ],
    "category": "Seleksi Baris, Kolom & Olah Data",
    "action": "Sembunyikan kolom yang dipilih (Hide Columns).",
    "scenario": "Kolom perhitungan sementara ingin disembunyikan agar tabel terlihat ringkas saat dicetak.",
    "nalarBayiKodi": "Ctrl+0 = Jubah Gaib Kolom! Kolom yang dipilih menyusut jadi garis tipis tak terlihat!"
  },
  {
    "id": "ex-48",
    "key": "Alt+H",
    "keysArray": [
      "Alt",
      "h"
    ],
    "category": "Akses Tab Pita & Tombol Fungsi",
    "action": "Buka tab Beranda (Home Ribbon).",
    "scenario": "Kamu mau mengakses alat pemformatan teks, warna, perataan, dan angka di pita menu atas.",
    "nalarBayiKodi": "Alt+H = Home Sweet Home! Tombol ajaib untuk mengaktifkan huruf petunjuk di pita menu Beranda tanpa menyentuh mouse sama sekali!"
  },
  {
    "id": "ex-49",
    "key": "Alt+M",
    "keysArray": [
      "Alt",
      "m"
    ],
    "category": "Akses Tab Pita & Tombol Fungsi",
    "action": "Buka tab Rumus (Formulas Ribbon).",
    "scenario": "Kamu mau mencari rumus finansial atau mengecek evaluasi rumus di tab Rumus.",
    "nalarBayiKodi": "M = Math/Formulas! Langsung membuka gudang laboratorium matematika dan rumus lengkap Microsoft Excel!"
  },
  {
    "id": "ex-50",
    "key": "Alt+A",
    "keysArray": [
      "Alt",
      "a"
    ],
    "category": "Akses Tab Pita & Tombol Fungsi",
    "action": "Buka tab Data (Data Ribbon).",
    "scenario": "Kamu mau mengurutkan data dari A-Z, membuat validasi data dropdown, atau hapus duplikat.",
    "nalarBayiKodi": "A = Analisis Data! Pintu gerbang utama untuk memproses, memfilter, dan membersihkan data kantor!"
  },
  {
    "id": "ex-51",
    "key": "F7",
    "keysArray": [
      "F7"
    ],
    "category": "Akses Tab Pita & Tombol Fungsi",
    "action": "Pemeriksaan Ejaan kata di lembar kerja (Spelling).",
    "scenario": "Sebelum laporan diserahkan ke direktur, kamu mau memastikan tidak ada kata yang typo atau salah ketik.",
    "nalarBayiKodi": "F7 = Guru Bahasa Teliti! Komputer bakal membaca seluruh kata di lembar kerja dan menandai mana kata yang salah ketik!"
  },
  {
    "id": "ex-52",
    "key": "F9",
    "keysArray": [
      "F9"
    ],
    "category": "Akses Tab Pita & Tombol Fungsi",
    "action": "Hitung ulang semua rumus di seluruh buku kerja (Recalculate).",
    "scenario": "Pengaturan Excel kamu ada di mode manual, dan kamu mau memaksa semua rumus menghitung angka terbarunya sekarang juga.",
    "nalarBayiKodi": "F9 = Tombol Petir Kalkulasi! Memerintahkan prosesor komputer untuk menghitung ulang seluruh rumus dari lembar 1 sampai lembar terakhir!"
  },
  {
    "id": "ex-53",
    "key": "F11",
    "keysArray": [
      "F11"
    ],
    "category": "Akses Tab Pita & Tombol Fungsi",
    "action": "Buat Grafik / Bagan batang instan di lembar terpisah.",
    "scenario": "Bos minta dibuatkan grafik perbandingan omzet dalam 3 detik untuk rapat mendadak.",
    "nalarBayiKodi": "F11 = Sulap Grafik Ajaib 1 Detik! Blok data angka, tekan F11, wusss! Langsung tercipta lembar baru berisi grafik batang profesional siap dipresentasikan!"
  }
];

  // Bank Data Pintasan Word (55 Pintasan Terpilih dari 311 Data Dokumen)
  window.WORD_SHORTCUTS = [
  {
    "id": "wd-1",
    "key": "Ctrl+N",
    "keysArray": [
      "Control",
      "n"
    ],
    "category": "Paling Sering Digunakan",
    "action": "Membuat dokumen baru yang masih kosong (New Document).",
    "scenario": "Kamu baru saja dapat ide menulis artikel baru dan mau membuka lembar kertas putih bersih baru.",
    "nalarBayiKodi": "N = New (Kertas Putih Baru Segar)! Daripada klik File -> New -> Blank Document, tekan Ctrl+N langsung lembar putih mulus baru terbuka di hadapanmu siap diketik!"
  },
  {
    "id": "wd-2",
    "key": "Ctrl+O",
    "keysArray": [
      "Control",
      "o"
    ],
    "category": "Paling Sering Digunakan",
    "action": "Membuka dokumen yang sudah tersimpan (Open Document).",
    "scenario": "Kamu mau melanjutkan skripsi atau tugas makalah yang kemarin kamu simpan di laptop.",
    "nalarBayiKodi": "O = Open (Buka Lemari Arsip)! Komputer langsung menampilkan daftar dokumen-dokumen yang baru saja kamu kerjakan!"
  },
  {
    "id": "wd-3",
    "key": "Ctrl+S",
    "keysArray": [
      "Control",
      "s"
    ],
    "category": "Paling Sering Digunakan",
    "action": "Menyimpan dokumen ke harddisk (Save).",
    "scenario": "Kamu sudah mengetik 5 halaman makalah penting. Lampu kamar berkedip-kedip tanda listrik mau padam!",
    "nalarBayiKodi": "S = Save (Kunci Brankas Aman)! Jari kelingking di Ctrl, jari manis di S, tekan setiap 5 menit sekali biar tulisan berhargamu nggak pernah hilang ditelan bumi!"
  },
  {
    "id": "wd-4",
    "key": "Ctrl+W",
    "keysArray": [
      "Control",
      "w"
    ],
    "category": "Paling Sering Digunakan",
    "action": "Menutup dokumen Word yang aktif (Close Document).",
    "scenario": "Tugas sudah selesai disimpan dan kamu mau menutup file ini agar layar laptop rapi.",
    "nalarBayiKodi": "W = Window Close! Menutup dokumen yang aktif dengan santai tanpa harus repot mengejar tombol silang merah di sudut layar!"
  },
  {
    "id": "wd-5",
    "key": "Ctrl+P",
    "keysArray": [
      "Control",
      "p"
    ],
    "category": "Paling Sering Digunakan",
    "action": "Mencetak dokumen ke mesin printer (Print).",
    "scenario": "Surat lamaran kerja sudah selesai dicek dan siap kamu cetak ke mesin printer.",
    "nalarBayiKodi": "P = Print (Kirim ke Mesin Cetak)! Langsung membuka jendela pratinjau cetak lengkap dengan jumlah salinan lembar kertas yang mau dikeluarkan mesin printer!"
  },
  {
    "id": "wd-6",
    "key": "Ctrl+Z",
    "keysArray": [
      "Control",
      "z"
    ],
    "category": "Paling Sering Digunakan",
    "action": "Membatalkan tindakan sebelumnya (Undo).",
    "scenario": "Gawat! Seluruh paragraf pendahuluan makalah terhapus karena tanganmu menyenggol tombol Backspace!",
    "nalarBayiKodi": "Z = Undo (Penyelamat Nyawa Penulis)! Jangan sedih, jangan nangis! Cukup tekan Ctrl+Z, teks yang barusan terhapus langsung balik utuh seperti sedia kala!"
  },
  {
    "id": "wd-7",
    "key": "Ctrl+Y",
    "keysArray": [
      "Control",
      "y"
    ],
    "category": "Paling Sering Digunakan",
    "action": "Mengulangi tindakan yang dibatalkan (Redo).",
    "scenario": "Kamu tadi membatalkan pengetikan, tapi setelah dipikir-pikir ternyata kalimat itu bagus dan mau dipakai lagi.",
    "nalarBayiKodi": "Y = Redo (Maju Satu Langkah)! Teman akrab Ctrl+Z. Kalau Z mundur ke masa lalu, Y memajukan kembali tindakan yang barusan dibatalkan!"
  },
  {
    "id": "wd-8",
    "key": "Ctrl+A",
    "keysArray": [
      "Control",
      "a"
    ],
    "category": "Paling Sering Digunakan",
    "action": "Memilih semua isi konten dokumen (Select All).",
    "scenario": "Dokumenmu ada 50 halaman dan dosen menyuruh mengubah seluruh font dokumen menjadi Times New Roman ukuran 12.",
    "nalarBayiKodi": "A = All (Jaring Ikan Seluruh Halaman)! Nggak usah tarik mouse dari halaman 1 sampai 50. Tekan Ctrl+A, seluruh huruf dari halaman pertama sampai halaman terakhir langsung tersorot biru!"
  },
  {
    "id": "wd-9",
    "key": "Ctrl+F",
    "keysArray": [
      "Control",
      "f"
    ],
    "category": "Paling Sering Digunakan",
    "action": "Mencari kata atau frasa dalam dokumen (Find).",
    "scenario": "Di dalam buku tebal 300 halaman, kamu mau mencari bab yang membahas kata 'Ekosistem'.",
    "nalarBayiKodi": "F = Find (Detektif Pelacak Kata)! Bilah pencarian di sisi kiri langsung muncul. Ketik kata apa saja, Word bakal menunjukkan setiap halaman tempat kata itu ditulis!"
  },
  {
    "id": "wd-10",
    "key": "Ctrl+H",
    "keysArray": [
      "Control",
      "h"
    ],
    "category": "Paling Sering Digunakan",
    "action": "Mencari dan Mengganti teks massal (Find and Replace).",
    "scenario": "Nama klien di proposal tertulis 'PT Maju Terus' sebanyak 40 kali, padahal harusnya 'PT Maju Bersama'.",
    "nalarBayiKodi": "H = Replace (Ganti Kilat Bersama)! Masukkan nama salah dan nama benar, klik Ganti Semua. 40 kata langsung diperbaiki serempak dalam sekejap!"
  },
  {
    "id": "wd-11",
    "key": "Ctrl+Shift+V",
    "keysArray": [
      "Control",
      "Shift",
      "v"
    ],
    "category": "Paling Sering Digunakan",
    "action": "Menempelkan teks murni saja tanpa format asal (Keep Text Only).",
    "scenario": "Kamu menyalin paragraf dari website Wikipedia yang ada background abu-abu dan font aneh, dan mau ditempel bersih sesuai font Word kamu.",
    "nalarBayiKodi": "Shift+V = Cuci Teks Murni! Pintasan rahasia terbaik! Menghapus semua format warna, ukuran, dan link website yang bikin dokumen berantakan, menyisakan teks bersih yang rapi!"
  },
  {
    "id": "wd-12",
    "key": "Ctrl+E",
    "keysArray": [
      "Control",
      "e"
    ],
    "category": "Perataan & Format Paragraf",
    "action": "Menengahkan teks atau paragraf (Center).",
    "scenario": "Kamu baru saja mengetik Judul Makalah dan harus diletakkan tepat di tengah halaman.",
    "nalarBayiKodi": "E = Equilibrium (Tengah Seimbang)! Teks langsung bergeser ke tengah kertas secara simetris kiri dan kanan. Sempurna untuk judul karya tulis dan cover tugas!"
  },
  {
    "id": "wd-13",
    "key": "Ctrl+L",
    "keysArray": [
      "Control",
      "l"
    ],
    "category": "Perataan & Format Paragraf",
    "action": "Meratakan teks ke sisi kiri (Align Left).",
    "scenario": "Isi surat atau paragraf biasa harus rata di tepi garis batas kiri dokumen.",
    "nalarBayiKodi": "L = Left (Rata Kiri Alami)! Standar penulisan bahasa Indonesia dan Inggris yang mengalir dari tepi kiri kertas!"
  },
  {
    "id": "wd-14",
    "key": "Ctrl+R",
    "keysArray": [
      "Control",
      "r"
    ],
    "category": "Perataan & Format Paragraf",
    "action": "Meratakan teks ke sisi kanan (Align Right).",
    "scenario": "Kamu menulis tanggal surat atau tanda tangan di pojok kanan bawah seperti 'Jakarta, 12 Oktober 2026'.",
    "nalarBayiKodi": "R = Right (Rata Kanan Rapi)! Menempelkan tulisan ke dinding kanan kertas, cocok banget untuk tanggal surat dinas dan paraf tanda tangan!"
  },
  {
    "id": "wd-15",
    "key": "Ctrl+J",
    "keysArray": [
      "Control",
      "j"
    ],
    "category": "Perataan & Format Paragraf",
    "action": "Meratakan teks di kedua sisi kiri dan kanan (Justify).",
    "scenario": "Paragraf buku atau skripsi terlihat bergerigi tidak rapi di sebelah kanan dan dosen mewajibkan rata kiri kanan.",
    "nalarBayiKodi": "J = Justify (Jendela Rapi Balok Buku)! Tepi kiri lurus dan tepi kanan juga lurus rapi seperti buku novel cetakan gramedia! Tampilan tulisanmu langsung naik kelas jadi profesional!"
  },
  {
    "id": "wd-16",
    "key": "Ctrl+1",
    "keysArray": [
      "Control",
      "1"
    ],
    "category": "Perataan & Format Paragraf",
    "action": "Mengatur spasi baris tunggal (1.0 Line Spacing).",
    "scenario": "Teks surat resmi harus dibuat rapat 1 spasi agar muat dalam satu halaman kertas.",
    "nalarBayiKodi": "Angka 1 = Spasi 1.0 Rapat! Jarak antar baris kalimat jadi pas dan kompak, hemat kertas dan enak dipandang!"
  },
  {
    "id": "wd-17",
    "key": "Ctrl+2",
    "keysArray": [
      "Control",
      "2"
    ],
    "category": "Perataan & Format Paragraf",
    "action": "Mengatur spasi baris ganda (2.0 Line Spacing).",
    "scenario": "Skripsi atau tesis kampus mewajibkan jarak baris 2 spasi agar penguji punya ruang memberi coretan revisi.",
    "nalarBayiKodi": "Angka 2 = Spasi 2.0 Longgar! Jarak antar kalimat menjadi dua kali lipat lebih lega sesuai standar penulisan naskah akademik internasional!"
  },
  {
    "id": "wd-18",
    "key": "Ctrl+5",
    "keysArray": [
      "Control",
      "5"
    ],
    "category": "Perataan & Format Paragraf",
    "action": "Mengatur spasi baris satu setengah (1.5 Line Spacing).",
    "scenario": "Laporan praktikum dan karya tulis ilmiah SMA/kuliah biasanya meminta spasi 1.5.",
    "nalarBayiKodi": "Angka 5 = Spasi 1.5 Pas! Kenapa angka 5? Karena 1.5! Nggak terlalu rapat dan nggak terlalu renggang, format paling favorit di dunia pendidikan!"
  },
  {
    "id": "wd-19",
    "key": "Ctrl+0",
    "keysArray": [
      "Control",
      "0"
    ],
    "category": "Perataan & Format Paragraf",
    "action": "Menambah atau Menghapus spasi jarak 1 baris sebelum paragraf.",
    "scenario": "Antar paragraf saling menempel terlalu dekat dan kamu mau memberi jarak jeda tanpa harus menekan Enter berkali-kali.",
    "nalarBayiKodi": "Angka 0 = Spasi Paragraf Bernapas! Memberikan jeda 12pt yang manis di atas paragraf biar pembaca nggak sesak nafas pas membaca naskah panjang!"
  },
  {
    "id": "wd-20",
    "key": "Ctrl+M",
    "keysArray": [
      "Control",
      "m"
    ],
    "category": "Perataan & Format Paragraf",
    "action": "Menggeser indentasi paragraf ke kanan (Increase Indent).",
    "scenario": "Kamu mau menjorokkan paragraf kutipan langsung ke tengah naskah.",
    "nalarBayiKodi": "M = Maju Indentasi! Mendorong seluruh paragraf satu langkah ke dalam, cocok untuk blok kutipan buku rujukan!"
  },
  {
    "id": "wd-21",
    "key": "Ctrl+Shift+M",
    "keysArray": [
      "Control",
      "Shift",
      "m"
    ],
    "category": "Perataan & Format Paragraf",
    "action": "Mengurangi indentasi paragraf kembali ke kiri (Decrease Indent).",
    "scenario": "Paragraf tadi terlalu menjorok ke dalam dan kamu mau menariknya kembali ke posisi semula.",
    "nalarBayiKodi": "Shift+M = Mundur Indentasi! Menarik balik paragraf yang terlalu menjorok ke kiri kertas!"
  },
  {
    "id": "wd-22",
    "key": "Ctrl+T",
    "keysArray": [
      "Control",
      "t"
    ],
    "category": "Perataan & Format Paragraf",
    "action": "Membuat Indentasi Menggantung (Hanging Indent).",
    "scenario": "Kamu sedang menyusun Daftar Pustaka: baris pertama tetap di kiri, tapi baris kedua dan seterusnya menjorok ke dalam.",
    "nalarBayiKodi": "T = Tembok Gantung Daftar Pustaka! Ini rahasia membuat daftar pustaka APA atau IEEE yang sempurna! Baris kedua otomatis menjorok rapi tanpa perlu spasi manual!"
  },
  {
    "id": "wd-23",
    "key": "Ctrl+B",
    "keysArray": [
      "Control",
      "b"
    ],
    "category": "Format Karakter, Font & Ukuran Huruf",
    "action": "Menerapkan format huruf tebal (Bold).",
    "scenario": "Kata kunci penting dalam kalimat ingin kamu pertebal agar pembaca langsung paham intinya.",
    "nalarBayiKodi": "B = Bold (Huruf Gemuk Tegas)! Bikin kata penting jadi kelihatan menonjol dan berwibawa di antara kalimat lainnya!"
  },
  {
    "id": "wd-24",
    "key": "Ctrl+I",
    "keysArray": [
      "Control",
      "i"
    ],
    "category": "Format Karakter, Font & Ukuran Huruf",
    "action": "Menerapkan format huruf miring (Italic).",
    "scenario": "Kamu menulis nama spesies latin 'Homo sapiens' atau istilah serapan bahasa Inggris.",
    "nalarBayiKodi": "I = Italic (Huruf Miring Elegan)! Sesuai kaidah KBBI/EYD, semua istilah asing dan judul buku wajib dimiringkan!"
  },
  {
    "id": "wd-25",
    "key": "Ctrl+U",
    "keysArray": [
      "Control",
      "u"
    ],
    "category": "Format Karakter, Font & Ukuran Huruf",
    "action": "Menerapkan format garis bawah (Underline).",
    "scenario": "Nama terang pejabat penandatangan surat diberi garis bawah formal.",
    "nalarBayiKodi": "U = Underline (Garis Pondasi Bawah)! Menarik garis lurus di bawah teks penegasan!"
  },
  {
    "id": "wd-26",
    "key": "Ctrl+D",
    "keysArray": [
      "Control",
      "d"
    ],
    "category": "Format Karakter, Font & Ukuran Huruf",
    "action": "Membuka kotak dialog Pengaturan Font lengkap (Font Dialog).",
    "scenario": "Kamu mau mengatur efek tulisan berbayang, huruf coret, spasi antar karakter, dan skala font.",
    "nalarBayiKodi": "D = Dialog Font Lengkap! Kotak sakti untuk menyetel segala pernak-pernik huruf: jenis font, gaya, efek coret ganda, dan warna!"
  },
  {
    "id": "wd-27",
    "key": "Ctrl+]",
    "keysArray": [
      "Control",
      "]"
    ],
    "category": "Format Karakter, Font & Ukuran Huruf",
    "action": "Memperbesar ukuran font sebesar 1 poin (Grow Font 1pt).",
    "scenario": "Ukuran judul 14pt terasa sedikit kekecilan dan kamu mau menaikkannya jadi 15pt atau 16pt secara bertahap.",
    "nalarBayiKodi": "Kurung Siku Kanan ] = Tumbuh Makin Besar! Tekan berkali-kali, hurufnya membesar perlahan tepat 1 angka tiap ketukan!"
  },
  {
    "id": "wd-28",
    "key": "Ctrl+[",
    "keysArray": [
      "Control",
      "["
    ],
    "category": "Format Karakter, Font & Ukuran Huruf",
    "action": "Memperkecil ukuran font sebesar 1 poin (Shrink Font 1pt).",
    "scenario": "Teks judul terlalu besar dan melompat ke baris kedua, kamu mau mengecilkannya sedikit saja.",
    "nalarBayiKodi": "Kurung Siku Kiri [ = Menyusut Lebih Kecil! Pasangan kurung siku kanan untuk mengecilkan huruf secara halus!"
  },
  {
    "id": "wd-29",
    "key": "Shift+F3",
    "keysArray": [
      "Shift",
      "F3"
    ],
    "category": "Format Karakter, Font & Ukuran Huruf",
    "action": "Mengubah kapitalisasi huruf (Change Case: huruf kecil, BESAR, Kapital Depan).",
    "scenario": "Waduh! Kamu lupa menyalakan tombol Caps Lock dan satu kalimat judul panjang terlanjur diketik huruf kecil semua!",
    "nalarBayiKodi": "Shift+F3 = Topeng Ajaib Huruf Kapital! Nggak perlu hapus terus ngetik ulang! Blok teksnya, tekan Shift+F3: langsung ganti jadi KAPITAL SEMUA, lalu tekan lagi jadi Huruf Depan Besar Saja! Keren banget kan?!"
  },
  {
    "id": "wd-30",
    "key": "Ctrl+Shift+A",
    "keysArray": [
      "Control",
      "Shift",
      "a"
    ],
    "category": "Format Karakter, Font & Ukuran Huruf",
    "action": "Mengubah seluruh teks yang dipilih jadi huruf kapital (All Caps).",
    "scenario": "Judul BAB 1 PENDAHULUAN harus berhuruf kapital penuh.",
    "nalarBayiKodi": "A = All Caps (Kapital Raksasa)! Seketika semua huruf kecil bertransformasi jadi huruf besar megah!"
  },
  {
    "id": "wd-31",
    "key": "Ctrl+=",
    "keysArray": [
      "Control",
      "="
    ],
    "category": "Format Karakter, Font & Ukuran Huruf",
    "action": "Menerapkan format Subskrip teks di bawah (Subscript misal: H2O).",
    "scenario": "Kamu lagi ngetik rumus kimia air 'H2O' dan angka 2 harus kecil di bawah.",
    "nalarBayiKodi": "Ctrl + = (Angka Turun ke Lantai Bawah)! Angka 2 langsung mengecil dan nangkring di kaki huruf H seperti rumus kimia laboratorium resmi!"
  },
  {
    "id": "wd-32",
    "key": "Ctrl+Shift++",
    "keysArray": [
      "Control",
      "Shift",
      "+"
    ],
    "category": "Format Karakter, Font & Ukuran Huruf",
    "action": "Menerapkan format Superskrip teks di atas (Superscript misal: X² atau cm³).",
    "scenario": "Kamu menulis persamaan matematika x kuadrat 'x^2' atau volume '100 cm3'.",
    "nalarBayiKodi": "Ctrl + Shift + + (Angka Terbang ke Langit Pangkat)! Angka 2 langsung terbang kecil ke atas kepala variabel jadi pangkat kuadrat matematika!"
  },
  {
    "id": "wd-33",
    "key": "Ctrl+Space",
    "keysArray": [
      "Control",
      "Space"
    ],
    "category": "Format Karakter, Font & Ukuran Huruf",
    "action": "Menghapus semua format karakter dan kembali ke font dasar (Clear Character Formatting).",
    "scenario": "Teks hasil copy-paste banyak warna ungu, tebal, dan miring yang berantakan mau dinormalkan seketika.",
    "nalarBayiKodi": "Ctrl + Spasi = Sabun Cuci Format Huruf! Menghilangkan semua tebal, miring, warna, dan garis bawah, mengembalikan huruf ke setelan pabrik yang bersih!"
  },
  {
    "id": "wd-34",
    "key": "Ctrl+ArrowRight",
    "keysArray": [
      "Control",
      "ArrowRight"
    ],
    "category": "Navigasi Dokumen & Seleksi Cepat",
    "action": "Lompat satu kata penuh ke sebelah kanan.",
    "scenario": "Kamu mau menuju kata berikutnya dalam kalimat tanpa harus memencet panah kanan 15 kali per huruf.",
    "nalarBayiKodi": "Ctrl + Panah Kanan = Kelinci Melompati Kata! Kursor melompat gesit kata demi kata, bukan huruf demi huruf lagi. Ngetik jadi 10x lebih ngebut!"
  },
  {
    "id": "wd-35",
    "key": "Ctrl+ArrowLeft",
    "keysArray": [
      "Control",
      "ArrowLeft"
    ],
    "category": "Navigasi Dokumen & Seleksi Cepat",
    "action": "Lompat satu kata penuh ke sebelah kiri.",
    "scenario": "Kamu mau kembali ke kata sebelumnya untuk memperbaiki ejaan.",
    "nalarBayiKodi": "Ctrl + Panah Kiri = Kelinci Mundur Per Kata! Kursor melompat mundur melewati kata-kata dengan lincah!"
  },
  {
    "id": "wd-36",
    "key": "Ctrl+ArrowUp",
    "keysArray": [
      "Control",
      "ArrowUp"
    ],
    "category": "Navigasi Dokumen & Seleksi Cepat",
    "action": "Lompat ke awal paragraf di atasnya.",
    "scenario": "Kamu mau melompat cepat ke paragraf sebelumnya.",
    "nalarBayiKodi": "Ctrl + Panah Atas = Lompat Antar Paragraf Naik! Kursor langsung mendarat di huruf pertama paragraf atasnya!"
  },
  {
    "id": "wd-37",
    "key": "Ctrl+ArrowDown",
    "keysArray": [
      "Control",
      "ArrowDown"
    ],
    "category": "Navigasi Dokumen & Seleksi Cepat",
    "action": "Lompat ke awal paragraf di bawahnya.",
    "scenario": "Kamu mau melompat cepat ke paragraf berikutnya.",
    "nalarBayiKodi": "Ctrl + Panah Bawah = Lompat Antar Paragraf Turun! Kursor langsung mendarat di awal paragraf bawahnya!"
  },
  {
    "id": "wd-38",
    "key": "Ctrl+Shift+ArrowRight",
    "keysArray": [
      "Control",
      "Shift",
      "ArrowRight"
    ],
    "category": "Navigasi Dokumen & Seleksi Cepat",
    "action": "Memilih dan Menyorot teks kata demi kata ke kanan.",
    "scenario": "Kamu mau menyeleksi 3 kata ke kanan untuk dihapus atau disalin.",
    "nalarBayiKodi": "Shift + Ctrl + Panah Kanan = Stabilo Seleksi Per Kata! Menyorot kata demi kata dengan presisi tinggi tanpa perlu mouse meleset-leset!"
  },
  {
    "id": "wd-39",
    "key": "Ctrl+Home",
    "keysArray": [
      "Control",
      "Home"
    ],
    "category": "Navigasi Dokumen & Seleksi Cepat",
    "action": "Melompat langsung ke halaman dan huruf paling awal dokumen.",
    "scenario": "Dari halaman 100 kamu mau kembali ke cover halaman pertama.",
    "nalarBayiKodi": "Ctrl + Home = Teleportasi ke Awal Bab! Sekejap mata langsung mendarat di titik nol halaman 1!"
  },
  {
    "id": "wd-40",
    "key": "Ctrl+End",
    "keysArray": [
      "Control",
      "End"
    ],
    "category": "Navigasi Dokumen & Seleksi Cepat",
    "action": "Melompat langsung ke akhir naskah paling belakang dokumen.",
    "scenario": "Kamu baru buka file dan mau langsung melanjutkan mengetik di kalimat paling ujung terakhir.",
    "nalarBayiKodi": "Ctrl + End = Teleportasi ke Titik Akhir! Langsung mendarat di tanda titik terakhir naskah siap untuk diketik lanjutan ceritanya!"
  },
  {
    "id": "wd-41",
    "key": "Ctrl+G",
    "keysArray": [
      "Control",
      "g"
    ],
    "category": "Navigasi Dokumen & Seleksi Cepat",
    "action": "Membuka kotak dialog Go To (Lompat langsung ke Halaman tertentu).",
    "scenario": "Dosen meminta kamu membuka halaman 87 dari berkas modul.",
    "nalarBayiKodi": "G = Go To (Pintu Kemana Saja Doraemon)! Masukkan angka halaman 87, tekan Enter, langsung seketika terbuka halaman 87 di depan matamu!"
  },
  {
    "id": "wd-42",
    "key": "Ctrl+Enter",
    "keysArray": [
      "Control",
      "Enter"
    ],
    "category": "Jeda Halaman, Simbol & Karakter Khusus",
    "action": "Menyisipkan Pemisah Halaman Baru (Page Break).",
    "scenario": "Bab 1 baru terisi setengah halaman dan kamu mau Bab 2 dimulai di kertas halaman baru berikutnya.",
    "nalarBayiKodi": "Ctrl + Enter = Gunting Pemisah Halaman Bersih! Jangan pernah tekan Enter 10 kali sampai ke bawah ya, nanti pas diedit halaman berikutnya jadi berantakan! Tekan Ctrl+Enter, langsung bersih rapi di lembar baru!"
  },
  {
    "id": "wd-43",
    "key": "Shift+Enter",
    "keysArray": [
      "Shift",
      "Enter"
    ],
    "category": "Jeda Halaman, Simbol & Karakter Khusus",
    "action": "Baris baru dalam paragraf yang sama (Soft Line Break).",
    "scenario": "Kamu ngetik puisi atau lirik lagu dan mau ganti baris tanpa membuat jarak spasi paragraf baru.",
    "nalarBayiKodi": "Shift + Enter = Turun Baris Halus! Kalimat turun ke baris bawahnya tapi tetap dianggap satu keluarga paragraf yang sama!"
  },
  {
    "id": "wd-44",
    "key": "Ctrl+Shift+Enter",
    "keysArray": [
      "Control",
      "Shift",
      "Enter"
    ],
    "category": "Jeda Halaman, Simbol & Karakter Khusus",
    "action": "Menyisipkan Pemisah Kolom (Column Break).",
    "scenario": "Teks koranmu dibagi jadi 2 kolom dan kamu mau teks berikutnya langsung pindah ke kolom sebelah kanan.",
    "nalarBayiKodi": "Pemisah Kolom Koran! Memotong teks di kolom kiri dan meneruskannya ke puncak kolom kanan!"
  },
  {
    "id": "wd-45",
    "key": "Ctrl+Alt+C",
    "keysArray": [
      "Control",
      "Alt",
      "c"
    ],
    "category": "Jeda Halaman, Simbol & Karakter Khusus",
    "action": "Menyisipkan simbol Hak Cipta resmi (Copyright ©).",
    "scenario": "Kamu menulis catatan hak cipta di buku karyamu: 'Hak Cipta © 2026'.",
    "nalarBayiKodi": "C = Copyright (Simbol C Melingkar ©)! Nggak usah buka menu Insert Symbol yang ribet, tekan Ctrl+Alt+C simbol © langsung tercetak cantik!"
  },
  {
    "id": "wd-46",
    "key": "Ctrl+Alt+R",
    "keysArray": [
      "Control",
      "Alt",
      "r"
    ],
    "category": "Jeda Halaman, Simbol & Karakter Khusus",
    "action": "Menyisipkan simbol Merek Terdaftar resmi (Registered Trademark ®).",
    "scenario": "Kamu menulis nama merek dagang resmi perusahaan seperti 'Microsoft®'.",
    "nalarBayiKodi": "R = Registered (Simbol R Melingkar ®)! Menandakan merek sudah terdaftar resmi di kementerian hukum!"
  },
  {
    "id": "wd-47",
    "key": "Ctrl+Alt+T",
    "keysArray": [
      "Control",
      "Alt",
      "t"
    ],
    "category": "Jeda Halaman, Simbol & Karakter Khusus",
    "action": "Menyisipkan simbol Merek Dagang (Trademark ™).",
    "scenario": "Kamu menulis produk inovasi baru yang memiliki hak merek dagang 'Game Edukasi™'.",
    "nalarBayiKodi": "T = Trademark (Simbol ™ Kecil di Atas)! Menambahkan lambang merek dagang kecil profesional!"
  },
  {
    "id": "wd-48",
    "key": "Ctrl+K",
    "keysArray": [
      "Control",
      "k"
    ],
    "category": "Jeda Halaman, Simbol & Karakter Khusus",
    "action": "Menyisipkan tautan link internet atau file (Insert Hyperlink).",
    "scenario": "Kata 'Website Resmi' mau diberi link biru yang bisa diklik langsung menuju ke halaman internet.",
    "nalarBayiKodi": "K = Link Rantai Biru! Begitu ditekan, masukkan alamat website (URL), teks langsung berubah jadi link biru bergaris bawah siap diklik!"
  },
  {
    "id": "wd-49",
    "key": "Ctrl+Alt+1",
    "keysArray": [
      "Control",
      "Alt",
      "1"
    ],
    "category": "Gaya Heading, Ejaan & Tombol F1-F12",
    "action": "Menerapkan Gaya Judul Utama (Heading 1).",
    "scenario": "Judul BAB I ingin dijadikan Heading 1 agar otomatis muncul di Daftar Isi (Table of Contents).",
    "nalarBayiKodi": "Angka 1 = Heading 1 Raja Judul! Kunci utama bikin Daftar Isi Otomatis tanpa ngetik titik-titik manual! Judul langsung besar, gagah, dan terindeks di panel navigasi!"
  },
  {
    "id": "wd-50",
    "key": "Ctrl+Alt+2",
    "keysArray": [
      "Control",
      "Alt",
      "2"
    ],
    "category": "Gaya Heading, Ejaan & Tombol F1-F12",
    "action": "Menerapkan Gaya Sub-Judul (Heading 2).",
    "scenario": "Sub-bab seperti '1.1 Latar Belakang' dijadikan Heading 2.",
    "nalarBayiKodi": "Angka 2 = Heading 2 Pangeran Sub-Judul! Menjadi anak ranting dari Heading 1 di daftar isi dokumen!"
  },
  {
    "id": "wd-51",
    "key": "Ctrl+Alt+3",
    "keysArray": [
      "Control",
      "Alt",
      "3"
    ],
    "category": "Gaya Heading, Ejaan & Tombol F1-F12",
    "action": "Menerapkan Gaya Sub-Sub-Judul (Heading 3).",
    "scenario": "Poin pembahasan kecil di dalam sub-bab seperti '1.1.1 Manfaat Teoretis'.",
    "nalarBayiKodi": "Angka 3 = Heading 3 Cucu Judul! Menjaga hirarki kerangka dokumen tetap teratur dan rapi!"
  },
  {
    "id": "wd-52",
    "key": "Ctrl+Shift+N",
    "keysArray": [
      "Control",
      "Shift",
      "n"
    ],
    "category": "Gaya Heading, Ejaan & Tombol F1-F12",
    "action": "Mengembalikan gaya ke Paragraf Normal bawaan.",
    "scenario": "Teks ketularan gaya Heading besar dan kamu mau menormalkannya kembali jadi teks paragraf biasa.",
    "nalarBayiKodi": "N = Normal Paragraf! Membebaskan teks dari gaya Heading dan mengembalikannya jadi warga biasa naskah dokumen!"
  },
  {
    "id": "wd-53",
    "key": "F7",
    "keysArray": [
      "F7"
    ],
    "category": "Gaya Heading, Ejaan & Tombol F1-F12",
    "action": "Pemeriksaan Ejaan dan Tata Bahasa (Spelling & Grammar).",
    "scenario": "Sebelum dokumen dicetak untuk dinilai guru, kamu mau memeriksa apakah ada salah ketik kata di sepanjang dokumen.",
    "nalarBayiKodi": "F7 = Asisten Editor Bahasa! Membuka panel koreksi kata otomatis untuk membetulkan kata-kata yang typo!"
  },
  {
    "id": "wd-54",
    "key": "Shift+F7",
    "keysArray": [
      "Shift",
      "F7"
    ],
    "category": "Gaya Heading, Ejaan & Tombol F1-F12",
    "action": "Membuka Tesaurus pencari sinonim kata (Thesaurus).",
    "scenario": "Kata 'Bagus' sudah dipakai 5 kali dalam satu paragraf dan kamu mencari variasi sinonim seperti 'Elok', 'Indah', atau 'Cemerlang'.",
    "nalarBayiKodi": "Shift+F7 = Gudang Kamus Kosakata Sinonim! Word bakal menyodorkan puluhan alternatif kata indah agar karyamu tidak monoton!"
  },
  {
    "id": "wd-55",
    "key": "Ctrl+F1",
    "keysArray": [
      "Control",
      "F1"
    ],
    "category": "Gaya Heading, Ejaan & Tombol F1-F12",
    "action": "Menampilkan atau Menyembunyikan Pita Menu Word (Toggle Ribbon).",
    "scenario": "Layar laptopmu kecil dan pita menu atas menutupi teks, kamu mau menyembunyikannya agar area membaca lebih lega.",
    "nalarBayiKodi": "Ctrl+F1 = Tirai Pita Menu! Tekan sekali, pita menu atas terlipat rapi memberi ruang baca lega! Tekan lagi, menunya muncul kembali!"
  }
];

  // =========================================================================
  // BRANKAS DOKUMEN & WORKBOOK DUNIA NYATA (EXCEL & WORD)
  // Dilengkapi Pratinjau Thumbnail Keren & Tombol Download Cepat
  // Bebas Game / Detektor Rumit — Langsung Praktik di Aplikasi Desktop Asli!
  // =========================================================================

  window.EXCEL_VAULT_FILES = [
    {
      id: "ev-1",
      title: "Simulasi Siklus Akuntansi PT Maju Bersama (8 Sheet Lengkap)",
      category: "Akuntansi & Pajak",
      filename: "Simulasi_Kerja_Akuntansi_PT_Maju_Bersama.xlsx",
      size: "26.6 KB",
      badge: "🔥 Hot Kasus Nyata",
      rating: "5.0 ★★★★★",
      sheetsCount: "8 Sheet Lengkap",
      desc: "Simulasi siklus akuntansi perusahaan dagang: Faktur Pajak, Bukti Transaksi, Jurnal Umum, Buku Besar 4 Kolom, Neraca Saldo, Jurnal Penyesuaian, Neraca Lajur 10 Kolom, Laba Rugi & Neraca Akhir.",
      ribbonTitle: "PT Maju Bersama - Siklus Akuntansi.xlsx",
      formulaSnippet: "=SUM(D11:D35)",
      headers: ["No Bukti", "Tanggal", "Nama Akun", "Debet (Rp)", "Kredit (Rp)"],
      rows: [
        ["FP-001", "02/05/2026", "Kas di Bank", "50.000.000", "—"],
        ["BKK-01", "05/05/2026", "Beban Sewa", "12.000.000", "—"],
        ["F-014", "10/05/2026", "Pendapatan Jasa", "—", "35.000.000"],
        ["BKM-03", "15/05/2026", "Piutang Usaha", "8.500.000", "—"]
      ],
      sheetPills: ["Cover", "Faktur Pajak", "Jurnal Umum", "Buku Besar", "Neraca Lajur", "+3"]
    },
    {
      id: "ev-2",
      title: "Soal Tes Interview Akuntansi & Jurnal Umum Dagang",
      category: "Tes Interview Kerja",
      filename: "Soal_Tes_Interview_Akuntansi_Perusahaan_Dagang.xlsx",
      size: "7.9 KB",
      badge: "💼 Tes Interview Kerja",
      rating: "4.9 ★★★★★",
      sheetsCount: "2 Sheet (Soal + Kunci)",
      desc: "CV Maju Bersama: 10 transaksi bisnis nyata Mei 2024, tabel jurnal umum debet-kredit, rumus balance check, dan lembar kunci jawaban resmi HRD.",
      ribbonTitle: "Soal_Tes_Interview_Akuntansi_Dagang.xlsx",
      formulaSnippet: '=IF(D37=F37, "BALANCE (SEIMBANG)", "TIDAK BALANCE")',
      headers: ["No", "Tanggal", "Akun Debet", "Debet (Rp)", "Akun Kredit", "Kredit (Rp)"],
      rows: [
        ["1", "01/05/2024", "Kas Perusahaan", "50.000.000", "Modal Pemilik", "50.000.000"],
        ["2", "02/05/2024", "Perlengkapan", "3.500.000", "Kas", "3.500.000"],
        ["3", "03/05/2024", "Persediaan", "15.000.000", "Utang Usaha", "15.000.000"],
        ["4", "05/05/2024", "Kas", "8.000.000", "Penjualan", "8.000.000"]
      ],
      sheetPills: ["Soal Interview", "Kunci Jawaban Resmi"]
    },
    {
      id: "ev-3",
      title: "Master Payroll Gaji Karyawan, BPJS & PPh 21 Otomatis",
      category: "SDM & Payroll",
      filename: "Master_Payroll_Gaji_Karyawan_PPh21.xlsx",
      size: "6.9 KB",
      badge: "⚡ Rumus Otomatis",
      rating: "4.9 ★★★★★",
      sheetsCount: "2 Sheet (Payroll + Slip)",
      desc: "Sistem penggajian 10 staf: Gaji Pokok, Tunjangan Jabatan, Uang Makan & Lembur, Potongan BPJS TK (3%) & BPJS Kes (1%), PPh 21 TER, dan Slip Gaji Otomatis via VLOOKUP.",
      ribbonTitle: "Master_Payroll_Gaji_PPh21_2026.xlsx",
      formulaSnippet: "=VLOOKUP(B3, 'Data Karyawan'!A:H, 4, FALSE)",
      headers: ["NIK", "Nama Staf", "Jabatan", "Gaji Pokok", "BPJS (4%)", "Take Home Pay"],
      rows: [
        ["EMP-001", "Budi Santoso", "IT Lead", "12.500.000", "500.000", "13.850.000"],
        ["EMP-002", "Siti Rahma", "Finance Spv", "9.800.000", "392.000", "10.658.000"],
        ["EMP-003", "Ahmad Fauzi", "Sales Exec", "7.500.000", "300.000", "9.450.000"],
        ["EMP-004", "Dewi Lestari", "HR Admin", "6.200.000", "248.000", "6.752.000"]
      ],
      sheetPills: ["Rekap Payroll", "Slip Gaji Otomatis"]
    },
    {
      id: "ev-4",
      title: "Dashboard Rekap Penjualan Retail & KPI Bonus Sales",
      category: "Dashboard & Penjualan",
      filename: "Dashboard_Rekap_Penjualan_Sales_Eksekutif.xlsx",
      size: "6.9 KB",
      badge: "📊 Dashboard Eksekutif",
      rating: "4.8 ★★★★★",
      sheetsCount: "1 Sheet Interaktif",
      desc: "Catatan transaksi 12 cabang retail: Omset Kotor, Diskon Bertingkat, Omset Bersih, Target KPI, Komisi Bonus 5%-10% via rumus IF bertingkat, dan status capaian target.",
      ribbonTitle: "Dashboard_Sales_Eksekutif_2026.xlsx",
      formulaSnippet: "=IF(E5>=F5, D5*10%, IF(E5>=F5*0.8, D5*5%, 0))",
      headers: ["Cabang", "Sales", "Omset Kotor", "Target KPI", "Bonus (Rp)", "Status"],
      rows: [
        ["Pusat Tegal", "Andi", "185.000.000", "150.000.000", "18.500.000", "TARGET TERCAPAI"],
        ["Brebes Barat", "Rina", "142.000.000", "130.000.000", "14.200.000", "TARGET TERCAPAI"],
        ["Slawi Selatan", "Dimas", "95.000.000", "110.000.000", "4.750.000", "CAPAI 86%"],
        ["Pemalang", "Wulan", "62.000.000", "90.000.000", "0", "DI BAWAH TARGET"]
      ],
      sheetPills: ["Dashboard Sales & KPI"]
    },
    {
      id: "ev-5",
      title: "Laporan Keuangan Neraca Saldo & Laba Rugi CV",
      category: "Akuntansi & Pajak",
      filename: "Laporan_Keuangan_Neraca_Laba_Rugi_CV.xlsx",
      size: "5.6 KB",
      badge: "💵 Laporan Resmi",
      rating: "4.9 ★★★★★",
      sheetsCount: "1 Sheet Terstruktur",
      desc: "Format standar laporan laba rugi perusahaan CV: Kode Akun 4-100 Penjualan, 5-100 HPP, 6-100 Beban Operasional, dan rumus hitung laba bersih tahun berjalan otomatis.",
      ribbonTitle: "Laporan_Laba_Rugi_Neraca_CV.xlsx",
      formulaSnippet: "=E13-D13 (Laba Bersih Tahun Berjalan)",
      headers: ["Kode", "Nama Akun", "Ref", "Debet (Rp)", "Kredit (Rp)"],
      rows: [
        ["4-100", "Penjualan Bersih", "", "—", "450.000.000"],
        ["5-100", "Harga Pokok (HPP)", "", "240.000.000", "—"],
        ["6-101", "Beban Gaji Staf", "", "85.000.000", "—"],
        ["6-102", "Beban Sewa Kantor", "", "24.000.000", "—"]
      ],
      sheetPills: ["Laba Rugi & Neraca"]
    },
    {
      id: "ev-6",
      title: "Mega Workbook Master 200 Rumus Excel Dunia Nyata",
      category: "Paket Rumus Mega",
      filename: "Master_160_Rumus_Excel_Dunia_Nyata.xlsx",
      size: "759.9 KB",
      badge: "🏆 Mega Workbook 200 Sheet",
      rating: "5.0 ★★★★★",
      sheetsCount: "200 Sheet Mandiri",
      desc: "Koleksi terlengkap: 200 rumus Excel dunia nyata (1 rumus = 1 sheet terpisah). Berisi 1 Contoh Soal & Jawaban Benar + 5 Soal Tes Mandiri per sheet + Sheet 99_KUNCI_JAWABAN di akhir.",
      ribbonTitle: "Master_200_Rumus_Excel_Dunia_Nyata.xlsx",
      formulaSnippet: "=XLOOKUP(A2, Master!A:A, Master!B:B)",
      headers: ["Kategori", "Rumus", "Contoh Soal", "5 Tes Mandiri", "Sheet Kunci"],
      rows: [
        ["Logika", "IF, AND, OR, IFS", "Evaluasi Bonus", "5 Kasus Kantor", "Sheet 99"],
        ["Lookup", "VLOOKUP, XLOOKUP", "Katalog Barang", "5 Kasus Kantor", "Sheet 99"],
        ["Teks", "CONCAT, MID, TEXT", "ID Generator", "5 Kasus Kantor", "Sheet 99"],
        ["Statistik", "AVERAGE, STDEV", "Analisis Data", "5 Kasus Kampus", "Sheet 99"]
      ],
      sheetPills: ["Sheet 1 - SUM", "Sheet 2 - IF", "Sheet 3 - VLOOKUP", "+197 Sheet"]
    },
    {
      id: "ev-7",
      title: "Paket 1: Rumus Matematika, Akuntansi & Logika Bisnis",
      category: "Paket Rumus Mega",
      filename: "Paket_1_Rumus_Matematika_Akuntansi_Logika.xlsx",
      size: "156.1 KB",
      badge: "📗 Modul Paket 1",
      rating: "4.8 ★★★★★",
      sheetsCount: "35 Sheet + Kunci",
      desc: "Paket khusus rumus dasar & menengah: SUM, SUMIF, SUMIFS, ROUND, INT, MOD, IF Tunggal, IF Bertingkat, AND, OR, NOT + Kunci Jawaban.",
      ribbonTitle: "Paket_1_Matematika_Akuntansi_Logika.xlsx",
      formulaSnippet: '=SUMIFS(D2:D100, B2:B100, ">1000000", C2:C100, "Lunas")',
      headers: ["No", "Nama Fungsi", "Kegunaan Kantor", "Tingkat", "Status"],
      rows: [
        ["1", "SUM / SUMIF / SUMIFS", "Total omset & kasir bersyarat", "Dasar - Menengah", "Siap"],
        ["2", "IF / IFS / SWITCH", "Logika bonus, lulus/gagal", "Menengah", "Siap"],
        ["3", "ROUND / ROUNDUP", "Pembulatan kas & pajak rupiah", "Dasar", "Siap"]
      ],
      sheetPills: ["SUM", "SUMIF", "IF Tunggal", "IF Bertingkat", "99_Kunci"]
    },
    {
      id: "ev-8",
      title: "Paket 2: Rumus Lookup, Manipulasi Teks & Tanggal HRD",
      category: "Paket Rumus Mega",
      filename: "Paket_2_Rumus_Lookup_Teks_Tanggal_HRD.xlsx",
      size: "179.8 KB",
      badge: "📘 Modul Paket 2",
      rating: "4.9 ★★★★★",
      sheetsCount: "40 Sheet + Kunci",
      desc: "Paket esensial HRD & Admin: VLOOKUP, HLOOKUP, XLOOKUP, INDEX MATCH, CONCAT, LEFT, RIGHT, MID, TEXT, DATEDIF (Hitung Usia/Masa Kerja), WORKDAY + Kunci.",
      ribbonTitle: "Paket_2_Lookup_Teks_Tanggal_HRD.xlsx",
      formulaSnippet: '=DATEDIF(B2, TODAY(), "Y") & " Tahun "',
      headers: ["No", "Fungsi HRD", "Kasus Penggunaan", "Level", "Status"],
      rows: [
        ["1", "VLOOKUP / XLOOKUP", "Tarik data gaji via NIK karyawan", "Wajib HRD", "Siap"],
        ["2", "INDEX + MATCH", "Pencarian kolom dua arah fleksibel", "Mahir", "Siap"],
        ["3", "DATEDIF / NETWORKDAYS", "Hitung masa kerja & hari efektif", "Administrasi", "Siap"]
      ],
      sheetPills: ["VLOOKUP", "XLOOKUP", "INDEX MATCH", "DATEDIF", "99_Kunci"]
    },
    {
      id: "ev-9",
      title: "Paket 3: Rumus Keuangan, Audit & Analisis Data",
      category: "Paket Rumus Mega",
      filename: "Paket_3_Rumus_Keuangan_Audit_Statistika_Lengkap.xlsx",
      size: "441.2 KB",
      badge: "📙 Modul Paket 3",
      rating: "4.9 ★★★★★",
      sheetsCount: "45 Sheet + Kunci",
      desc: "Paket analisis finansial & kelayakan investasi: PMT (Cicilan), FV, PV, NPV, IRR, Penyusutan Aset SLN & DB, Standar Deviasi, Uji Korelasi + Kunci.",
      ribbonTitle: "Paket_3_Keuangan_Audit_Statistika.xlsx",
      formulaSnippet: "=PMT(B2/12, B3*12, -B1)",
      headers: ["No", "Fungsi Finansial", "Kegunaan Bank & Investasi", "Level", "Status"],
      rows: [
        ["1", "PMT / PPMT / IPMT", "Simulasi cicilan KPR & pinjaman bank", "Keuangan", "Siap"],
        ["2", "NPV / IRR", "Analisis kelayakan modal proyek bisnis", "Investasi", "Siap"],
        ["3", "SLN / DDB", "Perhitungan depresiasi aset tetap kantor", "Akuntansi", "Siap"]
      ],
      sheetPills: ["PMT", "NPV", "IRR", "SLN", "99_Kunci"]
    },
    {
      id: "ev-10",
      title: "Paket 4: Khusus 95 Rumus Statistika & Probabilitas Dosen",
      category: "Paket Rumus Mega",
      filename: "Paket_4_Khusus_95_Rumus_Statistika_Lengkap.xlsx",
      size: "365.1 KB",
      badge: "📓 Modul Paket 4",
      rating: "4.8 ★★★★★",
      sheetsCount: "95 Sheet + Kunci",
      desc: "Materi lengkap untuk mahasiswa & dosen: Regresi Linear, Uji Korelasi Pearson, Kuartil & Persentil, Distribusi Normal (NORM.DIST), Uji-T, Uji-F, ANOVA + Kunci.",
      ribbonTitle: "Paket_4_95_Rumus_Statistika.xlsx",
      formulaSnippet: "=CORREL(A2:A50, B2:B50)",
      headers: ["No", "Fungsi Statistik", "Aplikasi Riset & Skripsi", "Level", "Status"],
      rows: [
        ["1", "AVERAGE / MEDIAN / MODE", "Ukuran pemusatan data sampel", "Statistik 1", "Siap"],
        ["2", "VAR.S / STDEV.S", "Ukuran sebaran & variabilitas", "Statistik 1", "Siap"],
        ["3", "FORECAST.LINEAR / LINEST", "Prediksi tren & regresi berganda", "Statistik 2", "Siap"]
      ],
      sheetPills: ["AVERAGE", "STDEV.S", "CORREL", "FORECAST", "+91 Sheet"]
    },
    {
      id: "ev-11",
      title: "Sistem Monitoring Inventaris & Stok Gudang Retail",
      category: "Operasional & Logistik",
      filename: "Monitoring_Stok_Gudang_2026.xlsx",
      size: "5.8 KB",
      badge: "📦 Logistik & Stok",
      rating: "4.7 ★★★★★",
      sheetsCount: "1 Sheet Otomatis",
      desc: "Template kontrol stok: Barang Masuk, Barang Keluar, Sisa Stok, Batas Minimum (Safety Stock), dan Status Otomatis (AMAN / ORDER LAGI).",
      ribbonTitle: "Monitoring_Stok_Gudang_2026.xlsx",
      formulaSnippet: '=IF(E5<=F5, "⚠️ RESTOCK SEGERA", "✅ AMAN")',
      headers: ["Kode", "Nama Produk", "Masuk", "Keluar", "Sisa", "Status"],
      rows: [
        ["PRD-01", "Kabel UTP Cat6 305m", "50", "42", "8", "⚠️ RESTOCK"],
        ["PRD-02", "RJ45 Connector Box", "100", "30", "70", "✅ AMAN"],
        ["PRD-03", "Switch Gigabit 16-Port", "20", "18", "2", "⚠️ RESTOCK"]
      ],
      sheetPills: ["Inventaris Gudang"]
    },
    {
      id: "ev-12",
      title: "Buku Kerja Praktik Mandiri Pintasan Excel Windows",
      category: "Pintasan Keyboard",
      filename: "Modul_Praktik_Pintasan_Excel_Lengkap.xlsx",
      size: "20.1 KB",
      badge: "⌨️ Panduan Pintasan",
      rating: "4.9 ★★★★★",
      sheetsCount: "5 Sheet Pintasan",
      desc: "Buku kerja latihan terstruktur untuk mempraktikkan 53 tombol pintasan keyboard Excel langsung di desktop tanpa bantuan mouse.",
      ribbonTitle: "Modul_Praktik_Pintasan_Excel.xlsx",
      formulaSnippet: "Ctrl+Shift+$ (Rupiah), Alt+= (AutoSum)",
      headers: ["Kategori", "Tombol", "Aksi Kantor", "Hasil di Sheet"],
      rows: [
        ["Paling Sering", "Ctrl+S", "Simpan Cepat", "Tersimpan aman"],
        ["Format Angka", "Ctrl+Shift+$", "Format Rupiah", "Rp 50.000.000"],
        ["Kalkulasi", "Alt+=", "AutoSum Cepat", "=SUM(A1:A10)"]
      ],
      sheetPills: ["Navigasi", "Format", "Rumus", "Tabel", "Grafik"]
    }
  ];

  window.WORD_VAULT_FILES = [
    {
      id: "wv-1",
      title: "Template Surat Lamaran Kerja Resmi & CV Standar ATS",
      category: "Karir & CV ATS",
      filename: "Surat_Lamaran_Kerja_dan_CV_ATS_Friendly.docx",
      size: "37.9 KB",
      badge: "💼 Lolos Mesin ATS",
      rating: "5.0 ★★★★★",
      pagesCount: "2 Halaman A4",
      desc: "Dokumen CV berstandar ATS (Applicant Tracking System) yang disukai recruiter HRD modern + Surat Lamaran Kerja formal dengan margin standar 1 inci dan tipografi rapi.",
      windowTitle: "Surat_Lamaran_dan_CV_ATS_Friendly.docx",
      headerTitle: "ANDI PRATAMA, S.Kom.",
      headerSubtitle: "IT Systems Specialist & Database Administrator",
      contact: "Tegal | andi.pratama@email.com | 0812-3456-7890",
      sections: [
        { title: "RINGKASAN PROFESIONAL", text: "Tenaga profesional TI berpengalaman dalam pengelolaan infrastruktur jaringan, database SQL, dan administrasi perkantoran digital dengan produktivitas tinggi." },
        { title: "KEAHLIAN UTAMA", bullets: ["Administrasi Windows Server & Linux", "Pengolahan Data Excel Kompleks & VLOOKUP", "Penyusunan Kontrak & Dokumen Legal Word"] }
      ],
      sealBadge: "VERIFIED ATS"
    },
    {
      id: "wv-2",
      title: "Format Surat Dinas Resmi Pemerintah & Kop Surat Kedinasan",
      category: "Surat Dinas Pemkot",
      filename: "Surat_Dinas_Resmi_Pemerintah_dan_Kop_Surat.docx",
      size: "37.7 KB",
      badge: "🏛️ Standar Permendagri",
      rating: "4.9 ★★★★★",
      pagesCount: "1 Halaman A4",
      desc: "Format baku naskah dinas resmi pemerintah: Kop Surat berlogo daerah dan garis tebal-tipis, Nomor Surat, Sifat, Lampiran, Dasar Hukum, Isi Undangan, serta Tanda Tangan Kadis & NIP.",
      windowTitle: "Surat_Dinas_Resmi_Pemerintah.docx",
      headerTitle: "PEMERINTAH KOTA TEGAL",
      headerSubtitle: "DINAS PENDIDIKAN DAN KEBUDAYAAN",
      contact: "Jl. Ki Gede Sebayu No. 12, Tegal | Telp: (0283) 351234",
      sections: [
        { title: "NOMOR : 005 / 421.2 / DISDIKBUD / 2026", text: "Perihal: Undangan Pelatihan Implementasi Digital Classroom & Aplikasi Pembelajaran IT 2026." },
        { title: "PENANDATANGAN RESMI", text: "Drs. H. BAMBANG SURYONO, M.Pd. (Pembina Utama Muda IV/c - NIP. 19680512 199303 1 005)" }
      ],
      sealBadge: "CAP RESMI DISDIK"
    },
    {
      id: "wv-3",
      title: "Surat Perjanjian Kerja Waktu Tertentu (PKWT) Standar Disnaker",
      category: "Legal & PKWT HRD",
      filename: "Perjanjian_Kerja_Waktu_Tertentu_PKWT_HRD.docx",
      size: "37.8 KB",
      badge: "⚖️ Standar Legal HRD",
      rating: "4.9 ★★★★★",
      pagesCount: "2 Halaman A4",
      desc: "Draf kontrak kerja PKWT 12 bulan standar Kementerian Ketenagakerjaan: Pasal Masa Berlaku, Tugas & Tanggung Jawab, Waktu Kerja, Gaji & BPJS, Kerahasiaan Data (NDA), serta Tanda Tangan Bermaterai.",
      windowTitle: "Perjanjian_Kerja_PKWT_HRD.docx",
      headerTitle: "PT TEKNOLOGI NUSANTARA MANDIRI",
      headerSubtitle: "PERJANJIAN KERJA WAKTU TERTENTU (PKWT)",
      contact: "Nomor: 042/HRD-PKWT/TNM/III/2026",
      sections: [
        { title: "PASAL 1: JANGKA WAKTU KONTRAK", text: "Berlaku selama 12 bulan terhitung sejak 02 Maret 2026 s.d. 01 Maret 2027." },
        { title: "PASAL 4: HAK UPAH & TUNJANGAN", text: "Upah pokok Rp 8.500.000/bulan + BPJS Ketenagakerjaan & Kesehatan." }
      ],
      sealBadge: "LEGAL BINDING"
    },
    {
      id: "wv-4",
      title: "Dokumen SOP Tata Kelola Arsip & Data Digital Kantor",
      category: "SOP & Prosedur",
      filename: "SOP_Standar_Operasional_Prosedur_Kantor.docx",
      size: "37.2 KB",
      badge: "📋 Standar ISO Kantor",
      rating: "4.8 ★★★★★",
      pagesCount: "2 Halaman A4",
      desc: "Dokumen baku Standar Operasional Prosedur: Lembar Pengesahan Manajer & Direksi, Riwayat Revisi Dokumen, Tujuan, Ruang Lingkup, dan Alur Prosedur Kerja Teknis.",
      windowTitle: "SOP_Standar_Operasional_Prosedur.docx",
      headerTitle: "STANDAR OPERASIONAL PROSEDUR (SOP)",
      headerSubtitle: "TATA KELOLA ARSIP & KEAMANAN DATA DIGITAL",
      contact: "No. Dokumen: SOP-IT-004-REV02 | Tanggal: 01 Jan 2026",
      sections: [
        { title: "1. TUJUAN OPERASIONAL", text: "Menjamin seluruh data dan dokumen perkantoran tersimpan rapi, terlindungi enkripsi, dan terbackup secara berkala." },
        { title: "2. INSTRUKSI KERJA", bullets: ["Backup berkas tiap Jumat pukul 16.00 WIB", "Format penamaan: [TGL]_[DIVISI]_[DOKUMEN]"] }
      ],
      sealBadge: "ISO 9001 COMPLIANT"
    },
    {
      id: "wv-5",
      title: "Format Laporan Eksekutif Triwulan Direksi Perusahaan",
      category: "Laporan Direksi",
      filename: "Laporan_Eksekutif_Q1_2026.docx",
      size: "37.3 KB",
      badge: "📈 Laporan Direksi",
      rating: "4.8 ★★★★★",
      pagesCount: "3 Halaman A4",
      desc: "Format laporan direksi: Cover Page Elegan, Ringkasan Eksekutif, Analisis Kinerja Bisnis, Evaluasi Kendala Operasional, dan Rekomendasi Strategis Q2.",
      windowTitle: "Laporan_Eksekutif_Q1_2026.docx",
      headerTitle: "LAPORAN KINERJA EKSEKUTIF TRIWULAN I 2026",
      headerSubtitle: "Dewan Direksi PT Inovasi Nusantara",
      contact: "Kuartal 1 (Januari - Maret 2026)",
      sections: [
        { title: "RINGKASAN EKSEKUTIF", text: "Pendapatan bertumbuh 24,5% year-on-year didorong oleh adopsi layanan digital dan efisiensi rantai pasok." },
        { title: "REKOMENDASI STRATEGIS", text: "Perluasan ekspansi cabang wilayah Jawa Tengah dan peningkatan kapasitas server komputasi awan." }
      ],
      sealBadge: "CONFIDENTIAL"
    },
    {
      id: "wv-6",
      title: "Proposal Tender Pengadaan Infrastruktur Server & IT",
      category: "Proposal Tender",
      filename: "Proposal_Tender_Server_2026.docx",
      size: "37.2 KB",
      badge: "🏢 Proposal Tender",
      rating: "4.7 ★★★★★",
      pagesCount: "3 Halaman A4",
      desc: "Format proposal penawaran proyek lelang: Latar Belakang Kebutuhan, Spesifikasi Teknis Server & Topologi Jaringan, Rincian Anggaran Biaya (RAB), dan Timeline Implementasi.",
      windowTitle: "Proposal_Tender_Server_2026.docx",
      headerTitle: "PROPOSAL TENDER PENGADAAN PERANGKAT SERVER",
      headerSubtitle: "Pengadaan Komputer Server & Jaringan Terpadu",
      contact: "Tahun Anggaran 2026",
      sections: [
        { title: "SPESIFIKASI INFRASTRUKTUR", text: "Dual Intel Xeon Scalable, 128GB ECC DDR5, Redundant Hot-Swap PSU, dan Enterprise SSD NVMe." },
        { title: "ESTIMASI ANGGARAN (RAB)", text: "Total nilai penawaran Rp 285.000.000 (termasuk PPN 11% dan instalasi onsite)." }
      ],
      sealBadge: "DOKUMEN LELANG"
    },
    {
      id: "wv-7",
      title: "Nota Kesepahaman (MoU) Kemitraan Strategis Bisnis",
      category: "Legal & MoU",
      filename: "Perjanjian_MoU_Kemitraan_2026.docx",
      size: "37.2 KB",
      badge: "🤝 MoU Kemitraan",
      rating: "4.8 ★★★★★",
      pagesCount: "2 Halaman A4",
      desc: "Format resmi Memorandum of Understanding (MoU) kerjasama bilateral: Hak dan Kewajiban Para Pihak, Skema Bagi Hasil, Penyelesaian Perselisihan, dan Klausul Kerahasiaan.",
      windowTitle: "Perjanjian_MoU_Kemitraan.docx",
      headerTitle: "NOTA KESEPAHAMAN (MEMORANDUM OF UNDERSTANDING)",
      headerSubtitle: "Kerjasama Kemitraan Ekosistem Pembelajaran IT",
      contact: "Nomor: 018/MoU/DIR-EXT/2026",
      sections: [
        { title: "PASAL 2: RUANG LINGKUP KERJASAMA", text: "Penyediaan modul ajar, sertifikasi kompetensi keahlian, dan penyaluran tenaga kerja siap pakai." },
        { title: "PASAL 5: JANGKA WAKTU KEMITRAAN", text: "Berlaku efektif selama 3 (tiga) tahun kalender sejak ditandatangani." }
      ],
      sealBadge: "OFFICIAL PARTNER"
    },
    {
      id: "wv-8",
      title: "Dokumen Praktik Naskah Pintasan Word Windows Lengkap",
      category: "Pintasan Keyboard",
      filename: "Modul_Praktik_Pintasan_Word_Lengkap.docx",
      size: "46.3 KB",
      badge: "⌨️ Panduan Pintasan",
      rating: "4.9 ★★★★★",
      pagesCount: "5 Halaman A4",
      desc: "Dokumen A4 terstruktur untuk melatih 55 pintasan keyboard Word: Pemformatan Teks (Tebal, Miring, Garis Bawah), Perataan Paragraf (Kiri, Tengah, Justify), Navigasi Kata & Halaman, dan Cetak Cepat.",
      windowTitle: "Modul_Praktik_Pintasan_Word_Lengkap.docx",
      headerTitle: "MODUL PRAKTIK RESMI PINTASAN KEYBOARD WORD",
      headerSubtitle: "Panduan Latihan Langsung di Aplikasi Microsoft Word Desktop",
      contact: "Akademi IT & Koding Kodi",
      sections: [
        { title: "MISI 1: PEMFORMATAN HURUF", text: "Praktikkan Ctrl+B (Tebal), Ctrl+I (Miring), Ctrl+U (Garis Bawah), Ctrl+D (Font Dialog)." },
        { title: "MISI 2: PERATAAN PARAGRAF", text: "Praktikkan Ctrl+L (Kiri), Ctrl+E (Tengah), Ctrl+R (Kanan), Ctrl+J (Rata Kanan-Kiri)." }
      ],
      sealBadge: "PRAKTIK RESMI"
    }
  ];

  // Helper State
  window.appState = window.appState || {};
  appState.vaultFilter = appState.vaultFilter || { excel: "all", word: "all" };
  appState.vaultSearch = appState.vaultSearch || { excel: "", word: "" };
  appState.cheatFilter = appState.cheatFilter || { excel: "all", word: "all" };
  appState.cheatSearch = appState.cheatSearch || { excel: "", word: "" };

  window.getVaultCategories = function(mode) {
    const list = mode === "excel" ? window.EXCEL_VAULT_FILES : window.WORD_VAULT_FILES;
    const cats = new Set();
    list.forEach(item => cats.add(item.category));
    return ["all", ...Array.from(cats)];
  };

  window.getFilteredVaultFiles = function(mode) {
    const list = mode === "excel" ? window.EXCEL_VAULT_FILES : window.WORD_VAULT_FILES;
    const cat = appState.vaultFilter[mode] || "all";
    const q = (appState.vaultSearch[mode] || "").toLowerCase().trim();

    return list.filter(item => {
      const matchCat = (cat === "all") || (item.category === cat);
      const matchQ = !q ||
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.filename.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  };

  window.filterVaultCategory = function(mode, cat) {
    if (window.sfx) sfx.playClick();
    appState.vaultFilter[mode] = cat;
    window.renderShortcutStudio(mode);
  };

  window.searchVaultFiles = function(mode, val) {
    appState.vaultSearch[mode] = val;
    window.renderShortcutStudio(mode);
  };

  window.getShortcutCategories = function(mode) {
    const list = mode === "excel" ? window.EXCEL_SHORTCUTS : window.WORD_SHORTCUTS;
    const cats = new Set();
    list.forEach(item => cats.add(item.category));
    return ["all", ...Array.from(cats)];
  };

  window.getFilteredShortcuts = function(mode) {
    const list = mode === "excel" ? window.EXCEL_SHORTCUTS : window.WORD_SHORTCUTS;
    const cat = appState.cheatFilter[mode] || "all";
    const q = (appState.cheatSearch[mode] || "").toLowerCase().trim();

    return list.filter(item => {
      const matchCat = (cat === "all") || (item.category === cat);
      const matchQ = !q ||
        item.key.toLowerCase().includes(q) ||
        item.action.toLowerCase().includes(q) ||
        item.scenario.toLowerCase().includes(q) ||
        item.nalarBayiKodi.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  };

  window.filterShortcutCheatCategory = function(mode, cat) {
    if (window.sfx) sfx.playClick();
    appState.cheatFilter[mode] = cat;
    window.renderShortcutStudio(mode);
  };

  window.searchShortcutCheat = function(mode, val) {
    appState.cheatSearch[mode] = val;
    window.renderShortcutStudio(mode);
  };

  // =========================================================================
  // RENDERER THUMBNAIL REALISTIS: EXCEL & WORD
  // =========================================================================

  function renderExcelMiniThumbnailHtml(file) {
    const rowsHtml = file.rows.map((r, idx) => `
      <tr>
        <td class="mini-row-num">${idx + 1}</td>
        <td>${r[0]}</td>
        <td>${r[1]}</td>
        <td>${r[2]}</td>
        <td class="num-cell">${r[3]}</td>
        <td class="num-cell">${r[4]}</td>
      </tr>
    `).join("");

    const pillsHtml = file.sheetPills.map((p, idx) => `
      <span class="mini-tab ${idx === 0 ? 'active' : ''}">${p}</span>
    `).join("");

    return `
      <div class="excel-mini-thumbnail" title="Pratinjau Workbook Excel Asli">
        <div class="mini-excel-ribbon">
          <div class="mini-ribbon-left">
            <span class="mini-app-icon">📊</span>
            <span class="mini-window-title">${file.ribbonTitle}</span>
          </div>
          <div class="mini-window-dots">
            <span></span><span></span><span></span>
          </div>
        </div>
        <div class="mini-formula-bar">
          <span class="mini-coord">A1</span>
          <span class="mini-fx">fx</span>
          <span class="mini-formula-text">${file.formulaSnippet}</span>
        </div>
        <div class="mini-grid-container">
          <table class="mini-grid-table">
            <thead>
              <tr>
                <th class="mini-row-th">#</th>
                ${file.headers.map(h => `<th>${h}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
        </div>
        <div class="mini-sheet-tabs">
          ${pillsHtml}
        </div>
      </div>
    `;
  }

  function renderWordMiniThumbnailHtml(file) {
    const sectionsHtml = file.sections.map(s => `
      <div class="mini-paper-section-title">${s.title}</div>
      ${s.text ? `<div class="mini-paper-text">${s.text}</div>` : ""}
      ${s.bullets ? s.bullets.map(b => `<div class="mini-paper-bullet"><span>•</span> ${b}</div>`).join("") : ""}
    `).join("");

    return `
      <div class="word-mini-thumbnail" title="Pratinjau Dokumen Naskah Word A4">
        <div class="mini-word-ribbon">
          <div class="mini-ribbon-left">
            <span class="mini-app-icon">📝</span>
            <span class="mini-window-title">${file.windowTitle}</span>
          </div>
          <div class="mini-window-dots">
            <span></span><span></span><span></span>
          </div>
        </div>
        <div class="mini-paper-viewport">
          <div class="mini-paper-sheet">
            <div class="mini-paper-header">
              <div class="mini-paper-seal-icon">🏛️</div>
              <div>
                <div class="mini-paper-name">${file.headerTitle}</div>
                <div class="mini-paper-role">${file.headerSubtitle}</div>
                <div class="mini-paper-contact">${file.contact}</div>
              </div>
            </div>
            <div class="mini-paper-divider"></div>
            ${sectionsHtml}
            <div class="mini-paper-seal">
              <span class="seal-icon">🏆</span>
              <span class="seal-text">${file.sealBadge}</span>
            </div>
          </div>
        </div>
        <div class="mini-word-status">
          <span>Halaman 1 dari ${file.pagesCount.split(' ')[0] || '1'}</span>
          <span>Bahasa Indonesia</span>
          <span>100% 🎚️</span>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // RENDER STUDIO FUNGSI UTAMA (BEBAS GAME, LEBAR MENYEBAR KE KANAN-KIRI)
  // =========================================================================

  window.renderShortcutStudio = function(mode) {
    const containerId = mode === "excel" ? "shortcut-excel-content-area" : "shortcut-word-content-area";
    const container = document.getElementById(containerId);
    if (!container) return;

    const isWord = (mode === "word");
    const appTitle = isWord ? "Microsoft Word" : "Microsoft Excel";
    const appExt = isWord ? ".docx" : ".xlsx";
    const themeColor = isWord ? "#2563eb" : "#107c41";
    const themeLight = isWord ? "#38bdf8" : "#10b981";
    const heroTile = isWord ? "tile_3d_02.png" : "tile_3d_08.png";

    const vaultFiles = window.getFilteredVaultFiles(mode);
    const vaultCategories = window.getVaultCategories(mode);
    const currentVaultCat = appState.vaultFilter[mode] || "all";
    const currentVaultSearch = appState.vaultSearch[mode] || "";

    const shortcuts = window.getFilteredShortcuts(mode);
    const shortcutCategories = window.getShortcutCategories(mode);
    const currentCheatCat = appState.cheatFilter[mode] || "all";
    const currentCheatSearch = appState.cheatSearch[mode] || "";

    // Generate Cards HTML
    const cardsHtml = vaultFiles.length ? vaultFiles.map(file => {
      const thumbHtml = isWord ? renderWordMiniThumbnailHtml(file) : renderExcelMiniThumbnailHtml(file);
      const downloadPath = `assets/downloads/${file.filename}`;

      return `
        <div class="office-file-card ${isWord ? 'word-theme' : 'excel-theme'}">
          <!-- Card Header Badges -->
          <div class="file-card-top-badges">
            <span class="file-cat-pill">${file.category}</span>
            <span class="file-accent-pill">${file.badge}</span>
            <span class="file-ext-pill">${appExt.toUpperCase()}</span>
          </div>

          <!-- Realistic Visual Thumbnail -->
          ${thumbHtml}

          <!-- Body Info -->
          <div class="file-card-info">
            <h3 class="file-card-heading">${file.title}</h3>
            <p class="file-card-summary">${file.desc}</p>

            <div class="file-specs-row">
              <span class="spec-tag">📄 ${isWord ? file.pagesCount : file.sheetsCount}</span>
              <span class="spec-tag">⭐ ${file.rating}</span>
              <span class="spec-tag">⚡ Siap Pakai</span>
            </div>
          </div>

          <!-- Prominent Glowing Download Button -->
          <div class="file-card-action">
            <a href="${downloadPath}" download="${file.filename}" class="btn-vault-download ${isWord ? 'word-btn' : 'excel-btn'}">
              <span class="dl-icon-glow">📥</span>
              <div class="dl-text-wrap">
                <span class="dl-title">UNDUH FILE ASLI (${appExt.toUpperCase()})</span>
                <span class="dl-meta">Ukuran: ${file.size} • 1-Klik Langsung Tersimpan</span>
              </div>
              <span class="dl-arrow-pill">➔</span>
            </a>
          </div>
        </div>
      `;
    }).join("") : `
      <div class="empty-vault-state">
        <span style="font-size: 3rem;">🔍</span>
        <h4>Tidak ditemukan berkas yang cocok</h4>
        <p>Coba gunakan kata kunci lain atau pilih "Semua Kategori" di atas.</p>
        <button class="btn-secondary" onclick="appState.vaultFilter['${mode}']='all'; appState.vaultSearch['${mode}']=''; renderShortcutStudio('${mode}');">
          🔄 Reset Pencarian
        </button>
      </div>
    `;

    // Generate Cheat Sheet Table Rows
    const tableRowsHtml = shortcuts.length ? shortcuts.map((item, idx) => {
      const keysHtml = item.key.split("+").map(k => `<kbd class="office-kbd">${k.trim()}</kbd>`).join(" <span class='kbd-plus'>+</span> ");
      return `
        <tr class="cheat-row">
          <td class="cheat-num">${idx + 1}</td>
          <td class="cheat-key-col">${keysHtml}</td>
          <td class="cheat-action-col">
            <strong>${item.action}</strong>
            <div class="cheat-cat-sub">${item.category}</div>
          </td>
          <td class="cheat-scenario-col">${item.scenario}</td>
          <td class="cheat-kodi-col">
            <div class="kodi-analogy-box">
              <span class="kodi-mini-icon">🤖</span>
              <span>${item.nalarBayiKodi}</span>
            </div>
          </td>
        </tr>
      `;
    }).join("") : `
      <tr>
        <td colspan="5" style="text-align: center; padding: 24px; color: var(--text-muted);">
          🔍 Pintasan tidak ditemukan. Coba reset pencarian di atas!
        </td>
      </tr>
    `;

    let html = `
      <div class="shortcut-vault-container">
        <!-- 1. HERO BANNER MODERN WIDESCREEN -->
        <div class="vault-hero-card ${isWord ? 'word-hero' : 'excel-hero'}">
          <div class="vault-hero-main">
            <img src="assets/illustrations/3d_tiles/${heroTile}" class="vault-hero-avatar" alt="${appTitle}">
            <div>
              <div class="vault-hero-tag">
                💼 REPOSITORI BERKAS & DOKUMEN PRAKTIK ASLI KANTOR (${appTitle.toUpperCase()})
              </div>
              <h2 class="vault-hero-title">
                Brankas File Latihan Nyata & Pintasan Keyboard ${appTitle}
              </h2>
              <p class="vault-hero-desc">
                Tanpa game yang bikin ribet! Langsung unduh file latihan asli (<code>${appExt}</code>) yang sudah kami format dengan kasus nyata kantor, rumus otomatis, kop surat resmi, dan standar interview. Buka dan praktikkan langsung di aplikasi ${appTitle} laptopmu!
              </p>
            </div>
          </div>
          <div class="vault-hero-stats">
            <div class="vault-stat-box">
              <span class="stat-num">${isWord ? window.WORD_VAULT_FILES.length : window.EXCEL_VAULT_FILES.length}</span>
              <span class="stat-lbl">File Siap Unduh</span>
            </div>
            <div class="vault-stat-box">
              <span class="stat-num">${isWord ? window.WORD_SHORTCUTS.length : window.EXCEL_SHORTCUTS.length}</span>
              <span class="stat-lbl">Pintasan Sakti</span>
            </div>
          </div>
        </div>

        <!-- 2. WORKFLOW STEP FLOW -->
        <div class="visual-mission-flow" style="margin-bottom: 24px;">
          <div class="flow-step-item active">📁 1. Pilih Template Kasus Nyata</div>
          <span class="flow-arrow-sep">➔</span>
          <div class="flow-step-item">📥 2. Klik Tombol Unduh Hijau/Biru</div>
          <span class="flow-arrow-sep">➔</span>
          <div class="flow-step-item">💻 3. Buka di ${appTitle} Desktop</div>
          <span class="flow-arrow-sep">➔</span>
          <div class="flow-step-item">⚡ 4. Pakai Pintasan di Bawah Biar 10x Lebih Cepat</div>
        </div>

        <!-- 3. SECTION HEADER & SEARCH FILTER BAR UNTUK BRANKAS FILE -->
        <div class="vault-section-header">
          <div>
            <h3 class="vault-subheading">
              📂 Koleksi Berkas & Template Nyata Siap Pakai (${vaultFiles.length} Berkas)
            </h3>
            <p class="vault-subtext">Pilih kategori atau cari file sesuai kebutuhan tes kerja atau tugas kantormu:</p>
          </div>

          <!-- Search Input -->
          <div class="vault-search-wrap">
            <span class="search-icon">🔍</span>
            <input type="text"
                   class="vault-search-input"
                   placeholder="Cari nama file, akuntansi, slip gaji, SOP, PKWT..."
                   value="${currentVaultSearch}"
                   oninput="searchVaultFiles('${mode}', this.value)" />
            ${currentVaultSearch ? `
              <button class="clear-search-btn" onclick="searchVaultFiles('${mode}', '')">✕</button>
            ` : ""}
          </div>
        </div>

        <!-- Category Pills Bar -->
        <div class="vault-category-pills">
          ${vaultCategories.map(cat => {
            const isActive = (cat === currentVaultCat);
            const label = cat === "all" ? `Semua Kategori (${isWord ? window.WORD_VAULT_FILES.length : window.EXCEL_VAULT_FILES.length})` : cat;
            return `
              <button class="vault-cat-btn ${isActive ? 'active' : ''} ${isWord ? 'word-pill' : 'excel-pill'}"
                      onclick="filterVaultCategory('${mode}', '${cat}')">
                ${label}
              </button>
            `;
          }).join("")}
        </div>

        <!-- 4. GRID KARTU FILE DENGAN THUMBNAIL REALISTIS & TOMBOL UNDUH BESAR -->
        <div class="office-vault-grid">
          ${cardsHtml}
        </div>

        <!-- 5. CHEAT SHEET PINTASAN KEYBOARD CEPAT -->
        <div class="vault-cheatsheet-section">
          <div class="vault-section-header" style="margin-top: 40px;">
            <div>
              <div class="vault-hero-tag" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid #38bdf8;">
                ⚡ KAMUS & PANDUAN PINTASAN KANTOR
              </div>
              <h3 class="vault-subheading">
                ⌨️ Tabel Pintasan Keyboard ${appTitle} Windows Lengkap (${shortcuts.length} Pintasan)
              </h3>
              <p class="vault-subtext">Hafalkan dan gunakan saat membuka file di atas. Dilengkapi Nalar Bayi Kodi agar mudah diingat seumur hidup!</p>
            </div>

            <!-- Search Cheat Sheet -->
            <div class="vault-search-wrap">
              <span class="search-icon">🔍</span>
              <input type="text"
                     class="vault-search-input"
                     placeholder="Cari pintasan (misal: Save, Bold, Cari, Baris, Rumus)..."
                     value="${currentCheatSearch}"
                     oninput="searchShortcutCheat('${mode}', this.value)" />
              ${currentCheatSearch ? `
                <button class="clear-search-btn" onclick="searchShortcutCheat('${mode}', '')">✕</button>
              ` : ""}
            </div>
          </div>

          <!-- Category Filter Pills Cheat Sheet -->
          <div class="vault-category-pills" style="margin-bottom: 16px;">
            ${shortcutCategories.map(cat => {
              const isActive = (cat === currentCheatCat);
              const label = cat === "all" ? `Semua Pintasan (${isWord ? window.WORD_SHORTCUTS.length : window.EXCEL_SHORTCUTS.length})` : cat;
              return `
                <button class="vault-cat-btn ${isActive ? 'active' : ''} ${isWord ? 'word-pill' : 'excel-pill'}"
                        onclick="filterShortcutCheatCategory('${mode}', '${cat}')">
                  ${label}
                </button>
              `;
            }).join("")}
          </div>

          <!-- Clean Modern Table Responsive -->
          <div class="table-responsive-box">
            <table class="vault-cheatsheet-table">
              <thead>
                <tr>
                  <th style="width: 50px;">No</th>
                  <th style="width: 170px;">Tombol Keyboard</th>
                  <th style="width: 250px;">Fungsi / Aksi Kantor</th>
                  <th>Skenario Kerja Nyata</th>
                  <th style="width: 320px;">Nalar Bayi Kodi 🍼</th>
                </tr>
              </thead>
              <tbody>
                ${tableRowsHtml}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;
  };

  // Endpoint Khusus Tab
  window.renderExcelShortcutStudio = function() {
    window.renderShortcutStudio("excel");
  };

  window.renderWordShortcutStudio = function() {
    window.renderShortcutStudio("word");
  };

})();
