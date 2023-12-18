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
  alert("1. You clicked Submit!");

  // get input text from textarea
    var txtInput = document.getElementById("myTextIn").value;
    alert("2 txtInput= " + txtInput);

    myLang = myListView();
    alert("3 myLang= " + myLang);

    //txt = InputSplit(txtInput);
//
    sQuery = "SELECT * FROM tbleng_kor WHERE engRoot ='apple'";

    alert("4 function call myHTTP");
    txt = "apple123";
    sText = myHTTP(txt);

    //alert("4.3 sText= " + sText);

    //sTranResult = sTranResult + " " + sText;
    //alert("4.4 sTranResult= " + sTsTranResultext);

 return false;
}
function myHTTP(txt) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //if (xhr.readyState == XMLHttpRequest.DONE) {
            alert("14.1 this.readyState= " + this.readyState);
            alert("14.2 this.status= " + this.status);
            alert("14.3 this.responseText= " + this.responseText);
            var jObj = JSON.parse(this.responseText)[0];
            alert("14.4 jObj= " + jObj); // [object object] error
            var txt = jObj.phonetic
            alert("14.5 txt= " + txt);

            //document.getElementById("demo").innerHTML = "test " + this.responseText;
            //document.getElementById("myTextOut").innerHTML = "한글 (" + this.responseText;
            document.getElementById("myTextOut").innerHTML = "한글 apple phonetic= " + txt;
            alert("14.6 txt= " + txt);
            myPlay();
        } else {
            alert("15.1 this.readyState= " + this.readyState);
            alert("15.2 else this.status= " + this.status);
            alert("15.3 this.responseText= " + this.responseText);
            alert("15.4 error...");
            //txt = "Server error...";
            //resp = http.request('GET', 'http://127.0.0.1:8080/hello.txt')
            x = http.request('GET', 'https://oneoldmill.github.io/easyLang/welcome.txt')
            txt = x.data;
            if (txt == "") {
                txt = "Server error...";
            }
            document.getElementById("myTextOut").innerHTML = "한글... " + txt;
        }
    }
    
    //xhr.open('GET', 'https://oneoldmill.github.io/easyLang/example', true);
    //xhr.open('GET', 'https://naveropenapi.apigw.ntruss.com/nmt/v1/translation/apple', true);
    xhr.open('GET', 'https://api.dictionaryapi.dev/api/v2/entries/en/apple', true);
    //resp = xhr.open('GET', 'http://127.0.0.1:8080/example', true);
    xhr.send();

    alert("8...");
return txt;
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

