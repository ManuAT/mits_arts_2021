
var items = require('./models/item');



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

    // app.post('/api/login', function (req, res) {  
    //     console.log(req.body.code);
              
    //     login.findOne({
    //         phone:  req.body.phone,
    //     }, function (err, todo) {
    //         console.log("todo",todo, 'err',err);
    //         if (err){
    //             console.log("exist");
    //             res.sent(1)
                
    //         }
    //         else if(todo==null){
    //             console.log("!exist");
    //             login.create({
    //                 phone: req.body.phone,
    //                 time: new Date(),
    //                 password : req.body.password,
    //                 department : req.body.department,
    //                 details : req.body.details,
    //                 lat : req.body.lat,
    //                 log : req.body.log
    //             }, function (err, todo) {
    //                 console.log("response");
    //                 if (err){
    //                     console.log("creation err");
    //                     res.send(err);
    //                 }
    //                 else{
    //                     console.log("created");
    //                     res.send(todo);
    //                 }
    //             });
    //         }
    //         else 
    //         res.send(todo);
    //     });
       
    // });

    app.get('/api/item', function (req, res) { 
        console.log("code",req.query)
 items.find({},function (err, todo) {
     console.log(todo)
     if (err)
         res.send(err);
    res.send(todo);
 });
});

// app.get('/api/stock', function (req, res) { 
//     console.log("code",req.query)
// stock.find({},function (err, todo) {
//  console.log(todo)
//  if (err)
//      res.send(err);
// res.send(todo);
// });
// });

app.post('/api/item', function (req, res) {  
    console.log(req.body);
          
    items.create({
        index: new Date(),
        item: req.body.item
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


app.get('/main', function (req, res) {
    res.sendFile(__dirname + '/dist/billingApp/index.html'); 
});
app.get('/reg', function (req, res) {
    res.sendFile(__dirname + '/dist/billingApp/index.html'); 
});

};
