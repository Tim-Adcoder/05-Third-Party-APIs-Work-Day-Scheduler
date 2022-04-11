//add current day in navigation bar 
var currentDate = moment().format("MMM Do YYYY, h:mm");
var currentDayElement = document.getElementById("currentDay")
currentDayElement.textContent = currentDate;

//save text to local storage by clicking the saveBtn
function saveBtn9() {

    console.log("Saved 9am!")
    var textElement = document.getElementById("textarea9").value;
    var textJson = JSON.stringify(textElement);
    localStorage.setItem("9am", textJson);
}

// load saved text 
var textArea9 = document.getElementById("textarea9")
var Text9 = localStorage.getItem("9am");

textArea9.textContent = Text9

//save text to local storage by clicking the saveBtn
function saveBtn10() {

    console.log("Saved 10am!")
    var textElement = document.getElementById("textarea10").value;
    var textJson = JSON.stringify(textElement);
    localStorage.setItem("10am", textJson);
}

// load saved text 
var textArea10 = document.getElementById("textarea10")
var Text10 = localStorage.getItem("10am");

textArea10.textContent = Text10

//save text to local storage by clicking the saveBtn
function saveBtn11() {

    console.log("Saved 11am!")
    var textElement = document.getElementById("textarea11").value;
    var textJson = JSON.stringify(textElement);
    localStorage.setItem("11am", textJson);
}

// load saved text 
var textArea11 = document.getElementById("textarea11")
var Text11 = localStorage.getItem("11am");

textArea11.textContent = Text11

//save text to local storage by clicking the saveBtn
function saveBtn12() {

    console.log("Saved 12am!")
    var textElement = document.getElementById("textarea12").value;
    var textJson = JSON.stringify(textElement);
    localStorage.setItem("12am", textJson);
}

// load saved text 
var textArea12 = document.getElementById("textarea12")
var Text12 = localStorage.getItem("12am");

textArea12.textContent = Text12

//save text to local storage by clicking the saveBtn
function saveBtn13() {

    console.log("Saved 1pm!")
    var textElement = document.getElementById("textarea13").value;
    var textJson = JSON.stringify(textElement);
    localStorage.setItem("1pm", textJson);
}

// load saved text 
var textArea13 = document.getElementById("textarea13")
var Text13 = localStorage.getItem("1pm");

textArea13.textContent = Text13

//save text to local storage by clicking the saveBtn
function saveBtn14() {

    console.log("Saved 2pm!")
    var textElement = document.getElementById("textarea14").value;
    var textJson = JSON.stringify(textElement);
    localStorage.setItem("2pm", textJson);
}

// load saved text 
var textArea14 = document.getElementById("textarea14")
var Text14 = localStorage.getItem("2pm");

textArea14.textContent = Text14


//save text to local storage by clicking the saveBtn
function saveBtn15() {

    console.log("Saved 3pm!")
    var textElement = document.getElementById("textarea15").value;
    var textJson = JSON.stringify(textElement);
    localStorage.setItem("3pm", textJson);
}

// load saved text 
var textArea15 = document.getElementById("textarea15")
var Text15 = localStorage.getItem("3pm");

textArea15.textContent = Text15

//save text to local storage by clicking the saveBtn
function saveBtn16() {

    console.log("Saved 4pm!")
    var textElement = document.getElementById("textarea16").value;
    var textJson = JSON.stringify(textElement);
    localStorage.setItem("4pm", textJson);
}

// load saved text 
var textArea16 = document.getElementById("textarea16")
var Text14 = localStorage.getItem("4pm");

textArea16.textContent = Text14


//save text to local storage by clicking the saveBtn
function saveBtn17() {

    console.log("Saved 5pm!")
    var textElement = document.getElementById("textarea17").value;
    var textJson = JSON.stringify(textElement);
    localStorage.setItem("5pm", textJson);
}

// load saved text 
var textArea17 = document.getElementById("textarea17")
var Text17 = localStorage.getItem("5pm");

textArea17.textContent = Text17


// Change colours of the row based on current time  
var currentHours = (new Date()).getHours();
var nine = document.getElementById("9am")
var ten = document.getElementById("9am")
var elevent  = document.getElementById("9am")
var nine = document.getElementById("9am")


// if(currentHours == 9) {
//     nine.addClass("present")