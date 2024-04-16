//Genres
const genre1 = new Genre(1, "Dystopian");
const genre2 = new Genre(2, "Apocalyptic");
const genre3 = new Genre(3, "Sci-Fi");
const genre4 = new Genre(4, "Thriller");
const genre6 = new Genre(5, "Fantasy");

//Authors
const a1 = new Author(1, "Nicholas Sansbury Smith", "./temp");        
const a2 = new Author(2, "Marie Lu", "./temp");
const a3 = new Author(3, "Michael Grant", "./temp");
const a4 = new Author(4, "Alexander Gordon Smith", "./temp");
const a5 = new Author(5, "Lex Thomas", "./temp");
const a6 = new Author(6, "Alexandra Bracken", "./temp");
const a7 = new Author(7, "K.A. Riley", "./temp");
const a8 = new Author(8, "Veronica Roth", "./temp");
const a9 = new Author(9, "Dan Wells", "./temp");
const a10 = new Author(10, "E.G. Michaels", "./temp");
const a11 = new Author(11, "Robison Wells", "./temp");
const a12 = new Author(12, "Charlie Higson", "./temp");
const a13 = new Author(13, "Emmy Laybourne", "./temp");
const a14 = new Author(14, "Brian Falkner", "./temp");

/********* Book Authors **************/
//Hell Divers                       //BookGenres
const ba1 = new BookAuthor(1, 1);   const ga1 = new BookGenre(1, 1);  const ga2 = new BookGenre(1, 2);  const ga3 = new BookGenre(1, 3);  const ga4 = new BookGenre(1, 4);
const ba2 = new BookAuthor(2, 1);   const ga5 = new BookGenre(2, 1);  const ga6 = new BookGenre(2, 2);  const ga7 = new BookGenre(2, 3);  const ga8 = new BookGenre(2, 4);
const ba3 = new BookAuthor(3, 1);   const ga9 = new BookGenre(3, 1);  const ga10 = new BookGenre(3, 2);  const ga11 = new BookGenre(3, 3);  const ga12 = new BookGenre(3, 4);
const ba4 = new BookAuthor(4, 1);   const ga13 = new BookGenre(4, 1);  const ga14 = new BookGenre(4, 2);  const ga15 = new BookGenre(4, 3);  const ga16 = new BookGenre(4, 4);
const ba5 = new BookAuthor(5, 1);   const ga17 = new BookGenre(5, 1);  const ga18 = new BookGenre(5, 2);  const ga19 = new BookGenre(5, 3);  const ga20 = new BookGenre(5, 4);
const ba6 = new BookAuthor(6, 1);   const ga21 = new BookGenre(6, 1);  const ga22 = new BookGenre(6, 2);  const ga23 = new BookGenre(6, 3);  const ga24 = new BookGenre(6, 4);
const ba7 = new BookAuthor(7, 1);   const ga25 = new BookGenre(7, 1);  const ga26 = new BookGenre(7, 2);  const ga27 = new BookGenre(7, 3);  const ga28 = new BookGenre(7, 4);
const ba8 = new BookAuthor(8, 1);   const ga29 = new BookGenre(8, 1);  const ga30 = new BookGenre(8, 2);  const ga31 = new BookGenre(8, 3);  const ga32 = new BookGenre(8, 4);
const ba9 = new BookAuthor(9, 1);   const ga33 = new BookGenre(9, 1);  const ga34 = new BookGenre(9, 2);  const ga35 = new BookGenre(9, 3);  const ga36 = new BookGenre(9, 4);
const ba10 = new BookAuthor(10, 1); const ga37 = new BookGenre(10, 1);  const ga38 = new BookGenre(10, 2);  const ga39 = new BookGenre(10, 3);  const ga40 = new BookGenre(10, 4);
const ba11 = new BookAuthor(11, 1); const ga41 = new BookGenre(11, 1);  const ga42 = new BookGenre(11, 2);  const ga43 = new BookGenre(11, 3);  const ga44 = new BookGenre(11, 4);
//Legend  
const ba12 = new BookAuthor(12, 2); const ga45 = new BookGenre(12, 1);  const ga46 = new BookGenre(12, 3);
const ba13 = new BookAuthor(13, 2); const ga47 = new BookGenre(13, 1);  const ga48 = new BookGenre(13, 3);  
const ba14 = new BookAuthor(14, 2); const ga49 = new BookGenre(14, 1);  const ga50 = new BookGenre(14, 3);
const ba15 = new BookAuthor(15, 2); const ga51 = new BookGenre(15, 1);  const ga52 = new BookGenre(15, 3);
//BZRK
const ba16 = new BookAuthor(16, 3); const ga53 = new BookGenre(16, 1);  const ga54 = new BookGenre(16, 3); 
const ba17 = new BookAuthor(17, 3); const ga56 = new BookGenre(17, 1);  const ga57 = new BookGenre(17, 3); 
const ba18 = new BookAuthor(18, 3); const ga59 = new BookGenre(18, 1);  const ga60 = new BookGenre(18, 3); 
//The Young Elites
const ba19 = new BookAuthor(19, 2); const ga61 = new BookGenre(19, 1);  const ga62 = new BookGenre(19, 3);  const ga63 = new BookGenre(19, 5);
const ba20 = new BookAuthor(20, 2); const ga64 = new BookGenre(20, 1);  const ga65 = new BookGenre(20, 3);  const ga66 = new BookGenre(20, 5);
const ba21 = new BookAuthor(21, 2); const ga67 = new BookGenre(21, 1);  const ga68 = new BookGenre(21, 3);  const ga69 = new BookGenre(21, 5);
//Escape From Furnace
const ba22 = new BookAuthor(22, 4); const ga70 = new BookGenre(22, 1); const ga72 = new BookGenre(22, 3); const ga73 = new BookGenre(22, 4); const ga74 = new BookGenre(22, 5);
const ba23 = new BookAuthor(23, 4); const ga75 = new BookGenre(23, 1); const ga76 = new BookGenre(23, 3); const ga77 = new BookGenre(23, 4); const ga78 = new BookGenre(23, 5);
const ba24 = new BookAuthor(24, 4); const ga79 = new BookGenre(24, 1); const ga80 = new BookGenre(24, 3); const ga81 = new BookGenre(24, 4); const ga82 = new BookGenre(24, 5);
const ba25 = new BookAuthor(25, 4); const ga83 = new BookGenre(25, 1); const ga84 = new BookGenre(25, 3); const ga85 = new BookGenre(25, 4); const ga86 = new BookGenre(25, 5);
const ba26 = new BookAuthor(26, 4); const ga87 = new BookGenre(26, 1); const ga88 = new BookGenre(26, 3); const ga89 = new BookGenre(26, 4); const ga90 = new BookGenre(26, 5);
//Gone
const ba27 = new BookAuthor(27, 3); const ga91 = new BookGenre(27,1);  const ga92 = new BookGenre(27,3);  const ga93 = new BookGenre(27,5);
const ba28 = new BookAuthor(28, 3); const ga94 = new BookGenre(28,1);  const ga95 = new BookGenre(28,3);  const ga96 = new BookGenre(28,5);
const ba29 = new BookAuthor(29, 3); const ga97 = new BookGenre(29,1);  const ga98 = new BookGenre(29,3);  const ga99 = new BookGenre(29,5);
const ba30 = new BookAuthor(30, 3); const ga100 = new BookGenre(30,1);  const ga101 = new BookGenre(30,3);  const ga102 = new BookGenre(30,5);
const ba31 = new BookAuthor(31, 3); const ga103 = new BookGenre(31,1);  const ga104 = new BookGenre(31,3);  const ga105 = new BookGenre(31,5);
const ba32 = new BookAuthor(32, 3); const ga106 = new BookGenre(32,1);  const ga107 = new BookGenre(32,3);  const ga108 = new BookGenre(32,5);
//Monster
const ba33 = new BookAuthor(33, 3); const ga109 = new BookGenre(33,1);  const ga110 = new BookGenre(33,3);  const ga111 = new BookGenre(33,5);
const ba34 = new BookAuthor(34, 3); const ga112 = new BookGenre(34,1);  const ga113 = new BookGenre(34,3);  const ga114 = new BookGenre(34,5);
const ba35 = new BookAuthor(35, 3); const ga115 = new BookGenre(35,1);  const ga116 = new BookGenre(35,3);  const ga117 = new BookGenre(35,5);
//Quarantine
const ba36 = new BookAuthor(36, 5); const ga118 = new BookGenre(36,1);  const ga119 = new BookGenre(36,2);  const ga120 = new BookGenre(36,4);
const ba37 = new BookAuthor(37, 5); const ga121 = new BookGenre(37,1);  const ga122 = new BookGenre(37,2);  const ga123 = new BookGenre(37,4);
const ba38 = new BookAuthor(38, 5); const ga124 = new BookGenre(38,1);  const ga125 = new BookGenre(38,2);  const ga126 = new BookGenre(38,4);
const ba39 = new BookAuthor(39, 5); const ga127 = new BookGenre(39,1);  const ga128 = new BookGenre(39,2);  const ga129 = new BookGenre(39,4);
//The Darkest Minds
const ba40 = new BookAuthor(40, 6); const ga130 = new BookGenre(40,1);  const ga131 = new BookGenre(40,3);  const ga132 = new BookGenre(40,5);
const ba41 = new BookAuthor(41, 6); const ga133 = new BookGenre(41,1);  const ga134 = new BookGenre(41,3);  const ga135 = new BookGenre(41,5);
const ba42 = new BookAuthor(42, 6); const ga136 = new BookGenre(42,1);  const ga137 = new BookGenre(42,3);  const ga138 = new BookGenre(42,5);
const ba43 = new BookAuthor(43, 6); const ga139 = new BookGenre(43,1);  const ga140 = new BookGenre(43,3);  const ga141 = new BookGenre(43,5);
const ba44 = new BookAuthor(44, 6); const ga142 = new BookGenre(44,1);  const ga143 = new BookGenre(44,3);  const ga144 = new BookGenre(44,5);
//The Conspiracy Chronicles
const ba45 = new BookAuthor(45,7); const ga145 = new BookGenre(4,1); const ga146 = new BookGenre(4,3);  const ga147 = new BookGenre(4,5);
const ba46 = new BookAuthor(46,7); const ga148 = new BookGenre(4,1); const ga149 = new BookGenre(4,3);  const ga150 = new BookGenre(4,5);
const ba47 = new BookAuthor(47,7); const ga151 = new BookGenre(4,1); const ga152 = new BookGenre(4,3);  const ga153 = new BookGenre(4,5);
const ba48 = new BookAuthor(48,7); const ga154 = new BookGenre(4,1); const ga155 = new BookGenre(4,3);  const ga156 = new BookGenre(4,5);
const ba49 = new BookAuthor(49,7); const ga157 = new BookGenre(4,1); const ga158 = new BookGenre(4,3);  const ga159 = new BookGenre(4,5);
const ba50 = new BookAuthor(50,7); const ga160 = new BookGenre(5,1); const ga161 = new BookGenre(5,3);  const ga162 = new BookGenre(5,5);
const ba51 = new BookAuthor(51,7); const ga163 = new BookGenre(5,1); const ga164 = new BookGenre(5,3);  const ga165 = new BookGenre(5,5);
const ba52 = new BookAuthor(52,7); const ga166 = new BookGenre(5,1); const ga167 = new BookGenre(5,3);  const ga168 = new BookGenre(5,5);
const ba53 = new BookAuthor(53,7); const ga169 = new BookGenre(5,1); const ga170 = new BookGenre(5,3);  const ga171 = new BookGenre(5,5);
const ba54 = new BookAuthor(54,7); const ga172 = new BookGenre(5,1); const ga173 = new BookGenre(5,3);  const ga174 = new BookGenre(5,5);
const ba55 = new BookAuthor(55,7); const ga175 = new BookGenre(5,1); const ga176 = new BookGenre(5,3);  const ga177 = new BookGenre(5,5); 
const ba56 = new BookAuthor(56,7); const ga178 = new BookGenre(5,1); const ga179 = new BookGenre(5,3);  const ga180 = new BookGenre(5,5);
const ba57 = new BookAuthor(57,7); const ga181 = new BookGenre(5,1); const ga182 = new BookGenre(5,3);  const ga183 = new BookGenre(5,5);
const ba58 = new BookAuthor(58,7); const ga184 = new BookGenre(5,1); const ga185 = new BookGenre(5,3);  const ga186 = new BookGenre(5,5);
const ba59 = new BookAuthor(59,7); const ga187 = new BookGenre(5,1); const ga188 = new BookGenre(5,3);  const ga189 = new BookGenre(5,5);
//Divergent
const ba60 = new BookAuthor(60,8); const ga190 = new BookGenre(60,1); const ga191 = new BookGenre(60,3);  const ga193 = new BookGenre(60,5);
const ba61 = new BookAuthor(61,8); const ga194 = new BookGenre(61,1); const ga195 = new BookGenre(61,3);  const ga196 = new BookGenre(61,5);
const ba62 = new BookAuthor(62,8); const ga197 = new BookGenre(62,1); const ga198 = new BookGenre(62,3);  const ga199 = new BookGenre(62,5);
const ba63 = new BookAuthor(63,8); const ga200 = new BookGenre(63,1); const ga201 = new BookGenre(63,3);  const ga202 = new BookGenre(63,5);
//Partials
const ba64 = new BookAuthor(64,9); const ga203 = new BookGenre(64,1); const ga204 = new BookGenre(64,2); const ga205 = new BookGenre(64,3); 
const ba65 = new BookAuthor(65,9); const ga206 = new BookGenre(65,1); const ga207 = new BookGenre(65,2); const ga208 = new BookGenre(65,3);
const ba66 = new BookAuthor(66,9); const ga209 = new BookGenre(66,1); const ga210 = new BookGenre(66,2); const ga211 = new BookGenre(66,3);
//Wretched
const ba67 = new BookAuthor(67,10); const ga212 = new BookGenre(67,1); const ga213 = new BookGenre(67,2); const ga214 = new BookGenre(67,3); const ga215 = new BookGenre(67,4);
const ba68 = new BookAuthor(68,10); const ga216 = new BookGenre(68,1); const ga217 = new BookGenre(68,2); const ga218 = new BookGenre(68,3); const ga219 = new BookGenre(68,4);
const ba69 = new BookAuthor(69,10); const ga220 = new BookGenre(69,1); const ga221 = new BookGenre(69,2); const ga222 = new BookGenre(69,3); const ga223 = new BookGenre(69,4);
const ba70 = new BookAuthor(70,10); const ga224 = new BookGenre(70,1); const ga225 = new BookGenre(70,2); const ga226 = new BookGenre(70,3); const ga227 = new BookGenre(70,4);
//Variant
const ba71 = new BookAuthor(71,11); const ga228 = new BookGenre(71,1); const ga229 = new BookGenre(71,3); const ga230 = new BookGenre(71,4); const ga231 = new BookGenre(71,5);
const ba72 = new BookAuthor(72,11); const ga232 = new BookGenre(72,1); const ga233 = new BookGenre(72,3); const ga234 = new BookGenre(72,4); const ga235 = new BookGenre(72,5);
//The Enemy 
const ba73 = new BookAuthor(73,12); const ga236 = new BookGenre(73,1);  const ga237 = new BookGenre(73,2);  const ga238 = new BookGenre(73,3);  const ga239 = new BookGenre(73,4);
const ba74 = new BookAuthor(74,12); const ga240 = new BookGenre(74,1);  const ga241 = new BookGenre(74,2);  const ga242 = new BookGenre(74,3);  const ga243 = new BookGenre(74,4);
const ba75 = new BookAuthor(75,12); const ga244 = new BookGenre(75,1);  const ga245 = new BookGenre(75,2);  const ga246 = new BookGenre(75,3);  const ga247 = new BookGenre(75,4);
const ba76 = new BookAuthor(76,12); const ga248 = new BookGenre(76,1);  const ga249 = new BookGenre(76,2);  const ga250 = new BookGenre(76,3);  const ga251 = new BookGenre(76,4);
const ba77 = new BookAuthor(77,12); const ga252 = new BookGenre(77,1);  const ga253 = new BookGenre(77,2);  const ga254 = new BookGenre(77,3);  const ga255 = new BookGenre(77,4);
const ba78 = new BookAuthor(78,12); const ga256 = new BookGenre(78,1);  const ga257 = new BookGenre(78,2);  const ga258 = new BookGenre(78,3);  const ga259 = new BookGenre(78,4);
const ba79 = new BookAuthor(79,12); const ga260 = new BookGenre(79,1);  const ga261 = new BookGenre(79,2);  const ga262 = new BookGenre(79,3);  const ga263 = new BookGenre(79,4);
//Monument 14
const ba80 = new BookAuthor(80,13); const ga264 = new BookGenre(80,1);  const ga265 = new BookGenre(80,2);  const ga266 = new BookGenre(80,3);
const ba81 = new BookAuthor(81,13); const ga267 = new BookGenre(81,1);  const ga268 = new BookGenre(81,2);  const ga269 = new BookGenre(81,3);
const ba82 = new BookAuthor(82,13); const ga270 = new BookGenre(82,1);  const ga271 = new BookGenre(82,2);  const ga272 = new BookGenre(82,3);
//Stand Alones
const ba83 = new BookAuthor(83,14); const ga273 = new BookGenre(8,1);  const ga274 = new BookGenre(8,3);  const ga275 = new BookGenre(8,5);
const ba84 = new BookAuthor(84,14); const ga276 = new BookGenre(8,1);  const ga277 = new BookGenre(8,3);  const ga278 = new BookGenre(8,5);

