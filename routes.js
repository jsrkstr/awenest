module.exports = function(app, models, mongoose){

  /**
   *  Index
   */
  app.get('/', function(req, res){
    // if (app.requireAuth === true && req.loggedIn === false)
    //   res.redirect('/auth/twitter');

    //get all the examples
    // models.examples.find({}, function(err, docs){
      
    //   //render the index page
    //   res.render('index.jade', {
    //       locals: {
    //         title: 'Scan Hunt',
    //         page: 'index',
    //         examples: docs
    //       }
    //   });

    // });

      //render the index page
      res.render('index.jade', {
          locals: {
            title: 'Scam Hunt',
            page: 'index'
          }
      });
  });
  
  



  /**
   *  View
   */
  app.get('/view/:id', function(req, res){
		

    if (app.requireAuth === true && req.loggedIn === false)
      res.redirect('/auth/twitter');

    //get the example
    models.examples.findById(req.params.id, function(err, doc){
      
      //render the view page
      res.render('view.jade', {
          locals: {
            title: 'Node.js Express MVR Template',
            page: 'view',
            example: doc
          }
      });

    });
  });
  
  /**
   *  Add test doc
   */
   
  app.post('/posts', function(req, res){
     var now = new Date();
     var Post = models.examples;
     var post = new Post();
     post.name = req.param('doc');
     post.date = now;
     post.save(function(err) {
         console.log('error check');
         if(err) { throw err; }
         console.log('saved');
     });
     res.redirect('/list');
  });

//////////////////////////////////////////////////////////////////////////////

  app.post('/users', function(req, res){
     var now = new Date();
     var User = models.users;
     var user = new User();
     user.first_name = req.param('first_name');
     user.last_name = req.param('last_name');
     user.email = req.param('email');
     user.gender = req.param('gender');
     user.score = req.param('score');
     user.image_url = req.param('image_url');
     user.date = now;

     user.save(function(err) {
         console.log('error check');
         if(err) { throw err; }
         console.log('saved');
     });
     // res.redirect('/list');
     res.send(user);
  });


  app.get('/users', function(req, res){
    // if (app.requireAuth === true && req.loggedIn === false)
    //   res.redirect('/auth/twitter');

    //get all the examples

    models.users.find({}, function(err, users){
      
      //render the index page
      // res.render('list.jade', {
      //     locals: {
      //       title: 'Node.js Express MVR Template',
      //       page: 'list',
      //       examples: docs
      //     }
      // });

      // users.forEach(function(user){
      //   user.remove();
      // });

      res.send(users);

    });
  });

  app.get('/users/:user_id', function(req, res){
    // if (app.requireAuth === true && req.loggedIn === false)
    //   res.redirect('/auth/twitter');

    var user_id = req.params["user_id"];

    //get all the examples
    models.users.find({ _id : user_id}, function(err, user){

      res.send(user);

    });
  });

  app.put('/users/:user_id', function(req, res){
     var now = new Date();
     var user_id = req.params["user_id"];

    models.users.findById(user_id, function(err, user){

      console.log(user.update);

      user.first_name = req.param('first_name');
      user.last_name = req.param('last_name');
      user.email = req.param('email');
      user.gender = req.param('gender');
      user.score = req.param('score');
      user.image_url = req.param('image_url');
      user.date = now;

      console.log("saving user");

      user.save(function(err) {
        console.log('error check');
        if(err) { throw err; }
        console.log('saved');
      });

      res.send(user);

    });
    
  });
  
//};


///////////////////////////////////////////////////////////////////////////////

  app.post('/reports', function(req, res){
     var now = new Date();
     var Reports = models.reports;
     var report = new Reports();
     report.user_id = req.param('user_id');
     report.title = req.param('title');
     report.description = req.param('description');
     report.category = req.param('category');
     report.location = req.param('location');
     report.image_url = req.param('image_url');
     report.rank = req.param('rank');
     report.likes = req.param('likes');
     report.dislikes = req.param('dislikes');
     report.timestamp= now; 

     report.save(function(err) {
         console.log('error check');
         if(err) { throw err; }
         console.log('saved');
     });
     // res.redirect('/list');
     res.send(report);
  });


  app.get('/reports', function(req, res){
    // if (app.requireAuth === true && req.loggedIn === false)
    //   res.redirect('/auth/twitter');

    //get all the examples

    models.reports.find({}, function(err, report){
      
      //render the index page
      // res.render('list.jade', {
      //     locals: {
      //       title: 'Node.js Express MVR Template',
      //       page: 'list',
      //       examples: docs
      //     }
      // });

      // users.forEach(function(user){
      //   user.remove();
      // });

      res.send(report);

    });
  });


  app.get('/reports/byuser/:user_id', function(req, res){
    // if (app.requireAuth === true && req.loggedIn === false)
    //   res.redirect('/auth/twitter');

    var user_id = req.params["user_id"];

    //get all the examples

    models.reports.find({ user_id : user_id }, function(err, reports){


      // users.forEach(function(user){
      //   user.remove();
      // });

      res.send(reports);

    });
  });


  app.get('/reports/:report_id', function(req, res){
    // if (app.requireAuth === true && req.loggedIn === false)
    //   res.redirect('/auth/twitter');

    var report_id = req.params["report_id"];

    //get all the examples
    models.reports.find({ _id : report_id}, function(err, report){

      res.send(report);

    });
  });

  app.put('/reports/:report_id', function(req, res){
     var now = new Date();
     var report_id = req.params["report_id"];

    models.reports.findById(report_id, function(err, report){


     report.user_id = req.param('user_id');
     report.title = req.param('title');
     report.description = req.param('description');
     report.category = req.param('category');
     report.location = req.param('location');
     report.image_url = req.param('image_url');
     report.rank = req.param('rank');
     report.likes = req.param('likes');
     report.dislikes = req.param('dislikes');
     report.timestamp= now; 

      console.log("saving report");

      report.save(function(err) {
        console.log('error check');
        if(err) { throw err; }
        console.log('saved');
      });

      res.send(report);

    });
    
  });
  


///////////////////////////////////////////////////////////////////////////////

  app.post('/comments', function(req, res){
     var now = new Date();
     var Comments = models.comments;
     var comment = new Comments();

     comment.user_id = req.param('user_id');
     comment.text = req.param('text');
     comment.report_id = req.param('report_id');
     comment.likes = req.param('likes');
     comment.dislikes = req.param('dislikes');
     comment.parent_id = req.param('parent_id');
     comment.type = req.param('type');
     comment.timestamp= now; 

     comment.save(function(err) {
         console.log('error check');
         if(err) { throw err; }
         console.log('saved');
     });
     // res.redirect('/list');
     res.send(comment);
  });


  app.get('/comments', function(req, res){
    // if (app.requireAuth === true && req.loggedIn === false)
    //   res.redirect('/auth/twitter');

    //get all the examples

    models.comments.find({}, function(err, comments){

      res.send(comments);

    });
  });


  app.get('/comments/byreports/:report_id', function(req, res){
    // if (app.requireAuth === true && req.loggedIn === false)
    //   res.redirect('/auth/twitter');

    //get all the examples
    var report_id = req.params["report_id"];

    models.comments.find({ report_id : report_id }, function(err, comments){

      res.send(comments);

    });
  });

  app.get('/comments/:comment_id', function(req, res){
    // if (app.requireAuth === true && req.loggedIn === false)
    //   res.redirect('/auth/twitter');

    var comment_id = req.params["comment_id"];

    //get all the examples
    models.comments.find({ _id : comment_id}, function(err, comment){

      res.send(comment);

    });
  });

  app.put('/comments/:comment_id', function(req, res){
     var now = new Date();
     var comment_id = req.params["comment_id"];

    models.comments.findById(comment_id, function(err, comment){


     comment.user_id = req.param('user_id');
     comment.text = req.param('text');
     comment.report_id = req.param('report_id');
     comment.likes = req.param('likes');
     comment.dislikes = req.param('dislikes');
     comment.parent_id = req.param('parent_id');
     comment.type = req.param('type');
     comment.timestamp= now; 

      console.log("saving comment");

      comment.save(function(err) {
        console.log('error check');
        if(err) { throw err; }
        console.log('saved');
      });

      res.send(comment);

    });
    
  });



  ///////////////////////////////////////////////////////////////////////////////

  app.post('/votes', function(req, res){
     var now = new Date();
     var Votes = models.votes;
     var vote = new Votes();

     vote.user_id = req.param('user_id');
     vote.report_id = req.param('report_id');
     vote.type = req.param('type');
     vote.timestamp= now; 

     vote.save(function(err) {
         console.log('error check');
         if(err) { throw err; }
         console.log('saved');
     });

     // update the report
    models.reports.find({ _id : vote.report_id}, function(err, report){

      if(vote.type == "like")
        report.likes++;
      else
        report.dislikes++;

      report.save(function(err) {
        console.log('error check');
        if(err) { throw err; }
        console.log('saved');
      });

    });

     // res.redirect('/list');
     res.send(vote);
  });


  app.put('/votes/:vote_id', function(req, res){
    var now = new Date();
    var vote_id = req.params["vote_id"];

    models.votes.findById(vote_id, function(err, vote){

      var changed = false;
      var previous = null;

      vote.user_id = req.param('user_id');
      vote.report_id = req.param('report_id');

      if(vote.type != req.param('type')){
        changed = true;
        previous = vote.type;
      }

      vote.type = req.param('type');
      vote.timestamp= now;

      console.log("saving vote");

      vote.save(function(err) {
        console.log('error check');
        if(err) { throw err; }
        console.log('saved');
      });

      // update the report
      models.reports.find({ _id : vote.report_id}, function(err, report){

        if(changed && previous == "like")
          report.likes--;
        else if(changed && previous == "dislike")
          report.dislikes--;

        report.save(function(err) {
          console.log('error check');
          if(err) { throw err; }
          console.log('saved');
        });

      });

      res.send(vote);

    });

  });

  
  app.get('/signup', function(req, res){

    // render the signup 
    res.render('signup.jade', {
          locals: {
            title: 'Scam Hunt',
            page: 'index'
          }
      });

  });

  app.get('/list', function(req, res){
    // if (app.requireAuth === true && req.loggedIn === false)
    //   res.redirect('/auth/twitter');

    //get all the examples

    models.reports.find({}, function(err, reports){
      
      // render the index page
      res.render('list.jade', {
          locals: {
            title: 'Node.js Express MVR Template',
            page: 'list',
            reports: reports
          }
      });
    });

  });
  

  app.get('/add', function(req, res){

    // if (app.requireAuth === true && req.loggedIn === false)
    //   res.redirect('/auth/twitter');
      
      //render the add page
      res.render('add.jade', {
          locals: {
            title: 'Node.js Express MVR Template',
            page: 'add'
          }
      });
  });


  app.get('/about', function(req, res){

      //render the about page
      res.render('about.jade', {
          locals: {
            title: 'Node.js Express MVR Template',
            page: 'about'
          }
      });
  });

  app.get('/profile/:user_id', function(req, res){
    // if (app.requireAuth === true && req.loggedIn === false)
    //   res.redirect('/auth/twitter');

    var user_id = req.params["user_id"];

    //get all the examples
    models.users.findById(user_id, function(err, user){

      //render the profile page
      res.render('profile.jade', {
          locals: {
            title: 'Node.js Express MVR Template',
            page: 'profile',
            user : user
          }
      });

    });
  });

};