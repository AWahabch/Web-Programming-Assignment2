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
class GroupController {
    constructor(configs, database) {
        this.database = database;
        this.configs = configs;
    }
    createGroup(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = request.payload;
            try {
                let group = yield this.database.groupModel.create(model);
                return reply(group);
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    updateGroup(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = request.payload;
            try {
                console.log(model);
                let group = yield this.database.groupModel.findByIdAndUpdate(model._id, model);
                group = yield this.database.groupModel.findById(model._id);
                return reply(group);
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    deleteGroup(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = request.params['id'];
                let group = yield this.database.groupModel.findByIdAndRemove(id);
                return reply();
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    infoGroup(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = request.params['id'];
                console.log(id);
                let group = yield this.database.groupModel.findById(id);
                reply(group);
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    listGroup(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const groups = yield this.database.groupModel.find({});
                var results = [];
                yield Promise.all(groups.map((item) => __awaiter(this, void 0, void 0, function* () {
                    const channels = yield this.database.channelModel.find({ "groupId": item._id });
                    results.push({
                        _id: item._id,
                        name: item.name,
                        channels: channels,
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
exports.default = GroupController;
//# sourceMappingURL=group.controller.js.map