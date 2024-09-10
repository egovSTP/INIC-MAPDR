<?php
require("cmp/session.php");
?>
<!DOCTYPE html>
<html dir="ltr" lang="en-US">

<head>
    <meta charset="utf-8">
    <title>MAPDR | Mundo Rural</title>
    <?php
    require('cmp/import.php');
    ?>
    <script src="js/mundo_rural.js" type="text/javascript"></script>
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
                                <h2 class="art-postheader">Mundo Rural</h2>
                                <div class="art-postcontent art-postcontent-3 clearfix">
                                    <div class="art-content-layout">
                                        <div class="art-content-layout-row">
                                            <div class="art-layout-cell layout-item-0" style="width: 100%">
                                                <p>Módulo de gestão de Mundo Rural.</p>
                                                <a id='adicionar' href='javascript:adicionar()' title='Adicionar novo documento' class='art-button' style='position: relative; left: 10px;'>Adicionar</a>
                                                <br />
                                            </div>
                                        </div>
                                        <div id="adicionarDialogo" title="Adicionar novo mumdo rural">
                                            <fieldset>
                                                <label>Titulo</label>
                                                <input id="tituloToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Data</label>
                                                <input id="dateToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Url do Vídeo</label>
                                                <input id="videoToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Resumo</label>
                                                <textarea id="resumeToInsert" cols="110" rows="10" placeholder="Conteúdo do mundo rural" class="text ui-widget-content ui-corner-all"></textarea>
                                            </fieldset>
                                            <div id="adicionarState" style="text-align:center"></div>
                                        </div>
                                        <div id="modificarDialogo" title="Alterar mumdo rural">
                                            <fieldset>
                                                <input id="idToUpdate" type="hidden" />
                                                <label>Titulo</label>
                                                <input id="tituloToUpdate" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Data</label>
                                                <input id="dateToUpdate" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Url do Vídeo</label>
                                                <input id="videoToUpdate" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Resumo</label>
                                                <textarea id="resumeToUpdate" cols="110" rows="10" placeholder="Conteúdo do mundo rural" class="text ui-widget-content ui-corner-all"></textarea>
                                            </fieldset>
                                            <div id="modificarState" style="text-align:center"></div>
                                        </div>
                                        <div id="visualizarDialogo" title="Mumdo Rural">
                                            <fieldset>
                                                <label>Titulo</label>
                                                <input id="tituloToView" type="text" disabled class="text ui-widget-content ui-corner-all" />
                                                <label>Url de Vídeo</label>
                                                <input id="urlToView" type="text" disabled class="text ui-widget-content ui-corner-all" />
                                                <label>Data</label>
                                                <input id="dateToView" type="text" disabled class="text ui-widget-content ui-corner-all" />
                                                <label>Resumo</label>
                                                <div id="resumeToView" type="text" class="text ui-widget-content ui-corner-all"></div>
                                            </fieldset>
                                        </div>
                                    </div><br />
                                    <div id="mundoContent" class="art-content-layout"></div>
                                </div>
                            </article>
                        </div>
                        <div class="art-layout-cell art-sidebar1">
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