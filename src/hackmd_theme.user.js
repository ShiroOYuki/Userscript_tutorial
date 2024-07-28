// ==UserScript==
// @name         Hackmd Toggle Light
// @namespace    http://tampermonkey.net/
// @version      2024-07-28
// @description  try to take over the world!
// @author       Shiro
// @match        https://hackmd.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hackmd.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', () => {
        let nav = document.querySelector("#meta-title-tags > div > span");
        if (nav) {
            let btn = document.createElement("button");
            btn.textContent = "Switch Theme";
            btn.style.color = "black";

            btn.addEventListener("click", () => {
                var page = document.querySelector("html");
                var body = document.querySelector("body");
                
                var mode = page.getAttribute("theme") == "light"? "dark":"light";
                
                page.setAttribute("theme", mode);
                body.setAttribute("theme", mode);
                body.setAttribute("data-view-theme", mode);
            });

            nav.appendChild(btn);
        }
    });
})();