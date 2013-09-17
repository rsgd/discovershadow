/* Modernizr 2.6.2 (Custom Build) | MIT & BSD ->
 * Build: http://modernizr.com/download/#-csstransitions-touch-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	}
});

/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright © 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);



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

/* https://github.com/protonet/jquery.inview */
(function(d){var p={},e,a,i=document,j=window,f=i.documentElement,k=d.expando;d.event.special.inview={add:function(a){p[a.guid+"-"+this[k]]={data:a,$element:d(this)}},remove:function(a){try{delete p[a.guid+"-"+this[k]]}catch(d){}}};d(j).bind("scroll resize",function(){e=a=null});!f.addEventListener&&f.attachEvent&&f.attachEvent("onfocusin",function(){a=null});setInterval(function(){var l=d(),k,n=0;d.each(p,function(a,b){var c=b.data.selector,d=b.$element;l=l.add(c?d.find(c):d)});if(k=l.length){var b;
if(!(b=e)){var g={height:j.innerHeight,width:j.innerWidth};if(!g.height&&((b=i.compatMode)||!d.support.boxModel))b="CSS1Compat"===b?f:i.body,g={height:b.clientHeight,width:b.clientWidth};b=g}e=b;for(a=a||{top:j.pageYOffset||f.scrollTop||i.body.scrollTop,left:j.pageXOffset||f.scrollLeft||i.body.scrollLeft};n<k;n++)if(d.contains(f,l[n])){var h=l[n];b=d(h);var m=b.height(),q=b.width(),c=b.offset(),g=b.data("inview");if(!a||!e)break;0<h.offsetWidth&&0<h.offsetHeight&&"none"!=h.style.display&&c.top+m>
a.top&&c.top<a.top+e.height&&c.left+q>a.left&&c.left<a.left+e.width?(h=a.left>c.left?"right":a.left+e.width<c.left+q?"left":"both",m=a.top>c.top?"bottom":a.top+e.height<c.top+m?"top":"both",c=h+"-"+m,(!g||g!==c)&&b.data("inview",c).trigger("inview",[!0,h,m])):g&&b.data("inview",!1).trigger("inview",[!1])}}},250)})(jQuery);


/*
jQuery Ketchup Plugin - Tasty Form Validation
---------------------------------------------
Version 0.3.1 - 12. Jan 2011
Copyright (c) 2011 by Sebastian Senf:
http://mustardamus.com/
http://usejquery.com/
http://twitter.com/mustardamus

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html

Demo: http://demos.usejquery.com/ketchup-plugin/
Repo: http://github.com/mustardamus/ketchup-plugin
*/

