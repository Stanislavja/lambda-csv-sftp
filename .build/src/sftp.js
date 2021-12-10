"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sftpClient = exports.sftpConfig = void 0;
const ssh2_sftp_client_1 = __importDefault(require("ssh2-sftp-client"));
exports.sftpConfig = {
    host: '127.0.0.1',
    port: 8080,
    username: 'user',
    password: 'password',
};
exports.sftpClient = new ssh2_sftp_client_1.default();
