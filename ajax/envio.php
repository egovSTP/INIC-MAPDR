<?php
require_once('../backmapdr/ajax/phpmailer/PHPMailer.php');
require_once('../backmapdr/ajax/phpmailer/SMTP.php');
require_once('../backmapdr/ajax/phpmailer//Exception.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
if (isset($_POST["nameToSend"]) && isset($_POST["emailToSend"]) && isset($_POST["contactToSend"]) &&  isset($_POST["subjectToSend"]) && isset($_POST["descriptionToSend"])) {
	$nameToSend        = $_POST["nameToSend"];
	$emailToSend       = $_POST["emailToSend"];
	$contactToSend     = $_POST["contactToSend"];
	$contactToSend 		 = $_POST["contactToSend"];
	$subjectToSend     = $_POST["subjectToSend"];
	$descriptionToSend = $_POST["descriptionToSend"];
	try {
		//$mail->SMTPDebug = SMTP::DEBUG_SERVER;
		$mail->isSMTP();
		$mail->Host = 'smtp.gmail.com';
		$mail->SMTPAuth = true;
		$mail->Username = 'stpmapdr2022@gmail.com';
		$mail->Password = 'MAPDR2022*9##21(sanguebom)';
		$mail->Port = 587;
		$mail->setFrom('stpmapdr2022@gmail.com');
		$mail->addAddress('stpmapdr2022@gmail.com');
		$mail->isHTML(true);
		$mail->Subject = 'Ol� sou ' . $nameToSend;
		$mail->Body = '<p>Asuunto: ' . $subjectToSend . ' <br/>  ' . $descriptionToSend . '  <br/><br/> <b>Com melhores Cumprimento  <br/><br/>  Email: ' . $emailToSend . '  <br/><br/> Telefone/Telem�vel: ' . $contactToSend . '</b>';
		if ($mail->send()) {
			$resp = 1;
			echo json_encode(array("text" => $resp));
		} else {
			$resp = 2;
			echo json_encode(array("text" => $resp));
		}
	} catch (Exception $e) {
		echo "Erro ao enviar mensagem: {$mail->ErrorInfo}";
	}
} else {
	$resp = 2;
	echo json_encode(array("text" => $resp));
}
