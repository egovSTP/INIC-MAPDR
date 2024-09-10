<?php
require("cmp/session.php");
if (!isset($_GET["did"]) || !isset($_GET["dtitulo"])) {
    header('Location: documento.php');
}
$did     = $_GET["did"];
$dtitulo = $_GET["dtitulo"];

echo "<input id='did'type='hidden' value='" . $did . "' />";
echo "<input id='dtitulo' type='hidden' value='" . $dtitulo . "' />";
?>
<!DOCTYPE html>
<html dir="ltr" lang="en-US">

<head>
    <meta charset="utf-8">
    <title>MAPDR | Documentos anexos</title>
    <?php
    require('cmp/import.php');
    ?>
    <script src="js/document_attach.js" type="text/javascript"></script>
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
                        <div class="art-layout-cell" style="width: 80%">
                            <article class="art-post art-article">
                                <?php
                                $dtitulo = $_GET["dtitulo"];
                                echo "<h2 class='art-postheader'>Anexos do documento sobre " . $dtitulo . "</h2>";
                                ?>
                                <div class="art-postcontent art-postcontent-3 clearfix">
                                    <div class="art-content-layout">
                                        <div class="art-content-layout-row">
                                            <div class="art-layout-cell layout-item-0" style="width: 100%">
                                                <?php
                                                $dtitulo = $_GET["dtitulo"];
                                                echo "<p>Módulo de gestão dos anexos do documento sobre " . $dtitulo . ".</p>";
                                                echo "<br/>";
                                                ?>
                                                <a id='adicionar' href='javascript:adicionar()' title='Adicionar novo agente' class='art-button' style='position: relative; left: 10px;'>Adicionar</a><br />
                                            </div>
                                        </div>
                                        <div id="adicionarDialogo" title="Adicionar novo anexo">
                                            <fieldset>
                                                <label>Nome</label>
                                                <input id="nameToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Anexo</label>
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
                                                <label>Anexo</label>
                                                <input id="pathToUpdate" type="file" name="photo" onchange="show(this)" class="text ui-widget-content ui-corner-all" />
                                            </fieldset>
                                            <div id="modificarState" style="text-align:center"></div>
                                        </div>
                                    </div><br />
                                    <div id="documentoAnexoContent" class="art-content-layout"></div><br />
                                    <div class="art-content-layout">
                                        <div class="art-content-layout-row">
                                            <div class="art-layout-cell layout-item-0" style="width: 100%">
                                                <a id="voltar" href="documento.php" title="Voltar a gestão dos documento" class="art-button" style="position: relative; left: 10px;">Voltar</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="art-layout-cell" style="width: 20%">
                            <?php
                            require("cmp/sidebar.php")
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