const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users } = require('./data')

connection.on('error', err => err)

connection.once('open', async () => {
    console.log('SociaLite seeded');

    await User.deleteMany({});
    await Thought.deleteMany({});

    await connection.close()


})