var num = 1;
$(function () {
  var titleToInsert = $("#titleToInsert"),
    dateToInsert = $("#dateToInsert"),
    resumedocToInsert = $("#resumedocToInsert"),
    titleToUpdate = $("#titleToUpdate"),
    dateToUpdate = $("#dateToUpdate"),
    resumeToUpdate = $("#resumeToUpdate"),
    titleToRemove = $("#titleToRemove"),
    allFields = $([])
      .add(titleToInsert)
      .add(resumedocToInsert)
      .add(titleToUpdate)
      .add(resumeToUpdate)
      .add(titleToRemove);

  $("#adicionarDocumentDialogo").dialog({
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
        bValid = bValid && checkLength(titleToInsert, "titulo", 3, 100, tips);
        bValid = bValid && checkLength(dateToInsert, "data", 10, 10, tips);
        bValid =
          bValid && checkLength(resumedocToInsert, "resumo", 3, 8000, tips);
        if (bValid) {
          adicionarAsync();
        }
      },
    },
    close: function () {
      allFields.val("").removeClass("ui-state-error");
      // $("#resumedocToInsert").jqteVal("");
      $("#adicionar").tooltip("close");
      $("#adicionarState").html("");
      $("#adicionarState").removeClass("ui-state-error");
      $("#documentoContent")
        .html("<img src='images/preloader-01.gif' />")
        .load("ajax/documento/view.php", "page=" + num, function () {
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
  $("#modificarDocumentDialogo").dialog({
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
        bValid = bValid && checkLength(titleToUpdate, "title", 3, 100, tips);
        bValid = bValid && checkLength(dateToUpdate, "data", 10, 10, tips);
        bValid = bValid && checkLength(resumeToUpdate, "resume", 3, 8000, tips);
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
      $("#documentoContent")
        .html("<img src='images/preloader-01.gif' />")
        .load("ajax/documento/view.php", "page=" + num, function () {
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
  //$("#resumedocToInsert").jqte();
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
  $("#documentoContent")
    .html("<img src='images/preloader-01.gif' />")
    .load("ajax/documento/view.php", "page=" + num, function () {
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
  $("#documentoContent")
    .html("<img src='images/preloader-01.gif' />")
    .load("ajax/documento/view.php", "page=" + num, function () {
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
  var date = $("#" + id + "date").val();
  date = formatDateFromServer(date);
  $("#titleToView").val($("#" + id + "title").val());
  $("#dateToView").val(date);
  $("#hourToView").val($("#" + id + "hour").val());
  $("#categoryToView").val($("#" + id + "category").val());
  $("#resumeToView").html($("#" + id + "resume").val());
  $("#visualizarDialogo").dialog("open");
}
// abrir dialog
function adicionar_documento() {
  $("#adicionarDocumentDialogo").dialog("open");
  $("#docscategoryIdToInsert")
    .html("<img src='images/preloader-01.gif' />")
    .load(
      "ajax/selection/option.php",
      "tipo=tdocscategory&base=no",
      function () {}
    );
}

function adicionarAsync() {
  var date = $("#dateToInsert").val();
  date = formatDateToServer(date);
  $("#dateToInsert").val(date);
  $("#adicionarState").html("<img src='images/preloader-01.gif' />");
  $.post(
    "ajax/documento/insert.php",
    {
      title: $("#titleToInsert").val(),
      date: $("#dateToInsert").val(),
      resume: $("#resumedocToInsert").val(),
      tdocscategoryId: $("#docscategoryIdToInsert option:selected ").val(),
    },
    function (data) {
      var result = parseInt(data.text);
      if (result > 0) {
        //alert(result);//"response" receives - whatever written in echo of above PHP script.
        $("#adicionarState").html(
          "<p>Os seus dados foram inseridos com êxito!</p>"
        );
        $("#adicionarDocumentDialogo").dialog("option", "buttons", {
          Fechar: function () {
            $("#adicionarDocumentDialogo").dialog("close");
            $("#adicionarState").html("");
            $("#adicionarDocumentDialogo").dialog("option", "buttons", {
              Cancelar: function () {
                $(this).dialog("close");
              },
              Adicionar: function () {
                // alert("entrei no ADD")
                var bValid = true,
                  tips = $("#adicionarState"),
                  titleToInsert = $("#titleToInsert"),
                  dateToInsert = $("#dateToInsert"),
                  resumedocToInsert = $("#resumedocToInsert");
                bValid =
                  bValid && checkLength(titleToInsert, "titulo", 3, 100, tips);
                bValid =
                  bValid && checkLength(dateToInsert, "data", 10, 10, tips);
                bValid =
                  bValid &&
                  checkLength(resumedocToInsert, "resumo", 3, 8000, tips);
                if (bValid) {
                  adicionarAsync();
                }
              },
            });
          },
        });
        setTimeout(function () {
          $("#adicionarDocumentDialogo").dialog("close");
          $("#adicionarState").html("");
          $("#adicionarDocumentDialogo").dialog("option", "buttons", {
            Cancelar: function () {
              $(this).dialog("close");
            },
            Adicionar: function () {
              // alert("entrei no ADD")
              var bValid = true,
                tips = $("#adicionarState"),
                titleToInsert = $("#titleToInsert"),
                dateToInsert = $("#dateToInsert"),
                resumedocToInsert = $("#resumedocToInsert");
              bValid =
                bValid && checkLength(titleToInsert, "titulo", 3, 100, tips);
              bValid =
                bValid && checkLength(dateToInsert, "data", 10, 10, tips);
              bValid =
                bValid &&
                checkLength(resumedocToInsert, "resumo", 3, 8000, tips);
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
  var date = $("#" + id + "date").val();
  date = formatDateFromServer(date);
  $("#idToUpdate").val(id);
  $("#titleToUpdate").val($("#" + id + "title").val());
  $("#dateToUpdate").val(date);
  $("#resumeToUpdate").val($("#" + id + "resume").val());
  var category = $("#" + id + "category").val();
  $("#docscategoryIdToUpdate")
    .html("<img src='images/preloader-01.gif' />")
    .load(
      "ajax/selection/option.php",
      "tipo=tdocscategory&base=no",
      function () {
        $("#docscategoryIdToUpdate option:contains(" + category + ")").prop(
          "selected",
          true
        );
      }
    );
  console.log('aux', id, date);
  $("#modificarDocumentDialogo").dialog("open");
}

function modificarAsync() {
  var date = $("#dateToUpdate").val();
  date = formatDateToServer(date);
  $("#dateToUpdate").val(date);
  $("#modificarState").html("<img src='images/preloader-01.gif' />");
  $.post(
    "ajax/documento/update.php",
    {
      id: $("#idToUpdate").val(),
      date: $("#dateToUpdate").val(),
      title: $("#titleToUpdate").val(),
      resume: $("#resumeToUpdate").val(),
      tdocscategoryId: $("#docscategoryIdToUpdate option:selected").val(),
    },
    function (data) {
      var result = parseInt(data.text);
      if (result > 0) {
        $("#modificarState").html(
          "<p>Os seus dados foram alterados com êxito!</p>"
        );
        $("#modificarDocumentDialogo").dialog("option", "buttons", {
          Fechar: function () {
            $("#modificarState").html("");
            $("#modificarDocumentDialogo").dialog("option", "buttons", {
              Cancelar: function () {
                $(this).dialog("close");
              },
              Modificar: function () {
                var bValid = true,
                  tips = $("#modificarState"),
                  titleToUpdate = $("#titleToUpdate"),
                  dateToUpdate = $("#dateToUpdate"),
                  resumeToUpdate = $("#resumeToUpdate");
                bValid =
                  bValid && checkLength(titleToUpdate, "title", 3, 100, tips);
                bValid =
                  bValid && checkLength(dateToUpdate, "data", 10, 10, tips);
                bValid =
                  bValid &&
                  checkLength(resumeToUpdate, "resume", 3, 8000, tips);
                if (bValid) {
                  modificarAsync();
                }
              },
            });
          },
        });
        setTimeout(function () {
          $("#modificarDocumentDialogo").dialog("close");
          $("#modificarState").html("");
          $("#modificarDocumentDialogo").dialog("option", "buttons", {
            Cancelar: function () {
              $(this).dialog("close");
            },
            Modificar: function () {
              var bValid = true,
                tips = $("#modificarState"),
                titleToUpdate = $("#titleToUpdate"),
                dateToUpdate = $("#dateToUpdate"),
                resumeToUpdate = $("#resumeToUpdate"),
                bValid =
                  bValid && checkLength(titleToUpdate, "title", 3, 100, tips);
              bValid =
                bValid && checkLength(dateToUpdate, "data", 10, 10, tips);
              bValid =
                bValid && checkLength(resumeToUpdate, "resume", 3, 8000, tips);
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
