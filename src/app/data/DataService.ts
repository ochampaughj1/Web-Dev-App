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
const ba45 = new BookAuthor(45,7); const sb45 = new SeriesBook(45,10);  const ga142 = new BookGenre(45,1); const ga143 = new BookGenre(45,3);  const ga144 = new BookGenre(45,5);
const ba46 = new BookAuthor(46,7); const sb46 = new SeriesBook(46,10);  const ga145 = new BookGenre(46,1); const ga146 = new BookGenre(46,3);  const ga147 = new BookGenre(46,5);
const ba47 = new BookAuthor(47,7); const sb47 = new SeriesBook(47,10);  const ga148 = new BookGenre(47,1); const ga149 = new BookGenre(47,3);  const ga150 = new BookGenre(47,5);
const ba48 = new BookAuthor(48,7); const sb48 = new SeriesBook(48,10);  const ga151 = new BookGenre(48,1); const ga152 = new BookGenre(48,3);  const ga153 = new BookGenre(48,5);
const ba49 = new BookAuthor(49,7); const sb49 = new SeriesBook(49,10);  const ga154 = new BookGenre(49,1); const ga155 = new BookGenre(49,3);  const ga156 = new BookGenre(49,5);
const ba50 = new BookAuthor(50,7); const sb50 = new SeriesBook(50,10);  const ga157 = new BookGenre(50,1); const ga158 = new BookGenre(50,3);  const ga159 = new BookGenre(50,5);
const ba51 = new BookAuthor(51,7); const sb51 = new SeriesBook(51,10);  const ga160 = new BookGenre(51,1); const ga161 = new BookGenre(51,3);  const ga162 = new BookGenre(51,5);
const ba52 = new BookAuthor(52,7); const sb52 = new SeriesBook(52,10);  const ga163 = new BookGenre(52,1); const ga164 = new BookGenre(52,3);  const ga165 = new BookGenre(52,5);
const ba53 = new BookAuthor(53,7); const sb53 = new SeriesBook(53,10);  const ga166 = new BookGenre(53,1); const ga167 = new BookGenre(53,3);  const ga168 = new BookGenre(53,5);
const ba54 = new BookAuthor(54,7); const sb54 = new SeriesBook(54,10);  const ga169 = new BookGenre(54,1); const ga170 = new BookGenre(54,3);  const ga171 = new BookGenre(54,5);
const ba55 = new BookAuthor(55,7); const sb55 = new SeriesBook(55,10);  const ga172 = new BookGenre(55,1); const ga173 = new BookGenre(55,3);  const ga174 = new BookGenre(55,5); 
const ba56 = new BookAuthor(56,7); const sb56 = new SeriesBook(56,10);  const ga175 = new BookGenre(56,1); const ga176 = new BookGenre(56,3);  const ga177 = new BookGenre(56,5);
const ba57 = new BookAuthor(57,7); const sb57 = new SeriesBook(57,10);  const ga178 = new BookGenre(57,1); const ga179 = new BookGenre(57,3);  const ga180 = new BookGenre(57,5);
const ba58 = new BookAuthor(58,7); const sb58 = new SeriesBook(58,10);  const ga181 = new BookGenre(58,1); const ga182 = new BookGenre(58,3);  const ga183 = new BookGenre(58,5);
const ba59 = new BookAuthor(59,7); const sb59 = new SeriesBook(59,10);  const ga184 = new BookGenre(59,1); const ga185 = new BookGenre(59,3);  const ga186 = new BookGenre(59,5);
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
const ba83 = new BookAuthor(83,14); const ga269 = new BookGenre(83,1);  const ga270 = new BookGenre(83,3);  const ga271 = new BookGenre(83,5);
const ba84 = new BookAuthor(84,14); const ga272 = new BookGenre(84,1);  const ga273 = new BookGenre(84,3);  const ga274 = new BookGenre(84,5);

//**NOT FINISHED (NEEDS PUBLISH YEAR, SUMMARY, AND PAGES FOR REBEL** 
//Series and Book hard data
const HellDivers = new Series(1, "Hell Divers", 11);
const h1 = new Book(1, 1, "Hell Divers", 402, "\tMore than two centuries after World War III poisoned the planet, the final bastion of humanity lives on massive airships circling the globe in search of a habitable area to call home. Aging and outdated, most of the ships plummeted back to earth long ago. The only thing keeping the two surviving lifeboats in the sky are Hell Divers - men and women who risk their lives by skydiving to the surface to scavenge for parts the ships desperately need.\n\n\tWhen one of the remaining airships is damaged in an electrical storm, a Hell Diver team is deployed to a hostile zone called Hades. But there's something down there far worse than the mutated creatures discovered on dives in the past - something that threatens the fragile future of humanity.", 2000, "./assets/images/helldivers1.jpg", false);
const h2 = new Book(2, 1, "Hell Divers: Ghosts", 342, "\tTen years ago, Hell Diver Xavier \"X\" Rodriguez fell to Earth. Those he left behind went on without him aboard the airship he once called home.\n\n\tMichael Everheart -- the boy once known as Tin -- has grown into a man and the commander of Hell Diver Raptor Team. While Michael dives to help keep the Hive in the air, Captain Leon Jordan rules with an iron fist at the helm of the ship. But unrest stirs under his strict leadership as a prophecy of hope sweeps the lower decks.\n\n\tWhen a mysterious distress signal calls the Hell Divers to the surface, Michael and his loyal team begin to uncover long-buried truths and the secrets Captain Jordan will do anything to keep. They dive so humanity survives... but will they survive the ultimate betrayal?", 2000, "./assets/images/helldivers2.jpg", false);
const h3 = new Book(3, 1, "Hell Divers: Deliverance", 461, "\tThey will dive, but will humanity survive?\n\n\tLeft for dead on the nightmarish surface of the planet, Commander Michael Everhart and his team of Hell Divers barely escape with their lives aboard a new airship called Deliverance. After learning that Xavier \"X\" Rodriguez may still be alive, they mount a rescue mission for the long-lost hero.\n\n\tIn the skies, the Hive is falling apart, but Captain Jordan is more determined than ever to keep humanity in their outdated lifeboat. He will do whatever it takes to keep the ship in the air - even murder. But when he learns the Hell Divers he exiled have found Deliverance, he changes course for a new mission - find the divers, kill them, and make their new ship his own.\n\n\tIn the third installment of the USA Today bestselling Hell Divers series, Michael and his fellow divers fight across the mutated landscape in search of X. But what they find will change everything.", 2000, "./assets/images/helldivers3.jpg", false);
const h4 = new Book(4, 1, "Hell Divers: Wolves", 417, "\tThe Sea Wolf sets out to search for the Metal Islands. Leading the expedition is legendary Hell Diver Xavier Rodriguez. After enduring for a decade on the poisoned surface, his survival skills will be put to the test on the dangerous open seas. But storms, sea monsters, and the cannibalistic Cazadores aren't the only threat to X and his small crew. Their mission will uncover hard truths about the history of the war that left humankind stranded in the air for centuries. And the fate of those still living on the airships might very well rest on this fragile and perilous journey to find a new home.", 2000, "./assets/images/helldivers4.jpg", false);
const h5 = new Book(5, 1, "Hell Divers: Captives", 438, "\tHumanity has finally found a new home, but the price is blood...\n\n\tAfter a long, perilous journey, Hell Divers Xavier Rodriguez and Magnolia Katib discover the Metal Islands, a sunny habitable zone where thousands of people live by fishing and farming. But this \"paradise\" is really a violent warrior society ruled by the cannibal king el Pulpo. For the first time in X's life, he is forced to lay down his arms and surrender.\n\n\tBack on the airships, the Hell Divers are recovering from a gruesome discovery at Red Sphere, where they learned the truth about World War III. Now they must fight one last war-this time for what remains of their own endangered species. As the battle approaches, alliances will be forged, and others broken.\n\n\tForced to fight in the Cazador army, X faces his toughest mission yet. Will he help his people come down from the sky and claim the promised land, or will humanity go extinct?", 2000, "./assets/images/helldivers5.jpg", false);
const h6 = new Book(6, 1, "Hell Divers: Allegiance", 485, "\tThe war for the Metal Islands is over, but the search for survivors has just begun.\n\n\tAfter a long and bloody battle, legendary Hell Diver Xavier Rodriguez reigns as the dutiful but reluctant new king of the islands. Advised by a council of former sky citizens as well as Cazadores, he works to assimilate the two societies peacefully. But not all Cazadores have accepted the new order.\n\n\tWhile X tries to ease tensions at home, a rookie team of divers, led by Michael Everhart, returns to the skies in Discovery, formerly the ITC Deliverance. Their mission: to locate other human survivors throughout the world and rescue them. But Michael's team aren't the only ones searching for survivors. A gruesome discovery reveals that android defectors continue to hunt humans across the globe. And they may not be the only ones.\n\n\tIn a race against time, the Hell Divers may be the only obstacle to enemies bent on wiping out the final pockets of survivors and extinguishing the human genome forever.", 2000, "./assets/images/helldivers6.jpg", false);
const h7 = new Book(7, 1, "Hell Divers: Warriors", 691, "\tWhile the Hell Divers cross an ocean to battle the machines, an old flesh-and-blood threat returns to the islands.\n\n\tThe mission to Rio de Janeiro ended in victory, but it came at a dire cost, killing most of those who set out to rescue the stranded survivors. Even worse, the skinwalkers' leader, Horn, escaped with his demonic crew and is coming to take the throne.\n\n\tBack at the Vanguard Islands, King Xavier Rodriguez has been severely injured in another battle to protect the kingdom. Now an infection threatens to kill the one man who can keep the peace. As he fights for survival, new intel from Rio de Janeiro gives humanity hope of destroying the biggest threat of all: the machines - if the machines don't find the Vanguard Islands first.", 2000, "./assets/images/helldivers7.jpg", false);
const h8 = new Book(8, 1, "Hell Divers: King Of The Wastes", 621, "\tFace the uncertain future without fear...\n\n\tA year has passed since the Hell Divers defeated the machines at Kilimanjaro. The freed captives have settled into their new home at the Vanguard Islands, joining survivors from around the world. But extreme weather and failed crops have raised the specter of famine. Ships must push deeper into dangerous red zones, only to come back with less loot -- and fewer soldiers.\n\n\tWhen the Hell Divers discover a scroll on a raid, a long-buried truth comes to light, filling King Xavier with dread. The Vanguard Islands are not the salvation the sky people thought them to be. To survive, they must venture through the Panama Canal and into the wastes beyond.\n\n\tWith the fate of humanity at stake, the Immortal once again dons his armor. But there is a reason the great Cazador armies never returned from the canal, and this time not even the King of the Wastes is prepared for what awaits them.", 2000, "./assets/images/helldivers8.jpg", false);
const h9 = new Book(9, 1, "Hell Divers: Radioactive", 504, "\tNew monsters. New terrain. New threats. Welcome to Australia.\n\n\tThe battle for Panama is over, and King Xavier Rodriguez secretly deploys the airship Vanguard to Queensland. The hunt for the Coral Castle is on. The rest of the fleet returns to the Vanguard Islands with new ships and supplies, but tensions rise with rumors of a hidden food cache.\n\n\tWhen two sky people are murdered, Chief Michael Everhart knows the stage is set for mutiny. And with King Xavier off in search of the Coral Castle, he feels the target on his back. At Panama, a new leader emerges as an ancient evil threatens Outpost Gateway. The only hope of defeating it is a youth who has learned to survive in the deadly ruins.\n\n\tOn Australia's Sunshine Coast, King Xavier leads the search for the Coral Castle while Captain Rolo deploys the Hell Divers to hunt for a new source of seeds. As losses from both missions mount, the king wonders if finding this place is worth the cost. But turning back to the Vanguard Islands without a new food source could doom all humanity to starvation. Or to all-out war.", 2000, "./assets/images/helldivers9.jpg", false);
const h10 = new Book(10, 1, "Hell Divers: Fallout", 461, "\tMuch is lost, but hope in one man remains...\n\n\tIn a shocking betrayal, Captain Rolo has vaporized the supercarrier Immortal with a nuclear warhead, all but wiping out the Vanguard army. Little does he know that King Xavier and the surviving Hell Diver and Cazador teams from Brisbane were not aboard.\n\n\tIn Panama, Outpost Gateway has suffered a very different disaster: attack by carnivorous vines. Director Rodger Mintel sent out a desperate SOS as the voracious coils ripped into the bunker.\n\n\tAt the Vanguard Islands, Charmer has framed Michael Everhart for two murders. Michael's wife, Layla, is frantic to prove his innocence as evidence against him mounts.\n\n\tBack in Queensland, knights of the Coral Castle dragged captive Hell Diver Kade Long to their leader, known as the Forerunner, before locking him in a cell in the Coral Castle.\n\n\tThe truth of what happened at Brisbane is spreading, and so is radiation from the nuclear blast. The fallout threatens everything in its path, putting the Coral Castle and X's remaining forces in dire peril.", 2000, "./assets/images/helldivers10.jpg", false);
const h11 = new Book(11, 1, "Hell Divers: Renegades", 470, "\tThe secret location of the Vanguard Islands is no longer a secret...\n\n\tTired from years of fighting, Xavier passes the crown to a younger Hell Diver, Kade Long, and then sets off on the Sea Wolf with Magnolia to find Michael and his family. But the journey will push them both to their limit.\n\n\tOn the damaged airship Vanguard, Michael and crew are running out of water and must dive to a new location before attempting the perilous voyage across the Atlantic to a new home. Back at the Vanguard Islands, King Kade hurries to prepare the rigs' defenses against the Forerunner and his Knights of the Coral Castle. Fearing that X won't return with the airship in time, Kade sends the elite Barracudas on a mission to find an aircraft that will give the Islands a fighting chance against the knights.\n\n\tIn the penultimate Hell Diver book, the survivors travel skewed and far-flung paths, but soon those paths will converge. The journey is almost over, so strap in for the last dives.", 2000, "./assets/images/helldivers11.jpg", false);

