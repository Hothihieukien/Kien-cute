function liveNewsClock() {
    var hours = document.getElementById("live-hours");
    var minutes = document.getElementById("live-minutes");
    var seconds = document.getElementById("live-seconds");
    var phase = document.getElementById("live-phase");

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    var am = "AM";

    if (h > 12) {
        h = h - 12;
        var am = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    phase.innerHTML = am;
}

var liveNewsInterval = setInterval(liveNewsClock, 1000);