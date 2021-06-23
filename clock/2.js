var time = {};

(function () {
  var clock = document.getElementById('clock');
  
  (function tick () {
    var minutes, d = new Date();
    time.weekday = d.getDay();
    time.day = d.getDate();
    time.month = d.getMonth() + 1; //JS says jan = 0
    time.year = d.getFullYear();
    time.minutes = d.getMinutes();
    time.hours = d.getHours() + 1; //eastern time zone
    time.seconds = d.getSeconds();
    time.ms = d.getMilliseconds();
    
    minutes = (time.minutes < 10 ? '0' + time.minutes : time.minutes);
    
    clock.innerHTML = time.hours + ':' + minutes +':' +time.seconds+' ' + time.month + '/' + time.day + '/' + time.year;
    
    window.setTimeout(tick, 1000);
  }()); // Note the parens here, we invoke these functions right away
}()); // This one keeps clock away from the global scope

console.log(time.ms); // We have access to all those properties via a single variable.