//**NOT UPDATED** 
//Series and Book hard data
const HellDivers = new Series(1, "Hell Divers", 11);
const h1 = new Book(1, 1, "Hell Divers", 200, "temp", 2000, "./assets/images/helldivers1.jpg", "Nicholas Sansbury Smith", false);
const h2 = new Book(2, 1, "Hell Divers: Ghosts", 200, "temp", 2000, "./assets/images/helldivers2.jpg", "Nicholas Sansbury Smith", false);
const h3 = new Book(3, 1, "Hell Divers: Deliverance", 200, "temp", 2000, "./assets/images/helldivers3.jpg", "Nicholas Sansbury Smith", false);
const h4 = new Book(4, 1, "Hell Divers: Wolves", 200, "temp", 2000, "./assets/images/helldivers4.jpg", "Nicholas Sansbury Smith", false);
const h5 = new Book(5, 1, "Hell Divers: Captives", 200, "temp", 2000, "./assets/images/helldivers5.jpg", "Nicholas Sansbury Smith", false);
const h6 = new Book(6, 1, "Hell Divers: Allegiance", 200, "temp", 2000, "./assets/images/helldivers6.jpg", "Nicholas Sansbury Smith", false);
const h7 = new Book(7, 1, "Hell Divers: Warriors", 200, "temp", 2000, "./assets/images/helldivers7.jpg", "Nicholas Sansbury Smith", false);
const h8 = new Book(8, 1, "Hell Divers: King Of The Wastes", 200, "temp", 2000, "./assets/images/helldivers8.jpg", "Nicholas Sansbury Smith", false);
const h9 = new Book(9, 1, "Hell Divers: Radioactive", 200, "temp", 2000, "./assets/images/helldivers9.jpg", "Nicholas Sansbury Smith", false);
const h10 = new Book(10, 1, "Hell Divers: Fallout", 200, "temp", 2000, "./assets/images/helldivers10.jpg", "Nicholas Sansbury Smith", false);
const h11 = new Book(11, 1, "Hell Divers: Renegades", 200, "temp", 2000, "./assets/images/helldivers11.jpg", "Nicholas Sansbury Smith", false);

