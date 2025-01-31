//! DataBase-
//# a database is a structured way to store and manage data.
//# It helps organize data to easy access, retrieval and updates.
//# Database store data like tables, documents, or key-value pairs.
//# They are used in applications to handle user and system data.
//# Database ensure data is consistent and available when needed.
//# Example MySQl, MongoDB, PostgreSQL, Redis


//? Why do we need Database?
//# 1. Data Integrity - Ensure Data consistency. for example, In banking A transaction either happens fully or not at all.
//# 2. Concurrency Management - how multiple users can access the same data simultaneously without conflicts.
//# 3. Backup & Recovery - Automatic processes to save data and restore it after failures.
//# 4. scalability - how database are designed to handle growth from hundreds to millions of records.


//? Types of Database -- 2 types
//$ 1. SQL Database-  
//# Store data in structured tables with rows and columns.
//# Use predefined schemas, where the structure is fixed before data entry.
//# Support complex queries using SQL (Structured Query Language)
//* e.g.- MySQL, PostgreSQL, SQL Server etc.

//$ 2. NoSQL Database-
//# Designed for flexibility with unstructured, semi-structured or large-scale data.
//# Do not require a fixed schema, making them ideal for dynamic data models.
//# Support Complex queries using query languages or APIs specific to each NoSQL database, such as MongoDB's JSON like queries, Cassandra's CQL(Cassandra Query Language), or Neo4j's Cypher for graph traversal.
//* e.g. Based on Format in which data is stored:
//* Key-Value: Redis, DynamoDB (e.g. caching or session data)
//* Document: MongoDB, CouchDB(e.g. JSON like document for user profiles)
//* Graph: Neo4j, ArangoDB(e.g Social networks or recommendation engines)