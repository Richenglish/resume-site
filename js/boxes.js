

$(function(){

	$(".box").hide();

	$( "#butt" ).click(function() {
  		
	
		// True values
		var value1 = $('#val1').val();

		var title1 = "example 1";

		var value2 = $('#val2').val();
		var title2 = "example 2";

		var value3 = $('#val3').val();
		var title3 = "example 3";


		//calculate Box sizes
		
		var winsize = $('#goggle-main').height();

		var wid1 = Math.sqrt(value1);
		var wid2 = Math.sqrt(value2);
		var wid3 = Math.sqrt(value3);

		var biggest = Math.max(wid1, wid2, wid3);
		var nudge = 1.0 * (winsize/biggest);
		

		var newwid1 = wid1 * nudge;
		var newwid2 = wid2 * nudge;
		var newwid3 = wid3 * nudge;
	    $('#area-1').css({width: newwid1, height: newwid1 });
	    $('#area-2').css({width: newwid2, height: newwid2 });
	    $('#area-3').css({width: newwid3, height: newwid3 });

	    

	    // z index
	    $('#area-1').css("z-index","6");
	    $('#area-2').css("z-index","4");
	    $('#area-3').css("z-index","2");


	    //labels
	    $( '#area-1 h2' ).html( title1 );
	    $( '#area-2 h2' ).html( title2 );
	    $( '#area-3 h2' ).html( title3 );

	    $( '#area-1 h4' ).html( value1 );
	    $( '#area-2 h4' ).html( value2 );
	    $( '#area-3 h4' ).html( value3 );

	    //show
	    $(".box").show();

    });

});