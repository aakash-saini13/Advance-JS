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


// module method

let bank = (function () {
    let bankBalance = 0;
    function checkBankBalance() {
        console.log(`Your Bank Balance is ${bankBalance}`)
    }
    function setBankBalance(amount) {
        bankBalance += amount;
        console.log(`Amount Creadit Sucessfuly in your Acc. Your Current bankBalance is ${bankBalance}`)
    }
    function withdrawBankBalance(amount) {
        if (amount > bankBalance) {
            console.error(`Insuffucent Bank Balance You have only RS${bankBalance}`)
        }
        else {
            bankBalance-=amount
            console.log(`RS${amount} debited Sucessfully from your AC.Now your Bank Balance is ${bankBalance}`)
        }
    }
    return {
        checkBankBalance,
        setBankBalance,
        withdrawBankBalance
    }
})();
bank.checkBankBalance()
bank.setBankBalance(1000);
bank.checkBankBalance()
bank.withdrawBankBalance(100)
bank.checkBankBalance()