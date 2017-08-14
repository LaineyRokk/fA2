$(document).ready(function() {
  $("#formOne").submit(function(event) {
    // var color = $('input#color').val();
    // var food = $('input#food').val();
    // var animal = $('input#animal').val();
    // var curse = $('input#curse').val();
    // var band = $('input#band').val();
    // var movie = $('input#movie').val();
    // var list = [color, food, animal, curse, band, movie];
    // var zero = list.splice(0, 3);
    // var newArray = zero;
    // $(".result1").text(newArray[0]);
    // $(".result2").text(newArray[1]);
    // $(".result3").text(newArray[2]);

    var flavors = ["flavor1", "flavor2", "flavor3", "flavor4"];

    flavors.forEach(function(flavor) {
      var userInput = $("input#" + flavor).val();
      $("." + flavor).text(userInput);
    });

    $("#array").show();

    event.preventDefault();
  });
});
