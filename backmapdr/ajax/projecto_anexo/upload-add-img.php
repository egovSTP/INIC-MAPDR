<?php
require_once '../../../vendor/autoload.php';

use \Gumlet\ImageResize;
use \Gumlet\ImageResizeException;

$return_value = 0;
$resp         = "";
if (isset($_FILES['teamphoto'])) {
	$target_dir = "../../upload/projecto/";
	require "../config.php";
	$tmp_name    = $_FILES['teamphoto']["tmp_name"];
	$name        = $_FILES['teamphoto']["name"];
	$cfg         = new config();
	$p_index     = $cfg->index_of($name, ".");
	$new_name    = md5(date('Y-m-d H:i:s:u'));
	$ext         = substr($name, $p_index + 1, strlen($name));
	$target_file = $target_dir . $new_name . "." . $ext;
	try {
		$image = new ImageResize($tmp_name);
		$image->resize(835, 525, $allow_enlarge = true);
		if (move_uploaded_file($tmp_name, $target_file)) {
			$image->save($target_file);
			$resp = $resp . '|' . str_replace(":", "$", $target_file);
			$return_value = "y";
		} else {
			$return_value = "n";
			$resp = "Not copied";
		}
	} catch (ImageResizeException $e) {
		$return_value = "n";
		$resp = $e->getMessage();
	}
} else {
	$return_value = "n";
	$resp = 'Não entrou no if!';
}
echo json_encode(array($return_value => $resp));
