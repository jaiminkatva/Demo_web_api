const express = require('express')
const router = express.Router();
const adminController = require("../controller/adminController")

router.post("/addAdmin", adminController.addAdmin)

router.get("/getAdmin", adminController.getAdmin)

router.get("/:id", adminController.getOneAdmin)

router.put("/:id", adminController.updateAdmin)

router.delete("/:id", adminController.deleteAdmin)

module.exports = router