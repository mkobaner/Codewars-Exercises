const express = require('express');
const bodyParser=require('body-parser')
const MongoClient =require('mongodb').MongoClient
const app=express();

//parser first , before crud handlers
app.use(bodyParser.urlencoded({extended:true}))

//handlers here
app.listen(3000,function(){
    console.log('listening on 3000')
})

app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html')
})

app.post('/quotes', (req, res) =>{
    console.log(req.body)
})



MongoClient.connect('mongodb+srv://mkobaner1:akacaz@napoleon.d1ctoti.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
  })
  .catch(error => console.error(error))