// ==============================================================================
// 🎒 YAYASAN PERGURUAN IHSANIYAH - SD IHSANIYAH GAJAHMADA TEGAL
// Kampus Al Hafidz • MATH FORMATIVE TEST 2 & CAMBRIDGE PRIMARY DIVISION
// 27 Soal Lengkap dengan Ilustrasi SVG Kustom & Manipulatif Interaktif Unik
// 100% Sesuai Buku Asli & 100% Tanpa Spoiler/Bocoran Jawaban!
// Auto-Save Realtime ke Panel Guru (Rekap)
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
  // TANPA BOCORAN JAWABAN DI PETUNJUK, LABEL, MAUPUN PLACEHOLDER!
  // ==============================================================================
  window.IHSANIYAH_QUESTIONS = [
    // ======================== BAGIAN 1: MATH FORMATIVE TEST 2 (NO. 1 - 10) ========================
    {
      id: 'ihs-1',
      number: 1,
      section: 'Math Formative Test 2 • Part I',
      page: 'Formative Test • Part I No. 1',
      type: 'multi_select',
      title: 'Part I — Question 1',
      badge: 'Part I • Multiple Check (✓)',
      instruction: 'I. Choose one or more correct answers by putting a check mark (✓) in the boxes next to A, B, or C!\nLook at these numbers! Based on the numbers below, the correct statement is ….',
      visualConfig: {
        kind: 'number_line_jumps',
        numbers: [237, 247, 257, 267, 277, 287]
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
      title: 'Part I — Question 2',
      badge: 'Part I • Multiple Check (✓)',
      instruction: 'Look at the operation below!\nThe correct values to complete the grid boxes below are indicated by ….',
      visualConfig: {
        kind: 'hto_mystery_grid',
        op: '+',
        row1: [
          { val: '2', isMystery: false },
          { val: 'b', isMystery: true, key: 'b', color: '#f43f5e' },
          { val: '7', isMystery: false }
        ],
        row2: [
          { val: '7', isMystery: false },
          { val: '2', isMystery: false },
          { val: 'a', isMystery: true, key: 'a', color: '#38bdf8' }
        ],
        row3: [
          { val: 'c', isMystery: true, key: 'c', color: '#10b981' },
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
      title: 'Part II — Question 3',
      badge: 'Part II • True or False (✓)',
      instruction: 'II. Put a check mark (✓) in the "True" column if the statement is true, or in the "False" column if the statement is false!\nLook at the subtraction diagram below:',
      visualConfig: {
        kind: 'number_bond_making10_sub'
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
      type: 'multi_box_fill',
      title: 'Part II — Question 4',
      badge: 'Part II • Check & Correct Work',
      instruction: 'Yuri is subtracting numbers. Her work is shown below.\nNow, you need to see her job and write the correct calculation in the H T O box below:',
      visualConfig: {
        kind: 'yuri_detective_card'
      },
      boxes: [
        { id: 'b4_h', label: 'Column H (Hundreds):', placeholder: '...', expected: ['3'] },
        { id: 'b4_t', label: 'Column T (Tens):', placeholder: '...', expected: ['6'] },
        { id: 'b4_o', label: 'Column O (Ones):', placeholder: '...', expected: ['9'] },
        { id: 'b4_total', label: '527 – 158 = ….', placeholder: '...', expected: ['369'] }
      ],
      answerKeySummary: '527 – 158 = 369 (H = 3, T = 6, O = 9)'
    },
    {
      id: 'ihs-5',
      number: 5,
      section: 'Math Formative Test 2 • Part III',
      page: 'Formative Test • Part III No. 5',
      type: 'multi_box_fill',
      title: 'Part III — Question 5',
      badge: 'Part III • Fill in the Blank',
      instruction: 'III. Fill the blank with the correct answer!\nLook at the incomplete vertical subtraction below:',
      visualConfig: {
        kind: 'hto_puzzle_500'
      },
      boxes: [
        { id: 'b5_1', label: 'Missing digit in Row 2, Column O (Ones):', placeholder: '...', expected: ['6'] },
        { id: 'b5_2', label: 'Missing digit in Row 3, Column T (Tens):', placeholder: '...', expected: ['5'] }
      ],
      answerKeySummary: 'Row 2 Ones = 6 (146), Row 3 Tens = 5 (354). Because 500 – 146 = 354.'
    },
    {
      id: 'ihs-6',
      number: 6,
      section: 'Math Formative Test 2 • Part III',
      page: 'Formative Test • Part III No. 6',
      type: 'multi_box_fill',
      title: 'Part III — Question 6',
      badge: 'Part III • Fill in the Blank',
      instruction: 'Look at the incomplete operation below!\nComplete the missing numbers in the blanks:',
      visualConfig: {
        kind: 'number_bond_678'
      },
      boxes: [
        { id: 'b6_1', label: '676 + 10 = ….', placeholder: '...', expected: ['686'] },
        { id: 'b6_2', label: 'So, 678 + 8 = ….', placeholder: '...', expected: ['686', '688'] }
      ],
      answerKeySummary: '676 + 10 = 686; So 678 + 8 = 686.'
    },
    {
      id: 'ihs-7',
      number: 7,
      section: 'Math Formative Test 2 • Part IV',
      page: 'Formative Test • Part IV No. 7',
      type: 'multi_box_fill',
      title: 'Part IV — Question 7',
      badge: 'Part IV • Essay / Workout',
      instruction: 'IV. Answer the following question correctly!\n297 + 358 = ….',
      visualConfig: {
        kind: 'hto_workout_card',
        op: '+',
        num1: ['2', '9', '7'],
        num2: ['3', '5', '8'],
        equationLabel: '297 + 358 = ….'
      },
      boxes: [
        { id: 'b7_h', label: 'Column H (Hundreds):', placeholder: '...', expected: ['6'] },
        { id: 'b7_t', label: 'Column T (Tens):', placeholder: '...', expected: ['5'] },
        { id: 'b7_o', label: 'Column O (Ones):', placeholder: '...', expected: ['5'] },
        { id: 'b7_total', label: '297 + 358 = ….', placeholder: '...', expected: ['655'] }
      ],
      answerKeySummary: '297 + 358 = 655 (H = 6, T = 5, O = 5)'
    },
    {
      id: 'ihs-8',
      number: 8,
      section: 'Math Formative Test 2 • Part IV',
      page: 'Formative Test • Part IV No. 8',
      type: 'multi_box_fill',
      title: 'Part IV — Question 8',
      badge: 'Part IV • Essay / Number Bond',
      instruction: 'Complete the addition diagram below!\n597 + 98 = ….',
      visualConfig: {
        kind: 'number_bond_597'
      },
      boxes: [
        { id: 'b8_left', label: 'Circle ① (Left branch):', placeholder: '...', expected: ['595', '569'] },
        { id: 'b8_right', label: 'Circle ② (Right branch):', placeholder: '...', expected: ['2'] },
        { id: 'b8_sum', label: '597 + 98 = ….', placeholder: '...', expected: ['695', '625'] }
      ],
      answerKeySummary: '597 splits into 595 and 2; 2 + 98 = 100; 595 + 100 = 695.'
    },
    {
      id: 'ihs-9',
      number: 9,
      section: 'Math Formative Test 2 • Part IV',
      page: 'Formative Test • Part IV No. 9',
      type: 'multi_box_fill',
      title: 'Part IV — Question 9',
      badge: 'Part IV • Essay / Workout',
      instruction: 'Answer the following question correctly!\n800 – 697 = ….',
      visualConfig: {
        kind: 'hto_workout_card',
        op: '–',
        num1: ['8', '0', '0'],
        num2: ['6', '9', '7'],
        equationLabel: '800 – 697 = ….'
      },
      boxes: [
        { id: 'b9_h', label: 'Column H (Hundreds):', placeholder: '...', expected: ['1'] },
        { id: 'b9_t', label: 'Column T (Tens):', placeholder: '...', expected: ['0'] },
        { id: 'b9_o', label: 'Column O (Ones):', placeholder: '...', expected: ['3'] },
        { id: 'b9_total', label: '800 – 697 = ….', placeholder: '...', expected: ['103'] }
      ],
      answerKeySummary: '800 – 697 = 103 (H = 1, T = 0, O = 3)'
    },
    {
      id: 'ihs-10',
      number: 10,
      section: 'Math Formative Test 2 • Part IV',
      page: 'Formative Test • Part IV No. 10',
      type: 'multi_box_fill',
      title: 'Part IV — Question 10',
      badge: 'Part IV • Essay / Number Bond',
      instruction: 'Complete the subtraction diagram below!\n749 – 70 = ….',
      visualConfig: {
        kind: 'number_bond_749'
      },
      boxes: [
        { id: 'b10_left', label: 'Circle ① (Left branch):', placeholder: '...', expected: ['649'] },
        { id: 'b10_rem', label: 'Circle ② (Result of 100 – 70):', placeholder: '...', expected: ['30'] },
        { id: 'b10_total', label: '749 – 70 = ….', placeholder: '...', expected: ['679'] }
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
      title: 'Book Page 55 — No. 1(a)',
      badge: 'Unit 5 • Book Page 55 • No. 1(a)',
      instruction: '1. Find the number of objects in each group. Then, write the division sentences.\n(a) Divide 16 keys equally into 2 bundles.',
      visualConfig: {
        kind: 'svg_key_bundles',
        bundles: 2,
        keysPerBundle: 8
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
      title: 'Book Page 55 — No. 1(b)',
      badge: 'Unit 5 • Book Page 55 • No. 1(b)',
      instruction: '1(b) Divide 18 mice equally into 3 groups.',
      visualConfig: {
        kind: 'svg_animal_trays',
        animalType: 'mouse',
        groupCount: 3,
        itemsPerGroup: 6,
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
      title: 'Book Page 55 — No. 1(c)',
      badge: 'Unit 5 • Book Page 55 • No. 1(c)',
      instruction: '1(c) Divide 25 chicks equally into 5 groups.',
      visualConfig: {
        kind: 'svg_animal_trays',
        animalType: 'chick',
        groupCount: 5,
        itemsPerGroup: 5,
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
      title: 'Book Page 56 — No. 2(a)',
      badge: 'Unit 5 • Book Page 56 • No. 2(a)',
      instruction: '2. Draw / place the objects to solve the division stories below. Then, write the division sentences.\n(a) Siska has 12 glasses. She puts the glasses equally onto 4 trays.',
      visualConfig: {
        kind: 'manual_tray_distributor',
        itemType: 'glass',
        totalItems: 12,
        groupCount: 4,
        containerName: 'Tray',
        accentColor: '#38bdf8'
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
      title: 'Book Page 56 — No. 2(b)',
      badge: 'Unit 5 • Book Page 56 • No. 2(b)',
      instruction: '2(b) There are 15 rambutans. Ida puts the rambutans equally into 3 bowls.',
      visualConfig: {
        kind: 'manual_tray_distributor',
        itemType: 'rambutan',
        totalItems: 15,
        groupCount: 3,
        containerName: 'Bowl',
        accentColor: '#f43f5e'
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
      title: 'Book Page 57 — No. 1(a)',
      badge: 'Unit 5 • Book Page 57 • No. 1(a)',
      instruction: '1. Circle on the pictures to divide. Then, write the division sentences.\n(a) Divide 24 matches into some groups. Each group has 3 matches.',
      visualConfig: {
        kind: 'svg_equal_grouping',
        itemType: 'matchstick',
        totalItems: 24,
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
      title: 'Book Page 57 — No. 1(b)',
      badge: 'Unit 5 • Book Page 57 • No. 1(b)',
      instruction: '1(b) Put 18 pears into some bags. Each bag has 2 pears.',
      visualConfig: {
        kind: 'svg_equal_grouping',
        itemType: 'pear',
        totalItems: 18,
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
      title: 'Book Page 57 — No. 1(c)',
      badge: 'Unit 5 • Book Page 57 • No. 1(c)',
      instruction: '1(c) Put 9 packs of chips into some boxes. Each box has 3 packs of chips.',
      visualConfig: {
        kind: 'svg_equal_grouping',
        itemType: 'chips',
        totalItems: 9,
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
      title: 'Book Page 58 — No. 2(a)',
      badge: 'Unit 5 • Book Page 58 • No. 2(a)',
      instruction: '2. Circle on the pictures to divide. Then, write the division sentences.\n(a) 20 tourists get on the boats to go around the lake. Each boat can carry 4 tourists. How many boats are needed?',
      visualConfig: {
        kind: 'svg_equal_grouping',
        itemType: 'tourist_lake',
        totalItems: 20,
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
      title: 'Book Page 58 — No. 2(b)',
      badge: 'Unit 5 • Book Page 58 • No. 2(b)',
      instruction: '2(b) Ivan buys 30 biscuits. He puts 5 biscuits in each box. How many boxes does Ivan use?',
      visualConfig: {
        kind: 'svg_equal_grouping',
        itemType: 'biscuit',
        totalItems: 30,
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
      title: 'Book Page 59 — No. 1',
      badge: 'Unit 5 • Book Page 59 • No. 1',
      instruction: 'Complete the division stories based on the picture below:',
      visualConfig: {
        kind: 'svg_story_cherries',
        plates: 4,
        cherriesPerPlate: 3
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
      title: 'Book Page 59 — No. 2',
      badge: 'Unit 5 • Book Page 59 • No. 2',
      instruction: 'Complete the division stories based on the picture below:',
      visualConfig: {
        kind: 'story_diorama_bicycles',
        bicycleCount: 5
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
      title: 'Book Page 60 — No. 3',
      badge: 'Unit 5 • Book Page 60 • No. 3',
      instruction: 'Complete the division stories based on the picture below:',
      visualConfig: {
        kind: 'svg_story_crayon_boxes',
        boxes: 4,
        crayonsPerBox: 10
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
      title: 'Book Page 60 — No. 4',
      badge: 'Unit 5 • Book Page 60 • No. 4',
      instruction: 'Complete the division stories based on the picture below:',
      visualConfig: {
        kind: 'svg_story_flower_pots',
        pots: 6,
        flowersPerPot: 5
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
      title: 'Book Page 60 — No. 5',
      badge: 'Unit 5 • Book Page 60 • No. 5',
      instruction: 'Complete the division stories based on the picture below:',
      visualConfig: {
        kind: 'svg_story_egg_cartons',
        cartons: 5,
        eggsPerCarton: 6
      },
      line1Prefix: 'There are',
      line1Suffix: 'eggs altogether.',
      line1Expected: '30',
      line2Prefix: 'The eggs are packed equally into',
      line2Suffix: 'cartons.',
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
      title: 'Book Page 62 — No. 3',
      badge: 'Unit 5 • Book Page 62 • Connecting Lines',
      instruction: '3. Match the multiplication sentence on the T-Shirt (left) to the related division sentence on the Clothes Hanger (right)!',
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
      title: 'Book Page 75 — What Do You Remember?',
      badge: 'Unit 6 • Book Page 75 • Table 1 to 100',
      instruction: 'Look at the table of numbers 1 to 100 below:\n• Circle (⭕) the numbers that are multiplication facts of 2.\n• Colour blue (🟦) the numbers that are multiplication facts of 5.\n• Tick (✓) the numbers that are multiplication facts of 10.\nThen answer the 3 questions below the table:',
      subPrompts: [
        {
          id: 'p75_q1',
          label: '1. What numbers are circled and also coloured blue?',
          placeholder: 'Ketik jawabanmu di sini...',
          expectedNums: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100']
        },
        {
          id: 'p75_q2',
          label: '2. What numbers are circled and also ticked (✓)?',
          placeholder: 'Ketik jawabanmu di sini...',
          expectedNums: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100']
        },
        {
          id: 'p75_q3',
          label: '3. What numbers are coloured blue and also ticked (✓)?',
          placeholder: 'Ketik jawabanmu di sini...',
          expectedNums: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100']
        }
      ],
      answerKeySummary: 'All 3 questions have the answer: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100.'
    }
  ];

  // ==============================================================================
  // STATE & INTERAKSI VISUAL KUSTOM (100% TANPA BOCORAN JAWABAN!)
  // ==============================================================================
  window.ihsVisualState = window.ihsVisualState || {
    frogStartIdx: 0,
    frogEndIdx: 0,
    q2Trial: { a: '?', b: '?', c: '?' },
    yuriBorrowTens: false,
    yuriBorrowHundreds: false,
    carryMarks: {},        // qid -> { h: bool, t: bool }
    countedItems: {},      // qid -> { itemKey: orderNumber }
    trayCounts: {},        // qid -> [countTray0, countTray1, ...]
    itemMarks: {},         // qid -> { itemIdx: colorIndex }
    activeMarkerColor: 0,
    grid100Tool: 'circle2',
    grid100Marks: {}       // num -> { c2: bool, b5: bool, t10: bool }
  };

  var MARKER_COLORS = ['#38bdf8', '#10b981', '#f59e0b', '#a855f7', '#f43f5e', '#ec4899', '#eab308', '#06b6d4', '#84cc16'];

  // Handler No. 1: Katak Lompat Garis Bilangan Interaktif
  window.ihsSetFrogStart = function(idx) {
    var st = window.ihsVisualState;
    st.frogStartIdx = idx;
    st.frogEndIdx = idx;
    if (window.sfx && sfx.playClick) sfx.playClick();
    if (typeof window.renderIhsaniyahTest === 'function') window.renderIhsaniyahTest();
  };

  window.ihsStepFrog = function(delta, maxLen) {
    var st = window.ihsVisualState;
    var next = (st.frogEndIdx || 0) + delta;
    if (next >= 0 && next < maxLen) {
      st.frogEndIdx = next;
      if (window.sfx && sfx.playClick) sfx.playClick();
      if (typeof window.renderIhsaniyahTest === 'function') window.renderIhsaniyahTest();
    }
  };

  window.ihsClickFrogStone = function(idx) {
    var st = window.ihsVisualState;
    st.frogEndIdx = idx;
    if (window.sfx && sfx.playClick) sfx.playClick();
    if (typeof window.renderIhsaniyahTest === 'function') window.renderIhsaniyahTest();
  };

  window.ihsResetFrog = function() {
    var st = window.ihsVisualState;
    st.frogStartIdx = 0;
    st.frogEndIdx = 0;
    if (window.sfx && sfx.playClick) sfx.playClick();
    if (typeof window.renderIhsaniyahTest === 'function') window.renderIhsaniyahTest();
  };

  // Handler No. 2: Roda Uji Angka Misteri a, b, c
  window.ihsCycleQ2Trial = function(key, delta) {
    var st = window.ihsVisualState;
    st.q2Trial = st.q2Trial || { a: '?', b: '?', c: '?' };
    var cur = st.q2Trial[key];
    var num = (cur === '?' || isNaN(parseInt(cur, 10))) ? (delta > 0 ? 0 : 9) : (parseInt(cur, 10) + delta + 10) % 10;
    st.q2Trial[key] = String(num);
    if (window.sfx && sfx.playClick) sfx.playClick();
    if (typeof window.renderIhsaniyahTest === 'function') window.renderIhsaniyahTest();
  };

  window.ihsResetQ2Trial = function() {
    window.ihsVisualState.q2Trial = { a: '?', b: '?', c: '?' };
    if (window.sfx && sfx.playClick) sfx.playClick();
    if (typeof window.renderIhsaniyahTest === 'function') window.renderIhsaniyahTest();
  };

  // Handler No. 7 & 9: Tombol Coretan Simpanan / Pinjaman (Carry / Borrow)
  window.ihsToggleCarryMark = function(qid, colKey) {
    var st = window.ihsVisualState;
    st.carryMarks[qid] = st.carryMarks[qid] || {};
    st.carryMarks[qid][colKey] = !st.carryMarks[qid][colKey];
    if (window.sfx && sfx.playClick) sfx.playClick();
    if (typeof window.renderIhsaniyahTest === 'function') window.renderIhsaniyahTest();
  };

  // Handler Hitung Objek Satu per Satu dengan Klik (No. 11-13 & No. 21-25)
  window.ihsToggleCountItem = function(qid, itemKey) {
    var st = window.ihsVisualState;
    st.countedItems[qid] = st.countedItems[qid] || {};
    var map = st.countedItems[qid];
    if (map[itemKey]) {
      delete map[itemKey];
      // Rapikan ulang urutan angka hitung
      var keys = Object.keys(map).sort(function(a, b) { return map[a] - map[b]; });
      keys.forEach(function(k, i) { map[k] = i + 1; });
    } else {
      var currentCount = Object.keys(map).length;
      map[itemKey] = currentCount + 1;
    }
    if (window.sfx && sfx.playClick) sfx.playClick();
    if (typeof window.renderIhsaniyahTest === 'function') window.renderIhsaniyahTest();
  };

  window.ihsResetCountItems = function(qid) {
    window.ihsVisualState.countedItems[qid] = {};
    if (window.sfx && sfx.playClick) sfx.playClick();
    if (typeof window.renderIhsaniyahTest === 'function') window.renderIhsaniyahTest();
  };

  // Handler No. 14 & 15: Distribusi Gelas ke Nampan / Rambutan ke Mangkuk
  window.ihsAddToTray = function(qid, trayIdx, totalItems, groupCount) {
    var st = window.ihsVisualState;
    if (!st.trayCounts[qid]) {
      st.trayCounts[qid] = new Array(groupCount).fill(0);
    }
    var used = st.trayCounts[qid].reduce(function(a, b) { return a + b; }, 0);
    if (used < totalItems) {
      st.trayCounts[qid][trayIdx]++;
      if (window.sfx && sfx.playClick) sfx.playClick();
      if (typeof window.renderIhsaniyahTest === 'function') window.renderIhsaniyahTest();
    }
  };

  window.ihsDistributeNextItem = function(qid, totalItems, groupCount) {
    var st = window.ihsVisualState;
    if (!st.trayCounts[qid]) {
      st.trayCounts[qid] = new Array(groupCount).fill(0);
    }
    var used = st.trayCounts[qid].reduce(function(a, b) { return a + b; }, 0);
    if (used < totalItems) {
      // Taruh ke wadah yang isinya paling sedikit (merata berurutan)
      var minTrayIdx = 0;
      for (var i = 1; i < groupCount; i++) {
        if (st.trayCounts[qid][i] < st.trayCounts[qid][minTrayIdx]) {
          minTrayIdx = i;
        }
      }
      st.trayCounts[qid][minTrayIdx]++;
      if (window.sfx && sfx.playClick) sfx.playClick();
      if (typeof window.renderIhsaniyahTest === 'function') window.renderIhsaniyahTest();
    }
  };

  window.ihsRemoveFromTray = function(e, qid, trayIdx) {
    if (e) e.stopPropagation();
    var st = window.ihsVisualState;
    if (st.trayCounts[qid] && st.trayCounts[qid][trayIdx] > 0) {
      st.trayCounts[qid][trayIdx]--;
      if (window.sfx && sfx.playClick) sfx.playClick();
      if (typeof window.renderIhsaniyahTest === 'function') window.renderIhsaniyahTest();
    }
  };

  window.ihsResetTrays = function(qid, groupCount) {
    window.ihsVisualState.trayCounts[qid] = new Array(groupCount).fill(0);
    if (window.sfx && sfx.playClick) sfx.playClick();
    if (typeof window.renderIhsaniyahTest === 'function') window.renderIhsaniyahTest();
  };

  // Handler No. 16 - 20: Melingkari Kelompok (Circle on the pictures to divide)
  window.ihsSetMarkerColor = function(colIdx) {
    window.ihsVisualState.activeMarkerColor = colIdx;
    if (window.sfx && sfx.playClick) sfx.playClick();
    if (typeof window.renderIhsaniyahTest === 'function') window.renderIhsaniyahTest();
  };

  window.ihsToggleItemMark = function(qid, itemIdx) {
    var st = window.ihsVisualState;
    st.itemMarks[qid] = st.itemMarks[qid] || {};
    var cur = st.itemMarks[qid][itemIdx];
    var activeCol = st.activeMarkerColor || 0;
    if (cur === activeCol) {
      delete st.itemMarks[qid][itemIdx];
    } else {
      st.itemMarks[qid][itemIdx] = activeCol;
    }
    if (window.sfx && sfx.playClick) sfx.playClick();
    if (typeof window.renderIhsaniyahTest === 'function') window.renderIhsaniyahTest();
  };

  window.ihsResetItemMarks = function(qid) {
    window.ihsVisualState.itemMarks[qid] = {};
    if (window.sfx && sfx.playClick) sfx.playClick();
    if (typeof window.renderIhsaniyahTest === 'function') window.renderIhsaniyahTest();
  };

  // Handler No. 27: Papan 1 - 100
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
    }
    if (window.sfx && sfx.playClick) sfx.playClick();
    if (typeof window.renderIhsaniyahTest === 'function') window.renderIhsaniyahTest();
  };

  // ==============================================================================
  // HELPER PENGGAMBAR OBJEK SVG VEKTOR KUSTOM (Gelas, Rambutan, Korek Api, Pir, Keripik, Turis, Biskuit, Tikus, Anak Ayam)
  // ==============================================================================
  function drawCustomItemSVG(type, index) {
    if (type === 'glass') {
      return `
        <svg viewBox="0 0 44 58" style="width: 34px; height: 46px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.35));">
          <polygon points="8,6 36,6 31,52 13,52" fill="rgba(56, 189, 248, 0.25)" stroke="#bae6fd" stroke-width="2.5" stroke-linejoin="round"/>
          <polygon points="10,20 34,20 30,50 14,50" fill="rgba(251, 146, 60, 0.78)"/>
          <ellipse cx="22" cy="6" rx="14" ry="3.5" fill="rgba(224, 242, 254, 0.45)" stroke="#ffffff" stroke-width="2"/>
          <line x1="15" y1="12" x2="17" y2="44" stroke="rgba(255,255,255,0.65)" stroke-width="2" stroke-linecap="round"/>
        </svg>
      `;
    }
    if (type === 'rambutan') {
      return `
        <svg viewBox="0 0 54 54" style="width: 38px; height: 38px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.35));">
          <!-- Rambut Duri Hijau-Merah Khas Buah Rambutan -->
          <g stroke="#fb7185" stroke-width="2.2" stroke-linecap="round">
            <line x1="27" y1="4" x2="27" y2="12"/><line x1="27" y1="42" x2="27" y2="50"/>
            <line x1="4" y1="27" x2="12" y2="27"/><line x1="42" y1="27" x2="50" y2="27"/>
            <line x1="10" y1="10" x2="17" y2="17"/><line x1="37" y1="37" x2="44" y2="44"/>
            <line x1="44" y1="10" x2="37" y2="17"/><line x1="17" y1="37" x2="10" y2="44"/>
            <line x1="18" y1="6" x2="21" y2="13"/><line x1="36" y1="6" x2="33" y2="13"/>
            <line x1="6" y1="18" x2="13" y2="21"/><line x1="48" y1="18" x2="41" y2="21"/>
            <line x1="6" y1="36" x2="13" y2="33"/><line x1="48" y1="36" x2="41" y2="33"/>
            <line x1="18" y1="48" x2="21" y2="41"/><line x1="36" y1="48" x2="33" y2="41"/>
          </g>
          <ellipse cx="27" cy="27" rx="14" ry="12.5" fill="#e11d48" stroke="#be123c" stroke-width="2"/>
          <ellipse cx="23" cy="23" rx="5" ry="3.5" fill="#fda4af" opacity="0.6"/>
        </svg>
      `;
    }
    if (type === 'matchstick') {
      return `
        <svg viewBox="0 0 48 48" style="width: 38px; height: 38px;">
          <line x1="10" y1="40" x2="35" y2="13" stroke="#fde68a" stroke-width="5" stroke-linecap="round"/>
          <line x1="10" y1="40" x2="35" y2="13" stroke="#d97706" stroke-width="1.5" stroke-linecap="round"/>
          <ellipse cx="37" cy="11" rx="5.5" ry="4" transform="rotate(-45 37 11)" fill="#dc2626" stroke="#7f1d1d" stroke-width="1.5"/>
          <circle cx="36" cy="10" r="1.5" fill="#fca5a5"/>
        </svg>
      `;
    }
    if (type === 'pear') {
      return `
        <svg viewBox="0 0 48 54" style="width: 38px; height: 42px;">
          <path d="M24 10 C24 5, 28 3, 30 3" fill="none" stroke="#78350f" stroke-width="2.8" stroke-linecap="round"/>
          <path d="M25 8 C31 5, 36 8, 32 12 C28 14, 25 11, 25 8 Z" fill="#15803d"/>
          <path d="M24 11 C18 11, 16 18, 14 24 C10 31, 11 45, 24 46 C37 45, 38 31, 34 24 C32 18, 30 11, 24 11 Z" fill="#84cc16" stroke="#3f6212" stroke-width="2"/>
          <ellipse cx="19" cy="32" rx="3.5" ry="6" fill="#bef264" opacity="0.65"/>
        </svg>
      `;
    }
    if (type === 'chips') {
      return `
        <svg viewBox="0 0 56 64" style="width: 44px; height: 50px;">
          <!-- Kemasan Keripik "Chips" bergerigi seperti di Buku Hal 57 -->
          <path d="M10 8 L15 11 L20 8 L25 11 L30 8 L35 11 L40 8 L46 11 L43 54 L38 57 L33 54 L28 57 L23 54 L18 57 L13 54 L8 57 Z" fill="#f43f5e" stroke="#ffffff" stroke-width="2" stroke-linejoin="round"/>
          <rect x="11" y="20" width="32" height="20" rx="5" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
          <text x="27" y="34" fill="#be123c" font-size="10" font-weight="900" font-family="sans-serif" text-anchor="middle">Chips</text>
          <circle cx="34" cy="46" r="4.5" fill="#fde047" stroke="#ca8a04" stroke-width="1.2"/>
        </svg>
      `;
    }
    if (type === 'tourist_lake') {
      var shirtCols = ['#38bdf8', '#f43f5e', '#10b981', '#f59e0b', '#a855f7'];
      var sCol = shirtCols[(index || 0) % shirtCols.length];
      return `
        <svg viewBox="0 0 44 60" style="width: 36px; height: 48px;">
          <!-- Topi & Kepala Turis -->
          <path d="M12 13 Q22 5 32 13 Z" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
          <circle cx="22" cy="18" r="6.5" fill="#fed7aa" stroke="#9a3412" stroke-width="1.5"/>
          <!-- Badan & Tas Ransel -->
          <rect x="14" y="25" width="16" height="17" rx="4" fill="${sCol}" stroke="#ffffff" stroke-width="1.5"/>
          <!-- Kaki -->
          <line x1="18" y1="42" x2="18" y2="55" stroke="#cbd5e1" stroke-width="3.5" stroke-linecap="round"/>
          <line x1="26" y1="42" x2="26" y2="55" stroke="#cbd5e1" stroke-width="3.5" stroke-linecap="round"/>
        </svg>
      `;
    }
    if (type === 'biscuit') {
      var bKind = (index || 0) % 5;
      if (bKind === 0) {
        // Biskuit Kotak Cracker
        return `
          <svg viewBox="0 0 48 48" style="width: 38px; height: 38px;">
            <rect x="6" y="6" width="36" height="36" rx="5" fill="#f59e0b" stroke="#92400e" stroke-width="2.2"/>
            <circle cx="16" cy="16" r="2" fill="#78350f"/><circle cx="24" cy="16" r="2" fill="#78350f"/><circle cx="32" cy="16" r="2" fill="#78350f"/>
            <circle cx="16" cy="24" r="2" fill="#78350f"/><circle cx="24" cy="24" r="2" fill="#78350f"/><circle cx="32" cy="24" r="2" fill="#78350f"/>
            <circle cx="16" cy="32" r="2" fill="#78350f"/><circle cx="24" cy="32" r="2" fill="#78350f"/><circle cx="32" cy="32" r="2" fill="#78350f"/>
          </svg>
        `;
      }
      if (bKind === 1 || bKind === 2) {
        // Biskuit Bundar Cincin
        return `
          <svg viewBox="0 0 48 48" style="width: 38px; height: 38px;">
            <circle cx="24" cy="24" r="18" fill="#fbbf24" stroke="#92400e" stroke-width="2.2"/>
            <circle cx="24" cy="24" r="7" fill="#1e293b" stroke="#92400e" stroke-width="1.8"/>
            <circle cx="24" cy="11" r="1.5" fill="#78350f"/><circle cx="24" cy="37" r="1.5" fill="#78350f"/>
            <circle cx="11" cy="24" r="1.5" fill="#78350f"/><circle cx="37" cy="24" r="1.5" fill="#78350f"/>
          </svg>
        `;
      }
      if (bKind === 3) {
        // Biskuit Persegi Panjang
        return `
          <svg viewBox="0 0 48 48" style="width: 38px; height: 38px;">
            <rect x="11" y="5" width="26" height="38" rx="4" fill="#fcd34d" stroke="#92400e" stroke-width="2.2"/>
            <circle cx="19" cy="13" r="1.8" fill="#78350f"/><circle cx="29" cy="13" r="1.8" fill="#78350f"/>
            <circle cx="19" cy="24" r="1.8" fill="#78350f"/><circle cx="29" cy="24" r="1.8" fill="#78350f"/>
            <circle cx="19" cy="35" r="1.8" fill="#78350f"/><circle cx="29" cy="35" r="1.8" fill="#78350f"/>
          </svg>
        `;
      }
      // Biskuit Bunga Bergerigi
      return `
        <svg viewBox="0 0 48 48" style="width: 38px; height: 38px;">
          <circle cx="24" cy="24" r="17" fill="#d97706" stroke="#fef08a" stroke-width="2.5" stroke-dasharray="6,3"/>
          <circle cx="24" cy="24" r="10" fill="#fde68a" stroke="#92400e" stroke-width="1.5"/>
          <circle cx="24" cy="24" r="3" fill="#b45309"/>
        </svg>
      `;
    }
    return '';
  }

  // ==============================================================================
  // RENDERER UTAMA VISUAL KUSTOM UNIK (100% TANPA BOCORAN JAWABAN!)
  // ==============================================================================
  window.renderIhsaniyahCustomVisual = function(q) {
    if (!q || !q.visualConfig) return '';
    var vc = q.visualConfig;
    var st = window.ihsVisualState;

    // -------------------------------------------------------------------------
    // 1. INTERACTIVE FROG STEPPING STONES (No. 1 — Tanpa Bocoran Jawaban!)
    // -------------------------------------------------------------------------
    if (vc.kind === 'number_line_jumps') {
      var nums = vc.numbers || [237, 247, 257, 267, 277, 287];
      var sIdx = (st.frogStartIdx !== undefined) ? st.frogStartIdx : 0;
      var eIdx = (st.frogEndIdx !== undefined) ? st.frogEndIdx : 0;
      var startNum = nums[sIdx];
      var endNum = nums[eIdx];
      var diffVal = endNum - startNum;
      var diffLabel = diffVal === 0 ? '0 (Belum Melompat)' : (diffVal > 0 ? '+' + diffVal : String(diffVal));

      // Koordinat X tiap batu teratai pada SVG (viewBox 660 x 195)
      var xs = [65, 171, 277, 383, 489, 595];
      var hopsSvg = '';

      if (sIdx !== eIdx) {
        var stepDir = eIdx > sIdx ? 1 : -1;
        for (var k = sIdx; k !== eIdx; k += stepDir) {
          var x1 = xs[k];
          var x2 = xs[k + stepDir];
          var midX = (x1 + x2) / 2;
          var arcColor = stepDir > 0 ? '#fde047' : '#f43f5e';
          var stepText = stepDir > 0 ? '+10' : '–10';
          hopsSvg += `
            <path d="M ${x1} 112 Q ${midX} 42 ${x2} 112" fill="none" stroke="${arcColor}" stroke-width="4" stroke-dasharray="6,4"/>
            <circle cx="${x2}" cy="112" r="5" fill="${arcColor}"/>
            <rect x="${midX - 22}" y="52" width="44" height="22" rx="6" fill="#0f172a" stroke="${arcColor}" stroke-width="1.8"/>
            <text x="${midX}" y="67" fill="${arcColor}" font-size="12" font-weight="900" font-family="monospace" text-anchor="middle">${stepText}</text>
          `;
        }
      }

      var stonesSvg = nums.map(function(n, idx) {
        var cx = xs[idx];
        var isStart = (idx === sIdx);
        var isEnd = (idx === eIdx);
        var padFill = isEnd ? '#10b981' : (isStart ? '#0284c7' : '#1e293b');
        var padStroke = isEnd ? '#fde047' : (isStart ? '#38bdf8' : '#475569');

        return `
          <g style="cursor: pointer;" onclick="ihsClickFrogStone(${idx})">
            <!-- Daun Teratai / Batu Pijakan -->
            <ellipse cx="${cx}" cy="138" rx="44" ry="20" fill="rgba(16, 185, 129, 0.18)" stroke="rgba(52, 211, 153, 0.35)" stroke-width="2"/>
            <rect x="${cx - 38}" y="114" width="76" height="40" rx="12" fill="${padFill}" stroke="${padStroke}" stroke-width="3"/>
            <text x="${cx}" y="140" fill="#ffffff" font-size="19" font-weight="900" font-family="monospace" text-anchor="middle">${n}</text>
            ${isStart && sIdx !== eIdx ? `<text x="${cx}" y="176" fill="#38bdf8" font-size="11" font-weight="800" text-anchor="middle">AWAL</text>` : ''}
            ${isEnd ? `
              <!-- Maskot Katak di Atas Batu Tujuan -->
              <g transform="translate(${cx - 18}, 74)">
                <ellipse cx="18" cy="22" rx="14" ry="10" fill="#22c55e" stroke="#14532d" stroke-width="2"/>
                <circle cx="11" cy="12" r="5" fill="#22c55e" stroke="#14532d" stroke-width="1.5"/>
                <circle cx="25" cy="12" r="5" fill="#22c55e" stroke="#14532d" stroke-width="1.5"/>
                <circle cx="11" cy="12" r="2.2" fill="#0f172a"/>
                <circle cx="25" cy="12" r="2.2" fill="#0f172a"/>
                <path d="M 12 24 Q 18 29 24 24" fill="none" stroke="#14532d" stroke-width="2" stroke-linecap="round"/>
              </g>
            ` : ''}
          </g>
        `;
      }).join('');

      return `
        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.16), rgba(15, 23, 42, 0.96)); border: 2px solid #10b981; border-radius: 18px; padding: 18px; margin: 14px 0;">
          <!-- Header Kontrol Simulator Lompatan Katak -->
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 12px;">
            <div>
              <div style="font-size: 0.9rem; font-weight: 800; color: #4ade80;">
                🐸 Simulator Garis Bilangan Batu Lompatan (Interactive Number Line)
              </div>
              <div style="font-size: 0.78rem; color: #cbd5e1;">
                Pilih <strong>Titik Awal</strong>, lalu klik batu tujuan atau tombol <strong>Lompat –10 / +10</strong> untuk menguji pernyataan A, B, dan C!
              </div>
            </div>
            <div style="display: flex; gap: 6px; align-items: center; flex-wrap: wrap;">
              <button type="button" onclick="ihsStepFrog(-1, ${nums.length})" style="background: rgba(244, 63, 94, 0.2); color: #fda4af; border: 1.5px solid #f43f5e; border-radius: 8px; padding: 6px 12px; font-size: 0.78rem; font-weight: 800; cursor: pointer;">
                ⏪ Lompat Mundur (–10)
              </button>
              <button type="button" onclick="ihsStepFrog(1, ${nums.length})" style="background: rgba(16, 185, 129, 0.25); color: #86efac; border: 1.5px solid #10b981; border-radius: 8px; padding: 6px 12px; font-size: 0.78rem; font-weight: 800; cursor: pointer;">
                Lompat Maju (+10) ⏩
              </button>
              <button type="button" onclick="ihsResetFrog()" style="background: rgba(148, 163, 184, 0.2); color: #e2e8f0; border: 1px solid rgba(148,163,184,0.4); border-radius: 8px; padding: 6px 10px; font-size: 0.75rem; font-weight: 700; cursor: pointer;">
                🔄 Reset
              </button>
            </div>
          </div>

          <!-- Pilihan Cepat Batu Awal -->
          <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap; margin-bottom: 10px; padding: 8px 12px; background: rgba(2, 6, 23, 0.65); border-radius: 10px;">
            <span style="font-size: 0.76rem; font-weight: 800; color: #38bdf8;">📍 Mulai Lompat dari Angka:</span>
            ${nums.map(function(n, idx) {
              var active = (idx === sIdx);
              return `<button type="button" onclick="ihsSetFrogStart(${idx})" style="padding: 4px 10px; border-radius: 6px; font-family: monospace; font-size: 0.82rem; font-weight: 900; cursor: pointer; background: ${active ? '#0284c7' : 'rgba(30,41,59,0.9)'}; color: #fff; border: 1.5px solid ${active ? '#fde047' : 'rgba(148,163,184,0.3)'};">${n}</button>`;
            }).join('')}
            <span style="margin-left: auto; font-size: 0.8rem; font-weight: 800; color: #fde047; font-family: monospace;">
              Posisi: ${startNum} ➔ ${endNum} (${diffLabel})
            </span>
          </div>

          <!-- Kanvas SVG Sungai & Batu Teratai -->
          <svg viewBox="0 0 660 190" style="width: 100%; height: auto; background: linear-gradient(180deg, #091526 0%, #0c2d48 100%); border-radius: 14px; border: 1.5px solid rgba(56, 189, 248, 0.35); display: block;">
            <!-- Garis Penghubung Antar Batu -->
            <line x1="65" y1="134" x2="595" y2="134" stroke="rgba(56, 189, 248, 0.35)" stroke-width="5" stroke-dasharray="8,6"/>
            ${hopsSvg}
            ${stonesSvg}
          </svg>
        </div>
      `;
    }

    // -------------------------------------------------------------------------
    // 2. H-T-O MYSTERY ADDITION SAFE (No. 2 — Dengan Roda Uji Coba Angka a, b, c!)
    // -------------------------------------------------------------------------
    if (vc.kind === 'hto_mystery_grid') {
      var trial = st.q2Trial || { a: '?', b: '?', c: '?' };
      var renderCell = function(c) {
        if (c.isMystery) {
          var tVal = trial[c.key] || '?';
          var displayStr = (tVal !== '?') ? `${c.val}=${tVal}` : c.val;
          return `
            <td style="width: 86px; height: 64px; text-align: center; background: rgba(255,255,255,0.08); border: 2.5px dashed ${c.color}; color: ${c.color}; border-radius: 12px; position: relative;">
              <div style="font-size: 1.4rem; font-weight: 900; font-family: monospace;">${displayStr}</div>
              <div style="font-size: 0.65rem; color: #cbd5e1; font-weight: 700;">Kotak ${c.val}</div>
            </td>
          `;
        }
        return `<td style="width: 86px; height: 64px; text-align: center; font-size: 1.55rem; font-weight: 900; font-family: monospace; background: rgba(15, 23, 42, 0.92); border: 2px solid rgba(148, 163, 184, 0.35); color: #ffffff; border-radius: 12px;">${c.val}</td>`;
      };

      return `
        <div style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.14), rgba(15, 23, 42, 0.96)); border: 2px solid #38bdf8; border-radius: 18px; padding: 20px; margin: 14px 0;">
          <div style="display: flex; flex-wrap: wrap; gap: 24px; justify-content: center; align-items: center;">
            <!-- Tabel H-T-O Utama -->
            <div style="background: rgba(2, 6, 23, 0.82); padding: 18px 24px; border-radius: 16px; border: 2px solid rgba(56, 189, 248, 0.4);">
              <table style="border-collapse: separate; border-spacing: 8px;">
                <thead>
                  <tr>
                    <th style="background: #7c3aed; color: #fff; padding: 6px 14px; border-radius: 8px; font-size: 0.85rem;">H (Hundreds)</th>
                    <th style="background: #0284c7; color: #fff; padding: 6px 14px; border-radius: 8px; font-size: 0.85rem;">T (Tens)</th>
                    <th style="background: #d97706; color: #fff; padding: 6px 14px; border-radius: 8px; font-size: 0.85rem;">O (Ones)</th>
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
                    <td style="font-size: 1.9rem; font-weight: 900; color: #4ade80; padding-left: 6px;">+</td>
                  </tr>
                  <tr>
                    <td colspan="4" style="border-bottom: 3.5px solid #38bdf8; height: 4px;"></td>
                  </tr>
                  <tr>
                    ${vc.row3.map(renderCell).join('')}
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Alat Coretan / Roda Uji Angka Misteri a, b, c -->
            <div style="background: rgba(15, 23, 42, 0.9); border: 1.5px solid rgba(255,255,255,0.15); border-radius: 16px; padding: 16px 20px; max-width: 310px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span style="font-size: 0.82rem; font-weight: 800; color: #fde047;">🔢 Alat Uji Coba Angka (a, b, c)</span>
                <button type="button" onclick="ihsResetQ2Trial()" style="background: rgba(148,163,184,0.2); color: #cbd5e1; border: none; border-radius: 6px; padding: 3px 8px; font-size: 0.72rem; cursor: pointer;">Reset</button>
              </div>
              <p style="font-size: 0.76rem; color: #94a3b8; margin: 0 0 12px; line-height: 1.4;">
                Putar angka 0–9 di bawah untuk menguji nilai <strong>a</strong>, <strong>b</strong>, dan <strong>c</strong> pada tabel di samping:
              </p>
              <div style="display: flex; gap: 10px; justify-content: space-between;">
                ${[
                  { k: 'a', col: '#38bdf8', lbl: 'Kotak a' },
                  { k: 'b', col: '#f43f5e', lbl: 'Kotak b' },
                  { k: 'c', col: '#10b981', lbl: 'Kotak c' }
                ].map(function(item) {
                  return `
                    <div style="flex: 1; text-align: center; background: rgba(0,0,0,0.35); padding: 8px 6px; border-radius: 10px; border: 1.5px solid ${item.col};">
                      <div style="font-size: 0.74rem; font-weight: 800; color: ${item.col}; margin-bottom: 4px;">${item.lbl}</div>
                      <button type="button" onclick="ihsCycleQ2Trial('${item.k}', 1)" style="width: 100%; background: rgba(255,255,255,0.08); color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 0.75rem;">▲</button>
                      <div style="font-size: 1.3rem; font-weight: 900; font-family: monospace; color: #fff; margin: 4px 0;">${trial[item.k]}</div>
                      <button type="button" onclick="ihsCycleQ2Trial('${item.k}', -1)" style="width: 100%; background: rgba(255,255,255,0.08); color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 0.75rem;">▼</button>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // -------------------------------------------------------------------------
    // 3. MAKING 10 SUBTRACTION DIAGRAM (No. 3: 462 - 8, dengan Kapsul Miring & b + a = c!)
    // -------------------------------------------------------------------------
    if (vc.kind === 'number_bond_making10_sub') {
      return `
        <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(15, 23, 42, 0.96)); border: 2px solid #a855f7; border-radius: 18px; padding: 20px; margin: 14px 0; text-align: center;">
          <svg viewBox="0 0 560 275" style="max-width: 540px; width: 100%; height: auto; background: rgba(2, 6, 23, 0.75); border-radius: 14px; border: 1.5px solid rgba(168, 85, 247, 0.4);">
            <!-- Garis Cabang dari 462 ke b dan 10 -->
            <line x1="175" y1="62" x2="115" y2="140" stroke="#38bdf8" stroke-width="3.5" />
            <line x1="205" y1="62" x2="265" y2="140" stroke="#f59e0b" stroke-width="3.5" />

            <!-- Kapsul Putus-Putus Miring Mengelompokkan 10 dan - 8 (Persis Lembar Asli!) -->
            <g transform="rotate(-35 305 102)">
              <rect x="220" y="74" width="170" height="56" rx="28" fill="rgba(16, 185, 129, 0.12)" stroke="#4ade80" stroke-width="2.5" stroke-dasharray="7,5"/>
            </g>

            <!-- Kotak 462 - 8 -->
            <rect x="130" y="20" width="120" height="44" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
            <text x="190" y="49" fill="#ffffff" font-size="24" font-weight="900" font-family="monospace" text-anchor="middle">462</text>

            <text x="285" y="49" fill="#f87171" font-size="26" font-weight="900" font-family="monospace" text-anchor="middle">–</text>

            <rect x="315" y="20" width="66" height="44" rx="10" fill="#1e293b" stroke="#f87171" stroke-width="2.5"/>
            <text x="348" y="49" fill="#ffffff" font-size="24" font-weight="900" font-family="monospace" text-anchor="middle">8</text>

            <!-- Lingkaran b (Kiri) dan 10 (Kanan) -->
            <circle cx="110" cy="162" r="34" fill="#1e1b4b" stroke="#38bdf8" stroke-width="3"/>
            <text x="110" y="169" fill="#38bdf8" font-size="22" font-weight="900" font-family="monospace" text-anchor="middle">b</text>

            <circle cx="265" cy="142" r="28" fill="#451a03" stroke="#f59e0b" stroke-width="3"/>
            <text x="265" y="149" fill="#fde047" font-size="20" font-weight="900" font-family="monospace" text-anchor="middle">10</text>

            <!-- Lingkaran a di samping kapsul (10 - 8 = a) -->
            <path d="M 355 110 L 405 125" stroke="#4ade80" stroke-width="2.5" marker-end="url(#arrowG)"/>
            <circle cx="435" cy="132" r="28" fill="#064e3b" stroke="#10b981" stroke-width="3"/>
            <text x="435" y="139" fill="#4ade80" font-size="22" font-weight="900" font-family="monospace" text-anchor="middle">a</text>

            <!-- Persamaan Bawah: b + a = c (Persis di Bawah Diagram pada PDF!) -->
            <rect x="145" y="212" width="270" height="46" rx="12" fill="rgba(30, 41, 59, 0.95)" stroke="#a855f7" stroke-width="2.5"/>
            <text x="280" y="242" fill="#ffffff" font-size="23" font-weight="900" font-family="monospace" text-anchor="middle">
              <tspan fill="#38bdf8">b</tspan> + <tspan fill="#4ade80">a</tspan> = <tspan fill="#fde047">c</tspan>
            </text>
          </svg>
        </div>
      `;
    }

    // -------------------------------------------------------------------------
    // 4. YURI'S SUBTRACTION WORK CARD (No. 4 — Ilustrasi Buku Catatan Yuri & Papan Koreksi H-T-O)
    // -------------------------------------------------------------------------
    if (vc.kind === 'yuri_detective_card') {
      var ans4 = (window.appState && window.appState.ihsUserAnswers && window.appState.ihsUserAnswers['ihs-4'] && window.appState.ihsUserAnswers['ihs-4'].boxes) || {};
      var hVal = ans4.b4_h || '?';
      var tVal = ans4.b4_t || '?';
      var oVal = ans4.b4_o || '?';

      return `
        <div style="background: linear-gradient(135deg, rgba(244, 63, 94, 0.14), rgba(15, 23, 42, 0.96)); border: 2px solid #f43f5e; border-radius: 18px; padding: 20px; margin: 14px 0; display: flex; flex-wrap: wrap; justify-content: center; gap: 28px; align-items: center;">
          <!-- Ilustrasi Karakter Yuri & Buku Catatannya -->
          <div style="background: #fffbeb; color: #1e293b; padding: 18px 24px; border-radius: 16px; border: 3px dashed #f43f5e; text-align: center; box-shadow: 0 8px 20px rgba(0,0,0,0.3);">
            <div style="display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 10px;">
              <svg viewBox="0 0 50 50" style="width: 42px; height: 42px;">
                <circle cx="25" cy="25" r="22" fill="#fce7f3" stroke="#f43f5e" stroke-width="2"/>
                <path d="M12 22 C12 10, 38 10, 38 22" fill="#1e293b"/>
                <circle cx="25" cy="26" r="11" fill="#fed7aa"/>
                <circle cx="21" cy="25" r="1.8" fill="#0f172a"/><circle cx="29" cy="25" r="1.8" fill="#0f172a"/>
                <path d="M21 31 Q25 34 29 31" fill="none" stroke="#e11d48" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
              <div style="text-align: left;">
                <div style="font-size: 0.76rem; font-weight: 900; color: #e11d48; text-transform: uppercase;">📓 Yuri's Notebook</div>
                <div style="font-size: 0.72rem; color: #64748b; font-weight: 700;">Periksa hasil hitungan Yuri ini:</div>
              </div>
            </div>
            <div style="display: inline-block; font-family: monospace; font-size: 1.55rem; font-weight: 900; text-align: right; line-height: 1.45; padding: 10px 22px; background: #ffffff; border-radius: 12px; border: 2px solid #cbd5e1;">
              <div style="letter-spacing: 12px; color: #64748b; font-size: 0.92rem; border-bottom: 1.5px solid #e2e8f0; margin-bottom: 4px;">H T O</div>
              <div style="letter-spacing: 10px; color: #0f172a;">5 2 7</div>
              <div style="letter-spacing: 10px; color: #0f172a; border-bottom: 3px solid #0f172a;">1 5 8 –</div>
              <div style="letter-spacing: 10px; color: #e11d48;">4 3 1</div>
            </div>
          </div>

          <div style="font-size: 2rem; color: #38bdf8; font-weight: 900;">➔</div>

          <!-- Papan Perbaikan Siswa (Tersinkronisasi dengan Kotak Input H, T, O) -->
          <div style="background: rgba(2, 6, 23, 0.88); padding: 18px 24px; border-radius: 16px; border: 2px solid #38bdf8; text-align: center;">
            <div style="font-size: 0.8rem; font-weight: 900; color: #38bdf8; text-transform: uppercase; margin-bottom: 10px;">
              ✏️ Your Job (Write in the Box Below):
            </div>
            <table style="border-collapse: separate; border-spacing: 6px; font-family: monospace; font-size: 1.45rem; font-weight: 900; margin: 0 auto;">
              <thead>
                <tr>
                  <th style="background: #7c3aed; color: #fff; padding: 5px 14px; border-radius: 6px; font-size: 0.82rem;">H</th>
                  <th style="background: #0284c7; color: #fff; padding: 5px 14px; border-radius: 6px; font-size: 0.82rem;">T</th>
                  <th style="background: #d97706; color: #fff; padding: 5px 14px; border-radius: 6px; font-size: 0.82rem;">O</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="width: 56px; height: 46px; background: #1e293b; color: #fff; border-radius: 8px;">5</td>
                  <td style="width: 56px; height: 46px; background: #1e293b; color: #fff; border-radius: 8px;">2</td>
                  <td style="width: 56px; height: 46px; background: #1e293b; color: #fff; border-radius: 8px;">7</td>
                  <td></td>
                </tr>
                <tr>
                  <td style="width: 56px; height: 46px; background: #1e293b; color: #fff; border-radius: 8px;">1</td>
                  <td style="width: 56px; height: 46px; background: #1e293b; color: #fff; border-radius: 8px;">5</td>
                  <td style="width: 56px; height: 46px; background: #1e293b; color: #fff; border-radius: 8px;">8</td>
                  <td style="color: #f87171; padding-left: 6px;">–</td>
                </tr>
                <tr><td colspan="4" style="border-bottom: 3px solid #38bdf8;"></td></tr>
                <tr>
                  <td style="width: 56px; height: 48px; background: rgba(124, 58, 237, 0.2); border: 2px dashed #a855f7; color: #d8b4fe; border-radius: 8px;">${hVal}</td>
                  <td style="width: 56px; height: 48px; background: rgba(2, 132, 199, 0.2); border: 2px dashed #38bdf8; color: #7dd3fc; border-radius: 8px;">${tVal}</td>
                  <td style="width: 56px; height: 48px; background: rgba(217, 119, 6, 0.2); border: 2px dashed #f59e0b; color: #fde047; border-radius: 8px;">${oVal}</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    // -------------------------------------------------------------------------
    // 5. INCOMPLETE SUBTRACTION 500 - 14[?] = 3[?]4 (No. 5)
    // -------------------------------------------------------------------------
    if (vc.kind === 'hto_puzzle_500') {
      var ans5 = (window.appState && window.appState.ihsUserAnswers && window.appState.ihsUserAnswers['ihs-5'] && window.appState.ihsUserAnswers['ihs-5'].boxes) || {};
      var r2o = ans5.b5_1 || '…';
      var r3t = ans5.b5_2 || '…';

      return `
        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(15, 23, 42, 0.96)); border: 2px solid #f59e0b; border-radius: 18px; padding: 20px; margin: 14px 0; text-align: center;">
          <div style="display: inline-block; background: rgba(2, 6, 23, 0.85); padding: 18px 28px; border-radius: 16px; border: 2px solid rgba(245, 158, 11, 0.45);">
            <table style="border-collapse: separate; border-spacing: 8px; font-family: monospace; font-size: 1.5rem; font-weight: 900;">
              <thead>
                <tr>
                  <th style="background: #7c3aed; color: #fff; padding: 6px 16px; border-radius: 8px; font-size: 0.84rem;">H</th>
                  <th style="background: #0284c7; color: #fff; padding: 6px 16px; border-radius: 8px; font-size: 0.84rem;">T</th>
                  <th style="background: #d97706; color: #fff; padding: 6px 16px; border-radius: 8px; font-size: 0.84rem;">O</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="width: 68px; height: 56px; background: #1e293b; color: #fff; border-radius: 10px;">5</td>
                  <td style="width: 68px; height: 56px; background: #1e293b; color: #fff; border-radius: 10px;">0</td>
                  <td style="width: 68px; height: 56px; background: #1e293b; color: #fff; border-radius: 10px;">0</td>
                  <td></td>
                </tr>
                <tr>
                  <td style="width: 68px; height: 56px; background: #1e293b; color: #fff; border-radius: 10px;">1</td>
                  <td style="width: 68px; height: 56px; background: #1e293b; color: #fff; border-radius: 10px;">4</td>
                  <td style="width: 68px; height: 56px; background: rgba(56, 189, 248, 0.22); border: 2.5px dashed #38bdf8; color: #38bdf8; border-radius: 10px;">${r2o}</td>
                  <td style="color: #f87171; font-size: 1.8rem; padding-left: 6px;">–</td>
                </tr>
                <tr>
                  <td colspan="4" style="border-bottom: 3.5px solid #fde047; height: 4px;"></td>
                </tr>
                <tr>
                  <td style="width: 68px; height: 56px; background: #1e293b; color: #fff; border-radius: 10px;">3</td>
                  <td style="width: 68px; height: 56px; background: rgba(16, 185, 129, 0.22); border: 2.5px dashed #10b981; color: #4ade80; border-radius: 10px;">${r3t}</td>
                  <td style="width: 68px; height: 56px; background: #1e293b; color: #fff; border-radius: 10px;">4</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    // -------------------------------------------------------------------------
    // 6. NUMBER BOND 678 + 8 (No. 6 — Dengan Kapsul Putus-Putus Miring Mengelompokkan 2 & 8 = 10!)
    // -------------------------------------------------------------------------
    if (vc.kind === 'number_bond_678') {
      return `
        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.14), rgba(15, 23, 42, 0.96)); border: 2px solid #10b981; border-radius: 18px; padding: 18px; margin: 14px 0; text-align: center;">
          <svg viewBox="0 0 600 220" style="max-width: 580px; width: 100%; height: auto; background: rgba(2, 6, 23, 0.75); border-radius: 14px; border: 1.5px solid rgba(16, 185, 129, 0.4);">
            <!-- Cabang 678 ke 676 dan 2 -->
            <line x1="145" y1="62" x2="90" y2="145" stroke="#38bdf8" stroke-width="3.5"/>
            <line x1="175" y1="62" x2="225" y2="145" stroke="#10b981" stroke-width="3.5"/>

            <!-- Kapsul Putus-Putus Miring Mengelompokkan 2 dan 8 Menjadi 10 -->
            <g transform="rotate(-35 268 102)">
              <rect x="182" y="74" width="172" height="54" rx="27" fill="rgba(16, 185, 129, 0.14)" stroke="#4ade80" stroke-width="2.5" stroke-dasharray="7,5"/>
            </g>

            <rect x="105" y="20" width="110" height="44" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
            <text x="160" y="49" fill="#fff" font-size="23" font-weight="900" font-family="monospace" text-anchor="middle">678</text>

            <text x="248" y="49" fill="#4ade80" font-size="25" font-weight="900" text-anchor="middle">+</text>

            <rect x="276" y="20" width="64" height="44" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="2.5"/>
            <text x="308" y="49" fill="#fff" font-size="23" font-weight="900" font-family="monospace" text-anchor="middle">8</text>

            <text x="362" y="49" fill="#38bdf8" font-size="24" font-weight="900" text-anchor="middle">=</text>

            <!-- Lingkaran 676 dan 2 -->
            <circle cx="85" cy="162" r="32" fill="#0f172a" stroke="#38bdf8" stroke-width="3"/>
            <text x="85" y="169" fill="#38bdf8" font-size="19" font-weight="900" font-family="monospace" text-anchor="middle">676</text>

            <circle cx="228" cy="142" r="26" fill="#064e3b" stroke="#10b981" stroke-width="3"/>
            <text x="228" y="149" fill="#4ade80" font-size="19" font-weight="900" font-family="monospace" text-anchor="middle">2</text>

            <!-- Lingkaran 10 di Luar Kapsul -->
            <circle cx="332" cy="135" r="24" fill="#451a03" stroke="#fde047" stroke-width="2.5"/>
            <text x="332" y="142" fill="#fde047" font-size="18" font-weight="900" font-family="monospace" text-anchor="middle">10</text>

            <!-- Kotak Langkah Kanan Persis Buku: 676 + 10 = .... & So, 678 + 8 = .... -->
            <rect x="385" y="38" width="198" height="125" rx="12" fill="rgba(15, 23, 42, 0.92)" stroke="#38bdf8" stroke-width="2"/>
            <text x="484" y="78" fill="#ffffff" font-size="17" font-weight="900" font-family="monospace" text-anchor="middle">676 + 10 = ….</text>
            <line x1="405" y1="98" x2="565" y2="98" stroke="rgba(148,163,184,0.25)" stroke-width="1.5"/>
            <text x="484" y="134" fill="#fde047" font-size="16" font-weight="900" font-family="monospace" text-anchor="middle">So, 678 + 8 = ….</text>
          </svg>
        </div>
      `;
    }

    // -------------------------------------------------------------------------
    // 7. H-T-O WORKOUT CARD (No. 7: 297 + 358 & No. 9: 800 - 697 — Dengan Baris Coretan Carry/Borrow!)
    // -------------------------------------------------------------------------
    if (vc.kind === 'hto_workout_card') {
      var ansW = (window.appState && window.appState.ihsUserAnswers && window.appState.ihsUserAnswers[q.id] && window.appState.ihsUserAnswers[q.id].boxes) || {};
      var prefixKey = q.id === 'ihs-7' ? 'b7' : 'b9';
      var hDigit = ansW[prefixKey + '_h'] || '…';
      var tDigit = ansW[prefixKey + '_t'] || '…';
      var oDigit = ansW[prefixKey + '_o'] || '…';
      var cMarks = (st.carryMarks && st.carryMarks[q.id]) || {};

      return `
        <div style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.14), rgba(15, 23, 42, 0.96)); border: 2px solid #38bdf8; border-radius: 18px; padding: 20px; margin: 14px 0; text-align: center;">
          <div style="font-size: 0.78rem; color: #cbd5e1; margin-bottom: 10px;">
            💡 Klik kotak kecil di atas kolom <strong>H</strong> atau <strong>T</strong> jika kamu ingin menandai simpanan/pinjaman (coretan), lalu isi jawaban di bawah!
          </div>
          <div style="display: inline-block; background: rgba(2, 6, 23, 0.88); padding: 18px 28px; border-radius: 16px; border: 2px solid rgba(56, 189, 248, 0.4);">
            <table style="border-collapse: separate; border-spacing: 8px; font-family: monospace; font-size: 1.5rem; font-weight: 900;">
              <thead>
                <tr>
                  <th style="background: #7c3aed; color: #fff; padding: 6px 16px; border-radius: 8px; font-size: 0.85rem;">H</th>
                  <th style="background: #0284c7; color: #fff; padding: 6px 16px; border-radius: 8px; font-size: 0.85rem;">T</th>
                  <th style="background: #d97706; color: #fff; padding: 6px 16px; border-radius: 8px; font-size: 0.85rem;">O</th>
                  <th></th>
                </tr>
                <!-- Baris Coretan Simpanan / Pinjaman Siswa -->
                <tr>
                  <th>
                    <button type="button" onclick="ihsToggleCarryMark('${q.id}', 'h')" style="width: 100%; height: 26px; border-radius: 6px; font-size: 0.72rem; font-weight: 800; cursor: pointer; background: ${cMarks.h ? 'rgba(250, 204, 21, 0.25)' : 'rgba(255,255,255,0.05)'}; border: 1px dashed ${cMarks.h ? '#fde047' : 'rgba(148,163,184,0.35)'}; color: #fde047;">
                      ${cMarks.h ? '✎ 1' : '✎ Coretan'}
                    </button>
                  </th>
                  <th>
                    <button type="button" onclick="ihsToggleCarryMark('${q.id}', 't')" style="width: 100%; height: 26px; border-radius: 6px; font-size: 0.72rem; font-weight: 800; cursor: pointer; background: ${cMarks.t ? 'rgba(250, 204, 21, 0.25)' : 'rgba(255,255,255,0.05)'}; border: 1px dashed ${cMarks.t ? '#fde047' : 'rgba(148,163,184,0.35)'}; color: #fde047;">
                      ${cMarks.t ? '✎ 1' : '✎ Coretan'}
                    </button>
                  </th>
                  <th></th>
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
                  <td colspan="4" style="border-bottom: 3.5px solid #38bdf8; height: 4px;"></td>
                </tr>
                <tr>
                  <td style="width: 72px; height: 54px; background: rgba(124, 58, 237, 0.22); border: 2px dashed #a855f7; color: #d8b4fe; border-radius: 10px;">${hDigit}</td>
                  <td style="width: 72px; height: 54px; background: rgba(2, 132, 199, 0.22); border: 2px dashed #38bdf8; color: #7dd3fc; border-radius: 10px;">${tDigit}</td>
                  <td style="width: 72px; height: 54px; background: rgba(217, 119, 6, 0.22); border: 2px dashed #f59e0b; color: #fde047; border-radius: 10px;">${oDigit}</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    // -------------------------------------------------------------------------
    // 8. NUMBER BOND 597 + 98 (No. 8 — Dengan Kapsul Putus-Putus Miring & .... + 100 = ....)
    // -------------------------------------------------------------------------
    if (vc.kind === 'number_bond_597') {
      var ans8 = (window.appState && window.appState.ihsUserAnswers && window.appState.ihsUserAnswers['ihs-8'] && window.appState.ihsUserAnswers['ihs-8'].boxes) || {};
      var c1Val = ans8.b8_left || '①';
      var c2Val = ans8.b8_right || '②';
      var sum8Val = ans8.b8_sum || '….';

      return `
        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.14), rgba(15, 23, 42, 0.96)); border: 2px solid #f59e0b; border-radius: 18px; padding: 18px; margin: 14px 0; text-align: center;">
          <svg viewBox="0 0 600 220" style="max-width: 580px; width: 100%; height: auto; background: rgba(2, 6, 23, 0.75); border-radius: 14px; border: 1.5px solid rgba(245, 158, 11, 0.4);">
            <line x1="145" y1="62" x2="88" y2="145" stroke="#38bdf8" stroke-width="3.5"/>
            <line x1="175" y1="62" x2="225" y2="145" stroke="#f59e0b" stroke-width="3.5"/>

            <!-- Kapsul Miring Mengelompokkan ② dan 98 Menjadi 100 -->
            <g transform="rotate(-35 268 102)">
              <rect x="180" y="74" width="176" height="54" rx="27" fill="rgba(245, 158, 11, 0.14)" stroke="#fde047" stroke-width="2.5" stroke-dasharray="7,5"/>
            </g>

            <rect x="105" y="20" width="110" height="44" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
            <text x="160" y="49" fill="#fff" font-size="23" font-weight="900" font-family="monospace" text-anchor="middle">597</text>

            <text x="248" y="49" fill="#fde047" font-size="25" font-weight="900" text-anchor="middle">+</text>

            <rect x="275" y="20" width="70" height="44" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2.5"/>
            <text x="310" y="49" fill="#fff" font-size="23" font-weight="900" font-family="monospace" text-anchor="middle">98</text>

            <!-- Lingkaran ① dan ② -->
            <circle cx="85" cy="162" r="34" fill="#0f172a" stroke="#38bdf8" stroke-width="3" stroke-dasharray="5,3"/>
            <text x="85" y="168" fill="#38bdf8" font-size="18" font-weight="900" font-family="monospace" text-anchor="middle">${c1Val}</text>

            <circle cx="228" cy="142" r="28" fill="#451a03" stroke="#f59e0b" stroke-width="3" stroke-dasharray="5,3"/>
            <text x="228" y="148" fill="#fde047" font-size="18" font-weight="900" font-family="monospace" text-anchor="middle">${c2Val}</text>

            <!-- Angka 100 di Samping Kapsul -->
            <circle cx="336" cy="135" r="26" fill="#451a03" stroke="#fde047" stroke-width="2.5"/>
            <text x="336" y="141" fill="#ffffff" font-size="17" font-weight="900" font-family="monospace" text-anchor="middle">100</text>

            <!-- Kotak Persamaan Kanan Persis Buku: .... + 100 = .... -->
            <rect x="385" y="55" width="198" height="90" rx="12" fill="rgba(15, 23, 42, 0.92)" stroke="#f59e0b" stroke-width="2"/>
            <text x="484" y="106" fill="#ffffff" font-size="18" font-weight="900" font-family="monospace" text-anchor="middle">
              <tspan fill="#38bdf8">${c1Val}</tspan> + 100 = <tspan fill="#4ade80">${sum8Val}</tspan>
            </text>
          </svg>
        </div>
      `;
    }

    // -------------------------------------------------------------------------
    // 9. NUMBER BOND 749 - 70 (No. 10 — Dengan Kapsul Putus-Putus Miring & .... + .... = ....)
    // -------------------------------------------------------------------------
    if (vc.kind === 'number_bond_749') {
      var ans10 = (window.appState && window.appState.ihsUserAnswers && window.appState.ihsUserAnswers['ihs-10'] && window.appState.ihsUserAnswers['ihs-10'].boxes) || {};
      var l10Val = ans10.b10_left || '①';
      var r10Val = ans10.b10_rem || '②';
      var tot10Val = ans10.b10_total || '….';

      return `
        <div style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.14), rgba(15, 23, 42, 0.96)); border: 2px solid #38bdf8; border-radius: 18px; padding: 18px; margin: 14px 0; text-align: center;">
          <svg viewBox="0 0 600 220" style="max-width: 580px; width: 100%; height: auto; background: rgba(2, 6, 23, 0.75); border-radius: 14px; border: 1.5px solid rgba(56, 189, 248, 0.4);">
            <line x1="145" y1="62" x2="88" y2="145" stroke="#38bdf8" stroke-width="3.5"/>
            <line x1="175" y1="62" x2="225" y2="145" stroke="#10b981" stroke-width="3.5"/>

            <!-- Kapsul Miring Mengelompokkan 100 dan - 70 Menjadi ② -->
            <g transform="rotate(-35 268 102)">
              <rect x="180" y="74" width="176" height="54" rx="27" fill="rgba(244, 63, 94, 0.14)" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="7,5"/>
            </g>

            <rect x="105" y="20" width="110" height="44" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
            <text x="160" y="49" fill="#fff" font-size="23" font-weight="900" font-family="monospace" text-anchor="middle">749</text>

            <text x="248" y="49" fill="#f87171" font-size="25" font-weight="900" text-anchor="middle">–</text>

            <rect x="275" y="20" width="70" height="44" rx="10" fill="#1e293b" stroke="#f43f5e" stroke-width="2.5"/>
            <text x="310" y="49" fill="#fff" font-size="23" font-weight="900" font-family="monospace" text-anchor="middle">70</text>

            <!-- Lingkaran ① (Kiri) dan 100 (Kanan) -->
            <circle cx="85" cy="162" r="34" fill="#0f172a" stroke="#38bdf8" stroke-width="3" stroke-dasharray="5,3"/>
            <text x="85" y="168" fill="#38bdf8" font-size="18" font-weight="900" font-family="monospace" text-anchor="middle">${l10Val}</text>

            <circle cx="228" cy="142" r="28" fill="#064e3b" stroke="#10b981" stroke-width="3"/>
            <text x="228" y="148" fill="#4ade80" font-size="18" font-weight="900" font-family="monospace" text-anchor="middle">100</text>

            <!-- Lingkaran ② di Samping Kapsul -->
            <circle cx="336" cy="135" r="26" fill="#451a03" stroke="#fde047" stroke-width="3" stroke-dasharray="5,3"/>
            <text x="336" y="141" fill="#fde047" font-size="18" font-weight="900" font-family="monospace" text-anchor="middle">${r10Val}</text>

            <!-- Kotak Persamaan Kanan Persis Buku: .... + .... = .... -->
            <rect x="385" y="55" width="198" height="90" rx="12" fill="rgba(15, 23, 42, 0.92)" stroke="#38bdf8" stroke-width="2"/>
            <text x="484" y="106" fill="#ffffff" font-size="18" font-weight="900" font-family="monospace" text-anchor="middle">
              <tspan fill="#38bdf8">${l10Val}</tspan> + <tspan fill="#fde047">${r10Val}</tspan> = <tspan fill="#4ade80">${tot10Val}</tspan>
            </text>
          </svg>
        </div>
      `;
    }

    // -------------------------------------------------------------------------
    // 10. BOOK PAGE 55 NO. 1(a): 2 BUNDEL GANTUNGAN KUNCI (16 KEYS IN 2 BUNDLES)
    // -------------------------------------------------------------------------
    if (vc.kind === 'svg_key_bundles') {
      var cMap = (st.countedItems && st.countedItems[q.id]) || {};
      var totalCounted = Object.keys(cMap).length;
      var bundlesHtml = '';

      for (var b = 0; b < vc.bundles; b++) {
        var keysHtml = '';
        for (var k = 0; k < vc.keysPerBundle; k++) {
          var itemKey = 'b' + b + '_k' + k;
          var badgeNum = cMap[itemKey];
          keysHtml += `
            <div onclick="ihsToggleCountItem('${q.id}', '${itemKey}')"
                 title="Klik untuk menghitung kunci ini"
                 style="position: relative; cursor: pointer; padding: 6px; border-radius: 12px; background: ${badgeNum ? 'rgba(245, 158, 11, 0.25)' : 'rgba(255,255,255,0.05)'}; border: 2px solid ${badgeNum ? '#fde047' : 'rgba(255,255,255,0.12)'}; transition: all 0.15s;">
              <svg viewBox="0 0 36 64" style="width: 32px; height: 54px; display: block;">
                <circle cx="18" cy="14" r="10" fill="none" stroke="#fbbf24" stroke-width="4"/>
                <circle cx="18" cy="14" r="4" fill="#0f172a"/>
                <rect x="15" y="24" width="6" height="32" rx="2" fill="#f59e0b"/>
                <rect x="21" y="42" width="8" height="4" rx="1" fill="#fbbf24"/>
                <rect x="21" y="50" width="10" height="4" rx="1" fill="#fbbf24"/>
              </svg>
              ${badgeNum ? `<span style="position: absolute; top: -6px; right: -6px; background: #10b981; color: #0f172a; font-size: 0.72rem; font-weight: 900; padding: 1px 6px; border-radius: 999px; border: 1.5px solid #fff;">${badgeNum}</span>` : ''}
            </div>
          `;
        }

        bundlesHtml += `
          <div style="background: rgba(15, 23, 42, 0.92); border: 2.5px solid #f59e0b; border-radius: 18px; padding: 16px; text-align: center;">
            <!-- Cincin Bundel Gantungan Kunci Besar -->
            <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: 8px;">
              <svg viewBox="0 0 120 44" style="width: 110px; height: 40px;">
                <ellipse cx="60" cy="22" rx="42" ry="16" fill="none" stroke="#cbd5e1" stroke-width="5"/>
                <ellipse cx="60" cy="22" rx="38" ry="12" fill="none" stroke="#94a3b8" stroke-width="2"/>
              </svg>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; padding: 12px; background: rgba(0,0,0,0.35); border-radius: 14px;">
              ${keysHtml}
            </div>
          </div>
        `;
      }

      return `
        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.14), rgba(15, 23, 42, 0.96)); border: 2px solid #f59e0b; border-radius: 18px; padding: 18px; margin: 14px 0;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
            <span style="font-size: 0.8rem; font-weight: 700; color: #fde68a;">
              💡 Klik gambar kunci emas di bawah jika kamu ingin menghitungnya satu per satu!
            </span>
            ${totalCounted > 0 ? `<button type="button" onclick="ihsResetCountItems('${q.id}')" style="background: rgba(148,163,184,0.2); color: #e2e8f0; border: 1px solid rgba(148,163,184,0.4); border-radius: 8px; padding: 4px 10px; font-size: 0.74rem; cursor: pointer;">🔄 Reset Hitungan (${totalCounted})</button>` : ''}
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
            ${bundlesHtml}
          </div>
        </div>
      `;
    }

    // -------------------------------------------------------------------------
    // 11. BOOK PAGE 55 NO. 1(b) & 1(c): KOTAK WADAH TIKUS (18 MICE) & ANAK AYAM (25 CHICKS)
    // -------------------------------------------------------------------------
    if (vc.kind === 'svg_animal_trays') {
      var cMapA = (st.countedItems && st.countedItems[q.id]) || {};
      var totalCountedA = Object.keys(cMapA).length;
      var traysHtmlA = '';

      for (var g = 0; g < vc.groupCount; g++) {
        var animalsHtml = '';
        for (var m = 0; m < vc.itemsPerGroup; m++) {
          var aKey = 'g' + g + '_m' + m;
          var aBadge = cMapA[aKey];
          var svgAnimal = '';

          if (vc.animalType === 'mouse') {
            svgAnimal = `
              <svg viewBox="0 0 54 46" style="width: 44px; height: 38px; display: block;">
                <!-- Ekor & Badan Tikus Lucu -->
                <path d="M8 34 Q2 25 8 18" fill="none" stroke="#f472b6" stroke-width="2.5" stroke-linecap="round"/>
                <ellipse cx="26" cy="28" rx="14" ry="10" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
                <circle cx="18" cy="18" r="6" fill="#cbd5e1" stroke="#475569" stroke-width="1.8"/>
                <circle cx="32" cy="16" r="6.5" fill="#cbd5e1" stroke="#475569" stroke-width="1.8"/>
                <circle cx="32" cy="16" r="3.5" fill="#f472b6"/>
                <circle cx="36" cy="25" r="2" fill="#0f172a"/>
                <circle cx="42" cy="28" r="2.5" fill="#f43f5e"/>
              </svg>
            `;
          } else {
            svgAnimal = `
              <svg viewBox="0 0 50 50" style="width: 42px; height: 42px; display: block;">
                <!-- Anak Ayam Kuning -->
                <line x1="20" y1="39" x2="18" y2="46" stroke="#f97316" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="30" y1="39" x2="32" y2="46" stroke="#f97316" stroke-width="2.5" stroke-linecap="round"/>
                <ellipse cx="25" cy="30" rx="13" ry="11" fill="#fde047" stroke="#ca8a04" stroke-width="2"/>
                <circle cx="25" cy="17" r="9.5" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
                <polygon points="33,15 41,18 33,21" fill="#f97316"/>
                <circle cx="28" cy="15" r="2" fill="#0f172a"/>
              </svg>
            `;
          }

          animalsHtml += `
            <div onclick="ihsToggleCountItem('${q.id}', '${aKey}')"
                 style="position: relative; cursor: pointer; padding: 5px; border-radius: 12px; background: ${aBadge ? 'rgba(56, 189, 248, 0.25)' : 'rgba(255,255,255,0.06)'}; border: 2px solid ${aBadge ? '#fde047' : 'rgba(255,255,255,0.12)'}; transition: all 0.15s;">
              ${svgAnimal}
              ${aBadge ? `<span style="position: absolute; top: -6px; right: -6px; background: #10b981; color: #0f172a; font-size: 0.72rem; font-weight: 900; padding: 1px 6px; border-radius: 999px; border: 1.5px solid #fff;">${aBadge}</span>` : ''}
            </div>
          `;
        }

        // Kotak 3D Perspektif seperti di Buku Hal 55
        traysHtmlA += `
          <div style="background: linear-gradient(180deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%); border: 2.5px solid ${vc.accentColor}; border-bottom: 8px solid ${vc.accentColor}; border-radius: 16px; padding: 14px; text-align: center; box-shadow: 0 6px 16px rgba(0,0,0,0.35);">
            <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; padding: 10px; background: rgba(0,0,0,0.35); border-radius: 12px;">
              ${animalsHtml}
            </div>
          </div>
        `;
      }

      return `
        <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95)); border: 2px solid ${vc.accentColor}; border-radius: 18px; padding: 18px; margin: 14px 0;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
            <span style="font-size: 0.8rem; font-weight: 700; color: #cbd5e1;">
              💡 Klik gambar pada masing-masing kotak untuk menghitung jumlahnya!
            </span>
            ${totalCountedA > 0 ? `<button type="button" onclick="ihsResetCountItems('${q.id}')" style="background: rgba(148,163,184,0.2); color: #e2e8f0; border: 1px solid rgba(148,163,184,0.4); border-radius: 8px; padding: 4px 10px; font-size: 0.74rem; cursor: pointer;">🔄 Reset Hitungan (${totalCountedA})</button>` : ''}
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(195px, 1fr)); gap: 14px;">
            ${traysHtmlA}
          </div>
        </div>
      `;
    }

    // -------------------------------------------------------------------------
    // 12. MANUAL TRAY/BOWL DISTRIBUTOR (No. 14: 12 Gelas ke 4 Nampan & No. 15: 15 Rambutan ke 3 Mangkuk)
    // -------------------------------------------------------------------------
    if (vc.kind === 'manual_tray_distributor') {
      var counts = st.trayCounts[q.id] || new Array(vc.groupCount).fill(0);
      var usedTotal = counts.reduce(function(a, b) { return a + b; }, 0);
      var remaining = Math.max(0, vc.totalItems - usedTotal);

      var topPoolHtml = '';
      for (var i = 0; i < vc.totalItems; i++) {
        var isCrossedOut = i < usedTotal;
        topPoolHtml += `
          <div onclick="ihsDistributeNextItem('${q.id}', ${vc.totalItems}, ${vc.groupCount})"
               title="${isCrossedOut ? 'Sudah dipindahkan ke wadah' : 'Klik untuk memindahkan ke wadah berikutnya'}"
               style="position: relative; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 54px; background: ${isCrossedOut ? 'rgba(15, 23, 42, 0.4)' : 'rgba(255,255,255,0.1)'}; opacity: ${isCrossedOut ? '0.42' : '1'}; border-radius: 12px; border: 2px solid ${isCrossedOut ? '#64748b' : vc.accentColor}; transition: all 0.15s;">
            ${drawCustomItemSVG(vc.itemType, i)}
            ${isCrossedOut ? `
              <svg viewBox="0 0 40 40" style="position: absolute; inset: 4px; width: calc(100% - 8px); height: calc(100% - 8px); pointer-events: none;">
                <line x1="4" y1="4" x2="36" y2="36" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>
                <line x1="36" y1="4" x2="4" y2="36" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>
              </svg>
            ` : ''}
          </div>
        `;
      }

      var traysHtml = '';
      for (var t = 0; t < vc.groupCount; t++) {
        var cCount = counts[t] || 0;
        var trayItems = '';
        for (var m = 0; m < cCount; m++) {
          trayItems += `<span style="display: inline-flex;">${drawCustomItemSVG(vc.itemType, m)}</span>`;
        }
        if (cCount === 0) {
          trayItems = `<span style="font-size: 0.76rem; color: #94a3b8;">Klik ${vc.containerName} ini untuk menaruh 1 objek</span>`;
        }

        var containerGraphic = vc.itemType === 'glass'
          ? `<div style="height: 8px; background: linear-gradient(90deg, #38bdf8, #0284c7); border-radius: 999px; margin-top: 6px;"></div>`
          : `<div style="height: 10px; background: linear-gradient(90deg, #f43f5e, #e11d48); border-radius: 0 0 24px 24px; margin-top: 6px;"></div>`;

        traysHtml += `
          <div onclick="ihsAddToTray('${q.id}', ${t}, ${vc.totalItems}, ${vc.groupCount})"
               style="cursor: pointer; background: rgba(15, 23, 42, 0.94); border: 2.5px dashed ${vc.accentColor}; border-radius: 16px; padding: 14px; text-align: center; transition: all 0.2s;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 0.82rem; font-weight: 800; color: #fde047;">${vc.containerName} #${t + 1}</span>
              ${cCount > 0 ? `<button type="button" onclick="ihsRemoveFromTray(event, '${q.id}', ${t})" style="background: rgba(239,68,68,0.25); color: #fca5a5; border: 1px solid #ef4444; border-radius: 6px; padding: 2px 8px; font-size: 0.72rem; cursor: pointer;">–1</button>` : ''}
            </div>
            <div style="min-height: 64px; display: flex; align-items: center; justify-content: center; gap: 6px; flex-wrap: wrap; background: rgba(0,0,0,0.38); border-radius: 12px; padding: 10px;">
              ${trayItems}
            </div>
            ${containerGraphic}
          </div>
        `;
      }

      return `
        <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.96)); border: 2px solid ${vc.accentColor}; border-radius: 18px; padding: 18px; margin: 14px 0;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 10px;">
            <span style="font-size: 0.82rem; font-weight: 700; color: #cbd5e1;">
              💡 Klik gambar di baris atas (atau klik ${vc.containerName} di bawah) untuk mencoret (✕) dan membagikan satu per satu secara merata! (Sisa: <strong>${remaining}</strong>)
            </span>
            <button type="button" onclick="ihsResetTrays('${q.id}', ${vc.groupCount})" style="background: rgba(148,163,184,0.2); color: #e2e8f0; border: 1px solid rgba(148,163,184,0.4); border-radius: 8px; padding: 5px 12px; font-size: 0.76rem; font-weight: 700; cursor: pointer;">
              🔄 Ulangi Susunan
            </button>
          </div>

          <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; padding: 12px; background: rgba(0,0,0,0.35); border-radius: 14px; margin-bottom: 14px;">
            ${topPoolHtml}
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(185px, 1fr)); gap: 12px;">
            ${traysHtml}
          </div>
        </div>
      `;
    }

    // -------------------------------------------------------------------------
    // 13. SVG EQUAL GROUPING CANVAS (No. 16 - 20: Korek Api, Pir, Keripik "Chips", Turis & Danau, Biskuit)
    // -------------------------------------------------------------------------
    if (vc.kind === 'svg_equal_grouping') {
      var marksMap = (st.itemMarks && st.itemMarks[q.id]) || {};
      var activeColIdx = st.activeMarkerColor || 0;

      var colorPaletteHtml = MARKER_COLORS.map(function(cHex, cIdx) {
        var isSel = (cIdx === activeColIdx);
        return `
          <button type="button" onclick="ihsSetMarkerColor(${cIdx})"
                  title="Pilih Warna Lingkaran Kelompok #${cIdx + 1}"
                  style="width: 28px; height: 28px; border-radius: 999px; background: ${cHex}; border: ${isSel ? '3px solid #ffffff' : '1px solid rgba(255,255,255,0.3)'}; cursor: pointer; transform: ${isSel ? 'scale(1.15)' : 'scale(1)'};">
          </button>
        `;
      }).join('');

      var lakeHeaderSvg = '';
      if (vc.itemType === 'tourist_lake') {
        lakeHeaderSvg = `
          <svg viewBox="0 0 640 85" style="width: 100%; height: auto; border-radius: 12px; margin-bottom: 10px; background: linear-gradient(180deg, #0c4a6e 0%, #0284c7 100%); border: 1.5px solid rgba(56, 189, 248, 0.4);">
            <!-- Pegunungan & Danau seperti di Buku Hal 58 -->
            <polygon points="0,55 95,18 190,55" fill="#1e293b" opacity="0.6"/>
            <polygon points="150,55 260,12 370,55" fill="#334155" opacity="0.6"/>
            <polygon points="340,55 460,20 580,55" fill="#1e293b" opacity="0.6"/>
            <rect x="0" y="52" width="640" height="33" fill="#0369a1"/>
            <!-- Perahu-Perahu Kayu di Danau -->
            ${[110, 230, 350, 470, 575].map(function(bx) {
              return `
                <g transform="translate(${bx}, 48)">
                  <polygon points="-32,8 32,8 22,24 -22,24" fill="#b45309" stroke="#fde68a" stroke-width="1.8"/>
                  <line x1="-24" y1="14" x2="24" y2="14" stroke="#78350f" stroke-width="2"/>
                </g>
              `;
            }).join('')}
          </svg>
        `;
      }

      var itemsGridHtml = '';
      for (var idx = 0; idx < vc.totalItems; idx++) {
        var mColIdx = marksMap[idx];
        var isMarked = (mColIdx !== undefined);
        var mColor = isMarked ? MARKER_COLORS[mColIdx % MARKER_COLORS.length] : 'rgba(148, 163, 184, 0.3)';
        itemsGridHtml += `
          <div onclick="ihsToggleItemMark('${q.id}', ${idx})"
               style="cursor: pointer; height: 64px; display: flex; align-items: center; justify-content: center; border-radius: ${isMarked ? '999px' : '12px'}; background: ${isMarked ? mColor + '33' : 'rgba(15, 23, 42, 0.92)'}; border: 3px ${isMarked ? 'solid ' + mColor : 'dashed rgba(148, 163, 184, 0.32)'}; user-select: none; transition: all 0.15s;">
            ${drawCustomItemSVG(vc.itemType, idx)}
          </div>
        `;
      }

      return `
        <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95)); border: 2px solid ${vc.accentColor}; border-radius: 18px; padding: 18px; margin: 14px 0;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <span style="font-size: 0.8rem; font-weight: 700; color: #cbd5e1;">🎨 Pilih Warna Spidol & Klik Objek untuk Melingkari Kelompok:</span>
              ${colorPaletteHtml}
            </div>
            <button type="button" onclick="ihsResetItemMarks('${q.id}')" style="background: rgba(148,163,184,0.2); color: #e2e8f0; border: 1px solid rgba(148,163,184,0.4); border-radius: 8px; padding: 5px 12px; font-size: 0.76rem; font-weight: 700; cursor: pointer;">
              🔄 Hapus Lingkaran
            </button>
          </div>

          ${lakeHeaderSvg}

          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(66px, 1fr)); gap: 10px; padding: 14px; background: rgba(0,0,0,0.35); border-radius: 14px;">
            ${itemsGridHtml}
          </div>
        </div>
      `;
    }

    // -------------------------------------------------------------------------
    // 14. BOOK PAGE 59 NO. 1: 4 PIRING CERI (4 PLATES OF 3 CHERRIES)
    // -------------------------------------------------------------------------
    if (vc.kind === 'svg_story_cherries') {
      var cMapC = (st.countedItems && st.countedItems[q.id]) || {};
      var totalCountedC = Object.keys(cMapC).length;
      var platesHtml = '';

      for (var p = 0; p < vc.plates; p++) {
        var cherriesHtml = '';
        for (var c = 0; c < vc.cherriesPerPlate; c++) {
          var cKey = 'p' + p + '_c' + c;
          var cBadge = cMapC[cKey];
          cherriesHtml += `
            <div onclick="ihsToggleCountItem('${q.id}', '${cKey}')"
                 style="position: relative; cursor: pointer; padding: 4px; border-radius: 12px; background: ${cBadge ? 'rgba(244, 63, 94, 0.25)' : 'transparent'}; border: 2px solid ${cBadge ? '#fde047' : 'transparent'};">
              <svg viewBox="0 0 42 56" style="width: 40px; height: 52px; display: block;">
                <path d="M21 34 C19 20, 24 10, 14 4" fill="none" stroke="#4ade80" stroke-width="2.5" stroke-linecap="round"/>
                <circle cx="21" cy="39" r="11" fill="#e11d48" stroke="#881337" stroke-width="2"/>
                <ellipse cx="17" cy="35" rx="3.5" ry="2.2" fill="#fda4af" opacity="0.7"/>
              </svg>
              ${cBadge ? `<span style="position: absolute; top: -4px; right: -4px; background: #10b981; color: #0f172a; font-size: 0.72rem; font-weight: 900; padding: 1px 6px; border-radius: 999px; border: 1.5px solid #fff;">${cBadge}</span>` : ''}
            </div>
          `;
        }

        platesHtml += `
          <div style="background: rgba(15, 23, 42, 0.92); border: 2.5px solid #f43f5e; border-radius: 18px; padding: 14px; text-align: center;">
            <div style="display: flex; justify-content: center; gap: 6px; padding-bottom: 4px;">
              ${cherriesHtml}
            </div>
            <!-- Ilustrasi Piring Keramik Oval seperti di Buku Hal 59 -->
            <svg viewBox="0 0 160 28" style="width: 145px; height: 26px; margin: -6px auto 0; display: block;">
              <ellipse cx="80" cy="14" rx="74" ry="11" fill="#e2e8f0" stroke="#64748b" stroke-width="2.5"/>
              <ellipse cx="80" cy="13" rx="54" ry="6.5" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5"/>
            </svg>
          </div>
        `;
      }

      return `
        <div style="background: linear-gradient(135deg, rgba(244, 63, 94, 0.14), rgba(15, 23, 42, 0.96)); border: 2px solid #f43f5e; border-radius: 18px; padding: 18px; margin: 14px 0;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
            <span style="font-size: 0.8rem; font-weight: 700; color: #fda4af;">
              💡 Klik buah ceri pada piring untuk menghitungnya satu per satu!
            </span>
            ${totalCountedC > 0 ? `<button type="button" onclick="ihsResetCountItems('${q.id}')" style="background: rgba(148,163,184,0.2); color: #e2e8f0; border: 1px solid rgba(148,163,184,0.4); border-radius: 8px; padding: 4px 10px; font-size: 0.74rem; cursor: pointer;">🔄 Reset Hitungan (${totalCountedC})</button>` : ''}
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(185px, 1fr)); gap: 14px;">
            ${platesHtml}
          </div>
        </div>
      `;
    }

    // -------------------------------------------------------------------------
    // 15. BOOK PAGE 59 NO. 2: 5 SEPEDA & RODA JARI-JARI (BICYCLES & WHEELS DIORAMA)
    // -------------------------------------------------------------------------
    if (vc.kind === 'story_diorama_bicycles') {
      var cMapB = (st.countedItems && st.countedItems[q.id]) || {};
      var totalCountedB = Object.keys(cMapB).length;
      var bikesHtml = '';
      var bikeColors = ['#38bdf8', '#10b981', '#f59e0b', '#a855f7', '#f43f5e'];

      for (var bIdx = 0; bIdx < vc.bicycleCount; bIdx++) {
        var col = bikeColors[bIdx % bikeColors.length];
        var wLeftKey = 'bike_' + bIdx + '_wL';
        var wRightKey = 'bike_' + bIdx + '_wR';
        var bL = cMapB[wLeftKey];
        var bR = cMapB[wRightKey];

        bikesHtml += `
          <div style="background: rgba(15, 23, 42, 0.92); border: 2.5px solid ${col}; border-radius: 16px; padding: 14px; text-align: center; position: relative;">
            <svg viewBox="0 0 140 86" style="width: 132px; height: 80px;">
              <!-- Roda Kiri (Bisa Diklik untuk Menghitung Roda!) -->
              <g style="cursor: pointer;" onclick="ihsToggleCountItem('${q.id}', '${wLeftKey}')">
                <circle cx="32" cy="56" r="21" fill="${bL ? 'rgba(16, 185, 129, 0.35)' : 'rgba(15,23,42,0.8)'}" stroke="${bL ? '#fde047' : '#e2e8f0'}" stroke-width="4.5"/>
                <line x1="32" y1="35" x2="32" y2="77" stroke="#64748b" stroke-width="1.5"/>
                <line x1="11" y1="56" x2="53" y2="56" stroke="#64748b" stroke-width="1.5"/>
                <circle cx="32" cy="56" r="4.5" fill="#fde047"/>
                ${bL ? `<text x="32" y="61" fill="#fde047" font-size="14" font-weight="900" font-family="monospace" text-anchor="middle">${bL}</text>` : ''}
              </g>

              <!-- Roda Kanan (Bisa Diklik untuk Menghitung Roda!) -->
              <g style="cursor: pointer;" onclick="ihsToggleCountItem('${q.id}', '${wRightKey}')">
                <circle cx="108" cy="56" r="21" fill="${bR ? 'rgba(16, 185, 129, 0.35)' : 'rgba(15,23,42,0.8)'}" stroke="${bR ? '#fde047' : '#e2e8f0'}" stroke-width="4.5"/>
                <line x1="108" y1="35" x2="108" y2="77" stroke="#64748b" stroke-width="1.5"/>
                <line x1="87" y1="56" x2="129" y2="56" stroke="#64748b" stroke-width="1.5"/>
                <circle cx="108" cy="56" r="4.5" fill="#fde047"/>
                ${bR ? `<text x="108" y="61" fill="#fde047" font-size="14" font-weight="900" font-family="monospace" text-anchor="middle">${bR}</text>` : ''}
              </g>

              <!-- Rangka Sepeda -->
              <polyline points="32,56 58,26 94,26 66,56 32,56" fill="none" stroke="${col}" stroke-width="4.5" stroke-linejoin="round"/>
              <line x1="94" y1="26" x2="108" y2="56" stroke="${col}" stroke-width="4.5"/>
              <!-- Stang & Sadel -->
              <line x1="86" y1="15" x2="100" y2="15" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
              <line x1="94" y1="15" x2="94" y2="26" stroke="#ffffff" stroke-width="3.5"/>
              <line x1="49" y1="18" x2="65" y2="18" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round"/>
              <line x1="58" y1="18" x2="58" y2="26" stroke="#ffffff" stroke-width="3.5"/>
            </svg>
          </div>
        `;
      }

      return `
        <div style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.14), rgba(15, 23, 42, 0.96)); border: 2px solid #38bdf8; border-radius: 18px; padding: 18px; margin: 14px 0;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
            <span style="font-size: 0.8rem; font-weight: 700; color: #7dd3fc;">
              💡 Klik roda-roda sepeda di bawah untuk menghitung jumlah roda secara interaktif!
            </span>
            ${totalCountedB > 0 ? `<button type="button" onclick="ihsResetCountItems('${q.id}')" style="background: rgba(148,163,184,0.2); color: #e2e8f0; border: 1px solid rgba(148,163,184,0.4); border-radius: 8px; padding: 4px 10px; font-size: 0.74rem; cursor: pointer;">🔄 Reset Hitungan Roda (${totalCountedB})</button>` : ''}
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(165px, 1fr)); gap: 14px;">
            ${bikesHtml}
          </div>
        </div>
      `;
    }

    // -------------------------------------------------------------------------
    // 16. BOOK PAGE 60 NO. 3: 4 KOTAK KRAYON BERISI 10 KRAYON WARNA-WARNI (40 CRAYONS)
    // -------------------------------------------------------------------------
    if (vc.kind === 'svg_story_crayon_boxes') {
      var crayonPalette = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#10b981', '#06b6d4', '#3b82f6', '#6366f1', '#a855f7', '#ec4899'];
      var cBoxesHtml = '';

      for (var bx = 0; bx < vc.boxes; bx++) {
        var crayonsSvg = '';
        for (var cr = 0; cr < vc.crayonsPerBox; cr++) {
          var xPos = 16 + cr * 16;
          var cCol = crayonPalette[cr % crayonPalette.length];
          crayonsSvg += `
            <g>
              <!-- Ujung Runcing & Batang Krayon -->
              <polygon points="${xPos + 6},12 ${xPos + 1},26 ${xPos + 11},26" fill="${cCol}"/>
              <rect x="${xPos + 1}" y="26" width="10" height="44" fill="${cCol}" stroke="#0f172a" stroke-width="1"/>
              <rect x="${xPos + 1}" y="32" width="10" height="6" fill="rgba(255,255,255,0.45)"/>
            </g>
          `;
        }

        cBoxesHtml += `
          <div style="background: rgba(15, 23, 42, 0.92); border: 2.5px solid #a855f7; border-radius: 18px; padding: 14px; text-align: center;">
            <svg viewBox="0 0 184 115" style="width: 100%; max-width: 210px; height: auto;">
              <!-- Tutup Belakang Kotak Krayon -->
              <rect x="10" y="6" width="164" height="70" rx="6" fill="#1e1b4b" stroke="#a855f7" stroke-width="2"/>
              <!-- 10 Krayon Berjajar Rapi di Dalam Kotak -->
              ${crayonsSvg}
              <!-- Badan Depan Kotak Krayon -->
              <rect x="8" y="54" width="168" height="54" rx="8" fill="#fef08a" stroke="#ca8a04" stroke-width="2.5"/>
              <path d="M8 70 Q92 88 176 70" fill="none" stroke="#e11d48" stroke-width="4"/>
              <text x="92" y="96" fill="#1e293b" font-size="14" font-weight="900" font-family="sans-serif" text-anchor="middle">CRAYONS</text>
            </svg>
          </div>
        `;
      }

      return `
        <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.14), rgba(15, 23, 42, 0.96)); border: 2px solid #a855f7; border-radius: 18px; padding: 18px; margin: 14px 0;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 16px;">
            ${cBoxesHtml}
          </div>
        </div>
      `;
    }

    // -------------------------------------------------------------------------
    // 17. BOOK PAGE 60 NO. 4: 6 POT BUNGA DENGAN 5 BUNGA MEKAR PER POT (30 FLOWERS)
    // -------------------------------------------------------------------------
    if (vc.kind === 'svg_story_flower_pots') {
      var cMapF = (st.countedItems && st.countedItems[q.id]) || {};
      var totalCountedF = Object.keys(cMapF).length;
      var flowerCoords = [
        { x: 35, y: 42 },
        { x: 62, y: 24 },
        { x: 90, y: 18 },
        { x: 118, y: 26 },
        { x: 142, y: 44 }
      ];
      var potsHtml = '';

      for (var pt = 0; pt < vc.pots; pt++) {
        var bloomsSvg = '';
        for (var fl = 0; fl < vc.flowersPerPot; fl++) {
          var fc = flowerCoords[fl];
          var fKey = 'pot' + pt + '_fl' + fl;
          var fBadge = cMapF[fKey];
          bloomsSvg += `
            <g style="cursor: pointer;" onclick="ihsToggleCountItem('${q.id}', '${fKey}')">
              <!-- Tangkai Hijau ke Pot -->
              <path d="M 90 95 Q ${fc.x} 70 ${fc.x} ${fc.y}" fill="none" stroke="#22c55e" stroke-width="3.5" stroke-linecap="round"/>
              <!-- Kelopak Bunga -->
              <circle cx="${fc.x}" cy="${fc.y - 8}" r="6" fill="#f472b6"/>
              <circle cx="${fc.x + 8}" cy="${fc.y - 2}" r="6" fill="#f472b6"/>
              <circle cx="${fc.x + 5}" cy="${fc.y + 7}" r="6" fill="#f472b6"/>
              <circle cx="${fc.x - 5}" cy="${fc.y + 7}" r="6" fill="#f472b6"/>
              <circle cx="${fc.x - 8}" cy="${fc.y - 2}" r="6" fill="#f472b6"/>
              <circle cx="${fc.x}" cy="${fc.y}" r="5.5" fill="${fBadge ? '#10b981' : '#fde047'}" stroke="#0f172a" stroke-width="1.5"/>
              ${fBadge ? `<text x="${fc.x}" y="${fc.y + 4}" fill="#0f172a" font-size="10" font-weight="900" font-family="monospace" text-anchor="middle">${fBadge}</text>` : ''}
            </g>
          `;
        }

        potsHtml += `
          <div style="background: rgba(15, 23, 42, 0.92); border: 2.5px solid #ec4899; border-radius: 18px; padding: 12px; text-align: center;">
            <svg viewBox="0 0 180 150" style="width: 100%; max-width: 175px; height: auto;">
              ${bloomsSvg}
              <!-- Daun Hijau -->
              <ellipse cx="68" cy="82" rx="14" ry="6" transform="rotate(-25 68 82)" fill="#16a34a"/>
              <ellipse cx="112" cy="82" rx="14" ry="6" transform="rotate(25 112 82)" fill="#16a34a"/>
              <!-- Pot Terakota Cokelat-Oranye -->
              <rect x="46" y="92" width="88" height="12" rx="4" fill="#ea580c" stroke="#9a3412" stroke-width="2"/>
              <polygon points="52,104 128,104 116,144 64,144" fill="#c2410c" stroke="#9a3412" stroke-width="2"/>
            </svg>
          </div>
        `;
      }

      return `
        <div style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.14), rgba(15, 23, 42, 0.96)); border: 2px solid #ec4899; border-radius: 18px; padding: 18px; margin: 14px 0;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
            <span style="font-size: 0.8rem; font-weight: 700; color: #fbcfe8;">
              💡 Klik kuntum bunga pada pot untuk menghitung jumlah bunga satu per satu!
            </span>
            ${totalCountedF > 0 ? `<button type="button" onclick="ihsResetCountItems('${q.id}')" style="background: rgba(148,163,184,0.2); color: #e2e8f0; border: 1px solid rgba(148,163,184,0.4); border-radius: 8px; padding: 4px 10px; font-size: 0.74rem; cursor: pointer;">🔄 Reset Hitungan (${totalCountedF})</button>` : ''}
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(175px, 1fr)); gap: 14px;">
            ${potsHtml}
          </div>
        </div>
      `;
    }

    // -------------------------------------------------------------------------
    // 18. BOOK PAGE 60 NO. 5: 5 KARTON TELUR 2x3 BERISI 6 TELUR PER KARTON (30 EGGS)
    // -------------------------------------------------------------------------
    if (vc.kind === 'svg_story_egg_cartons') {
      var cMapE = (st.countedItems && st.countedItems[q.id]) || {};
      var totalCountedE = Object.keys(cMapE).length;
      var cartonsHtml = '';

      for (var ct = 0; ct < vc.cartons; ct++) {
        var eggsHtml = '';
        for (var eg = 0; eg < vc.eggsPerCarton; eg++) {
          var eKey = 'ct' + ct + '_eg' + eg;
          var eBadge = cMapE[eKey];
          eggsHtml += `
            <div onclick="ihsToggleCountItem('${q.id}', '${eKey}')"
                 style="position: relative; cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 4px; background: rgba(0,0,0,0.3); border-radius: 10px; border: 1.5px solid ${eBadge ? '#fde047' : 'rgba(255,255,255,0.12)'};">
              <svg viewBox="0 0 38 46" style="width: 34px; height: 42px;">
                <ellipse cx="19" cy="25" rx="13" ry="16" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
                <ellipse cx="15" cy="19" rx="4" ry="6" fill="#ffffff" opacity="0.7"/>
              </svg>
              ${eBadge ? `<span style="position: absolute; top: -5px; right: -5px; background: #10b981; color: #0f172a; font-size: 0.72rem; font-weight: 900; padding: 1px 6px; border-radius: 999px; border: 1.5px solid #fff;">${eBadge}</span>` : ''}
            </div>
          `;
        }

        cartonsHtml += `
          <div style="background: linear-gradient(180deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.98)); border: 2.5px solid #eab308; border-bottom: 7px solid #ca8a04; border-radius: 16px; padding: 14px; text-align: center;">
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; padding: 8px; background: rgba(234, 179, 8, 0.12); border-radius: 12px; border: 1.5px solid rgba(234, 179, 8, 0.35);">
              ${eggsHtml}
            </div>
          </div>
        `;
      }

      return `
        <div style="background: linear-gradient(135deg, rgba(234, 179, 8, 0.14), rgba(15, 23, 42, 0.96)); border: 2px solid #eab308; border-radius: 18px; padding: 18px; margin: 14px 0;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
            <span style="font-size: 0.8rem; font-weight: 700; color: #fef08a;">
              💡 Klik butir telur di dalam wadah karton untuk menghitungnya satu per satu!
            </span>
            ${totalCountedE > 0 ? `<button type="button" onclick="ihsResetCountItems('${q.id}')" style="background: rgba(148,163,184,0.2); color: #e2e8f0; border: 1px solid rgba(148,163,184,0.4); border-radius: 8px; padding: 4px 10px; font-size: 0.74rem; cursor: pointer;">🔄 Reset Hitungan (${totalCountedE})</button>` : ''}
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(185px, 1fr)); gap: 14px;">
            ${cartonsHtml}
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
  window.getAllIhsaniyahRecords = window.getIhsaniyahRecords;

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
  window.downloadIhsaniyahCSV = window.exportIhsaniyahCSV;

})();
