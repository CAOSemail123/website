var slide_n = 0;
$(document).ready(function () {

//slideshow
$("#increment").on("click",function(){
  slides = $(".slide");
  $(slides[slide_n]).addClass("hidden");
  if(slide_n + 1 >= slides.length){
    slide_n = 0;
  }else {
    slide_n++;
  }
  $(slides[slide_n]).removeClass("hidden");
});

$("#decrement").on("click",function(){
  slides = $(".slide");
  $(slides[slide_n]).addClass("hidden");
  if(slide_n - 1 < 0){
    slide_n = slides.length-1;
  }else {
    slide_n--;
  }
  $(slides[slide_n]).removeClass("hidden");
});

window.addEventListener('load', function() {
  setInterval(function(){nextPic();}, 5000);
});

function nextPic() {
    document.getElementById("increment").click();
}

$("#slideshow").on("mouseover",function(){
  $("#left-button").css("border-right-color","#9e1f00");
  $("#right-button").css("border-left-color","#9e1f00");
})

$("#slideshow").on("mouseout",function(){
  $("#left-button").css("border-right-color","white");
  $("#right-button").css("border-left-color","white");
})

//Menu becomes position fixed
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('nav').addClass('fixed');
        $("#page-heading").css("margin-top","80px")
    } else {
        $('nav').removeClass('fixed');
        $("#page-heading").css("margin-top","20px")
    }
});


//Hire Us form
$("#hireUsForm").on("submit", function(){
  var submitForm=true;

  if($("#orgName").prop("validity").valid){
    $("#orgNameError").addClass("hidden");
  } else {
    $("#orgNameError").removeClass("hidden");
    submitForm=false;
  }

  if($("#contactName").prop("validity").valid){
    $("#contactNameError").addClass("hidden");
  } else {
    $("#contactNameError").removeClass("hidden");
    submitForm=false;
  }

  if($("#contactEmail").prop("validity").valid){
    $("#contactEmailError").addClass("hidden");
  } else {
    $("#contactEmailError").removeClass("hidden");
    submitForm=false;
  }

  if($("#contactPhoneNum").prop("validity").valid){
    $("#contactPhoneNumError").addClass("hidden");
  } else {
    $("#contactPhoneNumError").removeClass("hidden");
    submitForm=false;
  }

  if($("#basketball").is(':checked')||$("#football").is(':checked')||$("#soccer").is(':checked')||$("#volleyball").is(':checked')){
    $("#sportChoiceError").addClass("hidden");
  } else {
    $("#sportChoiceError").removeClass("hidden");
    submitForm=false;
  }

  var dateToday = new Date();

  if($("#eventDate").prop("validity").valid){
    var dateSubmitted = new Date($("#eventDate").val());
    if(dateSubmitted > dateToday) {
      $("#eventDateError").addClass("hidden");
      $("#eventDateError2").addClass("hidden");
    } else {
      $("#eventDateError2").removeClass("hidden");
      $("#eventDateError").addClass("hidden");
      submitForm=false;
    }
  } else {
    $("#eventDateError").removeClass("hidden");
    $("#eventDateError2").addClass("hidden");
    submitForm=false;
  }

  if($("#eventStartTime").prop("validity").valid && $("#eventEndTime").prop("validity").valid){
    $("#enterTimeError").addClass("hidden");
    var startTime = $("#eventStartTime").val();
    var endTime = $("#eventEndTime").val();
    if(startTime < endTime){
      $("#enterTimeError2").addClass("hidden");
      $("#enterTimeError").addClass("hidden");
    } else {
      $("#enterTimeError2").removeClass("hidden");
      $("#enterTimeError").addClass("hidden");
      submitForm=false;
    }
  } else {
    $("#enterTimeError").removeClass("hidden");
    $("#enterTimeError2").addClass("hidden");
    submitForm=false;
  }

  if($("#numOfficials").prop("validity").valid){
    $("#numOfficialsError").addClass("hidden");
  } else {
    $("#numOfficialsError").removeClass("hidden");
    submitForm=false;
  }

  return submitForm;
})

//Join Us form
$("#hearAboutUs").on('input', function(){
  if($("#clubFest").is(':checked')||$("#ads").is(':checked')||$("#noResponse").is(':checked')) {
    $("#hearAboutUsDiv").addClass("hidden");
  } else if($("#currentMember").is(':checked')||$("#currentOfficer").is(':checked')) {
    $("#hearAboutUsDiv").removeClass("hidden");
    // source: textbook (Javascript and JQuery p. 221)
    var toBeChanged=document.getElementById("hearAboutUsTextLabel")
    toBeChanged.innerHTML = 'Please specify the person:';
  } else if($("#other").is(':checked')){
    $("#hearAboutUsDiv").removeClass("hidden");
    var toBeChanged=document.getElementById("hearAboutUsTextLabel")
    toBeChanged.innerHTML = 'Please specify the method:';
  }
})

$("#joinUsForm").on("submit", function(){
  var submitForm = true;

  if($("#name").prop("validity").valid){
    $("#nameError").addClass("hidden");
  } else {
    $("#nameError").removeClass("hidden");
    submitForm=false;
  }

  if($("#email").prop("validity").valid){
    $("#emailError").addClass("hidden");
  } else {
    $("#emailError").removeClass("hidden");
    submitForm=false;
  }

  if($("#2020").is(':checked')||$("#2021").is(':checked')||$("#2022").is(':checked')||$("#2023").is(':checked')||$("#2024").is(':checked')){
    $("#classYearError").addClass("hidden");
  } else {
    $("#classYearError").removeClass("hidden");
    submitForm=false;
  }

  if($("#clubFest").is(':checked')||$("#ads").is(':checked')) {
    $("#hearAboutUsError").addClass("hidden");
    $("#hearAboutUsError2").addClass("hidden");
  } else if(($("#currentMember").is(':checked')||$("#currentOfficer").is(':checked')||$("#other").is(':checked'))) {
    if($("#hearAboutUsText").val()==""){
      $("#hearAboutUsError").addClass("hidden");
      $("#hearAboutUsError2").removeClass("hidden");
      submitForm=false;
    } else {
      $("#hearAboutUsError").addClass("hidden");
      $("#hearAboutUsError2").addClass("hidden");
    }
  } else {
    $("#hearAboutUsError").removeClass("hidden");
    $("#hearAboutUsError2").addClass("hidden");
    submitForm=false;
  }

if($("#why").prop("validity").valid){
  $("#whyError").addClass("hidden");
} else {
  $("#whyError").removeClass("hidden");
  submitForm=false;
}

if($("#what").prop("validity").valid){
  $("#whatError").addClass("hidden");
} else {
  $("#whatError").removeClass("hidden");
  submitForm=false;
}

if($("#basketball").is(':checked')||$("#football").is(':checked')||$("#volleyball").is(':checked')||$("#soccer").is(':checked')){
  $("#sportChoiceError").addClass("hidden");
} else {
  $("#sportChoiceError").removeClass("hidden");
  submitForm=false;
}

  return submitForm;
})

//mobile menu interactivity
if ($(window).width()<601){
  $(".not-selected").addClass("hidden");
  console.log("exectued")
}

if ($(window).width()<601){
  $("a").click(function(event){
  if($(".selected").hasClass("collapsed")){
    event.preventDefault();
    console.log("prevented")
    $(".not-selected").removeClass("hidden");
    $(".selected").removeClass("collapsed");
    $("#open-menu").addClass("hidden")
  } else {
    $(".selected").addClass("collapsed");
    $("#open-menu").removeClass("hidden")
  }
  })
}

});
