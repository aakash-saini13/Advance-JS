// console.log(this)

// function abcd() {
//     console.log(this)
// }
// abcd()

// let obj = {
//     name: 'Aakash',
//     sayName: function () {
//         console.log(this.name)
//     }
// }
// // console.log(obj)
// console.log(obj.sayName())

// class Abcd{
//     constructor() {
//         console.log('hello');
//         this.a = 12;
//         console.log(this.a)
//     }
// }
// let val = new Abcd()

let obj = {
    name: 'Aakash',
    age: 21
};
function abcd(num1,num2) {
    console.log(this,num1,num2)
}
// abcd.call(obj,1,2)
// abcd.apply(obj,[1,3])
let fun = (abcd.bind(obj, 1, 2, 3))
fun()