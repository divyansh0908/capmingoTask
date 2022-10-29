const { authJwt } = require("../middlewares");
const controller = require("../controllers/admin.controller");



module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/addTeacher", [authJwt.verifyToken, authJwt.isAdmin], controller.addTeacher); 
  app.post("/removeTeacher", [authJwt.verifyToken, authJwt.isAdmin], controller.removeTeacher)   
};
