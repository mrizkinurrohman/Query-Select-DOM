// 1. Print title menggunakan interface document
const title = document.querySelector("title").textContent;
console.log(title);

// 2. Print size menggunakan interface window
const width_windows = window.innerWidth;
const height_windows = window.innerHeight;
console.log(
  `Height Screen: ${width_windows}, and Height Screen: ${height_windows}`
);

// 3. Print id yang ada di dalam element html
const logo = document.getElementById("logo");
console.log(logo);

// 4. Print class yang ada di dalam element html
const main = document.querySelector(".container-mainheader");
const mainheader = document.getElementsByClassName("container-mainheader");
console.log(main);
console.log(mainheader);

// 5. Print beberapa elemen beserta classnya
const parent = document.querySelector("main");
const parentchild = document.querySelector("form > div");
console.log(parent);
console.log(parentchild);
