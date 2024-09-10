<?php
if (isset($_POST["username"]) && isset($_POST["password"])) {
    session_start();
    require("mysql.php");
    $resp       = 0;
    $mysql      = new mysql();
    $mysql->connect();
    $username   = mysqli_real_escape_string($mysql->getConnection(), $_POST["username"]);
    $password   = mysqli_real_escape_string($mysql->getConnection(), $_POST["password"]);
    $query      = "
                select u.id, u.email, u.access, u.state
                from tuser u 
                where u.state=1 and u.username = '" . $username . "' AND u.password = '" . $password . "'
                ";
    $result     = $mysql->query($query);
    if ($row = mysqli_fetch_array($result)) {
        $id     = $row["id"];
        $email  = $row["email"];
        $access = $row["access"];
        $state  = $row["state"];
        if ($state == "1") {
            if (isset($_SESSION['views'])) {
                $_SESSION['views'] = $_SESSION['views'] + 1;
            } else {
                $_SESSION['views'] = 1;
            }
            $_SESSION[$_SESSION['views'] . 'id']       = $id;
            $_SESSION[$_SESSION['views'] . 'username'] = $username;
            $_SESSION[$_SESSION['views'] . 'password'] = $password;
            $_SESSION[$_SESSION['views'] . 'email']    = $email;
            $_SESSION[$_SESSION['views'] . 'access']   = $access;
            $resp = 1;
        } else
            $resp = 2;
    } else {
        $resp = 0;
    }
    echo json_encode(array("text" => $resp));
} else {
    $url = "../index.php";
    header("Location:" . $url);
    exit();
}
