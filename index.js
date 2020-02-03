const utils = require('./utils')
    , models = require('./models');

const calendar = new models.Calendar({constraints: ['guid']});
    models.Timeslot.mocks.forEach(m => calendar.addItems(m));
utils.trace(calendar.items);
