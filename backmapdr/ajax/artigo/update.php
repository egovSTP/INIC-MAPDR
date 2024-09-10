<?php
if (isset($_POST["id"]) && isset($_POST["title"]) && isset($_POST["date"]) && isset($_POST["resume"]) && isset($_POST["tartigocategoryId"])) {
    $id          = $_POST["id"];
    $title       = $_POST["title"];
    $date        = $_POST["date"];
    $resume      = $_POST["resume"];
    $tcategoryId = $_POST["tartigocategoryId"];
    session_start();
    $us_id       = $_SESSION[$_SESSION['views'] . 'id'];
    require('../mysql.php');
    $mysql       = new mysql();
    $connection  = $mysql->connect();
    $query       = "SELECT f_upd_artigo('$id', '$title', '$date', '$resume', '$tcategoryId');";
    $result      = $mysql->query($query);
    $resp        = '1';
    echo json_encode(array("text" => $resp));
} else {
    $resp = '0';
    echo json_encode(array("text" => $resp));
}
