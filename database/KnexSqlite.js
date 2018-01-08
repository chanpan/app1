const os = require("os");

const knex= ""; 

exports.ConnectDb=function(){
    knex= require('knex')({
        client: 'sqlite3',
        connection: {
          filename: os.homedir()+"/xxx/xxxx.db"  
        },
        useNullAsDefault: true
    });
}