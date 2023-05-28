const router = require('express').Router();

router.get(['/','/index'],(req,res)=>{
    res.write('Working properly!');
    res.end();
});

router.get('*', (req, res) => {
    res.status(404);
    res.write('Not found!');
    res.end();
});

module.exports = router;
