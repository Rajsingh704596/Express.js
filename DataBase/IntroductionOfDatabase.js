//! DataBase-
//# A database is a structured way "to store and manage data".
//# It helps organize data to easy access, retrieval and updates.
//# Database store data like tables, documents, or key-value pairs (format).
//# They are used in applications to handle user and system data.
//# Database ensure data is consistent and available when needed.
//# Example MySQl, MongoDB, PostgreSQL, Redis 

//? Why do we need Database?
//# 1. Data Integrity - Ensure Data consistency. for example, In banking a transaction either happens fully (complete) or not at all.
//# 2. Concurrency Management - Deal with how multiple users can access the same data simultaneously without conflicts.
//# 3. Backup & Recovery - Automatic processes to save data as a backup and restore it after failures.
//# 4. scalability - how database are designed to handle growth from hundreds to millions of records.


//? Types of Database -- 2 types
//$ 1. SQL Database-  (Structured Query language / Relational database)
//# Store data in structured tables with rows and columns (format).
//# Use predefined schemas, where the structure is fixed before data entry (fixed schema means schema based data allow to store).
//# Support complex queries using SQL (Structured Query Language)
//* e.g.- MySQL, PostgreSQL, SQL Server etc.

//$ 2. NoSQL Database-  (Non Relational database)
//# Designed for flexibility with unstructured, semi-structured or large-scale data.
//# Do not require a fixed schema, making them ideal for dynamic data models.(any data allow to store)
//# Support Complex queries using query languages or APIs specific to each NoSQL database, such as MongoDB's JSON like queries, Cassandra's CQL(Cassandra Query Language), or Neo4j's Cypher for graph traversal.
//* e.g. Based on Format in which data is stored: (in NoSQl database )
     //^ Document : MongoDB, CouchDB(e.g. JSON/BSON like document for user profiles) - it's semi-structured (means both structured or unstructured data)
    //^ Key-Value : Redis, DynamoDB (e.g. caching or session data, key with any value) - it's unstructured 
    //^ Graph : Neo4j, ArangoDB(e.g Social networks or recommendation engines)     - it's structured but not relational
    //^ Column-based : Cassandra  (wide column table ) -  sometime semi-structured


 
 //? ORM (object-Relational Mapping) and ODM (Object-Document Mapping ) why this tool need :-
 //# for Cleaner code : no need to write Raw SQL/queries .
 //# for security purpose : prevent from SQL injection .
 //# Schema Validation : check data structured .
 //# Productivity : Development will fast.

 // e.g ORM tool (Prisma , Drizzle )  -  used to write query for SQL database like MySQL , PostgreSQL , SQLite . (Note- Prisma support with SQLserver database but Drizzle not support)
 // e.g ODM tool (Mongoose) - used for MongoDB.