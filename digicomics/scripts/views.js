// functions

function preloadImage(url) {
  var img=new Image();
  img.src=url;
}

function changeView(v, t) {
  // transition in
  if (t != "none") {
    if (t == "fade") {
      $(".view").fadeOut("fast", "linear", function() {
        loadViewContents(v, t);
      });
    }
  } else {
    loadViewContents(v, t);
    $(".view").show();
  }
}

function loadViewContents(v, t) {
  $(".view").load("views/" + v + ".html");
  currentView = v;

  // transition out
  if (t != "none") {
    if (t == "fade") {
      $(".view").fadeIn( "fast", "linear" );
    }
  }
}

// run after document load

$( document ).ready(function() {

  currentView = "default";
  previousView = "default";
  $(".view").hide();

  // view change on click
  $("body").on("click", ".viewchange", function() {
	   viewtoChange = $(this).data("view");
     transition = $(this).data("transition");
     previousView = currentView;

     changeView(viewtoChange, transition);
	});


  // startup
  changeView("intro", "fade");

});
