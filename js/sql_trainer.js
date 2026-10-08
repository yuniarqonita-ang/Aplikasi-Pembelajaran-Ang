/* ===================================================================
   SQL_TRAINER.JS - Simulator Latihan Tes Tertulis SQL & Output Koding
   Dirancang khusus untuk persiapan tes tertulis IT Software (MSSQL, C#, JS)
   Lengkap dengan 100 TANTANGAN SQL + 100 TEBAK OUTPUT KODING
   Setiap tantangan dilengkapi: CONTOH SOAL & JAWABAN BENAR DULU + Nalar Bayi
   =================================================================== */

// Mock Database Pabrik & Kantor IT (5 Tabel Lengkap)
const mockDB = {
  "Employees": [
    {
      "id": 1,
      "name": "Andi Saputra",
      "department": "IT",
      "salary": 7500000,
      "city": "Jakarta",
      "status": "Active"
    },
    {
      "id": 2,
      "name": "Bunga Melati",
      "department": "Finance",
      "salary": 5500000,
      "city": "Bandung",
      "status": "Active"
    },
    {
      "id": 3,
      "name": "Citra Dewi",
      "department": "IT",
      "salary": 8200000,
      "city": "Surabaya",
      "status": "Active"
    },
    {
      "id": 4,
      "name": "Deni Pratama",
      "department": "Production",
      "salary": 4800000,
      "city": "Semarang",
      "status": "Active"
    },
    {
      "id": 5,
      "name": "Eko Prasetyo",
      "department": "IT",
      "salary": 6500000,
      "city": "Yogyakarta",
      "status": "Active"
    },
    {
      "id": 6,
      "name": "Fani Rahma",
      "department": "Production",
      "salary": 5100000,
      "city": "Solo",
      "status": "On Leave"
    },
    {
      "id": 7,
      "name": "Gilang Ramadhan",
      "department": "Finance",
      "salary": 6200000,
      "city": "Jakarta",
      "status": "Active"
    },
    {
      "id": 8,
      "name": "Hany Wijaya",
      "department": "IT",
      "salary": 9100000,
      "city": "Jakarta",
      "status": "Active"
    },
    {
      "id": 9,
      "name": "Indra Gunawan",
      "department": "Production",
      "salary": 4500000,
      "city": "Surabaya",
      "status": "Active"
    },
    {
      "id": 10,
      "name": "Joko Susilo",
      "department": "Logistics",
      "salary": 5300000,
      "city": "Semarang",
      "status": "Active"
    }
  ],
  "ShoeProduction": [
    {
      "code": "SH-001",
      "model": "Sneakers Air",
      "pairs": 1200,
      "status_qc": "Passed",
      "machine_id": "M-1"
    },
    {
      "code": "SH-002",
      "model": "Running Pro",
      "pairs": 850,
      "status_qc": "Passed",
      "machine_id": "M-2"
    },
    {
      "code": "SH-003",
      "model": "Slip-On Casual",
      "pairs": 400,
      "status_qc": "Rejected",
      "machine_id": "M-1"
    },
    {
      "code": "SH-004",
      "model": "Sneakers Air",
      "pairs": 1500,
      "status_qc": "Passed",
      "machine_id": "M-3"
    },
    {
      "code": "SH-005",
      "model": "Sport Trail",
      "pairs": 300,
      "status_qc": "Pending",
      "machine_id": "M-2"
    },
    {
      "code": "SH-006",
      "model": "Running Pro",
      "pairs": 1100,
      "status_qc": "Passed",
      "machine_id": "M-3"
    },
    {
      "code": "SH-007",
      "model": "Classic Leather",
      "pairs": 650,
      "status_qc": "Passed",
      "machine_id": "M-1"
    },
    {
      "code": "SH-008",
      "model": "Slip-On Casual",
      "pairs": 500,
      "status_qc": "Passed",
      "machine_id": "M-2"
    },
    {
      "code": "SH-009",
      "model": "Sport Trail",
      "pairs": 250,
      "status_qc": "Rejected",
      "machine_id": "M-3"
    },
    {
      "code": "SH-010",
      "model": "Sneakers Elite",
      "pairs": 900,
      "status_qc": "Passed",
      "machine_id": "M-1"
    }
  ],
  "Products": [
    {
      "id": 101,
      "item_name": "Mechanical Keyboard RGB",
      "category": "Hardware",
      "stock": 45,
      "unit_price": 650000
    },
    {
      "id": 102,
      "item_name": "Wireless Optical Mouse",
      "category": "Hardware",
      "stock": 120,
      "unit_price": 180000
    },
    {
      "id": 103,
      "item_name": "Cat6 Ethernet Cable 10m",
      "category": "Network",
      "stock": 85,
      "unit_price": 75000
    },
    {
      "id": 104,
      "item_name": "Gigabit Switch 16-Port",
      "category": "Network",
      "stock": 14,
      "unit_price": 1250000
    },
    {
      "id": 105,
      "item_name": "Thermal Barcode Printer",
      "category": "Hardware",
      "stock": 8,
      "unit_price": 2100000
    },
    {
      "id": 106,
      "item_name": "UPS Battery Backup 1200VA",
      "category": "Power",
      "stock": 22,
      "unit_price": 1850000
    },
    {
      "id": 107,
      "item_name": "USB-C Multiport Hub",
      "category": "Hardware",
      "stock": 60,
      "unit_price": 320000
    },
    {
      "id": 108,
      "item_name": "Fiber Optic Patch Cord",
      "category": "Network",
      "stock": 40,
      "unit_price": 110000
    },
    {
      "id": 109,
      "item_name": "Wireless Access Point",
      "category": "Network",
      "stock": 18,
      "unit_price": 950000
    },
    {
      "id": 110,
      "item_name": "Power Surge Protector",
      "category": "Power",
      "stock": 35,
      "unit_price": 250000
    }
  ],
  "SupportTickets": [
    {
      "ticket_id": "TCK-101",
      "employee_id": 2,
      "issue_type": "Network Outage",
      "priority": "High",
      "status": "Resolved"
    },
    {
      "ticket_id": "TCK-102",
      "employee_id": 4,
      "issue_type": "Barcode Scanner Error",
      "priority": "Urgent",
      "status": "In Progress"
    },
    {
      "ticket_id": "TCK-103",
      "employee_id": 1,
      "issue_type": "Software License",
      "priority": "Low",
      "status": "Resolved"
    },
    {
      "ticket_id": "TCK-104",
      "employee_id": 6,
      "issue_type": "Printer Jammed",
      "priority": "Medium",
      "status": "Open"
    },
    {
      "ticket_id": "TCK-105",
      "employee_id": 2,
      "issue_type": "ERP Login Failed",
      "priority": "Urgent",
      "status": "Resolved"
    },
    {
      "ticket_id": "TCK-106",
      "employee_id": 5,
      "issue_type": "VPN Disconnected",
      "priority": "High",
      "status": "Resolved"
    },
    {
      "ticket_id": "TCK-107",
      "employee_id": 7,
      "issue_type": "Excel Macro Crash",
      "priority": "Low",
      "status": "Open"
    },
    {
      "ticket_id": "TCK-108",
      "employee_id": 9,
      "issue_type": "Label Printer Offline",
      "priority": "Urgent",
      "status": "In Progress"
    },
    {
      "ticket_id": "TCK-109",
      "employee_id": 3,
      "issue_type": "Database Slowdown",
      "priority": "High",
      "status": "Resolved"
    },
    {
      "ticket_id": "TCK-110",
      "employee_id": 10,
      "issue_type": "Barcode Sync Delay",
      "priority": "Medium",
      "status": "Resolved"
    }
  ],
  "ServerLogs": [
    {
      "log_id": 1,
      "server_name": "Web-App-01",
      "response_time_ms": 120,
      "status_code": 200,
      "log_level": "INFO"
    },
    {
      "log_id": 2,
      "server_name": "Database-Main",
      "response_time_ms": 450,
      "status_code": 500,
      "log_level": "ERROR"
    },
    {
      "log_id": 3,
      "server_name": "Auth-Server",
      "response_time_ms": 95,
      "status_code": 200,
      "log_level": "INFO"
    },
    {
      "log_id": 4,
      "server_name": "Web-App-02",
      "response_time_ms": 310,
      "status_code": 404,
      "log_level": "WARN"
    },
    {
      "log_id": 5,
      "server_name": "Backup-Node",
      "response_time_ms": 80,
      "status_code": 200,
      "log_level": "INFO"
    },
    {
      "log_id": 6,
      "server_name": "Api-Gateway",
      "response_time_ms": 110,
      "status_code": 200,
      "log_level": "INFO"
    },
    {
      "log_id": 7,
      "server_name": "Cache-Redis",
      "response_time_ms": 45,
      "status_code": 200,
      "log_level": "INFO"
    },
    {
      "log_id": 8,
      "server_name": "Database-Replica",
      "response_time_ms": 380,
      "status_code": 500,
      "log_level": "ERROR"
    },
    {
      "log_id": 9,
      "server_name": "Queue-Worker",
      "response_time_ms": 210,
      "status_code": 200,
      "log_level": "INFO"
    },
    {
      "log_id": 10,
      "server_name": "Payment-Service",
      "response_time_ms": 420,
      "status_code": 503,
      "log_level": "ERROR"
    }
  ]
};

