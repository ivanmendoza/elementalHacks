var log = function(output){
	var msg = arguments.length>1 ? arguments[1] : null;
	if(document.getElementById("htmlog") && msg){
		document.getElementById("htmlog").innerHTML += msg + "<hr />";
	}
	console.info(output);
}
var assert = function(value, msg) {
	if ( !value )
		log(msg || (value + " does not equal true"));
};
var assertEqual = function(val1, val2, msg) {
	if (val1 !== val2)
		log(msg || (val1 + " does not equal " + val2));
};

var proxy = function(f, context){
	return (function(){
		return f.apply(context, arguments);
	});
};


/*!
  * domready (c) Dustin Diaz 2012 - License MIT
  */
!function(a,b){typeof module!="undefined"?module.exports=b():typeof define=="function"&&typeof define.amd=="object"?define(b):this[a]=b()}("domready",function(a){function m(a){l=1;while(a=b.shift())a()}var b=[],c,d=!1,e=document,f=e.documentElement,g=f.doScroll,h="DOMContentLoaded",i="addEventListener",j="onreadystatechange",k="readyState",l=/^loade|c/.test(e[k]);return e[i]&&e[i](h,c=function(){e.removeEventListener(h,c,d),m()},d),g&&e.attachEvent(j,c=function(){/^c/.test(e[k])&&(e.detachEvent(j,c),m())}),a=g?function(c){self!=top?l?c():b.push(c):function(){try{f.doScroll("left")}catch(b){return setTimeout(function(){a(c)},50)}c()}()}:function(a){l?a():b.push(a)}})