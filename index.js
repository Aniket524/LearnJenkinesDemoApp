const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/demo',(req,res)=>{
    res.send('this is the demo repo page')
})

app.get('/hello',(req,res)=>{
    res.send('hello world')
})

app.get('/test',(req,res)=>{
    res.send('Jenkies test for webhooks')
})

app.get('/finaltest',(req,res)=>{
    res.send('final test for the pipeline')
})

app.listen(3001,()=>{
    console.log('app is listening on port 3001')
})