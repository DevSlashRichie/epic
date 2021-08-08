
module.exports = {
  HOST: process.env.DB_HOST || "localhost",
  USER: process.env.DB_USER || "user",
  PASSWORD: process.env.DB_PASSWORD || "password",
  DB: process.env.DB_DB || "db",
  PORT: process.env.DB_PORT || 5432,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000
  }
}