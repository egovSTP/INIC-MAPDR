var path = null,
    num = 1,
    ext = ["jpg", "jpeg", "png", "bmp"];

$(function() {
    var conteudoToInsert = $("#conteudoToInsert"),
        linkToInsert = $("#linkToInsert"),
        videoToInsert = $("#videoToInsert"),
        ordeToInsert = $("#ordeToInsert"),
        nameToInsert = $("#nameToInsert"),
        nameToUpdate = $("#nameToUpdate"),

        allFields = $([]).add(conteudoToInsert).add(linkToInsert).add(videoToInsert).add(ordeToInsert).add(nameToInsert).add(nameToUpdate);
    $(".summernote").summernote({
      height: 120,
      toolbar: [
        ["font", ["strikethrough", "superscript", "subscript"]],
        /* ["fontsize", ["fontsize"]], */
        ["font", ["bold", "underline", "clear"]],
        ["color", ["color"]],
        ["para", ["ul", "ol", "paragraph"]],
        ["table", ["table"]],
        ["insert", ["link"]],
        ["view", ["codeview"]],
      ],
      callbacks: {
        onPaste: function (e) {
          if (document.queryCommandSupported("insertText")) {
            var text = $(e.currentTarget).html();
            var bufferText = (
              (e.originalEvent || e).clipboardData || window.clipboardData
            ).getData("Text");

            setTimeout(function () {
              document.execCommand("insertText", false, bufferText);
            }, 10);
            e.preventDefault();
          } else {
            //IE
            var text = window.clipboardData.getData("text");
            if (trap) {
              trap = false;
            } else {
              trap = true;
              setTimeout(function () {
                document.execCommand("paste", false, text);
              }, 10);
              e.preventDefault();
            }
          }
        },
      },
    });
    $("#div_foto").hide();
    $("#div_video").hide();
    $("#div_facebok").hide();
    var id = $("#eid").val();
    $("#div_conteudoupdate").hide();
    $("#div_fotoUpadte").hide();
    $("#div_videoUpadte").hide();
    $("#div_facebokUpadte").hide();
    $("#adicionarDialogo").dialog({
        autoOpen: false,
        resizable: true,
        show: "clip",
        hide: "clip",
        width: "auto",
        modal: true,
        closeOnEscape: true,
        buttons: {
            Cancelar: function() {
                $(this).dialog("close");
            },
            Adicionar: function() {
                var bValid = true,
                    tips = $("#adicionarState"),
                    tipo = $("#tipo option:selected").val();
                bValid = bValid && checkLength(ordeToInsert, "ordem", 1, 9999, tips);
                bValid = bValid && checkLength(nameToInsert, "nome", 3, 100, tips);
                if (bValid) {
                    if (tipo == "Texto") {
                        bValid = bValid && checkLength(conteudoToInsert, "Conteúdo", 3, 8000, tips);
                    } else if (tipo == "Foto") {
                        if (path == null) {
                            tips.html("Deves selecionar o path primeiro.");
                            bValid &= false;
                        } else {
                            var fx = path.split(".");
                            if (!contains(ext, fx[fx.length - 1])) {
                                tips.html("As extensões permitidas são: " + showExtension(ext));
                                bValid &= false;
                            }
                        }
                    } else if (tipo == "Video") {
                        bValid = bValid && checkLength(videoToInsert, "vídeo", 3, 1500, tips);

                    } else if (tipo == "Link") {
                        bValid = bValid && checkLength(linkToInsert, "Link", 3, 1000, tips);
                    }
                    if (bValid) {
                        adicionarAsync();
                    }
                }

            },
        },
        close: function() {
            allFields.val("").removeClass("ui-state-error");
            $("#adicionar").tooltip("close");
            $("#adicionarState").html("");
            $("#adicionarState").removeClass("ui-state-error");
            var nid = $("#nid").val();
            $("#noticiaAnexoContent")
                .html("<img src='images/preloader-01.gif' />")
                .load(
                    "ajax/noticia_anexo/view.php",
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
        },
    });
    $("#modificarcontentDialogo").dialog({
        autoOpen: false,
        resizable: true,
        show: "clip",
        hide: "clip",
        width: "auto",
        modal: true,
        closeOnEscape: true,
        buttons: {
            Cancelar: function() {
                $(this).dialog("close");
            },
            "Modificar": function() {
                var bValid = true,
                    tips = $("#modificarState"),
                    nameToUpdate = $("#nameToUpdate"),
                    tipo = $("#tipoupdate option:selected").val();
                //    alert(tipo);


                switch (tipo) {
                    case "Texto":
                        var conteudoUpdate = $("#conteudoUpdate"),
                            bValid = bValid && checkLength(conteudoUpdate, "Conteudo", 3, 8000, tips);
                        bValid = bValid && checkLength(nameToUpdate, "Nome", 3, 1000, tips);
                        break;
                    case "Foto":

                        if (path == null || path == "") {

                        } else {
                            var fx = path.split(".");
                            if (!contains(ext, fx[fx.length - 1])) {
                                tips.html(
                                    "As extensões permitidas são: " + showExtension(ext)
                                );

                            }
                        }


                        break;
                    case "Video":
                        var videoToUpdate = ("#videoToUpdate");
                        bValid = bValid && checkLength(videoToUpdate, "nome", 3, 100, tips);

                        break;
                }

                if (bValid) {
                    // alert("chamar metodo");
                    modificarAsync();
                }





            },
        },
        close: function() {
            allFields.val("").removeClass("ui-state-error");
            $("#modificar").tooltip("close");
            $("#modificarState").html("");
            $("#modificarState").removeClass("ui-state-error");
            //  var nid = $("#nid").val();
            $("#entityContent").html("<img src='images/preloader-01.gif' />").load("ajax/content/view.php", "id=" + id + "&page=" + num, function() {});
        },
    });
    // alert(id)
    $("#entityContent").html("<img src='images/preloader-01.gif' />").load("ajax/content/view.php", "id=" + id + "&page=" + num, function() {});
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
    $("#noticiaAnexoContent")
        .html("<img src='images/preloader-01.gif' />")
        .load(
            "ajax/noticia_anexo/view.php",
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

function adicionar() {
    $("#adicionarDialogo").dialog("open");
    $("#tipoToInsert")
        .html("<img src='images/preloader-01.gif' />")
        .load(
            "./ajax/selection/option.php",
            "tipo=tnewsfiletype&base=no",
            function() {}
        );
}

function adicionarAsync() {
    var conteudo;

    $("#adicionarState").html("<img src='images/preloader-01.gif' />");
    tipo = $("#tipo option:selected").val();
    // foto
    switch (tipo) {
        case "Foto":
            var data = new FormData();
            data.append("photo", $("#pathToInsert")[0].files[0]);
            $.ajax({
                url: "ajax/entity/upload-file.php",
                data: data,
                cache: false,
                contentType: false,
                processData: false,
                type: "POST",
                success: function(result) {
                    var r = result.replace("{", "");
                    r = r.replace("}", "");
                    var fs = r.split("|");
                    var count_file = fs.length;
                    for (var i = 1; i < count_file; i++) {
                        var file = fs[i];
                        if (file.length > 6) {
                            file = file.substring(8, file.length);
                            var index = file.indexOf('"');
                            if (index > 0) file = file.substring(0, file.length - 1);
                            $("#adicionarState").html(
                                '<img src="images/preloader-01.gif" style="border: hidden"/>'
                            );

                            //  alert(file);
                            $.post(
                                "ajax/content/insert.php", {
                                    eid: $("#eid").val(),
                                    ordeToInsert: $("#ordeToInsert").val(),
                                    nameToInsert: $("#nameToInsert").val(),
                                    tipo: $("#tipo option:selected").val(),
                                    resume: file
                                },
                                function(data) {
                                    var result = parseInt(data.text);

                                    if (result > 0) {
                                        $("#adicionarState").html(
                                            "<p>Os seus dados foram adicionados com êxito!</p>"
                                        );
                                        $("#adicionarDialogo").dialog("option", "buttons", {
                                            Fechar: function() {
                                                $("#adicionarDialogo").dialog("close");
                                                $("#adicionarState").html("");
                                                $("#adicionarDialogo").dialog("option", "buttons", {
                                                    Cancelar: function() {
                                                        $(this).dialog("close");
                                                    },
                                                    Adicionar: function() {
                                                        var bValid = true,
                                                            tips = $("#adicionarState"),
                                                            tipo = $("#tipo option:selected").val(),
                                                            bValid = bValid && checkLength(ordeToInsert, "ordem", 1, 9999, tips);
                                                        bValid = bValid && checkLength(nameToInsert, "nome", 3, 100, tips);
                                                        if (bValid) {

                                                            if (tipo == "Texto") {
                                                                bValid = bValid && checkLength(conteudoToInsert, "Conteúdo", 3, 8000, tips);
                                                            } else if (tipo == "Foto") {
                                                                if (path == null) {
                                                                    tips.html("Deves selecionar o path primeiro.");
                                                                    bValid &= false;
                                                                } else {
                                                                    var fx = path.split(".");
                                                                    if (!contains(ext, fx[fx.length - 1])) {
                                                                        tips.html("As extensões permitidas são: " + showExtension(ext));
                                                                        bValid &= false;
                                                                    }
                                                                }
                                                            } else if (tipo == "Video") {
                                                                bValid = bValid && checkLength(videoToInsert, "vídeo", 3, 1500, tips);

                                                            } else if (tipo == "Link") {
                                                                bValid = bValid && checkLength(linkToInsert, "Link", 3, 1000, tips);
                                                            }
                                                            if (bValid) {
                                                                adicionarAsync();
                                                            }
                                                        }


                                                    },
                                                });
                                            },
                                        });
                                        setTimeout(function() {
                                            $("#adicionarDialogo").dialog("close");
                                            $("#adicionarState").html("");
                                            $("#adicionarDialogo").dialog("option", "buttons", {
                                                Cancelar: function() {
                                                    $(this).dialog("close");
                                                },
                                                Adicionar: function() {
                                                    var bValid = true,
                                                        tips = $("#adicionarState"),
                                                        tipo = $("#tipo option:selected").val(),
                                                        bValid = bValid && checkLength(ordeToInsert, "ordem", 1, 9999, tips);
                                                    bValid = bValid && checkLength(nameToInsert, "nome", 3, 100, tips);
                                                    if (bValid) {
                                                        if (tipo == "Texto") {
                                                            bValid = bValid && checkLength(conteudoToInsert, "Conteúdo", 3, 8000, tips);
                                                        } else if (tipo == "Foto") {
                                                            if (path == null) {
                                                                tips.html("Deves selecionar o path primeiro.");
                                                                bValid &= false;
                                                            } else {
                                                                var fx = path.split(".");
                                                                if (!contains(ext, fx[fx.length - 1])) {
                                                                    tips.html("As extensões permitidas são: " + showExtension(ext));
                                                                    bValid &= false;
                                                                }
                                                            }
                                                        } else if (tipo == "Video") {
                                                            bValid = bValid && checkLength(videoToInsert, "vídeo", 3, 1500, tips);

                                                        } else if (tipo == "Link") {
                                                            bValid = bValid && checkLength(linkToInsert, "Link", 3, 1000, tips);
                                                        }
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
                        } else
                            $("#adicionarState").html("<p>Formato de imagem não suportado!</p>");
                    }
                },
                error: function(result) {
                    $("#adicionarState").html("<p>" + result.d + "</p>");
                },
            });
            //fim foto
            break;
        case "Texto":
            conteudo = $("#conteudoToInsert").val();
            //inicio
            $("#adicionarState").html('<img src="images/preloader-01.gif" style="border: hidden"/>');
            $.post(
                "ajax/content/insert.php", {
                    eid: $("#eid").val(),
                    ordeToInsert: $("#ordeToInsert").val(),
                    nameToInsert: $("#nameToInsert").val(),
                    tipo: $("#tipo option:selected").val(),
                    resume: conteudo
                },
                function(data) {
                    var result = parseInt(data.text);
                    //  alert(result)
                    if (result > 0) {
                        $("#adicionarState").html(
                            "<p>Os seus dados foram adicionados com êxito!</p>"
                        );
                        $("#adicionarDialogo").dialog("option", "buttons", {
                            Fechar: function() {
                                $("#adicionarDialogo").dialog("close");
                                $("#adicionarState").html("");
                                $("#adicionarDialogo").dialog("option", "buttons", {
                                    Cancelar: function() {
                                        $(this).dialog("close");
                                    },
                                    Adicionar: function() {
                                        var bValid = true,
                                            tips = $("#adicionarState"),
                                            tipo = $("#tipo option:selected").val(),
                                            ordeToInsert = $("#ordeToInsert"),
                                            conteudoToInsert = $("#conteudoToInsert"),
                                            videoToInsert = $("#videoToInsert"),
                                            linkToInsert = $("#linkToInsert");
                                        if (bValid) {

                                            if (tipo == "Texto") {
                                                bValid = bValid && checkLength(conteudoToInsert, "Conteúdo", 3, 8000, tips);
                                            } else if (tipo == "Foto") {
                                                if (path == null) {
                                                    tips.html("Deves selecionar o path primeiro.");
                                                    bValid &= false;
                                                } else {
                                                    var fx = path.split(".");
                                                    if (!contains(ext, fx[fx.length - 1])) {
                                                        tips.html("As extensões permitidas são: " + showExtension(ext));
                                                        bValid &= false;
                                                    }
                                                }
                                            } else if (tipo == "Video") {
                                                bValid = bValid && checkLength(videoToInsert, "vídeo", 3, 1500, tips);

                                            } else if (tipo == "Link") {
                                                bValid = bValid && checkLength(linkToInsert, "Link", 3, 1000, tips);
                                            }
                                            if (bValid) {
                                                adicionarAsync();
                                            }
                                        }


                                    },
                                });
                            },
                        });
                        setTimeout(function() {
                            $("#adicionarDialogo").dialog("close");
                            $("#adicionarState").html("");
                            $("#adicionarDialogo").dialog("option", "buttons", {
                                Cancelar: function() {
                                    $(this).dialog("close");
                                },
                                Adicionar: function() {
                                    var bValid = true,
                                        tips = $("#adicionarState"),
                                        tipo = $("#tipo option:selected").val(),
                                        ordeToInsert = $("#ordeToInsert"),
                                        conteudoToInsert = $("#conteudoToInsert"),
                                        videoToInsert = $("#videoToInsert"),
                                        linkToInsert = $("#linkToInsert");
                                    if (bValid) {
                                        if (tipo == "Texto") {
                                            bValid = bValid && checkLength(conteudoToInsert, "Conteúdo", 3, 8000, tips);
                                        } else if (tipo == "Foto") {
                                            if (path == null) {
                                                tips.html("Deves selecionar o path primeiro.");
                                                bValid &= false;
                                            } else {
                                                var fx = path.split(".");
                                                if (!contains(ext, fx[fx.length - 1])) {
                                                    tips.html("As extensões permitidas são: " + showExtension(ext));
                                                    bValid &= false;
                                                }
                                            }
                                        } else if (tipo == "Video") {
                                            bValid = bValid && checkLength(videoToInsert, "vídeo", 3, 1500, tips);

                                        } else if (tipo == "Link") {
                                            bValid = bValid && checkLength(linkToInsert, "Link", 3, 1000, tips);
                                        }
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
            break;
        case "Video":
            conteudo = $("#videoToInsert").val();
            //inicio
            $("#adicionarState").html('<img src="images/preloader-01.gif" style="border: hidden"/>');
            $.post(
                "ajax/content/insert.php", {
                    eid: $("#eid").val(),
                    ordeToInsert: $("#ordeToInsert").val(),
                    nameToInsert: $("#nameToInsert").val(),
                    tipo: $("#tipo option:selected").val(),
                    resume: conteudo
                },
                function(data) {
                    var result = parseInt(data.text);
                    //  alert("result" + result)
                    if (result > 0) {
                        $("#adicionarState").html(
                            "<p>Os seus dados foram adicionados com êxito!</p>"
                        );
                        $("#adicionarDialogo").dialog("option", "buttons", {
                            Fechar: function() {
                                $("#adicionarDialogo").dialog("close");
                                $("#adicionarState").html("");
                                $("#adicionarDialogo").dialog("option", "buttons", {
                                    Cancelar: function() {
                                        $(this).dialog("close");
                                    },
                                    Adicionar: function() {
                                        var bValid = true,
                                            tips = $("#adicionarState"),
                                            tipo = $("#tipo option:selected").val(),
                                            ordeToInsert = $("#ordeToInsert"),
                                            conteudoToInsert = $("#conteudoToInsert"),
                                            videoToInsert = $("#videoToInsert"),
                                            linkToInsert = $("#linkToInsert");
                                        if (bValid) {

                                            if (tipo == "Texto") {
                                                bValid = bValid && checkLength(conteudoToInsert, "Conteúdo", 3, 8000, tips);
                                            } else if (tipo == "Foto") {
                                                if (path == null) {
                                                    tips.html("Deves selecionar o path primeiro.");
                                                    bValid &= false;
                                                } else {
                                                    var fx = path.split(".");
                                                    if (!contains(ext, fx[fx.length - 1])) {
                                                        tips.html("As extensões permitidas são: " + showExtension(ext));
                                                        bValid &= false;
                                                    }
                                                }
                                            } else if (tipo == "Video") {
                                                bValid = bValid && checkLength(videoToInsert, "vídeo", 3, 1500, tips);

                                            } else if (tipo == "Link") {
                                                bValid = bValid && checkLength(linkToInsert, "Link", 3, 1000, tips);
                                            }
                                            if (bValid) {
                                                adicionarAsync();
                                            }
                                        }


                                    },
                                });
                            },
                        });
                        setTimeout(function() {
                            $("#adicionarDialogo").dialog("close");
                            $("#adicionarState").html("");
                            $("#adicionarDialogo").dialog("option", "buttons", {
                                Cancelar: function() {
                                    $(this).dialog("close");
                                },
                                Adicionar: function() {
                                    var bValid = true,
                                        tips = $("#adicionarState"),
                                        tipo = $("#tipo option:selected").val(),
                                        ordeToInsert = $("#ordeToInsert"),
                                        conteudoToInsert = $("#conteudoToInsert"),
                                        videoToInsert = $("#videoToInsert"),
                                        linkToInsert = $("#linkToInsert");
                                    if (bValid) {
                                        if (tipo == "Texto") {
                                            bValid = bValid && checkLength(conteudoToInsert, "Conteúdo", 3, 8000, tips);
                                        } else if (tipo == "Foto") {
                                            if (path == null) {
                                                tips.html("Deves selecionar o path primeiro.");
                                                bValid &= false;
                                            } else {
                                                var fx = path.split(".");
                                                if (!contains(ext, fx[fx.length - 1])) {
                                                    tips.html("As extensões permitidas são: " + showExtension(ext));
                                                    bValid &= false;
                                                }
                                            }
                                        } else if (tipo == "Video") {
                                            bValid = bValid && checkLength(videoToInsert, "vídeo", 3, 1500, tips);

                                        } else if (tipo == "Link") {
                                            bValid = bValid && checkLength(linkToInsert, "Link", 3, 1000, tips);
                                        }
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
            break;

    }
    var id = $("#eid").val();
    //  alert("aqui" + id);
    $("#entityContent").html("<img src='images/preloader-01.gif' />").load("ajax/content/view.php", "id=" + id + "&page=" + num, function() {});

}

/*
function visualizar(id) {
    var name = $("#" + id + "name").val(),
        resume = $("#" + id + "resume").val(),
        type = $("#" + id + "type").val(),
        order = $("#" + id + "order").val(),
        $("#idToUpdate").val(id);
    $("#nameToUpdate").val(name);
    $("#conteudoToupdate").val(resume);
    $("#ordeToUpdate").val(order);
    $("#accessToView").val(access);
    if (state == 1) $("#stateToView").prop("checked", true);
    else $("#stateToView").prop("checked", false);
    $("#visualizarDialogo").dialog("open");
}

*/

function modificar(id) {

    var name = $("#" + id + "name").val(),
        resume = $("#" + id + "content").val(),
        type = $("#" + id + "type").val(),
        order = $("#" + id + "order").val();
    $("#old_pathToUpdate").val(resume);
    $("#conteudoUpdate").summernote('code', resume);
    $("#idToUpdate").val(id);
    $("#nameToUpdate").val(name);
    $("#ordeToUpdate").val(order);
    $("#tipoupdate option:contains(" + type + ")").prop(
        "selected",
        true
    );
    // alert(resume);
    if (type == "Foto") {
        $("#div_fotoUpadte").show();
        $("#div_videoUpadte").hide();
        $("#div_conteudoupdate").hide();
        $("#div_facebokUpadte").hide();
    } else if (type == "Texto") {
        $("#div_conteudoupdate").show();
        $("#div_fotoUpadte").hide();
        $("#div_videoUpadte").hide();
        $("#div_facebokUpadte").hide();
        $("#conteudoUpdate").val(resume);
    } else if (type == "Video") {
        $("#div_conteudoupdate").hide();
        $("#div_fotoUpadte").hide();
        $("#div_videoUpadte").show();
        $("#div_facebokUpadte").hide();
        $("#videoToUpdate").val(resume);
    } else if (type == "Link") {
        $("#div_conteudoupdate").hide();
        $("#div_fotoUpadte").hide();
        $("#div_videoUpadte").hide();
        $("#div_facebokUpadte").show();
        $("#linkToUdate").val(resume);
    }
    $("#modificarcontentDialogo").dialog("open");
}

function modificarAsync() {
    //alert(path);
    if (path != null && path != "") {
        $("#modificarState").html("<img src='images/preloader-01.gif' />");
        var data = new FormData();
        data.append("photo", $("#pathToUpdate")[0].files[0]);
        var tipo = $("#tipoupdate option:selected").val();
        switch (tipo) {
            case "Foto":
                $.ajax({
                    url: "ajax/content/upload-upd-file.php",
                    data: data,
                    cache: false,
                    contentType: false,
                    processData: false,
                    type: "POST",
                    success: function(result) {
                        //    alert(result);
                        var r = result.replace("{", "");
                        r = r.replace("}", "");
                        var fs = r.split("|");
                        var count_file = fs.length;
                        for (var i = 0; i < count_file; i++) {
                            var file = fs[i];
                            if (file.length > 6) {
                                file = file.substring(8, file.length);
                                var index = file.indexOf('"');
                                if (index > 0) file = file.substring(0, file.length - 1);
                                $("#modificarState").html(
                                    '<img src="images/preloader-01.gif" style="border: hidden"/>'
                                );
                                //  alert(file + " sfdsfs" + $("#old_pathToUpdate").val())
                                $.post(
                                    "ajax/content/update.php", {
                                        id: $("#idToUpdate").val(),
                                        order: $("#ordeToUpdate").val(),
                                        name: $("#nameToUpdate").val(),
                                        tipo: $("#tipoupdate option:selected").val(),
                                        resume: file,
                                        old_path: $("#old_pathToUpdate").val()
                                    },
                                    function(data) {
                                        var result = parseInt(data.text);
                                        //    alert("resu" + result)
                                        if (result > 0) {
                                            $("#modificarState").html(
                                                "<p>Os seus dados foram Modificado com êxito!</p>"
                                            );
                                            $("#modificarcontentDialogo").dialog("option", "buttons", {
                                                Fechar: function() {
                                                    $("#modificarcontentDialogo").dialog("close");
                                                    $("#modificarState").html("");
                                                    $("#modificarcontentDialogo").dialog("option", "buttons", {
                                                        Cancelar: function() {
                                                            $(this).dialog("close");
                                                        },
                                                        Modificar: function() {
                                                            var bValid = true,
                                                                tips = $("#modificarState"),
                                                                tipo = $("#tipoupdate option:selected").val(),
                                                                ordeToUpdate = $("#ordeToUpdate"),
                                                                nameToUpdate = $("#nameToUpdate"),
                                                                conteudoUpdate = $("#conteudoUpdate"),
                                                                videoToUpdate = $("#videoToUpdate");

                                                            bValid = bValid && checkLength(ordeToUpdate, "ordem", 1, 9999, tips);
                                                            bValid = bValid && checkLength(nameToUpdate, "Nome", 3, 1000, tips);

                                                            if (bValid) {
                                                                if (tipo == "Texto") {
                                                                    bValid = bValid && checkLength(conteudoUpdate, "Conteúdo", 3, 8000, tips);
                                                                } else if (tipo == "Foto") {
                                                                    if (path == null) {
                                                                        tips.html("Deves selecionar o path primeiro.");
                                                                        bValid &= false;
                                                                    } else {
                                                                        var fx = path.split(".");
                                                                        if (!contains(ext, fx[fx.length - 1])) {
                                                                            tips.html("As extensões permitidas são: " + showExtension(ext));
                                                                            bValid &= false;
                                                                        }
                                                                    }
                                                                } else if (tipo == "Video") {
                                                                    bValid = bValid && checkLength(videoToUpdate, "vídeo", 3, 1500, tips);

                                                                }
                                                                if (bValid) {
                                                                    modificarAsync();
                                                                }
                                                            }


                                                        },
                                                    });
                                                },
                                            });
                                            setTimeout(function() {
                                                $("#modificarcontentDialogo").dialog("close");
                                                $("#modificarState").html("");
                                                $("#modificarcontentDialogo").dialog("option", "buttons", {
                                                    Cancelar: function() {
                                                        $(this).dialog("close");
                                                    },
                                                    Modificar: function() {
                                                        var bValid = true,
                                                            tips = $("#modificarState"),
                                                            tipo = $("#tipoupdate option:selected").val(),
                                                            ordeToUpdate = $("#ordeToUpdate"),
                                                            nameToUpdate = $("#nameToUpdate"),
                                                            conteudoUpdate = $("#conteudoUpdate"),
                                                            videoToUpdate = $("#videoToUpdate");

                                                        bValid = bValid && checkLength(ordeToUpdate, "ordem", 1, 9999, tips);
                                                        bValid = bValid && checkLength(nameToUpdate, "Nome", 3, 1000, tips);

                                                        if (bValid) {
                                                            if (tipo == "Texto") {
                                                                bValid = bValid && checkLength(conteudoUpdate, "Conteúdo", 3, 8000, tips);
                                                            } else if (tipo == "Foto") {
                                                                if (path == null) {
                                                                    tips.html("Deves selecionar o path primeiro.");
                                                                    bValid &= false;
                                                                } else {
                                                                    var fx = path.split(".");
                                                                    if (!contains(ext, fx[fx.length - 1])) {
                                                                        tips.html("As extensões permitidas são: " + showExtension(ext));
                                                                        bValid &= false;
                                                                    }
                                                                }
                                                            } else if (tipo == "Video") {
                                                                bValid = bValid && checkLength(videoToUpdate, "vídeo", 3, 1500, tips);

                                                            }
                                                            if (bValid) {
                                                                modificarAsync();
                                                            }
                                                        }
                                                    },
                                                });
                                            }, 1000);
                                        } else {
                                            $("#modificarState").addClass("ui-state-error");
                                            $("#modificarState").html("<p>Adição dos dados falhada!</p>");
                                        }
                                    },
                                    "json"
                                );
                            } else
                                $("#modificarState").html("<p>Formato de imagem não suportado!</p>");
                        }
                    },
                    error: function(result) {
                        $("#modificarState").html("<p>" + result.d + "</p>");
                    },
                });
                break;

        }
    } else {

        $("#modificarState").html("<img src='images/preloader-01.gif' />");
        var tipo = $("#tipoupdate option:selected").text();

        switch (tipo) {
            case "Foto":
                $.post(
                    "ajax/content/update.php", {
                        id: $("#idToUpdate").val(),
                        order: $("#ordeToUpdate").val(),
                        name: $("#nameToUpdate").val(),
                        tipo: $("#tipoupdate option:selected").val(),
                        resume: $("#old_pathToUpdate").val(),
                        old_path: $("#old_pathToUpdate").val()
                    },
                    function(data) {
                        var result = parseInt(data.text);
                        if (result > 0) {
                            $("#modificarState").html(
                                "<p>Os seus dados foram Modificado com êxito!</p>"
                            );
                            $("#modificarcontentDialogo").dialog("option", "buttons", {
                                Fechar: function() {
                                    $("#modificarcontentDialogo").dialog("close");
                                    $("#modificarState").html("");
                                    $("#modificarcontentDialogo").dialog("option", "buttons", {
                                        Cancelar: function() {
                                            $(this).dialog("close");
                                        },
                                        Modificar: function() {
                                            var bValid = true,
                                                tips = $("#modificarState"),
                                                tipo = $("#tipoupdate option:selected").val(),
                                                ordeToUpdate = $("#ordeToUpdate"),
                                                nameToUpdate = $("#nameToUpdate"),
                                                conteudoUpdate = $("#conteudoUpdate"),
                                                videoToUpdate = $("#videoToUpdate");

                                            bValid = bValid && checkLength(ordeToUpdate, "ordem", 1, 9999, tips);
                                            bValid = bValid && checkLength(nameToUpdate, "Nome", 3, 1000, tips);

                                            if (bValid) {
                                                if (tipo == "Texto") {
                                                    bValid = bValid && checkLength(conteudoUpdate, "Conteúdo", 3, 8000, tips);
                                                } else if (tipo == "Foto") {
                                                    if (path == null) {
                                                        tips.html("Deves selecionar o path primeiro.");
                                                        bValid &= false;
                                                    } else {
                                                        var fx = path.split(".");
                                                        if (!contains(ext, fx[fx.length - 1])) {
                                                            tips.html("As extensões permitidas são: " + showExtension(ext));
                                                            bValid &= false;
                                                        }
                                                    }
                                                } else if (tipo == "Video") {
                                                    bValid = bValid && checkLength(videoToUpdate, "vídeo", 3, 1500, tips);

                                                }
                                                if (bValid) {
                                                    modificarAsync();
                                                }
                                            }


                                        },
                                    });
                                },
                            });
                            setTimeout(function() {
                                $("#modificarcontentDialogo").dialog("close");
                                $("#modificarState").html("");
                                $("#modificarcontentDialogo").dialog("option", "buttons", {
                                    Cancelar: function() {
                                        $(this).dialog("close");
                                    },
                                    Modificar: function() {
                                        var bValid = true,
                                            tips = $("#modificarState"),
                                            tipo = $("#tipoupdate option:selected").val(),
                                            ordeToUpdate = $("#ordeToUpdate"),
                                            nameToUpdate = $("#nameToUpdate"),
                                            conteudoUpdate = $("#conteudoUpdate"),
                                            videoToUpdate = $("#videoToUpdate");

                                        bValid = bValid && checkLength(ordeToUpdate, "ordem", 1, 9999, tips);
                                        bValid = bValid && checkLength(nameToUpdate, "Nome", 3, 1000, tips);

                                        if (bValid) {
                                            if (tipo == "Texto") {
                                                bValid = bValid && checkLength(conteudoUpdate, "Conteúdo", 3, 8000, tips);
                                            } else if (tipo == "Foto") {
                                                if (path == null) {
                                                    tips.html("Deves selecionar o path primeiro.");
                                                    bValid &= false;
                                                } else {
                                                    var fx = path.split(".");
                                                    if (!contains(ext, fx[fx.length - 1])) {
                                                        tips.html("As extensões permitidas são: " + showExtension(ext));
                                                        bValid &= false;
                                                    }
                                                }
                                            } else if (tipo == "Video") {
                                                bValid = bValid && checkLength(videoToUpdate, "vídeo", 3, 1500, tips);

                                            }
                                            if (bValid) {
                                                modificarAsync();
                                            }
                                        }
                                    },
                                });
                            }, 1000);
                        } else {
                            $("#modificarState").addClass("ui-state-error");
                            $("#modificarState").html("<p>Adição dos dados falhada!</p>");
                        }
                    },
                    "json"
                );
                break;
            case "Texto":

                $.post(
                    "ajax/content/update.php", {
                        id: $("#idToUpdate").val(),
                        order: $("#ordeToUpdate").val(),
                        name: $("#nameToUpdate").val(),
                        tipo: $("#tipoupdate option:selected").val(),
                        resume: $("#conteudoUpdate").val()

                    },
                    function(data) {
                        var result = parseInt(data.text);
                        //  alert(result);
                        if (result > 0) {
                            $("#modificarState").html(
                                "<p>Os seus dados foram Modificado com êxito!</p>"
                            );
                            $("#modificarcontentDialogo").dialog("option", "buttons", {
                                Fechar: function() {
                                    $("#modificarcontentDialogo").dialog("close");
                                    $("#modificarState").html("");
                                    $("#modificarcontentDialogo").dialog("option", "buttons", {
                                        Cancelar: function() {
                                            $(this).dialog("close");
                                        },
                                        Modificar: function() {
                                            var bValid = true,
                                                tips = $("#modificarState"),
                                                tipo = $("#tipoupdate option:selected").val(),
                                                ordeToUpdate = $("#ordeToUpdate"),
                                                nameToUpdate = $("#nameToUpdate"),
                                                conteudoUpdate = $("#conteudoUpdate"),
                                                videoToUpdate = $("#videoToUpdate");

                                            bValid = bValid && checkLength(ordeToUpdate, "ordem", 1, 9999, tips);
                                            bValid = bValid && checkLength(nameToUpdate, "Nome", 3, 1000, tips);

                                            if (bValid) {
                                                if (tipo == "Texto") {
                                                    bValid = bValid && checkLength(conteudoUpdate, "Conteúdo", 3, 8000, tips);
                                                } else if (tipo == "Foto") {
                                                    if (path == null) {
                                                        tips.html("Deves selecionar o path primeiro.");
                                                        bValid &= false;
                                                    } else {
                                                        var fx = path.split(".");
                                                        if (!contains(ext, fx[fx.length - 1])) {
                                                            tips.html("As extensões permitidas são: " + showExtension(ext));
                                                            bValid &= false;
                                                        }
                                                    }
                                                } else if (tipo == "Video") {
                                                    bValid = bValid && checkLength(videoToUpdate, "vídeo", 3, 1500, tips);

                                                }
                                                if (bValid) {
                                                    modificarAsync();
                                                }
                                            }


                                        },
                                    });
                                },
                            });
                            setTimeout(function() {
                                $("#modificarcontentDialogo").dialog("close");
                                $("#modificarState").html("");
                                $("#modificarcontentDialogo").dialog("option", "buttons", {
                                    Cancelar: function() {
                                        $(this).dialog("close");
                                    },
                                    Modificar: function() {
                                        var bValid = true,
                                            tips = $("#modificarState"),
                                            tipo = $("#tipoupdate option:selected").val(),
                                            ordeToUpdate = $("#ordeToUpdate"),
                                            nameToUpdate = $("#nameToUpdate"),
                                            conteudoUpdate = $("#conteudoUpdate"),
                                            videoToUpdate = $("#videoToUpdate");

                                        bValid = bValid && checkLength(ordeToUpdate, "ordem", 1, 9999, tips);
                                        bValid = bValid && checkLength(nameToUpdate, "Nome", 3, 1000, tips);

                                        if (bValid) {
                                            if (tipo == "Texto") {
                                                bValid = bValid && checkLength(conteudoUpdate, "Conteúdo", 3, 8000, tips);
                                            } else if (tipo == "Foto") {
                                                if (path == null) {
                                                    tips.html("Deves selecionar o path primeiro.");
                                                    bValid &= false;
                                                } else {
                                                    var fx = path.split(".");
                                                    if (!contains(ext, fx[fx.length - 1])) {
                                                        tips.html("As extensões permitidas são: " + showExtension(ext));
                                                        bValid &= false;
                                                    }
                                                }
                                            } else if (tipo == "Video") {
                                                bValid = bValid && checkLength(videoToUpdate, "vídeo", 3, 1500, tips);

                                            }
                                            if (bValid) {
                                                modificarAsync();
                                            }
                                        }
                                    },
                                });
                            }, 1000);
                        } else {
                            $("#modificarState").addClass("ui-state-error");
                            $("#modificarState").html("<p>Adição dos dados falhada!</p>");
                        }
                    },
                    "json"
                );
                break;

            case "Video":
                $.post(
                    "ajax/content/update.php", {
                        id: $("#idToUpdate").val(),
                        order: $("#ordeToUpdate").val(),
                        name: $("#nameToUpdate").val(),
                        tipo: $("#tipoupdate option:selected").val(),
                        resume: $("#videoToUpdate").val()

                    },
                    function(data) {
                        var result = parseInt(data.text);
                        if (result > 0) {
                            $("#modificarState").html(
                                "<p>Os seus dados foram Modificado com êxito!</p>"
                            );
                            $("#modificarcontentDialogo").dialog("option", "buttons", {
                                Fechar: function() {
                                    $("#modificarcontentDialogo").dialog("close");
                                    $("#modificarState").html("");
                                    $("#modificarcontentDialogo").dialog("option", "buttons", {
                                        Cancelar: function() {
                                            $(this).dialog("close");
                                        },
                                        Modificar: function() {
                                            var bValid = true,
                                                tips = $("#modificarState"),
                                                tipo = $("#tipoupdate option:selected").val(),
                                                ordeToUpdate = $("#ordeToUpdate"),
                                                nameToUpdate = $("#nameToUpdate"),
                                                conteudoUpdate = $("#conteudoUpdate"),
                                                videoToUpdate = $("#videoToUpdate");

                                            bValid = bValid && checkLength(ordeToUpdate, "ordem", 1, 9999, tips);
                                            bValid = bValid && checkLength(nameToUpdate, "Nome", 3, 1000, tips);

                                            if (bValid) {
                                                if (tipo == "Texto") {
                                                    bValid = bValid && checkLength(conteudoUpdate, "Conteúdo", 3, 8000, tips);
                                                } else if (tipo == "Foto") {
                                                    if (path == null) {
                                                        tips.html("Deves selecionar o path primeiro.");
                                                        bValid &= false;
                                                    } else {
                                                        var fx = path.split(".");
                                                        if (!contains(ext, fx[fx.length - 1])) {
                                                            tips.html("As extensões permitidas são: " + showExtension(ext));
                                                            bValid &= false;
                                                        }
                                                    }
                                                } else if (tipo == "Video") {
                                                    bValid = bValid && checkLength(videoToUpdate, "vídeo", 3, 1500, tips);

                                                }
                                                if (bValid) {
                                                    modificarAsync();
                                                }
                                            }


                                        },
                                    });
                                },
                            });
                            setTimeout(function() {
                                $("#modificarcontentDialogo").dialog("close");
                                $("#modificarState").html("");
                                $("#modificarcontentDialogo").dialog("option", "buttons", {
                                    Cancelar: function() {
                                        $(this).dialog("close");
                                    },
                                    Modificar: function() {
                                        var bValid = true,
                                            tips = $("#modificarState"),
                                            tipo = $("#tipoupdate option:selected").val(),
                                            ordeToUpdate = $("#ordeToUpdate"),
                                            nameToUpdate = $("#nameToUpdate"),
                                            conteudoUpdate = $("#conteudoUpdate"),
                                            videoToUpdate = $("#videoToUpdate");

                                        bValid = bValid && checkLength(ordeToUpdate, "ordem", 1, 9999, tips);
                                        bValid = bValid && checkLength(nameToUpdate, "Nome", 3, 1000, tips);

                                        if (bValid) {
                                            if (tipo == "Texto") {
                                                bValid = bValid && checkLength(conteudoUpdate, "Conteúdo", 3, 8000, tips);
                                            } else if (tipo == "Foto") {
                                                if (path == null) {
                                                    tips.html("Deves selecionar o path primeiro.");
                                                    bValid &= false;
                                                } else {
                                                    var fx = path.split(".");
                                                    if (!contains(ext, fx[fx.length - 1])) {
                                                        tips.html("As extensões permitidas são: " + showExtension(ext));
                                                        bValid &= false;
                                                    }
                                                }
                                            } else if (tipo == "Video") {
                                                bValid = bValid && checkLength(videoToUpdate, "vídeo", 3, 1500, tips);

                                            }
                                            if (bValid) {
                                                modificarAsync();
                                            }
                                        }
                                    },
                                });
                            }, 1000);
                        } else {
                            $("#modificarState").addClass("ui-state-error");
                            $("#modificarState").html("<p>Adição dos dados falhada!</p>");
                        }
                    },
                    "json"
                );
                break;


        }
    }
}


function scheduleNewsFileCategory(event) {}


function selecionartipo() {
    var type = $("#tipo option:selected").val();
    // alert(type);
    if (type == "Texto") {
        $("#div_conteudo").show();
        $("#div_foto").hide();
        $("#div_video").hide();
        // $("#div_facebok").hide();

    } else if (type == "Foto") {
        $("#div_conteudo").hide();
        $("#div_foto").show();
        $("#div_video").hide();
        // $("#div_facebok").hide();

    } else if (type == "Video") {
        $("#div_conteudo").hide();
        $("#div_foto").hide();
        $("#div_video").show();
        // $("#div_facebok").hide();
    } else if (type == "Link") {
        $("#div_conteudo").hide();
        $("#div_foto").hide();
        $("#div_video").hide();
        //  $("#div_facebok").show();
    }

}

function selecionartipo() {
    var type = $("#tipo option:selected").val();
    // alert(type);
    if (type == "Texto") {
        $("#div_conteudo").show();
        $("#div_foto").hide();
        $("#div_video").hide();
        // $("#div_facebok").hide();

    } else if (type == "Foto") {
        $("#div_conteudo").hide();
        $("#div_foto").show();
        $("#div_video").hide();
        // $("#div_facebok").hide();

    } else if (type == "Video") {
        $("#div_conteudo").hide();
        $("#div_foto").hide();
        $("#div_video").show();
        // $("#div_facebok").hide();
    } else if (type == "Link") {
        $("#div_conteudo").hide();
        $("#div_foto").hide();
        $("#div_video").hide();
        //  $("#div_facebok").show();
    }

}

function selecionartipo_updadte() {
    var type = $("#tipoupdate option:selected").val();
    // alert(type);
    if (type == "Texto") {
        $("#div_conteudoupdate").show();
        $("#div_fotoUpadte").hide();
        $("#div_videoUpadte").hide();
        // $("#div_facebok").hide();

    } else if (type == "Foto") {
        $("#div_conteudoupdate").hide();
        $("#div_fotoUpadte").show();
        $("#div_videoUpadte").hide();
        // $("#div_facebok").hide();

    } else if (type == "Video") {
        $("#div_conteudoupdate").hide();
        $("#div_fotoUpadte").hide();
        $("#div_videoUpadte").show();
        // $("#div_facebok").hide();
    } else if (type == "Link") {
        $("#div_conteudoupdate").hide();
        $("#div_fotoUpadte").hide();
        $("#div_videoUpadte").hide();
        //  $("#div_facebok").show();
    }

}