INSERT INTO public."Admin"
    (
    id, email, pid, "createdAt", "updatedAt")
VALUES
    ({0}, {1}, {2}, {3}, {4});

INSERT INTO public."AttendanceOption"
    (
    id, question, icon, "createdAt", "updatedAt", type)
VALUES
    ({0}, {1}, {2}, {3}, {4}, {5});

INSERT INTO public."ClassTimeSlotPreference"
    (
    id, date, "endTime", "startTime", "isNoPreference", "createdAt", "updatedAt")
VALUES
    ({0}, {1}, {2}, {3}, {4}, {5}, {6});

INSERT INTO public."ClassTypePreference"
    (
    id, type, "maxSelections", "sortIndex", "createdAt", "updatedAt")
VALUES
    ({0}, {1}, {2}, {3}, {4}, {5});

INSERT INTO public."Configuration"
    (
    id, name, value, "isPublic", "createdAt", "updatedAt")
VALUES
    ({0}, {1}, {2}, {3}, {4}, {5});

INSERT INTO public."InstructorClassType"
    (
    "instructorId", "classTypeId", "createdAt", "updatedAt")
VALUES
    ({0}, {1}, {2}, {3});

INSERT INTO public."Location"
    (
    id, address, name, "createdAt", "updatedAt")
VALUES
    ({0}, {1}, {2}, {3}, {4});

INSERT INTO public."Person"
    (
    id, bio, "firstName", "lastName", "imageUrl", "createdAt", "updatedAt")
VALUES
    ({0}, {1}, {2}, {3}, {4}, {5}, {6});

INSERT INTO public."PersonSession"
    (
    "personId", "sessionId", "createdAt", "updatedAt")
VALUES
    ({0}, {1}, {2}, {3});

INSERT INTO public."Question"
    (
    id, answer, question, "order", "createdAt", "updatedAt")
VALUES
   ({0}, {1}, {2}, {3}, {4}, {5});

INSERT INTO public."Session"
    (
    id, date, "startTime", "endTime", description, "locationId", spots, title, "classTypeId", "sessionTypeId", "createdAt", "updatedAt", icon)
VALUES
    ({0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}, {10}, {11}, {12});

INSERT INTO public."SessionTypes"
    (
    id, type, "createdAt", "updatedAt")
VALUES
    ({0}, {1}, {2}, {3});

INSERT INTO public."User"
    (
    id, email, "firstName", "lastName", "notificationPreferences", phone, pid, postcode, status, "createdAt", "updatedAt")
VALUES
   ({0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}, {10});

-- INSERT INTO public."User"
--     (
--     id, email, "firstName", "lastName", "notificationPreferences", phone, pid, postcode, status, "createdAt", "updatedAt")
-- VALUES
--     (1,"arjun@onepeloton.com","Arjun","Gopalratnam","SMS","+13025283569","", "","INTERESTED","2019-12-19 16:23:10.125+00","2019-12-19 16:23:10.125+00"),

INSERT INTO public."UserAttendancePreference"
    (
    "userId", "attendanceOptionId", answer, "createdAt", "updatedAt")
VALUES
    ({0}, {1}, {2}, {3}, {4});

INSERT INTO public."UserClassTimeSlotPreference"
    (
    "userId", "classTimeSlotPreference", "createdAt", "updatedAt")
VALUES
    ({0}, {1}, {2}, {3});

INSERT INTO public."UserClassTypePreference"
    (
    "userId", "classTypeId", "createdAt", "updatedAt")
VALUES
    ({0}, {1}, {2}, {3});

INSERT INTO public."UserInstructorPreference"
    (
    "userId", "instructorId", "classType", "createdAt", "updatedAt")
VALUES
   ({0}, {1}, {2}, {3}, {4});

INSERT INTO public."UserSchedule"
    (
    "userId", "sessionId", "createdAt", "updatedAt")
VALUES
    ({0}, {1}, {2}, {3});