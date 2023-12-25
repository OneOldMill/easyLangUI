function clickMe() {
  alert("You clicked me!");
}
function myVoice() {
  //alert("Voice under construction!");
    runSpeechRecognition();
}
function myPlay() {
    //alert("Play under construction!");
    runSpeech();
}
function myParse(arr) {
    var out = "";
    var i;
    for (i = 0; i < arr.length; i++) {
        out += 'phonetic= ' + arr[i];
    }
    document.getElementById("myTextOut").innerHTML = "한글 (" + out;
}
function myPlaceIn() {
    alert("myPlaceIn");
    alert("placeholder= "+document.getElementById("myTextIn").placeholder);
    alert("value= "+document.getElementById("myTextIn").value);
    alert("text= "+document.getElementById("myTextIn").text);
    alert("innerhtml= "+document.getElementById("myTextIn").innerHTML);
    alert("textcontent= "+document.getElementById("myTextIn").textContent);
    alert("defaultValue= "+document.getElementById("myTextIn").defaultValue);

/*
    document.getElementById("myTextOut").placeholder  = sResult;
    document.getElementById("myTextOut").value  = sResult;
    document.getElementById("myTextOut").text  = sResult;
    document.getElementById("myTextOut").innerHTML  = sResult;
    document.getElementById("myTextOut").textContent  = sResult;
*/
}
function myListView() {
     //alert("myListView");
     var myListOption = document.getElementById("myListOption");
     var value = myListOption.options[myListOption.selectedIndex].value;
     var text = myListOption.options[myListOption.selectedIndex].text;
     //alert("text= ="+text);
     if (text == "English to Korean") {
         myLang = "ek";
         //alert("English to Korean... ");
         ekClick();
     } else if (text == "Korean to English") {
         myLang = "ke";
         //alert("Korean to English...");
         keClick();
     }
     return myLang;
}
function mySubmit() {
    var txtInput = document.getElementById("myTextIn").value;
    sText = myHTTP(txtInput);
 return false;
}
function myHTTP(txt) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("myTextOut").innerHTML = this.responseText;
            myPlay();
            //return txt;
        } else {
            //document.getElementById("myTextOut").innerHTML = "한글 Server error...";
        }
    }
    
    //xhr.open('GET', 'https://api.dictionaryapi.dev/api/v2/entries/en/apple', true);
    xhr.open('GET', 'https://oneoldmill.github.io/easyLang/example', true);
    //xhr.open('GET', 'http://127.0.0.1:8080/welcome.txt', true);
    xhr.send();
    //xhr.open('POST', 'http://127.0.0.1:8080/example', true);
    //xhr.open('POST', 'https://oneoldmill.github.io/easyLang/example', true);
    //xhr.send(txt);
return;
}
function InputSplit(sText) {
    // move input text from textarea to arrayIn
    // by sentence & word
    temp = sText;
    countSentence = temp.split(/([!,?,.,\n])/).length - 1;
    mySentence = temp.split(/([!,?,.,\n])/, 6); //limit up to 3 sentences

    if (countSentence >= 0) {
        countZero = mySentence[0].split(" ").length - 1;
        sZero = mySentence[0].split(" ");
        sZeroTran = [];
        for (var i = 0; i <= countZero; i++) {
            sZeroTran[i] = sZero[i] + "";
        }
        sZeroMerge = sZeroTran.flat(1);
        sResult = sZeroMerge;
    }

    if (countSentence >= 2) {
        countTwo = mySentence[2].split(" ").length - 1;
        sTwo = mySentence[2].split(" ");
        sTwoTran = [];
        for (var i = 0; i <= countTwo; i++) {
            sTwoTran[i] = sTwo[i] + "";
        }
        sTwoMerge = sTwoTran.flat(1);
        sResult = sResult + " " + sTwoMerge;
    }

    if (countSentence >= 4) {
        countFour = mySentence[4].split(" ").length - 1;
        sFour = mySentence[4].split(" ");
        sFourTran = [];
        for (var i = 0; i <= countFour; i++) {
            sFourTran[i] = sFour[i] + "";
        }
        sFourMerge = sFourTran.flat(1);
        sResult = sResult + " " + sFourMerge;
    }
    sText = sResult;
    return sText;
}

