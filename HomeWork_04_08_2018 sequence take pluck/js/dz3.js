// ВОПРОС 1:
// Напиши функцию создания генератора sequence(start, step). Она при вызове возвращает другую функцию-генератор, которая при каждом вызове дает число на 1 больше, и так до бесконечности. Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора. Шаг можно не указывать, тогда он будет равен одному. Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.


try {

    var sequence = function (start, step) {
        var a = start;
        return function () {
            a += step;
            return a - step;

        }
    }

    var generator = sequence(10, 3);
    var generator2 = sequence(7, 1);
    console.log(generator()); // 10 !!!!!!
    console.log(generator()); // 13
    console.log(generator2()); // 7
    console.log(generator()); // 16
    console.log(generator2()); // 8


// Также, нужна функция take(gen, x) которая вызвает функцию gen заданное число (x) раз и возвращает массив с результатами вызовов.

    function take(gen, x) {
        var resArr = [];
        for (var i = 0; i < x; i++) {
            resArr.push(gen())
        }
        return resArr;
    }


    var generator3 = sequence(0, 2);
// с учетом вызовов ранее
    console.log(take(generator, 3)); // [19, 22, 25]

// с учетом вызовов ранее
    console.log(take(generator2, 4)); // [9, 10, 11, 12]

// вызов впервые
    console.log(take(generator3, 5)); // [0, 2, 4, 6, 8 ]


// ВОПРОС 2:
// напиши функцию pluck, которая берет массив объектов и возвращает массив значений определенного поля:


    var characters = [
        {'name': 'barney', 'age': 36},
        {'name': 'fred', 'age': 40}
    ];

    function pluck(string, key) {
        var resArr = [];
        for (let i = 0; i < string.length; i++) {
            let record = string[i];
            if (!record[key]) {
                return 'Такого ключа нет'
            }
            resArr.push(record[key]);
        }
        return resArr;
    }

    console.log(pluck(characters, 'name')); // ['barney', 'fred']
    console.log(pluck(characters, 'age')); // [36, 40]
    console.log(pluck(characters, 'nage')); // Такого ключа нет

} catch (e) {
    console.log('Случилась ошибка - '+ e + ', надо погуглить!');

    window.open("http://www.google.com.ua/search?source=ig&hl=ru&q="+e);
}
console.log("скрипт не «падает»");
// при передаче несуществующего ключа, возвращать ошибку типа (Такого ключа нет)

// РАЗОБРАТЬ
// Работа с ошибками (try catch), и сама функция Error
//
// debugger;



// var a = 10;
// var b;
// if(true){
//     debugger;
//     console.log(a);
// }