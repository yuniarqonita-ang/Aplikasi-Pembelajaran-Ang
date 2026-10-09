// =============================================================================
// KODI IT ACADEMY - 100 INTERACTIVE CODING CHALLENGES (ESSAY / LIVE STUDIO)
// HTML/CSS (20), JavaScript (20), Python (20), Java (20), C# (20)
// ZERO Spoilers - Distinct Worked Examples (Case A != Case B) - Zero Privacy Leaks
// =============================================================================

const codeChallenges = [
  {
    "id": "code-html-1",
    "language": "HTML/CSS",
    "category": "1. HTML5 & Semantic Web (20 Soal)",
    "title": "Membuat Form Login dengan Input Email, Password & Tombol Submit",
    "description": "Buatlah elemen form login sederhana yang memiliki input bertipe 'email' dengan atribut required, input bertipe 'password' dengan atribut required, dan sebuah tombol bertipe 'submit'.",
    "starterCode": "<form>\n  <!-- Tulis input email, password, dan tombol submit di sini -->\n  \n</form>",
    "solutionCode": "<form>\n  <input type=\"email\" name=\"email\" required placeholder=\"Email Anda\" />\n  <input type=\"password\" name=\"password\" required placeholder=\"Kata Sandi\" />\n  <button type=\"submit\">Masuk</button>\n</form>",
    "validationRules": [
      "<form",
      "type=\"email\"",
      "type=\"password\"",
      "type=\"submit\"",
      "required"
    ],
    "quickShortcuts": [
      "<",
      ">",
      "</",
      "type=\"",
      "name=\"",
      "required",
      "placeholder=\"",
      "class=\""
    ],
    "explanation": "Elemen form mengelompokkan input kontrol. Atribut type='email' memvalidasi format email otomatis peramban, dan required mencegah pengiriman form kosong.",
    "workedExample": {
      "kasusSerupa": "Membuat form pencarian artikel sederhana dengan input bertipe 'text' dan tombol cari.",
      "jawabanBenarContoh": "<form>\n  <input type=\"text\" name=\"keyword\" placeholder=\"Cari artikel...\" required />\n  <button type=\"submit\">Cari</button>\n</form>",
      "nalarBayi": "Form adalah wadah surat. Setiap kotak isian diberi kartu identitas type='' dan gembok required agar pengunjung tidak mengirim form hampa!"
    },
    "index": 1
  },
  {
    "id": "code-html-2",
    "language": "HTML/CSS",
    "category": "1. HTML5 & Semantic Web (20 Soal)",
    "title": "Struktur Tata Letak Semantik Web (Header, Nav, Main, Footer)",
    "description": "Susunlah struktur halaman semantik standar HTML5 yang mencakup tag <header>, di dalamnya terdapat <nav>, diikuti tag <main>, dan ditutup dengan tag <footer>.",
    "starterCode": "<!-- Susun struktur layout semantik di sini -->\n",
    "solutionCode": "<header>\n  <nav>\n    <a href=\"#\">Beranda</a>\n  </nav>\n</header>\n<main>\n  <h1>Konten Utama</h1>\n</main>\n<footer>\n  <p>&copy; 2026 Akademi Kodi</p>\n</footer>",
    "validationRules": [
      "<header>",
      "</header>",
      "<nav>",
      "</nav>",
      "<main>",
      "</main>",
      "<footer>",
      "</footer>"
    ],
    "quickShortcuts": [
      "<header>",
      "</header>",
      "<nav>",
      "</nav>",
      "<main>",
      "</main>",
      "<footer>",
      "</footer>"
    ],
    "explanation": "Tag semantik memberikan makna struktural bagi peramban, mesin pencari Google (SEO), dan teknologi pembaca layar (screen reader aksesibilitas).",
    "workedExample": {
      "kasusSerupa": "Menyusun tata letak artikel blog menggunakan tag semantik <article>, <section>, dan <aside>.",
      "jawabanBenarContoh": "<article>\n  <section>\n    <h2>Bab 1: Pengantar</h2>\n  </section>\n  <aside>\n    <p>Catatan Tambahan</p>\n  </aside>\n</article>",
      "nalarBayi": "Jangan gunakan <div> untuk semua hal! Bagian kepala rumah adalah <header>, jalan gang adalah <nav>, ruang tamu adalah <main>, dan fondasi lantai bawah adalah <footer>!"
    },
    "index": 2
  },
  {
    "id": "code-html-3",
    "language": "HTML/CSS",
    "category": "1. HTML5 & Semantic Web (20 Soal)",
    "title": "Tautan Eksternal Aman dengan Target Blank dan Rel Noopener",
    "description": "Buatlah elemen hyperlink <a> yang mengarah ke 'https://google.com', membuka di tab peramban baru (target='_blank'), dan memiliki pengaman rel='noopener noreferrer'.",
    "starterCode": "<!-- Tulis elemen link eksternal aman di sini -->\n",
    "solutionCode": "<a href=\"https://google.com\" target=\"_blank\" rel=\"noopener noreferrer\">Kunjungi Google</a>",
    "validationRules": [
      "<a ",
      "href=\"https://google.com\"",
      "target=\"_blank\"",
      "rel=\"noopener noreferrer\""
    ],
    "quickShortcuts": [
      "<a ",
      "href=\"",
      "target=\"_blank\"",
      "rel=\"noopener noreferrer\"",
      "</a>"
    ],
    "explanation": "Membuka tab baru dengan target='_blank' tanpa atribut rel='noopener' rentan serangan tabnabbing di mana tab baru dapat memanipulasi halaman induk lewat window.opener.",
    "workedExample": {
      "kasusSerupa": "Membuat tautan internal untuk mengunduh berkas panduan PDF dengan atribut download.",
      "jawabanBenarContoh": "<a href=\"/docs/panduan.pdf\" download=\"Panduan-Kodi.pdf\">Unduh Panduan PDF</a>",
      "nalarBayi": "Saat tamu membuka pintu jendela baru (target='_blank'), kunci gagang pintunya dari luar menggunakan rel='noopener' agar tamu tidak bisa menyabotase ruangan utama!"
    },
    "index": 3
  },
  {
    "id": "code-html-4",
    "language": "HTML/CSS",
    "category": "1. HTML5 & Semantic Web (20 Soal)",
    "title": "Membuat Tabel Data dengan Thead, Tbody, Th, dan Td",
    "description": "Buatlah tabel HTML yang memiliki <thead> dengan baris <tr> dan dua judul kolom <th> (Nama, Skor), serta <tbody> dengan satu baris data <tr> dan dua sel <td> ('Budi', '95').",
    "starterCode": "<table>\n  <!-- Susun thead, tbody, th, dan td di sini -->\n  \n</table>",
    "solutionCode": "<table>\n  <thead>\n    <tr>\n      <th>Nama</th>\n      <th>Skor</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Budi</td>\n      <td>95</td>\n    </tr>\n  </tbody>\n</table>",
    "validationRules": [
      "<table>",
      "<thead>",
      "<tr>",
      "<th>",
      "<tbody>",
      "<td>"
    ],
    "quickShortcuts": [
      "<table>",
      "<thead>",
      "<tbody>",
      "<tr>",
      "<th>",
      "<td>",
      "</table>"
    ],
    "explanation": "Pemisahan thead dan tbody mempermudah styling CSS, pembacaan aksesibilitas, dan memungkinkan header tabel tetap terlihat saat dicetak atau di-scroll.",
    "workedExample": {
      "kasusSerupa": "Membuat tabel ringkasan keuangan dengan baris penutup <tfoot> berisi total saldo.",
      "jawabanBenarContoh": "<table>\n  <tbody>\n    <tr><td>Pendapatan</td><td>1000</td></tr>\n  </tbody>\n  <tfoot>\n    <tr><td>Total</td><td>1000</td></tr>\n  </tfoot>\n</table>",
      "nalarBayi": "Tabel adalah lemari arsip: <thead> adalah label rak paling atas (th), <tbody> adalah laci isi barang data (td), dan <tr> adalah setiap baris raknya!"
    },
    "index": 4
  },
  {
    "id": "code-html-5",
    "language": "HTML/CSS",
    "category": "1. HTML5 & Semantic Web (20 Soal)",
    "title": "Formulir Pilihan Dropdown Select dengan Option",
    "description": "Buatlah elemen dropdown <select> dengan atribut name='kota' yang berisi tiga pilihan <option>: 'Jakarta', 'Bandung', dan 'Surabaya'.",
    "starterCode": "<!-- Tulis elemen select dropdown di sini -->\n",
    "solutionCode": "<select name=\"kota\">\n  <option value=\"jakarta\">Jakarta</option>\n  <option value=\"bandung\">Bandung</option>\n  <option value=\"surabaya\">Surabaya</option>\n</select>",
    "validationRules": [
      "<select",
      "name=\"kota\"",
      "<option",
      "Jakarta",
      "Bandung",
      "Surabaya"
    ],
    "quickShortcuts": [
      "<select ",
      "name=\"",
      "<option value=\"",
      "</option>",
      "</select>"
    ],
    "explanation": "Elemen select menyediakan antarmuka menu tarik-turun hemat tempat untuk memilih satu opsi dari daftar pilihan.",
    "workedExample": {
      "kasusSerupa": "Membuat input grup radio button untuk memilih satu jenis kelamin (Pria / Wanita).",
      "jawabanBenarContoh": "<input type=\"radio\" name=\"gender\" value=\"L\" id=\"male\" />\n<label for=\"male\">Laki-laki</label>\n<input type=\"radio\" name=\"gender\" value=\"P\" id=\"female\" />\n<label for=\"female\">Perempuan</label>",
      "nalarBayi": "Dropdown select seperti daftar menu buku restoran: kamu buka gulungannya (<select>), lalu pilih satu menu lezat dari daftar (<option>)!"
    },
    "index": 5
  },
  {
    "id": "code-html-6",
    "language": "HTML/CSS",
    "category": "1. HTML5 & Semantic Web (20 Soal)",
    "title": "Input Checkbox Persetujuan dengan Label Terhubung (for & id)",
    "description": "Buatlah input bertipe 'checkbox' dengan id='terms' dan atribut required, dipasangkan bersama elemen <label> dengan atribut for='terms' bertuliskan 'Saya setuju'.",
    "starterCode": "<!-- Tulis checkbox dan label terhubung di sini -->\n",
    "solutionCode": "<input type=\"checkbox\" id=\"terms\" name=\"agree\" required />\n<label for=\"terms\">Saya setuju</label>",
    "validationRules": [
      "type=\"checkbox\"",
      "id=\"terms\"",
      "<label",
      "for=\"terms\"",
      "required"
    ],
    "quickShortcuts": [
      "<input ",
      "type=\"checkbox\"",
      "id=\"",
      "name=\"",
      "<label for=\"",
      "</label>"
    ],
    "explanation": "Menghubungkan label ke input menggunakan atribut for dan id memungkinkan pengguna mencentang kotak checkbox cukup dengan mengklik teks labelnya.",
    "workedExample": {
      "kasusSerupa": "Membuat grup input radio yang terhubung rapi ke label masing-masing menggunakan id dan for.",
      "jawabanBenarContoh": "<input type=\"radio\" id=\"tunai\" name=\"metode\" value=\"cash\" />\n<label for=\"tunai\">Bayar Tunai</label>",
      "nalarBayi": "Kotak centang sangat mungil di layar HP. Dengan menyambungkan for='id', jari pengguna yang menyentuh tulisan label otomatis mencentang kotaknya!"
    },
    "index": 6
  },
  {
    "id": "code-html-7",
    "language": "HTML/CSS",
    "category": "1. HTML5 & Semantic Web (20 Soal)",
    "title": "Menyematkan Gambar Responsif dengan Atribut Alt & Loading Lazy",
    "description": "Tulis tag <img> dengan src='gambar.jpg', deskripsi alt='Pemandangan Gunung', dan optimasi pemuatan lambat loading='lazy'.",
    "starterCode": "<!-- Tulis tag img di sini -->\n",
    "solutionCode": "<img src=\"gambar.jpg\" alt=\"Pemandangan Gunung\" loading=\"lazy\" />",
    "validationRules": [
      "<img",
      "src=\"gambar.jpg\"",
      "alt=\"Pemandangan Gunung\"",
      "loading=\"lazy\""
    ],
    "quickShortcuts": [
      "<img ",
      "src=\"",
      "alt=\"",
      "loading=\"lazy\"",
      "width=\"",
      "height=\"",
      "/>"
    ],
    "explanation": "Atribut loading='lazy' menunda pengunduhan gambar di luar layar hingga pengguna menggulir mendekatinya, menghemat kuota dan mempercepat loading awal.",
    "workedExample": {
      "kasusSerupa": "Menyematkan elemen audio dengan pemutar kontrol bawaan peramban.",
      "jawabanBenarContoh": "<audio controls src=\"/audio/lagu.mp3\">\n  Browser Anda tidak mendukung audio.\n</audio>",
      "nalarBayi": "Atribut alt adalah mata bagi tunanetra dan Google robot, sedangkan loading='lazy' adalah kurir hemat yang tidak mengantar paket sebelum dipanggil!"
    },
    "index": 7
  },
  {
    "id": "code-html-8",
    "language": "HTML/CSS",
    "category": "1. HTML5 & Semantic Web (20 Soal)",
    "title": "CSS Flexbox: Menengahkan Elemen Secara Horizontal dan Vertikal",
    "description": "Tulis aturan CSS untuk kelas '.center-box' agar menggunakan display flex, menengahkan konten secara horizontal (justify-content center), dan vertikal (align-items center).",
    "starterCode": ".center-box {\n  /* Tulis aturan CSS flexbox di sini */\n  \n}",
    "solutionCode": ".center-box {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}",
    "validationRules": [
      "display: flex",
      "justify-content: center",
      "align-items: center"
    ],
    "quickShortcuts": [
      "display: flex;",
      "justify-content: center;",
      "align-items: center;",
      "flex-direction:",
      "gap:"
    ],
    "explanation": "Kombinasi display: flex dengan justify-content: center dan align-items: center adalah standar emas CSS modern untuk memposisikan anak elemen tepat di tengah wadah.",
    "workedExample": {
      "kasusSerupa": "Membuat wadah flexbox dengan susunan kolom vertikal dan jarak antar elemen menggunakan gap.",
      "jawabanBenarContoh": ".menu-col {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}",
      "nalarBayi": "Flexbox adalah tali elastis: justify-content mengatur posisi kiri-tengah-kanan, sedangkan align-items mengatur posisi atas-tengah-bawah!"
    },
    "index": 8
  },
  {
    "id": "code-html-9",
    "language": "HTML/CSS",
    "category": "1. HTML5 & Semantic Web (20 Soal)",
    "title": "CSS Grid: Membuat Tata Letak Kartu 3 Kolom Responsif",
    "description": "Tulis aturan CSS untuk kelas '.grid-container' menggunakan display grid dengan 3 kolom berukuran sama menggunakan fungsi repeat dan satuan pecahan 1fr.",
    "starterCode": ".grid-container {\n  /* Tulis aturan grid 3 kolom di sini */\n  \n}",
    "solutionCode": ".grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}",
    "validationRules": [
      "display: grid",
      "grid-template-columns:",
      "repeat(3, 1fr)"
    ],
    "quickShortcuts": [
      "display: grid;",
      "grid-template-columns: repeat(3, 1fr);",
      "gap:",
      "grid-template-rows:"
    ],
    "explanation": "repeat(3, 1fr) membagi lebar wadah menjadi 3 kolom fleksibel bernilai proporsional sama (1 fractional unit).",
    "workedExample": {
      "kasusSerupa": "Membuat grid otomatis yang menyesuaikan jumlah kolom dengan lebar minimum 200px menggunakan auto-fit.",
      "jawabanBenarContoh": ".responsive-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n}",
      "nalarBayi": "Grid adalah papan catur: daripada menghitung persentase lebar satu per satu, katakan 'buat 3 kotak sama besar' dengan repeat(3, 1fr)!"
    },
    "index": 9
  },
  {
    "id": "code-html-10",
    "language": "HTML/CSS",
    "category": "1. HTML5 & Semantic Web (20 Soal)",
    "title": "CSS Media Query: Mengubah Gaya Tampilan pada Layar Ponsel Mobile",
    "description": "Tulis blok @media query CSS dengan kondisi max-width 768px, yang mengubah ukuran font kelas '.hero-title' menjadi 1.5rem.",
    "starterCode": "/* Tulis media query mobile di sini */\n",
    "solutionCode": "@media (max-width: 768px) {\n  .hero-title {\n    font-size: 1.5rem;\n  }\n}",
    "validationRules": [
      "@media",
      "max-width: 768px",
      ".hero-title",
      "font-size: 1.5rem"
    ],
    "quickShortcuts": [
      "@media (max-width: 768px) {",
      "}",
      "font-size:",
      "display:",
      "width:"
    ],
    "explanation": "Media queries mendeteksi resolusi viewport perangkat dan menerapkan aturan CSS spesifik untuk pengalaman mobile responsif yang optimal.",
    "workedExample": {
      "kasusSerupa": "Menerapkan media query untuk orientasi layar lanskap atau mode cetak kertas.",
      "jawabanBenarContoh": "@media print {\n  .nav-bar {\n    display: none;\n  }\n}",
      "nalarBayi": "Media query adalah sensor mata: ketika layar menyusut lebih kecil dari 768 piksel (HP), otomatis ganti baju ukuran font jadi lebih pas!"
    },
    "index": 10
  },
  {
    "id": "code-html-11",
    "language": "HTML/CSS",
    "category": "1. HTML5 & Semantic Web (20 Soal)",
    "title": "Elemen Dialog Modal Asli HTML5 (<dialog>)",
    "description": "Buatlah elemen <dialog> dengan id='popup' yang di dalamnya berisi sebuah paragraf 'Pemberitahuan Penting' dan sebuah tombol bertuliskan 'Tutup'.",
    "starterCode": "<!-- Tulis elemen dialog modal di sini -->\n",
    "solutionCode": "<dialog id=\"popup\">\n  <p>Pemberitahuan Penting</p>\n  <button type=\"button\">Tutup</button>\n</dialog>",
    "validationRules": [
      "<dialog",
      "id=\"popup\"",
      "<p>Pemberitahuan Penting</p>",
      "<button",
      "</dialog>"
    ],
    "quickShortcuts": [
      "<dialog id=\"popup\">",
      "<p>",
      "</p>",
      "<button>",
      "</button>",
      "</dialog>"
    ],
    "explanation": "Tag dialog HTML5 menyediakan fungsi jendela sembul (modal) bawaan peramban lengkap dengan backdrop dan metode .showModal() tanpa butuh pustaka eksternal.",
    "workedExample": {
      "kasusSerupa": "Membuat elemen perincian yang dapat diperluas atau dilipat menggunakan tag <details> dan <summary>.",
      "jawabanBenarContoh": "<details>\n  <summary>Klik untuk baca selengkapnya</summary>\n  <p>Ini adalah rincian teks tersembunyi.</p>\n</details>",
      "nalarBayi": "Dialog adalah jendela pop-up asli bawaan peramban. Tidak perlu lagi CSS modal rumit dengan z-index 99999!"
    },
    "index": 11
  },
  {
    "id": "code-html-12",
    "language": "HTML/CSS",
    "category": "1. HTML5 & Semantic Web (20 Soal)",
    "title": "CSS Box-Shadow & Border-Radius untuk Kartu Modern",
    "description": "Tulis aturan CSS untuk kelas '.card' yang memiliki sudut melengkung border-radius 12px dan bayangan halus box-shadow '0 4px 6px rgba(0, 0, 0, 0.1)'.",
    "starterCode": ".card {\n  /* Tulis gaya sudut melengkung dan bayangan di sini */\n  \n}",
    "solutionCode": ".card {\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}",
    "validationRules": [
      "border-radius: 12px",
      "box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)"
    ],
    "quickShortcuts": [
      "border-radius: 12px;",
      "box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);",
      "padding:",
      "background:"
    ],
    "explanation": "Border radius melembutkan sudut kotak kaku, dan box-shadow memberikan kedalaman optik (elevation z-axis) khas desain kartu modern.",
    "workedExample": {
      "kasusSerupa": "Membuat garis batas elemen dengan border tipis dan efek outline saat fokus.",
      "jawabanBenarContoh": ".input-box {\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n}",
      "nalarBayi": "Border-radius mengikis sudut lancip meja agar aman, dan box-shadow adalah efek lampu gantung yang membuat kartu tampak melayang di atas meja!"
    },
    "index": 12
  },
  {
    "id": "code-html-13",
    "language": "HTML/CSS",
    "category": "1. HTML5 & Semantic Web (20 Soal)",
    "title": "CSS Pseudo-Class :hover dengan Transisi Halus (transition)",
    "description": "Tulis gaya CSS untuk tombol '.btn' agar memiliki efek transition 'background-color 0.3s ease', dan saat di-hover (.btn:hover) warna background berubah menjadi '#2563eb'.",
    "starterCode": ".btn {\n  /* Atur transisi di sini */\n}\n\n.btn:hover {\n  /* Atur perubahan warna saat kursor di atas tombol */\n}",
    "solutionCode": ".btn {\n  transition: background-color 0.3s ease;\n}\n.btn:hover {\n  background-color: #2563eb;\n}",
    "validationRules": [
      "transition: background-color 0.3s ease",
      ".btn:hover",
      "background-color: #2563eb"
    ],
    "quickShortcuts": [
      ".btn {",
      "transition: background-color 0.3s ease;",
      "}",
      ".btn:hover {",
      "background-color: #2563eb;"
    ],
    "explanation": "Properti transition mencegah perubahan visual instan yang kasar dan menghasilkan animasi halus saat interaksi hover kursor terjadi.",
    "workedExample": {
      "kasusSerupa": "Mengatur gaya tombol saat ditegang/diklik menggunakan pseudo-class :active.",
      "jawabanBenarContoh": ".btn:active {\n  transform: scale(0.98);\n}",
      "nalarBayi": "Transition adalah rem halus mobil: jangan biarkan lampu ganti warna mendadak silau, tapi buat memudar anggun dalam 0.3 detik!"
    },
    "index": 13
  },
  {
    "id": "code-html-14",
    "language": "HTML/CSS",
    "category": "1. HTML5 & Semantic Web (20 Soal)",
    "title": "CSS Custom Properties (Variables) Tema Warna",
    "description": "Definisikan variabel warna '--primary-color: #3b82f6;' pada selektor ':root', lalu gunakan variabel tersebut pada kelas '.header' untuk properti background-color dengan fungsi var().",
    "starterCode": "/* Definisikan variabel di root dan gunakan di .header */\n",
    "solutionCode": ":root {\n  --primary-color: #3b82f6;\n}\n.header {\n  background-color: var(--primary-color);\n}",
    "validationRules": [
      ":root",
      "--primary-color: #3b82f6",
      "background-color: var(--primary-color)"
    ],
    "quickShortcuts": [
      ":root {",
      "--primary-color: #3b82f6;",
      "}",
      "background-color: var(--primary-color);"
    ],
    "explanation": "Variabel CSS memusatkan nilai palet warna di satu tempat terpusat sehingga mudah diubah secara konsisten di seluruh tema aplikasi.",
    "workedExample": {
      "kasusSerupa": "Mendefinisikan variabel ukuran padding dan menggunakan fallback nilai jika variabel belum tersedia.",
      "jawabanBenarContoh": ".container {\n  padding: var(--page-spacing, 16px);\n}",
      "nalarBayi": ":root adalah lemari cat utama gedung: simpan kaleng warna resmi di sana (--primary-color), lalu panggil nama kalengnya di mana pun dengan var()!"
    },
    "index": 14
  },
  {
    "id": "code-html-15",
    "language": "HTML/CSS",
    "category": "1. HTML5 & Semantic Web (20 Soal)",
    "title": "HTML5 Input Number dengan Batas Min, Max, dan Step",
    "description": "Buatlah elemen input dengan type='number', nama='jumlah', batas nilai minimum min='1', maksimum max='100', dan kelipatan kenaikan step='5'.",
    "starterCode": "<!-- Tulis input number di sini -->\n",
    "solutionCode": "<input type=\"number\" name=\"jumlah\" min=\"1\" max=\"100\" step=\"5\" value=\"5\" />",
    "validationRules": [
      "type=\"number\"",
      "name=\"jumlah\"",
      "min=\"1\"",
      "max=\"100\"",
      "step=\"5\""
    ],
    "quickShortcuts": [
      "<input ",
      "type=\"number\"",
      "min=\"1\"",
      "max=\"100\"",
      "step=\"5\"",
      "value=\"",
      "/>"
    ],
    "explanation": "Atribut min, max, dan step membatasi masukan numerik langsung di tingkat HTML peramban sebelum dikirim ke server.",
    "workedExample": {
      "kasusSerupa": "Membuat input pemilih rentang geser (slider) menggunakan type='range'.",
      "jawabanBenarContoh": "<input type=\"range\" min=\"0\" max=\"100\" step=\"10\" name=\"volume\" />",
      "nalarBayi": "Input number seperti tangga berjalan: min adalah lantai terendah, max adalah atap tertinggi, dan step adalah jarak setiap anak tangga!"
    },
    "index": 15
  },
  {
    "id": "code-html-16",
    "language": "HTML/CSS",
    "category": "1. HTML5 & Semantic Web (20 Soal)",
    "title": "Meta Tag Viewport Responsif Standar Mobile",
    "description": "Tulis elemen <meta> viewport standar di dalam tag dokumen yang mengatur name='viewport' dan content='width=device-width, initial-scale=1.0'.",
    "starterCode": "<!-- Tulis meta viewport di sini -->\n",
    "solutionCode": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />",
    "validationRules": [
      "<meta",
      "name=\"viewport\"",
      "content=\"width=device-width, initial-scale=1.0\""
    ],
    "quickShortcuts": [
      "<meta name=\"viewport\"",
      "content=\"width=device-width, initial-scale=1.0\"",
      "/>"
    ],
    "explanation": "Meta viewport adalah kunci utama halaman responsif yang menginstruksikan peramban ponsel agar merender skala halaman sesuai lebar fisik layar perangkat.",
    "workedExample": {
      "kasusSerupa": "Menetapkan pengkodean karakter dokumen HTML5 menjadi UTF-8 menggunakan tag meta.",
      "jawabanBenarContoh": "<meta charset=\"UTF-8\" />",
      "nalarBayi": "Tanpa meta viewport, peramban HP akan mengira website adalah koran meja lebar dan mengecilkannya hingga tulisan tak terbaca sama sekali!"
    },
    "index": 16
  },
  {
    "id": "code-html-17",
    "language": "HTML/CSS",
    "category": "1. HTML5 & Semantic Web (20 Soal)",
    "title": "Badge Status Berwarna Menggunakan Tag Span dan CSS",
    "description": "Buatlah elemen <span> dengan kelas 'badge-active' berisi teks 'Aktif', dan tulis aturan CSS kelas tersebut dengan display inline-block, background-color '#22c55e', dan color '#ffffff'.",
    "starterCode": "<!-- Buat elemen span dan aturan CSS di sini -->\n",
    "solutionCode": "<span class=\"badge-active\">Aktif</span>\n<style>\n.badge-active {\n  display: inline-block;\n  background-color: #22c55e;\n  color: #ffffff;\n  padding: 4px 8px;\n  border-radius: 4px;\n}\n</style>",
    "validationRules": [
      "<span class=\"badge-active\">Aktif</span>",
      ".badge-active",
      "display: inline-block",
      "background-color: #22c55e",
      "color: #ffffff"
    ],
    "quickShortcuts": [
      "<span class=\"badge-active\">",
      "</span>",
      "display: inline-block;",
      "background-color: #22c55e;",
      "color: #ffffff;"
    ],
    "explanation": "Tag span dengan display inline-block sangat ideal untuk mendesain label indikator status atau tag kategori yang rapi berdampingan dengan teks.",
    "workedExample": {
      "kasusSerupa": "Membuat dot lingkaran indikator status online berukuran 8x8 piksel.",
      "jawabanBenarContoh": "<span class=\"status-dot\"></span>\n<style>\n.status-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: #22c55e;\n  display: inline-block;\n}\n</style>",
      "nalarBayi": "Span adalah stiker mini. Dengan display inline-block, ia bisa kita tempeli warna hijau cerah (#22c55e) dan teks putih tanpa mematahkan baris tulisan!"
    },
    "index": 17
  },
  {
    "id": "code-html-18",
    "language": "HTML/CSS",
    "category": "1. HTML5 & Semantic Web (20 Soal)",
    "title": "Elemen HTML5 Video Player dengan Kontrol",
    "description": "Buatlah elemen <video> dengan atribut controls, lebar width='640', dan elemen anak <source> yang memuat berkas 'presentasi.mp4' bertipe 'video/mp4'.",
    "starterCode": "<!-- Tulis elemen video di sini -->\n",
    "solutionCode": "<video controls width=\"640\">\n  <source src=\"presentasi.mp4\" type=\"video/mp4\" />\n  Browser Anda tidak mendukung tag video.\n</video>",
    "validationRules": [
      "<video controls",
      "width=\"640\"",
      "<source",
      "src=\"presentasi.mp4\"",
      "type=\"video/mp4\"",
      "</video>"
    ],
    "quickShortcuts": [
      "<video controls width=\"640\">",
      "<source src=\"",
      "\" type=\"video/mp4\" />",
      "</video>"
    ],
    "explanation": "Tag video HTML5 memutar media bergerak langsung secara native di peramban tanpa membutuhkan plugin eksternal lawas seperti Adobe Flash.",
    "workedExample": {
      "kasusSerupa": "Menyematkan video YouTube menggunakan elemen iframe responsif.",
      "jawabanBenarContoh": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/xyz\" allowfullscreen></iframe>",
      "nalarBayi": "Video player adalah proyektor film mini: tag <video controls> menyalakan tombol play, dan <source> mengarahkan rol kaset video mana yang diputar!"
    },
    "index": 18
  },
  {
    "id": "code-html-19",
    "language": "HTML/CSS",
    "category": "1. HTML5 & Semantic Web (20 Soal)",
    "title": "CSS Overflow Ellipsis: Memotong Teks Panjang Jadi Titik-Titik (...)",
    "description": "Tulis aturan CSS untuk kelas '.truncate' agar memotong teks satu baris yang melebihi batas wadah menggunakan white-space: nowrap, overflow: hidden, dan text-overflow: ellipsis.",
    "starterCode": ".truncate {\n  /* Tulis aturan pemotong teks di sini */\n  \n}",
    "solutionCode": ".truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}",
    "validationRules": [
      "white-space: nowrap",
      "overflow: hidden",
      "text-overflow: ellipsis"
    ],
    "quickShortcuts": [
      "white-space: nowrap;",
      "overflow: hidden;",
      "text-overflow: ellipsis;",
      "max-width:"
    ],
    "explanation": "Tiga serangkai CSS (white-space nowrap, overflow hidden, text-overflow ellipsis) memastikan teks judul yang kepanjangan dipotong rapi menjadi tanda elipsis (...).",
    "workedExample": {
      "kasusSerupa": "Mengatur perilaku scrollbar otomatis bila konten anak melebihi tinggi wadah menggunakan overflow-y: auto.",
      "jawabanBenarContoh": ".scroll-box {\n  max-height: 200px;\n  overflow-y: auto;\n}",
      "nalarBayi": "Jangan biarkan teks tumpah ke luar kotak kartu! Gunting bagian lebihnya dengan overflow: hidden, lalu beri stempel '...' dengan text-overflow: ellipsis!"
    },
    "index": 19
  },
  {
    "id": "code-html-20",
    "language": "HTML/CSS",
    "category": "1. HTML5 & Semantic Web (20 Soal)",
    "title": "Struktur Navigasi Breadcrumb Menggunakan Nav dan Ol",
    "description": "Buatlah navigasi jejak halaman (breadcrumb) menggunakan elemen <nav aria-label='Breadcrumb'> berisi daftar terurut <ol> dengan tiga item <li> ('Beranda', 'Katalog', 'Sepatu').",
    "starterCode": "<!-- Tulis breadcrumb semantik di sini -->\n",
    "solutionCode": "<nav aria-label=\"Breadcrumb\">\n  <ol>\n    <li><a href=\"/\">Beranda</a></li>\n    <li><a href=\"/katalog\">Katalog</a></li>\n    <li>Sepatu</li>\n  </ol>\n</nav>",
    "validationRules": [
      "<nav aria-label=\"Breadcrumb\">",
      "<ol>",
      "<li>",
      "Beranda",
      "Katalog",
      "Sepatu",
      "</ol>",
      "</nav>"
    ],
    "quickShortcuts": [
      "<nav aria-label=\"Breadcrumb\">",
      "<ol>",
      "<li><a href=\"",
      "\">",
      "</a></li>",
      "</ol>",
      "</nav>"
    ],
    "explanation": "Breadcrumb semantik dengan nav dan list memandu pengguna mengetahui posisi halaman hierarkis mereka saat ini sekaligus ramah SEO Google.",
    "workedExample": {
      "kasusSerupa": "Membuat menu pagination nomor halaman menggunakan nav dan unordered list.",
      "jawabanBenarContoh": "<nav aria-label=\"Pagination\">\n  <ul>\n    <li><a href=\"?page=1\">1</a></li>\n    <li><a href=\"?page=2\">2</a></li>\n  </ul>\n</nav>",
      "nalarBayi": "Breadcrumb seperti remah roti Hansel & Gretel: membantu pengunjung mengingat jejak jalan dari Beranda > Katalog hingga sampai di halaman Sepatu!"
    },
    "index": 20
  },
  {
    "id": "code-js-1",
    "language": "JavaScript",
    "category": "2. JavaScript Modern ES6+ (20 Soal)",
    "title": "Arrow Function: Menghitung Total Harga Setelah Diskon",
    "description": "Buatlah arrow function bernama 'calculateDiscount' yang menerima dua parameter: 'price' (angka) dan 'discountPercent' (angka), lalu mengembalikan harga akhir setelah dipotong diskon.",
    "starterCode": "// Tulis arrow function calculateDiscount di sini\n",
    "solutionCode": "const calculateDiscount = (price, discountPercent) => {\n  return price - (price * discountPercent / 100);\n};",
    "validationRules": [
      "calculateDiscount",
      "=>",
      "price",
      "discountPercent",
      "return"
    ],
    "quickShortcuts": [
      "const calculateDiscount = (",
      ") => {",
      "return ",
      ";",
      "};",
      "*",
      "/",
      "-"
    ],
    "explanation": "Arrow function menyediakan sintaks penulisan fungsi ringkas dengan pengikatan konteks 'this' leksikal otomatis.",
    "workedExample": {
      "kasusSerupa": "Membuat arrow function untuk menghitung luas persegi panjang.",
      "jawabanBenarContoh": "const calculateArea = (width, height) => width * height;",
      "nalarBayi": "Arrow function adalah rumus panah kilat: masukkan bahan (price, discountPercent), tarik busur panah (=>), dan lepaskan hasil hitungan harganya!"
    },
    "index": 21
  },
  {
    "id": "code-js-2",
    "language": "JavaScript",
    "category": "2. JavaScript Modern ES6+ (20 Soal)",
    "title": "Array .map(): Mengubah Angka Menjadi Format Rupiah",
    "description": "Diberikan array 'prices = [10000, 25000, 50000]'. Gunakan metode .map() untuk menghasilkan array baru 'formattedPrices' berisi string dengan format 'Rp' di depannya (contoh: 'Rp10000').",
    "starterCode": "const prices = [10000, 25000, 50000];\n// Gunakan .map() untuk membuat formattedPrices\n",
    "solutionCode": "const prices = [10000, 25000, 50000];\nconst formattedPrices = prices.map(p => `Rp${p}`);",
    "validationRules": [
      "formattedPrices",
      ".map(",
      "Rp"
    ],
    "quickShortcuts": [
      "const formattedPrices = ",
      "prices.map(",
      "p => `Rp${p}`",
      ");"
    ],
    "explanation": "Metode .map() memproses setiap elemen array dan mengembalikan array baru dengan panjang sama tanpa memutasi array asli.",
    "workedExample": {
      "kasusSerupa": "Menggunakan .map() untuk mengalikan setiap angka dalam array dengan 2.",
      "jawabanBenarContoh": "const doubled = numbers.map(n => n * 2);",
      "nalarBayi": ".map() adalah ban berjalan pabrik: setiap barang yang lewat diubah wujudnya (ditambahi stempel 'Rp') lalu ditata rapi di kardus baru!"
    },
    "index": 22
  },
  {
    "id": "code-js-3",
    "language": "JavaScript",
    "category": "2. JavaScript Modern ES6+ (20 Soal)",
    "title": "Array .filter(): Menyaring Pengguna Aktif",
    "description": "Diberikan array 'users'. Gunakan metode .filter() untuk membuat array baru 'activeUsers' yang hanya berisi objek dengan properti 'isActive === true'.",
    "starterCode": "const users = [\n  { id: 1, name: 'Andi', isActive: true },\n  { id: 2, name: 'Budi', isActive: false },\n  { id: 3, name: 'Citra', isActive: true }\n];\n// Tulis filter di sini\n",
    "solutionCode": "const activeUsers = users.filter(u => u.isActive === true);",
    "validationRules": [
      "activeUsers",
      ".filter(",
      "isActive"
    ],
    "quickShortcuts": [
      "const activeUsers = ",
      "users.filter(",
      "u => u.isActive",
      ");"
    ],
    "explanation": "Metode .filter() menguji setiap elemen array dengan fungsi predikat boolean, dan mengembalikan array berisi elemen-elemen yang lolos evaluasi bernilai true.",
    "workedExample": {
      "kasusSerupa": "Menyaring array angka untuk mengambil hanya bilangan genap.",
      "jawabanBenarContoh": "const evens = numbers.filter(n => n % 2 === 0);",
      "nalarBayi": ".filter() adalah saringan kopi: barang yang memenuhi syarat (isActive true) lolos ke mangkuk baru, sedangkan yang false tertahan di atas saringan!"
    },
    "index": 23
  },
  {
    "id": "code-js-4",
    "language": "JavaScript",
    "category": "2. JavaScript Modern ES6+ (20 Soal)",
    "title": "Array .reduce(): Menghitung Total Belanjaan Keranjang",
    "description": "Diberikan array 'cart = [{ price: 50 }, { price: 30 }, { price: 20 }]'. Gunakan metode .reduce() untuk menghitung total belanjaan dan simpan ke variabel 'totalPrice' dengan nilai awal 0.",
    "starterCode": "const cart = [{ price: 50 }, { price: 30 }, { price: 20 }];\n// Hitung totalPrice menggunakan .reduce()\n",
    "solutionCode": "const cart = [{ price: 50 }, { price: 30 }, { price: 20 }];\nconst totalPrice = cart.reduce((acc, item) => acc + item.price, 0);",
    "validationRules": [
      "totalPrice",
      ".reduce(",
      "acc",
      "price",
      "0"
    ],
    "quickShortcuts": [
      "const totalPrice = ",
      "cart.reduce((acc, item) => ",
      "acc + item.price, 0);"
    ],
    "explanation": "Metode .reduce() merangkum seluruh elemen array menjadi satu nilai tunggal akumulator menggunakan fungsi penumpuk dan nilai inisial awal.",
    "workedExample": {
      "kasusSerupa": "Menghitung nilai angka terbesar (maksimum) dalam array menggunakan .reduce().",
      "jawabanBenarContoh": "const maxVal = numbers.reduce((max, cur) => cur > max ? cur : max, numbers[0]);",
      "nalarBayi": ".reduce() adalah celengan babi: setiap koin harga (item.price) yang masuk ditambahkan ke dalam total celengan (acc) hingga tersisa satu angka akhir!"
    },
    "index": 24
  },
  {
    "id": "code-js-5",
    "language": "JavaScript",
    "category": "2. JavaScript Modern ES6+ (20 Soal)",
    "title": "Template Literals: String Interpolasi Pengumuman",
    "description": "Buatlah fungsi 'formatGreeting' yang menerima dua argumen 'name' dan 'role', lalu mengembalikan teks string interpolasi berformat: 'Halo [name], selamat datang sebagai [role]!' menggunakan backtick.",
    "starterCode": "// Tulis fungsi formatGreeting dengan template literal\n",
    "solutionCode": "function formatGreeting(name, role) {\n  return `Halo ${name}, selamat datang sebagai ${role}!`;\n}",
    "validationRules": [
      "formatGreeting",
      "return `",
      "${name}",
      "${role}"
    ],
    "quickShortcuts": [
      "function formatGreeting(name, role) {",
      "return `Halo ${name}, selamat datang sebagai ${role}!`;",
      "}"
    ],
    "explanation": "Template literals (backticks `) memungkinkan penyematan ekspresi javascript langsung di dalam string tanpa membutuhkan operator penyambung plus (+).",
    "workedExample": {
      "kasusSerupa": "Merangkai alamat URL dinamis dengan query string menggunakan template literal.",
      "jawabanBenarContoh": "const url = `https://api.site.com/users/${userId}?page=${page}`;",
      "nalarBayi": "Daripada menyambung teks dengan 'Halo ' + name + ', kamu...', gunakan backtick (`) dan bungkus nama variabel dalam dompet ${name} yang rapi!"
    },
    "index": 25
  },
  {
    "id": "code-js-6",
    "language": "JavaScript",
    "category": "2. JavaScript Modern ES6+ (20 Soal)",
    "title": "Object Destructuring: Mengekstrak Properti Objek",
    "description": "Diberikan objek 'profile = { username: 'kodi', email: 'kodi@it.id', score: 100 }'. Ekstrak properti 'username' dan 'email' ke dalam variabel mandiri menggunakan sintaks destructuring objek.",
    "starterCode": "const profile = { username: 'kodi', email: 'kodi@it.id', score: 100 };\n// Tulis destructuring di sini\n",
    "solutionCode": "const profile = { username: 'kodi', email: 'kodi@it.id', score: 100 };\nconst { username, email } = profile;",
    "validationRules": [
      "const {",
      "username",
      "email",
      "} = profile"
    ],
    "quickShortcuts": [
      "const { username, email } = profile;"
    ],
    "explanation": "Destructuring objek memungkinkan pembongkaran properti objek secara langsung ke variabel terpisah dengan sintaks kurung kurawal yang ringkas.",
    "workedExample": {
      "kasusSerupa": "Mengekstrak elemen pertama dan kedua dari sebuah array menggunakan array destructuring.",
      "jawabanBenarContoh": "const [first, second] = colors;",
      "nalarBayi": "Daripada menulis profile.username dan profile.email berulang-ulang, ambil langsung kunci kotaknya menggunakan const { username, email } = profile!"
    },
    "index": 26
  },
  {
    "id": "code-js-7",
    "language": "JavaScript",
    "category": "2. JavaScript Modern ES6+ (20 Soal)",
    "title": "Spread Operator (...): Menggabungkan Dua Array",
    "description": "Diberikan array 'frontend = ['HTML', 'CSS']' dan 'backend = ['Node', 'SQL']'. Gabungkan keduanya menjadi array baru 'fullstack' menggunakan spread operator (...).",
    "starterCode": "const frontend = ['HTML', 'CSS'];\nconst backend = ['Node', 'SQL'];\n// Buat fullstack menggunakan spread operator\n",
    "solutionCode": "const frontend = ['HTML', 'CSS'];\nconst backend = ['Node', 'SQL'];\nconst fullstack = [...frontend, ...backend];",
    "validationRules": [
      "fullstack",
      "[...frontend, ...backend]"
    ],
    "quickShortcuts": [
      "const fullstack = [...frontend, ...backend];"
    ],
    "explanation": "Spread operator (...) menyebarkan elemen-elemen dari array iterable ke dalam array baru tanpa mengubah array asal.",
    "workedExample": {
      "kasusSerupa": "Menyalin dan menambahkan properti baru ke sebuah objek tanpa memutasi objek asli.",
      "jawabanBenarContoh": "const updatedUser = { ...user, isVerified: true };",
      "nalarBayi": "Spread operator (...) seperti membuka ritsleting kardus dan menuangkan seluruh isinya ke dalam kardus baru yang lebih besar!"
    },
    "index": 27
  },
  {
    "id": "code-js-8",
    "language": "JavaScript",
    "category": "2. JavaScript Modern ES6+ (20 Soal)",
    "title": "Default Parameters pada Fungsi JavaScript",
    "description": "Buatlah fungsi 'calculateTax' yang menerima parameter 'amount' dan 'taxRate' dengan nilai default '0.11' (11%). Fungsi mengembalikan hasil perkalian 'amount * taxRate'.",
    "starterCode": "// Tulis fungsi calculateTax dengan default parameter di sini\n",
    "solutionCode": "function calculateTax(amount, taxRate = 0.11) {\n  return amount * taxRate;\n}",
    "validationRules": [
      "calculateTax",
      "taxRate = 0.11",
      "return amount * taxRate"
    ],
    "quickShortcuts": [
      "function calculateTax(amount, taxRate = 0.11) {",
      "return amount * taxRate;",
      "}"
    ],
    "explanation": "Default parameter menetapkan nilai cadangan otomatis ketika argumen fungsi tidak diberikan atau bernilai undefined saat pemanggilan.",
    "workedExample": {
      "kasusSerupa": "Menetapkan nilai default nama sapaan pengguna jika parameter nama kosong.",
      "jawabanBenarContoh": "function sayHello(name = 'Sahabat') {\n  return `Halo ${name}`;\n}",
      "nalarBayi": "Bila pemanggil fungsi lupa memasukkan angka pajak, jangan biarkan program crash! Pasang pelampung pengaman otomatis taxRate = 0.11!"
    },
    "index": 28
  },
  {
    "id": "code-js-9",
    "language": "JavaScript",
    "category": "2. JavaScript Modern ES6+ (20 Soal)",
    "title": "Ternary Operator: Evaluasi Kelulusan Siswa",
    "description": "Buatlah fungsi 'checkExamResult' yang menerima parameter 'score'. Gunakan ternary operator (? :) untuk mengembalikan string 'LULUS' jika score >= 75, dan 'REMIDI' jika di bawah 75.",
    "starterCode": "// Tulis fungsi checkExamResult dengan ternary operator\n",
    "solutionCode": "function checkExamResult(score) {\n  return score >= 75 ? 'LULUS' : 'REMIDI';\n}",
    "validationRules": [
      "checkExamResult",
      "score >= 75 ?",
      "'LULUS'",
      "'REMIDI'"
    ],
    "quickShortcuts": [
      "function checkExamResult(score) {",
      "return score >= 75 ? 'LULUS' : 'REMIDI';",
      "}"
    ],
    "explanation": "Ternary operator menyediakan ekspresi kondisional satu baris ringkas pengganti blok if-else sederhana.",
    "workedExample": {
      "kasusSerupa": "Menentukan status keanggotaan premium berdasarkan kepemilikan langganan aktif.",
      "jawabanBenarContoh": "const memberType = isSubscribed ? 'VIP' : 'Reguler';",
      "nalarBayi": "Ternary operator adalah saklar dua cabang: apakah skor >= 75? Bila ya (?) beri 'LULUS', bila tidak (:) beri 'REMIDI'!"
    },
    "index": 29
  },
  {
    "id": "code-js-10",
    "language": "JavaScript",
    "category": "2. JavaScript Modern ES6+ (20 Soal)",
    "title": "Array .find(): Mencari Objek Berdasarkan ID",
    "description": "Diberikan array 'products'. Gunakan metode .find() untuk mencari satu objek produk yang memiliki properti 'id === targetId' dan simpan hasilnya ke variabel 'foundProduct'.",
    "starterCode": "const products = [\n  { id: 101, name: 'Mouse' },\n  { id: 102, name: 'Keyboard' }\n];\nconst targetId = 102;\n// Cari objek produk menggunakan .find()\n",
    "solutionCode": "const products = [{ id: 101, name: 'Mouse' }, { id: 102, name: 'Keyboard' }];\nconst targetId = 102;\nconst foundProduct = products.find(p => p.id === targetId);",
    "validationRules": [
      "foundProduct",
      ".find(",
      "p.id === targetId"
    ],
    "quickShortcuts": [
      "const foundProduct = products.find(p => p.id === targetId);"
    ],
    "explanation": "Metode .find() mengembalikan elemen pertama yang memenuhi kondisi predikat dan langsung menghentikan pencarian begitu elemen ditemukan.",
    "workedExample": {
      "kasusSerupa": "Mencari akun pengguna pertama yang memiliki hak akses role 'admin'.",
      "jawabanBenarContoh": "const admin = users.find(u => u.role === 'admin');",
      "nalarBayi": "Berbeda dengan .filter() yang mengumpulkan banyak barang, .find() adalah pencari buronan yang berhenti mencari begitu menemukan orang pertama yang cocok!"
    },
    "index": 30
  },
  {
    "id": "code-js-11",
    "language": "JavaScript",
    "category": "2. JavaScript Modern ES6+ (20 Soal)",
    "title": "String .includes(): Memeriksa Kata Kunci Pencarian",
    "description": "Buatlah fungsi 'containsKeyword' yang menerima parameter 'text' dan 'keyword', lalu mengembalikan boolean true jika 'text' mengandung 'keyword' menggunakan metode .includes().",
    "starterCode": "// Tulis fungsi containsKeyword di sini\n",
    "solutionCode": "function containsKeyword(text, keyword) {\n  return text.includes(keyword);\n}",
    "validationRules": [
      "containsKeyword",
      "text.includes(keyword)",
      "return"
    ],
    "quickShortcuts": [
      "function containsKeyword(text, keyword) {",
      "return text.includes(keyword);",
      "}"
    ],
    "explanation": "Metode string .includes() melakukan pemeriksaan substring peka huruf besar-kecil dan menghasilkan nilai boolean true atau false.",
    "workedExample": {
      "kasusSerupa": "Memeriksa apakah sebuah array daftar peran mengandung peran tertentu.",
      "jawabanBenarContoh": "const hasAdmin = roles.includes('admin');",
      "nalarBayi": "Metode .includes() adalah anjing pelacak kata: ia mengendus seluruh kalimat dan menjawab ya (true) bila menemukan kata buronan di dalamnya!"
    },
    "index": 31
  },
  {
    "id": "code-js-12",
    "language": "JavaScript",
    "category": "2. JavaScript Modern ES6+ (20 Soal)",
    "title": "Object.keys() dan Object.values(): Menghitung Properti Objek",
    "description": "Buatlah fungsi 'countProperties' yang menerima sebuah objek 'data' dan mengembalikan jumlah total properti kunci di dalamnya menggunakan Object.keys().length.",
    "starterCode": "// Tulis fungsi countProperties di sini\n",
    "solutionCode": "function countProperties(data) {\n  return Object.keys(data).length;\n}",
    "validationRules": [
      "countProperties",
      "Object.keys(data)",
      ".length"
    ],
    "quickShortcuts": [
      "function countProperties(data) {",
      "return Object.keys(data).length;",
      "}"
    ],
    "explanation": "Object.keys() mengekstrak semua nama properti terhitung dari suatu objek ke dalam bentuk array string.",
    "workedExample": {
      "kasusSerupa": "Mengekstrak seluruh nilai (values) dari objek dan menjumlahkannya.",
      "jawabanBenarContoh": "const total = Object.values(scores).reduce((a, b) => a + b, 0);",
      "nalarBayi": "Objek tidak punya properti .length langsung. Panggil Object.keys(data) untuk menghitung berapa banyak kunci pintu yang dimiliki rumah tersebut!"
    },
    "index": 32
  },
  {
    "id": "code-js-13",
    "language": "JavaScript",
    "category": "2. JavaScript Modern ES6+ (20 Soal)",
    "title": "Promise: Membuat Janji Asinkron dengan Resolve & Reject",
    "description": "Buatlah fungsi 'fetchStatus' yang mengembalikan sebuah Promise baru. Di dalamnya, panggil resolve('SUKSES') secara langsung.",
    "starterCode": "// Tulis fungsi fetchStatus yang mengembalikan Promise\n",
    "solutionCode": "function fetchStatus() {\n  return new Promise((resolve, reject) => {\n    resolve('SUKSES');\n  });\n}",
    "validationRules": [
      "fetchStatus",
      "new Promise",
      "resolve",
      "resolve('SUKSES')"
    ],
    "quickShortcuts": [
      "function fetchStatus() {",
      "return new Promise((resolve, reject) => {",
      "resolve('SUKSES');",
      "});",
      "}"
    ],
    "explanation": "Promise adalah objek representasi penyelesaian (resolve) atau kegagalan (reject) dari suatu operasi asinkron.",
    "workedExample": {
      "kasusSerupa": "Membuat Promise yang menolak dengan pesan kesalahan jika data tidak ditemukan.",
      "jawabanBenarContoh": "const checkUser = new Promise((resolve, reject) => {\n  reject(new Error('User Not Found'));\n});",
      "nalarBayi": "Promise adalah nota pesanan martabak: kamu pegang notanya, dan saat martabak matang pelayan memanggil resolve('Martabak Siap')!"
    },
    "index": 33
  },
  {
    "id": "code-js-14",
    "language": "JavaScript",
    "category": "2. JavaScript Modern ES6+ (20 Soal)",
    "title": "Async / Await: Memanggil API dengan Penanganan Try-Catch",
    "description": "Buatlah fungsi asinkron 'loadData' dengan kata kunci 'async'. Di dalam blok try, lakukan 'const res = await fetch(url);' dan kembalikan 'await res.json();'. Jika terjadi error di blok catch, kembalikan null.",
    "starterCode": "// Tulis fungsi async loadData di sini\n",
    "solutionCode": "async function loadData(url) {\n  try {\n    const res = await fetch(url);\n    return await res.json();\n  } catch (error) {\n    return null;\n  }\n}",
    "validationRules": [
      "async function loadData",
      "try",
      "await fetch(url)",
      "await res.json()",
      "catch",
      "return null"
    ],
    "quickShortcuts": [
      "async function loadData(url) {",
      "try {",
      "const res = await fetch(url);",
      "return await res.json();",
      "} catch (error) {",
      "return null;",
      "}",
      "}"
    ],
    "explanation": "Kombinasi async/await membuat alur kode asinkron tampak sekuensial dan mudah dibaca layaknya kode sinkron biasa, dengan try-catch sebagai penangkap error.",
    "workedExample": {
      "kasusSerupa": "Membuat fungsi async yang menunggu waktu tunda menggunakan setTimeout Promise.",
      "jawabanBenarContoh": "async function delay(ms) {\n  await new Promise(r => setTimeout(r, ms));\n}",
      "nalarBayi": "Kata kunci async memberi tahu bahwa fungsi ini punya tugas menunggu (await). Blok try-catch adalah sabuk pengaman bila koneksi internet putus!"
    },
    "index": 34
  },
  {
    "id": "code-js-15",
    "language": "JavaScript",
    "category": "2. JavaScript Modern ES6+ (20 Soal)",
    "title": "DOM Manipulation: Mengubah Teks & Kelas Elemen",
    "description": "Tulis kode JavaScript untuk mencari elemen dengan id 'status-box' menggunakan document.getElementById(), lalu ubah teksnya (.textContent) menjadi 'BERHASIL' dan tambahkan kelas 'success' (.classList.add('success')).",
    "starterCode": "// Cari status-box, ubah teks, dan tambah kelas success\n",
    "solutionCode": "const el = document.getElementById('status-box');\nif (el) {\n  el.textContent = 'BERHASIL';\n  el.classList.add('success');\n}",
    "validationRules": [
      "document.getElementById('status-box')",
      ".textContent = 'BERHASIL'",
      ".classList.add('success')"
    ],
    "quickShortcuts": [
      "const el = document.getElementById('status-box');",
      "el.textContent = 'BERHASIL';",
      "el.classList.add('success');"
    ],
    "explanation": "Manipulasi DOM menghubungkan logika JavaScript ke tampilan visual halaman HTML di browser.",
    "workedExample": {
      "kasusSerupa": "Menghapus kelas CSS dan menyembunyikan elemen modal.",
      "jawabanBenarContoh": "document.getElementById('modal').style.display = 'none';",
      "nalarBayi": "document.getElementById() mencari alamat rumah di layar, .textContent menulis papan nama baru, dan classList.add() mengecat temboknya jadi hijau!"
    },
    "index": 35
  },
  {
    "id": "code-js-16",
    "language": "JavaScript",
    "category": "2. JavaScript Modern ES6+ (20 Soal)",
    "title": "Event Listener: Menangani Klik Tombol (addEventListener)",
    "description": "Tulis kode untuk menambahkan event listener 'click' pada elemen tombol dengan id 'btn-save' menggunakan .addEventListener(), yang memanggil fungsi console.log('Tersimpan').",
    "starterCode": "// Tambahkan click event listener pada #btn-save\n",
    "solutionCode": "const saveBtn = document.getElementById('btn-save');\nif (saveBtn) {\n  saveBtn.addEventListener('click', () => {\n    console.log('Tersimpan');\n  });\n}",
    "validationRules": [
      "document.getElementById('btn-save')",
      ".addEventListener('click'",
      "console.log('Tersimpan')"
    ],
    "quickShortcuts": [
      "saveBtn.addEventListener('click', () => {",
      "console.log('Tersimpan');",
      "});"
    ],
    "explanation": "addEventListener mengaitkan penangan fungsi (handler) ke peristiwa DOM tanpa menimpa event handler lain yang sudah ada.",
    "workedExample": {
      "kasusSerupa": "Mendengarkan event masukan input teks pada kolom formulir (event input).",
      "jawabanBenarContoh": "inputEl.addEventListener('input', (e) => {\n  console.log(e.target.value);\n});",
      "nalarBayi": "addEventListener memasang bel sensor pada tombol: setiap kali jari pengguna menekan bel (click), bel langsung membunyikan perintah kode di dalamnya!"
    },
    "index": 36
  },
  {
    "id": "code-js-17",
    "language": "JavaScript",
    "category": "2. JavaScript Modern ES6+ (20 Soal)",
    "title": "JSON.stringify dan JSON.parse: Konversi Data Teks & Objek",
    "description": "Buatlah fungsi 'cloneObject' yang menerima objek 'data', lalu menghasilkan salinan kloning mandiri baru menggunakan JSON.parse(JSON.stringify(data)).",
    "starterCode": "// Tulis fungsi cloneObject di sini\n",
    "solutionCode": "function cloneObject(data) {\n  return JSON.parse(JSON.stringify(data));\n}",
    "validationRules": [
      "cloneObject",
      "JSON.parse(",
      "JSON.stringify(data)"
    ],
    "quickShortcuts": [
      "function cloneObject(data) {",
      "return JSON.parse(JSON.stringify(data));",
      "}"
    ],
    "explanation": "Kombinasi JSON.stringify dan JSON.parse adalah trik klasik membuat salinan mendalam (deep clone) objek tanpa mereferensikan memori objek lama.",
    "workedExample": {
      "kasusSerupa": "Menyimpan objek pengguna ke dalam string penyimpanan browser LocalStorage.",
      "jawabanBenarContoh": "localStorage.setItem('user', JSON.stringify(userData));",
      "nalarBayi": "JSON.stringify membungkus mainan lego jadi kardus teks paket, lalu JSON.parse membongkar kardus tersebut jadi replika mainan lego yang baru!"
    },
    "index": 37
  },
  {
    "id": "code-js-18",
    "language": "JavaScript",
    "category": "2. JavaScript Modern ES6+ (20 Soal)",
    "title": "Regular Expression (Regex): Validasi Angka Digit",
    "description": "Buatlah fungsi 'isAllDigits' yang menerima string 'str'. Gunakan regex '/^\\d+$/' dengan metode .test(str) untuk mengembalikan boolean true jika string hanya berisi angka.",
    "starterCode": "// Tulis fungsi isAllDigits dengan regex di sini\n",
    "solutionCode": "function isAllDigits(str) {\n  return /^\\d+$/.test(str);\n}",
    "validationRules": [
      "isAllDigits",
      "/^\\d+$/",
      ".test(str)"
    ],
    "quickShortcuts": [
      "function isAllDigits(str) {",
      "return /^\\d+$/.test(str);",
      "}"
    ],
    "explanation": "Metode RegExp.prototype.test() memeriksa apakah string masukan cocok dengan pola ekspresi reguler dan menghasilkan boolean true/false.",
    "workedExample": {
      "kasusSerupa": "Memvalidasi format nomor HP Indonesia yang diawali '08'.",
      "jawabanBenarContoh": "function isIndoPhone(p) {\n  return /^08\\d{8,11}$/.test(p);\n}",
      "nalarBayi": "Pola /^\\d+$/ adalah satpam bandara: dari awal (^) sampai akhir ($) ia memeriksa bahwa setiap penumpang adalah angka digit murni (\\d+)!"
    },
    "index": 38
  },
  {
    "id": "code-js-19",
    "language": "JavaScript",
    "category": "2. JavaScript Modern ES6+ (20 Soal)",
    "title": "Array .sort(): Mengurutkan Angka Secara Ascending",
    "description": "Diberikan array 'numbers = [40, 100, 1, 5, 25]'. Urutkan array tersebut dari angka terkecil ke terbesar menggunakan fungsi pembanding .sort((a, b) => a - b).",
    "starterCode": "const numbers = [40, 100, 1, 5, 25];\n// Urutkan numbers secara ascending\n",
    "solutionCode": "const numbers = [40, 100, 1, 5, 25];\nnumbers.sort((a, b) => a - b);",
    "validationRules": [
      "numbers.sort(",
      "(a, b) => a - b"
    ],
    "quickShortcuts": [
      "numbers.sort((a, b) => a - b);"
    ],
    "explanation": "Secara default .sort() mengurutkan elemen sebagai string kamus UTF-16 ('25' sebelum '5'). Fungsi pembanding (a, b) => a - b mutlak diperlukan untuk perbandingan numerik yang benar.",
    "workedExample": {
      "kasusSerupa": "Mengurutkan array objek produk berdasarkan harga termurah ke termahal.",
      "jawabanBenarContoh": "products.sort((a, b) => a.price - b.price);",
      "nalarBayi": "Tanpa (a - b), komputer mengira angka 100 lebih kecil dari 25 karena diawali huruf '1'. Selalu beri rumus pengurangan (a - b) untuk urutan angka yang benar!"
    },
    "index": 39
  },
  {
    "id": "code-js-20",
    "language": "JavaScript",
    "category": "2. JavaScript Modern ES6+ (20 Soal)",
    "title": "Set: Menghilangkan Duplikasi Nilai dalam Array",
    "description": "Buatlah fungsi 'removeDuplicates' yang menerima array 'arr', lalu mengembalikan array baru tanpa elemen duplikat menggunakan 'Array.from(new Set(arr))' atau spread operator '[...new Set(arr)]'.",
    "starterCode": "// Tulis fungsi removeDuplicates di sini\n",
    "solutionCode": "function removeDuplicates(arr) {\n  return [...new Set(arr)];\n}",
    "validationRules": [
      "removeDuplicates",
      "new Set(arr)",
      "[...new Set(arr)]"
    ],
    "quickShortcuts": [
      "function removeDuplicates(arr) {",
      "return [...new Set(arr)];",
      "}"
    ],
    "explanation": "Objek Set di JavaScript adalah kumpulan nilai unik. Mengonversi array ke Set dan kembali ke array adalah cara tercepat menghapus elemen ganda.",
    "workedExample": {
      "kasusSerupa": "Menghitung jumlah kategori unik dari daftar transaksi e-commerce.",
      "jawabanBenarContoh": "const uniqueCategoryCount = new Set(transactions.map(t => t.category)).size;",
      "nalarBayi": "Set adalah klub eksklusif yang melarang orang kembar: masukkan array penuh duplikat ke dalam Set, dan ia otomatis membuang semua barang kembar!"
    },
    "index": 40
  },
  {
    "id": "code-py-1",
    "language": "Python",
    "category": "3. Python Data & Algorithms (20 Soal)",
    "title": "Menghitung Rata-rata Nilai Siswa dari List",
    "description": "Buat fungsi hitung_rata_rata(nilai_list) yang menerima sebuah list angka nilai dan mengembalikan rata-rata aritmatika menggunakan sum() dan len().",
    "starterCode": "def hitung_rata_rata(nilai_list):\n    # Hitung dan kembalikan nilai rata-rata di sini\n    pass",
    "solutionCode": "def hitung_rata_rata(nilai_list):\n    if not nilai_list:\n        return 0\n    return sum(nilai_list) / len(nilai_list)",
    "validationRules": [
      "def hitung_rata_rata",
      "sum(",
      "len(",
      "return "
    ],
    "quickShortcuts": [
      "def ",
      "return ",
      "sum(",
      "len(",
      "if ",
      "not ",
      "nilai_list",
      " / "
    ],
    "explanation": "Fungsi sum() menjumlahkan seluruh elemen dalam list angka, dan len() menghitung total banyaknya data. Pembagian sum() / len() menghasilkan nilai rerata.",
    "workedExample": {
      "kasusSerupa": "Menghitung total pengeluaran belanja mingguan dari list harga belanjaan.",
      "jawabanBenarContoh": "def total_belanja(daftar_harga):\n    return sum(daftar_harga)",
      "nalarBayi": "Kodi menumpuk semua kelereng angka dengan sum(), lalu membaginya rata ke wadah mangkuk sebanyak len() kelereng!"
    },
    "index": 41
  },
  {
    "id": "code-py-2",
    "language": "Python",
    "category": "3. Python Data & Algorithms (20 Soal)",
    "title": "Filter Bilangan Genap dengan List Comprehension",
    "description": "Buat fungsi saring_genap(angka_list) yang menerima list angka dan mengembalikan list baru hanya berisi bilangan genap menggunakan list comprehension [x for x in ... if x % 2 == 0].",
    "starterCode": "def saring_genap(angka_list):\n    # Gunakan list comprehension untuk memfilter genap\n    pass",
    "solutionCode": "def saring_genap(angka_list):\n    return [x for x in angka_list if x % 2 == 0]",
    "validationRules": [
      "def saring_genap",
      "for ",
      " in ",
      "% 2 ==",
      "return "
    ],
    "quickShortcuts": [
      "[",
      "]",
      "for ",
      " in ",
      "if ",
      "% 2 == 0",
      "return ",
      "angka_list"
    ],
    "explanation": "List comprehension [x for x in data if kondisi] adalah sintaks khas Python untuk menyaring elemen secara ringkas dan efisien tanpa loop for manual bertumpuk.",
    "workedExample": {
      "kasusSerupa": "Menyaring bilangan ganjil dari list angka menggunakan list comprehension.",
      "jawabanBenarContoh": "def saring_ganjil(daftar_angka):\n    return [n for n in daftar_angka if n % 2 != 0]",
      "nalarBayi": "Kodi punya saringan santan: jika angka dibagi 2 sisanya nol (genap), maka lolos ke keranjang baru Kodi!"
    },
    "index": 42
  },
  {
    "id": "code-py-3",
    "language": "Python",
    "category": "3. Python Data & Algorithms (20 Soal)",
    "title": "Mencari Nilai Maksimum dan Minimum dalam List",
    "description": "Buat fungsi cari_ekstrim(angka_list) yang mengembalikan sebuah tuple (nilai_min, nilai_max) menggunakan fungsi bawaan min() dan max().",
    "starterCode": "def cari_ekstrim(angka_list):\n    # Kembalikan tuple (nilai_terendah, nilai_tertinggi)\n    pass",
    "solutionCode": "def cari_ekstrim(angka_list):\n    return (min(angka_list), max(angka_list))",
    "validationRules": [
      "def cari_ekstrim",
      "min(",
      "max(",
      "return "
    ],
    "quickShortcuts": [
      "def ",
      "min(",
      "max(",
      "return (",
      ")",
      "angka_list",
      ", "
    ],
    "explanation": "Fungsi bawaan Python min() mencari nilai terendah dan max() mencari nilai tertinggi dalam koleksi data urut terindeks.",
    "workedExample": {
      "kasusSerupa": "Mencari selisih selang rentang (range) antara nilai tertinggi dan terendah.",
      "jawabanBenarContoh": "def hitung_rentang(data):\n    return max(data) - min(data)",
      "nalarBayi": "Kodi menunjuk si kerdil dengan min() dan si raksasa dengan max(), lalu memasangkan keduanya di ransel!"
    },
    "index": 43
  },
  {
    "id": "code-py-4",
    "language": "Python",
    "category": "3. Python Data & Algorithms (20 Soal)",
    "title": "Menghitung Frekuensi Kemunculan Karakter dengan Dictionary",
    "description": "Buat fungsi hitung_frekuensi(teks) yang menghitung berapa kali setiap karakter muncul dalam string teks dan mengembalikannya dalam bentuk dictionary Python.",
    "starterCode": "def hitung_frekuensi(teks):\n    # Hitung kemunculan karakter dan kembalikan dict\n    pass",
    "solutionCode": "def hitung_frekuensi(teks):\n    frek = {}\n    for char in teks:\n        frek[char] = frek.get(char, 0) + 1\n    return frek",
    "validationRules": [
      "def hitung_frekuensi",
      "for ",
      " in teks",
      "return "
    ],
    "quickShortcuts": [
      "frek = {}",
      "for char in teks:",
      "frek[char] = ",
      ".get(",
      ", 0) + 1",
      "return "
    ],
    "explanation": "Dictionary menyimpan pasangan kunci dan nilai. Metode dict.get(key, default) memudahkan menghitung frekuensi tanpa memicu KeyError saat kunci baru pertama kali ditemui.",
    "workedExample": {
      "kasusSerupa": "Menghitung kemunculan kata-kata dalam list kalimat.",
      "jawabanBenarContoh": "def frekuensi_kata(list_kata):\n    hasil = {}\n    for kata in list_kata:\n        hasil[kata] = hasil.get(kata, 0) + 1\n    return hasil",
      "nalarBayi": "Setiap ada huruf baru lewat, Kodi buatkan laci nama huruf itu dan taruh 1 batu. Kalau lewat lagi, batunya ditambah!"
    },
    "index": 44
  },
  {
    "id": "code-py-5",
    "language": "Python",
    "category": "3. Python Data & Algorithms (20 Soal)",
    "title": "Membalik Urutan String dengan Slicing Step Negatif",
    "description": "Buat fungsi balik_string(teks) yang mengembalikan teks dalam urutan terbalik dari belakang ke depan menggunakan slicing khas Python [::-1].",
    "starterCode": "def balik_string(teks):\n    # Balik teks dengan teknik slicing\n    pass",
    "solutionCode": "def balik_string(teks):\n    return teks[::-1]",
    "validationRules": [
      "def balik_string",
      "[::-1]",
      "return "
    ],
    "quickShortcuts": [
      "def ",
      "teks[::-1]",
      "return ",
      "teks",
      "[",
      ":",
      "-1]"
    ],
    "explanation": "Slicing urutan teks[start:stop:step] dengan langkah step -1 akan menyusuri karakter dari indeks paling akhir mundur ke indeks awal.",
    "workedExample": {
      "kasusSerupa": "Mengambil 3 huruf terakhir dari sebuah string kode transaksi.",
      "jawabanBenarContoh": "def ambil_ekor(kode):\n    return kode[-3:]",
      "nalarBayi": "Kodi jalan mundur dari pintu belakang ke pintu depan dengan jurus [::-1]!"
    },
    "index": 45
  },
  {
    "id": "code-py-6",
    "language": "Python",
    "category": "3. Python Data & Algorithms (20 Soal)",
    "title": "Memeriksa Kata Palindrom",
    "description": "Buat fungsi cek_palindrom(kata) yang memeriksa apakah suatu kata sama jika dibaca dari depan maupun belakang (abaikan kapitalisasi dengan .lower()). Kembalikan True atau False.",
    "starterCode": "def cek_palindrom(kata):\n    # Cek apakah kata sama bolak-balik\n    pass",
    "solutionCode": "def cek_palindrom(kata):\n    kata_bersih = kata.lower()\n    return kata_bersih == kata_bersih[::-1]",
    "validationRules": [
      "def cek_palindrom",
      ".lower()",
      "==",
      "[::-1]",
      "return "
    ],
    "quickShortcuts": [
      "def ",
      ".lower()",
      "==",
      "[::-1]",
      "return ",
      "kata",
      "kata_bersih"
    ],
    "explanation": "Kata palindrom (seperti 'Katak' atau 'Radar') memiliki urutan karakter simetris. Membandingkan kata berhuruf kecil dengan versi terbaliknya memastikan validasi akurat.",
    "workedExample": {
      "kasusSerupa": "Memeriksa apakah angka integer adalah palindrom simetris.",
      "jawabanBenarContoh": "def angka_palindrom(n):\n    s = str(n)\n    return s == s[::-1]",
      "nalarBayi": "Kodi mengecilkan semua huruf lalu mencocokkan wajah asli dengan bayangan cerminnya!"
    },
    "index": 46
  },
  {
    "id": "code-py-7",
    "language": "Python",
    "category": "3. Python Data & Algorithms (20 Soal)",
    "title": "Filter Data Karyawan Berdasarkan Gaji Minimum",
    "description": "Buat fungsi filter_karyawan(daftar_karyawan, gaji_min) yang menerima list dictionary [{ 'nama': '...', 'gaji': ... }] dan mengembalikan list nama karyawan yang memiliki gaji >= gaji_min.",
    "starterCode": "def filter_karyawan(daftar_karyawan, gaji_min):\n    # Kembalikan list nama yang memenuhi kriteria\n    pass",
    "solutionCode": "def filter_karyawan(daftar_karyawan, gaji_min):\n    return [k['nama'] for k in daftar_karyawan if k['gaji'] >= gaji_min]",
    "validationRules": [
      "def filter_karyawan",
      "for ",
      "['nama']",
      "['gaji'] >=",
      "return "
    ],
    "quickShortcuts": [
      "[",
      "]",
      "for k in daftar_karyawan",
      "if k['gaji'] >= gaji_min",
      "k['nama']",
      "return "
    ],
    "explanation": "Mengakses field dictionary dengan notasi kurung siku k['nama'] di dalam filter comprehension memungkinkan seleksi atribut spesifik secara elegan.",
    "workedExample": {
      "kasusSerupa": "Menyaring nama produk yang stoknya habis (stok == 0) dari list data barang.",
      "jawabanBenarContoh": "def produk_habis(list_barang):\n    return [b['nama'] for b in list_barang if b['stok'] == 0]",
      "nalarBayi": "Kodi membuka buku absensi, mengecek dompet setiap orang, lalu mencatat nama siapa saja yang gajinya lolos batas!"
    },
    "index": 47
  },
  {
    "id": "code-py-8",
    "language": "Python",
    "category": "3. Python Data & Algorithms (20 Soal)",
    "title": "Fungsi Konversi Suhu Celsius ke Fahrenheit & Kelvin",
    "description": "Buat fungsi konversi_suhu(celsius) yang mengembalikan dictionary {'fahrenheit': F, 'kelvin': K}. Rumus: F = (celsius * 9/5) + 32, K = celsius + 273.15.",
    "starterCode": "def konversi_suhu(celsius):\n    # Hitung suhu F dan K lalu kembalikan dictionary\n    pass",
    "solutionCode": "def konversi_suhu(celsius):\n    f = (celsius * 9/5) + 32\n    k = celsius + 273.15\n    return {'fahrenheit': f, 'kelvin': k}",
    "validationRules": [
      "def konversi_suhu",
      "* 9/5",
      "+ 32",
      "+ 273.15",
      "'fahrenheit':",
      "'kelvin':",
      "return "
    ],
    "quickShortcuts": [
      "def ",
      "celsius * 9/5 + 32",
      "celsius + 273.15",
      "{'fahrenheit': ",
      "'kelvin': ",
      "}",
      "return "
    ],
    "explanation": "Fungsi matematika Python mendukung operasi perkalian desimal dan pengemasan nilai keluaran majemuk dalam dictionary berlabel jelas.",
    "workedExample": {
      "kasusSerupa": "Mengonversi jarak kilometer menjadi meter dan milimeter dalam dictionary.",
      "jawabanBenarContoh": "def konversi_jarak(km):\n    return {'meter': km * 1000, 'cm': km * 100000}",
      "nalarBayi": "Kodi memasukkan termometer Celsius, lalu menghitung dua skala baru dan menyimpannya dalam dua toples bernama!"
    },
    "index": 48
  },
  {
    "id": "code-py-9",
    "language": "Python",
    "category": "3. Python Data & Algorithms (20 Soal)",
    "title": "Menghitung Jumlah Huruf Vokal dalam Kalimat",
    "description": "Buat fungsi hitung_vokal(kalimat) yang menghitung total banyaknya huruf vokal ('a', 'i', 'u', 'e', 'o', kapital maupun non-kapital) di dalam string kalimat.",
    "starterCode": "def hitung_vokal(kalimat):\n    # Hitung jumlah kemunculan vokal\n    pass",
    "solutionCode": "def hitung_vokal(kalimat):\n    vokal = 'aiueoAIUEO'\n    return sum(1 for char in kalimat if char in vokal)",
    "validationRules": [
      "def hitung_vokal",
      "in ",
      "for ",
      "return "
    ],
    "quickShortcuts": [
      "def ",
      "vokal = 'aiueoAIUEO'",
      "sum(1 for char in kalimat if char in vokal)",
      "return "
    ],
    "explanation": "Operator keanggotaan 'in' memeriksa apakah suatu huruf merupakan salah satu elemen dari himpunan huruf vokal.",
    "workedExample": {
      "kasusSerupa": "Menghitung banyaknya angka numerik (0-9) di dalam sebuah string password.",
      "jawabanBenarContoh": "def hitung_angka(teks):\n    return sum(1 for c in teks if c.isdigit())",
      "nalarBayi": "Kodi melingkari huruf yang suaranya terbuka (A-I-U-E-O), lalu menghitung jumlah lingkaran yang terkumpul!"
    },
    "index": 49
  },
  {
    "id": "code-py-10",
    "language": "Python",
    "category": "3. Python Data & Algorithms (20 Soal)",
    "title": "Validasi Panjang dan Format Angka ID Kartu",
    "description": "Buat fungsi validasi_id(kode_id, panjang_target) yang mengembalikan True jika kode_id hanya terdiri dari karakter angka (.isdigit()) dan panjang karakternya tepat sama dengan panjang_target.",
    "starterCode": "def validasi_id(kode_id, panjang_target):\n    # Cek format isdigit dan panjang karakter\n    pass",
    "solutionCode": "def validasi_id(kode_id, panjang_target):\n    return kode_id.isdigit() and len(kode_id) == panjang_target",
    "validationRules": [
      "def validasi_id",
      ".isdigit()",
      "len(",
      "==",
      "return "
    ],
    "quickShortcuts": [
      "def ",
      ".isdigit()",
      "and ",
      "len(",
      ") == ",
      "return "
    ],
    "explanation": "Metode str.isdigit() memastikan tidak ada huruf atau simbol lain selain angka, dan len() memastikan jumlah digit sesuai regulasi.",
    "workedExample": {
      "kasusSerupa": "Memeriksa apakah kode pos terdiri dari tepat 5 digit angka.",
      "jawabanBenarContoh": "def cek_kode_pos(kode):\n    return kode.isdigit() and len(kode) == 5",
      "nalarBayi": "Kodi mengecek dengan kaca pembesar: semua karakter harus angka dan jumlahnya tidak boleh kurang atau lebih satu biji pun!"
    },
    "index": 50
  },
  {
    "id": "code-py-11",
    "language": "Python",
    "category": "3. Python Data & Algorithms (20 Soal)",
    "title": "Menghapus Duplikat List dengan Menjaga Urutan Elemen",
    "description": "Buat fungsi hapus_duplikat(daftar) yang menghapus nilai kembar tanpa mengubah urutan asli kemunculan pertama elemen tersebut.",
    "starterCode": "def hapus_duplikat(daftar):\n    # Hapus elemen kembar dan jaga urutan awal\n    pass",
    "solutionCode": "def hapus_duplikat(daftar):\n    hasil = []\n    for item in daftar:\n        if item not in hasil:\n            hasil.append(item)\n    return hasil",
    "validationRules": [
      "def hapus_duplikat",
      "for ",
      "not in",
      ".append(",
      "return "
    ],
    "quickShortcuts": [
      "hasil = []",
      "for item in daftar:",
      "if item not in hasil:",
      "hasil.append(item)",
      "return hasil"
    ],
    "explanation": "Menggunakan loop dengan pengecekan 'item not in hasil' mempertahankan urutan kemunculan pertama, berbeda dengan set() biasa yang mengacak urutan.",
    "workedExample": {
      "kasusSerupa": "Menghapus kata-kata duplikat dari list riwayat pencarian pengguna.",
      "jawabanBenarContoh": "def riwayat_unik(list_query):\n    unik = []\n    for q in list_query:\n        if q not in unik:\n            unik.append(q)\n    return unik",
      "nalarBayi": "Kodi menyusun antrean: kalau orangnya sudah pernah masuk barisan, yang kembar disuruh minggir!"
    },
    "index": 51
  },
  {
    "id": "code-py-12",
    "language": "Python",
    "category": "3. Python Data & Algorithms (20 Soal)",
    "title": "Class PersegiPanjang dengan Method Luas & Keliling",
    "description": "Buat class PersegiPanjang dengan constructor __init__(self, panjang, lebar) serta dua method: hitung_luas() yang mengembalikan p*l, dan hitung_keliling() yang mengembalikan 2*(p+l).",
    "starterCode": "class PersegiPanjang:\n    # Buat constructor dan kedua method\n    pass",
    "solutionCode": "class PersegiPanjang:\n    def __init__(self, panjang, lebar):\n        self.panjang = panjang\n        self.lebar = lebar\n    def hitung_luas(self):\n        return self.panjang * self.lebar\n    def hitung_keliling(self):\n        return 2 * (self.panjang + self.lebar)",
    "validationRules": [
      "class PersegiPanjang:",
      "def __init__(self,",
      "def hitung_luas(self):",
      "def hitung_keliling(self):",
      "self.panjang * self.lebar"
    ],
    "quickShortcuts": [
      "class PersegiPanjang:",
      "def __init__(self, panjang, lebar):",
      "self.panjang = panjang",
      "self.lebar = lebar",
      "def hitung_luas(self):",
      "def hitung_keliling(self):"
    ],
    "explanation": "Class dalam Python adalah cetak biru objek. Constructor __init__ menginisialisasi atribut instansiasi via parameter 'self'.",
    "workedExample": {
      "kasusSerupa": "Membuat class SegitigaSamaSisi dengan method hitung_keliling().",
      "jawabanBenarContoh": "class SegitigaSamaSisi:\n    def __init__(self, sisi):\n        self.sisi = sisi\n    def hitung_keliling(self):\n        return 3 * self.sisi",
      "nalarBayi": "Class adalah cetakan kue persegi panjang. Kodi mencatat ukuran panjang dan lebar kuenya lalu bisa menghitung luas dan tepiannya kapan saja!"
    },
    "index": 52
  },
  {
    "id": "code-py-13",
    "language": "Python",
    "category": "3. Python Data & Algorithms (20 Soal)",
    "title": "Pewarisan Kelas (Inheritance) dengan super()",
    "description": "Buat class Karyawan dengan atribut nama & gaji_pokok. Lalu buat subclass Manajer(Karyawan) yang menambahkan atribut bonus via super().__init__(nama, gaji_pokok) dan method total_gaji() yang mengembalikan gaji_pokok + bonus.",
    "starterCode": "class Karyawan:\n    def __init__(self, nama, gaji_pokok):\n        self.nama = nama\n        self.gaji_pokok = gaji_pokok\n\nclass Manajer(Karyawan):\n    # Buat constructor Manajer dan method total_gaji\n    pass",
    "solutionCode": "class Karyawan:\n    def __init__(self, nama, gaji_pokok):\n        self.nama = nama\n        self.gaji_pokok = gaji_pokok\n\nclass Manajer(Karyawan):\n    def __init__(self, nama, gaji_pokok, bonus):\n        super().__init__(nama, gaji_pokok)\n        self.bonus = bonus\n    def total_gaji(self):\n        return self.gaji_pokok + self.bonus",
    "validationRules": [
      "class Manajer(Karyawan):",
      "super().__init__(",
      "self.bonus =",
      "def total_gaji(self):",
      "self.gaji_pokok + self.bonus"
    ],
    "quickShortcuts": [
      "class Manajer(Karyawan):",
      "super().__init__(nama, gaji_pokok)",
      "self.bonus = bonus",
      "def total_gaji(self):",
      "return self.gaji_pokok + self.bonus"
    ],
    "explanation": "Fungsi super() memanggil constructor kelas induk (parent class) sehingga tidak perlu menulis ulang kode inisialisasi yang sudah ada.",
    "workedExample": {
      "kasusSerupa": "Membuat class Kendaraan dan subclass Mobil(Kendaraan) dengan penambahan kapasitas_roda.",
      "jawabanBenarContoh": "class Kendaraan:\n    def __init__(self, merk):\n        self.merk = merk\nclass Mobil(Kendaraan):\n    def __init__(self, merk, roda):\n        super().__init__(merk)\n        self.roda = roda",
      "nalarBayi": "Anak mewarisi sifat bapak! Si Manajer meminjam setelan Karyawan lewat super(), lalu menambahkan topi bonus di kepalanya!"
    },
    "index": 53
  },
  {
    "id": "code-py-14",
    "language": "Python",
    "category": "3. Python Data & Algorithms (20 Soal)",
    "title": "Error Handling Pembagian dengan Try-Except",
    "description": "Buat fungsi bagi_aman(a, b) yang mencoba menghitung a / b. Jika terjadi ZeroDivisionError kembalikan pesan 'Tidak bisa membagi dengan nol', dan jika TypeError / ValueError kembalikan 'Input tidak valid'.",
    "starterCode": "def bagi_aman(a, b):\n    # Gunakan blok try - except untuk menangani error\n    pass",
    "solutionCode": "def bagi_aman(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return 'Tidak bisa membagi dengan nol'\n    except (TypeError, ValueError):\n        return 'Input tidak valid'",
    "validationRules": [
      "def bagi_aman",
      "try:",
      "except ZeroDivisionError",
      "return a / b"
    ],
    "quickShortcuts": [
      "try:",
      "return a / b",
      "except ZeroDivisionError:",
      "return 'Tidak bisa membagi dengan nol'",
      "except (TypeError, ValueError):",
      "return 'Input tidak valid'"
    ],
    "explanation": "Blok try-except mencegah program mengalami crash saat menghadapi input berbahaya seperti pembagian angka dengan nol.",
    "workedExample": {
      "kasusSerupa": "Mengonversi string ke integer secara aman tanpa meledak jika string berupa huruf.",
      "jawabanBenarContoh": "def ke_angka(s):\n    try:\n        return int(s)\n    except ValueError:\n        return 0",
      "nalarBayi": "Kodi memasang sabuk pengaman try. Kalau mobilnya mau menabrak pohon pembagi nol, rem except langsung bekerja menyelamatkan Kodi!"
    },
    "index": 54
  },
  {
    "id": "code-py-15",
    "language": "Python",
    "category": "3. Python Data & Algorithms (20 Soal)",
    "title": "Serialisasi dan Deserialisasi Format JSON",
    "description": "Buat fungsi proses_json(data_dict) yang mengimpor modul bawaan json, mengonversi data_dict ke string JSON dengan json.dumps(), lalu mem-parsing string tersebut kembali ke dictionary dengan json.loads() dan mengembalikannya.",
    "starterCode": "import json\n\ndef proses_json(data_dict):\n    # Gunakan json.dumps dan json.loads\n    pass",
    "solutionCode": "import json\n\ndef proses_json(data_dict):\n    teks_json = json.dumps(data_dict)\n    objek_hasil = json.loads(teks_json)\n    return objek_hasil",
    "validationRules": [
      "import json",
      "def proses_json",
      "json.dumps(",
      "json.loads(",
      "return "
    ],
    "quickShortcuts": [
      "import json",
      "json.dumps(data_dict)",
      "json.loads(",
      "return "
    ],
    "explanation": "json.dumps() mengubah struktur data Python (dict/list) menjadi format string JSON, sedangkan json.loads() membaca string JSON menjadi objek Python asli.",
    "workedExample": {
      "kasusSerupa": "Menyimpan dictionary konfigurasi aplikasi menjadi string JSON berformat rapi.",
      "jawabanBenarContoh": "import json\ndef simpan_setting(cfg):\n    return json.dumps(cfg, indent=2)",
      "nalarBayi": "json.dumps membungkus kado jadi paket pos teks kirim, dan json.loads membuka paket pos kembali jadi mainan utuh!"
    },
    "index": 55
  },
  {
    "id": "code-py-16",
    "language": "Python",
    "category": "3. Python Data & Algorithms (20 Soal)",
    "title": "Mengurutkan List of Dict Berdasarkan Nilai Tertentu dengan sorted()",
    "description": "Buat fungsi urutkan_produk(list_produk) yang menerima list dictionary [{ 'nama': '...', 'harga': ... }] dan mengembalikannya terurut dari harga termurah ke termahal menggunakan sorted() dengan parameter key=lambda x: x['harga'].",
    "starterCode": "def urutkan_produk(list_produk):\n    # Urutkan list menggunakan sorted() dan lambda key\n    pass",
    "solutionCode": "def urutkan_produk(list_produk):\n    return sorted(list_produk, key=lambda x: x['harga'])",
    "validationRules": [
      "def urutkan_produk",
      "sorted(",
      "key=lambda",
      "['harga']",
      "return "
    ],
    "quickShortcuts": [
      "sorted(",
      "key=lambda x: x['harga']",
      "list_produk",
      "return "
    ],
    "explanation": "Fungsi sorted() menerima argumen 'key' berupa fungsi satu baris (lambda) yang menentukan atribut pembanding dalam pengurutan.",
    "workedExample": {
      "kasusSerupa": "Mengurutkan list siswa berdasarkan skor tertinggi ke terendah (descending).",
      "jawabanBenarContoh": "def urut_skor(siswa):\n    return sorted(siswa, key=lambda s: s['skor'], reverse=True)",
      "nalarBayi": "Kodi menugaskan robot pelayan lambda untuk melihat label harga di setiap koper sebelum menyusun kopernya dari yang paling murah!"
    },
    "index": 56
  },
  {
    "id": "code-py-17",
    "language": "Python",
    "category": "3. Python Data & Algorithms (20 Soal)",
    "title": "Menghitung Faktorial dengan Rekursi",
    "description": "Buat fungsi faktorial(n) secara rekursif. Jika n <= 1 kembalikan 1, jika tidak kembalikan n * faktorial(n - 1).",
    "starterCode": "def faktorial(n):\n    # Basis n <= 1 return 1, selain itu n * faktorial(n-1)\n    pass",
    "solutionCode": "def faktorial(n):\n    if n <= 1:\n        return 1\n    return n * faktorial(n - 1)",
    "validationRules": [
      "def faktorial",
      "if n <=",
      "return 1",
      "faktorial(n - 1)",
      "return n *"
    ],
    "quickShortcuts": [
      "if n <= 1:",
      "return 1",
      "return n * faktorial(n - 1)",
      "def faktorial(n):"
    ],
    "explanation": "Fungsi rekursif memanggil dirinya sendiri dengan argumen yang semakin mengecil hingga mencapai kondisi berhenti (base case n <= 1).",
    "workedExample": {
      "kasusSerupa": "Menghitung penjumlahan beruntun n + (n-1) + ... + 1 secara rekursif.",
      "jawabanBenarContoh": "def total_kumulatif(n):\n    if n <= 1:\n        return 1\n    return n + total_kumulatif(n - 1)",
      "nalarBayi": "Kodi membuka boneka matryoshka satu per satu sampai bertemu boneka paling kecil nomor 1, lalu mengalikan semuanya sambil menutup boneka kembali!"
    },
    "index": 57
  },
  {
    "id": "code-py-18",
    "language": "Python",
    "category": "3. Python Data & Algorithms (20 Soal)",
    "title": "Menggabungkan Dua Dictionary Python",
    "description": "Buat fungsi gabung_profil(dict_utama, dict_tambahan) yang menggabungkan kedua dictionary menjadi satu dictionary baru menggunakan operator unpacking {**dict_utama, **dict_tambahan}.",
    "starterCode": "def gabung_profil(dict_utama, dict_tambahan):\n    # Gabungkan kedua dict dengan operator unpacking\n    pass",
    "solutionCode": "def gabung_profil(dict_utama, dict_tambahan):\n    return {**dict_utama, **dict_tambahan}",
    "validationRules": [
      "def gabung_profil",
      "{**dict_utama, **dict_tambahan}",
      "return "
    ],
    "quickShortcuts": [
      "return {**dict_utama, **dict_tambahan}",
      "**dict_utama",
      "**dict_tambahan",
      "{",
      "}"
    ],
    "explanation": "Sintaks double-asterisk ** mendekomposisi (unpack) pasangan kunci-nilai dictionary ke dalam penampung dictionary baru secara ringkas.",
    "workedExample": {
      "kasusSerupa": "Menimpa konfigurasi default aplikasi dengan opsi konfigurasi kustom dari user.",
      "jawabanBenarContoh": "def merge_config(default_cfg, custom_cfg):\n    return {**default_cfg, **custom_cfg}",
      "nalarBayi": "Kodi menumpahkan isi dua kotak mainan ke dalam satu peti besar menggunakan mantra sakti ganda bintang {**A, **B}!"
    },
    "index": 58
  },
  {
    "id": "code-py-19",
    "language": "Python",
    "category": "3. Python Data & Algorithms (20 Soal)",
    "title": "Simulasi Keranjang Belanja dengan Total dan Diskon",
    "description": "Buat fungsi hitung_total_keranjang(item_list, persen_diskon) di mana setiap item adalah tuple (nama, jumlah, harga_satuan). Hitung subtotal seluruh item, potong dengan persen_diskon (misal 10 untuk 10%), dan kembalikan total akhir setelah diskon.",
    "starterCode": "def hitung_total_keranjang(item_list, persen_diskon):\n    # Hitung subtotal barang lalu kurangi diskon\n    pass",
    "solutionCode": "def hitung_total_keranjang(item_list, persen_diskon):\n    subtotal = sum(item[1] * item[2] for item in item_list)\n    potongan = subtotal * (persen_diskon / 100)\n    return subtotal - potongan",
    "validationRules": [
      "def hitung_total_keranjang",
      "sum(",
      "* item[2]",
      "persen_diskon / 100",
      "return subtotal -"
    ],
    "quickShortcuts": [
      "subtotal = sum(item[1] * item[2] for item in item_list)",
      "potongan = subtotal * (persen_diskon / 100)",
      "return subtotal - potongan"
    ],
    "explanation": "Operasi iterasi tuple (jumlah * harga_satuan) dijumlahkan untuk mendapatkan subtotal kotor, lalu dikurangi persentase potongan untuk mendapatkan harga bersih.",
    "workedExample": {
      "kasusSerupa": "Menghitung total tagihan restoran ditambah pajak 10%.",
      "jawabanBenarContoh": "def tagihan_plus_pajak(makanan_list, persen_pajak):\n    subtotal = sum(m[1] * m[2] for m in makanan_list)\n    return subtotal + (subtotal * persen_pajak / 100)",
      "nalarBayi": "Kodi menghitung belanjaan di kasir: jumlah roti dikali harga, lalu dipotong kupon diskon persenan!"
    },
    "index": 59
  },
  {
    "id": "code-py-20",
    "language": "Python",
    "category": "3. Python Data & Algorithms (20 Soal)",
    "title": "Pemeriksa Bilangan Prima Sederhana",
    "description": "Buat fungsi cek_prima(n) yang mengembalikan True jika n adalah bilangan prima (lebih besar dari 1 dan tidak habis dibagi bilangan dari 2 hingga akar n atau int(n**0.5) + 1).",
    "starterCode": "def cek_prima(n):\n    # Cek apakah n merupakan bilangan prima\n    pass",
    "solutionCode": "def cek_prima(n):\n    if n <= 1:\n        return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            return False\n    return True",
    "validationRules": [
      "def cek_prima",
      "if n <=",
      "return False",
      "range(2,",
      "n % i == 0",
      "return True"
    ],
    "quickShortcuts": [
      "if n <= 1: return False",
      "for i in range(2, int(n**0.5) + 1):",
      "if n % i == 0: return False",
      "return True"
    ],
    "explanation": "Bilangan prima hanya memiliki 2 faktor pembagi positif: 1 dan dirinya sendiri. Cukup uji pembagian hingga batas akar kuadrat n untuk efisiensi maksimal O(sqrt(N)).",
    "workedExample": {
      "kasusSerupa": "Menghitung jumlah faktor pembagi dari sebuah bilangan bulat positif n.",
      "jawabanBenarContoh": "def hitung_faktor(n):\n    return sum(1 for i in range(1, n + 1) if n % i == 0)",
      "nalarBayi": "Kodi memeriksa apakah angka bisa dibagi rata oleh teman-temannya. Kalau ada yang bisa membagi tanpa sisa, berarti bukan prima!"
    },
    "index": 60
  },
  {
    "id": "code-java-1",
    "language": "Java",
    "category": "4. Java OOP & Structures (20 Soal)",
    "title": "Program Java Dasar & Cetak Pesan ke Konsol",
    "description": "Lengkapi class Main dengan method public static void main(String[] args) yang mencetak teks 'Halo Dunia Pemrograman!' ke konsol menggunakan System.out.println().",
    "starterCode": "public class Main {\n    public static void main(String[] args) {\n        // Tulis kode cetak konsol di sini\n        \n    }\n}",
    "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Halo Dunia Pemrograman!\");\n    }\n}",
    "validationRules": [
      "public class Main",
      "public static void main(String[] args)",
      "System.out.println(",
      "\"Halo Dunia Pemrograman!\""
    ],
    "quickShortcuts": [
      "System.out.println(\"",
      "\");",
      "public static void main",
      "String[] args",
      "{",
      "}"
    ],
    "explanation": "Method main adalah titik awal eksekusi program Java (entry point). System.out.println() menampilkan pesan ke standar output diakhiri baris baru.",
    "workedExample": {
      "kasusSerupa": "Mencetak pesan selamat datang di aplikasi bank.",
      "jawabanBenarContoh": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Selamat Datang di Bank Nusantara\");\n    }\n}",
      "nalarBayi": "System.out.println adalah megafon ajaib Java. Apapun tulisan yang dimasukkan ke dalam corongnya langsung berkumandang di layar!"
    },
    "index": 61
  },
  {
    "id": "code-java-2",
    "language": "Java",
    "category": "4. Java OOP & Structures (20 Soal)",
    "title": "Menghitung Luas Lingkaran dengan Konstanta final double",
    "description": "Buat method static public double hitungLuasLingkaran(double radius) yang mengembalikan luas lingkaran dengan rumus Math.PI * radius * radius.",
    "starterCode": "public class Kalkulator {\n    // Buat method hitungLuasLingkaran di sini\n    \n}",
    "solutionCode": "public class Kalkulator {\n    public static double hitungLuasLingkaran(double radius) {\n        return Math.PI * radius * radius;\n    }\n}",
    "validationRules": [
      "public static double hitungLuasLingkaran",
      "Math.PI",
      "* radius * radius",
      "return "
    ],
    "quickShortcuts": [
      "public static double hitungLuasLingkaran(double radius)",
      "return Math.PI * radius * radius;",
      "{",
      "}"
    ],
    "explanation": "Math.PI adalah konstanta nilai pi (3.14159...) bawaan Java API. Tipe data double menampung bilangan riil presisi ganda 64-bit.",
    "workedExample": {
      "kasusSerupa": "Menghitung keliling lingkaran 2 * Math.PI * radius.",
      "jawabanBenarContoh": "public class Geometri {\n    public static double hitungKeliling(double r) {\n        return 2 * Math.PI * r;\n    }\n}",
      "nalarBayi": "Kodi memakai jangka: putar radius dua kali lalu kalikan dengan angka ajaib Math.PI untuk mendapatkan seluruh isi piring lingkaran!"
    },
    "index": 62
  },
  {
    "id": "code-java-3",
    "language": "Java",
    "category": "4. Java OOP & Structures (20 Soal)",
    "title": "Struktur Kondisional Penentuan Grade Nilai (If-Else)",
    "description": "Buat method static public String tentukanGrade(int nilai) yang mengembalikan 'A' jika nilai >= 85, 'B' jika nilai >= 70, 'C' jika nilai >= 55, dan selain itu mengembalikan 'D'.",
    "starterCode": "public class Penilaian {\n    public static String tentukanGrade(int nilai) {\n        // Gunakan if-else if-else\n        return \"\";\n    }\n}",
    "solutionCode": "public class Penilaian {\n    public static String tentukanGrade(int nilai) {\n        if (nilai >= 85) {\n            return \"A\";\n        } else if (nilai >= 70) {\n            return \"B\";\n        } else if (nilai >= 55) {\n            return \"C\";\n        } else {\n            return \"D\";\n        }\n    }\n}",
    "validationRules": [
      "public static String tentukanGrade",
      "if (nilai >= 85)",
      "else if (nilai >= 70)",
      "else if (nilai >= 55)",
      "else",
      "return \"A\"",
      "return \"D\""
    ],
    "quickShortcuts": [
      "if (nilai >= 85) return \"A\";",
      "else if (nilai >= 70) return \"B\";",
      "else if (nilai >= 55) return \"C\";",
      "else return \"D\";"
    ],
    "explanation": "Struktur percabangan bertingkat if - else if - else mengevaluasi kondisi secara sekuensial dari ambang batas tertinggi ke terendah.",
    "workedExample": {
      "kasusSerupa": "Menentukan kategori usia: Dewasa jika >= 18, Remaja jika >= 13, Anak jika < 13.",
      "jawabanBenarContoh": "public static String kategoriUsia(int umur) {\n    if (umur >= 18) return \"Dewasa\";\n    if (umur >= 13) return \"Remaja\";\n    return \"Anak\";\n}",
      "nalarBayi": "Kodi memeriksa kartu ujian: nilai tinggi dapat bintang emas A, lumayan dapat B, cukup dapat C, dan sisanya D!"
    },
    "index": 63
  },
  {
    "id": "code-java-4",
    "language": "Java",
    "category": "4. Java OOP & Structures (20 Soal)",
    "title": "Perulangan For Mencetak Bilangan Ganjil",
    "description": "Lengkapi method public static void cetakGanjil(int batas) yang mencetak seluruh bilangan ganjil dari 1 sampai batas ke System.out.println(i) menggunakan perulangan for.",
    "starterCode": "public class LoopGanjil {\n    public static void cetakGanjil(int batas) {\n        // Buat loop for di sini\n        \n    }\n}",
    "solutionCode": "public class LoopGanjil {\n    public static void cetakGanjil(int batas) {\n        for (int i = 1; i <= batas; i += 2) {\n            System.out.println(i);\n        }\n    }\n}",
    "validationRules": [
      "public static void cetakGanjil",
      "for (int i",
      "i <= batas",
      "System.out.println("
    ],
    "quickShortcuts": [
      "for (int i = 1; i <= batas; i += 2) {",
      "System.out.println(i);",
      "}",
      "i++"
    ],
    "explanation": "Loop for (inisialisasi; kondisi; peremajaan) mengontrol iterasi dengan langkah i += 2 untuk langsung meloncat antar bilangan ganjil.",
    "workedExample": {
      "kasusSerupa": "Mencetak bilangan genap dari 2 sampai batas genap.",
      "jawabanBenarContoh": "public static void cetakGenap(int max) {\n    for (int i = 2; i <= max; i += 2) {\n        System.out.println(i);\n    }\n}",
      "nalarBayi": "Kodi melompat dua langkah sekaligus: mulai dari batu nomor 1, lalu loncat ke 3, 5, 7 sampai batas tepi danau!"
    },
    "index": 64
  },
  {
    "id": "code-java-5",
    "language": "Java",
    "category": "4. Java OOP & Structures (20 Soal)",
    "title": "Menghitung Rata-rata Elemen Array Integer",
    "description": "Buat method static public double hitungRerataArray(int[] data) yang menjumlahkan seluruh elemen dalam array dan membaginya dengan panjang array (data.length).",
    "starterCode": "public class ArrayUtil {\n    public static double hitungRerataArray(int[] data) {\n        // Hitung total dan bagi dengan data.length\n        return 0.0;\n    }\n}",
    "solutionCode": "public class ArrayUtil {\n    public static double hitungRerataArray(int[] data) {\n        if (data == null || data.length == 0) return 0.0;\n        double total = 0;\n        for (int n : data) {\n            total += n;\n        }\n        return total / data.length;\n    }\n}",
    "validationRules": [
      "public static double hitungRerataArray",
      "for (int",
      "total / data.length",
      "return "
    ],
    "quickShortcuts": [
      "double total = 0;",
      "for (int n : data) total += n;",
      "return total / data.length;",
      "data.length"
    ],
    "explanation": "Enhanced for-each loop 'for (int n : data)' membaca setiap elemen array secara aman tanpa perlu mengelola variabel indeks counter manual.",
    "workedExample": {
      "kasusSerupa": "Menghitung jumlah total (sum) dari elemen array integer.",
      "jawabanBenarContoh": "public static int totalArray(int[] arr) {\n    int sum = 0;\n    for (int val : arr) sum += val;\n    return sum;\n}",
      "nalarBayi": "Kodi mengumpulkan apel di tiap kotak barisan data, lalu membaginya rata ke seluruh jumlah kotak data.length!"
    },
    "index": 65
  },
  {
    "id": "code-java-6",
    "language": "Java",
    "category": "4. Java OOP & Structures (20 Soal)",
    "title": "Mencari Nilai Maksimum dalam Array",
    "description": "Buat method static public int cariMaksimum(int[] data) yang mencari dan mengembalikan elemen bernilai tertinggi dari array data.",
    "starterCode": "public class Pencari {\n    public static int cariMaksimum(int[] data) {\n        // Cari elemen terbesar\n        return 0;\n    }\n}",
    "solutionCode": "public class Pencari {\n    public static int cariMaksimum(int[] data) {\n        int max = data[0];\n        for (int i = 1; i < data.length; i++) {\n            if (data[i] > max) {\n                max = data[i];\n            }\n        }\n        return max;\n    }\n}",
    "validationRules": [
      "public static int cariMaksimum",
      "int max = data[0]",
      "data[i] > max",
      "return max;"
    ],
    "quickShortcuts": [
      "int max = data[0];",
      "for (int i = 1; i < data.length; i++)",
      "if (data[i] > max) max = data[i];",
      "return max;"
    ],
    "explanation": "Algoritma pencarian linear menetapkan elemen pertama sebagai juara sementara, lalu membandingkannya dengan penantang berikutnya di sisa array.",
    "workedExample": {
      "kasusSerupa": "Mencari nilai minimum dalam array.",
      "jawabanBenarContoh": "public static int cariMinimum(int[] data) {\n    int min = data[0];\n    for (int n : data) if (n < min) min = n;\n    return min;\n}",
      "nalarBayi": "Kodi pegang piala juara di tangan pertama. Siapa saja yang badannya lebih tinggi berhak merebut piala juara max!"
    },
    "index": 66
  },
  {
    "id": "code-java-7",
    "language": "Java",
    "category": "4. Java OOP & Structures (20 Soal)",
    "title": "Class & Objek: PersegiPanjang dengan method hitungLuas()",
    "description": "Buat class PersegiPanjang dengan field double panjang dan lebar, constructor PersegiPanjang(double p, double l), serta method public double hitungLuas() yang mengembalikan p * l.",
    "starterCode": "public class PersegiPanjang {\n    // Tulis field, constructor, dan method hitungLuas\n    \n}",
    "solutionCode": "public class PersegiPanjang {\n    private double panjang;\n    private double lebar;\n\n    public PersegiPanjang(double panjang, double lebar) {\n        this.panjang = panjang;\n        this.lebar = lebar;\n    }\n\n    public double hitungLuas() {\n        return this.panjang * this.lebar;\n    }\n}",
    "validationRules": [
      "public class PersegiPanjang",
      "this.panjang =",
      "this.lebar =",
      "public double hitungLuas()",
      "return this.panjang * this.lebar;"
    ],
    "quickShortcuts": [
      "this.panjang = panjang;",
      "this.lebar = lebar;",
      "public double hitungLuas()",
      "return this.panjang * this.lebar;"
    ],
    "explanation": "Keyword 'this' membedakan antara parameter constructor lokal dan atribut instansiasi class yang memiliki nama variabel sama.",
    "workedExample": {
      "kasusSerupa": "Membuat class Segitiga dengan field alas dan tinggi serta method hitungLuas().",
      "jawabanBenarContoh": "public class Segitiga {\n    private double alas, tinggi;\n    public Segitiga(double a, double t) { this.alas = a; this.tinggi = t; }\n    public double hitungLuas() { return 0.5 * alas * tinggi; }\n}",
      "nalarBayi": "Cetak biru kue PersegiPanjang! Kodi mencatat ukuran panjang dan lebar milik kue ini (this) lalu menghitung luasnya!"
    },
    "index": 67
  },
  {
    "id": "code-java-8",
    "language": "Java",
    "category": "4. Java OOP & Structures (20 Soal)",
    "title": "Enkapsulasi: Getter & Setter pada RekeningBank",
    "description": "Buat class RekeningBank dengan field private double saldo, constructor default, method public double getSaldo(), dan public void setor(double jumlah) yang hanya menambahkan saldo jika jumlah > 0.",
    "starterCode": "public class RekeningBank {\n    private double saldo;\n    // Tambahkan constructor, getSaldo, dan setor\n    \n}",
    "solutionCode": "public class RekeningBank {\n    private double saldo;\n\n    public RekeningBank(double saldoAwal) {\n        this.saldo = saldoAwal;\n    }\n\n    public double getSaldo() {\n        return this.saldo;\n    }\n\n    public void setor(double jumlah) {\n        if (jumlah > 0) {\n            this.saldo += jumlah;\n        }\n    }\n}",
    "validationRules": [
      "private double saldo;",
      "public double getSaldo()",
      "return this.saldo;",
      "public void setor(double jumlah)",
      "this.saldo +="
    ],
    "quickShortcuts": [
      "public double getSaldo() { return this.saldo; }",
      "public void setor(double jumlah) {",
      "if (jumlah > 0) this.saldo += jumlah;",
      "}"
    ],
    "explanation": "Enkapsulasi menyembunyikan data internal dengan modifier private dan hanya memperbolehkan akses lewat method publik yang tervalidasi.",
    "workedExample": {
      "kasusSerupa": "Membuat method tarik(double jumlah) dengan validasi saldo mencukupi.",
      "jawabanBenarContoh": "public void tarik(double jumlah) {\n    if (jumlah > 0 && jumlah <= this.saldo) {\n        this.saldo -= jumlah;\n    }\n}",
      "nalarBayi": "Kodi mengunci brankas dengan gembok private! Uang hanya bisa disetor lewat loket resmi setor() setelah diperiksa keasliannya!"
    },
    "index": 68
  },
  {
    "id": "code-java-9",
    "language": "Java",
    "category": "4. Java OOP & Structures (20 Soal)",
    "title": "Constructor Overloading pada Class Produk",
    "description": "Buat class Produk dengan field String nama dan double harga. Sediakan 2 constructor: satu menerima (nama, harga) dan constructor kedua hanya menerima (nama) dengan menetapkan harga default 0.0 menggunakan keyword this(nama, 0.0).",
    "starterCode": "public class Produk {\n    private String nama;\n    private double harga;\n    // Buat 2 constructor di sini\n    \n}",
    "solutionCode": "public class Produk {\n    private String nama;\n    private double harga;\n\n    public Produk(String nama, double harga) {\n        this.nama = nama;\n        this.harga = harga;\n    }\n\n    public Produk(String nama) {\n        this(nama, 0.0);\n    }\n}",
    "validationRules": [
      "public Produk(String nama, double harga)",
      "public Produk(String nama)",
      "this(nama, 0.0);"
    ],
    "quickShortcuts": [
      "public Produk(String nama, double harga)",
      "this.nama = nama; this.harga = harga;",
      "public Produk(String nama) { this(nama, 0.0); }"
    ],
    "explanation": "Constructor overloading memungkinkan inisialisasi objek dengan ragam kombinasi parameter berbeda, dan pemanggilan this(...) menghindari duplikasi kode.",
    "workedExample": {
      "kasusSerupa": "Constructor overloading pada class User (dengan email saja atau email dan nomor telepon).",
      "jawabanBenarContoh": "public User(String email, String telp) { this.email = email; this.telp = telp; }\npublic User(String email) { this(email, \"-\"); }",
      "nalarBayi": "Kodi menyediakan menu paket lengkap (nama + harga) dan menu hemat (nama saja, harga 0), memanggil paket lengkap lewat this()!"
    },
    "index": 69
  },
  {
    "id": "code-java-10",
    "language": "Java",
    "category": "4. Java OOP & Structures (20 Soal)",
    "title": "Inheritance: Subclass Mobil Mewarisi Superclass Kendaraan",
    "description": "Buat superclass Kendaraan dengan atribut String merk dan method void klakson() { System.out.println(\"Tin tin!\"); }. Lalu buat subclass Mobil yang mengekstensi Kendaraan (extends Kendaraan) dan menambahkan method void jalan().",
    "starterCode": "class Kendaraan {\n    String merk;\n    void klakson() { System.out.println(\"Tin tin!\"); }\n}\n\n// Buat class Mobil yang mewarisi Kendaraan\n",
    "solutionCode": "class Kendaraan {\n    String merk;\n    void klakson() { System.out.println(\"Tin tin!\"); }\n}\n\nclass Mobil extends Kendaraan {\n    void jalan() {\n        System.out.println(\"Mobil melaju di jalan\");\n    }\n}",
    "validationRules": [
      "class Mobil extends Kendaraan",
      "void jalan()",
      "System.out.println("
    ],
    "quickShortcuts": [
      "class Mobil extends Kendaraan {",
      "void jalan() {",
      "System.out.println(\"Mobil melaju di jalan\");",
      "}"
    ],
    "explanation": "Keyword 'extends' menurunkan atribut dan method dari kelas induk (super class) ke kelas anak (sub class) tanpa perlu mendefinisikan ulang.",
    "workedExample": {
      "kasusSerupa": "Class Burung mewarisi class Hewan dan menambahkan method terbang().",
      "jawabanBenarContoh": "class Hewan { String nama; }\nclass Burung extends Hewan {\n    void terbang() { System.out.println(\"Mengepakkan sayap\"); }\n}",
      "nalarBayi": "Mobil adalah keturunan sah dari keluarga Kendaraan! Mobil mewarisi klakson ayahnya dan menambahkan kemampuan roda sendiri!"
    },
    "index": 70
  },
  {
    "id": "code-java-11",
    "language": "Java",
    "category": "4. Java OOP & Structures (20 Soal)",
    "title": "Polimorfisme: Method Overriding dengan Anotasi @Override",
    "description": "Buat class Hewan dengan method public void bersuara() { System.out.println(\"Suara hewan\"); }. Lalu buat subclass Kucing yang menimpa method tersebut (@Override public void bersuara()) mencetak \"Meong!\".",
    "starterCode": "class Hewan {\n    public void bersuara() {\n        System.out.println(\"Suara hewan\");\n    }\n}\n\n// Buat subclass Kucing dengan @Override bersuara\n",
    "solutionCode": "class Hewan {\n    public void bersuara() {\n        System.out.println(\"Suara hewan\");\n    }\n}\n\nclass Kucing extends Hewan {\n    @Override\n    public void bersuara() {\n        System.out.println(\"Meong!\");\n    }\n}",
    "validationRules": [
      "class Kucing extends Hewan",
      "@Override",
      "public void bersuara()",
      "\"Meong!\""
    ],
    "quickShortcuts": [
      "class Kucing extends Hewan {",
      "@Override",
      "public void bersuara() {",
      "System.out.println(\"Meong!\");",
      "}"
    ],
    "explanation": "Method Overriding memungkinkan kelas turunan memberikan implementasi spesifik dari method yang sudah dideklarasikan di kelas induknya.",
    "workedExample": {
      "kasusSerupa": "Class Anjing meng-override bersuara() mencetak \"Guk guk!\".",
      "jawabanBenarContoh": "class Anjing extends Hewan {\n    @Override\n    public void bersuara() {\n        System.out.println(\"Guk guk!\");\n    }\n}",
      "nalarBayi": "Kucing tidak mau cuma bersuara umum 'hewan', jadi Kucing menimpa suaranya sendiri dengan stempel @Override menjadi 'Meong!'!"
    },
    "index": 71
  },
  {
    "id": "code-java-12",
    "language": "Java",
    "category": "4. Java OOP & Structures (20 Soal)",
    "title": "Implementasi Interface Pembayaran",
    "description": "Buat interface Pembayaran dengan method void proses(double jumlah);. Lalu buat class TransferBank yang mengimplementasikan interface tersebut (implements Pembayaran) dengan mencetak pesan bukti transfer.",
    "starterCode": "interface Pembayaran {\n    void proses(double jumlah);\n}\n\n// Buat class TransferBank yang implements Pembayaran\n",
    "solutionCode": "interface Pembayaran {\n    void proses(double jumlah);\n}\n\nclass TransferBank implements Pembayaran {\n    @Override\n    public void proses(double jumlah) {\n        System.out.println(\"Transfer diproses: Rp\" + jumlah);\n    }\n}",
    "validationRules": [
      "class TransferBank implements Pembayaran",
      "public void proses(double jumlah)",
      "System.out.println("
    ],
    "quickShortcuts": [
      "class TransferBank implements Pembayaran {",
      "@Override",
      "public void proses(double jumlah) {",
      "System.out.println(\"Transfer diproses: Rp\" + jumlah);",
      "}"
    ],
    "explanation": "Interface adalah kontrak perilaku. Setiap kelas yang menggunakan 'implements' wajib menyediakan implementasi konkret untuk seluruh method di dalamnya.",
    "workedExample": {
      "kasusSerupa": "Class DompetDigital mengimplementasikan interface Pembayaran.",
      "jawabanBenarContoh": "class DompetDigital implements Pembayaran {\n    public void proses(double j) {\n        System.out.println(\"E-Wallet QRIS diproses: \" + j);\n    }\n}",
      "nalarBayi": "Interface adalah surat perjanjian kerja. Kelas TransferBank menandatangani kontrak 'implements' dan wajib bisa menjalankan proses bayar!"
    },
    "index": 72
  },
  {
    "id": "code-java-13",
    "language": "Java",
    "category": "4. Java OOP & Structures (20 Soal)",
    "title": "Manipulasi ArrayList<String> Koleksi Data Dinamis",
    "description": "Lengkapi method public static void kelolaDaftar() yang membuat ArrayList<String> namaSiswa, menambahkan 'Andi' dan 'Budi', menghapus 'Andi' (.remove(\"Andi\")), lalu mencetak ukuran list dengan .size().",
    "starterCode": "import java.util.ArrayList;\n\npublic class Koleksi {\n    public static void kelolaDaftar() {\n        // Gunakan ArrayList<String>\n        \n    }\n}",
    "solutionCode": "import java.util.ArrayList;\n\npublic class Koleksi {\n    public static void kelolaDaftar() {\n        ArrayList<String> namaSiswa = new ArrayList<>();\n        namaSiswa.add(\"Andi\");\n        namaSiswa.add(\"Budi\");\n        namaSiswa.remove(\"Andi\");\n        System.out.println(namaSiswa.size());\n    }\n}",
    "validationRules": [
      "ArrayList<String>",
      ".add(\"Andi\")",
      ".add(\"Budi\")",
      ".remove(\"Andi\")",
      ".size()"
    ],
    "quickShortcuts": [
      "ArrayList<String> namaSiswa = new ArrayList<>();",
      "namaSiswa.add(\"Andi\");",
      "namaSiswa.add(\"Budi\");",
      "namaSiswa.remove(\"Andi\");",
      "namaSiswa.size()"
    ],
    "explanation": "ArrayList adalah koleksi dinamis berukuran fleksibel yang bisa membesar atau mengecil secara otomatis dibanding array biasa berukuran statis.",
    "workedExample": {
      "kasusSerupa": "Menambahkan nama barang belanjaan dan mengecek apakah 'Buku' ada dengan .contains().",
      "jawabanBenarContoh": "ArrayList<String> keranjang = new ArrayList<>();\nkeranjang.add(\"Buku\");\nboolean ada = keranjang.contains(\"Buku\");",
      "nalarBayi": "ArrayList adalah tas karet elastis Kodi. Mau dimasukkan barang berapa saja tasnya membesar sendiri tanpa takut kepenuhan!"
    },
    "index": 73
  },
  {
    "id": "code-java-14",
    "language": "Java",
    "category": "4. Java OOP & Structures (20 Soal)",
    "title": "HashMap<String, Integer>: Pasangan Kunci dan Nilai",
    "description": "Buat method static public int ambilStok(HashMap<String, Integer> stokMap, String kodeBarang) yang mengembalikan jumlah stok menggunakan .getOrDefault(kodeBarang, 0).",
    "starterCode": "import java.util.HashMap;\n\npublic class Gudang {\n    public static int ambilStok(HashMap<String, Integer> stokMap, String kodeBarang) {\n        // Ambil stok aman dengan getOrDefault\n        return 0;\n    }\n}",
    "solutionCode": "import java.util.HashMap;\n\npublic class Gudang {\n    public static int ambilStok(HashMap<String, Integer> stokMap, String kodeBarang) {\n        return stokMap.getOrDefault(kodeBarang, 0);\n    }\n}",
    "validationRules": [
      "public static int ambilStok",
      "stokMap.getOrDefault(kodeBarang, 0)",
      "return "
    ],
    "quickShortcuts": [
      "return stokMap.getOrDefault(kodeBarang, 0);",
      "stokMap.getOrDefault(",
      ", 0);"
    ],
    "explanation": "Metode getOrDefault() mengambil nilai berdasar key, dan jika key tidak ditemukan di map maka nilai default (0) dikembalikan secara aman tanpa null pointer.",
    "workedExample": {
      "kasusSerupa": "Mengambil harga barang dari katalog HashMap<String, Double> atau 0.0 jika tidak ada.",
      "jawabanBenarContoh": "public static double cekHarga(HashMap<String, Double> katalog, String item) {\n    return katalog.getOrDefault(item, 0.0);\n}",
      "nalarBayi": "HashMap adalah loker berpita label nama. Kodi mencari laci kode barang, kalau kosong ya kembalikan angka nol saja!"
    },
    "index": 74
  },
  {
    "id": "code-java-15",
    "language": "Java",
    "category": "4. Java OOP & Structures (20 Soal)",
    "title": "Penanganan Exception dengan Try-Catch Bersarang",
    "description": "Lengkapi method public static int bagiAman(int a, int b) yang menjalankan int hasil = a / b di dalam blok try, dan menangkap ArithmeticException di blok catch dengan mengembalikan nilai 0.",
    "starterCode": "public class Operasi {\n    public static int bagiAman(int a, int b) {\n        // Gunakan try-catch ArithmeticException\n        return 0;\n    }\n}",
    "solutionCode": "public class Operasi {\n    public static int bagiAman(int a, int b) {\n        try {\n            return a / b;\n        } catch (ArithmeticException e) {\n            return 0;\n        }\n    }\n}",
    "validationRules": [
      "public static int bagiAman",
      "try {",
      "return a / b;",
      "catch (ArithmeticException",
      "return 0;"
    ],
    "quickShortcuts": [
      "try {",
      "return a / b;",
      "} catch (ArithmeticException e) {",
      "return 0;",
      "}"
    ],
    "explanation": "Ketika program mencoba membagi integer dengan 0 di Java, runtime melempar ArithmeticException. Blok catch menangkapnya agar aplikasi tetap stabil.",
    "workedExample": {
      "kasusSerupa": "Parsing string angka ke integer dengan try-catch NumberFormatException.",
      "jawabanBenarContoh": "public static int parseAman(String s) {\n    try { return Integer.parseInt(s); }\n    catch (NumberFormatException e) { return -1; }\n}",
      "nalarBayi": "Kodi memasang jaring pengaman ArithmeticException agar saat pembagi nol jatuh, aplikasi tidak pecah berkeping-keping!"
    },
    "index": 75
  },
  {
    "id": "code-java-16",
    "language": "Java",
    "category": "4. Java OOP & Structures (20 Soal)",
    "title": "String Manipulation: Memeriksa Substring dengan .contains()",
    "description": "Buat method static public boolean periksaKataKunci(String kalimat, String kata) yang mengembalikan true jika kalimat mengandung kata (abaikan huruf besar/kecil dengan mengubah kalimat dan kata ke .toLowerCase()).",
    "starterCode": "public class StringHelper {\n    public static boolean periksaKataKunci(String kalimat, String kata) {\n        // Konversi toLowerCase dan periksa contains\n        return false;\n    }\n}",
    "solutionCode": "public class StringHelper {\n    public static boolean periksaKataKunci(String kalimat, String kata) {\n        if (kalimat == null || kata == null) return false;\n        return kalimat.toLowerCase().contains(kata.toLowerCase());\n    }\n}",
    "validationRules": [
      "public static boolean periksaKataKunci",
      ".toLowerCase()",
      ".contains(",
      "return "
    ],
    "quickShortcuts": [
      "return kalimat.toLowerCase().contains(kata.toLowerCase());",
      ".toLowerCase()",
      ".contains("
    ],
    "explanation": "Pencarian substring tidak sensitif kapitalitas (case-insensitive) dicapai dengan meratakan kedua teks ke huruf kecil via .toLowerCase() sebelum pemanggilan .contains().",
    "workedExample": {
      "kasusSerupa": "Memeriksa apakah email diakhiri dengan domain '.edu'.",
      "jawabanBenarContoh": "public static boolean isEduEmail(String email) {\n    return email != null && email.toLowerCase().endsWith(\".edu\");\n}",
      "nalarBayi": "Kodi menyamakan seragam huruf ke huruf kecil semua, lalu mengecek apakah kata incaran bersembunyi di dalam kalimat!"
    },
    "index": 76
  },
  {
    "id": "code-java-17",
    "language": "Java",
    "category": "4. Java OOP & Structures (20 Soal)",
    "title": "Membalik Teks Menggunakan StringBuilder",
    "description": "Buat method static public String balikTeks(String input) yang menggunakan new StringBuilder(input).reverse().toString() untuk membalikkan teks secara efisien.",
    "starterCode": "public class Pembalik {\n    public static String balikTeks(String input) {\n        // Gunakan StringBuilder reverse\n        return \"\";\n    }\n}",
    "solutionCode": "public class Pembalik {\n    public static String balikTeks(String input) {\n        if (input == null) return null;\n        return new StringBuilder(input).reverse().toString();\n    }\n}",
    "validationRules": [
      "public static String balikTeks",
      "new StringBuilder(input)",
      ".reverse()",
      ".toString()",
      "return "
    ],
    "quickShortcuts": [
      "return new StringBuilder(input).reverse().toString();",
      "new StringBuilder(",
      ").reverse()",
      ".toString();"
    ],
    "explanation": "StringBuilder bersifat mutable (bisa dimodifikasi langsung) sehingga operasi pembalikan (.reverse()) jauh lebih hemat memori dibanding merangkai string berulang kali.",
    "workedExample": {
      "kasusSerupa": "Menambahkan kata ke akhir kalimat dengan StringBuilder.append().",
      "jawabanBenarContoh": "public static String tambahKata(String s, String k) {\n    return new StringBuilder(s).append(\" \").append(k).toString();\n}",
      "nalarBayi": "StringBuilder adalah pita gulung elastis yang bisa diputar balik arah oleh Kodi hanya dengan satu tarikan tuas reverse()!"
    },
    "index": 77
  },
  {
    "id": "code-java-18",
    "language": "Java",
    "category": "4. Java OOP & Structures (20 Soal)",
    "title": "Menghitung Total Elemen dalam Matriks (Array 2 Dimensi)",
    "description": "Buat method static public int hitungTotalMatriks(int[][] matriks) yang menjumlahkan seluruh elemen dalam tabel 2 dimensi menggunakan perulangan for bersarang.",
    "starterCode": "public class MatriksUtil {\n    public static int hitungTotalMatriks(int[][] matriks) {\n        // Loop baris dan kolom\n        return 0;\n    }\n}",
    "solutionCode": "public class MatriksUtil {\n    public static int hitungTotalMatriks(int[][] matriks) {\n        int total = 0;\n        for (int[] baris : matriks) {\n            for (int nilai : baris) {\n                total += nilai;\n            }\n        }\n        return total;\n    }\n}",
    "validationRules": [
      "public static int hitungTotalMatriks",
      "for (int[] baris : matriks)",
      "for (int nilai : baris)",
      "total +=",
      "return total;"
    ],
    "quickShortcuts": [
      "int total = 0;",
      "for (int[] baris : matriks)",
      "for (int nilai : baris) total += nilai;",
      "return total;"
    ],
    "explanation": "Array dua dimensi int[][] adalah array dari array. Loop luar menyusuri setiap baris dan loop dalam menjumlahkan setiap sel kolom.",
    "workedExample": {
      "kasusSerupa": "Menghitung total baris yang memiliki nilai genap.",
      "jawabanBenarContoh": "public static int hitungGenapMatriks(int[][] mat) {\n    int count = 0;\n    for (int[] r : mat) for (int v : r) if (v % 2 == 0) count++;\n    return count;\n}",
      "nalarBayi": "Kodi berjalan dari baris atas ke baris bawah, lalu di setiap kamar baris Kodi menghitung seluruh celengan di meja!"
    },
    "index": 78
  },
  {
    "id": "code-java-19",
    "language": "Java",
    "category": "4. Java OOP & Structures (20 Soal)",
    "title": "Mendefinisikan dan Memeriksa Enum StatusPesanan",
    "description": "Definisikan enum StatusPesanan { PENDING, DIPROSES, SELESAI, DIBATALKAN }. Buat method boolean isSelesai(StatusPesanan status) yang mengembalikan true jika status == StatusPesanan.SELESAI.",
    "starterCode": "// Definisikan enum StatusPesanan dan method isSelesai\n",
    "solutionCode": "enum StatusPesanan {\n    PENDING, DIPROSES, SELESAI, DIBATALKAN\n}\n\npublic class Pesanan {\n    public static boolean isSelesai(StatusPesanan status) {\n        return status == StatusPesanan.SELESAI;\n    }\n}",
    "validationRules": [
      "enum StatusPesanan",
      "PENDING",
      "SELESAI",
      "status == StatusPesanan.SELESAI"
    ],
    "quickShortcuts": [
      "enum StatusPesanan { PENDING, DIPROSES, SELESAI, DIBATALKAN }",
      "public static boolean isSelesai(StatusPesanan status)",
      "return status == StatusPesanan.SELESAI;"
    ],
    "explanation": "Enum (enumerated type) memastikan variabel hanya bisa diisi oleh himpunan nilai konstan yang telah didefinisikan sebelumnya, mencegah kesalahan ketik (type-safe).",
    "workedExample": {
      "kasusSerupa": "Enum HariKerja { SENIN, SELASA, RABU, KAMIS, JUMAT }.",
      "jawabanBenarContoh": "enum HariKerja { SENIN, SELASA, RABU, KAMIS, JUMAT }\nboolean isSenin(HariKerja h) { return h == HariKerja.SENIN; }",
      "nalarBayi": "Enum adalah pilihan stempel resmi di meja kantor. Petugas tidak boleh menulis kata lain selain cap stempel yang tersedia!"
    },
    "index": 79
  },
  {
    "id": "code-java-20",
    "language": "Java",
    "category": "4. Java OOP & Structures (20 Soal)",
    "title": "Abstract Class & Implementasi Method Turunan",
    "description": "Buat abstract class Bentuk dengan method abstract public double hitungKeliling();. Lalu buat subclass Lingkaran extends Bentuk dengan field double r, constructor Lingkaran(double r), dan implementasi hitungKeliling() yang mengembalikan 2 * Math.PI * r.",
    "starterCode": "abstract class Bentuk {\n    public abstract double hitungKeliling();\n}\n\n// Buat subclass Lingkaran extends Bentuk\n",
    "solutionCode": "abstract class Bentuk {\n    public abstract double hitungKeliling();\n}\n\nclass Lingkaran extends Bentuk {\n    private double r;\n    public Lingkaran(double r) { this.r = r; }\n    @Override\n    public double hitungKeliling() {\n        return 2 * Math.PI * r;\n    }\n}",
    "validationRules": [
      "class Lingkaran extends Bentuk",
      "public double hitungKeliling()",
      "2 * Math.PI * r",
      "return "
    ],
    "quickShortcuts": [
      "class Lingkaran extends Bentuk {",
      "private double r;",
      "public Lingkaran(double r) { this.r = r; }",
      "@Override",
      "public double hitungKeliling() { return 2 * Math.PI * r; }"
    ],
    "explanation": "Abstract class tidak dapat diinstansiasi langsung dan memaksa kelas-kelas turunannya untuk menyediakan implementasi spesifik dari abstract method yang dideklarasikan.",
    "workedExample": {
      "kasusSerupa": "Subclass Persegi extends Bentuk dengan sisi s dan hitungKeliling() mengembalikan 4 * s.",
      "jawabanBenarContoh": "class Persegi extends Bentuk {\n    double s;\n    public Persegi(double s) { this.s = s; }\n    public double hitungKeliling() { return 4 * s; }\n}",
      "nalarBayi": "Bentuk adalah cetakan umum tanpa rupa. Ketika Lingkaran lahir mewarisi Bentuk, barulah rumus lingkarannya diisi sungguhan!"
    },
    "index": 80
  },
  {
    "id": "code-cs-1",
    "language": "C#",
    "category": "5. C# .NET & Modern Syntax (20 Soal)",
    "title": "Console.WriteLine & Interpolasi String ($)...",
    "description": "Lengkapi method public static string SapaUser(string nama, int umur) yang mengembalikan string terinterpolasi format $\"Halo {nama}, umur Anda adalah {umur} tahun.\".",
    "starterCode": "using System;\n\npublic class Program {\n    public static string SapaUser(string nama, int umur) {\n        // Gunakan interpolasi string $\"\"\n        return \"\";\n    }\n}",
    "solutionCode": "using System;\n\npublic class Program {\n    public static string SapaUser(string nama, int umur) {\n        return $\"Halo {nama}, umur Anda adalah {umur} tahun.\";\n    }\n}",
    "validationRules": [
      "public static string SapaUser",
      "$\"Halo {nama}, umur Anda adalah {umur} tahun.\"",
      "return "
    ],
    "quickShortcuts": [
      "return $\"Halo {nama}, umur Anda adalah {umur} tahun.\";",
      "$\"Halo {nama}",
      "{umur}",
      "return "
    ],
    "explanation": "Interpolasi string dengan awalan $ dan tanda kurung kurawal {variabel} adalah cara modern C# yang bersih dan cepat untuk menggabungkan teks.",
    "workedExample": {
      "kasusSerupa": "Menggabungkan nama produk dan harga ke dalam format label barang.",
      "jawabanBenarContoh": "public static string FormatProduk(string nama, decimal harga) {\n    return $\"Produk: {nama} | Harga: Rp{harga}\";\n}",
      "nalarBayi": "Tanda $ adalah stiker magnet C#! Kodi cukup meletakkan nama variabel di dalam kurung kurawal {nama} langsung menyatu indah di kalimat!"
    },
    "index": 81
  },
  {
    "id": "code-cs-2",
    "language": "C#",
    "category": "5. C# .NET & Modern Syntax (20 Soal)",
    "title": "Kondisional Switch Case Menentukan Nama Hari",
    "description": "Buat method public static string NamaHari(int nomorHari) yang menggunakan struktur switch: 1 -> 'Senin', 2 -> 'Selasa', 3 -> 'Rabu', 4 -> 'Kamis', 5 -> 'Jumat', 6 -> 'Sabtu', 7 -> 'Minggu', default -> 'Hari Tidak Valid'.",
    "starterCode": "public class Kalender {\n    public static string NamaHari(int nomorHari) {\n        // Gunakan switch case\n        return \"\";\n    }\n}",
    "solutionCode": "public class Kalender {\n    public static string NamaHari(int nomorHari) {\n        switch (nomorHari) {\n            case 1: return \"Senin\";\n            case 2: return \"Selasa\";\n            case 3: return \"Rabu\";\n            case 4: return \"Kamis\";\n            case 5: return \"Jumat\";\n            case 6: return \"Sabtu\";\n            case 7: return \"Minggu\";\n            default: return \"Hari Tidak Valid\";\n        }\n    }\n}",
    "validationRules": [
      "public static string NamaHari",
      "switch (nomorHari)",
      "case 1: return \"Senin\";",
      "default: return \"Hari Tidak Valid\";"
    ],
    "quickShortcuts": [
      "switch (nomorHari) {",
      "case 1: return \"Senin\";",
      "case 2: return \"Selasa\";",
      "default: return \"Hari Tidak Valid\";",
      "}"
    ],
    "explanation": "Pernyataan switch mengevaluasi variabel terhadap kumpulan nilai diskret (case) dan menjalankan blok cabang yang cocok secara langsung.",
    "workedExample": {
      "kasusSerupa": "Menentukan nama bulan berdasarkan angka 1 sampai 12.",
      "jawabanBenarContoh": "public static string Bulan(int m) {\n    switch (m) {\n        case 1: return \"Januari\";\n        case 2: return \"Februari\";\n        default: return \"Bulan Lain\";\n    }\n}",
      "nalarBayi": "Switch seperti pos pemilah surat otomatis. Nomor hari masuk, langsung diarahkan ke gerbang nama hari yang tepat!"
    },
    "index": 82
  },
  {
    "id": "code-cs-3",
    "language": "C#",
    "category": "5. C# .NET & Modern Syntax (20 Soal)",
    "title": "Perulangan Foreach Memproses Array String",
    "description": "Buat method public static int HitungKarakterTotal(string[] daftarKota) yang menggunakan foreach untuk menghitung jumlah total panjang seluruh nama kota dalam array.",
    "starterCode": "public class KotaUtil {\n    public static int HitungKarakterTotal(string[] daftarKota) {\n        // Gunakan foreach loop\n        return 0;\n    }\n}",
    "solutionCode": "public class KotaUtil {\n    public static int HitungKarakterTotal(string[] daftarKota) {\n        int total = 0;\n        foreach (string kota in daftarKota) {\n            total += kota.Length;\n        }\n        return total;\n    }\n}",
    "validationRules": [
      "public static int HitungKarakterTotal",
      "foreach (string kota in daftarKota)",
      "total += kota.Length",
      "return total;"
    ],
    "quickShortcuts": [
      "int total = 0;",
      "foreach (string kota in daftarKota) {",
      "total += kota.Length;",
      "}",
      "return total;"
    ],
    "explanation": "Loop foreach di C# mengiterasi setiap elemen koleksi IEnumerable secara read-only tanpa indeks pengindeks manual.",
    "workedExample": {
      "kasusSerupa": "Menghitung total panjang string pada list buah.",
      "jawabanBenarContoh": "public static int TotalPanjang(string[] buah) {\n    int sum = 0;\n    foreach (var b in buah) sum += b.Length;\n    return sum;\n}",
      "nalarBayi": "Foreach menyuruh Kodi memeriksa setiap keranjang satu per satu tanpa repot menghitung nomor antrean urutan!"
    },
    "index": 83
  },
  {
    "id": "code-cs-4",
    "language": "C#",
    "category": "5. C# .NET & Modern Syntax (20 Soal)",
    "title": "List<T> Koleksi Generik di System.Collections.Generic",
    "description": "Buat method public static List<string> BuatDaftarSiswa() yang menginisialisasi List<string> baru, menambahkan 'Budi' dan 'Siti', lalu mengembalikan list tersebut.",
    "starterCode": "using System.Collections.Generic;\n\npublic class Kelas {\n    public static List<string> BuatDaftarSiswa() {\n        // Inisialisasi dan isi List<string>\n        return null;\n    }\n}",
    "solutionCode": "using System.Collections.Generic;\n\npublic class Kelas {\n    public static List<string> BuatDaftarSiswa() {\n        List<string> siswa = new List<string>();\n        siswa.Add(\"Budi\");\n        siswa.Add(\"Siti\");\n        return siswa;\n    }\n}",
    "validationRules": [
      "using System.Collections.Generic;",
      "List<string>",
      "new List<string>()",
      ".Add(\"Budi\")",
      ".Add(\"Siti\")",
      "return "
    ],
    "quickShortcuts": [
      "List<string> siswa = new List<string>();",
      "siswa.Add(\"Budi\");",
      "siswa.Add(\"Siti\");",
      "return siswa;"
    ],
    "explanation": "List<T> adalah koleksi tipe aman (strongly-typed) di .NET yang menyediakan operasi penambahan (.Add), penghapusan, dan pencarian cepat.",
    "workedExample": {
      "kasusSerupa": "Membuat List<int> untuk menyimpan skor ujian.",
      "jawabanBenarContoh": "public static List<int> BuatSkor() {\n    var skor = new List<int> { 80, 90, 100 };\n    return skor;\n}",
      "nalarBayi": "List<T> adalah buku saku serbaguna C#. Kodi bisa mencatat dan menambah anggota baru kapan saja dengan perintah .Add!"
    },
    "index": 84
  },
  {
    "id": "code-cs-5",
    "language": "C#",
    "category": "5. C# .NET & Modern Syntax (20 Soal)",
    "title": "Class & Auto-Implemented Properties ({ get; set; })",
    "description": "Buat class Mahasiswa yang memiliki properti otomatis public string Nama { get; set; } dan public int Umur { get; set; }, serta constructor yang menginisialisasi kedua properti tersebut.",
    "starterCode": "public class Mahasiswa {\n    // Deklarasikan auto properties dan constructor\n    \n}",
    "solutionCode": "public class Mahasiswa {\n    public string Nama { get; set; }\n    public int Umur { get; set; }\n\n    public Mahasiswa(string nama, int umur) {\n        Nama = nama;\n        Umur = umur;\n    }\n}",
    "validationRules": [
      "public class Mahasiswa",
      "public string Nama { get; set; }",
      "public int Umur { get; set; }",
      "public Mahasiswa(string nama, int umur)"
    ],
    "quickShortcuts": [
      "public string Nama { get; set; }",
      "public int Umur { get; set; }",
      "public Mahasiswa(string nama, int umur) {",
      "Nama = nama; Umur = umur;",
      "}"
    ],
    "explanation": "Auto-implemented properties { get; set; } menyederhanakan enkapsulasi di C# tanpa perlu membuat private backing field secara manual.",
    "workedExample": {
      "kasusSerupa": "Class Buku dengan properti Judul dan Penulis.",
      "jawabanBenarContoh": "public class Buku {\n    public string Judul { get; set; }\n    public Buku(string judul) { Judul = judul; }\n}",
      "nalarBayi": "Tanda { get; set; } adalah pintu ajaib otomatis: kita bisa mengambil (get) atau mengubah (set) nilai tanpa kabel rumit di belakangnya!"
    },
    "index": 85
  },
  {
    "id": "code-cs-6",
    "language": "C#",
    "category": "5. C# .NET & Modern Syntax (20 Soal)",
    "title": "LINQ: Filter Angka Genap dengan .Where() & .ToList()",
    "description": "Buat method public static List<int> AmbilGenap(List<int> angkaList) menggunakan LINQ System.Linq: angkaList.Where(x => x % 2 == 0).ToList().",
    "starterCode": "using System.Collections.Generic;\nusing System.Linq;\n\npublic class LinqUtil {\n    public static List<int> AmbilGenap(List<int> angkaList) {\n        // Gunakan LINQ .Where dan .ToList\n        return null;\n    }\n}",
    "solutionCode": "using System.Collections.Generic;\nusing System.Linq;\n\npublic class LinqUtil {\n    public static List<int> AmbilGenap(List<int> angkaList) {\n        return angkaList.Where(x => x % 2 == 0).ToList();\n    }\n}",
    "validationRules": [
      "using System.Linq;",
      "angkaList.Where(",
      "x % 2 == 0",
      ".ToList()",
      "return "
    ],
    "quickShortcuts": [
      "return angkaList.Where(x => x % 2 == 0).ToList();",
      ".Where(x => x % 2 == 0)",
      ".ToList()",
      "using System.Linq;"
    ],
    "explanation": "LINQ (Language Integrated Query) memungkinkan manipulasi data bergaya deklaratif. Metode .Where() menyaring data berdasarkan predikat lambda.",
    "workedExample": {
      "kasusSerupa": "Menyaring angka positif (x > 0) dengan LINQ.",
      "jawabanBenarContoh": "public static List<int> Positif(List<int> data) {\n    return data.Where(n => n > 0).ToList();\n}",
      "nalarBayi": "LINQ adalah jaring penyaring canggih C#. Kodi cukup bilang .Where(yang genap) lalu bungkus jadi keranjang baru dengan .ToList()!"
    },
    "index": 86
  },
  {
    "id": "code-cs-7",
    "language": "C#",
    "category": "5. C# .NET & Modern Syntax (20 Soal)",
    "title": "LINQ: Mengurutkan Data dengan .OrderBy()",
    "description": "Buat method public static List<string> UrutkanNama(List<string> daftarNama) yang mengurutkan daftar nama secara alfabetis A-Z menggunakan LINQ .OrderBy(x => x).ToList().",
    "starterCode": "using System.Collections.Generic;\nusing System.Linq;\n\npublic class SortUtil {\n    public static List<string> UrutkanNama(List<string> daftarNama) {\n        // Gunakan .OrderBy dan .ToList\n        return null;\n    }\n}",
    "solutionCode": "using System.Collections.Generic;\nusing System.Linq;\n\npublic class SortUtil {\n    public static List<string> UrutkanNama(List<string> daftarNama) {\n        return daftarNama.OrderBy(x => x).ToList();\n    }\n}",
    "validationRules": [
      "using System.Linq;",
      ".OrderBy(",
      "x => x",
      ".ToList()",
      "return "
    ],
    "quickShortcuts": [
      "return daftarNama.OrderBy(x => x).ToList();",
      ".OrderBy(x => x)",
      ".ToList()"
    ],
    "explanation": "Metode .OrderBy() mengurutkan urutan elemen secara menaik (ascending) berdasarkan pemilih kunci ekspresi lambda.",
    "workedExample": {
      "kasusSerupa": "Mengurutkan data angka secara menurun (descending) dengan .OrderByDescending().",
      "jawabanBenarContoh": "public static List<int> UrutTurun(List<int> angka) {\n    return angka.OrderByDescending(n => n).ToList();\n}",
      "nalarBayi": "Kodi menata barisan murid: panggil .OrderBy maka anak-anak langsung berbaris rapi dari huruf A ke Z!"
    },
    "index": 87
  },
  {
    "id": "code-cs-8",
    "language": "C#",
    "category": "5. C# .NET & Modern Syntax (20 Soal)",
    "title": "LINQ Agregasi: Menghitung Rata-rata dengan .Average()",
    "description": "Buat method public static double HitungRataRata(List<int> nilaiList) yang mengembalikan nilai rata-rata menggunakan LINQ .Average(). Jika list kosong kembalikan 0.0.",
    "starterCode": "using System.Collections.Generic;\nusing System.Linq;\n\npublic class StatsUtil {\n    public static double HitungRataRata(List<int> nilaiList) {\n        // Gunakan .Average() dengan pengecekan Count > 0\n        return 0.0;\n    }\n}",
    "solutionCode": "using System.Collections.Generic;\nusing System.Linq;\n\npublic class StatsUtil {\n    public static double HitungRataRata(List<int> nilaiList) {\n        if (nilaiList == null || nilaiList.Count == 0) return 0.0;\n        return nilaiList.Average();\n    }\n}",
    "validationRules": [
      "using System.Linq;",
      "nilaiList.Count == 0",
      "nilaiList.Average()",
      "return "
    ],
    "quickShortcuts": [
      "if (nilaiList == null || nilaiList.Count == 0) return 0.0;",
      "return nilaiList.Average();",
      ".Average()",
      "nilaiList.Count"
    ],
    "explanation": "Metode agregasi LINQ seperti .Average(), .Sum(), .Min(), dan .Max() menghitung ringkasan statistik langsung pada koleksi numerik.",
    "workedExample": {
      "kasusSerupa": "Menghitung total penjumlahan elemen list dengan .Sum().",
      "jawabanBenarContoh": "public static int HitungTotal(List<int> angka) {\n    return angka?.Sum() ?? 0;\n}",
      "nalarBayi": "Daripada menjumlah dan membagi manual, Kodi cukup menekan tombol .Average() dan rata-rata langsung tersaji di piring!"
    },
    "index": 88
  },
  {
    "id": "code-cs-9",
    "language": "C#",
    "category": "5. C# .NET & Modern Syntax (20 Soal)",
    "title": "Nullable Types & Operator Null-Coalescing (??)",
    "description": "Buat method public static string DapatkanNamaTampilan(string namaKustom) yang mengembalikan namaKustom jika tidak null/empty, atau 'Tamu Anonim' menggunakan operator ?? atau string.IsNullOrEmpty.",
    "starterCode": "public class UserProfile {\n    public static string DapatkanNamaTampilan(string namaKustom) {\n        // Kembalikan namaKustom ?? \"Tamu Anonim\"\n        return \"\";\n    }\n}",
    "solutionCode": "public class UserProfile {\n    public static string DapatkanNamaTampilan(string namaKustom) {\n        return !string.IsNullOrEmpty(namaKustom) ? namaKustom : \"Tamu Anonim\";\n    }\n}",
    "validationRules": [
      "public static string DapatkanNamaTampilan",
      "string.IsNullOrEmpty",
      "\"Tamu Anonim\"",
      "return "
    ],
    "quickShortcuts": [
      "return !string.IsNullOrEmpty(namaKustom) ? namaKustom : \"Tamu Anonim\";",
      "string.IsNullOrEmpty(namaKustom)",
      "\"Tamu Anonim\""
    ],
    "explanation": "Penanganan nilai null atau string kosong sangat krusial di C# modern untuk mencegah NullReferenceException pada antarmuka pengguna.",
    "workedExample": {
      "kasusSerupa": "Memberikan nilai default angka 0 untuk integer bernilai null int? dengan operator ??.",
      "jawabanBenarContoh": "public static int AmbilNilaiAman(int? nilai) {\n    return nilai ?? 0;\n}",
      "nalarBayi": "Operator penolong ?? adalah payung cadangan: jika nama yang dibawa bolong (null), pasang nama cadangan 'Tamu Anonim'!"
    },
    "index": 89
  },
  {
    "id": "code-cs-10",
    "language": "C#",
    "category": "5. C# .NET & Modern Syntax (20 Soal)",
    "title": "Exception Handling: Try-Catch-Finally",
    "description": "Lengkapi method public static bool CobaBagi(int a, int b, out int hasil) yang melakukan pembagian di dalam try. Jika sukses set hasil = a / b dan return true, jika DivideByZeroException set hasil = 0 dan return false.",
    "starterCode": "using System;\n\npublic class Pembagi {\n    public static bool CobaBagi(int a, int b, out int hasil) {\n        // Gunakan try-catch DivideByZeroException\n        hasil = 0;\n        return false;\n    }\n}",
    "solutionCode": "using System;\n\npublic class Pembagi {\n    public static bool CobaBagi(int a, int b, out int hasil) {\n        try {\n            hasil = a / b;\n            return true;\n        } catch (DivideByZeroException) {\n            hasil = 0;\n            return false;\n        }\n    }\n}",
    "validationRules": [
      "public static bool CobaBagi",
      "try {",
      "hasil = a / b;",
      "catch (DivideByZeroException)",
      "return false;"
    ],
    "quickShortcuts": [
      "try { hasil = a / b; return true; }",
      "catch (DivideByZeroException) { hasil = 0; return false; }",
      "out int hasil"
    ],
    "explanation": "Parameter kata kunci 'out' memungkinkan method mengembalikan beberapa nilai sekaligus selain nilai boolean penanda keberhasilan eksekusi.",
    "workedExample": {
      "kasusSerupa": "Pola int.TryParse(string, out int hasil) yang aman dari exception.",
      "jawabanBenarContoh": "public static bool ParseAngka(string s, out int val) {\n    return int.TryParse(s, out val);\n}",
      "nalarBayi": "CobaBagi mengetes pembagian: kalau berhasil, hasil dimasukkan ke kantong 'out' dan Kodi mengacungkan jempol true!"
    },
    "index": 90
  },
  {
    "id": "code-cs-11",
    "language": "C#",
    "category": "5. C# .NET & Modern Syntax (20 Soal)",
    "title": "Struct vs Class: Tipe Nilai TitikKoordinat (X, Y)",
    "description": "Definisikan struct TitikKoordinat yang memiliki dua field publik int X dan int Y, constructor TitikKoordinat(int x, int y), serta method public double JarakKePusat() yang mengembalikan Math.Sqrt(X*X + Y*Y).",
    "starterCode": "using System;\n\n// Definisikan struct TitikKoordinat di sini\n",
    "solutionCode": "using System;\n\npublic struct TitikKoordinat {\n    public int X;\n    public int Y;\n\n    public TitikKoordinat(int x, int y) {\n        X = x;\n        Y = y;\n    }\n\n    public double JarakKePusat() {\n        return Math.Sqrt(X * X + Y * Y);\n    }\n}",
    "validationRules": [
      "public struct TitikKoordinat",
      "public int X;",
      "public int Y;",
      "public double JarakKePusat()",
      "Math.Sqrt(X * X + Y * Y)"
    ],
    "quickShortcuts": [
      "public struct TitikKoordinat {",
      "public int X; public int Y;",
      "public TitikKoordinat(int x, int y) { X = x; Y = y; }",
      "return Math.Sqrt(X * X + Y * Y);"
    ],
    "explanation": "Struct adalah tipe nilai (value type) yang dialokasikan di stack, ideal untuk struktur data berukuran kecil yang ringan tanpa overhead heap garbage collector.",
    "workedExample": {
      "kasusSerupa": "Struct UkuranPixel dengan lebar dan tinggi.",
      "jawabanBenarContoh": "public struct UkuranPixel {\n    public int Lebar, Tinggi;\n    public UkuranPixel(int l, int t) { Lebar = l; Tinggi = t; }\n}",
      "nalarBayi": "Struct adalah kertas catatan kecil yang langsung diselipkan di saku (stack), cocok untuk koordinat ringan X dan Y!"
    },
    "index": 91
  },
  {
    "id": "code-cs-12",
    "language": "C#",
    "category": "5. C# .NET & Modern Syntax (20 Soal)",
    "title": "Mendefinisikan Interface ILogger & Konsol Logger",
    "description": "Buat interface ILogger dengan method void Log(string pesan);. Lalu buat class ConsoleLogger yang mengimplementasikan ILogger dan mencetak $\"[LOG]: {pesan}\" ke Console.WriteLine.",
    "starterCode": "using System;\n\n// Definisikan interface ILogger dan class ConsoleLogger\n",
    "solutionCode": "using System;\n\npublic interface ILogger {\n    void Log(string pesan);\n}\n\npublic class ConsoleLogger : ILogger {\n    public void Log(string pesan) {\n        Console.WriteLine($\"[LOG]: {pesan}\");\n    }\n}",
    "validationRules": [
      "public interface ILogger",
      "void Log(string pesan);",
      "public class ConsoleLogger : ILogger",
      "Console.WriteLine($\"[LOG]: {pesan}\");"
    ],
    "quickShortcuts": [
      "public interface ILogger { void Log(string pesan); }",
      "public class ConsoleLogger : ILogger {",
      "public void Log(string pesan) {",
      "Console.WriteLine($\"[LOG]: {pesan}\");",
      "}"
    ],
    "explanation": "Tanda titik dua ':' di C# digunakan baik untuk pewarisan class maupun implementasi interface, mendefinisikan kontrak tanpa implementasi.",
    "workedExample": {
      "kasusSerupa": "Interface INotifier dengan method void SendAlert(string info).",
      "jawabanBenarContoh": "public interface INotifier { void SendAlert(string msg); }\npublic class EmailNotifier : INotifier {\n    public void SendAlert(string m) { Console.WriteLine(\"Kirim email: \" + m); }\n}",
      "nalarBayi": "ILogger adalah perjanjian catatan harian. Kelas ConsoleLogger wajib memenuhi janji dengan menulis log ke layar konsol!"
    },
    "index": 92
  },
  {
    "id": "code-cs-13",
    "language": "C#",
    "category": "5. C# .NET & Modern Syntax (20 Soal)",
    "title": "Method Overloading: HitungDiskon",
    "description": "Buat class Toko dengan dua method overload HitungDiskon: method pertama public static double HitungDiskon(double harga, double persen) mengembalikan harga * (persen / 100), dan method kedua public static double HitungDiskon(double harga) mengembalikan diskon flat 5% (harga * 0.05).",
    "starterCode": "public class Toko {\n    // Buat 2 method HitungDiskon overload\n    \n}",
    "solutionCode": "public class Toko {\n    public static double HitungDiskon(double harga, double persen) {\n        return harga * (persen / 100.0);\n    }\n\n    public static double HitungDiskon(double harga) {\n        return harga * 0.05;\n    }\n}",
    "validationRules": [
      "public static double HitungDiskon(double harga, double persen)",
      "public static double HitungDiskon(double harga)",
      "harga * 0.05",
      "return "
    ],
    "quickShortcuts": [
      "public static double HitungDiskon(double harga, double persen)",
      "return harga * (persen / 100.0);",
      "public static double HitungDiskon(double harga) { return harga * 0.05; }"
    ],
    "explanation": "Method Overloading memperbolehkan beberapa method memiliki nama yang persis sama selama daftar parameter (jumlah atau tipe data) berbeda.",
    "workedExample": {
      "kasusSerupa": "Method CetakPesan(string s) dan CetakPesan(string s, int ulang).",
      "jawabanBenarContoh": "public static void Cetak(string s) { Console.WriteLine(s); }\npublic static void Cetak(string s, int n) { for(int i=0;i<n;i++) Console.WriteLine(s); }",
      "nalarBayi": "Dua tombol bernama sama HitungDiskon! Yang satu menerima kupon persen khusus, yang satu lagi otomatis memberi diskon 5%!"
    },
    "index": 93
  },
  {
    "id": "code-cs-14",
    "language": "C#",
    "category": "5. C# .NET & Modern Syntax (20 Soal)",
    "title": "Dictionary<TKey, TValue> Penyimpanan Data Stok",
    "description": "Buat method public static int AmbilStokBarang(Dictionary<string, int> inventaris, string kode) yang memeriksa inventaris.TryGetValue(kode, out int stok). Jika ditemukan return stok, jika tidak return 0.",
    "starterCode": "using System.Collections.Generic;\n\npublic class InventarisUtil {\n    public static int AmbilStokBarang(Dictionary<string, int> inventaris, string kode) {\n        // Gunakan TryGetValue\n        return 0;\n    }\n}",
    "solutionCode": "using System.Collections.Generic;\n\npublic class InventarisUtil {\n    public static int AmbilStokBarang(Dictionary<string, int> inventaris, string kode) {\n        if (inventaris != null && inventaris.TryGetValue(kode, out int stok)) {\n            return stok;\n        }\n        return 0;\n    }\n}",
    "validationRules": [
      "Dictionary<string, int>",
      ".TryGetValue(kode, out int stok)",
      "return stok;",
      "return 0;"
    ],
    "quickShortcuts": [
      "if (inventaris.TryGetValue(kode, out int stok)) return stok;",
      "return 0;",
      ".TryGetValue(",
      "out int stok"
    ],
    "explanation": "TryGetValue adalah metode paling efisien untuk mengambil nilai dari Dictionary di C# karena hanya melakukan satu kali lookup hash.",
    "workedExample": {
      "kasusSerupa": "Mengambil harga dari Dictionary<string, decimal> katalog harga.",
      "jawabanBenarContoh": "public static decimal CekHarga(Dictionary<string, decimal> cat, string item) {\n    return cat.TryGetValue(item, out decimal h) ? h : 0m;\n}",
      "nalarBayi": "TryGetValue mengetuk pintu lemari Dictionary: jika ada barangnya langsung diambil, jika kosong Kodi tenang menjawab nol!"
    },
    "index": 94
  },
  {
    "id": "code-cs-15",
    "language": "C#",
    "category": "5. C# .NET & Modern Syntax (20 Soal)",
    "title": "Lambda Expression & Func<int, int> Delegate",
    "description": "Buat method public static int TerapkanOperasi(int angka, Func<int, int> operasi) yang menjalankan fungsi delegasi operasi(angka) dan mengembalikan hasilnya.",
    "starterCode": "using System;\n\npublic class DelegasiUtil {\n    public static int TerapkanOperasi(int angka, Func<int, int> operasi) {\n        // Jalankan delegasi operasi\n        return 0;\n    }\n}",
    "solutionCode": "using System;\n\npublic class DelegasiUtil {\n    public static int TerapkanOperasi(int angka, Func<int, int> operasi) {\n        return operasi(angka);\n    }\n}",
    "validationRules": [
      "Func<int, int> operasi",
      "operasi(angka)",
      "return "
    ],
    "quickShortcuts": [
      "return operasi(angka);",
      "Func<int, int>",
      "operasi(angka)"
    ],
    "explanation": "Func<T, TResult> adalah delegasi bawaan di .NET yang menerima parameter input dan mengembalikan nilai keluaran, memungkinkan passing function sebagai parameter.",
    "workedExample": {
      "kasusSerupa": "Menjalankan aksi tanpa return value dengan Action<string> delegasi.",
      "jawabanBenarContoh": "public static void Eksekusi(string s, Action<string> act) {\n    act(s);\n}",
      "nalarBayi": "Func adalah remote control serbaguna. Angka dimasukkan ke mesin, lalu tombol fungsi operasi ditekan dan hasilnya keluar!"
    },
    "index": 95
  },
  {
    "id": "code-cs-16",
    "language": "C#",
    "category": "5. C# .NET & Modern Syntax (20 Soal)",
    "title": "Pemrograman Asinkron Sederhana dengan Task & async/await",
    "description": "Buat method async public static Task<string> AmbilDataAsync() yang menunggu Task.Delay(100) menggunakan await, lalu mengembalikan teks 'Data Berhasil Diambil'.",
    "starterCode": "using System.Threading.Tasks;\n\npublic class LayananData {\n    // Buat method async Task<string> AmbilDataAsync()\n    \n}",
    "solutionCode": "using System.Threading.Tasks;\n\npublic class LayananData {\n    public async static Task<string> AmbilDataAsync() {\n        await Task.Delay(100);\n        return \"Data Berhasil Diambil\";\n    }\n}",
    "validationRules": [
      "async",
      "Task<string>",
      "AmbilDataAsync()",
      "await Task.Delay(",
      "\"Data Berhasil Diambil\""
    ],
    "quickShortcuts": [
      "public async static Task<string> AmbilDataAsync() {",
      "await Task.Delay(100);",
      "return \"Data Berhasil Diambil\";",
      "}"
    ],
    "explanation": "Async/await mencegah pemblokiran thread utama (non-blocking) saat menunggu operasi I/O atau penundaan jaringan di .NET.",
    "workedExample": {
      "kasusSerupa": "Mengunduh teks dokumen secara asinkron dengan Task.FromResult.",
      "jawabanBenarContoh": "public async static Task<int> HitungAsync() {\n    await Task.Delay(50);\n    return 42;\n}",
      "nalarBayi": "Mantra ajaib async await membuat Kodi bisa tidur sejenak sambil menunggu kiriman paket tanpa membuat seluruh rumah macet berhenti!"
    },
    "index": 96
  },
  {
    "id": "code-cs-17",
    "language": "C#",
    "category": "5. C# .NET & Modern Syntax (20 Soal)",
    "title": "Record Type untuk Data Immutability (C# Modern)",
    "description": "Deklarasikan positional record MahasiswaRecord(string Nim, string Nama, double Ipk) di C#. Serta buat method static public bool IsCumlaude(MahasiswaRecord mhs) yang mengembalikan mhs.Ipk >= 3.5.",
    "starterCode": "// Deklarasikan public record MahasiswaRecord dan class Evaluator\n",
    "solutionCode": "public record MahasiswaRecord(string Nim, string Nama, double Ipk);\n\npublic class Evaluator {\n    public static bool IsCumlaude(MahasiswaRecord mhs) {\n        return mhs.Ipk >= 3.5;\n    }\n}",
    "validationRules": [
      "public record MahasiswaRecord(string Nim, string Nama, double Ipk);",
      "public static bool IsCumlaude",
      "mhs.Ipk >= 3.5"
    ],
    "quickShortcuts": [
      "public record MahasiswaRecord(string Nim, string Nama, double Ipk);",
      "public static bool IsCumlaude(MahasiswaRecord mhs)",
      "return mhs.Ipk >= 3.5;"
    ],
    "explanation": "Record adalah fitur C# 9+ untuk mendefinisikan tipe data berbasis nilai (value-based equality) yang immutable secara ringkas satu baris.",
    "workedExample": {
      "kasusSerupa": "Record Titik2D(double X, double Y) untuk posisi geometri.",
      "jawabanBenarContoh": "public record Titik2D(double X, double Y);\nbool IsPositif(Titik2D t) => t.X > 0 && t.Y > 0;",
      "nalarBayi": "Record adalah kartu identitas resmi anti-palsu. Cukup dideklarasikan satu baris, langsung dapat fitur kesetaraan nilai otomatis!"
    },
    "index": 97
  },
  {
    "id": "code-cs-18",
    "language": "C#",
    "category": "5. C# .NET & Modern Syntax (20 Soal)",
    "title": "Switch Expression C# Modern (Pattern Matching)",
    "description": "Lengkapi method public static string EvaluasiLampu(string warna) menggunakan switch expression: 'Merah' => 'Berhenti', 'Kuning' => 'Hati-hati', 'Hijau' => 'Jalan', _ => 'Sinyal Tidak Dikenal'.",
    "starterCode": "public class LampuLaluLintas {\n    public static string EvaluasiLampu(string warna) =>\n        // Gunakan switch expression\n        warna switch {\n            \n        };\n}",
    "solutionCode": "public class LampuLaluLintas {\n    public static string EvaluasiLampu(string warna) =>\n        warna switch {\n            \"Merah\" => \"Berhenti\",\n            \"Kuning\" => \"Hati-hati\",\n            \"Hijau\" => \"Jalan\",\n            _ => \"Sinyal Tidak Dikenal\"\n        };\n}",
    "validationRules": [
      "warna switch {",
      "\"Merah\" => \"Berhenti\"",
      "\"Kuning\" => \"Hati-hati\"",
      "\"Hijau\" => \"Jalan\"",
      "_ => \"Sinyal Tidak Dikenal\""
    ],
    "quickShortcuts": [
      "\"Merah\" => \"Berhenti\",",
      "\"Kuning\" => \"Hati-hati\",",
      "\"Hijau\" => \"Jalan\",",
      "_ => \"Sinyal Tidak Dikenal\"",
      "warna switch {"
    ],
    "explanation": "Switch expression C# 8+ menyajikan sintaks pola pencocokan (pattern matching) yang sangat padat dan mengembalikan nilai langsung sebagai ekspresi.",
    "workedExample": {
      "kasusSerupa": "Switch expression konversi kode status HTTP: 200 => 'OK', 404 => 'Not Found', _ => 'Unknown'.",
      "jawabanBenarContoh": "public static string HttpStatus(int code) => code switch {\n    200 => \"OK\",\n    404 => \"Not Found\",\n    _ => \"Unknown\"\n};",
      "nalarBayi": "Switch expression panah => adalah papan penunjuk arah kilat: jika lampu Merah langsung melompat ke Berhenti!"
    },
    "index": 98
  },
  {
    "id": "code-cs-19",
    "language": "C#",
    "category": "5. C# .NET & Modern Syntax (20 Soal)",
    "title": "StringBuilder untuk Penggabungan Teks Skala Besar",
    "description": "Buat method public static string GabungKata(string[] kataArray) yang menginisialisasi StringBuilder di System.Text, melakukan Append(kata) dan Append(\" \"), lalu mengembalikan .ToString().Trim().",
    "starterCode": "using System.Text;\n\npublic class TeksUtil {\n    public static string GabungKata(string[] kataArray) {\n        // Gunakan StringBuilder, Append, dan Trim()\n        return \"\";\n    }\n}",
    "solutionCode": "using System.Text;\n\npublic class TeksUtil {\n    public static string GabungKata(string[] kataArray) {\n        StringBuilder sb = new StringBuilder();\n        foreach (string kata in kataArray) {\n            sb.Append(kata).Append(\" \");\n        }\n        return sb.ToString().Trim();\n    }\n}",
    "validationRules": [
      "using System.Text;",
      "StringBuilder sb = new StringBuilder()",
      "sb.Append(",
      ".ToString().Trim()",
      "return "
    ],
    "quickShortcuts": [
      "StringBuilder sb = new StringBuilder();",
      "sb.Append(kata).Append(\" \");",
      "return sb.ToString().Trim();",
      "using System.Text;"
    ],
    "explanation": "Penggabungan string berulang dengan operator '+' menciptakan alokasi objek string baru terus-menerus. StringBuilder menghindari pemborosan memori.",
    "workedExample": {
      "kasusSerupa": "Menggabungkan list angka menjadi string terpisah koma dengan StringBuilder.",
      "jawabanBenarContoh": "var sb = new StringBuilder();\nforeach (var n in list) sb.Append(n).Append(\",\");\nreturn sb.ToString().TrimEnd(',');",
      "nalarBayi": "StringBuilder adalah gerbong kereta yang terus disambung dengan kail Append() tanpa perlu membeli lokomotif baru setiap saat!"
    },
    "index": 99
  },
  {
    "id": "code-cs-20",
    "language": "C#",
    "category": "5. C# .NET & Modern Syntax (20 Soal)",
    "title": "Enum & Validasi Status Transaksi",
    "description": "Definisikan enum StatusTransaksi { Pending, Diproses, Berhasil, Gagal }. Buat method public static bool DapatDibatalkan(StatusTransaksi status) yang mengembalikan true hanya jika status == StatusTransaksi.Pending.",
    "starterCode": "// Definisikan enum StatusTransaksi dan class TransaksiUtil\n",
    "solutionCode": "public enum StatusTransaksi {\n    Pending,\n    Diproses,\n    Berhasil,\n    Gagal\n}\n\npublic class TransaksiUtil {\n    public static bool DapatDibatalkan(StatusTransaksi status) {\n        return status == StatusTransaksi.Pending;\n    }\n}",
    "validationRules": [
      "public enum StatusTransaksi",
      "Pending,",
      "Berhasil,",
      "status == StatusTransaksi.Pending",
      "return "
    ],
    "quickShortcuts": [
      "public enum StatusTransaksi { Pending, Diproses, Berhasil, Gagal }",
      "public static bool DapatDibatalkan(StatusTransaksi status)",
      "return status == StatusTransaksi.Pending;"
    ],
    "explanation": "Penggunaan enum mencegah string 'magic values' dan memberikan pemeriksaan compile-time yang ketat atas alur status transaksi bisnis.",
    "workedExample": {
      "kasusSerupa": "Enum LevelAkses { User, Admin, SuperAdmin } dan pengecekan akses Admin.",
      "jawabanBenarContoh": "public enum LevelAkses { User, Admin, SuperAdmin }\nbool IsAdmin(LevelAkses l) => l == LevelAkses.Admin || l == LevelAkses.SuperAdmin;",
      "nalarBayi": "StatusTransaksi memberi cap segel: pesanan hanya boleh dibatalkan jika stempelnya masih berstatus Pending!"
    },
    "index": 100
  }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { codeChallenges };
}
