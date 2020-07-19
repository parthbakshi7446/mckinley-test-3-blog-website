const express = require("express");
const router = express.Router();
module.exports = router;

const indexController = require("../controllers/indexController");

router.get("/", indexController.home);

router.get("/about", indexController.about);

router.get("/contact", indexController.contact);

router.get("/compose", indexController.composePage);

router.post("/compose", indexController.savePost);

router.get("/posts/:postId", indexController.getPost);

