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
            console.log(err);
            res.status(500).json(err);
        }else {
            console.log(results);
            res.status(200).json(results);
        }
    });
});

router.post('/', function(req, res){
    console.log(req.body);
    var post = new PostModel(req.body);
    post.save(function(err, result){
        if(err){
            console.log(err);
            res.status(500).json(err);
        } else {
            console.log(result);
            res.status(200).json(result);
        }
    });
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
