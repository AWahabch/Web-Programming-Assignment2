"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const channel_controller_1 = require("./channel.controller");
const ChannelValidator = require("./channel.validator");
function default_1(server, serverConfigs, database) {
    const channelController = new channel_controller_1.default(serverConfigs, database);
    server.bind(channelController);
    server.route({
        method: 'GET',
        path: '/channels/info/{id}',
        config: {
            handler: channelController.infoChannel,
            auth: "jwt",
            tags: ['api', 'channels'],
            description: 'Get channel info.',
        }
    });
    server.route({
        method: 'GET',
        path: '/channels/group/{groupId}',
        config: {
            handler: channelController.listChannelByGroup,
            auth: "jwt",
            tags: ['api', 'channels'],
            description: 'Get channel by channel.',
        }
    });
    server.route({
        method: 'GET',
        path: '/channels',
        config: {
            handler: channelController.listChannel,
            auth: "jwt",
            tags: ['api', 'channels'],
            description: 'Get channel info.',
        }
    });
    server.route({
        method: 'DELETE',
        path: '/channels/{id}',
        config: {
            handler: channelController.deleteChannel,
            auth: "jwt",
            tags: ['api', 'channels'],
            description: 'Delete channel.',
        }
    });
    server.route({
        method: 'PUT',
        path: '/channels',
        config: {
            handler: channelController.updateChannel,
            auth: "jwt",
            tags: ['api', 'channels'],
            description: 'Update channel info.',
        },
    });
    server.route({
        method: 'POST',
        path: '/channels',
        config: {
            handler: channelController.createChannel,
            auth: "jwt",
            validate: {
                payload: ChannelValidator.createChannelModel,
            },
            tags: ['api', 'channels'],
            description: 'Create a channel.',
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=channel.routing.js.map