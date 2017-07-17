var peso = prompt("Ingrese su peso","Kg");
var altura = prompt("Ingrese su altura","Mts");
var imc;

    imc=peso/(altura*altura);

    if (imc > 18 && imc< 24.9){
     alert("Su Indice de Masa Corporal es: "+ imc.toFixed(2) + " Y esta en un rango NORMAL");

    }

    else if (imc > 25 && imc <26.9){
    alert("Su Indice de Masa Corporal es: "+ imc.toFixed(2) + " Y esta en un rango de SOBREPESO");
}

	else if (imc>27){
		 alert("Su Indice de Masa Corporal es: "+ imc.toFixed(2) + " Y esta en un rango de OBESIDAD");
	}