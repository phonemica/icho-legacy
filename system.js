/* This file contains all the settings for the app. Values in this file are to be set by the system. User settings are in user.js */

var http = require('http');
var fs = require('fs');

/* jQuery */
$ = require('jquery');
window.jQuery = require('jquery');

/* PouchDB*/
const PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-authentication'));
const localDB = new PouchDB('ailot');

/* app settings */
let online = false; // change to true to enable online mode
let serverFirst = false; // prioritise remote over local
let liveSynching = false; // live synchronisation
let un = "ailot"; // admin user for couchdb
let pw = "E1c59Z5uO09F1pH"; // admin password for couchdb
var remoteDB = new PouchDB('http://' + un + ':' + pw + '@phonemica.net:5984/ailot');

const appName = "ichō"; // maybe change this at some point
const altAppName = "銀杏";
let thisVersion = "000004";
