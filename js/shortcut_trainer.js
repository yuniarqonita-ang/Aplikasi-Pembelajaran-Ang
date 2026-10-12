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
  // DATA PROYEK KANTOR NYATA & PERMINTAAN KLIEN (WORD & EXCEL)
  // Simulasi Dunia Kerja Nyata: Boss/Klien Request + Dokumen Berubah Real-time
  // =========================================================================

  window.WORD_PROJECTS = [
    {
      id: 'w-proj-1',
      title: 'Laporan Riset Pasar & Rekomendasi Eksekutif',
      client: 'Bpk. Hendra Pratama',
      clientRole: 'Direktur Operasional & Bisnis',
      clientAvatar: '👔',
      docFilename: 'Laporan_Eksekutif_Q1_2026.docx',
      story: 'Halo Kodi! Saya baru mengetik draf laporan riset pasar ini secara cepat. Tampilannya masih polos, judul belum di tengah dan belum tebal, istilah asing belum miring, dan paragrafnya belum rapi. Tolong gunakan pintasan keyboard saktimu untuk merapikannya sesuai instruksi di bawah ya!',
      initialDoc: {
        title: 'LAPORAN RISET PASAR & ANALISIS TREN BISNIS 2026',
        subTitle: 'Divisi Strategi Korporat — Kuartal I',
        par1: 'Perkembangan adopsi teknologi kecerdasan buatan atau Artificial Intelligence telah mentransformasi produktivitas kantor secara masif. Berdasarkan observasi triwulan pertama, kecepatan pemrosesan data meningkat hingga 45% ketika staf memanfaatkan pintasan keyboard dan automasi digital terarah.',
        par2: 'REKOMENDASI DIREKSI: Manajemen merekomendasikan alokasi anggaran belanja modal sebesar 15% untuk pelatihan akselerasi digital seluruh staf operasional.'
      },
      tasks: [
        {
          id: 'w1_step1',
          name: 'Tebalkan Judul Dokumen Utama',
          instruction: 'Tebalkan judul agar mencolok dan berwibawa di hadapan dewan Direksi!',
          shortcut: 'Ctrl+B',
          keys: ['ctrl', 'b'],
          actionCode: 'title_bold',
          babyLogic: 'Ctrl + B (Bold) = Mengubah teks biasa jadi berotot dan tebal seketika!'
        },
        {
          id: 'w1_step2',
          name: 'Posisikan Judul ke Rata Tengah (Center)',
          instruction: 'Tarik judul ke tengah halaman agar simetris dan rapi dipandang!',
          shortcut: 'Ctrl+E',
          keys: ['ctrl', 'e'],
          actionCode: 'title_center',
          babyLogic: 'Ctrl + E (Equator / Center) = Menarik teks ke garis khatulistiwa tengah!'
        },
        {
          id: 'w1_step3',
          name: 'Miringkan Istilah Asing "Artificial Intelligence"',
          instruction: 'Beri gaya miring (Italic) pada istilah serapan bahasa asing!',
          shortcut: 'Ctrl+I',
          keys: ['ctrl', 'i'],
          actionCode: 'body_italic',
          babyLogic: 'Ctrl + I (Italic) = Merebahkan huruf 15 derajat untuk istilah ilmiah/asing!'
        },
        {
          id: 'w1_step4',
          name: 'Rapikan Paragraf ke Rata Kiri-Kanan (Justify)',
          instruction: 'Buat batas tepi kiri dan kanan paragraf lurus sejajar tanpa gerigi!',
          shortcut: 'Ctrl+J',
          keys: ['ctrl', 'j'],
          actionCode: 'body_justify',
          babyLogic: 'Ctrl + J (Justify) = Menjepit teks rapat rata di kedua dinding kertas!'
        },
        {
          id: 'w1_step5',
          name: 'Beri Garis Bawah pada Rekomendasi Direksi',
          instruction: 'Tandai poin rekomendasi penting dengan garis bawah resmi (Underline)!',
          shortcut: 'Ctrl+U',
          keys: ['ctrl', 'u'],
          actionCode: 'recom_underline',
          babyLogic: 'Ctrl + U (Underline) = Menggarisbawahi poin emas agar bos langsung melirik!'
        },
        {
          id: 'w1_step6',
          name: 'Simpan Dokumen Laporan (Save Document)',
          instruction: 'Kunci seluruh editan ke dalam berkas agar tidak hilang saat mati lampu!',
          shortcut: 'Ctrl+S',
          keys: ['ctrl', 's'],
          actionCode: 'doc_save',
          babyLogic: 'Ctrl + S (Save) = Mengunci gembok berkas ke harddisk, aman selamanya!'
        }
      ]
    },
    {
      id: 'w-proj-2',
      title: 'Naskah Proposal Tender Pengadaan Infrastruktur IT',
      client: 'Ibu Maya Anggraini',
      clientRole: 'Manajer Administrasi & Pengadaan',
      clientAvatar: '👩‍💼',
      docFilename: 'Proposal_Tender_Server_2026.docx',
      story: 'Kodi, besok pagi proposal tender pengadaan perangkat server ini harus diserahkan ke kementerian! Dokumen ini butuh pencarian kata kunci anggaran, penambahan hyperlink tautan teknis, dan pratinjau cetak printer. Yuk selesaikan dengan pintasan!',
      initialDoc: {
        title: 'PROPOSAL PENGADAAN PERANGKAT SERVER CLOUD',
        subTitle: 'Nomor Registrasi: 048/TDR-IT/IV/2026',
        par1: 'Alokasi rincian biaya teknis tertera pada dokumen Anggaran Belanja Pokok. Verifikasi rincian perangkat keras dapat dipantau langsung pada portal pengadaan nasional.',
        par2: 'Lampiran Spesifikasi: Dokumen arsitektur komputasi awan berkapasitas tinggi ini mengacu pada standar ISO/IEC 27001.'
      },
      tasks: [
        {
          id: 'w2_step1',
          name: 'Cari Kata Kunci "Anggaran" dalam Naskah (Find)',
          instruction: 'Buka jendela pencarian untuk melacak kata kunci anggaran!',
          shortcut: 'Ctrl+F',
          keys: ['ctrl', 'f'],
          actionCode: 'find_anggaran',
          babyLogic: 'Ctrl + F (Find) = Lampu senter ajaib pemburu kata kunci dalam sekejap!'
        },
        {
          id: 'w2_step2',
          name: 'Sisipkan Tautan Hyperlink ke Portal Spesifikasi',
          instruction: 'Ubah teks tautan menjadi hyperlink biru bergaris bawah!',
          shortcut: 'Ctrl+K',
          keys: ['ctrl', 'k'],
          actionCode: 'insert_hyperlink',
          babyLogic: 'Ctrl + K (LinK) = Jembatan kawat biru menyambungkan kata ke alamat web!'
        },
        {
          id: 'w2_step3',
          name: 'Salin Paragraf Ringkasan Spesifikasi (Copy)',
          instruction: 'Gandakan paragraf spesifikasi ke clipboard naskah!',
          shortcut: 'Ctrl+C',
          keys: ['ctrl', 'c'],
          actionCode: 'copy_summary',
          babyLogic: 'Ctrl + C (Copy) = Mesin fotokopi digital menangkap teks tanpa merusaknya!'
        },
        {
          id: 'w2_step4',
          name: 'Tempelkan Hasil Salinan ke Penutup (Paste)',
          instruction: 'Letakkan salinan paragraf tepat di penutup lembar proposal!',
          shortcut: 'Ctrl+V',
          keys: ['ctrl', 'v'],
          actionCode: 'paste_summary',
          babyLogic: 'Ctrl + V (Paste) = Menempelkan stempel teks hasil fotokopi seketika!'
        },
        {
          id: 'w2_step5',
          name: 'Buka Pratinjau Cetak Dokumen (Print Preview)',
          instruction: 'Tampilkan dialog cetak untuk memeriksa hasil sebelum cetak kertas!',
          shortcut: 'Ctrl+P',
          keys: ['ctrl', 'p'],
          actionCode: 'doc_print',
          babyLogic: 'Ctrl + P (Print) = Mengirim sinyal perintah ke mesin printer kertas!'
        }
      ]
    },
    {
      id: 'w-proj-3',
      title: 'Perjanjian Kerjasama (MoU) Kemitraan Strategis',
      client: 'Bpk. Rian Hidayat, S.H.',
      clientRole: 'Konsultan Hukum & Legal Corporate',
      clientAvatar: '👨‍⚖️',
      docFilename: 'Perjanjian_MoU_Kemitraan_2026.docx',
      story: 'Kodi, draf nota kesepahaman ini masih menggunakan sebutan draft "Pihak Pertama". Kita harus mengganti istilah tersebut secara serentak menjadi nama resmi PT, menjalankan pemeriksaan ejaan, dan menyimpan cadangan dokumen!',
      initialDoc: {
        title: 'NOTA KESEPAHAMAN BERSAMA (MEMORANDUM OF UNDERSTANDING)',
        subTitle: 'Nomor: 102/MOU-LEGAL/III/2026',
        par1: 'Bahwa Pihak Pertama dan Pihak Kedua sepakat menjalin kemitraan strategis dalam pengembangan fasilitas pembelajaran digital dan laboratorium komputer terpadu.',
        par2: 'Segala hak serta kewajiban yang ditandatangani oleh Pihak Pertama dan Pihak Kedua berlaku sah dan mengikat kedua belah pihak.'
      },
      tasks: [
        {
          id: 'w3_step1',
          name: 'Ganti Kata Otomatis (Replace Dialog)',
          instruction: 'Buka dialog ganti kata untuk mengganti "Pihak Pertama" jadi "PT Inovasi Maju"!',
          shortcut: 'Ctrl+H',
          keys: ['ctrl', 'h'],
          actionCode: 'replace_dialog',
          babyLogic: 'Ctrl + H = Ahli bedah kata yang mengganti ribuan kata salah dalam satu klik!'
        },
        {
          id: 'w3_step2',
          name: 'Pemeriksaan Ejaan & Tata Bahasa (Spelling & Grammar)',
          instruction: 'Jalankan pemeriksa ejaan F7 untuk memverifikasi dokumen!',
          shortcut: 'F7',
          keys: ['f7'],
          actionCode: 'spelling_check',
          babyLogic: 'F7 = Hakim ejaan teliti penanda tinta merah bila ada tipo kata!'
        },
        {
          id: 'w3_step3',
          name: 'Sorot Seluruh Isi Dokumen (Select All)',
          instruction: 'Pilih seluruh teks dokumen dari awal hingga akhir!',
          shortcut: 'Ctrl+A',
          keys: ['ctrl', 'a'],
          actionCode: 'select_all',
          babyLogic: 'Ctrl + A (All) = Menjala seluruh lautan teks tanpa ada yang terlewat!'
        },
        {
          id: 'w3_step4',
          name: 'Buka Dialog Simpan Sebagai Cadangan (Save As)',
          instruction: 'Buka dialog Simpan Sebagai untuk membuat berkas cadangan nama baru!',
          shortcut: 'F12',
          keys: ['f12'],
          actionCode: 'save_as_new',
          babyLogic: 'F12 (Save As) = Menduplikasi berkas dengan nama atau format baru!'
        }
      ]
    }
  ];

  window.EXCEL_PROJECTS = [
    {
      id: 'e-proj-1',
      title: 'Rekapitulasi Omset Penjualan & Kas Retail',
      client: 'Bpk. Budi Santoso',
      clientRole: 'Pemilik Toko Retail Nusantara',
      clientAvatar: '🏪',
      docFilename: 'Rekap_Penjualan_Maret_2026.xlsx',
      story: 'Halo Kodi! Saya baru merekap catatan penjualan cabang toko kita bulan ini. Angkanya masih angka mentah tanpa simbol Rupiah, persentase margin masih desimal, kolom belum jadi tabel resmi, dan total akhir belum dihitung. Tolong sulap spreadsheet ini jadi profesional ya!',
      initialGrid: [
        { colA: 'Cabang A (Pusat)', colB: 'Jakarta', colC: 15500000, colD: 0.18, colE: 'Lunas' },
        { colA: 'Cabang B (Barat)', colB: 'Bandung', colC: 12250000, colD: 0.12, colE: 'Lunas' },
        { colA: 'Cabang C (Timur)', colB: 'Surabaya', colC: 18750000, colD: 0.22, colE: 'Lunas' },
        { colA: 'Cabang D (Utara)', colB: 'Semarang', colC: 9800000, colD: 0.08, colE: 'Pending' }
      ],
      tasks: [
        {
          id: 'e1_step1',
          name: 'Format Angka Omset ke Mata Uang Rupiah',
          instruction: 'Ubah angka di Kolom Omset (C) menjadi format mata uang resmi Rp!',
          shortcut: 'Ctrl+Shift+$',
          keys: ['ctrl', 'shift', '4'],
          altKeys: ['ctrl', 'shift', '$'],
          actionCode: 'format_currency',
          babyLogic: 'Ctrl + Shift + $ = Menaburkan simbol mata uang Rupiah & pemisah ribuan!'
        },
        {
          id: 'e1_step2',
          name: 'Format Angka Margin ke Persentase (%)',
          instruction: 'Ubah angka di Kolom Margin (D) menjadi format persen rapi!',
          shortcut: 'Ctrl+Shift+%',
          keys: ['ctrl', 'shift', '5'],
          altKeys: ['ctrl', 'shift', '%'],
          actionCode: 'format_percent',
          babyLogic: 'Ctrl + Shift + % = Mengalikan desimal dengan 100 dan menempel tanda %!'
        },
        {
          id: 'e1_step3',
          name: 'Hitung Total Otomatis dengan AutoSum',
          instruction: 'Letakkan kursor di bawah kolom omset lalu panggil AutoSum!',
          shortcut: 'Alt+=',
          keys: ['alt', '='],
          actionCode: 'autosum_total',
          babyLogic: 'Alt + = (AutoSum) = Robot kalkulator cerdas langsung merangkum rumus SUM!'
        },
        {
          id: 'e1_step4',
          name: 'Ubah Rentang Data Jadi Tabel Resmi (Create Table)',
          instruction: 'Sulap kisi-kisi data menjadi tabel bergaris cantik dengan filter otomatis!',
          shortcut: 'Ctrl+T',
          keys: ['ctrl', 't'],
          actionCode: 'create_table',
          babyLogic: 'Ctrl + T (Table) = Merias data mentah jadi tabel profesional berwarna zebra!'
        },
        {
          id: 'e1_step5',
          name: 'Tebalkan Baris Total Akhir',
          instruction: 'Sorot baris total lalu beri gaya huruf tebal!',
          shortcut: 'Ctrl+B',
          keys: ['ctrl', 'b'],
          actionCode: 'bold_total',
          babyLogic: 'Ctrl + B (Bold) = Mengunci baris total agar langsung terbaca pimpinan!'
        },
        {
          id: 'e1_step6',
          name: 'Simpan Lembar Kerja Buku Kerja (Save)',
          instruction: 'Simpan spreadsheet ke komputer agar data aman tersimpan!',
          shortcut: 'Ctrl+S',
          keys: ['ctrl', 's'],
          actionCode: 'excel_save',
          babyLogic: 'Ctrl + S = Menyimpan berkas workbook excel, pantang kehilangan data!'
        }
      ]
    },
    {
      id: 'e-proj-2',
      title: 'Audit Penggajian Karyawan & Kerahasiaan Rekening',
      client: 'Ibu Sinta Dewi',
      clientRole: 'Manajer Keuangan & Payroll',
      clientAvatar: '👩‍💼',
      docFilename: 'Audit_Payroll_Staff_2026.xlsx',
      story: 'Kodi, kita sedang melakukan audit penggajian di depan dewan pengawas. Kita harus menyembunyikan kolom nomor rekening rahasia, menyembunyikan staf yang berstatus cuti, mencatat tanggal audit otomatis, dan mengisi formula insentif ke sel bawah!',
      initialGrid: [
        { colA: 'Andi Pratama', colB: '10001099238', colC: 7500000, colD: 500000, colE: 'Aktif' },
        { colA: 'Bambang Sudiro', colB: '10001099239', colC: 6800000, colD: 500000, colE: 'Aktif' },
        { colA: 'Citra Kirana', colB: '10001099240', colC: 7200000, colD: 0, colE: 'Cuti Panjang' },
        { colA: 'Dewi Lestari', colB: '10001099241', colC: 8100000, colD: 500000, colE: 'Aktif' }
      ],
      tasks: [
        {
          id: 'e2_step1',
          name: 'Sembunyikan Kolom Nomor Rekening Bank (Hide Column)',
          instruction: 'Sembunyikan Kolom B agar nomor rekening tidak terbaca orang luar!',
          shortcut: 'Ctrl+0',
          keys: ['ctrl', '0'],
          actionCode: 'hide_column',
          babyLogic: 'Ctrl + 0 = Jubah tembus pandang untuk melipat kolom rahasia seketika!'
        },
        {
          id: 'e2_step2',
          name: 'Sembunyikan Baris Karyawan Cuti (Hide Row)',
          instruction: 'Sembunyikan Baris Citra Kirana selama sesi audit berlangsung!',
          shortcut: 'Ctrl+9',
          keys: ['ctrl', '9'],
          actionCode: 'hide_row',
          babyLogic: 'Ctrl + 9 = Menutupi baris tertentu agar lembar kerja fokus pada data aktif!'
        },
        {
          id: 'e2_step3',
          name: 'Masukkan Tanggal Audit Hari Ini Otomatis',
          instruction: 'Sisipkan cap tanggal hari ini ke sel keterangan audit!',
          shortcut: 'Ctrl+;',
          keys: ['ctrl', ';'],
          actionCode: 'insert_date',
          babyLogic: 'Ctrl + ; = Stempel kalender kilat mencetak tanggal hari ini tanpa mengetik!'
        },
        {
          id: 'e2_step4',
          name: 'Isi Formula Insentif ke Sel Bawahnya (Fill Down)',
          instruction: 'Salin rumus insentif dari sel atas ke sel bawah secara presisi!',
          shortcut: 'Ctrl+D',
          keys: ['ctrl', 'd'],
          actionCode: 'fill_down',
          babyLogic: 'Ctrl + D (Down) = Menggandakan formula dari sel tepat di atasnya!'
        },
        {
          id: 'e2_step5',
          name: 'Cari Nama Karyawan Khusus (Find)',
          instruction: 'Buka jendela pencarian data pegawai!',
          shortcut: 'Ctrl+F',
          keys: ['ctrl', 'f'],
          actionCode: 'excel_find',
          babyLogic: 'Ctrl + F = Mesin radar pencari data di ribuan baris excel!'
        }
      ]
    },
    {
      id: 'e-proj-3',
      title: 'Inventaris Stok Gudang & Pembuatan Grafik Kilat',
      client: 'Bpk. Darmawan Kusuma',
      clientRole: 'Kepala Bagian Logistik Gudang',
      clientAvatar: '👷‍♂️',
      docFilename: 'Monitoring_Stok_Gudang_2026.xlsx',
      story: 'Kodi, direktur logistik ingin melihat grafik visual stok barang inventaris kita untuk rapat pagi ini, lalu kita harus memformat jumlah unit, memeriksa sel rumus, dan menyimpan lembar kerja dengan nama cadangan baru!',
      initialGrid: [
        { colA: 'Kabel Fiber Optik (Meter)', colB: 'Elektronik', colC: 12500, colD: 'Gudang Utama', colE: 'Aman' },
        { colA: 'Switch Hub 24-Port', colB: 'Jaringan', colC: 45, colD: 'Gudang B', colE: 'Perlu Restok' },
        { colA: 'Server Rack 42U', colB: 'Perangkat', colC: 12, colD: 'Gudang C', colE: 'Aman' },
        { colA: 'Router Gateway Dual-Band', colB: 'Jaringan', colC: 88, colD: 'Gudang A', colE: 'Aman' }
      ],
      tasks: [
        {
          id: 'e3_step1',
          name: 'Pilih Seluruh Data Lembar Kerja (Select All)',
          instruction: 'Sorot seluruh area tabel inventaris barang!',
          shortcut: 'Ctrl+A',
          keys: ['ctrl', 'a'],
          actionCode: 'excel_select_all',
          babyLogic: 'Ctrl + A = Menyeleksi semua sel aktif sekaligus dalam satu jentikan jari!'
        },
        {
          id: 'e3_step2',
          name: 'Buat Grafik Visual Kilat (Instant Chart Sheet)',
          instruction: 'Tekan F11 untuk menciptakan grafik kolom visual otomatis!',
          shortcut: 'F11',
          keys: ['f11'],
          actionCode: 'create_chart',
          babyLogic: 'F11 = Tongkat sihir pencipta grafik visual kilat dari data tabel!'
        },
        {
          id: 'e3_step3',
          name: 'Mode Edit Langsung Sel Aktif (Edit Cell)',
          instruction: 'Buka mode edit teks di dalam sel tanpa menghapus isi!',
          shortcut: 'F2',
          keys: ['f2'],
          actionCode: 'edit_cell',
          babyLogic: 'F2 = Masuk ke dalam isi sel untuk mengoreksi teks tanpa takut tertimpa!'
        },
        {
          id: 'e3_step4',
          name: 'Simpan Lembar Kerja Cadangan Baru (Save As)',
          instruction: 'Tekan F12 untuk membuka dialog simpan sebagai nama berkas cadangan!',
          shortcut: 'F12',
          keys: ['f12'],
          actionCode: 'excel_save_as',
          babyLogic: 'F12 = Menyimpan berkas salinan baru sebagai arsip cadangan aman!'
        }
      ]
    }
  ];

  // State Manajemen Game Pintasan (Self-contained & Aman dari Urutan Script)
  const appState = window.SHORTCUT_STATE = window.SHORTCUT_STATE || {
    shortcutCompleted: { excel: [], word: [] },
    currentShortcutIdx: { excel: 0, word: 0 },
    shortcutFilter: { excel: 'all', word: 'all' },
    shortcutSearch: { excel: '', word: '' },
    stars: 0,
    // Project Mode State
    activeStudioMode: { excel: 'project', word: 'project' },
    currentProjectIdx: { excel: 0, word: 0 },
    projectCompletedSteps: { excel: {}, word: {} },
    projectDocState: {
      word: {
        titleBold: false,
        titleAlign: 'left',
        bodyItalic: false,
        bodyJustify: false,
        recomUnderline: false,
        saved: false,
        findActive: false,
        linkAdded: false,
        copiedSummary: false,
        pastedSummary: false,
        printed: false,
        replaced: false,
        spellingChecked: false,
        selectAll: false,
        saveAsNew: false
      },
      excel: {
        currencyFormatted: false,
        percentFormatted: false,
        autoSumDone: false,
        tableCreated: false,
        totalBold: false,
        saved: false,
        colHidden: false,
        rowHidden: false,
        dateInserted: false,
        fillDown: false,
        findActive: false,
        selectAll: false,
        chartCreated: false,
        editCell: false,
        saveAsNew: false
      }
    }
  };
  window.virtualPressedKeys = new Set();

  // Helper Normalisasi Tombol
  function normalizeKey(k) {
    if (!k) return '';
    k = k.toLowerCase();
    if (k === 'control' || k === 'ctrl') return 'ctrl';
    if (k === 'alt') return 'alt';
    if (k === 'shift') return 'shift';
    if (k === 'enter' || k === 'return') return 'enter';
    if (k === 'arrowup' || k === 'up') return 'arrowup';
    if (k === 'arrowdown' || k === 'down') return 'arrowdown';
    if (k === 'arrowleft' || k === 'left') return 'arrowleft';
    if (k === 'arrowright' || k === 'right') return 'arrowright';
    if (k === 'space' || k === ' ') return 'space';
    return k;
  }

  // Submode Switcher (Simulasi Proyek Kantor vs Bank Pintasan Lengkap)
  window.switchStudioSubmode = function(mode, submode) {
    if (window.sfx) sfx.playClick();
    appState.activeStudioMode[mode] = submode;
    window.renderShortcutStudio(mode);
  };

  // Switch Proyek Aktif
  window.switchProject = function(mode, idx) {
    if (window.sfx) sfx.playClick();
    appState.currentProjectIdx[mode] = idx;
    window.renderShortcutStudio(mode);
  };

  // Reset Proyek Aktif
  window.resetCurrentProject = function(mode) {
    if (window.sfx) sfx.playClick();
    const projList = mode === 'word' ? window.WORD_PROJECTS : window.EXCEL_PROJECTS;
    const project = projList[appState.currentProjectIdx[mode]];
    if (project) {
      if (appState.projectCompletedSteps[mode]) {
        appState.projectCompletedSteps[mode][project.id] = [];
      }
      // Reset doc state
      if (mode === 'word') {
        appState.projectDocState.word = {
          titleBold: false, titleAlign: 'left', bodyItalic: false, bodyJustify: false,
          recomUnderline: false, saved: false, findActive: false, linkAdded: false,
          copiedSummary: false, pastedSummary: false, printed: false, replaced: false,
          spellingChecked: false, selectAll: false, saveAsNew: false
        };
      } else {
        appState.projectDocState.excel = {
          currencyFormatted: false, percentFormatted: false, autoSumDone: false, tableCreated: false,
          totalBold: false, saved: false, colHidden: false, rowHidden: false, dateInserted: false,
          fillDown: false, findActive: false, selectAll: false, chartCreated: false, editCell: false,
          saveAsNew: false
        };
      }
    }
    window.renderShortcutStudio(mode);
  };

  // Jalankan Aksi Perubahan Dokumen Kantor Berdasarkan actionCode
  window.applyProjectAction = function(mode, actionCode) {
    const docState = appState.projectDocState[mode];
    if (mode === 'word') {
      if (actionCode === 'title_bold') docState.titleBold = true;
      if (actionCode === 'title_center') docState.titleAlign = 'center';
      if (actionCode === 'body_italic') docState.bodyItalic = true;
      if (actionCode === 'body_justify') docState.bodyJustify = true;
      if (actionCode === 'recom_underline') docState.recomUnderline = true;
      if (actionCode === 'doc_save') {
        docState.saved = true;
        setTimeout(() => { docState.saved = false; const el = document.getElementById('word-save-toast'); if (el) el.style.display = 'none'; }, 3000);
      }
      if (actionCode === 'find_anggaran') docState.findActive = true;
      if (actionCode === 'insert_hyperlink') docState.linkAdded = true;
      if (actionCode === 'copy_summary') docState.copiedSummary = true;
      if (actionCode === 'paste_summary') docState.pastedSummary = true;
      if (actionCode === 'doc_print') docState.printed = true;
      if (actionCode === 'replace_dialog') docState.replaced = true;
      if (actionCode === 'spelling_check') docState.spellingChecked = true;
      if (actionCode === 'select_all') docState.selectAll = true;
      if (actionCode === 'save_as_new') docState.saveAsNew = true;
    } else {
      if (actionCode === 'format_currency') docState.currencyFormatted = true;
      if (actionCode === 'format_percent') docState.percentFormatted = true;
      if (actionCode === 'autosum_total') docState.autoSumDone = true;
      if (actionCode === 'create_table') docState.tableCreated = true;
      if (actionCode === 'bold_total') docState.totalBold = true;
      if (actionCode === 'excel_save') {
        docState.saved = true;
        setTimeout(() => { docState.saved = false; const el = document.getElementById('excel-save-toast'); if (el) el.style.display = 'none'; }, 3000);
      }
      if (actionCode === 'hide_column') docState.colHidden = true;
      if (actionCode === 'hide_row') docState.rowHidden = true;
      if (actionCode === 'insert_date') docState.dateInserted = true;
      if (actionCode === 'fill_down') docState.fillDown = true;
      if (actionCode === 'excel_find') docState.findActive = true;
      if (actionCode === 'excel_select_all') docState.selectAll = true;
      if (actionCode === 'create_chart') docState.chartCreated = true;
      if (actionCode === 'edit_cell') docState.editCell = true;
      if (actionCode === 'excel_save_as') docState.saveAsNew = true;
    }
  };

  // Jalankan Langkah Proyek dari Tombol Interaktif atau Listener Keyboard
  window.runProjectStepAction = function(mode, taskId) {
    const projList = mode === 'word' ? window.WORD_PROJECTS : window.EXCEL_PROJECTS;
    const project = projList[appState.currentProjectIdx[mode]];
    if (!project) return;

    if (!appState.projectCompletedSteps[mode]) appState.projectCompletedSteps[mode] = {};
    if (!appState.projectCompletedSteps[mode][project.id]) appState.projectCompletedSteps[mode][project.id] = [];

    const completed = appState.projectCompletedSteps[mode][project.id];
    const task = project.tasks.find(t => t.id === taskId);
    if (!task) return;

    if (!completed.includes(taskId)) {
      completed.push(taskId);
      appState.stars = (appState.stars || 0) + 1;
      if (window.saveProgress) saveProgress();
      const starCountEl = document.getElementById("header-stars");
      if (starCountEl) starCountEl.textContent = `${appState.stars} Bintang`;
    }

    // Apply visual transformation
    window.applyProjectAction(mode, task.actionCode);
    if (window.sfx) sfx.playSuccess();

    // Re-render
    window.renderShortcutStudio(mode);
  };

  // Close Interactive Modals
  window.closeOfficeModal = function(mode, modalType) {
    if (window.sfx) sfx.playClick();
    if (mode === 'word') {
      if (modalType === 'print') appState.projectDocState.word.printed = false;
      if (modalType === 'saveAs') appState.projectDocState.word.saveAsNew = false;
    } else {
      if (modalType === 'chart') appState.projectDocState.excel.chartCreated = false;
      if (modalType === 'saveAs') appState.projectDocState.excel.saveAsNew = false;
    }
    window.renderShortcutStudio(mode);
  };

  // Tangani Tombol Fisik Keyboard pada Mode Simulasi Proyek
  function handleProjectPhysicalKey(mode, e) {
    const projList = mode === 'word' ? window.WORD_PROJECTS : window.EXCEL_PROJECTS;
    const project = projList[appState.currentProjectIdx[mode]];
    if (!project) return;

    if (!appState.projectCompletedSteps[mode]) appState.projectCompletedSteps[mode] = {};
    if (!appState.projectCompletedSteps[mode][project.id]) appState.projectCompletedSteps[mode][project.id] = [];
    const completed = appState.projectCompletedSteps[mode][project.id];

    // Temukan tugas berikutnya yang belum selesai
    const pendingTasks = project.tasks.filter(t => !completed.includes(t.id));
    if (pendingTasks.length === 0) return;

    // Normalisasi input
    const isCtrl = e.ctrlKey || e.metaKey;
    const isShift = e.shiftKey;
    const isAlt = e.altKey;
    const keyLower = e.key.toLowerCase();

    // Cek kecocokan di pending tasks
    for (const task of pendingTasks) {
      let matched = false;

      // Format Currency (Ctrl+Shift+$ atau Ctrl+Shift+4)
      if (task.actionCode === 'format_currency') {
        if (isCtrl && isShift && (e.key === '$' || e.key === '4' || e.code === 'Digit4')) matched = true;
      }
      // Format Percent (Ctrl+Shift+% atau Ctrl+Shift+5)
      else if (task.actionCode === 'format_percent') {
        if (isCtrl && isShift && (e.key === '%' || e.key === '5' || e.code === 'Digit5')) matched = true;
      }
      // AutoSum (Alt+=)
      else if (task.actionCode === 'autosum_total') {
        if (isAlt && (e.key === '=' || e.key === '+' || e.code === 'Equal')) matched = true;
      }
      // Hide Col (Ctrl+0)
      else if (task.actionCode === 'hide_column') {
        if (isCtrl && (e.key === '0' || e.code === 'Digit0')) matched = true;
      }
      // Hide Row (Ctrl+9)
      else if (task.actionCode === 'hide_row') {
        if (isCtrl && (e.key === '9' || e.code === 'Digit9')) matched = true;
      }
      // Insert Date (Ctrl+;)
      else if (task.actionCode === 'insert_date') {
        if (isCtrl && (e.key === ';' || e.code === 'Semicolon')) matched = true;
      }
      // Function keys: F11, F12, F7, F2
      else if (task.actionCode === 'create_chart' && e.key === 'F11') matched = true;
      else if ((task.actionCode === 'save_as_new' || task.actionCode === 'excel_save_as') && e.key === 'F12') matched = true;
      else if (task.actionCode === 'spelling_check' && e.key === 'F7') matched = true;
      else if (task.actionCode === 'edit_cell' && e.key === 'F2') matched = true;
      // Standard Ctrl+Key shortcuts
      else if (isCtrl && !isShift && !isAlt) {
        if (task.keys.includes(keyLower) || task.shortcut.toLowerCase() === `ctrl+${keyLower}`) {
          matched = true;
        }
      }

      if (matched) {
        e.preventDefault();
        window.runProjectStepAction(mode, task.id);
        return;
      }
    }
  }

  // =========================================================================
  // RENDERER MOCKUP MS WORD NYATA
  // =========================================================================
  function renderWordOfficeMockup(project, docState, completed) {
    const isSaved = docState.saved;
    const isPrinted = docState.printed;
    const isReplaced = docState.replaced;
    const isSpelling = docState.spellingChecked;
    const isSaveAs = docState.saveAsNew;

    return `
      <div class="office-window-mockup word-window">
        <!-- TITLE BAR WORD -->
        <div class="office-title-bar word-title-bar">
          <div class="office-title-left">
            <span class="office-app-badge word-badge">W</span>
            <span class="office-autosave-badge ${isSaved ? 'saved' : ''}">
              ${isSaved ? '✅ Tersimpan' : '💾 AutoSave: Aktif'}
            </span>
            <span class="office-filename">${project.docFilename} — Word</span>
          </div>
          <div class="office-window-controls">
            <span>🗕</span>
            <span>🗖</span>
            <span>✕</span>
          </div>
        </div>

        <!-- RIBBON TABS -->
        <div class="office-ribbon-tabs word-ribbon-tabs">
          <span class="ribbon-tab-item active">Beranda (Home)</span>
          <span class="ribbon-tab-item">Sisipkan (Insert)</span>
          <span class="ribbon-tab-item">Tata Letak (Layout)</span>
          <span class="ribbon-tab-item">Referensi</span>
          <span class="ribbon-tab-item">Tinjau (Review)</span>
          <span class="ribbon-tab-item">Tampilan (View)</span>
        </div>

        <!-- RIBBON TOOLBAR -->
        <div class="office-ribbon-toolbar">
          <div class="ribbon-group">
            <div class="ribbon-tools-row">
              <span class="office-tool-select">Calibri (Body)</span>
              <span class="office-tool-select" style="width: 44px;">12 pt</span>
            </div>
            <div class="ribbon-tools-row">
              <button class="office-tool-btn ${docState.titleBold ? 'active' : ''}" title="Tebal (Ctrl+B)"><b>B</b></button>
              <button class="office-tool-btn ${docState.bodyItalic ? 'active' : ''}" title="Miring (Ctrl+I)"><i>I</i></button>
              <button class="office-tool-btn ${docState.recomUnderline ? 'active' : ''}" title="Garis Bawah (Ctrl+U)"><u>U</u></button>
              <span class="tool-sep">|</span>
              <button class="office-tool-btn ${docState.titleAlign === 'left' ? 'active' : ''}" title="Rata Kiri (Ctrl+L)">≡ Left</button>
              <button class="office-tool-btn ${docState.titleAlign === 'center' ? 'active' : ''}" title="Rata Tengah (Ctrl+E)">≡ Center</button>
              <button class="office-tool-btn ${docState.bodyJustify ? 'active' : ''}" title="Rata Kanan-Kiri (Ctrl+J)">≣ Justify</button>
            </div>
            <div class="ribbon-group-label">Font & Paragraf</div>
          </div>

          <div class="ribbon-group">
            <div class="ribbon-tools-row">
              <button class="office-tool-btn ${docState.findActive ? 'active' : ''}" title="Cari (Ctrl+F)">🔍 Cari</button>
              <button class="office-tool-btn ${docState.replaced ? 'active' : ''}" title="Ganti (Ctrl+H)">🔄 Ganti</button>
              <button class="office-tool-btn ${docState.selectAll ? 'active' : ''}" title="Pilih Semua (Ctrl+A)">📑 Pilih</button>
            </div>
            <div class="ribbon-group-label">Pengeditan</div>
          </div>
        </div>

        <!-- RULER WORD -->
        <div class="office-ruler-bar">
          <div class="ruler-marker-left">▼</div>
          <div class="ruler-ticks">| · · · 1 · · · 2 · · · 3 · · · 4 · · · 5 · · · 6 · · · 7 · · · 8 · · · 9 · · · 10 · · · 11 · · · 12 · · · 13 · · · 14 · · · 15 · · · 16 · · · 17</div>
          <div class="ruler-marker-right">▲</div>
        </div>

        <!-- CANVAS DOKUMEN A4 WORD (TRANSFORMASI VISUAL NYATA) -->
        <div class="office-canvas-viewport">
          <div class="word-paper-sheet ${docState.selectAll ? 'doc-selected' : ''}">
            <!-- Save Toast -->
            <div id="word-save-toast" class="office-save-toast" style="display: ${isSaved ? 'flex' : 'none'};">
              <span>💾 Berkas berhasil disimpan ke memori! (Ctrl+S Berhasil)</span>
            </div>

            <!-- Find Overlay Banner -->
            ${docState.findActive ? `
              <div class="word-search-panel">
                <span>🔍 <b>Pencarian Berkas:</b> Menemukan 1 kata kunci "Anggaran"</span>
                <span class="badge-match">1 Hasil</span>
              </div>
            ` : ''}

            <!-- Replace Overlay Banner -->
            ${isReplaced ? `
              <div class="word-replace-panel">
                <span>🔄 <b>Operasi Ganti Selesai:</b> Mengganti "Pihak Pertama" ➡️ <b>PT Inovasi Maju</b></span>
              </div>
            ` : ''}

            <!-- Spelling Overlay Banner -->
            ${isSpelling ? `
              <div class="word-spelling-panel">
                <span>✅ <b>Pemeriksaan Ejaan F7:</b> Seluruh tata bahasa dan tanda baca telah diverifikasi sempurna!</span>
              </div>
            ` : ''}

            <!-- JUDUL DOKUMEN REALTIME -->
            <h2 class="word-doc-title ${docState.titleBold ? 'is-bold' : ''}" style="text-align: ${docState.titleAlign};">
              ${project.initialDoc.title}
            </h2>

            <!-- SUBTITLE -->
            <div class="word-doc-subtitle" style="text-align: ${docState.titleAlign};">
              ${project.initialDoc.subTitle}
            </div>

            <hr class="word-doc-divider">

            <!-- PARAGRAF 1 REALTIME -->
            <p class="word-doc-par" style="text-align: ${docState.bodyJustify ? 'justify' : 'left'};">
              ${project.initialDoc.par1
                .replace('Artificial Intelligence', `<span class="word-term-italic ${docState.bodyItalic ? 'is-italic' : ''}">Artificial Intelligence</span>`)
                .replace('Anggaran Belanja Pokok', `<mark class="word-find-mark ${docState.findActive ? 'is-highlighted' : ''}">Anggaran Belanja Pokok</mark>`)
                .replace('Pihak Pertama', isReplaced ? '<b style="color: #2563eb;">PT Inovasi Maju Nusantara</b>' : 'Pihak Pertama')
              }
            </p>

            <!-- TAUTAN HYPERLINK (PROJEK 2) -->
            ${docState.linkAdded ? `
              <div class="word-hyperlink-box">
                🔗 <b>Tautan Resmi:</b> <a href="javascript:void(0)" class="word-blue-link">https://portal-pengadaan.go.id/spesifikasi-server-2026</a>
              </div>
            ` : ''}

            <!-- PARAGRAF 2 / REKOMENDASI REALTIME -->
            <p class="word-doc-par" style="text-align: ${docState.bodyJustify ? 'justify' : 'left'};">
              ${project.initialDoc.par2
                .replace('REKOMENDASI DIREKSI:', `<span class="word-recom-line ${docState.recomUnderline ? 'is-underlined' : ''}">REKOMENDASI DIREKSI:</span>`)
                .replace('Pihak Pertama', isReplaced ? '<b style="color: #2563eb;">PT Inovasi Maju Nusantara</b>' : 'Pihak Pertama')
              }
            </p>

            <!-- PARAGRAF PASTE DARI RINGKASAN (PROJEK 2) -->
            ${docState.pastedSummary ? `
              <div class="word-pasted-summary-box">
                <b>📋 Ringkasan Penutup (Hasil Tempel Ctrl+V):</b>
                <div>Dokumen arsitektur komputasi awan berkapasitas tinggi ini siap disahkan oleh Pejabat Pembuat Komitmen (PPK).</div>
              </div>
            ` : ''}

            <div class="word-doc-signature-area">
              <div class="sig-block">
                Mengetahui,<br>
                <b>${project.client}</b><br>
                <span>${project.clientRole}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- PRINT MODAL OVERLAY -->
        ${isPrinted ? `
          <div class="office-modal-overlay">
            <div class="office-modal-box">
              <div class="office-modal-header word-theme">
                <span>🖨️ Kotak Dialog Cetak (Print Preview - Ctrl+P)</span>
                <button onclick="closeOfficeModal('word', 'print')">✕</button>
              </div>
              <div class="office-modal-body">
                <p><b>Printer Tujuan:</b> HP LaserJet Enterprise M608 (Siap Cetak)</p>
                <p><b>Salinan:</b> 1 Rangkap | <b>Orientasi:</b> Portrait | <b>Ukuran:</b> A4</p>
                <div class="print-mini-preview">
                  📄 Dokumen "${project.docFilename}" siap dikirim ke mesin cetak!
                </div>
              </div>
              <div class="office-modal-footer">
                <button class="btn-primary" style="background: #2563eb;" onclick="closeOfficeModal('word', 'print')">Tutup & Lanjutkan</button>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- SAVE AS MODAL OVERLAY -->
        ${isSaveAs ? `
          <div class="office-modal-overlay">
            <div class="office-modal-box">
              <div class="office-modal-header word-theme">
                <span>💾 Simpan Sebagai Cadangan Baru (Save As - F12)</span>
                <button onclick="closeOfficeModal('word', 'saveAs')">✕</button>
              </div>
              <div class="office-modal-body">
                <p><b>Nama Berkas Baru:</b> [ARSIP-FINAL]_${project.docFilename}</p>
                <p><b>Format:</b> Word Document (*.docx) / PDF (*.pdf)</p>
                <div class="alert-box success" style="margin-top: 8px;">
                  ✅ Salinan cadangan resmi telah berhasil disimpan ke folder arsip!
                </div>
              </div>
              <div class="office-modal-footer">
                <button class="btn-primary" style="background: #2563eb;" onclick="closeOfficeModal('word', 'saveAs')">Tutup</button>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- WORD STATUS BAR -->
        <div class="office-status-bar word-status-bar">
          <div class="status-left">
            <span>Halaman 1 dari 1</span>
            <span>235 Kata</span>
            <span>Bahasa Indonesia</span>
          </div>
          <div class="status-right">
            <span>Tata Letak Cetak</span>
            <span>100% ➖ 🎚️ ➕</span>
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // RENDERER MOCKUP MS EXCEL NYATA
  // =========================================================================
  function renderExcelOfficeMockup(project, docState, completed) {
    const isSaved = docState.saved;
    const isChart = docState.chartCreated;
    const isSaveAs = docState.saveAsNew;
    const isCurrency = docState.currencyFormatted;
    const isPercent = docState.percentFormatted;
    const isTable = docState.tableCreated;
    const isTotalSum = docState.autoSumDone;
    const isTotalBold = docState.totalBold;
    const isColHidden = docState.colHidden;
    const isRowHidden = docState.rowHidden;
    const isDate = docState.dateInserted;
    const isFillDown = docState.fillDown;

    // Helper format mata uang
    function formatMoney(num) {
      if (!isCurrency) return num.toLocaleString('id-ID');
      return 'Rp ' + num.toLocaleString('id-ID');
    }

    // Helper format margin
    function formatMargin(num) {
      if (!isPercent) return num;
      return (Math.round(num * 100)) + '%';
    }

    // Hitung total omset
    const totalC = project.initialGrid.reduce((acc, row) => acc + (typeof row.colC === 'number' ? row.colC : 0), 0);

    return `
      <div class="office-window-mockup excel-window">
        <!-- TITLE BAR EXCEL -->
        <div class="office-title-bar excel-title-bar">
          <div class="office-title-left">
            <span class="office-app-badge excel-badge">X</span>
            <span class="office-autosave-badge ${isSaved ? 'saved' : ''}">
              ${isSaved ? '✅ Tersimpan' : '💾 AutoSave: Aktif'}
            </span>
            <span class="office-filename">${project.docFilename} — Excel</span>
          </div>
          <div class="office-window-controls">
            <span>🗕</span>
            <span>🗖</span>
            <span>✕</span>
          </div>
        </div>

        <!-- RIBBON TABS -->
        <div class="office-ribbon-tabs excel-ribbon-tabs">
          <span class="ribbon-tab-item active">Beranda (Home)</span>
          <span class="ribbon-tab-item">Sisipkan (Insert)</span>
          <span class="ribbon-tab-item">Tata Letak Halaman</span>
          <span class="ribbon-tab-item">Rumus (Formulas)</span>
          <span class="ribbon-tab-item">Data</span>
          <span class="ribbon-tab-item">Tinjau</span>
          <span class="ribbon-tab-item">Tampilan</span>
        </div>

        <!-- RIBBON TOOLBAR -->
        <div class="office-ribbon-toolbar">
          <div class="ribbon-group">
            <div class="ribbon-tools-row">
              <span class="office-tool-select">Aptos Narrow</span>
              <span class="office-tool-select" style="width: 44px;">11 pt</span>
              <button class="office-tool-btn ${isTotalBold ? 'active' : ''}"><b>B</b></button>
            </div>
            <div class="ribbon-group-label">Huruf</div>
          </div>

          <div class="ribbon-group">
            <div class="ribbon-tools-row">
              <button class="office-tool-btn ${isCurrency ? 'active' : ''}" title="Format Rupiah (Ctrl+Shift+$)"><b>$</b> Rupiah</button>
              <button class="office-tool-btn ${isPercent ? 'active' : ''}" title="Format Persen (Ctrl+Shift+%)"><b>%</b> Persen</button>
              <button class="office-tool-btn" title="Koma Ribuan"><b>,</b></button>
            </div>
            <div class="ribbon-group-label">Angka</div>
          </div>

          <div class="ribbon-group">
            <div class="ribbon-tools-row">
              <button class="office-tool-btn ${isTable ? 'active' : ''}" title="Format Sebagai Tabel (Ctrl+T)">📊 Tabel</button>
              <button class="office-tool-btn ${isTotalSum ? 'active' : ''}" title="AutoSum (Alt+=)"><b>Σ</b> AutoSum</button>
              <button class="office-tool-btn ${isChart ? 'active' : ''}" title="Grafik Kilat (F11)">📈 Grafik</button>
            </div>
            <div class="ribbon-group-label">Gaya & Analisis</div>
          </div>
        </div>

        <!-- FORMULA BAR EXCEL -->
        <div class="excel-formula-bar">
          <div class="formula-name-box">${isTotalSum ? 'C6' : 'C2'}</div>
          <div class="formula-fx-icon"><b>✕</b> <b>✓</b> <i>fx</i></div>
          <div class="formula-input-line">
            ${isTotalSum ? '=SUM(C2:C5)' : (isCurrency ? '15500000' : 'Data Aktif')}
          </div>
        </div>

        <!-- SPREADSHEET GRID (TRANSFORMASI VISUAL NYATA) -->
        <div class="office-canvas-viewport">
          <div class="excel-spreadsheet-sheet ${docState.selectAll ? 'grid-selected' : ''}">
            <!-- Save Toast -->
            <div id="excel-save-toast" class="office-save-toast" style="display: ${isSaved ? 'flex' : 'none'};">
              <span>💾 Lembar kerja tersimpan otomatis! (Ctrl+S Berhasil)</span>
            </div>

            <!-- TANGGAL AUDIT OTOMATIS (PROYEK 2) -->
            ${isDate ? `
              <div class="excel-audit-date-badge">
                📅 <b>Tanggal Audit Terverifikasi (Ctrl+;):</b> 12 Oktober 2026
              </div>
            ` : ''}

            <!-- GRID TABLE -->
            <table class="excel-table-grid ${isTable ? 'styled-excel-table' : ''}">
              <thead>
                <tr class="excel-header-row">
                  <th class="excel-corner-cell">◢</th>
                  <th class="excel-col-head">A</th>
                  ${isColHidden ? `
                    <th class="excel-col-head hidden-col-indicator" title="Kolom B Tersembunyi (Ctrl+0)">||</th>
                  ` : `
                    <th class="excel-col-head">B</th>
                  `}
                  <th class="excel-col-head">C</th>
                  <th class="excel-col-head">D</th>
                  <th class="excel-col-head">E</th>
                </tr>
              </thead>
              <tbody>
                <!-- ROW 1: HEADER NAMA KOLOM -->
                <tr class="excel-data-row ${isTable ? 'table-header-row' : ''}">
                  <td class="excel-row-num">1</td>
                  <td class="excel-cell head-cell">Nama / Unit ${isTable ? '▼' : ''}</td>
                  ${isColHidden ? '' : `<td class="excel-cell head-cell">Kota / Akun ${isTable ? '▼' : ''}</td>`}
                  <td class="excel-cell head-cell">Omset / Gaji ${isTable ? '▼' : ''}</td>
                  <td class="excel-cell head-cell">Margin / Bonus ${isTable ? '▼' : ''}</td>
                  <td class="excel-cell head-cell">Status ${isTable ? '▼' : ''}</td>
                </tr>

                <!-- DATA ROWS 2 to 5 -->
                ${project.initialGrid.map((row, idx) => {
                  const rowNum = idx + 2;
                  const isThisRowHidden = (isRowHidden && idx === 2);
                  if (isThisRowHidden) {
                    return `
                      <tr class="excel-data-row hidden-row-indicator" title="Baris 3 Tersembunyi (Ctrl+9)">
                        <td class="excel-row-num hidden-row-badge">=</td>
                        <td colspan="${isColHidden ? 4 : 5}" style="background: rgba(239,68,68,0.15); color: #ef4444; font-size: 0.75rem; text-align: center; padding: 2px;">
                          🔒 [Baris Karyawan Cuti Disembunyikan Sesuai Permintaan Bos]
                        </td>
                      </tr>
                    `;
                  }

                  const isBonusFilled = isFillDown && idx > 0;
                  const displayBonus = isBonusFilled ? 'Rp 500.000 (Fill Down)' : (typeof row.colD === 'number' ? formatMargin(row.colD) : row.colD);

                  return `
                    <tr class="excel-data-row ${idx % 2 === 1 && isTable ? 'zebra-row' : ''}">
                      <td class="excel-row-num">${rowNum}</td>
                      <td class="excel-cell text-left">${row.colA}</td>
                      ${isColHidden ? '' : `<td class="excel-cell">${row.colB}</td>`}
                      <td class="excel-cell text-right ${isCurrency ? 'cell-currency' : ''}">
                        ${typeof row.colC === 'number' ? formatMoney(row.colC) : row.colC}
                      </td>
                      <td class="excel-cell text-right">
                        ${displayBonus}
                      </td>
                      <td class="excel-cell text-center">
                        <span class="badge-status ${row.colE === 'Lunas' || row.colE === 'Aktif' || row.colE === 'Aman' ? 'ok' : 'pending'}">${row.colE}</span>
                      </td>
                    </tr>
                  `;
                }).join('')}

                <!-- ROW 6: TOTAL / AUTOSUM -->
                ${isTotalSum ? `
                  <tr class="excel-data-row total-row ${isTotalBold ? 'is-bold' : ''}">
                    <td class="excel-row-num">6</td>
                    <td class="excel-cell text-left" style="font-weight: 800;">TOTAL AKHIR</td>
                    ${isColHidden ? '' : `<td class="excel-cell"></td>`}
                    <td class="excel-cell text-right active-sum-cell" style="font-weight: 800; border-top: 2px solid #107c41; border-bottom: 3px double #107c41;">
                      ${formatMoney(totalC)}
                    </td>
                    <td class="excel-cell text-right" style="font-weight: 700;">—</td>
                    <td class="excel-cell text-center" style="font-size: 0.75rem; color: #107c41; font-weight: 700;">AutoSum Σ</td>
                  </tr>
                ` : ''}
              </tbody>
            </table>
          </div>
        </div>

        <!-- INSTANT CHART MODAL (F11) -->
        ${isChart ? `
          <div class="office-modal-overlay">
            <div class="office-modal-box" style="max-width: 650px;">
              <div class="office-modal-header excel-theme">
                <span>📈 Lembar Grafik Visual Kilat (F11 Instant Chart Sheet)</span>
                <button onclick="closeOfficeModal('excel', 'chart')">✕</button>
              </div>
              <div class="office-modal-body">
                <h4 style="margin: 0 0 12px 0; text-align: center; color: var(--text-main);">
                  ANALISIS VISUAL STOK GUDANG & OMSET CABANG
                </h4>
                <div class="excel-chart-visual">
                  <div class="chart-bar-group">
                    <div class="chart-bar" style="height: 80%; background: #107c41;"><span class="bar-val">15.5M</span></div>
                    <span class="bar-lbl">Cabang A</span>
                  </div>
                  <div class="chart-bar-group">
                    <div class="chart-bar" style="height: 62%; background: #2563eb;"><span class="bar-val">12.2M</span></div>
                    <span class="bar-lbl">Cabang B</span>
                  </div>
                  <div class="chart-bar-group">
                    <div class="chart-bar" style="height: 96%; background: #f59e0b;"><span class="bar-val">18.7M</span></div>
                    <span class="bar-lbl">Cabang C</span>
                  </div>
                  <div class="chart-bar-group">
                    <div class="chart-bar" style="height: 48%; background: #8b5cf6;"><span class="bar-val">9.8M</span></div>
                    <span class="bar-lbl">Cabang D</span>
                  </div>
                </div>
                <div class="alert-box success" style="margin-top: 14px;">
                  ✨ Grafik kolom tercipta instan dari kisi-kisi data hanya dengan menekan F11!
                </div>
              </div>
              <div class="office-modal-footer">
                <button class="btn-primary" style="background: #107c41;" onclick="closeOfficeModal('excel', 'chart')">Tutup & Lanjutkan</button>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- SAVE AS MODAL OVERLAY -->
        ${isSaveAs ? `
          <div class="office-modal-overlay">
            <div class="office-modal-box">
              <div class="office-modal-header excel-theme">
                <span>💾 Simpan Lembar Kerja Baru (Save As - F12)</span>
                <button onclick="closeOfficeModal('excel', 'saveAs')">✕</button>
              </div>
              <div class="office-modal-body">
                <p><b>Nama Berkas Baru:</b> [BACKUP-FINAL]_${project.docFilename}</p>
                <p><b>Tipe:</b> Excel Workbook (*.xlsx)</p>
                <div class="alert-box success" style="margin-top: 8px;">
                  ✅ Berkas cadangan berhasil disimpan aman ke sistem komputer!
                </div>
              </div>
              <div class="office-modal-footer">
                <button class="btn-primary" style="background: #107c41;" onclick="closeOfficeModal('excel', 'saveAs')">Tutup</button>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- EXCEL SHEET TABS & STATUS BAR -->
        <div class="office-status-bar excel-status-bar">
          <div class="status-left">
            <span class="excel-sheet-pill active">Sheet1</span>
            <span class="excel-sheet-pill">+</span>
            <span style="margin-left: 14px; font-weight: 700;">SIAP</span>
          </div>
          <div class="status-right">
            <span>Rata-rata: Rp 14.075.000</span>
            <span>Jumlah Data: 4</span>
            <span>Total: ${formatMoney(totalC)}</span>
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // RENDERER DAFTAR PERMINTAAN KLIEN / BOS (CHECKLIST TANTANGAN)
  // =========================================================================
  function renderProjectTasksChecklist(mode, project, completed) {
    const isWord = (mode === 'word');
    const themeColor = isWord ? '#2563eb' : '#107c41';
    const totalTasks = project.tasks.length;
    const completedCount = completed.length;
    const isAllDone = (completedCount >= totalTasks);
    const progressPct = Math.round((completedCount / totalTasks) * 100);

    return `
      <!-- KARTU BRIEF KLIEN / BOS -->
      <div class="boss-brief-card" style="border-left: 6px solid ${themeColor};">
        <div class="boss-profile-header">
          <div class="boss-avatar-box">${project.clientAvatar}</div>
          <div style="flex: 1;">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
              <div>
                <h4 style="margin: 0; font-size: 1.15rem; color: var(--text-main); font-weight: 800;">
                  ${project.client}
                </h4>
                <div style="font-size: 0.82rem; color: var(--text-muted); font-weight: 600;">
                  ${project.clientRole} — Klien Proyek
                </div>
              </div>
              <div class="boss-progress-pill" style="border-color: ${themeColor}; color: ${themeColor};">
                🏆 ${completedCount} / ${totalTasks} Permintaan Selesai (${progressPct}%)
              </div>
            </div>
            <!-- Progress Bar -->
            <div class="boss-progress-bar-wrap">
              <div class="boss-progress-bar-fill" style="width: ${progressPct}%; background: ${themeColor};"></div>
            </div>
          </div>
        </div>

        <!-- PESAN CERITA DARI BOS -->
        <div class="boss-speech-bubble">
          <span class="speech-quote-icon">“</span>
          <p style="margin: 0; font-size: 0.92rem; color: var(--text-main); line-height: 1.5; font-style: italic;">
            ${project.story}
          </p>
        </div>

        ${isAllDone ? `
          <!-- BANNER CELEBRATION SEMPURNA -->
          <div class="boss-celebration-banner">
            <div style="font-size: 1.8rem; margin-bottom: 6px;">🎉 ⭐ 💼 ⭐ 🎉</div>
            <h3 style="margin: 0 0 6px 0; color: #10b981; font-size: 1.3rem;">
              LUAR BIASA! SELURUH PERMINTAAN KLIEN SELESAI 100%!
            </h3>
            <p style="margin: 0 0 14px 0; font-size: 0.92rem; color: var(--text-main);">
              Bos sangat puas dengan kecepatan dan kerapian hasil kerjamu! Dokumen telah bertransformasi sempurna tanpa sentuh mouse berlebihan.
            </p>
            <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
              <button class="btn-secondary" onclick="resetCurrentProject('${mode}')">
                🔄 Ulangi Latihan Proyek Ini
              </button>
              <button class="btn-primary" style="background: ${themeColor};" onclick="switchProject('${mode}', ${(appState.currentProjectIdx[mode] + 1) % (isWord ? window.WORD_PROJECTS.length : window.EXCEL_PROJECTS.length)})">
                Lanjut Proyek Kantor Berikutnya ➡️
              </button>
            </div>
          </div>
        ` : ''}

        <!-- DAFTAR LANGKAH PERMINTAAN -->
        <div class="boss-tasks-list">
          <div style="font-size: 0.85rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; margin-bottom: 10px; letter-spacing: 0.5px;">
            📋 Instruksi Permintaan Dokumen (Tekan di Keyboard atau Klik Tombol Pintasan):
          </div>

          ${project.tasks.map((task, idx) => {
            const isDone = completed.includes(task.id);
            const isNext = !isDone && (idx === 0 || completed.includes(project.tasks[idx - 1].id));
            const keyParts = task.shortcut.split('+').map(k => k.trim());

            return `
              <div class="boss-task-item ${isDone ? 'is-completed' : ''} ${isNext ? 'is-active-target' : ''}">
                <div class="task-col-left">
                  <div class="task-status-icon">
                    ${isDone ? '✅' : (isNext ? '👉' : '⏳')}
                  </div>
                  <div style="flex: 1;">
                    <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                      <span class="task-title-text">${task.name}</span>
                      ${isNext ? '<span class="badge-target-now">KERJAKAN SEKARANG</span>' : ''}
                    </div>
                    <div class="task-desc-text">
                      ${task.instruction}
                    </div>
                    <div class="task-baby-logic">
                      🍼 <b>Nalar Bayi:</b> ${task.babyLogic}
                    </div>
                  </div>
                </div>

                <div class="task-col-right">
                  <div class="task-shortcut-caps">
                    ${keyParts.map(kp => `<span class="project-keycap">${kp}</span>`).join(' <span class="cap-plus">+</span> ')}
                  </div>
                  <div>
                    ${isDone ? `
                      <span class="badge-done-stamp">✓ Selesai Diterapkan</span>
                    ` : `
                      <button class="btn-primary btn-run-shortcut" style="background: ${themeColor};" onclick="runProjectStepAction('${mode}', '${task.id}')">
                        ⚡ Jalankan Pintasan (${task.shortcut})
                      </button>
                    `}
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  // =========================================================================
  // RENDERER UTAMA SIMULATOR PROYEK KANTOR
  // =========================================================================
  function renderProjectStudioHtml(mode) {
    const isWord = (mode === 'word');
    const projList = isWord ? window.WORD_PROJECTS : window.EXCEL_PROJECTS;
    const currentIdx = appState.currentProjectIdx[mode] || 0;
    const project = projList[currentIdx] || projList[0];

    if (!appState.projectCompletedSteps[mode]) appState.projectCompletedSteps[mode] = {};
    if (!appState.projectCompletedSteps[mode][project.id]) appState.projectCompletedSteps[mode][project.id] = [];
    const completed = appState.projectCompletedSteps[mode][project.id];
    const docState = appState.projectDocState[mode];

    return `
      <div class="project-studio-wrapper">
        <!-- PROJECT SELECTOR TABS -->
        <div class="project-selector-tabs">
          <span style="font-size: 0.85rem; font-weight: 800; color: var(--text-muted); align-self: center; margin-right: 6px;">
            📁 Pilih Proyek Kantor:
          </span>
          ${projList.map((p, idx) => {
            const pCompleted = (appState.projectCompletedSteps[mode][p.id] || []).length;
            const pTotal = p.tasks.length;
            const isPActive = (idx === currentIdx);
            return `
              <button class="project-tab-btn ${isPActive ? 'active' : ''}" onclick="switchProject('${mode}', ${idx})">
                <span>${p.clientAvatar} Proyek ${idx + 1}: ${p.title.substring(0, 24)}...</span>
                <span class="proj-badge-count ${pCompleted >= pTotal ? 'all-done' : ''}">
                  ${pCompleted}/${pTotal} Selesai ${pCompleted >= pTotal ? '⭐' : ''}
                </span>
              </button>
            `;
          }).join('')}
        </div>

        <!-- MOCKUP JENDELA OFFICE NYATA (DOKUMEN DITAMPILKAN & BERUBAH) -->
        <div style="margin-bottom: 24px;">
          ${isWord ? renderWordOfficeMockup(project, docState, completed) : renderExcelOfficeMockup(project, docState, completed)}
        </div>

        <!-- BRIEF KLIEN & CHECKLIST PERMINTAAN BOS -->
        <div>
          ${renderProjectTasksChecklist(mode, project, completed)}
        </div>
      </div>
    `;
  }

  // =========================================================================
  // FILTER & KATEGORI UNTUK MODE BANK PINTASAN LENGKAP
  // =========================================================================
  window.getShortcutCategories = function(mode) {
    const list = mode === 'excel' ? window.EXCEL_SHORTCUTS : window.WORD_SHORTCUTS;
    const cats = new Set();
    list.forEach(item => cats.add(item.category));
    return ['all', ...Array.from(cats)];
  };

  window.getFilteredShortcuts = function(mode) {
    const list = mode === 'excel' ? window.EXCEL_SHORTCUTS : window.WORD_SHORTCUTS;
    const cat = appState.shortcutFilter[mode] || 'all';
    const q = (appState.shortcutSearch[mode] || '').toLowerCase().trim();

    return list.map((item, idx) => ({ item, originalIndex: idx }))
      .filter(x => {
        const matchCat = (cat === 'all') || (x.item.category === cat);
        const matchSearch = !q ||
          x.item.key.toLowerCase().includes(q) ||
          x.item.action.toLowerCase().includes(q) ||
          x.item.scenario.toLowerCase().includes(q) ||
          x.item.nalarBayiKodi.toLowerCase().includes(q);
        return matchCat && matchSearch;
      });
  };

  // =========================================================================
  // RENDER STUDIO FUNGSI UTAMA (ROUTER SUBMODE: PROYEK VS BANK PINTASAN)
  // =========================================================================
  window.renderShortcutStudio = function(mode) {
    const containerId = mode === 'excel' ? 'shortcut-excel-content-area' : 'shortcut-word-content-area';
    const container = document.getElementById(containerId);
    if (!container) return;

    const list = mode === 'excel' ? window.EXCEL_SHORTCUTS : window.WORD_SHORTCUTS;
    const isWord = (mode === 'word');
    const themeColor = isWord ? '#2563eb' : '#107c41';
    const themeLight = isWord ? '#3b82f6' : '#10b981';
    const heroTile = isWord ? 'tile_3d_02.png' : 'tile_3d_08.png';
    const appTitle = isWord ? 'Microsoft Word' : 'Microsoft Excel';
    const activeSubmode = appState.activeStudioMode[mode] || 'project';

    // RENDER HEADER BANNER & SUBMODE SWITCHER
    let html = `
      <div class="shortcut-studio-container">
        <!-- HERO BANNER DOKUMEN REFERENSI -->
        <div class="shortcut-hero-card ${isWord ? 'word-theme' : ''}">
          <div style="display: flex; align-items: center; gap: 14px;">
            <img src="assets/illustrations/3d_tiles/${heroTile}"
                 style="width: 58px; height: 58px; border-radius: 12px; object-fit: cover; border: 2px solid ${themeLight}; box-shadow: 0 4px 12px rgba(0,0,0,0.3);"
                 alt="Pahlawan Pintasan ${appTitle}">
            <div>
              <div style="font-size: 0.75rem; font-weight: 800; color: ${themeLight}; text-transform: uppercase; letter-spacing: 0.5px;">
                Sumber Resmi: Referensi/Pintasan_Keyboard_${isWord ? 'Word' : 'Excel'}.pdf
              </div>
              <h3 style="margin: 2px 0 4px 0; font-size: 1.25rem; color: var(--text-main);">
                Simulator & Praktik Pintasan ${appTitle}
              </h3>
              <p style="margin: 0; font-size: 0.85rem; color: var(--text-muted);">
                Pengalaman nyata di kantor: selesaikan proyek direksi dengan dokumen yang bertransformasi langsung!
              </p>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
            <span style="background: rgba(0,0,0,0.3); border: 1px solid ${themeLight}; padding: 6px 14px; border-radius: 20px; font-size: 0.85rem; font-weight: 800; color: ${themeLight};">
              ⭐ ${appState.stars || 0} Bintang Terkumpul
            </span>
          </div>
        </div>

        <!-- DUAL MODE SWITCHER BAR -->
        <div class="shortcut-submode-switcher-bar">
          <button class="submode-tab-btn ${activeSubmode === 'project' ? 'active' : ''}" onclick="switchStudioSubmode('${mode}', 'project')">
            💼 Simulasi Proyek Kantor Nyata (Tampilan ${isWord ? 'Word' : 'Excel'} Asli)
          </button>
          <button class="submode-tab-btn ${activeSubmode === 'catalog' ? 'active' : ''}" onclick="switchStudioSubmode('${mode}', 'catalog')">
            ⌨️ Bank Pintasan Lengkap (${list.length} Pintasan + Keyboard Virtual)
          </button>
        </div>
    `;

    // IF SUBMODE IS PROJECT -> RENDER PROJECT STUDIO
    if (activeSubmode === 'project') {
      html += renderProjectStudioHtml(mode);
    } else {
      // IF SUBMODE IS CATALOG -> RENDER ORIGINAL CATALOG & VIRTUAL KEYBOARD
      const filtered = window.getFilteredShortcuts(mode);
      const categories = window.getShortcutCategories(mode);

      if (appState.currentShortcutIdx[mode] < 0 || appState.currentShortcutIdx[mode] >= list.length) {
        appState.currentShortcutIdx[mode] = 0;
      }

      let currentPos = filtered.findIndex(x => x.originalIndex === appState.currentShortcutIdx[mode]);
      if (currentPos === -1 && filtered.length > 0) {
        appState.currentShortcutIdx[mode] = filtered[0].originalIndex;
        currentPos = 0;
      }

      const currentItem = list[appState.currentShortcutIdx[mode]] || list[0];
      const isCompleted = (appState.shortcutCompleted[mode] || []).includes(currentItem.id);
      const totalCompleted = (appState.shortcutCompleted[mode] || []).length;
      const keyParts = currentItem.key.split('+').map(k => k.trim());

      html += `
        <!-- NAVIGASI & PENCARIAN BANK PINTASAN -->
        <div class="challenge-nav-bar" style="margin-bottom: 0;">
          <div class="challenge-nav-controls" style="flex: 1; min-width: 240px;">
            <label style="font-size: 0.8rem; font-weight: 700; color: ${themeLight};">📂 Kategori:</label>
            <select class="challenge-page-select" onchange="filterShortcutCategory('${mode}', this.value)">
              ${categories.map(cat => `
                <option value="${cat}" ${appState.shortcutFilter[mode] === cat ? 'selected' : ''}>
                  ${cat === 'all' ? 'Semua Kategori (' + list.length + ' Pintasan)' : cat}
                </option>
              `).join('')}
            </select>
          </div>

          <div class="challenge-nav-controls" style="flex: 1; min-width: 220px;">
            <label style="font-size: 0.8rem; font-weight: 700; color: ${themeLight};">🔍 Cari:</label>
            <input type="text"
                   class="challenge-page-select"
                   style="background: var(--bg-secondary); color: var(--text-main); border: 1px solid var(--border-glow); padding: 6px 12px;"
                   placeholder="Cari pintasan, fungsi, aksi..."
                   value="${appState.shortcutSearch[mode] || ''}"
                   oninput="searchShortcut('${mode}', this.value)" />
          </div>

          <div class="challenge-nav-controls">
            <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem;" onclick="switchShortcutQuest('${mode}', -1)" ${currentPos <= 0 ? 'disabled' : ''}>
              ⬅️ Prev
            </button>
            <select class="challenge-page-select" onchange="setShortcutQuest('${mode}', Number(this.value))">
              ${filtered.map(x => `
                <option value="${x.originalIndex}" ${x.originalIndex === appState.currentShortcutIdx[mode] ? 'selected' : ''}>
                  #${x.originalIndex + 1}: [${x.item.key}] ${x.item.action.substring(0, 32)}... ${(appState.shortcutCompleted[mode] || []).includes(x.item.id) ? '✅' : ''}
                </option>
              `).join('')}
            </select>
            <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.82rem;" onclick="switchShortcutQuest('${mode}', 1)" ${currentPos >= filtered.length - 1 ? 'disabled' : ''}>
              Next ➡️
            </button>
          </div>
        </div>

        <!-- QUEST CARD -->
        <div class="shortcut-quest-card" style="border-left: 5px solid ${themeColor};">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
            <span style="font-size: 0.78rem; font-weight: 800; background: rgba(56, 189, 248, 0.15); color: var(--accent-cyan); padding: 4px 10px; border-radius: 12px; border: 1px solid rgba(56, 189, 248, 0.3);">
              🏷️ Kategori: ${currentItem.category}
            </span>
            ${isCompleted ? '<span style="font-size: 0.85rem; font-weight: 800; color: #10b981; background: rgba(16, 185, 129, 0.15); padding: 4px 12px; border-radius: 20px;">✅ Sudah Dikuasai</span>' : '<span style="font-size: 0.82rem; font-weight: 700; color: var(--accent-yellow); background: rgba(250, 204, 21, 0.12); padding: 4px 10px; border-radius: 12px;">🎯 Tekan Tombol di Keyboard!</span>'}
          </div>

          <!-- SKENARIO KANTOR -->
          <div style="background: rgba(0,0,0,0.25); border-radius: 10px; padding: 14px; margin-bottom: 14px; border-left: 3px solid ${themeLight};">
            <div style="font-size: 0.82rem; font-weight: 700; color: ${themeLight}; margin-bottom: 4px;">💼 Skenario Nyata di Kantor:</div>
            <div style="font-size: 0.95rem; color: var(--text-main); font-weight: 600; line-height: 1.45;">
              "${currentItem.scenario}"
            </div>
            <div style="margin-top: 8px; font-size: 0.85rem; color: var(--text-muted);">
              <strong>🎯 Tugasmu:</strong> ${currentItem.action}
            </div>
          </div>

          <!-- TOMBOL DISPLAY BESAR -->
          <div style="text-align: center; margin: 20px 0;">
            <div style="font-size: 0.82rem; font-weight: 700; color: var(--text-muted); margin-bottom: 8px;">
              ⌨️ KOMBINASI TOMBOL YANG HARUS DITEKAN:
            </div>
            <div class="shortcut-keys-display" id="shortcut-keys-display-${mode}">
              ${keyParts.map((part, i) => `
                <div class="shortcut-key-cap" data-key="${part.toLowerCase()}">${part}</div>
                ${i < keyParts.length - 1 ? '<span class="shortcut-key-plus">+</span>' : ''}
              `).join('')}
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 6px;">
              💡 Tips: Tekan langsung tombolnya di keyboard laptop/PC kamu, atau klik tombol di keyboard virtual bawah!
            </div>
          </div>

          <!-- 🍼 NALAR BAYI KODI CARD -->
          <div style="background: rgba(250, 204, 21, 0.08); border-left: 4px solid #facc15; border-radius: 8px; padding: 12px 16px; margin-bottom: 16px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
              <span style="font-size: 1.1rem;">🍼</span>
              <strong style="font-size: 0.88rem; color: #facc15;">Nalar Bayi Kodi (Kenapa & Bagaimana Cara Ingatnya?):</strong>
            </div>
            <p style="margin: 0; font-size: 0.88rem; color: #fef08a; line-height: 1.5;">
              ${currentItem.nalarBayiKodi}
            </p>
          </div>

          <!-- ALERT / FEEDBACK SUKSES -->
          <div id="shortcut-feedback-${mode}" style="display: none; margin-bottom: 14px;"></div>

          <!-- PAPAN KETIK VIRTUAL INTERAKTIF -->
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <span style="font-size: 0.82rem; font-weight: 700; color: var(--text-muted);">
                🕹️ Simulator Papan Ketik Interaktif (Klik atau Ketik Fisik):
              </span>
              <button class="btn-secondary" style="font-size: 0.75rem; padding: 3px 8px;" onclick="resetVirtualKeys('${mode}')">
                Bersihkan Tombol Aktif
              </button>
            </div>
            ${renderVirtualKeyboardHtml(mode)}
          </div>

          <!-- TOMBOL UJI MANUAL & RESET -->
          <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 14px; flex-wrap: wrap;">
            <button class="btn-secondary" style="font-size: 0.82rem; padding: 8px 14px;" onclick="testShortcutCombinationManually('${mode}')">
              ⚡ Uji Kombinasi Tombol Sekarang
            </button>
            <button class="btn-primary" style="background: ${themeColor}; border: none; font-size: 0.85rem; padding: 8px 18px;" onclick="switchShortcutQuest('${mode}', 1)">
              Lanjut Tantangan Berikutnya ➡️
            </button>
          </div>
        </div>
      `;
    }

    html += `</div>`;
    container.innerHTML = html;
  };

  // Render Virtual Keyboard Layout HTML
  function renderVirtualKeyboardHtml(mode) {
    const r1 = ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'];
    const r2 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
    const r3 = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'];
    const r4 = ['Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'];
    const r5 = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift'];
    const r6 = ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', 'Left', 'Down', 'Up', 'Right'];

    function makeKey(k, extraClass) {
      const cleanKey = k.toLowerCase();
      const isMod = ['ctrl', 'alt', 'shift', 'win'].includes(cleanKey);
      const isWide = ['backspace', 'enter', 'tab', 'caps'].includes(cleanKey);
      const isSpace = (cleanKey === 'space');
      let cls = 'vkey';
      if (isMod) cls += ' modifier';
      if (isWide) cls += ' wide';
      if (isSpace) cls += ' space';
      if (extraClass) cls += ' ' + extraClass;

      return `<button type="button" class="${cls}" data-vkey="${cleanKey}" onclick="onVirtualKeyClick('${mode}', '${k}')">${k}</button>`;
    }

    return `
      <div class="vkeyboard-container">
        <div class="vkeyboard-row">${r1.map(k => makeKey(k)).join('')}</div>
        <div class="vkeyboard-row">${r2.map(k => makeKey(k)).join('')}</div>
        <div class="vkeyboard-row">${r3.map(k => makeKey(k)).join('')}</div>
        <div class="vkeyboard-row">${r4.map(k => makeKey(k)).join('')}</div>
        <div class="vkeyboard-row">${r5.map(k => makeKey(k)).join('')}</div>
        <div class="vkeyboard-row">${r6.map(k => makeKey(k)).join('')}</div>
      </div>
    `;
  }

  // Virtual Key Click Handler
  window.onVirtualKeyClick = function(mode, keyName) {
    if (window.sfx) sfx.playClick();
    const clean = normalizeKey(keyName);
    const keyEl = document.querySelector(`.vkey[data-vkey="${clean}"]`);

    if (['ctrl', 'alt', 'shift', 'win'].includes(clean)) {
      if (virtualPressedKeys.has(clean)) {
        virtualPressedKeys.delete(clean);
        if (keyEl) keyEl.classList.remove('active-mod');
      } else {
        virtualPressedKeys.add(clean);
        if (keyEl) keyEl.classList.add('active-mod');
      }
    } else {
      if (keyEl) {
        keyEl.classList.add('pressed');
        setTimeout(() => keyEl.classList.remove('pressed'), 200);
      }
      virtualPressedKeys.add(clean);
      checkActiveCombination(mode);
      setTimeout(() => {
        virtualPressedKeys.delete(clean);
      }, 300);
    }
  };

  window.resetVirtualKeys = function(mode) {
    virtualPressedKeys.clear();
    document.querySelectorAll('.vkey.active-mod').forEach(el => el.classList.remove('active-mod'));
    const fb = document.getElementById(`shortcut-feedback-${mode}`);
    if (fb) fb.style.display = 'none';
  };

  // Evaluasi Kombinasi Tombol pada Bank Pintasan
  function checkActiveCombination(mode) {
    const list = mode === 'excel' ? window.EXCEL_SHORTCUTS : window.WORD_SHORTCUTS;
    const currentItem = list[appState.currentShortcutIdx[mode]];
    if (!currentItem) return;

    const expectedKeys = currentItem.keysArray.map(k => normalizeKey(k));
    const currentKeysArray = Array.from(virtualPressedKeys).map(k => normalizeKey(k));

    const hasAll = expectedKeys.every(k => currentKeysArray.includes(k));
    const feedbackBox = document.getElementById(`shortcut-feedback-${mode}`);

    if (hasAll) {
      if (window.sfx) sfx.playSuccess();
      if (!appState.shortcutCompleted[mode].includes(currentItem.id)) {
        appState.shortcutCompleted[mode].push(currentItem.id);
        appState.stars = (appState.stars || 0) + 1;
        if (window.saveProgress) saveProgress();
        const starCountEl = document.getElementById("header-stars");
        if (starCountEl) starCountEl.textContent = `${appState.stars} Bintang`;
      }

      if (feedbackBox) {
        feedbackBox.style.display = 'block';
        feedbackBox.className = 'alert-box success';
        feedbackBox.innerHTML = `
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
            <div>
              <strong>🎉 LUAR BIASA! PINTASAN BERHASIL DIKUASAI!</strong><br>
              <span style="font-size: 0.88rem;">
                Kamu sukses menekan kombinasi <strong style="color: #38bdf8;">${currentItem.key}</strong>: "${currentItem.action}".
              </span>
            </div>
            <button class="btn-primary" style="background: #10b981; border: none; padding: 6px 14px; font-size: 0.82rem;" onclick="switchShortcutQuest('${mode}', 1)">
              Tantangan Berikutnya ➡️
            </button>
          </div>
        `;
      }

      setTimeout(() => {
        window.resetVirtualKeys(mode);
      }, 600);

    } else {
      if (feedbackBox) {
        feedbackBox.style.display = 'block';
        feedbackBox.className = 'alert-box info';
        feedbackBox.innerHTML = `
          <strong>⌨️ Tombol Terdeteksi:</strong> [${currentKeysArray.join(' + ') || 'Belum ada'}].<br>
          <span style="font-size: 0.85rem;">Yang dibutuhkan untuk tantangan ini adalah: <strong>${currentItem.key}</strong>. Coba lagi yuk! 🍼</span>
        `;
      }
    }
  }

  window.testShortcutCombinationManually = function(mode) {
    checkActiveCombination(mode);
  };

  // Navigasi & Filter Router
  window.switchShortcutQuest = function(mode, delta) {
    if (window.sfx) sfx.playClick();
    const filtered = window.getFilteredShortcuts(mode);
    let currentPos = filtered.findIndex(x => x.originalIndex === appState.currentShortcutIdx[mode]);
    let newPos = currentPos + delta;
    if (newPos >= 0 && newPos < filtered.length) {
      appState.currentShortcutIdx[mode] = filtered[newPos].originalIndex;
      window.renderShortcutStudio(mode);
    }
  };

  window.setShortcutQuest = function(mode, idx) {
    if (window.sfx) sfx.playClick();
    appState.currentShortcutIdx[mode] = idx;
    window.renderShortcutStudio(mode);
  };

  window.filterShortcutCategory = function(mode, cat) {
    if (window.sfx) sfx.playClick();
    appState.shortcutFilter[mode] = cat;
    window.renderShortcutStudio(mode);
  };

  window.searchShortcut = function(mode, q) {
    appState.shortcutSearch[mode] = q;
    window.renderShortcutStudio(mode);
  };

  window.shuffleShortcutQuest = function(mode) {
    if (window.sfx) sfx.playClick();
    const filtered = window.getFilteredShortcuts(mode);
    if (!filtered.length) return;
    const randomItem = filtered[Math.floor(Math.random() * filtered.length)];
    appState.currentShortcutIdx[mode] = randomItem.originalIndex;
    window.renderShortcutStudio(mode);
  };

  // Endpoint Khusus Tab
  window.renderExcelShortcutStudio = function() {
    window.renderShortcutStudio('excel');
  };

  window.renderWordShortcutStudio = function() {
    window.renderShortcutStudio('word');
  };

  // =========================================================================
  // GLOBAL PHYSICAL KEYBOARD EVENT LISTENER
  // Mendeteksi tombol keyboard fisik PC/Laptop murid tanpa popup browser
  // =========================================================================
  window.addEventListener('keydown', function(e) {
    const tabExcel = document.getElementById('tab-shortcut-excel');
    const tabWord = document.getElementById('tab-shortcut-word');
    const isExcelActive = tabExcel && tabExcel.classList.contains('active');
    const isWordActive = tabWord && tabWord.classList.contains('active');

    if (!isExcelActive && !isWordActive) return;
    const mode = isExcelActive ? 'excel' : 'word';

    // Cegah aksi default browser untuk tombol latihan (Save, Print, Help, Find, dll)
    const interceptedKeys = ['s', 'p', 'w', 'f', 'h', 'o', 'n', 'b', 'i', 'u', 'e', 'l', 'r', 'j', 'd', 't', 'k', '1', '2', '3', '4', '5', '9', '0', '='];
    if (e.ctrlKey && interceptedKeys.includes(e.key.toLowerCase())) {
      e.preventDefault();
    }
    if (e.altKey && (e.key === '=' || interceptedKeys.includes(e.key.toLowerCase()))) {
      e.preventDefault();
    }
    if (['F1', 'F2', 'F3', 'F4', 'F7', 'F9', 'F11', 'F12'].includes(e.key)) {
      e.preventDefault();
    }

    // Jika sedang dalam MODE SIMULASI PROYEK KANTOR
    if (appState.activeStudioMode[mode] === 'project') {
      handleProjectPhysicalKey(mode, e);
      return;
    }

    // Jika dalam MODE BANK PINTASAN LENGKAP
    virtualPressedKeys.clear();
    if (e.ctrlKey) virtualPressedKeys.add('ctrl');
    if (e.altKey) virtualPressedKeys.add('alt');
    if (e.shiftKey) virtualPressedKeys.add('shift');
    if (e.metaKey) virtualPressedKeys.add('win');

    let keyName = e.key;
    if (keyName === ' ') keyName = 'space';
    virtualPressedKeys.add(normalizeKey(keyName));

    const clean = normalizeKey(keyName);
    const keyEl = document.querySelector(`.vkey[data-vkey="${clean}"]`);
    if (keyEl) {
      keyEl.classList.add('pressed');
      setTimeout(() => keyEl.classList.remove('pressed'), 250);
    }

    checkActiveCombination(mode);
  });

})();
