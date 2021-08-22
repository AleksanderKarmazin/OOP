// const denis = {
//     name: 'Denis',
//     age:30
//  }

// При вызове функций конструкторов
//  создаётся какой-то объект

// ВСТРОЕНЫЕ 

const str = new String('Hellow')
// console.log(str);

//  Это функция становится констркутором который
//  конструирует новый объект только после вызова оператора 
// new перед ней 
function Product(brand, price, discount) {
    // 1. Создаётся новый объект
    // 2. На этот объект устанавливается ссылка this 
    // 3. Функция возвращает объект
    // this.brand = "Apple"
    this.brand = brand,
    this.price = price,
    this.discount = discount,
    this.getPriceWithDiscount = function () {
        return this.price * (100 - this.discount) / 100;
    }

    console.log(this);
}

const apple = new Product("Apple", 100, 15);
const audi = new Product("Audi", 100, 15);
console.log(apple);
console.log(audi);

// Class  нужен для того чтобы создать шаблон объекта 
// и для того что бы плодить его многратно 

// Prorotype

// прототип - это свойство объекта которое содержит 
//  свойства и методы своих родителей , 
// и их родителей вверх по цепочке 

// Прототип нужен для того что бы пораждаемые объекты 
//  имели общий доступ к метододам и свойствам  


// Можно добавить этот метод в прототип 
// что бы не тянуть его каждлый раз 
// с создаваемым  объектом 

// Сначала машина JS  ищет метод в объекте а потом 
//  идёт по цепочке прототипов в поиске мотода 
// this.getPriceWithDiscount = function () {
//     return this.price * (100 - this.discount) / 100;
// }

Product.prototype.getPriceWithDiscountProto = function () {
    return this.price * (100 - this.discount) / 100;
}

Product.prototype.setPice = function (newPrice) {
    return this.price = newPrice
}


// ================================
// Наследование 

// Object.create
// Создаёт новый объект с 
// указанным объектом прототипа и свойствами 
const protoForObj = {
    sayHellow() {
        return"Hellow"
    }
}

const obj = Object.create(
    // Объект который будет прототипом 
    protoForObj

)

// clg =====> obj
// {}
// __proto__:
// sayHellow: ƒ sayHellow()
// __proto__: Object


const obj2 = Object.create(
    // Объект который будет прототипом 
    protoForObj,
    // Свойства 
    // Дискриптор {} 
    { 
        first_name: {
            value: "Denis"
        }
    }
)

// Функциональное и прототипное наследование 

function User(firstN, lastN) {
    this.firstN = firstN;
    this.lastN = lastN;

}

User.prototype.getFuLN = function () {
    return `${this.firstN + "" + this.lastN}`
}
User.prototype.getSay = function () {
    return `Hellow ${this.firstN + "" + this.lastN}`
}

const user = new User("Ali", "AlyLast")

// Customer 
function Customer(firstN, lastN, memb) {
    // Функциональное наследование 
    // call вызывает функцию с заданным контекстом 
    User.call(this, firstN, lastN )
    // Тоже самое с мжеством аргументов 
    // User.apply(this, arguments )
    // ======================================
    //  Таким образом протип не забрался из USER  
    // при функциональном наследовании 
    // ====================================== 
    this.memb = memb
}

const customer = new Customer(
    "Ali - Castomer", 
    "AlyLast - Castomer",
     "base"
     )
    // ======================================
    //  Таким образом протип не забрался из USER  
    // при функциональном наследовании 
    // ====================================== 

// !!!!!!!!!! Свои методы только после этих двух строчек 

Customer.prototype = Object.create(User.prototype)
// теряется конструктор - нужно добавлять 
Customer.prototype.constructor = Customer;

// !!!!!!!!!! Свои методы только после этих двух строчек 
Customer.prototype.MB = function () {
    return this.memb.toUpperCase()
}


const customer2 = new Customer(
    "Ali - Castomer", 
    "AlyLast - Castomer",
     "base"
     )

    // // clg =====> 
    // customer2
    //  Customer {firstN: "Ali - Castomer", lastN: "AlyLast - Castomer"}
    //  firstN: "Ali - Castomer"
    //  lastN: "AlyLast - Castomer"
    //  __proto__: User
    //  __proto__:
    //  getFuLN: ƒ ()
    //  getSay: ƒ ()
    //  constructor: ƒ User(firstN, lastN)
    //  __proto__: Object

