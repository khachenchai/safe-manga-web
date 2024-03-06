const express = require('express');
const app = express()
const path = require('path');

app.set('view engine', 'ejs')
app.use(require('./routes/router.js'))
app.set('views', path.join(__dirname + '/views'));

app.use(express.static(__dirname + '/public'))

app.listen(5555, (req, res) => {
    console.log('Server is running on http://localhost:5555');
})