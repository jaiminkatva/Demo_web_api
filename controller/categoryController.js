const db = require("../model")

const Category = db.category;
const Product = db.product;

// add category api
const addCategory = async(req, res) => {

    let data = {
        category_name: req.body.category_name,
        category_desc: req.body.category_desc
    }

    const category = await Category.create(data)
    res.status(200).send(category)
    console.log(category);
}

// get category api
const getCategory = async(req, res) => {

    const category = await Category.findAll({})
    res.status(200).send(category)
    console.log(category)

}

// get one category api
const getOneCategory = async(req, res) => {

    let id = req.params.id
    const category = await Category.findOne({ where: { id: id } })
    res.status(200).send(category)
}

// update category api
const updateCategory = async(req, res) => {

    let id = req.params.id
    const category = await Category.update(req.body, { where: { id: id } })
    res.status(200).send(category)
}

// delete category api
const deleteCategory = async(req, res) => {

    let id = req.params.id
    await Category.destroy({ where: { id: id } })
    res.status(200).send(`category deleted successfully id is ${id}`)
}

// on to many
const oneToMany = async(req, res) => {

    const data = await Category.findAll({
        include: [{
            model: Product,
            as: 'product-info'
        }],
    })
    res.status(200).send(data)
}



module.exports = { addCategory, getCategory, getOneCategory, updateCategory, deleteCategory, oneToMany }