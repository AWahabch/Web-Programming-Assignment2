"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
exports.UserRoleSchema = new Mongoose.Schema({
    roleId: { type: String, required: true },
    userId: { type: String, required: true },
}, {
    timestamps: true
});
exports.UserRoleModel = Mongoose.model('UserRole', exports.UserRoleSchema);
//# sourceMappingURL=userRole.model.js.map