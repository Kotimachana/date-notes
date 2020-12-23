var dateNoteRtr = require('express').Router();
var datenoteCtrl = require(appRoot +'/server/api/modules/DateNote/controllers/DateNoteCtrl'); 

dateNoteRtr.post('/Insert-Datenote',datenoteCtrl.insrt_DateNoteCtrl);

dateNoteRtr.post('/Select-Datenote',datenoteCtrl.slct_DateNoteCtrl);

module.exports = dateNoteRtr;