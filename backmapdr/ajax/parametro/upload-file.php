<?php
require_once '../../../vendor/autoload.php';

use \Gumlet\ImageResize;
use \Gumlet\ImageResizeException;

$value = 0;
$error = "";
$path  = "";
if (isset($_FILES['photo'])) {
    $target_dir = "../../upload/docs_category/";
    require "../config.php";
    $tmp_name    = $_FILES['photo']["tmp_name"];
    $name        = $_FILES['photo']["name"];
    $cfg         = new config();
    $p_index     = $cfg->index_of($name, ".");
    $new_name    = md5(date('Y-m-d H:i:s:u'));
    $ext         = substr($name, $p_index + 1, strlen($name));
    $target_file = $target_dir . $new_name . "." . $ext;
    try {
        $image = new ImageResize($tmp_name);
        $image->resize(60, 60, $allow_enlarge = true);
        if (move_uploaded_file($tmp_name, $target_file)) {
            $image->save($target_file);
            $path  = $path . '|' . str_replace(":", "$", $target_file);
            $value = 1;
        } else {
            $error = "Not copied";
        }
    } catch (ImageResizeException $e) {
        $error = $e->getMessage();
    }
} else {
    $error = "Não entrou no if!";
}
echo json_encode(array("result" => $value, "path" => $path, "error" => $error));
