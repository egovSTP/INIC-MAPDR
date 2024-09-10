<?php
require("cmp/session.php");
?>
<!DOCTYPE html>
<html dir="ltr" lang="en-US">

<head>
    <meta charset="utf-8">
    <title>MAPDR | Actividades</title>
    <?php
    require('cmp/import.php');
    ?>
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css" rel="stylesheet">
    <link href="css/summernote.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js"></script>
    <script src="js/news.js" type="text/javascript"></script>
    <script src="js/newscategory.js" type="text/javascript"></script>
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
                                <h2 class="art-postheader">Actividades</h2>
                                <div class="art-postcontent art-postcontent-3 clearfix">
                                    <div class="art-content-layout">
                                        <div class="art-content-layout-row">
                                            <div class="art-layout-cell layout-item-0" style="width: 100%">
                                                <p>Módulo de gestão das Actividades do Portal do MAPDR.</p>
                                                <a id='adicionar' href='javascript:adicionar()' title='Adicionar nova Actividades' class='art-button' style='position: relative; left: 10px;'>Adicionar</a>
                                            </div>
                                        </div>
                                        <div id="adicionarDialogo" title="Adicionar Actividades">
                                            <fieldset>
                                                <label>Título</label>
                                                <input id="titleToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Data</label>
                                                <input id="dateToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Image de capa <b>(1024x640)</b> pixels</label>
                                                <input id="pathToInsert" type="file" name="photo" onchange="show(this)" class="text ui-widget-content ui-corner-all" />
                                                <label>Categoria Actividades</label>
                                                <div id="categoryToInsert"></div>
                                                <label>Destaque</label>
                                                <input id="featuredToInsert" type="checkbox" class="" /><br />
                                                <label>Resumo de Conteúdo</label>
                                                <textarea id="resumeToInsert" cols="95" rows="7" placeholder="Resumo de Conteúdo da actividade" class="text ui-widget-content ui-corner-all"></textarea>
                                                </br><label>Conteúdo</label>
                                                <textarea id="contentToInsert" cols="60" rows="10" placeholder="Conteúdo da actividade" class="summernote"></textarea>
                                            </fieldset>
                                            <div id="adicionarState" style="text-align:center"></div>
                                        </div>
                                        <div id="modificarDialogo_news" title="Alterar Actividades">
                                            <fieldset>
                                                <input id="idToUpdate" type="hidden" />
                                                <input id="old_pathToUpdate" type="hidden" />
                                                <label>Título</label>
                                                <input id="titleToUpdate" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Data</label>
                                                <input id="dateToUpdate" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Image de capa <b>(1024x640)</b> pixels</label>
                                                <input id="pathToUpdate" type="file" name="photo" onchange="show(this)" class="text ui-widget-content ui-corner-all" />
                                                <label>Categoria Actividades</label>
                                                <div id="categoryToUpdate"></div>
                                                <label>Destaque</label>
                                                <input id="featuredToUpdate" type="checkbox" class="" /><br />
                                                <label>Resumo de Conteúdo</label>
                                                <textarea id="resumeToUpdate" cols="95" rows="7" placeholder="Resumo de Conteúdo da actividade" class="text ui-widget-content ui-corner-all"></textarea>
                                                <label>Conteúdo</label>
                                                <textarea id="contentToUpdate" cols="60" rows="10" placeholder="Conteúdo da actividade" class="summernote"></textarea>

                                            </fieldset>
                                            <div id="modificarState" style="text-align:center"></div>
                                        </div>
                                        <div id="visualizarDialogo" title="Visualizar Actividades">
                                            <div id="tabs">
                                                <ul>
                                                    <li><a href="#tabs-1">Atributos</a></li>
                                                    <li><a href="#tabs-2">Conteudo</a></li>
                                                    <li><a href="#tabs-3">Foto</a></li>
                                                </ul>
                                                <div id="tabs-1">
                                                    <fieldset>
                                                        <table>
                                                            <tr>
                                                                <td colspan="4">
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
                                                                <td>
                                                                    <label>Destaque</label>
                                                                    <input id="featuredToView" disabled type="checkbox" class="" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="4">
                                                                    <label>Resumo</label>
                                                                    <div id="resumeToView" class="text ui-widget-content ui-corner-all"></div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </fieldset>
                                                </div>
                                                <div id="tabs-2">
                                                    <label>Conteudo</label>
                                                    <div id="contentToView" class="text ui-widget-content ui-corner-all"></div>
                                                </div>
                                                <div id="tabs-3">
                                                    <fieldset>
                                                        <label>Image de capa</label>
                                                        <div id="pathToView"></div>
                                                    </fieldset>
                                                </div>
                                            </div>
                                            <div id="adicionarState" style="text-align:center"></div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div id="noticiaContent" class="art-content-layout"></div>
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