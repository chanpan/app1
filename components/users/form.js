$('#btnCreateUser').on('click',()=>{
    formUser();
    $('#show-users').hide();
});

//
formUser = function(){
    let template=`
    <br>
    <form id='form-users'>
        <div class='panel panel-primary'>
            <div class='panel-heading'>Users</div>
            <div class='panel-body'>
                
                    <div>
                        <label>Username</label>
                        <input type="text" name='username' class="form-control" id="username" placeholder="">
                    </div>
                    <div>
                        <label>Username</label>
                        <input type="password" name='password' class="form-control" id="password" placeholder="">
                    </div>
                
            </div>
            <div class='panel-footer'>
                <div>
                    <button id='btnSaveUsers' class='btn btn-primary'>Save</button>
                </div>
            </div>
        </div>
    </form>    
    `;
    $('#show-users-form').html(template);

    $('#btnSaveUsers').click(function(){
        Save();
        return false;
    });
}
function Save(){
    let knexMysql = require('../../database/KnexMysql.js');
    
    let frm = $('#form-users').serializeArray();
    let data = {};
    for(let i of frm){
        data[i.name] = i.value;
    }
    knexMysql.Create('tb_users', data).then(res=>{
        console.log(res);
        $('#form-users').hide();
        location.reload();
        ShowUser();
    });
    return false;
}