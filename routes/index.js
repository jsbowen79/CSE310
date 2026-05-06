const routes = require("express").Router(); 
const professionalController = require("../controllers/index");

routes.get("/professional", professionalController.retrieveData); 
routes.get("/", professionalController.defaultRoute); 


module.exports = routes; 