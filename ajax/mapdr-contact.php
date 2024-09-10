<?php
require('../backmapdr/ajax/mysql.php');
require("../backmapdr/ajax/config.php");
$mysql       = new mysql();
$config       = new config();
$connection  = $mysql->connect();
$result      = $mysql->query("call p_mapdr_contact()");
echo "<table>";
while ($row = mysqli_fetch_array($result)) {
    $key   = $row["key"];
    $value = $row["value"];
    echo
    '
    <tr><td style="color: #fff !important;"><strong>'.$key. ':</strong></td><td style="color: #fff !important;">'.$value. '</td></tr>
    ';
}
echo "</table>";