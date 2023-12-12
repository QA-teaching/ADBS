const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");
const router = require("express").Router();

router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.get("/api/test/all", controller.allAccess);

router.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

router.get(
  "/api/test/admin",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.adminBoard
);

router.get(
  "/api/test/moderator",
  [authJwt.verifyToken],
  controller.moderatorBoard
);

module.exports = router;
