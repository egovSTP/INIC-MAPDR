<?php
$index      = "";
$mapdr       = "";
$acha       = "";
$projecto   = "";
$mundo      = "";
$noticia    = "";
$documento  = "";
$biblioteca = "";
$pagina = basename($_SERVER['PHP_SELF']);
switch ($pagina) {
  case "index.php":
    $index = "ative";
    break;
  case "mapdr.php":
  case "sector.php":
  case "ler-tutela.php":
  case "ler-sector.php":
  case "sector-tutela.php":
  case "sector-gabinete.php":
  case "sector-direcao.php":
  case "sector-instituicao.php":
    $mapdr = "ative";
    break;
  case "noticia.php":
  case "ler-noticia.php":
    $noticia = "ative";
    break;
  case "organizacao.php":
  case "ler-organizacao.php":
    $organizacao = "ative";
    break;
  case "projeto.php":
  case "ler-projeto.php":
    $projecto = "ative";
    break;
    /* case "estatistica.php":
    $estatistica = "ative";
    break; */
  case "mundo-rural.php":
    $mundo = "ative";
    break;
  case "mundo-rural.php":
    $mundo = "ative";
    break;

  case "documento.php":
  case "ler-documento.php":
    $documento = "ative";
    break;
}
?>
<ul>
  <li class='<?php echo $index; ?> li-principal'>
    <a href="index.php"> <img alt="" class="img-fluid" src="assets/img/images/seta1620b.png">
      Início</a>
  </li>
  <li id="li-collapse">
    <div class="panel panel-default">
      <div class="panel-heading" role="tab" id="headingOne">
        <a href="mapdr.php" class="<?php echo $mapdr; ?>" role=" button" data-toggle="collapse" data-parent="#accordion" aria-expanded="true" aria-controls="collapseOne">
          <img alt="" class="img-fluid" src="assets/img/images/seta1620b.png">
          Ministério
        </a>
      </div>
      <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
        <div class="panel-body">
          <ul id="ul-collapse">
            <li class="li-c-2 <?php echo $mapdr; ?>">
              <a href="sector-gabinete.php">
                <img alt="" class="img-fluid" src="assets/img/images/seta1620b.png">
                Gabinetes
              </a>
            </li>
            <li class="li-c-2 <?php echo $mapdr; ?>">
              <a href="sector-direcao.php">
                <img alt="" class="img-fluid" src="assets/img/images/seta1620b.png">
                Direções
              </a>
            </li>
            <li class="li-c-2 <?php echo $mapdr; ?>">
              <a href="sector-instituicao.php">
                <img alt="" class="img-fluid" src="assets/img/images/seta1620b.png">
                Instituições
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </li>
  <li class="<?php echo $noticia ?> li-principal">
    <a href="noticia.php">
      <img alt="" class="img-fluid" src="assets/img/images/seta1620b.png">
      Notícias
    </a>
  </li>
  <li class="<?php echo $organizacao ?> li-principal">
    <a href="organizacao.php">
      <img alt="" class="img-fluid" src="assets/img/images/seta1620b.png">
      Organizações
    </a>
  </li>
  <li class="<?php echo $projecto ?> li-principal">
    <a href="projeto.php">
      <img alt="" class="img-fluid" src="assets/img/images/seta1620b.png">
      Projetos
    </a>
  </li>
  <!-- <li class="<?php echo $estatistica ?> li-principal">
    <a href="#">
      <img alt="" class="img-fluid" src="assets/img/images/seta1620b.png">
      Estatísticas
    </a>
  </li> -->
  <li class="<?php echo $mundo ?> li-principal">
    <a href="mundo-rural.php">
      <img alt="" class="img-fluid" src="assets/img/images/seta1620b.png">
      Mundo Rural
    </a>
  </li>
  <li class="<?php echo $documento ?> li-principal">
    <a href="documento.php">
      <img alt="" class="img-fluid" src="assets/img/images/seta1620b.png">
      Documentos
    </a>
  </li>
</ul>