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
class MessageController {
    constructor(configs, database) {
        this.database = database;
        this.configs = configs;
    }
    createMessageFromSocket(userId, channelId, type, content) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = {
                userId,
                channelId,
                type,
                content
            };
            try {
                let message = yield this.database.messageModel.create(model);
                return message;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    deleteMessage(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = request.payload['_id'];
                let message = yield this.database.messageModel.findByIdAndRemove(id);
                return reply();
            }
            catch (error) {
                return reply(Boom.badImplementation(error));
            }
        });
    }
    listMessageByChannel(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const channelId = request.params['channelId'];
                const messages = yield this.database.messageModel.find({ "channelId": channelId });
                var results = [];
                yield Promise.all(messages.map((item) => __awaiter(this, void 0, void 0, function* () {
                    var user = yield this.database.userModel.findById(item.userId);
                    results.push({
                        _id: item._id,
                        type: item.type,
                        content: item.content,
                        user: {
                            id: user._id,
                            email: user.email,
                            username: user.username,
                            imageUrl: user.imageUrl
                        }
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
exports.default = MessageController;
//# sourceMappingURL=message.controller.js.map