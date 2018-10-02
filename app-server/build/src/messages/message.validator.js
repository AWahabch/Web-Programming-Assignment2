"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
exports.createMessageModel = Joi.object().keys({
    userId: Joi.string().trim().required(),
    channelId: Joi.string().trim().required(),
});
exports.updateMessageModel = Joi.object().keys({
    userId: Joi.string().trim().required(),
    channelId: Joi.string().trim().required(),
});
exports.jwtValidator = Joi.object({ 'authorization': Joi.string().required() }).unknown();
//# sourceMappingURL=message.validator.js.map