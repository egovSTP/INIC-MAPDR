<?php
if (isset($_GET["page"])) {
  require('../backmapdr/ajax/mysql.php');
  require("../backmapdr/ajax/config.php");
  $mysql       = new mysql();
  $config      = new config();
  $quantidade  = 6;
  $index       = ($_GET['page'] - 1) * $quantidade;
  $connection  = $mysql->connect();
  $result      = $mysql->query("call p_view_project('$index', '$quantidade')");
  $num         = mysqli_num_rows($result);
  if ($num > 0) {
    $i = 0;
    while ($row = mysqli_fetch_array($result)) {
      $id         = $row["id"];
      $sigla     = $row["sigla"];
      $resume     = $config->resumeContent($row["resume"]);
      $date       = $config->formatDate($row["date"]);
      $photo      = "backmapdr/" . $row["path"];

      echo
      '
            <div class="project col-12">
                      <div data-aos="fade-left" class="recent-single-post">
                        <div class="post-img">
                          <a href="ler-projeto.php?p=' . $id . '">
                            <img src="' . $photo . '" alt="" width="210px" height="210px">
                          </a>
                        </div>
                        <div class="pst-content">
                          <div class="info-p-title">
                            <p>
                              <a href="ler-projeto.php?p=pafae">' . $sigla . '</a>
                            </p>
                          </div>
                          <div class="info-p-detail">
                            <p>
                              <a href="ler-projeto.php?p=' . $id . '">' . $resume . '</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
            ';
      $i++;
    }
    echo "</div>";
  }
}
