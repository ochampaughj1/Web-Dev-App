//Publishers 
const pub1 = new Publisher(1,"Black Stone Publishing");
const pub2 = new Publisher(2,"Penguin Group");
const pub3 = new Publisher(3,"Square Fish");
const pub4 = new Publisher(4,"Dean");
const pub5 = new Publisher(5,"Katherine Tegen Books");
const pub6 = new Publisher(6,"Carolrhoda Lab");
const pub7 = new Publisher(7,"Hyperion");
const pub8 = new Publisher(8,"Travel Duck Press");
const pub9 = new Publisher(9,"Balzer + Bray");
const pub10 = new Publisher(10,"E.G. Michaels");
const pub11 = new Publisher(11,"HarperTeen");
const pub12 = new Publisher(12,"Falkner Books");

//Genres
const genre1 = new Genre(1, "Dystopian");
const genre2 = new Genre(2, "Apocalyptic");
const genre3 = new Genre(3, "Sci-Fi");
const genre4 = new Genre(4, "Thriller");
const genre5 = new Genre(5, "Fantasy");

//Authors
const a1 = new Author(1, "Nicholas Sansbury Smith", "https://nicholassansburysmith.com/");        
const a2 = new Author(2, "Marie Lu", "https://marielu.com/books");
const a3 = new Author(3, "Michael Grant", "https://www.michaelgrantbooks.co.uk/");
const a4 = new Author(4, "Alexander Gordon Smith", "https://www.alexandergordonsmith.com/");
const a5 = new Author(5, "Lex Thomas", "https://lernerbooks.com/contributors/14125");
const a6 = new Author(6, "Alexandra Bracken", "https://www.alexandrabracken.com/");
const a7 = new Author(7, "K.A. Riley", "https://karileywrites.org/");
const a8 = new Author(8, "Veronica Roth", "https://veronicarothbooks.com/");
const a9 = new Author(9, "Dan Wells", "https://www.thedanwells.com/");
const a10 = new Author(10, "E.G. Michaels", "https://egmichaels.com/");
const a11 = new Author(11, "Robison Wells", "https://robisonwells.com/");
const a12 = new Author(12, "Charlie Higson", "https://www.charliehigson.co.uk/");
const a13 = new Author(13, "Emmy Laybourne", "https://www.emmylaybourne.com/");
const a14 = new Author(14, "Brian Falkner", "https://www.brianfalkner.com/");

