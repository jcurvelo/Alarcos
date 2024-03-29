<?php require('./connection.php');?>
<!DOCTYPE html>
<html lang="en">

<head>
        <meta charset="UTF-8">
        <title>ALARCOS S.A</title>
        <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <link rel="stylesheet" href="estilos.css">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link href='http://fonts.googleapis.com/css?family=Oswald:400,700' rel='stylesheet' type='text/css'>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
</head>

<body class="aspirantesBody">
    <div class="container-fluid">
        <a class="btn btn-secondary btn-lg" href="./index.html">Salir</a><br>
        <br>
        <div class="input-group">
            <div class="input-group-prepend">
                <select class="form-control" name="campo" id="campo">
                    <!-- <option value="id">ID</option> -->
                    <option value="nombre">Nombre</option>
                    <option value="apellido">Apellido</option>
                    <option value="cedula">Cédula</option>
                    <option value="sexo">Sexo</option>
                    <option value="telefono">Teléfono</option>
                    <option value="correo">Correo</option>
                    <option value="titulo">Título</option>
                    <option value="estudios">Estudios</option>
                    <option value="idiomas">Idiomas</option>
                    <option value="habilidades">Habilidades</option>
                </select>
                <input type="text" name="filtro" id="filtro" class="form-control">
                <button onClick="filtrar()" class="btn btn-success" type="button" id="button-addon1">Filtrar</button>
                <button onClick="refrescar()" class="btn btn-secondary" type="button" id="button-addon2">Refrescar</button>

            </div>
        </div>
        <h1>Aspirantes a trabajar</h1>
        <div class="tablita">
            <table class="table table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Cédula</th>
                        <th scope="col">Sexo</th>
                        <th scope="col">Télefono</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Título</th>
                        <th scope="col">Estudios</th>
                        <th scope="col">Idiomas</th>
                        <th scope="col">Habilidades</th>
                        <th scope="col">Curríclum</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Juan</td>
                        <td>Curvelo</td>
                        <td>27.516.388</td>
                        <td>Masculino</td>
                        <td>0426-349-36-94</td>
                        <td>juancurvelo99@gmail.com</td>
                        <td>TSU Informática</td>
                        <td>IUTA</td>
                        <td>Inglés</td>
                        <td>JavaScript, CSS, HTML</td>
                        <td><a href="#">Descargar</a></td>
                    </tr>
                    <?php
                    $consulta = "SELECT * FROM datos_aspirantes";
                    $result = $conn->query($consulta);
                    if($result->num_rows >0){
                        while($row = $result->fetch_assoc()){
                            echo "                    
                            <tr>
                                <th scope='row'>".$row['id']."</th>
                                <td>".$row['aspNombre']."</td>
                                <td>".$row['aspApellido']."</td>
                                <td>".$row['aspCedula']."</td>
                                <td>".$row['aspSexo']."</td>
                                <td>".$row['aspTelefono']."</td>
                                <td>".$row['aspMail']."</td>
                                <td>".$row['aspTitulo']."</td>
                                <td>".$row['aspEstudios']."</td>
                                <td>".$row['aspIdiomas']."</td>
                                <td>".$row['aspHabilidades']."</td>
                                <td><a href='#'>Descargar</a></td>
                            </tr>
                        ";
                        }
                    }
                    ?>
                </tbody>
            </table>
        </div>

    </div>

    <script src="./bootstrap.min.js"></script>
    <script src="./filtro.js"></script>
</body>

</html>