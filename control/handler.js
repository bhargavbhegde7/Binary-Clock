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
    console.log(dateTime);
    return dateTime;
}// format :  ---2016/11/21 19:43:46---

//http://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

function setDivVal(divId, isHigh){
  var divColor = 'lightblue';
  if(isHigh==="1"){
    divColor = 'white';
  }
  document.getElementById(divId).style.backgroundColor = divColor;
}

function handleSecondSquares(secondsArray){
  for(var i = 0; i < 6; i++){
    setDivVal('sec-'+i, secondsArray[5-i]);
  }
}

function handleMinuteSquares(minutesArray){
  for(var i = 0; i < 6; i++){
    setDivVal('m-'+i, minutesArray[5-i]);
  }
}

function handleHourSquares(hoursArray){
  for(var i = 0; i < 5; i++){
    setDivVal('h-'+i, hoursArray[4-i]);
  }
}

function addPadding(binArray, reqLength){
  var extraLength = reqLength - binArray.length;
  for(var i = 0; i<extraLength; i++){
    binArray.unshift("0");
  }
  return binArray;
}

setInterval(function() {
  var dateTime = getDateTime();

  //arrays of '0' and '1'
  var seconds = dec2bin(parseInt(dateTime.substring(17, 19))) .split("");
  var minutes = dec2bin(parseInt(dateTime.substring(14, 16))).split("");
  var hours = dec2bin(parseInt(dateTime.substring(11, 13))).split("");

  handleSecondSquares(addPadding(seconds, 6));
  handleMinuteSquares(addPadding(minutes, 6));
  handleHourSquares(addPadding(hours, 5));
}, 1000);
