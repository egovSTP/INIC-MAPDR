<?php
$data = json_decode(file_get_contents('php://input'), true);
if (isset($data["path"]) && isset($data["name"]) && isset($data["did"])) {
    $path_doc64      = $data['path'];
    $name            = $data['name'];
    $did             = $data['did'];
    $path="doc/pdf";
    session_start();
    $us_id      = $_SESSION[$_SESSION['views'] . 'id'];
    require('../mysql.php');
    $mysql      = new mysql();
    $mysql->connect();
    $query      = "SELECT f_add_docsfile('$path', '$did', '$name','$path_doc64')";
    $result     = $mysql->query($query);
    $resp       = '1';
} else {
    $resp = '0';
}
echo json_encode(array("text" => $resp));
