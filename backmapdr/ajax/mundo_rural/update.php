<?php
if (isset($_POST["id"]) && isset($_POST["titulo"]) && isset($_POST["data"]) && isset($_POST["resume"]) && isset($_POST["url"])) {
    $id          = $_POST["id"];
    $titulo      = $_POST["titulo"];
    $data        = $_POST["data"];
    $resume      = $_POST["resume"];
    $url         = $_POST["url"];
    require('../mysql.php');
    $mysql           = new mysql();
    $connection  = $mysql->connect();
    $query       = "SELECT  f_upd_rural('$id','$titulo','$resume','$data','$url');";
    $result      = $mysql->query($query);
    $resp        = '1';
    echo json_encode(array("text" => $resp));
} else {
    $resp = '0';
    echo json_encode(array("text" => $resp));
}
