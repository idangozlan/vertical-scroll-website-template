/*  
	@author - Idan Gozlan
	@url - https://github.com/idangozlan
	
	Vertical scroll website empty template
	
	HTML5 template based on http://www.initializr.com/
 */
$(function(){
	init();
});

function init(){
	//Build the navigation bar
	$('section').each(function(i,item){
		var selected = (i==0)?'selected':'';
		$('#sections-nav').append('<a href="#'+item.id+'" '+selected+'></a>');
	});
	//Vertical center the navigation bar
	$('#sections-nav').css({'margin-top':-1*($('#sections-nav').height()/2)});
	//Scroll event binding
	$(window).scroll(function(a){
		var currentSection = Math.round($(window).scrollTop()/$('section').height());
		$('#sections-nav a').removeAttr('selected');
		$('#sections-nav a:nth-child('+(currentSection+1)+')').attr('selected','selected');
	});
}