// 100 Tantangan Soal Kueri SQL Tabel (10 Kategori Lengkap)
const sqlChallenges = [
  {
    "id": "sql-1",
    "category": "1. SELECT Dasar",
    "title": "Soal 1: Tampilkan Nama & Divisi Seluruh Karyawan",
    "tableName": "Employees",
    "questionEn": "Write an SQL query to retrieve the 'name' and 'department' of all employees.",
    "babyHint": "🍼 Bahasa Bayi: Ambil kolom 'name' dan 'department' dari tabel Employees!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "name",
      "department",
      "FROM",
      "Employees"
    ],
    "correctQuery": "SELECT name, department FROM Employees",
    "expectedRows": [
      {
        "name": "Andi Saputra",
        "department": "IT"
      },
      {
        "name": "Bunga Melati",
        "department": "Finance"
      },
      {
        "name": "Citra Dewi",
        "department": "IT"
      },
      {
        "name": "Deni Pratama",
        "department": "Production"
      },
      {
        "name": "Eko Prasetyo",
        "department": "IT"
      },
      {
        "name": "Fani Rahma",
        "department": "Production"
      },
      {
        "name": "Gilang Ramadhan",
        "department": "Finance"
      },
      {
        "name": "Hany Wijaya",
        "department": "IT"
      },
      {
        "name": "Indra Gunawan",
        "department": "Production"
      },
      {
        "name": "Joko Susilo",
        "department": "Logistics"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Tampilkan Nama & Kota Karyawan",
      "problemEn": "Retrieve 'name' and 'city' from Employees table.",
      "correctQuery": "SELECT name, city FROM Employees",
      "babyLogic": "Tentukan kolom yang mau diambil setelah kata kunci SELECT, lalu sebut nama tabel setelah FROM!"
    }
  },
  {
    "id": "sql-2",
    "category": "1. SELECT Dasar",
    "title": "Soal 2: Tampilkan Seluruh Kolom Tabel Produk",
    "tableName": "Products",
    "questionEn": "Write an SQL query to select all columns and all records from the 'Products' table.",
    "babyHint": "🍼 Bahasa Bayi: Pakai tanda bintang (*): SELECT * FROM Products!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "*",
      "FROM",
      "Products"
    ],
    "correctQuery": "SELECT * FROM Products",
    "expectedRows": [
      {
        "id": 101,
        "item_name": "Mechanical Keyboard RGB",
        "category": "Hardware",
        "stock": 45,
        "unit_price": 650000
      },
      {
        "id": 102,
        "item_name": "Wireless Optical Mouse",
        "category": "Hardware",
        "stock": 120,
        "unit_price": 180000
      },
      {
        "id": 103,
        "item_name": "Cat6 Ethernet Cable 10m",
        "category": "Network",
        "stock": 85,
        "unit_price": 75000
      },
      {
        "id": 104,
        "item_name": "Gigabit Switch 16-Port",
        "category": "Network",
        "stock": 14,
        "unit_price": 1250000
      },
      {
        "id": 105,
        "item_name": "Thermal Barcode Printer",
        "category": "Hardware",
        "stock": 8,
        "unit_price": 2100000
      },
      {
        "id": 106,
        "item_name": "UPS Battery Backup 1200VA",
        "category": "Power",
        "stock": 22,
        "unit_price": 1850000
      },
      {
        "id": 107,
        "item_name": "USB-C Multiport Hub",
        "category": "Hardware",
        "stock": 60,
        "unit_price": 320000
      },
      {
        "id": 108,
        "item_name": "Fiber Optic Patch Cord",
        "category": "Network",
        "stock": 40,
        "unit_price": 110000
      },
      {
        "id": 109,
        "item_name": "Wireless Access Point",
        "category": "Network",
        "stock": 18,
        "unit_price": 950000
      },
      {
        "id": 110,
        "item_name": "Power Surge Protector",
        "category": "Power",
        "stock": 35,
        "unit_price": 250000
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Ambil Seluruh Kolom Karyawan",
      "problemEn": "Select all columns from Employees table.",
      "correctQuery": "SELECT * FROM Employees",
      "babyLogic": "Tanda bintang (*) berarti jurus sapu jagat: ambil semua kolom yang ada di tabel tanpa terkecuali!"
    }
  },
  {
    "id": "sql-3",
    "category": "1. SELECT Dasar",
    "title": "Soal 3: Tampilkan Model dan Pasang Sepatu yang Diproduksi",
    "tableName": "ShoeProduction",
    "questionEn": "Retrieve the 'model' and 'pairs' from the 'ShoeProduction' table.",
    "babyHint": "🍼 Bahasa Bayi: Pilih kolom 'model' dan 'pairs' dari tabel ShoeProduction!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "model",
      "pairs",
      "FROM",
      "ShoeProduction"
    ],
    "correctQuery": "SELECT model, pairs FROM ShoeProduction",
    "expectedRows": [
      {
        "model": "Sneakers Air",
        "pairs": 1200
      },
      {
        "model": "Running Pro",
        "pairs": 850
      },
      {
        "model": "Slip-On Casual",
        "pairs": 400
      },
      {
        "model": "Sneakers Air",
        "pairs": 1500
      },
      {
        "model": "Sport Trail",
        "pairs": 300
      },
      {
        "model": "Running Pro",
        "pairs": 1100
      },
      {
        "model": "Classic Leather",
        "pairs": 650
      },
      {
        "model": "Slip-On Casual",
        "pairs": 500
      },
      {
        "model": "Sport Trail",
        "pairs": 250
      },
      {
        "model": "Sneakers Elite",
        "pairs": 900
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Ambil Kode dan Status QC Sepatu",
      "problemEn": "Retrieve 'code' and 'status_qc' from ShoeProduction.",
      "correctQuery": "SELECT code, status_qc FROM ShoeProduction",
      "babyLogic": "Tulis kolom 'code' lalu beri tanda koma sebelum kolom 'status_qc'!"
    }
  },
  {
    "id": "sql-4",
    "category": "1. SELECT Dasar",
    "title": "Soal 4: Tampilkan Nama Produk dan Stok Gudang",
    "tableName": "Products",
    "questionEn": "Retrieve 'item_name' and 'stock' of all items in the 'Products' table.",
    "babyHint": "🍼 Bahasa Bayi: Ambil kolom item_name dan stock dari Products!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "item_name",
      "stock",
      "FROM",
      "Products"
    ],
    "correctQuery": "SELECT item_name, stock FROM Products",
    "expectedRows": [
      {
        "item_name": "Mechanical Keyboard RGB",
        "stock": 45
      },
      {
        "item_name": "Wireless Optical Mouse",
        "stock": 120
      },
      {
        "item_name": "Cat6 Ethernet Cable 10m",
        "stock": 85
      },
      {
        "item_name": "Gigabit Switch 16-Port",
        "stock": 14
      },
      {
        "item_name": "Thermal Barcode Printer",
        "stock": 8
      },
      {
        "item_name": "UPS Battery Backup 1200VA",
        "stock": 22
      },
      {
        "item_name": "USB-C Multiport Hub",
        "stock": 60
      },
      {
        "item_name": "Fiber Optic Patch Cord",
        "stock": 40
      },
      {
        "item_name": "Wireless Access Point",
        "stock": 18
      },
      {
        "item_name": "Power Surge Protector",
        "stock": 35
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Ambil Nama Barang dan Harga Satuan",
      "problemEn": "Retrieve 'item_name' and 'unit_price' from Products.",
      "correctQuery": "SELECT item_name, unit_price FROM Products",
      "babyLogic": "Pilih kolom yang diminta: SELECT item_name, unit_price FROM Products!"
    }
  },
  {
    "id": "sql-5",
    "category": "1. SELECT Dasar",
    "title": "Soal 5: Tampilkan ID Tiket, Masalah, dan Status Bantuan",
    "tableName": "SupportTickets",
    "questionEn": "Retrieve 'ticket_id', 'issue_type', and 'status' from 'SupportTickets'.",
    "babyHint": "🍼 Bahasa Bayi: Tiga kolom: ticket_id, issue_type, dan status dari SupportTickets!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "ticket_id",
      "issue_type",
      "status",
      "FROM",
      "SupportTickets"
    ],
    "correctQuery": "SELECT ticket_id, issue_type, status FROM SupportTickets",
    "expectedRows": [
      {
        "ticket_id": "TCK-101",
        "issue_type": "Network Outage",
        "status": "Resolved"
      },
      {
        "ticket_id": "TCK-102",
        "issue_type": "Barcode Scanner Error",
        "status": "In Progress"
      },
      {
        "ticket_id": "TCK-103",
        "issue_type": "Software License",
        "status": "Resolved"
      },
      {
        "ticket_id": "TCK-104",
        "issue_type": "Printer Jammed",
        "status": "Open"
      },
      {
        "ticket_id": "TCK-105",
        "issue_type": "ERP Login Failed",
        "status": "Resolved"
      },
      {
        "ticket_id": "TCK-106",
        "issue_type": "VPN Disconnected",
        "status": "Resolved"
      },
      {
        "ticket_id": "TCK-107",
        "issue_type": "Excel Macro Crash",
        "status": "Open"
      },
      {
        "ticket_id": "TCK-108",
        "issue_type": "Label Printer Offline",
        "status": "In Progress"
      },
      {
        "ticket_id": "TCK-109",
        "issue_type": "Database Slowdown",
        "status": "Resolved"
      },
      {
        "ticket_id": "TCK-110",
        "issue_type": "Barcode Sync Delay",
        "status": "Resolved"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Ambil ID Tiket dan Prioritas",
      "problemEn": "Retrieve ticket_id and priority from SupportTickets.",
      "correctQuery": "SELECT ticket_id, priority FROM SupportTickets",
      "babyLogic": "Tentukan kolom spesifik yang ingin kamu lihat pada tiket bantuan!"
    }
  },
  {
    "id": "sql-6",
    "category": "1. SELECT Dasar",
    "title": "Soal 6: Tampilkan Nama Server dan Waktu Respons",
    "tableName": "ServerLogs",
    "questionEn": "Retrieve 'server_name' and 'response_time_ms' from 'ServerLogs'.",
    "babyHint": "🍼 Bahasa Bayi: SELECT server_name, response_time_ms FROM ServerLogs!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "server_name",
      "response_time_ms",
      "FROM",
      "ServerLogs"
    ],
    "correctQuery": "SELECT server_name, response_time_ms FROM ServerLogs",
    "expectedRows": [
      {
        "server_name": "Web-App-01",
        "response_time_ms": 120
      },
      {
        "server_name": "Database-Main",
        "response_time_ms": 450
      },
      {
        "server_name": "Auth-Server",
        "response_time_ms": 95
      },
      {
        "server_name": "Web-App-02",
        "response_time_ms": 310
      },
      {
        "server_name": "Backup-Node",
        "response_time_ms": 80
      },
      {
        "server_name": "Api-Gateway",
        "response_time_ms": 110
      },
      {
        "server_name": "Cache-Redis",
        "response_time_ms": 45
      },
      {
        "server_name": "Database-Replica",
        "response_time_ms": 380
      },
      {
        "server_name": "Queue-Worker",
        "response_time_ms": 210
      },
      {
        "server_name": "Payment-Service",
        "response_time_ms": 420
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Ambil Nama Server dan Level Log",
      "problemEn": "Retrieve server_name and log_level from ServerLogs.",
      "correctQuery": "SELECT server_name, log_level FROM ServerLogs",
      "babyLogic": "Pilih kolom nama server dan tingkat keparahan error log_level!"
    }
  },
  {
    "id": "sql-7",
    "category": "1. SELECT Dasar",
    "title": "Soal 7: Tampilkan Nama Karyawan dan Besaran Gaji",
    "tableName": "Employees",
    "questionEn": "Retrieve 'name' and 'salary' from the 'Employees' table.",
    "babyHint": "🍼 Bahasa Bayi: SELECT name, salary FROM Employees!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "name",
      "salary",
      "FROM",
      "Employees"
    ],
    "correctQuery": "SELECT name, salary FROM Employees",
    "expectedRows": [
      {
        "name": "Andi Saputra",
        "salary": 7500000
      },
      {
        "name": "Bunga Melati",
        "salary": 5500000
      },
      {
        "name": "Citra Dewi",
        "salary": 8200000
      },
      {
        "name": "Deni Pratama",
        "salary": 4800000
      },
      {
        "name": "Eko Prasetyo",
        "salary": 6500000
      },
      {
        "name": "Fani Rahma",
        "salary": 5100000
      },
      {
        "name": "Gilang Ramadhan",
        "salary": 6200000
      },
      {
        "name": "Hany Wijaya",
        "salary": 9100000
      },
      {
        "name": "Indra Gunawan",
        "salary": 4500000
      },
      {
        "name": "Joko Susilo",
        "salary": 5300000
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Ambil ID dan Nama Karyawan",
      "problemEn": "Retrieve id and name from Employees.",
      "correctQuery": "SELECT id, name FROM Employees",
      "babyLogic": "Ambil nomor ID dan nama orang dari tabel karyawan!"
    }
  },
  {
    "id": "sql-8",
    "category": "1. SELECT Dasar",
    "title": "Soal 8: Tampilkan Kode Batch dan Status QC",
    "tableName": "ShoeProduction",
    "questionEn": "Retrieve 'code' and 'status_qc' from 'ShoeProduction'.",
    "babyHint": "🍼 Bahasa Bayi: SELECT code, status_qc FROM ShoeProduction!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "code",
      "status_qc",
      "FROM",
      "ShoeProduction"
    ],
    "correctQuery": "SELECT code, status_qc FROM ShoeProduction",
    "expectedRows": [
      {
        "code": "SH-001",
        "status_qc": "Passed"
      },
      {
        "code": "SH-002",
        "status_qc": "Passed"
      },
      {
        "code": "SH-003",
        "status_qc": "Rejected"
      },
      {
        "code": "SH-004",
        "status_qc": "Passed"
      },
      {
        "code": "SH-005",
        "status_qc": "Pending"
      },
      {
        "code": "SH-006",
        "status_qc": "Passed"
      },
      {
        "code": "SH-007",
        "status_qc": "Passed"
      },
      {
        "code": "SH-008",
        "status_qc": "Passed"
      },
      {
        "code": "SH-009",
        "status_qc": "Rejected"
      },
      {
        "code": "SH-010",
        "status_qc": "Passed"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Ambil Kode dan ID Mesin Cetak",
      "problemEn": "Retrieve code and machine_id from ShoeProduction.",
      "correctQuery": "SELECT code, machine_id FROM ShoeProduction",
      "babyLogic": "Kolom kode batch dan nomor mesin pencetak sepatu!"
    }
  },
  {
    "id": "sql-9",
    "category": "1. SELECT Dasar",
    "title": "Soal 9: Tampilkan Nama Produk dan Kategori",
    "tableName": "Products",
    "questionEn": "Retrieve 'item_name' and 'category' from 'Products'.",
    "babyHint": "🍼 Bahasa Bayi: SELECT item_name, category FROM Products!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "item_name",
      "category",
      "FROM",
      "Products"
    ],
    "correctQuery": "SELECT item_name, category FROM Products",
    "expectedRows": [
      {
        "item_name": "Mechanical Keyboard RGB",
        "category": "Hardware"
      },
      {
        "item_name": "Wireless Optical Mouse",
        "category": "Hardware"
      },
      {
        "item_name": "Cat6 Ethernet Cable 10m",
        "category": "Network"
      },
      {
        "item_name": "Gigabit Switch 16-Port",
        "category": "Network"
      },
      {
        "item_name": "Thermal Barcode Printer",
        "category": "Hardware"
      },
      {
        "item_name": "UPS Battery Backup 1200VA",
        "category": "Power"
      },
      {
        "item_name": "USB-C Multiport Hub",
        "category": "Hardware"
      },
      {
        "item_name": "Fiber Optic Patch Cord",
        "category": "Network"
      },
      {
        "item_name": "Wireless Access Point",
        "category": "Network"
      },
      {
        "item_name": "Power Surge Protector",
        "category": "Power"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Ambil ID dan Kategori Produk",
      "problemEn": "Retrieve id and category from Products.",
      "correctQuery": "SELECT id, category FROM Products",
      "babyLogic": "Pilih kolom id lalu category dari katalog produk!"
    }
  },
  {
    "id": "sql-10",
    "category": "1. SELECT Dasar",
    "title": "Soal 10: Tampilkan ID Tiket dan Prioritas Keluhan",
    "tableName": "SupportTickets",
    "questionEn": "Retrieve 'ticket_id' and 'priority' from 'SupportTickets'.",
    "babyHint": "🍼 Bahasa Bayi: SELECT ticket_id, priority FROM SupportTickets!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "ticket_id",
      "priority",
      "FROM",
      "SupportTickets"
    ],
    "correctQuery": "SELECT ticket_id, priority FROM SupportTickets",
    "expectedRows": [
      {
        "ticket_id": "TCK-101",
        "priority": "High"
      },
      {
        "ticket_id": "TCK-102",
        "priority": "Urgent"
      },
      {
        "ticket_id": "TCK-103",
        "priority": "Low"
      },
      {
        "ticket_id": "TCK-104",
        "priority": "Medium"
      },
      {
        "ticket_id": "TCK-105",
        "priority": "Urgent"
      },
      {
        "ticket_id": "TCK-106",
        "priority": "High"
      },
      {
        "ticket_id": "TCK-107",
        "priority": "Low"
      },
      {
        "ticket_id": "TCK-108",
        "priority": "Urgent"
      },
      {
        "ticket_id": "TCK-109",
        "priority": "High"
      },
      {
        "ticket_id": "TCK-110",
        "priority": "Medium"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Ambil ID Tiket dan ID Karyawan Pelapor",
      "problemEn": "Retrieve ticket_id and employee_id from SupportTickets.",
      "correctQuery": "SELECT ticket_id, employee_id FROM SupportTickets",
      "babyLogic": "Ambil nomor tiket keluhan dan siapa karyawan yang melapor!"
    }
  },
  {
    "id": "sql-11",
    "category": "2. Filter WHERE",
    "title": "Soal 11: Filter Karyawan Khusus Divisi IT",
    "tableName": "Employees",
    "questionEn": "Retrieve 'name' and 'salary' for all employees in the 'IT' department.",
    "babyHint": "🍼 Bahasa Bayi: Gunakan WHERE department = 'IT'!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "name",
      "salary",
      "FROM",
      "Employees",
      "WHERE",
      "department",
      "=",
      "'IT'"
    ],
    "correctQuery": "SELECT name, salary FROM Employees WHERE department = 'IT'",
    "expectedRows": [
      {
        "name": "Andi Saputra",
        "salary": 7500000
      },
      {
        "name": "Citra Dewi",
        "salary": 8200000
      },
      {
        "name": "Eko Prasetyo",
        "salary": 6500000
      },
      {
        "name": "Hany Wijaya",
        "salary": 9100000
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Filter Karyawan Divisi Finance",
      "problemEn": "Retrieve 'name' and 'salary' where department is 'Finance'.",
      "correctQuery": "SELECT name, salary FROM Employees WHERE department = 'Finance'",
      "babyLogic": "Klausul WHERE bekerja seperti saringan: hanya data yang nilai department-nya sama dengan 'Finance' yang lolos!"
    }
  },
  {
    "id": "sql-12",
    "category": "2. Filter WHERE",
    "title": "Soal 12: Filter Produk dengan Stok Menipis (< 50)",
    "tableName": "Products",
    "questionEn": "Retrieve 'item_name' and 'stock' for products with 'stock' less than 50.",
    "babyHint": "🍼 Bahasa Bayi: Gunakan tanda lebih kecil: WHERE stock < 50!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "item_name",
      "stock",
      "FROM",
      "Products",
      "WHERE",
      "stock",
      "<",
      "50"
    ],
    "correctQuery": "SELECT item_name, stock FROM Products WHERE stock < 50",
    "expectedRows": [
      {
        "item_name": "Mechanical Keyboard RGB",
        "stock": 45
      },
      {
        "item_name": "Gigabit Switch 16-Port",
        "stock": 14
      },
      {
        "item_name": "Thermal Barcode Printer",
        "stock": 8
      },
      {
        "item_name": "UPS Battery Backup 1200VA",
        "stock": 22
      },
      {
        "item_name": "Fiber Optic Patch Cord",
        "stock": 40
      },
      {
        "item_name": "Wireless Access Point",
        "stock": 18
      },
      {
        "item_name": "Power Surge Protector",
        "stock": 35
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Filter Produk Stok Melimpah (> 100)",
      "problemEn": "Retrieve 'item_name' and 'stock' where stock > 100.",
      "correctQuery": "SELECT item_name, stock FROM Products WHERE stock > 100",
      "babyLogic": "Operator komparasi matematika (< atau >) menyaring baris berdasarkan batas angka!"
    }
  },
  {
    "id": "sql-13",
    "category": "2. Filter WHERE",
    "title": "Soal 13: Filter Produksi Sepatu Skala Besar (> 1000 Pasang)",
    "tableName": "ShoeProduction",
    "questionEn": "Retrieve 'code' and 'pairs' from 'ShoeProduction' where 'pairs' > 1000.",
    "babyHint": "🍼 Bahasa Bayi: WHERE pairs > 1000!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "code",
      "pairs",
      "FROM",
      "ShoeProduction",
      "WHERE",
      "pairs",
      ">",
      "1000"
    ],
    "correctQuery": "SELECT code, pairs FROM ShoeProduction WHERE pairs > 1000",
    "expectedRows": [
      {
        "code": "SH-001",
        "pairs": 1200
      },
      {
        "code": "SH-004",
        "pairs": 1500
      },
      {
        "code": "SH-006",
        "pairs": 1100
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Filter Produksi Sedikit (< 500)",
      "problemEn": "Retrieve code and pairs where pairs < 500.",
      "correctQuery": "SELECT code, pairs FROM ShoeProduction WHERE pairs < 500",
      "babyLogic": "Gunakan tanda > untuk menyaring batch produksi yang jumlahnya melampaui 1000 pasang!"
    }
  },
  {
    "id": "sql-14",
    "category": "2. Filter WHERE",
    "title": "Soal 14: Filter Tiket Dukungan Berprioritas Urgent",
    "tableName": "SupportTickets",
    "questionEn": "Retrieve 'ticket_id' and 'issue_type' where 'priority' is 'Urgent'.",
    "babyHint": "🍼 Bahasa Bayi: WHERE priority = 'Urgent'!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "ticket_id",
      "issue_type",
      "FROM",
      "SupportTickets",
      "WHERE",
      "priority",
      "=",
      "'Urgent'"
    ],
    "correctQuery": "SELECT ticket_id, issue_type FROM SupportTickets WHERE priority = 'Urgent'",
    "expectedRows": [
      {
        "ticket_id": "TCK-102",
        "issue_type": "Barcode Scanner Error"
      },
      {
        "ticket_id": "TCK-105",
        "issue_type": "ERP Login Failed"
      },
      {
        "ticket_id": "TCK-108",
        "issue_type": "Label Printer Offline"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Filter Tiket Prioritas Rendah",
      "problemEn": "Retrieve ticket_id and issue_type where priority is 'Low'.",
      "correctQuery": "SELECT ticket_id, issue_type FROM SupportTickets WHERE priority = 'Low'",
      "babyLogic": "Cocokkan nilai teks dalam tanda kutip tunggal ('Urgent')!"
    }
  },
  {
    "id": "sql-15",
    "category": "2. Filter WHERE",
    "title": "Soal 15: Filter Log Server yang Mengalami Crash (Status 500)",
    "tableName": "ServerLogs",
    "questionEn": "Retrieve 'server_name' and 'log_level' where 'status_code' is 500.",
    "babyHint": "🍼 Bahasa Bayi: WHERE status_code = 500! (Angka tidak perlu tanda kutip)",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "server_name",
      "log_level",
      "FROM",
      "ServerLogs",
      "WHERE",
      "status_code",
      "=",
      "500"
    ],
    "correctQuery": "SELECT server_name, log_level FROM ServerLogs WHERE status_code = 500",
    "expectedRows": [
      {
        "server_name": "Database-Main",
        "log_level": "ERROR"
      },
      {
        "server_name": "Database-Replica",
        "log_level": "ERROR"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Filter Log Server yang Sukses (Status 200)",
      "problemEn": "Retrieve server_name and log_level where status_code = 200.",
      "correctQuery": "SELECT server_name, log_level FROM ServerLogs WHERE status_code = 200",
      "babyLogic": "HTTP status code bertipe integer (angka), jadi cukup tulis = 500 tanpa tanda kutip!"
    }
  },
  {
    "id": "sql-16",
    "category": "2. Filter WHERE",
    "title": "Soal 16: Filter Karyawan yang Berlokasi di Bandung",
    "tableName": "Employees",
    "questionEn": "Retrieve 'name' and 'salary' for employees located in 'Bandung'.",
    "babyHint": "🍼 Bahasa Bayi: WHERE city = 'Bandung'!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "name",
      "salary",
      "FROM",
      "Employees",
      "WHERE",
      "city",
      "=",
      "'Bandung'"
    ],
    "correctQuery": "SELECT name, salary FROM Employees WHERE city = 'Bandung'",
    "expectedRows": [
      {
        "name": "Bunga Melati",
        "salary": 5500000
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Filter Karyawan Kota Jakarta",
      "problemEn": "Retrieve name and salary where city = 'Jakarta'.",
      "correctQuery": "SELECT name, salary FROM Employees WHERE city = 'Jakarta'",
      "babyLogic": "Saring berdasarkan kolom kota domisili penempatan kerja!"
    }
  },
  {
    "id": "sql-17",
    "category": "2. Filter WHERE",
    "title": "Soal 17: Filter Batch Sepatu yang Ditolak QC (Rejected)",
    "tableName": "ShoeProduction",
    "questionEn": "Retrieve 'code' and 'model' for batches with 'status_qc' = 'Rejected'.",
    "babyHint": "🍼 Bahasa Bayi: WHERE status_qc = 'Rejected'!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "code",
      "model",
      "FROM",
      "ShoeProduction",
      "WHERE",
      "status_qc",
      "=",
      "'Rejected'"
    ],
    "correctQuery": "SELECT code, model FROM ShoeProduction WHERE status_qc = 'Rejected'",
    "expectedRows": [
      {
        "code": "SH-003",
        "model": "Slip-On Casual"
      },
      {
        "code": "SH-009",
        "model": "Sport Trail"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Filter Batch yang Lolos QC (Passed)",
      "problemEn": "Retrieve code and model where status_qc = 'Passed'.",
      "correctQuery": "SELECT code, model FROM ShoeProduction WHERE status_qc = 'Passed'",
      "babyLogic": "Hanya ambil baris yang status kontrol kualitasnya 'Rejected'!"
    }
  },
  {
    "id": "sql-18",
    "category": "2. Filter WHERE",
    "title": "Soal 18: Filter Produk Khusus Kategori Network",
    "tableName": "Products",
    "questionEn": "Retrieve 'item_name' and 'unit_price' for products in category 'Network'.",
    "babyHint": "🍼 Bahasa Bayi: WHERE category = 'Network'!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "item_name",
      "unit_price",
      "FROM",
      "Products",
      "WHERE",
      "category",
      "=",
      "'Network'"
    ],
    "correctQuery": "SELECT item_name, unit_price FROM Products WHERE category = 'Network'",
    "expectedRows": [
      {
        "item_name": "Cat6 Ethernet Cable 10m",
        "unit_price": 75000
      },
      {
        "item_name": "Gigabit Switch 16-Port",
        "unit_price": 1250000
      },
      {
        "item_name": "Fiber Optic Patch Cord",
        "unit_price": 110000
      },
      {
        "item_name": "Wireless Access Point",
        "unit_price": 950000
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Filter Produk Kategori Hardware",
      "problemEn": "Retrieve item_name and unit_price where category = 'Hardware'.",
      "correctQuery": "SELECT item_name, unit_price FROM Products WHERE category = 'Hardware'",
      "babyLogic": "Saring barang katalog jaringan internet kantor!"
    }
  },
  {
    "id": "sql-19",
    "category": "2. Filter WHERE",
    "title": "Soal 19: Filter Tiket yang Sudah Selesai (Resolved)",
    "tableName": "SupportTickets",
    "questionEn": "Retrieve 'ticket_id' and 'employee_id' where 'status' = 'Resolved'.",
    "babyHint": "🍼 Bahasa Bayi: WHERE status = 'Resolved'!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "ticket_id",
      "employee_id",
      "FROM",
      "SupportTickets",
      "WHERE",
      "status",
      "=",
      "'Resolved'"
    ],
    "correctQuery": "SELECT ticket_id, employee_id FROM SupportTickets WHERE status = 'Resolved'",
    "expectedRows": [
      {
        "ticket_id": "TCK-101",
        "employee_id": 2
      },
      {
        "ticket_id": "TCK-103",
        "employee_id": 1
      },
      {
        "ticket_id": "TCK-105",
        "employee_id": 2
      },
      {
        "ticket_id": "TCK-106",
        "employee_id": 5
      },
      {
        "ticket_id": "TCK-109",
        "employee_id": 3
      },
      {
        "ticket_id": "TCK-110",
        "employee_id": 10
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Filter Tiket yang Masih Diproses (In Progress)",
      "problemEn": "Retrieve ticket_id and employee_id where status = 'In Progress'.",
      "correctQuery": "SELECT ticket_id, employee_id FROM SupportTickets WHERE status = 'In Progress'",
      "babyLogic": "Cari tiket yang masalahnya sudah berhasil diperbaiki tim IT!"
    }
  },
  {
    "id": "sql-20",
    "category": "2. Filter WHERE",
    "title": "Soal 20: Filter Server yang Mengeluarkan Pesan ERROR",
    "tableName": "ServerLogs",
    "questionEn": "Retrieve 'server_name' and 'response_time_ms' where 'log_level' = 'ERROR'.",
    "babyHint": "🍼 Bahasa Bayi: WHERE log_level = 'ERROR'!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "server_name",
      "response_time_ms",
      "FROM",
      "ServerLogs",
      "WHERE",
      "log_level",
      "=",
      "'ERROR'"
    ],
    "correctQuery": "SELECT server_name, response_time_ms FROM ServerLogs WHERE log_level = 'ERROR'",
    "expectedRows": [
      {
        "server_name": "Database-Main",
        "response_time_ms": 450
      },
      {
        "server_name": "Database-Replica",
        "response_time_ms": 380
      },
      {
        "server_name": "Payment-Service",
        "response_time_ms": 420
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Filter Server dengan Tingkat Log WARNING",
      "problemEn": "Retrieve server_name and response_time_ms where log_level = 'WARN'.",
      "correctQuery": "SELECT server_name, response_time_ms FROM ServerLogs WHERE log_level = 'WARN'",
      "babyLogic": "Saring baris log yang tingkat keparahannya bertuliskan 'ERROR'!"
    }
  },
  {
    "id": "sql-21",
    "category": "3. Operator Logika AND & OR",
    "title": "Soal 21: Filter Karyawan IT yang Berada di Jakarta",
    "tableName": "Employees",
    "questionEn": "Retrieve 'name' from Employees where department is 'IT' AND city is 'Jakarta'.",
    "babyHint": "🍼 Bahasa Bayi: Pakai AND: WHERE department = 'IT' AND city = 'Jakarta'!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "name",
      "FROM",
      "Employees",
      "WHERE",
      "department",
      "=",
      "'IT'",
      "AND",
      "city",
      "=",
      "'Jakarta'"
    ],
    "correctQuery": "SELECT name FROM Employees WHERE department = 'IT' AND city = 'Jakarta'",
    "expectedRows": [
      {
        "name": "Andi Saputra"
      },
      {
        "name": "Hany Wijaya"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Karyawan Finance di Jakarta",
      "problemEn": "Retrieve name where department = 'Finance' AND city = 'Jakarta'.",
      "correctQuery": "SELECT name FROM Employees WHERE department = 'Finance' AND city = 'Jakarta'",
      "babyLogic": "Kata kunci AND mewajibkan kedua syarat harus terpenuhi sekaligus!"
    }
  },
  {
    "id": "sql-22",
    "category": "3. Operator Logika AND & OR",
    "title": "Soal 22: Filter Produk Hardware dengan Stok Rendah (< 50)",
    "tableName": "Products",
    "questionEn": "Retrieve 'item_name' and 'stock' where category is 'Hardware' AND stock < 50.",
    "babyHint": "🍼 Bahasa Bayi: WHERE category = 'Hardware' AND stock < 50!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "item_name",
      "stock",
      "FROM",
      "Products",
      "WHERE",
      "category",
      "=",
      "'Hardware'",
      "AND",
      "stock",
      "<",
      "50"
    ],
    "correctQuery": "SELECT item_name, stock FROM Products WHERE category = 'Hardware' AND stock < 50",
    "expectedRows": [
      {
        "item_name": "Mechanical Keyboard RGB",
        "stock": 45
      },
      {
        "item_name": "Thermal Barcode Printer",
        "stock": 8
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Produk Network Stok Melimpah (> 50)",
      "problemEn": "Retrieve item_name, stock where category = 'Network' AND stock > 50.",
      "correctQuery": "SELECT item_name, stock FROM Products WHERE category = 'Network' AND stock > 50",
      "babyLogic": "Gabungkan penyaringan kategori teks dan perbandingan angka stok dengan AND!"
    }
  },
  {
    "id": "sql-23",
    "category": "3. Operator Logika AND & OR",
    "title": "Soal 23: Filter Karyawan di Jakarta ATAU Surabaya",
    "tableName": "Employees",
    "questionEn": "Retrieve 'name' and 'city' where city is 'Jakarta' OR city is 'Surabaya'.",
    "babyHint": "🍼 Bahasa Bayi: Gunakan OR: WHERE city = 'Jakarta' OR city = 'Surabaya'!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "name",
      "city",
      "FROM",
      "Employees",
      "WHERE",
      "city",
      "=",
      "'Jakarta'",
      "OR",
      "city",
      "=",
      "'Surabaya'"
    ],
    "correctQuery": "SELECT name, city FROM Employees WHERE city = 'Jakarta' OR city = 'Surabaya'",
    "expectedRows": [
      {
        "name": "Andi Saputra",
        "city": "Jakarta"
      },
      {
        "name": "Citra Dewi",
        "city": "Surabaya"
      },
      {
        "name": "Gilang Ramadhan",
        "city": "Jakarta"
      },
      {
        "name": "Hany Wijaya",
        "city": "Jakarta"
      },
      {
        "name": "Indra Gunawan",
        "city": "Surabaya"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Karyawan Bandung ATAU Semarang",
      "problemEn": "Retrieve name, city where city = 'Bandung' OR city = 'Semarang'.",
      "correctQuery": "SELECT name, city FROM Employees WHERE city = 'Bandung' OR city = 'Semarang'",
      "babyLogic": "Kata kunci OR memilih data yang memenuhi salah satu atau kedua syarat!"
    }
  },
  {
    "id": "sql-24",
    "category": "3. Operator Logika AND & OR",
    "title": "Soal 24: Filter Sepatu Lolos QC dari Mesin M-1",
    "tableName": "ShoeProduction",
    "questionEn": "Retrieve 'code' and 'model' where status_qc is 'Passed' AND machine_id is 'M-1'.",
    "babyHint": "🍼 Bahasa Bayi: WHERE status_qc = 'Passed' AND machine_id = 'M-1'!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "code",
      "model",
      "FROM",
      "ShoeProduction",
      "WHERE",
      "status_qc",
      "=",
      "'Passed'",
      "AND",
      "machine_id",
      "=",
      "'M-1'"
    ],
    "correctQuery": "SELECT code, model FROM ShoeProduction WHERE status_qc = 'Passed' AND machine_id = 'M-1'",
    "expectedRows": [
      {
        "code": "SH-001",
        "model": "Sneakers Air"
      },
      {
        "code": "SH-007",
        "model": "Classic Leather"
      },
      {
        "code": "SH-010",
        "model": "Sneakers Elite"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Sepatu Passed dari Mesin M-2",
      "problemEn": "Retrieve code, model where status_qc = 'Passed' AND machine_id = 'M-2'.",
      "correctQuery": "SELECT code, model FROM ShoeProduction WHERE status_qc = 'Passed' AND machine_id = 'M-2'",
      "babyLogic": "Saring khusus hasil cetak mesin tertentu yang kualitasnya dinyatakan lolos!"
    }
  },
  {
    "id": "sql-25",
    "category": "3. Operator Logika AND & OR",
    "title": "Soal 25: Filter Tiket Urgent ATAU High Priority",
    "tableName": "SupportTickets",
    "questionEn": "Retrieve 'ticket_id' and 'priority' where priority is 'Urgent' OR priority is 'High'.",
    "babyHint": "🍼 Bahasa Bayi: WHERE priority = 'Urgent' OR priority = 'High'!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "ticket_id",
      "priority",
      "FROM",
      "SupportTickets",
      "WHERE",
      "priority",
      "=",
      "'Urgent'",
      "OR",
      "priority",
      "=",
      "'High'"
    ],
    "correctQuery": "SELECT ticket_id, priority FROM SupportTickets WHERE priority = 'Urgent' OR priority = 'High'",
    "expectedRows": [
      {
        "ticket_id": "TCK-101",
        "priority": "High"
      },
      {
        "ticket_id": "TCK-102",
        "priority": "Urgent"
      },
      {
        "ticket_id": "TCK-105",
        "priority": "Urgent"
      },
      {
        "ticket_id": "TCK-106",
        "priority": "High"
      },
      {
        "ticket_id": "TCK-108",
        "priority": "Urgent"
      },
      {
        "ticket_id": "TCK-109",
        "priority": "High"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Tiket Low ATAU Medium Priority",
      "problemEn": "Retrieve ticket_id, priority where priority = 'Low' OR priority = 'Medium'.",
      "correctQuery": "SELECT ticket_id, priority FROM SupportTickets WHERE priority = 'Low' OR priority = 'Medium'",
      "babyLogic": "Gunakan OR untuk menjaring seluruh tiket berstatus darurat maupun tinggi!"
    }
  },
  {
    "id": "sql-26",
    "category": "3. Operator Logika AND & OR",
    "title": "Soal 26: Filter Server Lambat (> 300ms) DAN Error 500",
    "tableName": "ServerLogs",
    "questionEn": "Retrieve 'server_name' where response_time_ms > 300 AND status_code = 500.",
    "babyHint": "🍼 Bahasa Bayi: WHERE response_time_ms > 300 AND status_code = 500!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "server_name",
      "FROM",
      "ServerLogs",
      "WHERE",
      "response_time_ms",
      ">",
      "300",
      "AND",
      "status_code",
      "=",
      "500"
    ],
    "correctQuery": "SELECT server_name FROM ServerLogs WHERE response_time_ms > 300 AND status_code = 500",
    "expectedRows": [
      {
        "server_name": "Database-Main"
      },
      {
        "server_name": "Database-Replica"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Server Cepat (< 150ms) & Status 200",
      "problemEn": "Retrieve server_name where response_time_ms < 150 AND status_code = 200.",
      "correctQuery": "SELECT server_name FROM ServerLogs WHERE response_time_ms < 150 AND status_code = 200",
      "babyLogic": "Temukan server yang bermasalah parah: responsnya lemot sekaligus statusnya crash 500!"
    }
  },
  {
    "id": "sql-27",
    "category": "3. Operator Logika AND & OR",
    "title": "Soal 27: Filter Karyawan IT Bergaji di Atas 6 Juta",
    "tableName": "Employees",
    "questionEn": "Retrieve 'name' and 'salary' where salary > 6000000 AND department is 'IT'.",
    "babyHint": "🍼 Bahasa Bayi: WHERE salary > 6000000 AND department = 'IT'!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "name",
      "salary",
      "FROM",
      "Employees",
      "WHERE",
      "salary",
      ">",
      "6000000",
      "AND",
      "department",
      "=",
      "'IT'"
    ],
    "correctQuery": "SELECT name, salary FROM Employees WHERE salary > 6000000 AND department = 'IT'",
    "expectedRows": [
      {
        "name": "Andi Saputra",
        "salary": 7500000
      },
      {
        "name": "Citra Dewi",
        "salary": 8200000
      },
      {
        "name": "Eko Prasetyo",
        "salary": 6500000
      },
      {
        "name": "Hany Wijaya",
        "salary": 9100000
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Karyawan Finance Bergaji > 5 Juta",
      "problemEn": "Retrieve name, salary where salary > 5000000 AND department = 'Finance'.",
      "correctQuery": "SELECT name, salary FROM Employees WHERE salary > 5000000 AND department = 'Finance'",
      "babyLogic": "Kombinasi filter angka gaji dan filter divisi dengan operator AND!"
    }
  },
  {
    "id": "sql-28",
    "category": "3. Operator Logika AND & OR",
    "title": "Soal 28: Filter Produk Power dengan Harga di Atas 500 Ribu",
    "tableName": "Products",
    "questionEn": "Retrieve 'item_name' and 'unit_price' where category is 'Power' AND unit_price > 500000.",
    "babyHint": "🍼 Bahasa Bayi: WHERE category = 'Power' AND unit_price > 500000!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "item_name",
      "unit_price",
      "FROM",
      "Products",
      "WHERE",
      "category",
      "=",
      "'Power'",
      "AND",
      "unit_price",
      ">",
      "500000"
    ],
    "correctQuery": "SELECT item_name, unit_price FROM Products WHERE category = 'Power' AND unit_price > 500000",
    "expectedRows": [
      {
        "item_name": "UPS Battery Backup 1200VA",
        "unit_price": 1850000
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Produk Hardware Harga > 1 Juta",
      "problemEn": "Retrieve item_name, unit_price where category = 'Hardware' AND unit_price > 1000000.",
      "correctQuery": "SELECT item_name, unit_price FROM Products WHERE category = 'Hardware' AND unit_price > 1000000",
      "babyLogic": "Cari barang penyuplai daya yang harganya bernilai tinggi!"
    }
  },
  {
    "id": "sql-29",
    "category": "3. Operator Logika AND & OR",
    "title": "Soal 29: Filter Batch Lolos QC dengan Jumlah > 1000 Pasang",
    "tableName": "ShoeProduction",
    "questionEn": "Retrieve 'code' and 'pairs' where pairs > 1000 AND status_qc is 'Passed'.",
    "babyHint": "🍼 Bahasa Bayi: WHERE pairs > 1000 AND status_qc = 'Passed'!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "code",
      "pairs",
      "FROM",
      "ShoeProduction",
      "WHERE",
      "pairs",
      ">",
      "1000",
      "AND",
      "status_qc",
      "=",
      "'Passed'"
    ],
    "correctQuery": "SELECT code, pairs FROM ShoeProduction WHERE pairs > 1000 AND status_qc = 'Passed'",
    "expectedRows": [
      {
        "code": "SH-001",
        "pairs": 1200
      },
      {
        "code": "SH-004",
        "pairs": 1500
      },
      {
        "code": "SH-006",
        "pairs": 1100
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Batch Ditolak QC dengan Jumlah < 500",
      "problemEn": "Retrieve code, pairs where pairs < 500 AND status_qc = 'Rejected'.",
      "correctQuery": "SELECT code, pairs FROM ShoeProduction WHERE pairs < 500 AND status_qc = 'Rejected'",
      "babyLogic": "Hanya ambil batch produksi massal yang sukses melewati inspeksi mutu!"
    }
  },
  {
    "id": "sql-30",
    "category": "3. Operator Logika AND & OR",
    "title": "Soal 30: Filter Tiket yang Belum Selesai (Bukan Resolved)",
    "tableName": "SupportTickets",
    "questionEn": "Retrieve 'ticket_id' and 'status' where status is not 'Resolved'.",
    "babyHint": "🍼 Bahasa Bayi: Gunakan tanda tidak sama dengan (!=): WHERE status != 'Resolved'!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "ticket_id",
      "status",
      "FROM",
      "SupportTickets",
      "WHERE",
      "status",
      "!=",
      "'Resolved'"
    ],
    "correctQuery": "SELECT ticket_id, status FROM SupportTickets WHERE status != 'Resolved'",
    "expectedRows": [
      {
        "ticket_id": "TCK-102",
        "status": "In Progress"
      },
      {
        "ticket_id": "TCK-104",
        "status": "Open"
      },
      {
        "ticket_id": "TCK-107",
        "status": "Open"
      },
      {
        "ticket_id": "TCK-108",
        "status": "In Progress"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Tiket yang Bukan Status Open",
      "problemEn": "Retrieve ticket_id, status where status != 'Open'.",
      "correctQuery": "SELECT ticket_id, status FROM SupportTickets WHERE status != 'Open'",
      "babyLogic": "Tanda != atau <> berarti negasi (bukan/tidak sama dengan)!"
    }
  },
  {
    "id": "sql-31",
    "category": "4. Pencarian String LIKE",
    "title": "Soal 31: Cari Karyawan yang Namanya Berawalan Huruf 'A'",
    "tableName": "Employees",
    "questionEn": "Retrieve 'name' from Employees where name begins with 'A'.",
    "babyHint": "🍼 Bahasa Bayi: Gunakan LIKE 'A%' (tanda persen di belakang berarti huruf selanjutnya bebas)!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "name",
      "FROM",
      "Employees",
      "WHERE",
      "name",
      "LIKE",
      "'A%'"
    ],
    "correctQuery": "SELECT name FROM Employees WHERE name LIKE 'A%'",
    "expectedRows": [
      {
        "name": "Andi Saputra"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Cari Nama Berawalan Huruf 'B'",
      "problemEn": "Retrieve name from Employees where name LIKE 'B%'.",
      "correctQuery": "SELECT name FROM Employees WHERE name LIKE 'B%'",
      "babyLogic": "Tanda persen (%) di akhir berarti huruf pertama wajib 'A', selanjutnya bebas karakter apa saja!"
    }
  },
  {
    "id": "sql-32",
    "category": "4. Pencarian String LIKE",
    "title": "Soal 32: Cari Produk yang Mengandung Kata 'Wireless'",
    "tableName": "Products",
    "questionEn": "Retrieve 'item_name' from Products where item_name contains 'Wireless'.",
    "babyHint": "🍼 Bahasa Bayi: Gunakan LIKE '%Wireless%' (tanda persen di depan dan belakang)!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "item_name",
      "FROM",
      "Products",
      "WHERE",
      "item_name",
      "LIKE",
      "'%Wireless%'"
    ],
    "correctQuery": "SELECT item_name FROM Products WHERE item_name LIKE '%Wireless%'",
    "expectedRows": [
      {
        "item_name": "Wireless Optical Mouse"
      },
      {
        "item_name": "Wireless Access Point"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Cari Produk Mengandung Kata 'Optical'",
      "problemEn": "Retrieve item_name where item_name LIKE '%Optical%'.",
      "correctQuery": "SELECT item_name FROM Products WHERE item_name LIKE '%Optical%'",
      "babyLogic": "Tanda % di awal dan akhir bertindak sebagai penjepit: asalkan kata tersebut ada di posisi mana pun!"
    }
  },
  {
    "id": "sql-33",
    "category": "4. Pencarian String LIKE",
    "title": "Soal 33: Cari Model Sepatu yang Mengandung Kata 'Air'",
    "tableName": "ShoeProduction",
    "questionEn": "Retrieve 'model' from ShoeProduction where model contains 'Air'.",
    "babyHint": "🍼 Bahasa Bayi: WHERE model LIKE '%Air%'!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "model",
      "FROM",
      "ShoeProduction",
      "WHERE",
      "model",
      "LIKE",
      "'%Air%'"
    ],
    "correctQuery": "SELECT model FROM ShoeProduction WHERE model LIKE '%Air%'",
    "expectedRows": [
      {
        "model": "Sneakers Air"
      },
      {
        "model": "Sneakers Air"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Cari Model Mengandung Kata 'Pro'",
      "problemEn": "Retrieve model where model LIKE '%Pro%'.",
      "correctQuery": "SELECT model FROM ShoeProduction WHERE model LIKE '%Pro%'",
      "babyLogic": "Saring varian sepatu yang memiliki teknologi bantalan udara 'Air'!"
    }
  },
  {
    "id": "sql-34",
    "category": "4. Pencarian String LIKE",
    "title": "Soal 34: Cari Tiket yang Mengandung Masalah 'Error'",
    "tableName": "SupportTickets",
    "questionEn": "Retrieve 'issue_type' from SupportTickets where issue_type contains 'Error'.",
    "babyHint": "🍼 Bahasa Bayi: WHERE issue_type LIKE '%Error%'!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "issue_type",
      "FROM",
      "SupportTickets",
      "WHERE",
      "issue_type",
      "LIKE",
      "'%Error%'"
    ],
    "correctQuery": "SELECT issue_type FROM SupportTickets WHERE issue_type LIKE '%Error%'",
    "expectedRows": [
      {
        "issue_type": "Barcode Scanner Error"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Cari Tiket Mengandung 'Outage'",
      "problemEn": "Retrieve issue_type where issue_type LIKE '%Outage%'.",
      "correctQuery": "SELECT issue_type FROM SupportTickets WHERE issue_type LIKE '%Outage%'",
      "babyLogic": "Jaring semua insiden keluhan sistem yang memuat kata kunci kendala 'Error'!"
    }
  },
  {
    "id": "sql-35",
    "category": "4. Pencarian String LIKE",
    "title": "Soal 35: Cari Server yang Namanya Dimulai dengan 'Web'",
    "tableName": "ServerLogs",
    "questionEn": "Retrieve 'server_name' from ServerLogs where server_name starts with 'Web'.",
    "babyHint": "🍼 Bahasa Bayi: WHERE server_name LIKE 'Web%'!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "server_name",
      "FROM",
      "ServerLogs",
      "WHERE",
      "server_name",
      "LIKE",
      "'Web%'"
    ],
    "correctQuery": "SELECT server_name FROM ServerLogs WHERE server_name LIKE 'Web%'",
    "expectedRows": [
      {
        "server_name": "Web-App-01"
      },
      {
        "server_name": "Web-App-02"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Cari Server yang Dimulai dengan 'Database'",
      "problemEn": "Retrieve server_name where server_name LIKE 'Database%'.",
      "correctQuery": "SELECT server_name FROM ServerLogs WHERE server_name LIKE 'Database%'",
      "babyLogic": "Cari seluruh klaster server website garda depan (frontend / web server)!"
    }
  },
  {
    "id": "sql-36",
    "category": "4. Pencarian String LIKE",
    "title": "Soal 36: Cari Karyawan yang Namanya Mengandung 'Dewi'",
    "tableName": "Employees",
    "questionEn": "Retrieve 'name' from Employees where name contains 'Dewi'.",
    "babyHint": "🍼 Bahasa Bayi: WHERE name LIKE '%Dewi%'!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "name",
      "FROM",
      "Employees",
      "WHERE",
      "name",
      "LIKE",
      "'%Dewi%'"
    ],
    "correctQuery": "SELECT name FROM Employees WHERE name LIKE '%Dewi%'",
    "expectedRows": [
      {
        "name": "Citra Dewi"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Cari Nama Mengandung 'Saputra'",
      "problemEn": "Retrieve name where name LIKE '%Saputra%'.",
      "correctQuery": "SELECT name FROM Employees WHERE name LIKE '%Saputra%'",
      "babyLogic": "Pencarian nama keluarga atau nama tengah karyawan di database HRD!"
    }
  },
  {
    "id": "sql-37",
    "category": "4. Pencarian String LIKE",
    "title": "Soal 37: Cari Produk yang Mengandung Kata 'Cable'",
    "tableName": "Products",
    "questionEn": "Retrieve 'item_name' from Products where item_name contains 'Cable'.",
    "babyHint": "🍼 Bahasa Bayi: WHERE item_name LIKE '%Cable%'!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "item_name",
      "FROM",
      "Products",
      "WHERE",
      "item_name",
      "LIKE",
      "'%Cable%'"
    ],
    "correctQuery": "SELECT item_name FROM Products WHERE item_name LIKE '%Cable%'",
    "expectedRows": [
      {
        "item_name": "Cat6 Ethernet Cable 10m"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Cari Produk Mengandung 'Power'",
      "problemEn": "Retrieve item_name where item_name LIKE '%Power%'.",
      "correctQuery": "SELECT item_name FROM Products WHERE item_name LIKE '%Power%'",
      "babyLogic": "Temukan semua varian kabel (LAN kabel, HDMI kabel, power kabel) di gudang logistik!"
    }
  },
  {
    "id": "sql-38",
    "category": "4. Pencarian String LIKE",
    "title": "Soal 38: Cari Kode Batch yang Dimulai dengan 'SH-00'",
    "tableName": "ShoeProduction",
    "questionEn": "Retrieve 'code' from ShoeProduction where code begins with 'SH-00'.",
    "babyHint": "🍼 Bahasa Bayi: WHERE code LIKE 'SH-00%'!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "code",
      "FROM",
      "ShoeProduction",
      "WHERE",
      "code",
      "LIKE",
      "'SH-00%'"
    ],
    "correctQuery": "SELECT code FROM ShoeProduction WHERE code LIKE 'SH-00%'",
    "expectedRows": [
      {
        "code": "SH-001"
      },
      {
        "code": "SH-002"
      },
      {
        "code": "SH-003"
      },
      {
        "code": "SH-004"
      },
      {
        "code": "SH-005"
      },
      {
        "code": "SH-006"
      },
      {
        "code": "SH-007"
      },
      {
        "code": "SH-008"
      },
      {
        "code": "SH-009"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Cari Kode yang Dimulai dengan 'SH-01'",
      "problemEn": "Retrieve code where code LIKE 'SH-01%'.",
      "correctQuery": "SELECT code FROM ShoeProduction WHERE code LIKE 'SH-01%'",
      "babyLogic": "Saring nomor seri batch sepatu generasi awal pabrik!"
    }
  },
  {
    "id": "sql-39",
    "category": "4. Pencarian String LIKE",
    "title": "Soal 39: Cari Tiket yang Mengandung Kata 'Network'",
    "tableName": "SupportTickets",
    "questionEn": "Retrieve 'issue_type' from SupportTickets where issue_type contains 'Network'.",
    "babyHint": "🍼 Bahasa Bayi: WHERE issue_type LIKE '%Network%'!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "issue_type",
      "FROM",
      "SupportTickets",
      "WHERE",
      "issue_type",
      "LIKE",
      "'%Network%'"
    ],
    "correctQuery": "SELECT issue_type FROM SupportTickets WHERE issue_type LIKE '%Network%'",
    "expectedRows": [
      {
        "issue_type": "Network Outage"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Cari Tiket Mengandung 'Scanner'",
      "problemEn": "Retrieve issue_type where issue_type LIKE '%Scanner%'.",
      "correctQuery": "SELECT issue_type FROM SupportTickets WHERE issue_type LIKE '%Scanner%'",
      "babyLogic": "Filter tiket yang berkaitan dengan gangguan koneksi internet atau jaringan LAN!"
    }
  },
  {
    "id": "sql-40",
    "category": "4. Pencarian String LIKE",
    "title": "Soal 40: Cari Server yang Namanya Mengandung 'Main'",
    "tableName": "ServerLogs",
    "questionEn": "Retrieve 'server_name' from ServerLogs where server_name contains 'Main'.",
    "babyHint": "🍼 Bahasa Bayi: WHERE server_name LIKE '%Main%'!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "server_name",
      "FROM",
      "ServerLogs",
      "WHERE",
      "server_name",
      "LIKE",
      "'%Main%'"
    ],
    "correctQuery": "SELECT server_name FROM ServerLogs WHERE server_name LIKE '%Main%'",
    "expectedRows": [
      {
        "server_name": "Database-Main"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Cari Server Mengandung 'App'",
      "problemEn": "Retrieve server_name where server_name LIKE '%App%'.",
      "correctQuery": "SELECT server_name FROM ServerLogs WHERE server_name LIKE '%App%'",
      "babyLogic": "Cari infrastruktur server inti (utama) yang menopang database perusahaan!"
    }
  },
  {
    "id": "sql-41",
    "category": "5. Rentang BETWEEN & Himpunan IN",
    "title": "Soal 41: Filter Gaji Karyawan di Antara 5 Juta sampai 7 Juta",
    "tableName": "Employees",
    "questionEn": "Retrieve 'name' and 'salary' where salary is BETWEEN 5000000 AND 7000000.",
    "babyHint": "🍼 Bahasa Bayi: WHERE salary BETWEEN 5000000 AND 7000000!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "name",
      "salary",
      "FROM",
      "Employees",
      "WHERE",
      "salary",
      "BETWEEN",
      "5000000",
      "AND",
      "7000000"
    ],
    "correctQuery": "SELECT name, salary FROM Employees WHERE salary BETWEEN 5000000 AND 7000000",
    "expectedRows": [
      {
        "name": "Bunga Melati",
        "salary": 5500000
      },
      {
        "name": "Eko Prasetyo",
        "salary": 6500000
      },
      {
        "name": "Fani Rahma",
        "salary": 5100000
      },
      {
        "name": "Gilang Ramadhan",
        "salary": 6200000
      },
      {
        "name": "Joko Susilo",
        "salary": 5300000
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Filter Gaji Antara 7 Juta sampai 9 Juta",
      "problemEn": "Retrieve name, salary where salary BETWEEN 7000000 AND 9000000.",
      "correctQuery": "SELECT name, salary FROM Employees WHERE salary BETWEEN 7000000 AND 9000000",
      "babyLogic": "BETWEEN menyaring rentang nilai inklusif (angka batas awal dan akhir ikut dihitung)!"
    }
  },
  {
    "id": "sql-42",
    "category": "5. Rentang BETWEEN & Himpunan IN",
    "title": "Soal 42: Filter Stok Produk di Antara 20 sampai 100 Unit",
    "tableName": "Products",
    "questionEn": "Retrieve 'item_name' and 'stock' where stock is BETWEEN 20 AND 100.",
    "babyHint": "🍼 Bahasa Bayi: WHERE stock BETWEEN 20 AND 100!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "item_name",
      "stock",
      "FROM",
      "Products",
      "WHERE",
      "stock",
      "BETWEEN",
      "20",
      "AND",
      "100"
    ],
    "correctQuery": "SELECT item_name, stock FROM Products WHERE stock BETWEEN 20 AND 100",
    "expectedRows": [
      {
        "item_name": "Mechanical Keyboard RGB",
        "stock": 45
      },
      {
        "item_name": "Cat6 Ethernet Cable 10m",
        "stock": 85
      },
      {
        "item_name": "UPS Battery Backup 1200VA",
        "stock": 22
      },
      {
        "item_name": "USB-C Multiport Hub",
        "stock": 60
      },
      {
        "item_name": "Fiber Optic Patch Cord",
        "stock": 40
      },
      {
        "item_name": "Power Surge Protector",
        "stock": 35
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Filter Stok Antara 100 sampai 200",
      "problemEn": "Retrieve item_name, stock where stock BETWEEN 100 AND 200.",
      "correctQuery": "SELECT item_name, stock FROM Products WHERE stock BETWEEN 100 AND 200",
      "babyLogic": "Saring persediaan barang gudang yang berada di level rata-rata!"
    }
  },
  {
    "id": "sql-43",
    "category": "5. Rentang BETWEEN & Himpunan IN",
    "title": "Soal 43: Filter Batch Produksi di Antara 500 sampai 1000 Pasang",
    "tableName": "ShoeProduction",
    "questionEn": "Retrieve 'code' and 'pairs' where pairs is BETWEEN 500 AND 1000.",
    "babyHint": "🍼 Bahasa Bayi: WHERE pairs BETWEEN 500 AND 1000!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "code",
      "pairs",
      "FROM",
      "ShoeProduction",
      "WHERE",
      "pairs",
      "BETWEEN",
      "500",
      "AND",
      "1000"
    ],
    "correctQuery": "SELECT code, pairs FROM ShoeProduction WHERE pairs BETWEEN 500 AND 1000",
    "expectedRows": [
      {
        "code": "SH-002",
        "pairs": 850
      },
      {
        "code": "SH-007",
        "pairs": 650
      },
      {
        "code": "SH-008",
        "pairs": 500
      },
      {
        "code": "SH-010",
        "pairs": 900
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Filter Pasang Antara 1000 sampai 2000",
      "problemEn": "Retrieve code, pairs where pairs BETWEEN 1000 AND 2000.",
      "correctQuery": "SELECT code, pairs FROM ShoeProduction WHERE pairs BETWEEN 1000 AND 2000",
      "babyLogic": "Penyaringan rentang produksi menengah di lantai perakitan sepatu!"
    }
  },
  {
    "id": "sql-44",
    "category": "5. Rentang BETWEEN & Himpunan IN",
    "title": "Soal 44: Filter Waktu Respons Server di Antara 100ms sampai 300ms",
    "tableName": "ServerLogs",
    "questionEn": "Retrieve 'server_name' and 'response_time_ms' where response_time_ms is BETWEEN 100 AND 300.",
    "babyHint": "🍼 Bahasa Bayi: WHERE response_time_ms BETWEEN 100 AND 300!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "server_name",
      "response_time_ms",
      "FROM",
      "ServerLogs",
      "WHERE",
      "response_time_ms",
      "BETWEEN",
      "100",
      "AND",
      "300"
    ],
    "correctQuery": "SELECT server_name, response_time_ms FROM ServerLogs WHERE response_time_ms BETWEEN 100 AND 300",
    "expectedRows": [
      {
        "server_name": "Web-App-01",
        "response_time_ms": 120
      },
      {
        "server_name": "Api-Gateway",
        "response_time_ms": 110
      },
      {
        "server_name": "Queue-Worker",
        "response_time_ms": 210
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Respon Antara 300ms sampai 500ms",
      "problemEn": "Retrieve server_name, response_time_ms where response_time_ms BETWEEN 300 AND 500.",
      "correctQuery": "SELECT server_name, response_time_ms FROM ServerLogs WHERE response_time_ms BETWEEN 300 AND 500",
      "babyLogic": "Cari log server yang kecepatan responsnya tergolong normal dan stabil!"
    }
  },
  {
    "id": "sql-45",
    "category": "5. Rentang BETWEEN & Himpunan IN",
    "title": "Soal 45: Filter Karyawan yang Berada di Divisi IT atau Finance (IN)",
    "tableName": "Employees",
    "questionEn": "Retrieve 'name' and 'department' where department is IN ('IT', 'Finance').",
    "babyHint": "🍼 Bahasa Bayi: Gunakan IN: WHERE department IN ('IT', 'Finance')!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "name",
      "department",
      "FROM",
      "Employees",
      "WHERE",
      "department",
      "IN",
      "('IT', 'Finance')"
    ],
    "correctQuery": "SELECT name, department FROM Employees WHERE department IN ('IT', 'Finance')",
    "expectedRows": [
      {
        "name": "Andi Saputra",
        "department": "IT"
      },
      {
        "name": "Bunga Melati",
        "department": "Finance"
      },
      {
        "name": "Citra Dewi",
        "department": "IT"
      },
      {
        "name": "Eko Prasetyo",
        "department": "IT"
      },
      {
        "name": "Gilang Ramadhan",
        "department": "Finance"
      },
      {
        "name": "Hany Wijaya",
        "department": "IT"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Filter Karyawan Divisi IT atau Production",
      "problemEn": "Retrieve name, department where department IN ('IT', 'Production').",
      "correctQuery": "SELECT name, department FROM Employees WHERE department IN ('IT', 'Production')",
      "babyLogic": "Operator IN menyederhanakan rangkaian OR: mencocokkan data ke dalam daftar pilihan!"
    }
  },
  {
    "id": "sql-46",
    "category": "5. Rentang BETWEEN & Himpunan IN",
    "title": "Soal 46: Filter Produk Kategori Hardware atau Network (IN)",
    "tableName": "Products",
    "questionEn": "Retrieve 'item_name' and 'category' where category is IN ('Hardware', 'Network').",
    "babyHint": "🍼 Bahasa Bayi: WHERE category IN ('Hardware', 'Network')!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "item_name",
      "category",
      "FROM",
      "Products",
      "WHERE",
      "category",
      "IN",
      "('Hardware', 'Network')"
    ],
    "correctQuery": "SELECT item_name, category FROM Products WHERE category IN ('Hardware', 'Network')",
    "expectedRows": [
      {
        "item_name": "Mechanical Keyboard RGB",
        "category": "Hardware"
      },
      {
        "item_name": "Wireless Optical Mouse",
        "category": "Hardware"
      },
      {
        "item_name": "Cat6 Ethernet Cable 10m",
        "category": "Network"
      },
      {
        "item_name": "Gigabit Switch 16-Port",
        "category": "Network"
      },
      {
        "item_name": "Thermal Barcode Printer",
        "category": "Hardware"
      },
      {
        "item_name": "USB-C Multiport Hub",
        "category": "Hardware"
      },
      {
        "item_name": "Fiber Optic Patch Cord",
        "category": "Network"
      },
      {
        "item_name": "Wireless Access Point",
        "category": "Network"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Filter Kategori Power atau Tools",
      "problemEn": "Retrieve item_name, category where category IN ('Power', 'Tools').",
      "correctQuery": "SELECT item_name, category FROM Products WHERE category IN ('Power', 'Tools')",
      "babyLogic": "Pilih beberapa kelompok barang sekaligus tanpa harus menulis banyak baris OR!"
    }
  },
  {
    "id": "sql-47",
    "category": "5. Rentang BETWEEN & Himpunan IN",
    "title": "Soal 47: Filter Tiket Prioritas High atau Urgent (IN)",
    "tableName": "SupportTickets",
    "questionEn": "Retrieve 'ticket_id' and 'priority' where priority is IN ('High', 'Urgent').",
    "babyHint": "🍼 Bahasa Bayi: WHERE priority IN ('High', 'Urgent')!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "ticket_id",
      "priority",
      "FROM",
      "SupportTickets",
      "WHERE",
      "priority",
      "IN",
      "('High', 'Urgent')"
    ],
    "correctQuery": "SELECT ticket_id, priority FROM SupportTickets WHERE priority IN ('High', 'Urgent')",
    "expectedRows": [
      {
        "ticket_id": "TCK-101",
        "priority": "High"
      },
      {
        "ticket_id": "TCK-102",
        "priority": "Urgent"
      },
      {
        "ticket_id": "TCK-105",
        "priority": "Urgent"
      },
      {
        "ticket_id": "TCK-106",
        "priority": "High"
      },
      {
        "ticket_id": "TCK-108",
        "priority": "Urgent"
      },
      {
        "ticket_id": "TCK-109",
        "priority": "High"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Filter Prioritas Low atau Medium",
      "problemEn": "Retrieve ticket_id, priority where priority IN ('Low', 'Medium').",
      "correctQuery": "SELECT ticket_id, priority FROM SupportTickets WHERE priority IN ('Low', 'Medium')",
      "babyLogic": "Himpunan IN memastikan setiap tiket berstatus krusial langsung terjaring!"
    }
  },
  {
    "id": "sql-48",
    "category": "5. Rentang BETWEEN & Himpunan IN",
    "title": "Soal 48: Filter Status Code Server Khusus 200 atau 500 (IN)",
    "tableName": "ServerLogs",
    "questionEn": "Retrieve 'server_name' and 'status_code' where status_code is IN (200, 500).",
    "babyHint": "🍼 Bahasa Bayi: WHERE status_code IN (200, 500)!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "server_name",
      "status_code",
      "FROM",
      "ServerLogs",
      "WHERE",
      "status_code",
      "IN",
      "(200, 500)"
    ],
    "correctQuery": "SELECT server_name, status_code FROM ServerLogs WHERE status_code IN (200, 500)",
    "expectedRows": [
      {
        "server_name": "Web-App-01",
        "status_code": 200
      },
      {
        "server_name": "Database-Main",
        "status_code": 500
      },
      {
        "server_name": "Auth-Server",
        "status_code": 200
      },
      {
        "server_name": "Backup-Node",
        "status_code": 200
      },
      {
        "server_name": "Api-Gateway",
        "status_code": 200
      },
      {
        "server_name": "Cache-Redis",
        "status_code": 200
      },
      {
        "server_name": "Database-Replica",
        "status_code": 500
      },
      {
        "server_name": "Queue-Worker",
        "status_code": 200
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Filter Status Code 404 atau 502",
      "problemEn": "Retrieve server_name, status_code where status_code IN (404, 502).",
      "correctQuery": "SELECT server_name, status_code FROM ServerLogs WHERE status_code IN (404, 502)",
      "babyLogic": "Untuk angka tidak menggunakan tanda kutip di dalam kurung IN (200, 500)!"
    }
  },
  {
    "id": "sql-49",
    "category": "5. Rentang BETWEEN & Himpunan IN",
    "title": "Soal 49: Filter Sepatu yang Dicetak Mesin M-1 atau M-3 (IN)",
    "tableName": "ShoeProduction",
    "questionEn": "Retrieve 'code' and 'machine_id' where machine_id is IN ('M-1', 'M-3').",
    "babyHint": "🍼 Bahasa Bayi: WHERE machine_id IN ('M-1', 'M-3')!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "code",
      "machine_id",
      "FROM",
      "ShoeProduction",
      "WHERE",
      "machine_id",
      "IN",
      "('M-1', 'M-3')"
    ],
    "correctQuery": "SELECT code, machine_id FROM ShoeProduction WHERE machine_id IN ('M-1', 'M-3')",
    "expectedRows": [
      {
        "code": "SH-001",
        "machine_id": "M-1"
      },
      {
        "code": "SH-003",
        "machine_id": "M-1"
      },
      {
        "code": "SH-004",
        "machine_id": "M-3"
      },
      {
        "code": "SH-006",
        "machine_id": "M-3"
      },
      {
        "code": "SH-007",
        "machine_id": "M-1"
      },
      {
        "code": "SH-009",
        "machine_id": "M-3"
      },
      {
        "code": "SH-010",
        "machine_id": "M-1"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Filter Mesin M-2 atau M-4",
      "problemEn": "Retrieve code, machine_id where machine_id IN ('M-2', 'M-4').",
      "correctQuery": "SELECT code, machine_id FROM ShoeProduction WHERE machine_id IN ('M-2', 'M-4')",
      "babyLogic": "Cari produk dari mesin nomor ganjil di pabrik!"
    }
  },
  {
    "id": "sql-50",
    "category": "5. Rentang BETWEEN & Himpunan IN",
    "title": "Soal 50: Filter Karyawan yang Berdomisili di Bandung, Solo, atau Semarang (IN)",
    "tableName": "Employees",
    "questionEn": "Retrieve 'name' and 'city' where city is IN ('Bandung', 'Solo', 'Semarang').",
    "babyHint": "🍼 Bahasa Bayi: WHERE city IN ('Bandung', 'Solo', 'Semarang')!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "name",
      "city",
      "FROM",
      "Employees",
      "WHERE",
      "city",
      "IN",
      "('Bandung', 'Solo', 'Semarang')"
    ],
    "correctQuery": "SELECT name, city FROM Employees WHERE city IN ('Bandung', 'Solo', 'Semarang')",
    "expectedRows": [
      {
        "name": "Bunga Melati",
        "city": "Bandung"
      },
      {
        "name": "Deni Pratama",
        "city": "Semarang"
      },
      {
        "name": "Fani Rahma",
        "city": "Solo"
      },
      {
        "name": "Joko Susilo",
        "city": "Semarang"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Filter Kota Jakarta atau Yogyakarta",
      "problemEn": "Retrieve name, city where city IN ('Jakarta', 'Yogyakarta').",
      "correctQuery": "SELECT name, city FROM Employees WHERE city IN ('Jakarta', 'Yogyakarta')",
      "babyLogic": "Pencarian multi-kota cabang perusahaan dalam satu baris kueri yang ringkas!"
    }
  },
  {
    "id": "sql-51",
    "category": "6. Pengurutan ORDER BY & LIMIT",
    "title": "Soal 51: Urutkan Karyawan Berdasarkan Gaji Tertinggi (DESC)",
    "tableName": "Employees",
    "questionEn": "Retrieve 'name' and 'salary' from Employees ordered by salary descending.",
    "babyHint": "🍼 Bahasa Bayi: Gunakan ORDER BY salary DESC!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "name",
      "salary",
      "FROM",
      "Employees",
      "ORDER BY",
      "salary",
      "DESC"
    ],
    "correctQuery": "SELECT name, salary FROM Employees ORDER BY salary DESC",
    "expectedRows": [
      {
        "name": "Hany Wijaya",
        "salary": 9100000
      },
      {
        "name": "Citra Dewi",
        "salary": 8200000
      },
      {
        "name": "Andi Saputra",
        "salary": 7500000
      },
      {
        "name": "Eko Prasetyo",
        "salary": 6500000
      },
      {
        "name": "Gilang Ramadhan",
        "salary": 6200000
      },
      {
        "name": "Bunga Melati",
        "salary": 5500000
      },
      {
        "name": "Joko Susilo",
        "salary": 5300000
      },
      {
        "name": "Fani Rahma",
        "salary": 5100000
      },
      {
        "name": "Deni Pratama",
        "salary": 4800000
      },
      {
        "name": "Indra Gunawan",
        "salary": 4500000
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Urutkan Gaji Terendah ke Tertinggi (ASC)",
      "problemEn": "Retrieve name, salary ordered by salary ASC.",
      "correctQuery": "SELECT name, salary FROM Employees ORDER BY salary ASC",
      "babyLogic": "ORDER BY mengurutkan baris; tambahkan DESC untuk nilai terbesar ke terkecil!"
    }
  },
  {
    "id": "sql-52",
    "category": "6. Pengurutan ORDER BY & LIMIT",
    "title": "Soal 52: Urutkan Stok Produk dari yang Paling Sedikit (ASC)",
    "tableName": "Products",
    "questionEn": "Retrieve 'item_name' and 'stock' from Products ordered by stock ascending.",
    "babyHint": "🍼 Bahasa Bayi: Gunakan ORDER BY stock ASC (atau cukup ORDER BY stock)!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "item_name",
      "stock",
      "FROM",
      "Products",
      "ORDER BY",
      "stock",
      "ASC"
    ],
    "correctQuery": "SELECT item_name, stock FROM Products ORDER BY stock ASC",
    "expectedRows": [
      {
        "item_name": "Thermal Barcode Printer",
        "stock": 8
      },
      {
        "item_name": "Gigabit Switch 16-Port",
        "stock": 14
      },
      {
        "item_name": "Wireless Access Point",
        "stock": 18
      },
      {
        "item_name": "UPS Battery Backup 1200VA",
        "stock": 22
      },
      {
        "item_name": "Power Surge Protector",
        "stock": 35
      },
      {
        "item_name": "Fiber Optic Patch Cord",
        "stock": 40
      },
      {
        "item_name": "Mechanical Keyboard RGB",
        "stock": 45
      },
      {
        "item_name": "USB-C Multiport Hub",
        "stock": 60
      },
      {
        "item_name": "Cat6 Ethernet Cable 10m",
        "stock": 85
      },
      {
        "item_name": "Wireless Optical Mouse",
        "stock": 120
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Urutkan Stok Terbanyak (DESC)",
      "problemEn": "Retrieve item_name, stock ordered by stock DESC.",
      "correctQuery": "SELECT item_name, stock FROM Products ORDER BY stock DESC",
      "babyLogic": "ASC adalah urutan naik (ascending): dari angka terkecil menuju angka terbesar!"
    }
  },
  {
    "id": "sql-53",
    "category": "6. Pengurutan ORDER BY & LIMIT",
    "title": "Soal 53: Urutkan Produksi Sepatu dari Pasang Terbanyak",
    "tableName": "ShoeProduction",
    "questionEn": "Retrieve 'model' and 'pairs' from ShoeProduction ordered by pairs descending.",
    "babyHint": "🍼 Bahasa Bayi: ORDER BY pairs DESC!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "model",
      "pairs",
      "FROM",
      "ShoeProduction",
      "ORDER BY",
      "pairs",
      "DESC"
    ],
    "correctQuery": "SELECT model, pairs FROM ShoeProduction ORDER BY pairs DESC",
    "expectedRows": [
      {
        "model": "Sneakers Air",
        "pairs": 1500
      },
      {
        "model": "Sneakers Air",
        "pairs": 1200
      },
      {
        "model": "Running Pro",
        "pairs": 1100
      },
      {
        "model": "Sneakers Elite",
        "pairs": 900
      },
      {
        "model": "Running Pro",
        "pairs": 850
      },
      {
        "model": "Classic Leather",
        "pairs": 650
      },
      {
        "model": "Slip-On Casual",
        "pairs": 500
      },
      {
        "model": "Slip-On Casual",
        "pairs": 400
      },
      {
        "model": "Sport Trail",
        "pairs": 300
      },
      {
        "model": "Sport Trail",
        "pairs": 250
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Urutkan Sepatu dari Pasang Paling Sedikit",
      "problemEn": "Retrieve model, pairs ordered by pairs ASC.",
      "correctQuery": "SELECT model, pairs FROM ShoeProduction ORDER BY pairs ASC",
      "babyLogic": "Lihat model sepatu mana yang menjadi primadona produksi pabrik!"
    }
  },
  {
    "id": "sql-54",
    "category": "6. Pengurutan ORDER BY & LIMIT",
    "title": "Soal 54: Urutkan Server Berdasarkan Respons Paling Lambat",
    "tableName": "ServerLogs",
    "questionEn": "Retrieve 'server_name' and 'response_time_ms' ordered by response_time_ms descending.",
    "babyHint": "🍼 Bahasa Bayi: ORDER BY response_time_ms DESC!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "server_name",
      "response_time_ms",
      "FROM",
      "ServerLogs",
      "ORDER BY",
      "response_time_ms",
      "DESC"
    ],
    "correctQuery": "SELECT server_name, response_time_ms FROM ServerLogs ORDER BY response_time_ms DESC",
    "expectedRows": [
      {
        "server_name": "Database-Main",
        "response_time_ms": 450
      },
      {
        "server_name": "Payment-Service",
        "response_time_ms": 420
      },
      {
        "server_name": "Database-Replica",
        "response_time_ms": 380
      },
      {
        "server_name": "Web-App-02",
        "response_time_ms": 310
      },
      {
        "server_name": "Queue-Worker",
        "response_time_ms": 210
      },
      {
        "server_name": "Web-App-01",
        "response_time_ms": 120
      },
      {
        "server_name": "Api-Gateway",
        "response_time_ms": 110
      },
      {
        "server_name": "Auth-Server",
        "response_time_ms": 95
      },
      {
        "server_name": "Backup-Node",
        "response_time_ms": 80
      },
      {
        "server_name": "Cache-Redis",
        "response_time_ms": 45
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Urutkan Respons Server Paling Cepat",
      "problemEn": "Retrieve server_name, response_time_ms ordered by response_time_ms ASC.",
      "correctQuery": "SELECT server_name, response_time_ms FROM ServerLogs ORDER BY response_time_ms ASC",
      "babyLogic": "Temukan server dengan latency tertinggi di urutan paling atas laporan!"
    }
  },
  {
    "id": "sql-55",
    "category": "6. Pengurutan ORDER BY & LIMIT",
    "title": "Soal 55: Urutkan Tiket Berdasarkan Nomor Tiket (ASC)",
    "tableName": "SupportTickets",
    "questionEn": "Retrieve 'ticket_id' and 'employee_id' from SupportTickets ordered by ticket_id ascending.",
    "babyHint": "🍼 Bahasa Bayi: ORDER BY ticket_id ASC!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "ticket_id",
      "employee_id",
      "FROM",
      "SupportTickets",
      "ORDER BY",
      "ticket_id",
      "ASC"
    ],
    "correctQuery": "SELECT ticket_id, employee_id FROM SupportTickets ORDER BY ticket_id ASC",
    "expectedRows": [
      {
        "ticket_id": "TCK-101",
        "employee_id": 2
      },
      {
        "ticket_id": "TCK-102",
        "employee_id": 4
      },
      {
        "ticket_id": "TCK-103",
        "employee_id": 1
      },
      {
        "ticket_id": "TCK-104",
        "employee_id": 6
      },
      {
        "ticket_id": "TCK-105",
        "employee_id": 2
      },
      {
        "ticket_id": "TCK-106",
        "employee_id": 5
      },
      {
        "ticket_id": "TCK-107",
        "employee_id": 7
      },
      {
        "ticket_id": "TCK-108",
        "employee_id": 9
      },
      {
        "ticket_id": "TCK-109",
        "employee_id": 3
      },
      {
        "ticket_id": "TCK-110",
        "employee_id": 10
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Urutkan Tiket Paling Baru (DESC)",
      "problemEn": "Retrieve ticket_id, employee_id ordered by ticket_id DESC.",
      "correctQuery": "SELECT ticket_id, employee_id FROM SupportTickets ORDER BY ticket_id DESC",
      "babyLogic": "Urutkan nomor antrean tiket bantuan secara kronologis rapi!"
    }
  },
  {
    "id": "sql-56",
    "category": "6. Pengurutan ORDER BY & LIMIT",
    "title": "Soal 56: Ambil 3 Karyawan dengan Gaji Tertinggi (TOP / LIMIT)",
    "tableName": "Employees",
    "questionEn": "Retrieve top 3 'name' and 'salary' from Employees ordered by salary descending.",
    "babyHint": "🍼 Bahasa Bayi: Tambahkan LIMIT 3 di akhir (atau SELECT TOP 3)! Kita pakai: ORDER BY salary DESC LIMIT 3!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "name",
      "salary",
      "FROM",
      "Employees",
      "ORDER BY",
      "salary",
      "DESC",
      "LIMIT",
      "3"
    ],
    "correctQuery": "SELECT name, salary FROM Employees ORDER BY salary DESC LIMIT 3",
    "expectedRows": [
      {
        "name": "Hany Wijaya",
        "salary": 9100000
      },
      {
        "name": "Citra Dewi",
        "salary": 8200000
      },
      {
        "name": "Andi Saputra",
        "salary": 7500000
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Ambil 2 Karyawan Gaji Terendah",
      "problemEn": "Retrieve top 2 lowest salaries: ORDER BY salary ASC LIMIT 2.",
      "correctQuery": "SELECT name, salary FROM Employees ORDER BY salary ASC LIMIT 2",
      "babyLogic": "Kombinasi ORDER BY dan LIMIT memotong hasil hanya untuk N baris teratas!"
    }
  },
  {
    "id": "sql-57",
    "category": "6. Pengurutan ORDER BY & LIMIT",
    "title": "Soal 57: Ambil 3 Produk dengan Stok Paling Sedikit",
    "tableName": "Products",
    "questionEn": "Retrieve 3 'item_name' and 'stock' from Products ordered by stock ascending limit 3.",
    "babyHint": "🍼 Bahasa Bayi: ORDER BY stock ASC LIMIT 3!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "item_name",
      "stock",
      "FROM",
      "Products",
      "ORDER BY",
      "stock",
      "ASC",
      "LIMIT",
      "3"
    ],
    "correctQuery": "SELECT item_name, stock FROM Products ORDER BY stock ASC LIMIT 3",
    "expectedRows": [
      {
        "item_name": "Thermal Barcode Printer",
        "stock": 8
      },
      {
        "item_name": "Gigabit Switch 16-Port",
        "stock": 14
      },
      {
        "item_name": "Wireless Access Point",
        "stock": 18
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Ambil 3 Produk Termahal",
      "problemEn": "Retrieve 3 most expensive products: ORDER BY unit_price DESC LIMIT 3.",
      "correctQuery": "SELECT item_name, unit_price FROM Products ORDER BY unit_price DESC LIMIT 3",
      "babyLogic": "Cari produk kritis yang stoknya paling darurat butuh restock!"
    }
  },
  {
    "id": "sql-58",
    "category": "6. Pengurutan ORDER BY & LIMIT",
    "title": "Soal 58: Ambil 3 Batch Produksi Sepatu Terbesar",
    "tableName": "ShoeProduction",
    "questionEn": "Retrieve top 3 'model' and 'pairs' from ShoeProduction ordered by pairs desc limit 3.",
    "babyHint": "🍼 Bahasa Bayi: ORDER BY pairs DESC LIMIT 3!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "model",
      "pairs",
      "FROM",
      "ShoeProduction",
      "ORDER BY",
      "pairs",
      "DESC",
      "LIMIT",
      "3"
    ],
    "correctQuery": "SELECT model, pairs FROM ShoeProduction ORDER BY pairs DESC LIMIT 3",
    "expectedRows": [
      {
        "model": "Sneakers Air",
        "pairs": 1500
      },
      {
        "model": "Sneakers Air",
        "pairs": 1200
      },
      {
        "model": "Running Pro",
        "pairs": 1100
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Ambil 2 Batch Terkecil",
      "problemEn": "Retrieve top 2 smallest batches: ORDER BY pairs ASC LIMIT 2.",
      "correctQuery": "SELECT model, pairs FROM ShoeProduction ORDER BY pairs ASC LIMIT 2",
      "babyLogic": "Filter podium juara 3 besar kuantitas produksi pabrik!"
    }
  },
  {
    "id": "sql-59",
    "category": "6. Pengurutan ORDER BY & LIMIT",
    "title": "Soal 59: Ambil 3 Server dengan Waktu Respons Paling Lambat",
    "tableName": "ServerLogs",
    "questionEn": "Retrieve 3 'server_name' and 'response_time_ms' ordered by response_time_ms desc limit 3.",
    "babyHint": "🍼 Bahasa Bayi: ORDER BY response_time_ms DESC LIMIT 3!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "server_name",
      "response_time_ms",
      "FROM",
      "ServerLogs",
      "ORDER BY",
      "response_time_ms",
      "DESC",
      "LIMIT",
      "3"
    ],
    "correctQuery": "SELECT server_name, response_time_ms FROM ServerLogs ORDER BY response_time_ms DESC LIMIT 3",
    "expectedRows": [
      {
        "server_name": "Database-Main",
        "response_time_ms": 450
      },
      {
        "server_name": "Payment-Service",
        "response_time_ms": 420
      },
      {
        "server_name": "Database-Replica",
        "response_time_ms": 380
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Ambil 3 Server Tercepat",
      "problemEn": "Retrieve 3 fastest servers: ORDER BY response_time_ms ASC LIMIT 3.",
      "correctQuery": "SELECT server_name, response_time_ms FROM ServerLogs ORDER BY response_time_ms ASC LIMIT 3",
      "babyLogic": "Deteksi 3 titik kemacetan (bottleneck) utama sistem jaringan!"
    }
  },
  {
    "id": "sql-60",
    "category": "6. Pengurutan ORDER BY & LIMIT",
    "title": "Soal 60: Urutkan Nama Karyawan Berdasarkan Abjad Divisi (ASC)",
    "tableName": "Employees",
    "questionEn": "Retrieve 'name' and 'department' from Employees ordered by department ascending.",
    "babyHint": "🍼 Bahasa Bayi: ORDER BY department ASC!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "name",
      "department",
      "FROM",
      "Employees",
      "ORDER BY",
      "department",
      "ASC"
    ],
    "correctQuery": "SELECT name, department FROM Employees ORDER BY department ASC",
    "expectedRows": [
      {
        "name": "Bunga Melati",
        "department": "Finance"
      },
      {
        "name": "Gilang Ramadhan",
        "department": "Finance"
      },
      {
        "name": "Andi Saputra",
        "department": "IT"
      },
      {
        "name": "Citra Dewi",
        "department": "IT"
      },
      {
        "name": "Eko Prasetyo",
        "department": "IT"
      },
      {
        "name": "Hany Wijaya",
        "department": "IT"
      },
      {
        "name": "Joko Susilo",
        "department": "Logistics"
      },
      {
        "name": "Deni Pratama",
        "department": "Production"
      },
      {
        "name": "Fani Rahma",
        "department": "Production"
      },
      {
        "name": "Indra Gunawan",
        "department": "Production"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Urutkan Karyawan Berdasarkan Abjad Nama",
      "problemEn": "Retrieve name, department ordered by name ASC.",
      "correctQuery": "SELECT name, department FROM Employees ORDER BY name ASC",
      "babyLogic": "Pengurutan teks string secara alfabetis dari A sampai Z!"
    }
  },
  {
    "id": "sql-61",
    "category": "7. Fungsi Agregasi",
    "title": "Soal 61: Hitung Total Seluruh Karyawan (COUNT)",
    "tableName": "Employees",
    "questionEn": "Write an SQL query to count total employees as 'total_staff'.",
    "babyHint": "🍼 Bahasa Bayi: Gunakan COUNT(*): SELECT COUNT(*) AS total_staff FROM Employees!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "COUNT(*)",
      "AS",
      "total_staff",
      "FROM",
      "Employees"
    ],
    "correctQuery": "SELECT COUNT(*) AS total_staff FROM Employees",
    "expectedRows": [
      {
        "total_staff": 10
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Hitung Total Baris Produk",
      "problemEn": "Count all products as total_products.",
      "correctQuery": "SELECT COUNT(*) AS total_products FROM Products",
      "babyLogic": "COUNT(*) menghitung berapa banyak total baris data yang ada di tabel!"
    }
  },
  {
    "id": "sql-62",
    "category": "7. Fungsi Agregasi",
    "title": "Soal 62: Hitung Jumlah Total Seluruh Stok Barang (SUM)",
    "tableName": "Products",
    "questionEn": "Calculate the total stock of all products as 'total_all_stock'.",
    "babyHint": "🍼 Bahasa Bayi: Gunakan SUM: SELECT SUM(stock) AS total_all_stock FROM Products!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "SUM(stock)",
      "AS",
      "total_all_stock",
      "FROM",
      "Products"
    ],
    "correctQuery": "SELECT SUM(stock) AS total_all_stock FROM Products",
    "expectedRows": [
      {
        "total_all_stock": 447
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Hitung Total Pasang Sepatu yang Diproduksi",
      "problemEn": "Sum all pairs from ShoeProduction as total_pairs.",
      "correctQuery": "SELECT SUM(pairs) AS total_pairs FROM ShoeProduction",
      "babyLogic": "SUM menjumlahkan nilai numerik dari seluruh baris dalam satu kolom!"
    }
  },
  {
    "id": "sql-63",
    "category": "7. Fungsi Agregasi",
    "title": "Soal 63: Hitung Rata-rata Gaji Karyawan Divisi IT (AVG)",
    "tableName": "Employees",
    "questionEn": "Calculate the average salary of employees in 'IT' department as 'avg_it_salary'.",
    "babyHint": "🍼 Bahasa Bayi: SELECT AVG(salary) AS avg_it_salary FROM Employees WHERE department = 'IT'!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "AVG(salary)",
      "AS",
      "avg_it_salary",
      "FROM",
      "Employees",
      "WHERE",
      "department",
      "=",
      "'IT'"
    ],
    "correctQuery": "SELECT AVG(salary) AS avg_it_salary FROM Employees WHERE department = 'IT'",
    "expectedRows": [
      {
        "avg_it_salary": 7825000.0
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Hitung Rata-rata Gaji Divisi Finance",
      "problemEn": "Calculate average salary for Finance dept as avg_fin_salary.",
      "correctQuery": "SELECT AVG(salary) AS avg_fin_salary FROM Employees WHERE department = 'Finance'",
      "babyLogic": "AVG menghitung mean (nilai rata-rata) dengan menggabungkan filter WHERE!"
    }
  },
  {
    "id": "sql-64",
    "category": "7. Fungsi Agregasi",
    "title": "Soal 64: Cari Harga Produk Termurah (MIN)",
    "tableName": "Products",
    "questionEn": "Find the minimum unit price in Products table as 'cheapest_price'.",
    "babyHint": "🍼 Bahasa Bayi: SELECT MIN(unit_price) AS cheapest_price FROM Products!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "MIN(unit_price)",
      "AS",
      "cheapest_price",
      "FROM",
      "Products"
    ],
    "correctQuery": "SELECT MIN(unit_price) AS cheapest_price FROM Products",
    "expectedRows": [
      {
        "cheapest_price": 75000
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Cari Gaji Karyawan Terendah",
      "problemEn": "Find minimum salary as lowest_salary.",
      "correctQuery": "SELECT MIN(salary) AS lowest_salary FROM Employees",
      "babyLogic": "MIN mencari angka terkecil di antara seluruh baris kolom tersebut!"
    }
  },
  {
    "id": "sql-65",
    "category": "7. Fungsi Agregasi",
    "title": "Soal 65: Cari Jumlah Batch Sepatu Terbanyak (MAX)",
    "tableName": "ShoeProduction",
    "questionEn": "Find the maximum pairs produced in ShoeProduction as 'max_shoe_pairs'.",
    "babyHint": "🍼 Bahasa Bayi: SELECT MAX(pairs) AS max_shoe_pairs FROM ShoeProduction!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "MAX(pairs)",
      "AS",
      "max_shoe_pairs",
      "FROM",
      "ShoeProduction"
    ],
    "correctQuery": "SELECT MAX(pairs) AS max_shoe_pairs FROM ShoeProduction",
    "expectedRows": [
      {
        "max_shoe_pairs": 1500
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Cari Harga Produk Termahal",
      "problemEn": "Find maximum unit price as highest_price.",
      "correctQuery": "SELECT MAX(unit_price) AS highest_price FROM Products",
      "babyLogic": "MAX mengekstrak puncak rekor angka tertinggi di tabel!"
    }
  },
  {
    "id": "sql-66",
    "category": "7. Fungsi Agregasi",
    "title": "Soal 66: Hitung Jumlah Tiket Berstatus Urgent (COUNT)",
    "tableName": "SupportTickets",
    "questionEn": "Count tickets where priority is 'Urgent' as 'urgent_ticket_count'.",
    "babyHint": "🍼 Bahasa Bayi: SELECT COUNT(*) AS urgent_ticket_count FROM SupportTickets WHERE priority = 'Urgent'!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "COUNT(*)",
      "AS",
      "urgent_ticket_count",
      "FROM",
      "SupportTickets",
      "WHERE",
      "priority",
      "=",
      "'Urgent'"
    ],
    "correctQuery": "SELECT COUNT(*) AS urgent_ticket_count FROM SupportTickets WHERE priority = 'Urgent'",
    "expectedRows": [
      {
        "urgent_ticket_count": 3
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Hitung Jumlah Tiket Selesai (Resolved)",
      "problemEn": "Count tickets where status = 'Resolved' as resolved_count.",
      "correctQuery": "SELECT COUNT(*) AS resolved_count FROM SupportTickets WHERE status = 'Resolved'",
      "babyLogic": "Menghitung berapa baris tiket yang masuk kriteria darurat khusus!"
    }
  },
  {
    "id": "sql-67",
    "category": "7. Fungsi Agregasi",
    "title": "Soal 67: Hitung Rata-rata Latensi Seluruh Server (AVG)",
    "tableName": "ServerLogs",
    "questionEn": "Calculate average response time of all servers as 'avg_ping'.",
    "babyHint": "🍼 Bahasa Bayi: SELECT AVG(response_time_ms) AS avg_ping FROM ServerLogs!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "AVG(response_time_ms)",
      "AS",
      "avg_ping",
      "FROM",
      "ServerLogs"
    ],
    "correctQuery": "SELECT AVG(response_time_ms) AS avg_ping FROM ServerLogs",
    "expectedRows": [
      {
        "avg_ping": 222.0
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Rata-rata Stok Barang di Gudang",
      "problemEn": "Calculate average stock as avg_stock.",
      "correctQuery": "SELECT AVG(stock) AS avg_stock FROM Products",
      "babyLogic": "Menghitung metrik performa kesehatan jaringan rata-rata!"
    }
  },
  {
    "id": "sql-68",
    "category": "7. Fungsi Agregasi",
    "title": "Soal 68: Hitung Total Pasang Sepatu yang Lolos QC (SUM)",
    "tableName": "ShoeProduction",
    "questionEn": "Sum pairs where status_qc is 'Passed' as 'total_passed_pairs'.",
    "babyHint": "🍼 Bahasa Bayi: SELECT SUM(pairs) AS total_passed_pairs FROM ShoeProduction WHERE status_qc = 'Passed'!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "SUM(pairs)",
      "AS",
      "total_passed_pairs",
      "FROM",
      "ShoeProduction",
      "WHERE",
      "status_qc",
      "=",
      "'Passed'"
    ],
    "correctQuery": "SELECT SUM(pairs) AS total_passed_pairs FROM ShoeProduction WHERE status_qc = 'Passed'",
    "expectedRows": [
      {
        "total_passed_pairs": 6700
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Total Pasang Sepatu yang Ditolak (Rejected)",
      "problemEn": "Sum pairs where status_qc = 'Rejected' as total_rejected_pairs.",
      "correctQuery": "SELECT SUM(pairs) AS total_rejected_pairs FROM ShoeProduction WHERE status_qc = 'Rejected'",
      "babyLogic": "Hanya jumlahkan angka produksi dari batch yang mutunya bagus!"
    }
  },
  {
    "id": "sql-69",
    "category": "7. Fungsi Agregasi",
    "title": "Soal 69: Cari Besaran Gaji Terendah di Perusahaan (MIN)",
    "tableName": "Employees",
    "questionEn": "Find the minimum salary in Employees as 'lowest_salary'.",
    "babyHint": "🍼 Bahasa Bayi: SELECT MIN(salary) AS lowest_salary FROM Employees!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "MIN(salary)",
      "AS",
      "lowest_salary",
      "FROM",
      "Employees"
    ],
    "correctQuery": "SELECT MIN(salary) AS lowest_salary FROM Employees",
    "expectedRows": [
      {
        "lowest_salary": 4500000
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Cari Gaji Tertinggi di Perusahaan",
      "problemEn": "Find maximum salary as highest_salary.",
      "correctQuery": "SELECT MAX(salary) AS highest_salary FROM Employees",
      "babyLogic": "Mengetahui batas gaji terbawah di struktur penggajian!"
    }
  },
  {
    "id": "sql-70",
    "category": "7. Fungsi Agregasi",
    "title": "Soal 70: Cari Latensi Terburuk / Paling Lambat (MAX)",
    "tableName": "ServerLogs",
    "questionEn": "Find maximum response time in ServerLogs as 'worst_latency'.",
    "babyHint": "🍼 Bahasa Bayi: SELECT MAX(response_time_ms) AS worst_latency FROM ServerLogs!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "MAX(response_time_ms)",
      "AS",
      "worst_latency",
      "FROM",
      "ServerLogs"
    ],
    "correctQuery": "SELECT MAX(response_time_ms) AS worst_latency FROM ServerLogs",
    "expectedRows": [
      {
        "worst_latency": 450
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Cari Latensi Terbaik / Paling Cepat",
      "problemEn": "Find minimum response time as best_latency.",
      "correctQuery": "SELECT MIN(response_time_ms) AS best_latency FROM ServerLogs",
      "babyLogic": "Mendeteksi lonjakan lag paling parah yang pernah terjadi!"
    }
  },
  {
    "id": "sql-71",
    "category": "8. Pengelompokan GROUP BY & HAVING",
    "title": "Soal 71: Kelompokkan Jumlah Karyawan per Divisi (GROUP BY)",
    "tableName": "Employees",
    "questionEn": "Retrieve department and count of employees as 'staff_count' grouped by department.",
    "babyHint": "🍼 Bahasa Bayi: SELECT department, COUNT(*) AS staff_count FROM Employees GROUP BY department!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "department",
      "COUNT(*)",
      "AS",
      "staff_count",
      "FROM",
      "Employees",
      "GROUP BY",
      "department"
    ],
    "correctQuery": "SELECT department, COUNT(*) AS staff_count FROM Employees GROUP BY department",
    "expectedRows": [
      {
        "department": "IT",
        "staff_count": 4
      },
      {
        "department": "Finance",
        "staff_count": 2
      },
      {
        "department": "Production",
        "staff_count": 3
      },
      {
        "department": "Logistics",
        "staff_count": 1
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Kelompokkan Karyawan Berdasarkan Kota",
      "problemEn": "Count employees per city: GROUP BY city.",
      "correctQuery": "SELECT city, COUNT(*) AS staff_count FROM Employees GROUP BY city",
      "babyLogic": "GROUP BY mengumpulkan baris yang divisinya sama, lalu COUNT(*) menghitung anggota masing-masing grup!"
    }
  },
  {
    "id": "sql-72",
    "category": "8. Pengelompokan GROUP BY & HAVING",
    "title": "Soal 72: Kelompokkan Jumlah Jenis Produk per Kategori",
    "tableName": "Products",
    "questionEn": "Retrieve category and count of items as 'item_count' grouped by category.",
    "babyHint": "🍼 Bahasa Bayi: SELECT category, COUNT(*) AS item_count FROM Products GROUP BY category!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "category",
      "COUNT(*)",
      "AS",
      "item_count",
      "FROM",
      "Products",
      "GROUP BY",
      "category"
    ],
    "correctQuery": "SELECT category, COUNT(*) AS item_count FROM Products GROUP BY category",
    "expectedRows": [
      {
        "category": "Hardware",
        "item_count": 4
      },
      {
        "category": "Network",
        "item_count": 4
      },
      {
        "category": "Power",
        "item_count": 2
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Hitung Total Stok per Kategori",
      "problemEn": "Sum stock per category: GROUP BY category.",
      "correctQuery": "SELECT category, SUM(stock) AS total_stock FROM Products GROUP BY category",
      "babyLogic": "Hitung ada berapa jenis barang di kategori Hardware, Network, dan Power!"
    }
  },
  {
    "id": "sql-73",
    "category": "8. Pengelompokan GROUP BY & HAVING",
    "title": "Soal 73: Hitung Total Pasang Sepatu per Status QC",
    "tableName": "ShoeProduction",
    "questionEn": "Retrieve status_qc and sum of pairs as 'sum_pairs' grouped by status_qc.",
    "babyHint": "🍼 Bahasa Bayi: SELECT status_qc, SUM(pairs) AS sum_pairs FROM ShoeProduction GROUP BY status_qc!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "status_qc",
      "SUM(pairs)",
      "AS",
      "sum_pairs",
      "FROM",
      "ShoeProduction",
      "GROUP BY",
      "status_qc"
    ],
    "correctQuery": "SELECT status_qc, SUM(pairs) AS sum_pairs FROM ShoeProduction GROUP BY status_qc",
    "expectedRows": [
      {
        "status_qc": "Passed",
        "sum_pairs": 6700
      },
      {
        "status_qc": "Rejected",
        "sum_pairs": 650
      },
      {
        "status_qc": "Pending",
        "sum_pairs": 300
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Hitung Jumlah Batch per Status QC",
      "problemEn": "Count batches per status_qc: GROUP BY status_qc.",
      "correctQuery": "SELECT status_qc, COUNT(*) AS batch_count FROM ShoeProduction GROUP BY status_qc",
      "babyLogic": "Bandingkan total pasang yang Lolos (Passed) vs Ditolak (Rejected)!"
    }
  },
  {
    "id": "sql-74",
    "category": "8. Pengelompokan GROUP BY & HAVING",
    "title": "Soal 74: Hitung Jumlah Tiket Berdasarkan Tingkat Prioritas",
    "tableName": "SupportTickets",
    "questionEn": "Retrieve priority and count of tickets as 'ticket_count' grouped by priority.",
    "babyHint": "🍼 Bahasa Bayi: SELECT priority, COUNT(*) AS ticket_count FROM SupportTickets GROUP BY priority!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "priority",
      "COUNT(*)",
      "AS",
      "ticket_count",
      "FROM",
      "SupportTickets",
      "GROUP BY",
      "priority"
    ],
    "correctQuery": "SELECT priority, COUNT(*) AS ticket_count FROM SupportTickets GROUP BY priority",
    "expectedRows": [
      {
        "priority": "High",
        "ticket_count": 3
      },
      {
        "priority": "Urgent",
        "ticket_count": 3
      },
      {
        "priority": "Low",
        "ticket_count": 2
      },
      {
        "priority": "Medium",
        "ticket_count": 2
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Hitung Tiket Berdasarkan Status Penanganan",
      "problemEn": "Count tickets per status: GROUP BY status.",
      "correctQuery": "SELECT status, COUNT(*) AS ticket_count FROM SupportTickets GROUP BY status",
      "babyLogic": "Kelompokkan beban keluhan ke kategori Low, Medium, High, dan Urgent!"
    }
  },
  {
    "id": "sql-75",
    "category": "8. Pengelompokan GROUP BY & HAVING",
    "title": "Soal 75: Hitung Jumlah Catatan Log per Level Keparahan",
    "tableName": "ServerLogs",
    "questionEn": "Retrieve log_level and count as 'log_count' grouped by log_level.",
    "babyHint": "🍼 Bahasa Bayi: SELECT log_level, COUNT(*) AS log_count FROM ServerLogs GROUP BY log_level!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "log_level",
      "COUNT(*)",
      "AS",
      "log_count",
      "FROM",
      "ServerLogs",
      "GROUP BY",
      "log_level"
    ],
    "correctQuery": "SELECT log_level, COUNT(*) AS log_count FROM ServerLogs GROUP BY log_level",
    "expectedRows": [
      {
        "log_level": "INFO",
        "log_count": 6
      },
      {
        "log_level": "ERROR",
        "log_count": 3
      },
      {
        "log_level": "WARN",
        "log_count": 1
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Hitung Log Berdasarkan Status Code",
      "problemEn": "Count logs per status_code: GROUP BY status_code.",
      "correctQuery": "SELECT status_code, COUNT(*) AS log_count FROM ServerLogs GROUP BY status_code",
      "babyLogic": "Distribusi error: berapa banyak INFO, WARN, dan ERROR di log sistem!"
    }
  },
  {
    "id": "sql-76",
    "category": "8. Pengelompokan GROUP BY & HAVING",
    "title": "Soal 76: Hitung Rata-rata Gaji per Divisi",
    "tableName": "Employees",
    "questionEn": "Retrieve department and average salary as 'avg_dept_salary' grouped by department.",
    "babyHint": "🍼 Bahasa Bayi: SELECT department, AVG(salary) AS avg_dept_salary FROM Employees GROUP BY department!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "department",
      "AVG(salary)",
      "AS",
      "avg_dept_salary",
      "FROM",
      "Employees",
      "GROUP BY",
      "department"
    ],
    "correctQuery": "SELECT department, AVG(salary) AS avg_dept_salary FROM Employees GROUP BY department",
    "expectedRows": [
      {
        "department": "IT",
        "avg_dept_salary": 7400000.0
      },
      {
        "department": "Finance",
        "avg_dept_salary": 5850000.0
      },
      {
        "department": "Production",
        "avg_dept_salary": 5100000.0
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Hitung Total Pengeluaran Gaji per Divisi",
      "problemEn": "Sum salary per department: GROUP BY department.",
      "correctQuery": "SELECT department, SUM(salary) AS total_payroll FROM Employees GROUP BY department",
      "babyLogic": "Rata-rata upah divisi IT vs Keuangan vs Produksi pabrik!"
    }
  },
  {
    "id": "sql-77",
    "category": "8. Pengelompokan GROUP BY & HAVING",
    "title": "Soal 77: Hitung Total Sepatu yang Dicetak per ID Mesin",
    "tableName": "ShoeProduction",
    "questionEn": "Retrieve machine_id and sum of pairs as 'machine_pairs' grouped by machine_id.",
    "babyHint": "🍼 Bahasa Bayi: SELECT machine_id, SUM(pairs) AS machine_pairs FROM ShoeProduction GROUP BY machine_id!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "machine_id",
      "SUM(pairs)",
      "AS",
      "machine_pairs",
      "FROM",
      "ShoeProduction",
      "GROUP BY",
      "machine_id"
    ],
    "correctQuery": "SELECT machine_id, SUM(pairs) AS machine_pairs FROM ShoeProduction GROUP BY machine_id",
    "expectedRows": [
      {
        "machine_id": "M-1",
        "machine_pairs": 3600
      },
      {
        "machine_id": "M-2",
        "machine_pairs": 2350
      },
      {
        "machine_id": "M-3",
        "machine_pairs": 2550
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Hitung Berapa Kali Mesin Digunakan",
      "problemEn": "Count runs per machine: GROUP BY machine_id.",
      "correctQuery": "SELECT machine_id, COUNT(*) AS run_count FROM ShoeProduction GROUP BY machine_id",
      "babyLogic": "Total produktivitas pasang sepatu yang disumbangkan tiap mesin pabrik!"
    }
  },
  {
    "id": "sql-78",
    "category": "8. Pengelompokan GROUP BY & HAVING",
    "title": "Soal 78: Filter Divisi yang Memiliki Lebih dari 2 Karyawan (HAVING)",
    "tableName": "Employees",
    "questionEn": "Retrieve department and staff_count having count greater than 2.",
    "babyHint": "🍼 Bahasa Bayi: Gunakan HAVING setelah GROUP BY: HAVING COUNT(*) > 2!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "department",
      "COUNT(*)",
      "AS",
      "staff_count",
      "FROM",
      "Employees",
      "GROUP BY",
      "department",
      "HAVING",
      "COUNT(*)",
      ">",
      "2"
    ],
    "correctQuery": "SELECT department, COUNT(*) AS staff_count FROM Employees GROUP BY department HAVING COUNT(*) > 2",
    "expectedRows": [
      {
        "department": "IT",
        "staff_count": 4
      },
      {
        "department": "Production",
        "staff_count": 3
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Filter Kota dengan Lebih dari 1 Karyawan",
      "problemEn": "Filter cities with > 1 employee: GROUP BY city HAVING COUNT(*) > 1.",
      "correctQuery": "SELECT city, COUNT(*) AS staff_count FROM Employees GROUP BY city HAVING COUNT(*) > 1",
      "babyLogic": "WHERE menyaring baris individual sebelum dikelompokkan, sedangkan HAVING menyaring grup hasil agregasi!"
    }
  },
  {
    "id": "sql-79",
    "category": "8. Pengelompokan GROUP BY & HAVING",
    "title": "Soal 79: Filter Kategori yang Memiliki Lebih dari 2 Jenis Produk (HAVING)",
    "tableName": "Products",
    "questionEn": "Retrieve category and item_count having count greater than 2.",
    "babyHint": "🍼 Bahasa Bayi: SELECT category, COUNT(*) AS item_count FROM Products GROUP BY category HAVING COUNT(*) > 2!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "category",
      "COUNT(*)",
      "AS",
      "item_count",
      "FROM",
      "Products",
      "GROUP BY",
      "category",
      "HAVING",
      "COUNT(*)",
      ">",
      "2"
    ],
    "correctQuery": "SELECT category, COUNT(*) AS item_count FROM Products GROUP BY category HAVING COUNT(*) > 2",
    "expectedRows": [
      {
        "category": "Hardware",
        "item_count": 4
      },
      {
        "category": "Network",
        "item_count": 4
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Filter Kategori dengan Total Stok > 200",
      "problemEn": "Filter category where total stock > 200: HAVING SUM(stock) > 200.",
      "correctQuery": "SELECT category, SUM(stock) AS total_stock FROM Products GROUP BY category HAVING SUM(stock) > 200",
      "babyLogic": "Hanya tampilkan kategori produk yang varian produknya melimpah!"
    }
  },
  {
    "id": "sql-80",
    "category": "8. Pengelompokan GROUP BY & HAVING",
    "title": "Soal 80: Filter Prioritas Tiket yang Muncul Lebih dari 1 Kali (HAVING)",
    "tableName": "SupportTickets",
    "questionEn": "Retrieve priority and ticket_count having count greater than 1.",
    "babyHint": "🍼 Bahasa Bayi: SELECT priority, COUNT(*) AS ticket_count FROM SupportTickets GROUP BY priority HAVING COUNT(*) > 1!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "priority",
      "COUNT(*)",
      "AS",
      "ticket_count",
      "FROM",
      "SupportTickets",
      "GROUP BY",
      "priority",
      "HAVING",
      "COUNT(*)",
      ">",
      "1"
    ],
    "correctQuery": "SELECT priority, COUNT(*) AS ticket_count FROM SupportTickets GROUP BY priority HAVING COUNT(*) > 1",
    "expectedRows": [
      {
        "priority": "High",
        "ticket_count": 3
      },
      {
        "priority": "Urgent",
        "ticket_count": 3
      },
      {
        "priority": "Low",
        "ticket_count": 2
      },
      {
        "priority": "Medium",
        "ticket_count": 2
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Filter Status Tiket yang Muncul Lebih dari 2 Kali",
      "problemEn": "Filter status count > 2: HAVING COUNT(*) > 2.",
      "correctQuery": "SELECT status, COUNT(*) AS ticket_count FROM SupportTickets GROUP BY status HAVING COUNT(*) > 2",
      "babyLogic": "Eliminasi kategori yang hanya muncul satu kali agar fokus ke tren utama!"
    }
  },
  {
    "id": "sql-81",
    "category": "9. Relasi Antar Tabel INNER JOIN",
    "title": "Soal 81: Hubungkan Tiket Bantuan dengan Nama Karyawan Pelapor",
    "tableName": "SupportTickets",
    "questionEn": "Join SupportTickets with Employees to get ticket_id, employee name, and issue_type.",
    "babyHint": "🍼 Bahasa Bayi: SELECT SupportTickets.ticket_id, Employees.name, SupportTickets.issue_type FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "SupportTickets.ticket_id",
      "Employees.name",
      "SupportTickets.issue_type",
      "FROM",
      "SupportTickets",
      "INNER JOIN",
      "Employees",
      "ON",
      "SupportTickets.employee_id",
      "=",
      "Employees.id"
    ],
    "correctQuery": "SELECT SupportTickets.ticket_id, Employees.name, SupportTickets.issue_type FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id",
    "expectedRows": [
      {
        "ticket_id": "TCK-101",
        "name": "Bunga Melati",
        "issue_type": "Network Outage"
      },
      {
        "ticket_id": "TCK-102",
        "name": "Deni Pratama",
        "issue_type": "Barcode Scanner Error"
      },
      {
        "ticket_id": "TCK-103",
        "name": "Andi Saputra",
        "issue_type": "Software License"
      },
      {
        "ticket_id": "TCK-104",
        "name": "Fani Rahma",
        "issue_type": "Printer Jammed"
      },
      {
        "ticket_id": "TCK-105",
        "name": "Bunga Melati",
        "issue_type": "ERP Login Failed"
      },
      {
        "ticket_id": "TCK-106",
        "name": "Eko Prasetyo",
        "issue_type": "VPN Disconnected"
      },
      {
        "ticket_id": "TCK-107",
        "name": "Gilang Ramadhan",
        "issue_type": "Excel Macro Crash"
      },
      {
        "ticket_id": "TCK-108",
        "name": "Indra Gunawan",
        "issue_type": "Label Printer Offline"
      },
      {
        "ticket_id": "TCK-109",
        "name": "Citra Dewi",
        "issue_type": "Database Slowdown"
      },
      {
        "ticket_id": "TCK-110",
        "name": "Joko Susilo",
        "issue_type": "Barcode Sync Delay"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Hubungkan Tiket dengan Divisi Karyawan",
      "problemEn": "Join tickets with employee department.",
      "correctQuery": "SELECT SupportTickets.ticket_id, Employees.department FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id",
      "babyLogic": "INNER JOIN mengaitkan kolom kunci asing (foreign key employee_id) dengan kunci utama (primary key id)!"
    }
  },
  {
    "id": "sql-82",
    "category": "9. Relasi Antar Tabel INNER JOIN",
    "title": "Soal 82: Hubungkan Tiket dengan Nama dan Divisi Karyawan",
    "tableName": "SupportTickets",
    "questionEn": "Join SupportTickets and Employees to get ticket_id, name, and department.",
    "babyHint": "🍼 Bahasa Bayi: SELECT SupportTickets.ticket_id, Employees.name, Employees.department FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "SupportTickets.ticket_id",
      "Employees.name",
      "Employees.department",
      "FROM",
      "SupportTickets",
      "INNER JOIN",
      "Employees",
      "ON",
      "SupportTickets.employee_id",
      "=",
      "Employees.id"
    ],
    "correctQuery": "SELECT SupportTickets.ticket_id, Employees.name, Employees.department FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id",
    "expectedRows": [
      {
        "ticket_id": "TCK-101",
        "name": "Bunga Melati",
        "department": "Finance"
      },
      {
        "ticket_id": "TCK-102",
        "name": "Deni Pratama",
        "department": "Production"
      },
      {
        "ticket_id": "TCK-103",
        "name": "Andi Saputra",
        "department": "IT"
      },
      {
        "ticket_id": "TCK-104",
        "name": "Fani Rahma",
        "department": "Production"
      },
      {
        "ticket_id": "TCK-105",
        "name": "Bunga Melati",
        "department": "Finance"
      },
      {
        "ticket_id": "TCK-106",
        "name": "Eko Prasetyo",
        "department": "IT"
      },
      {
        "ticket_id": "TCK-107",
        "name": "Gilang Ramadhan",
        "department": "Finance"
      },
      {
        "ticket_id": "TCK-108",
        "name": "Indra Gunawan",
        "department": "Production"
      },
      {
        "ticket_id": "TCK-109",
        "name": "Citra Dewi",
        "department": "IT"
      },
      {
        "ticket_id": "TCK-110",
        "name": "Joko Susilo",
        "department": "Logistics"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Hubungkan Tiket dengan Kota Karyawan",
      "problemEn": "Join tickets with employee city.",
      "correctQuery": "SELECT SupportTickets.ticket_id, Employees.name, Employees.city FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id",
      "babyLogic": "Tahu siapa orangnya sekaligus di divisi mana dia bertugas saat melapor kendala!"
    }
  },
  {
    "id": "sql-83",
    "category": "9. Relasi Antar Tabel INNER JOIN",
    "title": "Soal 83: Hubungkan Tiket dengan Nama Karyawan dan Prioritas Masalah",
    "tableName": "SupportTickets",
    "questionEn": "Join SupportTickets with Employees to get ticket_id, name, and priority.",
    "babyHint": "🍼 Bahasa Bayi: SELECT SupportTickets.ticket_id, Employees.name, SupportTickets.priority FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "SupportTickets.ticket_id",
      "Employees.name",
      "SupportTickets.priority",
      "FROM",
      "SupportTickets",
      "INNER JOIN",
      "Employees",
      "ON",
      "SupportTickets.employee_id",
      "=",
      "Employees.id"
    ],
    "correctQuery": "SELECT SupportTickets.ticket_id, Employees.name, SupportTickets.priority FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id",
    "expectedRows": [
      {
        "ticket_id": "TCK-101",
        "name": "Bunga Melati",
        "priority": "High"
      },
      {
        "ticket_id": "TCK-102",
        "name": "Deni Pratama",
        "priority": "Urgent"
      },
      {
        "ticket_id": "TCK-103",
        "name": "Andi Saputra",
        "priority": "Low"
      },
      {
        "ticket_id": "TCK-104",
        "name": "Fani Rahma",
        "priority": "Medium"
      },
      {
        "ticket_id": "TCK-105",
        "name": "Bunga Melati",
        "priority": "Urgent"
      },
      {
        "ticket_id": "TCK-106",
        "name": "Eko Prasetyo",
        "priority": "High"
      },
      {
        "ticket_id": "TCK-107",
        "name": "Gilang Ramadhan",
        "priority": "Low"
      },
      {
        "ticket_id": "TCK-108",
        "name": "Indra Gunawan",
        "priority": "Urgent"
      },
      {
        "ticket_id": "TCK-109",
        "name": "Citra Dewi",
        "priority": "High"
      },
      {
        "ticket_id": "TCK-110",
        "name": "Joko Susilo",
        "priority": "Medium"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Hubungkan Tiket dengan Status Pengerjaan",
      "problemEn": "Join tickets with status: SupportTickets.status.",
      "correctQuery": "SELECT SupportTickets.ticket_id, Employees.name, SupportTickets.status FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id",
      "babyLogic": "Lihat urgensi tiket bersama nama staf yang sedang terdampak gangguan!"
    }
  },
  {
    "id": "sql-84",
    "category": "9. Relasi Antar Tabel INNER JOIN",
    "title": "Soal 84: Hubungkan Tiket dengan Status Tiket dan Nama Pelapor",
    "tableName": "SupportTickets",
    "questionEn": "Retrieve ticket_id, name, and status by joining SupportTickets and Employees.",
    "babyHint": "🍼 Bahasa Bayi: SELECT SupportTickets.ticket_id, Employees.name, SupportTickets.status FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "SupportTickets.ticket_id",
      "Employees.name",
      "SupportTickets.status",
      "FROM",
      "SupportTickets",
      "INNER JOIN",
      "Employees",
      "ON",
      "SupportTickets.employee_id",
      "=",
      "Employees.id"
    ],
    "correctQuery": "SELECT SupportTickets.ticket_id, Employees.name, SupportTickets.status FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id",
    "expectedRows": [
      {
        "ticket_id": "TCK-101",
        "name": "Bunga Melati",
        "status": "Resolved"
      },
      {
        "ticket_id": "TCK-102",
        "name": "Deni Pratama",
        "status": "In Progress"
      },
      {
        "ticket_id": "TCK-103",
        "name": "Andi Saputra",
        "status": "Resolved"
      },
      {
        "ticket_id": "TCK-104",
        "name": "Fani Rahma",
        "status": "Open"
      },
      {
        "ticket_id": "TCK-105",
        "name": "Bunga Melati",
        "status": "Resolved"
      },
      {
        "ticket_id": "TCK-106",
        "name": "Eko Prasetyo",
        "status": "Resolved"
      },
      {
        "ticket_id": "TCK-107",
        "name": "Gilang Ramadhan",
        "status": "Open"
      },
      {
        "ticket_id": "TCK-108",
        "name": "Indra Gunawan",
        "status": "In Progress"
      },
      {
        "ticket_id": "TCK-109",
        "name": "Citra Dewi",
        "status": "Resolved"
      },
      {
        "ticket_id": "TCK-110",
        "name": "Joko Susilo",
        "status": "Resolved"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Hubungkan Tiket dengan Masalah & Status",
      "problemEn": "Join tickets with issue_type and status.",
      "correctQuery": "SELECT SupportTickets.ticket_id, SupportTickets.issue_type, SupportTickets.status FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id",
      "babyLogic": "Pelacakan tiket: tahu tiket mana yang sudah Resolved dan siapa pemiliknya!"
    }
  },
  {
    "id": "sql-85",
    "category": "9. Relasi Antar Tabel INNER JOIN",
    "title": "Soal 85: Tampilkan Nama Karyawan Beserta Masalah dan Prioritas Tiket",
    "tableName": "SupportTickets",
    "questionEn": "Retrieve name, issue_type, and priority by joining Employees and SupportTickets.",
    "babyHint": "🍼 Bahasa Bayi: SELECT Employees.name, SupportTickets.issue_type, SupportTickets.priority FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "Employees.name",
      "SupportTickets.issue_type",
      "SupportTickets.priority",
      "FROM",
      "SupportTickets",
      "INNER JOIN",
      "Employees",
      "ON",
      "SupportTickets.employee_id",
      "=",
      "Employees.id"
    ],
    "correctQuery": "SELECT Employees.name, SupportTickets.issue_type, SupportTickets.priority FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id",
    "expectedRows": [
      {
        "name": "Bunga Melati",
        "issue_type": "Network Outage",
        "priority": "High"
      },
      {
        "name": "Deni Pratama",
        "issue_type": "Barcode Scanner Error",
        "priority": "Urgent"
      },
      {
        "name": "Andi Saputra",
        "issue_type": "Software License",
        "priority": "Low"
      },
      {
        "name": "Fani Rahma",
        "issue_type": "Printer Jammed",
        "priority": "Medium"
      },
      {
        "name": "Bunga Melati",
        "issue_type": "ERP Login Failed",
        "priority": "Urgent"
      },
      {
        "name": "Eko Prasetyo",
        "issue_type": "VPN Disconnected",
        "priority": "High"
      },
      {
        "name": "Gilang Ramadhan",
        "issue_type": "Excel Macro Crash",
        "priority": "Low"
      },
      {
        "name": "Indra Gunawan",
        "issue_type": "Label Printer Offline",
        "priority": "Urgent"
      },
      {
        "name": "Citra Dewi",
        "issue_type": "Database Slowdown",
        "priority": "High"
      },
      {
        "name": "Joko Susilo",
        "issue_type": "Barcode Sync Delay",
        "priority": "Medium"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Tampilkan Nama dan Jenis Masalah Saja",
      "problemEn": "Retrieve name and issue_type from join.",
      "correctQuery": "SELECT Employees.name, SupportTickets.issue_type FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id",
      "babyLogic": "Laporan ringkas meja bantuan (IT Helpdesk) yang ramah dibaca manajemen!"
    }
  },
  {
    "id": "sql-86",
    "category": "9. Relasi Antar Tabel INNER JOIN",
    "title": "Soal 86: Tampilkan Tiket, Nama Karyawan, dan Lokasi Kota Asal",
    "tableName": "SupportTickets",
    "questionEn": "Join SupportTickets and Employees to get ticket_id, name, and city.",
    "babyHint": "🍼 Bahasa Bayi: SELECT SupportTickets.ticket_id, Employees.name, Employees.city FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "SupportTickets.ticket_id",
      "Employees.name",
      "Employees.city",
      "FROM",
      "SupportTickets",
      "INNER JOIN",
      "Employees",
      "ON",
      "SupportTickets.employee_id",
      "=",
      "Employees.id"
    ],
    "correctQuery": "SELECT SupportTickets.ticket_id, Employees.name, Employees.city FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id",
    "expectedRows": [
      {
        "ticket_id": "TCK-101",
        "name": "Bunga Melati",
        "city": "Bandung"
      },
      {
        "ticket_id": "TCK-102",
        "name": "Deni Pratama",
        "city": "Semarang"
      },
      {
        "ticket_id": "TCK-103",
        "name": "Andi Saputra",
        "city": "Jakarta"
      },
      {
        "ticket_id": "TCK-104",
        "name": "Fani Rahma",
        "city": "Solo"
      },
      {
        "ticket_id": "TCK-105",
        "name": "Bunga Melati",
        "city": "Bandung"
      },
      {
        "ticket_id": "TCK-106",
        "name": "Eko Prasetyo",
        "city": "Yogyakarta"
      },
      {
        "ticket_id": "TCK-107",
        "name": "Gilang Ramadhan",
        "city": "Jakarta"
      },
      {
        "ticket_id": "TCK-108",
        "name": "Indra Gunawan",
        "city": "Surabaya"
      },
      {
        "ticket_id": "TCK-109",
        "name": "Citra Dewi",
        "city": "Surabaya"
      },
      {
        "ticket_id": "TCK-110",
        "name": "Joko Susilo",
        "city": "Semarang"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Tampilkan ID Tiket dan Kota Asal Pelapor",
      "problemEn": "Join ticket_id with employee city.",
      "correctQuery": "SELECT SupportTickets.ticket_id, Employees.city FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id",
      "babyLogic": "Cari tahu dari kota mana saja tiket gangguan sistem paling banyak dilaporkan!"
    }
  },
  {
    "id": "sql-87",
    "category": "9. Relasi Antar Tabel INNER JOIN",
    "title": "Soal 87: Tampilkan Tiket, Nama Karyawan, dan Besaran Gaji",
    "tableName": "SupportTickets",
    "questionEn": "Join SupportTickets and Employees to get ticket_id, name, and salary.",
    "babyHint": "🍼 Bahasa Bayi: SELECT SupportTickets.ticket_id, Employees.name, Employees.salary FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "SupportTickets.ticket_id",
      "Employees.name",
      "Employees.salary",
      "FROM",
      "SupportTickets",
      "INNER JOIN",
      "Employees",
      "ON",
      "SupportTickets.employee_id",
      "=",
      "Employees.id"
    ],
    "correctQuery": "SELECT SupportTickets.ticket_id, Employees.name, Employees.salary FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id",
    "expectedRows": [
      {
        "ticket_id": "TCK-101",
        "name": "Bunga Melati",
        "salary": 5500000
      },
      {
        "ticket_id": "TCK-102",
        "name": "Deni Pratama",
        "salary": 4800000
      },
      {
        "ticket_id": "TCK-103",
        "name": "Andi Saputra",
        "salary": 7500000
      },
      {
        "ticket_id": "TCK-104",
        "name": "Fani Rahma",
        "salary": 5100000
      },
      {
        "ticket_id": "TCK-105",
        "name": "Bunga Melati",
        "salary": 5500000
      },
      {
        "ticket_id": "TCK-106",
        "name": "Eko Prasetyo",
        "salary": 6500000
      },
      {
        "ticket_id": "TCK-107",
        "name": "Gilang Ramadhan",
        "salary": 6200000
      },
      {
        "ticket_id": "TCK-108",
        "name": "Indra Gunawan",
        "salary": 4500000
      },
      {
        "ticket_id": "TCK-109",
        "name": "Citra Dewi",
        "salary": 8200000
      },
      {
        "ticket_id": "TCK-110",
        "name": "Joko Susilo",
        "salary": 5300000
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Tampilkan Nama dan Status Kepegawaian",
      "problemEn": "Join ticket_id with employee status.",
      "correctQuery": "SELECT SupportTickets.ticket_id, Employees.status FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id",
      "babyLogic": "Menggabungkan atribut data personal HRD dengan catatan aktivitas IT Support!"
    }
  },
  {
    "id": "sql-88",
    "category": "9. Relasi Antar Tabel INNER JOIN",
    "title": "Soal 88: Tampilkan Tiket, Divisi Karyawan, dan Jenis Kendala",
    "tableName": "SupportTickets",
    "questionEn": "Join SupportTickets and Employees to get ticket_id, department, and issue_type.",
    "babyHint": "🍼 Bahasa Bayi: SELECT SupportTickets.ticket_id, Employees.department, SupportTickets.issue_type FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "SupportTickets.ticket_id",
      "Employees.department",
      "SupportTickets.issue_type",
      "FROM",
      "SupportTickets",
      "INNER JOIN",
      "Employees",
      "ON",
      "SupportTickets.employee_id",
      "=",
      "Employees.id"
    ],
    "correctQuery": "SELECT SupportTickets.ticket_id, Employees.department, SupportTickets.issue_type FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id",
    "expectedRows": [
      {
        "ticket_id": "TCK-101",
        "department": "Finance",
        "issue_type": "Network Outage"
      },
      {
        "ticket_id": "TCK-102",
        "department": "Production",
        "issue_type": "Barcode Scanner Error"
      },
      {
        "ticket_id": "TCK-103",
        "department": "IT",
        "issue_type": "Software License"
      },
      {
        "ticket_id": "TCK-104",
        "department": "Production",
        "issue_type": "Printer Jammed"
      },
      {
        "ticket_id": "TCK-105",
        "department": "Finance",
        "issue_type": "ERP Login Failed"
      },
      {
        "ticket_id": "TCK-106",
        "department": "IT",
        "issue_type": "VPN Disconnected"
      },
      {
        "ticket_id": "TCK-107",
        "department": "Finance",
        "issue_type": "Excel Macro Crash"
      },
      {
        "ticket_id": "TCK-108",
        "department": "Production",
        "issue_type": "Label Printer Offline"
      },
      {
        "ticket_id": "TCK-109",
        "department": "IT",
        "issue_type": "Database Slowdown"
      },
      {
        "ticket_id": "TCK-110",
        "department": "Logistics",
        "issue_type": "Barcode Sync Delay"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Tampilkan Divisi dan Prioritas Tiket",
      "problemEn": "Join department with ticket priority.",
      "correctQuery": "SELECT Employees.department, SupportTickets.priority FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id",
      "babyLogic": "Analisis apakah divisi Produksi atau IT yang lebih sering mengalami kendala teknis!"
    }
  },
  {
    "id": "sql-89",
    "category": "9. Relasi Antar Tabel INNER JOIN",
    "title": "Soal 89: Tampilkan Tiket, Nama Karyawan, dan ID Karyawan Pelapor",
    "tableName": "SupportTickets",
    "questionEn": "Join SupportTickets and Employees to get ticket_id, name, and employee_id.",
    "babyHint": "🍼 Bahasa Bayi: SELECT SupportTickets.ticket_id, Employees.name, SupportTickets.employee_id FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "SupportTickets.ticket_id",
      "Employees.name",
      "SupportTickets.employee_id",
      "FROM",
      "SupportTickets",
      "INNER JOIN",
      "Employees",
      "ON",
      "SupportTickets.employee_id",
      "=",
      "Employees.id"
    ],
    "correctQuery": "SELECT SupportTickets.ticket_id, Employees.name, SupportTickets.employee_id FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id",
    "expectedRows": [
      {
        "ticket_id": "TCK-101",
        "name": "Bunga Melati",
        "employee_id": 2
      },
      {
        "ticket_id": "TCK-102",
        "name": "Deni Pratama",
        "employee_id": 4
      },
      {
        "ticket_id": "TCK-103",
        "name": "Andi Saputra",
        "employee_id": 1
      },
      {
        "ticket_id": "TCK-104",
        "name": "Fani Rahma",
        "employee_id": 6
      },
      {
        "ticket_id": "TCK-105",
        "name": "Bunga Melati",
        "employee_id": 2
      },
      {
        "ticket_id": "TCK-106",
        "name": "Eko Prasetyo",
        "employee_id": 5
      },
      {
        "ticket_id": "TCK-107",
        "name": "Gilang Ramadhan",
        "employee_id": 7
      },
      {
        "ticket_id": "TCK-108",
        "name": "Indra Gunawan",
        "employee_id": 9
      },
      {
        "ticket_id": "TCK-109",
        "name": "Citra Dewi",
        "employee_id": 3
      },
      {
        "ticket_id": "TCK-110",
        "name": "Joko Susilo",
        "employee_id": 10
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Tampilkan ID Tiket dan ID Karyawan Asal",
      "problemEn": "Join ticket_id and employee_id.",
      "correctQuery": "SELECT SupportTickets.ticket_id, SupportTickets.employee_id FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id",
      "babyLogic": "Verifikasi integritas referensial: memastikan ID pelapor cocok dengan nama orangnya!"
    }
  },
  {
    "id": "sql-90",
    "category": "9. Relasi Antar Tabel INNER JOIN",
    "title": "Soal 90: Tampilkan Nama Karyawan, ID Tiket, dan Status Tiket",
    "tableName": "SupportTickets",
    "questionEn": "Join Employees and SupportTickets to retrieve name, ticket_id, and status.",
    "babyHint": "🍼 Bahasa Bayi: SELECT Employees.name, SupportTickets.ticket_id, SupportTickets.status FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "Employees.name",
      "SupportTickets.ticket_id",
      "SupportTickets.status",
      "FROM",
      "SupportTickets",
      "INNER JOIN",
      "Employees",
      "ON",
      "SupportTickets.employee_id",
      "=",
      "Employees.id"
    ],
    "correctQuery": "SELECT Employees.name, SupportTickets.ticket_id, SupportTickets.status FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id",
    "expectedRows": [
      {
        "name": "Bunga Melati",
        "ticket_id": "TCK-101",
        "status": "Resolved"
      },
      {
        "name": "Deni Pratama",
        "ticket_id": "TCK-102",
        "status": "In Progress"
      },
      {
        "name": "Andi Saputra",
        "ticket_id": "TCK-103",
        "status": "Resolved"
      },
      {
        "name": "Fani Rahma",
        "ticket_id": "TCK-104",
        "status": "Open"
      },
      {
        "name": "Bunga Melati",
        "ticket_id": "TCK-105",
        "status": "Resolved"
      },
      {
        "name": "Eko Prasetyo",
        "ticket_id": "TCK-106",
        "status": "Resolved"
      },
      {
        "name": "Gilang Ramadhan",
        "ticket_id": "TCK-107",
        "status": "Open"
      },
      {
        "name": "Indra Gunawan",
        "ticket_id": "TCK-108",
        "status": "In Progress"
      },
      {
        "name": "Citra Dewi",
        "ticket_id": "TCK-109",
        "status": "Resolved"
      },
      {
        "name": "Joko Susilo",
        "ticket_id": "TCK-110",
        "status": "Resolved"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Tampilkan Nama dan Status Tiket Selesai",
      "problemEn": "Join employee name with ticket status.",
      "correctQuery": "SELECT Employees.name, SupportTickets.status FROM SupportTickets INNER JOIN Employees ON SupportTickets.employee_id = Employees.id",
      "babyLogic": "Daftar rekapitulasi status tiket bagi setiap pegawai pelapor!"
    }
  },
  {
    "id": "sql-91",
    "category": "10. Logika CASE WHEN & Transformasi",
    "title": "Soal 91: Buat Kolom Kategori Gaji (CASE WHEN Tinggi / Standar)",
    "tableName": "Employees",
    "questionEn": "Retrieve name and grade_gaji: 'Tinggi' if salary > 7000000 else 'Standar'.",
    "babyHint": "🍼 Bahasa Bayi: SELECT name, CASE WHEN salary > 7000000 THEN 'Tinggi' ELSE 'Standar' END AS grade_gaji FROM Employees!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "name",
      "CASE WHEN",
      "salary",
      ">",
      "7000000",
      "THEN",
      "'Tinggi'",
      "ELSE",
      "'Standar'",
      "END",
      "AS",
      "grade_gaji",
      "FROM",
      "Employees"
    ],
    "correctQuery": "SELECT name, CASE WHEN salary > 7000000 THEN 'Tinggi' ELSE 'Standar' END AS grade_gaji FROM Employees",
    "expectedRows": [
      {
        "name": "Andi Saputra",
        "grade_gaji": "Tinggi"
      },
      {
        "name": "Bunga Melati",
        "grade_gaji": "Standar"
      },
      {
        "name": "Citra Dewi",
        "grade_gaji": "Tinggi"
      },
      {
        "name": "Deni Pratama",
        "grade_gaji": "Standar"
      },
      {
        "name": "Eko Prasetyo",
        "grade_gaji": "Standar"
      },
      {
        "name": "Fani Rahma",
        "grade_gaji": "Standar"
      },
      {
        "name": "Gilang Ramadhan",
        "grade_gaji": "Standar"
      },
      {
        "name": "Hany Wijaya",
        "grade_gaji": "Tinggi"
      },
      {
        "name": "Indra Gunawan",
        "grade_gaji": "Standar"
      },
      {
        "name": "Joko Susilo",
        "grade_gaji": "Standar"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Klasifikasi Gaji Sangat Tinggi (> 8jt)",
      "problemEn": "Grade as 'Executive' if salary > 8000000 else 'Staff'.",
      "correctQuery": "SELECT name, CASE WHEN salary > 8000000 THEN 'Executive' ELSE 'Staff' END AS tier FROM Employees",
      "babyLogic": "CASE WHEN adalah percabangan IF-ELSE versi SQL: jika gaji > 7jt beri label 'Tinggi', selain itu 'Standar'!"
    }
  },
  {
    "id": "sql-92",
    "category": "10. Logika CASE WHEN & Transformasi",
    "title": "Soal 92: Buat Label Peringatan Stok (Restock jika < 30, selain itu Aman)",
    "tableName": "Products",
    "questionEn": "Retrieve item_name and status_stok: 'Restock' if stock < 30 else 'Aman'.",
    "babyHint": "🍼 Bahasa Bayi: SELECT item_name, CASE WHEN stock < 30 THEN 'Restock' ELSE 'Aman' END AS status_stok FROM Products!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "item_name",
      "CASE WHEN",
      "stock",
      "<",
      "30",
      "THEN",
      "'Restock'",
      "ELSE",
      "'Aman'",
      "END",
      "AS",
      "status_stok",
      "FROM",
      "Products"
    ],
    "correctQuery": "SELECT item_name, CASE WHEN stock < 30 THEN 'Restock' ELSE 'Aman' END AS status_stok FROM Products",
    "expectedRows": [
      {
        "item_name": "Mechanical Keyboard RGB",
        "status_stok": "Aman"
      },
      {
        "item_name": "Wireless Optical Mouse",
        "status_stok": "Aman"
      },
      {
        "item_name": "Cat6 Ethernet Cable 10m",
        "status_stok": "Aman"
      },
      {
        "item_name": "Gigabit Switch 16-Port",
        "status_stok": "Restock"
      },
      {
        "item_name": "Thermal Barcode Printer",
        "status_stok": "Restock"
      },
      {
        "item_name": "UPS Battery Backup 1200VA",
        "status_stok": "Restock"
      },
      {
        "item_name": "USB-C Multiport Hub",
        "status_stok": "Aman"
      },
      {
        "item_name": "Fiber Optic Patch Cord",
        "status_stok": "Aman"
      },
      {
        "item_name": "Wireless Access Point",
        "status_stok": "Restock"
      },
      {
        "item_name": "Power Surge Protector",
        "status_stok": "Aman"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Label Stok Melimpah jika > 100",
      "problemEn": "Label as 'Banyak' if stock > 100 else 'Cukup'.",
      "correctQuery": "SELECT item_name, CASE WHEN stock > 100 THEN 'Banyak' ELSE 'Cukup' END AS info_stok FROM Products",
      "babyLogic": "Membuat indikator visual cerdas otomatis untuk bagian pergudangan!"
    }
  },
  {
    "id": "sql-93",
    "category": "10. Logika CASE WHEN & Transformasi",
    "title": "Soal 93: Buat Label Performa Server (Lambat jika > 300ms, selain itu Cepat)",
    "tableName": "ServerLogs",
    "questionEn": "Retrieve server_name and performa: 'Lambat' if response_time_ms > 300 else 'Cepat'.",
    "babyHint": "🍼 Bahasa Bayi: SELECT server_name, CASE WHEN response_time_ms > 300 THEN 'Lambat' ELSE 'Cepat' END AS performa FROM ServerLogs!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "server_name",
      "CASE WHEN",
      "response_time_ms",
      ">",
      "300",
      "THEN",
      "'Lambat'",
      "ELSE",
      "'Cepat'",
      "END",
      "AS",
      "performa",
      "FROM",
      "ServerLogs"
    ],
    "correctQuery": "SELECT server_name, CASE WHEN response_time_ms > 300 THEN 'Lambat' ELSE 'Cepat' END AS performa FROM ServerLogs",
    "expectedRows": [
      {
        "server_name": "Web-App-01",
        "performa": "Cepat"
      },
      {
        "server_name": "Database-Main",
        "performa": "Lambat"
      },
      {
        "server_name": "Auth-Server",
        "performa": "Cepat"
      },
      {
        "server_name": "Web-App-02",
        "performa": "Lambat"
      },
      {
        "server_name": "Backup-Node",
        "performa": "Cepat"
      },
      {
        "server_name": "Api-Gateway",
        "performa": "Cepat"
      },
      {
        "server_name": "Cache-Redis",
        "performa": "Cepat"
      },
      {
        "server_name": "Database-Replica",
        "performa": "Lambat"
      },
      {
        "server_name": "Queue-Worker",
        "performa": "Cepat"
      },
      {
        "server_name": "Payment-Service",
        "performa": "Lambat"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Label Performa Kritis jika > 400ms",
      "problemEn": "Label as 'Kritis' if response_time_ms > 400 else 'Normal'.",
      "correctQuery": "SELECT server_name, CASE WHEN response_time_ms > 400 THEN 'Kritis' ELSE 'Normal' END AS latency_status FROM ServerLogs",
      "babyLogic": "Kategorisasi otomatis status kecepatan respon jaringan komputer!"
    }
  },
  {
    "id": "sql-94",
    "category": "10. Logika CASE WHEN & Transformasi",
    "title": "Soal 94: Buat Status Ekspor Sepatu ('Siap Kirim' jika Passed, 'Perbaiki' jika Rejected)",
    "tableName": "ShoeProduction",
    "questionEn": "Retrieve model and status_ekspor: 'Siap Kirim' if status_qc = 'Passed' else 'Perbaiki'.",
    "babyHint": "🍼 Bahasa Bayi: SELECT model, CASE WHEN status_qc = 'Passed' THEN 'Siap Kirim' ELSE 'Perbaiki' END AS status_ekspor FROM ShoeProduction!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "model",
      "CASE WHEN",
      "status_qc",
      "=",
      "'Passed'",
      "THEN",
      "'Siap Kirim'",
      "ELSE",
      "'Perbaiki'",
      "END",
      "AS",
      "status_ekspor",
      "FROM",
      "ShoeProduction"
    ],
    "correctQuery": "SELECT model, CASE WHEN status_qc = 'Passed' THEN 'Siap Kirim' ELSE 'Perbaiki' END AS status_ekspor FROM ShoeProduction",
    "expectedRows": [
      {
        "model": "Sneakers Air",
        "status_ekspor": "Siap Kirim"
      },
      {
        "model": "Running Pro",
        "status_ekspor": "Siap Kirim"
      },
      {
        "model": "Slip-On Casual",
        "status_ekspor": "Perbaiki"
      },
      {
        "model": "Sneakers Air",
        "status_ekspor": "Siap Kirim"
      },
      {
        "model": "Sport Trail",
        "status_ekspor": "Perbaiki"
      },
      {
        "model": "Running Pro",
        "status_ekspor": "Siap Kirim"
      },
      {
        "model": "Classic Leather",
        "status_ekspor": "Siap Kirim"
      },
      {
        "model": "Slip-On Casual",
        "status_ekspor": "Siap Kirim"
      },
      {
        "model": "Sport Trail",
        "status_ekspor": "Perbaiki"
      },
      {
        "model": "Sneakers Elite",
        "status_ekspor": "Siap Kirim"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Label Kelayakan Mesin Produksi",
      "problemEn": "Label as 'Mesin Utama' if machine_id = 'M-1' else 'Mesin Pendukung'.",
      "correctQuery": "SELECT model, CASE WHEN machine_id = 'M-1' THEN 'Mesin Utama' ELSE 'Mesin Pendukung' END AS jenis_mesin FROM ShoeProduction",
      "babyLogic": "Mengubah kode teknis QC menjadi instruksi operasional departemen pengiriman ekspor!"
    }
  },
  {
    "id": "sql-95",
    "category": "10. Logika CASE WHEN & Transformasi",
    "title": "Soal 95: Buat Level Urgensi Tiket ('Perhatian Khusus' jika Urgent, selain itu 'Antrean Biasa')",
    "tableName": "SupportTickets",
    "questionEn": "Retrieve ticket_id and level_urgensi: 'Perhatian Khusus' if priority = 'Urgent' else 'Antrean Biasa'.",
    "babyHint": "🍼 Bahasa Bayi: SELECT ticket_id, CASE WHEN priority = 'Urgent' THEN 'Perhatian Khusus' ELSE 'Antrean Biasa' END AS level_urgensi FROM SupportTickets!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "ticket_id",
      "CASE WHEN",
      "priority",
      "=",
      "'Urgent'",
      "THEN",
      "'Perhatian Khusus'",
      "ELSE",
      "'Antrean Biasa'",
      "END",
      "AS",
      "level_urgensi",
      "FROM",
      "SupportTickets"
    ],
    "correctQuery": "SELECT ticket_id, CASE WHEN priority = 'Urgent' THEN 'Perhatian Khusus' ELSE 'Antrean Biasa' END AS level_urgensi FROM SupportTickets",
    "expectedRows": [
      {
        "ticket_id": "TCK-101",
        "level_urgensi": "Antrean Biasa"
      },
      {
        "ticket_id": "TCK-102",
        "level_urgensi": "Perhatian Khusus"
      },
      {
        "ticket_id": "TCK-103",
        "level_urgensi": "Antrean Biasa"
      },
      {
        "ticket_id": "TCK-104",
        "level_urgensi": "Antrean Biasa"
      },
      {
        "ticket_id": "TCK-105",
        "level_urgensi": "Perhatian Khusus"
      },
      {
        "ticket_id": "TCK-106",
        "level_urgensi": "Antrean Biasa"
      },
      {
        "ticket_id": "TCK-107",
        "level_urgensi": "Antrean Biasa"
      },
      {
        "ticket_id": "TCK-108",
        "level_urgensi": "Perhatian Khusus"
      },
      {
        "ticket_id": "TCK-109",
        "level_urgensi": "Antrean Biasa"
      },
      {
        "ticket_id": "TCK-110",
        "level_urgensi": "Antrean Biasa"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Label Tiket Selesai ('Ditutup' jika Resolved, selain itu 'Aktif')",
      "problemEn": "Label as 'Ditutup' if status = 'Resolved' else 'Aktif'.",
      "correctQuery": "SELECT ticket_id, CASE WHEN status = 'Resolved' THEN 'Ditutup' ELSE 'Aktif' END AS status_tiket FROM SupportTickets",
      "babyLogic": "Membuat antrean prioritas otomatis bagi teknisi IT helpdesk!"
    }
  },
  {
    "id": "sql-96",
    "category": "10. Logika CASE WHEN & Transformasi",
    "title": "Soal 96: Hitung Estimasi Gaji Karyawan Setahun (salary * 12)",
    "tableName": "Employees",
    "questionEn": "Retrieve name, salary, and calculate yearly salary as 'gaji_setahun' (salary * 12).",
    "babyHint": "🍼 Bahasa Bayi: SELECT name, salary, salary * 12 AS gaji_setahun FROM Employees!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "name",
      "salary",
      "salary * 12",
      "AS",
      "gaji_setahun",
      "FROM",
      "Employees"
    ],
    "correctQuery": "SELECT name, salary, salary * 12 AS gaji_setahun FROM Employees",
    "expectedRows": [
      {
        "name": "Andi Saputra",
        "salary": 7500000,
        "gaji_setahun": 90000000
      },
      {
        "name": "Bunga Melati",
        "salary": 5500000,
        "gaji_setahun": 66000000
      },
      {
        "name": "Citra Dewi",
        "salary": 8200000,
        "gaji_setahun": 98400000
      },
      {
        "name": "Deni Pratama",
        "salary": 4800000,
        "gaji_setahun": 57600000
      },
      {
        "name": "Eko Prasetyo",
        "salary": 6500000,
        "gaji_setahun": 78000000
      },
      {
        "name": "Fani Rahma",
        "salary": 5100000,
        "gaji_setahun": 61200000
      },
      {
        "name": "Gilang Ramadhan",
        "salary": 6200000,
        "gaji_setahun": 74400000
      },
      {
        "name": "Hany Wijaya",
        "salary": 9100000,
        "gaji_setahun": 109200000
      },
      {
        "name": "Indra Gunawan",
        "salary": 4500000,
        "gaji_setahun": 54000000
      },
      {
        "name": "Joko Susilo",
        "salary": 5300000,
        "gaji_setahun": 63600000
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Hitung Bonus Bulanan (salary * 0.1)",
      "problemEn": "Calculate 10% bonus as bonus_bulanan.",
      "correctQuery": "SELECT name, salary, salary * 0.1 AS bonus_bulanan FROM Employees",
      "babyLogic": "Kolom kalkulasi matematika aritmetika langsung di dalam perintah SELECT!"
    }
  },
  {
    "id": "sql-97",
    "category": "10. Logika CASE WHEN & Transformasi",
    "title": "Soal 97: Hitung Total Nilai Aset Produk (stock * unit_price)",
    "tableName": "Products",
    "questionEn": "Retrieve item_name, stock, unit_price, and calculate total value as 'total_nilai'.",
    "babyHint": "🍼 Bahasa Bayi: SELECT item_name, stock, unit_price, stock * unit_price AS total_nilai FROM Products!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "item_name",
      "stock",
      "unit_price",
      "stock * unit_price",
      "AS",
      "total_nilai",
      "FROM",
      "Products"
    ],
    "correctQuery": "SELECT item_name, stock, unit_price, stock * unit_price AS total_nilai FROM Products",
    "expectedRows": [
      {
        "item_name": "Mechanical Keyboard RGB",
        "stock": 45,
        "unit_price": 650000,
        "total_nilai": 29250000
      },
      {
        "item_name": "Wireless Optical Mouse",
        "stock": 120,
        "unit_price": 180000,
        "total_nilai": 21600000
      },
      {
        "item_name": "Cat6 Ethernet Cable 10m",
        "stock": 85,
        "unit_price": 75000,
        "total_nilai": 6375000
      },
      {
        "item_name": "Gigabit Switch 16-Port",
        "stock": 14,
        "unit_price": 1250000,
        "total_nilai": 17500000
      },
      {
        "item_name": "Thermal Barcode Printer",
        "stock": 8,
        "unit_price": 2100000,
        "total_nilai": 16800000
      },
      {
        "item_name": "UPS Battery Backup 1200VA",
        "stock": 22,
        "unit_price": 1850000,
        "total_nilai": 40700000
      },
      {
        "item_name": "USB-C Multiport Hub",
        "stock": 60,
        "unit_price": 320000,
        "total_nilai": 19200000
      },
      {
        "item_name": "Fiber Optic Patch Cord",
        "stock": 40,
        "unit_price": 110000,
        "total_nilai": 4400000
      },
      {
        "item_name": "Wireless Access Point",
        "stock": 18,
        "unit_price": 950000,
        "total_nilai": 17100000
      },
      {
        "item_name": "Power Surge Protector",
        "stock": 35,
        "unit_price": 250000,
        "total_nilai": 8750000
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Hitung Nilai Diskon 10% (unit_price * 0.9)",
      "problemEn": "Calculate discounted price as harga_diskon.",
      "correctQuery": "SELECT item_name, unit_price, unit_price * 0.9 AS harga_diskon FROM Products",
      "babyLogic": "Mengalikan jumlah unit barang dengan harga satuan untuk valuasi aset gudang!"
    }
  },
  {
    "id": "sql-98",
    "category": "10. Logika CASE WHEN & Transformasi",
    "title": "Soal 98: Hitung Jumlah Satuan Sepatu Kiri & Kanan (pairs * 2)",
    "tableName": "ShoeProduction",
    "questionEn": "Retrieve code, model, pairs, and total individual shoes as 'jumlah_sepatu_kiri_kanan'.",
    "babyHint": "🍼 Bahasa Bayi: SELECT code, model, pairs, pairs * 2 AS jumlah_sepatu_kiri_kanan FROM ShoeProduction!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "code",
      "model",
      "pairs",
      "pairs * 2",
      "AS",
      "jumlah_sepatu_kiri_kanan",
      "FROM",
      "ShoeProduction"
    ],
    "correctQuery": "SELECT code, model, pairs, pairs * 2 AS jumlah_sepatu_kiri_kanan FROM ShoeProduction",
    "expectedRows": [
      {
        "code": "SH-001",
        "model": "Sneakers Air",
        "pairs": 1200,
        "jumlah_sepatu_kiri_kanan": 2400
      },
      {
        "code": "SH-002",
        "model": "Running Pro",
        "pairs": 850,
        "jumlah_sepatu_kiri_kanan": 1700
      },
      {
        "code": "SH-003",
        "model": "Slip-On Casual",
        "pairs": 400,
        "jumlah_sepatu_kiri_kanan": 800
      },
      {
        "code": "SH-004",
        "model": "Sneakers Air",
        "pairs": 1500,
        "jumlah_sepatu_kiri_kanan": 3000
      },
      {
        "code": "SH-005",
        "model": "Sport Trail",
        "pairs": 300,
        "jumlah_sepatu_kiri_kanan": 600
      },
      {
        "code": "SH-006",
        "model": "Running Pro",
        "pairs": 1100,
        "jumlah_sepatu_kiri_kanan": 2200
      },
      {
        "code": "SH-007",
        "model": "Classic Leather",
        "pairs": 650,
        "jumlah_sepatu_kiri_kanan": 1300
      },
      {
        "code": "SH-008",
        "model": "Slip-On Casual",
        "pairs": 500,
        "jumlah_sepatu_kiri_kanan": 1000
      },
      {
        "code": "SH-009",
        "model": "Sport Trail",
        "pairs": 250,
        "jumlah_sepatu_kiri_kanan": 500
      },
      {
        "code": "SH-010",
        "model": "Sneakers Elite",
        "pairs": 900,
        "jumlah_sepatu_kiri_kanan": 1800
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Hitung Jumlah Lusin Sepatu (pairs / 12)",
      "problemEn": "Calculate dozens: pairs / 12 as lusin.",
      "correctQuery": "SELECT code, model, pairs, pairs / 12 AS lusin FROM ShoeProduction",
      "babyLogic": "1 pasang sepatu = 2 buah sepatu (kiri dan kanan), jadi kalikan dengan 2!"
    }
  },
  {
    "id": "sql-99",
    "category": "10. Logika CASE WHEN & Transformasi",
    "title": "Soal 99: Ubah Nama Divisi Menjadi Huruf Kapital Semua (UPPER)",
    "tableName": "Employees",
    "questionEn": "Retrieve name and department in uppercase as 'dept_kapital'.",
    "babyHint": "🍼 Bahasa Bayi: SELECT name, UPPER(department) AS dept_kapital FROM Employees!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "name",
      "UPPER(department)",
      "AS",
      "dept_kapital",
      "FROM",
      "Employees"
    ],
    "correctQuery": "SELECT name, UPPER(department) AS dept_kapital FROM Employees",
    "expectedRows": [
      {
        "name": "Andi Saputra",
        "dept_kapital": "IT"
      },
      {
        "name": "Bunga Melati",
        "dept_kapital": "FINANCE"
      },
      {
        "name": "Citra Dewi",
        "dept_kapital": "IT"
      },
      {
        "name": "Deni Pratama",
        "dept_kapital": "PRODUCTION"
      },
      {
        "name": "Eko Prasetyo",
        "dept_kapital": "IT"
      },
      {
        "name": "Fani Rahma",
        "dept_kapital": "PRODUCTION"
      },
      {
        "name": "Gilang Ramadhan",
        "dept_kapital": "FINANCE"
      },
      {
        "name": "Hany Wijaya",
        "dept_kapital": "IT"
      },
      {
        "name": "Indra Gunawan",
        "dept_kapital": "PRODUCTION"
      },
      {
        "name": "Joko Susilo",
        "dept_kapital": "LOGISTICS"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Ubah Nama Karyawan Menjadi Huruf Kapital",
      "problemEn": "Retrieve UPPER(name) as nama_kapital.",
      "correctQuery": "SELECT UPPER(name) AS nama_kapital FROM Employees",
      "babyLogic": "Fungsi string UPPER mengubah teks menjadi huruf besar semua secara seragam!"
    }
  },
  {
    "id": "sql-100",
    "category": "10. Logika CASE WHEN & Transformasi",
    "title": "Soal 100: Ubah Kategori Menjadi Huruf Kecil Semua (LOWER)",
    "tableName": "Products",
    "questionEn": "Retrieve item_name and category in lowercase as 'kategori_kecil'.",
    "babyHint": "🍼 Bahasa Bayi: SELECT item_name, LOWER(category) AS kategori_kecil FROM Products!",
    "starterCode": "SELECT ",
    "suggestedTokens": [
      "SELECT",
      "item_name",
      "LOWER(category)",
      "AS",
      "kategori_kecil",
      "FROM",
      "Products"
    ],
    "correctQuery": "SELECT item_name, LOWER(category) AS kategori_kecil FROM Products",
    "expectedRows": [
      {
        "item_name": "Mechanical Keyboard RGB",
        "kategori_kecil": "hardware"
      },
      {
        "item_name": "Wireless Optical Mouse",
        "kategori_kecil": "hardware"
      },
      {
        "item_name": "Cat6 Ethernet Cable 10m",
        "kategori_kecil": "network"
      },
      {
        "item_name": "Gigabit Switch 16-Port",
        "kategori_kecil": "network"
      },
      {
        "item_name": "Thermal Barcode Printer",
        "kategori_kecil": "hardware"
      },
      {
        "item_name": "UPS Battery Backup 1200VA",
        "kategori_kecil": "power"
      },
      {
        "item_name": "USB-C Multiport Hub",
        "kategori_kecil": "hardware"
      },
      {
        "item_name": "Fiber Optic Patch Cord",
        "kategori_kecil": "network"
      },
      {
        "item_name": "Wireless Access Point",
        "kategori_kecil": "network"
      },
      {
        "item_name": "Power Surge Protector",
        "kategori_kecil": "power"
      }
    ],
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Ubah Nama Produk Menjadi Huruf Kecil",
      "problemEn": "Retrieve LOWER(item_name) as nama_kecil.",
      "correctQuery": "SELECT LOWER(item_name) AS nama_kecil FROM Products",
      "babyLogic": "Fungsi string LOWER menormalisasi teks ke format huruf kecil!"
    }
  }
];

