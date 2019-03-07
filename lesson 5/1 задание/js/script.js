let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    nextEl = document.createElement('li'),
    title = document.getElementById('title'),
    adv = document.querySelector('.adv'),
    column = document.querySelectorAll(".column");
    askPrompt =prompt("Как вы относитесь к Apple?","");
    prompt = document.getElementById('prompt');

menu.insertBefore(menuItem[2], menuItem[1]);
nextEl.classList.add('menu-item');
menu.appendChild(nextEl);
nextEl.innerHTML ="Пятый пункт";

document.body.style.background = "url(../img/apple_true.jpg) center center / cover no-repeat" ;

title.innerHTML = "Мы продаем только <b>подлинную</b> технику Apple";
column[1].removeChild(adv);
prompt.innerHTML = "<p>"+askPrompt+"</p>";

console.log(menuItem);
console.log(menu);
console.log(adv);
console.log(column[1]);
console.log(askPrompt);
