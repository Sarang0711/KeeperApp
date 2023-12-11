const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
        id: String,
        title: String,
        content: String,
    }, 
    {
        timestamps: true, 

    }
);

const Note = mongoose.model("Note", noteSchema)
module.exports = Note;