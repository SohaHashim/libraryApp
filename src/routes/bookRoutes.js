const express = require('express');
const booksRouter = express.Router();
const BookData = require('../model/bookData');
function router(nav){
// var books = [
//     {
//         title: 'tom n jerry',
//         author: 'Joseph Barbera',
//         genre:'cartoon',
//         img: 'tom.jpg'
//     },
//     {
//         title: '40 rules of love',
//         author: 'Alif Shafak',
//         genre:'cartoon',
//         img: 'alif.jpg'
//     },
//     {
//         title: 'The Alchemist',
//         author: 'Paulo Coelho',
//         genre:'drama',
//         img: 'alchemist.jpg'
//     }
// ];

booksRouter.get('/',function(req,res){
    BookData.find() //works as db.find() to get all book details and stored in a variable books
    .then(function(books){
        res.render("books",{
            nav,
            title:'Library',
            books
        });
    })   
});
booksRouter.get('/:id',function(req,res){
    const id = req.params.id;
    BookData.findOne({_id:id})
    .then(function(book){
        res.render("book",{
            nav,
            title:'Library',
            book
        });
    });   
});
booksRouter.get('/delete/:id',function(req,res){
    const id = req.params.id;
    var del = BookData.findByIdAndDelete(id);
    del.exec(function(err,data){
        if(err) throw err;
        res.redirect('/books');
    })
    
});
booksRouter.get('/edit/:id',function(req,res){
    const id = req.params.id;
    var edit = BookData.findById(id);
    edit.exec(function(err,data){
        if(err) throw err;
        res.render("edit",{
            nav,
            title:'Library',
            records: data
            // books
        });
    })   
});

booksRouter.post('/update',function(req,res){
    //res.send("update page");

    var item = {
        title : req.body.title,
        author : req.body.author,
        genre : req.body.genre,
        image : req.body.image
    };
    var update = BookData.findByIdAndUpdate(req.body.id,item);
    update.exec(function(err,data){
        if(err) throw err;
        res.redirect('/books');
    });   
});


        return booksRouter;
}
module.exports = router;