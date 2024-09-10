<?php
if (isset($_GET["s"])) {
    require('../backmapdr/ajax/mysql.php');
    require("../backmapdr/ajax/config.php");
    $mysql       = new mysql();
    $config      = new config();
    $quantidade  = 4;
    $index       = 1;
    $sector_nome = $_GET['s'];
    $mysql->connect();
    $result      = $mysql->query("call p_view_news_related_without_category('$index', '$quantidade', '$sector_nome')");
    $num         = mysqli_num_rows($result);
    if ($num > 0) {
        $i = 0;
        echo
        '<h4>
                Notícias Relacionadas
            </h4>';
        while ($row = mysqli_fetch_array($result)) {
            $id         = $row["id"];
            $title      = $row["title"];
            $resume     = $config->resumeContentSlide($row["resume"]);
            $date       = $config->formatDate($row["date"]);
            $photo      = "backmapdr/" . $row["path"];
            $categoria  = $row["category"];
            echo '
                <div data-aos="fade-up" class="recent-post-col col-md-6">
                    <div class="recent-single-post">
                    <div class="post-img">
                        <a href="ler-noticia.php?id=' . $id . '">
                        <img src="' . $photo . '" alt="">
                        </a>
                    </div>
                    <div class="pst-content">
                        <p><a href="ler-noticia.php?id=' . $id . '">' . $resume . '</a></p>
                    </div>
                    </div>

                </div>';
            $i++;
        }
    }
} else
    echo "nao entrou";
