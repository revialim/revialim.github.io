
//var birthday = new Date("12/15/2010");


//var timeDiff = Math.abs(birthday.getTime() - today.getTime());
//var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

function calcDaysOnEarth() {
  var today = new Date();
  var birthday = document.getElementById("birthday-field");
  console.log(birthday.innerHTML);
  console.log("today:" + today.getDate);
  today = new Date();
  
  console.log("later today:" + today.getDate().day);
}