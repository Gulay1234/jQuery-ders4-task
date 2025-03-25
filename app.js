$(document).ready(function(){
    setInterval(function () {
        $(".item2-2").animate({
            marginBottom: "-50px",
            marginTop: "-50px"
        }, 1000).animate({
            marginBottom: "0px",
            marginTop: "0px"
        }, 1000);
    }, 2000);
})


$(document).ready(function() {
    $(".items").click(function() {
      if ($(this).css("background-color") !== "rgb(128, 128, 128)") { // "gainsboro" rənginin RGB formatı
        $(this).animate({
          opacity: "0.5",
          backgroundColor: "blue"
        }, 500);
      } 


    $(".items").click(function() {
      if ($(this).css("opacity") === "0.5") {
        $(this).animate({
            width: "20vw",
            opacity: "1",
            backgroundColor: "gainsboro"
          }, 500);
      } 
    });
  });
});