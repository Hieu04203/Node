const express = require('express')
const router = express.Router()
const { getHomePage } = require('../controllers/homeController')


router.get('/', getHomePage)

router.get('/test', (req, res) => {
    res.render('test.ejs');
});

router.get('/login', (req, res) => {
    res.render('Login.ejs');
});

module.exports = router
