alert ("Hey thanks for visiting now give me a dollar!")
alert(8 + "2");
$(document).ready(function() {
  alert("john chen is working");
})
$(document).ready(function() {
  alert($("#css-item").text());
})
$(document).ready(function() {
  $("#goal-button").click(function() {
    $("#goal-list").append("<li class='list-item'>" + $("#new-goal").val() + "</li>");
    $("#new-goal").val("");
  })
})
