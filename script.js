'use strict'

let title = prompt('Как называется ваш проект?')
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые/Сложные/Интерактивные')
let screenPrice = +prompt('Сколько будет стоить данная работа?', '1200')
let adaptive = confirm('Нужен ли адаптив на сайте?')
let addService = prompt('Какой дополнительный тип услуги нужен?')
let addPrice = +prompt('Сколько это будет стоить?', '1000')
let addService2 = prompt('Какой дополнительный тип услуги нужен?')
let addPrice2 = +prompt('Сколько это будет стоить?', '1000')
let rollback = 1
let allServicePrices










const getAllServicePrices = function () {
  return addPrice + addPrice
}
const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
}



function getFullPrice() {
  return screenPrice + allServicePrices
}

let fullPrice = getFullPrice()


// const getTitle = function () {

//     return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase()
     
// }
const getTitle = (str) => {
    let text = str.trim()
    let result = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    return result
}

title = getTitle(title);


const getRollbackMessage = function (prise) {
  if (prise >= 30000){
    return 'Даем скидку в 10%';
  } else if (prise >= 15000 && prise < 30000){
    return'Даем скидку в 5%';
  } else if (prise < 15000 && prise >= 0){
    return'Скидка не предусмотрена';
  } else if (prise < 0){
    return'Что то пошло не так';
  }
}

function getServicePercentPrices() {
  return fullPrice - (fullPrice * (rollback / 100))
}

let servicePercentPrice = getServicePercentPrices()


allServicePrices = getAllServicePrices()
getAllServicePrices('allServicePrices')
// getRollbackMessage()
getServicePercentPrices()

// console.log(showTypeOf);
console.log(screens.length);
console.log(title);

