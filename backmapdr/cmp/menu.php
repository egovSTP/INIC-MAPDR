<?php
$inicio     = "";
$conteudo   = "";
$parametro  = "";
$utilizador = "";
$pagina = basename($_SERVER['PHP_SELF']);

switch ($pagina) {
  case "inicio.php":
    $index = "active";
    break;
  case "actividade.php":
  case "direcao.php":
  case "documento.php":
  case "gabinete.php":
  case "instituicao.php":
  case "projecto.php":
  case "mundo_rural.php":
  case "organizacao.php":
    $conteudo = "active";
    break;
  case "parametro.php":
    $parametro = "active";
    break;
  case "utilizador.php":
    $utilizador = "active";
    break;
}
?>
<ul class="art-hmenu">
  <li><a href="inicio.php" class="<?php echo $inicio ?>">Início</a></li>
  <li>
    <a href="#">Contéudo</a>
    <ul>
      <li>
        <a href="actividade.php">Actividades</a>
      </li>
      <li>
        <a href="direcao.php">Direção</a>
      </li>
      <li>
        <a href="documento.php">Documentos</a>
      </li>
      <li>
        <a href="gabinete.php">Gabinetes</a>
      </li>
      <li>
        <a href="instituicao.php">Instituição</a>
      </li>
       <li>
        <a href="ministerio.php">Ministério</a>
      </li>
      <li>
        <a href="mundo_rural.php">Mundo Rural</a>
      </li>
      <li>
        <a href="organizacao.php">Organização</a>
      </li>
      <li>
        <a href="projecto.php">Projecto</a>
      </li>
    </ul>
  </li>
  <li><a href="parametros.php" class="<?php echo $parametro ?>">Parâmetros</a></li>
  <li><a href="utilizadores.php" class="<?php echo $utilizador ?>">Utilizadores</a></li>
</ul>