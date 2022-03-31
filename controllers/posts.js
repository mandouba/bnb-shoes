const Post = ('../models/shoe')

module.exports= {

    delete: deletePost,
    // create,
}
function deletePost(req, res){
    Post.findByIdAndRemove(req.params.id, function(err, post){
        res.redirect('/shoes')
    })
}
// function deletePost(req, res, next) {
//     // Note the cool "dot" syntax to query on the property of a subdoc
//     Post.findOne(
//         {'posts._id': req.params.id}).then(function(shoe) {
//       // Find subdoc using the id method on Mongoose arrays
//       // https://mongoosejs.com/docs/subdocs.html
//       const post = shoe.post.id(req.params.id);
//       if (post.user.equals(req.user._id)) return res.redirect(`/shoes/${shoes._id}`);
//       // Remove the review using the remove method of the subdoc
//       post.remove();
//       // Save the updated 
//       shoe.save().then(function() {
//         // Redirect back to shoe's show view
//         res.redirect(`/shoes`);
//       }).catch(function(err) {
//         // display an error
//         return next(err);
//       });
//     });
//   }

//   function create(req, res) {
//     // Find the movie to embed the review within
//     Shoe.findById(req.params.id, function(err, shoe) {
//       // Add the user-centric info to req.body
//       req.body.user = req.user._id;
//       req.body.userName = req.user.name;
//       req.body.userAvatar = req.user.avatar;
//       // Push the subdoc for the review
//       shoe.post.push(req.body);
//       // Always save the top-level document (not subdocs)
//       shoe.save(function(err) {
//         res.redirect(`/shoes/${shoe._id}`);
//       });
//     });
//   }