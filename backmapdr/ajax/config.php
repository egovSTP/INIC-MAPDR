<?php
    class config 
	{ 
		public $quantidade_backend = 9;
		public $quantidade_backend_foto = 9;
		public $quantidade_backend_galeria = 6;
        public $quantidade_frontend = 10;
		public $quantidade_frontend_relacionada = 6;
        public $quantidade_frontend_relacionado = 4;
        public $quantidade_front_index = 3;

		function index_of(string $string, string $pattern) {
            $i = 0;
			while($i < strlen($string)) {
				if($pattern === $string[$i])
					return $i;
				$i++;
			}
			return -1;
		}
        function check_array($array, $word) {
            for($i = 0; $i < count($array); $i++)
                if($array[$i] == $word)
                    return true;
            return false;
        }
        function myaddslashes($string) { 
            return stripslashes($string);
        }   
        function sendMessage($email, $username, $password){
            $SupportEmail = "webmaster@ybytesi.com";
            $AccountPassword = "Suporte*YBytesi@2022";
            
            require_once('phpmailer/class.phpmailer.php');
            include("phpmailer/class.smtp.php"); // optional, gets called from within class.phpmailer.php if not already loaded
            
            $mail = new PHPMailer(true); // the true param means it will throw exceptions on errors, which we need to catch

            $mail->IsSMTP(); // telling the class to use SMTP
            try 
            {
                $mail->Host       = "mail.ybytesi.com";  	     // SMTP server
                //$mail->SMTPDebug  = 2;                     // enables SMTP debug information (for testing)
                $mail->SMTPAuth   = true;                    // enable SMTP authentication
                $mail->Port       = 26;                      // set the SMTP port for the GMAIL server
                $mail->Username   = $SupportEmail; // SMTP account username
                $mail->Password   = $AccountPassword;    // SMTP account password
                $mail->CharSet    = 'UTF-8';
                $mail->AddAddress($email, $username);
                $mail->SetFrom($SupportEmail, 'YByte - Suporte');
                $mail->Subject    = 'Recuperação da sua palavra passe';
                $mail->Body       = "Olá $username,<br/><br/>Aqui enviamos a sua palavra passe!<br/><br/><b>Palavra Passe: </b>$password<br/><br/>Este email é autoenviado não deve ser respondido!<br/><br/>Obrigado.";
                $mail->Send();
                $resp += 1;
                $resp = "1:".$username." a sua palavra passe será enviada em breve para o seu email!";
            } 
            catch (phpmailerException $e) 
            {
                $resp = $e->errorMessage(); //Pretty error messages from PHPMailer
                echo json_encode(array("text"=>$resp));
            } 
            catch (Exception $e) 
            {
                $resp = $e->getMessage(); //Boring error messages from anything else!
                echo json_encode(array("text"=>$resp));
            }
        }
        function encodeToUtf8($string) {
             return mb_convert_encoding($string, "UTF-8", mb_detect_encoding($string, "UTF-8, ISO-8859-1, ISO-8859-15", true));
        }
        function formatMoney($money) {
            if(floatval($money) < 1000)
                return floatval($money);
            else
            {
                $money = floatval($money);
                $quociente = (int)($money / 1000);
                $resto = (int)($money % 1000);
                return formatMoney($quociente)." ".completeFormatMoney($resto);
            }
        }
        function completeFormatMoney($money) {
            if(strlen($money) == 3)
                return $money;
            else if(strlen($money) == 2)
                return "0".$money;
            else
                return "00".$money;
        }
        function resumeTitleThumb($title){
            $tmp = "";
            $array = explode(" ", $title);
            for($i = 0; $i < count($array); $i++){
                if(strlen($tmp) > 30)
                    break;
                $tmp = $tmp." ".$array[$i];
            }
            return $tmp."...";
        }
        function resumeTitle($title){
            $tmp = "";
            $array = explode(" ", $title);
            for($i = 0; $i < count($array); $i++){
                if(strlen($tmp) > 60)
                    break;
                $tmp = $tmp." ".$array[$i];
            }
            return $tmp;
        }
        function resumeTitleSearch($title){
            $tmp = "";
            $array = explode(" ", $title);
            for($i = 0; $i < count($array); $i++){
                if(strlen($tmp) > 40)
                    break;
                $tmp = $tmp." ".$array[$i];
            }
            return $tmp."...";
        }
        function resumeTitleGaleriaRelacionado($title){
            $tmp = "";
            $array = explode(" ", $title);
            for($i = 0; $i < count($array); $i++){
                if(strlen($tmp) > 50)
                    break;
                $tmp = $tmp." ".$array[$i];
            }
            return $tmp;
        }
        function resumeTitleDocumentoRelacionado($title){
            $tmp = "";
            $array = explode(" ", $title);
            for($i = 0; $i < count($array); $i++){
                if(strlen($tmp) > 50)
                    break;
                $tmp = $tmp." ".$array[$i];
            }
            return $tmp;
        }
        function formatDate($date){
            $tmp = explode("-", $date);
            return $tmp[2]."/".$tmp[1]."/".$tmp[0];
        }
        function resumeContentOneLine($content) {
            $tmp = "";
            $array = explode(" ", $content);
            for ($i = 0; $i < count($array); $i++) {
                if (strlen($tmp) > 120)
                    break;
                $tmp = $tmp . " " . $array[$i];
            }
            return $tmp . "...";
        }
        function resumeContent($content){
            $tmp = "";
            $array = explode(" ", $content);
            for($i = 0; $i < count($array); $i++){
                if(strlen($tmp) > 90)
                    break;
                $tmp = $tmp." ".$array[$i];
            }
            return $tmp."...";
        }
        function resumeContentSlide($content){
            $tmp = "";
            $array = explode(" ", $content);
            for($i = 0; $i < count($array); $i++){
                if(strlen($tmp) > 75)
                    break;
                $tmp = $tmp." ".$array[$i];
            }
            return $tmp."...";
        }
        function resumeContentSideBar($content){
            $tmp = "";
            $array = explode(" ", $content);
            for($i = 0; $i < count($array); $i++){
                if(strlen($tmp) > 70)
                    break;
                $tmp = $tmp." ".$array[$i];
            }
            return $tmp."...";
        }
    }
