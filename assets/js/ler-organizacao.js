var num = 1;
$(document).ready(function () {
  $.fx.speeds._default = 800;
  $.ajaxSetup({
    cache: false,
  });
  var organizacao = $("#p").val(),
    pnome = $("#pnome").val();
  //  alert(pnome);
  $("#organizacao-data")
    .html("<div class='loader'><img src='assets/img/preloader-01.gif' /></div>")
    .load(
      "ajax/ler-organizacao-load.php",
      "p=" + organizacao + "&pnome=" + pnome,
      function () {
        $("#relatedNewsData")
          .html(
            "<div class='loader'><img src='assets/img/preloader-01.gif' /></div>"
          )
          .load(
            "ajax/noticia-relacionada-sem-categoria-load.php",
            "s=" + organizacao,
            function () {}
          );
      }
    );
  $("#mostViewNews")
    .html("<div class='loader'><img src='assets/img/preloader-01.gif' /></div>")
    .load("ajax/news_most_read.php", "", function () {});

  $("#project_id")
    .html("<div class='loader'><img src='assets/img/preloader-01.gif' /></div>")
    .load("ajax/project_front_view.php", "page=" + num, function () {});
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
