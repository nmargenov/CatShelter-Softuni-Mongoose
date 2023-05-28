const express = require('express');
const path = require('path');

function expressConfig(app) {
    app.use(express.static(path.resolve(__dirname, '../public')));
    app.use(express.urlencoded({ extended: false }));

    app.set('view engine','hbs');
    app.set('views','src/views');
}

module.exports = expressConfig;