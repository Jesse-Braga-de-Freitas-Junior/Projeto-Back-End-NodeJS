//configuração incial
//const dontenv = require(dontenv).config()
// os testes CRUD foram feitos no Postman, os json criados foram hospedados no mongoDBatlas(mongoBD cloud).  
const express = require('express')
const Mongoose = require('mongoose')
const nodemon = require('nodemon')
const app = express()

//middlerwares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// rotas
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// endpoint
app.get('/', (rq, res) => {

    res.json({message: 'Oi express!' })
})

// porta / conexão / servidor
const DB_USER = 'jesse'
const DB_PASSWORD = encodeURIComponent('qM4T$.mr8Bb6TCH')

Mongoose
 .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.mwwox.mongodb.net/mybancodaapi?retryWrites=true&w=majority`,
 )
 .then(() => {
     console.log('Conectamos ao MongoDB-Atlas!')
     app.listen(3000)
 })
 .catch((err) => console.log(err))
