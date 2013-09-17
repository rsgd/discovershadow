/* shadow Script 
 * Written by Raffael Stueken
 */ 

var imgWidth = 1600, imgHeight = 1600;
var imgRatio = imgHeight / imgWidth;
var border = 0.05; // 5%
var scrolledWin = 0;

var winH, winW, offT, offL, conRatio, imgW, imgH, is_chrome;
var borderW, frameH, frameW, bodyH, navA, navS, s1M;
var $window, $body, $wrapper, $wrapInner, $nav, $bT, $bB, $img1;
var $s1, $s2, $s3, $s4, $s5, $s6;

// scale img
var increase = true;
var rot = 0; // rotation
var scl = 1.2; // scale
var rot2 = 0.01; // rotation speed
var scl2 = 0.0001; // scale speed

// scale logo
var logoW = 260;
var logoH = 87;
var logoWn, logoHn;
var logoO = 1;

// position first app img
var $appImg;
var $appImg2;
var topOff = 0;

$(document).ready(function(){
	
	// Cache objects
	$window = $(window);
	$body = $('body');	
	$wrapInner = $('#wrapperInner');
	$nav = $('#nav');
	$bT = $('#borderTop');
	$bB = $('#borderBottom');
	$wrapper = $('#wrapper');
	$imgW1 = $('#sec1 .backImg');
	$img1 = $('#img1');
	$app = 
	
	// sections
	$s1 = $('#secStart');
	$s2 = $('#secProblem');
	$s3 = $('#secSolution');
	$s4 = $('#secAppimg');
	$s5 = $('#secAppfunc');
	$s6 = $('#secAppfunc1');
	$s7 = $('#secAppfunc2');
	$s8 = $('#secAppfunc3');
	$s9 = $('#secAppfunc4');
	$s10 = $('#secAppfunc5');
	$s11 = $('#secInvite');
	$s12 = $('#secImprint');
	
	// first img
	$appImg = $('#secAppfunc1');
	// last img
	$appImg2 = $('#secAppfunc5');
	
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
		// $backImg.show();
		
		// handle scrolling
		$window.scroll(function() {
			handleScroll();
		});	
		
		// start rendering image
		animloop();
		
		// init Navi
		initNavi();
		
		// detect chrome
		is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
		
		// inview?
		$s1.addClass('inView');
		$('section').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
			
			var $el = $(this);
			
			if (isInView) {
				// element is now visible in the viewport
				if (visiblePartY == 'top') {
					// top part of element is visible
					$el.addClass('inView');				
				} else if (visiblePartY == 'bottom') {
					// bottom part of element is visible
					$el.addClass('bottomView');
				} else {
				  	// whole part of element is visible
					$el.addClass('fullView');		
				}
				
				// not working properly yet
				// $nav.attr("class", "").addClass('a'+($el.index() + 1));
			} else {
			  	// element has gone out of viewport
			  	$el.removeClass('inView').removeClass('fullView').removeClass('bottomView');
			}
			
		});
		
	}
      
}

// init Navi
function initNavi() {
    $('#nav li').click(function(){
    	navA = $(this).index() + 1;
    	$nav.attr("class", "").addClass('a'+navA);
    	if(navA == 1) {
    		navS = 0;
    	} else {
    		navS = $('#hook'+navA);    	
    	}
    	$body.scrollTo(navS,500);
    });
}


// handle scroll
function handleScroll() {
	scrolledWin = getPageScroll();
	
	if((scrolledWin * 1.5) > winH) {
		$body.addClass('content');
	} else {
		$body.removeClass('content');
	}
	
	// position first app img
	topOff = $appImg.position();
	topOff = topOff.top;
	if(topOff >= (scrolledWin + (borderW / 2))) {
		$appImg.removeClass('sticky');
	} else {
		$appImg.addClass('sticky');
	}
	topOff = $appImg2.position();
	topOff = topOff.top;
	if(topOff >= (scrolledWin + (borderW / 2))) {
		$appImg2.removeClass('sticky');
	} else {
		$appImg2.addClass('sticky');
	}
	
	
}

// set image and window dimensions
function adjustWindow(){

	// get window size
	winW = $(window).width();
	winH = $(window).height();	
	
	// set margin
	borderW = Math.floor(winW * border);
	if(borderW <= 20) {
		borderW = 20;
	}
		
	// set fullscreen sizes
	$('section.full').height((winH - borderW));
	
	// set navi hooks
	$('.naviHook').css({height: borderW+'px', marginTop: '-'+borderW+'px'});
	
	// set frame
	// $bT.css({height: borderW+'px', width: (winW - borderW + 2)+'px'});	
	// $bB.css({height: borderW+'px', width: (winW - borderW + 2)+'px'});
	$bT.css({height: borderW+'px'});	
	$bB.css({height: borderW+'px'});
	$wrapper.css({margin: borderW+'px'});
	
	// Set fullscreen images
    conRatio = (winH - borderW) / (winW - (borderW * 2));    
    // scale and position the image   
    if (conRatio < imgRatio) {
    	imgW = winW - (borderW * 2);
    	imgH = Math.floor(winW * imgRatio) + 1;
    } else {    
    	imgW = Math.floor((winH - borderW) / imgRatio) + 1;
    	imgH = winH;        
    } 
    offT = Math.floor(((winH - borderW)/2)-(imgH/2));
	offL = Math.floor((((winW - (borderW * 2)))-(imgW)) / 2);
	$('.backImg img').css({width: imgW+'px', height: imgH+'px', left: offL+'px', top: offT+'px'});
	

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

// rendering
function render() {
    	
	// cover animation
	if((scrolledWin * 1.5) <= winH) {
	
	    // // background animation
	    // s1M = scrolledWin / 1.5;
	    // if((s1M * 2) >= winH) {
	    //  s1M = winH / 2;
	    // }
	    // $imgW1.css({marginTop: s1M+'px'});
	 		
		// scale // rotate
		$img1.css('transform', 'rotate('+rot+'deg) scale('+scl+', '+scl+')');
		
		rot = rot + rot2;
		
		if(scl > 1.5) {
			increase = false;
		}
		if(scl < 1.2) {
			increase = true;
		}
		
		if(increase) {
			scl = scl + scl2;
		} else {
			scl = scl - scl2;;
		}
		    	    
	    // logo animation
	    logoWn = ((winH - (scrolledWin * 1.2)) / winH * logoW);
	    logoHn = ((winH - (scrolledWin * 1.2)) / winH * logoH);		
	    $('#logo').css({height: logoHn+'px', width: logoWn+'px', marginLeft: '-'+(logoWn/2)+'px'});
	    		
	}
    	
}
