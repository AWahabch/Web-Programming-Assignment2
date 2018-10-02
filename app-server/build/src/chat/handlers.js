"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const message_controller_1 = require("../messages/message.controller");
const user_controller_1 = require("../users/user.controller");
const channel_controller_1 = require("../channels/channel.controller");
exports.message = function (serverConfigs, database, socket, message) {
    return __awaiter(this, void 0, void 0, function* () {
        var msg = JSON.parse(message);
        var userId = msg.userId;
        var channelId = msg.channelId;
        var type = msg.type;
        var content = msg.content;
        const messageController = new message_controller_1.default(serverConfigs, database);
        const userController = new user_controller_1.default(serverConfigs, database);
        const channelController = new channel_controller_1.default(serverConfigs, database);
        var user = yield userController.getUserById(userId);
        var channel = yield channelController.getChannelById(channelId);
        messageController.createMessageFromSocket(userId, channelId, type, content);
        const fullMsg = {
            user: {
                username: user.username,
                email: user.email,
                imageUrl: user.imageUrl,
            },
            channel: {
                channelId: channelId,
                name: channel.name,
            },
            type,
            content
        };
        socket.broadcast.emit('message', JSON.stringify(fullMsg));
    });
};
//# sourceMappingURL=handlers.js.map