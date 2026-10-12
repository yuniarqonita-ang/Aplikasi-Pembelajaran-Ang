// ==============================================================================
// 🎒 SD IHSANIYAH GAJAHMADA TEGAL - KAMPUS AL HAFIDZ
// MATH FORMATIVE TEST 2 & DIVISION QUEST (KURIKULUM BILINGUAL MATEMATIKA SD)
// Lengkap dengan Game Hubungkan Garis (Matching), Nalar Bayi Kodi, & Panel Guru
// ==============================================================================

(function() {
  'use strict';

  // Bank Data Soal Berdasarkan PDF 3 (Halaman 1 - 10)
  window.IHSANIYAH_QUESTIONS = [
    {
      id: "ihs-1",
      number: 1,
      page: "Halaman 1",
      type: "multi_select",
      title: "Pola Bilangan Loncat & Operasi Hitung",
      badge: "Bagian I: Checklist Pilihan Ganda",
      instruction: "Perhatikan barisan bilangan loncat 10 berikut! Pilih satu atau lebih pernyataan yang BENAR dengan mencentang kotak.",
      diagram: `
        <div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin: 12px 0;">
          <span style="background: rgba(30, 41, 59, 0.9); padding: 8px 14px; border-radius: 8px; font-weight: 800; font-size: 1.1rem; border: 1.5px solid #38bdf8;">237</span>
          <span style="background: rgba(30, 41, 59, 0.9); padding: 8px 14px; border-radius: 8px; font-weight: 800; font-size: 1.1rem; border: 1.5px solid #38bdf8;">247</span>
          <span style="background: rgba(30, 41, 59, 0.9); padding: 8px 14px; border-radius: 8px; font-weight: 800; font-size: 1.1rem; border: 1.5px solid #38bdf8;">257</span>
          <span style="background: rgba(30, 41, 59, 0.9); padding: 8px 14px; border-radius: 8px; font-weight: 800; font-size: 1.1rem; border: 1.5px solid #38bdf8;">267</span>
          <span style="background: rgba(30, 41, 59, 0.9); padding: 8px 14px; border-radius: 8px; font-weight: 800; font-size: 1.1rem; border: 1.5px solid #38bdf8;">277</span>
          <span style="background: rgba(30, 41, 59, 0.9); padding: 8px 14px; border-radius: 8px; font-weight: 800; font-size: 1.1rem; border: 1.5px solid #38bdf8;">287</span>
        </div>
      `,
      options: [
        { key: "A", text: "A. 237 + 40 = 267", isCorrect: false, reasonWrong: "Salah, karena 237 + 40 itu hasilnya 277 (maju 4 langkah loncatan 10), bukan 267!" },
        { key: "B", text: "B. 267 – 20 = 247", isCorrect: true, reasonCorrect: "Tepat sekali! Dari 267 jika mundur 2 langkah loncatan 10 (267 - 20) pas mendarat di 247!" },
        { key: "C", text: "C. 257 + 30 = 287", isCorrect: true, reasonCorrect: "Luar biasa! Dari 257 jika maju 3 langkah loncatan 10 (257 + 30) tepat mendarat di 287!" }
      ],
      nalarBayiKodi: "Barisan ini adalah jalan setapak katak yang melompat 10 angka tiap langkah! Kalau melompat mundur 2 kali dari 267, sampainya di 247. Kalau melompat maju 3 kali dari 257, sampainya di 287!"
    },
    {
      id: "ihs-2",
      number: 2,
      page: "Halaman 1",
      type: "multi_select",
      title: "Penjumlahan Kolom Bersusun H T O (Ratusan, Puluhan, Satuan)",
      badge: "Bagian I: Nilai Huruf yang Hilang",
      instruction: "Perhatikan penjumlahan bersusun di bawah! Manakah pernyataan yang BENAR mengenai nilai kotak a, b, dan c?",
      diagram: `
        <div style="display: flex; justify-content: center; margin: 14px 0;">
          <table style="border-collapse: collapse; text-align: center; font-family: monospace; font-size: 1.25rem; font-weight: 800; background: rgba(0,0,0,0.3); padding: 10px; border-radius: 10px;">
            <tr style="color: var(--accent-cyan); border-bottom: 1px solid rgba(255,255,255,0.2);">
              <th style="padding: 6px 14px;">H (Ratusan)</th>
              <th style="padding: 6px 14px;">T (Puluhan)</th>
              <th style="padding: 6px 14px;">O (Satuan)</th>
            </tr>
            <tr>
              <td style="padding: 6px 14px;">2</td>
              <td style="padding: 6px 14px; color: #fbbf24;">b</td>
              <td style="padding: 6px 14px;">7</td>
            </tr>
            <tr style="border-bottom: 2px solid #fff;">
              <td style="padding: 6px 14px;">7</td>
              <td style="padding: 6px 14px;">2</td>
              <td style="padding: 6px 14px; color: #fbbf24;">a</td>
              <td style="padding-left: 10px; color: #4ade80;">+</td>
            </tr>
            <tr style="color: #4ade80;">
              <td style="padding: 6px 14px; color: #fbbf24;">c</td>
              <td style="padding: 6px 14px;">6</td>
              <td style="padding: 6px 14px;">9</td>
            </tr>
          </table>
        </div>
      `,
      options: [
        { key: "A", text: "A. The value of box a is 6", isCorrect: false, reasonWrong: "Salah, karena 7 + a = 9, maka a harus bernilai 2 (bukan 6)!" },
        { key: "B", text: "B. The value of box b is 4", isCorrect: true, reasonCorrect: "Tepat sekali! Pada puluhan: b + 2 = 6, maka b = 6 - 2 = 4!" },
        { key: "C", text: "C. The value of box c is 9", isCorrect: true, reasonCorrect: "Benar! Pada ratusan: 2 + 7 = 9, maka nilai c adalah 9!" }
      ],
      nalarBayiKodi: "Hitung dari kamar satuan di sebelah kanan: 7 tambah berapa supaya jadi 9? Jawabannya a = 2! Lalu ke kamar puluhan: berapa tambah 2 supaya jadi 6? b = 4! Terakhir kamar ratusan: 2 + 7 = c = 9!"
    },
    {
      id: "ihs-3",
      number: 3,
      page: "Halaman 1",
      type: "true_false_table",
      title: "Diagram Pengurangan Teknik 'Making 10' (462 - 8)",
      badge: "Bagian II: Benar / Salah (True / False)",
      instruction: "Perhatikan diagram teknik meminjam 10 di bawah untuk menghitung 462 - 8. Tentukan apakah tiap pernyataan Benar (True) atau Salah (False)!",
      diagram: `
        <div style="background: rgba(15, 23, 42, 0.7); border-radius: 12px; padding: 16px; margin: 12px 0; border: 1px solid rgba(255,255,255,0.1); text-align: center;">
          <div style="font-size: 1.15rem; font-weight: 800; color: #fff; margin-bottom: 8px;">
            462 - 8 = c
          </div>
          <div style="font-size: 0.95rem; color: #cbd5e1; line-height: 1.6;">
            462 dipecah menjadi <strong style="color: #fbbf24;">[ b ]</strong> dan <strong style="color: #38bdf8;">[ 10 ]</strong>.<br>
            Lalu 10 dikurangi 8 menghasilkan <strong style="color: #4ade80;">[ a ] = 2</strong>.<br>
            Hasil akhir: <strong style="color: #fbbf24;">b</strong> + <strong style="color: #4ade80;">a</strong> = <strong style="color: #fff;">c</strong>.
          </div>
        </div>
      `,
      statements: [
        { id: "s3_a", text: "(a) The value of 'a' is 2 (10 - 8 = 2)", correctAnswer: true, reason: "Benar! Dari 10 diambil 8 menyisakan 2." },
        { id: "s3_b", text: "(b) The value of 'b' is 452 (462 - 10 = 452)", correctAnswer: true, reason: "Benar! Karena 10 dipisahkan dari 462, maka sisanya adalah 452." },
        { id: "s3_c", text: "(c) The value of 'c' is 454 (452 + 2 = 454)", correctAnswer: true, reason: "Benar! 452 digabungkan dengan sisa 2 menjadi 454." }
      ],
      nalarBayiKodi: "Bayangkan kamu punya 462 permen dan mau membagikan 8 permen ke teman. Supaya mudah, keluarkan 10 permen dulu dari kantong (kantong tersisa 452). Ambil 8 permen dari 10 tadi, sisa 2 permen kita masukkan lagi ke kantong 452, jadinya 454 permen!"
    },
    {
      id: "ihs-4",
      number: 4,
      page: "Halaman 1-2",
      type: "true_false_table",
      title: "Membetulkan Analisis Kesalahan Hitung Pengurangan Yuri",
      badge: "Bagian II: Detektif Hitung (Error Analysis)",
      instruction: "Yuri menghitung 527 - 158 bersusun, tetapi jawabannya tertulis 431. Periksa pernyataan untuk membetulkan cara hitung Yuri!",
      diagram: `
        <div style="display: flex; gap: 20px; justify-content: center; align-items: center; flex-wrap: wrap; margin: 14px 0;">
          <div style="background: rgba(239, 68, 68, 0.15); border: 2px dashed #ef4444; border-radius: 10px; padding: 12px 18px; text-align: center;">
            <div style="font-size: 0.8rem; font-weight: 800; color: #fca5a5; margin-bottom: 4px;">Pekerjaan Yuri (SALAH):</div>
            <div style="font-family: monospace; font-size: 1.2rem; font-weight: 800; color: #fff;">
              5 2 7<br>1 5 8 -<br>------<br><span style="color: #f87171;">4 3 1</span>
            </div>
          </div>
          <div style="background: rgba(16, 185, 129, 0.15); border: 2px solid #10b981; border-radius: 10px; padding: 12px 18px; text-align: center;">
            <div style="font-size: 0.8rem; font-weight: 800; color: #86efac; margin-bottom: 4px;">Jawaban yang Benar:</div>
            <div style="font-family: monospace; font-size: 1.2rem; font-weight: 800; color: #fff;">
              5 2 7<br>1 5 8 -<br>------<br><span style="color: #4ade80;">3 6 9</span>
            </div>
          </div>
        </div>
      `,
      statements: [
        { id: "s4_a", text: "(a) Yuri salah karena lupa meminjam (regrouping) puluhan dan malah membalik angka (8 - 7 = 1)", correctAnswer: true, reason: "Benar! 7 tidak cukup dikurangi 8, jadi harus pinjam 1 puluhan menjadi 17 - 8 = 9." },
        { id: "s4_b", text: "(b) Digit satuan yang benar adalah 9 (bukan 1)", correctAnswer: true, reason: "Benar! 17 - 8 = 9." },
        { id: "s4_c", text: "(c) Hasil pengurangan yang benar adalah 369", correctAnswer: true, reason: "Benar! 527 - 158 = 369." }
      ],
      nalarBayiKodi: "Yuri terjebak! Karena 7 kurang dari 8, Yuri malah mengurangi 8 - 7. Itu tidak boleh ya! Harus pinjam 1 koin dari puluhan sebelah, jadi 17 - 8 = 9!"
    },
    {
      id: "ihs-5",
      number: 5,
      page: "Halaman 2",
      type: "fill_blank",
      title: "Pengurangan Bersusun Angka Hilang (500 - 14_ = 3_4)",
      badge: "Bagian III: Isian Singkat Digit Hilang",
      instruction: "Tentukan digit satuan pengurang dan digit puluhan hasil yang hilang pada operasi pengurangan berikut:",
      diagram: `
        <div style="display: flex; justify-content: center; margin: 14px 0;">
          <div style="font-family: monospace; font-size: 1.3rem; font-weight: 800; background: rgba(0,0,0,0.3); padding: 14px 20px; border-radius: 10px; border: 1.5px solid #38bdf8; text-align: right;">
            5 0 0<br>
            1 4 <span style="color: #f59e0b; border-bottom: 2px solid #f59e0b;">?</span> -<br>
            ------<br>
            3 <span style="color: #4ade80; border-bottom: 2px solid #4ade80;">?</span> 4
          </div>
        </div>
      `,
      expected: { x: "6", y: "5" },
      questionPrompt: "Berapakah angka pengganti tanda tanya di baris kedua (digit satuan pengurang) dan baris hasil (digit puluhan)?",
      placeholder: "Contoh: 6 dan 5",
      acceptedInputs: ["6 dan 5", "6, 5", "6,5", "6 5", "146 dan 354", "6", "54"],
      explanation: "500 - 146 = 354. Digit satuan pengurang adalah 6 (karena 10 - 6 = 4) dan digit puluhan hasil adalah 5 (karena 9 - 4 = 5).",
      nalarBayiKodi: "Angka 0 paling belakang pinjam ke tetangga jadi 10. 10 dikurangi berapa supaya jadi 4? Ya dikurangi 6! Lalu angka 0 di tengah jadi 9. 9 dikurangi 4 hasilnya 5!"
    },
    {
      id: "ihs-6",
      number: 6,
      page: "Halaman 2",
      type: "fill_blank",
      title: "Strategi Penjumlahan 'Making 10' (678 + 8)",
      badge: "Bagian III: Melengkapi Operasi",
      instruction: "Lengkapi operasi penjumlahan dengan teknik membulatkan ke puluhan terdekat:",
      diagram: `
        <div style="background: rgba(15, 23, 42, 0.7); border-radius: 12px; padding: 16px; margin: 12px 0; border: 1px solid rgba(255,255,255,0.1); text-align: center;">
          <div style="font-size: 1.15rem; font-weight: 800; color: #fff; margin-bottom: 8px;">
            678 + 8 = ....
          </div>
          <div style="font-size: 0.95rem; color: #cbd5e1; line-height: 1.6;">
            678 dipecah menjadi 676 dan 2.<br>
            Lalu 2 + 8 digabung menjadi 10.<br>
            Sehingga: <strong>676 + 10 = [ .... ]</strong>.<br>
            Jadi hasil dari 678 + 8 adalah [ .... ].
          </div>
        </div>
      `,
      expected: "686",
      acceptedInputs: ["686"],
      explanation: "676 + 10 = 686. Jadi 678 + 8 = 686.",
      nalarBayiKodi: "678 butuh 2 kelereng supaya bulat jadi 680. Kita pinjam 2 dari angka 8, jadi angka 8 tersisa 6. 680 + 6 = 686!"
    },
    {
      id: "ihs-7",
      number: 7,
      page: "Halaman 2",
      type: "column_math",
      title: "Trio Latihan Hitung Bersusun (Addition & Subtraction)",
      badge: "Bagian IV: Latihan Bersusun",
      instruction: "Hitunglah hasil dari operasi hitung bersusun berikut: (1) 297 + 358, (2) 800 - 697, dan (3) 749 - 70.",
      subQuestions: [
        { label: "297 + 358 =", expected: "655", accepted: ["655"] },
        { label: "800 - 697 =", expected: "103", accepted: ["103"] },
        { label: "749 - 70 =", expected: "679", accepted: ["679"] }
      ],
      explanation: "297 + 358 = 655. 800 - 697 = 103. 749 - 70 = 679.",
      nalarBayiKodi: "Hitung satu demi satu dari belakang! Simpan angka puluhan di atas kepala angka berikutnya kalau hasilnya lebih dari 9!"
    },
    {
      id: "ihs-8",
      number: 8,
      page: "Halaman 5",
      type: "matching_game",
      title: "👕 GAME HUBUNGKAN GARIS: Pasangkan Kaos Perkalian ke Gantungan Pembagian! 🪝",
      badge: "Bagian V: Match Sentence (Garis Hubung)",
      instruction: "Klik salah satu KAOS di sebelah kiri, lalu klik GANTUNGAN BAJU pasangannya di sebelah kanan untuk menghubungkan perkalian dengan keluarga pembagiannya!",
      pairs: [
        { leftId: "t1", leftText: "👕 9 × 3 = 27", rightId: "h1", rightText: "🪝 27 ÷ 3 = 9", reason: "9 kali 3 adalah 27, maka 27 dibagi 3 sama dengan 9!" },
        { leftId: "t2", leftText: "👕 7 × 4 = 28", rightId: "h2", rightText: "🪝 28 ÷ 4 = 7", reason: "7 kali 4 adalah 28, maka 28 dibagi 4 sama dengan 7!" },
        { leftId: "t3", leftText: "👕 4 × 5 = 20", rightId: "h3", rightText: "🪝 20 ÷ 5 = 4", reason: "4 kali 5 adalah 20, maka 20 dibagi 5 sama dengan 4!" },
        { leftId: "t4", leftText: "👕 10 × 2 = 20", rightId: "h4", rightText: "🪝 20 ÷ 2 = 10", reason: "10 kali 2 adalah 20, maka 20 dibagi 2 sama dengan 10!" },
        { leftId: "t5", leftText: "👕 8 × 4 = 32", rightId: "h5", rightText: "🪝 32 ÷ 4 = 8", reason: "8 kali 4 adalah 32, maka 32 dibagi 4 sama dengan 8!" }
      ],
      nalarBayiKodi: "Perkalian dan pembagian itu seperti saudara kembar bolak-balik! Kalau 9 × 3 = 27, maka 27 dibagi 3 pasti kembali lagi jadi 9!"
    },
    {
      id: "ihs-9",
      number: 9,
      page: "Halaman 3, 4, 6, 7, 8, 9",
      type: "division_stories",
      title: "Petualangan Cerita Pembagian Bergambar (Division Stories)",
      badge: "Bagian VI: Visual Division Stories",
      instruction: "Pecahkan teka-teki cerita pembagian nyata berikut ini:",
      stories: [
        {
          id: "st1",
          icon: "🥛",
          title: "Gelas Siska di Atas Baki (Halaman 3)",
          prompt: "Siska mempunyai 12 gelas. Ia menaruh gelas-gelas itu sama rata ke dalam 4 baki. Berapa gelas di setiap baki?",
          sentence: "12 ÷ 4 = [ ? ]",
          expected: "3",
          unit: "gelas",
          explanation: "12 dibagi rata ke 4 baki = 3 gelas per baki."
        },
        {
          id: "st2",
          icon: "🍒",
          title: "Buah Rambutan Ida (Halaman 3)",
          prompt: "Ada 15 buah rambutan. Ida memasukkan rambutan itu sama rata ke dalam 3 mangkuk. Berapa rambutan di tiap mangkuk?",
          sentence: "15 ÷ 3 = [ ? ]",
          expected: "5",
          unit: "rambutan",
          explanation: "15 dibagi 3 = 5 buah rambutan per mangkuk."
        },
        {
          id: "st3",
          icon: "🖍️",
          title: "Kotak Krayon Warna (Halaman 4)",
          prompt: "Ada 24 krayon seluruhnya. Setiap kotak berisi 6 krayon. Berapa kotak krayon yang ada?",
          sentence: "24 ÷ 6 = [ ? ]",
          expected: "4",
          unit: "kotak",
          explanation: "24 dibagi 6 = 4 kotak krayon."
        },
        {
          id: "st4",
          icon: "⛵",
          title: "Turis Naik Perahu Danau (Halaman 6)",
          prompt: "Ada 20 turis ingin berkeliling danau. Setiap perahu hanya bisa dinaiki 4 turis. Berapa perahu yang dibutuhkan?",
          sentence: "20 ÷ 4 = [ ? ]",
          expected: "5",
          unit: "perahu",
          explanation: "20 dibagi 4 = 5 perahu."
        },
        {
          id: "st5",
          icon: "🍪",
          title: "Biskuit Enak Ivan (Halaman 6)",
          prompt: "Ivan membeli 30 biskuit. Ia memasukkan 5 biskuit ke dalam tiap toples. Berapa toples yang Ivan gunakan?",
          sentence: "30 ÷ 5 = [ ? ]",
          expected: "6",
          unit: "toples",
          explanation: "30 dibagi 5 = 6 toples."
        }
      ],
      nalarBayiKodi: "Pembagian itu seperti membagikan kue tart sama rata ke teman-temanmu sampai piringnya habis tanpa ada yang iri!"
    },
    {
      id: "ihs-10",
      number: 10,
      page: "Halaman 10",
      type: "table_100",
      title: "Eksplorasi Tabel Angka 1-100: Fakta Kelipatan 2, 5, dan 10",
      badge: "Bagian VII: Tabel 100",
      instruction: "Berdasarkan tabel angka 1 sampai 100, angka manakah yang merupakan kelipatan 2 DAN kelipatan 5 DAN kelipatan 10 sekaligus?",
      prompt: "Pilih kelompok angka yang tepat:",
      options: [
        { key: "A", text: "A. 10, 20, 30, 40, 50, 60, 70, 80, 90, 100", isCorrect: true, reasonCorrect: "Tepat sekali! Angka-angka ini berakhiran 0, sehingga habis dibagi 2, habis dibagi 5, dan habis dibagi 10!" },
        { key: "B", text: "B. 5, 15, 25, 35, 45, 55, 65, 75, 85, 95", isCorrect: false, reasonWrong: "Salah! Angka-angka ini ganjil (tidak habis dibagi 2) dan tidak habis dibagi 10." },
        { key: "C", text: "C. 2, 4, 6, 8, 12, 14, 16, 18, 22, 24", isCorrect: false, reasonWrong: "Salah! Angka-angka ini memang kelipatan 2, tapi bukan kelipatan 5 atau 10." }
      ],
      nalarBayiKodi: "Angka yang genap (kelipatan 2) dan punya ekor angka nol (kelipatan 5) adalah bilangan puluhan kelipatan 10!"
    }
  ];

  // Helper State Management Siswa
  window.getIhsaniyahStudent = function() {
    try {
      const data = localStorage.getItem("ihsaniyah_active_student");
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  };

  window.setIhsaniyahStudent = function(student) {
    try {
      localStorage.setItem("ihsaniyah_active_student", JSON.stringify(student));
    } catch (e) {}
  };

  window.logoutIhsaniyahStudent = function() {
    try {
      localStorage.removeItem("ihsaniyah_active_student");
    } catch (e) {}
  };

  window.getAllIhsaniyahRecords = function() {
    try {
      const data = localStorage.getItem("ihsaniyah_student_records");
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  };

  window.saveIhsaniyahRecord = function(record) {
    try {
      const records = window.getAllIhsaniyahRecords();
      records.unshift(record);
      localStorage.setItem("ihsaniyah_student_records", JSON.stringify(records));
    } catch (e) {}
  };

  window.clearIhsaniyahRecords = function() {
    try {
      localStorage.removeItem("ihsaniyah_student_records");
    } catch (e) {}
  };

  // Export Rekap Nilai ke File CSV (Bisa Langsung Dibuka di Microsoft Excel)
  window.downloadIhsaniyahCSV = function() {
    const records = window.getAllIhsaniyahRecords();
    if (!records.length) {
      alert("Belum ada data rekap nilai siswa yang tersimpan.");
      return;
    }

    let csv = "No,Tanggal,Waktu,Nama Lengkap,Kelas,Nomor Absen,Nilai Akhir (0-100),Status,Benar,Total Soal\n";
    records.forEach((r, idx) => {
      const row = [
        idx + 1,
        `"${r.date || '-'}"`,
        `"${r.time || '-'}"`,
        `"${(r.studentName || '-').replace(/"/g, '""')}"`,
        `"${r.studentClass || '-'}"`,
        `"${r.studentNumber || '-'}"`,
        r.score || 0,
        `"${r.status || '-'}"`,
        r.correctCount || 0,
        r.totalQuestions || 10
      ];
      csv += row.join(",") + "\n";
    });

    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Rekap_Nilai_SD_Ihsaniyah_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  console.log("Modul SD Ihsaniyah Gajahmada Tegal Math Test berhasil dimuat!");
})();
