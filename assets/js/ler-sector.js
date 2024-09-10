$(document).ready(function() {
    $.ajaxSetup({
        cache: false,
    });
    var sector = $("#s").val(),
        sector_nome = $("#t").val(),
        title = $("#title").val();

    //alert(title);

    $("#sectorData")
        .html("<div class='loader'><img src='assets/img/preloader-01.gif' /></div>")
        .load("ajax/sector-load.php", "s=" + sector + "&nome=" + sector_nome + "&sigla=" + title, function() {
            // Load noticias relacionadas AJAX
            $("#relatedNewsData")
                .html(
                    "<div class='loader'><img src='assets/img/preloader-01.gif' /></div>"
                )
                .load(
                    "ajax/noticia-relacionada-sector-load.php",
                    "s=" + sector_nome,
                    function() {}
                );
        });
});