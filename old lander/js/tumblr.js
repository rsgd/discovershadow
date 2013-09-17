/* shadow Script 
 * Written by Raffael Stueken
 */ 


var windowHeight, windowWidth, width, height, topOff, leftOff, conRatio, frameWidth, frameHeight;
var imgWidth = 1600, imgHeight = 1600;
var logoWidth = 380, logoHeight = 180;
var smallLogoWidth = 190, smallLogoHeight = 90;
var border = 0.08;
var border = 0.05;
var borderWidth, borderHori, borderVert, marginHori, marginVert;
var imgRatio = imgHeight / imgWidth;
var $window, $body;
var increase = true;
var scrolledWin = 0;
var boxMargin = 0;
var boxOpac = 1;

var xLogo = 300;
var yLogo = 100;
var xLogoNew = 300;
var yLogoNew = 100;

var xLogo2 = 200;
var yLogo2 = 50;
var xLogoNew2 = 200;
var yLogoNew2 = 50;

var logoOpac = 0;
var logoTop = 0;

var rot = 0; // rotation
var scl = 1.2; // scale

var rot2 = 0.01; // rotation speed
var scl2 = 0.0001; // scale speed
	
$(document).ready(function(){
	
	// Cache the Window and body object
	$window = $(window);
	$body = $('body');	

	// init page functions
	var imageToLoad = $('#back img.back').attr('src');
	$('<img />').attr('src', imageToLoad).load(function(){		
       init();
    });	
    window.setTimeout(function(){
    	init();
    }, 5000);
    $window.scroll(function() {
		handleScroll();
	});
    
    // preload logo
	$('<img />').attr('src', 'img/shadow_logo.png');
    
   	window.setTimeout(function(){
   		if(!$body.hasClass("started")){
	    	$body.addClass("loading");
    	}
    }, 1000);
    
    
    
});

// init site functions
/////////////////////////////////////////

function init() {

	// body classes
	$body.addClass("started");
	$body.removeClass("loading");
	
	// get window dimensions	
	$window.resize(function() {
	    adjustWindow();
	});
	adjustWindow();	
	
	// fade in image
	$('#back img.back').fadeTo(8000,1);

	// start rendering image
	animloop();
	
	// fade in Logo
	// window.setTimeout(function(){
   	// 	$('h1').fadeIn(1400);
    // }, 5500);
   
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

	// if in view
	if(scrolledWin <= windowHeight) {
	
		// rotate
		$('#back img.back').css('transform', 'rotate('+rot+'deg) scale('+scl+', '+scl+')');
		
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
	
		// show / hide
		boxMargin = scrolledWin / 1.5;
		$('#back').css({marginTop: '-'+boxMargin+'px', marginBottom: '-'+boxMargin+'px'});
		boxOpac = (windowHeight - (scrolledWin * 1.5)) / windowHeight;
		if(boxOpac <= 0) {
			boxOpac = 0;
		}
		// boxOpac = 1;
		xLogoNew = ((windowHeight - (scrolledWin * 2)) / windowHeight * xLogo);
		yLogoNew = ((windowHeight - (scrolledWin * 2)) / windowHeight * yLogo);		
		$('#back h1').css({opacity: boxOpac, height: yLogoNew+'px', width: xLogoNew+'px', marginLeft: '-'+(xLogoNew/2)+'px'});
		$('#logo').css({opacity: '0', top: windowHeight+'px'});
	}
	
	
	// if(scrolledWin >= (windowHeight / 6)) {
	
		// show / hide
		
		logoOpac = ((scrolledWin * 3.5 - (windowHeight)) * 0.003) + 0.2;
		
		if(logoOpac <= 0) {
			logoOpac = 0;
		} else if(logoOpac >= 1) {
		 	logoOpac = 1;
		}
		
		
		logoTop = (windowHeight - (scrolledWin * 3.5)) + (windowHeight / 1.2);		
		if(logoTop <= (windowHeight * 0.1)) {
			logoTop = windowHeight * 0.1; // 10%		
		}
		
		
		xLogoNew2 = ((((scrolledWin * 3.5) - (windowHeight) - (windowHeight / 2.4)) * 0.001) + 0.9) * xLogo2;
		yLogoNew2 = ((((scrolledWin * 3.5) - (windowHeight) - (windowHeight / 2.4)) * 0.001) + 0.9) * yLogo2;
		
		if(xLogoNew2 >= xLogo2) {
			xLogoNew2 = xLogo2;
		}
		if(xLogoNew2 <= 0) {
			xLogoNew2 = 0.9 * xLogo2;
		}
		if(yLogoNew2 >= yLogo2) {
			yLogoNew2 = yLogo2;
		}
		if(yLogoNew2 <= 0) {
			yLogoNew2 = 0.9 * yLogo2;
		}
		
		$('#logo').css({opacity: logoOpac, top: logoTop+'px', height: yLogoNew2+'px', width: xLogoNew2+'px', marginLeft: '-'+(xLogoNew2/2)+'px'});
		
	// }
		
}

