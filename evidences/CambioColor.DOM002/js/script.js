const btnColor = document.querySelector(".btmn");
const bodyColor = document.querySelector("body");

const colores = ["green", "blue", "red", "orange", "yellow", "violet"];

bodyColor.style.background = "pink";

btnColor.addEventListener("click", cambiarColor);

function cambiarColor(){

    console.log("si cambia de color");

    const color = parseInt(Math.random() * colores.length);

    bodyColor.style.background = colores[color];

}



const boton = document.querySelector(".btn");

const imagen = document.querySelector(".perro1");

boton.addEventListener("click", () => {

    if(imagen.src.includes("15147078.png")){

        imagen.src = "https://images.vexels.com/media/users/3/200152/isolated/lists/f3945e94178a1942e4a1c38f2cd1b162-ilustracion-de-perro-pinscher-de-pie.png";

    } else {

        imagen.src = "https://png.pngtree.com/png-vector/20250111/ourmid/pngtree-golden-retriever-dog-pictures-png-image_15147078.png";

    }

});