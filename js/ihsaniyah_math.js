// ==============================================================================
// 🎒 YAYASAN PERGURUAN IHSANIYAH - SD IHSANIYAH GAJAHMADA TEGAL
// Kampus Al Hafidz • MATH FORMATIVE TEST 2 & CAMBRIDGE PRIMARY DIVISION
// 27 Soal Lengkap Sesuai Urutan Halaman Resmi PDF (Formative Test + Hal. 55-75)
// Auto-Save Realtime ke Panel Guru (Rekap) & Tanpa Bocoran Pembahasan di Layar Ujian
// ==============================================================================

(function() {
  'use strict';

  // Stacked Mathematical Fractions Formatter (Donald Knuth Math Axis & Collinear Operator Alignment)
  window.formatMathFractions = function(text) {
    if (!text || typeof text !== 'string') return text || '';
    
    // 1. Mixed numbers (e.g., '2 1/2' or '3 3/4')
    var formatted = text.replace(/(^|\s)(\d+)\s+(\d+)\/(\d+)(?=[^\d\/]|$)/g, function(match, prefix, whole, num, den) {
      return prefix + '<span class="math-expr"><span class="math-whole">' + whole + '</span><span class="math-fraction"><span class="num">' + num + '</span><span class="den">' + den + '</span></span></span>';
    });

    // 2. Standalone fractions (e.g., '3/4' or '-5/8')
    formatted = formatted.replace(/(^|[^a-zA-Z0-9_\/])(-?\d+)\/(\d+)(?![a-zA-Z0-9_\/])/g, function(match, prefix, num, den) {
      return prefix + '<span class="math-fraction"><span class="num">' + num + '</span><span class="den">' + den + '</span></span>';
    });

    // 3. Mathematical operators & relations collinear on the Math Axis
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
  // BANK DATA 27 SOAL LENGKAP DARI 10 HALAMAN PDF SD IHSANIYAH (SUDAH DIURUTKAN MANUAL)
  // Urutan:
  //   No. 1 - 10 : Math Formative Test 2 (PDF Page 1 & Page 2)
  //   No. 11 - 13: Unit 5 Division - Exercise 1 No. 1a, 1b, 1c (Book Page 55 / PDF Page 9)
  //   No. 14 - 15: Unit 5 Division - Exercise 1 No. 2a, 2b (Book Page 56 / PDF Page 3)
  //   No. 16 - 18: Unit 5 Division - Exercise 2 No. 1a, 1b, 1c (Book Page 57 / PDF Page 8)
  //   No. 19 - 20: Unit 5 Division - Exercise 2 No. 2a, 2b (Book Page 58 / PDF Page 6)
  //   No. 21 - 22: Unit 5 Division - Exercise 3 No. 1, 2 (Book Page 59 / PDF Page 7)
  //   No. 23 - 25: Unit 5 Division - Exercise 3 No. 3, 4, 5 (Book Page 60 / PDF Page 4)
  //   No. 26     : Unit 5 Division - No. 3 Match T-Shirts to Hangers (Book Page 62 / PDF Page 5)
  //   No. 27     : Unit 6 Multiplication & Division Facts 2, 5, 10 (Book Page 75 / PDF Page 10)
  // ==============================================================================
  window.IHSANIYAH_QUESTIONS = [
    // ======================== BAGIAN 1: MATH FORMATIVE TEST 2 (NO. 1 - 10) ========================
    {
      id: 'ihs-1',
      number: 1,
      section: 'Math Formative Test 2 • Part I',
      page: 'Formative Test Page 1 (PDF Hal. 1)',
      cropImg: 'assets/illustrations/ihsaniyah/crop_q01.png',
      fullPageImg: 'assets/illustrations/ihsaniyah/pdf_page_01.png',
      type: 'multi_select',
      title: 'Question 1: Number Sequence Jumps (237 to 287)',
      badge: 'Part I • Multiple Check (✓)',
      instruction: 'I. Choose one or more correct answers by putting a check mark (✓) in the boxes next to A, B, or C! Look at these numbers: 237, 247, 257, 267, 277, 287. Based on the numbers above, the correct statement is ….',
      options: [
        { key: 'A', text: 'A. 237 + 40 = 267', isCorrect: false, reasonWrong: '237 + 40 = 277 (not 267).' },
        { key: 'B', text: 'B. 267 – 20 = 247', isCorrect: true, reasonCorrect: '267 – 20 = 247 (2 jumps of 10 backward).' },
        { key: 'C', text: 'C. 257 + 30 = 287', isCorrect: true, reasonCorrect: '257 + 30 = 287 (3 jumps of 10 forward).' }
      ],
      answerKeySummary: 'B and C (267 - 20 = 247; 257 + 30 = 287)'
    },
    {
      id: 'ihs-2',
      number: 2,
      section: 'Math Formative Test 2 • Part I',
      page: 'Formative Test Page 1 (PDF Hal. 1)',
      cropImg: 'assets/illustrations/ihsaniyah/crop_q02.png',
      fullPageImg: 'assets/illustrations/ihsaniyah/pdf_page_01.png',
      type: 'multi_select',
      title: 'Question 2: Vertical Addition Grid (H T O)',
      badge: 'Part I • Multiple Check (✓)',
      instruction: 'Look at the operation below! (2 b 7 + 7 2 a = c 6 9). The correct values to complete the grid boxes above are indicated by ….',
      options: [
        { key: 'A', text: 'A. The value of box a is 6', isCorrect: false, reasonWrong: 'Ones column: 7 + a = 9, so a = 2 (not 6).' },
        { key: 'B', text: 'B. The value of box B is 4', isCorrect: true, reasonCorrect: 'Tens column: b + 2 = 6, so b = 4.' },
        { key: 'C', text: 'C. The value of box C is 9', isCorrect: true, reasonCorrect: 'Hundreds column: 2 + 7 = 9, so c = 9.' }
      ],
      answerKeySummary: 'B and C (a = 2, b = 4, c = 9)'
    },
    {
      id: 'ihs-3',
      number: 3,
      section: 'Math Formative Test 2 • Part II',
      page: 'Formative Test Page 1 (PDF Hal. 1)',
      cropImg: 'assets/illustrations/ihsaniyah/crop_q03.png',
      fullPageImg: 'assets/illustrations/ihsaniyah/pdf_page_01.png',
      type: 'true_false_table',
      title: 'Question 3: Subtraction Diagram Using the "Making 10" Technique (462 – 8)',
      badge: 'Part II • True or False (✓)',
      instruction: 'II. Put a check mark (✓) in the "True" column if the statement is true, or in the "False" column if the statement is false! Look at the subtraction diagram using the "making 10" technique (462 – 8 = c, 462 split into b and 10, 10 – 8 = 2, b + a = c):',
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
      page: 'Formative Test Pages 1–2 (PDF Hal. 1–2)',
      cropImg: 'assets/illustrations/ihsaniyah/crop_q04.png',
      fullPageImg: 'assets/illustrations/ihsaniyah/pdf_page_02.png',
      type: 'true_false_table',
      title: 'Question 4: Yuri\'s Subtraction Work (527 – 158 = 431)',
      badge: 'Part II • True or False & Error Correction',
      instruction: 'Yuri is subtracting numbers. Her work is shown below: 527 – 158 = 431. Now, you need to see her job. Determine True or False for the correction statements below:',
      statements: [
        { id: 's4_a', text: '(a) In the Ones (O) column, 7 – 8 cannot be done without borrowing; regrouping 1 ten makes 17 – 8 = 9 (not 1)', correctAnswer: true },
        { id: 's4_b', text: '(b) In the Tens (T) column, after borrowing 1 ten, 1 ten remains; regrouping 1 hundred makes 11 – 5 = 6 (not 3)', correctAnswer: true },
        { id: 's4_c', text: '(c) In the Hundreds (H) column, 4 – 1 = 3, so the correct result of 527 – 158 is 369', correctAnswer: true }
      ],
      answerKeySummary: '(a) True, (b) True, (c) True — Correct answer: 527 – 158 = 369'
    },
    {
      id: 'ihs-5',
      number: 5,
      section: 'Math Formative Test 2 • Part III',
      page: 'Formative Test Page 2 (PDF Hal. 2)',
      cropImg: 'assets/illustrations/ihsaniyah/crop_q05.png',
      fullPageImg: 'assets/illustrations/ihsaniyah/pdf_page_02.png',
      type: 'multi_box_fill',
      title: 'Question 5: Incomplete Vertical Subtraction (500 – 14_ = 3_4)',
      badge: 'Part III • Fill in the Blank',
      instruction: 'III. Fill the blank with the correct answer! Look at the incomplete vertical subtraction below (500 – 14[...] = 3[...]4). Fill in the missing digits in the empty boxes:',
      boxes: [
        { id: 'b5_1', label: 'Missing Ones digit in 14[ … ] (Row 2, Column O):', placeholder: '?', expected: ['6'] },
        { id: 'b5_2', label: 'Missing Tens digit in 3[ … ]4 (Row 3, Column T):', placeholder: '?', expected: ['5'] }
      ],
      answerKeySummary: 'Row 2 Ones = 6 (146), Row 3 Tens = 5 (354). Because 500 – 146 = 354.'
    },
    {
      id: 'ihs-6',
      number: 6,
      section: 'Math Formative Test 2 • Part III',
      page: 'Formative Test Page 2 (PDF Hal. 2)',
      cropImg: 'assets/illustrations/ihsaniyah/crop_q06.png',
      fullPageImg: 'assets/illustrations/ihsaniyah/pdf_page_02.png',
      type: 'multi_box_fill',
      title: 'Question 6: Incomplete Addition Diagram (678 + 8)',
      badge: 'Part III • Fill in the Blank',
      instruction: 'Look at the incomplete operation below! 678 is partitioned into 676 and 2, then 2 + 8 = 10. Complete the missing numbers in the blanks:',
      boxes: [
        { id: 'b6_1', label: '676 + 10 = ….', placeholder: '...', expected: ['686'] },
        { id: 'b6_2', label: 'So, 678 + 8 = ….', placeholder: '...', expected: ['686', '688'] }
      ],
      answerKeySummary: '676 + 10 = 686; So 678 + 8 = 686 (or 678 + 10 = 688 on sheet typo).'
    },
    {
      id: 'ihs-7',
      number: 7,
      section: 'Math Formative Test 2 • Part IV',
      page: 'Formative Test Page 2 (PDF Hal. 2)',
      cropImg: 'assets/illustrations/ihsaniyah/crop_q07.png',
      fullPageImg: 'assets/illustrations/ihsaniyah/pdf_page_02.png',
      type: 'multi_box_fill',
      title: 'Question 7: Vertical Addition 297 + 358 = ….',
      badge: 'Part IV • Essay / Workout',
      instruction: 'IV. Answer the following question correctly! Complete the H T O addition grid for 297 + 358:',
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
      page: 'Formative Test Page 2 (PDF Hal. 2)',
      cropImg: 'assets/illustrations/ihsaniyah/crop_q08.png',
      fullPageImg: 'assets/illustrations/ihsaniyah/pdf_page_02.png',
      type: 'multi_box_fill',
      title: 'Question 8: Making 100 Addition Diagram (597 + 98)',
      badge: 'Part IV • Essay / Number Bond',
      instruction: 'Complete the number bond addition diagram shown in Question 8 (597 + 98, where 98 needs 2 to make 100):',
      boxes: [
        { id: 'b8_left', label: 'Left branch of 597 (597 – 2):', placeholder: '...', expected: ['595', '569'] },
        { id: 'b8_right', label: 'Right branch of 597 (to make 100 with 98):', placeholder: '...', expected: ['2'] },
        { id: 'b8_sum', label: 'Final Result (595 + 100 = ….):', placeholder: '...', expected: ['695', '625'] }
      ],
      answerKeySummary: '597 splits into 595 and 2; 2 + 98 = 100; 595 + 100 = 695 (also accepts 625 for 597 + 28).'
    },
    {
      id: 'ihs-9',
      number: 9,
      section: 'Math Formative Test 2 • Part IV',
      page: 'Formative Test Page 2 (PDF Hal. 2)',
      cropImg: 'assets/illustrations/ihsaniyah/crop_q09.png',
      fullPageImg: 'assets/illustrations/ihsaniyah/pdf_page_02.png',
      type: 'multi_box_fill',
      title: 'Question 9: Vertical Subtraction 800 – 697 = ….',
      badge: 'Part IV • Essay / Workout',
      instruction: 'Calculate 800 – 697 and fill in the Hundreds (H), Tens (T), Ones (O), and Final Answer:',
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
      page: 'Formative Test Page 2 (PDF Hal. 2)',
      cropImg: 'assets/illustrations/ihsaniyah/crop_q10.png',
      fullPageImg: 'assets/illustrations/ihsaniyah/pdf_page_02.png',
      type: 'multi_box_fill',
      title: 'Question 10: Subtraction Diagram 749 – 70 = ….',
      badge: 'Part IV • Essay / Number Bond',
      instruction: 'Complete the number bond subtraction diagram for 749 – 70 (749 is partitioned into 649 and 100, then 100 – 70 = 30):',
      boxes: [
        { id: 'b10_left', label: 'Left circle of 749 (749 – 100):', placeholder: '...', expected: ['649'] },
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
      page: 'Book Page 55 • No. 1(a) (PDF Hal. 9)',
      cropImg: 'assets/illustrations/ihsaniyah/crop_q11.png',
      fullPageImg: 'assets/illustrations/ihsaniyah/pdf_page_09.png',
      type: 'division_sentence',
      title: 'Page 55 No. 1(a): Divide 16 Keys Equally into 2 Bundles',
      badge: 'Unit 5 • Book Page 55',
      instruction: '1. Find the number of objects in each group. Then, write the division sentences.\n(a) Divide 16 keys equally into 2 bundles.',
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
      page: 'Book Page 55 • No. 1(b) (PDF Hal. 9)',
      cropImg: 'assets/illustrations/ihsaniyah/crop_q12.png',
      fullPageImg: 'assets/illustrations/ihsaniyah/pdf_page_09.png',
      type: 'division_sentence',
      title: 'Page 55 No. 1(b): Divide 18 Mice Equally into 3 Groups',
      badge: 'Unit 5 • Book Page 55',
      instruction: '1(b) Divide 18 mice equally into 3 groups. Complete the division sentence and final box:',
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
      page: 'Book Page 55 • No. 1(c) (PDF Hal. 9)',
      cropImg: 'assets/illustrations/ihsaniyah/crop_q13.png',
      fullPageImg: 'assets/illustrations/ihsaniyah/pdf_page_09.png',
      type: 'division_sentence',
      title: 'Page 55 No. 1(c): Divide 25 Chicks Equally into 5 Groups',
      badge: 'Unit 5 • Book Page 55',
      instruction: '1(c) Divide 25 chicks equally into 5 groups. Complete the division sentence and final box:',
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
      page: 'Book Page 56 • No. 2(a) (PDF Hal. 3)',
      cropImg: 'assets/illustrations/ihsaniyah/crop_q14.png',
      fullPageImg: 'assets/illustrations/ihsaniyah/pdf_page_03.png',
      type: 'division_sentence',
      title: 'Page 56 No. 2(a): Siska\'s 12 Glasses on 4 Trays',
      badge: 'Unit 5 • Book Page 56',
      instruction: '2. Draw to solve the division stories below. Then, write the division sentences.\n(a) Siska has 12 glasses. She puts the glasses equally onto 4 trays.',
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
      page: 'Book Page 56 • No. 2(b) (PDF Hal. 3)',
      cropImg: 'assets/illustrations/ihsaniyah/crop_q15.png',
      fullPageImg: 'assets/illustrations/ihsaniyah/pdf_page_03.png',
      type: 'division_sentence',
      title: 'Page 56 No. 2(b): Ida\'s 15 Rambutans in 3 Bowls',
      badge: 'Unit 5 • Book Page 56',
      instruction: '2(b) There are 15 rambutans. Ida puts the rambutans equally into 3 bowls.',
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
      page: 'Book Page 57 • No. 1(a) (PDF Hal. 8)',
      cropImg: 'assets/illustrations/ihsaniyah/crop_q16.png',
      fullPageImg: 'assets/illustrations/ihsaniyah/pdf_page_08.png',
      type: 'division_sentence',
      title: 'Page 57 No. 1(a): Divide 24 Matches into Groups of 3',
      badge: 'Unit 5 • Book Page 57',
      instruction: '1. Circle on the pictures to divide. Then, write the division sentences.\n(a) Divide 24 matches into some groups. Each group has 3 matches.',
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
      page: 'Book Page 57 • No. 1(b) (PDF Hal. 8)',
      cropImg: 'assets/illustrations/ihsaniyah/crop_q17.png',
      fullPageImg: 'assets/illustrations/ihsaniyah/pdf_page_08.png',
      type: 'division_sentence',
      title: 'Page 57 No. 1(b): Put 18 Pears into Bags of 2',
      badge: 'Unit 5 • Book Page 57',
      instruction: '1(b) Put 18 pears into some bags. Each bag has 2 pears.',
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
      page: 'Book Page 57 • No. 1(c) (PDF Hal. 8)',
      cropImg: 'assets/illustrations/ihsaniyah/crop_q18.png',
      fullPageImg: 'assets/illustrations/ihsaniyah/pdf_page_08.png',
      type: 'division_sentence',
      title: 'Page 57 No. 1(c): Put 9 Packs of Chips into Boxes of 3',
      badge: 'Unit 5 • Book Page 57',
      instruction: '1(c) Put 9 packs of chips into some boxes. Each box has 3 packs of chips.',
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
      page: 'Book Page 58 • No. 2(a) (PDF Hal. 6)',
      cropImg: 'assets/illustrations/ihsaniyah/crop_q19.png',
      fullPageImg: 'assets/illustrations/ihsaniyah/pdf_page_06.png',
      type: 'division_sentence',
      title: 'Page 58 No. 2(a): 20 Tourists Getting on Boats',
      badge: 'Unit 5 • Book Page 58',
      instruction: '2. Circle on the pictures to divide. Then, write the division sentences.\n(a) 20 tourists get on the boats to go around the lake. Each boat can carry 4 tourists. How many boats are needed?',
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
      page: 'Book Page 58 • No. 2(b) (PDF Hal. 6)',
      cropImg: 'assets/illustrations/ihsaniyah/crop_q20.png',
      fullPageImg: 'assets/illustrations/ihsaniyah/pdf_page_06.png',
      type: 'division_sentence',
      title: 'Page 58 No. 2(b): Ivan\'s 30 Biscuits in Boxes of 5',
      badge: 'Unit 5 • Book Page 58',
      instruction: '2(b) Ivan buys 30 biscuits. He puts 5 biscuits in each box. How many boxes does Ivan use?',
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
      page: 'Book Page 59 • No. 1 (PDF Hal. 7)',
      cropImg: 'assets/illustrations/ihsaniyah/crop_q21.png',
      fullPageImg: 'assets/illustrations/ihsaniyah/pdf_page_07.png',
      type: 'division_story_full',
      title: 'Page 59 No. 1: Making Division Stories (Cherries on Plates)',
      badge: 'Unit 5 • Book Page 59',
      instruction: 'Complete the division story based on the picture of cherries on plates:',
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
      page: 'Book Page 59 • No. 2 (PDF Hal. 7)',
      cropImg: 'assets/illustrations/ihsaniyah/crop_q22.png',
      fullPageImg: 'assets/illustrations/ihsaniyah/pdf_page_07.png',
      type: 'division_story_full',
      title: 'Page 59 No. 2: Making Division Stories (Bicycles & Wheels)',
      badge: 'Unit 5 • Book Page 59',
      instruction: 'Complete the division story based on the picture of bicycles:',
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
      page: 'Book Page 60 • No. 3 (PDF Hal. 4)',
      cropImg: 'assets/illustrations/ihsaniyah/crop_q23.png',
      fullPageImg: 'assets/illustrations/ihsaniyah/pdf_page_04.png',
      type: 'division_story_full',
      title: 'Page 60 No. 3: Making Division Stories (Boxes of Crayons)',
      badge: 'Unit 5 • Book Page 60',
      instruction: 'Complete the division story based on the picture of crayon boxes:',
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
      page: 'Book Page 60 • No. 4 (PDF Hal. 4)',
      cropImg: 'assets/illustrations/ihsaniyah/crop_q24.png',
      fullPageImg: 'assets/illustrations/ihsaniyah/pdf_page_04.png',
      type: 'division_story_full',
      title: 'Page 60 No. 4: Making Division Stories (Flowers in Pots)',
      badge: 'Unit 5 • Book Page 60',
      instruction: 'Complete the division story based on the picture of flower pots:',
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
      page: 'Book Page 60 • No. 5 (PDF Hal. 4)',
      cropImg: 'assets/illustrations/ihsaniyah/crop_q25.png',
      fullPageImg: 'assets/illustrations/ihsaniyah/pdf_page_04.png',
      type: 'division_story_full',
      title: 'Page 60 No. 5: Making Division Stories (Eggs in Cartons)',
      badge: 'Unit 5 • Book Page 60',
      instruction: 'Complete the division story based on the picture of egg cartons:',
      line1Prefix: 'There are',
      line1Suffix: 'eggs altogether.',
      line1Expected: '30',
      line2Prefix: 'The eggs are packed equally into',
      line2Suffix: 'cartons (or 6 eggs per carton).',
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
      page: 'Book Page 62 • No. 3 (PDF Hal. 5)',
      cropImg: 'assets/illustrations/ihsaniyah/crop_q26.png',
      fullPageImg: 'assets/illustrations/ihsaniyah/pdf_page_05.png',
      type: 'matching_game',
      title: 'Page 62 No. 3: Match the Multiplication Sentence to the Related Division Sentence',
      badge: 'Unit 5 • Book Page 62 • Connecting Lines',
      instruction: '3. Match the multiplication sentence on the T-Shirt (left) to the related division sentence on the Clothes Hanger (right)! Click a T-Shirt on the left, then click a Hanger on the right to draw a line.',
      pairs: [
        { leftId: 't1', leftText: '👕 9 × 3 = 27', rightId: 'h4', rightText: '🪝 27 ÷ 3 = 9', color: '#38bdf8' },
        { leftId: 't2', leftText: '👕 7 × 4 = 28', rightId: 'h5', rightText: '🪝 28 ÷ 4 = 7', color: '#10b981' },
        { leftId: 't3', leftText: '👕 4 × 5 = 20', rightId: 'h3', rightText: '🪝 20 ÷ 5 = 4', color: '#f59e0b' },
        { leftId: 't4', leftText: '👕 10 × 2 = 20', rightId: 'h1', rightText: '🪝 20 ÷ 2 = 10', color: '#a855f7' },
        { leftId: 't5', leftText: '👕 8 × 4 = 32', rightId: 'h2', rightText: '🪝 32 ÷ 4 = 8', color: '#f43f5e' }
      ],
      // Exact top-to-bottom order on Book Page 62 right column:
      shuffledRight: ['h1', 'h2', 'h3', 'h4', 'h5'],
      answerKeySummary: '(9×3=27 ↔ 27÷3=9), (7×4=28 ↔ 28÷4=7), (4×5=20 ↔ 20÷5=4), (10×2=20 ↔ 20÷2=10), (8×4=32 ↔ 32÷4=8)'
    },

    // ======================== BAGIAN 9: UNIT 6 - BOOK PAGE 75 (NO. 27) ========================
    {
      id: 'ihs-27',
      number: 27,
      section: 'Unit 6 Multiplication & Division Facts of 2, 5, and 10',
      page: 'Book Page 75 • What Do You Remember? (PDF Hal. 10)',
      cropImg: 'assets/illustrations/ihsaniyah/crop_q27.png',
      fullPageImg: 'assets/illustrations/ihsaniyah/pdf_page_10.png',
      type: 'grid_100_page75',
      title: 'Page 75: What Do You Remember? (Table of Numbers 1 to 100)',
      badge: 'Unit 6 • Book Page 75',
      instruction: 'Look at the table of numbers 1 to 100 below:\n• Circle the numbers that are multiplication facts of 2.\n• Colour blue the numbers that are multiplication facts of 5.\n• Tick (✓) the numbers that are multiplication facts of 10.\nAnswer the three questions at the bottom of the page:',
      subPrompts: [
        {
          id: 'p75_q1',
          label: '1. What numbers are circled and also coloured blue? (Multiplication facts of both 2 and 5)',
          placeholder: '10, 20, 30, 40, 50, 60, 70, 80, 90, 100',
          expectedNums: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100']
        },
        {
          id: 'p75_q2',
          label: '2. What numbers are circled and also ticked (✓)? (Multiplication facts of both 2 and 10)',
          placeholder: '10, 20, 30, 40, 50, 60, 70, 80, 90, 100',
          expectedNums: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100']
        },
        {
          id: 'p75_q3',
          label: '3. What numbers are coloured blue and also ticked (✓)? (Multiplication facts of both 5 and 10)',
          placeholder: '10, 20, 30, 40, 50, 60, 70, 80, 90, 100',
          expectedNums: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100']
        }
      ],
      answerKeySummary: 'All 3 questions have the answer: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100.'
    }
  ];

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
      var selected = ans.selected || [];
      var correctKeys = q.options.filter(function(o) { return o.isCorrect; }).map(function(o) { return o.key; });
      return (selected.length === correctKeys.length) && correctKeys.every(function(k) { return selected.indexOf(k) !== -1; });
    }

    if (q.type === 'true_false_table') {
      var res = ans.responses || {};
      return q.statements.every(function(st) { return res[st.id] === st.correctAnswer; });
    }

    if (q.type === 'multi_box_fill') {
      var b = ans.boxes || {};
      return q.boxes.every(function(boxDef) {
        var val = String(b[boxDef.id] || '').trim().toLowerCase();
        return boxDef.expected.some(function(exp) { return val === String(exp).toLowerCase(); });
      });
    }

    if (q.type === 'division_sentence') {
      var d = ans.div || {};
      var a = String(d.a || '').trim();
      var bVal = String(d.b || '').trim();
      var r = String(d.res || '').trim();
      var st = String(d.stmt || '').trim();
      var eqOk = (a === q.divA && bVal === q.divB && r === q.divRes);
      var stOk = (st === q.statementAns);
      return eqOk && stOk;
    }

    if (q.type === 'division_story_full') {
      var s = ans.story || {};
      var l1 = String(s.l1 || '').trim() === q.line1Expected;
      var l2 = (String(s.l2 || '').trim() === q.line2Expected) || (q.altLine2Expected && String(s.l2 || '').trim() === q.altLine2Expected);
      var l3 = (String(s.l3 || '').trim() === q.line3Expected) || (q.altLine3Expected && String(s.l3 || '').trim() === q.altLine3Expected);
      var da = String(s.da || '').trim() === q.divA;
      var dbOk = (String(s.db || '').trim() === q.divB && String(s.dr || '').trim() === q.divRes) ||
                 (q.altDivB && String(s.db || '').trim() === q.altDivB && String(s.dr || '').trim() === q.altDivRes);
      return l1 && l2 && l3 && da && dbOk;
    }

    if (q.type === 'matching_game') {
      var matched = ans.matchedPairs || {};
      return q.pairs.every(function(p) { return matched[p.leftId] === p.rightId; });
    }

    if (q.type === 'grid_100_page75') {
      var sub = ans.subAnswers || {};
      return q.subPrompts.every(function(sp) {
        var raw = String(sub[sp.id] || '');
        var nums = raw.match(/\d+/g) || [];
        return sp.expectedNums.every(function(en) { return nums.indexOf(en) !== -1; }) && nums.length === sp.expectedNums.length;
      });
    }

    return false;
  };

  // ==============================================================================
  // HELPER STATE MANAGEMENT SISWA & PENYIMPANAN REALTIME PANEL GURU
  // ==============================================================================
  window.getIhsaniyahStudent = function() {
    try {
      var data = localStorage.getItem('ihsaniyah_active_student');
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  };

  window.setIhsaniyahStudent = function(student) {
    try {
      localStorage.setItem('ihsaniyah_active_student', JSON.stringify(student));
    } catch (e) {}
  };

  window.getIhsaniyahStudentAnswersStore = function() {
    try {
      var student = window.getIhsaniyahStudent();
      if (!student) return {};
      var key = 'ihs_ans_' + (student.sessionId || (student.name + '_' + student.className + '_' + student.number));
      var data = localStorage.getItem(key);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  };

  window.saveIhsaniyahStudentAnswersStore = function(answersObj) {
    try {
      var student = window.getIhsaniyahStudent();
      if (!student) return;
      var key = 'ihs_ans_' + (student.sessionId || (student.name + '_' + student.className + '_' + student.number));
      localStorage.setItem(key, JSON.stringify(answersObj || {}));
    } catch (e) {}
  };

  window.logoutIhsaniyahStudent = function() {
    try {
      localStorage.removeItem('ihsaniyah_active_student');
    } catch (e) {}
  };

  window.getAllIhsaniyahRecords = function() {
    try {
      var data = localStorage.getItem('ihsaniyah_student_records');
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  };

  // Upsert record siswa secara realtime (tidak membuat duplikat untuk siswa yang sama)
  window.upsertIhsaniyahRecord = function(record) {
    try {
      var records = window.getAllIhsaniyahRecords();
      var idx = records.findIndex(function(r) {
        if (record.sessionId && r.sessionId === record.sessionId) return true;
        return (
          String(r.studentName || '').toLowerCase() === String(record.studentName || '').toLowerCase() &&
          String(r.studentClass || '') === String(record.studentClass || '') &&
          String(r.studentNumber || '') === String(record.studentNumber || '')
        );
      });
      if (idx !== -1) {
        records[idx] = Object.assign({}, records[idx], record);
      } else {
        records.unshift(record);
      }
      localStorage.setItem('ihsaniyah_student_records', JSON.stringify(records));
    } catch (e) {}
  };

  window.saveIhsaniyahRecord = window.upsertIhsaniyahRecord;

  window.clearIhsaniyahRecords = function() {
    try {
      localStorage.removeItem('ihsaniyah_student_records');
    } catch (e) {}
  };

  // Export Rekap Nilai ke File CSV (Bisa Langsung Dibuka di Microsoft Excel)
  window.downloadIhsaniyahCSV = function() {
    var records = window.getAllIhsaniyahRecords();
    if (!records.length) {
      alert('Belum ada data rekap nilai siswa yang tersimpan.');
      return;
    }

    var csv = 'No,Tanggal,Waktu Update,Nama Lengkap Siswa,Kelas,No Absen,Soal Dijawab,Jawaban Benar,Total Soal,Skor Akhir (0-100),Status Kelulusan\n';
    records.forEach(function(r, idx) {
      var row = [
        idx + 1,
        '"' + (r.date || '-') + '"',
        '"' + (r.time || '-') + '"',
        '"' + String(r.studentName || '-').replace(/"/g, '""') + '"',
        '"' + (r.studentClass || '-') + '"',
        '"' + (r.studentNumber || '-') + '"',
        r.answeredCount || 0,
        r.correctCount || 0,
        r.totalQuestions || 27,
        r.score || 0,
        '"' + (r.status || '-') + '"'
      ];
      csv += row.join(',') + '\n';
    });

    var blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'Rekap_Nilai_SD_Ihsaniyah_' + new Date().toISOString().slice(0, 10) + '.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  console.log('Modul SD Ihsaniyah Gajahmada Tegal (27 Soal Lengkap & Realtime Auto-Save Panel Guru) berhasil dimuat!');
})();
