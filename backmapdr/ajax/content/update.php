<?php
if (isset($_POST["id"]) && isset($_POST["order"]) && isset($_POST["name"]) && isset($_POST["tipo"]) && isset($_POST["resume"])) {
    $id     = $_POST["id"];
    $order  = $_POST['order'];
    $name   = $_POST['name'];
    $tipo   = $_POST['tipo'];
    $resume = $_POST['resume'];

    if ($tipo == "Foto") {
        $old_path = $_POST['old_path'];
        if ($resume != $old_path) {
            $real_path  = $_SERVER["DOCUMENT_ROOT"] . "/ma_actual/madr_portal/backmapdr/" . $old_path;
            if ($resume !== "" && file_exists($real_path) && !is_dir($real_path)) {
                unlink($real_path);
            }
            //$resume=$real_path;
        }
    }

    require('../mysql.php');
    $mysql      = new mysql();
    $mysql->connect();
    $query      = "SELECT f_upd_content('$order', '$name', '$tipo', '$resume', '$id')";
    $result     = $mysql->query($query);
    $resp = '1';
} else {
    $resp = '0';
}
echo json_encode(array("text" => $resp));
