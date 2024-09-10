<?php
if (isset($_GET["id"])) {
  $nid = $_GET["id"];
  echo "<input id='nid' value='" . $nid . "' type='hidden' />";
} else
  header('Location: noticia.php');
?>
<!DOCTYPE html>
<html lang="encargo">

<head>
  <?php
  require("cmp/head.php");
  ?>
  <title>MAPDR | Ler Notícia</title>
</head>

<body>

  <div id="fb-root"></div>
  <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_EN/sdk.js#xfbml=1&version=v12.0" nonce="YkJKg63S"></script>

  </div>

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

                  <?php
                  require('backmapdr/ajax/mysql.php');
                  require("backmapdr/ajax/config.php");
                  $mysql = new mysql();
                  $config = new config();
                  $mysql->connect();
                  $result = $mysql->query("call p_add_click('tnews', $nid)");
                  $mysql->connect();
                  $result = $mysql->query("call p_view_news_file_by_id($nid)");
                  $num = mysqli_num_rows($result);
                  if ($num > 0 && $row = mysqli_fetch_array($result)) {
                    $title   = $row["title"];
                    $content  = $row["content"];
                    $date = $config->formatDate($row["date"]);
                    $photo = $row["path_img"];
                    $paths = explode(' ', $row["path_img"]);
                    if (count($paths) === 1 && $paths[0] === "") {
                      $paths[0] = $photo;
                    } else {
                      array_unshift($paths, $photo);
                    }
                    $categoria = $row["category"];
                    echo
                    '
                        <div class="top-info">
                          <h4 data-aos="fade-left">
                            ' . $title . '
                          </h4>
                          <div data-aos="fade-left" class="botton-t">
                            <p>Categoria: ' . $categoria . ' | Data: ' . $date . '</p>
                          </div>
                        </div>
                      ';
                    echo '
                        <div class="central-info">
                          <div class="row bg-l-noticia justify-content-center">
                            <div class="row">
                              <!-- Start single blog -->
                              <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="single-blog-c">
                                  <div data-aos="fade-left" id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

                                    <ol id="hero-carousel-indicators" class="carousel-indicators"></ol>

                                    <div class="carousel-inner" role="listbox">
                                      <!-- Load featured news -->';
                    $primeira_vez = true;
                    foreach ($paths as $path) {
                      $photo =$path;
                      if ($primeira_vez) {
                        $primeira_vez = false;
                        echo '
                                            <div class="carousel-item active" style="background: url('. $photo .'); background-repeat: no-repeat; background-size: 100% 100%;">
                                              <div class="carousel-container">
                                                <div class="container">
                                                  
                                                </div>
                                              </div>
                                            </div>
                                            ';
                      } else {
                        echo '
                                            <div class="carousel-item" style="background: url('. $photo .'); background-repeat: no-repeat; background-size: 100% 100%;">
                                              <div class="carousel-container">
                                                <div class="container">
                                                </div>
                                              </div>
                                            </div>
                                            ';
                      }
                    }
                    echo '</div>

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
                          <br><br>
                          <div class="info-n" data-aos="fade-up">
                            ' . $content . '
                          </div>
                        </div>
                        <div class="row s-fb justify-content-around">
                          <div class="col-12">
                            <div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="" data-layout="button_count" data-action="like" data-size="large" data-share="true"></div>
                          </div>
                        </div>
                      ';
                  }
                  ?>

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

  <script src="assets/js/ler-noticia.js" type="text/javascript"></script>

</body>

</html>