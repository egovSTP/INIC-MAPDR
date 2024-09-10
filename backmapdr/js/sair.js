$(function() {
    $.fx.speeds._default = 900;
    //Sair Dialogo
    $("#sairDialogo").dialog(
    {
        autoOpen: false,
        resizable: false,
        show: "clip",
        hide: "clip",
        modal: true,
        closeOnEscape: true,
        buttons: {
            "Não": function(){
                $(this).dialog("close");
                },
            "Sim": function () {
                sairAsync();
            }
        },
        close: function () {
        }
    });
    $("#sair").tooltip({
        show: {
            effect: "blind",
            delay: 50
        },
        hide: {
            effect: "blind",
            delay: 150
        }
    });
});
$.ajaxSetup({
    cache: false
});
//Sair functions
function sair(){
    $("#sairDialogo").dialog("open");
}
function sairAsync()
{
    $("#sairState").html("<img src='images/preloader-01.gif' />");
    $.post("ajax/sair.php", 
    { 

    },
    function(data)
    {
        var result = data.text;
       // alert(result)
        if (result == "1") {
            $("#sairDialogo").dialog('option', 'buttons',
                {
                    'Fechar': function () {
                        document.location.reload(true);
                    }
                }
            );
            setTimeout(function () {
                document.location.reload(true);
            }, 1000);
        }
        else {
            $("#sairState").addClass("ui-state-error")
            $("#sairState").html(result);
        }
    }, "json");
}