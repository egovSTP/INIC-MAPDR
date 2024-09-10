<?php
if (isset($_POST["name"]) && isset($_POST["sigla"]) && isset($_POST["tipo"])) {
    $name     = $_POST['name'];
    $sigla     = $_POST['sigla'];
    $tipo       = $_POST['tipo'];

    require('../mysql.php');
    $mysql      = new mysql();
    $mysql->connect();
    $query      = "SELECT f_add_entity('$name', '$sigla', '$tipo')";
    $result     = $mysql->query($query);
    $resp = '1';
} else {
    $resp = '0';
}

echo json_encode(array("text" => $resp));
