//Stretch: Back to Top Button Functionality
$(".top-btn").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $(".top-btn").css("display", "block");
  } else {
    $(".top-btn").css("display", "none");
  }
};
