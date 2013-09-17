/* shadow Script 
 * Written by Raffael Stueken
 */ 


var windowHeight, windowWidth, width, height, topOff, leftOff, conRatio, frameWidth, frameHeight;
var pageHeight;
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

var page = 0;
var followMessage = new Array(); 
followMessage[0] = '<div class="followBody"><a href="http://www.tumblr.com/follow/discovershadow" title="follow us on tumblr">Thanks for<br />scrolling</a></div><div class="followBottom"></div>';
followMessage[1] = '<div class="followBody"><a href="https://www.facebook.com/discovershadow">Follow us on<br />Facebook</a></div><div class="followBottom"></div>';
// followMessage[2] = '<div class="followBody"><a href="https://twitter.com/discovershadow">Follow us on<br />Twitter</a></div><div class="followBottom"></div>';
var follow = 0;

var pageID = 1;

	
$(document).ready(function(){
	
	// Cache the Window and body object
	$window = $(window);
	$body = $('body');	
	
	
	if($('#back').length) { // if landing page
	
		// iniciate mansonry and starting up 
		var $container = $('#content');
		$container.imagesLoaded(function(){
			$container.masonry({
				gutterWidth: 0,
				isFitWidth: true,
				containerStyle: {
					position: "relative"
				},		
			    itemSelector: '.post',
			    columnWidth: 10,
    		 	isAnimated: !Modernizr.csstransitions
			});
		});
		
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
		$('<img />').attr('src', 'http://discovershadow.com/tumblr/img/shadow_logo_tumblr.png');    
   		window.setTimeout(function(){
   			if(!$body.hasClass("started")){
		    	$body.addClass("loading");
    		}
    	}, 1000);
    	
    	// infinite scroll
		if($('#infinite_scroll').length) {
			$container.infinitescroll({
				loading: {
    			    img: "http://discovershadow.com/tumblr/img/shadow_loader.gif"
    			},
				navSelector  : '#infinite_scroll',    // selector for the paged navigation 
				nextSelector : '#infinite_scroll a.next',  // selector for the NEXT link (to page 2)
				itemSelector : '.post',     // selector for all items you'll retrieve
				animate: false,
				loadingImg: false,
				bufferPx: 1000,
				prefill: false
			},
			// trigger Masonry as a callback
			function(newElements) {		
			
				$("body").addClass("infiniteLoaded");
    			
				var $newElems = $(newElements).css({ opacity: 0 });
				var $firstElem = $newElems[0];
				
				// append pagination
				page++;
				var $pagebox = $('<div class="post pleaseFollow" id="pageCount'+page+'"><div class="pleaseFollowInner">'+followMessage[follow]+'</div></div>');		
				if(follow >= (followMessage.length - 1)) {
					follow = 0;
				} else {
					follow++;
				}
				$pagebox.css({ opacity: 0 });
				$("#"+$firstElem.id).before($pagebox);						
			
    	    	// ensure that images load before adding to masonry layout
    	    	$newElems.imagesLoaded(function(){
    	    		// show elems now they're ready
    	    	  	$newElems.animate({ opacity: 1 });
    	    	  	$container.masonry( 'appended', $newElems, true ); 
    	    	  	$pagebox.animate({ opacity: 1 });
				  	$container.masonry('appended', $pagebox, true );
				  	$("a.reblogTumblr, .followBody a").attr("target","_blank");
				  	window.setTimeout(function(){
				  		adjustWindow();				  		
				  	},1000);
    	    	});
    	    	
    	    	pageID++;
    	    	var theUrl = 'http://'+window.location.host+'/page/'+pageID;
    	    	var theTitle = "Page "+pageID;
    	    	// alert(theUrl+' '+theTitle);
    	    	trackPiwik(theUrl,theTitle);							
							
			});		
		
		}	
		
	} else {
	
	    initLinks();
	
	}
    
    
});



// init site functions
/////////////////////////////////////////

function init() {
	if(!$body.hasClass("started")) {
	
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
		$('<img />').attr('src', 'http://discovershadow.com/tumblr/img/shadow_logo_tumblr.png').load(function(){		
    	  	$('#back h1').fadeIn(200);
    	}); 
    			
		// scrollto
		$body.append('<div id="scrollDown"></div>');
		$('h1 a, #scrollDown').click(function(){
			$(window).scrollTo((windowHeight / 2),800);
			return false;
		});
		window.setTimeout(function(){
			$('#scrollDown').animate({opacity: '1'}, 800);
		}, 2500);
		
		// layerBox
		$("a.imgLink, a.texLink, a.pageNavButton").live("click", function() {
			showLayerBox(this.href);	
			return false;
		});
		
		// start rendering image
		animloop();
		
		initLinks();
	
	}
   
}

