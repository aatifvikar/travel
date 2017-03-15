

$(document).ready(function() {
//Checking if the user has clicked on launch-modal class and checks the attribute data and appends it in the modal title. 
   $(".launch-modal").click(function(e){
        $('#modal-title').html($(this).attr('data'));
        $("#myModal").modal('show');
    });
});