const Comment = require('../models/comment')
const Shoe = require('../models/shoe')

module.exports = {
    create,
  //  delete: deleteComment,
}

function create(req, res) {
Shoe.findById(req.params.id, function(err, shoes) {
        //console.log(req.body)
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        shoes.comments.push(req.body)
        shoes.save(function(err) {
        res.redirect(`/shoes/${shoes._id}`);
          });
        });
      }

    // function edit(req, res) {
    //     // Note the cool "dot" syntax to query on the property of a subdoc
    //     Shoe.findOne({'comments._id': req.params.id}, function(err, book) {
    //       // Find the comment subdoc using the id method on Mongoose arrays
    //       // https://mongoosejs.com/docs/subdocs.html
    //       const comment = shoe.comments.id(req.params.id);
    //       // Render the comments/edit.ejs template, passing to it the comment
    //       res.render('comments/edit', {comment});
    //     });
    //   }

    //   function update(req, res) {
    //     // Note the cool "dot" syntax to query on the property of a subdoc
    //     Shoe.findOne({'comments._id': req.params.id}, function(err, book) {
    //       // Find the comment subdoc using the id method on Mongoose arrays
    //       // https://mongoosejs.com/docs/subdocs.html
    //       const commentSubdoc = shoe.comments.id(req.params.id);
    //       // Ensure that the comment was created by the logged in user
    //       if (!commentSubdoc.userId.equals(req.user._id)) return res.redirect(`/shoes/${book._id}`);
    //       // Update the text of the comment
    //       commentSubdoc.text = req.body.text;
    //       // Save the updated book
    //       shoe.save(function(err) {
    //         // Redirect back to the book's show view
    //         res.redirect(`/shoes/${shoe._id}`);
    //       });
    //     });
    //   }

  
      // function deleteComment(req, res) {
      //   // Note the cool "dot" syntax to query on the property of a subdoc
      //   Shoe.findOne(
      //     {'comments._id': req.params.id, 'comments.userId': req.user._id},
      //     function(err, shoe) {
      //       if (!shoe || err) return res.redirect(`/shoes/${shoe._id}`);
      //       // Remove the subdoc (https://mongoosejs.com/docs/subdocs.html)
      //       shoe.comments.remove(req.params.id);
      //       // Save the updated book
      //       shoe.save(function(err) {
      //         // Redirect back to the book's show view
      //         res.redirect(`/shoes/${shoe._id}`);
      //       });
      //     }
      //   );
      // }