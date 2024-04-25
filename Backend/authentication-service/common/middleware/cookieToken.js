const getJwtToken = require("./jwtToken");

const getCookieToken = (user, res) => {
  const CookieToken = getJwtToken(user.id);

  // Options for the cookie
  const options = {
    expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // Expires in 1 day
    httpOnly: true,
  };
  
  user.password = undefined;
  
  res.status(200).cookie("token", CookieToken, options).json({
    success: true,
    CookieToken,
    user,
  });
};

module.exports = getCookieToken;
