'use strict';

function targetTextToConsole(event) {
    console.log(event.target.textContent);
}

function tttcAttacher() {
    const button = document.querySelector('#button0');
    button.addEventListener('click', targetTextToConsole);
}

function lovelyParaAttacher() {
    const elem = document.querySelector('#thisisalovelyparagraph');

    elem.addEventListener('click', lovelyToggle);
}

function lovelyButtonAttacher() {
    const button = document.querySelector('#button1');

    button.addEventListener('click', lovelyToggle);
}

function concatAttacher() {
    const in1 = document.querySelector('#in1');
    const in2 = document.querySelector('#in2');

    const out = document.querySelector('#out1');

    function update() {
        out.textContent = in1.value + in2.value;
    }

    in1.addEventListener('change', update);
    in2.addEventListener('change', update);
}

function snitchAttacher() {
    const zone = document.querySelector('#mousewatcher');

    zone.addEventListener('mouseover', snitchUpdater);
    zone.addEventListener('mouseout', snitchUpdater);
}

function reportUpdater(event) {
    const report = document.querySelector('#report');
    report.textContent = `x: ${event.screenX} y: ${event.screenY}`;
}

function reportAttacher() {
    const mousereporter = document.querySelector('#mousereporter');
    mousereporter.addEventListener('mousemove', reportUpdater);
}

function idValidationAttacher() {
    const newIdInput = document.querySelector('#newid');

    function validateId() {
        if (newIdInput.value.includes(' ')) {
            newIdInput.classList.add('invalid');
        } else {
            newIdInput.classList.remove('invalid');
        }
    }

    newIdInput.addEventListener('input', validateId);
}