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
  
  console.log("addDaysLeftEarlierYear: " + addDaysLeftEarlierYear(birthday_date));
  //console.log("dayString: "+ today.toDateString());
  //console.log("today: " + (today.getDate() < 10 ? "0" + today.getDate() : today.getDate())+ "." + (today.getMonth()+1) + "." + today.getFullYear() + " at " + today.getHours() + ":" + today.getMinutes() + ":" + today.getMilliseconds() );
}

function dayDiffByDates(date1, date2){
  
}

function addDaysLeftEarlierYear(date1){
  var daysInMonthLeft = ((date1) => {
    if(date1.getMonth() == 1 
      || date1.getMonth() == 3
      || date1.getMonth() == 5
      || date1.getMonth() == 7
      || date1.getMonth() == 8
      || date1.getMonth() == 10
      || date1.getMonth() == 12 
    ) {
      return 31 - date1.getDate();
    } else if(date1.getMonth == 4
      || date1.getMonth() == 6
      || date1.getMonth() == 9
      || date1.getMonth() == 11
    ) {
      return 30 - date1.getDate();
    } else { //february
      if(isLeapYear(date1.getFullYear())){
        return 29 - date1.getDate();
      } else {
        return 28 - date1.getDate();
      }
    }
  })(date1);
  
  var monthsLeft = 12 - (date1.getMonth()+1);//+1 because January is 0 and December is 11
  var daysFromMonthsLeftLeft = 0;
  for(var i = monthsLeft; i > 0; i--){
    console.log("i: " + i);
    if(i == 11){
      //add 28 or 29 for february
      isLeapYear(date1.getFullYear)? daysFromMonthsLeftLeft + 29 : daysFromMonthsLeftLeft + 28;
    } else if(i == 9 || i == 7 || i == 4 || i == 2){
      daysFromMonthsLeftLeft + 30;
    } else { //i is 10, 8, 6, 5, 3, or 1
      daysFromMonthsLeftLeft + 31;
    }
  }
  
  return daysFromMonthsLeftLeft + daysInMonthLeft;
}

function addDaysPastOngoingYear(date2){
  
}

function daysInbetweenTwoYears(year1, year2){
  var diff = Math.abs(year2 - year1);
  var y1, y2;
  var daysBetweenYears = 0;
  
  if(year1 <= year2){
    y1 = year1;
  } else {
    y1 = year2;
  }
  
  for(var i = 1; i < diff; i++){
    if(isLeapYear(y1 + i)){
      daysBetweenYears + 366;
    } else {
      daysBetweenYears + 365;
    }
  }
  
  return daysBetweenYears;
}
  
function isLeapYear(year){
  /* A leap year has following conditions:
   * 1. if it can be devided by 4 (no remainder)
   * 2. if 1 is true, but devidable by 100, then it's not a leap year
   * 3. if 1 and 2 are true, but also devidable by 400, then it is a leap year
  */
  if(year%4 == 0){
    if(year%100 == 0){
      if(year%400 == 0){
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
}
  
function dayDiffByTimestamp(date1, date2){
  var timediff = Math.abs(date2.getTime() - date1.getTime()); 
  return Math.ceil(timediff / (1000 * 3600 * 24)); //1000 * 60 * 60 * 24 is approximate number of milliseconds per day - assuming a day has exactly 24 hours
}