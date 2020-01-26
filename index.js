const models = require('./Models')
    , Student = models.Student
    , Meetup = models.Meetup
    , Instructor = models.Instructor;

const robin = new Instructor({
    ranking: 3,
    name: "Robin"
});

const robinClass = new Meetup({
    ranking: 0,
    instructor: robin
});

const me = new Student({
    ranking: 0,
    name: 'Fleetwood',
    preferences: [ robinClass ]
});

console.log(JSON.stringify(me,null,4));