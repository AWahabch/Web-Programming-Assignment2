"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const randomstring = require("randomstring");
const moment = require('moment');
class StringUtils {
    static codeGen(prefix) {
        const date = new Date();
        const datePrefix = `${date.getDate()}${date.getMonth() + 1}${date.getFullYear()}`;
        return `${prefix}${datePrefix}${(randomstring.generate(5)).toUpperCase()}`;
    }
}
exports.StringUtils = StringUtils;
//# sourceMappingURL=string.js.map