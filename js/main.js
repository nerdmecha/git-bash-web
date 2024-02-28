$(document).ready(function() {
    var times = new Date();
    var years = times.getFullYear();
    var months = times.getMonth(); // 0 to 11
    var days = times.getDate();
    var hours = times.getHours();
    var hoursCalc;
    var hoursResult;
    var mins = times.getMinutes();
    var state;

    const monthsArray = [
        "Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec" 
    ]

    var monthsString = monthsArray[months]; // if 0 equals JAN

    if (hours < 12) {
        state = "AM";
        hoursCalc = hours;
        hoursResult = String(hoursCalc).padStart(2, "0");
    } if (hours >= 12) {
        state = "PM";
        hoursCalc = hours - 12;
        hoursResult = String(hoursCalc).padStart(2, "0");
    }
    alert("Hello Again" + " " + years + " " + monthsString + " " + days + " " + state + " " + hoursResult + ":" + mins + "\n"
        + "Lastest Updated at 2024-02-28 PM 03:15 UTC+09:00");
})