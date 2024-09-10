<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <?php
  require("cmp/head.php");
  ?>
  <?php
  if (isset($_GET["id"]) && isset($_GET["nome"]) && isset($_GET["sigla"])) {
    $id = $_GET["id"];
    $nome = $_GET["nome"];
    $sigla = $_GET["sigla"];
    echo "<input id='s' value='" . $id . "' type='hidden' />";
    echo "<input id='title' value='" . $sigla . "' type='hidden' />";
    echo "<title>MAPDR | " . $nome . "</title>";
    echo "<input id='t' value='" . $nome . "' type='hidden' />";
  } else {
    header('Location: sector.php');
  }
  ?>
</head>

<body>

  <?php
  require("cmp/header.php")
  ?>

  <main id="main">

    <br>
    <!-- ======= Blog Page ======= -->
    <div class="blog-page area-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4">
            <div class="page-head-blog">
              <div class="single-blog-page">
                <div data-aos="fade-right" class="left-blog">
                  <?php
                  require("cmp/menu.php");
                  ?>
                </div>
              </div>
            </div>
          </div>
          <!-- End left sidebar -->
          <!-- Start single blog -->
          <div class="col-md-8 col-sm-8 col-xs-12">
            <div class="row">
              <!-- Start single blog -->
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div id="sectorData" class="single-blog-d">
                  <!-- Load data using AJAX -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><!-- End Blog Page -->
      <br>
  </main>

  <!-- ======= Footer ======= -->
  <?php
  require("cmp/footer.php");
  ?>

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <?php
  require("cmp/script.php");
  ?>

  <script src="assets/js/ler-sector.js" type="text/javascript"></script>

</body>

</html>