(function(g){g.ketchup={defaults:{attribute:"data-validate",validateIndicator:"validate",eventIndicator:"on",validateEvents:"blur",validateElements:["input","textarea","select"],createErrorContainer:null,showErrorContainer:null,hideErrorContainer:null,addErrorMessages:null},dataNames:{validationString:"ketchup-validation-string",validations:"ketchup-validations",events:"ketchup-events",elements:"ketchup-validation-elements",container:"ketchup-container"},validations:{},helpers:{},validation:function(b,
c,d,h){var j;if(typeof c=="function")c=c;else{j=c;c=d}this.validations[b]={message:j,func:c,init:h||function(){}};return this},message:function(b,c){this.addMessage(b,c);return this},messages:function(b){for(name in b)this.addMessage(name,b[name]);return this},addMessage:function(b,c){if(this.validations[b])this.validations[b].message=c},helper:function(b,c){this.helpers[b]=c;return this},init:function(b,c,d){this.options=c;var h=this;c=this.initFunctions().initFields(b,d);c.each(function(){var j=
g(this);h.bindValidationEvent(b,j).callInitFunctions(b,j)});b.data(this.dataNames.elements,c);this.bindFormSubmit(b)},initFunctions:function(){var b=this.options,c=["createErrorContainer","showErrorContainer","hideErrorContainer","addErrorMessages"];for(f=0;f<c.length;f++){var d=c[f];b[d]||(b[d]=this[d])}return this},initFields:function(b,c){var d=this,h=this.dataNames,j=g(!c?this.fieldsFromForm(b):this.fieldsFromObject(b,c));j.each(function(){var l=g(this),m=d.extractValidations(l.data(h.validationString),
d.options.validateIndicator);l.data(h.validations,m)});return j},callInitFunctions:function(b,c){var d=c.data(this.dataNames.validations);for(i=0;i<d.length;i++)d[i].init.apply(this.helpers,[b,c])},fieldsFromForm:function(b){var c=this,d=this.options,h=this.dataNames,j=d.validateElements,l=[];j=typeof j=="string"?[j]:j;for(i=0;i<j.length;i++){var m=b.find(j[i]+"["+d.attribute+"*="+d.validateIndicator+"]");m.each(function(){var k=g(this),p=k.attr(d.attribute),q=c.extractEvents(p,d.eventIndicator);
k.data(h.validationString,p).data(h.events,q?q:d.validateEvents)});l.push(m.get())}return this.normalizeArray(l)},fieldsFromObject:function(b,c){var d=this.options,h=this.dataNames,j=[];for(s in c){var l,m;if(typeof c[s]=="string"){l=c[s];m=d.validateEvents}else{l=c[s][0];m=c[s][1]}var k=b.find(s);l=this.mergeValidationString(k,l);m=this.mergeEventsString(k,m);k.data(h.validationString,d.validateIndicator+"("+l+")").data(h.events,m);j.push(k.get())}return this.normalizeArray(j)},mergeEventsString:function(b,
c){var d=b.data(this.dataNames.events),h="";if(d){d=d.split(" ");for(i=0;i<d.length;i++)if(c.indexOf(d[i])==-1)h+=" "+d[i]}return g.trim(c+h)},mergeValidationString:function(b,c){var d=this.options,h=b.data(this.dataNames.validationString),j=function(k){var p=k.name;if(k.arguments.length)p=p+"("+k.arguments.join(",")+")";return p},l=function(k,p){for(i=0;i<k.length;i++)if(k[i].name==p.name)return true};if(h){var m=this.extractValidations(d.validateIndicator+"("+c+")",d.validateIndicator);d=this.extractValidations(h,
d.validateIndicator);c="";for(o=0;o<d.length;o++)c+=j(d[o])+",";for(n=0;n<m.length;n++)l(d,m[n])||(c+=j(m[n])+",")}return c},bindFormSubmit:function(b){var c=this;b.submit(function(){return c.allFieldsValid(b,true)})},allFieldsValid:function(b,c){var d=this,h=true;b.data(this.dataNames.elements).each(function(){var j=g(this);if(d.validateElement(j,b)!=true){c==true&&d.triggerValidationEvents(j);h=false}});b.trigger("formIs"+(h?"Valid":"Invalid"),[b]);return h},bindValidationEvent:function(b,c){var d=
this,h=this.options,j=this.dataNames,l=c.data(j.events).split(" ");for(i=0;i<l.length;i++){c.bind("ketchup."+l[i],function(){var m=d.validateElement(c,b),k=c.data(j.container);if(m!=true){if(!k){k=h.createErrorContainer(b,c);c.data(j.container,k)}h.addErrorMessages(b,c,k,m);h.showErrorContainer(b,c,k)}else k&&h.hideErrorContainer(b,c,k)});this.bindValidationEventBridge(c,l[i])}return this},bindValidationEventBridge:function(b,c){b.bind(c,function(){b.trigger("ketchup."+c)})},validateElement:function(b,
c){var d=[],h=b.data(this.dataNames.validations),j=[c,b,b.val()];for(i=0;i<h.length;i++)h[i].func.apply(this.helpers,j.concat(h[i].arguments))||d.push(h[i].message);c.trigger("fieldIs"+(d.length?"Invalid":"Valid"),[c,b]);return d.length?d:true},elementIsValid:function(b){var c=this.dataNames;if(b.data(c.validations)){c=b.parentsUntil("form").last().parent();return this.validateElement(b,c)==true?true:false}else if(b.data(c.elements))return this.allFieldsValid(b);return null},triggerValidationEvents:function(b){for(var c=
b.data(this.dataNames.events).split(" "),d=0;d<c.length;d++)b.trigger("ketchup."+c[d])},extractValidations:function(b,c){for(var d=b.substr(b.indexOf(c)+c.length+1),h="",j=[],l=0,m=[],k=0;k<d.length;k++)switch(d.charAt(k)){case "(":h+="(";l++;break;case ")":if(l){h+=")";l--}else j.push(g.trim(h));break;case ",":if(l)h+=",";else{j.push(g.trim(h));h=""}break;default:h+=d.charAt(k)}for(v=0;v<j.length;v++){l=j[v].indexOf("(");d=j[v];h=[];if(l!=-1){d=g.trim(j[v].substr(0,l));h=g.map(j[v].substr(d.length).split(","),
function(p){return g.trim(p.replace("(","").replace(")",""))})}if((l=this.validations[d])&&l.message){k=l.message;for(a=1;a<=h.length;a++)k=k.replace("{arg"+a+"}",h[a-1]);m.push({name:d,arguments:h,func:l.func,message:k,init:l.init})}}return m},extractEvents:function(b,c){var d=false,h=b.indexOf(c+"(");if(h!=-1)d=b.substr(h+c.length+1).split(")")[0];return d},normalizeArray:function(b){var c=[];for(i=0;i<b.length;i++)for(e=0;e<b[i].length;e++)b[i][e]&&c.push(b[i][e]);return c},createErrorContainer:function(b,
c){if(typeof b=="function"){this.defaults.createErrorContainer=b;return this}else{var d=c.offset();return g("<div/>",{html:"<ul></ul><span></span>","class":"ketchup-error",css:{top:d.top,left:d.left+c.outerWidth()-20}}).appendTo("body")}},showErrorContainer:function(b,c,d){if(typeof b=="function"){this.defaults.showErrorContainer=b;return this}else d.show().animate({top:c.offset().top-d.height(),opacity:1},"fast")},hideErrorContainer:function(b,c,d){if(typeof b=="function"){this.defaults.hideErrorContainer=
b;return this}else d.animate({top:c.offset().top,opacity:0},"fast",function(){d.hide()})},addErrorMessages:function(b,c,d,h){if(typeof b=="function"){this.defaults.addErrorMessages=b;return this}else{b=d.children("ul");b.html("");for(i=0;i<h.length;i++)g("<li/>",{text:h[i]}).appendTo(b)}}};g.fn.ketchup=function(b,c){var d=g(this);if(typeof b=="string")switch(b){case "validate":g.ketchup.triggerValidationEvents(d);break;case "isValid":return g.ketchup.elementIsValid(d)}else this.each(function(){g.ketchup.init(d,
g.extend({},g.ketchup.defaults,b),c)});return this}})(jQuery);
jQuery.ketchup.validation("required","This field is required.",function(g,b,c){g=b.attr("type").toLowerCase();return g=="checkbox"||g=="radio"?b.attr("checked")==true:c.length!=0}).validation("minlength","This field must have a minimal length of {arg1}.",function(g,b,c,d){return c.length>=+d}).validation("maxlength","This field must have a maximal length of {arg1}.",function(g,b,c,d){return c.length<=+d}).validation("rangelength","This field must have a length between {arg1} and {arg2}.",function(g,
b,c,d,h){return c.length>=d&&c.length<=h}).validation("min","Must be at least {arg1}.",function(g,b,c,d){return this.isNumber(c)&&+c>=+d}).validation("max","Can not be greater than {arg1}.",function(g,b,c,d){return this.isNumber(c)&&+c<=+d}).validation("range","Must be between {arg1} and {arg2}.",function(g,b,c,d,h){return this.isNumber(c)&&+c>=+d&&+c<=+h}).validation("number","Must be a number.",function(g,b,c){return this.isNumber(c)}).validation("digits","Must be digits.",function(g,b,c){return/^\d+$/.test(c)}).validation("email",
"Must be a valid E-Mail.",function(g,b,c){return this.isEmail(c)}).validation("url","Must be a valid URL.",function(g,b,c){return this.isUrl(c)}).validation("username","Must be a valid username.",function(g,b,c){return this.isUsername(c)}).validation("match","Must be {arg1}.",function(g,b,c,d){return b.val()==d}).validation("contain","Must contain {arg1}",function(g,b,c,d){return this.contains(c,d)}).validation("date","Must be a valid date.",function(g,b,c){return this.isDate(c)}).validation("minselect",
"Select at least {arg1} checkboxes.",function(g,b,c,d){return d<=this.inputsWithName(g,b).filter(":checked").length},function(g,b){this.bindBrothers(g,b)}).validation("maxselect","Select not more than {arg1} checkboxes.",function(g,b,c,d){return d>=this.inputsWithName(g,b).filter(":checked").length},function(g,b){this.bindBrothers(g,b)}).validation("rangeselect","Select between {arg1} and {arg2} checkboxes.",function(g,b,c,d,h){g=this.inputsWithName(g,b).filter(":checked").length;return d<=g&&h>=
g},function(g,b){this.bindBrothers(g,b)});
jQuery.ketchup.helper("isNumber",function(g){return/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(g)}).helper("contains",function(g,b){return g.indexOf(b)!=-1}).helper("isEmail",function(g){return/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(g)}).helper("isUrl",function(g){return/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(g)}).helper("isUsername",
function(g){return/^([a-zA-Z])[a-zA-Z_-]*[\w_-]*[\S]$|^([a-zA-Z])[0-9_-]*[\S]$|^[a-zA-Z]*[\S]$/.test(g)}).helper("isDate",function(g){return!/Invalid|NaN/.test(new Date(g))}).helper("inputsWithName",function(g,b){return $('input[name="'+b.attr("name")+'"]',g)}).helper("inputsWithNameNotSelf",function(g,b){return this.inputsWithName(g,b).filter(function(){return $(this).index()!=b.index()})}).helper("getKetchupEvents",function(g){g=g.data("events").ketchup;var b=[];for(i=0;i<g.length;i++)b.push(g[i].namespace);
return b.join(" ")}).helper("bindBrothers",function(g,b){this.inputsWithNameNotSelf(g,b).bind(this.getKetchupEvents(b),function(){b.ketchup("validate")})});
