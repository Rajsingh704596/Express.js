//! Introduction of MongoDB-
//# MongoDB is a NoSQL database that "stores data in a flexible, JSON like format called BSON (Binary JSON - Binary encoded format)".
//# It's document-oriented, meaning data is stored as documents in collections instead of rows and tables.
//# MongoDB supports dynamic schemas, allowing fields to vary between documents in the same collection.
//# MongoDB provides features like indexing, aggregation pipelines, and replication for high performance and reliability.
//# Commonly used for application requiring flexible data models.

//e.g cluster create-name(TestDB) [for connect Local/Cloud mongoDb server ]
//    (inside that cluster)-> database-name(UserFormDb)-> collection-name (Contact) -> store document(BSON format, but visually show in JSON)
//                                                     -> collection-name (Service) -> store multiple document of service 
//^   (inside database-name multiple collection store and each collection have store multiple documents(BSON data)) 

//! Key Concepts of MongoDB- 
//$ Collections-
//# A collection is a "group of documents in MongoDB", similar to a table in relational databases.
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
//# It extends JSON by adding data types like Date, Binary, and others.
//# BSON is efficient for data storage and supports faster parsing compared to JSON.
//# e.g. A BSON document might store a Date field that is not natively supported in JSON. (In short-"BSON support store data like date, Binary,etc. but JSON not support that data")


//! Installing and setting up MongoDB-
// download MongoDB Community server (link)- https://www.mongodb.com/docs/manual/administration/install-community/
// install MongoDB and MongoDB Compass (by default install it's software for interacting with mongodb database)
// Manually Mongosh install - it's command line tool for interacting with MongoDB programmatically.


