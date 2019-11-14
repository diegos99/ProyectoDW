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
 SELECT * FROM (SELECT categoria.nombre nombre_cat,subcategoria.nombre nombre_sub, COUNT(articulo.id_a) num_arts FROM articulo 
 INNER JOIN subcategoria ON articulo.id_s_c = subcategoria.id_s_c
 INNER JOIN categoria ON subcategoria.id_c = categoria.id_c
GROUP BY articulo.id_s_c) c 
WHERE c.nombre_sub = '$search_query' 
 ";
}
else
{
 $query = "SELECT categoria.nombre nombre_cat,subcategoria.nombre nombre_sub, COUNT(articulo.id_a) num_arts FROM articulo 
 INNER JOIN subcategoria ON articulo.id_s_c = subcategoria.id_s_c
 INNER JOIN categoria ON subcategoria.id_c = categoria.id_c
GROUP BY articulo.id_s_c";
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