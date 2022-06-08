document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input[type=number]').forEach( node => node.addEventListener('keypress', e => {
    if(e.keyCode == 13) {
      e.preventDefault();
    }
  }))
});


function calcularPerimetroCuadrado() {
  const inputCuadrado = document.getElementById("inputCuadrado").value;
  const error = document.getElementById("textErrorCuadrado");
  if (inputCuadrado.isNaN || inputCuadrado <= 0) {
    error.innerHTML = `<span class="span__error--message"><strong>Introduzaca solo numeros</strong></span>`;
    document.getElementById("inputCuadrado").value = "";
  } else {
    let resulP = inputCuadrado * 4;
    error.innerHTML = `El perimetro es de: <strong>${resulP} cm </strong>`;
  }
}

function calcularAreaCuadrado() {
  const inputCuadrado = document.getElementById("inputCuadrado").value;
  const error = document.getElementById("textErrorCuadrado");
  if (inputCuadrado.isNaN || inputCuadrado <= 0) {
    error.innerHTML = `<span class="span__error--message"><strong>Introduzaca solo numeros</strong></span>`;
    document.getElementById("inputCuadrado").value = "";
  } else {
    let resulP = inputCuadrado * inputCuadrado;
    error.innerHTML = `El area es de <strong>${resulP} cm<span class="span__cm">2</span></strong>`;
  }
}

/* Circulo */

const PI = Math.PI;

function validacion(input) {
  if (input.isNaN || input <= 0) {
    return false;
  } else {
    return true;
  }
}
function areaCirculo(radio, PI) {
  return (radio ** 2 * PI).toFixed(2);
}

function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(perimetro, PI) {
  return (perimetro * PI).toFixed(2);
}

function calcularDiametro() {
  const inputCirculo = document.getElementById("inputCirculo").value;
  const error = document.getElementById("textErrorCirculo");
  if (validacion(inputCirculo)) {
    let diametroR = diametroCirculo(inputCirculo);
    error.innerHTML = `El diametro del circulo es de <strong>${diametroR} cm</strong>`;
  } else {
    error.innerHTML = `<span class="span__error--message"><strong>Introduzaca solo numeros</strong></span>`;
  }
}

function calcularPerimetro() {
  const inputCirculo = document.getElementById("inputCirculo").value;
  const error = document.getElementById("textErrorCirculo");
  if (validacion(inputCirculo)) {
    let diametroR = diametroCirculo(inputCirculo);
    let perimetroR = perimetroCirculo(diametroR, PI);
    parseInt(perimetroR);
    error.innerHTML = `El perimetro del circulo es de <strong>${perimetroR} cm</strong>`;
  } else {
    error.innerHTML = `<span class="span__error--message"><strong>Introduzaca solo numeros</strong></span>`;
  }
}

function calcularAreaCirculo() {
  const inputCirculo = document.getElementById("inputCirculo").value;
  const error = document.getElementById("textErrorCirculo");
  if (validacion(inputCirculo)) {
    let areaR = areaCirculo(inputCirculo, PI);
    error.innerHTML = `El area del circulo es de: <strong>${areaR} cm<span class="span__cm">2</span></strong>`;
  } else {
    error.innerHTML = `<span class="span__error--message"><strong>Introduzaca solo numeros</strong></span>`;
  }
}

/*Triangulo*/

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function esIsosceles(lado1, lado2, base) {
  if (lado1 === lado2 && lado1 != base) {
    altura = Math.sqrt(lado1 ** 2 - base ** 2 / 4);
    return altura.toFixed(2);
  } else {
    return false;
  }
}

function calcularPerimetroTriangulo() {
  const inputl1 = Number(document.getElementById("inputTriangulo1").value);
  const inputl2 = Number(document.getElementById("inputTriangulo2").value);
  const inputBase = Number(document.getElementById("inputTrianguloBase").value);
  const error = document.getElementById("textErrorTriangulo");

  if (validacion(inputl1) && validacion(inputl2) && validacion(inputBase)) {
    let Isosceles = esIsosceles(inputl1, inputl2, inputBase);
    if (Isosceles === false) {
      let TrianguloPerimetro = perimetroTriangulo(inputl1, inputl2, inputBase);
      error.innerHTML = `El perimetro del triangulo es de: <strong>${TrianguloPerimetro} cm</strong>`;
    } else {
      error.innerHTML = `<strong>Triangulo Isoceles</strong><br/>El perimetro es de: <strong>${Isosceles} cm</strong>`;
    }
  } else {
    error.innerHTML =`<span class="span__error--message"><strong>Introduzaca solo numeros</strong></span>` ;
  }
}

function calcularAreaTriangulo() {
  const inputBase = document.getElementById("inputTrianguloBase").value;
  const inputAltura = document.getElementById("inputTrianguloAltura").value;
  const error = document.getElementById("textErrorTriangulo");
  const errorB = document.querySelector(".errorBase");
  const errorA = document.querySelector(".errorAltura");
  if (validacion(inputBase) && validacion(inputAltura)) {
    let areaResultadoT = areaTriangulo(inputBase, inputAltura);
    error.innerHTML = `El area del triangulo es de: <strong>${areaResultadoT} cm<span class="span__cm">2</span></strong>`;
    errorA.innerHTML = "";
    errorB.innerHTML = "";
  } else {
    error.innerHTML = `<span class="span__error--message"><strong>Introduzaca solo numeros</strong></span>`;
    if (inputAltura == "" && inputBase == "") {
      error.innerHTML = `<span class="span__error--message"><strong>Introduzaca base y altura</strong></span>`;
    } else if (inputBase == "" || inputBase == 0) {
      error.innerText ="";
      errorA.innerHTML = "";
      errorB.innerHTML = `<span class="span__error--message"><strong>Introduzaca Base</strong></span>`;
    } else if (inputAltura == "" || inputAltura == 0) {
      error.innerText ="";
      errorB.innerText = "";
      errorA.innerHTML = `<span class="span__error--message"><strong>Introduzaca Altura</strong></span>`;
    }
  }
}
