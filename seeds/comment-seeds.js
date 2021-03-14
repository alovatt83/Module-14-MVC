const { Comment } = require('../models');

const commentData = [{
        comment_text: "I'm pretty sure it was Sean Connory",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "I couldn't agree more!",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Have you ever tried frisbee golf?",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;