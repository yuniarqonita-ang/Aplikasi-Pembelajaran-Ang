// ==============================================================================
// 🎒 YAYASAN PERGURUAN IHSANIYAH - SD IHSANIYAH GAJAHMADA TEGAL
// Kampus Al Hafidz • MATH FORMATIVE TEST 2 & CAMBRIDGE PRIMARY DIVISION
// 27 Soal Lengkap dengan Visual Interaktif Buatan Sendiri (100% Tanpa Spoiler/Bocoran Jawaban!)
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
      title: 'Part II — Question 3',
      badge: 'Part II • True or False (✓)',
      instruction: 'II. Put a check mark (✓) in the "True" column if the statement is true, or in the "False" column if the statement is false!\nLook at the subtraction diagram using the "making 10" technique:',
      visualConfig: {
        kind: 'number_bond_making10_sub'
      },
      statements: [
        { id: 's3_a', text: 'The value of "a" is 2', correctAnswer: true },
        { id: 's3_b', text: 'The value of "b" is 452', correctAnswer: true },
        { id: 's3_c', text: 'The value of "c" is 454', correctAnswer: true }
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
      instruction: 'Yuri is subtracting numbers. Her work is shown below.\nNow, you need to see her job and write the correct calculation in the H T O boxes below:',
      visualConfig: {
        kind: 'yuri_detective_card'
      },
      boxes: [
        { id: 'b4_h', label: 'Correct digit in Column H (Hundreds):', placeholder: '...', expected: ['3'] },
        { id: 'b4_t', label: 'Correct digit in Column T (Tens):', placeholder: '...', expected: ['6'] },
        { id: 'b4_o', label: 'Correct digit in Column O (Ones):', placeholder: '...', expected: ['9'] },
        { id: 'b4_total', label: 'Correct Result of 527 – 158:', placeholder: '...', expected: ['369'] }
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
        kind: 'equal_sharing_containers',
        groupCount: 2,
        itemsPerGroup: 8,
        itemEmoji: '🔑',
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
      title: 'Book Page 55 — No. 1(b)',
      badge: 'Unit 5 • Book Page 55 • No. 1(b)',
      instruction: '1(b) Divide 18 mice equally into 3 groups.',
      visualConfig: {
        kind: 'equal_sharing_containers',
        groupCount: 3,
        itemsPerGroup: 6,
        itemEmoji: '🐭',
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
      title: 'Book Page 55 — No. 1(c)',
      badge: 'Unit 5 • Book Page 55 • No. 1(c)',
      instruction: '1(c) Divide 25 chicks equally into 5 groups.',
      visualConfig: {
        kind: 'equal_sharing_containers',
        groupCount: 5,
        itemsPerGroup: 5,
        itemEmoji: '🐥',
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
      title: 'Book Page 56 — No. 2(a)',
      badge: 'Unit 5 • Book Page 56 • No. 2(a)',
      instruction: '2. Draw / place the objects to solve the division stories below. Then, write the division sentences.\n(a) Siska has 12 glasses. She puts the glasses equally onto 4 trays.',
      visualConfig: {
        kind: 'manual_tray_distributor',
        totalItems: 12,
        groupCount: 4,
        itemEmoji: '🍹',
        containerIcon: '🍽️',
        containerName: 'Tray',
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
      title: 'Book Page 56 — No. 2(b)',
      badge: 'Unit 5 • Book Page 56 • No. 2(b)',
      instruction: '2(b) There are 15 rambutans. Ida puts the rambutans equally into 3 bowls.',
      visualConfig: {
        kind: 'manual_tray_distributor',
        totalItems: 15,
        groupCount: 3,
        itemEmoji: '🍓',
        containerIcon: '🥣',
        containerName: 'Bowl',
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
      title: 'Book Page 57 — No. 1(a)',
      badge: 'Unit 5 • Book Page 57 • No. 1(a)',
      instruction: '1. Circle on the pictures to divide. Then, write the division sentences.\n(a) Divide 24 matches into some groups. Each group has 3 matches.',
      visualConfig: {
        kind: 'individual_items_grid',
        totalItems: 24,
        itemEmoji: '🔥',
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
        kind: 'individual_items_grid',
        totalItems: 18,
        itemEmoji: '🍐',
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
        kind: 'individual_items_grid',
        totalItems: 9,
        itemEmoji: '🍟',
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
        kind: 'individual_items_grid',
        totalItems: 20,
        itemEmoji: '🧑‍🌾',
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
        kind: 'individual_items_grid',
        totalItems: 30,
        itemEmoji: '🍪',
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
      instruction: 'Make division stories based on the picture below:',
      visualConfig: {
        kind: 'story_diorama_containers',
        groupCount: 4,
        itemsPerGroup: 3,
        itemEmoji: '🍒',
        containerIcon: '🍽️',
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
      title: 'Book Page 59 — No. 2',
      badge: 'Unit 5 • Book Page 59 • No. 2',
      instruction: 'Make division stories based on the picture below:',
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
      instruction: 'Make division stories based on the picture below:',
      visualConfig: {
        kind: 'story_diorama_containers',
        groupCount: 4,
        itemsPerGroup: 10,
        itemEmoji: '🖍️',
        containerIcon: '🎨',
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
      title: 'Book Page 60 — No. 4',
      badge: 'Unit 5 • Book Page 60 • No. 4',
      instruction: 'Make division stories based on the picture below:',
      visualConfig: {
        kind: 'story_diorama_containers',
        groupCount: 6,
        itemsPerGroup: 5,
        itemEmoji: '🌸',
        containerIcon: '🪴',
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
      title: 'Book Page 60 — No. 5',
      badge: 'Unit 5 • Book Page 60 • No. 5',
      instruction: 'Make division stories based on the picture below:',
      visualConfig: {
        kind: 'story_diorama_containers',
        groupCount: 5,
        itemsPerGroup: 6,
        itemEmoji: '🥚',
        containerIcon: '🧺',
        accentColor: '#eab308'
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
  // ENGINE VISUAL INTERAKTIF BUATAN SENDIRI (100% TANPA BOCORAN JAWABAN!)
  // ==============================================================================
  window.ihsVisualState = window.ihsVisualState || {
    frogIndex: 0,
    trayCounts: {},       // qid -> [countTray0, countTray1, ...]
    itemMarks: {},        // qid -> { itemIdx: colorIndex }
    activeMarkerColor: 0,
    grid100Tool: 'circle2',
    grid100Marks: {}      // num -> { c2: bool, b5: bool, t10: bool }
  };

  var MARKER_COLORS = ['#38bdf8', '#10b981', '#f59e0b', '#a855f7', '#f43f5e', '#ec4899', '#eab308', '#06b6d4', '#84cc16'];

  window.ihsSetFrogStone = function(idx) {
    window.ihsVisualState.frogIndex = idx;
    if (window.sfx && sfx.playClick) sfx.playClick();
    if (typeof window.renderIhsaniyahTest === 'function') window.renderIhsaniyahTest();
  };

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

  // Renderer Utama Visual Kustom Unik (Tanpa Bocoran Jawaban!)
  window.renderIhsaniyahCustomVisual = function(q) {
    if (!q || !q.visualConfig) return '';
    var vc = q.visualConfig;
    var st = window.ihsVisualState;

    // 1. NUMBER LINE STEPPING STONES (No. 1 — Tanpa Petunjuk +10 / -20!)
    if (vc.kind === 'number_line_jumps') {
      var activeIdx = st.frogIndex || 0;
      return `
        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.14), rgba(15, 23, 42, 0.95)); border: 2px solid #10b981; border-radius: 16px; padding: 18px; margin: 14px 0;">
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; overflow-x: auto; padding: 16px 10px; background: rgba(15, 23, 42, 0.85); border-radius: 14px; border: 1px solid rgba(52, 211, 153, 0.3);">
            ${vc.numbers.map(function(num, idx) {
              var isFrogHere = (idx === activeIdx);
              return `
                <div style="display: flex; align-items: center; flex: 1; min-width: 78px;">
                  <div onclick="ihsSetFrogStone(${idx})" style="flex: 1; text-align: center; padding: 14px 8px; border-radius: 14px; cursor: pointer; transition: all 0.2s; background: ${isFrogHere ? 'linear-gradient(135deg, #10b981, #059669)' : 'rgba(30, 41, 59, 0.95)'}; border: 2.5px solid ${isFrogHere ? '#fde047' : '#38bdf8'};">
                    <div style="font-size: 1.25rem; font-weight: 900; color: #ffffff; font-family: monospace;">${num}</div>
                  </div>
                  ${idx < vc.numbers.length - 1 ? `
                    <div style="padding: 0 6px; color: #38bdf8; font-weight: 900; font-size: 1.1rem;">➔</div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    // 2. H-T-O MYSTERY ADDITION GRID (No. 2 — Tanpa Bocoran Rumus!)
    if (vc.kind === 'hto_mystery_grid') {
      var renderCell = function(c) {
        if (c.isMystery) {
          return `<td style="width: 76px; height: 60px; text-align: center; font-size: 1.45rem; font-weight: 900; font-family: monospace; background: rgba(255,255,255,0.08); border: 2.5px dashed ${c.color}; color: ${c.color}; border-radius: 10px;">${c.val}</td>`;
        }
        return `<td style="width: 76px; height: 60px; text-align: center; font-size: 1.45rem; font-weight: 900; font-family: monospace; background: rgba(15, 23, 42, 0.9); border: 2px solid rgba(148, 163, 184, 0.35); color: #ffffff; border-radius: 10px;">${c.val}</td>`;
      };
      return `
        <div style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.12), rgba(15, 23, 42, 0.95)); border: 2px solid #38bdf8; border-radius: 16px; padding: 20px; margin: 14px 0; text-align: center;">
          <div style="display: inline-block; background: rgba(2, 6, 23, 0.75); padding: 18px 24px; border-radius: 16px; border: 2px solid rgba(56, 189, 248, 0.4);">
            <table style="border-collapse: separate; border-spacing: 8px;">
              <thead>
                <tr>
                  <th style="background: #7c3aed; color: #fff; padding: 6px 14px; border-radius: 8px; font-size: 0.85rem;">H</th>
                  <th style="background: #0284c7; color: #fff; padding: 6px 14px; border-radius: 8px; font-size: 0.85rem;">T</th>
                  <th style="background: #d97706; color: #fff; padding: 6px 14px; border-radius: 8px; font-size: 0.85rem;">O</th>
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
        </div>
      `;
    }

    // 3. MAKING 10 SUBTRACTION DIAGRAM (No. 3: 462 - 8 = c)
    if (vc.kind === 'number_bond_making10_sub') {
      return `
        <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.14), rgba(15, 23, 42, 0.96)); border: 2px solid #a855f7; border-radius: 16px; padding: 20px; margin: 14px 0; text-align: center;">
          <svg viewBox="0 0 560 220" style="max-width: 540px; width: 100%; height: auto; background: rgba(2, 6, 23, 0.65); border-radius: 14px; border: 1px solid rgba(168, 85, 247, 0.35);">
            <line x1="170" y1="55" x2="105" y2="135" stroke="#38bdf8" stroke-width="3.5" />
            <line x1="190" y1="55" x2="255" y2="135" stroke="#f59e0b" stroke-width="3.5" />
            <path d="M 292 145 L 340 60" fill="none" stroke="#10b981" stroke-width="2.5" stroke-dasharray="5,4" />
            <line x1="355" y1="60" x2="420" y2="135" stroke="#10b981" stroke-width="3" />

            <rect x="115" y="18" width="130" height="42" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
            <text x="180" y="45" fill="#ffffff" font-size="20" font-weight="900" font-family="monospace" text-anchor="middle">462</text>

            <text x="275" y="45" fill="#f87171" font-size="22" font-weight="900" font-family="monospace" text-anchor="middle">–</text>

            <rect x="305" y="18" width="65" height="42" rx="10" fill="#1e293b" stroke="#f87171" stroke-width="2.5"/>
            <text x="337" y="45" fill="#ffffff" font-size="20" font-weight="900" font-family="monospace" text-anchor="middle">8</text>

            <text x="395" y="45" fill="#38bdf8" font-size="22" font-weight="900" font-family="monospace" text-anchor="middle">=</text>

            <rect x="420" y="18" width="75" height="42" rx="10" fill="#064e3b" stroke="#10b981" stroke-width="2.5"/>
            <text x="457" y="45" fill="#4ade80" font-size="20" font-weight="900" font-family="monospace" text-anchor="middle">c</text>

            <circle cx="100" cy="155" r="32" fill="#1e1b4b" stroke="#38bdf8" stroke-width="3"/>
            <text x="100" y="162" fill="#38bdf8" font-size="20" font-weight="900" font-family="monospace" text-anchor="middle">b</text>

            <circle cx="260" cy="155" r="32" fill="#451a03" stroke="#f59e0b" stroke-width="3"/>
            <text x="260" y="162" fill="#fde047" font-size="20" font-weight="900" font-family="monospace" text-anchor="middle">10</text>

            <circle cx="430" cy="155" r="30" fill="#064e3b" stroke="#10b981" stroke-width="3"/>
            <text x="430" y="162" fill="#4ade80" font-size="20" font-weight="900" font-family="monospace" text-anchor="middle">a</text>
          </svg>
        </div>
      `;
    }

    // 4. YURI'S SUBTRACTION WORK CARD (No. 4 — Tanpa Bocoran Jawaban!)
    if (vc.kind === 'yuri_detective_card') {
      return `
        <div style="background: linear-gradient(135deg, rgba(244, 63, 94, 0.12), rgba(15, 23, 42, 0.96)); border: 2px solid #f43f5e; border-radius: 16px; padding: 20px; margin: 14px 0; display: flex; flex-wrap: wrap; justify-content: center; gap: 28px; align-items: center;">
          <!-- Catatan Yuri -->
          <div style="background: #fffbeb; color: #1e293b; padding: 16px 24px; border-radius: 14px; border: 3px dashed #f43f5e; text-align: center;">
            <div style="font-size: 0.78rem; font-weight: 900; color: #e11d48; text-transform: uppercase; margin-bottom: 8px;">
              📓 Yuri's Work:
            </div>
            <div style="display: inline-block; font-family: monospace; font-size: 1.55rem; font-weight: 900; text-align: right; line-height: 1.4; padding: 8px 18px; background: #ffffff; border-radius: 10px; border: 1.5px solid #cbd5e1;">
              <div style="letter-spacing: 12px; color: #64748b; font-size: 0.9rem; border-bottom: 1px solid #e2e8f0; margin-bottom: 4px;">H T O</div>
              <div style="letter-spacing: 10px; color: #0f172a;">5 2 7</div>
              <div style="letter-spacing: 10px; color: #0f172a; border-bottom: 3px solid #0f172a;">1 5 8 –</div>
              <div style="letter-spacing: 10px; color: #e11d48;">4 3 1</div>
            </div>
          </div>

          <!-- Papan Kosong untuk Perbaikan Siswa -->
          <div style="background: rgba(2, 6, 23, 0.85); padding: 16px 24px; border-radius: 16px; border: 2px solid #38bdf8; text-align: center;">
            <div style="font-size: 0.78rem; font-weight: 900; color: #38bdf8; text-transform: uppercase; margin-bottom: 8px;">
              ✏️ Your Job (Correction):
            </div>
            <table style="border-collapse: separate; border-spacing: 6px; font-family: monospace; font-size: 1.4rem; font-weight: 900;">
              <thead>
                <tr>
                  <th style="background: #7c3aed; color: #fff; padding: 4px 12px; border-radius: 6px; font-size: 0.8rem;">H</th>
                  <th style="background: #0284c7; color: #fff; padding: 4px 12px; border-radius: 6px; font-size: 0.8rem;">T</th>
                  <th style="background: #d97706; color: #fff; padding: 4px 12px; border-radius: 6px; font-size: 0.8rem;">O</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="width: 52px; height: 44px; background: #1e293b; color: #fff; border-radius: 8px;">5</td>
                  <td style="width: 52px; height: 44px; background: #1e293b; color: #fff; border-radius: 8px;">2</td>
                  <td style="width: 52px; height: 44px; background: #1e293b; color: #fff; border-radius: 8px;">7</td>
                  <td></td>
                </tr>
                <tr>
                  <td style="width: 52px; height: 44px; background: #1e293b; color: #fff; border-radius: 8px;">1</td>
                  <td style="width: 52px; height: 44px; background: #1e293b; color: #fff; border-radius: 8px;">5</td>
                  <td style="width: 52px; height: 44px; background: #1e293b; color: #fff; border-radius: 8px;">8</td>
                  <td style="color: #f87171; padding-left: 4px;">–</td>
                </tr>
                <tr><td colspan="4" style="border-bottom: 2.5px solid #38bdf8;"></td></tr>
                <tr>
                  <td style="width: 52px; height: 44px; border: 2px dashed #a855f7; color: #d8b4fe; border-radius: 8px;">?</td>
                  <td style="width: 52px; height: 44px; border: 2px dashed #38bdf8; color: #7dd3fc; border-radius: 8px;">?</td>
                  <td style="width: 52px; height: 44px; border: 2px dashed #f59e0b; color: #fde047; border-radius: 8px;">?</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    // 5. INCOMPLETE SUBTRACTION 500 - 14[?] = 3[?]4 (No. 5)
    if (vc.kind === 'hto_puzzle_500') {
      return `
        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.14), rgba(15, 23, 42, 0.96)); border: 2px solid #f59e0b; border-radius: 16px; padding: 20px; margin: 14px 0; text-align: center;">
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
                  <td style="width: 64px; height: 54px; background: rgba(56, 189, 248, 0.2); border: 2.5px dashed #38bdf8; color: #38bdf8; border-radius: 10px;">[ … ]</td>
                  <td style="color: #f87171; font-size: 1.7rem; padding-left: 6px;">–</td>
                </tr>
                <tr>
                  <td colspan="4" style="border-bottom: 3px solid #fde047; height: 4px;"></td>
                </tr>
                <tr>
                  <td style="width: 64px; height: 54px; background: #1e293b; color: #fff; border-radius: 10px;">3</td>
                  <td style="width: 64px; height: 54px; background: rgba(16, 185, 129, 0.2); border: 2.5px dashed #10b981; color: #4ade80; border-radius: 10px;">[ … ]</td>
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
          <svg viewBox="0 0 520 200" style="max-width: 500px; width: 100%; height: auto; background: rgba(2, 6, 23, 0.7); border-radius: 14px; border: 1px solid rgba(16, 185, 129, 0.35);">
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

            <circle cx="370" cy="150" r="28" fill="#064e3b" stroke="#fde047" stroke-width="3"/>
            <text x="370" y="157" fill="#fde047" font-size="19" font-weight="900" font-family="monospace" text-anchor="middle">10</text>
          </svg>
        </div>
      `;
    }

    // 7. H-T-O WORKOUT CARD (No. 7: 297 + 358 & No. 9: 800 - 697)
    if (vc.kind === 'hto_workout_card') {
      return `
        <div style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.14), rgba(15, 23, 42, 0.96)); border: 2px solid #38bdf8; border-radius: 16px; padding: 20px; margin: 14px 0; text-align: center;">
          <div style="display: inline-block; background: rgba(2, 6, 23, 0.85); padding: 16px 28px; border-radius: 16px; border: 2px solid rgba(56, 189, 248, 0.4);">
            <table style="border-collapse: separate; border-spacing: 8px; font-family: monospace; font-size: 1.5rem; font-weight: 900;">
              <thead>
                <tr>
                  <th style="background: #7c3aed; color: #fff; padding: 6px 16px; border-radius: 8px; font-size: 0.85rem;">H</th>
                  <th style="background: #0284c7; color: #fff; padding: 6px 16px; border-radius: 8px; font-size: 0.85rem;">T</th>
                  <th style="background: #d97706; color: #fff; padding: 6px 16px; border-radius: 8px; font-size: 0.85rem;">O</th>
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
                  <td style="width: 72px; height: 54px; background: rgba(124, 58, 237, 0.2); border: 2px dashed #a855f7; color: #d8b4fe; border-radius: 10px;">…</td>
                  <td style="width: 72px; height: 54px; background: rgba(2, 132, 199, 0.2); border: 2px dashed #38bdf8; color: #7dd3fc; border-radius: 10px;">…</td>
                  <td style="width: 72px; height: 54px; background: rgba(217, 119, 6, 0.2); border: 2px dashed #f59e0b; color: #fde047; border-radius: 10px;">…</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    // 8. NUMBER BOND 597 + 98 (No. 8 — Tanpa Bocoran!)
    if (vc.kind === 'number_bond_597') {
      return `
        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.14), rgba(15, 23, 42, 0.96)); border: 2px solid #f59e0b; border-radius: 16px; padding: 18px; margin: 14px 0; text-align: center;">
          <svg viewBox="0 0 520 200" style="max-width: 500px; width: 100%; height: auto; background: rgba(2, 6, 23, 0.7); border-radius: 14px; border: 1px solid rgba(245, 158, 11, 0.35);">
            <line x1="175" y1="55" x2="110" y2="130" stroke="#38bdf8" stroke-width="3.5"/>
            <line x1="195" y1="55" x2="255" y2="130" stroke="#f59e0b" stroke-width="3.5"/>
            <line x1="345" y1="55" x2="275" y2="130" stroke="#f59e0b" stroke-width="3.5" stroke-dasharray="5,4"/>

            <rect x="130" y="18" width="110" height="42" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
            <text x="185" y="45" fill="#fff" font-size="22" font-weight="900" font-family="monospace" text-anchor="middle">597</text>

            <text x="275" y="45" fill="#fde047" font-size="24" font-weight="900" text-anchor="middle">+</text>

            <rect x="305" y="18" width="80" height="42" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2.5"/>
            <text x="345" y="45" fill="#fff" font-size="22" font-weight="900" font-family="monospace" text-anchor="middle">98</text>

            <circle cx="105" cy="152" r="34" fill="#0f172a" stroke="#38bdf8" stroke-width="3" stroke-dasharray="5,3"/>
            <text x="105" y="158" fill="#38bdf8" font-size="18" font-weight="900" font-family="monospace" text-anchor="middle">①</text>

            <circle cx="255" cy="152" r="30" fill="#451a03" stroke="#f59e0b" stroke-width="3" stroke-dasharray="5,3"/>
            <text x="255" y="158" fill="#fde047" font-size="18" font-weight="900" font-family="monospace" text-anchor="middle">②</text>

            <circle cx="375" cy="152" r="30" fill="#451a03" stroke="#fde047" stroke-width="2.5"/>
            <text x="375" y="158" fill="#ffffff" font-size="18" font-weight="900" font-family="monospace" text-anchor="middle">100</text>
          </svg>
        </div>
      `;
    }

    // 9. NUMBER BOND 749 - 70 (No. 10 — Tanpa Bocoran!)
    if (vc.kind === 'number_bond_749') {
      return `
        <div style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.14), rgba(15, 23, 42, 0.96)); border: 2px solid #38bdf8; border-radius: 16px; padding: 18px; margin: 14px 0; text-align: center;">
          <svg viewBox="0 0 520 200" style="max-width: 500px; width: 100%; height: auto; background: rgba(2, 6, 23, 0.7); border-radius: 14px; border: 1px solid rgba(56, 189, 248, 0.35);">
            <line x1="175" y1="55" x2="110" y2="130" stroke="#38bdf8" stroke-width="3.5"/>
            <line x1="195" y1="55" x2="255" y2="130" stroke="#10b981" stroke-width="3.5"/>
            <line x1="345" y1="55" x2="275" y2="130" stroke="#f43f5e" stroke-width="3.5" stroke-dasharray="5,4"/>

            <rect x="130" y="18" width="110" height="42" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
            <text x="185" y="45" fill="#fff" font-size="22" font-weight="900" font-family="monospace" text-anchor="middle">749</text>

            <text x="275" y="45" fill="#f87171" font-size="24" font-weight="900" text-anchor="middle">–</text>

            <rect x="305" y="18" width="80" height="42" rx="10" fill="#1e293b" stroke="#f43f5e" stroke-width="2.5"/>
            <text x="345" y="45" fill="#fff" font-size="22" font-weight="900" font-family="monospace" text-anchor="middle">70</text>

            <circle cx="105" cy="152" r="34" fill="#0f172a" stroke="#38bdf8" stroke-width="3" stroke-dasharray="5,3"/>
            <text x="105" y="158" fill="#38bdf8" font-size="18" font-weight="900" font-family="monospace" text-anchor="middle">①</text>

            <circle cx="255" cy="152" r="32" fill="#064e3b" stroke="#10b981" stroke-width="3"/>
            <text x="255" y="158" fill="#4ade80" font-size="19" font-weight="900" font-family="monospace" text-anchor="middle">100</text>

            <circle cx="380" cy="152" r="32" fill="#064e3b" stroke="#fde047" stroke-width="3" stroke-dasharray="5,3"/>
            <text x="380" y="158" fill="#fde047" font-size="18" font-weight="900" font-family="monospace" text-anchor="middle">②</text>
          </svg>
        </div>
      `;
    }

    // 10. EQUAL SHARING & STORY DIORAMA CONTAINERS (No. 11-13 & No. 21, 23, 24, 25 — TANPA TULISAN JUMLAH DI WADAH!)
    if (vc.kind === 'equal_sharing_containers' || vc.kind === 'story_diorama_containers') {
      var groupsHtml = '';
      for (var g = 0; g < vc.groupCount; g++) {
        var itemsHtml = '';
        for (var k = 0; k < vc.itemsPerGroup; k++) {
          itemsHtml += `
            <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; font-size: 1.45rem; background: rgba(255,255,255,0.08); border-radius: 10px; border: 1px solid rgba(255,255,255,0.14);">
              ${vc.itemEmoji}
            </span>
          `;
        }
        groupsHtml += `
          <div style="background: rgba(15, 23, 42, 0.9); border: 2.5px solid ${vc.accentColor}; border-radius: 16px; padding: 14px; text-align: center;">
            <div style="font-size: 1.2rem; margin-bottom: 6px;">${vc.containerIcon || '📦'}</div>
            <div style="display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; padding: 10px; background: rgba(0,0,0,0.35); border-radius: 12px;">
              ${itemsHtml}
            </div>
          </div>
        `;
      }

      return `
        <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95)); border: 2px solid ${vc.accentColor}; border-radius: 16px; padding: 18px; margin: 14px 0;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(195px, 1fr)); gap: 14px;">
            ${groupsHtml}
          </div>
        </div>
      `;
    }

    // 11. MANUAL TRAY/BOWL DISTRIBUTOR (No. 14 & 15 — Siswa Klik Sendiri Wadah untuk Menaruh Benda Satu per Satu!)
    if (vc.kind === 'manual_tray_distributor') {
      var counts = st.trayCounts[q.id] || new Array(vc.groupCount).fill(0);
      var usedTotal = counts.reduce(function(a, b) { return a + b; }, 0);
      var remaining = Math.max(0, vc.totalItems - usedTotal);

      var topPoolHtml = '';
      for (var i = 0; i < vc.totalItems; i++) {
        var isRemaining = i < remaining;
        topPoolHtml += `
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; font-size: 1.45rem; background: ${isRemaining ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.03)'}; opacity: ${isRemaining ? '1' : '0.22'}; border-radius: 10px; border: 1.5px solid ${vc.accentColor};">
            ${vc.itemEmoji}
          </span>
        `;
      }

      var traysHtml = '';
      for (var t = 0; t < vc.groupCount; t++) {
        var cCount = counts[t] || 0;
        var trayItems = '';
        for (var m = 0; m < cCount; m++) {
          trayItems += `<span style="font-size: 1.55rem;">${vc.itemEmoji}</span>`;
        }
        if (cCount === 0) {
          trayItems = `<span style="font-size: 0.78rem; color: #94a3b8;">Klik ${vc.containerName} ini untuk menaruh 1 ${vc.itemEmoji}</span>`;
        }

        traysHtml += `
          <div onclick="ihsAddToTray('${q.id}', ${t}, ${vc.totalItems}, ${vc.groupCount})"
               style="cursor: pointer; background: rgba(15, 23, 42, 0.92); border: 2.5px dashed ${vc.accentColor}; border-radius: 16px; padding: 14px; text-align: center; transition: all 0.2s;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 0.82rem; font-weight: 800; color: #fde047;">${vc.containerIcon} ${vc.containerName}</span>
              ${cCount > 0 ? `<button type="button" onclick="ihsRemoveFromTray(event, '${q.id}', ${t})" style="background: rgba(239,68,68,0.25); color: #fca5a5; border: 1px solid #ef4444; border-radius: 6px; padding: 2px 8px; font-size: 0.72rem; cursor: pointer;">–1</button>` : ''}
            </div>
            <div style="min-height: 56px; display: flex; align-items: center; justify-content: center; gap: 6px; flex-wrap: wrap; background: rgba(0,0,0,0.35); border-radius: 12px; padding: 10px;">
              ${trayItems}
            </div>
          </div>
        `;
      }

      return `
        <div style="background: linear-gradient(135deg, rgba(249, 115, 22, 0.14), rgba(15, 23, 42, 0.96)); border: 2px solid ${vc.accentColor}; border-radius: 16px; padding: 18px; margin: 14px 0;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 10px;">
            <span style="font-size: 0.82rem; font-weight: 700; color: #cbd5e1;">
              💡 Klik masing-masing ${vc.containerName} di bawah untuk memindahkan ${vc.itemEmoji} satu per satu secara merata:
            </span>
            <button type="button" onclick="ihsResetTrays('${q.id}', ${vc.groupCount})" style="background: rgba(148,163,184,0.2); color: #e2e8f0; border: 1px solid rgba(148,163,184,0.4); border-radius: 8px; padding: 5px 12px; font-size: 0.76rem; font-weight: 700; cursor: pointer;">
              🔄 Ulangi Susunan
            </button>
          </div>

          <div style="display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 12px; margin-bottom: 14px;">
            ${topPoolHtml}
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(185px, 1fr)); gap: 12px;">
            ${traysHtml}
          </div>
        </div>
      `;
    }

    // 12. INDIVIDUAL ITEMS GRID (No. 16 - 20 — Siswa Mengelompokkan Sendiri dengan Warna Lingkaran, Tanpa Spoiler Jumlah Kelompok!)
    if (vc.kind === 'individual_items_grid') {
      var marksMap = (st.itemMarks && st.itemMarks[q.id]) || {};
      var activeColIdx = st.activeMarkerColor || 0;

      var colorPaletteHtml = MARKER_COLORS.map(function(cHex, cIdx) {
        var isSel = (cIdx === activeColIdx);
        return `
          <button type="button" onclick="ihsSetMarkerColor(${cIdx})"
                  style="width: 28px; height: 28px; border-radius: 999px; background: ${cHex}; border: ${isSel ? '3px solid #ffffff' : '1px solid rgba(255,255,255,0.3)'}; cursor: pointer; transform: ${isSel ? 'scale(1.15)' : 'scale(1)'};">
          </button>
        `;
      }).join('');

      var itemsGridHtml = '';
      for (var idx = 0; idx < vc.totalItems; idx++) {
        var mColIdx = marksMap[idx];
        var isMarked = (mColIdx !== undefined);
        var mColor = isMarked ? MARKER_COLORS[mColIdx % MARKER_COLORS.length] : 'rgba(148, 163, 184, 0.3)';
        itemsGridHtml += `
          <div onclick="ihsToggleItemMark('${q.id}', ${idx})"
               style="cursor: pointer; height: 58px; display: flex; align-items: center; justify-content: center; font-size: 1.75rem; border-radius: ${isMarked ? '999px' : '12px'}; background: ${isMarked ? mColor + '33' : 'rgba(15, 23, 42, 0.9)'}; border: 3px ${isMarked ? 'solid ' + mColor : 'dashed rgba(148, 163, 184, 0.35)'}; user-select: none; transition: all 0.15s;">
            ${vc.itemEmoji}
          </div>
        `;
      }

      return `
        <div style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95)); border: 2px solid ${vc.accentColor}; border-radius: 16px; padding: 18px; margin: 14px 0;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 14px;">
            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <span style="font-size: 0.8rem; font-weight: 700; color: #cbd5e1;">🎨 Pilih Warna Lingkaran Kelompok:</span>
              ${colorPaletteHtml}
            </div>
            <button type="button" onclick="ihsResetItemMarks('${q.id}')" style="background: rgba(148,163,184,0.2); color: #e2e8f0; border: 1px solid rgba(148,163,184,0.4); border-radius: 8px; padding: 5px 12px; font-size: 0.76rem; font-weight: 700; cursor: pointer;">
              🔄 Hapus Lingkaran
            </button>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(64px, 1fr)); gap: 10px; padding: 14px; background: rgba(0,0,0,0.35); border-radius: 14px;">
            ${itemsGridHtml}
          </div>
        </div>
      `;
    }

    // 13. BICYCLES & WHEELS DIORAMA (No. 22 — Tanpa Tulisan "5 Sepeda • 10 Roda"!)
    if (vc.kind === 'story_diorama_bicycles') {
      var bikesHtml = '';
      var bikeColors = ['#38bdf8', '#10b981', '#f59e0b', '#a855f7', '#f43f5e'];
      for (var b = 0; b < vc.bicycleCount; b++) {
        var col = bikeColors[b % bikeColors.length];
        bikesHtml += `
          <div style="background: rgba(15, 23, 42, 0.92); border: 2px solid ${col}; border-radius: 16px; padding: 14px; text-align: center;">
            <svg viewBox="0 0 120 75" style="width: 110px; height: 68px;">
              <!-- Roda Kiri & Roda Kanan -->
              <circle cx="28" cy="50" r="18" fill="none" stroke="#38bdf8" stroke-width="4"/>
              <circle cx="28" cy="50" r="4" fill="#fde047"/>
              <circle cx="92" cy="50" r="18" fill="none" stroke="#38bdf8" stroke-width="4"/>
              <circle cx="92" cy="50" r="4" fill="#fde047"/>
              <!-- Rangka Sepeda -->
              <polyline points="28,50 52,24 82,24 56,50 28,50" fill="none" stroke="${col}" stroke-width="4" stroke-linejoin="round"/>
              <line x1="82" y1="24" x2="92" y2="50" stroke="${col}" stroke-width="4"/>
              <!-- Stang & Sadel -->
              <line x1="76" y1="14" x2="88" y2="14" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
              <line x1="82" y1="14" x2="82" y2="24" stroke="#ffffff" stroke-width="3.5"/>
              <line x1="44" y1="17" x2="58" y2="17" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
              <line x1="52" y1="17" x2="52" y2="24" stroke="#ffffff" stroke-width="3.5"/>
            </svg>
          </div>
        `;
      }
      return `
        <div style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.14), rgba(15, 23, 42, 0.96)); border: 2px solid #38bdf8; border-radius: 16px; padding: 18px; margin: 14px 0;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(145px, 1fr)); gap: 12px;">
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