/********* Connection Tables **************/
//Hell Divers                       //BookGenres
const ba1 = new BookAuthor(1, 1); const sb1 = new SeriesBook(1,1);  const ga1 = new BookGenre(1, 1);  const ga2 = new BookGenre(1, 2);  const ga3 = new BookGenre(1, 3);  const ga4 = new BookGenre(1, 4);
const ba2 = new BookAuthor(2, 1); const sb2 = new SeriesBook(2,1);  const ga5 = new BookGenre(2, 1);  const ga6 = new BookGenre(2, 2);  const ga7 = new BookGenre(2, 3);  const ga8 = new BookGenre(2, 4);
const ba3 = new BookAuthor(3, 1); const sb3 = new SeriesBook(3,1);  const ga9 = new BookGenre(3, 1);  const ga10 = new BookGenre(3, 2);  const ga11 = new BookGenre(3, 3);  const ga12 = new BookGenre(3, 4);
const ba4 = new BookAuthor(4, 1); const sb4 = new SeriesBook(4,1);  const ga13 = new BookGenre(4, 1);  const ga14 = new BookGenre(4, 2);  const ga15 = new BookGenre(4, 3);  const ga16 = new BookGenre(4, 4);
const ba5 = new BookAuthor(5, 1); const sb5 = new SeriesBook(5,1);  const ga17 = new BookGenre(5, 1);  const ga18 = new BookGenre(5, 2);  const ga19 = new BookGenre(5, 3);  const ga20 = new BookGenre(5, 4);
const ba6 = new BookAuthor(6, 1); const sb6 = new SeriesBook(6,1);  const ga21 = new BookGenre(6, 1);  const ga22 = new BookGenre(6, 2);  const ga23 = new BookGenre(6, 3);  const ga24 = new BookGenre(6, 4);
const ba7 = new BookAuthor(7, 1); const sb7 = new SeriesBook(7,1);  const ga25 = new BookGenre(7, 1);  const ga26 = new BookGenre(7, 2);  const ga27 = new BookGenre(7, 3);  const ga28 = new BookGenre(7, 4);
const ba8 = new BookAuthor(8, 1); const sb8 = new SeriesBook(8,1);  const ga29 = new BookGenre(8, 1);  const ga30 = new BookGenre(8, 2);  const ga31 = new BookGenre(8, 3);  const ga32 = new BookGenre(8, 4);
const ba9 = new BookAuthor(9, 1); const sb9 = new SeriesBook(9,1);  const ga33 = new BookGenre(9, 1);  const ga34 = new BookGenre(9, 2);  const ga35 = new BookGenre(9, 3);  const ga36 = new BookGenre(9, 4);
const ba10 = new BookAuthor(10, 1); const sb10 = new SeriesBook(10,1); const ga37 = new BookGenre(10, 1);  const ga38 = new BookGenre(10, 2);  const ga39 = new BookGenre(10, 3);  const ga40 = new BookGenre(10, 4);
const ba11 = new BookAuthor(11, 1); const sb11 = new SeriesBook(11,1); const ga41 = new BookGenre(11, 1);  const ga42 = new BookGenre(11, 2);  const ga43 = new BookGenre(11, 3);  const ga44 = new BookGenre(11, 4);
//Legend  
const ba12 = new BookAuthor(12, 2); const sb12 = new SeriesBook(12,2);  const ga45 = new BookGenre(12, 1);  const ga46 = new BookGenre(12, 3);
const ba13 = new BookAuthor(13, 2); const sb13 = new SeriesBook(13,2);  const ga47 = new BookGenre(13, 1);  const ga48 = new BookGenre(13, 3);  
const ba14 = new BookAuthor(14, 2); const sb14 = new SeriesBook(14,2);  const ga49 = new BookGenre(14, 1);  const ga50 = new BookGenre(14, 3);
const ba15 = new BookAuthor(15, 2); const sb15 = new SeriesBook(15,2);  const ga51 = new BookGenre(15, 1);  const ga52 = new BookGenre(15, 3);
//BZRK
const ba16 = new BookAuthor(16, 3); const sb16 = new SeriesBook(16,3);  const ga53 = new BookGenre(16, 1);  const ga54 = new BookGenre(16, 3); 
const ba17 = new BookAuthor(17, 3); const sb17 = new SeriesBook(17,3);  const ga55 = new BookGenre(17, 1);  const ga56 = new BookGenre(17, 3); 
const ba18 = new BookAuthor(18, 3); const sb18 = new SeriesBook(18,3);  const ga57 = new BookGenre(18, 1);  const ga58 = new BookGenre(18, 3); 
//The Young Elites
const ba19 = new BookAuthor(19, 2); const sb19 = new SeriesBook(19,4);  const ga59 = new BookGenre(19, 1);  const ga60 = new BookGenre(19, 3);  const ga61 = new BookGenre(19, 5);
const ba20 = new BookAuthor(20, 2); const sb20 = new SeriesBook(20,4);  const ga62 = new BookGenre(20, 1);  const ga63 = new BookGenre(20, 3);  const ga64 = new BookGenre(20, 5);
const ba21 = new BookAuthor(21, 2); const sb21 = new SeriesBook(21,4);  const ga65 = new BookGenre(21, 1);  const ga66 = new BookGenre(21, 3);  const ga67 = new BookGenre(21, 5);
//Escape From Furnace
const ba22 = new BookAuthor(22, 4); const sb22 = new SeriesBook(22,5);  const ga68 = new BookGenre(22, 1); const ga69 = new BookGenre(22, 3); const ga70 = new BookGenre(22, 4); const ga71 = new BookGenre(22, 5);
const ba23 = new BookAuthor(23, 4); const sb23 = new SeriesBook(23,5);  const ga72 = new BookGenre(23, 1); const ga73 = new BookGenre(23, 3); const ga74 = new BookGenre(23, 4); const ga75 = new BookGenre(23, 5);
const ba24 = new BookAuthor(24, 4); const sb24 = new SeriesBook(24,5);  const ga76 = new BookGenre(24, 1); const ga77 = new BookGenre(24, 3); const ga78 = new BookGenre(24, 4); const ga79 = new BookGenre(24, 5);
const ba25 = new BookAuthor(25, 4); const sb25 = new SeriesBook(25,5);  const ga80 = new BookGenre(25, 1); const ga81 = new BookGenre(25, 3); const ga82 = new BookGenre(25, 4); const ga83 = new BookGenre(25, 5);
const ba26 = new BookAuthor(26, 4); const sb26 = new SeriesBook(26,5);  const ga84 = new BookGenre(26, 1); const ga85 = new BookGenre(26, 3); const ga86 = new BookGenre(26, 4); const ga87 = new BookGenre(26, 5);
//Gone
const ba27 = new BookAuthor(27, 3); const sb27 = new SeriesBook(27,6);  const ga88 = new BookGenre(27,1);  const ga89 = new BookGenre(27,3);  const ga90 = new BookGenre(27,5);
const ba28 = new BookAuthor(28, 3); const sb28 = new SeriesBook(28,6);  const ga91 = new BookGenre(28,1);  const ga92 = new BookGenre(28,3);  const ga93 = new BookGenre(28,5);
const ba29 = new BookAuthor(29, 3); const sb29 = new SeriesBook(29,6);  const ga94 = new BookGenre(29,1);  const ga95 = new BookGenre(29,3);  const ga96 = new BookGenre(29,5);
const ba30 = new BookAuthor(30, 3); const sb30 = new SeriesBook(30,6);  const ga97 = new BookGenre(30,1);  const ga98 = new BookGenre(30,3);  const ga99 = new BookGenre(30,5);
const ba31 = new BookAuthor(31, 3); const sb31 = new SeriesBook(31,6);  const ga100 = new BookGenre(31,1);  const ga101 = new BookGenre(31,3);  const ga102 = new BookGenre(31,5);
const ba32 = new BookAuthor(32, 3); const sb32 = new SeriesBook(32,6);  const ga103 = new BookGenre(32,1);  const ga104 = new BookGenre(32,3);  const ga105 = new BookGenre(32,5);
//Monster
const ba33 = new BookAuthor(33, 3); const sb33 = new SeriesBook(33,7);  const ga106 = new BookGenre(33,1);  const ga107 = new BookGenre(33,3);  const ga108 = new BookGenre(33,5);
const ba34 = new BookAuthor(34, 3); const sb34 = new SeriesBook(34,7);  const ga109 = new BookGenre(34,1);  const ga110 = new BookGenre(34,3);  const ga111 = new BookGenre(34,5);
const ba35 = new BookAuthor(35, 3); const sb35 = new SeriesBook(35,7);  const ga112 = new BookGenre(35,1);  const ga113 = new BookGenre(35,3);  const ga114 = new BookGenre(35,5);
//Quarantine
const ba36 = new BookAuthor(36, 5); const sb36 = new SeriesBook(36,8);  const ga115 = new BookGenre(36,1);  const ga116 = new BookGenre(36,2);  const ga117 = new BookGenre(36,4);
const ba37 = new BookAuthor(37, 5); const sb37 = new SeriesBook(37,8);  const ga118 = new BookGenre(37,1);  const ga119 = new BookGenre(37,2);  const ga120 = new BookGenre(37,4);
const ba38 = new BookAuthor(38, 5); const sb38 = new SeriesBook(38,8);  const ga121 = new BookGenre(38,1);  const ga122 = new BookGenre(38,2);  const ga123 = new BookGenre(38,4);
const ba39 = new BookAuthor(39, 5); const sb39 = new SeriesBook(39,8);  const ga124 = new BookGenre(39,1);  const ga125 = new BookGenre(39,2);  const ga126 = new BookGenre(39,4);
//The Darkest Minds
const ba40 = new BookAuthor(40, 6); const sb40 = new SeriesBook(40,9);  const ga127 = new BookGenre(40,1);  const ga128 = new BookGenre(40,3);  const ga129 = new BookGenre(40,5);
const ba41 = new BookAuthor(41, 6); const sb41 = new SeriesBook(41,9);  const ga130 = new BookGenre(41,1);  const ga131 = new BookGenre(41,3);  const ga132 = new BookGenre(41,5);
const ba42 = new BookAuthor(42, 6); const sb42 = new SeriesBook(42,9);  const ga133 = new BookGenre(42,1);  const ga134 = new BookGenre(42,3);  const ga135 = new BookGenre(42,5);
const ba43 = new BookAuthor(43, 6); const sb43 = new SeriesBook(43,9);  const ga136 = new BookGenre(43,1);  const ga137 = new BookGenre(43,3);  const ga138 = new BookGenre(43,5);
const ba44 = new BookAuthor(44, 6); const sb44 = new SeriesBook(44,9);  const ga139 = new BookGenre(44,1);  const ga140 = new BookGenre(44,3);  const ga141 = new BookGenre(44,5);
//The Conspiracy Chronicles
const ba45 = new BookAuthor(45,7); const sb45 = new SeriesBook(45,10);  const ga142 = new BookGenre(4,1); const ga143 = new BookGenre(4,3);  const ga144 = new BookGenre(4,5);
const ba46 = new BookAuthor(46,7); const sb46 = new SeriesBook(46,10);  const ga145 = new BookGenre(4,1); const ga146 = new BookGenre(4,3);  const ga147 = new BookGenre(4,5);
const ba47 = new BookAuthor(47,7); const sb47 = new SeriesBook(47,10);  const ga148 = new BookGenre(4,1); const ga149 = new BookGenre(4,3);  const ga150 = new BookGenre(4,5);
const ba48 = new BookAuthor(48,7); const sb48 = new SeriesBook(48,10);  const ga151 = new BookGenre(4,1); const ga152 = new BookGenre(4,3);  const ga153 = new BookGenre(4,5);
const ba49 = new BookAuthor(49,7); const sb49 = new SeriesBook(49,10);  const ga154 = new BookGenre(4,1); const ga155 = new BookGenre(4,3);  const ga156 = new BookGenre(4,5);
const ba50 = new BookAuthor(50,7); const sb50 = new SeriesBook(50,10);  const ga157 = new BookGenre(5,1); const ga158 = new BookGenre(5,3);  const ga159 = new BookGenre(5,5);
const ba51 = new BookAuthor(51,7); const sb51 = new SeriesBook(51,10);  const ga160 = new BookGenre(5,1); const ga161 = new BookGenre(5,3);  const ga162 = new BookGenre(5,5);
const ba52 = new BookAuthor(52,7); const sb52 = new SeriesBook(52,10);  const ga163 = new BookGenre(5,1); const ga164 = new BookGenre(5,3);  const ga165 = new BookGenre(5,5);
const ba53 = new BookAuthor(53,7); const sb53 = new SeriesBook(53,10);  const ga166 = new BookGenre(5,1); const ga167 = new BookGenre(5,3);  const ga168 = new BookGenre(5,5);
const ba54 = new BookAuthor(54,7); const sb54 = new SeriesBook(54,10);  const ga169 = new BookGenre(5,1); const ga170 = new BookGenre(5,3);  const ga171 = new BookGenre(5,5);
const ba55 = new BookAuthor(55,7); const sb55 = new SeriesBook(55,10);  const ga172 = new BookGenre(5,1); const ga173 = new BookGenre(5,3);  const ga174 = new BookGenre(5,5); 
const ba56 = new BookAuthor(56,7); const sb56 = new SeriesBook(56,10);  const ga175 = new BookGenre(5,1); const ga176 = new BookGenre(5,3);  const ga177 = new BookGenre(5,5);
const ba57 = new BookAuthor(57,7); const sb57 = new SeriesBook(57,10);  const ga178 = new BookGenre(5,1); const ga179 = new BookGenre(5,3);  const ga180 = new BookGenre(5,5);
const ba58 = new BookAuthor(58,7); const sb58 = new SeriesBook(58,10);  const ga181 = new BookGenre(5,1); const ga182 = new BookGenre(5,3);  const ga183 = new BookGenre(5,5);
const ba59 = new BookAuthor(59,7); const sb59 = new SeriesBook(59,10);  const ga184 = new BookGenre(5,1); const ga185 = new BookGenre(5,3);  const ga186 = new BookGenre(5,5);
//Divergent
const ba60 = new BookAuthor(60,8); const sb60 = new SeriesBook(60,11);  const ga187 = new BookGenre(60,1); const ga188 = new BookGenre(60,3);  const ga189 = new BookGenre(60,5);
const ba61 = new BookAuthor(61,8); const sb61 = new SeriesBook(61,11);  const ga190 = new BookGenre(61,1); const ga191 = new BookGenre(61,3);  const ga192 = new BookGenre(61,5);
const ba62 = new BookAuthor(62,8); const sb62 = new SeriesBook(62,11);  const ga193 = new BookGenre(62,1); const ga194 = new BookGenre(62,3);  const ga195 = new BookGenre(62,5);
const ba63 = new BookAuthor(63,8); const sb63 = new SeriesBook(63,11);  const ga196 = new BookGenre(63,1); const ga197 = new BookGenre(63,3);  const ga198 = new BookGenre(63,5);
//Partials
const ba64 = new BookAuthor(64,9); const sb64 = new SeriesBook(64,12);  const ga199 = new BookGenre(64,1); const ga200 = new BookGenre(64,2); const ga201 = new BookGenre(64,3); 
const ba65 = new BookAuthor(65,9); const sb65 = new SeriesBook(65,12);  const ga202 = new BookGenre(65,1); const ga203 = new BookGenre(65,2); const ga204 = new BookGenre(65,3);
const ba66 = new BookAuthor(66,9); const sb66 = new SeriesBook(66,12);  const ga205 = new BookGenre(66,1); const ga206 = new BookGenre(66,2); const ga207 = new BookGenre(66,3);
//Wretched
const ba67 = new BookAuthor(67,10); const sb67 = new SeriesBook(67,13);  const ga208 = new BookGenre(67,1); const ga209 = new BookGenre(67,2); const ga210 = new BookGenre(67,3); const ga211 = new BookGenre(67,4);
const ba68 = new BookAuthor(68,10); const sb68 = new SeriesBook(68,13);  const ga212 = new BookGenre(68,1); const ga213 = new BookGenre(68,2); const ga214 = new BookGenre(68,3); const ga215 = new BookGenre(68,4);
const ba69 = new BookAuthor(69,10); const sb69 = new SeriesBook(69,13);  const ga216 = new BookGenre(69,1); const ga217 = new BookGenre(69,2); const ga218 = new BookGenre(69,3); const ga219 = new BookGenre(69,4);
const ba70 = new BookAuthor(70,10); const sb70 = new SeriesBook(70,13);  const ga220 = new BookGenre(70,1); const ga221 = new BookGenre(70,2); const ga222 = new BookGenre(70,3); const ga223 = new BookGenre(70,4);
//Variant
const ba71 = new BookAuthor(71,11); const sb71 = new SeriesBook(71,14);  const ga224 = new BookGenre(71,1); const ga225 = new BookGenre(71,3); const ga226 = new BookGenre(71,4); const ga227 = new BookGenre(71,5);
const ba72 = new BookAuthor(72,11); const sb72 = new SeriesBook(72,14);  const ga228 = new BookGenre(72,1); const ga229 = new BookGenre(72,3); const ga230 = new BookGenre(72,4); const ga231 = new BookGenre(72,5);
//The Enemy 
const ba73 = new BookAuthor(73,12); const sb73 = new SeriesBook(73,15);  const ga232 = new BookGenre(73,1);  const ga233 = new BookGenre(73,2);  const ga234 = new BookGenre(73,3);  const ga235 = new BookGenre(73,4);
const ba74 = new BookAuthor(74,12); const sb74 = new SeriesBook(74,15);  const ga236 = new BookGenre(74,1);  const ga237 = new BookGenre(74,2);  const ga238 = new BookGenre(74,3);  const ga239 = new BookGenre(74,4);
const ba75 = new BookAuthor(75,12); const sb75 = new SeriesBook(75,15);  const ga240 = new BookGenre(75,1);  const ga241 = new BookGenre(75,2);  const ga242 = new BookGenre(75,3);  const ga243 = new BookGenre(75,4);
const ba76 = new BookAuthor(76,12); const sb76 = new SeriesBook(76,15);  const ga244 = new BookGenre(76,1);  const ga245 = new BookGenre(76,2);  const ga246 = new BookGenre(76,3);  const ga247 = new BookGenre(76,4);
const ba77 = new BookAuthor(77,12); const sb77 = new SeriesBook(77,15);  const ga248 = new BookGenre(77,1);  const ga249 = new BookGenre(77,2);  const ga250 = new BookGenre(77,3);  const ga251 = new BookGenre(77,4);
const ba78 = new BookAuthor(78,12); const sb78 = new SeriesBook(78,15);  const ga252 = new BookGenre(78,1);  const ga253 = new BookGenre(78,2);  const ga254 = new BookGenre(78,3);  const ga255 = new BookGenre(78,4);
const ba79 = new BookAuthor(79,12); const sb79 = new SeriesBook(79,15);  const ga256 = new BookGenre(79,1);  const ga257 = new BookGenre(79,2);  const ga258 = new BookGenre(79,3);  const ga259 = new BookGenre(79,4);
//Monument 14
const ba80 = new BookAuthor(80,13); const sb80 = new SeriesBook(80,16);  const ga260 = new BookGenre(80,1);  const ga261 = new BookGenre(80,2);  const ga262 = new BookGenre(80,3);
const ba81 = new BookAuthor(81,13); const sb81 = new SeriesBook(81,16);  const ga263 = new BookGenre(81,1);  const ga264 = new BookGenre(81,2);  const ga265 = new BookGenre(81,3);
const ba82 = new BookAuthor(82,13); const sb82 = new SeriesBook(82,16);  const ga266 = new BookGenre(82,1);  const ga267 = new BookGenre(82,2);  const ga268 = new BookGenre(82,3);
//Stand Alones
const ba83 = new BookAuthor(83,14); const ga269 = new BookGenre(8,1);  const ga270 = new BookGenre(8,3);  const ga271 = new BookGenre(8,5);
const ba84 = new BookAuthor(84,14); const ga272 = new BookGenre(8,1);  const ga273 = new BookGenre(8,3);  const ga274 = new BookGenre(8,5);

