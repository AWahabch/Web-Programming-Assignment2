"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Handlers = require('./handlers');
function init(server, configs, database) {
    var io = require('socket.io')(server.select('chat').listener);
    io.on('connection', function (socket) {
        // console.log('New connection!');
        var _io = socket;
        socket.on('message', function (message) {
            Handlers.message(configs, database, _io, message);
        });
    });
}
exports.init = init;
//# sourceMappingURL=index.js.map