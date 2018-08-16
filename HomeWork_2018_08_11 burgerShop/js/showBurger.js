



function checkRadio(radio)
{
    var radio = document.getElementsByName(radio.name);
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].type == "radio" && radio[i].checked) {
            showBurger(radio[i].value);
        }
    }
}



function checkBox(box) {
    var chbox;
    chbox=document.getElementById(box.id);
    if (chbox.checked) {
       document.getElementById(box.value).style ='display: initial;';
    }else{document.getElementById(box.value).style ='display:none;';}
}

function showBurger(choosen) {
    small.style = 'display:none;';
    large.style = 'display: none;';
    potato.style = 'display: none;';
    chesee.style = 'display: none;';
    salad.style = 'display: none;';
    if (choosen == 'small' || choosen == 'large') {
        mayoInp.disabled = false;
        spiceInp.disabled = false;

        document.getElementById('small').className = choosen;
        document.getElementById('large').className = choosen;
        document.getElementById('potato').className = choosen;
        document.getElementById('chesee').className = choosen;
        document.getElementById('salad').className = choosen;
        document.getElementById('mayo').className = choosen;
        document.getElementById('spice').className = choosen;
    }
        var radio = document.getElementsByName('burgerStuffing');
        for (var i = 0; i < radio.length; i++) {
            if (radio[i].type == "radio" && radio[i].checked) {
              document.getElementById(radio[i].value).style = 'display:initial;';
            }
        }



}

