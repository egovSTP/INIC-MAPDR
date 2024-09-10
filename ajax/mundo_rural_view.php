<?php
if (isset($_GET["page"])) {
    require('../backmapdr/ajax/mysql.php');
    require("../backmapdr/ajax/config.php");
    $mysql      = new mysql();
    $config     = new config();
    $quantidade = 6;
    $index      = ($_GET['page'] - 1) * $quantidade;
    $mysql->connect();
    $result     = $mysql->query("call p_view_mundorural('$index', '$quantidade')");
    $num = mysqli_num_rows($result);
    if ($num > 0) {
        $i = 0;
        $totalMissing = $num % 3;
        while ($row = mysqli_fetch_array($result)) {
            $id     = $row["id"];
            $titulo = $row["titulo"];
            $resume = $row["resume"];
            $data   = $config->formatDate($row["data"]);
            $url    = $row["url"];
            $code   = explode('/', $url);
            if (count($code) > 4) {
                $image  = "https://img.youtube.com/vi/{$code[4]}/0.jpg";
                echo "<input id='titulo" . $id . "' type='hidden' value='" . $titulo . "' />";
                echo "<input id='resume" . $id . "' type='hidden' value='" . $resume . "' />";
                echo "<input id='url" . $id . "' type='hidden' value='" . $url . "' />";
                echo
                '
                <div class="col-lg-4 col-md-12">
                    <div class="single-blog" data-aos="fade-up-left">
                        <div class="blog-meta-r">
                            <span class="date-type">
                                <i class="bi bi-calendar-check"></i>' . $data . '
                            </span>
                        </div>
                        <div class="single-blog-img">
                            <a href="javascript:openModal(' . $id . ')" class="glightbox  mb-4" data-toggle="modal" data-target="#video-play-modal" title="' . $resume . '">
                                <img src="' . $image . '" />
                            </a>
                        </div>
                        <div class="blog-meta-botton">
                            <span class="date-type">' . $titulo . '</span>
                        </div>
                    </div>
                </div>
                ';
            }
            $i++;
        }
        while ($totalMissing <= 3) {
            echo '<div class="col-lg-4 col-md-12"></div>';
            $totalMissing++;
        }
    }
}
