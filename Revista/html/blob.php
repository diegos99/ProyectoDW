<?php
include("conexion.php");
$nombre = $_POST['nombre'];
$imagen = addslashes(file_get_contents($_FILES['imagen']['tmp_name']));

$query = "INSERT INTO blobs(nombre,imagen) VALUES('$nombre','$imagen')";
$resultado = $conexion->query($query);

if ($resultado) {
    echo "Se subio correctamente";
}else{
    echo "No se subio correctamente";
}
?>