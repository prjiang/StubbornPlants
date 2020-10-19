var myDescription = "Plan your life, Plant your life.";

var textArray = myDescription.split("");
var loopTimer;
var doneShowingText = false;
var setContent;


function frameLooper() {
    if (textArray.length > 0 && !doneShowingText) {
        $('#myTypingText')[0].innerHTML += textArray.shift();
    } else {
        clearTimeout(loopTimer);
        doneShowingText = true;
        // console.log("done");
    }
    loopTimer = setTimeout('frameLooper()', 100);
}


$(document).ready(function () {
    setContent = $('#content')[0].outerHTML = frameLooper();
});

/*
var lastModDate = new Date(document.lastModified);
    document.write("最後修改日期：" +lastModDate.toDateString());
*/
