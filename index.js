const utils = require('./utils')
    , models = require('./models')
    , slots = models.Timeslot.mocks
    , instructors = models.Instructor.mocks;

const meetup = new models.Meetup()
    // slots and instructors are passed to the mock bc
    // we'll need to make sure there are no duplicates (TBD)
    , meetups = models.Meetup.mocks(slots, instructors);
utils.trace(meetups);