const Legend = new Series(2, "Legend", 4);
const l1 = new Book(12, 2, "Legend", 200, "temp", 2000, "./assets/images/legend.jpg", "Marie Lu", false);
const l2 = new Book(13, 2, "Progidy", 200, "temp", 2000, "./assets/images/prodigy.jpg", "Marie Lu", false);
const l3 = new Book(14, 2, "Champion", 200, "temp", 2000, "./assets/images/champion.jpg", "Marie Lu", false);
const l4 = new Book(15, 2, "Rebel", 200, "temp", 2000, "./assets/images/rebel.jpg", "Marie Lu", false);

const BZRK = new Series(3, "BZRK", 3);
const b1 = new Book(16, 3, "BZRK", 200, "temp", 2000, "./assets/images/BZRK.jpg", "Michael Grant", false);
const b2 = new Book(17, 3, "BZRK: Reloaded", 200, "temp", 2000, "./assets/images/BZRK-Reloaded.jpg", "Michael Grant", false);
const b3 = new Book(18, 3, "BZRK: Apocalypse", 200, "temp", 2000, "./assets/images/BZRK-Apocalypse.jpg", "Michael Grant", false);

const YoungElites = new Series(4, "The Young Elites", 3);
const ye1 = new Book(19, 2, "The Young Elites", 200, "temp", 2000, "./assets/images/temp.jpg", "Marie Lu", false);
const ye2 = new Book(20, 2, "The Rose Society", 200, "temp", 2000, "./assets/images/temp.jpg", "Marie Lu", false);
const ye3 = new Book(21, 2, "The Midnight Star", 200, "temp", 2000, "./assets/images/temp.jpg", "Marie Lu", false);

