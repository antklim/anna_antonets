'use strict';

var _ = require('lodash');
var biography = require('./biography.data');

exports.find = function(callback) {
  callback(null, _.cloneDeep(biography));
};

exports.findById = function(id, callback) {
  if (!biography[ id ]) {
    return callback(new Error('Invalid about :id'));
  }

  callback(null, _.cloneDeep(biography[ id ]));
};
