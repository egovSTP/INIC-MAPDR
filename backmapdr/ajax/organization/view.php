<?php
if (isset($_GET["page"]) && isset($_GET["type"])) {
    require('../mysql.php');
    require("../config.php");
    $mysql      = new mysql();
    $config      = new config();
    $index      = $_GET['page'] - 1;
    $type       = $_GET['type'];
    $quantidade = $config->quantidade_backend;
    $page       = $index * $quantidade;
    $mysql->connect();
    $result     = $mysql->query("CALL p_count_entity('$type')");
    if ($row1 = mysqli_fetch_array($result)) {
        $total      = $row1['total'];
        echo "<input id='total' type='hidden' value='$total' />";
        echo "<input id='quantidade' type='hidden' value='$quantidade' />";
        $mysql->connect();
        $result = $mysql->query("CALL p_view_entity('$type', '$page', '$quantidade')");
        $num = mysqli_num_rows($result);
        if ($num > 0) {
            echo "<div class='art-content-layout-row'><div class='art-layout-cell layout-item-0' style='width: 100%'><table style='border:hidden'>";
            echo "<tr style='border:hidden'><td style='border:hidden'></td><td style='border:hidden'><strong>Membros</strong></td><td style='border:hidden'><strong>Conteúdos</strong></td><td style='border:hidden'><strong>Parâmetros</strong></td><td style='border:hidden'><strong>Nome</strong></td></tr>";
            $i = 0;
            while ($row = mysqli_fetch_array($result)) {
                echo "<tr style='border:hidden'><td style='border:hidden'><a id='modificar" . $i . "' title='Modificar Entidade " . $row["name"] . "' href='javascript:modificar(" . $row['id'] . ")'><img src='images/update.png' height='28px' width='28px'/></a></td><td style='border:hidden'><a id='conteudo" . $i . "' title='Membro" . $row["name"] . "' href='membro.php?eid=" . $row['id'] . "&ename=" . $row["name"] . "&esigla=" . $row["sigla"] . "' class='art-button' style='top: 5px; position: relative;'>Membro</a></td><td style='border:hidden'><a id='conteudo" . $i . "' title='Conteúdos" . $row["name"] . "' href='conteudo.php?eid=" . $row['id'] . "&ename=" . $row["name"] . "&esigla=" . $row["sigla"] . "' class='art-button' style='top: 5px; position: relative;'>Conteúdo</a></td><td style='border:hidden'><a id='conteudo" . $i . "' title='Membro " . $row["name"] . "' href='parametro_project.php?eid=" . $row['id'] . "&ename=" . $row["name"] . "&esigla=" . $row["sigla"] . "' class='art-button' style='top: 5px; position: relative;'>Parâmetro</a></td>";
                echo "<input type='hidden' id='" . $row["id"] . "name' value='" . $row["name"] . "' />";
                echo "<input type='hidden' id='" . $row["id"] . "sigla' value='" . $row["sigla"] . "' />";

                echo "<td style='border:hidden'><a href='javascript:visualizar(" . $row["id"] . ")' style='top: 10px; position: relative;'>" . $row["name"] . " (" . $row["sigla"]  . ")</a></td></tr>";
                $i++;
            }
            echo "</table></div></div>";
            /*Footer page*/
            echo "<div class='art-content-layout-row'><div class='art-layout-cell layout-item-0' style='width: 100%'><div class='art-pager'>";
            $quantidade = $config->quantidade_backend;
            $group = $total % $quantidade == 0 ? $total / $quantidade : ($total / $quantidade) + 1;
            $inicio = 0;
            $fim = 0;
            if ($_GET["page"] - 1 + $quantidade < $group) {
                $inicio = $_GET["page"];
                $fim = ($_GET["page"]) + $quantidade;
            } else if ($group < $quantidade) {
                $inicio = 1;
                $fim = $group;
            } else {
                $inicio = $_GET["page"] - 1;
                $fim = ($_GET["page"]) + $quantidade - 1;
            }
            echo "<a href='javascript:mostrarAnteriorContent()' class='more'>Anterior</a>";
            $page = $index + 1;
            for ($j = $inicio; $j <= $fim; $j++) {
                if ($j == $page) {
                    $val = $j;
                    echo "<a href='javascript:mostrarContent($val)' class='active'>$val</a> ";
                } else {
                    $val = $j;
                    echo "<a href='javascript:mostrarContent($val)'>$val</a> ";
                }
            }
            echo "<a href='javascript:mostrarProximoContent()' class='more'>Próximo</a>";
            echo "</div></div></div>";
        }
    }
}
