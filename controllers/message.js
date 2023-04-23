const messageModel = require("../models/message");
const countsSchema = require("../models/counts");
const pageLimitSize = 10;

exports.contactUs = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const messageDetails = req.body.message;

  const messageCount = await countsSchema.findOne({ countId: "message" });
  console.log(messageCount);
  if (messageCount) {
    const newCount = messageCount.countMessage + 1;
    await countsSchema.findOneAndUpdate(
      { countId: "message" },
      { countMessage: newCount }
    );
  } else {
    const newMessageCount = new countsSchema({
      countMessage: 0,
      countViews: 0,
      countEmployees: 0,
      countOrders: 0,
      countProducts: 0,
      countCustomers: 0,
      countSales: 0,
      countId: "message",
    });

    newMessageCount.save();
  }

  const message = new messageModel({
    name: name,
    email: email,
    message: messageDetails,
  });

  message
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.messageSortAndSearch = async (req, res) => {
  try {
    let allMessages;
    const messageCount = await countsSchema.findOne({ countId: "message" });

    const sortingOrder = req.query.sortSelector == 1 ? 1 : -1;
    const searchText = req.query.search;
    if (searchText && searchText != "" && searchText.length > 0) {
      if (searchText.includes("@")) {
        allMessages = await messageModel
          .find({ email: searchText })
          .sort({ createdAt: sortingOrder });
      } else {
        allMessages = await messageModel
          .find({ name: searchText })
          .sort({ createdAt: sortingOrder });
      }
    } else {
      allMessages = await messageModel.find().sort({ createdAt: sortingOrder });
    }
    const messages = allMessages;
    const select = sortingOrder == -1 ? 0 : 1;
    const endingPage = Math.ceil(messages.length / pageLimitSize);
    res.render("./HTML/Admin/adminMessages.ejs", {
      messageCount: messageCount.countMessage,
      login: true,
      messages: messages,
      select: select,
      searchText: searchText,
      endingPage: endingPage,
      currentPage: 1,
      limit: pageLimitSize,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
};

exports.messageSortSearchAndFilters = async (req, res) => {
  try {
    console.log(req.query);
    let allMessages, nameInitial, emailInitial;
    if (!req.query.hasOwnProperty("names")) {
      nameInitial = "All";
      emailInitial = "All";
    } else {
      nameInitial = req.query.names;
      emailInitial = req.query.email;
    }
    const sortingOrder = req.query.sortSelector == 1 ? 1 : -1;
    const searchText = req.query.search;
    const name = nameInitial;
    const email = emailInitial;

    if (searchText && searchText != "" && searchText.length > 0) {
      if (searchText.includes("@")) {
        allMessages = await messageModel
          .find({ email: searchText })
          .sort({ createdAt: sortingOrder });
      } else {
        allMessages = await messageModel
          .find({ name: searchText })
          .sort({ createdAt: sortingOrder });
      }
    } else {
      allMessages = await messageModel.find().sort({ createdAt: sortingOrder });
    }

    if (name != "All") {
      allMessages = allMessages.filter((message) => {
        return message.name == name;
      });
    }
    if (email != "All") {
      allMessages = allMessages.filter((message) => {
        return message.email == email;
      });
    }

    const filtersApplied = [name, email];
    const messages = allMessages;
    const select = sortingOrder == -1 ? 0 : 1;
    res.render("./HTML/Admin/adminMessages.ejs", {
      login: true,
      messages: messages,
      select: select,
      searchText: searchText,
      filtersApplied: filtersApplied,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
};

exports.deleteMessages = async (req, res) => {
  let deleteIdsArray = [];
  if (Array.isArray(req.query.deleteMessage)) {
    deleteIdsArray = req.query.deleteMessage;
  } else {
    deleteIdsArray.push(req.query.deleteMessage);
  }
  const idArray = deleteIdsArray;
  for (let i = 0; i < idArray.length; i++) {
    let product = await messageModel.findByIdAndRemove(idArray[i]);
  }
  res.redirect("/profile/admin/messages");
};

exports.pageChange = async (req, res) => {
  try {
    let allMessages;
    const messageCount = await countsSchema.findOne({ countId: "message" });
    const sortingOrder = req.query.select == 1 ? 1 : -1;
    const searchText = req.query.searchText;
    if (searchText && searchText != "" && searchText.length > 0) {
      if (searchText.includes("@")) {
        allMessages = await messageModel
          .find({ email: searchText })
          .sort({ createdAt: sortingOrder });
      } else {
        allMessages = await messageModel
          .find({ name: searchText })
          .sort({ createdAt: sortingOrder });
      }
    } else {
      allMessages = await messageModel.find().sort({ createdAt: sortingOrder });
    }
    const messages = allMessages;

    const select = sortingOrder == -1 ? 0 : 1;
    const endingPage = Math.ceil(messages.length / pageLimitSize);
    res.render("./HTML/Admin/adminMessages.ejs", {
      messageCount: messageCount.countMessage,
      login: true,
      messages: messages,
      select: select,
      searchText: searchText,
      endingPage: endingPage,
      currentPage: req.query.pagination,
      limit: pageLimitSize,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
};
