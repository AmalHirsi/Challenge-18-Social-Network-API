const { Schema, Types } = require('mongoose');
//const thoughtSchema = require('./thought');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1, 
            max_length: 280,
          },

          createdAt: {
            type: date,
            default: Date.now,
        
          },

         userName: {
        type: String,
        required: true,
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

    const reactionSchema = new Schema(
        {
            reactionId: {
                type: Schema.Types.ObjectId,
                Default: () => new Types.ObjectId(),
              },
    
              reactionBody: {
                type: String,
                required: true,
                max_length: 280,
              },
                    userName: {
                        type: String,
                        required: true,
                      },
            
                      createdAt: {
                        type: Date,
                        default: Date.now,
                      },
                    },
                      {
                    toJSON: {
                        getters: true,
                         virtuals: true},
                },
                id: false,
                }
                );
    
    module.exports = thoughtSchema;
    