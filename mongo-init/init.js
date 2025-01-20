print('Start #################################################################');


// init.js
// use the db
db = db.getSiblingDB('company');

// create user
// db = db.getSiblingDB('api_prod_db');
// db.createUser(
//   {
//     user: 'api_user',
//     pwd: 'api1234',
//     roles: [{ role: 'readWrite', db: 'api_prod_db' }],
//   },
// );
// db.createCollection('users');

// db = db.getSiblingDB('api_dev_db');
// db.createUser(
//   {
//     user: 'api_user',
//     pwd: 'api1234',
//     roles: [{ role: 'readWrite', db: 'api_dev_db' }],
//   },
// );
// db.createCollection('users');

// db = db.getSiblingDB('api_test_db');
// db.createUser(
//   {
//     user: 'api_user',
//     pwd: 'api1234',
//     roles: [{ role: 'readWrite', db: 'api_test_db' }],
//   },
// );
// db.createCollection('users');

// Create todos collection if it doesn't exist
db.createCollection('todos');



// Insert initial data
db.todos.insertMany([
    { text: "go to the gym", isCompleted: false, id: 1 },
    { text: "buy food", isCompleted: false, id: 2 },
    { text: "buy the gifts", isCompleted: false, id: 3 },
    { text: "clean the house", isCompleted: false, id: 4 },
    { text: "call mom", isCompleted: false, id: 5 },
    { text: "finish report", isCompleted: false, id: 6 },
    { text: "schedule dentist", isCompleted: false, id: 7 },
    { text: "pay bills", isCompleted: false, id: 8 },
    { text: "wash car", isCompleted: false, id: 9 },
    { text: "walk dog", isCompleted: false, id: 10 }
]);

print("Data has been written to the collection");
print('END #################################################################');
