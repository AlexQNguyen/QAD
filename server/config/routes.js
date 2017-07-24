var mongoose = require('mongoose');
var deep = mongoose.model('Deep');
var deeps = require('../controllers/friends.js');
module.exports = function(app) {

//Finds and Sends the collection of deeps
  app.get('/deeps', function(req, res){
    deeps.show_all(req,res)
  })
// creates a new document/deep
  app.post('/newdeeps', function(req,res){
    console.log(req.body)
    deeps.create(req,res)
  })

  app.post('/addnote/:id', function(req,res){
    console.log("hit add note", req.body)
    deeps.create_answer(req,res)
  })

//shows a specific deep and his attirbutes
  app.get('/deep/show/:id', function(req, res) {
    deeps.show(req,res)
  })

//Updates the infomation for a specific deep
  app.post('/updatedeep/:id', function(req,res){
    deeps.update(req,res)
  })
//removes a specific document/deep
  app.get('/deep/destroy/:id', function(req, res) {
    console.log(req.params.id)
    deeps.destroy(req,res)
  })
//catch all, if none of the routes work, it will go back to your index.html
  app.get('*', (req, res) => {
    res.redirect('/');
})
}
