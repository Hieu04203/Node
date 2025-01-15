const connection = require('../config/database')
const { getAllUser, getUserById, postUpdateUser, deleteUser } = require('../services/CRUD')

let users = [];
const getHomePage = async (req, res) => {
    let results = await getAllUser()
    return res.render('home.ejs', { listUsers: results })
}

const getLogin = (req, res) => {
    return res.render('Login.ejs')
}

const postCreate = async (req, res) => {
    let { email, name, city } = req.body;

    const [results, fields] = await connection.query(
        `INSERT INTO Users (email,name,city) VALUES (?,?,?);`, [email, name, city]
    );
    res.redirect('/')

}

const getCreate = (req, res) => {
    res.render('create.ejs')
}

const getUpdate = async (req, res) => {
    const userID = req.params.id;
    let user = await getUserById(userID)

    res.render('edit.ejs', { user: user })
}

const postUpdate = async (req, res) => {
    let { email, name, city, userID } = req.body;
    await postUpdateUser(email, name, city, userID)

    res.redirect('/')

}

const postDelete = async (req, res) => {
    const userID = req.params.id;
    let user = await getUserById(userID)

    res.render('delete.ejs', { user: user })

}

const postDeleteUser = async (req, res) => {
    const id = req.body.userID;
    await deleteUser(id)

    res.redirect('/')
}
module.exports = {
    getHomePage,
    postCreate,
    getLogin,
    getCreate,
    getUpdate,
    postUpdate,
    postDelete,
    postDeleteUser

}