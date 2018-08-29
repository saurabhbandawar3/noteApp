console.log('Starting App..');
const notes = require('./notes.js')
const fs = require('fs');
const os = require('os');

// var user = os.userInfo();
// //console.log(user);

// fs.appendFile('notes.txt',`Hello ${user.username}! You are ${notes.age}`, function(err){
//     if(err){
//         console.log('Unable to write to file');
//     }
// });

var res = notes.add(3,4);
console.log(res);


