const express = require("express");
const router = express.Router();
const  Rice = require ("../models/Rice")

router.get("/getrices", async(req, res)=>{
        try {
           const rices = await Rice.find({}) 
           res.send(rices)
        } catch (error) {
            return res.status(400).json({message:error})
        }
});

router.post("/addrice", async(req, res)=>{
    const rice= req.body.rice
   
   try{ 
    const newrice = new Rice({
        name:rice.name,
        image:rice.image,
        size: ['small', 'meduim', 'large'],
        description: rice.description,
        prices:[rice.prices]
    })

    await newrice.save()
    res.send('New Pizza Added Successfully')
   } catch (error) {
       return res.status(400).json({ message: error });
   }
})

module.exports=router;