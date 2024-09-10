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
    <title> MAPDR| Membro </title>
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css" rel="stylesheet">
    <link href="css/summernote.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js"></script>
    <script src="js/member.js" type="text/javascript"></script>
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
                                                echo "<p>Módulo de gestão de Membro " . $ename . " (" . $esigla . ").</p>";
                                                echo "<br/>";
                                                ?>
                                                <a id='adicionar' href='javascript:adicionar()' title='Adicionar novo Conteúdo' class='art-button' style='position: relative; left: 10px;'>Adicionar</a>
                                                <br />
                                            </div>
                                        </div>
                                        <div id="adicionarDialogo" title="Adicionar novo Conteúdo">
                                            <fieldset>
                                                <label>Nome</label>
                                                <input id="nameToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Apelido</label>
                                                <input id="surnameToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Formação</label>
                                                <input id="roleToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Foto</label>
                                                <input id="pathToInsert" type="file" name="photo" onchange="show(this)" class="text ui-widget-content ui-corner-all" />
                                                <label>Curriculum</label>
                                                <textarea id="curriculumToInsert" cols="95" rows="10" class="summernote"></textarea>
                                                </br>
                                            </fieldset>
                                            <div id="adicionarState" style="text-align:center"></div>
                                        </div>
                                        <div id="modificarDialogo" title="Alterar Conteúdo">
                                            <fieldset>
                                                <input id="idToUpdate" type="hidden" />
                                                <input id="old_path" type="hidden" />
                                                <label>Nome</label>
                                                <input id="nameToUpdate" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Apelido</label>
                                                <input id="surnameToUpdate" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Formação</label>
                                                <input id="roleToUpdate" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Foto</label>
                                                <input id="pathToUpdate" type="file" name="photo" onchange="show(this)" class="text ui-widget-content ui-corner-all" />
                                                <label>Curriculum</label>
                                                <textarea id="curriculumToUpdate" cols="95" rows="10" class="summernote"></textarea>
                                            </fieldset>
                                            <div id="modificarState" style="text-align:center"></div>
                                        </div>
                                        <div id="visualizarDialogo" title="Alterar Conteúdo">
                                            <div id="visualizarDialogo" title="Visualizar Actividades">
                                                <div id="tabs">
                                                    <ul>
                                                        <li><a href="#tabs-1">Atributos</a></li>
                                                        <li><a href="#tabs-2">Curriculo</a></li>
                                                        <li><a href="#tabs-3">Foto</a></li>
                                                    </ul>
                                                    <div id="tabs-1">
                                                        <fieldset>
                                                            <label>Nome</label>
                                                            <input id="nameToView" type="text" disabled class="text ui-widget-content ui-corner-all" />
                                                            <label>Apelido</label>
                                                            <input id="surnameToView" type="text" disabled class="text ui-widget-content ui-corner-all" />
                                                            <label>Formação</label>
                                                            <input id="roleToView" type="text" disabled class="text ui-widget-content ui-corner-all" />
                                                        </fieldset>
                                                    </div>
                                                    <div id="tabs-2">
                                                        <label>Curriculo</label>
                                                        <div id="curriculumToView" class="text ui-widget-content ui-corner-all"></div>
                                                    </div>
                                                    <div id="tabs-3">
                                                        <fieldset>
                                                            <label>Image de capa</label>
                                                            <div id="pathToView"></div>
                                                        </fieldset>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div><br />
                                    <div id="membroContent" class="art-content-layout"> </div><br />
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