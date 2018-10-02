"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
exports.RoleSchema = new Mongoose.Schema({
    name: { type: String, required: true },
}, {
    timestamps: true
});
exports.RoleModel = Mongoose.model('Role', exports.RoleSchema);
//# sourceMappingURL=role.model.js.map