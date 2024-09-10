<?php
if (isset($_POST["path"]) && isset($_POST["name"])  && isset($_POST["category"]) && isset($_POST["nid"])) {
    $path       = $_POST['path'];
    $name       = $_POST['name'];
    $category   = $_POST["category"];
    $nid        = $_POST['nid'];
    session_start();
     $us_id      = $_SESSION[$_SESSION['views'] . 'id'];
   // $us_id = 1;
    require('../mysql.php');
    $mysql      = new mysql();
    $mysql->connect();
    $query      = "SELECT f_add_newsfile('$path', '$name', '$nid', '$category', '$us_id')";
    $result     = $mysql->query($query);
    $resp       = '1';
} else {
    $resp = '0';
}
echo json_encode(array("text" => $resp));


/*path: file,
name: $('#nameToInsert').val(),
category: $('#tipoToInsert option:selected').val(),
nid: $('#nid').val(),*/
