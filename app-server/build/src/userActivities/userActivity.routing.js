"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userActivity_controller_1 = require("./userActivity.controller");
function default_1(server, serverConfigs, database) {
    const userActivityController = new userActivity_controller_1.default(serverConfigs, database);
    server.bind(userActivityController);
    server.route({
        method: 'GET',
        path: '/userActivities/channel/{channelId}',
        config: {
            handler: userActivityController.listUserActivitysByChannel,
            auth: "jwt",
            tags: ['api', 'userActivities'],
            description: 'Get userActivity info.',
        }
    });
    server.route({
        method: 'GET',
        path: '/userActivities/user/{userId}',
        config: {
            handler: userActivityController.listUserActivitysByUser,
            auth: "jwt",
            tags: ['api', 'userActivities'],
            description: 'Get userActivity info.',
        }
    });
    server.route({
        method: 'POST',
        path: '/userActivities',
        config: {
            handler: userActivityController.createUserActivity,
            tags: ['api', 'userActivities'],
            description: 'Create a userActivity.',
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=userActivity.routing.js.map