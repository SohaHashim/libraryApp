const express = require('express');
const app = new express();

const nav = [
    {
        link:'./books',name: 'books'
    },
    {
        link:'./authors',name:'authors'
    },
    {
        link:'./addBooks',name: 'add books'
    },
    {
        link:'./signup',name:'sign up'
    },
    {
        link:'./login',name:'login'
    }
];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const signupRouter = require('./src/routes/signupRoute')(nav);
const loginRouter = require('./src/routes/loginRoute')(nav);
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
});


app.listen(5000);