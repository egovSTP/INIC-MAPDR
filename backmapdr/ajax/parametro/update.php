<?php

if (isset($_POST["pattern"])) {
    $pattern  = $_POST["pattern"];
    session_start();
    $us_id   = $_SESSION[$_SESSION['views'] . 'id'];
    include('../mysql.php');
    $mysql   = new mysql();
    $mysql->connect();
    switch ($pattern) {
        case "tdocscategory":
            $query = "SELECT f_upd_docscategory('$id', '$name', $us_id, '$path')";
            break;
        case "tstateproject":
            $query = "SELECT f_upd_stateproject('$id', '$name')";
            break;
    }
    $result = $mysql->query($query);
    $resp = 1;
    echo json_encode(array("text" => $resp));
} else {
    $url = "../../index.php";
    header("Location:" . $url); /* Redirect browser */
    exit();
}
