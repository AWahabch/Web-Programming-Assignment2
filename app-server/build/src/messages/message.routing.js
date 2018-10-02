"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_controller_1 = require("./message.controller");
function default_1(server, serverConfigs, database) {
    const messageController = new message_controller_1.default(serverConfigs, database);
    server.bind(messageController);
    server.route({
        method: 'DELETE',
        path: '/messages',
        config: {
            handler: messageController.deleteMessage,
            auth: "jwt",
            tags: ['api', 'messages'],
            description: 'Delete message.',
        }
    });
    server.route({
        method: 'GET',
        path: '/messages/channel/{channelId}',
        config: {
            handler: messageController.listMessageByChannel,
            tags: ['api', 'messages'],
            description: 'Create a message.',
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=message.routing.js.map