// ==UserScript==
// @name         NATO shortcut
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Add a shortcut to the NATO tool in the review queues window (next to tools)
// @author       Tomer Kalish
// @match        https://*.stackoverflow.com/*
// @exclude      *://chat.stackoverflow.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

(function(){
    'use strict';

    // Create the link in advance
    var a = document.createElement('a');
    a.setAttribute('href', "https://stackoverflow.com/tools/new-answers-old-questions");
    a.innerHTML = "NATO";

    // Wait for the queues dropdown to be created
    waitForElm("div.-right").then((elm) => {
        var ToolsLink = elm.lastChild
        ToolsLink.after(a);
        ToolsLink.after(' • ');
    });
})();

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
