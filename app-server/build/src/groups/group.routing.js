"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const group_controller_1 = require("./group.controller");
function default_1(server, serverConfigs, database) {
    const groupController = new group_controller_1.default(serverConfigs, database);
    server.bind(groupController);
    server.route({
        method: 'GET',
        path: '/groups/info/{id}',
        config: {
            handler: groupController.infoGroup,
            auth: "jwt",
            tags: ['api', 'groups'],
            description: 'Get group info.',
        }
    });
    server.route({
        method: 'GET',
        path: '/groups',
        config: {
            handler: groupController.listGroup,
            auth: "jwt",
            tags: ['api', 'groups'],
            description: 'Get group info.',
        }
    });
    server.route({
        method: 'DELETE',
        path: '/groups/{id}',
        config: {
            handler: groupController.deleteGroup,
            auth: "jwt",
            tags: ['api', 'groups'],
            description: 'Delete group.',
        }
    });
    server.route({
        method: 'PUT',
        path: '/groups',
        config: {
            handler: groupController.updateGroup,
            auth: "jwt",
            tags: ['api', 'groups'],
            description: 'Update group info.',
        }
    });
    server.route({
        method: 'POST',
        path: '/groups',
        config: {
            handler: groupController.createGroup,
            tags: ['api', 'groups'],
            description: 'Create a group.',
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=group.routing.js.map