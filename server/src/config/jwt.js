const token = process.env.TOKEN_SECRET;

if(!token)
  throw new Error("Please define a secret token");

module.exports = { token }