const EscapeFromFurnace = new Series(5, "Escape From Furnace", 5);
const esc1 = new Book(22, 4, "Lockdown", 200, "temp", 2000, "./assets/images/temp.jpg", "Alexander Gordon Smith", false);
const esc2 = new Book(23, 4, "Solitary", 200, "temp", 2000, "./assets/images/temp.jpg", "Alexander Gordon Smith", false);
const esc3 = new Book(24, 4, "Death Sentence", 200, "temp", 2000, "./assets/images/temp.jpg", "Alexander Gordon Smith", false);
const esc4 = new Book(25, 4, "Fugitives", 200, "temp", 2000, "./assets/images/temp.jpg", "Alexander Gordon Smith", false);
const esc5 = new Book(26, 4, "Execution", 200, "temp", 2000, "./assets/images/temp.jpg", "Alexander Gordon Smith", false);

const Gone = new Series(6, "Gone", 6);
const g1 = new Book(27, 3, "Gone", 200, "temp", 2000, "./assets/images/temp.jpg", "Michael Grant", false);
const g2 = new Book(28, 3, "Hunger", 200, "temp", 2000, "./assets/images/temp.jpg", "Michael Grant", false);
const g3 = new Book(29, 3, "Lies", 200, "temp", 2000, "./assets/images/temp.jpg", "Michael Grant", false);
const g4 = new Book(30, 3, "Plague", 200, "temp", 2000, "./assets/images/temp.jpg", "Michael Grant", false);
const g5 = new Book(31, 3, "Fear", 200, "temp", 2000, "./assets/images/temp.jpg", "Michael Grant", false);
const g6 = new Book(32, 3, "Light", 200, "temp", 2000, "./assets/images/temp.jpg", "Michael Grant", false);

