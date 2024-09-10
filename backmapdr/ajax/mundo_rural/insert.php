<?php
if (isset($_POST["titulo"]) && isset($_POST["date"]) && isset($_POST["resume"]) && isset($_POST["url"])) {
    $titulo      = $_POST["titulo"];
    $date        = $_POST["date"];
    $resume      = $_POST["resume"];
    $url         = $_POST["url"];
    require('../mysql.php');
    $mysql           = new mysql();
    $connection  = $mysql->connect();
    $query       = "SELECT f_add_rural('$titulo', '$resume', '$url', '$date')";
    $result      = $mysql->query($query);
    $resp        = '1';
    echo json_encode(array("text" => $resp));
} else {
    $url = "../../inicio.php";
    header("Location:" . $url);
    exit();
}
