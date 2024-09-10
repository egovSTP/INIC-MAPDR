<?php
if (isset($_POST["path"])  && isset($_POST["pid"])) {
    $path       = $_POST['path'];
    $pid        = $_POST['pid'];
    require('../mysql.php');
    $mysql      = new mysql();
    $mysql->connect();
    $query      = "SELECT f_udp_project('$pid ', '$path')";
    $result     = $mysql->query($query);
    $resp       = '1';
} else {
    $resp = '0';
}
echo json_encode(array("text" => $resp));
