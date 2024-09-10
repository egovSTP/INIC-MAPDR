<?php
if (isset($_POST["id"])) {
    $id         = $_POST["id"];
    session_start();
    $us_id      = $_SESSION[$_SESSION['views'] . 'id'];
    require('../mysql.php');
    $mysql      = new mysql();
    $mysql->connect();
    $query      = "SELECT f_path_news('$id')";
    $result     = $mysql->query($query);
    if ($row = mysqli_fetch_array($result)) {
        $path = $row['0'];
        $real_path = $_SERVER["DOCUMENT_ROOT"] . "/madr/backmapdr/" . $path;
        if ($path !== "" && file_exists($real_path) && !is_dir($real_path)) {
            unlink($real_path);
            $resp = "1";
        }
        $mysql->connect();
        $query  = "SELECT f_del_news('$id')";
        $result = $mysql->query($query);
        $resp   = '1';
    } else
        $resp = "0";
} else {
    $resp = "0";
}
echo json_encode(array("text" => $resp));
