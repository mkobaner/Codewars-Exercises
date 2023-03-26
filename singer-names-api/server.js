const { response } = require('express');
const express=require('express')
const app=express()
const PORT=8000;

const singers = {
    'lipa':{
    'age':27,
    'birthName':'Lipa',
    'birthLocation':'London',
},
'eda baba':{
    'age':34,
    'birthName':'Eda Baba ',
    'birthLocation':'Istanbul',
},
'sting':{
    'age':71,
    'birthName':'Gordon Matthew Thomas Sumner ',
    'birthLocation':'Wallsend',
},
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname+'/index.html')
})

app.get('/api/:singerName',(request,response)=>{
    const singersName = request.params.singerName.toLowerCase()
    if(singers[singersName]){
        response.json(singers[singersName])
    }else{
        response.json(singers['lipa'])
    }
    //response.json(singer)
})
app.listen(PORT, ()=>{
    console.log(`Server runs on ${PORT}`)
})