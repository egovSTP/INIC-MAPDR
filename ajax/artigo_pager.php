<?php
if (isset($_GET["page"]) && isset($_GET["tartigo_category_id"])) {
    require('../backmapdr/ajax/mysql.php');
    require('../backmapdr/ajax/config.php');
    $mysql        = new mysql();
    $cfg          = new config();
    $quantidade   = 6;
    $index        = ($_GET['page'] - 1) * $quantidade;
    $tcategory_id = $_GET["tartigo_category_id"];
    $connection   = $mysql->connect();
    $result       = $mysql->query("call p_count_artigo_by_category('$tcategory_id')");
    $num = mysqli_num_rows($result);
    if ($row1 = mysqli_fetch_array($result)) {
        $total = $row1['total'];
        if ($total != 0) {
            echo "<input id='total' type='hidden' value='$total' />";
            echo "<input id='quantidade' type='hidden' value='$quantidade' />";
            echo '<div class="blog-pagination"><ul class="pagination">';
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
            echo '<li class="page-item"><a href="javascript:mostrarAnteriorContent()" class="page-link">Anterior</a></li>';
            $page = $_GET["page"];
            for ($j = $inicio; $j <= $fim; $j++) {
                if ($j == $page) {
                    $val = $j;
                    echo '<li class="page-item active"><a href="javascript:mostrarContent(' . $val . ')" class="page-link">' . $val . '</a></li>';
                } else {
                    $val = $j;
                    echo '<li class="page-item"><a href="javascript:mostrarContent(' . $val . ')" class="page-link">' . $val . '</a></li>';
                }
            }
            echo '<li class="page-item"><a href="javascript:mostrarProximoContent()" class="page-link">Próximo</a></li>';
            echo "</ul></div>";
        }
    }
}
