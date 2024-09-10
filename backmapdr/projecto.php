<?php
require("cmp/session.php");
?>
<!DOCTYPE html>
<html dir="ltr" lang="en-US">

<head>
    <meta charset="utf-8">
    <title>MAPDR | Projecto</title>
    <?php
    require('cmp/import.php');
    ?>
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css" rel="stylesheet">
    <link href="css/summernote.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js"></script>

    <script src="js/project.js" type="text/javascript"></script>

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
                                <h2 class="art-postheader">Projecto</h2>
                                <div class="art-postcontent art-postcontent-3 clearfix">
                                    <div class="art-content-layout">
                                        <div class="art-content-layout-row">
                                            <div class="art-layout-cell layout-item-0" style="width: 100%">
                                                <p>O modulo Projecto será utilizada na gestão do Projecto.</p>
                                                <p><a id='adicionarEntity' href='javascript:adicionarEntidade()' title='Adicionar nova Entity' class='art-button' style='position: relative; left: 10px;'>Adicionar</a></p>
                                            </div>
                                        </div><br />

                                        <div id="entityContent" class="art-content-layout-row">
                                            <div class="art-layout-cell layout-item-0" style="width: 100%">
                                            </div>
                                        </div>
                                        <div id="adicionarentityDialogo" title="Adicionar Entidade">
                                            <fieldset>
                                                <label>Sigla</label>
                                                <input id="siglaenitityToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Nome </label>
                                                <input id="nameenitityToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                            </fieldset>
                                            <div id="adicionarentityState" style="text-align:center"></div>
                                        </div>
                                        <div id="modificarentityDialogo" title="Modificar Entidade">
                                            <fieldset>
                                                <input id="identidadeToUpdate" type="hidden" />
                                                <label>Sigla</label>
                                                <input id="siglaenitityToUpdate" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Nome </label>
                                                <input id="nameenitityToUpdate" type="text" class="text ui-widget-content ui-corner-all" />
                                            </fieldset>
                                            <div id="modificarentityState" style="text-align:center"></div>
                                        </div>
                                        <div id="visualizarDialogo" title="Visualizar Entidade">
                                            <fieldset>
                                                <label>Sigla</label>
                                                <input id="siglaToView" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Nome </label>
                                                <input id="nameToView" type="text" class="text ui-widget-content ui-corner-all" />
                                            </fieldset>
                                        </div>
                                    </div><br>
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