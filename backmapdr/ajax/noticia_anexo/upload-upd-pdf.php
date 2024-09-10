<?php
$return_value = 0;
if (isset($_FILES['photo'])) {
	$target_dir = "../../upload/news/doc/";
	require "../config.php";
	$resp        = '';
	$tmp_name    = $_FILES['photo']["tmp_name"][0];
	$name        = $_FILES['photo']["name"][0];
	$cfg         = new config();
	$p_index     = $cfg->index_of($name, ".");
	$new_name    = md5(date('Y-m-d H:i:s:u'));
	$ext         = substr($name, $p_index + 1, strlen($name));
	$target_file = $target_dir . $new_name . "." . $ext;
	if (move_uploaded_file($tmp_name, $target_file)) {
		/* $handle  = fopen($target_file, "r");
		$content = fread($handle, 4);
		fclose($handle);
		if ($content == "%PDF") {
			$resp = $target_file;
		} else {
			$real_path = $_SERVER["DOCUMENT_ROOT"] . "/backmapdr/upload/news/docs/" . $new_name . "." . $ext;
			unlink($real_path);
		} */
		$resp = $target_file;
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
