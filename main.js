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
		var attack = 100;
		var decay = 100;
		gain = context.createGain();
		osc = context.createOscillator();

		gain.connect(context.destination);
		gain.gain.setValueAtTime(0, context.currentTime);
		gain.gain.linearRampToValueAtTime(1, context.currentTime + attack / 1000);
		gain.gain.linearRampToValueAtTime(0, context.currentTime + decay / 1000);

		osc.frequency.value = note * 2;
		osc.type = 'sine';
		osc.connect(gain);
		osc.start(0);

		var attack2 = 50;
		var decay2 = 100;
		gain2 = context.createGain();
		osc2 = context.createOscillator();

		gain2.connect(context.destination);
		gain2.gain.setValueAtTime(0, context.currentTime);
		gain2.gain.linearRampToValueAtTime(1, context.currentTime + attack2 / 1000);
		gain2.gain.linearRampToValueAtTime(0, context.currentTime + decay2 / 1000);

		osc2.frequency.value = note;
		osc2.type = 'sine';
		osc2.connect(gain2);
		osc2.start(0);
	};

	function createBass(note){
		var attack = 70;
		var decay = 1000;
		gain = context.createGain();
		osc = context.createOscillator();

		gain.connect(context.destination);
		gain.gain.setValueAtTime(0, context.currentTime);
		gain.gain.linearRampToValueAtTime(1, context.currentTime + attack / 1000);
		gain.gain.linearRampToValueAtTime(0, context.currentTime + decay / 1000);

		osc.frequency.value = note;
		osc.type = 'sine';
		osc.connect(gain);
		osc.start(0);

		var attack = 10;
		var decay = 100;
		gain2 = context.createGain();
		osc2 = context.createOscillator();

		gain2.connect(context.destination);
		gain2.gain.setValueAtTime(0, context.currentTime);
		gain2.gain.linearRampToValueAtTime(.5, context.currentTime + attack / 1000);
		gain2.gain.linearRampToValueAtTime(0, context.currentTime + decay / 1000);

		osc2.frequency.value = note / 4;
		osc2.type = 'sine';
		osc2.connect(gain2);
		osc2.start(0);
	};

	function stopNote(){
		osc.stop();
		osc.disconnect(gain);
		gain.disconnect(context.destination);
	}
	var gain;
	var osc;

		   var palo = 324;
		   var dhalo = 341;
		   var nilo = 384;
		   var sa = 432;
		   var re = 486;
		   var ga = 512;
		   var ma = 576;
		   var pa = 658;
		   var dha = 683;
		   var ni = 768;
		   var sahi = 864;
		   var rehi = 972;
		   var gahi = 1024;

		   var bassPalo = 324;
		   var bassDhalo = 341;
		   var bassNilo = 384;
		   var bassSa = 432;
		   var bassRe = 486;
		   var bassGa = 512;
		   var bassMa = 576;
		   var bassPa = 658;
		   var bassDha = 683;
		   var bassNi = 768;
		   var bassSahi = 864;
		   var bassRehi = 972;
		   var bassGahi = 1024;
			
			var rest = 0;
		


	// $('.pa-lo').mouseover(function(){createBass(palo)});
	// $('.dha-lo').mouseover(function(){createBass(dhalo)});
	// $('.ni-lo').mouseover(function(){createBass(nilo)});
	// $('.sa').mouseover(function(){createBass(sa)});
	// $('.re').mouseover(function(){createBass(re)});
	// $('.ga').mouseover(function(){createBass(ga)});
	// $('.ma').mouseover(function(){createBass(ma)});
	// $('.pa').mouseover(function(){createBass(pa)});
	// $('.dha').mouseover(function(){createBass(dha)});
	// $('.ni').mouseover(function(){createBass(ni)});
	// $('.sa-hi').mouseover(function(){createBass(sahi)});
	// $('.re-hi').mouseover(function(){createBass(rehi)});
	// $('.ga-hi').mouseover(function(){createBass(gahi)});

	// $('.sa').on('click', function(){
	// 	createOscillator(sa);
	// })	
	

	// var song = [sa, rest, pa, dha, pa, ga, sa, nilo, palo, rest, nilo, re, ma, pa, rest];
	// var bass = [sa, rest, sa, rest, rest, sa, rest, sa, palo, palo, palo, rest, nilo, rest];
	// var nI = 0;
	// var player = setInterval(function(){
	// 	console.log('tick');
	// 	console.log('nI: ', nI)
	// 	// createOscillator(song[nI]);
	// 	// createBass(bass[nI] / 4);
	// 	nI++;
	// 	if (nI === song.length - 1) {
	// 		nI = 0;
	// 	}}, 250);


//////////  song being played /////////////

