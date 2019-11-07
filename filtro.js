let inputFiltro = document.getElementById('filtro');
let tipoCampo = document.getElementsByTagName('select')[0];
let filas = document.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

function refrescar() {
    for(let i = 0; i<filas.length; i++){
        filas[i].style.display = "";
    }
}
function filtrar() {
    let campo;
    switch (tipoCampo.value) {
        case 'nombre':
            campo = 0;
            break;
        case 'apellido':
            campo = 1; 
            break;
        case 'cedula':
            campo = 2;
             break;
        case 'sexo':
            campo = 3; 
            break;
        case 'telefono':
            campo = 4; 
            break;
        case 'correo':
            campo = 5; 
            break;
        case 'titulo':
            campo = 6; 
            break;
        case 'estudios':
            campo = 7; 
            break;
        case 'idiomas':
            campo = 8; 
            break;
        case 'habilidades':
            campo = 9; 
            break;
    }
    // console.log(campo)
    for(let i = 0; i<filas.length; i++){
        filas[i].style.display = "";
    }
    for (let i = 0; i<filas.length; i++) {
        let td = filas[i].getElementsByTagName('td');
        // console.log(campo);
        if (td[campo].innerText != inputFiltro.value) {
            filas[i].style.display = 'none';
        }
    }
}


