import Client from 'ssh2-sftp-client'

export const sftpConfig = {
    host: '127.0.0.1',
    port: 8080,
    username: 'user',
    password: 'password',
}

export const sftpClient = new Client()