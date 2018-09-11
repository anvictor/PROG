/**
 * Класс, объекты которого описывают параметры гамбургера.
 *
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 * @throws {HamburgerException}  При неправильном использовании
 */
function Hamburger(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppingArr = [];
    this.throws = 'Охрана, Отмена!';
}



/* Размеры, виды начинок и добавок */

Hamburger.SIZE_SMALL = {'name':'small', 'price':50, 'calories':20};
Hamburger.SIZE_LARGE = {'name':'large', 'price':100, 'calories':40};
Hamburger.STUFFING_CHEESE = {'name':'cheese', 'price':10, 'calories':20};
Hamburger.STUFFING_SALAD = {'name':'salad', 'price':20, 'calories':5};
Hamburger.STUFFING_POTATO = {'name':'potato', 'price':15, 'calories':10};
Hamburger.TOPPING_MAYO = {'name':'mayo', 'price':20, 'calories':5};
Hamburger.TOPPING_SPICE = {'name':'spice', 'price':15, 'calories':0};

/**
 * Добавить добавку к гамбургеру. Можно добавить несколько
 * добавок, при условии, что они разные.
 *
 * @param topping     Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.addTopping = function (topping) {
    if(this.toppingArr[0]!==topping){
        this.toppingArr.push(topping);
        console.log('добавлен '+ this.toppingArr[0].name);
    }else{
        console.log(this.throws);
        console.log('Повтор '+ this.toppingArr[0].name+' можно только 1.');
    }
};

/*
* Изменение размера
 */
Hamburger.prototype.changeSize = function(size){
    delete this.size;
    this.size = size;
    console.log('стал размер '+ this.size.name);
};

/*
* Изменение начинки
 */
Hamburger.prototype.changeStuffing = function(stuffing){
    delete this.stuffing;
    this.stuffing = stuffing;
    console.log('Начинка стала '+ this.stuffing.name);
};

/**
 * Убрать добавку, при условии, что она ранее была
 * добавлена.
 *
 * @param topping   Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.removeTopping = function (topping){
    for(i=0;i<this.toppingArr.length;i++){
        if(this.toppingArr[i]===topping){
            console.log('убираем '+this.toppingArr[i].name);
            this.toppingArr.splice(i, 1);
        }else{console.log(this.throws + ' Нельзя удалить то, что вообще не выбрал!')}
    }
};

/**
 * Получить список добавок.
 *
 * @return {Array} Массив добавленных добавок, содержит константы
 *                 Hamburger.TOPPING_*
 */
Hamburger.prototype.getToppings = function (){
    var Array = [];
    this.toppingArr.forEach(function (value, index) {
        Array[index]=value.name;
    });
    return Array;
};

/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function () {
    return  this.size;
};

/**
 * Узнать начинку гамбургера
 */
Hamburger.prototype.getStuffing = function () {
    return this.stuffing.name;
};

/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
Hamburger.prototype.calculatePrice = function (){
    var priceTotal=0;
    this.toppingArr.forEach(function (value) {
        priceTotal = priceTotal + value.price;
    });
    priceTotal = priceTotal + this.stuffing.price+ this.size.price;
    return priceTotal;
};

/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Hamburger.prototype.calculateCalories = function (){
    var calorinessTotal=0;
    this.toppingArr.forEach(function (value) {
        calorinessTotal = calorinessTotal + value.calories;
    });
    calorinessTotal = calorinessTotal + this.stuffing.price+ this.size.calories;
    return calorinessTotal;
};

/**
 * Представляет информацию об ошибке в ходе работы с гамбургером.
 * Подробности хранятся в свойстве message.
 * @constructor
 */
function HamburgerException () {
    true;
}



// маленький гамбургер с начинкой из сыра

    var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);


// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// сменить начинку
hamburger.changeStuffing(Hamburger.STUFFING_SALAD);
// сменить размер
hamburger.changeSize(Hamburger.SIZE_LARGE);
// спросим сколько там калорий
//console.log("Calories: %f", hamburger.calculateCalories());
console.log("Calories:", hamburger.calculateCalories());
// сколько стоит
console.log("Price: %f", hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// А сколько теперь стоит?
console.log("Price with sauce: %f", hamburger.calculatePrice());
// Проверить, большой ли гамбургер?
console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
console.log("Stuffing: %s", hamburger.getStuffing() ); // -> Stuffing
// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log("Have %d toppings", hamburger.getToppings().length); // 1


// не передали обязательные параметры
    var h2 = new Hamburger(); // => HamburgerException: no size given

// передаем некорректные значения, добавку вместо размера
var h3 = new Hamburger(Hamburger.TOPPING_SPICE, Hamburger.TOPPING_SPICE);
// => HamburgerException: invalid size 'TOPPING_SAUCE'

// добавляем много добавок
var h4 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log(hamburger.getToppings());
