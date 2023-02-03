'use strict'
let title = "Какое название проекта?";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 23;
let rollback = 1;
let fullPrice = 75;
let adaptive = true;

console.log(typeof(title));
console.log(typeof(fullPrice));
console.log(typeof(adaptive));
console.log(screens.length);
console.log("Стоимость верстки экранов " +  screenPrice + " рублей/долларов/гривен/юани");
console.log("Стоимость разработки сайта " +  fullPrice + " рублей/долларов/гривен/юани");
console.log(screens.toLowerCase().split());
console.log(fullPrice * (rollback/100));

title = prompt('Как называется ваш проект?');
console.log(title);
screens = prompt('Какие типы экранов нужно разработать?', 'Простые/Сложные/Интерактивные');
console.log(screens);
screenPrice = +prompt('Сколько будет стоить данная работа?', '1200');
console.log(screenPrice);
adaptive = confirm('Нужен ли адаптив на сайте?')
console.log(adaptive);
let addService = prompt('Какой дополнительный тип услуги нужен?');
console.log(addService);
let price = +prompt('Сколько это будет стоить?', '1000');
let addService2 = prompt('Какой дополнительный тип услуги нужен?');
let price2 = +prompt('Сколько это будет стоить?', '1000');
fullPrice = screenPrice + price + price2;
console.log(fullPrice);
let servicePercentPrice = +fullPrice - 1200;
console.log(Math.ceil(servicePercentPrice));

if (fullPrice >= 30000){
  alert('Даем скидку в 10%');
} 
if (fullPrice >= 15000){
  alert('Даем скидку в 5%');
} 
if (fullPrice < 15000 && fullPrice >= 0){
  alert('Скидка не предусмотрена');
} 
if (fullPrice == -1){
  alert('Что то пошло не так');
}

