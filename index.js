const config = require('./config')
    , browserSync = require('browser-sync')
    , express = require('express')
    , cookieParser = require('cookie-parser')
    , bodyParser = require('body-parser')
    , app = express()
    , hbs = require('express-hbs')
    , models = require('./models')
    , routes = require('./routes');

app.use(function (req, res, next) {
    req.rawBody = '';
    req.on('data', (chunk) => req.rawBody += chunk);
    next();
})
    .use(cookieParser())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json());

// set up handlebars ready for tabs
app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views/');
app.use(express.static('src/'));
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
        models.Users.byEmail("john.fleetwood@onepeloton.com")
            .then(results => {
                res.render('users', {
                    domain: req.get('host'),
                    protocol: req.protocol,
                    title: 'Users',
                    users: results,
                    layout: 'layouts/default'
                });  
            })
            .catch(e => {
                res.render('users', {
                    domain: req.get('host'),
                    protocol: req.protocol,
                    title: 'Users',
                    errorMessage: e.message,
                    users: [],
                    layout: 'layouts/default'
                });  
            })
    })
    .get('/schedule', (req, res) => {
        const instructors = [
            {
                name: "Bob",
                activity: "Bike",
            },
        ];
        const users = [
            {
                firstName: "John",
                lastName: "Fleetwood",
            },
            {
                firstName: "Johnathon",
                lastName: "Denney",
            },
        ];
        const meetups = [
            {
                instructor: "Bob",
                activity: "Bike",
                timeslot: "Friday, 10am",
                capacity: 40,
            }
        ];

        res.render('schedule', {
            domain: req.get('host'),
            protocol: req.protocol,
            title: 'Schedule',
            instructors: instructors,
            users: users,
            meetups: meetups,
            layout: 'layouts/default'
        });
    });

routes.init(app);

function listening() {
    console.log(`Server available on http://${config.siteUrl}`);
    browserSync({
        files: ['public/**/*.{html,js,css}', 'views/**/*.{html,hbs}'],
        online: false,
        open: false,
        port: Number(config.port) + 1,
        proxy: config.siteUrl,
        ui: false
    });
}
app.listen(config.port, listening);