//**NOT UPDATED** 
//Series and Book hard data
const HellDivers = new Series(1, "Hell Divers", 11);
const h1 = new Book(1, 1, "Hell Divers", 402, "temp", 2000, "./assets/images/helldivers1.jpg", false);
const h2 = new Book(2, 1, "Hell Divers: Ghosts", 342, "temp", 2000, "./assets/images/helldivers2.jpg", false);
const h3 = new Book(3, 1, "Hell Divers: Deliverance", 461, "temp", 2000, "./assets/images/helldivers3.jpg", false);
const h4 = new Book(4, 1, "Hell Divers: Wolves", 417, "temp", 2000, "./assets/images/helldivers4.jpg", false);
const h5 = new Book(5, 1, "Hell Divers: Captives", 438, "temp", 2000, "./assets/images/helldivers5.jpg", false);
const h6 = new Book(6, 1, "Hell Divers: Allegiance", 485, "temp", 2000, "./assets/images/helldivers6.jpg", false);
const h7 = new Book(7, 1, "Hell Divers: Warriors", 691, "temp", 2000, "./assets/images/helldivers7.jpg", false);
const h8 = new Book(8, 1, "Hell Divers: King Of The Wastes", 621, "temp", 2000, "./assets/images/helldivers8.jpg", false);
const h9 = new Book(9, 1, "Hell Divers: Radioactive", 504, "temp", 2000, "./assets/images/helldivers9.jpg", false);
const h10 = new Book(10, 1, "Hell Divers: Fallout", 461, "temp", 2000, "./assets/images/helldivers10.jpg", false);
const h11 = new Book(11, 1, "Hell Divers: Renegades", 470, "temp", 2000, "./assets/images/helldivers11.jpg", false);

