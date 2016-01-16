function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }  // add zero in front of numbers < 10
    return i;
}

function startTime() {
    //clock function
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var t = setTimeout(startTime, 500);

    //adjust h,m,s into right format 
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
}

var t;
var intervar = 0;//to stop interval


/*
TODO:
check for running interval with boolean var – not by intervar != 0
*/

function initTimer() {
    var init = parseInt(document.forms["promodoro"].elements['minutes'].value);
    if(init != "NaN") {
        t = init * 60;//minutes to seconds
        setTimer();
        if(intervar != 0) {//if a timer exists, delete running interval
            clearInterval(intervar);
            intervar = 0;
        }
        intervar = setInterval(setTimer,1000);
    }
    else {
        document.getElementById("timer").innerHTML = "Incorrect time value!";
    }
}

function setTimer() {
    var m, s;
    if (t > 0) {
        //countdown as long as time remains
        t = t - 1; //after one second, decrease by one
        m = Math.floor(t / 60); //calculate minutes
        s = t % 60; // and remaining seconds
        m = checkTime(m); //adjust minutes and seconds into right format
        s = checkTime(s);
        document.getElementById("timer").innerHTML = m + ":" + s;
    }  else { 
        //no more remaining time
        clearInterval(intervar);
        intervar = 0;
        document.getElementById("timer").innerHTML = "TIME UP!";
    }  
}


function showVal(newVal, i) {
    //var hexR, hexG, hexB;
    //hexR = hexG = hexB = "0";
    var rgbcol;
    
    if (i === 1) {
        document.getElementById("valBox1").innerHTML = newVal;
    } else if (i === 2) {
        document.getElementById("valBox2").innerHTML = newVal;
    } else if (i === 3) {
        document.getElementById("valBox3").innerHTML = newVal;
    }
    rgbcol = document.getElementById("colbox").style.backgroundColor;
    
    document.getElementById("rgb").innerHTML = rgbcol;
}

function setColor(element, color, i) {
    var h, s, l;
    h = 180;
    s = 100;
    l = 50;
    if (i === 1) {
        element.style.backgroundColor = "hsl(" + color + ", " + s + "%, " + l + "%)";
        h = color;
    } else if (i === 2) {
        element.style.backgroundColor = "hsl(" + h + ", " + color + "%, " + l + "%)";
        s = color;
    } else if (i === 3) {
        element.style.backgroundColor = "hsl(" + h + ", " + s + "%, " + color + "%)";
        l = color;
    }
}