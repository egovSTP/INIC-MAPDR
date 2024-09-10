<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <?php
  require("cmp/head.php");
  if (isset($_GET["id"]) && isset($_GET["name"])) {
    $id   = $_GET["id"];
    $name = $_GET["name"];
    echo "<input id='id' type='hidden' value='" . $id . "' />";
    echo "<input id='name' type='hidden' value='" . $name . "' />";
  } else {
    header('Location: documento.php');
  }
  ?>
  <title>MAPDR | Documentos <?php echo $_GET["name"] ?></title>
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
                <div class="single-blog-d">

                  <div class="h-noticia row gx-5">

                    <div class="col-md-6">
                      <h4 data-aos="fade-left">
                        Documentos <?php echo $_GET["name"] ?>
                      </h4>
                    </div>

                  </div>

                  <div id="documento-data" class="row ">

                    <!-- Load documents using AJAX -->

                  </div>




                  <!-- paginificação-->

                  <div id="documento-pager" class="container">
                    <!-- Load pager using AJAX -->
                  </div>


                </div>
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

  <script src="assets/js/ler-documento.js" type="text/javascript"></script>

</body>

</html>