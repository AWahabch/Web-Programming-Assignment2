"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
exports.createUserChannelModel = Joi.object().keys({
    userId: Joi.string().trim().required(),
    channelId: Joi.string().trim().required(),
});
exports.updateUserChannelModel = Joi.object().keys({
    userId: Joi.string().trim().required(),
    channelId: Joi.string().trim().required(),
});
exports.jwtValidator = Joi.object({ 'authorization': Joi.string().required() }).unknown();
//# sourceMappingURL=userChannel.validator.js.map