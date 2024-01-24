// ==UserScript==
// @name         New Userscript
// @namespace    amazon-sum-sold-items
// @version      2024-01-24
// @description  Sum sold items when visitng a page
// @author       You
// @include     /^https?:\/\/(www|smile).amazon\.*\/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.co.uk
// @grant        none
// ==/UserScript==

document.querySelector("div.s-no-outline > span:nth-child(1)").textContent = "Results (Sold 4119)"

var regexPattern = /\b(\d+)\+/g; // Regex pattern for extracting numbers followed by '+'
var z = document.querySelectorAll("span.a-size-base.a-color-secondary");

var totalSum = 0;

z.forEach(function(item) {
    var matches = item.textContent.match(regexPattern);
    
    if (matches) {
        matches.forEach(function(match) {
            var number = parseInt(match, 10);
            if (!isNaN(number)) {
                totalSum += number;
            }
        });
    }
});

// 'totalSum' now contains the sum of all numbers matching the regex pattern.
document.querySelector("div.s-no-outline > span:nth-child(1)").textContent = "Results (Sold "+totalSum+")"

console.log(totalSum);
