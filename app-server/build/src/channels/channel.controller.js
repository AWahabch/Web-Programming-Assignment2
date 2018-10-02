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
class ChannelController {
    constructor(configs, database) {
        this.database = database;
        this.configs = configs;
    }
    createChannel(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = request.payload;
            try {
                let channel = yield this.database.channelModel.create(model);
                return reply(channel);
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    updateChannel(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = request.payload;
            try {
                console.log(model);
                let channel = yield this.database.channelModel.findByIdAndUpdate(model._id, model);
                channel = yield this.database.channelModel.findById(model._id);
                return reply(channel);
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    deleteChannel(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = request.params['id'];
                let channel = yield this.database.channelModel.findByIdAndRemove(id);
                return reply();
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    infoChannel(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = request.params['id'];
                console.log(id);
                let channel = yield this.database.channelModel.findById(id);
                reply(channel);
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    getChannelById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const channel = yield this.database.channelModel.findById(id);
            return channel;
        });
    }
    listChannel(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const channels = yield this.database.channelModel.find({});
                var results = [];
                yield Promise.all(channels.map((item) => __awaiter(this, void 0, void 0, function* () {
                    var group = yield this.database.groupModel.findById(item.groupId);
                    results.push({
                        _id: item._id,
                        name: item.name,
                        groupId: item.groupId,
                        groupName: group.name
                    });
                })));
                reply(results);
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    listChannelByGroup(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const groupId = request.params['groupId'];
                const channels = yield this.database.channelModel.find({ "groupId": groupId });
                reply(channels);
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
}
exports.default = ChannelController;
//# sourceMappingURL=channel.controller.js.map