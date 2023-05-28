const router = require('express').Router();

router.get(['/','/index'],(req,res)=>{
    res.render('index');
});
router.get('*', (req, res) => {
    res.status(404);
    res.write('Not found!');
    res.end();
});

module.exports = router;
