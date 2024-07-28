// ==UserScript==
// @name         Hackmd Toggle Light
// @namespace    http://tampermonkey.net/
// @version      v0.0.2
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
            btn.className = "rounded px-2.5 py-2 font-normal flex bg-transparent text-text-default border border-solid border-border-default hocus:bg-element-bg-hover hocus:border-element-border-hover hocus:text-text-emphasize focus:shadow-[0_0_0_2px_#77777733] disabled:bg-element-bg-disabled disabled:border-element-border-disabled disabled:text-element-text-disabled disabled:hocus:bg-element-bg-disabled disabled:hocus:border-element-border-disabled disabled:hocus:text-element-text-disabled disabled:border disabled:border-solid disabled:hocus:border disabled:hocus:border-solid community-button ui-view-theme gap-0.5 !py-1.5 !px-2 text-sm leading-sm small"

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