exports.Modal = function(attrID, modalTitle,modalBody){
 
    let modal= `
    <div id="${attrID}" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title"><div class='modal-title'>${modalTitle}</div></h4>
          </div>
          <div class="modal-body">
            <div id='modal-body'>${modalBody}</div>
          </div>
          <div class="modal-footer">
            <div id='modal-footer'>
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
   
    return modal;
}