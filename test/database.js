require('dotenv').config();
const mongoose = require('mongoose');

//const MONGO_URI = process.event.DEV_DB;

mongoose.Promise = global.Promise;
if (process.env.DB_USER !== "test") { 
Mongoose
 .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.mwwox.mongodb.net/mybancodaapi?retryWrites=true&w=majority`,
 )
 .then(() => {
     console.log('Conectamos ao MongoDB-Atlas!')
     app.listen(3000)
 })
 .catch((err) => console.log(err))
}
