const express = require('express');
const bodyParser=require('body-parser');
const MongoClient =require('mongodb').MongoClient;
const app=express();

app.set('view engine', 'ejs');

//parser first , before crud handlers
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));

//handlers here
app.listen(3000,function(){
    console.log('listening on 3000')
})







MongoClient.connect('mongodb+srv://mkobaner1:akacaz@napoleon.d1ctoti.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db=client.db('napoleon-quotes')
    const quotesCollection=db.collection('quotes')
    
    app.post('/quotes', (req, res) => {
      quotesCollection.insertOne(req.body)
        .then(result => {
          res.redirect('/')
        })
        .catch(error => console.error(error))
    })
    
    app.get('/', (req, res) => {
      db.collection('quotes').find().toArray()
        .then(results => {
          res.render('index.ejs', { quotes: results })
        })
        .catch(/* ... */)
    })

    app.put('/quotes', (req, res) => {
      console.log(req.body)
    })

    
  })
  .catch(console.error)