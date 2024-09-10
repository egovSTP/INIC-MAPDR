<?php
require("cmp/session.php");
?>
<!DOCTYPE html>
<html dir="ltr" lang="en-US">

<head>
    <meta charset="utf-8">
    <title>MAPDR | Documentos</title>
    <?php
    require('cmp/import.php');
    ?>
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css" rel="stylesheet">
    <link href="css/summernote.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js"></script>

    <script src="js/document.js" type="text/javascript"></script>
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
                                <h2 class="art-postheader">Documentos</h2>
                                <div class="art-layout-cell layout-item-0" style="width: 100%">
                                    <p>Módulo de gestão dos documentos.</p>
                                    <br />
                                    <a id='adicionar' href='javascript:adicionar_documento()' title='Adicionar novo documento' class='art-button' style='position: relative; left: 10px;'>Adicionar</a>
                                </div>
                                <div id="documentoContent" class="art-content-layout-row">
                                    <div class="art-layout-cell layout-item-0" style="width: 100%">
                                    </div>
                                </div>
                                <div id="adicionarDocumentDialogo" title="Adicionar novo documento">
                                    <fieldset>
                                        <label>Titulo</label>
                                        <input id="titleToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                        <label>Data</label>
                                        <input id="dateToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                        <label>Categoria</label>
                                        <div id="docscategoryIdToInsert"></div><br />
                                        <label>Resumo</label>
                                        <textarea id="resumedocToInsert" cols="95" rows="10" class="summernote"></textarea>
                                    </fieldset>
                                    <div id="adicionarState" style="text-align:center"></div>
                                </div>
                                <div id="modificarDocumentDialogo" title="Modificar documento">
                                    <fieldset>
                                        <input id="idToUpdate" type="hidden" />
                                        <label>Titulo</label>
                                        <input id="titleToUpdate" type="text" class="text ui-widget-content ui-corner-all" />
                                        <label>Data</label>
                                        <input id="dateToUpdate" type="text" class="text ui-widget-content ui-corner-all" />
                                        <label>Categoria</label>
                                        <div id="docscategoryIdToUpdate"></div><br />
                                        <label>Resumo</label>
                                        <textarea id="resumeToUpdate" cols="95" rows="10" class="summernote"></textarea>
                                    </fieldset>
                                    <div id="modificarState" style="text-align:center"></div>
                                </div>
                                <div id="visualizarDialogo" title="Visualizar documento">
                                    <fieldset>
                                        <table>
                                            <tr>
                                                <td colspan="3">
                                                    <label>Titulo</label>
                                                    <input id="titleToView" type="text" disabled class="text ui-widget-content ui-corner-all" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label>Categoria</label>
                                                    <input id="categoryToView" type="text" disabled class="text ui-widget-content ui-corner-all" />
                                                </td>
                                                <td>
                                                    <label>Data</label>
                                                    <input id="dateToView" type="text" disabled class="text ui-widget-content ui-corner-all" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="3">
                                                    <label>Resumo</label>
                                                    <div id="resumeToView" type="text" class="text ui-widget-content ui-corner-all"></div>
                                                </td>
                                            </tr>
                                        </table>
                                    </fieldset>
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