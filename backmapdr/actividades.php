<?php
require("cmp/session.php");
?>
<!DOCTYPE html>
<html dir="ltr" lang="en-US">

<head>
    <meta charset="utf-8">
    <title>MAPDR | Contéudo</title>
    <?php
    require('cmp/import.php');
    ?>
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css" rel="stylesheet">
    <link href="css/summernote.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js"></script>

    <script src="js/news.js" type="text/javascript"></script>
    <script src="js/documentcategory.js" type="text/javascript"></script>
    <script src="js/newscategory.js" type="text/javascript"></script>
    <script src="js/stateproject.js" type="text/javascript"></script>
    <script src="js/entity.js" type="text/javascript"></script>
    <script src="js/document.js" type="text/javascript"></script>
    <script src="js/direcao.js" type="text/javascript"></script>
    <script src="js/instituicao.js" type="text/javascript"></script>

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
                                                <textarea id="resumecontetntToInsert" cols="112" rows="7" placeholder="Resumo de Conteúdo da actividade" class="text ui-widget-content ui-corner-all"></textarea>
                                                </br><label>Conteúdo</label>
                                                <textarea id="resumeToInsert" cols="95" rows="10" placeholder="Conteúdo da actividade" class="summernote"></textarea>
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
                                                <textarea id="resumecontetntToUpdate" cols="112" rows="7" placeholder="Resumo de Conteúdo da actividade" class="text ui-widget-content ui-corner-all"></textarea>
                                                <label>Conteúdo</label>
                                                <textarea id="resumeToUpdate" cols="95" rows="10" placeholder="Conteúdo da actividade" class="summernote"></textarea>

                                            </fieldset>
                                            <div id="modificarState" style="text-align:center"></div>
                                        </div>
                                        <div id="visualizarDialogo" title="Visualizar Actividades">
                                            <div id="tabs">
                                                <ul>
                                                    <li><a href="#tabs-1">Atributos</a></li>
                                                    <li><a href="#tabs-2">Foto</a></li>
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
                            <!--   Projecto-->
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
                                                <label>Nome </label>
                                                <input id="nameenitityToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Sigla</label>
                                                <input id="siglaenitityToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                            </fieldset>
                                            <div id="adicionarentityState" style="text-align:center"></div>
                                        </div>


                                        <div id="modificarentityDialogo" title="Modificar Entidade">
                                            <fieldset>
                                                <input id="identidadeToUpdate" type="hidden" />
                                                <label>Nome </label>
                                                <input id="nameenitityToUpdate" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Sigla</label>
                                                <input id="siglaenitityToUpdate" type="text" class="text ui-widget-content ui-corner-all" />
                                            </fieldset>
                                            <div id="modificarentityState" style="text-align:center"></div>
                                        </div>


                                    </div><br>
                            </article>

                            <!-- documento-->

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


                            <!--direcção-->

                            <article class="art-post art-article">
                                <h2 class="art-postheader">Direção</h2>
                                <div class="art-postcontent art-postcontent-3 clearfix">
                                    <div class="art-content-layout">
                                        <div class="art-content-layout-row">
                                            <div class="art-layout-cell layout-item-0" style="width: 100%">
                                                <p>O modulo de Direção será utilizada na gestão do Direção.</p>
                                                <p><a id='adicionarEntity' href='javascript:adicionarEntidade()' title='Adicionar nova Entity' class='art-button' style='position: relative; left: 10px;'>Adicionar</a></p>
                                            </div>
                                        </div><br />

                                        <div id="entityContent" class="art-content-layout-row">
                                            <div class="art-layout-cell layout-item-0" style="width: 100%">
                                            </div>
                                        </div>

                                        <div id="adicionardirecaoDialogo" title="Adicionar Entidade">
                                            <fieldset>
                                                <label>Nome </label>
                                                <input id="namedirecaoToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Sigla</label>
                                                <input id="sigladirecaoToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                            </fieldset>
                                            <div id="adicionardirecaoState" style="text-align:center"></div>
                                        </div>


                                        <div id="modificardirecaoDialogo" title="Modificar Entidade">
                                            <fieldset>
                                                <input id="identidadeToUpdate" type="hidden" />
                                                <label>Nome </label>
                                                <input id="namedirecaoToUpdate" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Sigla</label>
                                                <input id="sigladirecaoToUpdate" type="text" class="text ui-widget-content ui-corner-all" />
                                            </fieldset>
                                            <div id="modificardirecaoState" style="text-align:center"></div>
                                        </div>


                                    </div>
                                    <div id="direcaoContent" class="art-content-layout-row">
                                        <div class="art-layout-cell layout-item-0" style="width: 100%">
                                        </div>
                                    </div>
                            </article>
                            <!-- instituicao-->



                            <article class="art-post art-article">
                                <h2 class="art-postheader">Instituição</h2>
                                <div class="art-postcontent art-postcontent-3 clearfix">
                                    <div class="art-content-layout">
                                        <div class="art-content-layout-row">
                                            <div class="art-layout-cell layout-item-0" style="width: 100%">
                                                <p>O modulo de Instituição será utilizada na gestão do Instituição.</p>
                                                <p><a id='adicionarEntity' href='javascript:adicionarEntidade()' title='Adicionar nova Entity' class='art-button' style='position: relative; left: 10px;'>Adicionar</a></p>
                                            </div>
                                        </div><br />

                                        <div id="entityContent" class="art-content-layout-row">
                                            <div class="art-layout-cell layout-item-0" style="width: 100%">
                                            </div>
                                        </div>

                                        <div id="adicionarinstituicaoDialogo" title="Adicionar Entidade">
                                            <fieldset>
                                                <label>Nome </label>
                                                <input id="nameinstituicaoToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Sigla</label>
                                                <input id="siglainstituicaoToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                            </fieldset>
                                            <div id="adicionarinstituicaoState" style="text-align:center"></div>
                                        </div>


                                        <div id="modificarinstituicaoDialogo" title="Modificar Entidade">
                                            <fieldset>
                                                <input id="identidadeToUpdate" type="hidden" />
                                                <label>Nome </label>
                                                <input id="nameinstituicaoToUpdate" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Sigla</label>
                                                <input id="siglainstituicaoToUpdate" type="text" class="text ui-widget-content ui-corner-all" />
                                            </fieldset>
                                            <div id="modificarinstituicaoState" style="text-align:center"></div>
                                        </div>


                                    </div>
                                    <div id="instituicaoContent" class="art-content-layout-row">
                                        <div class="art-layout-cell layout-item-0" style="width: 100%">
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