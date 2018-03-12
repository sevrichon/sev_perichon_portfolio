

$(function() {


  $('#nav_burger, .nav-li').on('click', function() {
    $('#nav_list').toggle();
    $('#hamb_bar1').toggleClass('active');
    $('#hamb_bar2').toggleClass('active');
    $('#hamb_bar3').toggleClass('active');
  });

$('.scrollto').on('click', function() {
    var section = $(this).attr('href');
    var marge = $('nav').height() + 80;
    var speed = (($(section).offset().top) / 2);
    var scroll = $(window).scrollTop();
    var speedUp = 750;

    if (scroll >= $(section).offset().top) {
      $('html, body').animate( { scrollTop: $(section).offset().top - marge}, speedUp );
      return false;
    }
    else {
      $('html, body').animate( { scrollTop: $(section).offset().top - marge}, speed );
      return false;
    }

  });

  $('.bg-header').mousemove(function(event) {
        var xCoords = event.pageX;
    		var yCoords = event.pageY;

    		var x = parseInt(xCoords / 20);
    		var y = parseInt(yCoords / 20);
        $('.bg-header').css("background-position", x + "% " + y + "%");

      });

});

var s = Snap("#path_about");




var fusee = s.path({d:"M48,11.1C48,11.1,48,11.1,48,11.1l8.7-9.8l-2.1,0.6c-2.9,0.9-17.9-0.6-22.9-1.8L31.4,0l-4.9,4.6c-2.6,2.4-3.8,3.6-4.4,4.2C11.9,9.8,0.1,12,0,15.8c-0.1,2.4,4.3,4.7,13,6.8c2.7,0.7,5.6,1.3,8.5,1.8c0.6,0.7,1.7,2,4.1,4.5l4.6,4.9l0.3-0.1c5.2-0.8,20.2-1.3,23-0.2l2,0.8l-8-10.4c2.5-0.9,4.3-2.1,5.4-3.6l0.1-0.1l2.7,0.1l0.2-5.1l-2.7-0.1C52.3,13.6,50.5,12.3,48,11.1z M23.6,19.8c-2-0.1-3.6-1.8-3.6-3.8c0.1-2,1.8-3.6,3.8-3.6c2,0.1,3.6,1.8,3.6,3.8C27.4,18.3,25.7,19.8,23.6,19.8z M38.1,16.4c-0.1,2-1.8,3.6-3.8,3.6c-2-0.1-3.6-1.8-3.6-3.8c0.1-2,1.8-3.6,3.8-3.6C36.6,12.7,38.2,14.4,38.1,16.4z"});

fusee.attr({
fill: "#66CCFF",
})

var loop = s.path({d:"M899,0.7C733.5,8.1,255.3,37.9,225.6,179.2c-2.2,10.4-11.1,64.8,21,100.5c31.6,35.2,94.7,42.9,138,16.5	c56.3-34.3,67.3-119.1,39-163.5c-43.6-68.4-187.2-51-276-4.5c-24.9,13.1-99.4,53.5-132,141c-42.3,113.3,11.9,235.1,85.5,303	c57.4,53,122.4,69.3,154.5,75"});

loop.attr({
fill: "none",
stroke: "#66CCFF",
strokeWidth: "1",
strokeDasharray: "12"
})




var len = loop.getTotalLength();

var fuseeGroup = s.g( fusee );

var scroll = $(window).scrollTop();
var topAbout = $("#aboutme_section").offset().top - 200;
var topSkills = $("#skills_section").offset().top - 200;
var topBook = $("#portfolio_section").offset().top - 200;
var topContact = $("#contact_section").offset().top - 200;


$(window).on("scroll", function() {

  		scroll = parseInt($(window).scrollTop());

  if(scroll >= topAbout && scroll <= topSkills){

        loop.animate({"stroke-dashoffset": 2000}, 2500,mina.easeinout);


        setTimeout( function() {
          Snap.animate(0, len, function( value ) {
            movePoint = loop.getPointAtLength( value );
            fuseeGroup.transform( 't' + parseInt(movePoint.x - 15) + ',' + parseInt( movePoint.y - 15) + 'r' + (movePoint.alpha - 10));
          }, 8000,mina.easeinout);
  });

}
});

var a = Snap("#path_skills");




var fusee2 = a.path({d:"M48,11.1C48,11.1,48,11.1,48,11.1l8.7-9.8l-2.1,0.6c-2.9,0.9-17.9-0.6-22.9-1.8L31.4,0l-4.9,4.6c-2.6,2.4-3.8,3.6-4.4,4.2C11.9,9.8,0.1,12,0,15.8c-0.1,2.4,4.3,4.7,13,6.8c2.7,0.7,5.6,1.3,8.5,1.8c0.6,0.7,1.7,2,4.1,4.5l4.6,4.9l0.3-0.1c5.2-0.8,20.2-1.3,23-0.2l2,0.8l-8-10.4c2.5-0.9,4.3-2.1,5.4-3.6l0.1-0.1l2.7,0.1l0.2-5.1l-2.7-0.1C52.3,13.6,50.5,12.3,48,11.1z M23.6,19.8c-2-0.1-3.6-1.8-3.6-3.8c0.1-2,1.8-3.6,3.8-3.6c2,0.1,3.6,1.8,3.6,3.8C27.4,18.3,25.7,19.8,23.6,19.8z M38.1,16.4c-0.1,2-1.8,3.6-3.8,3.6c-2-0.1-3.6-1.8-3.6-3.8c0.1-2,1.8-3.6,3.8-3.6C36.6,12.7,38.2,14.4,38.1,16.4z"});

fusee2.attr({
fill: "#66CCFF",
})

var loop2 = a.path({d:"M432.8,6c15.7,125.9-48.4,239.6-142,273C157,326.9-3.6,198.9,0.8,104.6c2-42.5,37.5-79.6,72-94.4	c88.9-38.3,229,46.5,264,147.8c14.3,41.5,9.7,81.8,44,108.8c25.2,19.8,42.6,9.7,80,24.6c3.3,1.3,82.8,34.6,106,115	c25.7,89-37.9,165.7-42.9,171.6"});

loop2.attr({
fill: "none",
stroke: "#66CCFF",
strokeWidth: "1",
strokeDasharray: "12"
})




var len2 = loop2.getTotalLength();

var fuseeGroup2 = a.g( fusee2 );

var scroll = $(window).scrollTop();
var topAbout = $("#aboutme_section").offset().top - 200;
var topSkills = $("#skills_section").offset().top - 200;
var topBook = $("#portfolio_section").offset().top - 200;
var topContact = $("#contact_section").offset().top - 200;


$(window).on("scroll", function() {

  		scroll = parseInt($(window).scrollTop());

  if(scroll >= topSkills && scroll <= topBook){

        loop2.animate({"stroke-dashoffset": 2000}, 2500,mina.easeinout);


        setTimeout( function() {
          Snap.animate(0, len2, function( value ) {
            movePoint = loop2.getPointAtLength( value );
            fuseeGroup2.transform( 't' + parseInt(movePoint.x - 15) + ',' + parseInt( movePoint.y - 15) + 'r' + (movePoint.alpha - 10));
          }, 8000,mina.easeinout);
  });

}
});
