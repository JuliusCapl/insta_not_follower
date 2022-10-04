// import express from 'express';
const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    console.log(__dirname)
    res.sendFile(__dirname + '/public/index.html')
})
app.post('/files',(req,res)=>{

})
app.listen(3000,()=>('server running https://localhost:3000'))