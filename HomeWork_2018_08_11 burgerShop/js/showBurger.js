

/*
*  была ли нажата радиокнопка Любая?
* если да, то отправляем на отрисовку
*/

function checkRadio(radio)
{
    var radio = document.getElementsByName(radio.name);
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].type == "radio" && radio[i].checked) {
            showBurger(radio[i].value);
        }
    }
}


/*
* Если нажат чекбокс
*/

function checkBox(box) {
    var chbox;
    chbox=document.getElementById(box.id);
    if (chbox.checked) {
       document.getElementById(box.value).style ='display: initial;';
       if (box.value=='mayo'){hamburger.addTopping(Hamburger.TOPPING_MAYO);}
        if (box.value=='spice'){hamburger.addTopping(Hamburger.TOPPING_SPICE);}
        writeResult();
    }else{
        document.getElementById(box.value).style ='display:none;';
        if (box.value=='mayo'){hamburger.removeTopping(Hamburger.TOPPING_MAYO);}
        if (box.value=='spice'){hamburger.removeTopping(Hamburger.TOPPING_SPICE);}
        writeResult();
    }
}

function showBurger(choosen) {
    small.style = 'display:none;';
    large.style = 'display: none;';
    potato.style = 'display: none;';
    cheese.style = 'display: none;';
    salad.style = 'display: none;';
    if (choosen == 'small' || choosen == 'large') {
        mayoInp.disabled = false;
        spiceInp.disabled = false;
        outputText.style = 'visibility:visible;';
        //small.className = choosen;
        //large.className = choosen;
        potato.className = choosen;
        cheese.className = choosen;
        salad.className = choosen;
        mayo.className = choosen;
        spice.className = choosen;
    }
    var radioSize = document.getElementsByName('burgerSize');
    var ii=0,jj=0;
    for ( var i = 0; i < radioSize.length; i++) {
        if (radioSize[i].type == "radio" && radioSize[i].checked) {
            ii=i;
    }
    }
    var radioStuffing = document.getElementsByName('burgerStuffing');
    for (var j = 0; j < radioStuffing.length; j++) {
         if (radioStuffing[j].type == "radio" && radioStuffing[j].checked) {
             jj=j;
          document.getElementById(radioStuffing[j].value).style = 'display:initial;';
        }
    }
    var stuffingRequest='', sizeRequest='',STUFFINgREQUEST='', SIZeREQUEST='';
    stuffingRequest=radioStuffing[jj].value;
    sizeRequest=radioSize[ii].value;
    STUFFINgREQUEST= 'STUFFING_'.concat(stuffingRequest.toUpperCase());
    SIZeREQUEST= 'SIZE_'.concat(sizeRequest.toUpperCase());

    hamburger.changeStuffing(Hamburger[STUFFINgREQUEST]);
    hamburger.changeSize(Hamburger[SIZeREQUEST]);
    writeResult();

}

function writeResult(){
    var res = 'Цена: '+hamburger.calculatePrice()+'  &#8366; ; Калорийность: '+hamburger.calculateCalories()+'  калорий.';
    document.getElementById("outputText").innerHTML = res;

}

// сменить начинку
//hamburger.changeStuffing(Hamburger.STUFFING_SALAD);
// сменить размер
//hamburger.changeSize(Hamburger.SIZE_LARGE);
