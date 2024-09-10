<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <?php
  require("cmp/head.php");
  ?>
  <title>MAPDR | Direções</title>

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
                <div data-aos="fade-left" class="single-blog-d">

                  <h4>
                    Direções do Ministério da Agricultura, Pescas e Desenvolvimento Rural
                  </h4>

                  <p>O Ministério de Agricultura, Pescas e Desenvolvimento Rural compreende as seguintes direções:
                  </p>

                  <div class="faq-list">
                    <ul>
                      <li class="principal">
                        <a data-bs-toggle="collapse" class="collapse" data-bs-target="#faq-list-1">
                          DIREÇÕES
                          <i class="bx bx-chevron-down icon-show"></i>
                          <i class="bx bx-chevron-up icon-close"></i>
                        </a>
                        <div id="faq-list-1" class="collapse-show" data-bs-parent=".faq-list">
                          <ul>
                            <?php
                            require("ajax/sector-direcao.php");
                            ?>
                          </ul>
                        </div>
                      </li>
                    </ul>
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

</body>

</html>