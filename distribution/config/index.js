"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
//This file contains 3 parameters
//1 The port for the app to listen on
//2 The connection string for the database
//3 The size limit for the json passed in

/**
 * mLab URL ready for implementation
 */
// 'mongodb://coderyoyo:admin@ds159050.mlab.com:59050/chatbotdb'
exports.default = {
    "port": 5000,
    "mongoUrl": 'mongodb://localhost:27017/library',
    "bodyLimit": '100kb'
};
//# sourceMappingURL=index.js.map