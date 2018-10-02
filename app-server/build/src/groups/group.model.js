"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
exports.GroupSchema = new Mongoose.Schema({
    name: { type: String, required: true },
}, {
    timestamps: true
});
exports.GroupModel = Mongoose.model('Group', exports.GroupSchema);
//# sourceMappingURL=group.model.js.map