var song = [rest, rest, rest, rest, rest, rest, rest, rest];
var noteBars = ['.note1', '.note2', '.note3', '.note4', '.note5', '.note6', '.note7', '.note8'];
var nI = 0;
var player = setInterval(function(){
		console.log('tick');
		console.log('nI: ', nI)
		createOscillator(song[nI]);
		$(noteBars[nI]).toggleClass('flash');
		// $('.on').addClass('on2');
		
		nI++;
		if (nI === song.length) {
			nI = 0;
		}}, 100);

////////////// pads /////////////////////

	///// click functions/////////////
	
	var previousNote1;
	var previousNote2;
	var previousNote3;
	var previousNote4;
	var previousNote5;
	var previousNote6;
	var previousNote7;
	var previousNote8;


	
			
	// $(document).on('click', '.block', function(){
	// 	$(this).toggleClass('on');
	// 	console.log($(this).closest('.note').attr('name'));
	// });

	var noteSelect = function(num, clickedOn, prev, cn) {
		var thisNote = $(clickedOn).closest('.note').attr('name')
		$(clickedOn).toggleClass('on');
		if ((thisNote !== cn) && (cn !== rest)) {
			$(prev).toggleClass('on');
		}
		if (thisNote !== cn) {			
			if ( thisNote === 'palo') {
				song[num] = palo;
			} else if ( thisNote === 'dhalo') {
				song[num] = dhalo;
			} else if ( thisNote === 'nilo') {
				song[num] = nilo;
			} else if ( thisNote === 'sa') {
				song[num] = sa;
			} else if ( thisNote === 're') {
				song[num] = re;
			} else if ( thisNote === 'ga') {
				song[num] = ga;
			} else if ( thisNote === 'ma') {
				song[num] = ma;
			} else if ( thisNote === 'pa') {
				song[num] = pa;
			} else if ( thisNote === 'dha') {
				song[num] = dha;
			} else if ( thisNote === 'ni') {
				song[num] = ni;
			} else if ( thisNote === 'sahi') {
				song[num] = sahi;
			} else if ( thisNote === 'rehi') {
				song[num] = rehi;
			} else if ( thisNote === 'gahi') {
				song[num] = gahi;
			} 
		} else {
			song[num] = rest;
			thisNote = rest;
		}		
		cn = thisNote;
		return cn;		
	}

	var currentNote1 = rest;
	$(document).on('click', '.note1', function(){
		var clickedOn = $(this);
		currentNote1 = noteSelect(0, clickedOn, previousNote1, currentNote1);
		console.log('song 0', song[0]);
		previousNote1 = clickedOn;
		
	});

	var currentNote2 = rest;
	$(document).on('click', '.note2', function(){
		var clickedOn = $(this);
		currentNote2 = noteSelect(1, clickedOn, previousNote2, currentNote2);
		previousNote2 = clickedOn;
	});

	var currentNote3 = rest;
	$(document).on('click', '.note3', function(){
		var clickedOn = $(this);
		currentNote3 = noteSelect(2, clickedOn, previousNote3, currentNote3);
		previousNote3 = clickedOn;
	});

	var currentNote4 = rest;
	$(document).on('click', '.note4', function(){
		var clickedOn = $(this);
		currentNote4 = noteSelect(3, clickedOn, previousNote4, currentNote4);
		previousNote4 = clickedOn;
	});

	var currentNote5 = rest;
	$(document).on('click', '.note5', function(){
		var clickedOn = $(this);
		currentNote5 = noteSelect(4, clickedOn, previousNote5, currentNote5);
		previousNote5 = clickedOn;
	});

	var currentNote6 = rest;
	$(document).on('click', '.note6', function(){
		var clickedOn = $(this);
		currentNote6 = noteSelect(5, clickedOn, previousNote6, currentNote6);
		previousNote6 = clickedOn;
	});

	var currentNote7 = rest;
	$(document).on('click', '.note7', function(){
		var clickedOn = $(this);
		currentNote7 = noteSelect(6, clickedOn, previousNote7, currentNote7);
		previousNote7 = clickedOn;
	});

	var currentNote8 = rest;
	$(document).on('click', '.note8', function(){
		var clickedOn = $(this);
		currentNote8 = noteSelect(7, clickedOn, previousNote8, currentNote8);
		previousNote8 = clickedOn;
	});





	// $(document).on('click', '.note1', function(){
		
	// 	var thisNote = $(this).closest('.note').attr('name')
	// 	if (song[0] !== thisNote) {
	// 		song[0] = thisNote;
	// 	} else {
	// 		song[0] = rest;
	// 	}
	// 	$(this).toggleClass('on');
		
	// 	if ($(this) === previousNote1) {
	// 		$(this).toggleClass('on');
	// 	}

	// 	previousNote1 = $(this);
	// 	console.log('previousNote1 test: ', previousNote1);
	// 	console.log('song[0]', song[0]);
	// })












});