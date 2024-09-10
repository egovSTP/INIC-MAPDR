<?php
if (isset($_POST["email"])) {
    session_start();
    require("mysql.php");
    require("config.php");
    $resp   = 0;
    $mysql  = new mysql();
    $config  = new config();
    $mysql->connect();
    $email  = mysqli_real_escape_string($mysql->getConnection(), $_POST["email"]);
    $query  = "
             select u.id, u.username, u.password 
             from tuser u 
             where u.state=1 and u.email = '" . $email . "'
              ";
    $result = $mysql->query($query);
    if ($row = mysqli_fetch_array($result)) {
        $username  = $row["username"];
        $password  = $row["password"];
        $config->sendMessage($email, $username, $password);
        $resp = 1;
    } else {
        $resp = 0;
    }
    echo json_encode(array("text" => $resp));
} else {
    $url = "../index.php";
    header("Location:" . $url);
    exit();
}
