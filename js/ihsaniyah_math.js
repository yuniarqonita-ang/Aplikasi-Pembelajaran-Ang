// ==============================================================================
// 🎒 YAYASAN PERGURUAN IHSANIYAH - SD IHSANIYAH GAJAHMADA TEGAL
// Kampus Al Hafidz • MATH FORMATIVE TEST 2 & CAMBRIDGE PRIMARY DIVISION
// 27 Soal Lengkap dengan Visual Interaktif Unik Buatan Sendiri (Bukan Crop PDF!)
// Auto-Save Realtime ke Panel Guru (Rekap) & Tanpa Bocoran Pembahasan di Layar Ujian
// ==============================================================================

(function() {
  'use strict';

  // Stacked Mathematical Fractions Formatter (Donald Knuth Math Axis & Collinear Operator Alignment)
  window.formatMathFractions = function(text) {
    if (!text || typeof text !== 'string') return text || '';

    var formatted = text.replace(/(^|\s)(\d+)\s+(\d+)\/(\d+)(?=[^\d\/]|$)/g, function(match, prefix, whole, num, den) {
      return prefix + '<span class="math-expr"><span class="math-whole">' + whole + '</span><span class="math-fraction"><span class="num">' + num + '</span><span class="den">' + den + '</span></span></span>';
    });

    formatted = formatted.replace(/(^|[^a-zA-Z0-9_\/])(-?\d+)\/(\d+)(?![a-zA-Z0-9_\/])/g, function(match, prefix, num, den) {
      return prefix + '<span class="math-fraction"><span class="num">' + num + '</span><span class="den">' + den + '</span></span>';
    });

    var tokens = formatted.split(/(<[^>]+>)/g);
    for (var i = 0; i < tokens.length; i++) {
      if (!tokens[i].startsWith('<')) {
        tokens[i] = tokens[i].replace(/(\s*)([\+\=\u00D7\u00F7\u00B1\u2260\u2248])(\s*)/g, function(m, sp1, op, sp2) {
          return ' <span class="math-op">' + op + '</span> ';
        });
        tokens[i] = tokens[i].replace(/(^|\s|\d)(\-)(\s|\d|$)/g, function(m, left, op, right) {
          return left + ' <span class="math-op">&minus;</span> ' + right;
        });
      }
    }
    return tokens.join('').replace(/\s{2,}/g, ' ');
  };

  // ==============================================================================
  // BANK DATA 27 SOAL LENGKAP DARI KURIKULUM SD IHSANIYAH (SUDAH DIURUTKAN)
  // Setiap soal dilengkapi visualConfig untuk merender Ilustrasi & Manipulatif
  // Interaktif Buatan Sendiri langsung di Website (100% Tanpa Gambar Crop PDF).
  // ==============================================================================
  window.IHSANIYAH_QUESTIONS = [
    // ======================== BAGIAN 1: MATH FORMATIVE TEST 2 (NO. 1 - 10) ========================
    {
      id: 'ihs-1',
      number: 1,
      section: 'Math Formative Test 2 • Part I',
      page: 'Formative Test • Part I No. 1',
      type: 'multi_select',
      title: 'Number Sequence Jumps (237 to 287)',
      badge: 'Part I • Multiple Check (✓)',
      instruction: 'I. Choose one or more correct answers by putting a check mark (✓) in the boxes next to A, B, or C!\nLook at the stepping-stone number track below. Based on the numbers, which statements are correct?',
      visualConfig: {
        kind: 'number_line_jumps',
        numbers: [237, 247, 257, 267, 277, 287],
        stepText: '+10 setiap lompatan batu'
      },
      options: [
        { key: 'A', text: 'A. 237 + 40 = 267', isCorrect: false },
        { key: 'B', text: 'B. 267 – 20 = 247', isCorrect: true },
        { key: 'C', text: 'C. 257 + 30 = 287', isCorrect: true }
      ],
      answerKeySummary: 'B and C (267 - 20 = 247; 257 + 30 = 287)'
    },
    {
      id: 'ihs-2',
      number: 2,
      section: 'Math Formative Test 2 • Part I',
      page: 'Formative Test • Part I No. 2',
      type: 'multi_select',
      title: 'Place Value Mystery Addition Grid (H T O)',
      badge: 'Part I • Multiple Check (✓)',
      instruction: 'Look at the vertical addition place-value board below! Find the secret values of boxes a, b, and c, then check (✓) all correct statements:',
      visualConfig: {
        kind: 'hto_mystery_grid',
        op: '+',
        row1: [
          { val: '2', isMystery: false },
          { val: 'b', isMystery: true, color: '#f43f5e' },
          { val: '7', isMystery: false }
        ],
        row2: [
          { val: '7', isMystery: false },
          { val: '2', isMystery: false },
          { val: 'a', isMystery: true, color: '#38bdf8' }
        ],
        row3: [
          { val: 'c', isMystery: true, color: '#10b981' },
          { val: '6', isMystery: false },
          { val: '9', isMystery: false }
        ]
      },
      options: [
        { key: 'A', text: 'A. The value of box a is 6', isCorrect: false },
        { key: 'B', text: 'B. The value of box b is 4', isCorrect: true },
        { key: 'C', text: 'C. The value of box c is 9', isCorrect: true }
      ],
      answerKeySummary: 'B and C (a = 2, b = 4, c = 9)'
    },
    {
      id: 'ihs-3',
      number: 3,
      section: 'Math Formative Test 2 • Part II',
      page: 'Formative Test • Part II No. 3',
      type: 'true_false_table',
      title: 'Subtraction Diagram Using the "Making 10" Technique (462 – 8)',
      badge: 'Part II • True or False (✓)',
      instruction: 'II. Put a check mark (✓) in the "True" column if the statement is true, or in the "False" column if the statement is false!\nObserve the "Making 10" number bond diagram below for 462 – 8 = c:',
      visualConfig: {
        kind: 'number_bond_making10_sub',
        mainEquation: '462 – 8 = c',
        whole: '462',
        leftPart: 'b',
        rightPart: '10',
        subtractNum: '8',
        remLabel: '10 – 8 = a',
        finalStep: 'b + a = c'
      },
      statements: [
        { id: 's3_a', text: '(a) The value of "a" is 2', correctAnswer: true },
        { id: 's3_b', text: '(b) The value of "b" is 452', correctAnswer: true },
        { id: 's3_c', text: '(c) The value of "c" is 454', correctAnswer: true }
      ],
      answerKeySummary: '(a) True, (b) True, (c) True (462 = 452 + 10; 10 - 8 = 2; 452 + 2 = 454)'
    },
    {
      id: 'ihs-4',
      number: 4,
      section: 'Math Formative Test 2 • Part II',
      page: 'Formative Test • Part II No. 4',
      type: 'true_false_table',
      title: 'Detective Math: Inspecting Yuri\'s Subtraction Work (527 – 158)',
      badge: 'Part II • True or False & Error Inspection',
      instruction: 'Yuri is subtracting numbers on her notepad: 527 – 158 = 431. Inspect her work carefully and determine True or False for each correction statement below:',
      visualConfig: {
        kind: 'yuri_detective_card',
        row1: ['5', '2', '7'],
        row2: ['1', '5', '8'],
        yuriAns: ['4', '3', '1']
      },
      statements: [
        { id: 's4_a', text: '(a) In the Ones (O) column, 7 – 8 needs regrouping from Tens: 17 – 8 = 9 (Yuri wrote 1 because she did 8 – 7)', correctAnswer: true },
        { id: 's4_b', text: '(b) In the Tens (T) column, after lending 1 ten, 1 ten remains; borrowing 1 hundred gives 11 – 5 = 6 (not 3)', correctAnswer: true },
        { id: 's4_c', text: '(c) In the Hundreds (H) column, 4 – 1 = 3, so the correct result of 527 – 158 is 369', correctAnswer: true }
      ],
      answerKeySummary: '(a) True, (b) True, (c) True — Correct answer: 527 – 158 = 369'
    },
    {
      id: 'ihs-5',
      number: 5,
      section: 'Math Formative Test 2 • Part III',
      page: 'Formative Test • Part III No. 5',
      type: 'multi_box_fill',
      title: 'Incomplete Vertical Subtraction Puzzle (500 – 14_ = 3_4)',
      badge: 'Part III • Fill in the Blank',
      instruction: 'III. Fill the blank boxes with the correct digits! Look at the vertical subtraction puzzle below:',
      visualConfig: {
        kind: 'hto_puzzle_500'
      },
      boxes: [
        { id: 'b5_1', label: 'Missing Ones digit [ ? ] in 1 4 [ ? ] (Row 2, Column O):', placeholder: '?', expected: ['6'] },
        { id: 'b5_2', label: 'Missing Tens digit [ ? ] in 3 [ ? ] 4 (Row 3, Column T):', placeholder: '?', expected: ['5'] }
      ],
      answerKeySummary: 'Row 2 Ones = 6 (146), Row 3 Tens = 5 (354). Because 500 – 146 = 354.'
    },
    {
      id: 'ihs-6',
      number: 6,
      section: 'Math Formative Test 2 • Part III',
      page: 'Formative Test • Part III No. 6',
      type: 'multi_box_fill',
      title: 'Making 10 Addition Diagram (678 + 8)',
      badge: 'Part III • Fill in the Blank',
      instruction: 'Look at the "Making 10" addition diagram below! 678 is split into 676 and 2 so that 2 + 8 makes 10. Fill in the missing results:',
      visualConfig: {
        kind: 'number_bond_678'
      },
      boxes: [
        { id: 'b6_1', label: 'Step 1: 676 + 10 = ….', placeholder: '...', expected: ['686'] },
        { id: 'b6_2', label: 'Step 2: So, 678 + 8 = ….', placeholder: '...', expected: ['686', '688'] }
      ],
      answerKeySummary: '676 + 10 = 686; So 678 + 8 = 686.'
    },
    {
      id: 'ihs-7',
      number: 7,
      section: 'Math Formative Test 2 • Part IV',
      page: 'Formative Test • Part IV No. 7',
      type: 'multi_box_fill',
      title: 'Place Value Addition Workout: 297 + 358 = ….',
      badge: 'Part IV • Essay / Workout',
      instruction: 'IV. Answer the following question correctly! Use the H-T-O place-value board to calculate 297 + 358:',
      visualConfig: {
        kind: 'hto_workout_card',
        op: '+',
        num1: ['2', '9', '7'],
        num2: ['3', '5', '8'],
        equationLabel: '297 + 358 = ?'
      },
      boxes: [
        { id: 'b7_h', label: 'H (Hundreds digit):', placeholder: 'H', expected: ['6'] },
        { id: 'b7_t', label: 'T (Tens digit):', placeholder: 'T', expected: ['5'] },
        { id: 'b7_o', label: 'O (Ones digit):', placeholder: 'O', expected: ['5'] },
        { id: 'b7_total', label: 'Final Answer (297 + 358 = ….):', placeholder: '...', expected: ['655'] }
      ],
      answerKeySummary: '297 + 358 = 655 (H = 6, T = 5, O = 5)'
    },
    {
      id: 'ihs-8',
      number: 8,
      section: 'Math Formative Test 2 • Part IV',
      page: 'Formative Test • Part IV No. 8',
      type: 'multi_box_fill',
      title: 'Making 100 Addition Diagram (597 + 98)',
      badge: 'Part IV • Essay / Number Bond',
      instruction: 'Complete the "Making 100" number bond diagram below for 597 + 98 (98 needs 2 to reach 100):',
      visualConfig: {
        kind: 'number_bond_597'
      },
      boxes: [
        { id: 'b8_left', label: 'Left branch of 597 (597 – 2):', placeholder: '...', expected: ['595', '569'] },
        { id: 'b8_right', label: 'Right branch of 597 (paired with 98 to make 100):', placeholder: '...', expected: ['2'] },
        { id: 'b8_sum', label: 'Final Result (595 + 100 = ….):', placeholder: '...', expected: ['695', '625'] }
      ],
      answerKeySummary: '597 splits into 595 and 2; 2 + 98 = 100; 595 + 100 = 695.'
    },
    {
      id: 'ihs-9',
      number: 9,
      section: 'Math Formative Test 2 • Part IV',
      page: 'Formative Test • Part IV No. 9',
      type: 'multi_box_fill',
      title: 'Place Value Subtraction Across Zeros: 800 – 697 = ….',
      badge: 'Part IV • Essay / Workout',
      instruction: 'Use the H-T-O place-value board below to calculate 800 – 697:',
      visualConfig: {
        kind: 'hto_workout_card',
        op: '–',
        num1: ['8', '0', '0'],
        num2: ['6', '9', '7'],
        equationLabel: '800 – 697 = ?'
      },
      boxes: [
        { id: 'b9_h', label: 'H (Hundreds digit):', placeholder: 'H', expected: ['1'] },
        { id: 'b9_t', label: 'T (Tens digit):', placeholder: 'T', expected: ['0'] },
        { id: 'b9_o', label: 'O (Ones digit):', placeholder: 'O', expected: ['3'] },
        { id: 'b9_total', label: 'Final Answer (800 – 697 = ….):', placeholder: '...', expected: ['103'] }
      ],
      answerKeySummary: '800 – 697 = 103 (H = 1, T = 0, O = 3)'
    },
    {
      id: 'ihs-10',
      number: 10,
      section: 'Math Formative Test 2 • Part IV',
      page: 'Formative Test • Part IV No. 10',
      type: 'multi_box_fill',
      title: 'Take-From-100 Subtraction Diagram: 749 – 70 = ….',
      badge: 'Part IV • Essay / Number Bond',
      instruction: 'Complete the number bond subtraction diagram below for 749 – 70 (749 is partitioned into 649 and 100, then subtract 70 from 100):',
      visualConfig: {
        kind: 'number_bond_749'
      },
      boxes: [
        { id: 'b10_left', label: 'Left branch of 749 (749 – 100):', placeholder: '...', expected: ['649'] },
        { id: 'b10_rem', label: 'Result of 100 – 70:', placeholder: '...', expected: ['30'] },
        { id: 'b10_total', label: 'Final Answer (649 + 30 = ….):', placeholder: '...', expected: ['679'] }
      ],
      answerKeySummary: '749 splits into 649 and 100; 100 – 70 = 30; 649 + 30 = 679.'
    },

    // ======================== BAGIAN 2: UNIT 5 DIVISION - BOOK PAGE 55 (NO. 11 - 13) ========================
    {
      id: 'ihs-11',
      number: 11,
      section: 'Unit 5 Division • Exercise 1: Sharing Equally to Divide',
      page: 'Book Page 55 • No. 1(a)',
      type: 'division_sentence',
      title: 'Sharing Equally: Divide 16 Keys into 2 Key-Ring Bundles',
      badge: 'Unit 5 • Book Page 55 • No. 1(a)',
      instruction: '1. Find the number of objects in each group. Then, write the division sentence.\n(a) Divide 16 golden keys equally into 2 bundles.',
      visualConfig: {
        kind: 'equal_sharing_containers',
        totalItems: 16,
        groupCount: 2,
        itemsPerGroup: 8,
        itemEmoji: '🔑',
        itemLabel: 'Kunci Emas (Keys)',
        containerTitle: 'Gantungan Kunci (Bundle)',
        containerIcon: '⭕',
        accentColor: '#f59e0b'
      },
      divA: '16',
      divB: '2',
      divRes: '8',
      statementPrefix: 'There are',
      statementSuffix: 'keys in each bundle.',
      statementAns: '8',
      answerKeySummary: '16 ÷ 2 = 8 | There are 8 keys in each bundle.'
    },
    {
      id: 'ihs-12',
      number: 12,
      section: 'Unit 5 Division • Exercise 1: Sharing Equally to Divide',
      page: 'Book Page 55 • No. 1(b)',
      type: 'division_sentence',
      title: 'Sharing Equally: Divide 18 Mice into 3 Groups',
      badge: 'Unit 5 • Book Page 55 • No. 1(b)',
      instruction: '1(b) Divide 18 cute mice equally into 3 groups. Count how many mice are in each group and complete the division sentence:',
      visualConfig: {
        kind: 'equal_sharing_containers',
        totalItems: 18,
        groupCount: 3,
        itemsPerGroup: 6,
        itemEmoji: '🐭',
        itemLabel: 'Tikus Kecil (Mice)',
        containerTitle: 'Kelompok Keju (Group)',
        containerIcon: '🧀',
        accentColor: '#38bdf8'
      },
      divA: '18',
      divB: '3',
      divRes: '6',
      statementPrefix: 'There are',
      statementSuffix: 'mice in each group.',
      statementAns: '6',
      answerKeySummary: '18 ÷ 3 = 6 | There are 6 mice in each group.'
    },
    {
      id: 'ihs-13',
      number: 13,
      section: 'Unit 5 Division • Exercise 1: Sharing Equally to Divide',
      page: 'Book Page 55 • No. 1(c)',
      type: 'division_sentence',
      title: 'Sharing Equally: Divide 25 Chicks into 5 Cozy Nests',
      badge: 'Unit 5 • Book Page 55 • No. 1(c)',
      instruction: '1(c) Divide 25 baby chicks equally into 5 groups. Complete the division sentence and final box:',
      visualConfig: {
        kind: 'equal_sharing_containers',
        totalItems: 25,
        groupCount: 5,
        itemsPerGroup: 5,
        itemEmoji: '🐥',
        itemLabel: 'Anak Ayam (Chicks)',
        containerTitle: 'Sarang Hangat (Group)',
        containerIcon: '🪺',
        accentColor: '#eab308'
      },
      divA: '25',
      divB: '5',
      divRes: '5',
      statementPrefix: 'There are',
      statementSuffix: 'chicks in each group.',
      statementAns: '5',
      answerKeySummary: '25 ÷ 5 = 5 | There are 5 chicks in each group.'
    },

    // ======================== BAGIAN 3: UNIT 5 DIVISION - BOOK PAGE 56 (NO. 14 - 15) ========================
    {
      id: 'ihs-14',
      number: 14,
      section: 'Unit 5 Division • Exercise 1: Sharing Equally to Divide',
      page: 'Book Page 56 • No. 2(a)',
      type: 'division_sentence',
      title: 'Interactive Tray Simulator: Siska\'s 12 Glasses on 4 Trays',
      badge: 'Unit 5 • Book Page 56 • No. 2(a)',
      instruction: '2. Distribute the objects equally to solve the division story, then write the division sentence!\n(a) Siska has 12 glasses of orange juice. She puts the glasses equally onto 4 trays.',
      visualConfig: {
        kind: 'interactive_distributor',
        totalItems: 12,
        groupCount: 4,
        itemsPerGroup: 3,
        itemEmoji: '🍹',
        itemLabel: 'Gelas Jus (Glasses)',
        containerTitle: 'Nampan Siska (Tray)',
        containerIcon: '🍽️',
        buttonLabel: '🪄 Bagikan 12 Gelas ke 4 Nampan Secara Merata',
        accentColor: '#f97316'
      },
      divA: '12',
      divB: '4',
      divRes: '3',
      statementPrefix: 'There are',
      statementSuffix: 'glasses on each tray.',
      statementAns: '3',
      answerKeySummary: '12 ÷ 4 = 3 | There are 3 glasses on each tray.'
    },
    {
      id: 'ihs-15',
      number: 15,
      section: 'Unit 5 Division • Exercise 1: Sharing Equally to Divide',
      page: 'Book Page 56 • No. 2(b)',
      type: 'division_sentence',
      title: 'Interactive Bowl Simulator: Ida\'s 15 Rambutans in 3 Bowls',
      badge: 'Unit 5 • Book Page 56 • No. 2(b)',
      instruction: '2(b) There are 15 sweet red rambutans. Ida puts the rambutans equally into 3 bowls.',
      visualConfig: {
        kind: 'interactive_distributor',
        totalItems: 15,
        groupCount: 3,
        itemsPerGroup: 5,
        itemEmoji: '🍓',
        itemLabel: 'Buah Rambutan Merah',
        containerTitle: 'Mangkuk Ida (Bowl)',
        containerIcon: '🥣',
        buttonLabel: '🪄 Masukkan 15 Rambutan ke 3 Mangkuk Secara Merata',
        accentColor: '#ef4444'
      },
      divA: '15',
      divB: '3',
      divRes: '5',
      statementPrefix: 'There are',
      statementSuffix: 'rambutans in each bowl.',
      statementAns: '5',
      answerKeySummary: '15 ÷ 3 = 5 | There are 5 rambutans in each bowl.'
    },

    // ======================== BAGIAN 4: UNIT 5 DIVISION - BOOK PAGE 57 (NO. 16 - 18) ========================
    {
      id: 'ihs-16',
      number: 16,
      section: 'Unit 5 Division • Exercise 2: Using Equal Groups to Divide',
      page: 'Book Page 57 • No. 1(a)',
      type: 'division_sentence',
      title: 'Interactive Grouping Game: Divide 24 Matches into Groups of 3',
      badge: 'Unit 5 • Book Page 57 • No. 1(a)',
      instruction: '1. Click on each bundle below to circle the groups! Then, write the division sentence.\n(a) Divide 24 matches into some groups. Each group has 3 matches.',
      visualConfig: {
        kind: 'click_to_circle_groups',
        totalItems: 24,
        itemsPerGroup: 3,
        groupCount: 8,
        itemEmoji: '🔥',
        itemSubText: 'Batang Korek',
        groupLabel: 'Kelompok Isi 3',
        accentColor: '#f59e0b'
      },
      divA: '24',
      divB: '3',
      divRes: '8',
      statementPrefix: 'There are',
      statementSuffix: 'groups.',
      statementAns: '8',
      answerKeySummary: '24 ÷ 3 = 8 | There are 8 groups.'
    },
    {
      id: 'ihs-17',
      number: 17,
      section: 'Unit 5 Division • Exercise 2: Using Equal Groups to Divide',
      page: 'Book Page 57 • No. 1(b)',
      type: 'division_sentence',
      title: 'Interactive Grouping Game: Put 18 Pears into Bags of 2',
      badge: 'Unit 5 • Book Page 57 • No. 1(b)',
      instruction: '1(b) Put 18 fresh green pears into some bags. Each bag has 2 pears. Click each pair of 2 pears below to circle/bag them!',
      visualConfig: {
        kind: 'click_to_circle_groups',
        totalItems: 18,
        itemsPerGroup: 2,
        groupCount: 9,
        itemEmoji: '🍐',
        itemSubText: 'Buah Pir',
        groupLabel: 'Kantong Isi 2',
        accentColor: '#10b981'
      },
      divA: '18',
      divB: '2',
      divRes: '9',
      statementPrefix: 'There are',
      statementSuffix: 'bags.',
      statementAns: '9',
      answerKeySummary: '18 ÷ 2 = 9 | There are 9 bags.'
    },
    {
      id: 'ihs-18',
      number: 18,
      section: 'Unit 5 Division • Exercise 2: Using Equal Groups to Divide',
      page: 'Book Page 57 • No. 1(c)',
      type: 'division_sentence',
      title: 'Interactive Grouping Game: Put 9 Packs of Chips into Boxes of 3',
      badge: 'Unit 5 • Book Page 57 • No. 1(c)',
      instruction: '1(c) Put 9 packs of potato chips into some boxes. Each box has 3 packs of chips. Click each set of 3 packs to circle them!',
      visualConfig: {
        kind: 'click_to_circle_groups',
        totalItems: 9,
        itemsPerGroup: 3,
        groupCount: 3,
        itemEmoji: '🍟',
        itemSubText: 'Bungkus Keripik',
        groupLabel: 'Kotak Isi 3',
        accentColor: '#ec4899'
      },
      divA: '9',
      divB: '3',
      divRes: '3',
      statementPrefix: 'There are',
      statementSuffix: 'boxes.',
      statementAns: '3',
      answerKeySummary: '9 ÷ 3 = 3 | There are 3 boxes.'
    },

    // ======================== BAGIAN 5: UNIT 5 DIVISION - BOOK PAGE 58 (NO. 19 - 20) ========================
    {
      id: 'ihs-19',
      number: 19,
      section: 'Unit 5 Division • Exercise 2: Using Equal Groups to Divide',
      page: 'Book Page 58 • No. 2(a)',
      type: 'division_sentence',
      title: 'Lake Adventure Game: 20 Tourists Boarding Boats (4 per Boat)',
      badge: 'Unit 5 • Book Page 58 • No. 2(a)',
      instruction: '2(a) 20 tourists get on the boats to go around the lake. Each boat can carry 4 tourists. Click each group of 4 tourists to board a boat! How many boats are needed?',
      visualConfig: {
        kind: 'click_to_circle_groups',
        totalItems: 20,
        itemsPerGroup: 4,
        groupCount: 5,
        itemEmoji: '🧑‍🌾',
        itemSubText: 'Turis Danau',
        groupLabel: '🚤 Perahu (Isi 4 Turis)',
        accentColor: '#06b6d4'
      },
      divA: '20',
      divB: '4',
      divRes: '5',
      statementPrefix: '',
      statementSuffix: 'boats are needed.',
      statementAns: '5',
      answerKeySummary: '20 ÷ 4 = 5 | 5 boats are needed.'
    },
    {
      id: 'ihs-20',
      number: 20,
      section: 'Unit 5 Division • Exercise 2: Using Equal Groups to Divide',
      page: 'Book Page 58 • No. 2(b)',
      type: 'division_sentence',
      title: 'Bakery Packing Game: Ivan\'s 30 Biscuits in Boxes of 5',
      badge: 'Unit 5 • Book Page 58 • No. 2(b)',
      instruction: '2(b) Ivan buys 30 chocolate biscuits. He puts 5 biscuits in each box. Click each group of 5 biscuits to pack them! How many boxes does Ivan use?',
      visualConfig: {
        kind: 'click_to_circle_groups',
        totalItems: 30,
        itemsPerGroup: 5,
        groupCount: 6,
        itemEmoji: '🍪',
        itemSubText: 'Biskuit Cokelat',
        groupLabel: '📦 Kotak Kue (Isi 5)',
        accentColor: '#d97706'
      },
      divA: '30',
      divB: '5',
      divRes: '6',
      statementPrefix: 'Ivan uses',
      statementSuffix: 'boxes.',
      statementAns: '6',
      answerKeySummary: '30 ÷ 5 = 6 | Ivan uses 6 boxes.'
    },

    // ======================== BAGIAN 6: UNIT 5 DIVISION - BOOK PAGE 59 (NO. 21 - 22) ========================
    {
      id: 'ihs-21',
      number: 21,
      section: 'Unit 5 Division • Exercise 3: Making Division Stories',
      page: 'Book Page 59 • No. 1',
      type: 'division_story_full',
      title: 'Making Division Stories: Sweet Cherries on Ceramic Plates',
      badge: 'Unit 5 • Book Page 59 • No. 1',
      instruction: 'Observe the interactive dining table below! Count the total cherries, the number of plates, and how many cherries are on each plate:',
      visualConfig: {
        kind: 'story_diorama_containers',
        totalItems: 12,
        groupCount: 4,
        itemsPerGroup: 3,
        itemEmoji: '🍒',
        containerName: 'Piring Keramik (Plate)',
        containerIcon: '🍽️',
        bannerTitle: ' Diorama Meja Makan: 4 Piring Berisi Ceri Merah Segar',
        accentColor: '#f43f5e'
      },
      line1Prefix: 'There are',
      line1Suffix: 'cherries altogether.',
      line1Expected: '12',
      line2Prefix: 'There are',
      line2Suffix: 'plates.',
      line2Expected: '4',
      divA: '12',
      divB: '4',
      divRes: '3',
      line3Prefix: 'There are',
      line3Suffix: 'cherries on each plate.',
      line3Expected: '3',
      answerKeySummary: '12 cherries altogether | 4 plates | 12 ÷ 4 = 3 | 3 cherries on each plate.'
    },
    {
      id: 'ihs-22',
      number: 22,
      section: 'Unit 5 Division • Exercise 3: Making Division Stories',
      page: 'Book Page 59 • No. 2',
      type: 'division_story_full',
      title: 'Making Division Stories: Park Bicycles & Spinning Wheels',
      badge: 'Unit 5 • Book Page 59 • No. 2',
      instruction: 'Observe the 5 bicycles parked at the city park below! Count the total wheels altogether, the number of bicycles, and the wheels on each bicycle:',
      visualConfig: {
        kind: 'story_diorama_bicycles',
        bicycleCount: 5,
        wheelsPerBike: 2,
        totalWheels: 10
      },
      line1Prefix: 'There are',
      line1Suffix: 'wheels altogether.',
      line1Expected: '10',
      line2Prefix: 'There are',
      line2Suffix: 'bicycles.',
      line2Expected: '5',
      divA: '10',
      divB: '5',
      divRes: '2',
      altDivB: '2',
      altDivRes: '5',
      line3Prefix: 'Each bicycle has',
      line3Suffix: 'wheels.',
      line3Expected: '2',
      answerKeySummary: '10 wheels altogether | 5 bicycles | 10 ÷ 5 = 2 | Each bicycle has 2 wheels.'
    },

    // ======================== BAGIAN 7: UNIT 5 DIVISION - BOOK PAGE 60 (NO. 23 - 25) ========================
    {
      id: 'ihs-23',
      number: 23,
      section: 'Unit 5 Division • Exercise 3: Making Division Stories',
      page: 'Book Page 60 • No. 3',
      type: 'division_story_full',
      title: 'Making Division Stories: Rainbow Crayon Boxes',
      badge: 'Unit 5 • Book Page 60 • No. 3',
      instruction: 'Observe the art studio shelves below! Each crayon box holds 10 colorful crayons. Complete the division story:',
      visualConfig: {
        kind: 'story_diorama_containers',
        totalItems: 40,
        groupCount: 4,
        itemsPerGroup: 10,
        itemEmoji: '🖍️',
        containerName: 'Kotak Krayon (Box of 10)',
        containerIcon: '🎨',
        bannerTitle: '🎨 Studio Gambar: 4 Kotak Krayon Pelangi (@ 10 Krayon per Kotak)',
        accentColor: '#a855f7'
      },
      line1Prefix: 'There are',
      line1Suffix: 'crayons altogether.',
      line1Expected: '40',
      line2Prefix: 'Each box has',
      line2Suffix: 'crayons.',
      line2Expected: '10',
      divA: '40',
      divB: '10',
      divRes: '4',
      altDivB: '4',
      altDivRes: '10',
      line3Prefix: 'There are',
      line3Suffix: 'boxes of crayons.',
      line3Expected: '4',
      answerKeySummary: '40 crayons altogether | Each box has 10 crayons | 40 ÷ 10 = 4 | 4 boxes of crayons.'
    },
    {
      id: 'ihs-24',
      number: 24,
      section: 'Unit 5 Division • Exercise 3: Making Division Stories',
      page: 'Book Page 60 • No. 4',
      type: 'division_story_full',
      title: 'Making Division Stories: Blooming Flowers in Garden Pots',
      badge: 'Unit 5 • Book Page 60 • No. 4',
      instruction: 'Observe the botanical garden display below! Count the total blooming flowers, the number of flower pots, and how many flowers bloom in each pot:',
      visualConfig: {
        kind: 'story_diorama_containers',
        totalItems: 30,
        groupCount: 6,
        itemsPerGroup: 5,
        itemEmoji: '🌸',
        containerName: 'Pot Bunga (Flower Pot)',
        containerIcon: '🪴',
        bannerTitle: '🪴 Taman Bunga Al-Hafidz: 6 Pot Berisi Masing-Masing 5 Bunga Mekar',
        accentColor: '#ec4899'
      },
      line1Prefix: 'There are',
      line1Suffix: 'flowers altogether.',
      line1Expected: '30',
      line2Prefix: 'There are an equal number of flowers in',
      line2Suffix: 'pots.',
      line2Expected: '6',
      divA: '30',
      divB: '6',
      divRes: '5',
      altDivB: '5',
      altDivRes: '6',
      line3Prefix: 'Each pot has',
      line3Suffix: 'flowers.',
      line3Expected: '5',
      answerKeySummary: '30 flowers altogether | in 6 pots | 30 ÷ 6 = 5 | Each pot has 5 flowers.'
    },
    {
      id: 'ihs-25',
      number: 25,
      section: 'Unit 5 Division • Exercise 3: Making Division Stories',
      page: 'Book Page 60 • No. 5',
      type: 'division_story_full',
      title: 'Making Division Stories: Farm Fresh Eggs in Cartons',
      badge: 'Unit 5 • Book Page 60 • No. 5',
      instruction: 'Observe the farm fresh egg cartons below! Count the total eggs, the number of eggs/cartons, and complete the division story:',
      visualConfig: {
        kind: 'story_diorama_containers',
        totalItems: 30,
        groupCount: 5,
        itemsPerGroup: 6,
        itemEmoji: '🥚',
        containerName: 'Karton Telur (Egg Carton)',
        containerIcon: '🧺',
        bannerTitle: '🥚 Peternakan Segar: 5 Karton Telur (@ 6 Butir Telur per Karton)',
        accentColor: '#eab308'
      },
      line1Prefix: 'There are',
      line1Suffix: 'eggs altogether.',
      line1Expected: '30',
      line2Prefix: 'The eggs are packed equally into',
      line2Suffix: 'cartons (6 eggs per carton).',
      line2Expected: '5',
      altLine2Expected: '6',
      divA: '30',
      divB: '6',
      divRes: '5',
      altDivB: '5',
      altDivRes: '6',
      line3Prefix: 'There are',
      line3Suffix: 'egg cartons.',
      line3Expected: '5',
      altLine3Expected: '6',
      answerKeySummary: '30 eggs altogether | 5 cartons (6 eggs each) | 30 ÷ 6 = 5 (or 30 ÷ 5 = 6) | 5 egg cartons.'
    },

    // ======================== BAGIAN 8: UNIT 5 DIVISION - BOOK PAGE 62 (NO. 26) ========================
    {
      id: 'ihs-26',
      number: 26,
      section: 'Unit 5 Division • Matching Fact Families',
      page: 'Book Page 62 • No. 3',
      type: 'matching_game',
      title: 'Boutique Clothesline Game: Match T-Shirts to Clothes Hangers',
      badge: 'Unit 5 • Book Page 62 • Connecting Lines',
      instruction: '3. Match the multiplication sentence on each colorful T-Shirt (left) to the related division sentence on the Clothes Hanger (right)! Click a T-Shirt, then click a Hanger to connect them with a glowing rope.',
      pairs: [
        { leftId: 't1', leftText: '9 × 3 = 27', rightId: 'h4', rightText: '27 ÷ 3 = 9', color: '#38bdf8', shirtColor: '#0284c7' },
        { leftId: 't2', leftText: '7 × 4 = 28', rightId: 'h5', rightText: '28 ÷ 4 = 7', color: '#10b981', shirtColor: '#059669' },
        { leftId: 't3', leftText: '4 × 5 = 20', rightId: 'h3', rightText: '20 ÷ 5 = 4', color: '#f59e0b', shirtColor: '#d97706' },
        { leftId: 't4', leftText: '10 × 2 = 20', rightId: 'h1', rightText: '20 ÷ 2 = 10', color: '#a855f7', shirtColor: '#7c3aed' },
        { leftId: 't5', leftText: '8 × 4 = 32', rightId: 'h2', rightText: '32 ÷ 4 = 8', color: '#f43f5e', shirtColor: '#e11d48' }
      ],
      shuffledRight: ['h1', 'h2', 'h3', 'h4', 'h5'],
      answerKeySummary: '(9×3=27 ↔ 27÷3=9), (7×4=28 ↔ 28÷4=7), (4×5=20 ↔ 20÷5=4), (10×2=20 ↔ 20÷2=10), (8×4=32 ↔ 32÷4=8)'
    },

    // ======================== BAGIAN 9: UNIT 6 - BOOK PAGE 75 (NO. 27) ========================
    {
      id: 'ihs-27',
      number: 27,
      section: 'Unit 6 Multiplication & Division Facts of 2, 5, and 10',
      page: 'Book Page 75 • What Do You Remember?',
      type: 'grid_100_page75',
      title: 'Interactive 1 to 100 Multiplication Explorer Board',
      badge: 'Unit 6 • Book Page 75 • Interactive Grid',
      instruction: 'Explore the interactive 1 to 100 number board below!\n• Use Tool 1 (⭕) to circle multiplication facts of 2.\n• Use Tool 2 (🟦) to colour blue multiplication facts of 5.\n• Use Tool 3 (✅) to tick multiplication facts of 10.\nThen answer the 3 questions below the board!',
      subPrompts: [
        {
          id: 'p75_q1',
          label: '1. What numbers are circled (⭕) and also coloured blue (🟦)? (Multiples of both 2 and 5)',
          placeholder: '10, 20, 30, 40, 50, 60, 70, 80, 90, 100',
          expectedNums: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100']
        },
        {
          id: 'p75_q2',
          label: '2. What numbers are circled (⭕) and also ticked (✅)? (Multiples of both 2 and 10)',
          placeholder: '10, 20, 30, 40, 50, 60, 70, 80, 90, 100',
          expectedNums: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100']
        },
        {
          id: 'p75_q3',
          label: '3. What numbers are coloured blue (🟦) and also ticked (✅)? (Multiples of both 5 and 10)',
          placeholder: '10, 20, 30, 40, 50, 60, 70, 80, 90, 100',
          expectedNums: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100']
        }
      ],
      answerKeySummary: 'All 3 questions have the answer: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100.'
    }
  ];

  // ==============================================================================
  // ENGINE VISUAL INTERAKTIF BUATAN SENDIRI (CUSTOM SVG & MANIPULATIVES)
  // ==============================================================================
  window.ihsVisualState = window.ihsVisualState || {
    frogIndex: 0,
    distributedIds: {},
    circledGroups: {},
    grid100Tool: 'circle2',
    grid100Marks: {} // num -> { c2: bool, b5: bool, t10: bool }
  };

  window.ihsJumpFrog = function(delta) {
    var st = window.ihsVisualState;
    var next = (st.frogIndex || 0) + delta;
    if (next < 0) next = 0;
    if (next > 5) next = 5;
    st.frogIndex = next;
    if (window.sfx && sfx.playClick) sfx.playClick();
    if (typeof window.renderIhsaniyahTest === 'function') window.renderIhsaniyahTest();
  };

  window.ihsSetFrogStone = function(idx) {
    window.ihsVisualState.frogIndex = idx;
    if (window.sfx && sfx.playClick) sfx.playClick();
    if (typeof window.renderIhsaniyahTest === 'function') window.renderIhsaniyahTest();
  };

  window.ihsToggleDistribute = function(qid) {
    var st = window.ihsVisualState;
    st.distributedIds[qid] = !st.distributedIds[qid];
    if (window.sfx && sfx.playSuccess) sfx.playSuccess();
    if (typeof window.renderIhsaniyahTest === 'function') window.renderIhsaniyahTest();
  };

  window.ihsToggleCircleGroup = function(qid, grpIdx, maxGroups) {
    var st = window.ihsVisualState;
    st.circledGroups[qid] = st.circledGroups[qid] || {};
    st.circledGroups[qid][grpIdx] = !st.circledGroups[qid][grpIdx];
    if (window.sfx && sfx.playClick) sfx.playClick();
    if (typeof window.renderIhsaniyahTest === 'function') window.renderIhsaniyahTest();
  };

  window.ihsCircleAllGroups = function(qid, maxGroups) {
    var st = window.ihsVisualState;
    st.circledGroups[qid] = {};
    for (var i = 0; i < maxGroups; i++) {
      st.circledGroups[qid][i] = true;
    }
    if (window.sfx && sfx.playSuccess) sfx.playSuccess();
    if (typeof window.renderIhsaniyahTest === 'function') window.renderIhsaniyahTest();
  };

  window.ihsSetGrid100Tool = function(toolName) {
    window.ihsVisualState.grid100Tool = toolName;
    if (window.sfx && sfx.playClick) sfx.playClick();
    if (typeof window.renderIhsaniyahTest === 'function') window.renderIhsaniyahTest();
  };

  window.ihsClickGrid100Cell = function(num) {
    var st = window.ihsVisualState;
    st.grid100Marks[num] = st.grid100Marks[num] || { c2: false, b5: false, t10: false };
    var tool = st.grid100Tool || 'circle2';
    if (tool === 'circle2') st.grid100Marks[num].c2 = !st.grid100Marks[num].c2;
    if (tool === 'blue5') st.grid100Marks[num].b5 = !st.grid100Marks[num].b5;
    if (tool === 'tick10') st.grid100Marks[num].t10 = !st.grid100Marks[num].t10;
    if (window.sfx && sfx.playClick) sfx.playClick();
    if (typeof window.renderIhsaniyahTest === 'function') window.renderIhsaniyahTest();
  };

  window.ihsAutoMarkGrid100 = function(mode) {
    var st = window.ihsVisualState;
    if (mode === 'reset') {
      st.grid100Marks = {};
    } else {
      for (var n = 1; n <= 100; n++) {
        st.grid100Marks[n] = st.grid100Marks[n] || { c2: false, b5: false, t10: false };
        if (mode === 'c2' && n % 2 === 0) st.grid100Marks[n].c2 = true;
        if (mode === 'b5' && n % 5 === 0) st.grid100Marks[n].b5 = true;
        if (mode === 't10' && n % 10 === 0) st.grid100Marks[n].t10 = true;
        if (mode === 'all') {
          if (n % 2 === 0) st.grid100Marks[n].c2 = true;
          if (n % 5 === 0) st.grid100Marks[n].b5 = true;
          if (n % 10 === 0) st.grid100Marks[n].t10 = true;
        }
      }
    }
    if (window.sfx && sfx.playSuccess) sfx.playSuccess();
    if (typeof window.renderIhsaniyahTest === 'function') window.renderIhsaniyahTest();
  };

  // Renderer Utama Visual Kustom Unik untuk Soal 1 - 25
  window.renderIhsaniyahCustomVisual = function(q) {
    if (!q || !q.visualConfig) return '';
    var vc = q.visualConfig;
    var st = window.ihsVisualState;

    // 1. NUMBER LINE JUMPS (No. 1)
    if (vc.kind === 'number_line_jumps') {
      var activeIdx = st.frogIndex || 0;
      var activeNum = vc.numbers[activeIdx];
      return `
        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.14), rgba(15, 23, 42, 0.95)); border: 2px solid #10b981; border-radius: 16px; padding: 18px; margin: 14px 0; box-shadow: 0 8px 22px rgba(0,0,0,0.25);">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 14px;">
            <span style="font-size: 0.85rem; font-weight: 800; color: #34d399;">
              🐸 Lintasan Batu Loncatan Angka (+10 Setiap Lompatan) — Klik Batu atau Tombol Lompat untuk Menguji!
            </span>
            <div style="display: flex; gap: 8px;">
              <button type="button" onclick="ihsJumpFrog(-1)" style="background: #f59e0b; color: #0f172a; border: none; border-radius: 8px; padding: 6px 12px; font-size: 0.78rem; font-weight: 900; cursor: pointer;">
                ⬅️ Lompat Mundur (-10)
              </button>
              <button type="button" onclick="ihsJumpFrog(1)" style="background: #10b981; color: #0f172a; border: none; border-radius: 8px; padding: 6px 12px; font-size: 0.78rem; font-weight: 900; cursor: pointer;">
                Lompat Maju (+10) ➡️
              </button>
            </div>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; gap: 6px; overflow-x: auto; padding: 18px 10px; background: rgba(15, 23, 42, 0.8); border-radius: 14px; border: 1px solid rgba(52, 211, 153, 0.3);">
            ${vc.numbers.map(function(num, idx) {
              var isFrogHere = (idx === activeIdx);
              return `
                <div style="display: flex; align-items: center; flex: 1; min-width: 82px;">
                  <div onclick="ihsSetFrogStone(${idx})" style="flex: 1; text-align: center; padding: 12px 8px; border-radius: 14px; cursor: pointer; transition: all 0.2s; background: ${isFrogHere ? 'linear-gradient(135deg, #10b981, #059669)' : 'rgba(30, 41, 59, 0.95)'}; border: 2.5px solid ${isFrogHere ? '#fde047' : '#38bdf8'}; box-shadow: ${isFrogHere ? '0 0 18px rgba(16, 185, 129, 0.6)' : 'none'};">
                    <div style="font-size: 1.3rem; height: 26px;">${isFrogHere ? '🐸' : '🪨'}</div>
                    <div style="font-size: 1.2rem; font-weight: 900; color: #ffffff; font-family: monospace; margin-top: 4px;">${num}</div>
                    <div style="font-size: 0.68rem; color: ${isFrogHere ? '#fef08a' : '#94a3b8'}; font-weight: 700;">Batu #${idx + 1}</div>
                  </div>
                  ${idx < vc.numbers.length - 1 ? `
                    <div style="display: flex; flex-direction: column; align-items: center; padding: 0 4px; color: #38bdf8; font-weight: 900; font-size: 0.75rem;">
                      <span>+10</span>
                      <span style="font-size: 1.1rem;">➔</span>
                    </div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>

          <div style="margin-top: 10px; font-size: 0.82rem; color: #cbd5e1; text-align: center;">
            📍 Posisi Katak Sekarang di <strong>${activeNum}</strong> • Maju 1 batu = <code>+10</code>, Maju 3 batu = <code>+30</code>, Mundur 2 batu = <code>–20</code>.
          </div>
        </div>
      `;
    }

    // 2. H-T-O MYSTERY ADDITION GRID (No. 2)
    if (vc.kind === 'hto_mystery_grid') {
      var renderCell = function(c) {
        if (c.isMystery) {
          return `<td style="width: 76px; height: 60px; text-align: center; font-size: 1.45rem; font-weight: 900; font-family: monospace; background: rgba(255,255,255,0.08); border: 2.5px dashed ${c.color}; color: ${c.color}; border-radius: 10px; box-shadow: inset 0 0 12px ${c.color}33;">[ ${c.val} ]</td>`;
        }
        return `<td style="width: 76px; height: 60px; text-align: center; font-size: 1.45rem; font-weight: 900; font-family: monospace; background: rgba(15, 23, 42, 0.9); border: 2px solid rgba(148, 163, 184, 0.35); color: #ffffff; border-radius: 10px;">${c.val}</td>`;
      };
      return `
        <div style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.12), rgba(15, 23, 42, 0.95)); border: 2px solid #38bdf8; border-radius: 16px; padding: 20px; margin: 14px 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 28px;">
          <div style="background: rgba(2, 6, 23, 0.75); padding: 18px 24px; border-radius: 16px; border: 2px solid rgba(56, 189, 248, 0.4);">
            <table style="border-collapse: separate; border-spacing: 8px;">
              <thead>
                <tr>
                  <th style="background: #7c3aed; color: #fff; padding: 6px 14px; border-radius: 8px; font-size: 0.85rem;">H (Ratusan)</th>
                  <th style="background: #0284c7; color: #fff; padding: 6px 14px; border-radius: 8px; font-size: 0.85rem;">T (Puluhan)</th>
                  <th style="background: #d97706; color: #fff; padding: 6px 14px; border-radius: 8px; font-size: 0.85rem;">O (Satuan)</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  ${vc.row1.map(renderCell).join('')}
                  <td></td>
                </tr>
                <tr>
                  ${vc.row2.map(renderCell).join('')}
                  <td style="font-size: 1.8rem; font-weight: 900; color: #4ade80; padding-left: 6px;">+</td>
                </tr>
                <tr>
                  <td colspan="4" style="border-bottom: 3px solid #38bdf8; height: 4px;"></td>
                </tr>
                <tr>
                  ${vc.row3.map(renderCell).join('')}
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style="max-width: 320px; background: rgba(15, 23, 42, 0.85); border-left: 4px solid #fbbf24; padding: 14px 16px; border-radius: 10px; font-size: 0.86rem; color: #e2e8f0; line-height: 1.55;">
            <div style="font-weight: 800; color: #fde047; margin-bottom: 6px;">🔍 Petunjuk Kolom Nilai Tempat:</div>
            <div>• <strong>Kolom O (Satuan):</strong> <code>7 + a = 9</code></div>
            <div>• <strong>Kolom T (Puluhan):</strong> <code>b + 2 = 6</code></div>
            <div>• <strong>Kolom H (Ratusan):</strong> <code>2 + 7 = c</code></div>
          </div>
        </div>
      `;
    }

    // 3. MAKING 10 SUBTRACTION DIAGRAM (No. 3: 462 - 8 = c)
    if (vc.kind === 'number_bond_making10_sub') {
      return `
        <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.14), rgba(15, 23, 42, 0.96)); border: 2px solid #a855f7; border-radius: 16px; padding: 20px; margin: 14px 0; text-align: center;">
          <div style="font-size: 0.84rem; font-weight: 800; color: #d8b4fe; margin-bottom: 12px;">
            🌳 Diagram Pohon Pengurangan Teknik "Making 10" (Memecah Puluhan):
          </div>
          <svg viewBox="0 0 560 230" style="max-width: 540px; width: 100%; height: auto; background: rgba(2, 6, 23, 0.65); border-radius: 14px; border: 1px solid rgba(168, 85, 247, 0.35);">
            <!-- Garis Cabang Pohon -->
            <line x1="170" y1="55" x2="105" y2="135" stroke="#38bdf8" stroke-width="3.5" />
            <line x1="190" y1="55" x2="255" y2="135" stroke="#f59e0b" stroke-width="3.5" />
            <!-- Garis 10 - 8 = a -->
            <path d="M 275 150 Q 335 150 355 100" fill="none" stroke="#10b981" stroke-width="3" stroke-dasharray="5,4" />
            <line x1="365" y1="105" x2="415" y2="150" stroke="#10b981" stroke-width="3.5" />

            <!-- Kotak Persamaan Utama: 462 - 8 = c -->
            <rect x="115" y="18" width="130" height="42" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
            <text x="180" y="45" fill="#ffffff" font-size="20" font-weight="900" font-family="monospace" text-anchor="middle">462</text>

            <text x="275" y="45" fill="#f87171" font-size="22" font-weight="900" font-family="monospace" text-anchor="middle">–</text>

            <rect x="305" y="18" width="65" height="42" rx="10" fill="#1e293b" stroke="#f87171" stroke-width="2.5"/>
            <text x="337" y="45" fill="#ffffff" font-size="20" font-weight="900" font-family="monospace" text-anchor="middle">8</text>

            <text x="395" y="45" fill="#38bdf8" font-size="22" font-weight="900" font-family="monospace" text-anchor="middle">=</text>

            <rect x="420" y="18" width="75" height="42" rx="10" fill="#064e3b" stroke="#10b981" stroke-width="2.5"/>
            <text x="457" y="45" fill="#4ade80" font-size="20" font-weight="900" font-family="monospace" text-anchor="middle">[ c ]</text>

            <!-- Cabang Kiri: b -->
            <circle cx="100" cy="155" r="32" fill="#1e1b4b" stroke="#38bdf8" stroke-width="3"/>
            <text x="100" y="162" fill="#38bdf8" font-size="20" font-weight="900" font-family="monospace" text-anchor="middle">[ b ]</text>

            <!-- Cabang Kanan: 10 -->
            <circle cx="260" cy="155" r="32" fill="#451a03" stroke="#f59e0b" stroke-width="3"/>
            <text x="260" y="162" fill="#fde047" font-size="20" font-weight="900" font-family="monospace" text-anchor="middle">10</text>

            <!-- Hasil 10 - 8 = a -->
            <circle cx="430" cy="160" r="30" fill="#064e3b" stroke="#10b981" stroke-width="3"/>
            <text x="430" y="167" fill="#4ade80" font-size="20" font-weight="900" font-family="monospace" text-anchor="middle">[ a ]</text>
            <text x="355" y="135" fill="#86efac" font-size="13" font-weight="800" text-anchor="middle">10 – 8 = a</text>

            <!-- Baris Bawah: b + a = c -->
            <rect x="145" y="196" width="270" height="28" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="1.5"/>
            <text x="280" y="215" fill="#e9d5ff" font-size="14" font-weight="800" font-family="monospace" text-anchor="middle">Langkah Akhir: b + a = c</text>
          </svg>
        </div>
      `;
    }

    // 4. YURI'S DETECTIVE CARD (No. 4: 527 - 158 = 431)
    if (vc.kind === 'yuri_detective_card') {
      return `
        <div style="background: linear-gradient(135deg, rgba(244, 63, 94, 0.12), rgba(15, 23, 42, 0.96)); border: 2px solid #f43f5e; border-radius: 16px; padding: 20px; margin: 14px 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 18px; align-items: center;">
          <!-- Catatan Yuri -->
          <div style="background: #fffbeb; color: #1e293b; padding: 16px 20px; border-radius: 14px; border: 3px dashed #f43f5e; text-align: center; box-shadow: 0 6px 16px rgba(0,0,0,0.2);">
            <div style="font-size: 0.78rem; font-weight: 900; color: #e11d48; text-transform: uppercase; margin-bottom: 8px;">
              📓 Buku Catatan Yuri (Perlu Diperiksa 🔍)
            </div>
            <div style="display: inline-block; font-family: monospace; font-size: 1.55rem; font-weight: 900; text-align: right; line-height: 1.4; padding: 8px 18px; background: #ffffff; border-radius: 10px; border: 1.5px solid #cbd5e1;">
              <div style="letter-spacing: 12px; color: #64748b; font-size: 0.9rem; border-bottom: 1px solid #e2e8f0; margin-bottom: 4px;">H T O</div>
              <div style="letter-spacing: 10px; color: #0f172a;">5 2 7</div>
              <div style="letter-spacing: 10px; color: #0f172a; border-bottom: 3px solid #0f172a;">1 5 8 –</div>
              <div style="letter-spacing: 10px; color: #e11d48;">4 3 1</div>
            </div>
            <div style="margin-top: 8px; font-size: 0.8rem; color: #b91c1c; font-weight: 700;">
              ⚠️ Mengapa hasil Yuri 431 kurang tepat?
            </div>
          </div>

          <!-- Papan Regrouping Pinjam Puluhan & Ratusan -->
          <div style="background: rgba(2, 6, 23, 0.75); padding: 16px 18px; border-radius: 14px; border: 1.5px solid rgba(56, 189, 248, 0.4); color: #e2e8f0; font-size: 0.85rem; line-height: 1.55;">
            <div style="font-weight: 800; color: #38bdf8; margin-bottom: 8px; font-size: 0.92rem;">
              🕵️‍♂️ Alat Bantu Analisis Pinjam (Regrouping):
            </div>
            <div style="margin-bottom: 6px;">1️⃣ <strong>Kolom O (Satuan):</strong> <code>7 – 8</code> tidak cukup! Pinjam 1 puluhan dari angka 2 menjadi <code>17 – 8 = ?</code></div>
            <div style="margin-bottom: 6px;">2️⃣ <strong>Kolom T (Puluhan):</strong> Angka 2 sisa <code>1</code>. Pinjam 1 ratusan dari angka 5 menjadi <code>11 – 5 = ?</code></div>
            <div>3️⃣ <strong>Kolom H (Ratusan):</strong> Angka 5 sisa <code>4</code>, lalu <code>4 – 1 = ?</code></div>
          </div>
        </div>
      `;
    }

    // 5. INCOMPLETE SUBTRACTION 500 - 14[?] = 3[?]4 (No. 5)
    if (vc.kind === 'hto_puzzle_500') {
      return `
        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.14), rgba(15, 23, 42, 0.96)); border: 2px solid #f59e0b; border-radius: 16px; padding: 20px; margin: 14px 0; text-align: center;">
          <div style="font-size: 0.85rem; font-weight: 800; color: #fde047; margin-bottom: 12px;">
            🧩 Teka-Teki Pengurangan Bersusun (Cari Angka di Dalam Kotak Biru & Hijau!):
          </div>
          <div style="display: inline-block; background: rgba(2, 6, 23, 0.85); padding: 16px 26px; border-radius: 16px; border: 2px solid rgba(245, 158, 11, 0.45);">
            <table style="border-collapse: separate; border-spacing: 8px; font-family: monospace; font-size: 1.45rem; font-weight: 900;">
              <thead>
                <tr>
                  <th style="background: #7c3aed; color: #fff; padding: 6px 14px; border-radius: 8px; font-size: 0.82rem;">H</th>
                  <th style="background: #0284c7; color: #fff; padding: 6px 14px; border-radius: 8px; font-size: 0.82rem;">T</th>
                  <th style="background: #d97706; color: #fff; padding: 6px 14px; border-radius: 8px; font-size: 0.82rem;">O</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="width: 64px; height: 54px; background: #1e293b; color: #fff; border-radius: 10px;">5</td>
                  <td style="width: 64px; height: 54px; background: #1e293b; color: #fff; border-radius: 10px;">0</td>
                  <td style="width: 64px; height: 54px; background: #1e293b; color: #fff; border-radius: 10px;">0</td>
                  <td></td>
                </tr>
                <tr>
                  <td style="width: 64px; height: 54px; background: #1e293b; color: #fff; border-radius: 10px;">1</td>
                  <td style="width: 64px; height: 54px; background: #1e293b; color: #fff; border-radius: 10px;">4</td>
                  <td style="width: 64px; height: 54px; background: rgba(56, 189, 248, 0.2); border: 2.5px dashed #38bdf8; color: #38bdf8; border-radius: 10px;">[ ? ]</td>
                  <td style="color: #f87171; font-size: 1.7rem; padding-left: 6px;">–</td>
                </tr>
                <tr>
                  <td colspan="4" style="border-bottom: 3px solid #fde047; height: 4px;"></td>
                </tr>
                <tr>
                  <td style="width: 64px; height: 54px; background: #1e293b; color: #fff; border-radius: 10px;">3</td>
                  <td style="width: 64px; height: 54px; background: rgba(16, 185, 129, 0.2); border: 2.5px dashed #10b981; color: #4ade80; border-radius: 10px;">[ ? ]</td>
                  <td style="width: 64px; height: 54px; background: #1e293b; color: #fff; border-radius: 10px;">4</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    // 6. NUMBER BOND 678 + 8 (No. 6)
    if (vc.kind === 'number_bond_678') {
      return `
        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.14), rgba(15, 23, 42, 0.96)); border: 2px solid #10b981; border-radius: 16px; padding: 18px; margin: 14px 0; text-align: center;">
          <svg viewBox="0 0 520 210" style="max-width: 500px; width: 100%; height: auto; background: rgba(2, 6, 23, 0.7); border-radius: 14px; border: 1px solid rgba(16, 185, 129, 0.35);">
            <line x1="175" y1="55" x2="115" y2="130" stroke="#38bdf8" stroke-width="3.5"/>
            <line x1="195" y1="55" x2="250" y2="130" stroke="#10b981" stroke-width="3.5"/>
            <line x1="340" y1="55" x2="275" y2="130" stroke="#10b981" stroke-width="3.5" stroke-dasharray="5,4"/>

            <rect x="130" y="18" width="110" height="42" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
            <text x="185" y="45" fill="#fff" font-size="22" font-weight="900" font-family="monospace" text-anchor="middle">678</text>

            <text x="275" y="45" fill="#4ade80" font-size="24" font-weight="900" text-anchor="middle">+</text>

            <rect x="310" y="18" width="70" height="42" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="2.5"/>
            <text x="345" y="45" fill="#fff" font-size="22" font-weight="900" font-family="monospace" text-anchor="middle">8</text>

            <circle cx="110" cy="150" r="32" fill="#0f172a" stroke="#38bdf8" stroke-width="3"/>
            <text x="110" y="157" fill="#38bdf8" font-size="19" font-weight="900" font-family="monospace" text-anchor="middle">676</text>

            <circle cx="255" cy="150" r="28" fill="#064e3b" stroke="#10b981" stroke-width="3"/>
            <text x="255" y="157" fill="#4ade80" font-size="19" font-weight="900" font-family="monospace" text-anchor="middle">2</text>

            <rect x="330" y="125" width="155" height="48" rx="12" fill="#064e3b" stroke="#fde047" stroke-width="2.5"/>
            <text x="407" y="146" fill="#fde047" font-size="13" font-weight="800" text-anchor="middle">Gabung Jadi 10:</text>
            <text x="407" y="165" fill="#ffffff" font-size="17" font-weight="900" font-family="monospace" text-anchor="middle">2 + 8 = 10</text>
          </svg>
        </div>
      `;
    }

    // 7. H-T-O WORKOUT CARD (No. 7: 297 + 358 & No. 9: 800 - 697)
    if (vc.kind === 'hto_workout_card') {
      return `
        <div style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.14), rgba(15, 23, 42, 0.96)); border: 2px solid #38bdf8; border-radius: 16px; padding: 20px; margin: 14px 0; text-align: center;">
          <div style="font-size: 0.86rem; font-weight: 800; color: #38bdf8; margin-bottom: 12px;">
            🧮 Papan Susun Nilai Tempat H-T-O (${vc.equationLabel}):
          </div>
          <div style="display: inline-block; background: rgba(2, 6, 23, 0.85); padding: 16px 28px; border-radius: 16px; border: 2px solid rgba(56, 189, 248, 0.4);">
            <table style="border-collapse: separate; border-spacing: 8px; font-family: monospace; font-size: 1.5rem; font-weight: 900;">
              <thead>
                <tr>
                  <th style="background: #7c3aed; color: #fff; padding: 6px 16px; border-radius: 8px; font-size: 0.85rem;">H (Hundreds)</th>
                  <th style="background: #0284c7; color: #fff; padding: 6px 16px; border-radius: 8px; font-size: 0.85rem;">T (Tens)</th>
                  <th style="background: #d97706; color: #fff; padding: 6px 16px; border-radius: 8px; font-size: 0.85rem;">O (Ones)</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="width: 72px; height: 54px; background: #1e293b; color: #fff; border-radius: 10px;">${vc.num1[0]}</td>
                  <td style="width: 72px; height: 54px; background: #1e293b; color: #fff; border-radius: 10px;">${vc.num1[1]}</td>
                  <td style="width: 72px; height: 54px; background: #1e293b; color: #fff; border-radius: 10px;">${vc.num1[2]}</td>
                  <td></td>
                </tr>
                <tr>
                  <td style="width: 72px; height: 54px; background: #1e293b; color: #fff; border-radius: 10px;">${vc.num2[0]}</td>
                  <td style="width: 72px; height: 54px; background: #1e293b; color: #fff; border-radius: 10px;">${vc.num2[1]}</td>
                  <td style="width: 72px; height: 54px; background: #1e293b; color: #fff; border-radius: 10px;">${vc.num2[2]}</td>
                  <td style="color: #4ade80; font-size: 1.8rem; padding-left: 8px;">${vc.op}</td>
                </tr>
                <tr>
                  <td colspan="4" style="border-bottom: 3px solid #38bdf8; height: 4px;"></td>
                </tr>
                <tr>
                  <td style="width: 72px; height: 54px; background: rgba(124, 58, 237, 0.2); border: 2px dashed #a855f7; color: #d8b4fe; border-radius: 10px;">[ H ]</td>
                  <td style="width: 72px; height: 54px; background: rgba(2, 132, 199, 0.2); border: 2px dashed #38bdf8; color: #7dd3fc; border-radius: 10px;">[ T ]</td>
                  <td style="width: 72px; height: 54px; background: rgba(217, 119, 6, 0.2); border: 2px dashed #f59e0b; color: #fde047; border-radius: 10px;">[ O ]</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    // 8. NUMBER BOND 597 + 98 (No. 8)
    if (vc.kind === 'number_bond_597') {
      return `
        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.14), rgba(15, 23, 42, 0.96)); border: 2px solid #f59e0b; border-radius: 16px; padding: 18px; margin: 14px 0; text-align: center;">
          <svg viewBox="0 0 520 210" style="max-width: 500px; width: 100%; height: auto; background: rgba(2, 6, 23, 0.7); border-radius: 14px; border: 1px solid rgba(245, 158, 11, 0.35);">
            <line x1="175" y1="55" x2="110" y2="130" stroke="#38bdf8" stroke-width="3.5"/>
            <line x1="195" y1="55" x2="255" y2="130" stroke="#f59e0b" stroke-width="3.5"/>
            <line x1="345" y1="55" x2="275" y2="130" stroke="#f59e0b" stroke-width="3.5" stroke-dasharray="5,4"/>

            <rect x="130" y="18" width="110" height="42" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
            <text x="185" y="45" fill="#fff" font-size="22" font-weight="900" font-family="monospace" text-anchor="middle">597</text>

            <text x="275" y="45" fill="#fde047" font-size="24" font-weight="900" text-anchor="middle">+</text>

            <rect x="305" y="18" width="80" height="42" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2.5"/>
            <text x="345" y="45" fill="#fff" font-size="22" font-weight="900" font-family="monospace" text-anchor="middle">98</text>

            <circle cx="105" cy="152" r="34" fill="#0f172a" stroke="#38bdf8" stroke-width="3" stroke-dasharray="5,3"/>
            <text x="105" y="158" fill="#38bdf8" font-size="17" font-weight="900" font-family="monospace" text-anchor="middle">[ ? ]</text>

            <circle cx="255" cy="152" r="30" fill="#451a03" stroke="#f59e0b" stroke-width="3" stroke-dasharray="5,3"/>
            <text x="255" y="158" fill="#fde047" font-size="17" font-weight="900" font-family="monospace" text-anchor="middle">[ ? ]</text>

            <rect x="325" y="125" width="165" height="50" rx="12" fill="#451a03" stroke="#fde047" stroke-width="2.5"/>
            <text x="407" y="146" fill="#fde047" font-size="12" font-weight="800" text-anchor="middle">Genapkan Jadi 100:</text>
            <text x="407" y="166" fill="#ffffff" font-size="16" font-weight="900" font-family="monospace" text-anchor="middle">[ ? ] + 98 = 100</text>
          </svg>
        </div>
      `;
    }

    // 9. NUMBER BOND 749 - 70 (No. 10)
    if (vc.kind === 'number_bond_749') {
      return `
        <div style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.14), rgba(15, 23, 42, 0.96)); border: 2px solid #38bdf8; border-radius: 16px; padding: 18px; margin: 14px 0; text-align: center;">
          <svg viewBox="0 0 520 210" style="max-width: 500px; width: 100%; height: auto; background: rgba(2, 6, 23, 0.7); border-radius: 14px; border: 1px solid rgba(56, 189, 248, 0.35);">
            <line x1="175" y1="55" x2="110" y2="130" stroke="#38bdf8" stroke-width="3.5"/>
            <line x1="195" y1="55" x2="255" y2="130" stroke="#10b981" stroke-width="3.5"/>
            <line x1="345" y1="55" x2="275" y2="130" stroke="#f43f5e" stroke-width="3.5" stroke-dasharray="5,4"/>

            <rect x="130" y="18" width="110" height="42" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
            <text x="185" y="45" fill="#fff" font-size="22" font-weight="900" font-family="monospace" text-anchor="middle">749</text>

            <text x="275" y="45" fill="#f87171" font-size="24" font-weight="900" text-anchor="middle">–</text>

            <rect x="305" y="18" width="80" height="42" rx="10" fill="#1e293b" stroke="#f43f5e" stroke-width="2.5"/>
            <text x="345" y="45" fill="#fff" font-size="22" font-weight="900" font-family="monospace" text-anchor="middle">70</text>

            <circle cx="105" cy="152" r="34" fill="#0f172a" stroke="#38bdf8" stroke-width="3" stroke-dasharray="5,3"/>
            <text x="105" y="158" fill="#38bdf8" font-size="17" font-weight="900" font-family="monospace" text-anchor="middle">[ ? ]</text>

            <circle cx="255" cy="152" r="32" fill="#064e3b" stroke="#10b981" stroke-width="3"/>
            <text x="255" y="158" fill="#4ade80" font-size="19" font-weight="900" font-family="monospace" text-anchor="middle">100</text>

            <rect x="325" y="125" width="165" height="50" rx="12" fill="#064e3b" stroke="#10b981" stroke-width="2.5"/>
            <text x="407" y="146" fill="#86efac" font-size="12" font-weight="800" text-anchor="middle">Kurangi dari 100:</text>
            <text x="407" y="166" fill="#ffffff" font-size="16" font-weight="900" font-family="monospace" text-anchor="middle">100 – 70 = [ ? ]</text>
          </svg>
        </div>
      `;
    }

    // 10. EQUAL SHARING CONTAINERS (No. 11, 12, 13 - Book Page 55)
    if (vc.kind === 'equal_sharing_containers' || vc.kind === 'story_diorama_containers') {
      var groupsHtml = '';
      for (var g = 0; g < vc.groupCount; g++) {
        var itemsHtml = '';
        for (var k = 0; k < vc.itemsPerGroup; k++) {
          itemsHtml += `
            <span style="display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; font-size: 1.4rem; background: rgba(255,255,255,0.08); border-radius: 10px; border: 1px solid rgba(255,255,255,0.14); box-shadow: 0 2px 6px rgba(0,0,0,0.2);">
              ${vc.itemEmoji}
            </span>
          `;
        }
        groupsHtml += `
          <div style="background: rgba(15, 23, 42, 0.9); border: 2.5px solid ${vc.accentColor}; border-radius: 16px; padding: 14px; text-align: center; box-shadow: 0 6px 16px rgba(0,0,0,0.25);">
            <div style="font-size: 0.8rem; font-weight: 800; color: ${vc.accentColor}; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; gap: 6px;">
              <span>${vc.containerIcon || '📦'}</span>
              <span>${vc.containerTitle || vc.containerName} #${g + 1}</span>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; padding: 8px; background: rgba(0,0,0,0.35); border-radius: 12px;">
              ${itemsHtml}
            </div>
            <div style="margin-top: 8px; font-size: 0.76rem; color: #cbd5e1; font-weight: 700;">
              Isi wadah ini: <strong>${vc.itemsPerGroup} ${vc.itemEmoji}</strong>
            </div>
          </div>
        `;
      }

      return `
        <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95)); border: 2px solid ${vc.accentColor}; border-radius: 16px; padding: 18px; margin: 14px 0;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 14px;">
            <span style="font-size: 0.88rem; font-weight: 800; color: #ffffff;">
              ${vc.bannerTitle || `✨ Visual Pembagian Merata: Total ${vc.totalItems} ${vc.itemEmoji} Dibagi Sama Rata ke ${vc.groupCount} ${vc.containerTitle}`}
            </span>
            <span style="font-size: 0.78rem; font-weight: 800; background: ${vc.accentColor}33; color: #fff; padding: 4px 12px; border-radius: 999px; border: 1px solid ${vc.accentColor};">
              Total: ${vc.totalItems} ${vc.itemEmoji} • ${vc.groupCount} Wadah
            </span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px;">
            ${groupsHtml}
          </div>
        </div>
      `;
    }

    // 11. INTERACTIVE DISTRIBUTOR (No. 14 & 15 - Book Page 56: Draw/Distribute onto Trays/Bowls)
    if (vc.kind === 'interactive_distributor') {
      var isDistributed = !!st.distributedIds[q.id];
      var topPoolHtml = '';
      for (var i = 0; i < vc.totalItems; i++) {
        topPoolHtml += `
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; font-size: 1.45rem; background: ${isDistributed ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.12)'}; opacity: ${isDistributed ? '0.35' : '1'}; border-radius: 10px; border: 1.5px solid ${vc.accentColor}; transition: all 0.3s;">
            ${vc.itemEmoji}
          </span>
        `;
      }

      var traysHtml = '';
      for (var t = 0; t < vc.groupCount; t++) {
        var trayItems = '';
        if (isDistributed) {
          for (var m = 0; m < vc.itemsPerGroup; m++) {
            trayItems += `<span style="font-size: 1.55rem; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));">${vc.itemEmoji}</span>`;
          }
        } else {
          trayItems = `<span style="font-size: 0.8rem; color: #94a3b8; font-style: italic;">Klik tombol "Bagikan" di atas untuk mengisi ${vc.containerTitle} #${t + 1}</span>`;
        }

        traysHtml += `
          <div onclick="ihsToggleDistribute('${q.id}')" style="cursor: pointer; background: rgba(15, 23, 42, 0.92); border: 2.5px ${isDistributed ? 'solid' : 'dashed'} ${vc.accentColor}; border-radius: 16px; padding: 14px; text-align: center; transition: all 0.25s; box-shadow: ${isDistributed ? '0 0 18px ' + vc.accentColor + '44' : 'none'};">
            <div style="font-size: 0.82rem; font-weight: 800; color: #fde047; margin-bottom: 8px;">
              ${vc.containerIcon} ${vc.containerTitle} #${t + 1}
            </div>
            <div style="min-height: 54px; display: flex; align-items: center; justify-content: center; gap: 8px; flex-wrap: wrap; background: rgba(0,0,0,0.35); border-radius: 12px; padding: 10px;">
              ${trayItems}
            </div>
            <div style="margin-top: 6px; font-size: 0.76rem; font-weight: 800; color: ${isDistributed ? '#4ade80' : '#94a3b8'};">
              ${isDistributed ? `✅ Terisi ${vc.itemsPerGroup} ${vc.itemEmoji}` : 'Belum Diisi'}
            </div>
          </div>
        `;
      }

      return `
        <div style="background: linear-gradient(135deg, rgba(249, 115, 22, 0.14), rgba(15, 23, 42, 0.96)); border: 2px solid ${vc.accentColor}; border-radius: 16px; padding: 18px; margin: 14px 0;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 12px;">
            <span style="font-size: 0.86rem; font-weight: 800; color: #fff;">
              🎮 Simulasi Membagi Benda Sama Rata (${vc.totalItems} ${vc.itemLabel} ➔ ${vc.groupCount} ${vc.containerTitle}):
            </span>
            <button type="button" onclick="ihsToggleDistribute('${q.id}')" style="background: linear-gradient(135deg, #10b981, #059669); color: #fff; border: none; border-radius: 10px; padding: 8px 16px; font-size: 0.82rem; font-weight: 900; cursor: pointer; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35);">
              ${isDistributed ? '🔄 Kembalikan ke Meja Awal' : vc.buttonLabel}
            </button>
          </div>

          <div style="display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 12px; margin-bottom: 14px;">
            ${topPoolHtml}
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 12px;">
            ${traysHtml}
          </div>
        </div>
      `;
    }

    // 12. CLICK TO CIRCLE EQUAL GROUPS (No. 16, 17, 18, 19, 20 - Book Pages 57 & 58)
    if (vc.kind === 'click_to_circle_groups') {
      var circledMap = (st.circledGroups && st.circledGroups[q.id]) || {};
      var circledCount = Object.keys(circledMap).filter(function(k) { return circledMap[k]; }).length;
      var groupCards = '';

      for (var gIdx = 0; gIdx < vc.groupCount; gIdx++) {
        var isCircled = !!circledMap[gIdx];
        var icons = '';
        for (var el = 0; el < vc.itemsPerGroup; el++) {
          icons += `<span style="font-size: 1.5rem;">${vc.itemEmoji}</span>`;
        }
        groupCards += `
          <div onclick="ihsToggleCircleGroup('${q.id}', ${gIdx}, ${vc.groupCount})"
               style="cursor: pointer; padding: 12px; border-radius: ${isCircled ? '999px' : '14px'}; background: ${isCircled ? 'rgba(16, 185, 129, 0.22)' : 'rgba(15, 23, 42, 0.9)'}; border: 3px ${isCircled ? 'solid #4ade80' : 'dashed rgba(148, 163, 184, 0.45)'}; text-align: center; transition: all 0.2s; box-shadow: ${isCircled ? '0 0 16px rgba(74, 222, 128, 0.4)' : 'none'};">
            <div style="display: flex; justify-content: center; gap: 6px; flex-wrap: wrap; margin-bottom: 4px;">
              ${icons}
            </div>
            <div style="font-size: 0.74rem; font-weight: 800; color: ${isCircled ? '#4ade80' : '#94a3b8'};">
              ${isCircled ? `⭕ Kelompok #${gIdx + 1} (${vc.itemsPerGroup})` : `Klik untuk Melingkari (${vc.itemsPerGroup})`}
            </div>
          </div>
        `;
      }

      return `
        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.12), rgba(15, 23, 42, 0.96)); border: 2px solid ${vc.accentColor}; border-radius: 16px; padding: 18px; margin: 14px 0;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 14px;">
            <div>
              <div style="font-size: 0.88rem; font-weight: 800; color: #fff;">
                ⭕ Permainan Lingkari Kelompok Sama Banyak (Total ${vc.totalItems} ${vc.itemEmoji}, Setiap Kelompok Isi ${vc.itemsPerGroup}):
              </div>
              <div style="font-size: 0.78rem; color: #cbd5e1;">
                Klik masing-masing kelompok berisi ${vc.itemsPerGroup} ${vc.itemEmoji} di bawah ini untuk melingkarinya dan hitung jumlah kelompoknya!
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 0.82rem; font-weight: 900; color: #4ade80; background: rgba(16, 185, 129, 0.18); padding: 6px 12px; border-radius: 999px; border: 1px solid #10b981;">
                Terlingkari: ${circledCount} / ${vc.groupCount} Kelompok
              </span>
              <button type="button" onclick="ihsCircleAllGroups('${q.id}', ${vc.groupCount})" style="background: #0284c7; color: #fff; border: none; border-radius: 8px; padding: 7px 12px; font-size: 0.76rem; font-weight: 800; cursor: pointer;">
                ⭕ Lingkari Semua
              </button>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(155px, 1fr)); gap: 12px;">
            ${groupCards}
          </div>
        </div>
      `;
    }

    // 13. BICYCLES & WHEELS DIORAMA (No. 22 - Book Page 59 No. 2)
    if (vc.kind === 'story_diorama_bicycles') {
      var bikesHtml = '';
      var bikeColors = ['#38bdf8', '#10b981', '#f59e0b', '#a855f7', '#f43f5e'];
      for (var b = 0; b < vc.bicycleCount; b++) {
        var col = bikeColors[b % bikeColors.length];
        var w1 = b * 2 + 1;
        var w2 = b * 2 + 2;
        bikesHtml += `
          <div style="background: rgba(15, 23, 42, 0.92); border: 2px solid ${col}; border-radius: 16px; padding: 12px; text-align: center;">
            <div style="font-size: 0.78rem; font-weight: 800; color: ${col}; margin-bottom: 6px;">
              🚲 Sepeda #${b + 1}
            </div>
            <div style="font-size: 2.4rem; line-height: 1.1; margin: 4px 0;">🚲</div>
            <div style="display: flex; justify-content: center; gap: 8px; margin-top: 8px;">
              <span style="font-size: 0.72rem; font-weight: 800; background: rgba(56, 189, 248, 0.2); color: #7dd3fc; padding: 3px 8px; border-radius: 999px; border: 1px solid #38bdf8;">⚙️ Roda #${w1}</span>
              <span style="font-size: 0.72rem; font-weight: 800; background: rgba(56, 189, 248, 0.2); color: #7dd3fc; padding: 3px 8px; border-radius: 999px; border: 1px solid #38bdf8;">⚙️ Roda #${w2}</span>
            </div>
          </div>
        `;
      }
      return `
        <div style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.14), rgba(15, 23, 42, 0.96)); border: 2px solid #38bdf8; border-radius: 16px; padding: 18px; margin: 14px 0;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
            <span style="font-size: 0.88rem; font-weight: 800; color: #fff;">
              🚲 Taman Sepeda: 5 Sepeda Parkir Berjejer (Masing-Masing Punya 2 Roda)
            </span>
            <span style="font-size: 0.78rem; font-weight: 800; color: #fde047; background: rgba(245, 158, 11, 0.15); padding: 4px 12px; border-radius: 999px;">
              Total: 5 Sepeda • 10 Roda
            </span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px;">
            ${bikesHtml}
          </div>
        </div>
      `;
    }

    return '';
  };

  // ==============================================================================
  // EVALUATOR TUNGGAL PER SOAL & AUTO-SAVE REALTIME KE PANEL GURU
  // ==============================================================================
  window.isIhsaniyahQuestionAnswered = function(q, ans) {
    if (!ans) return false;
    if (q.type === 'multi_select') {
      return Array.isArray(ans.selected) && ans.selected.length > 0;
    }
    if (q.type === 'true_false_table') {
      return ans.responses && Object.keys(ans.responses).length > 0;
    }
    if (q.type === 'multi_box_fill') {
      return ans.boxes && Object.values(ans.boxes).some(function(v) { return String(v || '').trim() !== ''; });
    }
    if (q.type === 'division_sentence') {
      return ans.div && Object.values(ans.div).some(function(v) { return String(v || '').trim() !== ''; });
    }
    if (q.type === 'division_story_full') {
      return ans.story && Object.values(ans.story).some(function(v) { return String(v || '').trim() !== ''; });
    }
    if (q.type === 'matching_game') {
      return ans.matchedPairs && Object.keys(ans.matchedPairs).length > 0;
    }
    if (q.type === 'grid_100_page75') {
      return ans.subAnswers && Object.values(ans.subAnswers).some(function(v) { return String(v || '').trim() !== ''; });
    }
    return false;
  };

  window.evaluateIhsaniyahQuestion = function(q, ans) {
    if (!ans) return false;

    if (q.type === 'multi_select') {
      var sel = Array.isArray(ans.selected) ? ans.selected : [];
      var correctKeys = q.options.filter(function(o) { return o.isCorrect; }).map(function(o) { return o.key; });
      if (sel.length !== correctKeys.length) return false;
      return correctKeys.every(function(k) { return sel.includes(k); });
    }

    if (q.type === 'true_false_table') {
      var resp = ans.responses || {};
      return q.statements.every(function(st) {
        return resp[st.id] === st.correctAnswer;
      });
    }

    if (q.type === 'multi_box_fill') {
      var bx = ans.boxes || {};
      return q.boxes.every(function(b) {
        var val = String(bx[b.id] || '').trim();
        return b.expected.includes(val);
      });
    }

    if (q.type === 'division_sentence') {
      var dv = ans.div || {};
      var aOk = String(dv.a || '').trim() === q.divA;
      var bOk = String(dv.b || '').trim() === q.divB;
      var rOk = String(dv.res || '').trim() === q.divRes;
      var sOk = String(dv.stmt || '').trim() === q.statementAns;
      return aOk && bOk && rOk && sOk;
    }

    if (q.type === 'division_story_full') {
      var st = ans.story || {};
      var l1Ok = String(st.l1 || '').trim() === q.line1Expected;
      var l2Val = String(st.l2 || '').trim();
      var l2Ok = (l2Val === q.line2Expected) || (q.altLine2Expected && l2Val === q.altLine2Expected);
      var l3Val = String(st.l3 || '').trim();
      var l3Ok = (l3Val === q.line3Expected) || (q.altLine3Expected && l3Val === q.altLine3Expected);

      var da = String(st.da || '').trim();
      var db = String(st.db || '').trim();
      var dr = String(st.dr || '').trim();
      var divOk = (da === q.divA && db === q.divB && dr === q.divRes) ||
                  (q.altDivB && da === q.divA && db === q.altDivB && dr === q.altDivRes);

      return l1Ok && l2Ok && l3Ok && divOk;
    }

    if (q.type === 'matching_game') {
      var mp = ans.matchedPairs || {};
      return q.pairs.every(function(p) {
        return mp[p.leftId] === p.rightId;
      });
    }

    if (q.type === 'grid_100_page75') {
      var sub = ans.subAnswers || {};
      return q.subPrompts.every(function(sp) {
        var raw = String(sub[sp.id] || '');
        var nums = raw.match(/\d+/g) || [];
        return sp.expectedNums.every(function(en) { return nums.includes(en); });
      });
    }

    return false;
  };

  // ==============================================================================
  // PENYIMPANAN IDENTITAS SISWA & REKAP NILAI GURU (LOCALSTORAGE)
  // ==============================================================================
  var STORAGE_KEY_RECORDS = 'ihsaniyah_student_records';
  var STORAGE_KEY_CURRENT_STUDENT = 'ihsaniyah_current_student';
  var STORAGE_KEY_CURRENT_ANSWERS = 'ihsaniyah_current_answers_v2';

  window.getIhsaniyahRecords = function() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY_RECORDS);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  };

  window.upsertIhsaniyahRecord = function(record) {
    try {
      var list = window.getIhsaniyahRecords();
      var key = record.sessionId || (record.studentName + '_' + record.studentClass + '_' + record.studentNumber);
      var existingIdx = list.findIndex(function(r) {
        var rKey = r.sessionId || (r.studentName + '_' + r.studentClass + '_' + r.studentNumber);
        return rKey === key;
      });
      if (existingIdx >= 0) {
        list[existingIdx] = Object.assign({}, list[existingIdx], record);
      } else {
        list.push(record);
      }
      localStorage.setItem(STORAGE_KEY_RECORDS, JSON.stringify(list));
    } catch (e) {
      console.error('Gagal menyimpan data siswa:', e);
    }
  };

  window.saveIhsaniyahRecord = function(record) {
    window.upsertIhsaniyahRecord(record);
  };

  window.clearIhsaniyahRecords = function() {
    localStorage.removeItem(STORAGE_KEY_RECORDS);
  };

  window.getIhsaniyahStudent = function() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY_CURRENT_STUDENT);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  };

  window.setIhsaniyahStudent = function(studentObj) {
    try {
      localStorage.setItem(STORAGE_KEY_CURRENT_STUDENT, JSON.stringify(studentObj));
    } catch (e) {}
  };

  window.getIhsaniyahStudentAnswersStore = function() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY_CURRENT_ANSWERS);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  };

  window.saveIhsaniyahStudentAnswersStore = function(answersObj) {
    try {
      localStorage.setItem(STORAGE_KEY_CURRENT_ANSWERS, JSON.stringify(answersObj || {}));
    } catch (e) {}
  };

  window.logoutIhsaniyahStudent = function() {
    localStorage.removeItem(STORAGE_KEY_CURRENT_STUDENT);
    localStorage.removeItem(STORAGE_KEY_CURRENT_ANSWERS);
  };

  window.exportIhsaniyahCSV = function() {
    var records = window.getIhsaniyahRecords();
    if (!records.length) {
      alert('Belum ada data nilai siswa yang tersimpan di Panel Guru.');
      return;
    }

    var headers = ['No', 'Tanggal', 'Waktu Update', 'Nama Siswa', 'Kelas', 'No Absen', 'Soal Dijawab', 'Jawaban Benar', 'Total Soal', 'Nilai Akhir (0-100)', 'Status'];
    var rows = records.map(function(r, idx) {
      return [
        idx + 1,
        '"' + (r.date || '-') + '"',
        '"' + (r.time || '-') + '"',
        '"' + (r.studentName || '-').replace(/"/g, '""') + '"',
        '"' + (r.studentClass || '-') + '"',
        '"' + (r.studentNumber || '-') + '"',
        r.answeredCount !== undefined ? r.answeredCount : (r.correctCount || 0),
        r.correctCount || 0,
        r.totalQuestions || 27,
        r.score || 0,
        '"' + (r.status || 'Sedang Mengerjakan') + '"'
      ].join(',');
    });

    var csvContent = '\uFEFF' + headers.join(',') + '\n' + rows.join('\n');
    var blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'Rekap_Nilai_Math_27_Soal_SD_Ihsaniyah_' + new Date().toISOString().slice(0, 10) + '.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

})();
