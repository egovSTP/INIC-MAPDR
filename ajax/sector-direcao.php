<?php
require('backmapdr/ajax/mysql.php');
$mysql  = new mysql();
$mysql->connect();
$result = $mysql->query("CALL p_view_tentity('direcao')");
while ($row = mysqli_fetch_array($result)) {
  $id    = $row["id"];
  $name  = $row["name"];
  $sigla = $row["sigla"];
  echo
  '
  <li>
      <a href="ler-sector.php?id=' . $id . '&nome=' . $name . '&sigla=' . $sigla . '">
      <i class="bx bx-chevron-right"></i>' . $name . ' (' . $sigla . ')
    </a>
  </li>
  ';
}
