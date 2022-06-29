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

if ($("input").is(":checked")) {
  var id = $("input:checked").attr("id");
  console.log($("input:checked").attr("id"));
  // $("div.item").eq()
}
$("div.item small").hide();
var id = $("input:checked").attr("id");
var newId = id - 1;
$("div.item:eq(" + newId + ") small").show();

function displayContent(radio) {
  $("div.item small").hide();
  var id = $("input:checked").attr("id");
  var newId = id - 1;
  $("div.item:eq(" + newId + ") small").show();
}
