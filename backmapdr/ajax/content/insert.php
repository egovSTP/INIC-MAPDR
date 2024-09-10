<?php
$resp = '1';
if (isset($_POST["eid"]) && isset($_POST["ordeToInsert"]) && isset($_POST["nameToInsert"]) && isset($_POST["tipo"]) && isset($_POST["resume"])) {

    $id = $_POST["eid"];
    $ordeToInsert     = $_POST['ordeToInsert'];
    $nameToInsert     = $_POST['nameToInsert'];
    $tipo       = $_POST['tipo'];
    $resume       = $_POST['resume'];


    require('../mysql.php');
    $mysql      = new mysql();
    $mysql->connect();
    if ($resume == null || $resume == "") {
        $resp = '0';
    } else {
        $query      = "SELECT f_add_tcontent('$ordeToInsert', '$nameToInsert', '$tipo','$resume','$id')";
        $result     = $mysql->query($query);
        $resp = '1';
    }
} else {
    $resp = '0';
}
echo json_encode(array("text" => $resp));
