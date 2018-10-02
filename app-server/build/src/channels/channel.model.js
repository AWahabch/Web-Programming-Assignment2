"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
exports.ChannelSchema = new Mongoose.Schema({
    name: { type: String, required: true },
    groupId: { type: String, required: true },
}, {
    timestamps: true
});
exports.ChannelModel = Mongoose.model('Channel', exports.ChannelSchema);
//# sourceMappingURL=channel.model.js.map