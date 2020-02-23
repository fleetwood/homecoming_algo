const knex = require('./knex')
    , Users = require('./Users')
    , ClassTypePreferences = require('./ClassTypePreference')
    , ClassTimeSlotPreferences = require('./ClassTimeSlotPreference')
    , Persons = require('./Person')
    , Sessions = require('./Session')
    , UserAttenancePreferences = require('./UserAttendancePreference')
    , UserClassTimeSlotPreferences = require('./UserClassTimeSlotPreference')
    , UserClassTypePreferences = require('./UserClassTypePreference')
    , UserInstructorPreferences = require('./UserInstructorPreference')

module.exports = {
    db: knex.db,
    Users,
    ClassTypePreferences,
    ClassTimeSlotPreferences,
    Persons,
    Sessions,
    UserAttenancePreferences,
    UserClassTimeSlotPreferences,
    UserClassTypePreferences,
    UserInstructorPreferences,
}