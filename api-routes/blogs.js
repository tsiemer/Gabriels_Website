'use strict'

module.exports = function(app, db) {
    app.get('/blogs', (req, res, next) => {
        db.Blog.findAll({
        }).then((result) => {
            res.render('index', {blogs: result})
        })
    });

};