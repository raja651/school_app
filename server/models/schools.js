'use strict';

var redis = require('../lib/redis');

exports.getSchools = function(callback){
	redis.lrange('schools', 0, -1, function(err, data){
		if(err) return callback(err, null);
		return callback(null, data.map(JSON.parse));
	});
};