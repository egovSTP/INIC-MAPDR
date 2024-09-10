var num = 1;

$(function() {
    var nameministerioToInsert = $("#nameministerioToInsert"),
        siglaministerioToInsert = $("#siglaministerioToInsert"),
        nameministerioToUpdate = $("#nameministerioToUpdate"),
        siglaministerioToUpdate = $("#siglaministerioToUpdate");

    allFields = $([]).add(nameministerioToInsert).add(siglaministerioToInsert).add(nameministerioToUpdate).add(siglaministerioToUpdate);

    $("#adicionarministerioDialogo").dialog({
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
                    tips = $("#adicionarministerioState");
                allFields.removeClass("ui-state-error");
                if (nameministerioToInsert.val() == "") {
                    tips.html("O nome da Entidade não deve ser em branco.");
                    nameministerioToInsert.addClass("ui-state-error");
                    nameministerioToInsert.focus();
                } else if (siglaministerioToInsert.val() == "") {
                    tips.html("A Sigla não deve ser em branco.");
                    siglaministerioToInsert.addClass("uistate-error");
                    siglaministerioToInsert.focus();

                } else {
                    if (bValid) {
                        adicionarministerioAsync();
                    }
                }
            },
        },
        close: function() {
            allFields.val("").removeClass("ui-state-error");
            $("#adicionar").tooltip("close");
            $("#adicionarministerioState").html("");
            $("#adicionarministerioState").removeClass("ui-state-error");
            $("#ministerioContent")
                .html("<img src='images/preloader-01.gif' />")
                .load("ajax/ministerio/view.php", "page=" + num + "&type=ministerio", function() {
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
    $("#modificarministerioDialogo").dialog({
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
                    tips = $("#adicionarministerioState");
                allFields.removeClass("ui-state-error");
                if (nameministerioToUpdate.val() == "") {
                    tips.html("O nome da Entidade não deve ser em branco.");
                    nameministerioToUpdate.addClass("ui-state-error");
                    nameministerioToUpdate.focus();
                } else if (siglaministerioToUpdate.val() == "") {
                    tips.html("A Sigla não deve ser em branco.");
                    siglaministerioToUpdate.addClass("uistate-error");
                    siglaministerioToUpdate.focus();

                } else {
                    if (bValid) {
                        modificaministerioAsync();
                    }
                }
            },
        },
        close: function() {
            allFields.val("").removeClass("ui-state-error");
            $("#adicionar").tooltip("close");
            $("#adicionarministerioState").html("");
            $("#adicionarministerioState").removeClass("ui-state-error");
            $("#ministerioContent")
                .html("<img src='images/preloader-01.gif' />")
                .load("ajax/ministerio/view.php", "page=" + num + "&type=ministerio", function() {
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
    $("#adicionarministerio").tooltip({
        show: {
            effect: "blind",
            delay: 50,
        },
        hide: {
            effect: "blind",
            delay: 150,
        },
    });
    $("#ministerioContent")
        .html("<img src='images/preloader-01.gif' />")
        .load("ajax/ministerio/view.php", "page=" + num + "&type=ministerio", function() {
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
    $("#ministerioContent")
        .html("<img src='images/preloader-01.gif' />")
        .load(
            "ajax/ministerio/view.php",
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
    $("#nameministerioToUpdate").val(name);
    $("#siglaministerioToUpdate").val(sigla);

    $("#modificarministerioDialogo").dialog("open");
}

function modificaministerioAsync() {
    $("#modificarministerioState").html("<img src='images/preloader-01.gif' />");
    $.post("ajax/ministerio/update.php", {
            name: $("#nameministerioToUpdate").val(),
            sigla: $("#siglaministerioToUpdate").val(),
            id: $("#identidadeToUpdate").val()
        },
        function(data) {
            var result = parseInt(data.text);
            if (result > 0) {
                $("#modificarministerioState").html("<p>Os seus dados foram Modificar com êxito!</p>");
                $("#ministerioContent").html("<img src='images/preloader-01.gif' />").load("ajax/ministerio/view.php", "page=" + num + "&type=ministerio", function() {});
                $("#modificarministerioDialogo").dialog('option', 'buttons', {
                    'Fechar': function() {
                        $("#adicionarministerioDialogo").dialog("close");
                        $("#adicionarministerioState").html("");
                        $("#adicionarministerioDialogo").dialog('option', 'buttons', {
                            "Cancelar": function() {
                                $(this).dialog("close");
                            },
                            "Modificar": function() {
                                var bValid = true,
                                    tips = $("#modificarministerioState"),
                                    nameministerioToUpdate = $("#nameministerioToUpdate");
                                bValid = bValid && checkLength(nameministerioToUpdate, "nome da Entidade", 2, 50, tips);
                                siglaministerioToUpdate = $("#siglaministerioToInsert");
                                bValid = bValid && checkLength(siglaministerioToUpdate, "nome da Sigla", 2, 10, tips);
                                if (bValid) {
                                    modificaministerioAsync();
                                }
                            }
                        });
                    }
                });
                setTimeout(function() {
                    $("#modificarministerioDialogo").dialog("close");
                    $("#modificarministerioState").html("");
                    $("#modificarministerioDialogo").dialog('option', 'buttons', {
                        "Cancelar": function() {
                            $(this).dialog("close");
                        },
                        "Adicionar": function() {
                            var bValid = true,
                                tips = $("#modificarministerioState"),

                                nameministerioToUpdate = $("#nameministerioToUpdate");
                            bValid = bValid && checkLength(nameministerioToUpdate, "nome da Entidade", 2, 50, tips);
                            siglaministerioToUpdate = $("#siglaministerioToUpdate");
                            bValid = bValid && checkLength(siglaministerioToUpdate, "nome da Sigla", 2, 10, tips);
                            if (bValid) {
                                modificaministerioAsync();
                            }
                        }
                    });
                }, 1000);
            } else {
                $("#modificarministerioState").addClass("ui-state-error");
                $("#modificarministerioState").html("<p>Adição dos dados falhada!</p>");
            }
        }, "json");
}


function adicionarEntidade() {
    $("#adicionarministerioDialogo").dialog("open");
}





function adicionarministerioAsync() {
    var type = "ministerio";
    $("#adicionarministerioState").html("<img src='images/preloader-01.gif' />");
    $.post("ajax/ministerio/insert.php", {
            name: $("#nameministerioToInsert").val(),
            sigla: $("#siglaministerioToInsert").val(),
            tipo: type
        },
        function(data) {
            var result = parseInt(data.text);
            if (result > 0) {
                $("#adicionarministerioState").html("<p>Os seus dados foram adicionados com êxito!</p>");
                $("#ministerioContent").html("<img src='images/preloader-01.gif' />").load("ajax/ministerio/view.php", "page=" + num + "&type=ministerio", function() {});
                $("#adicionarministerioDialogo").dialog('option', 'buttons', {
                    'Fechar': function() {
                        $("#adicionarministerioDialogo").dialog("close");
                        $("#adicionarministerioState").html("");
                        $("#adicionarministerioDialogo").dialog('option', 'buttons', {
                            "Cancelar": function() {
                                $(this).dialog("close");
                            },
                            "Adicionar": function() {
                                var bValid = true,
                                    tips = $("#adicionarministerioState"),
                                    nameministerioToInsert = $("#nameministerioToInsert");
                                bValid = bValid && checkLength(nameministerioToInsert, "nome da Entidade", 2, 50, tips);
                                siglaministerioToInsert = $("#siglaministerioToInsert");
                                bValid = bValid && checkLength(siglaministerioToInsert, "nome da Sigla", 2, 10, tips);
                                if (bValid) {
                                    adicionarministerioAsync();
                                }
                            }
                        });
                    }
                });
                setTimeout(function() {
                    $("#adicionarministerioDialogo").dialog("close");
                    $("#adicionarministerioState").html("");
                    $("#adicionarministerioDialogo").dialog('option', 'buttons', {
                        "Cancelar": function() {
                            $(this).dialog("close");
                        },
                        "Adicionar": function() {
                            var bValid = true,
                                tips = $("#adicionarministerioState"),
                                tips = $("#adicionarministerioState"),
                                nameministerioToInsert = $("#nameministerioToInsert");
                            bValid = bValid && checkLength(nameministerioToInsert, "nome da Entidade", 2, 50, tips);
                            siglaministerioToInsert = $("#siglaministerioToInsert");
                            bValid = bValid && checkLength(siglaministerioToInsert, "nome da Sigla", 2, 10, tips);
                            if (bValid) {
                                adicionarministerioAsync();
                            }
                        }
                    });
                }, 1000);
            } else {
                $("#adicionarministerioState").addClass("ui-state-error");
                $("#adicionarministerioState").html("<p>Adição dos dados falhada!</p>");
            }
        }, "json");
}