'use strict';

const dm = require('./model.js');
const ut = require('./utils.js');

exports.getLast = function (req, res) {
  res.send(dm.loadMessages(req.query));
};

exports.post = function (req, res) {
  res.send(dm.writeMessage(req.body));
};
