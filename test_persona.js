//importa el fs
import fs from "fs";

let arr = [
  "Un dragón",
  "Una bruja",
  "Un mago",
  "Un brujo",
  "Un hada",
  "Un vampiro",
  "Un ninja",
  "Un pirata",
  "Un fantasma",
  "Un licántropo",
  "Un dios",
  "Una diosa",
  "Un titán",
  "Una titana",
  "Un gigante",
  "Un esbirro",
  "Un demonio",
  "Un diablo",
  "Un fénix",
  "Un ángel",
  "Una maldición",
  "Un hechizo",
  "Un conjuro",
  "Un encantamiento",
  "Un espectro",
  "Un gólem",
  "Un súcubo",
  "Un elfo",
  "Un enano",
  "Un ogro",
  "Una bestia",
  "Una serpiente",
  "Un kraken",
  "Un grifo",
  "Un esqueleto",
  "Una momia",
  "Un gremlin",
  "Un yeti",
  "Una gárgola",
  "Una quimera",
  "Un gigoló",
  "Una ninfa",
  "Un dopplegänger",
  "Un corsario",
  "Un trol",
  "Un cíclope",
  "Un bandido",
  "Un villano",
  "Un contrabandista",
  "Un canalla",
  "Un sádico",
  "Una psicópata",
  "Un asesino",
  "Un terrorista",
  "Un pandillero",
  "Un mafioso",
  "Un delincuente",
  "Un estafador",
  "Un embaucador",
  "Un infiltrado",
  "Un traidor",
  "Un atracador",
  "Un desalmado",
  "Un timador",
  "Una arpía",
  "Un asaltante",
  "Un maleante",
  "Un mercenario",
  "Un criminal",
  "Un forajido",
  "Un dementor",
  "Un gangster",
  "Un bribón",
  "Un matón",
  "Un chantajista",
  "Un emperador",
  "Un rebelde",
  "Un proscrito",
  "Un mercader",
  "Un avieso",
  "Una hiena",
  "Una cruel",
  "Un corsario",
  "Un sicario",
  "Un hooligan",
  "Un pícaro",
  "Un taimado",
  "Un bellaco",
  "Un zorro",
  "Un farsante",
  "Un timador",
  "Un bellaco",
  "Un zorro",
  "Un gánster",
  "Un cabecilla",
  "Un buhonero",
  "Un hechicero",
  "Un embustero",
  "Un bribón",
  "Un timador",
  "Un estafador",
  "Un rufián",
  "Un pícaro",
  "Un fullero",
  "Un timador",
  "Un gamberro",
  "Un bandido",
  "Un desalmado",
  "Un bellaco",
  "Un cínico",
  "Un pandillero",
  "Una arpía",
  "Un malandrín",
  "Un farsante",
  "Un embustero",
  "Un picaruelo",
  "Un bellaco",
  "Un pícaro",
  "Un impostor",
  "Un taimado",
  "Un timador",
  "Un bribón",
  "Un bellaco",
  "Un pillo",
  "Un embustero",
  "Un mafioso",
  "Un desalmado",
  "Un forajido",
  "Un desperado",
  "Un gangster",
  "Un farsante",
  "Un estafador",
  "Un canalla",
  "Un vándalo",
  "Un tramposo",
  "Un bellaco",
  "Un aventurero",
  "Un villano",
  "Un chantajista",
  "Un tirano",
  "Un unicornio",
  "Una unicornia",
  "Un gato",
  "Una gata",
  "Un perro",
  "Una perra",
  "Un pingüino",
  "Una pingüina",
  "Un astronauta",
  "Una astronauta",
  "Un dinosaurio",
  "Una dinosauria",
  "Un robot",
  "Una robot",
  "Un fantasma",
  "Una fantasma",
  "Un alienígena",
  "Una alienígena",
  "Un vampiro",
  "Una vampira",
  "Un viejo",
  "Una vieja",
  "Un primo",
  "Una prima",
  "Un negacionista",
  "Una negacionista",
  "Un facha",
  "Una facha",
  "Un cantante",
  "Una cantante",
  "Un policía",
  "Una policía",
  "Un bombero",
  "Una bombera",
  "Un médico",
  "Una médica",
  "Un escritor",
  "Una escritora",
  "Un cocinero",
  "Una cocinera",
  "Un maestro",
  "Una maestra",
  "Un periodista",
  "Una periodista",
  "Un futbolista",
  "Una futbolista",
  "Un actor",
  "Una actriz",
  "Un artista",
  "Una artista",
  "Un escultor",
  "Una escultora",
  "Un pintor",
  "Una pintora",
  "Un músico",
  "Una música",
  "Un ingeniero",
  "Una ingeniera",
  "Un programador",
  "Una programadora",
  "Un filósofo",
  "Una filósofa",
  "Un psicólogo",
  "Una psicóloga",
  "Un director",
  "Una directora",
  "Un científico",
  "Una científica",
  "Un jugador",
  "Una jugadora",
  "Un detective",
  "Una detective",
  "Un astrólogo",
  "Una astróloga",
  "Un matemático",
  "Una matemática",
  "Un diseñador",
  "Una diseñadora",
  "Un economista",
  "Una economista",
  "Un político",
  "Una política",
  "Un soldado",
  "Una soldado",
  "Un marinero",
  "Una marinera",
  "Un cazador",
  "Una cazadora",
  "Un capitán",
  "Una capitana",
  "Un espía",
  "Una espía",
  "Un nadador",
  "Una nadadora",
  "Un jefe",
  "Una jefa",
  "Un pirata",
  "Una pirata",
  "Un brujo",
  "Una bruja",
  "Un chamán",
  "Una chamán",
  "Un médium",
  "Una médium",
  "Un vagabundo",
  "Una vagabunda",
  "Un rebelde",
  "Una rebelde",
  "Un espíritu",
  "Una espíritu",
  "Un vengador",
  "Una vengadora",
  "Un luchador",
  "Una luchadora",
  "Un gigante",
  "Una gigante",
  "Un héroe",
  "Una heroína",
  "Un deportista",
  "Una deportista",
  "Un delincuente",
  "Una delincuente",
  "Un aventurero",
  "Una aventurera",
  "Un mago",
  "Una maga",
  "Un príncipe",
  "Una princesa",
  "Un rey",
  "Una reina",
  "Un emperador",
  "Una emperatriz",
  "Un presidente",
  "Una presidenta",
  "Un guardián",
  "Una guardiana",
  "Un sireno",
  "Una sirena",
  "Un esclavo",
  "Una esclava",
  "Un hacker",
  "Una hacker",
  "Un payaso",
  "Una payasa",
  "Un cazador",
  "Una cazadora",
  "Mickey Mouse",
  "Bugs Bunny",
  "Scooby-Doo",
  "Superman",
  "Batman",
  "Spider-Man",
  "Bob Esponja",
  "Homero Simpson",
  "Bart Simpson",
  "Lisa Simpson",
  "Marge Simpson",
  "Donald Duck",
  "Goofy",
  "Popeye",
  "Tom y Jerry",
  "Pato Lucas",
  "Dora la Exploradora",
  "Sonic the Hedgehog",
  "Winnie the Pooh",
  "Dexter",
  "Piolín",
  "Pikachu",
  "Snoopy",
  "Bobby Hill",
  "Johnny Bravo",
  "Sailor Moon",
  "Scooby-Doo",
  "Astro Boy",
  "Bender",
  "Yogui Bear",
  "Stewie Griffin",
  "Peter Griffin",
  "Bart Simpson",
  "Homero Simpson",
  "Charlie Brown",
  "Scooby-Doo",
  "Doraemon",
  "Los Picapiedra",
  "Wile E. Coyote",
  "Correcaminos",
  "Gato Silvestre",
  "George Jetson",
  "Dora la Exploradora",
  "Kim Possible",
  "Tintín",
  "Tío Gilito",
  "Hobbes",
  "Calvin",
  "Capitán América",
  "Shrek",
  "Bob Esponja",
  "Dora la Exploradora",
  "Hello Kitty",
  "Beyblade",
  "Simba",
  "Las Chicas Superpoderosas",
  "Optimus Prime",
  "Aladdín",
  "Mulán",
  "El Gato con Botas",
  "Sailor Moon",
  "Las Tortugas Ninja",
  "Dexter",
  "Las Chicas Superpoderosas",
  "Scooby-Doo",
  "Pluto",
  "Peppa Pig",
  "Piolín",
  "El Grinch",
  "Pikachu",
  "Hombre Araña",
  "Goofy",
  "Elmo",
  "Garfield",
  "Porky",
  "Silvestre",
  "Bambi",
  "Finn el Humano",
  "Jake el Perro",
  "Rugrats",
  "Hércules",
  "Elsa",
  "Tarzán",
  "Dumbo",
  "Jerry",
  "La Sirenita",
  "El Rey León",
  "Buzz Lightyear",
  "Woody",
  "Simba",
  "Timón",
  "Pumba",
  "Wall-E",
  "Rana René",
  "Raphael",
  "Donatello",
  "Michelangelo",
  "Leonardo",
  "Bella",
  "Mickey Mouse",
  "Minnie Mouse",
  "Donald Duck",
  "Chip y Dale",
  "Stitch",
  "Frodo Bolsón",
  "Hobbits",
  "Smaug",
  "Sherlock Holmes",
  "Piolín",
  "Capitán Jack Sparrow",
  "Shaggy",
  "La Malvada Bruja del Oeste",
  "Woody",
  "Buzz Lightyear",
  "Elsa",
  "Mufasa",
  "Cenicienta",
  "Winnie the Pooh",
  "Darth Vader",
  "Luke Skywalker",
  "Hércules",
  "Pocahontas",
  "Mulán",
  "Harry Potter",
  "Ron Weasley",
  "Hermione Granger",
  "Bob Esponja",
  "Patricio Estrella",
  "Arenita Mejillas",
  "Calamardo Tentáculos",
  "Don Cangrejo",
  "Totoro",
  "Ash Ketchum",
  "Misty",
  "Brock",
  "Pikachu",
  "Blancanieves",
  "Cenicienta",
  "Ariel",
  "Bella",
  "Jasmin",
  "Pocahontas",
  "Mulán",
  "Tiana",
  "Rapunzel",
  "Merida",
  "Elsa",
  "Anna",
  "Moana",
  "Sonic",
  "Mario",
  "Luigi",
  "Princesa Peach",
  "Link",
  "Donkey Kong",
  "Yoshi",
  "Pikachu",
  "Jigglypuff",
  "Charizard",
  "Meowth",
  "Goku",
  "Vegeta",
  "Naruto Uzumaki",
  "Sakura Haruno",
  "Monkey D. Luffy",
  "Natsu Dragneel",
  "Edward Elric",
  "Monkey D. Luffy",
  "Natsu Dragneel",
  "Edward Elric",
  "Gon Freecss",
  "Ichigo Kurosaki",
  "Inuyasha",
  "Light Yagami",
  "Naruto Uzumaki",
  "Monkey D. Luffy",
  "Goku",
  "Ash Ketchum",
  "Bob Esponja",
  "Dora la Exploradora",
  "Mickey Mouse",
  "Bugs Bunny",
  "Superman",
  "Batman",
  "Spider-Man",
  "Sonic the Hedgehog",
  "Winnie the Pooh",
  "Dexter",
  "Piolín",
  "Pikachu",
  "Snoopy",
  "Johnny Bravo",
  "Scooby-Doo",
  "Astro Boy",
  "Yogui Bear",
  "Stewie Griffin",
  "Charlie Brown",
  "Doraemon",
  "Los Picapiedra",
  "George Jetson",
  "Kim Possible",
  "Tintín",
  "Tío Gilito",
  "Hobbes",
  "Capitán América",
  "Shrek",
  "Hello Kitty",
  "Beyblade",
  "Simba",
  "Las Chicas Superpoderosas",
  "Optimus Prime",
  "Aladdín",
  "El Gato con Botas",
  "Sailor Moon",
  "Las Tortugas Ninja",
  "El Grinch",
  "Spider-Man",
  "Elmo",
  "Garfield",
  "Bambi",
  "Finn el Humano",
  "Jake el Perro",
  "Rugrats",
  "Hércules",
  "Elsa",
  "Tarzán",
  "Dumbo",
  "La Sirenita",
  "El Rey León",
  "Buzz Lightyear",
  "Woody",
  "Wall-E",
  "Rana René",
  "Raphael",
  "Donatello",
  "Michelangelo",
  "Leonardo",
  "Bella",
  "Chip y Dale",
  "Stitch",
  "Frodo Bolsón",
  "Smaug",
  "Sherlock Holmes",
  "Capitán Jack Sparrow",
  "Shaggy",
  "La Malvada Bruja del Oeste",
  "Mufasa",
  "Darth Vader",
  "Luke Skywalker",
  "Harry Potter",
  "Ron Weasley",
  "un deshollinador",
  "una deshollinadora",
  "un alquimista",
  "una alquimista",
  "un domador de leones",
  "una domadora de leones",
  "un cervecero maestro",
  "una cervecera maestra",
  "un buscador de tesoros",
  "una buscadora de tesoros",
  "un coleccionista de insectos",
  "una coleccionista de insectos",
  "un criador de serpientes",
  "una criadora de serpientes",
  "un detective de lo paranormal",
  "una detective de lo paranormal",
  "un escultor de hielo",
  "una escultora de hielo",
  "un espeleólogo aventurero",
  "una espeleóloga aventurera",
  "un ilusionista mago",
  "una ilusionista maga",
  "un rastreador de tormentas",
  "una rastreadora de tormentas",
  "un artista de tatuajes",
  "una artista de tatuajes",
  "un colector de sellos raros",
  "una colectora de sellos raros",
  "un criador de gusanos de seda",
  "una criadora de gusanos de seda",
  "un escritor de epitafios",
  "una escritora de epitafios",
  "un fabricante de pelucas",
  "una fabricante de pelucas",
  "un guía de turismo paranormal",
  "una guía de turismo paranormal",
  "un luthier artesano",
  "una luthier artesana",
  "un mago ilusionista",
  "una maga ilusionista",
  "un maestro de espadas",
  "una maestra de espadas",
  "un músico ambulante",
  "una música ambulante",
  "un niñero de dragones",
  "una niñera de dragones",
  "un recolector de perlas",
  "una recolectora de perlas",
  "un tamer de fieras",
  "una tamer de fieras",
  "un trabajador de cueros",
  "una trabajadora de cueros",
  "un vendedor de antigüedades",
  "una vendedora de antigüedades",
  "un zapatero de elfos",
  "una zapatera de elfos",
  "un artista de fuego",
  "una artista de fuego",
  "un fabricante de muñecas de porcelana",
  "una fabricante de muñecas de porcelana",
  "un recolector de meteoritos",
  "una recolectora de meteoritos",
  "un constructor de laberintos",
  "una constructora de laberintos",
  "un recolector de orquídeas raras",
  "una recolectora de orquídeas raras",
  "un arquitecto de casas en árboles",
  "una arquitecta de casas en árboles",
  "un soplador de vidrio",
  "una sopladora de vidrio",
  "un cultivador de trufas",
  "una cultivadora de trufas",
  "un decorador de calabazas",
  "una decoradora de calabazas",
  "un delineador de laberintos",
  "una delineadora de laberintos",
  "un creador de jardines zen",
  "una creadora de jardines zen",
  "un maestro de ceremonias del té",
  "una maestra de ceremonias del té",
  "un criador de mariposas exóticas",
  "una criadora de mariposas exóticas",
  "un inventor de instrumentos musicales",
  "una inventora de instrumentos musicales",
  "un coleccionista de antigüedades egipcias",
  "una coleccionista de antigüedades egipcias",
  "un entrenador de perros de terapia",
  "una entrenadora de perros de terapia",
  "un fabricante de dulces artesanales",
  "una fabricante de dulces artesanales",
  "un creador de esculturas de arena",
  "una creadora de esculturas de arena",
  "un tallador de figuras en madera",
  "una talladora de figuras en madera",
  "un reparador de juguetes antiguos",
  "una reparadora de juguetes antiguos",
  "un astrónomo aficionado",
  "una astrónoma aficionada",
  "un constructor de globos aerostáticos",
  "una constructora de globos aerostáticos",
  "un coleccionista de fósiles",
  "una coleccionista de fósiles",
  "un productor de vino",
  "una productora de vino",
  "un maestro en acrobacias",
  "una maestra en acrobacias",
  "un fabricante de máscaras venecianas",
  "una fabricante de máscaras venecianas",
  "un creador de esculturas en mantequilla",
  "una creadora de esculturas en mantequilla",
  "un especialista en efectos especiales",
  "una especialista en efectos especiales",
];

const palabrasUnicas = [...new Set(arr)];

fs.writeFileSync("subjecte.txt", palabrasUnicas.join("\n"));
