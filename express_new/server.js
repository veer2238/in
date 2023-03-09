const express = require('express')
const app = express()
// Set Templating Enginge
app.set('view engine', 'ejs')

app.get('/', (req, res)=> {
    res.render('index')
   
})

app.get('/home', (req, res)=> {
    res.render('home')
   
})

app.listen(3000)