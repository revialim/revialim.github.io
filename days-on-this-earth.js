function calcDaysOnEarth() {
  var today = new Date();
  var birthday = document.getElementById("birthday-field");
  var birthday_date = new Date(birthday.value);
  var earthday = document.getElementById("earthday-field");
  var days;
  var dayString;
  //console.log(birthday.value +" birthday date: " + birthday_date.toDateString());
  if(birthday_date.getTime() > today.getTime()){
    earthday.innerHTML = "Dear time traveller, your birthday lies in the future :O";
  } else {
    days = dayDiffByTimestamp(today, birthday_date);
    dayString = (days) => {
      if(days.toString().slice(-1) == "1"){
        return "st";
      } else if(days.toString().slice(-1) == "2"){
        return "nd";
      } else if(days.toString().slice(-1) == "3"){
        return "rd";
      } else {
        return "th";
      }
    };
    earthday.innerHTML = "Today is your " + days + dayString(days) + " earthday!";
  }
  //console.log("dayString: "+ today.toDateString());
  //console.log("today: " + (today.getDate() < 10 ? "0" + today.getDate() : today.getDate())+ "." + (today.getMonth()+1) + "." + today.getFullYear() + " at " + today.getHours() + ":" + today.getMinutes() + ":" + today.getMilliseconds() );
}
  
function isLeapYear(year){
  
}
  
function dayDiffByTimestamp(date1, date2){
  var timediff = Math.abs(date2.getTime() - date1.getTime()); 
  return Math.ceil(timediff / (1000 * 3600 * 24)); //1000 * 60 * 60 * 24 is approximate number of milliseconds per day
}