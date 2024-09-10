$(function() {
    var num = 1,
        nameCategoriaNoticiaToInsert = $("#nameCategoriaNoticiaToInsert"),
        nameCategoriaNoticiaToUpdate = $("#nameCategoriaNoticiaToUpdate"),
        nameCategoriaNoticiaToRemove = $("#nameCategoriaNoticiaToRemove"),
        
        allFields = $([]).add(nameCategoriaNoticiaToInsert).add(nameCategoriaNoticiaToUpdate).add(nameCategoriaNoticiaToRemove);

    //Categoria do Noticia Dialogo
    $("#adicionarCategoriaNoticiaDialogo").dialog({
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
                "Adicionar": function () {
                    var bValid = true,
                    tips = $("#adicionarCategoriaNoticiaState");
                    allFields.removeClass("ui-state-error");
                    bValid = bValid && checkLength(nameCategoriaNoticiaToInsert, "nome do parametro", 2, 50, tips);
                    if (bValid) {
                        adicionarCategoriaNoticiaAsync();
                    }
                }
            },
        close: function () {
            allFields.val("").removeClass("ui-state-error");
            $("#adicionarCategoriaNoticia").tooltip("close");
            $("#adicionarCategoriaNoticiaState").html("");
            $("#adicionarCategoriaNoticiaState").removeClass("ui-state-error");
            $("#categoriaNoticiaContent").html("<img src='images/preloader-01.gif' />").load("ajax/parametro/view.php", "pattern=tnewscategory", function(){
                var total = $("#totalCategoriaNoticia").val();
                for(var i = 0; i < total; i++)
                {
                    $("#modificarCategoriaNoticia" + i).tooltip({
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
    $("#modificarCategoriaNoticiaDialogo").dialog({
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
                    bValid = bValid && checkLength(nameCategoriaNoticiaToUpdate, "nome do parametro", 2, 50, tips);
                    if (bValid) {
                        modificarCategoriaNoticiaAsync();
                    }
                }
            },
        close: function () {
            allFields.val("").removeClass("ui-state-error");
            $("#modificarCategoriaNoticia").tooltip("close");
            $("#modificarCategoriaNoticiaState").html("");
            $("#modificarCategoriaNoticiaState").removeClass("ui-state-error");
            $("#categoriaNoticiaContent").html("<img src='images/preloader-01.gif' />").load("ajax/parametro/view.php", "pattern=tnewscategory", function(){
                var total = $("#totalCategoriaNoticia").val();
                for(var i = 0; i < total; i++)
                {
                    $("#modificarCategoriaNoticia" + i).tooltip({
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
    $("#adicionarCategoriaNoticia").tooltip({
        show: {
            effect: "blind",
            delay: 50
        },
        hide: {
            effect: "blind",
            delay: 150
        }
    });
    $("#categoriaNoticiaContent")
      .html("<img src='images/preloader-01.gif' />")
      .load("ajax/parametro/view.php", "pattern=tnewscategory", function () {
        var total = $("#totalCategoriaNoticia").val();
        for (var i = 0; i < total; i++) {
          $("#modificarCategoriaNoticia" + i).tooltip({
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
function modificarCategoriaNoticia(id){
    var name = $("#" + id + "nameCategoriaNoticia").val();
    $("#idCategoriaNoticiaToUpdate").val(id);
    $("#nameCategoriaNoticiaToUpdate").val(name);
    $("#modificarCategoriaNoticiaDialogo").dialog("open");
}
function modificarCategoriaNoticiaAsync(){
    $("#modificarCategoriaNoticiaState").html("<img src='images/preloader-01.gif' />");
    $.post(
      "ajax/parametro/update.php",
      {
        id: $("#idCategoriaNoticiaToUpdate").val(),
        name: $("#nameCategoriaNoticiaToUpdate").val(),
        pattern: "tnewscategory",
      },
      function (data) {
        var result = parseInt(data.text);
        if (result > 0) {
          $("#modificarCategoriaNoticiaState").html(
            "<p>Os seus dados foram alterados com êxito!</p>"
          );
          $("#modificarCategoriaNoticiaDialogo").dialog("option", "buttons", {
            Fechar: function () {
              $("#modificarCategoriaNoticiaDialogo").dialog("close");
              $("#modificarCategoriaNoticiaState").html("");
              $("#modificarCategoriaNoticiaDialogo").dialog(
                "option",
                "buttons",
                {
                  Cancelar: function () {
                    $(this).dialog("close");
                  },
                  Modificar: function () {
                    var bValid = true,
                      tips = $("#modificarCategoriaNoticiaState"),
                      nameCategoriaNoticiaToUpdate = $(
                        "#nameCategoriaNoticiaToUpdate"
                      );
                    bValid =
                      bValid &&
                      checkLength(
                        nameCategoriaNoticiaToUpdate,
                        "nome do parametro",
                        3,
                        50,
                        tips
                      );
                    if (bValid) {
                      modificarCategoriaNoticiaAsync();
                    }
                  },
                }
              );
            },
          });
          setTimeout(function () {
            $("#modificarCategoriaNoticiaDialogo").dialog("close");
            $("#modificarCategoriaNoticiaState").html("");
            $("#modificarCategoriaNoticiaDialogo").dialog("option", "buttons", {
              Cancelar: function () {
                $(this).dialog("close");
              },
              Modificar: function () {
                var bValid = true,
                  tips = $("#modificarCategoriaNoticiaState"),
                  nameCategoriaNoticiaToUpdate = $(
                    "#nameCategoriaNoticiaToUpdate"
                  );
                bValid =
                  bValid &&
                  checkLength(
                    nameCategoriaNoticiaToUpdate,
                    "nome do parametro",
                    3,
                    50,
                    tips
                  );
                if (bValid) {
                  modificarCategoriaNoticiaAsync();
                }
              },
            });
          }, 1000);
        } else {
          $("#modificarCategoriaNoticiaState").addClass("ui-state-error");
          $("#modificarCategoriaNoticiaState").html(
            "<p>Modificação dos dados falhada!</p>"
          );
        }
      },
      "json"
    );
}