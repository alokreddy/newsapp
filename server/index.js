const express = require("express");
const fetch = require('node-fetch');
const logger = require('morgan');
const cors = require('cors');

const app = express();

//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );

app.post('/search', async function (req, res) {
    console.log("@ALOK req.body.value", req.body);
    try{
        const url = `http://newsapi.org/v2/everything?q=${req.body.data}&sortBy=publishedAt&apiKey=f8f927bf841f4e1b90e7ab84ae861a64`;
        const fetchResponse = await fetch(url);
        const json = await fetchResponse.json();
        res.json(json)
    }catch(err){
        console.log(err);
        throw new Error(err);
    }
});

app.get('/', function(req, res){
    res.send('Hi All')
})
const PORT = 3000;

app.listen(PORT, function(){
    console.log(`Server started on port ${PORT}`)
})