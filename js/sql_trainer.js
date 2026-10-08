/* ===================================================================
   SQL_TRAINER.JS - Simulator Latihan Tes Tertulis SQL & Output Koding
   Dirancang khusus untuk persiapan tes tertulis IT Software (MSSQL, C#, JS)
   Lengkap dengan CONTOH SOAL & JAWABAN BENAR DULU + Analogi Bahasa Bayi
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
  ],

  Products: [
    { id: 101, item_name: "Mechanical Keyboard RGB", category: "Hardware", stock: 45, unit_price: 650000 },
    { id: 102, item_name: "Wireless Optical Mouse", category: "Hardware", stock: 120, unit_price: 180000 },
    { id: 103, item_name: "Cat6 Ethernet Cable 10m", category: "Network", stock: 85, unit_price: 75000 },
    { id: 104, item_name: "Gigabit Switch 16-Port", category: "Network", stock: 14, unit_price: 1250000 },
    { id: 105, item_name: "Thermal Barcode Printer", category: "Hardware", stock: 8, unit_price: 2100000 },
    { id: 106, item_name: "UPS Battery Backup 1200VA", category: "Power", stock: 22, unit_price: 1850000 }
  ],

  SupportTickets: [
    { ticket_id: "TCK-101", employee_id: 2, issue_type: "Network Outage", priority: "High", status: "Resolved" },
    { ticket_id: "TCK-102", employee_id: 4, issue_type: "Barcode Scanner Error", priority: "Urgent", status: "In Progress" },
    { ticket_id: "TCK-103", employee_id: 1, issue_type: "Software License", priority: "Low", status: "Resolved" },
    { ticket_id: "TCK-104", employee_id: 6, issue_type: "Printer Jammed", priority: "Medium", status: "Open" },
    { ticket_id: "TCK-105", employee_id: 2, issue_type: "ERP Login Failed", priority: "Urgent", status: "Resolved" }
  ],

  ServerLogs: [
    { log_id: 1, server_name: "Web-App-01", response_time_ms: 120, status_code: 200, log_level: "INFO" },
    { log_id: 2, server_name: "Database-Main", response_time_ms: 450, status_code: 500, log_level: "ERROR" },
    { log_id: 3, server_name: "Auth-Server", response_time_ms: 95, status_code: 200, log_level: "INFO" },
    { log_id: 4, server_name: "Web-App-02", response_time_ms: 310, status_code: 404, log_level: "WARN" },
    { log_id: 5, server_name: "Backup-Node", response_time_ms: 80, status_code: 200, log_level: "INFO" }
  ]
};

// Daftar Soal Latihan Tes Tertulis SQL Berbasis Tabel (Lengkap dengan Worked Example di Setiap Soal!)
const sqlChallenges = [
  {
    id: "sql-1",
    title: "Soal 1: Filter Karyawan Departemen IT (SELECT & WHERE)",
    tableName: "Employees",
    questionEn: "Write an SQL query to retrieve the 'name' and 'salary' of all employees who belong to the 'IT' department from the 'Employees' table.",
    workedExample: {
      problemTitle: "💡 CONTOH SOAL SERUPA: Filter Karyawan Departemen Finance",
      problemEn: "Write an SQL query to retrieve the 'name' and 'city' of employees in 'Finance' department.",
      correctQuery: "SELECT name, city FROM Employees WHERE department = 'Finance'",
      babyLogic: "1. Tentukan kolom yang mau diambil: 'SELECT name, city'\n2. Tentukan tabel sumbernya: 'FROM Employees'\n3. Tentukan saringannya: 'WHERE department = \'Finance\''\nPola ini selalu sama untuk menyaring data teks!"
    },
    babyHint: "🍼 Bahasa Bayi: Ambil kolom 'name' dan 'salary' dari tabel Employees, lalu saring baris yang divisinya 'IT': WHERE department = 'IT'!",
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
    workedExample: {
      problemTitle: "💡 CONTOH SOAL SERUPA: Urutkan Karyawan dari Gaji Terendah ke Tertinggi",
      problemEn: "Display all employees sorted from lowest salary to highest salary.",
      correctQuery: "SELECT * FROM Employees ORDER BY salary ASC",
      babyLogic: "Mantra pengurutan adalah 'ORDER BY [nama_kolom]'. Kalau dari kecil ke besar gunakan 'ASC' (Ascending), kalau dari besar ke kecil (tertinggi) gunakan 'DESC' (Descending)!"
    },
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
    workedExample: {
      problemTitle: "💡 CONTOH SOAL SERUPA: Filter Sepatu yang Berstatus Pending",
      problemEn: "Retrieve all records from ShoeProduction where status_qc is 'Pending'.",
      correctQuery: "SELECT * FROM ShoeProduction WHERE status_qc = 'Pending'",
      babyLogic: "Tanda bintang (*) berarti ambil semua kolom. Lalu saring nilai teks status_qc yang tepat sama dengan 'Pending'. Nilai teks wajib diapit tanda kutip satu (' ')!"
    },
    babyHint: "🍼 Bahasa Bayi: Bos pabrik minta daftar sepatu yang siap kirim ke toko, yaitu yang status QC-nya 'Passed'. Saring dengan: WHERE status_qc = 'Passed'!",
    correctQuery: "SELECT * FROM ShoeProduction WHERE status_qc = 'Passed'",
    expectedRows: [
      { code: "SH-001", model: "Sneakers Air", pairs: 1200, status_qc: "Passed" },
      { code: "SH-002", model: "Running Pro", pairs: 850, status_qc: "Passed" },
      { code: "SH-004", model: "Sneakers Air", pairs: 1500, status_qc: "Passed" }
    ],
    starterCode: "SELECT * FROM ShoeProduction WHERE status_qc = 'Passed'",
    suggestedTokens: ["SELECT", "*", "FROM", "ShoeProduction", "WHERE", "status_qc", "=", "'Passed'"]
  },
  {
    id: "sql-4",
    title: "Soal 4: Hitung Jumlah Baris Lolos QC (COUNT Function)",
    tableName: "ShoeProduction",
    questionEn: "Write an SQL query using COUNT(*) to count how many production batches passed the Quality Control check in 'ShoeProduction'.",
    workedExample: {
      problemTitle: "💡 CONTOH SOAL SERUPA: Hitung Total Karyawan di Divisi IT",
      problemEn: "Count how many employees work in 'IT' department.",
      correctQuery: "SELECT COUNT(*) FROM Employees WHERE department = 'IT'",
      babyLogic: "Fungsi COUNT(*) bertugas sebagai juru hitung: 'Berapa banyak baris data yang cocok dengan syarat?'. Hasilnya cuma 1 angka (misal: 3)!"
    },
    babyHint: "🍼 Bahasa Bayi: Pakai COUNT(*) dari tabel ShoeProduction dengan filter WHERE status_qc = 'Passed'. Komputer akan menghitung ada 3 batch sepatu lolos!",
    correctQuery: "SELECT COUNT(*) FROM ShoeProduction WHERE status_qc = 'Passed'",
    expectedRows: [
      { "COUNT(*)": 3 }
    ],
    starterCode: "SELECT COUNT(*) FROM ShoeProduction WHERE status_qc = 'Passed'",
    suggestedTokens: ["SELECT", "COUNT(*)", "FROM", "ShoeProduction", "WHERE", "status_qc", "=", "'Passed'"]
  },
  {
    id: "sql-5",
    title: "Soal 5: Filter Rentang Gaji Karyawan (AND & Range Operator)",
    tableName: "Employees",
    questionEn: "Retrieve 'name' and 'salary' of employees earning between 6,000,000 and 8,000,000 inclusive.",
    workedExample: {
      problemTitle: "💡 CONTOH SOAL SERUPA: Filter Gaji di Bawah 6 Juta",
      problemEn: "Retrieve 'name' and 'salary' of employees earning less than 6,000,000.",
      correctQuery: "SELECT name, salary FROM Employees WHERE salary < 6000000",
      babyLogic: "Operator perbandingan angka tidak perlu tanda kutip! Jika ada batas bawah dan batas atas, gabungkan dengan 'AND' atau gunakan 'BETWEEN 6000000 AND 8000000'!"
    },
    babyHint: "🍼 Bahasa Bayi: Kamu ingin mencari karyawan dengan gaji kelas menengah: salary >= 6000000 AND salary <= 8000000 (Andi dan Eko)!",
    correctQuery: "SELECT name, salary FROM Employees WHERE salary >= 6000000 AND salary <= 8000000",
    expectedRows: [
      { name: "Andi Saputra", salary: 7500000 },
      { name: "Eko Prasetyo", salary: 6500000 }
    ],
    starterCode: "SELECT name, salary FROM Employees WHERE salary >= 6000000 AND salary <= 8000000",
    suggestedTokens: ["SELECT", "name", "salary", "FROM", "Employees", "WHERE", "salary", ">=", "6000000", "AND", "salary", "<=", "8000000"]
  },
  {
    id: "sql-6",
    title: "Soal 6: Cek Stok Hardware yang Menipis (Multi-Filter AND)",
    tableName: "Products",
    questionEn: "From the 'Products' table, retrieve 'item_name' and 'stock' for items categorized as 'Hardware' with stock less than 50 units.",
    workedExample: {
      problemTitle: "💡 CONTOH SOAL SERUPA: Filter Barang Network yang Stoknya Banyak",
      problemEn: "Retrieve 'item_name' and 'stock' for 'Network' products with stock greater than 50.",
      correctQuery: "SELECT item_name, stock FROM Products WHERE category = 'Network' AND stock > 50",
      babyLogic: "Dua syarat harus dipenuhi bersamaan: category = 'Network' DAN stock > 50. Keduanya dihubungkan dengan kata kunci 'AND'!"
    },
    babyHint: "🍼 Bahasa Bayi: Bagian gudang mau restock hardware darurat. Saring yang kategorinya 'Hardware' DAN jumlah stoknya di bawah 50!",
    correctQuery: "SELECT item_name, stock FROM Products WHERE category = 'Hardware' AND stock < 50",
    expectedRows: [
      { item_name: "Mechanical Keyboard RGB", stock: 45 },
      { item_name: "Thermal Barcode Printer", stock: 8 }
    ],
    starterCode: "SELECT item_name, stock FROM Products WHERE category = 'Hardware' AND stock < 50",
    suggestedTokens: ["SELECT", "item_name", "stock", "FROM", "Products", "WHERE", "category", "=", "'Hardware'", "AND", "stock", "<", "50"]
  },
  {
    id: "sql-7",
    title: "Soal 7: Hitung Total Produksi Pasang Sepatu (SUM Function)",
    tableName: "ShoeProduction",
    questionEn: "Write an SQL query using SUM(pairs) to calculate the total number of shoe pairs produced across all batches.",
    workedExample: {
      problemTitle: "💡 CONTOH SOAL SERUPA: Hitung Total Stok Seluruh Barang di Gudang",
      problemEn: "Calculate total stock of all items in Products table.",
      correctQuery: "SELECT SUM(stock) FROM Products",
      babyLogic: "Fungsi SUM(nama_kolom) berfungsi menjumlahkan seluruh isi angka di kolom tersebut menjadi satu total angka akhir!"
    },
    babyHint: "🍼 Bahasa Bayi: Bos pabrik tanya berapa total seluruh pasang sepatu yang dibuat mesin. Gunakan fungsi SUM: SELECT SUM(pairs) FROM ShoeProduction!",
    correctQuery: "SELECT SUM(pairs) FROM ShoeProduction",
    expectedRows: [
      { "SUM(pairs)": 4250 }
    ],
    starterCode: "SELECT SUM(pairs) FROM ShoeProduction",
    suggestedTokens: ["SELECT", "SUM(pairs)", "FROM", "ShoeProduction"]
  },
  {
    id: "sql-8",
    title: "Soal 8: Cari Model Sepatu dengan Pola Teks (LIKE '%Air%')",
    tableName: "ShoeProduction",
    questionEn: "Retrieve all records from 'ShoeProduction' where the 'model' contains the word 'Air'.",
    workedExample: {
      problemTitle: "💡 CONTOH SOAL SERUPA: Cari Model Sepatu yang Mengandung Kata 'Pro'",
      problemEn: "Retrieve all records from ShoeProduction where model contains 'Pro'.",
      correctQuery: "SELECT * FROM ShoeProduction WHERE model LIKE '%Pro%'",
      babyLogic: "Tanda persen (%) adalah wildcard / kartu bebas. '%Pro%' artinya teks apapun yang di dalamnya ada kata 'Pro', baik di depan, tengah, atau belakang!"
    },
    babyHint: "🍼 Bahasa Bayi: Kueri pencarian teks parsial! Gunakan operator 'LIKE' dipadu '%Air%' untuk menangkap model 'Sneakers Air'!",
    correctQuery: "SELECT * FROM ShoeProduction WHERE model LIKE '%Air%'",
    expectedRows: [
      { code: "SH-001", model: "Sneakers Air", pairs: 1200, status_qc: "Passed" },
      { code: "SH-004", model: "Sneakers Air", pairs: 1500, status_qc: "Passed" }
    ],
    starterCode: "SELECT * FROM ShoeProduction WHERE model LIKE '%Air%'",
    suggestedTokens: ["SELECT", "*", "FROM", "ShoeProduction", "WHERE", "model", "LIKE", "'%Air%'"]
  },
  {
    id: "sql-9",
    title: "Soal 9: Filter Tiket Bantuan Prioritas Darurat (SupportTickets)",
    tableName: "SupportTickets",
    questionEn: "Retrieve 'ticket_id', 'issue_type', and 'status' from 'SupportTickets' where priority is 'Urgent'.",
    workedExample: {
      problemTitle: "💡 CONTOH SOAL SERUPA: Filter Tiket dengan Status 'Resolved'",
      problemEn: "Retrieve ticket_id and issue_type for tickets with status 'Resolved'.",
      correctQuery: "SELECT ticket_id, issue_type FROM SupportTickets WHERE status = 'Resolved'",
      babyLogic: "Cukup tentukan kolom yang diminta, lalu beri saringan WHERE status = 'Resolved' pada tabel SupportTickets!"
    },
    babyHint: "🍼 Bahasa Bayi: Meja helpdesk IT harus mendahulukan tiket darurat: WHERE priority = 'Urgent'!",
    correctQuery: "SELECT ticket_id, issue_type, status FROM SupportTickets WHERE priority = 'Urgent'",
    expectedRows: [
      { ticket_id: "TCK-102", issue_type: "Barcode Scanner Error", status: "In Progress" },
      { ticket_id: "TCK-105", issue_type: "ERP Login Failed", status: "Resolved" }
    ],
    starterCode: "SELECT ticket_id, issue_type, status FROM SupportTickets WHERE priority = 'Urgent'",
    suggestedTokens: ["SELECT", "ticket_id", "issue_type", "status", "FROM", "SupportTickets", "WHERE", "priority", "=", "'Urgent'"]
  },
  {
    id: "sql-10",
    title: "Soal 10: Hitung Rata-Rata Gaji Karyawan IT (AVG Function)",
    tableName: "Employees",
    questionEn: "Write an SQL query using AVG(salary) to compute the average salary of employees in the 'IT' department.",
    workedExample: {
      problemTitle: "💡 CONTOH SOAL SERUPA: Hitung Rata-Rata Gaji Karyawan Divisi Production",
      problemEn: "Calculate the average salary of employees in 'Production' department.",
      correctQuery: "SELECT AVG(salary) FROM Employees WHERE department = 'Production'",
      babyLogic: "Fungsi AVG(kolom_angka) menghitung nilai rerata (jumlah dibagi banyaknya orang) khusus untuk baris yang lolos filter WHERE!"
    },
    babyHint: "🍼 Bahasa Bayi: Fungsi AVG bertugas membagi total gaji dengan jumlah anak IT: SELECT AVG(salary) FROM Employees WHERE department = 'IT'!",
    correctQuery: "SELECT AVG(salary) FROM Employees WHERE department = 'IT'",
    expectedRows: [
      { "AVG(salary)": 7400000 }
    ],
    starterCode: "SELECT AVG(salary) FROM Employees WHERE department = 'IT'",
    suggestedTokens: ["SELECT", "AVG(salary)", "FROM", "Employees", "WHERE", "department", "=", "'IT'"]
  },
  {
    id: "sql-11",
    title: "Soal 11: Deteksi Server dengan HTTP Status 500 Internal Error",
    tableName: "ServerLogs",
    questionEn: "Retrieve 'server_name' and 'response_time_ms' from 'ServerLogs' where status_code is 500.",
    workedExample: {
      problemTitle: "💡 CONTOH SOAL SERUPA: Deteksi Server yang Berstatus 200 (Normal OK)",
      problemEn: "Retrieve server_name from ServerLogs where status_code is 200.",
      correctQuery: "SELECT server_name FROM ServerLogs WHERE status_code = 200",
      babyLogic: "Angka status_code 200 atau 500 adalah tipe data numerik integer, jadi jangan diapit tanda kutip! WHERE status_code = 500."
    },
    babyHint: "🍼 Bahasa Bayi: Cari server yang sistemnya crash (kode 500): WHERE status_code = 500!",
    correctQuery: "SELECT server_name, response_time_ms FROM ServerLogs WHERE status_code = 500",
    expectedRows: [
      { server_name: "Database-Main", response_time_ms: 450 }
    ],
    starterCode: "SELECT server_name, response_time_ms FROM ServerLogs WHERE status_code = 500",
    suggestedTokens: ["SELECT", "server_name", "response_time_ms", "FROM", "ServerLogs", "WHERE", "status_code", "=", "500"]
  },
  {
    id: "sql-12",
    title: "Soal 12: Filter Karyawan Berdasarkan Pilihan Kota (OR Operator)",
    tableName: "Employees",
    questionEn: "Retrieve 'name' and 'city' of employees who are located in either 'Jakarta' or 'Surabaya'.",
    workedExample: {
      problemTitle: "💡 CONTOH SOAL SERUPA: Filter Karyawan dari Kota Bandung atau Semarang",
      problemEn: "Retrieve name and city for employees in 'Bandung' or 'Semarang'.",
      correctQuery: "SELECT name, city FROM Employees WHERE city = 'Bandung' OR city = 'Semarang'",
      babyLogic: "Jika kita ingin salah satu dari dua kondisi diterima, gunakan operator 'OR'. Karyawan dari Bandung lolos, dan karyawan dari Semarang juga lolos!"
    },
    babyHint: "🍼 Bahasa Bayi: Pakai kata sambung 'OR': WHERE city = 'Jakarta' OR city = 'Surabaya' (Andi Saputra dan Citra Dewi lolos)!",
    correctQuery: "SELECT name, city FROM Employees WHERE city = 'Jakarta' OR city = 'Surabaya'",
    expectedRows: [
      { name: "Andi Saputra", city: "Jakarta" },
      { name: "Citra Dewi", city: "Surabaya" }
    ],
    starterCode: "SELECT name, city FROM Employees WHERE city = 'Jakarta' OR city = 'Surabaya'",
    suggestedTokens: ["SELECT", "name", "city", "FROM", "Employees", "WHERE", "city", "=", "'Jakarta'", "OR", "city", "=", "'Surabaya'"]
  },
  {
    id: "sql-13",
    title: "Soal 13: Kelompokkan Data Produksi per Status QC (GROUP BY)",
    tableName: "ShoeProduction",
    questionEn: "Write an SQL query to group production batches by 'status_qc' and count the number of batches for each status.",
    workedExample: {
      problemTitle: "💡 CONTOH SOAL SERUPA: Kelompokkan Jumlah Karyawan per Departemen",
      problemEn: "Count employees grouped by department.",
      correctQuery: "SELECT department, COUNT(*) FROM Employees GROUP BY department",
      babyLogic: "GROUP BY mengumpulkan data ke dalam kategori unik. Kolom yang di-SELECT harus dicantumkan di GROUP BY, ditemani fungsi agregat seperti COUNT(*)!"
    },
    babyHint: "🍼 Bahasa Bayi: Pisahkan keranjang berdasarkan status_qc, lalu hitung masing-masing isinya: SELECT status_qc, COUNT(*) FROM ShoeProduction GROUP BY status_qc!",
    correctQuery: "SELECT status_qc, COUNT(*) FROM ShoeProduction GROUP BY status_qc",
    expectedRows: [
      { status_qc: "Passed", "COUNT(*)": 3 },
      { status_qc: "Rejected", "COUNT(*)": 1 },
      { status_qc: "Pending", "COUNT(*)": 1 }
    ],
    starterCode: "SELECT status_qc, COUNT(*) FROM ShoeProduction GROUP BY status_qc",
    suggestedTokens: ["SELECT", "status_qc", "COUNT(*)", "FROM", "ShoeProduction", "GROUP BY", "status_qc"]
  },
  {
    id: "sql-14",
    title: "Soal 14: Urutkan Produk Termahal di Gudang IT (ORDER BY unit_price)",
    tableName: "Products",
    questionEn: "Display 'item_name' and 'unit_price' for all products sorted from the highest price to the lowest price.",
    workedExample: {
      problemTitle: "💡 CONTOH SOAL SERUPA: Urutkan Produk dari yang Paling Murah",
      problemEn: "Display item_name and unit_price sorted from lowest to highest price.",
      correctQuery: "SELECT item_name, unit_price FROM Products ORDER BY unit_price ASC",
      babyLogic: "Gunakan 'ORDER BY unit_price DESC' agar barang paling berharga (seperti Printer Barcode dan UPS) muncul paling atas!"
    },
    babyHint: "🍼 Bahasa Bayi: Ambil nama barang dan harga satuan, lalu urutkan menurun dari yang paling mahal (DESC)!",
    correctQuery: "SELECT item_name, unit_price FROM Products ORDER BY unit_price DESC",
    expectedRows: [
      { item_name: "Thermal Barcode Printer", unit_price: 2100000 },
      { item_name: "UPS Battery Backup 1200VA", unit_price: 1850000 },
      { item_name: "Gigabit Switch 16-Port", unit_price: 1250000 },
      { item_name: "Mechanical Keyboard RGB", unit_price: 650000 },
      { item_name: "Wireless Optical Mouse", unit_price: 180000 },
      { item_name: "Cat6 Ethernet Cable 10m", unit_price: 75000 }
    ],
    starterCode: "SELECT item_name, unit_price FROM Products ORDER BY unit_price DESC",
    suggestedTokens: ["SELECT", "item_name", "unit_price", "FROM", "Products", "ORDER BY", "unit_price", "DESC"]
  },
  {
    id: "sql-15",
    title: "Soal 15: Deteksi Server dengan Waktu Respons Lambat (> 300ms)",
    tableName: "ServerLogs",
    questionEn: "Retrieve 'server_name' and 'response_time_ms' from 'ServerLogs' where response time is strictly greater than 300 ms.",
    workedExample: {
      problemTitle: "💡 CONTOH SOAL SERUPA: Deteksi Server yang Responsnya Cepat (< 100ms)",
      problemEn: "Retrieve server_name and response_time_ms for fast servers (< 100 ms).",
      correctQuery: "SELECT server_name, response_time_ms FROM ServerLogs WHERE response_time_ms < 100",
      babyLogic: "Gunakan tanda lebih besar '>' untuk mencari server yang mengalami kelambatan / lagging: WHERE response_time_ms > 300!"
    },
    babyHint: "🍼 Bahasa Bayi: Cari server yang responsnya lelet (di atas 300ms): Database-Main (450ms) dan Web-App-02 (310ms)!",
    correctQuery: "SELECT server_name, response_time_ms FROM ServerLogs WHERE response_time_ms > 300",
    expectedRows: [
      { server_name: "Database-Main", response_time_ms: 450 },
      { server_name: "Web-App-02", response_time_ms: 310 }
    ],
    starterCode: "SELECT server_name, response_time_ms FROM ServerLogs WHERE response_time_ms > 300",
    suggestedTokens: ["SELECT", "server_name", "response_time_ms", "FROM", "ServerLogs", "WHERE", "response_time_ms", ">", "300"]
  }
];

// Soal Tebak Output Koding (Code Output Prediction) - Lengkap dengan Worked Example & Nalar Bahasa Bayi
const outputPredictionQuestions = [
  {
    id: "out-1",
    lang: "C# / JavaScript",
    badge: "Loop & Arithmetic",
    workedExample: {
      sampleCode: "let saldo = 0;\nfor (let i = 0; i < 2; i++) {\n    saldo += 10;\n}\nconsole.log(saldo);",
      sampleQuestion: "Berapa output konsol dari kode di atas?",
      sampleAnswer: "20",
      sampleLogic: "Mula-mula saldo = 0. Loop berputar 2 kali (i=0, i=1). Tiap putaran ditambah 10. Hasil akhir: 0 + 10 + 10 = 20!"
    },
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
    workedExample: {
      sampleCode: "SELECT COUNT(*) FROM Employees WHERE department = 'IT';",
      sampleQuestion: "Jika tabel Employees memiliki 3 staf IT dari total 6 karyawan, berapa hasil COUNT(*) di atas?",
      sampleAnswer: "3",
      sampleLogic: "COUNT(*) menghitung berapa banyak baris yang lolos filter WHERE. Karena ada 3 staf IT, outputnya adalah angka 3!"
    },
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
    workedExample: {
      sampleCode: "let lampuMerah = true;\nif (!lampuMerah) {\n    console.log('Maju');\n} else {\n    console.log('Berhenti');\n}",
      sampleQuestion: "Apa pesan yang dicetak?",
      sampleAnswer: "Berhenti",
      sampleLogic: "Tanda '!' membalik nilai. Jika lampuMerah true, maka !lampuMerah menjadi false. Cabang if gagal, sehingga cabang else dieksekusi: 'Berhenti'!"
    },
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
    workedExample: {
      sampleCode: "const fruits = ['Apel', 'Mangga', 'Jeruk'];\nconsole.log(fruits[0]);",
      sampleQuestion: "Apa hasil cetak fruits[0]?",
      sampleAnswer: "Apel",
      sampleLogic: "Indeks array selalu dimulai dari nol (0). Index 0 adalah elemen pertama ('Apel'), index 1 adalah yang kedua ('Mangga')!"
    },
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
  },
  {
    id: "out-5",
    lang: "JavaScript Data Types",
    badge: "String Concatenation vs Addition",
    workedExample: {
      sampleCode: "let a = '5';\nlet b = 5;\nconsole.log(a + b);",
      sampleQuestion: "Berapa hasil penjumlahan teks '5' dengan angka 5 di JavaScript?",
      sampleAnswer: "'55'",
      sampleLogic: "Jika ada salah satu variabel bertipe String (teks diapit kutip), tanda '+' berubah fungsi menjadi penyambung teks (concatenation), bukan penjumlahan matematika!"
    },
    code: `let code = "10";
let score = 20;
console.log(code + score);`,
    questionEn: "What is the output printed to the console?",
    babyExplanation: "Awas jebakan klasik tes IT! Variabel code bertipe string teks ("10"), sedangkan score adalah angka (20). Di JavaScript, teks + angka akan disambung menjadi teks '1020', bukan dihitung jadi 30!",
    options: [
      { text: "30", correct: false },
      { text: "1020", correct: true },
      { text: "NaN", correct: false },
      { text: "TypeError", correct: false }
    ]
  },
  {
    id: "out-6",
    lang: "JavaScript / C# Functions",
    badge: "Function Return Value",
    workedExample: {
      sampleCode: "function add(a, b) {\n    return a + b;\n}\nconsole.log(add(2, 3) * 2);",
      sampleQuestion: "Berapa hasil eksekusi add(2, 3) * 2?",
      sampleAnswer: "10",
      sampleLogic: "add(2, 3) menghasilkan nilai return 5. Lalu 5 dikalikan 2 menghasilkan nilai 10!"
    },
    code: `function multiply(x, y) {
    return x * y;
}
let result = multiply(3, 4) + 2;
console.log(result);`,
    questionEn: "What value will be printed in 'result'?",
    babyExplanation: "Fungsi multiply(3, 4) menghitung perkalian 3 x 4 = 12. Lalu nilai return 12 tersebut ditambah angka 2 di luar fungsi. Jadi hasil akhirnya: 12 + 2 = 14!",
    options: [
      { text: "10", correct: false },
      { text: "14", correct: true },
      { text: "24", correct: false },
      { text: "18", correct: false }
    ]
  },
  {
    id: "out-7",
    lang: "Boolean Logic & Operators",
    badge: "Logical Operator Precedence",
    workedExample: {
      sampleCode: "let ans = true || false && false;\nconsole.log(ans);",
      sampleQuestion: "Berapa nilai Boolean 'ans'?",
      sampleAnswer: "true",
      sampleLogic: "Operator && (DAN) memiliki prioritas lebih tinggi daripada || (ATAU). (false && false) menjadi false. Lalu true || false menghasilkan nilai true!"
    },
    code: `let isValid = true;
let isBlocked = false;
let accessGranted = isValid && !isBlocked;
console.log(accessGranted);`,
    questionEn: "What is the boolean output printed to the console?",
    babyExplanation: "isValid bernilai true. isBlocked bernilai false, sehingga !isBlocked (kebalikan dari false) menjadi true. Kedua sisi (true && true) terpenuhi, sehingga outputnya adalah true!",
    options: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "undefined", correct: false },
      { text: "null", correct: false }
    ]
  },
  {
    id: "out-8",
    lang: "JavaScript Collections",
    badge: "Array Length Property",
    workedExample: {
      sampleCode: "const nums = [10, 20];\nconsole.log(nums.length);",
      sampleQuestion: "Berapa nilai nums.length?",
      sampleAnswer: "2",
      sampleLogic: "Properti .length menghitung total jumlah fisik elemen di dalam array, yaitu ada 2 angka!"
    },
    code: `const components = ["CPU", "RAM", "SSD", "Motherboard"];
console.log(components.length);`,
    questionEn: "What is the output printed by components.length?",
    babyExplanation: "Properti .length menghitung jumlah total barang fisik yang ada di dalam list. Karena ada 'CPU', 'RAM', 'SSD', dan 'Motherboard', totalnya ada 4 barang!",
    options: [
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "undefined", correct: false }
    ]
  },
  {
    id: "out-9",
    lang: "Control Flow",
    badge: "While Loop Execution",
    workedExample: {
      sampleCode: "let k = 1;\nwhile (k < 4) {\n    k += 2;\n}\nconsole.log(k);",
      sampleQuestion: "Berapa nilai akhir k?",
      sampleAnswer: "5",
      sampleLogic: "Awal: k=1. Putaran 1: k=3 (<4 lanjut). Putaran 2: k=5 (5 tidak kurang dari 4, loop berhenti). Nilai akhir k = 5!"
    },
    code: `let count = 0;
while (count < 9) {
    count += 3;
}
console.log(count);`,
    questionEn: "What is the final value of 'count' when the loop terminates?",
    babyExplanation: "Loop berputar: 0 -> 3 -> 6 -> 9. Ketika count mencapai 9, kondisi 'count < 9' menjadi FALSE sehingga loop langsung berhenti. Nilai akhir count yang dicetak adalah 9!",
    options: [
      { text: "6", correct: false },
      { text: "9", correct: true },
      { text: "12", correct: false },
      { text: "8", correct: false }
    ]
  },
  {
    id: "out-10",
    lang: "MSSQL / SQL Logic",
    badge: "SQL Wildcard Matching",
    workedExample: {
      sampleCode: "SELECT name FROM Employees WHERE name LIKE 'B%';",
      sampleQuestion: "Berdasarkan tabel karyawan, siapa yang cocok dengan pola 'B%'?",
      sampleAnswer: "Bunga Melati",
      sampleLogic: "'B%' berarti diawali huruf B besar diikuti huruf apapun setelahnya!"
    },
    code: `SELECT name 
FROM Employees 
WHERE name LIKE 'A%';`,
    questionEn: "Which employee name will be matched by the query 'WHERE name LIKE \'A%\''?",
    babyExplanation: "Tanda persen (%) di belakang huruf 'A' berarti mencari data yang nama depannya diawali huruf 'A'. Di antara karyawan, yang berawalan 'A' adalah 'Andi Saputra'!",
    options: [
      { text: "Andi Saputra", correct: true },
      { text: "Citra Dewi", correct: false },
      { text: "Eko Prasetyo", correct: false },
      { text: "Semua Karyawan", correct: false }
    ]
  },
  {
    id: "out-11",
    lang: "JavaScript Objects",
    badge: "Object Property Access",
    workedExample: {
      sampleCode: "const server = { ip: '192.168.1.1', status: 'Online' };\nconsole.log(server.status);",
      sampleQuestion: "Apa yang dicetak ke konsol?",
      sampleAnswer: "'Online'",
      sampleLogic: "Mengakses nilai properti object menggunakan notasi titik (.status) mengambil value 'Online'!"
    },
    code: `const appConfig = {
    appName: "Kodi Learning Studio",
    port: 8080,
    isProduction: false
};
console.log(appConfig.port);`,
    questionEn: "What is the output of the console.log statement?",
    babyExplanation: "Di JavaScript, kita mengakses isi properti objek menggunakan tanda titik (.port). Nilai dari properti port adalah angka 8080!",
    options: [
      { text: "8080", correct: true },
      { text: ""Kodi Learning Studio"", correct: false },
      { text: "false", correct: false },
      { text: "undefined", correct: false }
    ]
  },
  {
    id: "out-12",
    lang: "JavaScript / C# Operators",
    badge: "Ternary Operator (Shorthand If)",
    workedExample: {
      sampleCode: "let umur = 18;\nlet izin = umur >= 17 ? 'Boleh' : 'Dilarang';\nconsole.log(izin);",
      sampleQuestion: "Apa isi variabel izin?",
      sampleAnswer: "'Boleh'",
      sampleLogic: "Kondisi umur >= 17 terpenuhi (true), maka nilai di sebelah kiri tanda titik dua (:) yaitu 'Boleh' yang diambil!"
    },
    code: `let testScore = 85;
let resultStatus = testScore >= 75 ? "Qualified" : "Review";
console.log(resultStatus);`,
    questionEn: "What will be printed as the resultStatus?",
    babyExplanation: "Operator ternary (kondisi ? jika_benar : jika_salah) adalah if-else kilat! Karena testScore (85) lebih besar dari 75 (kondisi BENAR), maka teks sebelum titik dua yang dipilih: 'Qualified'!",
    options: [
      { text: "Qualified", correct: true },
      { text: "Review", correct: false },
      { text: "85", correct: false },
      { text: "true", correct: false }
    ]
  },
  {
    id: "out-13",
    lang: "Arithmetic Operators",
    badge: "Modulo Operator (%)",
    workedExample: {
      sampleCode: "let sisa = 7 % 2;\nconsole.log(sisa);",
      sampleQuestion: "Berapa sisa pembagian 7 % 2?",
      sampleAnswer: "1",
      sampleLogic: "7 dibagi 2 menghasilkan 3 dengan sisa 1. Jadi 7 % 2 = 1!"
    },
    code: `let packetSize = 10;
let bufferCapacity = 3;
let remainder = packetSize % bufferCapacity;
console.log(remainder);`,
    questionEn: "What is the value of the 'remainder' variable?",
    babyExplanation: "Tanda persen '%' dalam matematika koding adalah Modulo (sisa hasil bagi)! 10 dibagi 3 menghasilkan 3, dengan sisa pembagian 1 (karena 3 x 3 = 9, sisa 1). Jadi hasilnya adalah 1!",
    options: [
      { text: "3.33", correct: false },
      { text: "1", correct: true },
      { text: "3", correct: false },
      { text: "0", correct: false }
    ]
  },
  {
    id: "out-14",
    lang: "Data Structures",
    badge: "Stack Operations (Push & Pop)",
    workedExample: {
      sampleCode: "const antrian = ['A'];\nantrian.push('B');\nconsole.log(antrian.pop());",
      sampleQuestion: "Elemen apa yang dikembalikan oleh pop()?",
      sampleAnswer: "'B'",
      sampleLogic: "push() memasukkan ke tumpukan paling atas. pop() mengambil dan mencabut elemen yang terakhir masuk (LIFO) yaitu 'B'!"
    },
    code: `const networkStack = ["Physical", "DataLink", "Network"];
let removedLayer = networkStack.pop();
console.log(removedLayer);`,
    questionEn: "What element is removed and printed by networkStack.pop()?",
    babyExplanation: "Prinsip tumpukan piring (Stack): Barang yang paling terakhir masuk adalah yang pertama kali dicabut (LIFO: Last In First Out). Karena 'Network' ada di urutan paling akhir, pop() akan mencabut 'Network'!",
    options: [
      { text: "Physical", correct: false },
      { text: "DataLink", correct: false },
      { text: "Network", correct: true },
      { text: "undefined", correct: false }
    ]
  },
  {
    id: "out-15",
    lang: "MSSQL Aggregation",
    badge: "SQL MAX Function",
    workedExample: {
      sampleCode: "SELECT MIN(salary) FROM Employees;",
      sampleQuestion: "Jika gaji terendah di tabel Employees adalah 4.800.000, berapa output kueri di atas?",
      sampleAnswer: "4800000",
      sampleLogic: "Fungsi MIN() mencari angka paling kecil di dalam kolom!"
    },
    code: `SELECT MAX(salary) 
FROM Employees;`,
    questionEn: "Given that employee salaries are: 7500000, 5500000, 8200000, 4800000, 6500000, 5100000, what is the output of MAX(salary)?",
    babyExplanation: "Fungsi MAX(kolom) mencari nilai angka yang paling tinggi di seluruh baris tabel. Di antara semua karyawan, gaji Citra Dewi sebesar 8.200.000 adalah yang tertinggi!",
    options: [
      { text: "8200000", correct: true },
      { text: "7500000", correct: false },
      { text: "4800000", correct: false },
      { text: "6500000", correct: false }
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
