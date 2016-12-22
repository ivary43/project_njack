 $(document).ready(function(){
	$('.main').hover(function(){
		if($('.main').css("right")=="-129px"){
		$('.main').animate({right:'+=129px'},1000) ;
		};
 
	}, function(){ 
 	$('.main').animate({right:'-129px'},1000) ;
 });
 $('.main2').hover(function(){
if($('.main2').css("left")=="-129px"){
	$('.main2').animate({left:'+=129px'},1000) ;
};
 
}, function(){
 	$('.main2').animate({left:'-129px'},1000) ;
 });
 });