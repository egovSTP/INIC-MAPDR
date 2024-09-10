<?php
if (isset($_GET['id']) && isset($_GET['doc'])) {
    $id = $_GET['id'];
    $doc = $_GET['doc'];
    require('ajax/mysql.php');
    $mysql      = new mysql();
    $conncetion = $mysql->connect();
    if ($doc == "front") {
        $result     = $mysql->query("CALL GetDocPathById(" .$id .")");
        if ($row = mysqli_fetch_array($result)) {
            $base64_string = $row["path_doc"];
            echo '<embed src="' . $base64_string . '" width="100%" height="100%" type="application/pdf" />';
        }
    } else {
        $result     = $mysql->query("CALL GetDocPathById(".$id.")");
        if ($row = mysqli_fetch_array($result)) {
            $base64_string = $row["path_doc"];
            echo '<embed src="' . $base64_string . '" width="100%" height="100%" type="application/pdf" />';
        }
    }
    /*
    $file_name = 'document.pdf';
    $file_data = base64_decode($base64_string);
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="' . $file_name . '"');
    header('Content-Length: ' . strlen($file_data));
    echo $file_data;*/
    // Supondo que $base64_string seja a string base64 do arquivo PDF
    //$base64_string = '...'; // Sua string base64 aqui

}