const Legend = new Series(2, "Legend", 4);
const l1 = new Book(12, 2, "Legend", 295, "temp", 2000, "./assets/images/legend.jpg", false);
const l2 = new Book(13, 2, "Progidy", 354, "temp", 2000, "./assets/images/prodigy.jpg", false);
const l3 = new Book(14, 2, "Champion", 353, "temp", 2000, "./assets/images/champion.jpg", false);
const l4 = new Book(15, 2, "Rebel", 200, "temp", 2000, "./assets/images/rebel.jpg", false);

const BZRK = new Series(3, "BZRK", 3);
const b1 = new Book(16, 4, "BZRK", 407, "temp", 2000, "./assets/images/BZRK.jpg", false);
const b2 = new Book(17, 4, "BZRK: Reloaded", 432, "temp", 2000, "./assets/images/BZRK-Reloaded.jpg",false);
const b3 = new Book(18, 4, "BZRK: Apocalypse", 442, "temp", 2000, "./assets/images/BZRK-Apocalypse.jpg", false);

const YoungElites = new Series(4, "The Young Elites", 3);
const ye1 = new Book(19, 2, "The Young Elites", 357, "temp", 2000, "./assets/images/the young elites.jpg", false);
const ye2 = new Book(20, 2, "The Rose Society", 397, "temp", 2000, "./assets/images/the rose society.jpg", false);
const ye3 = new Book(21, 2, "The Midnight Star", 320, "temp", 2000, "./assets/images/the midnight star.jpg", false);

