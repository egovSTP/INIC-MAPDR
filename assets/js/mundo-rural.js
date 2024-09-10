var num = 1;
$(document).ready(function () {
  $.fx.speeds._default = 800;
  $.ajaxSetup({
    cache: false,
  });
  /* MUNDO Loading */
  $("#mundoRuralData")
    .html("<div class='loader'><img src='assets/img/preloader-01.gif' /></div>")
    .load("ajax/mundo_rural_view.php", "page=" + num, function () {
      $("#mundoRuralPager")
        .html(
          "<div class='loader'><img src='assets/img/preloader-01.gif' /></div>"
        )
        .load("ajax/mundo_rural_pager.php", "page=" + num, function () {});
    });
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
  window.scrollTo(0, 0);
  num = numero;
  $("#mundoRuralData")
    .html("<div class='loader'><img src='assets/img/preloader-01.gif' /></div>")
    .load("ajax/mundo_rural_view.php", "page=" + num, function () {
      $("#mundoRuralPager")
        .html(
          "<div class='loader'><img src='assets/img/preloader-01.gif' /></div>"
        )
        .load("ajax/mundo_rural_pager.php", "page=" + num, function () {});
    });
}
