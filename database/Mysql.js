var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: '127.0.0.1',
    user: 'root',
    password: 'Chanpan!((#',
    database: 'demo'
});

exports.User = function() {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM tb_users', function (error, results, fields) {
            if (error) reject(error);
            resolve(results);           
        });
    });
}

exports.CreateUser = function(value) {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO tb_users SET ? ',value, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);           
        });
    });
}