const Monster = new Series(7, "Monster", 3);
const mon1 = new Book(33, 3, "Monster", 200, "temp", 2000, "./assets/images/temp.jpg", "Michael Grant", false);
const mon2 = new Book(34, 3, "Villain", 200, "temp", 2000, "./assets/images/temp.jpg", "Michael Grant", false);
const mon3 = new Book(35, 3, "Hero", 200, "temp", 2000, "./assets/images/temp.jpg", "Michael Grant", false);

const Quarantine = new Series(8, "Quarantine", 4);
const q1 = new Book(36, 5, "The Loners", 200, "temp", 2000, "./assets/images/temp.jpg", "Lex Thomas", false);
const q2 = new Book(37, 5, "The Saints", 200, "temp", 2000, "./assets/images/temp.jpg", "Lex Thomas", false);
const q3 = new Book(38, 5, "The Burnouts", 200, "temp", 2000, "./assets/images/temp.jpg", "Lex Thomas", false);
const q4 = new Book(39, 5, "The Giant", 200, "temp", 2000, "./assets/images/temp.jpg", "Lex Thomas", false);

const DarkestMinds = new Series(9, "The Darkest Minds", 5);
const dm1 = new Book(40, 6, "The Darkest Minds", 200, "temp", 2000, "./assets/images/temp.jpg", "Alexandra Bracken", false);
const dm2 = new Book(41, 6, "Never Fade", 200, "temp", 2000, "./assets/images/temp.jpg", "Alexandra Bracken", false);
const dm3 = new Book(42, 6, "In The Afterlight", 200, "temp", 2000, "./assets/images/temp.jpg", "Alexandra Bracken", false);
const dm4 = new Book(43, 6, "Through The Dark", 200, "temp", 2000, "./assets/images/temp.jpg", "Alexandra Bracken", false);
const dm5 = new Book(44, 6, "The Darkest Legacy", 200, "temp", 2000, "./assets/images/temp.jpg", "Alexandra Bracken", false);

