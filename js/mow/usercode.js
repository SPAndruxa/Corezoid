
// build command: npm install moment moment-timezone

const moment = require("moment");
require("moment-timezone");

module.exports = (data) => {
    var t = moment()
    
    data.utc_time2 = t.tz("UTC").format("HH:mm:ss");
    data.usa_time2 = t.tz("America/New_York").format("HH:mm:ss");
    data.ukraine_time2 = t.tz("Europe/Kiev").format("HH:mm:ss");

    return data;

};
