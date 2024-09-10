<?php
$return_value = 0;
if (isset($_FILES['photo'])) {
	$target_dir = "../../upload/docs/";
	require "../config.php";
	$total_files = sizeof($_FILES['photo']['name']);
	$resp        = '';
	$tmp_name    = $_FILES['photo']["tmp_name"];
	$name        = $_FILES['photo']["name"];
	$cfg         = new config();
	$p_index     = $cfg->index_of($name, ".");
	$new_name    = md5(date('Y-m-d H:i:s:u'));
	$ext         = substr($name, $p_index + 1, strlen($name));
	$target_file = $target_dir . $new_name . "." . $ext;
	if (move_uploaded_file($tmp_name, $target_file)) {
		$handle  = fopen($target_file, "r");
		$content = fread($handle, 4);
		fclose($handle);
		if ($content == "%PDF") {
			$resp = $resp . '|' . str_replace(":", "$", $target_file);
		} else {
			$real_path = $_SERVER["DOCUMENT_ROOT"] . "/madr/backmapdr/upload/docs/" . $new_name . "." . $ext;
			unlink($real_path);
		}
		$return_value = "y";
	} else {
		$resp = 'Falha f: ' . $name;
		$return_value = "n";
	}
} else {
	$return_value = "n";
	$resp = 'Não entrou no if!';
}
echo json_encode(array($return_value => $resp));
