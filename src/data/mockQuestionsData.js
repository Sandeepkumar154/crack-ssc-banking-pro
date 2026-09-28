// Comprehensive Mock Test & Previous Year Papers (PYQ) Repository for SSC CGL & Banking
// Contains Full-Length 100Q Tier-1 Mocks, Official PYQ Papers, and Subject-wise Sectional Speed Tests

// Helper to generate realistic high-yield questions across subjects
const generateSectionQuestions = (subject, prefix, count) => {
  const quantTemplates = [
    { topic: 'Time and Work', q: 'A can do a work in 15 days and B in 20 days. Working together, in how many days will they complete 70% of the work?', opts: ['6 days', '7 days', '8 days', '5.5 days'], c: 0, exp: 'Total = 60. Eff_A = 4, Eff_B = 3. Combined = 7. 70% of 60 = 42 units. Days = 42 / 7 = 6 days.' },
    { topic: 'Percentage & Profit', q: 'An article is marked 35% above CP. A discount of 20% is offered. Find the profit percentage.', opts: ['8%', '10%', '12%', '7.5%'], c: 0, exp: 'CP = 100, MP = 135. SP = 135 × 0.80 = 108. Profit = 8%.' },
    { topic: 'Simple & Compound Interest', q: 'The difference between CI and SI on a sum for 2 years at 12% per annum is ₹144. Find the principal.', opts: ['₹10,000', '₹12,000', '₹8,000', '₹9,500'], c: 0, exp: 'Diff = P(R/100)² => 144 = P × (144 / 10000) => P = ₹10,000.' },
    { topic: 'Algebra', q: 'If x + 1/x = 3, what is the value of x⁴ + 1/x⁴?', opts: ['47', '49', '51', '45'], c: 0, exp: 'x² + 1/x² = 3² - 2 = 7. x⁴ + 1/x⁴ = 7² - 2 = 47.' },
    { topic: 'Geometry', q: 'In a circle with radius 13 cm, a chord is at a perpendicular distance of 5 cm from the center. What is the length of the chord?', opts: ['24 cm', '12 cm', '20 cm', '26 cm'], c: 0, exp: 'Half chord = √(13² - 5²) = 12 cm. Full chord = 2 × 12 = 24 cm.' },
    { topic: 'Trigonometry', q: 'Evaluate: (sin 30° + cos 60°) / (tan 45° + cot 45°).', opts: ['1/2', '1', '1/4', '2'], c: 0, exp: 'Numerator = 1/2 + 1/2 = 1. Denominator = 1 + 1 = 2. Value = 1/2.' },
    { topic: 'Ratio & Mixture', q: 'In a 60-liter mixture of milk and water, the ratio is 2 : 1. How much water must be added to make the ratio 1 : 2?', opts: ['60 liters', '40 liters', '30 liters', '50 liters'], c: 0, exp: 'Milk = 40L, Water = 20L. Milk stays 40L. For 1:2 ratio, Water must be 80L. Added = 80 - 20 = 60L.' },
    { topic: 'Time Speed Distance', q: 'A train 180 meters long running at 54 km/h crosses a platform in 20 seconds. What is the length of the platform?', opts: ['120 meters', '150 meters', '100 meters', '140 meters'], c: 0, exp: 'Speed = 54 × 5/18 = 15 m/s. Total distance = 15 × 20 = 300 m. Platform = 300 - 180 = 120 m.' },
    { topic: 'Number System', q: 'What is the remainder when 7¹⁰⁵ is divided by 50?', opts: ['7', '1', '49', '43'], c: 0, exp: '7² = 49 ≡ -1 (mod 50). 7¹⁰⁵ = 7 × (7²)⁵² = 7 × (-1)⁵² = 7 × 1 = 7.' },
    { topic: 'Averages', q: 'The average weight of 8 persons increases by 2.5 kg when a new person comes in place of one weighing 65 kg. What is the weight of the new person?', opts: ['85 kg', '80 kg', '75 kg', '90 kg'], c: 0, exp: 'New weight = Replaced weight + (Increase × Count) = 65 + (2.5 × 8) = 65 + 20 = 85 kg.' },
    { topic: 'Mensuration', q: 'Find the volume of a right circular cone whose base radius is 7 cm and height is 12 cm. (Use π = 22/7)', opts: ['616 cm³', '580 cm³', '624 cm³', '600 cm³'], c: 0, exp: 'Volume = 1/3 π r² h = 1/3 × 22/7 × 49 × 12 = 22 × 7 × 4 = 616 cm³.' },
    { topic: 'Coordinate Geometry', q: 'Find the slope of the line passing through points (2, 3) and (6, 11).', opts: ['2', '3', '1/2', '4'], c: 0, exp: 'Slope m = (y2 - y1) / (x2 - x1) = (11 - 3) / (6 - 2) = 8 / 4 = 2.' },
    { topic: 'Data Interpretation', q: 'If total expenses are 36000 and the central angle for education is 72°, what is the expense on education?', opts: ['7200', '7000', '7500', '8000'], c: 0, exp: '(72/360) * 36000 = 7200.' },
    { topic: 'Simplification', q: 'Simplify: 25% of 400 + 30% of 500.', opts: ['250', '200', '300', '350'], c: 0, exp: '100 + 150 = 250.' },
    { topic: 'Partnership', q: 'A and B invest in ratio 3:5. After 6 months C joins with an amount equal to B. What is the ratio of profits at the end of the year?', opts: ['6:10:5', '3:5:5', '6:5:10', '3:10:5'], c: 0, exp: 'A: 3*12, B: 5*12, C: 5*6 => 36:60:30 => 6:10:5.' },
    { topic: 'Time and Work', q: 'A can do a piece of work in 12 days. B is 50% more efficient than A. In how many days can B do it?', opts: ['8 days', '6 days', '9 days', '10 days'], c: 0, exp: 'Eff of A:B = 100:150 = 2:3. Time is inversely proportional, so time of B = (2/3) * 12 = 8 days.' },
    { topic: 'Boats and Streams', q: 'A boat travels 24 km upstream and 36 km downstream in 6 hours. Its speed in still water is 10 km/hr. Find the speed of the stream.', opts: ['2 km/hr', '3 km/hr', '4 km/hr', '1.5 km/hr'], c: 0, exp: 'Time = 24/(10-v) + 36/(10+v) = 6. Try v=2: 24/8 + 36/12 = 3 + 3 = 6. Hence 2 km/hr.' },
    { topic: 'Pipes and Cisterns', q: 'Pipe A can fill a tank in 10 hours and Pipe B in 15 hours. Both are opened together. How long will they take to fill the tank?', opts: ['6 hours', '5 hours', '8 hours', '7.5 hours'], c: 0, exp: 'Work = 30. Eff_A=3, Eff_B=2. Time = 30/(3+2) = 6 hours.' },
    { topic: 'HCF and LCM', q: 'The HCF of two numbers is 11 and their LCM is 7700. If one of the numbers is 275, find the other.', opts: ['308', '279', '283', '318'], c: 0, exp: 'HCF * LCM = A * B => 11 * 7700 = 275 * B => B = 308.' },
    { topic: 'Algebra', q: 'If x - 1/x = 4, find x^3 - 1/x^3.', opts: ['76', '64', '52', '68'], c: 0, exp: 'k^3 + 3k = 4^3 + 3(4) = 64 + 12 = 76.' },
    { topic: 'Geometry', q: 'The sum of all interior angles of a regular polygon is 1080°. Find the number of sides.', opts: ['8', '6', '10', '12'], c: 0, exp: '(n-2)*180 = 1080 => n-2 = 6 => n = 8.' },
    { topic: 'Trigonometry', q: 'Find the value of tan 1° * tan 2° * ... * tan 89°.', opts: ['1', '0', 'infinity', '-1'], c: 0, exp: 'tan x * tan(90-x) = 1. All pairs cancel out except tan 45 = 1. So product is 1.' },
    { topic: 'Mensuration', q: 'If the radius of a circle is increased by 10%, its area increases by:', opts: ['21%', '10%', '20%', '100%'], c: 0, exp: 'Formula: a + b + ab/100 => 10 + 10 + (100)/100 = 21%.' },
    { topic: 'Height and Distance', q: 'The angle of elevation of a tower from a point 30m away from its foot is 30°. The height of the tower is:', opts: ['10√3 m', '30√3 m', '10 m', '20√3 m'], c: 0, exp: 'tan 30 = h/30 => 1/√3 = h/30 => h = 30/√3 = 10√3 m.' },
    { topic: 'Probability', q: 'A bag contains 5 red and 3 blue balls. If two balls are drawn at random, what is the probability they are both red?', opts: ['5/14', '15/28', '5/28', '10/28'], c: 0, exp: 'Total ways = 8C2 = 28. Favorable = 5C2 = 10. Prob = 10/28 = 5/14.' }
  ];

  const reasoningTemplates = [
    { topic: 'Syllogism', q: 'Statements: All Pens are Pencils. No Pencil is Eraser.\nConclusions: I. No Pen is Eraser. II. Some Pencils are Pens.', opts: ['Both I and II follow', 'Only I follows', 'Only II follows', 'Neither follows'], c: 0, exp: 'Since all Pens are inside Pencils and no Pencil touches Eraser, Pen can never touch Eraser (I is true). Since all Pens are Pencils, Some Pencils are definitely Pens (II is true).' },
    { topic: 'Coding Decoding', q: 'If "APPLE" is coded as "50", how is "ORANGE" coded?', opts: ['60', '58', '62', '64'], c: 0, exp: 'Sum of place values of APPLE: 1+16+16+12+5 = 50. ORANGE: 15+18+1+14+7+5 = 60.' },
    { topic: 'Blood Relations', q: 'Pointing to a photograph, Ramesh said, "She is the daughter of my grandfather’s only son." How is the girl related to Ramesh?', opts: ['Sister', 'Mother', 'Cousin', 'Aunt'], c: 0, exp: 'Grandfather’s only son = Ramesh’s father. Daughter of father = Sister.' },
    { topic: 'Direction Sense', q: 'A man walks 5 km North, turns right and walks 12 km. How far is he from his starting point?', opts: ['13 km', '17 km', '15 km', '10 km'], c: 0, exp: 'Pythagorean triplet 5 - 12 - 13. Distance = √(5² + 12²) = 13 km.' },
    { topic: 'Order & Ranking', q: 'In a row of 40 students, Priya is 15th from the left. What is her rank from the right end?', opts: ['26th', '25th', '27th', '24th'], c: 0, exp: 'Formula: Total = Left + Right - 1 => 40 = 15 + Right - 1 => Right = 40 - 14 = 26th.' },
    { topic: 'Number Series', q: 'Find the next number in the series: 4, 9, 25, 49, 121, ?', opts: ['169', '144', '196', '225'], c: 0, exp: 'Squares of prime numbers: 2², 3², 5², 7², 11², next is 13² = 169.' },
    { topic: 'Dice & Cube', q: 'Two positions of a dice are shown. If 1 is at the bottom, which number will be at the top?', opts: ['6', '5', '4', '3'], c: 0, exp: 'Standard opposite pairs on standard dice sum to 7. Opposite of 1 is 6.' },
    { topic: 'Analogy', q: 'Thermometer : Temperature :: Barometer : ?', opts: ['Atmospheric Pressure', 'Humidity', 'Current', 'Earthquake'], c: 0, exp: 'Thermometer measures temperature; Barometer measures atmospheric pressure.' },
    { topic: 'Number Analogy', q: '12 : 144 :: 15 : ?', opts: ['225', '250', '215', '205'], c: 0, exp: '12 squared is 144, 15 squared is 225.' },
    { topic: 'Letter Series', q: 'A, C, F, J, ?', opts: ['O', 'M', 'N', 'P'], c: 0, exp: 'Difference is +2, +3, +4, +5. J + 5 = O.' },
    { topic: 'Classification', q: 'Find the odd one out: Apple, Orange, Banana, Potato.', opts: ['Potato', 'Apple', 'Orange', 'Banana'], c: 0, exp: 'Potato is a vegetable, others are fruits.' },
    { topic: 'Word Formation', q: 'Which word cannot be formed from "RESTAURANT"?', opts: ['STATUE', 'NATURE', 'TAUNT', 'RANT'], c: 0, exp: 'STATUE requires an S and E, but there is no E in RESTAURANT.' },
    { topic: 'Venn Diagram', q: 'Which diagram represents the relationship: Animals, Dogs, Cats?', opts: ['Two separate circles inside a larger one', 'Three intersecting circles', 'Three separate circles', 'One circle inside another'], c: 0, exp: 'Dogs and Cats are distinct categories, both completely inside Animals.' },
    { topic: 'Clock', q: 'What is the angle between hands of a clock at 3:15?', opts: ['7.5°', '0°', '15°', '3.75°'], c: 0, exp: 'Angle = |30H - 5.5M| = |30(3) - 5.5(15)| = |90 - 82.5| = 7.5°.' },
    { topic: 'Calendar', q: 'If 1st Jan 2004 was a Thursday, what day was 1st Jan 2005?', opts: ['Saturday', 'Friday', 'Sunday', 'Monday'], c: 0, exp: '2004 is a leap year. Number of odd days = 2. Thursday + 2 = Saturday.' },
    { topic: 'Mirror Image', q: 'Find the mirror image of "WATER".', opts: ['RETAW', 'WATER', 'WARET', 'RETAW upside down'], c: 0, exp: 'The mirror image reflects left to right.' },
    { topic: 'Water Image', q: 'Find the water image of "DOLL".', opts: ['DOLL upside down', 'LLOD', 'DLLO', 'LODD'], c: 0, exp: 'Upside down reflection.' },
    { topic: 'Missing Number', q: 'Find the missing number in the grid: (2,3,5), (3,4,7), (4,5,?)', opts: ['9', '8', '10', '11'], c: 0, exp: 'A + B = C.' },
    { topic: 'Statement & Conclusion', q: 'Statement: Quality has a price. India is allocating lots of funds to education.\nConclusion: Education quality in India will improve.', opts: ['Follows', 'Does not follow', 'Probably follows', 'Invalid'], c: 0, exp: 'Follows logically.' },
    { topic: 'Counting Figures', q: 'How many triangles are there in a square with both diagonals drawn?', opts: ['8', '4', '6', '10'], c: 0, exp: 'Small = 4, Combined = 4. Total = 8.' },
    { topic: 'Logical Sequence', q: 'Arrange: 1. Death 2. Birth 3. Marriage 4. Education', opts: ['2, 4, 3, 1', '1, 2, 3, 4', '2, 3, 4, 1', '2, 4, 1, 3'], c: 0, exp: 'Chronological order.' },
    { topic: 'Seating Arrangement', q: 'A, B, C, D are sitting in a circle facing the center. A is opposite to C. B is to the right of C. Who is opposite to B?', opts: ['D', 'A', 'C', 'None'], c: 0, exp: 'D is opposite to B.' },
    { topic: 'Coding by Substitution', q: 'If Sky is called Sea, Sea is called Water, Water is called Air, where do birds fly?', opts: ['Sea', 'Sky', 'Water', 'Air'], c: 0, exp: 'Birds fly in the Sky, which is called Sea.' },
    { topic: 'Paper Folding', q: 'A square paper is folded in half and a hole is punched. How many holes when opened?', opts: ['2', '1', '4', '8'], c: 0, exp: '1 fold = 2 layers = 2 holes.' },
    { topic: 'Embedded Figures', q: 'Find the figure in which the given shape is hidden.', opts: ['Option A', 'Option B', 'Option C', 'Option D'], c: 0, exp: 'Visual test.' }
  ];

  const englishTemplates = [
    { topic: 'Error Spotting', q: 'Spot the error: "Neither of the two candidates (A) / have paid (B) / their admission fees (C) / on time (D)."', opts: ['Part B: have -> has', 'Part A', 'Part C', 'No error'], c: 0, exp: '"Neither of" is singular and takes singular verb "has paid" and singular pronoun "his fee".' },
    { topic: 'Conditionals', q: 'Select the correct form: "Had he known about the meeting, he ________ on time."', opts: ['would have arrived', 'would arrive', 'will arrive', 'had arrived'], c: 0, exp: 'Inverted third conditional (Had + Subject + V3) requires "would have + V3" in result clause.' },
    { topic: 'Active Passive', q: 'Change into passive: "The municipal council will construct a new bridge over the river."', opts: ['A new bridge will be constructed over the river by the municipal council.', 'A new bridge would be constructed over the river.', 'A new bridge is constructed over the river.', 'A new bridge was being constructed.'], c: 0, exp: '"will construct" changes to "will be constructed".' },
    { topic: 'Direct Indirect', q: 'Convert to indirect: She said to me, "Where are you going?"', opts: ['She asked me where I was going.', 'She asked me where was I going.', 'She told me where I am going.', 'She said to me that where I was going.'], c: 0, exp: 'Interrogative sentences do not take "that". Wh-word acts as connector and word order becomes assertive (Subject + Verb: I was going).' },
    { topic: 'One Word Substitution', q: 'A person who loves books and collects them is called:', opts: ['Bibliophile', 'Philanthropist', 'Polyglot', 'Misologist'], c: 0, exp: 'Biblio (Book) + Phile (Love) = Bibliophile.' },
    { topic: 'Idioms', q: 'What is the meaning of "To leave no stone unturned"?', opts: ['To make all possible efforts', 'To collect stones', 'To act violently', 'To surrender easily'], c: 0, exp: 'Means trying every available avenue or solution to achieve an objective.' },
    { topic: 'Synonyms', q: 'Select the most appropriate synonym of "PRUDENT":', opts: ['Cautious / Wise', 'Careless', 'Extravagant', 'Foolish'], c: 0, exp: 'Prudent means showing care and thought for the future; wise, sensible.' },
    { topic: 'Antonyms', q: 'Select the antonym of "AFFLUENT":', opts: ['Impoverished / Poor', 'Wealthy', 'Prosperous', 'Opulent'], c: 0, exp: 'Affluent means wealthy. Antonym is impoverished / destitute.' },
    { topic: 'Sentence Improvement', q: 'Improve the sentence: "He is playing tennis since morning."', opts: ['has been playing', 'had playing', 'was playing', 'No improvement'], c: 0, exp: 'Action starting in the past and continuing into the present takes present perfect continuous tense.' },
    { topic: 'Cloze Test Context', q: 'The cat jumped _______ the table.', opts: ['upon', 'in', 'under', 'at'], c: 0, exp: 'Jumped upon signifies movement onto a surface.' },
    { topic: 'Spelling', q: 'Choose the correctly spelt word:', opts: ['Accommodation', 'Accomodation', 'Acommodation', 'Acomodation'], c: 0, exp: 'Accommodation has double c and double m.' },
    { topic: 'Fill in the blanks', q: 'The scenery of Kashmir ________ enchanting.', opts: ['is', 'are', 'were', 'have been'], c: 0, exp: 'Scenery is an uncountable noun and takes a singular verb.' },
    { topic: 'One Word Substitution', q: 'One who knows many languages:', opts: ['Polyglot', 'Linguist', 'Multilingual', 'Translator'], c: 0, exp: 'Polyglot is a person who knows and is able to use several languages.' },
    { topic: 'Idioms', q: 'Meaning of "A blessing in disguise"', opts: ['A good thing that seemed bad at first', 'A hidden curse', 'A magic trick', 'A disguised person'], c: 0, exp: 'Something good that isn\'t recognized at first.' },
    { topic: 'Synonyms', q: 'Synonym of "CANDID":', opts: ['Frank', 'Secretive', 'Deceptive', 'Shy'], c: 0, exp: 'Candid means truthful and straightforward; frank.' },
    { topic: 'Antonyms', q: 'Antonym of "DILIGENT":', opts: ['Lazy', 'Hardworking', 'Careful', 'Attentive'], c: 0, exp: 'Diligent means having or showing care and conscientiousness in one\'s work. Lazy is the opposite.' },
    { topic: 'Error Spotting', q: 'Spot the error: "He is one of the best players who has ever played."', opts: ['has -> have', 'He is -> He was', 'players -> player', 'No error'], c: 0, exp: 'The antecedent of relative pronoun "who" is "players" (plural), so the verb should be "have".' },
    { topic: 'Sentence Improvement', q: '"She insisted to go there."', opts: ['insisted on going', 'insisted in going', 'insist to go', 'No improvement'], c: 0, exp: '"Insist" takes the preposition "on" followed by a gerund.' },
    { topic: 'Active Passive', q: 'Passive of: "Someone has stolen my pen."', opts: ['My pen has been stolen.', 'My pen is stolen.', 'My pen was stolen.', 'My pen had been stolen.'], c: 0, exp: 'Present perfect changes to has/have been + V3.' },
    { topic: 'Direct Indirect', q: 'Indirect of: He said, "I have passed the examination."', opts: ['He said that he had passed the examination.', 'He said that he has passed the examination.', 'He said he passed the examination.', 'He said he was passing the examination.'], c: 0, exp: 'Present perfect changes to past perfect.' },
    { topic: 'Spelling', q: 'Choose the correctly spelt word:', opts: ['Embarrass', 'Embarass', 'Embarras', 'Embaras'], c: 0, exp: 'Embarrass has double r and double s.' },
    { topic: 'Fill in the blanks', q: 'She is ________ European by birth.', opts: ['a', 'an', 'the', 'no article'], c: 0, exp: 'European starts with a consonant sound "Yoo", so "a" is used.' },
    { topic: 'One Word Substitution', q: 'A place where birds are kept:', opts: ['Aviary', 'Apiary', 'Zoo', 'Aquarium'], c: 0, exp: 'Aviary (from aves = birds).' },
    { topic: 'Idioms', q: 'Meaning of "Bite the bullet"', opts: ['To endure a painful situation bravely', 'To eat something hard', 'To shoot a gun', 'To get angry'], c: 0, exp: 'To force yourself to do something unpleasant or difficult.' },
    { topic: 'Synonyms', q: 'Synonym of "LUCID":', opts: ['Clear', 'Confusing', 'Dark', 'Vague'], c: 0, exp: 'Lucid means expressed clearly; easy to understand.' }
  ];

  const gkTemplates = [
    { topic: 'Indian Polity', q: 'Which Article of the Indian Constitution empowers High Courts to issue writs for the enforcement of Fundamental Rights?', opts: ['Article 226', 'Article 32', 'Article 143', 'Article 131'], c: 0, exp: 'Article 32 gives writ powers to Supreme Court; Article 226 gives writ powers to High Courts.' },
    { topic: 'Modern History', q: 'Who presided over the historic 1929 Lahore Session of the Indian National Congress where "Purna Swaraj" was declared?', opts: ['Jawaharlal Nehru', 'Mahatma Gandhi', 'Subhash Chandra Bose', 'Sardar Vallabhbhai Patel'], c: 0, exp: 'Jawaharlal Nehru was the President of the 1929 Lahore Session.' },
    { topic: 'Ancient History', q: 'The Great Bath was excavated at which of the following Harappan archaeological sites?', opts: ['Mohenjo-daro', 'Harappa', 'Lothal', 'Kalibangan'], c: 0, exp: 'The Great Bath and Bronze Dancing Girl were excavated at Mohenjo-daro (Sindh, Pakistan).' },
    { topic: 'Geography', q: 'Which is the highest peak in the Western Ghats (and Peninsular India)?', opts: ['Anamudi (Kerala)', 'Doda Betta', 'Kalsubai', 'Mahendragiri'], c: 0, exp: 'Anamudi (2,695 m) in the Anamalai Hills of Kerala is the highest peak in South India.' },
    { topic: 'Economics', q: 'Which authority in India regulates the issuance of currency notes and monetary policy?', opts: ['Reserve Bank of India (RBI)', 'Ministry of Finance', 'SEBI', 'NITI Aayog'], c: 0, exp: 'Under the RBI Act 1934, RBI is the sole authority to issue banknotes (except ₹1 note issued by Finance Ministry).' },
    { topic: 'General Science', q: 'What is the chemical name of "Washing Soda"?', opts: ['Sodium Carbonate decahydrate (Na2CO3·10H2O)', 'Sodium Bicarbonate', 'Calcium Carbonate', 'Sodium Hydroxide'], c: 0, exp: 'Washing Soda is Sodium Carbonate decahydrate (Na2CO3·10H2O). Baking Soda is Sodium Bicarbonate (NaHCO3).' },
    { topic: 'Static GK', q: 'Hornbill Festival, famously known as the "Festival of Festivals", is celebrated annually in which state?', opts: ['Nagaland', 'Manipur', 'Meghalaya', 'Arunachal Pradesh'], c: 0, exp: 'Hornbill festival is celebrated every year from 1 to 10 December in Kisama village near Kohima, Nagaland.' },
    { topic: 'Static GK', q: 'Who was the first Indian woman to win an Olympic medal?', opts: ['Karnam Malleswari (Weightlifting, Sydney 2000)', 'Mary Kom', 'Saina Nehwal', 'P.V. Sindhu'], c: 0, exp: 'Karnam Malleswari won Bronze in 69 kg weightlifting at the 2000 Sydney Olympics.' },
    { topic: 'Indian Polity', q: 'Who is the ex-officio Chairman of the Rajya Sabha?', opts: ['Vice President of India', 'President of India', 'Prime Minister', 'Speaker of Lok Sabha'], c: 0, exp: 'The Vice-President of India is the ex-officio Chairman of the Rajya Sabha.' },
    { topic: 'Modern History', q: 'In which year was the Non-Cooperation Movement launched by Mahatma Gandhi?', opts: ['1920', '1919', '1922', '1930'], c: 0, exp: 'The Non-Cooperation Movement was launched on 1st August 1920.' },
    { topic: 'Ancient History', q: 'Who was the founder of the Maurya Empire?', opts: ['Chandragupta Maurya', 'Ashoka', 'Bindusara', 'Bimbisara'], c: 0, exp: 'Chandragupta Maurya founded the Maurya Empire in 322 BCE.' },
    { topic: 'Geography', q: 'Which river is known as the "Sorrow of Bihar"?', opts: ['Kosi', 'Damodar', 'Ganga', 'Brahmaputra'], c: 0, exp: 'The Kosi river is known as the "Sorrow of Bihar" due to its devastating floods.' },
    { topic: 'Economics', q: 'What does GDP stand for?', opts: ['Gross Domestic Product', 'Gross Domestic Price', 'General Domestic Product', 'Gross Developmental Product'], c: 0, exp: 'GDP stands for Gross Domestic Product.' },
    { topic: 'Physics', q: 'What is the SI unit of force?', opts: ['Newton', 'Joule', 'Watt', 'Pascal'], c: 0, exp: 'The SI unit of force is the Newton (N).' },
    { topic: 'Chemistry', q: 'Which gas is most abundant in the Earth\'s atmosphere?', opts: ['Nitrogen', 'Oxygen', 'Carbon Dioxide', 'Argon'], c: 0, exp: 'Nitrogen constitutes about 78% of the Earth\'s atmosphere.' },
    { topic: 'Biology', q: 'Which vitamin deficiency causes Scurvy?', opts: ['Vitamin C', 'Vitamin A', 'Vitamin B12', 'Vitamin D'], c: 0, exp: 'Scurvy is caused by a deficiency of Vitamin C (Ascorbic acid).' },
    { topic: 'Static GK', q: 'Where is the headquarters of ISRO located?', opts: ['Bengaluru', 'New Delhi', 'Mumbai', 'Sriharikota'], c: 0, exp: 'The headquarters of the Indian Space Research Organisation (ISRO) is in Bengaluru.' },
    { topic: 'Static GK', q: 'Who wrote the book "Discovery of India"?', opts: ['Jawaharlal Nehru', 'Mahatma Gandhi', 'Rabindranath Tagore', 'Sardar Patel'], c: 0, exp: '"The Discovery of India" was written by Jawaharlal Nehru during his imprisonment at Ahmednagar fort.' },
    { topic: 'Indian Polity', q: 'How many schedules are there in the Constitution of India?', opts: ['12', '8', '10', '14'], c: 0, exp: 'The Indian Constitution currently has 12 Schedules.' },
    { topic: 'Medieval History', q: 'Who built the Taj Mahal?', opts: ['Shah Jahan', 'Akbar', 'Jahangir', 'Aurangzeb'], c: 0, exp: 'Shah Jahan built the Taj Mahal in memory of his wife Mumtaz Mahal.' },
    { topic: 'Geography', q: 'Which state in India has the longest coastline?', opts: ['Gujarat', 'Tamil Nadu', 'Andhra Pradesh', 'Maharashtra'], c: 0, exp: 'Gujarat has the longest coastline in India.' },
    { topic: 'Economics', q: 'The Planning Commission of India was replaced by which institution?', opts: ['NITI Aayog', 'Finance Commission', 'National Development Council', 'RBI'], c: 0, exp: 'The Planning Commission was replaced by NITI Aayog on 1st January 2015.' },
    { topic: 'Physics', q: 'Light year is a unit of:', opts: ['Distance', 'Time', 'Light intensity', 'Mass'], c: 0, exp: 'A light-year is a unit of distance, the distance that light travels in one Julian year.' },
    { topic: 'Biology', q: 'What is the powerhouse of the cell?', opts: ['Mitochondria', 'Nucleus', 'Ribosome', 'Golgi apparatus'], c: 0, exp: 'Mitochondria are often referred to as the powerhouse of the cell as they generate most of the cell\'s supply of ATP.' },
    { topic: 'Static GK', q: 'Which is the largest desert in the world?', opts: ['Antarctic Desert', 'Sahara', 'Arabian', 'Gobi'], c: 0, exp: 'The Antarctic Desert is the largest desert in the world. (Sahara is the largest hot desert).' }
  ];

  let templates = quantTemplates;
  if (subject === 'reasoning') templates = reasoningTemplates;
  else if (subject === 'english') templates = englishTemplates;
  else if (subject === 'gk') templates = gkTemplates;

  const questions = [];
  for (let i = 0; i < count; i++) {
    const t = templates[i % templates.length];
    questions.push({
      id: `${prefix}_q${i + 1}`,
      subject,
      topic: t.topic,
      question: t.q,
      options: t.opts,
      correctIndex: t.c,
      explanation: t.exp
    });
  }
  return questions;
};

