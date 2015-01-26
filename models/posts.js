/*
* @module posts-model
* @description: this file contains the schema and related information for the posts model

 */

var mongoose = require('mongoose');


var PostModel = mongoose.model('Post', {
    title: {
        type: String,
        rquired: true
    },
    body: {
        type: String
    }
});

exports.PostModel = PostModel;
