const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    body: {
        required: true,
        type: String
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;