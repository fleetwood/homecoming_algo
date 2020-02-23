const knex = require('./knex')
    , Users = require('./Users')
    , ClassTypePreference = require('./ClassTypePreference')
    , ClassTimeSlotPreference = require('./ClassTimeSlotPreference')
    , Person = require('./Person')
    , Session = require('./Session')
    , UserAttenancePreference = require('./UserAttendancePreference')
    , UserClassTimeSlotPreference = require('./UserClassTimeSlotPreference')
    , UserClassTypePreference = require('./UserClassTypePreference')
    , UserInstructorPreference = require('./UserInstructorPreference')

module.exports = {
    db: knex.db,
    Users,
    ClassTypePreference,
    ClassTimeSlotPreference,
    Person,
    Session,
    UserAttenancePreference,
    UserClassTimeSlotPreference,
    UserClassTypePreference,
    UserInstructorPreference,
}