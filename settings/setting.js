var config = require("./database/Mysql");
var modal = require("./bootstrap/modal.js");
$("#btnConnectDatabase").click(function(){
   let select_db = $("#select-db").val();
   let host_name = $("#host-name").val();
   let username = $("#username").val();
   let password = $("#password").val();
   let port = $("#port").val();
   let dbname = $("#dbname").val();
   
   if(select_db != 1 && select_db != 2){ //!= mysql and != sqlite 
      // alert("กรุณาเลือกประเภทฐานข้อมูล");
        let m = modal.Modal('xxx', 'Error','กรุณาเลือกประเภทฐานข้อมูล');
        $('#showModal').html(m);
        $('#xxx').modal('show');
       return false;
   }
   if(select_db == 1){
       //mysql
       let data = {host:host_name, username:username, password:password, port:port, dbname:dbname};
        config.ConnectDb(data).then((pool)=>{
                console.log('success');
        });
   }
 
   return false;
});

$("#select-db").change(function(){
    if($(this).val() == 1){
        EnableForm();
    }else{
        DisableForm();
    }
});
function DisableForm(){
    $('#frm-setting input').prop('readonly', true);
}DisableForm();
function EnableForm(){
    $('#frm-setting input').prop('readonly', false);
}