"use strict";

const books = document.querySelectorAll(".book");
const list = document.querySelectorAll(".books");

console.log(list);

console.log(books);

list[0].append(books[2]);

books[0].before(books[1]);
books[3].before(books[4]);

const bgi = document.getElementsByTagName("body");

bgi[0].style.backgroundImage = "url('./image/you-dont-know-js.jpg')";

const titles = document.querySelectorAll("h2");

console.log(titles);

titles[2].innerHTML = "Книга 3. this и Прототипы Объектов";
titles[2].style.color = "darkkhaki";

document.querySelectorAll("div.adv")[0].remove();

const chapter = document.querySelectorAll("li");

console.log(chapter);

chapter[7].after(chapter[9]);
chapter[9].after(chapter[12]);
chapter[12].after(chapter[14]);
chapter[14].after(chapter[10]);
chapter[10].after(chapter[11]);
chapter[11].after(chapter[13]);
chapter[13].after(chapter[15]);
chapter[15].after(chapter[8]);
chapter[8].after(chapter[16]);
chapter[37].after(chapter[45]);
chapter[45].after(chapter[39]);
chapter[39].after(chapter[40]);
chapter[40].after(chapter[38]);
chapter[38].after(chapter[42]);
chapter[42].after(chapter[43]);
chapter[43].after(chapter[41]);
chapter[41].after(chapter[44]);
chapter[44].after(chapter[46]);

const newChapter = chapter[7].cloneNode(true);

newChapter.textContent = "Глава 8: За пределами ES6";

chapter[55].after(newChapter);
