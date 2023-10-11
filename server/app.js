const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});


const port=process.env.PORT;

require('./db/conn');
require('./userschema/userschema');
app.use(express.json());
app.use(require('./router/auth'));


app.get('/',(req,res)=>{
    res.send('Welcome to home page in app');
});

// app.get('/about',(req,res)=>{
//     res.send('About page');
// });

app.get('/contact',(req,res)=>{
    res.send('contact page');
});


app.get('/signin',(req,res)=>{
    res.send('Login');
});

app.get('/signup',(req,res)=>{
    res.send('register');
});

app.listen(port,()=>{
    console.log(`server listening on port ${port} `);
});