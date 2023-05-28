const handlebars = require('express-handlebars');

function handlebarsConfig(app) {
    app.engine('hbs',handlebars.engine({
        extname:'hbs',
        runtimeOptions:{
            allowProtoMethodsByDefault: true,
            allowProtoPropertiesByDefault: true
        }
        //runtimeOptions will allow me to get the properties later from mongoose
    }));
}

module.exports = handlebarsConfig;