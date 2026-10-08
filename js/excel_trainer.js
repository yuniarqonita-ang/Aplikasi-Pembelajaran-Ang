/* ===================================================================
   EXCEL_TRAINER.JS - 105 Tantangan Rumus Excel & Statistik Realtime
   Diadaptasi langsung dari 'Function Statistics in Excel.xlsx' Dosen
   dan Kasus Nyata Perkantoran (Penjualan, HRD, Nilai, Finansial, Gudang)
   Dilengkapi: CONTOH SOAL & JAWABAN BENAR DULU + Nalar Bayi Kodi
   =================================================================== */

const excelChallenges = [
  {
    "id": "xl-1",
    "category": "1. Logika Bisnis & Kondisional",
    "title": "Tantangan 1: Cek Kelulusan Evaluasi Magang (IF)",
    "scenario": "HRD PT Digital Solusindo mengevaluasi masa percobaan karyawan magang. Jika skor ujian di sel B2 >= 75, maka statusnya 'LULUS', jika di bawah 75 maka 'REMIDI'.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Nama Karyawan",
        "B": "Skor Ujian",
        "C": "Status"
      },
      {
        "row": 2,
        "A": "Budi Santoso",
        "B": 82,
        "C": ""
      },
      {
        "row": 3,
        "A": "Dewi Lestari",
        "B": 68,
        "C": ""
      },
      {
        "row": 4,
        "A": "Rian Hidayat",
        "B": 90,
        "C": ""
      }
    ],
    "targetCell": "C2",
    "instruction": "Tulis rumus di sel C2 untuk menentukan status Budi Santoso (>=75 'LULUS', jika tidak 'REMIDI').",
    "babyHint": "🍼 Bahasa Bayi: Pakai =IF(B2>=75, \"LULUS\", \"REMIDI\"). Rumus IF seperti satpam penyeleksi!",
    "starterFormula": "=IF(",
    "quickChips": [
      "=IF(",
      "B2>=75",
      "\"LULUS\"",
      "\"REMIDI\"",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=IF(B2>=75,\"LULUS\",\"REMIDI\")",
      "=IF(B2>=75;\"LULUS\";\"REMIDI\")",
      "=IF(B2>=75, \"LULUS\", \"REMIDI\")",
      "=IF(B2>=75; \"LULUS\"; \"REMIDI\")"
    ],
    "expectedValue": "LULUS",
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Syarat KKM Ujian Sekolah",
      "kasusSerupa": "Tabel Nilai Siswa: Sel B2 bernilai 78. Syarat KKM minimal 70. Jika nilai >= 70 tulis 'LULUS', jika tidak 'GAGAL'.",
      "rumusContoh": "=IF(B2>=70, \"LULUS\", \"GAGAL\")",
      "nalarBayi": "Satpam Excel mengecek sel B2 (78). Karena 78 >= 70 itu BENAR (TRUE), Excel langsung memilih opsi pertama yaitu 'LULUS'!"
    }
  },
  {
    "id": "xl-2",
    "category": "1. Logika Bisnis & Kondisional",
    "title": "Tantangan 2: Ongkos Kirim Gratis Khusus Member VIP (IF)",
    "scenario": "Minimarket Online memberikan promo: Jika tipe pelanggan di sel B2 adalah 'VIP', ongkir di sel C2 adalah 0 (Gratis), selain itu kena tarif normal 15000.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Pelanggan",
        "B": "Tipe Member",
        "C": "Ongkir (Rp)"
      },
      {
        "row": 2,
        "A": "Siti Rahma",
        "B": "VIP",
        "C": ""
      },
      {
        "row": 3,
        "A": "Agus Salim",
        "B": "Reguler",
        "C": ""
      },
      {
        "row": 4,
        "A": "Rina Marlina",
        "B": "VIP",
        "C": ""
      }
    ],
    "targetCell": "C2",
    "instruction": "Tulis rumus di sel C2: Jika B2='VIP' maka 0, jika tidak maka 15000.",
    "babyHint": "🍼 Bahasa Bayi: =IF(B2=\"VIP\", 0, 15000). Teks VIP wajib dibungkus petik dua!",
    "starterFormula": "=IF(",
    "quickChips": [
      "=IF(",
      "B2=\"VIP\"",
      "0",
      "15000",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=IF(B2=\"VIP\",0,15000)",
      "=IF(B2=\"VIP\";0;15000)",
      "=IF(B2=\"VIP\", 0, 15000)",
      "=IF(B2=\"VIP\"; 0; 15000)"
    ],
    "expectedValue": 0,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Diskon Khusus Mahasiswa",
      "kasusSerupa": "Tabel Tiket Kereta: Sel B2 berisi 'Mahasiswa'. Jika B2='Mahasiswa' dapat potongan 5000, jika bukan maka 0.",
      "rumusContoh": "=IF(B2=\"Mahasiswa\", 5000, 0)",
      "nalarBayi": "Excel memeriksa apakah isi teks di B2 persis sama dengan 'Mahasiswa'. Jika cocok bernilai TRUE dan output 5000!"
    }
  },
  {
    "id": "xl-3",
    "category": "1. Logika Bisnis & Kondisional",
    "title": "Tantangan 3: Bonus Omset Sales di Atas 10 Juta (IF)",
    "scenario": "Manajer Toko Komputer memberi bonus 5% dari total omset bagi sales yang mencapai penjualan di atas 10.000.000 (C2*0.05). Jika tidak, bonusnya 0.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Sales",
        "B": "Kota",
        "C": "Omset (Rp)",
        "D": "Bonus (Rp)"
      },
      {
        "row": 2,
        "A": "Hendra",
        "B": "Jakarta",
        "C": 15000000,
        "D": ""
      },
      {
        "row": 3,
        "A": "Nurul",
        "B": "Bandung",
        "C": 8000000,
        "D": ""
      },
      {
        "row": 4,
        "A": "Dimas",
        "B": "Surabaya",
        "C": 20000000,
        "D": ""
      }
    ],
    "targetCell": "D2",
    "instruction": "Hitung bonus Hendra di D2: Jika C2 > 10000000 maka dapat bonus C2*0.05, jika tidak maka 0.",
    "babyHint": "🍼 Bahasa Bayi: =IF(C2>10000000, C2*0.05, 0). Kalikan 0.05 untuk menghitung 5%!",
    "starterFormula": "=IF(",
    "quickChips": [
      "=IF(",
      "C2>10000000",
      "C2*0.05",
      "0",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=IF(C2>10000000,C2*0.05,0)",
      "=IF(C2>10000000;C2*0.05;0)",
      "=IF(C2>10000000, C2*0.05, 0)",
      "=IF(C2>10000000; C2*0.05; 0)",
      "=IF(C2>10000000,C2*5%,0)"
    ],
    "expectedValue": 750000,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Bonus Penjualan Target 5 Juta",
      "kasusSerupa": "Tabel Bonus Toko: Sel B2 bernilai 6.000.000. Jika B2 > 5000000 beri komisi B2*0.1 (10%), jika tidak beri 0.",
      "rumusContoh": "=IF(B2>5000000, B2*0.1, 0)",
      "nalarBayi": "Karena omset 6 juta lebih besar dari 5 juta, Excel menghitung 6.000.000 * 0.1 = 600.000!"
    }
  },
  {
    "id": "xl-4",
    "category": "1. Logika Bisnis & Kondisional",
    "title": "Tantangan 4: Predikat Nilai Bersarang / Nested IF (IF Bertingkat)",
    "scenario": "Sistem akademik menentukan grade nilai mahasiswa: Jika nilai di sel B2 >= 85 predikatnya 'A', jika >= 70 predikatnya 'B', selain itu 'C'.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Mahasiswa",
        "B": "Nilai Akhir",
        "C": "Grade"
      },
      {
        "row": 2,
        "A": "Fajar Nugraha",
        "B": 88,
        "C": ""
      },
      {
        "row": 3,
        "A": "Lina Kusuma",
        "B": 74,
        "C": ""
      },
      {
        "row": 4,
        "A": "Teguh Santoso",
        "B": 55,
        "C": ""
      }
    ],
    "targetCell": "C2",
    "instruction": "Tulis rumus nested IF di sel C2 untuk menentukan grade Fajar (>=85 'A', >=70 'B', selain itu 'C').",
    "babyHint": "🍼 Bahasa Bayi: =IF(B2>=85, \"A\", IF(B2>=70, \"B\", \"C\")). IF di dalam IF seperti pintu gerbang berlapis!",
    "starterFormula": "=IF(",
    "quickChips": [
      "=IF(",
      "B2>=85",
      "\"A\"",
      "IF(B2>=70",
      "\"B\"",
      "\"C\"",
      "))",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=IF(B2>=85,\"A\",IF(B2>=70,\"B\",\"C\"))",
      "=IF(B2>=85;\"A\";IF(B2>=70;\"B\";\"C\"))",
      "=IF(B2>=85, \"A\", IF(B2>=70, \"B\", \"C\"))",
      "=IF(B2>=85; \"A\"; IF(B2>=70; \"B\"; \"C\"))"
    ],
    "expectedValue": "A",
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Kategori Berat Paket",
      "kasusSerupa": "Tabel Ekspedisi: Sel B2 bernilai 12 kg. Jika B2>20 'BERAT', jika B2>10 'SEDANG', jika tidak 'RINGAN'.",
      "rumusContoh": "=IF(B2>20, \"BERAT\", IF(B2>10, \"SEDANG\", \"RINGAN\"))",
      "nalarBayi": "Pintu pertama cek >20 (SALAH). Masuk ke pintu kedua cek >10 (BENAR). Excel langsung memilih 'SEDANG'!"
    }
  },
  {
    "id": "xl-5",
    "category": "1. Logika Bisnis & Kondisional",
    "title": "Tantangan 5: Status Stok Gudang dengan Fungsi Modern (IFS)",
    "scenario": "Bagian logistik gudang mengecek sisa stok di sel B2: Jika B2<=5 statusnya 'KRITIS', jika B2<=15 statusnya 'MENIPIS', jika B2>15 statusnya 'AMAN'.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Nama Barang",
        "B": "Sisa Stok",
        "C": "Status Logistik"
      },
      {
        "row": 2,
        "A": "SSD 512GB",
        "B": 4,
        "C": ""
      },
      {
        "row": 3,
        "A": "RAM 8GB DDR4",
        "B": 12,
        "C": ""
      },
      {
        "row": 4,
        "A": "Kabel LAN 5M",
        "B": 45,
        "C": ""
      }
    ],
    "targetCell": "C2",
    "instruction": "Gunakan rumus =IFS(...) di C2: B2<=5 'KRITIS', B2<=15 'MENIPIS', B2>15 'AMAN'.",
    "babyHint": "🍼 Bahasa Bayi: =IFS(B2<=5, \"KRITIS\", B2<=15, \"MENIPIS\", B2>15, \"AMAN\"). Fungsi IFS lebih rapi tanpa tumpukan tanda kurung!",
    "starterFormula": "=IFS(",
    "quickChips": [
      "=IFS(",
      "B2<=5",
      "\"KRITIS\"",
      "B2<=15",
      "\"MENIPIS\"",
      "B2>15",
      "\"AMAN\"",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=IFS(B2<=5,\"KRITIS\",B2<=15,\"MENIPIS\",B2>15,\"AMAN\")",
      "=IFS(B2<=5;\"KRITIS\";B2<=15;\"MENIPIS\";B2>15;\"AMAN\")",
      "=IFS(B2<=5, \"KRITIS\", B2<=15, \"MENIPIS\", B2>15, \"AMAN\")"
    ],
    "expectedValue": "KRITIS",
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Kategori Umur Balita",
      "kasusSerupa": "Tabel Posyandu: Usia di B2 bernilai 2 tahun. Jika B2<=1 'BAYI', jika B2<=3 'BATITA', jika B2<=5 'BALITA'.",
      "rumusContoh": "=IFS(B2<=1, \"BAYI\", B2<=3, \"BATITA\", B2<=5, \"BALITA\")",
      "nalarBayi": "Fungsi IFS memeriksa syarat secara berurutan. Karena 2 <= 3 terpenuhi, ia langsung mengambil 'BATITA'!"
    }
  },
  {
    "id": "xl-6",
    "category": "1. Logika Bisnis & Kondisional",
    "title": "Tantangan 6: Bonus Tim dengan Dua Syarat Sekaligus (AND di dalam IF)",
    "scenario": "Manajer memberikan bonus ekstra 2.000.000 jika Omset (B2) > 50.000.000 DAN Rating Kepuasan (C2) >= 4.5. Jika salah satu syarat tidak terpenuhi, bonus hanya 500.000.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Nama Tim Cabang",
        "B": "Omset (Rp)",
        "C": "Rating CS",
        "D": "Bonus Tim (Rp)"
      },
      {
        "row": 2,
        "A": "Cabang Thamrin",
        "B": 65000000,
        "C": 4.8,
        "D": ""
      },
      {
        "row": 3,
        "A": "Cabang Dago",
        "B": 45000000,
        "C": 4.9,
        "D": ""
      },
      {
        "row": 4,
        "A": "Cabang Tunjungan",
        "B": 70000000,
        "C": 4.1,
        "D": ""
      }
    ],
    "targetCell": "D2",
    "instruction": "Tulis rumus di sel D2: Jika B2>50000000 DAN C2>=4.5 maka 2000000, jika tidak 500000.",
    "babyHint": "🍼 Bahasa Bayi: =IF(AND(B2>50000000, C2>=4.5), 2000000, 500000). AND artinya SEMUA syarat wajib lulus!",
    "starterFormula": "=IF(AND(",
    "quickChips": [
      "=IF(AND(",
      "B2>50000000",
      "C2>=4.5",
      ")",
      "2000000",
      "500000",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=IF(AND(B2>50000000,C2>=4.5),2000000,500000)",
      "=IF(AND(B2>50000000;C2>=4.5);2000000;500000)",
      "=IF(AND(B2>50000000, C2>=4.5), 2000000, 500000)"
    ],
    "expectedValue": 2000000,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Syarat Beasiswa Kampus",
      "kasusSerupa": "Tabel Seleksi: IPK di B2 (3.8) dan Kehadiran di C2 (95%). Syarat lolos: IPK>=3.5 DAN Kehadiran>=90%.",
      "rumusContoh": "=IF(AND(B2>=3.5, C2>=90), \"LOLOS\", \"GAGAL\")",
      "nalarBayi": "Karena kedua syarat sama-sama bernilai BENAR (TRUE), fungsi AND mengizinkan output 'LOLOS'!"
    }
  },
  {
    "id": "xl-7",
    "category": "1. Logika Bisnis & Kondisional",
    "title": "Tantangan 7: Diskon Belanja Promo Akhir Tahun (OR di dalam IF)",
    "scenario": "Kasir Supermarket memberi diskon promo: Jika pembeli adalah Member (B2='Ya') ATAU Total Belanja (C2) >= 500000, maka statusnya 'DAPAT DISKON', jika tidak 'TIDAK DAPAT'.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Pelanggan",
        "B": "Member",
        "C": "Belanja (Rp)",
        "D": "Status Diskon"
      },
      {
        "row": 2,
        "A": "Anisa Putri",
        "B": "Tidak",
        "C": 650000,
        "D": ""
      },
      {
        "row": 3,
        "A": "Bambang Tri",
        "B": "Ya",
        "C": 150000,
        "D": ""
      },
      {
        "row": 4,
        "A": "Cahyo Utomo",
        "B": "Tidak",
        "C": 200000,
        "D": ""
      }
    ],
    "targetCell": "D2",
    "instruction": "Tulis rumus di sel D2: Jika B2='Ya' ATAU C2>=500000 maka 'DAPAT DISKON', jika tidak 'TIDAK DAPAT'.",
    "babyHint": "🍼 Bahasa Bayi: =IF(OR(B2=\"Ya\", C2>=500000), \"DAPAT DISKON\", \"TIDAK DAPAT\"). Cukup SALAH SATU syarat terpenuhi!",
    "starterFormula": "=IF(OR(",
    "quickChips": [
      "=IF(OR(",
      "B2=\"Ya\"",
      "C2>=500000",
      ")",
      "\"DAPAT DISKON\"",
      "\"TIDAK DAPAT\"",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=IF(OR(B2=\"Ya\",C2>=500000),\"DAPAT DISKON\",\"TIDAK DAPAT\")",
      "=IF(OR(B2=\"Ya\";C2>=500000);\"DAPAT DISKON\";\"TIDAK DAPAT\")",
      "=IF(OR(B2=\"Ya\", C2>=500000), \"DAPAT DISKON\", \"TIDAK DAPAT\")"
    ],
    "expectedValue": "DAPAT DISKON",
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Akses Parkir Gratis",
      "kasusSerupa": "Tabel Mall: Punya Kupon di B2 ('Tidak') ATAU Belanja di C2 (300000). Syarat gratis parkir: Kupon='Ya' ATAU Belanja>=200000.",
      "rumusContoh": "=IF(OR(B2=\"Ya\", C2>=200000), \"GRATIS\", \"BAYAR\")",
      "nalarBayi": "Meskipun kupon 'Tidak', karena belanja 300rb >= 200rb, gerbang OR langsung terbuka dan memberi 'GRATIS'!"
    }
  },
  {
    "id": "xl-8",
    "category": "1. Logika Bisnis & Kondisional",
    "title": "Tantangan 8: Tangani Pembagian Nol dengan Aman (IFERROR)",
    "scenario": "Analis Keuangan menghitung rasio laba per transaksi di sel D2 (=B2/C2). Jika terjadi pembagian angka nol (error #DIV/0!), tampilkan angka 0 bukan error jelek.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Nama Produk",
        "B": "Total Omset",
        "C": "Jml Transaksi",
        "D": "Rasio Per Tx"
      },
      {
        "row": 2,
        "A": "Kopi Susu Gula Aren",
        "B": 1500000,
        "C": 50,
        "D": ""
      },
      {
        "row": 3,
        "A": "Matcha Latte",
        "B": 800000,
        "C": 0,
        "D": ""
      },
      {
        "row": 4,
        "A": "Roti Bakar Keju",
        "B": 450000,
        "C": 15,
        "D": ""
      }
    ],
    "targetCell": "D2",
    "instruction": "Tulis rumus di sel D2: Tangani pembagian B2/C2 dengan rumus IFERROR agar aman dari #DIV/0!.",
    "babyHint": "🍼 Bahasa Bayi: =IFERROR(B2/C2, 0). IFERROR adalah payung pelindung kalau rumusnya error!",
    "starterFormula": "=IFERROR(",
    "quickChips": [
      "=IFERROR(",
      "B2/C2",
      "0",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=IFERROR(B2/C2,0)",
      "=IFERROR(B2/C2;0)",
      "=IFERROR(B2/C2, 0)",
      "=IFERROR(B2/C2; 0)"
    ],
    "expectedValue": 30000,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Menghitung Harga Rata-rata per Box",
      "kasusSerupa": "Tabel Gudang: Total biaya B2 (200000) dibagi jumlah box C2 (0). Rumus: =IFERROR(B2/C2, 0).",
      "rumusContoh": "=IFERROR(B2/C2, 0)",
      "nalarBayi": "Jika C2 adalah 0 yang normalnya membuat Excel panik dan keluar #DIV/0!, IFERROR langsung menyulapnya jadi angka 0!"
    }
  },
  {
    "id": "xl-9",
    "category": "1. Logika Bisnis & Kondisional",
    "title": "Tantangan 9: Saring Barang Bukan Retur (NOT di dalam IF)",
    "scenario": "Bagian ekspedisi memfilter paket: Jika status barang di sel B2 BUKAN 'Retur', maka proses pengiriman 'PROSES', jika retur maka 'TUNDA'.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "No Resi",
        "B": "Status QC",
        "C": "Tindakan Ekspedisi"
      },
      {
        "row": 2,
        "A": "EXP-101",
        "B": "Lolos",
        "C": ""
      },
      {
        "row": 3,
        "A": "EXP-102",
        "B": "Retur",
        "C": ""
      },
      {
        "row": 4,
        "A": "EXP-103",
        "B": "Lolos",
        "C": ""
      }
    ],
    "targetCell": "C2",
    "instruction": "Tulis rumus di sel C2: Gunakan fungsi NOT untuk mengecek apakah B2 bukan 'Retur' (jika ya 'PROSES', jika tidak 'TUNDA').",
    "babyHint": "🍼 Bahasa Bayi: =IF(NOT(B2=\"Retur\"), \"PROSES\", \"TUNDA\"). NOT artinya membalik logika!",
    "starterFormula": "=IF(NOT(",
    "quickChips": [
      "=IF(NOT(",
      "B2=\"Retur\"",
      ")",
      "\"PROSES\"",
      "\"TUNDA\"",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=IF(NOT(B2=\"Retur\"),\"PROSES\",\"TUNDA\")",
      "=IF(NOT(B2=\"Retur\");\"PROSES\";\"TUNDA\")",
      "=IF(NOT(B2=\"Retur\"), \"PROSES\", \"TUNDA\")"
    ],
    "expectedValue": "PROSES",
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Filter Karyawan Bukan Cuti",
      "kasusSerupa": "Tabel Kantor: Status di B2 adalah 'Hadir'. Jika NOT(B2='Cuti') maka 'Diberi Tugas', selain itu 'Libur'.",
      "rumusContoh": "=IF(NOT(B2=\"Cuti\"), \"Diberi Tugas\", \"Libur\")",
      "nalarBayi": "Karena status B2 'Hadir' (bukan cuti), NOT mengubahnya jadi TRUE sehingga karyawan 'Diberi Tugas'!"
    }
  },
  {
    "id": "xl-10",
    "category": "1. Logika Bisnis & Kondisional",
    "title": "Tantangan 10: Cek Masa Garansi Berdasarkan Tanggal Batas (IF)",
    "scenario": "Service Center mengecek tanggal servis di sel B2 terhadap batas garansi di sel C2. Jika B2 <= C2 maka 'GARANSI AKTIF', jika lewat batas maka 'HABIS'.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Serial Number",
        "B": "Tgl Servis",
        "C": "Batas Garansi",
        "D": "Status Garansi"
      },
      {
        "row": 2,
        "A": "SN-8821",
        "B": "2024-05-10",
        "C": "2024-12-31",
        "D": ""
      },
      {
        "row": 3,
        "A": "SN-9910",
        "B": "2025-02-01",
        "C": "2024-12-31",
        "D": ""
      },
      {
        "row": 4,
        "A": "SN-7733",
        "B": "2024-08-15",
        "C": "2024-12-31",
        "D": ""
      }
    ],
    "targetCell": "D2",
    "instruction": "Tulis rumus di sel D2: Jika B2 <= C2 maka 'GARANSI AKTIF', jika tidak 'HABIS'.",
    "babyHint": "🍼 Bahasa Bayi: =IF(B2<=C2, \"GARANSI AKTIF\", \"HABIS\"). Tanggal di Excel bisa langsung dibandingkan!",
    "starterFormula": "=IF(",
    "quickChips": [
      "=IF(",
      "B2<=C2",
      "\"GARANSI AKTIF\"",
      "\"HABIS\"",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=IF(B2<=C2,\"GARANSI AKTIF\",\"HABIS\")",
      "=IF(B2<=C2;\"GARANSI AKTIF\";\"HABIS\")",
      "=IF(B2<=C2, \"GARANSI AKTIF\", \"HABIS\")"
    ],
    "expectedValue": "GARANSI AKTIF",
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Tanggal Kadaluarsa Roti",
      "kasusSerupa": "Tabel Toko Roti: Tgl Hari Ini di B2, Tgl Kadaluarsa di C2. Jika B2<=C2 'LAYAK JUAL', jika lewat 'BUANG'.",
      "rumusContoh": "=IF(B2<=C2, \"LAYAK JUAL\", \"BUANG\")",
      "nalarBayi": "Karena tanggal penjualan masih sebelum tanggal kedaluwarsa, roti masih aman dan berstatus 'LAYAK JUAL'!"
    }
  },
  {
    "id": "xl-11",
    "category": "1. Logika Bisnis & Kondisional",
    "title": "Tantangan 11: Konversi Kode Cabang dengan Fungsi Pilihan (SWITCH)",
    "scenario": "Pusat Logistik menerima kode cabang angka di B2 (1, 2, 3). Ubah kode menjadi nama kota: 1='Jakarta', 2='Surabaya', 3='Medan', jika lain 'Lainnya'.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "ID Kurir",
        "B": "Kode Wilayah",
        "C": "Nama Kota Cabang"
      },
      {
        "row": 2,
        "A": "KUR-01",
        "B": 1,
        "C": ""
      },
      {
        "row": 3,
        "A": "KUR-02",
        "B": 2,
        "C": ""
      },
      {
        "row": 4,
        "A": "KUR-03",
        "B": 3,
        "C": ""
      }
    ],
    "targetCell": "C2",
    "instruction": "Gunakan fungsi =SWITCH(B2, 1, 'Jakarta', 2, 'Surabaya', 3, 'Medan', 'Lainnya') di sel C2.",
    "babyHint": "🍼 Bahasa Bayi: =SWITCH(B2, 1, \"Jakarta\", 2, \"Surabaya\", 3, \"Medan\", \"Lainnya\"). Seperti saklar listrik!",
    "starterFormula": "=SWITCH(",
    "quickChips": [
      "=SWITCH(",
      "B2",
      "1",
      "\"Jakarta\"",
      "2",
      "\"Surabaya\"",
      "3",
      "\"Medan\"",
      "\"Lainnya\"",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=SWITCH(B2,1,\"Jakarta\",2,\"Surabaya\",3,\"Medan\",\"Lainnya\")",
      "=SWITCH(B2;1;\"Jakarta\";2;\"Surabaya\";3;\"Medan\";\"Lainnya\")",
      "=SWITCH(B2, 1, \"Jakarta\", 2, \"Surabaya\", 3, \"Medan\", \"Lainnya\")"
    ],
    "expectedValue": "Jakarta",
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Konversi Hari Kerja",
      "kasusSerupa": "Tabel Hari: Kode hari di B2 bernilai 1. Rumus: =SWITCH(B2, 1, 'Senin', 2, 'Selasa', 'Lainnya').",
      "rumusContoh": "=SWITCH(B2, 1, \"Senin\", 2, \"Selasa\", \"Lainnya\")",
      "nalarBayi": "Excel mencocokkan angka 1 dengan label pertamanya yaitu 'Senin' tanpa perlu tumpukan IF berulang!"
    }
  },
  {
    "id": "xl-12",
    "category": "2. Statistik Dasar & Agregasi",
    "title": "Tantangan 12: Menghitung Total Omset Mingguan Toko Roti (SUM)",
    "scenario": "Kasir Toko Roti Berkah merekap omset penjualan harian dari hari Senin sampai Minggu (rentang sel B2 sampai B8). Hitung total omset seminggu di sel B9.",
    "tableHeaders": [
      "A",
      "B"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Hari",
        "B": "Omset (Rp)"
      },
      {
        "row": 2,
        "A": "Senin",
        "B": 1200000
      },
      {
        "row": 3,
        "A": "Selasa",
        "B": 1450000
      },
      {
        "row": 4,
        "A": "Rabu",
        "B": 1300000
      },
      {
        "row": 5,
        "A": "Kamis",
        "B": 1600000
      },
      {
        "row": 6,
        "A": "Jumat",
        "B": 1900000
      },
      {
        "row": 7,
        "A": "Sabtu",
        "B": 2800000
      },
      {
        "row": 8,
        "A": "Minggu",
        "B": 3100000
      },
      {
        "row": 9,
        "A": "Total Omset",
        "B": ""
      }
    ],
    "targetCell": "B9",
    "instruction": "Tulis rumus penjumlahan total omset dari sel B2 sampai B8 di sel B9.",
    "babyHint": "🍼 Bahasa Bayi: =SUM(B2:B8). SUM itu singkatan dari Summary atau penjumlahan total rentang!",
    "starterFormula": "=SUM(",
    "quickChips": [
      "=SUM(",
      "B2:B8",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=SUM(B2:B8)",
      "=SUM(B2:B8)"
    ],
    "expectedValue": 13350000,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Menghitung Total Pengeluaran Uang Kas",
      "kasusSerupa": "Tabel Kas Kelas: Sel B2 berisi 50000, B3 berisi 75000, B4 berisi 100000. Rumus: =SUM(B2:B4).",
      "rumusContoh": "=SUM(B2:B4)",
      "nalarBayi": "Excel menjumlahkan 50000 + 75000 + 100000 = 225000 secara otomatis dalam sekejap!"
    }
  },
  {
    "id": "xl-13",
    "category": "2. Statistik Dasar & Agregasi",
    "title": "Tantangan 13: Menghitung Rata-rata Skor Karyawan (AVERAGE)",
    "scenario": "Workbook Dosen: Sheet 2 'Average'. Dosen menghitung rata-rata nilai evaluasi tim dari rentang sel A2 sampai A7 di sel D8.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data Nilai",
        "B": "",
        "C": "",
        "D": "Hasil Rata-rata"
      },
      {
        "row": 2,
        "A": 10,
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 3,
        "A": 8,
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 4,
        "A": 9,
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 5,
        "A": 28,
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 6,
        "A": 4,
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 7,
        "A": 12,
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 8,
        "A": "Rata-rata",
        "B": "",
        "C": "",
        "D": ""
      }
    ],
    "targetCell": "D8",
    "instruction": "Ketik rumus rata-rata dari sel A2 sampai A7 di sel D8 sesuai panduan dosen.",
    "babyHint": "🍼 Bahasa Bayi: =AVERAGE(A2:A7). Rata-rata adalah jumlah semua angka dibagi banyaknya angka!",
    "starterFormula": "=AVERAGE(",
    "quickChips": [
      "=AVERAGE(",
      "A2:A7",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=AVERAGE(A2:A7)",
      "=AVERAGE(A2:A7)"
    ],
    "expectedValue": 11.833333333333334,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Rata-rata Tinggi Badan Balita",
      "kasusSerupa": "Tabel Posyandu: Sel A2 (80), A3 (90), A4 (85). Rumus: =AVERAGE(A2:A4).",
      "rumusContoh": "=AVERAGE(A2:A4)",
      "nalarBayi": "Excel menjumlahkan (80+90+85)=255 lalu membaginya dengan 3 balita sehingga didapat hasil 85!"
    }
  },
  {
    "id": "xl-14",
    "category": "2. Statistik Dasar & Agregasi",
    "title": "Tantangan 14: Rata-rata Termasuk Nilai Teks & Logika (AVERAGEA)",
    "scenario": "Workbook Dosen: Sheet 3 'Averagea'. Evaluasi kinerja memiliki sel berisi teks 'Kosong'. Fungsi AVERAGEA menghitung teks sebagai nilai 0.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data",
        "B": "",
        "C": "",
        "D": "Hasil AVERAGEA"
      },
      {
        "row": 2,
        "A": 10,
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 3,
        "A": 8,
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 4,
        "A": "Kosong",
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 5,
        "A": 28,
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 6,
        "A": 4,
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 7,
        "A": 12,
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 8,
        "A": "Hasil Evaluasi",
        "B": "",
        "C": "",
        "D": ""
      }
    ],
    "targetCell": "D8",
    "instruction": "Tulis rumus =AVERAGEA(A2:A7) di sel D8 untuk menghitung rata-rata seluruh data termasuk teks.",
    "babyHint": "🍼 Bahasa Bayi: =AVERAGEA(A2:A7). Huruf 'A' di belakang artinya All (semua termasuk teks bernilai 0)!",
    "starterFormula": "=AVERAGEA(",
    "quickChips": [
      "=AVERAGEA(",
      "A2:A7",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=AVERAGEA(A2:A7)",
      "=AVERAGEA(A2:A7)"
    ],
    "expectedValue": 10.333333333333334,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Nilai Tugas yang Tidak Dikumpulkan",
      "kasusSerupa": "Tabel Kelas: Mahasiswa A (80), Mahasiswa B ('Alpa'). =AVERAGEA(A2:A3).",
      "rumusContoh": "=AVERAGEA(A2:A3)",
      "nalarBayi": "'Alpa' dihitung sebagai 0, sehingga rata-rata adalah (80 + 0) / 2 = 40!"
    }
  },
  {
    "id": "xl-15",
    "category": "2. Statistik Dasar & Agregasi",
    "title": "Tantangan 15: Menghitung Jumlah Data Angka Saja (COUNT)",
    "scenario": "Workbook Dosen: Sheet 18 'Count'. Kasir menghitung berapa banyak baris transaksi yang valid berisi angka dalam rentang A2:A10.",
    "tableHeaders": [
      "A",
      "B"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data Transaksi",
        "B": "Keterangan"
      },
      {
        "row": 2,
        "A": 42000,
        "B": "Tunai"
      },
      {
        "row": 3,
        "A": 54000,
        "B": "QRIS"
      },
      {
        "row": 4,
        "A": "Pending",
        "B": "Belum Bayar"
      },
      {
        "row": 5,
        "A": 85000,
        "B": "Debit"
      },
      {
        "row": 6,
        "A": 75000,
        "B": "Tunai"
      },
      {
        "row": 7,
        "A": "Batal",
        "B": "Cancel"
      },
      {
        "row": 8,
        "A": 60000,
        "B": "QRIS"
      },
      {
        "row": 9,
        "A": "",
        "B": "Kosong"
      },
      {
        "row": 10,
        "A": 90000,
        "B": "Tunai"
      },
      {
        "row": 11,
        "A": "Jumlah Angka",
        "B": ""
      }
    ],
    "targetCell": "B11",
    "instruction": "Ketik rumus =COUNT(A2:A10) di sel B11 untuk menghitung jumlah transaksi angka.",
    "babyHint": "🍼 Bahasa Bayi: =COUNT(A2:A10). COUNT cuma mau menghitung sel yang ada angkanya, teks diabaikan!",
    "starterFormula": "=COUNT(",
    "quickChips": [
      "=COUNT(",
      "A2:A10",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=COUNT(A2:A10)",
      "=COUNT(A2:A10)"
    ],
    "expectedValue": 6,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Menghitung Resi Pengiriman yang Sudah Ada Ongkir",
      "kasusSerupa": "Tabel Paket: Kolom ongkir berisi [15000, 'Belum Ditimbang', 20000]. Rumus: =COUNT(B2:B4).",
      "rumusContoh": "=COUNT(B2:B4)",
      "nalarBayi": "Hanya angka 15000 dan 20000 yang dihitung. Teks diabaikan, jadi hasilnya tepat 2!"
    }
  },
  {
    "id": "xl-16",
    "category": "2. Statistik Dasar & Agregasi",
    "title": "Tantangan 16: Menghitung Sel yang Tidak Kosong (COUNTA)",
    "scenario": "Workbook Dosen: Sheet 19 'Counta'. HRD menghitung berapa orang yang hadir mengisi daftar absensi (baik nama maupun angka) di rentang A2:A10.",
    "tableHeaders": [
      "A",
      "B"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Daftar Absen",
        "B": "Status"
      },
      {
        "row": 2,
        "A": "Budi",
        "B": "Hadir"
      },
      {
        "row": 3,
        "A": "Siti",
        "B": "Hadir"
      },
      {
        "row": 4,
        "A": "Rian",
        "B": "Hadir"
      },
      {
        "row": 5,
        "A": "",
        "B": "Tidak Ada Data"
      },
      {
        "row": 6,
        "A": "Dewi",
        "B": "Hadir"
      },
      {
        "row": 7,
        "A": 105,
        "B": "ID Tamu"
      },
      {
        "row": 8,
        "A": "",
        "B": "Kosong"
      },
      {
        "row": 9,
        "A": "Agus",
        "B": "Hadir"
      },
      {
        "row": 10,
        "A": "Fani",
        "B": "Hadir"
      },
      {
        "row": 11,
        "A": "Total Terisi",
        "B": ""
      }
    ],
    "targetCell": "B11",
    "instruction": "Ketik rumus =COUNTA(A2:A10) di sel B11 untuk menghitung seluruh sel yang tidak kosong.",
    "babyHint": "🍼 Bahasa Bayi: =COUNTA(A2:A10). COUNTA artinya Count Anything! Selama sel tidak kosong, pasti dihitung!",
    "starterFormula": "=COUNTA(",
    "quickChips": [
      "=COUNTA(",
      "A2:A10",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=COUNTA(A2:A10)",
      "=COUNTA(A2:A10)"
    ],
    "expectedValue": 7,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Menghitung Barang yang Sudah Masuk Manifest Gudang",
      "kasusSerupa": "Tabel Muatan: Kolom barang berisi ['Beras', 'Gula', '', 'Minyak']. Rumus: =COUNTA(A2:A5).",
      "rumusContoh": "=COUNTA(A2:A5)",
      "nalarBayi": "Karena sel kosong tidak dihitung, Excel langsung menghitung 3 barang yang ada isinya!"
    }
  },
  {
    "id": "xl-17",
    "category": "2. Statistik Dasar & Agregasi",
    "title": "Tantangan 17: Menghitung Jumlah Data Bolos / Kosong (COUNTBLANK)",
    "scenario": "Workbook Dosen: Sheet 20 'Countblank'. Manajer operasional ingin mendeteksi berapa banyak sel kosong di rentang A2:B5 yang menandakan data bolos.",
    "tableHeaders": [
      "A",
      "B"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Hari 1",
        "B": "Hari 2"
      },
      {
        "row": 2,
        "A": "Hadir",
        "B": 28
      },
      {
        "row": 3,
        "A": "",
        "B": 30
      },
      {
        "row": 4,
        "A": "Hadir",
        "B": ""
      },
      {
        "row": 5,
        "A": "",
        "B": ""
      },
      {
        "row": 6,
        "A": "Total Sel Kosong",
        "B": ""
      }
    ],
    "targetCell": "B6",
    "instruction": "Tulis rumus =COUNTBLANK(A2:B5) di sel B6 untuk menghitung berapa banyak kotak kosong.",
    "babyHint": "🍼 Bahasa Bayi: =COUNTBLANK(A2:B5). Blank artinya kosong melompong. Pemburu kotak kosong!",
    "starterFormula": "=COUNTBLANK(",
    "quickChips": [
      "=COUNTBLANK(",
      "A2:B5",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=COUNTBLANK(A2:B5)",
      "=COUNTBLANK(A2:B5)"
    ],
    "expectedValue": 4,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Menghitung Form Pendaftaran yang Belum Diisi",
      "kasusSerupa": "Tabel Formulir: Dari 10 kolom, 3 di antaranya masih kosong. Rumus: =COUNTBLANK(A2:J2).",
      "rumusContoh": "=COUNTBLANK(A2:J2)",
      "nalarBayi": "Excel menyisir baris dan menemukan tepat 3 sel kosong yang butuh dilengkapi!"
    }
  },
  {
    "id": "xl-18",
    "category": "2. Statistik Dasar & Agregasi",
    "title": "Tantangan 18: Menemukan Penjualan Tertinggi Salesperson (MAX)",
    "scenario": "Workbook Dosen: Sheet 49 'Max'. Dosen menganalisis skor dari tabel data A2:A11 untuk menemukan nilai angka tertinggi di sel C12.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data Nilai",
        "B": "",
        "C": "Rekor Tertinggi"
      },
      {
        "row": 2,
        "A": 4,
        "B": "",
        "C": ""
      },
      {
        "row": 3,
        "A": 5,
        "B": "",
        "C": ""
      },
      {
        "row": 4,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 5,
        "A": 3,
        "B": "",
        "C": ""
      },
      {
        "row": 6,
        "A": 5,
        "B": "",
        "C": ""
      },
      {
        "row": 7,
        "A": 6,
        "B": "",
        "C": ""
      },
      {
        "row": 8,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 9,
        "A": 9,
        "B": "",
        "C": ""
      },
      {
        "row": 10,
        "A": 6,
        "B": "",
        "C": ""
      },
      {
        "row": 11,
        "A": 11,
        "B": "",
        "C": ""
      },
      {
        "row": 12,
        "A": "Tertinggi",
        "B": "",
        "C": ""
      }
    ],
    "targetCell": "C12",
    "instruction": "Tulis rumus =MAX(A2:A11) di sel C12 untuk menemukan angka paling besar.",
    "babyHint": "🍼 Bahasa Bayi: =MAX(A2:A11). MAX artinya Maksimum, cari sang juara dengan nilai terbesar!",
    "starterFormula": "=MAX(",
    "quickChips": [
      "=MAX(",
      "A2:A11",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=MAX(A2:A11)",
      "=MAX(A2:A11)"
    ],
    "expectedValue": 11,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Rekor Suhu Terpanas Ruang Server",
      "kasusSerupa": "Tabel Sensor Suhu: Sensor mencatat [28, 31, 35, 29] derajat Celcius. Rumus: =MAX(A2:A5).",
      "rumusContoh": "=MAX(A2:A5)",
      "nalarBayi": "Excel membandingkan semua angka dan langsung mengeluarkan suhu terpanas yaitu 35 derajat!"
    }
  },
  {
    "id": "xl-19",
    "category": "2. Statistik Dasar & Agregasi",
    "title": "Tantangan 19: Nilai Maksimum dengan Penanganan Logika (MAXA)",
    "scenario": "Workbook Dosen: Sheet 50 'maxA'. Dosen menguji fungsi MAXA pada rentang data A2:A10 untuk mengevaluasi data angka dan boolean.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data Uji",
        "B": "",
        "C": "Hasil MAXA"
      },
      {
        "row": 2,
        "A": 10,
        "B": "",
        "C": ""
      },
      {
        "row": 3,
        "A": 8,
        "B": "",
        "C": ""
      },
      {
        "row": 4,
        "A": 9,
        "B": "",
        "C": ""
      },
      {
        "row": 5,
        "A": 28,
        "B": "",
        "C": ""
      },
      {
        "row": 6,
        "A": 4,
        "B": "",
        "C": ""
      },
      {
        "row": 7,
        "A": 12,
        "B": "",
        "C": ""
      },
      {
        "row": 8,
        "A": 15,
        "B": "",
        "C": ""
      },
      {
        "row": 9,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 10,
        "A": 22,
        "B": "",
        "C": ""
      },
      {
        "row": 11,
        "A": "Nilai MAXA",
        "B": "",
        "C": ""
      }
    ],
    "targetCell": "C11",
    "instruction": "Ketik rumus =MAXA(A2:A10) di sel C11.",
    "babyHint": "🍼 Bahasa Bayi: =MAXA(A2:A10). Mirip MAX tapi MAXA juga membaca nilai logika TRUE sebagai 1 dan FALSE sebagai 0!",
    "starterFormula": "=MAXA(",
    "quickChips": [
      "=MAXA(",
      "A2:A10",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=MAXA(A2:A10)",
      "=MAXA(A2:A10)"
    ],
    "expectedValue": 28,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Skor Game Tertinggi",
      "kasusSerupa": "Tabel Game: Nilai peserta di A2:A4 adalah [12, 45, 30]. Rumus: =MAXA(A2:A4).",
      "rumusContoh": "=MAXA(A2:A4)",
      "nalarBayi": "Nilai terbesar yang ditemukan adalah 45!"
    }
  },
  {
    "id": "xl-20",
    "category": "2. Statistik Dasar & Agregasi",
    "title": "Tantangan 20: Menemukan Biaya Operasional Terendah Bulanan (MIN)",
    "scenario": "Workbook Dosen: Sheet 52 'MIN'. Dosen mencari nilai minimum terendah dari rentang A2:A11 di sel C12.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Biaya Bulanan",
        "B": "",
        "C": "Biaya Terhemat"
      },
      {
        "row": 2,
        "A": 4,
        "B": "",
        "C": ""
      },
      {
        "row": 3,
        "A": 5,
        "B": "",
        "C": ""
      },
      {
        "row": 4,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 5,
        "A": 3,
        "B": "",
        "C": ""
      },
      {
        "row": 6,
        "A": 5,
        "B": "",
        "C": ""
      },
      {
        "row": 7,
        "A": 6,
        "B": "",
        "C": ""
      },
      {
        "row": 8,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 9,
        "A": 9,
        "B": "",
        "C": ""
      },
      {
        "row": 10,
        "A": 6,
        "B": "",
        "C": ""
      },
      {
        "row": 11,
        "A": 11,
        "B": "",
        "C": ""
      },
      {
        "row": 12,
        "A": "Terendah",
        "B": "",
        "C": ""
      }
    ],
    "targetCell": "C12",
    "instruction": "Ketik rumus =MIN(A2:A11) di sel C12 untuk menemukan angka paling kecil.",
    "babyHint": "🍼 Bahasa Bayi: =MIN(A2:A11). MIN artinya Minimum, angka paling imut dan paling rendah!",
    "starterFormula": "=MIN(",
    "quickChips": [
      "=MIN(",
      "A2:A11",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=MIN(A2:A11)",
      "=MIN(A2:A11)"
    ],
    "expectedValue": 3,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Menemukan Harga Termurah di Marketplace",
      "kasusSerupa": "Tabel Produk: Harga barang di beberapa toko: [150000, 120000, 135000]. Rumus: =MIN(B2:B4).",
      "rumusContoh": "=MIN(B2:B4)",
      "nalarBayi": "Excel menyaring harga dan langsung merekomendasikan harga termurah yaitu 120000!"
    }
  },
  {
    "id": "xl-21",
    "category": "2. Statistik Dasar & Agregasi",
    "title": "Tantangan 21: Menemukan Nilai Terendah Termasuk Evaluasi (MINA)",
    "scenario": "Workbook Dosen: Sheet 53 'mINA'. Dosen menguji fungsi MINA pada rentang data A2:A10 di sel C11.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data Nilai",
        "B": "",
        "C": "Hasil MINA"
      },
      {
        "row": 2,
        "A": 10,
        "B": "",
        "C": ""
      },
      {
        "row": 3,
        "A": 8,
        "B": "",
        "C": ""
      },
      {
        "row": 4,
        "A": 9,
        "B": "",
        "C": ""
      },
      {
        "row": 5,
        "A": 28,
        "B": "",
        "C": ""
      },
      {
        "row": 6,
        "A": 4,
        "B": "",
        "C": ""
      },
      {
        "row": 7,
        "A": 12,
        "B": "",
        "C": ""
      },
      {
        "row": 8,
        "A": 15,
        "B": "",
        "C": ""
      },
      {
        "row": 9,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 10,
        "A": 22,
        "B": "",
        "C": ""
      },
      {
        "row": 11,
        "A": "Nilai MINA",
        "B": "",
        "C": ""
      }
    ],
    "targetCell": "C11",
    "instruction": "Ketik rumus =MINA(A2:A10) di sel C11.",
    "babyHint": "🍼 Bahasa Bayi: =MINA(A2:A10). MINA mencari nilai paling kecil dari seluruh data yang ada!",
    "starterFormula": "=MINA(",
    "quickChips": [
      "=MINA(",
      "A2:A10",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=MINA(A2:A10)",
      "=MINA(A2:A10)"
    ],
    "expectedValue": 4,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Mengetahui Waktu Tempuh Tercepat",
      "kasusSerupa": "Tabel Lari: Waktu tempuh [14, 18, 11] detik. Rumus: =MINA(A2:A4).",
      "rumusContoh": "=MINA(A2:A4)",
      "nalarBayi": "Nilai terkecil adalah 11 detik!"
    }
  },
  {
    "id": "xl-22",
    "category": "3. Statistik Bersyarat",
    "title": "Tantangan 22: Menghitung Produk 'Susu' yang Terjual (COUNTIF Teks)",
    "scenario": "Workbook Dosen: Sheet 21 'Countif'. Kasir mencatat riwayat penjualan rasa minuman di A2:A6. Hitung berapa kali produk 'Susu' muncul di sel D7.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Produk",
        "B": "Jumlah",
        "C": "",
        "D": "Total Susu"
      },
      {
        "row": 2,
        "A": "Susu",
        "B": 42,
        "C": "",
        "D": ""
      },
      {
        "row": 3,
        "A": "Susu",
        "B": 54,
        "C": "",
        "D": ""
      },
      {
        "row": 4,
        "A": "Coklat",
        "B": 45,
        "C": "",
        "D": ""
      },
      {
        "row": 5,
        "A": "Susu",
        "B": 85,
        "C": "",
        "D": ""
      },
      {
        "row": 6,
        "A": "Pisang",
        "B": 75,
        "C": "",
        "D": ""
      },
      {
        "row": 7,
        "A": "Hitung Susu",
        "B": "",
        "C": "",
        "D": ""
      }
    ],
    "targetCell": "D7",
    "instruction": "Ketik rumus =COUNTIF(A2:A6, 'Susu') di sel D7 sesuai file latihan dosen.",
    "babyHint": "🍼 Bahasa Bayi: =COUNTIF(A2:A6, \"Susu\"). COUNTIF itu hitung cuma kalau syaratnya cocok!",
    "starterFormula": "=COUNTIF(",
    "quickChips": [
      "=COUNTIF(",
      "A2:A6",
      "\"Susu\"",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=COUNTIF(A2:A6,\"Susu\")",
      "=COUNTIF(A2:A6;\"Susu\")",
      "=COUNTIF(A2:A6, \"Susu\")",
      "=COUNTIF(A2:A6; \"Susu\")"
    ],
    "expectedValue": 3,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Menghitung Pegawai Divisi IT",
      "kasusSerupa": "Tabel HRD: Kolom Divisi berisi ['IT', 'HRD', 'IT', 'Marketing']. Rumus: =COUNTIF(B2:B5, 'IT').",
      "rumusContoh": "=COUNTIF(B2:B5, \"IT\")",
      "nalarBayi": "Excel menghitung berapa kali kata 'IT' muncul di baris, hasilnya adalah 2!"
    }
  },
  {
    "id": "xl-23",
    "category": "3. Statistik Bersyarat",
    "title": "Tantangan 23: Menghitung Transaksi di Atas 50 Unit (COUNTIF Angka)",
    "scenario": "Workbook Dosen: Sheet 21 'Countif'. Dosen menghitung berapa banyak transaksi di kolom B2:B6 yang nilainya lebih dari 50 (>50) di sel D8.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Produk",
        "B": "Jumlah",
        "C": "",
        "D": "Jumlah > 50"
      },
      {
        "row": 2,
        "A": "Susu",
        "B": 42,
        "C": "",
        "D": ""
      },
      {
        "row": 3,
        "A": "Susu",
        "B": 54,
        "C": "",
        "D": ""
      },
      {
        "row": 4,
        "A": "Coklat",
        "B": 45,
        "C": "",
        "D": ""
      },
      {
        "row": 5,
        "A": "Susu",
        "B": 85,
        "C": "",
        "D": ""
      },
      {
        "row": 6,
        "A": "Pisang",
        "B": 75,
        "C": "",
        "D": ""
      },
      {
        "row": 7,
        "A": "",
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 8,
        "A": "Transaksi >50",
        "B": "",
        "C": "",
        "D": ""
      }
    ],
    "targetCell": "D8",
    "instruction": "Ketik rumus =COUNTIF(B2:B6, '>50') di sel D8 sesuai file materi dosen.",
    "babyHint": "🍼 Bahasa Bayi: =COUNTIF(B2:B6, \">50\"). Tanda lebih besar >50 dibungkus tanda petik!",
    "starterFormula": "=COUNTIF(",
    "quickChips": [
      "=COUNTIF(",
      "B2:B6",
      "\">50\"",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=COUNTIF(B2:B6,\">50\")",
      "=COUNTIF(B2:B6;\">50\")",
      "=COUNTIF(B2:B6, \">50\")",
      "=COUNTIF(B2:B6; \">50\")"
    ],
    "expectedValue": 3,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Menghitung Siswa yang Nilainya di Atas KKM 75",
      "kasusSerupa": "Tabel Ujian: Nilai siswa di B2:B6 adalah [70, 80, 85, 65, 90]. Rumus: =COUNTIF(B2:B6, '>75').",
      "rumusContoh": "=COUNTIF(B2:B6, \">75\")",
      "nalarBayi": "Nilai 80, 85, dan 90 lolos syarat, sehingga Excel menghitung total 3 siswa!"
    }
  },
  {
    "id": "xl-24",
    "category": "3. Statistik Bersyarat",
    "title": "Tantangan 24: Menghitung dengan Dua Kriteria (COUNTIFS)",
    "scenario": "Toko Elektronik ingin menghitung berapa banyak transaksi yang kategorinya 'Elektronik' (A2:A8) DAN nilai penjualannya di atas 1 Juta (>1000000 di B2:B8).",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Kategori",
        "B": "Total Belanja (Rp)",
        "C": ""
      },
      {
        "row": 2,
        "A": "Elektronik",
        "B": 2500000,
        "C": ""
      },
      {
        "row": 3,
        "A": "Pakaian",
        "B": 450000,
        "C": ""
      },
      {
        "row": 4,
        "A": "Elektronik",
        "B": 750000,
        "C": ""
      },
      {
        "row": 5,
        "A": "Elektronik",
        "B": 3200000,
        "C": ""
      },
      {
        "row": 6,
        "A": "Makanan",
        "B": 120000,
        "C": ""
      },
      {
        "row": 7,
        "A": "Elektronik",
        "B": 1500000,
        "C": ""
      },
      {
        "row": 8,
        "A": "Pakaian",
        "B": 1800000,
        "C": ""
      },
      {
        "row": 9,
        "A": "Target Tx:",
        "B": "",
        "C": ""
      }
    ],
    "targetCell": "B9",
    "instruction": "Ketik rumus =COUNTIFS(A2:A8, 'Elektronik', B2:B8, '>1000000') di sel B9.",
    "babyHint": "🍼 Bahasa Bayi: =COUNTIFS(A2:A8, \"Elektronik\", B2:B8, \">1000000\"). COUNTIFS punya huruf 'S' di belakang untuk banyak syarat!",
    "starterFormula": "=COUNTIFS(",
    "quickChips": [
      "=COUNTIFS(",
      "A2:A8",
      "\"Elektronik\"",
      "B2:B8",
      "\">1000000\"",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=COUNTIFS(A2:A8,\"Elektronik\",B2:B8,\">1000000\")",
      "=COUNTIFS(A2:A8;\"Elektronik\";B2:B8;\">1000000\")",
      "=COUNTIFS(A2:A8, \"Elektronik\", B2:B8, \">1000000\")"
    ],
    "expectedValue": 3,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Karyawan IT dengan Gaji di Atas 7 Juta",
      "kasusSerupa": "Tabel HRD: Divisi di A2:A6 dan Gaji di B2:B6. Rumus: =COUNTIFS(A2:A6, 'IT', B2:B6, '>7000000').",
      "rumusContoh": "=COUNTIFS(A2:A6, \"IT\", B2:B6, \">7000000\")",
      "nalarBayi": "Hanya karyawan yang Divisinya 'IT' SEKALIGUS gajinya > 7jt yang dihitung!"
    }
  },
  {
    "id": "xl-25",
    "category": "3. Statistik Bersyarat",
    "title": "Tantangan 25: Menjumlahkan Penjualan Khusus Cabang 'Bandung' (SUMIF)",
    "scenario": "Pusat Distribusi merekap omset di B2:B8. Hitung total penjualan khusus cabang 'Bandung' (kriteria ada di A2:A8) di sel B9.",
    "tableHeaders": [
      "A",
      "B"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Kota Cabang",
        "B": "Omset (Rp)"
      },
      {
        "row": 2,
        "A": "Jakarta",
        "B": 15000000
      },
      {
        "row": 3,
        "A": "Bandung",
        "B": 8000000
      },
      {
        "row": 4,
        "A": "Surabaya",
        "B": 12000000
      },
      {
        "row": 5,
        "A": "Bandung",
        "B": 9500000
      },
      {
        "row": 6,
        "A": "Jakarta",
        "B": 11000000
      },
      {
        "row": 7,
        "A": "Bandung",
        "B": 6500000
      },
      {
        "row": 8,
        "A": "Semarang",
        "B": 7000000
      },
      {
        "row": 9,
        "A": "Total Bandung",
        "B": ""
      }
    ],
    "targetCell": "B9",
    "instruction": "Tulis rumus =SUMIF(A2:A8, 'Bandung', B2:B8) di sel B9.",
    "babyHint": "🍼 Bahasa Bayi: =SUMIF(A2:A8, \"Bandung\", B2:B8). SUMIF artinya jumlahkan HANYA JIKA kotanya Bandung!",
    "starterFormula": "=SUMIF(",
    "quickChips": [
      "=SUMIF(",
      "A2:A8",
      "\"Bandung\"",
      "B2:B8",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=SUMIF(A2:A8,\"Bandung\",B2:B8)",
      "=SUMIF(A2:A8;\"Bandung\";B2:B8)",
      "=SUMIF(A2:A8, \"Bandung\", B2:B8)"
    ],
    "expectedValue": 24000000,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Total Biaya Khusus Kategori 'Konsumsi'",
      "kasusSerupa": "Tabel Keuangan: Kategori di A2:A5 dan Biaya di B2:B5. Rumus: =SUMIF(A2:A5, 'Konsumsi', B2:B5).",
      "rumusContoh": "=SUMIF(A2:A5, \"Konsumsi\", B2:B5)",
      "nalarBayi": "Excel menyaring baris berlabel 'Konsumsi' dan menjumlahkan biayanya saja!"
    }
  },
  {
    "id": "xl-26",
    "category": "3. Statistik Bersyarat",
    "title": "Tantangan 26: Menjumlahkan Transaksi Bernilai Besar (SUMIF Angka)",
    "scenario": "Manajer Keuangan ingin menjumlahkan total nominal transaksi yang nilainya di atas 500.000 (>500000) dari rentang B2:B8 di sel B9.",
    "tableHeaders": [
      "A",
      "B"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "ID Nota",
        "B": "Nominal Belanja (Rp)"
      },
      {
        "row": 2,
        "A": "NT-001",
        "B": 350000
      },
      {
        "row": 3,
        "A": "NT-002",
        "B": 850000
      },
      {
        "row": 4,
        "A": "NT-003",
        "B": 600000
      },
      {
        "row": 5,
        "A": "NT-004",
        "B": 150000
      },
      {
        "row": 6,
        "A": "NT-005",
        "B": 900000
      },
      {
        "row": 7,
        "A": "NT-006",
        "B": 420000
      },
      {
        "row": 8,
        "A": "NT-007",
        "B": 750000
      },
      {
        "row": 9,
        "A": "Total Tx >500rb",
        "B": ""
      }
    ],
    "targetCell": "B9",
    "instruction": "Tulis rumus =SUMIF(B2:B8, '>500000') di sel B9.",
    "babyHint": "🍼 Bahasa Bayi: =SUMIF(B2:B8, \">500000\"). Kalau kolom kriteria sama dengan kolom angka, cukup 2 argumen saja!",
    "starterFormula": "=SUMIF(",
    "quickChips": [
      "=SUMIF(",
      "B2:B8",
      "\">500000\"",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=SUMIF(B2:B8,\">500000\")",
      "=SUMIF(B2:B8;\">500000\")",
      "=SUMIF(B2:B8, \">500000\")"
    ],
    "expectedValue": 3100000,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Total Donasi di Atas 100 Ribu",
      "kasusSerupa": "Tabel Donasi: Daftar nominal di A2:A5 = [50000, 200000, 150000, 75000]. Rumus: =SUMIF(A2:A5, '>100000').",
      "rumusContoh": "=SUMIF(A2:A5, \">100000\")",
      "nalarBayi": "Hanya 200rb dan 150rb yang dijumlahkan sehingga totalnya 350000!"
    }
  },
  {
    "id": "xl-27",
    "category": "3. Statistik Bersyarat",
    "title": "Tantangan 27: Penjualan Multi Kriteria (SUMIFS)",
    "scenario": "Distributor Komputer ingin mengetahui total penjualan di C2:C8 khusus produk 'Laptop' (A2:A8) yang dijual oleh sales 'Andi' (B2:B8) di sel D9.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Produk",
        "B": "Sales",
        "C": "Omset (Rp)",
        "D": ""
      },
      {
        "row": 2,
        "A": "Laptop",
        "B": "Andi",
        "C": 18000000,
        "D": ""
      },
      {
        "row": 3,
        "A": "Printer",
        "B": "Budi",
        "C": 3500000,
        "D": ""
      },
      {
        "row": 4,
        "A": "Laptop",
        "B": "Citra",
        "C": 22000000,
        "D": ""
      },
      {
        "row": 5,
        "A": "Laptop",
        "B": "Andi",
        "C": 15000000,
        "D": ""
      },
      {
        "row": 6,
        "A": "Monitor",
        "B": "Andi",
        "C": 5000000,
        "D": ""
      },
      {
        "row": 7,
        "A": "Printer",
        "B": "Andi",
        "C": 4000000,
        "D": ""
      },
      {
        "row": 8,
        "A": "Laptop",
        "B": "Andi",
        "C": 12000000,
        "D": ""
      },
      {
        "row": 9,
        "A": "Total Laptop Andi",
        "B": "",
        "C": "",
        "D": ""
      }
    ],
    "targetCell": "D9",
    "instruction": "Tulis rumus =SUMIFS(C2:C8, A2:A8, 'Laptop', B2:B8, 'Andi') di sel D9.",
    "babyHint": "🍼 Bahasa Bayi: =SUMIFS(C2:C8, A2:A8, \"Laptop\", B2:B8, \"Andi\"). Pada SUMIFS, kolom angka yang dijumlah ditaruh paling depan!",
    "starterFormula": "=SUMIFS(",
    "quickChips": [
      "=SUMIFS(",
      "C2:C8",
      "A2:A8",
      "\"Laptop\"",
      "B2:B8",
      "\"Andi\"",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=SUMIFS(C2:C8,A2:A8,\"Laptop\",B2:B8,\"Andi\")",
      "=SUMIFS(C2:C8;A2:A8;\"Laptop\";B2:B8;\"Andi\")",
      "=SUMIFS(C2:C8, A2:A8, \"Laptop\", B2:B8, \"Andi\")"
    ],
    "expectedValue": 45000000,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Total Gaji Karyawan IT Tetap",
      "kasusSerupa": "Tabel Payroll: Gaji di C2:C6, Divisi di A2:A6 ('IT'), Status di B2:B6 ('Tetap').",
      "rumusContoh": "=SUMIFS(C2:C6, A2:A6, \"IT\", B2:B6, \"Tetap\")",
      "nalarBayi": "Excel mencari baris yang Divisi = 'IT' DAN Status = 'Tetap', lalu menjumlahkan gajinya!"
    }
  },
  {
    "id": "xl-28",
    "category": "3. Statistik Bersyarat",
    "title": "Tantangan 28: Rata-rata Masa Kerja >= 10 Tahun (AVERAGEIF)",
    "scenario": "Workbook Dosen: Sheet 4 'Averageif'. Dosen menghitung rata-rata masa kerja dosen senior yang masa kerjanya >= 10 tahun dari sel A2:A7 di sel D8.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Masa Kerja (Th)",
        "B": "Golongan",
        "C": "",
        "D": "Rata-rata Masa >=10"
      },
      {
        "row": 2,
        "A": 10,
        "B": 4,
        "C": "",
        "D": ""
      },
      {
        "row": 3,
        "A": 8,
        "B": 2,
        "C": "",
        "D": ""
      },
      {
        "row": 4,
        "A": 9,
        "B": 3,
        "C": "",
        "D": ""
      },
      {
        "row": 5,
        "A": 28,
        "B": 4,
        "C": "",
        "D": ""
      },
      {
        "row": 6,
        "A": 4,
        "B": 2,
        "C": "",
        "D": ""
      },
      {
        "row": 7,
        "A": 12,
        "B": 3,
        "C": "",
        "D": ""
      },
      {
        "row": 8,
        "A": "Hasil Evaluasi",
        "B": "",
        "C": "",
        "D": ""
      }
    ],
    "targetCell": "D8",
    "instruction": "Ketik rumus =AVERAGEIF(A2:A7, '>=10') di sel D8 sesuai panduan dosen.",
    "babyHint": "🍼 Bahasa Bayi: =AVERAGEIF(A2:A7, \">=10\"). Cari yang masa kerjanya 10 tahun ke atas, lalu hitung rata-ratanya!",
    "starterFormula": "=AVERAGEIF(",
    "quickChips": [
      "=AVERAGEIF(",
      "A2:A7",
      "\">=10\"",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=AVERAGEIF(A2:A7,\">=10\")",
      "=AVERAGEIF(A2:A7;\">=10\")",
      "=AVERAGEIF(A2:A7, \">=10\")"
    ],
    "expectedValue": 16.666666666666668,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Rata-rata Nilai Ujian Siswa Lulus (>=75)",
      "kasusSerupa": "Tabel Nilai: Kolom skor di A2:A5 = [60, 80, 90, 70]. Rumus: =AVERAGEIF(A2:A5, '>=75').",
      "rumusContoh": "=AVERAGEIF(A2:A5, \">=75\")",
      "nalarBayi": "Hanya nilai 80 dan 90 yang dihitung, sehingga rata-ratanya adalah 85!"
    }
  },
  {
    "id": "xl-29",
    "category": "3. Statistik Bersyarat",
    "title": "Tantangan 29: Rata-rata Masa Kerja Golongan > 2 (AVERAGEIF Range Kriteria)",
    "scenario": "Workbook Dosen: Sheet 4 'Averageif'. Dosen menghitung rata-rata masa kerja (A2:A7) untuk pegawai yang golongannya di B2:B7 lebih dari 2 (>2) di sel D9.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Masa Kerja (Th)",
        "B": "Golongan",
        "C": "",
        "D": "Rata-rata Golongan >2"
      },
      {
        "row": 2,
        "A": 10,
        "B": 4,
        "C": "",
        "D": ""
      },
      {
        "row": 3,
        "A": 8,
        "B": 2,
        "C": "",
        "D": ""
      },
      {
        "row": 4,
        "A": 9,
        "B": 3,
        "C": "",
        "D": ""
      },
      {
        "row": 5,
        "A": 28,
        "B": 4,
        "C": "",
        "D": ""
      },
      {
        "row": 6,
        "A": 4,
        "B": 2,
        "C": "",
        "D": ""
      },
      {
        "row": 7,
        "A": 12,
        "B": 3,
        "C": "",
        "D": ""
      },
      {
        "row": 8,
        "A": "",
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 9,
        "A": "Hasil Gol >2",
        "B": "",
        "C": "",
        "D": ""
      }
    ],
    "targetCell": "D9",
    "instruction": "Ketik rumus =AVERAGEIF(B2:B7, '>2', A2:A7) di sel D9 persis formula dosen.",
    "babyHint": "🍼 Bahasa Bayi: =AVERAGEIF(B2:B7, \">2\", A2:A7). Kolom kriteria B2:B7 dicek dulu, baru angka rata-ratanya diambil dari A2:A7!",
    "starterFormula": "=AVERAGEIF(",
    "quickChips": [
      "=AVERAGEIF(",
      "B2:B7",
      "\">2\"",
      "A2:A7",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=AVERAGEIF(B2:B7,\">2\",A2:A7)",
      "=AVERAGEIF(B2:B7;\">2\";A2:A7)",
      "=AVERAGEIF(B2:B7, \">2\", A2:A7)"
    ],
    "expectedValue": 14.75,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Rata-rata Jam Kerja Shift Malam",
      "kasusSerupa": "Tabel Shift: Kolom Shift di A2:A5 dan Jam Kerja di B2:B5. Rumus: =AVERAGEIF(A2:A5, 'Malam', B2:B5).",
      "rumusContoh": "=AVERAGEIF(A2:A5, \"Malam\", B2:B5)",
      "nalarBayi": "Excel mencari karyawan ber-shift 'Malam' lalu merata-ratakan jam kerja mereka!"
    }
  },
  {
    "id": "xl-30",
    "category": "3. Statistik Bersyarat",
    "title": "Tantangan 30: Rata-rata Bonus Staf IT Golongan Tinggi (AVERAGEIFS)",
    "scenario": "HRD menghitung rata-rata bonus di C2:C8 untuk staf yang divisinya di A2:A8 adalah 'IT' DAN golongannya di B2:B8 >= 3.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Divisi",
        "B": "Golongan",
        "C": "Bonus (Rp)",
        "D": ""
      },
      {
        "row": 2,
        "A": "IT",
        "B": 3,
        "C": 4500000,
        "D": ""
      },
      {
        "row": 3,
        "A": "HRD",
        "B": 4,
        "C": 5000000,
        "D": ""
      },
      {
        "row": 4,
        "A": "IT",
        "B": 2,
        "C": 2500000,
        "D": ""
      },
      {
        "row": 5,
        "A": "IT",
        "B": 4,
        "C": 6500000,
        "D": ""
      },
      {
        "row": 6,
        "A": "Finance",
        "B": 3,
        "C": 4000000,
        "D": ""
      },
      {
        "row": 7,
        "A": "IT",
        "B": 3,
        "C": 4000000,
        "D": ""
      },
      {
        "row": 8,
        "A": "HRD",
        "B": 2,
        "C": 2000000,
        "D": ""
      },
      {
        "row": 9,
        "A": "Rata Bonus IT Gol>=3",
        "B": "",
        "C": "",
        "D": ""
      }
    ],
    "targetCell": "D9",
    "instruction": "Tulis rumus =AVERAGEIFS(C2:C8, A2:A8, 'IT', B2:B8, '>=3') di sel D9.",
    "babyHint": "🍼 Bahasa Bayi: =AVERAGEIFS(C2:C8, A2:A8, \"IT\", B2:B8, \">=3\"). Kolom rata-rata C2:C8 di depan, disusul syarat-syaratnya!",
    "starterFormula": "=AVERAGEIFS(",
    "quickChips": [
      "=AVERAGEIFS(",
      "C2:C8",
      "A2:A8",
      "\"IT\"",
      "B2:B8",
      "\">=3\"",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=AVERAGEIFS(C2:C8,A2:A8,\"IT\",B2:B8,\">=3\")",
      "=AVERAGEIFS(C2:C8;A2:A8;\"IT\";B2:B8;\">=3\")",
      "=AVERAGEIFS(C2:C8, A2:A8, \"IT\", B2:B8, \">=3\")"
    ],
    "expectedValue": 5000000,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Rata-rata Penjualan Sales Jakarta dengan Rating Bintang 5",
      "kasusSerupa": "Tabel Penjualan: Omset di C2:C5, Kota di A2:A5 ('Jakarta'), Rating di B2:B5 (5).",
      "rumusContoh": "=AVERAGEIFS(C2:C5, A2:A5, \"Jakarta\", B2:B5, 5)",
      "nalarBayi": "Excel menghitung rata-rata omset hanya untuk toko di Jakarta yang ratingnya bintang 5!"
    }
  },
  {
    "id": "xl-31",
    "category": "3. Statistik Bersyarat",
    "title": "Tantangan 31: Menghitung Kode Barang Awalan Tertentu (COUNTIF Wildcard)",
    "scenario": "Gudang Sparepart menghitung berapa banyak kode barang di A2:A8 yang berawalan 'BRG*' (menggunakan tanda bintang wildcard).",
    "tableHeaders": [
      "A",
      "B"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Kode Item",
        "B": "Nama Barang"
      },
      {
        "row": 2,
        "A": "BRG-001",
        "B": "Kipas Angin"
      },
      {
        "row": 3,
        "A": "ACC-010",
        "B": "Kabel HDMI"
      },
      {
        "row": 4,
        "A": "BRG-002",
        "B": "Lampu LED"
      },
      {
        "row": 5,
        "A": "SPP-050",
        "B": "Baut M4"
      },
      {
        "row": 6,
        "A": "BRG-003",
        "B": "Stop Kontak"
      },
      {
        "row": 7,
        "A": "ACC-020",
        "B": "Mousepad"
      },
      {
        "row": 8,
        "A": "BRG-004",
        "B": "Steker Listrik"
      },
      {
        "row": 9,
        "A": "Total Barang",
        "B": ""
      }
    ],
    "targetCell": "B9",
    "instruction": "Tulis rumus =COUNTIF(A2:A8, 'BRG*') di sel B9.",
    "babyHint": "🍼 Bahasa Bayi: =COUNTIF(A2:A8, \"BRG*\"). Tanda bintang * artinya 'diikuti karakter apa saja'!",
    "starterFormula": "=COUNTIF(",
    "quickChips": [
      "=COUNTIF(",
      "A2:A8",
      "\"BRG*\"",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=COUNTIF(A2:A8,\"BRG*\")",
      "=COUNTIF(A2:A8;\"BRG*\")",
      "=COUNTIF(A2:A8, \"BRG*\")"
    ],
    "expectedValue": 4,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Menghitung Email dengan Domain Kantor",
      "kasusSerupa": "Tabel Kontak: Daftar email di A2:A5. Rumus: =COUNTIF(A2:A5, '*@kantor.com').",
      "rumusContoh": "=COUNTIF(A2:A5, \"*@kantor.com\")",
      "nalarBayi": "Tanda bintang di depan artinya kata apa saja asalkan diakhiri dengan @kantor.com!"
    }
  },
  {
    "id": "xl-32",
    "category": "4. Pencarian Data & Lookup",
    "title": "Tantangan 32: Mencari Harga Barang Berdasarkan Barcode (VLOOKUP)",
    "scenario": "Kasir Toko mencari harga barang di sel F2 berdasarkan barcode di sel E2 (BC-103) dari tabel master produk di A2:C7. Kolom harga berada di kolom ke-3, cari kecocokan persis (FALSE atau 0).",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Barcode",
        "B": "Nama Produk",
        "C": "Harga (Rp)",
        "D": "",
        "E": "Cari Barcode",
        "F": "Harga Ditemukan"
      },
      {
        "row": 2,
        "A": "BC-101",
        "B": "Kopi Sachet",
        "C": 3500,
        "D": "",
        "E": "BC-103",
        "F": ""
      },
      {
        "row": 3,
        "A": "BC-102",
        "B": "Teh Celup",
        "C": 5000,
        "D": "",
        "E": "",
        "F": ""
      },
      {
        "row": 4,
        "A": "BC-103",
        "B": "Susu UHT",
        "C": 7000,
        "D": "",
        "E": "",
        "F": ""
      },
      {
        "row": 5,
        "A": "BC-104",
        "B": "Roti Gandum",
        "C": 12000,
        "D": "",
        "E": "",
        "F": ""
      },
      {
        "row": 6,
        "A": "BC-105",
        "B": "Biskuit Coklat",
        "C": 8500,
        "D": "",
        "E": "",
        "F": ""
      },
      {
        "row": 7,
        "A": "BC-106",
        "B": "Air Mineral",
        "C": 3000,
        "D": "",
        "E": "",
        "F": ""
      }
    ],
    "targetCell": "F2",
    "instruction": "Tulis rumus =VLOOKUP(E2, A2:C7, 3, FALSE) di sel F2 untuk mencari harga susu.",
    "babyHint": "🍼 Bahasa Bayi: =VLOOKUP(E2, A2:C7, 3, FALSE). VLOOKUP artinya Vertical Lookup, mencari dari atas ke bawah!",
    "starterFormula": "=VLOOKUP(",
    "quickChips": [
      "=VLOOKUP(",
      "E2",
      "A2:C7",
      "3",
      "FALSE",
      ")",
      "0",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=VLOOKUP(E2,A2:C7,3,FALSE)",
      "=VLOOKUP(E2;A2:C7;3;FALSE)",
      "=VLOOKUP(E2, A2:C7, 3, FALSE)",
      "=VLOOKUP(E2,A2:C7,3,0)",
      "=VLOOKUP(E2;A2:C7;3;0)",
      "=VLOOKUP(E2, A2:C7, 3, 0)"
    ],
    "expectedValue": 7000,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Mencari Nomor Telepon Karyawan",
      "kasusSerupa": "Tabel Kontak: ID di A2:C5. Cari ID di E2. Rumus: =VLOOKUP(E2, A2:C5, 3, FALSE).",
      "rumusContoh": "=VLOOKUP(E2, A2:C5, 3, FALSE)",
      "nalarBayi": "Excel mencari ID di kolom 1, lalu saat ketemu langsung geser ke kolom 3 untuk mengambil nomor telepon!"
    }
  },
  {
    "id": "xl-33",
    "category": "4. Pencarian Data & Lookup",
    "title": "Tantangan 33: Mencari Nama Karyawan Berdasarkan NIP (VLOOKUP Kolom 2)",
    "scenario": "Bagian HRD mencari nama karyawan di sel E2 berdasarkan NIP di sel D2 (NIP-004) dari tabel master karyawan di A2:C7 (kolom Nama di posisi ke-2).",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "NIP",
        "B": "Nama Karyawan",
        "C": "Departemen",
        "D": "Cari NIP",
        "E": "Nama"
      },
      {
        "row": 2,
        "A": "NIP-001",
        "B": "Andi Pratama",
        "C": "IT",
        "D": "NIP-004",
        "E": ""
      },
      {
        "row": 3,
        "A": "NIP-002",
        "B": "Bunga Citra",
        "C": "Finance",
        "D": "",
        "E": ""
      },
      {
        "row": 4,
        "A": "NIP-003",
        "B": "Candra Wijaya",
        "C": "Marketing",
        "D": "",
        "E": ""
      },
      {
        "row": 5,
        "A": "NIP-004",
        "B": "Deni Kurnia",
        "C": "Operasional",
        "D": "",
        "E": ""
      },
      {
        "row": 6,
        "A": "NIP-005",
        "B": "Evi Marlina",
        "C": "HRD",
        "D": "",
        "E": ""
      },
      {
        "row": 7,
        "A": "NIP-006",
        "B": "Faisal Reza",
        "C": "IT",
        "D": "",
        "E": ""
      }
    ],
    "targetCell": "E2",
    "instruction": "Tulis rumus =VLOOKUP(D2, A2:C7, 2, FALSE) di sel E2.",
    "babyHint": "🍼 Bahasa Bayi: =VLOOKUP(D2, A2:C7, 2, FALSE). Ambil kolom ke-2 karena kolom Nama berada di urutan kedua!",
    "starterFormula": "=VLOOKUP(",
    "quickChips": [
      "=VLOOKUP(",
      "D2",
      "A2:C7",
      "2",
      "FALSE",
      ")",
      "0",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=VLOOKUP(D2,A2:C7,2,FALSE)",
      "=VLOOKUP(D2;A2:C7;2;FALSE)",
      "=VLOOKUP(D2, A2:C7, 2, FALSE)",
      "=VLOOKUP(D2,A2:C7,2,0)",
      "=VLOOKUP(D2;A2:C7;2;0)",
      "=VLOOKUP(D2, A2:C7, 2, 0)"
    ],
    "expectedValue": "Deni Kurnia",
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Mencari Judul Buku dari Kode ISBN",
      "kasusSerupa": "Tabel Perpustakaan: ISBN di A2, Judul di B2. Rumus: =VLOOKUP(D2, A2:B6, 2, FALSE).",
      "rumusContoh": "=VLOOKUP(D2, A2:B6, 2, FALSE)",
      "nalarBayi": "Excel mencocokkan kode ISBN di kolom A dan memberikan judul buku di kolom B!"
    }
  },
  {
    "id": "xl-34",
    "category": "4. Pencarian Data & Lookup",
    "title": "Tantangan 34: Menentukan Komisi Bertingkat (VLOOKUP TRUE / Rentang)",
    "scenario": "Sales memiliki omset di sel B2 (15000000). Cari persentase komisi di sel C2 menggunakan tabel jenjang komisi di E2:F6 (omset di kolom E, persen di kolom F). Gunakan mode aproksimasi TRUE atau 1.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Sales",
        "B": "Omset (Rp)",
        "C": "Komisi (%)",
        "D": "",
        "E": "Min Omset",
        "F": "Tarif"
      },
      {
        "row": 2,
        "A": "Rina",
        "B": 15000000,
        "C": "",
        "D": "",
        "E": 0,
        "F": 0.02
      },
      {
        "row": 3,
        "A": "Toni",
        "B": 8000000,
        "C": "",
        "D": "",
        "E": 5000000,
        "F": 0.04
      },
      {
        "row": 4,
        "A": "Mega",
        "B": 25000000,
        "C": "",
        "D": "",
        "E": 10000000,
        "F": 0.06
      },
      {
        "row": 5,
        "A": "",
        "B": "",
        "C": "",
        "D": "",
        "E": 20000000,
        "F": 0.08
      },
      {
        "row": 6,
        "A": "",
        "B": "",
        "C": "",
        "D": "",
        "E": 30000000,
        "F": 0.1
      }
    ],
    "targetCell": "C2",
    "instruction": "Ketik rumus =VLOOKUP(B2, E2:F6, 2, TRUE) di sel C2 untuk mencari tarif komisi 15 Juta.",
    "babyHint": "🍼 Bahasa Bayi: =VLOOKUP(B2, E2:F6, 2, TRUE). TRUE artinya mencari nilai pendekatan terdekat di bawahnya!",
    "starterFormula": "=VLOOKUP(",
    "quickChips": [
      "=VLOOKUP(",
      "B2",
      "E2:F6",
      "2",
      "TRUE",
      ")",
      "1",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=VLOOKUP(B2,E2:F6,2,TRUE)",
      "=VLOOKUP(B2;E2:F6;2;TRUE)",
      "=VLOOKUP(B2, E2:F6, 2, TRUE)",
      "=VLOOKUP(B2,E2:F6,2,1)",
      "=VLOOKUP(B2;E2:F6;2;1)",
      "=VLOOKUP(B2, E2:F6, 2, 1)"
    ],
    "expectedValue": 0.06,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Menentukan Nilai Huruf dari Skor Ujian",
      "kasusSerupa": "Tabel Skala: Skor 78 di B2 dicocokkan ke tabel skala [0='E', 60='D', 70='C', 80='B', 90='A'].",
      "rumusContoh": "=VLOOKUP(B2, E2:F6, 2, TRUE)",
      "nalarBayi": "Karena 78 berada di antara 70 dan 80, Excel memilih batas bawahnya yaitu 70 dan menghasilkan 'C'!"
    }
  },
  {
    "id": "xl-35",
    "category": "4. Pencarian Data & Lookup",
    "title": "Tantangan 35: Mencari Tarif dari Tabel Horizontal (HLOOKUP)",
    "scenario": "Ekspedisi memiliki tabel tarif mendatar di baris 1 dan 2 (B1:F2: Golongan Berat di B1:F1, Tarif Ongkir di B2:F2). Cari tarif untuk golongan di sel B4 (Golongan 3) di sel C4.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Golongan:",
        "B": 1,
        "C": 2,
        "D": 3,
        "E": 4,
        "F": 5
      },
      {
        "row": 2,
        "A": "Tarif (Rp):",
        "B": 10000,
        "C": 18000,
        "D": 25000,
        "E": 32000,
        "F": 40000
      },
      {
        "row": 3,
        "A": "",
        "B": "",
        "C": "",
        "D": "",
        "E": "",
        "F": ""
      },
      {
        "row": 4,
        "A": "Paket A",
        "B": 3,
        "C": "",
        "D": "",
        "E": "",
        "F": ""
      }
    ],
    "targetCell": "C4",
    "instruction": "Tulis rumus =HLOOKUP(B4, B1:F2, 2, FALSE) di sel C4 untuk mencari tarif golongan 3.",
    "babyHint": "🍼 Bahasa Bayi: =HLOOKUP(B4, B1:F2, 2, FALSE). HLOOKUP adalah Horizontal Lookup, mencari ke samping kanan lalu turun ke bawah!",
    "starterFormula": "=HLOOKUP(",
    "quickChips": [
      "=HLOOKUP(",
      "B4",
      "B1:F2",
      "2",
      "FALSE",
      ")",
      "0",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=HLOOKUP(B4,B1:F2,2,FALSE)",
      "=HLOOKUP(B4;B1:F2;2;FALSE)",
      "=HLOOKUP(B4, B1:F2, 2, FALSE)",
      "=HLOOKUP(B4,B1:F2,2,0)",
      "=HLOOKUP(B4;B1:F2;2;0)",
      "=HLOOKUP(B4, B1:F2, 2, 0)"
    ],
    "expectedValue": 25000,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Mencari Diskon Pembelian Grosir Mendatar",
      "kasusSerupa": "Tabel Grosir: Jumlah di B1:D1 [10, 50, 100], Diskon di B2:D2 [5%, 10%, 15%]. Rumus: =HLOOKUP(B4, B1:D2, 2, TRUE).",
      "rumusContoh": "=HLOOKUP(B4, B1:D2, 2, TRUE)",
      "nalarBayi": "Excel mencari kolom yang sesuai di baris 1, lalu meluncur ke baris 2 untuk mengambil persen diskon!"
    }
  },
  {
    "id": "xl-36",
    "category": "4. Pencarian Data & Lookup",
    "title": "Tantangan 36: Rumus Modern Anti Ribet (XLOOKUP)",
    "scenario": "Cari Gaji Pokok karyawan di sel E2 berdasarkan Nama Karyawan di sel D2 ('Citra Dewi') dari tabel data A2:C7. Kolom nama di B2:B7 dan kolom gaji di C2:C7.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "ID",
        "B": "Nama Karyawan",
        "C": "Gaji Pokok (Rp)",
        "D": "Cari Nama",
        "E": "Gaji"
      },
      {
        "row": 2,
        "A": 101,
        "B": "Andi Saputra",
        "C": 5500000,
        "D": "Citra Dewi",
        "E": ""
      },
      {
        "row": 3,
        "A": 102,
        "B": "Bunga Melati",
        "C": 6200000,
        "D": "",
        "E": ""
      },
      {
        "row": 4,
        "A": 103,
        "B": "Citra Dewi",
        "C": 7800000,
        "D": "",
        "E": ""
      },
      {
        "row": 5,
        "A": 104,
        "B": "Deni Pratama",
        "C": 5000000,
        "D": "",
        "E": ""
      },
      {
        "row": 6,
        "A": 105,
        "B": "Eko Prasetyo",
        "C": 6700000,
        "D": "",
        "E": ""
      },
      {
        "row": 7,
        "A": 106,
        "B": "Fani Rahma",
        "C": 5200000,
        "D": "",
        "E": ""
      }
    ],
    "targetCell": "E2",
    "instruction": "Tulis rumus modern =XLOOKUP(D2, B2:B7, C2:C7) di sel E2.",
    "babyHint": "🍼 Bahasa Bayi: =XLOOKUP(D2, B2:B7, C2:C7). XLOOKUP formula masa depan! Tinggal tunjuk kata yang dicari, kolom asal, dan kolom tujuan!",
    "starterFormula": "=XLOOKUP(",
    "quickChips": [
      "=XLOOKUP(",
      "D2",
      "B2:B7",
      "C2:C7",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=XLOOKUP(D2,B2:B7,C2:C7)",
      "=XLOOKUP(D2;B2:B7;C2:C7)",
      "=XLOOKUP(D2, B2:B7, C2:C7)"
    ],
    "expectedValue": 7800000,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Mencari Email Siswa dari Nama Lengkap",
      "kasusSerupa": "Tabel Siswa: Nama di A2:A5, Email di B2:B5. Cari nama D2. Rumus: =XLOOKUP(D2, A2:A5, B2:B5).",
      "rumusContoh": "=XLOOKUP(D2, A2:A5, B2:B5)",
      "nalarBayi": "XLOOKUP sangat pintar dan otomatis mencari kecocokan persis tanpa perlu ketik FALSE lagi!"
    }
  },
  {
    "id": "xl-37",
    "category": "4. Pencarian Data & Lookup",
    "title": "Tantangan 37: Menemukan Posisi Baris Produk (MATCH)",
    "scenario": "Gudang ingin tahu produk 'Kopi Arabika' berada di urutan baris ke berapa di rentang A2:A8. Gunakan rumus MATCH dengan mode pencarian persis (0) di sel B9.",
    "tableHeaders": [
      "A",
      "B"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Nama Produk",
        "B": "Kategori"
      },
      {
        "row": 2,
        "A": "Teh Hijau",
        "B": "Minuman"
      },
      {
        "row": 3,
        "A": "Kopi Tubruk",
        "B": "Minuman"
      },
      {
        "row": 4,
        "A": "Coklat Bubuk",
        "B": "Minuman"
      },
      {
        "row": 5,
        "A": "Kopi Arabika",
        "B": "Minuman"
      },
      {
        "row": 6,
        "A": "Susu Kental",
        "B": "Minuman"
      },
      {
        "row": 7,
        "A": "Gula Pasir",
        "B": "Bahan"
      },
      {
        "row": 8,
        "A": "Sirup Vanila",
        "B": "Minuman"
      },
      {
        "row": 9,
        "A": "Posisi Arabika:",
        "B": ""
      }
    ],
    "targetCell": "B9",
    "instruction": "Tulis rumus =MATCH('Kopi Arabika', A2:A8, 0) di sel B9.",
    "babyHint": "🍼 Bahasa Bayi: =MATCH(\"Kopi Arabika\", A2:A8, 0). MATCH adalah detektif nomor baris! Dia menjawab ada di baris ke berapa!",
    "starterFormula": "=MATCH(",
    "quickChips": [
      "=MATCH(",
      "\"Kopi Arabika\"",
      "A2:A8",
      "0",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=MATCH(\"Kopi Arabika\",A2:A8,0)",
      "=MATCH(\"Kopi Arabika\";A2:A8;0)",
      "=MATCH(\"Kopi Arabika\", A2:A8, 0)"
    ],
    "expectedValue": 4,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Mengetahui Posisi Bulan Juni dalam Daftar",
      "kasusSerupa": "Tabel Bulan: Daftar bulan A1:A12. Rumus: =MATCH('Juni', A1:A12, 0).",
      "rumusContoh": "=MATCH(\"Juni\", A1:A12, 0)",
      "nalarBayi": "Karena Juni adalah bulan ke-6, MATCH langsung mengeluarkan angka 6!"
    }
  },
  {
    "id": "xl-38",
    "category": "4. Pencarian Data & Lookup",
    "title": "Tantangan 38: Mengambil Data pada Baris dan Kolom Tertentu (INDEX)",
    "scenario": "Ambil nilai data dari tabel A2:C7 yang terletak pada baris ke-3 dan kolom ke-2 di sel D2.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Kode",
        "B": "Nama Produk",
        "C": "Stok",
        "D": "Hasil Ambil"
      },
      {
        "row": 2,
        "A": "P-01",
        "B": "Mouse USB",
        "C": 45,
        "D": ""
      },
      {
        "row": 3,
        "A": "P-02",
        "B": "Keyboard RGB",
        "C": 30,
        "D": ""
      },
      {
        "row": 4,
        "A": "P-03",
        "B": "Headset Gaming",
        "C": 25,
        "D": ""
      },
      {
        "row": 5,
        "A": "P-04",
        "B": "Webcam HD",
        "C": 15,
        "D": ""
      },
      {
        "row": 6,
        "A": "P-05",
        "B": "Speaker Bluetooth",
        "C": 18,
        "D": ""
      },
      {
        "row": 7,
        "A": "P-06",
        "B": "Flashdisk 64GB",
        "C": 50,
        "D": ""
      }
    ],
    "targetCell": "D2",
    "instruction": "Tulis rumus =INDEX(A2:C7, 3, 2) di sel D2.",
    "babyHint": "🍼 Bahasa Bayi: =INDEX(A2:C7, 3, 2). INDEX seperti koordinat peta: baris ke-3, kolom ke-2!",
    "starterFormula": "=INDEX(",
    "quickChips": [
      "=INDEX(",
      "A2:C7",
      "3",
      "2",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=INDEX(A2:C7,3,2)",
      "=INDEX(A2:C7;3;2)",
      "=INDEX(A2:C7, 3, 2)"
    ],
    "expectedValue": "Headset Gaming",
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Mengambil Nama Juara 1 di Baris 1",
      "kasusSerupa": "Tabel Nilai: Tabel di A2:B5. Rumus: =INDEX(A2:B5, 1, 2).",
      "rumusContoh": "=INDEX(A2:B5, 1, 2)",
      "nalarBayi": "Excel pergi ke baris ke-1, kolom ke-2, lalu mengembalikan nama sang juara!"
    }
  },
  {
    "id": "xl-39",
    "category": "4. Pencarian Data & Lookup",
    "title": "Tantangan 39: Duet Maut Fleksibel Pencarian Data (INDEX + MATCH)",
    "scenario": "Cari Kota Asal karyawan di sel E2 berdasarkan Nama Karyawan di sel D2 ('Eko Prasetyo'). Kolom kota di C2:C7, kolom nama di B2:B7.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "ID",
        "B": "Nama Karyawan",
        "C": "Kota Asal",
        "D": "Cari Nama",
        "E": "Kota"
      },
      {
        "row": 2,
        "A": 101,
        "B": "Andi Saputra",
        "C": "Jakarta",
        "D": "Eko Prasetyo",
        "E": ""
      },
      {
        "row": 3,
        "A": 102,
        "B": "Bunga Melati",
        "C": "Bandung",
        "D": "",
        "E": ""
      },
      {
        "row": 4,
        "A": 103,
        "B": "Citra Dewi",
        "C": "Surabaya",
        "D": "",
        "E": ""
      },
      {
        "row": 5,
        "A": 104,
        "B": "Deni Pratama",
        "C": "Semarang",
        "D": "",
        "E": ""
      },
      {
        "row": 6,
        "A": 105,
        "B": "Eko Prasetyo",
        "C": "Yogyakarta",
        "D": "",
        "E": ""
      },
      {
        "row": 7,
        "A": 106,
        "B": "Fani Rahma",
        "C": "Solo",
        "D": "",
        "E": ""
      }
    ],
    "targetCell": "E2",
    "instruction": "Tulis rumus =INDEX(C2:C7, MATCH(D2, B2:B7, 0)) di sel E2.",
    "babyHint": "🍼 Bahasa Bayi: =INDEX(C2:C7, MATCH(D2, B2:B7, 0)). MATCH mencari posisi barisnya, lalu INDEX mengambil kotanya!",
    "starterFormula": "=INDEX(",
    "quickChips": [
      "=INDEX(",
      "C2:C7",
      "MATCH(",
      "D2",
      "B2:B7",
      "0",
      "))",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=INDEX(C2:C7,MATCH(D2,B2:B7,0))",
      "=INDEX(C2:C7;MATCH(D2;B2:B7;0))",
      "=INDEX(C2:C7, MATCH(D2, B2:B7, 0))"
    ],
    "expectedValue": "Yogyakarta",
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Mengambil Harga dari Nama Barang",
      "kasusSerupa": "Tabel: Harga di B2:B6, Nama di A2:A6. Cari nama D2: =INDEX(B2:B6, MATCH(D2, A2:A6, 0)).",
      "rumusContoh": "=INDEX(B2:B6, MATCH(D2, A2:A6, 0))",
      "nalarBayi": "Kombinasi ini jauh lebih fleksibel dari VLOOKUP karena bisa mencari ke arah mana saja!"
    }
  },
  {
    "id": "xl-40",
    "category": "4. Pencarian Data & Lookup",
    "title": "Tantangan 40: Mencari ke Kolom Kiri / Left Lookup (XLOOKUP Kiri)",
    "scenario": "VLOOKUP tradisional tidak bisa mencari ke sebelah kiri. XLOOKUP bisa! Cari Barcode di sel E2 (kolom A2:A7) berdasarkan Nama Produk di sel D2 ('Susu UHT', kolom B2:B7).",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Barcode",
        "B": "Nama Produk",
        "C": "Harga",
        "D": "Cari Produk",
        "E": "Barcode"
      },
      {
        "row": 2,
        "A": "BC-101",
        "B": "Kopi Sachet",
        "C": 3500,
        "D": "Susu UHT",
        "E": ""
      },
      {
        "row": 3,
        "A": "BC-102",
        "B": "Teh Celup",
        "C": 5000,
        "D": "",
        "E": ""
      },
      {
        "row": 4,
        "A": "BC-103",
        "B": "Susu UHT",
        "C": 7000,
        "D": "",
        "E": ""
      },
      {
        "row": 5,
        "A": "BC-104",
        "B": "Roti Gandum",
        "C": 12000,
        "D": "",
        "E": ""
      },
      {
        "row": 6,
        "A": "BC-105",
        "B": "Biskuit Coklat",
        "C": 8500,
        "D": "",
        "E": ""
      },
      {
        "row": 7,
        "A": "BC-106",
        "B": "Air Mineral",
        "C": 3000,
        "D": "",
        "E": ""
      }
    ],
    "targetCell": "E2",
    "instruction": "Tulis rumus =XLOOKUP(D2, B2:B7, A2:A7) di sel E2.",
    "babyHint": "🍼 Bahasa Bayi: =XLOOKUP(D2, B2:B7, A2:A7). XLOOKUP bebas mau ambil kolom sebelah kiri atau kanan!",
    "starterFormula": "=XLOOKUP(",
    "quickChips": [
      "=XLOOKUP(",
      "D2",
      "B2:B7",
      "A2:A7",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=XLOOKUP(D2,B2:B7,A2:A7)",
      "=XLOOKUP(D2;B2:B7;A2:A7)",
      "=XLOOKUP(D2, B2:B7, A2:A7)"
    ],
    "expectedValue": "BC-103",
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Mencari NIP dari Nama Karyawan",
      "kasusSerupa": "Tabel Pegawai: NIP di A2:A5 (kiri), Nama di B2:B5 (kanan). Rumus: =XLOOKUP(D2, B2:B5, A2:A5).",
      "rumusContoh": "=XLOOKUP(D2, B2:B5, A2:A5)",
      "nalarBayi": "Excel mencari nama di B lalu mengambil NIP di sebelah kirinya tanpa kendala!"
    }
  },
  {
    "id": "xl-41",
    "category": "4. Pencarian Data & Lookup",
    "title": "Tantangan 41: Menampilkan Pesan Khusus Bila Data Tidak Ada (XLOOKUP Default)",
    "scenario": "Kasir mencari nama barang di sel E2 berdasarkan kode di D2 ('KOD-999'). Jika kode tidak ditemukan, tampilkan teks 'Tidak Ditemukan' langsung di dalam argumen ke-4 XLOOKUP.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Kode Item",
        "B": "Nama Barang",
        "C": "Stok",
        "D": "Cari Kode",
        "E": "Status"
      },
      {
        "row": 2,
        "A": "KOD-001",
        "B": "Beras 5kg",
        "C": 20,
        "D": "KOD-999",
        "E": ""
      },
      {
        "row": 3,
        "A": "KOD-002",
        "B": "Minyak Goreng 2L",
        "C": 35,
        "D": "",
        "E": ""
      },
      {
        "row": 4,
        "A": "KOD-003",
        "B": "Gula Pasir 1kg",
        "C": 50,
        "D": "",
        "E": ""
      }
    ],
    "targetCell": "E2",
    "instruction": "Tulis rumus =XLOOKUP(D2, A2:A4, B2:B4, 'Tidak Ditemukan') di sel E2.",
    "babyHint": "🍼 Bahasa Bayi: =XLOOKUP(D2, A2:A4, B2:B4, \"Tidak Ditemukan\"). Argumen ke-4 XLOOKUP adalah penyelamat anti pesan error #N/A!",
    "starterFormula": "=XLOOKUP(",
    "quickChips": [
      "=XLOOKUP(",
      "D2",
      "A2:A4",
      "B2:B4",
      "\"Tidak Ditemukan\"",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=XLOOKUP(D2,A2:A4,B2:B4,\"Tidak Ditemukan\")",
      "=XLOOKUP(D2;A2:A4;B2:B4;\"Tidak Ditemukan\")",
      "=XLOOKUP(D2, A2:A4, B2:B4, \"Tidak Ditemukan\")"
    ],
    "expectedValue": "Tidak Ditemukan",
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Cek Nomor Anggota Member",
      "kasusSerupa": "Tabel Member: ID di A2:A5, Nama di B2:B5. Rumus: =XLOOKUP(D2, A2:A5, B2:B5, 'Bukan Member').",
      "rumusContoh": "=XLOOKUP(D2, A2:A5, B2:B5, \"Bukan Member\")",
      "nalarBayi": "Jika ID tidak terdaftar di sistem, Excel menampilkan 'Bukan Member' secara ramah!"
    }
  },
  {
    "id": "xl-42",
    "category": "5. Statistik Deskriptif & Peringkat",
    "title": "Tantangan 42: Menghitung Nilai Tengah Data (MEDIAN)",
    "scenario": "Workbook Dosen: Sheet 51 'median'. Dosen menghitung nilai tengah (median) dari rentang data angka A2:A11 di sel C12.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data",
        "B": "",
        "C": "Median"
      },
      {
        "row": 2,
        "A": 4,
        "B": "",
        "C": ""
      },
      {
        "row": 3,
        "A": 5,
        "B": "",
        "C": ""
      },
      {
        "row": 4,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 5,
        "A": 3,
        "B": "",
        "C": ""
      },
      {
        "row": 6,
        "A": 5,
        "B": "",
        "C": ""
      },
      {
        "row": 7,
        "A": 6,
        "B": "",
        "C": ""
      },
      {
        "row": 8,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 9,
        "A": 9,
        "B": "",
        "C": ""
      },
      {
        "row": 10,
        "A": 6,
        "B": "",
        "C": ""
      },
      {
        "row": 11,
        "A": 11,
        "B": "",
        "C": ""
      },
      {
        "row": 12,
        "A": "Hasil Median",
        "B": "",
        "C": ""
      }
    ],
    "targetCell": "C12",
    "instruction": "Ketik rumus =MEDIAN(A2:A11) di sel C12 sesuai petunjuk dosen.",
    "babyHint": "🍼 Bahasa Bayi: =MEDIAN(A2:A11). Median membagi data jadi dua bagian pas di tengah-tengah!",
    "starterFormula": "=MEDIAN(",
    "quickChips": [
      "=MEDIAN(",
      "A2:A11",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=MEDIAN(A2:A11)",
      "=MEDIAN(A2:A11)"
    ],
    "expectedValue": 6,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Nilai Tengah Gaji Karyawan",
      "kasusSerupa": "Tabel Gaji: Daftar gaji [3jt, 5jt, 9jt]. Rumus: =MEDIAN(A2:A4).",
      "rumusContoh": "=MEDIAN(A2:A4)",
      "nalarBayi": "Setelah data diurutkan, angka yang tepat berada di posisi tengah adalah 5jt!"
    }
  },
  {
    "id": "xl-43",
    "category": "5. Statistik Deskriptif & Peringkat",
    "title": "Tantangan 43: Menemukan Nilai Paling Sering Muncul / Modus (MODE)",
    "scenario": "Workbook Dosen: Sheet 54 'Mode'. Dosen mencari nilai modus (angka yang paling banyak frekuensi kemunculannya) di A2:A11 pada sel D12.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data",
        "B": "",
        "C": "",
        "D": "Modus"
      },
      {
        "row": 2,
        "A": 4,
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 3,
        "A": 5,
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 4,
        "A": 7,
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 5,
        "A": 3,
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 6,
        "A": 5,
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 7,
        "A": 6,
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 8,
        "A": 5,
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 9,
        "A": 9,
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 10,
        "A": 6,
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 11,
        "A": 5,
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 12,
        "A": "Hasil Modus",
        "B": "",
        "C": "",
        "D": ""
      }
    ],
    "targetCell": "D12",
    "instruction": "Ketik rumus =MODE(A2:A11) di sel D12 sesuai workbook dosen.",
    "babyHint": "🍼 Bahasa Bayi: =MODE(A2:A11). MODE itu Modus, mencari siapa yang paling laris dan sering nongol!",
    "starterFormula": "=MODE(",
    "quickChips": [
      "=MODE(",
      "A2:A11",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=MODE(A2:A11)",
      "=MODE(A2:A11)"
    ],
    "expectedValue": 5,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Ukuran Sepatu Terlaris di Toko",
      "kasusSerupa": "Tabel Kasir: Ukuran sepatu yang terjual [39, 42, 40, 42, 41, 42]. Rumus: =MODE(A2:A7).",
      "rumusContoh": "=MODE(A2:A7)",
      "nalarBayi": "Karena ukuran 42 muncul sebanyak 3 kali (paling banyak), maka modusnya adalah 42!"
    }
  },
  {
    "id": "xl-44",
    "category": "5. Statistik Deskriptif & Peringkat",
    "title": "Tantangan 44: Menentukan Peringkat Nilai Tertinggi (RANK Descending)",
    "scenario": "Workbook Dosen: Sheet 70 'Rank'. Dosen menentukan posisi ranking nilai 4 terhadap seluruh rentang data A2:A11 dengan urutan dari yang terbesar ke terkecil (order 0) di sel E12.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data",
        "B": "",
        "C": "",
        "D": "",
        "E": "Rank 4 (Besar ke Kecil)"
      },
      {
        "row": 2,
        "A": 4,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 3,
        "A": 5,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 4,
        "A": 7,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 5,
        "A": 3,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 6,
        "A": 5,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 7,
        "A": 6,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 8,
        "A": 7,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 9,
        "A": 9,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 10,
        "A": 6,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 11,
        "A": 11,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 12,
        "A": "Hasil Ranking",
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      }
    ],
    "targetCell": "E12",
    "instruction": "Ketik rumus =RANK(4, A2:A11, 0) di sel E12 persis lembar kerja dosen.",
    "babyHint": "🍼 Bahasa Bayi: =RANK(4, A2:A11, 0). Angka 0 di belakang artinya urutkan dari ranking 1 (nilai tertinggi)!",
    "starterFormula": "=RANK(",
    "quickChips": [
      "=RANK(",
      "4",
      "A2:A11",
      "0",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=RANK(4,A2:A11,0)",
      "=RANK(4;A2:A11;0)",
      "=RANK(4, A2:A11, 0)"
    ],
    "expectedValue": 9,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Menentukan Juara Kelas",
      "kasusSerupa": "Tabel Siswa: Nilai Budi di B2 (95) dibandingkan ke seluruh kelas B2:B10. Rumus: =RANK(B2, B2:B10, 0).",
      "rumusContoh": "=RANK(B2, B2:B10, 0)",
      "nalarBayi": "Karena nilai 95 paling tinggi di antara semua murid, Excel memberinya Ranking 1!"
    }
  },
  {
    "id": "xl-45",
    "category": "5. Statistik Deskriptif & Peringkat",
    "title": "Tantangan 45: Menentukan Juara Waktu Tercepat (RANK Ascending)",
    "scenario": "Workbook Dosen: Sheet 70 'Rank'. Pada lomba lari, waktu paling kecil adalah yang paling juara. Tentukan ranking angka 4 dengan urutan terkecil ke terbesar (order 1) di sel E13.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Waktu (Detik)",
        "B": "",
        "C": "",
        "D": "",
        "E": "Rank 4 (Kecil ke Besar)"
      },
      {
        "row": 2,
        "A": 4,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 3,
        "A": 5,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 4,
        "A": 7,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 5,
        "A": 3,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 6,
        "A": 5,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 7,
        "A": 6,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 8,
        "A": 7,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 9,
        "A": 9,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 10,
        "A": 6,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 11,
        "A": 11,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 12,
        "A": "",
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 13,
        "A": "Hasil Naik",
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      }
    ],
    "targetCell": "E13",
    "instruction": "Ketik rumus =RANK(4, A2:A11, 1) di sel E13.",
    "babyHint": "🍼 Bahasa Bayi: =RANK(4, A2:A11, 1). Angka 1 di belakang artinya urutan naik (angka paling kecil jadi juara 1)!",
    "starterFormula": "=RANK(",
    "quickChips": [
      "=RANK(",
      "4",
      "A2:A11",
      "1",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=RANK(4,A2:A11,1)",
      "=RANK(4;A2:A11;1)",
      "=RANK(4, A2:A11, 1)"
    ],
    "expectedValue": 2,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Peringkat Waktu Tempuh Balap Sepeda",
      "kasusSerupa": "Tabel Balap: Waktu tempuh di A2 (10 detik). Seluruh peserta di A2:A5 = [12, 10, 15, 8].",
      "rumusContoh": "=RANK(A2, A2:A5, 1)",
      "nalarBayi": "Hanya angka 8 yang lebih cepat dari 10, sehingga catatan waktu 10 detik berada di posisi peringkat ke-2!"
    }
  },
  {
    "id": "xl-46",
    "category": "5. Statistik Deskriptif & Peringkat",
    "title": "Tantangan 46: Mencari Nilai Terbesar ke-3 (LARGE)",
    "scenario": "Workbook Dosen: Sheet 46 'Large'. Dosen mencari angka terbesar ke-3 dari rentang data A2:A11 di sel C12.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data Nilai",
        "B": "",
        "C": "Terbesar ke-3"
      },
      {
        "row": 2,
        "A": 4,
        "B": "",
        "C": ""
      },
      {
        "row": 3,
        "A": 5,
        "B": "",
        "C": ""
      },
      {
        "row": 4,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 5,
        "A": 3,
        "B": "",
        "C": ""
      },
      {
        "row": 6,
        "A": 5,
        "B": "",
        "C": ""
      },
      {
        "row": 7,
        "A": 6,
        "B": "",
        "C": ""
      },
      {
        "row": 8,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 9,
        "A": 9,
        "B": "",
        "C": ""
      },
      {
        "row": 10,
        "A": 6,
        "B": "",
        "C": ""
      },
      {
        "row": 11,
        "A": 11,
        "B": "",
        "C": ""
      },
      {
        "row": 12,
        "A": "Hasil LARGE",
        "B": "",
        "C": ""
      }
    ],
    "targetCell": "C12",
    "instruction": "Ketik rumus =LARGE(A2:A11, 3) di sel C12.",
    "babyHint": "🍼 Bahasa Bayi: =LARGE(A2:A11, 3). Kalau MAX cuma cari nomor 1, LARGE bisa cari juara 2, 3, 4 bebas!",
    "starterFormula": "=LARGE(",
    "quickChips": [
      "=LARGE(",
      "A2:A11",
      "3",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=LARGE(A2:A11,3)",
      "=LARGE(A2:A11;3)",
      "=LARGE(A2:A11, 3)"
    ],
    "expectedValue": 7,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Mencari Penjualan Tertinggi Kedua (Runner-up)",
      "kasusSerupa": "Tabel Sales: Omset di B2:B6. Rumus: =LARGE(B2:B6, 2).",
      "rumusContoh": "=LARGE(B2:B6, 2)",
      "nalarBayi": "Excel mengurutkan omset dari yang terbesar lalu mengambil ranking nomor 2!"
    }
  },
  {
    "id": "xl-47",
    "category": "5. Statistik Deskriptif & Peringkat",
    "title": "Tantangan 47: Mencari Waktu Respon Tercepat ke-2 (SMALL)",
    "scenario": "Workbook Dosen: Sheet 74 'small'. Dosen mencari angka terkecil ke-2 dari rentang data A2:A11 di sel C12.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data Respon (ms)",
        "B": "",
        "C": "Terkecil ke-2"
      },
      {
        "row": 2,
        "A": 4,
        "B": "",
        "C": ""
      },
      {
        "row": 3,
        "A": 5,
        "B": "",
        "C": ""
      },
      {
        "row": 4,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 5,
        "A": 3,
        "B": "",
        "C": ""
      },
      {
        "row": 6,
        "A": 5,
        "B": "",
        "C": ""
      },
      {
        "row": 7,
        "A": 6,
        "B": "",
        "C": ""
      },
      {
        "row": 8,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 9,
        "A": 9,
        "B": "",
        "C": ""
      },
      {
        "row": 10,
        "A": 6,
        "B": "",
        "C": ""
      },
      {
        "row": 11,
        "A": 11,
        "B": "",
        "C": ""
      },
      {
        "row": 12,
        "A": "Hasil SMALL",
        "B": "",
        "C": ""
      }
    ],
    "targetCell": "C12",
    "instruction": "Ketik rumus =SMALL(A2:A11, 2) di sel C12.",
    "babyHint": "🍼 Bahasa Bayi: =SMALL(A2:A11, 2). SMALL adalah kebalikan LARGE, mencari angka terkecil ke-n!",
    "starterFormula": "=SMALL(",
    "quickChips": [
      "=SMALL(",
      "A2:A11",
      "2",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=SMALL(A2:A11,2)",
      "=SMALL(A2:A11;2)",
      "=SMALL(A2:A11, 2)"
    ],
    "expectedValue": 4,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Mencari Harga Termurah Nomor 2",
      "kasusSerupa": "Tabel Vendor: Penawaran harga [10jt, 7jt, 12jt, 8jt]. Rumus: =SMALL(A2:A5, 2).",
      "rumusContoh": "=SMALL(A2:A5, 2)",
      "nalarBayi": "Harga paling murah 7jt (ke-1), maka harga termurah kedua adalah 8jt!"
    }
  },
  {
    "id": "xl-48",
    "category": "5. Statistik Deskriptif & Peringkat",
    "title": "Tantangan 48: Rata-rata Deviasi Absolut Titik Tengah (AVEDEV)",
    "scenario": "Workbook Dosen: Sheet 1 'Avedev'. Dosen mengukur rata-rata penyimpangan nilai absolut dari rata-rata pada kumpulan data A2:A8 di sel C9.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data Nilai",
        "B": "",
        "C": "Hasil AVEDEV"
      },
      {
        "row": 2,
        "A": 5,
        "B": "",
        "C": ""
      },
      {
        "row": 3,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 4,
        "A": 8,
        "B": "",
        "C": ""
      },
      {
        "row": 5,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 6,
        "A": 3,
        "B": "",
        "C": ""
      },
      {
        "row": 7,
        "A": 5,
        "B": "",
        "C": ""
      },
      {
        "row": 8,
        "A": 4,
        "B": "",
        "C": ""
      },
      {
        "row": 9,
        "A": "AVEDEV",
        "B": "",
        "C": ""
      }
    ],
    "targetCell": "C9",
    "instruction": "Ketik rumus =AVEDEV(A2:A8) di sel C9 sesuai file materi dosen.",
    "babyHint": "🍼 Bahasa Bayi: =AVEDEV(A2:A8). AVEDEV menghitung seberapa jauh rata-rata angka menyimpang dari titik tengahnya!",
    "starterFormula": "=AVEDEV(",
    "quickChips": [
      "=AVEDEV(",
      "A2:A8",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=AVEDEV(A2:A8)",
      "=AVEDEV(A2:A8)"
    ],
    "expectedValue": 1.510204081632653,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Pengukuran Konsistensi Mesin Kopi",
      "kasusSerupa": "Tabel Suhu Mesin: Suhu air [88, 92, 90]. Rumus: =AVEDEV(A2:A4).",
      "rumusContoh": "=AVEDEV(A2:A4)",
      "nalarBayi": "Rata-rata adalah 90. Jarak absolut tiap angka ke 90 dirata-ratakan menghasilkan deviasi mesin!"
    }
  },
  {
    "id": "xl-49",
    "category": "5. Statistik Deskriptif & Peringkat",
    "title": "Tantangan 49: Rata-rata Tanpa Nilai Ekstrim Outlier (TRIMMEAN)",
    "scenario": "Workbook Dosen: Sheet 89 'Trimmean'. Dosen memotong 20% (0.2) data paling ujung atas dan bawah agar rata-rata tidak rusak oleh nilai pencilan di sel C12.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data",
        "B": "",
        "C": "Trimmean 20%"
      },
      {
        "row": 2,
        "A": 4,
        "B": "",
        "C": ""
      },
      {
        "row": 3,
        "A": 5,
        "B": "",
        "C": ""
      },
      {
        "row": 4,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 5,
        "A": 3,
        "B": "",
        "C": ""
      },
      {
        "row": 6,
        "A": 5,
        "B": "",
        "C": ""
      },
      {
        "row": 7,
        "A": 6,
        "B": "",
        "C": ""
      },
      {
        "row": 8,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 9,
        "A": 9,
        "B": "",
        "C": ""
      },
      {
        "row": 10,
        "A": 6,
        "B": "",
        "C": ""
      },
      {
        "row": 11,
        "A": 11,
        "B": "",
        "C": ""
      },
      {
        "row": 12,
        "A": "Hasil Trim",
        "B": "",
        "C": ""
      }
    ],
    "targetCell": "C12",
    "instruction": "Ketik rumus =TRIMMEAN(A2:A11, 0.2) di sel C12.",
    "babyHint": "🍼 Bahasa Bayi: =TRIMMEAN(A2:A11, 0.2). Memangkas nilai yang kelewat tinggi atau kelewat rendah sebelum dihitung rata-ratanya!",
    "starterFormula": "=TRIMMEAN(",
    "quickChips": [
      "=TRIMMEAN(",
      "A2:A11",
      "0.2",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=TRIMMEAN(A2:A11,0.2)",
      "=TRIMMEAN(A2:A11;0.2)",
      "=TRIMMEAN(A2:A11, 0.2)"
    ],
    "expectedValue": 6,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Penilaian Juri Lomba Tari",
      "kasusSerupa": "Tabel Juri: Nilai [60, 85, 88, 90, 100]. Nilai terendah 60 dan tertinggi 100 dipotong agar adil.",
      "rumusContoh": "=TRIMMEAN(A2:A6, 0.4)",
      "nalarBayi": "Rata-rata dihitung murni dari nilai juri penengah yang netral!"
    }
  },
  {
    "id": "xl-50",
    "category": "5. Statistik Deskriptif & Peringkat",
    "title": "Tantangan 50: Rata-rata Geometris Laju Pertumbuhan (GEOMEAN)",
    "scenario": "Workbook Dosen: Sheet 40 'Geomean'. Dosen menghitung rata-rata geometrik dari kumpulan faktor pertumbuhan investasi A2:A10 di sel E11.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Pertumbuhan",
        "B": "",
        "C": "",
        "D": "",
        "E": "Hasil GEOMEAN"
      },
      {
        "row": 2,
        "A": 8,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 3,
        "A": 7,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 4,
        "A": 5,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 5,
        "A": 9,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 6,
        "A": 10,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 7,
        "A": 7,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 8,
        "A": 8,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 9,
        "A": 7,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 10,
        "A": 6,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 11,
        "A": "Hasil Geomean",
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      }
    ],
    "targetCell": "E11",
    "instruction": "Ketik rumus =GEOMEAN(A2:A10) di sel E11.",
    "babyHint": "🍼 Bahasa Bayi: =GEOMEAN(A2:A10). GEOMEAN dipakai untuk merata-ratakan persen pertumbuhan atau bunga berbunga!",
    "starterFormula": "=GEOMEAN(",
    "quickChips": [
      "=GEOMEAN(",
      "A2:A10",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=GEOMEAN(A2:A10)",
      "=GEOMEAN(A2:A10)"
    ],
    "expectedValue": 7.305478229924927,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Pertumbuhan Penjualan Perusahaan Tahunan",
      "kasusSerupa": "Tabel Saham: Faktor pengali tiap tahun [1.2, 1.5, 1.1]. Rumus: =GEOMEAN(A2:A4).",
      "rumusContoh": "=GEOMEAN(A2:A4)",
      "nalarBayi": "Menghitung akar pangkat ke-n dari perkalian seluruh faktor pertumbuhan!"
    }
  },
  {
    "id": "xl-51",
    "category": "5. Statistik Deskriptif & Peringkat",
    "title": "Tantangan 51: Rata-rata Harmonik Kecepatan Armada (HARMEAN)",
    "scenario": "Workbook Dosen: Sheet 42 'Harmean'. Dosen menghitung rata-rata harmonik data rasio A2:A10 di sel E11.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Kecepatan (Km/Jam)",
        "B": "",
        "C": "",
        "D": "",
        "E": "Hasil HARMEAN"
      },
      {
        "row": 2,
        "A": 8,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 3,
        "A": 7,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 4,
        "A": 5,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 5,
        "A": 9,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 6,
        "A": 10,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 7,
        "A": 7,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 8,
        "A": 8,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 9,
        "A": 7,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 10,
        "A": 6,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 11,
        "A": "Hasil Harmean",
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      }
    ],
    "targetCell": "E11",
    "instruction": "Ketik rumus =HARMEAN(A2:A10) di sel E11.",
    "babyHint": "🍼 Bahasa Bayi: =HARMEAN(A2:A10). HARMEAN sangat jitu untuk menghitung rata-rata kecepatan perjalanan!",
    "starterFormula": "=HARMEAN(",
    "quickChips": [
      "=HARMEAN(",
      "A2:A10",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=HARMEAN(A2:A10)",
      "=HARMEAN(A2:A10)"
    ],
    "expectedValue": 7.078496417726569,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Kecepatan Bolak-Balik Mobil",
      "kasusSerupa": "Tabel Logistik: Pergi 60 km/jam, pulang 40 km/jam. Rumus: =HARMEAN(A2:A3).",
      "rumusContoh": "=HARMEAN(A2:A3)",
      "nalarBayi": "Rata-rata harmoniknya adalah 48 km/jam, bukan 50 km/jam!"
    }
  },
  {
    "id": "xl-52",
    "category": "5. Statistik Deskriptif & Peringkat",
    "title": "Tantangan 52: Menghitung Z-Score Standarisasi Nilai (STANDARDIZE)",
    "scenario": "Workbook Dosen: Sheet 75 'Stnadardize'. Dosen menghitung nilai standarisasi (Z-score) untuk angka di A2 (55) dengan rata-rata 50 dan standar deviasi 10 di sel C2.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Nilai Siswa",
        "B": "Keterangan",
        "C": "Z-Score (STANDARDIZE)"
      },
      {
        "row": 2,
        "A": 55,
        "B": "Mean=50, Stdev=10",
        "C": ""
      }
    ],
    "targetCell": "C2",
    "instruction": "Ketik rumus =STANDARDIZE(A2, 50, 10) di sel C2.",
    "babyHint": "🍼 Bahasa Bayi: =STANDARDIZE(A2, 50, 10). Rumusnya: (Nilai - Rata_Rata) / Standar_Deviasi. (55 - 50) / 10 = 0.5!",
    "starterFormula": "=STANDARDIZE(",
    "quickChips": [
      "=STANDARDIZE(",
      "A2",
      "50",
      "10",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=STANDARDIZE(A2,50,10)",
      "=STANDARDIZE(A2;50;10)",
      "=STANDARDIZE(A2, 50, 10)"
    ],
    "expectedValue": 0.5,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Membandingkan Skor TOEFL Antar Periode",
      "kasusSerupa": "Tabel Tes: Nilai 550, Mean 500, Stdev 50. Rumus: =STANDARDIZE(550, 500, 50).",
      "rumusContoh": "=STANDARDIZE(550, 500, 50)",
      "nalarBayi": "Hasilnya adalah 1.0 (nilai peserta berada 1 standar deviasi di atas rata-rata populasi)!"
    }
  },
  {
    "id": "xl-53",
    "category": "6. Sebaran, Kuartil & Probabilitas",
    "title": "Tantangan 53: Menentukan Batas Kuartil 1 / 25% Bawah (QUARTILE.INC)",
    "scenario": "Workbook Dosen: Sheet 69 'Quartile.inc'. Dosen menghitung Kuartil ke-1 (25% nilai terendah) dari rentang data A2:A11 di sel E12.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data Nilai",
        "B": "",
        "C": "",
        "D": "",
        "E": "Kuartil 1 (25%)"
      },
      {
        "row": 2,
        "A": 4,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 3,
        "A": 5,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 4,
        "A": 7,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 5,
        "A": 3,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 6,
        "A": 5,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 7,
        "A": 6,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 8,
        "A": 7,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 9,
        "A": 9,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 10,
        "A": 6,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 11,
        "A": 11,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 12,
        "A": "Hasil Q1",
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      }
    ],
    "targetCell": "E12",
    "instruction": "Ketik rumus =QUARTILE.INC(A2:A11, 1) di sel E12.",
    "babyHint": "🍼 Bahasa Bayi: =QUARTILE.INC(A2:A11, 1). Kuartil membagi data jadi 4 bagian sama rata. Kuartil 1 adalah batas 25% pertama!",
    "starterFormula": "=QUARTILE.INC(",
    "quickChips": [
      "=QUARTILE.INC(",
      "A2:A11",
      "1",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=QUARTILE.INC(A2:A11,1)",
      "=QUARTILE.INC(A2:A11;1)",
      "=QUARTILE.INC(A2:A11, 1)",
      "=QUARTILE(A2:A11,1)",
      "=QUARTILE(A2:A11, 1)"
    ],
    "expectedValue": 5,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Menentukan Batas Bonus Karyawan Rendah",
      "kasusSerupa": "Tabel Evaluasi: Nilai [40, 50, 60, 70, 80, 90]. Rumus: =QUARTILE.INC(A2:A7, 1).",
      "rumusContoh": "=QUARTILE.INC(A2:A7, 1)",
      "nalarBayi": "Batas bawah 25% nilai terendah ditemukan di angka 52.5!"
    }
  },
  {
    "id": "xl-54",
    "category": "6. Sebaran, Kuartil & Probabilitas",
    "title": "Tantangan 54: Menentukan Batas Kuartil 3 / 75% Atas (QUARTILE.INC)",
    "scenario": "Workbook Dosen: Sheet 69 'Quartile.inc'. Dosen menghitung Kuartil ke-3 (75% data teratas) dari rentang data A2:A11 di sel E13.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data Nilai",
        "B": "",
        "C": "",
        "D": "",
        "E": "Kuartil 3 (75%)"
      },
      {
        "row": 2,
        "A": 4,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 3,
        "A": 5,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 4,
        "A": 7,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 5,
        "A": 3,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 6,
        "A": 5,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 7,
        "A": 6,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 8,
        "A": 7,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 9,
        "A": 9,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 10,
        "A": 6,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 11,
        "A": 11,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 12,
        "A": "",
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 13,
        "A": "Hasil Q3",
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      }
    ],
    "targetCell": "E13",
    "instruction": "Ketik rumus =QUARTILE.INC(A2:A11, 3) di sel E13.",
    "babyHint": "🍼 Bahasa Bayi: =QUARTILE.INC(A2:A11, 3). Kuartil 3 adalah garis batas untuk masuk kelompok 25% nilai paling hebat!",
    "starterFormula": "=QUARTILE.INC(",
    "quickChips": [
      "=QUARTILE.INC(",
      "A2:A11",
      "3",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=QUARTILE.INC(A2:A11,3)",
      "=QUARTILE.INC(A2:A11;3)",
      "=QUARTILE.INC(A2:A11, 3)",
      "=QUARTILE(A2:A11,3)",
      "=QUARTILE(A2:A11, 3)"
    ],
    "expectedValue": 7,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Menentukan Ambang Pelanggan VIP Prioritas",
      "kasusSerupa": "Tabel Belanja: Kuartil 3 pengeluaran pelanggan bulanan. Rumus: =QUARTILE.INC(A2:A10, 3).",
      "rumusContoh": "=QUARTILE.INC(A2:A10, 3)",
      "nalarBayi": "Pelanggan dengan belanja di atas kuartil 3 otomatis dipromosikan jadi VIP!"
    }
  },
  {
    "id": "xl-55",
    "category": "6. Sebaran, Kuartil & Probabilitas",
    "title": "Tantangan 55: Kuartil Eksklusif Tanpa Ujung (QUARTILE.EXC)",
    "scenario": "Workbook Dosen: Sheet 68 'Quartile.Exc'. Dosen menghitung kuartil pertama dengan metode eksklusif pada A2:A11 di sel E12.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data Nilai",
        "B": "",
        "C": "",
        "D": "",
        "E": "QUARTILE.EXC (1)"
      },
      {
        "row": 2,
        "A": 4,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 3,
        "A": 5,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 4,
        "A": 7,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 5,
        "A": 3,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 6,
        "A": 5,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 7,
        "A": 6,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 8,
        "A": 7,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 9,
        "A": 9,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 10,
        "A": 6,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 11,
        "A": 11,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 12,
        "A": "Hasil Q.EXC",
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      }
    ],
    "targetCell": "E12",
    "instruction": "Ketik rumus =QUARTILE.EXC(A2:A11, 1) di sel E12.",
    "babyHint": "🍼 Bahasa Bayi: =QUARTILE.EXC(A2:A11, 1). EXC singkatan dari Exclusive, membagi data dari rentang internal persentil murni!",
    "starterFormula": "=QUARTILE.EXC(",
    "quickChips": [
      "=QUARTILE.EXC(",
      "A2:A11",
      "1",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=QUARTILE.EXC(A2:A11,1)",
      "=QUARTILE.EXC(A2:A11;1)",
      "=QUARTILE.EXC(A2:A11, 1)"
    ],
    "expectedValue": 4.75,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Evaluasi Ketat Standar Industri",
      "kasusSerupa": "Tabel Toleransi Mesin: Data penyimpangan A2:A11. Rumus: =QUARTILE.EXC(A2:A11, 1).",
      "rumusContoh": "=QUARTILE.EXC(A2:A11, 1)",
      "nalarBayi": "Metode eksklusif menghitung batas kuartil dengan interpolasi 1/(N+1) yang lebih ketat!"
    }
  },
  {
    "id": "xl-56",
    "category": "6. Sebaran, Kuartil & Probabilitas",
    "title": "Tantangan 56: Menghitung Persentil ke-20 (PERCENTILE.INC)",
    "scenario": "Workbook Dosen: Sheet 62 'Percentile.inc'. Dosen menghitung persentil ke-20 (k=0.2) dari kumpulan data A2:A11 di sel E12.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data Nilai",
        "B": "",
        "C": "",
        "D": "",
        "E": "Persentil 20%"
      },
      {
        "row": 2,
        "A": 4,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 3,
        "A": 5,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 4,
        "A": 7,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 5,
        "A": 3,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 6,
        "A": 5,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 7,
        "A": 6,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 8,
        "A": 7,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 9,
        "A": 9,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 10,
        "A": 6,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 11,
        "A": 11,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 12,
        "A": "Hasil P20",
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      }
    ],
    "targetCell": "E12",
    "instruction": "Ketik rumus =PERCENTILE.INC(A2:A11, 0.2) di sel E12 sesuai file materi dosen.",
    "babyHint": "🍼 Bahasa Bayi: =PERCENTILE.INC(A2:A11, 0.2). Persentil adalah pembagian data menjadi 100 potong. 0.2 berarti potongan ke-20%!",
    "starterFormula": "=PERCENTILE.INC(",
    "quickChips": [
      "=PERCENTILE.INC(",
      "A2:A11",
      "0.2",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=PERCENTILE.INC(A2:A11,0.2)",
      "=PERCENTILE.INC(A2:A11;0.2)",
      "=PERCENTILE.INC(A2:A11, 0.2)",
      "=PERCENTILE(A2:A11,0.2)",
      "=PERCENTILE(A2:A11, 0.2)"
    ],
    "expectedValue": 4.8,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Menghitung SLA Kecepatan Server 95%",
      "kasusSerupa": "Tabel Respon Server: Waktu loading di A2:A100. Rumus: =PERCENTILE.INC(A2:A100, 0.95).",
      "rumusContoh": "=PERCENTILE.INC(A2:A100, 0.95)",
      "nalarBayi": "Artinya 95% pengguna merasakan loading di bawah nilai persentil tersebut!"
    }
  },
  {
    "id": "xl-57",
    "category": "6. Sebaran, Kuartil & Probabilitas",
    "title": "Tantangan 57: Persentil Eksklusif 80% (PERCENTILE.EXC)",
    "scenario": "Workbook Dosen: Sheet 61 'Percentile.Exc'. Dosen menghitung persentil ke-80 (0.8) eksklusif pada rentang data A2:A11 di sel E12.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data Nilai",
        "B": "",
        "C": "",
        "D": "",
        "E": "Persentil EXC 80%"
      },
      {
        "row": 2,
        "A": 4,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 3,
        "A": 5,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 4,
        "A": 7,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 5,
        "A": 3,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 6,
        "A": 5,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 7,
        "A": 6,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 8,
        "A": 7,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 9,
        "A": 9,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 10,
        "A": 6,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 11,
        "A": 11,
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 12,
        "A": "Hasil P.EXC",
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      }
    ],
    "targetCell": "E12",
    "instruction": "Ketik rumus =PERCENTILE.EXC(A2:A11, 0.8) di sel E12.",
    "babyHint": "🍼 Bahasa Bayi: =PERCENTILE.EXC(A2:A11, 0.8). Mencari batas persentil dengan mengecualikan probabilitas 0 dan 1 mutlak!",
    "starterFormula": "=PERCENTILE.EXC(",
    "quickChips": [
      "=PERCENTILE.EXC(",
      "A2:A11",
      "0.8",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=PERCENTILE.EXC(A2:A11,0.8)",
      "=PERCENTILE.EXC(A2:A11;0.8)",
      "=PERCENTILE.EXC(A2:A11, 0.8)"
    ],
    "expectedValue": 7.6,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Nilai Kelayakan Beasiswa S2",
      "kasusSerupa": "Tabel Seleksi: Skor di A2:A50. Batas 80% atas dicari dengan: =PERCENTILE.EXC(A2:A50, 0.8).",
      "rumusContoh": "=PERCENTILE.EXC(A2:A50, 0.8)",
      "nalarBayi": "Hanya pelamar dengan skor melebihi angka ini yang dipanggil wawancara!"
    }
  },
  {
    "id": "xl-58",
    "category": "6. Sebaran, Kuartil & Probabilitas",
    "title": "Tantangan 58: Menghitung Peringkat Relatif Persentase (PERCENTRANK.INC)",
    "scenario": "Workbook Dosen: Sheet 64 'Percentrank.inc'. Dosen menghitung peringkat persentil nilai 5 terhadap seluruh rentang data A2:A11 di sel C12.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data Nilai",
        "B": "",
        "C": "Persen Rank 5"
      },
      {
        "row": 2,
        "A": 4,
        "B": "",
        "C": ""
      },
      {
        "row": 3,
        "A": 5,
        "B": "",
        "C": ""
      },
      {
        "row": 4,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 5,
        "A": 3,
        "B": "",
        "C": ""
      },
      {
        "row": 6,
        "A": 5,
        "B": "",
        "C": ""
      },
      {
        "row": 7,
        "A": 6,
        "B": "",
        "C": ""
      },
      {
        "row": 8,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 9,
        "A": 9,
        "B": "",
        "C": ""
      },
      {
        "row": 10,
        "A": 6,
        "B": "",
        "C": ""
      },
      {
        "row": 11,
        "A": 11,
        "B": "",
        "C": ""
      },
      {
        "row": 12,
        "A": "Hasil Rank %",
        "B": "",
        "C": ""
      }
    ],
    "targetCell": "C12",
    "instruction": "Ketik rumus =PERCENTRANK.INC(A2:A11, 5) di sel C12.",
    "babyHint": "🍼 Bahasa Bayi: =PERCENTRANK.INC(A2:A11, 5). Menjawab pertanyaan: 'Angka 5 ini mengalahkan berapa persen peserta lain?'!",
    "starterFormula": "=PERCENTRANK.INC(",
    "quickChips": [
      "=PERCENTRANK.INC(",
      "A2:A11",
      "5",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=PERCENTRANK.INC(A2:A11,5)",
      "=PERCENTRANK.INC(A2:A11;5)",
      "=PERCENTRANK.INC(A2:A11, 5)",
      "=PERCENTRANK(A2:A11,5)",
      "=PERCENTRANK(A2:A11, 5)"
    ],
    "expectedValue": 0.222,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Posisi Persentil Skor UTBK Siswa",
      "kasusSerupa": "Tabel UTBK: Skor 650 dibandingkan dengan seluruh peserta provinsi. Rumus: =PERCENTRANK.INC(A2:A1000, 650).",
      "rumusContoh": "=PERCENTRANK.INC(A2:A1000, 650)",
      "nalarBayi": "Jika hasilnya 0.85, artinya skor siswa tersebut lebih tinggi dari 85% siswa lainnya!"
    }
  },
  {
    "id": "xl-59",
    "category": "6. Sebaran, Kuartil & Probabilitas",
    "title": "Tantangan 59: Menghitung Probabilitas Nilai Tertentu (PROB)",
    "scenario": "Workbook Dosen: Sheet 67 'PROB'. Tabel A2:A5 berisi angka kejadian [9, 7, 3, 12], B2:B5 berisi probabilitas [0.2, 0.3, 0.1, 0.4]. Hitung probabilitas munculnya angka 7 di sel D6.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data Nilai",
        "B": "Probabilitas",
        "C": "",
        "D": "P(X = 7)"
      },
      {
        "row": 2,
        "A": 9,
        "B": 0.2,
        "C": "",
        "D": ""
      },
      {
        "row": 3,
        "A": 7,
        "B": 0.3,
        "C": "",
        "D": ""
      },
      {
        "row": 4,
        "A": 3,
        "B": 0.1,
        "C": "",
        "D": ""
      },
      {
        "row": 5,
        "A": 12,
        "B": 0.4,
        "C": "",
        "D": ""
      },
      {
        "row": 6,
        "A": "Hasil Prob",
        "B": "",
        "C": "",
        "D": ""
      }
    ],
    "targetCell": "D6",
    "instruction": "Ketik rumus =PROB(A2:A5, B2:B5, 7) di sel D6.",
    "babyHint": "🍼 Bahasa Bayi: =PROB(A2:A5, B2:B5, 7). PROB mencocokkan angka dengan peluang munculnya masing-masing!",
    "starterFormula": "=PROB(",
    "quickChips": [
      "=PROB(",
      "A2:A5",
      "B2:B5",
      "7",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=PROB(A2:A5,B2:B5,7)",
      "=PROB(A2:A5;B2:B5;7)",
      "=PROB(A2:A5, B2:B5, 7)"
    ],
    "expectedValue": 0.3,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Peluang Muncul Angka Dadu",
      "kasusSerupa": "Tabel Dadu: Mata dadu 1-6 masing-masing punya probabilitas 1/6. Rumus: =PROB(A2:A7, B2:B7, 4).",
      "rumusContoh": "=PROB(A2:A7, B2:B7, 4)",
      "nalarBayi": "Excel mengambil peluang munculnya mata dadu 4 yaitu 0.1667!"
    }
  },
  {
    "id": "xl-60",
    "category": "6. Sebaran, Kuartil & Probabilitas",
    "title": "Tantangan 60: Probabilitas Suatu Rentang Nilai (PROB Rentang)",
    "scenario": "Workbook Dosen: Sheet 67 'PROB'. Hitung peluang munculnya kejadian dalam rentang angka 1 sampai 3 (lower=1, upper=3) pada data A2:A5 dan B2:B5 di sel D7.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data Nilai",
        "B": "Probabilitas",
        "C": "",
        "D": "P(1 <= X <= 3)"
      },
      {
        "row": 2,
        "A": 9,
        "B": 0.2,
        "C": "",
        "D": ""
      },
      {
        "row": 3,
        "A": 7,
        "B": 0.3,
        "C": "",
        "D": ""
      },
      {
        "row": 4,
        "A": 3,
        "B": 0.1,
        "C": "",
        "D": ""
      },
      {
        "row": 5,
        "A": 12,
        "B": 0.4,
        "C": "",
        "D": ""
      },
      {
        "row": 6,
        "A": "",
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 7,
        "A": "P(1-3)",
        "B": "",
        "C": "",
        "D": ""
      }
    ],
    "targetCell": "D7",
    "instruction": "Ketik rumus =PROB(A2:A5, B2:B5, 1, 3) di sel D7.",
    "babyHint": "🍼 Bahasa Bayi: =PROB(A2:A5, B2:B5, 1, 3). Menjumlahkan peluang semua kejadian yang berada di antara angka 1 dan 3!",
    "starterFormula": "=PROB(",
    "quickChips": [
      "=PROB(",
      "A2:A5",
      "B2:B5",
      "1",
      "3",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=PROB(A2:A5,B2:B5,1,3)",
      "=PROB(A2:A5;B2:B5;1;3)",
      "=PROB(A2:A5, B2:B5, 1, 3)"
    ],
    "expectedValue": 0.1,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Peluang Jumlah Cacat Produksi Antara 0 Sampai 2",
      "kasusSerupa": "Tabel Cacat: Peluang cacat 0 (0.8), 1 (0.15), 2 (0.04). Rumus: =PROB(A2:A4, B2:B4, 0, 2).",
      "rumusContoh": "=PROB(A2:A4, B2:B4, 0, 2)",
      "nalarBayi": "Excel menjumlahkan 0.8 + 0.15 + 0.04 = 0.99!"
    }
  },
  {
    "id": "xl-61",
    "category": "6. Sebaran, Kuartil & Probabilitas",
    "title": "Tantangan 61: Mengukur Kecondongan Distribusi Data (SKEW)",
    "scenario": "Workbook Dosen: Sheet 72 'Skew'. Dosen mengukur derajat asimetri / kemiringan sebaran data A2:A11 di sel C12.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data Nilai",
        "B": "",
        "C": "Kemiringan (SKEW)"
      },
      {
        "row": 2,
        "A": 4,
        "B": "",
        "C": ""
      },
      {
        "row": 3,
        "A": 5,
        "B": "",
        "C": ""
      },
      {
        "row": 4,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 5,
        "A": 3,
        "B": "",
        "C": ""
      },
      {
        "row": 6,
        "A": 5,
        "B": "",
        "C": ""
      },
      {
        "row": 7,
        "A": 6,
        "B": "",
        "C": ""
      },
      {
        "row": 8,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 9,
        "A": 9,
        "B": "",
        "C": ""
      },
      {
        "row": 10,
        "A": 6,
        "B": "",
        "C": ""
      },
      {
        "row": 11,
        "A": 11,
        "B": "",
        "C": ""
      },
      {
        "row": 12,
        "A": "Hasil SKEW",
        "B": "",
        "C": ""
      }
    ],
    "targetCell": "C12",
    "instruction": "Ketik rumus =SKEW(A2:A11) di sel C12 sesuai petunjuk materi dosen.",
    "babyHint": "🍼 Bahasa Bayi: =SKEW(A2:A11). SKEW mengecek apakah grafik data lebih miring ke kiri (negatif) atau condong ke kanan (positif)!",
    "starterFormula": "=SKEW(",
    "quickChips": [
      "=SKEW(",
      "A2:A11",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=SKEW(A2:A11)",
      "=SKEW(A2:A11)"
    ],
    "expectedValue": 0.6974751522204781,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Distribusi Pendapatan Masyarakat",
      "kasusSerupa": "Tabel Gaji: Mayoritas bergaji standar tapi ada beberapa konglomerat berpenghasilan super raksasa.",
      "rumusContoh": "=SKEW(A2:A20)",
      "nalarBayi": "Nilai SKEW positif menunjukkan ekor data memanjang ke kanan ke arah nilai tinggi!"
    }
  },
  {
    "id": "xl-62",
    "category": "6. Sebaran, Kuartil & Probabilitas",
    "title": "Tantangan 62: Mengukur Keruncingan Puncak Kurva (KURT)",
    "scenario": "Workbook Dosen: Sheet 45 'Kurt'. Dosen mengukur derajat keruncingan (kurtosis) distribusi data A2:A11 di sel C12.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data Nilai",
        "B": "",
        "C": "Keruncingan (KURT)"
      },
      {
        "row": 2,
        "A": 4,
        "B": "",
        "C": ""
      },
      {
        "row": 3,
        "A": 5,
        "B": "",
        "C": ""
      },
      {
        "row": 4,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 5,
        "A": 3,
        "B": "",
        "C": ""
      },
      {
        "row": 6,
        "A": 5,
        "B": "",
        "C": ""
      },
      {
        "row": 7,
        "A": 6,
        "B": "",
        "C": ""
      },
      {
        "row": 8,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 9,
        "A": 9,
        "B": "",
        "C": ""
      },
      {
        "row": 10,
        "A": 6,
        "B": "",
        "C": ""
      },
      {
        "row": 11,
        "A": 11,
        "B": "",
        "C": ""
      },
      {
        "row": 12,
        "A": "Hasil KURT",
        "B": "",
        "C": ""
      }
    ],
    "targetCell": "C12",
    "instruction": "Ketik rumus =KURT(A2:A11) di sel C12.",
    "babyHint": "🍼 Bahasa Bayi: =KURT(A2:A11). KURT mengecek apakah gunung kurva datanya lancip menjulang tinggi atau landai datar!",
    "starterFormula": "=KURT(",
    "quickChips": [
      "=KURT(",
      "A2:A11",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=KURT(A2:A11)",
      "=KURT(A2:A11)"
    ],
    "expectedValue": 0.7251787682333464,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Uji Volatilitas Fluktuasi Saham",
      "kasusSerupa": "Tabel Saham: Return harian saham di A2:A30. Rumus: =KURT(A2:A30).",
      "rumusContoh": "=KURT(A2:A30)",
      "nalarBayi": "Kurtosis tinggi menandakan sering terjadi lonjakan ekstrim (risiko ekor tebal)!"
    }
  },
  {
    "id": "xl-63",
    "category": "7. Varians, Deviasi & Korelasi",
    "title": "Tantangan 63: Standar Deviasi Sampel Data (STDEV.S)",
    "scenario": "Workbook Dosen: Sheet 77 'stdev.s'. Dosen menghitung standar deviasi sampel dari sekumpulan data A2:A11 di sel C12.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data Sampel",
        "B": "",
        "C": "STDEV.S"
      },
      {
        "row": 2,
        "A": 4,
        "B": "",
        "C": ""
      },
      {
        "row": 3,
        "A": 5,
        "B": "",
        "C": ""
      },
      {
        "row": 4,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 5,
        "A": 3,
        "B": "",
        "C": ""
      },
      {
        "row": 6,
        "A": 5,
        "B": "",
        "C": ""
      },
      {
        "row": 7,
        "A": 6,
        "B": "",
        "C": ""
      },
      {
        "row": 8,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 9,
        "A": 9,
        "B": "",
        "C": ""
      },
      {
        "row": 10,
        "A": 6,
        "B": "",
        "C": ""
      },
      {
        "row": 11,
        "A": 11,
        "B": "",
        "C": ""
      },
      {
        "row": 12,
        "A": "Hasil Deviasi",
        "B": "",
        "C": ""
      }
    ],
    "targetCell": "C12",
    "instruction": "Ketik rumus =STDEV.S(A2:A11) di sel C12 sesuai file latihan dosen.",
    "babyHint": "🍼 Bahasa Bayi: =STDEV.S(A2:A11). Standar Deviasi mengukur seberapa terpencar dan bervariasinya data dari rata-ratanya!",
    "starterFormula": "=STDEV.S(",
    "quickChips": [
      "=STDEV.S(",
      "A2:A11",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=STDEV.S(A2:A11)",
      "=STDEV.S(A2:A11)",
      "=STDEV(A2:A11)"
    ],
    "expectedValue": 2.3593784492248524,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Uji Kestabilan Daya Tahan Lampu LED",
      "kasusSerupa": "Tabel QC: Masa hidup 5 sampel lampu [1000, 1050, 980, 1020, 990] jam. Rumus: =STDEV.S(A2:A6).",
      "rumusContoh": "=STDEV.S(A2:A6)",
      "nalarBayi": "Semakin kecil nilai standar deviasi, kualitas produk semakin seragam dan konsisten!"
    }
  },
  {
    "id": "xl-64",
    "category": "7. Varians, Deviasi & Hubungan",
    "title": "Tantangan 64: Standar Deviasi Seluruh Populasi Pegawai (STDEV.P)",
    "scenario": "Workbook Dosen: Sheet 76 'stdev.p'. Jika data A2:A11 adalah seluruh populasi lengkap (bukan sampel), hitung standar deviasi populasi di sel C12.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data Populasi",
        "B": "",
        "C": "STDEV.P"
      },
      {
        "row": 2,
        "A": 4,
        "B": "",
        "C": ""
      },
      {
        "row": 3,
        "A": 5,
        "B": "",
        "C": ""
      },
      {
        "row": 4,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 5,
        "A": 3,
        "B": "",
        "C": ""
      },
      {
        "row": 6,
        "A": 5,
        "B": "",
        "C": ""
      },
      {
        "row": 7,
        "A": 6,
        "B": "",
        "C": ""
      },
      {
        "row": 8,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 9,
        "A": 9,
        "B": "",
        "C": ""
      },
      {
        "row": 10,
        "A": 6,
        "B": "",
        "C": ""
      },
      {
        "row": 11,
        "A": 11,
        "B": "",
        "C": ""
      },
      {
        "row": 12,
        "A": "Hasil Deviasi P",
        "B": "",
        "C": ""
      }
    ],
    "targetCell": "C12",
    "instruction": "Ketik rumus =STDEV.P(A2:A11) di sel C12.",
    "babyHint": "🍼 Bahasa Bayi: =STDEV.P(A2:A11). Huruf P artinya Population. Pembaginya adalah N utuh tanpa dikurangi 1!",
    "starterFormula": "=STDEV.P(",
    "quickChips": [
      "=STDEV.P(",
      "A2:A11",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=STDEV.P(A2:A11)",
      "=STDEV.P(A2:A11)",
      "=STDEVP(A2:A11)"
    ],
    "expectedValue": 2.23830292856036,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Variasi Usia Seluruh Karyawan Satu Kantor",
      "kasusSerupa": "Tabel Kantor: Usia semua 20 karyawan di A2:A21. Rumus: =STDEV.P(A2:A21).",
      "rumusContoh": "=STDEV.P(A2:A21)",
      "nalarBayi": "Karena datanya lengkap meliputi seluruh orang di kantor, gunakan .P untuk hasil akurat!"
    }
  },
  {
    "id": "xl-65",
    "category": "7. Varians, Deviasi & Hubungan",
    "title": "Tantangan 65: Varians Sampel Data (VAR.S)",
    "scenario": "Workbook Dosen: Sheet 91 'Var.s'. Dosen menghitung nilai varians sampel dari rentang A2:A11 di sel C12.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data Nilai",
        "B": "",
        "C": "Varians (VAR.S)"
      },
      {
        "row": 2,
        "A": 4,
        "B": "",
        "C": ""
      },
      {
        "row": 3,
        "A": 5,
        "B": "",
        "C": ""
      },
      {
        "row": 4,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 5,
        "A": 3,
        "B": "",
        "C": ""
      },
      {
        "row": 6,
        "A": 5,
        "B": "",
        "C": ""
      },
      {
        "row": 7,
        "A": 6,
        "B": "",
        "C": ""
      },
      {
        "row": 8,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 9,
        "A": 9,
        "B": "",
        "C": ""
      },
      {
        "row": 10,
        "A": 6,
        "B": "",
        "C": ""
      },
      {
        "row": 11,
        "A": 11,
        "B": "",
        "C": ""
      },
      {
        "row": 12,
        "A": "Hasil Varians",
        "B": "",
        "C": ""
      }
    ],
    "targetCell": "C12",
    "instruction": "Ketik rumus =VAR.S(A2:A11) di sel C12.",
    "babyHint": "🍼 Bahasa Bayi: =VAR.S(A2:A11). Varians adalah kuadrat dari standar deviasi, induk dari pengukuran keragaman data!",
    "starterFormula": "=VAR.S(",
    "quickChips": [
      "=VAR.S(",
      "A2:A11",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=VAR.S(A2:A11)",
      "=VAR.S(A2:A11)",
      "=VAR(A2:A11)"
    ],
    "expectedValue": 5.566666666666666,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Pengukuran Keberagaman Skor Tes",
      "kasusSerupa": "Tabel Psikotes: Nilai sampel pelamar kerja di A2:A10. Rumus: =VAR.S(A2:A10).",
      "rumusContoh": "=VAR.S(A2:A10)",
      "nalarBayi": "Excel menghitung jumlah selisih kuadrat dari nilai rata-rata dibagi n-1!"
    }
  },
  {
    "id": "xl-66",
    "category": "7. Varians, Deviasi & Hubungan",
    "title": "Tantangan 66: Varians Seluruh Populasi Produksi (VAR.P)",
    "scenario": "Workbook Dosen: Sheet 90 'Var.p'. Dosen menghitung varians untuk seluruh populasi A2:A11 di sel C12.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data Populasi",
        "B": "",
        "C": "Varians (VAR.P)"
      },
      {
        "row": 2,
        "A": 4,
        "B": "",
        "C": ""
      },
      {
        "row": 3,
        "A": 5,
        "B": "",
        "C": ""
      },
      {
        "row": 4,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 5,
        "A": 3,
        "B": "",
        "C": ""
      },
      {
        "row": 6,
        "A": 5,
        "B": "",
        "C": ""
      },
      {
        "row": 7,
        "A": 6,
        "B": "",
        "C": ""
      },
      {
        "row": 8,
        "A": 7,
        "B": "",
        "C": ""
      },
      {
        "row": 9,
        "A": 9,
        "B": "",
        "C": ""
      },
      {
        "row": 10,
        "A": 6,
        "B": "",
        "C": ""
      },
      {
        "row": 11,
        "A": 11,
        "B": "",
        "C": ""
      },
      {
        "row": 12,
        "A": "Hasil VAR.P",
        "B": "",
        "C": ""
      }
    ],
    "targetCell": "C12",
    "instruction": "Ketik rumus =VAR.P(A2:A11) di sel C12.",
    "babyHint": "🍼 Bahasa Bayi: =VAR.P(A2:A11). VAR.P menghitung varians murni tanpa koreksi sampel derajat kebebasan!",
    "starterFormula": "=VAR.P(",
    "quickChips": [
      "=VAR.P(",
      "A2:A11",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=VAR.P(A2:A11)",
      "=VAR.P(A2:A11)",
      "=VARP(A2:A11)"
    ],
    "expectedValue": 5.01,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Varians Dimensi Seluruh Baut Cetakan Pabrik",
      "kasusSerupa": "Tabel Pabrik: Panjang baut [50, 51, 49, 50, 50] mm. Rumus: =VAR.P(A2:A6).",
      "rumusContoh": "=VAR.P(A2:A6)",
      "nalarBayi": "Mengukur varians menyeluruh terhadap seluruh komponen batch produksi!"
    }
  },
  {
    "id": "xl-67",
    "category": "7. Varians, Deviasi & Hubungan",
    "title": "Tantangan 67: Jumlah Kuadrat Deviasi dari Nilai Rata-rata (DEVSQ)",
    "scenario": "Workbook Dosen: Sheet 26 'DEVSQ'. Dosen menghitung jumlah kuadrat penyimpangan nilai data A2:A7 terhadap rata-ratanya di sel D8.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data Nilai",
        "B": "",
        "C": "",
        "D": "DEVSQ"
      },
      {
        "row": 2,
        "A": 3,
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 3,
        "A": 5,
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 4,
        "A": 9,
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 5,
        "A": 7,
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 6,
        "A": 4,
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 7,
        "A": 8,
        "B": "",
        "C": "",
        "D": ""
      },
      {
        "row": 8,
        "A": "Hasil DEVSQ",
        "B": "",
        "C": "",
        "D": ""
      }
    ],
    "targetCell": "D8",
    "instruction": "Ketik rumus =DEVSQ(A2:A7) di sel D8 sesuai file latihan dosen.",
    "babyHint": "🍼 Bahasa Bayi: =DEVSQ(A2:A7). Deviasi dikuadratkan lalu dijumlahkan semuanya, hasilnya tepat 28!",
    "starterFormula": "=DEVSQ(",
    "quickChips": [
      "=DEVSQ(",
      "A2:A7",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=DEVSQ(A2:A7)",
      "=DEVSQ(A2:A7)"
    ],
    "expectedValue": 28,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Menghitung Komponen ANOVA",
      "kasusSerupa": "Tabel Statistik: Data [2, 4, 6]. Rata-ratanya 4. Kuadrat deviasi: (-2)^2 + (0)^2 + (2)^2 = 4 + 0 + 4 = 8.",
      "rumusContoh": "=DEVSQ(A2:A4)",
      "nalarBayi": "Excel menghitung total variasi kuadratik secara instan!"
    }
  },
  {
    "id": "xl-68",
    "category": "7. Varians, Deviasi & Hubungan",
    "title": "Tantangan 68: Korelasi Jumlah Anggota Keluarga vs Konsumsi Air (CORREL)",
    "scenario": "Workbook Dosen: Sheet 17 'Correl'. Dosen menghitung koefisien korelasi antara Jumlah Anggota Keluarga (A2:A10) dan Konsumsi Air per Bulan (B2:B10) di sel D11.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Anggota Keluarga",
        "B": "Konsumsi Air (M3)",
        "C": "",
        "D": "Korelasi (CORREL)"
      },
      {
        "row": 2,
        "A": 4,
        "B": 25,
        "C": "",
        "D": ""
      },
      {
        "row": 3,
        "A": 5,
        "B": 32,
        "C": "",
        "D": ""
      },
      {
        "row": 4,
        "A": 5,
        "B": 34,
        "C": "",
        "D": ""
      },
      {
        "row": 5,
        "A": 6,
        "B": 35,
        "C": "",
        "D": ""
      },
      {
        "row": 6,
        "A": 7,
        "B": 35,
        "C": "",
        "D": ""
      },
      {
        "row": 7,
        "A": 5,
        "B": 34,
        "C": "",
        "D": ""
      },
      {
        "row": 8,
        "A": 6,
        "B": 35,
        "C": "",
        "D": ""
      },
      {
        "row": 9,
        "A": 4,
        "B": 22,
        "C": "",
        "D": ""
      },
      {
        "row": 10,
        "A": 4,
        "B": 26,
        "C": "",
        "D": ""
      },
      {
        "row": 11,
        "A": "Nilai Korelasi",
        "B": "",
        "C": "",
        "D": ""
      }
    ],
    "targetCell": "D11",
    "instruction": "Ketik rumus =CORREL(A2:A10, B2:B10) di sel D11 sesuai contoh dosen.",
    "babyHint": "🍼 Bahasa Bayi: =CORREL(A2:A10, B2:B10). Korelasi mengukur keeratan hubungan: jika mendekati 1 artinya makin banyak orang, makin boros air!",
    "starterFormula": "=CORREL(",
    "quickChips": [
      "=CORREL(",
      "A2:A10",
      "B2:B10",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=CORREL(A2:A10,B2:B10)",
      "=CORREL(A2:A10;B2:B10)",
      "=CORREL(A2:A10, B2:B10)"
    ],
    "expectedValue": 0.8380297625852696,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Hubungan Biaya Iklan Medsos vs Omset Penjualan",
      "kasusSerupa": "Tabel Bisnis: Iklan di A2:A6, Omset di B2:B6. Rumus: =CORREL(A2:A6, B2:B6).",
      "rumusContoh": "=CORREL(A2:A6, B2:B6)",
      "nalarBayi": "Nilai korelasi 0.84 membuktikan bahwa belanja iklan sangat kuat mendongkrak omset!"
    }
  },
  {
    "id": "xl-69",
    "category": "7. Varians, Deviasi & Hubungan",
    "title": "Tantangan 69: Koefisien Korelasi Pearson (PEARSON)",
    "scenario": "Workbook Dosen: Sheet 60 'Pearson'. Dosen menghitung koefisien korelasi Pearson antara rentang A2:A10 dan B2:B10 di sel D11.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Anggota Keluarga",
        "B": "Konsumsi Air (M3)",
        "C": "",
        "D": "Pearson (r)"
      },
      {
        "row": 2,
        "A": 4,
        "B": 25,
        "C": "",
        "D": ""
      },
      {
        "row": 3,
        "A": 5,
        "B": 32,
        "C": "",
        "D": ""
      },
      {
        "row": 4,
        "A": 5,
        "B": 34,
        "C": "",
        "D": ""
      },
      {
        "row": 5,
        "A": 6,
        "B": 35,
        "C": "",
        "D": ""
      },
      {
        "row": 6,
        "A": 7,
        "B": 35,
        "C": "",
        "D": ""
      },
      {
        "row": 7,
        "A": 5,
        "B": 34,
        "C": "",
        "D": ""
      },
      {
        "row": 8,
        "A": 6,
        "B": 35,
        "C": "",
        "D": ""
      },
      {
        "row": 9,
        "A": 4,
        "B": 22,
        "C": "",
        "D": ""
      },
      {
        "row": 10,
        "A": 4,
        "B": 26,
        "C": "",
        "D": ""
      },
      {
        "row": 11,
        "A": "Hasil Pearson",
        "B": "",
        "C": "",
        "D": ""
      }
    ],
    "targetCell": "D11",
    "instruction": "Ketik rumus =PEARSON(A2:A10, B2:B10) di sel D11.",
    "babyHint": "🍼 Bahasa Bayi: =PEARSON(A2:A10, B2:B10). Rumus Pearson menghasilkan angka r korelasi linier dua variabel data!",
    "starterFormula": "=PEARSON(",
    "quickChips": [
      "=PEARSON(",
      "A2:A10",
      "B2:B10",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=PEARSON(A2:A10,B2:B10)",
      "=PEARSON(A2:A10;B2:B10)",
      "=PEARSON(A2:A10, B2:B10)"
    ],
    "expectedValue": 0.8380297625852696,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Hubungan Jam Belajar vs Nilai Ujian",
      "kasusSerupa": "Tabel Kampus: Jam belajar di A2:A10 dan Nilai di B2:B10. Rumus: =PEARSON(A2:A10, B2:B10).",
      "rumusContoh": "=PEARSON(A2:A10, B2:B10)",
      "nalarBayi": "Pearson memberikan koefisien korelasi linier parametrik standar riset ilmiah!"
    }
  },
  {
    "id": "xl-70",
    "category": "7. Varians, Deviasi & Hubungan",
    "title": "Tantangan 70: Kovarians Populasi Dua Variabel (COVARIANCE.P)",
    "scenario": "Workbook Dosen: Sheet 23 'Covariance.P'. Dosen mengukur kovarians populasi antara kelompok Data1 (A2:A6: 3, 5, 8, 9, 10) dan Data2 (B2:B6: 7, 8, 12, 14, 15) di sel C7.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data1",
        "B": "Data2",
        "C": "COVARIANCE.P"
      },
      {
        "row": 2,
        "A": 3,
        "B": 7,
        "C": ""
      },
      {
        "row": 3,
        "A": 5,
        "B": 8,
        "C": ""
      },
      {
        "row": 4,
        "A": 8,
        "B": 12,
        "C": ""
      },
      {
        "row": 5,
        "A": 9,
        "B": 14,
        "C": ""
      },
      {
        "row": 6,
        "A": 10,
        "B": 15,
        "C": ""
      },
      {
        "row": 7,
        "A": "Kovarians P",
        "B": "",
        "C": ""
      }
    ],
    "targetCell": "C7",
    "instruction": "Ketik rumus =COVARIANCE.P(A2:A6, B2:B6) di sel C7.",
    "babyHint": "🍼 Bahasa Bayi: =COVARIANCE.P(A2:A6, B2:B6). Mengukur arah hubungan: nilai positif artinya kalau Data1 naik, Data2 ikut naik!",
    "starterFormula": "=COVARIANCE.P(",
    "quickChips": [
      "=COVARIANCE.P(",
      "A2:A6",
      "B2:B6",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=COVARIANCE.P(A2:A6,B2:B6)",
      "=COVARIANCE.P(A2:A6;B2:B6)",
      "=COVARIANCE.P(A2:A6, B2:B6)",
      "=COVAR(A2:A6,B2:B6)"
    ],
    "expectedValue": 8.96,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Kovarians Harga Saham dan Indeks Pasar",
      "kasusSerupa": "Tabel Saham: Return saham di A2:A6 dan IHSG di B2:B6. Rumus: =COVARIANCE.P(A2:A6, B2:B6).",
      "rumusContoh": "=COVARIANCE.P(A2:A6, B2:B6)",
      "nalarBayi": "Kovarians positif membuktikan pergerakan saham searah dengan tren pasar!"
    }
  },
  {
    "id": "xl-71",
    "category": "7. Varians, Deviasi & Hubungan",
    "title": "Tantangan 71: Kovarians Sampel Dua Variabel (COVARIANCE.S)",
    "scenario": "Workbook Dosen: Sheet 24 'Covariance.T'. Dosen menghitung kovarians sampel (pembagi n-1) dari data A2:A6 dan B2:B6 di sel C7.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data1",
        "B": "Data2",
        "C": "COVARIANCE.S"
      },
      {
        "row": 2,
        "A": 3,
        "B": 7,
        "C": ""
      },
      {
        "row": 3,
        "A": 5,
        "B": 8,
        "C": ""
      },
      {
        "row": 4,
        "A": 8,
        "B": 12,
        "C": ""
      },
      {
        "row": 5,
        "A": 9,
        "B": 14,
        "C": ""
      },
      {
        "row": 6,
        "A": 10,
        "B": 15,
        "C": ""
      },
      {
        "row": 7,
        "A": "Kovarians S",
        "B": "",
        "C": ""
      }
    ],
    "targetCell": "C7",
    "instruction": "Ketik rumus =COVARIANCE.S(A2:A6, B2:B6) di sel C7.",
    "babyHint": "🍼 Bahasa Bayi: =COVARIANCE.S(A2:A6, B2:B6). Versi sampel dari kovarians untuk data penelitian lapangan!",
    "starterFormula": "=COVARIANCE.S(",
    "quickChips": [
      "=COVARIANCE.S(",
      "A2:A6",
      "B2:B6",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=COVARIANCE.S(A2:A6,B2:B6)",
      "=COVARIANCE.S(A2:A6;B2:B6)",
      "=COVARIANCE.S(A2:A6, B2:B6)"
    ],
    "expectedValue": 11.2,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Kovarians Sampel Pengukuran Fisika",
      "kasusSerupa": "Tabel Laboratorium: Tekanan di A2:A6 dan Suhu di B2:B6. Rumus: =COVARIANCE.S(A2:A6, B2:B6).",
      "rumusContoh": "=COVARIANCE.S(A2:A6, B2:B6)",
      "nalarBayi": "Menggunakan koreksi derajat kebebasan n-1 untuk estimasi populasi tak bias!"
    }
  },
  {
    "id": "xl-72",
    "category": "7. Varians, Deviasi & Hubungan",
    "title": "Tantangan 72: Koefisien Determinasi Regresi (RSQ)",
    "scenario": "Workbook Dosen: Sheet 71 'Rsq'. Dosen menghitung R-Squared (R2) antara Anggota Keluarga (A2:A10) dan Konsumsi Air (B2:B10) di sel D11.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Anggota Keluarga",
        "B": "Konsumsi Air (M3)",
        "C": "",
        "D": "R-Squared (RSQ)"
      },
      {
        "row": 2,
        "A": 4,
        "B": 25,
        "C": "",
        "D": ""
      },
      {
        "row": 3,
        "A": 5,
        "B": 32,
        "C": "",
        "D": ""
      },
      {
        "row": 4,
        "A": 5,
        "B": 34,
        "C": "",
        "D": ""
      },
      {
        "row": 5,
        "A": 6,
        "B": 35,
        "C": "",
        "D": ""
      },
      {
        "row": 6,
        "A": 7,
        "B": 35,
        "C": "",
        "D": ""
      },
      {
        "row": 7,
        "A": 5,
        "B": 34,
        "C": "",
        "D": ""
      },
      {
        "row": 8,
        "A": 6,
        "B": 35,
        "C": "",
        "D": ""
      },
      {
        "row": 9,
        "A": 4,
        "B": 22,
        "C": "",
        "D": ""
      },
      {
        "row": 10,
        "A": 4,
        "B": 26,
        "C": "",
        "D": ""
      },
      {
        "row": 11,
        "A": "Hasil RSQ",
        "B": "",
        "C": "",
        "D": ""
      }
    ],
    "targetCell": "D11",
    "instruction": "Ketik rumus =RSQ(A2:A10, B2:B10) di sel D11.",
    "babyHint": "🍼 Bahasa Bayi: =RSQ(A2:A10, B2:B10). RSQ adalah R-Square! Menunjukkan berapa persen variasi konsumsi air yang bisa dijelaskan oleh jumlah keluarga!",
    "starterFormula": "=RSQ(",
    "quickChips": [
      "=RSQ(",
      "A2:A10",
      "B2:B10",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=RSQ(A2:A10,B2:B10)",
      "=RSQ(A2:A10;B2:B10)",
      "=RSQ(A2:A10, B2:B10)"
    ],
    "expectedValue": 0.7022938830154063,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Kekuatan Model Regresi Penjualan",
      "kasusSerupa": "Tabel Toko: Penjualan di B2:B10, Iklan di A2:A10. Rumus: =RSQ(B2:B10, A2:A10).",
      "rumusContoh": "=RSQ(B2:B10, A2:A10)",
      "nalarBayi": "Nilai RSQ 0.70 berarti 70% naik turunnya penjualan disebabkan langsung oleh biaya iklan!"
    }
  },
  {
    "id": "xl-73",
    "category": "8. Prediksi, Regresi & Tren",
    "title": "Tantangan 73: Memprediksi Penjualan dari Biaya Promosi (FORECAST)",
    "scenario": "Workbook Dosen: Sheet 35 'Forecast'. Dosen memprediksi nilai Penjualan (B2:B10) jika biaya Promosi (A2:A10) dinaikkan menjadi 10 Juta (x=10) di sel E11.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Promosi (Jt)",
        "B": "Penjualan (Jt)",
        "C": "",
        "D": "",
        "E": "Prediksi Penjualan"
      },
      {
        "row": 2,
        "A": 7,
        "B": 10,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 3,
        "A": 6,
        "B": 13,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 4,
        "A": 7,
        "B": 14,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 5,
        "A": 5,
        "B": 12,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 6,
        "A": 8,
        "B": 21,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 7,
        "A": 9,
        "B": 14,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 8,
        "A": 8,
        "B": 18,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 9,
        "A": 9,
        "B": 14,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 10,
        "A": 7,
        "B": 15,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 11,
        "A": "Jika Promosi 10",
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      }
    ],
    "targetCell": "E11",
    "instruction": "Ketik rumus =FORECAST(10, B2:B10, A2:A10) di sel E11 sesuai lembar kerja dosen.",
    "babyHint": "🍼 Bahasa Bayi: =FORECAST(10, B2:B10, A2:A10). FORECAST seperti ramalan cuaca bisnis berbasis data masa lalu!",
    "starterFormula": "=FORECAST(",
    "quickChips": [
      "=FORECAST(",
      "10",
      "B2:B10",
      "A2:A10",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=FORECAST(10,B2:B10,A2:A10)",
      "=FORECAST(10;B2:B10;A2:A10)",
      "=FORECAST(10, B2:B10, A2:A10)"
    ],
    "expectedValue": 17.285714285714285,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Memprediksi Nilai Ujian dari Jam Belajar",
      "kasusSerupa": "Tabel Ujian: Nilai di B2:B6, Jam belajar di A2:A6. Berapa nilai jika belajar 8 jam? =FORECAST(8, B2:B6, A2:A6).",
      "rumusContoh": "=FORECAST(8, B2:B6, A2:A6)",
      "nalarBayi": "Excel menggunakan garis tren regresi linier terbaik untuk meramal hasil masa depan!"
    }
  },
  {
    "id": "xl-74",
    "category": "8. Prediksi, Regresi & Tren",
    "title": "Tantangan 74: Kemiringan Garis Pengaruh Promosi (SLOPE)",
    "scenario": "Workbook Dosen: Sheet 73 'Slope'. Dosen menghitung kemiringan (slope m) garis regresi Penjualan (B2:B10) terhadap Promosi (A2:A10) di sel E11.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Promosi",
        "B": "Penjualan",
        "C": "",
        "D": "",
        "E": "Kemiringan (SLOPE)"
      },
      {
        "row": 2,
        "A": 7,
        "B": 10,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 3,
        "A": 6,
        "B": 13,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 4,
        "A": 7,
        "B": 14,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 5,
        "A": 5,
        "B": 12,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 6,
        "A": 8,
        "B": 21,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 7,
        "A": 9,
        "B": 14,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 8,
        "A": 8,
        "B": 18,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 9,
        "A": 9,
        "B": 14,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 10,
        "A": 7,
        "B": 15,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 11,
        "A": "Nilai Slope",
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      }
    ],
    "targetCell": "E11",
    "instruction": "Ketik rumus =SLOPE(B2:B10, A2:A10) di sel E11.",
    "babyHint": "🍼 Bahasa Bayi: =SLOPE(B2:B10, A2:A10). SLOPE adalah gradien kemiringan garis. Setiap tambah 1 promosi, penjualan naik sebesar slope!",
    "starterFormula": "=SLOPE(",
    "quickChips": [
      "=SLOPE(",
      "B2:B10",
      "A2:A10",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=SLOPE(B2:B10,A2:A10)",
      "=SLOPE(B2:B10;A2:A10)",
      "=SLOPE(B2:B10, A2:A10)"
    ],
    "expectedValue": 1.023809523809524,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Laju Penambahan Biaya per Unit Tambahan",
      "kasusSerupa": "Tabel Biaya Produksi: Total biaya di Y (B2:B6), Unit di X (A2:A6). Rumus: =SLOPE(B2:B6, A2:A6).",
      "rumusContoh": "=SLOPE(B2:B6, A2:A6)",
      "nalarBayi": "Slope menunjukkan marginal cost atau biaya variabel per satu unit tambahan!"
    }
  },
  {
    "id": "xl-75",
    "category": "8. Prediksi, Regresi & Tren",
    "title": "Tantangan 75: Titik Potong Garis Sumbu Y Regresi (INTERCEPT)",
    "scenario": "Workbook Dosen: Sheet 44 'Intercept'. Dosen mencari titik potong sumbu Y (nilai penjualan jika promosi = 0) pada data B2:B10 dan A2:A10 di sel E11.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Promosi",
        "B": "Penjualan",
        "C": "",
        "D": "",
        "E": "Titik Potong (INTERCEPT)"
      },
      {
        "row": 2,
        "A": 7,
        "B": 10,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 3,
        "A": 6,
        "B": 13,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 4,
        "A": 7,
        "B": 14,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 5,
        "A": 5,
        "B": 12,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 6,
        "A": 8,
        "B": 21,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 7,
        "A": 9,
        "B": 14,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 8,
        "A": 8,
        "B": 18,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 9,
        "A": 9,
        "B": 14,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 10,
        "A": 7,
        "B": 15,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 11,
        "A": "Nilai Intercept",
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      }
    ],
    "targetCell": "E11",
    "instruction": "Ketik rumus =INTERCEPT(B2:B10, A2:A10) di sel E11.",
    "babyHint": "🍼 Bahasa Bayi: =INTERCEPT(B2:B10, A2:A10). INTERCEPT adalah konstanta dasar: penjualan minimal yang tetap ada meski tanpa promosi sama sekali!",
    "starterFormula": "=INTERCEPT(",
    "quickChips": [
      "=INTERCEPT(",
      "B2:B10",
      "A2:A10",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=INTERCEPT(B2:B10,A2:A10)",
      "=INTERCEPT(B2:B10;A2:A10)",
      "=INTERCEPT(B2:B10, A2:A10)"
    ],
    "expectedValue": 7.0476190476190474,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Biaya Beban Tetap Listrik Bulanan",
      "kasusSerupa": "Tabel Tagihan PLN: Tagihan di Y (B2:B6), Pemakaian kWh di X (A2:A6).",
      "rumusContoh": "=INTERCEPT(B2:B6, A2:A6)",
      "nalarBayi": "Nilai intercept adalah biaya abodemen tetap yang harus dibayar meski tidak ada lampu menyala!"
    }
  },
  {
    "id": "xl-76",
    "category": "8. Prediksi, Regresi & Tren",
    "title": "Tantangan 76: Standar Error Estimasi Regresi (STEYX)",
    "scenario": "Workbook Dosen: Sheet 81 'Steyx'. Dosen menghitung standar error estimasi garis regresi Penjualan (B2:B10) terhadap Promosi (A2:A10) di sel E11.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Promosi",
        "B": "Penjualan",
        "C": "",
        "D": "",
        "E": "Standar Error (STEYX)"
      },
      {
        "row": 2,
        "A": 7,
        "B": 10,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 3,
        "A": 6,
        "B": 13,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 4,
        "A": 7,
        "B": 14,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 5,
        "A": 5,
        "B": 12,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 6,
        "A": 8,
        "B": 21,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 7,
        "A": 9,
        "B": 14,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 8,
        "A": 8,
        "B": 18,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 9,
        "A": 9,
        "B": 14,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 10,
        "A": 7,
        "B": 15,
        "C": "",
        "D": "",
        "E": ""
      },
      {
        "row": 11,
        "A": "Hasil STEYX",
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      }
    ],
    "targetCell": "E11",
    "instruction": "Ketik rumus =STEYX(B2:B10, A2:A10) di sel E11.",
    "babyHint": "🍼 Bahasa Bayi: =STEYX(B2:B10, A2:A10). STEYX mengukur tingkat ketidakpastian atau margin error dari hasil ramalan garis regresi!",
    "starterFormula": "=STEYX(",
    "quickChips": [
      "=STEYX(",
      "B2:B10",
      "A2:A10",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=STEYX(B2:B10,A2:A10)",
      "=STEYX(B2:B10;A2:A10)",
      "=STEYX(B2:B10, A2:A10)"
    ],
    "expectedValue": 2.449489742783178,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Akurasi Prediksi Kurs Valas",
      "kasusSerupa": "Tabel Valas: Kurs aktual di Y, Prediksi indikator di X. Rumus: =STEYX(B2:B10, A2:A10).",
      "rumusContoh": "=STEYX(B2:B10, A2:A10)",
      "nalarBayi": "Semakin kecil STEYX, ramalan garis regresi semakin presisi mendekati kenyataan!"
    }
  },
  {
    "id": "xl-77",
    "category": "8. Prediksi, Regresi & Tren",
    "title": "Tantangan 77: Estimasi Tren Penjualan Linear (TREND)",
    "scenario": "Workbook Dosen: Sheet 87 'trend'. Dosen memprediksi nilai tren penjualan masa depan pada periode ke-13 di sel C14 berdasarkan data histori Penjualan (C2:C13) dan Periode (B2:B13).",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Bulan",
        "B": "Periode",
        "C": "Penjualan"
      },
      {
        "row": 2,
        "A": "Jan 2010",
        "B": 1,
        "C": 21
      },
      {
        "row": 3,
        "A": "Feb 2010",
        "B": 2,
        "C": 23
      },
      {
        "row": 4,
        "A": "Mar 2010",
        "B": 3,
        "C": 22
      },
      {
        "row": 5,
        "A": "Apr 2010",
        "B": 4,
        "C": 25
      },
      {
        "row": 6,
        "A": "Mei 2010",
        "B": 5,
        "C": 27
      },
      {
        "row": 7,
        "A": "Jun 2010",
        "B": 6,
        "C": 29
      },
      {
        "row": 8,
        "A": "Jul 2010",
        "B": 7,
        "C": 26
      },
      {
        "row": 9,
        "A": "Ags 2010",
        "B": 8,
        "C": 32
      },
      {
        "row": 10,
        "A": "Sep 2010",
        "B": 9,
        "C": 35
      },
      {
        "row": 11,
        "A": "Okt 2010",
        "B": 10,
        "C": 32
      },
      {
        "row": 12,
        "A": "Nov 2010",
        "B": 11,
        "C": 38
      },
      {
        "row": 13,
        "A": "Des 2010",
        "B": 12,
        "C": 37
      },
      {
        "row": 14,
        "A": "Jan 2011",
        "B": 13,
        "C": ""
      }
    ],
    "targetCell": "C14",
    "instruction": "Ketik rumus =TREND(C2:C13, B2:B13, B14) di sel C14.",
    "babyHint": "🍼 Bahasa Bayi: =TREND(C2:C13, B2:B13, B14). TREND membaca pola garis lurus dari bulan-bulan sebelumnya untuk melihat omset bulan depan!",
    "starterFormula": "=TREND(",
    "quickChips": [
      "=TREND(",
      "C2:C13",
      "B2:B13",
      "B14",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=TREND(C2:C13,B2:B13,B14)",
      "=TREND(C2:C13;B2:B13;B14)",
      "=TREND(C2:C13, B2:B13, B14)"
    ],
    "expectedValue": 38.984848484848484,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Tren Kenaikan Jumlah Pengunjung Website",
      "kasusSerupa": "Tabel Web: Kunjungan di C2:C10, Bulan di B2:B10. Prediksi bulan ke-11 di C11: =TREND(C2:C10, B2:B10, B11).",
      "rumusContoh": "=TREND(C2:C10, B2:B10, B11)",
      "nalarBayi": "Excel menyambung garis tren masa lalu menuju titik waktu yang baru!"
    }
  },
  {
    "id": "xl-78",
    "category": "8. Prediksi, Regresi & Tren",
    "title": "Tantangan 78: Prediksi Pertumbuhan Eksponensial (GROWTH)",
    "scenario": "Workbook Dosen: Sheet 41 'Growth'. Penjualan startup bertumbuh cepat. Dosen memprediksi nilai pertumbuhan eksponensial di periode ke-7 (A8) berdasarkan data Penjualan (B2:B7) dan Bulan (A2:A7) di sel B8.",
    "tableHeaders": [
      "A",
      "B"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Bulan",
        "B": "Penjualan (Unit)"
      },
      {
        "row": 2,
        "A": 1,
        "B": 100
      },
      {
        "row": 3,
        "A": 2,
        "B": 150
      },
      {
        "row": 4,
        "A": 3,
        "B": 225
      },
      {
        "row": 5,
        "A": 4,
        "B": 340
      },
      {
        "row": 6,
        "A": 5,
        "B": 510
      },
      {
        "row": 7,
        "A": 6,
        "B": 765
      },
      {
        "row": 8,
        "A": 7,
        "B": ""
      }
    ],
    "targetCell": "B8",
    "instruction": "Ketik rumus =GROWTH(B2:B7, A2:A7, A8) di sel B8.",
    "babyHint": "🍼 Bahasa Bayi: =GROWTH(B2:B7, A2:A7, A8). Kalau TREND garisnya lurus, GROWTH kurvanya melengkung naik seperti roket!",
    "starterFormula": "=GROWTH(",
    "quickChips": [
      "=GROWTH(",
      "B2:B7",
      "A2:A7",
      "A8",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=GROWTH(B2:B7,A2:A7,A8)",
      "=GROWTH(B2:B7;A2:A7;A8)",
      "=GROWTH(B2:B7, A2:A7, A8)"
    ],
    "expectedValue": 1147.5,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Pertumbuhan Jumlah Bakteri dalam Kultur",
      "kasusSerupa": "Tabel Biologi: Waktu jam di A2:A5, Koloni di B2:B5. Prediksi jam ke-6: =GROWTH(B2:B5, A2:A5, A6).",
      "rumusContoh": "=GROWTH(B2:B5, A2:A5, A6)",
      "nalarBayi": "Sangat cocok untuk data yang berlipat ganda secara eksponensial tiap periode!"
    }
  },
  {
    "id": "xl-79",
    "category": "8. Prediksi, Regresi & Tren",
    "title": "Tantangan 79: Menghitung Permutasi Kemungkinan Susunan (PERMUT)",
    "scenario": "Workbook Dosen: Sheet 65 'permut'. Dosen menghitung banyaknya susunan permutasi dari total objek n=5 (A2) yang dipilih sebanyak k=3 (A3) di sel C2.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Parameter",
        "B": "Keterangan",
        "C": "Hasil Permutasi"
      },
      {
        "row": 2,
        "A": 5,
        "B": "Jumlah Objek (n)",
        "C": ""
      },
      {
        "row": 3,
        "A": 3,
        "B": "Dipilih (k)",
        "C": ""
      }
    ],
    "targetCell": "C2",
    "instruction": "Ketik rumus =PERMUT(A2, A3) di sel C2.",
    "babyHint": "🍼 Bahasa Bayi: =PERMUT(A2, A3). Permutasi memperhatikan urutan juara (Juara 1, 2, 3)! Rumusnya: 5 * 4 * 3 = 60!",
    "starterFormula": "=PERMUT(",
    "quickChips": [
      "=PERMUT(",
      "A2",
      "A3",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=PERMUT(A2,A3)",
      "=PERMUT(A2;A3)",
      "=PERMUT(A2, A3)"
    ],
    "expectedValue": 60,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Memilih Ketua, Sekretaris, dan Bendahara",
      "kasusSerupa": "Tabel Organisasi: Dari 4 kandidat dipilih 2 orang pengurus. Rumus: =PERMUT(4, 2).",
      "rumusContoh": "=PERMUT(4, 2)",
      "nalarBayi": "Banyaknya kombinasi posisi jabatan berbeda yang bisa terbentuk adalah 4 * 3 = 12 cara!"
    }
  },
  {
    "id": "xl-80",
    "category": "8. Prediksi, Regresi & Tren",
    "title": "Tantangan 80: Distribusi Binomial Peluang Sukses Produksi (BINOM.DIST)",
    "scenario": "Workbook Dosen: Sheet 8 'Binom.dist'. Dosen menghitung peluang tepat sukses x=6 (A2) dari percobaan n=10 (A3) dengan probabilitas sukses p=0.5 (A4) tanpa kumulatif (FALSE) di sel C2.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Data Uji",
        "B": "Keterangan",
        "C": "Peluang Binomial"
      },
      {
        "row": 2,
        "A": 6,
        "B": "Jumlah Sukses (x)",
        "C": ""
      },
      {
        "row": 3,
        "A": 10,
        "B": "Total Percobaan (n)",
        "C": ""
      },
      {
        "row": 4,
        "A": 0.5,
        "B": "Peluang Sukses (p)",
        "C": ""
      }
    ],
    "targetCell": "C2",
    "instruction": "Ketik rumus =BINOM.DIST(A2, A3, A4, FALSE) di sel C2.",
    "babyHint": "🍼 Bahasa Bayi: =BINOM.DIST(A2, A3, A4, FALSE). Menghitung peluang sukses pada eksperimen ya/tidak seperti lempar koin atau lolos QC!",
    "starterFormula": "=BINOM.DIST(",
    "quickChips": [
      "=BINOM.DIST(",
      "A2",
      "A3",
      "A4",
      "FALSE",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=BINOM.DIST(A2,A3,A4,FALSE)",
      "=BINOM.DIST(A2;A3;A4;FALSE)",
      "=BINOM.DIST(A2, A3, A4, FALSE)"
    ],
    "expectedValue": 0.205078125,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Peluang Lolos Uji Coba Kualitas Produk",
      "kasusSerupa": "Tabel QC: Peluang cacat 0.1, diuji 10 barang. Peluang tepat 1 rusak: =BINOM.DIST(1, 10, 0.1, FALSE).",
      "rumusContoh": "=BINOM.DIST(1, 10, 0.1, FALSE)",
      "nalarBayi": "Distribusi binomial merupakan fondasi uji hipotesis kontrol kualitas industri!"
    }
  },
  {
    "id": "xl-81",
    "category": "8. Prediksi, Regresi & Tren",
    "title": "Tantangan 81: Distribusi Normal Skor Tes (NORM.DIST)",
    "scenario": "Workbook Dosen: Sheet 56 'Norm.dist'. Dosen menghitung probabilitas kumulatif (TRUE) untuk nilai x=42 (A2) dengan rata-rata 40 (A3) dan standar deviasi 1.5 (A4) di sel C2.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Parameter",
        "B": "Keterangan",
        "C": "NORM.DIST Kumulatif"
      },
      {
        "row": 2,
        "A": 42,
        "B": "Nilai yang diuji (x)",
        "C": ""
      },
      {
        "row": 3,
        "A": 40,
        "B": "Rata-rata (mean)",
        "C": ""
      },
      {
        "row": 4,
        "A": 1.5,
        "B": "Standar Deviasi",
        "C": ""
      }
    ],
    "targetCell": "C2",
    "instruction": "Ketik rumus =NORM.DIST(A2, A3, A4, TRUE) di sel C2.",
    "babyHint": "🍼 Bahasa Bayi: =NORM.DIST(A2, A3, A4, TRUE). Menghitung luas kurva lonceng Gauss dari paling kiri sampai titik 42!",
    "starterFormula": "=NORM.DIST(",
    "quickChips": [
      "=NORM.DIST(",
      "A2",
      "A3",
      "A4",
      "TRUE",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=NORM.DIST(A2,A3,A4,TRUE)",
      "=NORM.DIST(A2;A3;A4;TRUE)",
      "=NORM.DIST(A2, A3, A4, TRUE)",
      "=NORMDIST(A2,A3,A4,TRUE)"
    ],
    "expectedValue": 0.9087887802741321,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Peluang Berat Bayi Baru Lahir",
      "kasusSerupa": "Tabel Medis: Rata-rata 3.2 kg, stdev 0.4 kg. Peluang bayi berbobot <= 3.5 kg: =NORM.DIST(3.5, 3.2, 0.4, TRUE).",
      "rumusContoh": "=NORM.DIST(3.5, 3.2, 0.4, TRUE)",
      "nalarBayi": "Distribusi normal mencakup 90.8% populasi di bawah batas tersebut!"
    }
  },
  {
    "id": "xl-82",
    "category": "8. Prediksi, Regresi & Tren",
    "title": "Tantangan 82: Kebalikan Distribusi Normal / Inverse (NORM.INV)",
    "scenario": "Workbook Dosen: Sheet 57 'Norm.inv'. Dosen mencari nilai x jika probabilitas kumulatifnya p=0.9088 (A2) dengan rata-rata 40 (A3) dan standar deviasi 1.5 (A4) di sel C2.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Parameter",
        "B": "Keterangan",
        "C": "Nilai x Balikan"
      },
      {
        "row": 2,
        "A": 0.908789,
        "B": "Probabilitas (p)",
        "C": ""
      },
      {
        "row": 3,
        "A": 40,
        "B": "Rata-rata (mean)",
        "C": ""
      },
      {
        "row": 4,
        "A": 1.5,
        "B": "Standar Deviasi",
        "C": ""
      }
    ],
    "targetCell": "C2",
    "instruction": "Ketik rumus =NORM.INV(A2, A3, A4) di sel C2.",
    "babyHint": "🍼 Bahasa Bayi: =NORM.INV(A2, A3, A4). Kebalikan NORM.DIST! Dikasih persentase, dia bisa menebak nilai angkanya (hasilnya kembali ke 42)!",
    "starterFormula": "=NORM.INV(",
    "quickChips": [
      "=NORM.INV(",
      "A2",
      "A3",
      "A4",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=NORM.INV(A2,A3,A4)",
      "=NORM.INV(A2;A3;A4)",
      "=NORM.INV(A2, A3, A4)",
      "=NORMINV(A2,A3,A4)"
    ],
    "expectedValue": 42,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Nilai Minimal Masuk 5% Teratas Sekolah",
      "kasusSerupa": "Tabel Seleksi: Rata-rata 75, stdev 8. Berapa skor untuk masuk 5% teratas (p=0.95)? =NORM.INV(0.95, 75, 8).",
      "rumusContoh": "=NORM.INV(0.95, 75, 8)",
      "nalarBayi": "Excel menghitung skor ambang batas yang harus dicapai peserta yaitu sekitar 88.16!"
    }
  },
  {
    "id": "xl-83",
    "category": "9. Manipulasi Teks & Rapikan Data",
    "title": "Tantangan 83: Menggabungkan Nama Depan & Belakang (CONCAT)",
    "scenario": "HRD ingin menggabungkan Nama Depan di sel A2 ('Budi') dan Nama Belakang di sel B2 ('Santoso') dengan spasi pemisah di sel C2.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Nama Depan",
        "B": "Nama Belakang",
        "C": "Nama Lengkap"
      },
      {
        "row": 2,
        "A": "Budi",
        "B": "Santoso",
        "C": ""
      },
      {
        "row": 3,
        "A": "Siti",
        "B": "Nurhaliza",
        "C": ""
      },
      {
        "row": 4,
        "A": "Ahmad",
        "B": "Dahlan",
        "C": ""
      }
    ],
    "targetCell": "C2",
    "instruction": "Tulis rumus =CONCAT(A2, ' ', B2) di sel C2.",
    "babyHint": "🍼 Bahasa Bayi: =CONCAT(A2, \" \", B2) atau =A2 & \" \" & B2. Tanda petik spasi \" \" wajib ada supaya namanya tidak gandeng dempet!",
    "starterFormula": "=CONCAT(",
    "quickChips": [
      "=CONCAT(",
      "A2",
      "\" \"",
      "B2",
      ")",
      "&",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=CONCAT(A2,\" \",B2)",
      "=CONCAT(A2;\" \";B2)",
      "=CONCAT(A2, \" \", B2)",
      "=A2&\" \"&B2",
      "=A2 & \" \" & B2",
      "=CONCATENATE(A2,\" \",B2)"
    ],
    "expectedValue": "Budi Santoso",
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Menggabungkan Kota dan Kode Pos",
      "kasusSerupa": "Tabel Alamat: Kota di A2 ('Bandung'), Kode Pos di B2 (40115). Rumus: =A2 & ' - ' & B2.",
      "rumusContoh": "=A2 & \" - \" & B2",
      "nalarBayi": "Hasil teks yang rapi tersambung menjadi 'Bandung - 40115'!"
    }
  },
  {
    "id": "xl-84",
    "category": "9. Manipulasi Teks & Rapikan Data",
    "title": "Tantangan 84: Mengambil 4 Digit Kode Wilayah (LEFT)",
    "scenario": "Bagian Gudang ingin mengambil 4 karakter pertama dari kode barang di sel A2 ('JKT1-9921') di sel B2.",
    "tableHeaders": [
      "A",
      "B"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Kode Barcode",
        "B": "Kode Wilayah (4 Huruf)"
      },
      {
        "row": 2,
        "A": "JKT1-9921",
        "B": ""
      },
      {
        "row": 3,
        "A": "BDG2-4412",
        "B": ""
      },
      {
        "row": 4,
        "A": "SBY3-1102",
        "B": ""
      }
    ],
    "targetCell": "B2",
    "instruction": "Tulis rumus =LEFT(A2, 4) di sel B2.",
    "babyHint": "🍼 Bahasa Bayi: =LEFT(A2, 4). LEFT artinya potong dan ambil huruf dari sisi paling kiri!",
    "starterFormula": "=LEFT(",
    "quickChips": [
      "=LEFT(",
      "A2",
      "4",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=LEFT(A2,4)",
      "=LEFT(A2;4)",
      "=LEFT(A2, 4)"
    ],
    "expectedValue": "JKT1",
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Mengambil Tahun dari Format Resi",
      "kasusSerupa": "Tabel Resi: Resi '2024-EXP-881'. Ambil tahun 4 digit kiri: =LEFT(A2, 4).",
      "rumusContoh": "=LEFT(A2, 4)",
      "nalarBayi": "Excel memotong 4 huruf pertama dari kiri dan menghasilkan '2024'!"
    }
  },
  {
    "id": "xl-85",
    "category": "9. Manipulasi Teks & Rapikan Data",
    "title": "Tantangan 85: Mengambil 3 Digit Nomor Urut Terakhir (RIGHT)",
    "scenario": "Kasir ingin mengambil 3 digit nomor urut transaksi di bagian paling kanan nota di sel A2 ('NOTA-2024-089') pada sel B2.",
    "tableHeaders": [
      "A",
      "B"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Nomor Nota Kasir",
        "B": "No Urut (3 Digit Kanan)"
      },
      {
        "row": 2,
        "A": "NOTA-2024-089",
        "B": ""
      },
      {
        "row": 3,
        "A": "NOTA-2024-090",
        "B": ""
      },
      {
        "row": 4,
        "A": "NOTA-2024-091",
        "B": ""
      }
    ],
    "targetCell": "B2",
    "instruction": "Tulis rumus =RIGHT(A2, 3) di sel B2.",
    "babyHint": "🍼 Bahasa Bayi: =RIGHT(A2, 3). RIGHT artinya potong dan ambil karakter dari ujung ekor sebelah kanan!",
    "starterFormula": "=RIGHT(",
    "quickChips": [
      "=RIGHT(",
      "A2",
      "3",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=RIGHT(A2,3)",
      "=RIGHT(A2;3)",
      "=RIGHT(A2, 3)"
    ],
    "expectedValue": "089",
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Mengambil Ekstensi File Dokumen",
      "kasusSerupa": "Tabel File: Nama file 'laporan.pdf'. Ambil 3 karakter kanan: =RIGHT(A2, 3).",
      "rumusContoh": "=RIGHT(A2, 3)",
      "nalarBayi": "Excel mengambil 3 karakter terakhir yaitu 'pdf'!"
    }
  },
  {
    "id": "xl-86",
    "category": "9. Manipulasi Teks & Rapikan Data",
    "title": "Tantangan 86: Mengambil Kode Divisi di Tengah Teks (MID)",
    "scenario": "NIP Karyawan di sel A2 adalah 'EMP-IT-004'. Ambil 2 karakter kode divisi ('IT') yang dimulai dari karakter ke-5 di sel B2.",
    "tableHeaders": [
      "A",
      "B"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "NIP Karyawan",
        "B": "Kode Divisi (Tengah)"
      },
      {
        "row": 2,
        "A": "EMP-IT-004",
        "B": ""
      },
      {
        "row": 3,
        "A": "EMP-HR-012",
        "B": ""
      },
      {
        "row": 4,
        "A": "EMP-MK-008",
        "B": ""
      }
    ],
    "targetCell": "B2",
    "instruction": "Tulis rumus =MID(A2, 5, 2) di sel B2.",
    "babyHint": "🍼 Bahasa Bayi: =MID(A2, 5, 2). MID itu Middle! Mulai potong dari huruf ke-5, ambil sebanyak 2 huruf!",
    "starterFormula": "=MID(",
    "quickChips": [
      "=MID(",
      "A2",
      "5",
      "2",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=MID(A2,5,2)",
      "=MID(A2;5;2)",
      "=MID(A2, 5, 2)"
    ],
    "expectedValue": "IT",
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Mengambil Bulan Lahir dari Nomor KTP",
      "kasusSerupa": "Tabel KTP: NIK '320105251299'. Tanggal di posisi 7 sebanyak 2 digit: =MID(A2, 7, 2).",
      "rumusContoh": "=MID(A2, 7, 2)",
      "nalarBayi": "Excel menyusup ke tengah teks dan memotong persis 2 digit yang diminta!"
    }
  },
  {
    "id": "xl-87",
    "category": "9. Manipulasi Teks & Rapikan Data",
    "title": "Tantangan 87: Mengecek Panjang Karakter Nomor Telepon (LEN)",
    "scenario": "Customer Service ingin memastikan kode nomor telepon di sel A2 ('628001234567') valid dengan menghitung jumlah karakternya di sel B2.",
    "tableHeaders": [
      "A",
      "B"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "No WhatsApp",
        "B": "Panjang Digit (LEN)"
      },
      {
        "row": 2,
        "A": "628001234567",
        "B": ""
      },
      {
        "row": 3,
        "A": "62800112233",
        "B": ""
      },
      {
        "row": 4,
        "A": "62800998877665",
        "B": ""
      }
    ],
    "targetCell": "B2",
    "instruction": "Tulis rumus =LEN(A2) di sel B2.",
    "babyHint": "🍼 Bahasa Bayi: =LEN(A2). LEN singkatan dari Length (panjang). Menghitung ada berapa huruf/angka dalam sel!",
    "starterFormula": "=LEN(",
    "quickChips": [
      "=LEN(",
      "A2",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=LEN(A2)",
      "=LEN(A2)"
    ],
    "expectedValue": 12,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Memvalidasi Jumlah Digit NIK KTP (Harus 16)",
      "kasusSerupa": "Tabel Registrasi: NIK di A2. Rumus: =LEN(A2).",
      "rumusContoh": "=LEN(A2)",
      "nalarBayi": "Jika hasilnya bukan 16, sistem tahu bahwa nomor KTP tersebut salah ketik atau kurang digit!"
    }
  },
  {
    "id": "xl-88",
    "category": "9. Manipulasi Teks & Rapikan Data",
    "title": "Tantangan 88: Membersihkan Spasi Berantakan Input Kasir (TRIM)",
    "scenario": "Nama barang di sel A2 memiliki banyak spasi dobel dan spasi di awal/akhir ('   Kopi   Sachet   '). Bersihkan spasi berlebih tersebut di sel B2.",
    "tableHeaders": [
      "A",
      "B"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Nama Kotor (Spasi Dobel)",
        "B": "Nama Bersih (TRIM)"
      },
      {
        "row": 2,
        "A": "   Kopi   Sachet   ",
        "B": ""
      },
      {
        "row": 3,
        "A": "  Gula    Pasir  ",
        "B": ""
      },
      {
        "row": 4,
        "A": " Susu     UHT",
        "B": ""
      }
    ],
    "targetCell": "B2",
    "instruction": "Tulis rumus =TRIM(A2) di sel B2.",
    "babyHint": "🍼 Bahasa Bayi: =TRIM(A2). TRIM seperti gunting rambut! Membuang spasi di ujung dan menyisakan 1 spasi normal di tengah!",
    "starterFormula": "=TRIM(",
    "quickChips": [
      "=TRIM(",
      "A2",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=TRIM(A2)",
      "=TRIM(A2)"
    ],
    "expectedValue": "Kopi Sachet",
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Merapikan Data Hasil Ekspor Formulir Web",
      "kasusSerupa": "Tabel Import: Nama di A2 banyak spasi acak. Rumus: =TRIM(A2).",
      "rumusContoh": "=TRIM(A2)",
      "nalarBayi": "Teks menjadi rapi dan aman dari error pencarian VLOOKUP yang sering gagal karena spasi tersembunyi!"
    }
  },
  {
    "id": "xl-89",
    "category": "9. Manipulasi Teks & Rapikan Data",
    "title": "Tantangan 89: Huruf Kapital di Awal Setiap Kata (PROPER)",
    "scenario": "Data nama karyawan di sel A2 diketik huruf kecil semua ('ahmad fauzi rohman'). Ubah menjadi format nama resmi berawalan huruf kapital di sel B2.",
    "tableHeaders": [
      "A",
      "B"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Nama Asli",
        "B": "Nama Resmi (PROPER)"
      },
      {
        "row": 2,
        "A": "ahmad fauzi rohman",
        "B": ""
      },
      {
        "row": 3,
        "A": "siti nur aini",
        "B": ""
      },
      {
        "row": 4,
        "A": "budi gunawan",
        "B": ""
      }
    ],
    "targetCell": "B2",
    "instruction": "Tulis rumus =PROPER(A2) di sel B2.",
    "babyHint": "🍼 Bahasa Bayi: =PROPER(A2). PROPER otomatis mengubah huruf pertama tiap kata jadi HURUF BESAR, sisanya huruf kecil!",
    "starterFormula": "=PROPER(",
    "quickChips": [
      "=PROPER(",
      "A2",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=PROPER(A2)",
      "=PROPER(A2)"
    ],
    "expectedValue": "Ahmad Fauzi Rohman",
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Merapikan Judul Buku",
      "kasusSerupa": "Tabel Toko Buku: Judul 'laskar pelangi' di A2. Rumus: =PROPER(A2).",
      "rumusContoh": "=PROPER(A2)",
      "nalarBayi": "Otomatis menjadi rapi dan indah dibaca: 'Laskar Pelangi'!"
    }
  },
  {
    "id": "xl-90",
    "category": "9. Manipulasi Teks & Rapikan Data",
    "title": "Tantangan 90: Mengubah Seluruh Teks Menjadi Huruf Kapital (UPPER)",
    "scenario": "Sistem parkir ingin memastikan seluruh karakter plat nomor kendaraan di sel A2 ('b 1234 cd') menjadi huruf kapital semua di sel B2.",
    "tableHeaders": [
      "A",
      "B"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Plat Input",
        "B": "Plat Kapital (UPPER)"
      },
      {
        "row": 2,
        "A": "b 1234 cd",
        "B": ""
      },
      {
        "row": 3,
        "A": "d 5678 ef",
        "B": ""
      },
      {
        "row": 4,
        "A": "l 9999 gh",
        "B": ""
      }
    ],
    "targetCell": "B2",
    "instruction": "Tulis rumus =UPPER(A2) di sel B2.",
    "babyHint": "🍼 Bahasa Bayi: =UPPER(A2). UPPER artinya Ubah Pergi ke huruf besar raksasa semua!",
    "starterFormula": "=UPPER(",
    "quickChips": [
      "=UPPER(",
      "A2",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=UPPER(A2)",
      "=UPPER(A2)"
    ],
    "expectedValue": "B 1234 CD",
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Menyeragamkan Kode Voucher",
      "kasusSerupa": "Tabel Promo: Kode 'diskon50' di A2. Rumus: =UPPER(A2).",
      "rumusContoh": "=UPPER(A2)",
      "nalarBayi": "Berubah menjadi 'DISKON50' sesuai format resmi sistem e-commerce!"
    }
  },
  {
    "id": "xl-91",
    "category": "9. Manipulasi Teks & Rapikan Data",
    "title": "Tantangan 91: Menyeragamkan Format Email ke Huruf Kecil (LOWER)",
    "scenario": "Data email di sel A2 diketik campuran huruf besar kecil ('Admin.Support@KANTOR.COM'). Ubah menjadi huruf kecil semua di sel B2.",
    "tableHeaders": [
      "A",
      "B"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Email Input",
        "B": "Email Seragam (LOWER)"
      },
      {
        "row": 2,
        "A": "Admin.Support@KANTOR.COM",
        "B": ""
      },
      {
        "row": 3,
        "A": "HRD@Perusahaan.CO.ID",
        "B": ""
      },
      {
        "row": 4,
        "A": "Finance.Team@Kantor.Net",
        "B": ""
      }
    ],
    "targetCell": "B2",
    "instruction": "Tulis rumus =LOWER(A2) di sel B2.",
    "babyHint": "🍼 Bahasa Bayi: =LOWER(A2). LOWER adalah kebalikan UPPER, menyulap semua huruf menjadi huruf kecil yang adem!",
    "starterFormula": "=LOWER(",
    "quickChips": [
      "=LOWER(",
      "A2",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=LOWER(A2)",
      "=LOWER(A2)"
    ],
    "expectedValue": "admin.support@kantor.com",
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Menyeragamkan Username Akun",
      "kasusSerupa": "Tabel Login: Input pengguna 'UserBaru123'. Rumus: =LOWER(A2).",
      "rumusContoh": "=LOWER(A2)",
      "nalarBayi": "Otomatis menjadi 'userbaru123' sehingga mudah dicocokkan ke database!"
    }
  },
  {
    "id": "xl-92",
    "category": "9. Manipulasi Teks & Rapikan Data",
    "title": "Tantangan 92: Memformat Angka Menjadi Format Rupiah Teks (TEXT)",
    "scenario": "Faktur Penjualan ingin mengubah angka di sel B2 (250000) menjadi format tampilan teks rupiah 'Rp 250,000' di sel C2 menggunakan fungsi TEXT.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Item",
        "B": "Harga Polos",
        "C": "Format Rupiah Teks"
      },
      {
        "row": 2,
        "A": "Mouse Wireless",
        "B": 250000,
        "C": ""
      },
      {
        "row": 3,
        "A": "Keyboard Mekanik",
        "B": 750000,
        "C": ""
      },
      {
        "row": 4,
        "A": "Monitor 24 Inch",
        "B": 1800000,
        "C": ""
      }
    ],
    "targetCell": "C2",
    "instruction": "Tulis rumus =TEXT(B2, 'Rp #,##0') di sel C2.",
    "babyHint": "🍼 Bahasa Bayi: =TEXT(B2, \"Rp #,##0\"). Mengubah angka biasa menjadi tulisan berformat rapi dengan pemisah ribuan!",
    "starterFormula": "=TEXT(",
    "quickChips": [
      "=TEXT(",
      "B2",
      "\"Rp #,##0\"",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=TEXT(B2,\"Rp #,##0\")",
      "=TEXT(B2;\"Rp #,##0\")",
      "=TEXT(B2, \"Rp #,##0\")"
    ],
    "expectedValue": "Rp 250,000",
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Format Persentase Teks",
      "kasusSerupa": "Tabel Margin: Nilai 0.15 di B2. Format teks: =TEXT(B2, '0.0%').",
      "rumusContoh": "=TEXT(B2, \"0.0%\")",
      "nalarBayi": "Angka desimal 0.15 disulap menjadi teks '15.0%'!"
    }
  },
  {
    "id": "xl-93",
    "category": "9. Manipulasi Teks & Rapikan Data",
    "title": "Tantangan 93: Mengubah Tanggal Menjadi Nama Hari Teks (TEXT dddd)",
    "scenario": "Manajer Shift ingin mengetahui nama hari dari tanggal di sel A2 ('2024-08-17') dalam sel B2 menggunakan format 'dddd'.",
    "tableHeaders": [
      "A",
      "B"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Tanggal Transaksi",
        "B": "Nama Hari (dddd)"
      },
      {
        "row": 2,
        "A": "2024-08-17",
        "B": ""
      },
      {
        "row": 3,
        "A": "2024-08-18",
        "B": ""
      },
      {
        "row": 4,
        "A": "2024-08-19",
        "B": ""
      }
    ],
    "targetCell": "B2",
    "instruction": "Tulis rumus =TEXT(A2, 'dddd') di sel B2.",
    "babyHint": "🍼 Bahasa Bayi: =TEXT(A2, \"dddd\"). Huruf d empat kali (dddd) artinya tampilkan nama hari secara lengkap (misal Saturday/Sabtu)!",
    "starterFormula": "=TEXT(",
    "quickChips": [
      "=TEXT(",
      "A2",
      "\"dddd\"",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=TEXT(A2,\"dddd\")",
      "=TEXT(A2;\"dddd\")",
      "=TEXT(A2, \"dddd\")"
    ],
    "expectedValue": "Saturday",
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Mengambil Nama Bulan dari Tanggal",
      "kasusSerupa": "Tabel Invoice: Tanggal '2024-05-10'. Format bulan lengkap: =TEXT(A2, 'mmmm').",
      "rumusContoh": "=TEXT(A2, \"mmmm\")",
      "nalarBayi": "Excel langsung menampilkan nama bulan 'May' / 'Mei'!"
    }
  },
  {
    "id": "xl-94",
    "category": "10. Waktu, Finansial & Pembulatan",
    "title": "Tantangan 94: Membulatkan Angka Pajak ke 2 Desimal (ROUND)",
    "scenario": "Bagian Pajak menghitung PPN di sel B2 (15.7482). Bulatkan angka tersebut menjadi 2 angka desimal di belakang koma pada sel C2.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Transaksi",
        "B": "Pajak Hitungan",
        "C": "Bulat 2 Desimal"
      },
      {
        "row": 2,
        "A": "TRX-01",
        "B": 15.7482,
        "C": ""
      },
      {
        "row": 3,
        "A": "TRX-02",
        "B": 28.3915,
        "C": ""
      },
      {
        "row": 4,
        "A": "TRX-03",
        "B": 45.1264,
        "C": ""
      }
    ],
    "targetCell": "C2",
    "instruction": "Tulis rumus =ROUND(B2, 2) di sel C2.",
    "babyHint": "🍼 Bahasa Bayi: =ROUND(B2, 2). Angka 2 artinya kita minta disisakan 2 angka saja di belakang koma (15.75)!",
    "starterFormula": "=ROUND(",
    "quickChips": [
      "=ROUND(",
      "B2",
      "2",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=ROUND(B2,2)",
      "=ROUND(B2;2)",
      "=ROUND(B2, 2)"
    ],
    "expectedValue": 15.75,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Membulatkan Rata-rata Nilai Rapor",
      "kasusSerupa": "Tabel Rapor: Nilai rata-rata 84.6666 di B2. Rumus: =ROUND(B2, 1).",
      "rumusContoh": "=ROUND(B2, 1)",
      "nalarBayi": "Karena angka setelahnya >= 5, Excel membulatkan ke atas menjadi 84.7!"
    }
  },
  {
    "id": "xl-95",
    "category": "10. Waktu, Finansial & Pembulatan",
    "title": "Tantangan 95: Pembulatan Jumlah Dus Selalu ke Atas (ROUNDUP)",
    "scenario": "Gudang mengepak barang ke dalam dus (1 dus isi 12 pcs). Jumlah barang di sel B2 adalah 50 pcs (50/12 = 4.16 dus). Karena sisa barang tetap butuh dus tambahan, bulatkan selalu ke atas tanpa desimal (0) di sel C2.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Produk",
        "B": "Jumlah Barang",
        "C": "Total Dus Butuh"
      },
      {
        "row": 2,
        "A": "Biskuit Kaleng",
        "B": 50,
        "C": ""
      },
      {
        "row": 3,
        "A": "Sirup Botol",
        "B": 25,
        "C": ""
      },
      {
        "row": 4,
        "A": "Minyak Pouch",
        "B": 73,
        "C": ""
      }
    ],
    "targetCell": "C2",
    "instruction": "Tulis rumus =ROUNDUP(B2/12, 0) di sel C2.",
    "babyHint": "🍼 Bahasa Bayi: =ROUNDUP(B2/12, 0). UP artinya ke atas! Sekecil apa pun lebihnya, langsung dibulatkan naik jadi 5 dus!",
    "starterFormula": "=ROUNDUP(",
    "quickChips": [
      "=ROUNDUP(",
      "B2/12",
      "0",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=ROUNDUP(B2/12,0)",
      "=ROUNDUP(B2/12;0)",
      "=ROUNDUP(B2/12, 0)"
    ],
    "expectedValue": 5,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Menghitung Jumlah Mobil Travel untuk Penumpang",
      "kasusSerupa": "Tabel Pariwisata: 15 penumpang, mobil muat 4 orang (15/4 = 3.75). Rumus: =ROUNDUP(15/4, 0).",
      "rumusContoh": "=ROUNDUP(15/4, 0)",
      "nalarBayi": "Tidak mungkin menyewa 3.75 mobil, jadi dibulatkan ke atas menjadi 4 armada mobil!"
    }
  },
  {
    "id": "xl-96",
    "category": "10. Waktu, Finansial & Pembulatan",
    "title": "Tantangan 96: Membulatkan Poin Diskon ke Bawah (ROUNDDOWN)",
    "scenario": "Program Loyalitas memberi poin belanja: Pembeli dapat poin di B2 (48.85 poin). Toko hanya mencairkan poin bulat ke bawah tanpa desimal (0) di sel C2.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Member",
        "B": "Poin Terkumpul",
        "C": "Poin Cair"
      },
      {
        "row": 2,
        "A": "Dewi Sartika",
        "B": 48.85,
        "C": ""
      },
      {
        "row": 3,
        "A": "Agus Priyono",
        "B": 95.99,
        "C": ""
      },
      {
        "row": 4,
        "A": "Lina Herlina",
        "B": 12.3,
        "C": ""
      }
    ],
    "targetCell": "C2",
    "instruction": "Tulis rumus =ROUNDDOWN(B2, 0) di sel C2.",
    "babyHint": "🍼 Bahasa Bayi: =ROUNDDOWN(B2, 0). DOWN artinya ke bawah! Walaupun 48.85 nyaris 49, tetap dipotong ke 48!",
    "starterFormula": "=ROUNDDOWN(",
    "quickChips": [
      "=ROUNDDOWN(",
      "B2",
      "0",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=ROUNDDOWN(B2,0)",
      "=ROUNDDOWN(B2;0)",
      "=ROUNDDOWN(B2, 0)"
    ],
    "expectedValue": 48,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Kuota Voucher Belanja Kelipatan 100 Ribu",
      "kasusSerupa": "Tabel Promo: Total belanja 280.000 di B2. Pembulatan voucher ratusan ribu: =ROUNDDOWN(B2, -5).",
      "rumusContoh": "=ROUNDDOWN(B2, -5)",
      "nalarBayi": "Excel membulatkan ke bawah sehingga pelanggan mendapat voucher senilai 200.000!"
    }
  },
  {
    "id": "xl-97",
    "category": "10. Waktu, Finansial & Pembulatan",
    "title": "Tantangan 97: Mengambil Angka Bulat Utuh Saja (INT)",
    "scenario": "Kasir ingin membuang semua pecahan desimal di sel B2 (124.95) dan hanya mengambil angka bulat utuh di sel C2.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Barang",
        "B": "Harga Kurs ($)",
        "C": "Angka Bulat (INT)"
      },
      {
        "row": 2,
        "A": "Headset",
        "B": 124.95,
        "C": ""
      },
      {
        "row": 3,
        "A": "Mouse",
        "B": 45.8,
        "C": ""
      },
      {
        "row": 4,
        "A": "Keyboard",
        "B": 89.1,
        "C": ""
      }
    ],
    "targetCell": "C2",
    "instruction": "Tulis rumus =INT(B2) di sel C2.",
    "babyHint": "🍼 Bahasa Bayi: =INT(B2). INT singkatan dari Integer (bilangan bulat). Membuang semua koma di belakang!",
    "starterFormula": "=INT(",
    "quickChips": [
      "=INT(",
      "B2",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=INT(B2)",
      "=INT(B2)"
    ],
    "expectedValue": 124,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Menghitung Usia Tahun dari Desimal",
      "kasusSerupa": "Tabel Umur: Usia terhitung 25.8 tahun di B2. Rumus: =INT(B2).",
      "rumusContoh": "=INT(B2)",
      "nalarBayi": "Pecahan 0.8 tahun dibuang sehingga umur resmi tercatat 25 tahun genap!"
    }
  },
  {
    "id": "xl-98",
    "category": "10. Waktu, Finansial & Pembulatan",
    "title": "Tantangan 98: Menghitung Sisa Pembagian Barang (MOD)",
    "scenario": "Pabrik membagi 25 buah barang (sel A2) ke dalam kotak isi 6 (sel B2). Hitung berapa sisa barang yang tidak kebagian kotak di sel C2 menggunakan fungsi sisa bagi (MOD).",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Total Barang",
        "B": "Kapasitas Kotak",
        "C": "Sisa Barang (MOD)"
      },
      {
        "row": 2,
        "A": 25,
        "B": 6,
        "C": ""
      },
      {
        "row": 3,
        "A": 40,
        "B": 12,
        "C": ""
      },
      {
        "row": 4,
        "A": 50,
        "B": 8,
        "C": ""
      }
    ],
    "targetCell": "C2",
    "instruction": "Tulis rumus =MOD(A2, B2) di sel C2.",
    "babyHint": "🍼 Bahasa Bayi: =MOD(A2, B2). MOD itu Modulo / Sisa Bagi! 25 dibagi 6 dapat 4 kotak (24 pcs), sisanya 1!",
    "starterFormula": "=MOD(",
    "quickChips": [
      "=MOD(",
      "A2",
      "B2",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=MOD(A2,B2)",
      "=MOD(A2;B2)",
      "=MOD(A2, B2)"
    ],
    "expectedValue": 1,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Cek Nomor Ganjil atau Genap",
      "kasusSerupa": "Tabel Angka: Angka di A2. Rumus cek sisa bagi dua: =MOD(A2, 2).",
      "rumusContoh": "=MOD(A2, 2)",
      "nalarBayi": "Jika hasilnya 0 berarti angka GENAP, jika hasilnya 1 berarti angka GANJIL!"
    }
  },
  {
    "id": "xl-99",
    "category": "10. Waktu, Finansial & Pembulatan",
    "title": "Tantangan 99: Menghitung Masa Kerja dalam Tahun Penuh (DATEDIF 'Y')",
    "scenario": "HRD menghitung masa kerja karyawan dari Tanggal Masuk di sel B2 ('2018-05-10') sampai Tanggal Evaluasi di sel C2 ('2023-05-10') dalam satuan tahun penuh ('Y') di sel D2.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Karyawan",
        "B": "Tgl Masuk",
        "C": "Tgl Evaluasi",
        "D": "Masa Kerja (Th)"
      },
      {
        "row": 2,
        "A": "Bambang Sudiro",
        "B": "2018-05-10",
        "C": "2023-05-10",
        "D": ""
      },
      {
        "row": 3,
        "A": "Ratna Sari",
        "B": "2020-01-15",
        "C": "2023-05-10",
        "D": ""
      },
      {
        "row": 4,
        "A": "Doni Pratama",
        "B": "2015-08-20",
        "C": "2023-05-10",
        "D": ""
      }
    ],
    "targetCell": "D2",
    "instruction": "Tulis rumus =DATEDIF(B2, C2, 'Y') di sel D2.",
    "babyHint": "🍼 Bahasa Bayi: =DATEDIF(B2, C2, \"Y\"). DATEDIF artinya Date Difference! Huruf 'Y' untuk Years (tahun penuh)!",
    "starterFormula": "=DATEDIF(",
    "quickChips": [
      "=DATEDIF(",
      "B2",
      "C2",
      "\"Y\"",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=DATEDIF(B2,C2,\"Y\")",
      "=DATEDIF(B2;C2;\"Y\")",
      "=DATEDIF(B2, C2, \"Y\")"
    ],
    "expectedValue": 5,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Menghitung Usia Karyawan Berdasarkan Tanggal Lahir",
      "kasusSerupa": "Tabel Kelahiran: Tgl Lahir di B2, Hari ini di C2. Rumus: =DATEDIF(B2, C2, 'Y').",
      "rumusContoh": "=DATEDIF(B2, C2, \"Y\")",
      "nalarBayi": "Menghitung selisih tahun secara presisi tanpa takut salah kabisat!"
    }
  },
  {
    "id": "xl-100",
    "category": "10. Waktu, Finansial & Pembulatan",
    "title": "Tantangan 100: Menghitung Usia dalam Bulan Penuh (DATEDIF 'M')",
    "scenario": "Posyandu menghitung usia balita dari Tanggal Lahir di sel B2 ('2021-01-01') sampai Tanggal Penimbangan di sel C2 ('2024-01-01') dalam satuan bulan penuh ('M') di sel D2.",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Nama Bayi",
        "B": "Tgl Lahir",
        "C": "Tgl Timbang",
        "D": "Usia (Bulan)"
      },
      {
        "row": 2,
        "A": "Alif Pratama",
        "B": "2021-01-01",
        "C": "2024-01-01",
        "D": ""
      },
      {
        "row": 3,
        "A": "Bilqis Azzahra",
        "B": "2022-06-15",
        "C": "2024-01-01",
        "D": ""
      },
      {
        "row": 4,
        "A": "Cahaya Melati",
        "B": "2023-01-10",
        "C": "2024-01-01",
        "D": ""
      }
    ],
    "targetCell": "D2",
    "instruction": "Tulis rumus =DATEDIF(B2, C2, 'M') di sel D2.",
    "babyHint": "🍼 Bahasa Bayi: =DATEDIF(B2, C2, \"M\"). Huruf 'M' artinya Months (bulan penuh). 3 tahun = 36 bulan!",
    "starterFormula": "=DATEDIF(",
    "quickChips": [
      "=DATEDIF(",
      "B2",
      "C2",
      "\"M\"",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=DATEDIF(B2,C2,\"M\")",
      "=DATEDIF(B2;C2;\"M\")",
      "=DATEDIF(B2, C2, \"M\")"
    ],
    "expectedValue": 36,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Menghitung Durasi Kontrak Sewa Rumah",
      "kasusSerupa": "Tabel Kontrak: Awal sewa di B2, Akhir sewa di C2. Rumus: =DATEDIF(B2, C2, 'M').",
      "rumusContoh": "=DATEDIF(B2, C2, \"M\")",
      "nalarBayi": "Excel menghitung berapa bulan total masa sewa berjalan!"
    }
  },
  {
    "id": "xl-101",
    "category": "10. Waktu, Finansial & Pembulatan",
    "title": "Tantangan 101: Menghitung Hari Kerja Efektif Tanpa Akhir Pekan (NETWORKDAYS)",
    "scenario": "Project Manager menghitung berapa hari kerja efektif antara Tanggal Mulai di sel A2 ('2024-05-01') dan Tanggal Target di sel B2 ('2024-05-31') otomatis libur Sabtu-Minggu di sel C2.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Tgl Mulai",
        "B": "Tgl Selesai",
        "C": "Hari Kerja Efektif"
      },
      {
        "row": 2,
        "A": "2024-05-01",
        "B": "2024-05-31",
        "C": ""
      },
      {
        "row": 3,
        "A": "2024-06-01",
        "B": "2024-06-30",
        "C": ""
      },
      {
        "row": 4,
        "A": "2024-07-01",
        "B": "2024-07-31",
        "C": ""
      }
    ],
    "targetCell": "C2",
    "instruction": "Tulis rumus =NETWORKDAYS(A2, B2) di sel C2.",
    "babyHint": "🍼 Bahasa Bayi: =NETWORKDAYS(A2, B2). Net Work Days otomatis mencoret hari Sabtu dan Minggu sehingga menyisakan hari kerja riil!",
    "starterFormula": "=NETWORKDAYS(",
    "quickChips": [
      "=NETWORKDAYS(",
      "A2",
      "B2",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=NETWORKDAYS(A2,B2)",
      "=NETWORKDAYS(A2;B2)",
      "=NETWORKDAYS(A2, B2)"
    ],
    "expectedValue": 23,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Menghitung Target Jam Kerja Staf per Bulan",
      "kasusSerupa": "Tabel HRD: Tanggal awal bulan A2, Akhir bulan B2. Rumus: =NETWORKDAYS(A2, B2).",
      "rumusContoh": "=NETWORKDAYS(A2, B2)",
      "nalarBayi": "Bulan Mei 2024 memiliki 23 hari kerja Senin sampai Jumat!"
    }
  },
  {
    "id": "xl-102",
    "category": "10. Waktu, Finansial & Pembulatan",
    "title": "Tantangan 102: Menghitung Angsuran Cicilan Motor Karyawan per Bulan (PMT)",
    "scenario": "Koperasi Karyawan menghitung cicilan bulanan untuk pinjaman di A2 (12000000), bunga tahunan di B2 (12% atau 0.12, dibagi 12 untuk bunga per bulan), dan tenor di C2 (12 bulan) pada sel D2. Gunakan tanda minus pada pokok pinjaman (-A2).",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Pinjaman (Rp)",
        "B": "Bunga / Th",
        "C": "Tenor (Bulan)",
        "D": "Cicilan / Bulan (PMT)"
      },
      {
        "row": 2,
        "A": 12000000,
        "B": 0.12,
        "C": 12,
        "D": ""
      },
      {
        "row": 3,
        "A": 20000000,
        "B": 0.12,
        "C": 24,
        "D": ""
      },
      {
        "row": 4,
        "A": 30000000,
        "B": 0.1,
        "C": 36,
        "D": ""
      }
    ],
    "targetCell": "D2",
    "instruction": "Tulis rumus =PMT(B2/12, C2, -A2) di sel D2.",
    "babyHint": "🍼 Bahasa Bayi: =PMT(B2/12, C2, -A2). PMT singkatan dari Payment! Bunga dibagi 12 karena dibayar per bulan, pokok pinjaman diberi tanda minus!",
    "starterFormula": "=PMT(",
    "quickChips": [
      "=PMT(",
      "B2/12",
      "C2",
      "-A2",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=PMT(B2/12,C2,-A2)",
      "=PMT(B2/12;C2;-A2)",
      "=PMT(B2/12, C2, -A2)"
    ],
    "expectedValue": 1066185.4647366307,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Simulasi Cicilan KPR Rumah Bank",
      "kasusSerupa": "Tabel Bank: Plafon 200jt, Bunga 6% per tahun (0.06/12), Tenor 120 bulan. Rumus: =PMT(0.06/12, 120, -200000000).",
      "rumusContoh": "=PMT(0.06/12, 120, -200000000)",
      "nalarBayi": "Rumus sakti bankir untuk menghitung angsuran anuitas tetap tiap bulan!"
    }
  },
  {
    "id": "xl-103",
    "category": "10. Waktu, Finansial & Pembulatan",
    "title": "Tantangan 103: Menghitung Nilai Investasi Masa Depan (FV)",
    "scenario": "Karyawan menabung di Koperasi sebesar 500.000 per bulan (D2), dengan bunga 6% per tahun (B2=0.06, bagi 12), selama 24 bulan (C2). Hitung saldo masa depan di sel E2 (=FV(B2/12, C2, -D2)).",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Nama",
        "B": "Bunga / Th",
        "C": "Bulan",
        "D": "Setoran / Bulan",
        "E": "Saldo Akhir (FV)"
      },
      {
        "row": 2,
        "A": "Hendra",
        "B": 0.06,
        "C": 24,
        "D": 500000,
        "E": ""
      },
      {
        "row": 3,
        "A": "Ratna",
        "B": 0.06,
        "C": 36,
        "D": 1000000,
        "E": ""
      }
    ],
    "targetCell": "E2",
    "instruction": "Tulis rumus =FV(B2/12, C2, -D2) di sel E2.",
    "babyHint": "🍼 Bahasa Bayi: =FV(B2/12, C2, -D2). FV artinya Future Value! Memprediksi berapa uang tabunganmu di masa depan setelah ditambah bunga berbunga!",
    "starterFormula": "=FV(",
    "quickChips": [
      "=FV(",
      "B2/12",
      "C2",
      "-D2",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=FV(B2/12,C2,-D2)",
      "=FV(B2/12;C2;-D2)",
      "=FV(B2/12, C2, -D2)"
    ],
    "expectedValue": 12715977.014264787,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Tabungan Pendidikan Anak",
      "kasusSerupa": "Tabel Investasi: Nabung 1jt per bulan selama 5 tahun (60 bulan) dengan imbal hasil 8% setahun.",
      "rumusContoh": "=FV(0.08/12, 60, -1000000)",
      "nalarBayi": "Excel memperlihatkan kekuatan bunga berbunga majemuk!"
    }
  },
  {
    "id": "xl-104",
    "category": "10. Waktu, Finansial & Pembulatan",
    "title": "Tantangan 104: Menghitung Nilai Sekarang / Present Value (PV)",
    "scenario": "Manajer Keuangan ingin memiliki dana 50.000.000 dalam 3 tahun ke depan (D2). Jika suku bunga deposito adalah 8% per tahun (B2=0.08) dan tenor 3 tahun (C2=3), berapa dana yang harus disetor sekarang di sel E2? Gunakan =PV(B2, C2, 0, -D2).",
    "tableHeaders": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Tujuan",
        "B": "Bunga / Th",
        "C": "Tahun",
        "D": "Target Dana",
        "E": "Modal Awal (PV)"
      },
      {
        "row": 2,
        "A": "Dana Renovasi",
        "B": 0.08,
        "C": 3,
        "D": 50000000,
        "E": ""
      },
      {
        "row": 3,
        "A": "Mobil Operasional",
        "B": 0.08,
        "C": 5,
        "D": 150000000,
        "E": ""
      }
    ],
    "targetCell": "E2",
    "instruction": "Tulis rumus =PV(B2, C2, 0, -D2) di sel E2.",
    "babyHint": "🍼 Bahasa Bayi: =PV(B2, C2, 0, -D2). PV artinya Present Value! Berapa nilai uang hari ini yang harus kamu setor untuk dapat 50 juta di masa depan!",
    "starterFormula": "=PV(",
    "quickChips": [
      "=PV(",
      "B2",
      "C2",
      "0",
      "-D2",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=PV(B2,C2,0,-D2)",
      "=PV(B2;C2;0;-D2)",
      "=PV(B2, C2, 0, -D2)"
    ],
    "expectedValue": 39691612.06208608,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Nilai Sekarang dari Hadiah Undian",
      "kasusSerupa": "Tabel Keuangan: Hadiah 100jt cair 5 tahun lagi dengan diskon rate 10%. Rumus: =PV(0.1, 5, 0, -100000000).",
      "rumusContoh": "=PV(0.1, 5, 0, -100000000)",
      "nalarBayi": "Uang 100jt lima tahun lagi setara dengan sekitar 62 juta rupiah hari ini!"
    }
  },
  {
    "id": "xl-105",
    "category": "10. Waktu, Finansial & Pembulatan",
    "title": "Tantangan 105: Menghitung Pangkat dan Akar Kuadrat (POWER & SQRT)",
    "scenario": "Laboratorium Fisika menghitung rumus =SQRT(A2) + POWER(B2, 2) di sel C2, di mana A2 adalah angka 16 (akar dari 16 = 4) dan B2 adalah angka 3 (3 pangkat 2 = 9). Totalnya 4 + 9 = 13.",
    "tableHeaders": [
      "A",
      "B",
      "C"
    ],
    "tableRows": [
      {
        "row": 1,
        "A": "Angka Akar",
        "B": "Angka Pangkat",
        "C": "Hasil SQRT + POWER"
      },
      {
        "row": 2,
        "A": 16,
        "B": 3,
        "C": ""
      },
      {
        "row": 3,
        "A": 25,
        "B": 4,
        "C": ""
      },
      {
        "row": 4,
        "A": 100,
        "B": 2,
        "C": ""
      }
    ],
    "targetCell": "C2",
    "instruction": "Tulis rumus =SQRT(A2) + POWER(B2, 2) di sel C2.",
    "babyHint": "🍼 Bahasa Bayi: =SQRT(A2) + POWER(B2, 2). SQRT adalah Square Root (akar kuadrat), POWER adalah perpangkatan!",
    "starterFormula": "=SQRT(",
    "quickChips": [
      "=SQRT(",
      "A2",
      ")",
      "+",
      "POWER(",
      "B2",
      "2",
      ")",
      ";",
      ","
    ],
    "acceptedFormulas": [
      "=SQRT(A2)+POWER(B2,2)",
      "=SQRT(A2)+POWER(B2;2)",
      "=SQRT(A2) + POWER(B2, 2)",
      "=SQRT(A2)+B2^2",
      "=SQRT(A2) + B2^2"
    ],
    "expectedValue": 13,
    "workedExample": {
      "title": "💡 CONTOH SERUPA: Menghitung Sisi Miring Segitiga Phytagoras",
      "kasusSerupa": "Tabel Geometri: Alas a=3, Tinggi b=4. Sisi miring: =SQRT(POWER(3, 2) + POWER(4, 2)).",
      "rumusContoh": "=SQRT(POWER(3, 2) + POWER(4, 2))",
      "nalarBayi": "Akar dari (9 + 16 = 25) menghasilkan sisi miring tepat 5!"
    }
  }
];


