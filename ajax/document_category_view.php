<?php

require('../backmapdr/ajax/mysql.php');
require("../backmapdr/ajax/config.php");
$mysql      = new mysql();
$config     = new config();
$connection = $mysql->connect();
$result     = $mysql->query("call p_view_category('tdocscategory')");
$num        = mysqli_num_rows($result);
if ($num > 0) {
    $i = 1;
    $totalMissing = $num % 2;
    while ($row = mysqli_fetch_array($result)) {
        $id   = $row["id"];
        $name = $row["name"];
        $icon = "backmapdr/" . $row["path"];
        echo
        '
            <div class="col-md-6">
                <div class="single-blog" data-aos="fade-up">
                    <br />
                    <div class="document-icon">
                        <a href="ler-documento.php?id=' . $id . '&name=' . $name . '">
                            <img src="' . $icon . '" alt="">
                        </a>
                    </div>
                    <div class="blog-meta">
                        <span class="comments-type">
                            ' . $name . '
                        </span>
                    </div>
                    <span>
                        <div id="ready-btn"> <a href="ler-documento.php?id=' . $id . '&name=' . $name . '" class="ready-btn">Consulte</a> </div>
                    </span>
                </div>
                </div>
            ';
        $i++;
    }
    while ($totalMissing <= 2) {
        echo
        '<div class="col-md-6"></div>';
        $totalMissing++;
    }
    echo "</div>";
}
