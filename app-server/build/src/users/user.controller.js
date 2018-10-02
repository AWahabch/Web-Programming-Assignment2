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
const Boom = require("boom");
const Jwt = require("jsonwebtoken");
const image_1 = require("../@common/image");
class UserController {
    constructor(configs, database) {
        this.database = database;
        this.configs = configs;
    }
    generateToken(user) {
        const jwtSecret = this.configs.jwtSecret;
        const jwtExpiration = this.configs.jwtExpiration;
        return Jwt.sign(({ id: user._id }), jwtSecret, { expiresIn: jwtExpiration });
    }
    loginUser(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const username = request.payload.username;
                const password = request.payload.password;
                let user = yield this.database.userModel.findOne({ username: username });
                if (!user) {
                    return reply({ error: true, message: 'User doesn\'t exist' });
                }
                if (!user.validatePassword(password)) {
                    return reply({ error: true, message: 'Invalid username and password.' });
                }
                const roles = yield this.database.userRoleModel.find({ "userId": user._id });
                let userRoles = [];
                const _this = this;
                for (var i = 0; i < roles.length; i++) {
                    const role = yield _this.database.roleModel.findById(roles[i].roleId);
                    userRoles.push(role);
                }
                reply({
                    token: this.generateToken(user),
                    user_mail: user.email,
                    id: user.id,
                    username: user.username,
                    roles: userRoles,
                    imageUrl: user.imageUrl,
                });
            }
            catch (error) {
                return reply({ error: true, message: 'Invalid username and password' });
            }
        });
    }
    createUser(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = request.payload;
            try {
                let user = yield this.database.userModel.create(model);
                user.isVerify = true;
                return reply({ token: this.generateToken(user) }).code(201);
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    saveRoles(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = request.payload;
            try {
                let result = yield this.database.userRoleModel.deleteMany({ "userId": model._id });
                var roles = JSON.parse(model.roles);
                roles.forEach(role => {
                    let userRole = { "userId": model._id, "roleId": role.id };
                    this.database.userRoleModel.create(userRole);
                });
                return reply({
                    message: 'ok'
                });
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    saveChannels(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = request.payload;
            try {
                let result = yield this.database.userChannelModel.deleteMany({ "userId": model._id });
                console.log(result);
                var channels = JSON.parse(model.channels);
                channels.forEach(channel => {
                    let userChannel = { "userId": model._id, "channelId": channel.id };
                    this.database.userChannelModel.create(userChannel);
                });
                return reply({
                    message: 'ok'
                });
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    updateUserImage(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = request.payload;
            try {
                const id = request.auth.credentials.id;
                const data = request.payload;
                const file = data['avatar']; // accept a field call avatar
                // save the file
                const fileDetails = yield image_1.uploader(file);
                console.log(fileDetails['filename']);
                let user = yield this.database.userModel.findByIdAndUpdate(id, {
                    $set: {
                        "imageUrl": fileDetails['filename']
                    }
                }, { new: true });
                return reply({
                    imageUrl: user["imageUrl"]
                });
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    updateUser(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = request.payload;
            try {
                let user = yield this.database.userModel.findByIdAndUpdate(model._id, { $set: request.payload }, { new: true });
                return reply(user);
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    deleteUser(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = request.params['id'];
            let user = yield this.database.userModel.findByIdAndRemove(id);
            return reply(user);
        });
    }
    infoUser(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = request.auth.credentials.id;
            let user = yield this.database.userModel.findById(id);
            reply(user);
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield this.database.userModel.findById(id);
            return user;
        });
    }
    listUsers(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.database.userModel.find({});
                var results = [];
                yield Promise.all(users.map((item) => __awaiter(this, void 0, void 0, function* () {
                    var channels = [];
                    var roles = [];
                    var userChannels = yield this.database.userChannelModel.find({ "userId": item._id });
                    if (userChannels && userChannels.length > 0) {
                        yield Promise.all(userChannels.map((userChannel) => __awaiter(this, void 0, void 0, function* () {
                            var channel = yield this.database.channelModel.findById(userChannel.channelId);
                            channels.push(channel);
                        })));
                    }
                    var userRoles = yield this.database.userRoleModel.find({ "userId": item._id });
                    if (userRoles && userRoles.length > 0) {
                        yield Promise.all(userRoles.map((userRole) => __awaiter(this, void 0, void 0, function* () {
                            var role = yield this.database.roleModel.findById(userRole.roleId);
                            roles.push(role);
                        })));
                    }
                    results.push({
                        _id: item._id,
                        username: item.username,
                        email: item.email,
                        password: item.password,
                        imageUrl: item.imageUrl,
                        channels: channels,
                        roles: roles
                    });
                })));
                reply(results);
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map