var num = 1;
$(function () {
  var usernameToInsert = $("#usernameToInsert"),
    usernameToUpdate = $("#usernameToUpdate"),
    usernameToRemove = $("#usernameToRemove"),
    passwordToInsert = $("#passwordToInsert"),
    passwordToUpdate = $("#passwordToUpdate"),
    emailToInsert = $("#emailToInsert"),
    emailToUpdate = $("#emailToUpdate"),
    accessToInsert = $("#accessToInsert"),
    accessToUpdate = $("#accessToUpdate"),
    allFields = $([])
      .add(usernameToInsert)
      .add(passwordToInsert)
      .add(emailToInsert)
      .add(accessToInsert)
      .add(usernameToUpdate)
      .add(passwordToUpdate)
      .add(emailToUpdate)
      .add(accessToUpdate)
      .add(usernameToRemove);

  //usuario Dialogo
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
        allFields.removeClass("ui-state-error");
        if (usernameToInsert.val() == "") {
          tips.html("O nome de utilizador não deve ser em branco.");
          usernameToInsert.addClass("ui-state-error");
          usernameToInsert.focus();
        } else if (passwordToInsert.val() == "") {
          tips.html("A palavra passe não deve ser em branco.");
          passwordToInsert.addClass("uistate-error");
          passwordToInsert.focus();
        } else if (usernameToInsert.val() == passwordToInsert.val()) {
          tips.html(
            "A palavra-passe deve ser diferente do nome do utilizador."
          );
          passwordToInsert.addClass("ui-state-error");
          passwordToInsert.focus();
        } else {
          bValid =
            bValid &&
            checkLength(usernameToInsert, "nome do utilizador", 3, 20, tips);
          bValid =
            bValid &&
            checkRegexp(
              usernameToInsert,
              /^[QWEÉÈÊẼRTYÝỲỸŶUÚÙŨÛÍÌĨÎOÓÒÕÔPAÃÂÁÀSDFGHJKLÇZXCVBNM]([0-9qweéèẽêrtyýỳỹŷiíìîĩoóòôõpaáàãâsdfghjklçzxcvbnmQWEÉÈÊẼRTYÝỲỸŶUÚÙŨÛÍÌĨÎOÓÒÕÔPAÃÂÁÀSDFGHJKLÇZXCVBNM_])+$/i,
              "O Nome de utilizador deve estar constituído por caractéres de a-z, 0-9, underscores, começando por uma letra.",
              tips
            );
          bValid =
            bValid &&
            checkLength(passwordToInsert, "palavra passe", 6, 50, tips);
          bValid =
            bValid &&
            checkRegexp(
              passwordToInsert,
              /[0-9]/,
              "A Palavra-passe deve estar constituída pelo menos 1 número.",
              tips
            );
          bValid =
            bValid &&
            checkRegexp(
              passwordToInsert,
              /[qweéèẽêrtyýỳỹŷiíìîĩoóòôõpaáàãâsdfghjklçzxcvbnm]/,
              "A Palavra-passe deve estar constituída pelo menos 1 letra minúscula.",
              tips
            );
          bValid =
            bValid &&
            checkRegexp(
              passwordToInsert,
              /[QWEÉÈÊẼRTYÝỲỸŶUÚÙŨÛÍÌĨÎOÓÒÕÔPAÃÂÁÀSDFGHJKLÇZXCVBNM]/,
              "A Palavra-passe deve estar constituída pelo menos 1 letra maiúscula.",
              tips
            );
          bValid =
            bValid &&
            checkRegexp(
              passwordToInsert,
              /[@#$%&*+-?!~^]/,
              "A Palavra-passe deve estar constituída pelo menos 1 caracter especial.",
              tips
            );
          bValid = bValid && checkLength(emailToInsert, "email", 3, 50, tips);
          bValid =
            bValid &&
            checkRegexp(
              emailToInsert,
              /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
              "exemplo. alguem@dominio.com",
              tips
            );
          bValid =
            bValid &&
            checkRegexp(
              accessToInsert,
              /[01]/,
              "O nível de acesso apenas só poderá ser 0 ou 1.",
              tips
            );
          if (bValid) {
            adicionarAsync();
          }
        }
      },
    },
    close: function () {
      allFields.val("").removeClass("ui-state-error");
      $("#adicionar").tooltip("close");
      $("#adicionarState").html("");
      $("#adicionarState").removeClass("ui-state-error");
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
        allFields.removeClass("ui-state-error");
        if (usernameToUpdate.val() == "") {
          tips.html("O nome de utilizador não deve ser em branco.");
          usernameToUpdate.addClass("ui-state-error");
          usernameToUpdate.focus();
        } else if (passwordToUpdate.val() == "") {
          tips.html("A palavra passe não deve ser em branco.");
          passwordToUpdate.addClass("uistate-error");
          passwordToUpdate.focus();
        } else if (usernameToUpdate.val() == passwordToUpdate.val()) {
          tips.html(
            "A palavra-passe deve ser diferente do nome do utilizador."
          );
          passwordToUpdate.addClass("ui-state-error");
          passwordToUpdate.focus();
        } else {
          bValid =
            bValid &&
            checkLength(usernameToUpdate, "nome do utilizador", 3, 20, tips);
          bValid =
            bValid &&
            checkRegexp(
              usernameToUpdate,
              /^[QWEÉÈÊẼRTYÝỲỸŶUÚÙŨÛÍÌĨÎOÓÒÕÔPAÃÂÁÀSDFGHJKLÇZXCVBNM]([0-9qweéèẽêrtyýỳỹŷiíìîĩoóòôõpaáàãâsdfghjklçzxcvbnmQWEÉÈÊẼRTYÝỲỸŶUÚÙŨÛÍÌĨÎOÓÒÕÔPAÃÂÁÀSDFGHJKLÇZXCVBNM_])+$/i,
              "O Nome de utilizador deve estar constituído por caractéres de a-z, 0-9, underscores, começando por uma letra.",
              tips
            );
          bValid =
            bValid &&
            checkLength(passwordToUpdate, "palavra passe", 6, 50, tips);
          bValid =
            bValid &&
            checkRegexp(
              passwordToUpdate,
              /[0-9]/,
              "A Palavra-passe deve estar constituída pelo menos 1 número.",
              tips
            );
          bValid =
            bValid &&
            checkRegexp(
              passwordToUpdate,
              /[qweéèẽêrtyýỳỹŷiíìîĩoóòôõpaáàãâsdfghjklçzxcvbnm]/,
              "A Palavra-passe deve estar constituída pelo menos 1 letra minúscula.",
              tips
            );
          bValid =
            bValid &&
            checkRegexp(
              passwordToUpdate,
              /[QWEÉÈÊẼRTYÝỲỸŶUÚÙŨÛÍÌĨÎOÓÒÕÔPAÃÂÁÀSDFGHJKLÇZXCVBNM]/,
              "A Palavra-passe deve estar constituída pelo menos 1 letra maiúscula.",
              tips
            );
          bValid =
            bValid &&
            checkRegexp(
              passwordToUpdate,
              /[@#$%&*+-?!~^]/,
              "A Palavra-passe deve estar constituída pelo menos 1 caracter especial.",
              tips
            );
          bValid = bValid && checkLength(emailToUpdate, "email", 3, 50, tips);
          bValid =
            bValid &&
            checkRegexp(
              emailToUpdate,
              /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
              "exemplo. alguem@dominio.com",
              tips
            );
          bValid =
            bValid &&
            checkRegexp(
              accessToUpdate,
              /[01]/,
              "O nível de acesso apenas só poderá ser 0 ou 1.",
              tips
            );
          if (bValid) {
            modificarAsync();
          }
        }
      },
    },
    close: function () {
      allFields.val("").removeClass("ui-state-error");
      $("#modificar").tooltip("close");
      $("#modificarState").html("");
      $("#modificarState").removeClass("ui-state-error");
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
    modal: true,
    closeOnEscape: true,
    buttons: {
      Fechar: function () {
        $(this).dialog("close");
      },
    },
    close: function () {},
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
}
function visualizar(id) {
  var username = $("#" + id + "username").val(),
    password = $("#" + id + "password").val(),
    email = $("#" + id + "email").val(),
    access = $("#" + id + "access").val(),
    state = $("#" + id + "state").val();
  $("#usernameToView").val(username);
  $("#passwordToView").val(password);
  $("#emailToView").val(email);
  $("#accessToView").val(access);
  if (state == 1) $("#stateToView").prop("checked", true);
  else $("#stateToView").prop("checked", false);
  $("#visualizarDialogo").dialog("open");
}
function adicionar() {
  $("#adicionarDialogo").dialog("open");
}
function adicionarAsync() {
  //alert($("#usernameToInsert").val()+""+$("#passwordToInsert").val()+" "+ $("#emailToInsert").val()+" "+$("#accessToInsert").val())images/preloader-01.gif
  $("#adicionarState").html("<img src='images/preloader-01.gif' />");
  $.post(
    "ajax/utilizador/insert.php",
    {
      username: $("#usernameToInsert").val(),
      password: $("#passwordToInsert").val(),
      email: $("#emailToInsert").val(),
      access: $("#accessToInsert").val(),
    },
    function (data) {
      var result = parseInt(data.text);

      if (result > 0) {
        $("#adicionarState").html(
          "<p>Os seus dados foram adicionados com êxito!</p>"
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
                var bValid = true,
                  tips = $("#adicionarState"),
                  usernameToInsert = $("#usernameToInsert"),
                  passwordToInsert = $("#passwordToInsert"),
                  emailToInsert = $("#emailToInsert"),
                  accessToInsert = $("#accessToInsert");
                if (usernameToInsert.val() == "") {
                  tips.html("O nome de utilizador não deve ser em branco.");
                  usernameToInsert.addClass("ui-state-error");
                  usernameToInsert.focus();
                } else if (passwordToInsert.val() == "") {
                  tips.html("A palavra passe não deve ser em branco.");
                  passwordToInsert.addClass("uistate-error");
                  passwordToInsert.focus();
                } else if (usernameToInsert.val() == passwordToInsert.val()) {
                  tips.html(
                    "A palavra-passe deve ser diferente do nome do utilizador."
                  );
                  passwordToInsert.addClass("ui-state-error");
                  passwordToInsert.focus();
                } else {
                  bValid =
                    bValid &&
                    checkLength(
                      usernameToInsert,
                      "nome do utilizador",
                      3,
                      20,
                      tips
                    );
                  bValid =
                    bValid &&
                    checkRegexp(
                      usernameToInsert,
                      /^[QWEÉÈÊẼRTYÝỲỸŶUÚÙŨÛÍÌĨÎOÓÒÕÔPAÃÂÁÀSDFGHJKLÇZXCVBNM]([0-9qweéèẽêrtyýỳỹŷiíìîĩoóòôõpaáàãâsdfghjklçzxcvbnmQWEÉÈÊẼRTYÝỲỸŶUÚÙŨÛÍÌĨÎOÓÒÕÔPAÃÂÁÀSDFGHJKLÇZXCVBNM_])+$/i,
                      "O Nome de utilizador deve estar constituído por caractéres de a-z, 0-9, underscores, começando por uma letra.",
                      tips
                    );
                  bValid =
                    bValid &&
                    checkLength(passwordToInsert, "palavra passe", 6, 50, tips);
                  bValid =
                    bValid &&
                    checkRegexp(
                      passwordToInsert,
                      /[0-9]/,
                      "A Palavra-passe deve estar constituída pelo menos 1 número.",
                      tips
                    );
                  bValid =
                    bValid &&
                    checkRegexp(
                      passwordToInsert,
                      /[qweéèẽêrtyýỳỹŷiíìîĩoóòôõpaáàãâsdfghjklçzxcvbnm]/,
                      "A Palavra-passe deve estar constituída pelo menos 1 letra minúscula.",
                      tips
                    );
                  bValid =
                    bValid &&
                    checkRegexp(
                      passwordToInsert,
                      /[QWEÉÈÊẼRTYÝỲỸŶUÚÙŨÛÍÌĨÎOÓÒÕÔPAÃÂÁÀSDFGHJKLÇZXCVBNM]/,
                      "A Palavra-passe deve estar constituída pelo menos 1 letra maiúscula.",
                      tips
                    );
                  bValid =
                    bValid &&
                    checkRegexp(
                      passwordToInsert,
                      /[@#$%&*+-?!~^]/,
                      "A Palavra-passe deve estar constituída pelo menos 1 caracter especial.",
                      tips
                    );
                  bValid =
                    bValid && checkLength(emailToInsert, "email", 3, 50, tips);
                  bValid =
                    bValid &&
                    checkRegexp(
                      emailToInsert,
                      /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
                      "exemplo. alguem@dominio.com",
                      tips
                    );
                  bValid =
                    bValid &&
                    checkRegexp(
                      accessToInsert,
                      /[01]/,
                      "O nível de acesso apenas só poderá ser 0 ou 1.",
                      tips
                    );
                  if (bValid) {
                    adicionarAsync();
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
                usernameToInsert = $("#usernameToInsert"),
                passwordToInsert = $("#passwordToInsert"),
                emailToInsert = $("#emailToInsert"),
                accessToInsert = $("#accessToInsert");
              if (usernameToInsert.val() == "") {
                tips.html("O nome de utilizador não deve ser em branco.");
                usernameToInsert.addClass("ui-state-error");
                usernameToInsert.focus();
              } else if (passwordToInsert.val() == "") {
                tips.html("A palavra passe não deve ser em branco.");
                passwordToInsert.addClass("uistate-error");
                passwordToInsert.focus();
              } else if (usernameToInsert.val() == passwordToInsert.val()) {
                tips.html(
                  "A palavra-passe deve ser diferente do nome do utilizador."
                );
                passwordToInsert.addClass("ui-state-error");
                passwordToInsert.focus();
              } else {
                bValid =
                  bValid &&
                  checkLength(
                    usernameToInsert,
                    "nome do utilizador",
                    3,
                    20,
                    tips
                  );
                bValid =
                  bValid &&
                  checkRegexp(
                    usernameToInsert,
                    /^[QWEÉÈÊẼRTYÝỲỸŶUÚÙŨÛÍÌĨÎOÓÒÕÔPAÃÂÁÀSDFGHJKLÇZXCVBNM]([0-9qweéèẽêrtyýỳỹŷiíìîĩoóòôõpaáàãâsdfghjklçzxcvbnmQWEÉÈÊẼRTYÝỲỸŶUÚÙŨÛÍÌĨÎOÓÒÕÔPAÃÂÁÀSDFGHJKLÇZXCVBNM_])+$/i,
                    "O Nome de utilizador deve estar constituído por caractéres de a-z, 0-9, underscores, começando por uma letra.",
                    tips
                  );
                bValid =
                  bValid &&
                  checkLength(passwordToInsert, "palavra passe", 6, 50, tips);
                bValid =
                  bValid &&
                  checkRegexp(
                    passwordToInsert,
                    /[0-9]/,
                    "A Palavra-passe deve estar constituída pelo menos 1 número.",
                    tips
                  );
                bValid =
                  bValid &&
                  checkRegexp(
                    passwordToInsert,
                    /[qweéèẽêrtyýỳỹŷiíìîĩoóòôõpaáàãâsdfghjklçzxcvbnm]/,
                    "A Palavra-passe deve estar constituída pelo menos 1 letra minúscula.",
                    tips
                  );
                bValid =
                  bValid &&
                  checkRegexp(
                    passwordToInsert,
                    /[QWEÉÈÊẼRTYÝỲỸŶUÚÙŨÛÍÌĨÎOÓÒÕÔPAÃÂÁÀSDFGHJKLÇZXCVBNM]/,
                    "A Palavra-passe deve estar constituída pelo menos 1 letra maiúscula.",
                    tips
                  );
                bValid =
                  bValid &&
                  checkRegexp(
                    passwordToInsert,
                    /[@#$%&*+-?!~^]/,
                    "A Palavra-passe deve estar constituída pelo menos 1 caracter especial.",
                    tips
                  );
                bValid =
                  bValid && checkLength(emailToInsert, "email", 3, 50, tips);
                bValid =
                  bValid &&
                  checkRegexp(
                    emailToInsert,
                    /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
                    "exemplo. alguem@dominio.com",
                    tips
                  );
                bValid =
                  bValid &&
                  checkRegexp(
                    accessToInsert,
                    /[01]/,
                    "O nível de acesso apenas só poderá ser 0 ou 1.",
                    tips
                  );
                if (bValid) {
                  adicionarAsync();
                }
              }
            },
          });
        }, 1000);
      } else {
        $("#adicionarState").addClass("ui-state-error");
        $("#adicionarState").html("<p>Adição dos dados falhada!</p>");
      }
    },
    "json"
  );
}
function modificar(id) {
  var username = $("#" + id + "username").val(),
    password = $("#" + id + "password").val(),
    email = $("#" + id + "email").val(),
    access = $("#" + id + "access").val(),
    state = $("#" + id + "state").val();
  $("#idToUpdate").val(id);
  $("#usernameToUpdate").val(username);
  $("#passwordToUpdate").val(password);
  $("#emailToUpdate").val(email);
  $("#accessToUpdate").val(access);
  if (state == 1) $("#stateToUpdate").prop("checked", true);
  else $("#stateToUpdate").prop("checked", false);
  $("#modificarDialogo").dialog("open");
}
function modificarAsync() {
  $("#modificarState").html("<img src='images/preloader-01.gif' />");
  $.post(
    "ajax/utilizador/update.php",
    {
      id: $("#idToUpdate").val(),
      username: $("#usernameToUpdate").val(),
      password: $("#passwordToUpdate").val(),
      email: $("#emailToUpdate").val(),
      access: $("#accessToUpdate").val(),
      state: $("#stateToUpdate").is(":checked") ? 1 : 0,
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
                  usernameToUpdate = $("#usernameToUpdate"),
                  passwordToUpdate = $("#passwordToUpdate"),
                  emailToUpdate = $("#emailToUpdate"),
                  accessToUpdate = $("#accessToUpdate");
                if (usernameToUpdate.val() == "") {
                  tips.html("O nome de utilizador não deve ser em branco.");
                  usernameToUpdate.addClass("ui-state-error");
                  usernameToUpdate.focus();
                } else if (passwordToUpdate.val() == "") {
                  tips.html("A palavra passe não deve ser em branco.");
                  passwordToUpdate.addClass("uistate-error");
                  passwordToUpdate.focus();
                } else if (usernameToUpdate.val() == passwordToUpdate.val()) {
                  tips.html(
                    "A palavra-passe deve ser diferente do nome do utilizador."
                  );
                  passwordToUpdate.addClass("ui-state-error");
                  passwordToUpdate.focus();
                } else {
                  bValid =
                    bValid &&
                    checkLength(
                      usernameToUpdate,
                      "nome do utilizador",
                      3,
                      20,
                      tips
                    );
                  bValid =
                    bValid &&
                    checkRegexp(
                      usernameToUpdate,
                      /^[QWEÉÈÊẼRTYÝỲỸŶUÚÙŨÛÍÌĨÎOÓÒÕÔPAÃÂÁÀSDFGHJKLÇZXCVBNM]([0-9qweéèẽêrtyýỳỹŷiíìîĩoóòôõpaáàãâsdfghjklçzxcvbnmQWEÉÈÊẼRTYÝỲỸŶUÚÙŨÛÍÌĨÎOÓÒÕÔPAÃÂÁÀSDFGHJKLÇZXCVBNM_])+$/i,
                      "O Nome de utilizador deve estar constituído por caractéres de a-z, 0-9, underscores, começando por uma letra.",
                      tips
                    );
                  bValid =
                    bValid &&
                    checkLength(passwordToUpdate, "palavra passe", 6, 50, tips);
                  bValid =
                    bValid &&
                    checkRegexp(
                      passwordToUpdate,
                      /[0-9]/,
                      "A Palavra-passe deve estar constituída pelo menos 1 número.",
                      tips
                    );
                  bValid =
                    bValid &&
                    checkRegexp(
                      passwordToUpdate,
                      /[qweéèẽêrtyýỳỹŷiíìîĩoóòôõpaáàãâsdfghjklçzxcvbnm]/,
                      "A Palavra-passe deve estar constituída pelo menos 1 letra minúscula.",
                      tips
                    );
                  bValid =
                    bValid &&
                    checkRegexp(
                      passwordToUpdate,
                      /[QWEÉÈÊẼRTYÝỲỸŶUÚÙŨÛÍÌĨÎOÓÒÕÔPAÃÂÁÀSDFGHJKLÇZXCVBNM]/,
                      "A Palavra-passe deve estar constituída pelo menos 1 letra maiúscula.",
                      tips
                    );
                  bValid =
                    bValid &&
                    checkRegexp(
                      passwordToUpdate,
                      /[@#$%&*+-?!~^]/,
                      "A Palavra-passe deve estar constituída pelo menos 1 caracter especial.",
                      tips
                    );
                  bValid =
                    bValid && checkLength(emailToUpdate, "email", 3, 50, tips);
                  bValid =
                    bValid &&
                    checkRegexp(
                      emailToUpdate,
                      /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
                      "exemplo. alguem@dominio.com",
                      tips
                    );
                  bValid =
                    bValid &&
                    checkRegexp(
                      accessToUpdate,
                      /[01]/,
                      "O nível de acesso apenas só poderá ser 0 ou 1.",
                      tips
                    );
                  if (bValid) {
                    modificarAsync();
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
                usernameToUpdate = $("#usernameToUpdate"),
                passwordToUpdate = $("#passwordToUpdate"),
                emailToUpdate = $("#emailToUpdate"),
                accessToUpdate = $("#accessToUpdate");
              if (usernameToUpdate.val() == "") {
                tips.html("O nome de utilizador não deve ser em branco.");
                usernameToUpdate.addClass("ui-state-error");
                usernameToUpdate.focus();
              } else if (passwordToUpdate.val() == "") {
                tips.html("A palavra passe não deve ser em branco.");
                passwordToUpdate.addClass("uistate-error");
                passwordToUpdate.focus();
              } else if (usernameToUpdate.val() == passwordToUpdate.val()) {
                tips.html(
                  "A palavra-passe deve ser diferente do nome do utilizador."
                );
                passwordToUpdate.addClass("ui-state-error");
                passwordToUpdate.focus();
              } else {
                bValid =
                  bValid &&
                  checkLength(
                    usernameToUpdate,
                    "nome do utilizador",
                    3,
                    20,
                    tips
                  );
                bValid =
                  bValid &&
                  checkRegexp(
                    usernameToUpdate,
                    /^[QWEÉÈÊẼRTYÝỲỸŶUÚÙŨÛÍÌĨÎOÓÒÕÔPAÃÂÁÀSDFGHJKLÇZXCVBNM]([0-9qweéèẽêrtyýỳỹŷiíìîĩoóòôõpaáàãâsdfghjklçzxcvbnmQWEÉÈÊẼRTYÝỲỸŶUÚÙŨÛÍÌĨÎOÓÒÕÔPAÃÂÁÀSDFGHJKLÇZXCVBNM_])+$/i,
                    "O Nome de utilizador deve estar constituído por caractéres de a-z, 0-9, underscores, começando por uma letra.",
                    tips
                  );
                bValid =
                  bValid &&
                  checkLength(passwordToUpdate, "palavra passe", 6, 50, tips);
                bValid =
                  bValid &&
                  checkRegexp(
                    passwordToUpdate,
                    /[0-9]/,
                    "A Palavra-passe deve estar constituída pelo menos 1 número.",
                    tips
                  );
                bValid =
                  bValid &&
                  checkRegexp(
                    passwordToUpdate,
                    /[qweéèẽêrtyýỳỹŷiíìîĩoóòôõpaáàãâsdfghjklçzxcvbnm]/,
                    "A Palavra-passe deve estar constituída pelo menos 1 letra minúscula.",
                    tips
                  );
                bValid =
                  bValid &&
                  checkRegexp(
                    passwordToUpdate,
                    /[QWEÉÈÊẼRTYÝỲỸŶUÚÙŨÛÍÌĨÎOÓÒÕÔPAÃÂÁÀSDFGHJKLÇZXCVBNM]/,
                    "A Palavra-passe deve estar constituída pelo menos 1 letra maiúscula.",
                    tips
                  );
                bValid =
                  bValid &&
                  checkRegexp(
                    passwordToUpdate,
                    /[@#$%&*+-?!~^]/,
                    "A Palavra-passe deve estar constituída pelo menos 1 caracter especial.",
                    tips
                  );
                bValid =
                  bValid && checkLength(emailToUpdate, "email", 3, 50, tips);
                bValid =
                  bValid &&
                  checkRegexp(
                    emailToUpdate,
                    /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
                    "exemplo. alguem@dominio.com",
                    tips
                  );
                bValid =
                  bValid &&
                  checkRegexp(
                    accessToUpdate,
                    /[01]/,
                    "O nível de acesso apenas só poderá ser 0 ou 1.",
                    tips
                  );
                if (bValid) {
                  modificarAsync();
                }
              }
            },
          });
        }, 1000);
      } else {
        $("#modificarState").addClass("ui-state-error");
        $("#modificarState").html("<p>Modificação dos dados falhada!</p>");
      }
    },
    "json"
  );
}
