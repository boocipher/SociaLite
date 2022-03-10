const { Schema, model } = require('mongoose');
const moment = require('moment');
const { ObjectId } = require('bson');
// const { timeStamp } = require('console');

const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: new ObjectId,
        },

        reactionBody: {
            type:String,
            required: true,
            maxlength: 280,
        },
        username: {
            type:String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: timeStamp => moment(timeStamp).format('MMM,d,YYYY')
        },
    }
)

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: timeStamp => moment(timeStamp).format('MMM d, YYYY')

        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
)

const Thought = model('Thought', thoughtSchema, 'Thought');
const Reaction = model('Reaction', reactionSchema, 'Reaction');

module.exports = {
    thoughtSchema,
    Thought,
    reactionSchema,
    Reaction
};