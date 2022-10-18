const { response } = require('express');
const express = require('express');
const router= express.Router();
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')('sk_test_51LsYMyApBjKdj43f1cvixU6tXTxIjscBhfdIAk5JpL5FZ61uvnMva6IEgndflEEaLhWK6KXfj3kVv825KQJywxgQ00PAcsbxI9')
const Order = require('../models/order')

router.post('/placeorder', async (req, res)=>{

    const { token, subtotal, currentUser, cartItems} = req.body
    console.log(req.body)  
            
   try {
            const customer = await stripe.customers.create({
                email: token.email,
                source:token.id
            });
            const payment =await stripe.charges.create(
                {
                amount:subtotal *100,
                currency: 'usd',
                customer: customer.id,
                receipt_email:token.email
            },{
                idempotencyKey:uuidv4() 
            })

            if (payment){

                    const neworder = new Order(
                        {
                            name: currentUser.name,
                            email: currentUser.email,
                            userid : currentUser._id,   
                            orderItem:cartItems,
                            // amount:subtotal,
                            shippingAddress:{
                                street:token.card.address_line1,
                                city: token.card.address_city,
                                country:token.card.address_country,
                                pincode : token.card.address_zip
                            },
                            transactionId: payment.source.id
                        }
                    )
                            
                    neworder.save()

                res.send('order placed sucessfully')
            }else{
                res.send('payment failed')
            }

   } catch (error) {
        return res.status(400).json({message: 'Something went wrong' + error});
   }


});


router.post("/getuserorders", async(req, res)=>{
    const {userid} = req.body
    console.log(response)

    try{

        const orders = await Order.findOne({userid : userid})
        res.send(orders)
      

    } catch(error){
        return res.status(400).json({message:"error"});
    }
})


router.get("/getallorders", async(req, res) => {
   
    try {
        const orders = await Order.find({})
        // console.log(response)
        res.send(orders)
    } catch (error) {
        return res.status(400).json({ message: error});
    }

});
 
module.exports = router