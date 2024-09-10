var num = 1;

$(function() {
    var namegabineteToInsert = $("#namegabineteToInsert"),
        siglagabineteToInsert = $("#siglagabineteToInsert"),
        namegabineteToUpdate = $("#namegabineteToUpdate"),
        siglagabineteToUpdate = $("#siglagabineteToUpdate");

    allFields = $([]).add(namegabineteToInsert).add(siglagabineteToInsert).add(namegabineteToUpdate).add(siglagabineteToUpdate);

    $("#adicionargabineteDialogo").dialog({
        autoOpen: false,
        resizable: true,
        show: "clip",
        hide: "clip",
        width: "500px",
        modal: true,
        closeOnEscape: true,
        buttons: {
            Cancelar: function() {
                $(this).dialog("close");
            },
            Adicionar: function() {
                var bValid = true,
                    tips = $("#adicionargabineteState");
                allFields.removeClass("ui-state-error");
                if (namegabineteToInsert.val() == "") {
                    tips.html("O nome da Entidade não deve ser em branco.");
                    namegabineteToInsert.addClass("ui-state-error");
                    namegabineteToInsert.focus();
                } else if (siglagabineteToInsert.val() == "") {
                    tips.html("A Sigla não deve ser em branco.");
                    siglagabineteToInsert.addClass("uistate-error");
                    siglagabineteToInsert.focus();

                } else {
                    if (bValid) {
                        adicionargabineteAsync();
                    }
                }
            },
        },
        close: function() {
            allFields.val("").removeClass("ui-state-error");
            $("#adicionar").tooltip("close");
            $("#adicionargabineteState").html("");
            $("#adicionargabineteState").removeClass("ui-state-error");
            $("#gabineteContent")
                .html("<img src='images/preloader-01.gif' />")
                .load("ajax/gabinete/view.php", "page=" + num + "&type=gabinete", function() {
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

    $("#modificargabineteDialogo").dialog({
        autoOpen: false,
        resizable: true,
        show: "clip",
        hide: "clip",
        width: "500px",
        modal: true,
        closeOnEscape: true,
        buttons: {
            Cancelar: function() {
                $(this).dialog("close");
            },
            Modificar: function() {
                var bValid = true,
                    tips = $("#adicionargabineteState");
                allFields.removeClass("ui-state-error");
                if (namegabineteToUpdate.val() == "") {
                    tips.html("O nome da Entidade não deve ser em branco.");
                    namegabineteToUpdate.addClass("ui-state-error");
                    namegabineteToUpdate.focus();
                } else if (siglagabineteToUpdate.val() == "") {
                    tips.html("A Sigla não deve ser em branco.");
                    siglagabineteToUpdate.addClass("uistate-error");
                    siglagabineteToUpdate.focus();

                } else {
                    if (bValid) {
                        modificagabineteAsync();
                    }
                }
            },
        },
        close: function() {
            allFields.val("").removeClass("ui-state-error");
            $("#adicionar").tooltip("close");
            $("#adicionargabineteState").html("");
            $("#adicionargabineteState").removeClass("ui-state-error");
            $("#gabineteContent")
                .html("<img src='images/preloader-01.gif' />")
                .load("ajax/gabinete/view.php", "page=" + num + "&type=gabinete", function() {
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
    $("#adicionargabinete").tooltip({
        show: {
            effect: "blind",
            delay: 50,
        },
        hide: {
            effect: "blind",
            delay: 150,
        },
    });
    $("#gabineteContent")
        .html("<img src='images/preloader-01.gif' />")
        .load("ajax/gabinete/view.php", "page=" + num + "&type=gabinete", function() {
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
        total % quantidade == 0 ?
        Math.floor(total / quantidade) :
        Math.floor(total / quantidade) + 1;
    if (num < group) {
        num = num + 1;
        mostrarContent(num);
    }
}

function mostrarContent(numero) {
    num = numero;
    var nid = $("#nid").val();
    $("#gabineteContent")
        .html("<img src='images/preloader-01.gif' />")
        .load(
            "ajax/gabinete/view.php",
            "page=" + num + "&nid=" + nid,
            function() {
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
    $("#namegabineteToUpdate").val(name);
    $("#siglagabineteToUpdate").val(sigla);

    $("#modificargabineteDialogo").dialog("open");
}

function modificagabineteAsync() {
    $("#modificargabineteState").html("<img src='images/preloader-01.gif' />");
    $.post("ajax/gabinete/update.php", {
            name: $("#namegabineteToUpdate").val(),
            sigla: $("#siglagabineteToUpdate").val(),
            id: $("#identidadeToUpdate").val()
        },
        function(data) {
            var result = parseInt(data.text);
            if (result > 0) {
                $("#modificargabineteState").html("<p>Os seus dados foram Modificar com êxito!</p>");
                $("#gabineteContent").html("<img src='images/preloader-01.gif' />").load("ajax/gabinete/view.php", "page=" + num + "&type=gabinete", function() {});
                $("#modificargabineteDialogo").dialog('option', 'buttons', {
                    'Fechar': function() {
                        $("#adicionargabineteDialogo").dialog("close");
                        $("#adicionargabineteState").html("");
                        $("#adicionargabineteDialogo").dialog('option', 'buttons', {
                            "Cancelar": function() {
                                $(this).dialog("close");
                            },
                            "Modificar": function() {
                                var bValid = true,
                                    tips = $("#modificargabineteState"),
                                    namegabineteToUpdate = $("#namegabineteToUpdate");
                                bValid = bValid && checkLength(namegabineteToUpdate, "nome da Entidade", 2, 50, tips);
                                siglagabineteToUpdate = $("#siglagabineteToInsert");
                                bValid = bValid && checkLength(siglagabineteToUpdate, "nome da Sigla", 2, 10, tips);
                                if (bValid) {
                                    modificagabineteAsync();
                                }
                            }
                        });
                    }
                });
                setTimeout(function() {
                    $("#modificargabineteDialogo").dialog("close");
                    $("#modificargabineteState").html("");
                    $("#modificargabineteDialogo").dialog('option', 'buttons', {
                        "Cancelar": function() {
                            $(this).dialog("close");
                        },
                        "Adicionar": function() {
                            var bValid = true,
                                tips = $("#modificargabineteState"),

                                namegabineteToUpdate = $("#namegabineteToUpdate");
                            bValid = bValid && checkLength(namegabineteToUpdate, "nome da Entidade", 2, 50, tips);
                            siglagabineteToUpdate = $("#siglagabineteToUpdate");
                            bValid = bValid && checkLength(siglagabineteToUpdate, "nome da Sigla", 2, 10, tips);
                            if (bValid) {
                                modificagabineteAsync();
                            }
                        }
                    });
                }, 1000);
            } else {
                $("#modificargabineteState").addClass("ui-state-error");
                $("#modificargabineteState").html("<p>Adição dos dados falhada!</p>");
            }
        }, "json");
}


function adicionarEntidade() {
    $("#adicionargabineteDialogo").dialog("open");
}

function adicionargabineteAsync() {
    var type = "gabinete";
    $("#adicionargabineteState").html("<img src='images/preloader-01.gif' />");
    $.post("ajax/gabinete/insert.php", {
            name: $("#namegabineteToInsert").val(),
            sigla: $("#siglagabineteToInsert").val(),
            tipo: type
        },
        function(data) {
            var result = parseInt(data.text);
            if (result > 0) {
                $("#adicionargabineteState").html("<p>Os seus dados foram adicionados com êxito!</p>");
                $("#gabineteContent").html("<img src='images/preloader-01.gif' />").load("ajax/gabinete/view.php", "page=" + num + "&type=gabinete", function() {});
                $("#adicionargabineteDialogo").dialog('option', 'buttons', {
                    'Fechar': function() {
                        $("#adicionargabineteDialogo").dialog("close");
                        $("#adicionargabineteState").html("");
                        $("#adicionargabineteDialogo").dialog('option', 'buttons', {
                            "Cancelar": function() {
                                $(this).dialog("close");
                            },
                            "Adicionar": function() {
                                var bValid = true,
                                    tips = $("#adicionargabineteState"),
                                    namegabineteToInsert = $("#namegabineteToInsert");
                                bValid = bValid && checkLength(namegabineteToInsert, "nome da Entidade", 2, 50, tips);
                                siglagabineteToInsert = $("#siglagabineteToInsert");
                                bValid = bValid && checkLength(siglagabineteToInsert, "nome da Sigla", 2, 10, tips);
                                if (bValid) {
                                    adicionargabineteAsync();
                                }
                            }
                        });
                    }
                });
                setTimeout(function() {
                    $("#adicionargabineteDialogo").dialog("close");
                    $("#adicionargabineteState").html("");
                    $("#adicionargabineteDialogo").dialog('option', 'buttons', {
                        "Cancelar": function() {
                            $(this).dialog("close");
                        },
                        "Adicionar": function() {
                            var bValid = true,
                                tips = $("#adicionargabineteState"),
                                tips = $("#adicionargabineteState"),
                                namegabineteToInsert = $("#namegabineteToInsert");
                            bValid = bValid && checkLength(namegabineteToInsert, "nome da Entidade", 2, 50, tips);
                            siglagabineteToInsert = $("#siglagabineteToInsert");
                            bValid = bValid && checkLength(siglagabineteToInsert, "nome da Sigla", 2, 10, tips);
                            if (bValid) {
                                adicionargabineteAsync();
                            }
                        }
                    });
                }, 1000);
            } else {
                $("#adicionargabineteState").addClass("ui-state-error");
                $("#adicionargabineteState").html("<p>Adição dos dados falhada!</p>");
            }
        }, "json");
}