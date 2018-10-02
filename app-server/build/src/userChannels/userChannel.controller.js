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
class UserChannelController {
    constructor(configs, database) {
        this.database = database;
        this.configs = configs;
    }
    createUserChannel(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = request.payload;
            try {
                let userChannel = yield this.database.userChannelModel.create(model);
                return reply(userChannel);
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    updateUserChannel(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = request.payload;
            try {
                let userChannel = yield this.database.userChannelModel.findByIdAndUpdate(model._id, model);
                userChannel = yield this.database.userChannelModel.findById(model._id);
                return reply(userChannel);
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    deleteUserChannel(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = request.payload['_id'];
                let userChannel = yield this.database.userChannelModel.findByIdAndRemove(id);
                return reply();
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    listUserChannelsByUser(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = request.params['userId'];
                const userChannels = yield this.database.userChannelModel.find({ "userId": userId });
                reply(userChannels);
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    listUserChannelsByChannel(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const channelId = request.params['channelId'];
                const userChannels = yield this.database.userChannelModel.find({ "channelId": channelId });
                reply(userChannels);
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
}
exports.default = UserChannelController;
//# sourceMappingURL=userChannel.controller.js.map