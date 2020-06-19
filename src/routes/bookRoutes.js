const express = require('express');
const booksRouter = express.Router();
function router(nav){
var books = [
    {
        title: 'tom n jerry',
        author: 'Joseph Barbera',
        genre:'cartoon',
        img: 'tom.jpg'
    },
    {
        title: '40 rules of love',
        author: 'Alif Shafak',
        genre:'cartoon',
        img: 'alif.jpg'
    },
    {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        genre:'drama',
        img: 'alchemist.jpg'
    }
];

booksRouter.get('/',function(req,res){
    res.render("books",{
        nav,
        title:'Library',
        books
    });
});
booksRouter.get('/:id',function(req,res){
    const id = req.params.id;
    res.render("book",{
        nav,
        title:'Library',
        book: books[id]
    });
});
        return booksRouter;
}
module.exports = router;