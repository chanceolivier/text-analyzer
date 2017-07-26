'use strict';
var _ = require('underscore');

module.exports = function(Text) {
  Text.statistics = function(id, cb) {
    Text.findById(id, (err, text) => {
      var statistics = {};
      var textLength = text.text.length
      _.each(text.text.split(''), char => {
        if (statistics[char]) {
          statistics[char] += 1/textLength;
        } else {
          statistics[char] = 1/textLength;
        }
      })
      return cb(null, statistics);
    })
  }
  Text.remoteMethod('statistics', {
    description: 'Find a model instance by {{id}} from the data source.',
    accessType: 'READ',
    accepts: [
      {arg: 'id', type: 'any', description: 'Model id', required: true,
        http: {source: 'path'}},
    ],
    returns: {arg: 'data', type: 'object', root: true},
    http: {verb: 'get', path: '/statistics/:id'},
  });
};
