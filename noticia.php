<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <?php
  require("cmp/head.php");
  ?>
  <title>MAPDR | Notícia</title>
</head>

<body>

  <?php
  require("cmp/header.php");
  if (isset($_GET["cid"])) {
    $cid = $_GET["cid"];
    echo "<input id='cid' type='hidden' value='" . $cid . "' />";
  } else {
    echo "<input id='cid' type='hidden' value='-1' />";
  }
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

              <div data-aos="fade-right" class="single-blog-page">
                <!-- recent start -->
                <div class="left-blog-more">
                  <div class="transparent-bg">
                    <h4>Mais Lidas</h4>
                  </div>
                  <div id="mostViewNews" class="recent-post">
                    <!-- Load most read news -->
                  </div>
                </div>
                <!-- recent end -->
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
                        Notícias
                      </h4>
                    </div>

                    <div data-aos="fade-left" id="dropdown-left" class="col-md-6">

                      <div id="categoriaData" class="dropdown">
                        <!-- Categoria filtros using AJAX -->
                      </div>
                    </div>

                  </div>



                  <div class="container">
                    <div id="noticiaData" class="row gx-4 justify-content-center">

                      <!-- Load news using AJAX -->

                    </div>
                  </div>



                  <!-- paginificação-->

                  <div id="pagerData" class="container">
                    <!-- Load pager using AJAX -->
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

  <script src="assets/js/noticia.js" type="text/javascript"></script>

</body>

</html>