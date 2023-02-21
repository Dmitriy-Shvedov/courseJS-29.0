'use strict'

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true ,
  rollback : 10 ,
  allServicePrices: 0,
  fullPrice: 0, 
  servicePercentPrice: 0,
  addServices: {},

  start: function () {
    appData.asking()
    appData.addPrices()
    appData.getFullPrice() 
    appData.getServicePercentPrice()
    appData.getTitle(appData.title)
    appData.logger();
  },
   // проверка на число
  isNumber : function(num){
    return !isNaN(parseFloat(num)) && isFinite(num)
  },
  // Проверка на строку
  isString: function (string) {
    // return (typeof string === "string" || string instanceof String);
      return (typeof string === "string" || (typeof string == "object" && string.constructor === String) )
  },
  getFullPrice : function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices
    },
    getServicePercentPrice : function () {
    appData.servicePercentPrice =  appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
  },
 asking: function () {
  do{
    appData.title = prompt('Как называется ваш проект?', 'калькулятор')
  }while (!appData.isString(appData.title))

    for (let i = 0; i < 2; i++) {
      let name = ""
      let price = 0
      do{
        name = prompt('Какие типы экранов нужно разработать?')
      }while (!appData.isString(name))
        

      do{
        price = prompt('Сколько будет стоить данная работа?')
      }while (!appData.isNumber(price))

      appData.screens.push({ id: i, name: name, price: price })
    }



    for (let i = 0; i < 2; i++) {
      let name = ""
      let numb = 0

      do{
        name = prompt('Какой дополнительный тип услуги нужен?')
      }while (!appData.isString(name))

      do {
        numb = prompt('Сколько это будет стоить?', '1000')
      } while (!appData.isNumber(numb));
      
      // name = i++
      appData.addServices[name] = +numb
    }
    
    appData.adaptive = confirm('Нужен ли адаптив на сайте?')
  },
  addPrices: function () {
      for (let screen of appData.screens) {
        appData.screenPrice += +screen.price
    }

    for(let key in appData.addServices ) {
      appData.allServicePrices += appData.addServices[key]
    }
  },

  getTitle: (str) => {
    let title = str.trim()
    let result = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
    appData.title = result
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

  logger: function () {
    for (let key in appData) {
    console.log(key, appData[key])
    // console.log(appData.screens);
    
  }
}
}
appData.start()





