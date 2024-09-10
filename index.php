<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <?php
  require("cmp/head.php");
  ?>
  <title>MAPDR | Início</title>
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
                <div class="single-blog-c">

                  <div data-aos="fade-left" id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

                    <ol id="hero-carousel-indicators" class="carousel-indicators"></ol>

                    <div class="carousel-inner" role="listbox">
                      <!-- Load featured news -->
                      <?php
                      require('backmapdr/ajax/mysql.php');
                      require("backmapdr/ajax/config.php");
                      $mysql = new mysql();
                      $config = new config();
                      $mysql->connect();
                      $result = $mysql->query("call p_view_destaque_news()");
                      $num = mysqli_num_rows($result);
                      if ($num > 0) {
                        $i = 0;
                        $j = 0;
                        $primeira_vez = true;
                        while ($row = mysqli_fetch_array($result)) {
                          $id = $row["id"];
                          $title = $row["title"];
                          $resume = $config->resumeContent($row["resume"]);
                          $date = $config->formatDate($row["date"]);
                          $photo = $row["path_img"];
                          $categoria = $row["category"];
                          if ($primeira_vez) {
                            $primeira_vez = false;
                            echo '
                                    <div class="carousel-item active" style="background: linear-gradient(to right, rgba(3, 7, 5, 0.801), rgba(19, 70, 40, 0.616)), url(' . $photo . '); background-repeat: no-repeat; background-size: 100% 80%;">
                                      <div class="carousel-container">
                                        <div class="container">
                                          <h2 class="animate__animated animate__fadeInDown" style="font-family: Roboto, sans-serif;">' . $title . '</h2>
                                          <p class="animate__animated animate__fadeInUp" style="font-family: Roboto, sans-serif;">' . $resume . '</p>
                                          <a href="ler-noticia.php?id=' . $id . '" class="btn-get-started scrollto animate__animated animate__fadeInUp">Ler mais</a>
                                        </div>
                                      </div>
                                    </div>
                                    ';
                          } else {
                            echo '
                                    <div class="carousel-item" style="background: linear-gradient(to right, rgba(3, 7, 5, 0.801), rgba(19, 70, 40, 0.616)), url(' . $photo . '); background-repeat: no-repeat; background-size: 100% 80%;">
                                      <div class="carousel-container">
                                        <div class="container">
                                          <h2 class="animate__animated animate__fadeInDown" style="font-family: Roboto, sans-serif;">' . $title . '</h2>
                                          <p class="animate__animated animate__fadeInUp" style="font-family: Roboto, sans-serif;">' . $resume . '</p>
                                          <a href="ler-noticia.php?id=' . $id . '" class="btn-get-started scrollto animate__animated animate__fadeInUp" style="font-family: Roboto, sans-serif;">Ler mais</a>
                                        </div>
                                      </div>
                                    </div>
                                    ';
                          }
                          $i++;
                        }
                      }
                      ?>
                    </div>

                    <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                    </a>

                    <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                      <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div><!-- End Blog Page -->
    <br><br>
    <!-- ======= Blog Section ======= -->
    <div id="blog" class="blog-area">
      <div class="blog-inner area-padding">
        <div class="blog-overly"></div>
        <div class="container ">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="section-headline text-center">
                <h2 style="color: #023F32 !important; ">ÚLTIMAS NOTÍCIAS</h2>
              </div>
            </div>
          </div>
          <br>
          <div id="newsData" class="row">
            <!--Load news using AJAX -->
          </div>
        </div>
      </div>
    </div><!-- End Blog Section -->

    <!-- paginificação-->

    <div id="pagerData" data-aos="fade-up" class="container">
      <!-- Load pager using AJAX -->
    </div>

    <br>
    <br>
    <!-- ======= Atribuição Section ======= -->
    <div id="blog" class="blog-area">
      <div class="blog-inner area-padding">
        <div class="blog-overly"></div>
        <div class="container">
          <div class="section-title" data-aos="fade-up">
            <h2 style="color: #023F32 !important;">OPORTUNIDADES</h2>
          </div>
          <div id="jobsData" class="row">
            <!-- Load from AJAX -->
          </div>
          <br />
        </div>
      </div>
    </div>
  </main>

  <!-- ======= Footer ======= -->
  <?php
  require("cmp/footer.php");
  ?>

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <?php
  require("cmp/script.php");
  ?>

  <script src="assets/js/index.js" type="text/javascript"></script>

</body>

</html>