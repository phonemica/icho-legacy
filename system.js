/* This file contains all the settings for the app. Values in this file are to be set by the system. User settings are in user.js */

var http = require('http');
var fs = require('fs');

/* jQuery */
$ = require('jquery');
window.jQuery = require('jquery');

/* PouchDB*/
const PouchDB = require('pouchdb-browser'); // changed from pouchdb to fix a windows issue
PouchDB.plugin(require('pouchdb-authentication'));
const localDB = new PouchDB('local');
const remoteDB = new PouchDB('http://' + un + ':' + pw + '@phonemica.net:5984/' + dbName);

/* UUID generation */
const uuid = require('uuid/v1');

let settings = {},
	language,
	user;

const displayItem = "lexeme";

$.getJSON("./config.json", function(json) {
	settings = json;
	user = settings.username;
	language = settings.project.language;
	dbName = settings.project.language.toLowerCase();
});
