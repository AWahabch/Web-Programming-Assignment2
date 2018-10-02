"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRole_controller_1 = require("./userRole.controller");
function default_1(server, serverConfigs, database) {
    const userRoleController = new userRole_controller_1.default(serverConfigs, database);
    server.bind(userRoleController);
    server.route({
        method: 'GET',
        path: '/userRoles/role/{roleId}',
        config: {
            handler: userRoleController.listUserRolesByRole,
            auth: "jwt",
            tags: ['api', 'userRoles'],
            description: 'Get userRole info.',
        }
    });
    server.route({
        method: 'GET',
        path: '/userRoles/user/{userId}',
        config: {
            handler: userRoleController.listUserRolesByUser,
            auth: "jwt",
            tags: ['api', 'userRoles'],
            description: 'Get userRole info.',
        }
    });
    server.route({
        method: 'DELETE',
        path: '/userRoles',
        config: {
            handler: userRoleController.deleteUserRole,
            auth: "jwt",
            tags: ['api', 'userRoles'],
            description: 'Delete userRole.',
        }
    });
    server.route({
        method: 'PUT',
        path: '/userRoles',
        config: {
            handler: userRoleController.updateUserRole,
            auth: "jwt",
            tags: ['api', 'userRoles'],
            description: 'Update userRole info.',
        }
    });
    server.route({
        method: 'POST',
        path: '/userRoles',
        config: {
            handler: userRoleController.createUserRole,
            tags: ['api', 'userRoles'],
            description: 'Create a userRole.',
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=userRole.routing.js.map