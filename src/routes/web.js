const express = require('express')
const router = express.Router()
const { getHomePage, postCreate, getLogin, getCreate, getUpdate, postUpdate, postDelete, postDeleteUser } = require('../controllers/homeController')


router.get('/', getHomePage)
router.post('/create-user', postCreate)
router.get('/create', getCreate)
router.get('/update', getUpdate)
router.get('/update/:id', getUpdate)
router.post('/update-user', postUpdate)
router.post('/delete-user/:id', postDelete)
router.post('/delete-user/', postDeleteUser)


router.get('/login', getLogin);

module.exports = router
