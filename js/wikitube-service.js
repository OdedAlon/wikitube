'use strict';

const YT_KEY = 'AIzaSyCRr58Q-DYibbf0jZdJi5VaVfzspHXC1Z4';

function getVideo(value) {
    return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${YT_KEY}&q=${value}`).then(res => res.data);
}



