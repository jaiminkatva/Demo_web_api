const db = require("../model")

// file upload packages
const multer = require('multer')
const path = require('path')

const Product = db.product
const Category = db.category

// add product api
const addProduct = async(req, res) => {

    let data = {
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        product_desc: req.body.product_desc,
        category_id: req.body.category_id,
        Image: req.file
    }
    const product = await Product.create(data)
    res.status(200).send(product)
    console.log(product);
}

// get product api
const getProduct = async(req, res) => {

    const product = await Product.findAll({})
    res.status(200).send(product)
    console.log(product);
}

// get one product api
const getOneProduct = async(req, res) => {

    let id = req.params.id
    const product = await Product.findOne({ where: { id: id } })
    res.status(200).send(product)
    console.log(product);
}

// update product api
const updateProduct = async(req, res) => {

    let id = req.params.id
    const product = await Product.update(req.body, { where: { id: id } })
    res.status(200).send(product)
    console.log(product);
}

// delete product api
const deleteProduct = async(req, res) => {

    let id = req.params.id
    await Product.destroy({ where: { id: id } })
    res.status(200).send(`Product deleted successfully`)
}

const oneToone = async(req, res) => {

    const data = await Product.findAll({
        include: [{
            model: Category,
            as: 'category-info'
        }],
    })
    res.status(200).send(data)
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

module.exports = { addProduct, getProduct, getOneProduct, updateProduct, deleteProduct, oneToone, upload }