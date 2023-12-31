import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let randomname = null;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { randomname: randomname });
});

app.post("/submit", (req, res) => {
  randomname = names[Math.floor(Math.random() * names.length)];
  res.redirect("/");
});

app.listen(port, () => {
   console.log(`Listening on port ${port}`);
});

const names = [
  "Anna",
  "Anko",
  "Akaashi",
  "Alphonse",
  "Annie",
  "Akashi",
  "Akane",
  "Arlong",
  "Archer",
  "Asuna",
  "Adam",
  "Ashido",
  "Alphonse Elric",
  "Akari",
  "Asuka",
  "Akeno",
  "Anos",
  "Astro",
  "Avdol",
  "Angel",
  "Ally",
  "Arthur",
  "Akaza",
  "Arnold",
  "Beerus",
  "Bisky",
  "Bella",
  "Baku",
  "Boku",
  "Baloo",
  "Blake",
  "Bartolomeo",
  "Batman",
  "Beezlebub",
  "Benimaru",
  "Bulbasaur",
  "Baka",
  "Byakuya",
  "Blade",
  "Boros",
  "Bobby",
  "Bellamy",
  "Betty Boop",
  "Berthold",
  "Bucciarati",
  "Choji",
  "Choso",
  "Cassie",
  "Catherine",
  "Cinderella",
  "Chrollo",
  "Claire",
  "Chad",
  "Chisaki",
  "Chun Li",
  "Candy",
  "Chan",
  "Corazon",
  "Charlie Brown",
  "Cynthia",
  "Deez Nuts",
  "Douma",
  "Drago",
  "Dabi",
  "Dende",
  "Doma",
  "Daiki",
  "Donald",
  "Dazai",
  "Devin",
  "Deidara",
  "Ditto",
  "Dragon Ball Z",
  "Dr Stone",
  "Death Note",
  "Evee",
  "Elaine",
  "Edamura",
  "Elsa",
  "Ernie",
  "Entei",
  "Eren",
  "Emi",
  "Eugene",
  "Evan",
  "Emily",
  "Ego",
  "Escanor",
  "Edward Elric",
  "Eraserhead",
  "Fang",
  "Forger",
  "Finn",
  "Fly",
  "F-zero",
  "Franklin",
  "Fumiko",
  "Ferb",
  "Fasha",
  "Fred Flinstone",
  "Fushi",
  "Fairy",
  "Gojo Satoru",
  "Gojo",
  "Gavin",
  "Godzilla",
  "Gian",
  "Gaku",
  "Ginko",
  "Gai",
  "Gigi",
  "Genji",
  "Genos",
  "Ganyu",
  "Giorono",
  "Giorno",
  "Grogu",
  "Gogeta",
  "Goblin",
  "Gen",
  "Ghoul",
  "Grant",
  "Giyu",
  "Hinako",
  "Hero",
  "Hairo",
  "Haunter",
  "Hiro",
  "Hayato",
  "Hilda",
  "Hikaru",
  "Haru",
  "Himawari",
  "Hisoka",
  "Hitachi",
  "Howl",
  "Haruki",
  "Hawks",
  "Hashira",
  "Harley",
  "Hector",
  "Hugo",
  "Hanako",
  "Harumi",
  "Inoske",
  "Ingrid",
  "Isaka",
  "Isuke",
  "Issei",
  "Ishimaru",
  "Ichigo",
  "Isla",
  "Itto",
  "Ira",
  "Ishtar",
  "Iko",
  "Izzy",
  "Irene",
  "Ishigami",
  "Indra",
  "Indi",
  "Iro",
  "Inosuke",
  "Iceman",
  "Isabella",
  "Jenny",
  "Julian",
  "Jet",
  "Jackson",
  "Jotoro",
  "Jellal",
  "Jasmin",
  "Jigglypuff",
  "Johnny",
  "Julia",
  "Jane",
  "Jo Jo",
  "Jinx",
  "Jam",
  "Jan",
  "Jackie Chan",
  "Jiren",
  "Junpei",
  "Juliet",
  "John",
  "Jolteon",
  "Kong",
  "Kiko",
  "Kawaki",
  "Kaiba",
  "Kenny",
  "Kazuha",
  "Kenshiro",
  "Kakarot",
  "Kaori",
  "Kermit",
  "Krillin",
  "Krilin",
  "Kabuto",
  "Kaneki",
  "Kyoko",
  "Kaneki Ken",
  "Kora",
  "Karma",
  "Lauren",
  "Lucoa",
  "Lemillion",
  "Lana",
  "Levi",
  "Lydia",
  "Light",
  "Liam",
  "Lacey",
  "Lloyd",
  "Leonidas",
  "Laito",
  "Ligma",
  "Lust",
  "Lucy Heartfilia",
  "Labaa",
  "Legosi",
  "Makima",
  "Mako",
  "Magikarp",
  "Monkey",
  "Mineta",
  "Mark",
  "Midoriya",
  "Muzan",
  "Magi",
  "Marry",
  "Monokuma",
  "Maki",
  "Monika",
  "Maria",
  "Maya",
  "Nadesico",
  "Nori",
  "Nano",
  "Nendo",
  "Nobara",
  "Naofumi",
  "Nagasaki",
  "Nile",
  "Natsu",
  "Noddy",
  "Nora",
  "Narancia",
  "Nikita",
  "Nobita",
  "Nolan",
  "Oraka",
  "Ota",
  "Orange",
  "Oikawa",
  "Omi",
  "Oro",
  "Ojiro",
  "Obito",
  "Okabe",
  "Ochako",
  "Oliva",
  "Osamu",
  "Orihime",
  "Oishi",
  "Overlord",
  "Paimon",
  "Pablo",
  "Petra",
  "Penguin",
  "Pico",
  "Piplup",
  "Pinky",
  "Pony",
  "Purple",
  "Pacman",
  "Papa",
  "Patricia",
  "Pen",
  "Pride",
  "Pesci",
  "Pumba",
  "Pearl",
  "Pip",
  "Queen Elizabeth",
  "Quincy",
  "Quin",
  "Rimuru",
  "Rein",
  "Ryuji",
  "Ralph",
  "Remi",
  "Rocky",
  "Riuk",
  "Rock",
  "Rentaro",
  "Rio",
  "Ren",
  "Riley",
  "Ryu",
  "Ran",
  "Raya",
  "Ryuuk",
  "Rika",
  "Rita",
  "Sasha Braus",
  "Shinobu",
  "Sasuke",
  "Saiki K",
  "Snoopy",
  "Soma",
  "Silica",
  "Sokka",
  "Shikamaru",
  "Sensei",
  "Spike",
  "Shinra",
  "Serena",
  "Sengoku",
  "San",
  "Shrek",
  "Subaru",
  "Snorlax",
  "Tomioka Giyu",
  "Tendo",
  "Tobi",
  "Tanjiro",
  "Trunks",
  "Tobio",
  "Tachi",
  "Tigger",
  "Tohru",
  "Tsunade",
  "Tamahome",
  "Tendou",
  "Ushi",
  "Uzumaki",
  "Uzui",
  "Ultra",
  "Uranus",
  "Uub",
  "Uesugi",
  "Uzuki",
  "Ultraman",
  "Urahara",
  "Uzamaki",
  "Uzui Tengen",
  "Veldora",
  "Vick",
  "Velvet",
  "Vash",
  "Victor",
  "Vulture",
  "Vageta",
  "Volkov",
  "Vaclav",
  "Venus",
  "Videl",
  "Viagra",
  "Veronica",
  "Viola",
  "Vaporeon",
  "Watari",
  "Wiz",
  "Will",
  "Wakatoshi",
  "Wailord",
  "Yellow",
  "Yoriichi",
  "Yuri",
  "Yoshi",
  "Yong",
  "Yelena",
  "Yaoyorozu",
  "Yotsuba",
  "Yamato",
  "Zack",
  "Zane",
  "Zoe",
  "Zelda",
  "Zara",
  "Zuko"
];

