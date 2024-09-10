<div class="art-block clearfix">
    <div class="art-blockheader">
        <h3 class="t">Área de Utilizador</h3>
    </div>
    <div class="art-blockcontent">
        <div>
            <?php
            if (session_id() == '' || session_status() == PHP_SESSION_NONE) {
                session_start();
            }
            // Check
            if (isset($_SESSION) && $_SESSION['views'] == 0) {
                header('Location: index.php');
            } else {
                $u_username_logged = $_SESSION[$_SESSION['views'] . 'username'];
                echo "<h7>Olá: <b>" . $u_username_logged . "</b></h2>";
            }
            ?>
            <p><a href="javascript:alterar()" id="alterar" title="Alterar meus dados" class="art-button">Alterar dados</a></p><br />
            <p><a href="./upload/manual.pdf" class="art-button" target="_blank">Manual do utilizador</a></p><br /><br>
            <p><a href="javascript:sair()" id="sair" title="Sair do gestor de conteúdos" class="art-button">Sair</a></p>
            <div id="sairDialogo" title="Sair do Sistema">
                <p>Desejas sair do Sistema?</p>
                <div id="sairState" style="text-align:center"></div>
            </div>
            <div id="alterarDialogo" title="Alteração dos dados">
                <fieldset>
                    <label>Nome de utilizador</label>
                    <input id="username_logged" type="text" disabled class="text ui-widget-content ui-corner-all" />
                    <label>Palavra passe</label>
                    <input id="password_logged" type="password" class="text ui-widget-content ui-corner-all" />
                    <label>Email</label>
                    <input id="email_logged" type="email" class="text ui-widget-content ui-corner-all" />
                </fieldset>
                <div id="alterarState" style="text-align:center"></div>
            </div>
        </div>
    </div>
</div>