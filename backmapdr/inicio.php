<?php
require("cmp/session.php");
?>
<!DOCTYPE html>
<html dir="ltr" lang="en-US">

<head>
    <meta charset="utf-8">
    <title>MAPDR | Ínicio</title>
    <?php
    require('cmp/import.php');
    ?>
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
                                <div class="art-postcontent art-postcontent-0 clearfix">
                                    <div class="art-content-layout-wrapper layout-item-0">
                                        <h2 class="art-postheader">Bem-Vindo ao Portal do MAPDR de São Tomé e Príncipe</h2>
                                        <div class="art-postcontent art-postcontent-3 clearfix">
                                            <div class="art-content-layout">
                                                <div class="art-content-layout-row">
                                                    <div class="art-layout-cell layout-item-0" style="width: 100%">
                                                        <p style="text-align: justify;">Este espaço tem como objetivo fornecer ao utilizador a gestão de todos os conteúdos relacionados com a administração do sistema.</p>
                                                        <p style="text-align: justify;">De acordo com seu nível de acesso poderá adicionar, remover, modificar ou visualizar os conteúdos como: a gestão de utilizadores, as informações do MAPDR, as notícias, os documentos, e os parâmetros.</p>
                                                        <p style="text-align: justify;">Pretende-se também que este espaço seja uma via privilegiada para dar a conhecer todas as atividades do MAPDR, bem como facilitar o acesso, por parte dos utilizadores a todas as informações públicas disponibilizadas pelo mesmo.</p>
                                                    </div>
                                                </div>
                                            </div><br>
                                        </div>
                                    </div>
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
        require("cmp/footer.php")
        ?>
    </div>
</body>

</html>