 baguetteBox.run('.tz-gallery');

var x = false;


 $('#music1').on('click', function(){
 	 	if(x === false){
 		$('#music1').css({
 			'background': 'red',
 			'color': 'black'
 		});
 		x = true;
 	}
 	else{
 		$('#music1').css({
 			'background': 'green',
 			'color': 'white'
 		});
 		x = false;
 	}
 });