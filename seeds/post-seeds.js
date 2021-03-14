const { Post } = require('../models');

const postData = [{
        title: 'Who is the best James Bond?',
        content: 'My money is on Pierce Brosnan.',
        user_id: 1

    },
    {
        title: 'Favourite hockey team to win the 2021 Stanley cup',
        content: 'Obviously, the answer is the Toronto Maple Leafs',
        user_id: 2
    },
    {
        title: 'The best summer sport?',
        content: 'Obbbbbvvvvioussssslllly golf.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;