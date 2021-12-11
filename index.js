import { sftpClient, sftpConfig } from './src/sftp'
import { toCSV } from './src/mapper'

const remote = `${new Date().getTime()}.csv`

export const exportCSV = async (event) => {
    try {
        await sftpClient.connect(sftpConfig)
        await sftpClient.put(toCSV(event.queryStringParameters), remote)
        await sftpClient.end()

        return {
            statusCode: 200,
            body: JSON.stringify({
              message: `data uploaded.`,
            }),
          };
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify(error),
          };
    }
}