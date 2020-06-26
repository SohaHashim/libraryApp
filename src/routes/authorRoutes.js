const express = require('express');
const authorsRouter = express.Router();
const BookData = require('../model/bookData');
function authorRoute(nav){
    // var authors = [
    //     {
    //         title: 'tom n jerry',
    //         author: 'Joseph Barbera',
    //         genre:'cartoon',
    //         img: 'tom.jpg'
    //     },
    //     {
    //         title: '40 rules of love',
    //         author: 'Alif Shafak',
    //         genre:'fantasy drama',
    //         img: 'alif.jpg'
    //     },
    //     {
    //         title: 'The Alchemist',
    //         author: 'Poulo coello',
    //         genre:'drama',
    //         img: 'alchemist.jpg'
    //     }
    // ];
    
    authorsRouter.get('/',function(req,res){
        BookData.find()
        .then(function(authors){
            res.render("authors",{
                nav,
                title:'Library',
                authors
            });
        });       
    });

    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id;
        BookData.findOne({_id:id})
        .then(function(author){
            res.render("author",{
                nav,
                title:'Library',
                author
            });
        })
       
    });
    authorsRouter.get('/delete/:id',function(req,res){
        const id = req.params.id;
        var del = BookData.findByIdAndDelete(id);
        del.exec(function(err,data){
            if(err) throw err;
            res.redirect('/authors');
        })
        
    });
    authorsRouter.get('/edit/:id',function(req,res){
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
    
    authorsRouter.post('/update',function(req,res){
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
            res.redirect('/authors');
        });   
    });
    
  
            return authorsRouter;
    }
    module.exports = authorRoute;