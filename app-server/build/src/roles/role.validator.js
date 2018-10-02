"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
exports.createRoleModel = Joi.object().keys({
    name: Joi.string().trim().required(),
});
exports.updateRoleModel = Joi.object().keys({
    name: Joi.string().trim().required(),
});
exports.jwtValidator = Joi.object({ 'authorization': Joi.string().required() }).unknown();
//# sourceMappingURL=role.validator.js.map