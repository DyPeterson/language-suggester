$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    const resultOne = parseInt($("#question1").val());
    const resultTwo = parseInt($("#question2").val());
    const resultThree = parseInt($("#question3").val());
    const resultFour = parseInt($("#question4").val());
    const resultFive = parseInt($("#question5").val());
    const result = resultOne + resultTwo + resultThree + resultFour + resultFive;

    if (result <= 3) {
      $("#intro").show();
      $("#ruby").show(1200);
      $("#javascript").hide();
      $("#python").hide();
    }
    else if (result > 3 && result < 8) {
      $("#intro").show();
      $("#javascript").show(1200);
      $("#ruby").hide();
      $("#python").hide();
    }
    else if (result >= 8) {
      $("#intro").show();
      $("#python").show(1200);
      $("#javascript").hide();
      $("#ruby").hide();
    }
    else {
      alert("Please fill out all the answers!")
    }
  });
});