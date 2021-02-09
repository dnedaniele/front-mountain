function renderSingleProduct(product){
  //div-container
const divContainer = document.createElement("div");
divContainer.classList.add("div-container");
 
// card-product
const cardProduct = document.createElement("div");
cardProduct.classList.add("card product");
cardProduct.style.width = "width: 18rem";

//IMG
const img = document.createElement("img");
img.classList.add("card-img-top");
img.alt = "shoes";
img.src = product.img;

//card text
const cardText = document.createElement("div");
cardText.classList.add("card-body");

//product Name
const productName = document.createElement("h5");
productName.classList.add("card-body");
productName.innerHTML = product.name;

//product description
const productDescription = document.createElement("p");
productDescription.classList.add("card-text");
productDescription.innerHTML = product.description; 

//Details Buttons
const detailsButton = document.createElement("a");
detailsButton.classList.add("btn");
detailsButton.classList.add("btn-primary");
detailsButton.href = `***`;                   // fill in URL `./single-product-page.html?productId=${product._id}`;
detailsButton.innerHTML = "Product Details";
 
//append all
cardText.appendChild(productName);
cardText.appendChild(productDescription);
cardText.appendChild(detailsButton);

cardProduct.appendChild(img);
cardProduct.appendChild(cardText);

divContainer.appendChild(cardProduct); 

document.getElementById("test").appendChild(divContainer); 
};



function renderProductList(list){
  list.forEach(renderSingleProduct);
}

const getProduct = async()=>{
  const response = await fetch(`****`);
  const data = await response.json();
  console.log(data);

  renderProductList(data);
}

getProduct(); 


// Object factory: product

/* function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.display = function () {
    // render the product
    const container = document.createElement("div");
    const nameTag = document.createElement("h1");
    const priceTag = document.createElement("h2");
    const qntTag = document.createElement("h3");
    nameTag.innerHTML = this.name;
    priceTag.innerHTML = this.price;
 
      container.appendChild(nameTag);
      container.appendChild(priceTag);
    document.querySelector(".div-container").appendChild(container); 



  };
}


const bagPack = new Product("bagpack 123", "45", "1")
const shoes = new Product("black shoes", 24, 1)
const tShirt = new Product("blue Tshirt", 18, 3);
const bagPackTwo = new Product("bagpack 123", "45", "1")
const shoesTwo = new Product("black shoes", 24, 1)
const tShirtTwo = new Product("blue Tshirt", 18, 3);
const bagPackThree = new Product("bagpack 123", "45", "1")
const shoesThree = new Product("black shoes", 24, 1)
const tShirtThree = new Product("blue Tshirt", 18, 3);

const listProducts = [bagPack,shoes, tShirt, bagPackTwo, shoesTwo, tShirtTwo, bagPackThree, shoesThree, tShirtThree ]

// map
listProducts.forEach(prod => (prod.display()))
 */