<?php
$data = json_decode(file_get_contents('php://input'), true);
if (isset($data["file"]) && isset($data["name"])  && isset($data["category"]) && isset($data["nid"]) && isset($data["fileName"])) {
    $file       = $data['file'];
    $name       = $data['name'];
    $category   = $data["category"];
    $nid        = $data['nid'];
	$fileName        = $data['fileName'];
	$path= $name;
   // session_start();
  // $us_id      = $_SESSION[$_SESSION['views'] . 'id'];
   $us_id = 1;
    require('../mysql.php');
    $mysql      = new mysql();
    $mysql->connect();
    $query      = "SELECT f_add_newsfile('$path', '$name', '$nid', '$category', '$us_id','$file')";
    $result     = $mysql->query($query);
    $resp       = '1';
} else {
    $resp = '0';
}
echo json_encode(array("text" =>$resp));
?>