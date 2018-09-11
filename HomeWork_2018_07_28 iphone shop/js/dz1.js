
// Функция торговля
function sale(){
	
	var price_mem, price_col, price, col, x; 
	var memory = prompt('Сколько ГБ памяти  в телефоне Вы хотите?');
	
	while(!price_mem){
		
		if(memory==32){
			price_mem=18000;
		}else if(memory==128){
			price_mem=19500;
		}else if(memory==256){
			price_mem=21500;
		}else{
			memory = prompt('Сколько ГБ памяти  в телефоне Вы хотите?\nПодсказка, число (32-128-256)');
		}
	}
	

	var color = prompt('Какого цвета телефон Вы хотите?');
	while(!price_col){
		if(color=='"Чёрный оникс"'){
			price_col=40;
			col='"Чёрный оникс"';
			x=-31;
		}else if(color=='Чёрный оникс'){
			price_col=40;
			col='"Чёрный оникс"';
			x=-31;
		}else if(color=='"Черный оникс"'){
			price_col=40;
			col='"Чёрный оникс"';
			x=-31;
		}else if(color=='Черный оникс'){
			price_col=40;
			col='"Чёрный оникс"';
			x=-31;
		}else if(color=='оникс'){
			price_col=40;
			col='"Чёрный оникс"';
			x=-31;
		}else if(color=='Чёрный'){
			price_col=60;
			col='Чёрный';
			x=784;
		}else if(color=='Черный'){
			price_col=60;
			col='Чёрный';
			x=784;
		}else if(color=='Серебристый'){
			price_col=80;
			col='Серебристый';
			x=578;
		}else if(color=='Золотой'){
			price_col=100;
			col='Золотой';
			x=370;
		}else if(color=='"Розовое золото"'){
			price_col=120;
			col='"Розовое золото"';
			x=162;
		}else if(color=='Розовое золото'){
			price_col=120;
			col='"Розовое золото"';
			x=162;
		}else{color = prompt('Какого цвета телефон Вы хотите?\n"Чёрный оникс", Чёрный, Серебристый, Золотой, "Розовое золото"?\nПо умолчанию - Чёрный', 'Чёрный');}
	}
	price = price_mem+price_col;

	document.write('<br>Вы выбрали память - ', memory, ' Гб, Цена = ', price_mem, ' грн.' );
	document.write('<br>Вы выбрали цвет - ', col, ', Цена = +', price_col, ' грн.' );
	document.write('<br>Цена телефона = ', price, ' грн.');
	document.write('<div style="background-image: url(img/iphone.jpg);    width: 135px;    height: 291px;    background-position: '+x+'px 0px;"></div>');

	


}



// описание функции отрисовки контента после загрузки окна браузера
var _show_condition = function(){ document.write('<h1> Задание:</h1>	<p>Спросить покупателя мобильного телефона память и цвет.<br>		Разная память и цвет - разная цена.<br>		Обработать ошибочные нажатия и отказы.	</p>	<a onclick="sale()" href="#"> <button>Старт покупки!</button></a>');};

if(window.LOADED)
    _show_condition();
else if (window.addEventListener)
    window.addEventListener('load', _show_condition, false); 
else if (window.attachEvent)
    window.attachEvent('onload', _show_condition);

