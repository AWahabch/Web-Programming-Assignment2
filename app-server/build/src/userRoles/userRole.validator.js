"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
exports.createUserRoleModel = Joi.object().keys({
    userId: Joi.string().trim().required(),
    roleId: Joi.string().trim().required(),
});
exports.updateUserRoleModel = Joi.object().keys({
    userId: Joi.string().trim().required(),
    roleId: Joi.string().trim().required(),
});
exports.jwtValidator = Joi.object({ 'authorization': Joi.string().required() }).unknown();
//# sourceMappingURL=userRole.validator.js.map