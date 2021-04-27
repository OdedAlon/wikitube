'use strict';

function onInit() {
    onSearch();
}

function onSearch() {
    let key = document.querySelector('.input-search').value;
    getVideo(key)
        .then(list => {
            let firstRes = list.items[0];
            runVideo(firstRes);
            renderList(list.items);
        })
    getWiki(key)
        .then(res => {
            let title = res.query.search[0].title;
            let snippet = res.query.search[0].snippet;
            renderWiki(title, snippet);
        })
}

function runVideo(video) {
    let id = video.id.videoId;
    document.querySelector('.video-player-container iframe').src=`https://www.youtube.com/embed/${id}`;
}

function renderList(videos) {
    let strHtmls = videos.map(video => {
        return `<div class="video-card" onclick="onCardClick('${video.snippet.title}')">
            <img src="${video.snippet.thumbnails.default.url}">
            <h4>${video.snippet.title}</h4>
        </div>`
    })
    document.querySelector('.videos-list').innerHTML = strHtmls.join('');
}

function renderWiki(title, snippet) {
    let strHtml = `<h2>${title}</h2></br>
    <p>${snippet}</p>`;
    document.querySelector('.wiki-container').innerHTML = strHtml;
}

function onCardClick(value) {
    document.querySelector('.input-search').value = value;
    onSearch();
}

function isEnter(ev) {
    if (ev.key === 'Enter') onSearch();
}