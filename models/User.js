const { Schema, model } = require('mongoose');


// Schema to create User model
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      max_length: 50,
    },

    username: {
      type: String,
      required: true,
      max_length: 50,
    },

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],

  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
