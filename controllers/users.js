var mongoose = require('mongoose');
const User = require('../models/user');


module.exports = {
    show,
    create,
};

function show(req, res) {
    User.findById(req.params.id, function(err, user) {
      console.log(user)
         res.render('profile/show', {user} )       
})
}
 
function create(req, res) {
 
User.findById(req.params.id, function(err, user) {
console.log(req.body)
user.save(function(err) {
                 
res.redirect(`/profile/${user._id}`);
});
});
}

