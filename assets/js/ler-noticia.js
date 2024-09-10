$(document).ready(function () {
  $.ajaxSetup({
    cache: false,
  });
  $("#mostViewNews")
    .html("<div class='loader'><img src='assets/img/preloader-01.gif' /></div>")
    .load("ajax/news_most_read.php", "", function () {});
});
