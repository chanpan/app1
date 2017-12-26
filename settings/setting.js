let config = require("./database/Mysql");
$("#btnConnectDatabase").click(function(){
   let select_db = $("#select-db").val();
   let host_name = $("#host-name").val();
   let username = $("#username").val();
   let password = $("#password").val();
   let port = $("#port").val();
   let dbname = $("#dbname").val();
   
   if(select_db != 1){
       alert("กรุณาเลือกประเภทฐานข้อมูล");return false;
   }
   let data = {host:host_name, username:username, password:password, port:port, dbname:dbname};
   config.ConnectDb(data).then((pool)=>{
        console.log('success');
   });

   return false;
});