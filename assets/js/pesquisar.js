var tnews_num = 1,
  tdocs_num = 1,
  word = $("#word").val();
$(document).ready(function () {
  $.fx.speeds._default = 800;
  $.ajaxSetup({
    cache: false,
  });
  /* News Loading */
  $("#noticia-data")
    .html("<div class='loader'><img src='assets/img/preloader-01.gif' /></div>")
    .load(
      "ajax/search-news-data.php",
      "page=" + tnews_num + "&word=" + word,
      function () {
        var total = $("#totalNoticias").val();
        if (total > 0) {
          $("#noticia-page")
            .html(
              "<div class='loader'><img src='assets/img/preloader-01.gif' /></div>"
            )
            .load(
              "ajax/search-page.php",
              "page=" + tnews_num + "&total=" + total,
              function () {}
            );
        }
      }
    );
  /* Docs Loading */
  $("#documento-data")
    .html("<div class='loader'><img src='assets/img/preloader-01.gif' /></div>")
    .load(
      "ajax/search-docs-data.php",
      "page=" + tdocs_num + "&word=" + word,
      function () {
        var total = $("#totalDocumento").val();
        if (total > 0) {
          $("#documento-page")
            .html(
              "<div class='loader'><img src='assets/img/preloader-01.gif' /></div>"
            )
            .load(
              "ajax/search-page.php",
              "page=" + tdocs_num + "&total=" + total,
              function () {}
            );
        }
      }
    );
  /* Mundo Loading */
  $("#rural-data")
    .html("<div class='loader'><img src='assets/img/preloader-01.gif' /></div>")
    .load(
      "ajax/search-rural-data.php",
      "page=" + tdocs_num + "&word=" + word,
      function () {
        var total = $("#totalRural").val();
        if (total > 0) {
          $("#rural-page")
            .html(
              "<div class='loader'><img src='assets/img/preloader-01.gif' /></div>"
            )
            .load(
              "ajax/search-page.php",
              "page=" + tdocs_num + "&total=" + total,
              function () {}
            );
        }
      }
    );
});
