// it's messy, but it works (tm)

preloadImage("images/intro/dpub.png");
preloadImage("images/intro/dis.png");
preloadImage("images/intro/logo.png");

// starts at Disney Publishing
$( document ).ready(function() {
  // switch to Disney Interactive Studios
  setTimeout(function(){
    $(".introsplash").fadeOut("medium", "linear", function() {
      $(".introsplash").removeClass("dpub");
      $(".introsplash").addClass("dis");
      $(".introsplash").fadeIn("medium", "linear");
      // switch to Epic Mickey logo
      setTimeout(function(){
        $(".introsplash").fadeOut("medium", "linear", function() {
          $(".introsplash").removeClass("dis");
          $(".introsplash").addClass("logo");
          $(".introsplash").fadeIn("medium", "linear");
          setTimeout(function(){
            changeView("mainmenu", "fade");
          }, 1500);
        });
      }, 1500);
    });
  }, 3000);

});
