$(document).ready(function() {
 
   $(".button-click").click(function(e){
        $('#modal-title').html($(this).attr('data'));
        $("#myModal").modal('show');
    });
});