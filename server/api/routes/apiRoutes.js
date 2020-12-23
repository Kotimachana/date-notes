var express = require('express');
var router = express.Router();

router.use('/notes', require(appRoot + '/server/api/routes/DateNotes/dateNoteRtr'));

module.exports = router;

