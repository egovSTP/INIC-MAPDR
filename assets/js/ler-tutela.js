$(document).ready(function() {
    $.fx.speeds._default = 800;
    $.ajaxSetup({
        cache: false,
    });
    var tutela = $("#t").val();
    // alert(tutela)

    $("#tutelaData")
        .html("<div class='loader'><img src='assets/img/preloader-01.gif' /></div>")
        .load("ajax/ler-tutela.php", "t=" + tutela, function() {});
});