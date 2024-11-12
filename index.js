import express from 'express';
import pg from 'pg';

const app = express();
const port = 3000;
const db = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'XXXX',
    password: 'XXXX',
    port: 5432
});
let books = [];

app.use(express.static('public'));
db.connect();
db.query('select * from books',(err,res)=>{
    if(err){
        console.log(err);
    }
    else{
        books = res.rows;
    }
});

app.get('/',(req,res)=>{
    console.log(books);
    res.render('index.ejs',{
        Books: books
    });
});

app.get('/title',async (req,res)=>{
    db.query('select * from books order by title desc',(err,res)=>{
        if(err){
            console.log(err);
        }
        else{
            books = res.rows;
        }
    });
    res.render('index.ejs',{
        Books: books
    });
});

app.get('/rating',async (req,res)=>{
    db.query('select * from books order by rating desc;', (err, res) => {
        if (err) {
            console.log(err);
        }
        else {
            books = res.rows;
        }
    });
    console.log(books);
    res.render('index.ejs',{
        Books: books
    });
});

app.get('/newest',async (req,res)=>{
    db.query('select * from books order by read_date;', (err, res) => {
        if (err) {
            console.log(err);
        }
        else {
            books = res.rows;
        }
    });
    console.log(books);
    res.render('index.ejs',{
        Books: books
    });
});

app.get('/faq',(req,res)=>{
    res.render('faq.ejs');
});

app.get('/contact',(req,res)=>{
    res.render('contact.ejs');
});

app.listen(port,(req,res)=>{
    console.log(`server activated on port ${port}`);
});