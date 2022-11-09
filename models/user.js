const { Schema, Types } = require('mongoose');
//const userSchema = require('./user');

const userSchema = new Schema(
    {
        userName: {
            type: String,
            unique: true,
            required: true,
            max_length: 50,
            trim: true,
            
          },

          email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            match: /.+\@.+\..+/,
          },
         thought: [
            {
            type: Schema.Types.ObjectId,
            ref: "thought",
            }
         ],
         friends: [
            {
            ref: "user",
            }
         ],
            toJSON: {
              virtuals: true,
            },
            id: false,
          }        

    );

    // Create a virtual property `tagCount` that gets the amount of comments per user
userSchema
.virtual('friendCount')
// Getter
.get(function () {
  return this.tags.length;
});

// Initialize our Post model
const User = model('post', userSchema);

module.exports = Post;

    module.exports = userSchema;
    