// 100 Tantangan Tebak Output Koding (10 Kategori Bahasa & Konsep)
const outputPredictionQuestions = [
  {
    "id": "out-1",
    "lang": "JavaScript",
    "badge": "Looping",
    "questionEn": "What will be printed to the console after executing this loop?",
    "code": "let count = 0;\nfor (let i = 0; i < 4; i++) {\n  count += i;\n}\nconsole.log(count);",
    "options": [
      {
        "text": "6",
        "correct": true
      },
      {
        "text": "10",
        "correct": false
      },
      {
        "text": "4",
        "correct": false
      },
      {
        "text": "3",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Loop berjalan untuk i = 0, 1, 2, 3 (berhenti saat i = 4). Nilai count bertambah: 0 + 0 + 1 + 2 + 3 = 6!",
    "workedExample": {
      "sampleCode": "let sum = 0;\nfor (let i = 0; i < 3; i++) sum += i;\nconsole.log(sum);",
      "sampleAnswer": "3",
      "sampleLogic": "Loop berjalan 0, 1, 2. Jumlah total 0 + 1 + 2 = 3!"
    }
  },
  {
    "id": "out-2",
    "lang": "JavaScript",
    "badge": "Looping Break",
    "questionEn": "What will be printed when the break statement triggers?",
    "code": "let sum = 0;\nfor (let i = 1; i <= 5; i++) {\n  if (i === 3) break;\n  sum += i;\n}\nconsole.log(sum);",
    "options": [
      {
        "text": "3",
        "correct": true
      },
      {
        "text": "6",
        "correct": false
      },
      {
        "text": "15",
        "correct": false
      },
      {
        "text": "1",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Perintah 'break' menghentikan loop seketika. Saat i = 1 (sum = 1), saat i = 2 (sum = 3), saat i = 3 loop langsung putus! Hasil 3.",
    "workedExample": {
      "sampleCode": "let t = 0;\nfor(let i=1; i<=4; i++) { if(i===2) break; t+=i; }\nconsole.log(t);",
      "sampleAnswer": "1",
      "sampleLogic": "Saat i=2 langsung break, t tetap 1!"
    }
  },
  {
    "id": "out-3",
    "lang": "JavaScript",
    "badge": "Looping Continue",
    "questionEn": "What will be printed when continue statement skips an iteration?",
    "code": "let total = 0;\nfor (let i = 1; i <= 4; i++) {\n  if (i === 2) continue;\n  total += i;\n}\nconsole.log(total);",
    "options": [
      {
        "text": "8",
        "correct": true
      },
      {
        "text": "10",
        "correct": false
      },
      {
        "text": "6",
        "correct": false
      },
      {
        "text": "2",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Perintah 'continue' melompati putaran saat i = 2 tanpa menambahkan ke total. Jadi yang dijumlahkan hanya: 1 + 3 + 4 = 8!",
    "workedExample": {
      "sampleCode": "let s = 0;\nfor(let i=1; i<=3; i++) { if(i===1) continue; s+=i; }\nconsole.log(s);",
      "sampleAnswer": "5",
      "sampleLogic": "i=1 dilewati, 2 + 3 = 5!"
    }
  },
  {
    "id": "out-4",
    "lang": "JavaScript",
    "badge": "While Loop",
    "questionEn": "What is the final value of x in this while loop?",
    "code": "let x = 1;\nwhile (x < 8) {\n  x *= 2;\n}\nconsole.log(x);",
    "options": [
      {
        "text": "8",
        "correct": true
      },
      {
        "text": "4",
        "correct": false
      },
      {
        "text": "16",
        "correct": false
      },
      {
        "text": "7",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: x mulai 1 -> x=2 -> x=4 -> x=8. Karena 8 tidak lebih kecil dari 8 (8 < 8 bernilai false), loop berhenti dan x = 8!",
    "workedExample": {
      "sampleCode": "let a = 1; while(a < 4) a *= 2; console.log(a);",
      "sampleAnswer": "4",
      "sampleLogic": "1 jadi 2, lalu 2 jadi 4 (berhenti)!"
    }
  },
  {
    "id": "out-5",
    "lang": "JavaScript",
    "badge": "Do-While Loop",
    "questionEn": "What will be printed by this do-while loop?",
    "code": "let num = 10;\ndo {\n  num++;\n} while (num < 10);\nconsole.log(num);",
    "options": [
      {
        "text": "11",
        "correct": true
      },
      {
        "text": "10",
        "correct": false
      },
      {
        "text": "9",
        "correct": false
      },
      {
        "text": "Infinite Loop",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Do-while selalu menjalankan badan loop minimal 1 kali SEBELUM memeriksa syarat! num dinaikkan jadi 11, lalu diperiksa (11 < 10 false) sehingga berhenti!",
    "workedExample": {
      "sampleCode": "let v = 5; do { v += 2; } while(v < 5); console.log(v);",
      "sampleAnswer": "7",
      "sampleLogic": "5 + 2 = 7 dieksekusi duluan, baru dicek!"
    }
  },
  {
    "id": "out-6",
    "lang": "JavaScript",
    "badge": "Nested Loops",
    "questionEn": "What is the result of multiplying iterations in nested loops?",
    "code": "let count = 0;\nfor (let i = 0; i < 3; i++) {\n  for (let j = 0; j < 2; j++) {\n    count++;\n  }\n}\nconsole.log(count);",
    "options": [
      {
        "text": "6",
        "correct": true
      },
      {
        "text": "5",
        "correct": false
      },
      {
        "text": "9",
        "correct": false
      },
      {
        "text": "4",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Loop luar 3 kali, loop dalam 2 kali di tiap putaran luar. Total: 3 × 2 = 6 kali!",
    "workedExample": {
      "sampleCode": "let c = 0;\nfor(let i=0; i<2; i++) for(let j=0; j<2; j++) c++;\nconsole.log(c);",
      "sampleAnswer": "4",
      "sampleLogic": "2 × 2 = 4 langkah!"
    }
  },
  {
    "id": "out-7",
    "lang": "JavaScript",
    "badge": "For..of String",
    "questionEn": "What will be printed when iterating over a string with for..of?",
    "code": "let str = 'KODI';\nlet res = '';\nfor (let ch of str) {\n  res = ch + res;\n}\nconsole.log(res);",
    "options": [
      {
        "text": "IDOK",
        "correct": true
      },
      {
        "text": "KODI",
        "correct": false
      },
      {
        "text": "IKOD",
        "correct": false
      },
      {
        "text": "DOKI",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Huruf baru ditaruh di depan string lama (res = ch + res). 'K' -> 'OK' -> 'DOK' -> 'IDOK'. Kata dibalik!",
    "workedExample": {
      "sampleCode": "let s = 'AB'; let r = ''; for(let c of s) r = c + r; console.log(r);",
      "sampleAnswer": "BA",
      "sampleLogic": "Huruf baru diselipkan di depan = 'BA'!"
    }
  },
  {
    "id": "out-8",
    "lang": "JavaScript",
    "badge": "Loop Step Increment",
    "questionEn": "What is the sum when loop counter increments by 2?",
    "code": "let sum = 0;\nfor (let i = 0; i <= 6; i += 2) {\n  sum += i;\n}\nconsole.log(sum);",
    "options": [
      {
        "text": "12",
        "correct": true
      },
      {
        "text": "6",
        "correct": false
      },
      {
        "text": "14",
        "correct": false
      },
      {
        "text": "10",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: i meloncat genap: 0, 2, 4, 6. Total penjumlahan: 0 + 2 + 4 + 6 = 12!",
    "workedExample": {
      "sampleCode": "let s = 0; for(let i=0; i<=4; i+=2) s+=i; console.log(s);",
      "sampleAnswer": "6",
      "sampleLogic": "0 + 2 + 4 = 6!"
    }
  },
  {
    "id": "out-9",
    "lang": "JavaScript",
    "badge": "Decrement Loop",
    "questionEn": "What will be printed when decrementing loop counter?",
    "code": "let res = 1;\nfor (let i = 3; i > 0; i--) {\n  res *= i;\n}\nconsole.log(res);",
    "options": [
      {
        "text": "6",
        "correct": true
      },
      {
        "text": "3",
        "correct": false
      },
      {
        "text": "1",
        "correct": false
      },
      {
        "text": "0",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Ini faktorial 3! (3 × 2 × 1). res = 1 × 3 = 3 -> 3 × 2 = 6 -> 6 × 1 = 6!",
    "workedExample": {
      "sampleCode": "let r = 1; for(let i=4; i>2; i--) r*=i; console.log(r);",
      "sampleAnswer": "12",
      "sampleLogic": "4 × 3 = 12!"
    }
  },
  {
    "id": "out-10",
    "lang": "JavaScript",
    "badge": "Loop with Modulo",
    "questionEn": "What is the count of even numbers filtered by modulo?",
    "code": "let evens = 0;\nfor (let i = 1; i <= 6; i++) {\n  if (i % 2 === 0) evens++;\n}\nconsole.log(evens);",
    "options": [
      {
        "text": "3",
        "correct": true
      },
      {
        "text": "6",
        "correct": false
      },
      {
        "text": "2",
        "correct": false
      },
      {
        "text": "4",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Dari 1 sampai 6, angka genap yang habis dibagi 2 adalah 2, 4, 6 (ada 3 buah)!",
    "workedExample": {
      "sampleCode": "let c = 0; for(let i=1; i<=4; i++) if(i%2===0) c++; console.log(c);",
      "sampleAnswer": "2",
      "sampleLogic": "Ada 2 genap (2 dan 4)!"
    }
  },
  {
    "id": "out-11",
    "lang": "JavaScript",
    "badge": "Array.map",
    "questionEn": "What is the result of transforming array elements with map?",
    "code": "const nums = [1, 2, 3];\nconst doubled = nums.map(n => n * 2);\nconsole.log(doubled.join(','));",
    "options": [
      {
        "text": "2,4,6",
        "correct": true
      },
      {
        "text": "1,2,3",
        "correct": false
      },
      {
        "text": "[2,4,6]",
        "correct": false
      },
      {
        "text": "6",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: .map() mengalikan setiap angka dengan 2: 1->2, 2->4, 3->6. Lalu .join(',') menyambungnya: 2,4,6!",
    "workedExample": {
      "sampleCode": "const a = [2, 3]; console.log(a.map(x => x + 1).join(','));",
      "sampleAnswer": "3,4",
      "sampleLogic": "Tiap elemen ditambah 1 = 3,4!"
    }
  },
  {
    "id": "out-12",
    "lang": "JavaScript",
    "badge": "Array.filter",
    "questionEn": "What will be printed when filtering numbers greater than 10?",
    "code": "const items = [5, 12, 8, 20];\nconst filtered = items.filter(x => x > 10);\nconsole.log(filtered.length);",
    "options": [
      {
        "text": "2",
        "correct": true
      },
      {
        "text": "4",
        "correct": false
      },
      {
        "text": "3",
        "correct": false
      },
      {
        "text": "1",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: .filter() menyaring yang > 10, yaitu 12 dan 20 (ada 2 elemen). Panjangnya 2!",
    "workedExample": {
      "sampleCode": "const vals = [1, 15, 25]; console.log(vals.filter(v => v >= 15).length);",
      "sampleAnswer": "2",
      "sampleLogic": "15 dan 25 lolos (panjang 2)!"
    }
  },
  {
    "id": "out-13",
    "lang": "JavaScript",
    "badge": "Array.reduce",
    "questionEn": "What is the final accumulator value computed by reduce?",
    "code": "const nums = [1, 2, 3, 4];\nconst sum = nums.reduce((acc, curr) => acc + curr, 0);\nconsole.log(sum);",
    "options": [
      {
        "text": "10",
        "correct": true
      },
      {
        "text": "24",
        "correct": false
      },
      {
        "text": "4",
        "correct": false
      },
      {
        "text": "0",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: .reduce() menjumlahkan seluruh isi: 0 + 1 + 2 + 3 + 4 = 10!",
    "workedExample": {
      "sampleCode": "const n = [2, 3]; console.log(n.reduce((a, b) => a + b, 5));",
      "sampleAnswer": "10",
      "sampleLogic": "Modal 5 + 2 + 3 = 10!"
    }
  },
  {
    "id": "out-14",
    "lang": "JavaScript",
    "badge": "Array.find",
    "questionEn": "What will be returned by Array.find?",
    "code": "const scores = [40, 75, 82, 90];\nconst match = scores.find(s => s > 70);\nconsole.log(match);",
    "options": [
      {
        "text": "75",
        "correct": true
      },
      {
        "text": "82",
        "correct": false
      },
      {
        "text": "90",
        "correct": false
      },
      {
        "text": "[75, 82, 90]",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: .find() mengambil elemen PERTAMA yang lolos syarat. Elemen pertama > 70 adalah 75!",
    "workedExample": {
      "sampleCode": "const arr = [10, 25, 30]; console.log(arr.find(x => x > 20));",
      "sampleAnswer": "25",
      "sampleLogic": "Elemen pertama > 20 adalah 25!"
    }
  },
  {
    "id": "out-15",
    "lang": "JavaScript",
    "badge": "Array.slice",
    "questionEn": "What does array.slice(1, 3) return without mutating the original?",
    "code": "const colors = ['red', 'green', 'blue', 'yellow'];\nconst sliced = colors.slice(1, 3);\nconsole.log(sliced.join('-'));",
    "options": [
      {
        "text": "green-blue",
        "correct": true
      },
      {
        "text": "red-green",
        "correct": false
      },
      {
        "text": "green-blue-yellow",
        "correct": false
      },
      {
        "text": "blue-yellow",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: slice(1, 3) memotong dari indeks 1 ('green') sampai sebelum 3 (indeks 1 dan 2: green dan blue). Hasil: green-blue!",
    "workedExample": {
      "sampleCode": "const x = ['A', 'B', 'C']; console.log(x.slice(0, 2).join(''));",
      "sampleAnswer": "AB",
      "sampleLogic": "Indeks 0 dan 1 diambil = AB!"
    }
  },
  {
    "id": "out-16",
    "lang": "JavaScript",
    "badge": "Array.includes",
    "questionEn": "What does Array.includes return when an item exists?",
    "code": "const fruits = ['apple', 'banana', 'orange'];\nconsole.log(fruits.includes('banana'));",
    "options": [
      {
        "text": "true",
        "correct": true
      },
      {
        "text": "false",
        "correct": false
      },
      {
        "text": "1",
        "correct": false
      },
      {
        "text": "undefined",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: .includes() mengecek keberadaan elemen. Karena 'banana' ada, hasilnya true!",
    "workedExample": {
      "sampleCode": "const list = ['cat', 'dog']; console.log(list.includes('fish'));",
      "sampleAnswer": "false",
      "sampleLogic": "Karena fish tidak ada = false!"
    }
  },
  {
    "id": "out-17",
    "lang": "JavaScript",
    "badge": "Array.concat",
    "questionEn": "What is the length of concatenated arrays?",
    "code": "const a = [1, 2];\nconst b = [3, 4, 5];\nconst c = a.concat(b);\nconsole.log(c.length);",
    "options": [
      {
        "text": "5",
        "correct": true
      },
      {
        "text": "2",
        "correct": false
      },
      {
        "text": "3",
        "correct": false
      },
      {
        "text": "6",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Menggabungkan 2 elemen + 3 elemen = 5 elemen total!",
    "workedExample": {
      "sampleCode": "console.log([1].concat([2, 3]).length);",
      "sampleAnswer": "3",
      "sampleLogic": "1 + 2 = 3 elemen!"
    }
  },
  {
    "id": "out-18",
    "lang": "JavaScript",
    "badge": "Array.every",
    "questionEn": "What does Array.every return when all items satisfy condition?",
    "code": "const nums = [2, 4, 6, 8];\nconst allEven = nums.every(n => n % 2 === 0);\nconsole.log(allEven);",
    "options": [
      {
        "text": "true",
        "correct": true
      },
      {
        "text": "false",
        "correct": false
      },
      {
        "text": "undefined",
        "correct": false
      },
      {
        "text": "4",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: .every() memeriksa SEMUA elemen. Karena 2, 4, 6, 8 semuanya genap, hasilnya true!",
    "workedExample": {
      "sampleCode": "console.log([2, 3, 4].every(x => x % 2 === 0));",
      "sampleAnswer": "false",
      "sampleLogic": "Ada angka 3 ganjil, maka false!"
    }
  },
  {
    "id": "out-19",
    "lang": "JavaScript",
    "badge": "Array.some",
    "questionEn": "What does Array.some return if at least one item satisfies condition?",
    "code": "const nums = [1, 3, 5, 8];\nconst hasEven = nums.some(n => n % 2 === 0);\nconsole.log(hasEven);",
    "options": [
      {
        "text": "true",
        "correct": true
      },
      {
        "text": "false",
        "correct": false
      },
      {
        "text": "8",
        "correct": false
      },
      {
        "text": "1",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: .some() memeriksa minimal 1 cocok. Karena ada angka 8 (genap), hasilnya true!",
    "workedExample": {
      "sampleCode": "console.log([1, 3, 5].some(x => x % 2 === 0));",
      "sampleAnswer": "false",
      "sampleLogic": "Tidak ada genap = false!"
    }
  },
  {
    "id": "out-20",
    "lang": "JavaScript",
    "badge": "Array.reverse",
    "questionEn": "What happens when calling array.reverse()?",
    "code": "const arr = [1, 2, 3];\narr.reverse();\nconsole.log(arr[0]);",
    "options": [
      {
        "text": "3",
        "correct": true
      },
      {
        "text": "1",
        "correct": false
      },
      {
        "text": "2",
        "correct": false
      },
      {
        "text": "undefined",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: .reverse() membalik array menjadi [3, 2, 1]. Indeks 0 sekarang 3!",
    "workedExample": {
      "sampleCode": "const x = ['A', 'B']; x.reverse(); console.log(x[0]);",
      "sampleAnswer": "B",
      "sampleLogic": "Array dibalik, pertama jadi 'B'!"
    }
  },
  {
    "id": "out-21",
    "lang": "JavaScript",
    "badge": "String Coercion +",
    "questionEn": "What will be printed when adding string '5' and number 3?",
    "code": "const res = '5' + 3;\nconsole.log(res);",
    "options": [
      {
        "text": "53",
        "correct": true
      },
      {
        "text": "8",
        "correct": false
      },
      {
        "text": "NaN",
        "correct": false
      },
      {
        "text": "TypeError",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Operator + pada string bertindak sebagai penyambung kata: '5' disambung 3 jadi '53'!",
    "workedExample": {
      "sampleCode": "console.log('10' + 2);",
      "sampleAnswer": "102",
      "sampleLogic": "Teks '10' ditambah 2 jadi '102'!"
    }
  },
  {
    "id": "out-22",
    "lang": "JavaScript",
    "badge": "Arithmetic Coercion -",
    "questionEn": "What will be printed when subtracting from a string number?",
    "code": "const res = '10' - 4;\nconsole.log(res);",
    "options": [
      {
        "text": "6",
        "correct": true
      },
      {
        "text": "104",
        "correct": false
      },
      {
        "text": "NaN",
        "correct": false
      },
      {
        "text": "TypeError",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Operator - otomatis mengubah teks angka menjadi nomor murni: 10 - 4 = 6!",
    "workedExample": {
      "sampleCode": "console.log('20' - 5);",
      "sampleAnswer": "15",
      "sampleLogic": "20 - 5 = 15!"
    }
  },
  {
    "id": "out-23",
    "lang": "JavaScript",
    "badge": "Equality == vs ===",
    "questionEn": "What does double equals (==) return for string and number?",
    "code": "console.log(5 == '5');\nconsole.log(5 === '5');",
    "options": [
      {
        "text": "true false",
        "correct": true
      },
      {
        "text": "true true",
        "correct": false
      },
      {
        "text": "false false",
        "correct": false
      },
      {
        "text": "false true",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: == (longgar) mengubah tipe jadi sama (true), sedangkan === (ketat) beda tipe (false)!",
    "workedExample": {
      "sampleCode": "console.log(1 == '1', 1 === '1');",
      "sampleAnswer": "true false",
      "sampleLogic": "Longgar true, ketat false!"
    }
  },
  {
    "id": "out-24",
    "lang": "JavaScript",
    "badge": "Boolean('false')",
    "questionEn": "What does Boolean('false') evaluate to?",
    "code": "const val = Boolean('false');\nconsole.log(val);",
    "options": [
      {
        "text": "true",
        "correct": true
      },
      {
        "text": "false",
        "correct": false
      },
      {
        "text": "undefined",
        "correct": false
      },
      {
        "text": "NaN",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Teks apapun yang ada karakternya (bukan string kosong '') selalu bernilai TRUTHY di JS! Hasilnya true!",
    "workedExample": {
      "sampleCode": "console.log(Boolean('0'));",
      "sampleAnswer": "true",
      "sampleLogic": "Teks '0' ada isinya, bernilai true!"
    }
  },
  {
    "id": "out-25",
    "lang": "JavaScript",
    "badge": "Empty String Falsy",
    "questionEn": "What is the truthiness of empty string vs whitespace string?",
    "code": "console.log(Boolean('') + ' ' + Boolean(' '));",
    "options": [
      {
        "text": "false true",
        "correct": true
      },
      {
        "text": "false false",
        "correct": false
      },
      {
        "text": "true true",
        "correct": false
      },
      {
        "text": "true false",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: String kosong '' adalah falsy (false), sedangkan spasi ' ' berisi 1 karakter spasi (true)!",
    "workedExample": {
      "sampleCode": "console.log(Boolean(''), Boolean('a'));",
      "sampleAnswer": "false true",
      "sampleLogic": "Kosong false, ada isi true!"
    }
  },
  {
    "id": "out-26",
    "lang": "JavaScript",
    "badge": "NaN Typeof",
    "questionEn": "What is the typeof NaN in JavaScript?",
    "code": "console.log(typeof NaN);",
    "options": [
      {
        "text": "number",
        "correct": true
      },
      {
        "text": "nan",
        "correct": false
      },
      {
        "text": "undefined",
        "correct": false
      },
      {
        "text": "object",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: NaN (Not-a-Number) merepresentasikan angka tak terdefinisi, sehingga tipenya tetap 'number'!",
    "workedExample": {
      "sampleCode": "console.log(typeof (0 / 0));",
      "sampleAnswer": "number",
      "sampleLogic": "Hasil 0/0 bertipe number!"
    }
  },
  {
    "id": "out-27",
    "lang": "JavaScript",
    "badge": "null vs undefined",
    "questionEn": "What is the typeof null?",
    "code": "console.log(typeof null);\nconsole.log(typeof undefined);",
    "options": [
      {
        "text": "object undefined",
        "correct": true
      },
      {
        "text": "null undefined",
        "correct": false
      },
      {
        "text": "object object",
        "correct": false
      },
      {
        "text": "undefined undefined",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Bug historis JS sejak 1995: typeof null adalah 'object'. Sedangkan typeof undefined adalah 'undefined'!",
    "workedExample": {
      "sampleCode": "console.log(typeof null === 'object');",
      "sampleAnswer": "true",
      "sampleLogic": "typeof null menghasilkan 'object'!"
    }
  },
  {
    "id": "out-28",
    "lang": "JavaScript",
    "badge": "Array Coercion",
    "questionEn": "What will be printed when adding two empty arrays?",
    "code": "console.log([] + []);",
    "options": [
      {
        "text": "\"\" (empty string)",
        "correct": true
      },
      {
        "text": "[]",
        "correct": false
      },
      {
        "text": "0",
        "correct": false
      },
      {
        "text": "NaN",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: [].toString() menghasilkan string kosong ''. Jadi '' + '' = '' (empty string)!",
    "workedExample": {
      "sampleCode": "console.log([1] + [2]);",
      "sampleAnswer": "12",
      "sampleLogic": "'1' ditambah '2' jadi '12'!"
    }
  },
  {
    "id": "out-29",
    "lang": "JavaScript",
    "badge": "Boolean Coercion +",
    "questionEn": "What will be printed when adding true and true?",
    "code": "console.log(true + true);\nconsole.log(true - false);",
    "options": [
      {
        "text": "2 1",
        "correct": true
      },
      {
        "text": "truetrue true",
        "correct": false
      },
      {
        "text": "1 1",
        "correct": false
      },
      {
        "text": "2 0",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Dalam matematika, true = 1 dan false = 0. Jadi 1 + 1 = 2 dan 1 - 0 = 1!",
    "workedExample": {
      "sampleCode": "console.log(true + false);",
      "sampleAnswer": "1",
      "sampleLogic": "1 + 0 = 1!"
    }
  },
  {
    "id": "out-30",
    "lang": "JavaScript",
    "badge": "Loose Equality null & undefined",
    "questionEn": "What does null == undefined and null === undefined evaluate to?",
    "code": "console.log(null == undefined, null === undefined);",
    "options": [
      {
        "text": "true false",
        "correct": true
      },
      {
        "text": "true true",
        "correct": false
      },
      {
        "text": "false false",
        "correct": false
      },
      {
        "text": "false true",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: null sama secara longgar (==) dengan undefined. Tapi beda tipe data sehingga ketat (===) bernilai false!",
    "workedExample": {
      "sampleCode": "console.log(null == null, null === null);",
      "sampleAnswer": "true true",
      "sampleLogic": "Sama persis menghasilkan true true!"
    }
  },
  {
    "id": "out-31",
    "lang": "JavaScript",
    "badge": "Block Scope let",
    "questionEn": "What will be printed when accessing shadowed variable?",
    "code": "let a = 10;\n{\n  let a = 20;\n}\nconsole.log(a);",
    "options": [
      {
        "text": "10",
        "correct": true
      },
      {
        "text": "20",
        "correct": false
      },
      {
        "text": "undefined",
        "correct": false
      },
      {
        "text": "ReferenceError",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Variabel 'let' di dalam {} terkunci di kamar pribadinya. Variabel a di luar tetap 10!",
    "workedExample": {
      "sampleCode": "let x = 5; { let x = 99; } console.log(x);",
      "sampleAnswer": "5",
      "sampleLogic": "x di luar tetap 5!"
    }
  },
  {
    "id": "out-32",
    "lang": "JavaScript",
    "badge": "var Function Scope",
    "questionEn": "What will be printed when using var inside an if block?",
    "code": "if (true) {\n  var b = 50;\n}\nconsole.log(b);",
    "options": [
      {
        "text": "50",
        "correct": true
      },
      {
        "text": "undefined",
        "correct": false
      },
      {
        "text": "ReferenceError",
        "correct": false
      },
      {
        "text": "null",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: 'var' tidak memedulikan kurung if (bukan block scope), sehingga tembus ke luar: 50!",
    "workedExample": {
      "sampleCode": "if(true) { var y = 3; } console.log(y);",
      "sampleAnswer": "3",
      "sampleLogic": "var tembus ke luar if = 3!"
    }
  },
  {
    "id": "out-33",
    "lang": "JavaScript",
    "badge": "Closure Counter",
    "questionEn": "What will be printed when invoking closure multiple times?",
    "code": "function makeCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\nconst c = makeCounter();\nc();\nconsole.log(c());",
    "options": [
      {
        "text": "2",
        "correct": true
      },
      {
        "text": "1",
        "correct": false
      },
      {
        "text": "0",
        "correct": false
      },
      {
        "text": "undefined",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Closure menyimpan memori ranselnya. Panggilan c() pertama membuat count jadi 1, kedua jadi 2!",
    "workedExample": {
      "sampleCode": "function add() { let n=0; return () => ++n; } const fn = add(); console.log(fn());",
      "sampleAnswer": "1",
      "sampleLogic": "Panggilan pertama n bertambah jadi 1!"
    }
  },
  {
    "id": "out-34",
    "lang": "JavaScript",
    "badge": "Hoisting var",
    "questionEn": "What will be printed due to var hoisting?",
    "code": "console.log(myVar);\nvar myVar = 'Hello';",
    "options": [
      {
        "text": "undefined",
        "correct": true
      },
      {
        "text": "Hello",
        "correct": false
      },
      {
        "text": "ReferenceError",
        "correct": false
      },
      {
        "text": "null",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Deklarasi 'var myVar' diangkat ke atas oleh JS tapi nilainya belum diisi (masih undefined)!",
    "workedExample": {
      "sampleCode": "console.log(x); var x = 10;",
      "sampleAnswer": "undefined",
      "sampleLogic": "x dinaikkan tanpa nilai = undefined!"
    }
  },
  {
    "id": "out-35",
    "lang": "JavaScript",
    "badge": "Temporal Dead Zone",
    "questionEn": "What happens when accessing let before declaration?",
    "code": "// console.log(myLet);\n// let myLet = 10;\n// What error is thrown?",
    "options": [
      {
        "text": "ReferenceError (TDZ)",
        "correct": true
      },
      {
        "text": "undefined",
        "correct": false
      },
      {
        "text": "TypeError",
        "correct": false
      },
      {
        "text": "SyntaxError",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: 'let' dan 'const' masuk area Temporal Dead Zone (TDZ). Memanggilnya sebelum baris deklarasi melempar ReferenceError!",
    "workedExample": {
      "sampleCode": "console.log(a); let a = 5; // TDZ",
      "sampleAnswer": "ReferenceError (TDZ)",
      "sampleLogic": "let tidak bisa diakses sebelum deklarasi!"
    }
  },
  {
    "id": "out-36",
    "lang": "JavaScript",
    "badge": "Loop Binding let",
    "questionEn": "What is the behavior of let in a for loop?",
    "code": "for (let i = 0; i < 3; i++) {\n  // each iteration gets its own fresh 'i'\n}",
    "options": [
      {
        "text": "Independent value per iteration",
        "correct": true
      },
      {
        "text": "Always 3 for all",
        "correct": false
      },
      {
        "text": "Undefined",
        "correct": false
      },
      {
        "text": "ReferenceError",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: 'let' menciptakan variabel baru yang segar di setiap putaran loop sehingga nilainya tidak saling menimpa!",
    "workedExample": {
      "sampleCode": "for(let j=0; j<2; j++) { /* j=0, j=1 */ }",
      "sampleAnswer": "Independent value per iteration",
      "sampleLogic": "Tiap putaran punya variabel let terpisah!"
    }
  },
  {
    "id": "out-37",
    "lang": "JavaScript",
    "badge": "Default Parameter",
    "questionEn": "What will be printed when default parameter is used?",
    "code": "function greet(name = 'Guest') {\n  return 'Hi ' + name;\n}\nconsole.log(greet());",
    "options": [
      {
        "text": "Hi Guest",
        "correct": true
      },
      {
        "text": "Hi undefined",
        "correct": false
      },
      {
        "text": "Hi",
        "correct": false
      },
      {
        "text": "ReferenceError",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Karena tidak diberi nama, nilai bawaan (default) 'Guest' otomatis dipakai!",
    "workedExample": {
      "sampleCode": "function f(x = 10) { return x * 2; } console.log(f());",
      "sampleAnswer": "20",
      "sampleLogic": "x memakai default 10 * 2 = 20!"
    }
  },
  {
    "id": "out-38",
    "lang": "JavaScript",
    "badge": "Arrow Function this",
    "questionEn": "How does arrow function bind 'this'?",
    "code": "const obj = {\n  val: 42,\n  getVal: () => this.val\n};",
    "options": [
      {
        "text": "Inherits this from lexical enclosing scope",
        "correct": true
      },
      {
        "text": "Binds to obj dynamically",
        "correct": false
      },
      {
        "text": "Throws TypeError",
        "correct": false
      },
      {
        "text": "Always null",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Arrow function tidak punya 'this' sendiri, ia mewarisi 'this' dari lingkungan sekitarnya (lexical scope)!",
    "workedExample": {
      "sampleCode": "() => this // lexical binding",
      "sampleAnswer": "Inherits this from lexical enclosing scope",
      "sampleLogic": "Mengambil this secara leksikal!"
    }
  },
  {
    "id": "out-39",
    "lang": "JavaScript",
    "badge": "IIFE Pattern",
    "questionEn": "What will be printed by this Immediately Invoked Function Expression?",
    "code": "const result = (function(x) {\n  return x * x;\n})(5);\nconsole.log(result);",
    "options": [
      {
        "text": "25",
        "correct": true
      },
      {
        "text": "5",
        "correct": false
      },
      {
        "text": "undefined",
        "correct": false
      },
      {
        "text": "function",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Fungsi langsung berjalan seketika dengan angka 5: 5 dikali 5 = 25!",
    "workedExample": {
      "sampleCode": "const v = ((n) => n + 3)(4); console.log(v);",
      "sampleAnswer": "7",
      "sampleLogic": "4 + 3 = 7 langsung dieksekusi!"
    }
  },
  {
    "id": "out-40",
    "lang": "JavaScript",
    "badge": "Function Hoisting",
    "questionEn": "Can a function declaration be called before its definition?",
    "code": "console.log(sayHi());\nfunction sayHi() {\n  return 'Hello';\n}",
    "options": [
      {
        "text": "Hello",
        "correct": true
      },
      {
        "text": "undefined",
        "correct": false
      },
      {
        "text": "TypeError",
        "correct": false
      },
      {
        "text": "ReferenceError",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Function declaration diangkat seutuhnya ke atas oleh JS, sehingga bisa dipanggil sebelum baris pembuatannya!",
    "workedExample": {
      "sampleCode": "callMe(); function callMe() { return 'OK'; }",
      "sampleAnswer": "OK",
      "sampleLogic": "Fungsi biasa di-hoist lengkap!"
    }
  },
  {
    "id": "out-41",
    "lang": "JavaScript",
    "badge": "Object Destructuring",
    "questionEn": "What will be printed when destructuring object properties?",
    "code": "const user = { name: 'Kodi', role: 'Dev' };\nconst { name, age = 1 } = user;\nconsole.log(name + '-' + age);",
    "options": [
      {
        "text": "Kodi-1",
        "correct": true
      },
      {
        "text": "Kodi-undefined",
        "correct": false
      },
      {
        "text": "Kodi-Dev",
        "correct": false
      },
      {
        "text": "ReferenceError",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: name diambil langsung ('Kodi'). Karena age tidak ada, dipakai nilai default 1: 'Kodi-1'!",
    "workedExample": {
      "sampleCode": "const { a, b = 5 } = { a: 2 }; console.log(a + b);",
      "sampleAnswer": "7",
      "sampleLogic": "2 + 5 = 7!"
    }
  },
  {
    "id": "out-42",
    "lang": "JavaScript",
    "badge": "Spread Operator Object",
    "questionEn": "What will be printed when overriding properties with spread?",
    "code": "const base = { x: 1, y: 2 };\nconst next = { ...base, y: 10 };\nconsole.log(next.y);",
    "options": [
      {
        "text": "10",
        "correct": true
      },
      {
        "text": "2",
        "correct": false
      },
      {
        "text": "12",
        "correct": false
      },
      {
        "text": "undefined",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Nilai y: 10 yang ditulis belakangan menimpa nilai lama (y: 2). Hasil akhirnya 10!",
    "workedExample": {
      "sampleCode": "const o = { a: 1, ...{ a: 5 } }; console.log(o.a);",
      "sampleAnswer": "5",
      "sampleLogic": "Nilai terakhir menimpa = 5!"
    }
  },
  {
    "id": "out-43",
    "lang": "JavaScript",
    "badge": "Object Reference Mutation",
    "questionEn": "What will be printed when mutating an object reference?",
    "code": "const obj1 = { val: 10 };\nconst obj2 = obj1;\nobj2.val = 20;\nconsole.log(obj1.val);",
    "options": [
      {
        "text": "20",
        "correct": true
      },
      {
        "text": "10",
        "correct": false
      },
      {
        "text": "undefined",
        "correct": false
      },
      {
        "text": "TypeError",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: obj1 dan obj2 menunjuk ke rumah yang sama di memori. Mengubah lewat obj2 ikut mengubah obj1 jadi 20!",
    "workedExample": {
      "sampleCode": "let a = { n: 1 }; let b = a; b.n = 9; console.log(a.n);",
      "sampleAnswer": "9",
      "sampleLogic": "Keduanya menunjuk objek yang sama = 9!"
    }
  },
  {
    "id": "out-44",
    "lang": "JavaScript",
    "badge": "Object.keys Length",
    "questionEn": "How many keys does this object have?",
    "code": "const server = { host: 'localhost', port: 8080, active: true };\nconsole.log(Object.keys(server).length);",
    "options": [
      {
        "text": "3",
        "correct": true
      },
      {
        "text": "2",
        "correct": false
      },
      {
        "text": "1",
        "correct": false
      },
      {
        "text": "undefined",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Object.keys() menghasilkan daftar ['host', 'port', 'active']. Ada 3 kunci properti!",
    "workedExample": {
      "sampleCode": "console.log(Object.keys({ a: 1, b: 2 }).length);",
      "sampleAnswer": "2",
      "sampleLogic": "Ada 2 kunci = 2!"
    }
  },
  {
    "id": "out-45",
    "lang": "JavaScript",
    "badge": "Optional Chaining ?.",
    "questionEn": "What does optional chaining return when a nested property is missing?",
    "code": "const config = { api: null };\nconsole.log(config.api?.endpoint);",
    "options": [
      {
        "text": "undefined",
        "correct": true
      },
      {
        "text": "null",
        "correct": false
      },
      {
        "text": "TypeError",
        "correct": false
      },
      {
        "text": "ReferenceError",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Dengan ?. (optional chaining), JS tidak crash saat jalurnya null/undefined dan selamat mengembalikan undefined!",
    "workedExample": {
      "sampleCode": "const u = {}; console.log(u.profile?.name);",
      "sampleAnswer": "undefined",
      "sampleLogic": "Aman tanpa crash menghasilkan undefined!"
    }
  },
  {
    "id": "out-46",
    "lang": "JavaScript",
    "badge": "Nullish Coalescing ??",
    "questionEn": "What does ?? return for 0 vs null?",
    "code": "const a = 0 ?? 42;\nconst b = null ?? 42;\nconsole.log(a + ' ' + b);",
    "options": [
      {
        "text": "0 42",
        "correct": true
      },
      {
        "text": "42 42",
        "correct": false
      },
      {
        "text": "0 null",
        "correct": false
      },
      {
        "text": "42 0",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Operator ?? hanya menganggap null dan undefined sebagai kosong. Angka 0 tetap 0, sedangkan null diganti 42!",
    "workedExample": {
      "sampleCode": "console.log(false ?? true, undefined ?? 'def');",
      "sampleAnswer": "false def",
      "sampleLogic": "false dipertahankan, undefined diganti 'def'!"
    }
  },
  {
    "id": "out-47",
    "lang": "JavaScript",
    "badge": "Computed Property Names",
    "questionEn": "What is the key name when using computed property syntax?",
    "code": "const key = 'score';\nconst player = { [key]: 100 };\nconsole.log(player.score);",
    "options": [
      {
        "text": "100",
        "correct": true
      },
      {
        "text": "undefined",
        "correct": false
      },
      {
        "text": "key",
        "correct": false
      },
      {
        "text": "TypeError",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: [key] mengevaluasi variabel key menjadi string 'score', sehingga menghasilkan player.score = 100!",
    "workedExample": {
      "sampleCode": "const k = 'id'; const o = { [k]: 5 }; console.log(o.id);",
      "sampleAnswer": "5",
      "sampleLogic": "Properti dinamis bernilai 5!"
    }
  },
  {
    "id": "out-48",
    "lang": "JavaScript",
    "badge": "Array Destructuring Swapping",
    "questionEn": "What will be printed when swapping variables with destructuring?",
    "code": "let x = 1, y = 2;\n[x, y] = [y, x];\nconsole.log(x + '' + y);",
    "options": [
      {
        "text": "21",
        "correct": true
      },
      {
        "text": "12",
        "correct": false
      },
      {
        "text": "22",
        "correct": false
      },
      {
        "text": "11",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Nilai x dan y bertukar posisi: x jadi 2 dan y jadi 1! Gabung jadi '21'!",
    "workedExample": {
      "sampleCode": "let a = 'A', b = 'B'; [a, b] = [b, a]; console.log(a);",
      "sampleAnswer": "B",
      "sampleLogic": "Nilai bertukar jadi 'B'!"
    }
  },
  {
    "id": "out-49",
    "lang": "JavaScript",
    "badge": "Object.assign",
    "questionEn": "What does Object.assign return?",
    "code": "const target = { a: 1 };\nconst source = { b: 2 };\nObject.assign(target, source);\nconsole.log(target.a + target.b);",
    "options": [
      {
        "text": "3",
        "correct": true
      },
      {
        "text": "1",
        "correct": false
      },
      {
        "text": "2",
        "correct": false
      },
      {
        "text": "NaN",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Object.assign menyalin semua properti ke target: { a: 1, b: 2 }. 1 + 2 = 3!",
    "workedExample": {
      "sampleCode": "const t = { x: 4 }; Object.assign(t, { y: 6 }); console.log(t.x + t.y);",
      "sampleAnswer": "10",
      "sampleLogic": "4 + 6 = 10!"
    }
  },
  {
    "id": "out-50",
    "lang": "JavaScript",
    "badge": "Object Freezing",
    "questionEn": "What happens when trying to modify a frozen object?",
    "code": "const item = Object.freeze({ price: 50 });\nitem.price = 100;\nconsole.log(item.price);",
    "options": [
      {
        "text": "50",
        "correct": true
      },
      {
        "text": "100",
        "correct": false
      },
      {
        "text": "undefined",
        "correct": false
      },
      {
        "text": "TypeError in strict mode",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Object.freeze membekukan objek menjadi batu es! Nilai price tidak bisa diubah dan tetap 50!",
    "workedExample": {
      "sampleCode": "const o = Object.freeze({ n: 1 }); o.n = 9; console.log(o.n);",
      "sampleAnswer": "1",
      "sampleLogic": "Nilai objek beku tidak berubah!"
    }
  },
  {
    "id": "out-51",
    "lang": "JavaScript",
    "badge": "Ternary Operator",
    "questionEn": "What will be printed by this nested ternary operator?",
    "code": "const score = 85;\nconst grade = score >= 90 ? 'A' : score >= 80 ? 'B' : 'C';\nconsole.log(grade);",
    "options": [
      {
        "text": "B",
        "correct": true
      },
      {
        "text": "A",
        "correct": false
      },
      {
        "text": "C",
        "correct": false
      },
      {
        "text": "undefined",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: 85 >= 90 salah, lanjut ke tes kedua: 85 >= 80 benar! Nilai yang diambil adalah 'B'!",
    "workedExample": {
      "sampleCode": "const x = 5; console.log(x > 10 ? 'Big' : 'Small');",
      "sampleAnswer": "Small",
      "sampleLogic": "5 tidak > 10 maka 'Small'!"
    }
  },
  {
    "id": "out-52",
    "lang": "JavaScript",
    "badge": "Short-Circuit AND &&",
    "questionEn": "What does short-circuit evaluation of && return?",
    "code": "const res = true && 'Connected';\nconsole.log(res);",
    "options": [
      {
        "text": "Connected",
        "correct": true
      },
      {
        "text": "true",
        "correct": false
      },
      {
        "text": "false",
        "correct": false
      },
      {
        "text": "undefined",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Sisi kiri true, maka && terus jalan dan mengembalikan nilai di sisi kanan: 'Connected'!",
    "workedExample": {
      "sampleCode": "console.log(false && 'Hello');",
      "sampleAnswer": "false",
      "sampleLogic": "Sisi kiri false langsung berhenti!"
    }
  },
  {
    "id": "out-53",
    "lang": "JavaScript",
    "badge": "Short-Circuit OR ||",
    "questionEn": "What does short-circuit evaluation of || return?",
    "code": "console.log(undefined || 3000);",
    "options": [
      {
        "text": "3000",
        "correct": true
      },
      {
        "text": "undefined",
        "correct": false
      },
      {
        "text": "true",
        "correct": false
      },
      {
        "text": "0",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Operator || mencari nilai truthy. Karena undefined adalah falsy, ia melompat ke nilai cadangan di kanan: 3000!",
    "workedExample": {
      "sampleCode": "console.log('Admin' || 'Guest');",
      "sampleAnswer": "Admin",
      "sampleLogic": "'Admin' sudah truthy langsung dipakai!"
    }
  },
  {
    "id": "out-54",
    "lang": "JavaScript",
    "badge": "Modulo Remainder",
    "questionEn": "What is the result of 17 % 5?",
    "code": "const remainder = 17 % 5;\nconsole.log(remainder);",
    "options": [
      {
        "text": "2",
        "correct": true
      },
      {
        "text": "3",
        "correct": false
      },
      {
        "text": "3.4",
        "correct": false
      },
      {
        "text": "1",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: 5 × 3 = 15, lalu 17 - 15 = sisa 2 roti yang tidak kebagian! Hasilnya 2!",
    "workedExample": {
      "sampleCode": "console.log(10 % 3);",
      "sampleAnswer": "1",
      "sampleLogic": "3 × 3 = 9 sisa 1!"
    }
  },
  {
    "id": "out-55",
    "lang": "JavaScript",
    "badge": "Bitwise AND &",
    "questionEn": "What is the result of bitwise 6 & 3?",
    "code": "// 6 in binary: 110\n// 3 in binary: 011\nconsole.log(6 & 3);",
    "options": [
      {
        "text": "2",
        "correct": true
      },
      {
        "text": "3",
        "correct": false
      },
      {
        "text": "7",
        "correct": false
      },
      {
        "text": "1",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: 110 & 011 = 010 biner. Nilai biner 010 adalah angka 2 desimal!",
    "workedExample": {
      "sampleCode": "console.log(5 & 1); // 101 & 001",
      "sampleAnswer": "1",
      "sampleLogic": "Hanya digit belakang yang sama-sama 1 = 1!"
    }
  },
  {
    "id": "out-56",
    "lang": "JavaScript",
    "badge": "Bitwise OR |",
    "questionEn": "What is the result of bitwise 4 | 1?",
    "code": "// 4 in binary: 100\n// 1 in binary: 001\nconsole.log(4 | 1);",
    "options": [
      {
        "text": "5",
        "correct": true
      },
      {
        "text": "4",
        "correct": false
      },
      {
        "text": "1",
        "correct": false
      },
      {
        "text": "0",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: 100 | 001 = 101 biner. Nilai biner 101 adalah angka 5 desimal!",
    "workedExample": {
      "sampleCode": "console.log(2 | 1); // 010 | 001",
      "sampleAnswer": "3",
      "sampleLogic": "010 | 001 = 011 (angka 3)!"
    }
  },
  {
    "id": "out-57",
    "lang": "JavaScript",
    "badge": "Bitwise Left Shift <<",
    "questionEn": "What does shifting left by 1 do to a number?",
    "code": "console.log(5 << 1);",
    "options": [
      {
        "text": "10",
        "correct": true
      },
      {
        "text": "5",
        "correct": false
      },
      {
        "text": "2",
        "correct": false
      },
      {
        "text": "25",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Geser kiri 1 bit (<< 1) sama artinya mengalikan angka dengan 2: 5 × 2 = 10!",
    "workedExample": {
      "sampleCode": "console.log(3 << 1);",
      "sampleAnswer": "6",
      "sampleLogic": "3 dikali 2 = 6!"
    }
  },
  {
    "id": "out-58",
    "lang": "JavaScript",
    "badge": "Logical NOT !! Operator",
    "questionEn": "What does double exclamation mark (!!) do?",
    "code": "console.log(!!'hello', !!0);",
    "options": [
      {
        "text": "true false",
        "correct": true
      },
      {
        "text": "false true",
        "correct": false
      },
      {
        "text": "true true",
        "correct": false
      },
      {
        "text": "false false",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: !! mengubah nilai menjadi boolean murni. Teks ada isinya = true, angka 0 = false!",
    "workedExample": {
      "sampleCode": "console.log(!!null);",
      "sampleAnswer": "false",
      "sampleLogic": "null adalah falsy = false!"
    }
  },
  {
    "id": "out-59",
    "lang": "JavaScript",
    "badge": "Math.floor vs Math.ceil",
    "questionEn": "What does Math.floor(4.9) and Math.ceil(4.1) return?",
    "code": "console.log(Math.floor(4.9) + ' ' + Math.ceil(4.1));",
    "options": [
      {
        "text": "4 5",
        "correct": true
      },
      {
        "text": "5 4",
        "correct": false
      },
      {
        "text": "5 5",
        "correct": false
      },
      {
        "text": "4 4",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: floor (lantai) membanting ke bawah jadi 4. ceil (plafon) mengangkat ke atas jadi 5! Hasil: 4 5!",
    "workedExample": {
      "sampleCode": "console.log(Math.floor(2.8));",
      "sampleAnswer": "2",
      "sampleLogic": "Dibulatkan ke bawah jadi 2!"
    }
  },
  {
    "id": "out-60",
    "lang": "JavaScript",
    "badge": "Operator Precedence",
    "questionEn": "What is the order of operations in 2 + 3 * 4?",
    "code": "console.log(2 + 3 * 4);",
    "options": [
      {
        "text": "14",
        "correct": true
      },
      {
        "text": "20",
        "correct": false
      },
      {
        "text": "24",
        "correct": false
      },
      {
        "text": "12",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Perkalian (*) dikerjakan duluan: 3 × 4 = 12, lalu 2 + 12 = 14!",
    "workedExample": {
      "sampleCode": "console.log(1 + 2 * 3);",
      "sampleAnswer": "7",
      "sampleLogic": "2 × 3 = 6 + 1 = 7!"
    }
  },
  {
    "id": "out-61",
    "lang": "Python",
    "badge": "List Slicing [::-1]",
    "questionEn": "What does string/list slicing [::-1] return in Python?",
    "code": "word = 'PYTHON'\nprint(word[::-1])",
    "options": [
      {
        "text": "NOHTYP",
        "correct": true
      },
      {
        "text": "PYTHON",
        "correct": false
      },
      {
        "text": "P",
        "correct": false
      },
      {
        "text": "IndexError",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Di Python, jurus [::-1] berarti membalik teks: 'PYTHON' jadi 'NOHTYP'!",
    "workedExample": {
      "sampleCode": "s = 'KODI'; print(s[::-1])",
      "sampleAnswer": "IDOK",
      "sampleLogic": "Teks dibalik = IDOK!"
    }
  },
  {
    "id": "out-62",
    "lang": "Python",
    "badge": "List Comprehension",
    "questionEn": "What will be printed by this list comprehension?",
    "code": "squares = [x * x for x in range(4)]\nprint(squares)",
    "options": [
      {
        "text": "[0, 1, 4, 9]",
        "correct": true
      },
      {
        "text": "[1, 4, 9, 16]",
        "correct": false
      },
      {
        "text": "[0, 1, 2, 3]",
        "correct": false
      },
      {
        "text": "14",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: range(4) adalah 0, 1, 2, 3. Kuadrat masing-masing: 0, 1, 4, 9. Hasilnya [0, 1, 4, 9]!",
    "workedExample": {
      "sampleCode": "print([x * 2 for x in [1, 2]])",
      "sampleAnswer": "[2, 4]",
      "sampleLogic": "Tiap angka dikali 2 = [2, 4]!"
    }
  },
  {
    "id": "out-63",
    "lang": "Python",
    "badge": "Dict .get() Default",
    "questionEn": "What does dict.get() return when key is missing?",
    "code": "data = {'name': 'Boti'}\nprint(data.get('age', 0))",
    "options": [
      {
        "text": "0",
        "correct": true
      },
      {
        "text": "None",
        "correct": false
      },
      {
        "text": "KeyError",
        "correct": false
      },
      {
        "text": "Boti",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: .get() tidak pernah melempar KeyError. Jika 'age' tidak ada, nilai cadangan 0 yang keluar!",
    "workedExample": {
      "sampleCode": "d = {}; print(d.get('city', 'Jakarta'))",
      "sampleAnswer": "Jakarta",
      "sampleLogic": "Memakai nilai cadangan 'Jakarta'!"
    }
  },
  {
    "id": "out-64",
    "lang": "Python",
    "badge": "Negative Indexing",
    "questionEn": "What element does negative index [-1] access in Python?",
    "code": "items = ['server', 'router', 'switch']\nprint(items[-1])",
    "options": [
      {
        "text": "switch",
        "correct": true
      },
      {
        "text": "server",
        "correct": false
      },
      {
        "text": "router",
        "correct": false
      },
      {
        "text": "IndexError",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Indeks negatif [-1] mengambil elemen paling akhir yaitu 'switch'!",
    "workedExample": {
      "sampleCode": "a = [10, 20]; print(a[-1])",
      "sampleAnswer": "20",
      "sampleLogic": "Elemen paling akhir adalah 20!"
    }
  },
  {
    "id": "out-65",
    "lang": "Python",
    "badge": "Tuple Immutability",
    "questionEn": "What happens when trying to reassign a tuple item?",
    "code": "# tup = (1, 2, 3)\n# tup[0] = 99\n# What error will be thrown?",
    "options": [
      {
        "text": "TypeError",
        "correct": true
      },
      {
        "text": "ValueError",
        "correct": false
      },
      {
        "text": "IndexError",
        "correct": false
      },
      {
        "text": "SyntaxError",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Tuple itu permanen (immutable)! Anggotanya tidak boleh diganti setelah dibuat, memicu TypeError!",
    "workedExample": {
      "sampleCode": "t = (1,); t[0] = 5 # TypeError",
      "sampleAnswer": "TypeError",
      "sampleLogic": "Tuple tidak bisa diubah isinya!"
    }
  },
  {
    "id": "out-66",
    "lang": "Python",
    "badge": "Set Uniqueness",
    "questionEn": "What is the length of a set created from duplicates?",
    "code": "nums = [1, 2, 2, 3, 3, 3]\nprint(len(set(nums)))",
    "options": [
      {
        "text": "3",
        "correct": true
      },
      {
        "text": "6",
        "correct": false
      },
      {
        "text": "1",
        "correct": false
      },
      {
        "text": "5",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Set membuang semua angka kembar: tersisa {1, 2, 3}. Panjangnya ada 3!",
    "workedExample": {
      "sampleCode": "print(len(set([4, 4, 4])))",
      "sampleAnswer": "1",
      "sampleLogic": "Hanya ada 1 angka unik (4)!"
    }
  },
  {
    "id": "out-67",
    "lang": "Python",
    "badge": "String .join()",
    "questionEn": "What does '-'.join(['A', 'B', 'C']) produce?",
    "code": "result = '-'.join(['A', 'B', 'C'])\nprint(result)",
    "options": [
      {
        "text": "A-B-C",
        "correct": true
      },
      {
        "text": "-A-B-C-",
        "correct": false
      },
      {
        "text": "ABC-",
        "correct": false
      },
      {
        "text": "['A', 'B', 'C']",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: .join() menaruh strip '-' di antara huruf: 'A-B-C'!",
    "workedExample": {
      "sampleCode": "print(','.join(['1', '2']))",
      "sampleAnswer": "1,2",
      "sampleLogic": "Elemen digabung dengan koma = 1,2!"
    }
  },
  {
    "id": "out-68",
    "lang": "Python",
    "badge": "F-Strings Formatting",
    "questionEn": "What will be printed by this f-string?",
    "code": "name = 'Kodi'\nage = 1\nprint(f'{name} is {age * 12} months old')",
    "options": [
      {
        "text": "Kodi is 12 months old",
        "correct": true
      },
      {
        "text": "Kodi is 1 months old",
        "correct": false
      },
      {
        "text": "name is age * 12 months old",
        "correct": false
      },
      {
        "text": "SyntaxError",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: {age * 12} dihitung menjadi 1 × 12 = 12!",
    "workedExample": {
      "sampleCode": "x = 5; print(f'{x + 1}')",
      "sampleAnswer": "6",
      "sampleLogic": "5 + 1 dihitung jadi 6!"
    }
  },
  {
    "id": "out-69",
    "lang": "Python",
    "badge": "Boolean in range()",
    "questionEn": "Is 3 in range(1, 4)?",
    "code": "print(3 in range(1, 4))",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      },
      {
        "text": "None",
        "correct": false
      },
      {
        "text": "Error",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: range(1, 4) mencakup angka 1, 2, dan 3. Karena 3 ada di dalamnya, hasilnya True!",
    "workedExample": {
      "sampleCode": "print(4 in range(1, 4))",
      "sampleAnswer": "False",
      "sampleLogic": "Batas akhir 4 tidak termasuk!"
    }
  },
  {
    "id": "out-70",
    "lang": "Python",
    "badge": "Dictionary Keys Loop",
    "questionEn": "What does looping over a dict directly yield?",
    "code": "d = {'a': 1, 'b': 2}\nprint(''.join(d))",
    "options": [
      {
        "text": "ab",
        "correct": true
      },
      {
        "text": "12",
        "correct": false
      },
      {
        "text": "a1b2",
        "correct": false
      },
      {
        "text": "['a', 'b']",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Looping langsung pada dictionary menghasilkan nama kunci-kuncinya: 'a' dan 'b' = 'ab'!",
    "workedExample": {
      "sampleCode": "for k in {'x': 10}: print(k)",
      "sampleAnswer": "x",
      "sampleLogic": "Nama kuncinya yang keluar ('x')!"
    }
  },
  {
    "id": "out-71",
    "lang": "C#",
    "badge": "Integer Division",
    "questionEn": "What is the result of 7 / 2 in C# integer arithmetic?",
    "code": "int a = 7;\nint b = 2;\nint result = a / b;\nConsole.WriteLine(result);",
    "options": [
      {
        "text": "3",
        "correct": true
      },
      {
        "text": "3.5",
        "correct": false
      },
      {
        "text": "4",
        "correct": false
      },
      {
        "text": "3.0",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Pembagian int / int di C# membuang semua angka di belakang koma: 7 / 2 = 3!",
    "workedExample": {
      "sampleCode": "int x = 5 / 2;",
      "sampleAnswer": "2",
      "sampleLogic": "Koma dibuang, hasil 2 bulat!"
    }
  },
  {
    "id": "out-72",
    "lang": "C#",
    "badge": "String Interpolation $",
    "questionEn": "What will be printed by C# string interpolation?",
    "code": "string dev = \"Boti\";\nint ver = 2;\nConsole.WriteLine($\"{dev} v{ver}\");",
    "options": [
      {
        "text": "Boti v2",
        "correct": true
      },
      {
        "text": "{dev} v{ver}",
        "correct": false
      },
      {
        "text": "Boti 2",
        "correct": false
      },
      {
        "text": "Compile Error",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Tanda $ di string C# menyisipkan nilai variabel langsung: 'Boti v2'!",
    "workedExample": {
      "sampleCode": "string s = $\"Code {1 + 1}\";",
      "sampleAnswer": "Code 2",
      "sampleLogic": "1+1 dihitung jadi 2 = Code 2!"
    }
  },
  {
    "id": "out-73",
    "lang": "C#",
    "badge": "Switch Pattern Matching",
    "questionEn": "What will be printed by this C# switch expression?",
    "code": "int code = 2;\nstring msg = code switch {\n    1 => \"Low\",\n    2 => \"Med\",\n    _ => \"High\"\n};\nConsole.WriteLine(msg);",
    "options": [
      {
        "text": "Med",
        "correct": true
      },
      {
        "text": "Low",
        "correct": false
      },
      {
        "text": "High",
        "correct": false
      },
      {
        "text": "Null",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Pola mencocokkan angka 2 ke cabang 2 => 'Med'. _ adalah cabang default cadangan!",
    "workedExample": {
      "sampleCode": "int x = 1; string r = x switch { 1 => \"OK\", _ => \"FAIL\" };",
      "sampleAnswer": "OK",
      "sampleLogic": "Cocok dengan 1 = 'OK'!"
    }
  },
  {
    "id": "out-74",
    "lang": "C#",
    "badge": "Nullable int?",
    "questionEn": "What does HasValue return for an unassigned int?",
    "code": "int? score = null;\nConsole.WriteLine(score.HasValue);",
    "options": [
      {
        "text": "False",
        "correct": true
      },
      {
        "text": "True",
        "correct": false
      },
      {
        "text": "Null",
        "correct": false
      },
      {
        "text": "0",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: score bernilai null (kosong), maka properti .HasValue bernilai False!",
    "workedExample": {
      "sampleCode": "int? n = 10; Console.WriteLine(n.HasValue);",
      "sampleAnswer": "True",
      "sampleLogic": "Karena ada angka 10, HasValue = True!"
    }
  },
  {
    "id": "out-75",
    "lang": "C#",
    "badge": "Array Length Property",
    "questionEn": "What is the property name for array size in C#?",
    "code": "int[] numbers = { 10, 20, 30 };\nConsole.WriteLine(numbers.Length);",
    "options": [
      {
        "text": "3",
        "correct": true
      },
      {
        "text": "numbers.Count",
        "correct": false
      },
      {
        "text": "2",
        "correct": false
      },
      {
        "text": "30",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Di C#, ukuran array dipanggil dengan .Length (huruf besar). Ada 3 angka di array!",
    "workedExample": {
      "sampleCode": "string[] arr = { \"a\", \"b\" }; Console.WriteLine(arr.Length);",
      "sampleAnswer": "2",
      "sampleLogic": "Ada 2 elemen, Length = 2!"
    }
  },
  {
    "id": "out-76",
    "lang": "C#",
    "badge": "Substring Method",
    "questionEn": "What does \"NETWORKING\".Substring(0, 3) return in C#?",
    "code": "string text = \"NETWORKING\";\nConsole.WriteLine(text.Substring(0, 3));",
    "options": [
      {
        "text": "NET",
        "correct": true
      },
      {
        "text": "NETW",
        "correct": false
      },
      {
        "text": "ETW",
        "correct": false
      },
      {
        "text": "WORKING",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Di C#, Substring(start, length) mengambil 3 huruf mulai dari indeks 0 = 'NET'!",
    "workedExample": {
      "sampleCode": "\"HELLO\".Substring(0, 2);",
      "sampleAnswer": "HE",
      "sampleLogic": "Mulai indeks 0 sebanyak 2 huruf = 'HE'!"
    }
  },
  {
    "id": "out-77",
    "lang": "C#",
    "badge": "StringBuilder Append",
    "questionEn": "Why is StringBuilder used for multiple string concatenations?",
    "code": "var sb = new System.Text.StringBuilder();\nsb.Append(\"SQL\").Append(\" Server\");\nConsole.WriteLine(sb.ToString());",
    "options": [
      {
        "text": "SQL Server",
        "correct": true
      },
      {
        "text": "SQL",
        "correct": false
      },
      {
        "text": "Server",
        "correct": false
      },
      {
        "text": "TypeError",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: StringBuilder menyambung teks efisien di memori: 'SQL Server'!",
    "workedExample": {
      "sampleCode": "new StringBuilder().Append(\"A\").Append(\"B\").ToString();",
      "sampleAnswer": "AB",
      "sampleLogic": "Disambung jadi 'AB'!"
    }
  },
  {
    "id": "out-78",
    "lang": "C#",
    "badge": "var Type Inference",
    "questionEn": "Is C# 'var' strongly typed or dynamic?",
    "code": "var isOnline = true;\n// What is the compiled type of isOnline?",
    "options": [
      {
        "text": "bool (Strongly typed at compile-time)",
        "correct": true
      },
      {
        "text": "dynamic (Type resolved at runtime)",
        "correct": false
      },
      {
        "text": "object",
        "correct": false
      },
      {
        "text": "var type",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: 'var' di C# sudah dipastikan tipenya 'bool' saat dikompilasi, bukan tipe bebas runtime!",
    "workedExample": {
      "sampleCode": "var x = 10; // compiler knows it's int",
      "sampleAnswer": "bool (Strongly typed at compile-time)",
      "sampleLogic": "Tipe diputuskan saat kompilasi!"
    }
  },
  {
    "id": "out-79",
    "lang": "C#",
    "badge": "Foreach Loop",
    "questionEn": "What will be printed when iterating with foreach in C#?",
    "code": "int total = 0;\nforeach (int n in new int[] { 2, 4, 6 }) {\n    total += n;\n}\nConsole.WriteLine(total);",
    "options": [
      {
        "text": "12",
        "correct": true
      },
      {
        "text": "6",
        "correct": false
      },
      {
        "text": "3",
        "correct": false
      },
      {
        "text": "0",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Foreach menjumlahkan setiap butir angka: 2 + 4 + 6 = 12!",
    "workedExample": {
      "sampleCode": "int s = 0; foreach(var i in new int[]{1, 2}) s += i;",
      "sampleAnswer": "3",
      "sampleLogic": "1 + 2 = 3!"
    }
  },
  {
    "id": "out-80",
    "lang": "C#",
    "badge": "String.IsNullOrEmpty",
    "questionEn": "What does string.IsNullOrEmpty(\"\") return?",
    "code": "Console.WriteLine(string.IsNullOrEmpty(\"\"));",
    "options": [
      {
        "text": "True",
        "correct": true
      },
      {
        "text": "False",
        "correct": false
      },
      {
        "text": "Null",
        "correct": false
      },
      {
        "text": "Empty",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Karena stringnya memang kosong, hasilnya True!",
    "workedExample": {
      "sampleCode": "string.IsNullOrEmpty(\"test\");",
      "sampleAnswer": "False",
      "sampleLogic": "Ada isinya maka False!"
    }
  },
  {
    "id": "out-81",
    "lang": "Data Structure",
    "badge": "Stack LIFO",
    "questionEn": "In a Stack (Last-In-First-Out), which item is popped first?",
    "code": "const stack = [];\nstack.push('A');\nstack.push('B');\nstack.push('C');\nconsole.log(stack.pop());",
    "options": [
      {
        "text": "C",
        "correct": true
      },
      {
        "text": "A",
        "correct": false
      },
      {
        "text": "B",
        "correct": false
      },
      {
        "text": "undefined",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Stack seperti tumpukan piring: yang terakhir ditaruh ('C') diambil pertama kali (pop)! LIFO!",
    "workedExample": {
      "sampleCode": "let s = [1, 2]; console.log(s.pop());",
      "sampleAnswer": "2",
      "sampleLogic": "Elemen terakhir 2 diambil duluan!"
    }
  },
  {
    "id": "out-82",
    "lang": "Data Structure",
    "badge": "Queue FIFO",
    "questionEn": "In a Queue (First-In-First-Out), which item is dequeued first?",
    "code": "const queue = [];\nqueue.push('First');\nqueue.push('Second');\nconsole.log(queue.shift());",
    "options": [
      {
        "text": "First",
        "correct": true
      },
      {
        "text": "Second",
        "correct": false
      },
      {
        "text": "undefined",
        "correct": false
      },
      {
        "text": "null",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Queue seperti antrean kasir: yang pertama datang ('First') keluar duluan (.shift())! FIFO!",
    "workedExample": {
      "sampleCode": "let q = ['A', 'B']; console.log(q.shift());",
      "sampleAnswer": "A",
      "sampleLogic": "Orang pertama 'A' keluar duluan!"
    }
  },
  {
    "id": "out-83",
    "lang": "Data Structure",
    "badge": "Stack Peek/Top",
    "questionEn": "What will be printed when peeking the top of stack without removing it?",
    "code": "const stack = [10, 20, 30];\nconst top = stack[stack.length - 1];\nconsole.log(top + ' len:' + stack.length);",
    "options": [
      {
        "text": "30 len:3",
        "correct": true
      },
      {
        "text": "10 len:3",
        "correct": false
      },
      {
        "text": "30 len:2",
        "correct": false
      },
      {
        "text": "undefined len:3",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Peek hanya mengintip puncak (30) tanpa menghapus, jadi panjang stack tetap 3!",
    "workedExample": {
      "sampleCode": "let s = [5, 6]; console.log(s[s.length-1]);",
      "sampleAnswer": "6",
      "sampleLogic": "Puncak stack adalah 6!"
    }
  },
  {
    "id": "out-84",
    "lang": "Data Structure",
    "badge": "Stack Sequence",
    "questionEn": "What is the remaining stack state after multiple push/pops?",
    "code": "const stack = [];\nstack.push(1);\nstack.push(2);\nstack.pop();\nstack.push(3);\nconsole.log(stack.join('-'));",
    "options": [
      {
        "text": "1-3",
        "correct": true
      },
      {
        "text": "1-2-3",
        "correct": false
      },
      {
        "text": "3",
        "correct": false
      },
      {
        "text": "2-3",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Masuk 1 -> Masuk 2 -> Pop buang 2 -> Masuk 3. Tersisa 1 dan 3 = '1-3'!",
    "workedExample": {
      "sampleCode": "let s = []; s.push('X'); s.pop(); s.push('Y'); console.log(s[0]);",
      "sampleAnswer": "Y",
      "sampleLogic": "Tersisa Y!"
    }
  },
  {
    "id": "out-85",
    "lang": "Data Structure",
    "badge": "Queue Buffer Size",
    "questionEn": "What is the queue length after 3 enqueues and 1 dequeue?",
    "code": "const buffer = [];\nbuffer.push('msg1');\nbuffer.push('msg2');\nbuffer.push('msg3');\nbuffer.shift();\nconsole.log(buffer.length);",
    "options": [
      {
        "text": "2",
        "correct": true
      },
      {
        "text": "3",
        "correct": false
      },
      {
        "text": "1",
        "correct": false
      },
      {
        "text": "0",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: 3 masuk, 1 diproses keluar (shift). Sisa antrean = 2!",
    "workedExample": {
      "sampleCode": "let q = [1, 2]; q.shift(); console.log(q.length);",
      "sampleAnswer": "1",
      "sampleLogic": "2 berkurang 1 = 1!"
    }
  },
  {
    "id": "out-86",
    "lang": "Data Structure",
    "badge": "BST Ordering",
    "questionEn": "In a valid Binary Search Tree, where are values smaller than root located?",
    "code": "// Root value: 50\n// Value to insert: 30\n// Where does 30 go?",
    "options": [
      {
        "text": "Left child of root",
        "correct": true
      },
      {
        "text": "Right child of root",
        "correct": false
      },
      {
        "text": "Parent of root",
        "correct": false
      },
      {
        "text": "Replaces the root",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Di Binary Search Tree, angka lebih kecil selalu ditaruh di cabang KIRI (Left child)!",
    "workedExample": {
      "sampleCode": "Root 20, insert 10 -> Left",
      "sampleAnswer": "Left child of root",
      "sampleLogic": "10 < 20 ditaruh di kiri!"
    }
  },
  {
    "id": "out-87",
    "lang": "Data Structure",
    "badge": "Linked List Head",
    "questionEn": "What is the starting node of a Singly Linked List called?",
    "code": "const list = { value: 1, next: { value: 2, next: null } };\n// Entry node name?",
    "options": [
      {
        "text": "Head",
        "correct": true
      },
      {
        "text": "Tail",
        "correct": false
      },
      {
        "text": "Root",
        "correct": false
      },
      {
        "text": "Leaf",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Node pembuka paling depan rantai gerbong Linked List disebut Kepala ('Head')!",
    "workedExample": {
      "sampleCode": "First node = Head",
      "sampleAnswer": "Head",
      "sampleLogic": "Node pertama adalah Head!"
    }
  },
  {
    "id": "out-88",
    "lang": "Data Structure",
    "badge": "Array Unshift",
    "questionEn": "What does array.unshift() do?",
    "code": "const arr = [2, 3];\narr.unshift(1);\nconsole.log(arr[0]);",
    "options": [
      {
        "text": "1",
        "correct": true
      },
      {
        "text": "2",
        "correct": false
      },
      {
        "text": "3",
        "correct": false
      },
      {
        "text": "undefined",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: unshift menyelipkan elemen baru di barisan terdepan (indeks 0). Indeks 0 jadi 1!",
    "workedExample": {
      "sampleCode": "let a = ['B']; a.unshift('A'); console.log(a[0]);",
      "sampleAnswer": "A",
      "sampleLogic": "'A' diselipkan di depan!"
    }
  },
  {
    "id": "out-89",
    "lang": "Data Structure",
    "badge": "Hash Map Lookup",
    "questionEn": "What is the average time complexity of looking up a key in a Hash Map?",
    "code": "const map = new Map();\nmap.set('user101', 'Active');\n// Time complexity of map.get('user101')?",
    "options": [
      {
        "text": "O(1) Constant Time",
        "correct": true
      },
      {
        "text": "O(N) Linear Time",
        "correct": false
      },
      {
        "text": "O(log N) Logarithmic",
        "correct": false
      },
      {
        "text": "O(N^2)",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Hash Map punya loker instan. Sekali sebut kuncinya langsung dapat dalam O(1) konstan!",
    "workedExample": {
      "sampleCode": "Hash lookup = O(1)",
      "sampleAnswer": "O(1) Constant Time",
      "sampleLogic": "Pencarian hash map berkecepatan konstan O(1)!"
    }
  },
  {
    "id": "out-90",
    "lang": "Data Structure",
    "badge": "FIFO Order",
    "questionEn": "Which data structure follows FIFO order?",
    "code": "// Printer spooler job order",
    "options": [
      {
        "text": "Queue (FIFO)",
        "correct": true
      },
      {
        "text": "Stack (LIFO)",
        "correct": false
      },
      {
        "text": "Heap",
        "correct": false
      },
      {
        "text": "Graph",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Antrean cetak dokumen printer kantor memakai sistem Queue (First In First Out)!",
    "workedExample": {
      "sampleCode": "Printer spooler = Queue",
      "sampleAnswer": "Queue (FIFO)",
      "sampleLogic": "Antrean printer selalu Queue (FIFO)!"
    }
  },
  {
    "id": "out-91",
    "lang": "SQL Logic",
    "badge": "Filter Simulation",
    "questionEn": "Given salaries [5, 8, 12, 6], how many rows survive WHERE salary > 7?",
    "code": "// Table: Salaries [5, 8, 12, 6]\n// Query: WHERE salary > 7",
    "options": [
      {
        "text": "2 rows (8 and 12)",
        "correct": true
      },
      {
        "text": "3 rows",
        "correct": false
      },
      {
        "text": "1 row",
        "correct": false
      },
      {
        "text": "4 rows",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Dari 5, 8, 12, 6, yang > 7 adalah 8 dan 12 (ada 2 baris)!",
    "workedExample": {
      "sampleCode": "Filter > 4 on [1, 5, 10]",
      "sampleAnswer": "2 rows",
      "sampleLogic": "5 dan 10 lolos (2 baris)!"
    }
  },
  {
    "id": "out-92",
    "lang": "SQL Logic",
    "badge": "AND Logic Count",
    "questionEn": "Given dept=['IT','IT','HR'] and city=['JKT','BDG','JKT'], how many match dept='IT' AND city='JKT'?",
    "code": "// Row 1: IT, JKT\n// Row 2: IT, BDG\n// Row 3: HR, JKT\n// WHERE dept = 'IT' AND city = 'JKT'",
    "options": [
      {
        "text": "1 row",
        "correct": true
      },
      {
        "text": "2 rows",
        "correct": false
      },
      {
        "text": "3 rows",
        "correct": false
      },
      {
        "text": "0 rows",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Hanya Row 1 yang divisinya IT sekaligus kotanya JKT. Tepat 1 baris!",
    "workedExample": {
      "sampleCode": "Row 1: A,B. Row 2: A,C. WHERE col1='A' AND col2='B'",
      "sampleAnswer": "1 row",
      "sampleLogic": "Hanya 1 baris yang kedua syaratnya cocok!"
    }
  },
  {
    "id": "out-93",
    "lang": "SQL Logic",
    "badge": "OR Logic Count",
    "questionEn": "Given status=['Passed', 'Passed', 'Rejected'], how many match status='Passed' OR status='Rejected'?",
    "code": "// 3 rows: Passed, Passed, Rejected\n// WHERE status = 'Passed' OR status = 'Rejected'",
    "options": [
      {
        "text": "3 rows (All rows)",
        "correct": true
      },
      {
        "text": "2 rows",
        "correct": false
      },
      {
        "text": "1 row",
        "correct": false
      },
      {
        "text": "0 rows",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Semua baris berstatus Passed atau Rejected, jadi seluruh 3 baris lolos!",
    "workedExample": {
      "sampleCode": "WHERE v=1 OR v=2 on [1, 2]",
      "sampleAnswer": "All rows",
      "sampleLogic": "Semua baris memenuhi salah satu syarat!"
    }
  },
  {
    "id": "out-94",
    "lang": "SQL Logic",
    "badge": "LIMIT Count",
    "questionEn": "A table has 100 rows. Query executes ORDER BY id ASC LIMIT 5. How many rows?",
    "code": "// 100 total rows\n// SELECT * FROM Table ORDER BY id ASC LIMIT 5;",
    "options": [
      {
        "text": "5 rows",
        "correct": true
      },
      {
        "text": "100 rows",
        "correct": false
      },
      {
        "text": "10 rows",
        "correct": false
      },
      {
        "text": "1 row",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: LIMIT 5 memotong hasil tepat 5 baris teratas!",
    "workedExample": {
      "sampleCode": "SELECT TOP 3 * FROM Table",
      "sampleAnswer": "3 rows",
      "sampleLogic": "Dibatasi hanya 3 baris teratas!"
    }
  },
  {
    "id": "out-95",
    "lang": "SQL Logic",
    "badge": "COUNT(*) Nulls",
    "questionEn": "Does COUNT(*) include rows with NULL column values?",
    "code": "// Table has 4 rows. One row has salary = NULL.\n// Query: SELECT COUNT(*) FROM Employees;",
    "options": [
      {
        "text": "4 (COUNT(*) counts all physical rows)",
        "correct": true
      },
      {
        "text": "3 (Excludes null row)",
        "correct": false
      },
      {
        "text": "NULL",
        "correct": false
      },
      {
        "text": "Error",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: COUNT(*) menghitung total baris fisik tanpa memedulikan isi kolom, jadi tetap 4 baris!",
    "workedExample": {
      "sampleCode": "5 rows with 2 nulls -> COUNT(*)",
      "sampleAnswer": "5",
      "sampleLogic": "COUNT(*) menghitung seluruh baris fisik!"
    }
  },
  {
    "id": "out-96",
    "lang": "SQL Logic",
    "badge": "GROUP BY Rows",
    "questionEn": "Table has categories: ['IT','IT','IT','HR','HR']. How many rows does GROUP BY category return?",
    "code": "// SELECT category, COUNT(*) FROM Dept GROUP BY category;",
    "options": [
      {
        "text": "2 rows (One for IT, one for HR)",
        "correct": true
      },
      {
        "text": "5 rows",
        "correct": false
      },
      {
        "text": "3 rows",
        "correct": false
      },
      {
        "text": "1 row",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Ada 2 kelompok kategori unik ('IT' dan 'HR'), jadi tabel hasil memiliki 2 baris!",
    "workedExample": {
      "sampleCode": "['A', 'A', 'B'] GROUP BY col",
      "sampleAnswer": "2 rows",
      "sampleLogic": "Ada 2 kategori unik!"
    }
  },
  {
    "id": "out-97",
    "lang": "SQL Logic",
    "badge": "INNER JOIN Rows",
    "questionEn": "Table A has IDs [1, 2, 3]. Table B has IDs [2, 3, 4]. How many rows in INNER JOIN on ID?",
    "code": "// SELECT * FROM A INNER JOIN B ON A.id = B.id;",
    "options": [
      {
        "text": "2 rows (IDs 2 and 3 match)",
        "correct": true
      },
      {
        "text": "3 rows",
        "correct": false
      },
      {
        "text": "4 rows",
        "correct": false
      },
      {
        "text": "6 rows",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: INNER JOIN hanya mengambil yang cocok di kedua tabel. ID yang cocok adalah 2 dan 3 (2 baris)!",
    "workedExample": {
      "sampleCode": "A:[1, 2], B:[2, 3] -> Match 2 only",
      "sampleAnswer": "1 row",
      "sampleLogic": "Hanya ID 2 yang cocok!"
    }
  },
  {
    "id": "out-98",
    "lang": "SQL Logic",
    "badge": "HAVING Filter",
    "questionEn": "Groups have counts: IT=3, HR=1, Finance=4. Query has HAVING COUNT(*) > 2. How many groups survive?",
    "code": "// HAVING COUNT(*) > 2",
    "options": [
      {
        "text": "2 groups (IT and Finance)",
        "correct": true
      },
      {
        "text": "3 groups",
        "correct": false
      },
      {
        "text": "1 group",
        "correct": false
      },
      {
        "text": "0 groups",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: Kelompok yang jumlahnya > 2 adalah IT (3) dan Finance (4). Tersisa 2 grup!",
    "workedExample": {
      "sampleCode": "Counts: 5, 2, 1. HAVING > 2 -> [5]",
      "sampleAnswer": "1 group",
      "sampleLogic": "Hanya grup hitungan 5 yang lolos!"
    }
  },
  {
    "id": "out-99",
    "lang": "SQL Logic",
    "badge": "LIKE Wildcard",
    "questionEn": "Which word matches LIKE 'A%': 'APPLE', 'BANANA', or 'CAT'?",
    "code": "// WHERE word LIKE 'A%'",
    "options": [
      {
        "text": "APPLE only (Starts with A)",
        "correct": true
      },
      {
        "text": "APPLE and BANANA",
        "correct": false
      },
      {
        "text": "All words",
        "correct": false
      },
      {
        "text": "None",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: 'A%' mewajibkan huruf pertama di depan adalah 'A'. Hanya 'APPLE' yang cocok!",
    "workedExample": {
      "sampleCode": "'JAVA', 'JS' LIKE 'J%'",
      "sampleAnswer": "Starts with J",
      "sampleLogic": "Keduanya diawali huruf J!"
    }
  },
  {
    "id": "out-100",
    "lang": "SQL Logic",
    "badge": "DISTINCT Filter",
    "questionEn": "Column has values: ['IT', 'IT', 'Finance', 'IT']. What does SELECT DISTINCT return?",
    "code": "// SELECT DISTINCT department FROM Employees;",
    "options": [
      {
        "text": "2 unique values ('IT' and 'Finance')",
        "correct": true
      },
      {
        "text": "4 values",
        "correct": false
      },
      {
        "text": "1 value",
        "correct": false
      },
      {
        "text": "3 values",
        "correct": false
      }
    ],
    "babyExplanation": "🍼 Nalar Bayi: DISTINCT membuang duplikat, menyisakan 2 nilai unik: 'IT' dan 'Finance'!",
    "workedExample": {
      "sampleCode": "['Red', 'Red', 'Blue'] -> DISTINCT",
      "sampleAnswer": "2 unique values",
      "sampleLogic": "Hanya 'Red' dan 'Blue' yang tersisa!"
    }
  }
];

// Render Tabel HTML Helper
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
      html += `<td>${row[col] !== undefined && row[col] !== null ? row[col] : 'NULL'}</td>`;
    });
    html += `</tr>`;
  });

  html += `</tbody></table></div>`;
  return html;
}
