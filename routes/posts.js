/**
 * @module posts-route
 *
 * */

var express = require('express');
var router  = express.Router();
var PostModel = require('../models/posts').PostModel;

console.log(PostModel);

// all the paths are relative to /posts
router.get('/', function(req, res){
    res.render('posts');
});

router.get('/all', function(req, res){
    // get a list of all the titles for all posts read about mongoose find() method
    PostModel.find({},{title: 1, _id: 1}, function(err, results){
        if(err){
            res.status(500).json(err);
        }else {
            res.status(200).json(results);
        }
    });
    // send a response to the user to show it

});

//testPostCreation();

// for one time use test code
/*function testPostCreation() {
    var post = new PostModel({
        title: 'Talin\'s awesome UI research',
        body: 'All about websockets'
    });
    post.save(function(err, result){
        if(err){
            console.log('Something went wrong with mongoose');
            console.log(err.message);
        } else {
            console.log('created the posts successfully');
            console.log('The id of the posts created is: ' + result._id);
        }

    });
}*/

//exress is going to find a file named posts in the views directory
module.exports = router;