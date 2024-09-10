var num = 1;
$(document).ready(function () {
  $.fx.speeds._default = 800;
  $("#video-play-modal").on("hidden.bs.modal", function () {
    $(`#video-play-modal-frame`).attr("src", "");
  });
  $(".panel-heading")
    .parent(".panel")
    .hover(
      function () {
        $(this).children(".collapse").collapse("show");
      },
      function () {
        $(this).children(".collapse").collapse("hide");
      }
    );
  /* Location */
  $("#locationData")
    .html("<div class='loader'><img src='assets/img/preloader-01.gif' /></div>")
    .load("ajax/mapdr-location.php", "", function () {});
  /* Contact */
  $("#contactData")
    .html("<div class='loader'><img src='assets/img/preloader-01.gif' /></div>")
    .load("ajax/mapdr-contact.php", "", function () {});
  /* Links */
  $("#linkData")
    .html("<div class='loader'><img src='assets/img/preloader-01.gif' /></div>")
    .load("ajax/mapdr-link.php", "", function () {});
  /* Footer Text */
  $("#footerTextData")
    .html("<div class='loader'><img src='assets/img/preloader-01.gif' /></div>")
    .load("ajax/mapdr-footer-text.php", "", function () {});
  $.ajaxSetup({
    cache: false,
  });
});
function openModal(id) {
  const titulo = $(`#titulo${id}`).val(),
    resume = $(`#resume${id}`).val(),
    url = $(`#url${id}`).val();
  $(`#video-play-modal-title`).html(titulo);
  $(`#video-play-modal-resume`).html(resume);
  $(`#video-play-modal-frame`).attr("src", `${url}?autoplay=1`);
  $(`#video-play-modal`).modal("show");
}