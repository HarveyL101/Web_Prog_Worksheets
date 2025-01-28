/*
 * This is index.js
 *
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

let remembered = '';

function id() {
  return 2118183;
}

function fn() {
  return 'Harvey';
}

function sn() {
  return 'Lopez';
}

function add(a, b) {
  return a+b;
}

function subtract(a, b) {
  return(a-b);
}

function checkObject(obj) {
  obj.checked = true;
}

function checkObjectInside(obj) {
  if (obj.data) {
    obj.data.checked = true;
  }
}

function arraySet(arr, i, n) {
  if (arr[i]) {
    arr[i] = n;
  }
}

function addAll(arr) {
  let sum = 0;
  for (let i=0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function larger(a, b) {
  return Math.max(a, b);
}

function largest(arr) {
  let largest = arr[0];

  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (largest < arr[i]) {
        largest = arr[i];
      }
    } 
    return largest;
  } else {
    return null;
  }
}

function compare(a, b) {
  let val = true;
  
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      val = false;
    }
  }

  return val;
}

function addToAll(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    arr[0] += n;
  }
  return arr;
}

function rememberThis(keepsake) {
  remembered = keepsake;

  return remembered;
}

function nArray(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  return arr;
}
// ***
function addAllOpt(arr) {
  if (!Array.isArray(arr) || arr.length == 0) {
    return 0;
  }

  while (arr[1]) {
    arr[0] += arr[0 + 1];
    arr.splice(1, 1);
  }

  return arr[0];
}

function divisors(arr, div) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]%div === 0) {
      ans.push(arr[i]);
    }
  }

  return ans;
}

function multiples(n, m) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i * m);
  }

  return arr;
}