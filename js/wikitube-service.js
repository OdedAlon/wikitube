'use strict';

const YT_KEY = 'AIzaSyBV2hxFUdYfWxqNiWLA2mlHBMZwpJ8mwOc';

function getVideo(value) {
    return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${YT_KEY}&q=${value}`).then(res => res.data);
}

function getViki(value) {
    return axios.get(`https://en.wikipedia.org/w/api.php?&origin=*&action=query&list=search&srsearch=${value}&format=json`).then(res => res.data);
}



