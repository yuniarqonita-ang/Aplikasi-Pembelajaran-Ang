/* ===================================================================
   SQL_TRAINER.JS - Simulator Latihan Tes Tertulis SQL & Output Koding
   Dirancang khusus untuk persiapan tes tertulis IT Software (MSSQL, C#, JS)
   Lengkap dengan Soal Tabel & Analogi Bahasa Bayi
   =================================================================== */

// Mock Database Pabrik Sepatu & Kantor IT
const mockDB = {
  Employees: [
    { id: 1, name: "Andi Saputra", department: "IT", salary: 7500000, city: "Jakarta" },
    { id: 2, name: "Bunga Melati", department: "Finance", salary: 5500000, city: "Bandung" },
    { id: 3, name: "Citra Dewi", department: "IT", salary: 8200000, city: "Surabaya" },
    { id: 4, name: "Deni Pratama", department: "Production", salary: 4800000, city: "Semarang" },
    { id: 5, name: "Eko Prasetyo", department: "IT", salary: 6500000, city: "Yogyakarta" },
    { id: 6, name: "Fani Rahma", department: "Production", salary: 5100000, city: "Solo" }
  ],

  ShoeProduction: [
    { code: "SH-001", model: "Sneakers Air", pairs: 1200, status_qc: "Passed" },
    { code: "SH-002", model: "Running Pro", pairs: 850, status_qc: "Passed" },
    { code: "SH-003", model: "Slip-On Casual", pairs: 400, status_qc: "Rejected" },
    { code: "SH-004", model: "Sneakers Air", pairs: 1500, status_qc: "Passed" },
    { code: "SH-005", model: "Sport Trail", pairs: 300, status_qc: "Pending" }
  ]
};

// Daftar Soal Latihan Tes Tertulis SQL Berbasis Tabel
const sqlChallenges = [
  {
    id: "sql-1",
    title: "Soal 1: Filter Karyawan Departemen IT (SELECT & WHERE)",
    tableName: "Employees",
    questionEn: "Write an SQL query to retrieve the 'name' and 'salary' of all employees who belong to the 'IT' department from the 'Employees' table.",
    babyHint: "🍼 Bahasa Bayi: Ibarat kamu buka buku absensi, kamu cuma mau ambil baris yang divisi kerjanya khusus anak IT doang. Gunakan mantra: SELECT name, salary FROM Employees WHERE department = 'IT'",
    correctQuery: "SELECT name, salary FROM Employees WHERE department = 'IT'",
    expectedRows: [
      { name: "Andi Saputra", salary: 7500000 },
      { name: "Citra Dewi", salary: 8200000 },
      { name: "Eko Prasetyo", salary: 6500000 }
    ],
    starterCode: "SELECT name, salary FROM Employees WHERE department = 'IT'",
    suggestedTokens: ["SELECT", "name", "salary", "FROM", "Employees", "WHERE", "department", "=", "'IT'"]
  },
  {
    id: "sql-2",
    title: "Soal 2: Cari Gaji Tertinggi (ORDER BY DESC)",
    tableName: "Employees",
    questionEn: "Write an SQL query to display all employees sorted from the highest salary to the lowest salary.",
    babyHint: "🍼 Bahasa Bayi: Susun barisan karyawan dari yang gajinya paling tebal ke yang paling tipis. Kuncinya ada di 'ORDER BY salary DESC' (Desc = Descending / Menurun)!",
    correctQuery: "SELECT * FROM Employees ORDER BY salary DESC",
    expectedRows: [
      { id: 3, name: "Citra Dewi", department: "IT", salary: 8200000, city: "Surabaya" },
      { id: 1, name: "Andi Saputra", department: "IT", salary: 7500000, city: "Jakarta" },
      { id: 5, name: "Eko Prasetyo", department: "IT", salary: 6500000, city: "Yogyakarta" },
      { id: 2, name: "Bunga Melati", department: "Finance", salary: 5500000, city: "Bandung" },
      { id: 6, name: "Fani Rahma", department: "Production", salary: 5100000, city: "Solo" },
      { id: 4, name: "Deni Pratama", department: "Production", salary: 4800000, city: "Semarang" }
    ],
    starterCode: "SELECT * FROM Employees ORDER BY salary DESC",
    suggestedTokens: ["SELECT", "*", "FROM", "Employees", "ORDER BY", "salary", "DESC"]
  },
  {
    id: "sql-3",
    title: "Soal 3: Lolos Quality Control Pabrik Sepatu (Filter String)",
    tableName: "ShoeProduction",
    questionEn: "From the 'ShoeProduction' table, retrieve all production records where the Quality Control status ('status_qc') is 'Passed'.",
    babyHint: "🍼 Bahasa Bayi: Bos pabrik minta daftar sepatu yang siap kirim ke toko, yaitu yang status QC-nya 'Passed'. Saring dengan: WHERE status_qc = 'Passed'!",
    correctQuery: "SELECT * FROM ShoeProduction WHERE status_qc = 'Passed'",
    expectedRows: [
      { code: "SH-001", model: "Sneakers Air", pairs: 1200, status_qc: "Passed" },
      { code: "SH-002", model: "Running Pro", pairs: 850, status_qc: "Passed" },
      { code: "SH-004", model: "Sneakers Air", pairs: 1500, status_qc: "Passed" }
    ],
    starterCode: "SELECT * FROM ShoeProduction WHERE status_qc = 'Passed'",
    suggestedTokens: ["SELECT", "*", "FROM", "ShoeProduction", "WHERE", "status_qc", "=", "'Passed'"]
  }
];

