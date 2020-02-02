const utils = require('./utils')
    , Scheduler = require('./utils/Scheduler')
    , Calendar = require('./models/Calendar');

const scheduler = new Scheduler()
    , calendar = new Calendar();
utils.trace(calendar);
