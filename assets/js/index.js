var num = 1;
$(document).ready(function () {
  $.ajaxSetup({
    cache: false,
  });
  console.log(
    `${window.screen.width}x${window.screen.height}`,
    window.devicePixelRatio
  );
  /* News Loading */
  $("#newsData")
    .html("<div class='loader'><img src='assets/img/preloader-01.gif' /></div>")
    .load("ajax/index_front_view.php", "page=" + num, function () {
      /* $("#pagerData")
        .html(
          "<div class='loader'><img src='assets/img/preloader-01.gif' /></div>"
        )
        .load("ajax/index_front_pager.php", "page=" + num, function () {}); */
    });
  /* Jobs Loading */
  $("#jobsData")
    .html("<div class='loader'><img src='assets/img/preloader-01.gif' /></div>")
    .load("ajax/lastest_job_front_view.php", "page=1", function () {});
});
function mostrarAnteriorContent() {
  if (num != 1) {
    num = num - 1;
    mostrarContent(num);
  }
}
function mostrarProximoContent() {
  var total = $("#total").val(),
    quantidade = $("#quantidade").val(),
    group =
      total % quantidade == 0
        ? Math.floor(total / quantidade)
        : Math.floor(total / quantidade) + 1;
  if (num < group) {
    num = num + 1;
    mostrarContent(num);
  }
}
function mostrarContent(numero) {
  num = numero;
  $("#newsData")
    .html("<div class='loader'><img src='assets/img/preloader-01.gif' /></div>")
    .load("ajax/index_front_view.php", "page=" + num, function () {
      $("#pagerData")
        .html(
          "<div class='loader'><img src='assets/img/preloader-01.gif' /></div>"
        )
        .load("ajax/index_front_pager.php", "page=" + num, function () {});
    });
}
