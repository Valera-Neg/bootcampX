const { Client } = require('pg');


const config = {
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx',
  password: 123,
  port: 5432,
};

const client = new Client(config);
client.connect()





const cohortName = process.argv[2] || 'JUL02';

const values = [cohortName];

const queryString = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort 
FROM teachers 
JOIN assistance_requests ON teacher_id = teachers.id 
JOIN students ON student_id = students.id 
JOIN cohorts ON cohort_id = cohorts.id 
WHERE cohorts.name = $1
ORDER BY teacher
`;


client.query(queryString, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort} : ${user.teacher}`);
  })
})
.catch(err => {
  console.log("catch:", err.massage);
})
.finally(() => {
  client.end();
});
