<?php
require("cmp/session.php");
?>
<!DOCTYPE html>
<html dir="ltr" lang="en-US">

<head>
    <meta charset="utf-8">
    <title> MAPDR | Parametros</title>
    <?php
    require('cmp/import.php');
    ?>
    <script src="js/documentcategory.js" type="text/javascript"></script>
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
                                <h2 class="art-postheader">Parametros</h2>
                                <div class="art-postcontent art-postcontent-3 clearfix">
                                    <div class="art-content-layout">
                                        <div class="art-content-layout-row">
                                            <div class="art-layout-cell layout-item-0" style="width: 100%">
                                                <p>Módulo de gestão dos parametros de configuração, estes parametros permitirão aos utilizadores gerirem as notícias, documentos e biblioteca.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article class="art-post art-article">
                                <h2 class="art-postheader">Categoria do documento</h2>
                                <div class="art-postcontent art-postcontent-3 clearfix">
                                    <div class="art-content-layout">
                                        <div class="art-content-layout-row">
                                            <div class="art-layout-cell layout-item-0" style="width: 100%">
                                                <p>A categoria do documento será utilizada na gestão do documento, esta está constituída apenas por um nome.</p>
                                                <p><a id='adicionarCategoriaDocumento' href='javascript:adicionarCategoriaDocumento()' title='Adicionar novo parametro' class='art-button' style='position: relative; left: 10px;'>Adicionar</a></p>
                                            </div>
                                        </div><br />
                                        <div id="categoriaDocumentoContent" class="art-content-layout-row">
                                            <div class="art-layout-cell layout-item-0" style="width: 100%">
                                            </div>
                                        </div>
                                        <div id="adicionarCategoriaDocumentoDialogo" title="Adicionar Nova Categoria">
                                            <fieldset>
                                                <label>Nome de Categoria</label>
                                                <input id="nameCategoriaDocumentoToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Icon <b>(60x60)</b> pixels</label>
                                                <input id="pathToInsert" type="file" name="photo" onchange="show(this)" class="text ui-widget-content ui-corner-all" />
                                            </fieldset>
                                            <div id="adicionarCategoriaDocumentoState" style="text-align:center"></div>
                                        </div>
                                        <div id="modificarCategoriaDocumentoDialogo" title="Alterar Categoria">
                                            <fieldset>
                                                <input id="idCategoriaDocumentoToUpdate" type="hidden" />
                                                <input id="pathCategoriaDocumentoToUpdate" type="hidden" />
                                                <label>Nome de Categoria</label>
                                                <input id="nameCategoriaDocumentoToUpdate" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Icon <b>(60x60)</b> pixels</label>
                                                <input id="pathToUpdate" type="file" name="photo" onchange="show(this)" class="text ui-widget-content ui-corner-all" />
                                            </fieldset>
                                            <div id="modificarCategoriaDocumentoState" style="text-align:center"></div>
                                        </div>
                                    </div><br>
                                </div>
                            </article>

                            <article class="art-post art-article">
                                <h2 class="art-postheader">Categoria da Actividades</h2>
                                <div class="art-postcontent art-postcontent-3 clearfix">
                                    <div class="art-content-layout">
                                        <div class="art-content-layout-row">
                                            <div class="art-layout-cell layout-item-0" style="width: 100%">
                                                <p>A categoria da Actividades será utilizada na gestão da Actividades, esta está constituída apenas por um nome.</p>
                                                <p><a id='adicionarCategoriaNoticia' href='javascript:adicionarCategoriaNoticia()' title='Adicionar novo parametro' class='art-button' style='position: relative; left: 10px;'>Adicionar</a></p>
                                            </div>
                                        </div><br />
                                        <div id="categoriaNoticiaContent" class="art-content-layout-row">
                                            <div class="art-layout-cell layout-item-0" style="width: 100%">
                                            </div>
                                        </div>
                                        <div id="adicionarCategoriaNoticiaDialogo" title="Adicionar Nova Categoria">
                                            <fieldset>
                                                <label>Nome de Categoria</label>
                                                <input id="nameCategoriaNoticiaToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                            </fieldset>
                                            <div id="adicionarCategoriaNoticiaState" style="text-align:center"></div>
                                        </div>
                                        <div id="modificarCategoriaNoticiaDialogo" title="Alterar Categoria">
                                            <fieldset>
                                                <input id="idCategoriaNoticiaToUpdate" type="hidden" />
                                                <label>Nome de Categoria</label>
                                                <input id="nameCategoriaNoticiaToUpdate" type="text" class="text ui-widget-content ui-corner-all" />
                                            </fieldset>
                                            <div id="modificarCategoriaNoticiaState" style="text-align:center"></div>
                                        </div>
                                    </div><br>
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