require('dotenv').config()
const express=require('express')
const app=express()

//listen on home route, app.get(path,callback fn which will handle get request on path route)
app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/twitter',(req,res)=>{
    res.send('on twitter page')
})

app.get('/login',(req,res)=>{
    res.send('<h1> on login page </h1>')
})

//listen(port address,callback fn to run on successful listening)
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
});
