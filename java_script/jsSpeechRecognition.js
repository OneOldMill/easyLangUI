/* JS comes here */
function runSpeechRecognition() {
    // get output div reference
    var output = document.getElementById("myTextIn");
    // get action element reference
    var action = document.getElementById("action");
    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // This runs when the speech recognition service starts
    recognition.onstart = function () {
        action.innerHTML = "<small>listening, please speak...</small>";
    };

    recognition.onspeechend = function () {
        action.innerHTML = "<small>stopped listening, hope you are done...</small>";
        recognition.stop();
    }

    // This runs when the speech recognition service returns result
    recognition.onresult = function (event) {
        var transcript = event.results[0][0].transcript;
        var confidence = event.results[0][0].confidence;
        output.innerHTML = transcript;
        //var txtInput = document.getElementById("myTextIn").value;
        //document.getElementById("myTextIn").innerHTML = output;

        //document.getElementById("btnGo").click();
        //var txt = document.getElementById('txtOut').value
        //if (txt = "") {
        //    alert("wait...") 
        //} else {
        //    import {runSpeech} from 'hTextToSpeech.js';
        //    runSpeech()
        //}
        output.classList.remove("hide");
    };

    // start recognition
    recognition.start();
}
