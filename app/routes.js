var score = require('./models/score');



function getvalues(res) {
    data.find(function (err, lms) {       
        if (err) {
            res.send(err);
        }
        res.json(lms); 
    });
};
module.exports = function (app) {


//     app.get('/api/login', function (req, res) { 
//         console.log("code",req.query.phone)
//             if(req.query.phone == "404"){
//                 login.find({},function (err, todo) {
//                     console.log(todo)
//                     if (err)
//                         res.send(err);
//                    res.send(todo);
//                 });
//             }else{
//         login.findOne({
//          phone:  req.query.phone,
//         }, function (err, todo) {
//          console.log("todo",todo, 'err',err);
//          if (err){
//         console.log("err happend!!");
//         // res.sent(1)
//          }
//          res.send(todo);
// });}

// });

app.put('/api/score', function (req, res) { 
    console.log("time",req.body);
    
    var newData={
        red: req.body.red,
        green: req.body.green,
        blue: req.body.blue,
        yellow: req.body.yellow

    }
  
        score.update({}, {
            $set:newData
        }, {}, function(err, updated_data) {
        if (err)
            res.send(err);
        // console.log(updated_data)
        res.send(updated_data);
        });
      
});



    app.get('/api/score', function (req, res) { 
        console.log("code",req.query)
     score.find({},function (err, todo) {
     console.log(todo)
     if (err)
         res.send(err);
    res.send(todo);
 });
});


app.post('/api/score', function (req, res) {  
    console.log(req.body);
          
    score.create({
        red: req.body.red,
        green: req.body.green,
        blue: req.body.blue,
        yellow: req.body.yellow
       }, function (err, todo) {
        console.log("response");
        if (err){
            console.log("creation err");
            res.send(err);
        }
        else{
            console.log("created");
            res.send(todo);
        }
    });
   
});


// app.get('/main', function (req, res) {
//     res.sendFile(__dirname + '/dist/billingApp/index.html'); 
// });
// app.get('/reg', function (req, res) {
//     res.sendFile(__dirname + '/dist/billingApp/index.html'); 
// });

};