function initLinks() {
	
	// extern links
	$('a.reblogTumblr, .followBody a').attr("target","_blank");
	
	// like functionality
	$body.append('<iframe id="likeit"></iframe>');	
	
	$("a.likeTumblr").live("click", function() {
    	var a, b, c, d, e;
    	if($(this).hasClass('liked')) {
    		$(this).removeClass('liked');
    		e = 'unlike/';
    	} else {
    		$(this).addClass('liked');
    		e = 'like/';    	
    	}
    	if($body.hasClass('frontPage') && !$body.hasClass('layered')){
    		a = $(this).closest(".post");
    		b = a.attr("id").slice(-11);
    		c = a.children("input").attr("value").slice(-8);
    	} else {
    		a = $('#pageContent').find(".post");    		
    		b = a.attr("id").slice(-11);
    		c = $('#pageContent').find("input.hiddenLink").attr("value").slice(-8);
    	}    	
    	d = "http://www.tumblr.com/" + e + c + "?id=" + b;
    	$("#likeit").attr("src", d);
    	return false;
    });
	
	$("a.shareFacebook, a.tweetThis").live("click", function() {
		window.open($(this).attr("href"),'_blank','height=500,width=600,left=100,top=100') ;
		return false;
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

// rendering
function render() {

	// if in view
	if((scrolledWin * 1.5) <= windowHeight) {
	
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
		if((boxMargin * 2) >= windowHeight) {
			boxMargin = windowHeight / 2;
		}
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
				
	} else {
		
		boxMargin = windowHeight / 2;
		$('#back').css({marginTop: '-'+boxMargin+'px', marginBottom: '-'+boxMargin+'px'});
		
	}

	// second logo	
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
	
	// show menu
	if(scrolledWin > (windowHeight * 0.1)) {
		$('#menu').addClass('show');
	} else {
		$('#menu').removeClass('show');
	}
	
	// show button
	if(scrolledWin > (windowHeight * 0.8)) {
		$('#homeLinkBig').css({opacity: 1});
	} else {
		$('#homeLinkBig').css({opacity: 0});
	}
	
		
}

// handle scroll
function handleScroll() {
	scrolledWin = getPageScroll();	
	$('#scrollDown').remove();
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
	pageHeight = $(document).height();
	
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
	
	// position the modal
	$('.layer').css({
	    height: pageHeight,
	    width: windowWidth
	});
	

}



/////////// Layer box ////////////

/* layerBox-script is based on Greybox Redux (Written by: John Resig)
 * and the javascript lightbox plugin (Written by: Leandro Vieira Pinho)
 * Written by Raffael Stueken
 */ 

function showLayerBox(url) {	
	
	// give a unique id due to safari-reload-bug
	var overlayid = 1 + 100*(Math.random());
	overlayid  = Math.round(overlayid);
	
	// append class
	$body.addClass("layered");	
	
	// append layerbox	
    $body.append("<div class='layer'></div><div class='layerLoader'></div><div class='layerWrapper' id='layerBox"+overlayid+"'><div class='layerInner'></div><div id='close"+overlayid+"' class='layerClose'><span></span></div></div></div>");
	
	// Style overlay and show it
	$('.layer').css({
	    height: pageHeight,
	    width: windowWidth
	});
	$('.layer').fadeTo(400,0.95);
		
	var arrPageScroll = getPageScroll();
	var fromTop = arrPageScroll + (windowWidth / 20) +'px';

	// get Content
	var toLoad = url+' #page';
	
	// show loader
	window.setTimeout(function() {
		$('.layerLoader').fadeIn(200);
	}, 1000);
	
	// Load Content into layerbox via ajax
	$('#layerBox'+overlayid+' .layerInner').load(toLoad,'', function () {
		
		// animate box		
    	$('#layerBox'+overlayid).css({
    		top: arrPageScroll + ($(window).height() / 5), 
    		display: 'block', 
    		opacity: '0'
    	}).animate({top: fromTop, opacity: "1"}, 800);
    	
    	window.setTimeout(function() {
			$('.layerClose').css({top: (windowWidth / 20) +'px'}).fadeIn(400);
		}, 400);    	
    	
    	$(".layerLoader").remove();	
		$(".layer,.layerClose").click(function(){
			hideLayerBox();
			return false;
		});
				
		// extern links
		$('a.reblogTumblr').attr("target","_blank");
		    
    	var theTitle = $('#pageContent .post').attr("id");
    	trackPiwik(url,theTitle);           
		
    });
}


function hideLayerBox() {	
	$('.layerClose').hide();
	$(".layerWrapper,.layer").fadeOut(400, function() {
		$(".layerWrapper,.layer").empty().remove();
		$(".layer").empty().remove();	
	});
	$body.removeClass("layered");	
		
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



// tracking
function trackPiwik(url,title) {
	window.setTimeout(function() { 
		try {
		    piwikTracker.setCustomUrl(url);	   
		    piwikTracker.setDocumentTitle(title);	   
		    piwikTracker.trackPageView();	   
		    piwikTracker.enableLinkTracking();	   		
		}	catch(err) {	   
		    //Piwik funktioniert nicht	   
		}
	}, 1200);
}
