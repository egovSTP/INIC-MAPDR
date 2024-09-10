<?php
if (isset($_GET["page"])) {
  require('../backmapdr/ajax/mysql.php');
  require("../backmapdr/ajax/config.php");
  $mysql      = new mysql();
  $config      = new config();
  $quantidade = 3;
  $index      = ($_GET['page'] - 1) * $quantidade;
  $mysql->connect();
  $result     = $mysql->query("call p_view_last_news('$index', '$quantidade')");
  $num        = mysqli_num_rows($result);
  if ($num > 0) {
    $i = 0;
    $totalMissing = $num % 3;
    while ($row = mysqli_fetch_array($result)) {
      $id         = $row["id"];
      $title      = $row["title"];
      $resume     = $config->resumeContent($row["resume"]);
      $date       = $config->formatDate($row["date"]);
      $photo      = "backmapdr/" . $row["path"];
      $categoria  = $row["category"];
      echo
      '
        <div class="col-md-4 col-sm-4 col-xs-12 ">
          <div class="single-blog" data-aos="fade-up-right">
            <div class="single-blog-img">
              <a href="ler-noticia.php?id=' . $id . '">
                <img src="' . $photo . '" alt="">
              </a>
            </div>
            <div class="blog-meta">
              <span class="comments-type">
                ' . $categoria . '
              </span>
              <span class="date-type">
                <i class="bi bi-calendar-check"></i></i>' . $date . '
              </span>
            </div>
            <div class="blog-text-i">
              <h4>
                <a class="title-news" href="ler-noticia.php?id=' . $id . '">' . $title . '</a>
              </h4>
              <p>' . $resume . '</p>
            </div>
            <span>
              <div id="ready-btn"> <a href="ler-noticia.php?id=' . $id . '" class="ready-btn">Ler mais</a> </div>
            </span>
          </div>
          <br>
        </div>
        ';
      $i++;
    }
    while ($totalMissing <= 3) {
      echo '<div class="col-md-4 col-sm-4 col-xs-12 "></div>';
      $totalMissing++;
    }
  }
}
