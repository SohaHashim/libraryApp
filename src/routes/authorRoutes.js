const express = require('express');
const authorsRouter = express.Router();
function authorRoute(nav){
    var authors = [
        {
            title: 'tom n jerry',
            author: 'Joseph Barbera',
            genre:'cartoon',
            img: 'tom.jpg'
        },
        {
            title: '40 rules of love',
            author: 'Alif Shafak',
            genre:'fantasy drama',
            img: 'alif.jpg'
        },
        {
            title: 'The Alchemist',
            author: 'Poulo coello',
            genre:'drama',
            img: 'alchemist.jpg'
        }
    ];
    
    authorsRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
            title:'Library',
            authors
        });
    });
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render("author",{
            nav,
            title:'Library',
            author: authors[id]
        });
    });
            return authorsRouter;
    }
    module.exports = authorRoute;