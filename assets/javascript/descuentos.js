let cupones = [{
    name:"holakase",
    descuento: 15
},
{
    name:"julianvalenciask8",
    descuento: 40,
}]

let priceAlter = document.querySelector('#price_alter')
let priceAlterValueN = Number( priceAlter.innerHTML)
let priceNow = document.querySelector('#price__before_now');
let priceValueN = Number( priceNow.innerHTML)
let resultado;


function calcularDescuento ( price, descuento){
    resultado = price *(100 - descuento)/100 
    return resultado
}

function validarCuponInput(){
    const cuponValue = document.getElementById('inputCupon')
    const cuponisValue= cuponValue.value
    const validarCupon = function(cupon){
    return cupon.name === cuponisValue;
}

const inputCupon = cupones.find(validarCupon)

if(!inputCupon){
    alert('Ese cupon no es valido')
}else{
   const descuento = inputCupon.descuento;

   
   const priceConDescuento = calcularDescuento(priceValueN, descuento)
   console.log(priceConDescuento)
   priceNow.innerText= ("$"+priceConDescuento);
   priceAlter.innerText = ("$"+priceValueN);
   
}
}



// const cupones = ["holakase", "julitime", "juandam"]



// function validarDescuento(){
// const usercupon = "hola"
// let descuento;
//     switch(){
//         case cupones[0]:
//             descuento = 15;
//             break;
//         case cupones[1]:
//             descuento = 30;
//             break;
//         case cupones[2]:
//             descuento = 45;
//             break;

//     }

//     console.log(descuento)
// }

// const cupones = ["holakase", "julitime", "juandam"]
// let inputCupon = prompt('ingrese cupon');
// let descuento;
// function validarCupon() {

//     if(!cupones.includes(inputCupon)){
//         alert('este cupon' + inputCupon + "No es Valido")
//     }else if(inputCupon === "holakase"){
//         descuento = 15;

//     }else if(inputCupon === "julitime"){
//         descuento = 30;
//     }else if (inputCupon === "juandam"){
//         descuento = 45;
//     }
//   console.log(descuento);
// }

