const db = require("../model");

const Admin = db.admin;

// admin insert api
const addAdmin = async(req, res) => {

    let data = {
        admin_name: req.body.admin_name,
        admin_email: req.body.admin_email,
        admin_password: req.body.admin_password,
        admin_cpassword: req.body.admin_cpassword
    }
    const admin = await Admin.create(data)
    res.status(200).send(admin)
    console.log(admin)
}

// get all admin api
const getAdmin = async(req, res) => {

    const admin = await Admin.findAll({})
    res.status(200).send(admin)
    console.log(admin);

}

// get one admin api
const getOneAdmin = async(req, res) => {

    let id = req.params.id
    const admin = await Admin.findOne({ where: { id: id } })
    res.status(200).send(admin)
    console.log(admin)

}

// update admin api
const updateAdmin = async(req, res) => {

    let id = req.params.id
    const admin = await Admin.update(req.body, { where: { id: id } })
    res.status(200).send(admin)
    console.log(admin)
}

// delete admin api
const deleteAdmin = async(req, res) => {

    let id = req.params.id
    await Admin.destroy({ where: { id: id } })
    res.status(200).send(`admin deleted succesfully id is ${id}`)
}

module.exports = { addAdmin, getAdmin, getOneAdmin, updateAdmin, deleteAdmin }