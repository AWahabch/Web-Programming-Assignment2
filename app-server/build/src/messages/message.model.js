"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
exports.MessageSchema = new Mongoose.Schema({
    userId: { type: String, required: true },
    channelId: { type: String, required: true },
    type: { type: String },
    content: { type: String },
}, {
    timestamps: true
});
exports.MessageModel = Mongoose.model('Message', exports.MessageSchema);
//# sourceMappingURL=message.model.js.map