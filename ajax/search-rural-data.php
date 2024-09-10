<?php
if (isset($_GET["page"]) && isset($_GET["word"])) {
    require('../backmapdr/ajax/mysql.php');
    require("../backmapdr/ajax/config.php");
    $mysql      = new mysql();
    $config      = new config();
    $quantidade = 6;
    $index      = ($_GET['page'] - 1) * $quantidade;
    $word       = $_GET["word"];
    $connection = $mysql->connect();
    $result     = $mysql->query("call p_view_mundorural_searched('$index', '$quantidade', '$word')");
    $num        = mysqli_num_rows($result);
    if ($num > 0) {
        echo "<input id='totalRural' type='hidden' value='" . $num . "' />";
        $i = 0;
        echo '<div class="row gx-4 justify-content-center">';
        while ($row = mysqli_fetch_array($result)) {
            $id     = $row["id"];
            $titulo = $row["titulo"];
            $resume = $config->resumeContent($row["resume"]);
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
                <div class="documents col-12">
                    <div data-aos="fade-left" class="recent-single-post">
                        <div class="post-img">
                            <a href="javascript:openModal(' . $id . ')">
                                <img src="' . $image . '" alt="' . $titulo . '" />
                            </a>
                        </div>
                        <div class="pst-content">
                            <div class="info-p-title">
                                <span class="date-type">
                                    <i class="bi bi-calendar-check"></i>' . $data . '
                                </span>
                            </div>

                            <div class="info-p-detail">
                                <p>
                                    <a href="javascript:openModal(' . $id . ')">' . $resume . '</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                ';
            }
            $i++;
        }
        echo "</div>";
    } else {
        echo
        '
        <div class="row gx-4 justify-content-center">
            <p>Sem resultados!</p>
        </div>
        ';
    }
}
