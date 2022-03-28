const Shoe = require('../models/shoe');

module.exports= {
    index,
    new: newShoe,
    create,

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
      res.redirect('/shoes/new');
    });
  }