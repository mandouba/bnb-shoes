const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

const shoeSchema = new Schema ({

    subject: { type: String, required: true},
    body: { type: String, required: true },
    comments: [commentSchema],
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String

});

module.exports = mongoose.model('Shoe', shoeSchema)