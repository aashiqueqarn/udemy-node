const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});


// app.use('/add-porduct', (req, res, next) => {
//     console.log('This always runs!');
//     res.send('<h1>Add product page</h1>')
//     // next(); // using next we can call another app.use();
// });






// app.use('/any-middleware',(req, res, next) => {
//     console.log('In the middleware');
//     res.send('<h1>Hello from Express<h1>');
// });


// const server = http.createServer(app);
// server.listen(3000);

// Instead of this we can use

app.listen(4000);