<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <?php
  require("cmp/head.php");
  if (isset($_GET["word"])) {
    $word = $_GET["word"];
    echo "<input id='word' type='hidden' value='" . $word . "' />";
  } else {
    header('Location: index.php');
  }
  ?>
  <title>MAPDR | Pesquisa</title>
</head>

<body>

  <?php
  require("cmp/header.php");
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

          <!-- Start single blog -->
          <div class="col-md-8 col-sm-8 col-xs-12">
            <div class="row">
              <!-- Start single blog -->
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="single-blog-d">

                  <div class="h-noticia row gx-5">

                    <div class="col-md-6">
                      <h4 data-aos="fade-left">
                        Notícias
                      </h4>
                    </div>

                  </div>

                  <div id="noticia-data" class="row ">
                    <!-- Load news using AJAX -->
                  </div>

                  <div id="noticia-page" class="container">
                    <!-- Load pager using AJAX -->
                  </div>

                </div>

                <div class="single-blog-d">

                  <div class="h-noticia row gx-5">

                    <div class="col-md-6">
                      <h4 data-aos="fade-left">
                        Documentos
                      </h4>
                    </div>

                  </div>

                  <div id="documento-data" class="row ">
                    <!-- Load documents using AJAX -->
                  </div>

                  <div id="documento-page" class="container">
                    <!-- Load pager using AJAX -->
                  </div>

                </div>

                <div class="single-blog-d">

                  <div class="h-noticia row gx-5">

                    <div class="col-md-6">
                      <h4 data-aos="fade-left">
                        Mundo Rural
                      </h4>
                    </div>

                  </div>

                  <div id="rural-data" class="row ">
                    <!-- Load mundo rural using AJAX -->
                  </div>

                  <div id="rural-page" class="container">
                    <!-- Load pager using AJAX -->
                  </div>

                </div>
              </div>
            </div> <!-- Start single blog -->
          </div>
        </div>
        <!-- End Blog Page -->

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

  <script src="assets/js/pesquisar.js" type="text/javascript"></script>

</body>

</html>