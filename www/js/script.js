var $ = require("jquery");

$("#visit").click(function () {
  var url = $("#urlinput").val();

  $(".tab.active").text(url);
  $(".view.active").attr("src", "http://" + url);
});

$("#urlinput").keypress(function (e) {
  if(e.which == 13){//Enter key pressed
            $('#visit').click();//Trigger search button click event
  }
});

$("#newtab").click(function () {
  var url = $("#urlinput").val();

  if (url === "") {
    url = "New Tab";
  }

  $(".tab, .view").removeClass("active");

  $("#tabbar").append('<li class="tab active">' + url + '</li>');

  $("#views").append('<webview class="view active" src="'+ "http://" + url +'"></webview>');

});

$("body").on("click", ".tab", function () {
  $(".tab, .view").removeClass("active");

  var index = $(this).index();

  $(".tab").eq(index).addClass("active");
  $(".view").eq(index).addClass("active");
});

$("#delTab").click(function () {
  $(".active").remove();
});

// buttons
$("#exit").click(function(){
    window.close();
});

var max = true;
$("#maxi").click(function(){
  max = !max;
  if (max === false) {
    window.resizeTo(screen.availWidth, screen.availHeight);
  }else {
    window.resizeTo(800,500);
  }
});
