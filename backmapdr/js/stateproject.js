$(function() {
    var num = 1,
        nameEstadoProjectoToUpdate = $("#nameEstadoProjectoToUpdate"),
        
        allFields = $([]).add(nameEstadoProjectoToUpdate);

    $("#modificarestadoProjectoDialogo").dialog({
        autoOpen: false,
        resizable: true,
        show: "clip",
        hide: "clip",
        modal: true,
        closeOnEscape: true,
        buttons:
            {
                "Cancelar": function(){
                    $(this).dialog("close");
                    },
                "Modificar": function () {
                    var bValid = true,
                        tips = $("#modificarCategoriaNoticiaState");
                    allFields.removeClass("ui-state-error");
                    bValid = bValid && checkLength(nameEstadoProjectoToUpdate, "nome do parametro", 2, 50, tips);
                    if (bValid) {
                        modificarEstadoProjectAsync();
                    }
                }
            },
        close: function () {
            allFields.val("").removeClass("ui-state-error");
            $("#modificarEstadoProjecto").tooltip("close");
            $("#modificarEstadoProjectState").html("");
            $("#modificarEstadoProjectState").removeClass("ui-state-error");
            $("#estadoProjectContent").html("<img src='images/preloader-01.gif' />").load("ajax/parametro/view.php", "pattern=tstateproject", function(){
                var total = $("#totalCategoriaNoticia").val();
                for(var i = 0; i < total; i++)
                {
                    $("#modificarEstadoProjecto" + i).tooltip({
                        show: {
                            effect: "blind",
                            delay: 50
                        },
                        hide: {
                            effect: "blind",
                            delay: 150
                        }
                    });
                }
            });
        }
    });
    $("#estadoProjectContent") .html("<img src='images/preloader-01.gif' />").load("ajax/parametro/view.php", "pattern=tstateproject", function () {
        var total = $("#totalEstadoProjecto").val();
        //alert(total);
        for (var i = 0; i < total; i++) {
            $("#modificarEstadoProjecto" + i).tooltip({
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
    cache: false
});
function adicionarCategoriaNoticia(){
    $("#adicionarCategoriaNoticiaDialogo").dialog("open");
}
function adicionarCategoriaNoticiaAsync(){
    $("#adicionarCategoriaNoticiaState").html("<img src='images/preloader-01.gif' />");
    $.post("ajax/parametro/insert.php", 
    { 
        name    : $("#nameCategoriaNoticiaToInsert").val(),
        pattern : "tnewscategory"
    },
    function(data)
    {
        var result = parseInt(data.text);
        if (result > 0) {
            $("#adicionarCategoriaNoticiaState").html("<p>Os seus dados foram adicionados com êxito!</p>");
            $("#adicionarCategoriaNoticiaDialogo").dialog('option', 'buttons',
                {
                    'Fechar': function () {
                        $("#adicionarCategoriaNoticiaDialogo").dialog("close");
                        $("#adicionarCategoriaNoticiaState").html("");
                        $("#adicionarCategoriaNoticiaDialogo").dialog('option', 'buttons',{
                            "Cancelar": function(){
                                $(this).dialog("close");
                            },
                            "Adicionar": function () {
                                var bValid = true,
                                    tips = $("#adicionarCategoriaNoticiaState"),
                                    nameCategoriaNoticiaToInsert = $("#nameCategoriaNoticiaToInsert");
                                bValid = bValid && checkLength(nameCategoriaNoticiaToInsert, "nome do parametro", 2, 50, tips);
                                if (bValid) {
                                    adicionarCategoriaNoticiaAsync();
                                }                        
                            }
                        });
                    }
                }
            );
            setTimeout(function () {
                $("#adicionarCategoriaNoticiaDialogo").dialog("close");
                $("#adicionarCategoriaNoticiaState").html("");
                $("#adicionarCategoriaNoticiaDialogo").dialog('option', 'buttons',{
                    "Cancelar": function(){
                        $(this).dialog("close");
                    },
                    "Adicionar": function () {
                        var bValid = true,
                            tips = $("#adicionarCategoriaNoticiaState"),
                            nameCategoriaNoticiaToInsert = $("#nameCategoriaNoticiaToInsert");
                        bValid = bValid && checkLength(nameCategoriaNoticiaToInsert, "nome do parametro", 2, 50, tips);
                        if (bValid) {
                            adicionarCategoriaNoticiaAsync();
                        }                        
                    }
                });
            }, 1000);
        }
        else {
            $("#adicionarCategoriaNoticiaState").addClass("ui-state-error");
            $("#adicionarCategoriaNoticiaState").html("<p>Adição dos dados falhada!</p>");
        }
    }, "json");
}
function eliminarCategoriaNoticia(id){
    var name = $("#" + id + "nameCategoriaNoticia").val();
    $("#idCategoriaNoticiaToRemove").val(id);
    $("#nameCategoriaNoticiaToRemove").val(name);
    $("#eliminarCategoriaNoticiaDialogo").dialog("open");
}
function eliminarCategoriaNoticiaAsync(){
    $("#eliminarCategoriaNoticiaState").html("<img src='images/preloader-01.gif' />");
    $.post(
      "ajax/parametro/delete.php",
      {
        id: $("#idCategoriaNoticiaToRemove").val(),
        pattern: "tnewscategory",
      },
      function (data) {
        var result = parseInt(data.text);
        if (result > 0) {
          $("#eliminarCategoriaNoticiaState").html(
            "<p>Os seus dados foram eliminados com êxito!</p>"
          );
          $("#eliminarCategoriaNoticiaDialogo").dialog("option", "buttons", {
            Fechar: function () {
              $("#eliminarCategoriaNoticiaDialogo").dialog("close");
              $("#eliminarCategoriaNoticiaState").html("");
              $("#eliminarCategoriaNoticiaDialogo").dialog(
                "option",
                "buttons",
                {
                  Cancelar: function () {
                    $(this).dialog("close");
                  },
                  Eliminar: function () {
                    var bValid = true,
                      nameCategoriaNoticiaToRemove = $(
                        "#nameCategoriaNoticiaToRemove"
                      ),
                      tips = $("#eliminarCategoriaNoticiaState");
                    bValid =
                      bValid &&
                      checkLength(
                        nameCategoriaNoticiaToRemove,
                        "Nome do parametro",
                        3,
                        50,
                        tips
                      );
                    if (bValid) {
                      eliminarCategoriaNoticiaAsync();
                    }
                  },
                }
              );
            },
          });
          setTimeout(function () {
            $("#eliminarCategoriaNoticiaDialogo").dialog("close");
            $("#eliminarCategoriaNoticiaState").html("");
            $("#eliminarCategoriaNoticiaDialogo").dialog("option", "buttons", {
              Cancelar: function () {
                $(this).dialog("close");
              },
              Eliminar: function () {
                var bValid = true,
                  nameCategoriaNoticiaToRemove = $(
                    "#nameCategoriaNoticiaToRemove"
                  ),
                  tips = $("#eliminarCategoriaNoticiaState");
                bValid =
                  bValid &&
                  checkLength(
                    nameCategoriaNoticiaToRemove,
                    "Nome do parametro",
                    3,
                    50,
                    tips
                  );
                if (bValid) {
                  eliminarCategoriaNoticiaAsync();
                }
              },
            });
          }, 1000);
        } else {
          $("#eliminarCategoriaNoticiaState").addClass("ui-state-error");
          $("#eliminarCategoriaNoticiaState").html(
            "<p>Eliminação dos dados falhada!</p>"
          );
        }
      },
      "json"
    );
}
function modificarEstadoProjecto(id){
    var name = $("#" + id + "nameEstadoProjecto").val();
    $("#idEstadoProjectToUpdate").val(id);
    $("#nameEstadoProjectoToUpdate").val(name);
    $("#modificarestadoProjectoDialogo").dialog("open");
}




function modificarEstadoProjectAsync() {
 
    $("#modificarEstadoProjectState").html("<img src='images/preloader-01.gif' />");
    $.post(
      "ajax/parametro/update.php",
      {
          id: $("#idEstadoProjectToUpdate").val(),
          name: $("#nameEstadoProjectoToUpdate").val(),
          pattern: "tstateproject"
      },
      function (data) {
          var result = parseInt(data.text);
        if (result > 0) {
            $("#modificarEstadoProjectState").html(
            "<p>Os seus dados foram alterados com êxito!</p>"
          );
            $("#modificarestadoProjectoDialogo").dialog("option", "buttons", {
            Fechar: function () {
                    $("#modificarestadoProjectoDialogo").dialog("close");
                    $("#modificarEstadoProjectState").html("");
                    $("#modificarestadoProjectoDialogo").dialog(
                "option",
                "buttons",
                {
                  Cancelar: function () {
                    $(this).dialog("close");
                  },
                  Modificar: function () {
                    var bValid = true,
                        tips = $("#modificarEstadoProjectState"),
                        nameEstadoProjectoToUpdate = $(
                        "#nameEstadoProjectoToUpdate"
                      );
                    bValid =
                      bValid &&
                      checkLength(
                          nameEstadoProjectoToUpdate,
                        "nome do parametro",
                        3,
                        50,
                        tips
                      );
                    if (bValid) {
                        modificarEstadoProjectAsync();
                    }
                  },
                }
              );
            },
          });
          setTimeout(function () {
              $("#modificarestadoProjectoDialogo").dialog("close");
              $("#modificarEstadoProjectState").html("");
              $("#modificarestadoProjectoDialogo").dialog("option", "buttons", {
              Cancelar: function () {
                $(this).dialog("close");
              },
              Modificar: function () {
                var bValid = true,
                    tips = $("#modificarEstadoProjectState"),
                    nameEstadoProjectoToUpdate = $(
                    "#nameEstadoProjectoToUpdate"
                  );
                bValid =
                  bValid &&
                  checkLength(
                      nameEstadoProjectoToUpdate,
                    "nome do parametro",
                    3,
                    50,
                    tips
                  );
                if (bValid) {
                    modificarEstadoProjectAsync();
                }
              },
            });
          }, 1000);
        } else {
            $("#modificarEstadoProjectState").addClass("ui-state-error");
            $("#modificarEstadoProjectState").html(
            "<p>Modificação dos dados falhada!</p>"
          );
        }
      },
      "json"
    );
}