const mongoose = require('mongoose');
const Form = mongoose.model('forms');

const Counter = mongoose.model('counters');

module.exports = (app) => {
  /*
  app.get(`/api/product`, async (req, res) => {
    let products = await Product.find();
    return res.status(200).send(products);
  });
  */

  app.post(`/api/forms`, async (req, res) => {
    form = req.body
    

    value = await Counter.findOne({_id:"formid"}).catch(err => {
      console.log("rokh dad")
    });
    
    temp = value.sequence_value
    value.sequence_value = ++value.sequence_value;
    await value.save()

    form._id = temp
    form.fields = Object.assign({}, req.body.fields)
    console.log(form.fields)
    let x  = await Form.create(form).catch(err => {
      return res.status(400).send({
        "status": "error",
        "message": "Error message",
      })
    });

    return res.status(201).send({
      "status": "ok",
      "message": form.title+" inserted successfuly.",
    })
  })

  /*
  app.put(`/api/product/:id`, async (req, res) => { 
    const {id} = req.params;

    let product = await Product.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      product
    })

  });

  app.delete(`/api/product/:id`, async (req, res) => {
    const {id} = req.params;

    let product = await Product.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      product
    })

  })
  */

}