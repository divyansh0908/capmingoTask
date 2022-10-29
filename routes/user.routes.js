const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
app.post("/favouriteTeacher", [authJwt.verifyToken], controller.addFavouriteTeacher);
app.delete("/favouriteTeacher", [authJwt.verifyToken], controller.removeFavouriteTeacher);
app.get("/favouriteTeacher", [authJwt.verifyToken], controller.getMaximumFavouriteTeachers);
app.get("/getTeacherByName" , [authJwt.verifyToken], controller.getTeachersByName);
};
