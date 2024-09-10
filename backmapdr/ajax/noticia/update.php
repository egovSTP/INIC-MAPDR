<?php
$data = json_decode(file_get_contents('php://input'), true);
if (isset($data["id"]) && isset($data["title"]) && isset($data["resume"]) && isset($data["date"]) && isset($data["category"]) && isset($data["featured"]) && isset($data["path"]) && isset($data["content"])) {
  $id    = $data['id'];
  $title    = $data['title'];
  $resume   = $data['resume'];
  $date     = $data['date'];
  $category = $data['category'];
  $featured = $data['featured'];
  $content  = $data['content'];
  $path_img64     = $data['path'];
  $path     = "img/jpg";
   // session_start();
   //$us_id = $_SESSION[$_SESSION['views'] . 'id'];
  $us_id = 1;
  require('../mysql.php');
  $mysql      = new mysql();
  $mysql->connect();
  $query      = "SELECT f_upd_news('$id','$title', '$content','$resume', '$date', '$path', '$category', '$featured','$path_img64')";
  $result     = $mysql->query($query);
  $resp       = '1';
} else {
  $resp = '0';
}
echo json_encode(array("text" => $resp));