const Legend = new Series(2, "Legend", 4);
const l1 = new Book(12, 2, "Legend", 295, "\tWhat was once the western United States is now home to the Republic, a nation perpetually at war with its neighbors.\n\n\tBorn into an elite family in one of the Republic's wealthiest districts, fifteen-year-old June is a prodigy being groomed for success in the Republic's highest military circles.\n\n\tBorn into the slums, fifteen-year-old Day is the country's most wanted criminal. But his motives may not be as malicious as they seem.\n\n\tFrom very different worlds, June and Day have no reason to cross paths - until the day June's brother, Metias, is murdered and Day becomes the prime suspect\n\n\tCaught in the ultimate game of cat and mouse, Day is in a race for his family's survival, while June seeks to avenge Metias's death. But in a shocking turn of events, the two uncover the truth of what has really brought them together, and the sinister lengths their country will go to keep its secrets.", 2000, "./assets/images/legend.jpg", false);
const l2 = new Book(13, 2, "Progidy", 354, "\tIt has been seven days since June and Day barely escaped Los Angeles and the Republic with their lives. Believed dead, Day lost his brother to an execution squad who thought they were assassinating him. June is now the Republic's most wanted traitor. Desperate for help, they turn to the Patriots - a vigilante rebel group. But can they trust them? Or have they unwittingly become pawns in the most terrifying of political games?", 2000, "./assets/images/prodigy.jpg", false);
const l3 = new Book(14, 2, "Champion", 353, "\tHe is a Legend. She is a Prodigy. Who will be Champion? June and Day have sacrificed so much for the people of the Republic, and now their country is on the brink of a new existence. But neither could have predicted the circumstances that will reunite them. Just when a peace treaty is imminent, a plague outbreak causes panic in the Colonies, and war threatens the Republic's border cities. Only June knows the key to her country's defense.", 2000, "./assets/images/champion.jpg", false);
const l4 = new Book(15, 2, "Rebel", 200, "\tRespect the Legend. Idolize the Prodigy. Celebrate the Champion. But never underestimate the Rebel.\n\n\tEden Wing has been living in his brother's shadow for years. Even though he's a top student at his academy in Ross City, Antarctica, and a brilliant inventor, most people know him only as Daniel Wing's little brother.\n\n\tA decade ago, Daniel was known as Day, the boy from the streets who led a revolution that saved the Republic of America. But Day is no longer the same young man who was once a national hero. These days he'd rather hide out from the world and leave his past behind. All that matters to him now is keeping Eden safe - even if that also means giving up June, the great love of Daniel's life.\n\n\tAs the two brothers struggle to accept who they've each become since their time in the Republic, a new danger creeps into the distance that's grown between them. Eden soon finds himself drawn so far into Ross City's dark side, even his legendary brother can't save him. At least not on his own...", 2000, "./assets/images/rebel.jpg", false);

const BZRK = new Series(3, "BZRK", 3);
const b1 = new Book(16, 4, "BZRK", 407, "\tCharles and Benjamin Armstrong, conjoined twins and owners of the Armstrong Fancy Gifts Corporation, have a goal: to turn the world into their vision of utopia. No wars, no conflict, no hunger. And no free will. Opposing them is a guerrilla group of teens, code name BZRK, who are fighting to protect the right to be messed up, to be human.\n\n\tThis is no ordinary war, though. Weapons are deployed on the nano-level. The battleground is the human brain.  And there are no stalemates here: It's victory . . . or madness.", 2000, "./assets/images/BZRK.jpg", false);
const b2 = new Book(17, 4, "BZRK: Reloaded", 432, "\tThe entire BZRK cell - including Noah and Sadie - has been left in pieces after the last round of battle with the Armstrong Twins, conjoined brothers who plot to rob mankind of its free will. Vincent's mind is shattered, and his memories hold dangerous secrets - secrets that Lear, BZRK's mysterious leader, will stop at nothing to protect.\n\n\tMeanwhile, Bug Man has taken control of the President's brain, but playing with sanity is a dangerous game. The consequences can spiral way out of control, and the Armstrong Twins are not people Bug Man can afford to disappoint. The nano is as terrifying, exhilarating, and unpredictable as ever. But the wall of secrets that surrounds it is cracking. What will it reveal? And once the dust has settled, who will be sane enough to find out?", 2000, "./assets/images/BZRK-Reloaded.jpg",false);
const b3 = new Book(18, 4, "BZRK: Apocalypse", 442, "\tNoah and Sadie have seen death, and it holds no fear for them. Madness does, though. And losing each other. But they will not sit back, helpless witnesses to an invisible apocalypse. The world is being destroyed from the inside out. It's time to take up the fight once more, in the streets and in the nano. And they'll give everything they have to stop the Armstrong Twins. But are the Twins the ultimate enemy? Nobody has ever known the identity of Lear, the shadowy leader of BZRK. Just who have they been fighting for? As madness spreads like a plague, one thing becomes terrifyingly clear: this was Lear's game all along. And Lear hasn't been playing fair.", 2000, "./assets/images/BZRK-Apocalypse.jpg", false);