// Client-side Excel Formula Engine & Evaluator
function evaluateExcelFormula(formulaStr, tableRows) {
  if (!formulaStr || typeof formulaStr !== "string") return null;
  let raw = formulaStr.trim();
  if (raw.startsWith("=")) raw = raw.substring(1).trim();
  if (!raw) return null;

  // Build cell lookup map: e.g. cellMap["A2"] = 10, cellMap["B2"] = "VIP"
  const cellMap = {};
  tableRows.forEach(r => {
    const rowNum = r.row;
    Object.keys(r).forEach(col => {
      if (col !== "row") {
        const key = `${col.toUpperCase()}${rowNum}`;
        cellMap[key] = r[col];
      }
    });
  });

  // Helper to get range values
  function getRangeValues(rangeStr) {
    rangeStr = rangeStr.replace(/\$/g, "").toUpperCase();
    if (!rangeStr.includes(":")) {
      const v = cellMap[rangeStr];
      return v !== undefined && v !== "" ? [v] : [];
    }
    const parts = rangeStr.split(":");
    const startCol = parts[0].match(/[A-Z]+/)[0];
    const startRow = parseInt(parts[0].match(/\d+/)[0]);
    const endCol = parts[1].match(/[A-Z]+/)[0];
    const endRow = parseInt(parts[1].match(/\d+/)[0]);

    const startColCode = startCol.charCodeAt(0);
    const endColCode = endCol.charCodeAt(0);
    const minCol = Math.min(startColCode, endColCode);
    const maxCol = Math.max(startColCode, endColCode);
    const minRow = Math.min(startRow, endRow);
    const maxRow = Math.max(startRow, endRow);

    const values = [];
    for (let c = minCol; c <= maxCol; c++) {
      const colLetter = String.fromCharCode(c);
      for (let r = minRow; r <= maxRow; r++) {
        const k = `${colLetter}${r}`;
        const val = cellMap[k];
        if (val !== undefined && val !== "") {
          values.push(val);
        }
      }
    }
    return values;
  }

  // Parse arguments handling commas inside quotes
  function splitArgs(argStr) {
    const args = [];
    let current = "";
    let inQuotes = false;
    let depth = 0;
    for (let i = 0; i < argStr.length; i++) {
      const char = argStr[i];
      if (char === '"' || char === "'") {
        inQuotes = !inQuotes;
        current += char;
      } else if (!inQuotes && (char === "(" || char === "[" || char === "{")) {
        depth++;
        current += char;
      } else if (!inQuotes && (char === ")" || char === "]" || char === "}")) {
        depth--;
        current += char;
      } else if (!inQuotes && (char === "," || char === ";") && depth === 0) {
        args.push(current.trim());
        current = "";
      } else {
        current += char;
      }
    }
    if (current.trim()) args.push(current.trim());
    return args;
  }

  // Quick evaluation of common formulas
  const upper = raw.toUpperCase();

  // Basic IF
  if (upper.startsWith("IF(") || upper.startsWith("IF (")) {
    const inner = raw.substring(raw.indexOf("(") + 1, raw.lastIndexOf(")"));
    const args = splitArgs(inner);
    if (args.length >= 2) {
      const cond = args[0];
      const trueVal = args[1].replace(/^["']|["']$/g, "");
      const falseVal = args[2] ? args[2].replace(/^["']|["']$/g, "") : "";
      return trueVal;
    }
  }

  // Basic IFS
  if (upper.startsWith("IFS(") || upper.startsWith("IFS (")) {
    const inner = raw.substring(raw.indexOf("(") + 1, raw.lastIndexOf(")"));
    const args = splitArgs(inner);
    if (args.length >= 2) {
      return args[1].replace(/^["']|["']$/g, "");
    }
  }

  // Basic SUM
  if (upper.startsWith("SUM(") || upper.startsWith("SUM (")) {
    const inner = raw.substring(raw.indexOf("(") + 1, raw.lastIndexOf(")"));
    const vals = getRangeValues(inner).map(Number).filter(n => !isNaN(n));
    return vals.reduce((a, b) => a + b, 0);
  }

  // Basic AVERAGE
  if (upper.startsWith("AVERAGE(") || upper.startsWith("AVERAGE (")) {
    const inner = raw.substring(raw.indexOf("(") + 1, raw.lastIndexOf(")"));
    const vals = getRangeValues(inner).map(Number).filter(n => !isNaN(n));
    if (vals.length === 0) return 0;
    return vals.reduce((a, b) => a + b, 0) / vals.length;
  }

  // Basic AVERAGEA
  if (upper.startsWith("AVERAGEA(") || upper.startsWith("AVERAGEA (")) {
    const inner = raw.substring(raw.indexOf("(") + 1, raw.lastIndexOf(")"));
    const vals = getRangeValues(inner).map(v => isNaN(Number(v)) ? 0 : Number(v));
    if (vals.length === 0) return 0;
    return vals.reduce((a, b) => a + b, 0) / vals.length;
  }

  // Basic COUNT
  if (upper.startsWith("COUNT(") || upper.startsWith("COUNT (")) {
    const inner = raw.substring(raw.indexOf("(") + 1, raw.lastIndexOf(")"));
    const vals = getRangeValues(inner).filter(v => typeof v === "number" || (!isNaN(Number(v)) && v !== ""));
    return vals.length;
  }

  // Basic COUNTA
  if (upper.startsWith("COUNTA(") || upper.startsWith("COUNTA (")) {
    const inner = raw.substring(raw.indexOf("(") + 1, raw.lastIndexOf(")"));
    const vals = getRangeValues(inner);
    return vals.length;
  }

  // Basic COUNTBLANK
  if (upper.startsWith("COUNTBLANK(") || upper.startsWith("COUNTBLANK (")) {
    const inner = raw.substring(raw.indexOf("(") + 1, raw.lastIndexOf(")"));
    // Count empty cells in range
    let blanks = 0;
    const parts = inner.split(":");
    if (parts.length === 2) {
      const startCol = parts[0].match(/[A-Z]+/)[0].charCodeAt(0);
      const startRow = parseInt(parts[0].match(/\d+/)[0]);
      const endCol = parts[1].match(/[A-Z]+/)[0].charCodeAt(0);
      const endRow = parseInt(parts[1].match(/\d+/)[0]);
      for (let c = Math.min(startCol, endCol); c <= Math.max(startCol, endCol); c++) {
        for (let r = Math.min(startRow, endRow); r <= Math.max(startRow, endRow); r++) {
          const val = cellMap[`${String.fromCharCode(c)}${r}`];
          if (val === undefined || val === "" || val === null) blanks++;
        }
      }
    }
    return blanks;
  }

  // Basic MAX / MAXA
  if (upper.startsWith("MAX(") || upper.startsWith("MAXA(") || upper.startsWith("MAX (")) {
    const inner = raw.substring(raw.indexOf("(") + 1, raw.lastIndexOf(")"));
    const vals = getRangeValues(inner).map(Number).filter(n => !isNaN(n));
    return Math.max(...vals);
  }

  // Basic MIN / MINA
  if (upper.startsWith("MIN(") || upper.startsWith("MINA(") || upper.startsWith("MIN (")) {
    const inner = raw.substring(raw.indexOf("(") + 1, raw.lastIndexOf(")"));
    const vals = getRangeValues(inner).map(Number).filter(n => !isNaN(n));
    return Math.min(...vals);
  }

  // Basic MEDIAN
  if (upper.startsWith("MEDIAN(") || upper.startsWith("MEDIAN (")) {
    const inner = raw.substring(raw.indexOf("(") + 1, raw.lastIndexOf(")"));
    const vals = getRangeValues(inner).map(Number).filter(n => !isNaN(n)).sort((a, b) => a - b);
    if (vals.length === 0) return 0;
    const mid = Math.floor(vals.length / 2);
    return vals.length % 2 !== 0 ? vals[mid] : (vals[mid - 1] + vals[mid]) / 2;
  }

  // Basic CONCAT
  if (upper.startsWith("CONCAT(") || upper.startsWith("CONCATENATE(")) {
    const inner = raw.substring(raw.indexOf("(") + 1, raw.lastIndexOf(")"));
    const args = splitArgs(inner);
    return args.map(a => {
      if ((a.startsWith('"') && a.endsWith('"')) || (a.startsWith("'") && a.endsWith("'"))) {
        return a.slice(1, -1);
      }
      return cellMap[a.toUpperCase()] !== undefined ? cellMap[a.toUpperCase()] : a;
    }).join("");
  }

  // Basic LEFT
  if (upper.startsWith("LEFT(")) {
    const inner = raw.substring(raw.indexOf("(") + 1, raw.lastIndexOf(")"));
    const args = splitArgs(inner);
    const text = (cellMap[args[0].toUpperCase()] || args[0]).toString();
    const len = parseInt(args[1] || 1);
    return text.substring(0, len);
  }

  // Basic RIGHT
  if (upper.startsWith("RIGHT(")) {
    const inner = raw.substring(raw.indexOf("(") + 1, raw.lastIndexOf(")"));
    const args = splitArgs(inner);
    const text = (cellMap[args[0].toUpperCase()] || args[0]).toString();
    const len = parseInt(args[1] || 1);
    return text.substring(text.length - len);
  }

  // Basic MID
  if (upper.startsWith("MID(")) {
    const inner = raw.substring(raw.indexOf("(") + 1, raw.lastIndexOf(")"));
    const args = splitArgs(inner);
    const text = (cellMap[args[0].toUpperCase()] || args[0]).toString();
    const start = parseInt(args[1]) - 1;
    const len = parseInt(args[2]);
    return text.substring(start, start + len);
  }

  // Basic LEN
  if (upper.startsWith("LEN(")) {
    const inner = raw.substring(raw.indexOf("(") + 1, raw.lastIndexOf(")"));
    const text = (cellMap[inner.toUpperCase()] || inner).toString();
    return text.length;
  }

  // Basic TRIM
  if (upper.startsWith("TRIM(")) {
    const inner = raw.substring(raw.indexOf("(") + 1, raw.lastIndexOf(")"));
    const text = (cellMap[inner.toUpperCase()] || inner).toString();
    return text.trim().replace(/\s+/g, " ");
  }

  // Basic UPPER
  if (upper.startsWith("UPPER(")) {
    const inner = raw.substring(raw.indexOf("(") + 1, raw.lastIndexOf(")"));
    const text = (cellMap[inner.toUpperCase()] || inner).toString();
    return text.toUpperCase();
  }

  // Basic LOWER
  if (upper.startsWith("LOWER(")) {
    const inner = raw.substring(raw.indexOf("(") + 1, raw.lastIndexOf(")"));
    const text = (cellMap[inner.toUpperCase()] || inner).toString();
    return text.toLowerCase();
  }

  // Basic PROPER
  if (upper.startsWith("PROPER(")) {
    const inner = raw.substring(raw.indexOf("(") + 1, raw.lastIndexOf(")"));
    const text = (cellMap[inner.toUpperCase()] || inner).toString();
    return text.replace(/\b\w/g, l => l.toUpperCase());
  }

  // Basic ROUND
  if (upper.startsWith("ROUND(")) {
    const inner = raw.substring(raw.indexOf("(") + 1, raw.lastIndexOf(")"));
    const args = splitArgs(inner);
    const num = parseFloat(cellMap[args[0].toUpperCase()] || args[0]);
    const dec = parseInt(args[1] || 0);
    return Number(Math.round(num + "e" + dec) + "e-" + dec);
  }

  return null;
}

// Check Challenge Answer
function checkExcelChallengeAnswer(userFormula, challenge) {
  if (!userFormula || typeof userFormula !== "string") {
    return { isCorrect: false, feedback: "Ketik rumus Excel kamu dulu ya! Contoh: =SUM(A1:A5)" };
  }

  const clean = userFormula.trim();
  if (!clean.startsWith("=")) {
    return { isCorrect: false, feedback: "Rumus Excel wajib diawali dengan tanda sama dengan (=)!" };
  }

  // Normalize user formula: uppercase, remove spaces outside quotes, change ; to ,
  function normalize(str) {
    let res = "";
    let inQuotes = false;
    for (let i = 0; i < str.length; i++) {
      const c = str[i];
      if (c === '"' || c === "'") {
        inQuotes = !inQuotes;
        res += c;
      } else if (inQuotes) {
        res += c;
      } else if (c === ";") {
        res += ",";
      } else if (!/\s/.test(c)) {
        res += c.toUpperCase();
      }
    }
    return res.replace(/\$/g, ""); // remove absolute cell references $
  }

  const normUser = normalize(clean);

  // Check against acceptedFormulas
  const acceptedList = challenge.acceptedFormulas || [];
  for (let acc of acceptedList) {
    if (normalize(acc) === normUser) {
      return {
        isCorrect: true,
        evaluatedValue: challenge.expectedValue,
        feedback: "🎉 Hebat banget! Rumus Excel kamu 100% benar dan sesuai!"
      };
    }
  }

  // Evaluate value check
  try {
    const evaluated = evaluateExcelFormula(clean, challenge.tableRows);
    if (evaluated !== null && evaluated !== undefined) {
      if (typeof challenge.expectedValue === "number" && typeof evaluated === "number") {
        if (Math.abs(evaluated - challenge.expectedValue) < 0.05) {
          return {
            isCorrect: true,
            evaluatedValue: evaluated,
            feedback: "🎉 Benar sekali! Rumus kamu berhasil menghasilkan nilai yang tepat!"
          };
        }
      } else if (String(evaluated).trim().toLowerCase() === String(challenge.expectedValue).trim().toLowerCase()) {
        return {
          isCorrect: true,
          evaluatedValue: evaluated,
          feedback: "🎉 Luar biasa! Hasil kalkulasi rumusmu tepat!"
        };
      }
    }
  } catch (err) {
    console.warn("Evaluation error:", err);
  }

  return {
    isCorrect: false,
    feedback: `Kurang pas nih. Petunjuk: ${challenge.babyHint}`
  };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { excelChallenges, evaluateExcelFormula, checkExcelChallengeAnswer };
}
