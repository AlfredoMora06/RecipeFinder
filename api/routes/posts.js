const router = require('express').Router();
const verify = require('./verifyToken');

// route: '/api/posts'
// add middleware 'verify'
router.get('/', verify, (req, res) => {
    // res.json({
    //     posts: 
    //         {title: 'my first post', 
    //         description: 'random post you should not be able to access w/o logging in'
    //     }
    // });
    res.send("id: " + req.user._id);
})


module.exports = router;