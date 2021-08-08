const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');

dotenv.config();

const app = express();

const db = require('./src/models');

db.sequelize.sync({
  //alter: true
});

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

const routes = require('./src/routes');

app.use('/', routes);


app.get('test', (req, res) => {
  const { Authorization } = req.headers;
});



const PORT = process.env.PORT;
if (!PORT)
  throw new Error('Please specify a port.');
app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`);
});