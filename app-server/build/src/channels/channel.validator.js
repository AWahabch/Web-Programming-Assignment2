"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
exports.createChannelModel = Joi.object().keys({
    name: Joi.string().trim().required(),
    groupId: Joi.string().trim().required(),
});
exports.updateChannelModel = Joi.object().keys({
    name: Joi.string().trim().required(),
    groupId: Joi.string().trim().required(),
});
exports.jwtValidator = Joi.object({ 'authorization': Joi.string().required() }).unknown();
//# sourceMappingURL=channel.validator.js.map