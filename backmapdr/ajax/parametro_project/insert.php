<?php
if (isset($_POST["anoToInsert"]) && isset($_POST["stateToInsert"]) && isset($_POST["id"])) {
    $ano     = $_POST['anoToInsert'];
    $stateToInsert    = $_POST['stateToInsert'];
    $id     = $_POST['id'];

    require('../mysql.php');
    $mysql      = new mysql();
    $mysql->connect();
    $query      = "SELECT f_add_parameter('$ano', '$stateToInsert', '$id')";
    $result     = $mysql->query($query);
    $resp = '1';
} else {
    $resp = '0';
}

echo json_encode(array("text" => $resp));
