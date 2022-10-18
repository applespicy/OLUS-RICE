const express = require ('express');
// n
const path = require('path');
const Rice = require('./models/Rice');

const db = require ('./db.js');
const app = express ();
app.use(express.json());
const cors = require ('cors');
app.use(cors());
const Port = process.env.PORT || 5000;
// app.use(express.static(path.join(__dirname, "js")));



// app.use(routes);

const ricesRoute = require('./routes/ricesRoutes')
const userRoute = require('./routes/userRoutes')
const ordersRoute = require('./routes/ordersRoutes')

app.use('/', ricesRoute)
app.use('/api', userRoute)
app.use('/api', ordersRoute)




// app.get("/", (req, res)=>{
//     res.send ("sever is working")

// });


app.get("/getrices", (req, res)=>{
    Rice.find({}, (err, data)=>{
        if (err){
            console.log(err);

        } else {
            res.send(data)
        }
    });
});

const port = process.env.PORT || 5000;

app.listen(Port, ()=> `server is running on port`);