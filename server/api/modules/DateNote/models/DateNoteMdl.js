var sqldb = require(appRoot + '/config/db.config');
var dbutil = require(appRoot + '/utils/db.utils');
var df = require(appRoot + '/utils/error.utils');
var cntxtDtls = df.getModuleMetaData(__dirname, __filename);


/*****************************************************************************
* Function      : insrt_DateNoteMdl
* Description   : Add new  Date Notes
* Arguments     : callback function
******************************************************************************/
exports.insrt_DateNoteMdl = (data,callback) => {
    var QRY_TO_EXEC = `INSERT INTO date_nte_lst_t(nte_nm,nte_dt,cntnt,a_in,i_ts) 
                        VALUES('${data.nte_nm}','${data.nte_dt}','${data.nte_cnt}',1,CURRENT_TIMESTAMP())`;

    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, user, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, user);
}

/*****************************************************************************
* Function      : slct_DateNoteMdl
* Description   : Select Date Notes
* Arguments     : callback function
******************************************************************************/
exports.slct_DateNoteMdl = (callback) => {
    var QRY_TO_EXEC = `select  ROW_NUMBER() OVER (ORDER BY nte_id) as s_no,nte_nm,nte_dt,cntnt,a_in,i_ts 
                        from date_nte_lst_t
                        where a_in=1
                        ORDER BY nte_id`;
    
    if (callback && typeof callback == "function")
        dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, user, function (err, results) {
            callback(err, results);
            return;
        });
    else
        return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, user);
}



