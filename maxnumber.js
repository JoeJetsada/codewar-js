// สมมุติว่าเรามี Variable ตั้งต้น priceList ซึ่งบรรจุ Array ของตัวเลขราคาสินค้าแต่ละชิ้น เช่น [20, 30, 10 , 40]
// ให้เขียนโปรแกรมหาราคาสินค้าที่มากที่สุด
// โปรแกรมควรจะแสดงผลลัพธ์ออกมาทางหน้าจอแบบนี้ ราคาสินค้ามากที่สุด: 40
const priceList = [20, 30, 10 , 40];
let numberest = priceList[0] ;
for(let i = 0;i < 4;i++){
    if(priceList[i]>numberest){
        numberest = priceList[i];
    }
}
console.log(numberest);