<?php

  $bd = 'db_code';
  $server = 'localhost';
  $user = "root";
  $password = 'sql';

  $conexion = @mysqli_connect($server, $user, $password, $bd);

  if(!$conexion) die("Error de conexión".mysqli_connect_error() );

  $sql = "SELECT * FROM usuario";
  $result = mysqli_query($conexion, $sql);
  $array_user = array();

  while ($data = mysqli_fetch_assoc($result)) {
    $array_user[] = $data;
  }

  echo json_encode($array_user);

?>
