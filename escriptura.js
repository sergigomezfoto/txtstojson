// convertir a module

import fs from "fs";

// Ahora, vamos a leer los archivos de texto y almacenar su contenido en variables
let person = fs.readFileSync('subjecte.txt', 'utf-8').split('\n');
let action = fs.readFileSync('accions.txt', 'utf-8').split('\n');
let place = fs.readFileSync('llocs.txt', 'utf-8').split('\n');

// Ahora, vamos a crear el objeto JSON que quieres.
// Primero, se crea un objeto vacío.
let object = {};

// Luego, se asignan las palabras de cada archivo al objeto.
object.person = person;
object.action = action;
object.place = place;

// Se convierte el objeto a una cadena JSON.
let jsonString = JSON.stringify(object, null, 2);

// Ahora, vamos a escribir el JSON en un archivo.
fs.writeFileSync('data.json', jsonString, 'utf-8');