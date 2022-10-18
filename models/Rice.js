const {Schema, model} = require ('mongoose');

const riceSchema = new Schema(
    {
    name: {
      type: String,
      required: true,
    },
    sizes: [],

    prices: [],

    image:{
      type: String,
      required: true,
    },

    Description:{
      type: String,
      required: true,
    },

},
{
  toJSON: {
    getters: true,
  },
}

);

const Rice = model('rice', riceSchema);

module.exports = Rice;