const YoungElites = new Series(4, "The Young Elites", 3);
const ye1 = new Book(19, 2, "The Young Elites", 357, "\tI am tired of being used, hurt, and cast aside.\n\n\tAdelina Amouteru is a survivor of the blood fever. A decade ago, the deadly illness swept through her nation. Most of the infected perished, while many of the children who survived were left with strange markings. Adelina's black hair turned silver, her lashes went pale, and now she has only a jagged scar where her left eye once was. Her cruel father believes she is a malfetto, an abomination, ruining their family's good name and standing in the way of their fortune. But some of the fever's survivors are rumored to possess more than just scars - they are believed to have mysterious and powerful gifts, and though their identities remain secret, they have come to be called the Young Elites.\n\n\tTeren Santoro works for the king. As Leader of the Inquisition Axis, it is his job to seek out the Young Elites, to destroy them before they destroy the nation. He believes the Young Elites to be dangerous and vengeful, but it's Teren who may possess the darkest secret of all.\n\n\tEnzo Valenciano is a member of the Dagger Society. This secret sect of Young Elites seeks out others like them before the Inquisition Axis can. But when the Daggers find Adelina, they discover someone with powers like they've never seen.\n\n\tAdelina wants to believe Enzo is on her side, and that Teren is the true enemy. But the lives of these three will collide in unexpected ways, as each fights a very different and personal battle. But of one thing they are all certain: Adelina has abilities that shouldn't belong in this world. A vengeful blackness in her heart. And a desire to destroy all who dare to cross her.\n\n\tIt is my turn to use. My turn to hurt.", 2000, "./assets/images/the young elites.jpg", false);
const ye2 = new Book(20, 2, "The Rose Society", 397, "\tOnce upon a time, a girl had a father, a prince, a society of friends. Then they betrayed her, and she destroyed them all.\n\n\tAdelina Amouteru's heart has suffered at the hands of both family and friends, turning her down the bitter path of revenge. Now known and feared as the White Wolf, she flees Kenettra with her sister to find other Young Elites in the hopes of building her own army of allies. Her goal: to strike down the Inquisition Axis, the white-cloaked soldiers who nearly killed her.\n\n\tBut Adelina is no heroine. Her powers, fed only by fear and hate, have started to grow beyond her control. She does not trust her newfound Elite friends. Teren Santoro, leader of the Inquisition, wants her dead. And her former friends, Raffaele and the Dagger Society, want to stop her thirst for vengeance. Adelina struggles to cling to the good within her. But how can someone be good when her very existence depends on darkness?", 2000, "./assets/images/the rose society.jpg", false);
const ye3 = new Book(21, 2, "The Midnight Star", 320, "\tThere was once a time when darkness shrouded the world, and the darkness had a queen.\n\n\tAdelina Amouteru is done suffering. She's turned her back on those who have betrayed her and achieved the ultimate revenge: victory. Her reign as the White Wolf has been a triumphant one, but with each conquest her cruelty only grows. The darkness within her has begun to spiral out of control, threatening to destroy all she's gained.\n\n\tWhen a new danger appears, Adelina's forced to revisit old wounds, putting not only herself at risk, but every Elite. In order to preserve her empire, Adelina and her Roses must join the Daggers on a perilous quest - though this uneasy alliance may prove to be the real danger.", 2000, "./assets/images/the midnight star.jpg", false);

const EscapeFromFurnace = new Series(5, "Escape From Furnace", 5);
const esc1 = new Book(22, 3, "Lockdown", 273, "\tFurnace Penitentiary: the world's most secure prison for young offenders, buried a mile beneath the earth's surface. Convicted of a murder he didnt commit, sentenced to life without parole, \"new fish\" Alex Sawyer knows he has two choices: find a way out, or resign himself to a death behind bars, in the darkness at the bottom of the world. Except in Furnace, death is the least of his worries. Soon Alex discovers that the prison is a place of pure evil, where inhuman creatures in gas masks stalk the corridors at night, where giants in black suits drag screaming inmates into the shadows, where deformed beasts can be heard howling from the blood-drenched tunnels below. And behind everything is the mysterious, all-powerful warden, a man as cruel and dangerous as the devil himself, whose unthinkable acts have consequences that stretch far beyond the walls of the prison.\n\n\tTogether with a bunch of inmates - some innocent kids who have been framed, others cold-blooded killers - Alex plans an escape. But as he starts to uncover the truth about Furnace's deeper, darker purpose, Alex's actions grow ever more dangerous, and he must risk everything to expose this nightmare that's hidden from the eyes of the world.", 2000, "./assets/images/lockdown.jpg",false);
const esc2 = new Book(23, 3, "Solitary", 225, "\tAlex tried to escape.\n\tHe had a perfect plan.\n\tHe was almost free. Even felt the cool, clean air on his face.\n\tThen the dogs came.\n\tNow he's locked in a place so gruesome - so hellish - that escape doesn't even matter.\n\tHe just wants to survive.\n\n\tAlex Sawyer and his mates should have known there was no way out of Furnace Penitentiary.\n\n\tTheir escape attempt only lands them deeper in the guts of this prison for young offenders, and then into solitary confinement. And that's where a whole new struggle begins - a struggle not to let the hellish conditions overwhelm them.\n\n\tBecause before another escape attempt is even possible, they must first survive the nightmare that now haunts their endless nights.", 2000, "./assets/images/solitary.jpg", false);
const esc3 = new Book(24, 3, "Death Sentence", 261, "\tAlex's second attempt to break out of Furnace Penetentiary has failed. This time his punishment will be much worse than before. Because in the hidden, bloodstained laboratories beneath the prison, he will be made into a monster. As the warden pumps something evil into his veins - a sinisterly dark nectar - Alex becomes what he most fears... a superhuman minion of Furnace. How can he escape when the darkness is inside him? How can he lead the way to freedom if he is lost to himself?", 2000, "./assets/images/death sentence.jpg", false);
const esc4 = new Book(25, 3, "Fugitives", 270, "\tI am no longer trapped in the darkness. But the darkness is still trapped inside me. We did it. We cracked the gates, escaped from Furnace. We're out, but we're not free. Not yet. Now the whole city is in lockdown - the roads sealed, the police scouring every building. And there are worse things here - creatures of unimaginable fury hunting us down. An unholy army, sent by Alfred Furnace himself.\n\n\tNow a war is raging as he tries to bring the world to its knees. I can still feel the warden's poison inside me. It's the only thing keeping me alive, but it's turning me into one of them, into a monster. I don't know how much longer I can fight it before the rage takes over. If I don't find a cure soon then it will be me out there tearing this city apart, me feasting on blood.\n\n\tIf I ever want to be truly free then I have to travel into the heart of the darkness. I have to find Alfred Furnace before he finds me. We made it out but the nightmare followed us, and soon the whole world will be our prison...", 2000, "./assets/images/fugitives.jpg", false);
const esc5 = new Book(26, 3, "Execution", 312, "\tThe whole world has become a prison, and Alfred Furnace is its master. Monsters rule the streets, beasts of pure fury that leave nothing but murder and madness in their wake. Those who do not die are turned, becoming slaves to Furnace's reign of cruelty. It is a war to end all wars, one that will leave the planet in ruins. I am a monster too. I am one of Alfred Furnace's children. And I am the only one who can stop him. I have to find a way to use my powers to destroy Furnace, but in doing so I risk becoming the very force that kills us all. I don't know if I am the executed or the executioner. I don't know who will die: me, Furnace or the entire human race. All I know is that one way or another, it all ends today.", 2000, "./assets/images/execution.jpg", false);

const Gone = new Series(6, "Gone", 6);
const g1 = new Book(27, 4, "Gone", 560, "\tIn the blink of an eye, everyone disappears. Gone. Except for the young.\n\n\tThere are teens, but not one single adult. Just as suddenly, there are no phones, no internet, no television. No way to get help. And no way to figure out what's happened.\n\n\tHunger threatens. Bullies rule. A sinister creature lurks. Animals are mutating. And the teens themselves are changing, developing new talents - unimaginable, dangerous, deadly powers - that grow stronger by the day. It's a terrifying new world. Sides are being chosen, a fight is shaping up. Townies against rich kids. Bullies against the weak. Powerful against powerless. And time is running out: On your 15th birthday, you disappear just like everyone else...", 2000, "./assets/images/gone.jpg", false);
const g2 = new Book(28, 4, "Hunger", 586, "\tIt's been three months since everyone under the age of fifteen became trapped in the bubble known as the FAYZ.\n\n\tThree months since all the adults disappeared. GONE.\n\n\tFood ran out weeks ago. Everyone is starving, but no one wants to figure out a solution. And each day, more and more kids are evolving, developing supernatural abilities that set them apart from the kids without powers. Tension rises and chaos is descending upon the town. It's the normal kids against the mutants. Each kid is out for himself, and even the good ones turn murderous.\n\n\tBut a larger problem looms. The Darkness, a sinister creature that has lived buried deep in the hills, begins calling to some of the teens in the FAYZ. Calling to them, guiding them, manipulating them.\n\n\tThe Darkness has awakened. And it is hungry.", 2000, "./assets/images/hunger.jpg", false);
const g3 = new Book(29, 4, "Lies", 472, "\tIt's been seven months since all the adults disappeared. Gone.\n\n\tIt happens in one night. A girl who died now walks among the living; Zil and the Human Crew set fire to Perdido Beach; and amid the flames and smoke, Sam sees the figure of the boy he fears the most: Drake. But Drake is dead. Sam and Caine defeated him along with the Darkness - or so they thought.\n\n\tAs Perdido Beach burns, battles rage: Astrid against the Town Council; the Human Crew versus the mutants; and Sam against Drake, who is back from the dead and ready to finish where he and Sam left off. And all the while deadly rumors are raging like the fire itself, spread by the prophetess Orsay and her companion, Nerezza. They say that death is a way to escape the FAYZ. Conditions are worse than ever and kids are desperate to get out. But are they desperate enough to believe that death will set them free?", 2000, "./assets/images/lies.jpg", false);
const g4 = new Book(30, 4, "Plague", 526, "\tIt's been eight months since all the adults disappeared. GONE.\n\n\tThey've survived hunger. They've survived lies. But the stakes keep rising, and the dystopian horror keeps building. Yet despite the simmering unrest left behind by so many battles, power struggles, and angry divides, there is a momentary calm in Perdido Beach.\n\n\tBut enemies in the FAYZ don't just fade away, and in the quiet, deadly things are stirring, mutating, and finding their way free. The Darkness has found its way into the mind of its Nemesis at last and is controlling it through a haze of delirium and confusion. A highly contagious, fatal illness spreads at an alarming rate. Sinister, predatory insects terrorize Perdido Beach. And Sam, Astrid, Diana, and Caine are plagued by a growing doubt that they'll escape - or even survive - life in the FAYZ. With so much turmoil surrounding them, what desperate choices will they make when it comes to saving themselves and those they love?", 2000, "./assets/images/plague.jpg", false);
const g5 = new Book(31, 4, "Fear", 549, "\tIt's been one year since all the adults disappeared. Gone.\n\n\tDespite the hunger and the lies, even despite the plague, the kids of Perdido Beach are determined to survive. Creeping into the tenuous new world they've built, though, is perhaps the worst incarnation yet of the enemy known as the Darkness: fear.\n\n\tWithin the FAYZ, life breaks down while the Darkness takes over, literally - turning the dome-world of the FAYZ entirely black. In darkness, the worst fears of all emerge, and the cruelest of intentions are carried out. But even in their darkest moments, the inhabitants of the FAYZ maintain a will to survive and a desire to take care of the others in their ravaged band that endures, no matter what the cost.", 2000, "./assets/images/fear.jpg", false);
const g6 = new Book(32, 4, "Light", 435, "\tIt's been over a year since all the adults disappeared. Gone.\n\n\tIn the time since every person over the age of fourteen disappeared from the town of Perdido Beach, California, countless battles have been fought: battles against hunger and lies and plague, and epic battles of good against evil. Light, Michael Grant's sixth and final book in the New York Times bestselling Gone series creates a masterful, arresting conclusion to life in the FAYZ.\n\n\tAnd now, the gaiaphage has been reborn as Diana's malicious mutant daughter, Gaia. Gaia is endlessly hungry for destruction. She yearns to conquer her nemesis, Little Pete, and then bend the entire world to her warped will. As long-standing enemies become allies, secrets are revealed and unexpected sacrifices are made. Will their attempts to save themselves and one another matter in the end, or will the kids of Perdido Beach perish in this final power struggle?", 2000, "./assets/images/light.jpg", false);

