const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  //TODO : this is temporary token for testing without cookie
  // token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTU3NTFlNWM4NmM0ODQyOTk0NjczMyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY5NTkwNTI2MX0.tf2oPuNedXeEcqsC2s9mQBJmWsZfIzWPOmQJhXPj-HY";
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTU3NDcwNmY4MGQ5YzNlMzlhNmZiYiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjk1OTA0ODgwfQ.bnk4Zo_YU-f-uqOT4C81e2_jUC6iEEVmHgvOvjD5eC8";
  return token;
};
