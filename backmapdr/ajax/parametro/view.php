<?php
if (isset($_GET["pattern"])) {
    $pattern    = $_GET["pattern"];
    require('../mysql.php');
    $mysql      = new mysql();
    $mysql->connect();
    switch ($pattern) {
        case "tdocscategory":
            $result = $mysql->query("call p_count_row('tdocscategory')");
            if ($row = mysqli_fetch_array($result)) {
                $total = $row['total'];
                echo "<input id='totalCategoriaDocumento' type='hidden' value='$total' />";
                $mysql->connect();
                $result = $mysql->query("call p_view_category('tdocscategory')");
            }
            break;
        case "tnewscategory":
            $result = $mysql->query("call p_count_row('tnewscategory')");
            if ($row = mysqli_fetch_array($result)) {
                $total = $row['total'];
                echo "<input id='totalCategoriaNoticia' type='hidden' value='$total' />";
                $mysql->connect();
                $result = $mysql->query("call p_view_category('tnewscategory')");
            }
            break;
    }
    $num = mysqli_num_rows($result);
    if ($num > 0) {

        echo "<div class='art-content-layout-row'><div class='art-layout-cell layout-item-0' style='width: 100%'><table style='border:hidden'>";
        switch ($pattern) {
            case "tdocscategory":
                echo "<tr style='border:hidden'><td style='border:hidden'></td><td style='border:hidden'><strong>Icon</strong></td><td style='border:hidden'><strong>Categoria</strong></td></tr>";
                break;
            case "tnewscategory":
                echo "<tr style='border:hidden'><td style='border:hidden'></td><td style='border:hidden'><strong>Categoria</strong></td></tr>";
                break;
        } 
        $i = 0;
        while ($row = mysqli_fetch_array($result)) {
            switch ($pattern) {
                case "tdocscategory":
                    echo "<tr style='border:hidden'><td style='border:hidden'><a id='modificarCategoriaDocumento" . $i . "' title='Modificar parametro " . $row['name'] . "' href='javascript:modificarCategoriaDocumento(" . $row['id'] . ")'><img src='images/update.png' width='28px' height='28px' /></a></td>";
                    echo "<input type='hidden' id='" . $row['id'] . "nameCategoriaDocumento' value='" . $row['name'] . "' />";
                    echo "<input type='hidden' id='" . $row['id'] . "pathCategoriaDocumento' value='" . $row['path'] . "' />";
                    echo isset($row['path']) ? "<td style='border:hidden'><span style='position: relative; top: 10px;'><img src='" . $row['path'] . "' style='margin-top: -10px; width: 30px' /></span></td>" : "<td></td>";
                    echo "<td style='border:hidden'><span style='position: relative; top: 10px;'>" . $row['name'] . "</span></td></tr>";
                    break;
                case "tnewscategory":
                    echo "<tr style='border:hidden'><td style='border:hidden'><a id='modificarCategoriaNoticia" . $i . "' title='Modificar parametro " . $row['name'] . "' href='javascript:modificarCategoriaNoticia(" . $row['id'] . ")'><img src='images/update.png' width='28px' height='28px' /></a></td>";
                    echo "<input type='hidden' id='" . $row['id'] . "nameCategoriaNoticia' value='" . $row['name'] . "' />";
                    echo "<td style='border:hidden'><span style='position: relative; top: 10px;'>" . $row['name'] . "</span></td></tr>";
                    break;
            }
            $i++;
        }
        echo "</table></div></div>";
    }
}
