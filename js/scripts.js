$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    const result1 = parseInt($("#question1").val());
    const result2 = parseInt($("#question2").val());
    const result3 = parseInt($("#question3").val());
    const result4 = parseInt($("#question4").val());
    const result5 = parseInt($("#question5").val());
    const result = result1 + result2 + result3 + result4 + result5;

    if (result <= 3) {
      $("#ruby").show();
      $("#javascript").hide();
      $("#python").hide();
    }
    else if (result > 3 && result < 8) {
      $("#javascript").show();
      $("#ruby").hide();
      $("#python").hide();
    }
    else if (result >= 8) {
      $("#python").show();
      $("#javascript").hide();
      $("#ruby").hide();
    }
    else {
      prompt("Please fill out all the answers!")
    }
  });
});