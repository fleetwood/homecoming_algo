const models = require('./models')
    , utils = require('./utils')
    , Mapping = utils.Mapping;

const mapping = new Mapping({
    instructors: models.Instructor.mocks,
    students: models.Student.mocks
});

console.log(JSON.stringify(mapping,null,4));