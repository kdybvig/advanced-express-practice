const comments = require("./comments");
const express = require("express");
const commentsRouter = express.Router();
let commentId = comments.length;

const bodyParser = require("body-parser")
commentsRouter.use(bodyParser.json());

commentsRouter.get('/', (req, res) => {
    res.json(comments);
})

commentsRouter.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const idIdx = comments.findIndex(comment => comment._id === id);
    if(idIdx < 0) res.status(404).send('Comment not found');
    res.json(comments[idIdx]);
})

commentsRouter.post('/', (req, res) => {
    commentId ++;
    const newComment = Object.assign(req.body, {_id: commentId});
    if(!newComment) res.status(404).send('No comment.');
    comments.push(newComment)
    res.json(comments[comments.length-1]);
})



module.exports = commentsRouter;