const ConspiracyChronicles = new Series(10, "The Conspiracy Chronicles", 15);
const cc1 = new Book(45, 7, "Recruitment", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);
const cc2 = new Book(46, 7, "Render", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);
const cc3 = new Book(47, 7, "Rebellion", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);
const cc4 = new Book(48, 7, "Survival", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);
const cc5 = new Book(49, 7, "Sacrifice", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);
const cc6 = new Book(50, 7, "Synthesis", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);
const cc7 = new Book(51, 7, "Travelers", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);
const cc8 = new Book(52, 7, "Transfigured", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);
const cc9 = new Book(53, 7, "Terminus", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);
const cc10 = new Book(54, 7, "Emergents Academy", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);
const cc11 = new Book(55, 7, "Cult Of The Devoted", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);
const cc12 = new Book(56, 7, "Army Of The Unsettled", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);
const cc13 = new Book(57, 7, "Arise", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);
const cc14 = new Book(58, 7, "Banished", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);
const cc15 = new Book(59, 7, "Crusade", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);

const Divergent = new Series(11, "Divergent", 4);
const div1 = new Book(60, 8, "Divergent", 200, "temp", 2000, "./assets/images/temp.jpg", "Veronica Roth", false);
const div2 = new Book(61, 8, "Insurgent", 200, "temp", 2000, "./assets/images/temp.jpg", "Veronica Roth", false);
const div3 = new Book(62, 8, "Allegiant", 200, "temp", 2000, "./assets/images/temp.jpg", "Veronica Roth", false);
const div4 = new Book(63, 8, "Four", 200, "temp", 2000, "./assets/images/temp.jpg", "Veronica Roth", false);


