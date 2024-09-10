<?php
require("cmp/session.php");
if (!isset($_GET["eid"]) || !isset($_GET["ename"]))
    header('Location: parametros.php');
$eid = $_GET["eid"];
$ename = $_GET["ename"];
$esigla = $_GET["esigla"];
echo "<input id='eid' type='hidden' value='" . $eid . "' />";
echo "<input id='ename' type='hidden' value='" . $ename . "' />";
?>
<!DOCTYPE html>
<html dir="ltr" lang="en-US">

<head>
    <meta charset="utf-8">
    <?php
    $ename = $_GET["ename"];
    require('cmp/import.php');
    ?>
    <title> MAPDR| Conteúdo da Entidade </title>
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css" rel="stylesheet">
    <link href="css/summernote.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js"></script>
    <script src="js/content.js" type="text/javascript"></script>
</head>

<body>
    <div id="art-main">
        <?php
        require('cmp/header.php');
        ?>
        <nav class="art-nav">
            <div class="art-nav-inner">
                <?php
                require("cmp/menu.php");
                ?>
            </div>
        </nav>
        <div class="art-sheet clearfix">
            <div class="art-layout-wrapper">
                <div class="art-content-layout">
                    <div class="art-content-layout-row">
                        <div class="art-layout-cell art-content">
                            <article class="art-post art-article">
                                <?php
                                $ename = $_GET["ename"];
                                echo "<h2 class='art-postheader'> " . $ename . " (" . $esigla . ").</h2>";
                                ?>
                                <div class="art-postcontent art-postcontent-3 clearfix">
                                    <div class="art-content-layout">
                                        <div class="art-content-layout-row">
                                            <div class="art-layout-cell layout-item-0" style="width: 100%">
                                                <?php
                                                $ename = $_GET["ename"];
                                                echo "<p>Módulo de gestão de Conteúdo " . $ename . " (" . $esigla . ").</p>";
                                                echo "<br/>";
                                                ?>
                                                <a id='adicionar' href='javascript:adicionar()' title='Adicionar novo Conteúdo' class='art-button' style='position: relative; left: 10px;'>Adicionar</a><br />
                                            </div>
                                        </div>
                                        <div id="adicionarDialogo" title="Adicionar novo Conteúdo">
                                            <fieldset>
                                                <label>Numero de Ordem</label>
                                                <input id="ordeToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Nome</label>
                                                <input id="nameToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Tipo Conteúdo</label>
                                                <select id="tipo" class="text ui-widget-content ui-corner-all form-control" style='width: 480px;font-size:12px' onchange='javascript:selecionartipo()'>
                                                    <option value="Texto">Texto</option>
                                                    <option value="Foto">Foto</option>
                                                    <option value="Video">Video</option>
                                                </select>
                                                </br>
                                                <div id="div_conteudo">
                                                    <label>Conteúdo</label>
                                                    <textarea id="conteudoToInsert" cols="90" rows="5" placeholder="Conteúdo do Entidade" class="summernote"></textarea>
                                                </div>

                                                <div id="div_foto">
                                                    <label>Foto</label>
                                                    <input id="pathToInsert" type="file" name="photo" onchange="show(this)" class="text ui-widget-content ui-corner-all" />
                                                </div>
                                                <div id="div_video">
                                                    <label>Vídeo</label>
                                                    <input id="videoToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                                </div>

                                            </fieldset>
                                            <div id="adicionarState" style="text-align:center"></div>
                                        </div>
                                        <div id="modificarcontentDialogo" title="Alterar Conteúdo">
                                            <fieldset>
                                                <input id="idToUpdate" type="hidden" />
                                                <input id="old_pathToUpdate" type="hidden" />
                                                <label>Numero de Ordem</label>
                                                <input id="ordeToUpdate" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Nome</label>
                                                <input id="nameToUpdate" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Tipo Conteúdo</label>
                                                <select id="tipoupdate" class="text ui-widget-content ui-corner-all form-control" style='width: 480px;font-size:12px' onchange='javascript:selecionartipo_updadte()'>
                                                    <option value="Texto">Texto</option>
                                                    <option value="Foto">Foto</option>
                                                    <option value="Video">Video</option>
                                                </select>
                                                <div id="div_conteudoupdate">
                                                    <label>Conteúdo</label>
                                                    <textarea id="conteudoUpdate" cols="90" rows="5" placeholder="Conteúdo do Entidade" class="summernote"></textarea>
                                                </div>

                                                <div id="div_fotoUpadte">
                                                    <label>Foto</label>
                                                    <input id="pathToUpdate" type="file" name="photo" onchange="show(this)" class="text ui-widget-content ui-corner-all" />
                                                </div>
                                                <div id="div_videoUpadte">
                                                    <label>Vídeo</label>
                                                    <input id="videoToUpdate" type="text" class="text ui-widget-content ui-corner-all" />
                                                </div>
                                                <div id="div_facebokUpadte">
                                                    <label>Link da Pagina de Facebook</label>
                                                    <input id="linkToUdate" type="text" class="text ui-widget-content ui-corner-all" />
                                                </div>

                                            </fieldset>
                                            <div id="modificarState" style="text-align:center"></div>
                                        </div>
                                    </div><br />
                                    <div id="entityContent" class="art-content-layout"> </div><br />
                                    <div class="art-content-layout">
                                        <div class="art-content-layout-row">
                                            <div class="art-layout-cell layout-item-0" style="width: 100%">
                                                <a id="voltar" onclick="history.go(-1)" title="Voltar a gestão dos Conteúdos" class="art-button" style="position: relative; left: 10px;">Voltar</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="art-layout-cell art-sidebar1">
                            <?php
                            require('cmp/sidebar.php')
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php
        require("cmp/footer.php");
        ?>
    </div>
</body>

</html>