const Monster = new Series(7, "Monster", 3);
const mon1 = new Book(33, 5, "Monster", 420, "\tIt's been four years since a meteorite hit Perdido Beach and Everyone disappeared. Gone. Everyone, except the kids trapped in the FAYZ - an invisible dome that was created by an alien virus. Inside the FAYZ, animals began to mutate and teens developed dangerous powers. the terrifying new world was plagued with hunger, lies, and fear of the unknown.\n\n\tNow, four years later, meteorites are hitting Earth with a virus that is even deadlier. Humans will mutate into monsters and the whole world will be exposed.\n\n\tBut power corrupts. As some teens begin to morph into heroes, they will find that others become dangerously out of control and that the world is on the brink of a monstrous battle between good and evil.\n\n\tAnd there is only one thing more terrifying than the fear of the unknown: when history repeats itself.", 2000, "./assets/images/monster.jpg", false);
const mon2 = new Book(34, 5, "Villain", 324, "\tIt's been four years since the events of GONE. The Perdido Beach dome is down, but the horrors within have spread. The alien virus-infested rock that created the FAYZ is creating monsters - monsters that walk the cities and countryside, terrorizing all.\n\n\tThere are tanks in the street and predator drones in the sky, doomed efforts to stop the disintegration of civilization. Into this chaos comes a villain with the power to control anyone with just the sound of his voice. Dillon Poe wanted to be a comedian once... but everyone made fun of him. Dillon the loser. Dillon the freak. Now he's sending thousands to their death. Who's laughing now?\n\n\tThe only people who can stop a superpowered villain are superpowered heroes. Dekka, Shade, Cruz, Malik, Armo, and a new mutant with unmatched powers, are all that stand in Dillon's way. But when the lines begin to blur between hero and villain - some begin to wonder who's really the monster.", 2000, "./assets/images/villain.jpg", false);
const mon3 = new Book(35, 5, "Hero", 427, "\tMonster. Villain. Hero.\n\n\tFour years after the Perdido Beach dome went down, the alien virus that created it is still wreaking havoc, and virus-infested rock has created a new set of humans with mutant powers.\n\n\tRockborn gang members Dekka, Shade, Cruz, Malik, Armo, and Francis are fresh off their defeat of Dillon Poe and in need of answers to some very pressing questions about their own powers: who are the Dark Watchers? And what is this Fourth Dimension that only Francis can access?\n\n\tBut heroes don't get down time. When the alien-virus infested rock hits New York, a new foe, Bob Markovic, rises amongst the newly rockborn. Markovic's arrogance and lack of a moral compass already made him unbearable. With his newfound power to inflict a deadly disease, he could send all of humanity into a living hell. As they try to find their footing on morally gray grounds, the Rockborn Gang will have to make some tough decisions if they want to save the world.", 2000, "./assets/images/hero.jpg", false);

const Quarantine = new Series(8, "Quarantine", 4);
const q1 = new Book(36, 6, "The Loners", 404, "\tIt was just another ordinary day at McKinley High - until a massive explosion devastated the school. When loner David Thorpe tried to help his English teacher to safety, the teacher convulsed and died right in front of him. And that was just the beginning.\n\n\tA year later, McKinley has descended into chaos. All the students are infected with a virus that makes them deadly to adults. The school is under military quarantine. The teachers are gone. Violent gangs have formed based on high school social cliques. Without a gang, you're as good as dead. And David has no gang. It's just him and his little brother, Will, against the whole school.", 2000, "./assets/images/the loners.jpg", false);
const q2 = new Book(37, 6, "The Saints", 384, "\tNothing was worse than being locked in - until they opened the door...\n\n\tMcKinley High has been a battle ground for eighteen months since a virus outbreak led to a military quarantine of the school. When the doors finally open, Will and Lucy will think their nightmare is finished. But they are gravely mistaken.\n\n\tAs a new group of teens enters the school and gains popularity, Will and Lucy join new gangs. An epic party on the quad full of real food and drinks, where kids hookup and actually interact with members of other gangs seemed to signal a new, easier existence. Soom after though, the world inside McKinley takes a startling turn for the worse, and Will and Lucy will have to fight harder than ever to survive.", 2000, "./assets/images/the saints.jpg", false);
const q3 = new Book(38, 6, "The Burnouts", 266, "\tWhen an explosion rocks David and Will's suburban high school one morning, a deadly virus is unleashed on the school. After a year of quarantine, with no adults around, the students have created their own society. All of the social cliques have developed into gangs-The Nerds, The Geeks, The Freaks, The Sluts, The Skaters, The Burnouts, The Pretty Ones, and The Varsity-and each gang provides a service with which they can barter for provisions. Without a gang, it's almost impossible to secure food, water, territory, or supplies. In the final installment in the Quarantine trilogy, the brothers are reunited on the Outside and it appears as if, for once everything is going right. But inside the school, Lucy is alone with no gang and no hope, until the Burnouts welcome her into their filthy arms.", 2000, "./assets/images/the burnouts.jpg", false);
const q4 = new Book(39, 6, "The Giant", 345, "\tIn the violent early days of the quarantine, Gonzalo joins a gang of thieves who live in the ductwork of McKinley High School. There he falls in love with Sasha, but as he grows too big to fit, he is forced to leave without her.\n\n\tA year later, he scours the infected zone for her. No matter how many murderers, puncture wounds, or militia he has to survive, Gonzalo can't give up on Sasha.", 2000, "./assets/images/the giant.jpg", false);

const DarkestMinds = new Series(9, "The Darkest Minds", 5);
const dm1 = new Book(40, 7, "The Darkest Minds", 488, "\tWhen Ruby woke up on her tenth birthday, something about her had changed. Something alarming enough to make her parents lock her in the garage and call the police. Something that gets her sent to Thurmond, a brutal government \"rehabilitation camp.\" She might have survived the mysterious disease that's killed most of America's children, but she and the others have emerged with something far worse: frightening abilities they cannot control.\n\n\tNow sixteen, Ruby is one of the dangerous ones.\n\n\tWhen the truth comes out, Ruby barely escapes Thurmond with her life. Now she's on the run, desperate to find the one safe haven left for kids like her - East River. She joins a group of kids who escaped their own camp. Liam, their brave leader, is falling hard for Ruby. But no matter how much she aches for him, Ruby can't risk getting close. Not after what happened to her parents.\n\n\tWhen they arrive at East River, nothing is as it seems, least of all its mysterious leader. But there are other forces at work, people who will stop at nothing to use Ruby in their fight against the government. Ruby will be faced with a terrible choice, one that may mean giving up her only chance at a life worth living.", 2000, "./assets/images/the darkest minds.jpg", false);
const dm2 = new Book(41, 7, "Never Fade", 507, "\tRuby never asked for the abilities that almost cost her her life. Now she must call upon them on a daily basis, leading dangerous missions to bring down a corrupt government and breaking into the minds of her enemies. Other kids in the Children's League call Ruby \"Leader\", but she knows what she really is: a monster.\n\n\tWhen Ruby is entrusted with an explosive secret, she must embark on her most dangerous mission yet: leaving the Children's League behind. Crucial information about the disease that killed most of America's children - and turned Ruby and the others who lived into feared and hated outcasts - has survived every attempt to destroy it. But the truth is only saved in one place: a flashdrive in the hands of Liam Stewart, the boy Ruby once believed was her future - and who now wouldn't recognize her.\n\n\tAs Ruby sets out across a desperate, lawless country to find Liam - and answers about the catastrophe that has ripped both her life and America apart - she is torn between old friends and the promise she made to serve the League. Ruby will do anything to protect the people she loves. But what if winning the war means losing herself?", 2000, "./assets/images/never fade.jpg", false);
const dm3 = new Book(42, 7, "In The Afterlight", 535, "\tRuby can't look back. Fractured by an unbearable loss, she and the kids who survived the government's attack on Los Angeles travel north to regroup. With them is a prisoner: Clancy Gray, son of the president, and one of the few people Ruby has encountered with abilities like hers. Only Ruby has any power over him, and just one slip could lead to Clancy wreaking havoc on their minds.\n\n\tThey are armed only with a volatile secret: proof of a government conspiracy to cover up the real cause of IAAN, the disease that has killed most of America's children and left Ruby and others like her with powers the government will kill to keep contained. But internal strife may destroy their only chance to free the \"rehabilitation camps\" housing thousands of other Psi kids.\n\n\tMeanwhile, reunited with Liam, the boy she would - and did - sacrifice everything for to keep alive, Ruby must face the painful repercussions of having tampered with his memories of her. She turns to Cole, his older brother, to provide the intense training she knows she will need to take down Gray and the government. But Cole has demons of his own, and one fatal mistake may be the spark that sets the world on fire.", 2000, "./assets/images/in the afterlight.jpg", false);
const dm4 = new Book(43, 7, "Through The Dark", 395, "\tIN TIME\n\tGabe's life has been devastated in the wake of the economic crash. The only option left for someone like him to escape his tragic past is to leave his small town behind and to attempt to become a skiptracer. This already almost-impossible task is made all the more difficult by his first \"score\", a young girl who won't speak, but who changes his life in ways he could never imagine.\n\n\tSPARKS RISE\n\tSam didn't think things could get worse at Thurmond rehabilitation camp. Then the Reds arrive. Everyone assumed the kids with firepower had been killed years ago. Instead they were taken away, brainwashed, and returned as terrifyingly effective guards. To her horror, Sam recognizes one of them: Lucas, the one spark of light in Sam's dark childhood. Lucas has a deadly secret - he beat the brutal training that turned his fellow Reds into mindless drones. When Sam defends herself against an attack by a vile PSF guard and faces a harrowing punishment, Lucas must risk everything to save her.\n\n\tBEYOND THE NIGHT\n\tThe government-run \"rehabilitation camps\" have been shut down, but kids with Psi powers are anything but free. Sam would rather be on her own than put in the care of a foster family and given the \"cure\" - a dangerous procedure that unclaimed kids across the country are being forced to undergo. But there's more at stake than just her own safety. Sam once made someone a promise, and the time has come to fulfill it. Now that she's out of her camp, Mia only has one thought in her head: finding Lucas, her beloved older brother.", 2000, "./assets/images/through the dark.jpg", false);
const dm5 = new Book(44, 7, "The Darkest Legacy", 569, "\tFive years after the destruction of the so-called rehabilitation camps that imprisoned her and countless other Psi kids, seventeen-year-old Suzume \"Zu\" Kimura has assumed the role of spokesperson for the interim government, fighting for the rights of Psi kids against a growing tide of misinformation and prejudice. But when she is accused of committing a horrifying act, she is forced to go on the run once more in order to stay alive.\n\n\tDetermined to clear her name, Zu finds herself in an uncomfortable alliance with Roman and Priyanka, two mysterious Psi who could either help her prove her innocence or betray her before she gets the chance. But as they travel in search of safety and answers, and Zu grows closer to the people she knows she shouldn't trust, they uncover even darker things roiling beneath the veneer of the country's recovery. With her future-and the future of all Psi-on the line, Zu must use her powerful voice to fight back against forces that seek to drive the Psi into the shadows and save the friends who were once her protectors.", 2000, "./assets/images/the darkest legacy.jpg", false);

