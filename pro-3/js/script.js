/* shadow Script 
 * Written by Raffael Stueken
 */ 

var imgWidth = 1600, imgHeight = 1000;
var imgRatio = imgHeight / imgWidth;
var border = 0.05; // 5%

var winH, winW, topOff, leftOff, conRatio, imgW, imgH;
var borderWidth, frameH, frameW, scrolledWin, bodyH, navA, navS;
var $window, $body, $wrapper, $wrapInner, $backImg, $nav;


var scl = 1; // scale

	
$(document).ready(function(){
	
	// Cache objects
	$window = $(window);
	$body = $('body');	
	$wrapper = $('#wrapper');
	$wrapInner = $('#wrapperInner');
	$backImg = $('#back img');
	$nav = $('#nav');
	
	// init page functions
	var imageToLoad = $('#back img').attr('src');
	// $('<img />').attr('src', imageToLoad).load(function(){		
       init();
    // });	
    // window.setTimeout(function(){
    // 	init();
    // }, 5000);
       
});

// init site functions
/////////////////////////////////////////

function init() {

	if(!$body.hasClass("started")){

		// body classes
		$body.addClass("started");
		$body.removeClass("loading");
		
		// get window dimensions
		adjustWindow();
		$window.resize(function() {
			adjustWindow();
		});
		
		// fade in image
		$backImg.show();
		
		// handle scrolling
		$window.scroll(function() {
			handleScroll();
		});	
		
		// start rendering image
		animloop();
		
		// init Navi
		initNavi();
	}
      
}

// init Navi
function initNavi() {
    $('#nav li').click(function(){
    	navA = $(this).index() + 1;
    	$nav.attr("class", "").addClass('a'+navA);
    	navS = winH * (navA - 1);
    	$body.scrollTo(navS,500);
    });
}

// main render loop
// render as fast as possible and only when tab is in view
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function(/* function */ callback, /* DOMElement */ element){
			window.setTimeout(callback, 1000 / 60);
          };
})();

// on every loop render image
function animloop() {
    render();
	requestAnimFrame(animloop);
}

// handle scroll
function handleScroll() {
	scrolledWin = getPageScroll();	
}


// rendering
function render() {

	// scale	
	scl = 1 + (scrolledWin / bodyH);	
	$backImg.css('transform', 'scale('+scl+', '+scl+')');
	
	// scroll
	$wrapInner.css({marginTop: '-'+scrolledWin+'px'});	
		
}


// set image and window dimensions
function adjustWindow(){

	// get window size
	winW = $(window).width();
	winH = $(window).height();	
		
	// Set ratio
    conRatio = winH / winW;	
    
    // scale and position the image   
    if (conRatio < imgRatio) {
    	imgW = winW;
    	imgH = Math.floor(winW * imgRatio) + 1;        
    } else {    
    	imgW = Math.floor(winH / imgRatio) + 1;
    	imgH = winH;        
    } 
    topOff = Math.floor((winH/2)-(imgH/2));
	leftOff = Math.floor((winW/2)-(imgW/2));
	$backImg.css({width: imgW+'px', height: imgH+'px', left: leftOff+'px', top: topOff+'px'});
	 
	// set frame position and size
	borderWidth = Math.floor(winW * border);
	frameH = winH - (borderWidth * 2);
	frameW = winW - (borderWidth * 2);
	
	$wrapper.css({width: frameW+'px', height: frameH+'px', left: borderWidth+'px', top: borderWidth+'px'});
	
	$('section').css({
		display:	"block",
		height:		winH+'px'
	});
	
	bodyH = $wrapInner.height();	
	$body.height(bodyH);
	
	console.log(conRatio);

}

// get Page scroll	
function getPageScroll() {
    var yScroll;
    if (self.pageYOffset) {
    	yScroll = self.pageYOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) {	 // Explorer 6 Strict
    	yScroll = document.documentElement.scrollTop;
    } else if (document.body) {// all other Explorers
    	yScroll = document.body.scrollTop;
    }
    return yScroll;
}

