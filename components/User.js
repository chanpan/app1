let knexMysql = require('../database/KnexMysql.js');

function ShowUser(){
    knexMysql.showAll('tb_users').then(res=>{
        let headerTable = "";
        let bodyTable = "";
            headerTable += `
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
            bodyTable += "<tr>";
            bodyTable += "<td>"+i.username+"</td>";
            bodyTable += "<td>"+i.password+"</td>";
            bodyTable += "<td></td>";
            bodyTable += "</tr>";   
        }
        $('#show-users').html(headerTable);
        $('#tbody-user').html(bodyTable);
    });  
}
ShowUser();