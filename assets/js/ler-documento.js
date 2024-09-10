var num = 1,
  tdoc_category_id = $("#id").val();
$(document).ready(function () {
  $.fx.speeds._default = 800;
  $.ajaxSetup({
    cache: false,
  });
  /* doc Loading */
  $("#documento-data")
    .html("<div class='loader'><img src='assets/img/preloader-01.gif' /></div>")
    .load(
      "ajax/document_view.php",
      "page= " + num + "&tdoc_category_id=" + tdoc_category_id,
      function () {
        $("#documento-pager")
          .html(
            "<div class='loader'><img src='assets/img/preloader-01.gif' /></div>"
          )
          .load(
            "ajax/document_pager.php",
            "page=" + num + "&tdoc_category_id=" + tdoc_category_id,
            function () {}
          );
      }
    );
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
  //alert(num)
  $("#documento-data")
    .html("<div class='loader'><img src='assets/img/preloader-01.gif' /></div>")
    .load(
      "ajax/document_view.php",
      "page= " + num + "&tdoc_category_id=" + tdoc_category_id,
      function () {
        $("#documento-pager")
          .html(
            "<div class='loader'><img src='assets/img/preloader-01.gif' /></div>"
          )
          .load(
            "ajax/document_pager.php",
            "page= " + num + "&tdoc_category_id=" + tdoc_category_id,
            function () {}
          );
      }
    );
}
