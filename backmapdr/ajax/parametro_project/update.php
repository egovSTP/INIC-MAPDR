<?php
if (isset($_POST["anoTo"]) && isset($_POST["state"]) && isset($_POST["id"])) {
    $ano     = $_POST['anoTo'];
    $state    = $_POST['state'];
    $id     = $_POST['id'];

    require('../mysql.php');
    $mysql      = new mysql();
    $mysql->connect();
    $query      = "SELECT f_upd_paramter_project('$ano', '$state', '$id')";
    $result     = $mysql->query($query);
    $resp = '1';
} else {
    $resp = '0';
}

echo json_encode(array("text" => $resp));
