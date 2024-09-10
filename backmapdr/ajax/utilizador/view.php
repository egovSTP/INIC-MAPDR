<?php
if (isset($_GET["page"])) {
	require('../mysql.php');
	require("../config.php");
	$mysql 			= new mysql();
	$config 		= new config();
	$index 			= $_GET['page'] - 1;
	$page 			= $index * $config->quantidade_backend;
	$mysql->connect();
	//Total de usuarios
	$result 		= $mysql->query("call p_count_row('tuser')");
	if ($row1 = mysqli_fetch_array($result)) {
		$total = $row1['total'];
		echo "<input id='total' type='hidden' value='$total' />";
		echo "<input id='quantidade' type='hidden' value='$config->quantidade_backend' />";
		$mysql->connect();
		//Mostra todos os utilizadores
		$result = $mysql->query("call p_view_user('$page', '$config->quantidade_backend')");
		$num = mysqli_num_rows($result);
		if ($num > 0) {
			echo "<div class='art-content-layout-row'><div class='art-layout-cell layout-item-0' style='width: 100%'><table style='border:hidden'>";
			echo "<tr style='border:hidden'><td style='border:hidden'></td><td style='border:hidden'><strong>Username</strong></td></tr>";
			$i = 0;
			while ($row = mysqli_fetch_array($result)) {
				echo "<tr style='border:hidden'><td style='border:hidden'><a id='modificar" . $i . "' title='Modificar " . $row['username'] . "' href='javascript:modificar(" . $row['id'] . ")'><img src='images/update.png' width='28px' height='28px' /></a></td>";
				echo "<input type='hidden' id='" . $row['id'] . "username' value='" . $row['username'] . "' />";
				echo "<input type='hidden' id='" . $row['id'] . "password' value='" . $row['password'] . "' />";
				echo "<input type='hidden' id='" . $row['id'] . "email' value='" . $row['email'] . "' />";
				echo "<input type='hidden' id='" . $row['id'] . "access' value='" . $row['access'] . "' />";
				echo "<input type='hidden' id='" . $row['id'] . "state' value='" . $row['state'] . "' />";
				echo "<td style='border:hidden'><a id='visualizar" . $i . "' title='" . $row['username'] . "' href='javascript:visualizar(" . $row['id'] . ")' style='top: 10px; position: relative;'>" . $row['username'] . "</a></td></tr>";
				$i++;
			}
			echo "</table></div></div>";
			/*Footer page*/

			echo "<div class='art-content-layout-row'><div class='art-layout-cell layout-item-0' style='width: 100%'><div class='art-pager'>";
			$quantidade = $config->quantidade_backend;
			$group = $total % $quantidade == 0 ? $total / $quantidade : ($total / $quantidade) + 1;
			$inicio = 0;
			$fim = 0;
			if ($_GET["page"] - 1 + $quantidade < $group) {
				$inicio = $_GET["page"];
				$fim = ($_GET["page"]) + $quantidade;
			} else if ($group < $quantidade) {
				$inicio = 1;
				$fim = $group;
			} else {
				$inicio = $_GET["page"] - 1;
				$fim = ($_GET["page"]) + $quantidade - 1;
			}
			echo "<a href='javascript:mostrarAnteriorContent()' class='more'>Anterior</a>";
			$page = $index + 1;
			for ($j = $inicio; $j <= $fim; $j++) {
				if ($j == $page) {
					$val = $j;
					echo "<a href='javascript:mostrarContent($val)' class='active'>$val</a> ";
				} else {
					$val = $j;
					echo "<a href='javascript:mostrarContent($val)'>$val</a> ";
				}
			}
			echo "<a href='javascript:mostrarProximoContent()' class='more'>Próximo</a>";
			echo "</div></div></div>";
		}
	}
}
