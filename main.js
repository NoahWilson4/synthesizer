$(document).on('ready', function() {

	var contextClass = (window.AudioContext || 
	  window.webkitAudioContext || 
	  window.mozAudioContext || 
	  window.oAudioContext || 
	  window.msAudioContext);
	console.log('test here');
	if (contextClass) {
	  console.log('available');
	  var context = new contextClass();
	} else {
	  console.log('available not!');
	}

	var reverb = context.createConvolver();
	reverb.connect(context.destination);
		
	function createOscillator(note){
		var attack = 200;
		var decay = 1800;
		gain = context.createGain();
		osc = context.createOscillator();

		gain.connect(context.destination);
		gain.gain.setValueAtTime(0, context.currentTime);
		gain.gain.linearRampToValueAtTime(1, context.currentTime + attack / 1000);
		gain.gain.linearRampToValueAtTime(0, context.currentTime + decay / 1000);

		osc.frequency.value = note;
		osc.type = 'square';
		osc.connect(gain);
		osc.start(0);
	};

	function stopNote(){
		osc.stop();
		osc.disconnect(gain);
		gain.disconnect(context.destination);
	}
	var gain;
	var osc;

		    palo = 324;
		    dhalo = 341;
		    nilo = 384;
		    sa = 432;
		    re = 486;
		    ga = 512;
		    ma = 576;
		    pa = 658;
		    dha = 683;
		    ni = 768;
		    sahi = 864;
		    rehi = 972;
		    gahi = 1024;
			
		


	$('.pa-lo').hover(function(){createOscillator(palo)}, function(){stopNote()});
	$('.dha-lo').hover(function(){createOscillator(dhalo)}, function(){stopNote()});
	$('.ni-lo').hover(function(){createOscillator(nilo)}, function(){stopNote()});
	$('.sa').hover(function(){createOscillator(sa)}, function(){stopNote()});
	$('.re').hover(function(){createOscillator(re)}, function(){stopNote()});
	$('.ga').hover(function(){createOscillator(ga)}, function(){stopNote()});
	$('.ma').hover(function(){createOscillator(ma)}, function(){stopNote()});
	$('.pa').hover(function(){createOscillator(pa)}, function(){stopNote()});
	$('.dha').hover(function(){createOscillator(dha)}, function(){stopNote()});
	$('.ni').hover(function(){createOscillator(ni)}, function(){stopNote()});
	$('.sa-hi').hover(function(){createOscillator(sahi)}, function(){stopNote()});
	$('.re-hi').hover(function(){createOscillator(rehi)}, function(){stopNote()});
	$('.ga-hi').hover(function(){createOscillator(gahi)}, function(){stopNote()});

		
	  

			



});