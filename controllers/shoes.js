const Shoe = require('../models/shoe');

module.exports= {
    index,
    new: newShoe,
    create,
    show,
    delete: deleteShoe,
    edit,
    update,
    addReading,

};

function index(req, res) {
    Shoe.find({}, function(err, shoes) {
        res.render('shoes/index', {shoes})
    })
}

function newShoe(req, res) {
    res.render('shoes/new');
  }
  
    function create(req, res) {
      // remove any whitespace at start and end of cast
      const shoe = new Shoe(req.body);
      shoe.save(function(err) {
        // one way to handle errors
        if (err) return res.render('shoes/new');
        console.log(shoe);
        // for now, redirect right back to new.ejs
        res.redirect(`/shoes`);
      });
    }
    // function create(req, res) {
    //       // Find the movie to embed the review within
    //       const shoe = new Shoe(req.body);
    //       Shoe.findById(req.params.id, function(err, shoe) {
    //         // Add the user-centric info to req.body
    //         req.body.user = req.user._id;
    //         req.body.userName = req.user.name;
    //         req.body.userAvatar = req.user.avatar;
    //         // Push the subdoc for the review
    //         // shoe.post.push(req.body);
    //         // Always save the top-level document (not subdocs)
    //         shoe.save(function(err) {
    //               // one way to handle errors
    //               if (err) return res.render('shoes/new');
    //               console.log(shoe);
    //               // for now, redirect right back to new.ejs
    //               res.redirect(`/shoes`);
    //         });
    //       });
    //     }

  function show(req, res) {
    Shoe.findById(req.params.id, function(err, shoe) {
        res.render('shoes/show', {shoe});
      });
  }

//   function deleteShoe(req, res){
//     Shoe.findByIdAndRemove(req.params.id, function(err, shoe){
//         res.redirect('/shoes')
//     })
// }

async function edit(req, res) {
  console.log(req.body)
  const shoe = await Shoe.findById(req.params.id) 
    res.render('shoes/edit', {shoe:shoe});
  };
// function edit(req, res) {
//   console.log(req.body)
//   Shoe.findOne({'shoes._id': req.params.id, userRecommending: req.user._id}, function(err, shoe) {
//     if (err || !shoe) return res.redirect('/shoes');
//     res.render('shoes/edit', {shoe});
//   });
// }

function update(req, res) {
  Shoe.findByIdAndUpdate({_id:req.params.id}, req.body, function(err, shoe){
    if (err || !shoe) return res.redirect('/shoes');
  });
      res.redirect(`/shoes`);
    };


function deleteShoe(req, res){
  Shoe.findOneAndDelete(
   {_id:req.params.id, userRecommending: req.user._id}, function(err){
      res.redirect('/shoes')
  })
}

function addReading(req, res) {
  Shoe.findById(req.params.id, function(err, shoe) {
    if (shoe.users.id(req.user._id)) return res.redirect('shoes/new');
    shoe.users.push(req.user._id);
    shoe.save(function(err) {
      res.redirect(`/shoes/${shoe._id}`);
    });
  });
}