// Soal Tebak Output Koding (Code Output Prediction) - Bahasa Inggris dengan Terjemahan Ramah
const outputPredictionQuestions = [
  {
    id: "out-1",
    lang: "C# / JavaScript",
    badge: "Loop & Arithmetic",
    code: `let total = 10;
for (let i = 0; i < 3; i++) {
    total += 5;
}
console.log(total);`,
    questionEn: "What is the output printed to the console?",
    babyExplanation: "Mula-mula toples 'total' berisi angka 10. Perulangan (loop) berjalan 3 kali (saat i=0, i=1, i=2). Tiap putaran, toples ditambah 5. Jadi: 10 + 5 + 5 + 5 = 25!",
    options: [
      { text: "15", correct: false },
      { text: "25", correct: true },
      { text: "30", correct: false },
      { text: "105", correct: false }
    ]
  },
  {
    id: "out-2",
    lang: "MSSQL",
    badge: "SQL COUNT Function",
    code: `SELECT COUNT(*) 
FROM ShoeProduction 
WHERE status_qc = 'Passed';`,
    questionEn: "Based on the ShoeProduction table (containing 5 rows total, with 3 rows having 'Passed', 1 'Rejected', 1 'Pending'), what is the result value?",
    babyExplanation: "COUNT(*) itu artinya: 'Hitung berapa banyak baris yang cocok!'. Karena baris yang statusnya 'Passed' ada 3 baris, maka hasil kueri adalah angka 3!",
    options: [
      { text: "5", correct: false },
      { text: "3", correct: true },
      { text: "1", correct: false },
      { text: "NULL", correct: false }
    ]
  },
  {
    id: "out-3",
    lang: "JavaScript / C#",
    badge: "If-Else Condition",
    code: `let isWifiConnected = true;
let isInternetOnline = false;

if (isWifiConnected && isInternetOnline) {
    console.log("Koneksi Hijau");
} else if (isWifiConnected && !isInternetOnline) {
    console.log("Tanda Seru Kuning");
} else {
    console.log("Kabel Terputus");
}`,
    questionEn: "What message will be printed to the screen?",
    babyExplanation: "Tanda '&&' artinya DAN, sedangkan '!' artinya TIDAK. Laptop nyambung ke WiFi (true), TAPI internet tidak online (isInternetOnline bernilai false, jadi !isInternetOnline bernilai true). Maka kondisi cabang kedua yang terpenuhi: 'Tanda Seru Kuning'!",
    options: [
      { text: "Koneksi Hijau", correct: false },
      { text: "Tanda Seru Kuning", correct: true },
      { text: "Kabel Terputus", correct: false },
      { text: "Undefined", correct: false }
    ]
  },
  {
    id: "out-4",
    lang: "JavaScript Arrays",
    badge: "Array Indexing",
    code: `const servers = ["Router-01", "Switch-HQ", "Database-Main"];
console.log(servers[1]);`,
    questionEn: "What is the output of the code above?",
    babyExplanation: "Di dunia koding, urutan nomor (indeks) SELALU dimulai dari angka 0! Index 0 adalah 'Router-01', index 1 adalah 'Switch-HQ', dan index 2 adalah 'Database-Main'. Jadi servers[1] adalah Switch-HQ!",
    options: [
      { text: "Router-01", correct: false },
      { text: "Switch-HQ", correct: true },
      { text: "Database-Main", correct: false },
      { text: "Error: Index out of range", correct: false }
    ]
  }
];

// Helper Render Tabel HTML
function renderHTMLTable(data, tableId) {
  if (!data || data.length === 0) {
    return `<div style="color: var(--text-muted); padding: 12px; font-style: italic;">Tidak ada baris data.</div>`;
  }

  const columns = Object.keys(data[0]);
  let html = `<div style="overflow-x: auto;"><table class="db-table" id="${tableId}"><thead><tr>`;
  columns.forEach(col => {
    html += `<th>${col}</th>`;
  });
  html += `</tr></thead><tbody>`;

  data.forEach(row => {
    html += `<tr>`;
    columns.forEach(col => {
      html += `<td>${row[col]}</td>`;
    });
    html += `</tr>`;
  });

  html += `</tbody></table></div>`;
  return html;
}
