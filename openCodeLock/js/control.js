function inputArrayOnchange(){// подгонка размера поля под длину массива
    var change = arr.value.split('');
    arr.size =change.length+2;
}

function arrToNum(arrStr){// преобразовать элементы в числа без пробелов
    var arrNum=[];
    arrStr.forEach(function(e,i) {arrNum[i]= +e;});
    return arrNum;
}


function iterrationObj(iterNum, lastArr, iterSum, iterArr, iterMark) { //прототип объекта
    this.iterNum = iterNum; // следующий не проверенный индекс
    this.lastArr = lastArr; // остаток необработанного исходного массива
    this.iterSum = iterSum; // сумма меньше или равно summ
    this.iterArr = iterArr;// набор индексов меньше или равно summ
    this.iterMark = iterMark; // признак: результат, брак или достоин следующего цикла итеррации
}


/*
* В нулевую итеррацию создаем рабочий массив объектов medRes
* В него входят все значения исходного массива с добавленными свойствами и оценками
* */
function firstPrepare(arr, summ){// подготовка данных нулевая итеррация
    var medRes=[], iterSum=0, iterMark;

    for (var i=0; i < arr.length; i++){
        var lastArr = [], iterArr=[];// каждому n-ному элементу соответствует остаток от n+1 до конца исходного массива
        for(var j = i+1; j<arr.length; j++){
            lastArr.push(arr[j]);
            if (!iterArr[0]) {
                iterArr[0] = j
            }
        }
        iterSum = arr[i];
        if(arr[i]==summ){iterMark = 'equal';}else if(arr[i]>summ){iterMark = 'more';}else{iterMark = 'less';}

        medRes.push(new iterrationObj(i, lastArr, iterSum, iterArr, iterMark));
    }
    return(medRes);
}

function mainIterration(medRes) {// основной конвейер вычисления
    var res=[];
   while (true) {
       var checkingElement = [];
       checkingElement = medRes.shift();
       if(checkingElement){
           if (checkingElement.iterMark == 'more') {// выброшен элемент больше summ
           }else if(checkingElement.iterMark == 'equal'){ // выброшен элемент равный summ он так же записан в ответ
               res.push(checkingElement.iterArr-1);
           }else {
               // к накопленной сумме прибавим следующий элемент
               // дается оценка меньше равно или больше.
               // больше, сдвинуть стек на один элемент с потерей этого и положить в конец конвейера.
               // равно, записать в ответ, сдвинуть индекс проверки на 1 элемент и положить в конец конвейера
               // меньше, сдвинуть индекс и положить в конец конвейера
               checkingElement.iterSum +=100;

           }
    }else {// если конвейер опустел-стоп
           return res;
       }
   }

}

 function calc() {
     var summ = +document.getElementById('summ').value;
     var arr = document.getElementById('arr').value.split(',');
    var res, medRes;// промежуточный результат после итерации
     // обезвредим пробелы
     arr = arrToNum(arr);
     // первое приготовление данных
     medRes=firstPrepare(arr, summ);
     console.dir(medRes);

     // основные вычислительные итеррации
     res = mainIterration(medRes);





     var html = res;
     document.getElementById('result').innerHTML = html;
 }




