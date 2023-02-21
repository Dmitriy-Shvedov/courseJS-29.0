'use strict'

const appData = {
 title: '',
 screens: '',
 screenPrice: 0,
 adaptive: true ,
 rollback : 10 ,
 allServicePrices: 0,
 fullPrice: 0,
 servicePercentPrice: 0,
 addService: ''  ,
 addService2: '' ,
   // проверка на число
  isNumber : function(num){
    return !isNaN(parseFloat(num)) && isFinite(num)
    },
    getFullPrice : function () {
    return +appData.screenPrice + appData.allServicePrices
    },
    getServicePercentPrice : function () {
    appData.servicePercentPrice =  appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
  },
 asking : function () {
  appData.title = prompt('Как называется ваш проект?', 'калькулятор')
  appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые/Сложные/Интерактивные')

  do{
      appData.screenPrice = prompt('Сколько будет стоить данная работа?')
    }while (!appData.isNumber(appData.screenPrice))
    
    appData.adaptive = confirm('Нужен ли адаптив на сайте?')
  },
  getAllServicePrices : function () {
    let sum = 0
    let numb = 0
    for (let i = 0; i < 2; i++) {

      if (i === 0) {
          appData.addService = prompt('Какой дополнительный тип услуги нужен?', 'попап')
      } else if (i === 1) {
          appData.addService2 = prompt('Какой дополнительный тип услуги нужен?', 'модалка')
      }

      do {
        numb = prompt('Сколько это будет стоить?', '1000')
      } while (!appData.isNumber(numb));
      sum += +numb;
      
      }
      return sum
  },

  getTitle : (str) => {
    let title = str.trim()
    let result = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
    return result
  },
  getRollbackMessage : function (prise) {
    if (prise >= 30000) {
      return 'Даем скидку в 10%'
    } else if (prise >= 15000 && prise < 30000) {
      return 'Даем скидку в 5%'
    } else if (prise < 15000 && prise >= 0) {
      return 'Скидка не предусмотрена'
    } else {
      return 'Что то пошло не так'
    }
  },
  start: function () {
    appData.asking()
    appData.allServicePrices = appData.getAllServicePrices()
    appData.fullPrice = appData.getFullPrice() 
    appData.getServicePercentPrice()
    appData.title = appData.getTitle(appData.title)
    appData.logger();
  },

  logger: function () {
    for (let key in appData) {
    console.log(key, appData[key])
  }
}
}
appData.start()





