const browserSync = require('browser-sync');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const hbs = require('express-hbs');
app.use(function (req, res, next) {
    req.rawBody = '';
    req.on('data', (chunk) => req.rawBody += chunk);

    next();
});

// app.use(favicon(path.join(__dirname, './', 'favicon.ico')))
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set up handlebars ready for tabs
app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views/');
app.use(express.static('src/'));
const port = 9777; // "xprs" in T9

app.use((req, res, next) => { res.removeHeader('X-Powered-By'); next(); });
app.get('/', (req, res) => {
    res.render('index', {
      domain: req.get('host'),
      protocol: req.protocol,
      title: 'Homecoming',
      layout: 'layouts/default'
    });
  })
  .get('/users', (req, res) => {
      const foo = [
          {
              firstName: "John",
              lastName: "Fleetwood",
          },
          {
              firstName: "Johnathon",
              lastName: "Denney",
          }
      ];
      res.render('users', {
        domain: req.get('host'),
        protocol: req.protocol,
        title: 'Users',
        content: foo,
        layout: 'layouts/default' 
      });
  });
app.listen(port, listening);

function listening () {
    console.log(`Server available on http://localhost:${port}`);
    browserSync({
        files: ['public/**/*.{html,js,css}', 'views/**/*.{html,hbs}'],
        online: true,
        open: true,
        port: port + 1,
        proxy: 'localhost:' + port,
        ui: false
    });
}