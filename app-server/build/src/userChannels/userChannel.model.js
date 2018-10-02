"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
exports.UserChannelSchema = new Mongoose.Schema({
    channelId: { type: String, required: true },
    userId: { type: String, required: true },
}, {
    timestamps: true
});
exports.UserChannelModel = Mongoose.model('UserChannel', exports.UserChannelSchema);
//# sourceMappingURL=userChannel.model.js.map