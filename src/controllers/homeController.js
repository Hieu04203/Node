const connection = require('../config/database')


let users = [];
const getHomePage = (req, res) => {
    connection.query(
        'select * from Users u',
        function (err, results, fields) {
            users = results;
            // console.log('results: ', results);

            console.log('check: ', users)
            res.send(JSON.stringify(users));
        }
    )


}

module.exports = {
    getHomePage,

}