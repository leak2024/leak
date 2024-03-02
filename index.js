const express = require('express')
const cors = require('cors')

require('dotenv').config()
const mysql = require('mysql2')

const app = express()


app.use(cors())

const connection = mysql.createConnection(process.env.DATABASE_URL)

app.get('/',(req, res) => {
    console.log('Hellow World')
    res.send('Hello word')
})


app.get('/attractions', (req, res) => {
    connection.query(
        'SELECT * FROM attractions',
        function(err, results,fields) {
            console.log(results)
            res.send(results)
        }
    )
})

app.get('/Heng', (req, res) => {
    connection.query(
        'SELECT * FROM Heng',
        function(err, results,fields) {
            console.log(results)
            res.send(results)
        }
    )
})




app.get('/Heng', (req, res) => {
    connection.query(
        'SELECT * FROM Heng',
        function(err, results,fields) {
            console.log(results)
            res.send(results)
        }
    )
})


app.listen(process.env.PORT || 3000)
//connection.end()