const Partials = new Series(12, "Partials", 3);
const p1 = new Book(64, 9, "Partials", 200, "temp", 2000, "./assets/images/temp.jpg", "Dan Wells", false);
const p2 = new Book(65, 9, "Fragments", 200, "temp", 2000, "./assets/images/temp.jpg", "Dan Wells", false);
const p3 = new Book(66, 9, "Ruins", 200, "temp", 2000, "./assets/images/temp.jpg", "Dan Wells", false);

const Wretched = new Series(13, "The Wretched", 4);
const w1 = new Book(67, 10, "The Wretched", 200, "temp", 2000, "./assets/images/temp.jpg", "E.G. Michaels", false);
const w2 = new Book(68, 10, "Wretched Culling", 200, "temp", 2000, "./assets/images/temp.jpg", "E.G. Michaels", false);
const w3 = new Book(69, 10, "Wretched Retribution", 200, "temp", 2000, "./assets/images/temp.jpg", "E.G. Michaels", false);
const w4 = new Book(70, 10, "Wretched Aftermath", 200, "temp", 2000, "./assets/images/temp.jpg", "E.G. Michaels", false);

const Variant = new Series(14, "Variant", 2);
const v1 = new Book(71, 11, "Variant", 200, "temp", 2000, "./assets/images/temp.jpg", "Robison Wells", false);
const v2 = new Book(72, 11, "Feedback", 200, "temp", 2000, "./assets/images/temp.jpg", "Robison Wells", false);

