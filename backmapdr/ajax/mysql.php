<?php
error_reporting(E_ALL ^ E_DEPRECATED);
?>

<?php
class mysql
{
	private $connection;
	function connect()
	{
		$this->connection = mysqli_connect("10.222.2.41", "mapdr_sa", "M@p839dr#2022", "mapdr_db");
		//$this->connection = mysqli_connect("localhost", "root", "", "madr");
		if (!isset($this->connection)) {
			echo "Error: Unable to connect to MySQL." . PHP_EOL;
			echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
			echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
			exit;
		}
		mysqli_set_charset($this->connection, 'utf8');
	}
	function query($query)
	{
		$result = mysqli_query($this->connection, $query);
		if (!$result) {
			echo 'Could not run query: ' . mysqli_error($this->connection);
			exit;
		}
		return $result;
	}
	function close()
	{
		mysqli_close($this->connection);
	}
	function getConnection()
	{
		return $this->connection;
	}
}
?>
