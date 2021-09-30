-- SELECT students.name, students.id, cohorts.id
-- FROM students
-- RIGHT JOIN cohorts
-- ON cohorts.id = students.cohort_id
-- WHERE email = null AND phone = null

SELECT name, id, cohort_id
FROM students
WHERE email IS Null OR phone IS Null