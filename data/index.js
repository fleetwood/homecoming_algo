const INSERTS = {
    AttendanceOption: `
        INSERT INTO public."AttendanceOption" (id, question, icon, "createdAt", "updatedAt", type) VALUES ({0}, {1}, {2}, {3}, {4}, {5});`,
    ClassTimeSlotPreference: `
        INSERT INTO public."ClassTimeSlotPreference" (id, date, "endTime", "startTime", "isNoPreference", "createdAt", "updatedAt") VALUES ({0}, {1}, {2}, {3}, {4}, {5}, {6});`,
    InstructorClassType: `
        INSERT INTO public."InstructorClassType" ("instructorId", "classTypeId", "createdAt", "updatedAt") VALUES ({0}, {1}, {2}, {3});`,
    Location: `
        INSERT INTO public."Location" (id, address, name, "createdAt", "updatedAt") VALUES ({0}, {1}, {2}, {3}, {4})`,
    Person: `
        INSERT INTO public."Person" (id, bio, "firstName", "lastName", "imageUrl", "createdAt", "updatedAt") VALUES ({0}, {1}, {2}, {3}, {4}, {5}, {6})`,
    Question: `
        INSERT INTO public."Question" (id, answer, question, "order", "createdAt", "updatedAt") VALUES ({0}, {1}, {2}, {3}, {4}, {5});`,
    Session: `
        INSERT INTO public."Session" (id, date, "startTime", "endTime", description, "locationId", spots, title, "classTypeId", "sessionTypeId", "createdAt", "updatedAt", icon) VALUES ({0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}, {10}, {11}, {12});`,
    SessionTypes: `
        INSERT INTO public."SessionTypes" (id, type, "createdAt", "updatedAt") VALUES ({0}, {1}, {2}, {3});`,
    Users: `
        INSERT INTO public."User" (id, email, "firstName", "lastName", "notificationPreferences", phone, pid, postcode, status, "createdAt", "updatedAt") VALUES ({0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}, {10});`,
    UserAttendancePreference: `
        INSERT INTO public."UserAttendancePreference" ( "userId", "attendanceOptionId", answer, "createdAt", "updatedAt") VALUES ({0}, {1}, {2}, {3}, {4});`,
    UserClassTimeSlotPreference: `
        INSERT INTO public."UserClassTimeSlotPreference" ("userId", "classTimeSlotPreference", "createdAt", "updatedAt") VALUES ({0}, {1}, {2}, {3});`,
    UserClassTypePreference: `
        INSERT INTO public."UserClassTypePreference" ("userId", "classTypeId", "createdAt", "updatedAt") VALUES ({0}, {1}, {2}, {3});`,
    UserInstructorPreference: `
        INSERT INTO public."UserInstructorPreference" ("userId", "instructorId", "classType", "createdAt", "updatedAt") VALUES ({0}, "{1}", {2}, {3}, {4});`,

};
let sql = [];
for (var key in INSERTS) {
    if (INSERTS.hasOwnProperty(key)) {
        try {
            let file = require(`./json/${key}.json`);
            console.log(`Building sql for ./json/${key}.json`);
            file.forEach(j => {
                let i = 0
                    , temp = INSERTS[key];
                for (var val in j) {
                    temp = temp.replace(`{${i}}`,j[val]);
                    i++;
                }
                // sql += temp;
                sql.push({
                    title: key,
                    insert: temp
                });
            });
        }
        catch (e) {
            console.log(e);
        }
    }
}

module.exports = {
    sql
}