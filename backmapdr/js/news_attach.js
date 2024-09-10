var path = null,
  num = 1,
  ext_image = ['jpg', 'jpeg', 'png', 'bmp'],
  ext_pdf = ['pdf'];
$(function () {
  var nameToInsert = $('#nameToInsert'),
    nameToUpdate = $('#nameToUpdate'),
    nameToRemove = $('#nameToRemove'),
    allFields = $([]).add(nameToInsert).add(nameToUpdate).add(nameToRemove);
  const fileInput = document.getElementById('pathToInsert');
  const file = fileInput.files[0];
  $('#adicionarDialogo').dialog({
    autoOpen: false,
    resizable: true,
    show: 'clip',
    hide: 'clip',
    modal: true,
    closeOnEscape: true,
    buttons: {
      Cancelar: function () {
        $(this).dialog('close');
      },
      Adicionar: function () {
        var bValid = true,
          tips = $('#adicionarState'),
          tipo = $('#tipoToInsert option:selected').text();
        bValid = bValid && checkLength(nameToInsert, 'nome', 3, 100, tips);
        if (bValid) {
          if (path == null) {
            tips.html('Deves selecionar o path primeiro.');
            bValid &= false;
          } else {
            var fx = path.split('.');
            switch (tipo) {
              case 'PDF':
                if (!contains(ext_pdf, fx[fx.length - 1])) {
                  tips.html(
                    'As extensões permitidas são: ' + showExtension(ext_pdf)
                  );
                  bValid &= false;
                }
                break;
              case 'Imagem':
                if (!contains(ext_image, fx[fx.length - 1])) {
                  tips.html(
                    'As extensões permitidas são: ' + showExtension(ext_image)
                  );
                  bValid &= false;
                }
                break;
              case 'Video':
                if (!contains(ext_video, fx[fx.length - 1])) {
                  tips.html(
                    'As extensões permitidas são: ' + showExtension(ext_video)
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
      allFields.val('').removeClass('ui-state-error');
      $('#adicionar').tooltip('close');
      $('#adicionarState').html('');
      $('#adicionarState').removeClass('ui-state-error');
      var nid = $('#nid').val();
      $('#noticiaAnexoContent')
        .html("<img src='images/preloader-01.gif' />")
        .load(
          'ajax/noticia_anexo/view.php',
          'page=' + num + '&nid=' + nid,
          function () {
            var total = $('#total').val();
            for (var i = 0; i < total; i++) {
              $('#modificar' + i).tooltip({
                show: {
                  effect: 'blind',
                  delay: 50,
                },
                hide: {
                  effect: 'blind',
                  delay: 150,
                },
              });
            }
          }
        );
    },
  });
  $('#modificarDialogo').dialog({
    autoOpen: false,
    resizable: true,
    show: 'clip',
    hide: 'clip',
    modal: true,
    closeOnEscape: true,
    buttons: {
      Cancelar: function () {
        $(this).dialog('close');
      },
      Modificar: function () {
        var bValid = true,
          tips = $('#modificarState'),
          tipo = $('#tipoToUpdate option:selected').text();
        bValid = bValid && checkLength(nameToUpdate, 'nome', 3, 100, tips);
        if (bValid) {
          if (path == null || path == '') {
            modificarAsync();
          } else {
            var fx = path.split('.');
            switch (tipo) {
              case 'PDF':
                if (!contains(ext_pdf, fx[fx.length - 1])) {
                  tips.html(
                    'As extensões permitidas são: ' + showExtension(ext_pdf)
                  );
                  bValid &= false;
                }
                break;
              case 'Imagem':
                if (!contains(ext_image, fx[fx.length - 1])) {
                  tips.html(
                    'As extensões permitidas são: ' + showExtension(ext_image)
                  );
                  bValid &= false;
                }
                break;
              case 'Video':
                if (!contains(ext_video, fx[fx.length - 1])) {
                  tips.html(
                    'As extensões permitidas são: ' + showExtension(ext_video)
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
      allFields.val('').removeClass('ui-state-error');
      $('#modificar').tooltip('close');
      $('#modificarState').html('');
      $('#modificarState').removeClass('ui-state-error');
      var nid = $('#nid').val();
      $('#noticiaAnexoContent')
        .html("<img src='images/preloader-01.gif' />")
        .load(
          'ajax/noticia_anexo/view.php',
          'page=' + num + '&nid=' + nid,
          function () {
            var total = $('#total').val();
            for (var i = 0; i < total; i++) {
              $('#modificar' + i).tooltip({
                show: {
                  effect: 'blind',
                  delay: 50,
                },
                hide: {
                  effect: 'blind',
                  delay: 150,
                },
              });
            }
          }
        );
    },
  });
  $('#voltar').tooltip({
    show: {
      effect: 'blind',
      delay: 50,
    },
    hide: {
      effect: 'blind',
      delay: 150,
    },
  });
  $('#adicionar').tooltip({
    show: {
      effect: 'blind',
      delay: 50,
    },
    hide: {
      effect: 'blind',
      delay: 150,
    },
  });
  var nid = $('#nid').val();
  $('#noticiaAnexoContent')
    .html("<img src='images/preloader-01.gif' />")
    .load(
      'ajax/noticia_anexo/view.php',
      'page=' + num + '&nid=' + nid,
      function () {
        var total = $('#total').val();
        for (var i = 0; i < total; i++) {
          $('#modificar' + i).tooltip({
            show: {
              effect: 'blind',
              delay: 50,
            },
            hide: {
              effect: 'blind',
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
  var total = $('#total').val(),
    quantidade = $('#quantidade').val(),
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
  var nid = $('#nid').val();
  $('#noticiaAnexoContent')
    .html("<img src='images/preloader-01.gif' />")
    .load(
      'ajax/noticia_anexo/view.php',
      'page=' + num + '&nid=' + nid,
      function () {
        var total = $('#total').val();
        for (var i = 0; i < total; i++) {
          $('#modificar' + i).tooltip({
            show: {
              effect: 'blind',
              delay: 50,
            },
            hide: {
              effect: 'blind',
              delay: 150,
            },
          });
        }
      }
    );
}

function adicionar() {
  $('#adicionarDialogo').dialog('open');
  $('#tipoToInsert')
    .html("<img src='images/preloader-01.gif' />")
    .load(
      './ajax/selection/option.php',
      'tipo=tnewsfiletype&base=no',
      function () { }
    );
}

function adicionarAsync() {
  $('#adicionarState').html("<img src='images/preloader-01.gif' />");
  //var data = new FormData(),
  tipo = $('#tipoToInsert option:selected').text();
  // alert($('#nameToInsert').val());
  //data.append('photo', $('#pathToInsert')[0].files[0]);
  switch (tipo) {
    case 'PDF':
      //aquipdf
      fileInput = document.getElementById('pathToInsert');
      file = fileInput.files[0];
      if (!file) {
        $('#adicionarState').html("Por favor, selecione um arquivo!");
        return;
      }
      convertToBase64(file, function (base64String) {
        const fileName = file.name;
        fetch('ajax/noticia_anexo/upload-add-pdf.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            file: base64String,
            fileName: fileName,
            name: $('#nameToInsert').val(),
            category: $('#tipoToInsert option:selected').val(),
            nid: $('#nid').val()
          })
        })
          .then(response => response.text())  // Use text() temporariamente para capturar a resposta bruta
          .then(text => {
            //  console.log('Resposta bruta:', text);  // Exibir a resposta bruta na consola
            try {
              const data = JSON.parse(text);  // Tente converter a resposta para JSON manualmente
              if (data.text === '1') {
                $('#adicionarState').html("<p>Os seus dados foram adicionados com êxito!</p>");
                $('#adicionarDialogo').dialog('option', 'buttons', {
                  Fechar: function () {
                    $('#adicionarDialogo').dialog('close');
                    $('#adicionarState').html('');
                    $('#adicionarDialogo').dialog('option', 'buttons', {
                      Cancelar: function () {
                        $(this).dialog('close');
                      },
                      Adicionar: function () {
                        var bValid = true,
                          tips = $('#adicionarState'),
                          tipo = $(
                            '#tipoToInsert option:selected'
                          ).text(),
                          nameToInsert = $('#nameToInsert');
                        bValid =
                          bValid &&
                          checkLength(nameToInsert, 'nome', 3, 100, tips);
                        if (bValid) {
                          if (path == null) {
                            tips.html(
                              'Deves selecionar o path primeiro.'
                            );
                            bValid &= false;
                          } else {
                            var fx = path.split('.');
                            switch (tipo) {
                              case 'PDF':
                                if (
                                  !contains(ext_pdf, fx[fx.length - 1])
                                ) {
                                  tips.html(
                                    'As extensões permitidas são: ' +
                                    showExtension(ext_pdf)
                                  );
                                  bValid &= false;
                                }
                                break;
                              case 'Imagem':
                                if (
                                  !contains(ext_image, fx[fx.length - 1])
                                ) {
                                  tips.html(
                                    'As extensões permitidas são: ' +
                                    showExtension(ext_image)
                                  );
                                  bValid &= false;
                                }
                                break;
                              case 'Video':
                                if (
                                  !contains(ext_video, fx[fx.length - 1])
                                ) {
                                  tips.html(
                                    'As extensões permitidas são: ' +
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
                  $('#adicionarDialogo').dialog('close');
                  $('#adicionarState').html('');
                  $('#adicionarDialogo').dialog('option', 'buttons', {
                    Cancelar: function () {
                      $(this).dialog('close');
                    },
                    Adicionar: function () {
                      var bValid = true,
                        tips = $('#adicionarState'),
                        tipo = $('#tipoToInsert option:selected').text(),
                        nameToInsert = $('#nameToInsert');
                      bValid =
                        bValid &&
                        checkLength(nameToInsert, 'nome', 3, 100, tips);
                      if (bValid) {
                        if (path == null) {
                          tips.html('Deves selecionar o path primeiro.');
                          bValid &= false;
                        } else {
                          var fx = path.split('.');
                          switch (tipo) {
                            case 'PDF':
                              if (!contains(ext_pdf, fx[fx.length - 1])) {
                                tips.html(
                                  'As extensões permitidas são: ' +
                                  showExtension(ext_pdf)
                                );
                                bValid &= false;
                              }
                              break;
                            case 'Imagem':
                              if (
                                !contains(ext_image, fx[fx.length - 1])
                              ) {
                                tips.html(
                                  'As extensões permitidas são: ' +
                                  showExtension(ext_image)
                                );
                                bValid &= false;
                              }
                              break;
                            case 'Video':
                              if (
                                !contains(ext_video, fx[fx.length - 1])
                              ) {
                                tips.html(
                                  'As extensões permitidas são: ' +
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

        setTimeout(function () {
          $('#adicionarDialogo').dialog('close');
          $('#adicionarState').html('');
        }, 1000);
      });
      //fechou
      break;
    case 'Imagem':
      //aqui imagem
      fileInput = document.getElementById('pathToInsert');
      var file = fileInput.files[0];

      if (!file) {
        $('#adicionarState').html("Por favor, selecione uma imagem!");
        return;
      }

      convertToBase64(file, function (base64String) {
        const fileName = file.name;

        fetch('ajax/noticia_anexo/upload-add-img.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            file: base64String,
            fileName: fileName,
            name: $('#nameToInsert').val(),
            category: $('#tipoToInsert option:selected').val(),
            nid: $('#nid').val()
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
              $('#adicionarState').html("<p>Imagem enviada com sucesso!</p>");
              if (data.text == '1') {
                $('#adicionarState').html("<p>Imagem enviada com sucesso!</p>");
                $('#adicionarDialogo').dialog('option', 'buttons', {
                  Fechar: function () {
                    $('#adicionarDialogo').dialog('close');
                    $('#adicionarState').html('');
                    $('#adicionarDialogo').dialog('option', 'buttons', {
                      Cancelar: function () {
                        $(this).dialog('close');
                      },
                      Adicionar: function () {
                        var bValid = true,
                          tips = $('#adicionarState'),
                          tipo = $('#tipoToInsert option:selected').text(),
                          nameToInsert = $('#nameToInsert');
                        bValid =
                          bValid &&
                          checkLength(nameToInsert, 'nome', 3, 100, tips);
                        if (bValid) {
                          if (path == null) {
                            tips.html('Deves selecionar o path primeiro.');
                            bValid &= false;
                          } else {
                            var fx = path.split('.');
                            switch (tipo) {
                              case 'PDF':
                                if (!contains(ext_pdf, fx[fx.length - 1])) {
                                  tips.html(
                                    'As extensões permitidas são: ' +
                                    showExtension(ext_pdf)
                                  );
                                  bValid &= false;
                                }
                                //fechou imagem
                                break;
                              case 'Imagem':
                                if (
                                  !contains(ext_image, fx[fx.length - 1])
                                ) {
                                  tips.html(
                                    'As extensões permitidas são: ' +
                                    showExtension(ext_image)
                                  );
                                  bValid &= false;
                                }
                                break;
                              case 'Video':
                                if (
                                  !contains(ext_video, fx[fx.length - 1])
                                ) {
                                  tips.html(
                                    'As extensões permitidas são: ' +
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
                  $('#adicionarDialogo').dialog('close');
                  $('#adicionarState').html('');
                  $('#adicionarDialogo').dialog('option', 'buttons', {
                    Cancelar: function () {
                      $(this).dialog('close');
                    },
                    Adicionar: function () {
                      var bValid = true,
                        tips = $('#adicionarState'),
                        tipo = $('#tipoToInsert option:selected').text(),
                        nameToInsert = $('#nameToInsert');
                      bValid =
                        bValid &&
                        checkLength(nameToInsert, 'nome', 3, 100, tips);
                      if (bValid) {
                        if (path == null) {
                          tips.html('Deves selecionar o path primeiro.');
                          bValid &= false;
                        } else {
                          var fx = path.split('.');
                          switch (tipo) {
                            case 'PDF':
                              if (!contains(ext_pdf, fx[fx.length - 1])) {
                                tips.html(
                                  'As extensões permitidas são: ' +
                                  showExtension(ext_pdf)
                                );
                                bValid &= false;
                              }
                              break;
                            case 'Imagem':
                              if (!contains(ext_image, fx[fx.length - 1])) {
                                tips.html(
                                  'As extensões permitidas são: ' +
                                  showExtension(ext_image)
                                );
                                bValid &= false;
                              }
                              break;
                            case 'Video':
                              if (!contains(ext_video, fx[fx.length - 1])) {
                                tips.html(
                                  'As extensões permitidas são: ' +
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

      //fechou imagem
      break;
    case 'Video':
      $.ajax({
        url: 'ajax/noticia_anexo/upload-add-vid.php',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        type: 'POST',
        success: function (result) {
          if (result.toLowerCase().indexOf('corrupt') >= 0) {
            $('#adicionarState').html('O ficheiro não é um video!');
            return;
          }
          var r = result.replace('{', '');
          r = r.replace('}', '');
          var fs = r.split('|');
          var count_file = fs.length;
          for (var i = 0; i < count_file; i++) {
            var file = fs[i];
            if (file.length > 6) {
              file = file.substring(8, file.length);
              var index = file.indexOf('"');
              if (index > 0) file = file.substring(0, file.length - 1);
              if (file.length > 10) {
                $('#adicionarState').html(
                  '<img src="images/preloader-01.gif" style="border: hidden"/>'
                );
                //alert("aqui"+$("#nameToInsert").val() +""+$("#nid").val()+""+ $("#tipoToInsert option:selected").val())
                $.post(
                  'ajax/noticia_anexo/insert.php',
                  {
                    path: file,
                    name: $('#nameToInsert').val(),
                    category: $('#tipoToInsert option:selected').val(),
                    nid: $('#nid').val(),
                  },
                  function (data) {
                    var result = parseInt(data.text);

                    if (result == 1) {
                      $('#adicionarState').html(
                        '<p>Os seus dados foram adicionados com êxito!</p>'
                      );
                      $('#adicionarDialogo').dialog('option', 'buttons', {
                        Fechar: function () {
                          $('#adicionarDialogo').dialog('close');
                          $('#adicionarState').html('');
                          $('#adicionarDialogo').dialog('option', 'buttons', {
                            Cancelar: function () {
                              $(this).dialog('close');
                            },
                            Adicionar: function () {
                              var bValid = true,
                                tips = $('#adicionarState'),
                                tipo = $(
                                  '#tipoToInsert option:selected'
                                ).text(),
                                nameToInsert = $('#nameToInsert');
                              bValid =
                                bValid &&
                                checkLength(nameToInsert, 'nome', 3, 100, tips);
                              if (bValid) {
                                if (path == null) {
                                  tips.html(
                                    'Deves selecionar o path primeiro.'
                                  );
                                  bValid &= false;
                                } else {
                                  var fx = path.split('.');
                                  switch (tipo) {
                                    case 'PDF':
                                      if (
                                        !contains(ext_pdf, fx[fx.length - 1])
                                      ) {
                                        tips.html(
                                          'As extensões permitidas são: ' +
                                          showExtension(ext_pdf)
                                        );
                                        bValid &= false;
                                      }
                                      break;
                                    case 'Imagem':
                                      if (
                                        !contains(ext_image, fx[fx.length - 1])
                                      ) {
                                        tips.html(
                                          'As extensões permitidas são: ' +
                                          showExtension(ext_image)
                                        );
                                        bValid &= false;
                                      }
                                      break;
                                    case 'Video':
                                      if (
                                        !contains(ext_video, fx[fx.length - 1])
                                      ) {
                                        tips.html(
                                          'As extensões permitidas são: ' +
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
                        $('#adicionarDialogo').dialog('close');
                        $('#adicionarState').html('');
                        $('#adicionarDialogo').dialog('option', 'buttons', {
                          Cancelar: function () {
                            $(this).dialog('close');
                          },
                          Adicionar: function () {
                            var bValid = true,
                              tips = $('#adicionarState'),
                              tipo = $('#tipoToInsert option:selected').text(),
                              nameToInsert = $('#nameToInsert');
                            bValid =
                              bValid &&
                              checkLength(nameToInsert, 'nome', 3, 100, tips);
                            if (bValid) {
                              if (path == null) {
                                tips.html('Deves selecionar o path primeiro.');
                                bValid &= false;
                              } else {
                                var fx = path.split('.');
                                switch (tipo) {
                                  case 'PDF':
                                    if (!contains(ext_pdf, fx[fx.length - 1])) {
                                      tips.html(
                                        'As extensões permitidas são: ' +
                                        showExtension(ext_pdf)
                                      );
                                      bValid &= false;
                                    }
                                    break;
                                  case 'Imagem':
                                    if (
                                      !contains(ext_image, fx[fx.length - 1])
                                    ) {
                                      tips.html(
                                        'As extensões permitidas são: ' +
                                        showExtension(ext_image)
                                      );
                                      bValid &= false;
                                    }
                                    break;
                                  case 'Video':
                                    if (
                                      !contains(ext_video, fx[fx.length - 1])
                                    ) {
                                      tips.html(
                                        'As extensões permitidas são: ' +
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
                      $('#adicionarState').addClass('ui-state-error');
                      $('#adicionarState').html(result);
                    }
                  },
                  'json'
                );
              }
            } else $('#adicionarState').html('O ficheiro não é um video!');
          }
        },
        error: function (result) {
          $('#adicionarState').html('<p>' + result.d + '</p>');
        },
      });
      break;
  }
}

function modificar(id) {
  var name = $('#' + id + 'name').val(),
    old_path = $('#' + id + 'path').val(),
    category = $('#' + id + 'category').val();
  $('#idToUpdate').val(id);
  $('#nameToUpdate').val(name);
  $('#old_pathToUpdate').val(old_path);
  $('#tipoToUpdate')
    .html("<img src='images/preloader-01.gif' />")
    .load(
      './ajax/selection/option.php',
      'tipo=tnewsfiletype&base=no',
      function () {
        $('#tipoToUpdate option:contains(' + category + ')').prop(
          'selected',
          true
        );
      }
    );
  $('#modificarDialogo').dialog('open');
}

function modificarAsync() {
  if (path != null && path != '') {
   // alert("entrei aqui");
    $('#modificarState').html("<img src='images/preloader-01.gif' />");
    tipo = $('#tipoToUpdate option:selected').text();
    switch (tipo) {
      case 'PDF':
        //aquiupdate
        var id = $('#idToUpdate').val();
       // alert(" id "+id);
        fileInput = document.getElementById('pathToUpdate');
        file = fileInput.files[0];
        if (!file) {
          $('#adicionarState').html("Por favor, selecione um arquivo!");
          return;
        }
        convertToBase64(file, function (base64String) {
          const fileName = file.name;
          fetch('ajax/noticia_anexo/update.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id:id,
              file: base64String,
              fileName: fileName,
              name: $('#nameToUpdate').val(),
              category: $('#tipoToUpdate option:selected').val()
            })
          })
            .then(response => response.text())  // Use text() temporariamente para capturar a resposta bruta
            .then(text => {
              console.log('Resposta bruta:',text);  // Exibir a resposta bruta na consola
              try {
                const data = JSON.parse(text);  // Tente converter a resposta para JSON manualmente
                if (data.text === '1') {
                  $('#modificarState').html("<p>Os seus dados foram adicionados com êxito!</p>");
                  $('#modificarDialogo').dialog('option', 'buttons', {
                    Fechar: function () {
                      $('#modificarDialogo').dialog('close');
                      $('#modificarState').html('');
                      $('#modificarDialogo').dialog('option', 'buttons', {
                        Cancelar: function () {
                          $(this).dialog('close');
                        },
                        Modificar: function () {
                          var bValid = true,
                            tips = $('#modificarState'),
                            tipo = $(
                              '#tipoToUpdate option:selected'
                            ).text(),
                            nameToUpdate = $('#nameToUpdate');
                          bValid =
                            bValid &&
                            checkLength(
                              nameToUpdate,
                              'nome',
                              3,
                              100,
                              tips
                            );
                          if (bValid) {
                            if (path == null) {
                              tips.html(
                                'Deves selecionar o path primeiro.'
                              );
                              bValid &= false;
                            } else {
                              var fx = path.split('.');
                              switch (tipo) {
                                case 'PDF':
                                  if (
                                    !contains(ext_pdf, fx[fx.length - 1])
                                  ) {
                                    tips.html(
                                      'As extensões permitidas são: ' +
                                      showExtension(ext_pdf)
                                    );
                                    bValid &= false;
                                  }
                                  break;
                                case 'Imagem':
                                  if (
                                    !contains(
                                      ext_image,
                                      fx[fx.length - 1]
                                    )
                                  ) {
                                    tips.html(
                                      'As extensões permitidas são: ' +
                                      showExtension(ext_image)
                                    );
                                    bValid &= false;
                                  }
                                  break;
                                case 'Video':
                                  if (
                                    !contains(
                                      ext_video,
                                      fx[fx.length - 1]
                                    )
                                  ) {
                                    tips.html(
                                      'As extensões permitidas são: ' +
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
                    $('#modificarDialogo').dialog('close');
                    $('#modificarState').html('');
                    $('#modificarDialogo').dialog('option', 'buttons', {
                      Cancelar: function () {
                        $(this).dialog('close');
                      },
                      Modificar: function () {
                        var bValid = true,
                          tips = $('#modificarState'),
                          tipo = $(
                            '#tipoToUpdate option:selected'
                          ).text(),
                          nameToUpdate = $('#nameToUpdate');
                        bValid =
                          bValid &&
                          checkLength(nameToUpdate, 'nome', 3, 100, tips);
                        if (bValid) {
                          if (path == null) {
                            tips.html(
                              'Deves selecionar o path primeiro.'
                            );
                            bValid &= false;
                          } else {
                            var fx = path.split('.');
                            switch (tipo) {
                              case 'PDF':
                                if (
                                  !contains(ext_pdf, fx[fx.length - 1])
                                ) {
                                  tips.html(
                                    'As extensões permitidas são: ' +
                                    showExtension(ext_pdf)
                                  );
                                  bValid &= false;
                                }
                                break;
                              case 'Imagem':
                                if (
                                  !contains(ext_image, fx[fx.length - 1])
                                ) {
                                  tips.html(
                                    'As extensões permitidas são: ' +
                                    showExtension(ext_image)
                                  );
                                  bValid &= false;
                                }
                                break;
                              case 'Video':
                                if (
                                  !contains(ext_video, fx[fx.length - 1])
                                ) {
                                  tips.html(
                                    'As extensões permitidas são: ' +
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
                  $('#modificarState').html("<p>Erro ao salvar o arquivo: " + data.text + "</p>");
                }
              } catch (e) {
                $('#modificarState').html("<p>Erro ao processar a resposta do servidor</p>");
                // console.error('Erro ao processar JSON:', e, 'Resposta bruta:', text);
              }
            })
            .catch(error => {
              console.error('Erro na requisição:', error);
              $('#modificarState').html("<p>Erro na requisição</p>");
            });
        });
        //fechou
        break;
      case 'Imagem':
        // inicio
        var id = $('#idToUpdate').val();
        //alert(" id "+id);
        fileInput = document.getElementById('pathToUpdate');
        file = fileInput.files[0];
        if (!file) {
          $('#adicionarState').html("Por favor, selecione um arquivo!");
          return;
        }
        convertToBase64(file, function (base64String) {
          const fileName = file.name;
          fetch('ajax/noticia_anexo/update.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id:id,
              file: base64String,
              fileName: fileName,
              name: $('#nameToUpdate').val(),
              category: $('#tipoToUpdate option:selected').val()
            })
          })
            .then(response => response.text())  // Use text() temporariamente para capturar a resposta bruta
            .then(text => {
              console.log('Resposta bruta:',text);  // Exibir a resposta bruta na consola
              try {
                const data = JSON.parse(text);  // Tente converter a resposta para JSON manualmente
                if (data.text === '1') {
                  $('#modificarState').html("<p>Os seus dados foram adicionados com êxito!</p>");
                  $('#modificarDialogo').dialog('option', 'buttons', {
                    Fechar: function () {
                      $('#modificarDialogo').dialog('close');
                      $('#modificarState').html('');
                      $('#modificarDialogo').dialog('option', 'buttons', {
                        Cancelar: function () {
                          $(this).dialog('close');
                        },
                        Modificar: function () {
                          var bValid = true,
                            tips = $('#modificarState'),
                            tipo = $(
                              '#tipoToUpdate option:selected'
                            ).text(),
                            nameToUpdate = $('#nameToUpdate');
                          bValid =
                            bValid &&
                            checkLength(
                              nameToUpdate,
                              'nome',
                              3,
                              100,
                              tips
                            );
                          if (bValid) {
                            if (path == null) {
                              tips.html(
                                'Deves selecionar o path primeiro.'
                              );
                              bValid &= false;
                            } else {
                              var fx = path.split('.');
                              switch (tipo) {
                                case 'PDF':
                                  if (
                                    !contains(ext_pdf, fx[fx.length - 1])
                                  ) {
                                    tips.html(
                                      'As extensões permitidas são: ' +
                                      showExtension(ext_pdf)
                                    );
                                    bValid &= false;
                                  }
                                  break;
                                case 'Imagem':
                                  if (
                                    !contains(
                                      ext_image,
                                      fx[fx.length - 1]
                                    )
                                  ) {
                                    tips.html(
                                      'As extensões permitidas são: ' +
                                      showExtension(ext_image)
                                    );
                                    bValid &= false;
                                  }
                                  break;
                                case 'Video':
                                  if (
                                    !contains(
                                      ext_video,
                                      fx[fx.length - 1]
                                    )
                                  ) {
                                    tips.html(
                                      'As extensões permitidas são: ' +
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
                    $('#modificarDialogo').dialog('close');
                    $('#modificarState').html('');
                    $('#modificarDialogo').dialog('option', 'buttons', {
                      Cancelar: function () {
                        $(this).dialog('close');
                      },
                      Modificar: function () {
                        var bValid = true,
                          tips = $('#modificarState'),
                          tipo = $(
                            '#tipoToUpdate option:selected'
                          ).text(),
                          nameToUpdate = $('#nameToUpdate');
                        bValid =
                          bValid &&
                          checkLength(nameToUpdate, 'nome', 3, 100, tips);
                        if (bValid) {
                          if (path == null) {
                            tips.html(
                              'Deves selecionar o path primeiro.'
                            );
                            bValid &= false;
                          } else {
                            var fx = path.split('.');
                            switch (tipo) {
                              case 'PDF':
                                if (
                                  !contains(ext_pdf, fx[fx.length - 1])
                                ) {
                                  tips.html(
                                    'As extensões permitidas são: ' +
                                    showExtension(ext_pdf)
                                  );
                                  bValid &= false;
                                }
                                break;
                              case 'Imagem':
                                if (
                                  !contains(ext_image, fx[fx.length - 1])
                                ) {
                                  tips.html(
                                    'As extensões permitidas são: ' +
                                    showExtension(ext_image)
                                  );
                                  bValid &= false;
                                }
                                break;
                              case 'Video':
                                if (
                                  !contains(ext_video, fx[fx.length - 1])
                                ) {
                                  tips.html(
                                    'As extensões permitidas são: ' +
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
                  $('#modificarState').html("<p>Erro ao salvar o arquivo: " + data.text + "</p>");
                }
              } catch (e) {
                $('#modificarState').html("<p>Erro ao processar a resposta do servidor</p>");
                // console.error('Erro ao processar JSON:', e, 'Resposta bruta:', text);
              }
            })
            .catch(error => {
              console.error('Erro na requisição:', error);
              $('#modificarState').html("<p>Erro na requisição</p>");
            });
        });
        // fechou aqui
        break;
      case 'Video':
        $.ajax({
          url: 'ajax/noticia_anexo/upload-upd-vid.php',
          data: data,
          cache: false,
          contentType: false,
          processData: false,
          type: 'POST',
          success: function (result) {
            if (result.toLowerCase().indexOf('corrupt') >= 0) {
              $('#modificarState').html('O ficheiro não é um video!');
              return;
            }
            var r = result.replace('{', '');
            r = r.replace('}', '');
            var fs = r.split('|');
            var count_file = fs.length;
            for (var i = 0; i < count_file; i++) {
              var file = fs[i];
              if (file.length > 6) {
                file = file.substring(8, file.length);
                var index = file.indexOf('"');
                if (index > 0) file = file.substring(0, file.length - 1);
                $('#modificarState').html(
                  '<img src="images/preloader-01.gif" style="border: hidden"/>'
                );
                var id = $('#idToUpdate').val();
                $.post(
                  'ajax/noticia_anexo/update.php',
                  {
                    id: id,
                    path: file,
                    name: $('#nameToUpdate').val(),
                    old_path: $('#' + id + 'path').val(),
                    category: $('#tipoToUpdate option:selected').val(),
                  },
                  function (data) {
                    var result = parseInt(data.text);
                    if (result == 1) {
                      $('#modificarState').html(
                        '<p>Os seus dados foram adicionados com êxito!</p>'
                      );
                      $('#modificarDialogo').dialog('option', 'buttons', {
                        Fechar: function () {
                          $('#modificarDialogo').dialog('close');
                          $('#modificarState').html('');
                          $('#modificarDialogo').dialog('option', 'buttons', {
                            Cancelar: function () {
                              $(this).dialog('close');
                            },
                            Modificar: function () {
                              var bValid = true,
                                tips = $('#modificarState'),
                                tipo = $(
                                  '#tipoToUpdate option:selected'
                                ).text(),
                                nameToUpdate = $('#nameToUpdate');
                              bValid =
                                bValid &&
                                checkLength(nameToUpdate, 'nome', 3, 100, tips);
                              if (bValid) {
                                if (path == null || path == '') {
                                  modificarAsync();
                                } else {
                                  var fx = path.split('.');
                                  switch (tipo) {
                                    case 'PDF':
                                      if (
                                        !contains(ext_pdf, fx[fx.length - 1])
                                      ) {
                                        tips.html(
                                          'As extensões permitidas são: ' +
                                          showExtension(ext_pdf)
                                        );
                                        bValid &= false;
                                      }
                                      break;
                                    case 'Imagem':
                                      if (
                                        !contains(ext_image, fx[fx.length - 1])
                                      ) {
                                        tips.html(
                                          'As extensões permitidas são: ' +
                                          showExtension(ext_image)
                                        );
                                        bValid &= false;
                                      }
                                      break;
                                    case 'Video':
                                      if (
                                        !contains(ext_video, fx[fx.length - 1])
                                      ) {
                                        tips.html(
                                          'As extensões permitidas são: ' +
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
                        $('#modificarDialogo').dialog('close');
                        $('#modificarState').html('');
                        $('#modificarDialogo').dialog('option', 'buttons', {
                          Cancelar: function () {
                            $(this).dialog('close');
                          },
                          Modificar: function () {
                            var bValid = true,
                              tips = $('#modificarState'),
                              tipo = $('#tipoToUpdate option:selected').text(),
                              nameToUpdate = $('#nameToUpdate');
                            bValid =
                              bValid &&
                              checkLength(nameToUpdate, 'nome', 3, 100, tips);
                            if (bValid) {
                              if (path == null || path == '') {
                                modificarAsync();
                              } else {
                                var fx = path.split('.');
                                switch (tipo) {
                                  case 'PDF':
                                    if (!contains(ext_pdf, fx[fx.length - 1])) {
                                      tips.html(
                                        'As extensões permitidas são: ' +
                                        showExtension(ext_pdf)
                                      );
                                      bValid &= false;
                                    }
                                    break;
                                  case 'Imagem':
                                    if (
                                      !contains(ext_image, fx[fx.length - 1])
                                    ) {
                                      tips.html(
                                        'As extensões permitidas são: ' +
                                        showExtension(ext_image)
                                      );
                                      bValid &= false;
                                    }
                                    break;
                                  case 'Video':
                                    if (
                                      !contains(ext_video, fx[fx.length - 1])
                                    ) {
                                      tips.html(
                                        'As extensões permitidas são: ' +
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
                      $('#modificarState').addClass('ui-state-error');
                      $('#modificarState').html(result);
                    }
                  },
                  'json'
                );
              } else $('#modificarState').html('O ficheiro não é um video!');
            }
          },
          error: function (result) {
            $('#modificarState').html('<p>' + result.d + '</p>');
          },
        });
        break;
    }
  } else {
    $('#modificarState').html("<img src='images/preloader-01.gif' />");
    var tipo = $('#tipoToUpdate option:selected').text();
    switch (tipo) {
      case 'PDF':
        var id = $('#idToUpdate').val();
        $.post(
          'ajax/noticia_anexo/update.php',
          {
            id: id,
            path: $('#' + id + 'path').val(),
            name: $('#nameToUpdate').val(),
            old_path: $('#' + id + 'path').val(),
            category: $('#tipoToUpdate option:selected').val(),
          },
          function (data) {
            var result = parseInt(data.text);
            if (result == 1) {
              $('#modificarState').html(
                '<p>Os seus dados foram adicionados com êxito!</p>'
              );
              $('#modificarDialogo').dialog('option', 'buttons', {
                Fechar: function () {
                  $('#modificarDialogo').dialog('close');
                  $('#modificarState').html('');
                  $('#modificarDialogo').dialog('option', 'buttons', {
                    Cancelar: function () {
                      $(this).dialog('close');
                    },
                    Modificar: function () {
                      var bValid = true,
                        tips = $('#modificarState'),
                        tipo = $('#tipoToUpdate option:selected').text(),
                        nameToUpdate = $('#nameToUpdate');
                      bValid =
                        bValid &&
                        checkLength(nameToUpdate, 'nome', 3, 100, tips);
                      if (bValid) {
                        if (path == null || path == '') {
                          modificarAsync();
                        } else {
                          var fx = path.split('.');
                          switch (tipo) {
                            case 'PDF':
                              if (!contains(ext_pdf, fx[fx.length - 1])) {
                                tips.html(
                                  'As extensões permitidas são: ' +
                                  showExtension(ext_pdf)
                                );
                                bValid &= false;
                              }
                              break;
                            case 'Imagem':
                              if (!contains(ext_image, fx[fx.length - 1])) {
                                tips.html(
                                  'As extensões permitidas são: ' +
                                  showExtension(ext_image)
                                );
                                bValid &= false;
                              }
                              break;
                            case 'Video':
                              if (!contains(ext_video, fx[fx.length - 1])) {
                                tips.html(
                                  'As extensões permitidas são: ' +
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
                $('#modificarDialogo').dialog('close');
                $('#modificarState').html('');
                $('#modificarDialogo').dialog('option', 'buttons', {
                  Cancelar: function () {
                    $(this).dialog('close');
                  },
                  Modificar: function () {
                    var bValid = true,
                      tips = $('#modificarState'),
                      tipo = $('#tipoToUpdate option:selected').text(),
                      nameToUpdate = $('#nameToUpdate');
                    bValid =
                      bValid && checkLength(nameToUpdate, 'nome', 3, 100, tips);
                    if (bValid) {
                      if (path == null || path == '') {
                        modificarAsync();
                      } else {
                        var fx = path.split('.');
                        switch (tipo) {
                          case 'PDF':
                            if (!contains(ext_pdf, fx[fx.length - 1])) {
                              tips.html(
                                'As extensões permitidas são: ' +
                                showExtension(ext_pdf)
                              );
                              bValid &= false;
                            }
                            break;
                          case 'Imagem':
                            if (!contains(ext_image, fx[fx.length - 1])) {
                              tips.html(
                                'As extensões permitidas são: ' +
                                showExtension(ext_image)
                              );
                              bValid &= false;
                            }
                            break;
                          case 'Video':
                            if (!contains(ext_video, fx[fx.length - 1])) {
                              tips.html(
                                'As extensões permitidas são: ' +
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
              $('#modificarState').addClass('ui-state-error');
              $('#modificarState').html(result);
            }
          },
          'json'
        );
        break;
      case 'Imagem':
        var id = $('#idToUpdate').val();
        $.post(
          'ajax/noticia_anexo/update.php',
          {
            id: id,
            path: $('#' + id + 'path').val(),
            name: $('#nameToUpdate').val(),
            old_path: $('#' + id + 'path').val(),
            category: $('#tipoToUpdate option:selected').val(),
          },
          function (data) {
            var result = parseInt(data.text);
            if (result == 1) {
              $('#modificarState').html(
                '<p>Os seus dados foram adicionados com êxito!</p>'
              );
              $('#modificarDialogo').dialog('option', 'buttons', {
                Fechar: function () {
                  $('#modificarDialogo').dialog('close');
                  $('#modificarState').html('');
                  $('#modificarDialogo').dialog('option', 'buttons', {
                    Cancelar: function () {
                      $(this).dialog('close');
                    },
                    Modificar: function () {
                      var bValid = true,
                        tips = $('#modificarState'),
                        tipo = $('#tipoToUpdate option:selected').text(),
                        nameToUpdate = $('#nameToUpdate');
                      bValid =
                        bValid &&
                        checkLength(nameToUpdate, 'nome', 3, 100, tips);
                      if (bValid) {
                        if (path == null || path == '') {
                          modificarAsync();
                        } else {
                          var fx = path.split('.');
                          switch (tipo) {
                            case 'PDF':
                              if (!contains(ext_pdf, fx[fx.length - 1])) {
                                tips.html(
                                  'As extensões permitidas são: ' +
                                  showExtension(ext_pdf)
                                );
                                bValid &= false;
                              }
                              break;
                            case 'Imagem':
                              if (!contains(ext_image, fx[fx.length - 1])) {
                                tips.html(
                                  'As extensões permitidas são: ' +
                                  showExtension(ext_image)
                                );
                                bValid &= false;
                              }
                              break;
                            case 'Video':
                              if (!contains(ext_video, fx[fx.length - 1])) {
                                tips.html(
                                  'As extensões permitidas são: ' +
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
                $('#modificarDialogo').dialog('close');
                $('#modificarState').html('');
                $('#modificarDialogo').dialog('option', 'buttons', {
                  Cancelar: function () {
                    $(this).dialog('close');
                  },
                  Modificar: function () {
                    var bValid = true,
                      tips = $('#modificarState'),
                      tipo = $('#tipoToUpdate option:selected').text(),
                      nameToUpdate = $('#nameToUpdate');
                    bValid =
                      bValid && checkLength(nameToUpdate, 'nome', 3, 100, tips);
                    if (bValid) {
                      if (path == null || path == '') {
                        modificarAsync();
                      } else {
                        var fx = path.split('.');
                        switch (tipo) {
                          case 'PDF':
                            if (!contains(ext_pdf, fx[fx.length - 1])) {
                              tips.html(
                                'As extensões permitidas são: ' +
                                showExtension(ext_pdf)
                              );
                              bValid &= false;
                            }
                            break;
                          case 'Imagem':
                            if (!contains(ext_image, fx[fx.length - 1])) {
                              tips.html(
                                'As extensões permitidas são: ' +
                                showExtension(ext_image)
                              );
                              bValid &= false;
                            }
                            break;
                          case 'Video':
                            if (!contains(ext_video, fx[fx.length - 1])) {
                              tips.html(
                                'As extensões permitidas são: ' +
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
              $('#modificarState').addClass('ui-state-error');
              $('#modificarState').html(result);
            }
          },
          'json'
        );
        break;
      case 'Video':
        var id = $('#idToUpdate').val();
        $.post(
          'ajax/noticia_anexo/update.php',
          {
            id: id,
            path: $('#' + id + 'path').val(),
            name: $('#nameToUpdate').val(),
            old_path: $('#' + id + 'path').val(),
            category: $('#tipoToUpdate option:selected').val(),
          },
          function (data) {
            var result = parseInt(data.text);
            if (result == 1) {
              $('#modificarState').html(
                '<p>Os seus dados foram adicionados com êxito!</p>'
              );
              $('#modificarDialogo').dialog('option', 'buttons', {
                Fechar: function () {
                  $('#modificarDialogo').dialog('close');
                  $('#modificarState').html('');
                  $('#modificarDialogo').dialog('option', 'buttons', {
                    Cancelar: function () {
                      $(this).dialog('close');
                    },
                    Modificar: function () {
                      var bValid = true,
                        tips = $('#modificarState'),
                        tipo = $('#tipoToUpdate option:selected').text(),
                        nameToUpdate = $('#nameToUpdate');
                      bValid =
                        bValid &&
                        checkLength(nameToUpdate, 'nome', 3, 100, tips);
                      if (bValid) {
                        if (path == null || path == '') {
                          modificarAsync();
                        } else {
                          var fx = path.split('.');
                          switch (tipo) {
                            case 'PDF':
                              if (!contains(ext_pdf, fx[fx.length - 1])) {
                                tips.html(
                                  'As extensões permitidas são: ' +
                                  showExtension(ext_pdf)
                                );
                                bValid &= false;
                              }
                              break;
                            case 'Imagem':
                              if (!contains(ext_image, fx[fx.length - 1])) {
                                tips.html(
                                  'As extensões permitidas são: ' +
                                  showExtension(ext_image)
                                );
                                bValid &= false;
                              }
                              break;
                            case 'Video':
                              if (!contains(ext_video, fx[fx.length - 1])) {
                                tips.html(
                                  'As extensões permitidas são: ' +
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
                $('#modificarDialogo').dialog('close');
                $('#modificarState').html('');
                $('#modificarDialogo').dialog('option', 'buttons', {
                  Cancelar: function () {
                    $(this).dialog('close');
                  },
                  Modificar: function () {
                    var bValid = true,
                      tips = $('#modificarState'),
                      tipo = $('#tipoToUpdate option:selected').text(),
                      nameToUpdate = $('#nameToUpdate');
                    bValid =
                      bValid && checkLength(nameToUpdate, 'nome', 3, 100, tips);
                    if (bValid) {
                      if (path == null || path == '') {
                        modificarAsync();
                      } else {
                        var fx = path.split('.');
                        switch (tipo) {
                          case 'PDF':
                            if (!contains(ext_pdf, fx[fx.length - 1])) {
                              tips.html(
                                'As extensões permitidas são: ' +
                                showExtension(ext_pdf)
                              );
                              bValid &= false;
                            }
                            break;
                          case 'Imagem':
                            if (!contains(ext_image, fx[fx.length - 1])) {
                              tips.html(
                                'As extensões permitidas são: ' +
                                showExtension(ext_image)
                              );
                              bValid &= false;
                            }
                            break;
                          case 'Video':
                            if (!contains(ext_video, fx[fx.length - 1])) {
                              tips.html(
                                'As extensões permitidas são: ' +
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
              $('#modificarState').addClass('ui-state-error');
              $('#modificarState').html(result);
            }
          },
          'json'
        );
        break;
    }
  }
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

function scheduleNewsFileCategory(event) { }
