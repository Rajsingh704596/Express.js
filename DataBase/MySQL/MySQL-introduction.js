//! Introduction of MySQL -

//# MySQL is a widely used open-source "relational database management system (RDBMS)".

//# It stores data in tables, with "rows representing individual records" and "columns representing data attributes".
//# MySQL uses Structured Query Language(SQL) for managing and manipulating data.
//# It is known for its reliability, performance, ease of use, making its suitable for both small and large-scale applications.
//# MySQL is cross-platform, meaning it works on different open source systems such as Windows, Linux, macOs .


//$ Key Concepts-

//^ Table :- 
// A table in MySQL is a collection of data organized in rows and columns. It is similar to a spreadsheet where each row is a record, and each column holds data attributes of that record.

//^ Row/Record/Tuple :-
// A row (also called a record or tuple) represent a single, data entry in a table. Each row in a table has a unique identifier, often the primary key.

//^ Column/Attribute :-
// A column is a vertical structure in a table that holds a specific type of data. Each column has a data type, such as integers, strings, or dates, and each column represents an attribute of the data stored in the table(e.g "name","age","email").


//# Each row in a table contains values for each of the columns, which together make up the full record.
//# Tables in MySQL are defined by a schema that specifies the names and types with any constraints like primary keys or unique values.

//^ Primary Key -
// It is special column or combination of columns that uniquely identifier of table.

//^ Foreign Key -
// It is column that creates a relationship between two tables, linking table to a row in another table


//! Installing MySQL-

// step -1 Download the MySQL -   https://dev.mysql.com/downloads/       
  // (choose the os-> MySQL installer for windows -> Community version install -> custom install(MySQL server, workbench, shell install)) 

// During installation, choose the "Developer Default" setup type to install essential tools like MySQL Server, Workbench(GUI based), and Command-line utilities.

// set root password during installation process. This password will be used to access the MySQL root account.



//$ After install MySql Workbench (GUI) basic CRUD operation perform in mySql_test database :-

// -- (for run the code first select that database in schema and click power button)
//  CREATE DATABASE mySql_test;

// -- delete database
// -- drop database mysql_test

// -- Data store in Table
// CREATE TABLE users(
// id int auto_increment primary key,
// name varchar(100) not null,
// email varchar(100) not null unique
// );

// -- Read data directory
// select * from users;

// -- Insert data
// insert into users(name, email) values("rock","rock123.com");
 
// -- Insert Multiple data
// INSERT INTO USERS(name, email) VALUES
// ("rajat", "abc@gmail.com"),
// ("roy", "roy@gmail.com"),
// ("rohit", "rohit@gmail.com"),
// ("raj", "raj@gmail.com");

// -- Read Single data using primary key (unique)
// select * from users where name="raj";

// -- Updata data
// update users
// set email = "testupdate@gmail.com"
// where id = 2;

// -- delete table data
// delete 
// from users
// where id=4;



