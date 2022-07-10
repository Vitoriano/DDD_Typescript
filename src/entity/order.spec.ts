import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {

  it("Should throw error when id is empty", () => {
   expect(() => {
    let order = new Order("", "123", []);
   }).toThrowError("Id is required");
  });

  it("Should throw error when customerid is empty", () => {
    expect(() => {
     let order = new Order("123", "", []);
    }).toThrowError("CustomerId is required");
   });

   it("Should throw error when items is empty", () => {
    expect(() => {
     let order = new Order("123", "12", []);
    }).toThrowError("Items are required");
   });

   it("Should calculate total", () => {
    const item1 = new OrderItem("1", "Item1", 10);
    const item2 = new OrderItem("2", "Item2", 15);

    const order = new Order("1", "123",[item1, item2]);
    expect(order.total()).toBe(25);

   });


  

});