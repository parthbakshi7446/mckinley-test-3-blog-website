const lodash = require("lodash");
const data  = require("../assets/data");

let posts = [];

module.exports.home = function(req, res){
    res.render("home", {
    startingContent: data.homeContent,
    posts: posts
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
    const post = {
        title: req.body.postTitle,
        content: req.body.postBody
    };

    posts.push(post);

    res.redirect("/");

}

module.exports.getPost = function(req, res){
    const requestedTitle = lodash.lowerCase(req.params.postName);

    posts.forEach(function(post){
        const storedTitle = lodash.lowerCase(post.title);

        if (storedTitle === requestedTitle) {
            res.render("post", {
                title: post.title,
                content: post.content
            });
        }
    });
}