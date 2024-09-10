<?php
require('../backmapdr/ajax/mysql.php');
if (isset($_GET["p"]) && isset($_GET["pnome"])) {
    $id     = $_GET["p"];
    $pnome  = $_GET["pnome"];
    $mysql  = new mysql();
    $mysql->connect();
    $result = $mysql->query("call p_view_projec_content_by_id('$id')");
    echo '<h4 data-aos="fade-left">' . $pnome . '</h4>';
    while ($row = mysqli_fetch_array($result)) {
        $name    = $row["name"];
        $content = $row["content"];
        $type    = $row["type"];
        if ($type == "Foto") {
            $path = "backmapdr/" . $content;
            if ($name == 'Logo') {
                echo
                '<div data-aos="fade-left" class="row p-logo justify-content-center">
                    <div class="col-12">
                        <div class="p-logo">
                            <center>
                                <img class="img-fluid" src="' . $path . '" alt="" width="210px" height="210px">
                            </center>
                        </div>
                    </div>
                </div>';
            } else {

                echo
                '<div data-aos="fade-left" class="row p-logo justify-content-center">
                    <h3 style="color: #023F32 !important;">' . $name . '</h3>
                    <div class="col-12">
                        <div class="p-logo">
                            <center>
                                <img class="img-fluid" src="' . $path . '" alt="">
                            </center>
                        </div>
                    </div>
                </div>';
            }
        } else {
            echo
            '
            <div data-aos="fade-up">
                <h3 style="color: #023F32 !important;">' . $name . '</h3>
                <div>' . $content . '</div>
                <br>
            </div>
            ';
        }
    }
}
