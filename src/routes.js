const router = require('express').Router();

const homeController = require('./controllers/homeController');
const catsController = require('./controllers/catsController');

router.use(homeController);
router.use('/cats',catsController);
router.get('*', (req, res) => {
    res.status(404);
    res.write('Not found!');
    res.end();
});

module.exports = router;
