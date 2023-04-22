const express = require('express');
const messageModel = require("../../../models/message");
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        console.log(req.query);
        const messages = await messageModel.find().sort({createdAt: 1});
        res.render('./HTML/Admin/adminMessages.ejs', { login: true, messages: req.query.sortSelector ? req.query.sortSelector === "0" ? messages.reverse() : messages : messages.reverse(), select: req.query.sortSelector ? req.query.sortSelector : "0"});
    } catch (err) {
        console.log(err);
        res.sendStatus(404);
    }

})

router.get('/search', async (req, res) => {
    try {
        console.log(req.query);
        let messagesTemp;
        const str = req.query.search.toString();
        if(str.includes('@')) {
            messagesTemp = await messageModel.find({ email: str });
        } else {
            messagesTemp = await messageModel.find({ name: str })
        }
        const messages = messagesTemp;
        // console.log(messages);
        res.render('./HTML/Admin/adminMessages.ejs', { login: true, messages: messages});
    } catch (err) {
        console.log(err);
        res.sendStatus(404);
    }
})

module.exports = router;