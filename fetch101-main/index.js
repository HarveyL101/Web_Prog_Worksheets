/*
 * This is index.js
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

async function showMessage(elem, url) {
  const response = await fetch(url);
  const content = await response.text();
  elem.textContent = content;
}

async function showList(elem, url) {
  const response = await fetch(url);
  const content = await response.json();

  content.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    elem.appendChild(listItem);
  });
}

async function startShowingMessage(elem, url) {
  setInterval(async () => {
    const response = await fetch(url);
    const content = await response.text();
    elem.textContent = content;
  }, 1000);
}

async function handleError(elem, url) {
  const response = await fetch(url);
  if(response.ok) {
    const content = await response.text();
    elem.textContent = content;
  } else {
    elem.textContent = "OH DEAR";
  }
}

async function drawBox(canvas, url) {
  const ctx = canvas.getContext('2d');
  let x, y;

  setInterval(async () => {
    const response = await fetch(url);
    const content = await response.json();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'black';
    ctx.fillRect(content.x, content.y, 10, 10);
  }, 1000);
}
