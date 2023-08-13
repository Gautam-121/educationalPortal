const express = require("express")
const router = express.Router()
const {AllCourses} = require("../controller/courseController.js")

router.route("/course").get(AllCourses)


module.exports = router