// handle scroll
function handleScroll() {
	scrolledWin = getPageScroll();	
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


// set image and window dimensions
function adjustWindow(){

	// get window size
	windowWidth = $(window).width();
	windowHeight = $(window).height();	
	
	// Set ratio
    conRatio = windowHeight / windowWidth;	
    
    // scale the frame    
    if (conRatio < imgRatio){
    	frameWidth = windowWidth;
    	frameHeight = windowWidth * imgRatio;        
    } else {    
    	frameWidth = windowHeight / imgRatio;
    	frameHeight = windowHeight;        
    }  
        
    // Position the frame 
    topOff = (windowHeight/2)-(frameHeight/2);
	leftOff = (windowWidth/2)-(frameWidth/2);
	$('#back').css({height: windowHeight+'px'});
	$('#back img.back').css({width: frameWidth+'px', height: frameHeight+'px', left: leftOff+'px', top: topOff+'px'});
	
	
	/*
	// set logo position and size
	borderWidth = Math.floor(windowWidth * border);
	if(windowWidth < 768) {
		borderHori = Math.floor((windowWidth - smallLogoWidth - (borderWidth*2)) / 2);
		borderVert = Math.floor((windowHeight - smallLogoHeight - (borderWidth*2)) / 2);		
		marginHori = Math.floor(((borderHori*2) + smallLogoWidth) / 2);
		marginVert = Math.floor(((borderVert*2) + smallLogoHeight) / 2);
	} else {
		borderHori = Math.floor((windowWidth - logoWidth - (borderWidth*2)) / 2);
		borderVert = Math.floor((windowHeight - logoHeight - (borderWidth*2)) / 2);		
		marginHori = Math.floor(((borderHori*2) + logoWidth) / 2);
		marginVert = Math.floor(((borderVert*2) + logoHeight) / 2);
	}
	
	$('h1').css({
		borderLeftWidth: 	borderHori+"px",
		borderRightWidth: 	borderHori+"px",
		borderTopWidth:		borderVert+"px",
		borderBottomWidth: 	borderVert+"px",
		marginTop:			'-'+marginVert+'px',
		marginLeft:			'-'+marginHori+'px',
	});
	*/

}


//////////// Transform plugin ///////////

(function ($) {
    // Monkey patch jQuery 1.3.1+ css() method to support CSS 'transform'
    // property uniformly across Safari/Chrome/Webkit, Firefox 3.5+, IE 9+, and Opera 11+.
    // 2009-2011 Zachary Johnson www.zachstronaut.com
    // Updated 2011.05.04 (May the fourth be with you!)
    function getTransformProperty(element)
    {
        // Try transform first for forward compatibility
        // In some versions of IE9, it is critical for msTransform to be in
        // this list before MozTranform.
        var properties = ['transform', 'WebkitTransform', 'msTransform', 'MozTransform', 'OTransform'];
        var p;
        while (p = properties.shift())
        {
            if (typeof element.style[p] != 'undefined')
            {
                return p;
            }
        }
        
        // Default to transform also
        return 'transform';
    }
    
    var _propsObj = null;
    
    var proxied = $.fn.css;
    $.fn.css = function (arg, val)
    {
        // Temporary solution for current 1.6.x incompatibility, while
        // preserving 1.3.x compatibility, until I can rewrite using CSS Hooks
        if (_propsObj === null)
        {
            if (typeof $.cssProps != 'undefined')
            {
                _propsObj = $.cssProps;
            }
            else if (typeof $.props != 'undefined')
            {
                _propsObj = $.props;
            }
            else
            {
                _propsObj = {}
            }
        }
        
        // Find the correct browser specific property and setup the mapping using
        // $.props which is used internally by jQuery.attr() when setting CSS
        // properties via either the css(name, value) or css(properties) method.
        // The problem with doing this once outside of css() method is that you
        // need a DOM node to find the right CSS property, and there is some risk
        // that somebody would call the css() method before body has loaded or any
        // DOM-is-ready events have fired.
        if
        (
            typeof _propsObj['transform'] == 'undefined'
            &&
            (
                arg == 'transform'
                ||
                (
                    typeof arg == 'object'
                    && typeof arg['transform'] != 'undefined'
                )
            )
        )
        {
            _propsObj['transform'] = getTransformProperty(this.get(0));
        }
        
        // We force the property mapping here because jQuery.attr() does
        // property mapping with jQuery.props when setting a CSS property,
        // but curCSS() does *not* do property mapping when *getting* a
        // CSS property. (It probably should since it manually does it
        // for 'float' now anyway... but that'd require more testing.)
        //
        // But, only do the forced mapping if the correct CSS property
        // is not 'transform' and is something else.
        if (_propsObj['transform'] != 'transform')
        {
            // Call in form of css('transform' ...)
            if (arg == 'transform')
            {
                arg = _propsObj['transform'];
                
                // User wants to GET the transform CSS, and in jQuery 1.4.3
                // calls to css() for transforms return a matrix rather than
                // the actual string specified by the user... avoid that
                // behavior and return the string by calling jQuery.style()
                // directly
                if (typeof val == 'undefined' && jQuery.style)
                {
                    return jQuery.style(this.get(0), arg);
                }
            }

            // Call in form of css({'transform': ...})
            else if
            (
                typeof arg == 'object'
                && typeof arg['transform'] != 'undefined'
            )
            {
                arg[_propsObj['transform']] = arg['transform'];
                delete arg['transform'];
            }
        }
        
        return proxied.apply(this, arguments);
    };
})(jQuery);

