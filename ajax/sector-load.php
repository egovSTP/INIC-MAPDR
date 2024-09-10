<?php
require('../backmapdr/ajax/mysql.php');
$title = "";
$mysql   = new mysql();
if (isset($_GET["s"]) && isset($_GET["nome"]) && isset($_GET["sigla"])) {
  $s     = $_GET["s"];
  $nome  = $_GET["nome"];
  $title = $_GET["sigla"];
  echo 
      '
      <h4 data-aos="fade-left">
        ' . $nome . '
      </h4>
      ';
  $mysql->connect();
  $result = $mysql->query("CALL p_view_ler_sector(" . $s . ")");
  $num    = mysqli_num_rows($result);
  if ($num > 0) {
    $i = 0;
    while ($row = mysqli_fetch_array($result)) {
      $type = $row["type"];
      echo 
      '<h5 style="color: #023F32 !important;" data-aos="fade-left">
      ' . $row["name"] . '
      </h5>';
      switch ($type) {
        case 'Foto':
          echo
          '<p> <img src=backmapdr/' . $row["content"] . ' width=800 ></p>';
          break;
        case 'Texto':
          echo
          '<p>' . $row["content"] . '</p>';
          break;
        case 'Video':
          echo
          '<p>' . $row["content"] . '</p>';
          break;
      }

      $i++;
    }
  } else {
    // echo "No entrou";
  }


  $mysql_y  = new mysql();
  $mysql_y->connect();
  $result_m = $mysql_y->query("CALL p_view_member(" . $s . ")");
  $num_m    = mysqli_num_rows($result_m);
  if ($num_m > 0) {
    echo '<h5 style="color: #023F32 !important;" data-aos="fade-left">Lista dos Membros</h5>';
    echo '<div class="member-list">';
    $i = 0;
    while ($row = mysqli_fetch_array($result_m)) {
      $id = $row["id"];
      echo
      '
      <span class="btn-sector">
        <a href="ler-tutela.php?t=' . $id . '&sigla=' . $title . '" class="ready-btn">' . $row["fullname"] . '</a>
      </span>
      ';
      $i++;
    }
    echo '</div>';
  } else {
    // echo "No entrou";
  }
}
