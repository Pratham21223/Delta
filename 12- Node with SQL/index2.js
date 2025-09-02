//inseting data in bulk.
import { faker } from '@faker-js/faker';
import mysql from 'mysql2';
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password:'30042007',
});
// let q="SHOW TABLES";
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
];
}
//Inserting data of 100 users using faker
let data=[];
for (let i = 1; i <=100; i++) {
  data.push(getRandomUser());
}
// console.log(data);
let q="insert into user (id,username,email,password) Values ?";
connection.query(q,[data], (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
  });
connection.end();