//! Introduction of MongoDB-

//# MongoDB is a NoSQL database that stores data in a flexible, JSON like format called BSON (Binary JSON).
//# It's document-oriented, meaning data is stored as documents in collections instead of rows and tables.
//# MongoDB supports dynamic schemas, allowing fields to vary between documents in the same collection.
//# MongoDB provides features like indexing, aggregation pipelines, and replication for high performance and reliability.
//# Commonly used for application requiring flexible data models.

//! Key Concepts of MongoDB-
//$ Collections-
//# A collection is a group of documents in MongoDB, similar to a table in relational databases.
//# Collections do not enforce a fixed schema, allowing documents to have different fields.
//# Example: A "users" collection can store data about different users.

//$ Documents- 
//# A document is the basic unit of data in MongoDB, stored in a Json like format (called BSON)
//# Documents contain key-value pairs, where each key is a field, and the value is the data.
//  {
//     "name":"rock",
//     "age": "21"
//  } 
//

//$ BSON(Binary JSON)-
//# BSON is the binary-encoded format MongoDB uses to store data.
//# It extends JSON by adding data types like Data, Binary, and others.
//# BSON is efficient for data storage and supports faster parsing compared to JSON.
//# e.g., A BSON document might store a Date field that is not natively supported in JSON.
