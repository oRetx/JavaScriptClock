var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var afternoon;
var evening = 18;

var showCurrentTime = function() {
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();

    var date = new Date();

    var getDate = date.toDateString();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
	  if (hours >= noon) {
		  meridian = "PM";
	  }

	  if (hours > noon) {
		  hours = hours - 12;
	  }
 
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
 
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
 
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian;
 
    clock.innerText = clockTime;

    document.getElementById('todaysDate').innerHTML = getDate;
};

var updateClock = function() {
  var time = new Date().getHours();
  var messageText;

  var timeEventJS = document.getElementById("timeEvent");
  
  if (time == afternoon) {
    messageText = "Good afternoon!";
  }

  else if (time == wakeuptime) {
    messageText = "Wake up!";
  }

  else if (time == lunchtime) {
    messageText = "Let's get lunch!";
  }

  else if (time < noon) {
    messageText = "Good morning!";
  }

  else if (time >= evening) {
    messageText = "Good evening!";
  }

  else {
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  
  showCurrentTime();
};

updateClock();

var oneSecond = 1000;
setInterval( updateClock, oneSecond);