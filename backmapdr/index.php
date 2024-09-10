<!DOCTYPE html>
<html dir="ltr" lang="en-US">

<head>
    <meta charset="utf-8">
    <title>MAPDR | Autenticação</title>
    <?php
    require("cmp/head.php");
    ?>
</head>

<body>
    <div id="art-main">
        <?php
        require("cmp/header.php");
        ?>
        <div class="art-sheet clearfix">
            <div class="art-layout-wrapper">
                <div class="art-content-layout">
                    <div class="art-content-layout-row">
                        <div class="art-layout-cell art-content">
                            <article class="art-post art-article">
                                <div class="art-postcontent art-postcontent-0 clearfix">
                                    <div class="art-content-layout-wrapper layout-item-0">
                                        <div class="art-content-layout layout-item-1">
                                            <h1 style="text-align:center">Autenticação</h1>
                                            <div class="art-content-layout-row">
                                                <div class="art-layout-cell layout-item-2" style="width: 100%">
                                                    <p style="text-align: center;">&nbsp;&nbsp;<a id="recuperar" href="javascript:recuperar()" title="Recuperar palavra-passe" class="art-button">Recuperar Password</a>&nbsp;
                                                        <a id="autenticar" href="javascript:autenticar()" title="Entrar no sistema" class="art-button">Entrar no Sistema</a>
                                                        <br>
                                                    </p>
                                                    <p style="text-align: center;"><img width="525" height="188" alt="" class="art-lightbox" src="images/Autenticar.png"><br></p>
                                                    <p style="text-align: center;">&nbsp;<a href="../" class="art-button">Voltar</a>&nbsp;<br></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="recuperarDialogo" title="Recuperar palavra-passe">
                                    <fieldset>
                                        <label>Email</label>
                                        <input id="emailToRecover" type="text" class="text ui-widget-content ui-corner-all" />
                                    </fieldset>
                                    <div id="recuperarState" style="text-align:center"></div>
                                </div>
                                <div id="autenticarDialogo" title="Autenticação">
                                    <fieldset>
                                        <label>Nome de utilizador</label>
                                        <input id="usernameToLogin" type="text" class="text ui-widget-content ui-corner-all" />
                                        <label>Palavra passe</label>
                                        <input id="passwordToLogin" type="password" class="text ui-widget-content ui-corner-all" />
                                    </fieldset>
                                    <div id="autenticarState" style="text-align:center"></div>
                                </div>
                            </article>
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