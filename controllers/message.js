const Message = require('../models/message')

exports.contactUs = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const messageDetails = req.body.message;

    const message = new Message({
        name: name,
        email: email,
        message: messageDetails
    });

    message.save().then((result) => {
        res.redirect('/');
    }).catch(err => {
        console.log(err);
    })
};
