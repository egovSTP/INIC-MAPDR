var num = 1;

$(function() {
    var nameenitityToInsert = $("#nameenitityToInsert"),
        siglaenitityToInsert = $("#siglaenitityToInsert"),
        nameenitityToUpdate = $("#nameenitityToUpdate"),
        siglaenitityToUpdate = $("#siglaenitityToUpdate");

    allFields = $([]).add(nameenitityToInsert).add(siglaenitityToInsert).add(nameenitityToUpdate).add(siglaenitityToUpdate);

    $("#adicionarorganizationDialogo").dialog({
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
                    tips = $("#adicionarorganizationState");
                allFields.removeClass("ui-state-error");
                if (nameenitityToInsert.val() == "") {
                    tips.html("O nome da Entidade não deve ser em branco.");
                    nameenitityToInsert.addClass("ui-state-error");
                    nameenitityToInsert.focus();
                } else if (siglaenitityToInsert.val() == "") {
                    tips.html("A Sigla não deve ser em branco.");
                    siglaenitityToInsert.addClass("uistate-error");
                    siglaenitityToInsert.focus();

                } else {
                    if (bValid) {
                        adicionarorganizationAsync();
                    }
                }
            },
        },
        close: function() {
            allFields.val("").removeClass("ui-state-error");
            $("#adicionar").tooltip("close");
            $("#adicionarorganizationState").html("");
            $("#adicionarorganizationState").removeClass("ui-state-error");
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
    $("#modificarorganizationDialogo").dialog({
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
                    tips = $("#adicionarorganizationState");
                allFields.removeClass("ui-state-error");
                if (nameenitityToUpdate.val() == "") {
                    tips.html("O nome da Entidade não deve ser em branco.");
                    nameenitityToUpdate.addClass("ui-state-error");
                    nameenitityToUpdate.focus();
                } else if (siglaenitityToUpdate.val() == "") {
                    tips.html("A Sigla não deve ser em branco.");
                    siglaenitityToUpdate.addClass("uistate-error");
                    siglaenitityToUpdate.focus();

                } else {
                    if (bValid) {
                        modificaorganizationAsync();
                    }
                }
            },
        },
        close: function() {
            allFields.val("").removeClass("ui-state-error");
            $("#adicionar").tooltip("close");
            $("#adicionarorganizationState").html("");
            $("#adicionarorganizationState").removeClass("ui-state-error");
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
    $("#adicionarorganization").tooltip({
        show: {
            effect: "blind",
            delay: 50,
        },
        hide: {
            effect: "blind",
            delay: 150,
        },
    });
    $("#organizationContent")
        .html("<img src='images/preloader-01.gif' />")
        .load("ajax/organization/view.php", "page=" + num + "&type=organizacao", function() {
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
    $("#organizationContent")
        .html("<img src='images/preloader-01.gif' />")
        .load(
            "ajax/organization/view.php",
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
    $("#nameenitityToUpdate").val(name);
    $("#siglaenitityToUpdate").val(sigla);

    $("#modificarorganizationDialogo").dialog("open");
}

function modificaorganizationAsync() {
    $("#modificarorganizationState").html("<img src='images/preloader-01.gif' />");
    $.post("ajax/organization/update.php", {
            name: $("#nameenitityToUpdate").val(),
            sigla: $("#siglaenitityToUpdate").val(),
            id: $("#identidadeToUpdate").val()
        },
        function(data) {
            var result = parseInt(data.text);
            if (result > 0) {
                $("#modificarorganizationState").html("<p>Os seus dados foram Modificar com êxito!</p>");
                $("#organizationContent").html("<img src='images/preloader-01.gif' />").load("ajax/organization/view.php", "page=" + num + "&type=organizacao", function() {});
                $("#modificarorganizationDialogo").dialog('option', 'buttons', {
                    'Fechar': function() {
                        $("#adicionarorganizationDialogo").dialog("close");
                        $("#adicionarorganizationState").html("");
                        $("#adicionarorganizationDialogo").dialog('option', 'buttons', {
                            "Cancelar": function() {
                                $(this).dialog("close");
                            },
                            "Modificar": function() {
                                var bValid = true,
                                    tips = $("#modificarorganizationState"),
                                    nameenitityToUpdate = $("#nameenitityToUpdate");
                                bValid = bValid && checkLength(nameenitityToUpdate, "nome da Entidade", 2, 50, tips);
                                siglaenitityToUpdate = $("#siglaenitityToInsert");
                                bValid = bValid && checkLength(siglaenitityToUpdate, "nome da Sigla", 2, 10, tips);
                                if (bValid) {
                                    modificaorganizationAsync();
                                }
                            }
                        });
                    }
                });
                setTimeout(function() {
                    $("#modificarorganizationDialogo").dialog("close");
                    $("#modificarorganizationState").html("");
                    $("#modificarorganizationDialogo").dialog('option', 'buttons', {
                        "Cancelar": function() {
                            $(this).dialog("close");
                        },
                        "Adicionar": function() {
                            var bValid = true,
                                tips = $("#modificarorganizationState"),

                                nameenitityToUpdate = $("#nameenitityToUpdate");
                            bValid = bValid && checkLength(nameenitityToUpdate, "nome da Entidade", 2, 50, tips);
                            siglaenitityToUpdate = $("#siglaenitityToUpdate");
                            bValid = bValid && checkLength(siglaenitityToUpdate, "nome da Sigla", 2, 10, tips);
                            if (bValid) {
                                modificaorganizationAsync();
                            }
                        }
                    });
                }, 1000);
            } else {
                $("#modificarorganizationState").addClass("ui-state-error");
                $("#modificarorganizationState").html("<p>Adição dos dados falhada!</p>");
            }
        }, "json");
}


function adicionarEntidade() {
    $("#adicionarorganizationDialogo").dialog("open");
}


function adicionarorganizationAsync() {
    var type = "organizacao";
    $("#adicionarorganizationState").html("<img src='images/preloader-01.gif' />");
    $.post("ajax/organization/insert.php", {
            name: $("#nameenitityToInsert").val(),
            sigla: $("#siglaenitityToInsert").val(),
            tipo: type
        },
        function(data) {
            var result = parseInt(data.text);
            if (result > 0) {
                $("#adicionarorganizationState").html("<p>Os seus dados foram adicionados com êxito!</p>");
                $("#organizationContent").html("<img src='images/preloader-01.gif' />").load("ajax/organization/view.php", "page=" + num + "&type=organizacao", function() {});
                $("#adicionarorganizationDialogo").dialog('option', 'buttons', {
                    'Fechar': function() {
                        $("#adicionarorganizationDialogo").dialog("close");
                        $("#adicionarorganizationState").html("");
                        $("#adicionarorganizationDialogo").dialog('option', 'buttons', {
                            "Cancelar": function() {
                                $(this).dialog("close");
                            },
                            "Adicionar": function() {
                                var bValid = true,
                                    tips = $("#adicionarorganizationState"),
                                    nameenitityToInsert = $("#nameenitityToInsert");
                                bValid = bValid && checkLength(nameenitityToInsert, "nome da Entidade", 2, 50, tips);
                                siglaenitityToInsert = $("#siglaenitityToInsert");
                                bValid = bValid && checkLength(siglaenitityToInsert, "nome da Sigla", 2, 10, tips);
                                if (bValid) {
                                    adicionarorganizationAsync();
                                }
                            }
                        });
                    }
                });
                setTimeout(function() {
                    $("#adicionarorganizationDialogo").dialog("close");
                    $("#adicionarorganizationState").html("");
                    $("#adicionarorganizationDialogo").dialog('option', 'buttons', {
                        "Cancelar": function() {
                            $(this).dialog("close");
                        },
                        "Adicionar": function() {
                            var bValid = true,
                                tips = $("#adicionarorganizationState"),
                                tips = $("#adicionarorganizationState"),
                                nameenitityToInsert = $("#nameenitityToInsert");
                            bValid = bValid && checkLength(nameenitityToInsert, "nome da Entidade", 2, 50, tips);
                            siglaenitityToInsert = $("#siglaenitityToInsert");
                            bValid = bValid && checkLength(siglaenitityToInsert, "nome da Sigla", 2, 10, tips);
                            if (bValid) {
                                adicionarorganizationAsync();
                            }
                        }
                    });
                }, 1000);
            } else {
                $("#adicionarorganizationState").addClass("ui-state-error");
                $("#adicionarorganizationState").html("<p>Adição dos dados falhada!</p>");
            }
        }, "json");
}