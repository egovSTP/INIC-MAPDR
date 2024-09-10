<?php

/**
 * Created by PhpStorm.
 * User: bruno
 * Date: 15-03-2017
 * Time: 15:49
 */
if (isset($_POST["path"]) && isset($_POST["name"]) && isset($_POST["pattern"])) {
    $path    = $_POST["path"];
    $pattern = $_POST["pattern"];
    $name    = $_POST["name"];
    session_start();
    $us_id   = $_SESSION[$_SESSION['views'] . 'id'];
    require('../mysql.php');
    $mysql   = new mysql();
    $mysql->connect();
    switch ($pattern) {
        case "tdocscategory":
            $query = "Select f_add_docscategory('$name', '$us_id', '$path')";
            break;
        case "tnewscategory":
            $query = "Select f_add_newscategory('$name', '$us_id')";
            break;
    }
    $result = $mysql->query($query);
    $resp = '1';
    echo json_encode(array("text" => $resp));
} else {
    $url = "../../principal.php";
    header("Location:" . $url); /* Redirect browser */
    exit();
}
