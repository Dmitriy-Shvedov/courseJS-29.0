'use strict'

//book
let order = document.querySelectorAll('.book')
let bodyImg = document.querySelector('body')
let orderH2 = document.querySelectorAll('.book > h2 > a')
const del = document.querySelector('.adv')
let orderlist = document.querySelectorAll('.book > ul > li')
let clonelist = document.querySelectorAll('.chapter')

const clonelistElem = clonelist[0].cloneNode(true)

order[0].before(order[1]);
order[5].after(order[2]);
order[3].before(order[4]);

orderH2[4].textContent = 'Книга 3. this и Прототипы Объектов';
bodyImg = document.body.style.backgroundImage = "url('../book/image/you-dont-know-js.jpg')";
del.remove();

orderlist[4].before(orderlist[6]);
orderlist[4].before(orderlist[8]);
orderlist[48].before(orderlist[55]);
orderlist[51].before(orderlist[48]);
orderlist[9].after(orderlist[2]);
orderlist[53].after(orderlist[51]);

orderlist[25].append(clonelistElem)

clonelistElem.textContent = 'Глава 8: За пределами ES6'


console.dir(order);
console.log(orderH2);
console.log(del);
console.log(orderlist);
console.log(orderlist[6]);




