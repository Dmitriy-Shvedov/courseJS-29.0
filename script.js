'use strict'

let title = prompt('как называется ваш проект?')
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые/Сложные/Интерактивные')
let screenPrice = +prompt('Сколько будет стоить данная работа?', '1200')
let adaptive = confirm('Нужен ли адаптив на сайте?')
let addService = prompt('Какой дополнительный тип услуги нужен?')
let addPrice = +prompt('Сколько это будет стоить?', '1000')
let addService2 = prompt('Какой дополнительный тип услуги нужен?')
let addPrice2 = +prompt('Сколько это будет стоить?', '1000')
let rollback = 1











const getAllServicePrices = function () {
  return addPrice + addPrice
}

const allServicePrices = getAllServicePrices()

function getFullPrice() {
  return screenPrice + allServicePrices
}

let fullPrice = getFullPrice()


const getTitle = (str) => {
    let title = str.trim()
    let result = title.str[0].toUpperCase() + str.substring(1).toloweCase()
    return result
}

title = getTitle(title);

function getServicePercentPrices() {
  return fullPrice - (fullPrice * (rollback / 100))
}

let servicePercentPrice = getServicePercentPrices()



// if (fullPrice >= 30000){
//   alert('Даем скидку в 10%');
// } else if (fullPrice >= 15000 && fullPrice < 30000){
//   alert('Даем скидку в 5%');
// } else if (fullPrice < 15000 && fullPrice >= 0){
//   alert('Скидка не предусмотрена');
// } else if (fullPrice < 0){
//   alert('Что то пошло не так');
// }

getAllServicePrices('allServicePrices')
// getRollbackMessage()
getServicePercentPrices()

// console.log(showTypeOf);
console.log(screens.length);
console.log(title);

