function calcularIMC (peso, altura){
  var peso = parseInt(document.getElementById("kilos").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var resultado = document.getElementById("resultado");
  var imc;
  var res = "";

    imc = peso/(Math.pow(altura,2));

    if (imc > 18 && imc < 24.9){
      res += "Su Indice de Masa Corporal es: "+ imc.toFixed(2) + " \nY esta en un rango NORMAL";

    }

    else if (imc > 25 && imc < 26.9){
      res += "Su Indice de Masa Corporal es: "+ imc.toFixed(2) + " \nY esta en un rango de SOBREPESO";
    }

	  else if (imc > 27){
      res += "Su Indice de Masa Corporal es: "+ imc.toFixed(2) + " \nY esta en un rango de OBESIDAD";
	  }

  return alert(res);
}
