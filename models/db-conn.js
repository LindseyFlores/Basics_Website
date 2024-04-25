"use strict";

const sqlite3 = require('better-sqlite3');
const db = new sqlite3('./database.db'); //route to our database

module.exports = db;