const ConspiracyChronicles = new Series(10, "The Conspiracy Chronicles", 15);
const cc1 = new Book(45, 8, "Recruitment", 299, "\tIn the Valta, no matter what month you were born, everyone is assigned the same birthday. November 1st. It's the anniversary of the day when the government declared war on the Eastern Order.The day you turn seventeen, the Recruiters come to take you away. And no one ever hears from you again.It's October 31st. Today, Kress is sixteen years old.Tomorrow, she'll be taken.The good news? So will her best friend Cardyn, and Brohn, the handsome, enigmatic boy she's avoided all her life.The bad news?Recruitment isn't what any of them expected.Weeks of training await. Military and psychological tests, escape rooms, hand-to-hand combat. The Recruits are told they're the key to winning the war. But with each day that passes, things begin to make less sense.If only Kress had been able to bring her trained raven, Render, with her.If only none of them had ever had to come to this place.", 2000, "./assets/images/recruitment.jpg", false);
const cc2 = new Book(46, 8, "Render", 275, "\tHaving escaped from the Processor, Kress and her fellow Seventeens go on the run. Guided by Render, they undertake a dangerous, enemy-filled journey west where they encounter the Insubordinates, a guerilla army of counter-insurgents led by an unexpected but familiar field general. Now, Kress and her Conspiracy are preparing to expose the government's lies abou the Eastern Order and reclaim the democracy so many of them and thier families died trying to protect.", 2000, "./assets/images/render.jpg", false);
const cc3 = new Book(47, 8, "Rebellion", 284, "\tAided by the Insubordinates, Kress and her Conspiracy wage a daring counter-offensive against the Patriot Army in an effort to liberate the city of San Francisco. Outnumbered, facing impossible odds, and opposed by a powerful and ruthless enemy named General Ekker, Kress and her friends hope for help as they struggle to understand and control their emerging abilities.", 2000, "./assets/images/rebellion.jpg", false);
const cc4 = new Book(48, 8, "Survival", 283, "\tIn the year 2043, with the nation destroyed by war, seventeen-year-old Kress and her Conspiracy of friends embark on a dangerous cross-country mission to locate and recruit other Emergents, the name given to teenagers who have begun to exhibit strange evolutionary abilities. Not all Emergents are ready to accept who and what they are, however, and some have even started using their abilities for selfish or evil ends.\n\n\tNow Kress has to figure out who is friend and who is foe as she risks everything to expose the government's lies and take down the tyrannical President Krug once and for all.", 2000, "./assets/images/survival.jpg", false);
const cc5 = new Book(49, 8, "Sacrifice", 295, "\tCaptured by the group of rogue Emergents known as \"Hypnagogics,\" Kress and her Conspiracy search desperately for a way out of their confinement in a stadium-sized prison-lab called the Mill. There, they find themselves subjected to a bombardment of psychological manipulations, physical challenges, and cruel techno-genetic experiments.\n\n\tForced by the mysterious \"Auditor\" to endure a battery of mind-warping Virtual Reality missions and unsettled by a series of shocking discoveries, Kress and her friends will need to make agonizing choices and an equally painful sacrifice.", 2000, "./assets/images/sacrifice.jpg", false);
const cc6 = new Book(50, 8, "Synthesis", 323, "\tEncouraged by happy reunions, shocked by terrifying discoveries, and with the lives of millions and the fate of the nation hanging in the balance, Kress and her Conspiracy - along with their new legions of allies, the Survivalists and the Unkindness - prepare for their final, all-or-nothing war against Krug and the assembled might of his Patriot Army.", 2000, "./assets/images/synthesis.jpg", false);
const cc7 = new Book(51, 8, "Travelers", 329, "\tAfter their costly victory over President Krug and the Patriot Army, Kress and her Conspiracy travel to London, fight their way through the ruins of Paris, and plunge into the heart of Spain as they race to track down a mythical pair of twins who are rumored to have the unique ability to enter the world of dreams.\n\n\tPursued by a bounty hunter named Noxia and opposed by an underground team of criminal techno-geneticists, Kress and her friends embark on a deadly quest that makes their previous adventures look like a summer vacation.", 2000, "./assets/images/travelers.jpg", false);
const cc8 = new Book(52, 8, "Transfigured", 339, "\tEmbarking on a fresh set of adventures through Europe, Kress and her Conspiracy continue their search for fellow Emergents, unsure if they're about to find new friends or the deadliest collection of enemies.\n\n\tWith Noxia and her team of Hawkers hot on their heels, the Conspiracy will come face to face with mind-blowing discoveries, the shocking truth about their dreams, and solutions to mysteries they may wish they'd never tried to solve.", 2000, "./assets/images/transfigured.jpg", false);
const cc9 = new Book(53, 8, "Terminus", 307, "\tAfter their overseas missions, Kress and her Conspiracy return home to a divided nation.\n\n\tThe East and West Coasts have become fragile havens from a dystopian middle America, which remains mired in fear, poverty, and the most sadistic brands of vigilante violence.\n\n\tAll Kress and her Conspiracy have to do is embark on a cross-country road-trip from Washington, D.C. to the Valta in Colorado, dodge the deadly Cult of the Devoted and the Army of the Unsettled - two groups battling for control over a land that might not be worth saving - and complete a perilous rescue mission along the way.\n\n\tWhat could possibly go wrong?", 2000, "./assets/images/terminus.jpg", false);
const cc10 = new Book(54, 8, "Emergents Academy", 326, "\tIt's been more than five years since Kress and her Conspiracy defeated Krug and his Patriot Army, traveled through Europe and back, completed a cross-country rescue mission, and made it home alive.\n\n\tThings were looking up for the future of the nation...until the members of the Cult of the Devoted and the teenagers of the Army of the Unsettled decided to light the fuse for an all-out civil war.\n\n\tNow, a special Academy - hidden high in the mountains and designed as a school to train young Emergents in the use of their abilities - is being forced into the fight. On the brink of a new global apocalypse, the mysterious raven-whisperer Branwynne and the techno-genetically enhanced teenagers of the Emergents Academy find themselves entangled in a three-way battle for power, where survival is doubtful, peace is impossible, and death is inevitable.", 2000, "./assets/images/emergents academy.jpg", false);
const cc11 = new Book(55, 8, "Cult Of The Devoted", 308, "\tFeeling an overpowering pull she can't explain or control, Branwynne slips out of the Emergents Academy in search of Matholook, the mysterious and charming seventeen-year-old member of the Cult of the Devoted she first met five years ago.\n\n\tHeading right into the enemy camp may not seem like the most sensible thing to do, but Branwynne has never been one to blindly follow the rules - or to shy away from danger. Especially when her instincts are screaming at her that Matholook may have answers to questions she's been searching for all her life.\n\n\tThrust into the middle of a bloody, three-way war for power in a bleak and ravaged land, Branwynne has her loyalties tested as she closes in on the mystery of who and what she really is.\n\n\tWhat she finds may not change her life or her mind.\n\n\tBut it could just change her heart.", 2000, "./assets/images/cult of the devoted.jpg", false);
const cc12 = new Book(56, 8, "Army Of The Unsettled", 368, "\tIn the days before Epic - the mysterious albino techno-geneticist - is expected to light the fuse for an all-out war, Branwynne and her Asylum have been given their first major assignment: Track and report back to their teachers about the moving caravan of the Army of the Unsettled. What could be simpler\n\n\tWhen the violence of a broken world hits close to home, Branwynne and her friends find themselves dragged into the bizarre and unexpected world of the Army of the Unsettled.\n\n\tIn way over their heads, weaponless, and with no backup on the horizon, they're about to discover the big difference between learning about the end of the world and surviving it.", 2000, "./assets/images/army of the unsettled.jpg", false);
const cc13 = new Book(57, 8, "Arise", 356, "\tKress and Brohn, a young Emergent couple with techno-genetically enhanced abilities, embark on a quest to infiltrate the Cult of the Devoted in the skyscraping arcology in the middle of what's left of Denver, Colorado. When Brohn mysteriously vanishes early in their mission, Kress - accompanied by Render, her psychically-connected raven companion - is forced to undertake a perilous journey through a danger-filled, post-apocalyptic city to find him and get him back.\n\n\tIn this high-stakes adventure, inspired by Homer's epic The Odyssey, Kress must battle killers, con artists, gangsters, giants, and ghosts, and will literally go through Hell to find the man she loves.", 2000, "./assets/images/arise.jpg", false);
const cc14 = new Book(58, 8, "Banished", 295, "\tKress and Brohn set out to track down the five members of the Fallen Kress had to leave behind on her last adventure. Along the way, they find themselves drawn into the plight of the Unsettled, an oppressed underclass being targeted for extermination by the Cult of the Devoted.\n\n\tPlagued by internal divisions, some of the Unsettled want to negotiate with the Devoted, while others are planning something more dramatic, namely, blowing up the skyscraping Goldsmith Arcology and whoever's left in the city along with it.\n\n\tCaught in the middle, Kress and Brohn have a decision to make. The path they choose could save - or else end - the lives of millions.", 2000, "./assets/images/banished.jpg", false);
const cc15 = new Book(59, 8, "Crusade", 445, "\tAccompanied by Méridienne and her younger brother Corbin, Kress and Brohn undertake a whirlwind crusade through the Dordogne Region in the southwest of France. Navigating their way through the Medieval \"Valley of Castles,\" they rush to track down the fabled First Feather from a mythological raven that supposedly contains the techno-genetic code that makes Emergents possible.\n\n\tUnfortunately, they're not the only ones searching for this particular raven. It turns out Epic and his gang of deadly Hypnagogics have a head start. And to make matters much worse, half of the people in what's left the world are willing to kill anyone in their way to get it first.", 2000, "./assets/images/crusade.jpg", false);

