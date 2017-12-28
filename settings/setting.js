var config = require("./database/KnexMysql");
var modal = require("./bootstrap/modal.js");

function Modal(id,title,msg) {
    let m = modal.Modal(id,title,msg);
    $('#showModal').html(m);
    $(`#${id}`).modal('show');
}
$("#btnConnectDatabase").click(function () {
    let select_db = $("#select-db").val();
    let host_name = $("#host-name").val();
    let username = $("#username").val();
    let password = $("#password").val();
    let port = $("#port").val();
    let dbname = $("#dbname").val();

    if (select_db != 1 && select_db != 2) { //!= mysql and != sqlite 
        // alert("กรุณาเลือกประเภทฐานข้อมูล");
        Modal('validationModal', 'Error', 'กรุณาเลือกประเภทฐานข้อมูล');
        return false;
    }
    if (select_db == 1) {
        //mysql
        let data = { host: host_name, username: username, password: password, port: port, dbname: dbname };
        config.Connect(data)
            .then((res) => {
                Modal('validationModalSuccess', `Success`, `เชื่อต่อสำเร็จ`);
            })
            .catch((err) => {
                Modal('validationModalError', `Error ${err.code} ${err.errno}`, err.sqlMessage);
            });

    }

    return false;
});

$("#select-db").change(function () {
    if ($(this).val() == 1) {
        EnableForm();
    } else {
        DisableForm();
    }
});
function DisableForm() {
    $('#frm-setting input').prop('readonly', true);
} DisableForm();
function EnableForm() {
    $('#frm-setting input').prop('readonly', false);
}