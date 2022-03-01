//display todays date and day
var currentDate = moment().format ('dddd, MMM Do YYYY, h:mm:ss a');

$("#currentDay").html(currentDate);