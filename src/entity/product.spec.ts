import Order from "./order";
import OrderItem from "./order_item";
import Product from "./product";

describe("Product unit tests", () => {

  it("Should throw error when id is empty", () => {
   expect(() => {
    const product = new Product("", "Product 1", 100);
   }).toThrowError("Id is required");
  });

  it("Should throw error when name is empty", () => {
    expect(() => {
     const product = new Product("1", "", 100);
    }).toThrowError("Name is required");
   });

   it("Should throw error when price is less than 0", () => {
    expect(() => {
     const product = new Product("1", "Product 1", -1);
    }).toThrowError("Price muist be greater than zero");
   });

   it("Should change name", () => {
   
     const product = new Product("1", "Product 1", 150);
     product.changeName("Product1.2");

     expect(product.name).toBe("Product1.2");
   
   });


   it("Should change price", () => {
   
    const product = new Product("1", "Product 1", 100);
    product.changePrice(150);

    expect(product.price).toBe(150);
  
  });


  


  

});