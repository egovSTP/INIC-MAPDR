<?php
require("cmp/session.php");
?>
<!DOCTYPE html>
<html dir="ltr" lang="en-US">

<head>
    <meta charset="utf-8">
    <title>MAPDR | Utilizadors</title>
    <?php
    require('cmp/import.php');
    ?>
    <script src="js/user.js" type="text/javascript"></script>
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
                                <h2 class="art-postheader">Utilizadores</h2>
                                <div class="art-postcontent art-postcontent-3 clearfix">
                                    <div class="art-content-layout">
                                        <div class="art-content-layout-row">
                                            <div class="art-layout-cell layout-item-0" style="width: 100%">
                                                <p>Módulo de gestão dos utilizadores que terão acesso ao sistema para posteriormente realizarem a gestão dos conteúdos.</p>
                                                <p>Cada utilizador está constituído por username, password, email e o seu nível de acesso.</p>
                                                <br />
                                                <a id='adicionar' href='javascript:adicionar()' title='Adicionar novo utilizador' class='art-button' style='position: relative; left: 10px;'>Adicionar</a>
                                            </div>
                                        </div>
                                        <div id="adicionarDialogo" title="Adicionar novo utilizador">
                                            <fieldset>
                                                <label>Nome de utilizador</label>
                                                <input id="usernameToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Palavra passe</label>
                                                <input id="passwordToInsert" type="password" class="text ui-widget-content ui-corner-all" />
                                                <label>Email</label>
                                                <input id="emailToInsert" type="email" class="text ui-widget-content ui-corner-all" />
                                                <label>Acesso</label>
                                                <p>Acesso 0 - Gestão total</p>
                                                <p>Acesso 1 - Gestão parcial (sem gerir os utlizadores e os parametros)</p>
                                                <input id="accessToInsert" type="text" class="text ui-widget-content ui-corner-all" />
                                            </fieldset>
                                            <div id="adicionarState" style="text-align:center"></div>
                                        </div>
                                        <div id="modificarDialogo" title="Alterar utilizador">
                                            <fieldset>
                                                <input id="idToUpdate" type="hidden" />
                                                <label>Nome de utilizador</label>
                                                <input id="usernameToUpdate" type="text" class="text ui-widget-content ui-corner-all" />
                                                <label>Palavra passe</label>
                                                <input id="passwordToUpdate" type="password" class="text ui-widget-content ui-corner-all" />
                                                <label>Email</label>
                                                <input id="emailToUpdate" type="email" class="text ui-widget-content ui-corner-all" />
                                                <label>Bloqueda/Desbloqueada</label>
                                                <input id="stateToUpdate" type="checkbox" class="" />
                                                <label>Acesso</label>
                                                <p>Acesso 0 - Gestão total</p>
                                                <p>Acesso 1 - Gestão parcial (sem gerir os utlizadores e os parametros)</p>
                                                <input id="accessToUpdate" type="text" class="text ui-widget-content ui-corner-all" />
                                            </fieldset>
                                            <div id="modificarState" style="text-align:center"></div>
                                        </div>
                                        <div id="visualizarDialogo" title="Visualizar utilizador">
                                            <fieldset>
                                                <input id="idToView" type="hidden" />
                                                <label>Nome de utilizador</label>
                                                <input id="usernameToView" type="text" disabled class="text ui-widget-content ui-corner-all" />
                                                <label>Palavra passe</label>
                                                <input id="passwordToView" type="text" disabled class="text ui-widget-content ui-corner-all" />
                                                <label>Email</label>
                                                <input id="emailToView" type="email" disabled class="text ui-widget-content ui-corner-all" />
                                                <label>Bloqueda/Desbloqueada</label>
                                                <input id="stateToView" type="checkbox" disabled class="" />
                                                <label>Acesso</label>
                                                <input id="accessToView" type="text" disabled title="Acesso 0 - Gestão total, Acesso 1 - Gestão parcial (sem gerir os utlizadores e os parametros)" class="text ui-widget-content ui-corner-all" />
                                            </fieldset>
                                        </div>
                                    </div><br />
                                    <div id="utilizadorContent" class="art-content-layout"></div>
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