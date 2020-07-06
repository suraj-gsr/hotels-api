const express = require('express')
const app = express()
const port = 3000

function helloWorld(req, res) {
    console.log('Output');
    res.send('Hello World!')
} 

function getHotels(req, res) {
    console.log('HotelOutput')
    res.send('Hilton, Park, ComfortInn')
}
app.get('/', helloWorld)
app.get('/hello-world', helloWorld)
app.get('/hotels', getHotels)

function greeting(){
    console.log(`Example app listening at http://localhost:${port}`)
}
app.listen(port, greeting)