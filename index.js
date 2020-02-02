const utils = require('./utils')
    , Scheduler = require('./utils/Scheduler')
    , Calendar = require('./models/Calendar');

const scheduler = new Scheduler()
    , calendar = new Calendar();
utils.trace(calendar);

const jack = { guid: '123', name: 'Jack'}
    , jill = { guid: '123', name: 'Jill'}
    , junk = { guid: '456', name: 'Jack'}
    , jock = jack;
calendar.addItems(jack, jill, junk, jock);
console.log(calendar.items);
