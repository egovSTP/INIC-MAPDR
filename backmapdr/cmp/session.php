<?php
// Inialize session
session_start();
// Check
if (!isset($_SESSION) || count($_SESSION) === 0 || $_SESSION['views'] == 0) {
  header('Location: index.php');
} else {
  $u_id_logged = $_SESSION[$_SESSION['views'] . 'id'];
  $u_username_logged = $_SESSION[$_SESSION['views'] . 'username'];
  $u_password_logged = $_SESSION[$_SESSION['views'] . 'password'];
  $u_email_logged = $_SESSION[$_SESSION['views'] . 'email'];
  $u_access_logged = $_SESSION[$_SESSION['views'] . 'access'];

  echo "<input id='us_id_logged' type='hidden' value='" . $u_id_logged . "' />";
  echo "<input id='us_username_logged' type='hidden' value='" . $u_username_logged . "' />";
  echo "<input id='us_password_logged' type='hidden' value='" . $u_password_logged . "' />";
  echo "<input id='us_email_logged' type='hidden' value='" . $u_email_logged . "' />";
  echo "<input id='us_access_logged' type='hidden' value='" . $u_access_logged . "' />";
}
