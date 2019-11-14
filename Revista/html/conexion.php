<?php
$conexion = new mysqli("localhost","root","","revista");
if ($conexion) {
    echo "Conexion exitosa";
}else{
    echo "Conexion no exitosa";
}

?>