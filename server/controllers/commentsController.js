const Comment = require('../models/comment');

module.exports.list = (req, res) => {
    Comment.find({}, (err, comments) => {
        if (err) res.send(err);
        res.json(comments);
    });   
}

module.exports.show = (req, res) => {
    Comment.findById(req.params.id, (err, comment) => {
        if (err) res.send(err);
        res.json(comment);
    });
}

module.exports.create = (req, res) => {
    const newComment = Comment(req.body);
    newComment.save();
    res.json(newComment);
}