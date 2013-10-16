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
var exp = 'med';
var thePage;

var winH, winW, offT, offL, conRatio, imgW, imgH, is_chrome, is_ie;
var borderW, frameH, frameW, bodyH, navA, navS, s1M;
var $window, $body, $wrapper, $wrapInner, $nav, $bT, $bB, $img1, $splashImg, $splashHead, $clouds, $cloud1, $cloud2;
var $sStart, $sProb, $sSol, $sAppi, $s5, $s6, $s7, $s8, $s9, $s10, $s11, $sImpr;

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

var countProgress = 0;

var facebooked = 0;
var twittered = 0;
var tumblered = 0;


$(document).ready(function(){
		
	// Cache objects
	$window = $(window);
	$body = $('body');	
	$wrapper = $('#wrapper');
	$wrapInner = $('#wrapperInner');
	$bT = $('#borderTop');
	$bB = $('#borderBottom');
	$sAppi = $('#secAppimg');

	// what page on?
	if($body.hasClass('mainPage')) {
		thePage = 'main';
	}
	if($body.hasClass('thanksPage')) {
		thePage = 'thanks';
	}
	
	if(thePage == 'main') {
	
		// Cache objects
		$nav = $('#nav');
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
		$s5 = $('#secAppfunc');
		$s6 = $('#secAppfunc1');
		$s7 = $('#secAppfunc2');
		$s8 = $('#secAppfunc3');
		$s9 = $('#secAppfunc4');
		$s10 = $('#secAppfunc5');
		$s11 = $('#secAppfunc6');
		$sInv = $('#secInvite');
		$sImpr = $('#secImprint');
		
		// app img animation
		$appImg = $('#secAppfunc1');
		$appImg2 = $('#secAppfunc6');
		
		// define touch devises
		if (Modernizr.touch){
			$body.addClass('touch');
			exp = 'none';
		} else {
			$body.addClass('no-touch');		
		}
		
		// detect chrome and ie
		is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
		is_ie = $.browser.msie;
			
		if(is_chrome) {
		    myWay = true;
		}
		
		if(is_ie) {
			exp = 'poor';
		}
		
		// prevent bug -> iPhone-mockups will not show before other images are faded in
		if ($.browser.webkit) {
			$body.addClass('webkit');
		}
			
		// init page functions
		init();
		
	} else {
	
		// define touch devises
		if (Modernizr.touch){
			$body.addClass('touch');
			exp = 'none';
		} else {
			$body.addClass('no-touch');		
		}
		
		// get window dimensions
		adjustWindow();
		$window.resize(function() {
		    adjustWindow();
		});
	   	
   		// extern links
   		$("#links a").attr('target','_blank');	
   		
    	$("#topLogo").click(function() {
    		window.location.href = 'http://discovershadow.com/';
    		// changeMainImg();
    	});
    	
    	is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    	if(is_chrome && !body.hasClass("ambassadorPage"))  {
    		$("#tellFriend").click(function() {
    			window.location.href = 'mailto:friends-email-here?subject=DISCOVER SHADOW - WWW.DISCOVERSHADOW.COM';
    			return false;
    		});
    	}
    	
    // share tool
		$('#facebookShare').on('click', function() {
		    var w = 580, h = 300,
		    	leftPos = (winW/2)-(w/2),
		    	topPos  = (winH/2)-(h/2);      
		    
		    if(leftPos <= 0) {
		        leftPos = 0;
		    }         
		    if(topPos <= 0) {
		        topPos = 0;
		    }      
		    
		    window.open ('http://www.facebook.com/share.php?u=http://www.discovershadow.com', '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+topPos+', left='+leftPos);

		    showProgress();
		    
		    return false;
		    
		});
		
		$('#twitterShare').on('click', function() {
		    var loc = encodeURIComponent('http://kck.st/15z9W7D'),
		    	titleTwit = "REMEMBER YOUR DREAMS",
		        w = 580, h = 300,
		    	leftPos = (winW/2)-(w/2),
		    	topPos  = (winH/2)-(h/2);     
		    
		    if(leftPos <= 0) {
		        leftPos = 0;
		    }         
		    if(topPos <= 0) {
		        topPos = 0;
		    }  
		    
		    window.open('http://twitter.com/share?text=' + titleTwit + '&url=' + loc, '', 'height=' + h + ', width=' + w + ', top='+topPos +', left='+ leftPos +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
		    
		    showProgress();
		    
		    return false;
		    
		});
		
		// share tool
		$('#facebookShare2').on('click', function() {
		    		    var w = 580, h = 300,
		    	leftPos = (winW/2)-(w/2),
		    	topPos  = (winH/2)-(h/2);      
		    
		    if(leftPos <= 0) {
		        leftPos = 0;
		    }         
		    if(topPos <= 0) {
		        topPos = 0;
		    }      
		    
		    var faceWin = window.open ('http://www.facebook.com/share.php?u=http://www.discovershadow.com', '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+topPos+', left='+leftPos);
		    facebooked = 1;
		    supported(faceWin);
		    
		    return false;
		    
		});
		
		$('#twitterShare2').on('click', function() {
		    var loc = encodeURIComponent('http://kck.st/15z9W7D'),
		    	titleTwit = "REMEMBER YOUR DREAMS",
		        w = 580, h = 300,
		    	leftPos = (winW/2)-(w/2),
		    	topPos  = (winH/2)-(h/2);     
		    
		    if(leftPos <= 0) {
		        leftPos = 0;
		    }         
		    if(topPos <= 0) {
		        topPos = 0;
		    }  
		    
		    var twittWin = window.open('http://twitter.com/share?text=' + titleTwit + '&url=' + loc, '', 'height=' + h + ', width=' + w + ', top='+topPos +', left='+ leftPos +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
		    twittered = 1;
		    supported(twittWin);
		    
		    return false;
		    
		});
		
		$('#tumblrShare2').on('click', function() {
		    var w = 580, h = 450,
		    	leftPos = (winW/2)-(w/2),
		    	topPos  = (winH/2)-(h/2);      
		    
		    if(leftPos <= 0) {
		        leftPos = 0;
		    }         
		    if(topPos <= 0) {
		        topPos = 0;
		    } 
		    		    
		    var tumblr_photo_source = "http://discovershadow.com/img/shadow_app_01.jpg";
				var tumblr_photo_caption = "Remember your dreams";
				var tumblr_photo_click_thru = "http://kck.st/15z9W7D";
		    
		    var tumblrWin = window.open("http://www.tumblr.com/share/photo?source=" + encodeURIComponent(tumblr_photo_source) + "&caption=" + encodeURIComponent(tumblr_photo_caption) + "&clickthru=" + encodeURIComponent(tumblr_photo_click_thru), '', 'height=' + h + ', width=' + w + ', top='+topPos +', left='+ leftPos +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
		    tumblred = 1;
		    supported(tumblrWin);
		    
		    return false;
		    
		});
		
		
		$('#videoWatch').on('click', function() {
		    showProgress();
		    window.setTimeout(function(){
		    	// window.location.href = "http://vimeo.com/68159227";
		    	window.open('http://kck.st/15z9W7D','_blank');	    	
		    },500);
		    
		    return false;
		    
		});
		
		// activate sign up
		activateForm();
		
		// ambassador
		
		
		$('#actionBox').on('click', function() {
		    return false;
		});
   		
	}
       
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
	
	window.setTimeout(function(){
        $body.addClass("delay");
    }, 1000);
	
	// start up after 5sec no matter what
    window.setTimeout(function(){
        start();
    }, 4000);
	    	
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
	
	// inview?
	$sStart.addClass('inView');
	$('section').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
	    
	    var $el = $(this);
	    
	    if (isInView) {
	    	// element is now visible in the viewport
	    	$el.addClass('inView');		
	    	
	    } else {
	      	// element has gone out of viewport
	    }
	    
	});
	
	$('.naviHook').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
	    
	    var $el = $(this);
	    
	    if (isInView) {
	    
	    	// whole part of element is visible
	    	var navID = $el.attr("id").replace("hook", "");
	    	$nav.attr("class", "").addClass('a'+navID);										
	    	
	    }
	});
	
	
 
    
      
}


function activateForm() {
	
	// subscribe
  $('#formWrapper').click(function(){
  	if(!$body.hasClass("ambassadorPage")) {
   	  focusForm();
   	 } else if ($body.hasClass("supported")) {
	   	 focusForm();
   	 } else {
	   	 $('#pleaseFirst').css({opacity: "1"});
   	 }
  });
   	
  // form validation
  $('#getInvolved').ketchup().submit(function() {
   		
   	$('#secInvite').removeClass('error');
   	$('#result').hide();
   	   		   		
		if ($(this).ketchup('isValid')) {
		
			var action = $(this).attr('action');
			var email  = $('#address').val();
			var number = getNumber(email);			
									
			$.ajax({
				url: action,
        async: false,
				type: 'POST',
				data: {
					email: email,
					number: number
				},
				success: function(data){			
					if(data == "Thanks") {		
						window.location.href = "../thanks.php";
					} else {
						$('#secInvite .bottomContent').fadeOut(50);
						$('#result').html(data).fadeIn(300,"easeInOutQuad");
					}
				},
				error: function() {
					$('#secInvite .bottomContent').fadeOut(50);
					$('#result').html('Sorry, an error occurred.').css('color', '#e88074').fadeIn(300,"easeInOutQuad");
				}
			});
		} else {
			$('#secInvite .bottomContent').fadeOut(50);
			$('#result').html("Please enter a valid email address").fadeIn(300,"easeInOutQuad");
			$('#secInvite').addClass('error');
		}
		
		return false;
		
	});
	
}

// share tool 
function showProgress() {
	
	countProgress++;
	var percent = Math.min(Math.round(countProgress / 3 * 100), 100);
    $('#progressCount div').text(percent + '%');
    
	if(countProgress == 1) {
		$body.addClass("p33");
	} else if(countProgress == 2) {
		$body.addClass("p66");
	} else if(countProgress == 3) {
		$body.addClass("p100");
	}
	
}

function supported(win) {

	window.setTimeout(function(){
	
		if(win.closed) {
	
			if((facebooked == 1 && twittered == 1) || (tumblred == 1 && twittered == 1) || (facebooked == 1 && tumblred == 1)) {
			  $body.addClass("supported");
			  $("#address").attr("readonly", false);
			  $('#pleaseFirst').css({opacity: "0"});
			}
		} else {
			supported(win);			
		}
		  
	},50);
	
}

// facebook share
function shareOnFacebook() {
    FB.ui(
      {
        method        : 'feed',
        display       : 'iframe',
        name          : 'name',
        link          : 'http://www.linktoshare.com',
        picture       : 'http://www.linktoshare.com/images/imagethumbnail.png',
        caption       : 'txt caption',
        description   : 'txt description',
        access_token  : 'user access token'
      },
      function(response) {
        if (response && response.post_id) {

          // HERE YOU CAN DO WHAT YOU NEED
          alert('OK! User has published on Facebook.');

        } else {
          //alert('Post was not published.');
        }
      }
    );
  }

// get a number in line for each subscriber
function getNumber(email) {
	
  // sign up
  var token       = "7da2acda5c7545d507202758b4535293";
  var user_email  = email;
  var user_number = 0;

	$.ajax({
		url: "http://ec2-23-20-86-22.compute-1.amazonaws.com/2.0/user/registerbeta",
		async: false,
		type: "post",
		data: {"email":user_email,"token":token},
		success: function(mydata){
                        //Firefox doesn't parse the JSON object by default
                        //(like Safari or Chrome do), so need an extra check
                        if(mydata.constructor === String) {
			    mydata = jQuery.parseJSON(mydata);
                        }
			if(mydata.last_insert_id != undefined) {
			     user_number = mydata.last_insert_id;
			     // alert(user_number);
                             //$("#number").val(number);
			} else {
			     // alert("failure: obj is null");
			}
		},
		error:function(err){
        	    //alert("failure: " + err.message);
                }
	});
	return user_number;
}

// fade in experience
function start() {

	if(!$body.hasClass("started") && thePage == 'main'){

		// body classes
		$body.addClass("started");
		
		$('#scrollDown,#secStart h1').hide();
		$img1.hide(); 
		$('html').removeClass("loading");
				
		$('#secStart h1').fadeIn(800,"easeInOutQuad");
		window.setTimeout(function(){
			$('#secStart a.button').css({opacity: 1});		
		},700);		
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

	if(exp != 'none') {
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
    	//	$('#invite a').click(function() {
    	//		$nav.attr("class", "").addClass('a5');
    	//		$body.scrollTo('#hook5',1200,"easeInOutQuad");
    	//		return false;
    	//	});    
    	$('section').not("#secInvite,#secCredits").click(function() {
    		$body.scrollTo($(this).next(),600,"easeInOutQuad");
    	});    
    	$("#scrollDown").click(function() {
    		$body.scrollTo($("#secProblem"),1200,"easeInOutQuad");
    	});
    	$("#topLogo").click(function() {
    		window.location.href = 'http://discovershadow.com/';
    		// changeMainImg();
    	});
    
    } else {
    	//	$('#invite a').click(function() {
    	//		$body.scrollTo('#secInvite',1200,"easeInOutQuad");
    	//		return false;
    	//	}); 
    }
    
    if($body.hasClass("touch")) {
    	$("#splashHead h1").click(function() {
    		$body.scrollTo($("#secProblem"),1200,"easeInOutQuad");
    	});
    }
    
}

// imgtest
var mainImgs = 3;
function changeMainImg() {
	var thisMainImg = $('#img1').attr('src');
	var thisMainImgN = thisMainImg.substr(thisMainImg.length-5,1);
	if(thisMainImgN >= mainImgs) {
		var thisMainImgN2 = 1;
	} else {	
		var thisMainImgN2 = parseFloat(thisMainImgN) + 1;
	}	
	thisMainImg = thisMainImg.replace(thisMainImgN,thisMainImgN2);
	$('#img1').attr('src',thisMainImg);
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
	
	if(winH <= 440) {
		winH = 440;
	}	
	
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
	
	if(thePage == 'main') {
	
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
	
	} else {
	
		// position app infos
		if(!$body.hasClass('statusPage')) {
			$sAppi.find('.sectionContent').css({marginTop: ((winH * 0.5) - borderW)+'px'});
		} else {
			if($sAppi.height() < (winH - 230)) {
				$sAppi.height(winH - 230);
			}
		}
		
	}
	
	if(thePage == 'thanks') {
	
		// reposition social media	
		$('#secCredits').css({marginTop: '-'+ ((borderW * 2) + 95) +'px'});		
	
	}
	
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
		
		
		if(exp != 'none' && exp != 'poor') {
			// zoom img // only calc if in view
			if((scrolledWin * 0.8) <= winH) { 
			    zoom = 1 + (scrolledWin * zoomS);
			    if (zoom <= 1) {
			    	zoom = 1;
			    }
			   	$img1.css('transform', 'scale('+zoom+', '+zoom+')');
			}
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
    
    if(exp != 'none') {
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
