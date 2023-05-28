const express = require('express');

const app = express();
app.get(['/','/index'],(req,res)=>{
    res.write('Working properly!');
    res.end();
});
const PORT = 5000;
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}...`));