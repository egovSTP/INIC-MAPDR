<?php
if (isset($_GET["page"]) && isset($_GET["word"])) {
    require('../backmapdr/ajax/mysql.php');
    require("../backmapdr/ajax/config.php");
    $mysql      = new mysql();
    $config     = new config();
    $quantidade = 6;
    $index      = ($_GET['page'] - 1) * $quantidade;
    $word       = $_GET["word"];
    $connection = $mysql->connect();
    $result     = $mysql->query("call p_view_news_searched('$index', '$quantidade', '$word')");
    $num        = mysqli_num_rows($result);
    if ($num > 0) {
        $i = 0;
        echo "<input id='totalNoticias' type='hidden' value='" . $num . "' />";
        echo '<div class="row gx-4 justify-content-center">';
        while ($row = mysqli_fetch_array($result)) {
            $id        = $row["id"];
            $title     = $row["title"];
            $abstract  = $config->resumeContent($row["resume"]);
            $date      = $config->formatDate($row["date"]);
            $photo     = "backmapdr/" . $row["path"];
            $categoria = $row["category"];
            echo
            '
            <div class="documents col-12">
                <div data-aos="fade-left" class="recent-single-post">
                    <div class="post-img">
                        <a href="ler-noticia.php?id=' . $id . '">
                            <img src="' . $photo . '" alt="">
                        </a>
                    </div>
                    <div class="pst-content">
                        <div class="info-p-title">
                            <p>
                                ' . $categoria . ' | ' . $date . '
                            </p>
                            <p>
                                <a href="ler-noticia.php?id=' . $id . '">
                                    ' . $title . '
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            ';
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