const Enemy = new Series(15, "The Enemy", 7);
const e1 = new Book(73, 12, "The Enemy", 200, "temp", 2000, "./assets/images/temp.jpg", "Charlie Higson", false);
const e2 = new Book(74, 12, "The Dead", 200, "temp", 2000, "./assets/images/temp.jpg", "Charlie Higson", false);
const e3 = new Book(75, 12, "The Fear", 200, "temp", 2000, "./assets/images/temp.jpg", "Charlie Higson", false);
const e4 = new Book(76, 12, "The Sacrifice", 200, "temp", 2000, "./assets/images/temp.jpg", "Charlie Higson", false);
const e5 = new Book(77, 12, "The Fallen", 200, "temp", 2000, "./assets/images/temp.jpg", "Charlie Higson", false);
const e6 = new Book(78, 12, "The Hunted", 200, "temp", 2000, "./assets/images/temp.jpg", "Charlie Higson", false);
const e7 = new Book(79, 12, "The End", 200, "temp", 2000, "./assets/images/temp.jpg", "Charlie Higson", false);

const Monument14 = new Series(16, "Monument 14", 3);
const m1 = new Book(80, 13, "Monument 14", 200, "temp", 2000, "./assets/images/temp.jpg", "Emmy Laybourne", false);
const m2 = new Book(81, 13, "Sky On Fire", 200, "temp", 2000, "./assets/images/temp.jpg", "Emmy Laybourne", false);
const m3 = new Book(82, 13, "Savage Drift", 200, "temp", 2000, "./assets/images/temp.jpg", "Emmy Laybourne", false);


const BrainJack = new Book(83, 7, "Brain Jack", 200, "temp", 2000, "./assets/images/temp.jpg", "Brian Falkner", true);
const TomorrowCode = new Book(84, 7, "The Tomorrow Code", 200, "temp", 2000, "./assets/images/temp.jpg", "Brian Falkner", true);



import { Injectable } from "@angular/core";
import { Series } from "../models/Series";
import { Book } from "../models/Book";
import { Author } from "../models/Author";
import { BookAuthor } from "../models/BookAuthor";
import { Genre } from "../models/Genre";
import { BookGenre } from "../models/BookGenre";


@Injectable({providedIn: 'root'})
export class DataService {
  //testing data
  seriesList: Series[] = [HellDivers, Legend, BZRK, YoungElites, EscapeFromFurnace, Gone, Monster, Quarantine, DarkestMinds, 
    ConspiracyChronicles, Divergent, Partials, Wretched, Variant, Enemy, Monument14
  ];
  booksList: Book[] = [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, 
    l1, l2, l3, l4, b1, b2, b3, ye1, ye2, ye3, esc1, esc2, esc3, esc4, esc5, 
    g1, g2, g3, g4, g5, g6, mon1, mon2, mon3, q1, q2, q3, q4, dm1, dm2, dm3, dm4, dm5, 
    cc1, cc2, cc3, cc4, cc5, cc6, cc7, cc8, cc9, cc10, cc11, cc12, cc13, cc14, cc15,
    div1, div2, div3, div4, p1, p2, p3, w1, w2, w3, w4, v1, v2, e1, e2, e3, e4, e5, e6, e7, 
    m1, m2, m3, BrainJack, TomorrowCode
  ];
  
  //public scope: Array<any> | boolean = false;
  constructor() {

  }

  public getSeriesList() {
    return this.seriesList;
  }

  public setSeriesList(seriesList: Series[]) {
    this.seriesList = seriesList;
  }

  public getBookList() {
    return this.booksList;
  }

  public setBookList(booksList: Book[]) {
    this.booksList = this.booksList;
  }
  
}