//! Introduction to Drizzle ORM -

//# Drizzle ORM is a lightweight and type-safe Object Relational Mapping (ORM) library for SQL databases.
//# It focuses on providing a simple and developer-friendly API while maintaining high performance.
//# Drizzle ORM supports both TypeScript and JavaScript, offering full type safety for queries.
//# Drizzle ORM provides built-in query building and executes queries with relying on raw SQL strings.
//# Designed for developers who want an ORM that's minimal, efficient to use.

//# Drizzle ORM is lightweight and doesn't rely on a Rust engine like Prisma, making it faster and more straightforward to use.
//# Unlike Prisma, Drizzle ORM always executes a single query per request unless you're using it optional query API, which we recommend you avoid.
//# Drizzle ORM is closer to raw SQL, so if you're familiar with SQL, you can easily translate SQL queries into Drizzle queries.
//# All configurations in Drizzle ORM are done in JavaScript or TypeScript, unlike Prisma, which uses its own domain-specific language(DSL).
//# Drizzle ORM is designed for simplicity and minimal overhead, allow write cleaner and more direct SQL-based code.
//# Drizzle ORM's approach to queries and configurations makes it developers who prefer a simple, SQL-native experience over abstraction layers.


//*  Comparison of SQL, Drizzle, Prisma  -

//^ SQL
// SELECT * FROM users;

//^ Prisma
// const users = await prisma.user.findMany();

//^ Drizzle   (must use)
// const users = await db.select().from('users');

//^ Drizzle with Query Api  - (don't use )
// const users = await db.query.users.findMany();


//$ Process-

// npm init -y

//^ Step 1 - Install mysql2 package
// npm i drizzle-orm mysql2
// npm i -D drizzle-kit

//^ Step 2 - Setup connection variables in .env file
// DATABASE_URL=

// in Sql drizzle_db name se database create 

//^ Step 3 - Connect Drizzle ORM to the database  (config ---> db.js)
// import { drizzle } from "drizzle-orm/mysql2";
// const db = drizzle(process.env.DATABASE_URL);

//^ Step 4- create a table   (drizzle --> schema.js)

// import { int, mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';

// export const usersTable = mysqlTable('users_table', {
//   id: serial().primaryKey(),
//   name: varchar({ length: 255 }).notNull(),
//   age: int().notNull(),
//   email: varchar({ length: 255 }).notNull().unique(),
// });

//^ Step 5 - Setup Drizzle config file

// import { defineConfig } from 'drizzle-kit';

// export default defineConfig({
//   out: './drizzle',
//   schema: './drizzle/schema.js',
//   dialect: 'mysql',
//   dbCredentials: {
//     url: process.env.DATABASE_URL,
//   },
// });

//^ step 6- Applying changes to the database

//npm run drizzle-kit generate               
//npm run drizzle-kit migrate
//npm run drizzle-kit studio                       // studio at a time one project work ,  it gives url - https://local.drizzle.studio

//^ now Crud operation apply in app.js file


