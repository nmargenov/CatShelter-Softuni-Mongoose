const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
app.engine('hbs',handlebars.engine({
    extname:'hbs',
    runtimeOptions:{
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true
    }
    //runtimeOptions will allow me to get the properties later from mongoose
}));
app.set('view engine','hbs');
app.set('views','src/views');


app.get(['/','/index'],(req,res)=>{
    res.write('Working properly!');
    res.end();
});
const PORT = 5000;
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}...`));