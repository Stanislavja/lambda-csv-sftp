import { Handler } from 'aws-lambda'
import { sftpClient, sftpConfig } from './sftp'

const delimiter = ','
const remote = `${new Date().getTime()}.csv`

export const exportCSV: Handler = async (event) => {
    try {
        const data = `${Object.keys(event.queryStringParameters).join(delimiter)}
        ${Object.values(event.queryStringParameters).join(delimiter)}`

        await sftpClient.connect(sftpConfig)
        await sftpClient.put(data, remote)
        await sftpClient.end()

        return {
            statusCode: 200,
            body: JSON.stringify({
              message: `${Object.values(event.queryStringParameters).join(delimiter)} uploaded.`,
            }),
          };
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify(error),
          };
    }
}