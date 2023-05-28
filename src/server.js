const express = require('express');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');

const app = express();

expressConfig(app);
handlebarsConfig(app);

app.get(['/','/index'],(req,res)=>{
    res.write('Working properly!');
    res.end();
});
const PORT = 5000;
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}...`));