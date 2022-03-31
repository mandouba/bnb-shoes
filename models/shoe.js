const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema ({ 
    subject: {type: String, required: true},
    body: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String 
},
 {
timestamps:true
    
});

const shoeSchema = new Schema ({

subject: {
    type: String, 
    required: true,
},
 body: {
     type: String,
     required: true,
    posts: [postSchema]
 }
},
  {
    timestamps:true
})

module.exports = mongoose.model('Shoe', shoeSchema)