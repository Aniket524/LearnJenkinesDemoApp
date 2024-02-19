const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/demo',(req,res)=>{
    res.send('this is the demo repo')
})

app.listen(3001,()=>{
    console.log('app is listening on port 3001')
})