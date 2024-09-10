var path = null,
  num = 1,
  ext = ["jpg", "jpeg", "png", "bmp"];

$(function () {
  var nameToInsert = $("#nameToInsert"),
    surnameToInsert = $("#surnameToInsert"),
    curriculumToInsert = $("#curriculumToInsert"),
    roleToInsert = $("#roleToInsert"),
    nameToUpdate = $("#nameToUpdate"),
    allFields = $([])
      .add(nameToInsert)
      .add(surnameToInsert)
      .add(curriculumToInsert)
      .add(nameToUpdate)
      .add(roleToInsert);
  $(".summernote").summernote({
    height: 120,
    toolbar: [
      ["font", ["strikethrough", "superscript", "subscript"]],
      /* ["fontsize", ["fontsize"]], */
      ["font", ["bold", "underline", "clear"]],
      ["color", ["color"]],
      ["para", ["ul", "ol", "paragraph"]],
      ["table", ["table"]],
      ["insert", ["link"]],
      ["view", ["codeview"]],
    ],
    callbacks: {
      onPaste: function (e) {
        if (document.queryCommandSupported("insertText")) {
          var text = $(e.currentTarget).html();
          var bufferText = (
            (e.originalEvent || e).clipboardData || window.clipboardData
          ).getData("Text");

          setTimeout(function () {
            document.execCommand("insertText", false, bufferText);
          }, 10);
          e.preventDefault();
        } else {
          //IE
          var text = window.clipboardData.getData("text");
          if (trap) {
            trap = false;
          } else {
            trap = true;
            setTimeout(function () {
              document.execCommand("paste", false, text);
            }, 10);
            e.preventDefault();
          }
        }
      },
    },
  });

  var id = $("#eid").val();

  $("#adicionarDialogo").dialog({
    autoOpen: false,
    resizable: true,
    show: "clip",
    hide: "clip",
    width: "650px",
    modal: true,
    closeOnEscape: true,
    buttons: {
      Cancelar: function () {
        $(this).dialog("close");
      },
      Adicionar: function () {
        var bValid = true,
          tips = $("#adicionarState"),
          bValid = bValid && checkLength(nameToInsert, "Nome", 1, 255, tips);
        bValid =
          bValid && checkLength(surnameToInsert, "Apelido", 3, 255, tips);
        if (path == null) {
          tips.html("Deves Selecionar uma Foto Primeiro");
          bValid = false;
        }
        if (bValid) {
          adicionar_membroAsync();
        }
      },
    },
    close: function () {
      allFields.val("").removeClass("ui-state-error");
      $("#adicionar").tooltip("close");
      $("#adicionarState").html("");
      $("#adicionarState").removeClass("ui-state-error");
      var nid = $("#nid").val();
      $("#membroContent")
        .html("<img src='images/preloader-01.gif' />")
        .load("ajax/membro/view.php", "page=" + num + "&id=" + id, function () {
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
    },
  });
  $("#modificarDialogo").dialog({
    autoOpen: false,
    resizable: true,
    show: "clip",
    hide: "clip",
    width: "650px",
    modal: true,
    closeOnEscape: true,
    buttons: {
      Cancelar: function () {
        $(this).dialog("close");
      },
      Modificar: function () {
        var bValid = true,
          tips = $("#modificarState"),
          nameToUpdate = $("#nameToUpdate"),
          surnameToUpdate = $("#surnameToUpdate");
        bValid = bValid && checkLength(nameToUpdate, "nome", 3, 255, tips);
        bValid =
          bValid && checkLength(surnameToUpdate, "Apelido", 3, 255, tips);
        if (bValid) {
          modificar_membroAsync();
        }
      },
    },
    close: function () {
      allFields.val("").removeClass("ui-state-error");
      $("#modificar").tooltip("close");
      $("#modificarState").html("");
      $("#modificarState").removeClass("ui-state-error");
      //  var nid = $("#nid").val();
      $("#membroContent")
        .html("<img src='images/preloader-01.gif' />")
        .load(
          "ajax/membro/view.php",
          "id=" + id + "&page=" + num,
          function () {}
        );
    },
  });
  $("#visualizarDialogo").dialog({
    autoOpen: false,
    resizable: true,
    show: "clip",
    hide: "clip",
    modal: true,
    width: "640px",
    closeOnEscape: true,
    buttons: {
      Fechar: function () {
        $(this).dialog("close");
      },
    },
    close: function () {},
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
  $("#tabs").tabs();
  $("#membroContent")
    .html("<img src='images/preloader-01.gif' />")
    .load("ajax/membro/view.php", "id=" + id + "&page=" + num, function () {});
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
  $("#noticiaAnexoContent")
    .html("<img src='images/preloader-01.gif' />")
    .load(
      "ajax/noticia_anexo/view.php",
      "page=" + num + "&nid=" + nid,
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
      }
    );
}

function adicionar() {
    $("#adicionarDialogo").dialog("open");
}
//inicio
function adicionar_membroAsync() {
  $("#adicionarState").html("<img src='images/preloader-01.gif' />");
  var data = new FormData();
  data.append("photo", $("#pathToInsert")[0].files[0]);
  $.ajax({
    url: "ajax/entity/upload-file.php",
    data: data,
    cache: false,
    contentType: false,
    processData: false,
    type: "POST",
    success: function (result) {
      var r = result.replace("{", "");
      r = r.replace("}", "");
      var fs = r.split("|");
      var count_file = fs.length;
      for (var i = 1; i < count_file; i++) {
        var file = fs[i];
        if (file.length > 6) {
          file = file.substring(8, file.length);
          var index = file.indexOf('"');
          if (index > 0) file = file.substring(0, file.length - 1);
          $("#adicionarState").html(
            '<img src="images/preloader-01.gif" style="border: hidden"/>'
          );
          //     alert(file)

          $.post(
            "ajax/membro/insert.php",
            {
              id: $("#eid").val(),
              nameToInsert: $("#nameToInsert").val(),
              surnameToInsert: $("#surnameToInsert").val(),
              curriculumToInsert: $("#curriculumToInsert").val(),
              roleToInsert: $("#roleToInsert").val(),
              path: file,
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
                          nameToInsert = $("#nameToInsert"),
                          surnameToInsert = $("#surnameToInsert"),
                          curriculumToInsert = $("#curriculumToInsert");
                        bValid =
                          bValid &&
                          checkLength(nameToInsert, "Nome", 3, 255, tips);
                        bValid =
                          bValid &&
                          checkLength(
                            surnameToInsert,
                            "Apelido",
                            5,
                            1000,
                            tips
                          );
                        bValid =
                          bValid &&
                          checkLength(
                            curriculumToInsert,
                            "curriculum",
                            3,
                            8000,
                            tips
                          );
                        if (path == null) {
                          tips.html("Deves Selecionar uma Foto Primeiro");
                          bValid = false;
                        }
                        if (bValid) {
                          adicionar_membroAsync();
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
                      var bValid = true,
                        tips = $("#adicionarState"),
                        nameToInsert = $("#nameToInsert"),
                        surnameToInsert = $("#surnameToInsert"),
                        curriculumToInsert = $("#curriculumToInsert");
                      bValid =
                        bValid &&
                        checkLength(nameToInsert, "Nome", 3, 255, tips);
                      bValid =
                        bValid &&
                        checkLength(surnameToInsert, "Apelido", 5, 1000, tips);
                      bValid =
                        bValid &&
                        checkLength(
                          curriculumToInsert,
                          "curriculum",
                          3,
                          8000,
                          tips
                        );
                      if (path == null) {
                        tips.html("Deves Selecionar uma Foto Primeiro");
                        bValid = false;
                      }
                      if (bValid) {
                        adicionar_membroAsync();
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
        } else
          $("#adicionarState").html("<p>Formato de imagem não suportado!</p>");
      }
    },
    error: function (result) {
      $("#adicionarState").html("<p>" + result.d + "</p>");
    },
  });
}

function visualizar(id) {
  var name = $("#" + id + "name").val(),
    surname = $("#" + id + "surname").val(),
    curriculum = $("#" + id + "curriculum").val(),
    role = $("#" + id + "role").val(),
    foto = $("#" + id + "foto").val();
  $("#nameToView").val(name);
  $("#surnameToView").val(surname);
  $("#roleToView").val(role);
  $("#curriculumToView").html(curriculum);
  $("#pathToView").html(`<img src='${foto}' width='580px' height='420px'/>`);
  $("#visualizarDialogo").dialog("open");
}

function modificar_membro(id) {
  var name = $("#" + id + "name").val(),
    surname = $("#" + id + "surname").val(),
    role = $("#" + id + "role").val(),
    curriculum = $("#" + id + "curriculum").val(),
    foto = $("#" + id + "foto").val();
  console.log("aux", curriculum);
  $("#old_path").val(foto);
  $("#idToUpdate").val(id);
  $("#nameToUpdate").val(name);
  $("#surnameToUpdate").val(surname);
  $("#roleToUpdate").val(role);
  $("#curriculumToUpdate").summernote("code", curriculum);
  $("#modificarDialogo").dialog("open");
}

function modificar_membroAsync() {
  $("#modificarState").html("<img src='images/preloader-01.gif' />");
  if (path != null && path != "") {
    var data = new FormData();
    data.append("photo", $("#pathToUpdate")[0].files[0]);
    $.ajax({
      url: "ajax/content/upload-upd-file.php",
      data: data,
      cache: false,
      contentType: false,
      processData: false,
      type: "POST",
      success: function (result) {
        //    alert(result);
        var r = result.replace("{", "");
        r = r.replace("}", "");
        var fs = r.split("|");
        var count_file = fs.length;
        for (var i = 0; i < count_file; i++) {
          var file = fs[i];
          if (file.length > 6) {
            file = file.substring(8, file.length);
            var index = file.indexOf('"');
            if (index > 0) file = file.substring(0, file.length - 1);
            $("#modificarState").html(
              '<img src="images/preloader-01.gif" style="border: hidden"/>'
            );
            //   alert(file + " sfdsfs" + $("#old_path").val())
            $.post(
              "ajax/membro/update.php",
              {
                id: $("#idToUpdate").val(),
                nameToUpdate: $("#nameToUpdate").val(),
                surnameToUpdate: $("#surnameToUpdate").val(),
                curriculumToUpdate: $("#curriculumToUpdate").val(),
                roleToUpdate: $("#roleToUpdate").val(),
                path: file,
                old_path: $("#old_path").val(),
              },
              function (data) {
                var result = parseInt(data.text);
                if (result > 0) {
                  //alert(result);//"response" receives - whatever written in echo of above PHP script.
                  $("#modificarState").html(
                    "<p>Os seus dados foram Alterado com êxito!</p>"
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
                          // alert("entrei no ADD")
                          var bValid = true,
                            tips = $("#modificarState"),
                            nameToUpdate = $("#nameToUpdate"),
                            surnameToUpdate = $("#surnameToUpdate"),
                            bValid =
                              bValid &&
                              checkLength(nameToUpdate, "Nome", 3, 255, tips);
                          bValid =
                            bValid &&
                            checkLength(
                              surnameToUpdate,
                              "Apelido",
                              5,
                              1000,
                              tips
                            );

                          if (bValid) {
                            modificar_membroAsync();
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
                          nameToUpdate = $("#nameToUpdate"),
                          surnameToUpdate = $("#surnameToUpdate"),
                          bValid =
                            bValid &&
                            checkLength(nameToUpdate, "Nome", 3, 255, tips);
                        bValid =
                          bValid &&
                          checkLength(
                            surnameToUpdate,
                            "Apelido",
                            5,
                            1000,
                            tips
                          );

                        if (bValid) {
                          modificar_membroAsync();
                        }
                      },
                    });
                  }, 1000);
                } else {
                  $("#modificarState").addClass("ui-state-error");
                  $("#modificarState").html("<p>Adição dados falhada!</p>");
                }
              },
              "json"
            );
          } else
            $("#modificarState").html(
              "<p>Formato de imagem não suportado!</p>"
            );
        }
      },
      error: function (result) {
        $("#modificarState").html("<p>" + result.d + "</p>");
      },
    });
  } else {
    //   alert("entrie no else" + $("#idToUpdate").val())

    $.post(
      "ajax/membro/update.php",
      {
        id: $("#idToUpdate").val(),
        nameToUpdate: $("#nameToUpdate").val(),
        surnameToUpdate: $("#surnameToUpdate").val(),
        curriculumToUpdate: $("#curriculumToUpdate").val(),
        roleToUpdate: $("#roleToUpdate").val(),
        path: $("#old_path").val(),
        old_path: $("#old_path").val(),
      },
      function (data) {
        var result = parseInt(data.text);
        if (result > 0) {
          //alert(result);//"response" receives - whatever written in echo of above PHP script.
          $("#modificarState").html(
            "<p>Os seus dados foram Alterado com êxito!</p>"
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
                  // alert("entrei no ADD")
                  var bValid = true,
                    tips = $("#modificarState"),
                    nameToUpdate = $("#nameToUpdate"),
                    surnameToUpdate = $("#surnameToUpdate"),
                    bValid =
                      bValid && checkLength(nameToUpdate, "Nome", 3, 255, tips);
                  bValid =
                    bValid &&
                    checkLength(surnameToUpdate, "Apelido", 5, 1000, tips);

                  if (bValid) {
                    modificar_membroAsync();
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
                  nameToUpdate = $("#nameToUpdate"),
                  surnameToUpdate = $("#surnameToUpdate"),
                  bValid =
                    bValid && checkLength(nameToUpdate, "Nome", 3, 255, tips);
                bValid =
                  bValid &&
                  checkLength(surnameToUpdate, "Apelido", 5, 1000, tips);

                if (bValid) {
                  modificar_membroAsync();
                }
              },
            });
          }, 1000);
        } else {
          $("#modificarState").addClass("ui-state-error");
          $("#modificarState").html("<p>Adição dados falhada!</p>");
        }
      },
      "json"
    );
  }
}

function scheduleNewsFileCategory(event) {}
