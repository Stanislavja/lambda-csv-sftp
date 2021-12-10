"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportCSV = void 0;
const sftp_1 = require("./sftp");
const remote = `${new Date().getTime()}.csv`;
const exportCSV = async (event) => {
    console.log(event, event.query);
    const data = 'test data';
    try {
        await sftp_1.sftpClient.connect(sftp_1.sftpConfig);
        await sftp_1.sftpClient.put(data, remote);
    }
    catch (error) {
        console.log(error);
    }
};
exports.exportCSV = exportCSV;
