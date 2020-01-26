const models = require('./models')
    , Student = models.Student
    , Meetup = models.Meetup
    , Instructor = models.Instructor;

console.log(JSON.stringify(Instructor.mocks,null,4));