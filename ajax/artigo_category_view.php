<?php
require('../backmapdr/ajax/mysql.php');
$mysql      = new mysql();
$mysql->connect();
$result     = $mysql->query("call p_view_category('tartigocategory')");
$num        = mysqli_num_rows($result);
echo
'<button id="buttonContent" class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Todos
</button>
<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a  id="categoria0" class="dropdown-item" href="javascript:categoriaUpdate(-1)">Todos</a></li>
';
if ($num > 0) {
    while ($row = mysqli_fetch_array($result)) {
        $id   = $row["id"];
        $name = $row["name"];
        echo
        '
        <li><a id="categoria' . $id . '" class="dropdown-item" href="javascript:categoriaUpdate(' . $id . ')">' . $name . '</a></li>
        ';
    }
    echo "</ul>";
}
