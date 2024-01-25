// ==UserScript==
// @name         Amazon Sum Sold Items
// @namespace    amazon-sum-sold-items
// @version      2024-01-25
// @description  Sum sold items when visitng a page
// @author       You
// @include     /^https?:\/\/(www|smile).amazon\.*\/s\?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.co.uk
// @grant        none
// ==/UserScript==
// 2024-01-24 - Initial Version
// 2024-01-25 - Improved regex / fixed to account for abbreviation in K

// var regexPattern = /\b(\d+)\+/g;

var regexPattern = /^\d+K?\++ bought in past month/

var z = document.querySelectorAll("span.a-size-base.a-color-secondary");

var totalSum = 0;

z.forEach(function(item) {
    var matches = item.textContent.match(regexPattern);

    if (matches) {
        matches.forEach(function(match) {
            if(match.includes('K+ ')){
                totalSum += parseInt(match, 10)*1000;
            } else{
                var number = parseInt(match, 10);
            
                if (!isNaN(number)) {
                    totalSum += number;
                }
            }

            
        });
    }
});

// 'totalSum' now contains the sum of all numbers matching the regex pattern.
document.querySelector("div.s-no-outline > span:nth-child(1)").textContent = "Results (Sold "+totalSum+")"

console.log(totalSum);
