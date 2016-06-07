$(document).ready(function() {
  $("form#questions").submit(function(event)
     
    var input = $("input#name").val();
    var result = $(puzzle)
    var vowels = ["a", "e", "i", "o", "u"];
    ("-") input.replaceAll (vowels);
    $("#puzzle").text (result);