const Divergent = new Series(11, "Divergent", 4);
const div1 = new Book(60, 5, "Divergent", 487, "\tIn Beatrice Prior's dystopian Chicago world, society is divided into five factions, each dedicated to the cultivation of a particular virtue - Candor (the honest), Abnegation (the selfless), Dauntless (the brave), Amity (the peaceful), and Erudite (the intelligent). On an appointed day of every year, all sixteen-year-olds must select the faction to which they will devote the rest of their lives. For Beatrice, the decision is between staying with her family and being who she really is - she can't have both. So she makes a choice that surprises everyone, including herself.\n\n\tDuring the highly competitive initiation that follows, Beatrice renames herself Tris and struggles alongside her fellow initiates to live out the choice they have made. Together they must undergo extreme physical tests of endurance and intense psychological simulations, some with devastating consequences. As initiation transforms them all, Tris must determine who her friends really are - and where, exactly, a romance with a sometimes fascinating, sometimes exasperating boy fits into the life she's chosen. But Tris also has a secret, one she's kept hidden from everyone because she's been warned it can mean death. And as she discovers unrest and growing conflict that threaten to unravel her seemingly perfect society, she also learns that her secret might help her save those she loves... or it might destroy her.", 2000, "./assets/images/divergent.jpg", false);
const div2 = new Book(61, 5, "Insurgent", 525, "\tOne choice can transform you - or it can destroy you. But every choice has consequences, and as unrest surges in the factions all around her, Tris Prior must continue trying to save those she loves - and herself - while grappling with haunting questions of grief and forgiveness, identity and loyalty, politics and love.\n\n\tTris's initiation day should have been marked by celebration and victory with her chosen faction; instead, the day ended with unspeakable horrors. War now looms as conflict between the factions and their ideologies grows. And in times of war, sides must be chosen, secrets will emerge, and choices will become even more irrevocable - and even more powerful. Transformed by her own decisions but also by haunting grief and guilt, radical new discoveries, and shifting relationships, Tris must fully embrace her Divergence, even if she does not know what she may lose by doing so.", 2000, "./assets/images/insurgent.jpg", false);
const div3 = new Book(62, 5, "Allegiant", 526, "\tThe faction-based society that Tris Prior once believed in is shattered - fractured by violence and power struggles and scarred by loss and betrayal. So when offered a chance to explore the world past the limits she's known, Tris is ready. Perhaps beyond the fence, she and Tobias will find a simple new life together, free from complicated lies, tangled loyalties, and painful memories.\n\n\tBut Tris's new reality is even more alarming than the one she left behind. Old discoveries are quickly rendered meaningless. Explosive new truths change the hearts of those she loves. And once again, Tris must battle to comprehend to complexities of human nature - and of herself - while facing impossible choices about courage, allegiance, sacrifice, and love.", 2000, "./assets/images/allegiant.jpg", false);
const div4 = new Book(63, 5, "Four", 285, "\tIn \"The Transfer,\" readers witness Tobias's aptitude test, Choosing Day, and the moment he is given the infamous nickname \"Four\".\n\n\tThe Initiate provides readers with a glimpse into Tobias's Dauntless initiation experience, including an epic game of late-night Dare; his first tattoo; the beginning of his passion for training new initiates; and his nascent understanding of the danger of being Divergent.\n\n\tIn \"The Son\", Tobias struggles to find a place in the hierarchy of the Dauntless. He also begins to suspect that a foul plan may be brewing within the Dauntless leadership and discovers a truth about his past that could greatly affect his future.\n\n\tThe Traitor takes place two years after The Son and runs parallel with the early events in Divergent. In this robust story, readers follow Tobias as he uncovers the details of an Erudite plan that could threaten the faction system, and makes plans of his own to keep Abnegation safe. At the same time, Tobias is getting to know a new transfer initiate: Tris Prior.", 2000, "./assets/images/four.jpg", false);

const Partials = new Series(12, "Partials", 3);
const p1 = new Book(64, 9, "Partials", 468, "\tHumanity is all but extinguished after a war with Partials - engineered organic beings identical to humans - has decimated the population. Reduced to only tens of thousands by a weaponized virus to which only a fraction of humanity is immune, the survivors in North America have huddled together on Long Island. But sixteen-year-old Kira is determined to find a solution. As she tries desperately to save what is left of her race, she discovers that that the survival of both humans and Partials rests in her attempts to answer questions about the war's origin that she never knew to ask.\n\n\tPlaying on our curiosity of and fascination with the complete collapse of civilization, Partials is, at its heart, a story of survival, one that explores the individual narratives and complex relationships of those left behind, both humans and Partials alike - and of the way in which the concept of what is right and wrong in this world is greatly dependent on one's own point of view.", 2000, "./assets/images/partials.jpg", false);
const p2 = new Book(65, 9, "Fragments", 564, "\tAfter discovering the cure for RM, Kira Walker sets off on a terrifying journey into the ruins of postapocalyptic America and the darkest desires of her heart in order to uncover the means - and a reason - for humanity's survival.", 2000, "./assets/images/fragments.jpg", false);
const p3 = new Book(66, 9, "Ruins", 451, "\tKira, Samm, and Marcus fight to prevent a final war between Partials and humans in the gripping final installment in the Partials Sequence, a series that combines the thrilling action of The Hunger Games with the provocative themes of Blade Runner and The Stand.\n\n\tThere is no avoiding it - the war to decide the fate of both humans and Partials is at hand. Both sides hold in their possession a weapon that could destroy the other, and Kira Walker has precious little time to prevent that from happening. She has one chance to save both species and the world with them, but it will only come at great personal cost.", 2000, "./assets/images/ruins.jpg", false);

const Wretched = new Series(13, "The Wretched", 4);
const w1 = new Book(67, 10, "The Wretched", 299, "\tThe Human Race Just Got Bumped From The Top of the Food Chain... Early fall. A top-secret research project goes terribly wrong. A new species, the Reapers, are unleashed onto the unsuspecting citizens of Philadelphia and soon the rest of the country. The Reapers are stronger, faster, and have no mercy for any humans who have the misfortune of crossing their paths.Philadelphia Cop Malcolm Foster quickly discovers a routine disturbance call is anything but ordinary. Foster soon finds himself scrambling to survive, gather together a rag-tag group of survivors, and get them out of the city. As Foster and his group fight to escape the city and find a Reaper-free sanctuary, a looming question prevails.Can anyone stop the Reapers from taking over the world? This is the story of the Wretched, a rag-tag group of survivors who may be the only ones that can keep the human race from becoming extinct.", 2000, "./assets/images/the wretched.jpg", false);
const w2 = new Book(68, 10, "Wretched Culling", 305, "\tThe Human Race Is In The Fight Of Their Lives... And They're Losing. In the first 24 hours, the Reapers have already begun to shift the balance of power in their favor. Inside their own ranks, one creature rises to become their undisputed leader. Hiding in the rural suburbs of Philadelphia, Malcolm Foster has gathered The Wretched, a rag tag group of survivors, and gone underground in hopes of avoiding the Reaper attacks. But it doesn't take long for Foster to realize the Reapers have sprung a new A targeted culling of those who protect Americans. If they succeed, then those who are left behind will be nearly defenseless and unable to stop the Reapers from taking over. Can Foster find some way to stop the Reapers before they succeed?", 2000, "./assets/images/culling.jpg", false);
const w3 = new Book(69, 10, "Wretched Retribution", 301, "\tThere Is No Rest For The Wretched...\n\n\tAfter nearly being wiped out, the remnants of the U.S. Military launch a daring mission against the Reapers. If it works, it could destroy millions of Reapers in an instant. But if it fails, then the Reapers dominance could grow even more.\n\n\tA new group arises from the shadows, one which operates under a simple mantra: Join us or die.\n\n\tMeanwhile, a single Reaper commander pursues a personal vendetta as he hunts former police officer Malcolm Foster.\n\tAs Foster and his group are being hunted, he fights to keep his friends alive and to find a safe haven from the growing number of Reaper hordes.\n\n\tAs the battle lines begin to form, there is no chance for diplomacy or peace and the future is anything but certain. Can Foster and his group find a way to survive?", 2000, "./assets/images/retribution.jpg", false);
const w4 = new Book(70, 10, "Wretched Aftermath", 325, "\tThe Battle For Survival Continues...\n\n\tThe military has failed to stop the Reapers and the monsters have gained a stronghold throughout the United States. Battered and bloodied, the armed forces refuse to surrender. Trapped in a small town, former police officer Malcolm Foster and his rag-tag group of survivors hold the key to humanity's best chance of success: They know the Reapers' fatal weakness. If Foster can get that information into the right hands, it could stop the Reapers for good. But first he needs to help his group escape the growing Reaper horde and a crazed cult leader bent on trying to kill them. When the smoke of battle begins to clear and the aftermath's effects become known... When new forces of evil emerge from the darkness...\n\n\tCan Foster overcome the odds and find a way to succeed?", 2000, "./assets/images/aftermath.jpg", false);

