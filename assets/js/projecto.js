$(document).ready(function() {
    $.fx.speeds._default = 800;
    $.ajaxSetup({
        cache: false,
    });
    $("#projectLoad")
      .html(
        "<div class='loader'><img src='assets/img/preloader-01.gif' /></div>"
      )
      .load("ajax/projecto-load.php", "", function () {});
});