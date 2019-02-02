window.onload = () => { // запуск после полной загрузки страницы

	function searchPalindrom(str) { //функция сравнения
		let leftPoint = 0, rightPoint = str.length - 1; // числовые переменные указателей
// в цикле сравниваем символы в строке от обоих концов к центру
// пока левый казатель меньше правого
		while(leftPoint < rightPoint) {
			if(str[leftPoint] !== str[rightPoint]) {
				return false; // если символы не равны передаем false и выходим
			}
			leftPoint++; // иначе увеличиваем
			rightPoint--; // и уменьшаем, сдвигаем указатели к центру
		}

		return true; // сравнили всю строку и возвращаем true
	};

	let str = document.querySelector('#string'); // ссылка на строку
	let searchBtn = document.querySelector('#search'); // ссылка на кнопку

	searchBtn.onclick = function() { // обработчик нажатия
		let substring = str.value; //получаем текст
		if(substring !== '') { // проверяем не пустая ли
			substring = substring.replace(/\s|!|,|\*|\?|-|\./g, ''); //убираем лишние символы из строки
			substring = substring.toLowerCase(); // приводим к нижнему регистру
			if(searchPalindrom(substring)) { //если вернулся true
				alert('это палиндром');

			} else { //если вернулся false
				alert('это не палиндром');
			}
		}
	}
}