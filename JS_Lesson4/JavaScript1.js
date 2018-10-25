//Практика:
//1. Создать форму с полями ввода: цена, бренд, модель, кнопка "отправить"(submit)
//Отменить отправку формы и вывести введенные в форму данные в < div > или < textarea > ниже
//Очистить поля ввода.
//Все события логировать через console.log() с параметрами
//
//2. Создать 2 кнопки: "Кнопка событие", "Просто кнопка"
//По нажатию на кнопку событие, событие привязывается к просто кнопке, названия кнопок меняеются местами,
//    событие отвязывается от кнопки событие и привязывается к другой.
//Все события вешать после полной загрузки документа(DOMContentLoaded).
//
//3. Повесить событие на весь документ(body), по клику в любое место документа, в документе вывести
//координаты нажатия(event.clientX / clientY)

//1) ****************************************************************************************************************************************

//document.getElementById('Send').addEventListener('click', def);

//function def(event) {

//    document.getElementById('res').innerHTML = document.getElementById('res').innerHTML + document.getElementById('Price').value + '<br>';
//    document.getElementById('res').innerHTML = document.getElementById('res').innerHTML + document.getElementById('Brand').value + '<br>';
//    document.getElementById('res').innerHTML = document.getElementById('res').innerHTML + document.getElementById('Model').value + '<br>';

//    event.preventDefault();
//}

//2) ****************************************************************************************************************************************

//document.getElementsByTagName('body')[0].addEventListener('DOMDocumentLoaded', doclod);

//function doclod() {
//document.getElementById('EventButton').addEventListener('click', ex2);
//}

//function ex2() {
//temp = document.getElementById('EventButton').innerHTML;
//document.getElementById('EventButton').innerHTML = document.getElementById('CommonButton').innerHTML;
//document.getElementById('CommonButton').innerHTML = temp;
//if (this.id == 'EventButton') {
//document.getElementById('EventButton').removeEventListener('click', ex2);
//document.getElementById('CommonButton').addEventListener('click', ex2);
//}
//else {
//document.getElementById('CommonButton').removeEventListener('click', ex2);
//document.getElementById('EventButton').addEventListener('click', ex2);
//}
//}

//3) ****************************************************************************************************************************************

document.getElementsByTagName('html')[0].addEventListener('click', doclod);

function doclod(event) {
    event.clientX;
    event.clientY;
    console.log(event);
    document.getElementById('ex3').innerHTML = event.clientX + ' : ' + event.clientY + '<br>';
}
