// ==UserScript==
// @name         NATO shortcut
// @namespace    http://tampermonkey.net/
// @version      1.2.1
// @description  Add a shortcut to the NATO tool in the review queues window (next to tools)
// @author       Tomer Kalish
// @match        https://*.stackoverflow.com/*
// @exclude      *://chat.stackoverflow.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com
// @updateURL    https://github.com/tomerkal/NATO-shortcut/raw/main/NATOshort.user.js
// @downloadURL  https://github.com/tomerkal/NATO-shortcut/raw/main/NATOshort.user.js
// ==/UserScript==

(function(){
    'use strict';

    // Create the link in advance
    const a = document.createElement('a');
    a.setAttribute('href', "https://stackoverflow.com/tools/new-answers-old-questions");
    a.innerHTML = "NATO";
    // Create the dot
    const dot = document.createTextNode(' • ')

    // Wait for the queues dropdown to be created
    $(document).ajaxComplete((_0, _1, {url}) => {
        if(url.startsWith('/topbar/review')){
            const elm = document.querySelector("div.review-dialog > div > div > div > div.-right");
            elm.appendChild(dot);
            elm.appendChild(a);
        }
    });
})();
