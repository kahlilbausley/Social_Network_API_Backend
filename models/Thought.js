const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 4
    },

    username: {
      type: String,
      required: true,
      max_length: 50,
    },

    createdAt: {
      type: Date,
      default: Date.now(),
    },

    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
