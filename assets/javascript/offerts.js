const inputPrice = document.getElementById('price');
const inputDescuento = document.getElementById('descuento');
const inputCoupon = document.getElementById('coupon');
const message = document.getElementById('message');
const totalDescuento = document.querySelector('.totalDescuento');
const priceOriginal = document.querySelector('.priceOriginal');
const priceDescuento = document.querySelector('.priceDescuento');
const ahorro = document.querySelector('.ahorro');
ahorro.innerText = '$ 0';
priceDescuento.innerText = '$ 0';
priceOriginal.innerText = '$ 0';
totalDescuento.innerText = '$ 0';
const cupones = [
	{
		name: 'Promo10',
		descuento: 15,
	},
	{
		name: 'Platzi30',
		descuento: 25,
	},
	{
		name: 'Avengers20',
		descuento: 20,
	},
];

function Descuento(price, descuento) {
	let promo = (price * (100 - descuento)) / 100;
	return promo;
}

function calcularDescuento() {
	const inputPriceValue = inputPrice.value;
	const inputDescuentoValue = inputDescuento.value;

	if (inputPriceValue.IsNaN || inputPriceValue === '') {
		message.innerText='ingresa valores validos';
	} else if (inputDescuento.IsNaN || inputDescuentoValue === '') {
		message.innerText='ingresa valores validos';
	} else {
		let resulP = Descuento(inputPriceValue, inputDescuentoValue);
		let ahorroPrice = inputPriceValue - resulP
		totalDescuento.innerText = inputDescuentoValue + '%';
		priceOriginal.innerText = '$ ' + inputPriceValue;
		priceDescuento.innerText = '$ ' + resulP.toFixed(2);
		ahorro.innerText = '$ ' + ahorroPrice.toFixed(2);
	}
}

function validarCupon() {
	const inputDescuentoValue = parseInt(inputDescuento.value);
	const inputCouponValue = inputCoupon.value;
	const inputPriceValue = parseInt(inputPrice.value);
	const cuponIsValue = function (cupon) {
		return cupon.name === inputCouponValue;
	};
	const userCoupon = cupones.find(cuponIsValue);
	if (inputCouponValue === '') {
		calcularDescuento();
	} else if (!userCoupon) {
		message.innerText='el cupon ' + inputCouponValue + ' No es VALIDO';
		calcularDescuento();
	} else {
		console.log('felicidades tu cupon es de ' + userCoupon.descuento);
		let sumaDescuentos = inputDescuentoValue + userCoupon.descuento;
		let resultadoPrice = Descuento(inputPriceValue, sumaDescuentos);
		let Ahorro = (inputPriceValue - resultadoPrice).toFixed(2);
		ahorro.innerText = '$ '+Ahorro;
		priceDescuento.innerText = '$ '+resultadoPrice.toFixed(2);
		priceOriginal.innerText = '$ ' + inputPriceValue.toFixed(2);
		totalDescuento.innerText = `${sumaDescuentos}%`;
	}
}
