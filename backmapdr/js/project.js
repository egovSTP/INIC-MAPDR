var num = 1;

$(function () {
  var nameenitityToInsert = $("#nameenitityToInsert"),
    siglaenitityToInsert = $("#siglaenitityToInsert"),
    nameenitityToUpdate = $("#nameenitityToUpdate"),
    siglaenitityToUpdate = $("#siglaenitityToUpdate");

  allFields = $([])
    .add(nameenitityToInsert)
    .add(siglaenitityToInsert)
    .add(nameenitityToUpdate)
    .add(siglaenitityToUpdate);

  $("#adicionarentityDialogo").dialog({
    autoOpen: false,
    resizable: true,
    show: "clip",
    hide: "clip",
    width: "500px",
    modal: true,
    closeOnEscape: true,
    buttons: {
      Cancelar: function () {
        $(this).dialog("close");
      },
      Adicionar: function () {
        var bValid = true,
          tips = $("#adicionarentityState");
        allFields.removeClass("ui-state-error");
        if (nameenitityToInsert.val() == "") {
          tips.html("O nome da Entidade não deve ser em branco.");
          nameenitityToInsert.addClass("ui-state-error");
          nameenitityToInsert.focus();
        } else if (siglaenitityToInsert.val() == "") {
          tips.html("A Sigla não deve ser em branco.");
          siglaenitityToInsert.addClass("uistate-error");
          siglaenitityToInsert.focus();
        } else {
          if (bValid) {
            adicionarEntityAsync();
          }
        }
      },
    },
    close: function () {
      allFields.val("").removeClass("ui-state-error");
      $("#adicionar").tooltip("close");
      $("#adicionarentityState").html("");
      $("#adicionarentityState").removeClass("ui-state-error");
      $("#utilizadorContent")
        .html("<img src='images/preloader-01.gif' />")
        .load("ajax/utilizador/view.php", "page=" + num, function () {
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
          }
        });
    },
  });

  $("#modificarentityDialogo").dialog({
    autoOpen: false,
    resizable: true,
    show: "clip",
    hide: "clip",
    width: "500px",
    modal: true,
    closeOnEscape: true,
    buttons: {
      Cancelar: function () {
        $(this).dialog("close");
      },
      Modificar: function () {
        var bValid = true,
          tips = $("#adicionarentityState");
        allFields.removeClass("ui-state-error");
        if (nameenitityToUpdate.val() == "") {
          tips.html("O nome da Entidade não deve ser em branco.");
          nameenitityToUpdate.addClass("ui-state-error");
          nameenitityToUpdate.focus();
        } else if (siglaenitityToUpdate.val() == "") {
          tips.html("A Sigla não deve ser em branco.");
          siglaenitityToUpdate.addClass("uistate-error");
          siglaenitityToUpdate.focus();
        } else {
          if (bValid) {
            modificaEntityAsync();
          }
        }
      },
    },
    close: function () {
      allFields.val("").removeClass("ui-state-error");
      $("#adicionar").tooltip("close");
      $("#adicionarentityState").html("");
      $("#adicionarentityState").removeClass("ui-state-error");
      $("#utilizadorContent")
        .html("<img src='images/preloader-01.gif' />")
        .load("ajax/utilizador/view.php", "page=" + num, function () {
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
          }
        });
    },
  });
  $("#visualizarDialogo").dialog({
    autoOpen: false,
    resizable: true,
    show: "clip",
    hide: "clip",
    width: "500px",
    modal: true,
    closeOnEscape: true,
    buttons: {
      Fechar: function () {
        $(this).dialog("close");
      },
    },
    close: function () {
      allFields.val("").removeClass("ui-state-error");
    },
  });

  $("#voltar").tooltip({
    show: {
      effect: "blind",
      delay: 50,
    },
    hide: {
      effect: "blind",
      delay: 150,
    },
  });
  $("#adicionarEntity").tooltip({
    show: {
      effect: "blind",
      delay: 50,
    },
    hide: {
      effect: "blind",
      delay: 150,
    },
  });
  $("#entityContent")
    .html("<img src='images/preloader-01.gif' />")
    .load(
      "ajax/entity/view.php",
      "page=" + num + "&type=projecto",
      function () {
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
          $("#conteudo" + i).tooltip({
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
      }
    );
});
$.ajaxSetup({
  cache: false,
});
//Utilizador functions
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
  var nid = $("#nid").val();
  $("#entityContent")
    .html("<img src='images/preloader-01.gif' />")
    .load("ajax/entity/view.php", "page=" + num + "&nid=" + nid, function () {
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
        $("#eliminar" + i).tooltip({
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
  var name = $("#" + id + "name").val(),
    sigla = $("#" + id + "sigla").val();
  $("#nameToView").val(name);
  $("#siglaToView").val(sigla);
  $("#visualizarDialogo").dialog("open");
}

function modificar(id) {
  var name = $("#" + id + "name").val(),
    sigla = $("#" + id + "sigla").val();

  //  alert(tipo)
  $("#identidadeToUpdate").val(id);
  $("#nameenitityToUpdate").val(name);
  $("#siglaenitityToUpdate").val(sigla);

  $("#modificarentityDialogo").dialog("open");
}

function modificaEntityAsync() {
  $("#modificarentityState").html("<img src='images/preloader-01.gif' />");
  $.post(
    "ajax/entity/update.php",
    {
      name: $("#nameenitityToUpdate").val(),
      sigla: $("#siglaenitityToUpdate").val(),
      id: $("#identidadeToUpdate").val(),
    },
    function (data) {
      var result = parseInt(data.text);
      if (result > 0) {
        $("#modificarentityState").html(
          "<p>Os seus dados foram Modificar com êxito!</p>"
        );
        $("#entityContent")
          .html("<img src='images/preloader-01.gif' />")
          .load(
            "ajax/entity/view.php",
            "page=" + num + "&type=projecto",
            function () {}
          );
        $("#modificarentityDialogo").dialog("option", "buttons", {
          Fechar: function () {
            $("#adicionarentityDialogo").dialog("close");
            $("#adicionarentityState").html("");
            $("#adicionarentityDialogo").dialog("option", "buttons", {
              Cancelar: function () {
                $(this).dialog("close");
              },
              Modificar: function () {
                var bValid = true,
                  tips = $("#modificarentityState"),
                  nameenitityToUpdate = $("#nameenitityToUpdate");
                bValid =
                  bValid &&
                  checkLength(
                    nameenitityToUpdate,
                    "nome da Entidade",
                    2,
                    50,
                    tips
                  );
                siglaenitityToUpdate = $("#siglaenitityToInsert");
                bValid =
                  bValid &&
                  checkLength(
                    siglaenitityToUpdate,
                    "nome da Sigla",
                    2,
                    10,
                    tips
                  );
                if (bValid) {
                  modificaEntityAsync();
                }
              },
            });
          },
        });
        setTimeout(function () {
          $("#modificarentityDialogo").dialog("close");
          $("#modificarentityState").html("");
          $("#modificarentityDialogo").dialog("option", "buttons", {
            Cancelar: function () {
              $(this).dialog("close");
            },
            Modificar: function () {
              var bValid = true,
                tips = $("#modificarentityState"),
                nameenitityToUpdate = $("#nameenitityToUpdate");
              bValid =
                bValid &&
                checkLength(
                  nameenitityToUpdate,
                  "nome da Entidade",
                  2,
                  50,
                  tips
                );
              siglaenitityToUpdate = $("#siglaenitityToInsert");
              bValid =
                bValid &&
                checkLength(siglaenitityToUpdate, "nome da Sigla", 2, 10, tips);
              if (bValid) {
                modificaEntityAsync();
              }
            },
          });
        }, 1000);
      } else {
        $("#modificarentityState").addClass("ui-state-error");
        $("#modificarentityState").html("<p>Adição dos dados falhada!</p>");
      }
    },
    "json"
  );
}

function adicionarEntidade() {
  $("#adicionarentityDialogo").dialog("open");
}

function adicionarEntityAsync() {
  var type = "projecto";
  $("#adicionarentityState").html("<img src='images/preloader-01.gif' />");
  $.post(
    "ajax/entity/insert.php",
    {
      name: $("#nameenitityToInsert").val(),
      sigla: $("#siglaenitityToInsert").val(),
      tipo: type,
    },
    function (data) {
      var result = parseInt(data.text);
      if (result > 0) {
        $("#adicionarentityState").html(
          "<p>Os seus dados foram adicionados com êxito!</p>"
        );
        $("#entityContent")
          .html("<img src='images/preloader-01.gif' />")
          .load(
            "ajax/entity/view.php",
            "page=" + num + "&type=projecto",
            function () {}
          );
        $("#adicionarentityDialogo").dialog("option", "buttons", {
          Fechar: function () {
            $("#adicionarentityDialogo").dialog("close");
            $("#adicionarentityState").html("");
            $("#adicionarentityDialogo").dialog("option", "buttons", {
              Cancelar: function () {
                $(this).dialog("close");
              },
              Adicionar: function () {
                var bValid = true,
                  tips = $("#adicionarentityState"),
                  nameenitityToInsert = $("#nameenitityToInsert");
                bValid =
                  bValid &&
                  checkLength(
                    nameenitityToInsert,
                    "nome da Entidade",
                    2,
                    50,
                    tips
                  );
                siglaenitityToInsert = $("#siglaenitityToInsert");
                bValid =
                  bValid &&
                  checkLength(
                    siglaenitityToInsert,
                    "nome da Sigla",
                    2,
                    10,
                    tips
                  );
                if (bValid) {
                  adicionarEntityAsync();
                }
              },
            });
          },
        });
        setTimeout(function () {
          $("#adicionarentityDialogo").dialog("close");
          $("#adicionarentityState").html("");
          $("#adicionarentityDialogo").dialog("option", "buttons", {
            Cancelar: function () {
              $(this).dialog("close");
            },
            Adicionar: function () {
              var bValid = true,
                tips = $("#adicionarentityState"),
                tips = $("#adicionarentityState"),
                nameenitityToInsert = $("#nameenitityToInsert");
              bValid =
                bValid &&
                checkLength(
                  nameenitityToInsert,
                  "nome da Entidade",
                  2,
                  50,
                  tips
                );
              siglaenitityToInsert = $("#siglaenitityToInsert");
              bValid =
                bValid &&
                checkLength(siglaenitityToInsert, "nome da Sigla", 2, 10, tips);
              if (bValid) {
                adicionarEntityAsync();
              }
            },
          });
        }, 1000);
      } else {
        $("#adicionarentityState").addClass("ui-state-error");
        $("#adicionarentityState").html("<p>Adição dos dados falhada!</p>");
      }
    },
    "json"
  );
}
