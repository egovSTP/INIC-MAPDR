var path = null,
  num = 1,
  ext = ["pdf"];
$(function () {
  var nameToInsert = $("#nameToInsert"),
    nameToUpdate = $("#nameToUpdate"),
    nameToRemove = $("#nameToRemove"),
    allFields = $([]).add(nameToInsert).add(nameToUpdate).add(nameToRemove);
  $("#adicionarDialogo").dialog({
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
          tips = $("#adicionarState");
        bValid = bValid && checkLength(nameToInsert, "nome", 3, 100, tips);
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
                adicionarAsync();
              }
            }
          }
        }
      },
    },
    close: function () {
      allFields.val("").removeClass("ui-state-error");
      $("#adicionar").tooltip("close");
      $("#adicionarState").html("");
      $("#adicionarState").removeClass("ui-state-error");
      var did = $("#did").val();
      $("#documentoAnexoContent")
        .html("<img src='images/preloader-01.gif' />")
        .load(
          "ajax/documento_anexo/view.php",
          "page=" + num + "&did=" + did,
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
          tips = $("#modificarState");
        bValid = bValid && checkLength(nameToUpdate, "nome", 3, 100, tips);
        if (bValid) {    
            var fx = path.split(".");
            if (!contains(ext, fx[fx.length - 1])) {
              tips.html("As extensões permitidas são: " + showExtension(ext));
              bValid &= false;
            } else {
              if (bValid) {
                alert("sfdsfdsfsd");
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
      var did = $("#did").val();
      $("#documentoAnexoContent")
        .html("<img src='images/preloader-01.gif' />")
        .load(
          "ajax/documento_anexo/view.php",
          "page=" + num + "&did=" + did,
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
  var did = $("#did").val();
  $("#documentoAnexoContent")
    .html("<img src='images/preloader-01.gif'/>")
    .load(
      "ajax/documento_anexo/view.php",
      "page=" + num + "&did=" + did,
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
  var did = $("#did").val();
  $("#documentoAnexoContent")
    .html("<img src='images/preloader-01.gif' />")
    .load(
      "ajax/documento_anexo/view.php",
      "page=" + num + "&did=" + did,
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
        }
      }
    );
}
function adicionar() {
  $("#adicionarDialogo").dialog("open");
}
function adicionarAsync() {
  $("#adicionarState").html("<img src='images/preloader-01.gif' />");
  fileInput = document.getElementById('pathToInsert');
file = fileInput.files[0];
if (!file) {
  $('#adicionarState').html("Por favor, selecione um arquivo!");
  return;
}
convertToBase64(file, function (base64String) {
  const fileName = file.name;
  fetch('ajax/documento_anexo/insert.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      path: base64String,
      name: $("#nameToInsert").val(),
      did: $("#did").val() 
    })
  })
    .then(response => response.text())  // Use text() temporariamente para capturar a resposta bruta
    .then(text => {
      //  console.log('Resposta bruta:', text);  // Exibir a resposta bruta na consola
      try {
        const data = JSON.parse(text);  // Tente converter a resposta para JSON manualmente
        if (data.text === '1') {
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
                      if (!contains(ext, fx[fx.length - 1])) {
                        tips.html(
                          "As extensões permitidas são: " +
                            showExtension(ext)
                        );
                        bValid &= false;
                      } else {
                        if (bValid) {
                          adicionarAsync();
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
                    if (!contains(ext, fx[fx.length - 1])) {
                      tips.html(
                        "As extensões permitidas são: " +
                          showExtension(ext)
                      );
                      bValid &= false;
                    } else {
                      if (bValid) {
                        adicionarAsync();
                      }
                    }
                  }
                }
              },
            });
          }, 1000);
        } else {
          $('#adicionarState').html("<p>Erro ao salvar o arquivo: " + data.text + "</p>");
        }
      } catch (e) {
        $('#adicionarState').html("<p>Erro ao processar a resposta do servidor</p>");
        // console.error('Erro ao processar JSON:', e, 'Resposta bruta:', text);
      }
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
      $('#adicionarState').html("<p>Erro na requisição</p>");
    });

 
});
}
function modificar(id) {
  var old_path = $("#" + id + "path").val(),
    name = $("#" + id + "name").val();
  $("#idToUpdate").val(id);
  $("#nameToUpdate").val(name);
  $("#old_pathToUpdate").val(old_path);
  $("#modificarDialogo").dialog("open");
}
function modificarAsync() {
  $("#modificarState").html("<img src='images/preloader-01.gif' />");
  fileInput = document.getElementById('pathToUpdate');
file = fileInput.files[0];
if (!file) {
  $('#modificarState').html("Por favor, selecione um arquivo!");
  return;
}
convertToBase64(file, function (base64String) {
  const fileName = file.name;
  fetch('ajax/documento_anexo/update.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: $("#idToUpdate").val(),
      path: base64String,
      name: $("#nameToUpdate").val()
    })
  })
    .then(response => response.text())  // Use text() temporariamente para capturar a resposta bruta
    .then(text => {
        console.log('Resposta bruta:', text);  // Exibir a resposta bruta na consola
      try {
        const data = JSON.parse(text);  // Tente converter a resposta para JSON manualmente
        if (data.text === '1') {
          $('#modificarState').html("<p>Os seus dados foram alterados com êxito!</p>");
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
                    nameToUpdate = $("#nameToUpdate");
                  bValid =
                    bValid && checkLength(nameToUpdate, "nome", 3, 100, tips);
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
            $("#modificarDialogo").dialog("close");
            $("#modificarState").html("");
            $("#modificarDialogo").dialog("option", "buttons", {
              Cancelar: function () {
                $(this).dialog("close");
              },
              Modificar: function () {
                var bValid = true,
                  tips = $("#modificarState"),
                  nameToUpdate = $("#nameToUpdate");
                bValid =
                  bValid && checkLength(nameToUpdate, "nome", 3, 100, tips);
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
                        modificarAsync();
                      }
                    }
                  }
                }
              },
            });
          }, 1000);

        } else {
          $('#adicionarState').html("<p>Erro ao salvar o arquivo: " + data.text + "</p>");
        }
      } catch (e) {
        $('#adicionarState').html("<p>Erro ao processar a resposta do servidor</p>");
        // console.error('Erro ao processar JSON:', e, 'Resposta bruta:', text);
      }
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
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