const EscapeFromFurnace = new Series(5, "Escape From Furnace", 5);
const esc1 = new Book(22, 3, "Lockdown", 273, "temp", 2000, "./assets/images/lockdown.jpg",false);
const esc2 = new Book(23, 3, "Solitary", 225, "temp", 2000, "./assets/images/solitary.jpg", false);
const esc3 = new Book(24, 3, "Death Sentence", 261, "temp", 2000, "./assets/images/death sentence.jpg", false);
const esc4 = new Book(25, 3, "Fugitives", 270, "temp", 2000, "./assets/images/fugitives.jpg", false);
const esc5 = new Book(26, 3, "Execution", 312, "temp", 2000, "./assets/images/execution.jpg", false);

const Gone = new Series(6, "Gone", 6);
const g1 = new Book(27, 4, "Gone", 560, "temp", 2000, "./assets/images/gone.jpg", false);
const g2 = new Book(28, 4, "Hunger", 586, "temp", 2000, "./assets/images/hunger.jpg", false);
const g3 = new Book(29, 4, "Lies", 472, "temp", 2000, "./assets/images/lies.jpg", false);
const g4 = new Book(30, 4, "Plague", 526, "temp", 2000, "./assets/images/plague.jpg", false);
const g5 = new Book(31, 4, "Fear", 549, "temp", 2000, "./assets/images/fear.jpg", false);
const g6 = new Book(32, 4, "Light", 435, "temp", 2000, "./assets/images/light.jpg", false);

const Monster = new Series(7, "Monster", 3);
const mon1 = new Book(33, 5, "Monster", 420, "temp", 2000, "./assets/images/monster.jpg", false);
const mon2 = new Book(34, 5, "Villain", 324, "temp", 2000, "./assets/images/villain.jpg", false);
const mon3 = new Book(35, 5, "Hero", 427, "temp", 2000, "./assets/images/hero.jpg", false);

const Quarantine = new Series(8, "Quarantine", 4);
const q1 = new Book(36, 6, "The Loners", 404, "temp", 2000, "./assets/images/the loners.jpg", false);
const q2 = new Book(37, 6, "The Saints", 384, "temp", 2000, "./assets/images/the saints.jpg", false);
const q3 = new Book(38, 6, "The Burnouts", 266, "temp", 2000, "./assets/images/the burnouts.jpg", false);
const q4 = new Book(39, 6, "The Giant", 345, "temp", 2000, "./assets/images/the giant.jpg", false);

