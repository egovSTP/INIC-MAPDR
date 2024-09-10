<?php
if (isset($_POST["id"]) && isset($_POST["nameToUpdate"]) && isset($_POST["surnameToUpdate"])&& isset($_POST["roleToUpdate"]) && isset($_POST["curriculumToUpdate"])) {
  $eid        = $_POST['id'];
  $name       = $_POST['nameToUpdate'];
  $surname    = $_POST['surnameToUpdate'];
  $curriculum = $_POST['curriculumToUpdate'];
  $role       = $_POST['roleToUpdate'];
  $path       = $_POST['path'];
  $old_path   = $_POST['old_path'];
  if ($path != $old_path) {
    $real_path  = $_SERVER["DOCUMENT_ROOT"] . "/ma_actual/madr_portal/backmapdr/" .$old_path;
    if ($path !== "" && file_exists($real_path) && !is_dir($real_path)) {
      unlink($real_path);
    }
  }
  require('../mysql.php');
  $mysql      = new mysql();
  $mysql->connect();
  $query      = "SELECT f_upd_member('$name', '$surname', '$curriculum','$role', '$path', '$eid')";
  $result     = $mysql->query($query);
  $resp       = '1';
} else {
  $resp = '0';
}
echo json_encode(array("text" => $resp));
