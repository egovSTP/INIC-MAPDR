<?php
$data = json_decode(file_get_contents('php://input'), true);
if (isset($data["path"]) && isset($data["name"]) && isset($data["id"])) {
    $path_doc64      = $data['path'];
    $name            = $data['name'];
    $id             = $data['id'];
    $path="doc/pdf";
 // session_start();
   // $us_id      = $_SESSION[$_SESSION['views'] . 'id'];
    $us_id=1;
    require('../mysql.php');
    $mysql      = new mysql();
    $mysql->connect();
    $query      = "SELECT UpdateTdocsfile('$path', '$id', '$name','$path_doc64')";
    $result     = $mysql->query($query);
    $resp       = '1';
} else {
    $resp = '0';
}
echo json_encode(array("text" => $resp));
?>
