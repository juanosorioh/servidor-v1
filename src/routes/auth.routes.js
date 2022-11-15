const { Router } = require("express");
const router = Router();
//
const {
  postLoginUser
} = require("../controllers/auth.controller");

router.post("/login", postLoginUser)

module.exports = router;