var path = null,
    num = 1,
    id_team = 0;
  ext_image = ["jpg", "jpeg", "png", "bmp"],
  ext_pdf = ["pdf"];
$(function () {
    var team_imagethToInsert = $("#team_imageToInsert"),
        allFields = $([]).add(team_imagethToInsert)
    $("#fotoequipaDialogo").dialog({
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
        tips = $("#adicionarteamState"),
            //  tipo = $("#tipoToInsert option:selected").text();
            tipo = "Imagem";
    //    bValid = bValid && checkLength(nameToInsert, "nome", 3, 100, tips);
        if (bValid) {
          if (path == null) {
            tips.html("Deves selecionar o path primeiro.");
            bValid &= false;
          } else {
            var fx = path.split(".");
            switch (tipo) {
              case "PDF":
                if (!contains(ext_pdf, fx[fx.length - 1])) {
                  tips.html(
                    "As extensões permitidas são: " + showExtension(ext_pdf)
                  );
                  bValid &= false;
                }
                break;
              case "Imagem":
                if (!contains(ext_image, fx[fx.length - 1])) {
                  tips.html(
                    "As extensões permitidas são: " + showExtension(ext_image)
                  );
                  bValid &= false;
                }
                break;
              case "Video":
                if (!contains(ext_video, fx[fx.length - 1])) {
                  tips.html(
                    "As extensões permitidas são: " + showExtension(ext_video)
                  );
                  bValid &= false;
                }
                break;
            }
            if (bValid) {
              adicionarAsync();
            }
          }
        }
      },
    },
    close: function () {
      allFields.val("").removeClass("ui-state-error");
      $("#adicionar").tooltip("close");
      $("#adicionarteamState").html("");
      $("#adicionarteamState").removeClass("ui-state-error");
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
    },
  });
  $("#modificarDialogo").dialog({
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
          tips = $("#modificarState"),
          tipo = $("#tipoToUpdate option:selected").text();
        bValid = bValid && checkLength(nameToUpdate, "nome", 3, 100, tips);
        if (bValid) {
          if (path == null || path == "") {
            modificarAsync();
          } else {
            var fx = path.split(".");
            switch (tipo) {
              case "PDF":
                if (!contains(ext_pdf, fx[fx.length - 1])) {
                  tips.html(
                    "As extensões permitidas são: " + showExtension(ext_pdf)
                  );
                  bValid &= false;
                }
                break;
              case "Imagem":
                if (!contains(ext_image, fx[fx.length - 1])) {
                  tips.html(
                    "As extensões permitidas são: " + showExtension(ext_image)
                  );
                  bValid &= false;
                }
                break;
              case "Video":
                if (!contains(ext_video, fx[fx.length - 1])) {
                  tips.html(
                    "As extensões permitidas são: " + showExtension(ext_video)
                  );
                  bValid &= false;
                }
                break;
            }
            if (bValid) {
              modificarAsync();
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
    },
  });
  $("#eliminarDialogo").dialog({
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
      Eliminar: function () {
        var bValid = true,
          tips = $("#eliminarState");
        bValid = bValid && checkLength(nameToRemove, "nome", 3, 100, tips);
        if (bValid) {
          eliminarAsync();
        }
      },
    },
    close: function () {
      allFields.val("").removeClass("ui-state-error");
      $("#eliminar").tooltip("close");
      $("#eliminarState").html("");
      $("#eliminarState").removeClass("ui-state-error");
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
function adicionar_photo(id) {
    id_team = id;
   
    $("#fotoequipaDialogo").dialog("open");
}
function adicionarAsync() {
    ///alert(id_team)
  $("#adicionarteamState").html("<img src='images/preloader-01.gif' />");
    var data = new FormData(),
        tipo = "Imagem";//$("#tipoToInsert option:selected").text();
    var data = new FormData();
    data.append("teamphoto", $("#team_imageToInsert")[0].files[0]);
   // alert(data)
  switch (tipo) {
    case "PDF":
      $.ajax({
        url: "ajax/noticia_anexo/upload-add-pdf.php",
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        type: "POST",
        success: function (result) {
          var r = result.replace("{", "");
          r = r.replace("}", "");
          var s = r.split(":");
          var fs = s[1].split("|");
          var count_file = fs.length;
          for (var i = 0; i < count_file; i++) {
            var file = fs[i];
            if (file.length > 6) {
              file = file.substring(8, file.length);
              var index = file.indexOf('"');
              if (index > 0) file = file.substring(0, file.length - 1);
              if (file == "") {
                $("#adicionarteamState").html("O ficheiro não é um PDF");
              } else {
                $("#adicionarteamState").html(
                  '<img src="images/preloader-01.gif" style="border: hidden"/>'
                );
                //alert($("#nameToInsert").val()+"----"+$("#tipoToInsert option:selected").val()+"---"+$("#nid").val()+"---"+file)
                $.post(
                  "ajax/noticia_anexo/insert.php",
                  {
                    path: file,
                    name: $("#nameToInsert").val(),
                    category: $("#tipoToInsert option:selected").val(),
                      pid: $("#idToUpdate").val(),
                  },
                  function (data) {
                    var result = parseInt(data.text);
                    //	alert("data"+result);
                    if (result == 1) {
                      $("#adicionarteamState").html(
                        "<p>Os seus dados foram adicionados com êxito!</p>"
                      );
                      $("#fotoequipaDialogo").dialog("option", "buttons", {
                        Fechar: function () {
                          $("#fotoequipaDialogo").dialog("close");
                          $("#adicionarteamState").html("");
                          $("#fotoequipaDialogo").dialog("option", "buttons", {
                            Cancelar: function () {
                              $(this).dialog("close");
                            },
                            Adicionar: function () {
                              var bValid = true,
                                tips = $("#adicionarteamState"),
                                tipo = $(
                                  "#tipoToInsert option:selected"
                                ).text(),
                                nameToInsert = $("#nameToInsert");
                              bValid =
                                bValid &&
                                checkLength(nameToInsert, "nome", 3, 100, tips);
                              if (bValid) {
                                if (path == null) {
                                  tips.html(
                                    "Deves selecionar o path primeiro."
                                  );
                                  bValid &= false;
                                } else {
                                  var fx = path.split(".");
                                  switch (tipo) {
                                    case "PDF":
                                      if (
                                        !contains(ext_pdf, fx[fx.length - 1])
                                      ) {
                                        tips.html(
                                          "As extensões permitidas são: " +
                                            showExtension(ext_pdf)
                                        );
                                        bValid &= false;
                                      }
                                      break;
                                    case "Imagem":
                                      if (
                                        !contains(ext_image, fx[fx.length - 1])
                                      ) {
                                        tips.html(
                                          "As extensões permitidas são: " +
                                            showExtension(ext_image)
                                        );
                                        bValid &= false;
                                      }
                                      break;
                                    case "Video":
                                      if (
                                        !contains(ext_video, fx[fx.length - 1])
                                      ) {
                                        tips.html(
                                          "As extensões permitidas são: " +
                                            showExtension(ext_video)
                                        );
                                        bValid &= false;
                                      }
                                      break;
                                  }
                                  if (bValid) {
                                    adicionarAsync();
                                  }
                                }
                              }
                            },
                          });
                        },
                      });
                      setTimeout(function () {
                        $("#fotoequipaDialogo").dialog("close");
                        $("#adicionarteamState").html("");
                        $("#fotoequipaDialogo").dialog("option", "buttons", {
                          Cancelar: function () {
                            $(this).dialog("close");
                          },
                          Adicionar: function () {
                            var bValid = true,
                              tips = $("#adicionarteamState"),
                              tipo = $("#tipoToInsert option:selected").text(),
                              nameToInsert = $("#nameToInsert");
                            bValid =
                              bValid &&
                              checkLength(nameToInsert, "nome", 3, 100, tips);
                            if (bValid) {
                              if (path == null) {
                                tips.html("Deves selecionar o path primeiro.");
                                bValid &= false;
                              } else {
                                var fx = path.split(".");
                                switch (tipo) {
                                  case "PDF":
                                    if (!contains(ext_pdf, fx[fx.length - 1])) {
                                      tips.html(
                                        "As extensões permitidas são: " +
                                          showExtension(ext_pdf)
                                      );
                                      bValid &= false;
                                    }
                                    break;
                                  case "Imagem":
                                    if (
                                      !contains(ext_image, fx[fx.length - 1])
                                    ) {
                                      tips.html(
                                        "As extensões permitidas são: " +
                                          showExtension(ext_image)
                                      );
                                      bValid &= false;
                                    }
                                    break;
                                  case "Video":
                                    if (
                                      !contains(ext_video, fx[fx.length - 1])
                                    ) {
                                      tips.html(
                                        "As extensões permitidas são: " +
                                          showExtension(ext_video)
                                      );
                                      bValid &= false;
                                    }
                                    break;
                                }
                                if (bValid) {
                                  adicionarAsync();
                                }
                              }
                            }
                          },
                        });
                      }, 1000);
                    } else {
                      $("#adicionarteamState").addClass("ui-state-error");
                      $("#adicionarteamState").html(result);
                    }
                  },
                  "json"
                );
              }
            }
          }
        },
        error: function (result) {
          $("#adicionarteamState").html("<p>" + result.d + "</p>");
        },
      });
          break;
       //   alert(id)
    case "Imagem":
      $.ajax({
          url: "ajax/projecto_anexo/upload-add-img.php",
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        type: "POST",
          success: function (result) {
           //   alert(result)
          if (result.length < 6) {
            $("#adicionarteamState").html("O ficheiro não é uma imagem!");
            return;
          }
          var r = result.replace("{", "");
          r = r.replace("}", "");
          var s = r.split(":");
          var fs = s[1].split("|");
          var count_file = fs.length;
          for (var i = 0; i < count_file; i++) {
            var file = fs[i];
            if (file.length > 6) {
              file = file.substring(8, file.length);
              var index = file.indexOf('"');
              if (index > 0) file = file.substring(0, file.length - 1);
              $("#adicionarteamState").html(
                '<img src="images/preloader-01.gif" style="border: hidden"/>'
                );
                
              $.post(
                "ajax/projecto_anexo/insert.php",
                {
                    path: file,
                    pid: id_team
                },
                function (data) {
                  var result = parseInt(data.text);
                  if (result == 1) {
                    $("#adicionarteamState").html(
                      "<p>Os seus dados foram adicionados com êxito!</p>"
                    );
                    $("#fotoequipaDialogo").dialog("option", "buttons", {
                      Fechar: function () {
                        $("#fotoequipaDialogo").dialog("close");
                        $("#adicionarteamState").html("");
                        $("#fotoequipaDialogo").dialog("option", "buttons", {
                          Cancelar: function () {
                            $(this).dialog("close");
                          },
                          Adicionar: function () {
                              var bValid = true,
                                  tips = $("#adicionarteamState"),
                                  tipo = $("#tipoToInsert option:selected").text();
                            //  nameToInsert = $("#nameToInsert");
                          //  bValid =
                              //bValid &&
                           //   checkLength(nameToInsert, "nome", 3, 100, tips);
                            if (bValid) {
                              if (path == null) {
                                tips.html("Deves selecionar o path primeiro.");
                                bValid &= false;
                              } else {
                                var fx = path.split(".");
                                switch (tipo) {
                                  case "PDF":
                                    if (!contains(ext_pdf, fx[fx.length - 1])) {
                                      tips.html(
                                        "As extensões permitidas são: " +
                                          showExtension(ext_pdf)
                                      );
                                      bValid &= false;
                                    }
                                    break;
                                  case "Imagem":
                                    if (
                                      !contains(ext_image, fx[fx.length - 1])
                                    ) {
                                      tips.html(
                                        "As extensões permitidas são: " +
                                          showExtension(ext_image)
                                      );
                                      bValid &= false;
                                    }
                                    break;
                                  case "Video":
                                    if (
                                      !contains(ext_video, fx[fx.length - 1])
                                    ) {
                                      tips.html(
                                        "As extensões permitidas são: " +
                                          showExtension(ext_video)
                                      );
                                      bValid &= false;
                                    }
                                    break;
                                }
                                if (bValid) {
                                  adicionarAsync();
                                }
                              }
                            }
                          },
                        });
                      },
                    });
                    setTimeout(function () {
                      $("#fotoequipaDialogo").dialog("close");
                      $("#adicionarteamState").html("");
                      $("#fotoequipaDialogo").dialog("option", "buttons", {
                        Cancelar: function () {
                          $(this).dialog("close");
                        },
                        Adicionar: function () {
                          var bValid = true,
                            tips = $("#adicionarteamState"),
                            tipo = $("#tipoToInsert option:selected").text(),
                            nameToInsert = $("#nameToInsert");
                          
                           // checkLength(nameToInsert, "nome", 3, 100, tips);
                          if (bValid) {
                            if (path == null) {
                              tips.html("Deves selecionar o path primeiro.");
                              bValid &= false;
                            } else {
                              var fx = path.split(".");
                              switch (tipo) {
                                case "PDF":
                                  if (!contains(ext_pdf, fx[fx.length - 1])) {
                                    tips.html(
                                      "As extensões permitidas são: " +
                                        showExtension(ext_pdf)
                                    );
                                    bValid &= false;
                                  }
                                  break;
                                case "Imagem":
                                  if (!contains(ext_image, fx[fx.length - 1])) {
                                    tips.html(
                                      "As extensões permitidas são: " +
                                        showExtension(ext_image)
                                    );
                                    bValid &= false;
                                  }
                                  break;
                                case "Video":
                                  if (!contains(ext_video, fx[fx.length - 1])) {
                                    tips.html(
                                      "As extensões permitidas são: " +
                                        showExtension(ext_video)
                                    );
                                    bValid &= false;
                                  }
                                  break;
                              }
                              if (bValid) {
                                adicionarAsync();
                              }
                            }
                          }
                        },
                      });
                    }, 1000);
                  } else {
                    $("#adicionarteamState").addClass("ui-state-error");
                    $("#adicionarteamState").html(result);
                  }
                },
                "json"
              );
            } else $("#adicionarteamState").html("O ficheiro não é uma imagem!");
          }
        },
        error: function (result) {
          $("#adicionarteamState").html("<p>" + result.d + "</p>");
        },
      });
      break;
    case "Video":
      $.ajax({
        url: "ajax/noticia_anexo/upload-add-vid.php",
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        type: "POST",
        success: function (result) {
          if (result.toLowerCase().indexOf("corrupt") >= 0) {
            $("#adicionarteamState").html("O ficheiro não é um video!");
            return;
          }
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
              if (file.length > 10) {
                $("#adicionarteamState").html(
                  '<img src="images/preloader-01.gif" style="border: hidden"/>'
                );
                //alert("aqui"+$("#nameToInsert").val() +""+$("#nid").val()+""+ $("#tipoToInsert option:selected").val())
                $.post(
                  "ajax/noticia_anexo/insert.php",
                  {
                    path: file,
                    name: $("#nameToInsert").val(),
                    category: $("#tipoToInsert option:selected").val(),
                    nid: $("#nid").val(),
                  },
                  function (data) {
                    var result = parseInt(data.text);

                    if (result == 1) {
                      $("#adicionarteamState").html(
                        "<p>Os seus dados foram adicionados com êxito!</p>"
                      );
                      $("#fotoequipaDialogo").dialog("option", "buttons", {
                        Fechar: function () {
                          $("#fotoequipaDialogo").dialog("close");
                          $("#adicionarteamState").html("");
                          $("#fotoequipaDialogo").dialog("option", "buttons", {
                            Cancelar: function () {
                              $(this).dialog("close");
                            },
                            Adicionar: function () {
                              var bValid = true,
                                tips = $("#adicionarteamState"),
                                tipo = $(
                                  "#tipoToInsert option:selected"
                                ).text(),
                                nameToInsert = $("#nameToInsert");
                              bValid =
                                bValid &&
                                checkLength(nameToInsert, "nome", 3, 100, tips);
                              if (bValid) {
                                if (path == null) {
                                  tips.html(
                                    "Deves selecionar o path primeiro."
                                  );
                                  bValid &= false;
                                } else {
                                  var fx = path.split(".");
                                  switch (tipo) {
                                    case "PDF":
                                      if (
                                        !contains(ext_pdf, fx[fx.length - 1])
                                      ) {
                                        tips.html(
                                          "As extensões permitidas são: " +
                                            showExtension(ext_pdf)
                                        );
                                        bValid &= false;
                                      }
                                      break;
                                    case "Imagem":
                                      if (
                                        !contains(ext_image, fx[fx.length - 1])
                                      ) {
                                        tips.html(
                                          "As extensões permitidas são: " +
                                            showExtension(ext_image)
                                        );
                                        bValid &= false;
                                      }
                                      break;
                                    case "Video":
                                      if (
                                        !contains(ext_video, fx[fx.length - 1])
                                      ) {
                                        tips.html(
                                          "As extensões permitidas são: " +
                                            showExtension(ext_video)
                                        );
                                        bValid &= false;
                                      }
                                      break;
                                  }
                                  if (bValid) {
                                    adicionarAsync();
                                  }
                                }
                              }
                            },
                          });
                        },
                      });
                      setTimeout(function () {
                        $("#fotoequipaDialogo").dialog("close");
                        $("#adicionarteamState").html("");
                        $("#fotoequipaDialogo").dialog("option", "buttons", {
                          Cancelar: function () {
                            $(this).dialog("close");
                          },
                          Adicionar: function () {
                            var bValid = true,
                              tips = $("#adicionarteamState"),
                              tipo = $("#tipoToInsert option:selected").text(),
                              nameToInsert = $("#nameToInsert");
                            bValid =
                              bValid &&
                              checkLength(nameToInsert, "nome", 3, 100, tips);
                            if (bValid) {
                              if (path == null) {
                                tips.html("Deves selecionar o path primeiro.");
                                bValid &= false;
                              } else {
                                var fx = path.split(".");
                                switch (tipo) {
                                  case "PDF":
                                    if (!contains(ext_pdf, fx[fx.length - 1])) {
                                      tips.html(
                                        "As extensões permitidas são: " +
                                          showExtension(ext_pdf)
                                      );
                                      bValid &= false;
                                    }
                                    break;
                                  case "Imagem":
                                    if (
                                      !contains(ext_image, fx[fx.length - 1])
                                    ) {
                                      tips.html(
                                        "As extensões permitidas são: " +
                                          showExtension(ext_image)
                                      );
                                      bValid &= false;
                                    }
                                    break;
                                  case "Video":
                                    if (
                                      !contains(ext_video, fx[fx.length - 1])
                                    ) {
                                      tips.html(
                                        "As extensões permitidas são: " +
                                          showExtension(ext_video)
                                      );
                                      bValid &= false;
                                    }
                                    break;
                                }
                                if (bValid) {
                                  adicionarAsync();
                                }
                              }
                            }
                          },
                        });
                      }, 1000);
                    } else {
                      $("#adicionarteamState").addClass("ui-state-error");
                      $("#adicionarteamState").html(result);
                    }
                  },
                  "json"
                );
              }
            } else $("#adicionarteamState").html("O ficheiro não é um video!");
          }
        },
        error: function (result) {
          $("#adicionarteamState").html("<p>" + result.d + "</p>");
        },
      });
      break;
  }
}
function modificar(id) {
  var name = $("#" + id + "name").val(),
    old_path = $("#" + id + "path").val(),
    category = $("#" + id + "category").val();
  $("#idToUpdate").val(id);
  $("#nameToUpdate").val(name);
  $("#old_pathToUpdate").val(old_path);
  $("#tipoToUpdate")
    .html("<img src='images/preloader-01.gif' />")
    .load(
      "./ajax/selection/option.php",
      "tipo=tnewsfiletype&base=no",
      function () {
        $("#tipoToUpdate option:contains(" + category + ")").prop(
          "selected",
          true
        );
      }
    );
  $("#modificarDialogo").dialog("open");
}
function modificarAsync() {
  if (path != null && path != "") {
    $("#modificarState").html("<img src='images/preloader-01.gif' />");
    var data = new FormData(),
      tipo = $("#tipoToUpdate option:selected").text();
    data.append("photo", $("#pathToUpdate")[0].files[0]);
    switch (tipo) {
      case "PDF":
        $.ajax({
          url: "ajax/noticia_anexo/upload-upd-pdf.php",
          data: data,
          cache: false,
          contentType: false,
          processData: false,
          type: "POST",
          success: function (result) {
            var r = result.replace("{", "");
            r = r.replace("}", "");
            var s = r.split(":");
            var fs = s[1].split("|");
            var count_file = fs.length;
            for (var i = 0; i < count_file; i++) {
              var file = fs[i];
              if (file.length > 6) {
                file = file.substring(8, file.length);
                var index = file.indexOf('"');
                if (index > 0) file = file.substring(0, file.length - 1);
                if (file == "") {
                  $("#modificarState").html("O ficheiro não é um PDF");
                } else {
                  $("#modificarState").html(
                    '<img src="images/preloader-01.gif" style="border: hidden"/>'
                  );
                  var id = $("#idToUpdate").val();
                  $.post(
                    "ajax/noticia_anexo/update.php",
                    {
                      id: id,
                      path: file,
                      name: $("#nameToUpdate").val(),
                      old_path: $("#" + id + "path").val(),
                      category: $("#tipoToUpdate option:selected").val(),
                    },
                    function (data) {
                      var result = parseInt(data.text);
                      if (result == 1) {
                        $("#modificarState").html(
                          "<p>Os seus dados foram adicionados com êxito!</p>"
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
                                  tipo = $(
                                    "#tipoToUpdate option:selected"
                                  ).text(),
                                  nameToUpdate = $("#nameToUpdate");
                                bValid =
                                  bValid &&
                                  checkLength(
                                    nameToUpdate,
                                    "nome",
                                    3,
                                    100,
                                    tips
                                  );
                                if (bValid) {
                                  if (path == null) {
                                    tips.html(
                                      "Deves selecionar o path primeiro."
                                    );
                                    bValid &= false;
                                  } else {
                                    var fx = path.split(".");
                                    switch (tipo) {
                                      case "PDF":
                                        if (
                                          !contains(ext_pdf, fx[fx.length - 1])
                                        ) {
                                          tips.html(
                                            "As extensões permitidas são: " +
                                              showExtension(ext_pdf)
                                          );
                                          bValid &= false;
                                        }
                                        break;
                                      case "Imagem":
                                        if (
                                          !contains(
                                            ext_image,
                                            fx[fx.length - 1]
                                          )
                                        ) {
                                          tips.html(
                                            "As extensões permitidas são: " +
                                              showExtension(ext_image)
                                          );
                                          bValid &= false;
                                        }
                                        break;
                                      case "Video":
                                        if (
                                          !contains(
                                            ext_video,
                                            fx[fx.length - 1]
                                          )
                                        ) {
                                          tips.html(
                                            "As extensões permitidas são: " +
                                              showExtension(ext_video)
                                          );
                                          bValid &= false;
                                        }
                                        break;
                                    }
                                    if (bValid) {
                                      adicionarAsync();
                                    }
                                  }
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
                                tipo = $(
                                  "#tipoToUpdate option:selected"
                                ).text(),
                                nameToUpdate = $("#nameToUpdate");
                              bValid =
                                bValid &&
                                checkLength(nameToUpdate, "nome", 3, 100, tips);
                              if (bValid) {
                                if (path == null) {
                                  tips.html(
                                    "Deves selecionar o path primeiro."
                                  );
                                  bValid &= false;
                                } else {
                                  var fx = path.split(".");
                                  switch (tipo) {
                                    case "PDF":
                                      if (
                                        !contains(ext_pdf, fx[fx.length - 1])
                                      ) {
                                        tips.html(
                                          "As extensões permitidas são: " +
                                            showExtension(ext_pdf)
                                        );
                                        bValid &= false;
                                      }
                                      break;
                                    case "Imagem":
                                      if (
                                        !contains(ext_image, fx[fx.length - 1])
                                      ) {
                                        tips.html(
                                          "As extensões permitidas são: " +
                                            showExtension(ext_image)
                                        );
                                        bValid &= false;
                                      }
                                      break;
                                    case "Video":
                                      if (
                                        !contains(ext_video, fx[fx.length - 1])
                                      ) {
                                        tips.html(
                                          "As extensões permitidas são: " +
                                            showExtension(ext_video)
                                        );
                                        bValid &= false;
                                      }
                                      break;
                                  }
                                  if (bValid) {
                                    adicionarAsync();
                                  }
                                }
                              }
                            },
                          });
                        }, 1000);
                      } else {
                        $("#modificarState").addClass("ui-state-error");
                        $("#modificarState").html(result);
                      }
                    },
                    "json"
                  );
                }
              }
            }
          },
          error: function (result) {
            $("#modificarState").html("<p>" + result.d + "</p>");
          },
        });
        break;
      case "Imagem":
        $.ajax({
          url: "ajax/noticia_anexo/upload-upd-img.php",
          data: data,
          cache: false,
          contentType: false,
          processData: false,
          type: "POST",
          success: function (result) {
            return;
            if (result.length < 6) {
              $("#modificarState").html("O ficheiro não é uma imagem!");
              return;
            }
            var r = result.replace("{", "");
            r = r.replace("}", "");
            var s = r.split(":");
            var fs = s[1].split("|");
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
                var id = $("#idToUpdate").val();
                $.post(
                  "ajax/noticia_anexo/update.php",
                  {
                    id: id,
                    path: file,
                    name: $("#nameToUpdate").val(),
                    old_path: $("#" + id + "path").val(),
                    category: $("#tipoToUpdate option:selected").val(),
                  },
                  function (data) {
                    var result = parseInt(data.text);
                    if (result == 1) {
                      $("#modificarState").html(
                        "<p>Os seus dados foram adicionados com êxito!</p>"
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
                                tipo = $(
                                  "#tipoToUpdate option:selected"
                                ).text(),
                                nameToUpdate = $("#nameToUpdate");
                              bValid =
                                bValid &&
                                checkLength(nameToUpdate, "nome", 3, 100, tips);
                              if (bValid) {
                                if (path == null || path == "") {
                                  modificarAsync();
                                } else {
                                  var fx = path.split(".");
                                  switch (tipo) {
                                    case "PDF":
                                      if (
                                        !contains(ext_pdf, fx[fx.length - 1])
                                      ) {
                                        tips.html(
                                          "As extensões permitidas são: " +
                                            showExtension(ext_pdf)
                                        );
                                        bValid &= false;
                                      }
                                      break;
                                    case "Imagem":
                                      if (
                                        !contains(ext_image, fx[fx.length - 1])
                                      ) {
                                        tips.html(
                                          "As extensões permitidas são: " +
                                            showExtension(ext_image)
                                        );
                                        bValid &= false;
                                      }
                                      break;
                                    case "Video":
                                      if (
                                        !contains(ext_video, fx[fx.length - 1])
                                      ) {
                                        tips.html(
                                          "As extensões permitidas são: " +
                                            showExtension(ext_video)
                                        );
                                        bValid &= false;
                                      }
                                      break;
                                  }
                                  if (bValid) {
                                    modificarAsync();
                                  }
                                }
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
                              tipo = $("#tipoToUpdate option:selected").text(),
                              nameToUpdate = $("#nameToUpdate");
                            bValid =
                              bValid &&
                              checkLength(nameToUpdate, "nome", 3, 100, tips);
                            if (bValid) {
                              if (path == null || path == "") {
                                modificarAsync();
                              } else {
                                var fx = path.split(".");
                                switch (tipo) {
                                  case "PDF":
                                    if (!contains(ext_pdf, fx[fx.length - 1])) {
                                      tips.html(
                                        "As extensões permitidas são: " +
                                          showExtension(ext_pdf)
                                      );
                                      bValid &= false;
                                    }
                                    break;
                                  case "Imagem":
                                    if (
                                      !contains(ext_image, fx[fx.length - 1])
                                    ) {
                                      tips.html(
                                        "As extensões permitidas são: " +
                                          showExtension(ext_image)
                                      );
                                      bValid &= false;
                                    }
                                    break;
                                  case "Video":
                                    if (
                                      !contains(ext_video, fx[fx.length - 1])
                                    ) {
                                      tips.html(
                                        "As extensões permitidas são: " +
                                          showExtension(ext_video)
                                      );
                                      bValid &= false;
                                    }
                                    break;
                                }
                                if (bValid) {
                                  modificarAsync();
                                }
                              }
                            }
                          },
                        });
                      }, 1000);
                    } else {
                      $("#modificarState").addClass("ui-state-error");
                      $("#modificarState").html(result);
                    }
                  },
                  "json"
                );
              } else $("#modificarState").html("O ficheiro não é uma imagem!");
            }
          },
          error: function (result) {
            $("#modificarState").html("<p>" + result.d + "</p>");
          },
        });
        break;
      case "Video":
        $.ajax({
          url: "ajax/noticia_anexo/upload-upd-vid.php",
          data: data,
          cache: false,
          contentType: false,
          processData: false,
          type: "POST",
          success: function (result) {
            if (result.toLowerCase().indexOf("corrupt") >= 0) {
              $("#modificarState").html("O ficheiro não é um video!");
              return;
            }
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
                var id = $("#idToUpdate").val();
                $.post(
                  "ajax/noticia_anexo/update.php",
                  {
                    id: id,
                    path: file,
                    name: $("#nameToUpdate").val(),
                    old_path: $("#" + id + "path").val(),
                    category: $("#tipoToUpdate option:selected").val(),
                  },
                  function (data) {
                    var result = parseInt(data.text);
                    if (result == 1) {
                      $("#modificarState").html(
                        "<p>Os seus dados foram adicionados com êxito!</p>"
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
                                tipo = $(
                                  "#tipoToUpdate option:selected"
                                ).text(),
                                nameToUpdate = $("#nameToUpdate");
                              bValid =
                                bValid &&
                                checkLength(nameToUpdate, "nome", 3, 100, tips);
                              if (bValid) {
                                if (path == null || path == "") {
                                  modificarAsync();
                                } else {
                                  var fx = path.split(".");
                                  switch (tipo) {
                                    case "PDF":
                                      if (
                                        !contains(ext_pdf, fx[fx.length - 1])
                                      ) {
                                        tips.html(
                                          "As extensões permitidas são: " +
                                            showExtension(ext_pdf)
                                        );
                                        bValid &= false;
                                      }
                                      break;
                                    case "Imagem":
                                      if (
                                        !contains(ext_image, fx[fx.length - 1])
                                      ) {
                                        tips.html(
                                          "As extensões permitidas são: " +
                                            showExtension(ext_image)
                                        );
                                        bValid &= false;
                                      }
                                      break;
                                    case "Video":
                                      if (
                                        !contains(ext_video, fx[fx.length - 1])
                                      ) {
                                        tips.html(
                                          "As extensões permitidas são: " +
                                            showExtension(ext_video)
                                        );
                                        bValid &= false;
                                      }
                                      break;
                                  }
                                  if (bValid) {
                                    modificarAsync();
                                  }
                                }
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
                              tipo = $("#tipoToUpdate option:selected").text(),
                              nameToUpdate = $("#nameToUpdate");
                            bValid =
                              bValid &&
                              checkLength(nameToUpdate, "nome", 3, 100, tips);
                            if (bValid) {
                              if (path == null || path == "") {
                                modificarAsync();
                              } else {
                                var fx = path.split(".");
                                switch (tipo) {
                                  case "PDF":
                                    if (!contains(ext_pdf, fx[fx.length - 1])) {
                                      tips.html(
                                        "As extensões permitidas são: " +
                                          showExtension(ext_pdf)
                                      );
                                      bValid &= false;
                                    }
                                    break;
                                  case "Imagem":
                                    if (
                                      !contains(ext_image, fx[fx.length - 1])
                                    ) {
                                      tips.html(
                                        "As extensões permitidas são: " +
                                          showExtension(ext_image)
                                      );
                                      bValid &= false;
                                    }
                                    break;
                                  case "Video":
                                    if (
                                      !contains(ext_video, fx[fx.length - 1])
                                    ) {
                                      tips.html(
                                        "As extensões permitidas são: " +
                                          showExtension(ext_video)
                                      );
                                      bValid &= false;
                                    }
                                    break;
                                }
                                if (bValid) {
                                  modificarAsync();
                                }
                              }
                            }
                          },
                        });
                      }, 1000);
                    } else {
                      $("#modificarState").addClass("ui-state-error");
                      $("#modificarState").html(result);
                    }
                  },
                  "json"
                );
              } else $("#modificarState").html("O ficheiro não é um video!");
            }
          },
          error: function (result) {
            $("#modificarState").html("<p>" + result.d + "</p>");
          },
        });
        break;
    }
  } else {
    $("#modificarState").html("<img src='images/preloader-01.gif' />");
    var tipo = $("#tipoToUpdate option:selected").text();
    switch (tipo) {
      case "PDF":
        var id = $("#idToUpdate").val();
        $.post(
          "ajax/noticia_anexo/update.php",
          {
            id: id,
            path: $("#" + id + "path").val(),
            name: $("#nameToUpdate").val(),
            old_path: $("#" + id + "path").val(),
            category: $("#tipoToUpdate option:selected").val(),
          },
          function (data) {
            var result = parseInt(data.text);
            if (result == 1) {
              $("#modificarState").html(
                "<p>Os seus dados foram adicionados com êxito!</p>"
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
                        tipo = $("#tipoToUpdate option:selected").text(),
                        nameToUpdate = $("#nameToUpdate");
                      bValid =
                        bValid &&
                        checkLength(nameToUpdate, "nome", 3, 100, tips);
                      if (bValid) {
                        if (path == null || path == "") {
                          modificarAsync();
                        } else {
                          var fx = path.split(".");
                          switch (tipo) {
                            case "PDF":
                              if (!contains(ext_pdf, fx[fx.length - 1])) {
                                tips.html(
                                  "As extensões permitidas são: " +
                                    showExtension(ext_pdf)
                                );
                                bValid &= false;
                              }
                              break;
                            case "Imagem":
                              if (!contains(ext_image, fx[fx.length - 1])) {
                                tips.html(
                                  "As extensões permitidas são: " +
                                    showExtension(ext_image)
                                );
                                bValid &= false;
                              }
                              break;
                            case "Video":
                              if (!contains(ext_video, fx[fx.length - 1])) {
                                tips.html(
                                  "As extensões permitidas são: " +
                                    showExtension(ext_video)
                                );
                                bValid &= false;
                              }
                              break;
                          }
                          if (bValid) {
                            modificarAsync();
                          }
                        }
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
                      tipo = $("#tipoToUpdate option:selected").text(),
                      nameToUpdate = $("#nameToUpdate");
                    bValid =
                      bValid && checkLength(nameToUpdate, "nome", 3, 100, tips);
                    if (bValid) {
                      if (path == null || path == "") {
                        modificarAsync();
                      } else {
                        var fx = path.split(".");
                        switch (tipo) {
                          case "PDF":
                            if (!contains(ext_pdf, fx[fx.length - 1])) {
                              tips.html(
                                "As extensões permitidas são: " +
                                  showExtension(ext_pdf)
                              );
                              bValid &= false;
                            }
                            break;
                          case "Imagem":
                            if (!contains(ext_image, fx[fx.length - 1])) {
                              tips.html(
                                "As extensões permitidas são: " +
                                  showExtension(ext_image)
                              );
                              bValid &= false;
                            }
                            break;
                          case "Video":
                            if (!contains(ext_video, fx[fx.length - 1])) {
                              tips.html(
                                "As extensões permitidas são: " +
                                  showExtension(ext_video)
                              );
                              bValid &= false;
                            }
                            break;
                        }
                        if (bValid) {
                          modificarAsync();
                        }
                      }
                    }
                  },
                });
              }, 1000);
            } else {
              $("#modificarState").addClass("ui-state-error");
              $("#modificarState").html(result);
            }
          },
          "json"
        );
        break;
      case "Imagem":
        var id = $("#idToUpdate").val();
        $.post(
          "ajax/noticia_anexo/update.php",
          {
            id: id,
            path: $("#" + id + "path").val(),
            name: $("#nameToUpdate").val(),
            old_path: $("#" + id + "path").val(),
            category: $("#tipoToUpdate option:selected").val(),
          },
          function (data) {
            var result = parseInt(data.text);
            if (result == 1) {
              $("#modificarState").html(
                "<p>Os seus dados foram adicionados com êxito!</p>"
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
                        tipo = $("#tipoToUpdate option:selected").text(),
                        nameToUpdate = $("#nameToUpdate");
                      bValid =
                        bValid &&
                        checkLength(nameToUpdate, "nome", 3, 100, tips);
                      if (bValid) {
                        if (path == null || path == "") {
                          modificarAsync();
                        } else {
                          var fx = path.split(".");
                          switch (tipo) {
                            case "PDF":
                              if (!contains(ext_pdf, fx[fx.length - 1])) {
                                tips.html(
                                  "As extensões permitidas são: " +
                                    showExtension(ext_pdf)
                                );
                                bValid &= false;
                              }
                              break;
                            case "Imagem":
                              if (!contains(ext_image, fx[fx.length - 1])) {
                                tips.html(
                                  "As extensões permitidas são: " +
                                    showExtension(ext_image)
                                );
                                bValid &= false;
                              }
                              break;
                            case "Video":
                              if (!contains(ext_video, fx[fx.length - 1])) {
                                tips.html(
                                  "As extensões permitidas são: " +
                                    showExtension(ext_video)
                                );
                                bValid &= false;
                              }
                              break;
                          }
                          if (bValid) {
                            modificarAsync();
                          }
                        }
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
                      tipo = $("#tipoToUpdate option:selected").text(),
                      nameToUpdate = $("#nameToUpdate");
                    bValid =
                      bValid && checkLength(nameToUpdate, "nome", 3, 100, tips);
                    if (bValid) {
                      if (path == null || path == "") {
                        modificarAsync();
                      } else {
                        var fx = path.split(".");
                        switch (tipo) {
                          case "PDF":
                            if (!contains(ext_pdf, fx[fx.length - 1])) {
                              tips.html(
                                "As extensões permitidas são: " +
                                  showExtension(ext_pdf)
                              );
                              bValid &= false;
                            }
                            break;
                          case "Imagem":
                            if (!contains(ext_image, fx[fx.length - 1])) {
                              tips.html(
                                "As extensões permitidas são: " +
                                  showExtension(ext_image)
                              );
                              bValid &= false;
                            }
                            break;
                          case "Video":
                            if (!contains(ext_video, fx[fx.length - 1])) {
                              tips.html(
                                "As extensões permitidas são: " +
                                  showExtension(ext_video)
                              );
                              bValid &= false;
                            }
                            break;
                        }
                        if (bValid) {
                          modificarAsync();
                        }
                      }
                    }
                  },
                });
              }, 1000);
            } else {
              $("#modificarState").addClass("ui-state-error");
              $("#modificarState").html(result);
            }
          },
          "json"
        );
        break;
      case "Video":
        var id = $("#idToUpdate").val();
        $.post(
          "ajax/noticia_anexo/update.php",
          {
            id: id,
            path: $("#" + id + "path").val(),
            name: $("#nameToUpdate").val(),
            old_path: $("#" + id + "path").val(),
            category: $("#tipoToUpdate option:selected").val(),
          },
          function (data) {
            var result = parseInt(data.text);
            if (result == 1) {
              $("#modificarState").html(
                "<p>Os seus dados foram adicionados com êxito!</p>"
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
                        tipo = $("#tipoToUpdate option:selected").text(),
                        nameToUpdate = $("#nameToUpdate");
                      bValid =
                        bValid &&
                        checkLength(nameToUpdate, "nome", 3, 100, tips);
                      if (bValid) {
                        if (path == null || path == "") {
                          modificarAsync();
                        } else {
                          var fx = path.split(".");
                          switch (tipo) {
                            case "PDF":
                              if (!contains(ext_pdf, fx[fx.length - 1])) {
                                tips.html(
                                  "As extensões permitidas são: " +
                                    showExtension(ext_pdf)
                                );
                                bValid &= false;
                              }
                              break;
                            case "Imagem":
                              if (!contains(ext_image, fx[fx.length - 1])) {
                                tips.html(
                                  "As extensões permitidas são: " +
                                    showExtension(ext_image)
                                );
                                bValid &= false;
                              }
                              break;
                            case "Video":
                              if (!contains(ext_video, fx[fx.length - 1])) {
                                tips.html(
                                  "As extensões permitidas são: " +
                                    showExtension(ext_video)
                                );
                                bValid &= false;
                              }
                              break;
                          }
                          if (bValid) {
                            modificarAsync();
                          }
                        }
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
                      tipo = $("#tipoToUpdate option:selected").text(),
                      nameToUpdate = $("#nameToUpdate");
                    bValid =
                      bValid && checkLength(nameToUpdate, "nome", 3, 100, tips);
                    if (bValid) {
                      if (path == null || path == "") {
                        modificarAsync();
                      } else {
                        var fx = path.split(".");
                        switch (tipo) {
                          case "PDF":
                            if (!contains(ext_pdf, fx[fx.length - 1])) {
                              tips.html(
                                "As extensões permitidas são: " +
                                  showExtension(ext_pdf)
                              );
                              bValid &= false;
                            }
                            break;
                          case "Imagem":
                            if (!contains(ext_image, fx[fx.length - 1])) {
                              tips.html(
                                "As extensões permitidas são: " +
                                  showExtension(ext_image)
                              );
                              bValid &= false;
                            }
                            break;
                          case "Video":
                            if (!contains(ext_video, fx[fx.length - 1])) {
                              tips.html(
                                "As extensões permitidas são: " +
                                  showExtension(ext_video)
                              );
                              bValid &= false;
                            }
                            break;
                        }
                        if (bValid) {
                          modificarAsync();
                        }
                      }
                    }
                  },
                });
              }, 1000);
            } else {
              $("#modificarState").addClass("ui-state-error");
              $("#modificarState").html(result);
            }
          },
          "json"
        );
        break;
    }
  }
}
function eliminar(id) {
  var name = $("#" + id + "name").val(),
    old_path = $("#" + id + "path").val(),
    category = $("#" + id + "category").val();
  $("#idToRemove").val(id);
  $("#nameToRemove").val(name);
  switch (category) {
    case "PDF":
      $("#pathToRemove").html(
        "<a href='" +
          old_path +
          "' target='_blank'><p style='text-align: center;'><img src='images/pdf.jpg' width='60px' height='60px' /></p></a>"
      );
      break;
    case "Imagem":
      $("#pathToRemove").html(
        "<a href='" +
          old_path +
          "' target='_blank'><p style='text-align: center;'><img src='images/imagem.jpg' width='60px' height='60px' /></p></a>"
      );
      break;
    case "Video":
      $("#pathToRemove").html(
        "<a href='" +
          old_path +
          "' target='_blank'><p style='text-align: center;'><img src='images/video.jpg' width='60px' height='60px' /></p></a>"
      );
      break;
  }
  $("#eliminarDialogo").dialog("open");
}
function eliminarAsync() {
  var id = $("#idToRemove").val();
  $("#eliminarState").html("<img src='images/preloader-01.gif' />");
  $.post(
    "ajax/noticia_anexo/delete.php",
    {
      id: id,
      path: $("#" + id + "path").val(),
      nid: $("#nid").val(),
    },
    function (data) {
      var result = parseInt(data.text);
      if (result == 1) {
        $("#eliminarState").html(
          "<p>Os seus dados foram eliminados com êxito!</p>"
        );
        $("#eliminarDialogo").dialog("option", "buttons", {
          Fechar: function () {
            $("#eliminarDialogo").dialog("close");
            $("#eliminarState").html("");
            $("#eliminarDialogo").dialog("option", "buttons", {
              Cancelar: function () {
                $(this).dialog("close");
              },
              Eliminar: function () {
                var bValid = true,
                  tips = $("#eliminarState"),
                  nameToRemove = $("#nameToRemove");
                bValid =
                  bValid && checkLength(nameToRemove, "nome", 3, 100, tips);
                if (bValid) {
                  eliminarAsync();
                }
              },
            });
          },
        });
        setTimeout(function () {
          $("#eliminarDialogo").dialog("close");
          $("#eliminarState").html("");
          $("#eliminarDialogo").dialog("option", "buttons", {
            Cancelar: function () {
              $(this).dialog("close");
            },
            Eliminar: function () {
              var bValid = true,
                tips = $("#eliminarState"),
                nameToRemove = $("#nameToRemove");
              bValid =
                bValid && checkLength(nameToRemove, "nome", 3, 100, tips);
              if (bValid) {
                eliminarAsync();
              }
            },
          });
        }, 1000);
      } else {
        $("#eliminarState").addClass("ui-state-error");
        $("#eliminarState").html("<p>Eliminação dos dados falhada!</p>");
      }
    },
    "json"
  );
}
function scheduleNewsFileCategory(event) {}
