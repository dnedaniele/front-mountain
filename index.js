

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
    document.querySelector("#product-list").appendChild(container);



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