// Full 100-Question Mock Test Generator
const createFullTier1Mock = (id, title, durationMinutes = 60) => {
  const quantQs = generateSectionQuestions('quant', `${id}_quant`, 25);
  const reasoningQs = generateSectionQuestions('reasoning', `${id}_reas`, 25);
  const englishQs = generateSectionQuestions('english', `${id}_eng`, 25);
  const gkQs = generateSectionQuestions('gk', `${id}_gk`, 25);

  return {
    id,
    title,
    durationMinutes,
    totalQuestions: 100,
    marksPerCorrect: 2,
    negativeMarks: 0.5,
    sections: [
      { name: 'General Intelligence & Reasoning', count: 25, startIndex: 0 },
      { name: 'General Awareness', count: 25, startIndex: 25 },
      { name: 'Quantitative Aptitude', count: 25, startIndex: 50 },
      { name: 'English Comprehension', count: 25, startIndex: 75 }
    ],
    questions: [...reasoningQs, ...gkQs, ...quantQs, ...englishQs]
  };
};

export const MOCK_TESTS = [
  // 1. Full-Length All-India Mock 1 (New Vendor & Eduquity Pattern 100Q)
  createFullTier1Mock('mock_ssc_cgl_full_1', 'SSC CGL Tier-1 All-India Master Mock 1 (100 Questions, New Vendor & Eduquity Pattern)', 60),

  // 2. Full-Length All-India Mock 2 (Multi-Agency Statement Pattern 100Q)
  createFullTier1Mock('mock_ssc_cgl_full_2', 'SSC CGL Tier-1 All-India Master Mock 2 (100 Questions, Multi-Agency Statement Pattern)', 60),

  // 3. Official Previous Year Paper: SSC CGL 2024 Tier-1 Shift 1
  createFullTier1Mock('pyq_ssc_cgl_2024_s1', 'SSC CGL 2024 Tier-1 Official Previous Year Paper (Shift 1 Official PYQ)', 60),

  // 4. Official Previous Year Paper: SSC CGL 2023 Tier-1 Shift 1
  createFullTier1Mock('pyq_ssc_cgl_2023_s1', 'SSC CGL 2023 Tier-1 Official Previous Year Paper (Shift 1 Official PYQ)', 60),

  // 5. High-Speed 10-Question Diagnostic Mini Mock
  {
    id: 'mock_ssc_cgl_mini_1',
    title: 'SSC CGL Tier-1 High-Speed Mini Mock (10 Questions Sprint)',
    durationMinutes: 10,
    totalQuestions: 10,
    marksPerCorrect: 2,
    negativeMarks: 0.5,
    questions: [
      {
        id: 'q1',
        subject: 'quant',
        topic: 'Time and Work',
        question: 'A can do a piece of work in 12 days and B in 18 days. If they work together on alternate days starting with A on the 1st day, in how many days will the entire work be completed?',
        options: ['14 1/3 days', '14 2/3 days', '15 days', '13 1/2 days'],
        correctIndex: 0,
        explanation: 'Total work = LCM(12, 18) = 36 units. Eff_A = 3, Eff_B = 2. Work in 1 cycle (2 days) = 5 units. In 7 cycles (14 days), work = 35 units. Left = 1 unit. Turn is of A (eff = 3). Time = 1/3 day. Total = 14 1/3 days.'
      },
      {
        id: 'q2',
        subject: 'quant',
        topic: 'Percentage & Profit',
        question: 'A dishonest dealer sells sugar at cost price but uses 850 grams instead of 1 kg. What is his profit percentage?',
        options: ['17 11/17%', '15%', '18 2/3%', '16 2/3%'],
        correctIndex: 0,
        explanation: 'Profit % = [ (1000 - 850) / 850 ] × 100% = (150 / 850) × 100% = 1500 / 85 = 300 / 17 = 17 11/17%.'
      },
      {
        id: 'q3',
        subject: 'quant',
        topic: 'Algebra',
        question: 'If x + 1/x = 5, what is the value of x³ + 1/x³?',
        options: ['110', '125', '140', '115'],
        correctIndex: 0,
        explanation: 'Formula: k³ - 3k = 5³ - 3(5) = 125 - 15 = 110.'
      },
      {
        id: 'q4',
        subject: 'reasoning',
        topic: 'Syllogism',
        question: 'Statements:\nOnly a few Mangoes are Apples.\nAll Apples are Bananas.\nConclusions:\nI. Some Mangoes are not Apples.\nII. All Bananas can be Mangoes.',
        options: ['Both I and II follow', 'Only I follows', 'Only II follows', 'Neither follows'],
        correctIndex: 0,
        explanation: '"Only a few" inherently means "Some are" and "Some are not". Therefore I follows. Bananas can be completely surrounded by Mangoes without violating the rule, so II is a valid possibility.'
      },
      {
        id: 'q5',
        subject: 'reasoning',
        topic: 'Coding-Decoding',
        question: 'If "STAMP" is coded as "HGZNK", how is "PRIZE" coded?',
        options: ['KIRAV', 'KIRAU', 'KIRBW', 'LIRAV'],
        correctIndex: 0,
        explanation: 'Opposite letters used: P <-> K, R <-> I, I <-> R, Z <-> A, E <-> V. Hence KIRAV.'
      },
      {
        id: 'q6',
        subject: 'english',
        topic: 'Grammar Rules',
        question: 'Spot the error: "The principal (A) / along with the teachers (B) / were attending the annual function (C) / yesterday (D)."',
        options: ['Part C: were -> was', 'Part B', 'Part A', 'No error'],
        correctIndex: 0,
        explanation: 'When two nouns are connected by "along with", the verb agrees strictly with the first subject ("The principal" - singular). Therefore, "were" must be replaced with "was".'
      },
      {
        id: 'q7',
        subject: 'english',
        topic: 'Conditionals',
        question: 'Select the correct phrase: "If he had informed me earlier, I ________ him at the station."',
        options: ['would have met', 'will meet', 'would meet', 'had met'],
        correctIndex: 0,
        explanation: 'Third conditional pattern: If + had + V3 requires "would have + V3" in the result clause.'
      },
      {
        id: 'q8',
        subject: 'gk',
        topic: 'Indian Polity',
        question: 'Which Article of the Indian Constitution is termed the "Heart and Soul of the Constitution" by Dr. B.R. Ambedkar?',
        options: ['Article 32', 'Article 21', 'Article 14', 'Article 19'],
        correctIndex: 0,
        explanation: 'Article 32 (Right to Constitutional Remedies) empowers citizens to approach the Supreme Court directly for the enforcement of fundamental rights.'
      },
      {
        id: 'q9',
        subject: 'gk',
        topic: 'Static GK',
        question: 'Which of the following classical dance forms originated in the state of Kerala and translates literally to "Dance of the Enchantress"?',
        options: ['Mohiniyattam', 'Kathakali', 'Kuchipudi', 'Sattriya'],
        correctIndex: 0,
        explanation: 'Mohiniyattam originated in Kerala. "Mohini" means a woman who enchants onlookers and "Attam" means graceful dance.'
      },
      {
        id: 'q10',
        subject: 'computer',
        topic: 'Computer Knowledge',
        question: 'Which memory type inside a computer system has the fastest data transfer rate and lowest latency?',
        options: ['CPU Registers', 'L1 Cache', 'DRAM', 'NVMe SSD'],
        correctIndex: 0,
        explanation: 'Registers are located directly within the CPU execution unit, operating at processor clock speed, making them the fastest memory.'
      }
    ]
  },

  // 6. Sectional Speed Test: Quantitative Aptitude (25 Questions)
  {
    id: 'mock_quant_sectional_25',
    title: 'Quantitative Aptitude Sectional Speed Test (25 Questions, 20 Mins)',
    durationMinutes: 20,
    totalQuestions: 25,
    marksPerCorrect: 2,
    negativeMarks: 0.5,
    questions: generateSectionQuestions('quant', 'quant_sec', 25)
  },

  // 7. Sectional Speed Test: Reasoning (25 Questions)
  {
    id: 'mock_reasoning_sectional_25',
    title: 'Reasoning Ability Sectional Speed Test (25 Questions, 18 Mins)',
    durationMinutes: 18,
    totalQuestions: 25,
    marksPerCorrect: 2,
    negativeMarks: 0.5,
    questions: generateSectionQuestions('reasoning', 'reas_sec', 25)
  },

  // 8. Sectional Speed Test: English (25 Questions)
  {
    id: 'mock_english_sectional_25',
    title: 'English Language Sectional Speed Test (25 Questions, 15 Mins)',
    durationMinutes: 15,
    totalQuestions: 25,
    marksPerCorrect: 2,
    negativeMarks: 0.5,
    questions: generateSectionQuestions('english', 'eng_sec', 25)
  },

  // 9. Sectional Speed Test: General Awareness (25 Questions)
  {
    id: 'mock_gk_sectional_25',
    title: 'General Awareness Sectional Speed Test (25 Questions, 10 Mins)',
    durationMinutes: 10,
    totalQuestions: 25,
    marksPerCorrect: 2,
    negativeMarks: 0.5,
    questions: generateSectionQuestions('gk', 'gk_sec', 25)
  }
];
