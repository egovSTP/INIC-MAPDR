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
    <script src="js/pamatro_project.js" type="text/javascript"></script>
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
                                        <div id="adicionarDialogo" title="Adicionar Novo">
                                            <fieldset>
                                                <label>Chave</label>
                                                <input id="anoToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Valor</label>
                                                <input id="stateToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                                </br>
                                            </fieldset>
                                            <div id="adicionarState" style="text-align:center"></div>
                                        </div>
                                        <div id="modificarDialogo" title="Alterar Conteúdo">
                                            <fieldset>
                                                <input id="idToUpdate" type="hidden" />
                                                <label>Ano do Projecto</label>
                                                <input id="anoToUpdate" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Estado do Projecto</label>
                                                <input id="stateToUpdate" type="text" class="text ui-widget-content ui-corner-all" />
                                                </br>
                                            </fieldset>
                                            <div id="modificarState" style="text-align:center"></div>
                                        </div>
                                    </div><br />
                                    <div id="parameter_project_Content" class="art-content-layout"> </div><br />
                                    <div class="art-content-layout">
                                        <div class="art-content-layout-row">
                                            <div class="art-layout-cell layout-item-0" style="width: 100%">
                                                <a id="voltar" onclick="history.go(-1)" title="Voltar a gestão dos parametros" class="art-button" style="position: relative; left: 10px;">Voltar</a>
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