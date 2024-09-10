<?php
if (isset($_POST["id"]) && isset($_POST["name"]) && isset($_POST["sigla"])) {
    $name     = $_POST['name'];
    $sigla     = $_POST['sigla'];
    $id       = $_POST['id'];
    require('../mysql.php');
    $mysql      = new mysql();
    $mysql->connect();
    $query      = "SELECT f_upd_entity('$name', '$sigla', '$id')";
    $result     = $mysql->query($query);
    $resp = '1';
} else {
    $resp = '0';
}

echo json_encode(array("text" => $resp));
