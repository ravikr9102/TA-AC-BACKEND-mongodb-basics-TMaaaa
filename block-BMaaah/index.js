
// 1. Create a database named `blog`.
// 2. Create a collection called 'articles'.

// use blog
db.createCollection('articles');

// 3. Insert multiple documents(at least 3) into articles. It should have fields

db.articles.insertMany( [
    {
        id : 1,
        title: 'introduction to internet of things',
        details: 'this is the first article',
        author: {
          name: 'Rahul thakur',
          email: 'iamrahul079@gmail.com',
          age: 19
        },
        tags: ['iot', 'internet']
      },
      {
        id : 2, 
        title: 'C mother of all language',
        details: 'this is the second article',
        author: {
          name: 'Rahul Mandyal',
          email: 'example@gmail.com',
          age: 20
        },
        tags: ['c', 'c++']
      },
      {
        id : 3,
        title: 'learn Maching learning',
        details: 'this is the third article',
        author: {
          name: 'Vishal thakur',
          email: 'vish@gamil.com',
          age: 19
        },
        tags: ['machinelearning', 'python']
      }
]);
// 4. Find all the articles using `db.COLLECTION_NAME.find()`

db.articles.find({}).pretty();

// find By using a specific id 

db.articles.find({id : 1}).pretty()

// find a document by using the title only 

db.articles.find({title :'C mother of all language'});

// find by  using  the author name   

db.articles.find({'author.name': 'Rahul Mandyal'}).pretty();

// finding by using a specific tag 

db.articles.find({tags : {$all: ['machinelearning']}}).pretty();

// 9. Update title of a document using its \_id field.

db.articles.update({id : 1},{$set:{title : 'learn how to earn by internet'}});

// 10. Update a author's name using article's title.

db.articles.update({title :'C mother of all language'},{$set:{'author.name' : 'Rakesh Mandyal'}});

// 11. rename details field to description from all articles in articles collection.

db.articles.updateMany({} ,{$rename :{'details' : 'description'}});


// 12. Add additional tag in a specific document.

db.articles.update({id : 1}, {$push:{tags: 'internet tricks'}});

// 13. Update an article's title using $set and without $set.

db.articles.update({id : 2},{$set:{title : 'learn c or c++ the mother of all languages'}});

db.articles.update({id : 3}, {title : 'Master Data science '})

// Difference Between both of them 
//  By using $set 
// if we use $set then it will updates  only a  specific part  rest of the document is not erased or there wil be no affect on the other key value pairs  it will updates only that specific key 
// by using update only
// if we use updates only will will remove the rest of the document and rewrite again it will not updates that specific key and value pair 

// 13. find an article using title and increment it's auhtor's age by 5.
// db.articles.update({title :'learn c or c++ the mother of all languages' , {$set:{'author.name' :+5}}});
// 14. Delete a document using \_id field with `db.COLLECTION_NAME.remove()`.
db.articles.remove({id : 1});


// ****************  question two *********************** 
db.users.insertMany([
    {
      age: 49,
      name: "Maurice Brock",
      email: "wuk@hibpiz.ch",
      gender: "Female",
      sports: ["cricket", "football"],
      scores: [24, 35, 18, 16],
      weight: 45,
    },
    {
      age: 37,
      birthday: "7/15/1986",
      name: "Virgie Cunningham",
      email: "ezogafa@de.gm",
      gender: "Male",
      sports: ["football"],
      scores: [17, 35, 43],
      weight: 52,
    },
    {
      age: 48,
      birthday: "5/14/1961",
      name: "Alexander Holt",
      email: "han@mu.pe",
      gender: "Male",
      sports: ["cricket", "football", "TT"],
      scores: [24, 30, 16],
      weight: 55,
    },
    {
      age: 53,
      birthday: "11/15/1963",
      name: "Derek Dawson",
      email: "polril@now.de",
      gender: "Male",
      sports: ["cricket", "hockey"],
      scores: [20, 15, 38, 23],
      weight: 49,
    },
    {
      age: 34,
      birthday: "7/24/1964",
      name: "Cynthia Cobb",
      email: "wujjarpob@jecimpar.gu",
      gender: "Female",
      sports: ["cricket"],
      scores: [41, 17, 28],
      weight: 51,
    },
    {
      age: 33,
      birthday: "10/26/1982",
      name: "Isabella Atkins",
      email: "ononuzas@givhoz.ca",
      gender: "Female",
      sports: ["cricket", "football", "hockey", "TT"],
      scores: [14, 38, 29, 45, 20],
      weight: 49,
    },
    {
      age: 47,
      birthday: "10/12/1978",
      name: "Katharine Bryan",
      email: "zo@pebi.sa",
      gender: "Male",
      sports: ["TT", "hockey", "khokho"],
      scores: [27, 20, 34],
      weight: 58,
    },
    {
      age: 41,
      birthday: "1/28/1991",
      name: "Beatrice Fleming",
      email: "ufufsa@pujizren.tk",
      gender: "Female",
      sports: ["football", "khokho"],
      scores: [30, 20, 15, 29, 43],
      weight: 47,
    },
    {
      age: 26,
      birthday: "3/23/1998",
      name: "Tom Fields",
      email: "wasodjow@ofaba.gf",
      gender: "Female",
      sports: ["khokho"],
      scores: [37, 29, 18, 43, 49],
      weight: 50,
    },
    {
      age: 33,
      birthday: "11/14/1960",
      name: "Steve Ortega",
      email: "dupus@ca.ls",
      gender: "Female",
      sports: ["cricket", "football", "hockey"],
      scores: [12, 15, 20],
      weight: 51,
    },
    {
      age: 24,
      birthday: "1/5/1994",
      name: "Suraj Kumar",
      weight: 50,
      gender: "Male",
      sports: ["football", "cricket", "TT"],
    },
  ]);

  db.users.find({gender : 'Male' }, {sports : 'cricket'});
  db.users.update({name: "Steve Ortega"},{$push:{sports:'golf'}})
  db.users.find({sports : {$in:['cricket','football']}});
  db.users.find({name : /ri/i});