var knex = "";
exports.Connect=function(data){
    knex = require('knex')({
        client: 'mysql',
        connection: {
            host: data.host,
            user: data.username,
            password: data.password,
            database: data.dbname,
            port:data.port
        },
        pool: { min: 0, max: 7 }
    });
    return new Promise((resolve, reject) => {
        TestConnect()
            .then(res=>resolve(res))
            .catch(err=>reject(err));
    });
    
}
function TestConnect() {
    return new Promise((resolve, reject) => {
        knex.raw('select 1+1 as result').then(function (res) {
            resolve(res)
        }).catch(err=>reject(JSON.parse(JSON.stringify(err))));
    });
}
exports.showAll = function (tables) {
    /** 
      * tables : string  example  'tb_users'
    */
    return new Promise((resolve, reject) => {
        knex.select('*').from(tables)
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
}
exports.showOne = function (params = '', tables, wheres) {
    /** 
      * params : string example 'fname, lname'
      * tables  : string example 'users'
      * wheres :  object example {id:1}
    */
    var p = params || "*";
    return new Promise((resolve, reject) => {
        knex.select(p).from(tables).where(wheres)
            .map(res => resolve(res))
            .catch(err => reject(err));
    });
}
exports.Create = function (tables,data) {
    /** 
      * data : object example {fname:'nuttaphon' , lname:'chanpan'}
      * table : string
    */
    return new Promise((resolve, reject) => {
        knex.insert(data).into(tables)
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
}
exports.Update = function (tables, data, wheres) {
    /**
     * tables : string
     * data : object example {username:'user',password:'user'} 
     * wheres : object example {id:1}
     */
    return new Promise((resolve, reject) => {
        knex.update(data).from(tables).where(wheres)
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
}
exports.Delete = function(tables, wheres){
    /**
     * tables : string example 'tb_users'
     * wheres : object example  {id:1}
     */
    return new Promise((resolve, reject) => {
        knex.from(tables).where(wheres).del()
            .then(res=>resolve(res))
            .catch(err=>reject(err));
    }); 
 
}


// get service
exports.GetService = function(url, data){
    /**
     * url : string example https://xxx.av
     * data : object example { name: "John", time: "2pm" }
     */
   
        return new Promise((resolve, reject) => {
            $.get(url,data,function(res){
                resolve(res);
            });    
        });
    
}

// post service
exports.PostService = function(url, data){
    /**
     * url : string example https://xxx.av
     * data : object example { name: "John", time: "2pm" }
     */
    return new Promise((resolve, reject) => {
        $.post(url,data,function(res){
       
            resolve(res);
        });
    });
}