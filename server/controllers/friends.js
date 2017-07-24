var mongoose = require('mongoose');
var deep = mongoose.model('Deep');
module.exports = {

//Route is "/deeps" will show all deeps
  show_all: function(req, res){
    deep.find({}).sort({updatedAt:-1})
    .then(deeps => {
      res.json(deeps)
    })
    .catch(err => {
      res.json(err)
    })
  },

//Route is "/newdeeps" add a deep to db
  create: function(req, res) {
		var new_deep = new deep();
      new_deep.user_name = req.body.userName;
      new_deep.thought = req.body.thought;
      new_deep.description = req.body.description;
	    new_deep.save(function(err){
	      if(err){
	        console.log(err);
	        res.json(err);
	      }
	      else{
	        console.log(new_deep)
	        return res.json(new_deep);
	      }
	    })
	},

  create_answer: function(req,res){
    console.log("this is the author", req.body.user_name);
		deep.update({_id:req.params.id}, {$push: {answers:{author: req.body.user_name, content: req.body.content, detail: req.body.detail}}}  )
      .then(deep => {
        console.log(deep,"This is the star!")
        res.json(deep)
    })
    	.catch(err => {
        res.json(err)
      })
	},


  // Route is "/deeps/show/:id" finds one deep
  	show: function(req,res){
  		deep.findOne({_id:req.params.id})
        .then(deeps => {
          res.json(deeps)
        })
        .catch(err=> {
          res.json({error:err})
        })
  	},

// Route is "/updatedeep/:id" updates info
	update: function(req,res){
		deep.update({_id:req.params.id}, {$inc: {likes: 1}})
      .then(deep => {
        console.log(like)
        res.json(deep)
    })
    	.catch(err => {
        res.json(err)
      })
	},



// Route is "/deep/destory/:id" removes a document from a collection
	destroy: function(req,res){
	   deep.remove({_id:req.params.id}, function(err, result){
       return res.send(result)
    });
	}
}
