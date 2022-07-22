const express = require('express')
const router = express.Router()
const categoryController = require("../controller/categoryController")

router.post("/addCategory", categoryController.addCategory)

router.get("/getCategory", categoryController.getCategory)

router.get("/oneToMany", categoryController.oneToMany)

router.get("/:id", categoryController.getOneCategory)

router.put("/:id", categoryController.updateCategory)

router.delete("/:id", categoryController.deleteCategory)

module.exports = router