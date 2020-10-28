$(document).ready(function() {

    //save buttons for each hour
    var saveEight = $("#save8");
    var saveNine = $("#save9");
    var saveTen = $("#save10");
    var saveEleven = $("#save11");
    var saveTwelve = $("#save12");
    var saveOne = $("#save1");
    var saveTwo = $("#save2");
    var saveThree = $("#save3");
    var saveFour = $("#save4");

    // input fields (time blocks) for each hour
    var saveEight = $("#input8");
    var saveNine = $("#input9");
    var saveTen = $("#input10");
    var saveEleven = $("#input11");
    var saveTwelve = $("#input12");
    var saveOne = $("#input1");
    var saveTwo = $("#input2");
    var saveThree = $("#input3");
    var saveFour = $("#input4");


    // save input to local storage on click
    $(saveEight).on("click", function() {
        localStorage.setItem(this.id, inputEight.val());
    });
    inputEight.val(localStorage.getItem("save8"))


    $(saveNine).on("click", function() {
        localStorage.setItem(this.id, inputNine.val());
    });
    inputEight.val(localStorage.getItem("save9"))


    $(saveTen).on("click", function() {
        localStorage.setItem(this.id, inputTen.val());
    });
    inputEight.val(localStorage.getItem("save10"))


    $(saveEleven).on("click", function() {
        localStorage.setItem(this.id, inputEleven.val());
    });
    inputEight.val(localStorage.getItem("save11"))


    $(saveTwelve).on("click", function() {
        localStorage.setItem(this.id, inputTwelve.val());
    });
    inputEight.val(localStorage.getItem("save12"))


    $(saveOne).on("click", function() {
        localStorage.setItem(this.id, inputOne.val());
    });
    inputEight.val(localStorage.getItem("save1"))


    $(saveTwo).on("click", function() {
        localStorage.setItem(this.id, inputTwo.val());
    });
    inputEight.val(localStorage.getItem("save2"))


    $(saveThree).on("click", function() {
        localStorage.setItem(this.id, inputThree.val());
    });
    inputEight.val(localStorage.getItem("save3"))


    $(saveFour).on("click", function() {
        localStorage.setItem(this.id, inputFour.val());
    });
    inputEight.val(localStorage.getItem("save4"))
    

    //display current date & time, & update time very second
    var updateTime = funcitons() {
        $(".time-block").innerHTML = 
            $("#currentDay".text(moment().format("dddd" + ", " + MMMM Do YYYY" + ", + "h:mm a"));
    };
    setInterval(updateTime, 1000);

    updateTime();

    // set current hour to variable
    var currentHour = moment().hour();

    // set past, present, and future time slot colors
    if (currentHour === 8) {
        input8.classList.add("present")
    } else if (currentHour > 8) {
        input8.classList.add("past")
    } else if (currentHour < 8) {
        input8.classList.add("future");
    };

    if (currentHour === 9) {
        input9.classList.add("present")
    } else if (currentHour > 9) {
        input9.classList.add("past")
    } else if (currentHour < 9) {  
        input9.classList.add("future");
    };

    if (currentHour === 10) {
        input10.classList.add("present")
    } else if (currentHour > 10) {
        input10.classList.add("past")
    } else if (currentHour < 10) {  
        input10.classList.add("future");
    };

    if (currentHour === 11) {
        input11.classList.add("present")
    } else if (currentHour > 11) {
        input11.classList.add("past")
    } else if (currentHour < 11) {  
        input11.classList.add("future");
    };

    if (currentHour === 12) {
        input12.classList.add("present")
    } else if (currentHour > 12) {
        input12.classList.add("past")   
    } else if (currentHour < 12) {  
        input12.classList.add("future");
    };

    if (currentHour === 13) {
        input1.classList.add("present")
    } else if (currentHour > 13) {
        input1.classList.add("past")
    } else if (currentHour < 13) {  
        input1.classList.add("future");
    };

    if (currentHour === 14) {
        input2.classList.add("present")
    } else if (currentHour > 14) {
        input2.classList.add("past")
    } else if (currentHour < 14) {  
        input2.classList.add("future");
    };

    if (currentHour === 15) {
        input3.classList.add("present")
    } else if (currentHour > 15) {
        input3.classList.add("past")
    } else if (currentHour < 15) {  
        input3.classList.add("future");
    };

    if (currentHour === 16) {
        input4.classList.add("present")
    } else if (currentHour > 16) {
        input4.classList.add("past")                
    } else if (currentHour < 16) {  
        input4.classList.add("future");
    };

});