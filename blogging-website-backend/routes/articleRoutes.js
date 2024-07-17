
const express = require('express');

const router = express.Router();
const articlesController = require('../controllers/articlesController');
const verifyJWT = require("../middleware/verifyJWT");


///api/articles
router.post('/',verifyJWT,  articlesController.createArticle);


router.get('/feed',verifyJWT,  articlesController.feedArticles);





module.exports = router;