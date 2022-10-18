const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://dupsy:Debor13@cluster0.a3ub6im.mongodb.net/oluricespecial'

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
  useUnifiedTopology: true,
} )

var db = mongoose.connection;

db.on('connected', ()=>{
    console.log (`connection sucessful`)
})

db.on ('error', ()=>{
    console.log (`Failed connection`)
});

module.exports = mongoose.connection;