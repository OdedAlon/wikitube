'use strict';

function onInit() {
    renderPlayer();
}

function renderPlayer() {
    getVideo('tora')
        .then(res => console.log(res))
}