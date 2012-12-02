jQuery.fn.exists = function(){return jQuery(this).length;}
var isIE=false;
if(navigator.appName=="Microsoft Internet Explorer"){var isIE=true;}


jQuery(function () {
	
});


function scrollTo(target){
  var targetOffset = target.offset().top;
  $('html,body').animate({scrollTop: targetOffset}, 1000);
  return false;
}

function track(category, action, value){
	if(typeof _gaq != 'undefined'){
  		_gaq.push(['_trackEvent', category, action, value]);
	}else{
		return false;
	}
}