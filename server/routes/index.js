var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');


router.post("/", passport.authenticate('local', {
  successRedirect: "/users/",
  failureRedirect: "/"
}));

router.get("/users", function(req,res,next){
    res.sendFile(path.resolve(__dirname, "../public/views/users.html"));
});

router.get("/*", function(req, res, next){
  console.log(req.params[0]);
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "../public", file));
});


module.exports = router;
