writeCode

Write command to

- List collections from a database. // show collections
- create a new collection in your country database which you created recently. //  db.createCollection('delhi');

Write code to:-

- crate a database named `weather` // db.createCollection('Weather')
- create a capped collection named `temperature` with maximum of 3 documents and try inserting more than 3 to see the result. // db.createCollection('temperature',{capped: true, size:500,max:3});

- create a simple collection named `humidity` // db.createCollection('humidity');
- check whether `temperature` collection is capped or not ? db.humidity.isCapped();
- Delete `humidity` collection and then the entire database(weather). db.humidity.drop();