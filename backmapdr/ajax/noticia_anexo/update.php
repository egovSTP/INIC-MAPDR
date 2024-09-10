<?php
$data = json_decode(file_get_contents('php://input'), true);
if (isset($data["id"]) && isset($data["name"]) && isset($data["file"]) && isset($data["fileName"]) && isset($data["category"])) {
    $id         = $data['id'];
    $name       = $data['name'];
    $file       = $data['file'];
	$fileName   = $data['fileName'];
    $category   = $data['category'];
	$path= $name;
    $us_id = 1;
    require('../mysql.php');
    $mysql      = new mysql();
    $mysql->connect();
    $query      = "SELECT f_upd_newsfile('$id', '$path', '$name','$file', '$us_id')";
    $result     = $mysql->query($query);
    $resp       = "1";
} else {
    $resp = "0";
}
echo json_encode(array("text" => $resp));
?>
