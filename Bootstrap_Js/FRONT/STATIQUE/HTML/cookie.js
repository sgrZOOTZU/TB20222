var Clicks = 0, Timer = 10, TestTime = 5;
var ClicksCount = document.getElementById("ClickCount");
var ClickResultInfo = document.getElementById("ClickResultInfo");
var ClickButton = document.getElementById("ClickButton");
var ClearClicksResult = document.getElementById("ClearClicksResult");
var StopClicksButton = document.getElementById("StopClicks");
var ClickInterval = null;
var ClicksOn = false;
var maxScore = 0;
var cookieclick;   

    //COOKIE CONTENANT MAX CLICK
    if (document.cookie.length > 0) {
        var cookieArr = document.cookie.toString().split(";");
        for (var i = 0; i < cookieArr.length; i++) {
            if (cookieArr[i].match(/_10sec_click_test_max_score/i)) {
                maxScore = cookieArr[i].replace(/.*=(.*)/, "$1");
                cookieclick = cookieArr[i].replace(/_10sec_click_test_max_score/i, "$1");
            }
        }
    }
    function ClickButtonPressed() {
        if (!ClickInterval) {
            StopClicksButton.removeAttribute("disabled");
            ClickInterval = setTimeout(TimerDown, 1000);
            Timer--;
        }
        Clicks++;
        ClicksCount.innerHTML = '<span>' + Clicks + '</span>';
    }
    function TimerDown() {
        if (Timer > 0) {
            ClickInterval = setTimeout(TimerDown, 1000);
            Timer--;
        } else if (Timer == 5) {
            clearTimeout(ClickInterval);
            ClickButton.setAttribute("disabled", "disabled");
            StopClicksButton.setAttribute("disabled", "disabled");
            ClearClicksResult.removeAttribute("disabled");
    document.getElementById("restartMaxScore").removeAttribute("disabled");
            if (maxScore < Clicks) {
                maxScore = Clicks;
                setMaxScore();
            }
        }
    }
    //Permet de clear la value du compteur
    function Pressed() {
        Clicks = 0;
        Timer = TestTime;
        ClickButton.removeAttribute("disabled");
        ClearClicksResult.setAttribute("disabled", "disabled");
      document.getElementById("restartMaxScore").setAttribute("disabled", "disabled");
        StopClicksButton.innerHTML = 'Stop';
        StopClicksButton.setAttribute("disabled", "disabled");
        ClicksCount.innerHTML = '0';
        ClickInterval = null;
    }
    
    //restart max score -> 0
    function restartMaxScore() {
        Pressed();
      document.location.reload();
    }