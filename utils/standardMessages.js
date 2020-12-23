
var STD_DATE_FORMAT = "YYYY-MM-DD";
var message = {
	"SUCCESS": { "code": 200, "message": null }
	, "LIMIT_EXCEED_ERROR": { "code": 600, "message": "Query Limit Exceeded Error" }
	, "INVALID_QUERY_PERMS": { "code": 600, "message": "Invalid Parameters send" }
	, "MODEL_ERR": { "code": 700, "message": "Internal Database Error" }
	, "IVALID_DATA": { "code": 601, "message": "Internal Data Provided" }
	, "NO_REQ_FIELDS": { "code": 600, "message": "Not all required fields are send" }
	, "IVALID_DATE": { "code": 601, "message": "Invalid date format. All dates should be in " + STD_DATE_FORMAT + " format" }
	, "UN_REQ_FIELDS": { "code": 601, "message": "Invalid parameters send" }
	, "DB_CONNECTION_ISSUE": { "code": 700, "message": "Database Query/Connection Error" }
	, "DB_QUERY_ISSUE": { "code": 700, "message": "Database Query/Connection Error" }
	, "APP_UPDT": { "code": 48, "message": "Sorry, server unable to find app detials." }

};

exports.message = message;
