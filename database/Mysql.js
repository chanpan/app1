var mysql = require('mysql');
var pool = "";


exports.ConnectDb = function(data){
    return new Promise((resolve, reject) => {
        
            pool = mysql.createPool({
                connectionLimit: 10,
                host: data.host,
                user: data.username,
                password: data.password,
                database: data.dbname,
                port: data.port
            });
 
            pool.query('select 1+1 as result', function (error, results) {
                if (error)  console.log(error);;
                console.log(results); 
            });
            
        
        
    });
}

exports.User = function() {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM user', function (error, results, fields) {
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