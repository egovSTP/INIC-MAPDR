<?php
if (isset($_POST["title"]) && isset($_POST["siglaToInsert"]) && isset($_POST["dateToInsert"]) && isset($_POST["financingToInsert"]) && isset($_POST["general_objective"]) && isset($_POST["specific_objective"]) && isset($_POST["contextToInsert"]) && isset($_POST["path"])) {
    $title      = $_POST['title'];
    $dateToInsert     = $_POST['dateToInsert'];
    $siglaToInsert= $_POST['siglaToInsert'];
    $financingToInsert       =$_POST['financingToInsert'];
    $general_objective   = $_POST['general_objective'];
    $specific_objective  = $_POST['specific_objective'];
    $contextToInsert       = $_POST['contextToInsert'];
    $stateToInsert       = $_POST['stateToInsert'];
    $team_members  = $_POST['team_members'];
    $facebook_link      = $_POST['facebook_link'];
    $path=$_POST["path"];
    $expected_outcome=$_POST["expected_outcome"];
    $recipientToInsert=$_POST["recipientToInsert"];
    require('../mysql.php');
    $mysql      = new mysql();
    $mysql->connect();
      $query      = "SELECT f_add_project('$title', '$dateToInsert', ' $path', '$stateToInsert', '$contextToInsert', '$financingToInsert', '$general_objective', '$specific_objective', '$expected_outcome', '$team_members', '$facebook_link', '','$siglaToInsert','$recipientToInsert')";
    $result     = $mysql->query($query);
    $resp       = '1';
 }else{
    $resp       = '0';
    }
echo json_encode(array("text" => $resp));
