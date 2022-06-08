const inputArray = document.getElementById('inputArray')
const inputRemove = document.getElementById('inputRemove')
const message = document.getElementById('message')

let arrayUser = [];
let objectElement = {};

function crearArray() {
	const nuevoV = parseInt(inputArray.value);
	if (Number.isNaN(nuevoV) || nuevoV < 0) {
		message.innerHTML='<span class="message-red">Ingrese un valor válido para la lista de números</span>';
		return false;
	}
  message.innerText=""
	arrayUser.push(nuevoV);
	inputArray.value = '';
  renderList(arrayUser)
}

function renderList(list) {
  l = document.getElementById('list-values');
  l.innerHTML = '';

  list.forEach((element, index) => {
      const listElement = document.createElement('li');
      listElement.innerHTML = `<strong>${index + 1} -</strong> ${element}`;

      l.appendChild(listElement);
  });
}

function removeListNumber() {
  const element = document.getElementById('removeValue');
  let value = parseInt(element.value);
  element.value = '';

  if (Number.isNaN(value) || value <= 0) {
      message.innerHTML = 'Ingrese una posición válida de la lista de números';
      return false;
  }

  value -= 1;

  arrayUser.splice(value, 1);
  renderList(arrayUser);
}

function promedio() {
	if (arrayUser.length === 0) {
		message.innerHTML='<span class="message-red">La lista esta vacia</span>';
	} else {
		let suma = arrayUser.reduce(function (valor1, valorNuevo) {
			return valor1 + valorNuevo;
		});
		console.log(suma);
		const promedio = suma / arrayUser.length;
		message.innerText=`El promedio es de: ${promedio.toFixed(2)}`;
		return promedio;
	}
}

function ispar(numero) {
	if (numero % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

function mediana() {
  if(arrayUser.length===0){
    message.innerHTML='<span class="message-red">La lista esta vacia</span>';
  }else{
    arrayUser.sort(function (elementoA, elementoB) {
      return elementoA - elementoB;
    });
    let mitadArray = parseInt(arrayUser.length / 2);
  
    if (ispar(arrayUser.length)) {
      let valor1 = arrayUser[mitadArray - 1];
      let valor2 = arrayUser[mitadArray];
      const promedioMediana = promedio([valor1, valor2]);
      message.innerText=`La mediana es: ${valor1 + ' y ' + valor2} El promedio es ${promedioMediana}`;
    } else {
      message.innerText=`La mediana es: ${arrayUser[mitadArray]}`;
    }

  }
}

function moda() {
  if(arrayUser.length === 0){
    message.innerHTML='<span class="message-red">La lista esta vacia</span>';
  }else{

    arrayUser.map(function (elemento) {
      if (objectElement[elemento]) {
        objectElement[elemento] += 1;
      } else {
        objectElement[elemento] = 1;
      }
    });
  
    const arrayElement = Object.entries(objectElement).sort(function (elemento1, elemento2) {
      return elemento1[1] - elemento2[1];
    });
  
    let moda = arrayElement[arrayElement.length - 1];
  
    message.innerText=`La moda es: ${moda[0]}`;
  }
}
