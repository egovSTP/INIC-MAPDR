var num = 1;

$(function() {
    var namedirecaoToInsert = $("#namedirecaoToInsert"),
        sigladirecaoToInsert = $("#sigladirecaoToInsert"),
        namedirecaoToUpdate = $("#namedirecaoToUpdate"),
        sigladirecaoToUpdate = $("#sigladirecaoToUpdate");

    allFields = $([]).add(namedirecaoToInsert).add(sigladirecaoToInsert).add(namedirecaoToUpdate).add(sigladirecaoToUpdate);

    $("#adicionardirecaoDialogo").dialog({
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
                    tips = $("#adicionardirecaoState");
                allFields.removeClass("ui-state-error");
                if (namedirecaoToInsert.val() == "") {
                    tips.html("O nome da Entidade não deve ser em branco.");
                    namedirecaoToInsert.addClass("ui-state-error");
                    namedirecaoToInsert.focus();
                } else if (sigladirecaoToInsert.val() == "") {
                    tips.html("A Sigla não deve ser em branco.");
                    sigladirecaoToInsert.addClass("uistate-error");
                    sigladirecaoToInsert.focus();

                } else {
                    if (bValid) {
                        adicionardirecaoAsync();
                    }
                }
            },
        },
        close: function() {
            allFields.val("").removeClass("ui-state-error");
            $("#adicionar").tooltip("close");
            $("#adicionardirecaoState").html("");
            $("#adicionardirecaoState").removeClass("ui-state-error");
            $("#utilizadorContent")
                .html("<img src='images/preloader-01.gif' />")
                .load("ajax/utilizador/view.php", "page=" + num, function() {
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
    $("#modificardirecaoDialogo").dialog({
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
                    tips = $("#adicionardirecaoState");
                allFields.removeClass("ui-state-error");
                if (namedirecaoToUpdate.val() == "") {
                    tips.html("O nome da Entidade não deve ser em branco.");
                    namedirecaoToUpdate.addClass("ui-state-error");
                    namedirecaoToUpdate.focus();
                } else if (sigladirecaoToUpdate.val() == "") {
                    tips.html("A Sigla não deve ser em branco.");
                    sigladirecaoToUpdate.addClass("uistate-error");
                    sigladirecaoToUpdate.focus();

                } else {
                    if (bValid) {
                        modificadirecaoAsync();
                    }
                }
            },
        },
        close: function() {
            allFields.val("").removeClass("ui-state-error");
            $("#adicionar").tooltip("close");
            $("#adicionardirecaoState").html("");
            $("#adicionardirecaoState").removeClass("ui-state-error");
            $("#utilizadorContent")
                .html("<img src='images/preloader-01.gif' />")
                .load("ajax/utilizador/view.php", "page=" + num, function() {
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
    $("#adicionardirecao").tooltip({
        show: {
            effect: "blind",
            delay: 50,
        },
        hide: {
            effect: "blind",
            delay: 150,
        },
    });
    $("#direcaoContent")
        .html("<img src='images/preloader-01.gif' />")
        .load("ajax/direcao/view.php", "page=" + num + "&type=direcao", function() {
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
    $("#direcaoContent")
        .html("<img src='images/preloader-01.gif' />")
        .load(
            "ajax/direcao/view.php",
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

function modificar(id) {
    var name = $("#" + id + "name").val(),
        sigla = $("#" + id + "sigla").val();

    //  alert(tipo)
    $("#identidadeToUpdate").val(id);
    $("#namedirecaoToUpdate").val(name);
    $("#sigladirecaoToUpdate").val(sigla);

    $("#modificardirecaoDialogo").dialog("open");
}

function visualizar(id) {
  var name = $("#" + id + "name").val(),
    sigla = $("#" + id + "sigla").val();
  $("#nameToView").val(name);
  $("#siglaToView").val(sigla);
  $("#visualizarDialogo").dialog("open");
}

function modificadirecaoAsync() {
    $("#modificardirecaoState").html("<img src='images/preloader-01.gif' />");
    $.post("ajax/direcao/update.php", {
            name: $("#namedirecaoToUpdate").val(),
            sigla: $("#sigladirecaoToUpdate").val(),
            id: $("#identidadeToUpdate").val()
        },
        function(data) {
            var result = parseInt(data.text);
            if (result > 0) {
                $("#modificardirecaoState").html("<p>Os seus dados foram Modificar com êxito!</p>");
                $("#direcaoContent").html("<img src='images/preloader-01.gif' />").load("ajax/direcao/view.php", "page=" + num + "&type=direcao", function() {});
                $("#modificardirecaoDialogo").dialog('option', 'buttons', {
                    'Fechar': function() {
                        $("#adicionardirecaoDialogo").dialog("close");
                        $("#adicionardirecaoState").html("");
                        $("#adicionardirecaoDialogo").dialog('option', 'buttons', {
                            "Cancelar": function() {
                                $(this).dialog("close");
                            },
                            "Modificar": function() {
                                var bValid = true,
                                    tips = $("#modificardirecaoState"),
                                    namedirecaoToUpdate = $("#namedirecaoToUpdate");
                                bValid = bValid && checkLength(namedirecaoToUpdate, "nome da Entidade", 2, 50, tips);
                                sigladirecaoToUpdate = $("#sigladirecaoToInsert");
                                bValid = bValid && checkLength(sigladirecaoToUpdate, "nome da Sigla", 2, 10, tips);
                                if (bValid) {
                                    modificadirecaoAsync();
                                }
                            }
                        });
                    }
                });
                setTimeout(function() {
                    $("#modificardirecaoDialogo").dialog("close");
                    $("#modificardirecaoState").html("");
                    $("#modificardirecaoDialogo").dialog('option', 'buttons', {
                        "Cancelar": function() {
                            $(this).dialog("close");
                        },
                        "Adicionar": function() {
                            var bValid = true,
                                tips = $("#modificardirecaoState"),

                                namedirecaoToUpdate = $("#namedirecaoToUpdate");
                            bValid = bValid && checkLength(namedirecaoToUpdate, "nome da Entidade", 2, 50, tips);
                            sigladirecaoToUpdate = $("#sigladirecaoToUpdate");
                            bValid = bValid && checkLength(sigladirecaoToUpdate, "nome da Sigla", 2, 10, tips);
                            if (bValid) {
                                modificadirecaoAsync();
                            }
                        }
                    });
                }, 1000);
            } else {
                $("#modificardirecaoState").addClass("ui-state-error");
                $("#modificardirecaoState").html("<p>Adição dos dados falhada!</p>");
            }
        }, "json");
}

function adicionarEntidade() {
    $("#adicionardirecaoDialogo").dialog("open");
}

function adicionardirecaoAsync() {
    var type = "direcao";
    $("#adicionardirecaoState").html("<img src='images/preloader-01.gif' />");
    $.post("ajax/direcao/insert.php", {
            name: $("#namedirecaoToInsert").val(),
            sigla: $("#sigladirecaoToInsert").val(),
            tipo: type
        },
        function(data) {
            var result = parseInt(data.text);
            if (result > 0) {
                $("#adicionardirecaoState").html("<p>Os seus dados foram adicionados com êxito!</p>");
                $("#direcaoContent").html("<img src='images/preloader-01.gif' />").load("ajax/direcao/view.php", "page=" + num + "&type=direcao", function() {});
                $("#adicionardirecaoDialogo").dialog('option', 'buttons', {
                    'Fechar': function() {
                        $("#adicionardirecaoDialogo").dialog("close");
                        $("#adicionardirecaoState").html("");
                        $("#adicionardirecaoDialogo").dialog('option', 'buttons', {
                            "Cancelar": function() {
                                $(this).dialog("close");
                            },
                            "Adicionar": function() {
                                var bValid = true,
                                    tips = $("#adicionardirecaoState"),
                                    namedirecaoToInsert = $("#namedirecaoToInsert");
                                bValid = bValid && checkLength(namedirecaoToInsert, "nome da Entidade", 2, 50, tips);
                                sigladirecaoToInsert = $("#sigladirecaoToInsert");
                                bValid = bValid && checkLength(sigladirecaoToInsert, "nome da Sigla", 2, 10, tips);
                                if (bValid) {
                                    adicionardirecaoAsync();
                                }
                            }
                        });
                    }
                });
                setTimeout(function() {
                    $("#adicionardirecaoDialogo").dialog("close");
                    $("#adicionardirecaoState").html("");
                    $("#adicionardirecaoDialogo").dialog('option', 'buttons', {
                        "Cancelar": function() {
                            $(this).dialog("close");
                        },
                        "Adicionar": function() {
                            var bValid = true,
                                tips = $("#adicionardirecaoState"),
                                tips = $("#adicionardirecaoState"),
                                namedirecaoToInsert = $("#namedirecaoToInsert");
                            bValid = bValid && checkLength(namedirecaoToInsert, "nome da Entidade", 2, 50, tips);
                            sigladirecaoToInsert = $("#sigladirecaoToInsert");
                            bValid = bValid && checkLength(sigladirecaoToInsert, "nome da Sigla", 2, 10, tips);
                            if (bValid) {
                                adicionardirecaoAsync();
                            }
                        }
                    });
                }, 1000);
            } else {
                $("#adicionardirecaoState").addClass("ui-state-error");
                $("#adicionardirecaoState").html("<p>Adição dos dados falhada!</p>");
            }
        }, "json");
}