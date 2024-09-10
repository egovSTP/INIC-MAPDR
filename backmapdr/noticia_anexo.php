<?php
require("cmp/session.php");
if (!isset($_GET["nid"]) || !isset($_GET["ntitle"]))
    header('Location: actividades.php');
$nid = $_GET["nid"];
$ntitle = $_GET["ntitle"];
echo "<input id='nid' type='hidden' value='" . $nid . "' />";
echo "<input id='ntitle' type='hidden' value='" . $ntitle . "' />";
?>
<!DOCTYPE html>
<html dir="ltr" lang="en-US">

<head>
    <meta charset="utf-8">
    <?php
    $ntitle = $_GET["ntitle"];
    require('cmp/import.php');
    ?>
    <title> MAPDR| Actividades anexos</title>
    <script src="js/news_attach.js" type="text/javascript"></script>
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
                                $ntitle = $_GET["ntitle"];
                                echo "<h2 class='art-postheader'>Anexos da Actividades sobre " . $ntitle . "</h2>";
                                ?>
                                <div class="art-postcontent art-postcontent-3 clearfix">
                                    <div class="art-content-layout">
                                        <div class="art-content-layout-row">
                                            <div class="art-layout-cell layout-item-0" style="width: 100%">
                                                <?php
                                                $ntitle = $_GET["ntitle"];
                                                echo "<p>Módulo de gestão dos anexos da Actividades sobre " . $ntitle . ".</p>";
                                                echo "<br/>";
                                                ?>
                                                <a id='adicionar' href='javascript:adicionar()' title='Adicionar novo anexo' class='art-button' style='position: relative; left: 10px;'>Adicionar</a><br />
                                            </div>
                                        </div>
                                        <div id="adicionarDialogo" title="Adicionar novo anexo">
                                            <fieldset>
                                                <label>Nome</label>
                                                <input id="nameToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Categoria Actividades</label>
                                                <div id="tipoToInsert"></div>
                                                <label>Anexo(s)</label>
                                                <input id="pathToInsert" type="file" name="photo" onchange="show(this)" class="text ui-widget-content ui-corner-all" />
                                            </fieldset>
                                            <div id="adicionarState" style="text-align:center"></div>
                                        </div>
                                        <div id="modificarDialogo" title="Alterar anexo">
                                            <fieldset>
                                                <input id="idToUpdate" type="hidden" />
                                                <input id="old_pathToUpdate" type="hidden" />
                                                <label>Nome</label>
                                                <input id="nameToUpdate" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Categoria Actividades</label>
                                                <div id="tipoToUpdate"> </div>
                                                <label>Anexo(s)</label>
                                                <input id="pathToUpdate" type="file" name="photo" onchange="show(this)" class="text ui-widget-content ui-corner-all" />
                                            </fieldset>
                                            <div id="modificarState" style="text-align:center"></div>
                                        </div>
                                    </div><br />
                                    <div id="noticiaAnexoContent" class="art-content-layout"></div><br />
                                    <div class="art-content-layout">
                                        <div class="art-content-layout-row">
                                            <div class="art-layout-cell layout-item-0" style="width: 100%">
                                                <a id="voltar" href="actividade.php" title="Voltar a gestão dos documento" class="art-button" style="position: relative; left: 10px;">Voltar</a>
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