const DarkestMinds = new Series(9, "The Darkest Minds", 5);
const dm1 = new Book(40, 7, "The Darkest Minds", 488, "temp", 2000, "./assets/images/the darkest minds.jpg", false);
const dm2 = new Book(41, 7, "Never Fade", 507, "temp", 2000, "./assets/images/never fade.jpg", false);
const dm3 = new Book(42, 7, "In The Afterlight", 535, "temp", 2000, "./assets/images/in the afterlight.jpg", false);
const dm4 = new Book(43, 7, "Through The Dark", 395, "temp", 2000, "./assets/images/through the dark.jpg", false);
const dm5 = new Book(44, 7, "The Darkest Legacy", 569, "temp", 2000, "./assets/images/the darkest legacy.jpg", false);

const ConspiracyChronicles = new Series(10, "The Conspiracy Chronicles", 15);
const cc1 = new Book(45, 8, "Recruitment", 299, "temp", 2000, "./assets/images/recruitment.jpg", false);
const cc2 = new Book(46, 8, "Render", 275, "temp", 2000, "./assets/images/render.jpg", false);
const cc3 = new Book(47, 8, "Rebellion", 284, "temp", 2000, "./assets/images/rebellion.jpg", false);
const cc4 = new Book(48, 8, "Survival", 283, "temp", 2000, "./assets/images/survival.jpg", false);
const cc5 = new Book(49, 8, "Sacrifice", 295, "temp", 2000, "./assets/images/sacrifice.jpg", false);
const cc6 = new Book(50, 8, "Synthesis", 323, "temp", 2000, "./assets/images/synthesis.jpg", false);
const cc7 = new Book(51, 8, "Travelers", 329, "temp", 2000, "./assets/images/travelers.jpg", false);
const cc8 = new Book(52, 8, "Transfigured", 339, "temp", 2000, "./assets/images/transfigured.jpg", false);
const cc9 = new Book(53, 8, "Terminus", 307, "temp", 2000, "./assets/images/terminus.jpg", false);
const cc10 = new Book(54, 8, "Emergents Academy", 326, "temp", 2000, "./assets/images/emergents academy.jpg", false);
const cc11 = new Book(55, 8, "Cult Of The Devoted", 308, "temp", 2000, "./assets/images/cult of the devoted.jpg", false);
const cc12 = new Book(56, 8, "Army Of The Unsettled", 368, "temp", 2000, "./assets/images/army of the unsettled.jpg", false);
const cc13 = new Book(57, 8, "Arise", 356, "temp", 2000, "./assets/images/arise.jpg", false);
const cc14 = new Book(58, 8, "Banished", 295, "temp", 2000, "./assets/images/banished.jpg", false);
const cc15 = new Book(59, 8, "Crusade", 445, "temp", 2000, "./assets/images/crusade.jpg", false);

const Divergent = new Series(11, "Divergent", 4);
const div1 = new Book(60, 5, "Divergent", 487, "temp", 2000, "./assets/images/divergent.jpg", false);
const div2 = new Book(61, 5, "Insurgent", 525, "temp", 2000, "./assets/images/insurgent.jpg", false);
const div3 = new Book(62, 5, "Allegiant", 526, "temp", 2000, "./assets/images/allegiant.jpg", false);
const div4 = new Book(63, 5, "Four", 285, "temp", 2000, "./assets/images/four.jpg", false);

const Partials = new Series(12, "Partials", 3);
const p1 = new Book(64, 9, "Partials", 468, "temp", 2000, "./assets/images/partials.jpg", false);
const p2 = new Book(65, 9, "Fragments", 564, "temp", 2000, "./assets/images/fragments.jpg", false);
const p3 = new Book(66, 9, "Ruins", 451, "temp", 2000, "./assets/images/ruins.jpg", false);

const Wretched = new Series(13, "The Wretched", 4);
const w1 = new Book(67, 10, "The Wretched", 299, "temp", 2000, "./assets/images/the wretched.jpg", false);
const w2 = new Book(68, 10, "Wretched Culling", 305, "temp", 2000, "./assets/images/culling.jpg", false);
const w3 = new Book(69, 10, "Wretched Retribution", 301, "temp", 2000, "./assets/images/retribution.jpg", false);
const w4 = new Book(70, 10, "Wretched Aftermath", 325, "temp", 2000, "./assets/images/aftermath.jpg", false);

const Variant = new Series(14, "Variant", 2);
const v1 = new Book(71, 11, "Variant", 376, "temp", 2000, "./assets/images/variant.jpg", false);
const v2 = new Book(72, 11, "Feedback", 310, "temp", 2000, "./assets/images/feedback.jpg", false);

const Enemy = new Series(15, "The Enemy", 7);
const e1 = new Book(73, 2, "The Enemy", 407, "temp", 2000, "./assets/images/the enemy.jpg", false);
const e2 = new Book(74, 2, "The Dead", 450, "temp", 2000, "./assets/images/the dead.jpg", false);
const e3 = new Book(75, 2, "The Fear", 460, "temp", 2000, "./assets/images/the fear.jpg", false);
const e4 = new Book(76, 2, "The Sacrifice", 456, "temp", 2000, "./assets/images/the sacrifice.jpg", false);
const e5 = new Book(77, 2, "The Fallen", 502, "temp", 2000, "./assets/images/the fallen.jpg", false);
const e6 = new Book(78, 2, "The Hunted", 439, "temp", 2000, "./assets/images/the hunted.jpg", false);
const e7 = new Book(79, 2, "The End", 454, "temp", 2000, "./assets/images/the end.jpg", false);

const Monument14 = new Series(16, "Monument 14", 3);
const m1 = new Book(80, 3, "Monument 14", 294, "temp", 2000, "./assets/images/monument 14.jpg", false);
const m2 = new Book(81, 3, "Sky On Fire", 215, "temp", 2000, "./assets/images/sky on fire.jpg", false);
const m3 = new Book(82, 3, "Savage Drift", 305, "temp", 2000, "./assets/images/savage drift.jpg", false);


