<link rel="stylesheet" href="css/Usuario.css" />
<div ng-include="'html/topbar.html'"></div>

<section>
   <form action="blob.php" method="POST" enctype="multipart/form-data">
        <input type="text" name="nombre" placeholder="NOMBRE..." value="">
        <input type="file" name="imagen" />
        <input type="submit" value="Subir Imagen" />
      </form>
      <?php
      include("conexion.php");
      $query2 = "SELECT * FROM blobs";
      $resultado = $conexion->query($query2);
      while($row = $resultado->fetch_assoc()){
      ?>
      <tr>
        <td><?php echo $row['id_blob']; ?></td>
        <td><img src="data:image/jpg;base64, <?php echo base64_encode($row['imagen']); ?>" alt=""></td>
      </tr>            
      <?php
      }
      ?>
  <!-- <form>
    <div class="row">
      <label>
        <h6>Nombre</h6>
        <input
          type="text"
          placeholder="Nombre del anuncio"
          ng-model="createName"
          name="nombre"
        />
      </label>
      <label>
        <h6>Inserte una imagen</h6>
        <input ng-model="createImage" type="file" name="imagen" />
      </label>
    </div>
    <button ng-click="createBlob()" class="button crear">
      Crear
    </button>
  </form> -->
</section>
