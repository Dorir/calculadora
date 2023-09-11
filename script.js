
const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const MET = document.getElementById('metodo');
const HOL = document.getElementById('Holliday');
const VC = document.getElementById('vc');
const TIT = document.getElementById('titulo');

CALCULAR.addEventListener('click', () => {
    console.log('Se hizo click!');
    TIT.innerHTML = '¿Cómo se calcula?';
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO > 0 && DATO <=30 ){
        TIT.style.display = 'none';
        ERROR.style.display = 'none'
        let flujo = Math.round(calcFlujo(DATO)/24);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        MET.innerHTML = 'Método Holliday-Segar';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
        MET.style.display = 'block';
        HOL.style.display = 'block';
        VC.style.display = 'none';
    } else if (DATO > 30) {
        TIT.style.display = 'none'
        ERROR.style.display = 'none'
        let flujo = Math.round(calcFlujo(DATO)*1500); 
        let mantenimiento = Math.round(flujo*20/15); 
        FLU.innerHTML = 'Vol. diario min. ' + flujo + ' cc.';
        MAN.innerHTML = 'Vol. diario max. ' + mantenimiento + ' cc.';
        MET.innerHTML = 'Método de Volumen Corporal';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
        MET.style.display = 'block';
        VC.style.display = 'block';
        HOL.style.display = 'none';
    } else if (DATO <= 0){
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
        VC.style.display = 'none';
        HOL.style.display = 'none';
        TIT.innerHTML = 'No se puede realizar el cálculo';
        TIT.style.display = 'block';
        MET.innerHTML = 'Por favor introduzca un peso superior a 0Kg.';
    }
})



function calcFlujo(peso) {
    let flujo;
    peso = Math.round(peso);
    if(peso <= 10) {
        flujo = (100 * peso);
    } else if (peso > 10 && peso <= 20){
        flujo = 1000 + 50*(peso-10);
    } else if(peso > 20 && peso <= 30){
        flujo = 1500 + 20*(peso-20);
    } else if (peso>30){
        flujo = ( (peso * 4) + 7) / (peso + 90);
    } 
    console.log(flujo);
    

    return flujo; 
}