<?php
if (isset($_POST["id"]) && isset($_POST["title"]) && isset($_POST["resume"]) && isset($_POST["date"]) && isset($_POST["featured"]) && isset($_POST["path"]) && isset($_POST["old_path"]) && isset($_POST["category"])) {


    $id      = $_POST['id'];
    $title      = $_POST['title'];
    $dateToInsert     = $_POST['dateToInsert'];
    $siglaToInsert = $_POST['siglaToInsert'];
    $financingToInsert       = $_POST['financingToInsert'];
    $general_objective   = $_POST['general_objective'];
    $specific_objective  = $_POST['specific_objective'];
    $contextToInsert       = $_POST['contextToInsert'];
    $stateToInsert       = $_POST['stateToInsert'];
    $team_members  = $_POST['team_members'];
    $facebook_link      = $_POST['facebook_link'];
    $path = $_POST["path"];
    $expected_outcome = $_POST["expected_outcome"];
    $recipientToInsert = $_POST["recipientToInsert"];







    $old_path   = $_POST['old_path'];
    if ($path != $old_path) {
        $real_path = $_SERVER["DOCUMENT_ROOT"] . "/madr/backmapdr/" . $old_path;
        unlink($real_path);
    }
    require('../mysql.php');
    $mysql      = new mysql();
    $mysql->connect();
    $query      = "SELECT f_upd_news('$id','$title','$resume','$path','$category','$featured')";
    $result     = $mysql->query($query);
    $resp       = "1";
} else {
    $resp = "0";
}
echo json_encode(array("text" => $resp));
