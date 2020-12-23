var sqlParser = require(appRoot + '/utils/sql.parser');
var df = require(appRoot + '/utils/error.utils');
var cntxtDtls = df.getModuleMetaData(__dirname, __filename);

exports.execQuery = function (ConPool, Qry, cntxtDtls, userDtls, callback) {
      if (Qry) {
            Qry = Qry.trim();
            // console.log(Qry);

            // Split query by semi-colon
            var multiQrs = sqlParser.multiQrs(Qry);
            // console.log(multiQrs);

            const len = multiQrs.length;
            let q = 0;
            let qry_rslts = [];
            if (callback && typeof callback == "function")
                  multiQrs.forEach(query => {
                        executeEachQuery(query, qry_rslts, ConPool, cntxtDtls, userDtls, function (err, results) {
                              if (err) {
                                    callback(err, results);
                                    return;
                              }
                              q++;
                              if (q == len) {
                                    if (results) len > 1 ? results : results = results[0]
                                    callback(err, results);
                              }
                        })
                  })
            else
                  return new Promise((resolve, reject) => {
                        multiQrs.forEach(query => {
                              executeEachQuery(query, qry_rslts, ConPool, cntxtDtls, userDtls, function (err, results) {
                                    if (err) {
                                          reject(err);
                                    }
                                    // console.log(q);
                                    q++;
                                    if (q == len) {
                                          if (results) len > 1 ? results : results = results[0];
                                          resolve(results);
                                    }
                              })
                        })

                  })

      } else console.log('No Query to execute');
}
