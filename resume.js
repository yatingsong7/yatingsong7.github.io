$("#header").click(function () {
  $("#header").slideUp();
  $("main").css("display", "block");
});

$(".navbar-brand").click(function () {
  $("#header").slideDown();
  $("main").css("display", "none");
});

$(".nav-link").click(function () {
  $("#collapseNav").removeClass("show");
});
