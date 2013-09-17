/* shadow Script 
 * Written by Raffael Stueken
 */ 

var imgWidth = 1800, imgHeight = 1800;
var imgRatio = imgHeight / imgWidth;
var border = 0.05; // 5%
var scrolledWin = 0;
var lastScroll = 0;
var f1 = 1.4;
var advanced = false;

var winH, winW, offT, offL, conRatio, imgW, imgH, is_chrome;
var borderW, frameH, frameW, bodyH, navA, navS, s1M;
var $window, $body, $wrapper, $wrapInner, $nav, $bT, $bB, $img1, $splashImg, $splashHead, $clouds, $cloud1, $cloud2;
var $sStart, $sProb, $sSol, $sAppi, $s5, $s6, $s7, $s8, $s9, $s10, $s11, $s12;

// scale img
var zoom = 1;
var zoomS = 0.0015; // scale steps // css transform
var zoomS2 = 2; // scale steps // old school
var oPac = 1;
var myWay = false;

var timer;

// position first app img
var $appImg;
var $appImg2;
var topOff = 0;
var topOff2 = 0;

$(document).ready(function(){
	
	// Cache objects
	$window = $(window);
	$body = $('body');	
	$wrapper = $('#wrapper');
	$wrapInner = $('#wrapperInner');
	$nav = $('#nav');
	$bT = $('#borderTop');
	$bB = $('#borderBottom');
	$splashImg = $('#splashImages'); 
	$img1 = $('#secStart .backImg img');
	$splashHead = $('#splashHead');
	$clouds = $('#clouds');
	$cloud1 = $('#cloud1');
	$cloud2 = $('#cloud2');
	
	// sections
	$sStart = $('#secStart');
	$sProb = $('#secProblem');
	$sSol = $('#secSolution');
	$sAppi = $('#secAppimg');
	$s5 = $('#secAppfunc');
	$s6 = $('#secAppfunc1');
	$s7 = $('#secAppfunc2');
	$s8 = $('#secAppfunc3');
	$s9 = $('#secAppfunc4');
	$s10 = $('#secAppfunc5');
	$s11 = $('#secAppfunc6');
	$sInv = $('#secInvite');
	$s12 = $('#secImprint');
	
	// app img animation
	$appImg = $('#secAppfunc1');
	$appImg2 = $('#secAppfunc6');
	
	// init page functions
	init();

       
});

$(window).load(function() {
	
	// fade in page
	start();
	
});

// init site functions
/////////////////////////////////////////

function init() {
		
	// preload main img
	$('<img />').attr('src', $img1.attr('src')).load();	
	
	// start up after 5sec no matter what
    window.setTimeout(function(){
        start();
    }, 3000);
	    	
	// get window dimensions
	adjustWindow();
	$window.resize(function() {
	    adjustWindow();
	});
	    	
	// handle scrolling
	$window.scroll(function() {			
	    handleScroll();
	});	
	
	// start rendering image
	animloop();
	
	// highlight button while scrolling
	buttonHigh();		
	
	// init Navi
	initNavi();
	
	// detect chrome
	is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	
	if(is_chrome) {
	    myWay = true;
	}
	
	// inview?
	$sStart.addClass('inView');
	$('section').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
	    
	    var $el = $(this);
	    
	    if (isInView) {
	    	// element is now visible in the viewport
	    	$el.addClass('inView');		
	    	
	    	//	if (visiblePartY == 'top') {
	    	//		// top part of element is visible
	    	//		$el.addClass('inView');				
	    	//	} else if (visiblePartY == 'bottom') {
	    	//		// bottom part of element is visible
	    	//		$el.addClass('bottomView');
	    	//	} else {
	    	//	  	// whole part of element is visible
	    	//		$el.addClass('fullView');		
	    	//	}		
	    			
	    	// not working properly yet
	    	// $nav.attr("class", "").addClass('a'+($el.index() + 1));
	    } else {
	      	// element has gone out of viewport
	      	// $el.removeClass('inView').removeClass('fullView').removeClass('bottomView');
	    }
	    
	});
	
	$('.naviHook').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
	    
	    var $el = $(this);
	    
	    if (isInView) {
	    	// element is now visible in the viewport				
	    	// if (visiblePartY == 'top') {
	    	// 	// top part of element is visible
	    	// 				
	    	// } else if (visiblePartY == 'bottom') {
	    	// 	// bottom part of element is visible
	    	// 
	    	// } else {
	    		// whole part of element is visible
	    		var navID = $el.attr("id").replace("hook", "");
	    		$nav.attr("class", "").addClass('a'+navID);		
	    	// }										
	    	
	    }
	});
	
	// subscribe
   	$('#formWrapper').click(function(){
   	    focusForm();
   	});
   	
   	// advanced = true;   		
   	if(advanced) {
   	    $clouds.show();
   	}
		
	
      
}

