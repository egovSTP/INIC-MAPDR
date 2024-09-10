<?php

require('../backmapdr/ajax/mysql.php');
$mysql  = new mysql();
$mysql->connect();
$result = $mysql->query("SELECT * FROM tentity e  WHERE e.type='organizacao';");
$num    = mysqli_num_rows($result);
if ($num > 0) {
  while ($row = mysqli_fetch_array($result)) {
    $id       = $row["id"];
    $nome     = $row["name"];
    $sigla    = $row["sigla"];
    $mysql_p  = new mysql();
    $mysql_p->connect();
    $result_p = $mysql_p->query("CALL p_view_organization_content('$id')");

    while ($row_p = mysqli_fetch_array($result_p)) {
      $type    = $row_p["type"];
      $name    = $row_p["name"];
      $content = $row_p["content"];
      echo
      '
      <div class="project col-12">
        <div data-aos="fade-left" class="recent-single-post">
      ';
      if ($type == "Foto") {
        echo '<div class="post-img">
        <a href="ler-organizacao.php?p=' . $id . '&nome=' . $nome . '&sigla=' . $sigla . '">
          <img src="backmapdr/' . $content . '" alt="" width="210px" height="210px">
        </a>';
      } else {
        echo '<div class="post-img">
        <a href="ler-organizacao.php?p=' . $id . '&nome=' . $nome . '&sigla=' . $sigla . '">
          <img src="assets/img/brazao.png" alt="" width="210px" height="210px">
        </a>';
      }
      echo '
        </div><div class="pst-content">
          <div class="info-p-title">
            <p>
              <a href="ler-organizacao.php?p=' . $id . '&nome=' . $nome . '&sigla=' . $sigla . '">' . $sigla . '</a>
            </p>
            <p>
              <a href="ler-organizacao.php?p=' . $id . '&nome=' . $nome . '&sigla=' . $sigla . '">' . $nome . '</a>
            </p>
          </div>
        </div>
      </div>
    </div>';
    }
  }
}
