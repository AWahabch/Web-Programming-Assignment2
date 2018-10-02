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
class UserActivityController {
    constructor(configs, database) {
        this.database = database;
        this.configs = configs;
    }
    createUserActivity(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = request.payload;
            try {
                let userActivity = yield this.database.userActivityModel.create(model);
                return reply(userActivity);
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    listUserActivitysByUser(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = request.params['userId'];
                const userActivities = yield this.database.userActivityModel.find({ "userId": userId });
                reply(userActivities);
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    listUserActivitysByChannel(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const channelId = request.params['channelId'];
                const userActivities = yield this.database.userActivityModel.find({ "channelId": channelId });
                reply(userActivities);
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
}
exports.default = UserActivityController;
//# sourceMappingURL=userActivity.controller.js.map