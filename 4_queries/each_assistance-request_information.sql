-- SELECT teachers.name AS teacher,
-- studends.name AS student,
-- assignments.name AS assignment,
-- (assistance_requests.completed_at - assistance_requests.started_at) AS duration
-- FROM students
-- JOIN teachers ON teachers.id = assistance_requests.teacher_id
-- JOIN assignments ON assignments.id = assistance_requests.assignment_id
-- JOIN students ON studends.id = assistance_requests.student_id
-- GROUP BY teachers.name
-- ORDER BY duration


-- SELECT (assistance_requests.completed_at - assistance_requests.started_at) AS duration,
-- teachers.name AS teacher
-- FROM assistance_requests
-- JOIN teachers ON teachers.id = teacher_id


SELECT teachers.name AS teacher, 
students.name AS student,
assignments.name AS assignment,
(completed_at - started_at) AS duration
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
JOIN assignments ON assignments.id = assignment_id
JOIN students ON students.id = student_id
ORDER BY duration;