const Variant = new Series(14, "Variant", 2);
const v1 = new Book(71, 11, "Variant", 376, "\tBenson Fisher thought that a scholarship to Maxfield Academy would be the ticket out of his dead-end life.\n\n\tHe was wrong.\n\n\tNow he's trapped in a school that's surrounded by a razor-wire fence. A school where video cameras monitor his every move. Where there are no adults. Where the kids have split into groups in order to survive. Where breaking the rules equals death. But when Benson stumbles upon the school's real secret, he realizes that playing by the rules could spell a fate worse than death, and that escape - his only real hope for survival - may be impossible.", 2000, "./assets/images/variant.jpg", false);
const v2 = new Book(72, 11, "Feedback", 310, "\tBenson Fisher escaped from Maxfield Academy's deadly rules and brutal gangs.\n\n\tOr so he thought.\n\n\tBut now Benson is trapped in a different kind of prison: a town filled with hauntingly familiar faces. People from Maxfield he saw die. Friends he was afraid he had killed. They are all pawns in the school's twisted experiment, held captive and controlled by an unseen force. As he searches for answers, Benson discovers that Maxfield Academy's plans are more sinister than anything he imagined - and they may be impossible to stop.", 2000, "./assets/images/feedback.jpg", false);

const Enemy = new Series(15, "The Enemy", 7);
const e1 = new Book(73, 2, "The Enemy", 407, "\tWhen the sickness came, every parent, police officer, politician - every adult fell ill. The lucky ones died. The others are crazed, confused and hungry. Only children under fourteen remain, and they're fighting to survive. Now there are rumours of a safe place to hide. And so a gang of children begin their quest across London, where all through the city - down alleyways, in deserted houses, underground - the grown-ups lie in wait. But can they make it there - alive?", 2000, "./assets/images/the enemy.jpg", false);
const e2 = new Book(74, 2, "The Dead", 450, "\tEveryone over the age of fourteen has succumbed to a deadly zombie virus and now the kids must keep themselves alive. A terrible disease is striking everyone over the age of fourteen. Death walks the streets. Nowhere is safe. Maxie, Blue and the rest of the Holloway crew aren't the only kids trying to escape the ferocious adults who prey on them. Jack and Ed are best friends, but their battle to stay alive tests their friendship to the limit as they go on the run with a mismatched group of other kids - nerds, fighters, misfits. And one adult, Greg, a butcher, who claims he's immune to the disease. They must work together if they want to make it in this terrifying new world. But when fresh disaster threatens to overwhelm London, they realize they won't all survive...", 2000, "./assets/images/the dead.jpg", false);
const e3 = new Book(75, 2, "The Fear", 460, "\tThe sickness struck everyone sixteen and over. Mothers and fathers, older brothers, sisters, and best friends. No one escaped its touch. And now children across London are being hunted by ferocious grown-ups who are hungry, bloodthirsty, and not giving up. DogNut and the rest of his crew, in search of the friends they lost during the fire, set off on a deadly mission from the Tower of London to Buckingham Palace and beyond, as the sickos lie in wait. But who are their friends and who is the enemy in this changed world?", 2000, "./assets/images/the fear.jpg", false);
const e4 = new Book(76, 2, "The Sacrifice", 456, "\tThe Sacrifice picks up after Small Sam and The Kid arrive at the Tower of London at the end of The Dead. Though Sam finds safety and friendship at the Tower with Jordan Hordern's crew, he can't settle down. The only thing he wants is to be reunited with his sister, Ella. Despite Ed's protests, Sam and the Kid strike out westward, through the no-go zone.\n\n\tMeanwhile, Shadowman is tracking Saint George across north London, watching him build up his army. Shadowman knows that Saint George is an extremely dangerous threat, but no one will take his warnings seriously. Some answers to the questions we've been wondering about - What is the Disease? Where did it come from? Is there a cure? - are addressed by an unexpected source: a diseased adult nicknamed Wormwood who has the ability to speak, though his ravings are difficult to decipher.", 2000, "./assets/images/the sacrifice.jpg", false);
const e5 = new Book(77, 2, "The Fallen", 502, "\tThe Fallen by Charlie Higson is the fifth awesome book in The Enemy series. First the sickness rotted the adults' minds. Then their bodies. Now they stalk the streets, hunting human flesh. The Holloway crew are survivors. They've fought their way across London and made it to the Natural History Museum alive - just. But the fight will never end while the Enemy lives, unless there's another way...The kids at the museum are looking for a cure. All they need are medical supplies. To get them means a journey down unknown roads. Roads where not only crazed, hungry sickos hide in the shadows. Suddenly it's not so clear who - or what - they're fighting.", 2000, "./assets/images/the fallen.jpg", false);
const e6 = new Book(78, 2, "The Hunted", 439, "\tThe sickness struck everyone over fourteen. First it twisted their minds. Next it ravaged their bodies. Now they roam the streets - Crazed and hungry The others had promised that the countryside would be safer than the city. They were wrong. Now Ella's all-alone except for her silent rescuer, Scarface - and she's not even sure if he's a kid or a grown-up. Back in London, Ed's determined to find her. But getting out of town's never been more dangerous- because coming in the other direction is every SICKO in the country. It's like they're being called towards the capital and nothing is going to stop them... In the penultimate book in The Enemy series, the survivors' stories cross with chilling consequences.", 2000, "./assets/images/the hunted.jpg", false);
const e7 = new Book(79, 2, "The End", 454, "\tThe end is coming.\n\n\tThe sickness struck everyone sixteen and older. First it twisted their minds; next it ravaged their bodies. Now the sickos - crazed and hungry for young flesh - are gathered in the center of London, lying in wait. It's time for all of the survivors - kids spread out across the city - to unite. They must come up with a plan of attack to end the grown-ups' reign of terror before it is too late.", 2000, "./assets/images/the end.jpg", false);

const Monument14 = new Series(16, "Monument 14", 3);
const m1 = new Book(80, 3, "Monument 14", 294, "\tYour mother hollers that you're going to miss the bus. She can see it coming down the street. You don't stop and hug her and tell her you love her. You don't thank her for being a good, kind, patient mother. Of course not-you launch yourself down the stairs and make a run for the corner.\n\n\tOnly, if it's the last time you'll ever see your mother, you sort of start to wish you'd stopped and did those things. Maybe even missed the bus. But the bus was barreling down our street, so I ran. Fourteen kids. One superstore. A million things that go wrong. \n\n\tWhen Dean raced out the door to catch the school bus, he didn't realize it would be the last time he'd ever see his mom. After a freak hailstorm sends the bus crashing into a superstore, Dean and a group of students of all ages are left to fend for themselves. They soon realize the hailstorm and the crash are the least of their worries. After seeing a series of environmental and chemical disasters ravage the outside world, they realize they're trapped inside the store. Unable to communicate with the ones they love, the group attempts to cobble together a new existence. As they struggle to survive, Dean and the others must decide which risk is greater: leaving... or staying.", 2000, "./assets/images/monument 14.jpg", false);
const m2 = new Book(81, 3, "Sky On Fire", 215, "\tTrapped in a superstore by a series of escalating disasters, including a monster hailstorm and terrifying chemical weapons spill, brothers Dean and Alex learned how to survive and worked together with twelve other kids to build a refuge from the chaos. But then strangers appeared, destroying their fragile peace, and bringing both fresh disaster and a glimmer of hope. Knowing that the chemical weapons saturating the air outside will turn him into a bloodthirsty rage monster, Dean decides to stay in the safety of the store with Astrid and some of the younger kids. But their sanctuary has already been breached once... \n\n\tMeanwhile, Alex, determined to find their parents, heads out into the darkness and devastation with Niko and some others in a recently repaired school bus. If they can get to Denver International Airport, they might be evacuated to safety. But the outside world is even worse than they expected...", 2000, "./assets/images/sky on fire.jpg", false);
const m3 = new Book(82, 3, "Savage Drift", 305, "\tThe survivors of the Monument 14 have finally made it to the safety of a Canadian refugee camp. Dean and Alex are cautiously starting to hope that a happy ending might be possible. But for Josie, separated from the group and trapped in a brutal prison camp for exposed Type Os, things have gone from bad to worse. Traumatized by her experiences, she has given up all hope of rescue or safety. Meanwhile, scared by the government's unusual interest in her pregnancy, Astrid (with her two protectors, Dean and Jake in tow) joins Niko on his desperate quest to be reunited with his lost love Josie.", 2000, "./assets/images/savage drift.jpg", false);

