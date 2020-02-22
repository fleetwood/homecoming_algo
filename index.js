const browserSync = require('browser-sync');
const express = require('express');
// const shrinkRay = require('shrink-ray');

const app = express();
const port = 9777; // "xprs" in T9

// you can conditionally add routes and behaviour based on environment
const isProduction = 'production' === process.env.NODE_ENV;

app.set('etag', isProduction);
app.use((req, res, next) => { res.removeHeader('X-Powered-By'); next(); });
// app.use(shrinkRay());

// static example, add real routes here instead
app.use('/', express.static('src/', { etag: isProduction, lastModified: false }));

app.listen(port, listening);

function listening () {
    console.log(`Server available on http://localhost:${port}`);
    if(!isProduction) {
        browserSync({
            files: ['src/**/*.{html,js,css}'],
            online: true,
            open: true,
            port: port + 1,
            proxy: 'localhost:' + port,
            ui: false
        });
    }
}