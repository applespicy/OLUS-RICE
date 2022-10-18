const { response } = require("express");
const express = require("express");
const router = express.Router();
const User = require ('../models/User')

router.post('/register', async(req, res)=>{
    const {name, email, password} = req.body
    const newUser = new User({name, email, password})
    // console.log(response);

    try {
        newUser.save()
        res.send('User Registered')
    } catch (error) {
        return res.status(400).json({message:error})
    }
});

router.post('/login', async(req, res)=>{
    const{email, password}= req.body
            // console.log(req.body)
    try {
       const user= await User.findOne({email})
            

        
        if (user){
           
            const currentUser ={
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                _id: user._id                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            }
            console.log(user)   
            res.send(currentUser);
        }
        else{
            res.send.status(400).json({message: 'User login failed'});
        }
    } catch (error) {
        return res.status(400).json({message:'Error'});
    }
});

router.get("/getallusers", async(req, res) => {

    try {
        const users = await User.find({})
        res.send(users)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
  
});

router.post("/deleteuser", async(req, res) => {
  
    const userid = req.body.userid

    try {
        await User.findOneAndDelete({_id : userid})
        res.send('User Deleted Successfully')
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});


module.exports=router;