const jwt = require("jsonwebtoken");
const Error401 = require("../error/error401");

const { SECRET } = process.env;

// eslint-disable-next-line consistent-return
async function isAuthenticated(ctx, next) {
  if (ctx.method === "OPTIONS") {
    return next();
  }
  // eslint-disable-next-line no-useless-catch
  try {
    const token = ctx.headers.authorization.split(" ")[1];
    if (!token) {
      throw new Error401();
    }
    ctx.request.body.user = jwt.verify(token, SECRET).id;
    return next();
  } catch (e) {
    throw new Error401();
  }
}

module.exports = isAuthenticated;
