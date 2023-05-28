const express = require('express');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const router = require('./routes');

const app = express();

expressConfig(app);
handlebarsConfig(app);

app.use(router);

const PORT = 5000;
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}...`));