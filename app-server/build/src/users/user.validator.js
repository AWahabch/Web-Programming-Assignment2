"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
exports.createUserModel = Joi.object().keys({
    username: Joi.string().trim().required(),
    email: Joi.string().email().trim().required(),
    password: Joi.string().trim().required(),
    fullName: Joi.string(),
    confirmPassword: Joi.string(),
});
exports.updateUserModel = Joi.object().keys({
    email: Joi.string().email().trim(),
    password: Joi.string().trim()
});
exports.loginUserModel = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().trim().required()
});
exports.jwtValidator = Joi.object({ 'authorization': Joi.string().required() }).unknown();
//# sourceMappingURL=user.validator.js.map