<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <?php
  require("cmp/head.php");
  ?>
  <title>MAPDR | Mundo/Rural</title>
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
                  <h4>Acesso Rápido</h4>
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
                <div data-aos="fade-left" class="single-blog-d">
                  <div class="m-rural">
                    <div class="container">

                      <div class="row ">

                        <div class="mr-bg col-12">
                          <center> <img src="assets/img/mundoR-bg.png" alt=""></center>
                        </div>

                      </div>
                    </div>

                    <div class="container">
                      <div id="mundoRuralData" class="row gx-4 ">
                        <!-- Mundo Rural Data using AJAX -->
                      </div>
                    </div>

                    <!-- paginificação-->

                    <div class="container">
                      <div class="blog-pagination">
                        <ul id="mundoRuralPager" class="pagination">
                          <!-- Mundo Rural Pager using AJAX -->
                        </ul>
                      </div>
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

  <script src="assets/js/mundo-rural.js" type="text/javascript"></script>

</body>

</html>