<?php
require('../backmapdr/ajax/mysql.php');
require("../backmapdr/ajax/config.php");
$mysql       = new mysql();
$config       = new config();
$connection  = $mysql->connect();
$result      = $mysql->query("call p_mapdr_location()");
if ($row = mysqli_fetch_array($result)) {
    $content = $row["content"];
    echo
    '
    <h4>Localização</h4>
    '.$content.'
    ';
}