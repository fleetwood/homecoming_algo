<<<<<<< HEAD
const models = require('./models')
    , Student = models.Student
    , Meetup = models.Meetup
    , Instructor = models.Instructor;

console.log(JSON.stringify(Instructor.mocks,null,4));
=======
const utils = require('./utils')
    , Scheduler = require('./utils/Scheduler');

const scheduler = new Scheduler();
utils.trace(scheduler);
>>>>>>> Fleetwood
