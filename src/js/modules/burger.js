import $ from "jquery";
let w = $(window).width();
$(".burger .burger__btn").on("click", function (e) {
  $(".burger .burger__nav").addClass("active");
  console.log(w);
  if (w >= 515) {
    $(".burger .burger__nav").animate(
      {
        width: "500px",
        height: "500px",
      },
      100,
      "linear"
    );
  } else {
    $(".burger .burger__nav").animate(
      {
        width: "100vw",
        height: "100vh",
      },
      100
    );
  }
});

$(".burger .burger__icon-wrapper").on("click", function (e) {
  $(".burger .burger__nav").removeClass("active");
  $(".burger .burger__nav").css({ width: "", height: "" });
});