//Stand Alone Books
const BrainJack = new Book(83, 12, "Brain Jack", 349, "\tLas Vegas is gone - destroyed in a terrorist attack. Black Hawk helicopters patrol the skies over New York City. And immersive online gaming is the most dangerous street drug around. In this dystopic near-future, technology has leapt forward once again, and neuro-headsets have replaced computer keyboards. Just slip on a headset, and it's the Internet at the speed of thought.\n\n\tFor teen hacker Sam Wilson, a headset is a must. But as he becomes familiar with the new technology, he has a terrifying realization. If anything on his computer is vulnerable to a hack, what happens when his mind is linked to the system? Could consciousness itself be hijacked? Before he realizes what's happened, Sam's incursion against the world's largest telecommunications company leads him to the heart of the nation's cyberdefense network and brings him face to face with a terrifying and unforeseen threat.", 2000, "./assets/images/brain jack.jpg", true);
const TomorrowCode = new Book(84, 12, "The Tomorrow Code", 317, "\tTHE END OF THE WORLD started quietly enough for Tane Williams and Rebecca Richards...\n\n\tTane and Rebecca aren't sure what to make of it - a sequence of 1s and 0s, the message looks like nothing more than a random collection of alternating digits. Working to decode it, however, Tane and Rebecca discover that the message contains lottery numbers... lottery numbers that win the next random draw! Suddenly Tane and Rebecca are rich, but who sent the numbers? And why? More messages follow, and slowly it becomes clear - the messages are being sent back in time from Tane and Rebecca's future. Something there has gone horribly wrong, and it's up to them to prevent it from happening. As they follow the messages' cryptic instructions, Tane and Rebecca begin to suspect the worst - that the very survival of the human race may be at stake.", 2000, "./assets/images/the tomorrow code.jpg", true);


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
  //Table for all series data
  seriesTable: Series[] = [HellDivers, Legend, BZRK, YoungElites, EscapeFromFurnace, Gone, Monster, Quarantine, DarkestMinds, 
    ConspiracyChronicles, Divergent, Partials, Wretched, Variant, Enemy, Monument14
  ];
  //table for all book data
  booksTable: Book[] = [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, 
    l1, l2, l3, l4, b1, b2, b3, ye1, ye2, ye3, esc1, esc2, esc3, esc4, esc5, 
    g1, g2, g3, g4, g5, g6, mon1, mon2, mon3, q1, q2, q3, q4, dm1, dm2, dm3, dm4, dm5, 
    cc1, cc2, cc3, cc4, cc5, cc6, cc7, cc8, cc9, cc10, cc11, cc12, cc13, cc14, cc15,
    div1, div2, div3, div4, p1, p2, p3, w1, w2, w3, w4, v1, v2, e1, e2, e3, e4, e5, e6, e7, 
    m1, m2, m3, BrainJack, TomorrowCode
  ];
  //table for all author data
  authorTable: Author[] = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14];
  //table for all genre data
  genreTable: Genre[] = [genre1, genre2, genre3, genre4, genre5];
  //table for all publisher data
  publisherTable: Publisher[] = [pub1, pub2, pub3, pub4, pub5, pub6, pub7, pub8, pub9, pub10, pub11, pub12];
  //connection table holding book and author Ids
  bookAuthorTable: BookAuthor[] = [
    ba1, ba2, ba3, ba4, ba5, ba6, ba7, ba8, ba9, ba10, ba11, ba12, ba13, ba14, ba15, ba16, ba17, ba18, ba19, ba20,
    ba21, ba22, ba23, ba24, ba25, ba26, ba27, ba28, ba29, ba30, ba31, ba32, ba33, ba34, ba35, ba36, ba37, ba38, ba39, ba40,
    ba41, ba42, ba43, ba44, ba45, ba46, ba47, ba48, ba49, ba50, ba51, ba52, ba53, ba54, ba55, ba56, ba57, ba58, ba59, ba60,
    ba61, ba62, ba63, ba64, ba65, ba66, ba67, ba68, ba69, ba70, ba71, ba72, ba73, ba74, ba75, ba76, ba77, ba78, ba79, ba80,
    ba81, ba82, ba83, ba84
  ];
  //connection table holding all book and genre Ids
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
  //connection table holding all series and book Ids
  seriesBookTable: SeriesBook[] = [
    sb1, sb2, sb3, sb4, sb5, sb6, sb7, sb8, sb9, sb10, sb11, sb12, sb13, sb14, sb15, sb16, sb17, sb18, sb19, sb20,
    sb21, sb22, sb23, sb24, sb25, sb26, sb27, sb28, sb29, sb30, sb31, sb32, sb33, sb34, sb35, sb36, sb37, sb38, sb39, sb40,
    sb41, sb42, sb43, sb44, sb45, sb46, sb47, sb48, sb49, sb50, sb51, sb52, sb53, sb54, sb55, sb56, sb57, sb58, sb59, sb60,
    sb61, sb62, sb63, sb64, sb65, sb66, sb67, sb68, sb69, sb70, sb71, sb72, sb73, sb74, sb75, sb76, sb77, sb78, sb79, sb80,
    sb81, sb82
  ];

  //gets all series
  public getSeriesList() {
    return this.seriesTable; 
  }

  //gets all books
  public getBookList() {
    return this.booksTable;
  }

  //gets all authors
  public getAuthorsList() {
    return this.authorTable;
  }

  //gets all genres
  public getGenreList() {
    return this.genreTable;
  }

  //gets all publishers
  public getPublisherList() {
    return this.publisherTable;
  }

  //gets all stand alone books
  public getStandAloneBooks(): Book[] {
    let singleBooks: Book[] = [];
    for(let i = 0; i < this.booksTable.length; i++) {
      if(this.booksTable[i].StandAlone == true) {
        singleBooks.push(this.booksTable[i]);
      }
    }
    return singleBooks;
  }

  //gets books by book Id
  public getBooksById(bookIds: number[]): Book[] {
    let booksList: Book[] = [];
    for(let i = 0; i < bookIds.length; i++) {
      booksList.push(this.booksTable[bookIds[i] - 1]);
    }
    return booksList;
  }

  //get publisher by publisher Id
  public getPublisherById(publisherId: number): Publisher {
    for(let i = 0; i < this.publisherTable.length; i++) {
      if(this.publisherTable[i].PublisherId == publisherId) {
        return this.publisherTable[i];
      }
    }
    return this.publisherTable[0];
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

  //gets author of given series
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

  //gets all genres for a given series
  public getGenresBySeries(series: Series): Genre[] {
    let bookId: number = 0;
    let genres: Genre[] = [];
    for(let i = 0; i < this.seriesBookTable.length; i++) {
      if(series.SeriesId == this.seriesBookTable[i].SeriesId) {
        bookId = this.seriesBookTable[i].BookId;
        break;
      }
    }
    
    var genreId;
    for(let i = 0; i < this.bookGenreTable.length; i++) {
      if(bookId == this.bookGenreTable[i].BookId) {
        genreId = this.bookGenreTable[i].GenreId;
        genres.push(this.genreTable[genreId-1])
      }
    }
    return genres;
  }

  //gets all genres for given book
  public getGenresByBook(book: Book): Genre[] {
    let genres: Genre[] = [];
    var genreId;
    for(let i = 0; i < this.bookGenreTable.length; i++) {
      if(book.BookId == this.bookGenreTable[i].BookId) {
        genreId = this.bookGenreTable[i].GenreId;
        genres.push(this.genreTable[genreId-1])
      }
    }
    return genres;
  }

  //gets publisher of given series
  public getPublisherBySeries(series: Series): Publisher {
    let bookId: number = 0;
    let publisher: Publisher = this.publisherTable[0];
    for(let i = 0; i < this.seriesBookTable.length; i++) {
      if(series.SeriesId == this.seriesBookTable[i].SeriesId) {
        bookId = this.seriesBookTable[i].BookId;
        break;
      }
    }
    let publisherId = this.booksTable[bookId-1].PublisherId;
    publisher = this.publisherTable[publisherId-1];
    return publisher;
  }

  //gets all series by given author
  public getSeriesByAuthor(author: Author): Series[] {
    let bookIds: number[] = [];
    var currentBook;
    //gets book ids based on author
    for(let i = 0; i < this.bookAuthorTable.length; i++) {
      currentBook = this.booksTable[this.bookAuthorTable[i].BookId-1];
      if(author.AuthorId == this.bookAuthorTable[i].AuthorId && currentBook.StandAlone == false) {
        bookIds.push(this.bookAuthorTable[i].BookId);
      }
    }
    return this.getSeriesByBooks(bookIds);
  }

  //gets all series by given genre
  public getSeriesByGenre(genre: Genre): Series[] {
    let bookIds: number[] = [];
    
    //gets book ids based on genre
    for(let i = 0; i < this.bookGenreTable.length; i++) {
      var currentBook = this.bookGenreTable[i].BookId - 1;
      if(genre.GenreId == this.bookGenreTable[i].GenreId && this.booksTable[currentBook].StandAlone == false) {
        bookIds.push(this.bookGenreTable[i].BookId);
      }
    }
    return this.getSeriesByBooks(bookIds);
  }

  //gets all series by given publishers
  public getSeriesByPublisher(publisher: Publisher): Series[] {
    let bookIds: number[] = [];

    //gets bookIds based on publisher
    for(let i = 0; i < this.booksTable.length; i++) {
      if(publisher.PublisherId == this.booksTable[i].PublisherId && this.booksTable[i].StandAlone == false) {
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

  //gets all books in given series
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

  //gets all book by author
  public getBooksByAuthor(author: Author): Book[] {
    let authorBooks: Book[] = [];
    var currentBookId; 
    for(let i = 0; i < this.bookAuthorTable.length; i++) {
      currentBookId = this.bookAuthorTable[i].BookId;
      if(author.AuthorId == this.bookAuthorTable[i].AuthorId) {
        authorBooks.push(this.booksTable[currentBookId - 1]);
      }
    }
    return authorBooks;
  }

  public getBooksByGenre(genre: Genre): Book[] {
    let genreBooks: Book[] = [];
    for(let i = 0; i < this.bookGenreTable.length; i++) {
      if(genre.GenreId == this.bookGenreTable[i].GenreId) {
        var currentBookId = this.bookGenreTable[i].BookId;
        genreBooks.push(this.booksTable[currentBookId - 1]);
      }
    }
    return genreBooks;
  }

  public getBooksByPublisher(publisher: Publisher): Book[] {
    let pubBooks: Book[] = [];
    for(let i = 0; i < this.booksTable.length; i++) {
      if(publisher.PublisherId == this.booksTable[i].PublisherId) {
        var currentBookId = this.booksTable[i].BookId;
        pubBooks.push(this.booksTable[currentBookId - 1]);
      }
    }
    return pubBooks;
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