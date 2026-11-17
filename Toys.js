// สมมุติว่าเรามี Variable ตั้งต้น toyInventory ซึ่งบรรจุ Array ของจำนวนตุ๊กตาลาบูต๊องแต่ละสีในคลังสินค้า เช่น
// const toyInventory = [
// { product: "Teddy Bear Costume", quantity: 34 }, 
// { product: "Soymilk", quantity: 65 }, 
// { product: "Lychee Berry", quantity: 55 }, 
// { product: "Green Grape", quantity: 0 }, 
// { product: "Sea Salt Coconut", quantity: 7 }, 
// { product: "Toffee", quantity: 70 }, 
// { product: "Sesame Bean", quantity: 1 },
// { product: "Chestnut Cocoa", quantity: 1 }
// ];
// ให้เขียนโปรแกรมช่วยบริษัท Oat Toy หาว่าตุ๊กตาสีไหนมีจำนวนมากที่สุดในคลัง ณ ตอนนี้ เพื่อที่จะได้นำไปจัดโปรโมชันระบายสินค้า
// โปรแกรมควรจะแสดงผลลัพธ์ออกมาทางหน้าจอแบบนี้
// สีตุ๊กตาลาบูต๊องที่มากที่สุดคือ Toffee 70 ตัว
const toyInventory = [
{ product: "Teddy Bear Costume", quantity: 34 }, 
{ product: "Soymilk", quantity: 65 }, 
{ product: "Lychee Berry", quantity: 55 }, 
{ product: "Green Grape", quantity: 0 }, 
{ product: "Sea Salt Coconut", quantity: 7 }, 
{ product: "Toffee", quantity: 70 }, 
{ product: "Sesame Bean", quantity: 1 },
{ product: "Chestnut Cocoa", quantity: 1 }
];
let mostToy = 0;
let maxToyColor = "";
for(const toy of toyInventory){
    if(toy.quantity > mostToy){
        maxToyColor = toy.product;
        mostToy = toy.quantity;
    }
}
console.log(`สีตุ๊กตาลาบูต๊องที่มากที่สุดคือ ${maxToyColor} ${mostToy} ตัว`)