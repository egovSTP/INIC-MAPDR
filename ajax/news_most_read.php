<?php
require('../backmapdr/ajax/mysql.php');
require("../backmapdr/ajax/config.php");
$config     = new config();
$mysql      = new mysql();
$mysql->connect();
$result     = $mysql->query("call p_view_news_all_click('0', '5')");
$num        = mysqli_num_rows($result);
if ($num > 0) {
    $i = 0;
    while ($row = mysqli_fetch_array($result)) {
        $id         = $row["id"];
        $title      = $row["title"];
        $photo      = $row["path_img"];
        echo
        '
            <div data-aos="fade-up" class="recent-single-post">
                <div class="post-img">
                    <a href="ler-noticia.php?id=' . $id . '">
                        <img src="' . $photo . '" alt="">
                    </a>
                </div>
                <div class="pst-content">
                    <p><a href="ler-noticia.php?id=' . $id . '">' . $title . '</a></p>
                </div>
            </div>
            ';
        $i++;
    }
}