// fade in experience
function start() {

	if(!$body.hasClass("started")){

		// body classes
		$body.addClass("started");
		
		$('#scrollDown,#secStart h1').hide();
		$img1.hide(); 
		$('html').removeClass("loading");
		
		
		$('#secStart h1').fadeIn(800,"easeInOutQuad");				
		// window.setTimeout(function(){
			$img1.fadeIn(1800,"easeInOutQuad");				
		// },400);		
		window.setTimeout(function(){
			$('#scrollDown').fadeIn(800,"easeInOutQuad");				
		},800);
		
		// app img animation
		topOffs();
		
	}

}


// button highlight
function buttonHigh() {
	timer = setInterval( function() {
		if(lastScroll == scrolledWin) {
			$body.removeClass('scrolling');
		}
 		lastScroll = scrolledWin;
    }, 250);	
}

// init Navi
function initNavi() {
    $('#nav li').click(function() {
    	navA = $(this).index() + 1;
    	$nav.attr("class", "").addClass('a'+navA);
    	if(navA == 1) {
    		navS = 0;
    	} else {
    		navS = $('#hook'+navA);    	
    	}
    	$body.scrollTo(navS,800,"easeInOutQuad");
    });
    $('#invite a').click(function() {
    	$nav.attr("class", "").addClass('a5');
    	$body.scrollTo('#hook5',1200,"easeInOutQuad");
    	return false;
    });    
    $('section').not("#secInvite,#secCredits").click(function() {
    	$body.scrollTo($(this).next(),600,"easeInOutQuad");
    });    
    $("#scrollDown").click(function() {
    	$body.scrollTo($("#secProblem"),1200,"easeInOutQuad");
    });
    $("#topLogo").click(function() {
    	window.location.href = 'http://discovershadow.com/pro-5/';
    });
}


