/* shadow Script 
 * Written by Raffael Stueken
 */function init(){$("<img />").attr("src",$img1.attr("src")).load();window.setTimeout(function(){$body.addClass("delay")},1e3);window.setTimeout(function(){start()},4e3);adjustWindow();$window.resize(function(){adjustWindow()});$window.scroll(function(){handleScroll()});animloop();buttonHigh();initNavi();$sStart.addClass("inView");$("section").bind("inview",function(e,t,n,r){var i=$(this);t&&i.addClass("inView")});$(".naviHook").bind("inview",function(e,t,n,r){var i=$(this);if(t){var s=i.attr("id").replace("hook","");$nav.attr("class","").addClass("a"+s)}})}function activateForm(){$("#formWrapper").click(function(){$body.hasClass("ambassadorPage")?$body.hasClass("supported")?focusForm():$("#pleaseFirst").css({opacity:"1"}):focusForm()});$("#getInvolved").ketchup().submit(function(){$("#secInvite").removeClass("error");$("#result").hide();if($(this).ketchup("isValid")){var e=$(this).attr("action"),t=$("#address").val(),n=getNumber(t);$.ajax({url:e,async:!1,type:"POST",data:{email:t,number:n},success:function(e){if(e=="Thanks")window.location.href="../thanks.php";else{$("#secInvite .bottomContent").fadeOut(50);$("#result").html(e).fadeIn(300,"easeInOutQuad")}},error:function(){$("#secInvite .bottomContent").fadeOut(50);$("#result").html("Sorry, an error occurred.").css("color","#e88074").fadeIn(300,"easeInOutQuad")}})}else{$("#secInvite .bottomContent").fadeOut(50);$("#result").html("Please enter a valid email address").fadeIn(300,"easeInOutQuad");$("#secInvite").addClass("error")}return!1})}function showProgress(){countProgress++;var e=Math.min(Math.round(countProgress/3*100),100);$("#progressCount div").text(e+"%");countProgress==1?$body.addClass("p33"):countProgress==2?$body.addClass("p66"):countProgress==3&&$body.addClass("p100")}function supported(e){window.setTimeout(function(){if(e.closed){if(facebooked==1&&twittered==1||tumblred==1&&twittered==1||facebooked==1&&tumblred==1){$body.addClass("supported");$("#address").attr("readonly",!1);$("#pleaseFirst").css({opacity:"0"})}}else supported(e)},50)}function shareOnFacebook(){FB.ui({method:"feed",display:"iframe",name:"name",link:"http://www.linktoshare.com",picture:"http://www.linktoshare.com/images/imagethumbnail.png",caption:"txt caption",description:"txt description",access_token:"user access token"},function(e){e&&e.post_id&&alert("OK! User has published on Facebook.")})}function getNumber(e){var t="7da2acda5c7545d507202758b4535293",n=e,r=0;$.ajax({url:"http://ec2-23-20-86-22.compute-1.amazonaws.com/2.0/user/registerbeta",async:!1,type:"post",data:{email:n,token:t},success:function(e){e.constructor===String&&(e=jQuery.parseJSON(e));e.last_insert_id!=undefined&&(r=e.last_insert_id)},error:function(e){}});return r}function start(){if(!$body.hasClass("started")&&thePage=="main"){$body.addClass("started");$("#scrollDown,#secStart h1").hide();$img1.hide();$("html").removeClass("loading");$("#secStart h1").fadeIn(800,"easeInOutQuad");window.setTimeout(function(){$("#secStart a.button").css({opacity:1})},700);$img1.fadeIn(1800,"easeInOutQuad");window.setTimeout(function(){$("#scrollDown").fadeIn(800,"easeInOutQuad")},800);topOffs()}}function buttonHigh(){timer=setInterval(function(){lastScroll==scrolledWin&&$body.removeClass("scrolling");lastScroll=scrolledWin},250)}function initNavi(){if(exp!="none"){$("#nav li").click(function(){navA=$(this).index()+1;$nav.attr("class","").addClass("a"+navA);navA==1?navS=0:navS=$("#hook"+navA);$body.scrollTo(navS,800,"easeInOutQuad")});$("section").not("#secInvite,#secCredits").click(function(){$body.scrollTo($(this).next(),600,"easeInOutQuad")});$("#scrollDown").click(function(){$body.scrollTo($("#secProblem"),1200,"easeInOutQuad")});$("#topLogo").click(function(){window.location.href="http://discovershadow.com/"})}$body.hasClass("touch")&&$("#splashHead h1").click(function(){$body.scrollTo($("#secProblem"),1200,"easeInOutQuad")})}function changeMainImg(){var e=$("#img1").attr("src"),t=e.substr(e.length-5,1);if(t>=mainImgs)var n=1;else var n=parseFloat(t)+1;e=e.replace(t,n);$("#img1").attr("src",e)}function handleScroll(){scrolledWin=getPageScroll();$body.addClass("scrolling");scrolledWin*1.5>winH&&$body.addClass("content");scrolledWin>50&&$body.addClass("scrolled");topOff>=scrolledWin?$appImg.removeClass("sticky"):$appImg.addClass("sticky");topOff2>=scrolledWin?$appImg2.removeClass("sticky"):$appImg2.addClass("sticky");scrolledWin<winH&&$nav.attr("class","").addClass("a1")}function adjustWindow(){winW=$(window).width();winH=$(window).height();winH<=440&&(winH=440);borderW=Math.floor(winW*border);borderW<=20&&(borderW=20);$("section.full").height(winH);$("section.startFull").height(winH*f1);$bT.css({height:borderW+"px"});borderW<=40?$bB.css({height:"40px"}):$bB.css({height:borderW+"px"});$wrapper.css({margin:borderW+"px"});if(thePage=="main"){conRatio=winH*f1/(winW-borderW*2);bigImg(!0);$splashHead.css({marginTop:winH*.5-80+"px"});$(".secAppfunc .leftContent, .secAppfunc .rightContent").css({marginTop:winH*.5+"px"});$sAppi.find(".sectionContent").css({marginTop:winH*.5-borderW+"px"});$sInv.find(".sectionContent").css({marginTop:winH*.5-borderW+"px"});$sProb.find(".sectionContent").css({marginTop:winH*.5-borderW+"px"});$sStart.css({marginBottom:"-"+winH*(f1-.8)+"px"});$(".bottomContent").css({bottom:borderW+20+"px"});topOffs()}else $body.hasClass("statusPage")?$sAppi.height()<winH-230&&$sAppi.height(winH-230):$sAppi.find(".sectionContent").css({marginTop:winH*.5-borderW+"px"});thePage=="thanks"&&$("#secCredits").css({marginTop:"-"+(borderW*2+95)+"px"})}function topOffs(){topOff=$appImg.position();topOff=topOff.top;topOff2=$appImg2.position();topOff2=topOff2.top}function bigImg(e){if(myWay){if(scrolledWin*.8<=winH){zoom=scrolledWin*zoomS2;if(conRatio<imgRatio){imgW=Math.floor(winW-borderW*2+zoom)+1;imgH=Math.floor(imgW*imgRatio)+1}else{imgH=Math.floor(winH*f1+zoom)+1;imgW=Math.floor(imgH/imgRatio)+1}offT=Math.floor((winH*f1-imgH)/2)+1;offL=Math.floor((winW-borderW*2-imgW)/2)+1;$img1.css({width:imgW+"px",height:imgH+"px",left:offL+"px",top:offT+"px"})}}else{if(e){if(conRatio<imgRatio){imgW=winW-borderW*2;imgH=Math.floor(imgW*imgRatio)+1}else{imgH=Math.floor(winH*f1)+1;imgW=Math.floor(imgH/imgRatio)+1}offT=Math.floor((winH*f1-imgH)/2);offL=Math.floor((winW-borderW*2-imgW)/2);$img1.css({width:imgW+"px",height:imgH+"px",left:offL+"px",top:offT+"px"})}if(exp!="none"&&exp!="poor"&&scrolledWin*.8<=winH){zoom=1+scrolledWin*zoomS;zoom<=1&&(zoom=1);$img1.css("transform","scale("+zoom+", "+zoom+")")}}if(advanced){zoom=scrolledWin*zoomS2;imgW=Math.floor(winW-borderW*2+zoom)+1;offL=Math.floor((winW-borderW*2-imgW)/2)+1}}function getPageScroll(){var e;self.pageYOffset?e=self.pageYOffset:document.documentElement&&document.documentElement.scrollTop?e=document.documentElement.scrollTop:document.body&&(e=document.body.scrollTop);return e}function animloop(){render();requestAnimFrame(animloop)}function render(){if(exp!="none"){scrolledWin*.8<=winH&&bigImg(!1);oPac=(winH*(f1-1)+borderW*2-scrolledWin)/(winH*(f1-1));oPac>=1?oPac=1:oPac<=0&&(oPac=0);$splashImg.css({opacity:oPac})}}function focusForm(){if(!$("#formWrapper").hasClass("focused")){$("#formWrapper").addClass("focused");$("input.input").focus();$("input.input").attr("value")=="Your email address"&&$("input.input").attr("value","")}}var imgWidth=1800,imgHeight=1800,imgRatio=imgHeight/imgWidth,border=.05,scrolledWin=0,lastScroll=0,f1=1.4,advanced=!1,exp="med",thePage,winH,winW,offT,offL,conRatio,imgW,imgH,is_chrome,is_ie,borderW,frameH,frameW,bodyH,navA,navS,s1M,$window,$body,$wrapper,$wrapInner,$nav,$bT,$bB,$img1,$splashImg,$splashHead,$clouds,$cloud1,$cloud2,$sStart,$sProb,$sSol,$sAppi,$s5,$s6,$s7,$s8,$s9,$s10,$s11,$sImpr,zoom=1,zoomS=.0015,zoomS2=2,oPac=1,myWay=!1,timer,$appImg,$appImg2,topOff=0,topOff2=0,countProgress=0,facebooked=0,twittered=0,tumblred=0;$(document).ready(function(){$window=$(window);$body=$("body");$wrapper=$("#wrapper");$wrapInner=$("#wrapperInner");$bT=$("#borderTop");$bB=$("#borderBottom");$sAppi=$("#secAppimg");$body.hasClass("mainPage")&&(thePage="main");$body.hasClass("thanksPage")&&(thePage="thanks");if(thePage=="main"){$nav=$("#nav");$splashImg=$("#splashImages");$img1=$("#secStart .backImg img");$splashHead=$("#splashHead");$clouds=$("#clouds");$cloud1=$("#cloud1");$cloud2=$("#cloud2");$sStart=$("#secStart");$sProb=$("#secProblem");$sSol=$("#secSolution");$s5=$("#secAppfunc");$s6=$("#secAppfunc1");$s7=$("#secAppfunc2");$s8=$("#secAppfunc3");$s9=$("#secAppfunc4");$s10=$("#secAppfunc5");$s11=$("#secAppfunc6");$sInv=$("#secInvite");$sImpr=$("#secImprint");$appImg=$("#secAppfunc1");$appImg2=$("#secAppfunc6");if(Modernizr.touch){$body.addClass("touch");exp="none"}else $body.addClass("no-touch");is_chrome=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;is_ie=$.browser.msie;is_chrome&&(myWay=!0);is_ie&&(exp="poor");$.browser.webkit&&$body.addClass("webkit");init()}else{if(Modernizr.touch){$body.addClass("touch");exp="none"}else $body.addClass("no-touch");adjustWindow();$window.resize(function(){adjustWindow()});$("#links a").attr("target","_blank");$("#topLogo").click(function(){window.location.href="http://discovershadow.com/"});is_chrome=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;$("#facebookShare").on("click",function(){var e=580,t=300,n=winW/2-e/2,r=winH/2-t/2;n<=0&&(n=0);r<=0&&(r=0);window.open("http://www.facebook.com/share.php?u=http://www.discovershadow.com","","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+e+", height="+t+", top="+r+", left="+n);showProgress();return!1});$("#twitterShare").on("click",function(){var e=encodeURIComponent("http://kck.st/15z9W7D"),t="REMEMBER YOUR DREAMS",n=580,r=300,i=winW/2-n/2,s=winH/2-r/2;i<=0&&(i=0);s<=0&&(s=0);window.open("http://twitter.com/share?text="+t+"&url="+e,"","height="+r+", width="+n+", top="+s+", left="+i+", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0");showProgress();return!1});$("#facebookShare2").on("click",function(){var e=580,t=300,n=winW/2-e/2,r=winH/2-t/2;n<=0&&(n=0);r<=0&&(r=0);var i=window.open("http://www.facebook.com/share.php?u=http://www.discovershadow.com","","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+e+", height="+t+", top="+r+", left="+n);facebooked=1;supported(i);return!1});$("#twitterShare2").on("click",function(){var e=encodeURIComponent("http://kck.st/15z9W7D"),t="REMEMBER YOUR DREAMS",n=580,r=300,i=winW/2-n/2,s=winH/2-r/2;i<=0&&(i=0);s<=0&&(s=0);var o=window.open("http://twitter.com/share?text="+t+"&url="+e,"","height="+r+", width="+n+", top="+s+", left="+i+", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0");twittered=1;supported(o);return!1});$("#tumblrShare2").on("click",function(){var e=580,t=450,n=winW/2-e/2,r=winH/2-t/2;n<=0&&(n=0);r<=0&&(r=0);var i="http://discovershadow.com/img/shadow_app_01.jpg",s="Remember your dreams",o="http://kck.st/15z9W7D",u=window.open("http://www.tumblr.com/share/photo?source="+encodeURIComponent(i)+"&caption="+encodeURIComponent(s)+"&clickthru="+encodeURIComponent(o),"","height="+t+", width="+e+", top="+r+", left="+n+", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0");tumblred=1;supported(u);return!1});$("#videoWatch").on("click",function(){showProgress();window.setTimeout(function(){window.open("http://kck.st/15z9W7D","_blank")},500);return!1});activateForm();$("#actionBox").on("click",function(){return!1})}});$(window).load(function(){start()});var mainImgs=3;window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){window.setTimeout(e,1e3/60)}}();