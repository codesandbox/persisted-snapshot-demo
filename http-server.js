const http = require('http');

let pageviews = 0;
http.createServer((req, res) => {
    pageviews++;
    res.end("Page views: " + pageviews);
}).listen(3000);
