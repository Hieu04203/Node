const express = require('express')
const app = express()
const port = 3333
const path = require('path')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/css', express.static(__dirname + '/public/css'));


app.get('/', (req, res) => {
    res.send('hi')
})

app.get('/test', (req, res) => {
    res.render('test.ejs')
})


app.get('/login', (req, res) => {
    res.render('Login.ejs')
})
app.listen(port, () => {
    console.log(`port: ${port}`)
})