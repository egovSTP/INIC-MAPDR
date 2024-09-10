<?php
if (isset($_POST["id"]) && isset($_POST["username"]) && isset($_POST["password"]) && isset($_POST["email"])) {
    require('mysql.php');
    $id         = $_POST["id"];
    $username   = $_POST["username"];
    $password   = $_POST["password"];
    $email      = $_POST["email"];
    $mysql      = new mysql();
    $mysql->connect();
    $query      = "select f_user_change('$id','$username','$password','$email')";
    $result     = $mysql->query($query);
    if ($row = mysqli_fetch_array($result)) {
        session_start();
        $_SESSION[$_SESSION['views'] . 'username'] = $username;
        $_SESSION[$_SESSION['views'] . 'password'] = $password;
        $_SESSION[$_SESSION['views'] . 'email']    = $email;
        $resp = 1;
    } else
        $resp = 0;
    echo json_encode(array("text" => $resp));
} else {
    $url = "../inicio.php";
    header("Location:" . $url);
    exit();
}
