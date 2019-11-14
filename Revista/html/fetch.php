<?php

//fetch.php


$connect = new PDO("mysql:host=localhost;dbname=revista", "root", "");

$form_data = json_decode(file_get_contents("php://input"));

$query = '';
$data = array();

if(isset($form_data->search_query))
{
 $search_query = $form_data->search_query;
 $query = "
 SELECT articles_view.id_a, fecha_p, nombre_categoria, nombre_sub_categoria, nombre, apellido FROM articles_view INNER JOIN usuario ON articles_view.id_u=usuario.id_u
 WHERE (articles_view.id_a LIKE '%$search_query%'
 OR fecha_p LIKE '%$search_query%'
 OR nombre_categoria LIKE '%$search_query%'
 OR nombre_sub_categoria LIKE '%$search_query%'
 OR nombre LIKE '%$search_query%'
 OR apellido LIKE '%$search_query%') ORDER BY fecha_p DESC  
 ";
}
else
{
 $query = "SELECT articles_view.id_a, fecha_p, nombre_categoria, nombre_sub_categoria, nombre, apellido FROM articles_view INNER JOIN usuario ON articles_view.id_u=usuario.id_u ORDER BY fecha_p DESC";
}

$statement = $connect->prepare($query);

if($statement->execute())
{
 while($row = $statement->fetch(PDO::FETCH_ASSOC))
 {
  $data[] = $row;
 }
 echo json_encode($data);
}

?>