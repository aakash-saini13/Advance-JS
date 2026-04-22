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

// let obj = {
//     name: 'Aakash',
//     age: 21
// };
// function abcd(num1,num2) {
//     console.log(this,num1,num2)
// }
// // abcd.call(obj,1,2)
// // abcd.apply(obj,[1,3])
// let fun = (abcd.bind(obj, 1, 2, 3))
// fun()


// module Pattern
// let bank = (function () {
//     let bankBalance = 0;
//     function checkBankBalance() {
//         console.log(`Your Bank Balance is ${bankBalance}`)
//     }
//     function setBankBalance(amount) {
//         bankBalance += amount;
//         console.log(`Amount Creadit Sucessfuly in your Acc. Your Current bankBalance is ${bankBalance}`)
//     }
//     function withdrawBankBalance(amount) {
//         if (amount > bankBalance) {
//             console.error(`Insuffucent Bank Balance You have only RS${bankBalance}`)
//         }
//         else {
//             bankBalance-=amount
//             console.log(`RS${amount} debited Sucessfully from your AC.Now your Bank Balance is ${bankBalance}`)
//         }
//     }
//     return {
//         checkBankBalance,
//         setBankBalance,
//         withdrawBankBalance
//     }
// })();
// bank.checkBankBalance()
// bank.setBankBalance(1000);
// bank.checkBankBalance()
// bank.withdrawBankBalance(100)
// bank.checkBankBalance()

//Reveling Module pattern
// let bank = (function () {
//     let bankBalance = 0;
//     function checkBankBalance() {
//         console.log(`Your Bank Balance is ${bankBalance}`)
//     }
//     function setBankBalance(amount) {
//         bankBalance += amount;
//         console.log(`Amount Creadit Sucessfuly in your Acc. Your Current bankBalance is ${bankBalance}`)
//     }
//     function withdrawBankBalance(amount) {
//         if (amount > bankBalance) {
//             console.error(`Insuffucent Bank Balance You have only RS${bankBalance}`)
//         }
//         else {
//             bankBalance-=amount
//             console.log(`RS${amount} debited Sucessfully from your AC.Now your Bank Balance is ${bankBalance}`)
//         }
//     }
//     return {
//         check:checkBankBalance,
//         creadit:setBankBalance,
//         debit:withdrawBankBalance
//     }
// })();
// bank.check()
// bank.creadit(1000);
// bank.check()
// bank.debit(100)
// bank.check()

// factory Function Pattern
// function createProduct(name, price) {
//     let stock = 10;
//     return {
//         name,
//         price,
//         checkStock(){
//         console.log(`you have ${stock} quantity of ${name}`)
//         },
//         buy(qty) {
//             if (qty > stock) {
//                 console.error("We have only limited stock ");
//             }
//             else {
//                 stock -= qty;
//                 console.log(`Product Buying Sucessfully we have ${stock} quantity left of ${name}`);
//             }
//         },
//         refill(qty) {
//             stock += qty;
//             console.log(`Stock Refill Sucessfully now you have ${stock} Quantity left of ${name}`)
//         }
//     }
// }

// let iphone = createProduct('17 pro', 70000);
// iphone.buy(3);
// console.log(iphone.name)
// console.log(iphone.price)
// console.log(`------------------`)
// let biscuts = createProduct('tiger cookie', 10);
// biscuts.buy(3);
// console.log(biscuts.name)
// console.log(biscuts.price)



// Debouncing->ek delay k baad jb bhi aayega action ka reaction aayega

// function debouncing(fnc, delay) {
//     let timer;
//     return function (...args) {
//         clearTimeout(timer);
//         timer = setTimeout(function () {
//             fnc(...args)
//         },delay)
//     }
// }

// document.querySelector('input').addEventListener('input', debouncing(function () {
//     console.log('hey')
// }, 1000)
// );

// Throttle->interval pr chlega ,action agr hota rha and apne ek interval btaya to utne interval me apka event chlega

function throttle(fnc, delay) {
    let timer = 0;
    return function (...args) {
        let now = Date.now();
        if (now - timer >= delay) {
            timer = now;
            fnc(...args)
        }
    }
}


document.querySelector('input').addEventListener('input', throttle(function(){console.log('hey')}, 1000)
);