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
client.connect();


//****EXAMPLE 1 ******/
// client.query(`SELECT id, name, cohort_id
// FROM students;`, (err, res) => {
//   console.log(err, res);
//   client.end();
// });




/***EXAMPLE 2 ******/
// client.query(`
// SELECT id, name, cohort_id
// FROM students
// LIMIT 5;
// `)
// .then(res => {
//   res.rows.forEach(user => {
//     console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_id} cohort`);
//     client.end();
//   })
// });






/***EXAMPLE 3 ******/


const cohortName = process.argv[2]

const limit = process.argv[3] || 5;

const values = [`%${cohortName}%`, limit]

const queryString = `
SELECT students.id as student_id, students.name as name,  cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2`; 



client.query(queryString, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
    client.end();
  })
  
}).catch(err => console.error('query error', err.stack));


