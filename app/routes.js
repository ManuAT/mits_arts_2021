var score = require('./models/score');
var event = require('./models/event');



// function getvalues(res) {
//     data.find(function (err, lms) {       
//         if (err) {
//             res.send(err);
//         }
//         res.json(lms); 
//     });
// };
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

// Score ----API

// Score-Update

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


// Score-featch
app.get('/api/score', function (req, res) { 
        console.log("get_query",req.query)
     score.find({},function (err, todo) {
     console.log(todo)
     if (err)
         res.send(err);
    res.send(todo);
 });
});



// Event----API

// Event create
app.post('/api/event', function (req, res) {  
    console.log(req.body);
    
    event.create({
        // red: req.body.red,
        // green: req.body.green,
        // blue: req.body.blue,
        // yellow: req.body.yellow
        eventName : req.body.eventName,
        eventCategory : req.body.eventCategory,
        eventTime : req.body.eventTime,
        eventWinner : req.body.eventWinner
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

// Event-Update

app.put('/api/event', function (req, res) { 
    console.log("Event_update_body",req.body);
    
    var newData={
        eventName : req.body.eventName,
        eventCategory : req.body.eventCategory,
        eventTime : req.body.eventTime,
        eventWinner : req.body.eventWinner

    }
  
        event.update({'_id':req.body._id}, {
            $set:newData
        }, {}, function(err, updated_data) {
        if (err)
            res.send(err);
        // console.log(updated_data)
        res.send(updated_data);
        });
      
});

// event -get
app.get('/api/event', function (req, res) { 
    console.log("get_query",req.query)
    event.find({},function (err, todo) {
        console.log(todo)
        if (err)
            res.send(err);
        res.send(todo);
    });
});

// Event --delete

app.delete('/api/event', function (req, res) { 
    console.log("get_query_delete",req.query)
    event.deleteOne({_id:req.query._id}, function(err, todo) {
        console.log(todo)
        if (err)
            res.send(err);
        res.send(todo);
        console.log("Deleted");
      });
});



// app.get('/main', function (req, res) {
//     res.sendFile(__dirname + '/dist/billingApp/index.html'); 
// });
// app.get('/reg', function (req, res) {
//     res.sendFile(__dirname + '/dist/billingApp/index.html'); 
// });

// testing

// {
//     "red": 33,
//     "green": 200,
//     "blue": 200,
//     "yellow": 300
// }

// {
//     "eventName": "Evnet_3",
//     "eventCategory": "cat3",
//     "eventTime": "12-10-10",
//     "eventWinner": "Ebin CSE S8"
// }


};
