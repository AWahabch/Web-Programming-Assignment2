"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("./user.controller");
const UserValidator = require("./user.validator");
function default_1(server, serverConfigs, database) {
    const userController = new user_controller_1.default(serverConfigs, database);
    server.bind(userController);
    server.route({
        method: 'GET',
        path: '/users/info',
        config: {
            handler: userController.infoUser,
            auth: "jwt",
            tags: ['api', 'users'],
            description: 'Get user info.',
            validate: {
                headers: UserValidator.jwtValidator,
            },
            plugins: {
                'hapi-swagger': {
                    responses: {
                        '200': {
                            'description': 'User founded.'
                        },
                        '401': {
                            'description': 'Please login.'
                        }
                    }
                }
            }
        }
    });
    server.route({
        method: 'GET',
        path: '/users',
        config: {
            handler: userController.listUsers,
            auth: "jwt",
            tags: ['api', 'users'],
            description: 'Get user list.',
            validate: {
                headers: UserValidator.jwtValidator,
            },
            plugins: {
                'hapi-swagger': {
                    responses: {
                        '200': {
                            'description': 'User founded.'
                        },
                        '401': {
                            'description': 'Please login.'
                        }
                    }
                }
            }
        }
    });
    server.route({
        method: 'DELETE',
        path: '/users/{id}',
        config: {
            handler: userController.deleteUser,
            auth: "jwt",
            tags: ['api', 'users'],
            description: 'Delete current user.',
            validate: {
                headers: UserValidator.jwtValidator
            },
            plugins: {
                'hapi-swagger': {
                    responses: {
                        '200': {
                            'description': 'User deleted.',
                        },
                        '401': {
                            'description': 'User does not have authorization.'
                        }
                    }
                }
            }
        }
    });
    server.route({
        method: 'PUT',
        path: '/users',
        config: {
            handler: userController.updateUser,
            auth: "jwt",
            tags: ['api', 'users'],
            description: 'Update current user info.',
            validate: {
                //payload: UserValidator.updateUserModel,
                headers: UserValidator.jwtValidator
            },
            plugins: {
                'hapi-swagger': {
                    responses: {
                        '200': {
                            'description': 'Updated info.',
                        },
                        '401': {
                            'description': 'User does not have authorization.'
                        }
                    }
                }
            }
        }
    });
    server.route({
        method: 'POST',
        path: '/users/uploadImage',
        config: {
            handler: userController.updateUserImage,
            payload: {
                output: 'stream',
                allow: 'multipart/form-data' // important
            },
            auth: "jwt",
            tags: ['api', 'users'],
            description: 'Update user \'s image.',
            validate: {
                headers: UserValidator.jwtValidator
            }
        }
    });
    server.route({
        method: 'GET',
        path: '/users/image/{file*}',
        handler: {
            directory: {
                path: 'uploads'
            }
        }
    });
    server.route({
        method: 'POST',
        path: '/users',
        config: {
            handler: userController.createUser,
            tags: ['api', 'users'],
            description: 'Create a user.',
            plugins: {
                'hapi-swagger': {
                    responses: {
                        '201': {
                            'description': 'User created.'
                        }
                    }
                }
            }
        }
    });
    server.route({
        method: 'POST',
        path: '/users/saveRoles',
        config: {
            handler: userController.saveRoles,
            tags: ['api', 'users'],
            description: 'Save roles for a user.',
            plugins: {
                'hapi-swagger': {
                    responses: {
                        '201': {
                            'description': 'User created.'
                        }
                    }
                }
            }
        }
    });
    server.route({
        method: 'POST',
        path: '/users/saveChannels',
        config: {
            handler: userController.saveChannels,
            tags: ['api', 'users'],
            description: 'Save channels for a user.',
            plugins: {
                'hapi-swagger': {
                    responses: {
                        '201': {
                            'description': 'User created.'
                        }
                    }
                }
            }
        }
    });
    server.route({
        method: 'POST',
        path: '/users/login',
        config: {
            handler: userController.loginUser,
            tags: ['api', 'users'],
            description: 'Login a user.',
            validate: {
                payload: UserValidator.loginUserModel
            },
            plugins: {
                'hapi-swagger': {
                    responses: {
                        '200': {
                            'description': 'User logged in.'
                        }
                    }
                }
            }
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=user.routing.js.map