var m;
(function(b){function c(){this.i=null;this.g=b.opener;this.L()&&(b.addEventListener("message",this.I.bind(this),!1),b.addEventListener("beforeunload",function(){this.i&&this.i.close()}.bind(this),!1))}var d=location.protocol+"//"+location.host;c.a="presentme";c.prototype.L=function(){for(var d=location.search.substring(1).split("&").map(function(b){return b.split("=")}),e=null,g=0,k;k=d[g];++g)if(k[0].toLowerCase()==c.a){e="true"==k[1];break}if(null!==e)if(localStorage.setItem("ENABLE_PRESENTOR_MODE",e),
b.history.replaceState)b.history.replaceState({},"",location.pathname);else return location.replace(location.pathname),!1;(d=localStorage.getItem("ENABLE_PRESENTOR_MODE"))&&JSON.parse(d)&&!this.g&&(this.i=b.open(location.href,"mywindow","menubar=no,location=yes,resizable=yes,scrollbars=no,status=no"),this.i.addEventListener("load",function(){var b=this.i.document.createEvent("Event");b.initEvent("keydown",!0,!0);b.keyCode=80;this.i.document.dispatchEvent(b)}.bind(this),!1));return!0};c.prototype.I=
function(b){var c=b.data;b.origin!=d&&0!=d.indexOf("file://")?alert("Someone tried to postMessage from an unknown origin"):"keyCode"in c&&(b=document.createEvent("Event"),b.initEvent("keydown",!0,!0),b.keyCode=c.keyCode,document.dispatchEvent(b))};c.prototype.K=function(c){this.g&&b.opener.postMessage(c,"*")};b.SlideController=c})(window);document.a=document.webkitCancelFullScreen||document.mozCancelFullScreen;function q(b){this.u=this.c=0;this.a=b||document.querySelector("slides");this.b=[];this.l=this.f=null;this.c=(b=parseInt(document.location.hash.substr(1),10))?b-1:0;this.H.bind(this)()}m=q.prototype;m.F=["far-past","past","current","next","far-next"];function r(b,c){c&&(b.c=c-1,t(b))}
m.H=function(){document.body.classList.add("loaded");this.b=this.a.querySelectorAll("slide:not([hidden]):not(.hidden):not(.backdrop)");u(this);document.addEventListener("keydown",this.G.bind(this),!1);window.addEventListener("popstate",this.J.bind(this),!1);t(this);var b;b="ontouchstart"in window;var c=window.matchMedia("only screen and (max-device-width: 736px)");b&&c.matches&&(v(this),b=window.matchMedia("(orientation: portrait)"),this.A(b),b.addListener(this.A.bind(this)));null===this.l&&(this.s(),
window.addEventListener("resize",this.s.bind(this),!1));w(this);var d=this;for(b=0;c=this.b[b];++b)c.dataset.slideNum=b+1,c.dataset.totalSlides=this.b.length,c.addEventListener("click",function(b){document.body.classList.contains("overview")&&(r(d,this.dataset.P),b.preventDefault(),window.setTimeout(function(){x(d)},500))},!1);this.f=new SlideController(this);this.f.g&&document.body.classList.add("popup")};
m.A=function(b){this.a.classList.remove("layout-widescreen");this.a.classList.remove("layout-widescreen2");b.matches?y(this,"4:3"):window.matchMedia("(min-aspect-ratio: 173/100)").matches?y(this,"16:9"):window.matchMedia("(min-aspect-ratio: 16/10)").matches&&y(this,"16:10")};
m.s=function(){var b=window.getComputedStyle(this.b[0],null),c=parseInt(b.getPropertyValue("width"),10),b=parseInt(b.getPropertyValue("height"),10),c=window.innerWidth/c,b=window.innerHeight/b;document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement||(c*=.98,b*=.98);c="scale("+Math.min(c,b)+","+Math.min(c,b)+")";this.a.style.MozTransform=c;this.a.style.WebkitTransform=c;this.a.style.N=c;this.a.style.msTransform=c;this.a.style.transform=
c};m.J=function(b){null!==b.state&&(this.c=b.state,t(this,!0))};
m.G=function(b){if(!(/^(input|textarea)$/i.test(b.target.nodeName)||b.target.isContentEditable||b.shiftKey||b.metaKey||b.ctrlKey||b.altKey))switch(this.f&&this.f.g&&this.f.K({keyCode:b.keyCode}),b.keyCode){case 13:document.body.classList.contains("overview")&&x(this);break;case 39:case 32:case 34:this.m();b.preventDefault();break;case 37:case 8:case 33:this.o();b.preventDefault();break;case 40:this.m();b.preventDefault();break;case 38:this.o();b.preventDefault();break;case 66:document.body.classList.toggle("blank-screen");
break;case 67:if(b.target===document.body)if(document.getElementById("canvasID"))z(this);else{b=document.createElement("slide");var c=document.createElement("canvas"),d;b.id="canvasContainer";this.a.appendChild(b);c.width=b.clientWidth;c.height=b.clientHeight;d=c.cloneNode(0);c.id="canvasID";b.appendChild(c);d.id="topCanvasID";d.className="blue";b.appendChild(d);b.addEventListener("mousedown",this.j,!1);b.addEventListener("mousemove",this.j,!1);document.addEventListener("mouseup",this.j,!1);document.addEventListener("keydown",
this.C,!1);document.addEventListener("keyup",this.D,!1)}break;case 72:document.body.classList.toggle("highlight-code");break;case 79:document.body.classList.remove("highlight-code");document.body.classList.remove("blank-screen");z(this);x(this);w(this);break;case 80:this.f&&this.f.g?document.body.classList.toggle("with-notes"):this.f&&!this.f.i&&document.body.classList.toggle("with-notes");break;case 27:document.body.classList.remove("with-notes");document.body.classList.remove("highlight-code");
document.body.classList.remove("blank-screen");z(this);A();document.body.classList.contains("overview")&&x(this);break;case 70:b.target===document.body&&(z(this),document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?A():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.msRequestFullscreen?document.documentElement.msRequestFullscreen():document.documentElement.mozRequestFullScreen?
document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen&&document.documentElement.webkitRequestFullscreen());break;case 87:b.target===document.body&&(z(this),this.a.classList.contains("layout-widescreen")?y(this,"16:9"):this.a.classList.contains("layout-widescreen2")?y(this,"4:3"):y(this,"16:10"))}};
function y(b,c){b.a.classList.remove("layout-widescreen");b.a.classList.remove("layout-widescreen2");switch(c){case "16:9":b.a.classList.add("layout-widescreen2");break;case "16:10":b.a.classList.add("layout-widescreen")}w(b);null===b.l&&b.s()}
function C(b){var c=document.body.classList.contains("overview"),d,f,e;for(d=0;f=b.b[d];d++)e="",f.classList.remove("notransition"),c&&(f.classList.add("notransition"),e="translateZ(-2500px) translate("+105*(d-b.c)+"%, 0%)"),f.style.WebkitTransform=e,f.style.transform=e;c?(b.a.style.perspective="2500px",b.a.style.WebkitTransform="",b.a.style.msTransform="",b.a.style.transform=""):(b.a.style.perspective="",b.s())}
function A(){document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}function x(b){document.body.classList.toggle("overview");C(b)}
function z(b){var c=document.getElementById("canvasContainer");c&&(c.removeEventListener("mousedown",b.j,!1),c.removeEventListener("mousemove",b.j,!1),document.removeEventListener("mouseup",b.j,!1),document.removeEventListener("onkeydown",b.C,!1),document.removeEventListener("onkeyup",b.D,!1),c.parentNode.removeChild(c))}
m.j=function(){var b=!1,c=0,d={x:0,y:0},f={x:0,y:0};return function(e){function g(b){var c=document.getElementById("canvasID").getContext("2d"),d=document.getElementById("topCanvasID").classList;c.strokeStyle=d.contains("green")?"#89BA17":d.contains("orange")?"#F08A00":d.contains("red")?"#E32119":"#00A9D4";c.moveTo(b.offsetX,b.offsetY);b.shiftKey&&b.altKey?(c.lineWidth=6,b="ellipse"):b.altKey?(c.lineWidth=6,b="rectangle"):b.shiftKey?(c.lineWidth=4,b="arrow"):(c.lineWidth=1,b="free");return b}function k(b,
c,d){var e=Math.atan2(d.y-c.y,d.x-c.x);b.lineCap="round";b.beginPath();b.moveTo(c.x,c.y);b.lineTo(d.x,d.y);b.moveTo(d.x-24*Math.cos(e-Math.PI/12),d.y-24*Math.sin(e-Math.PI/12));b.lineTo(d.x,d.y);b.lineTo(d.x-24*Math.cos(e+Math.PI/12),d.y-24*Math.sin(e+Math.PI/12));b.stroke()}function h(b,c,d){var e=d.x-c.x;d=d.y-c.y;var f=e/Math.abs(e)*10,g=d/Math.abs(d)*10;b.beginPath();b.moveTo(c.x+f,c.y);b.lineTo(c.x+e-f,c.y);b.arcTo(c.x+e,c.y,c.x+e,c.y+g,10);b.lineCap="round";b.lineTo(c.x+e,c.y+1.5*g);0<f&&0<
g&&b.moveTo(c.x+e,c.y+25);b.lineTo(c.x+e,c.y+d-g);b.arcTo(c.x+e,c.y+d,c.x+e-f,c.y+d,10);b.lineTo(c.x+f,c.y+d);b.arcTo(c.x,c.y+d,c.x,c.y-g,10);b.lineTo(c.x,c.y+g);b.arcTo(c.x,c.y,c.x+f,c.y,10);b.stroke()}function n(b,c,d){var e=.5*(d.x-c.x);d=.5*(d.y-c.y);var f=c.x+e;c=c.y+d;var g=2*Math.PI-.01,l;b.beginPath();b.moveTo(f+e*Math.cos(0),c+d*Math.sin(0));for(l=.01;l<g;l+=.01)b.lineTo(f+e*Math.cos(l),c+d*Math.sin(l));b.closePath();b.stroke()}function B(b,c,d){function e(){return Math.floor(3*Math.random())+
0}b.beginPath();b.moveTo(c.x-e(),c.y-e());b.lineTo(d.x-e(),d.y-e());b.stroke();b.moveTo(c.x,c.y);b.lineTo(d.x,d.y);b.stroke();b.moveTo(c.x+e(),c.y+e());b.lineTo(d.x+e(),d.y+e());b.stroke()}var l=document.getElementById("canvasID"),p=document.getElementById("topCanvasID");switch(e.type){case "mousedown":2!==e.button&&3!==e.which&&(b=!0,c=g(e),d={x:e.offsetX,y:e.offsetY},f={x:e.offsetX,y:e.offsetY});break;case "mouseup":b=!1;p.getContext("2d").drawImage(l,0,0);l.getContext("2d").clearRect(0,0,l.width,
l.height);break;case "mousemove":if(b)switch(p=l.getContext("2d"),e={x:e.offsetX,y:e.offsetY},c){case "arrow":p.clearRect(0,0,l.width,l.height);k(p,d,e);break;case "rectangle":p.clearRect(0,0,l.width,l.height);h(p,d,e);break;case "ellipse":p.clearRect(0,0,l.width,l.height);n(p,d,e);break;default:B(p,f,e),f=e}}}}();
m.C=function(b){var c=document.getElementById("topCanvasID");switch(b.keyCode){case 16:c.classList.remove("arrow");c.classList.add("arrow");break;case 18:c.classList.remove("rect");c.classList.add("rect");break;case 90:c.classList.contains("blue")?(c.classList.remove("blue"),c.classList.add("green")):c.classList.contains("green")?(c.classList.remove("green"),c.classList.add("red")):c.classList.contains("red")?(c.classList.remove("red"),c.classList.add("orange")):(c.classList.remove("orange"),c.classList.add("blue"))}};
m.D=function(b){var c=document.getElementById("topCanvasID");switch(b.keyCode){case 16:c.classList.remove("arrow");break;case 18:c.classList.remove("rect")}};function w(b){var c=[],d,f;if(document.body.classList.contains("overview"))c=b.a.querySelectorAll("hgroup svg");else for(f=Math.max(0,b.c-2);f<Math.min(b.b.length,b.c+3);f++)(d=b.b[f].querySelector("hgroup svg"))&&c.push(d);c&&setTimeout(b.M,500,c)}
m.M=function(b){function c(b){for(var c=[];b[1].firstChild;)c.push(b[1].firstChild.childNodes[0].data),b[1].removeChild(b[1].firstChild),b[0].removeChild(b[0].firstChild);return c.join(" ")}function d(b,c,d){var e=[],f=0,g,h,k;b[1].childNodes[0].data=c[0];g=b[1].getBBox().width;for(k=1;k<c.length;k++)b[1].childNodes[0].data+=" "+c[k],h=b[1].getBBox().width,h>d?(e.push({first:f,v:k,h:g}),f=k,b[1].childNodes[0].data=c[k],g=b[1].getBBox().width):g=h;e.push({first:f,v:c.length,h:g});for(f=e.length-1;e[f].h<
.8*e[f-1].h;)if(b[1].childNodes[0].data=c.slice(e[f].first-1).join(" "),h=b[1].getBBox().width,h<d)--e[f-1].v,e[f-1].h-=h-e[f].h,--e[f].first,e[f].h=h;else break;return e}function f(b,c,d){var e="y",f,g,h;b[0].removeChild(b[0].childNodes[0]);b[1].removeChild(b[1].childNodes[0]);for(f=0;f<c.length;f++)g=document.createTextNode(d.slice(c[f].first,c[f].v).join(" ")),h=document.createElementNS("http://www.w3.org/2000/svg","tspan"),h.appendChild(g),h.setAttribute("x","0"),h.setAttribute(e,"0.9em"),e="dy",
b[1].appendChild(h.cloneNode(!0)),b[0].appendChild(h)}var e,g,k,h,n;for(e=0;e<b.length;e++)if(b[e].querySelectorAll(".wrapme")){g=b[e].parentElement.parentElement.parentElement;k=parseInt(window.getComputedStyle(g,null).getPropertyValue("padding-left"),10);h=0;g.classList.contains("segue")||(h=parseInt(window.getComputedStyle(b[e].parentElement.parentElement,null).getPropertyValue("margin-right"),10));k=g.clientWidth-2*k-h;g=b[e].getElementsByTagName("text");0<g[1].getElementsByTagName("tspan").length&&
(h=document.createTextNode(c(g)),g[1].appendChild(h),g[0].appendChild(h.cloneNode(!0)));try{n=g[1].getBBox().width}catch(B){continue}h=.9*parseInt(window.getComputedStyle(g[1],null).getPropertyValue("font-size"),10);n>k&&(n=g[1].childNodes[0].data.split(" "),k=d(g,n,k),f(g,k,n),n=g[1].getBBox().width,h*=k.length);b[e].setAttribute("width",Math.round(n+.5)+"px");b[e].setAttribute("height",h+"px");b[e].setAttribute("style","display:none");b[e].offsetHeight;b[e].removeAttribute("style")}};
function u(b){var c,d,f,e;D();hljs.initHighlighting();c=document.querySelectorAll("pre code");for(d=0;d<c.length;d++)for(f=0;f<c[d].childNodes.length;f++)3===c[d].childNodes[f].nodeType&&(e=document.createElement("span"),c[d].insertBefore(e,c[d].childNodes[f]),e.appendChild(c[d].childNodes[f+1]));c=location.search.substring(1).split("&").map(function(b){return b.split("=")});for(d=0;f=c[d];++d)if("printpdf"==f[0].toLowerCase()){b.l="true"===f[1];break}null!==b.l?(x(b),v(b),w(b)):E(b);d=document.createElement("div");
d.classList.add("slide-area");d.id="prev-slide-area";d.addEventListener("click",b.o.bind(b),!1);b.a.appendChild(d);d=document.createElement("div");d.classList.add("slide-area");d.id="next-slide-area";d.addEventListener("click",b.m.bind(b),!1);b.a.appendChild(d);window.addEventListener("touchstart",b.B.bind(b),!1);window.addEventListener("touchend",b.B.bind(b),!1)}
m.B=function(){var b=0,c=0,d=0,f=0;return function(e){var g;if("a"!==e.target.tagName.toLowerCase())switch(e.preventDefault(),g=e.changedTouches[0],e.type){case "touchstart":b=g.pageX;c=g.pageY;break;case "touchend":if(d=g.pageX,f=g.pageY,20<Math.sqrt(Math.pow(d-b,2)+Math.pow(f-c,2))){e=180*Math.atan2(f-c,d-b)/Math.PI;var k,h;e={O:45<=e&&135>e,left:135<=e||-135>=e,R:-45>e&&-135<e,right:-45<=e&&45>=e};for(h in e)if(e.hasOwnProperty(h)&&e[h]){k=h;break}switch(k){case "left":case "up":this.m();break;
case "right":case "down":this.o()}}}}}();function D(){var b=document.createElement("link");b.rel="stylesheet";b.href=("https:"==document.location.protocol?"https":"http")+"://fonts.googleapis.com/css?family=Source Sans Pro:300,semibold,300italic,italicsemibold|Source Code Pro&v2";document.querySelector("head").appendChild(b)}
m.o=function(b){if(0<this.c){var c=document.body.classList;c.remove("highlight-code");c.remove("blank-screen");z(this);this.f&&!this.f.g?c.remove("with-notes"):this.f||c.remove("with-notes");this.u=this.c--;w(this);t(this,b)}};
m.m=function(b){var c;if(!(c=document.body.classList.contains("overview"))){c=this.b[this.c];var d=c.querySelector(".to-build"),f=c.querySelector(".build-current");f&&(f.classList.remove("build-current"),f.classList.contains("fade")&&f.classList.add("build-fade"));if(d)d.classList.remove("to-build"),d.classList.add("build-current"),c=!0;else{c=c.querySelectorAll(".build-fade");for(d=0;d<c.length;d++)c[d].classList.remove("build-fade");c=!1}c=!c}c&&this.c<this.b.length-1&&(c=document.body.classList,
c.remove("highlight-code"),c.remove("blank-screen"),z(this),this.f&&!this.f.g?c.remove("with-notes"):this.f||c.remove("with-notes"),this.u=this.c++,w(this),t(this,b))};function F(b,c,d){b=0>d||d>=b.b.length?null:b.b[d];var f;b&&((f=b.getAttribute(c))&&(new Function(f)).call(b),f=document.createEvent("Event"),f.initEvent(c,!0,!0),f.b=d+1,f.a=b,b.dispatchEvent(f))}
function t(b,c){var d=c||!1,f=b.c,e;for(e=0;e<b.b.length;++e)switch(e){case f-2:G(b,e,"far-past");break;case f-1:G(b,e,"past");break;case f:G(b,e,"current");break;case f+1:G(b,e,"next");break;case f+2:G(b,e,"far-next");break;default:G(b,e)}F(b,"slideleave",b.u);F(b,"slideenter",f);b.w(f+1);window.setTimeout(b.w.bind(b,f+2),1E3);d||(d=b.c+1,f="#"+d,window.history.pushState&&"file:"!=window.location.protocol?window.history.pushState(b.c,"Slide "+d,f):window.location.replace(f),window._gaq&&window._gaq.push(["_trackPageview",
document.location.href]));document.body.classList.contains("overview")&&C(b)}m.w=function(b){b=this.b[b-1];var c;if(b)for(b=b.querySelectorAll("iframe"),c=0;c<b.length;c++){var d=b[c],f=d.dataset.src;f&&d.src!=f&&(d.src=f)}};function G(b,c,d){c=0>c||c>=b.b.length?null:b.b[c];var f,e;if(c)for(d&&c.classList.add(d),f=0;e=b.F[f];++f)d!=e&&c.classList.remove(e)}
function E(b){var c,d,f,e;for(c=b.c;d=b.b[c];++c)for(f=d.querySelectorAll(".build > *"),d=0;e=f[d];++d)e.classList&&(e.classList.add("to-build"),e.parentNode.classList.contains("fade")&&e.classList.add("fade"))}function v(b){var c,d,f,e,g;for(c=b.c;f=b.b[c];++c){f.classList.add("notransition");e=f.querySelectorAll(".svganimate");for(d=0;g=e[d];++d)g.classList&&g.classList.remove("svganimate");e=f.querySelectorAll(".auto-fadein");for(d=0;g=e[d];++d)g.classList&&g.classList.remove("auto-fadein")}}
function H(){window.a=new q}"complete"===document.readyState?H():window.addEventListener("load",H);
