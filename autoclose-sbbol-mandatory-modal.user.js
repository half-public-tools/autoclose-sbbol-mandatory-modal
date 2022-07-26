// ==UserScript==
// @name         Автозакрытие mandotary modal СББОЛ
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Автоматически закрывает mandotary modal при входе в СББОЛ на локале, деве, ИФТ и ПСИ
// @author       Илья Никишин <ianikishin@sberbank.ru>
// @downloadURL  https://github.com/half-public-tools/autoclose-sbbol-mandatory-modal/raw/main/autoclose-sbbol-mandatory-modal.user.js
// @updateURL    https://github.com/half-public-tools/autoclose-sbbol-mandatory-modal/raw/main/autoclose-sbbol-mandatory-modal.user.js
// @match        http://localhost:3000/*
// @match        http://10.21.25.54:9081/*
// @match        http://10.36.252.39:9080/*
// @match        http://dev-sbbol2.sigma.sbrf.ru:8800/*
// @match        https://sbi.sbbolmobiletest.sberbank.ru:9443/*
// @icon         https://www.sberbank.ru/portalserver/static/templates/%5BBBHOST%5D/RuMasterpageTemplate/static/android-chrome-192x192.png
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://raw.githubusercontent.com/uzairfarooq/arrive/master/minified/arrive.min.js
// ==/UserScript==


$(document).arrive(
    '#mandatory-overlay-group-modal button[data-test-id="modal__closeIcon--button"]',
    { existing: true, onceOnly: true },
    el => el.click(),
)
