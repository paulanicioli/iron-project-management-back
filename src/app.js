require('dotenv').config();
const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/apiRoutes');

require('./config/mongodb.config');

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  })
);

app.use(express.json());

app.use('/api', apiRoutes);

app.listen(process.env.PORT, () =>
  console.log(`App running on PORT ${process.env.PORT}`)
);
