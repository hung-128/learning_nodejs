const express = require('express')
const morgan = require('morgan')
const handle= require('express-handlebars');
var path = require('path');
const app = express();
const port = 3000;
//temlate engine
app.engine('hbs', handle({extname: '.hbs'}));
app.set('view engine' , 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// 
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', '.hbs');
//
app.use(morgan('combined'))

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/news', (req, res) => {
  res.render('news')
})
app.enable('view cache');
// create "middleware"
var logger = morgan('combined')

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})