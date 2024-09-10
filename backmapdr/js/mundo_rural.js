var num = 1;
$(function () {
  var tituloToInsert = $("#tituloToInsert"),
    dateToInsert = $("#dateToInsert"),
    resumeToInsert = $("#resumeToInsert"),
    urlToInsert = $("#videoToInsert"),
    tituloToUpdate = $("#tituloToUpdate"),
    dateToUpdate = $("#dateToUpdate"),
    resumeToUpdate = $("#resumeToUpdate"),
    videoToUpdate = $("#videoToUpdate"),
    tituloToRemove = $("#tituloToRemove"),
    allFields = $([])
      .add(tituloToInsert)
      .add(resumeToInsert)
      .add(urlToInsert)
      .add(dateToInsert)
      .add(tituloToUpdate)
      .add(resumeToUpdate)
      .add(videoToUpdate)
      .add(dateToUpdate)
      .add(tituloToRemove);

  $("#adicionarDialogo").dialog({
    autoOpen: false,
    resizable: true,
    show: "clip",
    hide: "clip",
    width: "640px",
    modal: true,
    closeOnEscape: true,
    buttons: {
      Cancelar: function () {
        $(this).dialog("close");
      },
      Adicionar: function () {
        var bValid = true,
          tips = $("#adicionarState");
        allFields.removeClass("ui-state-error");
        bValid = bValid && checkLength(tituloToInsert, "titulo", 3, 100, tips);
        bValid = bValid && checkLength(dateToInsert, "data", 10, 10, tips);
        bValid = bValid && checkLength(resumeToInsert, "resumo", 3, 8000, tips);
        bValid =
          bValid && checkLength(urlToInsert, "Url de  vídeo ", 3, 3000, tips);
        if (bValid) {
          adicionarAsync();
        }
      },
    },
    close: function () {
      allFields.val("").removeClass("ui-state-error");
      // $("#resumeToInsert").jqteVal("");
      $("#adicionar").tooltip("close");
      $("#adicionarState").html("");
      $("#adicionarState").removeClass("ui-state-error");
      $("#mundoContent")
        .html("<img src='images/preloader-01.gif' />")
        .load("ajax/mundo_rural/view.php", "page=" + num, function () {
          var total = $("#total").val();
          for (var i = 0; i < total; i++) {
            $("#modificar" + i).tooltip({
              show: {
                effect: "blind",
                delay: 50,
              },
              hide: {
                effect: "blind",
                delay: 150,
              },
            });
            $("#visualizar" + i).tooltip({
              show: {
                effect: "blind",
                delay: 50,
              },
              hide: {
                effect: "blind",
                delay: 150,
              },
            });
            $("#anexo" + i).tooltip({
              show: {
                effect: "blind",
                delay: 50,
              },
              hide: {
                effect: "blind",
                delay: 150,
              },
            });
          }
        });
    },
  });
  $("#modificarDialogo").dialog({
    autoOpen: false,
    resizable: true,
    show: "clip",
    hide: "clip",
    width: "640px",
    modal: true,
    closeOnEscape: true,
    buttons: {
      Cancelar: function () {
        $(this).dialog("close");
      },
      Modificar: function () {
        var bValid = true,
          tips = $("#modificarState");
        allFields.removeClass("ui-state-error");
        bValid = bValid && checkLength(tituloToUpdate, "titulo", 3, 100, tips);
        bValid = bValid && checkLength(dateToUpdate, "data", 10, 10, tips);
        bValid = bValid && checkLength(resumeToUpdate, "resume", 3, 8000, tips);
        bValid =
          bValid && checkLength(videoToUpdate, "url de vídeo ", 3, 3000, tips);
        videoToUpdate;
        if (bValid) {
          modificarAsync();
        }
      },
    },
    close: function () {
      allFields.val("").removeClass("ui-state-error");
      $("#modificar").tooltip("close");
      $("#modificarState").html("");
      $("#modificarState").removeClass("ui-state-error");
      $("#mundoContent")
        .html("<img src='images/preloader-01.gif' />")
        .load("ajax/mundo_rural/view.php", "page=" + num, function () {
          var total = $("#total").val();
          for (var i = 0; i < total; i++) {
            $("#modificar" + i).tooltip({
              show: {
                effect: "blind",
                delay: 50,
              },
              hide: {
                effect: "blind",
                delay: 150,
              },
            });
            $("#visualizar" + i).tooltip({
              show: {
                effect: "blind",
                delay: 50,
              },
              hide: {
                effect: "blind",
                delay: 150,
              },
            });
            $("#anexo" + i).tooltip({
              show: {
                effect: "blind",
                delay: 50,
              },
              hide: {
                effect: "blind",
                delay: 150,
              },
            });
          }
        });
    },
  });
  // vidializar dialog dialog
  $("#visualizarDialogo").dialog({
    autoOpen: false,
    resizable: true,
    show: "clip",
    hide: "clip",
    width: "580px",
    modal: true,
    closeOnEscape: true,
    buttons: {
      Fechar: function () {
        $(this).dialog("close");
      },
    },
    close: function () {},
  });
  //$("#resumeToInsert").jqte();
  //$("#resumeToUpdate").jqte();
  $("#dateToInsert").datepicker();
  $("#dateToUpdate").datepicker();
  //mostrar novamente o dialogo depois que fecha
  $("#adicionar").tooltip({
    show: {
      effect: "blind",
      delay: 50,
    },
    hide: {
      effect: "blind",
      delay: 150,
    },
  });
  $("#mundoContent")
    .html("<img src='images/preloader-01.gif' />")
    .load("ajax/mundo_rural/view.php", "page=" + num, function () {
      var total = $("#total").val();
      for (var i = 0; i < total; i++) {
        $("#modificar" + i).tooltip({
          show: {
            effect: "blind",
            delay: 50,
          },
          hide: {
            effect: "blind",
            delay: 150,
          },
        });
        $("#visualizar" + i).tooltip({
          show: {
            effect: "blind",
            delay: 50,
          },
          hide: {
            effect: "blind",
            delay: 150,
          },
        });
        $("#anexo" + i).tooltip({
          show: {
            effect: "blind",
            delay: 50,
          },
          hide: {
            effect: "blind",
            delay: 150,
          },
        });
      }
    });
});
$.ajaxSetup({
  cache: false,
});
function formatDateToServer(date) {
  var result = date.split("/");
  return result[2] + "-" + result[1] + "-" + result[0];
}
function formatDateFromServer(date) {
  var result = date.split("-");
  return result[2] + "/" + result[1] + "/" + result[0];
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
  num = numero;
  $("#mundoContent")
    .html("<img src='images/preloader-01.gif' />")
    .load("ajax/mundo_rural/view.php", "page=" + num, function () {
      var total = $("#total").val();
      for (var i = 0; i < total; i++) {
        $("#modificar" + i).tooltip({
          show: {
            effect: "blind",
            delay: 50,
          },
          hide: {
            effect: "blind",
            delay: 150,
          },
        });
        $("#visualizar" + i).tooltip({
          show: {
            effect: "blind",
            delay: 50,
          },
          hide: {
            effect: "blind",
            delay: 150,
          },
        });
        $("#anexo" + i).tooltip({
          show: {
            effect: "blind",
            delay: 50,
          },
          hide: {
            effect: "blind",
            delay: 150,
          },
        });
      }
    });
}
function visualizar(id) {
  var date = $("#" + id + "data").val();
  date = formatDateFromServer(date);
  $("#tituloToView").val($("#" + id + "titulo").val());
  $("#dateToView").val(date);
  $("#urlToView").val($("#" + id + "url").val());
  $("#resumeToView").html($("#" + id + "resume").val());
  $("#visualizarDialogo").dialog("open");
}
// abrir dialog
function adicionar() {
  $("#adicionarDialogo").dialog("open");
}
function adicionarAsync() {
  var date = $("#dateToInsert").val();
  date = formatDateToServer(date);
  $("#dateToInsert").val(date);
  $("#adicionarState").html("<img src='images/preloader-01.gif' />");
  $.post(
    "ajax/mundo_rural/insert.php",
    {
      titulo: $("#tituloToInsert").val(),
      date: $("#dateToInsert").val(),
      resume: $("#resumeToInsert").val(),
      url: $("#videoToInsert").val(),
    },
    function (data) {
      var result = parseInt(data.text);
      if (result > 0) {
        //alert(result);//"response" receives - whatever written in echo of above PHP script.
        $("#adicionarState").html(
          "<p>Os seus dados foram inseridos com êxito!</p>"
        );
        $("#adicionarDialogo").dialog("option", "buttons", {
          Fechar: function () {
            $("#adicionarDialogo").dialog("close");
            $("#adicionarState").html("");
            $("#adicionarDialogo").dialog("option", "buttons", {
              Cancelar: function () {
                $(this).dialog("close");
              },
              Adicionar: function () {
                // alert("entrei no ADD")
                var bValid = true,
                  tips = $("#adicionarState"),
                  tituloToInsert = $("#tituloToInsert"),
                  dateToInsert = $("#dateToInsert"),
                  resumeToInsert = $("#resumeToInsert"),
                  urlToInsert = $("#videoToInsert");

                bValid =
                  bValid && checkLength(tituloToInsert, "titulo", 3, 100, tips);
                bValid =
                  bValid && checkLength(dateToInsert, "data", 10, 10, tips);
                bValid =
                  bValid &&
                  checkLength(resumeToInsert, "resumo", 3, 8000, tips);
                bValid =
                  bValid &&
                  checkLength(urlToInsert, "Url de  vídeo ", 3, 3000, tips);
                if (bValid) {
                  adicionarAsync();
                }
              },
            });
          },
        });
        setTimeout(function () {
          $("#adicionarDialogo").dialog("close");
          $("#adicionarState").html("");
          $("#adicionarDialogo").dialog("option", "buttons", {
            Cancelar: function () {
              $(this).dialog("close");
            },
            Adicionar: function () {
              // alert("entrei no ADD")
              var bValid = true,
                tips = $("#adicionarState"),
                tituloToInsert = $("#tituloToInsert"),
                dateToInsert = $("#dateToInsert"),
                resumeToInsert = $("#resumeToInsert"),
                urlToInsert = $("#videoToInsert");
              bValid =
                bValid && checkLength(tituloToInsert, "titulo", 3, 100, tips);
              bValid =
                bValid && checkLength(dateToInsert, "data", 10, 10, tips);
              bValid =
                bValid && checkLength(resumeToInsert, "resumo", 3, 8000, tips);
              bValid =
                bValid &&
                checkLength(urlToInsert, "Url de  vídeo ", 3, 3000, tips);
              if (bValid) {
                adicionarAsync();
              }
            },
          });
        }, 1000);
      } else {
        $("#adicionarState").addClass("ui-state-error");
        $("#adicionarState").html("<p>Adição dados falhada!</p>");
      }
    },
    "json"
  );
}
function modificar(id) {
  var date = $("#" + id + "data").val();
  date = formatDateFromServer(date);
  $("#idToUpdate").val(id);
  $("#tituloToUpdate").val($("#" + id + "titulo").val());
  $("#videoToUpdate").val($("#" + id + "url").val());
  $("#dateToUpdate").val(date);
  $("#resumeToUpdate").val($("#" + id + "resume").val());

  $("#modificarDialogo").dialog("open");
}
function modificarAsync() {
  var date = $("#dateToUpdate").val();
  date = formatDateToServer(date);
  $("#dateToUpdate").val(date);
  $("#modificarState").html("<img src='images/preloader-01.gif' />");
  $.post(
    "ajax/mundo_rural/update.php",
    {
      id: $("#idToUpdate").val(),
      titulo: $("#tituloToUpdate").val(),
      data: $("#dateToUpdate").val(),
      resume: $("#resumeToUpdate").val(),
      url: $("#videoToUpdate").val(),
    },
    function (data) {
      var result = parseInt(data.text);

      if (result > 0) {
        $("#modificarState").html(
          "<p>Os seus dados foram alterados com êxito!</p>"
        );
        $("#modificarDialogo").dialog("option", "buttons", {
          Fechar: function () {
            $("#modificarDialogo").dialog("close");
            $("#modificarState").html("");
            $("#modificarDialogo").dialog("option", "buttons", {
              Cancelar: function () {
                $(this).dialog("close");
              },
              Modificar: function () {
                var bValid = true,
                  tips = $("#modificarState"),
                  tituloToUpdate = $("#tituloToUpdate"),
                  dateToUpdate = $("#dateToUpdate"),
                  resumeToUpdate = $("#resumeToUpdate"),
                  videoToUpdate = $("#videoToUpdate"),
                  bValid =
                    bValid &&
                    checkLength(tituloToUpdate, "titulo", 3, 100, tips);
                bValid =
                  bValid && checkLength(dateToUpdate, "data", 10, 10, tips);
                bValid =
                  bValid &&
                  checkLength(resumeToUpdate, "resume", 3, 8000, tips);
                bValid =
                  bValid &&
                  checkLength(videoToUpdate, "url de vídeo ", 3, 3000, tips);
                if (bValid) {
                  modificarAsync();
                }
              },
            });
          },
        });
        setTimeout(function () {
          $("#modificarDialogo").dialog("close");
          $("#modificarState").html("");
          $("#modificarDialogo").dialog("option", "buttons", {
            Cancelar: function () {
              $(this).dialog("close");
            },
            Modificar: function () {
              var bValid = true,
                tips = $("#modificarState"),
                tituloToUpdate = $("#tituloToUpdate"),
                dateToUpdate = $("#dateToUpdate"),
                resumeToUpdate = $("#resumeToUpdate"),
                videoToUpdate = $("#videoToUpdate"),
                bValid =
                  bValid && checkLength(tituloToUpdate, "titulo", 3, 100, tips);
              bValid =
                bValid && checkLength(dateToUpdate, "data", 10, 10, tips);
              bValid =
                bValid && checkLength(resumeToUpdate, "resume", 3, 8000, tips);
              bValid =
                bValid &&
                checkLength(videoToUpdate, "url video", 3, 3000, tips);
              if (bValid) {
                modificarAsync();
              }
            },
          });
        }, 1000);
      } else {
        $("#modificarState").addClass("ui-state-error");
        $("#modificarState").html("<p>Alteração dos dados falhou!</p>");
      }
    },
    "json"
  );
}
function scheduleDocumentCategory(event) {}
