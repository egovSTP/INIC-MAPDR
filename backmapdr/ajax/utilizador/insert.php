<?php
if (isset($_POST["username"]) && isset($_POST["password"]) && isset($_POST["email"]) && isset($_POST["access"])) {
    $username   = $_POST["username"];
    $password   = $_POST["password"];
    $email      = $_POST["email"];
    $access     = $_POST["access"];
    session_start();
    $us_id      = $_SESSION[$_SESSION['views'] . 'id'];
    require('../mysql.php');
    $mysql      = new mysql();
    $mysql->connect();
    $query      = "SELECT f_add_user('$username', '$password', '$email', '$access', '$us_id')";
    $result     = $mysql->query($query);
    $resp       = '1';
    echo json_encode(array("text" => $resp));
} else {
    $url = "../../principal.php";
    header("Location:" . $url); /* Redirect browser */
    exit();
}
