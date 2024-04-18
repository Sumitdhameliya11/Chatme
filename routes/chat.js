const express =  require("express");
const router = express.Router();
const {chatme} = require("../controller/chatme")

router.get("/",chatme);

module.exports = router;