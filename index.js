const Student = require('./models/Student');

const me = new Student({
    ranking: 0,
    name: 'Fleetwood'
});

console.log(JSON.stringify(me,null,4));