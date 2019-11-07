const datosPersonales = document.getElementById('datosPersonales');
const datosProfesionales = document.getElementById('datosProfesionales');
const textoCamio = document.getElementById('textoSiguiente');
textoCamio.addEventListener('click', () => {
    if (!checkInputs()) {
        alert('Existe un problema');
    }else{
        if (datosPersonales.classList.contains('d-block')) {
            datosPersonales.classList.replace('d-block', 'd-none');
            datosProfesionales.classList.replace('d-none', 'd-block');
            textoCamio.innerText = 'Regresar';
        } else {
            datosPersonales.classList.replace('d-none', 'd-block');
            datosProfesionales.classList.replace('d-block', 'd-none');
            textoCamio.innerText = 'Siguiente';
        }
    }


})

document.getElementById('setNewSkill').addEventListener('click', () => {
    let getSkill = document.getElementById('aspHabilidades');
    let newSkill = document.createElement('p');
    newSkill.setAttribute('class', 'aspSkills m-1');
    newSkill.textContent = getSkill.value;
    document.getElementById('aspHabilidadesField').appendChild(newSkill);

})


for (let i = 1; i <= 31; i++) {
    let dayOption = document.createElement('option');
    dayOption.setAttribute('value', i);
    dayOption.innerText = i;
    document.getElementById('aspDiaNacimiento').appendChild(dayOption);
}
for (let i = 2019; i >= 1900; i--) {
    let yearOption = document.createElement('option');
    yearOption.setAttribute('value', i);
    yearOption.innerText = i;
    document.getElementById('aspYearNacimiento').appendChild(yearOption);
}
for (let i = 1900; i <= 2019; i++) {
    let yearOption = document.createElement('option');
    yearOption.setAttribute('value', i);
    yearOption.innerText = i;
    document.getElementById('aspYearNacimiento').appendChild(yearOption);
    document.getElementById('aspInicioEmpresaYear').appendChild(yearOption);

}
for (let i = 2019; i >= 1900; i--) {
    let yearOption = document.createElement('option');
    yearOption.setAttribute('value', i);
    yearOption.innerText = i;
    document.getElementById('aspFinalEmpresaYear').appendChild(yearOption);
}
const todosInputs = document.getElementById('aspForm').getElementsByTagName('input');
for(let x in todosInputs){
    console.log(todosInputs[x].name)
}
function checkInputs() {
    const inputs = datosPersonales.getElementsByTagName('input');
    // let looping = await function(){
    //     for (let i =0;i<inputs.length-2;i++) {
    //         if (inputs[i].value == '' || inputs[i].value == null) {
    //             inputs[i].style.borderColor = 'red';
    //             inputs[i].focus();
    //             console.log(inputs[i]);
    //             return false;
    //         }
    //     }
    // }
    
    return true;
}
