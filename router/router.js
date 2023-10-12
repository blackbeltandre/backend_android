let express = require('express');
let router = express.Router();



const website_route = require('../controller/index');



module.exports = function(router) {

router.get('/biodata/get_biodata', website_route.get_biodata);
}