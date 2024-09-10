var num = 1;

$(function() {
    var nameinstituicaoToInsert = $("#nameinstituicaoToInsert"),
        siglainstituicaoToInsert = $("#siglainstituicaoToInsert"),
        nameinstituicaoToUpdate = $("#nameinstituicaoToUpdate"),
        siglainstituicaoToUpdate = $("#siglainstituicaoToUpdate");

    allFields = $([]).add(nameinstituicaoToInsert).add(siglainstituicaoToInsert).add(nameinstituicaoToUpdate).add(siglainstituicaoToUpdate);

    $("#adicionarinstituicaoDialogo").dialog({
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
                    tips = $("#adicionarinstituicaoState");
                allFields.removeClass("ui-state-error");
                if (nameinstituicaoToInsert.val() == "") {
                    tips.html("O nome da Entidade não deve ser em branco.");
                    nameinstituicaoToInsert.addClass("ui-state-error");
                    nameinstituicaoToInsert.focus();
                } else if (siglainstituicaoToInsert.val() == "") {
                    tips.html("A Sigla não deve ser em branco.");
                    siglainstituicaoToInsert.addClass("uistate-error");
                    siglainstituicaoToInsert.focus();

                } else {
                    if (bValid) {
                        adicionarinstituicaoAsync();
                    }
                }
            },
        },
        close: function() {
            allFields.val("").removeClass("ui-state-error");
            $("#adicionar").tooltip("close");
            $("#adicionarinstituicaoState").html("");
            $("#adicionarinstituicaoState").removeClass("ui-state-error");
            $("#instituicaoContent")
                .html("<img src='images/preloader-01.gif' />")
                .load("ajax/instituicao/view.php", "page=" + num + "&type=instituicao", function() {
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
    $("#modificarinstituicaoDialogo").dialog({
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
                    tips = $("#adicionarinstituicaoState");
                allFields.removeClass("ui-state-error");
                if (nameinstituicaoToUpdate.val() == "") {
                    tips.html("O nome da Entidade não deve ser em branco.");
                    nameinstituicaoToUpdate.addClass("ui-state-error");
                    nameinstituicaoToUpdate.focus();
                } else if (siglainstituicaoToUpdate.val() == "") {
                    tips.html("A Sigla não deve ser em branco.");
                    siglainstituicaoToUpdate.addClass("uistate-error");
                    siglainstituicaoToUpdate.focus();

                } else {
                    if (bValid) {
                        modificainstituicaoAsync();
                    }
                }
            },
        },
        close: function() {
            allFields.val("").removeClass("ui-state-error");
            $("#adicionar").tooltip("close");
            $("#adicionarinstituicaoState").html("");
            $("#adicionarinstituicaoState").removeClass("ui-state-error");
            $("#instituicaoContent")
                .html("<img src='images/preloader-01.gif' />")
                .load("ajax/instituicao/view.php", "page=" + num + "&type=instituicao", function() {
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
    $("#adicionarinstituicao").tooltip({
        show: {
            effect: "blind",
            delay: 50,
        },
        hide: {
            effect: "blind",
            delay: 150,
        },
    });
    $("#instituicaoContent")
        .html("<img src='images/preloader-01.gif' />")
        .load("ajax/instituicao/view.php", "page=" + num + "&type=instituicao", function() {
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
//instituicaoContent functions
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
    $("#instituicaoContent")
        .html("<img src='images/preloader-01.gif' />")
        .load(
            "ajax/instituicao/view.php",
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
    $("#nameinstituicaoToUpdate").val(name);
    $("#siglainstituicaoToUpdate").val(sigla);

    $("#modificarinstituicaoDialogo").dialog("open");
}

function modificainstituicaoAsync() {
    $("#modificarinstituicaoState").html("<img src='images/preloader-01.gif' />");
    $.post("ajax/instituicao/update.php", {
            name: $("#nameinstituicaoToUpdate").val(),
            sigla: $("#siglainstituicaoToUpdate").val(),
            id: $("#identidadeToUpdate").val()
        },
        function(data) {
            var result = parseInt(data.text);
            if (result > 0) {
                $("#modificarinstituicaoState").html("<p>Os seus dados foram Modificar com êxito!</p>");
                $("#instituicaoContent").html("<img src='images/preloader-01.gif' />").load("ajax/instituicao/view.php", "page=" + num + "&type=instituicao", function() {});
                $("#modificarinstituicaoDialogo").dialog('option', 'buttons', {
                    'Fechar': function() {
                        $("#adicionarinstituicaoDialogo").dialog("close");
                        $("#adicionarinstituicaoState").html("");
                        $("#adicionarinstituicaoDialogo").dialog('option', 'buttons', {
                            "Cancelar": function() {
                                $(this).dialog("close");
                            },
                            "Modificar": function() {
                                var bValid = true,
                                    tips = $("#modificarinstituicaoState"),
                                    nameinstituicaoToUpdate = $("#nameinstituicaoToUpdate");
                                bValid = bValid && checkLength(nameinstituicaoToUpdate, "nome da Entidade", 2, 50, tips);
                                siglainstituicaoToUpdate = $("#siglainstituicaoToInsert");
                                bValid = bValid && checkLength(siglainstituicaoToUpdate, "nome da Sigla", 2, 10, tips);
                                if (bValid) {
                                    modificainstituicaoAsync();
                                }
                            }
                        });
                    }
                });
                setTimeout(function() {
                    $("#modificarinstituicaoDialogo").dialog("close");
                    $("#modificarinstituicaoState").html("");
                    $("#modificarinstituicaoDialogo").dialog('option', 'buttons', {
                        "Cancelar": function() {
                            $(this).dialog("close");
                        },
                        "Adicionar": function() {
                            var bValid = true,
                                tips = $("#modificarinstituicaoState"),

                                nameinstituicaoToUpdate = $("#nameinstituicaoToUpdate");
                            bValid = bValid && checkLength(nameinstituicaoToUpdate, "nome da Entidade", 2, 50, tips);
                            siglainstituicaoToUpdate = $("#siglainstituicaoToUpdate");
                            bValid = bValid && checkLength(siglainstituicaoToUpdate, "nome da Sigla", 2, 10, tips);
                            if (bValid) {
                                modificainstituicaoAsync();
                            }
                        }
                    });
                }, 1000);
            } else {
                $("#modificarinstituicaoState").addClass("ui-state-error");
                $("#modificarinstituicaoState").html("<p>Adição dos dados falhada!</p>");
            }
        }, "json");
}


function adicionarEntidade() {
    $("#adicionarinstituicaoDialogo").dialog("open");
}





function adicionarinstituicaoAsync() {
    var type = "instituicao";

    $("#adicionarinstituicaoState").html("<img src='images/preloader-01.gif' />");
    $.post("ajax/instituicao/insert.php", {
            name: $("#nameinstituicaoToInsert").val(),
            sigla: $("#siglainstituicaoToInsert").val(),
            tipo: type
        },
        function(data) {
            var result = parseInt(data.text);
            if (result > 0) {
                $("#adicionarinstituicaoState").html("<p>Os seus dados foram adicionados com êxito!</p>");
                $("#instituicaoContent").html("<img src='images/preloader-01.gif' />").load("ajax/instituicao/view.php", "page=" + num + "&type=instituicao", function() {});
                $("#adicionarinstituicaoDialogo").dialog('option', 'buttons', {
                    'Fechar': function() {
                        $("#adicionarinstituicaoDialogo").dialog("close");
                        $("#adicionarinstituicaoState").html("");
                        $("#adicionarinstituicaoDialogo").dialog('option', 'buttons', {
                            "Cancelar": function() {
                                $(this).dialog("close");
                            },
                            "Adicionar": function() {
                                var bValid = true,
                                    tips = $("#adicionarinstituicaoState"),
                                    nameinstituicaoToInsert = $("#nameinstituicaoToInsert");
                                bValid = bValid && checkLength(nameinstituicaoToInsert, "nome da Entidade", 2, 50, tips);
                                siglainstituicaoToInsert = $("#siglainstituicaoToInsert");
                                bValid = bValid && checkLength(siglainstituicaoToInsert, "nome da Sigla", 2, 10, tips);
                                if (bValid) {
                                    adicionarinstituicaoAsync();
                                }
                            }
                        });
                    }
                });
                setTimeout(function() {
                    $("#adicionarinstituicaoDialogo").dialog("close");
                    $("#adicionarinstituicaoState").html("");
                    $("#adicionarinstituicaoDialogo").dialog('option', 'buttons', {
                        "Cancelar": function() {
                            $(this).dialog("close");
                        },
                        "Adicionar": function() {
                            var bValid = true,
                                tips = $("#adicionarinstituicaoState"),
                                tips = $("#adicionarinstituicaoState"),
                                nameinstituicaoToInsert = $("#nameinstituicaoToInsert");
                            bValid = bValid && checkLength(nameinstituicaoToInsert, "nome da Entidade", 2, 50, tips);
                            siglainstituicaoToInsert = $("#siglainstituicaoToInsert");
                            bValid = bValid && checkLength(siglainstituicaoToInsert, "nome da Sigla", 2, 10, tips);
                            if (bValid) {
                                adicionarinstituicaoAsync();
                            }
                        }
                    });
                }, 1000);
            } else {
                $("#adicionarinstituicaoState").addClass("ui-state-error");
                $("#adicionarinstituicaoState").html("<p>Adição dos dados falhada!</p>");
            }
        }, "json");
}