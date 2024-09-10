var path = null,
  ext = ["jpg", "jpeg", "png"];
$(function () {
  var num = 1,
    nameCategoriaDocumentoToInsert = $("#nameCategoriaDocumentoToInsert"),
    nameCategoriaDocumentoToUpdate = $("#nameCategoriaDocumentoToUpdate"),
    nameCategoriaDocumentoToRemove = $("#nameCategoriaDocumentoToRemove"),
    allFields = $([])
      .add(nameCategoriaDocumentoToInsert)
      .add(nameCategoriaDocumentoToUpdate)
      .add(nameCategoriaDocumentoToRemove);

  //Categoria do Documento Dialogo
  $("#adicionarCategoriaDocumentoDialogo").dialog({
    autoOpen: false,
    resizable: true,
    show: "clip",
    hide: "clip",
    modal: true,
    closeOnEscape: true,
    buttons: {
      Cancelar: function () {
        $(this).dialog("close");
      },
      Adicionar: function () {
        var bValid = true,
          tips = $("#adicionarCategoriaDocumentoState");
        allFields.removeClass("ui-state-error");
        bValid =
          bValid &&
          checkLength(
            nameCategoriaDocumentoToInsert,
            "nome do parametro",
            2,
            50,
            tips
          );
        if (bValid) {
          if (path == null) {
            tips.html("Deves selecionar o path primeiro.");
            bValid &= false;
          } else {
            var fx = path.split(".");
            if (!contains(ext, fx[fx.length - 1])) {
              tips.html("As extensões permitidas são: " + showExtension(ext));
              bValid &= false;
            } else {
              if (bValid) {
                checkIconDimension("pathToInsert");
              }
            }
          }
        }
      },
    },
    close: function () {
      allFields.val("").removeClass("ui-state-error");
      $("#adicionarCategoriaDocumento").tooltip("close");
      $("#adicionarCategoriaDocumentoState").html("");
      $("#adicionarCategoriaDocumentoState").removeClass("ui-state-error");
      $("#categoriaDocumentoContent")
        .html("<img src='images/preloader-01.gif' />")
        .load("ajax/parametro/view.php", "pattern=tdocscategory", function () {
          var total = $("#totalCategoriaDocumento").val();
          for (var i = 0; i < total; i++) {
            $("#modificarCategoriaDocumento" + i).tooltip({
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
  $("#modificarCategoriaDocumentoDialogo").dialog({
    autoOpen: false,
    resizable: true,
    show: "clip",
    hide: "clip",
    modal: true,
    closeOnEscape: true,
    buttons: {
      Cancelar: function () {
        $(this).dialog("close");
      },
      Modificar: function () {
        var bValid = true,
          tips = $("#modificarCategoriaDocumentoState");
        allFields.removeClass("ui-state-error");
        bValid =
          bValid &&
          checkLength(
            nameCategoriaDocumentoToUpdate,
            "nome do parametro",
            2,
            50,
            tips
          );
        if (bValid) {
          if (path == null || path == "") {
            modificarAsync();
          } else {
            var fx = path.split(".");
            if (!contains(ext, fx[fx.length - 1])) {
              tips.html("As extensões permitidas são: " + showExtension(ext));
              bValid &= false;
            } else {
              if (bValid) {
                checkIconDimension("pathToUpdate");
              }
            }
          }
        }
      },
    },
    close: function () {
      allFields.val("").removeClass("ui-state-error");
      $("#modificarCategoriaDocumento").tooltip("close");
      $("#modificarCategoriaDocumentoState").html("");
      $("#modificarCategoriaDocumentoState").removeClass("ui-state-error");
      $("#categoriaDocumentoContent")
        .html("<img src='images/preloader-01.gif' />")
        .load("ajax/parametro/view.php", "pattern=tdocscategory", function () {
          var total = $("#totalCategoriaDocumento").val();
          for (var i = 0; i < total; i++) {
            $("#modificarCategoriaDocumento" + i).tooltip({
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
  $("#adicionarCategoriaDocumento").tooltip({
    show: {
      effect: "blind",
      delay: 50,
    },
    hide: {
      effect: "blind",
      delay: 150,
    },
  });
  $("#categoriaDocumentoContent")
    .html("<img src='images/preloader-01.gif' />")
    .load("ajax/parametro/view.php", "pattern=tdocscategory", function () {
      var total = $("#totalCategoriaDocumento").val();
      for (var i = 0; i < total; i++) {
        $("#modificarCategoriaDocumento" + i).tooltip({
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
function adicionarCategoriaDocumento() {
  $("#adicionarCategoriaDocumentoDialogo").dialog("open");
}
function adicionarCategoriaDocumentoAsync() {
  console.log("reach addSync");
  $("#adicionarCategoriaDocumentoState").html(
    "<img src='images/preloader-01.gif' />"
  );
  var data = new FormData();
  data.append("photo", $("#pathToInsert")[0].files[0]);
  $.ajax({
    url: "ajax/parametro/upload-file.php",
    data: data,
    cache: false,
    contentType: false,
    processData: false,
    type: "POST",
    success: function (data) {
      const { result, path, error } = JSON.parse(data) || {
        result: 0,
        path: "",
        error: `Error parsing: ${data}`,
      };
      if (result === 1) {
        $.post(
          "ajax/parametro/insert.php",
          {
            path: path,
            name: $("#nameCategoriaDocumentoToInsert").val(),
            pattern: "tdocscategory",
          },
          function (data) {
            var result = parseInt(data.text);
            if (result > 0) {
              $("#adicionarCategoriaDocumentoState").html(
                "<p>Os seus dados foram adicionados com êxito!</p>"
              );
              $("#adicionarCategoriaDocumentoDialogo").dialog(
                "option",
                "buttons",
                {
                  Fechar: function () {
                    $("#adicionarCategoriaDocumentoDialogo").dialog("close");
                    $("#adicionarCategoriaDocumentoState").html("");
                    $("#adicionarCategoriaDocumentoDialogo").dialog(
                      "option",
                      "buttons",
                      {
                        Cancelar: function () {
                          $(this).dialog("close");
                        },
                        Adicionar: function () {
                          var bValid = true,
                            tips = $("#adicionarCategoriaDocumentoState");
                          allFields.removeClass("ui-state-error");
                          bValid =
                            bValid &&
                            checkLength(
                              nameCategoriaDocumentoToInsert,
                              "nome do parametro",
                              2,
                              50,
                              tips
                            );
                          if (bValid) {
                            if (path == null) {
                              tips.html("Deves selecionar o path primeiro.");
                              bValid &= false;
                            } else {
                              var fx = path.split(".");
                              if (!contains(ext, fx[fx.length - 1])) {
                                tips.html(
                                  "As extensões permitidas são: " +
                                    showExtension(ext)
                                );
                                bValid &= false;
                              } else {
                                if (bValid) {
                                  checkIconDimension("pathToInsert");
                                }
                              }
                            }
                          }
                        },
                      }
                    );
                  },
                }
              );
              setTimeout(function () {
                $("#adicionarCategoriaDocumentoDialogo").dialog("close");
                $("#adicionarCategoriaDocumentoState").html("");
                $("#adicionarCategoriaDocumentoDialogo").dialog(
                  "option",
                  "buttons",
                  {
                    Cancelar: function () {
                      $(this).dialog("close");
                    },
                    Adicionar: function () {
                      var bValid = true,
                        tips = $("#adicionarCategoriaDocumentoState");
                      allFields.removeClass("ui-state-error");
                      bValid =
                        bValid &&
                        checkLength(
                          nameCategoriaDocumentoToInsert,
                          "nome do parametro",
                          2,
                          50,
                          tips
                        );
                      if (bValid) {
                        if (path == null) {
                          tips.html("Deves selecionar o path primeiro.");
                          bValid &= false;
                        } else {
                          var fx = path.split(".");
                          if (!contains(ext, fx[fx.length - 1])) {
                            tips.html(
                              "As extensões permitidas são: " +
                                showExtension(ext)
                            );
                            bValid &= false;
                          } else {
                            if (bValid) {
                              checkIconDimension("pathToInsert");
                            }
                          }
                        }
                      }
                    },
                  }
                );
              }, 1000);
            } else {
              $("#adicionarCategoriaDocumentoState").addClass("ui-state-error");
              $("#adicionarCategoriaDocumentoState").html(
                "<p>Adição dos dados falhada!</p>"
              );
            }
          },
          "json"
        );
      } else {
        $("#adicionarCategoriaDocumentoState").html("<p>" + error + "</p>");
      }
    },
    error: function (result) {
      $("#adicionarCategoriaDocumentoState").html("<p>" + result.d + "</p>");
    },
  });
}
function modificarCategoriaDocumento(id) {
  var name = $("#" + id + "nameCategoriaDocumento").val(),
    path = $("#" + id + "pathCategoriaDocumento").val();
  $("#idCategoriaDocumentoToUpdate").val(id);
  $("#nameCategoriaDocumentoToUpdate").val(name);
  $("#pathCategoriaDocumentoToUpdate").val(path);
  $("#modificarCategoriaDocumentoDialogo").dialog("open");
}
function modificarCategoriaDocumentoAsync() {
  if (path != null && path != "") {
    $("#modificarCategoriaDocumentoState").html(
      "<img src='images/preloader-01.gif' />"
    );
    var data = new FormData();
    data.append("photo", $("#pathToUpdate")[0].files[0]);
    $.ajax({
      url: "ajax/parametro/upload-file.php",
      data: data,
      cache: false,
      contentType: false,
      processData: false,
      type: "POST",
      success: function (data) {
        const { result, path, error } = JSON.parse(data) || {
          result: 0,
          path: "",
          error: `Error parsing: ${data}`,
        };
        if (result === 1) {
          $.post(
            "ajax/parametro/update.php",
            {
              id: $("#idCategoriaDocumentoToUpdate").val(),
              path: path,
              old_path: $("#pathCategoriaDocumentoToUpdate").val(),
              name: $("#nameCategoriaDocumentoToUpdate").val(),
              pattern: "tdocscategory",
            },
            function (data) {
              var result = parseInt(data.text);
              if (result > 0) {
                $("#modificarCategoriaDocumentoState").html(
                  "<p>Os seus dados foram alterados com êxito!</p>"
                );
                $("#modificarCategoriaDocumentoDialogo").dialog(
                  "option",
                  "buttons",
                  {
                    Fechar: function () {
                      $("#modificarCategoriaDocumentoDialogo").dialog("close");
                      $("#modificarCategoriaDocumentoState").html("");
                      $("#modificarCategoriaDocumentoDialogo").dialog(
                        "option",
                        "buttons",
                        {
                          Cancelar: function () {
                            $(this).dialog("close");
                          },
                          Modificar: function () {
                            var bValid = true,
                              tips = $("#modificarCategoriaDocumentoState");
                            allFields.removeClass("ui-state-error");
                            bValid =
                              bValid &&
                              checkLength(
                                nameCategoriaDocumentoToUpdate,
                                "nome do parametro",
                                2,
                                50,
                                tips
                              );
                            if (bValid) {
                              if (path == null || path == "") {
                                modificarAsync();
                              } else {
                                var fx = path.split(".");
                                if (!contains(ext, fx[fx.length - 1])) {
                                  tips.html(
                                    "As extensões permitidas são: " +
                                      showExtension(ext)
                                  );
                                  bValid &= false;
                                } else {
                                  if (bValid) {
                                    checkIconDimension("pathToUpdate");
                                  }
                                }
                              }
                            }
                          },
                        }
                      );
                    },
                  }
                );
                setTimeout(function () {
                  $("#modificarCategoriaDocumentoDialogo").dialog("close");
                  $("#modificarCategoriaDocumentoState").html("");
                  $("#modificarCategoriaDocumentoDialogo").dialog(
                    "option",
                    "buttons",
                    {
                      Cancelar: function () {
                        $(this).dialog("close");
                      },
                      Modificar: function () {
                        var bValid = true,
                          tips = $("#modificarCategoriaDocumentoState");
                        allFields.removeClass("ui-state-error");
                        bValid =
                          bValid &&
                          checkLength(
                            nameCategoriaDocumentoToUpdate,
                            "nome do parametro",
                            2,
                            50,
                            tips
                          );
                        if (bValid) {
                          if (path == null || path == "") {
                            modificarAsync();
                          } else {
                            var fx = path.split(".");
                            if (!contains(ext, fx[fx.length - 1])) {
                              tips.html(
                                "As extensões permitidas são: " +
                                  showExtension(ext)
                              );
                              bValid &= false;
                            } else {
                              if (bValid) {
                                checkIconDimension("pathToUpdate");
                              }
                            }
                          }
                        }
                      },
                    }
                  );
                }, 1000);
              } else {
                $("#modificarCategoriaDocumentoState").addClass(
                  "ui-state-error"
                );
                $("#modificarCategoriaDocumentoState").html(
                  "<p>Modificação dos dados falhada!</p>"
                );
              }
            },
            "json"
          );
        } else {
          $("#modificarCategoriaDocumentoState").html(`<p>${error}</p>`);
        }
      },
      error: function (result) {
        $("#modificarCategoriaDocumentoState").html("<p>" + result.d + "</p>");
      },
    });
  } else {
    $("#modificarCategoriaDocumentoState").html(
      "<img src='images/preloader-01.gif' />"
    );
    $.post(
      "ajax/parametro/update.php",
      {
        id: $("#idCategoriaDocumentoToUpdate").val(),
        path: $("#pathCategoriaDocumentoToUpdate").val(),
        name: $("#nameCategoriaDocumentoToUpdate").val(),
        pattern: "tdocscategory",
      },
      function (data) {
        var result = parseInt(data.text);
        if (result > 0) {
          $("#modificarCategoriaDocumentoState").html(
            "<p>Os seus dados foram alterados com êxito!</p>"
          );
          $("#modificarCategoriaDocumentoDialogo").dialog("option", "buttons", {
            Fechar: function () {
              $("#modificarCategoriaDocumentoDialogo").dialog("close");
              $("#modificarCategoriaDocumentoState").html("");
              $("#modificarCategoriaDocumentoDialogo").dialog(
                "option",
                "buttons",
                {
                  Cancelar: function () {
                    $(this).dialog("close");
                  },
                  Modificar: function () {
                    var bValid = true,
                      tips = $("#modificarCategoriaDocumentoState");
                    allFields.removeClass("ui-state-error");
                    bValid =
                      bValid &&
                      checkLength(
                        nameCategoriaDocumentoToUpdate,
                        "nome do parametro",
                        2,
                        50,
                        tips
                      );
                    if (bValid) {
                      if (path == null || path == "") {
                        modificarAsync();
                      } else {
                        var fx = path.split(".");
                        if (!contains(ext, fx[fx.length - 1])) {
                          tips.html(
                            "As extensões permitidas são: " + showExtension(ext)
                          );
                          bValid &= false;
                        } else {
                          if (bValid) {
                            checkIconDimension("pathToUpdate");
                          }
                        }
                      }
                    }
                  },
                }
              );
            },
          });
          setTimeout(function () {
            $("#modificarCategoriaDocumentoDialogo").dialog("close");
            $("#modificarCategoriaDocumentoState").html("");
            $("#modificarCategoriaDocumentoDialogo").dialog(
              "option",
              "buttons",
              {
                Cancelar: function () {
                  $(this).dialog("close");
                },
                Modificar: function () {
                  var bValid = true,
                    tips = $("#modificarCategoriaDocumentoState");
                  allFields.removeClass("ui-state-error");
                  bValid =
                    bValid &&
                    checkLength(
                      nameCategoriaDocumentoToUpdate,
                      "nome do parametro",
                      2,
                      50,
                      tips
                    );
                  if (bValid) {
                    if (path == null || path == "") {
                      modificarAsync();
                    } else {
                      var fx = path.split(".");
                      if (!contains(ext, fx[fx.length - 1])) {
                        tips.html(
                          "As extensões permitidas são: " + showExtension(ext)
                        );
                        bValid &= false;
                      } else {
                        if (bValid) {
                          checkIconDimension("pathToUpdate");
                        }
                      }
                    }
                  }
                },
              }
            );
          }, 1000);
        } else {
          $("#modificarCategoriaDocumentoState").addClass("ui-state-error");
          $("#modificarCategoriaDocumentoState").html(
            "<p>Modificação dos dados falhada!</p>"
          );
        }
      },
      "json"
    );
  }
}
