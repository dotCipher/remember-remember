var eventDateTimeString = "2016-11-05"
var eventTime = moment(eventDateTimeString);
var currentTime = moment();
var diffTime = eventTime - currentTime;
var duration = moment.duration(eventTime - currentTime);
var interval = 1000;

setInterval(function(){
  duration = moment.duration(duration - interval);
  $('.days').html("<span class=\"inverted small\">" + Math.floor(duration.asDays()) + "</span>");
    $('.hours').html("<span class=\"inverted small\">" + duration.hours() + "</span>");
    $('.minutes').html("<span class=\"inverted small\">" + duration.minutes() + "</span>");
    $('.seconds').html("<span class=\"inverted small\">" + duration.seconds() + "</span>");
}, interval);
