const { Schema, model } = require('mongoose');
//const userSchema = require('./user');

const userSchema = new Schema(
    {
        username: {
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
         thoughts: [
            {
            type: Schema.Types.ObjectId,
            ref: "Thought",
            }
         ],
         friends: [
            {
             type: Schema.Types.ObjectId,
            ref: "User",
            }
         ],
            id: false,
          }        
    );

userSchema
.virtual('friendCount')
// Getter
.get(function () {
  return this.friends.length;
});


const User = model('User', userSchema);


    module.exports = User;
    