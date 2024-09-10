<?php
if (isset($_GET["page"])) {
    require('../mysql.php');
    require("../config.php");
    $mysql      = new mysql();
    $config     = new config();
    $index      = $_GET['page'] - 1;
    $page       = $index * $config->quantidade_backend;
    $mysql->connect();
    $result     = $mysql->query("CALL p_count_row('tnews')");
    if ($row1 = mysqli_fetch_array($result)) {
        $total      = $row1['total'];
        echo "<input id='total' type='hidden' value='$total' />";
        echo "<input id='quantidade' type='hidden' value='$config->quantidade_backend' />";
        $mysql->connect();
        $result     = $mysql->query("CALL p_view_news('$page', '$config->quantidade_backend')");
        $num = mysqli_num_rows($result);
        if ($num > 0) {
            echo "<div class='art-content-layout-row'><div class='art-layout-cell layout-item-0' style='width: 100%'><table style='border:hidden'>";
            echo "<tr style='border:hidden'><td style='border:hidden'></td><td style='border:hidden'><strong>Anexos</strong></td><td style='border:hidden'><strong>Titúlo</strong></td></tr>";
            $i = 0;
            while ($row = mysqli_fetch_array($result)) {
                echo "<tr style='border:hidden'><td style='border:hidden'><a id='modificar" . $i . "' title='Modificar Actividades " . $row["title"] . "' href='javascript:modificar_news(" . $row['id'] . ")'><img src='images/update.png' height='28px' width='28px'/></a></td><td style='border:hidden'><a id='anexo" . $i . "' title='Anexos Actividades " . $row["title"] . "' href='noticia_anexo.php?nid=" . $row['id'] . "&ntitle=" . $row["title"] . "' class='art-button' style='top: 5px; position: relative;'>Anexos</a></td>";
                echo "<input type='hidden' id='" . $row["id"] . "title' value='" . $row["title"] . "' />";
                echo "<input type='hidden' id='" . $row["id"] . "resume' value='" . $row["resume"] . "' />";
                echo "<input type='hidden' id='" . $row["id"] . "date' value='" . $row["date"] . "' />";
                echo "<input type='hidden' id='" . $row["id"] . "content' value='" . $row["content"] . "' />";

                echo "<input type='hidden' id='" . $row["id"] . "path_img' value='" . $row["path_img"] . "' />";
                echo "<input type='hidden' id='" . $row["id"] . "featured' value='" . $row["featured"] . "' />";
                echo "<input type='hidden' id='" . $row["id"] . "category' value='" . $row["category"] . "' />";
                echo "<td style='border:hidden'><a href='javascript:visualizar(" . $row["id"] . ")' style='top: 10px; position: relative;'>" . $row["title"] . "</a></td></tr>";
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