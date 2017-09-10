/* -------------------------------- */
/* DATABASE MANAGER */
/* -------------------------------- */
var sqlite3 = require('sqlite3');

var dbSrc = './database/reminders.db';
var db = new sqlite3.Database(dbSrc);

getAllData = () => {

  return new Promise(function(resolve, reject) {
    db.serialize(function() {
      db.all("SELECT * FROM reminders;", function(err, rows) {
        if (err) {
          console.log(err);
        } else {
          resolve(rows);
        }
      });

      db.close();

    });
  })
};

// db.serialize(function() {
//   db.run("insert into reminders (task, completed, remind, remindAt) VALUES ('test item 2', 1, 1, CURRENT_TIMESTAMP);", function(err, rows) {
//     console.log(err);
//   })
// });


module.exports = {
  getAllData
}
