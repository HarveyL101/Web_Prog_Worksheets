/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

// add your functions here

function replaceText(elem, str) {
    elem.textContent = str;
}

function addTextTo(elem, str) {
    elem.textContent += str;
}

function moreBears() {
    const animals = document.querySelector("#animals");

    animals.src = "http://placebear.com/400/200";
    animals.alt = "A bear.";
    animals.title = "A BEAR!";

}

function setId(elem, str) {
    elem.id = str;

    return elem;
}

function setClass(elem, str) {
    elem.className = str;
    return elem;
}

function addAClass(elem, str) {
    elem.classList.add(str);

    return elem;
}

function removeAClass(elem, str) {
    elem.classList.remove(str);

    return elem;
}

function newElement(name) {
    return document.createElement(name);
}

function findElementById(id) {
    return document.getElementById(id);
}

function findElementsByQuery(query) {
    return (document.querySelectorAll(query));
}

function reverseList(query) {
    const elem = document.querySelector(query);

    elem.reverse();
}

function mover(moveThis, appendToThis) {
    const a = document.querySelector(moveThis);
    const b = document.querySelector(appendToThis);

    b.append(a);
}

function filler(list, candidates) {
    candidates.forEach(text => {
        let listItem = document.createElement('li');
        listItem.textContent = text;
        list.appendChild(listItem);
    });
    return list;
}

function dupe(selector) {
    let elem = document.querySelector(selector);
    let x = elem.cloneNode(true);
    elem.appendChild(x);
}