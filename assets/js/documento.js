var num = 1,
  tnews_category_id = -1;
$(document).ready(function () {
  $.fx.speeds._default = 800;
  $.ajaxSetup({
    cache: false,
  });
  /* Noticia Category Loading */
  $("#categoriaData")
    .html("<div class='loader'><img src='assets/img/preloader-01.gif' /></div>")
    .load("ajax/document_category_view.php", "", function () {});
  /* Documentos Mais Lidas */
  $("#mostViewDocs")
    .html("<div class='loader'><img src='assets/img/preloader-01.gif' /></div>")
    .load("ajax/news_most_read.php", "", function () {});
});
function categoriaUpdate(id) {
  tnews_category_id = id;
  $("#buttonContent").html($("#categoria" + (id === -1 ? 0 : id)).html());
  num = 1;
  /* Noticia Loading */
  $("#noticiaData")
    .html("<div class='loader'><img src='assets/img/preloader-01.gif' /></div>")
    .load(
      "ajax/news_front_view.php",
      "page=" + num + "&tcategoryid=" + tnews_category_id,
      function () {
        $("#pagerData")
          .html(
            "<div class='loader'><img src='assets/img/preloader-01.gif' /></div>"
          )
          .load(
            "ajax/news_front_pager.php",
            "page=" + num + "&tcategoryid=" + tnews_category_id,
            function () {}
          );
      }
    );
}
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
  $("#noticiaData")
    .html("<div class='loader'><img src='assets/img/preloader-01.gif' /></div>")
    .load(
      "ajax/news_front_view.php",
      "page=" + num + "&tcategoryid=" + tnews_category_id,
      function () {
        $("#pagerData")
          .html(
            "<div class='loader'><img src='assets/img/preloader-01.gif' /></div>"
          )
          .load(
            "ajax/news_front_pager.php",
            "page=" + num + "&tcategoryid=" + tnews_category_id,
            function () {
              $("html, body").animate({ scrollTop: 0 }, "fast");
            }
          );
      }
    );
}
