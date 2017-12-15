
function ShowUser(){
    
    let knexMysql = require('../../database/KnexMysql.js');
    knexMysql.showAll('tb_users').then(res=>{
        let headerTable = "";
        let bodyTable = "";
            headerTable += `
                <div class='row' style='margin-top:10px;'>
                    <div class='col-md-8 col-sm-10'><h3>Users</h3></div>
                    <div class='col-md-4' col-sm-2><button id='btnCreateUser' class='btn btn-success'><i class='glyphicon glyphicon-plus'></i> Create</button></div>
                </div>
                <div class='table-responsive'>
                    <table class='table table-responsive'>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>password</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody id='tbody-user'></tbody>
                    </table>
                </div>
            `;
            
        for(let i of res){
            bodyTable += `
                <tr>
                    <td>${i.username}</td>
                    <td>${i.password}</td>
                    <td width='150'>
                        <button data-id='${i.user_id}' class='btn btn-info btn-sm btnEdit'><i class='glyphicon glyphicon-pencil'></i> Edit</button>
                        <button data-id='${i.user_id}' class='btn btn-danger btn-sm btnDelete'><i class='glyphicon glyphicon-trash'></i> Delet</button>
                    </td>
                </tr>
            `;
             
        }
        $('#show-users').html(headerTable);
        $('#tbody-user').html(bodyTable);

        require('./form');
    });//end call back  

}
ShowUser();

