'use strict'

let title 
let screens 
let screenPrice 
let adaptive 
let rollback = 10
let allServicePrices
let fullPrice
let servicePercentPrice
let addService 
let addService2 

// проверка на число
const isNumber = function(num){
  return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
  title = prompt('Как называется ваш проект?', 'калькулятор')
  screens = prompt('Какие типы экранов нужно разработать?', 'Простые/Сложные/Интерактивные')

  do{
    screenPrice = prompt('Сколько будет стоить данная работа?')
  }while (!isNumber(screenPrice))
  
  adaptive = confirm('Нужен ли адаптив на сайте?')
}

const getAllServicePrices = function () {
  let sum = 0
  let numb = 0
  for (let i = 0; i < 2; i++) {

    if (i === 0) {
        addService = prompt('Какой дополнительный тип услуги нужен?', 'попап')
    } else if (i === 1) {
        addService2 = prompt('Какой дополнительный тип услуги нужен?', 'модалка')
    }

    do {
      numb = prompt('Сколько это будет стоить?', '1000')
    } while (!isNumber(numb));
    sum += +numb;
    
  }
  return sum
}

const getFullPrice = function () {
  return +screenPrice + +allServicePrices
}

const getServicePercentPrice = function () {
  return fullPrice - (fullPrice * (rollback / 100))
}
console.log(getServicePercentPrice);


const getTitle = (str) => {
  let title = str.trim()
  let result = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
  return result
}

const getRollbackMessage = function (prise) {
  if (prise >= 30000) {
    return 'Даем скидку в 10%'
  } else if (prise >= 15000 && prise < 30000) {
    return 'Даем скидку в 5%'
  } else if (prise < 15000 && prise >= 0) {
    return 'Скидка не предусмотрена'
  } else {
    return 'Что то пошло не так'
  }
}
asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice() 
servicePercentPrice = getServicePercentPrice()
title = getTitle(title);

console.log('allServicePrices', allServicePrices);

console.log(getRollbackMessage(fullPrice))
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);


console.log(screens.lenght);
console.log(servicePercentPrice)
console.log('Стоимость верстки экранов ' + screenPrice + ' юани и стоимсоть разработки сайта ' + fullPrice + ' юани');

