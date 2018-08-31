var obj = '{ "Name":"Saurabh", "Age":26}';

//var stringObj= JSON.stringify(obj);
//console.log(typeof(stringObj));
//console.log(stringObj);
// var person = JSON.parse(obj);
// console.log(person);

const fs = require('fs');

var orignalNote = { 
    title:'Some Title',
    body:'Some Body'
};
var orignalNoteString =JSON.stringify(orignalNote);
fs.writeFileSync('notes.json',orignalNoteString);

var noteString = fs.readFileSync('notes.json');

var note= JSON.parse(noteString);
console.log(note);