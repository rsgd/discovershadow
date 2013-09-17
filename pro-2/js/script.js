/* shadow Script 
 * Written by Raffael Stueken
 */ 


var winH, winW, width, height, topOff, leftOff, conRatio, imgW, imgH;
var imgWidth = 1600, imgHeight = 1600;
var logoWidth = 380, logoHeight = 180;
var smallLogoWidth = 190, smallLogoHeight = 90;
var border = 0.05;
var borderWidth, borderHori, borderVert, marginHori, marginVert, borderTop, borderBottom, fieldBottom, frameH, frameW, scrolledWin;
var imgRatio = imgHeight / imgWidth;
var $window, $body, $wrapper, $wrapInner, $backImg;
var increase = true;

var rot = 0; // roatation
var scl = 1.2; // scale

var rot2 = 0.01; // rotation speed
var scl2 = 0.0001; // scale speed
	
$(document).ready(function(){
	
	// Cache the Window and body object
	$window = $(window);
	$body = $('body');	
	$wrapper = $('#wrapper');
	$wrapInner = $('#wrapperInner');
	$backImg = $('#back img');
	
	// init page functions
	var imageToLoad = $('#back img').attr('src');
	$('<img />').attr('src', imageToLoad).load(function(){		
       init();
    });	
    window.setTimeout(function(){
    	init();
    }, 5000);
    
	// preload logo
	// $('<img />').attr('src', 'img/shadow_logo.png').load(function(){		
       adjustWindow();
    // });

    
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
	
	// fade in image
	$backImg.fadeIn(4000);
	
	// handle scrolling
	$window.scroll(function() {
		handleScroll();
	});	

	// start rendering image
	animloop();
   
   
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

	// rotate
	$backImg.css('transform', 'rotate('+rot+'deg) scale('+scl+', '+scl+')');
	
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
    
    // scale the frame    
    if (conRatio < imgRatio){
    	imgW = winW;
    	imgH = winW * imgRatio;        
    } else {    
    	imgW = winH / imgRatio;
    	imgH = winH;        
    }  
        
    // Position the frame 
    topOff = (winH/2)-(imgH/2);
	leftOff = (winW/2)-(imgW/2);
	$backImg.css({width: imgW+'px', height: imgH+'px', left: leftOff+'px', top: topOff+'px'});
	
	
	// set logo position and size
	borderWidth = Math.floor(winW * border);
	frameH = winH - (borderWidth * 2);
	frameW = winW - (borderWidth * 2);
	
	$wrapper.css({width: frameW+'px', height: frameH+'px', left: borderWidth+'px', top: borderWidth+'px'});
	
	$('section').css({
		display:	"block",
		height:		winH+'px'
	});
	
	$body.height($wrapInner.height());

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

