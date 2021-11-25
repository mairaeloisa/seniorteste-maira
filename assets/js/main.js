$(document).ready(function() {

    $('.link-tab').click(function(event){
        event.preventDefault();
        $('.solution-box_icon').removeClass('active');
        $(this).parent().addClass('active');
        var getId = $(this).attr('id');
        $('.container-box-tabs-info').removeClass('active');
        $('.'+getId).addClass('active');
    });
});
