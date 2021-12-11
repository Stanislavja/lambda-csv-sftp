const COLUMNS = ['FirstName', 'LastName', 'Address1', 'Address2', 'City', 'State', 'Zip']
const DELIMITER = ','

export const toCSV = (data) => {
    return `${COLUMNS.join(DELIMITER)}
    ${COLUMNS.map(column => data[column]).join(DELIMITER)}`
}