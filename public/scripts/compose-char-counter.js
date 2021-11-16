$(document).ready(function () {
  $("#tweet-text").keyup(function (e) {
    const counter = $(this).next().children(".counter");
    counter.text(140 - $(this).val().length);
    const val = $(this).val().length;
    if (val > 140) {
      counter.css("color", "red");
    } else {
      counter.css("color", "black");
    }
  });
});
