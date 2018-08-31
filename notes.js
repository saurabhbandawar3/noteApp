console.log('Starting notes.js...');


var addNote = (title,body) =>{
    console.log("Adding Note", title, body);
};

var getAll = ()=>{
    console.log('Getting all notes');
}

var getNote = (title)=>{
    console.log('Reading note for ',title);
}

var deleteNote = (title) => {
    console.log('Delete note for ', title);
}


module.exports = {
    addNote,
    getAll,
    getNote,
    deleteNote
};