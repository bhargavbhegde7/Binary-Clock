var remote = require('electron').remote;
const main = remote.require('./main.js');

//http://stackoverflow.com/questions/10211145/getting-current-date-and-time-in-javascript
function getDateTime() {

    var now     = new Date();

    var year    = now.getFullYear();
    var month   = now.getMonth()+1;
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds();

    if(month.toString().length == 1) {
        var month = '0'+month;
    }
    if(day.toString().length == 1) {
        var day = '0'+day;
    }
    if(hour.toString().length == 1) {
        var hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
        var minute = '0'+minute;
    }
    if(second.toString().length == 1) {
        var second = '0'+second;
    }

    var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;
    return dateTime;
}// format :  ---2016/11/21 19:43:46---

//http://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

setInterval(function() {
  var dateTime = getDateTime();

  var seconds = parseInt(dateTime.substring(17, 19));
  var minutes = parseInt(dateTime.substring(14, 16));
  var hours = parseInt(dateTime.substring(11, 13));

  // document.getElementById('sec').innerHTML = dec2bin(seconds);
  // document.getElementById('min').innerHTML = dec2bin(minutes);
  // document.getElementById('hr').innerHTML = dec2bin(hours);

}, 1000);
