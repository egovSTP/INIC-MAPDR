<?php
require('../backmapdr/ajax/mysql.php');
if (isset($_GET["t"])) {
  $mysql  = new mysql();
  $tid    = $_GET["t"];
  $mysql->connect();
  $result = $mysql->query("CALL p_view_tutela(" . $tid . ")");
  $num    = mysqli_num_rows($result);
  if ($num > 0) {
    while ($row = mysqli_fetch_array($result)) {
      $entidade   = $row["entidade"];
      $name       = $row["name"];
      $surname    = $row["surname"];
      $curriculum = $row["curriculum"];
      $foto       = "backmapdr/" . $row["foto"];
      $role       = $row["role"];
      echo '
        <div class="single-blog-d">
          <h4 data-aos="fade-left">
            ' . $entidade . '
          </h4>
          <!-- Project One -->
          <div data-aos="fade-left" class="brasao-info">
            <div class="row">
              <div class="img-brasao col-md-5">
                <img class="img-fluid rounded mb-3 mb-md-0" src="' . $foto . '" alt="Tutela" style="margin-left: 15%; width: 250px; height: 250px;">
              </div>
              <div class="info col-md-7">
                <div class="title-underline">
                  <h3>Quem Sou!</h3>
                </div>
                <p>
                <div class="info-detail">
                  <strong>Nome:</strong> <br> ' . $name . '
                </div>
                <div class="info-detail">
                  <strong>Apelido:</strong> <br> ' . $surname . '
                </div>
                <div class="info-detail">
                  <strong>Formação:</strong> <br> ' . $role . '
                </div>
                </p>
              </div>
            </div>
          </div>
          <!-- /.row -->
          <div data-aos="fade-up" class="info-b-space">
            <h3 style="color: #023F32 !important;" data-aos="fade-left">Biografia</h3>
            ' . $curriculum . '
          </div>
        </div>';
    }
  }
}
