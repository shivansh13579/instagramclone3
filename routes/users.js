const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/cloneinstagram");

// Define the user schema
const userModel = new mongoose.Schema({
   username: String,
   name: String,
   email: String,
   profileImage: String,
   posts: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post"
   }
});

userModel.plugin(plm);
// Create the User model
module.exports  = mongoose.model('user', userModel);

// Export the User model


