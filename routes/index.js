const routes = [
    require('./users'),
    require('./person'),
    require('./classtimeslotpreference'),
    require('./classtypepreference'),
    require('./session'),
    require('./userclassattendancepreference'),
    require('./userclasstimeslotpreference'),
    require('./userinstructorpreference'),
];

const init = (app) => routes.forEach(r => r.init(app));

module.exports = {
    init
}