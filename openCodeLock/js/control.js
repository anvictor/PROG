function inputArrayOnchange(){// подгонка размера поля под длину массива
    var change = arr.value.split('');
    console.log(change.length);
    arr.size =change.length+2;
}

function iterrationObj(iterNum, lastArr, iterSum, iterArr, iterRes) { //прототип объекта
    this.iterNum = iterNum; // следующий не проверенный индекс
    this.lastArr = lastArr; // остаток необработанного исходного массива
    this.iterSum = iterSum; // сумма меньше или равно summ
    this.iterArr = iterArr;// набор индексов меньше или равно summ
    this.iterRes = iterRes; // признак: результат, брак или достоин следующего цикла итеррации
}



 function calc() {
     var summ = document.getElementById('summ').value;
     var arr = document.getElementById('arr').value.split(',');
     var res=[], iterNum, numBer, iterSum, iterRes;

     arr = arrToNum(arr); // обезвредил пробелы

// первый проход создание массива объектов итеррации {Номер, Число,  Сумма, Массив[индексов], достоин след итеррации}
     iterStep=0;// номер итеррации
     arr.forEach(function (e,i) {
         if(e>summ){// если элемент больше суммы, то не достоин след итерр
             iterNum = iterStep;
             numBer = e;
             iterSum = '';
             var iterArr=[];
             iterRes = 'more';
             var iterElem = new iterrationObj(iterNum, numBer, iterSum, iterArr, iterRes);
             res.push(iterElem);
         }else if(e==summ){// если элемент == сумме записать и отметить резГотов
             iterNum = iterStep;
             numBer = e;
             iterSum = +e;//iterSum = +preRes.iterSum + e;
             var iterArr=[]; iterArr.push(i);
             iterRes = 'equal';
             var iterElem = new iterrationObj(iterNum, numBer, iterSum, iterArr, iterRes);
             res.push(iterElem);
         }else{// пре-Сумма меньше Элемента, записать на следующую итеррацию
             iterNum = iterStep;
             numBer = e;
             iterSum = +e;//iterSum = +preRes.iterSum + e;
             var iterArr=[]; iterArr.push(i);
             iterRes = 'less';
             var iterElem = new iterrationObj(iterNum, numBer, iterSum, iterArr, iterRes);
             res.push(iterElem);
         }

     });

     iterStep++; // следующие итеррации работают с новым массивом
     res.forEach(function (e,i) {
         if(res[i].iterRes=='less'){// если элемент достоин итеррации
             if (res[i+1].iterSum+e.iterNum > summ){// если сумма больше summ  то не достоин след итерр
                 res[i].iterRes ='more';
             }else if (res[i+1].iterSum+e.iterNum == summ){ //  если сумма == summ то записать и  отметить резГотов
                 res[i].iterNum = iterStep;
                 res[i].numBer = e.numBer;
                 res[i].iterSum = res[i+1].iterSum + e.numBer;
                 res[i].iterRes = 'equal';
                 var iterElem = new iterrationObj(res[i].iterNum, res[i].numBer, res[i].iterSum, res[i].iterArr, res[i].iterRes);
                 res.push(iterElem);
             }else{// Сумма < summ, записать на следующую итеррацию
                 res[i].iterNum = iterStep;
                 res[i].numBer = e.numBer;
                 res[i].iterSum = res[i+1].iterSum + e.numBer;
                 res[i].iterArr.push(i+1);
                 res[i].iterRes = 'less';
                 var iterElem = new iterrationObj(res[i].iterNum, res[i].numBer, res[i].iterSum, res[i].iterArr, res[i].iterRes);
                 res.push(iterElem);
             }
          }
     });
     console.dir(res);
     var html = res;
     document.getElementById('result').innerHTML = html;
 }

function arrToNum(arrStr){// преобразовать элементы в числа без пробелов
    var arrNum=[];
    arrStr.forEach(function(e,i) {arrNum[i]= +e;});
    return arrNum;
}

