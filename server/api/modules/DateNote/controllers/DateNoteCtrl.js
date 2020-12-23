const DatenoteMdl = require(appRoot + '/server/api/modules/DateNote/models/DateNoteMdl');
var df = require(appRoot + '/utils/error.utils');


exports.insrt_DateNoteCtrl = function (req, res) {
    DatenoteMdl.insrt_DateNoteMdl(req.body)
        .then(function (results) {
            df.formatSucessRes(req,res, results, cntxtDtls, '', {});
        }).catch(function (error) {
            df.formatErrorRes(req,res, error, cntxtDtls, '', {});
        });
}


exports.slct_DateNoteCtrl = function (req, res) {
    DatenoteMdl.slct_DateNoteMdl()
        .then(function (results) {
            df.formatSucessRes(req,res, results, cntxtDtls, '', {});
        }).catch(function (error) {
            df.formatErrorRes(req,res, error, cntxtDtls, '', {});
        });
}
