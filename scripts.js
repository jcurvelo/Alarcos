const goToProfesionales = document.getElementById('goToProfesional');
const goToPersonal = document.getElementById('goToPersonal');
goToProfesionales.addEventListener('click',()=>{
    document.getElementById('datosPersonales').classList.remove('d-block');
    document.getElementById('datosPersonales').classList.add('d-none');
    document.getElementById('datosProfesionales').classList.remove('d-none');
    document.getElementById('datosProfesionales').classList.add('d-block');
    window.scrollTo(0, 0);
})

goToPersonal.addEventListener('click',()=>{
    document.getElementById('datosPersonales').classList.remove('d-none');
    document.getElementById('datosPersonales').classList.add('d-block');
    document.getElementById('datosProfesionales').classList.remove('d-block');
    document.getElementById('datosProfesionales').classList.add('d-none');
    window.scrollTo(0, 0);
})

document.getElementById('setNewSkill').addEventListener('click',()=>{
    let getSkill = document.getElementById('aspHabilidades');
    let newSkill = document.createElement('p');
    newSkill.setAttribute('class','aspSkills m-1');
    newSkill.textContent = getSkill.value;
    document.getElementById('aspHabilidadesField').appendChild(newSkill);
    // console.log('hey')
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






const misInputs = document.getElementsByClassName('clase-input');

for(let x in misInputs){
    if(misInputs[x]=='' || misInputs[x]==null){
        alert('Eso Ta malooooo');
        return;
    }
}