const { User } = require('../models');

const userData = [{
        username: 'Allen',
        password: 'allen'

    },
    {
        username: 'Connor',
        password: 'connor'
    },
    {
        username: 'Erik',
        password: 'erik'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;