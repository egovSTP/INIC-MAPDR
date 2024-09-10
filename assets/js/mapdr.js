var num = 1,
  tnews_category_id = -1;
$(document).ready(function () {
  $.fx.speeds._default = 800;
  $.ajaxSetup({
    cache: false,
  });
  /* Content */
  $("#content")
    .html("<div class='loader'><img src='assets/img/preloader-01.gif' /></div>")
    .load("ajax/mapdr.php", "", function () {});
});
