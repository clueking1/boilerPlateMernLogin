const mysql = require('mysql')

if (process.env.JAWSDB_URL) {
    con = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    con = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'newPassport'
    })
}

con.connect(err => {
    if (err) {
        throw err
    }
    console.log('connected!')
})

module.exports = con