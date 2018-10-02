"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
exports.createGroupModel = Joi.object().keys({
    name: Joi.string().trim().required(),
});
exports.updateGroupModel = Joi.object().keys({
    name: Joi.string().trim().required(),
});
exports.jwtValidator = Joi.object({ 'authorization': Joi.string().required() }).unknown();
//# sourceMappingURL=group.validator.js.map