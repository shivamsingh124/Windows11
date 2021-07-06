// initialize DB
let db;

let dbOpenRequest = indexedDB.open("Gallery", 1);
dbOpenRequest.onupgradeneeded = function (e) {
  db = e.target.result;
  db.createObjectStore("Media", { keyPath: "mid" }); // table will only be create when db is create first time
};

dbOpenRequest.onsuccess = function (e) {
  db = e.target.result;
};

dbOpenRequest.onerror = function (e) {
  alert("Inside on error !!");
};
