'use strict';

var redis = require('../lib/redis');

exports.getUserRoles = function(callback){
	redis.lrange('userRole', 0, -1, function(err, data){
		if(err) return callback(err, null);

		return callback(null, data.map(JSON.parse));
	});
};