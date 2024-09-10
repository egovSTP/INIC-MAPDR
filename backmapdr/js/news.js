var path = null,
  num = 1,
  ext = ["jpg", "jpeg", "png", "bmp"];

$(function () {
  var titleToInsert = $("#titleToInsert"),
    dateToInsert = $("#dateToInsert"),
    resumeToInsert = $("#resumeToInsert"),
    contentToInsert = $("#contentToInsert"),
    titleToUpdate = $("#titleToUpdate"),
    dateToUpdate = $("#dateToUpdate"),
    resumeToUpdate = $("#resumeToUpdate"),
    titleToRemove = $("#titleToRemove"),
    allFields = $([])
      .add(titleToInsert)
      .add(dateToInsert)
      .add(resumeToInsert)
      .add(contentToInsert)
      .add(titleToUpdate)
      .add(dateToUpdate)
      .add(resumeToUpdate)
      .add(titleToRemove);
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
        bValid = bValid && checkLength(titleToInsert, "titulo", 3, 100, tips);
        bValid = bValid && checkLength(dateToInsert, "data", 10, 10, tips);
        bValid =
          bValid && checkLength(contentToInsert, "Conteudo", 3, 8000, tips);
        bValid = bValid && checkLength(resumeToInsert, "Resumo", 3, 8000, tips);

        if (bValid) {
          if (path == null) {
            tips.html("Deves selecionar o ficheiro primeiro.");
            bValid &= false;
          } else {
            var fx = path.split(".");
            if (!contains(ext, fx[fx.length - 1])) {
              tips.html("As extensões permitidas são: " + showExtension(ext));
              bValid &= false;
            } else {
              if (bValid) {
                checkImageDimension("pathToInsert");
                //adicionarAsync();
              }
            }
          }
        }
      },
    },
    close: function () {
      allFields.val("").removeClass("ui-state-error");
      // $("#resumeToInsert").jqteVal("");
      $("#adicionar").tooltip("close");
      $("#adicionarState").html("");
      $("#adicionarState").removeClass("ui-state-error");
      $("#noticiaContent")
        .html("<img src='images/preloader-01.gif' />")
        .load("ajax/noticia/view.php", "page=" + num, function () {
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
  $("#modificarDialogo_news").dialog({
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
        bValid = bValid && checkLength(titleToUpdate, "titulo", 3, 100, tips);
        bValid = bValid && checkLength(dateToUpdate, "data", 10, 10, tips);
        bValid = bValid && checkLength(resumeToUpdate, "resumo", 3, 8000, tips);
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
                checkImageDimension("pathToUpdate");
                modificarAsync();
              }
            }
          }
        }
      },
    },
    close: function () {
      allFields.val("").removeClass("ui-state-error");
      $("#modificar").tooltip("close");
      $("#modificarState").html("");
      $("#modificarState").removeClass("ui-state-error");
      $("#noticiaContent")
        .html("<img src='images/preloader-01.gif' />")
        .load("ajax/noticia/view.php", "page=" + num, function () {
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
  $("#visualizarDialogo").dialog({
    autoOpen: false,
    resizable: true,
    show: "clip",
    hide: "clip",
    width: "640px",
    modal: true,
    closeOnEscape: true,
    buttons: {
      Fechar: function () {
        $(this).dialog("close");
      },
    },
    close: function () { },
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
  $("#dateToInsert").datepicker();
  $("#dateToUpdate").datepicker();
  $("#noticiaContent")
    .html("<img src='images/preloader-01.gif' />")
    .load("ajax/noticia/view.php", "page=" + num, function () {
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
  $("#noticiaContent")
    .html("<img src='images/preloader-01.gif' />")
    .load("ajax/noticia/view.php", "page=" + num, function () {
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
  var title = $("#" + id + "title").val(),
    date = $("#" + id + "date").val(),
    featured = $("#" + id + "featured").val(),
    path_to_view = $("#" + id + "path_img").val(),
    categoria = $("#" + id + "category").val(),
    resume = $("#" + id + "resume").val(),
    content = $("#" + id + "content").val();
  // alert(path_to_view)
  date = formatDateFromServer(date);
  $("#idToView").val(id);
  $("#titleToView").val(title);
  $("#resumeToView").html(resume);
  $("#dateToView").val(date);
  $("#hourToView").val($("#" + id + "hour").val());
  if (featured == 1) $("#featuredToView").prop("checked", true);
  else $("#featuredToView").prop("checked", false);
  $("#pathToView").html(
    `<img src='${path_to_view}' width='580px' height='420px'/>`
  );
  $("#categoryToView").val(categoria);
  $("#contentToView").html(content);
  $("#visualizarDialogo").dialog("open");
}

function adicionar() {
  $("#adicionarDialogo").dialog("open");
  $("#categoryToInsert")
    .html("<img src='images/preloader-01.gif' />")
    .load(
      "ajax/selection/option.php",
      "tipo=tnewscategory&base=no",
      function () { }
    );
}

function adicionarAsync() {
  var date = $("#dateToInsert").val();
  date = formatDateToServer(date);
  $("#dateToInsert").val(date);
  fileInput = document.getElementById('pathToInsert');
  var file = fileInput.files[0];
  if (!file) {
    $('#adicionarState').html("Por favor, selecione uma imagem!");
    return;
  }
  convertToBase64(file, function (base64String) {
    const fileName = file.name;
    fetch('ajax/noticia/insert.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        /*
        file: base64String,
        fileName: fileName,
        name: $('#nameToInsert').val(),
        category: $('#tipoToInsert option:selected').val(),
        nid: $('#nid').val()*/
        title: $("#titleToInsert").val(),
        resume: $("#resumeToInsert").val(),
        category: $("#categoryToInsert option:selected").val(),
        contentToInsert: $("#contentToInsert").val(),
        featured: $("#featuredToInsert").is(":checked") ? 1 : 0,
        date: $("#dateToInsert").val(),
        path: base64String
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(text => {
        console.log('Resposta bruta:', text);
        try {
          const data = JSON.parse(text);
          //  $('#adicionarState').html("<p>Imagem enviada com sucesso!</p>");
          if (data.text == '1') {
            $('#adicionarState').html("<p>Os seus dados foram adicionados com êxito!</p>");
            $("#adicionarDialogo").dialog("option", "buttons", {
              Fechar: function () {
                $("#adicionarDialogo").dialog("close");
                $("#adicionarState").html("");
                $("#adicionarDialogo").dialog("option", "buttons", {
                  Cancelar: function () {
                    $(this).dialog("close");
                  },
                  Adicionar: function () {
                    var bValid = true,
                      tips = $("#adicionarState"),
                      titleToInsert = $("#titleToInsert"),
                      dateToInsert = $("#dateToInsert"),
                      resumeToInsert = $("#resumeToInsert"),
                      contentToInsert = $("#contentToInsert");
                    bValid =
                      bValid &&
                      checkLength(titleToInsert, "titulo", 3, 100, tips);
                    bValid =
                      bValid &&
                      checkLength(dateToInsert, "data", 10, 10, tips);
                    bValid =
                      bValid &&
                      checkLength(resumeToInsert, "resumo", 3, 8000, tips);
                    bValid =
                      bValid &&
                      checkLength(contentToInsert, "content", 3, 8000, tips);
                    if (bValid) {
                      if (path == null) {
                        tips.html("Deves selecionar o ficheiro primeiro.");
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
                            checkImageDimension("pathToInsert");
                          }
                        }
                      }
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
                    titleToInsert = $("#titleToInsert"),
                    dateToInsert = $("#dateToInsert"),
                    resumeToInsert = $("#resumeToInsert"),
                    contentToInsert = $("#contentToInsert");
                  bValid =
                    bValid &&
                    checkLength(titleToInsert, "titulo", 3, 100, tips);
                  bValid =
                    bValid && checkLength(dateToInsert, "data", 10, 10, tips);
                  bValid =
                    bValid &&
                    checkLength(resumeToInsert, "resumo", 3, 8000, tips);
                  bValid =
                    bValid &&
                    checkLength(contentToInsert, "content", 3, 8000, tips);
                  if (bValid) {
                    if (path == null) {
                      tips.html("Deves selecionar o ficheiro primeiro.");
                      bValid &= false;
                    } else {
                      var fx = path.split(".");
                      if (!contains(ext, fx[fx.length - 1])) {
                        tips.html(
                          "As extensões permitidas são: " + showExtension(ext)
                        );
                        bValid &= false;
                      } else {
                        if (bValid) {
                          checkImageDimension("pathToInsert");
                          //adicionarAsync();
                        }
                      }
                    }
                  }
                },
              });
            }, 1000);
          } else {
            $('#adicionarState').html("<p>Erro ao salvar a imagem:</p>" + data.text);
          }
        } catch (e) {
          $('#adicionarState').html("<p>Erro ao processar a resposta do servidor</p>");
        }
      })
      .catch(error => {
        $('#adicionarState').html("<p>Erro na requisição</p>");
      });
  });
}
function modificar_news(id) {
  var title = $("#" + id + "title").val(),
    date = $("#" + id + "date").val(),
    category = $("#" + id + "category").val(),
    featured = $("#" + id + "featured").val(),
    resume = $("#" + id + "resume").val(),
    content = $("#" + id + "content").val();
  //alert(date)
  date = formatDateFromServer(date);
  // alert(date)
  $("#idToUpdate").val(id);
  $("#titleToUpdate").val(title);
  $("#dateToUpdate").val(date);
  $("#resumeToUpdate").val(resume);
  $("#contentToUpdate").summernote("code", content);
  $("#old_pathToUpdate").val($("#" + id + "path").val());
  if (featured == 1) $("#featuredToUpdate").prop("checked", true);
  else $("#featuredToUpdate").prop("checked", false);
  $("#categoryToUpdate")
    .html("<img src='images/preloader-01.gif' />")
    .load(
      "ajax/selection/option.php",
      "tipo=tnewscategory&base=no",
      function () {
        $("#categoryToUpdate option:contains(" + category + ")").prop(
          "selected",
          true
        );
      }
    );
  $("#modificarDialogo_news").dialog("open");
}

function scheduleNewsCategory(event) { }

function modificarAsync() {
  //alert("ola");
  $("#modificarState").html("<img src='images/preloader-01.gif' />");
  var date = $("#dateToUpdate").val();
  date = formatDateToServer(date);
  var date = $("#dateToUpdate").val();
  date = formatDateToServer(date);
  $("#dateToUpdate").val(date);
  fileInput = document.getElementById('pathToUpdate');
  var file = fileInput.files[0];
  if (!file) {
    $('#modificarState').html("Por favor, selecione uma imagem!");
    return;
  }
  convertToBase64(file, function (base64String) {
    const fileName = file.name;
    var id = $("#idToUpdate").val();
    fetch('ajax/noticia/update.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: $("#idToUpdate").val(),
        title: $("#titleToUpdate").val(),
        resume: $("#resumeToUpdate").val(),
        category: $("#categoryToUpdate option:selected").val(),
        content: $("#contentToUpdate").val(),
        featured: $("#featuredToUpdate").is(":checked") ? 1 : 0,
        date: $("#dateToUpdate").val(),
        path: base64String
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(text => {
        console.log('Resposta bruta:', text);
        try {
          const data = JSON.parse(text);
          //  $('#adicionarState').html("<p>Imagem enviada com sucesso!</p>");
          if (data.text == '1') {
            $('#modificarState').html("<p>Os seus dados foram alterados com êxito!</p>");
            $("#modificarDialogo_news").dialog("option", "buttons", {
              Fechar: function () {
                $("#modificarDialogo_news").dialog("close");
                $("#modificarState").html("");
                $("#modificarDialogo_news").dialog("option", "buttons", {
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
                      bValid &&
                      checkLength(titleToUpdate, "titulo", 3, 100, tips);
                    bValid =
                      bValid && checkLength(dateToUpdate, "data", 10, 10, tips);
                    bValid =
                      bValid &&
                      checkLength(resumeToUpdate, "resumo", 3, 8000, tips);
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
                            checkImageDimension("pathToUpdate");
                            modificarAsync();
                          }
                        }
                      }
                    }
                  },
                });
              },
            });
            setTimeout(function () {
              $("#modificarDialogo_news").dialog("close");
              $("#modificarState").html("");
              $("#modificarDialogo_news").dialog("option", "buttons", {
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
                    bValid && checkLength(titleToUpdate, "titulo", 3, 100, tips);
                  bValid =
                    bValid && checkLength(dateToUpdate, "data", 10, 10, tips);
                  bValid =
                    bValid &&
                    checkLength(resumeToUpdate, "resumo", 3, 8000, tips);
                  if (bValid) {
                    if (path == null || path == "") {
                    //  modificarAsync();
                    } else {
                      var fx = path.split(".");
                      if (!contains(ext, fx[fx.length - 1])) {
                        tips.html(
                          "As extensões permitidas são: " + showExtension(ext)
                        );
                        bValid &= false;
                      } else {
                        if (bValid) {
                          checkImageDimension("pathToUpdate");
                      //    modificarAsync();
                        }
                      }
                    }
                  }
                },
              });
            }, 1000);
          } else {
            $('#adicionarState').html("<p>Erro ao salvar a imagem:</p>" + data.text);
          }
        } catch (e) {
          $('#adicionarState').html("<p>Erro ao processar a resposta do servidor</p>");
        }
      })
      .catch(error => {
        $('#adicionarState').html("<p>Erro na requisição</p>");
      });
  });


}
// funçãoconverterbase64
function convertToBase64(file, callback) {
  const reader = new FileReader();
  reader.onload = function () {
    callback(reader.result);
  };
  reader.onerror = function (error) {
    console.log('Erro ao converter para base64: ', error);
  };
  //alert(file);
  reader.readAsDataURL(file);
}