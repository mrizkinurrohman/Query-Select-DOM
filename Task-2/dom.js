// menambahkan element baru ke dalam body
const p = document.createElement("p");

// menambahkan isi element menggunakan innerHTML
p.innerHTML = "Tulisan Pertama menggunakan InnerHTML";

// menambahkan isi element menggunakan textContent
p.textContent = "INSERT ELEMENT DOM";

// menambahkan ke body
document.body.appendChild(p);

// memberikan style element
const style = document.querySelector("p");
style.style.color = "red";
style.style.fontFamily = "Arial";
style.style.fontSize = "20px";
style.style.padding = "20px";

function addList() {
  const input = document.querySelector(".container > input[type='number']");

  const emptyList = input.value;

  const ul = document.querySelector(".container > ul");
  const arrli = [];

  for (let i = 0; i < emptyList; i++) {
    const li = document.createElement("li");
    arrli.push(li);
  }
  ul.append(...arrli);
}

function resetList() {
  const ul = document.querySelector(".container > ul");

  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  const li = document.createElement("li");
  li.textContent = "Default";
  ul.append(li);
}

const div = document.createElement("div");
div.className = "container";
const h1 = document.createElement("h1");
h1.textContent = "DOM Manipulation";
h1.className = "title";
const h2 = document.createElement("h2");
h2.textContent = "Hello World";
h2.className = "subtitle";

document.body.appendChild(div);
div.appendChild(h1);
div.appendChild(h2);

function insert(options) {
  const tex = "inserted text";
  const p = document.querySelector(".text");
  p.insertAdjacentText(options, tex);
}
