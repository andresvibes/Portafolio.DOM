// Selección de elementos
const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
const grayColor = document.getElementsByClassName("gray");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];

// Color rojo
redColor.addEventListener("click", function() {
  cartButton.style.background = "red";
  itemTag.style.backgroundColor = "red";
  imageCard.style.backgroundImage = 'url("https://bateriacarro.com.co/wp-content/uploads/2024/11/ford-colombia-escape-rojo-638314078559652586.png")';
});

// Color gris
grayColor[0].addEventListener("click", function() {
  cartButton.style.background = "gray";
  itemTag.style.backgroundColor = "gray";
  imageCard.style.backgroundImage = 'url("https://wheelfront.com/wp-content/uploads/formidable/8/camaro-zl1-with-variant-krypton-aftermarket-wheels-buy-1.jpg")';
});

// Color negro
blackColor.addEventListener("click", function() {
  cartButton.style.background = "black";
  itemTag.style.backgroundColor = "black";
  imageCard.style.backgroundImage = 'url("https://news.motoreto.com/wp-content/uploads/2022/06/IMG_0123.jpg")';
});

// Botón carrito
const cart = () => {
  cartButton.style.display = "none";
  feedbackBtn.style.display = "block";
};
cartButton.addEventListener("click", cart);

// Botón feedback
const feedback = () => {
  cartButton.style.display = "block";
  feedbackBtn.style.display = "none";
};
feedbackBtn.addEventListener("click", feedback);