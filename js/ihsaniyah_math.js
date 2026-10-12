// ==============================================================================
// 🎒 YAYASAN PERGURUAN IHSANIYAH - SD IHSANIYAH GAJAHMADA TEGAL
// Kampus Al Hafidz • MATH FORMATIVE TEST 2 & DIVISION QUEST
// Full English Curriculum Questions with Bilingual Kodi's Baby Logic
// ==============================================================================

(function() {
  'use strict';

  // Stacked Mathematical Fractions Formatter (Donald Knuth Math Axis & Collinear Operator Alignment)
  window.formatMathFractions = function(text) {
    if (!text || typeof text !== "string") return text || "";
    
    // 1. Mixed numbers (e.g., "2 1/2" or "3 3/4")
    var formatted = text.replace(/(^|\s)(\d+)\s+(\d+)\/(\d+)(?=[^\d\/]|$)/g, function(match, prefix, whole, num, den) {
      return prefix + '<span class="math-expr"><span class="math-whole">' + whole + '</span><span class="math-fraction"><span class="num">' + num + '</span><span class="den">' + den + '</span></span></span>';
    });

    // 2. Standalone fractions (e.g., "3/4" or "-5/8")
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
        // True mathematical minus sign (Unicode U+2212)
        tokens[i] = tokens[i].replace(/(^|\s|\d)(\-)(\s|\d|$)/g, function(m, left, op, right) {
          return left + ' <span class="math-op">&minus;</span> ' + right;
        });
      }
    }
    return tokens.join('').replace(/\s{2,}/g, ' ');
  };

  // Bank Data Soal Berdasarkan PDF 3 (Halaman 1 - 10) - FULL ENGLISH
  window.IHSANIYAH_QUESTIONS = [
    {
      id: "ihs-1",
      number: 1,
      page: "Page 1",
      type: "multi_select",
      title: "Number Sequences & Jump Patterns (Skip Counting by 10)",
      badge: "Part I: Multiple-Choice Checklist (✓)",
      instruction: "Look at these numbers! Choose one or more correct statements by putting a check mark (✓) in the boxes next to A, B, or C.",
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
        { key: "A", text: "A. 237 + 40 = 267", isCorrect: false, reasonWrong: "Incorrect! 237 + 40 = 277 (counting 4 jumps of 10 forward), not 267." },
        { key: "B", text: "B. 267 – 20 = 247", isCorrect: true, reasonCorrect: "Correct! Counting back 2 jumps of 10 from 267 (267 – 20) lands exactly on 247." },
        { key: "C", text: "C. 257 + 30 = 287", isCorrect: true, reasonCorrect: "Correct! Counting forward 3 jumps of 10 from 257 (257 + 30) lands exactly on 287." }
      ],
      nalarBayiKodi: "👶 Kodi's Baby Logic: Imagine a cute frog hopping along a number line in jumps of 10! Jumping backward twice from 267 lands on 247. Jumping forward 3 times from 257 lands on 287! (Katak melompat 10 angka tiap langkah!)"
    },
    {
      id: "ihs-2",
      number: 2,
      page: "Page 1",
      type: "multi_select",
      title: "Vertical Column Addition H T O (Hundreds, Tens, Ones)",
      badge: "Part I: Missing Grid Box Values",
      instruction: "Look at the vertical addition below! Choose the correct statement(s) regarding the values of boxes a, b, and c.",
      diagram: `
        <div style="display: flex; justify-content: center; margin: 14px 0;">
          <table style="border-collapse: collapse; text-align: center; font-family: monospace; font-size: 1.25rem; font-weight: 800; background: rgba(0,0,0,0.3); padding: 10px; border-radius: 10px;">
            <tr style="color: var(--accent-cyan); border-bottom: 1px solid rgba(255,255,255,0.2);">
              <th style="padding: 6px 14px;">H (Hundreds)</th>
              <th style="padding: 6px 14px;">T (Tens)</th>
              <th style="padding: 6px 14px;">O (Ones)</th>
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
        { key: "A", text: "A. The value of box a is 6", isCorrect: false, reasonWrong: "Incorrect! In the ones column: 7 + a = 9, so a must be 2 (9 – 7 = 2), not 6." },
        { key: "B", text: "B. The value of box b is 4", isCorrect: true, reasonCorrect: "Correct! In the tens column: b + 2 = 6, so b = 6 – 2 = 4." },
        { key: "C", text: "C. The value of box c is 9", isCorrect: true, reasonCorrect: "Correct! In the hundreds column: 2 + 7 = 9, so box c = 9." }
      ],
      nalarBayiKodi: "👶 Kodi's Baby Logic: Work room by room starting from the right (Ones room): 7 plus what equals 9? a = 2! Tens room: what plus 2 equals 6? b = 4! Hundreds room: 2 + 7 = 9, so c = 9!"
    },
    {
      id: "ihs-3",
      number: 3,
      page: "Page 1",
      type: "true_false_table",
      title: "Subtraction Diagram Using the 'Making 10' Technique (462 – 8)",
      badge: "Part II: True or False Statements",
      instruction: "Look at the subtraction diagram using the 'making 10' technique below! Put a check mark (✓) in the True or False column for each statement.",
      diagram: `
        <div style="background: rgba(15, 23, 42, 0.7); border-radius: 12px; padding: 16px; margin: 12px 0; border: 1px solid rgba(255,255,255,0.1); text-align: center;">
          <div style="font-size: 1.15rem; font-weight: 800; color: #fff; margin-bottom: 8px;">
            462 – 8 = c
          </div>
          <div style="font-size: 0.95rem; color: #cbd5e1; line-height: 1.6;">
            462 is partitioned into <strong style="color: #fbbf24;">[ b ]</strong> and <strong style="color: #38bdf8;">[ 10 ]</strong>.<br>
            Then 10 is subtracted by 8 to give <strong style="color: #4ade80;">[ a ] = 2</strong>.<br>
            Final result: <strong style="color: #fbbf24;">b</strong> + <strong style="color: #4ade80;">a</strong> = <strong style="color: #fff;">c</strong>.
          </div>
        </div>
      `,
      statements: [
        { id: "s3_a", text: "(a) The value of 'a' is 2 (10 – 8 = 2)", correctAnswer: true, reason: "True! Subtracting 8 from 10 leaves exactly 2." },
        { id: "s3_b", text: "(b) The value of 'b' is 452 (462 – 10 = 452)", correctAnswer: true, reason: "True! When 10 is taken out of 462, 452 remains." },
        { id: "s3_c", text: "(c) The value of 'c' is 454 (452 + 2 = 454)", correctAnswer: true, reason: "True! Adding 452 and 2 gives 454." }
      ],
      nalarBayiKodi: "👶 Kodi's Baby Logic: You have 462 candies. Take out 10 candies first (452 left in the jar). Give 8 to your friend from the 10 candies, leaving 2 candies. Put the 2 back into the jar: 452 + 2 = 454!"
    },
    {
      id: "ihs-4",
      number: 4,
      page: "Page 1 - 2",
      type: "true_false_table",
      title: "Yuri's Subtraction Error Analysis (527 – 158)",
      badge: "Part II: Math Detective & Error Correction",
      instruction: "Yuri is subtracting numbers. Her work is shown below: 527 – 158 = 431. Determine whether each correction statement is True or False!",
      diagram: `
        <div style="display: flex; gap: 20px; justify-content: center; align-items: center; flex-wrap: wrap; margin: 14px 0;">
          <div style="background: rgba(239, 68, 68, 0.15); border: 2px dashed #ef4444; border-radius: 10px; padding: 12px 18px; text-align: center;">
            <div style="font-size: 0.8rem; font-weight: 800; color: #fca5a5; margin-bottom: 4px;">Yuri's Work (INCORRECT):</div>
            <div style="font-family: monospace; font-size: 1.2rem; font-weight: 800; color: #fff;">
              5 2 7<br>1 5 8 -<br>------<br><span style="color: #f87171;">4 3 1</span>
            </div>
          </div>
          <div style="background: rgba(16, 185, 129, 0.15); border: 2px solid #10b981; border-radius: 10px; padding: 12px 18px; text-align: center;">
            <div style="font-size: 0.8rem; font-weight: 800; color: #86efac; margin-bottom: 4px;">Correct Working:</div>
            <div style="font-family: monospace; font-size: 1.2rem; font-weight: 800; color: #fff;">
              5 2 7<br>1 5 8 -<br>------<br><span style="color: #4ade80;">3 6 9</span>
            </div>
          </div>
        </div>
      `,
      statements: [
        { id: "s4_a", text: "(a) Yuri made a mistake because she forgot to regroup (borrow) and flipped digits (8 – 7 = 1)", correctAnswer: true, reason: "True! Since 7 is smaller than 8, she cannot subtract 8 from 7 without regrouping." },
        { id: "s4_b", text: "(b) The correct ones digit is 9 (17 – 8 = 9)", correctAnswer: true, reason: "True! Regrouping 1 ten gives 17 ones; 17 – 8 = 9." },
        { id: "s4_c", text: "(c) The correct answer is 369", correctAnswer: true, reason: "True! 527 – 158 = 369." }
      ],
      nalarBayiKodi: "👶 Kodi's Baby Logic: Yuri fell into the subtraction trap! 7 is not enough to take 8 away, so she flipped it to 8 - 7. No! You must borrow 1 ten from next door to make 17 - 8 = 9!"
    },
    {
      id: "ihs-5",
      number: 5,
      page: "Page 2",
      type: "fill_blank",
      title: "Incomplete Vertical Subtraction with Missing Digits",
      badge: "Part III: Fill in the Blank",
      instruction: "Look at the incomplete vertical subtraction below: 500 – 14_ = 3_4. Find the missing digits that complete the operation!",
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
      questionPrompt: "What are the missing digits in the second row (subtrahend ones) and the answer row (difference tens)?",
      placeholder: "e.g., 6 and 5",
      acceptedInputs: ["6 and 5", "6, 5", "6,5", "6 5", "6 dan 5", "146 and 354", "6", "54"],
      explanation: "500 – 146 = 354. The missing ones digit in the subtrahend is 6 (10 – 6 = 4) and the missing tens digit in the difference is 5 (9 – 4 = 5).",
      nalarBayiKodi: "👶 Kodi's Baby Logic: Regroup across zeros! The last 0 becomes 10 (10 – 6 = 4). The middle 0 becomes 9 (9 – 4 = 5). So the missing numbers are 6 and 5!"
    },
    {
      id: "ihs-6",
      number: 6,
      page: "Page 2",
      type: "fill_blank",
      title: "Mental Math Addition Strategy (Making 10)",
      badge: "Part III: Complete the Operation",
      instruction: "Look at the incomplete operation below: 678 + 8 = .... Partition 678 into 676 and 2, then combine 2 + 8 = 10.",
      diagram: `
        <div style="background: rgba(15, 23, 42, 0.7); border-radius: 12px; padding: 16px; margin: 12px 0; border: 1px solid rgba(255,255,255,0.1); text-align: center;">
          <div style="font-size: 1.15rem; font-weight: 800; color: #fff; margin-bottom: 8px;">
            678 + 8 = ....
          </div>
          <div style="font-size: 0.95rem; color: #cbd5e1; line-height: 1.6;">
            678 is split into 676 and 2.<br>
            Then 2 + 8 = 10.<br>
            Therefore: <strong>676 + 10 = [ .... ]</strong>.<br>
            So, 678 + 8 = [ .... ].
          </div>
        </div>
      `,
      expected: "686",
      acceptedInputs: ["686"],
      explanation: "676 + 10 = 686. Therefore, 678 + 8 = 686.",
      nalarBayiKodi: "👶 Kodi's Baby Logic: 678 gives 2 marbles to 8 to turn it into a nice round 10! Now add 676 + 10 = 686!"
    },
    {
      id: "ihs-7",
      number: 7,
      page: "Page 2",
      type: "column_math",
      title: "Multi-digit Column Operations Practice",
      badge: "Part IV: Vertical Addition & Subtraction",
      instruction: "Calculate the exact answers to the following arithmetic operations: (1) 297 + 358, (2) 800 – 697, and (3) 749 – 70.",
      subQuestions: [
        { label: "297 + 358 =", expected: "655", accepted: ["655"] },
        { label: "800 – 697 =", expected: "103", accepted: ["103"] },
        { label: "749 – 70 =", expected: "679", accepted: ["679"] }
      ],
      explanation: "297 + 358 = 655. 800 – 697 = 103. 749 – 70 = 679.",
      nalarBayiKodi: "👶 Kodi's Baby Logic: Work from right to left! Remember to carry over when adding, and borrow when subtracting!"
    },
    {
      id: "ihs-8",
      number: 8,
      page: "Page 5",
      type: "matching_game",
      title: "👕 CONNECTING LINES GAME: Match Multiplication T-Shirts to Division Clothes Hangers! 🪝",
      badge: "Part V: Match Multiplication to Division Family",
      instruction: "Click a T-Shirt on the left, then click the matching Clothes Hanger on the right to draw a connecting line linking the multiplication fact to its division fact family!",
      pairs: [
        { leftId: "t1", leftText: "👕 9 × 3 = 27", rightId: "h1", rightText: "🪝 27 ÷ 3 = 9", color: "#38bdf8", reason: "9 × 3 = 27, therefore 27 ÷ 3 = 9!" },
        { leftId: "t2", leftText: "👕 7 × 4 = 28", rightId: "h2", rightText: "🪝 28 ÷ 4 = 7", color: "#10b981", reason: "7 × 4 = 28, therefore 28 ÷ 4 = 7!" },
        { leftId: "t3", leftText: "👕 4 × 5 = 20", rightId: "h3", rightText: "🪝 20 ÷ 5 = 4", color: "#f59e0b", reason: "4 × 5 = 20, therefore 20 ÷ 5 = 4!" },
        { leftId: "t4", leftText: "👕 10 × 2 = 20", rightId: "h4", rightText: "🪝 20 ÷ 2 = 10", color: "#a855f7", reason: "10 × 2 = 20, therefore 20 ÷ 2 = 10!" },
        { leftId: "t5", leftText: "👕 8 × 4 = 32", rightId: "h5", rightText: "🪝 32 ÷ 4 = 8", color: "#f43f5e", reason: "8 × 4 = 32, therefore 32 ÷ 4 = 8!" }
      ],
      // Shuffled right order so lines draw across non-straight (e.g. top-left to middle-right)
      shuffledRight: ["h3", "h1", "h5", "h2", "h4"],
      nalarBayiKodi: "👶 Kodi's Baby Logic: Multiplication and division are twin fact families! If 9 × 3 = 27, dividing 27 by 3 brings you right back to 9!"
    },
    {
      id: "ihs-9",
      number: 9,
      page: "Pages 3, 4, 6, 7, 8, 9",
      type: "division_stories",
      title: "Cambridge Primary Division Stories (Real-world Word Problems)",
      badge: "Part VI: Visual Division Stories",
      instruction: "Solve each real-world division story by completing the division sentence:",
      stories: [
        {
          id: "st1",
          icon: "🥛",
          title: "Siska's Drinking Glasses on Trays (Page 3)",
          prompt: "Siska has 12 glasses. She places them equally onto 4 trays. How many glasses are on each tray?",
          sentence: "12 ÷ 4 = [ ? ]",
          expected: "3",
          unit: "glasses",
          explanation: "12 divided equally among 4 trays = 3 glasses per tray."
        },
        {
          id: "st2",
          icon: "🍒",
          title: "Budi's Fresh Rambutans in Bags (Page 4)",
          prompt: "Budi has 18 rambutans. He packs them into bags of 3 rambutans each. How many bags does he need?",
          sentence: "18 ÷ 3 = [ ? ]",
          expected: "6",
          unit: "bags",
          explanation: "18 rambutans partitioned into groups of 3 = 6 bags."
        },
        {
          id: "st3",
          icon: "🖍️",
          title: "Art Class Crayons in Pencil Cases (Page 6)",
          prompt: "A teacher puts 24 crayons equally into 4 pencil cases. How many crayons are in each case?",
          sentence: "24 ÷ 4 = [ ? ]",
          expected: "6",
          unit: "crayons",
          explanation: "24 ÷ 4 = 6 crayons in each pencil case."
        },
        {
          id: "st4",
          icon: "🪴",
          title: "Mother's Flower Pots in Rows (Page 7)",
          prompt: "Mother arranges 30 flower pots equally into 5 rows in the garden. How many pots are in each row?",
          sentence: "30 ÷ 5 = [ ? ]",
          expected: "6",
          unit: "pots",
          explanation: "30 ÷ 5 = 6 flower pots per row."
        },
        {
          id: "st5",
          icon: "🚐",
          title: "Tourists Boarding Tour Vans (Page 8)",
          prompt: "There are 35 tourists boarding 5 tour vans equally. How many tourists are in each van?",
          sentence: "35 ÷ 5 = [ ? ]",
          expected: "7",
          unit: "tourists",
          explanation: "35 ÷ 5 = 7 tourists per van."
        },
        {
          id: "st6",
          icon: "🍪",
          title: "Grandma's Fresh Biscuits in Jars (Page 9)",
          prompt: "Grandma bakes 40 biscuits and puts 5 biscuits into each jar. How many jars are needed?",
          sentence: "40 ÷ 5 = [ ? ]",
          expected: "8",
          unit: "jars",
          explanation: "40 ÷ 5 = 8 jars needed."
        },
        {
          id: "st7",
          icon: "🚲",
          title: "Two-Wheeled Bicycles Assembly",
          prompt: "A bicycle rental workshop has 20 wheels. How many 2-wheeled bicycles can they assemble?",
          sentence: "20 ÷ 2 = [ ? ]",
          expected: "10",
          unit: "bicycles",
          explanation: "20 wheels ÷ 2 wheels per bicycle = 10 bicycles."
        },
        {
          id: "st8",
          icon: "🐥",
          title: "Chicks Divided into Coops",
          prompt: "A farmer divides 16 baby chicks equally into 4 small coops. How many chicks in each coop?",
          sentence: "16 ÷ 4 = [ ? ]",
          expected: "4",
          unit: "chicks",
          explanation: "16 ÷ 4 = 4 chicks in each coop."
        }
      ],
      nalarBayiKodi: "👶 Kodi's Baby Logic: Division simply means sharing treats fairly so every friend gets the exact same amount! (Pembagian adalah berbagi kue sama rata tanpa berebut!)"
    },
    {
      id: "ihs-10",
      number: 10,
      page: "Page 10",
      type: "multi_select",
      title: "100-Number Square Facts (Multiples of 2, 5, and 10)",
      badge: "Part VII: Number Grid Patterns",
      instruction: "Look at the 100-number square grid patterns! Choose all statements that are TRUE about multiples of 2, 5, and 10:",
      diagram: `
        <div style="background: rgba(15, 23, 42, 0.7); border-radius: 12px; padding: 14px; margin: 12px 0; border: 1px solid rgba(255,255,255,0.1); text-align: center;">
          <div style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.5;">
            <strong>Patterns on 1-100 Grid:</strong><br>
            • Multiples of 10 always end in: <strong style="color: #38bdf8;">0</strong><br>
            • Multiples of 5 always end in: <strong style="color: #4ade80;">0 or 5</strong><br>
            • Multiples of 2 are always even numbers ending in: <strong style="color: #fbbf24;">0, 2, 4, 6, 8</strong>
          </div>
        </div>
      `,
      options: [
        { key: "A", text: "A. Every multiple of 10 is also a multiple of 2 and a multiple of 5", isCorrect: true, reasonCorrect: "Correct! Numbers ending in 0 (10, 20, 30...) are divisible by 10, 5, and 2." },
        { key: "B", text: "B. 35 is a multiple of 5, but NOT a multiple of 10", isCorrect: true, reasonCorrect: "Correct! 35 ends in 5, so it is divisible by 5, but cannot be divided evenly by 10." },
        { key: "C", text: "C. 42 is an odd number and a multiple of 5", isCorrect: false, reasonWrong: "Incorrect! 42 is an even number (ends in 2) and is NOT a multiple of 5." }
      ],
      nalarBayiKodi: "👶 Kodi's Baby Logic: Multiples of 10 have happy zeros at the end! Multiples of 5 love ending in 5 or 0. Multiples of 2 are polite pairs ending in 0, 2, 4, 6, 8!"
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

    let csv = "No,Date,Time,Student Full Name,Class,Roll Number,Final Score (0-100),Status,Correct Answers,Total Questions\n";
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

  console.log("Modul SD Ihsaniyah Gajahmada Tegal Math Test (Full English) berhasil dimuat!");
})();
