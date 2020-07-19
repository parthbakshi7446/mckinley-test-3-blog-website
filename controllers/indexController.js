const lodash = require("lodash");
const data  = require("../assets/data");
const Post = require("../models/post");

// let posts = [];

module.exports.home = function(req, res){
    Post.find({},function(err,posts){
        if(err){console.log("err"+err);}
        return res.render("home", {
            startingContent: data.homeContent,
            posts: posts
        });
    });
    
}

module.exports.about = function(req, res){
    res.render("about", {aboutContent: data.aboutContent});
}

module.exports.contact = function(req, res){
    res.render("contact", {contactContent: data.contactContent});
}

module.exports.composePage = function(req, res){
    res.render("compose");
}

module.exports.savePost = function(req, res){
    Post.create({
        title: req.body.postTitle,
        content: req.body.postBody
    },function(err,post){
        if(err){console.log("err"+err);}
    });

    res.redirect("/");
}

module.exports.getPost = function(req, res){
    Post.findOne({_id: req.params.postId}, function(err, post){
        if(err){console.log("err"+err);}
        res.render("post", {
            title: post.title,
            content: post.content
        });
    });
}