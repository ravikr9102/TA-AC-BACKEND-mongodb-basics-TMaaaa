writeCode

Write code to:-

- create a database named `sports`. // use sports


- list all databases present in local mongod server. // show dbs


- create 3 collections named `cricket`, `football`, `TT` in sports databse. // db.createCollections('cricket');
db.createCollection('football');
db.createCollection('TT);

- add multiple players in those collections which should have fields like `name`, `age` and `email` and `bid_price`.

db.cricket.insert({name : "Ravi Kumar" , age: 19 , email : 'rkravi9102@gmail.com',bid_price : '1cr'})
db.football.insert({name : "Ravi Kumar" , age: 19 , email : 'rkravi9102@gmail.com',bid_price : '1cr'})
db.TT.insert({name : "Ravi Kumar" , age: 19 , email : 'rkravi9102079@gmail.com',bid_price : '1cr'})

- list all collections in sports database.

// show collections

- rename `TT` collection to `tennis`.

// db.renameCollection('tennis');

- create a capped collection called `khokho` which should have max 3 documents.

// db.createCollection('khokho',{capped: true , size:500 , max:3})

  Try inserting more than 3 and see what happens?
- check whether a collection is capped or not?

// db.khokho.isCapped();//true

- drop all documents from `football` collection.

db.football.remove()

- delete cricket collection completely.

// db.cricket.drop()

- delete sports database.

// db.dropDatabase()

- check which database you are connected to ?

// still connected to sports databas

- connect to test database

// use test
