<?php
require('../backmapdr/ajax/mysql.php');
require("../backmapdr/ajax/config.php");
$mysql       = new mysql();
$config       = new config();
$connection  = $mysql->connect();
$result      = $mysql->query("call p_mapdr_link()");
echo '<h4>Links úteis</h4>';
while ($row = mysqli_fetch_array($result)) {
    $value = explode("|", $row["value"]);
    echo
    '
    <p>
        <i class="bx bx-chevron-right"></i> 
        <a href="' . $value[1] . '" target="_blank">' . $value[0] . '</a>
    </p>
    ';
}