<?php
if (isset($_POST["title"]) && isset($_POST["date"]) && isset($_POST["resume"]) && isset($_POST["tartigocategoryId"])) {
    $title       = $_POST["title"];
    $date        = $_POST["date"];
    $resume      = $_POST["resume"];
    $tcategoryId = $_POST["tartigocategoryId"];
    session_start();
    $us_id       = $_SESSION[$_SESSION['views'] . 'id'];
    require('../mysql.php');
    $mysql       = new mysql();
    $connection  = $mysql->connect();
    $query       = "SELECT f_add_artigo('$title', '$date', '$resume', '$tcategoryId', '$us_id')";
    $result      = $mysql->query($query);
    $resp        = '1';
    echo json_encode(array("text" => $resp));
} else {

    $url = "../../inicio.php";
    header("Location:" . $url);
    exit();
}
