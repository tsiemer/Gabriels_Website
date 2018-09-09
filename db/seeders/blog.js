'use strict';

// blogTypes : 'Food', 'Current-Thoughts', 'About-Me', 'My-System'

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Blogs', [
            {
                id: 1,
                blogType: "Current-Thoughts",
                title:  "Connecting your Network", // Blog Title
                subtitle:  "The lie of thee century", // Blog Subtitle
                content:  " as;dkfj askdfj a;ksdj fa;s jf;kaj sd;kfj a;slkdj fa;ksdj f;laksjd f;lkajsd ;flkjasoifja[osijvz;oxicj ", // Blog Content
                imgUrl:  "http://www.umeshmistry.com/Admin/Content/Chicken-Curry-_-Food-Photography.jpg", // Blog Img Url
                createdAt: new Date(),
                updatedAt: new Date()                
            },
            {
                id: 2,
                blogType: "Food",
                title:  "Pizza Party", // Blog Title
                subtitle:  "The best pizza ever", // Blog Subtitle
                content:  " as;dkfj askdfj a;ksdj fa;s jf;kaj sd;kfj a;slkdj fa;ksdj f;laksjd f;lkajsd ;flkjasoifja[osijvz;oxicj ", // Blog Content
                imgUrl:  "http://www.umeshmistry.com/Admin/Content/Chicken-Curry-_-Food-Photography.jpg", // Blog Img Url
                createdAt: new Date(),
                updatedAt: new Date()                
            }
        ], {});
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Blogs', null, {});
    }
};