
const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');



CALCULAR.addEventListener('click', () => {
    console.log('Se hizo click!');
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})



function calcFlujo(peso) {
    let hidra;
    let flujo;
    peso = Math.round(peso);
    if(peso <= 10) {
        hidra = (100 * peso);
    } else if (peso > 10 & peso <= 20){
        hidra = 1000 + 50*(peso-10);
    } else if(peso > 20 & peso <= 30){
        hidra = 1500 + 20*(peso-20);
    } else if (peso>30){
        hidra = ( (peso * 4) + 7) / (peso + 90);
    } 
    if (peso<=30){
        console.log("Se ha utilizado el método Holliday-Segar");
        flujo = Math.round( hidra/24);
        let mant  = Math.round( flujo*1.5);
        console.log(`Volumen diario: ${hidra} cc.`);
        console.log(`Mantenimiento: ${mant}  cc/h.`);
    } else if (peso>30){
        console.log("Se ha utilizado el método de Superficie Corporal");
        let hid1 = Math.round( hidra * 1500 / 24);
		let hid2 = Math.round( hidra * 2000 / 24);
		console.log("Superficie Corporal 1 " + hid1);
		console.log(`Superficie Corporal 2 ` + hid2);
    }

    return flujo; 
}