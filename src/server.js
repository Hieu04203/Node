require('dotenv').config();
const express = require('express');
const app = express();
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')

const port = process.env.PORT || 3456;

configViewEngine(app);

app.use('/', webRoutes)

connection.query(
    'select * from Users u',
    function (err, results, fields) {
        console.log('results: ', results);
    }
)

const server = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use. Trying another port...`);
        const newPort = port + 1;
        app.listen(newPort, () => {
            console.log(`Server is now running on port: ${newPort}`);
        });
    } else {
        console.error(`Server error: ${err}`);
    }
});
