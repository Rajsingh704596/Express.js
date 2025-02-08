//! Introduction to Prisma ORM -

//# Prisma is an open-source "ORM (Object-Relational Mapping) tool" for Node.js and TypeScript that simplifies database interaction (e.g we can perform any CRUD operation with MySQL or MongoDb or Postgresql without using code of MySQl , MongoDb, Postgresql , so on... ).
//# It helps to interact with database using a "type-safe query builder" and eliminates the need to write raw SQL queries.
//# Prisma provides Prisma Client, a powerful auto-generated query builder, and Prisma Migrate for database schema migrations.

// https://www.prisma.io/docs/getting-started/setup-prisma
// install Prisma Vscode Extension

// npm init -y
// npm install prisma --save-dev
// npx prisma init                    (schema.prisma create(where generate code and connect database mysql include), .env file create (where we change username, password , database))

//! prisma- it's basically medium between express and database
//^ 1. Prisma Client - Auto generated and type-safe database client.
//^ 2. Prisma Migrate- Declarative data modeling and customizable migrations.
//^ 3. Prisma Studio- Modern UI to view and edit our application data.

// now we create schema in schema.prisma file 

//! Migration in ORM- 
//# As we know that SQL based databases require us to assign schema which we can't do while backend is running, we have to do beforehand. Migrations is for that.
//# Migration is the process of evolving and managing changes to a database schema over time.
//# It involves creating, modifying, or deleting tables, columns, and relationships in the database.
//# In Prisma, migrations are stored as versioned SQL script files.
//# Migrations help ensure that database structures stay consistent , environments (e.g development. staging, production)
//# Prisma Migrate generates and applies migrations automatically based on changes in the Prisma schema.


//^ then Migrate file create-
// now run , npx prisma migrate dev to create migration files and push it.
// we can pass --name flag with it to include name:

         //*   npx prisma migrate dev --name init                                  // so now, migration.sql file create in migration folder and also create prisma/client in package.json

// In production,  we can run-   npx prisma migrate deploy    ,to run migration files.
// we can also include both of them in package.json scripts   


// if prisma client not create when we use this command -  npm install @prisma/client

