<?php
if (isset($_GET['id']) && isset($_GET['tipo'])) {
    $id = $_GET['id'];
    $idtipo = $_GET['tipo'];
    require('ajax/mysql.php');
    $mysql      = new mysql();
    $conncetion = $mysql->connect();
    $result     = $mysql->query("CALL GetNewsFileById(" . $id . ")");
    if ($row = mysqli_fetch_array($result)) {
        $base64_string = $row["content_path"];
        if ($idtipo == "PDF") {
            echo '<embed src="' . $base64_string . '" width="100%" height="100%" type="application/pdf" />';
        }{
            echo '<center><img src="' . $base64_string . '" alt="Imagem em Base64" /></center>';
        }

        // echo"".$base64_string;
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
