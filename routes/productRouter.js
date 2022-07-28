const express = require("express")
const router = express.Router()
const productController = require("../controller/productController")

router.post("/addProduct", productController.addProduct, productController.upload.single('image'))

router.get("/getProduct", productController.getProduct)

router.get("/oneToone", productController.oneToone)

router.get("/:id", productController.getOneProduct)

router.put("/:id", productController.updateProduct)

router.delete("/:id", productController.deleteProduct)

module.exports = router