
<link rel="stylesheet" href="css/art1.css" />

<div ng-include="'html/topbar.html'"></div>
<?php
	
	require_once("conexion2.php");
	$insert = "UPDATE articulos SET reads=reads+1 WHERE id_a='11' ";
	$update = $connect->query($insert); 
?>
    <section>
      <div class="callout large encabezado" style="background-image: url('{{articulo.header_image}}');">
        <div class="row column text-center titulo">
          <h1>"{{articulo.titulo}}"</h1>
        </div>
      </div>
      <br />
      <div class="row" id="content">
        <div class="medium-8 large-8 columns">
          <div class="blog-post">
            <p>
              <span><i class="autor"> {{articulo.nombre_autor}}</i></span>
              <span class="label">{{articulo.nombre_categoria}}</span>
            </p>
            <img
              src="{{images[0].link}}"
            />
            <p style="word-break: break-all">
              {{articulo.text}}
              <img
                src="{{images[1].link}}"
              />
            </p>
            <hr />
            <div class="pie">
              <ul class="menu">
                <li>
                  <p>Publicado el <small>{{articulo.fecha_p}}</small></p>
                </li>
                <li><a href="#">Comentarios: 3</a></li>
              </ul>
            </div>
            <hr />
          </div>
        </div>
        <div class="medium-4 large-4 columns" data-anchor="content">
          <div class="stiky row">
            <ul class="menu">
              <li>
                <a 
                  ><img
                    src="{{ad.link_imagen}}"
                    alt="{{ad.nombre}}"
                /></a>
              </li>
            </ul>
            <br />

            <div class="large-11 column">
              <h4>Tambíen podrias leer sobre...</h4>
              <ul class="text-center menu vertical">
                <li><a href="#">Categoría 1</a></li>
                <li><a href="#">Categoría 2</a></li>
                <li><a href="#">Categoría 3</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="row">
        <ul class="menu">
          <li class="texto">Copyright © | Todos los derechos reservados.</li>
        </ul>
      </div>
    </footer>