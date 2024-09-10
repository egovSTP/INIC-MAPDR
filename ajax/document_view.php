<?php
if (isset($_GET["page"]) && isset($_GET["tdoc_category_id"])) {
    require('../backmapdr/ajax/mysql.php');
    require("../backmapdr/ajax/config.php");
    $config      = new config();
    $mysql       = new mysql();
    $quantidade  = 6;
    $index       = ($_GET['page'] - 1) * $quantidade;
    $category_id = $_GET["tdoc_category_id"];
    $mysql->connect();
    $result      = $mysql->query("call p_view_docs_with_att('$index', '$quantidade', '$category_id')");
    $num         = mysqli_num_rows($result);
    if ($num > 0) {
        $i = 0;
        while ($row = mysqli_fetch_array($result)) {
            $id        = $row["id"];
            $id_att        = $row["id_att"];
            $title     = $row["title"];
            $abstract  = $config->resumeContentOneLine($row["abstract"]);
            $date      = $row["date"];
            $categoria = $row["category"];
            $path      = "backmapdr/" . $row["path"];
            echo
            '<div class="documents col-12">
                <div data-aos="fade-left" class="recent-single-post">
                    <div class="post-img">
                        <a href="backmapdr/abrir_doc.php?id='.$id_att.'&doc=front" target="_blank">
                            <img src="assets/img/Doc.png" alt="">
                        </a>
                    </div>
                    <div class="pst-content">
                        <div class="info-p-title">
                            <p>
                                ' . $categoria . ' | ' . $date . '
                            </p>
                            <p>
                                <a href="backmapdr/abrir_doc.php?id='.$id_att.'&doc=front" target="_blank">
                                    ' . $title . '
                                </a>
                            </p>
                        </div>

                        <div class="info-p-detail">
                            <p>
                                <a href="' . $path . '" target="_blank">' . $abstract . '</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>';
            $i++;
        }
    }
}
