'use strict';

var _ = require('lodash');
var About = require('./about.model');

// Get list of abouts
exports.index = function(req, res) {
  About.find(function(err, abouts) {
    if (err) { return handleError(res, err); }
    return res.json(200, abouts);
  });
};

// Get a single about
exports.show = function(req, res) {
  About.findById(req.params.id, function(err, about) {
    if (err) { return handleError(res, err); }
    if (!about) { return res.send(404); }
    return res.json(about);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}