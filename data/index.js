const INSERTS = {
    Admin: `
        INSERT INTO public."Admin" (id, email, pid, "createdAt", "updatedAt") VALUES ({0}, {1}, {2}, {3}, {4});`,
    AttendanceOption: `
        INSERT INTO public."AttendanceOption" (id, question, icon, "createdAt", "updatedAt", type) VALUES ({0}, {1}, {2}, {3}, {4}, {5});`,
    ClassTimeSlotPreference: `
        INSERT INTO public."ClassTimeSlotPreference" (id, date, "endTime", "startTime", "isNoPreference", "createdAt", "updatedAt") VALUES (?, ?, ?, ?, ?, ?, ?);`,
    ClassTypePreference: `
        INSERT INTO public."ClassTypePreference" (id, type, "maxSelections", "sortIndex", "createdAt", "updatedAt") VALUES (?, ?, ?, ?, ?, ?);`,
    Configuration: `
        INSERT INTO public."Configuration" (id, name, value, "isPublic", "createdAt", "updatedAt") VALUES (?, ?, ?, ?, ?, ?);`,
    InstructorClassType: `
        INSERT INTO public."InstructorClassType" ("instructorId", "classTypeId", "createdAt", "updatedAt") VALUES (?, ?, ?, ?);`,
    Location: `
        INSERT INTO public."Location" (id, address, name, "createdAt", "updatedAt") VALUES (?, ?, ?, ?, ?);`,
    Person: `
        INSERT INTO public."Person" (id, bio, "firstName", "lastName", "imageUrl", "createdAt", "updatedAt") VALUES (?, ?, ?, ?, ?, ?, ?);`,
    PersonSession: `
        INSERT INTO public."PersonSession" ("personId", "sessionId", "createdAt", "updatedAt") VALUES (?, ?, ?, ?);`,
    Question: `
        INSERT INTO public."Question" (id, answer, question, "order", "createdAt", "updatedAt") VALUES (?, ?, ?, ?, ?, ?);`,
    Session: `
        INSERT INTO public."Session" (id, date, "startTime", "endTime", description, "locationId", spots, title, "classTypeId", "sessionTypeId", "createdAt", "updatedAt", icon) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
    SessionTypes: `
        INSERT INTO public."SessionTypes" (id, type, "createdAt", "updatedAt") VALUES (?, ?, ?, ?);`,
    User: `
        INSERT INTO public."User" (id, email, "firstName", "lastName", "notificationPreferences", phone, pid, postcode, status, "createdAt", "updatedAt") VALUES ({0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}, {10});`,
    UserAttendancePreference: `
        INSERT INTO public."UserAttendancePreference" ( "userId", "attendanceOptionId", answer, "createdAt", "updatedAt") VALUES (?, ?, ?, ?, ?);`,
    UserClassTimeSlotPreference: `
        INSERT INTO public."UserClassTimeSlotPreference" ("userId", "classTimeSlotPreference", "createdAt", "updatedAt") VALUES (?, ?, ?, ?);`,
    UserClassTypePreference: `
        INSERT INTO public."UserClassTypePreference" ("userId", "classTypeId", "createdAt", "updatedAt") VALUES (?, ?, ?, ?);`,
    UserInstructorPreference: `
        INSERT INTO public."UserInstructorPreference" ("userId", "instructorId", "classType", "createdAt", "updatedAt") VALUES (?, ?, ?, ?, ?);`,
    UserSchedule: `
        INSERT INTO public."UserSchedule" ("userId", "sessionId", "createdAt", "updatedAt") VALUES (?, ?, ?, ?);`
};

for (var key in INSERTS) {
    if (INSERTS.hasOwnProperty(key)) {
        try {
            let file = require(`./json/${key}.json`);
            console.log(`Building sql for ./json/${key}.json`);
            file.forEach(j => {
                let i = 0
                    , sql = INSERTS[key];
                for (var val in j) {
                    sql = sql.replace(`{${i}}`,j[val]);
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    }
}