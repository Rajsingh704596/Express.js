//! Mysql -  mySql is not case sensitive

//  in node express mySql package install-      npm i mysql2

import mysql from "mysql2/promise";               //promise version use


//? step 1: to connect mySql server to node js

const db = await mysql.createConnection({                //await use because it's return promise and we use promise version
    host:"localhost",  
    user:"root",
    password:"raj21@mysql",
    // database:""              // when no database create 
    database:"mysql_db"         // when database create then use line for Crud perform
})
console.log("MySql Connected Successfully");

//? step 2: create a database

// await db.execute(`create database mysql_db`);           //now mysql_db name se database create
console.log(await db.execute("show databases"));          // this query show database

//* o/p - in terminal
// PS D:\Express.js\DataBase\MySQL> node app.js
// MySql Connected Successfully
// [
//   [
//     { Database: 'information_schema' },
//     { Database: 'mohit_team' },
//     { Database: 'mysql' },
//     { Database: 'mysql_db' },
//     { Database: 'performance_schema' },
//     { Database: 'sys' }
//   ],
//   [ `Database` VARCHAR(64) ]
// ]


//? step 3: create a table

// await db.execute(`
//     CREATE TABLE users(
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     username VARCHAR(100) NOT NULL,
//     email VARCHAR(100) NOT NULL UNIQUE
//     )
//     `);


//? step 4: to perform CRUD operation

//$ INSERT Query

//# Using inline values (Not Recommended)
// await db.execute(
//     `INSERT into users(username, email) values('Joy','jou@rok.com')`
// )

//# Using Prepared Statements (Best Practice for prevent sql injection / hack the data) 
// await db.execute(
//      `insert into users(username, email) values(?,?)` ,["Joys","joy@rock.com"]
//      )
     
//# Multiple insertion
// const values=[                        // Array of Array 
//     ["Ruby","rubi@gm.com"],
//     ["Early","rubi1@gm.com"],
//     ["musk","rubi2@gm.com"],
//     ["mari","rubi3@gm.com"],
//     ["Rock","rubi4@gm.com"],
// ]

// await db.query(
//     "insert into users(username,email) values ? ",[values]      //Note- here we apply multiple value so don't use parenthesis , also db.query use 
// )

//$ Read Query
const rows = await db.execute(` select * from users`);
console.log(rows);

//* o/p-
// [
//     [ { id: 1, username: 'Joy', email: 'jou@rok.com' } ],
//     [
//       `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
//       `username` VARCHAR(100) NOT NULL,
//       `email` VARCHAR(100) NOT NULL UNIQUE_KEY
//     ]
//   ]
  
//so we got [rows , field] but we want only rows so

// const [rows] = await db.execute(` select * from users`);
// console.log(rows);                                                 // * o/p- [ { id: 1, username: 'Joy', email: 'jou@rok.com' } ],


//# particular rows show in table

// const [rows] = await db.execute(`select * from users where username="mari" `)
// console.log(rows);


//$ Update Query
//? syntax- 
//  UPDATE table_name
//  SET column1 = value1, column2 = value2, ...
//  Where condition;


// try {
//     const [rows] = await db.execute (`update users set username ="RockDev" where email="rubi4@gm.com"`);
//     console.log("All Users:", rows);
// } catch (error) {
//     console.log(error);
// }

//# update with best practice
// try {
//     const [rows] = await db.execute (`update users set username=? where email=?`,["Rock", "rubi4@gm.com"]);
//     console.log("All Users:", rows);
// } catch (error) {
//     console.log(error);
// }

//$ Delete Query

//? syntax
//  DELETE FROM table_name
//  WHERE condition;

// try {
//     const [rows]=await db.execute(
//         `delete from users where email="rubi2@gm.com" `
//     )
//     console.log("All Users:", rows)
// } catch (error) {
//     console.log(error);
// }

//# Best Practice
// try {
//     const [rows]=await db.execute(
//         `delete from users where email=? `,["rubi3@gm.com"]
//     )
//     console.log("All Users:", rows)
// } catch (error) {
//     console.log(error);
// }