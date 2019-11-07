<?php
    require('./connection.php');

    $aspNombre = $_POST['aspNombre'];
    $aspApellido = $_POST['aspApellido'];
    $aspCedula = $_POST['aspCedula'];
    $aspSexo = $_POST['aspSexo'];
    $aspTel = $_POST['aspTel'];
    $aspMail = $_POST['aspMail'];
    $aspEstado = $_POST['aspEstado'];
    $aspCiudad = $_POST['aspCiudad'];
    $aspDireccion = $_POST['aspDireccion'];
    $aspVehiculo = $_POST['aspVehiculo'];
    $aspDiscapacidad = $_POST['aspDiscapacidad'];
    //
    $aspTitulo = $_POST['aspTitulo'];
    $aspNombreEmpresa1 = $_POST['aspNombreEmpresa1'];
    $aspCargoEmpresa1 = $_POST['aspCargoEmpresa1'];
    $aspInstituto = $_POST['aspInstituto'];
    $aspEgresado = $_POST['aspEgresado'];
    $aspEduStatus = $_POST['aspEduStatus'];
    $aspIdioma = $_POST['aspIdioma'];
    $aspHabilidades = $_POST['aspHabilidades'];
    $aspCurriculum = $_POST['aspCurriculum'];

    $sqlPersonal = "INSERT INTO datos_aspirantes(aspNombre,aspApellido,aspCedula,aspSexo,aspTelefono,aspMail,aspEstado,aspCiudad,aspDireccion,aspVehiculo,aspDiscapacidad) 
    VALUES ('$aspNombre','$aspApellido','$aspCedula','$aspSexo','$aspTel','$aspMail','$aspEstado','$aspCiudad','$aspDireccion','$aspVehiculo','$aspDiscapacidad')";
    $sqlProfesional ="INSERT INTO datos_aspirantes(aspTitulo,aspNombreEmpresa,aspCargoEmpresa,aspInstituto,aspEgresado,aspEduStatus,aspIdioma,aspHabilidades)
    VALUES ('$aspTitulo','$aspNombreEmpresa1','$aspCargoEmpresa1','$aspEgresado','$aspEduStatus','$aspIdioma','$aspHabilidades')";


    if(!$conn->query($sqlPersonal)){
        echo 'Error personal '.$conn->error;
    }
    if(!$conn->query($sqlProfesional)){
        echo 'Error profesional'.$conn->error;
    }