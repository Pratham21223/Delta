import { faker } from '@faker-js/faker';
import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password:'30042007',
});
// let q="SHOW TABLES";

//Inserting new data using placeholders(?)
let q="insert into user (id,username,email,password) Values ?";
let users=[
  ["123a","Pratham.ka","pratham@gmail.coma","1232a"],
  ["123b","Pratham.kb","pratham@gmail.comb","1232b"],
];
connection.query(q,[users], (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
  });
connection.end();
let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

// console.log(getRandomUser());