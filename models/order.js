const {Schema, model} = require ('mongoose');

const orderSchema = new Schema(
    {
    name: {
      type: String,
      required: true,
    },
    email: {
        type: String,
        required: true,
      },

      userid: {
        type: String,
        required: true,
      },
      orderItem :[],

    shippingAddress:{
      type: Object,
      
    },

    // amount:{
    //   type: Number,
    //   required: true,
    // },
    isDelivered:{
        type: Boolean,
        required: true,
        default:false
      },
      transactionId:{
        type: String,
        required: true,
      },
},
{
  timestamps:true
}

);

const Order = model('orders', orderSchema);

module.exports = Order;