const BrainJack = new Book(83, 12, "Brain Jack", 349, "temp", 2000, "./assets/images/brain jack.jpg", true);
const TomorrowCode = new Book(84, 12, "The Tomorrow Code", 317, "temp", 2000, "./assets/images/the tomorrow code.jpg", true);


import { Injectable } from "@angular/core";
import { Series } from "../models/Series";
import { Book } from "../models/Book";
import { Author } from "../models/Author";
import { BookAuthor } from "../models/BookAuthor";
import { Genre } from "../models/Genre";
import { BookGenre } from "../models/BookGenre";
import { Publisher } from "../models/Publisher";
import { SeriesBook } from "../models/SeriesBook";


@Injectable({providedIn: 'root'})
export class DataService {
  //testing data
  seriesTable: Series[] = [HellDivers, Legend, BZRK, YoungElites, EscapeFromFurnace, Gone, Monster, Quarantine, DarkestMinds, 
    ConspiracyChronicles, Divergent, Partials, Wretched, Variant, Enemy, Monument14
  ];
  booksTable: Book[] = [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, 
    l1, l2, l3, l4, b1, b2, b3, ye1, ye2, ye3, esc1, esc2, esc3, esc4, esc5, 
    g1, g2, g3, g4, g5, g6, mon1, mon2, mon3, q1, q2, q3, q4, dm1, dm2, dm3, dm4, dm5, 
    cc1, cc2, cc3, cc4, cc5, cc6, cc7, cc8, cc9, cc10, cc11, cc12, cc13, cc14, cc15,
    div1, div2, div3, div4, p1, p2, p3, w1, w2, w3, w4, v1, v2, e1, e2, e3, e4, e5, e6, e7, 
    m1, m2, m3, BrainJack, TomorrowCode
  ];
  authorTable: Author[] = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14];
  bookAuthorTable: BookAuthor[] = [
    ba1, ba2, ba3, ba4, ba5, ba6, ba7, ba8, ba9, ba10, ba11, ba12, ba13, ba14, ba15, ba16, ba17, ba18, ba19, ba20,
    ba21, ba22, ba23, ba24, ba25, ba26, ba27, ba28, ba29, ba30, ba31, ba32, ba33, ba34, ba35, ba36, ba37, ba38, ba39, ba40,
    ba41, ba42, ba43, ba44, ba45, ba46, ba47, ba48, ba49, ba50, ba51, ba52, ba53, ba54, ba55, ba56, ba57, ba58, ba59, ba60,
    ba61, ba62, ba63, ba64, ba65, ba66, ba67, ba68, ba69, ba70, ba71, ba72, ba73, ba74, ba75, ba76, ba77, ba78, ba79, ba80,
    ba81, ba82, ba83, ba84
  ];
  bookGenreTable: BookGenre[] = [
    ga1, ga2, ga3, ga4, ga5, ga6, ga7, ga8, ga9, ga10, ga11, ga12, ga13, ga14, ga15, ga16, ga17, ga18, ga19, ga20,
    ga21, ga22, ga23, ga24, ga25, ga26, ga27, ga28, ga29, ga30, ga31, ga32, ga33, ga34, ga35, ga36, ga37, ga38, ga39, ga40,
    ga41, ga42, ga43, ga44, ga45, ga46, ga47, ga48, ga49, ga50, ga51, ga52, ga53, ga54, ga55, ga56, ga57, ga58, ga59, ga60,
    ga61, ga62, ga63, ga64, ga65, ga66, ga67, ga68, ga69, ga70, ga71, ga72, ga73, ga74, ga75, ga76, ga77, ga78, ga79, ga80,
    ga81, ga82, ga83, ga84, ga85, ga86, ga87, ga88, ga89, ga90, ga91, ga92, ga93, ga94, ga95, ga96, ga97, ga98, ga99, ga100,
    ga101, ga102, ga103, ga104, ga105, ga106, ga107, ga108, ga109, ga110, ga111, ga112, ga113, ga114, ga115, ga116, ga117, ga118, ga119, ga120,
    ga121, ga122, ga123, ga124, ga125, ga126, ga127, ga128, ga129, ga130, ga131, ga132, ga133, ga134, ga135, ga136, ga137, ga138, ga139, ga140,
    ga141, ga142, ga143, ga144, ga145, ga146, ga147, ga148, ga149, ga150, ga151, ga152, ga153, ga154, ga155, ga156, ga157, ga158, ga159, ga160,
    ga161, ga162, ga163, ga164, ga165, ga166, ga167, ga168, ga169, ga170, ga171, ga172, ga173, ga174, ga175, ga176, ga177, ga178, ga179, ga180,
    ga181, ga182, ga183, ga184, ga185, ga186, ga187, ga188, ga189, ga190, ga191, ga192, ga193, ga194, ga195, ga196, ga197, ga198, ga199, ga200,
    ga201, ga202, ga203, ga204, ga205, ga206, ga207, ga208, ga209, ga210, ga211, ga212, ga213, ga214, ga215, ga216, ga217, ga218, ga219, ga220,
    ga221, ga222, ga223, ga224, ga225, ga226, ga227, ga228, ga229, ga230, ga231, ga232, ga233, ga234, ga235, ga236, ga237, ga238, ga239, ga240,
    ga241, ga242, ga243, ga244, ga245, ga246, ga247, ga248, ga249, ga250, ga251, ga252, ga253, ga254, ga255, ga256, ga257, ga258, ga259, ga260,
    ga261, ga262, ga263, ga264, ga265, ga266, ga267, ga268, ga269, ga270, ga271, ga272, ga273, ga274
  ];
  seriesBookTable: SeriesBook[] = [
    sb1, sb2, sb3, sb4, sb5, sb6, sb7, sb8, sb9, sb10, sb11, sb12, sb13, sb14, sb15, sb16, sb17, sb18, sb19, sb20,
    sb21, sb22, sb23, sb24, sb25, sb26, sb27, sb28, sb29, sb30, sb31, sb32, sb33, sb34, sb35, sb36, sb37, sb38, sb39, sb40,
    sb41, sb42, sb43, sb44, sb45, sb46, sb47, sb48, sb49, sb50, sb51, sb52, sb53, sb54, sb55, sb56, sb57, sb58, sb59, sb60,
    sb61, sb62, sb63, sb64, sb65, sb66, sb67, sb68, sb69, sb70, sb71, sb72, sb73, sb74, sb75, sb76, sb77, sb78, sb79, sb80,
    sb81, sb82
  ];
  genreTable: Genre[] = [genre1, genre2, genre3, genre4, genre5];
  publisherTable: Publisher[] = [pub1, pub2, pub3, pub4, pub5, pub6, pub7, pub8, pub9, pub10, pub11, pub12];
  
  //public scope: Array<any> | boolean = false;
  constructor() {

  }

  public getSeriesList() {
    return this.seriesTable;
  }

  public getBookList() {
    return this.booksTable;
  }

  public getAuthorsList() {
    return this.authorTable;
  }

  public getGenreList() {
    return this.genreTable;
  }

  public getPublisherList() {
    return this.publisherTable;
  }

  //returns all stand alone books
  public getStandAloneBooks(): Book[] {
    let singleBooks: Book[] = [];
    for(let i = 0; i < this.booksTable.length; i++) {
      if(this.booksTable[i].StandAlone == true) {
        singleBooks.push(this.booksTable[i]);
      }
    }
    return singleBooks;
  }

  //gets author of given book
  public getBookAuthor(book: Book): Author {
    let author: any; 
    for(let i = 0; i < this.bookAuthorTable.length; i++) {
      if(book.BookId == this.bookAuthorTable[i].BookId) {
        author = this.authorTable[this.bookAuthorTable[i].AuthorId - 1];
      }
    }
    return author;
  }

  //returns author of given series
  public getAuthorBySeries(series: Series): Author {
    let bookId: number = 0;
    let author: Author = this.authorTable[0];
    for(let i = 0; i < this.seriesBookTable.length; i++) {
      if(series.SeriesId == this.seriesBookTable[i].SeriesId) {
        bookId = this.seriesBookTable[i].BookId;
        break;
      }
    }
    let authorId = 0;
    for(let i = 0; i < this.bookAuthorTable.length; i++) {
      if(bookId == this.bookAuthorTable[i].BookId) {
        authorId = this.bookAuthorTable[i].AuthorId;
        break;
      }
    }
    author = this.authorTable[authorId-1];
    return author;
  }

  //returns all series by given author
  public getSeriesByAuthor(author: Author): Series[] {
    let bookIds: number[] = [];
    
    //gets book ids based on author
    for(let i = 0; i < this.bookAuthorTable.length; i++) {
      if(author.AuthorId == this.bookAuthorTable[i].AuthorId) {
        bookIds.push(this.bookAuthorTable[i].BookId);
      }
    }
    return this.getSeriesByBooks(bookIds);
  }

  //returns all series by given genre
  public getSeriesByGenre(genre: Genre): Series[] {
    let bookIds: number[] = [];
    
    //gets book ids based on genre
    for(let i = 0; i < this.bookGenreTable.length; i++) {
      if(genre.GenreId == this.bookGenreTable[i].GenreId) {
        bookIds.push(this.bookGenreTable[i].BookId);
      }
    }
    return this.getSeriesByBooks(bookIds);
  }

  //returns all series by given publishers
  public getSeriesByPublisher(publisher: Publisher): Series[] {
    let bookIds: number[] = [];

    //gets bookIds based on publisher
    for(let i = 0; i < this.booksTable.length; i++) {
      if(publisher.PublisherId == this.booksTable[i].PublisherId) {
        bookIds.push(this.booksTable[i].BookId);
      }
    }
    return this.getSeriesByBooks(bookIds);
  }

  //gets series by given bookIds
  public getSeriesByBooks(bookIds: number[]): Series[] {
    //gets series from bookIds
    let filteredSeries: Series[] = [];
    var currentSeriesId;
    for(let i = 0; i < bookIds.length; i++) {
      currentSeriesId = this.seriesBookTable[bookIds[i] - 1].SeriesId;
      if(!filteredSeries.includes(this.seriesTable[currentSeriesId - 1])) {
        filteredSeries.push(this.seriesTable[currentSeriesId - 1])
      }
    }
    return filteredSeries;
  }

  //returns all books in given series
  public getBooksBySeries(series: Series): Book[] {
    let seriesBooks: Book[] = [];
    var currentBookId;
    for(let i = 0; i < this.seriesBookTable.length; i++) {
      currentBookId = this.seriesBookTable[i].BookId;
      if(series.SeriesId == this.seriesBookTable[i].SeriesId) {
        seriesBooks.push(this.booksTable[currentBookId - 1]);
      }
    }
    return seriesBooks;
  }

  //NOT FULLY TESTED, NEED TO ADD MORE STAND ALONE BOOKS
  public getStandAloneBookAuthors(books: Book[]): Author[] {
    let standAloneAuthors: Author[] = [];
    for(let i = 0; i < books.length; i++) {
      if(!standAloneAuthors.includes(this.getBookAuthor(books[i]))) {
        standAloneAuthors.push(this.getBookAuthor(books[i]));
      }
    }
    return standAloneAuthors;
  }
}