// handle scroll
function handleScroll() {
	
	scrolledWin = getPageScroll();
	$body.addClass('scrolling');	
	
	// show logo
	if((scrolledWin * 1.5) > winH) {
		$body.addClass('content');
	}
	
	// show navigation 
	if(scrolledWin > 50) {
		$body.addClass('scrolled');
	}
	
	// app img animation
	if(topOff >= scrolledWin) {
		$appImg.removeClass('sticky');
	} else {
		$appImg.addClass('sticky');
	}
	if(topOff2 >= scrolledWin) {
		$appImg2.removeClass('sticky');
	} else {
		$appImg2.addClass('sticky');
	}
	
	// reset navi on top scroll
	if(scrolledWin < winH) {
		$nav.attr("class", "").addClass('a1');
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
	$('section.full').height(winH);
	$('section.startFull').height((winH * f1));
		
	// set frame
	$bT.css({height: borderW+'px'});
	if(borderW <= 40) {
		$bB.css({height: '40px'});
	} else {	
		$bB.css({height: borderW+'px'});
	}
	$wrapper.css({margin: borderW+'px'});
	
	// Set fullscreen image size
    conRatio = (winH * f1) / (winW - (borderW * 2));    
    bigImg(true); 
		
	// position start headline
	$splashHead.css({marginTop: ((winH * 0.5) - 80)+'px'});
	
	// position app infos
	$('.secAppfunc .leftContent, .secAppfunc .rightContent').css({marginTop: ((winH * 0.5)) +'px'});
	$sAppi.find('.sectionContent').css({marginTop: ((winH * 0.5) - borderW)+'px'});
	$sInv.find('.sectionContent').css({marginTop: ((winH * 0.5) - borderW)+'px'});
	$sProb.find('.sectionContent').css({marginTop: ((winH * 0.5) - borderW)+'px'});
	$sStart.css({marginBottom: '-'+(winH * (f1-0.8))+'px'});
	$('.bottomContent').css({bottom: (borderW + 20)+'px'});
		
	// app img animation
	topOffs();

	
}

// app img animation
function topOffs() {
	topOff = $appImg.position();
	topOff = topOff.top;	
	topOff2 = $appImg2.position();
	topOff2 = topOff2.top;
}

// resizing big img
function bigImg(rePos) {
		
	if(myWay) { 		
	// zoom by calculation	
		
		if((scrolledWin * 0.8) <= winH) { // only calc if in view
		
 			zoom = scrolledWin * zoomS2;
 			
    		// scale and position the image   
     		if (conRatio < imgRatio) {
    			imgW = Math.floor(   winW - (borderW * 2) + zoom  ) + 1;
    			imgH = Math.floor(   imgW * imgRatio			  ) + 1;
    		} else {    
    			imgH = Math.floor(   (winH * f1) + zoom		      ) + 1;
    			imgW = Math.floor(   imgH / imgRatio       	      ) + 1;
    		}   
    		
    		offT = 	   Math.floor(	 ((winH * f1) - imgH) / 2			 	) + 1;
			offL = 	   Math.floor(	 ((winW - (borderW * 2)) - imgW) / 2	) + 1;
			
			$img1.css({width: imgW+'px', height: imgH+'px', left: offL+'px', top: offT+'px'});
			
		}

	} else {
 	// zoom by css transform
	 	 	
	 	if(rePos) { // rescale and position the image if needed
	 	
	        // scale and position the image   
	        if (conRatio < imgRatio) {
	        	imgW = winW - (borderW * 2);
	        	imgH = Math.floor(	imgW * imgRatio			) + 1;
	        } else {
	        	imgH = Math.floor(	winH * f1	 			) + 1;
	        	imgW = Math.floor(	imgH / imgRatio			) + 1;
	        	        
	        }    
	        
	        offT = Math.floor(		((winH * f1) - imgH) / 2				);
		    offL = Math.floor(		((winW - (borderW * 2)) - imgW) / 2		);
		    
		    $img1.css({width: imgW+'px', height: imgH+'px', left: offL+'px', top: offT+'px'});
		    
		}
		
		// zoom img // only calc if in view
		if((scrolledWin * 0.8) <= winH) { 
		    zoom = 1 + (scrolledWin * zoomS);
		    if (zoom <= 1) {
		    	zoom = 1;
		    }
		   	$img1.css('transform', 'scale('+zoom+', '+zoom+')');
		}
		
	}
	
	// animate clouds
		
	if(advanced) {
		
		zoom = scrolledWin * zoomS2;
		imgW = Math.floor(   winW - (borderW * 2) + zoom  			) + 1;
		offL = Math.floor(	 ((winW - (borderW * 2)) - imgW) / 2	) + 1;
		
//		$clouds.css({width: imgW+'px', left: offL+'px'});
				
//		$cloud1.css({marginLeft: '-'+scrolledWin+'px'});
//		$cloud2.css({marginRight: '-'+scrolledWin+'px'});

	}
			
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
	if((scrolledWin * 0.8) <= winH) {
		bigImg(false);	    		
	}
	
	// splash img opacity	
	oPac = (((winH * (f1-1)) + (borderW * 2)) - scrolledWin) / ((winH * (f1-1)));
	if(oPac >= 1) {
		oPac = 1;
	} else if(oPac <= 0) {
		oPac = 0;
	}
	$splashImg.css({opacity: oPac});

}


// focus form
function focusForm() {
	if(!$('#formWrapper').hasClass('focused')) {
		$('#formWrapper').addClass('focused');
		$('input.input').focus();
		if($('input.input').attr('value') == "Your email address") {
			$('input.input').attr('value', '');
		}
	}
}
