(function (exports) {
    "use strict";


      exports.multiQrs = function (m_query) {
        var semi_colon = '###semi-colon###';
        m_query = m_query.replace(/[("'`].*;.*[)"'`]/g, function (match) {
            return match.replace(/;/g, semi_colon);
        });
        var eor = '###EOR###';
        m_query = m_query.replace(/;/g, eor);
        var multiQrs = m_query.split(eor);

        for (var i = 0; i < multiQrs.length; i++) {
            multiQrs[i] = multiQrs[i].replace(new RegExp(semi_colon, 'gi'), ';');
            multiQrs[i] = trim(multiQrs[i]);
        }
        multiQrs = multiQrs.filter(function (el) { return el; });

        return multiQrs;
    }
   
}(typeof exports === "undefined" ? (this.simpleSqlParser = {}) : exports));
