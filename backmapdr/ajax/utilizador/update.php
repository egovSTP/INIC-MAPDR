<?php

if (isset($_POST["id"]) && isset($_POST["username"]) && isset($_POST["password"]) && isset($_POST["email"]) && isset($_POST["access"]) && isset($_POST["state"])) {
    $id         = $_POST["id"];
    $username   = $_POST["username"];
    $password   = $_POST["password"];
    $email      = $_POST["email"];
    $access     = $_POST["access"];
    $state      = $_POST["state"];
    session_start();
    $us_id      = $_SESSION[$_SESSION['views'] . 'id'];
    include('../mysql.php');
    $mysql      = new mysql();
    $mysql->connect();
    $query      = "select f_upd_user('$id', '$username', '$password', '$email', '$access', '$state', '$us_id')";
    $result     = $mysql->query($query);
    $resp       = 1;
    echo json_encode(array("text" => $resp));
} else {
    $url = "../../principal.php";
    header("Location:" . $url); /* Redirect browser */
    exit();
}
