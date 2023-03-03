'use strict'

const title = document.getElementsByTagName('h1')[0];
let btn = document.getElementsByClassName('handler_btn')[0];
let plus = document.querySelector('.screen-btn');
let percentItem = document.querySelectorAll('.other-items.percent');
let numberItem = document.querySelectorAll('.other-items.number ');
let inputRange = document.querySelector('.rollback > .main-controls__range > input[type="range"]');
let span = document.querySelector('.rollback > .main-controls__range > span');
let total = document.getElementsByClassName('total-input')[0];
let totalCout = document.getElementsByClassName('total-input')[1];
let totalCoutOther = document.getElementsByClassName('total-input')[2];
let fullTotalCout = document.getElementsByClassName('total-input')[3];
let rollbackPrice = document.getElementsByClassName('total-input')[4];
let screen = document.querySelectorAll('.screen');

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true ,
  rollback : 10 ,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0, 
  servicePercentPrice: 0,
  serviceScreensPrice: 0,
  servicesPercent: {},
  servicesNumber: {},

  init: function () {
    appData.addTitle()
    if(appData.select == '' && appData.input == ''){
      // btn.disabled = true;
      btn.addEventListener('click', appData.start)
      alert('Не пусто')
    }else{
      // btn.disabled = false;
      alert('пусто')
    }
    
    // btn.addEventListener('click', appData.start)

    plus.addEventListener('click', appData.addScreenBlock)
    inputRange.addEventListener('input', appData.addinputRange);
  },
  addTitle: function(){
    document.title = title.textContent
  },
  start: function () {
    // alert('start')
    appData.addScreens()
    appData.addServices()
    appData.addPrices()
    appData.showResult()
    // appData.getServicePercentPrice()
    // appData.logger();
    console.log(appData);
  },
   // проверка на число
  // isNumber : function(num){
  //   return !isNaN(parseFloat(num)) && isFinite(num)
  // },
  // // Проверка на строку
  // isString: function (string) {
  //   console.log(appData.isString);
  //   // return (typeof string === "string" || string instanceof String);
  //     // return !isNaN(typeof string === "string" || (typeof string == "object" && string.constructor === String) )
  //     return !string.match(/^[0-9]+$/)
  // },
  showResult: function () {
    total.value = appData.screenPrice
    rollbackPrice.value = appData.servicePercentPrice 
    totalCoutOther.value = appData.servicePricesPercent + appData.servicePricesNumber
    fullTotalCout.value = appData.fullPrice
    totalCout.value = appData.serviceScreensPrice
  },
  addScreens: function () {
    let screen = document.querySelectorAll('.screen');

    screen.forEach(function (screen, index) {
      const select = screen.querySelector('select')
      const input = screen.querySelector('input')
      const selectName = select.options[select.selectedIndex].textContent

      // if(select.value !== '' && input.value !== ''){
      //   btn.disabled = false;
      // }else{
      //   btn.disabled = true;
      // }
      console.log(btn);
      console.log(input);
      appData.screens.push({ 
        id: index, 
        name: selectName, 
        price: +select.value * +input.value,
        count: +input.value
      })
      console.log(select.options[select.selectedIndex].textContent);
      console.log(input.value);
    });
    console.log(appData.screens);

  },
  addServices: function () {
    percentItem.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]')
      const label = item.querySelector('label')
      const input = item.querySelector('input[type=text]')
      if(check.checked){
        appData.servicesPercent[label.textContent] = +input.value

      }
    })
    numberItem.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]')
      const label = item.querySelector('label')
      const input = item.querySelector('input[type=text]')
      if(check.checked){
        appData.servicesNumber[label.textContent] = +input.value

      }
    })
    
  },
  addinputRange: function (event) {
  
  span.textContent = event.target.value;
  appData.rollback = span.textContent;
  },
  addScreenBlock: function () {
    const cloneScreen = screen[0].cloneNode(true)
    console.log(cloneScreen);
    screen[screen.length - 1].after(cloneScreen)
    // screen[screen.length - 1].defore(cloneScreen)
    console.log();
  },
  addPrices: function () {
      for (let screen of appData.screens) {
        appData.screenPrice += +screen.price
        appData.screenCount += +screen.count
        console.log(screen.count);
        
    }

    for(let key in appData.servicesNumber ) {
      appData.servicePricesNumber += appData.servicesNumber[key]
    }

    for(let key in appData.servicesPercent ) {
      appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
    }

    appData.fullPrice = +appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber

    
    appData.servicePercentPrice =  appData.fullPrice - (appData.fullPrice * (+appData.rollback / 100))
    
    appData.serviceScreensPrice = appData.cloneScreen * appData.screenCount
    console.log(appData.screenCount);
    console.log(appData.cloneScreen);
    console.log(appData.serviceScreensPrice);
    console.log(screen.count);

  },

}
appData.init()







