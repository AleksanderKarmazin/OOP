// ES 6
const methodName = 'setPice2'
class Product {
    // Вне метода constructor класса нельзя объявлять переменные 
    // или свойства, => это можно делать или в constructor или 
    // внутри других методов
    // Если класс принимает аргументы то ему нужен метод конструктор
    constructor(brand, price, discount){
        this._brand = brand,
        this.price = price,
        this.discount = discount
        // Нет логики есть только объявление свойств
    }
    //методы сразу же запишуться в прототип 
    getPriceWithDiscount(){
        return this.price * (100 - this.discount) / 100;
    }
    setPice(newPrice){
        return this.price = newPrice;
    }
    // статические методы - это те методы 
    // которые могут
    // 1)  вызываться отдельно 
    // от инстенсиации класса, отдельно от экземпляра класса 
    // 2) не имеют доступа к this 
    // 3) этот метод нельзя вызвать в экземпляре класса
    // 4) его не будет в прототипах, но будет в конструкторе constructor
    static plus(x,y){
        return x + y
    }
    // ВЫЗОВ 
    // Product.plus(1,2)
    // => 3
    // ПРИМЕР класс Date в JS  у которого есть много статических методов 

    // ===============================================
    // Вычесляемые свойства в классах 
    //     setPice(newPrice){
    //     return this.price = newPrice;
    // } ----------------------- > 
    [ 'setPice1' ](newPrice){
        this.price = newPrice;
    }
    [methodName](newPrice){
        this.price = newPrice;
    }

    // GETTERS & SETTERS
    // специальные функции которые ведёут себя как методы  
    // позволяют сокрыть логику взаимодействия со свойствами в объекте (классе)
    get brand () {
       return this._brand
    }
    set brand (brand) {
        return this._brand = brand
    }
}

const newProduct = new Product("Apple", 100, 15)
// метод constructor вызывется при создании класса 
// и записывает свойства которые мы указали
console.log(newProduct);


// ПОЧИТАТЬ про сокрытие методов или свойст при помощи  Symbol 
// 
// ===================================
//  НАССДНДОВАНИЕ 
// ===================================
class User {
    constructor(firstN, lastN){
        this.firstN = firstN;
        this.lastN = lastN;
        // Нет логики есть только объявление свойств
    }
    getFullName() {
        return `${this.firstN + "" + this.lastN}`
    }
}

class Customer extends User {
    constructor(firstN, lastN, memb){
        // Для того что бы унаследовать 
        // свойства и методы родительского класса 
        // мне !ВНУТРИ конструтора нужно вызвать метод super
        // передать туда те аргументы которые принимает 
        // родительский класс 
        super(firstN, lastN)
        this.memb = memb;
        // Нет логики есть только объявление свойств
    }

    // Если имя родительског метода и метода наследника совподают 
    // то применяется метод наследника у него приоритет выше
    // потому что метот наследника ближе в цепочке прототипов
    getFullName() {
        console.log('New get full name method');
    }
    // Для того что бы в класе вызвать метод родителя 
    // используем слово super
    perentFunc(){
        // console.log(super.getFullName());
        const parentRes = super.getFullName()
        return parentRes 
    }
}


const customer = new Customer(
    "Ali - Castomer", 
    "AlyLast - Castomer",
    "base"
     )
console.log(customer);