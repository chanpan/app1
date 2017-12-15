$('#btnCreateUser').on('click',()=>{
    let data = {user_id:1, username:'xxx', password:'xxxx'};
    formUser(data);
    $('#show-users').hide();
});

//
formUser = function(data){
    /**
     * data : object data = {user_id:1, username:'xxx', password:'xxxx'}
     */
    let template=`
    <br>
    <form id='form-users'>
        <div class='panel panel-primary'>
            <div class='panel-heading'>Users</div>
            <div class='panel-body'>
                    <input type='hidden' id='user_id' name='user_id' value='${data.user_id}'>
                    <div>
                        <label>Username</label>
                        <input value='${data.username}' type="text" name='username' class="form-control" id="username" placeholder="">
                    </div>
                    <div>
                        <label>Username</label>
                        <input value='${data.password}' type="password" name='password' class="form-control" id="password" placeholder="">
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
    if(data.user_id == ""){
        //create
        knexMysql.Create('tb_users', data).then(res=>{
            console.log(res);
            $('#form-users').hide();
            location.reload();
            ShowUser();
        });
    }else{
        knexMysql.Update('tb_users', data, {user_id:data.user_id}).then(res=>{
            console.log(res);
            $('#form-users').hide();
            location.reload();
            ShowUser();
        });
    }
  
    return false;
}