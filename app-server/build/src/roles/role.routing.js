"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const role_controller_1 = require("./role.controller");
function default_1(server, serverConfigs, database) {
    const roleController = new role_controller_1.default(serverConfigs, database);
    server.bind(roleController);
    server.route({
        method: 'GET',
        path: '/roles/info/{id}',
        config: {
            handler: roleController.infoRole,
            auth: "jwt",
            tags: ['api', 'roles'],
            description: 'Get role info.',
        }
    });
    server.route({
        method: 'GET',
        path: '/roles',
        config: {
            handler: roleController.listRole,
            auth: "jwt",
            tags: ['api', 'roles'],
            description: 'Get role info.',
        }
    });
    server.route({
        method: 'DELETE',
        path: '/roles/{id}',
        config: {
            handler: roleController.deleteRole,
            auth: "jwt",
            tags: ['api', 'roles'],
            description: 'Delete role.',
        }
    });
    server.route({
        method: 'PUT',
        path: '/roles',
        config: {
            handler: roleController.updateRole,
            auth: "jwt",
            tags: ['api', 'roles'],
            description: 'Update role info.',
        }
    });
    server.route({
        method: 'POST',
        path: '/roles',
        config: {
            handler: roleController.createRole,
            tags: ['api', 'roles'],
            description: 'Create a role.',
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=role.routing.js.map