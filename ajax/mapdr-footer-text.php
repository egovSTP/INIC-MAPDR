<?php
require('../backmapdr/ajax/mysql.php');
require("../backmapdr/ajax/config.php");
$mysql       = new mysql();
$config       = new config();
$connection  = $mysql->connect();
$result      = $mysql->query("call p_mapdr_footer_text()");
echo
'
<a class="" href="index.php">
  <img alt="" class="img-fluid" src="assets/img/logo-941384194.png">
</a>
<hr>
';
while ($row = mysqli_fetch_array($result)) {
    $content = $row["content"];
    echo $content;
}