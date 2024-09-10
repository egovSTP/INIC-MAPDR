<?php
// Inialize session
session_start();
if (isset($_SESSION['views'])) {
	require('mysql.php');
	$us_id 			= $_SESSION[$_SESSION['views'] . 'id'];
	$mysql 			= new mysql();
	$mysql->connect();
	$query 			= "call p_user_logout('$us_id')";
	$result 		= $mysql->query($query);
	if ($row = mysqli_fetch_array($result)) {
		$resp = 1;
	} else {
		$resp = 0;
	}
	unset($_SESSION[$_SESSION['views'] . 'id']);
	unset($_SESSION[$_SESSION['views'] . 'username']);
	unset($_SESSION[$_SESSION['views'] . 'password']);
	unset($_SESSION[$_SESSION['views'] . 'email']);
	unset($_SESSION[$_SESSION['views'] . 'access']);
	$_SESSION['views'] = $_SESSION['views'] - 1;
	$resp 						 = "1";
} else {
	$resp = "0";
}
echo json_encode(array("text" => $resp));
