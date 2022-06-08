const list = []


const salarios = colombia.map(function (persona) {
	return persona.salary;
});
// se organiza el array de salarios de menor a mayor
const salariosSorted = salarios.sort(function (salaryA, salaryB) {
	return salaryA - salaryB;
});

//helper
function crearArray() {
	const message = document.getElementById('message');
	const nuevoV = parseInt(inputArray.value);
	if (Number.isNaN(nuevoV) || nuevoV < 0) {
		message.innerHTML =
			'<span class="message-red">Ingrese un valor válido para la lista de números</span>';
		return false;
	}
	message.innerText = '';
    eliminarTodo()
	list.push(nuevoV);
	inputArray.value = '';
	renderList(list);

}

function renderList(list) {
    l = document.getElementById('list-values-default');
    l.innerHTML = '';

    list.forEach((element, index) => {
        const listElement = document.createElement('li');
        listElement.innerHTML = `<strong>${index + 1} -</strong> ${element}`;

        l.appendChild(listElement);
    });
}

function isPar(numero) {
	return numero % 2 === 0;
}

function promedio(lista) {
	let suma = lista.reduce(function (valor1, valor2) {
		return valor1 + valor2;
	});
	const promedio = suma / lista.length;
	return promedio;
}

function mediana(lista) {
	const mitad = parseInt(lista.length / 2);
	if (isPar(lista.length)) {
		const personamitad1 = lista[mitad - 1];
		const personaMitad2 = lista[mitad];

		let promediomediana = promedio([personamitad1, personaMitad2]);
		return promediomediana;
	} else {
		const personamitad = lista[mitad];
		return personamitad;
	}
}

const medianaGeneral = mediana(salariosSorted);

//mediana 10%
const spliceStart = (salariosSorted.length * 90) / 100;
const spliceCount = salariosSorted.length - spliceStart;

const salariosColTop10 = salariosSorted.splice(spliceStart, spliceCount);

console.log(medianaGeneral, salariosColTop10);

function renderListDefault(list) {
	l = document.getElementById('list-values-default');
	l.innerHTML = '';

	list.forEach((element, index) => {
		const listElement = document.createElement('li');
		listElement.innerHTML = `<strong>${index + 1} -</strong> ${element.name}, <strong>USD$ ${
			element.salary
		}</strong>`;

		l.appendChild(listElement);
	});
}

renderListDefault(colombia);

function eliminarTodo() {
    message.innerHTML =''
	colombia = [];
	renderListDefault(colombia);
}

function resMediana() {
	const message = document.getElementById('message');
	message.innerHTML = `La mediana de la lista es de ${medianaGeneral}`;
}

function resMedianaColTop10() {
	const message = document.getElementById('message');
	message.innerHTML = `La mediana top 10% de la lista es de <br/> top: ${salariosColTop10.length - 1} ${
		salariosColTop10[0]
	} <br/> top: ${salariosColTop10.length} ${salariosColTop10[1]}`;
}
