var num = 1;
$(function() {
    $.fx.speeds._default = 900;
    var anoToInsert = $("#anoToInsert"),
        stateToInsert = $("#stateToInsert");
    var id = $("#eid").val();
    allFields = $([]).add(anoToInsert).add(stateToInsert);
    $("#adicionarDialogo").dialog({
        autoOpen: false,
        resizable: false,
        show: "clip",
        hide: "clip",
        modal: true,
        closeOnEscape: true,
        buttons: {
            "Fechar": function() {
                $(this).dialog("close");
            },
            "Adicionar": function() {
                var bValid = true,
                    tips = $("#adicionarState");
                bValid = bValid && checkLength(anoToInsert, "Ano", 3, 20, tips);
                bValid = bValid && checkLength(stateToInsert, "Estado", 3, 255, tips);
                if (bValid) {
                    adicionarAsync();
                }
            }
        },
        close: function() {}
    });

    $("#modificarDialogo").dialog({
        autoOpen: false,
        resizable: false,
        show: "clip",
        hide: "clip",
        modal: true,
        closeOnEscape: true,
        buttons: {
            "Fechar": function() {
                $(this).dialog("close");
            },
            "Modificar": function() {
                var bValid = true,
                    anoToUpdate = $("#anoToUpdate"),
                    stateToUpdate = $("#stateToUpdate");
                tips = $("#adicionarState");
                bValid = bValid && checkLength(anoToUpdate, "Ano", 3, 20, tips);
                bValid = bValid && checkLength(stateToUpdate, "Estado", 3, 255, tips);
                if (bValid) {
                    modificarAsync();
                }
            }
        },
        close: function() {}
    });




    $("#parameter_project_Content").html("<img src='images/preloader-01.gif' />").load("ajax/parametro_project/view.php", "id=" + id + "&page=" + num, function() {});

});
$.ajaxSetup({
    cache: false
});

function adicionar() {
    $("#adicionarDialogo").dialog("open");
}

function adicionarAsync() {
    $("#adicionarState").html("<img src='images/preloader-01.gif' />");
    $.post("ajax/parametro_project/insert.php", {
            id: $("#eid").val(),
            anoToInsert: $("#anoToInsert").val(),
            stateToInsert: $("#stateToInsert").val()
        },
        function(data) {
            var result = data.text;
            // alert(result)
            if (result == "1") {
                $("#adicionarState").html("Os seus dados foram inserido com êxito");
                $("#adicionarDialogo").dialog('option', 'buttons', {
                    'Fechar': function() {
                        document.location.reload(true);
                    }
                });
                setTimeout(function() {
                    document.location.reload(true);
                }, 1000);
            } else {
                $("#adicionarState").addClass("ui-state-error")
                $("#adicionarState").html(result);
            }
        }, "json");
}


function modificar(id) {
    var ano = $("#" + id + "key").val(),
        state = $("#" + id + "value").val();
    $("#idToUpdate").val(id);
    $("#anoToUpdate").val(ano);
    $("#stateToUpdate").val(state);

    $("#modificarDialogo").dialog("open");
}

function modificarAsync() {
    $("#modificarState").html("<img src='images/preloader-01.gif' />");
    $.post("ajax/parametro_project/update.php", {
            id: $("#idToUpdate").val(),
            anoTo: $("#anoToUpdate").val(),
            state: $("#stateToUpdate").val()
        },
        function(data) {
            var result = data.text;
            // alert(result)
            if (result == "1") {
                $("#modificarState").html("Os seus dados foram actualizado com êxito");
                $("#modificarDialogo").dialog('option', 'buttons', {
                    'Fechar': function() {
                        document.location.reload(true);
                    }
                });
                setTimeout(function() {
                    document.location.reload(true);
                }, 1000);
            } else {
                $("#modificarState").addClass("ui-state-error")
                $("#modificarState").html(result);
            }
        }, "json");
}