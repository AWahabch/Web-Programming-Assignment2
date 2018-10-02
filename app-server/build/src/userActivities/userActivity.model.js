"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
exports.UserActivitySchema = new Mongoose.Schema({
    channelId: { type: String, required: true },
    userId: { type: String, required: true },
    action: { type: Number, required: true }
}, {
    timestamps: true
});
exports.UserActivityModel = Mongoose.model('UserActivity', exports.UserActivitySchema);
//# sourceMappingURL=userActivity.model.js.map