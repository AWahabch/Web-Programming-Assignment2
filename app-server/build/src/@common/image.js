"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const uuid = require("uuid");
const Configs = require("../@configurations");
const uploadConfig = Configs.getUploadConfig();
const fileOptions = { dest: `${uploadConfig.folder}/` };
const imageFilter = function (fileName) {
    // accept image only
    if (!fileName.match(/\.(jpg|jpeg|png|gif)$/)) {
        return false;
    }
    return true;
};
const uploader = function (file) {
    if (!file) {
        throw new Error('no file(s)');
    }
    return _fileHandler(file, fileOptions);
};
exports.uploader = uploader;
const _fileHandler = function (file, options) {
    if (!file) {
        throw new Error('no file');
    }
    const orignalname = file.hapi.filename;
    let filename = uuid.v1();
    let path = `${options.dest}${filename}`;
    if (file.hapi.filename.indexOf('.') > 0) {
        path = path + file.hapi.filename.substr(file.hapi.filename.length - 4);
        filename += file.hapi.filename.substr(file.hapi.filename.length - 4);
    }
    const fileStream = fs.createWriteStream(path);
    return new Promise((resolve, reject) => {
        file.on('error', function (err) {
            reject(err);
        });
        file.pipe(fileStream);
        file.on('end', function (err) {
            const fileDetails = {
                fieldname: file.hapi.name + file.hapi.headers['content-type'],
                originalname: file.hapi.filename,
                filename,
                mimetype: file.hapi.headers['content-type'],
                destination: `${options.dest}`,
                path,
                size: fs.statSync(path).size,
            };
            resolve(fileDetails);
        });
    });
};
//# sourceMappingURL=image.js.map