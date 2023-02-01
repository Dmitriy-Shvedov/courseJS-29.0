let title = "Какое название проекта?";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 23;
let rollback = 1;
let fullPrice = 75;
let adaptive = true;

console.log(title);
console.log(fullPrice);
console.log(adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " +  screenPrice + " рублей/долларов/гривен/юани");
console.log("Стоимость разработки сайта " +  fullPrice + " рублей/долларов/гривен/юани");
console.log(screens.toLowerCase());
console.log(fullPrice * (rollback/100));
