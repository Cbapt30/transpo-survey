//Business Logic
var userResponses = []

//User Interface Logic
$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
    });
    $('#transportation_survey').hide();
  });
});

/* to create an array of user responses:

var userResponses = [];
$("input:checkbox[name=work-transportation]:checked").each(function(){
    var workTransportationMode = $(this).val();
    userResponses.push(workTransportationMode);
  });
