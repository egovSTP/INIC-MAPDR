<?php
if (isset($_POST["id"]) && isset($_POST["nameToInsert"]) && isset($_POST["surnameToInsert"]) && isset($_POST["curriculumToInsert"]) && isset($_POST["roleToInsert"])) {
    $eid        = $_POST['id'];
    $name      = $_POST['nameToInsert'];
    $surname   = $_POST['surnameToInsert'];
    $role      = $_POST['roleToInsert'];
    $path      = $_POST['path'];
    $curriculum = $_POST['curriculumToInsert'];
    require('../mysql.php');
    $mysql  = new mysql();
    $mysql->connect();
    $query  = "SELECT f_add_member('$name', '$surname', ' $curriculum','$path','$role', '$eid')";
    $result = $mysql->query($query);
    $resp   = '1';
} else{
  $resp = '0';
}
echo json_encode(array("text" => $resp));
