"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userChannel_controller_1 = require("./userChannel.controller");
function default_1(server, serverConfigs, database) {
    const userChannelController = new userChannel_controller_1.default(serverConfigs, database);
    server.bind(userChannelController);
    server.route({
        method: 'GET',
        path: '/userChannels/channel/{channelId}',
        config: {
            handler: userChannelController.listUserChannelsByChannel,
            auth: "jwt",
            tags: ['api', 'userChannels'],
            description: 'Get userChannel info.',
        }
    });
    server.route({
        method: 'GET',
        path: '/userChannels/user/{userId}',
        config: {
            handler: userChannelController.listUserChannelsByUser,
            auth: "jwt",
            tags: ['api', 'userChannels'],
            description: 'Get userChannel info.',
        }
    });
    server.route({
        method: 'DELETE',
        path: '/userChannels',
        config: {
            handler: userChannelController.deleteUserChannel,
            auth: "jwt",
            tags: ['api', 'userChannels'],
            description: 'Delete userChannel.',
        }
    });
    server.route({
        method: 'PUT',
        path: '/userChannels',
        config: {
            handler: userChannelController.updateUserChannel,
            auth: "jwt",
            tags: ['api', 'userChannels'],
            description: 'Update userChannel info.',
        }
    });
    server.route({
        method: 'POST',
        path: '/userChannels',
        config: {
            handler: userChannelController.createUserChannel,
            tags: ['api', 'userChannels'],
            description: 'Create a userChannel.',
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=userChannel.routing.js.map