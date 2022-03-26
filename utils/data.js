const users = [
    {
        username: 'user1',
        email: 'user1@mail.com',
        friends: [
            'Alex',
            'Betty'
        ],
        thoughts: [],
    },
    {
        username: 'user2',
        email: 'user2@mail.com',
        friends: [],
        thoughts: []
    },
    {
        username: 'user3',
        email: 'user3@mail.com',
        friends: [],
        thoughts: []
    },
]

const reactions = [
    {
        reactionBody: 'reaction1',
        username: 'user1'
    },
    {
        reactionBody: 'reaction2',
        username: 'user2'
    },
    {
        reactionBody: 'reaction3',
        username: 'user3'
    },
    {
        reactionBody: 'reaction4',
        username: 'user4'
    },
    {
        reactionBody: 'reaction5',
        username: 'user5'
    },
]

module.exports = { users, reactions }