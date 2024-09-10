$(document).ready(function() {
    $.fx.speeds._default = 800;
    $.ajaxSetup({
        cache: false,
    });
    //var tutela = $("#t").val();

    $("#organization").html("<div class='loader'><img src='assets/img/preloader-01.gif' /></div>").load("ajax/organizacao-load.php", "", function() {});
});