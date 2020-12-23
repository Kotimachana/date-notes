var std         = require(appRoot+'/utils/standardMessages');


exports.formatSucessRes = function (req, res, results,cntxtDtls,controllerName,{success_status=std.message.SUCCESS.code
                                                       ,success_msg=std.message.SUCCESS.message
                                                       ,error_status=std.message.MODEL_ERR.code
                                                       ,err_message=std.message.MODEL_ERR.message}) {

           if(req.perm===undefined)
            res.send({"status":success_status,"message":success_msg,"data":results,"errors":[]});
           else
            res.send({"status":success_status,"message":success_msg,"data":results,"perm":req.perm,"errors":[]});

}



exports.formatErrorRes = function (req, res, results,cntxtDtls,controllerName,{success_status=std.message.SUCCESS.code
                                                       ,success_msg=std.message.SUCCESS.message
                                                       ,error_status=std.message.MODEL_ERR.code
                                                       ,err_message=std.message.MODEL_ERR.message}) {
            res.send({"status":error_status,"message":err_message,"data":[],"errors":[]}); 
}
