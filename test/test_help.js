const Mongoose = require('mongoose');


before(done => {
    Mongoose.connect("mongodb://localhost/robot_test");
    Mongoose.connection
    .once("open", () =>{
        console.log("Connected to DB test");
        done();
    })
    .on("error", err => {
        console.warn("Warning", err);
    })

})