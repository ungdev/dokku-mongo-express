'use strict';

const url = require('url');

var mongo = url.parse(process.env.MONGO_URL);

module.exports = {
  mongodb: {
    server: mongo.hostname,
    port:   mongo.port,
    ssl: false,
    autoReconnect: true,
    poolSize: 4,
    admin: false,
    auth: [
      {
        database: mongo.pathname.substring(1),
        username: mongo.auth.split(':')[0],
        password: mongo.auth.split(':')[1],
      },
    ],

    adminUsername: mongo.username,
    adminPassword: mongo.password,
  },

  site: {
    baseUrl: '/',
    host: '0.0.0.0',
    port: '5000',
  },

  useBasicAuth: false,
  basicAuth: {
    username: '',
    password: '',
  },

};
